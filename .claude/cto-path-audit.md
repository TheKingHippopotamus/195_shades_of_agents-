# CTO Path & Build Pipeline Audit (v2)

**Revision note:** Updated to reflect corrected structure -- sanity-studio is a local-dev tool, NOT production. It goes to `application/local-dev/`, not alongside nexus-website/workers.

## Restructure Target

```
application/
  production/
    nexus-platform-e2e/
      nexus-website/       <-- from root (GitHub Pages deployment)
      workers/             <-- from root (Cloudflare Workers)
  local-dev/
    sanity-studio/         <-- from root (CMS dev tool only)
```

**Key constraint:** The `agents/` folder stays at the repo root.

**Depth from repo root:**
- `nexus-website/scripts/` was 2 levels deep, becomes 5 levels: `application/production/nexus-platform-e2e/nexus-website/scripts/`
- `workers/` was 1 level deep, becomes 4 levels: `application/production/nexus-platform-e2e/workers/`
- `sanity-studio/scripts/` was 2 levels deep, becomes 4 levels: `application/local-dev/sanity-studio/scripts/`

---

## PART A: PRODUCTION PATHS (nexus-website + workers)

### A.1 CRITICAL: build-agent-data.ts (Build Pipeline -- Heart of the Build)

**File:** `nexus-website/scripts/build-agent-data.ts`
**Lines:** 6-9
**Severity:** CRITICAL -- breaks the entire build SILENTLY

```typescript
// CURRENT (line 6-8):
const PROJECT_ROOT = resolve(import.meta.dirname, "../..");          // scripts/ -> nexus-website/ -> repo-root/
const AGENTS_DIR = resolve(PROJECT_ROOT, "agents");                  // repo-root/agents/
const SRC_DATA_DIR = resolve(import.meta.dirname, "../src/data");    // OK (self-relative)
const PUBLIC_DATA_DIR = resolve(import.meta.dirname, "../public/data"); // OK (self-relative)
```

**What breaks:** `"../.."` currently resolves from `nexus-website/scripts/` to repo root. After move, the script lives at `application/production/nexus-platform-e2e/nexus-website/scripts/`, so `../..` resolves to `application/production/nexus-platform-e2e/` -- NOT the repo root. The glob on line 256 (`globSync(\`${AGENTS_DIR}/*/*.md\`)`) will find zero files and the build will produce empty agents.json with zero agents. No build error. Just an empty website.

**Fix:**
```typescript
// AFTER MOVE (5 levels up: scripts/ -> nexus-website/ -> nexus-platform-e2e/ -> production/ -> application/ -> repo-root/):
const PROJECT_ROOT = resolve(import.meta.dirname, "../../../../..");
const AGENTS_DIR = resolve(PROJECT_ROOT, "agents");
```

---

### A.2 HIGH: generate-avatars.ts

**File:** `nexus-website/scripts/generate-avatars.ts`
**Line:** 379
**Severity:** HIGH -- breaks avatar generation (not build-critical, but avatars render as broken images)

```typescript
// CURRENT:
const agentsDir = join(__dirname, "../../agents");             // goes to repo-root/agents/
const outDir = join(__dirname, "../public/brand/avatars/agents"); // OK (self-relative)
```

**Fix:**
```typescript
const agentsDir = join(__dirname, "../../../../../agents");     // 5 levels up to repo root
```

---

### A.3 CRITICAL: GitHub Actions deploy.yml

**File:** `.github/workflows/deploy.yml`
**Lines:** 25, 39, 77
**Severity:** CRITICAL -- deployment pipeline completely breaks

| Line | Field | Current | Required |
|------|-------|---------|----------|
| 25 | `defaults.run.working-directory` | `nexus-website` | `application/production/nexus-platform-e2e/nexus-website` |
| 39 | `cache-dependency-path` | `nexus-website/package-lock.json` | `application/production/nexus-platform-e2e/nexus-website/package-lock.json` |
| 77 | `upload-pages-artifact.path` | `nexus-website/dist` | `application/production/nexus-platform-e2e/nexus-website/dist` |

---

### A.4 CRITICAL: GitHub Actions ci.yml

