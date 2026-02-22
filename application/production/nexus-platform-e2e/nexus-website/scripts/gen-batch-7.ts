/**
 * gen-batch-7.ts
 * Generates unique SVG avatars for 27 agents across:
 *   - Dept 09 Sales-Revenue (CATALYST archetype: U-magnet + spark arrows, #F97316 orange)
 *   - Dept 10 Marketing     (SIGNAL archetype: megaphone + broadcast waves, #A855F7 purple)
 *   - Dept 11 Customer Success (BEACON archetype: lighthouse + pulse rings + open arms, #06B6D4 cyan)
 *
 * Each agent has a unique role-specific symbol inside the archetype's core element.
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_DIR = path.resolve(
  __dirname,
  "../public/brand/avatars/agents"
);

// ─── SHARED HELPERS ─────────────────────────────────────────────────────────

/** Radial gradient dark background, shared by all three archetypes */
const BG_DEFS = `<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#1a1f3a"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
</defs>`;

const BG_RECT = `<rect width="100" height="100" rx="18" fill="url(#bg)"/>`;

function wrap(inner: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">\n${BG_DEFS}\n${BG_RECT}\n${inner}\n</svg>`;
}

// ─── DEPT 09 — CATALYST (U-Magnet) ──────────────────────────────────────────
// U-magnet shape centred at (50, 48)
// Left arm: x=30-38, right arm: x=62-70, curved bottom ~y=28-62
// Caps on top of each arm: N (left) S (right)
// Central core circle at (50,50) containing the role symbol
// Spark arrows radiate outward

/** Build the magnet body + caps + ambient ring */
function magnetBody(
  armStroke: string,
  armWidth: number,
  capFill: string,
  capAccent: string,
  glowR: number
): string {
  // U arch: left arm 30-38, right arm 62-70, arc bottom
  return `
  <!-- ambient ring -->
  <circle cx="50" cy="50" r="${glowR}" fill="rgba(249,115,22,0.07)" stroke="${armStroke}" stroke-width="0.4" opacity="0.35"/>
  <!-- U arch body -->
  <path d="M34,26 L34,56 Q34,76 50,76 Q66,76 66,56 L66,26"
        stroke="${armStroke}" stroke-width="${armWidth}" fill="none" stroke-linecap="round"/>
  <!-- N cap -->
  <rect x="27" y="21" width="14" height="9" rx="2.5" fill="${capFill}"/>
  <text x="34" y="28.5" text-anchor="middle" fill="${capAccent}"
        font-size="5.5" font-weight="bold" font-family="monospace">N</text>
  <!-- S cap -->
  <rect x="59" y="21" width="14" height="9" rx="2.5" fill="${capFill}"/>
  <text x="66" y="28.5" text-anchor="middle" fill="${capAccent}"
        font-size="5.5" font-weight="bold" font-family="monospace">S</text>
`.trim();
}

/** Spark arrows: count, length, starting radius, color, offset angle */
function sparks(
  count: number,
  r0: number,
  r1: number,
  color: string,
  angleOffset = 0,
  opacity = 0.7
): string {
  const lines: string[] = [];
  for (let i = 0; i < count; i++) {
    const a = ((360 / count) * i + angleOffset) * (Math.PI / 180);
    const x0 = 50 + r0 * Math.cos(a);
    const y0 = 50 + r0 * Math.sin(a);
    const x1 = 50 + r1 * Math.cos(a);
    const y1 = 50 + r1 * Math.sin(a);
    // arrowhead
    const dx = x1 - x0;
    const dy = y1 - y0;
    const len = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / len;
    const uy = dy / len;
    const px = -uy;
    const py = ux;
    const ax = x1 - ux * 4;
    const ay = y1 - uy * 4;
    lines.push(
      `<line x1="${x0.toFixed(1)}" y1="${y0.toFixed(1)}" x2="${x1.toFixed(1)}" y2="${y1.toFixed(1)}" stroke="${color}" stroke-width="1.4" opacity="${opacity}"/>`
    );
    lines.push(
      `<polygon points="${(ax + px * 2).toFixed(1)},${(ay + py * 2).toFixed(1)} ${(ax - px * 2).toFixed(1)},${(ay - py * 2).toFixed(1)} ${x1.toFixed(1)},${y1.toFixed(1)}" fill="${color}" opacity="${opacity}"/>`
    );
  }
  return lines.join("\n");
}

/** Core circle background for magnet symbol */
function coreCircle(r: number, strokeColor: string): string {
  return `<circle cx="50" cy="50" r="${r}" fill="#0d0800" stroke="${strokeColor}" stroke-width="1.5"/>`;
}

// ── SALES AVATARS ─────────────────────────────────────────────────────────────

const SALES_COLOR = "#F97316";
const SALES_DARK = "#0d0800";

// VP-SALES: largest magnet, TROPHY inside core, 6 spark arrows, gold accent
const VP_SALES = wrap(`
  ${magnetBody(SALES_COLOR, 5.5, "#FFD700", SALES_DARK, 40)}
  ${coreCircle(16, SALES_COLOR)}
  <!-- trophy cup -->
  <path d="M44,55 L44,44 Q44,40 50,40 Q56,40 56,44 L56,55 Z" fill="${SALES_COLOR}" opacity="0.95"/>
  <rect x="46.5" y="55" width="7" height="2.5" rx="1" fill="#FFD700"/>
  <rect x="44" y="57.5" width="12" height="2" rx="1" fill="#FFD700"/>
  <!-- trophy handles -->
  <path d="M44,44 Q40,44 40,48 Q40,52 44,52" stroke="#FFD700" stroke-width="1.2" fill="none"/>
  <path d="M56,44 Q60,44 60,48 Q60,52 56,52" stroke="#FFD700" stroke-width="1.2" fill="none"/>
  ${sparks(6, 20, 36, SALES_COLOR, 0, 0.8)}
  ${sparks(6, 20, 36, "#FFD700", 30, 0.4)}
`.trim());

