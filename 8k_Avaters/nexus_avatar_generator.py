#!/usr/bin/env python3
"""NEXUS AI Avatar Prompt Generator.

Generates unique, cinematic avatar prompts for an organization roster while
enforcing non-reuse of appearance, clothing, palette, and pose.
"""

from __future__ import annotations

import argparse
import json
import random
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Sequence, Tuple


@dataclass(frozen=True)
class Agent:
    code: str
    role: str
    department: str


DEFAULT_AGENTS: List[Agent] = [
    Agent("NEX-CEO", "Chief Executive Officer", "Executive"),
    Agent("NEX-COO", "Operations Commander", "Executive"),
    Agent("NEX-CTO", "Chief Technology Architect", "Technology"),
    Agent("NEX-CISO", "Chief Security Sentinel", "Security"),
    Agent("NEX-DS1", "Principal Data Scientist", "Data Science"),
    Agent("NEX-DS2", "Machine Learning Research Strategist", "Data Science"),
    Agent("NEX-MLX", "Model Training Engineer", "AI Research"),
    Agent("NEX-AIOPS", "Autonomous Systems Operator", "AI Operations"),
    Agent("NEX-PLT", "Platform Reliability Engineer", "Infrastructure"),
    Agent("NEX-NET", "Network Fabric Engineer", "Infrastructure"),
    Agent("NEX-CLD", "Cloud Deployment Orchestrator", "Infrastructure"),
    Agent("NEX-PM1", "Product Strategy Lead", "Product"),
    Agent("NEX-UX1", "Experience Design Director", "Design"),
    Agent("NEX-FIN1", "Financial Intelligence Analyst", "Finance"),
    Agent("NEX-LGL1", "Compliance and Governance Counsel", "Legal"),
    Agent("NEX-HR1", "Talent Systems Partner", "People Operations"),
    Agent("NEX-MKT1", "Narrative and Brand Architect", "Marketing"),
    Agent("NEX-SLS1", "Enterprise Solutions Consultant", "Sales"),
    Agent("NEX-SUP1", "Client Success Navigator", "Support"),
    Agent("NEX-QA1", "Quality Assurance Commandant", "Quality"),
    Agent("NEX-RBT1", "Robotics Integration Specialist", "Robotics"),
    Agent("NEX-IOT1", "Edge Sensor Intelligence Lead", "IoT"),
    Agent("NEX-BIO1", "Bioinformatics Pattern Engineer", "BioTech"),
    Agent("NEX-RSK1", "Risk Foresight Analyst", "Risk"),
]

AGE_IMPRESSIONS = [
    "emerging prodigy presence",
    "seasoned strategist aura",
    "prime-of-career precision",
    "veteran systems thinker demeanor",
    "young visionary confidence",
    "calm elder-mentor composure",
]

