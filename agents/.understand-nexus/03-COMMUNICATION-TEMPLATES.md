# NEXUS AI — Communication Message Templates v1.0
## Standardized Formats for Inter-Agent Communication

---

## 1. MESSAGE CLASSIFICATION

Every inter-agent message MUST include a message type header. This enables routing, prioritization, and tracking by NEXUS-ORCHESTRATOR (195).

```
MESSAGE TYPES:
━━━━━━━━━━━━━
[TASK-ASSIGN]     — Assigning work to another agent
[TASK-UPDATE]     — Status update on assigned work
[TASK-COMPLETE]   — Task completed, ready for review
[TASK-BLOCKED]    — Work is blocked, need help
[ESCALATION]      — Issue being escalated up the chain
[DECISION-REQ]    — Decision needed from authority
[DECISION-MADE]   — Decision communicated downward
[HANDOFF]         — Transferring ownership of work
[REVIEW-REQ]      — Requesting review/approval
[REVIEW-RESULT]   — Review outcome (approved/rejected)
[INCIDENT]        — Production incident notification
[INFO]            — Informational, no action required
[FEEDBACK]        — Feedback on work or process
[MEETING-REQ]     — Meeting/sync request
[RFC]             — Request for Comments on design/architecture
```

```
PRIORITY LEVELS:
━━━━━━━━━━━━━━━
P0-CRITICAL  — Production down, client impacted, security breach
               Response: Immediate (<15 min)
P1-URGENT    — Blocking issue, approaching deadline, major risk
               Response: <2 hours
P2-HIGH      — Important but not blocking, needs attention today
               Response: <8 hours (same business day)
P3-NORMAL    — Standard work, no urgency
               Response: <24 hours
P3-LOW       — Nice to know, background tasks
               Response: <72 hours
```

---

## 2. CORE MESSAGE TEMPLATES

### 2.1 TASK-ASSIGN — Assigning Work

```markdown
[TASK-ASSIGN] [P{0-4}]
FROM: {sender_code} ({agent_number})
TO: {receiver_code} ({agent_number})
PROJECT: {project_name}
DATE: {YYYY-MM-DD}

TASK: {clear, one-line task description}

CONTEXT:
{Why this task exists. What problem it solves. Relevant background.
Link to PRD, design, or parent task if applicable.}

REQUIREMENTS:
- {Requirement 1}
- {Requirement 2}
- {Requirement 3}

ACCEPTANCE CRITERIA:
- [ ] {Criteria 1 — measurable, testable}
- [ ] {Criteria 2}
- [ ] {Criteria 3}

DEPENDENCIES:
- Depends on: {agent_code} — {what they need to deliver first}
- Blocks: {agent_code} — {what is waiting for this task}

DEADLINE: {YYYY-MM-DD} or {Sprint X}
EFFORT ESTIMATE: {X hours/days/story points}

DELIVERABLES:
- {Deliverable 1 — format specified}
- {Deliverable 2}

RESOURCES:
- {Link to design/spec/doc}
- {Link to related code/repo}
- {Link to Figma/Miro/etc.}

QUESTIONS? Contact: {sender_code} via {channel}
```

**Example:**
```markdown
[TASK-ASSIGN] [P2-HIGH]
FROM: SEM-FE (019)
TO: SR-FE-REACT (032)
PROJECT: Boomerang Voucher Platform
DATE: 2026-02-14

TASK: Build the Student Voucher Redemption Flow (3 screens)

CONTEXT:
Students scan a QR code at participating stores and need to redeem
their voucher. This is the core transaction flow. Design approved
by MGR-UI (076) on Feb 12. Backend API contracts finalized by
STAFF-BE (029) — see API spec link below.

REQUIREMENTS:
- React 18 + TypeScript strict mode
- Mobile-first responsive design
- Offline-capable (queue redemptions if no connection)
- i18n ready (Hebrew + English + Arabic)

ACCEPTANCE CRITERIA:
- [ ] All 3 screens match Figma designs (pixel-perfect)
- [ ] Offline queue works with sync on reconnect
- [ ] Unit tests >80% coverage
- [ ] Accessibility: WCAG 2.1 AA compliant
- [ ] Performance: LCP <2.5s on 3G simulation

DEPENDENCIES:
- Depends on: STAFF-BE (029) — Redemption API endpoint (ready ✅)
- Blocks: QA-ENG (104) — Testing can start once screens are built

DEADLINE: Sprint 4 (2026-02-28)
EFFORT ESTIMATE: 5 story points (~3 days)

DELIVERABLES:
- React components in /src/features/redemption/
- Unit tests in /src/features/redemption/__tests__/
- Storybook stories for each component
- PR linked to ticket VOW-142

RESOURCES:
- Figma: https://figma.com/file/xxx/redemption-flow
- API Spec: /docs/api/redemption-v1.yaml
- Design System: /src/design-system/README.md
```

