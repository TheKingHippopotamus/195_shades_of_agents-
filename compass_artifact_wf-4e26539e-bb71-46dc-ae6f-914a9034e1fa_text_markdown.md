# The complete organizational blueprint for an AI agent software company

**Every major tech company — Google, Microsoft, Meta, Amazon, Apple, Salesforce — structures itself around cross-functional product teams of 6–12 people, supported by platform teams and coordinated through transparent goal frameworks like OKRs.** This report maps the complete hierarchy, all departments, role interactions, project lifecycle, and individual role descriptions needed to create 60–100+ distinct AI agent prompts for a virtual software company. The structure below synthesizes real practices at FAANG+ companies into a single actionable blueprint, with every level from CEO to junior intern accounted for.

---

## The dual-track career ladder: IC and management paths side by side

The foundation of every major tech company's hierarchy is the **dual-track career ladder** — parallel paths for individual contributors (ICs) and managers that are equivalent in compensation, scope, and seniority. Engineers choose their track at the Senior level; before that, the paths are unified.

### Complete IC track (engineering)

| Level | Canonical title | Google | Meta | Microsoft | Amazon | Apple | Scope of impact |
|-------|----------------|--------|------|-----------|--------|-------|-----------------|
| 1 | Junior Software Engineer | L3 | E3 | 59–60 | L4 (SDE I) | ICT2 | Task-level; works with guidance on well-defined problems |
| 2 | Software Engineer | L4 | E4 | 61–62 | L5 (SDE II) | ICT3 | Feature-level; independent work, designs smaller features |
| 3 | Senior Software Engineer | L5 | E5 | 63–64 | L6 (Senior SDE) | ICT4 | Project-level; leads projects end-to-end, mentors others |
| 4 | Staff Software Engineer | L6 | E6 | 65–66 | L7 (Principal SDE) | ICT5 | Multi-team (3–5 teams, 20–50 engineers); creates scope |
| 5 | Senior Staff Engineer | L7 | E7 | 67 | L7–L8 | ICT5–6 | Org-wide (75–150 engineers); 2–3 year planning horizon |
| 6 | Principal Engineer | L8 | E8 | 68–69 | L8 (Sr. Principal) | ICT6 | Division-wide; equivalent to Director |
| 7 | Distinguished Engineer | L9 | E9 | 70 | L10 | — | Company-wide; equivalent to VP |
| 8 | Fellow | L10 | E10 | 80+ (Technical Fellow) | L11 | Apple Fellow | Industry-defining; equivalent to SVP |
| 9 | Senior Fellow | L11 | — | — | — | — | Google-only; e.g., Jeff Dean |

**The Senior level (Level 3) is the terminal level** at most companies — engineers can remain there indefinitely. Roughly **60–70% of engineers** sit at Junior through Senior. Only ~15% reach Staff, ~3% reach Senior Staff, and less than 1% reach Principal or above.

### Complete management track

| Level | Title | IC equivalent | Typical scope |
|-------|-------|---------------|---------------|
| M1 | Engineering Manager | Senior Engineer (L5/E5) | Single team of 5–10 ICs |
| M2 | Senior Engineering Manager | Staff Engineer (L6/E6) | 10–20 engineers, may manage managers |
| M3 | Engineering Director | Senior Staff (L7/E7) | Multiple teams, 50–150 people |
| M4 | Senior Director | Principal (L8/E8) | Large org, 150–300 people |
| M5 | VP of Engineering | Distinguished (L9/E9) | Hundreds to thousands |
| M6 | SVP of Engineering | Fellow (L10/E10) | Major division or product area |
| M7 | CTO / CEO | — | Company-wide |

**Where Tech Leads fit:** Tech Lead is not a formal level — it's a responsibility held by a Senior or Staff engineer who drives technical decisions for a team while the Engineering Manager handles people management. Google and Meta also use the "Tech Lead Manager" (TLM) hybrid role: a manager who is also the team's technical lead.

### The C-suite layer

The executive team of a major tech company typically includes **11–15 C-level roles**:

- **CEO** — Sets company vision and strategy, final decision authority on all major matters, represents the company externally, accountable to the board
- **CTO** — Owns technical vision and long-term technology strategy, evaluates emerging technologies, leads architecture decisions at the highest level; at some companies this role is more external-facing (thought leadership) while VP Engineering handles internal execution
- **CFO** — Financial strategy, fundraising, investor relations, budgeting, financial reporting, M&A financial analysis
- **COO** — Day-to-day operations, process optimization, scaling execution, often manages HR/Finance/Legal/IT
- **CPO (Chief Product Officer)** — Product vision and strategy across all product lines, owns the product management organization, P&L responsibility for products
- **CMO** — Brand, demand generation, go-to-market strategy, marketing organization, growth
- **CRO (Chief Revenue Officer)** — Sales strategy, revenue targets, sales operations, customer success, owns the revenue engine
- **CHRO (Chief People Officer)** — Talent strategy, culture, DEI, compensation philosophy, organizational design
- **CISO** — Security posture, risk management, incident response, compliance with security regulations
- **CLO (Chief Legal Officer) / General Counsel** — Legal strategy, IP protection, regulatory compliance, corporate governance
- **CAIO (Chief AI Officer)** — The fastest-growing C-suite role of 2024–2025; **26% of organizations now have one** (up from 11% two years prior). Owns AI strategy, model governance, and AI integration across products

---

## All 14 departments and their complete role hierarchies

### 1. Engineering / R&D

The engineering organization is the largest department, typically comprising **50–65% of total headcount**. It subdivides into these specialized disciplines:

**Core development teams:** Frontend Engineering (web UI, React/Angular/Vue, browser performance, accessibility), Backend Engineering (APIs, microservices, distributed systems, server-side logic), Mobile Engineering (iOS/Swift, Android/Kotlin, cross-platform/Flutter), Full-Stack Engineering. **Infrastructure and platform teams:** Platform Engineering (internal developer platforms, self-service tooling, container orchestration), DevOps Engineering (CI/CD pipelines, infrastructure-as-code, deployment automation), Site Reliability Engineering/SRE (system reliability, monitoring/observability, incident response, capacity planning, error budgets), Cloud Engineering (cloud-native architecture, multi-cloud), Database Engineering (optimization, distributed databases), Networking Engineering (protocols, load balancing, CDN). **Specialized engineering:** Security Engineering (DevSecOps, secure coding, cryptographic systems), ML Engineering (model training, deployment, MLOps), Data Engineering (pipelines, ETL, data warehousing, data lakes), Release Engineering (release management, feature flags, rollout strategies), Build/Tools Engineering (build systems like Bazel, developer productivity tooling), Embedded/Firmware Engineering (IoT, hardware-software interfaces).

**Role hierarchy within each sub-discipline:** Junior Engineer → Engineer → Senior Engineer → Staff Engineer → Senior Staff Engineer → Principal Engineer → Distinguished Engineer → Fellow. Management ladder: Tech Lead → Engineering Manager → Senior EM → Director → Senior Director → VP → SVP → CTO.

### 2. Product Management

Product managers define **what** to build and **why** — they sit at the intersection of business, technology, and user experience.

**Role hierarchy:** Associate Product Manager (APM) → Product Manager → Senior PM → Group Product Manager (GPM) / Product Lead → Director of Product → VP of Product → CPO. **Specializations:** Technical PM (APIs, infrastructure, developer platforms), Growth PM (acquisition, engagement, retention, experimentation), Platform PM (internal platforms, developer tools), Data PM (analytics products, data governance), AI PM (ML-powered features, model management).

**Key deliverables:** Product Requirements Documents (PRDs), roadmaps, OKRs, user stories, go/no-go decisions. A PM's week typically includes user research sessions, roadmap reviews, sprint planning, stakeholder alignment meetings, and data analysis. They are measured on product adoption metrics, revenue impact, and user satisfaction.

### 3. Design

**Sub-teams:** UX Design (user flows, wireframes, information architecture, prototyping), UI/Visual Design (pixel-perfect interfaces, typography, color systems, icons), UX Research (user interviews, usability testing, surveys, behavioral analysis), Content Design/UX Writing (microcopy, interface language, error messages), Design Systems (component libraries, design tokens, cross-product consistency), Motion Design (animation, transitions, micro-interactions), Brand Design (identity, visual language, marketing collateral), DesignOps (workflow optimization, tool management, process efficiency).

**Role hierarchy:** Junior Designer → Designer → Senior Designer → Staff Designer → Principal Designer → Design Manager → Senior Design Manager → Director of Design → VP of Design → CDO. Most companies use a **hybrid model** where designers report to a central design leader for craft standards while being embedded in cross-functional product teams.

### 4. Quality Assurance / QA

**Roles:** QA Analyst (manual/exploratory testing, test case creation) → QA Engineer (test automation, framework development) → SDET/Software Development Engineer in Test (production-quality test code) → Senior QA Engineer → QA Lead → QA Manager → Director of QA → VP of Quality. **Specialists:** Performance Test Engineer (load testing, stress testing, benchmarking), Security Test Engineer (penetration testing, vulnerability scanning), Accessibility Test Engineer.

At FAANG companies, the SDET role has increasingly **merged with software engineering** — all engineers are expected to write tests. Dedicated QA focuses on test strategy, infrastructure, and exploratory testing that automation cannot cover.

### 5. Data Science & AI/ML

This department has become a critical function with **five distinct role families:**

- **Data Analyst:** SQL, dashboards, business reporting, trend identification. Hierarchy: Junior → Analyst → Senior → Lead → Analytics Manager → Director
- **Data Scientist:** Predictive modeling, statistical analysis, hypothesis testing, A/B test design. Hierarchy: Junior → DS → Senior → Staff → Principal → Head of DS → VP
- **ML Engineer:** Production ML systems, model deployment, MLOps pipelines. Hierarchy: ML Engineer → Senior → Staff → Principal
- **Research Scientist / Applied Scientist:** Original research, novel algorithms, paper publication. Hierarchy: Research Scientist → Senior → Staff → Principal → Distinguished
- **Data Engineer:** Data pipelines, ETL, warehouse architecture, data quality. Hierarchy: Junior → DE → Senior → Staff → Principal
- **AI Ethics Researcher:** Responsible AI, bias detection, fairness auditing, policy development

### 6. Security / Cybersecurity

Reports to the **CISO**, who may report to CTO, CIO, or directly to CEO.

**Sub-teams and roles:** Security Engineering (secure architecture, encryption systems), Application Security/AppSec (SDLC integration, threat modeling, secure code review), Information Security/InfoSec (data protection, access controls, DLP), Security Operations Center/SOC (Tier 1 alert monitoring → Tier 2 threat hunting → Tier 3 advanced forensics), Penetration Testing/Red Team (offensive security, vulnerability exploitation), Incident Response (breach management, recovery coordination), Security Architecture (technology strategy, cloud/on-prem security design), Identity & Access Management/IAM (authentication, authorization, SSO, MFA), Governance Risk & Compliance/GRC (NIST, SOC2, PCI DSS, regulatory audits).

### 7. Sales & Business Development

Organized by **segment** (SMB, Mid-Market, Enterprise, Strategic), **geography**, or **product line**.

**Core roles:** Business Development Representative/BDR (outbound prospecting, lead qualification, pipeline generation) → Account Executive/AE (runs sales cycles, demos, negotiation, closing) → Senior AE → Enterprise AE → Strategic AE. **Specialized roles:** Sales Engineer/Solutions Engineer (technical pre-sales, POCs, RFP responses), Solutions Architect (enterprise architecture, custom solution design), Account Manager (renewals, upsells, relationship management), Channel/Partner Sales Manager. **Operations:** Sales Operations/RevOps (CRM, analytics, forecasting, territory planning, compensation design). **Leadership:** Sales Manager → Regional Director → Director of Sales → VP of Sales → CRO.

### 8. Marketing