// DIR-SALES: TARGET (bullseye) inside core, 4 sparks
const DIR_SALES = wrap(`
  ${magnetBody(SALES_COLOR, 4.5, SALES_COLOR, SALES_DARK, 37)}
  ${coreCircle(14, SALES_COLOR)}
  <!-- bullseye -->
  <circle cx="50" cy="50" r="10" fill="none" stroke="${SALES_COLOR}" stroke-width="1"/>
  <circle cx="50" cy="50" r="6" fill="none" stroke="${SALES_COLOR}" stroke-width="1.2"/>
  <circle cx="50" cy="50" r="2.5" fill="${SALES_COLOR}" opacity="0.95"/>
  ${sparks(4, 18, 33, SALES_COLOR, 45, 0.7)}
`.trim());

// MGR-SALES: TEAM DOTS (3 circles connected) inside core
const MGR_SALES = wrap(`
  ${magnetBody(SALES_COLOR, 4, SALES_COLOR, SALES_DARK, 36)}
  ${coreCircle(13, SALES_COLOR)}
  <!-- team dot — top center -->
  <circle cx="50" cy="43" r="2.8" fill="${SALES_COLOR}" opacity="0.95"/>
  <!-- bottom left dot -->
  <circle cx="44" cy="54" r="2.5" fill="${SALES_COLOR}" opacity="0.8"/>
  <!-- bottom right dot -->
  <circle cx="56" cy="54" r="2.5" fill="${SALES_COLOR}" opacity="0.8"/>
  <!-- connecting lines -->
  <line x1="50" y1="45.5" x2="44.5" y2="52" stroke="${SALES_COLOR}" stroke-width="1.2" opacity="0.7"/>
  <line x1="50" y1="45.5" x2="55.5" y2="52" stroke="${SALES_COLOR}" stroke-width="1.2" opacity="0.7"/>
  <line x1="46.5" y1="54" x2="53.5" y2="54" stroke="${SALES_COLOR}" stroke-width="1" opacity="0.5"/>
  ${sparks(3, 17, 31, SALES_COLOR, 20, 0.65)}
`.trim());

// ENT-AE: ENTERPRISE BUILDING inside core, large powerful magnet
const ENT_AE = wrap(`
  ${magnetBody(SALES_COLOR, 5, SALES_COLOR, SALES_DARK, 38)}
  ${coreCircle(15, SALES_COLOR)}
  <!-- enterprise building -->
  <rect x="43" y="46" width="14" height="12" rx="1" fill="${SALES_COLOR}" opacity="0.9"/>
  <!-- roof triangle -->
  <polygon points="50,40 43,46 57,46" fill="${SALES_COLOR}" opacity="0.75"/>
  <!-- windows -->
  <rect x="45" y="48" width="3" height="3" rx="0.5" fill="${SALES_DARK}"/>
  <rect x="52" y="48" width="3" height="3" rx="0.5" fill="${SALES_DARK}"/>
  <rect x="45" y="53" width="3" height="3" rx="0.5" fill="${SALES_DARK}"/>
  <rect x="52" y="53" width="3" height="3" rx="0.5" fill="${SALES_DARK}"/>
  <!-- door -->
  <rect x="48.5" y="54" width="3" height="4" rx="0.5" fill="${SALES_DARK}" opacity="0.7"/>
  ${sparks(5, 19, 34, SALES_COLOR, 10, 0.7)}
`.trim());

// AE: HANDSHAKE inside core
const AE = wrap(`
  ${magnetBody(SALES_COLOR, 4, SALES_COLOR, SALES_DARK, 35)}
  ${coreCircle(13, SALES_COLOR)}
  <!-- handshake — two hands meeting in centre -->
  <!-- left hand -->
  <path d="M38,50 Q42,47 47,49 L49,51" stroke="${SALES_COLOR}" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- right hand -->
  <path d="M62,50 Q58,47 53,49 L51,51" stroke="${SALES_COLOR}" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- clasp centre -->
  <circle cx="50" cy="50" r="2.5" fill="${SALES_COLOR}" opacity="0.95"/>
  <!-- fingers left -->
  <line x1="45" y1="47" x2="43" y2="44" stroke="${SALES_COLOR}" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>
  <line x1="47" y1="46" x2="46" y2="43" stroke="${SALES_COLOR}" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>
  <!-- fingers right -->
  <line x1="55" y1="47" x2="57" y2="44" stroke="${SALES_COLOR}" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>
  <line x1="53" y1="46" x2="54" y2="43" stroke="${SALES_COLOR}" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>
  ${sparks(4, 17, 30, SALES_COLOR, 0, 0.65)}
`.trim());

// BDR: PHONE/CALL symbol, MANY sparks (high energy)
const BDR = wrap(`
  ${magnetBody(SALES_COLOR, 3.8, SALES_COLOR, SALES_DARK, 35)}
  ${coreCircle(13, SALES_COLOR)}
  <!-- phone handset -->
  <path d="M43,44 Q43,41 46,41 L48,43 Q48,45 46,46 Q48,50 54,52 Q55,50 57,50 L59,52 Q59,55 56,55 Q50,55 46,51 Q42,47 43,44 Z"
        fill="${SALES_COLOR}" opacity="0.95"/>
  <!-- call arc -->
  <path d="M58,44 Q64,50 58,56" stroke="${SALES_COLOR}" stroke-width="1.3" fill="none" opacity="0.6" stroke-linecap="round"/>
  ${sparks(8, 17, 32, SALES_COLOR, 0, 0.75)}
`.trim());

