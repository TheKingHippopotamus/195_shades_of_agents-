import json
import time
import hashlib
from pathlib import Path

import requests
import chromadb
from chromadb.config import Settings

CHUNKS_FILE = "all_chunks.jsonl"
DB_DIR = "vector_db"
COLLECTION_NAME = "orchestrate_agents"
OLLAMA_EMBED_URL = "http://localhost:11434/api/embeddings"
OLLAMA_MODEL = "nomic-embed-text:latest"

BATCH_SIZE = 64
SLEEP_EVERY_BATCH_SEC = 0.0  # can raise if your machine struggles
REQUEST_TIMEOUT = 120
RETRY = 5


def stable_id(paper_id: str, chunk_id: int, text: str) -> str:
    h = hashlib.sha1(text.encode("utf-8", errors="ignore")).hexdigest()[:12]
    return f"{paper_id}_{chunk_id}_{h}"


def embed_one(text: str) -> list:
    payload = {"model": OLLAMA_MODEL, "prompt": text}
    last_err = None

    for attempt in range(1, RETRY + 1):
        try:
            r = requests.post(
                OLLAMA_EMBED_URL,
                json=payload,
                timeout=REQUEST_TIMEOUT,
            )
            if r.status_code == 200:
                data = r.json()
                if "embedding" not in data:
                    raise RuntimeError(f"Missing 'embedding' key: {data}")
                return data["embedding"]
            last_err = RuntimeError(f"HTTP {r.status_code}: {r.text[:300]}")
        except Exception as e:
            last_err = e

        time.sleep(min(2 ** attempt, 10))

    raise RuntimeError(f"Embedding failed after {RETRY} retries: {last_err}")


def main():
    chunks_path = Path(CHUNKS_FILE)
    if not chunks_path.exists():
        raise FileNotFoundError(f"Missing {CHUNKS_FILE}. Run: cat */chunks.jsonl > all_chunks.jsonl")

    # Init persistent Chroma
    client = chromadb.PersistentClient(path=DB_DIR, settings=Settings(anonymized_telemetry=False))
    collection = client.get_or_create_collection(name=COLLECTION_NAME, metadata={"hnsw:space": "cosine"})

    ids, docs, metas, embs = [], [], [], []
    total = 0

    with chunks_path.open("r", encoding="utf-8", errors="ignore") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue

            rec = json.loads(line)
            text = rec.get("text", "")
            if not text.strip():
                continue

            paper_id = str(rec.get("paper_id", "unknown"))
            chunk_id = int(rec.get("chunk_id", 0))

            _id = stable_id(paper_id, chunk_id, text)
            meta = {
                "paper_id": paper_id,
                "chunk_id": chunk_id,
                "start": int(rec.get("start", 0)),
                "end": int(rec.get("end", 0)),
                "source": str(rec.get("source", "flat.tex")),
            }

            embedding = embed_one(text)

            ids.append(_id)
            docs.append(text)
            metas.append(meta)
            embs.append(embedding)

            if len(ids) >= BATCH_SIZE:
                collection.add(ids=ids, documents=docs, metadatas=metas, embeddings=embs)
                total += len(ids)
                print(f"Inserted {total} chunks")
                ids, docs, metas, embs = [], [], [], []
                if SLEEP_EVERY_BATCH_SEC:
                    time.sleep(SLEEP_EVERY_BATCH_SEC)

    # flush remainder
    if ids:
        collection.add(ids=ids, documents=docs, metadatas=metas, embeddings=embs)
        total += len(ids)
        print(f"Inserted {total} chunks")

    print(f"DONE. Persisted Chroma DB at: {DB_DIR}/  (collection: {COLLECTION_NAME})")


if __name__ == "__main__":
    main()