---

### 2.2 TASK-UPDATE — Status Update

```markdown
[TASK-UPDATE] [P{0-4}]
FROM: {agent_code} ({agent_number})
TO: {assigner_code} ({agent_number})
PROJECT: {project_name}
TASK: {task reference}
DATE: {YYYY-MM-DD}

STATUS: {Not Started | In Progress | In Review | Blocked | Complete}
PROGRESS: {X}% complete

WHAT'S DONE:
- {Completed item 1}
- {Completed item 2}

WHAT'S NEXT:
- {Next step 1}
- {Next step 2}

RISKS/BLOCKERS:
- {Risk or blocker — if none, write "None"}

ON TRACK FOR DEADLINE: {Yes / At Risk / No}
{If At Risk or No: explain why and what's needed}
```

---

### 2.3 TASK-BLOCKED — Blocked Notification

```markdown
[TASK-BLOCKED] [P{1-2}]  ← Blocked tasks are always at least P2
FROM: {agent_code} ({agent_number})
TO: {blocking_agent_code}, CC: {manager_code}
PROJECT: {project_name}
TASK: {task reference}
DATE: {YYYY-MM-DD}

BLOCKED BY: {What is blocking — be specific}

BLOCKING AGENT: {agent_code} ({agent_number}) — {what they need to do}
  OR
BLOCKING ISSUE: {External dependency, technical issue, missing info}

IMPACT:
- This blocks: {what downstream work is affected}
- Deadline at risk: {which deadline, by how much}
- Client impact: {Yes/No — if yes, describe}

WHAT I'VE TRIED:
- {Attempted solution 1}
- {Attempted solution 2}

WHAT I NEED:
- {Specific ask — be actionable}

UNBLOCK DEADLINE: {By when this needs to be resolved to stay on track}
```

---

### 2.4 ESCALATION — Issue Escalation

```markdown
[ESCALATION] [P{0-2}]
FROM: {agent_code} ({agent_number})
TO: {escalation_target} ({agent_number})
CC: {relevant_stakeholders}
PROJECT: {project_name}
DATE: {YYYY-MM-DD}
ESCALATION LEVEL: {L1→L2 / L2→L3 / L3→L4}

ISSUE: {One-line description}

BACKGROUND:
{What happened, when, who's involved, what was tried}

IMPACT:
- Client impact: {None / Low / Medium / High / Critical}
- Timeline impact: {X days/weeks delay}
- Financial impact: {$X or N/A}
- Reputation impact: {None / Low / Medium / High}

WHAT'S BEEN TRIED:
1. {Action 1} — Result: {outcome}
2. {Action 2} — Result: {outcome}
3. {Action 3} — Result: {outcome}

DECISION NEEDED:
{What specific decision or action do you need from the escalation target?}

OPTIONS:
A. {Option A} — Pros: {X} — Cons: {Y} — Risk: {Z}
B. {Option B} — Pros: {X} — Cons: {Y} — Risk: {Z}
C. {Option C} — Pros: {X} — Cons: {Y} — Risk: {Z}

RECOMMENDED: Option {X} because {rationale}

DEADLINE FOR DECISION: {Date/time — explain urgency}
```

---

### 2.5 DECISION-REQ — Decision Request

```markdown
[DECISION-REQ] [P{1-3}]
FROM: {agent_code} ({agent_number})
TO: {decision_maker} ({agent_number})
PROJECT: {project_name}
DATE: {YYYY-MM-DD}

DECISION NEEDED: {One-line question}

CONTEXT:
{Background information needed to make the decision}

OPTIONS:
┌──────────┬────────────────┬────────────────┬──────────────┐
│ Option   │ Pros           │ Cons           │ Risk         │
├──────────┼────────────────┼────────────────┼──────────────┤
│ A: {X}   │ {pros}         │ {cons}         │ {risk level} │
│ B: {Y}   │ {pros}         │ {cons}         │ {risk level} │
│ C: {Z}   │ {pros}         │ {cons}         │ {risk level} │
└──────────┴────────────────┴────────────────┴──────────────┘

DATA SUPPORTING DECISION:
- {Data point 1}
- {Data point 2}

RECOMMENDATION: Option {X}
RATIONALE: {Why this is the best option}

IMPACT OF NO DECISION: {What happens if we don't decide by deadline}
DECISION DEADLINE: {Date}
```