// SALES-ENG: `</>` CODE inside, cyan+orange dual accent
const SALES_ENG = wrap(`
  ${magnetBody(SALES_COLOR, 4, SALES_COLOR, SALES_DARK, 36)}
  ${coreCircle(14, "#06B6D4")}
  <!-- code brackets -->
  <text x="50" y="53" text-anchor="middle" fill="${SALES_COLOR}"
        font-size="11" font-weight="bold" font-family="monospace">&lt;/&gt;</text>
  ${sparks(4, 18, 32, SALES_COLOR, 0, 0.65)}
  ${sparks(4, 18, 32, "#06B6D4", 45, 0.45)}
`.trim());

// SOL-ARCH: ARCHITECTURE DIAGRAM (boxes+arrows) inside core
const SOL_ARCH = wrap(`
  ${magnetBody(SALES_COLOR, 4.5, SALES_COLOR, SALES_DARK, 37)}
  ${coreCircle(14, SALES_COLOR)}
  <!-- top box -->
  <rect x="46" y="41" width="8" height="5" rx="1" fill="${SALES_COLOR}" opacity="0.9"/>
  <!-- bottom left box -->
  <rect x="41" y="52" width="7" height="5" rx="1" fill="${SALES_COLOR}" opacity="0.75"/>
  <!-- bottom right box -->
  <rect x="52" y="52" width="7" height="5" rx="1" fill="${SALES_COLOR}" opacity="0.75"/>
  <!-- arrows down-left & down-right -->
  <line x1="50" y1="46" x2="44.5" y2="52" stroke="${SALES_COLOR}" stroke-width="1.2" opacity="0.8" marker-end="url(#ah)"/>
  <line x1="50" y1="46" x2="55.5" y2="52" stroke="${SALES_COLOR}" stroke-width="1.2" opacity="0.8"/>
  <!-- mini arrowheads -->
  <polygon points="43,52 46,50 45,53" fill="${SALES_COLOR}" opacity="0.8"/>
  <polygon points="57,52 54,50 55,53" fill="${SALES_COLOR}" opacity="0.8"/>
  ${sparks(5, 18, 33, SALES_COLOR, 20, 0.65)}
`.trim());

// ACCT-MGR: KEY symbol inside core
const ACCT_MGR = wrap(`
  ${magnetBody(SALES_COLOR, 4, SALES_COLOR, SALES_DARK, 35)}
  ${coreCircle(13, SALES_COLOR)}
  <!-- key ring -->
  <circle cx="47" cy="48" r="4.5" fill="none" stroke="${SALES_COLOR}" stroke-width="2"/>
  <!-- key blade -->
  <line x1="51" y1="49" x2="60" y2="55" stroke="${SALES_COLOR}" stroke-width="2.5" stroke-linecap="round"/>
  <!-- key teeth -->
  <line x1="55" y1="52.2" x2="55" y2="55.2" stroke="${SALES_COLOR}" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
  <line x1="58" y1="54" x2="58" y2="57" stroke="${SALES_COLOR}" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
  ${sparks(4, 17, 30, SALES_COLOR, 0, 0.6)}
`.trim());

// REVOPS: GEAR + DOLLAR inside core (revenue ops)
const REVOPS = wrap(`
  ${magnetBody(SALES_COLOR, 4, SALES_COLOR, SALES_DARK, 36)}
  ${coreCircle(14, SALES_COLOR)}
  <!-- gear outer ring -->
  <circle cx="50" cy="50" r="9" fill="none" stroke="${SALES_COLOR}" stroke-width="2" opacity="0.5" stroke-dasharray="4 2"/>
  <!-- gear teeth via small rects around circumference -->
  ${[0,45,90,135,180,225,270,315].map(a => {
    const r = Math.PI * a / 180;
    const tx = 50 + 9 * Math.cos(r);
    const ty = 50 + 9 * Math.sin(r);
    return `<circle cx="${tx.toFixed(1)}" cy="${ty.toFixed(1)}" r="1.8" fill="${SALES_COLOR}" opacity="0.85"/>`;
  }).join("\n  ")}
  <!-- inner hub -->
  <circle cx="50" cy="50" r="5" fill="${SALES_DARK}"/>
  <!-- dollar sign -->
  <text x="50" y="53.5" text-anchor="middle" fill="${SALES_COLOR}"
        font-size="7.5" font-weight="bold" font-family="monospace">$</text>
  ${sparks(4, 18, 32, SALES_COLOR, 22, 0.65)}
`.trim());

// ─── DEPT 10 — SIGNAL (Megaphone) ───────────────────────────────────────────
// Megaphone body pointing right-ish, centred around (50, 50)
// Bell mouth open to the left, handle/emitter to the right
// "Eye" = small circle in the bell where the role symbol sits
// Broadcast concentric arcs on the left
// VP has 4 rings + starburst, others 2-3 rings

const MKT_COLOR = "#A855F7";
const MKT_DARK = "#0f0a1f";

