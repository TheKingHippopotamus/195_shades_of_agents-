import re
import json
import hashlib
from pathlib import Path
from typing import Dict, List, Tuple

# Chunking targets (characters). You can tune.
TARGET_CHARS = 1400
OVERLAP_CHARS = 200

# LaTeX environments that are usually noise for text-only RAG
DROP_ENVS = {
    "figure", "table", "algorithm", "algorithmic", "lstlisting", "minted",
    "tikzpicture", "equation", "align", "align*", "equation*", "displaymath"
}

SECTION_RE = re.compile(r"\\section\*?\{(.+?)\}")
SUBSECTION_RE = re.compile(r"\\subsection\*?\{(.+?)\}")
SUBSUBSECTION_RE = re.compile(r"\\subsubsection\*?\{(.+?)\}")

BEGIN_ENV_RE = re.compile(r"\\begin\{([^\}]+)\}")
END_ENV_RE = re.compile(r"\\end\{([^\}]+)\}")

INPUTLIKE_RE = re.compile(r"\\(input|include)\{.+?\}")

# Remove comments (but keep escaped \%)
COMMENT_RE = re.compile(r"(?<!\\)%.*")

# Commands we want to keep content for, while removing command itself
KEEP_ARG_COMMANDS = [
    "textbf", "textit", "emph", "underline", "caption", "paragraph", "subparagraph"
]

# Generic command with one arg: \cmd{...} (best-effort, non-nested)
ONEARG_CMD_RE = re.compile(r"\\([a-zA-Z]+)\{([^{}]*)\}")

# Remove remaining commands like \label, \ref, \cite, etc.
GEN_CMD_RE = re.compile(r"\\[a-zA-Z]+\*?(?:\[[^\]]*\])?")

# Collapse whitespace
MULTI_NL_RE = re.compile(r"\n{3,}")
MULTI_SPACE_RE = re.compile(r"[ \t]{2,}")


def sha256_file(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(8192), b""):
            h.update(chunk)
    return h.hexdigest()


def convert_lists(tex: str) -> str:
    """
    Convert LaTeX lists to plain text bullets while keeping content.
    - Removes begin/end of itemize/enumerate
    - Converts \item to "- "
    """
    tex = re.sub(r"\\begin\{itemize\}", "", tex)
    tex = re.sub(r"\\end\{itemize\}", "", tex)
    tex = re.sub(r"\\begin\{enumerate\}", "", tex)
    tex = re.sub(r"\\end\{enumerate\}", "", tex)
    tex = re.sub(r"\\item\s+", "- ", tex)
    return tex


def strip_envs(tex: str) -> str:
    """
    Remove certain LaTeX environments completely (figure/table/code/math).
    """
    out_lines: List[str] = []
    env_stack: List[str] = []

    for line in tex.splitlines():
        m1 = BEGIN_ENV_RE.search(line)
        m2 = END_ENV_RE.search(line)

        if m1:
            env = m1.group(1).strip()
            env_stack.append(env)
            if env in DROP_ENVS:
                continue

        if env_stack and env_stack[-1] in DROP_ENVS:
            if m2:
                env = m2.group(1).strip()
                if env_stack and env_stack[-1] == env:
                    env_stack.pop()
            continue

        if m2:
            env = m2.group(1).strip()
            if env_stack and env_stack[-1] == env:
                env_stack.pop()

        out_lines.append(line)

    return "\n".join(out_lines)


def normalize_text(s: str) -> str:
    s = MULTI_SPACE_RE.sub(" ", s)
    s = MULTI_NL_RE.sub("\n\n", s)
    return s.strip()


