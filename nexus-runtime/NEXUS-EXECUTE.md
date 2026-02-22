# NEXUS EXECUTE -- Local Runtime Playbook

> Zero budget. Claude Code terminal. 195 agents. Real paying clients.
> This is the operations manual. Not a spec. Not a vision doc. The actual playbook.

---

## 1. PROJECT INTAKE TEMPLATE

Copy this into a new file at `projects/{client-name}/INTAKE.md` for every new project.

```markdown
# PROJECT INTAKE

## Basics
- Project Name:
- Client:
- Type: [web-app | landing-page | api | mobile-app | cli-tool | game | full-system]
- Brief: (what the client wants, in their words)
- Deadline:
- Budget: (what the client is paying YOU)

## Requirements (fill what you know)
- Target users:
- Must-have features (P0):
  1.
  2.
  3.
- Nice-to-have features (P1):
  1.
  2.
- Design references: (URLs, screenshots, competitor sites)
- Brand assets: (logo, colors, fonts -- or "design from scratch")

## Technical Constraints
- Domain: (client owns one? buying one? use free subdomain?)
- Auth needed: [yes | no]
- Database needed: [yes | no]
- Payment processing: [yes | no]
- Third-party integrations: (list any APIs)
- Mobile responsive: [yes | no | mobile-first]

## Delivery
- Hosting: [client handles | we deploy | TBD]
- Source code: [deliver to client | keep in our repo]
- Ongoing maintenance: [yes | no | TBD]
- Handoff date:
```

---

## 2. EXECUTION WORKFLOW

This is the exact sequence. Every project. No exceptions.

```
STEP 1  Fill out INTAKE.md (5 min)
        You do this yourself. Paste the client brief, fill what you know.

STEP 2  Open Claude Code, paste this command:
        "NEXUS, execute this project: [paste INTAKE.md contents]"

STEP 3  Claude Code analyzes, routes to departments:
        - CSA/CTO decides architecture
        - Agents are spawned via Task tool to build

STEP 4  Build phase (agents work via Task tool):
        - Architecture -> Scaffold -> Features -> Polish
        - You review output at each stage, provide feedback

STEP 5  Quality pass (you verify before delivery):
        - Run the quality checklist (Section 5 below)
        - Fix anything that fails

STEP 6  Deploy to free hosting (Section 4 below)

STEP 7  Client delivery (use template in Section 6)

STEP 8  Get paid. Move to next project.
```

**Time targets by project type:**

| Type | Target Delivery | Your Hourly Rate at $500 Budget |
|------|----------------|-------------------------------|
| Landing page | 1-2 days | $125-250/hr |
| CLI tool | 1-3 days | $83-250/hr |
| API/Backend | 2-5 days | $50-125/hr |
| Web app | 5-10 days | $25-50/hr |
| Mobile app | 7-14 days | $18-36/hr |
| Game | 3-7 days | $36-83/hr |
| Full system | 10-20 days | $12-25/hr |

Lesson: Landing pages and CLI tools are the highest ROI. Start there. Build reputation. Raise prices.

---

## 3. PROJECT TYPE PLAYBOOKS

### 3A. LANDING PAGE

**When to use:** Marketing sites, portfolios, product launch pages, event pages, restaurant/business sites.

**Agents to activate:**

| Agent Code | Role |
|-----------|------|
| SR-FE-REACT | Build (Astro + React islands) |
| SR-UID | UI design system, component styling |
| SR-UXD | Layout, UX flow, conversion optimization |
| SR-QA-AUTO | Cross-browser and responsive testing |
| SR-DEVOPS | Deployment to GitHub Pages / Cloudflare |

**Tech stack (100% free):**
- Framework: Astro 4+ (static output, zero JS by default)
- Styling: Tailwind CSS 3+
- Components: React 18 (only for interactive islands)
- Icons: Lucide React or Heroicons
- Fonts: Google Fonts (self-hosted via fontsource)
- Forms: Formspree free tier (50 submissions/month) or Netlify Forms
- Analytics: Plausible (self-hosted) or Umami (free/self-hosted)
- CMS (if needed): Decap CMS (Git-based, free)

