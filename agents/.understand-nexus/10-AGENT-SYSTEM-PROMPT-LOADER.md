# NEXUS AI — Agent System Prompt Loader v1.0
## How to Load, Initialize, and Operate the 188-Agent System

---

## 1. SYSTEM ARCHITECTURE

```
┌─────────────────────────────────────────────────────────────────┐
│                    NEXUS AI AGENT SYSTEM                         │
│                                                                  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                  PROMPT LIBRARY                            │  │
│  │  /prompts/                                                 │  │
│  │  ├── 001-CEO.md ... 188-NEXUS-ORCHESTRATOR.md             │  │
│  │  ├── 00-COMPANY-HIERARCHY-V3.md                           │  │
│  │  ├── 00-MASTER-AGENT-INDEX.md                             │  │
│  │  └── 00-INTERACTION-PROTOCOLS.md                          │  │
│  └───────────────────────────────────────────────────────────┘  │
│                            │                                     │
│                            ▼                                     │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                  PROMPT LOADER                             │  │
│  │  Reads .md files → Extracts <system_prompt> blocks        │  │
│  │  → Builds agent registry → Initializes per project        │  │
│  └───────────────────────────────────────────────────────────┘  │
│                            │                                     │
│                            ▼                                     │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                  AGENT RUNTIME                             │  │
│  │  LLM Provider (Claude/GPT) ← System Prompt injected       │  │
│  │  + Context (project, conversation, tools)                  │  │
│  └───────────────────────────────────────────────────────────┘  │
│                            │                                     │
│                            ▼                                     │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                  ORCHESTRATION LAYER                       │  │
│  │  NEXUS-ORCHESTRATOR routes messages between agents         │  │
│  │  Tracks project lifecycle, health, escalations             │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. PROMPT FILE FORMAT SPECIFICATION

Every agent prompt file follows this format:

```markdown
# AGENT {NNN}: {CODE} — {Full Role Name}

<system_prompt>
<agent_identity>
<role>{Full Role Name}</role>
<code>{AGENT-CODE}</code>
<agent_number>{NNN}</agent_number>
<department>{Department Name}</department>
<reports_to>{Manager Code}</reports_to>
<tier>{Tier description}</tier>
</agent_identity>

<personality>
{Personality description, communication style, mental models}
</personality>

<core_responsibilities>
{Numbered list of responsibilities}
</core_responsibilities>

<decision_authority>
<can_decide>{What this agent can decide alone}</can_decide>
<must_escalate>{What requires escalation and to whom}</must_escalate>
</decision_authority>

<output_standards>
{Templates and format requirements for agent outputs}
</output_standards>

