"""NEXUS AI Mission Control — Message Bus

In-memory event store with WebSocket fan-out for the real-time dashboard.
"""

from __future__ import annotations

import logging
from collections import deque
from datetime import datetime, timedelta
from typing import Optional

from fastapi import WebSocket

from .config import MAX_MESSAGES
from .models import SessionEvent, SessionEventType, SessionStats, WSEvent

logger = logging.getLogger(__name__)


class MessageBus:
    """Central event broker.

    * Stores the last *MAX_MESSAGES* ``SessionEvent`` objects in a ring buffer.
    * Maintains a live set of WebSocket connections and broadcasts every new
      event to all of them.
    * Tracks running aggregate stats surfaced by the dashboard.
    """

    def __init__(self) -> None:
        self.events: deque[SessionEvent] = deque(maxlen=MAX_MESSAGES)
        self.active_connections: list[WebSocket] = []
        self.stats = SessionStats()
        self.active_agent_codes: set[str] = set()
        self._agent_last_seen: dict[str, float] = {}
        self._active_timeout = 300.0

    # ------------------------------------------------------------------
    # WebSocket lifecycle
    # ------------------------------------------------------------------

    async def connect(self, ws: WebSocket) -> None:
        """Register an already-accepted WebSocket for fan-out."""
        self.active_connections.append(ws)
        logger.info(
            "WebSocket connected (%d total)", len(self.active_connections)
        )

    def disconnect(self, ws: WebSocket) -> None:
        """Remove a WebSocket from the fan-out list."""
        if ws in self.active_connections:
            self.active_connections.remove(ws)
        logger.info(
            "WebSocket disconnected (%d remaining)",
            len(self.active_connections),
        )

    def _prune_stale_agents(self) -> None:
        """Remove agent codes not seen in the last _active_timeout seconds."""
        import time
        now = time.time()
        stale = [code for code, ts in self._agent_last_seen.items()
                 if now - ts > self._active_timeout]
        for code in stale:
            self.active_agent_codes.discard(code)
            del self._agent_last_seen[code]

    # ------------------------------------------------------------------
    # Publishing
    # ------------------------------------------------------------------

    async def publish_session_event(self, event: SessionEvent) -> None:
        """Append a session event to the store, update stats, and fan-out."""
        self.events.append(event)

        # Update aggregate stats
        self.stats.session_events = len(self.events)
        if event.type == SessionEventType.TOOL_CALL:
            self.stats.tools_called += 1
        if event.type == SessionEventType.FILE_CHANGE:
            self.stats.files_changed += 1
        if event.type == SessionEventType.THINKING:
            self.stats.thinking_blocks += 1
        total_tokens = event.input_tokens + event.output_tokens + event.cache_read_tokens
        if total_tokens > 0:
            self.stats.tokens_used += total_tokens
        if event.model:
            self.stats.model = event.model

        # Track active agents
        if event.from_code:
            import time
            self.active_agent_codes.add(event.from_code)
            self._agent_last_seen[event.from_code] = time.time()
        self._prune_stale_agents()

        # Track token totals
        if event.input_tokens > 0:
            self.stats.input_tokens_total += event.input_tokens
        if event.output_tokens > 0:
            self.stats.output_tokens_total += event.output_tokens
        if event.cache_read_tokens > 0:
            self.stats.cache_tokens_total += event.cache_read_tokens

        # Broadcast the new event
        await self.broadcast(WSEvent(
            event="session_event",
            data=event.model_dump(mode="json"),
        ))

        # Follow up with refreshed stats (inject active agent codes)
        stats_data = self.stats.model_dump()
        stats_data["active_agent_codes"] = sorted(self.active_agent_codes)
        await self.broadcast(WSEvent(
            event="stats",
            data=stats_data,
        ))

    # ------------------------------------------------------------------
    # Broadcasting
    # ------------------------------------------------------------------

    async def broadcast(self, event: WSEvent) -> None:
        """Send a JSON-serialised WSEvent to every connected WebSocket.

        Disconnected / errored sockets are silently removed so a single
        bad client never blocks the rest of the fan-out.
        """
        if not self.active_connections:
            return

        payload = event.model_dump_json()
        stale: list[WebSocket] = []

        for ws in self.active_connections:
            try:
                await ws.send_text(payload)
            except Exception:
                stale.append(ws)

        for ws in stale:
            self.disconnect(ws)

    # ------------------------------------------------------------------
    # Queries
    # ------------------------------------------------------------------

    def get_events(
        self,
        limit: int = 50,
        offset: int = 0,
        type_filter: Optional[str] = None,
        search: Optional[str] = None,
        dept_filter: Optional[str] = None,
        agents: Optional[dict] = None,
    ) -> list[SessionEvent]:
        """Return events from the store with optional filtering.

        *type_filter* matches ``SessionEvent.type`` value (e.g. ``"tool_call"``).
        *search* matches against subject, body, or tool_name (case-insensitive).
        *dept_filter* matches agent department_id via from_code lookup.
        Results are returned newest-first.
        """
        filtered: list[SessionEvent] = []
        search_lower = search.lower() if search else None

        for evt in reversed(self.events):
            if type_filter and evt.type.value != type_filter:
                continue
            if search_lower:
                haystack = f"{evt.subject} {evt.body} {evt.tool_name}".lower()
                if search_lower not in haystack:
                    continue
            if dept_filter and agents:
                if not evt.from_code:
                    continue
                agent = agents.get(evt.from_code)
                if not agent or getattr(agent, 'department_id', '') != dept_filter:
                    continue
            filtered.append(evt)

        return filtered[offset : offset + limit]

    def get_stats(self) -> SessionStats:
        """Return a fresh copy of aggregate dashboard stats."""
        self.stats.session_events = len(self.events)
        return self.stats.model_copy()

    # ------------------------------------------------------------------
    # Internal helpers
    # ------------------------------------------------------------------

    async def _send_safe(self, ws: WebSocket, event: WSEvent) -> None:
        """Send to a single socket, swallowing errors."""
        try:
            await ws.send_text(event.model_dump_json())
        except Exception:
            self.disconnect(ws)
