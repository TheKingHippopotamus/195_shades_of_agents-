# NEXUS Runtime — Client Project Lifecycle Runtime Specification v1.0

> **Owner:** CRO (Agent 007) | **Status:** Approved | **Date:** 2026-02-19
> **Scope:** End-to-end runtime execution of client projects across all 13 lifecycle stages
> **Dependencies:** 01-PROJECT-LIFECYCLE-MAP.md, 02-AGENT-ACTIVATION-PLAYBOOK.md, 09-CLIENT-ENGAGEMENT-PLAYBOOK.md, 00-ESCALATION-RULES.md

---

## 1. Lifecycle Overview

NEXUS AI executes every client project through a 13-stage lifecycle. Each stage has defined entry/exit criteria, a set of activated agents, measurable deliverables, and governance gates. The lifecycle is not strictly linear — stages can overlap, run in parallel, or loop back based on project needs.

```
LIFECYCLE FLOW
==============================================================================

  REVENUE PHASE              DELIVERY PHASE                    GROWTH PHASE
  ___________    _________________________________________    ______________
 |           |  |                                         |  |              |
 [1] Lead    [2] Discovery  [3] Estimation   [4] Contract    [5] Architecture
  Qual.          & Needs       & Proposal       & Kickoff       & Design
    |               |              |               |               |
    v               v              v               v               v
                                                              [6] Development
                                                                (Sprints)
                                                                   |
                                                                   v
 [13] Maint. <-- [12] Handoff <-- [11] Hypercare <-- [10] Deploy & Launch
  & Growth         & Trans.                               ^
                                                          |
                                        [9] Pre-Prod <-- [8] Staging
                                          Readiness         & UAT
                                                              ^
                                                              |
                                                         [7] QA & Testing
==============================================================================

  ALWAYS-ACTIVE: NEXUS-ORCHESTRATOR (195), CEO (001), COO (004),
                 CFO (005), CISO (009), RETRO-AGENT (193),
                 INNOVATION-AGENT (192)
```

### Stage Purpose Summary

| Stage | Name | Purpose | Primary Owner |
|-------|------|---------|---------------|
| 1 | Lead Qualification | Determine if the opportunity fits ICP and is worth pursuing | CRO / VP-SALES |
| 2 | Discovery | Deep understanding of client needs, constraints, success criteria | DISC-AGENT / AE |
| 3 | Estimation & Proposal | Accurate effort/cost estimation, proposal creation, pricing | EST-AGENT / CFO |
| 4 | Contract & Kickoff | Finalize contract, assemble team, mobilize project | COO / SVP-ENG |
| 5 | Architecture & Design | Define technical architecture and UX/UI design | VP-ARCH / ARB-AGENT |
| 6 | Development (Sprints) | Iterative feature build in agile sprints | Engineering ICs / PMs |
| 7 | QA & Testing | Comprehensive quality, security, and performance validation | DIR-QA / QA-GATE |
| 8 | Staging & UAT | Client validation in staging environment | TPM / CSM |
| 9 | Pre-Production Readiness | Final governance checks before go-live | REL-APPROVE / CHANGE-MGR |
| 10 | Deployment & Launch | Production deployment and go-live execution | SR-DEVOPS / DIR-SRE |
| 11 | Hypercare | Intensive post-launch monitoring and rapid issue response | DIR-SRE / SUPPORT-T2 |
| 12 | Handoff & Transition | Transfer from delivery to ongoing operations | HANDOFF-AGENT |
| 13 | Maintenance & Growth | Ongoing system health, account expansion, renewal | MAINT-AGENT / SR-CSM |

---

## 2. Agent Activation Matrix

This matrix maps every lifecycle stage to the departments and specific agents that activate. Agents are classified by allocation level:

- **L** = Lead (primary responsibility, full-time on stage)
- **F** = Full-time (dedicated to stage for its duration)
- **P** = Part-time (contributes but has other duties)
- **C** = Consulted (provides input on request)
- **G** = Gate (governance checkpoint, triggered per event)

### 2.1 Complete Stage x Department Activation Table

