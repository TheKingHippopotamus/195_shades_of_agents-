# NEXUS AI Corporate Website — Technical Architecture Document

**Author:** CTO (Agent 002)
**Version:** 2.1
**Date:** 2026-02-15
**Status:** APPROVED — Framework decision confirmed by project lead
**References:** Discovery Report (DISC-RPT-2026-001), PRD v1.1, Tech Stack Definition v1.0
**Changelog:**
- v2.1 — Re-incorporated Sanity CMS as build-time data source per approved stack. Sanity content fetched during GitHub Actions build and rendered into static HTML. Dual content strategy: MDX for code-adjacent content, Sanity for marketing content.
- v2.0 — Complete architecture revision. Switched from Next.js/Vercel to Astro/GitHub Pages per leadership directive.

---

## TABLE OF CONTENTS

1. [Architecture Overview](#1-architecture-overview)
2. [System Architecture](#2-system-architecture)
3. [Data Architecture](#3-data-architecture)
4. [Frontend Architecture](#4-frontend-architecture)
5. [Build Pipeline](#5-build-pipeline)
6. [Performance Strategy](#6-performance-strategy)
7. [Integration Points](#7-integration-points)
8. [Security and Compliance](#8-security-and-compliance)
9. [Deployment Architecture](#9-deployment-architecture)
10. [Testing Strategy](#10-testing-strategy)
11. [Monitoring and Observability](#11-monitoring-and-observability)
12. [Architecture Decision Records](#12-architecture-decision-records)

---

## 1. ARCHITECTURE OVERVIEW

### 1.1 Hosting Constraint

**GitHub Pages** is the approved hosting platform. This is the single most important architectural constraint:

- **Static files only** — no server-side rendering, no API routes, no edge functions, no ISR
- **No server-side code execution** — every page must be a pre-built HTML file
- **Repository:** `git@github.com:TheKingHippopotamus/195_shades_of_agents-.git`
- **Deployment:** GitHub Actions builds the site and pushes to `gh-pages` branch

This constraint makes **Astro** the natural framework choice. Astro is built from the ground up for static output with zero JavaScript by default. Next.js with `output: 'export'` would work but loses the features (RSC, ISR, API routes) that justified its selection in v1.0. On GitHub Pages, Astro's strengths become decisive advantages and Next.js's strengths become irrelevant.

### 1.2 Design Principles

1. **100% Static Output** — Every page is a pre-built HTML file. No server, no runtime, no API routes. The `dist/` directory is the entire website. If it works in `file:///`, it works in production.

2. **Zero JS by Default, Islands for Interactivity** — Astro ships zero JavaScript for content pages. React components hydrate only where interaction is required (agent directory, network graph, search, forms). Content pages like agent profiles, department pages, and blog posts ship zero client-side JS.

3. **Data Lives in the Repo (or is Fetched at Build Time)** — Agent markdown files in `agents/` are the source of truth, parsed into typed JSON at build time. Marketing content (blog posts, case studies, testimonials, FAQs) lives in Sanity CMS and is fetched via GROQ API during GitHub Actions build — the deployed site has zero runtime Sanity dependency. Code-adjacent content (services, legal pages) lives as MDX in the repo.

4. **Performance is a Feature** — Astro's zero-JS default means Lighthouse >95 comes naturally. Target: <50KB initial JS on interactive pages, 0KB on content pages.

5. **Progressive Enhancement** — All content is readable without JavaScript. Interactive features (network graph, search, filters) enhance the experience but the site is fully functional without them.

6. **Type Safety End-to-End** — TypeScript strict mode everywhere. Zod schemas validate all data at build boundaries. No `any` types.

### 1.3 Technology Stack (Approved)

| Layer | Technology | Status | Rationale |
|-------|-----------|--------|-----------|
| **Framework** | Astro 4+ | TRIAL (promoted) | Static-first, islands architecture, zero JS default, built for GitHub Pages |
| **Interactive Islands** | React 18 | ADOPT | Component ecosystem, D3.js integration, used only for interactive features |
| **Language** | TypeScript 5+ (strict) | ADOPT | Mandatory per tech stack definition |
| **Styling** | Tailwind CSS 3+ | ADOPT | Utility-first, design token system, tree-shaking |
| **UI Components** | shadcn/ui + Radix UI | ADOPT | Accessible primitives, adapted for Astro island usage |
| **Animation** | Framer Motion (islands) + CSS | ADOPT | React-native animations in islands, CSS animations for Astro pages |
| **Data Viz** | D3.js | ADOPT | Network graph, org chart, technology radar |
| **CMS** | Sanity v3 (build-time) | ADOPT | GROQ queries at build time, Sanity Studio for authoring, no runtime dependency |
| **Content** | MDX + Sanity (hybrid) | ADOPT | Static pages as MDX in repo; blog, case studies, testimonials managed in Sanity |
| **Search** | Pagefind | ADOPT | Build-time static search index, zero-runtime cost, <5KB client bundle |
| **Forms** | Formspree / Getform | N/A | Third-party form endpoint (no server-side code on GitHub Pages) |
| **Testing** | Vitest + Playwright | ADOPT | Unit/integration + E2E per tech stack |
| **Hosting** | GitHub Pages | N/A | Leadership directive — static-only, free, integrated with repo |
| **CI/CD** | GitHub Actions | N/A | Build + deploy on push to main |
| **Analytics** | Plausible (primary) | ADOPT | Privacy-friendly, GDPR-compliant, lightweight (<1KB), no cookies |

### 1.4 What Changed from v1.0 (and Why)

| v1.0 Decision | v2.0 Decision | Reason |
|---------------|---------------|--------|
| Next.js 14+ (App Router) | **Astro 4+** | GitHub Pages serves static files only. No SSR, no ISR, no API routes. Astro is purpose-built for static. Next.js `output: 'export'` works but strips all differentiating features. |
| Vercel Edge Network | **GitHub Pages** | Leadership directive. Zero cost, git-integrated deployment. |
| Sanity CMS (runtime ISR) | **Sanity CMS (build-time fetch)** | No server to receive webhooks. No ISR. Sanity content is fetched via GROQ during GitHub Actions build and rendered into static HTML. Sanity Studio provides the authoring GUI; the website itself has zero runtime Sanity dependency. |
| API routes for forms | **Formspree / Getform** | No server-side code on GitHub Pages. Third-party form endpoints handle submissions and forward to email/CRM. |
| Upstash Redis rate limiting | **Removed** | No server-side code to rate-limit. Form spam prevention moves to Formspree's built-in protection + client-side honeypot. |
| React Server Components | **Astro templates** | RSC requires a Node.js server. Astro templates achieve the same zero-JS output natively for static builds. |
| ISR (60s revalidation) | **Full rebuild on push** | GitHub Pages has no revalidation. Content updates require a new build. GitHub Actions makes this fast (<3 min). |

### 1.5 What We Are NOT Using (and Why)

| Rejected | Reason |
|----------|--------|
| Next.js | With GitHub Pages, Next.js loses ISR, API routes, RSC, middleware, and edge functions. Running `next export` produces a static site but with a ~90KB React runtime tax on every page. Astro ships 0KB JS by default and only hydrates React where needed. The v1.0 rationale for Next.js (ADOPT status, RSC, ISR, Vercel-native) no longer applies. |
| Three.js / WebGL hero | Adds 150KB+ to the bundle. CSS/SVG animations for hero. D3.js network visualization is the hero visual asset. |
| Redux / Zustand | No global client state needed. URL hash params for directory filters, Nano Stores (Astro-native) for theme. |
| Algolia | Pagefind is better: zero runtime cost, <5KB client bundle, no API keys, no monthly cost. |
| GA4 | Plausible is lighter (<1KB vs 45KB), cookieless, GDPR-compliant by default. |

---

## 2. SYSTEM ARCHITECTURE

### 2.1 High-Level System Diagram

```
  ┌─────────────────────────────────────────────────────────────────────┐
  │                        SOURCE (Git Repository)                      │
  │                                                                     │
  │  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐ │
  │  │ agents/           │  │ src/content/      │  │ public/           │ │
  │  │ 195 agent .md     │  │ services/ (MDX)   │  │ avatars/          │ │
  │  │ files             │  │ industries/ (MDX) │  │ fonts/            │ │
  │  │                   │  │ legal/ (MDX)      │  │ icons/            │ │
  │  └────────┬─────────┘  └────────┬─────────┘  └────────┬─────────┘ │
  │           │                      │                      │           │
  └───────────│──────────────────────│──────────────────────│───────────┘
              │                      │                      │
              v                      v                      v
  ┌─────────────────────────────────────────────────────────────────────┐
  │                    SANITY CMS (External, Build-Time Only)           │
  │                                                                     │
  │  Blog Posts, Case Studies, Testimonials, FAQs                      │
  │  Authored in Sanity Studio → Fetched via GROQ API at build time    │
  │  Zero runtime dependency — only used during GitHub Actions build    │
  │                                                                     │
  └──────────────────────────────┬──────────────────────────────────────┘
                                 │
                                 v
  ┌─────────────────────────────────────────────────────────────────────┐
  │                   BUILD PIPELINE (GitHub Actions)                    │
  │                                                                     │
  │  Step 1: Parse 195 agent .md files                                 │
  │          → Extract <system_prompt> XML                              │
  │          → Validate with Zod schemas                                │
  │          → Output: agents.json, departments.json                    │
  │                                                                     │
  │  Step 1b: Fetch Sanity CMS content via GROQ API                    │
  │           → Blog posts, case studies, testimonials, FAQs            │
  │           → Write to src/data/sanity/*.json                         │
  │           → Zero runtime dependency (build-time only)               │
  │                                                                     │
  │  Step 2: Astro Build                                                │
  │          → 195 agent profile pages         (static HTML, 0KB JS)    │
  │          → 20 department pages             (static HTML, 0KB JS)    │
  │          → ~15 content pages               (static HTML, 0KB JS)    │
  │          → Blog posts from Sanity JSON     (static HTML, 0KB JS)    │
  │          → Case studies from Sanity JSON   (static HTML, 0KB JS)    │
  │          → Services/legal from MDX         (static HTML, 0KB JS)    │
  │          → Interactive pages               (HTML + React islands)   │
  │          → sitemap.xml + robots.txt                                 │
  │          → JSON-LD structured data per page                         │
  │                                                                     │
  │  Step 3: Post-build                                                 │
  │          → Pagefind indexes rendered HTML → search index             │
  │          → Output: dist/ directory (~250 HTML files + assets)        │
  │                                                                     │
  └──────────────────────────────┬──────────────────────────────────────┘
                                 │
                                 │  git push to gh-pages branch
                                 v
  ┌─────────────────────────────────────────────────────────────────────┐
  │                     GITHUB PAGES CDN                                │
  │                                                                     │
  │  Static file serving only. No server logic.                        │
  │                                                                     │
  │  ┌───────────────────────────────────────────────────────────────┐ │
  │  │  dist/                                                         │ │
  │  │  ├── index.html                    (homepage)                  │ │
  │  │  ├── agents/index.html             (agent directory)           │ │
  │  │  ├── agents/ceo/index.html         (agent profile x195)       │ │
  │  │  ├── departments/index.html        (department overview)       │ │
  │  │  ├── departments/engineering/...   (department pages x20)      │ │
  │  │  ├── network/index.html            (network graph)             │ │
  │  │  ├── blog/index.html               (blog index)                │ │
  │  │  ├── blog/first-post/index.html    (blog posts)                │ │
  │  │  ├── _pagefind/                    (search index chunks)       │ │
  │  │  ├── data/agents.json              (client-side data)          │ │
  │  │  ├── avatars/                      (195 avatar images)         │ │
  │  │  ├── sitemap-index.xml                                         │ │
  │  │  └── robots.txt                                                │ │
  │  └───────────────────────────────────────────────────────────────┘ │
  │                                                                     │
  │  HTTPS enforced. CDN-cached globally.                              │
  │  Custom domain support via CNAME.                                   │
  │                                                                     │
  └─────────────────────────────────────────────────────────────────────┘
                                 │
                                 v
  ┌─────────────────────────────────────────────────────────────────────┐
  │                          CLIENT (Browser)                           │
  │                                                                     │
  │  ┌──────────────────────────────────────────────────────────────┐  │
  │  │  Static HTML (immediate paint, zero JS on content pages)      │  │
  │  │  - Agent profiles: full content, zero JS                     │  │
  │  │  - Department pages: full content, zero JS                   │  │
  │  │  - Blog posts: full content, zero JS                         │  │
  │  │  - All other content pages: zero JS                          │  │
  │  └──────────────────────────────────────────────────────────────┘  │
  │                                                                     │
  │  ┌──────────────────────────────────────────────────────────────┐  │
  │  │  React Islands (hydrated only on pages that need them):       │  │
  │  │  - AgentDirectory (search, filter, sort, view toggle)        │  │
  │  │  - NetworkGraph (D3.js force-directed, 195 nodes)            │  │
  │  │  - OrgChart (D3.js collapsible hierarchy)                    │  │
  │  │  - TechRadar (D3.js radar chart)                             │  │
  │  │  - CommandPalette (Cmd+K search via Pagefind)                │  │
  │  │  - ContactForm (client-side validation → Formspree POST)     │  │
  │  │  - ThemeToggle (dark/light mode)                             │  │
  │  └──────────────────────────────────────────────────────────────┘  │
  │                                                                     │
  │  ┌──────────────────────────────────────────────────────────────┐  │
  │  │  Third-Party Scripts (deferred, non-blocking):                │  │
  │  │  - Plausible analytics (<1KB, no cookies)                    │  │
  │  │  - Calendly embed (lazy, contact page only)                  │  │
  │  └──────────────────────────────────────────────────────────────┘  │
  └─────────────────────────────────────────────────────────────────────┘

  ┌─────────────────────────────────────────────────────────────────────┐
  │                    EXTERNAL SERVICES                                │
  │                                                                     │
  │  Sanity CMS ← Build-time only (GROQ API fetch during CI)           │
  │       → Blog posts, case studies, testimonials, FAQs                │
  │       → Sanity Studio hosted separately for authoring               │
  │                                                                     │
  │  Formspree/Getform ← Contact form POST (no server needed)          │
  │       → Forward to email / HubSpot CRM                              │
  │                                                                     │
  │  Plausible Cloud ← Analytics script (cookieless)                    │
  │                                                                     │
  │  Calendly ← Embedded scheduling widget (lazy-loaded)                │
  │                                                                     │
  └─────────────────────────────────────────────────────────────────────┘
```

### 2.2 Request Flow

**Every request on GitHub Pages follows the same pattern — static file serving:**

```
Browser → GitHub Pages CDN → Serve pre-built HTML file
                            → ~100-200ms TTFB globally (GitHub CDN)
                            → HTML includes inline critical CSS
                            → Zero JS on content pages (instant interactive)
                            → React islands hydrate on interactive pages
```

**Content update flow (git-versioned content — MDX, agent files):**

```
Author creates/edits file → Git push (or PR merge) to main
  → GitHub Actions triggers
  → Build: parse agents → fetch Sanity → Astro build → Pagefind index
  → Deploy: push dist/ to gh-pages branch
  → GitHub Pages serves updated content (~2-3 min total)
```

**Content update flow (Sanity CMS — blog, case studies, testimonials, FAQs):**

```
Author publishes in Sanity Studio
  → Option A: Manually trigger GitHub Actions (workflow_dispatch)
  → Option B: Sanity webhook → GitHub repository_dispatch → Actions
  → Option C: Scheduled cron build (e.g., every 6 hours)
  → Build: parse agents → fetch Sanity → Astro build → Pagefind index
  → Deploy: push dist/ to gh-pages branch
  → Live in ~2-3 minutes
```

**Form submission flow (no server):**

```
User fills ContactForm → Client-side validation (Zod)
  → POST to https://formspree.io/f/{form_id}
  → Formspree handles:
      - Spam filtering (reCAPTCHA, honeypot)
      - Email notification
      - CRM webhook (HubSpot)
  → Client receives 200 OK → Show success message
```

---

## 3. DATA ARCHITECTURE

### 3.1 Agent Data Model

The agent data originates from 195 markdown files in `agents/{dept}/{NUM}-{CODE}.md`. Each file contains XML-structured content within `<system_prompt>` tags. The build pipeline extracts this into a typed JSON schema.

**TypeScript Schema (Zod):**

```typescript
// src/schemas/agent.ts
import { z } from "zod";

export const TierSchema = z.object({
  number: z.number().int().min(0).max(9),
  label: z.string(),
});

export const InteractionSchema = z.object({
  agent: z.string(),
  frequency: z.string(),
  context: z.string(),
});

export const PersonalSchema = z.object({
  nickname: z.string(),
  age: z.number().int(),
  about_me: z.string(),
  what_i_bring: z.string(),
  my_strengths: z.array(z.string()),
  my_weaknesses: z.array(z.string()),
  working_with_me: z.string(),
});

export const AgentSchema = z.object({
  agent_number: z.string().regex(/^\d{3}$/),
  code: z.string(),
  role: z.string(),
  department: z.string(),
  department_number: z.string().regex(/^\d{2}$/),
  department_slug: z.string(),
  reports_to: z.string(),
  direct_reports: z.array(z.string()).optional(),
  tier: TierSchema,
  personality: z.string(),
  core_responsibilities: z.array(z.string()),
  decision_authority: z.object({
    can_decide: z.array(z.string()),
    must_escalate: z.array(z.string()),
  }),
  interaction_map: z.object({
    primary: z.array(InteractionSchema),
    secondary: z.array(InteractionSchema),
  }),
  output_standards: z.string(),
  success_metrics: z.array(z.string()),
  personal: PersonalSchema,
  avatar_url: z.string(),
});

export type Agent = z.infer<typeof AgentSchema>;
```

**Generated JSON output:** `public/data/agents.json` (~250KB uncompressed, ~40KB gzipped)

This JSON file serves dual purposes:
1. **Build-time:** Astro pages import it to generate static HTML
2. **Client-side:** The AgentDirectory React island fetches it for search/filter/sort

**Agent JSON example:**
```json
{
  "agent_number": "001",
  "code": "CEO",
  "role": "Chief Executive Officer",
  "department": "Executive Leadership",
  "department_number": "01",
  "department_slug": "executive-leadership",
  "reports_to": "Board/Client",
  "direct_reports": ["CTO", "CPO", "COO", "CFO", "CMO", "CRO", "CHRO", "CISO", "CLO", "CAIO"],
  "tier": { "number": 0, "label": "C-Suite" },
  "personality": "You are a decisive, visionary leader...",
  "core_responsibilities": [
    "Client Vision Translation: When a client brings a vision...",
    "Strategic Resource Allocation: You decide which projects..."
  ],
  "decision_authority": {
    "can_decide": ["Whether to accept or reject a client project", "..."],
    "must_escalate": ["Board-level decisions (M&A, fundraising rounds)"]
  },
  "interaction_map": {
    "primary": [
      { "agent": "CTO", "frequency": "Daily", "context": "technology strategy alignment" }
    ],
    "secondary": [
      { "agent": "CMO", "frequency": "Bi-weekly", "context": "brand, market positioning" }
    ]
  },
  "output_standards": "...",
  "success_metrics": ["Client satisfaction score >90%", "..."],
  "personal": {
    "nickname": "The Architect",
    "age": 42,
    "about_me": "...",
    "what_i_bring": "...",
    "my_strengths": ["Decisive leadership", "Systems thinking"],
    "my_weaknesses": ["Can be impatient", "..."],
    "working_with_me": "..."
  },
  "avatar_url": "/avatars/001-CEO.webp"
}
```

### 3.2 Department Data Model

Derived from agent data at build time. No separate source file needed.

```typescript
// src/schemas/department.ts
import { z } from "zod";

export const DepartmentSchema = z.object({
  number: z.string().regex(/^\d{2}$/),
  name: z.string(),
  slug: z.string(),
  folder: z.string(),
  agent_count: z.number().int(),
  agent_range: z.object({
    start: z.string(),
    end: z.string(),
  }),
  leadership: z.array(z.object({
    code: z.string(),
    role: z.string(),
    tier: z.number(),
  })),
  agents: z.array(z.string()),
  color: z.string(),
});

export type Department = z.infer<typeof DepartmentSchema>;
```

**Department color map (20 distinct, accessible colors):**

```typescript
// src/lib/department-colors.ts
export const DEPARTMENT_COLORS: Record<string, string> = {
  "01": "#6366F1", // Executive Leadership — Indigo
  "02": "#3B82F6", // Engineering — Blue
  "03": "#06B6D4", // Platform & Infrastructure — Cyan
  "04": "#8B5CF6", // Product Management — Violet
  "05": "#EC4899", // Design — Pink
  "06": "#10B981", // Data Science & AI/ML — Emerald
  "07": "#F59E0B", // Quality Assurance — Amber
  "08": "#EF4444", // Security — Red
  "09": "#F97316", // Sales & Revenue — Orange
  "10": "#A855F7", // Marketing — Purple
  "11": "#14B8A6", // Customer Success — Teal
  "12": "#84CC16", // People / HR — Lime
  "13": "#22C55E", // Finance & Accounting — Green
  "14": "#64748B", // Legal & Compliance — Slate
  "15": "#0EA5E9", // IT & Operations — Sky
  "16": "#D946EF", // Developer Relations — Fuchsia
  "17": "#F43F5E", // Program Management — Rose
  "18": "#78716C", // Governance — Stone
  "19": "#FBBF24", // Special Agents — Yellow
  "20": "#2DD4BF", // Documentation — Teal (light)
};
```

### 3.3 Hybrid Content Strategy (Sanity CMS + MDX)

Content is managed through two channels, each optimized for its use case:

**Sanity CMS (build-time fetch)** — for marketing content updated by non-technical authors:
- Blog posts
- Case studies
- Testimonials
- FAQs
- Press mentions

**MDX in Git** — for code-adjacent content updated by engineers:
- Service/capability descriptions
- Industry landing page copy
- Legal pages (privacy, terms)
- Any content that references code or embeds React components

**How Sanity works on GitHub Pages (no server):**
```
1. Content authors write in Sanity Studio (hosted separately on Sanity Cloud)
2. Content is stored in Sanity's hosted dataset
3. On push to main (or manual/scheduled trigger), GitHub Actions runs:
   a. Fetch all published content from Sanity via GROQ API
   b. Write fetched content to src/data/sanity/ as JSON files
   c. Astro build reads JSON files and generates static HTML pages
4. Result: 100% static HTML. Zero runtime Sanity dependency.
   The built site has no knowledge of Sanity — it's just HTML files.
```

**Sanity content update flow:**
```
Author publishes in Sanity Studio
  → Option A: Manually trigger GitHub Actions workflow (workflow_dispatch)
  → Option B: Sanity webhook triggers GitHub Actions via repository_dispatch
  → Option C: Scheduled build (cron, e.g., every 6 hours)
  → GitHub Actions: fetch Sanity → Astro build → deploy to gh-pages
  → Live in ~2-3 minutes
```

**Sanity Schema Definitions:**

```typescript
// sanity/schemas/blogPost.ts (in Sanity Studio project)
export default {
  name: "blogPost",
  type: "document",
  fields: [
    { name: "title", type: "string", validation: (R) => R.required() },
    { name: "slug", type: "slug", options: { source: "title" } },
    { name: "author", type: "string" },           // agent code (e.g., "CONTENT-MKT")
    { name: "category", type: "string",
      options: { list: ["Engineering", "AI/ML", "Design", "Process", "Case Studies"] } },
    { name: "publishedAt", type: "datetime" },
    { name: "excerpt", type: "text", rows: 3 },
    { name: "body", type: "array", of: [{ type: "block" }] },  // Portable Text
    { name: "coverImage", type: "image", options: { hotspot: true } },
    { name: "tags", type: "array", of: [{ type: "string" }] },
    { name: "seo", type: "object", fields: [
      { name: "metaTitle", type: "string" },
      { name: "metaDescription", type: "text" },
    ]},
  ],
};

// sanity/schemas/caseStudy.ts
export default {
  name: "caseStudy",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "slug", type: "slug", options: { source: "title" } },
    { name: "client", type: "string" },
    { name: "industry", type: "string",
      options: { list: ["FinTech", "HealthTech", "E-commerce", "SaaS", "EdTech"] } },
    { name: "challenge", type: "array", of: [{ type: "block" }] },
    { name: "approach", type: "array", of: [{ type: "block" }] },
    { name: "results", type: "array", of: [{ type: "block" }] },
    { name: "metrics", type: "array", of: [{
      type: "object", fields: [
        { name: "label", type: "string" },
        { name: "value", type: "string" },
        { name: "improvement", type: "string" },
      ]
    }]},
    { name: "technologies", type: "array", of: [{ type: "string" }] },
    { name: "teamAgents", type: "array", of: [{ type: "string" }] },
    { name: "testimonial", type: "object", fields: [
      { name: "quote", type: "text" },
      { name: "author", type: "string" },
      { name: "title", type: "string" },
    ]},
    { name: "coverImage", type: "image" },
  ],
};

// sanity/schemas/testimonial.ts
export default {
  name: "testimonial",
  type: "document",
  fields: [
    { name: "quote", type: "text" },
    { name: "author", type: "string" },
    { name: "title", type: "string" },
    { name: "company", type: "string" },
    { name: "avatar", type: "image" },
  ],
};

// sanity/schemas/faq.ts
export default {
  name: "faq",
  type: "document",
  fields: [
    { name: "question", type: "string" },
    { name: "answer", type: "array", of: [{ type: "block" }] },
    { name: "category", type: "string" },
    { name: "order", type: "number" },
  ],
};
```

**Build-time Sanity fetch script:**

```typescript
// scripts/fetch-sanity-content.ts
// Runs during GitHub Actions build, before Astro build

import { createClient } from "@sanity/client";
import { writeFileSync, mkdirSync } from "fs";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: "2026-02-15",
  useCdn: true,
  token: process.env.SANITY_API_TOKEN, // read-only token
});

async function fetchAndWrite() {
  mkdirSync("src/data/sanity", { recursive: true });

  const blogPosts = await client.fetch(`
    *[_type == "blogPost" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
      title, slug, author, category, publishedAt, excerpt,
      "coverImage": coverImage.asset->url,
      tags, body, seo
    }
  `);
  writeFileSync("src/data/sanity/blog-posts.json", JSON.stringify(blogPosts, null, 2));

  const caseStudies = await client.fetch(`
    *[_type == "caseStudy" && !(_id in path("drafts.**"))] {
      title, slug, client, industry, challenge, approach, results,
      metrics, technologies, teamAgents, testimonial,
      "coverImage": coverImage.asset->url
    }
  `);
  writeFileSync("src/data/sanity/case-studies.json", JSON.stringify(caseStudies, null, 2));

  const testimonials = await client.fetch(`*[_type == "testimonial"]`);
  writeFileSync("src/data/sanity/testimonials.json", JSON.stringify(testimonials, null, 2));

  const faqs = await client.fetch(`*[_type == "faq"] | order(order asc)`);
  writeFileSync("src/data/sanity/faqs.json", JSON.stringify(faqs, null, 2));

  console.log(`Fetched: ${blogPosts.length} posts, ${caseStudies.length} case studies, ${testimonials.length} testimonials, ${faqs.length} FAQs`);
}

fetchAndWrite();
```

**MDX Content Collections (for git-versioned content):**

```typescript
// src/content/config.ts
import { defineCollection, z } from "astro:content";

const servicesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const industriesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    coverImage: z.string(),
  }),
});

export const collections = {
  services: servicesCollection,
  industries: industriesCollection,
};
```

**Content ownership summary:**

| Content Type | Source | Updated By | Update Flow |
|-------------|--------|-----------|------------|
| Agent profiles (195) | Agent .md files → parser | Engineers | Git push → rebuild |
| Department pages (20) | Derived from agents | Automatic | Git push → rebuild |
| Blog posts | Sanity CMS | Marketing (CONTENT-MKT 129) | Sanity publish → trigger build |
| Case studies | Sanity CMS | Marketing (PMM 127) + Sales | Sanity publish → trigger build |
| Testimonials | Sanity CMS | Marketing | Sanity publish → trigger build |
| FAQs | Sanity CMS | Support (CSM 135) | Sanity publish → trigger build |
| Services/capabilities | MDX in git | Product (PM 067) | Git push → rebuild |
| Industry pages | MDX in git | Marketing + Product | Git push → rebuild |
| Legal pages | MDX in git | Legal (PRIVACY 160) | Git push → rebuild |
| Tech stack / lifecycle | Parsed from .md files | Engineering | Git push → rebuild |

### 3.4 Search Index Structure

Pagefind builds a search index at compile time from the rendered HTML output:

```
Search-indexed content:
  - 195 agent profile pages (name, code, role, department, personality, nickname)
  - 20 department pages (name, mission, agent roster)
  - Blog posts (title, body, tags)
  - Case studies (title, challenge, results)
  - Content pages (services, capabilities, how we work)

Index size estimate: ~500KB (loaded in chunks on demand, not upfront)
Client bundle: ~5KB (Pagefind UI)
Query latency: <50ms client-side
```

### 3.5 Structured Data (JSON-LD)

Generated per page at build time, injected as `<script type="application/ld+json">` in `<head>`:

| Page Type | JSON-LD Schema |
|-----------|---------------|
| Homepage | `Organization` — company name, description, logo, social profiles |
| Agent Profile | `Person` — name, jobTitle, worksFor, department, description |
| Department | `Organization` (sub-org) — name, department, numberOfEmployees |
| Blog Post | `Article` — headline, author, datePublished, publisher |
| Case Study | `Article` + `Review` — headline, reviewBody, itemReviewed |
| FAQ | `FAQPage` — question/answer pairs |
| Contact | `ContactPage` + `Organization` — address, telephone, email |

---

## 4. FRONTEND ARCHITECTURE

### 4.1 Project Structure

```
/
├── astro.config.mjs                   # Astro config: React integration, Tailwind, sitemap
├── tailwind.config.mjs                # Tailwind: custom colors, fonts, breakpoints
├── tsconfig.json                      # TypeScript strict mode
├── package.json
│
├── scripts/
│   ├── build-agent-data.ts            # Pre-build: parse 195 .md files → JSON
│   └── fetch-sanity-content.ts        # Pre-build: fetch Sanity CMS → JSON
│
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro           # Root layout (<html>, <head>, fonts, analytics, theme)
│   │   ├── PageLayout.astro           # Standard page (header + main + footer)
│   │   └── BlogLayout.astro           # Blog post layout (author, date, reading time)
│   │
│   ├── pages/
│   │   ├── index.astro                # Homepage
│   │   ├── 404.astro                  # Custom 404
│   │   │
│   │   ├── about/
│   │   │   ├── index.astro            # About NEXUS AI
│   │   │   ├── leadership.astro       # C-Suite leadership (11 agents)
│   │   │   └── culture.astro          # Culture & values
│   │   │
│   │   ├── agents/
│   │   │   ├── index.astro            # Agent directory (React island for interactivity)
│   │   │   └── [code].astro           # Agent profile (SSG via getStaticPaths)
│   │   │
│   │   ├── departments/
│   │   │   ├── index.astro            # Department overview grid
│   │   │   └── [slug].astro           # Department deep-dive (SSG via getStaticPaths)
│   │   │
│   │   ├── capabilities/
│   │   │   ├── index.astro            # Services overview
│   │   │   ├── tech-stack.astro       # Technology radar (React island)
│   │   │   ├── lifecycle.astro        # 13-stage project lifecycle
│   │   │   └── ai-ml.astro            # AI/ML capabilities
│   │   │
│   │   ├── how-we-work.astro          # Process overview
│   │   │
│   │   ├── network.astro              # Agent network visualization (React island)
│   │   │
│   │   ├── industries/
│   │   │   ├── index.astro            # Industries overview
│   │   │   └── [slug].astro           # Industry landing pages (5)
│   │   │
│   │   ├── blog/
│   │   │   ├── index.astro            # Blog index (generated from Sanity JSON)
│   │   │   └── [...slug].astro        # Blog post (from Sanity JSON, rendered at build time)
│   │   │
│   │   ├── case-studies/
│   │   │   ├── index.astro            # Case studies index
│   │   │   └── [...slug].astro        # Individual case study (from Sanity JSON)
│   │   │
│   │   ├── contact.astro              # Contact form + Calendly
│   │   ├── careers.astro              # Careers page
│   │   ├── press.astro                # Media kit
│   │   ├── developers.astro           # Developer community hub
│   │   ├── privacy.astro              # Privacy policy
│   │   ├── terms.astro                # Terms of service
│   │   │
│   │   ├── robots.txt.ts              # Dynamic robots.txt generation
│   │   └── sitemap-index.xml.ts       # Sitemap (via @astrojs/sitemap)
│   │
│   ├── components/
│   │   ├── astro/                     # Astro components (zero JS, server-rendered)
│   │   │   ├── Header.astro           # Navigation, mobile menu trigger
│   │   │   ├── Footer.astro           # Sitemap links, newsletter, legal, social
│   │   │   ├── AgentCard.astro        # Agent card (avatar, code, role, dept badge)
│   │   │   ├── AgentProfile.astro     # Full profile sections
│   │   │   ├── DepartmentCard.astro   # Department overview card
│   │   │   ├── TierBadge.astro        # Tier indicator
│   │   │   ├── DepartmentBadge.astro  # Colored department indicator
│   │   │   ├── Avatar.astro           # Agent avatar with fallback
│   │   │   ├── Breadcrumbs.astro      # Navigation breadcrumbs
│   │   │   ├── ReportingChain.astro   # Board > CEO > CTO > ... > Agent
│   │   │   ├── SectionHeading.astro   # Consistent section headers
│   │   │   ├── CTASection.astro       # Call-to-action blocks
│   │   │   ├── JsonLd.astro           # Structured data injection
│   │   │   ├── BlogCard.astro         # Blog post preview
│   │   │   └── StatsCounter.astro     # Animated counters (CSS + Intersection Observer)
│   │   │
│   │   └── react/                     # React islands (JS shipped, hydrated client-side)
│   │       ├── AgentDirectory.tsx      # Search, filter, sort, view toggle
│   │       ├── NetworkGraph.tsx        # D3.js force-directed graph
│   │       ├── OrgChart.tsx            # D3.js collapsible hierarchy
│   │       ├── TechRadar.tsx           # D3.js radar chart
│   │       ├── LifecycleTimeline.tsx   # Interactive horizontal timeline
│   │       ├── CommandPalette.tsx      # Cmd+K search (Pagefind)
│   │       ├── ContactForm.tsx         # Form → Formspree
│   │       ├── NewsletterForm.tsx      # Email signup → Formspree
│   │       ├── MobileNav.tsx           # Mobile navigation drawer
│   │       └── ThemeToggle.tsx         # Dark/light mode toggle
│   │
│   ├── content/                       # Astro Content Collections (MDX)
│   │   ├── config.ts                  # Collection schemas (Zod)
│   │   ├── services/                  # MDX service/capability pages
│   │   ├── industries/                # MDX industry landing pages
│   │   └── legal/                     # MDX legal pages (privacy, terms)
│   │
│   ├── schemas/                       # Zod schemas (agent.ts, department.ts)
│   │
│   ├── lib/
│   │   ├── agents.ts                  # getAllAgents(), getAgentByCode(), etc.
│   │   ├── departments.ts             # getAllDepartments(), getDepartmentBySlug()
│   │   ├── department-colors.ts       # 20 department color codes
│   │   ├── tier-labels.ts             # Tier 0-9 labels
│   │   └── navigation.ts             # Nav structure definition
│   │
│   ├── styles/
│   │   └── globals.css                # Tailwind base + custom tokens + CSS animations
│   │
│   └── data/                          # Build-time generated
│       ├── agents.json                # From scripts/build-agent-data.ts
│       ├── departments.json           # From scripts/build-agent-data.ts
│       ├── tech-radar.json            # From scripts/build-agent-data.ts
│       └── sanity/                    # From scripts/fetch-sanity-content.ts
│           ├── blog-posts.json        # Fetched from Sanity at build time
│           ├── case-studies.json
│           ├── testimonials.json
│           └── faqs.json
│
└── public/
    ├── data/                          # Copied from src/data/ at build time (client accessible)
    │   ├── agents.json
    │   ├── departments.json
    │   └── tech-radar.json
    ├── avatars/                       # 195 optimized agent avatars (WebP)
    ├── og/                            # Pre-generated Open Graph images
    ├── fonts/                         # Self-hosted font files (WOFF2)
    └── icons/                         # Department icons, tier icons
```

### 4.2 Astro Islands Architecture

The core innovation of this architecture is the split between **Astro components** (zero JS) and **React islands** (JS only where needed).

**Astro Components (zero JS shipped) — the majority of the site:**
- All layouts (BaseLayout, PageLayout, BlogLayout)
- Navigation header and footer
- Agent profile content (personality, responsibilities, metrics, personal section)
- Agent cards (used in department rosters, related agents, etc.)
- Department pages and cards
- Blog post rendering
- All static content pages
- Badges, breadcrumbs, avatars, CTAs, structured data

**React Islands (JS shipped only for these) — interactive features:**

```astro
<!-- Example: Agent directory page with React island -->
---
// src/pages/agents/index.astro
import PageLayout from "../../layouts/PageLayout.astro";
import AgentDirectory from "../../components/react/AgentDirectory.tsx";
---

<PageLayout title="Our Team — 195 AI Agents" description="...">
  <section>
    <h1>Our Team</h1>
    <p>195 autonomous AI agents across 20 departments.</p>
  </section>

  <!-- React island: hydrates on load for interactivity -->
  <AgentDirectory client:load />
</PageLayout>
```

**Hydration directives (Astro-specific):**

| Directive | When JS Loads | Used For |
|-----------|--------------|----------|
| `client:load` | Immediately on page load | AgentDirectory, ThemeToggle |
| `client:visible` | When component scrolls into view | NetworkGraph, OrgChart, TechRadar, StatsCounter |
| `client:idle` | After page is idle (requestIdleCallback) | CommandPalette, ContactForm |
| `client:media="(min-width: 768px)"` | Only on desktop | Desktop-only features |
| (no directive) | Never — static HTML only | All Astro components |

### 4.3 State Management

No global state library. Minimal, purpose-specific state:

| State | Approach | Scope |
|-------|----------|-------|
| Theme (dark/light) | Nano Stores + `localStorage` | Global (shared across islands) |
| Agent directory filters | URL hash params (`#department=02&tier=5`) | Page-level, shareable |
| Search state | Pagefind API (local) | CommandPalette component |
| Form state | Local React state + Zod | ContactForm, NewsletterForm |
| Network graph state | D3.js internal (local) | NetworkGraph component |

**Why Nano Stores for theme (not React Context):**
Astro islands are isolated React roots. React Context does not span across islands. Nano Stores is Astro's recommended solution for shared state across framework islands (~500 bytes).

**URL-driven state for the agent directory:**
```
/agents/#department=02&tier=5&sort=code&view=grid&q=react
```
Hash-based instead of query params because GitHub Pages serves the same `index.html` regardless of query string, so hash params ensure the client-side filter state is preserved correctly.

### 4.4 Responsive Design Approach

**Breakpoints (Tailwind defaults):**

| Breakpoint | Width | Target |
|------------|-------|--------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops |

**Mobile adaptations for complex features:**

| Feature | Desktop | Mobile |
|---------|---------|--------|
| Agent directory | Grid (4 col) + List view + Network view | Grid (1-2 col) + List view only |
| Network graph | Full D3.js force-directed, drag/zoom/pan | Simplified: department clusters, tap for detail |
| Org chart | Expandable tree, side panel | Vertical list with expand/collapse |
| Tech radar | Full radar visualization | Categorized list view |
| Navigation | Horizontal nav with dropdowns | Slide-out drawer (hamburger, React island) |

---

## 5. BUILD PIPELINE

### 5.1 Agent Markdown Parser

The parser reads all 195 agent `.md` files, extracts the XML content within `<system_prompt>` tags, and produces validated JSON. This runs as a pre-build script before Astro builds.

**Parser flow:**

```
Step 1: Glob all files matching agents/*/*.md
         → 195 file paths

Step 2: For each file:
         - Read file content
         - Extract content between <system_prompt> and </system_prompt>
         - Parse XML tags:
           <agent_identity> → { agent_number, code, role, department, reports_to, tier }
           <personality> → string
           <core_responsibilities> → string[] (split on numbered items)
           <decision_authority> → { can_decide: string[], must_escalate: string[] }
           <interaction_map> → { primary: Interaction[], secondary: Interaction[] }
           <output_standards> → string
           <success_metrics> → string[] (split on numbered items)
           <personal> → { nickname, age, about_me, ... }

Step 3: Derive additional fields:
         - department_number: from folder name (e.g., "02" from "02-Engineering")
         - department_slug: slugify department name (e.g., "engineering")
         - avatar_url: "/avatars/{NUM}-{CODE}.webp"
         - direct_reports: cross-reference reports_to across all agents

Step 4: Validate each agent against AgentSchema (Zod)
         → Fail build on validation errors (strict — no partial data)

Step 5: Output:
         - src/data/agents.json (build-time import for Astro pages)
         - src/data/departments.json (20 departments, derived)
         - public/data/agents.json (client-side fetch for React islands)
         - public/data/departments.json (client-side fetch)
```

**Implementation approach:**

```typescript
// scripts/build-agent-data.ts
// Run via: npx tsx scripts/build-agent-data.ts
// Called before `astro build` in package.json scripts

import { globSync } from "glob";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { AgentSchema, type Agent } from "../src/schemas/agent";

function extractBetweenTags(content: string, tag: string): string {
  const regex = new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, "m");
  const match = content.match(regex);
  return match ? match[1].trim() : "";
}

function parseAgentFile(filePath: string): Agent {
  const content = readFileSync(filePath, "utf-8");
  const systemPrompt = extractBetweenTags(content, "system_prompt");

  const identity = extractBetweenTags(systemPrompt, "agent_identity");
  const personality = extractBetweenTags(systemPrompt, "personality");
  const responsibilities = extractBetweenTags(systemPrompt, "core_responsibilities");
  const authority = extractBetweenTags(systemPrompt, "decision_authority");
  const interactions = extractBetweenTags(systemPrompt, "interaction_map");
  const standards = extractBetweenTags(systemPrompt, "output_standards");
  const metrics = extractBetweenTags(systemPrompt, "success_metrics");
  const personal = extractBetweenTags(systemPrompt, "personal");

  // Parse each section into structured data...
  // Validate against Zod schema...
  return AgentSchema.parse(parsed);
}

const agentFiles = globSync("agents/**/*.md");
const agents = agentFiles.map(parseAgentFile);

// Write to both src/data/ (build-time) and public/data/ (client-side)
mkdirSync("src/data", { recursive: true });
mkdirSync("public/data", { recursive: true });
writeFileSync("src/data/agents.json", JSON.stringify(agents, null, 2));
writeFileSync("public/data/agents.json", JSON.stringify(agents));
```

### 5.2 Static Page Generation (Astro getStaticPaths)

```astro
---
// src/pages/agents/[code].astro
import PageLayout from "../../layouts/PageLayout.astro";
import AgentProfile from "../../components/astro/AgentProfile.astro";
import agents from "../../data/agents.json";

export function getStaticPaths() {
  return agents.map((agent) => ({
    params: { code: agent.code.toLowerCase() },
    props: { agent },
  }));
  // Generates 195 static HTML pages at build time
}

const { agent } = Astro.props;
---

<PageLayout
  title={`${agent.role} (${agent.code}) — NEXUS AI`}
  description={`Meet ${agent.personal.nickname}, ${agent.role} at NEXUS AI. ${agent.personality.slice(0, 150)}...`}
>
  <AgentProfile agent={agent} />
</PageLayout>

<!-- Zero JavaScript shipped for this page -->
```

**Pages generated at build time:**

| Route Pattern | Count | Source | JS Shipped |
|---------------|-------|--------|------------|
| `/agents/[code]/` | 195 | Agent JSON | 0KB |
| `/departments/[slug]/` | 20 | Department JSON | 0KB |
| `/industries/[slug]/` | 5 | Static content | 0KB |
| `/blog/[slug]/` | variable | Sanity JSON (build-time) | 0KB |
| `/case-studies/[slug]/` | variable | Sanity JSON (build-time) | 0KB |
| Other content pages | ~15 | Astro templates | 0KB |
| Interactive pages | ~5 | Astro + React islands | 15-50KB each |
| **Total static pages** | **~240+** | | |

### 5.3 Sitemap Generation

```typescript
// astro.config.mjs
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://thekinghampopotamus.github.io",
  base: "/195_shades_of_agents-",
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) => !page.includes("/404"),
      priority: (page) => {
        if (page === "/") return 1.0;
        if (page.includes("/agents/") && !page.endsWith("/agents/")) return 0.7;
        if (page.includes("/departments/")) return 0.7;
        if (page.includes("/blog/")) return 0.6;
        return 0.5;
      },
    }),
  ],
  output: "static", // Explicit: full static output for GitHub Pages
});
```

### 5.4 Full Build Sequence

```
1. Pre-build:
   a. Parse 195 agent .md files → agents.json, departments.json
   b. Parse 08-TECH-STACK-DEFINITION.md → tech-radar.json
   c. Parse 01-PROJECT-LIFECYCLE-MAP.md → lifecycle-stages.json
   d. Write to src/data/ and public/data/
   e. Fetch Sanity CMS content via GROQ API:
      → Blog posts → src/data/sanity/blog-posts.json
      → Case studies → src/data/sanity/case-studies.json
      → Testimonials → src/data/sanity/testimonials.json
      → FAQs → src/data/sanity/faqs.json
      (Requires SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_TOKEN env vars)

2. Astro Build:
   a. Process Content Collections (MDX services, industries, legal pages)
   b. Generate 195 agent profile pages (static HTML, zero JS)
   c. Generate 20 department pages (static HTML, zero JS)
   d. Generate ~15 content pages (static HTML, zero JS)
   e. Generate blog posts from Sanity JSON (static HTML, zero JS)
   f. Generate case study pages from Sanity JSON (static HTML, zero JS)
   g. Generate services/legal pages from MDX (static HTML, zero JS)
   h. Generate interactive pages with React islands (HTML + bundled JS)
   i. Generate sitemap.xml
   j. Optimize and bundle CSS (Tailwind tree-shaking)
   k. Bundle React islands (code-split per island)
   l. Copy public/ assets to dist/

3. Post-build:
   a. Run Pagefind indexer on dist/ HTML → _pagefind/ search index
   b. Verify: total dist/ size, page count, no broken links

4. Deploy:
   a. GitHub Actions pushes dist/ contents to gh-pages branch
   b. GitHub Pages serves the new build

Estimated total time: <3 minutes (agent parse + Sanity fetch + Astro build + Pagefind)
```

---

## 6. PERFORMANCE STRATEGY

### 6.1 Performance Budget

| Metric | Target | Enforcement |
|--------|--------|-------------|
| Lighthouse Performance | >95 (content pages: 99-100) | CI gate (Lighthouse CI) |
| Lighthouse Accessibility | >95 | CI gate |
| Lighthouse Best Practices | >95 | CI gate |
| Lighthouse SEO | >95 | CI gate |
| First Contentful Paint (FCP) | <1.0s (content), <1.2s (interactive) | Core Web Vitals |
| Largest Contentful Paint (LCP) | <2.0s (content), <2.5s (interactive) | Core Web Vitals |
| Cumulative Layout Shift (CLS) | <0.1 | Core Web Vitals |
| Interaction to Next Paint (INP) | <200ms | Core Web Vitals |
| Initial JS (content pages) | **0KB** | Astro default |
| Initial JS (interactive pages) | <50KB | Build analysis |
| Total JS (all islands combined) | <200KB | Build analysis |
| Agent directory render (195 items) | <500ms | Manual benchmark |
| Network graph initial render | <3s | Manual benchmark |

### 6.2 JavaScript Budget Breakdown

**Content pages (agent profiles, departments, blog, etc.): 0KB JavaScript.**

This is Astro's killer advantage over Next.js for this project. 195 agent profile pages, 20 department pages, blog posts, and all content pages ship zero client-side JavaScript. They are pure HTML + CSS.

**Interactive pages — JS budget per island:**

| Island | Estimated Size (gzipped) | Page | Hydration |
|--------|-------------------------|------|-----------|
| React runtime | ~40KB | Shared (loaded once) | N/A |
| AgentDirectory | ~10KB | /agents/ | `client:load` |
| NetworkGraph (D3.js force) | ~25KB | /network/ | `client:visible` |
| OrgChart (D3.js hierarchy) | ~15KB | /about/ | `client:visible` |
| TechRadar (D3.js) | ~15KB | /capabilities/tech-stack/ | `client:visible` |
| CommandPalette (Pagefind) | ~8KB | All pages (idle load) | `client:idle` |
| ContactForm | ~8KB | /contact/ | `client:idle` |
| ThemeToggle | ~2KB | All pages | `client:load` |
| MobileNav | ~3KB | All pages (mobile only) | `client:media` |

**Key difference from v1.0:** React runtime (~40KB) is only loaded on pages that have React islands. Content-only pages (agent profiles, departments, blog posts) load 0KB of JavaScript — not even React.

### 6.3 Image Optimization

```
Strategy:
1. Agent avatars: Pre-optimized before commit
   - Format: WebP (with PNG fallback for older browsers)
   - Sizes: 64px (thumbnail), 256px (card), 512px (profile)
   - Stored in /public/avatars/ as {NUM}-{CODE}-{size}.webp
   - Astro <Image /> component handles srcset, lazy loading, dimensions
   - Total: 195 agents x 3 sizes = 585 images (~30MB total, CDN-cached)

2. Blog/case study images: Astro image optimization
   - Images in src/content/ processed at build time
   - Automatic WebP conversion via sharp
   - Responsive srcset generated

3. OG images: Pre-generated at build time
   - Script generates 1200x630px PNG per agent + key pages
   - Stored in /public/og/

4. Decorative/UI images: SVG preferred
   - Department icons: SVG
   - Tier badges: SVG
   - Hero animation: CSS + SVG (no raster images)
```

### 6.4 Font Strategy

```
- Self-hosted WOFF2 fonts (no Google Fonts CDN round-trip)
- Font display: swap (immediate text rendering)
- Subset fonts to required character ranges (Latin + common punctuation)
- Two font families maximum:
  - Heading + Body: Inter (variable weight, WOFF2, ~25KB)
  - Mono: JetBrains Mono (code blocks only, ~15KB)
- Preloaded in <head> via BaseLayout.astro
```

### 6.5 Caching Strategy

GitHub Pages caching is simpler than Vercel but effective:

| Content Type | Cache Strategy | TTL |
|-------------|---------------|-----|
| HTML pages | GitHub Pages CDN | 10 minutes (GitHub default) |
| Static assets (JS, CSS) | Content-hashed filenames | Effectively immutable (hash changes on update) |
| Fonts (WOFF2) | Long-lived (same filename) | Browser cached |
| Images (avatars) | Long-lived (same filename) | Browser cached |
| Search index (_pagefind/) | Updated on each deploy | 10 minutes |

**Note:** GitHub Pages has a 10-minute cache TTL for HTML files. This is acceptable because content updates are infrequent (code pushes, not real-time CMS changes). For assets with hashed filenames, the effective cache is permanent until a new deploy changes the hash.

---

## 7. INTEGRATION POINTS

### 7.1 Content Management (Hybrid: Sanity CMS + MDX in Git)

**Sanity CMS (marketing content — blog, case studies, testimonials, FAQs):**

| Aspect | Detail |
|--------|--------|
| **Purpose** | Blog posts, case studies, testimonials, FAQs, press mentions |
| **Storage** | Sanity hosted dataset (Sanity Cloud) |
| **Authoring** | Sanity Studio — rich GUI editor with real-time preview, Portable Text |
| **Schema validation** | Sanity schema definitions enforce structure at authoring time |
| **Build-time fetch** | `scripts/fetch-sanity-content.ts` runs GROQ queries → writes JSON to `src/data/sanity/` |
| **Publishing** | Author publishes in Sanity Studio → trigger GitHub Actions (manual, webhook, or cron) → build → live in ~2-3 min |
| **Runtime dependency** | **None.** Sanity content is baked into static HTML at build time. The deployed site has zero knowledge of Sanity. |

**Environment variables required for Sanity fetch:**

| Variable | Purpose | Where Set |
|----------|---------|-----------|
| `SANITY_PROJECT_ID` | Sanity project identifier | GitHub Actions secrets |
| `SANITY_DATASET` | Dataset name (default: `production`) | GitHub Actions secrets |
| `SANITY_API_TOKEN` | Read-only API token | GitHub Actions secrets |

**MDX in Git (code-adjacent content — services, legal, industries):**

| Aspect | Detail |
|--------|--------|
| **Purpose** | Service/capability descriptions, industry landing pages, legal pages |
| **Storage** | MDX files in `src/content/` directory |
| **Validation** | Astro Content Collections + Zod schemas (build fails on invalid frontmatter) |
| **Authoring** | Edit MDX files directly in repo (VS Code, GitHub web editor) |
| **Review** | Standard PR workflow — content reviewed like code |
| **Publishing** | Merge PR to main → GitHub Actions builds → live in ~2-3 min |
| **Rich content** | MDX supports React components inline (charts, interactive demos, agent cards) |

### 7.2 Contact Form (Formspree)

Since GitHub Pages has no server, forms POST to a third-party service:

```
Form Submission Flow:

1. User fills ContactForm (React island on /contact/)
2. Client-side validation (Zod schema)
3. Honeypot field check (hidden field — if filled, don't submit)
4. POST to https://formspree.io/f/{form_id}
   {
     name, email, company, jobTitle,
     companySize, industry, projectType,
     budgetRange, timeline, message,
     _replyto: email,          // Formspree: reply-to header
     _subject: "New inquiry from {company}",
   }
5. Formspree handles:
   - Spam filtering (built-in reCAPTCHA, honeypot validation)
   - Email notification to configured recipients
   - Optional: webhook to HubSpot CRM API
6. Client receives redirect/AJAX response → show success message

Formspree Configuration:
  - Form ID configured in environment (VITE_FORMSPREE_ID)
  - Email notifications → CRO (007) + VP-SALES (116) emails
  - Spam protection: reCAPTCHA (invisible), honeypot
  - Auto-responder: confirmation email to submitter
  - HubSpot integration: webhook on submission → create contact + deal

Alternative: Getform.io (same pattern, different provider)
```

### 7.3 Newsletter Signup

```
Same pattern as contact form:

1. User enters email in NewsletterForm (React island in footer)
2. Client-side email validation
3. POST to https://formspree.io/f/{newsletter_form_id}
4. Formspree forwards to email marketing service (Mailchimp, ConvertKit, etc.)
5. Double opt-in email sent by email marketing service
6. Success message shown to user
```

### 7.4 Analytics (Plausible)

```html
<!-- Injected in BaseLayout.astro <head>, deferred -->
<script
  defer
  data-domain="thekinghampopotamus.github.io/195_shades_of_agents-"
  src="https://plausible.io/js/script.js"
/>
```

Custom events tracked via `plausible()` API (called from React islands):
- `agent_profile_view` with props: `{ code, department, tier }`
- `network_interaction` with props: `{ action: "click" | "filter" | "zoom" }`
- `contact_form_submit`
- `search_query` with props: `{ query, results_count }`
- `cta_click` with props: `{ location, label }`

### 7.5 Calendar (Calendly)

```
- Embedded inline widget on /contact/ page
- Lazy-loaded: Calendly script loaded only when widget scrolls into view
- Not in initial bundle — loaded via <script> tag with Intersection Observer
- Calendly scheduling link for demo requests
```

### 7.6 Search (Pagefind)

```
Build-time:
  - Pagefind runs after Astro build, indexes all HTML in dist/
  - Generates compressed search index chunks in dist/_pagefind/

Runtime:
  - CommandPalette React island loads Pagefind JS (~5KB) on first Cmd+K press
  - Queries run entirely client-side (fetches index chunks on demand)
  - Results grouped by type: Agents, Departments, Blog, Pages
  - Navigation on result selection

Configuration (in Astro templates):
  - data-pagefind-body on <main> content areas
  - data-pagefind-ignore on <header>, <footer>, navigation
  - data-pagefind-meta="title" on page titles for search result display
  - data-pagefind-weight="2" on agent names/codes for boosted ranking
```

---

## 8. SECURITY AND COMPLIANCE

### 8.1 Security Headers

GitHub Pages has limited header configuration. Security headers are set via a combination of `<meta>` tags and HTML attributes:

**Headers GitHub Pages supports:**
- HTTPS: Enforced automatically by GitHub Pages
- HSTS: Automatically applied by GitHub

**Headers set via `<meta>` tags in BaseLayout.astro:**
```html
<!-- CSP via meta tag (limited but functional) -->
<meta
  http-equiv="Content-Security-Policy"
  content="
    default-src 'self';
    script-src 'self' https://plausible.io https://assets.calendly.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https://cdn.sanity.io;
    font-src 'self';
    connect-src 'self' https://plausible.io https://formspree.io;
    frame-src https://calendly.com;
    object-src 'none';
    base-uri 'self';
  "
/>
<meta http-equiv="X-Content-Type-Options" content="nosniff" />
```

**Note:** GitHub Pages does not support custom HTTP headers via configuration files (unlike Netlify's `_headers` or Vercel's `vercel.json`). The `<meta http-equiv>` approach provides CSP coverage for browsers but is not as robust as HTTP-level headers. If stricter header control is needed, a Cloudflare proxy in front of GitHub Pages can add custom HTTP headers — this is a future option, not a v1 requirement.

### 8.2 Form Security (Client-Side Only)

Since there is no server:

```
1. Honeypot Field: Hidden field in forms — if filled by bots, submission is silently discarded client-side
2. Zod Validation: Client-side schema validation before submission
3. Formspree Spam Protection: Built-in reCAPTCHA + honeypot on the service side
4. No PII Storage: Form data goes directly to Formspree → email/CRM. Nothing stored on GitHub Pages.
5. HTTPS: GitHub Pages enforces HTTPS. Formspree API uses TLS.
6. Input Sanitization: Client-side sanitization before display (prevents XSS in success messages)
```

### 8.3 Cookie Consent

```
Minimal cookie usage:
- Plausible Analytics: cookieless by default (no consent needed)
- Theme preference: localStorage (not a cookie, no consent needed)
- Calendly embed: may set third-party cookies
  → Calendly is lazy-loaded only on /contact/ page
  → Show consent notice before loading Calendly embed

Implementation:
- No first-party cookies at all
- Cookie banner only on /contact/ page for Calendly
- Consent stored in localStorage
- Banner is a small Astro component (no React island needed)
```

### 8.4 Dependency Security

```
- npm audit runs on every CI build (GitHub Actions)
- Dependabot enabled on the repository for automated PRs
- No direct CDN script includes (all packages via npm, bundled by Astro)
- Exception: Plausible script from plausible.io CDN (trusted, SRI hash added)
- Lock file (package-lock.json) committed and used in CI (npm ci)
```

### 8.5 Repository Security

```
- gh-pages branch: protected, only GitHub Actions can push
- main branch: protected, requires PR review
- GitHub Actions secrets: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_TOKEN (read-only)
- No secrets in client-side code — form IDs and analytics domains are public-safe
- Sanity API token is read-only and only used during CI build (never shipped to client)
- .gitignore excludes node_modules, dist/, .env, src/data/sanity/ (local dev only)
```

---

## 9. DEPLOYMENT ARCHITECTURE

### 9.1 GitHub Pages Configuration

```
Repository: TheKingHippopotamus/195_shades_of_agents-
Source: gh-pages branch (deployed by GitHub Actions)
Build: GitHub Actions workflow (not GitHub's built-in Jekyll)
Base URL: /195_shades_of_agents-/ (repository name as path prefix)
Custom Domain: optional (CNAME file in repo root)

Important: Astro must be configured with:
  site: "https://thekinghampopotamus.github.io"
  base: "/195_shades_of_agents-"

All internal links must use the base path prefix.
Astro handles this automatically when configured.
```

### 9.2 GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml

name: Build and Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:  # Manual trigger (e.g., after Sanity content update)
  repository_dispatch:
    types: [sanity-content-update]  # Triggered by Sanity webhook

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Pre-build — Parse agent data
        run: npx tsx scripts/build-agent-data.ts

      - name: Pre-build — Fetch Sanity CMS content
        run: npx tsx scripts/fetch-sanity-content.ts
        env:
          SANITY_PROJECT_ID: ${{ secrets.SANITY_PROJECT_ID }}
          SANITY_DATASET: ${{ secrets.SANITY_DATASET }}
          SANITY_API_TOKEN: ${{ secrets.SANITY_API_TOKEN }}

      - name: Build Astro site
        run: npm run build

      - name: Post-build — Generate search index
        run: npx pagefind --site dist

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 9.3 CI Pipeline (Pull Requests)

```yaml
# .github/workflows/ci.yml

name: CI

on:
  pull_request:
    branches: [main]

jobs:
  typecheck:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npx tsc --noEmit

  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npx eslint . --max-warnings 0
      - run: npx prettier --check .

  test-unit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npx vitest run --coverage

  build:
    runs-on: ubuntu-latest
    needs: [typecheck, lint]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npx tsx scripts/build-agent-data.ts
      - name: Fetch Sanity CMS content
        run: npx tsx scripts/fetch-sanity-content.ts
        env:
          SANITY_PROJECT_ID: ${{ secrets.SANITY_PROJECT_ID }}
          SANITY_DATASET: ${{ secrets.SANITY_DATASET }}
          SANITY_API_TOKEN: ${{ secrets.SANITY_API_TOKEN }}
      - run: npm run build
      - run: npx pagefind --site dist

      # Lighthouse audit on built site
      - name: Serve and audit
        run: |
          npx serve dist -l 4321 &
          sleep 3
          npx lighthouse http://localhost:4321 --output json --output-path ./lighthouse.json --chrome-flags="--headless --no-sandbox"
          node -e "
            const r = require('./lighthouse.json');
            const scores = {
              performance: r.categories.performance.score * 100,
              accessibility: r.categories.accessibility.score * 100,
              'best-practices': r.categories['best-practices'].score * 100,
              seo: r.categories.seo.score * 100,
            };
            console.log('Lighthouse scores:', scores);
            const failed = Object.entries(scores).filter(([k, v]) => v < 90);
            if (failed.length) {
              console.error('FAILED:', failed);
              process.exit(1);
            }
          "

  test-e2e:
    runs-on: ubuntu-latest
    needs: [build]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npx tsx scripts/build-agent-data.ts
      - name: Fetch Sanity CMS content
        run: npx tsx scripts/fetch-sanity-content.ts
        env:
          SANITY_PROJECT_ID: ${{ secrets.SANITY_PROJECT_ID }}
          SANITY_DATASET: ${{ secrets.SANITY_DATASET }}
          SANITY_API_TOKEN: ${{ secrets.SANITY_API_TOKEN }}
      - run: npm run build
      - run: npx pagefind --site dist
      - run: npx playwright install --with-deps
      - run: npx playwright test
```

### 9.4 Branch Strategy

```
main          → Production (auto-deploys to GitHub Pages)
feat/*        → PR previews (build check in CI, no deployment)
fix/*         → PR previews (build check in CI, no deployment)
content/*     → Content PRs (blog posts, case studies)
gh-pages      → Deployed output (managed by GitHub Actions, never edited manually)
```

**Note on preview deployments:** GitHub Pages does not support per-PR preview deployments like Vercel. For PR previews, the CI workflow builds the site and runs Lighthouse against it locally. If preview URLs are needed, the team can use the `peaceiris/actions-gh-pages` action with a separate staging repo, or add Netlify as a PR preview service alongside GitHub Pages for production.

### 9.5 Custom Domain (Optional)

```
If a custom domain is desired (e.g., nexus-ai.com):

1. Add CNAME file to public/ directory with domain name
2. Configure DNS:
   - A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - Or CNAME: thekinghampopotamus.github.io
3. Enable "Enforce HTTPS" in repo Settings → Pages
4. Update astro.config.mjs:
   site: "https://nexus-ai.com"
   base: "/"  (no repo prefix needed with custom domain)
5. Update all references to site URL (analytics, sitemap, OG tags)
```

---

## 10. TESTING STRATEGY

### 10.1 Test Pyramid

```
                    /  E2E Tests  \           Playwright
                   /  (Playwright)  \         ~20 tests
                  /                    \
                 /  Integration Tests    \     Vitest + Testing Library
                /  (Component + Build)     \  ~50 tests
               /                              \
              /    Unit Tests                    \ Vitest
             /    (utils, parsers, schemas)        \ ~100 tests
            ──────────────────────────────────────────
```

### 10.2 Test Scope

| Layer | Tool | What We Test |
|-------|------|-------------|
| **Unit** | Vitest | Agent MD parser, Zod schema validation, utility functions, data transformations |
| **Component** | Vitest + Testing Library | React islands (AgentDirectory filter logic, ContactForm validation, ThemeToggle) |
| **Build** | Vitest | Build script produces valid agents.json with all 195 agents, departments.json with 20 departments |
| **E2E** | Playwright | Critical user journeys against built static site (served locally) |
| **Visual** | Playwright screenshots | Regression detection for key pages |
| **Performance** | Lighthouse CI | >95 on all categories |
| **Accessibility** | axe-core (via Playwright) | WCAG 2.1 AA compliance on all pages |
| **Links** | Custom script | No broken internal links across 240+ pages |

### 10.3 Critical E2E Flows

```
1. Homepage → Agent Directory → Filter by Department → Agent Profile → Related Agent
2. Homepage → Network Graph → Click Node → Agent Profile
3. Homepage → Contact → Fill Form → Submit → Success Message
4. Blog Index → Blog Post → Related Posts
5. Search (Cmd+K) → Type Query → Select Result → Navigate
6. Mobile: Hamburger → Nav → Agent Directory → Agent Card → Profile
7. Dark/Light mode toggle persists across navigation
8. All 195 agent profile pages render correctly (automated check)
9. All 20 department pages render correctly (automated check)
```

---

## 11. MONITORING AND OBSERVABILITY

### 11.1 Production Monitoring

| Tool | Purpose | Cost |
|------|---------|------|
| Plausible | Traffic, engagement, custom events, conversion funnel | ~$9/month |
| Better Uptime | Uptime monitoring, status page | $0 (free tier) |
| GitHub Actions | Build logs, deployment history, failure alerts | $0 (free for public repos) |
| Sentry (optional) | Client-side error tracking in React islands | $0 (free tier) |

**Note:** GitHub Pages does not provide server logs, edge function logs, or real-user performance metrics (unlike Vercel Analytics). Plausible provides traffic data, and real-user Core Web Vitals can be monitored via Google Search Console (free).

### 11.2 Alerts

```
- Build failure → GitHub Actions notification (email + Slack integration)
- Uptime check fails → Better Uptime alert (email + Slack)
- Lighthouse score drops below 90 → CI gate blocks merge
- Client-side errors → Sentry alert (if enabled)
```

### 11.3 Uptime

```
- GitHub Pages provides 99.95%+ uptime SLA
- External uptime monitor (Better Uptime):
  - Checks: /, /agents/, /contact/ every 60 seconds
  - Alert: Slack + email if down >2 minutes
- Status page: statuspage via Better Uptime (free tier)
```

---

## 12. ARCHITECTURE DECISION RECORDS

### ADR-001: Astro over Next.js (Revised from v1.0)

**Context:** v1.0 selected Next.js 14+ for RSC, ISR, API routes, and Vercel-native deployment. Leadership directed switch to GitHub Pages, which is static-only hosting.

**Decision:** Astro 4+ with React islands.

**Rationale:**
1. **GitHub Pages is static-only.** Next.js `output: 'export'` strips RSC, ISR, API routes, middleware, and edge functions — the exact features that justified its selection. What remains is a static site generator with a ~90KB React runtime tax on every page.
2. **Astro ships zero JS by default.** On content pages (195 agent profiles, 20 departments, blog posts), Astro produces pure HTML. Next.js static export still ships the React runtime. For a site where ~230 of ~240 pages are content-only, this is a massive performance win.
3. **Islands architecture is perfect for this project.** The PRD identifies ~5-7 interactive features (agent directory, network graph, org chart, tech radar, search, forms, theme toggle). These are distinct, bounded interactive regions within otherwise static pages. Astro's explicit `client:load` / `client:visible` / `client:idle` directives give precise control over when (and whether) React loads.
4. **Built-in Content Collections + build-time data.** Astro's Content Collections provide type-safe frontmatter validation and MDX processing for git-versioned content (services, legal). Sanity CMS content (blog, case studies) is fetched at build time and fed to Astro as JSON — Astro handles both patterns natively.
5. **Simpler deployment.** `astro build` → `dist/` directory → push to gh-pages. No special configuration needed. Next.js static export requires additional setup for trailing slashes, image handling, and base path.
6. **Native View Transitions API support.** Astro has built-in View Transitions, eliminating the need for Framer Motion page transitions.

**Consequences:**
- Astro is TRIAL in our tech stack (not ADOPT like Next.js). This is acceptable because the hosting constraint (GitHub Pages) makes Astro the technically superior choice. We are not choosing Astro over Next.js on its own merits — we are choosing it because the deployment platform favors it.
- Component development splits into Astro components (zero JS) and React islands (JS). Engineers need to understand when to use each.
- No server-side code. Forms, auth, and any server logic must use third-party services.
- If we later move to Vercel or another platform with server capabilities, migrating from Astro to Next.js is straightforward (React components transfer directly, Astro templates become RSC page shells).

### ADR-002: Hybrid Content Strategy (Sanity CMS + MDX in Git)

**Context:** v1.0 used Sanity CMS with webhook-triggered ISR. v2.0 replaced Sanity entirely with MDX in git because GitHub Pages cannot receive webhooks. v2.1 re-incorporates Sanity as a build-time-only data source per the approved stack, while keeping MDX for code-adjacent content.

**Decision:** Dual content strategy — Sanity CMS for marketing content (blog, case studies, testimonials, FAQs), MDX in git for code-adjacent content (services, legal, industries).

**Rationale:**
1. **Sanity is in the approved stack.** The project lead explicitly approved Sanity CMS as part of the technology stack. The architecture must support it.
2. **Non-technical authors need a GUI.** Marketing (CONTENT-MKT 129, PMM 127) and Support (CSM 135) agents author blog posts, case studies, and FAQs. Sanity Studio provides a rich editing experience with real-time preview, image management, and Portable Text — far superior to editing MDX files in a git repo.
3. **Build-time-only eliminates the "no server" problem.** Sanity content is fetched via GROQ API during GitHub Actions build and written to JSON files. Astro reads those JSON files to generate static HTML. The deployed site has zero runtime Sanity dependency — no API calls, no CDN requests, no Sanity SDK in the client bundle.
4. **MDX remains optimal for code-adjacent content.** Services, capabilities, legal pages, and industry landing pages reference code, embed React components, and benefit from git version control and PR-based review. These stay as MDX in `src/content/`.
5. **Content update triggers work without webhooks.** Three options: manual workflow_dispatch, Sanity webhook → GitHub repository_dispatch (supported by GitHub API), or scheduled cron builds. All bypass the "GitHub Pages can't receive webhooks" limitation by triggering at the CI level, not the hosting level.

**Consequences:**
- Sanity Growth plan adds ~$15/month to operating costs.
- Build pipeline has an additional step (Sanity fetch) adding ~10-15 seconds to build time.
- Three GitHub Actions secrets required: `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_TOKEN`.
- Content ownership is split across two systems — the content ownership table (section 3.3) documents which content lives where.
- If Sanity becomes unnecessary (e.g., all authors become git-comfortable), the Sanity fetch step can be removed without other architecture changes.

### ADR-003: Formspree over Custom API Routes

**Context:** v1.0 used Next.js API routes for contact form submission with server-side validation, rate limiting, and CRM integration. GitHub Pages has no server.

**Decision:** Formspree (third-party form endpoint).

**Rationale:**
1. **No server = no API routes.** GitHub Pages serves static files only.
2. **Formspree handles what our API route did:** spam filtering (reCAPTCHA), email notification, webhook forwarding to CRM (HubSpot).
3. **Security:** Client-side validation (Zod) + honeypot field + Formspree's server-side spam protection provides adequate security for a contact form.
4. **Cost:** Formspree free tier: 50 submissions/month. Growth: $10/month for 1,000 submissions.

**Consequences:**
- Rate limiting is handled by Formspree, not by us. We cannot customize rate limits precisely.
- Form submission data passes through a third party. Formspree's privacy policy applies.
- If submission volume exceeds Formspree's limits, alternatives include Getform, Basin, or a standalone serverless function on Cloudflare Workers / AWS Lambda (separate from the website).

### ADR-004: Pagefind over Algolia

**Context:** Both were considered for site search. Unchanged from v1.0.

**Decision:** Pagefind.

**Rationale:**
1. Content is static (195 agents, departments, blog posts) — no need for real-time indexing.
2. Zero runtime cost — index built at compile time, queries run client-side.
3. ~5KB client bundle vs Algolia's ~40KB.
4. No API keys, no third-party dependency, no monthly cost.
5. Sub-50ms query performance for our content volume.
6. **GitHub Pages bonus:** Search works entirely client-side with no external API calls.

**Consequences:** If content volume grows dramatically (10,000+ blog posts), we may need to migrate to Algolia. For 250+ pages, Pagefind is more than sufficient.

### ADR-005: Plausible over GA4

**Context:** Unchanged from v1.0.

**Decision:** Plausible as primary (and only) analytics for V1.

**Rationale:**
1. Privacy-first: Plausible is cookieless — no cookie consent banner needed for analytics.
2. <1KB script vs GA4's 45KB.
3. Provides all metrics defined in the PRD.
4. GDPR/CCPA compliant by default.
5. **GitHub Pages bonus:** One fewer third-party script, smaller page weight.

### ADR-006: D3.js for Visualizations (Not React-Flow)

**Context:** Unchanged from v1.0.

**Decision:** D3.js directly.

**Rationale:**
1. Three custom visualizations required: force-directed network, collapsible hierarchy, radar chart. D3.js handles all three.
2. react-flow is optimized for editable node-based UIs — our visualizations are read-only.
3. D3.js gives full rendering control for performance (canvas fallback for 195 nodes).
4. Smaller bundle: D3.js tree-shaken modules (~30KB) vs react-flow (~60KB).

### ADR-007: Nano Stores for Cross-Island State

**Context:** Astro islands are isolated React roots. React Context cannot span across them. Theme state (dark/light) needs to be shared.

**Decision:** Nano Stores (~500 bytes).

**Rationale:**
1. Nano Stores is Astro's recommended solution for shared state across framework islands.
2. ~500 bytes vs Zustand's ~1KB — minimal overhead.
3. Framework-agnostic — works with React, Vue, Svelte, and plain JS.
4. Only used for theme state. Everything else is island-local or URL-based.

---

## APPENDIX A: Page-Level JS Budget

| Page | Rendering | Data Source | JS Shipped |
|------|-----------|------------|------------|
| `/` (Homepage) | Static HTML | Agent JSON (featured) | ~5KB (stats counter, CSS animations) |
| `/about/` | Static HTML | Static content | ~15KB (org chart island, visible) |
| `/about/leadership/` | Static HTML | Agent JSON (11 C-Suite) | 0KB |
| `/about/culture/` | Static HTML | Static content | 0KB |
| `/agents/` | Static HTML + React island | Agent JSON (195) | ~50KB (directory: React + search/filter) |
| `/agents/[code]/` (x195) | Static HTML | Agent JSON | 0KB |
| `/departments/` | Static HTML | Department JSON (20) | 0KB |
| `/departments/[slug]/` (x20) | Static HTML | Dept + Agent JSON | 0KB |
| `/capabilities/` | Static HTML | Static content | 0KB |
| `/capabilities/tech-stack/` | Static HTML + React island | Tech radar JSON | ~55KB (React + D3.js radar) |
| `/capabilities/lifecycle/` | Static HTML + React island | Lifecycle JSON | ~50KB (React + timeline) |
| `/capabilities/ai-ml/` | Static HTML | Static content | 0KB |
| `/how-we-work/` | Static HTML | Static content | 0KB |
| `/network/` | Static HTML + React island | Agent JSON | ~65KB (React + D3.js graph) |
| `/industries/[slug]/` (x5) | Static HTML | Static content | 0KB |
| `/blog/` | Static HTML | Sanity JSON (build-time) | 0KB |
| `/blog/[slug]/` | Static HTML | Sanity JSON (build-time) | 0KB |
| `/case-studies/` | Static HTML | Sanity JSON (build-time) | 0KB |
| `/case-studies/[slug]/` | Static HTML | Sanity JSON (build-time) | 0KB |
| `/contact/` | Static HTML + React island | Static + Formspree | ~50KB (React + form + Calendly lazy) |
| `/careers/` | Static HTML | Static content | 0KB |
| `/press/` | Static HTML | Static content | 0KB |
| `/developers/` | Static HTML | Static content | 0KB |
| `/privacy/` | Static HTML | Static content | 0KB |
| `/terms/` | Static HTML | Static content | 0KB |

**Summary:** ~230 pages ship 0KB JavaScript. ~5 interactive pages ship 50-65KB each (React runtime + island code). Global islands (CommandPalette, ThemeToggle) add ~10KB on idle load across all pages.

## APPENDIX B: Third-Party Service Summary

| Service | Purpose | Cost Estimate |
|---------|---------|---------------|
| GitHub Pages | Hosting, CDN, HTTPS | $0 (free) |
| GitHub Actions | CI/CD build + deploy | $0 (free for public repos) |
| Sanity (Growth) | CMS for blog, case studies, testimonials, FAQs | ~$15/month |
| Plausible | Analytics | ~$9/month |
| Formspree (Growth) | Contact form, newsletter | ~$10/month |
| Calendly (Basic) | Demo booking | $0 (free tier) |
| Better Uptime | Uptime monitoring | $0 (free tier) |
| **Total estimated** | | **~$34/month** |

**Cost comparison with v1.0:** $45-65/month (Next.js/Vercel) → $34/month (Astro/GitHub Pages + Sanity). Eliminated Vercel Pro ($20) and Upstash ($0-5). Retained Sanity CMS for content authoring.

## APPENDIX C: Migration Path (If Hosting Changes Later)

If the project outgrows GitHub Pages (need server-side code, API routes, ISR, auth):

```
Astro on GitHub Pages → Astro on Vercel/Netlify
  - Zero code changes. Astro deploys to Vercel/Netlify natively.
  - Add server-side rendering (SSR) for specific pages if needed.
  - Add Astro API routes (endpoints) for forms, webhooks.
  - Upgrade Sanity integration from build-time-only to real-time preview + ISR.

Astro on Vercel → Next.js on Vercel (if needed)
  - React islands transfer directly (they're already React components).
  - Astro templates become Next.js page.tsx files (Server Components).
  - Content Collections → Next.js MDX or Sanity integration.
  - Build scripts transfer unchanged.
```

The architecture is designed to be hosting-portable. Moving from GitHub Pages to Vercel requires zero code changes for Astro. Moving from Astro to Next.js requires template conversion but all React components and build scripts transfer directly.

---

**Document prepared by:** CTO (Agent 002)
**Date:** 2026-02-15
**Version:** 2.1
**Status:** APPROVED — Reflects final approved stack (Astro 4+ / React Islands / Sanity CMS / GitHub Pages)
**Reviewers:** VP-ARCH (014), ARB-AGENT (181)
**Next Steps:**
1. VP-ARCH (014) reviews revised system architecture and ADRs
2. ARB-AGENT (181) conducts architecture review gate
3. DIR-FE (015) and STAFF-FE (027) validate Astro + React islands approach
4. DIR-SEC (108) reviews security posture for static-only hosting
5. Design team (design-lead) confirms component approach works with Astro/React split
6. Engineering team begins Sprint 1 implementation