---

### 2.6 DECISION-MADE — Decision Communication

```markdown
[DECISION-MADE] [P{2-3}]
FROM: {decision_maker} ({agent_number})
TO: {affected_agents}
PROJECT: {project_name}
DATE: {YYYY-MM-DD}

DECISION: {Clear statement of what was decided}

CONTEXT: {Brief reminder of the question}
RATIONALE: {Why this decision was made}
ALTERNATIVES CONSIDERED: {What was rejected and why}

ACTION ITEMS:
- {agent_code}: {what they need to do} — by {date}
- {agent_code}: {what they need to do} — by {date}

EFFECTIVE: {Immediately / Starting {date}}

REVIEW DATE: {When this decision will be revisited, if applicable}

DOCUMENTED IN: {Link to ADR / decision log}
```

---

### 2.7 HANDOFF — Work Transfer

```markdown
[HANDOFF] [P{2-3}]
FROM: {outgoing_agent} ({agent_number})
TO: {incoming_agent} ({agent_number})
CC: {managers_of_both}
PROJECT: {project_name}
DATE: {YYYY-MM-DD}

HANDOFF TYPE: {Stage transition / Role change / Resource reallocation}

WHAT'S BEING TRANSFERRED:
- {Responsibility 1}
- {Responsibility 2}

CURRENT STATE:
{Honest assessment of where things stand}

COMPLETED:
- [x] {Done item 1}
- [x] {Done item 2}

IN PROGRESS:
- [ ] {In-progress item 1} — {X}% done — {notes}
- [ ] {In-progress item 2} — {X}% done — {notes}

NOT STARTED:
- [ ] {Pending item 1} — {context}
- [ ] {Pending item 2} — {context}

KNOWN ISSUES:
- {Issue 1} — Status: {Open/Mitigated} — {notes}
- {Issue 2} — Status: {Open/Mitigated} — {notes}

KEY CONTACTS:
- Client: {name/role} — {how to reach them}
- Technical: {agent_code} — {what they know}
- Product: {agent_code} — {requirements expert}

DOCUMENTATION:
- {Link to architecture docs}
- {Link to runbooks}
- {Link to project board}
- {Link to meeting recordings}

TRANSITION PLAN:
- Day 1-2: Shadow/overlap period
- Day 3: {incoming_agent} takes lead, {outgoing_agent} available for questions
- Day 5: Clean handoff complete

HANDOFF ACKNOWLEDGED BY: {incoming_agent} — Date: ________
```

---

### 2.8 REVIEW-REQ — Review/Approval Request

```markdown
[REVIEW-REQ] [P{2-3}]
FROM: {agent_code} ({agent_number})
TO: {reviewer_code} ({agent_number})
PROJECT: {project_name}
DATE: {YYYY-MM-DD}

REVIEW TYPE: {Code Review / Design Review / Architecture Review / 
              Security Review / QA Sign-off / Legal Review / 
              Finance Approval / Release Approval}

ARTIFACT: {Link to PR / Design / RFC / Document}

SUMMARY:
{What you're asking them to review. Key decisions made. Areas of uncertainty.}

SPECIFIC FEEDBACK REQUESTED:
- {Area 1 — what kind of feedback you want}
- {Area 2}

REVIEW CHECKLIST:
- [ ] {Checklist item relevant to review type}
- [ ] {Checklist item}

DEADLINE FOR REVIEW: {Date} — {Explain urgency}
BLOCKING: {What is waiting for this review}
```

---

### 2.9 REVIEW-RESULT — Review Outcome

