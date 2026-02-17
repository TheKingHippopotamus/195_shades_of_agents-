import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUT = join(__dirname, "../public/brand/avatars/agents");

function svg(body: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200"><defs><radialGradient id="bg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#1a1f3a"/><stop offset="100%" stop-color="#030108"/></radialGradient></defs><rect width="100" height="100" rx="18" fill="url(#bg)"/>${body}</svg>`;
}

// Shared head structure builder — circuit rectangle head + antenna + side ports
// display content injected per agent
function seniorHead(displayContent: string, accentColor: string, circuitTraces: string): string {
  return [
    // Antenna
    `<line x1="50" y1="25" x2="50" y2="13" stroke="${accentColor}" stroke-width="1.5"/>`,
    `<circle cx="50" cy="11" r="3" fill="${accentColor}" opacity="0.9"/>`,
    `<circle cx="50" cy="11" r="1.5" fill="#030108"/>`,
    // Head rectangle
    `<rect x="20" y="25" width="60" height="52" rx="5" fill="#0D1526" stroke="${accentColor}" stroke-width="2"/>`,
    // Display screen (inner panel)
    `<rect x="26" y="30" width="48" height="30" rx="3" fill="#030B18" stroke="${accentColor}" stroke-width="0.8" opacity="0.9"/>`,
    // Display content (tech symbol)
    displayContent,
    // Bottom mouth/speaker bar
    `<rect x="30" y="65" width="40" height="7" rx="3" fill="#030B18" stroke="${accentColor}" stroke-width="0.7"/>`,
    // Speaker dots
    `<circle cx="37" cy="68.5" r="1.2" fill="${accentColor}" opacity="0.7"/>`,
    `<circle cx="43" cy="68.5" r="1.2" fill="${accentColor}" opacity="0.7"/>`,
    `<circle cx="49" cy="68.5" r="1.2" fill="${accentColor}" opacity="0.7"/>`,
    `<circle cx="55" cy="68.5" r="1.2" fill="${accentColor}" opacity="0.7"/>`,
    `<circle cx="61" cy="68.5" r="1.2" fill="${accentColor}" opacity="0.7"/>`,
    // Side ear ports
    `<rect x="16" y="36" width="4" height="8" rx="2" fill="${accentColor}" opacity="0.6"/>`,
    `<rect x="80" y="36" width="4" height="8" rx="2" fill="${accentColor}" opacity="0.6"/>`,
    `<rect x="16" y="47" width="4" height="5" rx="2" fill="${accentColor}" opacity="0.35"/>`,
    `<rect x="80" y="47" width="4" height="5" rx="2" fill="${accentColor}" opacity="0.35"/>`,
    // Circuit traces
    circuitTraces,
  ].join("");
}

function midHead(displayContent: string, accentColor: string): string {
  return [
    // Short antenna
    `<line x1="50" y1="26" x2="50" y2="15" stroke="${accentColor}" stroke-width="1.2"/>`,
    `<rect x="47" y="13" width="6" height="4" rx="1" fill="${accentColor}" opacity="0.8"/>`,
    // Head rectangle
    `<rect x="22" y="26" width="56" height="50" rx="4" fill="#0D1526" stroke="${accentColor}" stroke-width="1.8"/>`,
    // Display screen
    `<rect x="28" y="31" width="44" height="28" rx="2.5" fill="#030B18" stroke="${accentColor}" stroke-width="0.7" opacity="0.9"/>`,
    displayContent,
    // Mouth bar
    `<rect x="32" y="63" width="36" height="6" rx="2.5" fill="#030B18" stroke="${accentColor}" stroke-width="0.6"/>`,
    `<circle cx="39" cy="66" r="1" fill="${accentColor}" opacity="0.6"/>`,
    `<circle cx="45" cy="66" r="1" fill="${accentColor}" opacity="0.6"/>`,
    `<circle cx="51" cy="66" r="1" fill="${accentColor}" opacity="0.6"/>`,
    `<circle cx="57" cy="66" r="1" fill="${accentColor}" opacity="0.6"/>`,
    // Side ports (smaller)
    `<rect x="18" y="38" width="4" height="6" rx="2" fill="${accentColor}" opacity="0.5"/>`,
    `<rect x="78" y="38" width="4" height="6" rx="2" fill="${accentColor}" opacity="0.5"/>`,
    // Simple circuit traces
    `<path d="M22,52 H18 V58 H22" stroke="${accentColor}" stroke-width="0.7" fill="none" opacity="0.4"/>`,
    `<path d="M78,52 H82 V58 H78" stroke="${accentColor}" stroke-width="0.7" fill="none" opacity="0.4"/>`,
  ].join("");
}

