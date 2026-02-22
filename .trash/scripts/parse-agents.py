#!/usr/bin/env python3
"""
NEXUS AI Agent Profile Parser
Parses 195 agent .md files into structured JSON (agents.json + departments.json).

Usage:
    python3 scripts/parse-agents.py
    python3 scripts/parse-agents.py --agents-dir agents/ --output-dir scripts/
"""

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Optional

from pydantic import BaseModel, Field, field_validator


# ── Pydantic Models ──────────────────────────────────────────────────────────

class DecisionAuthority(BaseModel):
    can_decide: list[str] = Field(default_factory=list)
    must_escalate: list[str] = Field(default_factory=list)


class PersonalInfo(BaseModel):
    nickname: str = ""
    age: Optional[int] = None
    about_me: str = ""
    what_i_bring: str = ""
    strengths: list[str] = Field(default_factory=list)
    weaknesses: list[str] = Field(default_factory=list)
    working_with_me: str = ""


class AgentProfile(BaseModel):
    number: str
    code: str
    role: str
    department: str
    tier: str
    reports_to: str = ""
    direct_reports: str = ""
    nickname: str = ""
    age: Optional[int] = None
    personality: str = ""
    responsibilities: list[str] = Field(default_factory=list)
    decision_authority: DecisionAuthority = Field(default_factory=DecisionAuthority)
    personal: PersonalInfo = Field(default_factory=PersonalInfo)
    success_metrics: list[str] = Field(default_factory=list)
    source_file: str = ""

    @field_validator("number")
    @classmethod
    def validate_number(cls, v: str) -> str:
        if not re.match(r"^\d{3}$", v):
            raise ValueError(f"Agent number must be 3 digits, got: {v}")
        return v


class DepartmentSummary(BaseModel):
    id: str
    name: str
    folder: str
    agent_count: int
    agents: list[str]  # list of agent codes


# ── XML Tag Extraction Helpers ───────────────────────────────────────────────

def extract_tag(text: str, tag: str) -> str:
    """Extract content between <tag> and </tag>."""
    pattern = rf"<{tag}>(.*?)</{tag}>"
    match = re.search(pattern, text, re.DOTALL)
    return match.group(1).strip() if match else ""


def extract_tag_block(text: str, tag: str) -> str:
    """Extract content between <tag> and </tag>, including nested tags."""
    pattern = rf"<{tag}>(.*?)</{tag}>"
    match = re.search(pattern, text, re.DOTALL)
    return match.group(1).strip() if match else ""


def extract_list_items(text: str) -> list[str]:
    """Extract list items from markdown-style lists or numbered lists."""
    items = []
    for line in text.strip().splitlines():
        line = line.strip()
        # Match: - item, * item, 1. item, 1) item
        m = re.match(r"^(?:[-*]|\d+[.)]\s*)\s*(.*)", line)
        if m:
            item = m.group(1).strip()
            # Remove leading ** bold markers for responsibility titles
            item = re.sub(r"^\*\*(.*?)\*\*:?\s*", r"\1: ", item).strip()
            if item:
                items.append(item)
    return items


def extract_bullet_items(text: str) -> list[str]:
    """Extract simple bullet items (- item) from text."""
    items = []
    for line in text.strip().splitlines():
        line = line.strip()
        m = re.match(r"^[-*]\s+(.*)", line)
        if m:
            items.append(m.group(1).strip())
    return items


# ── Decision Authority Parsing ───────────────────────────────────────────────

def parse_decision_authority(block: str) -> DecisionAuthority:
    """Parse <decision_authority> block into structured data."""
    can_decide_raw = extract_tag(block, "can_decide")
    must_escalate_raw = extract_tag(block, "must_escalate")

    can_decide = extract_bullet_items(can_decide_raw) if can_decide_raw else []
    must_escalate = extract_bullet_items(must_escalate_raw) if must_escalate_raw else []

    # If no bullet items found, try splitting by comma or treating as single item
    if not can_decide and can_decide_raw:
        can_decide = [s.strip() for s in can_decide_raw.split(",") if s.strip()]
    if not must_escalate and must_escalate_raw:
        must_escalate = [s.strip() for s in must_escalate_raw.split(",") if s.strip()]

    return DecisionAuthority(can_decide=can_decide, must_escalate=must_escalate)


