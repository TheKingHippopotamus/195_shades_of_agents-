/**
 * NEXUS AI — Engineering Leadership Avatars (Batch 2)
 * 21 unique, role-specific SVG avatars for Engineering leadership.
 * Each has a distinct shape/symbol that reflects the agent's specific function.
 * Dept color: #00D9FF (cyan). Dark bg: #030108.
 */
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUT = join(__dirname, "../public/brand/avatars/agents");
mkdirSync(OUT, { recursive: true });

const C = "#00D9FF"; // Engineering cyan
const DK = "#030108";

function svg(body: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200"><defs><radialGradient id="bg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#1a1f3a"/><stop offset="100%" stop-color="${DK}"/></radialGradient><filter id="glow"><feGaussianBlur stdDeviation="1.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><rect width="100" height="100" rx="18" fill="url(#bg)"/>${body}</svg>`;
}

const avatars: Record<string, string> = {

  // ─────────────────────────────────────────────────────────────────────────
  // SVP-ENG: Tall rect, blueprint grid on face, "SVP" badge, 3-chip board,
  // fork antenna, complex PCB traces on all 4 sides
  // ─────────────────────────────────────────────────────────────────────────
  "SVP-ENG": svg(`
    <!-- Fork antenna (dual prong) -->
    <line x1="50" y1="18" x2="50" y2="8" stroke="${C}" stroke-width="1.5"/>
    <line x1="44" y1="8" x2="56" y2="8" stroke="${C}" stroke-width="1.5"/>
    <circle cx="44" cy="8" r="2" fill="${C}"/>
    <circle cx="56" cy="8" r="2" fill="${C}"/>

    <!-- Tall rect head -->
    <rect x="18" y="18" width="64" height="62" rx="4" fill="#0D1B2E" stroke="${C}" stroke-width="2.2"/>
    <!-- Blueprint grid lines on face (faint) -->
    <line x1="18" y1="28" x2="82" y2="28" stroke="${C}" stroke-width="0.4" opacity="0.3"/>
    <line x1="18" y1="38" x2="82" y2="38" stroke="${C}" stroke-width="0.4" opacity="0.3"/>
    <line x1="18" y1="48" x2="82" y2="48" stroke="${C}" stroke-width="0.4" opacity="0.3"/>
    <line x1="18" y1="58" x2="82" y2="58" stroke="${C}" stroke-width="0.4" opacity="0.3"/>
    <line x1="18" y1="68" x2="82" y2="68" stroke="${C}" stroke-width="0.4" opacity="0.3"/>
    <line x1="32" y1="18" x2="32" y2="80" stroke="${C}" stroke-width="0.4" opacity="0.3"/>
    <line x1="46" y1="18" x2="46" y2="80" stroke="${C}" stroke-width="0.4" opacity="0.3"/>
    <line x1="60" y1="18" x2="60" y2="80" stroke="${C}" stroke-width="0.4" opacity="0.3"/>
    <line x1="74" y1="18" x2="74" y2="80" stroke="${C}" stroke-width="0.4" opacity="0.3"/>

    <!-- LED eyes -->
    <rect x="28" y="25" width="12" height="8" rx="2" fill="${DK}" stroke="${C}" stroke-width="1"/>
    <rect x="60" y="25" width="12" height="8" rx="2" fill="${DK}" stroke="${C}" stroke-width="1"/>
    <rect x="30" y="27" width="8" height="4" rx="1" fill="${C}" opacity="0.9"/>
    <rect x="62" y="27" width="8" height="4" rx="1" fill="${C}" opacity="0.9"/>

    <!-- 3-chip board design in center display -->
    <rect x="24" y="38" width="52" height="26" rx="2" fill="#060F1C" stroke="${C}" stroke-width="0.8"/>
    <!-- Chip 1 -->
    <rect x="28" y="41" width="13" height="10" rx="1" fill="#112233" stroke="${C}" stroke-width="1"/>
    <text x="34.5" y="48.5" text-anchor="middle" fill="${C}" font-size="4" font-family="monospace">CPU</text>
    <!-- Chip 2 -->
    <rect x="44" y="41" width="13" height="10" rx="1" fill="#112233" stroke="${C}" stroke-width="1"/>
    <text x="50.5" y="48.5" text-anchor="middle" fill="${C}" font-size="4" font-family="monospace">GPU</text>
    <!-- Chip 3 -->
    <rect x="60" y="41" width="13" height="10" rx="1" fill="#112233" stroke="${C}" stroke-width="1"/>
    <text x="66.5" y="48.5" text-anchor="middle" fill="${C}" font-size="4" font-family="monospace">MEM</text>
    <!-- Inter-chip traces -->
    <line x1="41" y1="46" x2="44" y2="46" stroke="${C}" stroke-width="0.8"/>
    <line x1="57" y1="46" x2="60" y2="46" stroke="${C}" stroke-width="0.8"/>
    <!-- Connector dots below chips -->
    <circle cx="34.5" cy="54" r="1" fill="${C}" opacity="0.7"/>
    <circle cx="50.5" cy="54" r="1" fill="${C}" opacity="0.7"/>
    <circle cx="66.5" cy="54" r="1" fill="${C}" opacity="0.7"/>

    <!-- SVP badge -->
    <rect x="24" y="67" width="16" height="8" rx="2" fill="${C}" opacity="0.9"/>
    <text x="32" y="73.5" text-anchor="middle" fill="${DK}" font-size="5.5" font-weight="bold" font-family="monospace">SVP</text>

    <!-- PCB traces on all 4 sides (complex) -->
    <!-- Left side traces -->
    <path d="M18,35 H10 V42 H14" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="14" cy="42" r="1.2" fill="${C}" opacity="0.7"/>
    <path d="M18,52 H8 V60 H14" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="14" cy="60" r="1.2" fill="${C}" opacity="0.7"/>
    <path d="M18,65 H10 V70" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.5"/>
    <!-- Right side traces -->
    <path d="M82,35 H90 V42 H86" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="86" cy="42" r="1.2" fill="${C}" opacity="0.7"/>
    <path d="M82,52 H92 V60 H86" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="86" cy="60" r="1.2" fill="${C}" opacity="0.7"/>
    <path d="M82,65 H90 V70" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.5"/>
    <!-- Bottom traces -->
    <path d="M30,80 V88 H38 V84" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="38" cy="84" r="1.2" fill="${C}" opacity="0.7"/>
    <path d="M50,80 V92 H58 V88" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="58" cy="88" r="1.2" fill="${C}" opacity="0.7"/>
    <path d="M70,80 V86 H62" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.5"/>
    <!-- Top traces -->
    <path d="M30,18 V12 H22" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.5"/>
    <path d="M70,18 V12 H78" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.5"/>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // VP-ENG: Clean minimal design, single large chip center, VP badge corner,
  // 2 side ports, single straight antenna
  // ─────────────────────────────────────────────────────────────────────────
  "VP-ENG": svg(`
    <!-- Single straight antenna -->
    <line x1="50" y1="20" x2="50" y2="8" stroke="${C}" stroke-width="1.8"/>
    <circle cx="50" cy="7" r="2.5" fill="${C}"/>
    <circle cx="50" cy="7" r="1" fill="${DK}"/>

    <!-- Clean rect head -->
    <rect x="22" y="20" width="56" height="54" rx="5" fill="#080E1E" stroke="${C}" stroke-width="2"/>

    <!-- Single large chip center -->
    <rect x="30" y="28" width="40" height="28" rx="3" fill="#0F1F35" stroke="${C}" stroke-width="1.5"/>
    <!-- chip pins left -->
    <rect x="24" y="32" width="6" height="3" rx="1" fill="${C}" opacity="0.7"/>
    <rect x="24" y="38" width="6" height="3" rx="1" fill="${C}" opacity="0.7"/>
    <rect x="24" y="44" width="6" height="3" rx="1" fill="${C}" opacity="0.7"/>
    <!-- chip pins right -->
    <rect x="70" y="32" width="6" height="3" rx="1" fill="${C}" opacity="0.7"/>
    <rect x="70" y="38" width="6" height="3" rx="1" fill="${C}" opacity="0.7"/>
    <rect x="70" y="44" width="6" height="3" rx="1" fill="${C}" opacity="0.7"/>
    <!-- chip pins top -->
    <rect x="36" y="22" width="3" height="6" rx="1" fill="${C}" opacity="0.7"/>
    <rect x="43" y="22" width="3" height="6" rx="1" fill="${C}" opacity="0.7"/>
    <rect x="50" y="22" width="3" height="6" rx="1" fill="${C}" opacity="0.7"/>
    <rect x="57" y="22" width="3" height="6" rx="1" fill="${C}" opacity="0.7"/>
    <!-- chip pins bottom -->
    <rect x="36" y="56" width="3" height="6" rx="1" fill="${C}" opacity="0.7"/>
    <rect x="43" y="56" width="3" height="6" rx="1" fill="${C}" opacity="0.7"/>
    <rect x="50" y="56" width="3" height="6" rx="1" fill="${C}" opacity="0.7"/>
    <rect x="57" y="56" width="3" height="6" rx="1" fill="${C}" opacity="0.7"/>
    <!-- VP text inside chip -->
    <text x="50" y="45" text-anchor="middle" fill="${C}" font-size="10" font-weight="bold" font-family="monospace" opacity="0.9">VP</text>

    <!-- VP badge corner (top-right) -->
    <rect x="65" y="22" width="11" height="7" rx="2" fill="${C}"/>
    <text x="70.5" y="27.5" text-anchor="middle" fill="${DK}" font-size="4.5" font-weight="bold" font-family="monospace">VP</text>

    <!-- 2 side ports (minimal) -->
    <rect x="16" y="48" width="6" height="8" rx="2" fill="#0F1F35" stroke="${C}" stroke-width="1"/>
    <rect x="78" y="48" width="6" height="8" rx="2" fill="#0F1F35" stroke="${C}" stroke-width="1"/>
    <line x1="19" y1="52" x2="22" y2="52" stroke="${C}" stroke-width="0.8"/>
    <line x1="78" y1="52" x2="81" y2="52" stroke="${C}" stroke-width="0.8"/>

    <!-- Status bar bottom -->
    <rect x="28" y="62" width="44" height="7" rx="2" fill="#0F1F35" stroke="${C}" stroke-width="0.7"/>
    <rect x="30" y="63.5" width="28" height="4" rx="1.5" fill="${C}" opacity="0.6"/>
    <circle cx="68" cy="65.5" r="2" fill="#22C55E" opacity="0.9"/>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // VP-ARCH: Rectangle, architectural blueprint lines (parallel + diagonal),
  // compass/triangle tool symbol in display, drafting aesthetic
  // ─────────────────────────────────────────────────────────────────────────
  "VP-ARCH": svg(`
    <!-- Single antenna with circle -->
    <line x1="50" y1="20" x2="50" y2="9" stroke="${C}" stroke-width="1.5"/>
    <circle cx="50" cy="8" r="2" fill="none" stroke="${C}" stroke-width="1.5"/>

    <!-- Rect head with blueprint aesthetics -->
    <rect x="20" y="20" width="60" height="56" rx="4" fill="#080D1C" stroke="${C}" stroke-width="2"/>

    <!-- Blueprint parallel horizontal lines -->
    <line x1="24" y1="28" x2="76" y2="28" stroke="${C}" stroke-width="0.5" opacity="0.4"/>
    <line x1="24" y1="34" x2="76" y2="34" stroke="${C}" stroke-width="0.5" opacity="0.4"/>
    <line x1="24" y1="40" x2="76" y2="40" stroke="${C}" stroke-width="0.5" opacity="0.4"/>
    <line x1="24" y1="46" x2="76" y2="46" stroke="${C}" stroke-width="0.5" opacity="0.4"/>
    <!-- Blueprint diagonal lines -->
    <line x1="20" y1="20" x2="80" y2="76" stroke="${C}" stroke-width="0.4" opacity="0.25"/>
    <line x1="80" y1="20" x2="20" y2="76" stroke="${C}" stroke-width="0.4" opacity="0.25"/>
    <!-- Blueprint dot grid -->
    <circle cx="30" cy="30" r="0.8" fill="${C}" opacity="0.5"/>
    <circle cx="40" cy="30" r="0.8" fill="${C}" opacity="0.5"/>
    <circle cx="60" cy="30" r="0.8" fill="${C}" opacity="0.5"/>
    <circle cx="70" cy="30" r="0.8" fill="${C}" opacity="0.5"/>
    <circle cx="30" cy="42" r="0.8" fill="${C}" opacity="0.5"/>
    <circle cx="70" cy="42" r="0.8" fill="${C}" opacity="0.5"/>

    <!-- Display screen with compass/triangle tool -->
    <rect x="26" y="48" width="48" height="24" rx="2" fill="#040A15" stroke="${C}" stroke-width="1"/>
    <!-- Triangle (drafting tool) -->
    <polygon points="50,52 38,70 62,70" fill="none" stroke="${C}" stroke-width="1.8"/>
    <!-- Compass needle through triangle -->
    <line x1="50" y1="52" x2="50" y2="70" stroke="${C}" stroke-width="0.8" opacity="0.6"/>
    <!-- Compass circle -->
    <circle cx="50" cy="60" r="4" fill="none" stroke="${C}" stroke-width="1" opacity="0.7"/>
    <circle cx="50" cy="60" r="1" fill="${C}" opacity="0.9"/>
    <!-- Compass cardinal marks -->
    <line x1="50" y1="55" x2="50" y2="54" stroke="${C}" stroke-width="1"/>
    <line x1="55" y1="60" x2="56" y2="60" stroke="${C}" stroke-width="1"/>
    <line x1="50" y1="65" x2="50" y2="66" stroke="${C}" stroke-width="1"/>
    <line x1="45" y1="60" x2="44" y2="60" stroke="${C}" stroke-width="1"/>

    <!-- ARCH label -->
    <text x="50" y="78" text-anchor="middle" fill="${C}" font-size="4" font-family="monospace" opacity="0.7">ARCHITECT</text>

    <!-- Corner drafting angle marks -->
    <path d="M24,20 H30 V26" stroke="${C}" stroke-width="1" fill="none" opacity="0.7"/>
    <path d="M76,20 H70 V26" stroke="${C}" stroke-width="1" fill="none" opacity="0.7"/>
    <path d="M24,76 H30 V70" stroke="${C}" stroke-width="1" fill="none" opacity="0.7"/>
    <path d="M76,76 H70 V70" stroke="${C}" stroke-width="1" fill="none" opacity="0.7"/>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // DIR-FE: Rectangle, </> angle brackets in display, frontend wave traces,
  // neon green accent alongside cyan
  // ─────────────────────────────────────────────────────────────────────────
  "DIR-FE": svg(`
    <!-- Antenna -->
    <line x1="50" y1="22" x2="50" y2="10" stroke="#00FF88" stroke-width="1.5"/>
    <polygon points="50,8 54,13 46,13" fill="#00FF88"/>

    <!-- Rect head -->
    <rect x="21" y="22" width="58" height="54" rx="4" fill="#071410" stroke="${C}" stroke-width="2"/>
    <!-- Green accent border on left -->
    <rect x="21" y="22" width="3" height="54" rx="2" fill="#00FF88" opacity="0.5"/>

    <!-- Display screen with </> code brackets -->
    <rect x="26" y="26" width="48" height="30" rx="2" fill="#030D08" stroke="#00FF88" stroke-width="1"/>
    <!-- < bracket -->
    <path d="M35,34 L29,41 L35,48" stroke="${C}" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- / slash -->
    <line x1="47" y1="32" x2="42" y2="50" stroke="#00FF88" stroke-width="2" stroke-linecap="round"/>
    <!-- > bracket -->
    <path d="M50,34 L56,41 L50,48" stroke="${C}" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Cursor blink rect -->
    <rect x="58" y="40" width="5" height="7" rx="1" fill="#00FF88" opacity="0.8"/>

    <!-- Frontend wave pattern traces (bottom section) -->
    <path d="M26,62 Q33,57 40,62 Q47,67 54,62 Q61,57 68,62 Q72,65 74,62" stroke="${C}" stroke-width="1.2" fill="none" opacity="0.7"/>
    <path d="M26,68 Q34,64 42,68 Q50,72 58,68 Q66,64 74,68" stroke="#00FF88" stroke-width="1" fill="none" opacity="0.5"/>

    <!-- Port indicators -->
    <rect x="16" y="35" width="5" height="4" rx="1" fill="${C}" opacity="0.6"/>
    <rect x="79" y="35" width="5" height="4" rx="1" fill="#00FF88" opacity="0.6"/>

    <!-- Layer badge -->
    <rect x="26" y="72" width="48" height="4" rx="1" fill="#00FF88" opacity="0.15"/>
    <text x="50" y="75.5" text-anchor="middle" fill="#00FF88" font-size="3.5" font-family="monospace">HTML · CSS · JS</text>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // DIR-BE: Rectangle, database cylinder symbol in display, server/API symbol,
  // orange (#FF6B35) accent on traces
  // ─────────────────────────────────────────────────────────────────────────
  "DIR-BE": svg(`
    <!-- Antenna with server dot -->
    <line x1="50" y1="22" x2="50" y2="10" stroke="#FF6B35" stroke-width="1.5"/>
    <rect x="46" y="8" width="8" height="4" rx="1" fill="#FF6B35"/>

    <!-- Rect head -->
    <rect x="21" y="22" width="58" height="54" rx="4" fill="#0D0A06" stroke="${C}" stroke-width="2"/>
    <!-- Orange accent border right -->
    <rect x="76" y="22" width="3" height="54" rx="2" fill="#FF6B35" opacity="0.5"/>

    <!-- Display screen with Database Cylinder -->
    <rect x="26" y="26" width="48" height="30" rx="2" fill="#0A0704" stroke="#FF6B35" stroke-width="1"/>
    <!-- DB Cylinder top ellipse -->
    <ellipse cx="50" cy="32" rx="14" ry="4" fill="none" stroke="${C}" stroke-width="1.5"/>
    <ellipse cx="50" cy="32" rx="14" ry="4" fill="#1a0e06" stroke="${C}" stroke-width="0.5"/>
    <!-- DB Cylinder body -->
    <line x1="36" y1="32" x2="36" y2="48" stroke="${C}" stroke-width="1.5"/>
    <line x1="64" y1="32" x2="64" y2="48" stroke="${C}" stroke-width="1.5"/>
    <!-- DB Cylinder bottom ellipse -->
    <ellipse cx="50" cy="48" rx="14" ry="4" fill="#1a0e06" stroke="${C}" stroke-width="1.5"/>
    <!-- Data lines inside cylinder -->
    <line x1="40" y1="37" x2="60" y2="37" stroke="#FF6B35" stroke-width="0.8" opacity="0.7"/>
    <line x1="40" y1="41" x2="60" y2="41" stroke="#FF6B35" stroke-width="0.8" opacity="0.7"/>
    <line x1="40" y1="45" x2="60" y2="45" stroke="#FF6B35" stroke-width="0.8" opacity="0.7"/>

    <!-- API symbol bottom -->
    <rect x="26" y="60" width="48" height="12" rx="2" fill="#0A0704" stroke="#FF6B35" stroke-width="0.8"/>
    <text x="50" y="68.5" text-anchor="middle" fill="#FF6B35" font-size="6" font-family="monospace" font-weight="bold">API</text>

    <!-- Orange PCB traces left/right -->
    <path d="M21,40 H13 V47 H17" stroke="#FF6B35" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="17" cy="47" r="1.2" fill="#FF6B35" opacity="0.8"/>
    <path d="M79,40 H87 V47 H83" stroke="#FF6B35" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="83" cy="47" r="1.2" fill="#FF6B35" opacity="0.8"/>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // DIR-MOB: Rectangle, smartphone outline in display (rounded rect),
  // mobile wave symbol, pink (#FF2D78) accent
  // ─────────────────────────────────────────────────────────────────────────
  "DIR-MOB": svg(`
    <!-- Antenna with mobile dot -->
    <line x1="50" y1="22" x2="50" y2="9" stroke="#FF2D78" stroke-width="1.5"/>
    <circle cx="50" cy="8" r="2.5" fill="#FF2D78"/>
    <circle cx="50" cy="8" r="1" fill="${DK}"/>

    <!-- Rect head -->
    <rect x="21" y="22" width="58" height="54" rx="4" fill="#0D0610" stroke="${C}" stroke-width="2"/>
    <!-- Pink accent bottom border -->
    <rect x="21" y="73" width="58" height="3" rx="2" fill="#FF2D78" opacity="0.5"/>

    <!-- Display: smartphone outline -->
    <rect x="30" y="26" width="40" height="30" rx="2" fill="#060309" stroke="${C}" stroke-width="1"/>
    <!-- Phone outline centered in display -->
    <rect x="38" y="29" width="16" height="24" rx="3" fill="none" stroke="#FF2D78" stroke-width="2"/>
    <!-- Phone screen -->
    <rect x="40" y="32" width="12" height="15" rx="1" fill="#1a0812" stroke="${C}" stroke-width="0.7"/>
    <!-- Phone home button -->
    <circle cx="46" cy="50" r="1.5" fill="#FF2D78" opacity="0.8"/>
    <!-- Phone speaker bar -->
    <rect x="42" y="30.5" width="6" height="1.5" rx="0.75" fill="#FF2D78" opacity="0.6"/>
    <!-- Screen content mockup -->
    <rect x="41" y="33.5" width="8" height="1.5" rx="0.5" fill="${C}" opacity="0.5"/>
    <rect x="41" y="36" width="5" height="1" rx="0.5" fill="${C}" opacity="0.4"/>
    <rect x="41" y="38" width="7" height="1" rx="0.5" fill="${C}" opacity="0.4"/>

    <!-- Mobile signal waves -->
    <path d="M60,34 Q62,40 60,46" stroke="#FF2D78" stroke-width="1.2" fill="none" opacity="0.8"/>
    <path d="M63,31 Q67,40 63,49" stroke="#FF2D78" stroke-width="1" fill="none" opacity="0.6"/>
    <path d="M66,28 Q72,40 66,52" stroke="#FF2D78" stroke-width="0.8" fill="none" opacity="0.4"/>

    <!-- Bottom section traces -->
    <path d="M30,61 H22 V68 H26" stroke="#FF2D78" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="26" cy="68" r="1.2" fill="#FF2D78" opacity="0.7"/>
    <path d="M70,61 H78 V68 H74" stroke="#FF2D78" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="74" cy="68" r="1.2" fill="#FF2D78" opacity="0.7"/>

    <!-- MOB label -->
    <text x="50" y="71" text-anchor="middle" fill="#FF2D78" font-size="4" font-family="monospace" opacity="0.8">MOBILE</text>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // DIR-DATA: Rectangle, scatter plot / data points in display (8 dots in
  // chart pattern), orange accent
  // ─────────────────────────────────────────────────────────────────────────
  "DIR-DATA": svg(`
    <!-- Antenna with data dot -->
    <line x1="50" y1="22" x2="50" y2="10" stroke="#FF6B35" stroke-width="1.5"/>
    <rect x="47" y="8" width="6" height="3" rx="1" fill="${C}" stroke="#FF6B35" stroke-width="0.8"/>

    <!-- Rect head -->
    <rect x="21" y="22" width="58" height="54" rx="4" fill="#0D0806" stroke="${C}" stroke-width="2"/>

    <!-- Display screen: scatter plot / data chart -->
    <rect x="26" y="26" width="48" height="32" rx="2" fill="#070401" stroke="#FF6B35" stroke-width="1"/>
    <!-- Chart axes -->
    <line x1="33" y1="28" x2="33" y2="54" stroke="${C}" stroke-width="1" opacity="0.6"/>
    <line x1="33" y1="54" x2="70" y2="54" stroke="${C}" stroke-width="1" opacity="0.6"/>
    <!-- Data points (scatter plot — 8 dots in chart pattern) -->
    <circle cx="38" cy="50" r="2" fill="#FF6B35" opacity="0.9"/>
    <circle cx="42" cy="44" r="2.2" fill="${C}" opacity="0.8"/>
    <circle cx="46" cy="48" r="1.8" fill="#FF6B35" opacity="0.8"/>
    <circle cx="50" cy="38" r="2.5" fill="${C}" opacity="0.9"/>
    <circle cx="54" cy="42" r="2" fill="#FF6B35" opacity="0.7"/>
    <circle cx="58" cy="34" r="2.2" fill="${C}" opacity="0.9"/>
    <circle cx="62" cy="40" r="1.8" fill="#FF6B35" opacity="0.8"/>
    <circle cx="66" cy="32" r="2" fill="${C}" opacity="0.8"/>
    <!-- Trend line through scatter -->
    <line x1="36" y1="52" x2="68" y2="31" stroke="#FF6B35" stroke-width="0.8" stroke-dasharray="3 2" opacity="0.5"/>

    <!-- Bottom bar chart mini -->
    <rect x="28" y="62" width="44" height="10" rx="2" fill="#070401" stroke="${C}" stroke-width="0.7"/>
    <rect x="31" y="65" width="4" height="5" rx="1" fill="#FF6B35" opacity="0.8"/>
    <rect x="37" y="63" width="4" height="7" rx="1" fill="${C}" opacity="0.7"/>
    <rect x="43" y="65" width="4" height="5" rx="1" fill="#FF6B35" opacity="0.6"/>
    <rect x="49" y="62.5" width="4" height="7.5" rx="1" fill="${C}" opacity="0.8"/>
    <rect x="55" y="64" width="4" height="6" rx="1" fill="#FF6B35" opacity="0.7"/>
    <rect x="61" y="63" width="4" height="7" rx="1" fill="${C}" opacity="0.9"/>

    <!-- Side ports -->
    <rect x="15" y="42" width="6" height="4" rx="1" fill="${DK}" stroke="#FF6B35" stroke-width="0.8"/>
    <rect x="79" y="42" width="6" height="4" rx="1" fill="${DK}" stroke="#FF6B35" stroke-width="0.8"/>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // SEM-FE: Wider rect (experienced aura), sine wave / signal wave in display,
  // wave antenna (curved tip), wider body
  // ─────────────────────────────────────────────────────────────────────────
  "SEM-FE": svg(`
    <!-- Wave antenna (curved) -->
    <path d="M50,22 C50,14 44,12 50,8 C56,4 50,6 50,10" stroke="${C}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <circle cx="50" cy="8" r="1.5" fill="${C}"/>

    <!-- Wider rect head (senior/experienced look) -->
    <rect x="14" y="22" width="72" height="54" rx="5" fill="#080E1C" stroke="${C}" stroke-width="2.2"/>

    <!-- Senior badge top -->
    <rect x="14" y="22" width="72" height="6" rx="3" fill="${C}" opacity="0.15"/>
    <text x="50" y="27" text-anchor="middle" fill="${C}" font-size="4" font-family="monospace" opacity="0.9">SENIOR ENGINEER</text>

    <!-- Display: Sine wave / signal wave -->
    <rect x="19" y="31" width="62" height="26" rx="2" fill="#040810" stroke="${C}" stroke-width="1"/>
    <!-- Sine wave (large, prominent) -->
    <path d="M22,44 Q27,36 32,44 Q37,52 42,44 Q47,36 52,44 Q57,52 62,44 Q67,36 72,44 Q74,48 76,44" stroke="${C}" stroke-width="2" fill="none"/>
    <!-- Second harmonic (smaller, offset) -->
    <path d="M22,46 Q29,41 36,46 Q43,51 50,46 Q57,41 64,46 Q71,51 78,46" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.4"/>
    <!-- Wave axis -->
    <line x1="22" y1="44" x2="78" y2="44" stroke="${C}" stroke-width="0.4" opacity="0.3" stroke-dasharray="2 2"/>

    <!-- Oscilloscope grid lines -->
    <line x1="37" y1="31" x2="37" y2="57" stroke="${C}" stroke-width="0.3" opacity="0.25"/>
    <line x1="52" y1="31" x2="52" y2="57" stroke="${C}" stroke-width="0.3" opacity="0.25"/>
    <line x1="67" y1="31" x2="67" y2="57" stroke="${C}" stroke-width="0.3" opacity="0.25"/>
    <line x1="19" y1="40" x2="81" y2="40" stroke="${C}" stroke-width="0.3" opacity="0.25"/>
    <line x1="19" y1="48" x2="81" y2="48" stroke="${C}" stroke-width="0.3" opacity="0.25"/>

    <!-- Bottom PCB traces -->
    <path d="M25,60 V68 H35 V64" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="35" cy="64" r="1.2" fill="${C}" opacity="0.7"/>
    <path d="M50,60 V72 H60 V68" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="60" cy="68" r="1.2" fill="${C}" opacity="0.7"/>
    <path d="M75,60 V66 H65" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.5"/>

    <!-- Side ports (wider body has more) -->
    <rect x="8" y="36" width="6" height="4" rx="1" fill="${DK}" stroke="${C}" stroke-width="1"/>
    <rect x="8" y="44" width="6" height="4" rx="1" fill="${DK}" stroke="${C}" stroke-width="1"/>
    <rect x="86" y="36" width="6" height="4" rx="1" fill="${DK}" stroke="${C}" stroke-width="1"/>
    <rect x="86" y="44" width="6" height="4" rx="1" fill="${DK}" stroke="${C}" stroke-width="1"/>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // SEM-BE: Rect, dense circuit traces (many paths), server stack (3 bars + dots)
  // in display, robust/heavy look
  // ─────────────────────────────────────────────────────────────────────────
  "SEM-BE": svg(`
    <!-- Heavy dual antenna (backend server vibe) -->
    <line x1="42" y1="22" x2="42" y2="10" stroke="${C}" stroke-width="1.8"/>
    <line x1="58" y1="22" x2="58" y2="10" stroke="${C}" stroke-width="1.8"/>
    <rect x="38" y="8" width="8" height="4" rx="1" fill="${C}" opacity="0.8"/>
    <rect x="54" y="8" width="8" height="4" rx="1" fill="${C}" opacity="0.8"/>

    <!-- Wide robust rect head -->
    <rect x="16" y="22" width="68" height="56" rx="5" fill="#080E14" stroke="${C}" stroke-width="2.5"/>

    <!-- Server stack symbol in display (3 horizontal server bars + status dots) -->
    <rect x="22" y="27" width="56" height="32" rx="2" fill="#040912" stroke="${C}" stroke-width="1.2"/>
    <!-- Server bar 1 -->
    <rect x="26" y="30" width="44" height="8" rx="2" fill="#0F1C30" stroke="${C}" stroke-width="1"/>
    <circle cx="62" cy="34" r="2" fill="#22C55E"/>
    <circle cx="66" cy="34" r="2" fill="${C}" opacity="0.7"/>
    <rect x="29" y="32.5" width="20" height="3" rx="1" fill="${C}" opacity="0.3"/>
    <text x="39" y="35.5" text-anchor="middle" fill="${C}" font-size="3.5" font-family="monospace" opacity="0.7">PRIMARY</text>
    <!-- Server bar 2 -->
    <rect x="26" y="41" width="44" height="8" rx="2" fill="#0F1C30" stroke="${C}" stroke-width="1"/>
    <circle cx="62" cy="45" r="2" fill="#22C55E"/>
    <circle cx="66" cy="45" r="2" fill="${C}" opacity="0.7"/>
    <rect x="29" y="43.5" width="20" height="3" rx="1" fill="${C}" opacity="0.3"/>
    <text x="39" y="46.5" text-anchor="middle" fill="${C}" font-size="3.5" font-family="monospace" opacity="0.7">REPLICA</text>
    <!-- Server bar 3 -->
    <rect x="26" y="52" width="44" height="8" rx="2" fill="#0F1C30" stroke="${C}" stroke-width="1"/>
    <circle cx="62" cy="56" r="2" fill="#F97316"/>
    <circle cx="66" cy="56" r="2" fill="${C}" opacity="0.4"/>
    <rect x="29" y="54.5" width="20" height="3" rx="1" fill="${C}" opacity="0.3"/>
    <text x="39" y="57.5" text-anchor="middle" fill="${C}" font-size="3.5" font-family="monospace" opacity="0.7">STANDBY</text>

    <!-- Dense PCB traces (many paths) -->
    <path d="M16,32 H8 V36 H12" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.6"/>
    <path d="M16,40 H6 V46 H10" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.6"/>
    <path d="M16,50 H8 V55 H12" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.6"/>
    <path d="M16,60 H8 V65 H14" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.5"/>
    <circle cx="12" cy="36" r="1" fill="${C}" opacity="0.7"/>
    <circle cx="10" cy="46" r="1" fill="${C}" opacity="0.7"/>
    <circle cx="12" cy="55" r="1" fill="${C}" opacity="0.7"/>
    <path d="M84,32 H92 V36 H88" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.6"/>
    <path d="M84,40 H94 V46 H90" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.6"/>
    <path d="M84,50 H92 V55 H88" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.6"/>
    <path d="M84,60 H92 V65 H86" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.5"/>
    <circle cx="88" cy="36" r="1" fill="${C}" opacity="0.7"/>
    <circle cx="90" cy="46" r="1" fill="${C}" opacity="0.7"/>
    <circle cx="88" cy="55" r="1" fill="${C}" opacity="0.7"/>

    <!-- Bottom dense traces -->
    <path d="M30,78 V86 H38 V82 H44 V88" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.5"/>
    <path d="M55,78 V84 H63 V80" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.5"/>
    <circle cx="44" cy="88" r="1" fill="${C}" opacity="0.7"/>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // EM-FE: Rectangle, team nodes symbol in display (3 small circles connected
  // like team org), green accent, manager badge
  // ─────────────────────────────────────────────────────────────────────────
  "EM-FE": svg(`
    <!-- Antenna with crown (manager) -->
    <line x1="50" y1="22" x2="50" y2="12" stroke="#22C55E" stroke-width="1.5"/>
    <polygon points="50,9 53,13 50,14 47,13" fill="#22C55E"/>

    <!-- Rect head -->
    <rect x="22" y="22" width="56" height="54" rx="4" fill="#071410" stroke="${C}" stroke-width="2"/>

    <!-- Display: team org nodes (3 circles connected) -->
    <rect x="27" y="27" width="46" height="30" rx="2" fill="#040D08" stroke="#22C55E" stroke-width="1"/>
    <!-- Manager node (top center) -->
    <circle cx="50" cy="35" r="5" fill="#0D1F12" stroke="#22C55E" stroke-width="1.5"/>
    <circle cx="50" cy="35" r="2" fill="#22C55E" opacity="0.9"/>
    <!-- Report lines -->
    <line x1="44" y1="38" x2="38" y2="46" stroke="${C}" stroke-width="1.2" opacity="0.8"/>
    <line x1="50" y1="40" x2="50" y2="46" stroke="${C}" stroke-width="1.2" opacity="0.8"/>
    <line x1="56" y1="38" x2="62" y2="46" stroke="${C}" stroke-width="1.2" opacity="0.8"/>
    <!-- Team member nodes -->
    <circle cx="38" cy="50" r="4" fill="#0D1F12" stroke="${C}" stroke-width="1.2"/>
    <text x="38" y="52" text-anchor="middle" fill="${C}" font-size="4" font-family="monospace">FE</text>
    <circle cx="50" cy="50" r="4" fill="#0D1F12" stroke="${C}" stroke-width="1.2"/>
    <text x="50" y="52" text-anchor="middle" fill="${C}" font-size="4" font-family="monospace">FE</text>
    <circle cx="62" cy="50" r="4" fill="#0D1F12" stroke="${C}" stroke-width="1.2"/>
    <text x="62" y="52" text-anchor="middle" fill="${C}" font-size="4" font-family="monospace">FE</text>

    <!-- Manager badge -->
    <rect x="29" y="60" width="42" height="7" rx="2" fill="#22C55E" opacity="0.2" stroke="#22C55E" stroke-width="0.8"/>
    <text x="50" y="65.5" text-anchor="middle" fill="#22C55E" font-size="4.5" font-family="monospace">ENG MANAGER</text>

    <!-- Bottom traces -->
    <path d="M33,76 V82 H41 V78" stroke="#22C55E" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="41" cy="78" r="1.2" fill="#22C55E" opacity="0.7"/>
    <path d="M67,76 V82 H59 V78" stroke="#22C55E" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="59" cy="78" r="1.2" fill="#22C55E" opacity="0.7"/>

    <!-- Port connectors -->
    <rect x="16" y="40" width="6" height="4" rx="1" fill="${DK}" stroke="#22C55E" stroke-width="0.8"/>
    <rect x="78" y="40" width="6" height="4" rx="1" fill="${DK}" stroke="#22C55E" stroke-width="0.8"/>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // EM-BE: Rectangle, team nodes + server symbol in display, multiple
  // connection lines
  // ─────────────────────────────────────────────────────────────────────────
  "EM-BE": svg(`
    <!-- Dual antenna (backend) -->
    <line x1="46" y1="22" x2="46" y2="11" stroke="${C}" stroke-width="1.5"/>
    <line x1="54" y1="22" x2="54" y2="11" stroke="${C}" stroke-width="1.5"/>
    <rect x="43" y="9" width="6" height="3" rx="1" fill="${C}" opacity="0.8"/>
    <rect x="51" y="9" width="6" height="3" rx="1" fill="${C}" opacity="0.8"/>

    <!-- Rect head -->
    <rect x="22" y="22" width="56" height="54" rx="4" fill="#08100E" stroke="${C}" stroke-width="2"/>

    <!-- Display: team nodes + server -->
    <rect x="27" y="27" width="46" height="32" rx="2" fill="#040D09" stroke="${C}" stroke-width="1"/>
    <!-- Server icon (top) -->
    <rect x="39" y="30" width="22" height="5" rx="1" fill="#112" stroke="${C}" stroke-width="0.8"/>
    <circle cx="56" cy="32.5" r="1.2" fill="#22C55E"/>
    <rect x="41" y="31.5" width="10" height="2" rx="0.5" fill="${C}" opacity="0.4"/>
    <!-- Team connection lines from server -->
    <line x1="44" y1="35" x2="36" y2="43" stroke="${C}" stroke-width="1" opacity="0.7"/>
    <line x1="50" y1="35" x2="50" y2="43" stroke="${C}" stroke-width="1" opacity="0.7"/>
    <line x1="56" y1="35" x2="64" y2="43" stroke="${C}" stroke-width="1" opacity="0.7"/>
    <!-- Cross connections (multiple connection lines) -->
    <line x1="36" y1="47" x2="50" y2="47" stroke="${C}" stroke-width="0.6" opacity="0.4" stroke-dasharray="2 1"/>
    <line x1="50" y1="47" x2="64" y2="47" stroke="${C}" stroke-width="0.6" opacity="0.4" stroke-dasharray="2 1"/>
    <!-- Team nodes (BE) -->
    <circle cx="36" cy="47" r="4" fill="#0D1F18" stroke="${C}" stroke-width="1.2"/>
    <text x="36" y="49" text-anchor="middle" fill="${C}" font-size="4" font-family="monospace">BE</text>
    <circle cx="50" cy="47" r="4" fill="#0D1F18" stroke="${C}" stroke-width="1.2"/>
    <text x="50" y="49" text-anchor="middle" fill="${C}" font-size="4" font-family="monospace">BE</text>
    <circle cx="64" cy="47" r="4" fill="#0D1F18" stroke="${C}" stroke-width="1.2"/>
    <text x="64" y="49" text-anchor="middle" fill="${C}" font-size="4" font-family="monospace">BE</text>
    <!-- DB dot at bottom of display -->
    <ellipse cx="50" cy="57" rx="8" ry="2.5" fill="none" stroke="${C}" stroke-width="0.8" opacity="0.6"/>

    <!-- EM-BE label -->
    <rect x="29" y="62" width="42" height="7" rx="2" fill="${C}" opacity="0.12" stroke="${C}" stroke-width="0.8"/>
    <text x="50" y="67.5" text-anchor="middle" fill="${C}" font-size="4.5" font-family="monospace">EM · BACKEND</text>

    <!-- Bottom traces -->
    <path d="M33,76 V85 H45 V81" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.5"/>
    <path d="M67,76 V83 H55 V79" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.5"/>
    <circle cx="45" cy="81" r="1.2" fill="${C}" opacity="0.7"/>
    <circle cx="55" cy="79" r="1.2" fill="${C}" opacity="0.7"/>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // EM-MOB: Rectangle, team nodes + phone in display
  // ─────────────────────────────────────────────────────────────────────────
  "EM-MOB": svg(`
    <!-- Antenna with mobile signal arc -->
    <line x1="50" y1="22" x2="50" y2="12" stroke="#FF2D78" stroke-width="1.5"/>
    <path d="M46,15 Q50,11 54,15" stroke="#FF2D78" stroke-width="1.2" fill="none"/>
    <path d="M43,18 Q50,12 57,18" stroke="#FF2D78" stroke-width="0.9" fill="none" opacity="0.6"/>

    <!-- Rect head -->
    <rect x="22" y="22" width="56" height="54" rx="4" fill="#0D060E" stroke="${C}" stroke-width="2"/>

    <!-- Display: team nodes + phone icon -->
    <rect x="27" y="27" width="46" height="32" rx="2" fill="#070309" stroke="#FF2D78" stroke-width="1"/>
    <!-- Phone icon center top -->
    <rect x="44" y="30" width="12" height="16" rx="2" fill="none" stroke="#FF2D78" stroke-width="1.5"/>
    <rect x="46" y="32.5" width="8" height="9" rx="1" fill="#1a0812" stroke="${C}" stroke-width="0.5"/>
    <circle cx="50" cy="44" r="1" fill="#FF2D78" opacity="0.8"/>
    <!-- Team member nodes below phone -->
    <line x1="44" y1="46" x2="36" y2="52" stroke="${C}" stroke-width="1" opacity="0.7"/>
    <line x1="50" y1="46" x2="50" y2="52" stroke="${C}" stroke-width="1" opacity="0.7"/>
    <line x1="56" y1="46" x2="64" y2="52" stroke="${C}" stroke-width="1" opacity="0.7"/>
    <circle cx="36" cy="55" r="4" fill="#1a0610" stroke="${C}" stroke-width="1.2"/>
    <text x="36" y="57" text-anchor="middle" fill="${C}" font-size="3.5" font-family="monospace">MOB</text>
    <circle cx="50" cy="55" r="4" fill="#1a0610" stroke="${C}" stroke-width="1.2"/>
    <text x="50" y="57" text-anchor="middle" fill="${C}" font-size="3.5" font-family="monospace">MOB</text>
    <circle cx="64" cy="55" r="4" fill="#1a0610" stroke="${C}" stroke-width="1.2"/>
    <text x="64" y="57" text-anchor="middle" fill="${C}" font-size="3.5" font-family="monospace">MOB</text>

    <!-- Label -->
    <rect x="29" y="62" width="42" height="7" rx="2" fill="#FF2D78" opacity="0.12" stroke="#FF2D78" stroke-width="0.8"/>
    <text x="50" y="67.5" text-anchor="middle" fill="#FF2D78" font-size="4.5" font-family="monospace">EM · MOBILE</text>

    <!-- Side traces -->
    <path d="M22,44 H14 V50 H18" stroke="#FF2D78" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="18" cy="50" r="1.2" fill="#FF2D78" opacity="0.7"/>
    <path d="M78,44 H86 V50 H82" stroke="#FF2D78" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="82" cy="50" r="1.2" fill="#FF2D78" opacity="0.7"/>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // EM-DATA: Rectangle, team nodes + chart in display
  // ─────────────────────────────────────────────────────────────────────────
  "EM-DATA": svg(`
    <!-- Antenna with data square -->
    <line x1="50" y1="22" x2="50" y2="10" stroke="#FF6B35" stroke-width="1.5"/>
    <rect x="47" y="8" width="6" height="4" rx="1" fill="#FF6B35" opacity="0.9"/>

    <!-- Rect head -->
    <rect x="22" y="22" width="56" height="54" rx="4" fill="#0D0906" stroke="${C}" stroke-width="2"/>

    <!-- Display: team nodes + mini chart -->
    <rect x="27" y="27" width="46" height="32" rx="2" fill="#07050" stroke="#FF6B35" stroke-width="1"/>
    <!-- Mini bar chart (top) -->
    <rect x="30" y="30" width="40" height="16" rx="1" fill="#0A0604" stroke="${C}" stroke-width="0.6"/>
    <rect x="33" y="33" width="4" height="11" rx="1" fill="#FF6B35" opacity="0.7"/>
    <rect x="39" y="35" width="4" height="9" rx="1" fill="${C}" opacity="0.7"/>
    <rect x="45" y="31" width="4" height="13" rx="1" fill="#FF6B35" opacity="0.9"/>
    <rect x="51" y="34" width="4" height="10" rx="1" fill="${C}" opacity="0.8"/>
    <rect x="57" y="32" width="4" height="12" rx="1" fill="#FF6B35" opacity="0.8"/>
    <rect x="63" y="36" width="4" height="8" rx="1" fill="${C}" opacity="0.7"/>
    <!-- Team nodes below chart -->
    <line x1="39" y1="46" x2="36" y2="52" stroke="${C}" stroke-width="1" opacity="0.7"/>
    <line x1="50" y1="46" x2="50" y2="52" stroke="${C}" stroke-width="1" opacity="0.7"/>
    <line x1="61" y1="46" x2="64" y2="52" stroke="${C}" stroke-width="1" opacity="0.7"/>
    <circle cx="36" cy="55" r="4" fill="#1a0804" stroke="${C}" stroke-width="1.2"/>
    <text x="36" y="57" text-anchor="middle" fill="${C}" font-size="3.5" font-family="monospace">DATA</text>
    <circle cx="50" cy="55" r="4" fill="#1a0804" stroke="${C}" stroke-width="1.2"/>
    <text x="50" y="57" text-anchor="middle" fill="${C}" font-size="3.5" font-family="monospace">DATA</text>
    <circle cx="64" cy="55" r="4" fill="#1a0804" stroke="${C}" stroke-width="1.2"/>
    <text x="64" y="57" text-anchor="middle" fill="${C}" font-size="3.5" font-family="monospace">DATA</text>

    <!-- Label -->
    <rect x="29" y="62" width="42" height="7" rx="2" fill="#FF6B35" opacity="0.12" stroke="#FF6B35" stroke-width="0.8"/>
    <text x="50" y="67.5" text-anchor="middle" fill="#FF6B35" font-size="4.5" font-family="monospace">EM · DATA</text>

    <!-- Bottom traces -->
    <path d="M35,76 V84 H43" stroke="#FF6B35" stroke-width="0.8" fill="none" opacity="0.5"/>
    <path d="M65,76 V84 H57" stroke="#FF6B35" stroke-width="0.8" fill="none" opacity="0.5"/>
    <circle cx="43" cy="84" r="1.2" fill="#FF6B35" opacity="0.7"/>
    <circle cx="57" cy="84" r="1.2" fill="#FF6B35" opacity="0.7"/>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // DIST-ENG: Wide rectangle, distributed network topology in display
  // (starburst — center + 6 outer nodes connected), purple accent, wide multi-chip
  // ─────────────────────────────────────────────────────────────────────────
  "DIST-ENG": svg(`
    <!-- Triple antenna (distributed) -->
    <line x1="36" y1="20" x2="36" y2="9" stroke="#7C3AED" stroke-width="1.3"/>
    <line x1="50" y1="20" x2="50" y2="7" stroke="#7C3AED" stroke-width="1.5"/>
    <line x1="64" y1="20" x2="64" y2="9" stroke="#7C3AED" stroke-width="1.3"/>
    <circle cx="36" cy="8" r="1.8" fill="#7C3AED"/>
    <circle cx="50" cy="6" r="2.2" fill="#7C3AED"/>
    <circle cx="64" cy="8" r="1.8" fill="#7C3AED"/>

    <!-- Wide rect head -->
    <rect x="10" y="20" width="80" height="58" rx="5" fill="#0A0614" stroke="#7C3AED" stroke-width="2.2"/>

    <!-- Display: distributed star topology -->
    <rect x="14" y="25" width="72" height="36" rx="2" fill="#05020C" stroke="#7C3AED" stroke-width="1.2"/>
    <!-- Center hub node -->
    <circle cx="50" cy="43" r="6" fill="#1a0a3a" stroke="#7C3AED" stroke-width="1.8"/>
    <circle cx="50" cy="43" r="2.5" fill="#7C3AED" opacity="0.9"/>
    <!-- 6 outer nodes + connection lines (starburst) -->
    <!-- Node 1: top -->
    <line x1="50" y1="37" x2="50" y2="30" stroke="#7C3AED" stroke-width="1.2"/>
    <circle cx="50" cy="29" r="3" fill="#150826" stroke="${C}" stroke-width="1"/>
    <!-- Node 2: top-right -->
    <line x1="55" y1="40" x2="62" y2="32" stroke="#7C3AED" stroke-width="1.2"/>
    <circle cx="63" cy="31" r="3" fill="#150826" stroke="${C}" stroke-width="1"/>
    <!-- Node 3: bottom-right -->
    <line x1="55" y1="47" x2="62" y2="54" stroke="#7C3AED" stroke-width="1.2"/>
    <circle cx="63" cy="55" r="3" fill="#150826" stroke="${C}" stroke-width="1"/>
    <!-- Node 4: bottom -->
    <line x1="50" y1="49" x2="50" y2="57" stroke="#7C3AED" stroke-width="1.2"/>
    <circle cx="50" cy="58" r="3" fill="#150826" stroke="${C}" stroke-width="1"/>
    <!-- Node 5: bottom-left -->
    <line x1="45" y1="47" x2="38" y2="54" stroke="#7C3AED" stroke-width="1.2"/>
    <circle cx="37" cy="55" r="3" fill="#150826" stroke="${C}" stroke-width="1"/>
    <!-- Node 6: top-left -->
    <line x1="45" y1="40" x2="38" y2="32" stroke="#7C3AED" stroke-width="1.2"/>
    <circle cx="37" cy="31" r="3" fill="#150826" stroke="${C}" stroke-width="1"/>

    <!-- Multi-chip board bottom (wide) -->
    <rect x="14" y="64" width="72" height="10" rx="2" fill="#08041A" stroke="#7C3AED" stroke-width="1"/>
    <rect x="18" y="66" width="14" height="6" rx="1" fill="#150828" stroke="#7C3AED" stroke-width="0.8"/>
    <rect x="35" y="66" width="14" height="6" rx="1" fill="#150828" stroke="#7C3AED" stroke-width="0.8"/>
    <rect x="52" y="66" width="14" height="6" rx="1" fill="#150828" stroke="#7C3AED" stroke-width="0.8"/>
    <rect x="69" y="66" width="13" height="6" rx="1" fill="#150828" stroke="#7C3AED" stroke-width="0.8"/>
    <text x="25" y="70.5" text-anchor="middle" fill="#7C3AED" font-size="3.5" font-family="monospace">NODE</text>
    <text x="42" y="70.5" text-anchor="middle" fill="#7C3AED" font-size="3.5" font-family="monospace">NODE</text>
    <text x="59" y="70.5" text-anchor="middle" fill="#7C3AED" font-size="3.5" font-family="monospace">NODE</text>
    <text x="75.5" y="70.5" text-anchor="middle" fill="#7C3AED" font-size="3.5" font-family="monospace">NODE</text>

    <!-- Side ports -->
    <rect x="4" y="38" width="6" height="5" rx="1" fill="${DK}" stroke="#7C3AED" stroke-width="0.8"/>
    <rect x="4" y="47" width="6" height="5" rx="1" fill="${DK}" stroke="#7C3AED" stroke-width="0.8"/>
    <rect x="90" y="38" width="6" height="5" rx="1" fill="${DK}" stroke="#7C3AED" stroke-width="0.8"/>
    <rect x="90" y="47" width="6" height="5" rx="1" fill="${DK}" stroke="#7C3AED" stroke-width="0.8"/>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // PRINC-ENG: Tall rectangle, 5-pointed star badge top-right, most complex
  // PCB (12+ trace paths), atom symbol in display
  // ─────────────────────────────────────────────────────────────────────────
  "PRINC-ENG": svg(`
    <!-- Principal star badge (top-right, prominent) -->
    <polygon points="82,12 84,18 90,18 85.5,22 87,28 82,24 77,28 78.5,22 74,18 80,18" fill="${C}" opacity="0.9"/>
    <polygon points="82,14 83.5,18.5 88,18.5 84.5,21 85.5,25.5 82,23 78.5,25.5 79.5,21 76,18.5 80.5,18.5" fill="${DK}" opacity="0.5"/>

    <!-- Tall rect head -->
    <rect x="16" y="14" width="60" height="70" rx="4" fill="#08100C" stroke="${C}" stroke-width="2.2"/>

    <!-- Atom symbol in display center -->
    <rect x="20" y="18" width="52" height="40" rx="2" fill="#040A06" stroke="${C}" stroke-width="1"/>
    <!-- Atom nucleus -->
    <circle cx="46" cy="38" r="4" fill="#1a2a1a" stroke="${C}" stroke-width="1.5"/>
    <circle cx="46" cy="38" r="1.8" fill="${C}" opacity="0.9"/>
    <!-- Orbit 1 (horizontal ellipse) -->
    <ellipse cx="46" cy="38" rx="16" ry="6" fill="none" stroke="${C}" stroke-width="1.2"/>
    <!-- Orbit 2 (rotated 60deg) -->
    <ellipse cx="46" cy="38" rx="16" ry="6" fill="none" stroke="${C}" stroke-width="1.2" transform="rotate(60,46,38)"/>
    <!-- Orbit 3 (rotated 120deg) -->
    <ellipse cx="46" cy="38" rx="16" ry="6" fill="none" stroke="${C}" stroke-width="1.2" transform="rotate(120,46,38)"/>
    <!-- Electron dots -->
    <circle cx="62" cy="38" r="1.5" fill="${C}" opacity="0.9"/>
    <circle cx="38" cy="30" r="1.5" fill="${C}" opacity="0.9"/>
    <circle cx="38" cy="46" r="1.5" fill="${C}" opacity="0.9"/>

    <!-- PRINCIPAL label -->
    <text x="46" y="53" text-anchor="middle" fill="${C}" font-size="4" font-family="monospace" opacity="0.8">PRINCIPAL</text>

    <!-- Most complex PCB — 12+ trace paths -->
    <!-- Left side traces (6) -->
    <path d="M16,22 H7 V28 H11" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.6"/>
    <circle cx="11" cy="28" r="1" fill="${C}" opacity="0.7"/>
    <path d="M16,32 H5 V38 H9" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.6"/>
    <circle cx="9" cy="38" r="1" fill="${C}" opacity="0.7"/>
    <path d="M16,42 H7 V48 H11" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.6"/>
    <circle cx="11" cy="48" r="1" fill="${C}" opacity="0.7"/>
    <path d="M16,52 H4 V60 H8" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.5"/>
    <circle cx="8" cy="60" r="1" fill="${C}" opacity="0.6"/>
    <path d="M16,62 H8 V68 H12" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.5"/>
    <path d="M16,70 H6 V75" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.4"/>
    <!-- Right side traces (6) -->
    <path d="M76,22 H85 V28 H81" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.6"/>
    <circle cx="81" cy="28" r="1" fill="${C}" opacity="0.7"/>
    <path d="M76,32 H87 V38 H83" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.6"/>
    <circle cx="83" cy="38" r="1" fill="${C}" opacity="0.7"/>
    <path d="M76,42 H85 V48 H81" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.6"/>
    <circle cx="81" cy="48" r="1" fill="${C}" opacity="0.7"/>
    <path d="M76,52 H88 V60 H84" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.5"/>
    <circle cx="84" cy="60" r="1" fill="${C}" opacity="0.6"/>
    <path d="M76,62 H84 V68 H80" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.5"/>
    <path d="M76,70 H86 V75" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.4"/>

    <!-- Bottom traces -->
    <path d="M24,84 V92 H32 V88 H40 V94" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.5"/>
    <path d="M52,84 V90 H60 V86" stroke="${C}" stroke-width="0.7" fill="none" opacity="0.5"/>
    <circle cx="40" cy="94" r="1.2" fill="${C}" opacity="0.7"/>

    <!-- Status LED panel bottom of head -->
    <rect x="20" y="60" width="52" height="20" rx="2" fill="#040A06" stroke="${C}" stroke-width="0.8"/>
    <circle cx="26" cy="65" r="2" fill="#22C55E"/>
    <circle cx="33" cy="65" r="2" fill="${C}" opacity="0.8"/>
    <circle cx="40" cy="65" r="2" fill="#22C55E"/>
    <circle cx="47" cy="65" r="2" fill="${C}" opacity="0.8"/>
    <circle cx="54" cy="65" r="2" fill="#22C55E"/>
    <circle cx="61" cy="65" r="2" fill="#F97316"/>
    <circle cx="68" cy="65" r="2" fill="${C}" opacity="0.8"/>
    <text x="46" y="77" text-anchor="middle" fill="${C}" font-size="4" font-family="monospace" opacity="0.7">LEVEL 10 ACCESS</text>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // SR-STAFF: Rectangle, staff lightning bolt in display, elevated complexity
  // ─────────────────────────────────────────────────────────────────────────
  "SR-STAFF": svg(`
    <!-- Lightning bolt antenna -->
    <path d="M50,22 L50,14 L46,10 L54,8 L50,14" stroke="${C}" stroke-width="1.5" fill="none"/>
    <polygon points="50,8 54,8 50,14 46,10" fill="${C}" opacity="0.9"/>

    <!-- Rect head -->
    <rect x="21" y="22" width="58" height="54" rx="4" fill="#080E14" stroke="${C}" stroke-width="2"/>

    <!-- Display: prominent lightning bolt -->
    <rect x="26" y="27" width="48" height="30" rx="2" fill="#040912" stroke="${C}" stroke-width="1"/>
    <!-- Large lightning bolt (staff symbol) -->
    <polygon points="55,30 44,44 50,44 42,57 60,42 53,42 62,30" fill="${C}" opacity="0.85"/>
    <!-- Glow halo behind bolt -->
    <polygon points="55,30 44,44 50,44 42,57 60,42 53,42 62,30" fill="none" stroke="${C}" stroke-width="2" opacity="0.3"/>

    <!-- Elevated complexity traces (more than junior) -->
    <path d="M21,34 H12 V40 H16" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="16" cy="40" r="1.2" fill="${C}" opacity="0.7"/>
    <path d="M21,46 H10 V53 H14 V58" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="14" cy="58" r="1.2" fill="${C}" opacity="0.7"/>
    <path d="M21,60 H12 V65 H16" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.5"/>
    <path d="M79,34 H88 V40 H84" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="84" cy="40" r="1.2" fill="${C}" opacity="0.7"/>
    <path d="M79,46 H90 V53 H86 V58" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="86" cy="58" r="1.2" fill="${C}" opacity="0.7"/>
    <path d="M79,60 H88 V65 H84" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.5"/>

    <!-- SR-STAFF label + status -->
    <rect x="26" y="60" width="48" height="12" rx="2" fill="#040912" stroke="${C}" stroke-width="0.8"/>
    <text x="50" y="67" text-anchor="middle" fill="${C}" font-size="5" font-family="monospace" font-weight="bold">SR·STAFF</text>
    <circle cx="34" cy="66" r="2" fill="#22C55E"/>
    <circle cx="66" cy="66" r="2" fill="${C}" opacity="0.7"/>

    <!-- Bottom traces -->
    <path d="M30,76 V84 H38" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.5"/>
    <path d="M70,76 V82 H62" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.5"/>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // STAFF-FE: Rectangle, layered frontend bars (HTML/CSS/JS) in display
  // ─────────────────────────────────────────────────────────────────────────
  "STAFF-FE": svg(`
    <!-- Antenna -->
    <line x1="50" y1="22" x2="50" y2="10" stroke="#00FF88" stroke-width="1.5"/>
    <circle cx="50" cy="9" r="2" fill="#00FF88"/>

    <!-- Rect head -->
    <rect x="22" y="22" width="56" height="54" rx="4" fill="#071410" stroke="${C}" stroke-width="2"/>

    <!-- Display: layered frontend bars (HTML/CSS/JS) -->
    <rect x="27" y="27" width="46" height="36" rx="2" fill="#030D08" stroke="${C}" stroke-width="1"/>
    <!-- HTML layer -->
    <rect x="30" y="30" width="40" height="9" rx="2" fill="#0F2010" stroke="#FF6B35" stroke-width="1.2"/>
    <text x="39" y="36.5" text-anchor="middle" fill="#FF6B35" font-size="5" font-family="monospace" font-weight="bold">HTML</text>
    <text x="62" y="36.5" text-anchor="middle" fill="#FF6B35" font-size="4" font-family="monospace" opacity="0.6">&lt;/&gt;</text>
    <!-- CSS layer -->
    <rect x="30" y="41" width="40" height="9" rx="2" fill="#0F2018" stroke="#7C3AED" stroke-width="1.2"/>
    <text x="38" y="47.5" text-anchor="middle" fill="#7C3AED" font-size="5" font-family="monospace" font-weight="bold">CSS</text>
    <text x="62" y="47.5" text-anchor="middle" fill="#7C3AED" font-size="4" font-family="monospace" opacity="0.6">{}</text>
    <!-- JS layer -->
    <rect x="30" y="52" width="40" height="9" rx="2" fill="#101F0A" stroke="#22C55E" stroke-width="1.2"/>
    <text x="35" y="58.5" text-anchor="middle" fill="#22C55E" font-size="5" font-family="monospace" font-weight="bold">JS</text>
    <text x="62" y="58.5" text-anchor="middle" fill="#22C55E" font-size="4" font-family="monospace" opacity="0.6">()</text>

    <!-- Label -->
    <rect x="27" y="66" width="46" height="7" rx="2" fill="#00FF88" opacity="0.12" stroke="#00FF88" stroke-width="0.8"/>
    <text x="50" y="71.5" text-anchor="middle" fill="#00FF88" font-size="4.5" font-family="monospace">STAFF FE</text>

    <!-- Side ports -->
    <rect x="16" y="42" width="6" height="4" rx="1" fill="${DK}" stroke="${C}" stroke-width="0.8"/>
    <rect x="78" y="42" width="6" height="4" rx="1" fill="${DK}" stroke="${C}" stroke-width="0.8"/>

    <!-- Bottom traces -->
    <path d="M34,76 V84 H42 V80" stroke="#00FF88" stroke-width="0.8" fill="none" opacity="0.5"/>
    <circle cx="42" cy="80" r="1.2" fill="#00FF88" opacity="0.7"/>
    <path d="M66,76 V82 H58 V78" stroke="#00FF88" stroke-width="0.8" fill="none" opacity="0.5"/>
    <circle cx="58" cy="78" r="1.2" fill="#00FF88" opacity="0.7"/>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // STAFF-BE: Rectangle, API endpoint symbol ({} brackets + arrows) in display
  // ─────────────────────────────────────────────────────────────────────────
  "STAFF-BE": svg(`
    <!-- Server antenna -->
    <rect x="44" y="8" width="12" height="5" rx="2" fill="${C}" opacity="0.8"/>
    <line x1="50" y1="22" x2="50" y2="13" stroke="${C}" stroke-width="1.5"/>

    <!-- Rect head -->
    <rect x="22" y="22" width="56" height="54" rx="4" fill="#080E14" stroke="${C}" stroke-width="2"/>
    <!-- Orange accent stripe -->
    <rect x="22" y="22" width="56" height="3" rx="2" fill="#FF6B35" opacity="0.4"/>

    <!-- Display: API endpoint symbol -->
    <rect x="27" y="28" width="46" height="32" rx="2" fill="#040912" stroke="#FF6B35" stroke-width="1"/>
    <!-- Route arrow left -->
    <line x1="30" y1="44" x2="40" y2="44" stroke="#FF6B35" stroke-width="1.5" marker-end="url(#arr)"/>
    <polygon points="40,44 37,42 37,46" fill="#FF6B35"/>
    <!-- {} braces center (large) -->
    <text x="50" y="49" text-anchor="middle" fill="${C}" font-size="16" font-family="monospace" font-weight="bold" opacity="0.9">{}</text>
    <!-- Route arrow right -->
    <line x1="60" y1="44" x2="70" y2="44" stroke="#FF6B35" stroke-width="1.5"/>
    <polygon points="70,44 67,42 67,46" fill="#FF6B35"/>
    <!-- REST labels -->
    <text x="34" y="38" text-anchor="middle" fill="#FF6B35" font-size="3.5" font-family="monospace">GET</text>
    <text x="34" y="53" text-anchor="middle" fill="#FF6B35" font-size="3.5" font-family="monospace">POST</text>
    <text x="66" y="38" text-anchor="middle" fill="${C}" font-size="3.5" font-family="monospace">200</text>
    <text x="66" y="53" text-anchor="middle" fill="#22C55E" font-size="3.5" font-family="monospace">201</text>

    <!-- Label -->
    <rect x="27" y="63" width="46" height="8" rx="2" fill="#FF6B35" opacity="0.12" stroke="#FF6B35" stroke-width="0.8"/>
    <text x="50" y="68.5" text-anchor="middle" fill="#FF6B35" font-size="4.5" font-family="monospace">STAFF BACKEND</text>

    <!-- Side traces -->
    <path d="M22,38 H14 V44 H18" stroke="#FF6B35" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="18" cy="44" r="1.2" fill="#FF6B35" opacity="0.7"/>
    <path d="M78,38 H86 V44 H82" stroke="#FF6B35" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="82" cy="44" r="1.2" fill="#FF6B35" opacity="0.7"/>

    <!-- Bottom traces -->
    <path d="M35,74 V82 H45" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.5"/>
    <path d="M65,74 V80 H55" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.5"/>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // STAFF-MOB: Rectangle, cross-platform icon (overlapping phone + desktop)
  // ─────────────────────────────────────────────────────────────────────────
  "STAFF-MOB": svg(`
    <!-- Mobile+signal antenna -->
    <line x1="50" y1="22" x2="50" y2="11" stroke="#FF2D78" stroke-width="1.5"/>
    <path d="M46,14 Q50,10 54,14" stroke="#FF2D78" stroke-width="1.2" fill="none"/>

    <!-- Rect head -->
    <rect x="22" y="22" width="56" height="54" rx="4" fill="#0D060E" stroke="${C}" stroke-width="2"/>

    <!-- Display: cross-platform (phone + desktop overlapping) -->
    <rect x="27" y="27" width="46" height="34" rx="2" fill="#07030A" stroke="${C}" stroke-width="1"/>
    <!-- Desktop/monitor (back, larger) -->
    <rect x="30" y="30" width="32" height="22" rx="2" fill="#140820" stroke="${C}" stroke-width="1.2"/>
    <rect x="31" y="31.5" width="30" height="16" rx="1" fill="#1F0D30" stroke="#FF2D78" stroke-width="0.5"/>
    <!-- Desktop stand -->
    <rect x="41" y="52" width="10" height="3" rx="1" fill="${C}" opacity="0.5"/>
    <rect x="38" y="55" width="16" height="1.5" rx="0.75" fill="${C}" opacity="0.5"/>
    <!-- Phone (overlapping, front-right) -->
    <rect x="50" y="35" width="18" height="26" rx="3" fill="#1a0818" stroke="#FF2D78" stroke-width="1.5"/>
    <rect x="52" y="38" width="14" height="17" rx="1" fill="#2a0A25" stroke="${C}" stroke-width="0.5"/>
    <!-- Phone home button -->
    <circle cx="59" cy="58" r="1.5" fill="#FF2D78" opacity="0.8"/>
    <!-- Cross-platform arrow -->
    <path d="M45,42 L50,42" stroke="${C}" stroke-width="1" stroke-dasharray="2 1"/>
    <polygon points="50,42 48,40.5 48,43.5" fill="${C}" opacity="0.7"/>

    <!-- Desktop screen content (app mockup) -->
    <rect x="33" y="33" width="14" height="2" rx="0.5" fill="${C}" opacity="0.4"/>
    <rect x="33" y="36.5" width="10" height="1.5" rx="0.5" fill="#FF2D78" opacity="0.3"/>
    <rect x="33" y="39.5" width="12" height="1.5" rx="0.5" fill="${C}" opacity="0.3"/>
    <rect x="33" y="42.5" width="8" height="1.5" rx="0.5" fill="#FF2D78" opacity="0.3"/>

    <!-- Label -->
    <rect x="27" y="64" width="46" height="8" rx="2" fill="#FF2D78" opacity="0.12" stroke="#FF2D78" stroke-width="0.8"/>
    <text x="50" y="69.5" text-anchor="middle" fill="#FF2D78" font-size="4" font-family="monospace">STAFF · MOBILE</text>

    <!-- Bottom traces -->
    <path d="M34,75 V82 H42" stroke="#FF2D78" stroke-width="0.8" fill="none" opacity="0.5"/>
    <circle cx="42" cy="82" r="1.2" fill="#FF2D78" opacity="0.7"/>
    <path d="M66,75 V80 H58" stroke="#FF2D78" stroke-width="0.8" fill="none" opacity="0.5"/>
    <circle cx="58" cy="80" r="1.2" fill="#FF2D78" opacity="0.7"/>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // STAFF-DATA: Rectangle, data lake symbol (wavy container shape) in display
  // ─────────────────────────────────────────────────────────────────────────
  "STAFF-DATA": svg(`
    <!-- Data antenna -->
    <line x1="50" y1="22" x2="50" y2="10" stroke="#FF6B35" stroke-width="1.5"/>
    <circle cx="50" cy="9" r="2" fill="${C}"/>
    <circle cx="50" cy="9" r="1" fill="#FF6B35"/>

    <!-- Rect head -->
    <rect x="22" y="22" width="56" height="54" rx="4" fill="#0D0906" stroke="${C}" stroke-width="2"/>

    <!-- Display: data lake (wavy container) -->
    <rect x="27" y="27" width="46" height="36" rx="2" fill="#070401" stroke="#FF6B35" stroke-width="1"/>
    <!-- Lake container (irregular wavy container shape) -->
    <!-- Top rim (flat) -->
    <ellipse cx="50" cy="36" rx="18" ry="4" fill="#1a0e06" stroke="#FF6B35" stroke-width="1.2"/>
    <ellipse cx="50" cy="36" rx="18" ry="4" fill="none" stroke="${C}" stroke-width="0.5" opacity="0.4"/>
    <!-- Lake body -->
    <rect x="32" y="36" width="36" height="20" fill="#120a04"/>
    <!-- Bottom rim -->
    <ellipse cx="50" cy="56" rx="18" ry="4" fill="#1a0e06" stroke="#FF6B35" stroke-width="1.2"/>
    <!-- Water waves inside lake -->
    <path d="M34,42 Q38,39 42,42 Q46,45 50,42 Q54,39 58,42 Q62,45 66,42" stroke="${C}" stroke-width="1" fill="none" opacity="0.7"/>
    <path d="M34,47 Q38,44 42,47 Q46,50 50,47 Q54,44 58,47 Q62,50 66,47" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.5"/>
    <path d="M34,52 Q39,50 44,52 Q49,54 54,52 Q59,50 64,52" stroke="${C}" stroke-width="0.6" fill="none" opacity="0.4"/>
    <!-- Data stream entering lake (pipe from top) -->
    <rect x="47" y="29" width="6" height="7" rx="1" fill="#FF6B35" opacity="0.4"/>
    <path d="M48,29 L52,29" stroke="#FF6B35" stroke-width="1"/>
    <path d="M50,33 L50,36" stroke="#FF6B35" stroke-width="1"/>
    <polygon points="50,36 48,33 52,33" fill="#FF6B35" opacity="0.7"/>

    <!-- Label -->
    <rect x="27" y="66" width="46" height="7" rx="2" fill="#FF6B35" opacity="0.12" stroke="#FF6B35" stroke-width="0.8"/>
    <text x="50" y="71.5" text-anchor="middle" fill="#FF6B35" font-size="4.5" font-family="monospace">STAFF DATA</text>

    <!-- Side traces -->
    <path d="M22,40 H14 V46 H18" stroke="#FF6B35" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="18" cy="46" r="1.2" fill="#FF6B35" opacity="0.7"/>
    <path d="M78,40 H86 V46 H82" stroke="#FF6B35" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="82" cy="46" r="1.2" fill="#FF6B35" opacity="0.7"/>

    <!-- Bottom traces -->
    <path d="M34,76 V84 H42" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.5"/>
    <path d="M66,76 V82 H58" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.5"/>
  `),

  // ─────────────────────────────────────────────────────────────────────────
  // TECH-LEAD: Rectangle, crown overlay on top of rect head + gear symbol
  // in display, leader badge
  // ─────────────────────────────────────────────────────────────────────────
  "TECH-LEAD": svg(`
    <!-- Crown overlay on TOP of head (not antenna, part of the face) -->
    <!-- Crown base -->
    <rect x="28" y="16" width="44" height="8" rx="1" fill="#1a1400" stroke="${C}" stroke-width="1"/>
    <!-- Crown spikes (5) -->
    <polygon points="30,16 33,10 36,16" fill="${C}" opacity="0.9"/>
    <polygon points="38,16 41,8 44,16" fill="${C}" opacity="0.9"/>
    <polygon points="46,16 50,6 54,16" fill="${C}" opacity="1"/>
    <polygon points="56,16 59,8 62,16" fill="${C}" opacity="0.9"/>
    <polygon points="64,16 67,10 70,16" fill="${C}" opacity="0.9"/>
    <!-- Crown gems -->
    <circle cx="33" cy="11" r="1.5" fill="#FFD700"/>
    <circle cx="50" cy="7" r="2" fill="#FFD700"/>
    <circle cx="67" cy="11" r="1.5" fill="#FFD700"/>
    <circle cx="41.5" cy="9" r="1.5" fill="#FF2D78"/>
    <circle cx="58.5" cy="9" r="1.5" fill="#FF2D78"/>

    <!-- Rect head (starts below crown) -->
    <rect x="22" y="22" width="56" height="54" rx="4" fill="#0C0C0A" stroke="${C}" stroke-width="2"/>

    <!-- Display: gear symbol (cog wheel) -->
    <rect x="27" y="27" width="46" height="30" rx="2" fill="#060604" stroke="${C}" stroke-width="1"/>
    <!-- Gear body (circle) -->
    <circle cx="50" cy="42" r="10" fill="#1a1a0e" stroke="${C}" stroke-width="1.8"/>
    <!-- Gear center hole -->
    <circle cx="50" cy="42" r="4" fill="#060604" stroke="${C}" stroke-width="1.2"/>
    <circle cx="50" cy="42" r="1.5" fill="${C}" opacity="0.8"/>
    <!-- Gear teeth (8 teeth via rects rotated) -->
    <rect x="48" y="29" width="4" height="5" rx="1" fill="${C}" opacity="0.85" transform="rotate(0,50,42)"/>
    <rect x="48" y="29" width="4" height="5" rx="1" fill="${C}" opacity="0.85" transform="rotate(45,50,42)"/>
    <rect x="48" y="29" width="4" height="5" rx="1" fill="${C}" opacity="0.85" transform="rotate(90,50,42)"/>
    <rect x="48" y="29" width="4" height="5" rx="1" fill="${C}" opacity="0.85" transform="rotate(135,50,42)"/>
    <rect x="48" y="29" width="4" height="5" rx="1" fill="${C}" opacity="0.85" transform="rotate(180,50,42)"/>
    <rect x="48" y="29" width="4" height="5" rx="1" fill="${C}" opacity="0.85" transform="rotate(225,50,42)"/>
    <rect x="48" y="29" width="4" height="5" rx="1" fill="${C}" opacity="0.85" transform="rotate(270,50,42)"/>
    <rect x="48" y="29" width="4" height="5" rx="1" fill="${C}" opacity="0.85" transform="rotate(315,50,42)"/>

    <!-- Leader badge (prominent) -->
    <rect x="27" y="60" width="46" height="12" rx="3" fill="${C}" opacity="0.2" stroke="${C}" stroke-width="1.2"/>
    <text x="50" y="66" text-anchor="middle" fill="${C}" font-size="4.5" font-family="monospace" font-weight="bold">TECH LEAD</text>
    <text x="50" y="70" text-anchor="middle" fill="${C}" font-size="3.5" font-family="monospace" opacity="0.6">LEADING THE CODE</text>

    <!-- Side ports -->
    <rect x="16" y="36" width="6" height="5" rx="1" fill="${DK}" stroke="${C}" stroke-width="0.8"/>
    <rect x="16" y="46" width="6" height="5" rx="1" fill="${DK}" stroke="${C}" stroke-width="0.8"/>
    <rect x="78" y="36" width="6" height="5" rx="1" fill="${DK}" stroke="${C}" stroke-width="0.8"/>
    <rect x="78" y="46" width="6" height="5" rx="1" fill="${DK}" stroke="${C}" stroke-width="0.8"/>

    <!-- Bottom traces -->
    <path d="M32,76 V85 H42 V81" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="42" cy="81" r="1.2" fill="${C}" opacity="0.7"/>
    <path d="M68,76 V83 H58 V79" stroke="${C}" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="58" cy="79" r="1.2" fill="${C}" opacity="0.7"/>
  `),

};

for (const [code, content] of Object.entries(avatars)) {
  writeFileSync(`${OUT}/${code}.svg`, content);
}
console.log(`Batch 2: ${Object.keys(avatars).length} unique engineering leadership avatars written to ${OUT}`);
console.log("Codes:", Object.keys(avatars).join(", "));
