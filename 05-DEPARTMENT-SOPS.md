# NEXUS AI — Department Standard Operating Procedures (SOPs) v1.0
## How Each Department Operates Day-to-Day

---

## SOP-01: ENGINEERING DEPARTMENT

### 1.1 Sprint Cycle (2-Week Sprints)

```
DAY -1 (Friday before sprint):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  SPRINT PLANNING
  Facilitator: SCRUM (177)
  Attendees: PM (068), SEM (019/020), All sprint engineers, QA lead
  Duration: 2 hours max
  
  Inputs:
  - Prioritized backlog (from PM)
  - Team capacity (from SEM — accounting for PTO, on-call)
  - Carryover from previous sprint
  - Tech debt allocation (20% of capacity)
  
  Process:
  1. PM presents top priorities with acceptance criteria (30 min)
  2. Team estimates using planning poker (45 min)
  3. Team commits to sprint scope based on velocity (15 min)
  4. Identify dependencies and risks (15 min)
  5. Assign owners for each story (15 min)
  
  Output: Sprint backlog committed, all stories have owners

DAY 1-9 (Monday to following Thursday):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  DAILY STANDUP
  Facilitator: SCRUM (177)
  Duration: 15 min max (hard stop)
  Format: Each person: Yesterday / Today / Blockers
  Rules: No problem-solving in standup — take it offline
  
  DEVELOPMENT FLOW:
  1. Pick story from sprint board → Move to "In Progress"
  2. Create feature branch from develop
  3. Write code + tests (TDD encouraged)
  4. Self-review checklist before PR:
     ☐ Tests passing (unit + integration)
     ☐ Linting clean
     ☐ No console.logs / debug code
     ☐ TypeScript strict — no `any`
     ☐ Accessibility checked
     ☐ PR description explains WHY, not just WHAT
  5. Create PR → Request review from 2 engineers
  6. QA-GATE (184) automated checks run
  7. Code review within 24 hours SLA
  8. Address feedback → Merge to develop
  9. Move story to "In QA"
  10. QA tests → Pass → Move to "Done"
  
  CODE REVIEW STANDARDS:
  - Every PR needs 2 approvals (1 must be senior+)
  - Review focuses: correctness, security, performance, readability
  - Reviewer comments must be constructive and educational
  - "Nit:" prefix for style suggestions (non-blocking)
  - Author has final say on nits; must address all others

DAY 9 (Thursday):
━━━━━━━━━━━━━━━━
  MID-SPRINT CHECK
  Facilitator: SEM (019/020)
  Duration: 30 min
  Purpose: Flag at-risk stories, adjust if needed

DAY 10 (Friday):
━━━━━━━━━━━━━━━━
  SPRINT REVIEW (Demo)
  Facilitator: PM (068)
  Attendees: Team + stakeholders + client (if applicable)
  Duration: 1 hour
  
  Format:
  1. Sprint goal recap (PM — 5 min)
  2. Demo completed features (engineers — 30 min)
  3. Metrics: velocity, burndown, quality (SEM — 10 min)
  4. Stakeholder feedback (15 min)
  
  SPRINT RETROSPECTIVE
  Facilitator: SCRUM (177)
  Template: See Template 5 in Project Templates Pack
  Duration: 1 hour
  Rules: Blameless, actionable outcomes, follow up on previous actions
```

### 1.2 Code Management

```
BRANCHING STRATEGY: GitFlow (modified)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  main         — Production code. Protected. Deploy via CI/CD only.
  develop      — Integration branch. Nightly builds.
  feature/*    — Feature branches from develop. Named: feature/VOW-{ticket#}-{short-desc}
  bugfix/*     — Bug fix branches. Named: bugfix/VOW-{ticket#}-{short-desc}
  hotfix/*     — Emergency production fixes from main. Named: hotfix/VOW-{ticket#}
  release/*    — Release candidates. Named: release/v{X.Y.Z}

COMMIT MESSAGE FORMAT:
  {type}({scope}): {description}
  
  Types: feat, fix, docs, style, refactor, test, chore, perf
  Scope: component or module name
  Description: imperative mood, <72 chars
  
  Example: feat(redemption): add offline queue for voucher redemption
  
  Body (optional): Explain WHY, not WHAT
  Footer: Fixes VOW-142, Breaking changes noted

RELEASE PROCESS:
  1. Create release branch from develop
  2. QA regression on release branch
  3. QA-GATE (184) validates quality metrics
  4. SEC-REVIEW (182) validates security
  5. REL-APPROVE (185) collects sign-offs
  6. Merge release → main (tag with version)
  7. Deploy main → production via CI/CD
  8. Merge main → develop (backport)
```

