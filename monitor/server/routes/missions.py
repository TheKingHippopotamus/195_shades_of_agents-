"""NEXUS AI Mission Control — Session Info Endpoint

Exposes live session monitoring state: which JSONL file is being tailed,
monitor status, model in use, and aggregate counters.
"""

import time

from fastapi import APIRouter, Request

router = APIRouter(prefix="/api/session", tags=["session"])


@router.get("")
async def get_session_info(request: Request) -> dict:
    """Return current session monitoring info."""
    monitor = request.app.state.monitor
    bus = request.app.state.bus
    stats = bus.get_stats()

    jsonl_file = str(monitor._current_file) if monitor._current_file else ""
    duration = time.time() - monitor._start_time if monitor._start_time else 0.0

    return {
        "jsonl_file": jsonl_file,
        "monitor_status": stats.monitor_status,
        "model": stats.model,
        "session_duration_seconds": round(duration, 1),
        "events_processed": stats.session_events,
        "tools_called": stats.tools_called,
        "tokens_used": stats.tokens_used,
        "files_changed": stats.files_changed,
        "thinking_blocks": stats.thinking_blocks,
    }