function juniorHead(displayContent: string, accentColor: string): string {
  return [
    // Minimal antenna — bent wire (still learning)
    `<path d="M50,27 L50,18 L54,14" stroke="${accentColor}" stroke-width="1" fill="none"/>`,
    `<circle cx="54" cy="13" r="2" fill="${accentColor}" opacity="0.6"/>`,
    // Smaller head
    `<rect x="24" y="27" width="52" height="48" rx="4" fill="#0D1526" stroke="${accentColor}" stroke-width="1.5"/>`,
    // Display screen
    `<rect x="30" y="32" width="40" height="26" rx="2" fill="#030B18" stroke="${accentColor}" stroke-width="0.6" opacity="0.85"/>`,
    displayContent,
    // Mouth
    `<rect x="33" y="62" width="34" height="5.5" rx="2" fill="#030B18" stroke="${accentColor}" stroke-width="0.6"/>`,
    `<circle cx="40" cy="64.5" r="0.9" fill="${accentColor}" opacity="0.5"/>`,
    `<circle cx="46" cy="64.5" r="0.9" fill="${accentColor}" opacity="0.5"/>`,
    `<circle cx="52" cy="64.5" r="0.9" fill="${accentColor}" opacity="0.5"/>`,
    `<circle cx="58" cy="64.5" r="0.9" fill="${accentColor}" opacity="0.5"/>`,
    // Single side port each side
    `<rect x="20" y="40" width="4" height="5" rx="2" fill="${accentColor}" opacity="0.4"/>`,
    `<rect x="76" y="40" width="4" height="5" rx="2" fill="${accentColor}" opacity="0.4"/>`,
    // Minimal trace
    `<path d="M24,50 H20" stroke="${accentColor}" stroke-width="0.6" opacity="0.3"/>`,
    `<path d="M76,50 H80" stroke="${accentColor}" stroke-width="0.6" opacity="0.3"/>`,
  ].join("");
}

// SENIOR CIRCUIT TRACES (complex, unique per agent)
const tracesSRFEREACT = [
  `<path d="M20,44 H14 V50 H20" stroke="#61DAFB" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<circle cx="14" cy="47" r="1.5" fill="#61DAFB" opacity="0.6"/>`,
  `<path d="M80,44 H86 V50 H80" stroke="#61DAFB" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<circle cx="86" cy="47" r="1.5" fill="#61DAFB" opacity="0.6"/>`,
  `<path d="M20,55 H12 V62 H20" stroke="#00D9FF" stroke-width="0.7" fill="none" opacity="0.4"/>`,
  `<path d="M80,55 H88 V62 H80" stroke="#00D9FF" stroke-width="0.7" fill="none" opacity="0.4"/>`,
].join("");

const tracesSRFEVUE = [
  `<path d="M20,44 H13 V55 H20" stroke="#42B883" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<circle cx="13" cy="49" r="1.5" fill="#42B883" opacity="0.7"/>`,
  `<path d="M80,44 H87 V55 H80" stroke="#42B883" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<circle cx="87" cy="49" r="1.5" fill="#42B883" opacity="0.7"/>`,
  `<path d="M20,60 H15 V65" stroke="#35495E" stroke-width="0.7" fill="none" opacity="0.5"/>`,
  `<path d="M80,60 H85 V65" stroke="#35495E" stroke-width="0.7" fill="none" opacity="0.5"/>`,
].join("");

const tracesSRBENODE = [
  `<path d="M20,42 H11 V48 H20" stroke="#68A063" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<rect x="8" y="45" width="4" height="4" rx="1" fill="#68A063" opacity="0.6"/>`,
  `<path d="M80,42 H89 V48 H80" stroke="#68A063" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<rect x="88" y="45" width="4" height="4" rx="1" fill="#68A063" opacity="0.6"/>`,
  `<path d="M20,56 H13 V62" stroke="#00D9FF" stroke-width="0.7" fill="none" opacity="0.4"/>`,
  `<path d="M80,56 H87 V62" stroke="#00D9FF" stroke-width="0.7" fill="none" opacity="0.4"/>`,
].join("");

const tracesSRBEPY = [
  `<path d="M20,43 H12 V47 H20" stroke="#3776AB" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<circle cx="12" cy="45" r="1.5" fill="#FFD43B" opacity="0.8"/>`,
  `<path d="M80,43 H88 V47 H80" stroke="#3776AB" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<circle cx="88" cy="45" r="1.5" fill="#FFD43B" opacity="0.8"/>`,
  `<path d="M20,58 H14 V66 H20" stroke="#FFD43B" stroke-width="0.7" fill="none" opacity="0.4"/>`,
  `<path d="M80,58 H86 V66 H80" stroke="#FFD43B" stroke-width="0.7" fill="none" opacity="0.4"/>`,
].join("");

const tracesSRBEGO = [
  `<path d="M20,43 H11 V50 H20" stroke="#00ADD8" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<circle cx="11" cy="46" r="2" fill="#00ADD8" opacity="0.5"/>`,
  `<path d="M80,43 H89 V50 H80" stroke="#00ADD8" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<circle cx="89" cy="46" r="2" fill="#00ADD8" opacity="0.5"/>`,
  `<path d="M20,57 H15 V64" stroke="#00D9FF" stroke-width="0.7" fill="none" opacity="0.4"/>`,
  `<path d="M80,57 H85 V64" stroke="#00D9FF" stroke-width="0.7" fill="none" opacity="0.4"/>`,
].join("");

