# NEXUS AI — Project Templates Pack v1.0
## Standardized Templates for Every Project Phase

---

## TEMPLATE 1: DISCOVERY QUESTIONNAIRE
**Used by**: DISC-AGENT (187), SALES-ENG (122), SOL-ARCH (123)
**Stage**: Stage 2 — Discovery

```markdown
# DISCOVERY QUESTIONNAIRE: {Client Name}
## Conducted by: {agent_code} | Date: {YYYY-MM-DD}

---

### SECTION A: BUSINESS CONTEXT

A1. Company Overview
- Company name: _______________
- Industry: _______________
- Size (employees): _______________
- Annual revenue (if known): _______________
- Stage: [Startup / Growth / Enterprise / Public]
- Geographic presence: _______________

A2. Business Goals
- What is the primary business objective for this project? _______________
- What business KPI will this project improve? _______________
- How do you measure success today? _______________
- What does success look like in 6 months? 12 months? _______________
- What's the cost of NOT doing this project? _______________

A3. Stakeholders
| Name | Role | Influence | Goal | Concern |
|------|------|-----------|------|---------|
| ___  | ___  | [Champion/Decision Maker/Influencer/User] | ___ | ___ |
| ___  | ___  | [Champion/Decision Maker/Influencer/User] | ___ | ___ |
| ___  | ___  | [Champion/Decision Maker/Influencer/User] | ___ | ___ |

A4. Decision Process
- Who makes the final decision? _______________
- What's the approval process? _______________
- Are there procurement/legal requirements? _______________
- Decision timeline: _______________

---

### SECTION B: USER CONTEXT

B1. Target Users
| User Type | Count | Technical Level | Primary Need | Frequency of Use |
|-----------|-------|----------------|--------------|-----------------|
| ___       | ___   | [Low/Med/High] | ___          | [Daily/Weekly/Monthly] |
| ___       | ___   | [Low/Med/High] | ___          | [Daily/Weekly/Monthly] |

B2. User Workflows
- What do users do today (current process)? _______________
- What are the main pain points? _______________
- What workarounds exist? _______________
- What tools do they currently use? _______________

B3. User Access
- How will users access the system? [Web / Mobile / Both / API]
- Authentication method: [SSO / Email-Password / Social / Enterprise]
- Offline requirements: [Yes / No]
- Accessibility requirements: [WCAG AA / WCAG AAA / None specified]

---

### SECTION C: TECHNICAL CONTEXT

C1. Existing Technical Landscape
- Current tech stack: _______________
- Hosting: [AWS / GCP / Azure / On-Prem / Other]
- Key databases: _______________
- Key integrations: _______________
- API documentation available: [Yes / No / Partial]

C2. Integration Requirements
| System | Direction | Protocol | Data | Frequency |
|--------|-----------|----------|------|-----------|
| ___    | [In/Out/Both] | [REST/GraphQL/SOAP/File/Other] | ___ | [Real-time/Batch/On-demand] |
| ___    | [In/Out/Both] | [REST/GraphQL/SOAP/File/Other] | ___ | [Real-time/Batch/On-demand] |

C3. Data & Privacy
- Data sensitivity level: [Public / Internal / Confidential / Restricted]
- PII involved: [Yes / No] — Types: _______________
- Regulatory requirements: [GDPR / CCPA / HIPAA / SOC2 / PCI / None]
- Data residency requirements: _______________
- Data volume (estimated): _______________

C4. Non-Functional Requirements
- Availability target: [99% / 99.9% / 99.99%]
- Peak concurrent users: _______________
- Response time target: _______________
- Data retention: _______________
- Disaster recovery: [RPO: ___ / RTO: ___]

C5. Security Requirements
- Authentication: _______________
- Authorization model: [RBAC / ABAC / Custom]
- Encryption requirements: _______________
- Compliance certifications needed: _______________
- Penetration testing required: [Yes / No]

---

### SECTION D: PROJECT PARAMETERS

D1. Timeline & Budget
- Desired launch date: _______________
- Hard deadline: [Yes / No] — If yes, why: _______________
- Budget range: [$___K - $___K]
- Budget flexibility: [Fixed / Flexible ±10% / Flexible ±25%]
- Phased approach acceptable: [Yes / No]

D2. Team & Process
- Client team available for collaboration: [Yes / No] — Roles: ___
- Decision turnaround expected: [Same day / 1-2 days / 1 week]
- Preferred methodology: [Agile-Scrum / Kanban / Flexible]
- Communication tools: [Slack / Teams / Email / Other]
- Meeting cadence preference: _______________

D3. Success Criteria
| Metric | Current Value | Target Value | Measurement Method |
|--------|--------------|--------------|-------------------|
| ___    | ___          | ___          | ___               |
| ___    | ___          | ___          | ___               |

D4. Risks (Client-Identified)
- What concerns you most about this project? _______________
- What has gone wrong on similar projects before? _______________
- Are there political/organizational risks? _______________

---

### SECTION E: DISCOVERY ASSESSMENT (Internal)

E1. Strategic Fit Score: ___/10
E2. Technical Feasibility: [High / Medium / Low]
E3. Estimated Complexity: [Low / Medium / High / Very High]
E4. Project Type Classification: [A / B / C / D / E / F / G / H / I / X]
E5. Key Risks Identified:
  - Risk 1: _______________ — Impact: [H/M/L] — Mitigation: ___
  - Risk 2: _______________ — Impact: [H/M/L] — Mitigation: ___
E6. Recommended Next Steps: _______________
E7. Red Flags: _______________

DISCOVERY COMPLETE: [Yes / No]
HANDOFF TO: EST-AGENT (188) for estimation
DISCOVERY LEAD: {agent_code} — Date: {YYYY-MM-DD}
```