**Folder structure:**
```
projects/{client}/
  INTAKE.md
  site/
    astro.config.mjs
    tailwind.config.mjs
    src/
      layouts/Layout.astro
      pages/index.astro
      components/
        Header.astro
        Hero.astro
        Features.astro
        CTA.astro
        Footer.astro
      styles/global.css
      assets/         # images, fonts
    public/
      favicon.svg
      robots.txt
```

**Build sequence (paste to Claude Code):**
```
NEXUS, build a landing page:

1. Scaffold Astro project with Tailwind
2. Create Layout.astro with SEO meta, OG tags, structured data
3. Build sections: Hero, Features/Services, Testimonials, CTA, Footer
4. Add contact form (Formspree integration)
5. Optimize images (sharp/astro:image)
6. Test responsive (mobile-first)
7. Deploy to GitHub Pages
8. Run Lighthouse -- target 95+ on all scores
```

**Deploy target:** GitHub Pages (free) or Cloudflare Pages (free, faster global CDN)

---

### 3B. WEB APP (React/Next.js + Supabase)

**When to use:** SaaS dashboards, internal tools, CRUD apps, user-facing platforms with auth and data.

**Agents to activate:**

| Agent Code | Role |
|-----------|------|
| SR-FS | Full-stack architecture, feature implementation |
| SR-FE-REACT | Frontend components, state management |
| SR-BE-NODE | API routes, server logic |
| SR-DBA | Database schema, migrations |
| SR-UID | UI components, design system |
| SR-QA-AUTO | Testing (unit + integration + e2e) |
| SR-DEVOPS | CI/CD, deployment |

**Tech stack (100% free):**
- Framework: Next.js 14+ (App Router)
- Styling: Tailwind CSS + shadcn/ui (copy-paste components, no dependency)
- Auth: Supabase Auth (free tier: 50k MAU)
- Database: Supabase PostgreSQL (free tier: 500MB, 2 projects)
- File storage: Supabase Storage (free tier: 1GB)
- State: Zustand (client) + TanStack Query (server state)
- Validation: Zod (shared client/server schemas)
- ORM: Prisma or Drizzle
- Testing: Vitest + Playwright
- Email (transactional): Resend (free tier: 3k emails/month)

**Folder structure:**
```
projects/{client}/
  INTAKE.md
  app/
    next.config.js
    tailwind.config.ts
    src/
      app/
        layout.tsx
        page.tsx
        (auth)/
          login/page.tsx
          signup/page.tsx
        dashboard/
          page.tsx
          layout.tsx
        api/
          ...route handlers
      components/
        ui/           # shadcn components
        layout/       # Header, Sidebar, Footer
        features/     # domain-specific components
      lib/
        supabase.ts   # client + server clients
        utils.ts
        validations/  # Zod schemas
      hooks/
      types/
    prisma/
      schema.prisma
    supabase/
      migrations/
    tests/
      e2e/
      unit/
```

**Build sequence:**
```
NEXUS, build a web app:

1. Scaffold Next.js 14 with App Router, TypeScript strict, Tailwind, shadcn/ui
2. Set up Supabase project (auth + database + storage)
3. Design database schema (Prisma), run initial migration
4. Build auth flow: signup, login, password reset, protected routes
5. Build core feature pages (dashboard, CRUD for main entity)
6. Add API route handlers with Zod validation
7. Connect frontend to backend with TanStack Query
8. Write key tests (auth flow e2e, critical path unit tests)
9. Deploy to Vercel (free tier: 100GB bandwidth/month)
10. Run Lighthouse, fix any performance issues
```

**Deploy target:** Vercel (free tier) + Supabase (free tier)

---

### 3C. API / BACKEND

**When to use:** REST APIs, webhooks, microservices, data processing backends, integrations.

**Agents to activate:**

| Agent Code | Role |
|-----------|------|
| SR-BE-PY | Python FastAPI development |
| SR-BE-NODE | Node.js/Fastify development |
| SR-DBA | Database design, queries, optimization |
| VP-ARCH | API architecture, patterns |
| SR-QA-AUTO | API testing, load testing |
| SR-DEVOPS | Docker, deployment |