### 1.3 On-Call Rotation

```
STRUCTURE:
  Primary on-call: Senior IC (rotates weekly)
  Secondary on-call: Staff+ engineer (backup)
  Escalation: DIR (within 30 min if P0)

RESPONSIBILITIES:
  - Monitor alerts during shift
  - Respond to pages within 15 min (P0) / 30 min (P1)
  - Follow runbook for known issues
  - Escalate if can't resolve within 1 hour
  - Write incident summary after every P0/P1

ROTATION RULES:
  - No one on-call more than 1 week per month
  - Compensated with extra PTO day per on-call week
  - Handoff meeting between outgoing/incoming on Monday morning
  - On-call engineer has reduced sprint commitments (30% less)
```

---

## SOP-02: DESIGN DEPARTMENT

### 2.1 Design Process (Double Diamond adapted)

```
PHASE 1: DISCOVER (1-2 weeks)
━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Led by: UXR (085) + SR-UXD (079)
  
  Activities:
  - User research (interviews, surveys, analytics review)
  - Competitive analysis
  - Stakeholder interviews
  - Problem definition workshop
  
  Output: Research synthesis, user personas, problem statement
  Review: Design review with VP-DES (074)

PHASE 2: DEFINE (1 week)
━━━━━━━━━━━━━━━━━━━━━━━
  Led by: SR-UXD (079) + CONTENT-DES (086)
  
  Activities:
  - Information architecture
  - User flow mapping
  - Content strategy
  - Requirements prioritization (with PM)
  
  Output: IA diagram, user flows, content map
  Review: Design review with PM + Engineering lead

PHASE 3: DESIGN (2-3 weeks)
━━━━━━━━━━━━━━━━━━━━━━━━━━
  Led by: SR-UID (078) + SR-UXD (079)
  
  Activities:
  Week 1: Wireframes → Internal review → Iterate
  Week 2: High-fidelity mockups → Design critique → Iterate  
  Week 3: Interactive prototype → Usability testing → Final iteration
  
  Design critique format (Tuesday + Thursday):
  - Presenter shows work (10 min)
  - Silent review (5 min)
  - Structured feedback: "I like / I wish / What if" (20 min)
  - Action items captured (5 min)
  
  Output: Final mockups, interactive prototype, design specs

PHASE 4: DELIVER (1 week)
━━━━━━━━━━━━━━━━━━━━━━━━
  Led by: SR-UID (078) + STAFF-FE (028)
  
  Handoff checklist:
  ☐ All screens annotated with specs (spacing, fonts, colors)
  ☐ Responsive breakpoints defined (mobile, tablet, desktop)
  ☐ Interactive states documented (hover, focus, active, disabled, error)
  ☐ Animations specified (duration, easing, trigger)
  ☐ Edge cases covered (empty states, loading, error, long text)
  ☐ Accessibility annotations (tab order, ARIA, alt text)
  ☐ Design tokens exported (colors, typography, spacing)
  ☐ Component library updated in Figma
  ☐ Developer Q&A session scheduled
  
  Output: Figma file with dev-ready specs, handoff meeting recorded
```

### 2.2 Design System Governance

```
COMPONENT LIFECYCLE:
  1. PROPOSAL: Designer proposes new component (issue template)
  2. REVIEW: STAFF-DES (078) + STAFF-FE (028) evaluate need
  3. DESIGN: Component designed in Figma with all states
  4. DEVELOPMENT: Implemented in code with Storybook
  5. QA: Tested for accessibility, responsiveness, cross-browser
  6. RELEASE: Published to design system package
  7. DOCUMENTATION: Usage guidelines, do's/don'ts
  
VERSIONING: Semantic versioning (major.minor.patch)
  - Major: Breaking changes to component API
  - Minor: New components or non-breaking features
  - Patch: Bug fixes, visual tweaks
  
DEPRECATION: 2-sprint warning before removing any component
```

---

## SOP-03: PRODUCT MANAGEMENT DEPARTMENT

### 3.1 Product Development Lifecycle