# ── Personal Section Parsing ────────────────────────────────────────────────

def parse_personal(block: str) -> PersonalInfo:
    """Parse <personal> block into PersonalInfo."""
    nickname = extract_tag(block, "nickname")
    age_str = extract_tag(block, "age")
    age = int(age_str) if age_str and age_str.isdigit() else None
    about_me = extract_tag(block, "about_me")
    what_i_bring = extract_tag(block, "what_i_bring")
    strengths_raw = extract_tag(block, "my_strengths")
    weaknesses_raw = extract_tag(block, "my_weaknesses")
    working_with_me = extract_tag(block, "working_with_me")

    strengths = extract_bullet_items(strengths_raw) if strengths_raw else []
    weaknesses = extract_bullet_items(weaknesses_raw) if weaknesses_raw else []

    return PersonalInfo(
        nickname=nickname,
        age=age,
        about_me=about_me,
        what_i_bring=what_i_bring,
        strengths=strengths,
        weaknesses=weaknesses,
        working_with_me=working_with_me,
    )


# ── Core Responsibilities Parsing ───────────────────────────────────────────

def parse_responsibilities(block: str) -> list[str]:
    """Parse <core_responsibilities> into a list of strings."""
    items = extract_list_items(block)
    if items:
        return items
    # Fallback: split by lines if no list markers found
    lines = [l.strip() for l in block.strip().splitlines() if l.strip()]
    return lines if lines else []


# ── Success Metrics Parsing ─────────────────────────────────────────────────

def parse_success_metrics(block: str) -> list[str]:
    """Parse <success_metrics> into a list of strings."""
    items = extract_bullet_items(block)
    if items:
        return items
    # Fallback: try comma-separated
    parts = [s.strip() for s in block.split(",") if s.strip()]
    if len(parts) > 1:
        return parts
    # Fallback: line-by-line
    lines = [l.strip() for l in block.strip().splitlines() if l.strip()]
    return lines


# ── Main Agent Parser ────────────────────────────────────────────────────────

def parse_agent_file(filepath: Path) -> Optional[AgentProfile]:
    """Parse a single agent .md file into an AgentProfile."""
    text = filepath.read_text(encoding="utf-8")

    # Extract <system_prompt> block
    system_prompt = extract_tag(text, "system_prompt")
    if not system_prompt:
        print(f"  WARNING: No <system_prompt> found in {filepath}", file=sys.stderr)
        return None

    # Agent identity
    identity_block = extract_tag(system_prompt, "agent_identity")
    if not identity_block:
        print(f"  WARNING: No <agent_identity> found in {filepath}", file=sys.stderr)
        return None

    number = extract_tag(identity_block, "agent_number")
    code = extract_tag(identity_block, "code")
    role = extract_tag(identity_block, "role")
    department = extract_tag(identity_block, "department")
    tier = extract_tag(identity_block, "tier")
    reports_to = extract_tag(identity_block, "reports_to")
    direct_reports = extract_tag(identity_block, "direct_reports")

    # Zero-pad agent number if needed
    if number and number.isdigit():
        number = number.zfill(3)

    # Personality
    personality = extract_tag(system_prompt, "personality")

    # Core responsibilities
    responsibilities_raw = extract_tag(system_prompt, "core_responsibilities")
    responsibilities = parse_responsibilities(responsibilities_raw) if responsibilities_raw else []

    # Decision authority
    da_block = extract_tag_block(system_prompt, "decision_authority")
    decision_authority = parse_decision_authority(da_block) if da_block else DecisionAuthority()

    # Personal
    personal_block = extract_tag_block(system_prompt, "personal")
    personal = parse_personal(personal_block) if personal_block else PersonalInfo()

    # Success metrics
    metrics_raw = extract_tag(system_prompt, "success_metrics")
    success_metrics = parse_success_metrics(metrics_raw) if metrics_raw else []

    try:
        profile = AgentProfile(
            number=number,
            code=code,
            role=role,
            department=department,
            tier=tier,
            reports_to=reports_to,
            direct_reports=direct_reports,
            nickname=personal.nickname,
            age=personal.age,
            personality=personality,
            responsibilities=responsibilities,
            decision_authority=decision_authority,
            personal=personal,
            success_metrics=success_metrics,
            source_file=str(filepath.relative_to(filepath.parent.parent.parent)),
        )
        return profile
    except Exception as e:
        print(f"  ERROR validating {filepath}: {e}", file=sys.stderr)
        return None