**Tech stack option A -- Python (100% free):**
- Framework: FastAPI
- ORM: SQLAlchemy 2.0 + Alembic (migrations)
- Validation: Pydantic v2
- Database: PostgreSQL (Supabase or Neon free tier)
- Cache: Upstash Redis (free tier: 10k commands/day)
- Auth: FastAPI-Users or custom JWT
- Docs: Auto-generated OpenAPI/Swagger
- Testing: pytest + httpx

**Tech stack option B -- Node.js (100% free):**
- Framework: Fastify 4+ or NestJS
- ORM: Prisma or Drizzle
- Validation: Zod
- Database: PostgreSQL (Supabase or Neon free tier)
- Cache: Upstash Redis
- Auth: Passport.js or custom JWT
- Docs: Auto-generated OpenAPI via fastify-swagger or @nestjs/swagger
- Testing: Vitest + supertest

**Folder structure (Python FastAPI):**
```
projects/{client}/
  INTAKE.md
  api/
    pyproject.toml        # or requirements.txt
    Dockerfile
    alembic.ini
    alembic/
      versions/
    app/
      main.py             # FastAPI app entry
      config.py           # env vars, settings
      models/             # SQLAlchemy models
      schemas/            # Pydantic schemas
      routers/            # API route modules
      services/           # business logic
      middleware/          # auth, CORS, logging
      utils/
    tests/
      test_api.py
      conftest.py
```

**Build sequence:**
```
NEXUS, build an API:

1. Scaffold FastAPI project with proper structure
2. Set up PostgreSQL connection (Supabase/Neon)
3. Design models and create migration
4. Build CRUD endpoints with Pydantic validation
5. Add auth middleware (JWT)
6. Add error handling, logging, CORS
7. Write API tests (pytest + httpx)
8. Create Dockerfile
9. Deploy to Render free tier
10. Verify with curl/Postman, share OpenAPI docs URL
```

**Deploy target:** Render (free tier, spins down after 15 min inactivity) or Fly.io (free tier: 3 shared VMs)

---

### 3D. MOBILE APP (React Native / Expo)

**When to use:** Cross-platform mobile apps (iOS + Android), client wants app store presence.

**Agents to activate:**

| Agent Code | Role |
|-----------|------|
| SR-MOB-RN | React Native / Expo development |
| SR-FE-REACT | Shared component logic |
| SR-BE-NODE | Backend API (if needed) |
| SR-UID | Mobile UI design, component library |
| SR-UXD | Mobile UX patterns, navigation flow |
| SR-QA-AUTO | Mobile testing |

**Tech stack (100% free):**
- Framework: Expo SDK 50+ (managed workflow)
- Navigation: Expo Router (file-based routing)
- Styling: NativeWind (Tailwind for React Native) or StyleSheet
- State: Zustand + TanStack Query
- Backend: Supabase (auth + database + storage + realtime)
- Push notifications: Expo Notifications (free)
- OTA updates: Expo Updates (free for small teams)
- Icons: @expo/vector-icons
- Testing: Jest + React Native Testing Library

**Folder structure:**
```
projects/{client}/
  INTAKE.md
  mobile/
    app.json
    app/
      _layout.tsx           # Root layout (Expo Router)
      index.tsx             # Home screen
      (auth)/
        login.tsx
        signup.tsx
      (tabs)/
        _layout.tsx         # Tab navigator
        home.tsx
        profile.tsx
        settings.tsx
    components/
      ui/
      features/
    lib/
      supabase.ts
      utils.ts
    hooks/
    types/
    assets/
```

**Build sequence:**
```
NEXUS, build a mobile app:

1. Scaffold Expo project with Expo Router, TypeScript
2. Set up Supabase backend (auth + database)
3. Build auth screens (login, signup, forgot password)
4. Build tab navigation with core screens
5. Implement main features (CRUD, lists, detail views)
6. Add pull-to-refresh, loading states, error boundaries
7. Test on Expo Go (iOS + Android simulators)
8. Build development preview with EAS Build
9. Create app store screenshots
10. Deliver APK/IPA or publish to Expo for client testing
```

