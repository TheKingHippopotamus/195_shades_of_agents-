"""NEXUS AI Mission Control — Agent Endpoints"""

from __future__ import annotations

from typing import Optional

from fastapi import APIRouter, HTTPException, Query, Request

from ..models import AgentProfile

router = APIRouter(prefix="/api/agents", tags=["agents"])


@router.get("", response_model=list[AgentProfile])
async def list_agents(
    request: Request,
    department: Optional[str] = Query(None, description="Filter by department id"),
    tier: Optional[str] = Query(None, description="Filter by tier string"),
) -> list[AgentProfile]:
    """Return all agent profiles, optionally filtered by department or tier."""
    agents: dict[str, AgentProfile] = request.app.state.agents
    results = list(agents.values())

    if department:
        results = [a for a in results if a.department_id == department]
    if tier:
        results = [a for a in results if tier.lower() in a.tier.lower()]

    results.sort(key=lambda a: a.agent_number)
    return results


@router.get("/{code}", response_model=AgentProfile)
async def get_agent(request: Request, code: str) -> AgentProfile:
    """Return a single agent profile by code (case-insensitive)."""
    agents: dict[str, AgentProfile] = request.app.state.agents
    lookup = code.upper()

    agent = agents.get(lookup)
    if not agent:
        # Fallback: linear scan for case-insensitive match
        for key, profile in agents.items():
            if key.upper() == lookup:
                agent = profile
                break

    if not agent:
        raise HTTPException(status_code=404, detail=f"Agent '{code}' not found")
    return agent


@router.get("/{code}/messages")
async def get_agent_messages(
    request: Request,
    code: str,
    limit: int = Query(20, ge=1, le=200),
) -> list[dict]:
    """Return recent session events involving this agent (by from_code)."""
    agents: dict[str, AgentProfile] = request.app.state.agents
    lookup = code.upper()

    # Verify agent exists
    if lookup not in agents:
        found = False
        for key in agents:
            if key.upper() == lookup:
                lookup = key
                found = True
                break
        if not found:
            raise HTTPException(status_code=404, detail=f"Agent '{code}' not found")

    bus = request.app.state.bus
    all_events = bus.get_events(limit=500)

    # Filter events where this agent is referenced
    relevant = [
        e for e in all_events
        if e.from_code.upper() == lookup
    ]

    return [e.model_dump(mode="json") for e in relevant[:limit]]
