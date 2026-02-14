"""NEXUS AI Mission Control — Dashboard & Monitor Control Endpoints"""

from fastapi import APIRouter, Request

from ..models import SessionStats

router = APIRouter(tags=["dashboard"])


@router.get("/api/stats", response_model=SessionStats)
async def get_stats(request: Request) -> SessionStats:
    """Return current dashboard statistics from the message bus."""
    bus = request.app.state.bus
    return bus.get_stats()