| Stage | Exec (01) | Engineering (02) | Platform (03) | Product (04) | Design (05) | AI/ML (06) | QA (07) | Security (08) | Sales (09) | Marketing (10) | CS (11) | HR (12) | Finance (13) | Legal (14) | IT (15) | DevRel (16) | PMO (17) | Governance (18) | Special (19) | Docs (20) |
|-------|-----------|-------------------|----------------|--------------|-------------|------------|---------|---------------|------------|----------------|---------|---------|--------------|------------|---------|-------------|----------|-----------------|-------------|-----------|
| 1 | CRO-L | - | - | - | - | - | - | - | VP-SALES-L, BDR-F, AE-F, REVOPS-F | - | - | - | - | - | - | - | - | - | - | - |
| 2 | CRO-C, CPO-C | - | - | VP-PROD-C | - | - | - | - | AE-L, SALES-ENG-F, SOL-ARCH-F | - | - | - | - | - | - | - | - | - | DISC-AGENT-L | - |
| 3 | CTO-C, CFO-C | - | - | - | - | - | - | - | SOL-ARCH-F | - | - | - | FPA-MGR-F | CLO-C, VP-LEGAL-F, CONTRACTS-F | - | - | - | - | EST-AGENT-L | - |
| 4 | COO-L | SVP-ENG-F | - | PM-F | - | - | - | - | - | - | - | - | - | CONTRACTS-F | - | - | SR-TPM-F, TPM-F, SCRUM-F | - | ONBOARD-AGENT-F | - |
| 5 | CTO-C | PRINC-ENG-F, DIR-FE/BE/MOB/DATA-C, STAFF-*-C | - | SR-PM-F | VP-DES-C, DIR-DES-F, SR-UXD-F, SR-UID-F, UXR-P | - | - | CISO-C, DIR-SEC-C | - | - | - | - | - | - | - | - | - | ARB-AGENT-G, SEC-REVIEW-G | - | - |
| 6 | - | All ICs-F, SEMs-F, EMs-F, STAFF-*-P | SR-DEVOPS-P, SR-SRE-P | PM-F | SR-UID-P, CONTENT-DES-P | DIR-AIE-P, SR-AIE-P | MGR-QA-P, SR-QA-AUTO-F, QA-ENG-F | - | - | - | - | - | - | - | - | - | TPM-F, SCRUM-F | QA-GATE-G | - | - |
| 7 | - | - | - | - | - | - | DIR-QA-L, MGR-QA-F, SR-QA-AUTO-F, QA-ENG-F, PERF-TEST-F, A11Y-TEST-P | PENTEST-F | - | - | - | - | - | - | - | - | - | QA-GATE-G, SEC-REVIEW-G | - | - |
| 8 | - | - | DIR-SRE-F | PM-F | - | - | QA-ENG-P | - | - | - | SR-CSM-P, CSM-P, SUPPORT-T2-P | - | - | - | - | - | TPM-L | - | - | - |
| 9 | - | - | DIR-SRE-F, DIR-CLOUD-F, SR-SRE-F | - | - | - | - | - | - | - | - | - | - | PRIVACY-C, CONTRACTS-C | - | - | SR-TPM-F | REL-APPROVE-G, QA-GATE-G, SEC-REVIEW-G, CHANGE-MGR-G | - | - |
| 10 | - | - | SR-DEVOPS-F, MGR-DEVOPS-F, DIR-SRE-F, SR-SRE-F | PM-P | - | - | - | DIR-SEC-P | - | CMO-C, PR-MGR-C | CSM-P | - | - | - | - | - | TPM-F | CHANGE-MGR-G | - | - |
| 11 | - | SEM-FE/BE-P | DIR-SRE-F, SR-SRE-F | - | - | - | DIR-QA-P | - | - | - | SR-CSM-F, CSM-F, TAM-F, SUPPORT-T2-F, SUPPORT-T1-F | - | - | - | - | - | - | - | RETRO-AGENT-L | - |
| 12 | - | - | DIR-SRE-P | - | - | - | - | - | - | - | SR-CSM-F, TAM-F, ONBOARD-SPEC-F, SUPPORT-T2-F | - | - | - | - | - | TPM-F | - | HANDOFF-AGENT-L, RETRO-AGENT-F | DOC-LEAD-F, TECH-WRITER-F |
| 13 | - | - | DIR-SRE-P, DIR-SEC-P | - | - | - | - | - | ACCT-MGR-F | - | SR-CSM-F, CSM-F, TAM-F, SUPPORT-T1/T2-F | - | - | - | - | - | - | - | MAINT-AGENT-L | - |

### 2.2 Agent Count Per Stage

| Stage | Active Agents | Departments Involved |
|-------|---------------|---------------------|
| 1 — Lead Qualification | 5 + 7 always-on = 12 | Exec, Sales |
| 2 — Discovery | 6 + 7 = 13 | Exec, Product, Sales, Special |
| 3 — Estimation & Proposal | 7 + 7 = 14 | Exec, Sales, Finance, Legal, Special |
| 4 — Contract & Kickoff | 7 + 7 = 14 | Exec, Engineering, Product, Legal, PMO, Special |
| 5 — Architecture & Design | 14 + 7 = 21 | Exec, Engineering, Product, Design, Security, Governance |
| 6 — Development | 25-40 + 7 = 32-47 | Engineering, Platform, Product, Design, AI/ML, QA, PMO, Governance |
| 7 — QA & Testing | 8 + 7 = 15 | QA, Security, Governance |
| 8 — Staging & UAT | 7 + 7 = 14 | Platform, Product, QA, CS, PMO |
| 9 — Pre-Production | 8 + 7 = 15 | Platform, Legal, PMO, Governance |
| 10 — Deployment & Launch | 9 + 7 = 16 | Platform, Product, Security, Marketing, CS, PMO, Governance |
| 11 — Hypercare | 9 + 7 = 16 | Engineering, Platform, QA, CS, Special |
| 12 — Handoff & Transition | 8 + 7 = 15 | Platform, CS, PMO, Special, Docs |
| 13 — Maintenance & Growth | 8 + 7 = 15 | Platform, Security, Sales, CS, Special |

---

## 3. Stage Gate Criteria

Every stage transition is guarded by explicit entry and exit criteria. Inspired by the "Team of Rivals" paper's pre-declared acceptance testing and the IEEE orchestration paper's quality operations management, no stage advances without satisfying its gate.

### 3.1 Gate Definitions

| Transition | Gate Name | Entry Criteria (must be true to enter) | Exit Criteria (must be true to leave) | Gate Agent |
|------------|-----------|----------------------------------------|---------------------------------------|------------|
| 1 -> 2 | Lead Gate | ICP match score >= 70%, BANT qualification 3/4+ | Opportunity logged in CRM, budget confirmed, decision-maker identified | REVOPS (125) |
| 2 -> 3 | Discovery Gate | Discovery sessions complete, technical and business requirements documented | Discovery Report approved by AE + DISC-AGENT, strategic fit confirmed by CPO | DISC-AGENT (187) |
| 3 -> 4 | Proposal Gate | Estimation reviewed by CTO + CFO, proposal assembled | Client accepts proposal, pricing approved (margin >= 35%), contract terms drafted | EST-AGENT (188) + CRO |
| 4 -> 5 | Kickoff Gate | Contract signed, team assembled, project charter created | Internal kickoff completed, client kickoff completed, backlog initialized, CI/CD scaffolded | TPM (176) |
| 5 -> 6 | Architecture Gate | ARB-AGENT review scheduled, design sprints planned | ADRs approved by ARB-AGENT, SEC-REVIEW passed, wireframes/specs approved by client | ARB-AGENT (181) |
| 6 -> 7 | Dev-Complete Gate | Feature freeze declared, all sprint commitments met | All user stories complete, unit test coverage >= 80%, code review 100%, no P0/P1 bugs open | QA-GATE (184) |
| 7 -> 8 | QA Gate | Test strategy executed, all test suites run | QA-GATE pass, SEC-REVIEW pass, performance benchmarks met, accessibility audit complete | QA-GATE (184) |
| 8 -> 9 | UAT Gate | Staging environment deployed, client access provisioned | Client UAT sign-off received, all critical bugs resolved, acceptance criteria met | TPM (176) |
| 9 -> 10 | Release Gate | All governance reviews complete | REL-APPROVE go, CHANGE-MGR approved, rollback plan documented, monitoring configured | REL-APPROVE (185) |
| 10 -> 11 | Launch Gate | Production deployment complete | System stable 24 hours, zero critical incidents, client notified of go-live | CHANGE-MGR (186) |
| 11 -> 12 | Hypercare Gate | Intensive monitoring period complete | SLA met for 7+ consecutive days, bug rate below threshold, client satisfaction >= 4/5 | DIR-SRE (054) |
| 12 -> 13 | Handoff Gate | Knowledge transfer sessions complete | Handoff package delivered, CS team confirmed ready, operational runbooks verified, retro complete | HANDOFF-AGENT (190) |

