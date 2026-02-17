# NEXUS Knowledge Base — Dataset Statistics
_Generated: 2026-02-17 | Source: boomerang_project/docs_

## Summary
| Metric | Value |
|--------|-------|
| **Total Records** | 90 |
| **Parse Errors** | 0 |
| **Estimated Tokens** | 155,138 |
| **Avg Relevance Score** | 0.735 |
| **Date Range** | 2026-02-16 → 2026-02-17 |
| **Total Dataset Size** | 3220 KB |

## Records by Category
| Category | Count | % |
|----------|-------|---|
| `archive` | 24 | 26.7% |
| `user-guide` | 15 | 16.7% |
| `operations` | 11 | 12.2% |
| `architecture` | 8 | 8.9% |
| `api` | 7 | 7.8% |
| `development` | 7 | 7.8% |
| `security` | 5 | 5.6% |
| `setup` | 4 | 4.4% |
| `summary` | 4 | 4.4% |
| `implementation` | 3 | 3.3% |
| `deployment` | 1 | 1.1% |
| `changelog` | 1 | 1.1% |

## Records by Department
| Department | Count |
|-----------|-------|
| `CTO` | 47 |
| `CPO` | 16 |
| `COO` | 10 |
| `Documentation (Dept 20)` | 7 |
| `Documentation (Dept 20) / Engineering (Dept 02)` | 5 |
| `Engineering (Dept 02)` | 2 |
| `COO / QA` | 1 |
| `Security (Dept 08) / Engineering (Dept 02) / Documentation (Dept 20)` | 1 |
| `Security (Dept 08)` | 1 |

## Source JSONL Files
| File | Records | Size |
|------|---------|------|
| `architecture-api.jsonl` | 15 | 417 KB |
| `archive.jsonl` | 24 | 66 KB |
| `development-setup-deployment.jsonl` | 16 | 314 KB |
| `security-operations.jsonl` | 14 | 480 KB |
| `user-guide-summaries.jsonl` | 21 | 333 KB |
| `NEXUS-KNOWLEDGE-BASE.jsonl` (master) | 90 | 1610 KB |

## Index Files
- `indexes/MASTER-INDEX.json` — Full cross-reference index with tag cloud
- `indexes/by-category.json` — Doc IDs grouped by category
- `indexes/by-date.json` — Doc IDs grouped by date
- `indexes/by-department.json` — Doc IDs grouped by NEXUS department
- `indexes/by-tag.json` — Doc IDs grouped by tag

## Top Tags
| Tag | Count |
|-----|-------|
| `archive` | 24 |
| `hebrew` | 18 |
| `security` | 17 |
| `user-guide` | 15 |
| `architecture` | 12 |
| `testing` | 11 |
| `operations` | 11 |
| `qa` | 9 |
| `development` | 9 |
| `database` | 8 |
| `summary` | 8 |
| `monorepo` | 7 |
| `prisma` | 7 |
| `api` | 7 |
| `documentation` | 7 |
| `turborepo` | 6 |
| `production` | 6 |
| `seeding` | 6 |
| `deployment` | 6 |
| `frontend` | 6 |

## Query Examples (for NEXUS agents)
```bash
# What did the CISO team produce?
python query.py --who CISO

# What happened on 2026-02-17?
python query.py --when 2026-02-17

# Find all authentication docs
python query.py --what authentication

# Security category, top 5 by relevance
python query.py --category security --limit 5

# Full dataset stats
python query.py --stats

# Verbose record details
python query.py --what database --verbose
```