```
STAGE 1: IDEATION (Ongoing)
━━━━━━━━━━━━━━━━━━━━━━━━━━
  Input sources: Client feedback, user research, sales feedback,
                 engineering proposals, market research, AI-PM insights
  
  Process:
  - Ideas logged in idea backlog (anyone can submit)
  - PM triages weekly: Tag, score (RICE), categorize
  - Monthly idea review with VP-PROD (064): Top ideas advance

STAGE 2: DISCOVERY (1-2 weeks per feature)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PM validates problem + solution:
  - Problem validation: User interviews, data analysis, competitive research
  - Solution validation: Sketches, prototypes, concept testing
  - Technical feasibility: Engineering consultation
  - Business viability: Revenue impact, cost estimate
  
  Output: 1-page opportunity assessment
  Decision: VP-PROD approves → Proceed to PRD

STAGE 3: SPECIFICATION (1 week)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PM writes PRD (Template 2 from Templates Pack)
  PRD review by: Engineering lead, Design lead, QA lead
  Approved by: GPM (068) or VP-PROD (064) based on scope

STAGE 4: EXECUTION (Sprints)
━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PM participates in sprints:
  - Available for questions every day
  - Attends standups
  - Reviews completed stories within 24 hours
  - Makes scope tradeoff decisions quickly
  
STAGE 5: LAUNCH & MEASURE (Ongoing)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PM owns post-launch:
  - Feature flag rollout plan
  - Success metric tracking (weekly for first month)
  - User feedback collection
  - Iteration backlog based on data
  - Feature sunset criteria defined upfront
```

### 3.2 Prioritization Framework (RICE)

```
RICE SCORE = (Reach × Impact × Confidence) / Effort

Reach:     How many users/clients in a quarter? (number)
Impact:    How much will it improve the metric? (3=massive, 2=high, 1=medium, 0.5=low, 0.25=minimal)
Confidence: How confident are we? (100%=high, 80%=medium, 50%=low)
Effort:    Person-weeks to complete (number)

EXAMPLE:
  Feature: Voucher QR Scanner
  Reach: 5000 students/quarter
  Impact: 3 (massive — core feature)
  Confidence: 80%
  Effort: 4 person-weeks
  RICE = (5000 × 3 × 0.8) / 4 = 3000

PRIORITY BANDS:
  RICE > 2000: Must-have (this quarter)
  RICE 500-2000: Should-have (next quarter)
  RICE 100-500: Could-have (backlog)
  RICE < 100: Won't-have (archive)
```

---

## SOP-04: QUALITY ASSURANCE DEPARTMENT

### 4.1 Testing Strategy Per Feature

```
TEST PYRAMID (Target ratio):
━━━━━━━━━━━━━━━━━━━━━━━━━━
        /  E2E  \         5% of tests
       / (Playwright)\     Slow, expensive, critical paths only
      /──────────────\
     / Integration    \    15% of tests
    / (API + Component)\   Medium speed, key interactions
   /──────────────────\
  /    Unit Tests      \   80% of tests
 / (Vitest/Jest/pytest) \  Fast, isolated, comprehensive
/────────────────────────\

WHEN TO WRITE WHICH:
  Unit:         Every function, component, utility
  Integration:  API endpoints, component interactions, DB queries
  E2E:          Critical user journeys only (login, purchase, core flow)
  Performance:  Before every release (load test)
  Security:     Before every release (SAST/DAST)
  Accessibility: Every sprint (automated) + before release (manual)
```

### 4.2 Quality Gate Criteria

```
PR GATE (Automated):
━━━━━━━━━━━━━━━━━━━
  ☐ All tests pass
  ☐ Coverage >= 80% (new code)
  ☐ No linting errors
  ☐ No TypeScript errors (strict mode)
  ☐ No security vulnerabilities (Snyk/Dependabot)
  ☐ Bundle size within budget
  ☐ 2 reviewer approvals

STAGING GATE:
━━━━━━━━━━━━
  ☐ All PR gates pass
  ☐ Integration tests pass
  ☐ E2E critical path tests pass
  ☐ No P0/P1 bugs open
  ☐ Performance baseline met
  ☐ Accessibility scan clean

PRE-PRODUCTION GATE:
━━━━━━━━━━━━━━━━━━━━
  ☐ All staging gates pass
  ☐ Full regression suite pass
  ☐ Load test completed (target: 2x expected peak)
  ☐ Security scan clean (SAST + DAST)
  ☐ Pen test findings remediated (if applicable)
  ☐ Accessibility audit complete (manual)
  ☐ Cross-browser testing complete
  ☐ Mobile device testing complete
  ☐ Data migration validated (if applicable)
  ☐ Rollback plan documented and tested

PRODUCTION GATE:
━━━━━━━━━━━━━━━━
  ☐ All pre-prod gates pass
  ☐ QA-GATE (184) sign-off
  ☐ SEC-REVIEW (182) sign-off
  ☐ Engineering lead sign-off
  ☐ PM sign-off
  ☐ REL-APPROVE (185) sign-off
  ☐ Monitoring dashboards verified
  ☐ On-call engineer briefed
```