/** Megaphone: trapezoid bell + cylindrical body + broadcast arcs on left */
function megaphoneBase(
  bellScale: number,   // 1 = standard
  arcCount: number,
  color: string,
  extraRayCount = 0
): string {
  // Bell: wide left, narrow right
  // Bell left edge x ~ 20, right edge x ~ 55 (scale by bellScale)
  const bL = 20;           // left x (mouth)
  const bTop = 50 - 24 * bellScale;
  const bBot = 50 + 24 * bellScale;
  const bR = 55;           // right x (neck)
  const nTop = 50 - 10;
  const nBot = 50 + 10;

  // Body (cylindrical cap on right)
  const bodyR = bR;
  const bodyEnd = 78;

  let arcs = "";
  for (let i = 0; i < arcCount; i++) {
    const r = 14 + i * 10;
    const opac = 0.55 - i * 0.1;
    const sw = 1.6 - i * 0.2;
    arcs += `<path d="M${bL},${50 - r * 0.6} Q${bL - r * 0.8},50 ${bL},${50 + r * 0.6}"
      fill="none" stroke="${color}" stroke-width="${sw}" opacity="${opac}" stroke-linecap="round"/>\n  `;
  }

  let rays = "";
  if (extraRayCount > 0) {
    for (let i = 0; i < extraRayCount; i++) {
      const a = ((360 / extraRayCount) * i) * (Math.PI / 180);
      const x1 = bL + 6 * Math.cos(a);
      const y1 = 50 + 6 * Math.sin(a);
      const x2 = bL + 14 * Math.cos(a);
      const y2 = 50 + 14 * Math.sin(a);
      rays += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${color}" stroke-width="1.2" opacity="0.45"/>\n  `;
    }
  }

  return `
  ${arcs}${rays}
  <!-- megaphone bell -->
  <path d="M${bL},${bTop.toFixed(1)} L${bR},${nTop} L${bR},${nBot} L${bL},${bBot.toFixed(1)} Z"
        fill="${MKT_DARK}" stroke="${color}" stroke-width="2"/>
  <!-- body/barrel -->
  <rect x="${bodyR}" y="${nTop}" width="${bodyEnd - bodyR}" height="20" rx="3"
        fill="${MKT_DARK}" stroke="${color}" stroke-width="1.5"/>
  <!-- speaker ring on body -->
  <circle cx="78" cy="50" r="5" fill="${MKT_DARK}" stroke="${color}" stroke-width="1.5"/>
  <circle cx="78" cy="50" r="2.5" fill="${color}" opacity="0.8"/>
  `.trim();
}

/** Eye circle in the megaphone bell */
function megaphoneEye(r: number, color: string): string {
  return `<circle cx="36" cy="50" r="${r}" fill="${MKT_DARK}" stroke="${color}" stroke-width="1.3"/>`;
}

// VP-MKT: largest megaphone, BRAND CROWN in eye, 4 wave rings + starburst rays
const VP_MKT = wrap(`
  ${megaphoneBase(1.15, 4, MKT_COLOR, 8)}
  ${megaphoneEye(9, MKT_COLOR)}
  <!-- crown in eye -->
  <polygon points="30,55 30,46 33,50 36,45 39,50 42,46 42,55"
           fill="${MKT_COLOR}" opacity="0.9"/>
  <!-- crown jewels -->
  <circle cx="33" cy="48.5" r="1" fill="#FFD700"/>
  <circle cx="36" cy="46.5" r="1.2" fill="#FFD700"/>
  <circle cx="39" cy="48.5" r="1" fill="#FFD700"/>
`.trim());

// PMM: PRODUCT BOX in eye
const PMM = wrap(`
  ${megaphoneBase(1, 2, MKT_COLOR)}
  ${megaphoneEye(8, MKT_COLOR)}
  <!-- 3D product box isometric -->
  <rect x="30" y="47" width="10" height="9" rx="1" fill="${MKT_COLOR}" opacity="0.85"/>
  <polygon points="30,47 35,43 45,43 40,47" fill="${MKT_COLOR}" opacity="0.65"/>
  <polygon points="40,47 45,43 45,52 40,56" fill="${MKT_COLOR}" opacity="0.5"/>
`.trim());

// GROWTH-MKT: ROCKET in eye, many waves, growth energy
const GROWTH_MKT = wrap(`
  ${megaphoneBase(1, 3, MKT_COLOR)}
  ${megaphoneEye(8, MKT_COLOR)}
  <!-- rocket body -->
  <ellipse cx="36" cy="50" rx="3" ry="6" fill="${MKT_COLOR}" opacity="0.9"/>
  <!-- nose -->
  <polygon points="36,42 33,47 39,47" fill="${MKT_COLOR}" opacity="0.95"/>
  <!-- fins -->
  <polygon points="33,55 31,60 35,57" fill="${MKT_COLOR}" opacity="0.65"/>
  <polygon points="39,55 41,60 37,57" fill="${MKT_COLOR}" opacity="0.65"/>
  <!-- exhaust -->
  <circle cx="36" cy="57.5" r="2" fill="#FFD700" opacity="0.7"/>
  <circle cx="36" cy="59" r="1.2" fill="#F97316" opacity="0.5"/>
`.trim());

// CONTENT-MKT: PENCIL/QUILL in eye
const CONTENT_MKT = wrap(`
  ${megaphoneBase(1, 2, MKT_COLOR)}
  ${megaphoneEye(8, MKT_COLOR)}
  <!-- pencil body -->
  <rect x="32" y="45" width="4.5" height="12" rx="1" transform="rotate(-30,36,50)"
        fill="${MKT_COLOR}" opacity="0.9"/>
  <!-- pencil tip -->
  <polygon points="36,57 34,61 38,61" transform="rotate(-30,36,59)" fill="${MKT_COLOR}" opacity="0.75"/>
  <!-- pencil eraser -->
  <rect x="32" y="44" width="4.5" height="3" rx="0.5" transform="rotate(-30,36,45.5)"
        fill="#FFD700" opacity="0.85"/>
  <!-- writing line -->
  <line x1="37" y1="54" x2="42" y2="54" stroke="${MKT_COLOR}" stroke-width="1" opacity="0.5" stroke-linecap="round"/>
`.trim());