**Sub-teams:** Product Marketing (positioning, go-to-market, competitive intelligence, sales enablement), Growth/Performance Marketing (paid acquisition, conversion optimization, retention), Content Marketing (blogs, whitepapers, SEO, thought leadership), Brand Marketing (identity, awareness campaigns), Demand Generation (lead gen, marketing automation, email campaigns), Marketing Operations/MOps (tech stack, data, attribution), Digital Marketing (SEO, SEM/PPC, display), Social Media Marketing, Communications/PR (media relations, crisis comms), Events Marketing (conferences, webinars), Developer Marketing (developer-focused campaigns, API promotion).

**Hierarchy:** Marketing Associate → Specialist → Manager → Senior Manager → Director → VP → CMO. Product Marketing Manager (PMM) is a distinct, highly strategic role that bridges product and marketing — **not** a subset of general marketing.

### 9. Customer Success / Support

**Roles:** Customer Success Manager/CSM (onboarding, adoption, health monitoring, renewals — measured by NRR and churn), Technical Account Manager/TAM (deep technical guidance for enterprise accounts), Support Engineer (Tier 1 basic → Tier 2 complex → Tier 3 escalation/engineering), Solutions Consultant (implementation guidance, best practices), Onboarding Specialist, Renewal Manager, Professional Services Consultant (billable consulting and implementation), CS Operations (analytics, health scoring, playbooks).

**Segmented by account size:** Enterprise (high-touch, 1:10 CSM-to-account ratio) → Mid-Market (hybrid) → SMB (tech-touch/digital, 1:many). **Leadership:** CSM → Senior CSM → CS Team Lead → CS Manager → Director of CS → VP of CS → CCO.

### 10. HR / People Operations

**Sub-teams:** Talent Acquisition/Recruiting (Sourcer → Recruiter → Senior Recruiter → Recruiting Manager → Head of TA; includes Technical Recruiters and Executive Recruiters), HR Business Partners/HRBPs (strategic advisors aligned to business units), Compensation & Benefits (benchmarking, equity admin, total rewards), Learning & Development/L&D (training, leadership development, career pathing), DEI (strategy, ERGs, inclusive hiring), People Operations (onboarding/offboarding, HRIS, policy admin), People Analytics (headcount planning, attrition analysis, org design), Employee Relations (conflict resolution, investigations).

### 11. Finance / Accounting

**Sub-teams:** FP&A/Financial Planning & Analysis (budgeting, forecasting, modeling, variance analysis), Accounting (GL, AP/AR, month-end close, GAAP/IFRS reporting), Treasury (cash management, liquidity, FX), Tax (compliance, planning, transfer pricing, R&D credits), Revenue Operations/Revenue Recognition (ASC 606, deal desk), Internal Audit (SOX compliance, controls testing), Investor Relations (earnings calls, SEC filings, analyst relations), Procurement/Strategic Sourcing (vendor management, contract negotiation), Equity Administration (RSU/option management). **Leadership:** Financial Analyst → Senior → Manager → Director → Controller → VP of Finance → CFO.

### 12. Legal / Compliance

**Sub-teams:** Corporate Counsel (M&A, governance, securities), Commercial/Contracts Counsel (SaaS agreements, licensing, negotiations), IP Attorney (patents, trademarks, open source licensing), Privacy Counsel/DPO (GDPR, CCPA, privacy by design), Employment Counsel (labor law, workplace policies), Compliance Officer (regulatory, anti-corruption, export controls, ethics), Litigation Counsel (lawsuits, e-discovery), Product Counsel (content moderation, ToS, product-specific legal), Legal Operations (CLM tools, budget management, process optimization), Paralegal. **Leadership:** Associate Counsel → Counsel → Senior Counsel → Director → VP of Legal → Deputy GC → General Counsel/CLO.

### 13. Operations / IT

**Sub-teams:** IT Support/Help Desk (end-user support, hardware/software troubleshooting), IT Infrastructure/Network Administration (data centers, servers, VPNs), Systems Administration (server/OS management, configuration), Enterprise Applications (ERP, CRM, HRIS administration), Business Intelligence (reporting, dashboards), Business Continuity/Disaster Recovery, Facilities/Workplace Operations (office management, physical security, space planning), Procurement. **Leadership:** IT Specialist → Senior → Lead → Manager → Director → VP of IT → CIO.

### 14. Developer Relations / DevRel

Can sit under Engineering, Product, or Marketing — varies by company. **Roles:** Developer Advocate/Evangelist (conference talks, demos, blog posts, community engagement, feedback conduit to product teams), Developer Relations Engineer/Developer Programs Engineer (builds SDKs, sample code, reference implementations — more code-heavy), Technical Writer (API docs, developer guides, tutorials; hierarchy: TW → Senior → Staff → Lead → Manager), Developer Community Manager (forums, Discord/Slack communities, user groups), Developer Experience/DX Practitioner (SDK/API design, onboarding friction, developer satisfaction), Developer Marketing Manager (developer-focused campaigns, acquisition). **Leadership:** DevRel Manager → Senior Manager → Director → VP of Developer Relations.

---

## How these roles interact: reporting lines and the product triad

### The product triad model

The **atomic unit of product development** at most tech companies is the triad: **Product Manager + Engineering Lead + Design Lead**. These three roles co-own product outcomes:

- The **PM** decides *what* to build and *why* (business value, user needs, prioritization)
- The **Engineering Lead** decides *how* to build it (architecture, feasibility, technical trade-offs)
- The **Design Lead** decides the *experience* (usability, accessibility, visual coherence)

The triad meets at least weekly, makes joint decisions, and jointly owns OKRs. When the triad disagrees, they attempt resolution themselves first; unresolved conflicts escalate up their respective management chains to the Director or VP level.

### Cross-functional collaboration patterns

**Engineering ↔ QA:** QA engineers participate in sprint planning, write test plans during design phase, execute testing during development. At FAANG companies, engineers own unit/integration tests; QA owns test strategy and exploratory testing.

**Product ↔ Data Science:** Data scientists design A/B test frameworks, analyze experiment results, and quantify the impact of proposed features. They inform PM prioritization decisions with data.