ROLE_RULES: Dict[str, Dict[str, str]] = {
    "security": {
        "metaphor": "defensive lattice motifs with razor-cut geometry",
        "energy": "controlled",
        "tone": "vigilant and unreadable",
        "environment": "a hardened cyber command vault with floating threat maps",
        "lighting": "low-key chiaroscuro with precise edge highlights",
    },
    "data": {
        "metaphor": "fractal analytics glyphs and orbiting data filaments",
        "energy": "analytical",
        "tone": "curious and exacting",
        "environment": "an abstract data observatory with volumetric query streams",
        "lighting": "cool volumetric beams through translucent holograms",
    },
    "infrastructure": {
        "metaphor": "structural load-bearing forms and modular frame language",
        "energy": "steady",
        "tone": "grounded and dependable",
        "environment": "a megastructure operations bay with layered service corridors",
        "lighting": "industrial practical lights with subtle atmospheric haze",
    },
    "executive": {
        "metaphor": "minimal authority symbols and balanced geometric framing",
        "energy": "calm",
        "tone": "decisive and composed",
        "environment": "a panoramic command suite above the NEXUS skyline",
        "lighting": "clean sculpted key light with restrained rim glow",
    },
    "ai": {
        "metaphor": "hybrid bio-synthetic interfaces and neural light traces",
        "energy": "visionary",
        "tone": "focused and transcendent",
        "environment": "a synthetic cognition chamber with recursive holographic layers",
        "lighting": "neural pulse lighting and soft spectral bloom",
    },
    "finance": {
        "metaphor": "algorithmic market sigils and precision timeline arcs",
        "energy": "measured",
        "tone": "calculating and composed",
        "environment": "a quantum finance cockpit with cascading market constellations",
        "lighting": "high-contrast directional light with amber signal accents",
    },
    "legal": {
        "metaphor": "encoded jurisprudence runes and symmetry of order",
        "energy": "disciplined",
        "tone": "firm and impartial",
        "environment": "a governance chamber lined with luminous statute arrays",
        "lighting": "balanced neutral lighting with crisp contour separation",
    },
    "design": {
        "metaphor": "generative form studies and harmonic composition grids",
        "energy": "inventive",
        "tone": "imaginative and confident",
        "environment": "a creative simulation studio with morphing spatial prototypes",
        "lighting": "soft cinematic wrap light with colorful reflective bounce",
    },
    "product": {
        "metaphor": "roadmap vectors and convergence nodes",
        "energy": "coordinated",
        "tone": "strategic and pragmatic",
        "environment": "a product war-room with interactive milestone topography",
        "lighting": "focused overhead key with ambient interface glows",
    },
    "marketing": {
        "metaphor": "signal amplification rings and narrative waveforms",
        "energy": "dynamic",
        "tone": "charismatic and intentional",
        "environment": "an immersive media sphere with responsive brand spectra",
        "lighting": "stylized mixed lighting with controlled flare accents",
    },
    "sales": {
        "metaphor": "bridge-building motifs and trust-linked geometry",
        "energy": "confident",
        "tone": "persuasive and warm",
        "environment": "a negotiation atrium overlooking transit lanes",
        "lighting": "optimistic side key with clean reflective highlights",
    },
    "support": {
        "metaphor": "guidance pathways and stabilizing beacon markers",
        "energy": "empathetic",
        "tone": "reassuring and alert",
        "environment": "a mission support hub with live client telemetry walls",
        "lighting": "soft practical lighting with calm cyan ambience",
    },
    "quality": {
        "metaphor": "calibration grids and fault-line overlays",
        "energy": "meticulous",
        "tone": "critical and disciplined",
        "environment": "a validation chamber with layered diagnostic projections",
        "lighting": "precise high-clarity lighting with narrow accent strips",
    },
    "robotics": {
        "metaphor": "kinematic schematics and articulated motion cues",
        "energy": "kinetic",
        "tone": "inventive and exact",
        "environment": "a robotics integration hangar with active assembly rigs",
        "lighting": "metallic reflections with focused task lights",
    },
    "iot": {
        "metaphor": "distributed sensor halos and edge-network pulse points",
        "energy": "alert",
        "tone": "adaptive and observant",
        "environment": "an edge-compute control deck linked to city-scale sensor maps",
        "lighting": "crisp cool lighting with rhythmic indicator glints",
    },
    "bio": {
        "metaphor": "bio-digital helix motifs and cellular data lattices",
        "energy": "methodical",
        "tone": "curious and humane",
        "environment": "a biotech analysis lab with translucent genomic interfaces",
        "lighting": "sterile cinematic lighting softened by organic glow",
    },
    "risk": {
        "metaphor": "probability shards and scenario branching diagrams",
        "energy": "anticipatory",
        "tone": "cautious and strategic",
        "environment": "a foresight theater with predictive simulation panoramas",
        "lighting": "dramatic top light with subdued background gradients",
    },
    "operations": {
        "metaphor": "clockwork orchestration arcs and synchronized route lines",
        "energy": "coordinated",
        "tone": "disciplined and decisive",
        "environment": "a live operations nerve center with synchronized logistics streams",
        "lighting": "structured key and fill balance with clear task illumination",
    },
    "default": {
        "metaphor": "future-corporate symbolic geometry and adaptive interface motifs",
        "energy": "balanced",
        "tone": "intelligent and composed",
        "environment": "a futuristic NEXUS workspace with contextual holographic layers",
        "lighting": "cinematic three-point lighting with subtle volumetric depth",
    },
}

