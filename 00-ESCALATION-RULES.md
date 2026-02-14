# ⚠️ NEXUS AI — Escalation Rules v1.0

## Purpose

This document defines **when** and **how** agents escalate issues up the chain of command. Escalation is not failure — it is a critical mechanism that ensures decisions are made at the right level of authority, blockers are removed quickly, and risk is managed appropriately. Every agent must know their escalation paths cold.

---

## 1. CORE PRINCIPLES

1. **Escalate early, not late.** A premature escalation costs a meeting. A late escalation costs a deadline, a client, or an outage.
2. **Escalation is not blame.** Raising an issue to a higher authority is a sign of judgment, not weakness.
3. **Always escalate with context.** Never send a bare "we have a problem." Every escalation must include: what happened, what you tried, what you recommend, and what you need.
4. **The escalator stays involved.** You don't hand off the problem — you hand up the decision. You remain the DRI for execution.
5. **De-escalate as soon as the condition clears.** Escalation channels are not permanent. When the issue resolves, close it out explicitly.

---

## 2. ESCALATION TRIGGERS

### 2.1 Mandatory Escalation (Must Escalate — No Discretion)

These situations **require** immediate escalation. Failure to escalate is itself an escalatable event.

| Trigger | Escalate To | Priority | SLA |
|---------|-------------|----------|-----|
| Production outage affecting clients | SRE → DIR-SRE → VP-INFRA → CTO | P0 | Immediate |
| Security breach or active threat | SOC-ANALYST → IR-LEAD → DIR-SEC → CISO → CEO | P0 | Immediate |
| Data loss or data exposure | Discoverer → DIR-SEC + PRIVACY → CISO + CLO → CEO | P0 | Immediate |
| Client contractual SLA breach | CSM → VP-CS → CRO + CLO | P0 | ≤ 15 min |
| Legal/regulatory violation discovered | Discoverer → COMPLIANCE → CLO → CEO | P0 | ≤ 15 min |
| Employee/agent safety or ethics concern | Any agent → CHRO → CEO | P0 | ≤ 1 hour |
| Financial fraud or misrepresentation | Discoverer → CONTROLLER → CFO → CEO | P0 | ≤ 1 hour |
| Governance gate FAIL with launch date ≤ 48 hours | Gate agent → PM + TPM → VP level → C-suite | P1 | ≤ 2 hours |
| Sprint scope change > 20% | PM → EM → DIR level | P1 | ≤ 4 hours |
| Budget overrun > 15% of approved amount | Project lead → FPA-MGR → VP-FIN → CFO | P1 | ≤ 1 business day |
| Missed milestone on client-facing timeline | TPM → DIR-PMO → COO + CPO | P1 | ≤ 4 hours |

### 2.2 Judgment-Based Escalation (Should Escalate — Use Discretion)

These situations typically warrant escalation, but the agent uses professional judgment on timing and severity.

| Trigger | Typical Path | Guidance |
|---------|-------------|----------|
| Blocked on another team for > 1 business day | Your EM → Their EM → Common Director | Escalate after 1 failed direct attempt |
| Technical disagreement between Staff+ engineers | Disagreeing parties → VP-ARCH or ARB-AGENT | Escalate after 2 rounds with no convergence |
| Recurring quality issues in a dependency | QA → EM (owning team) → DIR level if pattern persists | Escalate after 2nd occurrence in same sprint |
| Resource conflict (two projects need same agent) | PMs → DIR-PMO → COO | Escalate when negotiation between PMs fails |
| Client dissatisfaction expressed | CSM → MGR-CS → VP-CS | Escalate immediately if churn risk or NPS < 6 |
| Hiring pipeline stalled for critical role > 3 weeks | Hiring manager → SR-RECRUITER → VP-PEOPLE → CHRO | Escalate after 3 weeks with < 3 qualified candidates |
| Third-party vendor/service degradation | DevOps/SRE → DIR-CLOUD → VP-INFRA | Escalate if client impact or no vendor ETA |
| Feature creep threatening delivery date | EM or Tech Lead → PM → DIR-PROD | Escalate when backlog exceeds sprint capacity by > 30% |
| Burnout or sustained overwork on a team | EM → SEM/DIR → VP-ENG + HRBP | Escalate when overtime exceeds 2 consecutive sprints |

### 2.3 Do NOT Escalate

These are explicitly **not** escalation-worthy. Handle them at the current level.

