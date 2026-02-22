# NEXUS AI Corporate Website — Product Requirements Document (PRD)

**Author:** VP-PROD (Agent 064)
**Version:** 1.3
**Date:** 2026-02-15
**Status:** APPROVED — All open questions resolved. Ready for architecture and development.
**Changelog:**
- v1.3 — Hosting corrected to GitHub Pages (via GitHub Actions, gh-pages branch). Removed all Vercel references. Repo: `TheKingHippopotamus/195_shades_of_agents-`.
- v1.2 — All 11 open questions resolved via NEXUS-ORCHESTRATOR C-Suite routing. Decisions locked in. Tech stack finalized. Status changed to APPROVED.
- v1.1 — Reconciled with Discovery Report (DISC-RPT-2026-001). Added industry landing pages, careers section, media kit, newsletter integration, developer community section. Raised performance targets. Framework decision escalated to CTO/VP-ARCH.
- v1.0 — Initial PRD.

---

## 1. EXECUTIVE SUMMARY

### 1.1 Purpose
Build the primary digital presence for NEXUS AI — a corporate website that showcases the world's first fully autonomous AI-powered software agency. The site must communicate what NEXUS AI is, how it operates, and why prospective clients should trust 195 AI agents to deliver their software projects end-to-end.

### 1.2 Business Objectives
| Objective | Success Metric | Target |
|-----------|---------------|--------|
| Lead generation | Qualified contact form submissions per month | 50+ MQLs/month within 6 months |
| Brand credibility | Time on site, pages per session | >3 min avg, >4 pages/session |
| Agent showcase | Agent profile page views | 500+ unique views/month |
| Organic discovery | Organic search traffic | 10K+ monthly visits within 12 months |
| Conversion | Visitor-to-lead conversion rate | >2.5% |

### 1.3 Target Audiences (Priority Order)
1. **Prospective Clients** — CTOs, VPs of Engineering, VPs of Product at growth-stage to mid-enterprise companies ($10M-$500M revenue) in FinTech, HealthTech, E-commerce, SaaS, EdTech
2. **Technical Evaluators** — Senior engineers and architects doing due diligence on agency capabilities
3. **Industry Analysts & Press** — Journalists, analysts researching AI-powered agencies
4. **Potential Partners** — Technology vendors, cloud providers, consulting firms
5. **Talent** — People interested in the AI agency model and NEXUS AI's approach

---

## 2. SITEMAP & INFORMATION ARCHITECTURE

```
/                               Homepage
/about                          About NEXUS AI
/about/leadership               Leadership (C-Suite Tier 0)
/about/culture                  Culture & Values
/agents                         Agent Directory (all 195)
/agents/:code                   Individual Agent Profile (e.g., /agents/CEO)
/departments                    Department Overview (all 20)
/departments/:slug              Department Deep-Dive (e.g., /departments/engineering)
/capabilities                   Capabilities & Services Overview
/capabilities/tech-stack        Technology Stack / Technology Radar
/capabilities/lifecycle         Project Lifecycle (13 stages)
/capabilities/ai-ml             AI/ML Capabilities
/case-studies                   Case Studies Index (CMS)
/case-studies/:slug             Individual Case Study (CMS)
/how-we-work                    How We Work (process overview)
/network                        Agent Network Visualization (interactive)
/blog                           Blog Index (CMS)
/blog/:slug                     Individual Blog Post (CMS)
/contact                        Contact / Inquiry Form
/industries                      Industry Solutions Overview
/industries/:slug               Industry Landing Page (FinTech, HealthTech, E-commerce, SaaS, EdTech)
/careers                        Careers — Culture, Values, Open Roles
/press                          Media Kit & Press Resources
/developers                     Developer Community Hub
/privacy                        Privacy Policy
/terms                          Terms of Service
```

---

## 3. PAGE-BY-PAGE FEATURE SPECIFICATION

### 3.1 HOMEPAGE (`/`)

**Purpose:** First impression. Communicate what NEXUS AI is, why it's different, and drive visitors deeper into the site or to contact.

**Sections (top to bottom):**

| Section | Content | Interactions |
|---------|---------|-------------|
| **Hero** | Headline: "195 AI Agents. One Agency. Your Vision, Built End-to-End." Subhead explaining the concept. Primary CTA: "See How We Work" / Secondary CTA: "Talk to Us" | Animated background showing agent network nodes connecting in real-time. Parallax scroll. |
| **The Problem** | 2-3 pain points prospective clients face: talent shortages, slow delivery, coordination overhead | Scroll-triggered fade-in animations |
| **How We're Different** | Three pillars: (1) 195 Specialized Agents, (2) 13-Stage Lifecycle, (3) Autonomous Collaboration | Icon animations on scroll, expandable detail cards |
| **Agent Showcase** | Rotating carousel of 6-8 featured agents with avatar, nickname, role, one-liner personality | Click-to-profile links, auto-rotate with pause-on-hover |
| **Capabilities Overview** | Grid of service categories: Frontend, Backend, Mobile, AI/ML, Cloud, Security, Design, Data | Hover effects revealing tech stack badges |
| **By the Numbers** | Key stats: 195 agents, 20 departments, 10 tiers, 13 lifecycle stages, 40+ technologies | Animated counter on scroll-into-view |
| **Client Journey Preview** | Simplified 5-step client lifecycle: Attract > Qualify > Close > Deliver > Grow | Horizontal scroll timeline with stage descriptions |
| **Social Proof** | Testimonials / case study highlights (placeholder for CMS content) | Card carousel |
| **CTA Section** | "Ready to Build Something?" with contact form embed or link | Sticky CTA also appears in nav after scroll past hero |
| **Footer** | Navigation, social links, legal links, newsletter signup | Standard footer |