**File:** `.github/workflows/ci.yml`
**Lines:** 12, 23, 35, 48, 61, 115
**Severity:** CRITICAL -- PR CI pipeline completely breaks

| Line | Field | Current | Required |
|------|-------|---------|----------|
| 12 | `defaults.run.working-directory` | `nexus-website` | `application/production/nexus-platform-e2e/nexus-website` |
| 23 | `cache-dependency-path` | `nexus-website/package-lock.json` | `application/production/nexus-platform-e2e/nexus-website/package-lock.json` |
| 35 | `cache-dependency-path` | `nexus-website/package-lock.json` | `application/production/nexus-platform-e2e/nexus-website/package-lock.json` |
| 48 | `cache-dependency-path` | `nexus-website/package-lock.json` | `application/production/nexus-platform-e2e/nexus-website/package-lock.json` |
| 61 | `cache-dependency-path` | `nexus-website/package-lock.json` | `application/production/nexus-platform-e2e/nexus-website/package-lock.json` |
| 115 | `cache-dependency-path` | `nexus-website/package-lock.json` | `application/production/nexus-platform-e2e/nexus-website/package-lock.json` |

---

### A.5 HIGH: Cloudflare Worker — contact-submission-receiver.js

**File:** `workers/contact-submission-receiver.js`
**Lines:** 4, 11
**Severity:** HIGH -- form submissions will silently fail (500 from GitHub API)

```javascript
// CURRENT (line 11):
const FILE = "nexus-website/src/data/submissions.json";
```

This is a **GitHub Contents API path** -- it references the file path WITHIN the GitHub repository, not a local filesystem path. After the move, the repo path changes.

**Fix:**
```javascript
const FILE = "application/production/nexus-platform-e2e/nexus-website/src/data/submissions.json";
```

Also update comment on line 4.

---

### A.6 LOW: workers/DEPLOY.md

**File:** `workers/DEPLOY.md`
**Lines:** 5, 24, 28
**Severity:** LOW -- documentation only

References to update:
- Line 5: `nexus-website/src/data/submissions.json` -> `application/production/nexus-platform-e2e/nexus-website/src/data/submissions.json`
- Line 24: `nexus-website/src/components/react/ContactForm.tsx` -> `application/production/nexus-platform-e2e/nexus-website/src/components/react/ContactForm.tsx`
- Line 28: `nexus-website/src/data/submissions.json` -> `application/production/nexus-platform-e2e/nexus-website/src/data/submissions.json`

---

## PART B: LOCAL-DEV PATHS (sanity-studio -- separate destination)

sanity-studio moves to `application/local-dev/sanity-studio/`, NOT alongside nexus-website. This has implications for any cross-project path references.

### B.1 MEDIUM: sanity-studio/scripts/fetch-sanity-content.ts

**File:** `sanity-studio/scripts/fetch-sanity-content.ts`
**Lines:** 48-51
**Severity:** MEDIUM -- this script is already broken (points to deleted old path), but needs correct fix for the new structure

```typescript
// CURRENT (ALREADY BROKEN -- points to deleted old website/site/ location):
const OUTPUT_DIR = resolve(
  __dirname,
  "../../website/site/src/data/sanity"
);
```

**After restructure:**
- sanity-studio lives at: `application/local-dev/sanity-studio/`
- nexus-website lives at: `application/production/nexus-platform-e2e/nexus-website/`
- From `sanity-studio/scripts/` to nexus-website's data dir:
  - `scripts/` -> `sanity-studio/` -> `local-dev/` -> `application/` -> `production/` -> `nexus-platform-e2e/` -> `nexus-website/src/data/sanity`
  - That is: `../../production/nexus-platform-e2e/nexus-website/src/data/sanity`

Wait -- let me trace this carefully:
- Script location: `application/local-dev/sanity-studio/scripts/fetch-sanity-content.ts`
- `__dirname` = `application/local-dev/sanity-studio/scripts/`
- `../` = `application/local-dev/sanity-studio/`
- `../../` = `application/local-dev/`
- `../../../` = `application/`
- Target: `application/production/nexus-platform-e2e/nexus-website/src/data/sanity`

