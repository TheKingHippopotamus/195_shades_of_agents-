# Deployment Configuration Guide

**Author:** MGR-DEVOPS (Agent 056)
**Date:** 2026-02-15
**Status:** Sprint 1 — Initial Setup

---

## 1. GitHub Repository Settings

### Repository
- **URL:** `git@github.com:TheKingHippopotamus/195_shades_of_agents-.git`
- **Default branch:** `main`

### GitHub Pages Configuration
1. Go to **Settings > Pages**
2. Set **Source** to "GitHub Actions" (not "Deploy from a branch")
3. Enable **Enforce HTTPS**

### Branch Protection Rules (main)
1. Go to **Settings > Branches > Add rule**
2. Branch name pattern: `main`
3. Enable:
   - Require a pull request before merging
   - Require status checks to pass before merging
   - Required status checks: `typecheck`, `lint`, `build`
   - Require branches to be up to date before merging

### Branch Protection Rules (gh-pages)
- **Do not create manually** — GitHub Actions manages this branch
- Only the `deploy` workflow writes to `gh-pages`

---

## 2. GitHub Actions Secrets

Navigate to **Settings > Secrets and variables > Actions** and add:

| Secret Name | Description | How to Get |
|-------------|-------------|------------|
| `SANITY_PROJECT_ID` | Sanity project identifier | Sanity dashboard > Project settings > Project ID |
| `SANITY_DATASET` | Dataset name (usually `production`) | Sanity dashboard > Datasets |
| `SANITY_API_TOKEN` | **Read-only** API token | Sanity dashboard > API > Tokens > Add token (Viewer role) |

**Important:** The Sanity token MUST be read-only. It is used only during CI builds to fetch content. It is never shipped to the client.

---

## 3. Workflows

### Deploy Workflow (`.github/workflows/deploy.yml`)
- **Triggers:** Push to `main`, manual dispatch, Sanity webhook (`repository_dispatch`)
- **Pipeline:** Checkout > Node.js > Install > Typecheck > Lint > Test > Parse agents > Fetch Sanity > Build Astro > Pagefind > Upload > Deploy
- **Deploy target:** GitHub Pages via `actions/deploy-pages@v4`

### CI Workflow (`.github/workflows/ci.yml`)
- **Triggers:** Pull requests to `main`
- **Jobs:** Typecheck, Lint+Prettier, Unit tests (Vitest), Build+Lighthouse, E2E tests (Playwright)
- **Lighthouse gate:** All scores must be >= 90

---

## 4. Branch Strategy

```
main          -> Production (auto-deploys to GitHub Pages)
feat/*        -> Feature branches (CI checks on PR, no deploy)
fix/*         -> Bug fix branches (CI checks on PR, no deploy)
content/*     -> Content PRs (blog posts, case studies)
gh-pages      -> Deployed output (managed by GitHub Actions only)
```

---

## 5. Sanity Webhook Setup (Optional)

To auto-deploy on Sanity content changes:

1. In Sanity dashboard, go to **API > Webhooks**
2. Create a new webhook:
   - **Name:** `GitHub Deploy`
   - **URL:** `https://api.github.com/repos/TheKingHippopotamus/195_shades_of_agents-/dispatches`
   - **Method:** POST
   - **Headers:**
     - `Authorization: Bearer <GITHUB_PAT>`
     - `Accept: application/vnd.github.v3+json`
   - **Body:** `{"event_type": "sanity-content-update"}`
   - **Trigger on:** Create, Update, Delete
   - **Filter:** `_type in ["blogPost", "caseStudy", "testimonial", "faq"]`

---

## 6. Custom Domain (Future)

If a custom domain is desired:
1. Add `CNAME` file to `public/` with domain name
2. Configure DNS (A records or CNAME to `thekinghampopotamus.github.io`)
3. Enable "Enforce HTTPS" in Pages settings
4. Update `astro.config.mjs`: `site` and `base` values

---

## 7. Build Performance

Target: < 5 minutes total build time

| Step | Est. Time |
|------|-----------|
| Checkout + Setup Node | ~15s |
| npm ci (cached) | ~20s |
| Typecheck | ~10s |
| Lint | ~5s |
| Parse agent data | ~5s |
| Fetch Sanity content | ~10-15s |
| Astro build | ~60-90s |
| Pagefind index | ~10s |
| Upload + Deploy | ~30s |
| **Total** | **~2.5-3.5 min** |