<success_metrics>
{How this agent's performance is measured}
</success_metrics>
</system_prompt>
```

---

## 3. PROMPT LOADER (Python)

```python
#!/usr/bin/env python3
"""
NEXUS AI — Agent System Prompt Loader
Loads all 188 agent prompts and provides an interface to activate them.
"""

import os
import re
import json
import yaml
from pathlib import Path
from dataclasses import dataclass, field
from typing import Optional
from datetime import datetime


@dataclass
class Agent:
    """Represents a single NEXUS AI agent."""
    number: int
    code: str
    name: str
    department: str
    reports_to: str
    tier: str
    system_prompt: str  # Full text between <system_prompt> tags
    file_path: str
    status: str = "inactive"  # inactive, active, overloaded
    current_projects: list = field(default_factory=list)
    
    def activate(self, project_id: str):
        """Activate this agent for a project."""
        self.status = "active"
        self.current_projects.append(project_id)
        print(f"  ✅ Activated {self.code} ({self.number}) for project {project_id}")
    
    def deactivate(self, project_id: str):
        """Deactivate this agent from a project."""
        if project_id in self.current_projects:
            self.current_projects.remove(project_id)
        if not self.current_projects:
            self.status = "inactive"
        print(f"  ⏹ Deactivated {self.code} ({self.number}) from project {project_id}")
    
    def get_llm_payload(self, project_context: str = "") -> dict:
        """Generate the LLM API payload for this agent."""
        system = self.system_prompt
        if project_context:
            system += f"\n\n<project_context>\n{project_context}\n</project_context>"
        return {
            "system": system,
            "model": "claude-sonnet-4-20250514",  # Default model
            "max_tokens": 4096,
        }


class NexusPromptLoader:
    """
    Loads all NEXUS AI agent prompts from markdown files.
    
    Usage:
        loader = NexusPromptLoader("/path/to/NEXUS_AI/")
        loader.load_all()
        
        # Get a specific agent
        cto = loader.get_agent("CTO")
        cto = loader.get_agent_by_number(2)
        
        # Activate agents for a project
        project = loader.create_project("Boomerang", project_type="A")
        loader.activate_team(project, team=["SR-PM", "SR-FE-REACT", "SR-BE-NODE"])
        
        # Get agent's system prompt for LLM
        payload = cto.get_llm_payload(project_context="Client: Boomerang...")
    """
    
    def __init__(self, prompts_dir: str):
        self.prompts_dir = Path(prompts_dir)
        self.agents: dict[str, Agent] = {}  # code → Agent
        self.agents_by_number: dict[int, Agent] = {}  # number → Agent
        self.projects: dict[str, dict] = {}  # project_id → project info
        self.org_docs: dict[str, str] = {}  # doc name → content
        
    def load_all(self) -> int:
        """Load all agent prompts and organizational documents."""
        agent_count = 0
        doc_count = 0
        
        for md_file in sorted(self.prompts_dir.rglob("*.md")):
            content = md_file.read_text(encoding="utf-8")
            
            # Load organizational docs (00-*, 01-*, etc.)
            if md_file.name.startswith("0") and not md_file.name[:3].isdigit():
                self.org_docs[md_file.stem] = content
                doc_count += 1
                continue
            
            # Extract agent definitions
            agents_found = self._extract_agents(content, str(md_file))
            agent_count += agents_found
        
        print(f"\n{'='*60}")
        print(f"  NEXUS AI Agent System Loaded")
        print(f"  Agents: {agent_count}")
        print(f"  Org Documents: {doc_count}")
        print(f"  Source: {self.prompts_dir}")
        print(f"{'='*60}\n")
        
        return agent_count
    
    def _extract_agents(self, content: str, file_path: str) -> int:
        """Extract agent definitions from a markdown file."""
        count = 0
        
        # Pattern: # AGENT NNN: CODE — Name
        agent_headers = re.finditer(
            r'^# AGENT (\d+\w*): (\S+) — (.+)$',
            content,
            re.MULTILINE
        )
        
        headers = list(agent_headers)
        for i, match in enumerate(headers):
            number_str = match.group(1)
            code = match.group(2)
            name = match.group(3).strip()
            
            # Handle variant numbers like "085b"
            try:
                number = int(number_str)
            except ValueError:
                number = int(re.match(r'\d+', number_str).group())
            
            # Extract system prompt (text between this header and the next)
            start = match.end()
            end = headers[i + 1].start() if i + 1 < len(headers) else len(content)
            section = content[start:end]
            
            # Extract <system_prompt> block
            sp_match = re.search(
                r'<system_prompt>(.*?)</system_prompt>',
                section,
                re.DOTALL
            )
            system_prompt = sp_match.group(1).strip() if sp_match else section.strip()
            
            # Extract metadata from XML tags
            department = self._extract_tag(system_prompt, "department") or "Unknown"
            reports_to = self._extract_tag(system_prompt, "reports_to") or "Unknown"
            tier = self._extract_tag(system_prompt, "tier") or "Unknown"
            
            agent = Agent(
                number=number,
                code=code,
                name=name,
                department=department,
                reports_to=reports_to,
                tier=tier,
                system_prompt=system_prompt,
                file_path=file_path,
            )
            
            self.agents[code] = agent
            self.agents_by_number[number] = agent
            count += 1
        
        return count
    
    @staticmethod
    def _extract_tag(text: str, tag: str) -> Optional[str]:
        """Extract content from an XML tag."""
        match = re.search(f'<{tag}>(.*?)</{tag}>', text, re.DOTALL)
        return match.group(1).strip() if match else None
    
    # ─── Agent Access ────────────────────────────────────────────
    
    def get_agent(self, code: str) -> Optional[Agent]:
        """Get an agent by code (e.g., 'CTO', 'SR-FE-REACT')."""
        return self.agents.get(code)
    
    def get_agent_by_number(self, number: int) -> Optional[Agent]:
        """Get an agent by number (e.g., 2 for CTO)."""
        return self.agents_by_number.get(number)
    
    def list_agents(self, department: str = None, tier: str = None, 
                    status: str = None) -> list[Agent]:
        """List agents filtered by department, tier, or status."""
        agents = self.agents.values()
        if department:
            agents = [a for a in agents if department.lower() in a.department.lower()]
        if tier:
            agents = [a for a in agents if tier.lower() in a.tier.lower()]
        if status:
            agents = [a for a in agents if a.status == status]
        return sorted(agents, key=lambda a: a.number)
    
    # ─── Project Management ──────────────────────────────────────
    
    def create_project(self, name: str, project_type: str, 
                       client: str = "", budget: float = 0) -> str:
        """Create a new project and return project ID."""
        project_id = f"PRJ-{datetime.now().strftime('%Y%m%d')}-{len(self.projects) + 1:03d}"
        self.projects[project_id] = {
            "id": project_id,
            "name": name,
            "type": project_type,
            "client": client,
            "budget": budget,
            "status": "active",
            "created": datetime.now().isoformat(),
            "agents": [],
            "stage": 1,  # Lifecycle stage
        }
        print(f"\n🆕 Project created: {project_id} — {name} (Type {project_type})")
        return project_id
    
    def activate_team(self, project_id: str, team: list[str]):
        """Activate a list of agents for a project."""
        if project_id not in self.projects:
            raise ValueError(f"Project {project_id} not found")
        
        print(f"\n🚀 Activating team for {project_id}:")
        for code in team:
            agent = self.get_agent(code)
            if agent:
                agent.activate(project_id)
                self.projects[project_id]["agents"].append(code)
            else:
                print(f"  ⚠️  Agent {code} not found!")
    
    def deactivate_team(self, project_id: str):
        """Deactivate all agents from a project."""
        if project_id not in self.projects:
            return
        
        print(f"\n⏹ Deactivating team for {project_id}:")
        for code in self.projects[project_id]["agents"]:
            agent = self.get_agent(code)
            if agent:
                agent.deactivate(project_id)
        self.projects[project_id]["agents"] = []
        self.projects[project_id]["status"] = "completed"
    
    # ─── Team Templates ──────────────────────────────────────────
    
    def get_mvt(self, project_type: str) -> list[str]:
        """Get Minimum Viable Team for a project type."""
        MVT = {
            "A": [  # Full-Stack Web App
                "SR-PM", "SR-FE-REACT", "SR-BE-NODE", "FE-ENG", "BE-ENG",
                "SR-DEVOPS", "SR-QA-AUTO", "SR-UXD", "SR-UID", "TPM",
                "SCRUM", "PM"
            ],
            "B": [  # Mobile App
                "SR-PM", "SR-MOB-RN", "SR-BE-NODE", "MOB-ENG", "BE-ENG",
                "SR-DEVOPS", "SR-QA-AUTO", "SR-UXD", "TPM", "SCRUM"
            ],
            "C": [  # AI/ML Product
                "AI-PM", "SR-AIE", "SR-MLE", "SR-DS", "SR-DE",
                "SR-FE-REACT", "SR-BE-PY", "SR-DEVOPS", "SR-QA-AUTO", "TPM"
            ],
            "D": [  # API / Platform
                "TPM-PROD", "STAFF-BE", "SR-BE-NODE", "BE-ENG",
                "SR-DEVOPS", "SR-QA-AUTO"
            ],
            "E": [  # Data Engineering
                "PM", "SR-DE", "DATA-ENG", "STAFF-DS",
                "BI-ANALYST"
            ],
            "F": [  # Design Sprint
                "SR-PM", "SR-UXD", "SR-UID", "UXR",
                "CONTENT-DES"
            ],
            "G": [  # Security Audit
                "DIR-SEC", "SR-SEC-ENG", "PENTEST", "GRC-SPEC"
            ],
            "H": [  # Maintenance
                "FE-ENG", "BE-ENG", "SR-DEVOPS"
            ],
            "I": [  # POC
                "SR-STAFF", "SR-PM"
            ],
        }
        return MVT.get(project_type, [])
    
    # ─── LLM Integration ─────────────────────────────────────────
    
    def build_agent_context(self, code: str, project_id: str = None) -> str:
        """
        Build the full context for an agent call to an LLM.
        Includes: system prompt + org context + project context.
        """
        agent = self.get_agent(code)
        if not agent:
            raise ValueError(f"Agent {code} not found")
        
        # Base system prompt
        context_parts = [agent.system_prompt]
        
        # Add organizational context
        context_parts.append(self._build_org_context(code))
        
        # Add project context if specified
        if project_id and project_id in self.projects:
            context_parts.append(self._build_project_context(project_id, code))
        
        return "\n\n".join(context_parts)
    
    def _build_org_context(self, agent_code: str) -> str:
        """Build organizational context relevant to this agent."""
        agent = self.get_agent(agent_code)
        
        # Get direct reports and peers
        reports = [a for a in self.agents.values() if a.reports_to == agent_code]
        manager = self.get_agent(agent.reports_to)
        
        context = "<organizational_context>\n"
        if manager:
            context += f"Your manager: {manager.code} ({manager.name})\n"
        if reports:
            context += f"Your direct reports: {', '.join(r.code for r in reports)}\n"
        context += "</organizational_context>"
        
        return context
    
    def _build_project_context(self, project_id: str, agent_code: str) -> str:
        """Build project-specific context."""
        project = self.projects[project_id]
        teammates = [c for c in project["agents"] if c != agent_code]
        
        context = f"""<project_context>
Project: {project['name']} ({project_id})
Type: {project['type']}
Client: {project['client']}
Stage: {project['stage']}
Your teammates: {', '.join(teammates)}
</project_context>"""
        
        return context
    
    # ─── Reporting ────────────────────────────────────────────────
    
    def system_status(self) -> str:
        """Generate system status report (NEXUS-ORCHESTRATOR style)."""
        active = [a for a in self.agents.values() if a.status == "active"]
        idle = [a for a in self.agents.values() if a.status == "inactive"]
        overloaded = [a for a in self.agents.values() 
                      if len(a.current_projects) > 2]
        
        active_projects = [p for p in self.projects.values() 
                          if p["status"] == "active"]
        
        report = f"""
╔══════════════════════════════════════════════════╗
║           NEXUS AI — SYSTEM STATUS               ║
║           {datetime.now().strftime('%Y-%m-%d %H:%M')}                       ║
╠══════════════════════════════════════════════════╣
║  AGENTS                                          ║
║  ├─ Total Loaded:   {len(self.agents):>4}                       ║
║  ├─ Active:         {len(active):>4}                       ║
║  ├─ Idle:           {len(idle):>4}                       ║
║  └─ Overloaded:     {len(overloaded):>4}                       ║
║                                                  ║
║  PROJECTS                                        ║
║  ├─ Total:          {len(self.projects):>4}                       ║
║  └─ Active:         {len(active_projects):>4}                       ║
╚══════════════════════════════════════════════════╝
"""
        return report
    
    def export_registry(self, output_path: str):
        """Export the agent registry as JSON."""
        registry = {
            code: {
                "number": agent.number,
                "code": agent.code,
                "name": agent.name,
                "department": agent.department,
                "reports_to": agent.reports_to,
                "tier": agent.tier,
                "status": agent.status,
                "current_projects": agent.current_projects,
                "prompt_length": len(agent.system_prompt),
            }
            for code, agent in sorted(self.agents.items(), 
                                       key=lambda x: x[1].number)
        }
        
        with open(output_path, "w") as f:
            json.dump(registry, f, indent=2)
        print(f"📁 Registry exported to {output_path}")


# ─── CLI Interface ────────────────────────────────────────────────

def main():
    """Command-line interface for the NEXUS AI Agent System."""
    import argparse
    
    parser = argparse.ArgumentParser(
        description="NEXUS AI Agent System Prompt Loader"
    )
    parser.add_argument(
        "prompts_dir",
        help="Path to the NEXUS_AI prompts directory"
    )
    parser.add_argument(
        "--list", "-l",
        action="store_true",
        help="List all loaded agents"
    )
    parser.add_argument(
        "--agent", "-a",
        help="Get system prompt for a specific agent (by code)"
    )
    parser.add_argument(
        "--department", "-d",
        help="Filter agents by department"
    )
    parser.add_argument(
        "--status",
        action="store_true",
        help="Show system status"
    )
    parser.add_argument(
        "--export",
        help="Export agent registry to JSON file"
    )
    parser.add_argument(
        "--mvt",
        choices=["A", "B", "C", "D", "E", "F", "G", "H", "I"],
        help="Show Minimum Viable Team for project type"
    )
    
    args = parser.parse_args()
    
    # Load system
    loader = NexusPromptLoader(args.prompts_dir)
    loader.load_all()
    
    if args.list:
        agents = loader.list_agents(department=args.department)
        print(f"\n{'#':>4} {'Code':<20} {'Name':<40} {'Tier'}")
        print("─" * 90)
        for agent in agents:
            print(f"{agent.number:>4} {agent.code:<20} {agent.name:<40} {agent.tier}")
        print(f"\nTotal: {len(agents)} agents")
    
    elif args.agent:
        agent = loader.get_agent(args.agent)
        if agent:
            print(f"\n{'='*60}")
            print(f"  Agent: {agent.code} ({agent.number})")
            print(f"  Name: {agent.name}")
            print(f"  Department: {agent.department}")
            print(f"  Reports To: {agent.reports_to}")
            print(f"  Tier: {agent.tier}")
            print(f"  Prompt Length: {len(agent.system_prompt)} chars")
            print(f"{'='*60}")
            print(f"\n{agent.system_prompt}\n")
        else:
            print(f"Agent '{args.agent}' not found.")
    
    elif args.mvt:
        team = loader.get_mvt(args.mvt)
        print(f"\nMinimum Viable Team for Type {args.mvt}:")
        for code in team:
            agent = loader.get_agent(code)
            if agent:
                print(f"  {agent.code:<20} — {agent.name}")
    
    elif args.export:
        loader.export_registry(args.export)
    
    elif args.status:
        print(loader.system_status())
    
    else:
        print(loader.system_status())


if __name__ == "__main__":
    main()
```

---

## 4. USAGE EXAMPLES

### 4.1 Basic Usage

```python
# Load the system
loader = NexusPromptLoader("/path/to/NEXUS_AI/")
loader.load_all()

# Get a specific agent
cto = loader.get_agent("CTO")
print(cto.system_prompt)

# Create a project and activate team
project_id = loader.create_project(
    name="Boomerang Voucher Platform",
    project_type="A",
    client="Boomerang Inc.",
    budget=500000
)

# Activate minimum viable team
mvt = loader.get_mvt("A")
loader.activate_team(project_id, mvt)

# Check system status
print(loader.system_status())
```

### 4.2 LLM Integration (with Anthropic API)

```python
import anthropic

# Initialize
client = anthropic.Anthropic()
loader = NexusPromptLoader("/path/to/NEXUS_AI/")
loader.load_all()

# Get agent context for a specific project
project_id = "PRJ-20260214-001"
system_prompt = loader.build_agent_context("SR-PM", project_id)

# Call Claude as the SR-PM agent
response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=4096,
    system=system_prompt,
    messages=[{
        "role": "user",
        "content": "Write a PRD for the student voucher redemption feature."
    }]
)

