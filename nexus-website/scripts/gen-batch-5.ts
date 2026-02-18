import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(
  __dirname,
  "../public/brand/avatars/agents"
);

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function write(filename: string, svg: string) {
  fs.writeFileSync(path.join(OUTPUT_DIR, filename), svg, "utf8");
  console.log(`  Written: ${filename}`);
}

// ─────────────────────────────────────────────────────────────
// DEPT 04 — PRODUCT MANAGEMENT  (#FF6B35 orange)
// Archetype: diamond gem with refraction rays
// ─────────────────────────────────────────────────────────────

// Helper: build diamond path
// cx,cy = center; hw = half-width; ht_top = distance from center to top tip; ht_bot = bottom tip
function diamondPath(cx: number, cy: number, hw: number, htTop: number, htBot: number) {
  return `M ${cx} ${cy - htTop} L ${cx + hw} ${cy} L ${cx} ${cy + htBot} L ${cx - hw} ${cy} Z`;
}

// 064 VP-PROD — Large diamond, roadmap line with 4 milestone dots, complex rays
write("064-VP-PROD.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="vppDiamondGrad" cx="45%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#FFD1B8"/>
      <stop offset="50%" stop-color="#FF6B35"/>
      <stop offset="100%" stop-color="#CC3D00"/>
    </radialGradient>
    <radialGradient id="vppGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FF6B35" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#FF6B35" stop-opacity="0"/>
    </radialGradient>
    <filter id="vppBlur">
      <feGaussianBlur stdDeviation="2"/>
    </filter>
  </defs>
  <!-- Glow halo -->
  <circle cx="50" cy="50" r="44" fill="url(#vppGlow)" filter="url(#vppBlur)"/>
  <!-- Background circle -->
  <circle cx="50" cy="50" r="42" fill="#1A0A00"/>
  <!-- Refraction rays (complex — 16 rays) -->
  <g opacity="0.25" stroke="#FF6B35" stroke-width="0.5">
    <line x1="50" y1="8" x2="50" y2="0"/>
    <line x1="50" y1="92" x2="50" y2="100"/>
    <line x1="8" y1="50" x2="0" y2="50"/>
    <line x1="92" y1="50" x2="100" y2="50"/>
    <line x1="21" y1="21" x2="14" y2="14"/>
    <line x1="79" y1="21" x2="86" y2="14"/>
    <line x1="21" y1="79" x2="14" y2="86"/>
    <line x1="79" y1="79" x2="86" y2="86"/>
    <line x1="35" y1="9" x2="32" y2="2"/>
    <line x1="65" y1="9" x2="68" y2="2"/>
    <line x1="9" y1="35" x2="2" y2="32"/>
    <line x1="9" y1="65" x2="2" y2="68"/>
    <line x1="91" y1="35" x2="98" y2="32"/>
    <line x1="91" y1="65" x2="98" y2="68"/>
    <line x1="35" y1="91" x2="32" y2="98"/>
    <line x1="65" y1="91" x2="68" y2="98"/>
  </g>
  <!-- Main large diamond -->
  <path d="${diamondPath(50, 50, 30, 34, 30)}" fill="url(#vppDiamondGrad)" stroke="#FFD1B8" stroke-width="0.8"/>
  <!-- Upper facet highlight -->
  <path d="M 50 16 L 70 50 L 50 42 L 30 50 Z" fill="#FFB085" opacity="0.4"/>
  <!-- Inner diamond outline -->
  <path d="${diamondPath(50, 50, 20, 22, 20)}" fill="none" stroke="#FF9B65" stroke-width="0.6" opacity="0.7"/>
  <!-- ROADMAP LINE: horizontal line with 4 milestone dots -->
  <line x1="28" y1="50" x2="72" y2="50" stroke="#FFD1B8" stroke-width="1.2" stroke-linecap="round"/>
  <circle cx="33" cy="50" r="2.5" fill="#FF6B35" stroke="#FFD1B8" stroke-width="0.8"/>
  <circle cx="44" cy="50" r="2.5" fill="#FF6B35" stroke="#FFD1B8" stroke-width="0.8"/>
  <circle cx="56" cy="50" r="2.5" fill="#FF6B35" stroke="#FFD1B8" stroke-width="0.8"/>
  <circle cx="67" cy="50" r="2.5" fill="#FFD1B8" stroke="#FFD1B8" stroke-width="0.8"/>
  <!-- Milestone labels (tiny tick marks above) -->
  <line x1="33" y1="45" x2="33" y2="47.5" stroke="#FFD1B8" stroke-width="0.8"/>
  <line x1="44" y1="45" x2="44" y2="47.5" stroke="#FFD1B8" stroke-width="0.8"/>
  <line x1="56" y1="45" x2="56" y2="47.5" stroke="#FFD1B8" stroke-width="0.8"/>
  <line x1="67" y1="45" x2="67" y2="47.5" stroke="#FFD1B8" stroke-width="0.8"/>
  <!-- Bottom gem sparkle -->
  <path d="M 50 78 L 52 74 L 50 72 L 48 74 Z" fill="#FF9B65" opacity="0.9"/>
</svg>`);

// 065 DIR-PROD — Diamond with PRODUCT TREE (triangle hierarchy) inside
write("065-DIR-PROD.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="dirpDiamondGrad" cx="45%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#FFD1B8"/>
      <stop offset="50%" stop-color="#FF6B35"/>
      <stop offset="100%" stop-color="#CC3D00"/>
    </radialGradient>
    <radialGradient id="dirpGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FF6B35" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#FF6B35" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="50" cy="50" r="44" fill="url(#dirpGlow)"/>
  <circle cx="50" cy="50" r="42" fill="#1A0A00"/>
  <!-- 12 rays -->
  <g opacity="0.2" stroke="#FF6B35" stroke-width="0.5">
    <line x1="50" y1="8" x2="50" y2="0"/>
    <line x1="50" y1="92" x2="50" y2="100"/>
    <line x1="8" y1="50" x2="0" y2="50"/>
    <line x1="92" y1="50" x2="100" y2="50"/>
    <line x1="21" y1="21" x2="14" y2="14"/>
    <line x1="79" y1="21" x2="86" y2="14"/>
    <line x1="21" y1="79" x2="14" y2="86"/>
    <line x1="79" y1="79" x2="86" y2="86"/>
    <line x1="35" y1="9" x2="32" y2="2"/>
    <line x1="65" y1="9" x2="68" y2="2"/>
    <line x1="9" y1="35" x2="2" y2="32"/>
    <line x1="91" y1="65" x2="98" y2="68"/>
  </g>
  <!-- Diamond -->
  <path d="${diamondPath(50, 50, 27, 30, 27)}" fill="url(#dirpDiamondGrad)" stroke="#FFD1B8" stroke-width="0.8"/>
  <path d="M 50 20 L 68 50 L 50 44 L 32 50 Z" fill="#FFB085" opacity="0.35"/>
  <!-- PRODUCT TREE: triangle hierarchy -->
  <!-- Root node -->
  <circle cx="50" cy="38" r="3.5" fill="#FFD1B8"/>
  <!-- Connector lines down -->
  <line x1="50" y1="41.5" x2="40" y2="50" stroke="#FFD1B8" stroke-width="0.8"/>
  <line x1="50" y1="41.5" x2="60" y2="50" stroke="#FFD1B8" stroke-width="0.8"/>
  <!-- Level 2 nodes -->
  <circle cx="40" cy="51" r="2.8" fill="#FF9B65"/>
  <circle cx="60" cy="51" r="2.8" fill="#FF9B65"/>
  <!-- Connector to level 3 -->
  <line x1="40" y1="53.8" x2="35" y2="61" stroke="#FFD1B8" stroke-width="0.7"/>
  <line x1="40" y1="53.8" x2="45" y2="61" stroke="#FFD1B8" stroke-width="0.7"/>
  <!-- Level 3 leaf nodes -->
  <circle cx="35" cy="62" r="2" fill="#FF6B35"/>
  <circle cx="45" cy="62" r="2" fill="#FF6B35"/>
  <circle cx="60" cy="62" r="2" fill="#FF6B35"/>
</svg>`);