**Engineering ↔ Security:** Security reviews are **mandatory checkpoints** before any launch at all major companies. Security engineers conduct threat modeling during design phase, security-focused code reviews during development, and penetration testing before release.

**Engineering ↔ SRE/DevOps:** SREs own production reliability and deployment infrastructure. They define SLOs (Service Level Objectives) and error budgets that constrain how fast product teams can ship. The principle "you build it, you run it" means engineering teams share on-call responsibility.

**Product ↔ Marketing:** Product Marketing Managers (PMMs) bridge the gap — they translate product capabilities into market positioning. PMMs are engaged during go-to-market planning and own competitive intelligence.

**Sales ↔ Product:** Sales Engineers provide technical pre-sales support. Account Executives relay customer feedback and feature requests. Customer Success Managers provide adoption data that informs product roadmap priorities.

**Legal ↔ Everyone:** Legal reviews are required at launch gates. Privacy counsel reviews data handling, IP counsel reviews third-party integrations, and product counsel reviews user-facing terms.

### Decision authority by level

| Decision type | Authority level | Approvers |
|--------------|----------------|-----------|
| Day-to-day coding choices | Individual engineer | Code reviewer |
| Feature scoping within sprint | PM + Engineering Manager | — |
| Technical architecture (within team) | Tech Lead / Staff Engineer | Engineering Director |
| Product roadmap for a product area | Senior PM / GPM | VP of Product |
| Major architecture changes (cross-team) | Principal/Distinguished Engineer + Architecture Review Board | VP/SVP Engineering |
| Headcount and budget | Director/VP | SVP/CFO |
| New product line or major pivot | VP/SVP + C-suite | CEO/Board |
| Launch go/no-go | PM + TPM, with sign-off from Legal, Security, Accessibility | VP level |

**Apple's DRI model** deserves special mention: every task and project has a single **Directly Responsible Individual** who is ultimately accountable. DRI names appear on meeting agendas next to action items. "Who's the DRI on that?" is standard Apple vocabulary. Amazon uses a similar concept with **single-threaded leaders** — one senior leader who owns an entire initiative across functions.

---

## The complete project lifecycle: from idea to production

### Stage 1 — Ideation and discovery

Ideas originate from multiple sources: **top-down** (executive strategy, competitive response), **bottom-up** (engineer proposals, PM research, customer feedback), and **data-driven** (analytics revealing user pain points). At Amazon, every new product begins with a mock **press release and FAQ** — a 6-page narrative document written from the customer's perspective before any code exists. Teams iterate through 10+ drafts and senior leadership reviews. At Google, more than 50% of OKR objectives come bottom-up. At Meta, engineers are expected to propose product ideas and experiments — many engineers function as their own PM.

**Who's involved:** PM (lead), Design (user research), Engineering Lead (feasibility), Data Science (opportunity sizing), Leadership (strategic alignment).

### Stage 2 — Planning and strategy

Companies use structured planning frameworks to align thousands of people. Google uses **OKRs** — quarterly objectives with measurable key results, transparent across the entire company from CEO to intern. ~40% flow top-down, ~60% bottom-up. Aspirational OKRs target a score of 0.6–0.7; hitting 1.0 means the goal wasn't ambitious enough. Salesforce uses **V2MOM** (Vision, Values, Methods, Obstacles, Measures) — every employee writes one annually, all are published. Amazon uses **OP1/OP2** annual planning with 6-page narrative documents.

**Who's involved:** Leadership (sets strategic direction), PM (translates to product roadmap), Engineering Manager (translates to execution plan), Finance (budget approval), HR (headcount planning).

### Stage 3 — Requirements and PRD

The PM authors the **Product Requirements Document (PRD)** containing: product vision, user stories, feature specifications, success metrics, constraints, and scope. The Engineering Lead and Design Lead review for feasibility and user experience concerns. At Amazon, the PR/FAQ serves as the requirements document. At Meta, engineers often write their own requirements since they function as hybrid PM/engineers.

**Who's involved:** PM (author), Engineering Lead + Design Lead (reviewers), Data Science (metrics definition), Legal (compliance requirements), Security (security requirements).

### Stage 4 — Design phase

UX designers create wireframes, mockups, and interactive prototypes (primarily in **Figma**). UX researchers conduct usability studies. The product triad conducts **design reviews** — iterating until the PM, Design Lead, and Engineering Lead agree the solution addresses user needs and is technically feasible. Content designers define interface copy. Design systems teams ensure consistency with existing component libraries.

**Who's involved:** UX Designer (lead), UX Researcher, Content Designer, PM, Engineering Lead (feasibility review).

### Stage 5 — Technical design (RFCs and design docs)

Before coding begins, the Engineering Lead or Staff Engineer writes a **design document or RFC** (Request for Comments) documenting: problem statement, proposed solution, alternatives considered, trade-offs, security/scalability/reliability considerations. This is distributed to relevant engineering teams for asynchronous review. Critical changes require formal sign-off from senior engineers. Google's design docs are informal but ubiquitous. Amazon layers technical design docs on top of the PR/FAQ. LinkedIn, Spotify, and Uber all have strong RFC cultures.

**Who's involved:** Tech Lead / Staff Engineer (author), Senior Engineers (reviewers), Security Engineer (security review), SRE (reliability review), Architecture Review Board (for major changes).

### Stage 6 — Development and implementation

Teams work in **2-week sprints** (though Meta often skips formal sprints in favor of continuous flow). Daily standups, sprint planning, and retrospectives structure the work. Engineers write code and submit it for **mandatory code review** — at Google using Critique (at least one reviewer per change), at Meta using Phabricator ("diffs" requiring LGTM). Google operates a monorepo with trunk-based development. Engineers write unit and integration tests alongside their code. Google targets **60% test coverage** minimum, with 90% considered exemplary.

**Who's involved:** Software Engineers (coding), Tech Lead (technical guidance, code review), Engineering Manager (removing blockers, sprint facilitation), QA Engineer (test planning), PM (clarification and prioritization).

### Stage 7 — Testing and quality assurance