---

## TEMPLATE 2: PRODUCT REQUIREMENTS DOCUMENT (PRD)
**Used by**: SR-PM (068), PM (068), STAFF-PM (073), AI-PM (071)
**Stage**: Stage 4-5 — Kickoff & Architecture

```markdown
# PRD: {Feature/Project Name}
## PRD-{YYYY}-{NNN}

| Field | Value |
|-------|-------|
| Author | {agent_code} ({agent_number}) |
| Status | [Draft / In Review / Approved / In Development / Shipped] |
| Created | {YYYY-MM-DD} |
| Last Updated | {YYYY-MM-DD} |
| Approved By | {agent_code} — {date} |
| Project | {Project name} |
| Sprint Target | Sprint {N} |

---

### 1. EXECUTIVE SUMMARY
{2-3 sentences: What are we building, for whom, and why does it matter?}

### 2. PROBLEM STATEMENT
**User Problem**: {Describe the problem from the user's perspective}
**Business Problem**: {Describe the business impact of this problem}
**Evidence**: {Data, research, or feedback supporting this problem exists}

### 3. GOALS & SUCCESS METRICS

| Goal | Metric | Baseline | Target | Measurement |
|------|--------|----------|--------|-------------|
| {Goal 1} | {Metric} | {Current} | {Target} | {How to measure} |
| {Goal 2} | {Metric} | {Current} | {Target} | {How to measure} |

**Anti-Goals** (What this feature is NOT trying to solve):
- {Anti-goal 1}
- {Anti-goal 2}

### 4. USER STORIES

```
AS A {user type}
I WANT TO {action}
SO THAT {benefit}

