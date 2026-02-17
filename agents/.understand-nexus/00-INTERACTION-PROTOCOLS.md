# 🔗 NEXUS AI — Agent Interaction Protocols v1.0

## Purpose

This document defines **how** the 188 agents of NEXUS AI communicate, collaborate, and coordinate. Every agent must follow these protocols to ensure consistent, traceable, and efficient inter-agent communication across all 18 departments and 5 governance roles.

---

## 1. COMMUNICATION PRIMITIVES

Every interaction between agents falls into one of these six types:

| Type | Abbreviation | Direction | Description |
|------|-------------|-----------|-------------|
| **Request** | `REQ` | Sender → Receiver | Ask another agent to perform work or provide information |
| **Response** | `RES` | Receiver → Sender | Answer to a request with deliverable or information |
| **Handoff** | `HND` | Sender → Receiver | Transfer ownership of a work item to another agent |
| **Escalation** | `ESC` | Lower → Higher | Raise an issue to a higher-authority agent (see `00-ESCALATION-RULES.md`) |
| **Broadcast** | `BRC` | One → Many | Share information with a group (department, project team, or org-wide) |
| **Notification** | `NTF` | System → Agent | Automated alerts (build status, deployment events, threshold breaches) |

---

## 2. MESSAGE ENVELOPE FORMAT

All inter-agent messages follow a structured envelope to ensure traceability and routing:

```yaml
message:
  id: "<uuid>"                          # Unique message ID
  type: "REQ | RES | HND | ESC | BRC | NTF"
  from:
    agent_code: "SR-FE-REACT"           # Sender's code from hierarchy
    agent_name: "Senior Frontend Engineer (React)"
    department: "Engineering"
  to:
    agent_code: "EM-FE"                 # Receiver's code (or "DEPT:Engineering" for broadcast)
    agent_name: "Engineering Manager — Frontend"
  project_id: "<project-uuid>"          # Which client project this relates to
  thread_id: "<thread-uuid>"            # Conversation thread (for multi-turn exchanges)
  priority: "P0 | P1 | P2 | P3"        # See Priority Levels below
  subject: "Brief description"
  body: |
    Detailed message content...
  attachments:
    - type: "PRD | RFC | design_spec | code_diff | test_report | ..."
      ref: "<artifact-id>"
  timestamp: "2026-02-14T10:30:00Z"
  requires_response: true               # Whether a reply is expected
  response_deadline: "2026-02-14T18:00:00Z"  # When response is needed by
```

---

## 3. PRIORITY LEVELS

| Level | Label | Response SLA | Use Case |
|-------|-------|-------------|----------|
| **P0** | Critical / Outage | ≤ 15 minutes | Production down, security breach, data loss, client-blocking issue |
| **P1** | Urgent | ≤ 2 hours | Release blocker, failing CI/CD, critical bug in staging, compliance deadline |
| **P2** | Standard | ≤ 1 business day | Feature requests, code reviews, design feedback, routine questions |
| **P3** | Low / FYI | ≤ 3 business days | Informational, non-blocking suggestions, knowledge sharing |

**Rules:**
- P0 messages bypass all queues and interrupt the receiving agent immediately
- Only C-suite, Directors, and SRE/Security agents may issue P0 messages
- Misuse of P0 is flagged by the COO agent and triggers a process review

---

## 4. COMMUNICATION CHANNELS

### 4.1 Direct Messages (DM)

One-to-one communication between two agents. Used for:
- Specific requests with a single owner
- Feedback on individual deliverables
- Career coaching (manager → IC)
- Escalation (IC → manager)

**Routing rule:** Messages always follow the org chart first. To reach an agent outside your reporting chain, route through the lowest common manager **or** use a cross-functional channel.

### 4.2 Department Channels

Every department has a shared channel visible to all members:

| Channel | Members | Purpose |
|---------|---------|---------|
| `#exec-leadership` | All C-suite (11) | Strategic decisions, company-wide announcements |
| `#engineering` | All Engineering (42) | Tech discussions, RFCs, incident alerts |
| `#platform-infra` | Platform & Infra (12) | Deployments, infrastructure changes, SRE alerts |
| `#product` | Product Management (10) | PRDs, roadmap discussions, prioritization |
| `#design` | Design (14) | Design critiques, system updates, research findings |
| `#data-ai` | Data Science & AI/ML (12) | Model updates, experiment results, data governance |
| `#qa` | Quality Assurance (8) | Test results, quality gates, automation updates |
| `#security` | Security (8) | Vulnerability reports, security reviews, compliance |
| `#sales-revenue` | Sales & Revenue (10) | Pipeline updates, deal support, competitive intel |
| `#marketing` | Marketing (9) | Campaign updates, content calendar, analytics |
| `#customer-success` | CS & Support (8) | Customer health, escalations, NPS reports |
| `#people-hr` | People / HR (7) | Hiring pipeline, culture initiatives, comp reviews |
| `#finance` | Finance & Accounting (7) | Budget updates, financial reviews, procurement |
| `#legal` | Legal & Compliance (7) | Contract reviews, compliance updates, policy changes |
| `#it-ops` | IT & Operations (5) | System status, tool changes, business continuity |
| `#devrel` | Developer Relations (5) | Community feedback, content pipeline, SDK updates |
| `#program-mgmt` | Program Management (4) | Cross-project status, resource allocation, risks |
| `#documentation` | Documentation (3) | Doc reviews, knowledge base updates, style guide |

### 4.3 Cross-Functional Channels

These channels span departments and are organized by function:

| Channel | Key Participants | Purpose |
|---------|-----------------|---------|
| `#project-{id}` | Product Triad + assigned team | All communication for a specific client project |
| `#incident-{id}` | SRE + Engineering + Security | Active incident response (auto-created on P0) |
| `#launch-{codename}` | TPM + PM + Engineering + QA + Legal + Security + Marketing | Launch coordination |
| `#architecture-review` | ARB-AGENT + Staff+ Engineers + VP-ARCH | RFC reviews and architecture decisions |
| `#security-review` | SEC-REVIEW + APPSEC + SR-SEC-ENG | Pre-launch security sign-off |
| `#hiring-{role}` | Hiring Manager + Recruiter + Interview Panel | Hiring loop coordination |

### 4.4 Broadcast / Announcement Channels

| Channel | Who Posts | Audience | Cadence |
|---------|----------|----------|---------|
| `#company-all` | CEO, COO | All 188 agents | Weekly + ad-hoc |
| `#engineering-all` | CTO, SVP-ENG | All engineering + platform | Bi-weekly |
| `#wins` | Anyone | All agents | Continuous (celebrate shipped work) |
| `#postmortems` | IR-LEAD, SRE | All engineering + product | After every P0/P1 incident |

---

## 5. INTERACTION PATTERNS

### 5.1 The Product Triad Protocol

The triad (PM + Tech Lead + Design Lead) is the **atomic decision-making unit** for every client project.

```
         ┌─────────────────┐
         │  Product Manager │
         │    (PM / SR-PM)  │
         └────────┬────────┘
                  │
        ┌─────────┴─────────┐
        │                   │
┌───────┴───────┐   ┌──────┴────────┐
│  Tech Lead    │   │  Design Lead  │
│ (TECH-LEAD)   │   │ (SR-PROD-DES) │
└───────────────┘   └───────────────┘
```

**Rules:**
1. The triad meets at the start of every sprint (synchronous)
2. All three must sign off on feature scope before development begins
3. Disagreements are resolved within the triad first — 3-round max
4. If unresolved after 3 rounds, escalate to the **lowest common authority** (typically Director level)
5. Any triad member can request an ad-hoc sync; others must respond within 4 hours

### 5.2 Request → Response Protocol

```
Requester                          Responder
    │                                  │
    ├── REQ (with priority + deadline) ──▶│
    │                                  │
    │                          [ACK within SLA]
    │◀── ACK ("received, ETA: X") ─────┤
    │                                  │
    │                          [Does the work]
    │                                  │
    │◀── RES (deliverable attached) ───┤
    │                                  │
    ├── ACK ("accepted") ──────────────▶│  ← or "revision needed" with feedback
    │                                  │
```

**Rules:**
- Every REQ must receive an ACK within the priority SLA, even if the actual work takes longer
- If the responder cannot meet the deadline, they must reply with a revised ETA **before** the original deadline
- Unanswered requests past SLA trigger automatic escalation to the responder's manager

### 5.3 Handoff Protocol

Used when ownership of a work item transfers between agents or phases.

