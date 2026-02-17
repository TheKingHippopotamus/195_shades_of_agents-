# NEXUS Knowledge Base — Dataset Schema

## Record Format (JSONL)

Each line in the dataset JSONL files represents a single document record with the following schema:

| Field | Type | Description |
|-------|------|-------------|
| `doc_id` | string | Unique slug identifier, e.g. `arch-overview-001` |
| `source_path` | string | Absolute path to the original source file |
| `category` | string | Primary classification (see categories below) |
| `subcategory` | string | More specific classification within the category |
| `title` | string | Document title |
| `content_full` | string | Full document text |
| `content_chunks` | string[] | Array of ~500-word text segments for chunked retrieval |
| `metadata` | object | Structured metadata (see below) |
| `tags` | string[] | Array of keyword tags for search and filtering |
| `entity_type` | string | Same as `category` |
| `token_count` | integer | Estimated token count of the full content |
| `embedding_ready_text` | string | Title + first paragraph + key headers for vector embedding |
| `created_at_epoch` | integer | Unix timestamp of record creation |
| `nexus_relevance_score` | float | Relevance score from 0.0 to 1.0 |

## Metadata Object

| Field | Type | Description |
|-------|------|-------------|
| `author` | string | Extracted author or department |
| `date` | string | ISO date format `YYYY-MM-DD` |
| `department` | string | NEXUS department (CISO, CTO, CPO, etc.) |
| `what` | string | One-sentence summary of what this document covers |
| `who` | string | Who created or owns this document |
| `when` | string | When this was created or last updated |

## Categories

Valid values for `category` and `entity_type`:

- `architecture` — System architecture, design decisions, infrastructure diagrams
- `api` — API documentation, endpoint specs, integration guides
- `security` — Security policies, audit reports, threat models, compliance
- `operations` — Operational procedures, runbooks, monitoring, incident response
- `development` — Development guides, coding standards, tooling, workflows
- `setup` — Installation, configuration, environment setup
- `deployment` — Deployment pipelines, CI/CD, release processes
- `user-guide` — End-user documentation, tutorials, how-tos
- `archive` — Historical documents, deprecated content
- `summary` — Executive summaries, overviews, rollups

## Example Record

```json
{
  "doc_id": "arch-overview-001",
  "source_path": "/Users/kinghippo/Documents/boomerang_by_nexus/boomerang_project/docs/architecture/overview.md",
  "category": "architecture",
  "subcategory": "system-design",
  "title": "Boomerang CRM Architecture Overview",
  "content_full": "Full document text here...",
  "content_chunks": [
    "Chunk 1: first ~500 words...",
    "Chunk 2: next ~500 words..."
  ],
  "metadata": {
    "author": "CTO Department",
    "date": "2026-02-17",
    "department": "CTO",
    "what": "High-level architecture overview of the Boomerang CRM platform",
    "who": "CTO / Engineering",
    "when": "2026-02-17"
  },
  "tags": ["architecture", "overview", "crm", "nestjs", "nextjs"],
  "entity_type": "architecture",
  "token_count": 2450,
  "embedding_ready_text": "Boomerang CRM Architecture Overview. The Boomerang CRM is built on a modern stack featuring NestJS backend and Next.js frontend. Key sections: System Components, Data Flow, Authentication, Deployment.",
  "created_at_epoch": 1739750400,
  "nexus_relevance_score": 0.95
}
```

## Chunking Strategy

- Target chunk size: ~500 words (~375 tokens)
- Chunks preserve paragraph boundaries where possible
- Each chunk is independently retrievable
- Overlapping context: last sentence of previous chunk is prepended to next chunk for continuity