### 3.2 Gate Override Protocol

Gates can only be overridden by the authority defined in `00-ESCALATION-RULES.md` Section 8:

| Gate | Override Authority | Conditions |
|------|-------------------|------------|
| ARB-AGENT | CTO | Written risk acceptance + mitigation plan |
| SEC-REVIEW | CEO (on CISO recommendation) | Time-bound exception, remediation deadline |
| QA-GATE | COO + CTO jointly | Monitoring plan + rollback trigger defined |
| REL-APPROVE | CEO | Combined risk acceptance for all factors |

All overrides are time-bound (max 30 days), logged permanently, and reviewed at the next QBR.

---

## 4. Handoff Protocols

Handoffs between stages are the highest-risk points for information loss. Drawing from the "Team of Rivals" paper's Context Ray Tracing mechanism and the TEA Protocol's lifecycle management, every handoff follows a structured context-preservation protocol.

### 4.1 Handoff Message Envelope

Every stage transition generates a structured handoff document:

```yaml
stage_handoff:
  id: "<uuid>"
  project_id: "<project-uuid>"
  from_stage: 6   # Development
  to_stage: 7     # QA & Testing
  timestamp: "2026-03-15T09:00:00Z"

  # WHO is handing off
  outgoing_lead:
    agent_code: "SEM-FE"
    role: "Frontend Team Lead"
  incoming_lead:
    agent_code: "DIR-QA"
    role: "QA Director"

  # WHAT is being transferred
  deliverables:
    - type: "code"
      location: "github.com/client/repo@release/v1.0"
      status: "feature-complete"
    - type: "documentation"
      location: "confluence.client.com/project/tech-specs"
      status: "current"
    - type: "test_suite"
      location: "github.com/client/repo/tests"
      coverage: "82%"

  # CONTEXT that must not be lost
  context:
    decisions_made:
      - "Chose PostgreSQL over MongoDB — ADR-003"
      - "Rate limiting at API gateway, not service level — ADR-007"
    known_risks:
      - risk: "Third-party payment API latency spikes"
        mitigation: "Circuit breaker + 3s timeout configured"
        severity: "medium"
    open_items:
      - "Client has not finalized copy for onboarding flow"
      - "Mobile deep linking requires production URL"
    technical_debt:
      - "Auth token refresh logic needs refactor — backlog item #247"

  # GATE status
  gate_result:
    gate_agent: "QA-GATE"
    status: "PASS"
    conditions: []

  # NEXT stage expectations
  expectations:
    duration: "3 weeks"
    key_milestones:
      - "Week 1: Functional testing complete"
      - "Week 2: Performance + security testing"
      - "Week 3: Bug fixes + regression"
    client_touchpoints:
      - "Day 1: QA kickoff notification to client"
      - "Day 15: Test results summary shared"
```

### 4.2 Critical Handoff Points

These transitions carry the highest risk and require enhanced protocols:

| Handoff | Risk | Enhanced Protocol |
|---------|------|-------------------|
| 3 -> 4 (Proposal -> Kickoff) | Sales promises vs delivery reality | Joint AE + Engineering lead session. SOL-ARCH validates that proposal matches technical plan. |
| 5 -> 6 (Design -> Development) | Design-to-code fidelity loss | Designer-developer pairing sessions. Design system tokens mapped to code components. |
| 6 -> 7 (Dev -> QA) | Incomplete test context | Developer writes test context per feature. QA lead reviews code PRs during last sprint. |
| 10 -> 11 (Deploy -> Hypercare) | Operational knowledge gap | SRE joins last 2 sprints of development. Runbook review with engineering leads. |
| 12 -> 13 (Handoff -> Maintenance) | Institutional knowledge loss | 4 knowledge transfer sessions minimum. TAM shadows engineering during hypercare. |

### 4.3 Context Preservation Layers

Following the "Swiss cheese" model from the Team of Rivals research, context is preserved through multiple redundant layers:

1. **Handoff Document** — Structured YAML envelope (required, machine-readable)
2. **Knowledge Transfer Sessions** — Live walkthroughs between outgoing and incoming teams (2-4 sessions per transition)
3. **Project Memory** — Persistent vector-indexed storage of all decisions, risks, and lessons learned (searchable by any agent at any stage)
4. **Checkpoint State** — Full serialized state of all agent contexts at the moment of transition (enables resume/rollback)

---

## 5. Client Communication Points

Clients are never surprised. Every stage has defined touchpoints aligned to the engagement playbook.

### 5.1 Communication Matrix

