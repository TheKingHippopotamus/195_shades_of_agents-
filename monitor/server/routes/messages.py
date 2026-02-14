"""NEXUS AI Mission Control — Session Event Endpoints"""

from __future__ import annotations

from typing import Optional

from fastapi import APIRouter, Query, Request

router = APIRouter(prefix="/api/messages", tags=["messages"])


@router.get("")
async def list_events(
    request: Request,
    limit: int = Query(50, ge=1, le=500),
    offset: int = Query(0, ge=0),
    event_type: Optional[str] = Query(
        None,
        description="Filter by event type (thinking, text, tool_call, tool_result, user_msg, system, file_change)",
    ),
    search: Optional[str] = Query(None, description="Full-text search across subject, body, tool_name"),
    department: Optional[str] = Query(None, description="Filter by department id"),
) -> dict:
    """Return session events from the bus with optional filtering."""
    bus = request.app.state.bus
    events = bus.get_events(
        limit=limit,
        offset=offset,
        type_filter=event_type,
        search=search,
        dept_filter=department,
        agents=request.app.state.agents,
    )

    return {
        "total": len(events),
        "offset": offset,
        "limit": limit,
        "events": [e.model_dump(mode="json") for e in events],
    }
