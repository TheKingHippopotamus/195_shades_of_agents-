# NEXUS Runtime -- Master Architecture Blueprint v1.0

> **Classification:** STRATEGIC / INTERNAL
> **Author:** CSA (Agent 012) -- Chief Systems Architect
> **Date:** 2026-02-19
> **Status:** APPROVED -- Foundation Document
> **Audience:** All 195 agents, all 20 departments, all workstream leads

---

## Table of Contents

1. [System Overview](#1-system-overview)
2. [Architecture Layers](#2-architecture-layers)
3. [Component Map](#3-component-map)
4. [Data Flow](#4-data-flow)
5. [Integration Points](#5-integration-points-the-10-workstreams)
6. [Technology Decisions](#6-technology-decisions)
7. [Deployment Architecture](#7-deployment-architecture)
8. [Phase-by-Phase Build Plan](#8-phase-by-phase-build-plan)
9. [Risk Analysis](#9-risk-analysis)
10. [ASCII Architecture Diagrams](#10-ascii-architecture-diagrams)
11. [Research Provenance](#11-research-provenance)

---

## 1. System Overview

### 1.1 What Is the NEXUS Runtime?

The NEXUS Runtime is the production execution platform that transforms 195 static markdown agent prompts into a **live, autonomous, self-optimizing software agency**. It is the bridge between organizational design (prompts, hierarchies, protocols) and operational reality (running agents that accept client work, reason through problems, coordinate across departments, and deliver software).

Today, NEXUS AI exists as a meticulously designed organizational blueprint -- 195 agents across 20 departments with defined reporting chains, escalation rules, interaction protocols, and a 13-stage project lifecycle. The Runtime makes this blueprint executable.

### 1.2 Why It Exists

**Ground truth (first principles):**
- A prompt file is inert until loaded into an LLM with the right context, tools, and communication channels.
- 195 agents operating independently produce noise. 195 agents operating under learned orchestration produce a symphony.
- The hard problem is not "how to make one agent smart" but "how to coordinate 195 agents so the whole system is smarter than any individual."
- Cost without intelligence routing is linear with agent count. With intelligent routing, cost scales sub-linearly while quality scales super-linearly.

**What the Runtime must achieve:**
1. Load any of 195 agent prompts and instantiate them as live reasoning entities
2. Route client requests through the correct agent chain with learned orchestration policy
3. Enforce governance gates (architecture review, security review, QA gate, legal review, release approval, change management) as hard constraints
4. Optimize cost by routing simple subtasks to lightweight models and reserving frontier models for critical reasoning
5. Maintain system health, handle failures gracefully, and learn from every interaction
6. Scale from a single project to hundreds of concurrent client engagements

### 1.3 Design Principles

| Principle | Source | Application |
|-----------|--------|-------------|
| Centralized orchestration with learned policy | Puppeteer (2505.19591) | A trained dispatcher decides which agent activates next, not the agents themselves |
| First-class lifecycle management | TEA Protocol (2506.12508) | Every tool, environment, and agent has explicit create/version/retire semantics |
| Separation of brains from hands | Team of Rivals (2601.14351) | Reasoning agents never touch raw data; remote executors handle transformations |
| Decentralized within departments, centralized across | Symphony (2508.20019) | Departments run internal coordination via beacon selection; cross-department flows via central orchestrator |
| Hierarchical veto, not consensus | Team of Rivals (2601.14351) | Critics have absolute veto authority; approved outputs are the only outputs that advance |
| Dynamic model routing | CASTER (2601.19793) | Lightweight neural router assigns GPT-4o-class for hard subtasks, smaller models for routine ones |
| Agent-wise RL optimization | DrMAS (2602.08847) | Per-agent reward normalization prevents gradient explosion during policy training |
| 8-12 tool limit per agent | Design Patterns (2601.03328) | Each specialist agent has a focused toolset; no agent is a generalist burdened with 50 tools |
| Workflow-aware scheduling | Kairos (2508.06948) | Request priority based on remaining workflow latency, not FIFO |
| Stage-gated quality | Team of Rivals (2601.14351) | Pre-declared acceptance criteria, independent critics, Swiss cheese error model |

---

## 2. Architecture Layers

The NEXUS Runtime is organized into 7 layers, from infrastructure at the bottom to client interface at the top. Each layer has a single responsibility and communicates with adjacent layers through defined contracts.

### Layer 0: Infrastructure & Compute

**Responsibility:** Raw compute, GPU scheduling, container orchestration, storage.

- GPU cluster management with multi-project colocation (Kairos)
- Kubernetes-based container orchestration for agent runtimes
- Object storage for agent memory, checkpoints, and artifacts
- Message queue infrastructure (NATS/Kafka) for inter-agent communication
- PostgreSQL + pgvector for persistent memory and vector search

### Layer 1: Model Serving & Routing

**Responsibility:** LLM inference, model selection, cost optimization.

- vLLM-based model serving with continuous batching
- CASTER-inspired neural router for dynamic strong/weak model dispatch
- Memory-aware request dispatcher (Kairos) to prevent GPU overloading
- Model registry with versioned endpoints (Claude, GPT-4o, Qwen, Llama, Gemini)
- Token metering and cost attribution per agent per project

### Layer 2: TEA Runtime Core

**Responsibility:** Agent lifecycle, tool management, environment isolation, session state.

- **Agent Context Protocol (ACP):** Register, activate, deactivate, version agents from 195 prompt files
- **Tool Context Protocol (TCP):** Dynamic tool registration with schema generation, semantic retrieval
- **Environment Context Protocol (ECP):** Managed execution environments (code sandbox, browser, file system, database)
- **Version Manager:** Track evolution of prompts, tools, and agent code across iterations
- **Tracer:** Full execution trajectory recording for audit, debugging, and training data synthesis
- **Self-Evolution Module:** Closed-loop feedback to refine prompts, tools, and agent behaviors

### Layer 3: Orchestration Intelligence

**Responsibility:** Dynamic agent routing, workflow management, learned scheduling.

- **Puppeteer Policy:** RL-trained orchestrator that selects which agent activates next based on system state
- **Workflow Orchestrator:** Automatic workflow analysis, DAG construction, critical path identification
- **Priority Scheduler:** Workflow-aware scheduling based on remaining execution latency (Kairos)
- **Load Balancer:** Monitor agent utilization across all 195 agents; redistribute work to prevent bottlenecks
- **Circuit Breaker:** Stop routing through failing agents; activate contingency paths
- **DrMAS Training Loop:** Agent-wise GRPO normalization for stable co-training of orchestration policy

### Layer 4: Governance Engine

**Responsibility:** Quality gates, compliance enforcement, veto authority, audit trail.

- **Stage-Gated Review:** Pre-declared acceptance criteria evaluated by independent critics (Team of Rivals)
- **Governance Agent Bus:** Routes outputs to Tier 8 agents (ARB-AGENT, SEC-REVIEW, LEGAL-REVIEW, QA-GATE, REL-APPROVE, CHANGE-MGR)
- **Veto Authority Chain:** Hierarchical, not democratic -- any governance gate can halt advancement
- **Context Ray Tracing:** Message visibility filtering so each agent sees only what it needs (Team of Rivals)
- **Compliance Registry:** Policy definitions, regulatory constraints, and domain guardrails
- **Audit Log:** Complete event-sourced record with bidirectional traversal for post-hoc investigation

### Layer 5: Project Lifecycle Engine

**Responsibility:** 13-stage lifecycle management, agent activation/deactivation, handoffs.

- **Lifecycle State Machine:** Tracks every project through 13 stages (Lead Qualification through Maintenance)
- **Agent Activation Playbook:** Automatically activates/deactivates agents based on lifecycle stage
- **Minimum Viable Team (MVT):** Project-type-based team templates (A through I) for fast team composition
- **Handoff Protocol:** Structured handoffs between lifecycle stages with context preservation
- **Heartbeat Monitor:** Detect silent failures -- missing commits, missing status updates, missing deliverables
- **Escalation Engine:** Route blocked work up the hierarchy following documented escalation rules

### Layer 6: Client Interface & API

**Responsibility:** Client project intake, progress visibility, deliverable presentation.

- **Project Intake API:** Accept client requests, classify project type, trigger lifecycle
- **Real-time Dashboard:** Show project status, active agents, metrics, deliverables
- **Multi-User Interactivity:** Multiple human stakeholders can approve, review, and escalate at defined checkpoints
- **Deliverable Gateway:** Structured output of code, documentation, reports, analyses
- **Webhook/Event System:** Push notifications on lifecycle transitions, governance decisions, completions

---

## 3. Component Map

Every major component, its responsibility, the layer it belongs to, and the research paper that inspires its design.

| Component | Layer | Responsibility | Paper Inspiration |
|-----------|-------|---------------|-------------------|
| GPU Scheduler | L0 | Multi-project GPU colocation, memory-aware dispatch | Kairos (2508.06948) |
| Model Router | L1 | Dynamic strong/weak model selection per subtask | CASTER (2601.19793) |
| Model Serving (vLLM) | L1 | High-throughput LLM inference with continuous batching | Kairos (2508.06948) |
| Cost Optimizer | L1 | Token metering, budget enforcement, cost attribution | CASTER + DrMAS |
| Agent Registry | L2 | Load 195 prompt files, manage agent lifecycle | TEA Protocol (2506.12508) |
| Tool Registry | L2 | Register, version, discover tools with semantic search | TEA Protocol (2506.12508) |
| Environment Manager | L2 | Sandbox, browser, filesystem, database environments | TEA Protocol (2506.12508) |
| Session Manager | L2 | Conversation state, checkpointing, time-travel rollback | Team of Rivals (2601.14351) |
| Version Manager | L2 | Track prompt/tool/code evolution with rollback | TEA Protocol (2506.12508) |
| Tracer | L2 | Full execution trajectory for audit and training | TEA Protocol (2506.12508) |
| Self-Evolution Module | L2 | Closed-loop prompt/tool refinement from feedback | TEA Protocol (2506.12508) |
| Puppeteer Orchestrator | L3 | RL-trained agent selection policy | Puppeteer (2505.19591) |
| Workflow Analyzer | L3 | Automatic workflow DAG construction | Kairos (2508.06948) |
| Priority Scheduler | L3 | Remaining-latency-aware request scheduling | Kairos (2508.06948) |
| Beacon Selector | L3 | Intra-department agent matching by capability score | Symphony (2508.20019) |
| Load Balancer | L3 | Agent utilization monitoring and redistribution | Orchestral (2601.02577) |
| Circuit Breaker | L3 | Failure detection, contingency routing | IEEE MAS (2601.13671) |
| RL Training Loop | L3 | Agent-wise GRPO with per-agent normalization | DrMAS (2602.08847) |
| Governance Bus | L4 | Route outputs to Tier 8 governance agents | Team of Rivals (2601.14351) |
| Acceptance Criteria Engine | L4 | Pre-declared quality gates, independent critic evaluation | Team of Rivals (2601.14351) |
| Context Ray Tracer | L4 | Role-based message visibility filtering | Team of Rivals (2601.14351) |
| Veto Authority Chain | L4 | Hierarchical veto with absolute critic authority | Team of Rivals (2601.14351) |
| Remote Code Executor | L4 | Isolated execution of data transformations, tool invocations | Team of Rivals (2601.14351) |
| Compliance Registry | L4 | Policy definitions, regulatory constraints | IEEE MAS (2601.13671) |
| Lifecycle State Machine | L5 | 13-stage project tracking | NEXUS 01-PROJECT-LIFECYCLE-MAP |
| Agent Activation Controller | L5 | Stage-based agent activation/deactivation | NEXUS 02-AGENT-ACTIVATION-PLAYBOOK |
| MVT Composer | L5 | Project-type team template selection | NEXUS 10-AGENT-SYSTEM-PROMPT-LOADER |
| Heartbeat Monitor | L5 | Silent failure detection via signal analysis | NEXUS-ORCHESTRATOR (Agent 195) |
| Escalation Engine | L5 | Blocked-work routing up hierarchy | NEXUS 00-ESCALATION-RULES |
| Project Intake API | L6 | Client request classification and lifecycle triggering | Design Patterns (2601.03328) |
| Dashboard | L6 | Real-time project status, agent metrics | IEEE MAS (2601.13671) |
| Multi-User Gateway | L6 | Human-in-the-loop approvals, reviews | Team of Rivals (2601.14351) |

---

## 4. Data Flow

### 4.1 Request Flow: Client to Deliverable

This is the end-to-end flow of a client request through the NEXUS Runtime.

```
CLIENT REQUEST
     |
     v
[L6: Project Intake API]
     |  Classify request type, estimate complexity
     v
[L5: Lifecycle State Machine]
     |  Create project, set to Stage 1 (Lead Qualification)
     |  Activate MVT based on project type
     v
[L3: Puppeteer Orchestrator]
     |  Observe system state S_t
     |  Select first agent a_t from policy pi(a|S_t, task)
     v
[L2: Agent Registry]
     |  Load agent prompt, inject project context
     |  Bind tools from Tool Registry
     |  Create session in Session Manager
     v
[L1: Model Router (CASTER)]
     |  Estimate subtask difficulty
     |  Route to appropriate model (strong/weak)
     v
[L0: GPU Scheduler + vLLM]
     |  Execute LLM inference
     |  Return agent output
     v
[L3: Puppeteer Orchestrator]
     |  Update system state S_{t+1}
     |  Check: governance gate required?
     |  YES --> [L4: Governance Bus]
     |           |  Route to appropriate Tier 8 agent
     |           |  Critic evaluates against acceptance criteria
     |           |  APPROVED --> advance
     |           |  REJECTED --> retry within team boundary
     |  NO  --> Select next agent a_{t+1}
     |
     v  (Loop continues until task complete or lifecycle stage transition)
     |
[L5: Lifecycle State Machine]
     |  Transition to next stage
     |  Activate/deactivate agents per stage
     |
     v  (Repeat through all 13 stages)
     |
[L6: Deliverable Gateway]
     |  Format outputs for client
     |  Present via dashboard / API
     v
CLIENT RECEIVES DELIVERABLE
```

### 4.2 Inter-Agent Communication Flow

```
AGENT A (Dept X)                    AGENT B (Dept Y)
     |                                    ^
     | Generate output                    | Receive filtered context
     v                                    |
[L4: Context Ray Tracer]          [L4: Context Ray Tracer]
     |  Filter: what does B need?         |  Filter: only relevant data
     v                                    |
[L2: Session Manager]  -------->  [L2: Session Manager]
     |  Structured message (Pydantic)     |
     |  with type, sender, recipient,     |
     |  payload, visibility scope         |
     v                                    v
[L2: Tracer]                      [L2: Tracer]
     Record full trajectory               Record full trajectory
```

### 4.3 Governance Gate Flow

```
AGENT OUTPUT (from executor)
     |
     v
[L4: Governance Bus]
     |  Determine which gates apply
     |  (architecture? security? legal? QA? release? change?)
     v
[L4: Acceptance Criteria Engine]
     |  Load pre-declared criteria from plan
     v
[Tier 8 Agent: e.g., SEC-REVIEW (182)]
     |  Evaluate output against criteria
     |  Using different model provider than producer (cognitive diversity)
     |
     +---> APPROVED: Output advances to next stage
     |
     +---> REJECTED: Return to team with rejection reason
     |     |  Team retries within boundary (max 3 attempts)
     |     |  On persistent failure: escalate to user
     |
     +---> ESCALATE: Route to C-Suite for decision
```

---

## 5. Integration Points: The 10 Workstreams

The NEXUS Runtime is built through 10 parallel workstreams. This section defines how each workstream connects to the master architecture and to each other.

### Workstream Map

| # | Workstream | Primary Layer | Key Components | Dependencies |
|---|-----------|---------------|----------------|-------------|
| WS1 | Master Architecture (this document) | ALL | Architecture blueprint | None (foundation) |
| WS2 | TEA Runtime Core | L2 | Agent/Tool/Env registries, sessions, versioning | WS1 |
| WS3 | Orchestration Intelligence | L3 | Puppeteer policy, workflow analyzer, scheduler | WS2 |
| WS4 | Product Requirements | ALL | PRD for NEXUS Runtime product | WS1 |
| WS5 | Governance Engine | L4 | Veto chain, acceptance criteria, governance bus | WS2, WS3 |
| WS6 | Context Ray Tracing | L4 | Message visibility, role-based filtering | WS2, WS5 |
| WS7 | Cost Optimization | L1 | Model router, token metering, budget enforcement | WS2, WS3 |
| WS8 | Project Lifecycle Engine | L5 | State machine, agent activation, MVT, escalation | WS2, WS3, WS5 |
| WS9 | Market Position | -- | Competitive analysis, positioning | WS1, WS4 |
| WS10 | Documentation | ALL | Technical docs, API reference, runbooks | All WS |

### Integration Contracts

**WS2 (TEA Core) provides to all other workstreams:**
- Agent Registry API: `register(prompt_file) -> agent_id`
- Tool Registry API: `register(tool_def) -> tool_id`, `discover(query) -> tool_list`
- Session API: `create(project_id, agents) -> session_id`, `checkpoint() -> checkpoint_id`, `rollback(checkpoint_id)`
- Tracer API: `record(event)`, `query(filters) -> trajectory`

**WS3 (Orchestration) consumes from WS2 and provides to WS5, WS8:**
- Orchestrator API: `select_next_agent(system_state) -> agent_id`
- Workflow API: `analyze(task) -> DAG`, `get_remaining_latency(request_id) -> ms`
- Scheduler API: `enqueue(request, priority)`, `dispatch(request, instance_id)`

**WS5 (Governance) consumes from WS2, WS3 and provides to WS6, WS8:**
- Governance API: `submit_for_review(output, gate_type) -> review_id`
- Veto API: `approve(review_id)`, `reject(review_id, reason)`
- Criteria API: `declare(plan_id, criteria)`, `evaluate(output, criteria) -> pass/fail`

**WS6 (Context Ray Tracing) consumes from WS2, WS5:**
- Visibility API: `filter_context(agent_role, message) -> filtered_message`
- Ray API: `trace_backward(output_id) -> source_chain`, `trace_forward(input_id) -> impact_set`

**WS7 (Cost Optimization) consumes from WS2, WS3:**
- Router API: `route(subtask) -> model_id` (strong/weak selection)
- Meter API: `record_usage(agent_id, project_id, tokens, cost)`
- Budget API: `check_budget(project_id) -> remaining`, `enforce_limit(project_id, max_cost)`

**WS8 (Lifecycle Engine) consumes from WS2, WS3, WS5:**
- Lifecycle API: `create_project(type, client) -> project_id`, `advance_stage(project_id)`
- Activation API: `get_mvt(project_type) -> agent_list`, `activate(project_id, agent_list)`, `deactivate(project_id)`
- Heartbeat API: `register(project_id, expected_cadence)`, `check_health(project_id) -> status`

---

## 6. Technology Decisions

### 6.1 Language & Frameworks

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| Primary language | **Python 3.12+** | LLM ecosystem, agent framework maturity, team expertise |
| Async runtime | **asyncio + uvloop** | Coroutine-based concurrency for parallel agent coordination (TEA Protocol) |
| API framework | **FastAPI** | Type-safe, async-native, OpenAPI auto-generation |
| Agent orchestration | **Custom (LangGraph-inspired)** | Stateful graph execution with cyclic support (CASTER) |
| Type safety | **Pydantic v2** | Structured inter-agent messages, tool schemas, validation |
| Testing | **pytest + hypothesis** | Property-based testing for agent interaction contracts |

### 6.2 Databases & Storage

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| Primary database | **PostgreSQL 16** | ACID transactions, JSON support, mature ecosystem |
| Vector search | **pgvector** | Semantic memory retrieval integrated with PostgreSQL |
| Session state | **Redis 7** | Fast checkpoint storage, pub/sub for real-time events |
| Object storage | **S3-compatible (MinIO local, S3 cloud)** | Agent artifacts, code outputs, large file storage |
| Message queue | **NATS JetStream** | Lightweight, high-performance inter-agent messaging |

### 6.3 LLM Infrastructure

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| Model serving | **vLLM** | Continuous batching, PagedAttention, multi-model support (Kairos) |
| Frontier models | **Claude Opus 4.6, GPT-4o, Gemini 2.5 Pro** | Critical reasoning, governance review, complex planning |
| Efficient models | **Claude Haiku 4.5, GPT-4o-mini, Qwen3-8B** | Routine tasks, code generation, data extraction |
| Local models | **Llama 3.3-70B, Qwen3-32B** | Privacy-sensitive work, cost reduction, offline capability |
| Model router | **Custom CASTER implementation** | Dual-branch neural router (semantic + structural features) |
| RL training | **veRL + DrMAS extensions** | Agent-wise GRPO normalization for policy training |

### 6.4 Infrastructure & DevOps

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| Container runtime | **Docker + Kubernetes** | Production orchestration, scaling, health management |
| GPU orchestration | **NVIDIA GPU Operator + Kairos scheduler** | Multi-agent colocation, memory-aware dispatch |
| CI/CD | **GitHub Actions** | Integration with existing NEXUS AI repository |
| Monitoring | **Prometheus + Grafana** | Metrics collection, alerting, dashboards |
| Tracing | **OpenTelemetry** | Distributed tracing across agent chains |
| Logging | **Structured JSON logs + Loki** | Searchable, correlated agent interaction logs |

---

## 7. Deployment Architecture

### 7.1 Development Environment (Single Machine)

```
Developer Laptop / Workstation
+-----------------------------------------------+
| Docker Compose                                 |
|  +----------+  +----------+  +-----------+     |
|  | FastAPI   |  | PostgreSQL|  | Redis     |     |
|  | (Runtime) |  | + pgvector|  | (State)   |     |
|  +----------+  +----------+  +-----------+     |
|  +----------+  +----------+  +-----------+     |
|  | NATS     |  | MinIO    |  | vLLM      |     |
|  | (Msgs)   |  | (Storage)|  | (1 model) |     |
|  +----------+  +----------+  +-----------+     |
+-----------------------------------------------+
External API calls to Claude/GPT/Gemini
```

### 7.2 Staging Environment (Small Cluster)

```
Kubernetes Cluster (4-8 nodes, 2-4 GPUs)
+--------------------------------------------------+
| Namespace: nexus-staging                          |
|                                                   |
| Control Plane:                                    |
|  +-------------+  +-------------+  +----------+  |
|  | Runtime API  |  | Orchestrator|  | Governance|  |
|  | (3 replicas) |  | (2 replicas)|  | (2 repl) |  |
|  +-------------+  +-------------+  +----------+  |
|                                                   |
| Data Plane:                                       |
|  +----------+  +----------+  +-----------+        |
|  | PostgreSQL|  | Redis HA |  | NATS      |        |
|  | (Primary+ |  | (3 nodes)|  | (3 nodes) |        |
|  |  Replica) |  +----------+  +-----------+        |
|  +----------+                                     |
|                                                   |
| GPU Plane:                                        |
|  +------------+  +------------+  +------------+   |
|  | vLLM Pod 1 |  | vLLM Pod 2 |  | Code Sandbox|  |
|  | (Frontier) |  | (Efficient)|  | (Isolated)  |  |
|  +------------+  +------------+  +------------+   |
+--------------------------------------------------+
```

### 7.3 Production Environment (Full Scale)

```
Multi-Region Kubernetes (AWS EKS / GCP GKE)
+===========================================================+
|                     REGION: US-WEST-2                       |
|                                                             |
|  +-- Ingress (ALB / Istio) --+                              |
|  |  TLS termination          |                              |
|  |  Rate limiting            |                              |
|  |  Auth (JWT + API keys)    |                              |
|  +---------------------------+                              |
|              |                                              |
|  +-- Control Plane (Auto-scaled) --+                        |
|  | Runtime API       (5-20 pods)   |                        |
|  | Orchestrator       (3-10 pods)  |                        |
|  | Governance Engine  (3-5 pods)   |                        |
|  | Lifecycle Engine   (3-5 pods)   |                        |
|  | Cost Optimizer     (2-3 pods)   |                        |
|  +----------------------------------+                       |
|              |                                              |
|  +-- Data Plane (Managed Services) --+                      |
|  | RDS PostgreSQL   (Multi-AZ, r/w split)  |                |
|  | ElastiCache Redis (Cluster mode)        |                |
|  | NATS JetStream   (3-node cluster)       |                |
|  | S3              (Standard + IA tiers)   |                |
|  +------------------------------------------+               |
|              |                                              |
|  +-- GPU Plane (Spot + On-Demand) --+                       |
|  | vLLM Pool: Frontier  (4-8 x A100/H100)  |               |
|  | vLLM Pool: Efficient (8-16 x A10G/L40)  |               |
|  | vLLM Pool: Local     (4-8 x A10G)       |               |
|  | Code Sandbox Pool    (10-20 pods)        |               |
|  | GPU Scheduler (Kairos)                   |               |
|  +-------------------------------------------+              |
|              |                                              |
|  +-- Observability --+                                      |
|  | Prometheus + Grafana   |                                 |
|  | OpenTelemetry Collector|                                 |
|  | Loki (Logs)           |                                  |
|  | PagerDuty (Alerts)    |                                  |
|  +------------------------+                                 |
+===========================================================+
```

---

## 8. Phase-by-Phase Build Plan

### Phase 1: Foundation (Weeks 1-4)

**Objective:** Core runtime that can load agents, route requests, and execute single-agent tasks.

| Deliverable | Owner Dept | Dependencies |
|-------------|-----------|-------------|
| Agent Registry: load 195 prompts, instantiate agents | Engineering (02) | None |
| Tool Registry: register tools with auto-schema generation | Engineering (02) | Agent Registry |
| Session Manager: create/checkpoint/rollback sessions | Engineering (02) | PostgreSQL + Redis |
| Basic API: accept request, load agent, call LLM, return response | Engineering (02) | Agent Registry |
| Prompt Loader integration: connect existing Python loader to runtime | Engineering (02) | Agent prompts |
| Development environment: Docker Compose with all services | Platform (03) | All above |

**Exit Criteria:** Can load any of 195 agents, send a request, get an LLM response with agent personality intact.

### Phase 2: Intelligence (Weeks 5-10)

**Objective:** Multi-agent orchestration with learned routing and cost optimization.

| Deliverable | Owner Dept | Dependencies |
|-------------|-----------|-------------|
| Puppeteer Orchestrator: RL-trained agent selection policy | Data Science (06) | Phase 1 |
| Workflow Analyzer: automatic DAG construction from task analysis | Engineering (02) | Phase 1 |
| Model Router (CASTER): dual-branch neural router for model selection | Data Science (06) | Phase 1 |
| Priority Scheduler: workflow-aware request scheduling | Platform (03) | Workflow Analyzer |
| Inter-agent messaging: NATS-based structured message passing | Platform (03) | Phase 1 |
| Beacon Selector: intra-department capability matching | Engineering (02) | Agent Registry |
| DrMAS training pipeline: agent-wise GRPO normalization setup | Data Science (06) | Puppeteer |

**Exit Criteria:** Multi-agent task completes end-to-end with orchestrator selecting agents. Model router achieves >30% cost reduction vs. all-frontier baseline.

### Phase 3: Governance (Weeks 11-16)

**Objective:** Quality gates, governance enforcement, audit trail, context isolation.

| Deliverable | Owner Dept | Dependencies |
|-------------|-----------|-------------|
| Governance Bus: route outputs to Tier 8 agents | Engineering (02) | Phase 2 |
| Acceptance Criteria Engine: pre-declared criteria, critic evaluation | QA (07) | Phase 2 |
| Veto Authority Chain: hierarchical veto with retry loops | Engineering (02) | Governance Bus |
| Context Ray Tracer: role-based message filtering | Security (08) | Inter-agent messaging |
| Remote Code Executor: isolated sandbox for data transformations | Platform (03) | Phase 1 |
| Audit Log: event-sourced with bidirectional traversal | Engineering (02) | Session Manager |
| Compliance Registry: policy definitions, guardrails | Legal (14) + Security (08) | None |

**Exit Criteria:** Governance gates functional for all 6 Tier 8 agents. Context isolation verified (agents see only filtered context). Audit trail supports backward tracing from any output.

### Phase 4: Lifecycle (Weeks 17-22)

**Objective:** Full 13-stage project lifecycle, client interface, production readiness.

| Deliverable | Owner Dept | Dependencies |
|-------------|-----------|-------------|
| Lifecycle State Machine: 13-stage tracking with transitions | Engineering (02) | Phase 3 |
| Agent Activation Controller: stage-based activation/deactivation | Engineering (02) | Phase 2 |
| MVT Composer: project-type team templates (A through I) | Product (04) | Agent Registry |
| Heartbeat Monitor: silent failure detection | Platform (03) | Phase 2 |
| Escalation Engine: rule-based routing up hierarchy | Engineering (02) | Phase 3 |
| Client Dashboard: real-time project status and metrics | Design (05) + Engineering (02) | All above |
| Multi-User Gateway: approval workflows, human-in-the-loop | Engineering (02) | Governance |
| Self-Evolution Module: feedback loop for prompt/tool refinement | Data Science (06) | Phase 2, 3 |

**Exit Criteria:** Complete project lifecycle from intake through delivery. Client can observe progress in real-time. Human approvals function at governance gates.

### Phase 5: Scale & Production (Weeks 23-30)

**Objective:** Production deployment, performance optimization, operational excellence.

| Deliverable | Owner Dept | Dependencies |
|-------------|-----------|-------------|
| Kubernetes deployment: multi-region, auto-scaling | Platform (03) | Phase 4 |
| GPU Scheduler (Kairos): memory-aware dispatch, colocation | Platform (03) | Model Serving |
| Load testing: 100 concurrent projects, 195 active agents | QA (07) | Phase 4 |
| Security hardening: penetration testing, compliance audit | Security (08) | Phase 3, 4 |
| Monitoring & alerting: Prometheus, Grafana, PagerDuty | Platform (03) | Phase 4 |
| Performance optimization: latency targets, cost targets | Engineering (02) | Phase 4 |
| Disaster recovery: backup, restore, failover procedures | Platform (03) | Phase 4 |
| Operational runbooks: incident response, escalation | Documentation (20) | All phases |
| RL policy refinement: continuous training from production data | Data Science (06) | Phase 2, 4 |

**Exit Criteria:** 99.9% uptime over 2-week burn-in. P95 latency <5s for agent responses. Cost per project within budget targets. Security audit passed.

---

## 9. Risk Analysis

### Top 10 Risks and Mitigations

| # | Risk | Probability | Impact | Mitigation |
|---|------|------------|--------|-----------|
| R1 | **LLM provider outage** disrupts all agent operations | MEDIUM | CRITICAL | Multi-provider fallback (Claude + GPT + Gemini + local Llama). Circuit breaker pattern. No single-provider dependency. |
| R2 | **Orchestration policy divergence** -- RL-trained router makes poor agent selections | MEDIUM | HIGH | Conservative initial policy with human override. Gradual rollout with A/B testing. DrMAS agent-wise normalization prevents gradient explosion. Rollback to previous policy version. |
| R3 | **Context window overflow** in complex multi-agent conversations | HIGH | MEDIUM | Context Ray Tracing limits what each agent sees. Remote Code Executor keeps raw data out of context. Summarizer agents compress intermediate results. Session checkpointing enables context reset. |
| R4 | **Cascade failure** -- one agent's error propagates through the system | MEDIUM | HIGH | Swiss cheese model with multiple critic layers. Stage-gated advancement (no output advances without critic approval). Circuit breaker stops routing to failing agents. Pre-declared acceptance criteria catch errors at boundaries. |
| R5 | **Cost explosion** from runaway agent loops or inefficient model routing | MEDIUM | HIGH | Budget enforcement at project and agent level. CASTER router proven to reduce costs 23-54%. Token metering with hard limits. Alert on anomalous spending. Kill switch for runaway sessions. |
| R6 | **Data leakage** between client projects or between agents | LOW | CRITICAL | Environment isolation via ECP. Tenant-scoped databases. Context Ray Tracing enforces visibility boundaries. Remote Code Executor prevents raw data from entering LLM context. Security audit by CISO team. |
| R7 | **Governance bottleneck** -- Tier 8 agents become blocking constraint | MEDIUM | MEDIUM | Parallel governance evaluation where gates are independent. Cache governance decisions for similar outputs. Async governance with configurable SLAs. Escalation bypass for pre-approved patterns. |
| R8 | **Training data quality** -- production traces contain noise that degrades RL policy | MEDIUM | MEDIUM | DrMAS negative feedback learning (correct failures, reinforce successes). On-policy training with boundary case focus. Version manager enables rollback. Human-curated validation set. |
| R9 | **GPU resource contention** across concurrent projects | HIGH | MEDIUM | Kairos memory-aware dispatcher prevents overloading. Spot instance pool for cost-efficient scaling. Priority queuing for revenue-critical projects. Auto-scaling based on queue depth. |
| R10 | **Team execution risk** -- 20 departments must coordinate to build the runtime | HIGH | HIGH | Phased build plan with clear exit criteria. Integration contracts defined upfront (Section 5). Weekly cross-workstream sync. CSA (this agent) has override authority for blocking decisions. |

---

## 10. ASCII Architecture Diagrams

### Diagram 1: System Layers

```
+==================================================================+
|                                                                    |
|  LAYER 6: CLIENT INTERFACE & API                                   |
|  +--------------------+  +------------------+  +----------------+  |
|  | Project Intake API  |  | Client Dashboard |  | Multi-User GW  |  |
|  +--------------------+  +------------------+  +----------------+  |
|                                                                    |
+============================||======================================+
                             ||
+============================||======================================+
|                                                                    |
|  LAYER 5: PROJECT LIFECYCLE ENGINE                                 |
|  +-------------------+  +------------------+  +----------------+   |
|  | Lifecycle State    |  | Agent Activation |  | Heartbeat      |   |
|  | Machine (13 stage) |  | Controller       |  | Monitor        |   |
|  +-------------------+  +------------------+  +----------------+   |
|  +-------------------+  +------------------+                       |
|  | MVT Composer       |  | Escalation       |                      |
|  |                    |  | Engine           |                      |
|  +-------------------+  +------------------+                       |
|                                                                    |
+============================||======================================+
                             ||
+============================||======================================+
|                                                                    |
|  LAYER 4: GOVERNANCE ENGINE                                        |
|  +-------------------+  +------------------+  +----------------+   |
|  | Governance Bus     |  | Acceptance       |  | Context Ray    |   |
|  | (6 Tier-8 Agents)  |  | Criteria Engine  |  | Tracer         |   |
|  +-------------------+  +------------------+  +----------------+   |
|  +-------------------+  +------------------+  +----------------+   |
|  | Veto Authority     |  | Remote Code      |  | Compliance     |   |
|  | Chain              |  | Executor         |  | Registry       |   |
|  +-------------------+  +------------------+  +----------------+   |
|  +-------------------+                                             |
|  | Audit Log          |                                            |
|  | (Event-Sourced)    |                                            |
|  +-------------------+                                             |
|                                                                    |
+============================||======================================+
                             ||
+============================||======================================+
|                                                                    |
|  LAYER 3: ORCHESTRATION INTELLIGENCE                               |
|  +-------------------+  +------------------+  +----------------+   |
|  | Puppeteer          |  | Workflow          |  | Priority       |   |
|  | Orchestrator (RL)  |  | Analyzer (DAG)   |  | Scheduler      |   |
|  +-------------------+  +------------------+  +----------------+   |
|  +-------------------+  +------------------+  +----------------+   |
|  | Beacon Selector    |  | Load Balancer    |  | Circuit        |   |
|  | (Intra-Dept)       |  | (195 agents)     |  | Breaker        |   |
|  +-------------------+  +------------------+  +----------------+   |
|  +-------------------+                                             |
|  | RL Training Loop   |                                            |
|  | (DrMAS)            |                                            |
|  +-------------------+                                             |
|                                                                    |
+============================||======================================+
                             ||
+============================||======================================+
|                                                                    |
|  LAYER 2: TEA RUNTIME CORE                                         |
|  +-------------------+  +------------------+  +----------------+   |
|  | Agent Registry     |  | Tool Registry    |  | Environment    |   |
|  | (195 agents, ACP)  |  | (TCP, schemas)   |  | Manager (ECP)  |   |
|  +-------------------+  +------------------+  +----------------+   |
|  +-------------------+  +------------------+  +----------------+   |
|  | Session Manager    |  | Version Manager  |  | Tracer         |   |
|  | (State, Ckpt)      |  | (Rollback)       |  | (Trajectories) |   |
|  +-------------------+  +------------------+  +----------------+   |
|  +-------------------+                                             |
|  | Self-Evolution     |                                            |
|  | Module             |                                            |
|  +-------------------+                                             |
|                                                                    |
+============================||======================================+
                             ||
+============================||======================================+
|                                                                    |
|  LAYER 1: MODEL SERVING & ROUTING                                  |
|  +-------------------+  +------------------+  +----------------+   |
|  | CASTER Model       |  | vLLM Serving     |  | Token Meter    |   |
|  | Router (Neural)    |  | (Cont. Batching) |  | & Cost Engine  |   |
|  +-------------------+  +------------------+  +----------------+   |
|  +-------------------+                                             |
|  | Model Registry     |                                            |
|  | (Multi-Provider)   |                                            |
|  +-------------------+                                             |
|                                                                    |
+============================||======================================+
                             ||
+============================||======================================+
|                                                                    |
|  LAYER 0: INFRASTRUCTURE & COMPUTE                                 |
|  +-------------------+  +------------------+  +----------------+   |
|  | Kubernetes         |  | GPU Cluster      |  | PostgreSQL     |   |
|  | (Container Orch.)  |  | (Kairos Sched.)  |  | + pgvector     |   |
|  +-------------------+  +------------------+  +----------------+   |
|  +-------------------+  +------------------+  +----------------+   |
|  | Redis (State)      |  | NATS JetStream   |  | S3 / MinIO     |   |
|  |                    |  | (Messages)       |  | (Artifacts)    |   |
|  +-------------------+  +------------------+  +----------------+   |
|                                                                    |
+==================================================================+
```

### Diagram 2: Request Data Flow

```
                         CLIENT
                           |
                           v
                  +------------------+
                  | L6: Intake API   |
                  +--------+---------+
                           |
                           v
                  +------------------+
                  | L5: Lifecycle    |
                  | State Machine    |
                  +--------+---------+
                           |
              +------------+------------+
              |                         |
              v                         v
     +------------------+     +------------------+
     | L5: MVT Composer |     | L5: Activation   |
     | (Select Team)    |     | Controller       |
     +--------+---------+     +--------+---------+
              |                         |
              +------------+------------+
                           |
                           v
                  +------------------+
                  | L3: Puppeteer    |
                  | Orchestrator     |<--------+
                  +--------+---------+         |
                           |                   |
                           v                   |
                  +------------------+         |
                  | L2: Agent        |         |
                  | Registry (Load)  |         |
                  +--------+---------+         |
                           |                   |
                           v                   |
                  +------------------+         |
                  | L1: CASTER       |         |
                  | Model Router     |         |
                  +--------+---------+         |
                           |                   |
                           v                   |
                  +------------------+         |
                  | L0: vLLM + GPU   |         |
                  | (Inference)      |         |
                  +--------+---------+         |
                           |                   |
                           v                   |
                  +------------------+         |
                  | L3: Update State |         |
                  | S_{t} -> S_{t+1} |         |
                  +--------+---------+         |
                           |                   |
                    +------+------+            |
                    |             |             |
                    v             v             |
           +-----------+  +-----------+        |
           | Gate?  NO |  | Gate? YES |        |
           +-----+-----+  +-----+-----+       |
                 |               |              |
                 |               v              |
                 |        +-----------+         |
                 |        | L4: Gov.  |         |
                 |        | Bus       |         |
                 |        +-----+-----+         |
                 |              |               |
                 |        +-----+-----+        |
                 |        | APPROVE?  |        |
                 |        +---+---+---+        |
                 |            |   |             |
                 |        YES |   | NO (retry)  |
                 |            |   +--------->---+
                 |            |
                 +------+-----+
                        |
                        v
               +------------------+
               | Next Agent or    |
               | Stage Transition |-----> (loop back to Orchestrator)
               +------------------+
```

### Diagram 3: Department-Level Agent Topology

```
                        +-------+
                        |  CEO  |
                        +---+---+
                            |
    +-----------+-----------+-----------+-----------+
    |           |           |           |           |
+---+---+  +---+---+  +---+---+  +---+---+  +---+---+
|  CTO  |  |  CPO  |  |  COO  |  |  CFO  |  | CAIO  |
+---+---+  +---+---+  +---+---+  +---+---+  +---+---+
    |           |           |           |           |
    v           v           v           v           v
+--------+ +--------+ +--------+ +--------+ +--------+
| Dept02 | | Dept04 | | Dept07 | | Dept13 | | Dept06 |
| Eng.   | | Product| | QA     | | Finance| | AI/ML  |
| 40 agt | | 10 agt | | 8 agt  | | 7 agt  | | 12 agt |
+---+----+ +---+----+ +---+----+ +---+----+ +---+----+
    |           |           |           |           |
    |   +-------+           |           |           |
    |   |                   |           |           |
    v   v                   v           v           v
 +--------+             +--------+  +--------+  +--------+
 | Dept03 |             | Dept15 |  | Dept14 |  | Dept19 |
 | Infra  |             | IT Ops |  | Legal  |  | Special|
 | 12 agt |             | 5 agt  |  | 7 agt  |  | 9 agt  |
 +--------+             +--------+  +--------+  +--------+

 WITHIN EACH DEPARTMENT (Example: Engineering, 40 agents):
 +--------------------------------------------------------------+
 | SVP-ENG                                                       |
 |   +-- VP-ENG                                                  |
 |   |    +-- DIR-FE  --> SEM-FE --> EM-FE --> {SR-FE, FE, JR}  |
 |   |    +-- DIR-BE  --> SEM-BE --> EM-BE --> {SR-BE, BE, JR}  |
 |   |    +-- DIR-MOB --> EM-MOB --> {SR-MOB, MOB, JR}          |
 |   |    +-- DIR-DATA --> EM-DATA --> {SR-DE, DATA-ENG, JR}    |
 |   +-- VP-ARCH                                                 |
 |        +-- Staff+ ICs: DIST-ENG, PRINC-ENG, SR-STAFF         |
 |                                                               |
 | BEACON SELECTION (Symphony):                                  |
 |   Subtask broadcast --> Each agent scores capability match    |
 |   --> Highest score agent executes --> Result returned         |
 +--------------------------------------------------------------+

 CROSS-DEPARTMENT COORDINATION:
 +--------------------------------------------------------------+
 | PUPPETEER ORCHESTRATOR (L3)                                   |
 |   Observes full system state across all 20 departments        |
 |   Selects next agent from ANY department based on RL policy   |
 |   Routes cross-department handoffs through message bus        |
 |                                                               |
 | GOVERNANCE GATES (L4, Dept 18):                               |
 |   ARB-AGENT(181) -- Architecture review                      |
 |   SEC-REVIEW(182) -- Security review                         |
 |   LEGAL-REVIEW(183) -- Legal review                          |
 |   QA-GATE(184) -- Quality assurance gate                     |
 |   REL-APPROVE(185) -- Release approval                       |
 |   CHANGE-MGR(186) -- Change management                       |
 +--------------------------------------------------------------+
```

---

## 11. Research Provenance

This architecture synthesizes findings from 10 peer-reviewed research papers on multi-agent orchestration. The table below maps each paper's core contribution to where it appears in this architecture.

| Paper | Core Contribution | Architecture Application |
|-------|------------------|------------------------|
| **Puppeteer** (2505.19591) NeurIPS 2025 | RL-trained centralized orchestrator for dynamic agent selection. REINFORCE optimization. Evolved topologies converge to compact cyclic structures. | L3: Puppeteer Orchestrator. The central dispatch policy that selects which of 195 agents activates next. Trained via REINFORCE with reward balancing correctness and cost. |
| **AgentOrchestra / TEA** (2506.12508) | Tool-Environment-Agent protocol with lifecycle management, versioned registries, self-evolution. GAIA 89.04% SOTA. | L2: Entire TEA Runtime Core layer. ACP, TCP, ECP as the foundation for agent/tool/environment lifecycle. Version Manager and Self-Evolution Module. |
| **Kairos** (2508.06948) | Low-latency GPU scheduling. Workflow-aware priority scheduling. Memory-aware request dispatch. 17.8-28.4% latency reduction. | L0: GPU Scheduler. L1: Memory-aware model dispatch. L3: Workflow-aware priority scheduler. Remaining-latency-based request prioritization. |
| **Symphony** (2508.20019) | Decentralized coordination. Beacon-based agent selection. Weighted CoT voting. Edge device support. | L3: Beacon Selector for intra-department agent matching. Validates that lightweight models on consumer GPUs can participate in the system. |
| **Orchestral** (2601.02577) | Python agent platform. Type-safe tool framework. Provider abstraction. Synchronous execution with streaming. | L2: Tool Registry design (auto-schema from type hints). Provider-agnostic model interface. Hook-based tool execution interception. |
| **Design Patterns** (2601.03328) | 8-12 tool limit per agent. ReAct agent formalization. SIE architecture. Human-in-the-loop patterns. Case studies in telecom, heritage, utilities. | All layers: Enforced tool limit per agent. Control flow patterns (explicit vs. dynamic). Human interaction modes (in-the-loop, on-the-loop). SIE pattern for data retrieval agents. |
| **IEEE MAS** (2601.13671) | Enterprise MAS architecture. MCP + A2A protocols. Planning/policy/state/quality management. BFSI and SWE case studies. | L4: Governance architecture (planning unit, policy unit, control unit, quality unit). L6: Enterprise adoption patterns. Communication protocol design (MCP for tools, A2A for agents). |
| **Team of Rivals** (2601.14351) | 50+ agent "AI Office." Hierarchical veto (not consensus). Pre-declared acceptance criteria. Context Ray Tracing. Remote code executor. Swiss cheese error model. 92.1% error recovery on 522 production sessions. | L4: Governance Engine design. Veto Authority Chain. Acceptance Criteria Engine. Context Ray Tracing. Remote Code Executor. The philosophical foundation: reliability through organizational structure, not perfect components. |
| **CASTER** (2601.19793) | Context-aware neural router. Dual-branch feature fusion (semantic + structural). Cold-start to iterative evolution training. 23-54% cost reduction, 72.4% max. | L1: Model Router (CASTER). Dual-branch architecture for subtask difficulty estimation. Cold-start training strategy. On-policy iterative refinement via negative feedback. |
| **DrMAS** (2602.08847) | Agent-wise GRPO normalization for stable RL training of multi-agent LLM systems. Identifies gradient-norm inflation as root cause of instability. +5.6% avg performance, eliminates gradient spikes. | L3: RL Training Loop. The mathematical foundation for stable co-training of the orchestration policy across heterogeneous agents with different reward distributions. |

---

## Appendix A: Key Metrics and Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| Agent activation latency | <500ms | Time from orchestrator selection to agent context loaded |
| Model routing accuracy | >85% | Correct strong/weak assignment vs. oracle |
| Cost reduction vs. all-frontier | >40% | CASTER router savings |
| Governance gate throughput | <30s per gate | Time from submission to approve/reject |
| Error interception rate | >90% | Errors caught by critics before user exposure (Team of Rivals: 92.1%) |
| System uptime | 99.9% | Production availability |
| P95 agent response latency | <5s | End-to-end for single agent turn |
| Concurrent projects | >100 | Projects running simultaneously |
| Training stability | No gradient spikes | DrMAS agent-wise normalization |
| Lifecycle completion rate | >95% | Projects that reach Maintenance stage |

## Appendix B: Glossary

| Term | Definition |
|------|-----------|
| **TEA** | Tool-Environment-Agent protocol; the core abstraction layer |
| **ACP** | Agent Context Protocol; manages agent lifecycle and coordination |
| **TCP** | Tool Context Protocol; manages tool registration, schemas, discovery |
| **ECP** | Environment Context Protocol; manages execution environments |
| **CASTER** | Context-Aware Strategy for Task Efficient Routing |
| **DrMAS** | Stable RL training recipe for Multi-Agent LLM Systems |
| **GRPO** | Group Relative Policy Optimization |
| **MVT** | Minimum Viable Team; project-type-based agent team template |
| **Context Ray Tracing** | Message visibility mechanism controlling information flow between agents |
| **Puppeteer Policy** | RL-trained orchestrator that dynamically selects which agent to activate |
| **Beacon Selection** | Decentralized capability-matching protocol within departments |
| **Swiss Cheese Model** | Multiple imperfect validation layers with misaligned failure modes |
| **Governance Bus** | Routing layer that connects outputs to Tier 8 governance agents |

---

> **This document is the single source of truth for the NEXUS Runtime architecture.**
> All 10 workstreams reference this document. Changes require CSA approval.
> Next review: Phase 1 completion checkpoint.
>
> -- CSA (Agent 012), The Titan