| Stage | Frequency | Format | NEXUS Presenter | Client Audience | Content |
|-------|-----------|--------|-----------------|-----------------|---------|
| 1 — Lead Qual | As needed | Email/Call | BDR / AE | Prospect | Initial outreach, qualification questions |
| 2 — Discovery | 2-3 meetings | Video call | AE + SALES-ENG + SOL-ARCH | Decision maker + tech team | Executive discovery, technical deep-dive, solution presentation |
| 3 — Estimation | 1-2 meetings | Video + doc | AE + SOL-ARCH | Decision maker + procurement | Proposal walkthrough, pricing discussion, Q&A |
| 4 — Kickoff | 1 internal + 1 client | Video call | TPM + PM + leads | Client PM + sponsors | Project charter, ways of working, timeline, team intros |
| 5 — Architecture | Bi-weekly | Video + docs | PM + PRINC-ENG + SR-UXD | Client tech lead + PM | Architecture review, design review, wireframe approval |
| 6 — Development | Weekly + bi-weekly | Async + video | PM (weekly), Engineering (demos) | Client PM + stakeholders | Status update (weekly), sprint demo (bi-weekly), executive report (monthly) |
| 7 — QA | Weekly | Email + video | DIR-QA via PM | Client PM | Test progress, findings, risk assessment |
| 8 — UAT | Daily (async) | Slack/Teams + video | TPM + QA-ENG | Client test team | Bug triage, UAT progress, sign-off tracking |
| 9 — Pre-Prod | 1-2 updates | Email | SR-TPM | Client PM + sponsors | Go/no-go decision, launch plan, rollback plan |
| 10 — Deploy | Real-time | Slack/Teams | TPM + DevOps | Client ops team | Deployment progress, go-live confirmation |
| 11 — Hypercare | Daily | Async + on-call | CSM + TAM | Client PM + ops | Incident reports, health metrics, stability updates |
| 12 — Handoff | 2-3 sessions | Video + docs | HANDOFF-AGENT + TAM | Client PM + ops + leadership | Knowledge transfer, documentation review, support process |
| 13 — Maintenance | Monthly + quarterly | Report + video | SR-CSM + TAM (monthly), SR-CSM (QBR) | Client leadership | Health report, QBR, expansion discussion |

### 5.2 Communication Rules

1. **No surprises.** The client should never learn about a problem after it becomes a crisis.
2. **Proactive risk sharing.** Communicate risks when they emerge, not when they materialize.
3. **Solutions, not just problems.** Every risk communication includes a proposed mitigation.
4. **Single voice.** PM is the primary project contact. CSM is the primary relationship contact. AE is the primary commercial contact.
5. **Escalation transparency.** If an internal escalation affects the client timeline, the CSM communicates within 4 hours.

### 5.3 Client Dashboard Metrics (Per Stage)

| Stage | Visible Metrics |
|-------|-----------------|
| 4-6 | Sprint velocity, burndown, feature completion %, milestone progress |
| 7 | Test pass rate, defect count by severity, test coverage %, security scan status |
| 8 | UAT scenarios complete, open bugs, client approval status |
| 10 | Deployment status (real-time), health check results |
| 11 | Uptime %, incident count, MTTR, support ticket status |
| 13 | System health score, uptime, support ticket trends, SLA compliance |

---

## 6. Project Templates

Pre-configured agent teams for each project type, drawn from the Agent Activation Playbook. Each template defines the minimum viable team (MVT), recommended team, and full enterprise team.

### 6.1 Template Definitions

#### Type A: Full-Stack Web Application

```
Duration: 3-9 months | Budget: $200K-$2M
MVT: 12 agents | Recommended: 18-22 | Full: 25-30

PRE-SALES:        AE, SALES-ENG, SOL-ARCH, DISC-AGENT
ESTIMATION:        EST-AGENT, FPA-MGR, CONTRACTS
ARCHITECTURE:      PRINC-ENG, SR-PM, SR-UXD, SR-UID, UXR, ARB-AGENT
DEVELOPMENT:       SEM-FE, SEM-BE, SR-FE-REACT, FE-ENG, JR-FE,
                   SR-BE-NODE/PY, BE-ENG, JR-BE, SR-DEVOPS, SR-SRE,
                   SR-QA-AUTO, QA-ENG, PM, TPM, SCRUM
QA:                DIR-QA, MGR-QA, PERF-TEST, A11Y-TEST, PENTEST
LAUNCH:            REL-APPROVE, CHANGE-MGR, CSM, ONBOARD-SPEC
POST-DELIVERY:     HANDOFF-AGENT, TAM, MAINT-AGENT, SUPPORT-T1/T2
```

#### Type B: Mobile Application

```
Duration: 3-6 months | Budget: $150K-$1M
MVT: 10 agents | Recommended: 14-18

CORE SWAP: Replace frontend team with mobile team:
  EM-MOB, SR-MOB-RN or SR-MOB-NAT, MOB-ENG, JR-MOB
  + DIR-MOB for architecture guidance
  Backend team is lighter (API-focused)
```

#### Type C: AI/ML Product

```
Duration: 2-6 months | Budget: $200K-$1.5M
MVT: 10 agents | Recommended: 15-20

CORE: DIR-AIE, SR-AIE, SR-MLE, SR-DS/STAFF-DS, AI-ETHICS,
      AI-PM, SR-DE, DATA-ENG
SPECIAL: AI-ETHICS review mandatory before model deployment
         SEC-REVIEW includes AI-specific security (prompt injection, data leakage)
         GPU/token cost monitoring from day 1
```

#### Type D: API / Platform / Integration

```
Duration: 2-4 months | Budget: $100K-$500K
MVT: 6 agents | Recommended: 10-12

CORE: STAFF-BE, SR-BE-NODE/GO, BE-ENG, TPM, SR-TW,
      SR-DEVOPS, SR-QA-AUTO, SR-DEV-ADV, DRE
SPECIAL: API design review by STAFF-BE before implementation
         Contract testing mandatory for all integrations
         Documentation is a first-class deliverable
```

#### Type E: Data Engineering / Analytics

```
Duration: 2-4 months | Budget: $100K-$400K
MVT: 5 agents | Recommended: 8-10

CORE: DIR-DATA, EM-DATA, SR-DE, DATA-ENG, STAFF-DS/SR-DS, DS, PM
```

#### Type F: Design Sprint / UX Overhaul