# ── Department Extraction ────────────────────────────────────────────────────

def build_departments(agents: list[AgentProfile], agents_dir: Path) -> list[DepartmentSummary]:
    """Build department summaries from parsed agents and folder structure."""
    dept_folders = sorted([
        d for d in agents_dir.iterdir()
        if d.is_dir() and re.match(r"^\d{2}-", d.name)
    ])

    departments: list[DepartmentSummary] = []
    for folder in dept_folders:
        dept_id = folder.name[:2]
        dept_name = folder.name[3:].replace("-", " ")

        # Find agents in this department by source_file path
        dept_agents = [
            a for a in agents
            if a.source_file.startswith(f"agents/{folder.name}/")
        ]
        dept_agents.sort(key=lambda a: a.number)

        departments.append(DepartmentSummary(
            id=dept_id,
            name=dept_name,
            folder=folder.name,
            agent_count=len(dept_agents),
            agents=[a.code for a in dept_agents],
        ))

    return departments


# ── Main ─────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Parse NEXUS AI agent .md files into JSON")
    parser.add_argument(
        "--agents-dir",
        type=Path,
        default=Path(__file__).parent.parent / "agents",
        help="Path to agents directory (default: ../agents relative to script)",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path(__file__).parent.parent,
        help="Output directory for JSON files (default: project root)",
    )
    args = parser.parse_args()

    agents_dir: Path = args.agents_dir.resolve()
    output_dir: Path = args.output_dir.resolve()

    if not agents_dir.exists():
        print(f"ERROR: agents directory not found: {agents_dir}", file=sys.stderr)
        sys.exit(1)

    # Discover all agent .md files
    md_files = sorted(agents_dir.rglob("*.md"))
    md_files = [f for f in md_files if f.name != "README.md"]

    print(f"Found {len(md_files)} agent files in {agents_dir}")

    # Parse all agents
    agents: list[AgentProfile] = []
    errors: list[str] = []

    for filepath in md_files:
        profile = parse_agent_file(filepath)
        if profile:
            agents.append(profile)
        else:
            errors.append(str(filepath))

    agents.sort(key=lambda a: a.number)

    print(f"Successfully parsed: {len(agents)} agents")
    if errors:
        print(f"Failed to parse: {len(errors)} files", file=sys.stderr)
        for e in errors:
            print(f"  - {e}", file=sys.stderr)

    # Build departments
    departments = build_departments(agents, agents_dir)

    # Write agents.json
    agents_json_path = output_dir / "agents.json"
    agents_data = [a.model_dump(mode="json") for a in agents]
    agents_json_path.write_text(
        json.dumps(agents_data, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print(f"Wrote {agents_json_path} ({len(agents)} agents)")

    # Write departments.json
    depts_json_path = output_dir / "departments.json"
    depts_data = [d.model_dump(mode="json") for d in departments]
    depts_json_path.write_text(
        json.dumps(depts_data, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print(f"Wrote {depts_json_path} ({len(departments)} departments)")

    # Summary
    print("\n── Department Summary ──")
    for dept in departments:
        print(f"  {dept.id} {dept.name}: {dept.agent_count} agents")
    total = sum(d.agent_count for d in departments)
    print(f"  TOTAL: {total} agents")

    if total != 195:
        print(f"\n  WARNING: Expected 195 agents, got {total}", file=sys.stderr)
        sys.exit(1)
    else:
        print("\n  All 195 agents parsed successfully.")


if __name__ == "__main__":
    main()