**Deploy target:**
- Development: Expo Go app (instant testing, no build needed)
- Staging: EAS Build development builds (free tier: 30 builds/month)
- Production: EAS Build + EAS Submit to App Store / Google Play
- Backend: Supabase free tier

---

### 3E. CLI TOOL

**When to use:** Developer tools, automation scripts, data processors, system utilities.

**Agents to activate:**

| Agent Code | Role |
|-----------|------|
| SR-BE-PY | Python CLI (Click/Typer) |
| SR-BE-NODE | Node.js CLI (Commander/Inquirer) |
| SR-QA-AUTO | Testing |

**Tech stack option A -- Python (100% free):**
- CLI framework: Typer (modern, auto-docs) or Click
- Output: Rich (beautiful terminal output)
- Config: tomli (TOML) or pydantic-settings
- Packaging: PyPI (free) or single binary via PyInstaller
- Testing: pytest

**Tech stack option B -- Node.js (100% free):**
- CLI framework: Commander.js + Inquirer.js (interactive prompts)
- Output: chalk + ora (spinners) + cli-table3
- Config: cosmiconfig
- Packaging: npm (free) or pkg (single binary)
- Testing: Vitest

**Folder structure (Python):**
```
projects/{client}/
  INTAKE.md
  cli/
    pyproject.toml
    src/
      {tool_name}/
        __init__.py
        main.py           # Typer app entry
        commands/          # subcommand modules
        utils/
        config.py
    tests/
    README.md
```

**Build sequence:**
```
NEXUS, build a CLI tool:

1. Scaffold Python package with pyproject.toml
2. Set up Typer app with main command group
3. Build subcommands per feature
4. Add Rich output formatting (tables, progress bars, colors)
5. Add config file support (~/.{toolname}/config.toml)
6. Write tests
7. Create README with usage examples
8. Publish to PyPI (free) or deliver as standalone binary
```

**Deploy target:** PyPI (free, `pip install {tool}`) or npm (free, `npx {tool}`)

---

### 3F. GAME (JavaScript / Phaser.js)

**When to use:** Browser games, game jams, promotional games, educational games.

**Agents to activate:**

| Agent Code | Role |
|-----------|------|
| SR-FE-REACT | Game scaffold, build pipeline |
| SR-FS | Game logic, state management |
| SR-UID | Visual design, sprites, UI overlay |
| SR-QA-AUTO | Play testing, performance |

**Tech stack (100% free):**
- Engine: Phaser 3 (2D, full-featured, MIT license)
- Alternative: raw Canvas/WebGL for simple games
- Language: TypeScript
- Build: Vite
- Audio: Howler.js
- Assets: OpenGameArt.org, Kenney.nl (free CC0 assets)
- Physics: Matter.js (Phaser built-in) or Arcade Physics
- Testing: Manual playtesting + Lighthouse performance

**Folder structure:**
```
projects/{client}/
  INTAKE.md
  game/
    vite.config.ts
    index.html
    src/
      main.ts             # Phaser game config + boot
      scenes/
        Boot.ts           # asset preloading
        Menu.ts           # title screen
        Game.ts           # main gameplay
        GameOver.ts       # results screen
      objects/            # game entities (Player, Enemy, etc.)
      managers/           # score, sound, input managers
      utils/
    public/
      assets/
        sprites/
        audio/
        fonts/
```

**Build sequence:**
```
NEXUS, build a browser game:

1. Scaffold Vite + TypeScript + Phaser 3 project
2. Create scene flow: Boot -> Menu -> Game -> GameOver
3. Build core gameplay mechanic (the one thing that makes it fun)
4. Add player input handling (keyboard + touch for mobile)
5. Add scoring, lives, difficulty progression
6. Add sound effects + music
7. Polish: particles, screen shake, juice
8. Optimize for 60fps on mobile browsers
9. Deploy to GitHub Pages / itch.io
10. Add share/social meta tags
```