**Technical Notes:**
- Hero animation: WebGL or Three.js particle network (lightweight, <200KB), fallback to CSS animation
- Above-the-fold load time target: <1.5s on 4G
- Full page: Lighthouse score >90 (Performance, Accessibility, SEO, Best Practices)

---

### 3.2 ABOUT PAGE (`/about`)

**Purpose:** Tell the story of NEXUS AI — what it is, why it exists, how it's structured.

**Sections:**

| Section | Content |
|---------|---------|
| **Mission Statement** | "NEXUS AI is a full-service AI-powered software agency. Clients bring a vision, and our 195 autonomous AI agents plan, design, develop, test, deploy, and maintain it end-to-end." |
| **Origin Story** | How NEXUS AI was conceived — the insight that FAANG+ organizational models could be replicated with AI agents |
| **Organizational DNA** | Based on real FAANG+ models (Google, Meta, Microsoft, Amazon, Apple, Salesforce), Spotify squad model, dual-track career ladders |
| **Interactive Org Chart** | Visual hierarchy from CEO down through all 10 tiers |
| **Department Grid** | 20 department cards with agent count, key roles, and link to department page |
| **Tier System Explainer** | Visual ladder showing Tier 0 (C-Suite) through Tier 9 (Special Agents) with example agents at each level |

---

### 3.3 LEADERSHIP PAGE (`/about/leadership`)

**Purpose:** Spotlight the C-Suite (Tier 0) — the 11 executive agents that set direction.

**Content per leader:**
- Avatar (generated cinematic portrait)
- Name/Code (e.g., CEO — Agent 001)
- Nickname and age from `<personal>` section
- Role description (from `<core_responsibilities>`)
- Key personality traits (from `<personality>`)
- "About Me" narrative (from `<about_me>`)
- Direct reports listed with links
- Key metrics they own

**Layout:** Full-width cards with alternating left/right layout, or a grid with modal detail view.

---

### 3.4 AGENT DIRECTORY (`/agents`)

**Purpose:** Browseable, searchable, filterable catalog of all 195 agents. The crown jewel of the site.

**Features:**

| Feature | Specification |
|---------|--------------|
| **Search** | Real-time search by agent name, code, role title, department, or nickname. Fuzzy matching. |
| **Filter: Department** | Multi-select dropdown of all 20 departments |
| **Filter: Tier** | Multi-select dropdown of Tiers 0-9 |
| **Filter: Reports To** | Search/select a manager to see their direct reports |
| **Sort** | By agent number (default), alphabetical by code, alphabetical by role, by department |
| **View Toggle** | Grid view (cards) / List view (table) / Network view (graph) |
| **Agent Card** | Avatar thumbnail, agent number, code, role title, department badge, tier badge, nickname |
| **Pagination / Virtual Scroll** | Handle 195 agents efficiently — virtual scroll for performance |
| **URL State** | Filters persist in URL query params for shareability |

**Data Source:** Agent markdown files parsed at build time into a JSON index. Each agent profile page is statically generated.

---

### 3.5 INDIVIDUAL AGENT PROFILE (`/agents/:code`)

**Purpose:** Deep-dive into a single agent — their personality, responsibilities, relationships, and "personal" side.

**Sections:**

| Section | Source |
|---------|--------|
| **Header** | Avatar, agent number, code, full role title, department, tier badge |
| **Personality** | From `<personality>` tag — rendered as a styled quote or narrative block |
| **Core Responsibilities** | From `<core_responsibilities>` — numbered list |
| **Decision Authority** | From `<decision_authority>` — two columns: "Can Decide" vs "Must Escalate" |
| **Interaction Map** | From `<interaction_map>` — visual showing primary and secondary connections with links to those agents |
| **Output Standards** | From `<output_standards>` — code-styled block |
| **Success Metrics** | From `<success_metrics>` — metric cards |
| **Personal Section** | From `<personal>` — nickname, age, about_me, strengths, weaknesses, working_with_me |
| **Reporting Chain** | Visual breadcrumb: Board > CEO > CTO > VP-ENG > ... > This Agent |
| **Related Agents** | Cards for direct reports, peers in same department, and reports_to manager |

**SEO:** Each agent page has unique meta title/description. Structured data (JSON-LD) for person/role.

---

### 3.6 DEPARTMENT OVERVIEW (`/departments`)

**Purpose:** Show the 20 departments as a navigable grid.

**Layout:** 20 cards in a responsive grid (4x5 on desktop, 2-col on tablet, 1-col on mobile).

**Each Card Contains:**
- Department number and name
- Agent count
- Number range (e.g., "Agents 012-051")
- Brief description of department mission
- Key roles listed (VP, Directors)
- Link to department deep-dive

---

### 3.7 DEPARTMENT DEEP-DIVE (`/departments/:slug`)

**Purpose:** Full breakdown of a single department.