// DEMGEN: FUNNEL symbol in eye
const DEMGEN = wrap(`
  ${megaphoneBase(1, 2, MKT_COLOR)}
  ${megaphoneEye(8, MKT_COLOR)}
  <!-- funnel top wide -->
  <polygon points="29,44 43,44 40,50 32,50" fill="${MKT_COLOR}" opacity="0.8"/>
  <!-- funnel middle -->
  <rect x="33" y="50" width="7" height="4" rx="0.5" fill="${MKT_COLOR}" opacity="0.7"/>
  <!-- funnel spout -->
  <rect x="35" y="54" width="3" height="4" rx="0.5" fill="${MKT_COLOR}" opacity="0.9"/>
  <!-- drip dot -->
  <circle cx="36.5" cy="59.5" r="1.2" fill="${MKT_COLOR}" opacity="0.7"/>
`.trim());

// MOPs: GEAR inside + pipeline arrows
const MOPS = wrap(`
  ${megaphoneBase(1, 2, MKT_COLOR)}
  ${megaphoneEye(8, MKT_COLOR)}
  <!-- gear (simplified cogwheel) -->
  <circle cx="36" cy="50" r="5" fill="none" stroke="${MKT_COLOR}" stroke-width="1.5" stroke-dasharray="3 2"/>
  ${[0,60,120,180,240,300].map(a => {
    const r = Math.PI * a / 180;
    const tx = 36 + 5 * Math.cos(r);
    const ty = 50 + 5 * Math.sin(r);
    return `<circle cx="${tx.toFixed(1)}" cy="${ty.toFixed(1)}" r="1.4" fill="${MKT_COLOR}" opacity="0.9"/>`;
  }).join("\n  ")}
  <circle cx="36" cy="50" r="2" fill="${MKT_COLOR}" opacity="0.6"/>
  <!-- pipeline arrows on right of eye -->
  <line x1="42" y1="48" x2="50" y2="48" stroke="${MKT_COLOR}" stroke-width="1" opacity="0.5"/>
  <polygon points="50,48 47,46.5 47,49.5" fill="${MKT_COLOR}" opacity="0.5"/>
  <line x1="42" y1="52" x2="50" y2="52" stroke="${MKT_COLOR}" stroke-width="1" opacity="0.5"/>
  <polygon points="50,52 47,50.5 47,53.5" fill="${MKT_COLOR}" opacity="0.5"/>
`.trim());

// SOCIAL-MGR: HEART + SHARE ICON in eye
const SOCIAL_MGR = wrap(`
  ${megaphoneBase(1, 3, MKT_COLOR)}
  ${megaphoneEye(8, MKT_COLOR)}
  <!-- heart -->
  <path d="M36,53 Q33,49 36,46 Q39,43 36,48 Q33,43 36,46 Q39,49 36,53"
        fill="${MKT_COLOR}" opacity="0.95"/>
  <path d="M33,47 Q30,43.5 33,47 Q36,43.5 33,47" fill="${MKT_COLOR}" opacity="0.95"/>
  <!-- heart shape, cleaner -->
  <path d="M36,54 L30,49 Q28,44 33,44 Q36,44 36,47 Q36,44 39,44 Q44,44 42,49 Z"
        fill="${MKT_COLOR}" opacity="0.9"/>
  <!-- share dots -->
  <circle cx="44" cy="46" r="1.5" fill="${MKT_COLOR}" opacity="0.7"/>
  <circle cx="44" cy="54" r="1.5" fill="${MKT_COLOR}" opacity="0.7"/>
  <line x1="37" y1="49" x2="43.5" y2="46.5" stroke="${MKT_COLOR}" stroke-width="0.9" opacity="0.6"/>
  <line x1="37" y1="51" x2="43.5" y2="53.5" stroke="${MKT_COLOR}" stroke-width="0.9" opacity="0.6"/>
`.trim());

// PR-MGR: NEWSPAPER/PRESS symbol in eye
const PR_MGR = wrap(`
  ${megaphoneBase(1, 2, MKT_COLOR)}
  ${megaphoneEye(8, MKT_COLOR)}
  <!-- newspaper fold -->
  <rect x="29" y="44" width="14" height="13" rx="1.5" fill="${MKT_COLOR}" opacity="0.3" stroke="${MKT_COLOR}" stroke-width="1"/>
  <!-- headline bar -->
  <rect x="30.5" y="45.5" width="11" height="2.5" rx="0.5" fill="${MKT_COLOR}" opacity="0.9"/>
  <!-- text lines -->
  <rect x="30.5" y="49.5" width="8" height="1.2" rx="0.3" fill="${MKT_COLOR}" opacity="0.6"/>
  <rect x="30.5" y="51.5" width="10" height="1.2" rx="0.3" fill="${MKT_COLOR}" opacity="0.5"/>
  <rect x="30.5" y="53.5" width="7" height="1.2" rx="0.3" fill="${MKT_COLOR}" opacity="0.4"/>
  <!-- fold corner -->
  <polygon points="41,44 43,44 43,46" fill="${MKT_COLOR}" opacity="0.7"/>
`.trim());

// EVENTS-MGR: LOCATION PIN with STAR symbol in eye
const EVENTS_MGR = wrap(`
  ${megaphoneBase(1, 2, MKT_COLOR)}
  ${megaphoneEye(8, MKT_COLOR)}
  <!-- location pin -->
  <path d="M36,58 Q29,52 29,47 Q29,42 36,42 Q43,42 43,47 Q43,52 36,58 Z"
        fill="${MKT_COLOR}" opacity="0.75" stroke="${MKT_COLOR}" stroke-width="1"/>
  <!-- star inside pin -->
  <polygon points="36,44.5 37,47 39.5,47 37.5,48.5 38.2,51 36,49.5 33.8,51 34.5,48.5 32.5,47 35,47"
            fill="#FFD700" opacity="0.95"/>
`.trim());

// ─── DEPT 11 — BEACON (Lighthouse) ──────────────────────────────────────────
// Lighthouse: tower body, lantern room at top, arms/base, pulse rings from lantern
// Centred at x=50; tower from ~y=25 (lantern) to y=80 (base)