**Deploy target:** GitHub Pages (free), itch.io (free, built-in game page), Cloudflare Pages (free)

---

### 3G. FULL SYSTEM (Multiple Components)

**When to use:** SaaS products, platforms that combine frontend + backend + mobile + admin.

**Agents to activate:** All agents from the relevant sub-playbooks above, plus:

| Agent Code | Role |
|-----------|------|
| VP-ARCH | System architecture, service boundaries |
| SR-DEVOPS | Multi-service deployment, Docker Compose |
| DIR-QA | Test strategy across components |
| SR-TPM | Project timeline, milestone tracking |

**Architecture pattern (monorepo):**
```
projects/{client}/
  INTAKE.md
  ARCHITECTURE.md         # system design doc
  packages/
    shared/               # shared types, utils, validation schemas
      src/
        types/
        validations/
        utils/
  apps/
    web/                  # Next.js frontend (use 3B playbook)
    api/                  # FastAPI or Fastify backend (use 3C playbook)
    mobile/               # Expo app (use 3D playbook)
    admin/                # Admin dashboard (lightweight Next.js)
  infra/
    docker-compose.yml    # local development
    Dockerfile.api
    Dockerfile.web
```

**Build sequence:**
```
NEXUS, build a full system:

Phase 1 -- Foundation (Days 1-3)
  1. Create monorepo structure
  2. Design database schema (single source of truth)
  3. Build and deploy API with core CRUD + auth
  4. Verify API with tests

Phase 2 -- Frontend (Days 4-7)
  5. Build web app connected to API
  6. Implement auth flow end-to-end
  7. Build core feature screens

Phase 3 -- Mobile (Days 8-12)
  8. Build mobile app sharing API
  9. Implement mobile-specific UX

Phase 4 -- Polish (Days 13-15)
  10. Admin dashboard
  11. End-to-end testing across all apps
  12. Performance optimization
  13. Deploy all components

Phase 5 -- Deliver (Days 16-17)
  14. Client demo
  15. Handoff documentation
```

**Deploy target:** Vercel (web + admin) + Render or Fly.io (API) + Supabase (database) + Expo (mobile)

---

## 4. FREE DEPLOYMENT TARGETS -- DECISION MATRIX

Pick the right free host for the job. No excuses for paying hosting on early projects.

### Static Sites (Landing Pages, Games, Docs)

| Host | Free Tier | Best For | Limits |
|------|-----------|----------|--------|
| **GitHub Pages** | Unlimited | Public repos, simple deploys | 1GB storage, 100GB bandwidth/month |
| **Cloudflare Pages** | Unlimited | Global CDN, fast builds | 500 builds/month, 1 build at a time |
| **Vercel** | Hobby plan | Next.js/Astro with serverless | 100GB bandwidth, 6k min build time |
| **Netlify** | Free tier | Forms, functions, identity | 100GB bandwidth, 300 build min/month |

**Default pick: Cloudflare Pages** (fastest CDN, most generous)

### Full-Stack Apps (Next.js + API)

| Host | Free Tier | Best For | Limits |
|------|-----------|----------|--------|
| **Vercel** | Hobby plan | Next.js SSR/API routes | 100GB bandwidth, serverless functions |
| **Supabase** | Free tier | Auth + PostgreSQL + Storage | 500MB DB, 1GB storage, 2 projects |
| **Neon** | Free tier | Serverless PostgreSQL | 512MB storage, 1 project |

**Default pick: Vercel + Supabase** (best integrated stack)

### APIs / Backends

| Host | Free Tier | Best For | Limits |
|------|-----------|----------|--------|
| **Render** | Free tier | Docker containers, web services | Spins down after 15 min, 750 hrs/month |
| **Fly.io** | Free tier | Global edge deployment | 3 shared VMs, 160GB outbound |
| **Railway** | Trial | Quick prototypes | $5 credit, then paid |
| **Deno Deploy** | Free tier | Deno/TypeScript APIs | 1M requests/month |

**Default pick: Render** (simplest Docker deploy, auto-SSL)