```yaml
handoff:
  from: "SR-UXD"                    # UX Designer completing design
  to: "SR-FE-REACT"                 # Frontend Engineer starting implementation
  work_item: "User onboarding flow"
  artifacts:
    - "Figma design file (link)"
    - "Design spec with annotations"
    - "Interaction states documented"
    - "Accessibility requirements"
  acceptance_criteria:
    - "All screens match design at ≥95% fidelity"
    - "Responsive breakpoints implemented per spec"
    - "WCAG 2.1 AA compliance verified"
  open_questions:
    - "Edge case: What happens when user has 50+ items?"
  context_briefing: |
    Summary of decisions made, trade-offs chosen,
    and any known constraints the receiver needs...
```

**Rules:**
1. Every handoff must include artifacts, acceptance criteria, and a context briefing
2. The receiving agent has **4 hours** to review and ACK or request clarification
3. Handoffs are logged in the project channel (`#project-{id}`)
4. The handing-off agent remains available for questions for **48 hours** after handoff

### 5.4 Code Review Protocol

```
Author                    Reviewer(s)                  Approver
  │                           │                           │
  ├── REQ (code diff) ────────▶│                           │
  │                           │                           │
  │◀── Comments / LGTM ───────┤                           │
  │                           │                           │
  ├── Revisions ──────────────▶│                           │
  │                           │                           │
  │◀── LGTM ──────────────────┤                           │
  │                                                       │
  ├── Merge request ──────────────────────────────────────▶│
  │                                                       │
  │◀── Approved + Merged ─────────────────────────────────┤
```

**Rules:**
- Minimum **1 reviewer** for standard changes, **2 reviewers** for changes touching:
  - Authentication/authorization
  - Payment processing
  - Data migrations
  - Infrastructure configuration
  - Public API contracts
- Code review turnaround: ≤ 4 hours for P1, ≤ 1 business day for P2
- Reviewer must be at the same level or higher than the author
- STAFF+ engineers can merge without additional approval for their area of ownership

### 5.5 RFC / Design Document Protocol

For architectural decisions that affect multiple teams:

```
Author (Staff+)          Reviewers              ARB-AGENT
     │                       │                      │
     ├── RFC published ──────▶│                      │
     │   (5-day comment       │                      │
     │    period)             │                      │
     │◀── Comments ───────────┤                      │
     │                       │                      │
     ├── Revisions ──────────▶│                      │
     │                       │                      │
     ├── Final RFC ──────────────────────────────────▶│
     │                                               │
     │◀── APPROVED / REJECTED / NEEDS REVISION ──────┤
```

**Rules:**
- RFCs require a **5-business-day** open comment period
- Any engineer can comment; Staff+ engineers' comments must be addressed
- ARB-AGENT makes the final decision for cross-team architectural changes
- Approved RFCs are immutable — changes require a new RFC

---

## 6. MEETING PROTOCOLS

### 6.1 Recurring Ceremonies

| Ceremony | Cadence | Duration | Facilitator | Required Attendees | Purpose |
|----------|---------|----------|-------------|-------------------|---------|
| **Daily Standup** | Daily | 15 min | SCRUM / EM | Squad members | Blockers, today's plan |
| **Sprint Planning** | Bi-weekly | 2 hrs | PM + EM | Squad + QA | Scope next sprint |
| **Sprint Review / Demo** | Bi-weekly | 1 hr | PM | Squad + stakeholders | Demo completed work |
| **Retrospective** | Bi-weekly | 1 hr | SCRUM | Squad | Process improvement |
| **Design Critique** | Weekly | 1 hr | DIR-DES | Design team + PM | Design quality review |
| **Architecture Review** | Weekly | 1 hr | ARB-AGENT | Staff+ Engineers + VP-ARCH | RFC reviews, tech decisions |
| **Product Review** | Weekly | 1 hr | CPO | PMs + Design Leads | Roadmap alignment |
| **Engineering Sync** | Weekly | 30 min | SVP-ENG | Engineering Directors | Cross-team dependencies |
| **Incident Review** | Post-incident | 1 hr | IR-LEAD | Involved parties + SRE | Postmortem |
| **QBR (Quarterly)** | Quarterly | 2 hrs | CEO | All C-suite | Company performance |
| **Security Review** | Pre-launch | 1-2 hrs | SEC-REVIEW | Security + Engineering Lead | Security sign-off |
| **Launch Go/No-Go** | Pre-launch | 1 hr | REL-APPROVE | PM + TPM + QA-GATE + SEC-REVIEW + LEGAL-REVIEW | Launch decision |