const tracesSRFS = [
  `<path d="M20,40 H12 V45 H20" stroke="#00D9FF" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<path d="M20,48 H12 V53 H20" stroke="#8B5CF6" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<path d="M20,56 H12 V61 H20" stroke="#00D9FF" stroke-width="0.8" fill="none" opacity="0.4"/>`,
  `<path d="M80,40 H88 V45 H80" stroke="#00D9FF" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<path d="M80,48 H88 V53 H80" stroke="#8B5CF6" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<path d="M80,56 H88 V61 H80" stroke="#00D9FF" stroke-width="0.8" fill="none" opacity="0.4"/>`,
].join("");

const tracesSRMOBRN = [
  `<path d="M20,43 H12 V50 H20" stroke="#FF2D78" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<circle cx="12" cy="46" r="1.5" fill="#FF2D78" opacity="0.7"/>`,
  `<path d="M80,43 H88 V50 H80" stroke="#FF2D78" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<circle cx="88" cy="46" r="1.5" fill="#FF2D78" opacity="0.7"/>`,
  `<path d="M20,58 H14 V65" stroke="#61DAFB" stroke-width="0.7" fill="none" opacity="0.4"/>`,
  `<path d="M80,58 H86 V65" stroke="#61DAFB" stroke-width="0.7" fill="none" opacity="0.4"/>`,
].join("");

const tracesSRMOBNAT = [
  `<path d="M20,43 H11 V52 H20" stroke="#F05138" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<rect x="8" y="44" width="4" height="8" rx="1" fill="#F05138" opacity="0.6"/>`,
  `<path d="M80,43 H89 V52 H80" stroke="#F05138" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<rect x="88" y="44" width="4" height="8" rx="1" fill="#F05138" opacity="0.6"/>`,
  `<path d="M20,60 H14 V66" stroke="#00D9FF" stroke-width="0.7" fill="none" opacity="0.3"/>`,
  `<path d="M80,60 H86 V66" stroke="#00D9FF" stroke-width="0.7" fill="none" opacity="0.3"/>`,
].join("");

const tracesSRDE = [
  `<path d="M20,41 H11 V46 H20" stroke="#FF6B35" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<path d="M20,50 H13" stroke="#FF6B35" stroke-width="0.8" opacity="0.4"/>`,
  `<path d="M20,59 H11 V64 H20" stroke="#FF6B35" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<path d="M80,41 H89 V46 H80" stroke="#FF6B35" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<path d="M80,50 H87" stroke="#FF6B35" stroke-width="0.8" opacity="0.4"/>`,
  `<path d="M80,59 H89 V64 H80" stroke="#FF6B35" stroke-width="0.8" fill="none" opacity="0.5"/>`,
].join("");

const tracesSRDBA = [
  `<path d="M20,42 H12 V49 H20" stroke="#00D9FF" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<path d="M20,52 H12 V59 H20" stroke="#22C55E" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<path d="M80,42 H88 V49 H80" stroke="#00D9FF" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<path d="M80,52 H88 V59 H80" stroke="#22C55E" stroke-width="0.8" fill="none" opacity="0.5"/>`,
  `<circle cx="12" cy="45.5" r="1.5" fill="#22C55E" opacity="0.7"/>`,
  `<circle cx="88" cy="45.5" r="1.5" fill="#22C55E" opacity="0.7"/>`,
].join("");

// ═══════════════════════════════════════════════════════
// DISPLAY SYMBOLS
// ═══════════════════════════════════════════════════════

// SR-FE-REACT: React atom — center nucleus + 3 elliptical orbits at 0°, 60°, 120°
const displaySRFEREACT = [
  // Orbit 1 — horizontal
  `<ellipse cx="50" cy="45" rx="16" ry="5" fill="none" stroke="#61DAFB" stroke-width="1.2" opacity="0.9"/>`,
  // Orbit 2 — rotated 60°
  `<ellipse cx="50" cy="45" rx="16" ry="5" fill="none" stroke="#61DAFB" stroke-width="1.2" opacity="0.9" transform="rotate(60 50 45)"/>`,
  // Orbit 3 — rotated 120°
  `<ellipse cx="50" cy="45" rx="16" ry="5" fill="none" stroke="#61DAFB" stroke-width="1.2" opacity="0.9" transform="rotate(120 50 45)"/>`,
  // Nucleus
  `<circle cx="50" cy="45" r="3.5" fill="#61DAFB"/>`,
  `<circle cx="50" cy="45" r="1.8" fill="#030B18"/>`,
  // Electron dot on orbit 1
  `<circle cx="66" cy="45" r="2" fill="#61DAFB" opacity="0.9"/>`,
].join("");

// SR-FE-VUE: Vue chevron logo — large V shape, two-tone green/dark mountain
const displaySRFEVUE = [
  // Outer green V
  `<polygon points="50,57 30,30 37,30 50,50 63,30 70,30" fill="#42B883"/>`,
  // Inner dark V (creates two-color Vue logo)
  `<polygon points="50,52 38,30 44,30 50,43 56,30 62,30" fill="#35495E"/>`,
  // Peak dot
  `<circle cx="50" cy="57.5" r="1.5" fill="#42B883" opacity="0.8"/>`,
].join("");