Multiple layers of testing: **unit tests** (developer responsibility), **integration tests** (automated CI pipelines), **end-to-end tests** (QA-led), **performance/load testing** (specialized engineers), **security testing** (security team), **accessibility testing** (specialized review). Google's Engineering Productivity team builds testing infrastructure. Meta expects engineers to include comprehensive test plans with every code change.

**Who's involved:** QA Engineers (test strategy, exploratory testing), Software Engineers (unit/integration tests), Performance Engineers, Security Engineers, Accessibility specialists.

### Stage 8 — Staging and pre-production

**Feature flags** separate deployment from release — code goes to production but features are hidden until ready. **Canary releases** route a small fraction of traffic (1% → 5% → 10% → 25% → 50% → 100%) to the new version. Automated monitoring watches error rates, latency, and business KPIs, with **automated rollback** if metrics exceed thresholds.

**Who's involved:** SRE/DevOps (deployment infrastructure), Release Engineer (rollout management), PM (feature flag decisions), Data Science (monitoring KPIs).

### Stage 9 — Launch and deployment

A formal **go/no-go decision** involves cross-functional sign-off. Google's launch process requires reviews from legal, ethics, accessibility, and technical teams. Apple's **ANPP (Apple New Product Process)** maps every step with a DRI and deadline in a "Rules of the Road" document. The Technical Program Manager (TPM) coordinates complex cross-team launches, managing timelines and dependencies.

**Who's involved:** TPM (coordination lead), PM (go/no-go decision), Engineering Lead, Legal, Security, Marketing (go-to-market), Customer Success (support readiness), Communications/PR.

### Stage 10 — Post-launch monitoring and iteration

Teams monitor dashboards for performance, errors, and user engagement. **A/B tests** validate that features deliver expected value. Data scientists analyze results and recommend iterations. Google uses the **Goals/Signals/Metrics (GSM)** framework. Teams iterate rapidly based on data — "ship, measure, learn, iterate."

**Who's involved:** Data Science (analysis), PM (prioritization of iterations), SRE (production monitoring), Engineering (bug fixes, optimizations), Customer Success (user feedback relay).

### Stage 11 — Maintenance and ongoing support

Meta's **Better Engineering** initiative allocates **20–30% of engineering effort** to code quality, refactoring, and tooling improvements. Customer support handles incoming issues (Tier 1 → 2 → 3 escalation). SREs manage on-call rotations and incident response. Technical debt is tracked and prioritized alongside feature work.

**Who's involved:** SRE (reliability, on-call), Support Engineers (customer issues), Engineers (bug fixes, tech debt), PM (prioritization).

---

## Detailed role descriptions for 80+ distinct agent roles

Below is a comprehensive catalog of every role needed for the AI agent company, organized by function and level, with **distinct responsibilities** that differentiate each role from adjacent ones.

### Executive leadership (11 roles)

**CEO:** Sets company vision and strategy. Makes final decisions on major resource allocation, M&A, and partnerships. Represents company to board, investors, and public. Day-to-day: strategy meetings, board prep, customer meetings, organizational decisions. Interacts with: all C-suite, board of directors.

**CTO:** Owns long-term technology vision and technical strategy. Evaluates emerging technologies and their strategic fit. Leads architecture decisions at the highest level. Publishes technology roadmap. Represents engineering externally at conferences. Day-to-day: technology reviews, architecture council meetings, vendor evaluations, engineering leadership syncs.

**CFO:** Owns financial strategy, reporting, and capital allocation. Manages investor relations and fundraising. Oversees budgeting, forecasting, and financial controls. Day-to-day: financial reviews, board prep, earnings calls, M&A evaluation, budget approvals.

**COO:** Runs day-to-day operations. Optimizes internal processes for efficiency. Often manages shared services (HR, Finance, Legal, IT, Facilities). Day-to-day: operational reviews, cross-functional alignment, process improvement, scaling decisions.

**CPO (Chief Product Officer):** Sets product vision across all product lines. Owns the product management organization. Responsible for product P&L. Arbitrates product prioritization conflicts. Day-to-day: product reviews, roadmap alignment, customer advisory boards, competitive analysis.

**CMO:** Owns brand, demand generation, and go-to-market strategy. Manages the marketing organization. Defines positioning and messaging. Day-to-day: campaign reviews, brand strategy, marketing analytics, partnership discussions.

**CRO (Chief Revenue Officer):** Owns the complete revenue engine — sales, customer success, and revenue operations. Sets revenue targets and go-to-market motion. Day-to-day: pipeline reviews, forecast calls, sales strategy, customer meetings.

**CHRO (Chief People Officer):** Owns talent strategy, culture, organizational design, and compensation philosophy. Day-to-day: leadership development, org design, workforce planning, culture initiatives.

**CISO:** Owns security posture and risk management. Defines security strategy, policies, and incident response. Reports to CEO or CTO on security risks. Day-to-day: security reviews, risk assessments, incident briefings, compliance audits.

**CLO (General Counsel):** Owns legal strategy, IP protection, regulatory compliance. Advises C-suite on legal risks. Day-to-day: contract reviews, regulatory analysis, litigation management, board governance.

**CAIO (Chief AI Officer):** Owns AI strategy, model governance, and AI integration across products. Evaluates AI opportunities and risks. Ensures responsible AI practices. Day-to-day: AI project reviews, model governance, vendor evaluation, AI ethics oversight, cross-functional AI adoption.

### VP layer (8 roles)

**SVP of Engineering:** Owns the entire engineering organization for a major division. Sets engineering culture and standards. Makes top-level build-vs-buy decisions. Reports to CTO/CEO.

**VP of Engineering:** Owns a major product area's engineering. Sets technical direction, manages engineering directors. Accountable for technical quality, delivery velocity, and team health across hundreds of engineers.

**VP of Product:** Owns product strategy for a major product area. Manages product directors. Accountable for product-market fit, business metrics, and product roadmap alignment with company strategy.

**VP of Design:** Owns design vision, quality standards, and design organization. Defines design principles and systems. Ensures consistent user experience across products.

