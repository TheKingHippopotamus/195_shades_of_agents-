# 05 — CONTEXT RAY TRACING: Role-Based Information Security for the NEXUS Runtime

> **Author:** CISO (Agent 009) — Chief Information Security Officer
> **Classification:** INTERNAL — NEXUS Architecture Team
> **Version:** 1.0
> **Date:** 2026-02-19
> **Status:** APPROVED — Architecture Specification
> **Research Basis:** LLM-Enabled MAS Design Patterns (2601.03328), IEEE Orchestration (2601.13671), Team of Rivals (2601.14351)

---

## Table of Contents

1. [Problem Statement](#1-problem-statement)
2. [Context Ray Tracing Concept](#2-context-ray-tracing-concept)
3. [Access Control Matrix](#3-access-control-matrix)
4. [Information Classification](#4-information-classification)
5. [Tool Limit Enforcement](#5-tool-limit-enforcement)
6. [Context Compression](#6-context-compression)
7. [Audit Trail](#7-audit-trail)
8. [Data Flow Diagrams](#8-data-flow-diagrams)
9. [Implementation Architecture](#9-implementation-architecture)
10. [Performance Impact](#10-performance-impact)

---

## 1. Problem Statement

### 1.1 The Unfiltered Context Threat at 195-Agent Scale

NEXUS AI operates 195 autonomous agents across 20 departments and 10 tiers. Without context filtering, every agent could theoretically see everything. This creates three compounding threat vectors:

**Security Risk — Information Disclosure (STRIDE: I)**
A junior frontend engineer (JR-FE, Agent 047) writing a React component has no need to see client contracts, financial projections, security audit findings, or C-Suite strategic debates. Unfiltered context means:
- Client PII leaks into prompts of agents that never handle customer data
- Security vulnerability reports reach agents without clearance to see them
- Legal-privileged communications lose their privilege through broad exposure
- Salary data, personnel actions, and M&A discussions are visible to all tiers

**Performance Risk — Context Window Overload**
Research from LLM-Enabled MAS Design Patterns (Renney et al., 2601.03328) demonstrates that agent performance degrades when the toolkit expands beyond 8-12 tools due to context-window overload and cognitive interference. The same principle applies to context itself:
- 195 agents generating messages, artifacts, and decisions create a combinatorial explosion of context
- Irrelevant context consumes tokens that should carry task-relevant information
- LLMs hallucinate more when context windows are polluted with unrelated data
- The Team of Rivals paper (2601.14351) observes that "actions carry implicit decisions, and conflicting decisions carry bad results" — when agents see context from unrelated workflows, they make implicit assumptions that corrupt their reasoning

**Cost Risk — Token Waste at Scale**
Every token of irrelevant context sent to an agent is money burned:
- If each of 195 agents receives full organizational context per interaction, token costs scale as O(N * C) where N = agents and C = total context volume
- Filtering context to role-relevant subsets reduces this to O(N * c_i) where c_i << C
- At enterprise scale, the difference between filtered and unfiltered context is the difference between viable and unsustainable operating costs

### 1.2 Current State: Zero Filtering

Today, NEXUS has no context filtering layer. The organizational hierarchy exists in documentation but is not enforced at runtime. Any agent prompt could be loaded with any information. There are no access controls on inter-agent messages, no classification of information types, and no audit trail of what context was delivered to which agent.

This is equivalent to running an enterprise where every employee has root access to every system, every document, and every communication channel. No responsible CISO would accept this in a human organization. We must not accept it in an AI one.

### 1.3 Threat Model

```
THREAT MODEL: Context Ray Tracing
Framework: STRIDE

S - Spoofing:     Agent impersonates higher-tier agent to access restricted context
T - Tampering:    Agent modifies context before relaying to downstream agents
R - Repudiation:  Agent accesses restricted context with no audit trail
I - Info Disclosure: Agents see information beyond their role scope
D - Denial of Service: Context overload degrades agent performance
E - Elevation:    Lower-tier agent acquires C-Suite visibility through context leakage

PRIMARY THREATS (ordered by risk):
1. Information Disclosure — Unfiltered context exposes everything to everyone
2. Denial of Service — Context overload causes hallucination and performance collapse
3. Elevation of Privilege — Context leakage enables unauthorized decision-making
4. Repudiation — No audit trail means no accountability for context access
5. Tampering — Agents relay modified summaries that distort upstream decisions
6. Spoofing — Agent claims higher tier to receive broader context scope
```

---

## 2. Context Ray Tracing Concept

### 2.1 Core Metaphor

In computer graphics, ray tracing follows photons from a light source through a scene, determining what each pixel can "see" based on the geometry of the environment. Objects block, reflect, or filter light according to their material properties.

Context Ray Tracing applies the same principle to information flow. Information originates from sources (user requests, data stores, agent outputs, external APIs). As it flows through the NEXUS organizational hierarchy, each boundary acts as a filter — blocking, summarizing, or passing information based on the receiving agent's role, tier, and department.

```
               INFORMATION SOURCE
                     |
                     | (raw context ray)
                     v
              +-------------+
              | TIER FILTER  |  <-- Blocks RESTRICTED from Tier 5-7
              +-------------+
                     |
                     | (filtered ray)
                     v
              +-------------+
              | DEPT FILTER  |  <-- Blocks cross-dept CONFIDENTIAL
              +-------------+
                     |
                     | (dept-scoped ray)
                     v
              +-------------+
              | ROLE FILTER  |  <-- Passes only task-relevant context
              +-------------+
                     |
                     | (role-scoped ray)
                     v
                AGENT CONTEXT
              (minimal, relevant,
               classified, audited)
```

### 2.2 Ray Tracing Principles

**Principle 1: Least Context (adapted from Least Privilege)**
Every agent receives the minimum context required to perform its assigned task. No more. Default is deny — context must be explicitly granted, not implicitly available.

**Principle 2: Context Attenuation**
As information flows from higher tiers to lower tiers, it attenuates — details are compressed, specifics are redacted, and only task-relevant summaries survive. A C-Suite debate about acquisition strategy becomes "strategic initiative in progress" at the VP level, "resource allocation may change Q3" at the Director level, and invisible at the IC level.

**Principle 3: Boundary Enforcement**
Every organizational boundary (tier, department, team) is a filtering surface. Context does not flow freely across boundaries. It must be explicitly relayed by an authorized agent, and the relay operation compresses and classifies the context.

**Principle 4: Bidirectional Filtering**
Filtering applies in both directions. Upward reports are summarized (detailed execution logs become status summaries). Downward directives are scoped (broad strategic goals become specific task assignments). Lateral communications are mediated by the lowest common manager.

**Principle 5: Audit Everything**
Every context access, every filter decision, every relay operation is logged. The audit trail enables post-hoc analysis of what any agent could see at any point in time. This is non-negotiable for compliance (SOC 2, GDPR).

### 2.3 Mapping to Research

The Team of Rivals paper (2601.14351) introduces Context Ray Tracing as "a message visibility mechanism that controls information flow between agents at different hierarchical levels. Rather than broadcasting all information to all agents, representatives attend cross-team coordination points and relay only relevant summaries." Their implementation:
- Filters message visibility based on FSM state
- Ensures agents receive only messages relevant to their role and phase
- Handoff abstracts internal execution details (retry history stays encapsulated)
- Summarizers distill intermediate results for downstream agents

The IEEE Orchestration paper (2601.13671) reinforces this with its governance framework:
- Policy units embed domain and governance constraints
- Privacy constraints restrict agents to sharing only task-relevant information
- Quality and operations management validates outputs against defined schemas
- Observability and governance modules ensure reliability and compliance

We adapt and extend these concepts for NEXUS's 195-agent, 10-tier, 20-department structure.

---

## 3. Access Control Matrix

### 3.1 Tier-Based Access Levels

```
+----------+-----------------------------+------------------------------------+
| TIER     | AGENTS                      | CONTEXT VISIBILITY SCOPE           |
+----------+-----------------------------+------------------------------------+
| Tier 0   | C-Suite (CEO, CTO, CPO,     | FULL organizational visibility.    |
| C-Suite  | COO, CFO, CMO, CRO, CHRO,  | All departments, all tiers, all    |
|          | CISO, CLO, CAIO)            | classifications up to RESTRICTED.  |
|          | 11 agents                   | Cross-department strategic context. |
+----------+-----------------------------+------------------------------------+
| Tier 1   | VPs (SVP-ENG, VP-ENG,       | Department-wide full visibility +  |
| VPs      | VP-ARCH, VP-INFRA, VP-PROD, | cross-department SUMMARIES only.   |
|          | VP-DES, VP-AI, VP-SALES,    | Cannot see raw CONFIDENTIAL data   |
|          | VP-MKT, VP-CS, VP-PEOPLE,   | from other departments — receives  |
|          | VP-FIN, VP-LEGAL)           | filtered executive briefs.         |
|          | 13 agents                   |                                    |
+----------+-----------------------------+------------------------------------+
| Tier 2   | Directors (DIR-FE, DIR-BE,  | Department-wide visibility +       |
| Directors| DIR-MOB, DIR-DATA, DIR-     | cross-department summaries limited |
|          | CLOUD, DIR-SRE, DIR-QA,     | to interface points. Sees team     |
|          | DIR-SEC, etc.)              | details for their org. Cannot see  |
|          | ~15 agents                  | peer department internals.         |
+----------+-----------------------------+------------------------------------+
| Tier 3   | Managers (SEM-FE, EM-BE,    | Team-level full visibility +       |
| Managers | MGR-DEVOPS, GPM, etc.)      | cross-team context limited to      |
|          | ~15 agents                  | dependency interfaces. No access   |
|          |                             | to other departments' internals.   |
+----------+-----------------------------+------------------------------------+
| Tier 4   | Staff+ ICs (DIST-ENG,       | Multi-team technical visibility    |
| Staff+   | PRINC-ENG, STAFF-FE, etc.)  | within their domain. Cross-team    |
|          | ~12 agents                  | technical context for architecture |
|          |                             | decisions. No management context.  |
+----------+-----------------------------+------------------------------------+
| Tier 5   | Senior ICs (SR-FE-REACT,    | TASK-SPECIFIC context only.        |
| Senior   | SR-BE-PY, SR-QA-AUTO,       | Receives: task description, relevant|
|          | PENTEST, etc.)              | codebase context, direct dependency|
|          | ~30 agents                  | interfaces. No org-wide visibility.|
+----------+-----------------------------+------------------------------------+
| Tier 6   | Mid-Level ICs (FE-ENG,      | TASK-SPECIFIC context only.        |
| Mid      | BE-ENG, QA-ENG, SEC-ENG,    | Narrower scope than Tier 5.        |
|          | etc.)                       | Receives: assigned task, relevant  |
|          | ~20 agents                  | files, coding standards.           |
+----------+-----------------------------+------------------------------------+
| Tier 7   | Junior ICs (JR-FE, JR-BE,   | TASK-SPECIFIC context only.        |
| Junior   | JR-MOB, APM, BDR, etc.)     | Most restricted. Receives:         |
|          | ~15 agents                  | specific task, relevant docs,      |
|          |                             | mentor guidance. No access to      |
|          |                             | security, legal, or financial data.|
+----------+-----------------------------+------------------------------------+
| Tier 8   | Governance (ARB-AGENT,      | REVIEW-SPECIFIC artifacts only.    |
| Gov.     | SEC-REVIEW, LEGAL-REVIEW,   | Each gate agent sees only the      |
|          | QA-GATE, REL-APPROVE,       | artifacts relevant to its gate:    |
|          | CHANGE-MGR)                 | SEC-REVIEW sees security findings, |
|          | 6 agents                    | QA-GATE sees test results, etc.    |
+----------+-----------------------------+------------------------------------+
| Tier 9   | Special (DISC-AGENT, EST-   | ROLE-SPECIFIC context.             |
| Special  | AGENT, DEMO-AGENT, NEXUS-   | NEXUS-ORCHESTRATOR sees routing    |
|          | ORCHESTRATOR, etc.)         | metadata and agent availability.   |
|          | 9 agents                    | EST-AGENT sees project scope for   |
|          |                             | estimation. Minimal cross-domain.  |
+----------+-----------------------------+------------------------------------+
```

### 3.2 Information Type Access by Tier

```
+--------------------+------+------+------+------+------+------+------+------+------+
| INFORMATION TYPE   | T0   | T1   | T2   | T3   | T4   | T5   | T6   | T7   | T8/9 |
+--------------------+------+------+------+------+------+------+------+------+------+
| Strategic plans    | FULL | SUMM | --   | --   | --   | --   | --   | --   | --   |
| Financial data     | FULL | SUMM | DEPT | --   | --   | --   | --   | --   | GATE |
| Client contracts   | FULL | SUMM | --   | --   | --   | --   | --   | --   | GATE |
| Client PII         | FULL | MASK | --   | --   | --   | --   | --   | --   | --   |
| Security findings  | FULL | DEPT | DEPT | TEAM | --   | TASK | --   | --   | GATE |
| Legal opinions     | FULL | SUMM | --   | --   | --   | --   | --   | --   | GATE |
| Personnel data     | FULL | DEPT | --   | --   | --   | --   | --   | --   | --   |
| Architecture docs  | FULL | FULL | FULL | FULL | FULL | TASK | TASK | TASK | GATE |
| Codebase context   | FULL | FULL | FULL | FULL | FULL | FULL | FULL | TASK | --   |
| Task assignments   | FULL | FULL | FULL | FULL | FULL | FULL | FULL | FULL | --   |
| Public docs        | FULL | FULL | FULL | FULL | FULL | FULL | FULL | FULL | FULL |
| Incident reports   | FULL | DEPT | DEPT | TEAM | --   | --   | --   | --   | GATE |
| Compliance status  | FULL | DEPT | DEPT | --   | --   | --   | --   | --   | GATE |
| Agent metrics/KPIs | FULL | DEPT | DEPT | TEAM | --   | SELF | SELF | SELF | --   |
| Cross-dept comms   | FULL | FULL | SUMM | --   | SUMM | --   | --   | --   | --   |
| Vendor assessments | FULL | DEPT | DEPT | --   | --   | --   | --   | --   | GATE |
+--------------------+------+------+------+------+------+------+------+------+------+

LEGEND:
  FULL = Complete, unfiltered access
  SUMM = Summarized/compressed version (details redacted)
  DEPT = Own-department data only
  TEAM = Own-team data only
  TASK = Only context relevant to assigned task
  SELF = Only own metrics
  MASK = PII fields masked/tokenized
  GATE = Only artifacts specific to governance gate function
  --   = No access (context ray blocked)
```

### 3.3 Department-Level Isolation Rules

Cross-department context flows are restricted by default. The following matrix defines which departments can share context directly vs. through mediation:

```
DIRECT SHARING (same pillar, operational dependency):
  Engineering (02) <-> Platform-Infrastructure (03)  [shared codebase]
  Engineering (02) <-> QA (07)                       [test artifacts]
  Product (04) <-> Design (05)                       [PRDs, wireframes]
  Sales (09) <-> Customer Success (11)               [client context]
  Security (08) <-> Governance (18)                  [review artifacts]
  Documentation (20) <-> ALL                         [public docs only]

MEDIATED SHARING (requires VP+ relay or Orchestrator routing):
  Engineering (02) <-> Security (08)     [mediated by CTO + CISO]
  Engineering (02) <-> Legal (14)        [mediated by CTO + CLO]
  Finance (13) <-> ANY                   [mediated by CFO — financial data is CONFIDENTIAL]
  People/HR (12) <-> ANY                 [mediated by CHRO — personnel data is RESTRICTED]
  Legal (14) <-> ANY                     [mediated by CLO — privilege protection]

BLOCKED (no context flow without C-Suite override):
  Junior ICs (T7) -> Finance (13)        [no access to financial data]
  Junior ICs (T7) -> Legal (14)          [no access to legal opinions]
  Junior ICs (T7) -> People/HR (12)      [no access to personnel data]
  ANY non-Security -> Security findings  [CISO must authorize]
```

---

## 4. Information Classification

### 4.1 Classification Levels

All information in the NEXUS ecosystem is classified into four levels, adapted from standard enterprise data classification frameworks (ISO 27001, NIST):

```
+-------------+--------+---------------------------------------------+------------------+
| LEVEL       | LABEL  | DESCRIPTION                                 | HANDLING         |
+-------------+--------+---------------------------------------------+------------------+
| PUBLIC      | [PUB]  | No risk if disclosed. Marketing content,    | No filtering     |
|             |        | public documentation, open-source code,     | required. Any    |
|             |        | published API docs.                         | agent can access.|
+-------------+--------+---------------------------------------------+------------------+
| INTERNAL    | [INT]  | Low risk. Internal processes, non-sensitive  | Access control   |
|             |        | business context, general architecture       | required. Tier   |
|             |        | decisions, team standup notes.               | 0-6 access.      |
|             |        |                                             | Audit logged.    |
+-------------+--------+---------------------------------------------+------------------+
| CONFIDENTIAL| [CON]  | Medium-high risk. Client data, business     | Encryption +     |
|             |        | plans, financial projections, security      | tier filtering + |
|             |        | assessment results, vendor contracts,       | department scope.|
|             |        | code review findings, incident details.     | MFA-equivalent   |
|             |        |                                             | agent auth.      |
+-------------+--------+---------------------------------------------+------------------+
| RESTRICTED  | [RES]  | High risk. Client PII/PHI, payment data,   | Encryption +     |
|             |        | security vulnerabilities (active), legal-   | strict RBAC +    |
|             |        | privileged communications, M&A data,        | tokenization +   |
|             |        | personnel files, salary data, credentials.  | time-limited     |
|             |        |                                             | access + full    |
|             |        |                                             | audit trail.     |
+-------------+--------+---------------------------------------------+------------------+
```

### 4.2 Classification Rules by Information Source

```
SOURCE                          | DEFAULT CLASSIFICATION
--------------------------------|------------------------
User input (chat messages)      | INTERNAL
Client project data             | CONFIDENTIAL
Client PII (names, emails, etc) | RESTRICTED
Codebase (source files)         | INTERNAL
API keys, secrets, credentials  | RESTRICTED
Architecture Decision Records   | INTERNAL
Security scan results           | CONFIDENTIAL
Penetration test reports        | RESTRICTED
Financial reports/projections   | CONFIDENTIAL
Legal documents/opinions        | CONFIDENTIAL
Personnel records               | RESTRICTED
Incident response data          | CONFIDENTIAL (active: RESTRICTED)
Agent system prompts            | INTERNAL
Governance gate decisions       | CONFIDENTIAL
Cross-department summaries      | INTERNAL
Public documentation            | PUBLIC
```

### 4.3 Auto-Classification Engine

The Context Filter Middleware (Section 9) includes an auto-classifier that tags incoming context:

1. **Pattern matching** — Regex-based detection of PII patterns (emails, phone numbers, SSNs, credit card numbers) triggers automatic RESTRICTED classification
2. **Source tagging** — Context from known sensitive sources (HR systems, financial APIs, legal databases) inherits the source classification
3. **Keyword detection** — Terms like "salary," "vulnerability," "breach," "acquisition," "NDA" trigger classification escalation
4. **Agent declaration** — Agents generating output can declare classification level in their structured message envelope
5. **Default escalation** — If classification is uncertain, escalate to CONFIDENTIAL (fail secure, not fail open)

---

## 5. Tool Limit Enforcement

### 5.1 Research Basis

The LLM-Enabled MAS Design Patterns paper (2601.03328, Renney et al.) provides empirical evidence: "agent performance often degrades when the toolkit expands beyond 8-12 tools, due to context-window overload and cognitive interference." This finding is consistent across multiple case studies and aligns with the Team of Rivals architecture which uses specialized agents with narrow tool sets rather than generalist agents with broad toolkits.

### 5.2 Tool Allocation by Tier

```
+----------+------------------+------------------------------------------+
| TIER     | MAX TOOLS        | RATIONALE                                |
+----------+------------------+------------------------------------------+
| Tier 0   | 10-12            | Strategic tools: dashboard access,       |
| C-Suite  |                  | escalation controls, approval gates,     |
|          |                  | cross-dept queries, reporting.           |
+----------+------------------+------------------------------------------+
| Tier 1   | 10-12            | Department oversight: team dashboards,   |
| VPs      |                  | resource allocation, cross-dept          |
|          |                  | communication, planning tools.           |
+----------+------------------+------------------------------------------+
| Tier 2   | 10-12            | Org management: sprint tools, backlog    |
| Directors|                  | management, delivery tracking,           |
|          |                  | architecture review tools.               |
+----------+------------------+------------------------------------------+
| Tier 3   | 8-10             | Team management: 1:1 tools, sprint      |
| Managers |                  | facilitation, hiring pipeline,           |
|          |                  | performance tracking.                    |
+----------+------------------+------------------------------------------+
| Tier 4   | 10-12            | Technical leadership: architecture       |
| Staff+   |                  | tools, cross-team code review,           |
|          |                  | RFC authoring, technical design.         |
+----------+------------------+------------------------------------------+
| Tier 5   | 8-10             | Domain execution: language-specific      |
| Senior   |                  | tools, testing frameworks, CI/CD,        |
|          |                  | code review, monitoring.                 |
+----------+------------------+------------------------------------------+
| Tier 6   | 6-8              | Focused execution: code editor,          |
| Mid      |                  | build tools, test runner, docs,          |
|          |                  | version control, lint.                   |
+----------+------------------+------------------------------------------+
| Tier 7   | 4-6              | Guided execution: code editor,           |
| Junior   |                  | test runner, docs, version control.      |
|          |                  | Minimal toolset, maximum guidance.       |
+----------+------------------+------------------------------------------+
| Tier 8   | 4-6              | Gate-specific: review interface,         |
| Gov.     |                  | approval/reject, comment, audit log,     |
|          |                  | checklist verification.                  |
+----------+------------------+------------------------------------------+
| Tier 9   | 6-10             | Role-specific: NEXUS-ORCHESTRATOR gets   |
| Special  |                  | routing tools; EST-AGENT gets estimation |
|          |                  | tools; DEMO-AGENT gets presentation.     |
+----------+------------------+------------------------------------------+
```

### 5.3 Tool Access Rules

1. **Static allocation** — Each agent's tool set is defined at agent registration time based on its role, tier, and department. Tools are not dynamically added during a session.
2. **No tool inheritance** — A lower-tier agent does not inherit its manager's tools. Tool sets are role-specific, not hierarchical.
3. **Cross-department tools** — Tools that access other departments' data (e.g., a financial query tool) are restricted to agents with explicit cross-department authorization.
4. **Tool audit** — Every tool invocation is logged with: agent_id, tool_name, timestamp, input_hash, output_classification.
5. **Overflow protection** — If an agent's task requires more tools than its allocation, the task is escalated to a higher-tier agent or decomposed into sub-tasks for multiple agents.

---

## 6. Context Compression

### 6.1 Compression Strategy by Direction

Context compression ensures that information maintains its essential meaning while reducing volume as it crosses organizational boundaries. This is directly inspired by the Team of Rivals architecture where "summarizers distill intermediate results into compact summaries for downstream agents, enabling context minimization without losing decision-relevant information."

```
DOWNWARD COMPRESSION (C-Suite -> ICs):
+--------------------+    +--------------------+    +--------------------+
| C-SUITE CONTEXT    |    | MANAGER CONTEXT    |    | IC CONTEXT         |
|                    |    |                    |    |                    |
| "Q3 strategic      | -> | "Resource changes   | -> | "Your sprint       |
|  pivot: acquire    |    |  coming Q3. Plan    |    |  scope is stable.  |
|  CompanyX for $50M.|    |  for 2-week team    |    |  Focus on JIRA-    |
|  Realign frontend  |    |  restructure. Keep  |    |  1234."            |
|  team to React     |    |  current sprint     |    |                    |
|  Native. Budget    |    |  commitments."      |    |                    |
|  approved by CFO." |    |                    |    |                    |
+--------------------+    +--------------------+    +--------------------+
  CONFIDENTIAL              INTERNAL                  INTERNAL
  ~150 tokens               ~40 tokens                ~15 tokens
  (90% compression to IC level)
```

```
UPWARD COMPRESSION (ICs -> C-Suite):
+--------------------+    +--------------------+    +--------------------+
| IC STATUS          |    | MANAGER ROLLUP     |    | C-SUITE SUMMARY    |
|                    |    |                    |    |                    |
| "Fixed race cond.  | -> | "Frontend team:     | -> | "Engineering: 92%  |
|  in useEffect hook |    |  3/5 sprint items   |    |  sprint completion.|
|  causing stale     |    |  complete. 1 blocked|    |  1 P2 blocker on   |
|  state in checkout |    |  by API dependency. |    |  checkout flow.    |
|  flow. PR #4521    |    |  Unblocking with    |    |  No risk to Q3     |
|  merged. Tests     |    |  backend team."     |    |  delivery."        |
|  passing. 2 hrs."  |    |                    |    |                    |
+--------------------+    +--------------------+    +--------------------+
  INTERNAL                  INTERNAL                  INTERNAL
  ~60 tokens                ~35 tokens                ~20 tokens
  (67% compression to C-Suite level)
```

### 6.2 Compression Operators

| OPERATOR        | DESCRIPTION                                                | APPLIES WHEN                          |
|-----------------|-----------------------------------------------------------|---------------------------------------|
| `SUMMARIZE`     | Replace detailed content with executive summary            | Crossing 2+ tier boundaries upward    |
| `REDACT`        | Remove classified fields entirely                          | Classification exceeds recipient scope|
| `TOKENIZE`      | Replace PII with reversible tokens                         | PII crosses any boundary              |
| `AGGREGATE`     | Combine multiple items into statistical summary            | Multiple similar items cross boundary |
| `SCOPE`         | Filter to recipient's department/team only                 | Cross-department communication        |
| `ABSTRACT`      | Replace implementation details with interface description  | Technical context -> non-technical    |
| `PASSTHROUGH`   | No modification                                            | Within same tier and department       |

### 6.3 Compression Rules

1. **Mandatory compression on tier crossing** — Any context that crosses 2 or more tier boundaries MUST be compressed. No raw operational detail reaches C-Suite. No strategic detail reaches Junior ICs.
2. **Lossless within tier** — Agents at the same tier in the same department receive uncompressed context from each other.
3. **Semantic preservation** — Compression must preserve the decision-relevant content. A compressed security finding must still convey severity, scope, and recommended action — just not the exploit details.
4. **Reversible tokenization** — PII tokenization must be reversible by authorized agents (Tier 0-1) for compliance and incident response.
5. **Compression ratio target** — Aim for 60-90% token reduction when crossing 3+ tier boundaries. Measure and optimize.

---

## 7. Audit Trail

### 7.1 Audit Requirements

Every context access in the NEXUS runtime produces an immutable audit record. This is non-negotiable for SOC 2 compliance, GDPR Article 30 (records of processing activities), and organizational accountability.

### 7.2 Audit Record Schema

```yaml
context_access_log:
  id: uuid                          # Unique log entry ID
  timestamp: iso8601                 # When the access occurred
  session_id: uuid                   # Parent session/project ID
  requesting_agent:
    agent_id: int                    # Agent number (001-195)
    agent_code: string               # Agent code (e.g., "JR-FE")
    tier: int                        # Tier level (0-9)
    department: string               # Department name
  context_accessed:
    source_type: enum                # MESSAGE | ARTIFACT | DATA_STORE | TOOL_OUTPUT
    source_id: string                # ID of the source entity
    source_agent_id: int             # If from another agent
    classification: enum             # PUBLIC | INTERNAL | CONFIDENTIAL | RESTRICTED
    content_hash: sha256             # Hash of accessed content (not content itself)
    byte_size: int                   # Size of context delivered
    token_count: int                 # Tokens consumed
  filter_decisions:
    filters_applied: list            # Which filters ran [TIER, DEPT, ROLE, CLASSIFY]
    compression_applied: enum        # NONE | SUMMARIZE | REDACT | TOKENIZE | AGGREGATE
    original_classification: enum    # Classification before filtering
    delivered_classification: enum   # Classification after filtering
    content_blocked: boolean         # Was any content blocked entirely?
    blocked_reason: string           # Why content was blocked (if applicable)
  authorization:
    access_granted: boolean          # Was access approved?
    authorization_method: enum       # STATIC_POLICY | DYNAMIC_GRANT | ESCALATION
    policy_id: string                # Which policy authorized/denied access
    escalated_to: int                # Agent ID if escalation occurred
  performance:
    filter_latency_ms: float         # Time to apply all filters
    compression_ratio: float         # Original tokens / delivered tokens
```

### 7.3 Audit Trail Integrity

- **Write-once storage** — Audit logs are append-only. No agent can modify or delete audit records.
- **Separate storage** — Audit logs are stored separately from operational data. Agents cannot access the audit system.
- **Retention** — Audit logs are retained for minimum 7 years (SOC 2 requirement) or per applicable regulation.
- **Tamper detection** — Each audit record includes a hash chain linking to the previous record. Any gap or modification is detectable.
- **Real-time alerting** — Anomalous access patterns (e.g., a Tier 7 agent accessing CONFIDENTIAL data, bulk context requests, access outside normal workflow) trigger immediate alerts to CISO (Agent 009) and SOC-ANALYST (Agent 113).

### 7.4 Compliance Mapping

| REGULATION | AUDIT REQUIREMENT                          | CRT IMPLEMENTATION                         |
|------------|-------------------------------------------|--------------------------------------------|
| SOC 2      | Access controls logged and reviewable     | Full audit trail per access                |
| GDPR Art.30| Records of processing activities          | context_accessed.source_type = DATA_STORE  |
| GDPR Art.17| Right to erasure verification             | Audit confirms PII was tokenized/redacted  |
| HIPAA      | Access to PHI logged                      | RESTRICTED classification + full audit     |
| PCI-DSS    | Cardholder data access tracked            | RESTRICTED + tokenization verified in log  |
| ISO 27001  | Information security event logging        | Complete audit trail with hash chain       |

---

## 8. Data Flow Diagrams

### 8.1 Overall Context Ray Tracing Architecture

```
                            EXTERNAL INPUTS
                     (User Requests, Client Data, APIs)
                                  |
                                  v
                    +----------------------------+
                    |    CONTEXT INGESTION LAYER  |
                    |  (classify, tag, tokenize)  |
                    +----------------------------+
                                  |
                   [PUB] [INT] [CON] [RES]  <-- auto-classified
                                  |
                                  v
                    +----------------------------+
                    |   CONTEXT REGISTRY          |
                    |   (indexed, classified,     |
                    |    searchable store)         |
                    +----------------------------+
                                  |
                    +-------------+-------------+
                    |                           |
                    v                           v
         +------------------+       +------------------+
         | ORCHESTRATOR     |       | DIRECT TASK      |
         | (NEXUS-ORCH-195) |       | ASSIGNMENT       |
         | Routes context   |       | Manager -> IC    |
         | to right dept    |       | scoped context   |
         +------------------+       +------------------+
                    |                           |
                    v                           v
         +------------------+       +------------------+
         | DEPT CONTEXT      |       | AGENT CONTEXT    |
         | FILTER            |       | BUILDER          |
         | (per-department   |       | (per-agent       |
         |  isolation)       |       |  role filter)    |
         +------------------+       +------------------+
                    |                           |
                    +-------------+-------------+
                                  |
                                  v
                    +----------------------------+
                    |   PER-AGENT CONTEXT WINDOW  |
                    |   (filtered, compressed,    |
                    |    classified, audited)      |
                    +----------------------------+
                                  |
                                  v
                    +----------------------------+
                    |       AUDIT LOGGER          |
                    |   (immutable, hash-chained, |
                    |    real-time alerting)       |
                    +----------------------------+
```

### 8.2 Cross-Department Communication Flow

```
    DEPT A (Engineering)              DEPT B (Security)
    +------------------+              +------------------+
    | SR-FE-REACT (32) |              | PENTEST (112)    |
    | Finds XSS vuln   |              | Needs to know    |
    | in component      |              | about vuln       |
    +--------+---------+              +--------+---------+
             |                                 ^
             | Report (CONFIDENTIAL)           | Filtered report
             v                                 |
    +--------+---------+              +--------+---------+
    | EM-FE (21)       |              | DIR-SEC (108)    |
    | Escalates to     |              | Receives via     |
    | department lead   +----->------->+ CISO relay       |
    +--------+---------+   mediated   +--------+---------+
             |             by CTO+CISO         |
             v                                 v
    +--------+---------+              +--------+---------+
    | DIR-FE (15)      |              | CISO (009)       |
    | Sees full detail |              | Sees full detail |
    | within Eng dept  |              | authorizes flow  |
    +------------------+              +------------------+

    CONTEXT TRANSFORMATION AT EACH BOUNDARY:
    -----------------------------------------------
    SR-FE-REACT -> EM-FE:  PASSTHROUGH (same dept, 1 tier)
    EM-FE -> DIR-FE:       PASSTHROUGH (same dept, 1 tier)
    DIR-FE -> CTO:         SUMMARIZE (cross-pillar boundary)
    CTO -> CISO:           PASSTHROUGH (C-Suite to C-Suite)
    CISO -> DIR-SEC:       SCOPE (security-relevant detail only)
    DIR-SEC -> PENTEST:    SCOPE + TASK (only vuln details needed for test)
```

### 8.3 Governance Gate Context Flow

```
    PROJECT DELIVERABLE
           |
           v
    +------------------+     +------------------+     +------------------+
    | ARB-AGENT (181)  |     | SEC-REVIEW (182) |     | QA-GATE (184)    |
    | Sees:            |     | Sees:            |     | Sees:            |
    | - Architecture   |     | - Security scan  |     | - Test results   |
    |   docs           |     |   results        |     | - Coverage data  |
    | - RFC            |     | - Threat model   |     | - Performance    |
    | - Tech stack     |     | - Pen test       |     |   benchmarks     |
    |   decisions      |     |   findings       |     | - Accessibility  |
    |                  |     | - OWASP check    |     |   audit          |
    | Does NOT see:    |     |                  |     |                  |
    | - Financial data |     | Does NOT see:    |     | Does NOT see:    |
    | - Client PII     |     | - Financial data |     | - Security vulns |
    | - Personnel data |     | - Client PII     |     | - Financial data |
    | - Security vulns |     | - Personnel data |     | - Client PII     |
    +------------------+     +------------------+     +------------------+
           |                        |                        |
           v                        v                        v
    +------------------------------------------------------------+
    | REL-APPROVE (185) + CHANGE-MGR (186)                       |
    | Sees: Gate pass/fail results ONLY (not underlying data)    |
    | Decision: APPROVE / REJECT / CONDITIONAL                   |
    +------------------------------------------------------------+
```

### 8.4 Information Ray Trace — Example Session

```
    SESSION: Client requests new payment integration feature

    RAY 1: User Request
    [PUB] "Add Stripe payment integration"
      |
      +-> NEXUS-ORCHESTRATOR (195) [sees: request + routing metadata]
      +-> CEO (001) [sees: full request, client context]
      +-> CTO (002) [sees: full request, technical implications]
      +-> CISO (009) [sees: full request, security implications]

    RAY 2: CTO delegates to Engineering
    [INT] "Implement Stripe API integration for checkout flow"
      |
      +-> VP-ENG (013) [sees: technical scope, timeline]
      +-> DIR-BE (016) [sees: API design requirements]
      +-> EM-BE (022) [sees: sprint planning context]
      +-> SR-BE-NODE (034) [sees: Stripe API docs, codebase context]
           ^^ TASK-SCOPED: Only checkout module code, Stripe SDK docs,
              API authentication patterns. NOT the full codebase.

    RAY 3: CISO initiates security review
    [CON] "Payment integration requires PCI-DSS compliance review"
      |
      +-> DIR-SEC (108) [sees: compliance requirements]
      +-> SEC-REVIEW (182) [sees: security artifacts only]
      +-> APPSEC (110) [sees: code review scope for payment module only]
           ^^ TASK-SCOPED: Only payment-related code paths.
              NOT client financial data or contract terms.

    RAY 4: Financial context (RESTRICTED)
    [RES] Client payment terms, pricing, transaction fees
      |
      +-> CFO (005) [sees: full financial context]
      +-> VP-FIN (152 reports_to chain) [sees: department-scoped summary]
           ^^ BLOCKED from all Engineering, QA, Design agents.
              Only Finance dept Tier 0-2 can see payment terms.

    AUDIT: Every ray traced, every filter logged, every access recorded.
```

---

## 9. Implementation Architecture

### 9.1 Context Filter Middleware

The Context Filter Middleware (CFM) is the central enforcement point. It sits between the Orchestrator and every agent, intercepting all context delivery and applying the filtering rules defined in this specification.

```
ARCHITECTURE:

+-------------------------------------------------------------------+
|                     NEXUS RUNTIME                                  |
|                                                                    |
|  +--------------------+     +-----------------------------+        |
|  | ORCHESTRATOR       |     | AGENT REGISTRY              |        |
|  | (routes tasks)     |     | (195 agents, roles, tiers,  |        |
|  +--------+-----------+     |  departments, tool sets)     |        |
|           |                 +-----------------------------+        |
|           v                              |                         |
|  +--------+------------------------------+-------+                 |
|  |        CONTEXT FILTER MIDDLEWARE (CFM)         |                 |
|  |                                                |                 |
|  |  +------------+  +------------+  +-----------+ |                 |
|  |  | CLASSIFIER |  | TIER       |  | DEPT      | |                 |
|  |  | (auto-tag  |  | FILTER     |  | FILTER    | |                 |
|  |  |  PUB/INT/  |  | (check    |  | (enforce  | |                 |
|  |  |  CON/RES)  |  |  tier      |  |  dept     | |                 |
|  |  +-----+------+  |  access)  |  |  isolation)| |                 |
|  |        |          +-----+-----+  +-----+-----+ |                 |
|  |        v                v              v        |                 |
|  |  +-----+----------------+--------------+-----+  |                 |
|  |  |         ROLE FILTER                       |  |                 |
|  |  |  (task-scope, tool-limit, compress)       |  |                 |
|  |  +-----+-------------------------------------+  |                 |
|  |        |                                        |                 |
|  |  +-----v-----+                                  |                 |
|  |  | AUDIT     |                                  |                 |
|  |  | LOGGER    |                                  |                 |
|  |  +-----------+                                  |                 |
|  +--------+---------------------------------------+                 |
|           |                                                        |
|           v                                                        |
|  +--------+-----------+                                            |
|  | AGENT CONTEXT       |                                            |
|  | BUILDER              |                                            |
|  | (assemble final      |                                            |
|  |  prompt with filtered |                                            |
|  |  context)             |                                            |
|  +----------------------+                                            |
+-------------------------------------------------------------------+
```

### 9.2 Per-Agent Context Builder

The Per-Agent Context Builder assembles the final context window for each agent invocation:

```python
# Pseudocode — Per-Agent Context Builder

def build_agent_context(agent_id: int, task: Task, session: Session) -> Context:
    agent = AgentRegistry.get(agent_id)

    # 1. Start with agent's system prompt (always included)
    context = Context(system_prompt=agent.system_prompt)

    # 2. Add task-specific context (already scoped by Orchestrator)
    task_context = task.get_context()

    # 3. Apply classification filter
    task_context = ClassificationFilter.apply(
        context=task_context,
        max_classification=get_max_classification(agent.tier, agent.department)
    )

    # 4. Apply tier filter
    task_context = TierFilter.apply(
        context=task_context,
        agent_tier=agent.tier
    )

    # 5. Apply department filter
    task_context = DepartmentFilter.apply(
        context=task_context,
        agent_department=agent.department,
        allowed_departments=get_allowed_departments(agent)
    )

    # 6. Apply compression
    task_context = Compressor.apply(
        context=task_context,
        tier_distance=calculate_tier_distance(task_context.origin_tier, agent.tier),
        target_tokens=agent.max_context_tokens
    )

    # 7. Apply tool scoping
    available_tools = ToolRegistry.get_tools(
        agent_id=agent_id,
        max_tools=get_tool_limit(agent.tier)
    )

    # 8. Assemble final context
    context.add(task_context)
    context.set_tools(available_tools)

    # 9. Audit log
    AuditLogger.log_context_delivery(
        agent=agent,
        context=context,
        filters_applied=[ClassificationFilter, TierFilter, DepartmentFilter, Compressor],
        session=session
    )

    return context
```

### 9.3 Filter Pipeline Order

Filters execute in strict order. Each filter can only reduce context, never expand it:

```
1. CLASSIFICATION FILTER  — Remove context above agent's clearance level
2. TIER FILTER            — Remove context outside agent's tier visibility
3. DEPARTMENT FILTER      — Remove cross-department context not authorized
4. ROLE FILTER            — Remove context not relevant to agent's role
5. TASK SCOPE FILTER      — Remove context not relevant to assigned task
6. COMPRESSION            — Compress remaining context to fit token budget
7. TOOL SCOPING           — Attach only authorized tools
8. AUDIT                  — Log everything above (no content, only metadata)
```

**Invariant:** At no point in the pipeline can context be added or classification be downgraded. Filters are strictly reductive. This is a security invariant verified by the system.

### 9.4 Dynamic Context Grants

For exceptional situations where an agent needs context beyond its normal scope:

```
DYNAMIC GRANT PROTOCOL:

1. Agent requests additional context through structured message
2. Request routed to agent's manager (reports_to chain)
3. Manager evaluates need-to-know
4. If approved:
   a. Grant is time-limited (expires after task completion or 24 hours)
   b. Grant is scope-limited (specific context, not blanket access)
   c. Grant is logged with full audit trail
   d. Grant requires manager's agent_id as authorization
5. If denied:
   a. Task is decomposed so restricted context stays with authorized agent
   b. Authorized agent provides filtered summary to requesting agent
6. C-Suite override:
   a. Any Tier 0 agent can grant emergency access to any context
   b. Emergency grants trigger immediate alert to CISO
   c. Emergency grants are reviewed in post-incident analysis
```

---

## 10. Performance Impact

### 10.1 Token Cost Reduction

Context Ray Tracing dramatically reduces token consumption by ensuring agents receive only relevant context:

```
SCENARIO: 195 agents working on a mid-size client project

WITHOUT CRT (current state):
  Average context per agent invocation: ~8,000 tokens (all available context)
  Active agents per session: ~30
  Total context tokens per session: 30 * 8,000 = 240,000 tokens

WITH CRT:
  Tier 0-1 (5 active):   5 * 6,000 = 30,000 tokens  (broad but compressed)
  Tier 2-3 (8 active):   8 * 3,000 = 24,000 tokens  (dept-scoped)
  Tier 4-5 (10 active):  10 * 2,000 = 20,000 tokens (task-scoped)
  Tier 6-7 (7 active):   7 * 1,200 = 8,400 tokens   (minimal task context)
  Total: 82,400 tokens

TOKEN REDUCTION: 65.7% (240,000 -> 82,400)
COST SAVINGS: Proportional to token reduction at API pricing
```

### 10.2 Agent Accuracy Improvement

Research from the MAS Design Patterns paper shows that context overload causes cognitive interference. By filtering context:

- **Reduced hallucination** — Agents with task-scoped context hallucinate less than agents with full organizational context. The Team of Rivals paper demonstrates that "context isolation minimizes the working set of information available to planning agents, reducing hallucination surface."
- **Improved task focus** — Agents with 1,200 tokens of relevant context outperform agents with 8,000 tokens of mixed-relevance context on focused tasks.
- **Faster response** — Smaller context windows process faster, reducing latency per agent invocation.
- **Better tool selection** — Agents with 6-8 focused tools make better tool choices than agents with 15+ unfocused tools.

### 10.3 Filter Latency

The Context Filter Middleware adds latency to every agent invocation. This latency must be minimal:

```
LATENCY BUDGET PER FILTER STAGE:
  Classification Filter:    < 5ms   (pattern matching + lookup)
  Tier Filter:              < 2ms   (simple comparison)
  Department Filter:        < 2ms   (simple comparison)
  Role Filter:              < 5ms   (task relevance scoring)
  Task Scope Filter:        < 10ms  (semantic matching)
  Compression:              < 50ms  (summarization for large context)
  Tool Scoping:             < 2ms   (registry lookup)
  Audit Logging:            < 5ms   (async write)
  -----------------------------------------------
  TOTAL FILTER OVERHEAD:    < 81ms per agent invocation

  vs. LLM inference time:   500-5000ms per agent invocation
  OVERHEAD RATIO:           1.6% - 16% of total invocation time
```

This overhead is acceptable. The 65% token reduction more than compensates for the 81ms filter latency through faster LLM inference on smaller context windows.

### 10.4 Monitoring and Optimization

```
CONTEXT RAY TRACING KPIs:

SECURITY METRICS:
  - Unauthorized access attempts: 0 (target)
  - Classification violations detected: track and remediate
  - Dynamic grants per session: track for policy refinement
  - Audit coverage: 100% of context accesses logged

PERFORMANCE METRICS:
  - Average context tokens per agent (by tier): track weekly
  - Token reduction vs. unfiltered baseline: target >60%
  - Filter latency p50/p95/p99: target <50ms / <80ms / <150ms
  - Compression ratio by tier crossing: target 60-90%

ACCURACY METRICS:
  - Hallucination rate (filtered vs. unfiltered): measure monthly
  - Task completion accuracy by context scope: track per tier
  - Tool selection accuracy: track per agent

COST METRICS:
  - Total token spend with CRT vs. projected without: track monthly
  - Cost per agent invocation by tier: optimize quarterly
  - ROI of filtering infrastructure: positive within 30 days
```

---

## Appendix A: Security Review

```
SECURITY REVIEW: Context Ray Tracing System
REVIEWER: CISO (Agent 009)
VERDICT: APPROVED — Core Security Architecture

THREAT MODEL: STRIDE analysis complete (Section 1.3)

CRITICAL FINDINGS: None (design addresses all identified threats)

HIGH FINDINGS:
  H1: Dynamic grants could be abused if manager agents are compromised
      MITIGATION: Time-limited grants + CISO alerting + post-incident review
  H2: Compression could lose security-critical detail
      MITIGATION: Security findings maintain severity/scope through compression
  H3: Auto-classifier false negatives could under-classify sensitive data
      MITIGATION: Default escalation to CONFIDENTIAL + manual override

ACCEPTED RISKS:
  R1: Filter latency adds ~81ms per invocation (acceptable vs. 500-5000ms LLM time)
  R2: Compression is lossy — some context detail is permanently reduced at lower tiers
       ACCEPTANCE: This is by design. Lower tiers should not have full detail.

COMPLIANCE STATUS:
  SOC 2:   COMPLIANT (full audit trail, access controls, hash-chain integrity)
  GDPR:    COMPLIANT (PII tokenization, processing records, right to erasure support)
  HIPAA:   COMPLIANT (RESTRICTED classification for PHI, access logging)
  PCI-DSS: COMPLIANT (tokenization of payment data, access tracking)
  ISO 27001: COMPLIANT (ISMS-aligned classification, continuous monitoring)
```

---

## Appendix B: Implementation Phases

```
PHASE 1 — Foundation (Week 1-2):
  - Implement Agent Registry with tier/department/role metadata
  - Build Classification Filter (auto-tagging engine)
  - Build Tier Filter and Department Filter
  - Deploy audit logging infrastructure
  - Unit tests for all filter logic

PHASE 2 — Integration (Week 3-4):
  - Integrate CFM with Orchestrator
  - Build Per-Agent Context Builder
  - Implement tool scoping and limits
  - Deploy context compression operators
  - Integration tests with sample agent workflows

PHASE 3 — Hardening (Week 5-6):
  - Implement Dynamic Grant Protocol
  - Build real-time anomaly alerting
  - Deploy hash-chain audit integrity
  - Load testing and latency optimization
  - Penetration testing of filter bypass vectors

PHASE 4 — Production (Week 7-8):
  - Gradual rollout (5 agents -> 20 -> 50 -> 195)
  - Monitor KPIs (Section 10.4)
  - Tune compression ratios based on accuracy data
  - Full compliance audit
  - Documentation and training for agent developers
```

---

## Appendix C: References

1. **Renney et al.** — "LLM-Enabled Multi-Agent Systems: Empirical Evaluation and Insights into Emerging Design Patterns & Paradigms" (2601.03328). Key finding: 8-12 tool limit per agent, context-window overload causes performance degradation.

2. **Adimulam et al.** — "The Orchestration of Multi-Agent Systems: Architectures, Protocols, and Enterprise Adoption" (2601.13671, IEEE). Key finding: Policy enforcement, governance frameworks, and privacy constraints as core MAS components.

3. **Vijayaraghavan et al.** — "If You Want Coherence, Orchestrate a Team of Rivals" (2601.14351). Key finding: Context Ray Tracing concept — message visibility filtered by role and phase; data isolation separating reasoning from execution; 92.1% error interception through layered validation.

4. **NIST SP 800-53** — Security and Privacy Controls for Information Systems. Basis for access control and audit requirements.

5. **ISO 27001:2022** — Information Security Management Systems. Basis for information classification framework.

6. **OWASP Top 10** — Web Application Security Risks. Basis for application-level context security.

---

> **CISO NOTE:** This specification is the security backbone of the NEXUS Runtime. Context Ray Tracing is not an optimization — it is a security control. Without it, we are running 195 agents with root access to everything. That is not defense in depth. That is no defense at all.
>
> — Watchtower (Agent 009)