const CS_COLOR = "#06B6D4";
const CS_DARK = "#041218";

/**
 * Lighthouse base: tower + lantern room + pulse rings + open arms
 * towerH: height multiplier (1 = standard)
 * armRadius: reach of "open arms"
 * pulseCount: number of pulse ring arcs
 */
function lighthouseBase(
  towerH: number,
  pulseCount: number,
  armRadius: number,
  color: string
): string {
  const lanternY = 28 - (towerH - 1) * 8;   // higher for taller towers
  const towerTop = lanternY + 14;
  const towerBot = 78;
  const towerTopW = 8;
  const towerBotW = 14;

  // Tower trapezoid
  const tL = 50 - towerBotW / 2;
  const tR = 50 + towerBotW / 2;
  const tTL = 50 - towerTopW / 2;
  const tTR = 50 + towerTopW / 2;

  // Stripes
  const stripes = [0.25, 0.5, 0.75].map(f => {
    const y = towerTop + (towerBot - towerTop) * f;
    const lerpW = towerTopW + (towerBotW - towerTopW) * f;
    const lx = 50 - lerpW / 2;
    const rx = 50 + lerpW / 2;
    return `<line x1="${lx.toFixed(1)}" y1="${y.toFixed(1)}" x2="${rx.toFixed(1)}" y2="${y.toFixed(1)}" stroke="${color}" stroke-width="1" opacity="0.3"/>`;
  }).join("\n  ");

  // Base platform
  const base = `<rect x="36" y="${towerBot}" width="28" height="4" rx="2" fill="${CS_DARK}" stroke="${color}" stroke-width="1.3"/>`;
  const base2 = `<rect x="40" y="${towerBot + 4}" width="20" height="3" rx="1.5" fill="${CS_DARK}" stroke="${color}" stroke-width="1"/>`;

  // Pulse rings (arcs above lantern)
  let pulseArcs = "";
  for (let i = 0; i < pulseCount; i++) {
    const pr = 12 + i * 10;
    const opac = 0.5 - i * 0.1;
    const sw = 1.5 - i * 0.2;
    // Arc spanning 180° above lantern centre
    const cx = 50;
    const cy = lanternY + 5;
    const x1 = cx - pr;
    const x2 = cx + pr;
    pulseArcs += `<path d="M${x1.toFixed(1)},${cy.toFixed(1)} A${pr},${pr} 0 0,1 ${x2.toFixed(1)},${cy.toFixed(1)}"
      fill="none" stroke="${color}" stroke-width="${sw}" opacity="${opac}" stroke-linecap="round"/>\n  `;
  }

  // Open arms: two curved paths from tower sides outward
  const armY = towerTop + (towerBot - towerTop) * 0.55;
  const armLx = 50 - towerTopW / 2 - (towerBotW - towerTopW) * 0.3;
  const armRx = 50 + towerTopW / 2 + (towerBotW - towerTopW) * 0.3;
  const arms = `
  <path d="M${armLx.toFixed(1)},${armY.toFixed(1)} Q${(50 - armRadius).toFixed(1)},${(armY - 8).toFixed(1)} ${(50 - armRadius - 6).toFixed(1)},${(armY + 4).toFixed(1)}"
        stroke="${color}" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7"/>
  <circle cx="${(50 - armRadius - 6).toFixed(1)}" cy="${(armY + 4).toFixed(1)}" r="2.5" fill="${color}" opacity="0.6"/>
  <path d="M${armRx.toFixed(1)},${armY.toFixed(1)} Q${(50 + armRadius).toFixed(1)},${(armY - 8).toFixed(1)} ${(50 + armRadius + 6).toFixed(1)},${(armY + 4).toFixed(1)}"
        stroke="${color}" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7"/>
  <circle cx="${(50 + armRadius + 6).toFixed(1)}" cy="${(armY + 4).toFixed(1)}" r="2.5" fill="${color}" opacity="0.6"/>
  `.trim();

  return `
  ${pulseArcs}
  <!-- tower body -->
  <polygon points="${tTL},${towerTop} ${tTR},${towerTop} ${tR},${towerBot} ${tL},${towerBot}"
           fill="${CS_DARK}" stroke="${color}" stroke-width="1.5"/>
  ${stripes}
  ${base}
  ${base2}
  ${arms}
  `.trim();
}

/** Lantern room + glass dome at top of lighthouse */
function lanternRoom(lanternY: number, color: string, innerR: number): string {
  const ly = lanternY;
  return `
  <!-- lantern gallery railing -->
  <rect x="43" y="${ly + 10}" width="14" height="4" rx="1.5" fill="${CS_DARK}" stroke="${color}" stroke-width="1.3"/>
  <!-- lantern dome -->
  <circle cx="50" cy="${ly + 5}" r="${innerR + 2}" fill="rgba(6,182,212,0.15)" stroke="${color}" stroke-width="1.5"/>
  `.trim();
}

function lighthouseLanternY(towerH: number): number {
  return 28 - (towerH - 1) * 8;
}

// VP-CS: TALLEST lighthouse, CROWN in lantern
const VP_CS = wrap(`
  ${lighthouseBase(1.3, 4, 18, CS_COLOR)}
  ${lanternRoom(lighthouseLanternY(1.3), CS_COLOR, 11)}
  <!-- crown -->
  <polygon points="50,${lighthouseLanternY(1.3) - 2} 44,${lighthouseLanternY(1.3) + 11} 47,${lighthouseLanternY(1.3) + 7} 50,${lighthouseLanternY(1.3) + 11} 53,${lighthouseLanternY(1.3) + 7} 56,${lighthouseLanternY(1.3) + 11}"
           fill="${CS_COLOR}" opacity="0.95"/>
  <circle cx="50" cy="${lighthouseLanternY(1.3) - 2}" r="1.8" fill="#FFD700" opacity="0.9"/>
  <circle cx="47" cy="${lighthouseLanternY(1.3) + 7}" r="1.2" fill="#FFD700" opacity="0.8"/>
  <circle cx="53" cy="${lighthouseLanternY(1.3) + 7}" r="1.2" fill="#FFD700" opacity="0.8"/>
`.trim());