```
Duration: 1-3 months | Budget: $50K-$200K
MVT: 5 agents | Recommended: 8-10

CORE: DIR-DES, MGR-UX, SR-UXD, SR-UID, UXR, CONTENT-DES,
      MOTION-DES, SR-PM, A11Y-TEST, STAFF-FE (consulted)
```

#### Type G: Security Audit / Compliance

```
Duration: 2-6 weeks | Budget: $50K-$150K
MVT: 4 agents | Recommended: 6-8

CORE: DIR-SEC, SR-SEC-ENG, PENTEST, APPSEC, GRC-SPEC,
      IR-LEAD, COMPLIANCE, PRIVACY
```

#### Type H: Maintenance / Enhancement

```
Duration: Ongoing | Budget: $10K-$50K/month
MVT: 3 agents | Recommended: 4-5

CORE: MAINT-AGENT, TAM, SUPPORT-T2, FE-ENG/BE-ENG, SR-DEVOPS
```

#### Type I: Proof of Concept (POC)

```
Duration: 2-4 weeks | Budget: $20K-$80K
MVT: 2 agents | Recommended: 3-4

CORE: SR-STAFF or STAFF-FE/BE, SR-AIE (if AI), SR-PM or AI-PM, SR-UID
```

---

## 7. Parallel Execution Map

Not all stages are sequential. The runtime supports parallel execution where stage dependencies allow.

### 7.1 Stage Dependency Graph

```
STRICT SEQUENCE (must complete before next):
  1 -> 2 -> 3 -> 4     (revenue: qualify -> discover -> estimate -> close)
  9 -> 10 -> 11         (launch: approve -> deploy -> monitor)

PARALLEL-ELIGIBLE:
  5a (Architecture) || 5b (UX Design)      — can run concurrently
  6 (Development)   || 7 (Testing)         — overlapping: QA starts mid-development
  7 (QA)            || 8 (UAT prep)        — staging prep starts during late QA

LOOP-BACK:
  7 -> 6 (QA finds critical bugs -> back to dev sprints)
  8 -> 6 (UAT feedback -> additional dev sprints)
  11 -> 6 (Hypercare hotfixes -> targeted dev)
```

### 7.2 Intra-Stage Parallelism

Within each stage, multiple workstreams execute concurrently:

| Stage | Parallel Workstreams |
|-------|---------------------|
| 5 | Architecture design \|\| UX research \|\| Security architecture review |
| 6 | Frontend sprints \|\| Backend sprints \|\| Mobile sprints \|\| Infrastructure provisioning \|\| Test automation setup |
| 7 | Functional testing \|\| Performance testing \|\| Security testing \|\| Accessibility testing |
| 9 | Release approval \|\| Security final review \|\| Infrastructure readiness \|\| Privacy compliance |
| 10 | Deployment execution \|\| Monitoring setup \|\| Client communication \|\| Marketing launch |
| 12 | Knowledge transfer \|\| Documentation \|\| Retro \|\| Support preparation |

### 7.3 Concurrency Constraints

These workstreams must NOT run in parallel due to dependencies:

| Constraint | Reason |
|-----------|--------|
| Architecture decisions BEFORE development starts | Code must implement approved architecture |
| Security architecture review BEFORE development starts | Security patterns built in, not bolted on |
| Feature freeze BEFORE formal QA begins | Testing a moving target wastes effort |
| QA-GATE pass BEFORE UAT begins | Client should not find defects QA should have caught |
| All governance gates BEFORE production deployment | Compliance and risk management |
| Deployment complete BEFORE hypercare begins | Cannot monitor what is not running |

---

## 8. Checkpoint & Resume

Drawing from the Team of Rivals' checkpointing mechanism and the TEA Protocol's session management, the runtime supports full project pause, resume, and time-travel.

### 8.1 Checkpoint Architecture

Every project maintains a checkpoint at each stage transition and at significant intra-stage milestones:

```yaml
checkpoint:
  id: "<uuid>"
  project_id: "<project-uuid>"
  timestamp: "2026-03-15T09:00:00Z"
  stage: 6
  stage_progress: 0.65     # 65% through development

  # Serialized state of all active agents
  agent_states:
    - agent_code: "SR-FE-REACT"
      context_summary: "Completed auth module, working on dashboard"
      active_tasks: ["DASH-101", "DASH-102"]
      blockers: []
    - agent_code: "SR-BE-NODE"
      context_summary: "API v2 endpoints complete, starting webhooks"
      active_tasks: ["API-205"]
      blockers: ["Awaiting third-party API credentials"]

  # Project artifacts at this point
  artifacts:
    code_commit: "abc123def"
    test_results: "95/100 passing"
    design_files: "figma.com/project/xyz@v12"
    documentation: "confluence/project@v8"

  # Decisions and context
  decision_log:
    - decision: "Switched from REST to GraphQL for dashboard API"
      date: "2026-03-10"
      rationale: "Client's frontend team prefers GraphQL"
      agents: ["STAFF-BE", "SR-FE-REACT", "PM"]

  # Financial state
  financials:
    budget_consumed: 145000
    budget_remaining: 255000
    burn_rate_per_week: 18000
    estimated_completion_cost: 375000

  # Client state
  client_state:
    satisfaction: 4.2    # out of 5
    last_touchpoint: "2026-03-14T14:00:00Z"
    open_action_items: 3
    pending_decisions: 1
```

### 8.2 Checkpoint Events

Checkpoints are automatically created at:

| Event | Trigger | Retention |
|-------|---------|-----------|
| Stage transition | Every stage gate pass | Permanent |
| Sprint boundary | End of each sprint | 6 months |
| Governance gate | Every gate evaluation (pass or fail) | Permanent |
| Client milestone | Each client-facing deliverable | Permanent |
| Escalation event | Any P0 or P1 escalation | 1 year |
| Manual | Agent or operator triggers checkpoint | Permanent |

### 8.3 Resume Protocol

When a paused project resumes:

1. **Load checkpoint** — Restore the most recent checkpoint state
2. **Context rehydration** — All assigned agents receive their serialized context plus a summary of time elapsed and any external changes
3. **Stale dependency check** — Verify that external dependencies (APIs, credentials, environments) are still valid
4. **Client re-engagement** — CSM contacts client to confirm resumption, revalidate priorities, and schedule re-kickoff
5. **Backlog refresh** — PM reviews and re-prioritizes the backlog based on any changed requirements
6. **Checkpoint-on-resume** — Create a new checkpoint at the moment of resumption to mark the restart point

### 8.4 Time-Travel (Rollback)

The runtime supports rolling back to any previous checkpoint:

- **Use case:** A wrong architectural decision made in Stage 5 is discovered in Stage 7
- **Process:** Roll back to the Stage 5 checkpoint, load the decision context, make a new decision with new information, re-enter the lifecycle from that point
- **Constraints:** Client must approve any rollback that affects timeline or budget. Financial state rolls forward (costs incurred are not recovered).

---

## 9. SLA Framework

Expected duration per stage with escalation triggers. SLAs adapt to project type.

### 9.1 Stage Duration SLAs

| Stage | Type A | Type B | Type C | Type D | Type I | Escalation Trigger |
|-------|--------|--------|--------|--------|--------|-------------------|
| 1 — Lead Qual | 1-3 days | 1-3 days | 1-3 days | 1-3 days | 1 day | Lead unqualified after 5 days |
| 2 — Discovery | 1-3 weeks | 1-2 weeks | 2-3 weeks | 1-2 weeks | 2-3 days | No discovery report after 4 weeks |
| 3 — Estimation | 1-2 weeks | 1 week | 1-2 weeks | 1 week | 2-3 days | Proposal not sent after 3 weeks |
| 4 — Kickoff | 1-2 weeks | 1 week | 1-2 weeks | 1 week | 1-2 days | Team not assembled 2 weeks post-signing |
| 5 — Architecture | 2-4 weeks | 2-3 weeks | 3-4 weeks | 1-2 weeks | 1 week | ARB review not scheduled after 3 weeks |
| 6 — Development | 6-24 weeks | 4-16 weeks | 4-16 weeks | 4-12 weeks | 1-3 weeks | Sprint velocity below 70% for 3 consecutive sprints |
| 7 — QA | 2-4 weeks | 2-3 weeks | 2-3 weeks | 1-2 weeks | 2-3 days | QA-GATE fails 3 times consecutively |
| 8 — UAT | 1-2 weeks | 1-2 weeks | 1-2 weeks | 1 week | 1-2 days | Client UAT exceeds 3 weeks |
| 9 — Pre-Prod | 3-5 days | 3-5 days | 3-5 days | 2-3 days | 1 day | Governance gates unresolved after 7 days |
| 10 — Deploy | 1-3 days | 1-3 days | 1-3 days | 1-2 days | 1 day | Deployment fails 2 consecutive attempts |
| 11 — Hypercare | 1-2 weeks | 1-2 weeks | 2 weeks | 1 week | 3 days | Any SEV-1 incident during hypercare |
| 12 — Handoff | 1-2 weeks | 1 week | 1-2 weeks | 1 week | 1-2 days | Handoff incomplete after 3 weeks |
| 13 — Maintenance | Ongoing | Ongoing | Ongoing | Ongoing | N/A | Client health score drops below 3/5 |

### 9.2 Time-Based Auto-Escalation

When a stage exceeds its SLA ceiling:

| Overrun | Escalation Level | Action |
|---------|-----------------|--------|
| Stage SLA + 25% | PM -> Director level | Review blockers, adjust plan |
| Stage SLA + 50% | Director -> VP level | Resource reallocation, scope negotiation |
| Stage SLA + 100% | VP -> C-suite | Executive intervention, client communication |

### 9.3 Internal Response SLAs

| Event | SLA | Escalation if Missed |
|-------|-----|---------------------|
| Governance gate submission to decision | 2 business days | Gate agent -> COO |
| Cross-team dependency resolution | 1 business day | Blocked team's EM -> Common Director |
| Client-reported bug triage | 4 hours (business hours) | SUPPORT-T2 -> CSM -> VP-CS |
| Escalation acknowledgment | Per priority level (P0: 15 min, P1: 2 hrs, P2: 1 day) | Auto-escalate +1 level |

---

## 10. Multi-Project Management

The runtime must handle 5-10 concurrent client projects without resource conflicts or context contamination.

### 10.1 Resource Allocation Model

Drawing from the IEEE orchestration paper's execution and control management pattern:

```
RESOURCE ALLOCATION TIERS:

Tier 1 — DEDICATED (1 project only)
  When: Project budget > $500K or Type X
  Agents: Full engineering team assigned exclusively
  Benefit: Maximum velocity, zero context-switching

Tier 2 — PRIMARY (1 project primary, 1 secondary)
  When: Standard projects (Type A-D)
  Agents: Seniors/leads dedicated, mid-level shared across 2 projects max
  Rule: Primary project gets 70%+ of agent capacity

Tier 3 — SHARED (up to 3 projects)
  When: Smaller projects (Type E-I) or maintenance
  Agents: Agents serve multiple projects
  Rule: No agent on more than 3 active projects simultaneously
```

### 10.2 Conflict Resolution

When two projects need the same agent simultaneously:

1. **Priority scoring:** Each project has a priority score based on: revenue value (40%), client tier (20%), deadline proximity (20%), strategic importance (20%)
2. **COO arbitration:** COO resolves priority ties using the scoring model
3. **Substitution:** If a specific agent is unavailable, the runtime identifies the next-qualified agent based on skill matrix
4. **Escalation:** If no substitute exists, escalate to SVP-ENG (engineering) or relevant VP for capacity decision

### 10.3 Context Isolation

Each project operates in an isolated context space. Inspired by the Team of Rivals' remote code execution isolation:

- **Separate project memory:** Each project has its own vector-indexed knowledge base
- **Separate communication channels:** Project-specific message channels prevent cross-contamination
- **Separate checkpoint stores:** Checkpoints are project-scoped
- **Agent context switching:** When an agent moves between projects, their context is fully serialized (project A) and restored (project B) — no bleed-through

