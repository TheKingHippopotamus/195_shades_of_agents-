# Platform Restructure Plan: `application/` Folder Migration

**Author:** VP-ARCH (Agent 014)
**Date:** 2026-02-18
**Status:** DRAFT v2 — Revised: sanity-studio moved to local-dev (dev tool, not production)

---

## 1. Target Folder Structure

```
NEXUS_AI/                             # repo root (unchanged)
├── agents/                           # agent prompt library (unchanged)
├── 8k_Avaters/                       # avatar generator (unchanged)
├── 00-COMPANY-HIERARCHY-V3.md        # operational docs (unchanged)
├── 00-MASTER-AGENT-INDEX-V2.md       # ...
├── CLAUDE.md                         # project instructions
├── .github/workflows/                # CI/CD (MUST UPDATE)
│   ├── deploy.yml
│   └── ci.yml
│
├── application/                      # NEW — all application code
│   ├── production/
│   │   └── nexus-platform-e2e/       # production deployment platform
│   │       ├── nexus-website/        # MOVED from root /nexus-website (GitHub Pages)
│   │       └── workers/              # MOVED from root /workers (Cloudflare Workers)
│   └── local-dev/
│       ├── sanity-studio/            # MOVED from root /sanity-studio (CMS dev tool)
│       └── README.md                 # Dev setup instructions + notes
│
├── .wrangler/                        # Cloudflare cache (stays at root — gitignored)
├── customer_of_nexus_ai/             # (gitignored, unchanged)
└── ...                               # other root docs unchanged
```

