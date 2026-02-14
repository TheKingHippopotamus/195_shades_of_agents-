"""NEXUS AI Mission Control — Agent Loader

Parses all 195 agent .md files from the agents/ directory and builds
an in-memory registry of AgentProfile objects keyed by agent code.
"""

from __future__ import annotations

import logging
import re
from pathlib import Path
from typing import Optional

from .config import AGENTS_DIR, DEPARTMENTS
from .models import AgentPersonal, AgentProfile

logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Regex helpers for extracting XML-in-markdown tags
# ---------------------------------------------------------------------------

def _extract_tag(text: str, tag: str) -> str:
    """Extract the text content of an XML tag from markdown.  Returns empty
    string if the tag is not found."""
    pattern = re.compile(
        rf"<{tag}>(.*?)</{tag}>", re.DOTALL
    )
    match = pattern.search(text)
    if match:
        return match.group(1).strip()
    return ""


def _extract_agent_number(text: str) -> int:
    """Extract agent_number as int, falling back to the filename number."""
    raw = _extract_tag(text, "agent_number")
    if raw:
        try:
            return int(raw)
        except ValueError:
            pass
    return 0


def _department_for_agent(agent_number: int) -> Optional[dict]:
    """Find the department dict whose range contains *agent_number*."""
    for dept in DEPARTMENTS:
        lo, hi = dept["range"]
        if lo <= agent_number <= hi:
            return dept
    return None


def _build_personal(text: str) -> AgentPersonal:
    """Extract the <personal> block and its sub-tags."""
    personal_block = _extract_tag(text, "personal")
    if not personal_block:
        return AgentPersonal()
    return AgentPersonal(
        nickname=_extract_tag(personal_block, "nickname"),
        age=_safe_int(_extract_tag(personal_block, "age")),
        about_me=_extract_tag(personal_block, "about_me"),
        what_i_bring=_extract_tag(personal_block, "what_i_bring"),
        my_strengths=_extract_tag(personal_block, "my_strengths"),
        my_weaknesses=_extract_tag(personal_block, "my_weaknesses"),
        working_with_me=_extract_tag(personal_block, "working_with_me"),
    )


def _safe_int(value: str) -> int:
    try:
        return int(value)
    except (ValueError, TypeError):
        return 0


def _personality_snippet(text: str, max_len: int = 200) -> str:
    """Return the first ~max_len characters of the <personality> block."""
    raw = _extract_tag(text, "personality")
    if not raw:
        return ""
    # Collapse whitespace
    snippet = " ".join(raw.split())
    if len(snippet) > max_len:
        # Cut at last space before limit
        cut = snippet[:max_len].rfind(" ")
        if cut > 0:
            snippet = snippet[:cut] + "..."
        else:
            snippet = snippet[:max_len] + "..."
    return snippet


def _parse_agent_file(filepath: Path) -> Optional[AgentProfile]:
    """Parse a single agent markdown file and return an AgentProfile."""
    try:
        text = filepath.read_text(encoding="utf-8")
    except Exception as exc:
        logger.warning("Could not read %s: %s", filepath, exc)
        return None

    code = _extract_tag(text, "code")
    if not code:
        logger.debug("Skipping %s — no <code> tag found", filepath.name)
        return None

    agent_number = _extract_agent_number(text)
    role = _extract_tag(text, "role")
    department_raw = _extract_tag(text, "department")
    reports_to = _extract_tag(text, "reports_to")
    tier = _extract_tag(text, "tier")

    # Map to config department
    dept_info = _department_for_agent(agent_number)
    department_id = dept_info["id"] if dept_info else "unknown"
    department_name = dept_info["name"] if dept_info else department_raw
    department_color = dept_info["color"] if dept_info else "#6366f1"

    personal = _build_personal(text)
    snippet = _personality_snippet(text)

    return AgentProfile(
        agent_number=agent_number,
        code=code,
        role=role,
        department=department_name,
        department_id=department_id,
        department_color=department_color,
        reports_to=reports_to,
        tier=tier,
        personality_snippet=snippet,
        personal=personal,
        status="idle",
    )


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------

def load_all_agents() -> dict[str, AgentProfile]:
    """Walk the agents/ directory tree, parse every .md file, and return
    a dict keyed by agent code (e.g. ``{"CEO": AgentProfile(...), ...}``).

    Logs a summary of how many agents were loaded.
    """
    registry: dict[str, AgentProfile] = {}
    agents_path = Path(AGENTS_DIR)

    if not agents_path.is_dir():
        logger.error("Agents directory not found: %s", agents_path)
        return registry

    md_files = sorted(agents_path.rglob("*.md"))
    skipped = 0

    for md_file in md_files:
        # Skip README files
        if md_file.name.lower().startswith("readme"):
            continue

        profile = _parse_agent_file(md_file)
        if profile is None:
            skipped += 1
            continue

        if profile.code in registry:
            logger.warning(
                "Duplicate agent code %s in %s (already loaded)",
                profile.code,
                md_file.name,
            )

        registry[profile.code] = profile

    # Summary log
    dept_counts: dict[str, int] = {}
    for agent in registry.values():
        dept_counts[agent.department_id] = dept_counts.get(agent.department_id, 0) + 1

    logger.info(
        "Agent loader: %d agents loaded across %d departments (%d files skipped)",
        len(registry),
        len(dept_counts),
        skipped,
    )
    for dept_id, count in sorted(dept_counts.items()):
        logger.debug("  %-10s %d agents", dept_id, count)

    return registry