// 066 GPM — Diamond with GLOBE GRID inside
write("066-GPM.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="gpmDiamondGrad" cx="45%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#FFD1B8"/>
      <stop offset="50%" stop-color="#FF6B35"/>
      <stop offset="100%" stop-color="#CC3D00"/>
    </radialGradient>
    <clipPath id="gpmDiamondClip">
      <path d="${diamondPath(50, 50, 25, 28, 25)}"/>
    </clipPath>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0A00"/>
  <g opacity="0.2" stroke="#FF6B35" stroke-width="0.5">
    <line x1="50" y1="8" x2="50" y2="0"/>
    <line x1="50" y1="92" x2="50" y2="100"/>
    <line x1="8" y1="50" x2="0" y2="50"/>
    <line x1="92" y1="50" x2="100" y2="50"/>
    <line x1="21" y1="21" x2="14" y2="14"/>
    <line x1="79" y1="21" x2="86" y2="14"/>
    <line x1="21" y1="79" x2="14" y2="86"/>
    <line x1="79" y1="79" x2="86" y2="86"/>
  </g>
  <path d="${diamondPath(50, 50, 25, 28, 25)}" fill="url(#gpmDiamondGrad)" stroke="#FFD1B8" stroke-width="0.8"/>
  <path d="M 50 22 L 67 50 L 50 45 L 33 50 Z" fill="#FFB085" opacity="0.35"/>
  <!-- GLOBE: circle with lat/lon grid lines, clipped to diamond -->
  <g clip-path="url(#gpmDiamondClip)">
    <!-- Globe circle -->
    <circle cx="50" cy="50" r="15" fill="none" stroke="#FFD1B8" stroke-width="1.2"/>
    <!-- Equator -->
    <ellipse cx="50" cy="50" rx="15" ry="4" fill="none" stroke="#FFD1B8" stroke-width="0.8"/>
    <!-- Upper latitude -->
    <ellipse cx="50" cy="44" rx="11" ry="3" fill="none" stroke="#FFD1B8" stroke-width="0.6" opacity="0.7"/>
    <!-- Lower latitude -->
    <ellipse cx="50" cy="56" rx="11" ry="3" fill="none" stroke="#FFD1B8" stroke-width="0.6" opacity="0.7"/>
    <!-- Meridian vertical -->
    <ellipse cx="50" cy="50" rx="3" ry="15" fill="none" stroke="#FFD1B8" stroke-width="0.8"/>
    <!-- Second meridian -->
    <ellipse cx="50" cy="50" rx="10" ry="15" fill="none" stroke="#FFD1B8" stroke-width="0.5" opacity="0.6"/>
  </g>
</svg>`);

// 067 SR-PM — Diamond with STAR BURST inside
write("067-SR-PM.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="srpmDiamondGrad" cx="45%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#FFD1B8"/>
      <stop offset="50%" stop-color="#FF6B35"/>
      <stop offset="100%" stop-color="#CC3D00"/>
    </radialGradient>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0A00"/>
  <g opacity="0.2" stroke="#FF6B35" stroke-width="0.5">
    <line x1="50" y1="8" x2="50" y2="0"/>
    <line x1="50" y1="92" x2="50" y2="100"/>
    <line x1="8" y1="50" x2="0" y2="50"/>
    <line x1="92" y1="50" x2="100" y2="50"/>
    <line x1="21" y1="21" x2="14" y2="14"/>
    <line x1="79" y1="21" x2="86" y2="14"/>
    <line x1="21" y1="79" x2="14" y2="86"/>
    <line x1="79" y1="79" x2="86" y2="86"/>
    <line x1="35" y1="9" x2="32" y2="2"/>
    <line x1="65" y1="9" x2="68" y2="2"/>
  </g>
  <path d="${diamondPath(50, 50, 26, 29, 26)}" fill="url(#srpmDiamondGrad)" stroke="#FFD1B8" stroke-width="0.8"/>
  <path d="M 50 21 L 68 50 L 50 44 L 32 50 Z" fill="#FFB085" opacity="0.35"/>
  <!-- STAR BURST: 8-point star -->
  <g transform="translate(50,50)">
    <polygon points="0,-13 2.5,-5 10,-5 4,0 6,8 0,4 -6,8 -4,0 -10,-5 -2.5,-5" fill="#FFD1B8" opacity="0.9"/>
    <!-- Inner star accent -->
    <polygon points="0,-7 1.5,-3 5.5,-3 2.5,0.5 3.5,4.5 0,2.5 -3.5,4.5 -2.5,0.5 -5.5,-3 -1.5,-3" fill="#FF6B35"/>
  </g>
  <!-- Badge badge rays emanating from star -->
  <g opacity="0.4" stroke="#FFB085" stroke-width="0.4">
    <line x1="50" y1="30" x2="50" y2="26"/>
    <line x1="50" y1="70" x2="50" y2="74"/>
    <line x1="30" y1="50" x2="26" y2="50"/>
    <line x1="70" y1="50" x2="74" y2="50"/>
  </g>
</svg>`);

// 068 PM — Clean diamond, solid gem center, standard rays
write("068-PM.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="pmDiamondGrad" cx="45%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#FFD1B8"/>
      <stop offset="50%" stop-color="#FF6B35"/>
      <stop offset="100%" stop-color="#CC3D00"/>
    </radialGradient>
    <radialGradient id="pmCenterGrad" cx="40%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#FFE0CC"/>
      <stop offset="100%" stop-color="#FF5200"/>
    </radialGradient>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0A00"/>
  <!-- Standard 8 rays -->
  <g opacity="0.2" stroke="#FF6B35" stroke-width="0.5">
    <line x1="50" y1="8" x2="50" y2="0"/>
    <line x1="50" y1="92" x2="50" y2="100"/>
    <line x1="8" y1="50" x2="0" y2="50"/>
    <line x1="92" y1="50" x2="100" y2="50"/>
    <line x1="21" y1="21" x2="14" y2="14"/>
    <line x1="79" y1="21" x2="86" y2="14"/>
    <line x1="21" y1="79" x2="14" y2="86"/>
    <line x1="79" y1="79" x2="86" y2="86"/>
  </g>
  <path d="${diamondPath(50, 50, 24, 27, 24)}" fill="url(#pmDiamondGrad)" stroke="#FFD1B8" stroke-width="0.8"/>
  <path d="M 50 23 L 66 50 L 50 45 L 34 50 Z" fill="#FFB085" opacity="0.35"/>
  <!-- Solid gem center: concentric diamond shapes -->
  <path d="${diamondPath(50, 50, 10, 11, 10)}" fill="url(#pmCenterGrad)"/>
  <path d="${diamondPath(50, 50, 5, 6, 5)}" fill="#FFE0CC" opacity="0.8"/>
  <!-- Center sparkle dot -->
  <circle cx="50" cy="48" r="1.5" fill="white" opacity="0.9"/>
</svg>`);

// 069 TPM-PROD — Diamond with TECH SPECS (< /> code symbol) inside, bridge between tech+product
write("069-TPM-PROD.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="tpmDiamondGrad" cx="45%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#FFD1B8"/>
      <stop offset="50%" stop-color="#FF6B35"/>
      <stop offset="100%" stop-color="#CC3D00"/>
    </radialGradient>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0A00"/>
  <g opacity="0.2" stroke="#FF6B35" stroke-width="0.5">
    <line x1="50" y1="8" x2="50" y2="0"/>
    <line x1="50" y1="92" x2="50" y2="100"/>
    <line x1="8" y1="50" x2="0" y2="50"/>
    <line x1="92" y1="50" x2="100" y2="50"/>
    <line x1="21" y1="21" x2="14" y2="14"/>
    <line x1="79" y1="21" x2="86" y2="14"/>
    <line x1="21" y1="79" x2="14" y2="86"/>
    <line x1="79" y1="79" x2="86" y2="86"/>
  </g>
  <path d="${diamondPath(50, 50, 25, 28, 25)}" fill="url(#tpmDiamondGrad)" stroke="#FFD1B8" stroke-width="0.8"/>
  <path d="M 50 22 L 67 50 L 50 44 L 33 50 Z" fill="#FFB085" opacity="0.35"/>
  <!-- CODE SYMBOL: < /> -->
  <!-- Left angle bracket < -->
  <polyline points="38,44 32,50 38,56" fill="none" stroke="#FFD1B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Right angle bracket > -->
  <polyline points="56,44 62,50 56,56" fill="none" stroke="#FFD1B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Forward slash / -->
  <line x1="47" y1="56" x2="51" y2="44" stroke="#FFB085" stroke-width="1.8" stroke-linecap="round"/>
  <!-- Small tech dot accent (circuit board feel) -->
  <circle cx="50" cy="67" r="1.5" fill="#FF9B65" opacity="0.8"/>
  <line x1="50" y1="65.5" x2="50" y2="63" stroke="#FF9B65" stroke-width="0.7"/>
  <line x1="48" y1="63" x2="52" y2="63" stroke="#FF9B65" stroke-width="0.7"/>
</svg>`);