### Why this split?
- **production/** contains only code that is deployed to external services (GitHub Pages, Cloudflare Workers). `nexus-platform-e2e` groups these as the production deployment platform.
- **local-dev/** contains development-only tools. Sanity Studio is a CMS authoring interface used locally during content editing — it is NOT deployed as part of the production pipeline. Keeping it in `local-dev/` makes the production boundary explicit and prevents accidental coupling.

---

## 2. Complete Path-Reference Audit

### 2.1 GitHub Actions Workflows — CRITICAL (blocks deployment)

| File | Current Path Reference | New Path Reference | Lines |
|------|----------------------|-------------------|-------|
| `.github/workflows/deploy.yml` | `working-directory: nexus-website` | `working-directory: application/production/nexus-platform-e2e/nexus-website` | 25 |
| `.github/workflows/deploy.yml` | `cache-dependency-path: nexus-website/package-lock.json` | `cache-dependency-path: application/production/nexus-platform-e2e/nexus-website/package-lock.json` | 39 |
| `.github/workflows/deploy.yml` | `path: nexus-website/dist` | `path: application/production/nexus-platform-e2e/nexus-website/dist` | 77 |
| `.github/workflows/ci.yml` | `working-directory: nexus-website` | `working-directory: application/production/nexus-platform-e2e/nexus-website` | 12 |
| `.github/workflows/ci.yml` | `cache-dependency-path: nexus-website/package-lock.json` (x4 jobs) | `cache-dependency-path: application/production/nexus-platform-e2e/nexus-website/package-lock.json` | 23, 35, 48, 61 |

### 2.2 Build Scripts — CRITICAL (relative path to `agents/`)

| File | Current Reference | Issue | Fix |
|------|------------------|-------|-----|
| `nexus-website/scripts/build-agent-data.ts:6` | `resolve(import.meta.dirname, "../..")` → repo root | After move, `../..` would resolve to `nexus-platform-e2e/`, NOT repo root | Change to `resolve(import.meta.dirname, "../../../../..")` (5 levels up) OR use env var `NEXUS_ROOT` |
| `nexus-website/scripts/generate-avatars.ts:379` | `join(__dirname, "../../agents")` | Same issue: relative path breaks | Change to `join(__dirname, "../../../../../agents")` OR env var |
| `nexus-website/scripts/generate-sitemap.ts:6` | `resolve(import.meta.dirname, "../dist")` | OK — relative to own package, stays valid | No change needed |
| `nexus-website/scripts/fetch-sanity-content.ts:19` | `resolve(import.meta.dirname, "../src/data/sanity")` | OK — relative to own package | No change needed |

**Recommendation:** Use an environment variable `NEXUS_REPO_ROOT` instead of fragile relative paths. Set it in the workflow and in a `.env` for local dev. The build script becomes:

```typescript
const PROJECT_ROOT = process.env.NEXUS_REPO_ROOT || resolve(import.meta.dirname, "../../../../..");
```

### 2.3 Cloudflare Workers — MEDIUM (GitHub API path)

| File | Current Reference | New Reference |
|------|------------------|---------------|
| `workers/contact-submission-receiver.js:11` | `const FILE = "nexus-website/src/data/submissions.json"` | `const FILE = "application/production/nexus-platform-e2e/nexus-website/src/data/submissions.json"` |
| `workers/DEPLOY.md:5` | `nexus-website/src/data/submissions.json` | Update all path references |
| `workers/DEPLOY.md:24` | `nexus-website/src/components/react/ContactForm.tsx` | Update path |
| `workers/DEPLOY.md:28` | `nexus-website/src/data/submissions.json` | Update path |

### 2.4 Sanity Studio — ONE STALE PATH (CTO finding)

Most of sanity-studio is self-contained (config, schemas, queries all use env vars or self-relative paths). However:

| File | Current Reference | Issue | Fix |
|------|------------------|-------|-----|
| `sanity-studio/scripts/fetch-sanity-content.ts:48-50` | `resolve(__dirname, "../../website/site/src/data/sanity")` | **ALREADY BROKEN** — points to old `website/site/` structure that was removed. This path does not resolve to anything valid today. | Fix to `resolve(__dirname, "../../../production/nexus-platform-e2e/nexus-website/src/data/sanity")` (3 levels up from `scripts/` to `application/`: scripts -> sanity-studio -> local-dev -> application, then down into production tree) |

**Safe files (no changes needed):**
- `sanity.config.ts` — env vars + hardcoded Sanity project ID
- `sanity.cli.ts` — env vars
- `schemas/*` — Sanity schema definitions, no file paths
- `lib/queries.ts` — GROQ queries, no file paths
- `package.json` — scripts are all self-contained (`sanity dev`, `sanity build`)

**Note:** This script is also duplicated in `nexus-website/scripts/fetch-sanity-content.ts` (which uses `import.meta.dirname` and writes to its own `src/data/sanity/`). The nexus-website version is the one used in CI. The sanity-studio version is a convenience script for local content fetching — it was never updated when the project moved from `website/site/` to `nexus-website/`.

### 2.5 CLAUDE.md (Project Instructions) — UPDATE NEEDED

| Section | Current | New |
|---------|---------|-----|
| "NEXUS Website Project" | `nexus-website/` | `application/production/nexus-platform-e2e/nexus-website/` |
| "Key Commands" | `cd nexus-website` | `cd application/production/nexus-platform-e2e/nexus-website` |
| "Critical Files" | `src/components/react/NetworkGraph.tsx` | Same relative (within nexus-website) |
| "Build Pipeline" | `npx tsx scripts/build-agent-data.ts` | Same (run from within nexus-website) |

### 2.6 Root .gitignore — CHECK

Current entries `dist/`, `node_modules/`, `.astro/` apply globally, which is correct. No changes needed.

### 2.7 Workers `.wrangler/` cache

The `.wrangler/` dir at repo root contains Cloudflare account cache. After the move, if workers is invoked from its new location, Wrangler will look for `.wrangler/` relative to the `wrangler.toml` location (inside `workers/`), which has its own `.wrangler/` already. The root-level `.wrangler/` can remain or be gitignored — no functional impact.

---

## 3. GitHub Actions Workflow Changes

### 3.1 `deploy.yml` — Full diff

```yaml
# BEFORE
defaults:
  run:
    working-directory: nexus-website

# AFTER
defaults:
  run:
    working-directory: application/production/nexus-platform-e2e/nexus-website

# BEFORE (Setup Node)
cache-dependency-path: nexus-website/package-lock.json

# AFTER
cache-dependency-path: application/production/nexus-platform-e2e/nexus-website/package-lock.json

# BEFORE (Upload artifact)
path: nexus-website/dist

# AFTER
path: application/production/nexus-platform-e2e/nexus-website/dist

# ADD to Pre-build step environment:
env:
  NEXUS_REPO_ROOT: ${{ github.workspace }}
```

### 3.2 `ci.yml` — Full diff

Same pattern as deploy.yml for all 5 jobs (typecheck, lint, test-unit, build, test-e2e):
- `working-directory` → `application/production/nexus-platform-e2e/nexus-website`
- `cache-dependency-path` → `application/production/nexus-platform-e2e/nexus-website/package-lock.json`
- Add `NEXUS_REPO_ROOT: ${{ github.workspace }}` to build/test env blocks

---

## 4. Order of Operations (Step-by-Step)

**Goal:** Zero downtime. The `main` branch must never have a broken deploy.

### Phase 1: Prepare (on feature branch, pre-merge)

| Step | Action | Risk | Verification |
|------|--------|------|-------------|
| 1.1 | Create feature branch `feat/platform-restructure` | None | `git checkout -b feat/platform-restructure` |
| 1.2 | Create directory structure: `mkdir -p application/production/nexus-platform-e2e application/local-dev` | None | `ls -la application/production/nexus-platform-e2e` |
| 1.3 | `git mv nexus-website application/production/nexus-platform-e2e/nexus-website` | LOW — git tracks the rename | Verify: `git status` shows renames |
| 1.4 | `git mv sanity-studio application/local-dev/sanity-studio` | LOW | Verify: `git status` |
| 1.5 | `git mv workers application/production/nexus-platform-e2e/workers` | LOW | Verify: `git status` |
| 1.6 | Update `build-agent-data.ts` line 6 — use `NEXUS_REPO_ROOT` env var with fallback | MEDIUM | Run locally: `cd application/.../nexus-website && NEXUS_REPO_ROOT=$(git rev-parse --show-toplevel) npx tsx scripts/build-agent-data.ts` |
| 1.7 | Update `generate-avatars.ts` line 379 — same env var pattern | LOW | Grep confirms fix |
| 1.8 | Update `contact-submission-receiver.js` line 11 — new FILE path | LOW | Read the code to verify |
| 1.9 | Update `workers/DEPLOY.md` — all 3 path references | None (docs only) | Visual check |
| 1.10 | Fix `sanity-studio/scripts/fetch-sanity-content.ts` line 48-50 — stale `../../website/site/` path. Update to resolve correctly from `application/local-dev/sanity-studio/scripts/` to `application/production/nexus-platform-e2e/nexus-website/src/data/sanity` | LOW (already broken today) | Run locally to verify |
| 1.11 | Update `.github/workflows/deploy.yml` — 3 path changes + env var | HIGH — if wrong, deploy breaks | CI runs on PR |
| 1.12 | Update `.github/workflows/ci.yml` — all job path changes + env var | HIGH — if wrong, CI breaks | CI runs on PR |
| 1.13 | Update `CLAUDE.md` — project instruction paths | None (docs) | Visual check |
| 1.14 | Create `application/local-dev/README.md` with dev setup notes | None | Visual check |

### Phase 2: Validate (on feature branch)

| Step | Action |
|------|--------|
| 2.1 | Local build test: `cd application/production/nexus-platform-e2e/nexus-website && npm run build` |
| 2.2 | Local dev test: `npm run dev` — verify site loads on localhost:4321 |
| 2.3 | Verify agent data: check `src/data/agents.json` has 195 agents |
| 2.4 | Push branch, open PR — verify CI pipeline passes (all 5 jobs) |
| 2.5 | Verify sanity-studio: `cd application/local-dev/sanity-studio && npm run dev` (dev tool — no prod build needed) |

### Phase 3: Merge (to main)

| Step | Action |
|------|--------|
| 3.1 | Merge PR to main |
| 3.2 | Monitor deploy workflow — should trigger on push to main |
| 3.3 | Verify live site at `https://thekinghampopotamus.github.io/195_shades_of_agents-/` |
| 3.4 | If deploy fails, execute rollback (see section 5) |

---

## 5. Rollback Strategy

### If CI/deploy breaks after merge to main:

**Option A — Fast revert (< 5 min):**
```bash
git revert HEAD                       # revert the restructure commit
git push origin main                  # triggers re-deploy with old structure
```

**Option B — If revert doesn't cleanly apply:**
```bash
git log --oneline -5                  # find the commit before restructure
git revert --no-commit HEAD           # revert in working tree
git checkout HEAD~1 -- .github/       # restore old workflows
git commit -m "revert: undo platform restructure"
git push origin main
```

**Option C — Nuclear (only if both above fail):**
```bash
# On the feature branch, before merge, tag the last known good state:
git tag pre-restructure main
# If everything breaks:
git push origin pre-restructure:main --force  # DESTRUCTIVE — use only as last resort
```

### Prevention:
- **Always test the full CI pipeline on the PR before merging**
- The CI workflow runs `npm run build` which includes the prebuild agent data step — this is the most likely failure point
- Tag `main` as `pre-restructure` before merging the PR

---

## 6. What Goes Where

### `application/production/` — Deployed code
Everything that runs in production or is deployed to an external service:
- **nexus-website/** — Static site deployed to GitHub Pages
- **workers/** — Cloudflare Workers (edge functions)

### `application/local-dev/` — Development-only tools
Tools used during development that are NOT part of the production deployment:
- **sanity-studio/** — CMS authoring interface for content editors (run locally with `sanity dev`)
- Future: local development scripts, Docker compose for integration testing, mock data generators

### Root level (unchanged)
Everything that is NOT application code:
- `agents/` — Agent prompt library (the core IP)
- `00-*.md`, `01-*.md` ... `11-*.md` — Operational playbooks
- `8k_Avaters/` — Avatar generator
- `.github/workflows/` — CI/CD (references into `application/`)
- `CLAUDE.md` — Project instructions

---

## 7. Future Considerations

### 7.1 Monorepo Workspace (Optional, Phase 2)
After the restructure, `nexus-platform-e2e/` can optionally become an npm/pnpm workspace:
```json
// application/production/nexus-platform-e2e/package.json
{
  "name": "nexus-platform-e2e",
  "private": true,
  "workspaces": ["nexus-website"]
}
```
Note: sanity-studio is in `local-dev/`, outside the production workspace. This is intentional — it should not share production dependencies or be part of the production build graph.

### 7.2 Turborepo (Optional, Phase 3)
If build times become an issue, Turborepo can orchestrate parallel builds across the workspace.

### 7.3 Symlinks for `agents/`
The `build-agent-data.ts` script reads from the root `agents/` directory. Instead of deep relative paths, a symlink could simplify:
```bash
ln -s ../../../../agents application/production/nexus-platform-e2e/agents
```
However, symlinks can cause issues with some tools and CI environments. The env var approach (`NEXUS_REPO_ROOT`) is more robust.

---

## 8. Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| GitHub Actions paths wrong | MEDIUM | HIGH (blocks deploy) | CI validates on PR before merge |
| `build-agent-data.ts` can't find agents | MEDIUM | HIGH (empty site) | Env var + fallback + local test |
| Workers submission path breaks | LOW | LOW (form saves fail silently) | Update + test after deploy |
| Sanity Studio breaks | VERY LOW | VERY LOW (dev tool, not deployed) | Self-contained, no path deps; lives in local-dev |
| Git history fragmentation | NONE | NONE | `git mv` preserves history |

---

## 9. Files to Modify (Complete Checklist)

- [ ] `.github/workflows/deploy.yml` — 3 path updates + env var
- [ ] `.github/workflows/ci.yml` — ~12 path updates + env vars
- [ ] `nexus-website/scripts/build-agent-data.ts` — line 6 (PROJECT_ROOT)
- [ ] `nexus-website/scripts/generate-avatars.ts` — line 379 (agentsDir)
- [ ] `workers/contact-submission-receiver.js` — line 11 (FILE path)
- [ ] `workers/DEPLOY.md` — 3 documentation path references
- [ ] `sanity-studio/scripts/fetch-sanity-content.ts` — lines 48-50 (stale OUTPUT_DIR path, already broken)
- [ ] `CLAUDE.md` — ~5 path references in "NEXUS Website Project" section
- [ ] NEW: `application/local-dev/README.md`

**Total files modified:** 8 existing + 1 new
**Total path references updated:** ~26