// SR-BE-NODE: Node.js hexagon with inner dot
const displaySRBENODE = [
  // Hexagon
  `<polygon points="50,30 63,37.5 63,52.5 50,60 37,52.5 37,37.5" fill="none" stroke="#68A063" stroke-width="2"/>`,
  // Inner smaller hexagon
  `<polygon points="50,35 59,40.3 59,51 50,55.5 41,51 41,40.3" fill="#68A063" opacity="0.25"/>`,
  // Center dot
  `<circle cx="50" cy="45" r="5" fill="#68A063" opacity="0.9"/>`,
  `<circle cx="50" cy="45" r="2.5" fill="#030B18"/>`,
  // Horizontal line through center (Node logo detail)
  `<line x1="39" y1="45" x2="61" y2="45" stroke="#68A063" stroke-width="1" opacity="0.5"/>`,
].join("");

// SR-BE-PY: Python — two intertwined snakes as abstract curves + blue/yellow
const displaySRBEPY = [
  // Blue snake body (left-leaning S)
  `<path d="M42,58 C42,58 36,54 37,46 C38,38 44,35 50,35 C50,35 58,35 58,39 L50,39 C50,39 44,39 44,43 L44,46 L58,46 C58,46 65,46 65,52 C65,58 58,62 50,62" fill="none" stroke="#3776AB" stroke-width="2.5" stroke-linecap="round"/>`,
  // Yellow snake body (right-leaning S)
  `<path d="M58,32 C58,32 64,36 63,44 C62,52 56,55 50,55 C50,55 42,55 42,51 L50,51 C50,51 56,51 56,47 L56,44 L42,44 C42,44 35,44 35,38 C35,32 42,28 50,28" fill="none" stroke="#FFD43B" stroke-width="2.5" stroke-linecap="round"/>`,
  // Blue head dot
  `<circle cx="50" cy="62" r="3" fill="#3776AB"/>`,
  // Yellow head dot
  `<circle cx="50" cy="28" r="3" fill="#FFD43B"/>`,
].join("");

// SR-BE-GO: Go Gopher — two ear bumps + two big round eyes
const displaySRBEGO = [
  // Gopher head outline
  `<ellipse cx="50" cy="47" rx="16" ry="13" fill="#00ADD8" opacity="0.2" stroke="#00ADD8" stroke-width="1.5"/>`,
  // Left ear bump
  `<circle cx="38" cy="35" r="5" fill="#00ADD8" opacity="0.8" stroke="#00ADD8" stroke-width="1"/>`,
  `<circle cx="38" cy="35" r="2.5" fill="#030B18"/>`,
  // Right ear bump
  `<circle cx="62" cy="35" r="5" fill="#00ADD8" opacity="0.8" stroke="#00ADD8" stroke-width="1"/>`,
  `<circle cx="62" cy="35" r="2.5" fill="#030B18"/>`,
  // Left big eye
  `<circle cx="42" cy="47" r="5.5" fill="white" opacity="0.9"/>`,
  `<circle cx="42" cy="47" r="3" fill="#00ADD8"/>`,
  `<circle cx="42" cy="47" r="1.5" fill="#030B18"/>`,
  `<circle cx="43.5" cy="45.5" r="0.8" fill="white" opacity="0.8"/>`,
  // Right big eye
  `<circle cx="58" cy="47" r="5.5" fill="white" opacity="0.9"/>`,
  `<circle cx="58" cy="47" r="3" fill="#00ADD8"/>`,
  `<circle cx="58" cy="47" r="1.5" fill="#030B18"/>`,
  `<circle cx="59.5" cy="45.5" r="0.8" fill="white" opacity="0.8"/>`,
  // Snout
  `<ellipse cx="50" cy="55" rx="6" ry="4" fill="#00ADD8" opacity="0.5"/>`,
  `<line x1="50" y1="51" x2="50" y2="59" stroke="#030B18" stroke-width="0.8" opacity="0.6"/>`,
].join("");

// SR-FS: Full Stack — 3 stacked horizontal bars (FE cyan / BE purple / DB cyan)
const displaySRFS = [
  // Top bar — Frontend (cyan)
  `<rect x="32" y="31" width="36" height="8" rx="2" fill="#00D9FF" opacity="0.85"/>`,
  `<text x="50" y="37.5" text-anchor="middle" fill="#030B18" font-size="5" font-family="monospace" font-weight="bold">FRONT</text>`,
  // Gap connector
  `<line x1="50" y1="39" x2="50" y2="41" stroke="#00D9FF" stroke-width="1" opacity="0.5"/>`,
  `<line x1="50" y1="39" x2="50" y2="41" stroke="#8B5CF6" stroke-width="1" opacity="0.5"/>`,
  // Middle bar — Backend (purple)
  `<rect x="32" y="41" width="36" height="8" rx="2" fill="#8B5CF6" opacity="0.85"/>`,
  `<text x="50" y="47.5" text-anchor="middle" fill="white" font-size="5" font-family="monospace" font-weight="bold">BACK</text>`,
  // Gap connector
  `<line x1="50" y1="49" x2="50" y2="51" stroke="#8B5CF6" stroke-width="1" opacity="0.5"/>`,
  `<line x1="50" y1="49" x2="50" y2="51" stroke="#00D9FF" stroke-width="1" opacity="0.5"/>`,
  // Bottom bar — Database (cyan-dark)
  `<rect x="32" y="51" width="36" height="8" rx="2" fill="#0891B2" opacity="0.85"/>`,
  `<text x="50" y="57.5" text-anchor="middle" fill="white" font-size="5" font-family="monospace" font-weight="bold">DATA</text>`,
].join("");