### 6.2 Meeting Output Requirements

Every meeting must produce:
1. **Decisions made** — What was decided and by whom (DRI noted)
2. **Action items** — Task, owner (by agent code), deadline
3. **Open questions** — Unresolved items and who owns resolution
4. **Artifacts** — Links to any docs/designs/code discussed

Meeting notes are posted to the relevant channel within **1 hour** of meeting end.

---

## 7. CROSS-FUNCTIONAL COLLABORATION PATTERNS

### 7.1 Engineering ↔ Product

| Interaction | From | To | Trigger | Protocol |
|------------|------|-----|---------|----------|
| Feature request | PM | EM / Tech Lead | New PRD | REQ with PRD attached, P2 |
| Feasibility check | PM | Staff+ Engineer | Pre-PRD | REQ, expect RES with estimate in 2 days |
| Sprint scope change | PM | EM | Mid-sprint | ESC to Dir if > 20% scope change |
| Technical constraint | Tech Lead | PM | During planning | NTF with alternatives proposed |
| Shipped feature | EM | PM | Post-deploy | NTF with release notes |

### 7.2 Engineering ↔ Design

| Interaction | From | To | Trigger | Protocol |
|------------|------|-----|---------|----------|
| Design handoff | SR-PROD-DES | FE Engineer | Design complete | HND with Figma + spec |
| Design QA | FE Engineer | SR-PROD-DES | Implementation done | REQ for visual review |
| Feasibility feedback | FE Engineer | SR-UXD | During design | NTF — "this animation costs 200ms" |
| Design system update | STAFF-DES | All FE Engineers | Component change | BRC to `#engineering` |

### 7.3 Engineering ↔ QA

| Interaction | From | To | Trigger | Protocol |
|------------|------|-----|---------|----------|
| Test plan request | EM | MGR-QA | Sprint planning | REQ with feature spec |
| Bug report | QA-ENG | Engineer (author) | Test failure | REQ with repro steps, P1/P2 |
| Release sign-off | QA-GATE | REL-APPROVE | All tests pass | RES with test report |
| Flaky test alert | QA-ENG | Tech Lead | Test instability | NTF, P2 |

### 7.4 Engineering ↔ Security

| Interaction | From | To | Trigger | Protocol |
|------------|------|-----|---------|----------|
| Threat model review | APPSEC | Tech Lead | New feature design | REQ during design phase |
| Security code review | APPSEC | Engineer | PR with auth/crypto/data | REQ, must resolve before merge |
| Vulnerability report | PENTEST | DIR-SEC → EM | Pen test finding | ESC with severity rating |
| Security exception | EM | CISO | Can't fix before launch | ESC — requires CEO sign-off |

### 7.5 Engineering ↔ SRE/Platform

| Interaction | From | To | Trigger | Protocol |
|------------|------|-----|---------|----------|
| SLO definition | SR-SRE | Tech Lead + PM | New service | REQ — must agree before launch |
| Error budget alert | SRE-ENG | EM | Budget < 20% remaining | NTF, P1 — may block deployments |
| Infrastructure request | EM | SR-DEVOPS | New service/resource | REQ with resource spec |
| Incident declaration | SRE-ENG | All on-call | Threshold breach | P0 BRC to `#incident-{id}` |
| Postmortem action items | IR-LEAD | Assigned engineers | Post-incident | REQ with deadline, tracked by TPM |

### 7.6 Sales ↔ Engineering

| Interaction | From | To | Trigger | Protocol |
|------------|------|-----|---------|----------|
| Technical pre-sales | SALES-ENG | Staff+ Engineer | Complex prospect question | REQ, P2 |
| Custom feature request | ENT-AE | PM (via CRO → CPO) | Enterprise deal requirement | ESC through product channel |
| POC support | SALES-ENG | Assigned engineers | Proof of concept | REQ with scope + timeline |
| Customer feedback | CSM | PM | Product issue pattern | NTF aggregated monthly |

### 7.7 Legal ↔ All Departments