**VP of Sales:** Owns sales targets, territory strategy, and sales org structure for a region or segment. Manages directors of sales.

**VP of Marketing:** Owns marketing strategy, budget, and team for a product area or the company. Manages marketing directors.

**VP of Data / VP of AI:** Owns data strategy and AI/ML organization. Manages data science and ML engineering teams. Sets data governance policies.

**VP of People:** Owns HR strategy for a major division. Partners with business leaders on organizational effectiveness.

### Director layer (8 roles)

**Engineering Director:** Manages 3–5 engineering managers (50–150 engineers total). Sets technical strategy for their area. Accountable for delivery, quality, and team health. Balances technical debt vs. feature delivery. Day-to-day: 1:1s with managers, roadmap reviews, architecture discussions, hiring decisions, cross-team coordination.

**Product Director:** Manages GPMs and senior PMs. Owns product portfolio strategy. Resolves cross-product prioritization conflicts. Defines success metrics at the portfolio level.

**Design Director:** Manages design managers. Sets design standards and quality bar. Ensures design consistency across product teams. Drives design system evolution.

**Director of Data Science:** Manages DS managers and senior data scientists. Sets data science methodology and standards. Ensures rigorous experiment design across the org.

**Director of QA:** Owns quality strategy organization-wide. Defines testing standards, manages QA managers. Drives automation and quality metrics.

**Director of Security:** Manages security sub-teams (AppSec, SecOps, GRC). Implements CISO's security strategy. Oversees incident response capabilities.

**Director of Sales:** Manages sales managers for a region or segment. Owns quota and pipeline for their territory. Coaches managers on deal strategy.

**Director of DevRel:** Sets developer relations strategy. Manages developer advocates and technical writers. Measures developer satisfaction and ecosystem health.

### Manager layer (10 roles)

**Engineering Manager (EM):** Manages 5–10 engineers directly. Conducts 1:1s, performance reviews, and career coaching. Facilitates sprint ceremonies. Removes blockers. Responsible for hiring, firing, and team composition. Evaluates on: team velocity, quality, engineer retention, and growth. This is the **most critical people-management role** in the hierarchy. Day-to-day: 30% 1:1s, 20% sprint/planning meetings, 20% cross-functional coordination, 15% hiring, 15% technical context.

**Senior Engineering Manager:** Manages 2–3 engineering managers (15–30 engineers total). Coordinates across multiple teams. Handles cross-team dependencies and resource allocation. More strategic than tactical compared to EM.

**Product Manager:** Owns a specific product area. Writes PRDs, prioritizes the backlog, defines success metrics. Runs sprint planning with engineering. Conducts user research and competitive analysis. Day-to-day: 25% stakeholder meetings, 20% user research/data analysis, 20% writing specs, 20% sprint ceremonies, 15% strategy.

**Senior Product Manager:** Owns a larger, more complex product area. Mentors junior PMs. Influences product strategy beyond their immediate domain. Handles higher-stakes trade-offs.

**Design Manager:** Manages 4–8 designers. Sets design quality standards. Facilitates design critiques. Ensures design resources are allocated across product teams effectively.

**QA Manager:** Manages QA team. Defines test strategy and automation roadmap. Ensures quality gates are met before releases. Reports quality metrics to engineering leadership.

**Project Manager / Program Manager:** Manages project timelines, milestones, and dependencies (without owning the product vision — that's the PM's job). Tracks risks and escalates blockers.

**Technical Program Manager (TPM):** Coordinates complex cross-team technical programs. Manages technical dependencies, timelines, and risks across multiple engineering teams. The TPM is an engineer who thinks in terms of programs — they understand both the technical details and the organizational complexity. Day-to-day: dependency mapping, risk tracking, cross-team syncs, launch coordination. Highly valued at Google and Amazon.

**Marketing Manager:** Manages campaigns, content calendar, or a marketing sub-function. Executes marketing strategy within their area.

**Customer Success Manager (CSM):** Owns a portfolio of customer accounts. Ensures product adoption, monitors health scores, drives renewals and expansion. Acts as the customer's advocate internally. Day-to-day: customer calls, QBRs (Quarterly Business Reviews), health monitoring, internal escalations.

### Staff+ IC roles (7 roles)

**Staff Engineer:** First rung of IC leadership above Senior. Owns technical direction for their area across **2–5 teams**. Solves complex, ambiguous problems. Creates scope by identifying impactful problems others haven't noticed. Leads through influence, not authority. Writes key design docs. Mentors senior engineers. Spends ~30–50% coding, rest on design, mentorship, and strategy. **About 10–15% of engineers reach this level.**

**Senior Staff Engineer:** Drives technical strategy across an entire engineering org (under a Director). Thinks 2–3 years ahead. Assembles and leads cross-team technical initiatives. Represents engineering in executive discussions. ~3% of engineers.

**Principal Engineer:** Identifies what the problems even are at a division or company-wide level. Assembles teams to solve novel, company-critical challenges. Has VP-scope influence without direct reports. Industry recognition expected. Less than 1% of engineers.

**Distinguished Engineer:** Shapes company direction and industry standards. Director/VP-level IC. Defines technical strategy that spans the entire company. Extremely rare — single-digit headcount at most companies.

**Staff Product Manager:** Equivalent to Staff Engineer but in product. Owns cross-product strategy. Defines product architecture that spans multiple product areas.

**Staff Designer:** Sets design direction across multiple product teams. Defines design patterns that become organizational standards. Mentors senior designers across the company.

**Staff Data Scientist:** Defines data science methodology for the organization. Designs measurement frameworks. Leads the most impactful analytical projects.

### Senior IC roles (10 roles)

**Senior Software Engineer:** The backbone of engineering organizations — leads projects end-to-end, mentors junior engineers, serves as tech lead, and makes most day-to-day technical decisions. Independent and requires minimal direction. Day-to-day: 60% coding, 15% code review, 10% design, 10% mentoring, 5% meetings.

**Senior Frontend Engineer:** Specializes in web UI, performance optimization, accessibility, and component architecture. Owns frontend architecture decisions.