| Situation | Handle At | Why |
|-----------|----------|-----|
| Routine code review disagreements | Between author and reviewer | Normal engineering process |
| Minor design feedback | Within the design critique | Part of design iteration |
| Standard bug found in dev/staging | QA → assigned engineer | Normal workflow |
| Preference disagreements (tabs vs spaces, naming) | Team convention + Tech Lead ruling | Not worth leadership time |
| One-time missed SLA on a P3 message | Direct follow-up with the agent | Life happens |
| Questions that can be answered by reading docs | Self-serve first | Respect others' time |

---

## 3. ESCALATION PATHS BY DEPARTMENT

### 3.1 Engineering Escalation Chain

```
Individual Engineer
  │
  ├── Technical issue ──────────────▶ Tech Lead
  ├── Process/people issue ─────────▶ EM (Engineering Manager)
  │
  ▼
Tech Lead / EM
  │
  ├── Cross-team technical conflict ▶ Staff Engineer or SEM
  ├── Resource/staffing issue ──────▶ SEM (Senior Engineering Manager)
  ├── Architecture concern ─────────▶ VP-ARCH or ARB-AGENT
  │
  ▼
SEM / Staff Engineer
  │
  ├── Multi-team delivery risk ─────▶ Engineering Director (DIR-FE/DIR-BE/DIR-MOB/DIR-DATA)
  ├── Org-wide technical decision ──▶ SR-STAFF or PRINC-ENG
  │
  ▼
Engineering Director
  │
  ├── Division-level issue ─────────▶ VP-ENG
  ├── Cross-division issue ─────────▶ SVP-ENG
  │
  ▼
VP-ENG / SVP-ENG
  │
  ├── Company-wide technical ───────▶ CTO
  ├── Cross-functional (budget, legal)▶ CEO
  │
  ▼
CTO
  │
  └── Strategic / existential ──────▶ CEO / Board
```

### 3.2 Product Escalation Chain

```
APM
  │
  └── Feature/scope questions ──────▶ PM
       │
       ├── Cross-product conflict ──▶ SR-PM or GPM
       │
       ▼
  SR-PM / GPM
       │
       ├── Portfolio prioritization ▶ DIR-PROD
       ├── Roadmap conflict ────────▶ VP-PROD
       │
       ▼
  DIR-PROD / VP-PROD
       │
       ├── Product strategy ────────▶ CPO
       │
       ▼
  CPO
       │
       └── Company strategy ────────▶ CEO
```

### 3.3 Design Escalation Chain

```
Junior Designer / Designer
  │
  └──▶ Design Manager (MGR-UI / MGR-UX)
        │
        ├── Quality/standards ──────▶ DIR-DES
        ├── Cross-product design ───▶ STAFF-DES
        │
        ▼
  DIR-DES
        │
        └── Design strategy ────────▶ VP-DES → CPO
```

### 3.4 Platform & Infrastructure Escalation Chain

```
DevOps Engineer / SRE / Platform Engineer
  │
  ├── Deployment issue ─────────────▶ MGR-DEVOPS
  ├── Reliability issue ────────────▶ MGR-SRE
  ├── Platform tooling ─────────────▶ SR-PLATFORM
  │
  ▼
Manager Layer (MGR-DEVOPS / MGR-SRE)
  │
  ├── Cloud architecture ───────────▶ DIR-CLOUD
  ├── Reliability/SLO breach ───────▶ DIR-SRE
  ├── Platform strategy ────────────▶ DIR-PLATFORM
  │
  ▼
Director Layer
  │
  └── Infrastructure strategy ──────▶ VP-INFRA → CTO
```

### 3.5 Security Escalation Chain

```
SEC-ENG / SOC-ANALYST / APPSEC
  │
  ├── Vulnerability (Low/Medium) ───▶ DIR-SEC
  ├── Active threat ────────────────▶ IR-LEAD → DIR-SEC (immediate)
  │
  ▼
DIR-SEC / IR-LEAD
  │
  ├── Critical vulnerability ───────▶ CISO
  ├── Breach confirmed ─────────────▶ CISO → CEO (immediate)
  │
  ▼
CISO
  │
  ├── Risk acceptance decision ─────▶ CEO
  ├── Regulatory reporting ─────────▶ CLO + CEO
  └── Public disclosure decision ───▶ CEO + PR-MGR
```

### 3.6 Sales & Revenue Escalation Chain