**Sections:**

| Section | Content |
|---------|---------|
| **Department Header** | Name, agent count, department number, mission statement |
| **Leadership** | VP and Director cards with avatars and role summaries |
| **Org Sub-Chart** | Hierarchical tree of all agents in this department |
| **Agent Roster** | Filterable list/grid of all agents in the department |
| **Capabilities** | What this department delivers (derived from agent responsibilities) |
| **Tech Stack** | Technologies this department uses (from 08-TECH-STACK-DEFINITION.md) |
| **How They Collaborate** | Cross-department interaction patterns |

---

### 3.8 CAPABILITIES & SERVICES (`/capabilities`)

**Purpose:** What NEXUS AI can build. Organized by service category.

**Service Categories:**
1. **Web Application Development** — React, Next.js, Vue, Nuxt (Frontend dept + Backend dept)
2. **Mobile Application Development** — React Native, Native iOS/Android (Mobile team)
3. **AI/ML Solutions** — LLM integration, custom models, MLOps (Data Science & AI/ML dept)
4. **Cloud & Infrastructure** — AWS, GCP, Azure, Kubernetes (Platform & Infrastructure dept)
5. **Data Engineering** — Pipelines, warehousing, analytics (Data team)
6. **UI/UX Design** — Research, design systems, prototyping (Design dept)
7. **Security** — AppSec, pentesting, compliance (Security dept)
8. **Quality Assurance** — Automated testing, performance, accessibility (QA dept)

**Each Category Shows:**
- Description of capability
- Key agents involved (with links)
- Technology stack used
- Lifecycle stages where this capability activates

---

### 3.9 TECHNOLOGY STACK / RADAR (`/capabilities/tech-stack`)

**Purpose:** Interactive Technology Radar visualization.

**Features:**
- Radar chart with rings: ADOPT, TRIAL, ASSESS, HOLD, AVOID
- Segments: Frontend, Backend, Database, Mobile, AI/ML, Infrastructure, DevOps
- Click a dot to see technology details, responsible agents, and governance level
- Data sourced from `08-TECH-STACK-DEFINITION.md`
- Filter by segment or status

---

### 3.10 PROJECT LIFECYCLE (`/capabilities/lifecycle`)

**Purpose:** Visual walkthrough of the 13-stage project lifecycle.

**Visualization:** Horizontal or vertical timeline with expandable stages.

**Each Stage Shows:**
- Stage number and name
- Objective and duration
- Primary agents activated (with links to profiles)
- Outputs produced
- Gate criteria for progression
- Data sourced from `01-PROJECT-LIFECYCLE-MAP.md`

---

### 3.11 HOW WE WORK (`/how-we-work`)

**Purpose:** Client-facing explanation of the engagement model.

**Sections:**
1. **Client Journey** — 5-phase overview: Attract > Qualify > Close > Deliver > Grow (from `09-CLIENT-ENGAGEMENT-PLAYBOOK.md`)
2. **Communication Protocols** — How agents communicate (simplified from `00-INTERACTION-PROTOCOLS.md`)
3. **Escalation & Governance** — How quality is ensured (Tier 8 governance agents)
4. **Transparency** — How clients get visibility into project progress

---

### 3.12 AGENT NETWORK VISUALIZATION (`/network`)

**Purpose:** Interactive graph visualization showing all 195 agents and their relationships.

**Technical Specification:**

| Aspect | Specification |
|--------|--------------|
| **Library** | D3.js force-directed graph or Three.js 3D network |
| **Nodes** | 195 nodes, one per agent. Size = tier (larger = higher tier). Color = department. |
| **Edges** | `reports_to` relationships (195 edges). Optional: `interaction_map` connections. |
| **Interactions** | Click node to see agent summary popup. Double-click to navigate to profile. Drag to rearrange. Zoom/pan. |
| **Filters** | Toggle departments on/off. Filter by tier. Highlight reporting chain for selected agent. |
| **Layout Options** | Force-directed (default), hierarchical tree, radial |
| **Performance** | WebGL rendering for smooth 60fps with 195 nodes. Lazy-load detail data on hover. |
| **Mobile** | Simplified 2D version with touch gestures |

---

### 3.13 CONTACT / INQUIRY (`/contact`)

**Purpose:** Convert interested visitors to qualified leads.

**Form Fields:**
| Field | Type | Required |
|-------|------|----------|
| Full Name | Text | Yes |
| Email | Email | Yes |
| Company | Text | Yes |
| Job Title | Text | Yes |
| Company Size | Select (1-10, 11-50, 51-200, 201-1000, 1000+) | Yes |
| Industry | Select (FinTech, HealthTech, E-commerce, SaaS, EdTech, Other) | Yes |
| Project Type | Multi-select (Web App, Mobile App, AI/ML, Data Platform, Full-Stack, Other) | Yes |
| Budget Range | Select ($50K-$100K, $100K-$250K, $250K-$500K, $500K+) | Optional |
| Timeline | Select (ASAP, 1-3 months, 3-6 months, 6+ months) | Optional |
| Message | Textarea | Yes |

**Post-Submission:**
- Success message with expected response time (24 hours)
- Email notification to CRO (007) + VP-SALES (116)
- Lead entered into CRM pipeline
- Auto-response email to prospect

---