def clean_tex_to_text(flat_tex: str) -> str:
    # remove comments
    tex = COMMENT_RE.sub("", flat_tex)

    # remove include directives if any remain
    tex = INPUTLIKE_RE.sub("", tex)

    # convert lists to bullets first, then drop noisy environments
    tex = convert_lists(tex)
    tex = strip_envs(tex)

    # convert section markers to explicit plain-text markers
    tex = SECTION_RE.sub(r"\n\nSECTION: \1\n", tex)
    tex = SUBSECTION_RE.sub(r"\n\nSUBSECTION: \1\n", tex)
    tex = SUBSUBSECTION_RE.sub(r"\n\nSUBSUBSECTION: \1\n", tex)

    # remove leftover list option brackets like "[leftmargin=*,itemsep=0.1em]"
    tex = re.sub(r"\[[^\]]*leftmargin[^\]]*\]", "", tex, flags=re.IGNORECASE)
    tex = re.sub(r"\[[^\]]*itemsep[^\]]*\]", "", tex, flags=re.IGNORECASE)

    # keep content for selected commands
    for cmd in KEEP_ARG_COMMANDS:
        tex = re.sub(rf"\\{cmd}\{{([^{{}}]*)\}}", r"\1", tex)

    # remove one-arg commands but keep their argument content (best-effort)
    tex = ONEARG_CMD_RE.sub(r"\2", tex)

    # remove remaining commands (labels, refs, cites, etc.)
    tex = GEN_CMD_RE.sub("", tex)

    # fix common escapes and remove leftover backslashes
    tex = tex.replace("\\%", "%")
    tex = tex.replace("\\_", "_")
    tex = tex.replace("\\", "")

    # normalize non-breaking spaces and citation glue
    tex = tex.replace("~", " ")

    # remove common DOI-like tokens when attached as raw ids
    tex = re.sub(r"\b10\.\d{4,9}/[-._;()/:A-Z0-9]+\b", "", tex, flags=re.IGNORECASE)

    # remove parenthetical colon artifacts like "(:System Identifier)"
    tex = re.sub(r"\(\s*:\s*[^)]{1,80}\)", "", tex)

    # remove braces that remain as structure noise
    tex = tex.replace("{", "").replace("}", "")

    # normalize whitespace early
    tex = normalize_text(tex)

    # aggressively remove obvious template junk lines (line-level)
    junk_patterns = [
        r"^abstract$",
        r"^document$",
        r"^keywords$",
        r"^acknowledgments$",
        r"^references$",
        r"^itemize$",
        r"^sec:",
        r"^fig:",
        r"^(tab|tbl|table):",
        r"ACM-Reference-Format",
        r"sample-sigplan",
        r"Proceedings of",
        r"Copyright",
        r"Permission to",
    ]

    cleaned_lines: List[str] = []
    for line in tex.splitlines():
        s = line.strip()
        if not s:
            cleaned_lines.append("")
            continue

        lower = s.lower()

        # drop figure/table reference lines that contain fig:/tab: labels
        if (lower.startswith("figure") or lower.startswith("table")) and ("fig:" in lower or "tab:" in lower or "tbl:" in lower):
            continue

        # drop single-token structural leftovers (extra safety)
        if lower in {"abstract", "document", "keywords", "acknowledgments", "references"}:
            continue

        # drop section label style leftovers
        if re.match(r"^(sec|fig|tab|tbl|table):", lower):
            continue

        # drop short figure/table reference lines (usually noise)
        if (s.startswith("Figure") or s.startswith("Table")) and len(s) < 120:
            continue

        # drop LaTeX figure/table reference lines (keep actual content elsewhere)
        if s.startswith("Figure~") or s.startswith("Table~"):
            continue

        if any(re.search(p, s, flags=re.IGNORECASE) for p in junk_patterns):
            continue

        cleaned_lines.append(s)

    return normalize_text("\n".join(cleaned_lines))


def split_by_sections(text: str) -> List[Tuple[Dict, str]]:
    """
    Split into blocks with section metadata.
    Returns list of (meta, block_text).
    """
    lines = text.splitlines()
    blocks: List[Tuple[Dict, List[str]]] = []
    meta = {"section": None, "subsection": None, "subsubsection": None}
    buf: List[str] = []

    def flush():
        nonlocal buf, meta
        content = "\n".join(buf).strip()
        if content:
            blocks.append((meta.copy(), content))
        buf = []

    for line in lines:
        if line.startswith("SECTION: "):
            flush()
            meta["section"] = line.replace("SECTION: ", "").strip()
            meta["subsection"] = None
            meta["subsubsection"] = None
            continue
        if line.startswith("SUBSECTION: "):
            flush()
            meta["subsection"] = line.replace("SUBSECTION: ", "").strip()
            meta["subsubsection"] = None
            continue
        if line.startswith("SUBSUBSECTION: "):
            flush()
            meta["subsubsection"] = line.replace("SUBSUBSECTION: ", "").strip()
            continue
        buf.append(line)

    flush()
    return [(m, normalize_text(t)) for m, t in blocks]


