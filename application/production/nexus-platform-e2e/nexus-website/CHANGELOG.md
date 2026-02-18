# NEXUS Website Changelog

## [2.1.0] — 2026-02-17

### Security & Privacy
- **BREAKING**: Removed `personality` and `output_standards` fields from public `agents.json` and `public/data/agents.json` — agent system prompts are no longer exposed via the public API
- `core_responsibilities` capped at 2 items (150 chars each) in public JSON
- `decision_authority` items truncated to 80 chars in public JSON
- Resend API key stored in `.env` (gitignored) and GitHub Secrets only — never in source code

### Bug Fixes
- Fixed 404 errors on agent links from About page — all hrefs now use `import.meta.env.BASE_URL` dynamically
- Fixed 404 errors on agent links from all pages using `AgentCard.astro` — component now applies base path
- Fixed agent detail pages (`/agents/[code].astro`) to not reference removed fields (`personality`, `output_standards`)
- Added `isReadableLine()` filter to strip raw markdown headers from rendered agent data
- Added "What I Bring" and "Working With Me" sections to agent detail pages (previously hidden)

### New Features
- **Contact Form**: Replaced Formspree placeholder with Resend email API (`/api/contact` endpoint)
  - Server-side POST endpoint with input validation and HTML sanitization
  - Requires `RESEND_API_KEY` in GitHub Secrets for server deployment
  - GitHub Pages static deployment gracefully shows error if API unavailable
- **Astro Hybrid Mode**: Changed `output: "static"` → `output: "hybrid"` to support SSR API routes
- Added `@astrojs/node` adapter (v8, standalone mode) for server rendering

### Redesigned Pages
- **`/capabilities/lifecycle/`**: Complete redesign
  - 4-stat hero (13 Stages, 20 Departments, 195 Agents, Zero Handoff Gaps)
  - All 13 lifecycle stages with department badges, key agents, deliverables
  - Department Coverage matrix showing all 20 departments and their stage participation
  - "What We're Proud Of" capabilities grid (10 capability cards)

### Performance
- **NetworkGraph** (`/network/`): Removed heavy visual elements
  - Removed: canvas starfield (100 stars), nebula blob overlays, SVG glow filters (`node-glow`, `node-glow-strong`, `line-glow`), link glow layer
  - Kept: D3 force simulation, department color coding, hover tooltips, drag behavior, orbital rings (static, no animation)
  - Background: pure CSS gradient (zero GPU overhead)

### CI/CD
- Added `RESEND_API_KEY: ${{ secrets.RESEND_API_KEY }}` to all CI workflow build steps

### Departments Involved
| Department | Contribution |
|-----------|-------------|
| 02 Engineering (Frontend) | All code changes |
| 03 Platform-Infrastructure | Astro hybrid config, node adapter |
| 07 Quality-Assurance | Verification of all 10 checkpoints |
| 08 Security | Privacy audit, API key security review |
| 18 Governance | Architecture review, deployment approval |
| 20 Documentation | This changelog |

---
