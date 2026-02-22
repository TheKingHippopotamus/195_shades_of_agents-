# 09 -- NEXUS Runtime: Complete Reference Documentation

**Author:** SR-TW (Agent 178) -- Senior Technical Writer, Documentation Department
**Contributors:** TW (Agent 179), KB-MGR (Agent 180)
**Status:** v1.0 -- Initial Release
**Date:** 2026-02-19
**Classification:** Internal Reference -- NEXUS Runtime Project

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Research Foundation](#2-research-foundation)
3. [Research-to-Implementation Map](#3-research-to-implementation-map)
4. [Glossary](#4-glossary)
5. [Architecture Overview](#5-architecture-overview)
6. [Workstream Index](#6-workstream-index)
7. [Technology Stack](#7-technology-stack)
8. [Timeline](#8-timeline)
9. [Team Structure](#9-team-structure)
10. [References](#10-references)
11. [Appendix: Key Algorithms](#11-appendix-key-algorithms)

---

## 1. Project Overview

### 1.1 What Is the NEXUS Runtime Mission

The NEXUS Runtime Mission is a systematic effort to transform NEXUS AI's 195-agent orchestration system from a static, rule-based routing table into a learned, adaptive, production-grade multi-agent runtime. The project synthesizes findings from 10 state-of-the-art research papers -- spanning reinforcement learning, orchestration protocols, decentralized coordination, context-aware routing, and governance architectures -- into a concrete implementation plan for the NEXUS AI platform.

### 1.2 Why It Matters

NEXUS AI currently operates 195 autonomous agents across 20 departments. Requests are routed through a hardcoded table: "Frontend goes to CTO, Marketing goes to CMO." This works, but it does not learn, adapt, or optimize. The NEXUS Runtime replaces this static dispatch with:

- **Learned orchestration** -- A policy trained via reinforcement learning that routes tasks to the right agents based on context, history, and measured outcomes.
- **Dynamic model tiering** -- Intelligent selection of LLM model strength per sub-task (strong models for complex reasoning, lightweight models for simple operations), targeting 40-60% inference cost reduction.
- **Governance by design** -- Veto authority, acceptance criteria, and quality gates built into the runtime, not bolted on after the fact.
- **Self-evolution** -- Agents, tools, and prompts that improve based on execution feedback, with full version tracking and rollback capability.
- **Decentralized resilience** -- Fallback protocols that keep the system operational when any single component fails.

### 1.3 Scope

The NEXUS Runtime encompasses 10 workstreams covering every layer of the system: from low-level RL training stability (DrMAS) through mid-level orchestration intelligence (Puppeteer, CASTER) to high-level governance and market positioning. The deliverables include architecture documents, a product requirements document, implementation specifications, and this reference guide.

---

## 2. Research Foundation

The NEXUS Runtime is grounded in 10 peer-reviewed and preprint research papers published between 2025 and 2026. Each paper contributes specific techniques that map to concrete NEXUS components.

### Paper 1: Puppeteer -- Multi-Agent Collaboration via Evolving Orchestration

| Field | Detail |
|-------|--------|
| **ArXiv ID** | 2505.19591 |
| **Authors** | Yufan Dang, Chen Qian, Xueheng Luo, Jingru Fan, Zihao Xie, et al. |
| **Affiliations** | Tsinghua University, Shanghai Jiao Tong University, Siemens, Tencent Robotics X |
| **Venue** | NeurIPS 2025 |
| **Core Contribution** | A centralized "puppeteer" orchestrator trained via REINFORCE that dynamically selects and sequences agent activations based on evolving task states, replacing static multi-agent topologies with learned, adaptive coordination. |
| **Key Technique** | Serialized dynamic orchestration formalized as a sequential decision process, with RL-driven policy optimization using a composite reward balancing solution quality against computational cost. |
| **NEXUS Relevance** | **Critical** |
| **NEXUS Application** | Direct blueprint for NEXUS-ORCHESTRATOR (Agent 195). The puppeteer paradigm maps directly to the Operations Manager routing requests through C-Suite leaders. The RL training loop teaches the orchestrator which agent sequences produce the best outcomes for each task type. |

### Paper 2: AgentOrchestra / TEA Protocol

| Field | Detail |
|-------|--------|
| **ArXiv ID** | 2506.12508 |
| **Authors** | Wentao Zhang, Liang Zeng, Yuzhen Xiao, Yongcong Li, Ce Cui, et al. |
| **Affiliations** | Skywork AI, Nanyang Technological University |
| **Venue** | ACL Preprint |
| **Core Contribution** | The Tool-Environment-Agent (TEA) Protocol -- a unified abstraction treating environments, agents, and tools as first-class, versioned resources with explicit lifecycles. Built on TEA, AgentOrchestra is a hierarchical multi-agent framework achieving 89.04% on GAIA benchmark. |
| **Key Technique** | Three core context protocols (TCP, ECP, ACP), six protocol transformations (A2T, T2A, E2T, T2E, A2E, E2A), self-evolution module with TextGrad optimization and version management. |
| **NEXUS Relevance** | **Critical** |
| **NEXUS Application** | TEA Protocol provides the foundational runtime layer for NEXUS: agent registry with versioned prompts, tool registry with semantic retrieval, environment management with explicit boundaries. The hierarchical delegation pattern (planner routes to specialized sub-agents) mirrors NEXUS's CEO-to-C-Suite-to-department chain. |

### Paper 3: Kairos -- Low-Latency Multi-Agent Serving

| Field | Detail |
|-------|--------|
| **ArXiv ID** | 2508.06948 |
| **Authors** | Jinyuan Chen, Jiuchen Shi, Quan Chen, Minyi Guo |
| **Affiliations** | Shanghai Jiao Tong University |
| **Venue** | ACM Conference Paper |
| **Core Contribution** | A multi-agent orchestration system optimizing end-to-end latency through workflow-aware priority scheduling and memory-aware request dispatching. Reduces latency by 17.8-28.4% over state-of-the-art serving systems. |
| **Key Technique** | Automatic workflow analysis via online execution profiling, Shortest-Remaining-Execution-Time (SRET) priority scheduling, memory-demand-aware GPU dispatching to avoid preemption. |
| **NEXUS Relevance** | **High** |
| **NEXUS Application** | Directly informs how NEXUS serves 195 agents sharing LLM backends. Kairos's workflow orchestrator maps to NEXUS's 13-stage project lifecycle, enabling the runtime to predict remaining execution time and prioritize requests from agents closer to task completion. GPU memory-aware dispatching prevents overloading when multiple departments work in parallel. |

### Paper 4: Symphony -- Decentralized Multi-Agent System

| Field | Detail |
|-------|--------|
| **ArXiv ID** | 2508.20019 |
| **Authors** | Ji Wang, Kashing Chen, Xinyuan Song, Ke Zhang, Lynn Ai, Eric Yang, Bill Shi |
| **Affiliations** | Gradient, Emory University, Columbia University, CUHK, Waseda University |
| **Venue** | NeurIPS 2025 |
| **Core Contribution** | A decentralized multi-agent framework enabling lightweight LLMs on consumer-grade GPUs to coordinate without centralized control, using a decentralized ledger, Beacon-based task allocation, and weighted CoT voting. |
| **Key Technique** | Beacon selection protocol where agents self-evaluate capability match scores against sub-task requirements; weighted majority voting across multiple chains-of-thought for result aggregation. |
| **NEXUS Relevance** | **High** |
| **NEXUS Application** | Provides the fallback and resilience layer for NEXUS. When the central orchestrator is unavailable, agents use Beacon-style capability advertising to self-organize. The capability vector + cosine similarity matching maps directly to NEXUS's agent skill descriptions in system prompts. CoT voting provides a mechanism for resolving disagreements between agents (e.g., architecture review board decisions). |

### Paper 5: Orchestral -- Agent Platform Framework

| Field | Detail |
|-------|--------|
| **ArXiv ID** | 2601.02577 |
| **Authors** | Alexander Roman, Jacob Roman |
| **Affiliations** | Orchestral AI |
| **Venue** | NeurIPS 2024 Preprint |
| **Core Contribution** | A lightweight Python framework providing a unified, type-safe interface for building LLM agents across multiple providers. Emphasizes deterministic execution, automatic tool schema generation from type hints, and synchronous architecture for reproducibility. |
| **Key Technique** | Provider-agnostic LLM abstraction, automatic tool schema generation via Python type hints, synchronous execution with streaming, context compaction, workspace sandboxing. |
| **NEXUS Relevance** | **Medium** |
| **NEXUS Application** | Informs the developer experience layer of the NEXUS Runtime SDK. Orchestral's approach to provider-agnostic LLM calls, automatic tool registration, and workspace sandboxing directly maps to how NEXUS agent developers will define and test tools. The cost-tracking and LaTeX export features inform NEXUS's financial reporting needs. |

### Paper 6: LLM-Enabled MAS Design Patterns

| Field | Detail |
|-------|--------|
| **ArXiv ID** | 2601.03328 |
| **Authors** | Harri Renney, Maxim Nethercott, Nathan Renney, Peter Hayes |
| **Affiliations** | Kaze Technologies / Kaze Consulting, University of the West of England |
| **Venue** | Preprint (Industry + Academic) |
| **Core Contribution** | Formalizes emerging design patterns for LLM-enabled multi-agent systems, including ReAct agent architecture, control flow strategies (explicit vs. dynamic), interaction styles (handoff vs. flow), history sharing policies, and network configurations (supervisor, swarm, hierarchical, SIE). Validated through three real-world case studies in telecoms, heritage, and utilities. |
| **Key Technique** | ReAct agent loop (query, tool use, process, synthesize), Single Information Environment (SIE) architecture, explicit vs. dynamic control flow, human-in-the-loop / human-on-the-loop patterns. |
| **NEXUS Relevance** | **High** |
| **NEXUS Application** | Provides the design pattern vocabulary for NEXUS's agent interaction model. NEXUS's hierarchical department structure maps to the "hierarchical" network configuration. The SIE pattern maps to how NEXUS agents access shared project data. The human-in-the-loop pattern maps to NEXUS's governance gates (Tier 8 agents) where human approval is required for critical decisions. Key finding: agent performance degrades beyond 8-12 tools per agent, validating NEXUS's approach of specialized agents with focused toolsets. |

### Paper 7: IEEE Orchestration of Multi-Agent Systems

| Field | Detail |
|-------|--------|
| **ArXiv ID** | 2601.13671 |
| **Authors** | Apoorva Adimulam, Rajesh Gupta, Sumit Kumar |
| **Affiliations** | Skan AI, Menlo Park / Bengaluru |
| **Venue** | IEEE Format Paper |
| **Core Contribution** | Consolidates and formalizes the technical composition of orchestrated multi-agent systems, presenting a unified architectural framework integrating planning, policy enforcement, state management, and quality operations. Provides in-depth analysis of MCP and A2A communication protocols. |
| **Key Technique** | Five-component orchestration layer (planning, policy, execution/control, state/knowledge management, quality/operations), dual protocol foundation (MCP for tool access + A2A for peer collaboration), governance framework with observability. |
| **NEXUS Relevance** | **High** |
| **NEXUS Application** | Provides the enterprise governance blueprint for the NEXUS Runtime. The five-component orchestration layer maps directly to NEXUS's operational architecture: planning (task decomposition), policy (escalation rules), control (NEXUS-ORCHESTRATOR), state management (project lifecycle tracking), and quality operations (QA-GATE, governance agents). The MCP/A2A protocol analysis informs how NEXUS agents communicate with external tools and with each other. |

### Paper 8: Team of Rivals -- Organizational Intelligence

| Field | Detail |
|-------|--------|
| **ArXiv ID** | 2601.14351 |
| **Authors** | Isotopes AI (Gopal Vijayaraghavan, Prasanth Jayachandran, Arun Murthy, Sunil Govindan, Vivek Subramanian) |
| **Affiliations** | Isotopes AI, USA |
| **Venue** | Preprint (2026) |
| **Core Contribution** | Demonstrates that organizational principles (specialized roles, hierarchical veto authority, opposing incentives) achieve over 90% internal error interception in production AI systems. Introduces Context Ray Tracing for information flow control and remote code execution for context isolation. 50+ specialized agents evaluated on 522 production sessions. |
| **Key Technique** | Context Ray Tracing (role-based message visibility), remote code executor separating reasoning from data transformation, Swiss cheese model for layered validation, hierarchical veto authority (critics can reject executor output). |
| **NEXUS Relevance** | **Critical** |
| **NEXUS Application** | The most architecturally aligned paper to NEXUS. The "AI Office" metaphor (planners, executors, critics) maps directly to NEXUS's tier structure. Context Ray Tracing solves NEXUS's cross-department information flow problem -- agents at different tiers see different context summaries, not raw data. The veto authority model maps to NEXUS Governance Agents (ARB-AGENT, SEC-REVIEW, QA-GATE). The 38.6% overhead for multi-agent validation quantifies the cost of NEXUS's governance layer. |

### Paper 9: CASTER -- Context-Aware Task Routing

| Field | Detail |
|-------|--------|
| **ArXiv ID** | 2601.19793 |
| **Authors** | (Not extracted from preamble -- see ArXiv) |
| **Venue** | ICML 2026 Submission |
| **Core Contribution** | A lightweight neural router for dynamic model selection in graph-based multi-agent systems. Uses a Dual-Signal Router combining semantic embeddings with structural meta-features to estimate task difficulty, achieving up to 72.4% cost reduction while maintaining quality. |
| **Key Technique** | Dual-Branch Feature Fusion Network (semantic branch + meta branch), Cold Start to Iterative Evolution training paradigm, on-policy negative feedback learning for routing refinement. |
| **NEXUS Relevance** | **Critical** |
| **NEXUS Application** | Direct blueprint for NEXUS's model tiering strategy. Each of the 195 agents does not need GPT-4o-class models for every request. CASTER's router decides per-subtask: JR-FE writing a simple component gets a lightweight model; PRINC-ENG reviewing architecture gets the strongest model. The cold-start-to-evolution paradigm maps to NEXUS's phased rollout: start with rules, learn from production data. Demonstrated across Software Engineering, Data Analysis, Scientific Discovery, and Cybersecurity -- all domains NEXUS operates in. |

### Paper 10: DrMAS -- Stable RL for Multi-Agent Systems

| Field | Detail |
|-------|--------|
| **ArXiv ID** | 2602.08847 |
| **Authors** | (Skywork AI / Nanyang Technological University team, including Bo An) |
| **Venue** | Preprint (February 2026) |
| **Core Contribution** | Identifies gradient-norm inflation as the root cause of training instability when applying GRPO to multi-agent LLM systems. Proposes agent-wise reward normalization that calibrates gradient scales per agent, plus an end-to-end RL training framework supporting heterogeneous agent-model assignments. Achieves +5.6% avg@16 on math and +15.2% avg@16 on search over vanilla GRPO. |
| **Key Technique** | Agent-wise advantage normalization (per-agent mean and variance instead of global baseline), multi-agent trajectory collector with flexible orchestra, shared resource pooling for LLM actor backends, support for heterogeneous model assignments (e.g., 7B planner + 3B executor). |
| **NEXUS Relevance** | **Critical** |
| **NEXUS Application** | Solves the training stability problem for NEXUS's learned orchestration policy. With 195 agents having vastly different reward distributions (a CEO decision vs. a JR-FE code change), global reward normalization would cause gradient explosions. DrMAS's agent-wise normalization ensures stable co-training. The heterogeneous model assignment directly supports NEXUS's tiered architecture: C-Suite agents on larger models, junior agents on smaller ones. |

---

## 3. Research-to-Implementation Map

This table maps each paper's key findings to specific NEXUS Runtime components and the workstream that implements them.

| Paper | Key Finding | NEXUS Component | Workstream | Implementation Priority |
|-------|-------------|-----------------|------------|------------------------|
| **Puppeteer** | RL-trained centralized orchestrator | NEXUS-ORCHESTRATOR learned policy | WS-02: Orchestration Intelligence | P0 -- Core |
| **Puppeteer** | Compact cyclic reasoning structures emerge | Agent sequence optimization | WS-02: Orchestration Intelligence | P1 -- Important |
| **Puppeteer** | Composite reward (quality + cost) | Reward function design | WS-02: Orchestration Intelligence | P0 -- Core |
| **TEA Protocol** | Tool/Environment/Agent as versioned resources | Agent Registry, Tool Registry | WS-01: Master Architecture | P0 -- Core |
| **TEA Protocol** | Protocol transformations (A2T, E2T, etc.) | Runtime type system | WS-01: Master Architecture | P1 -- Important |
| **TEA Protocol** | Self-evolution via execution feedback | Prompt/tool version management | WS-01: Master Architecture | P1 -- Important |
| **TEA Protocol** | Hierarchical planner + specialized sub-agents | CEO -> C-Suite -> Department routing | WS-01: Master Architecture | P0 -- Core |
| **Kairos** | Workflow-aware priority scheduling | Request queue management | WS-01: Master Architecture | P1 -- Important |
| **Kairos** | Memory-aware GPU dispatching | LLM instance load balancing | WS-01: Master Architecture | P2 -- Enhancement |
| **Kairos** | Automatic workflow analysis | Project lifecycle profiling | WS-07: Client Lifecycle | P1 -- Important |
| **Symphony** | Beacon-based capability matching | Agent capability vectors | WS-02: Orchestration Intelligence | P1 -- Important |
| **Symphony** | Weighted CoT voting | Multi-agent consensus | WS-04: Governance Engine | P1 -- Important |
| **Symphony** | Decentralized ledger | Fallback routing registry | WS-02: Orchestration Intelligence | P2 -- Enhancement |
| **Orchestral** | Provider-agnostic LLM abstraction | NEXUS Runtime SDK | WS-01: Master Architecture | P1 -- Important |
| **Orchestral** | Automatic tool schema from type hints | Agent tool registration | WS-01: Master Architecture | P1 -- Important |
| **Orchestral** | Cost tracking per request | Financial telemetry | WS-08: Market Positioning | P1 -- Important |
| **Design Patterns** | ReAct agent loop | Standard agent execution cycle | WS-01: Master Architecture | P0 -- Core |
| **Design Patterns** | SIE (Single Information Environment) | Shared project context layer | WS-01: Master Architecture | P1 -- Important |
| **Design Patterns** | 8-12 tool limit per agent | Agent specialization validation | WS-03: Product Requirements | P0 -- Core |
| **Design Patterns** | Human-in-the-loop patterns | Governance gate interactions | WS-04: Governance Engine | P0 -- Core |
| **IEEE Orchestration** | Five-component orchestration layer | NEXUS control plane design | WS-01: Master Architecture | P0 -- Core |
| **IEEE Orchestration** | MCP + A2A protocols | Inter-agent and tool communication | WS-01: Master Architecture | P1 -- Important |
| **IEEE Orchestration** | Planning + policy + control units | Orchestration layer separation | WS-01: Master Architecture | P0 -- Core |
| **Team of Rivals** | Context Ray Tracing | Role-based context filtering | WS-05: Context Ray Tracing | P0 -- Core |
| **Team of Rivals** | Hierarchical veto authority | Governance agent veto power | WS-04: Governance Engine | P0 -- Core |
| **Team of Rivals** | Remote code executor | Data isolation from reasoning | WS-01: Master Architecture | P1 -- Important |
| **Team of Rivals** | Swiss cheese layered validation | Multi-gate quality assurance | WS-04: Governance Engine | P0 -- Core |
| **Team of Rivals** | 90%+ error interception rate | Quality target metric | WS-03: Product Requirements | P0 -- Core |
| **CASTER** | Dual-signal router (semantic + meta) | Model tier selection engine | WS-06: Model Cost Optimization | P0 -- Core |
| **CASTER** | Cold-start-to-evolution training | Phased deployment strategy | WS-06: Model Cost Optimization | P0 -- Core |
| **CASTER** | On-policy negative feedback | Router self-improvement loop | WS-06: Model Cost Optimization | P1 -- Important |
| **CASTER** | 72.4% cost reduction demonstrated | Cost optimization target | WS-03: Product Requirements | P0 -- Core |
| **DrMAS** | Agent-wise reward normalization | RL training stability | WS-02: Orchestration Intelligence | P0 -- Core |
| **DrMAS** | Gradient-norm inflation diagnosis | Training monitoring | WS-02: Orchestration Intelligence | P0 -- Core |
| **DrMAS** | Heterogeneous model assignments | Tiered model architecture | WS-06: Model Cost Optimization | P0 -- Core |
| **DrMAS** | Shared resource pooling | GPU scheduling infrastructure | WS-01: Master Architecture | P2 -- Enhancement |

---

## 4. Glossary

### Orchestration Concepts

| Term | Definition | Source Paper |
|------|-----------|-------------|
| **Puppeteer Paradigm** | A centralized orchestrator ("puppeteer") dynamically directs agents ("puppets") by selecting which agent to activate next, based on evolving task state. The orchestrator is trained via RL. | Puppeteer (2505.19591) |
| **Serialized Orchestration** | Converting a multi-agent collaboration graph into a sequential decision process by "unfolding" the directed graph into a topological traversal, then "folding" it back to recover the implicit graph structure. | Puppeteer (2505.19591) |
| **Evolving Orchestration** | The process by which an RL-trained orchestrator discovers more compact, efficient agent sequences over training iterations, pruning redundant agents and converging toward cyclic reasoning structures. | Puppeteer (2505.19591) |
| **Hierarchical Delegation** | A routing pattern where a central planner decomposes tasks and dispatches sub-tasks to domain-specific sub-agents, converting global coordination into localized routing decisions. | AgentOrchestra (2506.12508) |
| **Beacon Selection** | A decentralized task allocation protocol where agents self-evaluate their capability match against sub-task requirements and broadcast scores; the highest-scoring agent is selected as executor. | Symphony (2508.20019) |
| **Capability Vector** | A numerical representation of an agent's skills and competencies, used in similarity matching against task requirements. | Symphony (2508.20019) |

### Protocol and Architecture Concepts

| Term | Definition | Source Paper |
|------|-----------|-------------|
| **TEA Protocol** | Tool-Environment-Agent Protocol. A unified abstraction that models environments, agents, and tools as first-class resources with explicit lifecycles, versioned interfaces, and self-evolution hooks. | AgentOrchestra (2506.12508) |
| **TCP (Tool Context Protocol)** | The tool management layer of TEA. Extends MCP with lifecycle management, versioning, semantic retrieval via vector embeddings, and automatic schema synthesis. | AgentOrchestra (2506.12508) |
| **ECP (Environment Context Protocol)** | The environment management layer of TEA. Formalizes computational environments as first-class components with observation/action spaces and explicit boundaries. | AgentOrchestra (2506.12508) |
| **ACP (Agent Context Protocol)** | The agent management layer of TEA. Provides registration, representation, and orchestration for autonomous agents with metadata about roles, competencies, and objectives. | AgentOrchestra (2506.12508) |
| **Protocol Transformations** | Bidirectional conversion pathways between TEA entities: A2T (Agent-to-Tool), T2A (Tool-to-Agent), E2T (Environment-to-Tool), T2E (Tool-to-Environment), A2E (Agent-to-Environment), E2A (Environment-to-Agent). | AgentOrchestra (2506.12508) |
| **MCP (Model Context Protocol)** | Anthropic's open standard for connecting LLMs to external tools, data, and services via a client-server architecture with schema validation and access control. | IEEE Orchestration (2601.13671) |
| **A2A (Agent-to-Agent Protocol)** | Google's protocol for standardized inter-agent communication supporting negotiation, delegation, and coordination across distributed ecosystems. | IEEE Orchestration (2601.13671) |
| **SIE (Single Information Environment)** | A data-centric MAS architecture where agents access shared datasets through coordinated routing, creating a unified navigation and query layer. | Design Patterns (2601.03328) |
| **ReAct Agent** | An agent operating in a loop of Reasoning and Acting: query processing, tool utilization, information processing, and synthesis/response, with recursive CoT reasoning. | Design Patterns (2601.03328) |

### Governance and Reliability Concepts

| Term | Definition | Source Paper |
|------|-----------|-------------|
| **Context Ray Tracing** | A message visibility mechanism controlling information flow between agents at different hierarchical levels. Representatives attend coordination points and relay only relevant summaries, preventing context contamination. | Team of Rivals (2601.14351) |
| **Hierarchical Veto Authority** | A governance model where specialized critic agents can reject executor output entirely, triggering retry without re-planning. Critics have absolute power; this is not consensus voting. | Team of Rivals (2601.14351) |
| **Swiss Cheese Model** | Applied to multi-agent systems: multiple imperfect validation layers with misaligned failure modes create defense-in-depth, catching errors that any single layer would miss. From Reason's safety model. | Team of Rivals (2601.14351) |
| **Remote Code Executor** | A separation-of-concerns pattern where agents write code that executes in an isolated runtime; only summaries return to agent context, preventing raw data from contaminating reasoning. | Team of Rivals (2601.14351) |
| **Pre-declared Acceptance Criteria** | Quality gates established before execution begins (not emergent verification), following test-driven development principles. Agents cannot declare their own work complete. | Team of Rivals (2601.14351) |

### Machine Learning Concepts

| Term | Definition | Source Paper |
|------|-----------|-------------|
| **GRPO (Group Relative Policy Optimization)** | A reinforcement learning method that optimizes policies by comparing multiple rollouts from the same task and normalizing rewards within each group, avoiding explicit value-function estimation. | DrMAS (2602.08847) |
| **Agent-Wise Normalization** | DrMAS's solution to gradient instability: each agent normalizes advantages using its own reward mean and variance instead of a global baseline, calibrating gradient scales per agent. | DrMAS (2602.08847) |
| **Gradient-Norm Inflation** | The phenomenon where using a global reward baseline causes gradient explosions in agents whose reward distributions deviate significantly from the global mean. Root cause of multi-agent RL training instability. | DrMAS (2602.08847) |
| **Dual-Signal Router** | CASTER's routing architecture combining semantic embeddings (text understanding) with structural meta-features (role, context length) to estimate task difficulty and select model tier. | CASTER (2601.19793) |
| **Cold Start to Iterative Evolution** | CASTER's two-phase training: (1) supervised pre-training on heuristic seed data, then (2) on-policy fine-tuning from production trajectories with negative feedback learning. | CASTER (2601.19793) |
| **On-Policy Negative Feedback** | A training signal where routing failures (weak model chosen but task failed) are used to update the router: "you chose wrong here, choose stronger next time." | CASTER (2601.19793) |
| **SRET (Shortest Remaining Execution Time)** | A priority scheduling policy that favors requests closer to completion, reducing overall queuing latency in shared-LLM serving environments. | Kairos (2508.06948) |
| **Weighted CoT Voting** | Aggregation of results from multiple chains-of-thought, weighted by capability match scores along each chain, to produce a final answer via majority vote. | Symphony (2508.20019) |
| **TextGrad** | A gradient-based optimization method for refining text-based agent components (prompts, tool descriptions) by treating them as differentiable variables. | AgentOrchestra (2506.12508) |
| **Self-Evolution Module** | A TEA Protocol component that wraps evolvable components (prompts, code, solutions) as optimization variables, refining them via TextGrad or self-reflection and registering improved versions. | AgentOrchestra (2506.12508) |

---

## 5. Architecture Overview

### 5.1 The 10 Workstreams

The NEXUS Runtime is organized into 10 parallel workstreams, each producing a specific deliverable. The workstreams are interconnected: foundational layers (WS-01, WS-02) feed into application layers (WS-04 through WS-07), which are validated by operational layers (WS-08 through WS-10).

```
                    WS-10: DOCUMENTATION (this file)
                              |
            +-----------------+-----------------+
            |                 |                 |
        WS-08:            WS-09:           WS-03:
        Market            Revenue/         Product
        Position          Finance          Requirements
            |                 |                 |
            +---------+-------+---------+-------+
                      |                 |
                  WS-07:            WS-04:
                  Client            Governance
                  Lifecycle         Engine
                      |                 |
            +---------+---------+-------+-------+
            |                   |               |
        WS-05:              WS-06:          WS-02:
        Context Ray         Model Cost      Orchestration
        Tracing             Optimization    Intelligence
            |                   |               |
            +-------------------+-------+-------+
                                        |
                                    WS-01:
                                    MASTER
                                    ARCHITECTURE
```

### 5.2 Layer Descriptions

**Foundation Layer (WS-01: Master Architecture)**
- TEA Protocol implementation: Agent Registry, Tool Registry, Environment Manager
- Session management and state persistence
- Provider-agnostic LLM abstraction
- ReAct agent execution loop
- Inter-agent communication (MCP + A2A patterns)

**Intelligence Layer (WS-02: Orchestration Intelligence)**
- Learned routing policy for NEXUS-ORCHESTRATOR
- Puppeteer-style RL training with DrMAS stability
- Symphony beacon selection for fallback
- Task decomposition engine

**Governance Layer (WS-04 + WS-05)**
- WS-04: Governance Engine -- veto authority, acceptance criteria, QA gates (Team of Rivals)
- WS-05: Context Ray Tracing -- role-based context filtering, information flow control

**Optimization Layer (WS-06 + WS-07)**
- WS-06: Model Cost Optimization -- CASTER-style tiered model routing
- WS-07: Client Project Lifecycle -- 13-stage lifecycle runtime with Kairos-style scheduling

**Strategy Layer (WS-03, WS-08, WS-09)**
- WS-03: Product Requirements Document
- WS-08: Market Positioning and Competitive Analysis
- WS-09: Revenue Model and Financial Projections

**Documentation Layer (WS-10: This Document)**
- Complete reference documentation synthesizing all workstreams

---

## 6. Workstream Index

| # | Workstream | Deliverable File | Primary Papers | Lead Department |
|---|-----------|------------------|----------------|-----------------|
| WS-01 | Master Architecture | `nexus-runtime/00-MASTER-ARCHITECTURE.md` | TEA Protocol, IEEE Orchestration, Orchestral, Kairos | Engineering (Dept 02), Platform-Infrastructure (Dept 03) |
| WS-02 | Orchestration Intelligence | `nexus-runtime/02-ORCHESTRATION-INTELLIGENCE.md` | Puppeteer, DrMAS, CASTER, Symphony | Data Science & AI/ML (Dept 06) |
| WS-03 | Product Requirements | `nexus-runtime/03-PRODUCT-REQUIREMENTS.md` | All 10 papers | Product Management (Dept 04) |
| WS-04 | Governance Engine | (In production by WS lead) | Team of Rivals, Symphony, IEEE Orchestration | Governance (Dept 18), Security (Dept 08) |
| WS-05 | Context Ray Tracing | (In production by WS lead) | Team of Rivals | Engineering (Dept 02), Security (Dept 08) |
| WS-06 | Model Cost Optimization | (In production by WS lead) | CASTER, DrMAS | Data Science & AI/ML (Dept 06), Finance (Dept 13) |
| WS-07 | Client Project Lifecycle | (In production by WS lead) | Kairos, Design Patterns | Program Management (Dept 17), Product (Dept 04) |
| WS-08 | Market Positioning | `nexus-runtime/08-MARKET-POSITIONING.md` | All 10 papers | Marketing (Dept 10), Sales (Dept 09) |
| WS-09 | Revenue & Finance | (In production by WS lead) | CASTER (cost data), Team of Rivals (overhead metrics) | Finance (Dept 13), Sales (Dept 09) |
| WS-10 | Complete Documentation | `nexus-runtime/09-COMPLETE-DOCUMENTATION.md` (this file) | All 10 papers | Documentation (Dept 20) |

---

## 7. Technology Stack

### 7.1 Runtime Core

| Layer | Technology | Purpose | Paper Basis |
|-------|-----------|---------|-------------|
| **Language** | Python 3.11+ | Primary runtime language | Orchestral, TEA Protocol |
| **Agent Framework** | Custom (TEA Protocol-based) | Agent lifecycle, registry, versioning | TEA Protocol |
| **LLM Providers** | Anthropic Claude, OpenAI GPT, Google Gemini, open-weight models (Qwen, Llama) | Multi-provider model access | Orchestral, CASTER |
| **LLM Serving** | vLLM | High-throughput model inference | Kairos, DrMAS |
| **Communication** | Apache Kafka | Inter-agent message passing | Kairos |
| **Protocols** | MCP (tool access), A2A-inspired (peer coordination) | Standardized agent communication | IEEE Orchestration, TEA Protocol |

### 7.2 Intelligence Layer

| Layer | Technology | Purpose | Paper Basis |
|-------|-----------|---------|-------------|
| **RL Framework** | Custom on veRL/ROLL | Policy optimization for orchestrator | DrMAS, Puppeteer |
| **Router Model** | Lightweight neural network (Dual-Branch Fusion) | Task difficulty estimation and model selection | CASTER |
| **Embeddings** | Sentence-transformers / provider embeddings | Semantic similarity for tool/agent retrieval | TEA Protocol, CASTER |
| **Vector Store** | FAISS or ChromaDB | Semantic search for tools and agent capabilities | TEA Protocol |

### 7.3 Data Layer

| Layer | Technology | Purpose | Paper Basis |
|-------|-----------|---------|-------------|
| **State Store** | PostgreSQL | Agent state, project lifecycle, session data | IEEE Orchestration |
| **Cache** | Redis | Hot agent context, routing cache | Kairos |
| **Object Store** | S3-compatible | Versioned prompts, tool code, execution artifacts | TEA Protocol |
| **Telemetry** | OpenTelemetry | Distributed tracing, cost tracking, latency metrics | Team of Rivals, IEEE Orchestration |

### 7.4 Governance Layer

| Layer | Technology | Purpose | Paper Basis |
|-------|-----------|---------|-------------|
| **Execution Sandbox** | Docker / gVisor | Isolated code execution, data transformation | Team of Rivals |
| **Audit Log** | Append-only event store | Action graph, citation tracking, post-hoc audit | Team of Rivals |
| **Quality Gates** | Custom validation framework | Pre-declared acceptance criteria, schema validation | Team of Rivals, IEEE Orchestration |

### 7.5 Deployment

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Container Orchestration** | Kubernetes | Agent deployment, scaling, health checks |
| **CI/CD** | GitHub Actions | Build, test, deploy pipeline |
| **Monitoring** | Grafana + Prometheus | System health, cost dashboards, SLA tracking |
| **Cloud** | AWS / GCP (multi-cloud capable) | Infrastructure hosting |

---

## 8. Timeline

### Phase 1: Foundation (Months 1-2)

| Milestone | Description | Key Deliverables |
|-----------|-------------|-----------------|
| M1.1 | TEA Protocol core implementation | Agent Registry, Tool Registry, Environment Manager |
| M1.2 | Provider-agnostic LLM layer | Multi-provider abstraction supporting Claude, GPT, Gemini, open-weight |
| M1.3 | ReAct agent execution loop | Standard agent cycle: perceive, reason, act, observe |
| M1.4 | Static routing baseline | Current NEXUS routing table implemented in runtime |
| M1.5 | Session and state management | PostgreSQL-backed project/session state |

### Phase 2: Intelligence (Months 2-4)

| Milestone | Description | Key Deliverables |
|-----------|-------------|-----------------|
| M2.1 | CASTER router cold start | Dual-signal router trained on seed data for model tiering |
| M2.2 | Puppeteer orchestration policy (initial) | REINFORCE-trained routing policy for top-level dispatch |
| M2.3 | DrMAS training integration | Agent-wise normalization for stable multi-agent RL |
| M2.4 | Beacon selection fallback | Symphony-style capability matching for decentralized routing |
| M2.5 | Task decomposition engine | Automatic subtask generation with dependency tracking |

### Phase 3: Governance (Months 3-5)

| Milestone | Description | Key Deliverables |
|-----------|-------------|-----------------|
| M3.1 | Context Ray Tracing | Role-based context filtering across tier boundaries |
| M3.2 | Governance gate framework | Veto authority, acceptance criteria, QA gates |
| M3.3 | Execution sandbox | Isolated code execution with summary-only returns |
| M3.4 | Audit and tracing | Full action graph with bidirectional traversal |
| M3.5 | Human-in-the-loop integration | Approval workflows for critical decisions |

### Phase 4: Optimization (Months 4-6)

| Milestone | Description | Key Deliverables |
|-----------|-------------|-----------------|
| M4.1 | CASTER iterative evolution | On-policy fine-tuning from production routing data |
| M4.2 | Kairos scheduling integration | Workflow-aware priority scheduling for shared LLMs |
| M4.3 | Self-evolution module | TextGrad-based prompt refinement, version management |
| M4.4 | Cost optimization validation | Measure actual inference cost reduction against 40-60% target |
| M4.5 | 13-stage lifecycle runtime | Full project lifecycle tracking with agent activation playbook |

### Phase 5: Production (Months 5-8)

| Milestone | Description | Key Deliverables |
|-----------|-------------|-----------------|
| M5.1 | End-to-end integration testing | All 195 agents operational on runtime |
| M5.2 | Performance benchmarking | Latency, throughput, cost, quality metrics |
| M5.3 | Security audit | Penetration testing, compliance review |
| M5.4 | Client pilot | First external project on NEXUS Runtime |
| M5.5 | GA release | General availability with documentation and SLAs |

---

## 9. Team Structure

### 9.1 Department Ownership

| Department | Role in NEXUS Runtime | Key Agents | Workstreams |
|-----------|----------------------|-----------|-------------|
| **01 - Executive Leadership** | Strategic direction, cross-department coordination | CEO (001), CTO (002), CAIO (011) | All (oversight) |
| **02 - Engineering** | Core runtime implementation, TEA Protocol, agent execution | SVP-ENG (012), VP-ARCH (014), STAFF-BE (029), SR-BE-PY (035) | WS-01, WS-05 |
| **03 - Platform-Infrastructure** | Deployment, serving infrastructure, Kairos integration | DIR-CLOUD (052), SR-DEVOPS (054), SR-SRE (055) | WS-01, WS-07 |
| **04 - Product Management** | Product requirements, feature prioritization | VP-PROD (065), SR-PM (068) | WS-03, WS-07 |
| **05 - Design** | Runtime SDK developer experience, dashboard design | VP-DES (074), STAFF-DES (077) | WS-01 (DX) |
| **06 - Data Science & AI/ML** | RL training, model routing, learned policies | VP-AI (088), SR-MLE (091), SR-AIE (092) | WS-02, WS-06 |
| **07 - Quality Assurance** | Runtime testing, governance gate validation | DIR-QA (100), SR-QA-AUTO (101) | WS-04 |
| **08 - Security** | Security review, penetration testing, context isolation | CISO (009), DIR-SEC (108), PENTEST (110) | WS-04, WS-05 |
| **09 - Sales Revenue** | Revenue model, client engagement | CRO (007), VP-SALES (116) | WS-09 |
| **10 - Marketing** | Market positioning, competitive analysis | CMO (006), VP-MKT (126) | WS-08 |
| **13 - Finance Accounting** | Cost modeling, ROI analysis | CFO (005), VP-FIN (150) | WS-09 |
| **17 - Program Management** | Timeline, milestone tracking, cross-team coordination | GPM (174), TPM (175) | All (coordination) |
| **18 - Governance** | Architecture review, security review, QA gate | ARB-AGENT (181), SEC-REVIEW (182), QA-GATE (184) | WS-04 |
| **20 - Documentation** | Complete reference documentation | SR-TW (178), TW (179), KB-MGR (180) | WS-10 |

### 9.2 Responsibility Matrix (RACI)

| Workstream | Responsible | Accountable | Consulted | Informed |
|-----------|------------|-------------|-----------|----------|
| WS-01: Master Architecture | VP-ARCH, STAFF-BE | CTO | CAIO, DIR-CLOUD | All departments |
| WS-02: Orchestration Intelligence | VP-AI, SR-MLE | CAIO | CTO, VP-ARCH | Engineering |
| WS-03: Product Requirements | VP-PROD, SR-PM | CPO | CTO, CAIO, CMO | All departments |
| WS-04: Governance Engine | ARB-AGENT, DIR-SEC | COO | CLO, CISO | QA, Legal |
| WS-05: Context Ray Tracing | STAFF-BE, DIR-SEC | CTO | VP-AI | Engineering, Security |
| WS-06: Model Cost Optimization | SR-MLE, SR-AIE | CAIO | CFO, VP-ARCH | Finance |
| WS-07: Client Lifecycle | GPM, TPM | COO | VP-PROD, CRO | PM, Sales |
| WS-08: Market Positioning | VP-MKT, CMO | CEO | CRO, CPO | All departments |
| WS-09: Revenue & Finance | CFO, VP-FIN | CEO | CRO, CMO | Executive team |
| WS-10: Documentation | SR-TW, TW | SR-TW | All WS leads | All departments |

---

## 10. References

### Primary Research Papers

1. **[Puppeteer]** Dang, Y., Qian, C., Luo, X., Fan, J., Xie, Z., Shi, R., Chen, W., Yang, C., Che, X., Tian, Y., Xiong, X., Han, L., Liu, Z., & Sun, M. (2025). "Multi-Agent Collaboration via Evolving Orchestration." *NeurIPS 2025*. ArXiv: 2505.19591. Code: https://github.com/OpenBMB/ChatDev/tree/puppeteer

2. **[AgentOrchestra / TEA]** Zhang, W., Zeng, L., Xiao, Y., Li, Y., Cui, C., Zhao, Y., Hu, R., Liu, Y., Zhou, Y., & An, B. (2025). "AgentOrchestra: Orchestrating Multi-Agent Intelligence with the Tool-Environment-Agent (TEA) Protocol." Skywork AI / NTU. ArXiv: 2506.12508.

3. **[Kairos]** Chen, J., Shi, J., Chen, Q., & Guo, M. (2025). "Kairos: Low-latency Multi-Agent Serving with Shared LLMs and Excessive Loads in the Public Cloud." Shanghai Jiao Tong University. ArXiv: 2508.06948.

4. **[Symphony]** Wang, J., Chen, K., Song, X., Zhang, K., Ai, L., Yang, E., & Shi, B. (2025). "Symphony: A Decentralized Multi-Agent Framework for Scalable Collective Intelligence." *NeurIPS 2025*. ArXiv: 2508.20019. Code: https://github.com/GradientHQ/Symphony

5. **[Orchestral]** Roman, A. & Roman, J. (2024). "Orchestral AI: A Framework for Agent Orchestration." Orchestral AI. ArXiv: 2601.02577. Code: https://github.com/orchestralAI/orchestral-ai

6. **[Design Patterns]** Renney, H., Nethercott, M., Renney, N., & Hayes, P. (2025). "LLM-Enabled Multi-Agent Systems: Empirical Evaluation and Insights into Emerging Design Patterns & Paradigms." Kaze Technologies / UWE Bristol. ArXiv: 2601.03328.

7. **[IEEE Orchestration]** Adimulam, A., Gupta, R., & Kumar, S. (2025). "The Orchestration of Multi-Agent Systems: Architectures, Protocols, and Enterprise Adoption." Skan AI. ArXiv: 2601.13671.

8. **[Team of Rivals]** Vijayaraghavan, G., Jayachandran, P., Murthy, A., Govindan, S., & Subramanian, V. (2026). "If You Want Coherence, Orchestrate a Team of Rivals: Multi-Agent Models of Organizational Intelligence." Isotopes AI. ArXiv: 2601.14351.

9. **[CASTER]** (2026). "CASTER: Context-Aware Strategy for Task Efficient Routing." *ICML 2026 submission*. ArXiv: 2601.19793.

10. **[DrMAS]** (2026). "DrMAS: Stable RL Training for Multi-Agent LLM Systems." Skywork AI / NTU. ArXiv: 2602.08847. Code: https://github.com/langfengQ/DrMAS

### NEXUS AI Internal Documents

11. **NEXUS AI Company Hierarchy v3.0** -- `00-COMPANY-HIERARCHY-V3.md` -- Canonical source for all 195 agents, 20 departments, 10 tiers.
12. **NEXUS AI Master Agent Index v2.0** -- `00-MASTER-AGENT-INDEX-V2.md` -- Quick-reference index of all agents.
13. **Agent System Prompt Loader v1.0** -- `10-AGENT-SYSTEM-PROMPT-LOADER.md` -- Python-based prompt loading architecture.
14. **NEXUS Brand Design System** -- `NEXUS_BRAND_DESIGN_SYSTEM.md` -- Visual identity, color palette, design philosophy.
15. **Project Lifecycle Map** -- `01-PROJECT-LIFECYCLE-MAP.md` -- 13-stage lifecycle with agent activation per stage.
16. **Escalation Rules** -- `00-ESCALATION-RULES.md` -- When and how agents escalate decisions.
17. **Interaction Protocols** -- `00-INTERACTION-PROTOCOLS.md` -- Six communication primitives (REQ, RES, HND, ESC, BRC, NTF).

---

## 11. Appendix: Key Algorithms

### A.1 Puppeteer Orchestration Policy (REINFORCE)

**Purpose:** Train the centralized orchestrator to select optimal agent sequences.

```
Algorithm: Puppeteer Policy Optimization

Input:
  - Agent space A = {a_1, ..., a_n}
  - Policy pi_theta (parameterized orchestrator)
  - Task distribution D
  - Learning rate alpha, discount gamma, cost weight lambda

For each training episode:
  1. Sample task tau from D
  2. Initialize system state S_0 from tau
  3. For t = 0, 1, ..., T:
     a. Select agent: a_t ~ pi_theta(S_t, tau)
     b. Agent executes: o_t = f_{a_t}(s_t(a_t))
     c. Update state: S_{t+1} = Update(S_t, a_t, o_t)
     d. If termination criterion met: break
  4. Compute terminal reward:
     R_T = r - lambda * C_T
     where r = solution quality, C_T = sum of step costs
  5. Compute returns:
     For t = T, T-1, ..., 0:
       R_t = R_{t+1} - C_t (with C_t = FLOPs * (1 + t/T_max))
  6. Update policy:
     theta <- theta + alpha * grad J(theta)
     where J = E[sum_t R_t * log pi_theta(a_t | S_t)]
```

**Key Insight:** Over training iterations, the orchestrator discovers compact cyclic reasoning structures -- it learns that certain agent sequences (e.g., planner -> executor -> critic -> executor) are more effective than long chains, naturally pruning redundant agents.

### A.2 DrMAS Agent-Wise Normalization

**Purpose:** Stabilize RL training when multiple agents have different reward distributions.

```
Algorithm: DrMAS Advantage Normalization

Input:
  - K agents with policies {pi_1, ..., pi_K}
  - N sampled trajectories {tau_1, ..., tau_N}
  - Terminal rewards {R_1, ..., R_N}

Vanilla GRPO (unstable for MAS):
  mu = mean(R_1, ..., R_N)         # global mean
  sigma = std(R_1, ..., R_N)       # global std
  A_i = (R_i - mu) / sigma         # same baseline for ALL agents

DrMAS (stable):
  For each agent k:
    Y_k = {all steps where agent k was active}
    mu_k = mean of rewards for trajectories where k participated
    sigma_k = std of rewards for trajectories where k participated
    For each step (i,t) in Y_k:
      A_{i,t}^k = (R_i - mu_k) / sigma_k   # per-agent baseline

  Optimize each agent's policy:
    For each agent k:
      L_k = -sum_{(i,t) in Y_k} min(
        rho * A_{i,t}^k,
        clip(rho, 1-eps, 1+eps) * A_{i,t}^k
      )
      theta_k <- theta_k - alpha * grad L_k
```

**Key Insight:** When agent k's reward distribution deviates from the global mean, the term `(mu_k - mu)^2 / sigma^2` inflates gradient norms. Agent-wise normalization eliminates this by giving each agent its own reference frame.

### A.3 CASTER Dual-Signal Router

**Purpose:** Dynamically route each sub-task to the optimal model tier (strong vs. weak).

```
Algorithm: CASTER Routing Decision

Input:
  - Task text T (current sub-task description)
  - Meta-features v_meta (agent role, context length, workflow depth)
  - Threshold tau (routing decision boundary, default 0.5)

Text Branch (Semantic):
  x_sem = embed(T)                    # sentence embedding
  h_sem = ReLU(W_t * x_sem + b_t)    # project to latent space
  h_sem = Dropout(h_sem, p=0.3)

Meta Branch (Structural):
  h_meta = ReLU(W_m * v_meta + b_m)  # lightweight projection

Fusion:
  h_joint = concat(h_sem, h_meta)
  h_fuse = ReLU(W_fuse * h_joint + b_fuse)
  p_strong = sigmoid(w_out * h_fuse)  # probability of needing strong model

Decision:
  if p_strong > tau:
    route to Strong Model (e.g., GPT-4o, Claude Opus)
  else:
    route to Weak Model (e.g., GPT-4o-mini, Claude Haiku)

Cold Start Training:
  1. Generate seed data: Easy/Medium/Hard tasks with labels
  2. Augment with paraphrase variations
  3. Simulate meta-features from keyword matching
  4. Train on ~500 synthetic samples

Iterative Evolution:
  On failure where model was Weak:
    Re-label sample as Strong (label = 1.0)
    Fine-tune router on corrected data
  On success where model was Weak:
    Reinforce as negative sample (label = 0.0)
```

**Key Insight:** The router learns latent complexity features (logical dependency, operational risk) rather than surface features. A concise architecture question routes to a strong model; a lengthy but simple data formatting task routes to a weak model.

### A.4 Beacon Selection Protocol (Symphony)

**Purpose:** Decentralized task allocation without a central orchestrator.

```
Algorithm: Beacon-Based Agent Selection

Input:
  - Sub-task t_{i,k} with requirement vector r(t_{i,k})
  - Available agents E = {E_1, ..., E_N} with capability vectors {c_1, ..., c_N}

For each sub-task t_{i,k}:
  1. Broadcasting:
     Planning agent broadcasts Beacon B_{i,k} describing sub-task requirements

  2. Self-Evaluation:
     Each agent E_j computes:
       score_j = similarity(c_j, r(t_{i,k}))
     where similarity = cosine_similarity (or dot product)

  3. Selection:
     E_j* = argmax_j(score_j)
     Selected agent receives task + context from prior sub-tasks

  4. Execution:
     E_j* executes locally, sends output to next executor

Result Voting (across M chains-of-thought):
  For each CoT_i producing answer a_i:
    confidence_i = mean(score along all K_i sub-tasks)

  Final answer:
    a* = argmax_a sum_i confidence_i * I(a_i == a)
  (weighted majority vote)
```

**Key Insight:** Beacon selection is robust to agent heterogeneity -- even weak models contribute when they match task requirements. The gap between strongest and weakest models narrows under this protocol (Symphony: 36-73% direct solving gap narrows to 78-87% with Symphony).

### A.5 Context Ray Tracing (Team of Rivals)

**Purpose:** Control information visibility across hierarchical agent levels.

```
Algorithm: Context Ray Tracing

Principles:
  - Agents only see context relevant to their role and tier
  - Representatives attend cross-team coordination points
  - Only summaries travel between tiers; raw data stays local

Implementation:

  When Agent A (Tier T_a) sends message to Agent B (Tier T_b):

  If T_a == T_b (same tier, same team):
    B receives full message content

  If T_a > T_b (subordinate reporting to manager):
    Message = summarize(full_output, level=T_b)
    Strip implementation details, keep decisions and metrics

  If T_a < T_b (manager delegating to subordinate):
    Message = full_task_description + relevant_context
    Include acceptance criteria, exclude peer team details

  Cross-team coordination:
    Representative from Team_X attends coordination meeting
    Representative receives: agenda + own team's commitments
    Representative shares: team_summary (not internal deliberation)
    Representative returns to team with: relevant external decisions

  Data Isolation:
    Agents write code -> Remote executor runs it
    Only summaries/schemas return to agent context
    Working set can exceed context window (agent requests
    multiple summaries, samples, outliers as needed)
```

**Key Insight:** Information flow control is not just about security -- it is about cognitive load. Agents perform better when they see only what they need. The 90%+ error interception rate in Team of Rivals is achieved partly because critics are not distracted by irrelevant context from other teams.

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-02-19 | SR-TW (Agent 178) | Initial release -- complete reference documentation |

---

*This document was produced by the Documentation Department (Dept 20) as Workstream 10 of the NEXUS Runtime Mission. For questions, contact SR-TW (Agent 178) or the Documentation team via the standard NEXUS interaction protocol.*