**Fix:**
```typescript
const OUTPUT_DIR = resolve(
  __dirname,
  "../../../production/nexus-platform-e2e/nexus-website/src/data/sanity"
);
```

**NOTE:** This is a fairly fragile cross-tree reference. sanity-studio is a local dev tool, so this script is only run manually by developers. If the nexus-website copy of `fetch-sanity-content.ts` (which is self-relative) handles this during CI build, this sanity-studio version may be redundant. Worth considering whether to deprecate this script in favor of the nexus-website version that already handles missing Sanity credentials gracefully with placeholder data.

### B.2 NO CHANGE: sanity-studio/sanity.config.ts

**File:** `sanity-studio/sanity.config.ts`
**Severity:** NONE -- uses only Sanity API project IDs and plugin imports. No filesystem paths. No cross-project references.

### B.3 NO CHANGE: sanity-studio/sanity.cli.ts

**File:** `sanity-studio/sanity.cli.ts`
**Severity:** NONE -- API config only (`projectId`, `dataset`). No filesystem paths.

### B.4 NO CHANGE: sanity-studio/package.json

**File:** `sanity-studio/package.json`
**Severity:** NONE -- all scripts are self-relative (`sanity dev`, `sanity build`, `tsx scripts/fetch-sanity-content.ts`).

### B.5 NO CHANGE: sanity-studio/schemas/*.ts, sanity-studio/lib/queries.ts

**Severity:** NONE -- these are Sanity schema definitions and GROQ queries. No filesystem paths.

---

## PART C: SAFE FILES (no changes needed)

These files use ONLY self-relative paths or URL-based references:

| File | Why Safe |
|------|----------|
| `nexus-website/astro.config.mjs` | URL config only (`site`, `base`) |
| `nexus-website/package.json` | Self-relative scripts |
| `nexus-website/tsconfig.json` | Self-relative (`./src/**/*`) |
| `nexus-website/tailwind.config.mjs` | Self-relative content paths |
| `nexus-website/scripts/generate-sitemap.ts` | `import.meta.dirname` + `"../"` (self-relative) |
| `nexus-website/scripts/fetch-sanity-content.ts` | `import.meta.dirname` + `"../"` (self-relative) |
| `nexus-website/scripts/gen-batch-{1-8}.ts` | `__dirname` + `"../"` (self-relative output) |
| `nexus-website/scripts/alien-batch-{1-10}.ts` | `__dirname` + `"../"` (self-relative output) |
| All `.astro`, `.tsx` components in `src/` | URL-based routing (`/195_shades_of_agents-/agents/`), not filesystem |
| `sanity-studio/sanity.config.ts` | API config only |
| `sanity-studio/sanity.cli.ts` | API config only |
| `sanity-studio/package.json` | Self-relative scripts |
| `sanity-studio/schemas/*.ts`, `sanity-studio/lib/queries.ts` | GROQ queries, no paths |
| `workers/wrangler.toml` | Self-relative (`main = "contact-submission-receiver.js"`) |

---

## SECTION 2: Complete Change Summary

### All files requiring changes:

| # | File | Lines | What | Priority | Destination |
|---|------|-------|------|----------|-------------|
| 1 | `nexus-website/scripts/build-agent-data.ts` | 6 | `"../.."` -> `"../../../../.."` for PROJECT_ROOT | CRITICAL | production |
| 2 | `.github/workflows/deploy.yml` | 25, 39, 77 | `nexus-website` -> `application/production/nexus-platform-e2e/nexus-website` | CRITICAL | stays at root |
| 3 | `.github/workflows/ci.yml` | 12, 23, 35, 48, 61, 115 | `nexus-website` -> `application/production/nexus-platform-e2e/nexus-website` | CRITICAL | stays at root |
| 4 | `nexus-website/scripts/generate-avatars.ts` | 379 | `"../../agents"` -> `"../../../../../agents"` | HIGH | production |
| 5 | `workers/contact-submission-receiver.js` | 4, 11 | GitHub API file path needs new prefix | HIGH | production |
| 6 | `workers/DEPLOY.md` | 5, 24, 28 | Documentation paths | LOW | production |
| 7 | `sanity-studio/scripts/fetch-sanity-content.ts` | 48-50 | `"../../website/site/..."` -> `"../../../production/nexus-platform-e2e/nexus-website/src/data/sanity"` | MEDIUM | local-dev |