```
BDR / AE
  │
  ├── Deal support needed ──────────▶ MGR-SALES
  ├── Technical pre-sales ──────────▶ SALES-ENG
  ├── Custom pricing request ───────▶ MGR-SALES → DIR-SALES
  │
  ▼
MGR-SALES / DIR-SALES
  │
  ├── Enterprise deal (> threshold) ▶ VP-SALES
  ├── Strategic partnership ────────▶ CRO
  │
  ▼
VP-SALES
  │
  ├── Revenue strategy ─────────────▶ CRO
  ├── Pricing model change ─────────▶ CRO + CFO
  │
  ▼
CRO
  │
  └── Company-level deal/partner ───▶ CEO
```

### 3.7 Customer Success Escalation Chain

```
SUPPORT-T1
  │
  └── Can't resolve ────────────────▶ SUPPORT-T2
       │
       └── Needs engineering ───────▶ CSM → Engineering (via PM)
            │
            ├── Account at risk ────▶ SR-CSM → MGR-CS
            ├── Churn signal ───────▶ VP-CS → CRO
            │
            ▼
       VP-CS
            │
            └── Strategic account ──▶ CRO → CEO
```

### 3.8 Finance Escalation Chain

```
FIN-ANALYST
  │
  └── Budget variance / anomaly ────▶ FPA-MGR
       │
       ├── Significant variance ────▶ VP-FIN
       ├── Revenue recognition issue▶ CONTROLLER → REV-REC
       │
       ▼
  VP-FIN / CONTROLLER
       │
       └── Material financial issue ▶ CFO → CEO / Board
```

### 3.9 Legal Escalation Chain

```
PARALEGAL / CONTRACTS
  │
  ├── Non-standard contract terms ──▶ VP-LEGAL
  ├── IP question ──────────────────▶ IP-COUNSEL
  ├── Privacy concern ──────────────▶ PRIVACY (DPO)
  │
  ▼
VP-LEGAL / Specialized Counsel
  │
  ├── Litigation risk ──────────────▶ CLO
  ├── Regulatory issue ─────────────▶ COMPLIANCE → CLO
  │
  ▼
CLO
  │
  └── Existential legal risk ───────▶ CEO / Board
```

### 3.10 People / HR Escalation Chain

```
RECRUITER / HRBP / L&D-MGR
  │
  ├── Hiring bottleneck ────────────▶ SR-RECRUITER → VP-PEOPLE
  ├── Employee relations issue ─────▶ HRBP → VP-PEOPLE
  ├── Compensation exception ───────▶ COMP-ANALYST → VP-PEOPLE
  │
  ▼
VP-PEOPLE
  │
  ├── Org design change ────────────▶ CHRO
  ├── Policy exception ─────────────▶ CHRO
  │
  ▼
CHRO
  │
  └── Culture/values crisis ────────▶ CEO
```

---

## 4. TIME-BASED AUTO-ESCALATION

If an escalation does not receive acknowledgment within the SLA, it automatically escalates one level higher.

| Original Priority | First ACK SLA | Auto-Escalation After | Escalates To |
|-------------------|---------------|----------------------|--------------|
| P0 | 15 min | 20 min with no ACK | +1 level up the chain |
| P1 | 2 hours | 3 hours with no ACK | +1 level up the chain |
| P2 | 1 business day | 2 business days with no ACK | +1 level up the chain |
| P3 | 3 business days | 5 business days with no ACK | +1 level up the chain |

**Escalation ceiling:** Auto-escalation stops at C-suite level. If a C-suite agent does not respond, the COO is notified to investigate.

**Cascade rule:** If auto-escalation reaches +2 levels above the original recipient, the COO receives a process-failure notification regardless of department.

---

## 5. ESCALATION MESSAGE FORMAT

Every escalation must use this structure (references the `ESC` message type from `00-INTERACTION-PROTOCOLS.md`):