// SR-MOB-RN: React Native — React atom + phone frame
const displaySRMOBRN = [
  // Phone frame outline
  `<rect x="37" y="29" width="26" height="32" rx="4" fill="none" stroke="#FF2D78" stroke-width="1.5"/>`,
  `<circle cx="50" cy="34" r="1.2" fill="#FF2D78" opacity="0.6"/>`,
  `<rect x="44" y="57" width="12" height="2" rx="1" fill="#FF2D78" opacity="0.5"/>`,
  // React atom inside phone
  `<ellipse cx="50" cy="44" rx="9" ry="3" fill="none" stroke="#61DAFB" stroke-width="1"/>`,
  `<ellipse cx="50" cy="44" rx="9" ry="3" fill="none" stroke="#61DAFB" stroke-width="1" transform="rotate(60 50 44)"/>`,
  `<ellipse cx="50" cy="44" rx="9" ry="3" fill="none" stroke="#61DAFB" stroke-width="1" transform="rotate(120 50 44)"/>`,
  `<circle cx="50" cy="44" r="2.2" fill="#61DAFB"/>`,
  `<circle cx="50" cy="44" r="1" fill="#030B18"/>`,
].join("");

// SR-MOB-NAT: Native Mobile — Swift bird / bowtie chevron symbol
const displaySRMOBNAT = [
  // Swift logo — stylized bird shape (two mirrored arcs forming a swoosh)
  // Left wing arc
  `<path d="M33,55 C33,55 38,35 62,30 C62,30 45,38 45,50" fill="#F05138" opacity="0.9"/>`,
  // Right body
  `<path d="M45,50 C45,50 52,45 67,50 C67,50 55,52 45,60 Z" fill="#F05138" opacity="0.9"/>`,
  // Highlight streak
  `<path d="M40,38 C40,38 55,35 62,30" fill="none" stroke="white" stroke-width="1.5" opacity="0.4" stroke-linecap="round"/>`,
  // Apple-style phone outline underneath
  `<rect x="38" y="56" width="24" height="6" rx="3" fill="none" stroke="#F05138" stroke-width="1" opacity="0.5"/>`,
].join("");

// SR-DE: Data Flow — pipeline ETL funnel with flowing arrows
const displaySRDE = [
  // Source box
  `<rect x="30" y="30" width="12" height="8" rx="2" fill="#FF6B35" opacity="0.8"/>`,
  `<text x="36" y="36" text-anchor="middle" fill="white" font-size="4" font-family="monospace">SRC</text>`,
  // Arrow 1
  `<path d="M42,34 L47,34" stroke="#FF6B35" stroke-width="1.5" marker-end="url(#arr)"/>`,
  `<polygon points="47,32 50,34 47,36" fill="#FF6B35"/>`,
  // Transform box (middle, larger)
  `<rect x="50" y="28" width="14" height="12" rx="2" fill="#FF6B35" opacity="0.6"/>`,
  `<text x="57" y="34" text-anchor="middle" fill="white" font-size="3.5" font-family="monospace">ETL</text>`,
  `<text x="57" y="38" text-anchor="middle" fill="white" font-size="3.5" font-family="monospace">⚙</text>`,
  // Arrow 2
  `<polygon points="63,32 66,34 63,36" fill="#FF6B35"/>`,
  // Dest box
  `<rect x="66" y="30" width="12" height="8" rx="2" fill="#00D9FF" opacity="0.8"/>`,
  `<text x="72" y="36" text-anchor="middle" fill="#030B18" font-size="4" font-family="monospace">DST</text>`,
  // Bottom flow pipe
  `<path d="M36,38 L36,50 L50,50" stroke="#FF6B35" stroke-width="1" fill="none" opacity="0.5" stroke-dasharray="2,2"/>`,
  `<path d="M57,40 L57,50" stroke="#FF6B35" stroke-width="1" fill="none" opacity="0.5" stroke-dasharray="2,2"/>`,
  `<path d="M72,38 L72,50 L57,50" stroke="#00D9FF" stroke-width="1" fill="none" opacity="0.5" stroke-dasharray="2,2"/>`,
  // Flow arrows on pipe
  `<polygon points="48,48 50,50 48,52" fill="#FF6B35" opacity="0.7"/>`,
  `<polygon points="59,48 57,50 59,52" fill="#00D9FF" opacity="0.7"/>`,
  // Status dots
  `<circle cx="36" cy="55" r="2" fill="#22C55E" opacity="0.8"/>`,
  `<circle cx="42" cy="55" r="2" fill="#22C55E" opacity="0.8"/>`,
  `<circle cx="48" cy="55" r="2" fill="#FFD43B" opacity="0.8"/>`,
  `<circle cx="54" cy="55" r="2" fill="#FF6B35" opacity="0.8"/>`,
  `<circle cx="60" cy="55" r="2" fill="#22C55E" opacity="0.8"/>`,
].join("");