// 070 GROWTH-PM — Diamond with ARROW-UP GROWTH CHART inside, extra yellow accent
write("070-GROWTH-PM.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="grpmDiamondGrad" cx="45%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#FFD1B8"/>
      <stop offset="50%" stop-color="#FF6B35"/>
      <stop offset="100%" stop-color="#CC3D00"/>
    </radialGradient>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0A00"/>
  <g opacity="0.2" stroke="#FF6B35" stroke-width="0.5">
    <line x1="50" y1="8" x2="50" y2="0"/>
    <line x1="50" y1="92" x2="50" y2="100"/>
    <line x1="8" y1="50" x2="0" y2="50"/>
    <line x1="92" y1="50" x2="100" y2="50"/>
    <line x1="21" y1="21" x2="14" y2="14"/>
    <line x1="79" y1="21" x2="86" y2="14"/>
    <line x1="21" y1="79" x2="14" y2="86"/>
    <line x1="79" y1="79" x2="86" y2="86"/>
  </g>
  <!-- Yellow accent glow -->
  <circle cx="50" cy="50" r="28" fill="#FFD700" opacity="0.06"/>
  <path d="${diamondPath(50, 50, 25, 28, 25)}" fill="url(#grpmDiamondGrad)" stroke="#FFD1B8" stroke-width="0.8"/>
  <path d="M 50 22 L 67 50 L 50 44 L 33 50 Z" fill="#FFB085" opacity="0.35"/>
  <!-- ASCENDING BAR CHART with upward trend line -->
  <!-- Baseline -->
  <line x1="32" y1="59" x2="68" y2="59" stroke="#FFD1B8" stroke-width="0.8"/>
  <!-- Bars (ascending) -->
  <rect x="33" y="56" width="5" height="3" fill="#FF9B65" rx="0.5"/>
  <rect x="40" y="53" width="5" height="6" fill="#FF9B65" rx="0.5"/>
  <rect x="47" y="49" width="5" height="10" fill="#FFD700" rx="0.5"/>
  <rect x="54" y="44" width="5" height="15" fill="#FFD700" rx="0.5"/>
  <rect x="61" y="39" width="5" height="20" fill="#FFD700" rx="0.5"/>
  <!-- Upward arrow on last bar -->
  <polygon points="63.5,36 66,41 61,41" fill="#FFD700"/>
</svg>`);

// 071 AI-PM — Diamond with NEURAL NODE (circle + connections) inside, green accent
write("071-AI-PM.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="aipmDiamondGrad" cx="45%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#FFD1B8"/>
      <stop offset="50%" stop-color="#FF6B35"/>
      <stop offset="100%" stop-color="#CC3D00"/>
    </radialGradient>
    <radialGradient id="aipmGreenGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#00FF88" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#00FF88" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="aipmDiamondClip">
      <path d="${diamondPath(50, 50, 25, 28, 25)}"/>
    </clipPath>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0A00"/>
  <!-- Green accent glow -->
  <circle cx="50" cy="50" r="30" fill="url(#aipmGreenGlow)"/>
  <g opacity="0.2" stroke="#FF6B35" stroke-width="0.5">
    <line x1="50" y1="8" x2="50" y2="0"/>
    <line x1="50" y1="92" x2="50" y2="100"/>
    <line x1="8" y1="50" x2="0" y2="50"/>
    <line x1="92" y1="50" x2="100" y2="50"/>
    <line x1="21" y1="21" x2="14" y2="14"/>
    <line x1="79" y1="21" x2="86" y2="14"/>
    <line x1="21" y1="79" x2="14" y2="86"/>
    <line x1="79" y1="79" x2="86" y2="86"/>
  </g>
  <path d="${diamondPath(50, 50, 25, 28, 25)}" fill="url(#aipmDiamondGrad)" stroke="#FFD1B8" stroke-width="0.8"/>
  <path d="M 50 22 L 67 50 L 50 44 L 33 50 Z" fill="#FFB085" opacity="0.35"/>
  <!-- NEURAL NETWORK inside diamond -->
  <g clip-path="url(#aipmDiamondClip)">
    <!-- Connection lines -->
    <line x1="35" y1="44" x2="50" y2="50" stroke="#00FF88" stroke-width="0.7" opacity="0.6"/>
    <line x1="35" y1="56" x2="50" y2="50" stroke="#00FF88" stroke-width="0.7" opacity="0.6"/>
    <line x1="65" y1="44" x2="50" y2="50" stroke="#00FF88" stroke-width="0.7" opacity="0.6"/>
    <line x1="65" y1="56" x2="50" y2="50" stroke="#00FF88" stroke-width="0.7" opacity="0.6"/>
    <line x1="35" y1="44" x2="35" y2="56" stroke="#00FF88" stroke-width="0.5" opacity="0.4"/>
    <line x1="65" y1="44" x2="65" y2="56" stroke="#00FF88" stroke-width="0.5" opacity="0.4"/>
    <!-- Input nodes -->
    <circle cx="35" cy="44" r="3" fill="#00FF88" opacity="0.8"/>
    <circle cx="35" cy="56" r="3" fill="#00FF88" opacity="0.8"/>
    <!-- Output nodes -->
    <circle cx="65" cy="44" r="3" fill="#00FF88" opacity="0.8"/>
    <circle cx="65" cy="56" r="3" fill="#00FF88" opacity="0.8"/>
    <!-- Center node (larger) -->
    <circle cx="50" cy="50" r="5" fill="#00FF88"/>
    <circle cx="50" cy="50" r="2.5" fill="#003311"/>
  </g>
</svg>`);

// 072 APM — Diamond with tiny gem (smaller version), pencil in corner, learning mode
write("072-APM.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="apmDiamondGrad" cx="45%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#FFD1B8"/>
      <stop offset="55%" stop-color="#FF6B35"/>
      <stop offset="100%" stop-color="#CC3D00"/>
    </radialGradient>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0A00"/>
  <!-- Fewer, softer rays = junior -->
  <g opacity="0.15" stroke="#FF6B35" stroke-width="0.5">
    <line x1="50" y1="8" x2="50" y2="0"/>
    <line x1="50" y1="92" x2="50" y2="100"/>
    <line x1="8" y1="50" x2="0" y2="50"/>
    <line x1="92" y1="50" x2="100" y2="50"/>
    <line x1="21" y1="21" x2="14" y2="14"/>
    <line x1="79" y1="79" x2="86" y2="86"/>
  </g>
  <!-- Smaller diamond (learning / not yet full) -->
  <path d="${diamondPath(50, 52, 20, 22, 20)}" fill="url(#apmDiamondGrad)" stroke="#FFD1B8" stroke-width="0.8"/>
  <path d="M 50 30 L 64 52 L 50 47 L 36 52 Z" fill="#FFB085" opacity="0.35"/>
  <!-- Tiny inner gem -->
  <path d="${diamondPath(50, 52, 7, 8, 7)}" fill="#FFE0CC" opacity="0.7"/>
  <path d="${diamondPath(50, 52, 3, 3.5, 3)}" fill="white" opacity="0.8"/>
  <!-- PENCIL in top-right corner of the SVG (outside diamond) -->
  <!-- Pencil body -->
  <rect x="68" y="18" width="4" height="12" rx="0.5" fill="#FFD700" transform="rotate(45 70 24)"/>
  <!-- Pencil tip -->
  <polygon points="70,29 72.8,26.2 71.5,30.5" fill="#FFB085" transform="rotate(45 70 24)"/>
  <!-- Eraser -->
  <rect x="68" y="16" width="4" height="2.5" rx="0.5" fill="#FF9B65" transform="rotate(45 70 24)"/>
</svg>`);

// 073 STAFF-PM — Diamond with PLATFORM LAYERS (3 stacked bars) inside
write("073-STAFF-PM.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="stpmDiamondGrad" cx="45%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#FFD1B8"/>
      <stop offset="50%" stop-color="#FF6B35"/>
      <stop offset="100%" stop-color="#CC3D00"/>
    </radialGradient>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0A00"/>
  <g opacity="0.22" stroke="#FF6B35" stroke-width="0.5">
    <line x1="50" y1="8" x2="50" y2="0"/>
    <line x1="50" y1="92" x2="50" y2="100"/>
    <line x1="8" y1="50" x2="0" y2="50"/>
    <line x1="92" y1="50" x2="100" y2="50"/>
    <line x1="21" y1="21" x2="14" y2="14"/>
    <line x1="79" y1="21" x2="86" y2="14"/>
    <line x1="21" y1="79" x2="14" y2="86"/>
    <line x1="79" y1="79" x2="86" y2="86"/>
    <line x1="35" y1="9" x2="32" y2="2"/>
    <line x1="65" y1="9" x2="68" y2="2"/>
  </g>
  <path d="${diamondPath(50, 50, 26, 29, 26)}" fill="url(#stpmDiamondGrad)" stroke="#FFD1B8" stroke-width="0.8"/>
  <path d="M 50 21 L 68 50 L 50 44 L 32 50 Z" fill="#FFB085" opacity="0.35"/>
  <!-- PLATFORM LAYERS: 3 stacked foundation bars (widest at bottom) -->
  <!-- Top layer (narrowest) -->
  <rect x="41" y="42" width="18" height="4.5" rx="1" fill="#FFD1B8" opacity="0.9"/>
  <!-- Middle layer -->
  <rect x="38" y="48" width="24" height="4.5" rx="1" fill="#FFB085" opacity="0.9"/>
  <!-- Bottom layer (widest = foundation) -->
  <rect x="35" y="54" width="30" height="4.5" rx="1" fill="#FF9B65" opacity="0.9"/>
  <!-- Connection lines between layers -->
  <line x1="46" y1="46.5" x2="46" y2="48" stroke="#FFD1B8" stroke-width="0.6"/>
  <line x1="54" y1="46.5" x2="54" y2="48" stroke="#FFD1B8" stroke-width="0.6"/>
  <line x1="44" y1="52.5" x2="44" y2="54" stroke="#FFD1B8" stroke-width="0.6"/>
  <line x1="56" y1="52.5" x2="56" y2="54" stroke="#FFD1B8" stroke-width="0.6"/>
</svg>`);