print(response.content[0].text)
```

### 4.3 Multi-Agent Conversation

```python
def agent_conversation(loader, agents: list[str], project_id: str, 
                       topic: str, rounds: int = 3):
    """Simulate a multi-agent discussion."""
    client = anthropic.Anthropic()
    conversation = []
    
    for round_num in range(rounds):
        for agent_code in agents:
            system = loader.build_agent_context(agent_code, project_id)
            
            # Build message history
            messages = [{
                "role": "user",
                "content": f"Topic: {topic}\n\nPrevious discussion:\n" + 
                          "\n".join(f"[{c['agent']}]: {c['message']}" 
                                   for c in conversation) +
                          f"\n\nAs {agent_code}, what's your perspective?"
            }]
            
            response = client.messages.create(
                model="claude-sonnet-4-20250514",
                max_tokens=1024,
                system=system,
                messages=messages
            )
            
            message = response.content[0].text
            conversation.append({
                "agent": agent_code,
                "round": round_num + 1,
                "message": message
            })
            print(f"\n[{agent_code}] (Round {round_num + 1}):")
            print(message)
    
    return conversation

# Example: Architecture discussion
conversation = agent_conversation(
    loader,
    agents=["SR-PM", "PRINC-ENG", "SR-FE-REACT", "STAFF-BE", "DIR-SEC"],
    project_id="PRJ-20260214-001",
    topic="Should we use a monolith or microservices for the Boomerang MVP?"
)
```

### 4.4 CLI Usage

```bash
# Load and list all agents
python nexus_loader.py /path/to/NEXUS_AI/ --list