### Databases

| Service | Free Tier | Best For | Limits |
|---------|-----------|----------|--------|
| **Supabase** | Free tier | Full BaaS (auth+db+storage) | 500MB DB, 50k MAU, 2 projects |
| **Neon** | Free tier | Serverless PostgreSQL | 512MB, auto-suspend |
| **PlanetScale** | Free tier | MySQL (if client requires) | 5GB, 1 billion row reads/month |
| **Upstash** | Free tier | Redis cache + Kafka | 10k commands/day |
| **Turso** | Free tier | SQLite at edge (libSQL) | 9GB storage, 500M rows read |

**Default pick: Supabase** (most features in free tier)

### Mobile

| Tool | Free Tier | Best For | Limits |
|------|-----------|----------|--------|
| **Expo Go** | Free | Development testing | No custom native modules |
| **EAS Build** | Free tier | App builds | 30 builds/month |
| **EAS Submit** | Free | App store submission | Requires Apple/Google dev accounts |

**Note:** Apple Developer ($99/yr) and Google Play ($25 one-time) are required for app store publishing. These are the client's cost, not yours.

### Domain Names (When You Have Revenue)

| Registrar | Price Range | Notes |
|-----------|------------|-------|
| **Cloudflare Registrar** | At-cost (~$10/yr .com) | No markup, best value |
| **Namecheap** | $8-12/yr .com | Good for bulk |
| **Google Domains** (now Squarespace) | $12/yr .com | Simple |

**Until you have revenue:** Use free subdomains ({project}.vercel.app, {project}.pages.dev, {user}.github.io/{project})

---

## 5. QUALITY CHECKLIST

Run this before EVERY client delivery. No exceptions. Each item is pass/fail.

### Functionality
- [ ] All P0 features work as described in INTAKE.md
- [ ] Forms submit correctly and show success/error states
- [ ] Auth flow works end-to-end (signup, login, logout, password reset)
- [ ] All links work (no 404s)
- [ ] Error states are handled gracefully (no blank screens, no raw error messages)

### Responsive Design
- [ ] Works on iPhone SE (375px) -- smallest common phone
- [ ] Works on iPad (768px)
- [ ] Works on desktop (1440px)
- [ ] No horizontal scrolling on any device
- [ ] Touch targets are 44x44px minimum on mobile

### Performance
- [ ] Lighthouse Performance score >= 90
- [ ] Lighthouse Accessibility score >= 90
- [ ] Lighthouse Best Practices score >= 90
- [ ] Lighthouse SEO score >= 90
- [ ] First Contentful Paint < 1.5s
- [ ] No images over 200KB (use WebP/AVIF)
- [ ] No layout shift on load

### Code Quality
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] No ESLint errors (`npx eslint .`)
- [ ] No console.log statements in production code
- [ ] No hardcoded secrets or API keys (use environment variables)
- [ ] .env.example file included with all required variables documented

### Deployment
- [ ] Site/app is deployed and accessible via URL
- [ ] HTTPS enabled (automatic on all free hosts)
- [ ] Custom domain connected (if client provided one)
- [ ] 404 page exists and looks professional
- [ ] Favicon and OG image set

### SEO (for public-facing sites)
- [ ] Page title and meta description on every page
- [ ] OpenGraph tags (og:title, og:description, og:image)
- [ ] Sitemap.xml generated
- [ ] robots.txt configured
- [ ] Canonical URLs set

**Quick check command (paste into terminal):**
```bash
# Run Lighthouse audit on deployed URL
npx lighthouse {DEPLOYED_URL} --output=html --output-path=./lighthouse-report.html --chrome-flags="--headless"
```

---

## 6. CLIENT DELIVERY TEMPLATE

When the project is done, send this to the client. Copy, fill in the blanks, send via email or your preferred channel.

---