// ─────────────────────────────────────────────────────────────
// DEPT 05 — DESIGN  (#FF2D78 hot pink)
// Archetype: organic blob + paint brush tail + splatters
// ─────────────────────────────────────────────────────────────

// Helper: build a blob path using bezier curves
// cx, cy = center, r = rough radius, jitter points for organic feel
function blobPath(cx: number, cy: number, r: number, bumps: number[]): string {
  // bumps = array of radius multipliers for 8 points around the circle
  const angles = [0, 45, 90, 135, 180, 225, 270, 315].map(d => d * Math.PI / 180);
  const pts = angles.map((a, i) => ({
    x: cx + Math.cos(a) * r * bumps[i],
    y: cy + Math.sin(a) * r * bumps[i]
  }));
  const n = pts.length;
  let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for (let i = 0; i < n; i++) {
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const mx = (p1.x + p2.x) / 2;
    const my = (p1.y + p2.y) / 2;
    d += ` Q ${p2.x.toFixed(1)} ${p2.y.toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)}`;
  }
  d += " Z";
  return d;
}

function splatter(x: number, y: number, r: number, color: string, opacity = 0.7): string {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}" opacity="${opacity}"/>`;
}

function brushTail(color: string, opacity = 0.5): string {
  // A curved swooping tail (bottom-right area) = paint brush stroke
  return `<path d="M 65 70 Q 78 78 82 90 Q 84 96 80 95 Q 76 94 72 85 Q 68 75 65 70 Z" fill="${color}" opacity="${opacity}"/>`;
}

// 074 VP-DES — LARGEST blob, CROWN at top, 7 splatters, rainbow palette inside
write("074-VP-DES.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="vpdBlobGrad" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8EB5"/>
      <stop offset="55%" stop-color="#FF2D78"/>
      <stop offset="100%" stop-color="#A8004F"/>
    </radialGradient>
    <radialGradient id="vpdGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FF2D78" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#FF2D78" stop-opacity="0"/>
    </radialGradient>
    <filter id="vpdBlur"><feGaussianBlur stdDeviation="2"/></filter>
  </defs>
  <!-- Glow halo -->
  <circle cx="50" cy="50" r="45" fill="url(#vpdGlow)" filter="url(#vpdBlur)"/>
  <circle cx="50" cy="50" r="42" fill="#1A0010"/>
  <!-- 7 splatters -->
  ${splatter(15, 18, 3.5, "#FF2D78", 0.6)}
  ${splatter(82, 15, 3, "#FF6B35", 0.5)}
  ${splatter(12, 72, 2.5, "#FF2D78", 0.5)}
  ${splatter(85, 78, 3.5, "#FF8EB5", 0.6)}
  ${splatter(20, 45, 2, "#FF2D78", 0.4)}
  ${splatter(78, 40, 2.5, "#A855F7", 0.5)}
  ${splatter(55, 88, 2, "#FF6B35", 0.5)}
  <!-- Brush tail -->
  ${brushTail("#FF2D78", 0.4)}
  <!-- LARGEST blob -->
  <path d="${blobPath(48, 49, 32, [1.05, 0.9, 1.1, 0.85, 1.0, 0.95, 1.08, 0.88])}" fill="url(#vpdBlobGrad)"/>
  <!-- CROWN at top of blob -->
  <g transform="translate(48,17)">
    <!-- Crown base bar -->
    <rect x="-10" y="3" width="20" height="4" rx="1" fill="#FFD700"/>
    <!-- Crown points -->
    <polygon points="-10,3 -7,-4 -4,3" fill="#FFD700"/>
    <polygon points="-1,3 2,-7 5,3" fill="#FFD700"/>
    <polygon points="8,3 11,-4 14,3" fill="#FFD700"/>
    <!-- Jewel accents on crown -->
    <circle cx="-1" cy="1.5" r="1.5" fill="#FF2D78"/>
    <circle cx="5" cy="0" r="1.5" fill="#A855F7"/>
    <circle cx="11" cy="1.5" r="1.5" fill="#00BFFF"/>
  </g>
  <!-- RAINBOW PALETTE inside blob (circular with color slices) -->
  <!-- Paint palette circle -->
  <circle cx="48" cy="52" r="12" fill="#1A0010" opacity="0.5"/>
  <!-- Color swatches around palette -->
  <circle cx="48" cy="41" r="3" fill="#FF2D78"/>
  <circle cx="57" cy="45" r="3" fill="#FF6B35"/>
  <circle cx="59" cy="55" r="3" fill="#FFD700"/>
  <circle cx="53" cy="62" r="3" fill="#00FF88"/>
  <circle cx="43" cy="62" r="3" fill="#00BFFF"/>
  <circle cx="37" cy="55" r="3" fill="#A855F7"/>
  <circle cx="39" cy="45" r="3" fill="#FF2D78"/>
  <!-- Palette center hole -->
  <circle cx="48" cy="52" r="2.5" fill="#1A0010"/>
</svg>`);

// 075 DIR-DES — Blob with DIRECTION COMPASS inside, 5 splatters
write("075-DIR-DES.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="dirdBlobGrad" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8EB5"/>
      <stop offset="55%" stop-color="#FF2D78"/>
      <stop offset="100%" stop-color="#A8004F"/>
    </radialGradient>
    <clipPath id="dirdBlobClip">
      <path d="${blobPath(50, 50, 28, [1.04, 0.88, 1.06, 0.9, 1.02, 0.92, 1.05, 0.87])}"/>
    </clipPath>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0010"/>
  <!-- 5 splatters -->
  ${splatter(14, 20, 3, "#FF2D78", 0.55)}
  ${splatter(84, 18, 2.5, "#FF8EB5", 0.5)}
  ${splatter(11, 68, 2, "#FF2D78", 0.45)}
  ${splatter(83, 72, 3, "#FF6B35", 0.5)}
  ${splatter(50, 90, 2, "#FF2D78", 0.4)}
  ${brushTail("#FF2D78", 0.38)}
  <path d="${blobPath(50, 50, 28, [1.04, 0.88, 1.06, 0.9, 1.02, 0.92, 1.05, 0.87])}" fill="url(#dirdBlobGrad)"/>
  <!-- COMPASS inside blob -->
  <g clip-path="url(#dirdBlobClip)">
    <!-- Compass circle -->
    <circle cx="50" cy="50" r="13" fill="#1A0010" opacity="0.6" stroke="#FF8EB5" stroke-width="1"/>
    <!-- Cardinal tick marks -->
    <line x1="50" y1="38" x2="50" y2="41" stroke="#FF8EB5" stroke-width="1.2"/>
    <line x1="50" y1="59" x2="50" y2="62" stroke="#FF8EB5" stroke-width="1.2"/>
    <line x1="38" y1="50" x2="41" y2="50" stroke="#FF8EB5" stroke-width="1.2"/>
    <line x1="59" y1="50" x2="62" y2="50" stroke="#FF8EB5" stroke-width="1.2"/>
    <!-- Compass needle (red north, white south) -->
    <polygon points="50,40 52.5,50 50,48 47.5,50" fill="#FF2D78"/>
    <polygon points="50,60 52.5,50 50,52 47.5,50" fill="#FF8EB5"/>
    <!-- Center pin -->
    <circle cx="50" cy="50" r="2" fill="#FFD1B8"/>
    <!-- N label -->
    <text x="50" y="37" font-size="3.5" fill="#FF8EB5" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold">N</text>
  </g>
</svg>`);