// SR-DBA: Database — classic 3-cylinder DB stack
const displaySRDBA = [
  // Top cylinder
  `<ellipse cx="50" cy="32" rx="14" ry="4" fill="#0891B2" stroke="#00D9FF" stroke-width="1"/>`,
  `<rect x="36" y="32" width="28" height="8" fill="#0891B2" opacity="0.7"/>`,
  `<ellipse cx="50" cy="40" rx="14" ry="4" fill="#0891B2" stroke="#00D9FF" stroke-width="0.8"/>`,
  // Middle cylinder
  `<rect x="36" y="40" width="28" height="8" fill="#075985" opacity="0.9"/>`,
  `<ellipse cx="50" cy="48" rx="14" ry="4" fill="#075985" stroke="#00D9FF" stroke-width="0.8"/>`,
  // Bottom cylinder
  `<rect x="36" y="48" width="28" height="8" fill="#164E63" opacity="0.9"/>`,
  `<ellipse cx="50" cy="56" rx="14" ry="4" fill="#164E63" stroke="#22C55E" stroke-width="1"/>`,
  // Data lines inside top cylinder
  `<line x1="40" y1="36" x2="60" y2="36" stroke="#00D9FF" stroke-width="0.6" opacity="0.5"/>`,
  `<line x1="40" y1="38" x2="55" y2="38" stroke="#00D9FF" stroke-width="0.6" opacity="0.4"/>`,
  // Data lines inside middle
  `<line x1="40" y1="44" x2="60" y2="44" stroke="#00D9FF" stroke-width="0.6" opacity="0.5"/>`,
  `<line x1="40" y1="46" x2="52" y2="46" stroke="#00D9FF" stroke-width="0.6" opacity="0.4"/>`,
  // Index indicators on bottom
  `<circle cx="42" cy="52" r="1.5" fill="#22C55E" opacity="0.8"/>`,
  `<circle cx="47" cy="52" r="1.5" fill="#22C55E" opacity="0.6"/>`,
  `<circle cx="52" cy="52" r="1.5" fill="#00D9FF" opacity="0.6"/>`,
].join("");

// ═══════════════════════════════════════════════════════
// MID-LEVEL DISPLAY SYMBOLS
// ═══════════════════════════════════════════════════════

// FE-ENG: HTML/JSX angle brackets </>
const displayFEENG = [
  // Left bracket <
  `<text x="36" y="53" text-anchor="middle" fill="#00D9FF" font-size="18" font-family="monospace" font-weight="bold">&lt;</text>`,
  // Right bracket >
  `<text x="65" y="53" text-anchor="middle" fill="#00D9FF" font-size="18" font-family="monospace" font-weight="bold">&gt;</text>`,
  // Slash in middle
  `<line x1="47" y1="33" x2="53" y2="57" stroke="#00D9FF" stroke-width="2" opacity="0.8"/>`,
].join("");

// BE-ENG: Server cylinder
const displayBEENG = [
  // Server box
  `<rect x="33" y="31" width="34" height="28" rx="3" fill="#1E293B" stroke="#00D9FF" stroke-width="1.2"/>`,
  // Server rack lines
  `<rect x="36" y="34" width="28" height="5" rx="1" fill="#00D9FF" opacity="0.7"/>`,
  `<rect x="36" y="41" width="28" height="5" rx="1" fill="#00D9FF" opacity="0.5"/>`,
  `<rect x="36" y="48" width="28" height="5" rx="1" fill="#00D9FF" opacity="0.35"/>`,
  // Status LEDs
  `<circle cx="38" cy="36.5" r="1.2" fill="#22C55E" opacity="0.9"/>`,
  `<circle cx="41" cy="36.5" r="1.2" fill="#22C55E" opacity="0.9"/>`,
  `<circle cx="38" cy="43.5" r="1.2" fill="#FFD43B" opacity="0.9"/>`,
  `<circle cx="41" cy="43.5" r="1.2" fill="#22C55E" opacity="0.9"/>`,
  `<circle cx="38" cy="50.5" r="1.2" fill="#22C55E" opacity="0.9"/>`,
  `<circle cx="41" cy="50.5" r="1.2" fill="#22C55E" opacity="0.9"/>`,
].join("");