ACCEPTANCE CRITERIA:
- [ ] {Criteria 1}
- [ ] {Criteria 2}
- [ ] {Criteria 3}
```

{Repeat for each user story. Group by epic if multiple.}

### 5. REQUIREMENTS

#### 5.1 Functional Requirements
| ID | Requirement | Priority | Notes |
|----|-------------|----------|-------|
| FR-001 | {Requirement description} | [Must/Should/Could] | {Notes} |
| FR-002 | {Requirement description} | [Must/Should/Could] | {Notes} |

#### 5.2 Non-Functional Requirements
| ID | Requirement | Target |
|----|-------------|--------|
| NFR-001 | Performance: Page load | <2s on 3G |
| NFR-002 | Availability | 99.9% uptime |
| NFR-003 | Accessibility | WCAG 2.1 AA |
| NFR-004 | Security | {Specific requirement} |
| NFR-005 | Scalability | {Concurrent users target} |

### 6. USER FLOW
{Describe the step-by-step user flow. Include diagram reference.}

```
[Entry Point] → [Step 1] → [Step 2] → [Decision Point]
                                            ↓          ↓
                                       [Path A]    [Path B]
                                            ↓          ↓
                                       [Success]  [Error State]
```

### 7. DESIGN
- Wireframes: {Link to Figma}
- Mockups: {Link to Figma}
- Prototype: {Link to clickable prototype}
- Design system components used: {List}

### 8. TECHNICAL CONSIDERATIONS
{Notes for engineering — NOT a technical spec, but context they need}
- API dependencies: {List}
- Data model impact: {New tables/fields needed}
- Third-party integrations: {List}
- Performance considerations: {Large datasets, real-time needs, etc.}
- AI/ML considerations: {If applicable — model requirements, eval criteria}

### 9. EDGE CASES & ERROR STATES
| Scenario | Expected Behavior |
|----------|------------------|
| {Edge case 1} | {How the system should handle it} |
| {Edge case 2} | {How the system should handle it} |
| {Error state 1} | {Error message and recovery path} |

### 10. RELEASE PLAN
- Phase 1 (MVP): {What's in scope} — Target: Sprint {N}
- Phase 2: {What comes next} — Target: Sprint {N+X}
- Feature flags: [Yes / No] — Flag name: {X}
- Rollout: [Big bang / Percentage rollout / Beta group first]

### 11. RISKS & DEPENDENCIES

| Risk/Dependency | Impact | Probability | Mitigation | Owner |
|----------------|--------|-------------|------------|-------|
| {Item 1} | H/M/L | H/M/L | {Mitigation} | {Code} |
| {Item 2} | H/M/L | H/M/L | {Mitigation} | {Code} |

### 12. OPEN QUESTIONS
- [ ] {Question 1} — Owner: {code} — Deadline: {date}
- [ ] {Question 2} — Owner: {code} — Deadline: {date}

### 13. APPENDIX
- Research findings: {Link}
- Competitive analysis: {Link}
- Technical spec: {Link — written by engineering after PRD approval}
- Meeting notes: {Link}
```

---

## TEMPLATE 3: ARCHITECTURE RFC (Request for Comments)
**Used by**: PRINC-ENG (026), SR-STAFF (027), STAFF-FE/BE, ARB-AGENT (181)
**Stage**: Stage 5 — Architecture

```markdown
# RFC-{YYYY}-{NNN}: {Title}

| Field | Value |
|-------|-------|
| Author | {agent_code} ({agent_number}) |
| Status | [Draft / Open for Review / Final Comment Period / Accepted / Rejected / Superseded] |
| Created | {YYYY-MM-DD} |
| Review Deadline | {YYYY-MM-DD} |
| ARB Review Date | {YYYY-MM-DD} |
| Deciders | {List of agents who approve/reject} |
| Consulted | {List of agents whose input was sought} |
| Informed | {List of agents who need to know the outcome} |

---

## 1. SUMMARY
{One paragraph: What this RFC proposes and why}

## 2. MOTIVATION
{Why is this change necessary? What problem does it solve?
Include data, incident history, or user feedback if available.}

## 3. CURRENT STATE
{How things work today. Include architecture diagrams if helpful.
Be honest about the problems with the current approach.}

## 4. PROPOSED DESIGN

### 4.1 Overview
{High-level description of the proposed solution}

### 4.2 Architecture
{Detailed architecture with diagrams}

```
┌──────────┐     ┌──────────┐     ┌──────────┐
│ Client   │────→│ API GW   │────→│ Service  │
│          │     │          │     │          │
└──────────┘     └──────────┘     └──────────┘
                                       │
                                       ▼
                                  ┌──────────┐
                                  │ Database │
                                  └──────────┘
