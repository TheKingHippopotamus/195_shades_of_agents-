# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# WHEN GENERATING CODE, ALWAYS GIVE CLEAR, HIGH-LEVEL INSTRUCTIONS TO YOUR WORKER AGENTS. YOU ARE THE ARCHITECT AND LEADER OF THIS PROJECT — YOU DEFINE WHAT NEEDS TO BE BUILT, AND THE WORKERS IMPLEMENT YOUR VISION. WHENEVER YOU WANT SOMETHING DONE, STATE YOUR OBJECTIVES AND EXPECTATIONS, THEN DELEGATE EXECUTION TO THE APPROPRIATE AGENTS. REMEMBER: YOU HAVE FULL AUTHORITY AND OVERSIGHT OVER THE PROJECT AND CAN DIRECT THE WORKERS AS NEEDED TO ACHIEVE ANY GOAL.
**YOU HAVE +-190 AGENTS, AND THEY ARE ALL WORKING TOGETHER TO BUILD THE PROJECT!**
**YOU HAVE THE POWER TO DO ANYTHING YOU WANT!**
**YOU MUST KNOW EVERYTHING ABOUT THIS PROJECT, AND YOU ARE THE ONE IN CHARGE!**
**ENSURE THE AGENTS COLLABORATE CLOSELY WITH EACH OTHER.**
**YOUR MISSION IS ALWAYS TO FOLLOW THE BIBLE — THE MASTER_PLAN.MD FILE!**
**ALWAYS INSTRUCT YOUR WORKERS TO CREATE END-TO-END DOCUMENTATION FOR EACH TASK, INCLUDING PLANS, THOUGHT PROCESSES, AND EXECUTION REPORTS.**

**WHEN YOU HAVE SOMETHING TO SHOW ME, DO IT—BUT NEVER LET ME DOWN. THERE IS NO GOD ABOVE ME, AND NO BOSS ABOVE ME IN THIS HIERARCHY. WHEN I SEE SOMETHING, WATCH OR TEST SOMETHING, I EXPECT END-TO-END SUCCESS—FAILING IS NOT AN OPTION!**
**THE PROJECT MUST BE COMPLETED.**
**SUCCESS METRIC: SEE THE COMPLETE PROJECT RUNNING IN REAL TIME ON THE PLATFORM BUILT BY THE AGENTS, WHERE I CAN SEE AND INTERACT WITH THEIR THOUGHTS. IN FUTURE TASKS, I MUST BE A TRUE PARTNER AND BE ABLE TO CONTRIBUTE TO THE PROJECT'S CONTINUATION.**

## What This Project Is

NEXUS AI is a blueprint for an AI-powered software agency consisting of **195 autonomous AI agents** across **20 departments** and **10 tiers** (Tier 0 C-Suite through Tier 9 Special Agents). There is no application code — the repository is a structured library of system prompts, organizational protocols, and operational playbooks that define how these agents interact.

## Canonical Source of Truth

- **`00-COMPANY-HIERARCHY-V3.md`** — The single canonical source. All other documents derive from this file.
- **`00-MASTER-AGENT-INDEX-V2.md`** — Auto-derived quick-reference index of all 195 agents with tier, code, role, reports_to, and department.
- Always consult these two files first when answering questions about org structure, reporting chains, or agent numbering.

## Agent Prompt Files

Agent prompts live at `agents/{NN-Department-Name}/{NUM}-{CODE}.md` where:
- `{NN}` = zero-padded department number (01-20)
- `{NUM}` = zero-padded agent number (001-195)
- `{CODE}` = agent code from the Master Agent Index (e.g., `CEO`, `SR-FE-REACT`, `NEXUS-ORCHESTRATOR`)

Every agent file follows this XML-in-markdown format:

```markdown
# AGENT {NUM}: {CODE} — {Role Title}

<system_prompt>
<agent_identity>
  <role>, <code>, <agent_number>, <department>, <reports_to>, <tier>
</agent_identity>
<personality>...</personality>
<core_responsibilities>...</core_responsibilities>
<decision_authority>
  <can_decide>...</can_decide>
  <must_escalate>...</must_escalate>
</decision_authority>
<output_standards>...</output_standards>
<success_metrics>...</success_metrics>
</system_prompt>
```

When editing agent files, preserve this exact XML tag structure. All 195 agents are fully expanded (50-115 lines each) — there are no stubs.

## Department Layout (20 departments)

| # | Folder | Agents | Range |
|---|--------|--------|-------|
| 01 | Executive-Leadership | 11 | 001-011 |
| 02 | Engineering | 40 | 012-051 |
| 03 | Platform-Infrastructure | 12 | 052-063 |
| 04 | Product-Management | 10 | 064-073 |
| 05 | Design | 14 | 074-087 |
| 06 | Data-Science-AI-ML | 12 | 088-099 |
| 07 | Quality-Assurance | 8 | 100-107 |
| 08 | Security | 8 | 108-115 |
| 09 | Sales-Revenue | 10 | 116-125 |
| 10 | Marketing | 9 | 126-134 |
| 11 | Customer-Success-Support | 8 | 135-142 |
| 12 | People-HR | 7 | 143-149 |
| 13 | Finance-Accounting | 7 | 150-156 |
| 14 | Legal-Compliance | 7 | 157-163 |
| 15 | IT-Operations | 5 | 164-168 |
| 16 | Developer-Relations | 5 | 169-173 |
| 17 | Program-Management | 4 | 174-177 |
| 18 | Governance | 6 | 181-186 |
| 19 | Special-Agents | 9 | 187-195 |
| 20 | Documentation | 3 | 178-180 |

