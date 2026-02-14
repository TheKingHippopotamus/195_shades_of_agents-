"""NEXUS AI Mission Control — Configuration"""

from pathlib import Path

# Paths
PROJECT_ROOT = Path(__file__).parent.parent
NEXUS_ROOT = PROJECT_ROOT.parent
AGENTS_DIR = NEXUS_ROOT / "agents"
TEMPLATES_DIR = PROJECT_ROOT / "templates"
STATIC_DIR = PROJECT_ROOT / "static"

# Server
HOST = "0.0.0.0"
PORT = 8000

# Session monitor
JSONL_DIR = Path.home() / ".claude" / "projects" / "-Users-kinghippo-Documents-NEXUS-AI"
POLL_INTERVAL = 0.5      # seconds between file polls
MAX_MESSAGES = 500       # keep in memory

# Department metadata (id, folder_name, display_name, color, agent_range)
DEPARTMENTS = [
    {"id": "exec",    "folder": "01-Executive-Leadership",     "name": "Executive Leadership",     "color": "#6366f1", "range": (1, 11)},
    {"id": "eng",     "folder": "02-Engineering",              "name": "Engineering",               "color": "#8b5cf6", "range": (12, 51)},
    {"id": "infra",   "folder": "03-Platform-Infrastructure",  "name": "Platform & Infrastructure", "color": "#22d3ee", "range": (52, 63)},
    {"id": "product", "folder": "04-Product-Management",       "name": "Product Management",        "color": "#f59e0b", "range": (64, 73)},
    {"id": "design",  "folder": "05-Design",                   "name": "Design",                    "color": "#f97316", "range": (74, 87)},
    {"id": "aiml",    "folder": "06-Data-Science-AI-ML",       "name": "Data Science & AI/ML",      "color": "#06b6d4", "range": (88, 99)},
    {"id": "qa",      "folder": "07-Quality-Assurance",        "name": "Quality Assurance",         "color": "#10b981", "range": (100, 107)},
    {"id": "sec",     "folder": "08-Security",                 "name": "Security",                  "color": "#ef4444", "range": (108, 115)},
    {"id": "sales",   "folder": "09-Sales-Revenue",            "name": "Sales & Revenue",           "color": "#3b82f6", "range": (116, 125)},
    {"id": "mkt",     "folder": "10-Marketing",                "name": "Marketing",                 "color": "#ec4899", "range": (126, 134)},
    {"id": "cs",      "folder": "11-Customer-Success-Support",  "name": "Customer Success & Support","color": "#14b8a6", "range": (135, 142)},
    {"id": "people",  "folder": "12-People-HR",                "name": "People / HR",               "color": "#a855f7", "range": (143, 149)},
    {"id": "finance", "folder": "13-Finance-Accounting",       "name": "Finance & Accounting",      "color": "#84cc16", "range": (150, 156)},
    {"id": "legal",   "folder": "14-Legal-Compliance",         "name": "Legal & Compliance",        "color": "#f43f5e", "range": (157, 163)},
    {"id": "it",      "folder": "15-IT-Operations",            "name": "IT & Operations",           "color": "#94a3b8", "range": (164, 168)},
    {"id": "devrel",  "folder": "16-Developer-Relations",      "name": "Developer Relations",       "color": "#fb923c", "range": (169, 173)},
    {"id": "pmo",     "folder": "17-Program-Management",       "name": "Program Management",        "color": "#facc15", "range": (174, 177)},
    {"id": "gov",     "folder": "18-Governance",               "name": "Governance",                "color": "#fbbf24", "range": (181, 186)},
    {"id": "special", "folder": "19-Special-Agents",           "name": "Special Agents",            "color": "#f472b6", "range": (187, 195)},
    {"id": "docs",    "folder": "20-Documentation",            "name": "Documentation",             "color": "#a3e635", "range": (178, 180)},
]

# Department lookup by id
DEPT_BY_ID = {d["id"]: d for d in DEPARTMENTS}