```

### 4.3 Data Model
{New or modified data models. Schema diagrams.}

### 4.4 API Design
{New or modified APIs. Request/response examples.}

### 4.5 Security Considerations
{Authentication, authorization, encryption, data handling.
Reviewed by: DIR-SEC (108) — Date: ___}

### 4.6 Observability
{How will we monitor this? Metrics, logs, traces, alerts.}

### 4.7 Performance
{Expected performance characteristics. Benchmarks if available.
Load testing plan.}

## 5. ALTERNATIVES CONSIDERED

### Alternative A: {Name}
{Description, pros, cons, why rejected}

### Alternative B: {Name}
{Description, pros, cons, why rejected}

## 6. MIGRATION PLAN
{How to get from current state to proposed state without breaking things}

### 6.1 Phases
- Phase 1: {What} — Duration: {X weeks} — Risk: {H/M/L}
- Phase 2: {What} — Duration: {X weeks} — Risk: {H/M/L}

### 6.2 Rollback Plan
{How to revert if things go wrong at each phase}

### 6.3 Feature Flags
{What feature flags are needed for safe rollout}

## 7. RISKS

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| {Risk 1} | H/M/L | H/M/L | {Mitigation} |
| {Risk 2} | H/M/L | H/M/L | {Mitigation} |

## 8. COST & RESOURCES

| Item | Cost | One-Time/Recurring |
|------|------|--------------------|
| {Infrastructure} | ${X}/month | Recurring |
| {Engineering effort} | {X} person-weeks | One-time |
| {Migration effort} | {X} person-weeks | One-time |

## 9. TIMELINE

| Milestone | Date | Owner |
|-----------|------|-------|
| RFC approved | {Date} | ARB-AGENT |
| Phase 1 complete | {Date} | {Code} |
| Phase 2 complete | {Date} | {Code} |
| Full rollout | {Date} | {Code} |

## 10. OPEN QUESTIONS
- [ ] {Question 1} — Needs input from: {code}
- [ ] {Question 2} — Needs input from: {code}

## 11. REFERENCES
- {Related RFC, ADR, or external resource}
- {Research paper, blog post, or documentation}

---

## REVIEW COMMENTS
{Reviewers add their comments below with date and agent code}

### {agent_code} — {YYYY-MM-DD}
{Comment}

### {agent_code} — {YYYY-MM-DD}
{Comment}

---

## ARB DECISION

**VERDICT**: [Approved / Approved with Conditions / Rejected / Needs Revision]
**DATE**: {YYYY-MM-DD}
**CONDITIONS**: {If applicable}
**ADR**: ADR-{YYYY}-{NNN} — {Link}
```

---

## TEMPLATE 4: HANDOFF CHECKLIST
**Used by**: HANDOFF-AGENT (190), TPM (176), SR-CSM (137)
**Stage**: Stage 12 — Handoff & Transition