// MGR-CS: TEAM DOTS in lantern, manager bars
const MGR_CS_LY = lighthouseLanternY(1.05);
const MGR_CS = wrap(`
  ${lighthouseBase(1.05, 3, 15, CS_COLOR)}
  ${lanternRoom(MGR_CS_LY, CS_COLOR, 9)}
  <!-- team dots -->
  <circle cx="50" cy="${MGR_CS_LY + 2}" r="2.2" fill="${CS_COLOR}" opacity="0.9"/>
  <circle cx="45" cy="${MGR_CS_LY + 8}" r="1.8" fill="${CS_COLOR}" opacity="0.75"/>
  <circle cx="55" cy="${MGR_CS_LY + 8}" r="1.8" fill="${CS_COLOR}" opacity="0.75"/>
  <line x1="50" y1="${MGR_CS_LY + 4}" x2="45.5" y2="${MGR_CS_LY + 6.5}" stroke="${CS_COLOR}" stroke-width="1" opacity="0.6"/>
  <line x1="50" y1="${MGR_CS_LY + 4}" x2="54.5" y2="${MGR_CS_LY + 6.5}" stroke="${CS_COLOR}" stroke-width="1" opacity="0.6"/>
  <!-- manager bars on tower -->
  <rect x="45" y="54" width="10" height="1.5" rx="0.5" fill="${CS_COLOR}" opacity="0.5"/>
  <rect x="45" y="57" width="10" height="1.5" rx="0.5" fill="${CS_COLOR}" opacity="0.4"/>
`.trim());

// SR-CSM: HANDSHAKE in lantern, senior marker
const SR_CSM_LY = lighthouseLanternY(1);
const SR_CSM = wrap(`
  ${lighthouseBase(1, 3, 14, CS_COLOR)}
  ${lanternRoom(SR_CSM_LY, CS_COLOR, 9)}
  <!-- handshake in lantern -->
  <path d="M44,${SR_CSM_LY + 6} Q47,${SR_CSM_LY + 3} 50,${SR_CSM_LY + 5}"
        stroke="${CS_COLOR}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <path d="M56,${SR_CSM_LY + 6} Q53,${SR_CSM_LY + 3} 50,${SR_CSM_LY + 5}"
        stroke="${CS_COLOR}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <circle cx="50" cy="${SR_CSM_LY + 5}" r="1.8" fill="${CS_COLOR}" opacity="0.9"/>
  <!-- senior stripe -->
  <rect x="43" y="60" width="14" height="1.5" rx="0.5" fill="${CS_COLOR}" opacity="0.6"/>
`.trim());

// CSM: HEART in lantern (empathy)
const CSM_LY = lighthouseLanternY(1);
const CSM = wrap(`
  ${lighthouseBase(1, 3, 14, CS_COLOR)}
  ${lanternRoom(CSM_LY, CS_COLOR, 9)}
  <!-- heart in lantern -->
  <path d="M50,${CSM_LY + 10} L${44},${CSM_LY + 5} Q${42},${CSM_LY + 1} ${46},${CSM_LY + 1} Q${48},${CSM_LY + 1} ${50},${CSM_LY + 4} Q${52},${CSM_LY + 1} ${54},${CSM_LY + 1} Q${58},${CSM_LY + 1} ${56},${CSM_LY + 5} Z"
        fill="${CS_COLOR}" opacity="0.9"/>
`.trim());

// TAM: TECH CIRCUIT in lantern (technical account manager)
const TAM_LY = lighthouseLanternY(1);
const TAM = wrap(`
  ${lighthouseBase(1, 2, 14, "#0891b2")}
  ${lanternRoom(TAM_LY, CS_COLOR, 9)}
  <!-- circuit traces -->
  <line x1="44" y1="${TAM_LY + 5}" x2="56" y2="${TAM_LY + 5}" stroke="${CS_COLOR}" stroke-width="1.2" opacity="0.9"/>
  <line x1="50" y1="${TAM_LY + 2}" x2="50" y2="${TAM_LY + 9}" stroke="${CS_COLOR}" stroke-width="1.2" opacity="0.9"/>
  <!-- nodes -->
  <circle cx="44" cy="${TAM_LY + 5}" r="1.5" fill="${CS_COLOR}" opacity="0.95"/>
  <circle cx="56" cy="${TAM_LY + 5}" r="1.5" fill="${CS_COLOR}" opacity="0.95"/>
  <circle cx="50" cy="${TAM_LY + 2}" r="1.5" fill="${CS_COLOR}" opacity="0.95"/>
  <circle cx="50" cy="${TAM_LY + 9}" r="1.5" fill="${CS_COLOR}" opacity="0.95"/>
  <circle cx="50" cy="${TAM_LY + 5}" r="2" fill="${CS_COLOR}" opacity="0.8"/>
  <!-- teal accent on arms -->
  <circle cx="22" cy="60" r="2" fill="#0891b2" opacity="0.6"/>
  <circle cx="78" cy="60" r="2" fill="#0891b2" opacity="0.6"/>
`.trim());

