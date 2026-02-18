# NEXUS AI Corporate Website — UX Wireframes

**Document ID:** UX-WF-2026-001
**Version:** 1.0
**Author:** SR-UXD (Agent 081 — "Compass")
**Date:** February 15, 2026
**Status:** COMPLETE
**References:**
- PRD: `website/docs/PRD-NEXUS-CORPORATE-WEBSITE.md`
- Design System: `website-project/design/DESIGN-SYSTEM.md`

---

## TABLE OF CONTENTS

1. [Global Navigation & Footer](#1-global-navigation--footer)
2. [Homepage](#2-homepage)
3. [About Page](#3-about-page)
4. [Agents Directory](#4-agents-directory)
5. [Individual Agent Profile](#5-individual-agent-profile)
6. [Department Overview](#6-department-overview)
7. [Department Deep-Dive](#7-department-deep-dive)
8. [Blog Index](#8-blog-index)
9. [Blog Post](#9-blog-post)
10. [Contact Page](#10-contact-page)
11. [Responsive Behavior Summary](#11-responsive-behavior-summary)
12. [Navigation Flow Map](#12-navigation-flow-map)

---

## 1. GLOBAL NAVIGATION & FOOTER

These persistent elements frame every page. Defined once here, referenced by all wireframes below.

### 1.1 Desktop Header (>= 1024px)

```
+====================================================================+
| [N] NEXUS AI     About v  Our Team  How We Work v  Services v      |
|                  Resources v               [sun/moon] [Contact ->] |
+====================================================================+
```

**Component Hierarchy:**
1. Logo (link to `/`) -- left-aligned
2. Primary Nav Links (horizontal, 8px gap)
   - About (dropdown: About, Leadership, Culture & Values)
   - Our Team (link to `/agents`)
   - How We Work (dropdown: Process Overview, Project Lifecycle, Communication)
   - Services (dropdown: Capabilities, Tech Stack, AI/ML)
   - Resources (dropdown: Blog, Case Studies, Press, Developers)
3. Utility Area -- right-aligned
   - Theme toggle button (sun/moon icon, 32x32)
   - Primary CTA button: "Contact" (Quantum Blue bg)

**Behavior:**
- Fixed to top, z-index: 30
- At page top: transparent background
- After 50px scroll: `bg-primary/80` + `backdrop-blur-lg`
- Dropdowns open on hover with 200ms delay, close on mouse-leave
- Active page link gets quantum-blue underline

### 1.2 Mobile Header (< 1024px)

```
+----------------------------------+
| [N] NEXUS AI        [moon] [=]   |
+----------------------------------+
```

**Hamburger opens full-screen overlay:**

```
+----------------------------------+
|                            [X]   |
|                                  |
|  About                     [+]   |
|  --------------------------------|
|  Our Team                        |
|  --------------------------------|
|  How We Work                [+]  |
|  --------------------------------|
|  Services                   [+]  |
|  --------------------------------|
|  Resources                  [+]  |
|  --------------------------------|
|                                  |
|  +----------------------------+  |
|  |       Contact Us           |  |
|  +----------------------------+  |
|                                  |
|  [Dark/Light Mode Toggle]        |
+----------------------------------+
```

**Behavior:**
- Overlay slides in from right, 300ms
- Expandable sections use accordion pattern
- Escape key or X button closes
- Focus is trapped within overlay while open

### 1.3 Footer (All Pages)

```
+====================================================================+
|                                                                     |
|  [N] NEXUS AI                                                       |
|  195 AI Agents building the future of software.                     |
|                                                                     |
|  -- Company --    -- Platform --    -- Resources --   -- Legal --    |
|  About            How We Work       Blog              Terms         |
|  Our Team         Services          Documentation     Privacy       |
|  Careers          Industries        Open Source        Cookies       |
|  Contact          Case Studies      Events                          |
|                   Technology        Media Kit                       |
|                                                                     |
|  -- Stay Updated --------------------------------------------------+|
|  [ Enter your email...                    ] [Subscribe]             |
|                                                                     |
|  [GitHub]  [LinkedIn]  [X/Twitter]  [YouTube]                       |
|                                                                     |
|  ================================================================== |
|  (c) 2026 NEXUS AI. All rights reserved.                            |
+====================================================================+
```

**Component Hierarchy:**
1. Logo + tagline
2. Four-column link grid (Company, Platform, Resources, Legal)
3. Newsletter signup (email input + subscribe button)
4. Social media icons (24x24, mist color, quantum blue on hover)
5. Divider
6. Copyright bar (caption text, muted)

**Responsive:**
- Desktop: 4-column grid
- Tablet: 2-column grid
- Mobile: single column, stacked

---

## 2. HOMEPAGE (`/`)

**Purpose:** First impression. Communicate what NEXUS AI is, why it is different, and drive visitors deeper into the site or to the contact page.

**User Actions:** Scroll to explore, click CTAs, browse agent carousel, navigate to sub-pages.

### 2.1 Full Page Wireframe

```
+====================================================================+
|                        [HEADER - fixed]                             |
+====================================================================+

+====================================================================+
|                                                                     |
|               (Animated mesh gradient background)                   |
|               (Subtle floating node/particle network)               |
|                                                                     |
|                         [NEXUS AI Logo]                              |
|                                                                     |
|              195 AI Agents. 20 Departments.                         |
|              One Autonomous Agency.                (display/h1)     |
|                                                                     |
|              We don't just build software.                          |
|              Our AI agents plan, design, develop,  (body-lg, mist)  |
|              test, and ship it.                                     |
|                                                                     |
|        +------------------+    +---------------------+              |
|        |  Request Demo    |    |  Meet the Team ->   |              |
|        |  (primary CTA)   |    |  (secondary CTA)    |              |
|        +------------------+    +---------------------+              |
|                                                                     |
|   [ o ] [ o ] [ o ] [ o ] [ o ] [ o ] [ o ] [ o ] [ o ] [ o ]      |
|   (Scrolling avatar strip - 20 featured agents, auto-scroll)       |
|                                                                     |
+====================================================================+
|                                                          SECTION 2  |
|  THE PROBLEM                                                        |
|  ------------------------------------------------------------------ |
|                                                                     |
|  +------------------+ +------------------+ +------------------+     |
|  | [icon]           | | [icon]           | | [icon]           |     |
|  |                  | |                  | |                  |     |
|  | Talent           | | Slow             | | Coordination    |     |
|  | Shortages        | | Delivery         | | Overhead        |     |
|  |                  | |                  | |                  |     |
|  | Finding and      | | Projects drag    | | Managing 10+    |     |
|  | retaining top    | | on for months    | | specialists     |     |
|  | engineers is...  | | past deadline... | | across teams... |     |
|  +------------------+ +------------------+ +------------------+     |
|                                                                     |
+====================================================================+
|                                                          SECTION 3  |
|  HOW WE'RE DIFFERENT                                                |
|  ------------------------------------------------------------------ |
|                                                                     |
|  +------------------+ +------------------+ +------------------+     |
|  | [animated icon]  | | [animated icon]  | | [animated icon]  |     |
|  |                  | |                  | |                  |     |
|  | 195 Specialized  | | 13-Stage         | | Autonomous      |     |
|  | Agents           | | Lifecycle        | | Collaboration   |     |
|  |                  | |                  | |                  |     |
|  | From C-Suite to  | | Every project    | | Agents talk to  |     |
|  | junior devs,     | | follows a        | | each other,     |     |
|  | every role is    | | proven path...   | | escalate, and   |     |
|  | covered...       | |                  | | resolve...      |     |
|  |                  | |                  | |                  |     |
|  | [Learn More ->]  | | [See Lifecycle]  | | [How It Works]  |     |
|  +------------------+ +------------------+ +------------------+     |
|                                                                     |
+====================================================================+
|                                                          SECTION 4  |
|  MEET THE TEAM                                                      |
|  ------------------------------------------------------------------ |
|                                                                     |
|  <---  +----------+ +----------+ +----------+ +----------+  --->   |
|        | [avatar] | | [avatar] | | [avatar] | | [avatar] |         |
|        |          | |          | |          | |          |         |
|        | CEO      | | CTO      | | VP-ENG   | | SR-FE    |         |
|        | "The     | | "Arch-   | | "The     | | "React   |         |
|        |  Captain"| |  itect"  | |  Builder"| |  Wizard" |         |
|        |          | |          | |          | |          |         |
|        | Chief    | | Chief    | | VP of    | | Senior   |         |
|        | Exec.    | | Tech.    | | Eng.     | | FE Eng.  |         |
|        | Officer  | | Officer  | |          | |          |         |
|        +----------+ +----------+ +----------+ +----------+         |
|                                                                     |
|                    [Explore All 195 Agents ->]                      |
|                                                                     |
+====================================================================+
|                                                          SECTION 5  |
|  CAPABILITIES                                                       |
|  ------------------------------------------------------------------ |
|                                                                     |
|  +------------+ +------------+ +------------+ +------------+       |
|  | [icon]     | | [icon]     | | [icon]     | | [icon]     |       |
|  | Frontend   | | Backend    | | Mobile     | | AI / ML    |       |
|  | React,     | | Python,    | | React      | | LLMs,      |       |
|  | Next.js... | | Node.js... | | Native...  | | MLOps...   |       |
|  +------------+ +------------+ +------------+ +------------+       |
|  +------------+ +------------+ +------------+ +------------+       |
|  | [icon]     | | [icon]     | | [icon]     | | [icon]     |       |
|  | Cloud &    | | Security   | | Design     | | Data       |       |
|  | Infra      | |            | |            | | Eng.       |       |
|  | AWS, K8s...| | AppSec...  | | UI/UX...   | | Pipelines..|       |
|  +------------+ +------------+ +------------+ +------------+       |
|                                                                     |
|  Hover reveals tech stack badges for each capability                |
|                                                                     |
+====================================================================+
|                                                          SECTION 6  |
|  BY THE NUMBERS                                       (full-width)  |
|  ------------------------------------------------------------------ |
|                                                                     |
|       195              20              10              13           |
|     Agents         Departments       Tiers       Lifecycle Stages   |
|                                                                     |
|  (Numbers animate from 0 on scroll-into-view, counter animation)   |
|                                                                     |
+====================================================================+
|                                                          SECTION 7  |
|  HOW A PROJECT WORKS                                                |
|  ------------------------------------------------------------------ |
|                                                                     |
|  [1. Attract] --> [2. Qualify] --> [3. Close] --> [4. Deliver] -->  |
|                                                   [5. Grow]        |
|                                                                     |
|  (Horizontal scroll timeline, each step expandable with detail)    |
|  (Click a step to see which agents activate and what outputs       |
|   are produced)                                                     |
|                                                                     |
+====================================================================+
|                                                          SECTION 8  |
|  WHAT CLIENTS SAY                                                   |
|  ------------------------------------------------------------------ |
|                                                                     |
|  <---  +------------------------------+  --->                      |
|        | "Quote from a satisfied       |                            |
|        |  client about NEXUS AI..."    |                            |
|        |                               |                            |
|        | -- Client Name, Title         |                            |
|        |    Company Name               |                            |
|        +------------------------------+                             |
|                                                                     |
|  (Carousel of testimonial cards, auto-rotate, pause on hover)      |
|  (Placeholder content for CMS)                                     |
|                                                                     |
+====================================================================+
|                                                          SECTION 9  |
|  READY TO BUILD SOMETHING?                        (dark full-bleed) |
|  ------------------------------------------------------------------ |
|                                                                     |
|  Let 195 AI agents turn your vision into reality.                   |
|                                                                     |
|  +------------------+    +---------------------+                    |
|  |  Get in Touch    |    |  Schedule a Demo    |                    |
|  |  (primary CTA)   |    |  (secondary CTA)    |                    |
|  +------------------+    +---------------------+                    |
|                                                                     |
+====================================================================+

+====================================================================+
|                            [FOOTER]                                 |
+====================================================================+
```

### 2.2 Component Hierarchy

| Section | Container | Components |
|---------|-----------|------------|
| Hero | full-bleed (100vh) | Logo, Display heading, body-lg subtext, PrimaryCTA, SecondaryCTA, AvatarStrip |
| The Problem | container-content | SectionHeading, 3x PainPointCard (icon, title, body) |
| How We're Different | container-content | SectionHeading, 3x FeatureCard (icon, title, body, link) |
| Meet the Team | container-wide | SectionHeading, AgentCarousel (6-8 AgentCards), CTA link |
| Capabilities | container-content | SectionHeading, 8x CapabilityCard (icon, title, tech badges) |
| By the Numbers | container-wide | 4x StatCounter (number, label) |
| Client Journey | container-content | HorizontalTimeline (5 steps), expandable detail panels |
| Social Proof | container-content | TestimonialCarousel (placeholder cards) |
| Final CTA | full-bleed | H2 heading, PrimaryCTA, SecondaryCTA |

### 2.3 Interactive Elements

| Element | Interaction | Result |
|---------|------------|--------|
| Primary CTA "Request Demo" | Click | Navigate to `/contact` |
| Secondary CTA "Meet the Team" | Click | Navigate to `/agents` |
| Avatar strip | Auto-scroll, hover pauses | Hover shows agent name tooltip |
| Avatar in strip | Click | Navigate to `/agents/:code` |
| Pain point cards | Scroll-triggered | Fade-up animation, staggered 0.08s |
| Feature cards "Learn More" | Click | Navigate to relevant sub-page |
| Agent carousel | Swipe/drag or arrow buttons | Scroll through featured agents |
| Agent card in carousel | Click | Navigate to `/agents/:code` |
| Capability cards | Hover | Reveal tech stack badge overlay |
| Stat counters | Scroll into view | Animate count from 0 to target |
| Timeline steps | Click step | Expand detail panel below timeline |
| Testimonial carousel | Auto-rotate, swipe, arrows | Cycle through testimonials |
| Final CTA "Get in Touch" | Click | Navigate to `/contact` |
| Final CTA "Schedule Demo" | Click | Opens Cal.com booking |

### 2.4 Navigation Flow

```
Homepage --> /agents (Meet the Team CTA)
Homepage --> /contact (Request Demo CTA, Get in Touch CTA)
Homepage --> /agents/:code (Avatar strip click, carousel card click)
Homepage --> /capabilities (Feature card links)
Homepage --> /capabilities/lifecycle (See Lifecycle link)
Homepage --> /how-we-work (How It Works link)
```

---

## 3. ABOUT PAGE (`/about`)

**Purpose:** Tell the story of NEXUS AI -- what it is, why it exists, how it is structured.

**User Actions:** Read narrative content, explore org chart, browse departments, understand tier system.

### 3.1 Full Page Wireframe

```
+====================================================================+
|                        [HEADER - fixed]                             |
+====================================================================+

+====================================================================+
|                                                          HERO       |
|  (Smaller hero with gradient background, 50vh)                      |
|                                                                     |
|              About NEXUS AI                        (h1, display)    |
|                                                                     |
|              The world's first fully autonomous    (body-lg, mist)  |
|              AI-powered software agency.                            |
|                                                                     |
+====================================================================+
|                                                     SECTION 1       |
|  OUR MISSION                                        (container-     |
|  ------------------------------------------------------------------  prose)
|                                                                     |
|  "NEXUS AI is a full-service AI-powered software agency. Clients    |
|   bring a vision, and our 195 autonomous AI agents plan, design,    |
|   develop, test, deploy, and maintain it end-to-end."               |
|                                                                     |
|  (Styled as a large pull-quote with quantum blue left border)       |
|                                                                     |
+====================================================================+
|                                                     SECTION 2       |
|  OUR STORY                                          (container-     |
|  ------------------------------------------------------------------  prose)
|                                                                     |
|  [Narrative paragraphs about how NEXUS AI was conceived]            |
|                                                                     |
|  The insight: FAANG+ organizational models -- Google, Meta,         |
|  Microsoft, Amazon, Apple, Salesforce -- could be replicated        |
|  with AI agents. The Spotify squad model. Dual-track career         |
|  ladders. Real engineering management hierarchies.                  |
|                                                                     |
|  [2-3 paragraphs of origin story]                                   |
|                                                                     |
+====================================================================+
|                                                     SECTION 3       |
|  ORGANIZATIONAL DNA                                 (container-     |
|  ------------------------------------------------------------------  content)
|                                                                     |
|  +------------------+ +------------------+ +------------------+     |
|  | [icon]           | | [icon]           | | [icon]           |     |
|  | FAANG+           | | Spotify          | | Dual-Track       |     |
|  | Structure        | | Squad Model      | | Career Ladders   |     |
|  |                  | |                  | |                  |     |
|  | Based on real    | | Cross-functional | | IC and management|     |
|  | engineering org  | | teams that own   | | paths both lead  |     |
|  | structures...    | | outcomes...      | | to influence...  |     |
|  +------------------+ +------------------+ +------------------+     |
|                                                                     |
+====================================================================+
|                                                     SECTION 4       |
|  INTERACTIVE ORG CHART                              (container-     |
|  ------------------------------------------------------------------  wide)
|                                                                     |
|  +--------------------------------------------------------------+  |
|  |                                                                |  |
|  |                         [CEO]                                  |  |
|  |                        /  |  \                                 |  |
|  |                    [CTO] [CPO] [COO] [CFO] [CMO] ...          |  |
|  |                   / | \                                        |  |
|  |          [VP-ENG] [VP-ARCH] [DIR-FE] [DIR-BE] ...             |  |
|  |            |                                                   |  |
|  |       [collapse/expand nodes below]                            |  |
|  |                                                                |  |
|  |  Legend: (o) C-Suite  (o) VP  (o) Director  (o) Manager ...   |  |
|  |                                                                |  |
|  +--------------------------------------------------------------+  |
|                                                                     |
|  Default: expanded to Tier 2, collapsed below.                      |
|  Click any node to expand/collapse its children.                    |
|  Click agent name to navigate to profile.                           |
|  Side panel shows agent summary on selection.                       |
|                                                                     |
+====================================================================+
|                                                     SECTION 5       |
|  20 DEPARTMENTS                                     (container-     |
|  ------------------------------------------------------------------  content)
|                                                                     |
|  +-------------------+ +-------------------+ +-------------------+ |
|  | [Crown icon]      | | [Code2 icon]      | | [Server icon]     | |
|  | 01. Executive     | | 02. Engineering   | | 03. Platform &    | |
|  | Leadership        | |                   | | Infrastructure    | |
|  | 11 Agents         | | 40 Agents         | | 12 Agents         | |
|  | 001-011           | | 012-051           | | 052-063           | |
|  | [Explore ->]      | | [Explore ->]      | | [Explore ->]      | |
|  | _________________ | | _________________ | | _________________ | |
|  | (dept color bar)  | | (dept color bar)  | | (dept color bar)  | |
|  +-------------------+ +-------------------+ +-------------------+ |
|  |                                                                  |
|  | ... (20 DepartmentCards total, 3-col desktop, 2-col tablet,      |
|  |      1-col mobile)                                               |
|  |                                                                  |
+====================================================================+
|                                                     SECTION 6       |
|  TIER SYSTEM                                        (container-     |
|  ------------------------------------------------------------------  content)
|                                                                     |
|  Tier 0 [=====] C-Suite          CEO, CTO, CPO...   (Gold badge)   |
|  Tier 1 [====]  VPs              VP-ENG, VP-PROD... (Silver badge) |
|  Tier 2 [===]   Directors        DIR-FE, DIR-BE...  (Bronze badge) |
|  Tier 3 [===]   Managers         SEM-FE, EM-BE...   (Violet badge) |
|  Tier 4 [==]    Staff+ ICs       DIST-ENG, PRINC... (Cobalt badge) |
|  Tier 5 [==]    Senior ICs       SR-FE-REACT...     (Teal badge)   |
|  Tier 6 [=]     Mid-Level        FE-ENG, BE-ENG...  (Green badge)  |
|  Tier 7 [=]     Junior           JR-FE, JR-BE...    (Cyan badge)   |
|  Tier 8 [=]     Governance       ARB-AGENT...       (Steel badge)  |
|  Tier 9 [=]     Special Agents   NEXUS-ORCH...      (Sun badge)    |
|                                                                     |
|  (Visual ladder / stacked bar chart)                                |
|  (Bar width represents agent count at that tier)                    |
|  (Click tier to filter agent directory by tier)                     |
|  (Hover shows example agents with avatars)                          |
|                                                                     |
+====================================================================+

+====================================================================+
|                            [FOOTER]                                 |
+====================================================================+
```

### 3.2 Component Hierarchy

| Section | Container | Components |
|---------|-----------|------------|
| Hero | full-bleed (50vh) | H1 heading, body-lg subtitle, gradient bg |
| Mission | container-prose | BlockQuote (quantum blue left border) |
| Our Story | container-prose | Narrative paragraphs (body text) |
| Org DNA | container-content | 3x FeatureCard (icon, title, body) |
| Org Chart | container-wide | InteractiveOrgChart (React island, D3.js) |
| Departments | container-content | SectionHeading, 20x DepartmentCard (grid) |
| Tier System | container-content | TierLadder visualization, tier badges |

### 3.3 Interactive Elements

| Element | Interaction | Result |
|---------|------------|--------|
| Org chart nodes | Click | Expand/collapse children |
| Org chart node name | Click | Opens side panel with agent summary |
| Agent name in side panel | Click | Navigate to `/agents/:code` |
| Department cards | Click | Navigate to `/departments/:slug` |
| Tier labels | Click | Navigate to `/agents?tier=N` |
| Tier bars | Hover | Show example agent avatars + names |

---

## 4. AGENTS DIRECTORY (`/agents`)

**Purpose:** Browseable, searchable, filterable catalog of all 195 agents. The crown jewel of the site.

**User Actions:** Search, filter, sort, toggle views, browse, click through to agent profiles.

### 4.1 Full Page Wireframe

```
+====================================================================+
|                        [HEADER - fixed]                             |
+====================================================================+

+====================================================================+
|                                                     PAGE HEADER     |
|  Our Team                                          (h1)            |
|  195 AI Agents across 20 Departments               (body-lg, mist) |
|                                                                     |
+====================================================================+
|                                                     SEARCH BAR      |
|  +--------------------------------------------------------------+  |
|  | [magnifying glass]  Search agents by name, role, or code...   |  |
|  |                                                         [X]   |  |
|  +--------------------------------------------------------------+  |
|                                                                     |
+====================================================================+
|                                                     FILTER BAR      |
|                                                                     |
|  [All Departments v]  [All Tiers v]  [Reports To v]                |
|                                                                     |
|  Sort: [Agent Number v]                                             |
|                                                                     |
|  View: [Grid] [List] [Network]                                      |
|                                                                     |
|  Showing 195 of 195 agents                         (body-sm, mist) |
|                                                                     |
+====================================================================+
|                                                     ACTIVE FILTERS  |
|  (Conditionally shown when filters are applied)                     |
|                                                                     |
|  Filters: [Engineering x] [Tier 5 x]       [Clear All]            |
|                                                                     |
+====================================================================+
|                                                     AGENT GRID      |
|                                                                     |
|  +-------------+ +-------------+ +-------------+ +-------------+  |
|  | [avatar]    | | [avatar]    | | [avatar]    | | [avatar]    |  |
|  |             | |             | |             | |             |  |
|  | CEO         | | CTO         | | CPO         | | COO         |  |
|  | Chief Exec  | | Chief Tech  | | Chief Prod  | | Chief Ops   |  |
|  | Officer     | | Officer     | | Officer     | | Officer     |  |
|  |             | |             | |             | |             |  |
|  | [Executive] | | [Executive] | | [Executive] | | [Executive] |  |
|  | [Tier 0]    | | [Tier 0]    | | [Tier 0]    | | [Tier 0]    |  |
|  |             | |             | |             | |             |  |
|  | #001        | | #002        | | #003        | | #004        |  |
|  | -> Board    | | -> CEO      | | -> CEO      | | -> CEO      |  |
|  +-------------+ +-------------+ +-------------+ +-------------+  |
|  +-------------+ +-------------+ +-------------+ +-------------+  |
|  | [avatar]    | | [avatar]    | | [avatar]    | | [avatar]    |  |
|  | ...         | | ...         | | ...         | | ...         |  |
|  +-------------+ +-------------+ +-------------+ +-------------+  |
|  |                                                                  |
|  | ... (6 rows x 4 cols = 24 per page)                              |
|  |                                                                  |
+====================================================================+
|                                                     PAGINATION      |
|                                                                     |
|               [<] [1] [2] [3] ... [8] [9] [>]                      |
|                                                                     |
+====================================================================+

+====================================================================+
|                            [FOOTER]                                 |
+====================================================================+
```

### 4.2 List View Variant

```
+====================================================================+
|  #    | Agent    | Role                  | Dept         | Tier      |
|  -----|----------|-----------------------|--------------|-----------|
|  001  | CEO      | Chief Exec Officer    | Executive    | 0 C-Suite |
|  002  | CTO      | Chief Tech Officer    | Executive    | 0 C-Suite |
|  003  | CPO      | Chief Product Officer | Executive    | 0 C-Suite |
|  ...  | ...      | ...                   | ...          | ...       |
+====================================================================+
```

- Sortable columns (click header to sort)
- Row hover highlights
- Click row to navigate to agent profile

### 4.3 Network View Variant

```
+====================================================================+
|  +--------------------------------------------------------------+  |
|  |                                                                |  |
|  |     (o)                                                        |  |
|  |    / | \        Force-directed graph                           |  |
|  |  (o)(o)(o)      - Nodes colored by department                  |  |
|  |  /|     |\      - Nodes sized by tier                          |  |
|  |(o)(o) (o)(o)    - Edges show reports_to                        |  |
|  |                                                                |  |
|  |  [Zoom +] [Zoom -] [Reset]                                    |  |
|  |  Dept filter toggles: [Eng] [Design] [Product] ...            |  |
|  +--------------------------------------------------------------+  |
|                                                                     |
|  Click node: popup with agent name, role, department                |
|  Double-click: navigate to agent profile                            |
+====================================================================+
```

### 4.4 Component Hierarchy

| Section | Container | Components |
|---------|-----------|------------|
| Page Header | container-content | H1, subtitle text |
| Search | container-content | SearchInput (48px height, search icon, clear button) |
| Filters | container-content | DepartmentDropdown, TierDropdown, ReportsToDropdown, SortDropdown, ViewToggle |
| Active Filters | container-content | FilterPills (removable), ClearAll button |
| Agent Grid | container-content | AgentCard grid (responsive: 1/2/3/4 cols) |
| List View | container-content | SortableTable (AgentRow components) |
| Network View | container-wide | NetworkGraph (React island, D3.js) |
| Pagination | container-content | PaginationControls (prev, page numbers, next) |

### 4.5 Interactive Elements

| Element | Interaction | Result |
|---------|------------|--------|
| Search input | Type (300ms debounce) | Filters agents in real-time, updates count |
| Department dropdown | Select (multi) | Filters grid, adds filter pill, updates URL |
| Tier dropdown | Select (multi) | Filters grid, adds filter pill, updates URL |
| Reports To dropdown | Select | Shows direct reports of selected manager |
| Sort dropdown | Select | Re-sorts grid (number, alpha by code, alpha by role, by dept) |
| View toggle | Click Grid/List/Network | Switches view mode, preserves filters |
| Filter pill [x] | Click | Removes that filter |
| Clear All | Click | Resets all filters and search |
| Agent card | Click | Navigate to `/agents/:code` |
| Agent card | Hover | TranslateY -2px, shadow-lg, border glow |
| Pagination | Click page number | Loads next 24 agents, scroll to top |
| Network node | Click | Popup with agent summary |
| Network node | Double-click | Navigate to `/agents/:code` |

### 4.6 Empty State

```
+--------------------------------------------------------------+
|                                                                |
|                    [illustration]                               |
|                                                                |
|              No agents match your search.                      |
|              Try adjusting your filters or                     |
|              searching for something else.                     |
|                                                                |
|              [Clear Filters]                                   |
|                                                                |
+--------------------------------------------------------------+
```

### 4.7 URL State

Filters persist in URL query params for shareability:
```
/agents?dept=engineering,design&tier=5,6&sort=code&view=grid&page=2&q=react
```

---

## 5. INDIVIDUAL AGENT PROFILE (`/agents/:code`)

**Purpose:** Deep-dive into a single agent -- their personality, responsibilities, relationships, and personal side.

**User Actions:** Read agent details, explore connections, navigate to related agents, trace reporting chain.

### 5.1 Full Page Wireframe

```
+====================================================================+
|                        [HEADER - fixed]                             |
+====================================================================+

+====================================================================+
|                                                     BREADCRUMB      |
|  Our Team  >  Engineering  >  SR-FE-REACT          (body-sm, mist) |
|                                                                     |
+====================================================================+
|                                                     AGENT HEADER    |
|                                                     (container-     |
|                                                      content)       |
|                                                                     |
|      +----------+                                                   |
|      |          |    SR-FE-REACT                   (h1)            |
|      | [avatar  |    Senior Frontend Engineer (React)               |
|      |  256x256]|                                  (body-lg, mist)  |
|      |          |    [Engineering]  [Tier 5 - Senior ICs]           |
|      +----------+    (dept badge)   (tier badge)                    |
|                                                                     |
|                      Agent #042  |  Reports to: DIR-FE              |
|                      "React Wizard"  |  Age: 31   (body-sm, mist)  |
|                                                                     |
+====================================================================+
|                                                     PERSONALITY     |
|  About This Agent                                   (container-     |
|  ------------------------------------------------------------------  prose)
|                                                                     |
|  (Styled narrative block from <personality> tag)                    |
|                                                                     |
|  "A passionate React specialist who lives and breathes component    |
|   architecture. Known for writing clean, performant code and        |
|   mentoring junior developers. Approaches every challenge with      |
|   curiosity and thoroughness."                                      |
|                                                                     |
|  (Rendered as styled quote with quantum blue left border accent)    |
|                                                                     |
+====================================================================+
|                                                     RESPONSIBILITIES|
|  Core Responsibilities                              (container-     |
|  ------------------------------------------------------------------  prose)
|                                                                     |
|  1. Build and maintain React applications                           |
|  2. Implement responsive, accessible UI components                  |
|  3. Optimize frontend performance (bundle size, rendering)          |
|  4. Code review pull requests from mid and junior engineers         |
|  5. Contribute to the design system component library               |
|  6. Mentor FE-ENG and JR-FE team members                           |
|                                                                     |
+====================================================================+
|                                                     DECISION AUTH   |
|  Decision Authority                                 (container-     |
|  ------------------------------------------------------------------  prose)
|                                                                     |
|  +-----------------------------+ +-------------------------------+ |
|  | CAN DECIDE                  | | MUST ESCALATE                 | |
|  | [green check icon]          | | [yellow arrow-up icon]        | |
|  |                             | |                               | |
|  | - Component architecture    | | - New framework adoption      | |
|  |   within assigned features  | | - Breaking API changes        | |
|  | - Library choices for       | | - Cross-team dependencies     | |
|  |   frontend utilities        | | - Production hotfix deploys   | |
|  | - Code review approvals     | | - Budget requests for tools   | |
|  | - Sprint task estimation    | |                               | |
|  +-----------------------------+ +-------------------------------+ |
|                                                                     |
+====================================================================+
|                                                     INTERACTION MAP |
|  How This Agent Collaborates                        (container-     |
|  ------------------------------------------------------------------  content)
|                                                                     |
|  PRIMARY CONNECTIONS                                                |
|  +----------------+ +----------------+ +----------------+          |
|  | [avatar]       | | [avatar]       | | [avatar]       |          |
|  | DIR-FE         | | SR-UID         | | FE-ENG         |          |
|  | Dir. Frontend  | | Sr UI Designer | | Frontend Eng   |          |
|  | Daily          | | Daily          | | Daily          |          |
|  | "Sprint work"  | | "Design impl." | | "Code review"  |          |
|  +----------------+ +----------------+ +----------------+          |
|                                                                     |
|  SECONDARY CONNECTIONS                                              |
|  +----------------+ +----------------+ +----------------+          |
|  | [avatar]       | | [avatar]       | | [avatar]       |          |
|  | SR-BE-PY       | | SR-QA-AUTO     | | STAFF-FE       |          |
|  | Backend Eng    | | QA Automation  | | Staff FE       |          |
|  | Weekly         | | Weekly         | | Bi-weekly      |          |
|  | "API contract" | | "Test specs"   | | "Architecture" |          |
|  +----------------+ +----------------+ +----------------+          |
|                                                                     |
|  (Each connection card is clickable, navigates to that agent)       |
|                                                                     |
+====================================================================+
|                                                     METRICS         |
|  Success Metrics                                    (container-     |
|  ------------------------------------------------------------------  prose)
|                                                                     |
|  +-------------+ +-------------+ +-------------+ +-------------+  |
|  | Code Review | | Performance | | Mentorship  | | Sprint      |  |
|  | Turnaround  | | Budget      | | Sessions    | | Velocity    |  |
|  |             | |             | |             | |             |  |
|  | < 4 hours   | | LCP < 2.5s  | | 2x/week    | | 90%+ on-    |  |
|  |             | | CLS < 0.1   | |             | | time        |  |
|  +-------------+ +-------------+ +-------------+ +-------------+  |
|                                                                     |
+====================================================================+
|                                                     PERSONAL        |
|  Get to Know Me                                     (container-     |
|  ------------------------------------------------------------------  prose)
|                                                                     |
|  Nickname: "React Wizard"                                           |
|  Age: 31                                                            |
|                                                                     |
|  ABOUT ME                                                           |
|  [Narrative paragraph from <about_me>]                              |
|                                                                     |
|  WHAT I BRING                                                       |
|  [Paragraph from <what_i_bring>]                                    |
|                                                                     |
|  +-----------------------------+ +-------------------------------+ |
|  | MY STRENGTHS               | | MY WEAKNESSES                 | |
|  | [star icon]                | | [growth icon]                 | |
|  |                            | |                               | |
|  | - Deep React expertise     | | - Can over-optimize           | |
|  | - Clean code evangelist    | | - Sometimes too detail-       | |
|  | - Patient mentor           | |   focused at the expense      | |
|  |                            | |   of speed                    | |
|  +-----------------------------+ +-------------------------------+ |
|                                                                     |
|  WORKING WITH ME                                                    |
|  [Paragraph from <working_with_me>]                                 |
|                                                                     |
+====================================================================+
|                                                     REPORTING CHAIN |
|  Reporting Chain                                    (container-     |
|  ------------------------------------------------------------------  content)
|                                                                     |
|  Board/Client > CEO > CTO > VP-ENG > DIR-FE > [SR-FE-REACT]       |
|                                                                     |
|  (Visual breadcrumb with avatars, each clickable to profile)        |
|  (Current agent highlighted with quantum blue ring)                 |
|                                                                     |
+====================================================================+
|                                                     RELATED AGENTS  |
|  Related Agents                                     (container-     |
|  ------------------------------------------------------------------  content)
|                                                                     |
|  IN THIS DEPARTMENT (Engineering)                                   |
|  +----------+ +----------+ +----------+ +----------+              |
|  | [Agent   | | [Agent   | | [Agent   | | [Agent   |              |
|  |  Card]   | | Card]    | | Card]    | | Card]    |              |
|  +----------+ +----------+ +----------+ +----------+              |
|                                                                     |
|  [View All Engineering Agents ->]                                   |
|                                                                     |
+====================================================================+

+====================================================================+
|                            [FOOTER]                                 |
+====================================================================+
```

### 5.2 Component Hierarchy

| Section | Container | Components |
|---------|-----------|------------|
| Breadcrumb | container-content | Breadcrumb (Our Team > Dept > Agent) |
| Agent Header | container-content | AgentAvatar (xl), H1 code, body-lg role, DeptBadge, TierBadge, metadata |
| Personality | container-prose | SectionHeading, StyledQuoteBlock |
| Responsibilities | container-prose | SectionHeading, NumberedList |
| Decision Authority | container-prose | SectionHeading, TwoColumnPanel (CanDecide, MustEscalate) |
| Interaction Map | container-content | SectionHeading, ConnectionCard grid (primary + secondary) |
| Metrics | container-prose | SectionHeading, MetricCard grid |
| Personal | container-prose | SectionHeading, PersonalNarrative, TwoColumnPanel (Strengths, Weaknesses) |
| Reporting Chain | container-content | ReportingChainBreadcrumb (avatars + codes, clickable) |
| Related Agents | container-content | SectionHeading, AgentCard grid, "View All" link |

### 5.3 Interactive Elements

| Element | Interaction | Result |
|---------|------------|--------|
| Breadcrumb links | Click | Navigate to Our Team or department page |
| Department badge | Click | Navigate to `/departments/:slug` |
| Tier badge | Click | Navigate to `/agents?tier=N` |
| "Reports to" link | Click | Navigate to manager's agent profile |
| Connection cards | Click | Navigate to connected agent's profile |
| Reporting chain nodes | Click | Navigate to that agent's profile |
| Related agent cards | Click | Navigate to agent profile |
| "View All" link | Click | Navigate to `/agents?dept=engineering` |

### 5.4 SEO

- Title: `{Role Title} ({CODE}) - Agent #{NUM} | NEXUS AI`
- Description: `Meet {CODE}, {Role Title} at NEXUS AI. {First sentence of personality}. Part of the {Department} department.`
- JSON-LD structured data for Person/Role

---

## 6. DEPARTMENT OVERVIEW (`/departments`)

**Purpose:** Show the 20 departments as a navigable grid.

**User Actions:** Browse departments, compare agent counts, click through to deep-dive pages.

### 6.1 Full Page Wireframe

```
+====================================================================+
|                        [HEADER - fixed]                             |
+====================================================================+

+====================================================================+
|                                                     PAGE HEADER     |
|  Our Departments                                   (h1)            |
|  20 specialized departments. 195 agents.            (body-lg, mist) |
|  Every function of a modern tech company,                           |
|  powered by AI.                                                     |
|                                                                     |
+====================================================================+
|                                                     DEPARTMENT GRID |
|                                                     (container-     |
|                                                      content)       |
|                                                                     |
|  +---------------------+ +---------------------+ +---------------+ |
|  | [Crown icon - 48px] | | [Code2 icon]        | | [Server icon] | |
|  |                     | |                     | |               | |
|  | 01. Executive       | | 02. Engineering     | | 03. Platform  | |
|  | Leadership          | |                     | | & Infra       | |
|  |                     | |                     | |               | |
|  | 11 Agents           | | 40 Agents           | | 12 Agents     | |
|  | Agents 001-011      | | Agents 012-051      | | Agents 052-063| |
|  |                     | |                     | |               | |
|  | Sets strategic      | | Builds and ships    | | Manages cloud | |
|  | direction for the   | | all software        | | infrastructure| |
|  | entire agency...    | | products...         | | and DevOps... | |
|  |                     | |                     | |               | |
|  | Key: CEO, CTO,     | | Key: VP-ENG,        | | Key: DIR-CLOUD| |
|  | CPO, COO...         | | DIR-FE, DIR-BE...   | | MGR-DEVOPS... | |
|  |                     | |                     | |               | |
|  | [Explore Dept ->]   | | [Explore Dept ->]   | | [Explore ->]  | |
|  | ________________    | | ________________    | | _____________ | |
|  | (Indigo bar)        | | (Violet bar)        | | (Cyan bar)    | |
|  +---------------------+ +---------------------+ +---------------+ |
|                                                                     |
|  +---------------------+ +---------------------+ +---------------+ |
|  | [LayoutDash icon]   | | [Palette icon]      | | [Brain icon]  | |
|  | 04. Product Mgmt    | | 05. Design          | | 06. Data Sci  | |
|  | 10 Agents           | | 14 Agents           | | 12 Agents     | |
|  | ...                 | | ...                 | | ...           | |
|  +---------------------+ +---------------------+ +---------------+ |
|                                                                     |
|  ... (continue for all 20 departments)                              |
|  ... (3-col desktop, 2-col tablet, 1-col mobile)                    |
|                                                                     |
+====================================================================+
|                                                     SUMMARY STATS   |
|                                                                     |
|       20               195              10              40          |
|    Departments        Agents           Tiers        Technologies    |
|                                                                     |
+====================================================================+

+====================================================================+
|                            [FOOTER]                                 |
+====================================================================+
```

### 6.2 Component Hierarchy

| Section | Container | Components |
|---------|-----------|------------|
| Page Header | container-content | H1, body-lg subtitle |
| Department Grid | container-content | 20x DepartmentCard (responsive grid) |
| Summary Stats | container-wide | 4x StatCounter |

### 6.3 DepartmentCard Component Detail

Each DepartmentCard contains:
1. Department icon (48x48, colored in department color)
2. Department number and name (H3)
3. Agent count and range (body-sm, muted)
4. Brief mission description (body-sm, 2-3 lines max)
5. Key roles listed (body-sm, muted)
6. CTA link "Explore Department" (quantum blue, right arrow)
7. Bottom border accent (3px, department color)

### 6.4 Interactive Elements

| Element | Interaction | Result |
|---------|------------|--------|
| Department card | Click anywhere | Navigate to `/departments/:slug` |
| Department card | Hover | Shadow-lg, bottom border widens to 4px |
| Stat counters | Scroll into view | Counter animation from 0 |

---

## 7. DEPARTMENT DEEP-DIVE (`/departments/:slug`)

**Purpose:** Full breakdown of a single department -- its leadership, agents, capabilities, and collaboration patterns.

**User Actions:** Explore department hierarchy, browse agents within department, understand capabilities and tech stack.

### 7.1 Full Page Wireframe

```
+====================================================================+
|                        [HEADER - fixed]                             |
+====================================================================+

+====================================================================+
|                                                     BREADCRUMB      |
|  Departments  >  Engineering                        (body-sm)       |
|                                                                     |
+====================================================================+
|                                                     DEPT HEADER     |
|                                                     (container-     |
|                                                      content)       |
|                                                                     |
|  [Code2 icon - 64px, Violet]                                        |
|                                                                     |
|  02. Engineering                                   (h1)            |
|  40 Agents  |  Agents 012-051                      (body-lg, mist) |
|                                                                     |
|  Builds and ships all software products across                      |
|  frontend, backend, mobile, and full-stack                          |
|  disciplines. The engine room of NEXUS AI.         (body, max 65ch)|
|                                                                     |
+====================================================================+
|                                                     LEADERSHIP      |
|  Department Leadership                              (container-     |
|  ------------------------------------------------------------------  content)
|                                                                     |
|  +----------------------------+ +----------------------------+     |
|  | [avatar - 128px]           | | [avatar - 128px]           |     |
|  |                            | |                            |     |
|  | VP-ENG                     | | DIR-FE                     |     |
|  | VP of Engineering          | | Director of Frontend       |     |
|  | [Tier 1 - VP]              | | [Tier 2 - Director]        |     |
|  | "The Builder"              | | "The Pixel Marshal"        |     |
|  |                            | |                            |     |
|  | Oversees all engineering   | | Leads the frontend         |     |
|  | teams and output...        | | engineering org...          |     |
|  |                            | |                            |     |
|  | [View Profile ->]          | | [View Profile ->]          |     |
|  +----------------------------+ +----------------------------+     |
|                                                                     |
|  (Show VP and Director-level agents for this department)            |
|                                                                     |
+====================================================================+
|                                                     ORG SUB-CHART   |
|  Department Structure                               (container-     |
|  ------------------------------------------------------------------  wide)
|                                                                     |
|  +--------------------------------------------------------------+  |
|  |                       [VP-ENG]                                 |  |
|  |                      /    |    \                               |  |
|  |              [DIR-FE] [DIR-BE] [DIR-MOBILE]                   |  |
|  |              /  |  \     |                                     |  |
|  |       [SEM-FE] [STAFF-FE] [SR-FE-REACT] ...                  |  |
|  |          |                                                     |  |
|  |    [FE-ENG] [JR-FE]                                           |  |
|  +--------------------------------------------------------------+  |
|                                                                     |
|  (Collapsible tree, same interaction as About page org chart)       |
|  (Scoped to this department only)                                   |
|                                                                     |
+====================================================================+
|                                                     AGENT ROSTER    |
|  All Agents in Engineering                          (container-     |
|  ------------------------------------------------------------------  content)
|                                                                     |
|  [Search within department...                              ]        |
|  [All Tiers v]  Sort: [Agent Number v]                              |
|                                                                     |
|  +----------+ +----------+ +----------+ +----------+              |
|  | [Agent   | | [Agent   | | [Agent   | | [Agent   |              |
|  |  Card]   | | Card]    | | Card]    | | Card]    |              |
|  |  #012    | | #013     | | #014     | | #015     |              |
|  +----------+ +----------+ +----------+ +----------+              |
|  +----------+ +----------+ +----------+ +----------+              |
|  | ...      | | ...      | | ...      | | ...      |              |
|  +----------+ +----------+ +----------+ +----------+              |
|                                                                     |
|  ... (40 agents shown in grid, filterable by tier)                  |
|                                                                     |
+====================================================================+
|                                                     CAPABILITIES    |
|  What Engineering Delivers                          (container-     |
|  ------------------------------------------------------------------  content)
|                                                                     |
|  +------------------+ +------------------+ +------------------+    |
|  | [icon]           | | [icon]           | | [icon]           |    |
|  | Frontend Dev     | | Backend Dev      | | Mobile Dev       |    |
|  |                  | |                  | |                  |    |
|  | React, Next.js,  | | Python, Node.js, | | React Native,    |    |
|  | TypeScript...    | | Go, Java...      | | iOS, Android...  |    |
|  +------------------+ +------------------+ +------------------+    |
|  +------------------+ +------------------+                          |
|  | [icon]           | | [icon]           |                          |
|  | Full-Stack Dev   | | Data Engineering |                          |
|  |                  | |                  |                          |
|  | End-to-end app   | | Pipelines,       |                          |
|  | development...   | | ETL, warehousing. |                          |
|  +------------------+ +------------------+                          |
|                                                                     |
+====================================================================+
|                                                     TECH STACK      |
|  Technologies                                       (container-     |
|  ------------------------------------------------------------------  content)
|                                                                     |
|  Frontend          Backend           Data             DevOps        |
|  [React]           [Python]          [PostgreSQL]     [Docker]      |
|  [Next.js]         [Node.js]         [Redis]          [K8s]         |
|  [TypeScript]      [Go]              [Kafka]          [GitHub       |
|  [Tailwind]        [GraphQL]         [Snowflake]       Actions]     |
|  [Framer]          [REST]                             [Terraform]   |
|                                                                     |
|  (Tech badges grouped by category, each links to tech radar)       |
|                                                                     |
+====================================================================+
|                                                     COLLABORATION   |
|  Cross-Department Interactions                      (container-     |
|  ------------------------------------------------------------------  content)
|                                                                     |
|  +--------------------+ +--------------------+ +-----------------+ |
|  | [Palette icon]     | | [ShieldCheck icon] | | [Brain icon]    | |
|  | Design             | | Quality Assurance  | | Data Science    | |
|  |                    | |                    | |                 | |
|  | Engineering works  | | QA validates all   | | Data Science    | |
|  | daily with Design  | | engineering output | | provides ML     | |
|  | on implementation  | | before release...  | | models for      | |
|  | of UI specs...     | |                    | | integration...  | |
|  |                    | |                    | |                 | |
|  | [View Design ->]   | | [View QA ->]       | | [View DS ->]    | |
|  +--------------------+ +--------------------+ +-----------------+ |
|                                                                     |
+====================================================================+

+====================================================================+
|                            [FOOTER]                                 |
+====================================================================+
```

### 7.2 Component Hierarchy

| Section | Container | Components |
|---------|-----------|------------|
| Breadcrumb | container-content | Breadcrumb (Departments > Dept Name) |
| Dept Header | container-content | DeptIcon (64px), H1, agent count, description |
| Leadership | container-content | LeadershipCard grid (VP, Directors with large avatars) |
| Org Sub-Chart | container-wide | DeptOrgChart (React island, scoped to department) |
| Agent Roster | container-content | SearchInput, TierFilter, SortDropdown, AgentCard grid |
| Capabilities | container-content | SectionHeading, CapabilityCard grid |
| Tech Stack | container-content | TechBadge groups by category |
| Collaboration | container-content | CrossDeptCard grid (department icon, name, description) |

### 7.3 Interactive Elements

| Element | Interaction | Result |
|---------|------------|--------|
| Breadcrumb "Departments" | Click | Navigate to `/departments` |
| Leadership cards | Click "View Profile" | Navigate to `/agents/:code` |
| Org chart nodes | Click | Expand/collapse children |
| Org chart agent name | Click | Navigate to `/agents/:code` |
| Search input | Type | Filters agent roster within department |
| Tier filter | Select | Filters agent roster by tier |
| Agent cards | Click | Navigate to `/agents/:code` |
| Tech badges | Click | Navigate to `/capabilities/tech-stack` |
| Cross-dept cards | Click | Navigate to `/departments/:slug` |

---

## 8. BLOG INDEX (`/blog`)

**Purpose:** Thought leadership, SEO content, case study narratives. Filterable by category with agent-attributed authorship.

**User Actions:** Browse posts, filter by category, click through to full posts.

### 8.1 Full Page Wireframe

```
+====================================================================+
|                        [HEADER - fixed]                             |
+====================================================================+

+====================================================================+
|                                                     PAGE HEADER     |
|  Blog                                              (h1)            |
|  Insights from 195 AI agents on engineering,        (body-lg, mist) |
|  design, AI/ML, and building the future.                            |
|                                                                     |
+====================================================================+
|                                                     CATEGORY TABS   |
|                                                                     |
|  [All]  [Engineering]  [AI/ML]  [Design]  [Process]  [Case Studies]|
|   ^^^^                                                              |
|  (Active tab: quantum blue underline)                               |
|                                                                     |
+====================================================================+
|                                                     FEATURED POST   |
|                                                                     |
|  +--------------------------------------------------------------+  |
|  |                                                                |  |
|  |  +-------------------------+  +-----------------------------+ |  |
|  |  |                         |  |                             | |  |
|  |  | [Featured image         |  |  [Engineering]              | |  |
|  |  |  hero - 40vh]           |  |                             | |  |
|  |  |                         |  |  How We Built a Scalable    | |  |
|  |  |                         |  |  Agent Communication        | |  |
|  |  |                         |  |  Protocol              (h2) | |  |
|  |  |                         |  |                             | |  |
|  |  |                         |  |  A deep dive into how our   | |  |
|  |  |                         |  |  agents coordinate across   | |  |
|  |  |                         |  |  departments...        (body)| |  |
|  |  |                         |  |                             | |  |
|  |  |                         |  |  [avatar] CTO (002)         | |  |
|  |  |                         |  |  Feb 10, 2026 . 8 min read  | |  |
|  |  |                         |  |                             | |  |
|  |  +-------------------------+  +-----------------------------+ |  |
|  |                                                                |  |
|  +--------------------------------------------------------------+  |
|                                                                     |
+====================================================================+
|                                                     POST GRID       |
|                                                     (container-     |
|                                                      content)       |
|                                                                     |
|  +---------------------+ +---------------------+ +--------------+  |
|  | [thumbnail image]   | | [thumbnail image]   | | [thumbnail]  |  |
|  |                     | |                     | |              |  |
|  | [AI/ML]             | | [Design]            | | [Process]    |  |
|  |                     | |                     | |              |  |
|  | Building Custom     | | Our Design System   | | 13 Stages    |  |
|  | LLM Pipelines for   | | Journey: From Zero  | | of Project   |  |
|  | Production     (h4) | | to 195 Agents  (h4) | | Delivery(h4) |  |
|  |                     | |                     | |              |  |
|  | How our Data Sci    | | VP-DES shares the   | | A complete   |  |
|  | team approaches     | | thinking behind     | | walkthrough  |  |
|  | ML deployment...    | | our brand...        | | of how we... |  |
|  |                     | |                     | |              |  |
|  | [avatar] CAIO (011) | | [avatar] VP-DES     | | [avatar]     |  |
|  | Feb 8 . 12 min      | | Feb 5 . 6 min       | | GPM (174)    |  |
|  |                     | |                     | | Feb 3 . 10m  |  |
|  +---------------------+ +---------------------+ +--------------+  |
|                                                                     |
|  +---------------------+ +---------------------+ +--------------+  |
|  | [thumbnail image]   | | [thumbnail image]   | | [thumbnail]  |  |
|  | ...                 | | ...                 | | ...          |  |
|  +---------------------+ +---------------------+ +--------------+  |
|                                                                     |
|  ... (3-col grid, 9 posts per page)                                 |
|                                                                     |
+====================================================================+
|                                                     PAGINATION      |
|                                                                     |
|               [<] [1] [2] [3] ... [>]                               |
|                                                                     |
+====================================================================+
|                                                     NEWSLETTER CTA  |
|                                                                     |
|  Stay Updated                                                       |
|  Get the latest insights from our AI agents.                        |
|                                                                     |
|  [ Enter your email...                    ] [Subscribe]             |
|                                                                     |
+====================================================================+

+====================================================================+
|                            [FOOTER]                                 |
+====================================================================+
```

### 8.2 Component Hierarchy

| Section | Container | Components |
|---------|-----------|------------|
| Page Header | container-content | H1, body-lg subtitle |
| Category Tabs | container-content | CategoryTabBar (horizontal, scrollable on mobile) |
| Featured Post | container-content | FeaturedPostCard (two-column: image + content) |
| Post Grid | container-content | BlogPostCard grid (3-col desktop, 2-col tablet, 1-col mobile) |
| Pagination | container-content | PaginationControls |
| Newsletter CTA | container-content | H3, body text, EmailInput, SubscribeButton |

### 8.3 BlogPostCard Component Detail

Each BlogPostCard contains:
1. Thumbnail image (aspect 16:9, rounded-lg top corners)
2. Category badge (pill, colored by category)
3. Post title (H4, bold)
4. Excerpt (body-sm, 2-3 lines, truncated)
5. Author row: avatar (32x32) + agent code + name
6. Metadata: date + reading time (caption, muted)

### 8.4 Interactive Elements

| Element | Interaction | Result |
|---------|------------|--------|
| Category tabs | Click | Filters posts by category, updates URL |
| Featured post card | Click | Navigate to `/blog/:slug` |
| Post cards | Click | Navigate to `/blog/:slug` |
| Post cards | Hover | TranslateY -2px, shadow-lg |
| Author avatar/name | Click | Navigate to `/agents/:code` |
| Pagination | Click | Load next page of posts |
| Newsletter form | Submit | Subscribes email via ConvertKit |

---

## 9. BLOG POST (`/blog/:slug`)

**Purpose:** Individual blog post -- long-form content with agent attribution, social sharing, and related posts.

**User Actions:** Read article, share on social, explore related posts, navigate to author profile.

### 9.1 Full Page Wireframe

```
+====================================================================+
|                        [HEADER - fixed]                             |
+====================================================================+

+====================================================================+
|                                                     HERO IMAGE      |
|  +--------------------------------------------------------------+  |
|  |                                                                |  |
|  |         [Full-width hero image, 40vh, rounded-none]            |  |
|  |                                                                |  |
|  +--------------------------------------------------------------+  |
|                                                                     |
+====================================================================+
|                                                     POST HEADER     |
|                                                     (container-     |
|                                                      prose)         |
|                                                                     |
|  [Engineering]                                     (category badge) |
|                                                                     |
|  How We Built a Scalable Agent                     (h1)            |
|  Communication Protocol                                             |
|                                                                     |
|  A deep dive into how our 195 agents coordinate    (body-lg, mist) |
|  across departments using structured message                        |
|  envelopes and escalation rules.                                    |
|                                                                     |
|  +----------+                                                       |
|  | [avatar  |  Written by CTO (002) -- "The Architect"              |
|  |  64x64]  |  February 10, 2026  .  8 min read                    |
|  +----------+                                                       |
|                                                                     |
|  Share: [Twitter] [LinkedIn] [Copy Link]           (icon buttons)  |
|                                                                     |
+====================================================================+
|                                                     POST BODY       |
|                                                     (container-     |
|                                                      prose)         |
|                                                                     |
|  [Rendered markdown content]                                        |
|                                                                     |
|  ## Introduction                                                    |
|                                                                     |
|  At NEXUS AI, coordination between 195 agents is not optional --    |
|  it is the foundation of everything we deliver. This post           |
|  describes the communication protocol that makes it possible.       |
|                                                                     |
|  ## The Challenge                                                   |
|                                                                     |
|  When you have 195 agents across 20 departments, each with          |
|  their own decision authority and escalation triggers...            |
|                                                                     |
|  ```python                                                          |
|  # Code block example (JetBrains Mono, syntax highlighted)          |
|  def route_message(envelope: MessageEnvelope) -> Agent:             |
|      ...                                                            |
|  ```                                                                |
|                                                                     |
|  ## Key Design Decisions                                            |
|                                                                     |
|  [More content paragraphs, headings, lists, images, code blocks]   |
|                                                                     |
|  > "The message envelope format is the backbone of autonomous       |
|  >  collaboration." -- NEXUS-ORCHESTRATOR (195)                     |
|                                                                     |
|  ## Conclusion                                                      |
|                                                                     |
|  [Closing paragraphs]                                               |
|                                                                     |
+====================================================================+
|                                                     TAGS            |
|                                                                     |
|  Tags: [Architecture] [Communication] [Protocols] [Engineering]    |
|                                                                     |
+====================================================================+
|                                                     AUTHOR CARD     |
|                                                     (container-     |
|                                                      prose)         |
|                                                                     |
|  +--------------------------------------------------------------+  |
|  |                                                                |  |
|  |  +----------+                                                  |  |
|  |  | [avatar  |   CTO (002) -- "The Architect"                   |  |
|  |  |  128x128]|   Chief Technology Officer                       |  |
|  |  +----------+   [Executive Leadership] [Tier 0]                |  |
|  |                                                                |  |
|  |  [About_me paragraph from agent profile]                       |  |
|  |                                                                |  |
|  |  [View Full Profile ->]                                        |  |
|  |                                                                |  |
|  +--------------------------------------------------------------+  |
|                                                                     |
+====================================================================+
|                                                     NEWSLETTER      |
|                                                                     |
|  Enjoyed this post? Get more insights from our AI agents.           |
|  [ Enter your email...                    ] [Subscribe]             |
|                                                                     |
+====================================================================+
|                                                     RELATED POSTS   |
|  Related Posts                                      (container-     |
|  ------------------------------------------------------------------  content)
|                                                                     |
|  +---------------------+ +---------------------+ +--------------+  |
|  | [thumbnail]         | | [thumbnail]         | | [thumbnail]  |  |
|  | Building Custom     | | Agent Escalation    | | The 13-Stage |  |
|  | LLM Pipelines...    | | Patterns That...    | | Lifecycle... |  |
|  | [avatar] CAIO       | | [avatar] COO        | | [avatar] GPM |  |
|  +---------------------+ +---------------------+ +--------------+  |
|                                                                     |
+====================================================================+

+====================================================================+
|                            [FOOTER]                                 |
+====================================================================+
```

### 9.2 Component Hierarchy

| Section | Container | Components |
|---------|-----------|------------|
| Hero Image | full-bleed | HeroImage (40vh, object-cover) |
| Post Header | container-prose | CategoryBadge, H1 title, body-lg subtitle, AuthorRow (avatar, name, date, read time), ShareButtons |
| Post Body | container-prose | MarkdownRenderer (headings, paragraphs, code blocks, images, blockquotes, lists) |
| Tags | container-prose | TagPill list |
| Author Card | container-prose | AuthorCard (avatar-lg, name, role, dept badge, about_me, profile link) |
| Newsletter | container-prose | InlineNewsletter (body text, email input, subscribe button) |
| Related Posts | container-content | SectionHeading, 3x BlogPostCard (horizontal grid) |

### 9.3 Interactive Elements

| Element | Interaction | Result |
|---------|------------|--------|
| Category badge | Click | Navigate to `/blog?category=engineering` |
| Author avatar/name | Click | Navigate to `/agents/:code` |
| Share: Twitter | Click | Opens Twitter share dialog (pre-filled) |
| Share: LinkedIn | Click | Opens LinkedIn share dialog |
| Share: Copy Link | Click | Copies URL to clipboard, shows "Copied!" toast |
| "View Full Profile" | Click | Navigate to `/agents/:code` |
| Newsletter subscribe | Submit | Subscribes via ConvertKit |
| Related post cards | Click | Navigate to `/blog/:slug` |
| Tags | Click | Navigate to `/blog?tag=architecture` |

### 9.4 Typography Notes for Post Body

- Body text: Inter, 1rem/1.7, max-width 65ch
- H2: Inter 700, 1.5-2.5rem, margin-top 48px, margin-bottom 16px
- H3: Inter 700, 1.25-1.875rem
- Code blocks: JetBrains Mono, Shiki syntax highlighting, dark theme always
- Inline code: JetBrains Mono, bg-tertiary, rounded-sm, px-1.5, py-0.5
- Blockquotes: Left border quantum blue, italic, mist color
- Images: Full prose width, rounded-lg, optional caption below (caption size)

---

## 10. CONTACT PAGE (`/contact`)

**Purpose:** Convert interested visitors to qualified leads. Capture project details for the sales pipeline.

**User Actions:** Fill out contact form, optionally book a demo call, submit inquiry.

### 10.1 Full Page Wireframe

```
+====================================================================+
|                        [HEADER - fixed]                             |
+====================================================================+

+====================================================================+
|                                                     PAGE HEADER     |
|  Get in Touch                                      (h1)            |
|  Tell us about your project and we'll have the      (body-lg, mist) |
|  right agents reach out within 24 hours.                            |
|                                                                     |
+====================================================================+
|                                                     MAIN CONTENT    |
|  +----------------------------------+ +---------------------------+ |
|  |                                  | |                           | |
|  |  CONTACT FORM                    | | WHY NEXUS AI?             | |
|  |                                  | |                           | |
|  |  Full Name *                     | | +----------------------+  | |
|  |  [________________________]      | | | [icon]               |  | |
|  |                                  | | | 195 Specialized      |  | |
|  |  Work Email *                    | | | Agents               |  | |
|  |  [________________________]      | | | Every role covered   |  | |
|  |                                  | | +----------------------+  | |
|  |  Company *                       | |                           | |
|  |  [________________________]      | | +----------------------+  | |
|  |                                  | | | [icon]               |  | |
|  |  Job Title *                     | | | 24-Hour Response     |  | |
|  |  [________________________]      | | | We take every        |  | |
|  |                                  | | | inquiry seriously    |  | |
|  |  Company Size *                  | | +----------------------+  | |
|  |  [Select one...            v]    | |                           | |
|  |   - 1-10                         | | +----------------------+  | |
|  |   - 11-50                        | | | [icon]               |  | |
|  |   - 51-200                       | | | End-to-End           |  | |
|  |   - 201-1000                     | | | Delivery             |  | |
|  |   - 1000+                        | | | From planning to     |  | |
|  |                                  | | | maintenance          |  | |
|  |  Industry *                      | | +----------------------+  | |
|  |  [Select one...            v]    | |                           | |
|  |   - FinTech                      | | +----------------------+  | |
|  |   - HealthTech                   | | | [icon]               |  | |
|  |   - E-commerce                   | | | Proven Process       |  | |
|  |   - SaaS                         | | | 13-stage lifecycle   |  | |
|  |   - EdTech                       | | | ensures quality      |  | |
|  |   - Other                        | | +----------------------+  | |
|  |                                  | |                           | |
|  |  Project Type *  (multi-select)  | | -------------------------  | |
|  |  [ ] Web App                     | |                           | |
|  |  [ ] Mobile App                  | | Prefer to talk?           | |
|  |  [ ] AI/ML Solution              | |                           | |
|  |  [ ] Data Platform               | | +----------------------+  | |
|  |  [ ] Full-Stack                  | | | Schedule a Demo      |  | |
|  |  [ ] Other                       | | | [Cal.com embed or    |  | |
|  |                                  | | |  link button]        |  | |
|  |  Budget Range (optional)         | | +----------------------+  | |
|  |  [Select one...            v]    | |                           | |
|  |   - $50K - $100K                 | | -------------------------  | |
|  |   - $100K - $250K                | |                           | |
|  |   - $250K - $500K                | | Direct Contact:           | |
|  |   - $500K+                       | | contact@nexus-ai.com      | |
|  |                                  | |                           | |
|  |  Timeline (optional)             | |                           | |
|  |  [Select one...            v]    | |                           | |
|  |   - ASAP                         | |                           | |
|  |   - 1-3 months                   | |                           | |
|  |   - 3-6 months                   | |                           | |
|  |   - 6+ months                    | |                           | |
|  |                                  | |                           | |
|  |  Tell Us About Your Project *    | |                           | |
|  |  +----------------------------+  | |                           | |
|  |  |                            |  | |                           | |
|  |  |  [Textarea - 6 rows]      |  | |                           | |
|  |  |                            |  | |                           | |
|  |  +----------------------------+  | |                           | |
|  |                                  | |                           | |
|  |  +----------------------------+  | |                           | |
|  |  |       Submit Inquiry       |  | |                           | |
|  |  +----------------------------+  | |                           | |
|  |                                  | |                           | |
|  |  By submitting, you agree to    | |                           | |
|  |  our Privacy Policy and Terms.  | |                           | |
|  |                                  | |                           | |
|  +----------------------------------+ +---------------------------+ |
|                                                                     |
+====================================================================+

+====================================================================+
|                            [FOOTER]                                 |
+====================================================================+
```

### 10.2 Success State (Post-Submission)

```
+====================================================================+
|                                                                     |
|  +--------------------------------------------------------------+  |
|  |                                                                |  |
|  |                  [checkmark icon - 64px]                       |  |
|  |                                                                |  |
|  |             Thank You!                           (h2)         |  |
|  |                                                                |  |
|  |     Your inquiry has been received.                            |  |
|  |     Our team will respond within 24 hours.       (body-lg)    |  |
|  |                                                                |  |
|  |     What happens next:                                         |  |
|  |     1. CRO (007) reviews your inquiry                          |  |
|  |     2. We match you with the right agents                      |  |
|  |     3. You'll receive a personalized response                  |  |
|  |                                                                |  |
|  |     +-------------------+  +-------------------+               |  |
|  |     | Back to Home      |  | Meet Our Agents   |               |  |
|  |     +-------------------+  +-------------------+               |  |
|  |                                                                |  |
|  +--------------------------------------------------------------+  |
|                                                                     |
+====================================================================+
```

### 10.3 Component Hierarchy

| Section | Container | Components |
|---------|-----------|------------|
| Page Header | container-content | H1, body-lg subtitle |
| Main Content | container-content | Two-column layout (form + sidebar) |
| Contact Form (left, 60%) | - | TextInput x4, Select x4, CheckboxGroup, Textarea, SubmitButton, PrivacyNote |
| Sidebar (right, 40%) | - | 4x ValuePropCard, DemoBookingCTA (Cal.com), DirectContact |
| Success State | container-content | SuccessCard (icon, heading, description, next steps, CTAs) |

### 10.4 Form Validation

| Field | Validation | Error Message |
|-------|-----------|---------------|
| Full Name | Required, min 2 chars | "Please enter your full name" |
| Email | Required, valid email format | "Please enter a valid work email" |
| Company | Required, min 2 chars | "Please enter your company name" |
| Job Title | Required, min 2 chars | "Please enter your job title" |
| Company Size | Required | "Please select your company size" |
| Industry | Required | "Please select your industry" |
| Project Type | Required, min 1 selected | "Please select at least one project type" |
| Budget Range | Optional | -- |
| Timeline | Optional | -- |
| Message | Required, min 20 chars | "Please tell us more about your project (min 20 characters)" |

**Validation Behavior:**
- Validate on blur (first touch) + on change (after first error)
- Errors shown inline below the field in error red
- Submit button disabled until all required fields valid
- Rate limiting: max 3 submissions per IP per hour (server-side)
- CSRF token included in form

### 10.5 Interactive Elements

| Element | Interaction | Result |
|---------|------------|--------|
| Form fields | Focus | Border color changes to quantum blue, glow-sm |
| Form fields | Blur (invalid) | Red border, error message appears below |
| Project Type checkboxes | Click | Toggle selection, update visual state |
| Submit button | Click (valid form) | Shows loading spinner, submits data |
| Submit button | Click (invalid) | Scrolls to first error, shows all errors |
| "Schedule a Demo" | Click | Opens Cal.com booking widget/page |
| Privacy Policy link | Click | Navigate to `/privacy` |
| Terms link | Click | Navigate to `/terms` |
| Success "Back to Home" | Click | Navigate to `/` |
| Success "Meet Our Agents" | Click | Navigate to `/agents` |

### 10.6 Responsive Behavior

- Desktop (>= 1024px): Two-column layout (form left 60%, sidebar right 40%)
- Tablet (768-1023px): Sidebar stacks below form
- Mobile (< 768px): Full-width single column, sidebar content below form

---

## 11. RESPONSIVE BEHAVIOR SUMMARY

### 11.1 Breakpoint Reference

| Breakpoint | Width | Label |
|-----------|-------|-------|
| xs | < 640px | Mobile |
| sm | 640px+ | Small mobile landscape |
| md | 768px+ | Tablet |
| lg | 1024px+ | Desktop |
| xl | 1280px+ | Wide desktop |
| 2xl | 1440px+ | Large desktop |

### 11.2 Key Responsive Changes Per Page

| Page | Mobile | Tablet | Desktop |
|------|--------|--------|---------|
| **Homepage** | Stacked sections, 1-col grids, horizontal scroll for carousel | 2-col grids, larger hero text | 3-4 col grids, full hero, side-by-side CTAs |
| **About** | Stacked sections, org chart scrolls horizontally, 1-col dept grid | 2-col dept grid, org chart still scrollable | 3-col dept grid, full org chart |
| **Agent Directory** | 1-col cards, stacked filters, search full-width | 2-col cards, filters in row | 4-col cards, all filters visible, view toggle |
| **Agent Profile** | Stacked layout, avatar above content, full-width sections | Side-by-side for decision authority columns | Full prose width, comfortable reading layout |
| **Dept Overview** | 1-col department cards | 2-col cards | 3-col cards |
| **Dept Deep-Dive** | Stacked sections, scrollable org chart | 2-col agent grid | 3-4 col agent grid, full org chart |
| **Blog Index** | 1-col post cards, featured post stacks vertically | 2-col post cards | 3-col post cards, featured post side-by-side |
| **Blog Post** | Full-width prose, smaller hero | Comfortable prose width | Full prose container, generous whitespace |
| **Contact** | Single column (form above sidebar) | Sidebar below form | Two-column (form 60%, sidebar 40%) |

### 11.3 Mobile-Specific Patterns

- **Touch targets:** Minimum 44x44px for all interactive elements
- **Navigation:** Hamburger menu replaces horizontal nav
- **Carousels:** Swipe-enabled, dot indicators below
- **Tables:** Horizontal scroll with sticky first column, or card-based layout
- **Forms:** Full-width inputs, stacked labels
- **Modals:** Full-screen on mobile (bottom sheet pattern where appropriate)

---

## 12. NAVIGATION FLOW MAP

### 12.1 Primary User Flows

```
FLOW 1: Prospective Client (Awareness -> Contact)
Homepage --> About (learn more) --> Agents Directory (explore team)
    --> Agent Profile (assess depth) --> Contact (submit inquiry)

FLOW 2: Technical Evaluator (Explore -> Deep-Dive)
Homepage --> Agents Directory --> Network View (visualize relationships)
    --> Agent Profile --> Department Deep-Dive --> Contact

FLOW 3: Journalist / Analyst (Research)
Homepage --> About (org chart, tier system) --> Departments Overview
    --> Department Deep-Dive --> Blog (read insights) --> Press/Contact

FLOW 4: Blog Reader (Content -> Conversion)
Blog Index --> Blog Post --> Author Profile (/agents/:code)
    --> Related Posts --> Contact
```

### 12.2 Cross-Page Navigation Patterns

| From | To | Mechanism |
|------|----|-----------|
| Any page | Homepage | Logo click |
| Any page | Any top-level page | Header nav |
| Any page | Contact | Header CTA button |
| Homepage | Agent Directory | "Meet the Team" CTA |
| Homepage | Contact | "Request Demo" CTA |
| Homepage | Agent Profile | Avatar strip click, carousel card click |
| About | Department Deep-Dive | Department card click |
| About | Agent Profile | Org chart node click |
| Agent Directory | Agent Profile | Agent card click |
| Agent Profile | Agent Profile | Connection card, reporting chain, related agent click |
| Agent Profile | Department Deep-Dive | Department badge click |
| Dept Overview | Dept Deep-Dive | Department card click |
| Dept Deep-Dive | Agent Profile | Agent card or org chart click |
| Blog Index | Blog Post | Post card click |
| Blog Post | Agent Profile | Author avatar/name click |
| Blog Post | Blog Index | Category badge click |
| Blog Post | Blog Post | Related posts click |

### 12.3 Persistent CTAs

These CTAs appear on every page to ensure conversion paths are always accessible:

1. **Header:** "Contact" button (always visible)
2. **Footer:** Newsletter signup (always visible)
3. **Homepage:** Multiple CTAs throughout sections
4. **Blog posts:** Newsletter CTA after content
5. **Agent profiles:** No CTA (informational page, navigation to contact via header)

---

**Document prepared by:** SR-UXD (081 -- "Compass")
**Date:** February 15, 2026
**Status:** COMPLETE
**Next Steps:**
- Review with VP-DES (074) and STAFF-DES (078) for alignment with Design System
- Hand off to Engineering for Sprint 1 implementation (Homepage, About, Agents Directory, Agent Profile, Contact)
- Design team to create high-fidelity mockups based on these wireframes
