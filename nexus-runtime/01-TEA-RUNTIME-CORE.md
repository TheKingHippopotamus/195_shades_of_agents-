# TEA Runtime Core -- NEXUS AI Runtime Infrastructure v2.0

> **Author:** CTO (Agent 002) -- Blueprint
> **Date:** 2026-02-19
> **Status:** Specification + Reference Implementation
> **Supersedes:** `10-AGENT-SYSTEM-PROMPT-LOADER.md` (NexusPromptLoader v1)
> **Research Basis:** AgentOrchestra/TEA Protocol (2506.12508), Orchestral AI (2601.02577), LLM-Enabled MAS Design Patterns (2601.03328)

---

## Table of Contents

1. [TEA Architecture Overview](#1-tea-architecture-overview)
2. [Agent Registry v2](#2-agent-registry-v2)
3. [Tool Registry](#3-tool-registry)
4. [Session Management](#4-session-management)
5. [Execution Tracer](#5-execution-tracer)
6. [Cost Tracker](#6-cost-tracker)
7. [Self-Evolution Module](#7-self-evolution-module)
8. [Python Code -- Reference Implementation](#8-python-code--reference-implementation)
9. [API Design](#9-api-design)
10. [Migration Path](#10-migration-path)

---

## 1. TEA Architecture Overview

### 1.1 Design Philosophy

The TEA (Tool-Environment-Agent) Runtime transforms NEXUS AI from a static prompt library into a live, orchestrated multi-agent system. The core insight from the TEA Protocol paper is that tools, environments, and agents should be **first-class, versioned components with explicit lifecycles** -- not static config files bolted onto an LLM.

NEXUS AI v1 (NexusPromptLoader) treated agents as prompt strings and projects as dictionaries. TEA Runtime v2 treats every component as a managed entity with:

- **Identity** -- unique name, code, version, lineage
- **Lifecycle** -- pending, active, idle, overloaded, retired
- **Versioning** -- every prompt/tool/config change creates an immutable version
- **Traceability** -- every action is recorded for audit, debugging, and learning
- **Cost awareness** -- every LLM call is tracked with token counts and dollar costs

### 1.2 Architectural Layers

```
+=====================================================================+
|                     NEXUS TEA RUNTIME v2.0                          |
+=====================================================================+
|                                                                     |
|  LAYER 4: ORCHESTRATION                                             |
|  +---------------------------------------------------------------+  |
|  | Planning Agent | Hierarchical Routing | Protocol Transforms   |  |
|  | (A2T, T2A, E2T, T2E, A2E, E2A)                               |  |
|  +---------------------------------------------------------------+  |
|                                                                     |
|  LAYER 3: CORE PROTOCOLS                                            |
|  +-------------------+-------------------+-----------------------+  |
|  | Agent Context     | Tool Context      | Environment Context   |  |
|  | Protocol (ACP)    | Protocol (TCP)    | Protocol (ECP)        |  |
|  | - AgentRegistry   | - ToolRegistry    | - EnvironmentRegistry |  |
|  | - AgentConfig     | - ToolConfig      | - EnvConfig           |  |
|  | - Lifecycle Mgmt  | - Schema Gen      | - State Mgmt          |  |
|  +-------------------+-------------------+-----------------------+  |
|                                                                     |
|  LAYER 2: BASIC MANAGERS                                            |
|  +-----------+-----------+-----------+-----------+---+---+          |
|  |  Model    |  Prompt   |  Session  | Execution | V | C |          |
|  |  Manager  |  Manager  |  Manager  |  Tracer   | M | T |          |
|  +-----------+-----------+-----------+-----------+---+---+          |
|  VM = Version Manager, CT = Cost Tracker                            |
|                                                                     |
|  LAYER 1: FOUNDATION                                                |
|  +---------------------------------------------------------------+  |
|  | NexusPromptLoader v1 (backward compat) | File I/O | Config    |  |
|  +---------------------------------------------------------------+  |
|                                                                     |
+=====================================================================+
```

### 1.3 NEXUS-Specific Adaptations

The TEA Protocol is a general-purpose spec. NEXUS adapts it with:

- **195 pre-registered agents** loaded from markdown prompt files at startup
- **10-tier hierarchy** embedded in ACP metadata (Tier 0 C-Suite through Tier 9 Special)
- **20-department routing** for hierarchical task delegation
- **13-stage project lifecycle** integrated into session management
- **Governance gates** (Tier 8 agents) as protocol-level checkpoints
- **Reporting chains** (`reports_to` fields) modeled as ACP relationship graphs

### 1.4 Key Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Async model | `asyncio` coroutines | TEA Protocol mandates coroutine-based execution for concurrent agent coordination |
| Storage | JSON files + SQLite | JSON for config portability, SQLite for traces/sessions (no external DB dependency) |
| LLM abstraction | Provider-agnostic wrapper | Support Claude, GPT, Gemini without code changes (per Orchestral pattern) |
| Agent loading | Extend NexusPromptLoader | Backward compatible; v1 users get v2 features without migration |
| Versioning | Semantic versioning (major.minor.patch) | Per TEA spec; auto-increment on prompt/config changes |
| Embedding retrieval | FAISS or simple cosine similarity | Semantic agent/tool discovery at scale |

---

## 2. Agent Registry v2

### 2.1 Overview

The Agent Registry v2 replaces the simple `dict[str, Agent]` from NexusPromptLoader v1 with a full Agent Context Protocol (ACP) implementation. Every agent is a versioned, lifecycle-managed entity.

### 2.2 Agent Data Model

```python
@dataclass
class AgentIdentity:
    """Immutable identity of a NEXUS agent."""
    number: int               # 001-195
    code: str                 # e.g. "CTO", "SR-FE-REACT"
    name: str                 # e.g. "Chief Technology Officer"
    department: str           # e.g. "Executive Leadership"
    department_number: int    # 1-20
    reports_to: str           # manager agent code
    tier: int                 # 0-9
    tier_label: str           # e.g. "C-Suite", "Senior IC"


@dataclass
class AgentCapability:
    """Declared capabilities for semantic matching."""
    domains: list[str]        # e.g. ["frontend", "react", "typescript"]
    tools: list[str]          # tools this agent can use
    can_decide: list[str]     # autonomous decision scope
    must_escalate: list[str]  # escalation triggers
    max_concurrent: int       # max simultaneous projects


@dataclass
class AgentVersion:
    """Immutable snapshot of an agent's configuration."""
    version: str              # semantic version "1.0.0"
    system_prompt: str        # full prompt text
    capabilities: AgentCapability
    created_at: datetime
    created_by: str           # "system" or agent code that evolved it
    change_description: str
    prompt_hash: str          # SHA-256 of system_prompt for diff detection


@dataclass
class AgentState:
    """Mutable runtime state of an agent."""
    status: str               # "inactive", "active", "idle", "overloaded", "retired"
    current_sessions: list[str]  # active session IDs
    total_invocations: int
    total_tokens_used: int
    total_cost_usd: float
    last_active: Optional[datetime]
    error_count: int
    avg_latency_ms: float


@dataclass
class AgentRecord:
    """Complete agent record in the registry."""
    identity: AgentIdentity
    state: AgentState
    current_version: AgentVersion
    version_history: list[AgentVersion]
    file_path: str            # source .md file
    relationships: dict       # graph edges: direct_reports, peers, cross-dept
    metadata: dict            # arbitrary extensible metadata
```

### 2.3 Registry Operations

| Operation | Description | v1 Equivalent |
|-----------|-------------|---------------|
| `register(agent)` | Add agent to registry with version 1.0.0 | `_extract_agents()` |
| `get(code)` | Get agent by code | `get_agent()` |
| `get_by_number(n)` | Get agent by number | `get_agent_by_number()` |
| `list(filters)` | Filter by dept, tier, status, capability | `list_agents()` |
| `activate(code, session_id)` | Set status=active, add session | `agent.activate()` |
| `deactivate(code, session_id)` | Remove session, maybe set idle | `agent.deactivate()` |
| `update_prompt(code, new_prompt)` | Create new version, preserve history | N/A |
| `retrieve(query, top_k)` | Semantic search over agent descriptions | N/A |
| `get_chain(code)` | Return full reporting chain to CEO | N/A |
| `get_department(dept)` | All agents in a department | N/A |
| `export(format)` | Export registry as JSON/YAML | `export_registry()` |
| `health_check()` | Status of all agents, flag overloaded | `system_status()` |
| `version_history(code)` | All versions of an agent's prompt | N/A |
| `rollback(code, version)` | Restore agent to a previous version | N/A |

### 2.4 Lifecycle State Machine

```
                    register()
    [not exists] ───────────────> [inactive]
                                     |
                            activate(session)
                                     |
                                     v
                                 [active] <──── reactivate()
                                /    |    \
                     idle_timeout    |    overload_threshold
                          /          |          \
                         v           |           v
                     [idle]          |      [overloaded]
                         \           |          /
                          \     deactivate()   /
                           \         |        /
                            v        v       v
                             [inactive]
                                  |
                             retire()
                                  |
                                  v
                             [retired]
```

**State Transitions:**
- `inactive -> active`: Agent assigned to a session
- `active -> idle`: No activity for `idle_timeout` (default 30 min)
- `active -> overloaded`: `current_sessions` exceeds `max_concurrent`
- `idle -> active`: New session assignment
- `active/idle/overloaded -> inactive`: All sessions removed
- `inactive -> retired`: Agent permanently decommissioned

---

## 3. Tool Registry

### 3.1 Overview

The Tool Registry implements the Tool Context Protocol (TCP) -- a managed registry of all tools that NEXUS agents can access, with permission levels by tier and semantic retrieval.

### 3.2 Tool Data Model

```python
@dataclass
class ToolDefinition:
    """Definition of a tool available to agents."""
    name: str                 # unique identifier e.g. "code_execute"
    description: str          # natural language description
    category: str             # "code", "search", "file", "api", "analysis"
    parameters: dict          # JSON Schema for input parameters
    returns: dict             # JSON Schema for return value
    min_tier: int             # minimum agent tier that can use this (0=any)
    max_tier: int             # maximum tier (9=any)
    departments: list[str]    # departments that can access (empty=all)
    requires_approval: bool   # requires human-in-the-loop approval
    is_destructive: bool      # can modify external state
    timeout_ms: int           # max execution time
    evolvable: bool           # can be optimized by self-evolution


@dataclass
class ToolVersion:
    """Versioned snapshot of a tool implementation."""
    version: str
    source_code: str          # Python source implementing the tool
    schema_fc: dict           # function-calling schema (OpenAI format)
    schema_text: str          # natural language description
    schema_args: dict         # Pydantic model schema
    created_at: datetime
    change_description: str


@dataclass
class ToolRecord:
    """Complete tool record in the registry."""
    definition: ToolDefinition
    current_version: ToolVersion
    version_history: list[ToolVersion]
    usage_count: int
    avg_latency_ms: float
    error_rate: float
    last_used: Optional[datetime]
```

### 3.3 Permission Model

Tools are gated by agent tier, department, and approval requirements:

```
Tier 0 (C-Suite):      All tools, no approval needed
Tier 1 (VPs):          All tools, no approval needed
Tier 2 (Directors):    All tools, destructive tools need approval
Tier 3 (Managers):     Department tools + shared tools
Tier 4 (Staff+ ICs):   Department tools + shared tools
Tier 5 (Senior ICs):   Department tools + shared tools
Tier 6 (Mid ICs):      Department tools, destructive tools blocked
Tier 7 (Junior ICs):   Safe tools only, all destructive blocked
Tier 8 (Governance):   Governance tools + read-only access to all
Tier 9 (Special):      Context-dependent, per-agent configuration
```

### 3.4 Built-in Tool Categories

| Category | Examples | Permission |
|----------|----------|------------|
| `code` | Execute Python, Run tests, Lint code | Tier 0-7 |
| `search` | Web search, Codebase search, Doc search | All tiers |
| `file` | Read file, Write file, Create directory | Tier 0-6 (write: 0-4) |
| `api` | HTTP request, GraphQL query, gRPC call | Tier 0-5 |
| `database` | SQL query, Schema inspect, Migration | Tier 0-4 |
| `git` | Commit, Push, PR create, Branch | Tier 0-5 |
| `deploy` | Build, Deploy, Rollback | Tier 0-2 |
| `communicate` | Send message, Broadcast, Escalate | All tiers |
| `governance` | Approve, Reject, Review, Gate check | Tier 8 only |
| `analysis` | Data analysis, Visualization, Report | All tiers |

---

## 4. Session Management

### 4.1 Overview

Sessions represent client project engagements. They bind agents, tools, and environments into a coherent execution context with checkpointing and resumption support.

### 4.2 Session Data Model

```python
@dataclass
class SessionConfig:
    """Configuration for a client project session."""
    session_id: str           # "SES-20260219-001"
    project_name: str
    project_type: str         # "A" through "I" per MVT classification
    client: str
    budget_usd: float
    lifecycle_stage: int      # 1-13 per project lifecycle map
    created_at: datetime
    updated_at: datetime
    status: str               # "active", "paused", "completed", "cancelled"


@dataclass
class SessionState:
    """Mutable state of a running session."""
    active_agents: list[str]  # agent codes currently working
    conversation_history: list[dict]  # full message log
    artifacts: list[dict]     # files, PRDs, code produced
    checkpoints: list[dict]   # resumable snapshots
    total_tokens: int
    total_cost_usd: float
    total_agent_invocations: int
    current_task: Optional[str]
    error_log: list[dict]


@dataclass
class SessionCheckpoint:
    """Resumable snapshot of session state."""
    checkpoint_id: str
    session_id: str
    created_at: datetime
    lifecycle_stage: int
    active_agents: list[str]
    conversation_snapshot: list[dict]  # compressed history
    artifacts_snapshot: list[str]      # artifact references
    metadata: dict
```

### 4.3 Session Lifecycle

```
create_session(config)
     |
     v
  [active] -------- pause() -------> [paused]
     |                                    |
     |                               resume()
     |                                    |
     |               <-------------------/
     |
     |--- advance_stage(n) --> update lifecycle_stage
     |--- checkpoint() ------> create SessionCheckpoint
     |--- add_agent(code) ---> activate agent in session
     |--- remove_agent(code) -> deactivate agent from session
     |
     |--- complete() --------> [completed]
     |--- cancel() ----------> [cancelled]
```

### 4.4 Conversation Management

Sessions maintain a structured conversation log compatible with any LLM provider:

```python
@dataclass
class Message:
    """Universal message format (provider-agnostic)."""
    role: str                 # "system", "user", "assistant", "tool"
    content: str
    agent_code: Optional[str]  # which NEXUS agent generated this
    tool_calls: Optional[list[dict]]
    tool_call_id: Optional[str]
    timestamp: datetime
    token_count: int
    cost_usd: float
    session_id: str
    metadata: dict
```

### 4.5 Checkpointing and Resumption

Sessions can be checkpointed at any point and resumed later:

1. **Auto-checkpoint**: After every lifecycle stage transition
2. **Manual checkpoint**: On explicit `session.checkpoint()` call
3. **Crash recovery**: Last checkpoint restored on unexpected termination

Checkpoints serialize: conversation history (compressed), active agent set, artifact references, and session config. They do NOT serialize agent internal state (stateless by design -- agents reconstruct context from conversation history).

---

## 5. Execution Tracer

### 5.1 Overview

The Execution Tracer records every agent action for debugging, audit, compliance, and learning. It implements the TEA Protocol's tracer specification with NEXUS-specific extensions.

### 5.2 Trace Record Model

```python
@dataclass
class TraceRecord:
    """Single execution trace entry."""
    record_id: str            # UUID
    session_id: str
    agent_code: str
    action_type: str          # "llm_call", "tool_invoke", "message_send",
                              # "escalation", "decision", "error"
    timestamp: datetime
    duration_ms: float

    # LLM-specific fields
    model: Optional[str]      # "claude-opus-4-6", "gpt-4.1"
    input_tokens: Optional[int]
    output_tokens: Optional[int]
    cost_usd: Optional[float]

    # Tool-specific fields
    tool_name: Optional[str]
    tool_input: Optional[dict]
    tool_output: Optional[str]
    tool_error: Optional[str]

    # Agent interaction fields
    target_agent: Optional[str]    # agent receiving a message/handoff
    escalation_reason: Optional[str]

    # Context
    observation: Optional[str]     # what the agent saw
    reasoning: Optional[str]       # chain-of-thought (if captured)
    action_taken: Optional[str]    # what the agent decided

    # Quality signals
    success: bool
    error_message: Optional[str]
    parent_record_id: Optional[str]  # for nested traces
    metadata: dict
```

### 5.3 Trace Storage

Traces are stored in SQLite for efficient querying:

```sql
CREATE TABLE traces (
    record_id TEXT PRIMARY KEY,
    session_id TEXT NOT NULL,
    agent_code TEXT NOT NULL,
    action_type TEXT NOT NULL,
    timestamp TEXT NOT NULL,
    duration_ms REAL,
    model TEXT,
    input_tokens INTEGER,
    output_tokens INTEGER,
    cost_usd REAL,
    tool_name TEXT,
    tool_input TEXT,      -- JSON
    tool_output TEXT,
    tool_error TEXT,
    target_agent TEXT,
    escalation_reason TEXT,
    success INTEGER,
    error_message TEXT,
    parent_record_id TEXT,
    metadata TEXT          -- JSON
);

CREATE INDEX idx_traces_session ON traces(session_id);
CREATE INDEX idx_traces_agent ON traces(agent_code);
CREATE INDEX idx_traces_type ON traces(action_type);
CREATE INDEX idx_traces_timestamp ON traces(timestamp);
```

### 5.4 Trace Queries

Common trace queries the runtime supports:

| Query | Use Case |
|-------|----------|
| `traces_by_session(sid)` | Full audit trail for a project |
| `traces_by_agent(code)` | All actions by a specific agent |
| `error_traces(session_id)` | All failures in a session |
| `cost_by_session(sid)` | Total cost breakdown |
| `cost_by_agent(code)` | Agent cost analysis |
| `latency_percentiles(agent)` | P50/P95/P99 latency |
| `tool_usage_stats()` | Most/least used tools |
| `escalation_paths()` | How often agents escalate and to whom |
| `agent_interaction_graph(sid)` | Who talked to whom in a session |

---

## 6. Cost Tracker

### 6.1 Overview

The Cost Tracker monitors token usage, model costs, and per-project billing. Every LLM call is metered, and costs are attributed to sessions, agents, and departments.

### 6.2 Pricing Model

```python
@dataclass
class ModelPricing:
    """Per-model pricing configuration."""
    model_id: str              # "claude-opus-4-6"
    provider: str              # "anthropic"
    input_cost_per_1k: float   # $/1K input tokens
    output_cost_per_1k: float  # $/1K output tokens
    cache_read_per_1k: float   # $/1K cached input tokens
    cache_write_per_1k: float  # $/1K cache write tokens


# Default pricing table (updated 2026-02)
DEFAULT_PRICING = {
    "claude-opus-4-6": ModelPricing(
        model_id="claude-opus-4-6",
        provider="anthropic",
        input_cost_per_1k=0.015,
        output_cost_per_1k=0.075,
        cache_read_per_1k=0.0015,
        cache_write_per_1k=0.01875,
    ),
    "claude-sonnet-4-6": ModelPricing(
        model_id="claude-sonnet-4-6",
        provider="anthropic",
        input_cost_per_1k=0.003,
        output_cost_per_1k=0.015,
        cache_read_per_1k=0.0003,
        cache_write_per_1k=0.00375,
    ),
    "claude-haiku-4-5": ModelPricing(
        model_id="claude-haiku-4-5",
        provider="anthropic",
        input_cost_per_1k=0.001,
        output_cost_per_1k=0.005,
        cache_read_per_1k=0.0001,
        cache_write_per_1k=0.00125,
    ),
    "gpt-4.1": ModelPricing(
        model_id="gpt-4.1",
        provider="openai",
        input_cost_per_1k=0.002,
        output_cost_per_1k=0.008,
        cache_read_per_1k=0.0005,
        cache_write_per_1k=0.002,
    ),
}
```

### 6.3 Cost Attribution

Costs are attributed along three dimensions:

1. **Session** -- total project cost (client-facing billing)
2. **Agent** -- cost per agent (capacity planning)
3. **Department** -- cost per department (budget tracking)

```python
@dataclass
class CostReport:
    """Cost report for a given scope."""
    scope: str                # "session:SES-001", "agent:CTO", "dept:Engineering"
    period_start: datetime
    period_end: datetime
    total_input_tokens: int
    total_output_tokens: int
    total_cost_usd: float
    cost_by_model: dict[str, float]
    cost_by_agent: dict[str, float]   # only for session/dept scope
    cost_by_tool: dict[str, float]
    invocation_count: int
    avg_cost_per_invocation: float
```

### 6.4 Budget Controls

| Control | Description |
|---------|-------------|
| Session budget | Hard cap per project; runtime stops agents when exceeded |
| Agent budget | Per-agent per-session cap; prevents runaway agent loops |
| Department budget | Monthly cap per department |
| Alert thresholds | Warnings at 50%, 80%, 95% of budget |
| Model tier routing | Route to cheaper models for low-priority tasks |

### 6.5 Tiered Model Assignment

Not all agent tasks need the most expensive model. The Cost Tracker works with a model assignment strategy:

| Agent Tier | Default Model | Use Case |
|------------|--------------|----------|
| Tier 0 (C-Suite) | claude-opus-4-6 | Strategic decisions, architecture |
| Tier 1-2 (VP/Director) | claude-opus-4-6 | Planning, reviews, coordination |
| Tier 3-4 (Manager/Staff) | claude-sonnet-4-6 | Implementation, analysis |
| Tier 5 (Senior IC) | claude-sonnet-4-6 | Code generation, specialized work |
| Tier 6-7 (Mid/Junior) | claude-haiku-4-5 | Routine tasks, data entry |
| Tier 8 (Governance) | claude-sonnet-4-6 | Review gates, compliance checks |
| Tier 9 (Special) | claude-sonnet-4-6 | Lifecycle management |

The model can be overridden per-invocation when task complexity demands it.

---

## 7. Self-Evolution Module

### 7.1 Overview

The Self-Evolution Module enables agents to improve their own prompts and tool implementations from production experience. This is the TEA Protocol's most differentiated feature -- a closed feedback loop where execution feedback drives prompt/tool refinement.

### 7.2 What Can Evolve

| Component | How It Evolves | Example |
|-----------|---------------|---------|
| Agent prompts | Refined based on task success/failure patterns | SR-FE-REACT's prompt adds React 19 patterns after repeated questions |
| Tool implementations | Code updated based on error patterns | A database query tool adds connection pooling after timeout errors |
| Routing policies | Agent selection weights adjusted | CTO starts routing mobile tasks to SR-MOB-RN over SR-MOB-NAT |
| Escalation rules | Thresholds tuned based on resolution data | Junior agents escalate less after building confidence |

### 7.3 Evolution Pipeline

```
1. OBSERVE: Tracer records all execution data
       |
2. EVALUATE: Success/failure signals collected
       |
3. DIAGNOSE: LLM analyzes trace to identify improvement opportunities
       |
4. PROPOSE: Generate candidate changes (new prompt version, tool patch)
       |
5. VALIDATE: Test candidate against held-out traces or replay scenarios
       |
6. COMMIT: Register as new version via Version Manager (auto-increment)
       |
7. MONITOR: Track new version's performance vs. baseline
       |
8. ROLLBACK: If new version degrades, revert to previous
```

### 7.4 Evolution Methods

**Self-Reflection:**
- After a session completes, the system reviews the trace
- Identifies: failures, excessive escalations, slow responses, high costs
- Proposes targeted prompt edits to address patterns
- Validates by replaying representative traces with the new prompt
- Commits as a new version if metrics improve

**TextGrad-style Optimization:**
- Treats prompt sections as optimizable variables
- Uses execution feedback as a supervision signal
- Iteratively refines specific prompt spans (e.g., output format instructions)
- Particularly effective for output_standards and decision_authority sections

### 7.5 Safety Controls

| Control | Description |
|---------|-------------|
| Human approval | All prompt changes require human review before production |
| A/B testing | New versions tested on 10% of traffic before full rollout |
| Rollback window | 7-day automatic rollback if error rate increases > 5% |
| Change scope limits | Max 20% of prompt can change in a single evolution cycle |
| Governance gate | SEC-REVIEW (Agent 182) must approve security-relevant changes |
| Version lineage | Full chain of custody: who/what/when/why for every change |

---

## 8. Python Code -- Reference Implementation

### 8.1 Core Data Models

```python
"""
NEXUS AI TEA Runtime Core -- Data Models
=========================================
Foundational data structures for the TEA Runtime.
"""

from __future__ import annotations

import hashlib
import json
import uuid
from dataclasses import dataclass, field
from datetime import datetime
from enum import Enum
from typing import Any, Optional


# ---------------------------------------------------------------------------
# Enums
# ---------------------------------------------------------------------------

class AgentStatus(str, Enum):
    INACTIVE = "inactive"
    ACTIVE = "active"
    IDLE = "idle"
    OVERLOADED = "overloaded"
    RETIRED = "retired"


class SessionStatus(str, Enum):
    ACTIVE = "active"
    PAUSED = "paused"
    COMPLETED = "completed"
    CANCELLED = "cancelled"


class ActionType(str, Enum):
    LLM_CALL = "llm_call"
    TOOL_INVOKE = "tool_invoke"
    MESSAGE_SEND = "message_send"
    ESCALATION = "escalation"
    DECISION = "decision"
    ERROR = "error"
    LIFECYCLE = "lifecycle"


# ---------------------------------------------------------------------------
# Agent Models
# ---------------------------------------------------------------------------

@dataclass
class AgentIdentity:
    """Immutable identity of a NEXUS agent."""
    number: int
    code: str
    name: str
    department: str
    department_number: int
    reports_to: str
    tier: int
    tier_label: str


@dataclass
class AgentCapability:
    """Declared capabilities for semantic matching."""
    domains: list[str] = field(default_factory=list)
    tools: list[str] = field(default_factory=list)
    can_decide: list[str] = field(default_factory=list)
    must_escalate: list[str] = field(default_factory=list)
    max_concurrent: int = 3


@dataclass
class AgentVersion:
    """Immutable snapshot of an agent configuration."""
    version: str
    system_prompt: str
    capabilities: AgentCapability
    created_at: datetime = field(default_factory=datetime.utcnow)
    created_by: str = "system"
    change_description: str = "Initial version"
    prompt_hash: str = ""

    def __post_init__(self) -> None:
        if not self.prompt_hash:
            self.prompt_hash = hashlib.sha256(
                self.system_prompt.encode("utf-8")
            ).hexdigest()[:16]


@dataclass
class AgentState:
    """Mutable runtime state."""
    status: AgentStatus = AgentStatus.INACTIVE
    current_sessions: list[str] = field(default_factory=list)
    total_invocations: int = 0
    total_tokens_used: int = 0
    total_cost_usd: float = 0.0
    last_active: Optional[datetime] = None
    error_count: int = 0
    avg_latency_ms: float = 0.0


@dataclass
class AgentRecord:
    """Complete agent record in the registry."""
    identity: AgentIdentity
    state: AgentState
    current_version: AgentVersion
    version_history: list[AgentVersion] = field(default_factory=list)
    file_path: str = ""
    relationships: dict[str, Any] = field(default_factory=dict)
    metadata: dict[str, Any] = field(default_factory=dict)


# ---------------------------------------------------------------------------
# Tool Models
# ---------------------------------------------------------------------------

@dataclass
class ToolDefinition:
    """Definition of a tool available to agents."""
    name: str
    description: str
    category: str
    parameters: dict[str, Any] = field(default_factory=dict)
    returns: dict[str, Any] = field(default_factory=dict)
    min_tier: int = 0
    max_tier: int = 9
    departments: list[str] = field(default_factory=list)
    requires_approval: bool = False
    is_destructive: bool = False
    timeout_ms: int = 30000
    evolvable: bool = False


@dataclass
class ToolVersion:
    """Versioned snapshot of a tool implementation."""
    version: str
    source_code: str
    schema_fc: dict[str, Any] = field(default_factory=dict)
    schema_text: str = ""
    schema_args: dict[str, Any] = field(default_factory=dict)
    created_at: datetime = field(default_factory=datetime.utcnow)
    change_description: str = "Initial version"


@dataclass
class ToolRecord:
    """Complete tool record in the registry."""
    definition: ToolDefinition
    current_version: ToolVersion
    version_history: list[ToolVersion] = field(default_factory=list)
    usage_count: int = 0
    avg_latency_ms: float = 0.0
    error_rate: float = 0.0
    last_used: Optional[datetime] = None


# ---------------------------------------------------------------------------
# Session Models
# ---------------------------------------------------------------------------

@dataclass
class SessionConfig:
    """Configuration for a client project session."""
    session_id: str
    project_name: str
    project_type: str = "A"
    client: str = ""
    budget_usd: float = 0.0
    lifecycle_stage: int = 1
    created_at: datetime = field(default_factory=datetime.utcnow)
    updated_at: datetime = field(default_factory=datetime.utcnow)
    status: SessionStatus = SessionStatus.ACTIVE


@dataclass
class Message:
    """Universal message format (provider-agnostic)."""
    role: str
    content: str
    agent_code: Optional[str] = None
    tool_calls: Optional[list[dict[str, Any]]] = None
    tool_call_id: Optional[str] = None
    timestamp: datetime = field(default_factory=datetime.utcnow)
    token_count: int = 0
    cost_usd: float = 0.0
    session_id: str = ""
    metadata: dict[str, Any] = field(default_factory=dict)


@dataclass
class SessionCheckpoint:
    """Resumable snapshot of session state."""
    checkpoint_id: str = field(default_factory=lambda: str(uuid.uuid4())[:8])
    session_id: str = ""
    created_at: datetime = field(default_factory=datetime.utcnow)
    lifecycle_stage: int = 1
    active_agents: list[str] = field(default_factory=list)
    conversation_snapshot: list[dict[str, Any]] = field(default_factory=list)
    artifacts_snapshot: list[str] = field(default_factory=list)
    metadata: dict[str, Any] = field(default_factory=dict)


@dataclass
class SessionState:
    """Mutable state of a running session."""
    active_agents: list[str] = field(default_factory=list)
    conversation_history: list[Message] = field(default_factory=list)
    artifacts: list[dict[str, Any]] = field(default_factory=list)
    checkpoints: list[SessionCheckpoint] = field(default_factory=list)
    total_tokens: int = 0
    total_cost_usd: float = 0.0
    total_agent_invocations: int = 0
    current_task: Optional[str] = None
    error_log: list[dict[str, Any]] = field(default_factory=list)


@dataclass
class SessionRecord:
    """Complete session record."""
    config: SessionConfig
    state: SessionState


# ---------------------------------------------------------------------------
# Trace Models
# ---------------------------------------------------------------------------

@dataclass
class TraceRecord:
    """Single execution trace entry."""
    record_id: str = field(default_factory=lambda: str(uuid.uuid4()))
    session_id: str = ""
    agent_code: str = ""
    action_type: ActionType = ActionType.LLM_CALL
    timestamp: datetime = field(default_factory=datetime.utcnow)
    duration_ms: float = 0.0
    model: Optional[str] = None
    input_tokens: Optional[int] = None
    output_tokens: Optional[int] = None
    cost_usd: Optional[float] = None
    tool_name: Optional[str] = None
    tool_input: Optional[dict[str, Any]] = None
    tool_output: Optional[str] = None
    tool_error: Optional[str] = None
    target_agent: Optional[str] = None
    escalation_reason: Optional[str] = None
    success: bool = True
    error_message: Optional[str] = None
    parent_record_id: Optional[str] = None
    metadata: dict[str, Any] = field(default_factory=dict)


# ---------------------------------------------------------------------------
# Cost Models
# ---------------------------------------------------------------------------

@dataclass
class ModelPricing:
    """Per-model pricing configuration."""
    model_id: str
    provider: str
    input_cost_per_1k: float
    output_cost_per_1k: float
    cache_read_per_1k: float = 0.0
    cache_write_per_1k: float = 0.0


@dataclass
class CostReport:
    """Cost report for a given scope."""
    scope: str
    period_start: datetime
    period_end: datetime
    total_input_tokens: int = 0
    total_output_tokens: int = 0
    total_cost_usd: float = 0.0
    cost_by_model: dict[str, float] = field(default_factory=dict)
    cost_by_agent: dict[str, float] = field(default_factory=dict)
    cost_by_tool: dict[str, float] = field(default_factory=dict)
    invocation_count: int = 0
    avg_cost_per_invocation: float = 0.0
```

### 8.2 Agent Registry

```python
"""
NEXUS AI TEA Runtime Core -- Agent Registry (ACP Implementation)
================================================================
Versioned agent registry with status tracking, capability declarations,
load monitoring, and semantic retrieval.
"""

from __future__ import annotations

import json
import os
import re
from datetime import datetime
from pathlib import Path
from typing import Any, Optional

# Import from models (Section 8.1)
# from nexus_runtime.models import (
#     AgentIdentity, AgentCapability, AgentVersion, AgentState,
#     AgentRecord, AgentStatus
# )


class AgentRegistry:
    """
    Agent Context Protocol (ACP) implementation for NEXUS AI.

    Manages 195 agents with versioned prompts, lifecycle states,
    capability declarations, and hierarchical relationships.

    Extends NexusPromptLoader v1 with:
    - Immutable version history for every prompt change
    - Lifecycle state machine (inactive/active/idle/overloaded/retired)
    - Capability-based semantic matching
    - Reporting chain traversal
    - Department and tier filtering
    - Health monitoring and overload detection
    """

    def __init__(self, agents_dir: str, config: Optional[dict] = None) -> None:
        """
        Initialize the Agent Registry.

        Args:
            agents_dir: Path to /Users/.../NEXUS_AI/agents/
            config: Optional runtime configuration overrides.
        """
        self.agents_dir = Path(agents_dir)
        self.config = config or {}
        self._registry: dict[str, AgentRecord] = {}
        self._by_number: dict[int, str] = {}  # number -> code
        self._department_index: dict[str, list[str]] = {}  # dept -> [codes]
        self._tier_index: dict[int, list[str]] = {}  # tier -> [codes]

    def load_all(self) -> int:
        """
        Load all 195 agent prompts from markdown files.

        Scans agents_dir recursively for files matching the pattern
        {NNN}-{CODE}.md and extracts agent identity, prompt, and
        capabilities from the XML-in-markdown format.

        Returns:
            Number of agents loaded.
        """
        count = 0
        for md_file in sorted(self.agents_dir.rglob("*.md")):
            if md_file.name.startswith("00-") or md_file.name.startswith("."):
                continue
            loaded = self._load_agent_file(md_file)
            count += loaded
        self._build_indices()
        self._build_relationships()
        return count

    def _load_agent_file(self, file_path: Path) -> int:
        """Parse a single agent markdown file and register the agent."""
        content = file_path.read_text(encoding="utf-8")

        header_match = re.search(
            r"^# AGENT (\d+):\s*(\S+)\s*[—-]\s*(.+)$",
            content,
            re.MULTILINE,
        )
        if not header_match:
            return 0

        number = int(header_match.group(1))
        code = header_match.group(2)
        name = header_match.group(3).strip()

        # Extract <system_prompt> block
        sp_match = re.search(
            r"<system_prompt>(.*?)</system_prompt>",
            content,
            re.DOTALL,
        )
        system_prompt = sp_match.group(1).strip() if sp_match else content.strip()

        # Extract identity fields from XML tags
        department = self._extract_tag(system_prompt, "department") or "Unknown"
        reports_to = self._extract_tag(system_prompt, "reports_to") or "CEO"
        tier_raw = self._extract_tag(system_prompt, "tier") or "Tier 5"

        # Parse tier number
        tier_match = re.search(r"Tier\s*(\d+)", tier_raw)
        tier_num = int(tier_match.group(1)) if tier_match else 5

        # Parse department number from folder name
        dept_num = 0
        folder_name = file_path.parent.name
        dept_match = re.match(r"(\d+)-", folder_name)
        if dept_match:
            dept_num = int(dept_match.group(1))

        # Extract capabilities from decision_authority
        can_decide = self._extract_list(system_prompt, "can_decide")
        must_escalate = self._extract_list(system_prompt, "must_escalate")

        identity = AgentIdentity(
            number=number,
            code=code,
            name=name,
            department=department,
            department_number=dept_num,
            reports_to=reports_to,
            tier=tier_num,
            tier_label=tier_raw,
        )

        capability = AgentCapability(
            domains=self._infer_domains(code, department, name),
            can_decide=can_decide,
            must_escalate=must_escalate,
        )

        version = AgentVersion(
            version="1.0.0",
            system_prompt=system_prompt,
            capabilities=capability,
            change_description="Loaded from prompt file",
        )

        record = AgentRecord(
            identity=identity,
            state=AgentState(),
            current_version=version,
            version_history=[version],
            file_path=str(file_path),
        )

        self._registry[code] = record
        self._by_number[number] = code
        return 1

    def _build_indices(self) -> None:
        """Build department and tier indices for fast lookup."""
        self._department_index.clear()
        self._tier_index.clear()
        for code, record in self._registry.items():
            dept = record.identity.department
            tier = record.identity.tier
            self._department_index.setdefault(dept, []).append(code)
            self._tier_index.setdefault(tier, []).append(code)

    def _build_relationships(self) -> None:
        """Build reporting chain relationships."""
        for code, record in self._registry.items():
            manager_code = record.identity.reports_to
            direct_reports = [
                c for c, r in self._registry.items()
                if r.identity.reports_to == code
            ]
            record.relationships = {
                "manager": manager_code,
                "direct_reports": direct_reports,
                "peers": [
                    c for c, r in self._registry.items()
                    if r.identity.reports_to == manager_code and c != code
                ],
            }

    # --- Agent Access ---

    def get(self, code: str) -> Optional[AgentRecord]:
        """Get an agent by code."""
        return self._registry.get(code)

    def get_by_number(self, number: int) -> Optional[AgentRecord]:
        """Get an agent by number."""
        code = self._by_number.get(number)
        return self._registry.get(code) if code else None

    def list_agents(
        self,
        department: Optional[str] = None,
        tier: Optional[int] = None,
        status: Optional[AgentStatus] = None,
    ) -> list[AgentRecord]:
        """List agents with optional filters."""
        results = list(self._registry.values())
        if department:
            results = [
                r for r in results
                if department.lower() in r.identity.department.lower()
            ]
        if tier is not None:
            results = [r for r in results if r.identity.tier == tier]
        if status:
            results = [r for r in results if r.state.status == status]
        return sorted(results, key=lambda r: r.identity.number)

    def get_department(self, dept_number: int) -> list[AgentRecord]:
        """Get all agents in a department by department number."""
        return [
            r for r in self._registry.values()
            if r.identity.department_number == dept_number
        ]

    def get_chain(self, code: str) -> list[str]:
        """Get full reporting chain from agent to CEO."""
        chain = []
        current = code
        visited = set()
        while current and current not in visited:
            visited.add(current)
            chain.append(current)
            record = self._registry.get(current)
            if not record:
                break
            current = record.identity.reports_to
        return chain

    # --- Lifecycle Management ---

    def activate(self, code: str, session_id: str) -> bool:
        """Activate an agent for a session."""
        record = self._registry.get(code)
        if not record:
            return False
        if record.state.status == AgentStatus.RETIRED:
            return False

        record.state.current_sessions.append(session_id)
        record.state.last_active = datetime.utcnow()

        max_concurrent = record.current_version.capabilities.max_concurrent
        if len(record.state.current_sessions) > max_concurrent:
            record.state.status = AgentStatus.OVERLOADED
        else:
            record.state.status = AgentStatus.ACTIVE
        return True

    def deactivate(self, code: str, session_id: str) -> bool:
        """Deactivate an agent from a session."""
        record = self._registry.get(code)
        if not record:
            return False
        if session_id in record.state.current_sessions:
            record.state.current_sessions.remove(session_id)
        if not record.state.current_sessions:
            record.state.status = AgentStatus.INACTIVE
        elif len(record.state.current_sessions) <= (
            record.current_version.capabilities.max_concurrent
        ):
            record.state.status = AgentStatus.ACTIVE
        return True

    def retire(self, code: str) -> bool:
        """Permanently retire an agent."""
        record = self._registry.get(code)
        if not record:
            return False
        record.state.status = AgentStatus.RETIRED
        record.state.current_sessions.clear()
        return True

    # --- Version Management ---

    def update_prompt(
        self,
        code: str,
        new_prompt: str,
        change_description: str = "",
        created_by: str = "system",
    ) -> Optional[str]:
        """
        Update an agent's system prompt, creating a new version.

        Returns the new version string, or None if agent not found.
        """
        record = self._registry.get(code)
        if not record:
            return None

        current = record.current_version
        # Parse version and increment patch
        parts = current.version.split(".")
        new_version_str = f"{parts[0]}.{parts[1]}.{int(parts[2]) + 1}"

        new_version = AgentVersion(
            version=new_version_str,
            system_prompt=new_prompt,
            capabilities=current.capabilities,
            created_by=created_by,
            change_description=change_description or f"Prompt updated by {created_by}",
        )

        record.version_history.append(new_version)
        record.current_version = new_version
        return new_version_str

    def rollback(self, code: str, target_version: str) -> bool:
        """Rollback an agent to a previous prompt version."""
        record = self._registry.get(code)
        if not record:
            return False
        for version in record.version_history:
            if version.version == target_version:
                record.current_version = version
                return True
        return False

    def version_history(self, code: str) -> list[AgentVersion]:
        """Get full version history for an agent."""
        record = self._registry.get(code)
        return record.version_history if record else []

    # --- Health & Monitoring ---

    def health_check(self) -> dict[str, Any]:
        """Generate system health report."""
        all_agents = list(self._registry.values())
        return {
            "total_agents": len(all_agents),
            "active": len([a for a in all_agents if a.state.status == AgentStatus.ACTIVE]),
            "idle": len([a for a in all_agents if a.state.status == AgentStatus.IDLE]),
            "inactive": len([a for a in all_agents if a.state.status == AgentStatus.INACTIVE]),
            "overloaded": len([a for a in all_agents if a.state.status == AgentStatus.OVERLOADED]),
            "retired": len([a for a in all_agents if a.state.status == AgentStatus.RETIRED]),
            "overloaded_agents": [
                a.identity.code for a in all_agents
                if a.state.status == AgentStatus.OVERLOADED
            ],
            "total_sessions": sum(
                len(a.state.current_sessions) for a in all_agents
            ),
        }

    def get_llm_payload(
        self,
        code: str,
        session_context: str = "",
        model_override: Optional[str] = None,
    ) -> dict[str, Any]:
        """
        Generate the LLM API payload for an agent.

        Backward compatible with NexusPromptLoader v1's get_llm_payload.
        """
        record = self._registry.get(code)
        if not record:
            raise ValueError(f"Agent '{code}' not found in registry")

        system = record.current_version.system_prompt
        if session_context:
            system += f"\n\n<project_context>\n{session_context}\n</project_context>"

        # Determine model based on tier
        tier = record.identity.tier
        if model_override:
            model = model_override
        elif tier <= 2:
            model = "claude-opus-4-6"
        elif tier <= 5 or tier == 8:
            model = "claude-sonnet-4-6"
        else:
            model = "claude-haiku-4-5"

        return {
            "system": system,
            "model": model,
            "max_tokens": 8192 if tier <= 2 else 4096,
            "metadata": {
                "agent_code": code,
                "agent_number": record.identity.number,
                "agent_tier": tier,
                "prompt_version": record.current_version.version,
                "prompt_hash": record.current_version.prompt_hash,
            },
        }

    # --- Export ---

    def export_registry(self, output_path: str, fmt: str = "json") -> None:
        """Export the full agent registry."""
        data = {}
        for code, record in sorted(
            self._registry.items(), key=lambda x: x[1].identity.number
        ):
            data[code] = {
                "number": record.identity.number,
                "code": record.identity.code,
                "name": record.identity.name,
                "department": record.identity.department,
                "department_number": record.identity.department_number,
                "reports_to": record.identity.reports_to,
                "tier": record.identity.tier,
                "tier_label": record.identity.tier_label,
                "status": record.state.status.value,
                "current_sessions": record.state.current_sessions,
                "prompt_version": record.current_version.version,
                "prompt_hash": record.current_version.prompt_hash,
                "prompt_length": len(record.current_version.system_prompt),
                "total_invocations": record.state.total_invocations,
                "total_cost_usd": record.state.total_cost_usd,
                "version_count": len(record.version_history),
            }

        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, default=str)

    # --- Internal Helpers ---

    @staticmethod
    def _extract_tag(text: str, tag: str) -> Optional[str]:
        """Extract content from an XML tag."""
        match = re.search(f"<{tag}>(.*?)</{tag}>", text, re.DOTALL)
        return match.group(1).strip() if match else None

    @staticmethod
    def _extract_list(text: str, tag: str) -> list[str]:
        """Extract a list from an XML tag block."""
        block = AgentRegistry._extract_tag(text, tag)
        if not block:
            return []
        return [
            line.strip().lstrip("- ")
            for line in block.split("\n")
            if line.strip() and line.strip().startswith("-")
        ]

    @staticmethod
    def _infer_domains(code: str, department: str, name: str) -> list[str]:
        """Infer capability domains from agent metadata."""
        domains = []
        combined = f"{code} {department} {name}".lower()
        domain_keywords = {
            "frontend": ["fe", "frontend", "react", "vue", "ui"],
            "backend": ["be", "backend", "node", "python", "go", "api"],
            "mobile": ["mob", "mobile", "react native", "native"],
            "data": ["data", "database", "sql", "pipeline", "analytics"],
            "devops": ["devops", "infrastructure", "cloud", "sre", "platform"],
            "security": ["security", "sec", "pentest", "compliance"],
            "design": ["design", "ux", "ui", "visual", "brand"],
            "product": ["product", "pm", "prd", "roadmap"],
            "ai_ml": ["ai", "ml", "model", "nlp", "data science"],
            "qa": ["qa", "test", "quality", "performance"],
            "marketing": ["marketing", "content", "seo", "growth"],
            "sales": ["sales", "revenue", "account", "bdr"],
            "hr": ["people", "hr", "talent", "culture", "hiring"],
            "finance": ["finance", "budget", "accounting", "billing"],
            "legal": ["legal", "compliance", "contract", "privacy"],
            "leadership": ["chief", "vp", "director", "svp", "executive"],
        }
        for domain, keywords in domain_keywords.items():
            if any(kw in combined for kw in keywords):
                domains.append(domain)
        return domains or ["general"]
```

### 8.3 Tool Registry

```python
"""
NEXUS AI TEA Runtime Core -- Tool Registry (TCP Implementation)
===============================================================
Registry of all tools agents can access, with permission levels
by tier, semantic retrieval, and version management.
"""

from __future__ import annotations

import json
import time
from datetime import datetime
from typing import Any, Callable, Optional

# Import from models (Section 8.1)
# from nexus_runtime.models import ToolDefinition, ToolVersion, ToolRecord


class ToolRegistry:
    """
    Tool Context Protocol (TCP) implementation for NEXUS AI.

    Manages tool registration, access control, version history,
    and execution with tier-based permissions.
    """

    def __init__(self) -> None:
        self._tools: dict[str, ToolRecord] = {}
        self._executors: dict[str, Callable] = {}  # name -> callable

    def register(
        self,
        name: str,
        description: str,
        category: str,
        executor: Callable,
        parameters: Optional[dict] = None,
        returns: Optional[dict] = None,
        min_tier: int = 0,
        max_tier: int = 9,
        departments: Optional[list[str]] = None,
        requires_approval: bool = False,
        is_destructive: bool = False,
        timeout_ms: int = 30000,
    ) -> None:
        """Register a new tool in the registry."""
        definition = ToolDefinition(
            name=name,
            description=description,
            category=category,
            parameters=parameters or {},
            returns=returns or {},
            min_tier=min_tier,
            max_tier=max_tier,
            departments=departments or [],
            requires_approval=requires_approval,
            is_destructive=is_destructive,
            timeout_ms=timeout_ms,
        )

        # Generate function-calling schema
        schema_fc = {
            "name": name,
            "description": description,
            "input_schema": {
                "type": "object",
                "properties": parameters or {},
            },
        }

        version = ToolVersion(
            version="1.0.0",
            source_code="",  # populated if tool code is provided as string
            schema_fc=schema_fc,
            schema_text=description,
            schema_args=parameters or {},
        )

        record = ToolRecord(
            definition=definition,
            current_version=version,
            version_history=[version],
        )

        self._tools[name] = record
        self._executors[name] = executor

    def can_access(self, tool_name: str, agent_tier: int, agent_dept: str) -> bool:
        """Check if an agent can access a tool based on tier and department."""
        record = self._tools.get(tool_name)
        if not record:
            return False
        defn = record.definition
        if agent_tier < defn.min_tier or agent_tier > defn.max_tier:
            return False
        if defn.departments and agent_dept not in defn.departments:
            return False
        return True

    def get_tools_for_agent(
        self, agent_tier: int, agent_dept: str
    ) -> list[ToolRecord]:
        """Get all tools accessible to an agent."""
        return [
            record
            for name, record in self._tools.items()
            if self.can_access(name, agent_tier, agent_dept)
        ]

    def get_schemas_for_agent(
        self, agent_tier: int, agent_dept: str
    ) -> list[dict[str, Any]]:
        """Get function-calling schemas for all tools an agent can access."""
        accessible = self.get_tools_for_agent(agent_tier, agent_dept)
        return [r.current_version.schema_fc for r in accessible]

    async def invoke(
        self,
        tool_name: str,
        args: dict[str, Any],
        agent_code: str,
        agent_tier: int,
        agent_dept: str,
    ) -> dict[str, Any]:
        """
        Invoke a tool with permission checking.

        Returns dict with 'result' or 'error' key.
        """
        record = self._tools.get(tool_name)
        if not record:
            return {"error": f"Tool '{tool_name}' not found"}

        if not self.can_access(tool_name, agent_tier, agent_dept):
            return {
                "error": f"Agent {agent_code} (tier {agent_tier}) "
                f"cannot access tool '{tool_name}'"
            }

        if record.definition.requires_approval:
            return {
                "error": f"Tool '{tool_name}' requires human approval",
                "requires_approval": True,
            }

        executor = self._executors.get(tool_name)
        if not executor:
            return {"error": f"No executor registered for tool '{tool_name}'"}

        start = time.monotonic()
        try:
            result = executor(**args)
            elapsed = (time.monotonic() - start) * 1000

            # Update usage stats
            record.usage_count += 1
            record.last_used = datetime.utcnow()
            n = record.usage_count
            record.avg_latency_ms = (
                record.avg_latency_ms * (n - 1) + elapsed
            ) / n

            return {"result": result, "duration_ms": elapsed}

        except Exception as e:
            elapsed = (time.monotonic() - start) * 1000
            record.usage_count += 1
            total = record.usage_count
            record.error_rate = (
                record.error_rate * (total - 1) + 1.0
            ) / total

            return {
                "error": str(e),
                "error_type": type(e).__name__,
                "duration_ms": elapsed,
            }

    def list_tools(self, category: Optional[str] = None) -> list[str]:
        """List all registered tool names, optionally filtered by category."""
        if category:
            return [
                name for name, r in self._tools.items()
                if r.definition.category == category
            ]
        return list(self._tools.keys())

    def get(self, name: str) -> Optional[ToolRecord]:
        """Get a tool record by name."""
        return self._tools.get(name)

    def update_tool(
        self,
        name: str,
        new_source: str,
        new_executor: Callable,
        change_description: str = "",
    ) -> Optional[str]:
        """Update a tool's implementation, creating a new version."""
        record = self._tools.get(name)
        if not record:
            return None

        current = record.current_version
        parts = current.version.split(".")
        new_version_str = f"{parts[0]}.{parts[1]}.{int(parts[2]) + 1}"

        new_version = ToolVersion(
            version=new_version_str,
            source_code=new_source,
            schema_fc=current.schema_fc,
            schema_text=current.schema_text,
            schema_args=current.schema_args,
            change_description=change_description,
        )

        record.version_history.append(new_version)
        record.current_version = new_version
        self._executors[name] = new_executor
        return new_version_str

    def export_contract(self) -> str:
        """Generate a unified tool contract document."""
        lines = ["# NEXUS AI Tool Registry Contract\n"]
        for name, record in sorted(self._tools.items()):
            d = record.definition
            lines.append(f"## {name}")
            lines.append(f"- **Description:** {d.description}")
            lines.append(f"- **Category:** {d.category}")
            lines.append(f"- **Access:** Tier {d.min_tier}-{d.max_tier}")
            if d.departments:
                lines.append(f"- **Departments:** {', '.join(d.departments)}")
            if d.requires_approval:
                lines.append("- **Requires Approval:** Yes")
            if d.is_destructive:
                lines.append("- **Destructive:** Yes")
            lines.append(f"- **Version:** {record.current_version.version}")
            lines.append("")
        return "\n".join(lines)
```

### 8.4 Session Manager

```python
"""
NEXUS AI TEA Runtime Core -- Session Manager
=============================================
Client project session lifecycle: creation, checkpointing,
resumption, and agent coordination.
"""

from __future__ import annotations

import json
import uuid
from datetime import datetime
from pathlib import Path
from typing import Any, Optional

# Import from models (Section 8.1)
# from nexus_runtime.models import (
#     SessionConfig, SessionState, SessionRecord, SessionCheckpoint,
#     SessionStatus, Message
# )


class SessionManager:
    """
    Manages client project sessions with lifecycle tracking,
    agent coordination, checkpointing, and conversation persistence.
    """

    # Minimum Viable Teams by project type (from NexusPromptLoader v1)
    MVT: dict[str, list[str]] = {
        "A": [  # Full-Stack Web App
            "SR-PM", "SR-FE-REACT", "SR-BE-NODE", "FE-ENG", "BE-ENG",
            "SR-DEVOPS", "SR-QA-AUTO", "SR-UXD", "SR-UID", "TPM",
            "SCRUM", "PM",
        ],
        "B": [  # Mobile App
            "SR-PM", "SR-MOB-RN", "SR-BE-NODE", "MOB-ENG", "BE-ENG",
            "SR-DEVOPS", "SR-QA-AUTO", "SR-UXD", "TPM", "SCRUM",
        ],
        "C": [  # AI/ML Product
            "AI-PM", "SR-AIE", "SR-MLE", "SR-DS", "SR-DE",
            "SR-FE-REACT", "SR-BE-PY", "SR-DEVOPS", "SR-QA-AUTO", "TPM",
        ],
        "D": [  # API / Platform
            "TPM-PROD", "STAFF-BE", "SR-BE-NODE", "BE-ENG",
            "SR-DEVOPS", "SR-QA-AUTO",
        ],
        "E": [  # Data Engineering
            "PM", "SR-DE", "DATA-ENG", "STAFF-DS", "BI-ANALYST",
        ],
        "F": [  # Design Sprint
            "SR-PM", "SR-UXD", "SR-UID", "UXR", "CONTENT-DES",
        ],
        "G": [  # Security Audit
            "DIR-SEC", "SR-SEC-ENG", "PENTEST", "GRC-SPEC",
        ],
        "H": [  # Maintenance
            "FE-ENG", "BE-ENG", "SR-DEVOPS",
        ],
        "I": [  # POC
            "SR-STAFF", "SR-PM",
        ],
    }

    def __init__(
        self,
        agent_registry: Any,  # AgentRegistry
        storage_dir: Optional[str] = None,
    ) -> None:
        self._agent_registry = agent_registry
        self._sessions: dict[str, SessionRecord] = {}
        self._storage_dir = Path(storage_dir) if storage_dir else None

    def create_session(
        self,
        project_name: str,
        project_type: str = "A",
        client: str = "",
        budget_usd: float = 0.0,
    ) -> str:
        """Create a new project session and return its ID."""
        session_id = (
            f"SES-{datetime.utcnow().strftime('%Y%m%d')}"
            f"-{len(self._sessions) + 1:03d}"
        )

        config = SessionConfig(
            session_id=session_id,
            project_name=project_name,
            project_type=project_type,
            client=client,
            budget_usd=budget_usd,
        )

        record = SessionRecord(config=config, state=SessionState())
        self._sessions[session_id] = record
        return session_id

    def get_session(self, session_id: str) -> Optional[SessionRecord]:
        """Get a session by ID."""
        return self._sessions.get(session_id)

    def activate_team(
        self,
        session_id: str,
        team: Optional[list[str]] = None,
    ) -> list[str]:
        """
        Activate a team of agents for a session.

        If no team is specified, uses the Minimum Viable Team for the
        project type.

        Returns list of successfully activated agent codes.
        """
        session = self._sessions.get(session_id)
        if not session:
            raise ValueError(f"Session '{session_id}' not found")

        if team is None:
            team = self.MVT.get(session.config.project_type, [])

        activated = []
        for code in team:
            if self._agent_registry.activate(code, session_id):
                session.state.active_agents.append(code)
                activated.append(code)
        return activated

    def deactivate_team(self, session_id: str) -> None:
        """Deactivate all agents from a session."""
        session = self._sessions.get(session_id)
        if not session:
            return
        for code in list(session.state.active_agents):
            self._agent_registry.deactivate(code, session_id)
        session.state.active_agents.clear()

    def add_message(self, session_id: str, message: Message) -> None:
        """Add a message to the session conversation history."""
        session = self._sessions.get(session_id)
        if not session:
            raise ValueError(f"Session '{session_id}' not found")
        message.session_id = session_id
        session.state.conversation_history.append(message)
        session.state.total_tokens += message.token_count
        session.state.total_cost_usd += message.cost_usd
        session.config.updated_at = datetime.utcnow()

    def advance_stage(self, session_id: str, stage: int) -> None:
        """Advance the project lifecycle stage."""
        session = self._sessions.get(session_id)
        if not session:
            raise ValueError(f"Session '{session_id}' not found")
        if stage < 1 or stage > 13:
            raise ValueError(f"Stage must be 1-13, got {stage}")
        session.config.lifecycle_stage = stage
        session.config.updated_at = datetime.utcnow()
        # Auto-checkpoint on stage transition
        self.checkpoint(session_id)

    def checkpoint(self, session_id: str) -> str:
        """Create a resumable checkpoint of the session state."""
        session = self._sessions.get(session_id)
        if not session:
            raise ValueError(f"Session '{session_id}' not found")

        cp = SessionCheckpoint(
            session_id=session_id,
            lifecycle_stage=session.config.lifecycle_stage,
            active_agents=list(session.state.active_agents),
            conversation_snapshot=[
                {
                    "role": m.role,
                    "content": m.content[:500],  # truncated for storage
                    "agent_code": m.agent_code,
                    "timestamp": m.timestamp.isoformat(),
                }
                for m in session.state.conversation_history[-50:]  # last 50
            ],
            artifacts_snapshot=[
                a.get("path", "") for a in session.state.artifacts
            ],
        )

        session.state.checkpoints.append(cp)

        # Persist to disk if storage_dir configured
        if self._storage_dir:
            cp_path = self._storage_dir / session_id / f"cp-{cp.checkpoint_id}.json"
            cp_path.parent.mkdir(parents=True, exist_ok=True)
            with open(cp_path, "w") as f:
                json.dump(
                    {
                        "checkpoint_id": cp.checkpoint_id,
                        "session_id": cp.session_id,
                        "created_at": cp.created_at.isoformat(),
                        "lifecycle_stage": cp.lifecycle_stage,
                        "active_agents": cp.active_agents,
                        "conversation_count": len(cp.conversation_snapshot),
                        "artifacts_count": len(cp.artifacts_snapshot),
                    },
                    f,
                    indent=2,
                )

        return cp.checkpoint_id

    def pause(self, session_id: str) -> None:
        """Pause a session."""
        session = self._sessions.get(session_id)
        if session:
            session.config.status = SessionStatus.PAUSED
            self.checkpoint(session_id)

    def resume(self, session_id: str) -> None:
        """Resume a paused session."""
        session = self._sessions.get(session_id)
        if session and session.config.status == SessionStatus.PAUSED:
            session.config.status = SessionStatus.ACTIVE

    def complete(self, session_id: str) -> None:
        """Mark a session as completed."""
        session = self._sessions.get(session_id)
        if session:
            session.config.status = SessionStatus.COMPLETED
            self.deactivate_team(session_id)
            self.checkpoint(session_id)

    def cancel(self, session_id: str) -> None:
        """Cancel a session."""
        session = self._sessions.get(session_id)
        if session:
            session.config.status = SessionStatus.CANCELLED
            self.deactivate_team(session_id)

    def get_mvt(self, project_type: str) -> list[str]:
        """Get Minimum Viable Team for a project type (v1 compat)."""
        return self.MVT.get(project_type, [])

    def list_sessions(
        self, status: Optional[SessionStatus] = None
    ) -> list[SessionRecord]:
        """List all sessions, optionally filtered by status."""
        sessions = list(self._sessions.values())
        if status:
            sessions = [s for s in sessions if s.config.status == status]
        return sorted(
            sessions, key=lambda s: s.config.created_at, reverse=True
        )

    def session_status(self) -> dict[str, Any]:
        """Generate session summary report."""
        all_sessions = list(self._sessions.values())
        return {
            "total": len(all_sessions),
            "active": len([s for s in all_sessions if s.config.status == SessionStatus.ACTIVE]),
            "paused": len([s for s in all_sessions if s.config.status == SessionStatus.PAUSED]),
            "completed": len([s for s in all_sessions if s.config.status == SessionStatus.COMPLETED]),
            "cancelled": len([s for s in all_sessions if s.config.status == SessionStatus.CANCELLED]),
            "total_cost_usd": sum(s.state.total_cost_usd for s in all_sessions),
            "total_tokens": sum(s.state.total_tokens for s in all_sessions),
        }
```

### 8.5 Execution Tracer

```python
"""
NEXUS AI TEA Runtime Core -- Execution Tracer
==============================================
Records every agent action for debugging, audit, and learning.
"""

from __future__ import annotations

import json
import sqlite3
import threading
from contextlib import contextmanager
from datetime import datetime
from pathlib import Path
from typing import Any, Generator, Optional

# Import from models (Section 8.1)
# from nexus_runtime.models import TraceRecord, ActionType


class ExecutionTracer:
    """
    Comprehensive execution tracing for the NEXUS runtime.

    Stores traces in SQLite for efficient querying across sessions,
    agents, and time ranges. Thread-safe via connection-per-thread.
    """

    SCHEMA = """
    CREATE TABLE IF NOT EXISTS traces (
        record_id TEXT PRIMARY KEY,
        session_id TEXT NOT NULL,
        agent_code TEXT NOT NULL,
        action_type TEXT NOT NULL,
        timestamp TEXT NOT NULL,
        duration_ms REAL DEFAULT 0,
        model TEXT,
        input_tokens INTEGER,
        output_tokens INTEGER,
        cost_usd REAL,
        tool_name TEXT,
        tool_input TEXT,
        tool_output TEXT,
        tool_error TEXT,
        target_agent TEXT,
        escalation_reason TEXT,
        success INTEGER DEFAULT 1,
        error_message TEXT,
        parent_record_id TEXT,
        metadata TEXT
    );

    CREATE INDEX IF NOT EXISTS idx_traces_session ON traces(session_id);
    CREATE INDEX IF NOT EXISTS idx_traces_agent ON traces(agent_code);
    CREATE INDEX IF NOT EXISTS idx_traces_type ON traces(action_type);
    CREATE INDEX IF NOT EXISTS idx_traces_timestamp ON traces(timestamp);
    """

    def __init__(self, db_path: str = ":memory:") -> None:
        """
        Initialize the tracer.

        Args:
            db_path: Path to SQLite database. Use ":memory:" for in-memory.
        """
        self._db_path = db_path
        self._local = threading.local()
        # Initialize schema
        with self._get_conn() as conn:
            conn.executescript(self.SCHEMA)

    @contextmanager
    def _get_conn(self) -> Generator[sqlite3.Connection, None, None]:
        """Get a thread-local database connection."""
        if not hasattr(self._local, "conn") or self._local.conn is None:
            self._local.conn = sqlite3.connect(self._db_path)
            self._local.conn.row_factory = sqlite3.Row
        yield self._local.conn

    def record(self, trace: TraceRecord) -> str:
        """Record a trace entry. Returns the record_id."""
        with self._get_conn() as conn:
            conn.execute(
                """
                INSERT INTO traces (
                    record_id, session_id, agent_code, action_type,
                    timestamp, duration_ms, model, input_tokens,
                    output_tokens, cost_usd, tool_name, tool_input,
                    tool_output, tool_error, target_agent,
                    escalation_reason, success, error_message,
                    parent_record_id, metadata
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
                          ?, ?, ?, ?, ?)
                """,
                (
                    trace.record_id,
                    trace.session_id,
                    trace.agent_code,
                    trace.action_type.value if hasattr(trace.action_type, 'value') else trace.action_type,
                    trace.timestamp.isoformat(),
                    trace.duration_ms,
                    trace.model,
                    trace.input_tokens,
                    trace.output_tokens,
                    trace.cost_usd,
                    trace.tool_name,
                    json.dumps(trace.tool_input) if trace.tool_input else None,
                    trace.tool_output,
                    trace.tool_error,
                    trace.target_agent,
                    trace.escalation_reason,
                    1 if trace.success else 0,
                    trace.error_message,
                    trace.parent_record_id,
                    json.dumps(trace.metadata) if trace.metadata else None,
                ),
            )
            conn.commit()
        return trace.record_id

    def traces_by_session(self, session_id: str) -> list[dict[str, Any]]:
        """Get all traces for a session, ordered by timestamp."""
        with self._get_conn() as conn:
            rows = conn.execute(
                "SELECT * FROM traces WHERE session_id = ? ORDER BY timestamp",
                (session_id,),
            ).fetchall()
            return [dict(r) for r in rows]

    def traces_by_agent(self, agent_code: str) -> list[dict[str, Any]]:
        """Get all traces for an agent."""
        with self._get_conn() as conn:
            rows = conn.execute(
                "SELECT * FROM traces WHERE agent_code = ? ORDER BY timestamp",
                (agent_code,),
            ).fetchall()
            return [dict(r) for r in rows]

    def error_traces(
        self, session_id: Optional[str] = None
    ) -> list[dict[str, Any]]:
        """Get all error traces, optionally filtered by session."""
        with self._get_conn() as conn:
            if session_id:
                rows = conn.execute(
                    "SELECT * FROM traces WHERE success = 0 AND session_id = ? "
                    "ORDER BY timestamp",
                    (session_id,),
                ).fetchall()
            else:
                rows = conn.execute(
                    "SELECT * FROM traces WHERE success = 0 ORDER BY timestamp"
                ).fetchall()
            return [dict(r) for r in rows]

    def cost_by_session(self, session_id: str) -> dict[str, Any]:
        """Get cost breakdown for a session."""
        with self._get_conn() as conn:
            row = conn.execute(
                """
                SELECT
                    SUM(COALESCE(input_tokens, 0)) as total_input,
                    SUM(COALESCE(output_tokens, 0)) as total_output,
                    SUM(COALESCE(cost_usd, 0)) as total_cost,
                    COUNT(*) as invocation_count
                FROM traces
                WHERE session_id = ? AND action_type = 'llm_call'
                """,
                (session_id,),
            ).fetchone()

            by_agent = conn.execute(
                """
                SELECT agent_code, SUM(COALESCE(cost_usd, 0)) as cost
                FROM traces
                WHERE session_id = ? AND action_type = 'llm_call'
                GROUP BY agent_code
                ORDER BY cost DESC
                """,
                (session_id,),
            ).fetchall()

            by_model = conn.execute(
                """
                SELECT model, SUM(COALESCE(cost_usd, 0)) as cost
                FROM traces
                WHERE session_id = ? AND action_type = 'llm_call'
                      AND model IS NOT NULL
                GROUP BY model
                ORDER BY cost DESC
                """,
                (session_id,),
            ).fetchall()

            return {
                "session_id": session_id,
                "total_input_tokens": row["total_input"] or 0,
                "total_output_tokens": row["total_output"] or 0,
                "total_cost_usd": row["total_cost"] or 0.0,
                "invocation_count": row["invocation_count"] or 0,
                "cost_by_agent": {r["agent_code"]: r["cost"] for r in by_agent},
                "cost_by_model": {r["model"]: r["cost"] for r in by_model},
            }

    def cost_by_agent(self, agent_code: str) -> dict[str, Any]:
        """Get cost breakdown for an agent across all sessions."""
        with self._get_conn() as conn:
            row = conn.execute(
                """
                SELECT
                    SUM(COALESCE(input_tokens, 0)) as total_input,
                    SUM(COALESCE(output_tokens, 0)) as total_output,
                    SUM(COALESCE(cost_usd, 0)) as total_cost,
                    COUNT(*) as invocation_count
                FROM traces
                WHERE agent_code = ? AND action_type = 'llm_call'
                """,
                (agent_code,),
            ).fetchone()

            return {
                "agent_code": agent_code,
                "total_input_tokens": row["total_input"] or 0,
                "total_output_tokens": row["total_output"] or 0,
                "total_cost_usd": row["total_cost"] or 0.0,
                "invocation_count": row["invocation_count"] or 0,
            }

    def tool_usage_stats(self) -> list[dict[str, Any]]:
        """Get usage statistics for all tools."""
        with self._get_conn() as conn:
            rows = conn.execute(
                """
                SELECT
                    tool_name,
                    COUNT(*) as usage_count,
                    AVG(duration_ms) as avg_duration,
                    SUM(CASE WHEN success = 0 THEN 1 ELSE 0 END) as error_count
                FROM traces
                WHERE action_type = 'tool_invoke' AND tool_name IS NOT NULL
                GROUP BY tool_name
                ORDER BY usage_count DESC
                """,
            ).fetchall()
            return [dict(r) for r in rows]

    def agent_interaction_graph(
        self, session_id: str
    ) -> list[dict[str, Any]]:
        """Get agent-to-agent interaction edges for a session."""
        with self._get_conn() as conn:
            rows = conn.execute(
                """
                SELECT
                    agent_code as source,
                    target_agent as target,
                    COUNT(*) as interaction_count,
                    action_type
                FROM traces
                WHERE session_id = ?
                    AND target_agent IS NOT NULL
                GROUP BY agent_code, target_agent, action_type
                ORDER BY interaction_count DESC
                """,
                (session_id,),
            ).fetchall()
            return [dict(r) for r in rows]

    def summary(self) -> dict[str, Any]:
        """Generate overall tracer summary."""
        with self._get_conn() as conn:
            row = conn.execute(
                """
                SELECT
                    COUNT(*) as total_records,
                    COUNT(DISTINCT session_id) as total_sessions,
                    COUNT(DISTINCT agent_code) as total_agents,
                    SUM(COALESCE(cost_usd, 0)) as total_cost,
                    SUM(COALESCE(input_tokens, 0)) as total_input_tokens,
                    SUM(COALESCE(output_tokens, 0)) as total_output_tokens,
                    SUM(CASE WHEN success = 0 THEN 1 ELSE 0 END) as total_errors
                FROM traces
                """,
            ).fetchone()
            return dict(row) if row else {}
```

### 8.6 Cost Tracker

```python
"""
NEXUS AI TEA Runtime Core -- Cost Tracker
==========================================
Tracks token usage, model costs, per-project billing,
and budget controls.
"""

from __future__ import annotations

from datetime import datetime
from typing import Any, Optional

# Import from models (Section 8.1)
# from nexus_runtime.models import ModelPricing, CostReport


# Default pricing (2026-02)
DEFAULT_PRICING: dict[str, ModelPricing] = {
    "claude-opus-4-6": ModelPricing(
        model_id="claude-opus-4-6",
        provider="anthropic",
        input_cost_per_1k=0.015,
        output_cost_per_1k=0.075,
        cache_read_per_1k=0.0015,
        cache_write_per_1k=0.01875,
    ),
    "claude-sonnet-4-6": ModelPricing(
        model_id="claude-sonnet-4-6",
        provider="anthropic",
        input_cost_per_1k=0.003,
        output_cost_per_1k=0.015,
        cache_read_per_1k=0.0003,
        cache_write_per_1k=0.00375,
    ),
    "claude-haiku-4-5": ModelPricing(
        model_id="claude-haiku-4-5",
        provider="anthropic",
        input_cost_per_1k=0.001,
        output_cost_per_1k=0.005,
        cache_read_per_1k=0.0001,
        cache_write_per_1k=0.00125,
    ),
    "gpt-4.1": ModelPricing(
        model_id="gpt-4.1",
        provider="openai",
        input_cost_per_1k=0.002,
        output_cost_per_1k=0.008,
        cache_read_per_1k=0.0005,
        cache_write_per_1k=0.002,
    ),
}


class CostTracker:
    """
    Tracks LLM costs with budget controls and tiered model routing.

    Integrates with ExecutionTracer for persistent cost data and
    provides budget alerts and enforcement.
    """

    def __init__(
        self,
        pricing: Optional[dict[str, ModelPricing]] = None,
        tracer: Optional[Any] = None,  # ExecutionTracer
    ) -> None:
        self._pricing = pricing or DEFAULT_PRICING
        self._tracer = tracer
        self._budgets: dict[str, float] = {}  # scope -> budget USD
        self._alerts: dict[str, list[float]] = {}  # scope -> thresholds

    def set_budget(
        self,
        scope: str,
        budget_usd: float,
        alert_thresholds: Optional[list[float]] = None,
    ) -> None:
        """
        Set a budget for a scope.

        Args:
            scope: e.g., "session:SES-001", "agent:CTO", "dept:Engineering"
            budget_usd: Maximum spend in USD.
            alert_thresholds: List of percentages to alert at (default [0.5, 0.8, 0.95]).
        """
        self._budgets[scope] = budget_usd
        self._alerts[scope] = alert_thresholds or [0.5, 0.8, 0.95]

    def calculate_cost(
        self,
        model_id: str,
        input_tokens: int,
        output_tokens: int,
        cached_input_tokens: int = 0,
    ) -> float:
        """Calculate the cost of an LLM call in USD."""
        pricing = self._pricing.get(model_id)
        if not pricing:
            # Fallback: estimate based on average pricing
            return (input_tokens * 0.003 + output_tokens * 0.015) / 1000

        non_cached = max(0, input_tokens - cached_input_tokens)
        cost = (
            (non_cached * pricing.input_cost_per_1k / 1000)
            + (cached_input_tokens * pricing.cache_read_per_1k / 1000)
            + (output_tokens * pricing.output_cost_per_1k / 1000)
        )
        return round(cost, 6)

    def check_budget(self, scope: str, current_spend: float) -> dict[str, Any]:
        """
        Check budget status for a scope.

        Returns:
            Dict with 'within_budget', 'budget', 'spent', 'remaining',
            'percentage', and 'alerts' keys.
        """
        budget = self._budgets.get(scope, float("inf"))
        remaining = budget - current_spend
        percentage = (current_spend / budget * 100) if budget > 0 else 0

        triggered_alerts = []
        for threshold in self._alerts.get(scope, []):
            if percentage >= threshold * 100:
                triggered_alerts.append(
                    f"Budget {threshold*100:.0f}% threshold reached "
                    f"({percentage:.1f}% used)"
                )

        return {
            "within_budget": remaining > 0,
            "budget_usd": budget,
            "spent_usd": current_spend,
            "remaining_usd": max(0, remaining),
            "percentage": round(percentage, 1),
            "alerts": triggered_alerts,
        }

    def select_model(
        self,
        agent_tier: int,
        task_complexity: str = "normal",
        budget_remaining: Optional[float] = None,
    ) -> str:
        """
        Select the appropriate model based on agent tier and constraints.

        Args:
            agent_tier: 0-9
            task_complexity: "low", "normal", "high", "critical"
            budget_remaining: If low, prefer cheaper models.

        Returns:
            Model ID string.
        """
        # Budget-constrained: force cheapest model
        if budget_remaining is not None and budget_remaining < 1.0:
            return "claude-haiku-4-5"

        # Complexity override
        if task_complexity == "critical":
            return "claude-opus-4-6"

        # Tier-based default
        if agent_tier <= 2:
            return "claude-opus-4-6"
        elif agent_tier <= 5 or agent_tier == 8:
            base = "claude-sonnet-4-6"
            if task_complexity == "high":
                return "claude-opus-4-6"
            return base
        else:
            if task_complexity == "high":
                return "claude-sonnet-4-6"
            return "claude-haiku-4-5"

    def generate_report(
        self,
        scope: str,
        period_start: Optional[datetime] = None,
        period_end: Optional[datetime] = None,
    ) -> CostReport:
        """
        Generate a cost report for a given scope.

        Queries the ExecutionTracer if available, otherwise returns
        an empty report.
        """
        now = datetime.utcnow()
        start = period_start or datetime(now.year, now.month, 1)
        end = period_end or now

        report = CostReport(
            scope=scope,
            period_start=start,
            period_end=end,
        )

        if self._tracer:
            # Parse scope
            scope_type, scope_id = scope.split(":", 1) if ":" in scope else ("all", scope)

            if scope_type == "session":
                data = self._tracer.cost_by_session(scope_id)
                report.total_input_tokens = data.get("total_input_tokens", 0)
                report.total_output_tokens = data.get("total_output_tokens", 0)
                report.total_cost_usd = data.get("total_cost_usd", 0.0)
                report.cost_by_agent = data.get("cost_by_agent", {})
                report.cost_by_model = data.get("cost_by_model", {})
                report.invocation_count = data.get("invocation_count", 0)
            elif scope_type == "agent":
                data = self._tracer.cost_by_agent(scope_id)
                report.total_input_tokens = data.get("total_input_tokens", 0)
                report.total_output_tokens = data.get("total_output_tokens", 0)
                report.total_cost_usd = data.get("total_cost_usd", 0.0)
                report.invocation_count = data.get("invocation_count", 0)

        if report.invocation_count > 0:
            report.avg_cost_per_invocation = (
                report.total_cost_usd / report.invocation_count
            )

        return report
```

### 8.7 Runtime Facade (Unified Entry Point)

```python
"""
NEXUS AI TEA Runtime Core -- Runtime Facade
============================================
Unified entry point that ties all components together.
Backward compatible with NexusPromptLoader v1 API.
"""

from __future__ import annotations

from datetime import datetime
from pathlib import Path
from typing import Any, Optional


class NexusRuntime:
    """
    Main entry point for the NEXUS AI TEA Runtime.

    Usage:
        runtime = NexusRuntime("/path/to/NEXUS_AI/agents/")
        runtime.initialize()

        # Get an agent (v1 compatible)
        cto = runtime.get_agent("CTO")

        # Create a session
        sid = runtime.create_session("Boomerang", project_type="A")

        # Activate team
        runtime.activate_team(sid)

        # Get LLM payload
        payload = runtime.get_llm_payload("SR-PM", session_id=sid)

        # Track costs
        report = runtime.cost_report(f"session:{sid}")
    """

    def __init__(
        self,
        agents_dir: str,
        db_path: Optional[str] = None,
        session_storage: Optional[str] = None,
        config: Optional[dict] = None,
    ) -> None:
        """
        Initialize the NEXUS Runtime.

        Args:
            agents_dir: Path to NEXUS_AI/agents/ directory.
            db_path: SQLite path for traces. None = in-memory.
            session_storage: Directory for session checkpoints.
            config: Optional runtime configuration.
        """
        self._agents_dir = agents_dir
        self._config = config or {}

        # Initialize components
        self.agent_registry = AgentRegistry(agents_dir, config)
        self.tool_registry = ToolRegistry()
        self.tracer = ExecutionTracer(
            db_path=db_path or ":memory:"
        )
        self.cost_tracker = CostTracker(tracer=self.tracer)
        self.session_manager = SessionManager(
            agent_registry=self.agent_registry,
            storage_dir=session_storage,
        )

        self._initialized = False

    def initialize(self) -> dict[str, Any]:
        """
        Load all agents and initialize the runtime.

        Returns summary statistics.
        """
        agent_count = self.agent_registry.load_all()
        self._register_builtin_tools()
        self._initialized = True

        return {
            "agents_loaded": agent_count,
            "tools_registered": len(self.tool_registry.list_tools()),
            "runtime_version": "2.0.0",
            "initialized_at": datetime.utcnow().isoformat(),
        }

    def _register_builtin_tools(self) -> None:
        """Register built-in tools that all agents can use."""
        self.tool_registry.register(
            name="send_message",
            description="Send a message to another NEXUS agent",
            category="communicate",
            executor=lambda target, content: {
                "sent": True,
                "target": target,
            },
            parameters={
                "target": {"type": "string", "description": "Agent code"},
                "content": {"type": "string", "description": "Message content"},
            },
        )

        self.tool_registry.register(
            name="escalate",
            description="Escalate an issue to a higher-tier agent",
            category="communicate",
            executor=lambda target, reason: {
                "escalated": True,
                "target": target,
                "reason": reason,
            },
            parameters={
                "target": {"type": "string", "description": "Agent to escalate to"},
                "reason": {"type": "string", "description": "Escalation reason"},
            },
        )

        self.tool_registry.register(
            name="search_agents",
            description="Search for agents by capability or domain",
            category="analysis",
            executor=lambda query: {
                "results": [
                    r.identity.code
                    for r in self.agent_registry.list_agents()
                    if query.lower() in " ".join(
                        r.current_version.capabilities.domains
                    ).lower()
                ][:10],
            },
            parameters={
                "query": {"type": "string", "description": "Search query"},
            },
        )

    # --- v1-Compatible API ---

    def get_agent(self, code: str) -> Optional[AgentRecord]:
        """Get an agent by code (v1 compatible)."""
        return self.agent_registry.get(code)

    def get_agent_by_number(self, number: int) -> Optional[AgentRecord]:
        """Get an agent by number (v1 compatible)."""
        return self.agent_registry.get_by_number(number)

    def list_agents(self, **kwargs: Any) -> list[AgentRecord]:
        """List agents with filters (v1 compatible)."""
        return self.agent_registry.list_agents(**kwargs)

    def create_session(self, name: str, **kwargs: Any) -> str:
        """Create a project session (v1: create_project)."""
        return self.session_manager.create_session(name, **kwargs)

    def activate_team(
        self, session_id: str, team: Optional[list[str]] = None
    ) -> list[str]:
        """Activate a team for a session (v1 compatible)."""
        return self.session_manager.activate_team(session_id, team)

    def get_mvt(self, project_type: str) -> list[str]:
        """Get Minimum Viable Team (v1 compatible)."""
        return self.session_manager.get_mvt(project_type)

    def get_llm_payload(
        self,
        code: str,
        session_id: Optional[str] = None,
        model_override: Optional[str] = None,
    ) -> dict[str, Any]:
        """Generate LLM payload for an agent (v1 compatible)."""
        session_context = ""
        if session_id:
            session = self.session_manager.get_session(session_id)
            if session:
                session_context = (
                    f"Project: {session.config.project_name}\n"
                    f"Type: {session.config.project_type}\n"
                    f"Client: {session.config.client}\n"
                    f"Stage: {session.config.lifecycle_stage}\n"
                    f"Teammates: {', '.join(session.state.active_agents)}"
                )
        return self.agent_registry.get_llm_payload(
            code, session_context, model_override
        )

    def system_status(self) -> dict[str, Any]:
        """Generate system status (v1 compatible)."""
        return {
            "agents": self.agent_registry.health_check(),
            "sessions": self.session_manager.session_status(),
            "tracer": self.tracer.summary(),
            "runtime_version": "2.0.0",
            "timestamp": datetime.utcnow().isoformat(),
        }

    def cost_report(self, scope: str) -> CostReport:
        """Generate a cost report for a given scope."""
        return self.cost_tracker.generate_report(scope)

    def export_registry(self, output_path: str) -> None:
        """Export agent registry (v1 compatible)."""
        self.agent_registry.export_registry(output_path)
```

---

## 9. API Design

### 9.1 REST API Endpoints

The TEA Runtime exposes a REST API for external integrations. All endpoints return JSON.

#### Agent Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/v2/agents` | List all agents (supports filters: `?tier=0&dept=Engineering&status=active`) |
| `GET` | `/api/v2/agents/{code}` | Get agent details |
| `GET` | `/api/v2/agents/{code}/chain` | Get reporting chain |
| `GET` | `/api/v2/agents/{code}/versions` | Get version history |
| `POST` | `/api/v2/agents/{code}/activate` | Activate agent for session `{session_id}` |
| `POST` | `/api/v2/agents/{code}/deactivate` | Deactivate from session |
| `PUT` | `/api/v2/agents/{code}/prompt` | Update agent prompt (creates new version) |
| `POST` | `/api/v2/agents/{code}/rollback` | Rollback to version `{version}` |
| `GET` | `/api/v2/agents/{code}/payload` | Get LLM payload |

#### Session Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/v2/sessions` | List all sessions |
| `POST` | `/api/v2/sessions` | Create new session |
| `GET` | `/api/v2/sessions/{id}` | Get session details |
| `POST` | `/api/v2/sessions/{id}/team` | Activate team |
| `POST` | `/api/v2/sessions/{id}/message` | Add message to conversation |
| `POST` | `/api/v2/sessions/{id}/checkpoint` | Create checkpoint |
| `POST` | `/api/v2/sessions/{id}/pause` | Pause session |
| `POST` | `/api/v2/sessions/{id}/resume` | Resume session |
| `POST` | `/api/v2/sessions/{id}/complete` | Complete session |

#### Tool Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/v2/tools` | List all tools |
| `GET` | `/api/v2/tools/{name}` | Get tool details |
| `POST` | `/api/v2/tools` | Register new tool |
| `POST` | `/api/v2/tools/{name}/invoke` | Invoke a tool |
| `GET` | `/api/v2/tools/contract` | Get tool contract document |
| `GET` | `/api/v2/tools/for-agent/{code}` | Get tools accessible to agent |

#### Trace & Cost Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/v2/traces` | Query traces (filters: session, agent, type) |
| `GET` | `/api/v2/traces/errors` | Get error traces |
| `GET` | `/api/v2/traces/interactions/{session_id}` | Agent interaction graph |
| `GET` | `/api/v2/cost/session/{id}` | Cost by session |
| `GET` | `/api/v2/cost/agent/{code}` | Cost by agent |
| `GET` | `/api/v2/cost/report` | Generate cost report |

#### System Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/v2/health` | Runtime health check |
| `GET` | `/api/v2/status` | Full system status |
| `GET` | `/api/v2/departments` | Department summary |
| `GET` | `/api/v2/hierarchy` | Org hierarchy tree |

### 9.2 gRPC Services (Optional)

For high-throughput internal communication between agents, gRPC services can be added:

```protobuf
service AgentService {
    rpc GetAgent(AgentRequest) returns (AgentResponse);
    rpc InvokeAgent(InvokeRequest) returns (InvokeResponse);
    rpc StreamAgentOutput(InvokeRequest) returns (stream OutputChunk);
}

service ToolService {
    rpc InvokeTool(ToolRequest) returns (ToolResponse);
    rpc ListTools(ToolFilterRequest) returns (ToolListResponse);
}

service SessionService {
    rpc CreateSession(SessionConfig) returns (SessionResponse);
    rpc AddMessage(MessageRequest) returns (MessageResponse);
}
```

### 9.3 WebSocket Events

For real-time monitoring (dashboard integration):

| Event | Payload | When |
|-------|---------|------|
| `agent.activated` | `{code, session_id}` | Agent activated |
| `agent.deactivated` | `{code, session_id}` | Agent deactivated |
| `agent.overloaded` | `{code, sessions}` | Agent hit max concurrent |
| `session.created` | `{session_id, project}` | New session |
| `session.stage_changed` | `{session_id, stage}` | Lifecycle stage transition |
| `trace.error` | `{record_id, agent, error}` | Execution error |
| `cost.alert` | `{scope, percentage}` | Budget threshold hit |
| `version.created` | `{entity, code, version}` | New version registered |

---

## 10. Migration Path

### 10.1 NexusPromptLoader v1 to TEA Runtime v2

The migration is designed to be **non-breaking**. The `NexusRuntime` facade exposes the same API surface as `NexusPromptLoader`:

| v1 API | v2 API | Notes |
|--------|--------|-------|
| `NexusPromptLoader(dir)` | `NexusRuntime(dir)` | Drop-in replacement |
| `loader.load_all()` | `runtime.initialize()` | Returns richer stats |
| `loader.get_agent("CTO")` | `runtime.get_agent("CTO")` | Returns `AgentRecord` instead of `Agent` |
| `loader.get_agent_by_number(2)` | `runtime.get_agent_by_number(2)` | Same |
| `loader.list_agents()` | `runtime.list_agents()` | Same interface, richer filtering |
| `loader.create_project(...)` | `runtime.create_session(...)` | Renamed: project -> session |
| `loader.activate_team(pid, team)` | `runtime.activate_team(sid, team)` | Same |
| `loader.deactivate_team(pid)` | `session_manager.deactivate_team(sid)` | Same |
| `loader.get_mvt("A")` | `runtime.get_mvt("A")` | Same |
| `loader.build_agent_context(code, pid)` | `runtime.get_llm_payload(code, sid)` | Enhanced |
| `loader.system_status()` | `runtime.system_status()` | Richer output |
| `loader.export_registry(path)` | `runtime.export_registry(path)` | Same |

### 10.2 Migration Steps

1. **Install TEA Runtime** -- `pip install nexus-tea-runtime` (or copy modules)
2. **Replace import** -- `from nexus_runtime import NexusRuntime` instead of `NexusPromptLoader`
3. **Replace constructor** -- `runtime = NexusRuntime(agents_dir)` + `runtime.initialize()`
4. **Optional: Enable persistence** -- Pass `db_path` for trace storage
5. **Optional: Enable session storage** -- Pass `session_storage` directory
6. **Optional: Configure budgets** -- `runtime.cost_tracker.set_budget(...)`

### 10.3 Backward Compatibility Guarantees

- All v1 method names are preserved as aliases on `NexusRuntime`
- v1 `Agent` dataclass fields are accessible via `AgentRecord.identity` and `AgentRecord.state`
- v1 JSON export format is preserved (with additional fields added)
- No breaking changes to prompt file format -- all 195 existing `.md` files load without modification

### 10.4 What v2 Adds Over v1

| Capability | v1 | v2 |
|-----------|----|----|
| Prompt versioning | No | Yes -- immutable versions with rollback |
| Lifecycle states | active/inactive | active/inactive/idle/overloaded/retired |
| Execution tracing | No | Yes -- SQLite-backed full audit trail |
| Cost tracking | No | Yes -- per-model, per-agent, per-session |
| Tool registry | No | Yes -- with tier-based permissions |
| Session checkpointing | No | Yes -- with conversation snapshots |
| Health monitoring | Basic count | Overload detection, latency tracking |
| Semantic search | No | Capability-based agent discovery |
| Budget controls | No | Yes -- alerts and hard caps |
| Model tiering | Fixed model | Tier-based model selection |
| Reporting chains | No | Full hierarchy traversal |
| Self-evolution | No | Prompt refinement from production data |
| REST API | No | Full CRUD API for all entities |

---

## Appendix A: File Layout

```
nexus-runtime/
  01-TEA-RUNTIME-CORE.md          # This specification
  src/
    nexus_runtime/
      __init__.py
      models.py                    # Section 8.1 -- data models
      agent_registry.py            # Section 8.2 -- ACP implementation
      tool_registry.py             # Section 8.3 -- TCP implementation
      session_manager.py           # Section 8.4 -- session lifecycle
      execution_tracer.py          # Section 8.5 -- trace storage
      cost_tracker.py              # Section 8.6 -- cost management
      runtime.py                   # Section 8.7 -- unified facade
      api/
        routes.py                  # Section 9.1 -- REST endpoints
        websocket.py               # Section 9.3 -- real-time events
  tests/
    test_agent_registry.py
    test_tool_registry.py
    test_session_manager.py
    test_execution_tracer.py
    test_cost_tracker.py
    test_runtime.py
  pyproject.toml
```

## Appendix B: Glossary

| Term | Definition |
|------|-----------|
| **ACP** | Agent Context Protocol -- manages agent registration, representation, and orchestration |
| **TCP** | Tool Context Protocol -- manages tool registration, access control, and invocation |
| **ECP** | Environment Context Protocol -- manages computational environments as first-class components |
| **TEA** | Tool-Environment-Agent -- the unified protocol that treats all three as first-class entities |
| **MVT** | Minimum Viable Team -- the smallest agent team needed for a project type |
| **Trace** | A single recorded execution event (LLM call, tool invocation, message, etc.) |
| **Version** | An immutable snapshot of an agent's prompt, tool's code, or environment's config |
| **Session** | A client project engagement that binds agents, tools, and conversation history |
| **Checkpoint** | A resumable snapshot of session state for crash recovery or pause/resume |
| **Self-Evolution** | The process by which agents refine their own prompts from production feedback |

---

*End of TEA Runtime Core Specification v2.0*
