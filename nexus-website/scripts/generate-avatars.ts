#!/usr/bin/env npx tsx
/**
 * NEXUS AI — Agent Avatar Generator
 * Generates 195 unique SVG avatar heads, each derived from the agent's <personal> section.
 * Every agent gets a unique face: skin tone, hair style, eye color, expression — all deterministic.
 *
 * Run: cd nexus-website && npx tsx scripts/generate-avatars.ts
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "fs";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ─── PALETTE ────────────────────────────────────────────────────────────────

const SKIN_TONES = [
  { face: "#F4C89A", shadow: "#E8A87C", lip: "#D4826A" },  // warm cream
  { face: "#C8956C", shadow: "#B07A54", lip: "#A05A45" },  // caramel
  { face: "#8D5524", shadow: "#6B3E1A", lip: "#7A3422" },  // deep mahogany
  { face: "#FDD9B5", shadow: "#F0C49A", lip: "#D4876B" },  // porcelain
  { face: "#D4A574", shadow: "#BC8D5C", lip: "#B06A50" },  // olive
  { face: "#E8B89A", shadow: "#D49A7C", lip: "#C4725A" },  // rosy
];

const HAIR_COLORS_BY_AGE = (age: number, seed: number): string => {
  if (age < 30) return ["#1A1A1A", "#3D2B1F", "#2C1810", "#4A3728", "#1E3A5F", "#2D4A1E"][seed % 6];
  if (age < 40) return ["#3D2B1F", "#5C3D2E", "#2C1810", "#6B4A32", "#4A3728", "#1A1A1A"][seed % 6];
  if (age < 50) return ["#555555", "#4A3728", "#3D2B1F", "#888888", "#6B4A32", "#555555"][seed % 6];
  return ["#A0A0A0", "#C0C0C0", "#888888", "#B0B0B0", "#999999", "#D0D0D0"][seed % 6];
};

const EYE_COLORS = [
  "#4A90D9", // blue
  "#6B4A32", // brown
  "#5C7A3E", // hazel
  "#2E7D52", // green
  "#C4872A", // amber
  "#5A6A7A", // slate gray
];

const DEPT_COLORS: Record<string, string> = {
  "01": "#00D9FF", "02": "#10B981", "03": "#3B82F6", "04": "#8B5CF6",
  "05": "#EC4899", "06": "#F59E0B", "07": "#10B981", "08": "#EF4444",
  "09": "#F59E0B", "10": "#EC4899", "11": "#06B6D4", "12": "#8B5CF6",
  "13": "#10B981", "14": "#6366F1", "15": "#3B82F6", "16": "#00D9FF",
  "17": "#F59E0B", "18": "#EF4444", "19": "#7C3AED", "20": "#6B7280",
};

// ─── PARSER ──────────────────────────────────────────────────────────────────

interface AgentPersonal {
  nickname: string;
  age: number;
  about_me: string;
  strengths: string;
  weaknesses: string;
}

interface AgentMeta {
  code: string;
  num: number;
  dept: string;
  tier: number;
  personal: AgentPersonal;
}

function extractTag(text: string, tag: string): string {
  const m = text.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return m ? m[1].trim() : "";
}

function extractNumber(text: string, tag: string): number {
  const val = extractTag(text, tag);
  const n = parseInt(val);
  return isNaN(n) ? 35 : n;
}

function parseAgentFile(filePath: string): AgentMeta | null {
  try {
    const content = readFileSync(filePath, "utf-8");

    // Extract code from filename
    const filename = filePath.split("/").pop() || "";
    const codeMatch = filename.match(/^\d+-(.+)\.md$/);
    const code = codeMatch ? codeMatch[1] : "";
    const numMatch = filename.match(/^(\d+)-/);
    const num = numMatch ? parseInt(numMatch[1]) : 0;

    // Determine department from path
    const deptMatch = filePath.match(/\/(\d+)-/);
    const dept = deptMatch ? deptMatch[1].padStart(2, "0") : "01";

    // Extract tier from content
    const tierMatch = content.match(/<tier>\s*Tier\s*(\d+)/i);
    const tier = tierMatch ? parseInt(tierMatch[1]) : 5;

    // Extract personal section
    const personalSection = extractTag(content, "personal");

    const personal: AgentPersonal = {
      nickname: extractTag(personalSection, "nickname") || code,
      age: extractNumber(personalSection, "age"),
      about_me: extractTag(personalSection, "about_me").replace(/<[^>]+>/g, "").substring(0, 120),
      strengths: extractTag(personalSection, "my_strengths").replace(/<[^>]+>/g, "").substring(0, 80),
      weaknesses: extractTag(personalSection, "my_weaknesses").replace(/<[^>]+>/g, "").substring(0, 80),
    };

    return { code, num, dept, tier, personal };
  } catch {
    return null;
  }
}

// ─── DETERMINISTIC SEED ──────────────────────────────────────────────────────

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h) + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

// ─── SVG FACE PARTS ──────────────────────────────────────────────────────────

function hairStyle(style: number, color: string, faceY: number): string {
  const c = color;
  switch (style % 8) {
    case 0: // Short professional side-part
      return `
        <!-- Hair: short side-part -->
        <ellipse cx="60" cy="${faceY-10}" rx="36" ry="24" fill="${c}"/>
        <rect x="24" y="${faceY-10}" width="72" height="20" rx="0" fill="${c}"/>
        <path d="M24,${faceY+10} Q26,${faceY-15} 60,${faceY-32} Q94,${faceY-15} 96,${faceY+10}" fill="${c}"/>
        <path d="M24,${faceY-2} Q30,${faceY-30} 55,${faceY-34}" stroke="${c}" stroke-width="6" fill="none"/>`;

    case 1: // Short neat business
      return `
        <!-- Hair: short neat -->
        <ellipse cx="60" cy="${faceY-12}" rx="34" ry="22" fill="${c}"/>
        <rect x="26" y="${faceY-12}" width="68" height="18" rx="0" fill="${c}"/>
        <path d="M26,${faceY+6} Q60,${faceY-36} 94,${faceY+6}" fill="${c}"/>`;

    case 2: // Medium waves
      return `
        <!-- Hair: medium waves -->
        <ellipse cx="60" cy="${faceY-8}" rx="36" ry="26" fill="${c}"/>
        <path d="M24,${faceY+18} L24,${faceY-8} Q60,${faceY-38} 96,${faceY-8} L96,${faceY+18}" fill="${c}"/>
        <path d="M24,${faceY+10} Q30,${faceY+20} 24,${faceY+30}" fill="${c}" stroke="${c}" stroke-width="4"/>
        <path d="M96,${faceY+10} Q90,${faceY+20} 96,${faceY+30}" fill="${c}" stroke="${c}" stroke-width="4"/>`;

    case 3: // Short wavy
      return `
        <!-- Hair: short wavy -->
        <ellipse cx="60" cy="${faceY-14}" rx="35" ry="21" fill="${c}"/>
        <path d="M25,${faceY+7} Q60,${faceY-38} 95,${faceY+7}" fill="${c}"/>
        <path d="M26,${faceY+4} Q34,${faceY} 40,${faceY+5} Q46,${faceY+10} 52,${faceY+5}" fill="none" stroke="${c}" stroke-width="3"/>`;

    case 4: // Updo / professional bun
      return `
        <!-- Hair: updo bun -->
        <ellipse cx="60" cy="${faceY-8}" rx="34" ry="20" fill="${c}"/>
        <path d="M26,${faceY+12} Q60,${faceY-34} 94,${faceY+12}" fill="${c}"/>
        <!-- Bun top -->
        <circle cx="60" cy="${faceY-36}" r="11" fill="${c}"/>
        <ellipse cx="60" cy="${faceY-36}" rx="9" ry="7" fill="${c}" opacity="0.7"/>`;

    case 5: // Classic short crew
      return `
        <!-- Hair: crew cut -->
        <ellipse cx="60" cy="${faceY-14}" rx="33" ry="18" fill="${c}"/>
        <path d="M27,${faceY+4} Q60,${faceY-36} 93,${faceY+4}" fill="${c}"/>`;

    case 6: // Long flowing
      return `
        <!-- Hair: long -->
        <ellipse cx="60" cy="${faceY-10}" rx="36" ry="26" fill="${c}"/>
        <path d="M24,${faceY+18} L20,${faceY+60} Q22,${faceY+65} 26,${faceY+60} L28,${faceY+18}" fill="${c}"/>
        <path d="M96,${faceY+18} L100,${faceY+60} Q98,${faceY+65} 94,${faceY+60} L92,${faceY+18}" fill="${c}"/>
        <path d="M24,${faceY+6} Q60,${faceY-38} 96,${faceY+6}" fill="${c}"/>`;

    case 7: // Undercut
    default:
      return `
        <!-- Hair: undercut -->
        <ellipse cx="60" cy="${faceY-16}" rx="32" ry="18" fill="${c}"/>
        <path d="M28,${faceY+2} Q60,${faceY-38} 92,${faceY+2}" fill="${c}"/>
        <line x1="26" y1="${faceY+2}" x2="26" y2="${faceY+18}" stroke="${c}" stroke-width="4"/>
        <line x1="94" y1="${faceY+2}" x2="94" y2="${faceY+18}" stroke="${c}" stroke-width="4"/>`;
  }
}

function eyeStyle(style: number, color: string, eyeY: number): string {
  const lx = 44, rx = 76;
  switch (style % 5) {
    case 0: // Almond eyes
      return `
        <ellipse cx="${lx}" cy="${eyeY}" rx="9" ry="6" fill="white"/>
        <circle  cx="${lx}" cy="${eyeY}" r="4.5"       fill="${color}"/>
        <circle  cx="${lx}" cy="${eyeY}" r="2.5"       fill="#0A0A0A"/>
        <circle  cx="${lx+2}" cy="${eyeY-1.5}" r="1.5" fill="white" opacity="0.8"/>
        <ellipse cx="${rx}" cy="${eyeY}" rx="9" ry="6" fill="white"/>
        <circle  cx="${rx}" cy="${eyeY}" r="4.5"       fill="${color}"/>
        <circle  cx="${rx}" cy="${eyeY}" r="2.5"       fill="#0A0A0A"/>
        <circle  cx="${rx+2}" cy="${eyeY-1.5}" r="1.5" fill="white" opacity="0.8"/>`;

    case 1: // Round eyes
      return `
        <circle cx="${lx}" cy="${eyeY}" r="8" fill="white"/>
        <circle cx="${lx}" cy="${eyeY}" r="5" fill="${color}"/>
        <circle cx="${lx}" cy="${eyeY}" r="3" fill="#0A0A0A"/>
        <circle cx="${lx+2}" cy="${eyeY-2}" r="1.5" fill="white" opacity="0.8"/>
        <circle cx="${rx}" cy="${eyeY}" r="8" fill="white"/>
        <circle cx="${rx}" cy="${eyeY}" r="5" fill="${color}"/>
        <circle cx="${rx}" cy="${eyeY}" r="3" fill="#0A0A0A"/>
        <circle cx="${rx+2}" cy="${eyeY-2}" r="1.5" fill="white" opacity="0.8"/>`;

    case 2: // Narrow focused eyes
      return `
        <ellipse cx="${lx}" cy="${eyeY}" rx="9" ry="4.5" fill="white"/>
        <circle  cx="${lx}" cy="${eyeY}" r="4" fill="${color}"/>
        <circle  cx="${lx}" cy="${eyeY}" r="2.5" fill="#0A0A0A"/>
        <circle  cx="${lx+1.5}" cy="${eyeY-1}" r="1.2" fill="white" opacity="0.8"/>
        <ellipse cx="${rx}" cy="${eyeY}" rx="9" ry="4.5" fill="white"/>
        <circle  cx="${rx}" cy="${eyeY}" r="4" fill="${color}"/>
        <circle  cx="${rx}" cy="${eyeY}" r="2.5" fill="#0A0A0A"/>
        <circle  cx="${rx+1.5}" cy="${eyeY-1}" r="1.2" fill="white" opacity="0.8"/>`;

    case 3: // Deep-set eyes with shadow
      return `
        <ellipse cx="${lx}" cy="${eyeY}" rx="9" ry="6" fill="#E8D8C8" opacity="0.5"/>
        <ellipse cx="${lx}" cy="${eyeY}" rx="9" ry="6" fill="white"/>
        <circle  cx="${lx}" cy="${eyeY}" r="5" fill="${color}"/>
        <circle  cx="${lx}" cy="${eyeY}" r="3" fill="#0A0A0A"/>
        <circle  cx="${lx+2}" cy="${eyeY-2}" r="1.5" fill="white" opacity="0.8"/>
        <ellipse cx="${rx}" cy="${eyeY}" rx="9" ry="6" fill="white"/>
        <circle  cx="${rx}" cy="${eyeY}" r="5" fill="${color}"/>
        <circle  cx="${rx}" cy="${eyeY}" r="3" fill="#0A0A0A"/>
        <circle  cx="${rx+2}" cy="${eyeY-2}" r="1.5" fill="white" opacity="0.8"/>`;

    case 4: // Wide expressive eyes
    default:
      return `
        <ellipse cx="${lx}" cy="${eyeY}" rx="10" ry="7" fill="white"/>
        <circle  cx="${lx}" cy="${eyeY}" r="5.5" fill="${color}"/>
        <circle  cx="${lx}" cy="${eyeY}" r="3"   fill="#0A0A0A"/>
        <circle  cx="${lx+2.5}" cy="${eyeY-2}" r="1.8" fill="white" opacity="0.9"/>
        <ellipse cx="${rx}" cy="${eyeY}" rx="10" ry="7" fill="white"/>
        <circle  cx="${rx}" cy="${eyeY}" r="5.5" fill="${color}"/>
        <circle  cx="${rx}" cy="${eyeY}" r="3"   fill="#0A0A0A"/>
        <circle  cx="${rx+2.5}" cy="${eyeY-2}" r="1.8" fill="white" opacity="0.9"/>`;
  }
}

function eyebrowStyle(style: number, hairColor: string, eyeY: number): string {
  const by = eyeY - 11;
  const lx = 44, rx = 76;
  switch (style % 4) {
    case 0: return `<path d="M${lx-9},${by+2} Q${lx},${by-4} ${lx+9},${by+2}" fill="none" stroke="${hairColor}" stroke-width="2.5" stroke-linecap="round"/>
                   <path d="M${rx-9},${by+2} Q${rx},${by-4} ${rx+9},${by+2}" fill="none" stroke="${hairColor}" stroke-width="2.5" stroke-linecap="round"/>`;
    case 1: return `<line x1="${lx-9}" y1="${by+3}" x2="${lx+9}" y2="${by}" stroke="${hairColor}" stroke-width="2.5" stroke-linecap="round"/>
                   <line x1="${rx-9}" y1="${by}" x2="${rx+9}" y2="${by+3}" stroke="${hairColor}" stroke-width="2.5" stroke-linecap="round"/>`;
    case 2: return `<path d="M${lx-9},${by+1} Q${lx-2},${by-5} ${lx+9},${by+3}" fill="none" stroke="${hairColor}" stroke-width="3" stroke-linecap="round"/>
                   <path d="M${rx-9},${by+3} Q${rx+2},${by-5} ${rx+9},${by+1}" fill="none" stroke="${hairColor}" stroke-width="3" stroke-linecap="round"/>`;
    case 3:
    default:
      return `<path d="M${lx-9},${by} Q${lx},${by-6} ${lx+9},${by+1}" fill="none" stroke="${hairColor}" stroke-width="2" stroke-linecap="round"/>
             <path d="M${rx-9},${by+1} Q${rx},${by-6} ${rx+9},${by}" fill="none" stroke="${hairColor}" stroke-width="2" stroke-linecap="round"/>`;
  }
}

function mouthExpression(style: number, lipColor: string, mouthY: number): string {
  switch (style % 5) {
    case 0: // warm smile
      return `<path d="M${50},${mouthY} Q60,${mouthY+10} ${70},${mouthY}" fill="none" stroke="${lipColor}" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M${52},${mouthY+1} Q60,${mouthY+9} ${68},${mouthY+1}" fill="${lipColor}" opacity="0.25"/>`;
    case 1: // neutral professional
      return `<line x1="50" y1="${mouthY+2}" x2="70" y2="${mouthY+2}" stroke="${lipColor}" stroke-width="2.5" stroke-linecap="round"/>`;
    case 2: // confident slight smile
      return `<path d="M48,${mouthY+2} Q60,${mouthY+8} 72,${mouthY+2}" fill="none" stroke="${lipColor}" stroke-width="2.5" stroke-linecap="round"/>`;
    case 3: // focused serious
      return `<path d="M50,${mouthY+4} Q60,${mouthY+1} 70,${mouthY+4}" fill="none" stroke="${lipColor}" stroke-width="2" stroke-linecap="round"/>`;
    case 4: // subtle thoughtful
    default:
      return `<path d="M50,${mouthY+3} Q55,${mouthY+7} 60,${mouthY+4} Q65,${mouthY+1} 70,${mouthY+3}" fill="none" stroke="${lipColor}" stroke-width="2" stroke-linecap="round"/>`;
  }
}

function noseShape(style: number, shadowColor: string, noseY: number): string {
  switch (style % 3) {
    case 0: return `<path d="M58,${noseY} L55,${noseY+12} Q60,${noseY+14} 65,${noseY+12} L62,${noseY}" fill="none" stroke="${shadowColor}" stroke-width="1.25" stroke-linecap="round" opacity="0.6"/>`;
    case 1: return `<line x1="60" y1="${noseY}" x2="60" y2="${noseY+10}" stroke="${shadowColor}" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
                   <path d="M55,${noseY+10} Q60,${noseY+14} 65,${noseY+10}" fill="none" stroke="${shadowColor}" stroke-width="1.25" stroke-linecap="round" opacity="0.5"/>`;
    case 2:
    default:
      return `<path d="M57,${noseY+5} Q55,${noseY+12} 60,${noseY+13} Q65,${noseY+12} 63,${noseY+5}" fill="none" stroke="${shadowColor}" stroke-width="1.25" opacity="0.5"/>`;
  }
}

function accessory(style: number, agentNum: number, eyeY: number): string {
  if (style % 5 === 0) {
    // Glasses
    const lx = 44, rx = 76, gy = eyeY;
    return `
      <!-- Glasses -->
      <rect x="${lx-11}" y="${gy-7}" width="22" height="14" rx="4" fill="none" stroke="#888" stroke-width="1.5" opacity="0.7"/>
      <rect x="${rx-11}" y="${gy-7}" width="22" height="14" rx="4" fill="none" stroke="#888" stroke-width="1.5" opacity="0.7"/>
      <line x1="${lx+11}" y1="${gy}" x2="${rx-11}" y2="${gy}" stroke="#888" stroke-width="1.5" opacity="0.7"/>
      <line x1="${lx-11}" y1="${gy}" x2="${lx-16}" y2="${gy-1}" stroke="#888" stroke-width="1.5" opacity="0.7"/>
      <line x1="${rx+11}" y1="${gy}" x2="${rx+16}" y2="${gy-1}" stroke="#888" stroke-width="1.5" opacity="0.7"/>`;
  }
  if (style % 7 === 0 && agentNum % 3 === 0) {
    // Earring (subtle dot)
    return `<circle cx="22" cy="${eyeY+8}" r="2.5" fill="#C0A060" opacity="0.8"/>`;
  }
  return "";
}

function tierBadge(tier: number): string {
  const tierColors: Record<number, string> = {
    0: "#F59E0B", 1: "#00D9FF", 2: "#8B5CF6", 3: "#06B6D4",
    4: "#10B981", 5: "#F59E0B", 6: "#3B82F6", 7: "#9CA3AF",
    8: "#EF4444", 9: "#7C3AED"
  };
  const color = tierColors[tier] || "#6B7280";
  const label = tier === 0 ? "C0" : `T${tier}`;
  return `
    <!-- Tier badge -->
    <circle cx="92" cy="92" r="12" fill="#0A0E27" stroke="${color}" stroke-width="2"/>
    <text x="92" y="97" font-family="'Arial Black',Arial,sans-serif" font-size="9" font-weight="900"
          fill="${color}" text-anchor="middle">${label}</text>`;
}

// ─── MAIN AVATAR GENERATOR ──────────────────────────────────────────────────

function generateAvatarSVG(agent: AgentMeta): string {
  const seed = hashString(agent.code);
  const numSeed = agent.num;

  const skinIdx = (numSeed + seed) % 6;
  const skin = SKIN_TONES[skinIdx];

  const hairColor = HAIR_COLORS_BY_AGE(agent.personal.age, (seed + numSeed) % 6);
  const hairStyleIdx = (seed + numSeed * 3) % 8;

  const eyeColor = EYE_COLORS[(seed * 3 + numSeed) % 6];
  const eyeStyleIdx = (seed + numSeed) % 5;

  const eyebrowIdx = (seed * 7 + numSeed) % 4;
  const mouthIdx = (seed + numSeed * 7) % 5;
  const noseIdx = (seed * 5) % 3;
  const accessoryIdx = seed % 10;

  const deptColor = DEPT_COLORS[agent.dept] || "#00D9FF";

  // Face positioning
  const faceY = 58;    // center Y of face circle
  const eyeY = 54;
  const noseY = 62;
  const mouthY = 74;

  const nickname = agent.personal.nickname
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .substring(0, 14);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120" role="img">
  <title>${agent.code} — ${nickname}</title>
  <desc>NEXUS AI Agent ${agent.num}: ${agent.code}, ${nickname}, Age ${agent.personal.age}</desc>

  <!-- Department color background ring -->
  <circle cx="60" cy="60" r="58" fill="${deptColor}" opacity="0.08"/>
  <circle cx="60" cy="60" r="58" fill="none" stroke="${deptColor}" stroke-width="2.5"/>

  <!-- Inner background -->
  <circle cx="60" cy="60" r="54" fill="#0A0E27" opacity="0.7"/>

  <!-- Neck -->
  <rect x="48" y="${faceY+32}" width="24" height="22" rx="4" fill="${skin.face}"/>
  <rect x="48" y="${faceY+32}" width="24" height="4"  rx="0" fill="${skin.shadow}" opacity="0.4"/>

  <!-- Shoulders hint -->
  <path d="M28,120 Q28,${faceY+62} 48,${faceY+54} L72,${faceY+54} Q92,${faceY+62} 92,120"
        fill="${skin.shadow}" opacity="0.5"/>

  <!-- Hair (behind face) -->
  ${hairStyle(hairStyleIdx, hairColor, faceY)}

  <!-- Face oval -->
  <ellipse cx="60" cy="${faceY}" rx="36" ry="42" fill="${skin.face}"/>

  <!-- Facial shadow / cheek depth -->
  <ellipse cx="60" cy="${faceY+8}" rx="36" ry="34" fill="${skin.shadow}" opacity="0.08"/>

  <!-- Ears -->
  <ellipse cx="24" cy="${faceY+2}" rx="5" ry="8"  fill="${skin.face}"/>
  <ellipse cx="24" cy="${faceY+2}" rx="3" ry="5"  fill="${skin.shadow}" opacity="0.4"/>
  <ellipse cx="96" cy="${faceY+2}" rx="5" ry="8"  fill="${skin.face}"/>
  <ellipse cx="96" cy="${faceY+2}" rx="3" ry="5"  fill="${skin.shadow}" opacity="0.4"/>

  <!-- Eyebrows -->
  ${eyebrowStyle(eyebrowIdx, hairColor, eyeY)}

  <!-- Eyes -->
  ${eyeStyle(eyeStyleIdx, eyeColor, eyeY)}

  <!-- Nose -->
  ${noseShape(noseIdx, skin.shadow, noseY)}

  <!-- Mouth -->
  ${mouthExpression(mouthIdx, skin.lip, mouthY)}

  <!-- Accessories -->
  ${accessory(accessoryIdx, agent.num, eyeY)}

  <!-- Tier badge -->
  ${tierBadge(agent.tier)}

  <!-- Agent code label -->
  <text x="60" y="116" font-family="'Arial',sans-serif" font-size="7" font-weight="600"
        fill="${deptColor}" text-anchor="middle" opacity="0.9">${agent.code}</text>
</svg>`;
}

// ─── FILE DISCOVERY ──────────────────────────────────────────────────────────

const ROOT = resolve(__dirname, "../../agents");
const OUT_DIR = resolve(__dirname, "../public/brand/avatars/agents");

mkdirSync(OUT_DIR, { recursive: true });

let processed = 0;
let skipped = 0;

const deptDirs = readdirSync(ROOT).filter((d) => /^\d+-/.test(d)).sort();

for (const deptDir of deptDirs) {
  const deptPath = join(ROOT, deptDir);
  try {
    const files = readdirSync(deptPath).filter((f) => f.endsWith(".md")).sort();
    for (const file of files) {
      const filePath = join(deptPath, file);
      const agent = parseAgentFile(filePath);
      if (!agent || !agent.code) { skipped++; continue; }

      const svg = generateAvatarSVG(agent);
      const outPath = join(OUT_DIR, `${agent.code}.svg`);
      writeFileSync(outPath, svg, "utf-8");
      processed++;

      if (processed % 20 === 0) {
        console.log(`  ✓ ${processed} avatars generated...`);
      }
    }
  } catch (e) {
    // skip unreadable dirs
  }
}

console.log(`\n✅ NEXUS AI Avatar Generation Complete!`);
console.log(`   Generated: ${processed} unique agent avatars`);
console.log(`   Skipped:   ${skipped} files`);
console.log(`   Output:    ${OUT_DIR}`);