// ONBOARD-SPEC: DOOR/ENTRY symbol in lantern, welcoming
const ONBOARD_LY = lighthouseLanternY(1);
const ONBOARD_SPEC = wrap(`
  ${lighthouseBase(1, 3, 15, CS_COLOR)}
  ${lanternRoom(ONBOARD_LY, CS_COLOR, 9)}
  <!-- door frame -->
  <rect x="46" y="${ONBOARD_LY + 1}" width="9" height="10" rx="1" fill="${CS_COLOR}" opacity="0.3" stroke="${CS_COLOR}" stroke-width="1"/>
  <!-- door arch top -->
  <path d="M46,${ONBOARD_LY + 4} Q50.5,${ONBOARD_LY - 1} 55,${ONBOARD_LY + 4}"
        fill="none" stroke="${CS_COLOR}" stroke-width="1" opacity="0.8"/>
  <!-- doorknob -->
  <circle cx="54" cy="${ONBOARD_LY + 7}" r="1" fill="${CS_COLOR}" opacity="0.9"/>
  <!-- welcome arrow into door -->
  <line x1="43" y1="${ONBOARD_LY + 8}" x2="47" y2="${ONBOARD_LY + 8}" stroke="${CS_COLOR}" stroke-width="1.3" opacity="0.7"/>
  <polygon points="47,${ONBOARD_LY + 8} 45,${ONBOARD_LY + 6.5} 45,${ONBOARD_LY + 9.5}" fill="${CS_COLOR}" opacity="0.7"/>
`.trim());

// SUPPORT-T2: WRENCH/TOOL in lantern
const SUP_T2_LY = lighthouseLanternY(0.95);
const SUPPORT_T2 = wrap(`
  ${lighthouseBase(0.95, 2, 13, CS_COLOR)}
  ${lanternRoom(SUP_T2_LY, CS_COLOR, 8)}
  <!-- wrench -->
  <circle cx="47" cy="${SUP_T2_LY + 3}" r="3" fill="none" stroke="${CS_COLOR}" stroke-width="1.5"/>
  <rect x="49" y="${SUP_T2_LY + 3}" width="7" height="2.5" rx="0.5" transform="rotate(45,52.5,${SUP_T2_LY + 4.25})"
        fill="${CS_COLOR}" opacity="0.9"/>
  <circle cx="54" cy="${SUP_T2_LY + 9}" r="2.5" fill="none" stroke="${CS_COLOR}" stroke-width="1.5"/>
  <line x1="45" y1="${SUP_T2_LY + 5}" x2="55" y2="${SUP_T2_LY + 7}" stroke="${CS_COLOR}" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
`.trim());

// SUPPORT-T1: HEADSET in lantern, first-line support, simpler design
const SUP_T1_LY = lighthouseLanternY(0.9);
const SUPPORT_T1 = wrap(`
  ${lighthouseBase(0.9, 2, 12, CS_COLOR)}
  ${lanternRoom(SUP_T1_LY, CS_COLOR, 8)}
  <!-- headset arc -->
  <path d="M44,${SUP_T1_LY + 7} Q44,${SUP_T1_LY + 0} 50,${SUP_T1_LY + 0} Q56,${SUP_T1_LY + 0} 56,${SUP_T1_LY + 7}"
        fill="none" stroke="${CS_COLOR}" stroke-width="1.8" stroke-linecap="round"/>
  <!-- left ear cup -->
  <rect x="41.5" y="${SUP_T1_LY + 6}" width="4" height="4.5" rx="1.5" fill="${CS_COLOR}" opacity="0.85"/>
  <!-- right ear cup -->
  <rect x="54.5" y="${SUP_T1_LY + 6}" width="4" height="4.5" rx="1.5" fill="${CS_COLOR}" opacity="0.85"/>
  <!-- mic arm -->
  <path d="M45,${SUP_T1_LY + 9} Q46,${SUP_T1_LY + 13} 50,${SUP_T1_LY + 13}"
        fill="none" stroke="${CS_COLOR}" stroke-width="1.2" stroke-linecap="round" opacity="0.8"/>
  <circle cx="50" cy="${SUP_T1_LY + 13}" r="1.5" fill="${CS_COLOR}" opacity="0.9"/>
`.trim());

// ─── WRITE FILES ─────────────────────────────────────────────────────────────

const agents: Record<string, string> = {
  // SALES
  "VP-SALES": VP_SALES,
  "DIR-SALES": DIR_SALES,
  "MGR-SALES": MGR_SALES,
  "ENT-AE": ENT_AE,
  "AE": AE,
  "BDR": BDR,
  "SALES-ENG": SALES_ENG,
  "SOL-ARCH": SOL_ARCH,
  "ACCT-MGR": ACCT_MGR,
  "REVOPS": REVOPS,
  // MARKETING
  "VP-MKT": VP_MKT,
  "PMM": PMM,
  "GROWTH-MKT": GROWTH_MKT,
  "CONTENT-MKT": CONTENT_MKT,
  "DEMGEN": DEMGEN,
  "MOPs": MOPS,
  "SOCIAL-MGR": SOCIAL_MGR,
  "PR-MGR": PR_MGR,
  "EVENTS-MGR": EVENTS_MGR,
  // CUSTOMER SUCCESS
  "VP-CS": VP_CS,
  "MGR-CS": MGR_CS,
  "SR-CSM": SR_CSM,
  "CSM": CSM,
  "TAM": TAM,
  "ONBOARD-SPEC": ONBOARD_SPEC,
  "SUPPORT-T2": SUPPORT_T2,
  "SUPPORT-T1": SUPPORT_T1,
};

let written = 0;
let skipped = 0;

for (const [code, svg] of Object.entries(agents)) {
  const filePath = path.join(OUT_DIR, `${code}.svg`);
  fs.writeFileSync(filePath, svg, "utf-8");
  console.log(`  ✓ ${code}.svg`);
  written++;
}

console.log(`\nDone — ${written} avatars written to:\n  ${OUT_DIR}\n`);
if (skipped > 0) console.log(`  ${skipped} skipped (already existed)`);