// MOB-ENG: Phone shape with signal bars
const displayMOBENG = [
  // Phone frame
  `<rect x="39" y="30" width="22" height="29" rx="4" fill="#1E293B" stroke="#FF2D78" stroke-width="1.5"/>`,
  `<circle cx="50" cy="34" r="1.2" fill="#FF2D78" opacity="0.6"/>`,
  // Home button
  `<circle cx="50" cy="56" r="2" fill="none" stroke="#FF2D78" stroke-width="1"/>`,
  // Screen with signal bars
  `<rect x="43" y="37" width="14" height="14" rx="1" fill="#0D1526"/>`,
  `<rect x="45" y="45" width="2" height="4" rx="0.5" fill="#FF2D78" opacity="0.7"/>`,
  `<rect x="48" y="43" width="2" height="6" rx="0.5" fill="#FF2D78" opacity="0.8"/>`,
  `<rect x="51" y="41" width="2" height="8" rx="0.5" fill="#FF2D78" opacity="0.9"/>`,
  `<rect x="54" y="39" width="2" height="10" rx="0.5" fill="#FF2D78"/>`,
].join("");

// FS-ENG: Simpler stack bars (smaller, 2-tone)
const displayFSENG = [
  // Two-bar stack (simpler than SR-FS)
  `<rect x="33" y="33" width="34" height="9" rx="2.5" fill="#00D9FF" opacity="0.8"/>`,
  `<text x="50" y="40" text-anchor="middle" fill="#030B18" font-size="5.5" font-family="monospace" font-weight="bold">FRONT</text>`,
  // Connector
  `<rect x="46" y="42" width="8" height="3" rx="1" fill="#8B5CF6" opacity="0.5"/>`,
  // Bottom bar
  `<rect x="33" y="45" width="34" height="9" rx="2.5" fill="#8B5CF6" opacity="0.8"/>`,
  `<text x="50" y="52" text-anchor="middle" fill="white" font-size="5.5" font-family="monospace" font-weight="bold">BACK</text>`,
].join("");

// DATA-ENG: Bar chart
const displayDATAENG = [
  // Bar chart — 5 bars growing left to right
  `<rect x="31" y="51" width="6" height="8" rx="1" fill="#FF6B35" opacity="0.7"/>`,
  `<rect x="39" y="45" width="6" height="14" rx="1" fill="#FF6B35" opacity="0.8"/>`,
  `<rect x="47" y="39" width="6" height="20" rx="1" fill="#FF6B35" opacity="0.9"/>`,
  `<rect x="55" y="43" width="6" height="16" rx="1" fill="#FF6B35" opacity="0.85"/>`,
  `<rect x="63" y="37" width="6" height="22" rx="1" fill="#FF6B35"/>`,
  // Baseline
  `<line x1="30" y1="59" x2="70" y2="59" stroke="#00D9FF" stroke-width="0.8" opacity="0.6"/>`,
  // Trend line
  `<polyline points="34,52 42,47 50,41 58,45 66,39" fill="none" stroke="#00D9FF" stroke-width="1.2" stroke-dasharray="2,1" opacity="0.8"/>`,
].join("");

// ═══════════════════════════════════════════════════════
// JUNIOR DISPLAY SYMBOLS
// ═══════════════════════════════════════════════════════

// JR-FE: Pencil/pen icon (learning)
const displayJRFE = [
  // Pencil body
  `<rect x="44" y="33" width="8" height="18" rx="1" fill="#00D9FF" opacity="0.7" transform="rotate(-20 48 42)"/>`,
  // Pencil tip
  `<polygon points="44,49 48,55 52,49" fill="#FFD43B" opacity="0.9" transform="rotate(-20 48 52)"/>`,
  // Pencil top eraser
  `<rect x="44" y="33" width="8" height="3" rx="1" fill="#FF6B35" opacity="0.7" transform="rotate(-20 48 34)"/>`,
  // Writing line
  `<line x1="36" y1="56" x2="60" y2="56" stroke="#00D9FF" stroke-width="0.8" opacity="0.5" stroke-dasharray="2,2"/>`,
  `<line x1="36" y1="58" x2="55" y2="58" stroke="#00D9FF" stroke-width="0.8" opacity="0.3" stroke-dasharray="2,2"/>`,
].join("");

// JR-BE: Small angle brackets
const displayJRBE = [
  // Smaller, slightly wobbly brackets (still learning)
  `<text x="40" y="52" text-anchor="middle" fill="#00D9FF" font-size="14" font-family="monospace" opacity="0.85">&lt;</text>`,
  `<text x="61" y="52" text-anchor="middle" fill="#00D9FF" font-size="14" font-family="monospace" opacity="0.85">&gt;</text>`,
  `<line x1="46" y1="36" x2="51" y2="54" stroke="#00D9FF" stroke-width="1.5" opacity="0.6"/>`,
  // Learning indicator — small blinking cursor
  `<rect x="52" y="53" width="1.5" height="3" rx="0.5" fill="#00D9FF" opacity="0.7"/>`,
].join("");

