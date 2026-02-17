#!/usr/bin/env python3
"""
NEXUS Knowledge Base Query Tool
================================
Query the boomerang_project documentation dataset by WHO, WHAT, WHEN, or category.

Usage:
  python query.py --who CISO
  python query.py --when 2026-02-17
  python query.py --what authentication
  python query.py --category security
  python query.py --who CTO --what database --limit 5
  python query.py --stats
  python query.py --list-categories
  python query.py --list-departments
"""
import json, argparse, os, sys

BASE = os.path.dirname(os.path.abspath(__file__))
KB_FILE = os.path.join(BASE, 'NEXUS-KNOWLEDGE-BASE.jsonl')
IDX_DIR = os.path.join(BASE, 'indexes')

def load_records():
    records = []
    with open(KB_FILE) as f:
        for line in f:
            line = line.strip()
            if line:
                try: records.append(json.loads(line))
                except: pass
    return records

def load_index(name):
    path = os.path.join(IDX_DIR, name)
    if os.path.exists(path):
        with open(path) as f: return json.load(f)
    return {}

def print_record(r, verbose=False):
    meta = r.get('metadata', {})
    print(f"\n[{r.get('doc_id')}]  {r.get('title', 'Untitled')}")
    print(f"  Category : {r.get('category')} / {r.get('subcategory', '-')}")
    print(f"  Score    : {r.get('nexus_relevance_score', 0):.2f}")
    print(f"  Who      : {meta.get('who', '-')} ({meta.get('department', '-')})")
    print(f"  When     : {meta.get('date', '-')}")
    print(f"  What     : {meta.get('what', '-')}")
    print(f"  Tags     : {', '.join(r.get('tags', [])[:6])}")
    print(f"  Source   : {r.get('source_path', '-')}")
    if verbose:
        print(f"  Tokens   : {r.get('token_count', 0):,}")
        print(f"  Embed    : {r.get('embedding_ready_text', '')[:120]}...")

def main():
    parser = argparse.ArgumentParser(description='Query the NEXUS Knowledge Base')
    parser.add_argument('--who', help='Filter by department/agent (CISO, CTO, CPO, COO)')
    parser.add_argument('--when', help='Filter by date (YYYY-MM-DD or partial)')
    parser.add_argument('--what', help='Keyword search in title, summary, content')
    parser.add_argument('--category', help='Category filter (architecture, security, api, etc.)')
    parser.add_argument('--tag', help='Filter by tag')
    parser.add_argument('--limit', type=int, default=10, help='Max results (default: 10)')
    parser.add_argument('--verbose', '-v', action='store_true', help='Show full details')
    parser.add_argument('--list-categories', action='store_true')
    parser.add_argument('--list-departments', action='store_true')
    parser.add_argument('--stats', action='store_true', help='Show dataset statistics')
    args = parser.parse_args()

    records = load_records()

    if args.stats:
        master = load_index('MASTER-INDEX.json')
        print(f"\n=== NEXUS Knowledge Base Statistics ===")
        print(f"Total records : {master.get('total_records', len(records))}")
        print(f"Generated at  : {master.get('generated_at', '-')}")
        print(f"Source        : {master.get('source', 'boomerang_project/docs')}")
        print(f"\nCategories:")
        for cat, data in master.get('categories', {}).items():
            count = data if isinstance(data, int) else (data.get("count", 0) if isinstance(data, dict) else len(data))
            print(f"  {cat:<30} {count} records")
        print(f"\nTop 15 Tags:")
        for tag, count in list(master.get('tag_cloud', {}).items())[:15]:
            print(f"  {tag:<30} {count}")
        return

    if args.list_categories:
        idx = load_index('by-category.json')
        print("\n=== Categories ===")
        for cat, ids in sorted(idx.items()): print(f"  {cat:<30} {len(ids)} records")
        return

    if args.list_departments:
        idx = load_index('by-department.json')
        print("\n=== Departments ===")
        for dept, ids in sorted(idx.items(), key=lambda x: -len(x[1])):
            print(f"  {dept:<50} {len(ids)} records")
        return

    results = []
    for r in records:
        meta = r.get('metadata', {})
        match = True
        if args.who:
            who_str = (meta.get('department','') + ' ' + meta.get('who','') + ' ' + meta.get('author','')).lower()
            if args.who.lower() not in who_str: match = False
        if args.when and match:
            if args.when not in meta.get('date', ''): match = False
        if args.what and match:
            searchable = (r.get('title','') + ' ' + meta.get('what','') + ' ' + r.get('embedding_ready_text','') + ' ' + r.get('content_full','')[:800]).lower()
            if args.what.lower() not in searchable: match = False
        if args.category and match:
            if args.category.lower() != r.get('category','').lower(): match = False
        if args.tag and match:
            if args.tag.lower() not in [t.lower() for t in r.get('tags', [])]: match = False
        if match: results.append(r)

    results.sort(key=lambda x: x.get('nexus_relevance_score', 0), reverse=True)
    results = results[:args.limit]

    if not results:
        print("\nNo records found. Try: python query.py --stats")
        return

    filters = [f"{k}={getattr(args,k)}" for k in ['who','when','what','category','tag'] if getattr(args,k)]
    print(f"\n=== NEXUS KB [{', '.join(filters) or 'all'}] — {len(results)} result(s) ===")
    for r in results: print_record(r, verbose=args.verbose)
    print()

if __name__ == '__main__':
    main()