FACIAL_STRUCTURES = [
    "an angular face with graphite cheek contours",
    "a heart-shaped face framed by subtle luminescent markings",
    "a long architectural face with clean jaw planes",
    "a compact face with sharp orbital structure",
    "a high-cheekbone profile with surgical symmetry",
    "an oval face with etched nano-line details",
    "a broad face with disciplined geometric proportions",
    "a narrow face with precise temple arcs",
    "a balanced face with refined synthetic skin texture",
    "a faceted visage with polished composite bone lines",
    "a calm rectangular face with controlled expression planes",
    "a sculpted face with dual-tone dermal panels",
    "a sleek mask-like faceplate with human micro-expressions",
    "a chiseled profile with subtle cybernetic seams",
    "a serene face with mirror-smooth forehead geometry",
    "a stern profile with articulated jaw inlays",
    "a graceful face with concentric cheek implants",
    "a disciplined face with crystalline dermal accents",
    "a severe profile with titanium contour ridges",
    "a poised face with fine luminous under-eye circuits",
    "a kinetic face with asymmetrical but elegant paneling",
    "a noble face with matte carbon cheek armor",
    "a measured expression on a modular composite face",
    "a minimalist facial frame with embedded light veins",
    "a precise visage with micro-engraved temple runes",
    "a resilient face with adaptive polymer contours",
    "a quiet, expressive face with neural fretwork",
    "a bold face with layered translucent dermal plates",
    "a focused face with precision-cut chin structure",
    "a refined face with subtle iridescent edge detailing",
    "a tranquil face with segmented ceramic contouring",
    "a directive face with integrated signal-glyph etchings",
]

HEAD_DESIGNS = [
    "a floating halo-crown of segmented light fins",
    "a swept-back metallic crest haircut with fiber-optic strands",
    "a close-cropped obsidian style with micro-antenna braids",
    "a geometric undercut intersected by luminous tracer lines",
    "a braided coil architecture with conductive threads",
    "a polished cranial visor band replacing conventional hair",
    "a layered pixie silhouette with holographic tips",
    "a sculpted wave cut with embedded status LEDs",
    "a clean shaved head carrying a translucent command circlet",
    "a voluminous asymmetric style threaded with data filaments",
    "a precise side-part with chromed follicle fibers",
    "a short tactical crop beneath a refractive signal tiara",
    "a braided mohawk of carbon strands and light beads",
    "a soft curved bob with programmable color sheen",
    "a monk-like ring cut with projected interface glyphs",
    "a segmented plume headpiece with moving shutters",
    "a long tied-back fiber mane with neural connectors",
    "a minimalist cap of matte nano-fabric over scalp ports",
    "a curled crown style punctuated by micro-prism pins",
    "a razor-faded contour cut with pulse-reactive lining",
    "a transparent cranial dome accent with internal light drift",
    "a structured loc array interwoven with circuit charms",
    "a low knot hairstyle with metallic spindle clasp",
    "an elegant swept quiff with adaptive reflective strands",
    "a geometric fringe with thin aurora-lit edges",
    "a layered long style with discreet hard-light clips",
    "a radial braid pattern around a central optic emblem",
    "a sculptural short afro with luminous edge mapping",
    "a dual-bun signal architecture with hovering ringlets",
    "a refined crown braid fused with ceramic ornament rails",
    "a soft-textured wave pattern and minimal sensor pins",
    "a sharp diagonal part under a floating command diadem",
]

