"""NEXUS AI Mission Control — Session Monitor

Watches Claude Code JSONL session transcripts in real time and publishes
parsed events to the MessageBus for live dashboard display.
"""

from __future__ import annotations

import asyncio
import json
import logging
import re
import os
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

from .config import JSONL_DIR, POLL_INTERVAL
from .message_bus import MessageBus
from .models import SessionEvent, SessionEventType

logger = logging.getLogger(__name__)

AGENT_PATH_RE = re.compile(r"agents/\d{2}-[^/]+/(\d{3})-([A-Z0-9-]+)\.md")


class SessionMonitor:
    """Monitors Claude Code JSONL session files for real-time events.

    1. Finds the newest *.jsonl file in JSONL_DIR.
    2. Reads the last ~50 lines on startup as initial history.
    3. Polls every POLL_INTERVAL seconds for new data using file size comparison.
    4. Re-scans for newer JSONL files every 30 seconds.
    5. Handles partial lines with buffering.
    6. Publishes parsed SessionEvents to the MessageBus.
    """

    def __init__(self, bus: MessageBus, agents: dict = None) -> None:
        self.bus = bus
        self._agents = agents or {}
        self._running = False
        self._task: Optional[asyncio.Task] = None
        self._current_file: Optional[Path] = None
        self._file_pos: int = 0
        self._buffer: str = ""
        self._last_dir_scan: float = 0.0
        self._dir_scan_interval: float = 30.0
        self._start_time: float = 0.0
        # Pre-sorted agent codes: longest first to avoid partial matches
        self._agent_codes_sorted = sorted(
            self._agents.keys(), key=lambda c: -len(c)
        )

    # ------------------------------------------------------------------
    # Lifecycle
    # ------------------------------------------------------------------

    async def start(self) -> None:
        """Start the monitor loop as a background task."""
        import time as _time
        if self._running:
            return
        self._running = True
        self._start_time = _time.time()
        self.bus.stats.monitor_status = "SCANNING"

        # Find initial file and load history
        self._current_file = self._find_newest_jsonl()
        if self._current_file:
            logger.info("Monitoring JSONL file: %s", self._current_file)
            self.bus.stats.monitor_status = "LIVE"
            await self._load_initial_history()
        else:
            logger.warning("No JSONL files found in %s", JSONL_DIR)
            self.bus.stats.monitor_status = "WAITING"

        self._task = asyncio.create_task(self._poll_loop())
        logger.info("Session monitor started")

    async def stop(self) -> None:
        """Gracefully stop the monitor loop."""
        self._running = False
        if self._task:
            self._task.cancel()
            try:
                await self._task
            except asyncio.CancelledError:
                pass
            self._task = None
        self.bus.stats.monitor_status = "STOPPED"
        logger.info("Session monitor stopped")

    # ------------------------------------------------------------------
    # Directory scanning
    # ------------------------------------------------------------------

    def _find_newest_jsonl(self) -> Optional[Path]:
        """Find the most recently modified *.jsonl file in JSONL_DIR."""
        if not JSONL_DIR.is_dir():
            return None

        jsonl_files = list(JSONL_DIR.glob("*.jsonl"))
        if not jsonl_files:
            return None

        return max(jsonl_files, key=lambda f: f.stat().st_mtime)

    def _check_for_newer_file(self) -> bool:
        """Re-scan directory for a newer JSONL file. Returns True if switched."""
        newest = self._find_newest_jsonl()
        if newest and newest != self._current_file:
            logger.info("Switching to newer JSONL file: %s", newest)
            self._current_file = newest
            self._file_pos = 0
            self._buffer = ""
            return True
        return False

    def _lookup_agent(self, code: str) -> tuple:
        """Look up agent code and nickname from the agents registry."""
        agent = self._agents.get(code)
        if agent:
            personal = getattr(agent, 'personal', None)
            nickname = ""
            if personal:
                nickname = getattr(personal, 'nickname', "") or ""
            logger.debug("Agent detected: code=%s, nickname=%s", code, nickname)
            return (code, nickname)
        return ("", "")

    def _detect_agent_from_path(self, file_path: str) -> tuple:
        """Extract agent code and nickname from a file path like agents/01-.../001-CEO.md"""
        if not file_path:
            return ("", "")
        match = AGENT_PATH_RE.search(file_path)
        if not match:
            return ("", "")
        return self._lookup_agent(match.group(2))

    def _detect_agent_from_text(self, text: str) -> tuple:
        """Search a text string for agent file paths or known agent codes.

        Checks for:
        1. Agent file path patterns (agents/01-.../001-CEO.md)
        2. Known agent codes as whole words (longest match first)
        """
        if not text:
            return ("", "")
        # First try regex match on agent file paths
        match = AGENT_PATH_RE.search(text)
        if match:
            return self._lookup_agent(match.group(2))
        # Then try to find any known agent code as a whole word
        # Codes are sorted longest-first to prevent partial matches
        for code in self._agent_codes_sorted:
            if len(code) >= 3 and re.search(r'\b' + re.escape(code) + r'\b', text):
                return self._lookup_agent(code)
        return ("", "")

    # ------------------------------------------------------------------
    # Initial history loading
    # ------------------------------------------------------------------

    async def _load_initial_history(self) -> None:
        """Read the last ~50 lines from the current file as startup history."""
        if not self._current_file or not self._current_file.exists():
            return

        try:
            with open(self._current_file, "r", encoding="utf-8", errors="replace") as f:
                # Read all lines and take the last 50
                all_lines = f.readlines()
                history_lines = all_lines[-50:] if len(all_lines) > 50 else all_lines

                for line in history_lines:
                    line = line.strip()
                    if not line:
                        continue
                    events = self._parse_line(line)
                    for event in events:
                        await self.bus.publish_session_event(event)

                # Set position to end of file for polling
                self._file_pos = f.tell()
        except Exception:
            logger.exception("Error loading initial history from %s", self._current_file)

    # ------------------------------------------------------------------
    # Polling loop
    # ------------------------------------------------------------------

    async def _poll_loop(self) -> None:
        """Core polling loop — check for new data, parse, publish."""
        import time

        self._last_dir_scan = time.monotonic()

        while self._running:
            try:
                now = time.monotonic()

                # Re-scan directory for newer files every 30s
                if now - self._last_dir_scan >= self._dir_scan_interval:
                    self._last_dir_scan = now
                    if self._check_for_newer_file():
                        self.bus.stats.monitor_status = "LIVE"
                        await self._load_initial_history()
                        continue

                    # If we still have no file, keep waiting
                    if not self._current_file:
                        newest = self._find_newest_jsonl()
                        if newest:
                            self._current_file = newest
                            self.bus.stats.monitor_status = "LIVE"
                            await self._load_initial_history()
                            continue

                # Poll current file for new data
                if self._current_file and self._current_file.exists():
                    await self._read_new_data()

                await asyncio.sleep(POLL_INTERVAL)

            except asyncio.CancelledError:
                break
            except Exception:
                logger.exception("Error in session monitor poll loop")
                await asyncio.sleep(2.0)

    async def _read_new_data(self) -> None:
        """Read new bytes from the file since last position, parse complete lines."""
        if not self._current_file:
            return

        try:
            file_size = os.stat(self._current_file).st_size
        except OSError:
            return

        if file_size <= self._file_pos:
            return

        try:
            with open(self._current_file, "r", encoding="utf-8", errors="replace") as f:
                f.seek(self._file_pos)
                new_data = f.read()
                self._file_pos = f.tell()
        except OSError:
            return

        # Append to buffer and process complete lines
        self._buffer += new_data
        lines = self._buffer.split("\n")

        # Last element is either empty (complete line) or partial (incomplete)
        self._buffer = lines[-1]

        for line in lines[:-1]:
            line = line.strip()
            if not line:
                continue
            events = self._parse_line(line)
            for event in events:
                await self.bus.publish_session_event(event)

    # ------------------------------------------------------------------
    # JSONL line parsing
    # ------------------------------------------------------------------

    def _parse_line(self, line: str) -> list[SessionEvent]:
        """Parse a single JSONL line into 1..N SessionEvents."""
        try:
            data = json.loads(line)
        except json.JSONDecodeError:
            return []

        line_type = data.get("type", "")
        message = data.get("message", {}) or {}
        ts = self._parse_timestamp(data.get("timestamp"))
        parent_uuid = data.get("parentUuid", "")
        model = message.get("model", "") or ""
        usage = message.get("usage", {}) or {}
        input_tokens = usage.get("input_tokens", 0) or 0
        output_tokens = usage.get("output_tokens", 0) or 0
        cache_read_tokens = usage.get("cache_read_input_tokens", 0) or 0

        events: list[SessionEvent] = []

        if line_type == "assistant":
            events = self._parse_assistant(
                message, ts, parent_uuid, model,
                input_tokens, output_tokens, cache_read_tokens,
            )
        elif line_type == "user":
            events = self._parse_user(
                message, ts, parent_uuid, model,
                input_tokens, output_tokens, cache_read_tokens,
            )
        elif line_type == "file-history-snapshot":
            events.append(SessionEvent(
                id=str(uuid.uuid4()),
                type=SessionEventType.FILE_CHANGE,
                timestamp=ts,
                subject="File change detected",
                parent_uuid=parent_uuid,
                model=model,
            ))
        # type="progress" — skip

        return events

    def _parse_assistant(
        self,
        message: dict,
        ts: datetime,
        parent_uuid: str,
        model: str,
        input_tokens: int,
        output_tokens: int,
        cache_read_tokens: int,
    ) -> list[SessionEvent]:
        """Parse assistant message blocks into SessionEvents."""
        events: list[SessionEvent] = []
        content = message.get("content", [])
        if not isinstance(content, list):
            return events

        for block in content:
            if not isinstance(block, dict):
                continue
            block_type = block.get("type", "")

            if block_type == "thinking":
                thinking_text = block.get("thinking", "") or ""
                events.append(SessionEvent(
                    id=str(uuid.uuid4()),
                    type=SessionEventType.THINKING,
                    timestamp=ts,
                    subject="Claude is reasoning...",
                    body=thinking_text[:200] if thinking_text else "",
                    thinking=thinking_text[:200] if thinking_text else "",
                    parent_uuid=parent_uuid,
                    model=model,
                    input_tokens=input_tokens,
                    output_tokens=output_tokens,
                    cache_read_tokens=cache_read_tokens,
                ))
                # Only assign tokens to the first block
                input_tokens = 0
                output_tokens = 0
                cache_read_tokens = 0

            elif block_type == "text":
                text = block.get("text", "") or ""
                events.append(SessionEvent(
                    id=str(uuid.uuid4()),
                    type=SessionEventType.TEXT,
                    timestamp=ts,
                    subject=text[:100] if text else "",
                    body=text,
                    parent_uuid=parent_uuid,
                    model=model,
                    input_tokens=input_tokens,
                    output_tokens=output_tokens,
                    cache_read_tokens=cache_read_tokens,
                ))
                input_tokens = 0
                output_tokens = 0
                cache_read_tokens = 0

            elif block_type == "tool_use":
                tool_name = block.get("name", "unknown")
                tool_input = block.get("input", {}) or {}
                # Build a short summary for the subject
                subject = self._tool_call_summary(tool_name, tool_input)
                file_path = self._extract_file_path(tool_input)

                # Detect agent from file path (direct match)
                from_code, from_nickname = self._detect_agent_from_path(file_path)

                # If no match, scan all string values for agent path patterns
                if not from_code:
                    for val in tool_input.values():
                        if isinstance(val, str) and val:
                            from_code, from_nickname = self._detect_agent_from_text(val)
                            if from_code:
                                break

                events.append(SessionEvent(
                    id=str(uuid.uuid4()),
                    type=SessionEventType.TOOL_CALL,
                    timestamp=ts,
                    subject=subject,
                    tool_name=tool_name,
                    tool_input=tool_input,
                    file_path=file_path,
                    parent_uuid=parent_uuid,
                    model=model,
                    input_tokens=input_tokens,
                    output_tokens=output_tokens,
                    cache_read_tokens=cache_read_tokens,
                    from_code=from_code,
                    from_nickname=from_nickname,
                ))
                input_tokens = 0
                output_tokens = 0
                cache_read_tokens = 0

        return events

    def _parse_user(
        self,
        message: dict,
        ts: datetime,
        parent_uuid: str,
        model: str,
        input_tokens: int,
        output_tokens: int,
        cache_read_tokens: int,
    ) -> list[SessionEvent]:
        """Parse user message into SessionEvents."""
        events: list[SessionEvent] = []
        content = message.get("content", "")

        if isinstance(content, str):
            # Simple text message from the user
            if content.strip():
                events.append(SessionEvent(
                    id=str(uuid.uuid4()),
                    type=SessionEventType.USER_MESSAGE,
                    timestamp=ts,
                    subject=content[:100],
                    body=content,
                    parent_uuid=parent_uuid,
                    model=model,
                    input_tokens=input_tokens,
                    output_tokens=output_tokens,
                    cache_read_tokens=cache_read_tokens,
                ))
        elif isinstance(content, list):
            for block in content:
                if not isinstance(block, dict):
                    continue
                block_type = block.get("type", "")

                if block_type == "tool_result":
                    tool_name = block.get("tool_use_id", "")
                    result_content = block.get("content", "")
                    if isinstance(result_content, list):
                        # Extract text from content blocks
                        texts = [b.get("text", "") for b in result_content if isinstance(b, dict)]
                        result_content = "\n".join(texts)
                    elif not isinstance(result_content, str):
                        result_content = str(result_content)

                    events.append(SessionEvent(
                        id=str(uuid.uuid4()),
                        type=SessionEventType.TOOL_RESULT,
                        timestamp=ts,
                        subject=f"Result: {result_content[:80]}" if result_content else "Tool result",
                        body=result_content[:500] if result_content else "",
                        tool_name=tool_name,
                        parent_uuid=parent_uuid,
                        model=model,
                        input_tokens=input_tokens,
                        output_tokens=output_tokens,
                        cache_read_tokens=cache_read_tokens,
                    ))
                    input_tokens = 0
                    output_tokens = 0
                    cache_read_tokens = 0

                elif block_type == "text":
                    text = block.get("text", "") or ""
                    if text.strip():
                        events.append(SessionEvent(
                            id=str(uuid.uuid4()),
                            type=SessionEventType.USER_MESSAGE,
                            timestamp=ts,
                            subject=text[:100],
                            body=text,
                            parent_uuid=parent_uuid,
                            model=model,
                            input_tokens=input_tokens,
                            output_tokens=output_tokens,
                            cache_read_tokens=cache_read_tokens,
                        ))
                        input_tokens = 0
                        output_tokens = 0
                        cache_read_tokens = 0

        return events

    # ------------------------------------------------------------------
    # Helpers
    # ------------------------------------------------------------------

    @staticmethod
    def _parse_timestamp(ts_str) -> datetime:
        """Parse an ISO timestamp string, falling back to utcnow."""
        if not ts_str:
            return datetime.now(timezone.utc)
        try:
            if isinstance(ts_str, str):
                # Handle ISO format with or without timezone
                return datetime.fromisoformat(ts_str.replace("Z", "+00:00"))
        except (ValueError, TypeError):
            pass
        return datetime.now(timezone.utc)

    @staticmethod
    def _tool_call_summary(tool_name: str, tool_input: dict) -> str:
        """Build a short human-readable summary for a tool call."""
        # Try to extract a file path for file-related tools
        for key in ("file_path", "path", "filename", "file", "notebook_path"):
            if key in tool_input:
                return f"{tool_name}: {tool_input[key]}"
        # For bash/command tools
        if "command" in tool_input:
            cmd = tool_input["command"]
            return f"{tool_name}: {cmd[:80]}"
        # For search tools
        if "pattern" in tool_input:
            return f"{tool_name}: {tool_input['pattern'][:60]}"
        # Generic
        return tool_name

    @staticmethod
    def _extract_file_path(tool_input: dict) -> str:
        """Extract a file path from tool input if present."""
        for key in ("file_path", "path", "filename", "file", "notebook_path"):
            if key in tool_input and isinstance(tool_input[key], str):
                return tool_input[key]
        return ""