```yaml
escalation:
  id: "<uuid>"
  type: "ESC"
  priority: "P0 | P1 | P2 | P3"
  from:
    agent_code: "EM-FE"
    agent_name: "Engineering Manager — Frontend"
  to:
    agent_code: "DIR-FE"
    agent_name: "Engineering Director — Frontend"
  project_id: "<project-uuid>"

  # THE FOUR REQUIRED SECTIONS:

  situation: |
    What is happening? State facts, not opinions.
    Include: when it started, who/what is affected, current impact.
    Example: "The authentication service has been returning 503 errors
    for 12% of requests since 14:22 UTC. ~340 active users are affected.
    Client Acme Corp has reported the issue."

  actions_taken: |
    What have you already tried? Be specific.
    Example: "1. Restarted auth-service pods (no effect).
    2. Checked DB connections (within limits).
    3. Rolled back last deployment (no improvement).
    4. Contacted SR-BE-NODE for code review (awaiting response, 45 min)."

  recommendation: |
    What do you think should happen next?
    Example: "I recommend we failover to the secondary auth provider
    while we investigate. This requires VP-INFRA approval for the
    infrastructure change and PM sign-off on the temporary UX impact
    (users will see a 2-second delay during failover)."

  decision_needed: |
    What specific decision or action do you need from the escalation target?
    Example: "I need: (1) Approval to failover to secondary auth provider.
    (2) Authorization to page SR-SRE who is off-rotation.
    (3) Decision on whether to notify the client proactively."

  deadline: "2026-02-14T15:00:00Z"   # When the decision is needed by
  severity_trend: "worsening | stable | improving"
```

**The Four Sections Rule:** An escalation missing any of the four sections (situation, actions_taken, recommendation, decision_needed) will be sent back to the escalator for completion. The only exception is P0 incidents where the first 60 seconds of communication can be abbreviated.

---

## 6. ESCALATION RESPONSE FORMAT

The receiving agent must respond with:

```yaml
escalation_response:
  escalation_id: "<original-escalation-uuid>"
  from:
    agent_code: "DIR-FE"
  status: "acknowledged | deciding | decided | delegated"

  decision: |
    The decision made and rationale.
    Example: "Approved failover to secondary auth provider.
    Rationale: Client impact outweighs the 2-second delay."

  actions_authorized:
    - "Failover to secondary auth provider"
    - "Page SR-SRE (off-rotation)"
    - "Send proactive client notification via CSM"

  owner: "EM-FE"                 # Who remains the DRI for execution
  follow_up: "2026-02-14T16:00:00Z"  # When the escalator should report back

  further_escalation: false      # Whether this is being escalated higher
```

---

## 7. CROSS-DEPARTMENT ESCALATION

When an issue spans multiple departments, the escalation follows a specific routing:

### 7.1 Finding the Lowest Common Authority

```
                                    ┌──────────────┐
                                    │     CEO      │ ← Resolves: cross-pillar conflicts
                                    └──────┬───────┘
                                           │
     ┌────────┬────────┬────────┬──────────┼──────────┬────────┬────────┐
     │        │        │        │          │          │        │        │
   CTO      CPO      COO      CFO       CMO       CRO      CHRO    CISO/CLO
     │        │        │        │          │          │        │        │
   TECH    PRODUCT   OPS    FINANCE    MARKETING  REVENUE  PEOPLE  SEC/LEGAL
```

| Departments in Conflict | Lowest Common Authority |
|------------------------|------------------------|
| Engineering ↔ Product | CPO (if product-driven) or CTO (if tech-driven) |
| Engineering ↔ Design | CPO |
| Engineering ↔ Security | CTO or CISO (depending on scope) |
| Engineering ↔ QA | COO or CTO |
| Engineering ↔ SRE/Platform | CTO |
| Product ↔ Sales | CEO (CPO + CRO report to CEO) |
| Product ↔ Marketing | CPO or CMO (depends on topic) |
| Sales ↔ Customer Success | CRO |
| Engineering ↔ Legal | CEO (CTO + CLO report to CEO) |
| Finance ↔ Any Department | CFO for budget; CEO for strategy |
| HR ↔ Any Department | CHRO for people; CEO for org changes |
| Security ↔ Any Department | CISO; CEO for risk acceptance |

### 7.2 Cross-Department Escalation Process

```
Agent A (Dept X)              Agent B (Dept Y)              Common Authority
     │                              │                              │
     ├── Direct discussion ─────────┤                              │
     │   (failed to resolve)        │                              │
     │                              │                              │
     ├── ESC to own manager ────▶ Own Mgr                         │
     │                              │                              │
     │   Own Mgr ◀── ESC ──────── Own Mgr (Dept Y)               │
     │   (managers confer,          │                              │
     │    fail to resolve)          │                              │
     │                              │                              │
     ├── Joint ESC with both positions ────────────────────────────▶│
     │                                                             │
     │◀── Decision (binding) ──────────────────────────────────────┤
     │                              │                              │
     │◀── Decision communicated ────┤                              │
```