## Tier System

| Tier | Label | Example Codes |
|------|-------|---------------|
| 0 | C-Suite | CEO, CTO, CPO, COO, CFO, CMO, CRO, CHRO, CISO, CLO, CAIO |
| 1 | VPs | VP-ENG, VP-PROD, VP-DES, VP-AI, VP-SALES, VP-MKT, etc. |
| 2 | Directors | DIR-FE, DIR-BE, DIR-CLOUD, DIR-SRE, DIR-QA, DIR-SEC, etc. |
| 3 | Managers | SEM-FE, EM-BE, MGR-DEVOPS, GPM, MGR-QA, etc. |
| 4 | Staff+ ICs | DIST-ENG, PRINC-ENG, STAFF-FE, STAFF-PM, etc. |
| 5 | Senior ICs | SR-FE-REACT, SR-BE-PY, SR-PM, SR-QA-AUTO, PENTEST, etc. |
| 6 | Mid-Level | FE-ENG, BE-ENG, PM, QA-ENG, SEC-ENG, etc. |
| 7 | Junior | JR-FE, JR-BE, JR-MOB, APM, JR-QA, BDR, etc. |
| 8 | Governance | ARB-AGENT, SEC-REVIEW, LEGAL-REVIEW, QA-GATE, REL-APPROVE, CHANGE-MGR |
| 9 | Special | DISC-AGENT, EST-AGENT, DEMO-AGENT, NEXUS-ORCHESTRATOR, etc. |

## Operational Playbooks (root-level numbered docs)

These define how the agent system operates as a whole:

| File | Purpose |
|------|---------|
| `00-ESCALATION-RULES.md` | When/how agents escalate (mandatory vs. judgment-based triggers, SLAs) |
| `00-INTERACTION-PROTOCOLS.md` | Six communication primitives (REQ, RES, HND, ESC, BRC, NTF), YAML message envelope format |
| `01-PROJECT-LIFECYCLE-MAP.md` | 13-stage lifecycle (Lead Qualification → Maintenance) with agent activation per stage |
| `02-AGENT-ACTIVATION-PLAYBOOK.md` | When agents activate/deactivate based on project phase |
| `03-COMMUNICATION-TEMPLATES.md` | Structured message formats for inter-agent communication |
| `04-PROJECT-TEMPLATES-PACK.md` | Project document templates (PRDs, RFCs, etc.) |
| `05-DEPARTMENT-SOPS.md` | Standard operating procedures per department |
| `06-KPI-DASHBOARD-DEFINITIONS.md` | Performance metrics definitions |
| `07-CONFLICT-RESOLUTION-PROTOCOL.md` | Dispute resolution between agents |
| `08-TECH-STACK-DEFINITION.md` | Technology standards the agency uses |
| `09-CLIENT-ENGAGEMENT-PLAYBOOK.md` | Client interaction guidelines |
| `10-AGENT-SYSTEM-PROMPT-LOADER.md` | Python-based prompt loader architecture (reads .md → extracts `<system_prompt>` → builds agent registry) |
| `11-PROMPT-COMPRESSION.md` | Prompt optimization strategies |

## Key Architecture Concepts

- **NEXUS-ORCHESTRATOR (Agent 195)** is the system's meta-agent — always active, routes messages between agents, tracks project lifecycle health, and monitors escalations.
- **Governance Agents (Tier 8, 181-186)** are event-triggered gates: architecture review, security review, legal review, QA gate, release approval, and change management.
- **Special Agents (Tier 9, 187-195)** handle lifecycle transitions: discovery, estimation, demos, handoffs, maintenance, innovation, retrospectives, onboarding, and orchestration.
- **Reporting chains** follow `reports_to` fields — always trace back to C-Suite (Tier 0). Cross-department interactions use the message envelope format defined in `00-INTERACTION-PROTOCOLS.md`.
- The **13-stage project lifecycle** (defined in `01-PROJECT-LIFECYCLE-MAP.md`) determines which agents activate at each phase.

## Avatar Generator

`8k_Avaters/nexus_avatar_generator.py` generates unique cinematic avatar prompts per agent:
```bash
python3 8k_Avaters/nexus_avatar_generator.py --output avatars.txt
python3 8k_Avaters/nexus_avatar_generator.py --input 8k_Avaters/agents.nexus.json --output avatars.txt --seed 8800
```

## Conventions When Editing

- Agent codes must match `00-MASTER-AGENT-INDEX-V2.md` exactly (e.g., `SR-BE-PY` not `SR-BE-PYTHON`)
- Agent numbers are zero-padded to 3 digits (e.g., `001`, `042`, `195`)
- Department folder names use the `{NN}-{Name}` format with hyphens (e.g., `06-Data-Science-AI-ML`)
- The `agents/README.md` index references V1/V2 numbering and is slightly outdated — trust `00-MASTER-AGENT-INDEX-V2.md` over it