| Interaction | From | To | Trigger | Protocol |
|------------|------|-----|---------|----------|
| Contract review | Any agent | CONTRACTS | New vendor/client agreement | REQ, P2, 5-day turnaround |
| Privacy review | PM | PRIVACY | Feature handling user data | REQ during design phase |
| IP review | Engineering | IP-COUNSEL | Using OSS / third-party code | REQ before integration |
| Launch legal review | LEGAL-REVIEW | PM + EM | Pre-launch gate | Required sign-off |
| Compliance check | Any agent | COMPLIANCE | Regulatory question | REQ, P2 |

---

## 8. GOVERNANCE AGENT ACTIVATION

Governance agents are **not** always active — they are invoked at specific project lifecycle checkpoints:

| Governance Agent | Code | Activation Trigger | Required Inputs | Output |
|-----------------|------|-------------------|-----------------|--------|
| Architecture Review Board | ARB-AGENT | RFC submitted / major design change | RFC document, system diagrams | APPROVED / REJECTED / REVISION_NEEDED |
| Security Review | SEC-REVIEW | Pre-launch gate reached | Threat model, pen test results, code scan | PASS / FAIL with findings |
| Legal Review | LEGAL-REVIEW | Pre-launch gate reached | Privacy assessment, ToS, compliance checklist | CLEARED / BLOCKED with issues |
| Quality Gate | QA-GATE | Release candidate ready | Test results, coverage report, bug counts | GO / NO-GO with quality metrics |
| Release Approval | REL-APPROVE | All other gates passed | All gate results, rollback plan | SHIP / HOLD with conditions |

**Rules:**
- Governance agents have **veto power** — a FAIL/BLOCKED/NO-GO from any gate blocks the launch
- Override requires escalation to **C-suite level** (CEO for security, CLO for legal, CTO for architecture)
- Governance decisions are immutable and logged permanently

---

## 9. CLIENT-FACING AGENT PROTOCOLS

Special agents that interact directly with external clients follow stricter protocols:

### 9.1 Client Communication Rules

1. **Single voice:** Only the designated client-facing agent (DISC-AGENT, DEMO-AGENT, etc.) communicates with the client directly
2. **Internal review:** All client-facing communications are reviewed by PM + CSM before delivery
3. **Tone consistency:** Client-facing agents use professional, non-technical language unless the client is technical
4. **No internal jargon:** Agent codes, department names, and internal channel references are never exposed to clients
5. **Response time:** Client queries receive acknowledgment within **2 hours** and substantive response within **1 business day**

### 9.2 Client Lifecycle Handoff Chain

```
DISC-AGENT → EST-AGENT → [Internal Team Execution] → DEMO-AGENT → HANDOFF-AGENT → MAINT-AGENT
     │            │                │                       │              │              │
  Discovery    Estimate      Build Phase              Milestone       Delivery      Ongoing
  + Intake    + Pricing     (PM is client             Reviews       + Training     Support
                            contact during)
```

Each transition follows the **Handoff Protocol** (Section 5.3) with a client-specific context briefing.

---

## 10. CONFLICT RESOLUTION PROTOCOL

When agents disagree, follow this resolution ladder:

```
Step 1: Direct Discussion (DM between disagreeing agents)
  │ Max 2 exchanges. If unresolved:
  ▼
Step 2: Triad / Squad Discussion (bring it to the team)
  │ Max 1 meeting. If unresolved:
  ▼
Step 3: Manager Mediation (both agents' managers confer)
  │ Max 2 business days. If unresolved:
  ▼
Step 4: Director Arbitration (lowest common director decides)
  │ Decision is final unless it involves cross-department impact:
  ▼
Step 5: VP / C-Suite Ruling (for cross-department or strategic conflicts)
  │ Decision is final and binding.
```

**Rules:**
- The agent who escalates must provide: the disagreement summary, both positions, and what they've tried
- Each step has a time limit — conflicts cannot stall indefinitely
- The arbiter at each level must state the reasoning behind their decision
- Decisions are logged in the project channel

---

## 11. INCIDENT RESPONSE COMMUNICATION

When a P0 incident occurs, communication follows a strict protocol:

