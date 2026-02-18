# NEXUS AI Corporate Website — Sprint Planning & Coordination Framework

**Document ID:** SPR-PLAN-2026-001
**Created:** February 15, 2026
**Revised:** February 15, 2026 — Updated for GitHub Pages hosting (was Vercel/Cloudflare)
**Author:** TPM (Agent 176 — Technical Program Manager)
**Reviewed By:** SR-TPM (175), DIR-PMO (174), SCRUM (177)
**Project:** NEXUS AI Corporate Website
**Repository:** `TheKingHippopotamus/195_shades_of_agents-`
**Hosting:** GitHub Pages (static deployment via GitHub Actions)
**Timeline:** 12 weeks (February 17 — May 10, 2026)
**Sprint Model:** 5 development sprints (2 weeks each) + 2 weeks QA/Launch

---

## TABLE OF CONTENTS

1. [Sprint Cadence & Ceremonies](#1-sprint-cadence--ceremonies)
2. [Sprint Calendar Overview](#2-sprint-calendar-overview)
3. [Sprint Goals & Deliverables](#3-sprint-goals--deliverables)
4. [Cross-Team Dependencies](#4-cross-team-dependencies)
5. [Governance Checkpoints](#5-governance-checkpoints)
6. [Communication Plan](#6-communication-plan)
7. [Risk Management Per Sprint](#7-risk-management-per-sprint)
8. [Resource Allocation](#8-resource-allocation)
9. [Definition of Done](#9-definition-of-done)
10. [Escalation & Decision Framework](#10-escalation--decision-framework)

---

## 1. SPRINT CADENCE & CEREMONIES

### 1.1 Sprint Duration

All sprints are **2 weeks (10 business days)** following the Engineering SOP cadence defined in `05-DEPARTMENT-SOPS.md`. Each sprint begins on a Monday and ends on the following Friday.

### 1.2 Sprint Ceremonies

| Ceremony | When | Duration | Facilitator | Attendees |
|----------|------|----------|-------------|-----------|
| **Sprint Planning** | Day 0 (Friday before sprint) | 2 hours | SCRUM (177) | PM (068), Engineering leads (019/020), all sprint engineers, QA lead (101), Design lead (076/077) |
| **Daily Standup** | Days 1-9, 9:30 AM | 15 min (hard stop) | SCRUM (177) | Active sprint team members |
| **Design-Engineering Sync** | Days 2, 6 (Tue/Mon) | 30 min | TPM (176) | Design leads (076/077), Frontend leads (019/021), PM (068) |
| **Mid-Sprint Health Check** | Day 5 (Thursday) | 30 min | SEM-FE (019) / SEM-BE (020) | Engineering managers, SCRUM (177), PM (068) |
| **Cross-Department Sync** | Day 5 (Thursday) | 45 min | TPM (176) | Department representatives (1 per active dept) |
| **Sprint Review (Demo)** | Day 10 (Friday) | 1 hour | PM (068) | Sprint team + stakeholders + C-Suite observers |
| **Sprint Retrospective** | Day 10 (Friday, after Review) | 1 hour | SCRUM (177) | Sprint team, facilitated by RETRO-AGENT (193) |
| **Backlog Refinement** | Day 7 (Monday, Week 2) | 1 hour | PM (068) | Engineering leads, SCRUM (177), Design leads |

### 1.3 Ceremony Details

#### Sprint Planning (2 hours)

```
AGENDA:
  1. Previous sprint recap & carryover items (PM — 10 min)
  2. Sprint goal presentation with priorities (PM — 20 min)
  3. Design handoff for upcoming stories (Design leads — 15 min)
  4. Team estimation via planning poker (Team — 45 min)
  5. Capacity check & sprint commitment (SEM — 15 min)
  6. Dependency identification & risk flags (TPM — 10 min)
  7. Task assignment & ownership (SCRUM — 5 min)

INPUTS:
  - Prioritized backlog from PM (068)
  - Design specs/Figma links from Design team
  - Team capacity (accounting for PTO, on-call, governance duties)
  - Carryover stories from previous sprint
  - Tech debt allocation: 20% of sprint capacity

OUTPUT:
  - Committed sprint backlog
  - All stories have owners
  - Dependencies documented
  - Sprint goal confirmed
```

#### Daily Standup (15 min)

```
FORMAT: Each team member answers 3 questions:
  1. What did I complete since yesterday?
  2. What am I working on today?
  3. Am I blocked on anything?

RULES:
  - 15 minutes hard stop
  - No problem-solving during standup — take it offline
  - Blockers escalated to SCRUM (177) immediately after standup
  - Remote-friendly: async standup post in #website-dev-standup by 10 AM
    if unable to attend synchronously
```

#### Sprint Review / Demo (1 hour)

```
AGENDA:
  1. Sprint goal recap (PM — 5 min)
  2. Demo completed features — live on staging (Engineers — 30 min)
  3. Metrics: velocity, burndown, quality indicators (SEM — 10 min)
  4. Stakeholder feedback & discussion (15 min)

ATTENDEES:
  - Sprint team (required)
  - Product: VP-PROD (064), DIR-PROD (065), SR-PM (067)
  - Design: VP-DES (074), DIR-DES (075)
  - Engineering leadership: SVP-ENG (012), VP-ENG (013)
  - C-Suite observers: CTO (002), CPO (003), CMO (006) (optional)
  - Governance: ARB-AGENT (181) at designated checkpoints
```

#### Sprint Retrospective (1 hour)

```
FACILITATED BY: SCRUM (177) with RETRO-AGENT (193) capturing patterns

FORMAT: Start / Stop / Continue
  1. What should we START doing? (15 min)
  2. What should we STOP doing? (15 min)
  3. What should we CONTINUE doing? (15 min)
  4. Action items with owners and due dates (15 min)

RULE: Blameless culture. Focus on process, not people.
OUTPUT: Retro summary document + 3-5 actionable improvements for next sprint
```

### 1.4 Inter-Department Sync Meetings

| Meeting | Frequency | Facilitator | Departments | Purpose |
|---------|-----------|-------------|-------------|---------|
| **Design-to-Dev Handoff** | 2x per sprint (Tue of each week) | TPM (176) | Design (05), Engineering (02) | Ensure design specs are dev-ready, resolve ambiguities |
| **Content-to-CMS Sync** | Weekly (Wednesday) | PM (068) | Marketing (10), Documentation (20), Engineering (02) | Content readiness for CMS integration |
| **QA-Dev Feedback Loop** | 2x per sprint (Wed of each week) | MGR-QA (101) | QA (07), Engineering (02) | Bug triage, test coverage gaps, quality trends |
| **Security Checkpoint** | Bi-weekly (Sprint end) | DIR-SEC (108) | Security (08), Engineering (02), Platform (03) | Security posture review, vulnerability scan results |
| **Stakeholder Steering Committee** | Bi-weekly (Sprint Review day) | SR-TPM (175) | Executive Leadership (01), Product (04), Program Mgmt (17) | Project health, scope decisions, risk escalations |
| **Infrastructure Readiness** | Weekly (Thursday) | MGR-DEVOPS (056) | Platform (03), Engineering (02) | CI/CD pipeline, deployment environments, performance |

---

## 2. SPRINT CALENDAR OVERVIEW

### 12-Week Master Timeline

```
WEEK 01-02:  Sprint 1 — Foundation & Component Library     [Feb 17 — Feb 28]
WEEK 03-04:  Sprint 2 — Core Pages & Agent Profiles        [Mar 02 — Mar 13]
WEEK 05-06:  Sprint 3 — Interactive Features & Viz          [Mar 16 — Mar 27]
WEEK 07-08:  Sprint 4 — CMS, Content & Integrations        [Mar 30 — Apr 10]
WEEK 09-10:  Sprint 5 — Performance, Polish & A11Y          [Apr 13 — Apr 24]
WEEK 11:     QA Hardening, UAT & Security Audit             [Apr 27 — May 01]
WEEK 12:     Pre-Production, Deployment & Launch             [May 04 — May 08]
```

### Detailed Calendar

| Week | Dates | Phase | Key Milestones |
|------|-------|-------|----------------|
| W01 | Feb 17-21 | Sprint 1a | Repo setup, Astro project scaffolding, design tokens, Tailwind config, Sanity schema draft |
| W02 | Feb 22-28 | Sprint 1b | Component library operational, layout system, dark mode, CI/CD pipeline, design system live in Storybook |
| W03 | Mar 02-06 | Sprint 2a | Home page, About section, navigation, footer, responsive layout, first 20 agent profiles in CMS |
| W04 | Mar 07-13 | Sprint 2b | Our Team page (195 profiles rendered), Department pages (20), How We Work page, search/filter functional |
| W05 | Mar 16-20 | Sprint 3a | Org chart visualization prototype, Services pages, Industry pages, Framer Motion animations |
| W06 | Mar 21-27 | Sprint 3b | Interactive org chart polished, network visualization, lifecycle timeline, agent explorer |
| W07 | Mar 30-Apr 03 | Sprint 4a | Sanity CMS fully operational, blog system, case study templates, contact forms, CRM integration |
| W08 | Apr 04-10 | Sprint 4b | All pages content-complete, newsletter, analytics, legal pages, cookie consent, SEO meta tags |
| W09 | Apr 13-17 | Sprint 5a | Lighthouse optimization, bundle analysis, image optimization, lazy loading, code splitting |
| W10 | Apr 18-24 | Sprint 5b | Accessibility audit fixes, cross-browser testing, final animations, edge cases, documentation |
| W11 | Apr 27-May 01 | QA/UAT | Full regression, penetration test, performance benchmarks, UAT sign-off, bug fixes |
| W12 | May 04-08 | Launch | Pre-prod checks, production deploy, DNS cutover, monitoring active, hypercare begins |

---

## 3. SPRINT GOALS & DELIVERABLES

### Sprint 1: Foundation (Feb 17 — Feb 28)

**Goal:** "Foundation established, component library operational"

| # | Story | Owner | Department | Priority | Points |
|---|-------|-------|-----------|----------|--------|
| S1-01 | Initialize Astro project with React islands architecture | STAFF-FE (028) | Engineering | P0 | 5 |
| S1-02 | Configure Tailwind CSS with design tokens (colors, typography, spacing) | SR-FE-REACT (032) | Engineering | P0 | 3 |
| S1-03 | Implement dark/light mode system with system preference detection | SR-FE-REACT (032) | Engineering | P0 | 5 |
| S1-04 | Build core component library: Button, Card, Badge, Avatar, Input, Modal | FE-ENG (042) | Engineering | P0 | 8 |
| S1-05 | Build layout components: Header, Footer, Navigation, Sidebar, PageLayout | FE-ENG (042) / JR-FE (047) | Engineering | P0 | 8 |
| S1-06 | Set up Sanity CMS project with initial schema (agents, departments, pages) | SR-FS (037) | Engineering | P0 | 8 |
| S1-07 | Configure GitHub Actions CI/CD pipeline (build, lint, test, deploy to GitHub Pages) | SR-DEVOPS (060) | Platform | P0 | 8 |
| S1-08 | Set up Storybook for component documentation | JR-FE (047) | Engineering | P1 | 3 |
| S1-09 | Create design system documentation (tokens, usage guidelines) | STAFF-DES (078) | Design | P0 | 5 |
| S1-10 | Build responsive grid/layout system (320px-1920px breakpoints) | SR-FE-REACT (032) | Engineering | P0 | 5 |
| S1-11 | Agent data extraction script (parse 195 .md files into JSON/CMS) | SR-BE-PY (035) | Engineering | P0 | 8 |
| S1-12 | SEO foundation: meta tag system, structured data templates, sitemap config | SR-FS (037) | Engineering | P1 | 5 |
| S1-13 | Set up testing framework (Vitest + Playwright) | SR-QA-AUTO (102) | QA | P1 | 3 |
| S1-14 | Brand identity finalization (logo, colors, fonts, imagery direction) | VP-DES (074) / DIR-DES (075) | Design | P0 | 5 |

**Sprint 1 Capacity:** ~79 story points
**Sprint 1 Exit Criteria:**
- Astro project builds and deploys to GitHub Pages via GitHub Actions
- PR preview deployments operational (GitHub Actions artifact previews or branch deploys)
- Component library renders in Storybook with 10+ components
- Sanity CMS accessible with agent schema defined
- Design system documented and approved by VP-DES
- GitHub Actions CI/CD pipeline runs on every PR (lint, build, test)
- GitHub Pages deployment configuration verified (custom domain, HTTPS, base path)
- Dark/light mode functional
- ARB-AGENT (181) architecture review scheduled for Sprint 1 Review

**Governance:** ARB-AGENT (181) reviews architecture decisions at Sprint 1 Review

---

### Sprint 2: Core Pages (Mar 02 — Mar 13)

**Goal:** "Core pages live, 195 agent profiles rendered"

| # | Story | Owner | Department | Priority | Points |
|---|-------|-------|-----------|----------|--------|
| S2-01 | Home page: hero section, value proposition, featured agents, CTAs | SR-FE-REACT (032) | Engineering | P0 | 8 |
| S2-02 | Home page: animated statistics, social proof section, testimonials | FE-ENG (042) | Engineering | P1 | 5 |
| S2-03 | About section: Our Story, Mission & Values, Leadership Team | FE-ENG (042) | Engineering | P0 | 8 |
| S2-04 | Global navigation with mega-menu dropdowns (responsive + mobile) | SR-FE-REACT (032) | Engineering | P0 | 8 |
| S2-05 | Footer component with full sitemap, legal links, newsletter signup | JR-FE (047) | Engineering | P1 | 3 |
| S2-06 | Our Team page: 195 agent profile grid with search/filter/sort | STAFF-FE (028) | Engineering | P0 | 13 |
| S2-07 | Individual agent profile page (dynamic route from CMS) | SR-FS (037) | Engineering | P0 | 8 |
| S2-08 | Department pages (20) with agent roster and reporting structure | SR-FS (037) | Engineering | P0 | 8 |
| S2-09 | How We Work page: 13-stage lifecycle overview | FE-ENG (042) | Engineering | P1 | 5 |
| S2-10 | Import all 195 agent profiles into Sanity CMS (bulk import) | SR-BE-PY (035) | Engineering | P0 | 5 |
| S2-11 | Avatar generation for 195 agents (batch run + optimization) | MOTION-DES (087) | Design | P0 | 8 |
| S2-12 | Image optimization pipeline (Sharp/Astro Image, WebP/AVIF, responsive) | SR-DEVOPS (060) | Platform | P1 | 5 |
| S2-13 | Legal pages: Terms of Service, Privacy Policy, Cookie Policy | BE-ENG (043) | Engineering | P1 | 5 |
| S2-14 | Write agent profile page tests (unit + visual regression) | SR-QA-AUTO (102) | QA | P1 | 3 |

**Sprint 2 Capacity:** ~84 story points
**Sprint 2 Exit Criteria:**
- Home page fully functional with hero, CTAs, and content
- All 195 agent profiles viewable on Our Team page
- Individual agent profile pages render correctly from CMS data
- All 20 department pages accessible with correct agent rosters
- Navigation works across all breakpoints
- All pages pass Lighthouse >80 (optimization comes later)
- Legal pages live with approved content from Legal team

---

### Sprint 3: Interactive Features (Mar 16 — Mar 27)

**Goal:** "Interactive features functional (org chart, network visualization)"

| # | Story | Owner | Department | Priority | Points |
|---|-------|-------|-----------|----------|--------|
| S3-01 | Interactive org chart: D3.js/React Flow visualization of 195-agent hierarchy | STAFF-FE (028) | Engineering | P0 | 13 |
| S3-02 | Org chart: click-to-explore, zoom/pan, department highlighting | STAFF-FE (028) | Engineering | P0 | 8 |
| S3-03 | Agent network visualization (inter-department connections) | SR-FE-REACT (032) | Engineering | P1 | 8 |
| S3-04 | Project lifecycle timeline: animated 13-stage walkthrough | FE-ENG (042) | Engineering | P1 | 8 |
| S3-05 | Services pages (6): Custom Dev, AI/ML, Platform, Design, Data, Security | SR-FS (037) | Engineering | P0 | 8 |
| S3-06 | Industry pages (5): FinTech, HealthTech, E-commerce, SaaS, EdTech | BE-ENG (043) | Engineering | P1 | 5 |
| S3-07 | Framer Motion micro-interactions: page transitions, hover effects, scroll reveals | MOTION-DES (087) + FE-ENG (042) | Design + Eng | P1 | 8 |
| S3-08 | Technology stack showcase page with architecture diagrams | SR-FE-REACT (032) | Engineering | P1 | 5 |
| S3-09 | Agent Explorer: tier-based filtering, department grouping, search | STAFF-FE (028) | Engineering | P0 | 5 |
| S3-10 | Site search implementation (Pagefind/Algolia) for agents, pages, content | SR-BE-NODE (034) | Engineering | P1 | 5 |
| S3-11 | Responsive testing: all interactive features across breakpoints | SR-QA-MAN (103) | QA | P1 | 5 |
| S3-12 | Performance baseline: measure all interactive components, identify bottlenecks | PERF-TEST (106) | QA | P1 | 3 |

**Sprint 3 Capacity:** ~81 story points
**Sprint 3 Exit Criteria:**
- Org chart renders full 195-agent hierarchy with zoom/pan/click navigation
- Services pages and industry pages live
- Framer Motion animations smooth (60fps) across devices
- Site search returns results for agent names, departments, roles
- Performance baseline documented; no page >3s LCP

---

### Sprint 4: Content Management & Integrations (Mar 30 — Apr 10)

**Goal:** "Content management operational, all pages complete"

| # | Story | Owner | Department | Priority | Points |
|---|-------|-------|-----------|----------|--------|
| S4-01 | Blog system: listing page, individual post page, categories, tags | SR-FS (037) | Engineering | P0 | 8 |
| S4-02 | Blog CMS schema: rich text, images, code blocks, author linking | SR-FS (037) | Engineering | P0 | 5 |
| S4-03 | Case study template & CMS schema (metrics, testimonials, images) | BE-ENG (043) | Engineering | P1 | 5 |
| S4-04 | Contact page: general inquiry, demo request, proposal request forms (static-compatible) | FE-ENG (042) | Engineering | P0 | 5 |
| S4-05 | Form service integration: Formspree or HubSpot embedded forms for lead capture (no server-side — GitHub Pages is static) | SR-BE-NODE (034) | Engineering | P0 | 5 |
| S4-05b | Sanity CMS webhook → GitHub Actions repository_dispatch for automated rebuilds on content publish | SR-DEVOPS (060) | Platform | P0 | 5 |
| S4-06 | Newsletter signup integration (email marketing platform) | BE-ENG (043) | Engineering | P1 | 3 |
| S4-07 | Analytics integration: GA4 + Plausible setup, event tracking | MOPs (131) + FE-ENG (042) | Marketing + Eng | P1 | 5 |
| S4-08 | Cookie consent implementation (GDPR/CCPA compliant) | SR-BE-NODE (034) | Engineering | P0 | 5 |
| S4-09 | Careers page: open positions, culture section, benefits, agent testimonials | FE-ENG (042) | Engineering | P1 | 5 |
| S4-10 | Resources section: developer community, open source, media kit | JR-FE (047) | Engineering | P2 | 5 |
| S4-11 | SEO implementation: all meta tags, structured data, OG/Twitter cards | SR-FS (037) | Engineering | P0 | 5 |
| S4-12 | Calendar booking integration (Calendly) for demo scheduling | BE-ENG (043) | Engineering | P1 | 3 |
| S4-13 | Write 3 launch blog posts (technical, company intro, methodology) | CONTENT-MKT (129) + SR-TW (178) | Marketing + Docs | P1 | 5 |
| S4-14 | Create 2-3 case study content pieces | PMM (127) | Marketing | P1 | 5 |
| S4-15 | Content audit: all pages reviewed for accuracy, tone, completeness | CONTENT-DES (086) | Design | P1 | 3 |

**Sprint 4 Capacity:** ~82 story points
**Sprint 4 Exit Criteria:**
- Blog system live with 3 launch articles
- All forms functional via external form service (Formspree/HubSpot embed) and submitting to CRM
- Sanity CMS webhook triggers GitHub Actions rebuild on content publish
- Cookie consent working, compliant with GDPR/CCPA
- Analytics tracking verified across all pages
- All 50+ pages content-complete
- SEO meta tags present on every page
- SEC-REVIEW (182) security audit scheduled

**Governance:** SEC-REVIEW (182) conducts security audit at Sprint 4 Review

---

### Sprint 5: Performance, Polish & Accessibility (Apr 13 — Apr 24)

**Goal:** "Production-ready (performance optimized, accessibility verified)"

| # | Story | Owner | Department | Priority | Points |
|---|-------|-------|-----------|----------|--------|
| S5-01 | Lighthouse optimization: target >95 across all 4 categories | STAFF-FE (028) | Engineering | P0 | 8 |
| S5-02 | Bundle analysis & code splitting: target <150KB initial JS | SR-FE-REACT (032) | Engineering | P0 | 5 |
| S5-03 | Image optimization pass: all images in WebP/AVIF, responsive srcsets | SR-DEVOPS (060) | Platform | P0 | 5 |
| S5-04 | Lazy loading: below-fold images, interactive components, CMS content | FE-ENG (042) | Engineering | P0 | 3 |
| S5-05 | WCAG 2.1 AA accessibility audit & remediation | A11Y-TEST (107) + FE-ENG (042) | QA + Eng | P0 | 8 |
| S5-06 | Cross-browser testing: Chrome, Firefox, Safari, Edge (desktop + mobile) | SR-QA-MAN (103) | QA | P0 | 5 |
| S5-07 | prefers-reduced-motion support for all Framer Motion animations | FE-ENG (042) | Engineering | P0 | 3 |
| S5-08 | CSP headers, HSTS, security headers configuration | SR-SEC-ENG (109) | Security | P0 | 3 |
| S5-09 | Error pages (404, 500) with brand styling and helpful navigation | JR-FE (047) | Engineering | P1 | 2 |
| S5-10 | Robots.txt, XML sitemap generation, canonical URLs verification | SR-FS (037) | Engineering | P0 | 3 |
| S5-11 | Load testing: simulate 1000 concurrent users, verify CDN behavior | PERF-TEST (106) | QA | P0 | 5 |
| S5-12 | Final design review: pixel-perfect audit across all pages | SR-UID (080) + SR-UXD (081) | Design | P0 | 5 |
| S5-13 | End-to-end Playwright test suite: critical user journeys | SR-QA-AUTO (102) | QA | P0 | 8 |
| S5-14 | Documentation: technical README, deployment guide, CMS user guide | SR-TW (178) | Documentation | P1 | 5 |
| S5-15 | Social sharing validation: OG images, Twitter cards on all key pages | FE-ENG (042) | Engineering | P1 | 2 |

**Sprint 5 Capacity:** ~70 story points
**Sprint 5 Exit Criteria:**
- Lighthouse scores >95 on all pages (Performance, Accessibility, Best Practices, SEO)
- WCAG 2.1 AA compliance verified by A11Y-TEST
- All browsers/devices pass visual regression
- Load test passes (1000 concurrent users, <2.5s LCP)
- Security headers implemented and verified
- E2E test suite green for all critical paths
- QA-GATE (184) quality gate enforced

**Governance:** QA-GATE (184) enforces final quality gate at Sprint 5 Review

---

### Week 11: QA Hardening & UAT (Apr 27 — May 01)

**Activities:**
- Full regression testing by QA team (DIR-QA 100, MGR-QA 101, full QA staff)
- Penetration testing by PENTEST (112)
- Final security review by SEC-REVIEW (182)
- UAT with stakeholder group (CEO, CTO, CPO, CMO, CRO)
- Bug fix sprints (critical/high only)
- Content freeze (no new content changes after Wednesday)
- Final SEO audit by GROWTH-MKT (128)
- Final accessibility audit by A11Y-TEST (107)

**Exit Criteria:**
- Zero P0/P1 bugs open
- P2 bugs documented and scheduled for post-launch
- UAT sign-off from stakeholder committee
- Penetration test report clean (no critical/high findings)
- SEC-REVIEW (182) sign-off
- QA-GATE (184) final pass

### Week 12: Pre-Production & Launch (May 04 — May 08)

**Activities:**

| Day | Activity | Owner |
|-----|----------|-------|
| Monday | Pre-production readiness review, rollback plan finalized | SR-TPM (175), DIR-SRE (054) |
| Tuesday | REL-APPROVE (185) release approval process | REL-APPROVE (185) |
| Tuesday | CHANGE-MGR (186) change advisory board approval | CHANGE-MGR (186) |
| Wednesday | Production deployment to GitHub Pages (TheKingHippopotamus/195_shades_of_agents-), DNS cutover, CDN configuration | SR-DEVOPS (060), MGR-DEVOPS (056) |
| Wednesday | Monitoring & alerting verification | SR-SRE (062), SRE-ENG (063) |
| Thursday | Marketing launch: social media, press release, newsletter | CMO (006), PR-MGR (133), SOCIAL-MGR (132) |
| Friday | Hypercare Day 1: intensive monitoring, rapid response | DIR-SRE (054), SUPPORT-T2 (141) |

---

## 4. CROSS-TEAM DEPENDENCIES

### 4.1 Dependency Matrix

```
         S1          S2           S3          S4           S5
         Foundation  Core Pages   Interactive Content/CMS  Polish
         ─────────── ──────────── ─────────── ──────────── ──────────
Design   Brand ID    Avatars      Motion spec Content rev  Pixel audit
  →Eng   tokens,     page mockups animation   form UX      a11y fixes
         components  navigation   interaction content      final QA

Content  SEO kwds    Legal pages  Service     Blog posts   Content
  →CMS   brand copy  agent data   industry    case studies freeze
                     dept copy    page copy   newsletter

QA       Test setup  Visual reg   Perf base   Form test    Full reg
  →Dev   framework   agent tests  load test   CRM verify   E2E suite

Sec      CSP plan    —            —           Cookie impl  Headers
  →Deploy headers     —            —           privacy      pentest

Platform CI/CD       Image opt    CDN config  Analytics    Load test
  →Eng   pipeline    preview env  caching     monitoring   prod env
```

### 4.2 Critical Path Dependencies

| # | Dependency | From | To | Sprint | Risk if Delayed |
|---|-----------|------|-----|--------|----------------|
| D1 | **Brand identity (colors, fonts, logo)** | Design (VP-DES 074) | Engineering (Sprint 1 components) | S1, Day 1 | Blocks all UI development; cascading 2-week delay |
| D2 | **Agent data extraction script** | Engineering (SR-BE-PY 035) | CMS import (Sprint 2) | S1 → S2 | Blocks 195 profile pages; delays Sprint 2 goal |
| D3 | **Sanity CMS schema** | Engineering (SR-FS 037) | Content team (all content entry) | S1 → S2 | Blocks all CMS content; delays Sprint 2-4 |
| D4 | **Design mockups for core pages** | Design (SR-PROD-DES 079, SR-UID 080) | Frontend development | S1 → S2 | Engineers blocked on page implementation |
| D5 | **Avatar generation (195 images)** | Design (MOTION-DES 087) + Generator | Our Team page rendering | S2 | Missing avatars degrade visual impact |
| D6 | **Legal page content** | Legal (PRIVACY 160, CONTRACTS 158) | Legal page implementation | S2 | Launch blocker if not ready by Sprint 4 |
| D7 | **CRM system selection & access** | IT (ENT-APPS 167) + Sales (REVOPS 125) | Form integration | S3 → S4 | Blocks lead capture — critical business feature |
| D8 | **Blog & case study content** | Marketing (CONTENT-MKT 129, PMM 127) | Blog/case study pages | S4 | Pages live but empty at launch |
| D9 | **Security headers & CSP policy** | Security (SR-SEC-ENG 109) | Deployment configuration | S5 | Security audit failure; launch delay |
| D10 | **GitHub Pages production setup** (custom domain, CNAME, HTTPS) | Platform (SR-DEVOPS 060) | Production deployment | S5 → W12 | Cannot deploy; launch delay |
| D11 | **External form service account** (Formspree or HubSpot) | IT (ENT-APPS 167) + Engineering (SR-BE-NODE 034) | Form integration | S3 → S4 | Contact/demo forms non-functional at launch |

### 4.3 Design-to-Engineering Handoff Protocol

```
HANDOFF TIMELINE:
  Design completes mockups: Sprint N-1 (or first week of Sprint N)
  Engineer receives handoff: Sprint N Planning meeting
  Handoff review meeting: Day 2 of Sprint N (Tuesday)

HANDOFF PACKAGE (per page/feature):
  1. Figma link with all states (default, hover, active, error, loading, empty)
  2. Responsive variants (mobile, tablet, desktop, wide)
  3. Dark mode variants
  4. Interaction specifications (animations, transitions, micro-interactions)
  5. Component-level redlines (spacing, sizing)
  6. Written acceptance criteria in Jira story
  7. Accessibility notes (focus order, ARIA labels, alt text)

HANDOFF OWNERS:
  - UI: SR-UID (080), UI-DES (083), MGR-UI (076)
  - UX: SR-UXD (081), SR-PROD-DES (079), MGR-UX (077)
  - Motion: MOTION-DES (087)
  - Content: CONTENT-DES (086)
```

### 4.4 Content-to-CMS Integration Flow

```
CONTENT PIPELINE:
  1. Content written by: CONTENT-MKT (129), SR-TW (178), PMM (127)
  2. Content reviewed by: CONTENT-DES (086) for tone/style
  3. Content approved by: PM (068) for accuracy, VP-MKT (126) for brand
  4. Content entered into Sanity CMS by: TW (179) / KB-MGR (180)
  5. CMS preview reviewed by: Original author + PM
  6. Published by: PM (068) or authorized publisher

CONTENT DEADLINES (per sprint):
  - Sprint 2: Agent profiles, department descriptions, About section
  - Sprint 3: Services pages, industry pages, How We Work
  - Sprint 4: Blog posts, case studies, careers, legal, remaining pages
  - Sprint 5: CONTENT FREEZE (Wed of Week 10) — only bug fixes to content
```

---

## 5. GOVERNANCE CHECKPOINTS

### 5.1 Governance Gate Schedule

| Gate | Agent | Trigger | Sprint | Duration | Outcome |
|------|-------|---------|--------|----------|---------|
| **Architecture Review** | ARB-AGENT (181) | End of Sprint 1 | S1 Review (Feb 28) | 1-2 days | Approve/request changes to technical architecture |
| **Mid-Project Security Review** | SEC-REVIEW (182) | End of Sprint 4 | S4 Review (Apr 10) | 2-3 days | Security audit of implemented features, integrations |
| **Legal Review** | LEGAL-REVIEW (183) | Week 11 | Apr 28-29 | 1-2 days | Legal compliance check (ToS, Privacy, cookie consent) |
| **Quality Gate (Final)** | QA-GATE (184) | End of Sprint 5 | S5 Review (Apr 24) | 1-2 days | All quality metrics met, E2E tests green |
| **Release Approval** | REL-APPROVE (185) | Pre-deployment | Week 12 (May 05) | 1 day | Final go/no-go decision for production launch |
| **Change Management** | CHANGE-MGR (186) | Deployment day | Week 12 (May 05) | 4 hours | Change advisory approval, rollback plan verified |

### 5.2 Architecture Review (ARB-AGENT — Sprint 1 Exit)

**Scope:**
- Astro + React islands architecture decisions
- Sanity CMS schema design
- Component library structure
- GitHub Actions build pipeline and GitHub Pages deployment strategy
- Performance architecture (SSG vs SSR decisions)
- SEO architecture (structured data, URL structure)

**Inputs:**
- Architecture Decision Records (ADRs) from STAFF-FE (028) and PRINC-ENG (026)
- Tech stack rationale (from Discovery Report)
- Component library documentation
- Sanity CMS schema documentation

**Process:**
1. STAFF-FE (028) presents architecture to ARB-AGENT (181)
2. ARB-AGENT reviews against NEXUS standards (scalability, maintainability, security)
3. VP-ARCH (014) provides feasibility assessment
4. Decision: Approve / Approve with conditions / Request revision

**SLA:** Decision within 2 business days of submission

### 5.3 Security Review (SEC-REVIEW — Sprint 4 Exit)

**Scope:**
- Form handling and input validation
- CRM integration security (API keys, data flow)
- Cookie consent implementation
- CSP headers and security headers
- Third-party script audit (analytics, marketing tools)
- PII handling in forms and CMS
- Authentication for CMS access

**Inputs:**
- Security architecture document from DIR-SEC (108)
- Automated security scan results (OWASP ZAP, Snyk)
- Dependency audit (npm audit)
- Cookie/tracking audit

**Process:**
1. DIR-SEC (108) initiates security review checklist
2. APPSEC (110) performs automated scanning
3. SEC-REVIEW (182) evaluates against security policy
4. Findings classified: Critical / High / Medium / Low
5. Critical/High must be resolved before Sprint 5 exit
6. Medium/Low documented, scheduled for post-launch

**SLA:** Review complete within 3 business days

### 5.4 Quality Gate (QA-GATE — Sprint 5 Exit)

**Quality Criteria (all must pass):**

| Metric | Threshold | Measured By |
|--------|-----------|-------------|
| Lighthouse Performance | >95 | PERF-TEST (106) |
| Lighthouse Accessibility | >95 | A11Y-TEST (107) |
| Lighthouse Best Practices | >95 | SR-QA-AUTO (102) |
| Lighthouse SEO | >95 | SR-QA-AUTO (102) |
| E2E Test Pass Rate | 100% | SR-QA-AUTO (102) |
| Unit Test Coverage | >80% | Engineering |
| Visual Regression | 0 unreviewed diffs | SR-QA-MAN (103) |
| Open P0/P1 Bugs | 0 | MGR-QA (101) |
| Cross-Browser Pass | All supported browsers green | SR-QA-MAN (103) |
| Load Test (1000 users) | <2.5s LCP, 0 errors | PERF-TEST (106) |
| WCAG 2.1 AA | Full compliance | A11Y-TEST (107) |

**Process:**
1. QA-GATE (184) receives quality metrics report
2. All thresholds checked against criteria
3. Pass: Proceed to UAT / Fail: Back to engineering for remediation
4. Failed gate produces: specific defect list, priority, assigned owner, due date

### 5.5 Release Approval (REL-APPROVE — Pre-Launch)

**Approval Requirements:**
- QA-GATE (184) pass certificate
- SEC-REVIEW (182) sign-off
- UAT sign-off from stakeholder committee
- LEGAL-REVIEW (183) compliance verification
- DIR-SRE (054) production readiness confirmation
- Rollback plan documented and tested
- Monitoring and alerting configured and verified
- Launch communications prepared (PR-MGR 133, SOCIAL-MGR 132)

**Process:**
1. SR-TPM (175) compiles release readiness package
2. REL-APPROVE (185) reviews against checklist
3. C-Suite notified (CEO, CTO, CPO, CMO)
4. Decision: Go / No-Go / Go with conditions
5. If Go: CHANGE-MGR (186) executes change advisory process

---

## 6. COMMUNICATION PLAN

### 6.1 Channel Structure

| Channel | Purpose | Members | Frequency |
|---------|---------|---------|-----------|
| **#website-announcements** | Project-wide announcements, milestone updates | All 195 agents | As needed |
| **#website-dev-standup** | Daily async standup posts | Engineering team | Daily |
| **#website-dev** | Engineering discussion, code questions, PR reviews | Engineering (02), Platform (03) | Active |
| **#website-design** | Design discussions, Figma links, review requests | Design (05) + Engineering leads | Active |
| **#website-content** | Content creation, review, CMS questions | Marketing (10), Documentation (20), Design (05) | Active |
| **#website-qa** | Bug reports, test results, quality discussions | QA (07), Engineering leads | Active |
| **#website-security** | Security findings, compliance discussions | Security (08), Platform (03) | As needed |
| **#website-product** | Product decisions, scope changes, priority shifts | Product (04), Engineering leads, Design leads | Active |
| **#website-leadership** | Steering committee discussions, escalations | C-Suite, VPs, Directors | Weekly |
| **#website-launch** | Launch coordination, go/no-go discussions | All department leads | Week 11-12 |

### 6.2 Reporting Cadence

| Report | Frequency | Author | Audience | Content |
|--------|-----------|--------|----------|---------|
| **Daily Standup Summary** | Daily | SCRUM (177) | #website-dev | Blockers, progress, key decisions |
| **Sprint Burndown** | Daily (auto-generated) | SCRUM (177) | Sprint team | Story point burndown chart |
| **Weekly Status Report** | Weekly (Friday) | TPM (176) | All department leads, C-Suite | Progress vs plan, risks, decisions needed |
| **Sprint Review Deck** | Bi-weekly (sprint end) | PM (068) | All stakeholders | Demo summary, velocity, quality metrics |
| **Risk Register Update** | Weekly | TPM (176) | SR-TPM (175), DIR-PMO (174) | New risks, mitigations, status changes |
| **Dependency Tracker** | Weekly | TPM (176) | Cross-department leads | Dependency status, blockers, resolutions |
| **Quality Dashboard** | Bi-weekly | MGR-QA (101) | Engineering leads, Product | Test coverage, bug trends, quality metrics |
| **Launch Readiness Report** | Daily (Week 11-12) | SR-TPM (175) | C-Suite, all leads | Checklist progress, blockers, go/no-go status |

### 6.3 Escalation Tiers

```
TIER 1: Team-Level (resolve within 4 hours)
  Owner: SCRUM (177)
  Examples: Story blocked by another story, PR review delayed, env issue
  Resolution: Daily standup, direct DM, team channel

TIER 2: Cross-Team (resolve within 1 business day)
  Owner: TPM (176)
  Examples: Design handoff delayed, dependency not met, resource conflict
  Resolution: Cross-department sync, direct escalation to department lead

TIER 3: Program-Level (resolve within 2 business days)
  Owner: SR-TPM (175) / DIR-PMO (174)
  Examples: Sprint goal at risk, scope change request, governance gate failure
  Resolution: Steering committee meeting, director-level decision

TIER 4: Executive (resolve within 1 business day)
  Owner: COO (004) / CEO (001)
  Examples: Timeline change, budget impact, strategic pivot, launch delay
  Resolution: Executive decision, stakeholder communication
```

### 6.4 Stakeholder Communication

| Stakeholder | Touchpoint | Frequency | Owner |
|-------------|-----------|-----------|-------|
| CEO (001) | Executive summary email | Weekly | SR-TPM (175) |
| CTO (002) | Sprint review attendance + tech deep-dive | Bi-weekly | STAFF-FE (028) |
| CPO (003) | Product review meeting | Bi-weekly | VP-PROD (064) |
| CMO (006) | Marketing alignment meeting | Weekly (Sprints 4-5) | VP-MKT (126) |
| CRO (007) | Sales enablement readiness check | Sprint 4 & launch | DIR-SALES (117) |
| Board/Client | Project milestone report | Monthly | CEO (001) |

---

## 7. RISK MANAGEMENT PER SPRINT

### Sprint 1 Risks

| Risk | Impact | Mitigation | Owner |
|------|--------|------------|-------|
| Brand identity not finalized by Day 1 | HIGH — blocks all UI work | Pre-sprint kick-off with Design team; interim tokens | VP-DES (074) |
| Sanity CMS schema design takes longer than estimated | MEDIUM — delays content pipeline | Start schema design in Sprint 0 (pre-planning); parallel track | SR-FS (037) |
| GitHub Actions + GitHub Pages configuration | MEDIUM — delays preview deploys | Reference Astro GitHub Pages deployment guide; configure base path and CNAME early | SR-DEVOPS (060) |
| Static site form handling | LOW — GitHub Pages has no server-side | Use Formspree or HubSpot embedded forms; test in Sprint 2 prototype | SR-BE-NODE (034) |

### Sprint 2 Risks

| Risk | Impact | Mitigation | Owner |
|------|--------|------------|-------|
| 195 agent data extraction has edge cases | HIGH — blocks profile pages | Manual verification of 10% sample; automated validation | SR-BE-PY (035) |
| Avatar generation at scale (195 images) | MEDIUM — visual degradation without avatars | Start generation early Sprint 1; fallback to placeholder avatars | MOTION-DES (087) |
| Page count overwhelming (20 dept pages + profiles) | MEDIUM — quality issues | Template-based approach; automate from CMS data | SR-FS (037) |

### Sprint 3 Risks

| Risk | Impact | Mitigation | Owner |
|------|--------|------------|-------|
| Org chart with 195 nodes has performance issues | HIGH — core feature degraded | Virtualization, progressive loading, level-by-level render | STAFF-FE (028) |
| Interactive feature scope creep | HIGH — delays downstream sprints | Strict MoSCoW; MVP first, polish in Sprint 5 | PM (068) |
| Animation performance on mobile/low-end devices | MEDIUM — poor UX for subset of users | prefers-reduced-motion, progressive enhancement, testing | PERF-TEST (106) |

### Sprint 4 Risks

| Risk | Impact | Mitigation | Owner |
|------|--------|------------|-------|
| CRM integration complexity | HIGH — blocks lead capture | Early API exploration (Sprint 3); fallback to email | SR-BE-NODE (034) |
| Blog/case study content not ready | MEDIUM — empty pages at launch | Parallel content track; minimum 3 blog posts required | CONTENT-MKT (129) |
| Cookie consent cross-browser issues | MEDIUM — compliance risk | Test early, use established library, legal review | PRIVACY (160) |

### Sprint 5 Risks

| Risk | Impact | Mitigation | Owner |
|------|--------|------------|-------|
| Lighthouse scores below target | HIGH — blocks quality gate | Budget full sprint for optimization; iterative measurement | STAFF-FE (028) |
| Accessibility remediation scope larger than expected | MEDIUM — delays QA gate | A11Y audit in Sprint 3 (baseline); incremental fixes | A11Y-TEST (107) |
| Load test reveals infrastructure issues | HIGH — launch delay | Early load testing (Sprint 3 baseline); scaling plan ready | DIR-SRE (054) |

---

## 8. RESOURCE ALLOCATION

### 8.1 Core Sprint Team (Sprints 1-5)

| Role | Agent(s) | Allocation | Sprints |
|------|----------|-----------|---------|
| **Product Owner** | PM (068) | 100% | S1-S5 |
| **Scrum Master** | SCRUM (177) | 100% | S1-S5 |
| **Program Coordination** | TPM (176) | 100% | S1-S5 |
| **Frontend Lead** | STAFF-FE (028) | 100% | S1-S5 |
| **Senior Frontend** | SR-FE-REACT (032) | 100% | S1-S5 |
| **Frontend** | FE-ENG (042) | 100% | S1-S5 |
| **Junior Frontend** | JR-FE (047) | 100% | S1-S5 |
| **Senior Full-Stack** | SR-FS (037) | 100% | S1-S5 |
| **Senior Backend (Python)** | SR-BE-PY (035) | 50% S1, 25% S2 | S1-S2 |
| **Senior Backend (Node)** | SR-BE-NODE (034) | 50% S3, 100% S4, 50% S5 | S3-S5 |
| **Backend** | BE-ENG (043) | 75% | S2-S5 |
| **Senior DevOps** | SR-DEVOPS (060) | 50% | S1-S5 |
| **Design Lead** | STAFF-DES (078) | 100% S1, 50% S2-S5 | S1-S5 |
| **Senior UI Designer** | SR-UID (080) | 100% | S1-S5 |
| **Senior UX Designer** | SR-UXD (081) | 100% S1-S2, 50% S3-S5 | S1-S5 |
| **Motion Designer** | MOTION-DES (087) | 50% S1, 100% S2-S3, 50% S4-S5 | S1-S5 |
| **Content Designer** | CONTENT-DES (086) | 50% | S2-S5 |
| **Senior QA Auto** | SR-QA-AUTO (102) | 25% S1, 50% S2-S4, 100% S5 | S1-S5 |
| **Senior QA Manual** | SR-QA-MAN (103) | 50% S3-S4, 100% S5 | S3-S5 |
| **Performance Tester** | PERF-TEST (106) | 25% S3, 50% S5, 100% W11 | S3, S5, W11 |
| **Accessibility Tester** | A11Y-TEST (107) | 25% S3, 100% S5, 100% W11 | S3, S5, W11 |

### 8.2 Support & Specialist Resources

| Role | Agent(s) | Allocation | Sprints |
|------|----------|-----------|---------|
| Senior Technical Writer | SR-TW (178) | 25% S4, 50% S5 | S4-S5 |
| Content Marketer | CONTENT-MKT (129) | 50% S4 | S4 |
| Product Marketing Manager | PMM (127) | 50% S4 | S4 |
| Growth Marketer (SEO) | GROWTH-MKT (128) | 25% S1, 25% S4 | S1, S4 |
| Marketing Operations | MOPs (131) | 25% S4 | S4 |
| Social Media Manager | SOCIAL-MGR (132) | 25% W12 | W12 |
| PR Manager | PR-MGR (133) | 25% W12 | W12 |
| Senior Security Engineer | SR-SEC-ENG (109) | 25% S5 | S5 |
| AppSec Engineer | APPSEC (110) | 50% W11 | W11 |
| Penetration Tester | PENTEST (112) | 100% W11 | W11 |
| Privacy Counsel | PRIVACY (160) | 10% S4, 25% W11 | S4, W11 |
| Contracts Counsel | CONTRACTS (158) | 10% S2 | S2 |
| Enterprise Apps Admin | ENT-APPS (167) | 25% S3-S4 | S3-S4 |
| Revenue Operations | REVOPS (125) | 10% S3-S4 | S3-S4 |

### 8.3 Governance Resources (Event-Triggered)

| Agent | Activation | Duration |
|-------|-----------|----------|
| ARB-AGENT (181) | Sprint 1 Review | 1-2 days |
| SEC-REVIEW (182) | Sprint 4 Review + Week 11 | 2-3 days each |
| LEGAL-REVIEW (183) | Week 11 | 1-2 days |
| QA-GATE (184) | Sprint 5 Review + Week 11 | 1-2 days each |
| REL-APPROVE (185) | Week 12 (May 05) | 1 day |
| CHANGE-MGR (186) | Week 12 (May 05-07) | 2-3 days |

### 8.4 Leadership Oversight

| Agent | Involvement | Frequency |
|-------|------------|-----------|
| SR-TPM (175) | Program oversight, steering committee | Weekly |
| DIR-PMO (174) | Escalation point, resource conflicts | As needed |
| VP-PROD (064) | Product direction, scope decisions | Bi-weekly |
| VP-DES (074) | Design direction, brand approval | Sprint 1 + bi-weekly |
| VP-ENG (013) | Engineering staffing, technical decisions | Bi-weekly |
| SVP-ENG (012) | Escalation, cross-team resource allocation | As needed |
| CTO (002) | Technical strategy, architecture review | Sprint 1, Sprint 5 |
| CPO (003) | Product strategy, launch readiness | Monthly |
| CMO (006) | Launch marketing, brand alignment | Sprint 4, Week 12 |

---

## 9. DEFINITION OF DONE

### 9.1 Story-Level Done

A user story is "Done" when ALL of the following are met:

- [ ] Code complete and merged to `develop` branch
- [ ] Unit tests written and passing (>80% coverage for new code)
- [ ] Integration tests passing
- [ ] Code reviewed by 2 engineers (1 must be senior+)
- [ ] QA-GATE (184) automated checks pass on PR
- [ ] Responsive across all breakpoints (320px, 768px, 1024px, 1440px, 1920px)
- [ ] Dark mode verified
- [ ] Accessibility checked (keyboard navigation, screen reader, color contrast)
- [ ] Design review approved (matches Figma mockups)
- [ ] Deployed to staging/preview environment
- [ ] QA tested and approved on staging
- [ ] No console errors or warnings
- [ ] No TypeScript `any` types
- [ ] Linting clean (zero warnings)

### 9.2 Sprint-Level Done

A sprint is "Done" when:

- [ ] All committed stories meet Story-Level Done criteria
- [ ] Sprint goal achieved (as defined in sprint planning)
- [ ] Sprint review demo completed
- [ ] Sprint retrospective conducted
- [ ] All P0/P1 bugs from the sprint resolved
- [ ] Staging environment stable and accessible
- [ ] Sprint velocity and burndown documented
- [ ] Dependencies for next sprint confirmed ready

### 9.3 Release-Level Done

The website is "Release Ready" when:

- [ ] All 5 sprint goals achieved
- [ ] QA-GATE (184) final quality gate passed
- [ ] SEC-REVIEW (182) security audit passed
- [ ] LEGAL-REVIEW (183) compliance verified
- [ ] A11Y-TEST (107) WCAG 2.1 AA compliance confirmed
- [ ] PERF-TEST (106) load test passed (1000 concurrent, <2.5s LCP)
- [ ] Lighthouse >95 across all categories on all pages
- [ ] UAT sign-off from stakeholder committee
- [ ] Zero P0/P1 bugs open
- [ ] Rollback plan documented and tested
- [ ] Monitoring and alerting configured
- [ ] Launch communications prepared
- [ ] REL-APPROVE (185) sign-off obtained
- [ ] CHANGE-MGR (186) change advisory approved

---

## 10. ESCALATION & DECISION FRAMEWORK

### 10.1 Decision Authority

| Decision Type | Authority | Escalation Path |
|--------------|-----------|----------------|
| Story-level technical decisions | Engineer + Tech Lead (STAFF-FE 028) | SEM → VP-ARCH (014) |
| Sprint scope changes (<5 pts) | PM (068) + SCRUM (177) | SR-PM (067) → VP-PROD (064) |
| Sprint scope changes (>5 pts) | SR-PM (067) + TPM (176) | VP-PROD (064) → CPO (003) |
| Design direction changes | Design lead (SR-UID 080) | DIR-DES (075) → VP-DES (074) |
| Cross-team resource conflicts | TPM (176) | SR-TPM (175) → DIR-PMO (174) → COO (004) |
| Timeline changes | SR-TPM (175) | DIR-PMO (174) → COO (004) → CEO (001) |
| Budget impact decisions | TPM (176) | SR-TPM (175) → CFO (005) |
| Security exceptions | DIR-SEC (108) | CISO (009) |
| Launch go/no-go | REL-APPROVE (185) | CEO (001) + CTO (002) |

### 10.2 Scope Change Process

```
1. Requestor submits scope change to PM (068)
2. PM assesses impact (effort, timeline, dependencies)
3. If <5 story points: PM decides with SCRUM
4. If >5 story points: PM escalates to SR-PM (067) + TPM (176)
5. TPM assesses cross-team impact
6. If sprint goal at risk: Steering committee decision (SR-TPM 175)
7. If timeline at risk: Executive escalation (COO 004 / CEO 001)
8. Decision documented in project log
9. Affected teams notified via #website-announcements
```

### 10.3 Sprint Failure Protocol

If a sprint goal is not achieved:

```
1. SCRUM (177) documents: what was missed, root cause, impact
2. TPM (176) assesses downstream impact on future sprints
3. SR-TPM (175) evaluates: can we recover, or do we need to re-plan?
4. Options:
   a. Carry over to next sprint (if <20% of goal missed)
   b. Extend current sprint by 2-3 days (if critical path item)
   c. Re-plan remaining sprints (if >20% missed or critical path blocked)
   d. Descope: move items to "Could Have" or post-launch (if timeline fixed)
5. Decision escalated to VP-PROD (064) + VP-ENG (013) if (b) or (c)
6. Retro must address root cause with actionable improvements
```

---

## APPENDIX A: SPRINT VELOCITY PLANNING

### Estimated Team Velocity

Based on team composition and NEXUS AI Engineering SOP standards:

| Sprint | Team Size (FTE equiv) | Estimated Velocity | Notes |
|--------|----------------------|-------------------|-------|
| Sprint 1 | ~8 engineers + 4 design | 70-80 pts | Foundation; learning curve with new stack |
| Sprint 2 | ~9 engineers + 3 design | 80-90 pts | Ramping up; CMS integration in parallel |
| Sprint 3 | ~9 engineers + 2 design | 75-85 pts | Complex interactive features; new territory |
| Sprint 4 | ~10 engineers + 2 content | 75-85 pts | Integration-heavy; external dependencies |
| Sprint 5 | ~8 engineers + 4 QA | 65-75 pts | Optimization and polish; lower velocity expected |

### Velocity Tracking

Velocity will be tracked per sprint and compared against plan. If actual velocity deviates >15% from planned, TPM (176) triggers a re-planning session.

---

## APPENDIX B: TOOL & ENVIRONMENT SETUP

| Tool | Purpose | Owner | Ready By |
|------|---------|-------|----------|
| GitHub | Source control, PRs, CI/CD | SR-DEVOPS (060) | Sprint 1, Day 1 |
| Jira / Linear | Sprint board, backlog, tracking | SCRUM (177) | Sprint 1, Day 1 |
| Figma | Design files, handoffs, prototypes | DIR-DES (075) | Sprint 1, Day 1 |
| Sanity CMS | Content management | SR-FS (037) | Sprint 1, Week 2 |
| GitHub Pages | Production hosting (repo: TheKingHippopotamus/195_shades_of_agents-) | SR-DEVOPS (060) | Sprint 1, Week 1 |
| GitHub Actions | CI/CD pipeline, automated builds, preview deploys | SR-DEVOPS (060) | Sprint 1, Day 1 |
| Formspree / HubSpot | External form service (contact, demo request — GitHub Pages is static) | SR-BE-NODE (034) | Sprint 4, Week 1 |
| Storybook | Component documentation | JR-FE (047) | Sprint 1, Week 2 |
| Vitest + Playwright | Testing framework | SR-QA-AUTO (102) | Sprint 1, Week 2 |
| Slack | Team communication (channels above) | SYSADMIN (165) | Pre-Sprint 1 |
| GA4 + Plausible | Analytics | MOPs (131) | Sprint 4 |
| HubSpot / Salesforce | CRM integration | ENT-APPS (167) | Sprint 3-4 |

---

## APPENDIX C: KEY CONTACTS

| Role | Agent | Code | Contact Channel |
|------|-------|------|----------------|
| Program Manager | Technical Program Manager | TPM (176) | #website-product, DM |
| Senior Program Manager | Senior TPM | SR-TPM (175) | #website-leadership |
| Product Owner | Product Manager | PM (068) | #website-product |
| Scrum Master | Scrum Master / Agile Coach | SCRUM (177) | #website-dev |
| Frontend Lead | Staff Engineer — Frontend | STAFF-FE (028) | #website-dev |
| Design Lead | Staff Designer | STAFF-DES (078) | #website-design |
| QA Lead | QA Manager | MGR-QA (101) | #website-qa |
| Security Lead | Director of Security | DIR-SEC (108) | #website-security |
| Content Lead | Content Marketer | CONTENT-MKT (129) | #website-content |
| Infrastructure Lead | Senior DevOps Engineer | SR-DEVOPS (060) | #website-dev |

---

**Document prepared by:** TPM (176) — Technical Program Manager
**Date:** February 15, 2026
**Status:** COMPLETE — Ready for team distribution
**Next Steps:**
1. Share with SR-TPM (175) and DIR-PMO (174) for approval
2. Distribute to all department leads via #website-announcements
3. Coordinate with EST-AGENT (188) on resource allocation alignment
4. Conduct Sprint 0 pre-planning session (Feb 14-16)
5. Begin Sprint 1 on February 17, 2026