### 10.4 Portfolio Dashboard

The COO and NEXUS-ORCHESTRATOR maintain a portfolio view:

```
PORTFOLIO HEALTH DASHBOARD
==========================================================================================
Project        | Stage   | Health | Budget     | Timeline    | Client NPS | Risk
---------------|---------|--------|------------|-------------|------------|------
Acme Corp API  | 6 (Dev) | GREEN  | 62% used   | On track    | 4.5        | Low
Beta Mobile    | 8 (UAT) | YELLOW | 78% used   | 1 wk delay  | 3.8        | Medium
Gamma AI Plat  | 5 (Arch)| GREEN  | 25% used   | On track    | 4.2        | Low
Delta Redesign | 7 (QA)  | RED    | 91% used   | 3 wk delay  | 3.2        | High
Epsilon Maint  | 13      | GREEN  | Within cap | Ongoing     | 4.7        | Low
==========================================================================================
ALERTS:
  - Delta Redesign: Budget overrun risk. Escalated to CFO. Scope negotiation in progress.
  - Beta Mobile: UAT delay due to client availability. CSM coordinating new schedule.
```

---

## 11. Client Dashboard Design

What clients see at each phase. The dashboard provides transparency without overwhelming detail.

### 11.1 Dashboard Layers

**Layer 1: Executive View (C-suite / sponsors)**
- Overall project health (Green/Yellow/Red)
- Budget consumed vs. remaining
- Key milestones: completed, upcoming, at-risk
- Next client action required (if any)

**Layer 2: Manager View (Client PM / tech lead)**
- Current sprint status and burndown
- Feature completion percentage
- Open bugs by severity
- Upcoming deliverables with dates
- Action items assigned to client

**Layer 3: Detail View (Client technical team)**
- Test results and coverage metrics
- Performance benchmarks
- Deployment status
- Support ticket status and SLA compliance
- System health metrics (post-launch)

### 11.2 Dashboard Content by Stage

| Stage | Executive View | Manager View | Detail View |
|-------|---------------|--------------|-------------|
| 4-5 | Milestone plan, team assigned | Architecture decisions pending approval, design review schedule | Technical specs, ADRs, wireframes |
| 6 | Sprint count, features complete | Sprint burndown, velocity trend, demo recordings | Code metrics, PR activity, test coverage |
| 7 | QA status (pass/in-progress/fail) | Defect summary, test execution progress | Individual test results, bug details |
| 8 | UAT progress, sign-off status | UAT scenario tracking, open issues | Bug reports, reproduction steps |
| 9-10 | Go/no-go status, launch date | Deployment plan, rollback plan | Infrastructure details, monitoring config |
| 11 | System status, incident count | SLA compliance, ticket trends | Incident details, performance metrics |
| 13 | Health score, QBR summary | Support metrics, system metrics | Detailed logs, maintenance activity |

### 11.3 Notification Rules

| Event | Notify Client? | Channel | Urgency |
|-------|---------------|---------|---------|
| Sprint demo ready | Yes | Email + calendar | Normal |
| Milestone complete | Yes | Email + dashboard | Normal |
| Risk identified | Yes (if impacts timeline/budget) | Email via CSM | High |
| Scope change proposed | Yes | Formal CR document | High |
| Deployment scheduled | Yes | Email + dashboard | Normal |
| Incident (SEV-1/2) | Yes | Phone/Slack (immediate) | Critical |
| Incident (SEV-3/4) | Only if impact > 2 hours | Email | Low |
| QBR scheduled | Yes | Calendar invite | Normal |
| Renewal approaching | Yes | Email from CSM | Normal |

---

## 12. Success Metrics

How the runtime measures lifecycle efficiency across all dimensions.

### 12.1 Revenue Phase Metrics (Stages 1-3)

| Metric | Definition | Target | Owner |
|--------|-----------|--------|-------|
| Lead-to-Discovery Conversion | % of qualified leads that enter discovery | >= 60% | VP-SALES |
| Discovery Completion Rate | % of discoveries that produce a report | >= 80% | DISC-AGENT |
| Proposal Win Rate | % of proposals that convert to signed contracts | >= 40% | CRO |
| Average Sales Cycle | Days from first touch to signed contract | < 90 days | CRO |
| Proposal Accuracy | Actual project cost vs. proposal estimate | Within 15% | EST-AGENT |
| MEDDIC Score Distribution | Average qualification completeness | >= 4/6 | AE |

### 12.2 Delivery Phase Metrics (Stages 4-10)

| Metric | Definition | Target | Owner |
|--------|-----------|--------|-------|
| Kickoff-to-Launch Duration | Calendar days from contract to production | Within estimate +/- 15% | COO |
| Sprint Velocity Consistency | Standard deviation of velocity across sprints | < 20% variance | SEM |
| Defect Escape Rate | % of bugs found in UAT/production vs. total bugs | < 5% | DIR-QA |
| Governance Gate First-Pass Rate | % of gate submissions that pass on first attempt | >= 75% | QA-GATE |
| Architecture Decision Reversal Rate | % of ADRs that are reversed during development | < 10% | ARB-AGENT |
| On-Time Milestone Delivery | % of milestones delivered on or before target | >= 90% | TPM |
| Budget Adherence | Actual spend vs. planned budget | Within 10% | FPA-MGR |
| Client Mid-Project CSAT | Client satisfaction score during delivery | >= 4/5 | CSM |

### 12.3 Growth Phase Metrics (Stages 11-13)