### 4.3 Bug Management

```
BUG SEVERITY:
  SEV1 (Critical): System down, data loss, security breach
    → Fix within 4 hours, hotfix path
  SEV2 (Major): Major feature broken, workaround difficult
    → Fix within 24 hours, current sprint
  SEV3 (Minor): Feature works but degraded, easy workaround
    → Fix within current sprint
  SEV4 (Low): Cosmetic, minor UX issue
    → Prioritize in backlog, fix when convenient

BUG REPORT FORMAT:
  Title: [SEV{N}] {Component} — {Brief description}
  Steps to reproduce: 1. 2. 3.
  Expected behavior: {What should happen}
  Actual behavior: {What actually happens}
  Environment: {Browser, OS, device, build version}
  Evidence: {Screenshot or video}
  Impact: {Users affected, workaround available}
```

---

## SOP-05: INFRASTRUCTURE & DEVOPS DEPARTMENT

### 5.1 Infrastructure as Code (IaC)

```
RULES:
  1. ALL infrastructure defined in Terraform — no manual changes
  2. Terraform modules per service/component
  3. State stored remotely (S3 + DynamoDB lock)
  4. Plan reviewed before apply (PR for infra changes)
  5. Cost estimation included in every infra PR (Infracost)

ENVIRONMENT STRATEGY:
  dev:     Per-developer (ephemeral, created/destroyed as needed)
  staging: Shared, mirrors production (scaled down)
  prod:    Production, managed via CHANGE-MGR (186)

DEPLOYMENT PIPELINE:
  Code push → Build → Unit test → SAST scan → Build artifact →
  Deploy to staging → Integration test → DAST scan →
  Approval gate → Deploy to prod → Smoke test → Monitor
```

### 5.2 Incident Response

```
INCIDENT SEVERITY:
  SEV1: Complete outage or data breach. All hands.
  SEV2: Major feature degraded, >50% users affected.
  SEV3: Minor degradation, <50% users affected, workaround exists.

INCIDENT PROCESS:
  1. DETECT: Monitoring alert or user report
  2. TRIAGE: On-call engineer assesses severity (5 min)
  3. DECLARE: Post [INCIDENT] message (see template 2.10)
  4. MOBILIZE: 
     - SEV1: Incident Commander (DIR-SRE/MGR-SRE) + all relevant engineers
     - SEV2: On-call + 1 additional engineer
     - SEV3: On-call handles alone
  5. INVESTIGATE: Follow runbook if exists, otherwise systematic debugging
  6. MITIGATE: Restore service first, root cause later
  7. COMMUNICATE: Client updates every 30 min (SEV1), 1 hour (SEV2)
  8. RESOLVE: Service restored, monitoring confirmed stable
  9. POSTMORTEM: Within 72 hours (blameless)
     - Timeline of events
     - Root cause analysis (5 Whys)
     - Action items with owners and deadlines
     - Prevention measures

POSTMORTEM TEMPLATE:
  - What happened (timeline)
  - Impact (users, duration, revenue)
  - Root cause (technical + process)
  - What went well in the response
  - What could be improved
  - Action items (with owners + deadlines)
  Filed with: RETRO-AGENT (193)
```

---

## SOP-06: SALES DEPARTMENT

### 6.1 Sales Process

