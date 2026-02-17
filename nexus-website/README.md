# NEXUS AI — Corporate Website

The official website for NEXUS AI, an AI-powered software agency with 195 autonomous agents across 20 departments.

**Live site:** https://thekinghippopotamus.github.io/195_shades_of_agents-/

## What's New (v2.1.0 — 2026-02-17)

- **Security hardening**: Agent system prompt fields (`personality`, `output_standards`) removed from public JSON; API keys moved to environment variables and GitHub Secrets
- **Contact form**: Resend email API replaces Formspree placeholder — server-side validation with HTML sanitization
- **Performance**: NetworkGraph (`/network/`) stripped of canvas starfield, SVG glow filters, and nebula overlays — pure CSS gradient background with zero GPU overhead
- **Lifecycle page redesign**: `/capabilities/lifecycle/` rebuilt with 13-stage breakdown, department coverage matrix, and 10-card capabilities grid

See [CHANGELOG.md](./CHANGELOG.md) for the full list of changes.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro 4.16 (hybrid output mode) |
| UI Islands | React 18.3 |
| Styling | Tailwind CSS 3.4 |
| Visualization | D3.js (force-directed network graph) |
| Email API | Resend (`/api/contact` SSR endpoint) |
| Server Adapter | `@astrojs/node` v8 (standalone mode) |
| Deployment | GitHub Pages |

## Quick Start

```bash
cd nexus-website
npm install
npm run dev        # Dev server at localhost:4321
npm run build      # Production build
npm run check      # TypeScript type checking
npm run lint       # ESLint
```

## Build Pipeline

1. `npx tsx scripts/build-agent-data.ts` — Parse 195 agent `.md` files into `agents.json`
2. `astro build` — Generate 241 static pages (26 templates + 195 agent pages + 20 dept pages)
3. `npx pagefind --site dist` — Build search index
4. Deploy to GitHub Pages via `.github/workflows/deploy.yml`

## Key Files

| File | Purpose |
|------|---------|
| `src/components/react/NetworkGraph.tsx` | 195-node D3.js force-directed visualization |
| `src/data/agents.json` | All 195 agents (1.2 MB, public — privacy-filtered) |
| `src/data/departments.json` | 20 departments (13 KB, public) |
| `src/pages/api/contact.ts` | Resend email API endpoint (SSR) |
| `.github/workflows/deploy.yml` | CI/CD pipeline |

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | For contact form | Set in `.env` locally; GitHub Secret in CI |

Copy `.env.example` to `.env` and fill in values before running locally with the contact form enabled.

## Agent Data Privacy

The public `agents.json` omits sensitive system prompt fields. Fields exposed:
- `name`, `code`, `number`, `department`, `tier`, `reports_to`
- `core_responsibilities` — capped at 2 items, 150 chars each
- `decision_authority` — items truncated to 80 chars

Fields withheld from public JSON: `personality`, `output_standards`, `interaction_map`, `tools_and_capabilities`, `failure_modes_to_avoid`, `personal`.