```markdown
Subject: {Project Name} -- Delivery Complete

Hi {Client Name},

Your project is complete and live. Here is everything you need:

## Live URLs
- Production: {URL}
- Admin panel: {URL} (if applicable)
- API docs: {URL}/docs (if applicable)

## Credentials
- Admin login: {email} / {password} (CHANGE THIS IMMEDIATELY)
- Supabase dashboard: {URL} (if applicable)
- Hosting dashboard: {URL}

## Source Code
- Repository: {GitHub URL}
- Branch: main (production)
- README includes setup instructions for local development

## What Was Built
1. {Feature 1 -- brief description}
2. {Feature 2 -- brief description}
3. {Feature 3 -- brief description}

## Tech Stack
- Frontend: {framework}
- Backend: {framework} (if applicable)
- Database: {service} (if applicable)
- Hosting: {platform}

## Free Tier Limits (Important)
Your project is deployed on free hosting tiers. Current limits:
- {Service}: {limit description}
- {Service}: {limit description}
If you exceed these limits, here is what upgrading costs: {pricing URL}

## How to Make Changes
Option A: Send me change requests (I can implement them at {rate}/hr)
Option B: The codebase is yours -- any developer can pick it up
Option C: I can set up a simple CMS so you can edit content yourself

## Next Steps
- [ ] Change the admin password
- [ ] Review all pages/features and confirm everything works
- [ ] Let me know if anything needs adjustment (included in scope)
- [ ] Leave a review/testimonial (helps me a lot)

Thanks for working with me. Let me know if you need anything.

{Your name}
```

---

## 7. REVENUE REINVESTMENT PLAN

Prioritized list. Spend money only when the ROI is clear. Every dollar should either reduce time-to-delivery or increase project capacity.

### Phase 1: First $0-500 in Revenue (Survival)

Spend nothing. Keep free tiers. Reinvest in getting the next client.

**Priorities:**
1. Build portfolio pieces (your own landing page, 2-3 showcase projects)
2. Set up a simple portfolio site (use the Landing Page playbook on yourself)
3. Start a presence on freelancing platforms (Upwork, Fiverr, local networks)

### Phase 2: $500-2,000 in Revenue (Foundation)

| Investment | Cost | Why |
|-----------|------|-----|
| Your own domain (yourname.dev or agency.com) | ~$10/yr | Credibility. Clients trust custom domains. |
| Client project domains | ~$10-15/yr each | Professional delivery. Charge client for it. |
| Cloudflare Pro (if needed) | $20/month | WAF, better analytics, image optimization |

### Phase 3: $2,000-5,000 in Revenue (Growth)

| Investment | Cost | Why |
|-----------|------|-----|
| Supabase Pro (1 project) | $25/month | 8GB database, daily backups, no pause |
| Vercel Pro | $20/month | Unlimited bandwidth, team features |
| Render paid tier | $7/month per service | No spin-down, better performance |
| Figma Professional | $15/month | Design handoff, client collaboration |
| Better dev hardware (if needed) | $300-1000 | Faster builds = faster delivery |

### Phase 4: $5,000-10,000 in Revenue (Scale)

| Investment | Cost | Why |
|-----------|------|-----|
| Anthropic API access | $20-100/month | Automated testing, code review, batch ops |
| Multiple Supabase Pro projects | $25/month each | Client isolation, proper staging |
| Monitoring (Sentry free -> paid) | $26/month | Error tracking across all client projects |
| Resend Pro (email) | $20/month | Higher volume transactional email |
| Legal template (contract) | $200 one-time | Protect yourself. Use a freelance contract template. |

### Phase 5: $10,000+ in Revenue (Agency Mode)

| Investment | Cost | Why |
|-----------|------|-----|
| Claude Pro / API tier upgrade | Variable | Full NEXUS Runtime 2 -- multiple agents in parallel |
| Cloud credits (AWS/GCP startup programs) | Apply for free | $1k-10k in credits for startups |
| Accountant (part-time) | $100-300/month | Tax optimization, invoicing |
| Second Claude Code seat | Subscription cost | Run two projects simultaneously |

### Key Rule: Never Spend Money You Have Not Earned

Every investment must pass this test: "Will this pay for itself within 30 days by saving me time or letting me charge more?"

If the answer is not a clear yes, do not buy it.

---