// 076 MGR-UI — Blob with UI WIREFRAME BOX inside (screen mockup)
write("076-MGR-UI.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="mguiBlobGrad" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8EB5"/>
      <stop offset="55%" stop-color="#FF2D78"/>
      <stop offset="100%" stop-color="#A8004F"/>
    </radialGradient>
    <clipPath id="mguiBlobClip">
      <path d="${blobPath(50, 50, 27, [1.0, 0.9, 1.08, 0.85, 1.02, 0.94, 1.04, 0.91])}"/>
    </clipPath>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0010"/>
  ${splatter(15, 22, 2.5, "#FF2D78", 0.5)}
  ${splatter(83, 20, 2, "#FF8EB5", 0.45)}
  ${splatter(12, 70, 2.5, "#FF2D78", 0.5)}
  ${splatter(84, 75, 2, "#FF6B35", 0.45)}
  ${brushTail("#FF2D78", 0.38)}
  <path d="${blobPath(50, 50, 27, [1.0, 0.9, 1.08, 0.85, 1.02, 0.94, 1.04, 0.91])}" fill="url(#mguiBlobGrad)"/>
  <!-- UI WIREFRAME SCREEN inside blob -->
  <g clip-path="url(#mguiBlobClip)">
    <!-- Outer screen border -->
    <rect x="33" y="38" width="34" height="24" rx="2" fill="none" stroke="#FFD1B8" stroke-width="1.2"/>
    <!-- Screen title bar -->
    <rect x="33" y="38" width="34" height="5" rx="2" fill="#FF8EB5" opacity="0.5"/>
    <!-- Title bar dots -->
    <circle cx="37" cy="40.5" r="1" fill="#FFD1B8"/>
    <circle cx="41" cy="40.5" r="1" fill="#FFD1B8"/>
    <circle cx="45" cy="40.5" r="1" fill="#FFD1B8"/>
    <!-- Content lines (mockup) -->
    <rect x="36" y="46" width="20" height="1.5" rx="0.5" fill="#FFD1B8" opacity="0.7"/>
    <rect x="36" y="50" width="14" height="1.5" rx="0.5" fill="#FFD1B8" opacity="0.6"/>
    <rect x="36" y="54" width="18" height="1.5" rx="0.5" fill="#FFD1B8" opacity="0.5"/>
    <!-- Sidebar mockup -->
    <rect x="56" y="46" width="8" height="10" rx="1" fill="#FF8EB5" opacity="0.4"/>
  </g>
</svg>`);

// 077 MGR-UX — Blob with USER JOURNEY PATH inside (curved arrow through blob)
write("077-MGR-UX.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="mguxBlobGrad" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8EB5"/>
      <stop offset="55%" stop-color="#FF2D78"/>
      <stop offset="100%" stop-color="#A8004F"/>
    </radialGradient>
    <clipPath id="mguxBlobClip">
      <path d="${blobPath(50, 50, 27, [1.02, 0.87, 1.07, 0.92, 1.0, 0.88, 1.06, 0.93])}"/>
    </clipPath>
    <marker id="arrowMGUX" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#FFD1B8"/>
    </marker>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0010"/>
  ${splatter(14, 21, 2.5, "#FF2D78", 0.5)}
  ${splatter(84, 19, 2.5, "#FF8EB5", 0.45)}
  ${splatter(13, 71, 2, "#FF2D78", 0.5)}
  ${splatter(83, 73, 2.5, "#FF6B35", 0.4)}
  ${brushTail("#FF2D78", 0.38)}
  <path d="${blobPath(50, 50, 27, [1.02, 0.87, 1.07, 0.92, 1.0, 0.88, 1.06, 0.93])}" fill="url(#mguxBlobGrad)"/>
  <!-- USER JOURNEY: start icon → path → end icon -->
  <g clip-path="url(#mguxBlobClip)">
    <!-- Journey path (curved S-curve) -->
    <path d="M 33 56 Q 42 48 50 54 Q 58 60 67 48" fill="none" stroke="#FFD1B8" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2,1.5" marker-end="url(#arrowMGUX)"/>
    <!-- Start: person icon -->
    <circle cx="33" cy="54" r="3" fill="#FF8EB5"/>
    <line x1="33" y1="57" x2="33" y2="62" stroke="#FF8EB5" stroke-width="1.2"/>
    <line x1="29" y1="59" x2="37" y2="59" stroke="#FF8EB5" stroke-width="1"/>
    <!-- End: flag / goal -->
    <line x1="67" y1="44" x2="67" y2="54" stroke="#FFD700" stroke-width="1.2"/>
    <polygon points="67,44 74,47 67,50" fill="#FFD700"/>
    <!-- Milestone dots along path -->
    <circle cx="42" cy="51" r="1.5" fill="#FFD1B8"/>
    <circle cx="58" cy="57" r="1.5" fill="#FFD1B8"/>
  </g>
</svg>`);

// 078 STAFF-DES — Blob with DESIGN SYSTEM GRID inside (4 squares in 2x2), most complex
write("078-STAFF-DES.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="stdesBlobGrad" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8EB5"/>
      <stop offset="50%" stop-color="#FF2D78"/>
      <stop offset="100%" stop-color="#A8004F"/>
    </radialGradient>
    <clipPath id="stdesBlobClip">
      <path d="${blobPath(50, 50, 28, [1.06, 0.91, 1.1, 0.88, 1.04, 0.93, 1.07, 0.89])}"/>
    </clipPath>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0010"/>
  <!-- Most complex: 6 splatters -->
  ${splatter(13, 18, 3, "#FF2D78", 0.55)}
  ${splatter(85, 15, 2.5, "#FF8EB5", 0.5)}
  ${splatter(10, 65, 2.5, "#FF2D78", 0.5)}
  ${splatter(85, 70, 3, "#FF6B35", 0.5)}
  ${splatter(25, 88, 2, "#FF2D78", 0.4)}
  ${splatter(72, 88, 2, "#A855F7", 0.4)}
  ${brushTail("#FF2D78", 0.42)}
  <path d="${blobPath(50, 50, 28, [1.06, 0.91, 1.1, 0.88, 1.04, 0.93, 1.07, 0.89])}" fill="url(#stdesBlobGrad)"/>
  <!-- DESIGN SYSTEM GRID: 2x2 grid of component boxes -->
  <g clip-path="url(#stdesBlobClip)">
    <!-- Grid background -->
    <rect x="33" y="37" width="34" height="26" rx="1.5" fill="#1A0010" opacity="0.5"/>
    <!-- Top-left: Typography component (A) -->
    <rect x="34" y="38" width="15" height="11" rx="1" fill="#FF2D78" opacity="0.3" stroke="#FF8EB5" stroke-width="0.7"/>
    <text x="41.5" y="46" font-size="7" fill="#FFD1B8" text-anchor="middle" font-family="Georgia, serif" font-weight="bold">A</text>
    <!-- Top-right: Button component -->
    <rect x="50" y="38" width="15" height="11" rx="1" fill="#FF2D78" opacity="0.3" stroke="#FF8EB5" stroke-width="0.7"/>
    <rect x="52.5" y="41.5" width="10" height="4" rx="1.5" fill="#FF2D78" opacity="0.8"/>
    <!-- Bottom-left: Color swatch component -->
    <rect x="34" y="50" width="15" height="11" rx="1" fill="#FF2D78" opacity="0.3" stroke="#FF8EB5" stroke-width="0.7"/>
    <circle cx="38" cy="55.5" r="2.5" fill="#FF2D78"/>
    <circle cx="43.5" cy="55.5" r="2.5" fill="#FFD700"/>
    <circle cx="39" cy="57.5" r="0" fill="none"/>
    <!-- Bottom-right: Icon component -->
    <rect x="50" y="50" width="15" height="11" rx="1" fill="#FF2D78" opacity="0.3" stroke="#FF8EB5" stroke-width="0.7"/>
    <polygon points="57.5,52 60,57.5 55,57.5" fill="#FF8EB5" opacity="0.9"/>
    <!-- Grid line dividers -->
    <line x1="33" y1="49.5" x2="67" y2="49.5" stroke="#FF8EB5" stroke-width="0.5" opacity="0.5"/>
    <line x1="49.5" y1="37" x2="49.5" y2="63" stroke="#FF8EB5" stroke-width="0.5" opacity="0.5"/>
  </g>
</svg>`);

// 079 SR-PROD-DES — Blob with PRODUCT COMPONENTS inside (nested rectangles = component hierarchy)
write("079-SR-PROD-DES.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="srpdBlobGrad" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8EB5"/>
      <stop offset="55%" stop-color="#FF2D78"/>
      <stop offset="100%" stop-color="#A8004F"/>
    </radialGradient>
    <clipPath id="srpdBlobClip">
      <path d="${blobPath(50, 50, 27, [1.03, 0.9, 1.07, 0.87, 1.01, 0.94, 1.05, 0.88])}"/>
    </clipPath>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0010"/>
  ${splatter(14, 20, 2.5, "#FF2D78", 0.5)}
  ${splatter(83, 18, 2.5, "#FF8EB5", 0.45)}
  ${splatter(12, 70, 2, "#FF2D78", 0.5)}
  ${splatter(84, 72, 2.5, "#FF6B35", 0.45)}
  ${splatter(50, 88, 2, "#FF2D78", 0.4)}
  ${brushTail("#FF2D78", 0.38)}
  <path d="${blobPath(50, 50, 27, [1.03, 0.9, 1.07, 0.87, 1.01, 0.94, 1.05, 0.88])}" fill="url(#srpdBlobGrad)"/>
  <!-- NESTED RECTANGLES = component hierarchy -->
  <g clip-path="url(#srpdBlobClip)">
    <!-- Outermost frame (page) -->
    <rect x="32" y="36" width="36" height="28" rx="2" fill="none" stroke="#FFD1B8" stroke-width="1" opacity="0.6"/>
    <!-- Section frame -->
    <rect x="36" y="40" width="28" height="20" rx="1.5" fill="none" stroke="#FF8EB5" stroke-width="0.9" opacity="0.7"/>
    <!-- Component frame -->
    <rect x="40" y="44" width="20" height="12" rx="1" fill="#FF2D78" opacity="0.25" stroke="#FF8EB5" stroke-width="0.8"/>
    <!-- Inner element -->
    <rect x="43" y="47" width="14" height="6" rx="0.8" fill="#FF8EB5" opacity="0.5"/>
    <!-- Element content lines -->
    <line x1="44.5" y1="49" x2="53" y2="49" stroke="#FFD1B8" stroke-width="0.7"/>
    <line x1="44.5" y1="51" x2="50" y2="51" stroke="#FFD1B8" stroke-width="0.7"/>
  </g>
</svg>`);