def chunk_block(text: str, target: int, overlap: int) -> List[Tuple[int, int, str]]:
    """
    Chunk by characters with overlap, but try to break on paragraph boundaries.
    """
    paras = [p.strip() for p in text.split("\n\n") if p.strip()]
    chunks: List[str] = []
    cur = ""

    for p in paras:
        if not cur:
            cur = p
        elif len(cur) + 2 + len(p) <= target:
            cur = cur + "\n\n" + p
        else:
            chunks.append(cur)
            cur = p

    if cur:
        chunks.append(cur)

    # If chunks are still too large, hard-split them
    final_chunks: List[str] = []
    for c in chunks:
        if len(c) <= target * 1.3:
            final_chunks.append(c)
        else:
            start = 0
            while start < len(c):
                final_chunks.append(c[start:start + target])
                start += max(1, target - overlap)

    # Build offsets (approximate offsets within block concatenation)
    out: List[Tuple[int, int, str]] = []
    offset = 0
    for c in final_chunks:
        start = offset
        end = offset + len(c)
        out.append((start, end, c))
        offset = end + 2
    return out


def stable_id(paper_id: str, chunk_id: int, text: str) -> str:
    h = hashlib.sha1(text.encode("utf-8", errors="ignore")).hexdigest()[:12]
    return f"{paper_id}_{chunk_id}_{h}"


def process_paper_dir(paper_dir: Path):
    flat_path = paper_dir / "flat.tex"
    if not flat_path.exists():
        return

    flat = flat_path.read_text(errors="ignore")
    cleaned = clean_tex_to_text(flat)

    (paper_dir / "clean.txt").write_text(cleaned)

    blocks = split_by_sections(cleaned)

    sha = sha256_file(flat_path)
    chunks_out = paper_dir / "chunks.jsonl"

    chunk_id = 0
    with chunks_out.open("w", encoding="utf-8") as f:
        for meta, block_text in blocks:
            block_chunks = chunk_block(block_text, TARGET_CHARS, OVERLAP_CHARS)
            for start, end, chunk_text in block_chunks:
                rec = {
                    "paper_id": paper_dir.name,
                    "chunk_id": chunk_id,
                    "id": stable_id(paper_dir.name, chunk_id, chunk_text),
                    "section": meta.get("section"),
                    "subsection": meta.get("subsection"),
                    "subsubsection": meta.get("subsubsection"),
                    "start": start,
                    "end": end,
                    "text": chunk_text,
                    "source": "flat.tex",
                    "sha256": sha,
                }
                f.write(json.dumps(rec, ensure_ascii=False) + "\n")
                chunk_id += 1

    audit = {
        "paper_id": paper_dir.name,
        "flat_bytes": len(flat.encode("utf-8", errors="ignore")),
        "clean_bytes": len(cleaned.encode("utf-8", errors="ignore")),
        "chunk_count": chunk_id,
        "sha256": sha,
    }
    (paper_dir / "audit.json").write_text(json.dumps(audit, indent=2))


def main():
    root = Path(".")
    for d in sorted([p for p in root.iterdir() if p.is_dir()]):
        process_paper_dir(d)

    out = Path("all_chunks.jsonl")
    with out.open("w", encoding="utf-8") as w:
        for d in sorted([p for p in root.iterdir() if p.is_dir()]):
            p = d / "chunks.jsonl"
            if p.exists():
                w.write(p.read_text(encoding="utf-8", errors="ignore"))


if __name__ == "__main__":
    main()
