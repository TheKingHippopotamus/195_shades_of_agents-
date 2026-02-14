"""NEXUS AI Mission Control — Pydantic Models"""

from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import Optional

from pydantic import BaseModel, Field


class SessionEventType(str, Enum):
    THINKING = "thinking"
    TEXT = "text"
    TOOL_CALL = "tool_call"
    TOOL_RESULT = "tool_result"
    USER_MESSAGE = "user_msg"
    SYSTEM = "system"
    FILE_CHANGE = "file_change"


class AgentPersonal(BaseModel):
    nickname: str = ""
    age: int = 0
    about_me: str = ""
    what_i_bring: str = ""
    my_strengths: str = ""
    my_weaknesses: str = ""
    working_with_me: str = ""


class AgentProfile(BaseModel):
    agent_number: int
    code: str
    role: str
    department: str
    department_id: str
    department_color: str = "#6366f1"
    reports_to: str = ""
    tier: str = ""
    personality_snippet: str = ""
    personal: AgentPersonal = Field(default_factory=AgentPersonal)
    status: str = "idle"


class SessionEvent(BaseModel):
    id: str
    type: SessionEventType
    timestamp: datetime
    subject: str = ""
    body: str = ""
    thinking: str = ""
    tool_name: str = ""
    tool_input: dict = Field(default_factory=dict)
    file_path: str = ""
    parent_uuid: str = ""
    input_tokens: int = 0
    output_tokens: int = 0
    cache_read_tokens: int = 0
    model: str = ""
    duration_ms: int = 0
    from_code: str = ""
    from_nickname: str = ""


class SessionStats(BaseModel):
    total_agents: int = 195
    session_events: int = 0
    tools_called: int = 0
    tokens_used: int = 0
    files_changed: int = 0
    thinking_blocks: int = 0
    monitor_status: str = "IDLE"
    model: str = ""
    active_agent_codes: list[str] = Field(default_factory=list)
    input_tokens_total: int = 0
    output_tokens_total: int = 0
    cache_tokens_total: int = 0


class WSEvent(BaseModel):
    """WebSocket event wrapper"""
    event: str  # "session_event", "stats", "agent_status"
    data: dict