# 20x20 interaction intensity matrix (mapped to our DEPARTMENTS order)
# 0=none, 1=rare, 2=monthly, 3=weekly, 4=daily, 5=continuous
# Collapsed from the 23x23 heatmap matrix (eng sub-depts merged)
INTERACTION_MATRIX = [
#   exec eng  infra prod des  aiml qa   sec  sale mkt  cs   ppl  fin  leg  it   devr pmo  gov  spec docs
    [5,   4,   2,   4,   2,   3,   1,   3,   3,   2,   2,   2,   3,   3,   1,   1,   2,   3,   3,   1],  # exec
    [4,   5,   4,   4,   4,   3,   4,   2,   1,   0,   1,   1,   1,   0,   1,   1,   3,   4,   2,   1],  # eng
    [2,   4,   5,   2,   0,   2,   2,   3,   0,   0,   1,   0,   1,   0,   2,   0,   3,   4,   2,   0],  # infra
    [4,   4,   2,   5,   5,   3,   3,   1,   3,   2,   3,   0,   1,   1,   0,   2,   4,   3,   4,   1],  # product
    [2,   4,   0,   5,   5,   1,   2,   0,   1,   1,   1,   0,   0,   0,   0,   1,   1,   2,   1,   0],  # design
    [3,   3,   2,   3,   1,   5,   2,   2,   1,   1,   1,   0,   1,   0,   0,   1,   2,   2,   2,   0],  # aiml
    [1,   4,   2,   3,   2,   2,   5,   3,   0,   0,   1,   0,   0,   0,   0,   0,   3,   5,   2,   0],  # qa
    [3,   2,   3,   1,   0,   2,   3,   5,   0,   0,   1,   0,   0,   2,   2,   0,   1,   4,   2,   0],  # sec
    [3,   1,   0,   3,   1,   1,   0,   0,   5,   3,   4,   1,   2,   3,   0,   1,   1,   1,   3,   0],  # sales
    [2,   0,   0,   2,   1,   1,   0,   0,   3,   5,   2,   1,   1,   1,   0,   2,   0,   0,   1,   0],  # mkt
    [2,   1,   1,   3,   1,   1,   1,   1,   4,   2,   5,   1,   1,   1,   1,   1,   2,   1,   3,   0],  # cs
    [2,   1,   0,   0,   0,   0,   0,   0,   1,   1,   1,   5,   2,   1,   1,   0,   0,   0,   0,   0],  # people
    [3,   1,   1,   1,   0,   1,   0,   0,   2,   1,   1,   2,   5,   2,   1,   0,   1,   0,   1,   0],  # finance
    [3,   0,   0,   1,   0,   0,   0,   2,   3,   1,   1,   1,   2,   5,   0,   0,   0,   0,   1,   0],  # legal
    [1,   1,   2,   0,   0,   0,   0,   2,   0,   0,   1,   1,   1,   0,   5,   0,   0,   0,   0,   0],  # it
    [1,   1,   0,   2,   1,   1,   0,   0,   1,   2,   1,   0,   0,   0,   0,   5,   0,   0,   1,   1],  # devrel
    [2,   3,   3,   4,   1,   2,   3,   1,   1,   0,   2,   0,   1,   0,   0,   0,   5,   3,   3,   0],  # pmo
    [3,   4,   4,   3,   2,   2,   5,   4,   1,   0,   1,   0,   0,   0,   0,   0,   3,   5,   3,   0],  # gov
    [3,   2,   2,   4,   1,   2,   2,   2,   3,   1,   3,   0,   1,   1,   0,   1,   3,   3,   5,   0],  # special
    [1,   1,   0,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   1,   0,   0,   0,   5],  # docs
]

# Lifecycle stages
LIFECYCLE_STAGES = [
    {"id": 1,  "name": "Lead Qualification",     "short": "Lead Qual"},
    {"id": 2,  "name": "Discovery",              "short": "Discovery"},
    {"id": 3,  "name": "Estimation & Proposal",  "short": "Estimation"},
    {"id": 4,  "name": "Contract & Kickoff",     "short": "Kickoff"},
    {"id": 5,  "name": "Architecture & Design",  "short": "Architecture"},
    {"id": 6,  "name": "Development (Sprints)",  "short": "Development"},
    {"id": 7,  "name": "QA & Testing",           "short": "QA/Testing"},
    {"id": 8,  "name": "Staging & UAT",          "short": "UAT"},
    {"id": 9,  "name": "Pre-Production",         "short": "Pre-Prod"},
    {"id": 10, "name": "Deployment & Launch",     "short": "Launch"},
    {"id": 11, "name": "Hypercare",              "short": "Hypercare"},
    {"id": 12, "name": "Handoff & Transition",   "short": "Handoff"},
    {"id": 13, "name": "Maintenance & Growth",   "short": "Maintenance"},
]

# Message types with colors
MESSAGE_TYPES = {
    "REQ": {"label": "Request",      "color": "#6366f1"},
    "RES": {"label": "Response",     "color": "#22d3ee"},
    "HND": {"label": "Handoff",      "color": "#f59e0b"},
    "ESC": {"label": "Escalation",   "color": "#ef4444"},
    "BRC": {"label": "Broadcast",    "color": "#a855f7"},
    "NTF": {"label": "Notification", "color": "#10b981"},
}

PRIORITY_LEVELS = {
    "P0": {"label": "Critical",  "color": "#ef4444"},
    "P1": {"label": "Urgent",    "color": "#f59e0b"},
    "P2": {"label": "Standard",  "color": "#6366f1"},
    "P3": {"label": "Low / FYI", "color": "#6b7280"},
}