### 3.14 INDUSTRY LANDING PAGES (`/industries/:slug`)

**Purpose:** SEO-optimized landing pages for each ICP vertical. Critical for targeted lead generation and paid campaign destinations.

**Added in v1.1** per Discovery Report — stakeholder requirement from Sales & Revenue (Agents 116-125) and Marketing (Agents 126-134).

**Pages (5):**
1. `/industries/fintech` — FinTech Solutions
2. `/industries/healthtech` — HealthTech Solutions
3. `/industries/ecommerce` — E-commerce Solutions
4. `/industries/saas` — SaaS Solutions
5. `/industries/edtech` — EdTech Solutions

**Each Page Contains:**
| Section | Content |
|---------|---------|
| **Industry Hero** | Industry-specific headline, pain points, CTA |
| **Challenges** | 3-4 industry-specific challenges NEXUS AI solves |
| **Relevant Capabilities** | Which of the 8 service categories apply |
| **Relevant Agents** | Featured agents with industry-relevant expertise |
| **Technology Fit** | Tech stack elements most relevant to this industry |
| **Case Studies** | Industry-specific case studies (CMS-managed, placeholder until available) |
| **Compliance/Regulatory** | Industry-specific compliance capabilities (HIPAA for HealthTech, PCI-DSS for FinTech, etc.) |
| **CTA** | Industry-tailored contact form with pre-selected industry field |

**SEO:** Target keywords per industry (e.g., "AI fintech development company", "AI healthcare app development").

**Phase:** Phase 2 (Sprint 3-4)

---

### 3.15 CAREERS PAGE (`/careers`)

**Purpose:** Talent attraction page showcasing the unique "AI agent family" culture.

**Added in v1.1** per Discovery Report — stakeholder requirement from CHRO (008) and People/HR (Agents 143-149).

**Sections:**
| Section | Content |
|---------|---------|
| **Hero** | "Join the World's First AI Agency" — culture-forward messaging |
| **Culture & Values** | The agent family concept, collaboration philosophy, innovation culture |
| **How We Work** | Brief overview of agent collaboration model |
| **Benefits** | What it means to be part of NEXUS AI |
| **Open Roles** | Current openings (CMS-managed or integrated with ATS) |
| **Agent Testimonials** | Quotes from agents about working at NEXUS AI (from `<working_with_me>` sections) |
| **Diversity & Inclusion** | Statement on inclusive practices |
| **CTA** | Application form or link to ATS |

**Phase:** Phase 2 (Sprint 3-4)

---

### 3.16 MEDIA KIT / PRESS PAGE (`/press`)

**Purpose:** Self-service resource page for journalists, analysts, and press contacts.

**Added in v1.1** per Discovery Report — stakeholder requirement from PR-MGR (133).

**Content:**
- Company overview (one-pager)
- Key statistics infographic (195 agents, 20 departments, 10 tiers)
- Executive bios (C-Suite agents)
- Brand assets (logos, color palette, brand guidelines) — downloadable ZIP
- Press releases (CMS-managed)
- Media mentions / press coverage links
- Press contact: PR-MGR (133) contact form or email
- High-resolution agent avatar samples

**Phase:** Phase 2 (Sprint 3-4)

---

### 3.17 DEVELOPER COMMUNITY HUB (`/developers`)

**Purpose:** Engage the developer audience, showcase technical credibility, and build community.

**Added in v1.1** per Discovery Report — stakeholder requirement from DIR-DEVREL (169) and Developer Relations (Agents 169-173).

**Sections:**
| Section | Content |
|---------|---------|
| **Overview** | NEXUS AI's commitment to the developer community |
| **Open Source** | Open-source project listings with GitHub links |
| **Technical Tutorials** | Curated guides and code examples (CMS-managed) |
| **Conference Talks** | Embedded recordings of conference presentations |
| **Community Links** | Discord/forum links, community guidelines |
| **Developer Blog** | Filtered view of engineering/technical blog posts |
| **SDK/API Docs** | Links to API documentation and SDKs |
| **Newsletter** | Developer-focused newsletter signup |

**Phase:** Phase 3 (Sprint 5-6)

---

### 3.18 NEWSLETTER INTEGRATION (Site-Wide)

**Purpose:** Email capture for lead nurturing and content distribution.

**Added in v1.1** per Discovery Report — stakeholder requirement from DEMGEN (130).

**Placement:**
- Footer (all pages) — simple email-only signup
- Blog post end — contextual CTA after reading
- Homepage — dedicated section
- Developer hub — developer-focused variant

**Integration:** Email marketing platform (Mailchimp, ConvertKit, or HubSpot email) with segmentation by signup source and interest area.

**Phase:** Phase 2 (Sprint 3-4), integrated as footer goes live

---

### 3.19 BLOG (`/blog`) — CMS-Managed

**Purpose:** Thought leadership, SEO content, case study narratives.

**Features:**
- Category filtering (Engineering, AI/ML, Design, Process, Case Studies)
- Author attribution (linked to agent profiles)
- Reading time estimate
- Related posts
- Social sharing
- Newsletter CTA embedded in posts

---

### 3.20 CASE STUDIES (`/case-studies`) — CMS-Managed

**Purpose:** Social proof through detailed project narratives.