```markdown
[REVIEW-RESULT] [P{2-3}]
FROM: {reviewer_code} ({agent_number})
TO: {author_code} ({agent_number})
PROJECT: {project_name}
DATE: {YYYY-MM-DD}

ARTIFACT: {Link to reviewed item}
VERDICT: {APPROVED / APPROVED WITH CONDITIONS / CHANGES REQUESTED / REJECTED}

{If APPROVED:}
Good to proceed. {Optional positive feedback.}

{If APPROVED WITH CONDITIONS:}
Approved, but the following MUST be addressed before/after merge:
- {Condition 1}
- {Condition 2}

{If CHANGES REQUESTED:}
REQUIRED CHANGES:
- {Change 1} — Why: {rationale}
- {Change 2} — Why: {rationale}

SUGGESTIONS (optional, not blocking):
- {Suggestion 1}

PLEASE RESUBMIT by: {date}

{If REJECTED:}
REASON FOR REJECTION:
{Clear explanation of why this cannot proceed}

RECOMMENDED NEXT STEPS:
{What the author should do differently}
```

---

### 2.10 INCIDENT — Production Incident

```markdown
[INCIDENT] [P0-CRITICAL]
FROM: {detecting_agent} ({agent_number})
TO: #incident-channel
CC: DIR-SRE (054), MGR-SRE (057), {on-call agents}
PROJECT: {affected project(s)}
DATE: {YYYY-MM-DD HH:MM UTC}

🚨 INCIDENT DECLARED

SEVERITY: {SEV1 / SEV2 / SEV3}
INCIDENT COMMANDER: {agent_code} ({agent_number})

WHAT'S HAPPENING:
{Clear description of the problem}

IMPACT:
- Users affected: {number/percentage}
- Services affected: {list}
- Client impact: {which clients, what they're experiencing}
- Revenue impact: {estimated}

TIMELINE:
- {HH:MM} — {First signal detected}
- {HH:MM} — {Investigation started}
- {HH:MM} — {Current status}

CURRENT HYPOTHESIS: {What we think is happening}

ACTIONS IN PROGRESS:
- {Agent_code} is {doing what}
- {Agent_code} is {doing what}

COMMS:
- Client notified: {Yes/No}
- Status page updated: {Yes/No}
- Next update: {HH:MM}

WAR ROOM: {Link to call/channel}
```

---

### 2.11 RFC — Request for Comments

```markdown
[RFC] [P3-NORMAL]
FROM: {author_code} ({agent_number})
TO: ARB-AGENT (181), {relevant reviewers}
PROJECT: {project_name}
DATE: {YYYY-MM-DD}
RFC-ID: RFC-{YYYY}-{NNN}

TITLE: {Descriptive title}

STATUS: {Draft / Open for Review / Final Comment Period / Accepted / Rejected}
REVIEW DEADLINE: {Date}

SUMMARY:
{1-2 paragraph executive summary}

PROBLEM STATEMENT:
{What problem does this solve? Why now?}

PROPOSED SOLUTION:
{Detailed proposal}

ARCHITECTURE:
{Diagrams, component interactions, data flows}

ALTERNATIVES CONSIDERED:
| Alternative | Pros | Cons | Why Not |
|-------------|------|------|---------|
| {Alt 1}     | {X}  | {Y}  | {Z}    |
| {Alt 2}     | {X}  | {Y}  | {Z}    |

MIGRATION PLAN:
{How to adopt without breaking things}

RISKS:
- {Risk 1}: Probability: {H/M/L} — Mitigation: {X}
- {Risk 2}: Probability: {H/M/L} — Mitigation: {X}

OPEN QUESTIONS:
- {Question 1}
- {Question 2}

COMMENT BELOW or contact {author_code} directly.
```

---

## 3. STATUS REPORTING TEMPLATES

### 3.1 Daily Standup (per agent)

```markdown
[DAILY-UPDATE]
AGENT: {code} ({number})
PROJECT: {name}
DATE: {YYYY-MM-DD}

YESTERDAY: {What was accomplished}
TODAY: {What will be done}
BLOCKERS: {Anything blocking progress — or "None"}
```

### 3.2 Weekly Project Status (by TPM)

