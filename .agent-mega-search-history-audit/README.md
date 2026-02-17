# NEXUS Knowledge Base -- ML Production-Ready Dataset

## Description

This is the production-ready ML dataset for the NEXUS AI Knowledge Base. It contains structured, indexed, and chunked representations of all documentation from the Boomerang CRM project, designed for retrieval-augmented generation (RAG), semantic search, and agent-driven knowledge queries.

Every document is processed into a standardized JSONL format with rich metadata, content chunks, and embedding-ready text fields. NEXUS agents use this dataset to answer questions about architecture, security, operations, development, and more.

## Source

- **Origin:** `boomerang_project/docs/` (90+ documents)
- **Formats processed:** Markdown (`.md`), text (`.txt`)
- **Processing date:** 2026-02-17

## How NEXUS Agents Use This Dataset

Agents query the dataset across three primary dimensions:

- **WHO** -- Filter by author, department, or owner (e.g., "Show me all CISO documents")
- **WHAT** -- Search by category, subcategory, tags, or content (e.g., "Find security audit reports")
- **WHEN** -- Filter by date or time range (e.g., "Documents updated in February 2026")

Agents can combine these dimensions for precise retrieval:
```
query --who CTO --what "API architecture" --when 2026-02
```

## File Structure

```
.agent-mega-search-history-audit/
|-- README.md              # This file
|-- SCHEMA.md              # Human-readable schema documentation
|-- schema.json            # Machine-readable JSON Schema (draft-07)
|-- records/               # JSONL dataset files (one record per line)
|   |-- architecture.jsonl
|   |-- api.jsonl
|   |-- security.jsonl
|   |-- operations.jsonl
|   |-- development.jsonl
|   |-- setup.jsonl
|   |-- deployment.jsonl
|   |-- user-guide.jsonl
|   |-- archive.jsonl
|   +-- summary.jsonl
|-- indexes/               # Lookup indexes for fast querying
|   |-- by-department.json
|   |-- by-category.json
|   |-- by-date.json
|   +-- by-tag.json
+-- chunks/                # Individual chunk files for embedding pipelines
    |-- chunk-000001.txt
    |-- chunk-000002.txt
    +-- ...
```

## Quick Start

Query the dataset by dimension:

```bash
python query.py --who CISO --what security --when 2026-02-17
```

Load records programmatically:

```python
import json

records = []
with open("records/architecture.jsonl", "r") as f:
    for line in f:
        records.append(json.loads(line))

# Filter by department
cto_docs = [r for r in records if r["metadata"]["department"] == "CTO"]

# Search by tags
security_docs = [r for r in records if "security" in r["tags"]]
```

## Schema Reference

- Human-readable: [SCHEMA.md](./SCHEMA.md)
- Machine-readable: [schema.json](./schema.json)

See SCHEMA.md for the full field reference, data types, valid categories, chunking strategy, and example records.

## Adding New Documents

To add a new document to the dataset:

1. Place the source document in the appropriate `boomerang_project/docs/` subdirectory
2. Run the ingestion pipeline, which will:
   - Extract title, content, and metadata
   - Classify into category and subcategory
   - Chunk content into ~500-word segments
   - Generate embedding-ready text
   - Estimate token count
   - Assign a relevance score
3. The new record is appended to the appropriate `records/*.jsonl` file
4. Indexes in `indexes/` are regenerated
5. Chunks are written to `chunks/`

Each record must conform to `schema.json`. Validate with:

```bash
python -c "
import json, jsonschema
schema = json.load(open('schema.json'))
record = json.loads(open('records/architecture.jsonl').readline())
jsonschema.validate(record, schema)
print('Valid')
"
```