```
STAGE 1: PROSPECTING
  Owner: BDR (121)
  Activities: Research, outreach, initial qualification
  Exit criteria: Meeting scheduled with qualified prospect
  Tools: CRM, LinkedIn, email sequencing
  KPI: 20 meetings/month per BDR

STAGE 2: QUALIFICATION
  Owner: AE (120) / ENT-AE (119)
  Framework: MEDDIC
  M - Metrics: What business metric will this improve?
  E - Economic Buyer: Who signs the check?
  D - Decision Criteria: How will they decide?
  D - Decision Process: What steps to get approved?
  I - Identify Pain: What hurts today?
  C - Champion: Who inside advocates for us?
  Exit criteria: MEDDIC complete, opportunity worth pursuing
  
STAGE 3: DISCOVERY
  Owner: AE + SALES-ENG (122) + DISC-AGENT (187)
  Activities: Technical discovery, business case development
  Exit criteria: Discovery report complete, solution mapped

STAGE 4: PROPOSAL
  Owner: AE + SOL-ARCH (123) + EST-AGENT (188)
  Activities: Solution design, estimation, proposal creation
  Exit criteria: Proposal sent, client reviewing

STAGE 5: NEGOTIATION
  Owner: AE + CONTRACTS (156)
  Activities: Terms negotiation, legal review, pricing finalization
  Exit criteria: Agreement on terms

STAGE 6: CLOSED-WON
  Owner: AE → Handoff to PM + CSM
  Activities: Contract signed, kickoff scheduled
  Exit criteria: CRM updated, handoff meeting completed

PIPELINE MANAGEMENT:
  - CRM updated same day as every client interaction
  - Weekly pipeline review: MGR-SALES (118) + DIR-SALES (117)
  - Monthly forecast: DIR-SALES + VP-SALES (116) + CRO (007)
  - Pipeline coverage target: 3x quota
```

---

## SOP-07: CUSTOMER SUCCESS DEPARTMENT

### 7.1 Client Health Scoring

```
HEALTH SCORE FORMULA (0-100):
━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Product Usage (30%):
    - DAU/MAU ratio
    - Feature adoption breadth
    - Usage trend (growing/stable/declining)
  
  Support Health (20%):
    - Ticket volume trend
    - Resolution satisfaction
    - Escalation frequency
  
  Relationship (20%):
    - NPS score
    - Executive engagement
    - QBR attendance
  
  Financial (15%):
    - Payment on time
    - Contract value trend
    - Expansion discussions
  
  Project Health (15%):
    - Delivery on schedule
    - Scope stability
    - Bug severity trend

HEALTH BANDS:
  90-100: Champion 🟢 — Expand, get referral
  70-89:  Healthy 🟢 — Maintain, upsell
  50-69:  Neutral 🟡 — Proactive engagement needed
  30-49:  At Risk 🟠 — Escalation + save plan
  0-29:   Critical 🔴 — Executive intervention immediately
```

### 7.2 Client Engagement Cadence

```
ENTERPRISE CLIENTS (>$500K):
  Daily:    TAM (139) available for technical questions
  Weekly:   CSM (138) check-in call (30 min)
  Monthly:  Project status review with client stakeholders
  Quarterly: QBR with client executives
             Attendees: SR-CSM (137) + VP-CS (135) + PM + Engineering lead
  Annually:  Strategic planning + renewal discussion

MID-MARKET CLIENTS ($50K-$500K):
  Weekly:   CSM (138) async check-in (email/Slack)
  Bi-weekly: Video call status review
  Quarterly: QBR with client team lead
  Annually:  Renewal discussion

SUPPORT SLA:
  P0 (Critical): 15 min response, 4 hour resolution target
  P1 (Urgent):   1 hour response, 8 hour resolution target
  P2 (High):     4 hour response, 2 business day resolution
  P3 (Normal):   8 hour response, 5 business day resolution
```

---

## SOP-08: SECURITY DEPARTMENT

### 8.1 Security Review Process

```
EVERY PROJECT — MANDATORY:
  ☐ Threat model (at architecture stage)
  ☐ SAST scan (every PR — automated)
  ☐ DAST scan (every staging deploy — automated)
  ☐ Dependency scan (daily — automated)
  ☐ Security review before production (SEC-REVIEW 178)
  ☐ Pen test for projects with PII or financial data

THREAT MODELING (STRIDE):
  S - Spoofing: Can someone pretend to be someone else?
  T - Tampering: Can someone modify data in transit/at rest?
  R - Repudiation: Can someone deny an action?
  I - Information Disclosure: Can someone access unauthorized data?
  D - Denial of Service: Can someone disrupt service?
  E - Elevation of Privilege: Can someone gain unauthorized access?

VULNERABILITY MANAGEMENT:
  Critical: Fix within 24 hours (CVSS ≥ 9.0)
  High:     Fix within 7 days (CVSS 7.0-8.9)
  Medium:   Fix within 30 days (CVSS 4.0-6.9)
  Low:      Fix within 90 days (CVSS < 4.0)
```

