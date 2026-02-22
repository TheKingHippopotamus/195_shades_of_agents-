import sys
import requests
import chromadb
from chromadb.config import Settings

DB_DIR = "vector_db"
COLLECTION_NAME = "orchestrate_agents"

OLLAMA_EMBED_URL = "http://localhost:11434/api/embeddings"
OLLAMA_MODEL = "nomic-embed-text:latest"

TOP_K = 8


def embed(text: str):
    r = requests.post(
        OLLAMA_EMBED_URL,
        json={"model": OLLAMA_MODEL, "prompt": text},
        timeout=120
    )
    r.raise_for_status()
    return r.json()["embedding"]


def fmt(meta: dict) -> str:
    paper = meta.get("paper_id", "?")
    chunk = meta.get("chunk_id", "?")
    start = meta.get("start", "?")
    end = meta.get("end", "?")
    section = meta.get("section")
    subsection = meta.get("subsection")
    subsub = meta.get("subsubsection")

    parts = [f"paper={paper}", f"chunk={chunk}", f"offset={start}:{end}"]
    if section:
        parts.append(f"section={section}")
    if subsection:
        parts.append(f"subsection={subsection}")
    if subsub:
        parts.append(f"subsubsection={subsub}")

    return " | ".join(parts)


def main():
    client = chromadb.PersistentClient(
        path=DB_DIR,
        settings=Settings(anonymized_telemetry=False),
    )
    col = client.get_collection(COLLECTION_NAME)

    # Support both CLI args and interactive input
    if len(sys.argv) > 1:
        query = " ".join(sys.argv[1:]).strip()
    else:
        query = input("Query: ").strip()
    
    # Remove "Query:" prefix if accidentally included
    if query.startswith("Query:"):
        query = query[6:].strip()
    
    if not query:
        print("Empty query.")
        return

    q_emb = embed(query)

    res = col.query(
        query_embeddings=[q_emb],
        n_results=TOP_K,
        include=["documents", "metadatas", "distances"],
    )

    docs = res["documents"][0]
    metas = res["metadatas"][0]
    dists = res["distances"][0]

    for i, (doc, meta, dist) in enumerate(zip(docs, metas, dists), 1):
        print(f"\n=== Result {i} | distance={dist:.4f} ===")
        print(fmt(meta))
        print("-" * 80)
        print(doc[:1600].strip())
        print("-" * 80)


if __name__ == "__main__":
    main()
