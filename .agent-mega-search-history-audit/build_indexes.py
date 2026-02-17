#!/usr/bin/env python3
"""Build indexes from the NEXUS Knowledge Base JSONL file."""
import json
import os
from collections import defaultdict

KB_FILE = '/Users/kinghippo/Documents/NEXUS_AI/.agent-mega-search-history-audit/NEXUS-KNOWLEDGE-BASE.jsonl'
IDX_DIR = '/Users/kinghippo/Documents/NEXUS_AI/.agent-mega-search-history-audit/indexes'

records = []
with open(KB_FILE) as f:
    for line in f:
        line = line.strip()
        if line:
            try:
                records.append(json.loads(line))
            except json.JSONDecodeError as e:
                print(f"Skipping invalid line: {e}")

# Build indexes
by_date = defaultdict(list)
by_category = defaultdict(list)
by_department = defaultdict(list)
by_tag = defaultdict(list)
tag_cloud = defaultdict(int)

for r in records:
    doc_id = r.get('doc_id', '')
    date = r.get('metadata', {}).get('date', 'unknown')
    category = r.get('category', 'unknown')
    dept = r.get('metadata', {}).get('department', 'unknown')
    tags = r.get('tags', [])

    by_date[date].append(doc_id)
    by_category[category].append(doc_id)
    by_department[dept].append(doc_id)
    for tag in tags:
        by_tag[tag].append(doc_id)
        tag_cloud[tag] += 1

# Write index files
os.makedirs(IDX_DIR, exist_ok=True)

with open(f'{IDX_DIR}/by-date.json', 'w') as f:
    json.dump(dict(by_date), f, indent=2)

with open(f'{IDX_DIR}/by-category.json', 'w') as f:
    json.dump(dict(by_category), f, indent=2)

with open(f'{IDX_DIR}/by-department.json', 'w') as f:
    json.dump(dict(by_department), f, indent=2)

with open(f'{IDX_DIR}/by-tag.json', 'w') as f:
    json.dump(dict(by_tag), f, indent=2)

# Master index
master_index = {
    "total_records": len(records),
    "categories": {k: len(v) for k, v in by_category.items()},
    "category_doc_ids": dict(by_category),
    "temporal_index": dict(by_date),
    "who_index": dict(by_department),
    "what_index": dict(by_category),
    "tag_cloud": dict(sorted(tag_cloud.items(), key=lambda x: -x[1]))
}
with open(f'{IDX_DIR}/MASTER-INDEX.json', 'w') as f:
    json.dump(master_index, f, indent=2)

print(f"Total records: {len(records)}")
print(f"Categories: {list(by_category.keys())}")
print(f"Category counts: {dict({k: len(v) for k, v in by_category.items()})}")
print(f"Dates: {sorted(by_date.keys())}")
print(f"Departments: {list(by_department.keys())}")
print(f"Total unique tags: {len(tag_cloud)}")
print(f"Top 20 tags: {dict(sorted(tag_cloud.items(), key=lambda x: -x[1])[:20])}")