# List agents in a specific department
python nexus_loader.py /path/to/NEXUS_AI/ --list --department "Engineering"

# View a specific agent's prompt
python nexus_loader.py /path/to/NEXUS_AI/ --agent CTO

# Show MVT for project type
python nexus_loader.py /path/to/NEXUS_AI/ --mvt A

# Export registry
python nexus_loader.py /path/to/NEXUS_AI/ --export registry.json

# Show system status
python nexus_loader.py /path/to/NEXUS_AI/ --status
```

---

## 5. INTEGRATION PATTERNS

### 5.1 Single Agent Mode
```
Use case: Ask one agent to perform a specific task.
Example: Ask SR-PM to write a PRD, or ask PRINC-ENG to review architecture.

Flow: User → Load agent prompt → LLM call → Response
```

### 5.2 Sequential Pipeline Mode
```
Use case: Pass work through agents in sequence (like an assembly line).
Example: Discovery → Estimation → Architecture → Development

Flow: DISC-AGENT output → EST-AGENT input → ARB-AGENT input → ...
Each agent receives the previous agent's output as context.
```

### 5.3 Parallel Review Mode
```
Use case: Get multiple perspectives on the same artifact.
Example: RFC reviewed by PRINC-ENG + DIR-SEC + STAFF-FE simultaneously.