// JR-MOB: Small phone icon
const displayJRMOB = [
  // Small simple phone
  `<rect x="41" y="33" width="18" height="24" rx="3.5" fill="#1E293B" stroke="#FF2D78" stroke-width="1.2"/>`,
  `<circle cx="50" cy="36" r="1" fill="#FF2D78" opacity="0.5"/>`,
  `<circle cx="50" cy="54" r="1.5" fill="none" stroke="#FF2D78" stroke-width="0.8"/>`,
  // Simple screen
  `<rect x="44" y="38" width="12" height="12" rx="1" fill="#0D1526"/>`,
  // App icon grid
  `<rect x="45.5" y="39.5" width="3.5" height="3.5" rx="0.8" fill="#FF2D78" opacity="0.6"/>`,
  `<rect x="51" y="39.5" width="3.5" height="3.5" rx="0.8" fill="#00D9FF" opacity="0.6"/>`,
  `<rect x="45.5" y="45" width="3.5" height="3.5" rx="0.8" fill="#FFD43B" opacity="0.6"/>`,
  `<rect x="51" y="45" width="3.5" height="3.5" rx="0.8" fill="#22C55E" opacity="0.6"/>`,
].join("");

// JR-DATA-ENG: Small dot chart + book icon in corner
const displayJRDATAENG = [
  // Scatter plot dots
  `<circle cx="36" cy="55" r="2" fill="#FF6B35" opacity="0.8"/>`,
  `<circle cx="41" cy="50" r="2" fill="#FF6B35" opacity="0.7"/>`,
  `<circle cx="46" cy="52" r="2" fill="#FF6B35" opacity="0.8"/>`,
  `<circle cx="51" cy="46" r="2" fill="#FF6B35" opacity="0.9"/>`,
  `<circle cx="56" cy="48" r="2" fill="#FF6B35" opacity="0.7"/>`,
  `<circle cx="61" cy="43" r="2" fill="#FF6B35" opacity="0.85"/>`,
  `<circle cx="64" cy="45" r="2" fill="#00D9FF" opacity="0.7"/>`,
  // Axis lines
  `<line x1="33" y1="35" x2="33" y2="58" stroke="#00D9FF" stroke-width="0.8" opacity="0.5"/>`,
  `<line x1="33" y1="58" x2="67" y2="58" stroke="#00D9FF" stroke-width="0.8" opacity="0.5"/>`,
  // Small book icon (learning badge) — top right corner
  `<rect x="58" y="35" width="8" height="8" rx="1" fill="#FFD43B" opacity="0.7"/>`,
  `<line x1="62" y1="35" x2="62" y2="43" stroke="#030B18" stroke-width="0.8"/>`,
  `<line x1="59" y1="38" x2="65" y2="38" stroke="#030B18" stroke-width="0.6" opacity="0.6"/>`,
  `<line x1="59" y1="40" x2="65" y2="40" stroke="#030B18" stroke-width="0.6" opacity="0.6"/>`,
].join("");

// ═══════════════════════════════════════════════════════
// ASSEMBLE ALL 19 AVATARS
// ═══════════════════════════════════════════════════════

const avatars: Record<string, string> = {
  // SENIOR SPECIALISTS
  "SR-FE-REACT": svg(seniorHead(displaySRFEREACT, "#61DAFB", tracesSRFEREACT)),
  "SR-FE-VUE":   svg(seniorHead(displaySRFEVUE,   "#42B883", tracesSRFEVUE)),
  "SR-BE-NODE":  svg(seniorHead(displaySRBENODE,  "#68A063", tracesSRBENODE)),
  "SR-BE-PY":    svg(seniorHead(displaySRBEPY,    "#3776AB", tracesSRBEPY)),
  "SR-BE-GO":    svg(seniorHead(displaySRBEGO,    "#00ADD8", tracesSRBEGO)),
  "SR-FS":       svg(seniorHead(displaySRFS,      "#8B5CF6", tracesSRFS)),
  "SR-MOB-RN":   svg(seniorHead(displaySRMOBRN,   "#FF2D78", tracesSRMOBRN)),
  "SR-MOB-NAT":  svg(seniorHead(displaySRMOBNAT,  "#F05138", tracesSRMOBNAT)),
  "SR-DE":       svg(seniorHead(displaySRDE,      "#FF6B35", tracesSRDE)),
  "SR-DBA":      svg(seniorHead(displaySRDBA,     "#00D9FF", tracesSRDBA)),

  // MID-LEVEL
  "FE-ENG":      svg(midHead(displayFEENG,    "#00D9FF")),
  "BE-ENG":      svg(midHead(displayBEENG,    "#00D9FF")),
  "MOB-ENG":     svg(midHead(displayMOBENG,   "#FF2D78")),
  "FS-ENG":      svg(midHead(displayFSENG,    "#8B5CF6")),
  "DATA-ENG":    svg(midHead(displayDATAENG,  "#FF6B35")),

  // JUNIOR
  "JR-FE":       svg(juniorHead(displayJRFE,       "#00D9FF")),
  "JR-BE":       svg(juniorHead(displayJRBE,       "#00D9FF")),
  "JR-MOB":      svg(juniorHead(displayJRMOB,      "#FF2D78")),
  "JR-DATA-ENG": svg(juniorHead(displayJRDATAENG,  "#FF6B35")),
};

for (const [code, content] of Object.entries(avatars)) {
  writeFileSync(join(OUT, `${code}.svg`), content);
  console.log(`  Wrote ${code}.svg`);
}
console.log(`\n Batch 3: ${Object.keys(avatars).length} specialist engineer avatars`);