CLOTHING_STYLES = [
    "wearing a tailored nanoweave command coat with magnetic lapels",
    "wearing an armored executive mantle with clean seam channels",
    "wearing a modular trench suit with data-reactive lining",
    "wearing a high-collar stealth uniform with segmented plating",
    "wearing a flowing analytical robe with embedded graph circuitry",
    "wearing a precision-cut tactical blazer over exo-fabric",
    "wearing a sculpted operations jacket with hard-shell shoulders",
    "wearing a minimalist authority suit with monolithic paneling",
    "wearing a reinforced infrastructure overcoat with anchor buckles",
    "wearing a research exo-vest layered over formal smartwear",
    "wearing a ceremonial governance coat with coded trim",
    "wearing a kinetic design cape-jacket hybrid with folded geometry",
    "wearing a matte-carbon field coat with adaptive vents",
    "wearing a polished strategy suit with floating collar frame",
    "wearing an asymmetrical command tunic with metallic spine",
    "wearing a telemetry harness over a structured utility coat",
    "wearing a fitted biometric blazer with translucent elbow guards",
    "wearing an industrial longcoat with articulated seam locks",
    "wearing a clinical tech-kimono with luminous stitch lines",
    "wearing a negotiation suit with integrated holo-cuff display",
    "wearing a diagnostics over-jacket with calibration tabs",
    "wearing a robotics pilot shell with flexible composite ribs",
    "wearing a cloud-orchestration cloak with layered circuit hems",
    "wearing a polished support uniform with beacon-thread piping",
    "wearing a risk-analysis coat with split-tail aerodynamic cut",
    "wearing an avant-garde product coat with modular sleeve blocks",
    "wearing a sentinel greatcoat with armored chest geometry",
    "wearing an elegant biotech blazer with organic panel flow",
    "wearing a security regalia jacket with hard-edge epaulets",
    "wearing an enterprise envoy suit with reinforced drape",
    "wearing a reliability engineer coat with lattice understructure",
    "wearing a calm authority over-suit with floating shoulder guards",
]

ACCESSORIES = [
    "holding a prism baton that visualizes live decisions",
    "carrying a folded holo-tablet with rotating cipher sigils",
    "wearing a single neural ear-cuff broadcasting status pulses",
    "with a hovering shard drone orbiting one shoulder",
    "with articulated finger rings projecting micro-dashboards",
    "with a chest-mounted emblem of interlocking NEXUS rings",
    "with a monofilament scarf displaying rolling telemetry",
    "with a forearm gauntlet emitting precision grid overlays",
    "with a slim shoulder beacon indicating system health",
    "with a suspended lens cluster mapping nearby signals",
    "with a kinetic brooch shaped like a decision tree",
    "with a command signet embedded with quantum glass",
    "with a floating archive cube trailing faint glyphs",
    "with a dual-layer visor tucked beside the jawline",
    "with a compact drone familiar tracing calm circles",
    "with a vertical badge strip showing dynamic role icons",
    "with an exo-quill tool for live architecture sketching",
    "with magnetic interface cards arranged along the collar",
    "with a pulse-reactive pendant shaped like a neural node",
    "with a forearm relay module producing clean light arcs",
    "with a coded sash clasp that shifts with context",
    "with a tiny holo-orb rendering predictive branches",
    "with an adaptive shoulder pin made of liquid metal",
    "with a segmented wrist console showing live pipelines",
    "with a crystal memory key attached at the sternum",
    "with an articulated neck frame carrying thin display panes",
    "with a diagnostic monocle projecting quality matrices",
    "with a compact gravitic compass floating near the hand",
    "with braided cable ornaments functioning as data relays",
    "with a luminous insignia plate that pulses on speech",
    "with a spectral ribbon accessory encoding mission priorities",
    "with a fine mesh veil panel displaying encrypted symbols",
]

PALETTES: List[Tuple[str, str]] = [
    ("midnight black", "electric cyan"),
    ("graphite", "crimson red"),
    ("ice silver", "deep cobalt"),
    ("obsidian", "amber gold"),
    ("slate blue", "neon lime"),
    ("charcoal", "rose copper"),
    ("arctic white", "infrared orange"),
    ("storm gray", "teal"),
    ("navy steel", "magenta"),
    ("carbon black", "aurora green"),
    ("titanium", "signal yellow"),
    ("smoke violet", "mint"),
    ("desert bronze", "laser blue"),
    ("porcelain gray", "ruby"),
    ("indigo", "platinum"),
    ("oxide red", "cold white"),
    ("gunmetal", "saffron"),
    ("deep emerald", "ice blue"),
    ("coal", "ultraviolet"),
    ("onyx", "bright coral"),
    ("frost gray", "emerald"),
    ("midnight navy", "copper"),
    ("graphene", "hot pink"),
    ("matte black", "aqua"),
    ("steel blue", "burnt orange"),
    ("ash gray", "digital green"),
    ("deep maroon", "silver"),
    ("jet black", "cerulean"),
    ("granite", "tangerine"),
    ("blue-black", "pearl"),
    ("basalt", "acid yellow"),
    ("lead gray", "neon red"),
]