```markdown
# PROJECT HANDOFF CHECKLIST: {Project Name}
## From: Delivery Team → Operations & Customer Success

| Field | Value |
|-------|-------|
| Project | {Name} |
| Client | {Client name} |
| Delivery Lead | {agent_code} |
| CS Lead | {agent_code} |
| Handoff Date | {YYYY-MM-DD} |
| Warranty End | {YYYY-MM-DD} |

---

### SECTION 1: DOCUMENTATION COMPLETENESS

| # | Document | Location | Status | Owner |
|---|----------|----------|--------|-------|
| 1.1 | Architecture documentation | {Link} | ☐ Complete | {Code} |
| 1.2 | API documentation (OpenAPI) | {Link} | ☐ Complete | {Code} |
| 1.3 | Database schema documentation | {Link} | ☐ Complete | {Code} |
| 1.4 | Environment configuration guide | {Link} | ☐ Complete | {Code} |
| 1.5 | Deployment runbook | {Link} | ☐ Complete | {Code} |
| 1.6 | Operational runbooks | {Link} | ☐ Complete | {Code} |
| 1.7 | Troubleshooting guide | {Link} | ☐ Complete | {Code} |
| 1.8 | User documentation | {Link} | ☐ Complete | {Code} |
| 1.9 | Admin documentation | {Link} | ☐ Complete | {Code} |
| 1.10 | Known issues register | {Link} | ☐ Complete | {Code} |

### SECTION 2: INFRASTRUCTURE & OPERATIONS

| # | Item | Status | Notes |
|---|------|--------|-------|
| 2.1 | Production environment stable (48h+ no incidents) | ☐ | |
| 2.2 | Monitoring dashboards configured | ☐ | Link: ___ |
| 2.3 | Alerting rules configured | ☐ | |
| 2.4 | On-call rotation set up | ☐ | |
| 2.5 | Backup & restore tested | ☐ | Last test: ___ |
| 2.6 | Disaster recovery plan documented & tested | ☐ | |
| 2.7 | SSL certificates — expiry tracked | ☐ | Expiry: ___ |
| 2.8 | Domain DNS — ownership confirmed | ☐ | |
| 2.9 | Secrets rotation schedule documented | ☐ | |
| 2.10 | Cost monitoring in place | ☐ | Monthly est: $___ |

### SECTION 3: SECURITY & COMPLIANCE

| # | Item | Status | Notes |
|---|------|--------|-------|
| 3.1 | Final security scan clean | ☐ | Date: ___ |
| 3.2 | Pen test completed | ☐ | Report: ___ |
| 3.3 | All critical/high vulns remediated | ☐ | |
| 3.4 | Access control review completed | ☐ | |
| 3.5 | Data processing documentation current | ☐ | |
| 3.6 | Privacy impact assessment filed | ☐ | |
| 3.7 | Compliance requirements verified | ☐ | |

### SECTION 4: CLIENT & TEAM READINESS

| # | Item | Status | Notes |
|---|------|--------|-------|
| 4.1 | Client UAT sign-off received | ☐ | Date: ___ |
| 4.2 | Client training completed | ☐ | Sessions: ___ |
| 4.3 | Client admin training completed | ☐ | |
| 4.4 | Training recordings available | ☐ | Link: ___ |
| 4.5 | CS team briefed on project | ☐ | |
| 4.6 | Support team trained | ☐ | |
| 4.7 | TAM assigned and briefed | ☐ | TAM: ___ |
| 4.8 | Support SLA defined and communicated | ☐ | |
| 4.9 | Escalation path documented | ☐ | |
| 4.10 | Client satisfaction survey sent | ☐ | CSAT: ___/5 |

### SECTION 5: KNOWLEDGE TRANSFER

| # | Session | Attendees | Date | Recording |
|---|---------|-----------|------|-----------|
| 5.1 | Architecture overview | {list} | {date} | {link} |
| 5.2 | Deployment & operations | {list} | {date} | {link} |
| 5.3 | Common issues & debugging | {list} | {date} | {link} |
| 5.4 | Client context & relationships | {list} | {date} | {link} |

### SECTION 6: SLA DEFINITION

| Metric | Target | Measurement |
|--------|--------|-------------|
| Uptime | {X}% | {How measured} |
| Response time (p95) | <{X}ms | {APM tool} |
| Support response (P1) | <{X}h | {Ticketing system} |
| Support response (P2) | <{X}h | {Ticketing system} |
| Bug fix (Critical) | <{X}h | {Ticketing system} |
| Bug fix (Major) | <{X} days | {Ticketing system} |

### SECTION 7: WARRANTY TERMS

| Field | Value |
|-------|-------|
| Warranty period | {X weeks} from handoff date |
| Scope | Bug fixes for defects in delivered scope |
| Out of scope | New features, changes in requirements, third-party issues |
| Engineering contact | {agent_code} during warranty |
| Warranty escalation | {agent_code} → {manager_code} |

---

### SIGN-OFF

| Role | Agent | Signature | Date |
|------|-------|-----------|------|
| Delivery Lead | {code} | ☐ Approved | {date} |
| Engineering Lead | {code} | ☐ Approved | {date} |
| QA Lead | {code} | ☐ Approved | {date} |
| CS Lead | {code} | ☐ Approved | {date} |
| Operations Lead | {code} | ☐ Approved | {date} |
| Client Representative | {name} | ☐ Approved | {date} |
| HANDOFF-AGENT | (183) | ☐ HANDOFF COMPLETE | {date} |
```