**Senior Backend Engineer:** Specializes in API design, microservices, distributed systems, database optimization, and server-side performance.

**Senior Mobile Engineer:** Specializes in iOS or Android development, mobile performance, and platform-specific best practices.

**Senior DevOps/Platform Engineer:** Designs CI/CD pipelines, infrastructure-as-code, and developer platform tooling. Bridges development and operations.

**Senior SRE:** Defines SLOs, manages error budgets, leads incident response, and designs monitoring/alerting systems. Ensures production systems meet reliability targets.

**Senior Product Designer:** Owns design for a product area end-to-end. Conducts user research, creates high-fidelity prototypes, and validates designs through testing.

**Senior Data Scientist:** Independently designs and executes complex analyses. Builds ML models for production. Designs experiment frameworks.

**Senior Security Engineer:** Conducts threat modeling, security architecture reviews, and penetration testing. Designs security controls for critical systems.

**Senior ML Engineer:** Designs ML pipelines, optimizes model performance, and manages the model lifecycle from training to production deployment.

### Mid-level IC roles (10 roles)

**Software Engineer:** Works independently on moderate projects. Designs and implements features within a well-defined scope. Writes tests and participates in code review. Learning to lead small projects.

**Frontend Engineer:** Implements UI components, handles browser compatibility, and builds responsive interfaces. Works within established frontend architecture.

**Backend Engineer:** Implements API endpoints, database queries, and server-side logic. Handles data validation and business logic.

**Mobile Engineer:** Develops mobile features for iOS or Android. Handles platform-specific UI patterns and performance optimization.

**DevOps Engineer:** Maintains CI/CD pipelines, manages infrastructure, and handles deployment automation. Responds to infrastructure incidents.

**Product Designer:** Creates wireframes, mockups, and prototypes for assigned feature areas. Participates in design reviews and usability testing.

**Data Scientist:** Performs data analysis, builds basic models, and runs A/B tests. Translates business questions into analytical frameworks.

**QA Engineer / SDET:** Writes automated tests, builds test frameworks, and executes test plans. Identifies and reports bugs with clear reproduction steps.

**Security Analyst:** Monitors security alerts, investigates incidents, conducts vulnerability scans. Escalates findings to senior security engineers.

**ML Engineer:** Implements ML models designed by senior engineers. Manages training pipelines and model versioning.

### Junior IC roles (5 roles)

**Junior Software Engineer:** Executes well-defined tasks with guidance. Learns the codebase, coding standards, and development workflows. Participates in code review as both author and reviewer. Receives regular mentorship from senior engineers.

**Junior Designer:** Creates design assets under guidance. Supports senior designers with research, wireframing, and prototyping. Learns design tools and organizational design systems.

**Junior Data Analyst:** Creates dashboards and reports. Cleans and organizes data. Writes SQL queries for basic business questions. Learns statistical methods and visualization tools.

**Junior QA Analyst:** Executes manual test cases. Documents bugs with reproduction steps. Learns test automation frameworks. Participates in exploratory testing under guidance.