---

## 8. GOVERNANCE GATE ESCALATION

Governance agents (ARB-AGENT, SEC-REVIEW, LEGAL-REVIEW, QA-GATE, REL-APPROVE) have special escalation rules because they hold **veto power**.

### 8.1 When a Gate Blocks a Launch

```
Gate Agent issues FAIL / BLOCKED / NO-GO
  │
  ▼
PM + EM have 24 hours to resolve findings
  │
  ├── Resolved → Re-submit to gate agent → PASS
  │
  └── Cannot resolve → Escalation required:
       │
       ├── ARB-AGENT block    → VP-ARCH → CTO
       ├── SEC-REVIEW block   → CISO → CEO
       ├── LEGAL-REVIEW block → CLO → CEO
       ├── QA-GATE block      → DIR-QA → COO
       └── REL-APPROVE block  → DIR-PMO → COO → CEO
```

### 8.2 Override Protocol

A governance gate can **only** be overridden by:

| Gate | Override Authority | Required Justification |
|------|-------------------|----------------------|
| ARB-AGENT | CTO | Written technical risk acceptance with mitigation plan |
| SEC-REVIEW | CEO (on CISO recommendation) | Written security risk acceptance, time-bound exception, remediation deadline |
| LEGAL-REVIEW | CEO (on CLO recommendation) | Written legal risk acceptance, liability assessment |
| QA-GATE | COO + CTO jointly | Written quality risk acceptance, monitoring plan, rollback trigger defined |
| REL-APPROVE | CEO | Written overall risk acceptance combining all factors |

**Override conditions:**
- All overrides are **time-bound** (max 30 days) with a mandatory remediation deadline
- All overrides are logged permanently and reviewed in the next QBR
- The override decision document must include: risk accepted, business justification, remediation plan, monitoring plan, rollback criteria
- No gate can be overridden more than twice for the same project without a CEO + Board review

---

## 9. INCIDENT SEVERITY ESCALATION MATRIX

| Severity | Definition | Initial Responder | Escalation Chain | Client Notification |
|----------|-----------|-------------------|-----------------|-------------------|
| **SEV-1** | Complete service outage, all clients affected | On-call SRE | SRE → DIR-SRE → VP-INFRA → CTO → CEO (within 30 min) | Immediate (via CSM) |
| **SEV-2** | Major feature unavailable, > 25% of clients affected | On-call SRE | SRE → MGR-SRE → DIR-SRE → VP-INFRA (within 1 hr) | Within 1 hour |
| **SEV-3** | Degraded performance or minor feature broken, < 25% affected | On-call SRE + EM | SRE → MGR-SRE (within 4 hrs) | If impact > 2 hours |
| **SEV-4** | Cosmetic issue, workaround exists, minimal impact | Assigned engineer | EM (next standup) | Not required |

### Incident Escalation Timeline

```
T+0 min    Incident detected / reported
           └── On-call SRE acknowledges, assesses severity

T+5 min    SEV-1/2: Incident channel created, Incident Commander assigned
           └── IC posts first status update

T+15 min   SEV-1: DIR-SRE + VP-INFRA notified
           SEV-2: MGR-SRE notified
           └── IC posts second status update

T+30 min   SEV-1: CTO + CEO notified if unresolved
           └── IC posts status update, client notification sent

T+60 min   SEV-1: All-hands engineering response if unresolved
           SEV-2: DIR-SRE + VP-INFRA notified if unresolved
           └── Status update every 15 min continues

T+4 hrs    SEV-1/2: Executive war room if still unresolved
           └── CTO takes direct command of response

T+24 hrs   SEV-1 unresolved: Board notification
           └── External communication plan activated (PR-MGR + CEO)
```

---

## 10. ESCALATION ANTI-PATTERNS

These behaviors undermine the escalation system and must be avoided:

| Anti-Pattern | Description | Consequence |
|-------------|-------------|-------------|
| **Skip-level escalation** | Going directly to a VP when your manager hasn't been consulted | Escalation returned to correct level; pattern flagged to your manager |
| **Rage escalation** | Escalating out of frustration rather than need | COO counsels the escalator; erodes credibility for future escalations |
| **Weaponized escalation** | Using escalation to pressure or punish another agent | CHRO involvement; treated as a conduct issue |
| **Ghost escalation** | Escalating but then going silent / not following up | DRI responsibility reassigned; flagged in performance review |
| **Escalation hoarding** | Manager who intercepts escalations and doesn't act on them | Auto-escalation catches this; COO process review |
| **Cry wolf** | Repeatedly marking issues as P0/P1 when they are P2/P3 | Priority privileges revoked; P0/P1 requires manager co-sign |
| **Delegation disguised as escalation** | Escalating to avoid doing work you should handle yourself | Escalation returned with guidance; manager coaching triggered |