---

## SOP-09: PEOPLE / HR DEPARTMENT

### 9.1 Hiring Process

```
STEP 1: REQUISITION (1-2 days)
  Hiring manager submits req → VP approves → RECRUITER (145) opens role

STEP 2: SOURCING (Ongoing)
  RECRUITER sources: LinkedIn, referrals, job boards, conferences
  Target: 10 qualified candidates per role per week

STEP 3: SCREENING (3-5 days per candidate)
  - Phone screen: RECRUITER (30 min)
  - Technical assessment: Take-home or live coding (varies by role)
  - Technical interview: 2 engineers (1 hour)
  - System design: Staff+ engineer (1 hour, senior roles only)
  - Culture fit: Hiring manager + 1 cross-functional (45 min)
  - Executive chat: VP or Director (30 min, senior roles only)

STEP 4: DECISION (1-2 days)
  Debrief meeting: All interviewers discuss, hiring manager decides
  Decision criteria: Technical skills, culture add, growth potential

STEP 5: OFFER (1-3 days)
  COMP-ANALYST (144) prepares offer within approved bands
  Hiring manager delivers verbal offer
  RECRUITER sends formal offer letter

STEP 6: ONBOARDING (First 90 days)
  Week 1: L&D-MGR (147) runs onboarding program
  Week 1: Buddy assigned (peer from same team)
  Day 30: Check-in with HRBP (146)
  Day 60: Check-in with manager
  Day 90: Performance check + confirmation
```

---

## SOP-10: FINANCE DEPARTMENT

### 10.1 Monthly Close Process

```
CLOSE CALENDAR (Target: 5 business days):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Day 1: Cut-off. No new entries for prior month.
         AP closes, AR closes.
  Day 2: Revenue recognition. CONTROLLER (153) applies ASC 606.
         Project PMs confirm milestone completion.
  Day 3: Expense accruals. Payroll accrual. Prepaid amortization.
  Day 4: Reconciliations. Bank, intercompany, balance sheet.
  Day 5: Financial statements generated. VP-FIN (150) review.
         CFO (005) sign-off.

PROJECT BILLING:
  - Time & Materials: Bill monthly based on time tracked
  - Fixed Price: Bill at milestones defined in contract
  - Retainer: Bill monthly on contract anniversary date
  - All invoices approved by PM + FPA-MGR (151) before sending
```

---

## SOP-CROSS: CROSS-DEPARTMENT COORDINATION

### Cross-Department Meeting Cadence

```
DAILY:
  - Engineering standup (per team)
  - Design standup (design team)

WEEKLY:
  - Product-Engineering sync (PM + Engineering leads)
  - Design-Engineering handoff review
  - Sales pipeline review
  - CS health score review
  - Leadership sync (all VPs + C-Suite)

BI-WEEKLY:
  - Sprint review + retro
  - Architecture office hours (open to all)
  - Security bulletin review

MONTHLY:
  - All-hands (CEO presents)
  - Financial review (CFO + VPs)
  - Client portfolio review (COO + VP-CS + VP-SALES)
  - Tech radar update (CTO + DIST-ENG)

QUARTERLY:
  - OKR review + planning (all departments)
  - Board preparation (CEO + CFO)
  - Client QBRs
  - Hackathon (INNOVATION-AGENT 185)
  - Compensation review cycle (CHRO)

ANNUALLY:
  - Strategic planning (C-Suite offsite)
  - Budget planning (CFO + all VPs)
  - Performance review cycle (all departments)
  - Technology vision update (CTO + DIST-ENG)
```

### Escalation Timing Rules

```
IF BLOCKED:
  0-4 hours:  Try to resolve with direct collaborator
  4-8 hours:  Escalate to your manager
  8-24 hours: Manager escalates to Director
  24-48 hours: Director escalates to VP
  48+ hours:  VP escalates to C-Suite

IF INCIDENT:
  P0: Immediate escalation to Director + VP
  P1: Escalate to Manager within 30 min
  P2: Escalate to Manager within 4 hours
  P3: Handle within team, inform Manager at next standup

NEVER ACCEPTABLE:
  - Staying blocked for >24 hours without escalating
  - Escalating without first trying to resolve
  - Escalating without documenting what was tried
  - Skipping escalation levels (except P0)
```