**Case Study Template:**
- Client overview (anonymized if needed)
- Challenge description
- NEXUS AI approach (which agents, which lifecycle stages)
- Technology used
- Results with metrics
- Client quote
- Team composition (agent cards)

---

## 4. USER STORIES

### 4.1 Prospective Client
| ID | User Story | Acceptance Criteria |
|----|-----------|-------------------|
| UC-01 | As a CTO evaluating agencies, I want to understand what NEXUS AI is and how it differs from traditional agencies, so I can decide if it's worth a conversation. | Homepage clearly explains the AI agent model within 10 seconds of landing. |
| UC-02 | As a VP of Engineering, I want to see the technical depth of the engineering team, so I can trust they can handle my project. | Agent directory shows 40 engineering agents with specific technology expertise. Tech stack page shows approved technologies with governance levels. |
| UC-03 | As a prospective client, I want to see the full project lifecycle, so I can understand what engagement looks like from start to finish. | Lifecycle page shows all 13 stages with agents, outputs, and gates. |
| UC-04 | As a prospective client, I want to submit an inquiry with my project details, so I can start a conversation with NEXUS AI. | Contact form captures all qualification data. Confirmation shown. Response within 24 hours. |
| UC-05 | As a VP of Product, I want to see case studies of similar projects, so I can assess NEXUS AI's track record. | Case studies page shows projects filterable by industry and project type. |

### 4.2 Technical Evaluator
| ID | User Story | Acceptance Criteria |
|----|-----------|-------------------|
| TE-01 | As a senior engineer, I want to browse the technology radar, so I can see if NEXUS AI uses modern, production-grade tools. | Tech radar is interactive with ADOPT/TRIAL/ASSESS/HOLD/AVOID rings and clickable technologies. |
| TE-02 | As an architect, I want to explore the agent network graph, so I can understand how 195 agents coordinate on a project. | Network visualization shows all 195 nodes with department coloring, tier sizing, and reporting edges. Clickable to agent profiles. |
| TE-03 | As a technical evaluator, I want to read individual agent profiles, so I can assess the depth of specialization. | Each agent profile shows personality, responsibilities, decision authority, interaction map, and success metrics. |

### 4.3 Journalist / Analyst
| ID | User Story | Acceptance Criteria |
|----|-----------|-------------------|
| JA-01 | As a journalist researching AI agencies, I want to quickly understand the scale and structure of NEXUS AI, so I can write an accurate article. | About page provides clear org chart, department count, agent count, and tier system explainer. Key stats are prominent. |
| JA-02 | As an analyst, I want to explore the organizational hierarchy, so I can compare it to traditional agency structures. | Interactive org chart allows drill-down from CEO to any agent. Department pages show full sub-hierarchies. |

### 4.4 Developer / Potential Collaborator
| ID | User Story | Acceptance Criteria |
|----|-----------|-------------------|
| DC-01 | As a developer, I want to understand NEXUS AI's approach to AI agent orchestration, so I can learn from their model. | How We Work page explains communication protocols, lifecycle management, and governance. |
| DC-02 | As a potential partner, I want to see what technologies NEXUS AI has adopted, so I can assess integration compatibility. | Tech stack page is comprehensive and up-to-date, sourced from canonical `08-TECH-STACK-DEFINITION.md`. |

---

## 5. INTERACTIVE FEATURES SPECIFICATION

### 5.1 Agent Network Graph
- **Type:** Force-directed graph (D3.js) with optional 3D mode (Three.js)
- **Nodes:** 195, colored by department (20 colors), sized by tier
- **Edges:** `reports_to` relationships (hierarchical) + optional `interaction_map` connections
- **Interactions:** Click (summary popup), double-click (navigate), drag, zoom, pan, filter
- **Performance target:** 60fps on modern browsers, <3s initial render
- **Fallback:** Static SVG org chart for older browsers / low-power devices

### 5.2 Interactive Org Chart
- **Type:** Collapsible tree (D3.js hierarchy layout)
- **Root:** CEO (001)
- **Expand/collapse:** Click any node to expand/collapse children
- **Detail panel:** Side panel shows agent summary on selection
- **Navigation:** Click-through to agent profile pages
- **Breadcrumb:** Shows current path in hierarchy

### 5.3 Technology Radar
- **Type:** Radar/bullseye chart (D3.js or custom SVG)
- **Rings:** ADOPT (center), TRIAL, ASSESS, HOLD, AVOID (outer)
- **Quadrants:** Frontend, Backend, Data/AI, Infrastructure
- **Interactions:** Click dots for detail cards. Filter by quadrant. Toggle ring visibility.
- **Data source:** Parsed from `08-TECH-STACK-DEFINITION.md` at build time

### 5.4 Project Lifecycle Timeline
- **Type:** Horizontal scrolling timeline
- **Stages:** 13 stages with expandable detail panels
- **Agent activation:** Shows which agents light up at each stage
- **Animation:** Stage transitions animate agent nodes appearing/disappearing
- **Interactive:** Click stage to expand full detail with agent cards and outputs

### 5.5 Search (Site-Wide)
- **Type:** Command palette (Cmd+K) + search page
- **Scope:** Agents, departments, capabilities, blog posts, case studies
- **Engine:** Client-side search index built at compile time (Pagefind, FlexSearch, or Lunr)
- **Results:** Categorized results with instant preview
- **Performance:** <100ms query response for client-side index