POSES = [
    "standing upright with hands clasped behind the back",
    "leaning slightly forward with one hand over a holographic console",
    "half-turned with crossed arms and steady eye contact",
    "seated at the edge of a command dais with poised posture",
    "walking toward camera with controlled stride",
    "resting one hand on a floating data pillar",
    "in a side profile stance with a raised tactical wrist display",
    "balanced in a relaxed contrapposto with open palms",
    "kneeling on one knee while calibrating a drone",
    "standing with shoulders square and chin slightly lifted",
    "holding a transparent interface panel at chest level",
    "angled three-quarters with one arm extended to direct projections",
    "seated in a high-backed smart chair with composed authority",
    "standing at attention with a slight downward gaze",
    "turning over one shoulder as light trails arc behind",
    "mid-step on a lit platform with flowing garment motion",
    "hands gently interlaced while monitoring orbital charts",
    "one knee bent against a structural frame, focused expression",
    "with one arm folded and one hand adjusting a holographic lens",
    "standing broad stance with both hands on a command baton",
    "hands by sides, centered and motionless in deliberate calm",
    "one hand extended outward as if opening a strategic map",
    "seated cross-legged on a levitating platform in focused thought",
    "standing with one foot elevated on a low data block",
    "arms open slightly as ambient interfaces orbit the torso",
    "with fingertips touching, evaluating simulations in silence",
    "head tilted subtly while tracing lines in midair",
    "standing side-on with a cloak sweep framing the silhouette",
    "one hand at heart level and one hand controlling telemetry",
    "both hands resting on a rail as city lights glow behind",
    "turning the torso dynamically while projecting layered diagrams",
    "standing still with garment edges lifted by gentle field currents",
]

CAMERA_ANGLES = [
    "eye-level medium close-up",
    "low-angle heroic portrait",
    "three-quarter bust shot",
    "slight high-angle profile portrait",
    "tight cinematic close-up",
    "waist-up composition with dynamic tilt",
    "frontal portrait with centered symmetry",
    "over-shoulder cinematic framing",
    "low-angle waist-up frame",
    "three-quarter full-body portrait",
    "medium portrait with subtle dutch angle",
    "close portrait from side-front perspective",
    "mid-shot with strong leading lines",
    "portrait crop with slight telephoto compression",
    "near-eye-level close-up with foreground bokeh",
    "chest-up shot with asymmetrical framing",
    "full-figure portrait from a low pedestal view",
    "medium-long shot with layered parallax",
    "head-and-shoulders shot with offset horizon",
    "half-body shot from diagonal perspective",
    "close-up portrait with shallow frontal perspective",
    "medium frame from a stepped command platform",
    "full-figure portrait at three-quarter angle",
    "waist-up shot with overlaid interface foreground",
    "portrait at near-profile with center-weighted composition",
    "medium close-up with cinematic lens breathing",
    "slight low-angle half-body framing",
    "front portrait with controlled geometric alignment",
    "shoulder-up crop with dramatic foreground light streaks",
    "full portrait with converging architectural lines",
    "mid-shot from below eye-line",
    "tight headshot with soft peripheral blur",
]

DEPTH_OF_FIELD_STYLES = [
    "shallow depth of field with creamy background separation",
    "cinematic selective focus preserving facial detail",
    "layered depth of field with softly blurred environment",
    "tight focal plane emphasizing eyes and symbolic accessories",
    "controlled depth of field with atmospheric background falloff",
    "medium depth of field with clear subject isolation",
    "deeply cinematic bokeh around holographic lights",
    "portrait focus stack with soft rear diffusion",
]


def has_any_term(text: str, terms: Sequence[str]) -> bool:
    for term in terms:
        if " " in term:
            if term in text:
                return True
            continue
        if re.search(rf"\b{re.escape(term)}\b", text):
            return True
    return False