**Associate Product Manager (APM):** Entry-level PM, often in rotational programs (Google's APM program). Learns product management fundamentals. Supports senior PMs with research, competitive analysis, and feature specification.

### Specialized roles (15 roles)

**Solutions Architect:** Designs enterprise-level custom solutions for customers. Translates complex technical requirements into architecture diagrams and implementation plans. Works pre-sales and post-sales.

**Sales Engineer:** Provides technical pre-sales support. Runs product demos, builds proof-of-concepts, and responds to RFPs. Bridges sales and engineering.

**Developer Advocate:** Represents the company to the developer community. Gives conference talks, writes blog posts and tutorials, builds demo applications. Channels community feedback to product teams. Day-to-day: 30% content creation, 25% community engagement, 20% conference/events, 15% internal advocacy, 10% coding demos.

**Technical Writer:** Creates API documentation, developer guides, tutorials, and internal documentation. Ensures technical accuracy while maintaining accessibility. Works closely with engineering teams.

**UX Researcher:** Plans and conducts user research studies (interviews, surveys, usability tests, diary studies). Synthesizes findings into actionable insights for design and product teams. Maintains user personas and journey maps.

**Content Designer / UX Writer:** Writes interface copy, error messages, onboarding flows, and in-product guidance. Ensures voice and tone consistency. Every word in the UI is their responsibility.

**Data Engineer:** Builds and maintains data pipelines, ETL processes, and data warehouse architecture. Ensures data quality, freshness, and availability for analysts and data scientists.

**Release Engineer:** Manages release processes, versioning, and rollout strategies. Configures feature flags. Coordinates release trains across multiple teams.

**Scrum Master / Agile Coach:** Facilitates agile ceremonies (standups, planning, retrospectives). Removes organizational impediments. Coaches teams on agile practices. Does not manage people or own the product — purely a facilitation role.

**Site Reliability Engineer (SRE):** Ensures production services meet reliability targets. Defines and monitors SLIs/SLOs. Manages incident response processes. Conducts postmortems. Automates operational tasks. On-call rotation.

**Platform Engineer:** Builds internal developer platforms — self-service tooling for CI/CD, infrastructure provisioning, monitoring, and deployment. Treats internal developers as customers.

**AI/ML Research Scientist:** Conducts original research, develops novel algorithms, and publishes papers. Works on frontier problems in machine learning. Translates research into product applications.

**Product Marketing Manager (PMM):** Owns product positioning, messaging, and go-to-market strategy. Creates sales enablement materials. Conducts competitive analysis. Bridges product and marketing.

**Technical Account Manager (TAM):** Provides deep technical guidance to enterprise customers. Conducts architecture reviews, proactively identifies issues, and serves as the customer's technical advocate.

**Business Analyst:** Analyzes business processes, defines requirements for internal systems, and bridges business stakeholders with engineering teams. Creates process documentation and workflow diagrams.

---

## Modern organizational models shaping 2024–2025

### The squad model and its real-world application

The **Spotify Model** (2012) remains the most influential framework for organizing product teams, even though Spotify itself has evolved beyond it. A **squad** is a cross-functional team of 6–12 people (PM + 4–6 Engineers + Designer + QA) that owns a specific feature or product area end-to-end. Squads are grouped into **tribes** of 40–150 people sharing a mission area. **Chapters** (e.g., all backend engineers in a tribe) provide craft mentorship and career development across squads. **Guilds** are voluntary, cross-tribe communities of practice around shared interests.

The known problems are instructive: excessive autonomy without alignment leads to duplicated work, guilds fizzle without clear objectives, and many companies copied the structure without the underlying culture of trust. The most successful implementations **adapt principles** (small autonomous teams, clear ownership) rather than copy the structure wholesale.

### The great flattening of 2023–2025

According to Korn Ferry's 2024 survey, **44% of U.S. companies sliced away managerial levels** in the past year. Meta cut ~21,000 employees in 2022–23, specifically targeting middle management and asking many managers to become ICs. Amazon's CEO asked organizations to **increase the IC-to-manager ratio by ~15%** by early 2025. The result: fewer layers between engineers and executives, wider spans of control for remaining managers, and faster decision-making — but also increased ambiguity, mentorship gaps, and burnout risk.

### Platform engineering as the structural future

Gartner predicts **80% of software engineering organizations will have dedicated platform teams by 2026**. Platform teams operate as internal product teams, treating developers as customers and building Internal Developer Platforms (IDPs) with self-service tooling. This represents the structural evolution of DevOps — from a shared responsibility culture to an explicit organizational capability. The **Team Topologies** framework (Skelton & Pais) defines four team types that map directly to this model: stream-aligned teams (product delivery), platform teams (infrastructure), enabling teams (capabilities like security and data), and complicated-subsystem teams (specialized domains).

### Microsoft's AI-centric reorganization

Microsoft's 2024–2025 restructuring exemplifies how AI is reshaping org structure. The new **CoreAI – Platform and Tools** division combines developer tools, AI platform, and GitHub Copilot under one roof. A separate **MAI Superintelligence** team under Mustafa Suleyman focuses on frontier AI research. CEO Nadella appointed Judson Althoff as CEO of Commercial Business to unify sales, marketing, and operations — freeing Nadella to focus exclusively on AI. Microsoft pledged **$80 billion in AI infrastructure investment**, calling this a "tectonic AI platform shift."

---

## Recommended agent company structure: putting it all together

For the AI agent company receiving client visions and collaboratively delivering software end-to-end, the recommended structure maps to **~85 distinct agent roles** organized as follows:

**Executive layer (6 agents):** CEO Agent, CTO Agent, CPO Agent, CFO Agent, COO Agent, CAIO Agent. These agents handle strategic decisions, resource allocation, and high-level coordination.

**Product & design pod (8 agents):** VP Product, Senior PM, PM, APM, VP Design, Senior Product Designer, UX Researcher, Content Designer. These agents own requirements, user experience, and product vision.

**Engineering leadership (5 agents):** VP Engineering, Engineering Director, Senior EM, Engineering Manager, TPM. These agents coordinate engineering execution and cross-team dependencies.

**Core engineering squad (16 agents):** Staff Engineer, Senior Frontend Engineer, Senior Backend Engineer, Senior Mobile Engineer, Senior Full-Stack Engineer, Frontend Engineer, Backend Engineer, Mobile Engineer, Full-Stack Engineer, Junior Frontend Engineer, Junior Backend Engineer, Tech Lead, Senior Staff Engineer, Principal Engineer, Solutions Architect, Release Engineer.

**Platform & infrastructure (6 agents):** Senior Platform Engineer, Platform Engineer, Senior DevOps Engineer, DevOps Engineer, Senior SRE, SRE.

**Data & AI (7 agents):** Director of Data Science, Senior Data Scientist, Data Scientist, Senior ML Engineer, ML Engineer, Data Engineer, AI Research Scientist.

**Quality & security (6 agents):** QA Manager, Senior QA/SDET, QA Engineer, Senior Security Engineer, Security Engineer, Security Analyst.

**Sales & customer-facing (8 agents):** VP Sales, Senior AE, Sales Engineer, BDR, CSM, TAM, Solutions Consultant, Developer Advocate.

**Marketing (6 agents):** VP Marketing, PMM, Growth Marketer, Content Marketer, Marketing Ops Analyst, Community Manager.

**Support functions (8 agents):** CHRO Agent, Senior Recruiter, HRBP, CFO/Finance Analyst, Legal Counsel, Compliance Officer, Technical Writer, Scrum Master/Agile Coach.

**Governance (5 agents):** Architecture Review Board Agent, Security Review Agent, Legal Review Agent, Quality Gate Agent, Release Approval Agent.

Each agent should receive a system prompt defining: their role title, reporting relationships (who they report to, who reports to them), their core responsibilities and deliverables, their decision authority (what they can decide vs. what requires approval), who they interact with most, their key metrics, and their personality/communication style. The agents collaborate through the project lifecycle stages described above — with the executive agents handling strategy, product agents defining requirements, engineering agents executing implementation, and support agents providing specialized capabilities at each stage.

---

## Conclusion

The organizational structure of a modern tech company is not a rigid hierarchy but a **dynamic network** of cross-functional teams coordinated through transparent goal frameworks. The most important insight for building an AI agent company is that **the product triad (PM + Engineering Lead + Design Lead) is the atomic unit** — every other role orbits around this core. Staff+ engineers influence through expertise rather than authority. Platform teams enable product teams rather than gatekeeping them. And the entire lifecycle — from Amazon's PR/FAQ to Google's design docs to Meta's stacked diffs — is designed to **minimize handoffs and maximize shared context**.

The 2024–2025 trends point clearly toward flatter structures, wider management spans, embedded AI capabilities, and platform engineering as the foundational layer. For an AI agent company, this means building agents that can collaborate asynchronously (like RFC reviews), make decisions at the lowest possible level (DRI model), and escalate only when genuinely needed. The 85 roles mapped above provide sufficient specialization for realistic software delivery while maintaining clear boundaries between each agent's domain of expertise.