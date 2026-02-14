# NEXUS AI Avatar Generator

Generate unique cinematic avatar prompts for NEXUS AI agents.

## Usage

Generate using built-in default roster:

```bash
python3 nexus_avatar_generator.py --output avatars.txt
```

Generate from a custom roster:

```bash
python3 nexus_avatar_generator.py --input agents.nexus.json --output avatars.txt --seed 8800
```

Input format (`--input`):

```json
[
  {"code": "NEX-XXX", "role": "Role Name", "department": "Department Name"}
]
```

The output follows the strict format:
- `AGENT_CODE`
- `ROLE`
- `DEPARTMENT`
- `AVATAR PROMPT`

The generator enforces unique appearance, clothing style, color palette, and pose per agent.