| Metric | Definition | Target | Owner |
|--------|-----------|--------|-------|
| Hypercare Incident Rate | Number of SEV-1/2 incidents during hypercare | <= 1 | DIR-SRE |
| Post-Launch SLA Compliance | % of time SLA targets met during first 90 days | >= 99.5% | SR-SRE |
| Handoff Completeness Score | % of handoff checklist items completed | 100% | HANDOFF-AGENT |
| Knowledge Transfer Effectiveness | Incoming team can resolve issues without escalation | >= 80% within 30 days | TAM |
| Net Revenue Retention (NRR) | Revenue from existing clients / prior period revenue | >= 115% | CRO |
| Client NPS | Net Promoter Score at project completion | >= 60 | SR-CSM |
| Time to First Expansion | Days from project completion to expansion deal | < 180 days | ACCT-MGR |
| Client Churn Rate | % of clients who do not renew | < 5% annual | VP-CS |
| Logo Retention Rate | % of client logos retained year-over-year | >= 95% | CRO |

### 12.4 Operational Efficiency Metrics

| Metric | Definition | Target | Owner |
|--------|-----------|--------|-------|
| Agent Utilization | % of available agent capacity that is actively allocated | 75-85% | COO |
| Context Switch Cost | Estimated productivity loss from multi-project agents | < 15% | SVP-ENG |
| Stage Transition Time | Average days between stage gate pass and next stage start | < 2 business days | TPM |
| Escalation Rate | Number of escalations per project per month | < 3 | COO |
| Checkpoint Recovery Time | Time to resume a paused project from checkpoint | < 4 hours | NEXUS-ORCHESTRATOR |
| Cross-Department Handoff Defect Rate | % of handoffs with missing context | < 5% | NEXUS-ORCHESTRATOR |

---

## Appendix A: Lifecycle Runtime State Machine

The complete state machine for a NEXUS project:

```
                        ┌─────────────────────────────────┐
                        │         PROJECT STATES           │
                        └─────────────────────────────────┘

  [PROSPECT]                                          Project Type: A-I or X
      │                                               classified by NEXUS-ORCHESTRATOR
      v
  [QUALIFYING] ──(disqualified)──> [CLOSED-LOST]
      │
      v
  [DISCOVERY] ──(no fit)──> [CLOSED-LOST]
      │
      v
  [ESTIMATING] ──(client declines)──> [CLOSED-LOST]
      │
      v
  [CONTRACTED]
      │
      v
  [ACTIVE] ──(paused by client)──> [PAUSED] ──(resumed)──> [ACTIVE]
      │                                │
      │                          (cancelled)
      │                                v
      │                          [CANCELLED]
      v
  [LAUNCHED]
      │
      v
  [HYPERCARE]
      │
      v
  [OPERATIONAL] ──(renewal)──> [ACTIVE] (new project cycle)
      │
      ├──(expansion)──> [DISCOVERY] (new workstream)
      │
      └──(churned)──> [CLOSED-CHURNED]
```

---

## Appendix B: Integration with Governance Engine

The lifecycle runtime interacts with the Governance Engine (spec 05) at these points:

| Lifecycle Stage | Governance Gate | Trigger | Authority |
|----------------|-----------------|---------|-----------|
| 5 | ARB-AGENT (181) | Architecture complete | VP-ARCH |
| 5, 7, 9 | SEC-REVIEW (182) | Security checkpoints | DIR-SEC |
| 6, 7, 8, 9 | QA-GATE (184) | Quality checkpoints | DIR-QA |
| 9 | REL-APPROVE (185) | Release approval | DIR-PMO |
| 9, 10 | CHANGE-MGR (186) | Production changes | DIR-SRE |

Each governance gate operates with **veto authority** — no stage advances without gate approval or an authorized override.

---

## Appendix C: Runtime API Surface

The lifecycle runtime exposes these operations to the NEXUS-ORCHESTRATOR and other runtime components:

```
PROJECT LIFECYCLE OPERATIONS:
  project.create(type, client, config) -> project_id
  project.classify(project_id) -> project_type (A-I, X)
  project.activate_stage(project_id, stage_number) -> activation_result
  project.check_gate(project_id, stage_number) -> gate_result
  project.advance_stage(project_id) -> new_stage
  project.pause(project_id) -> checkpoint_id
  project.resume(project_id, checkpoint_id?) -> activation_result
  project.rollback(project_id, checkpoint_id) -> rollback_result
  project.get_status(project_id) -> project_status
  project.get_health(project_id) -> health_score

AGENT ALLOCATION OPERATIONS:
  allocation.assign(agent_code, project_id, role, allocation_level)
  allocation.release(agent_code, project_id)
  allocation.get_availability(agent_code) -> availability
  allocation.find_substitute(agent_code, skill_requirements) -> candidates

CLIENT COMMUNICATION OPERATIONS:
  client.notify(project_id, event_type, message)
  client.schedule_meeting(project_id, meeting_type, attendees)
  client.update_dashboard(project_id, metrics)
  client.get_satisfaction(project_id) -> csat_score

CHECKPOINT OPERATIONS:
  checkpoint.create(project_id, trigger_event) -> checkpoint_id
  checkpoint.load(checkpoint_id) -> checkpoint_state
  checkpoint.list(project_id) -> checkpoint_ids[]
  checkpoint.prune(project_id, retention_policy)
```

---

## Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-02-19 | CRO (Agent 007) | Initial lifecycle runtime specification |

---

## References

- **Team of Rivals (Isotopes AI, 2026)** — 522 production sessions, organizational intelligence, pre-declared acceptance testing, Swiss cheese validation, checkpoint/resume architecture
- **IEEE Multi-Agent Orchestration (Adimulam et al., 2025)** — Planning/policy/execution/control orchestration layers, state and knowledge management, quality operations
- **AgentOrchestra / TEA Protocol (Zhang et al., 2025)** — Tool-Environment-Agent lifecycle management, session management, hierarchical multi-agent orchestration, self-evolution
- **NEXUS AI 01-PROJECT-LIFECYCLE-MAP.md** — 13-stage lifecycle with agent mapping
- **NEXUS AI 02-AGENT-ACTIVATION-PLAYBOOK.md** — Project type classification and activation matrices
- **NEXUS AI 09-CLIENT-ENGAGEMENT-PLAYBOOK.md** — Client communication cadence and engagement lifecycle
- **NEXUS AI 00-ESCALATION-RULES.md** — Escalation triggers, paths, SLAs, and governance gate overrides