```
Detection (SRE/Monitoring)
  │
  ├── P0 BRC to #incident-{id}         ← Auto-created channel
  ├── Page on-call SRE + EM             ← Immediate
  ├── NTF to DIR-SRE + VP-INFRA         ← Within 5 min
  │
  ▼
Incident Commander (IC) assigned        ← Usually SR-SRE or MGR-SRE
  │
  ├── Status updates every 15 min to #incident-{id}
  ├── NTF to C-suite if customer-impacting > 30 min
  ├── IR-LEAD joins if security-related
  │
  ▼
Resolution
  │
  ├── All-clear BRC to #incident-{id}
  ├── Summary NTF to #engineering-all
  ├── Postmortem scheduled within 48 hours
  │
  ▼
Postmortem (led by IR-LEAD)
  │
  ├── Blameless analysis posted to #postmortems
  ├── Action items assigned as REQs with deadlines
  └── Tracked by TPM until all items closed
```

---

## 12. ASYNC-FIRST PRINCIPLES

NEXUS AI operates **async-first** — synchronous communication is the exception, not the default.

### When to Use Async (Default)
- Code reviews
- RFC comments
- Status updates
- Non-blocking questions
- Design feedback
- Documentation reviews
- Bug reports
- Feature requests

### When to Use Sync (Exception)
- P0/P1 incident response
- Sprint planning and retrospectives
- Triad alignment meetings
- Conflict resolution (Step 2+)
- Go/no-go launch decisions
- Client demos and presentations
- Onboarding new agents to a project

### Async Etiquette
1. **Front-load context** — assume the reader has no prior context on this specific thread
2. **Propose a solution** — don't just raise a problem; suggest at least one path forward
3. **State your deadline** — always include when you need a response
4. **Use threads** — keep channels organized; top-level messages are for new topics only
5. **Acknowledge receipt** — a simple ACK prevents the sender from wondering if you saw it

---

## 13. INFORMATION CLASSIFICATION

All inter-agent communications carry an implicit classification:

| Level | Label | Access | Examples |
|-------|-------|--------|----------|
| **L0** | Public | Any agent | Company announcements, shipped features, public docs |
| **L1** | Internal | All NEXUS AI agents | Project plans, architecture docs, meeting notes |
| **L2** | Confidential | Named agents only | Client data, financial details, HR matters, security findings |
| **L3** | Restricted | C-suite + named agents | M&A discussions, legal disputes, executive comp, security vulnerabilities (pre-patch) |

**Rules:**
- Agents must not share L2+ information in channels with broader access than required
- Client data is always L2 minimum
- Security vulnerabilities are L3 until patched, then L1
- HR matters (performance, compensation, investigations) are always L2+

---

## 14. TOOL AND ARTIFACT CONVENTIONS

### 14.1 Standard Artifact Types

| Artifact | Owner | Format | Stored In |
|----------|-------|--------|-----------|
| PRD | PM | Markdown template | Project repo `/docs/prds/` |
| RFC / Design Doc | Staff+ Engineer | Markdown template | Project repo `/docs/rfcs/` |
| Design Spec | Designer | Figma + exported annotations | Figma project + `/docs/designs/` |
| Test Plan | QA | Markdown template | Project repo `/docs/qa/` |
| Threat Model | APPSEC | Markdown + diagrams | Project repo `/docs/security/` |
| Postmortem | IR-LEAD | Markdown template | Company wiki `/postmortems/` |
| Sprint Notes | SCRUM | Markdown | Project repo `/docs/sprints/` |
| Meeting Notes | Facilitator | Markdown | Relevant channel, pinned |

### 14.2 Referencing Artifacts

When referring to artifacts in messages, use the format:
```
[ARTIFACT_TYPE:artifact-id] — e.g., [RFC:nexus-2026-042] or [PRD:onboarding-v2]
```

This allows any agent to look up the referenced document in the standard location.

---

## 15. ONBOARDING A NEW AGENT TO A PROJECT

When an agent joins an ongoing project, the onboarding protocol ensures they have full context:

1. **PM sends** a project brief: vision, current sprint goals, key decisions made, open questions
2. **Tech Lead sends** a technical context doc: architecture, tech stack, key code paths, known tech debt
3. **EM assigns** a buddy agent (same role/level) for the first 2 sprints
4. **New agent** has **read-only access** to all project channels for 48 hours (observe before participating)
5. **New agent** completes a "context quiz" — summarizes their understanding; PM + Tech Lead validate

---

## VERSION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-02-14 | System Architect | Initial protocol definition |

---

## RELATED DOCUMENTS

- `00-COMPANY-HIERARCHY-V3.md` — Complete organizational structure (188 agents)
- `00-ESCALATION-RULES.md` — When and how to escalate (companion to this document)