// 080 SR-UID — Blob with COLOR WHEEL inside, rainbow accent
write("080-SR-UID.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="sruidBlobGrad" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8EB5"/>
      <stop offset="55%" stop-color="#FF2D78"/>
      <stop offset="100%" stop-color="#A8004F"/>
    </radialGradient>
    <clipPath id="sruidBlobClip">
      <path d="${blobPath(50, 50, 27, [1.02, 0.92, 1.06, 0.86, 1.03, 0.91, 1.07, 0.87])}"/>
    </clipPath>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0010"/>
  ${splatter(14, 20, 2.5, "#FF2D78", 0.5)}
  ${splatter(83, 18, 2.5, "#A855F7", 0.45)}
  ${splatter(12, 70, 2, "#FF2D78", 0.5)}
  ${splatter(84, 72, 2.5, "#00BFFF", 0.45)}
  ${splatter(50, 88, 2, "#FFD700", 0.4)}
  ${brushTail("#FF2D78", 0.38)}
  <path d="${blobPath(50, 50, 27, [1.02, 0.92, 1.06, 0.86, 1.03, 0.91, 1.07, 0.87])}" fill="url(#sruidBlobGrad)"/>
  <!-- COLOR WHEEL: pie slices -->
  <g clip-path="url(#sruidBlobClip)">
    <!-- 6 color slices of the wheel -->
    <!-- Red/Pink -->
    <path d="M 50 50 L 50 36 A 14 14 0 0 1 62.1 43 Z" fill="#FF2D78"/>
    <!-- Orange -->
    <path d="M 50 50 L 62.1 43 A 14 14 0 0 1 62.1 57 Z" fill="#FF6B35"/>
    <!-- Yellow -->
    <path d="M 50 50 L 62.1 57 A 14 14 0 0 1 50 64 Z" fill="#FFD700"/>
    <!-- Green -->
    <path d="M 50 50 L 50 64 A 14 14 0 0 1 37.9 57 Z" fill="#00FF88"/>
    <!-- Blue -->
    <path d="M 50 50 L 37.9 57 A 14 14 0 0 1 37.9 43 Z" fill="#00BFFF"/>
    <!-- Purple -->
    <path d="M 50 50 L 37.9 43 A 14 14 0 0 1 50 36 Z" fill="#A855F7"/>
    <!-- Center white circle -->
    <circle cx="50" cy="50" r="5" fill="#1A0010"/>
    <circle cx="50" cy="50" r="3" fill="#FFD1B8"/>
    <!-- Outer ring border -->
    <circle cx="50" cy="50" r="14" fill="none" stroke="#FFD1B8" stroke-width="0.8" opacity="0.5"/>
  </g>
</svg>`);

// 081 SR-UXD — Blob with USER PERSONA ICON inside (person silhouette), empathy
write("081-SR-UXD.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="sruxdBlobGrad" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8EB5"/>
      <stop offset="55%" stop-color="#FF2D78"/>
      <stop offset="100%" stop-color="#A8004F"/>
    </radialGradient>
    <clipPath id="sruxdBlobClip">
      <path d="${blobPath(50, 50, 27, [1.01, 0.89, 1.08, 0.9, 1.0, 0.93, 1.06, 0.88])}"/>
    </clipPath>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0010"/>
  ${splatter(14, 20, 2.5, "#FF2D78", 0.5)}
  ${splatter(83, 18, 2.5, "#FF8EB5", 0.45)}
  ${splatter(12, 70, 2, "#FF2D78", 0.5)}
  ${splatter(84, 72, 2.5, "#FF6B35", 0.4)}
  ${brushTail("#FF2D78", 0.38)}
  <path d="${blobPath(50, 50, 27, [1.01, 0.89, 1.08, 0.9, 1.0, 0.93, 1.06, 0.88])}" fill="url(#sruxdBlobGrad)"/>
  <!-- USER PERSONA inside blob -->
  <g clip-path="url(#sruxdBlobClip)">
    <!-- Person silhouette -->
    <!-- Head -->
    <circle cx="50" cy="41" r="7" fill="#FFD1B8" opacity="0.9"/>
    <!-- Body -->
    <path d="M 38 62 Q 40 52 50 50 Q 60 52 62 62 Z" fill="#FFD1B8" opacity="0.8"/>
    <!-- Empathy heart (small, above head) -->
    <path d="M 50 32 C 48 29, 44 30, 44 33 C 44 36, 50 40, 50 40 C 50 40, 56 36, 56 33 C 56 30, 52 29, 50 32 Z" fill="#FF2D78" opacity="0.8" transform="scale(0.5) translate(50,28)"/>
    <!-- Name tag lines -->
    <rect x="38" y="64" width="24" height="6" rx="1" fill="#FF2D78" opacity="0.3" stroke="#FF8EB5" stroke-width="0.6"/>
    <line x1="40" y1="66.5" x2="58" y2="66.5" stroke="#FFD1B8" stroke-width="0.7"/>
    <line x1="40" y1="68.5" x2="54" y2="68.5" stroke="#FFD1B8" stroke-width="0.6"/>
  </g>
</svg>`);