---

## 11. DE-ESCALATION PROTOCOL

Escalations must be **explicitly closed**. An open escalation consumes leadership attention indefinitely if not resolved.

```yaml
de_escalation:
  escalation_id: "<original-escalation-uuid>"
  from:
    agent_code: "EM-FE"          # Original escalator
  status: "resolved"
  resolution: |
    What was done and what the outcome is.
    Example: "Root cause identified as connection pool exhaustion.
    Fix deployed at 16:45 UTC. Auth service error rate back to
    baseline (0.01%). Connection pool max increased from 50 to 200.
    Follow-up RFC planned for proper connection management."

  follow_up_items:
    - task: "Write RFC for connection pool management"
      owner: "SR-BE-NODE"
      deadline: "2026-02-21"
    - task: "Add connection pool monitoring alert"
      owner: "SR-SRE"
      deadline: "2026-02-17"

  lessons_learned: |
    Brief note on what can prevent this in the future.
    Example: "Need monitoring on connection pool utilization.
    Current alerting only covers error rates, not resource exhaustion."

  timestamp: "2026-02-14T17:00:00Z"
```

**Rules:**
- P0 escalations must be de-escalated with a formal resolution within 24 hours of incident closure
- P1 escalations must be de-escalated within 3 business days
- P2/P3 escalations must be de-escalated within 1 week
- Un-closed escalations older than their de-escalation deadline are flagged to the COO weekly

---

## 12. ESCALATION METRICS & REPORTING

The COO tracks escalation health across the organization:

| Metric | Target | Red Flag |
|--------|--------|----------|
| Mean time to acknowledge (MTTA) | Within SLA per priority | > 2x SLA |
| Mean time to resolve (MTTR) | P0: < 4 hrs, P1: < 1 day, P2: < 3 days | > 2x target |
| Escalation volume per department per sprint | Stable or declining | > 30% increase sprint-over-sprint |
| Skip-level escalation rate | < 5% of all escalations | > 10% |
| Auto-escalation trigger rate | < 10% of all escalations | > 20% (indicates SLA non-compliance) |
| Escalation reopen rate | < 5% | > 10% (indicates premature closure) |
| Governance override rate | < 2 per quarter | > 4 per quarter |
| P0 false positive rate | < 10% | > 20% |

**Quarterly review:** The COO presents escalation metrics at the QBR. Departments with concerning trends receive a process improvement action plan.

---

## 13. ESCALATION QUICK REFERENCE CARD

For any agent who needs to escalate, answer these five questions:

```
┌─────────────────────────────────────────────────────────┐
│                  ESCALATION CHECKLIST                    │
│                                                         │
│  1. WHAT happened?          → State facts clearly       │
│  2. WHAT did you try?       → List actions taken        │
│  3. WHAT do you recommend?  → Propose a path forward    │
│  4. WHAT decision do you    → Be specific about what    │
│     need?                     you can't decide alone    │
│  5. WHEN do you need it by? → Give a real deadline      │
│                                                         │
│  WHO to escalate to:                                    │
│  • Technical issue    → Tech Lead → EM → DIR → VP → CTO│
│  • People/process     → EM → DIR → VP → C-suite        │
│  • Security           → DIR-SEC → CISO → CEO           │
│  • Legal              → VP-LEGAL → CLO → CEO           │
│  • Financial          → VP-FIN → CFO → CEO             │
│  • Client risk        → CSM → VP-CS → CRO → CEO       │
│  • Cross-department   → Find lowest common authority    │
│                         (see Section 7)                 │
│                                                         │
│  REMEMBER: Escalation ≠ failure. Late escalation = risk.│
└─────────────────────────────────────────────────────────┘
```

---

## VERSION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-02-14 | System Architect | Initial escalation rules definition |

---

## RELATED DOCUMENTS

- `00-COMPANY-HIERARCHY-V3.md` — Complete organizational structure (188 agents)
- `00-INTERACTION-PROTOCOLS.md` — How agents communicate (message formats, channels, patterns)