### 5.6 Micro-Interactions & Animations
- **Scroll-triggered animations:** Fade-in, slide-up for content sections (Intersection Observer)
- **Agent card hover:** Subtle scale + shadow elevation + avatar glow by department color
- **Page transitions:** Smooth cross-fade between pages (View Transitions API or Framer Motion)
- **Loading states:** Skeleton screens for dynamic content, shimmer effect
- **Dark/Light mode:** System-preference detection + manual toggle, persisted in localStorage

---

## 6. CONTENT MANAGEMENT STRATEGY

### 6.1 Git-Versioned Content (Static, Build-Time)
| Content Type | Source | Update Frequency |
|-------------|--------|-----------------|
| Agent profiles (195) | `agents/{dept}/{NUM}-{CODE}.md` | Rare (org changes only) |
| Department info | Derived from agent files + hierarchy doc | Rare |
| Tech stack / radar | `08-TECH-STACK-DEFINITION.md` | Quarterly |
| Project lifecycle | `01-PROJECT-LIFECYCLE-MAP.md` | Rare |
| Org hierarchy | `00-COMPANY-HIERARCHY-V3.md` | Rare |
| Interaction protocols | `00-INTERACTION-PROTOCOLS.md` | Rare |
| Escalation rules | `00-ESCALATION-RULES.md` | Rare |

**Build pipeline:** Markdown parser extracts `<system_prompt>` XML at build time, generates JSON index, and produces static pages.

### 6.2 CMS-Managed Content (Dynamic, Runtime)
| Content Type | CMS Needs | Update Frequency |
|-------------|-----------|-----------------|
| Blog posts | Rich text editor, categories, author (agent) attribution, SEO fields | 2-4x/week |
| Case studies | Structured template (challenge, approach, results, metrics), media uploads | 1-2x/month |
| Testimonials | Quote, attribution, company, optional photo | As received |
| Press mentions | Title, publication, date, link | As received |
| FAQs | Question/answer pairs, categorized | Monthly |

**CMS Recommendation:** Headless CMS (Sanity, Contentful, or Strapi) with webhook-triggered rebuilds. Content authors use CMS dashboard; site rebuilds on publish.

### 6.3 Content Pipeline
```
Agent .md files ──┐
Hierarchy .md ────┤
Tech stack .md ───┼──→ Build-time parser ──→ JSON index ──→ Static pages
Lifecycle .md ────┤
Protocols .md ────┘

CMS (blog, cases) ──→ API / Webhook ──→ GitHub Actions rebuild ──→ Static pages deployed to gh-pages
```

---

## 7. NON-FUNCTIONAL REQUIREMENTS

### 7.1 Performance

> **Updated v1.1:** Targets raised from >90 to >95 Lighthouse and <150KB JS bundle to align with Discovery Report. This site represents an engineering agency — hitting >95 sends a stronger credibility signal. The Astro islands architecture makes these targets achievable with less effort than a full-SPA approach.

| Metric | Target |
|--------|--------|
| Lighthouse Performance score | >95 |
| Lighthouse Accessibility score | >95 |
| Lighthouse Best Practices score | >95 |
| Lighthouse SEO score | >95 |
| First Contentful Paint (FCP) | <1.2s |
| Largest Contentful Paint (LCP) | <2.5s |
| Cumulative Layout Shift (CLS) | <0.1 |
| Interaction to Next Paint (INP) | <200ms |
| Total JS bundle size (initial) | <150KB |
| Time to Interactive | <3.5s |
| Agent directory render (195 items) | <500ms |
| Network graph initial render | <3s |

### 7.2 Accessibility (WCAG 2.1 AA)
- All interactive elements keyboard-navigable
- Screen reader compatible (ARIA labels, semantic HTML)
- Color contrast ratio minimum 4.5:1 (text), 3:1 (large text/UI)
- Focus indicators visible
- Alt text for all images (agent avatars, diagrams)
- Reduced motion mode (respects `prefers-reduced-motion`)
- Network visualization has accessible alternative (table view)

### 7.3 SEO
- Server-side rendered or statically generated (no client-only rendering for content pages)
- Unique `<title>` and `<meta description>` per page
- Structured data (JSON-LD): Organization, Person (agents), Article (blog), FAQPage
- Sitemap.xml auto-generated (200+ pages)
- robots.txt properly configured
- Open Graph and Twitter Card meta tags
- Canonical URLs

### 7.4 Responsive Design
- Breakpoints: Mobile (<640px), Tablet (640-1024px), Desktop (>1024px), Large (>1440px)
- Mobile-first design approach
- Touch-friendly interactions (minimum 44px touch targets)
- Network visualization adapts: 3D on desktop, simplified 2D on mobile

### 7.5 Browser Support
- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Progressive enhancement for older browsers
- WebGL fallback for network visualization

### 7.6 Security
- HTTPS enforced
- CSP headers configured
- Form submissions rate-limited and CSRF-protected
- No sensitive data in client-side code
- Input sanitization on contact form
- Dependency scanning in CI/CD

---

## 8. TECHNICAL RECOMMENDATIONS

### 8.1 Recommended Tech Stack (aligned with 08-TECH-STACK-DEFINITION.md)