// 082 PROD-DES — Blob with ARTBOARD (rectangle + corner handles) inside
write("082-PROD-DES.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="proddesBlobGrad" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8EB5"/>
      <stop offset="55%" stop-color="#FF2D78"/>
      <stop offset="100%" stop-color="#A8004F"/>
    </radialGradient>
    <clipPath id="proddesBlobClip">
      <path d="${blobPath(50, 50, 26, [1.02, 0.9, 1.06, 0.88, 1.03, 0.91, 1.04, 0.9])}"/>
    </clipPath>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0010"/>
  ${splatter(14, 20, 2.5, "#FF2D78", 0.5)}
  ${splatter(83, 18, 2, "#FF8EB5", 0.45)}
  ${splatter(12, 70, 2, "#FF2D78", 0.5)}
  ${splatter(84, 72, 2.5, "#FF6B35", 0.4)}
  ${brushTail("#FF2D78", 0.36)}
  <path d="${blobPath(50, 50, 26, [1.02, 0.9, 1.06, 0.88, 1.03, 0.91, 1.04, 0.9])}" fill="url(#proddesBlobGrad)"/>
  <!-- ARTBOARD with corner handles -->
  <g clip-path="url(#proddesBlobClip)">
    <!-- Artboard frame -->
    <rect x="35" y="38" width="30" height="24" rx="0.5" fill="none" stroke="#FFD1B8" stroke-width="1.2"/>
    <!-- Corner handles (L-shaped) -->
    <!-- Top-left -->
    <polyline points="33,37 33,41 37,41" fill="none" stroke="#FF8EB5" stroke-width="1.2" stroke-linecap="round"/>
    <!-- Top-right -->
    <polyline points="67,37 67,41 63,41" fill="none" stroke="#FF8EB5" stroke-width="1.2" stroke-linecap="round"/>
    <!-- Bottom-left -->
    <polyline points="33,63 33,59 37,59" fill="none" stroke="#FF8EB5" stroke-width="1.2" stroke-linecap="round"/>
    <!-- Bottom-right -->
    <polyline points="67,63 67,59 63,59" fill="none" stroke="#FF8EB5" stroke-width="1.2" stroke-linecap="round"/>
    <!-- Artboard name label below -->
    <line x1="35" y1="65" x2="56" y2="65" stroke="#FF8EB5" stroke-width="0.8" opacity="0.6"/>
    <!-- Content sketch inside artboard -->
    <rect x="37" y="40" width="26" height="8" rx="1" fill="#FF2D78" opacity="0.2"/>
    <line x1="37" y1="51" x2="61" y2="51" stroke="#FFD1B8" stroke-width="0.7" opacity="0.6"/>
    <line x1="37" y1="54" x2="55" y2="54" stroke="#FFD1B8" stroke-width="0.7" opacity="0.5"/>
    <line x1="37" y1="57" x2="58" y2="57" stroke="#FFD1B8" stroke-width="0.7" opacity="0.5"/>
  </g>
</svg>`);

// 083 UI-DES — Blob with PIXEL GRID inside
write("083-UI-DES.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="uidesBlobGrad" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8EB5"/>
      <stop offset="55%" stop-color="#FF2D78"/>
      <stop offset="100%" stop-color="#A8004F"/>
    </radialGradient>
    <clipPath id="uidesBlobClip">
      <path d="${blobPath(50, 50, 26, [1.0, 0.91, 1.06, 0.87, 1.03, 0.92, 1.05, 0.89])}"/>
    </clipPath>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0010"/>
  ${splatter(14, 20, 2, "#FF2D78", 0.5)}
  ${splatter(83, 18, 2, "#FF8EB5", 0.4)}
  ${splatter(12, 70, 2, "#FF2D78", 0.5)}
  ${splatter(84, 72, 2, "#FF6B35", 0.4)}
  ${brushTail("#FF2D78", 0.36)}
  <path d="${blobPath(50, 50, 26, [1.0, 0.91, 1.06, 0.87, 1.03, 0.92, 1.05, 0.89])}" fill="url(#uidesBlobGrad)"/>
  <!-- PIXEL GRID: 5x5 grid of small squares -->
  <g clip-path="url(#uidesBlobClip)">
    <!-- Grid squares arranged 5x5, some filled to form a heart shape -->
    <!-- Row 1 (top) -->
    <rect x="35" y="37" width="4" height="4" rx="0.3" fill="#FF8EB5" opacity="0.3"/>
    <rect x="40" y="37" width="4" height="4" rx="0.3" fill="#FF2D78" opacity="0.8"/>
    <rect x="45" y="37" width="4" height="4" rx="0.3" fill="#FF8EB5" opacity="0.3"/>
    <rect x="50" y="37" width="4" height="4" rx="0.3" fill="#FF2D78" opacity="0.8"/>
    <rect x="55" y="37" width="4" height="4" rx="0.3" fill="#FF8EB5" opacity="0.3"/>
    <!-- Row 2 -->
    <rect x="35" y="42" width="4" height="4" rx="0.3" fill="#FF2D78" opacity="0.8"/>
    <rect x="40" y="42" width="4" height="4" rx="0.3" fill="#FFD1B8" opacity="0.9"/>
    <rect x="45" y="42" width="4" height="4" rx="0.3" fill="#FFD1B8" opacity="0.9"/>
    <rect x="50" y="42" width="4" height="4" rx="0.3" fill="#FFD1B8" opacity="0.9"/>
    <rect x="55" y="42" width="4" height="4" rx="0.3" fill="#FF2D78" opacity="0.8"/>
    <!-- Row 3 -->
    <rect x="35" y="47" width="4" height="4" rx="0.3" fill="#FF8EB5" opacity="0.3"/>
    <rect x="40" y="47" width="4" height="4" rx="0.3" fill="#FFD1B8" opacity="0.9"/>
    <rect x="45" y="47" width="4" height="4" rx="0.3" fill="#FF2D78" opacity="0.9"/>
    <rect x="50" y="47" width="4" height="4" rx="0.3" fill="#FFD1B8" opacity="0.9"/>
    <rect x="55" y="47" width="4" height="4" rx="0.3" fill="#FF8EB5" opacity="0.3"/>
    <!-- Row 4 -->
    <rect x="35" y="52" width="4" height="4" rx="0.3" fill="#FF8EB5" opacity="0.2"/>
    <rect x="40" y="52" width="4" height="4" rx="0.3" fill="#FF8EB5" opacity="0.3"/>
    <rect x="45" y="52" width="4" height="4" rx="0.3" fill="#FFD1B8" opacity="0.9"/>
    <rect x="50" y="52" width="4" height="4" rx="0.3" fill="#FF8EB5" opacity="0.3"/>
    <rect x="55" y="52" width="4" height="4" rx="0.3" fill="#FF8EB5" opacity="0.2"/>
    <!-- Row 5 (bottom) -->
    <rect x="35" y="57" width="4" height="4" rx="0.3" fill="#FF8EB5" opacity="0.1"/>
    <rect x="40" y="57" width="4" height="4" rx="0.3" fill="#FF8EB5" opacity="0.1"/>
    <rect x="45" y="57" width="4" height="4" rx="0.3" fill="#FF8EB5" opacity="0.3"/>
    <rect x="50" y="57" width="4" height="4" rx="0.3" fill="#FF8EB5" opacity="0.1"/>
    <rect x="55" y="57" width="4" height="4" rx="0.3" fill="#FF8EB5" opacity="0.1"/>
    <!-- Grid lines overlay -->
    <line x1="39" y1="36" x2="39" y2="62" stroke="#FFD1B8" stroke-width="0.3" opacity="0.3"/>
    <line x1="44" y1="36" x2="44" y2="62" stroke="#FFD1B8" stroke-width="0.3" opacity="0.3"/>
    <line x1="49" y1="36" x2="49" y2="62" stroke="#FFD1B8" stroke-width="0.3" opacity="0.3"/>
    <line x1="54" y1="36" x2="54" y2="62" stroke="#FFD1B8" stroke-width="0.3" opacity="0.3"/>
    <line x1="34" y1="41" x2="60" y2="41" stroke="#FFD1B8" stroke-width="0.3" opacity="0.3"/>
    <line x1="34" y1="46" x2="60" y2="46" stroke="#FFD1B8" stroke-width="0.3" opacity="0.3"/>
    <line x1="34" y1="51" x2="60" y2="51" stroke="#FFD1B8" stroke-width="0.3" opacity="0.3"/>
    <line x1="34" y1="56" x2="60" y2="56" stroke="#FFD1B8" stroke-width="0.3" opacity="0.3"/>
  </g>
</svg>`);