```markdown
[WEEKLY-STATUS]
FROM: TPM (176)
PROJECT: {name}
WEEK: {YYYY-Wnn}
DATE: {YYYY-MM-DD}

OVERALL STATUS: 🟢 On Track / 🟡 At Risk / 🔴 Off Track

SPRINT: {Sprint N} — {start} to {end}
VELOCITY: {planned} pts planned / {completed} pts completed

HIGHLIGHTS:
- {Achievement 1}
- {Achievement 2}

RISKS:
| Risk | Impact | Probability | Mitigation | Owner |
|------|--------|-------------|------------|-------|
| {X}  | H/M/L  | H/M/L       | {Action}   | {Code}|

BLOCKERS:
- {Blocker 1} — Owner: {code} — Status: {Open/Resolving}

NEXT WEEK PRIORITIES:
1. {Priority 1}
2. {Priority 2}
3. {Priority 3}

METRICS:
- Burndown: {on track / behind by X pts}
- Bug count: {open: X, critical: Y}
- Test coverage: {X}%
- Deployment count: {X this week}

CLIENT SENTIMENT: 😀 / 😐 / 😟
NOTES: {Any client feedback or concerns}
```

### 3.3 Monthly Executive Report (by COO)

```markdown
[MONTHLY-EXEC-REPORT]
FROM: COO (004)
PERIOD: {Month YYYY}
DATE: {YYYY-MM-DD}

PORTFOLIO HEALTH:
| Project | Type | Phase | Status | Revenue | Margin | Risk |
|---------|------|-------|--------|---------|--------|------|
| {Name}  | {A-X}| {1-13}| 🟢🟡🔴 | ${X}K   | {X}%   | {X}  |

DELIVERY METRICS:
- Projects active: {X}
- Projects delivered this month: {X}
- On-time delivery rate: {X}%
- Client satisfaction (CSAT): {X}/5
- Escalations this month: {X} (resolved: {Y})

FINANCIAL SUMMARY:
- Revenue (month): ${X}
- Gross margin: {X}%
- Utilization rate: {X}%
- Revenue per agent: ${X}

PEOPLE:
- Active agents: {X}/188
- Agent utilization: {X}%
- New agents onboarded: {X}
- Retention: {X}%

KEY DECISIONS MADE:
1. {Decision} — Impact: {X}
2. {Decision} — Impact: {X}

RISKS & CONCERNS:
1. {Risk} — Mitigation: {X}

NEXT MONTH PRIORITIES:
1. {Priority}
2. {Priority}
```

---

## 4. COMMUNICATION CHANNEL RULES

```
CHANNEL ROUTING:
━━━━━━━━━━━━━━━
P0 (Critical)    → Direct message + #incident-war-room + phone call
P1 (Urgent)      → Direct message + project channel
P2 (High)        → Project channel
P3 (Normal)      → Project channel or async doc
P3 (Low)         → Async doc or weekly update

MESSAGE ETIQUETTE:
━━━━━━━━━━━━━━━━━
1. Always include message type header [TASK-ASSIGN], [ESCALATION], etc.
2. Always include priority level [P0-P3]
3. Tag only agents who need to act — don't @everyone
4. One message = one topic (don't bundle unrelated items)
5. Include context — assume the reader wasn't in the meeting
6. Be specific in asks — "I need X by Y" not "can someone help?"
7. Close the loop — update on resolution, not just on problems
8. Prefer async over meetings for P3 items
9. Every escalation includes what was already tried
10. Decisions are always documented in writing (not just verbal)
```

---

## 5. RESPONSE TIME SLA BY ROLE TIER

```
┌─────────────┬────────┬────────┬────────┬────────┐
│ Agent Tier  │ P0     │ P1     │ P2     │ P3     │
├─────────────┼────────┼────────┼────────┼────────┤
│ C-Suite     │ 15 min │ 2 hrs  │ 8 hrs  │ 24 hrs │
│ VP          │ 15 min │ 1 hr   │ 4 hrs  │ 24 hrs │
│ Director    │ 15 min │ 1 hr   │ 4 hrs  │ 24 hrs │
│ Manager     │ 15 min │ 30 min │ 2 hrs  │ 12 hrs │
│ Staff+ IC   │ 15 min │ 30 min │ 2 hrs  │ 12 hrs │
│ Senior IC   │ 30 min │ 1 hr   │ 4 hrs  │ 24 hrs │
│ Mid IC      │ 30 min │ 1 hr   │ 4 hrs  │ 24 hrs │
│ Junior IC   │ N/A    │ 2 hrs  │ 8 hrs  │ 24 hrs │
│ Governance  │ 15 min │ 30 min │ 2 hrs  │ 8 hrs  │
│ Special     │ 15 min │ 30 min │ 2 hrs  │ 12 hrs │
└─────────────┴────────┴────────┴────────┴────────┘

Note: P0 response means acknowledgment, not resolution.
Juniors are never on P0 rotation alone.
```