def infer_rule_key(agent: Agent) -> str:
    role = agent.role.lower()
    dept = agent.department.lower()
    text = f"{role} {dept}"

    if has_any_term(dept, ["executive"]):
        return "executive"
    if has_any_term(dept, ["security", "cybersecurity"]):
        return "security"
    if has_any_term(dept, ["data science", "data"]):
        return "data"
    if has_any_term(dept, ["infrastructure", "platform", "network", "cloud"]):
        return "infrastructure"
    if has_any_term(dept, ["ai research", "ai operations", "ai"]):
        return "ai"
    if has_any_term(dept, ["finance"]):
        return "finance"
    if has_any_term(dept, ["legal", "governance"]):
        return "legal"
    if has_any_term(dept, ["design"]):
        return "design"
    if has_any_term(dept, ["product"]):
        return "product"
    if has_any_term(dept, ["marketing", "brand"]):
        return "marketing"
    if has_any_term(dept, ["sales"]):
        return "sales"
    if has_any_term(dept, ["support", "success"]):
        return "support"
    if has_any_term(dept, ["quality", "qa"]):
        return "quality"
    if has_any_term(dept, ["robotics"]):
        return "robotics"
    if has_any_term(dept, ["iot", "edge"]):
        return "iot"
    if has_any_term(dept, ["biotech", "bio", "biomedical"]):
        return "bio"
    if has_any_term(dept, ["risk"]):
        return "risk"
    if has_any_term(dept, ["operations"]):
        return "operations"

    role_key_terms = [
        ("security", ["security", "ciso", "threat", "zero trust", "forensics"]),
        ("data", ["data scientist", "analytics", "statistical", "data"]),
        ("infrastructure", ["reliability", "platform", "network", "cloud", "infrastructure"]),
        ("ai", ["machine learning", "ml", "autonomous", "model", "ai"]),
        ("finance", ["finance", "financial", "treasury", "accounting"]),
        ("legal", ["legal", "counsel", "governance", "compliance", "policy"]),
        ("design", ["design", "ux", "experience"]),
        ("product", ["product", "roadmap", "strategy lead", "pm"]),
        ("marketing", ["marketing", "brand", "narrative", "growth"]),
        ("sales", ["sales", "solutions consultant", "account executive"]),
        ("support", ["support", "success", "customer"]),
        ("quality", ["quality", "qa", "testing", "assurance"]),
        ("robotics", ["robotics", "mechatronic", "manipulator"]),
        ("iot", ["iot", "edge sensor", "telemetry"]),
        ("bio", ["bioinformatics", "biotech", "genomics", "bio"]),
        ("risk", ["risk", "foresight", "audit"]),
        ("operations", ["operations", "orchestrator"]),
        ("executive", ["chief executive officer", "ceo", "coo", "cto"]),
    ]
    for key, terms in role_key_terms:
        if has_any_term(text, terms):
            return key
    return "default"


def as_agents(raw: Sequence[dict]) -> List[Agent]:
    agents: List[Agent] = []
    seen_codes = set()
    for idx, item in enumerate(raw, start=1):
        if not isinstance(item, dict):
            raise ValueError(f"Agent #{idx} must be an object")
        code = str(item.get("code", "")).strip()
        role = str(item.get("role", "")).strip()
        department = str(item.get("department", "")).strip()
        if not code or not role or not department:
            raise ValueError(f"Agent #{idx} is missing code/role/department")
        if code in seen_codes:
            raise ValueError(f"Duplicate agent code: {code}")
        seen_codes.add(code)
        agents.append(Agent(code=code, role=role, department=department))
    return agents


def load_agents(path: Path | None) -> List[Agent]:
    if path is None:
        return list(DEFAULT_AGENTS)
    raw = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(raw, list):
        raise ValueError("Input JSON must be an array of agents")
    return as_agents(raw)


def ensure_capacity(agents: Sequence[Agent]) -> None:
    n = len(agents)
    pools = {
        "facial_structures": len(FACIAL_STRUCTURES),
        "head_designs": len(HEAD_DESIGNS),
        "clothing_styles": len(CLOTHING_STYLES),
        "accessories": len(ACCESSORIES),
        "palettes": len(PALETTES),
        "poses": len(POSES),
        "camera_angles": len(CAMERA_ANGLES),
    }
    for pool_name, size in pools.items():
        if n > size:
            raise ValueError(
                f"Need at least {n} unique entries for {pool_name}, but only have {size}."
            )


def shuffled(pool: Sequence, rng: random.Random):
    items = list(pool)
    rng.shuffle(items)
    return items