## 8. AGENT ROUTING QUICK REFERENCE

When you tell Claude Code "NEXUS, execute this project," it needs to know which agents handle what. This is the cheat sheet.

```
LANDING PAGE    -> SR-FE-REACT + SR-UID + SR-UXD + SR-DEVOPS
WEB APP         -> SR-FS + SR-FE-REACT + SR-BE-NODE + SR-DBA + SR-UID + SR-QA-AUTO
API             -> SR-BE-PY or SR-BE-NODE + SR-DBA + VP-ARCH + SR-QA-AUTO
MOBILE APP      -> SR-MOB-RN + SR-FE-REACT + SR-UID + SR-UXD + SR-BE-NODE
CLI TOOL        -> SR-BE-PY or SR-BE-NODE
GAME            -> SR-FE-REACT + SR-FS + SR-UID
FULL SYSTEM     -> VP-ARCH + all of the above + SR-DEVOPS + DIR-QA + SR-TPM
```

**Architecture decisions -> VP-ARCH (014)**
**Database design -> SR-DBA (040)**
**Testing strategy -> DIR-QA (100)**
**Deployment -> SR-DEVOPS (055)**
**UI/UX design -> SR-UID (079) + SR-UXD (080)**

---

## 9. COMMON COMMANDS CHEAT SHEET

Keep these handy. Copy-paste into Claude Code as needed.

**Scaffold a new project:**
```bash
mkdir -p /Users/kinghippo/Documents/NEXUS_AI/projects/{client-name}
```

**Start Astro landing page:**
```bash
npm create astro@latest -- --template basics --typescript strictest
npx astro add tailwind react
```

**Start Next.js web app:**
```bash
npx create-next-app@latest --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
npx shadcn@latest init
```

**Start FastAPI project:**
```bash
pip install fastapi uvicorn sqlalchemy alembic pydantic
```

**Start Expo mobile app:**
```bash
npx create-expo-app@latest --template tabs
```

**Start Phaser game:**
```bash
npm create vite@latest -- --template vanilla-ts
npm install phaser
```

**Run Lighthouse audit:**
```bash
npx lighthouse {URL} --output=json --chrome-flags="--headless" | npx lighthouse-ci upload
```

**Deploy to GitHub Pages:**
```bash
git add -A && git commit -m "deploy" && git push origin main
# (GitHub Actions handles the rest -- set up .github/workflows/deploy.yml)
```

**Deploy to Cloudflare Pages:**
```bash
npx wrangler pages deploy dist --project-name={project-name}
```

---

## 10. PRICING GUIDE (What to Charge Clients)

Start low, build portfolio, raise prices every 3 months.

### Starting Prices (Portfolio Building Phase)

| Project Type | Minimum Price | Target Price | Premium Price |
|-------------|--------------|-------------|---------------|
| Landing page (1-5 pages) | $200 | $500 | $1,000 |
| Web app (MVP) | $500 | $1,500 | $3,000 |
| API/Backend | $300 | $1,000 | $2,000 |
| Mobile app (MVP) | $500 | $2,000 | $5,000 |
| CLI tool | $200 | $500 | $1,000 |
| Browser game | $300 | $800 | $2,000 |
| Full system | $2,000 | $5,000 | $10,000+ |

### After 5+ Completed Projects (Established Phase)

Multiply all prices by 2-3x. You now have a portfolio, testimonials, and proven delivery speed.

### After 15+ Completed Projects (Agency Phase)

Multiply original prices by 5-10x. At this point your speed advantage (hours instead of weeks) justifies premium pricing.

### Pricing Psychology
- Always give three options (basic, standard, premium)
- The middle option should be what you actually want them to pick
- Add ongoing maintenance as a monthly retainer ($50-200/month)
- Charge a 50% deposit before starting work
- Final 50% on delivery, before handing over source code

---

## END OF PLAYBOOK

This document is alive. Update it after every project with lessons learned.
Keep shipping. Keep iterating. Keep raising prices.

The 195 agents are your leverage. Claude Code is your runtime. The free tier is your infrastructure.
Go build.