> **FRAMEWORK DECISION: CONFIRMED** — CTO (002) and VP-ARCH (014) have approved **Astro + React Islands** as the framework for this project. Astro's islands architecture ships zero JS by default and hydrates only interactive components (agent explorer, network graph, search), naturally delivering smaller bundles and higher Lighthouse scores. This is the optimal choice for a content-heavy site with 200+ static pages and selective interactivity.

| Layer | Technology | Status | Rationale |
|-------|-----------|--------|-----------|
| Framework | **Astro** | CONFIRMED | Static-first, islands architecture, ships zero JS by default, native View Transitions API |
| Interactive Islands | **React** | CONFIRMED | Component ecosystem, team expertise, used only where interactivity is needed |
| Language | **TypeScript (strict mode)** | CONFIRMED | Mandatory per tech stack definition |
| Styling | **Tailwind CSS + shadcn/ui** | CONFIRMED | Approved stack, rapid UI development, accessible components |
| Animations | **Framer Motion** | CONFIRMED | React-native animation library, View Transitions |
| Data Visualization | **D3.js** | CONFIRMED | Network graph, org chart, tech radar |
| 3D (optional) | **Three.js / React Three Fiber** | Phase 3 | Hero animation, 3D network mode ("Could Have") |
| Search | **Pagefind** | CONFIRMED | Build-time index, client-side search |
| CMS | **Sanity** | CONFIRMED | Headless, real-time preview, GROQ queries, structured content |
| Hosting | **GitHub Pages** | CONFIRMED | Static build via GitHub Actions, deployed to gh-pages branch. Repo: `TheKingHippopotamus/195_shades_of_agents-` |
| Analytics | **Plausible + GA4** | CONFIRMED | Privacy-friendly primary + detailed tracking |
| Forms | **React Hook Form + Zod** | CONFIRMED | Validation per tech stack |
| Calendar | **Cal.com** | CONFIRMED | Open-source, demo booking for sales pipeline |
| CRM | **HubSpot Free** | CONFIRMED | Lead capture, form submissions, pipeline tracking |
| Email Marketing | **ConvertKit** | CONFIRMED | Newsletter signup, nurture sequences |
| Cookie Consent | **CookieYes** | CONFIRMED | GDPR/CCPA compliance |
| Testing | **Vitest + Playwright** | CONFIRMED | Unit + E2E per tech stack |
| Domain | **nexus-ai.com** | CONFIRMED | Primary domain |

### 8.2 Build-Time Data Pipeline
```
1. Parse all 195 agent .md files
2. Extract <system_prompt> XML content
3. Parse XML into structured JSON (agent_identity, personality, responsibilities, etc.)
4. Build search index
5. Generate static pages for each agent, department, capability
6. Output: /public/data/agents.json, /public/data/departments.json, /public/data/tech-radar.json
```

### 8.3 Content Model (Agent JSON)
```json
{
  "agent_number": "001",
  "code": "CEO",
  "role": "Chief Executive Officer",
  "department": "Executive Leadership",
  "department_number": "01",
  "reports_to": "Board/Client",
  "tier": { "number": 0, "label": "C-Suite" },
  "personality": "...",
  "core_responsibilities": ["..."],
  "decision_authority": {
    "can_decide": ["..."],
    "must_escalate": ["..."]
  },
  "interaction_map": {
    "primary": [{ "agent": "CTO", "frequency": "Daily", "context": "..." }],
    "secondary": [{ "agent": "CMO", "frequency": "Bi-weekly", "context": "..." }]
  },
  "output_standards": "...",
  "success_metrics": ["..."],
  "personal": {
    "nickname": "...",
    "age": 42,
    "about_me": "...",
    "what_i_bring": "...",
    "my_strengths": ["..."],
    "my_weaknesses": ["..."],
    "working_with_me": "..."
  },
  "avatar_url": "/avatars/001-CEO.png"
}
```

---

## 9. DESIGN REQUIREMENTS

### 9.1 Brand Attributes
- **Professional but not corporate** — approachable, modern, tech-forward
- **Intelligent** — the design should feel like it was made by an AI agency
- **Structured** — reflects the organizational precision of 195 agents
- **Dynamic** — subtle animations and interactions that bring the agent ecosystem to life
- **Dark-mode first** — tech audience preference, with light mode available

### 9.2 Design System Deliverables
- Color palette (primary, secondary, 20 department accent colors, semantic colors)
- Typography scale (headings, body, code, labels)
- Component library (buttons, cards, badges, forms, navigation, modals, tooltips)
- Agent card component (reusable across directory, department pages, related agents)
- Department badge component (color + icon per department)
- Tier badge component (visual hierarchy indicator)
- Responsive grid system
- Animation tokens (duration, easing, delay patterns)
- Icon set (department icons, tier icons, technology icons)

### 9.3 Key Visual Elements
- **Agent Avatars:** Cinematic 8K portraits generated by `nexus_avatar_generator.py` — each agent has a unique visual identity
- **Department Colors:** 20 distinct, accessible colors mapped to departments for consistent visual coding across the entire site
- **Network Graph:** The hero visual asset — a living, breathing graph of 195 connected agents
- **Org Chart:** Clean hierarchical visualization using the established tier/department color system

---

## 10. ANALYTICS & TRACKING