def build_prompt(
    agent: Agent,
    identity: Dict[str, str],
    facial: str,
    head: str,
    clothing: str,
    accessory: str,
    palette: Tuple[str, str],
    pose: str,
    camera_angle: str,
    dof: str,
) -> str:
    primary, accent = palette
    visual_identity = (
        f"{facial}, {head}, {clothing}, {accessory}, "
        f"distinct silhouette defined by {pose}, color palette of {primary} with {accent} accents"
    )
    environment = identity["environment"]
    lighting = identity["lighting"]
    mood = (
        f"{identity['tone']} mood, {identity['energy']} energy, "
        f"{identity['age_impression']}, {identity['archetype']} archetype"
    )
    return (
        f"\"A highly detailed cinematic portrait of {identity['character_description']}, "
        f"{identity['metaphor']}, {visual_identity}, {environment}, {lighting}, "
        f"camera angle: {camera_angle}, {dof}, {mood}, ultra-detailed, professional concept art, "
        f"sharp focus, high realism, consistent NEXUS AI visual universe, 8k quality\""
    )


def generate(agents: Sequence[Agent], seed: int) -> str:
    ensure_capacity(agents)
    rng = random.Random(seed)

    facial_pool = shuffled(FACIAL_STRUCTURES, rng)
    head_pool = shuffled(HEAD_DESIGNS, rng)
    clothing_pool = shuffled(CLOTHING_STYLES, rng)
    accessory_pool = shuffled(ACCESSORIES, rng)
    palette_pool = shuffled(PALETTES, rng)
    pose_pool = shuffled(POSES, rng)
    camera_pool = shuffled(CAMERA_ANGLES, rng)

    ordered_agents = sorted(agents, key=lambda a: a.code)
    blocks: List[str] = []

    for idx, agent in enumerate(ordered_agents):
        rule = ROLE_RULES[infer_rule_key(agent)]
        identity = {
            "metaphor": rule["metaphor"],
            "energy": rule["energy"],
            "tone": rule["tone"],
            "environment": rule["environment"],
            "lighting": rule["lighting"],
            "age_impression": AGE_IMPRESSIONS[idx % len(AGE_IMPRESSIONS)],
            "archetype": [
                "strategist",
                "architect",
                "guardian",
                "explorer",
                "systems thinker",
                "orchestrator",
                "innovator",
                "analyst",
            ][idx % 8],
            "character_description": (
                (
                    f"{'an' if agent.department[:1].lower() in 'aeiou' else 'a'} "
                    f"{agent.department} {agent.role} embodying the NEXUS AI mission"
                )
            ),
        }
        prompt = build_prompt(
            agent=agent,
            identity=identity,
            facial=facial_pool[idx],
            head=head_pool[idx],
            clothing=clothing_pool[idx],
            accessory=accessory_pool[idx],
            palette=palette_pool[idx],
            pose=pose_pool[idx],
            camera_angle=camera_pool[idx],
            dof=DEPTH_OF_FIELD_STYLES[idx % len(DEPTH_OF_FIELD_STYLES)],
        )

        block = "\n".join(
            [
                f"AGENT_CODE: {agent.code}",
                f"ROLE: {agent.role}",
                f"DEPARTMENT: {agent.department}",
                "",
                "AVATAR PROMPT:",
                prompt,
            ]
        )
        blocks.append(block)

    return "\n\n".join(blocks)


def parse_args(argv: Sequence[str]) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate unique cinematic avatar prompts for NEXUS AI agents."
    )
    parser.add_argument(
        "--input",
        type=Path,
        default=None,
        help="Path to JSON array of agents: [{code, role, department}, ...]",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=None,
        help="Optional output text file path.",
    )
    parser.add_argument(
        "--seed",
        type=int,
        default=8800,
        help="Random seed for reproducible uniqueness assignment.",
    )
    return parser.parse_args(argv)


def main(argv: Sequence[str]) -> int:
    args = parse_args(argv)
    try:
        agents = load_agents(args.input)
        result = generate(agents, seed=args.seed)
    except Exception as exc:  # noqa: BLE001 - CLI surface
        print(f"Error: {exc}", file=sys.stderr)
        return 1

    if args.output:
        args.output.write_text(result, encoding="utf-8")
    else:
        print(result)

    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