**Total: 7 files, ~20 individual line edits.**

---

## SECTION 3: Recommended Execution Order

### Phase 1: Create directories and move folders (single git operation)
```bash
mkdir -p application/production/nexus-platform-e2e
mkdir -p application/local-dev
git mv nexus-website application/production/nexus-platform-e2e/nexus-website
git mv workers application/production/nexus-platform-e2e/workers
git mv sanity-studio application/local-dev/sanity-studio
```

### Phase 2: Fix CRITICAL production paths (same commit as Phase 1)
1. **build-agent-data.ts line 6**: `"../.."` -> `"../../../../.."`
2. **deploy.yml lines 25, 39, 77**: Update all 3 `nexus-website` references
3. **ci.yml lines 12, 23, 35, 48, 61, 115**: Update all 6 `nexus-website` references

### Phase 3: Fix HIGH production paths (same commit)
4. **generate-avatars.ts line 379**: `"../../agents"` -> `"../../../../../agents"`
5. **contact-submission-receiver.js lines 4, 11**: Update GitHub API file path

### Phase 4: Fix local-dev paths (same commit or separate)
6. **sanity-studio/scripts/fetch-sanity-content.ts lines 48-50**: Fix cross-tree path

### Phase 5: Fix documentation (same commit or separate)
7. **workers/DEPLOY.md lines 5, 24, 28**: Update path references

### Phase 6: Verify
```bash
# Verify production build
cd application/production/nexus-platform-e2e/nexus-website
npm install
npx tsx scripts/build-agent-data.ts   # MUST report "Found 195 agent files" and "Agents parsed: 195"
npm run build                          # MUST complete without errors

# Verify sanity-studio still works
cd ../../../../application/local-dev/sanity-studio
npm install
npx sanity dev                         # Should start Sanity Studio on localhost:3333
```

---

## SECTION 4: Risk Assessment

### Critical Risk
- **build-agent-data.ts** -- Fails SILENTLY. Build succeeds but produces empty data. The line 318 warning (`"Expected ~195 agents but only found X"`) only triggers at `< 190`, and if the path is completely wrong it finds 0, which IS less than 190, so the warning WILL fire but only to console during CI -- it doesn't fail the build. **Recommendation:** After the move, add a hard fail if agents.length === 0.

### High Risk
- **GitHub Actions workflows** -- Fail LOUDLY (npm ci can't find package-lock.json). Actually safer because broken = visible immediately.

### Medium Risk
- **Cloudflare Worker** -- Fails silently on form submission. Only noticed when a real user submits the contact form and it fails.
- **sanity-studio cross-tree path** -- Only affects developers running the sanity fetch script locally. Low blast radius but annoying.

### Low Risk
- **DEPLOY.md** -- Documentation only.

### Recommendation
Phases 1-5 should all be in a **single atomic commit**. There is no valid intermediate state where some paths are updated and others are not. Test the production build locally before pushing.

---

## SECTION 5: Design Consideration -- Fragile Relative Paths

The `"../../../../.."` path traversal is fragile. Two alternatives:

### Option A: Environment Variable (recommended if more restructures are planned)
```typescript
// build-agent-data.ts
const PROJECT_ROOT = process.env.NEXUS_REPO_ROOT || resolve(import.meta.dirname, "../../../../..");
```
```yaml
# deploy.yml
env:
  NEXUS_REPO_ROOT: ${{ github.workspace }}
```

### Option B: Git Root Detection (most resilient)
```typescript
import { execSync } from "child_process";
const PROJECT_ROOT = execSync("git rev-parse --show-toplevel", { encoding: "utf-8" }).trim();
```

Both eliminate the counting-dots problem entirely. Option B works without any CI config changes but requires git in the execution environment (which GitHub Actions always has).

---

*Audit v2 completed by CTO (Agent 002). Updated for production/local-dev split. All paths verified by reading source files directly.*