### 10.1 Key Events to Track
| Event | Description |
|-------|------------|
| `page_view` | Every page view with path, referrer, UTM params |
| `agent_profile_view` | Which agent profiles are most viewed |
| `department_view` | Which departments attract most interest |
| `network_interaction` | Clicks, filters, and time spent on network visualization |
| `tech_radar_interaction` | Technology clicks and filter usage |
| `contact_form_start` | User begins filling contact form |
| `contact_form_submit` | Successful form submission |
| `contact_form_abandon` | Form started but not submitted (with field reached) |
| `search_query` | What users search for (insights for content strategy) |
| `cta_click` | Which CTAs drive conversions |
| `blog_read` | Blog post reads with scroll depth |
| `case_study_read` | Case study reads with scroll depth |

### 10.2 Conversion Funnel
```
Landing (any page) → Browse (2+ pages) → Engage (agent/dept/network) → Convert (contact form)
```

---

## 11. LAUNCH PLAN (PHASED)

### Phase 1: Foundation (Sprint 1-2)
- Homepage, About, Contact
- Agent directory (search, filter, grid/list view)
- 10 sample agent profile pages
- Responsive, dark/light mode
- Basic SEO setup

### Phase 2: Full Content (Sprint 3-4)
- All 195 agent profile pages (static generation)
- All 20 department pages
- Capabilities pages (services, tech stack, lifecycle)
- How We Work page
- Leadership page
- 5 Industry landing pages (FinTech, HealthTech, E-commerce, SaaS, EdTech) *[v1.1]*
- Careers page *[v1.1]*
- Media Kit / Press page *[v1.1]*
- Newsletter integration (footer + blog + homepage) *[v1.1]*

### Phase 3: Interactive Features (Sprint 5-6)
- Network visualization (D3.js)
- Interactive org chart
- Technology radar
- Project lifecycle timeline
- Site-wide search (Cmd+K)
- Developer Community Hub *[v1.1]*

### Phase 4: Content & Polish (Sprint 7-8)
- CMS integration (blog, case studies)
- Animations and micro-interactions
- Performance optimization
- Accessibility audit
- SEO audit and structured data
- Analytics integration

### Phase 5: Launch
- Security review (SEC-REVIEW agent 182)
- QA gate (QA-GATE agent 184)
- Release approval (REL-APPROVE agent 185)
- Production deployment
- Marketing launch campaign

---

## 12. DECISION LOG (ALL RESOLVED)

> **Updated v1.2:** All open questions resolved via NEXUS-ORCHESTRATOR (195) C-Suite routing. No outstanding decisions remain.

| # | Question | Decision | Decided By | Date |
|---|----------|----------|-----------|------|
| 1 | Framework | **Astro + React Islands** | CTO (002) + VP-ARCH (014) | 2026-02-15 |
| 2 | Domain | **nexus-ai.com** | CEO (001) | 2026-02-15 |
| 3 | Avatar generation | **Sprint 1** (generate during foundation phase) | VP-DES (074) | 2026-02-15 |
| 4 | Case study content | **Post-launch** (placeholder templates during build) | CMO (006) + CRO (007) | 2026-02-15 |
| 5 | Analytics platform | **Plausible + GA4** | CISO (009) | 2026-02-15 |
| 6 | Blog authorship model | **Agent-attributed** (CONTENT-MKT 129 manages editorial calendar, posts attributed to relevant agents) | CMO (006) | 2026-02-15 |
| 7 | Internationalization | **English only for V1** | CPO (003) | 2026-02-15 |
| 8 | Email marketing platform | **ConvertKit** | VP-MKT (126) + DEMGEN (130) | 2026-02-15 |
| 9 | CRM integration | **HubSpot Free** | CRO (007) + REVOPS (125) | 2026-02-15 |
| 10 | Calendar booking | **Cal.com** | VP-SALES (116) | 2026-02-15 |
| 11 | Cookie consent | **CookieYes** | CLO (010) + CISO (009) | 2026-02-15 |
| 12 | CMS | **Sanity** | CTO (002) — consensus PRD + Discovery | 2026-02-15 |
| 13 | 3D network mode | **Phase 3 "Could Have"** | VP-PROD (064) + DISC-AGENT (187) | 2026-02-15 |

---

## 13. SUCCESS CRITERIA

The NEXUS AI Corporate Website is successful when:

1. A prospective CTO can land on the homepage and understand what NEXUS AI is within 10 seconds
2. A technical evaluator can explore all 195 agents, their specializations, and the technology stack in under 5 minutes
3. The network visualization creates a "wow moment" that demonstrates the scale and coordination of the agent system
4. Contact form submissions generate 50+ MQLs per month within 6 months of launch
5. The site scores >90 on all four Lighthouse categories
6. Every page is accessible to WCAG 2.1 AA standards
7. The site loads in under 2 seconds on a 4G connection
8. SEO drives 10K+ organic visits per month within 12 months

---

*This PRD is a living document. It will be refined based on discovery findings, design explorations, and engineering feasibility assessments.*

**Next Steps:**
- Discovery Lead (DISC-AGENT) to validate requirements against market research
- Design team (VP-DES, DIR-DES) to begin design system and wireframes
- Engineering (VP-ENG, DIR-FE) to assess technical feasibility and estimate
- Stakeholder review for open questions (Section 12)