// 084 JR-DES — Smaller blob, simple star/heart inside, fewer splatters, learning energy
write("084-JR-DES.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="jrdesBlobGrad" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8EB5"/>
      <stop offset="60%" stop-color="#FF2D78"/>
      <stop offset="100%" stop-color="#A8004F"/>
    </radialGradient>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0010"/>
  <!-- Only 2 splatters (junior) -->
  ${splatter(20, 22, 2, "#FF2D78", 0.45)}
  ${splatter(80, 75, 2, "#FF8EB5", 0.4)}
  <!-- Smaller blob -->
  <path d="${blobPath(50, 52, 22, [1.0, 0.88, 1.05, 0.9, 1.02, 0.87, 1.04, 0.91])}" fill="url(#jrdesBlobGrad)"/>
  <!-- Small brush tail -->
  <path d="M 62 67 Q 72 74 74 84 Q 75 88 72 87 Q 69 86 67 78 Q 65 72 62 67 Z" fill="#FF2D78" opacity="0.35"/>
  <!-- STAR inside blob (simple 5-point star) -->
  <g transform="translate(50,52)">
    <polygon points="0,-10 2.9,-4 9.5,-3.1 4.8,1.5 6,8.1 0,4.7 -6,8.1 -4.8,1.5 -9.5,-3.1 -2.9,-4" fill="#FFD1B8" opacity="0.9"/>
    <polygon points="0,-5.5 1.6,-2.2 5.2,-1.7 2.6,0.8 3.3,4.4 0,2.6 -3.3,4.4 -2.6,0.8 -5.2,-1.7 -1.6,-2.2" fill="#FF2D78"/>
  </g>
  <!-- Small heart (learning spark) top-right -->
  <path d="M 67 32 C 65.5 30, 62 31, 62 33.5 C 62 36, 67 39.5, 67 39.5 C 67 39.5, 72 36, 72 33.5 C 72 31, 68.5 30, 67 32 Z" fill="#FF8EB5" opacity="0.6" transform="scale(0.6) translate(45,20)"/>
</svg>`);

// 085 UXR — Blob with RESEARCH MICROSCOPE inside, teal accent
write("085-UXR.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="uxrBlobGrad" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8EB5"/>
      <stop offset="55%" stop-color="#FF2D78"/>
      <stop offset="100%" stop-color="#A8004F"/>
    </radialGradient>
    <radialGradient id="uxrTealGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#06B6D4" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#06B6D4" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="uxrBlobClip">
      <path d="${blobPath(50, 50, 27, [1.03, 0.9, 1.07, 0.87, 1.02, 0.93, 1.06, 0.88])}"/>
    </clipPath>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0010"/>
  <!-- Teal scientific glow -->
  <circle cx="50" cy="50" r="30" fill="url(#uxrTealGlow)"/>
  ${splatter(14, 20, 2.5, "#FF2D78", 0.5)}
  ${splatter(83, 18, 2.5, "#06B6D4", 0.45)}
  ${splatter(12, 70, 2, "#FF2D78", 0.5)}
  ${splatter(84, 72, 2.5, "#06B6D4", 0.45)}
  ${brushTail("#FF2D78", 0.38)}
  <path d="${blobPath(50, 50, 27, [1.03, 0.9, 1.07, 0.87, 1.02, 0.93, 1.06, 0.88])}" fill="url(#uxrBlobGrad)"/>
  <!-- MICROSCOPE inside blob -->
  <g clip-path="url(#uxrBlobClip)">
    <!-- Microscope base -->
    <rect x="43" y="62" width="14" height="2" rx="1" fill="#06B6D4" opacity="0.8"/>
    <!-- Arm post -->
    <rect x="49" y="40" width="2.5" height="22" rx="0.5" fill="#06B6D4" opacity="0.8"/>
    <!-- Horizontal arm -->
    <rect x="44" y="40" width="12" height="2" rx="0.5" fill="#06B6D4" opacity="0.8"/>
    <!-- Eyepiece tube -->
    <rect x="51" y="34" width="2" height="8" rx="0.5" fill="#FFD1B8"/>
    <!-- Objective lens barrel -->
    <rect x="45.5" y="56" width="9" height="4" rx="1" fill="#06B6D4" opacity="0.9"/>
    <!-- Lens element (circle) -->
    <circle cx="50" cy="62" r="2.5" fill="#06B6D4" opacity="0.5" stroke="#FFD1B8" stroke-width="0.6"/>
    <!-- Stage platform -->
    <rect x="43" y="56" width="14" height="1.5" rx="0.5" fill="#FFD1B8" opacity="0.7"/>
    <!-- Sample dot on stage -->
    <circle cx="50" cy="56" r="1.5" fill="#FF2D78" opacity="0.9"/>
  </g>
</svg>`);

// 086 CONTENT-DES — Blob with LETTER TYPOGRAPHY (large serif A) inside, editorial
write("086-CONTENT-DES.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="ctdesBlobGrad" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8EB5"/>
      <stop offset="55%" stop-color="#FF2D78"/>
      <stop offset="100%" stop-color="#A8004F"/>
    </radialGradient>
    <clipPath id="ctdesBlobClip">
      <path d="${blobPath(50, 50, 27, [1.04, 0.89, 1.06, 0.91, 1.03, 0.88, 1.07, 0.9])}"/>
    </clipPath>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0010"/>
  ${splatter(14, 20, 2.5, "#FF2D78", 0.5)}
  ${splatter(83, 18, 2, "#FF8EB5", 0.45)}
  ${splatter(12, 70, 2, "#FF2D78", 0.5)}
  ${splatter(84, 72, 2.5, "#FF6B35", 0.45)}
  ${brushTail("#FF2D78", 0.38)}
  <path d="${blobPath(50, 50, 27, [1.04, 0.89, 1.06, 0.91, 1.03, 0.88, 1.07, 0.9])}" fill="url(#ctdesBlobGrad)"/>
  <!-- LARGE SERIF LETTER "A" inside blob (editorial typography) -->
  <g clip-path="url(#ctdesBlobClip)">
    <!-- The letter A in a large editorial serif style -->
    <text x="50" y="61" font-size="28" fill="#FFD1B8" text-anchor="middle"
      font-family="Georgia, 'Times New Roman', serif" font-weight="bold" opacity="0.95">A</text>
    <!-- Decorative underline rule -->
    <line x1="35" y1="64" x2="65" y2="64" stroke="#FF8EB5" stroke-width="1" opacity="0.7"/>
    <!-- Tiny secondary text lines (editorial layout feel) -->
    <line x1="36" y1="67" x2="60" y2="67" stroke="#FF8EB5" stroke-width="0.5" opacity="0.5"/>
    <line x1="36" y1="70" x2="52" y2="70" stroke="#FF8EB5" stroke-width="0.5" opacity="0.4"/>
  </g>
</svg>`);

// 087 MOTION-DES — Blob with ANIMATION FRAMES (3 squares with motion blur trail), dynamic
write("087-MOTION-DES.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="motdesBlobGrad" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8EB5"/>
      <stop offset="55%" stop-color="#FF2D78"/>
      <stop offset="100%" stop-color="#A8004F"/>
    </radialGradient>
    <filter id="motBlur">
      <feGaussianBlur stdDeviation="1.5" in="SourceGraphic" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <clipPath id="motdesBlobClip">
      <path d="${blobPath(50, 50, 27, [1.05, 0.88, 1.09, 0.86, 1.04, 0.91, 1.07, 0.87])}"/>
    </clipPath>
  </defs>
  <circle cx="50" cy="50" r="42" fill="#1A0010"/>
  ${splatter(14, 20, 3, "#FF2D78", 0.55)}
  ${splatter(83, 18, 2.5, "#FF8EB5", 0.5)}
  ${splatter(12, 70, 2.5, "#FF2D78", 0.5)}
  ${splatter(84, 72, 3, "#FF6B35", 0.5)}
  ${splatter(30, 86, 2, "#FF2D78", 0.4)}
  <!-- Dynamic brush tail (wider) -->
  <path d="M 62 68 Q 78 76 83 90 Q 86 97 81 96 Q 76 95 71 83 Q 67 73 62 68 Z" fill="#FF2D78" opacity="0.42"/>
  <path d="${blobPath(50, 50, 27, [1.05, 0.88, 1.09, 0.86, 1.04, 0.91, 1.07, 0.87])}" fill="url(#motdesBlobGrad)"/>
  <!-- ANIMATION FRAMES: 3 sequential keyframe boxes with motion trail -->
  <g clip-path="url(#motdesBlobClip)">
    <!-- Motion trail (ghost frame 1 — leftmost, most faded) -->
    <rect x="28" y="43" width="12" height="14" rx="1.5" fill="#FF2D78" opacity="0.15" filter="url(#motBlur)"/>
    <!-- Ghost frame 2 (middle) -->
    <rect x="40" y="43" width="12" height="14" rx="1.5" fill="#FF2D78" opacity="0.35" filter="url(#motBlur)"/>
    <!-- Current/active frame 3 (rightmost, crisp) -->
    <rect x="52" y="40" width="16" height="18" rx="1.5" fill="#FF2D78" opacity="0.8" stroke="#FFD1B8" stroke-width="0.9"/>
    <!-- Play triangle inside active frame -->
    <polygon points="57,47 66,49 57,51" fill="#FFD1B8"/>
    <!-- Motion lines connecting frames -->
    <line x1="40" y1="50" x2="42" y2="50" stroke="#FFD1B8" stroke-width="0.7" opacity="0.6"/>
    <line x1="52" y1="50" x2="54" y2="50" stroke="#FFD1B8" stroke-width="0.7" opacity="0.4"/>
    <!-- Speed lines (horizontal dashes for velocity feel) -->
    <line x1="26" y1="46" x2="30" y2="46" stroke="#FF8EB5" stroke-width="0.6" opacity="0.5"/>
    <line x1="26" y1="50" x2="29" y2="50" stroke="#FF8EB5" stroke-width="0.6" opacity="0.4"/>
    <line x1="26" y1="54" x2="30" y2="54" stroke="#FF8EB5" stroke-width="0.6" opacity="0.5"/>
  </g>
</svg>`);

console.log("\nBatch 5 complete — 24 SVG avatars written:");
console.log("  DEPT 04 (Product Management, orange #FF6B35): 064-074");
console.log("  DEPT 05 (Design, hot pink #FF2D78): 074-087");