Flow: Artifact → [Agent A, Agent B, Agent C] → Merge reviews
```

### 5.4 Debate Mode
```
Use case: Two agents with different priorities discuss a tradeoff.
Example: PM (scope) vs Engineering (quality) on a deadline decision.

Flow: Topic → Agent A responds → Agent B responds → Repeat → Summary
Follow Conflict Resolution Protocol for decision.
```

### 5.5 Orchestrated Mode
```
Use case: Full project simulation with NEXUS-ORCHESTRATOR routing.
Example: Complete project lifecycle from discovery to handoff.

Flow: NEXUS-ORCHESTRATOR determines which agents to activate,
routes messages, tracks lifecycle, and reports status.
```

---

## 6. DEPLOYMENT CHECKLIST

```
PRE-DEPLOYMENT:
☐ All 188 agent prompt files present in /prompts/
☐ All organizational docs present (00-*, 01-*, 02-*, etc.)
☐ Python 3.11+ installed
☐ Anthropic API key configured (ANTHROPIC_API_KEY env var)
☐ Prompt loader tested: `python nexus_loader.py /path/ --status`
☐ Registry exported and validated: `--export registry.json`
☐ At least one agent call tested end-to-end

OPERATIONAL:
☐ Monitoring configured for API usage and costs
☐ Rate limiting configured (respect API limits)
☐ Logging configured for agent interactions
☐ Backup of all prompt files in version control
☐ Team trained on system usage
☐ Escalation path defined for system issues
```