---

## TEMPLATE 5: SPRINT RETROSPECTIVE
**Used by**: SCRUM (177), RETRO-AGENT (193)
**Stage**: End of each sprint + project milestones

```markdown
# SPRINT RETROSPECTIVE: Sprint {N}
## Project: {Name} | Date: {YYYY-MM-DD}
## Facilitator: {agent_code}

### SPRINT METRICS
- Planned: {X} pts | Completed: {X} pts | Carryover: {X} pts
- Bugs found: {X} | Bugs fixed: {X}
- Deployment count: {X} | Rollbacks: {X}

### WHAT WENT WELL 🟢
1. {Item — with specific example}
2. {Item — with specific example}
3. {Item — with specific example}

### WHAT DIDN'T GO WELL 🔴
1. {Item — with specific example and impact}
2. {Item — with specific example and impact}
3. {Item — with specific example and impact}

### WHAT WE LEARNED 📚
1. {Learning}
2. {Learning}

### ACTION ITEMS
| # | Action | Owner | Deadline | Status |
|---|--------|-------|----------|--------|
| 1 | {Specific action} | {code} | {date} | ☐ Open |
| 2 | {Specific action} | {code} | {date} | ☐ Open |
| 3 | {Specific action} | {code} | {date} | ☐ Open |

### PREVIOUS RETRO ACTION ITEMS — FOLLOW UP
| # | Action from Sprint {N-1} | Owner | Status |
|---|--------------------------|-------|--------|
| 1 | {Action} | {code} | [Done / In Progress / Not Started] |
| 2 | {Action} | {code} | [Done / In Progress / Not Started] |

### TEAM HEALTH CHECK
| Dimension | Score (1-5) | Trend |
|-----------|-------------|-------|
| Delivery speed | ___/5 | ↑ ↓ → |
| Code quality | ___/5 | ↑ ↓ → |
| Team collaboration | ___/5 | ↑ ↓ → |
| Work-life balance | ___/5 | ↑ ↓ → |
| Learning & growth | ___/5 | ↑ ↓ → |
| Fun | ___/5 | ↑ ↓ → |

DOCUMENTED BY: RETRO-AGENT (193) — Stored in: Lessons Learned DB
```

---

## TEMPLATE 6: ARCHITECTURE DECISION RECORD (ADR)
**Used by**: ARB-AGENT (181), PRINC-ENG (026), DIST-ENG (025)

```markdown
# ADR-{YYYY}-{NNN}: {Title}

| Field | Value |
|-------|-------|
| Status | [Proposed / Accepted / Deprecated / Superseded] |
| Date | {YYYY-MM-DD} |
| Deciders | {agent_code list} |
| Related RFC | RFC-{YYYY}-{NNN} |

## Context
{What is the issue that we're seeing that motivates this decision?}

## Decision
{What is the change that we're actually doing?}

## Consequences

### Positive
- {Positive consequence 1}
- {Positive consequence 2}

### Negative
- {Negative consequence 1 — and how we'll mitigate it}
- {Negative consequence 2 — and how we'll mitigate it}

### Neutral
- {Neutral consequence}

## Compliance
{How teams should comply with this decision. What changes are required.}
```
