import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUT = join(__dirname, "../public/brand/avatars/agents");
mkdirSync(OUT, { recursive: true });

function svg(body: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#1a1f3a"/><stop offset="100%" stop-color="#030108"/></radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
${body}</svg>`;
}

const avatars: Record<string, string> = {

// ─────────────────────────────────────────────────────────────────
// CEO — 5 tall spikes, constellation-star pupils, gold+purple gem,
//        majestic pauldron shoulders, regal presence
// ─────────────────────────────────────────────────────────────────
"CEO": svg(`
<defs>
  <radialGradient id="ceo-gem" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#C084FC"/><stop offset="100%" stop-color="#7C3AED"/></radialGradient>
  <radialGradient id="ceo-eye" cx="40%" cy="35%" r="55%"><stop offset="0%" stop-color="#A78BFA"/><stop offset="100%" stop-color="#4C1D95"/></radialGradient>
  <filter id="ceo-glow"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- 5 crown spikes: outer tall, mid short, center tallest -->
<polygon points="24,38 28,38 26,8"  fill="#FFD700" opacity="0.95" filter="url(#ceo-glow)"/>
<polygon points="34,36 38,36 36,18" fill="#FFD700" opacity="0.85"/>
<polygon points="46,36 54,36 50,4"  fill="#FFD700" opacity="1"    filter="url(#ceo-glow)"/>
<polygon points="62,36 66,36 64,18" fill="#FFD700" opacity="0.85"/>
<polygon points="72,38 76,38 74,8"  fill="#FFD700" opacity="0.95" filter="url(#ceo-glow)"/>
<!-- purple gems at spike tips -->
<polygon points="50,4 53,9 50,13 47,9" fill="url(#ceo-gem)"/>
<circle cx="26" cy="8" r="2.2" fill="url(#ceo-gem)"/>
<circle cx="74" cy="8" r="2.2" fill="url(#ceo-gem)"/>
<!-- hexagon head -->
<path d="M50,34 L68,44 L68,66 L50,76 L32,66 L32,44 Z" fill="#1A1F3A" stroke="#FFD700" stroke-width="2"/>
<!-- crown band -->
<rect x="32" y="34" width="36" height="5" rx="1" fill="#FFD700" opacity="0.8"/>
<!-- constellation eyes: star pupils -->
<circle cx="42" cy="53" r="5" fill="#0A0A1A" stroke="#7C3AED" stroke-width="0.8"/>
<circle cx="58" cy="53" r="5" fill="#0A0A1A" stroke="#7C3AED" stroke-width="0.8"/>
<!-- star-dot pupil left -->
<circle cx="42" cy="53" r="1.6" fill="#A78BFA"/>
<line x1="42" y1="49.5" x2="42" y2="50.8" stroke="#A78BFA" stroke-width="0.5"/>
<line x1="42" y1="55.2" x2="42" y2="56.5" stroke="#A78BFA" stroke-width="0.5"/>
<line x1="38.5" y1="53" x2="39.8" y2="53" stroke="#A78BFA" stroke-width="0.5"/>
<line x1="44.2" y1="53" x2="45.5" y2="53" stroke="#A78BFA" stroke-width="0.5"/>
<circle cx="40.9" cy="51.9" r="0.4" fill="#C4B5FD" opacity="0.9"/>
<circle cx="43.2" cy="51.5" r="0.3" fill="white" opacity="0.7"/>
<circle cx="44" cy="54" r="0.3" fill="#C4B5FD" opacity="0.7"/>
<!-- star-dot pupil right -->
<circle cx="58" cy="53" r="1.6" fill="#A78BFA"/>
<line x1="58" y1="49.5" x2="58" y2="50.8" stroke="#A78BFA" stroke-width="0.5"/>
<line x1="58" y1="55.2" x2="58" y2="56.5" stroke="#A78BFA" stroke-width="0.5"/>
<line x1="54.5" y1="53" x2="55.8" y2="53" stroke="#A78BFA" stroke-width="0.5"/>
<line x1="60.2" y1="53" x2="61.5" y2="53" stroke="#A78BFA" stroke-width="0.5"/>
<circle cx="56.9" cy="51.9" r="0.4" fill="#C4B5FD" opacity="0.9"/>
<circle cx="59.2" cy="51.5" r="0.3" fill="white" opacity="0.7"/>
<!-- regal smile -->
<path d="M44,64 Q50,68 56,64" stroke="#FFD700" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<!-- majestic pauldron shoulders -->
<path d="M32,66 L32,75 L22,72 L20,62 Z" fill="#2A2F50" stroke="#FFD700" stroke-width="1.2"/>
<path d="M68,66 L68,75 L78,72 L80,62 Z" fill="#2A2F50" stroke="#FFD700" stroke-width="1.2"/>
<circle cx="21" cy="67" r="2" fill="#7C3AED" opacity="0.9"/>
<circle cx="79" cy="67" r="2" fill="#7C3AED" opacity="0.9"/>
<!-- body -->
<path d="M32,75 L26,92 L50,88 L74,92 L68,75 Z" fill="#1A1F3A" stroke="#FFD700" stroke-width="1"/>
<!-- ground glow -->
<ellipse cx="50" cy="96" rx="22" ry="3.5" fill="rgba(255,215,0,0.18)"/>
`),

// ─────────────────────────────────────────────────────────────────
// CTO — 3 spikes with circuit traces ON hex face,
//        square LED eyes (cyan), right-side antenna
// ─────────────────────────────────────────────────────────────────
"CTO": svg(`
<defs>
  <radialGradient id="cto-eye" cx="40%" cy="40%" r="55%"><stop offset="0%" stop-color="#00FFFF"/><stop offset="100%" stop-color="#0066AA"/></radialGradient>
  <filter id="cto-glow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- antenna top-right -->
<line x1="67" y1="34" x2="75" y2="18" stroke="#00D9FF" stroke-width="1.2"/>
<circle cx="75" cy="17" r="2.5" fill="#00D9FF" filter="url(#cto-glow)"/>
<rect x="73" y="15" width="4" height="4" rx="0.5" fill="none" stroke="#00D9FF" stroke-width="0.8"/>
<!-- 3 circuit-traced spikes -->
<polygon points="36,36 42,36 39,10" fill="#FFD700" opacity="0.9"/>
<polygon points="47,36 53,36 50,20" fill="#FFD700" opacity="0.85"/>
<polygon points="59,36 65,36 62,10" fill="#FFD700" opacity="0.9"/>
<!-- circuit trace lines on spike faces -->
<line x1="39" y1="28" x2="39" y2="22" stroke="#00D9FF" stroke-width="0.7"/>
<line x1="37" y1="25" x2="41" y2="25" stroke="#00D9FF" stroke-width="0.5"/>
<line x1="50" y1="30" x2="50" y2="24" stroke="#00D9FF" stroke-width="0.7"/>
<circle cx="39" cy="22" r="0.9" fill="#00D9FF"/>
<circle cx="50" cy="24" r="0.9" fill="#00D9FF"/>
<circle cx="62" cy="22" r="0.9" fill="#00D9FF"/>
<line x1="62" y1="28" x2="62" y2="22" stroke="#00D9FF" stroke-width="0.7"/>
<!-- hex head -->
<path d="M50,34 L68,44 L68,66 L50,76 L32,66 L32,44 Z" fill="#0D1220" stroke="#FFD700" stroke-width="1.8"/>
<rect x="32" y="34" width="36" height="5" rx="1" fill="#FFD700" opacity="0.75"/>
<!-- circuit traces ON the hex face -->
<line x1="36" y1="55" x2="42" y2="55" stroke="#00D9FF" stroke-width="0.6" opacity="0.8"/>
<line x1="42" y1="55" x2="42" y2="60" stroke="#00D9FF" stroke-width="0.6" opacity="0.8"/>
<line x1="42" y1="60" x2="48" y2="60" stroke="#00D9FF" stroke-width="0.6" opacity="0.8"/>
<line x1="58" y1="55" x2="64" y2="55" stroke="#00D9FF" stroke-width="0.6" opacity="0.8"/>
<line x1="58" y1="55" x2="58" y2="60" stroke="#00D9FF" stroke-width="0.6" opacity="0.8"/>
<line x1="52" y1="60" x2="58" y2="60" stroke="#00D9FF" stroke-width="0.6" opacity="0.8"/>
<!-- small circuit nodes -->
<rect x="35" y="54.2" width="1.6" height="1.6" fill="#00D9FF" opacity="0.9"/>
<rect x="63.4" y="54.2" width="1.6" height="1.6" fill="#00D9FF" opacity="0.9"/>
<!-- square LED eyes -->
<rect x="38" y="47" width="8" height="8" rx="1" fill="#0A0A1A" stroke="#00D9FF" stroke-width="1.2"/>
<rect x="54" y="47" width="8" height="8" rx="1" fill="#0A0A1A" stroke="#00D9FF" stroke-width="1.2"/>
<rect x="40.5" y="49.5" width="3" height="3" rx="0.3" fill="url(#cto-eye)" filter="url(#cto-glow)"/>
<rect x="56.5" y="49.5" width="3" height="3" rx="0.3" fill="url(#cto-eye)" filter="url(#cto-glow)"/>
<!-- LED scan line -->
<line x1="39.5" y1="51" x2="45.5" y2="51" stroke="#00D9FF" stroke-width="0.5" opacity="0.5"/>
<line x1="55.5" y1="51" x2="61.5" y2="51" stroke="#00D9FF" stroke-width="0.5" opacity="0.5"/>
<!-- flat mouth / terminal line -->
<line x1="44" y1="64" x2="56" y2="64" stroke="#00D9FF" stroke-width="1.2" stroke-linecap="round"/>
<rect x="48" y="62.5" width="4" height="3" rx="0.5" fill="none" stroke="#00D9FF" stroke-width="0.6"/>
<!-- body: tech chassis -->
<path d="M32,75 L28,90 L50,87 L72,90 L68,75 Z" fill="#0D1220" stroke="#FFD700" stroke-width="1"/>
<line x1="38" y1="80" x2="62" y2="80" stroke="#00D9FF" stroke-width="0.6" opacity="0.6"/>
<rect x="46" y="82" width="8" height="3" rx="0.5" fill="none" stroke="#00D9FF" stroke-width="0.6" opacity="0.7"/>
<ellipse cx="50" cy="96" rx="22" ry="3" fill="rgba(0,217,255,0.15)"/>
`),

// ─────────────────────────────────────────────────────────────────
// CPO — 4 spikes, diamond prism gem in hex face center,
//        orange accent, refraction lines radiating out
// ─────────────────────────────────────────────────────────────────
"CPO": svg(`
<defs>
  <radialGradient id="cpo-prism" cx="50%" cy="25%" r="60%"><stop offset="0%" stop-color="#FED7AA"/><stop offset="40%" stop-color="#FF6B35"/><stop offset="100%" stop-color="#9A3412"/></radialGradient>
  <radialGradient id="cpo-eye" cx="40%" cy="35%" r="55%"><stop offset="0%" stop-color="#FED7AA"/><stop offset="100%" stop-color="#FF6B35"/></radialGradient>
  <filter id="cpo-glow"><feGaussianBlur stdDeviation="1" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- 4 spikes: two flanks and two near-center -->
<polygon points="28,38 33,38 30.5,12" fill="#FFD700" opacity="0.92"/>
<polygon points="40,36 45,36 42.5,20" fill="#FFD700" opacity="0.85"/>
<polygon points="55,36 60,36 57.5,20" fill="#FFD700" opacity="0.85"/>
<polygon points="67,38 72,38 69.5,12" fill="#FFD700" opacity="0.92"/>
<!-- hex head -->
<path d="M50,34 L68,44 L68,66 L50,76 L32,66 L32,44 Z" fill="#1A0D08" stroke="#FF6B35" stroke-width="1.8"/>
<rect x="32" y="34" width="36" height="5" rx="1" fill="#FF6B35" opacity="0.7"/>
<!-- diamond/prism gem in hex face center -->
<polygon points="50,42 56,50 50,58 44,50" fill="url(#cpo-prism)" filter="url(#cpo-glow)"/>
<!-- prism interior facets -->
<line x1="50" y1="42" x2="50" y2="58" stroke="rgba(255,255,255,0.3)" stroke-width="0.6"/>
<line x1="44" y1="50" x2="56" y2="50" stroke="rgba(255,255,255,0.3)" stroke-width="0.6"/>
<!-- refraction lines radiating from prism -->
<line x1="44" y1="46" x2="37" y2="41" stroke="#FF6B35" stroke-width="0.8" opacity="0.7"/>
<line x1="44" y1="54" x2="37" y2="59" stroke="#FBBF24" stroke-width="0.8" opacity="0.7"/>
<line x1="56" y1="46" x2="63" y2="41" stroke="#FF6B35" stroke-width="0.8" opacity="0.7"/>
<line x1="56" y1="54" x2="63" y2="59" stroke="#FBBF24" stroke-width="0.8" opacity="0.7"/>
<line x1="50" y1="42" x2="50" y2="36" stroke="#FFD700" stroke-width="0.7" opacity="0.6"/>
<line x1="50" y1="58" x2="50" y2="65" stroke="#FF6B35" stroke-width="0.7" opacity="0.6"/>
<!-- small eyes beside the prism -->
<circle cx="40" cy="47" r="3.2" fill="#0A0408" stroke="#FF6B35" stroke-width="0.8"/>
<circle cx="60" cy="47" r="3.2" fill="#0A0408" stroke="#FF6B35" stroke-width="0.8"/>
<circle cx="40" cy="47" r="1.5" fill="url(#cpo-eye)"/>
<circle cx="60" cy="47" r="1.5" fill="url(#cpo-eye)"/>
<circle cx="39.3" cy="46.3" r="0.5" fill="white" opacity="0.8"/>
<circle cx="59.3" cy="46.3" r="0.5" fill="white" opacity="0.8"/>
<!-- mouth: content-aware smile -->
<path d="M44,66 Q50,70 56,66" stroke="#FF6B35" stroke-width="1.4" fill="none" stroke-linecap="round"/>
<!-- body with product roadmap motif -->
<path d="M32,75 L27,91 L50,88 L73,91 L68,75 Z" fill="#1A0D08" stroke="#FF6B35" stroke-width="1"/>
<line x1="36" y1="81" x2="42" y2="81" stroke="#FF6B35" stroke-width="0.8" opacity="0.8"/>
<line x1="45" y1="81" x2="55" y2="81" stroke="#FFD700" stroke-width="0.8" opacity="0.8"/>
<line x1="58" y1="81" x2="64" y2="81" stroke="#FF6B35" stroke-width="0.8" opacity="0.8"/>
<circle cx="42" cy="81" r="1" fill="#FF6B35" opacity="0.9"/>
<circle cx="55" cy="81" r="1" fill="#FFD700" opacity="0.9"/>
<ellipse cx="50" cy="96" rx="22" ry="3" fill="rgba(255,107,53,0.18)"/>
`),

// ─────────────────────────────────────────────────────────────────
// COO — 3 spikes, two interlocking gears in hex face,
//        mechanical grey+gold, precise and industrial
// ─────────────────────────────────────────────────────────────────
"COO": svg(`
<defs>
  <radialGradient id="coo-gear" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#9CA3AF"/><stop offset="100%" stop-color="#374151"/></radialGradient>
  <filter id="coo-glow"><feGaussianBlur stdDeviation="0.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- 3 spikes: solid, mechanical style -->
<polygon points="35,37 40,37 37.5,13" fill="#9CA3AF" opacity="0.9"/>
<polygon points="47,36 53,36 50,8"   fill="#FFD700" opacity="0.95"/>
<polygon points="60,37 65,37 62.5,13" fill="#9CA3AF" opacity="0.9"/>
<!-- hex head -->
<path d="M50,34 L68,44 L68,66 L50,76 L32,66 L32,44 Z" fill="#111827" stroke="#9CA3AF" stroke-width="2"/>
<rect x="32" y="34" width="36" height="5" rx="1" fill="#9CA3AF" opacity="0.8"/>
<!-- center accent line gold -->
<rect x="47" y="34" width="6" height="5" rx="1" fill="#FFD700" opacity="0.9"/>
<!-- large gear left -->
<circle cx="42" cy="52" r="8" fill="none" stroke="#9CA3AF" stroke-width="1.2"/>
<circle cx="42" cy="52" r="5" fill="url(#coo-gear)"/>
<circle cx="42" cy="52" r="2" fill="#1F2937"/>
<!-- gear teeth left (8 teeth) -->
<rect x="40.5" y="42.5" width="3" height="2" rx="0.4" fill="#9CA3AF"/>
<rect x="40.5" y="59.5" width="3" height="2" rx="0.4" fill="#9CA3AF"/>
<rect x="33.5" y="50.5" width="2" height="3" rx="0.4" fill="#9CA3AF"/>
<rect x="49.5" y="50.5" width="2" height="3" rx="0.4" fill="#9CA3AF"/>
<rect x="36" y="44.5" width="2" height="2" rx="0.4" fill="#9CA3AF" transform="rotate(45 37 45.5)"/>
<rect x="46.5" y="44.5" width="2" height="2" rx="0.4" fill="#9CA3AF" transform="rotate(45 47.5 45.5)"/>
<rect x="36" y="58" width="2" height="2" rx="0.4" fill="#9CA3AF" transform="rotate(45 37 59)"/>
<rect x="46.5" y="58" width="2" height="2" rx="0.4" fill="#9CA3AF" transform="rotate(45 47.5 59)"/>
<!-- small gear right (interlocking) -->
<circle cx="58" cy="52" r="5.5" fill="none" stroke="#FFD700" stroke-width="1"/>
<circle cx="58" cy="52" r="3.5" fill="#2A2F20"/>
<circle cx="58" cy="52" r="1.4" fill="#1F2937"/>
<!-- small gear teeth -->
<rect x="56.7" y="45.5" width="2.6" height="1.8" rx="0.3" fill="#FFD700"/>
<rect x="56.7" y="57" width="2.6" height="1.8" rx="0.3" fill="#FFD700"/>
<rect x="51.2" y="50.6" width="1.8" height="2.6" rx="0.3" fill="#FFD700"/>
<rect x="63" y="50.6" width="1.8" height="2.6" rx="0.3" fill="#FFD700"/>
<!-- gear mesh contact indicator -->
<circle cx="50.5" cy="52" r="0.7" fill="#FFD700" opacity="0.8"/>
<!-- mechanical eyes (visor slits) -->
<rect x="38" y="48" width="5" height="2" rx="0.8" fill="#4B5563"/>
<rect x="57" y="48" width="5" height="2" rx="0.8" fill="#4B5563"/>
<rect x="39" y="48.3" width="3" height="1.4" rx="0.5" fill="#FFD700" opacity="0.7"/>
<rect x="58" y="48.3" width="3" height="1.4" rx="0.5" fill="#FFD700" opacity="0.7"/>
<!-- flat operational mouth -->
<line x1="44" y1="65" x2="56" y2="65" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round"/>
<!-- body: mechanical chassis -->
<path d="M32,75 L28,90 L50,87 L72,90 L68,75 Z" fill="#111827" stroke="#9CA3AF" stroke-width="1"/>
<!-- bolt detail -->
<circle cx="36" cy="82" r="1.5" fill="none" stroke="#9CA3AF" stroke-width="0.8"/>
<circle cx="64" cy="82" r="1.5" fill="none" stroke="#9CA3AF" stroke-width="0.8"/>
<ellipse cx="50" cy="96" rx="22" ry="3" fill="rgba(156,163,175,0.15)"/>
`),

// ─────────────────────────────────────────────────────────────────
// CFO — 3 spikes, vault dial ring in hex face,
//        green accent, concentric circles + dial hand
// ─────────────────────────────────────────────────────────────────
"CFO": svg(`
<defs>
  <radialGradient id="cfo-vault" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#1A2E1A"/><stop offset="100%" stop-color="#0A0F0A"/></radialGradient>
  <filter id="cfo-glow"><feGaussianBlur stdDeviation="1" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- 3 spikes: solid and conservative -->
<polygon points="35,37 40,37 37.5,14" fill="#FFD700" opacity="0.9"/>
<polygon points="47,36 53,36 50,10"   fill="#FFD700" opacity="0.95"/>
<polygon points="60,37 65,37 62.5,14" fill="#FFD700" opacity="0.9"/>
<!-- hex head -->
<path d="M50,34 L68,44 L68,66 L50,76 L32,66 L32,44 Z" fill="#0A1A0A" stroke="#84CC16" stroke-width="2"/>
<rect x="32" y="34" width="36" height="5" rx="1" fill="#84CC16" opacity="0.75"/>
<!-- vault dial in hex face center -->
<circle cx="50" cy="53" r="11" fill="url(#cfo-vault)" stroke="#84CC16" stroke-width="1.2"/>
<circle cx="50" cy="53" r="9" fill="none" stroke="#84CC16" stroke-width="0.6" opacity="0.5"/>
<circle cx="50" cy="53" r="6.5" fill="none" stroke="#84CC16" stroke-width="0.8" opacity="0.7"/>
<circle cx="50" cy="53" r="3.5" fill="none" stroke="#84CC16" stroke-width="0.6" opacity="0.6"/>
<!-- dial tick marks (12 positions) -->
<line x1="50" y1="42.5" x2="50" y2="44.5" stroke="#84CC16" stroke-width="0.8"/>
<line x1="50" y1="61.5" x2="50" y2="63.5" stroke="#84CC16" stroke-width="0.8"/>
<line x1="39.5" y1="53" x2="41.5" y2="53" stroke="#84CC16" stroke-width="0.8"/>
<line x1="58.5" y1="53" x2="60.5" y2="53" stroke="#84CC16" stroke-width="0.8"/>
<line x1="42.3" y1="45.3" x2="43.7" y2="46.7" stroke="#84CC16" stroke-width="0.6" opacity="0.7"/>
<line x1="56.3" y1="45.3" x2="57.7" y2="46.7" stroke="#84CC16" stroke-width="0.6" opacity="0.7"/>
<line x1="42.3" y1="60.7" x2="43.7" y2="59.3" stroke="#84CC16" stroke-width="0.6" opacity="0.7"/>
<line x1="56.3" y1="60.7" x2="57.7" y2="59.3" stroke="#84CC16" stroke-width="0.6" opacity="0.7"/>
<!-- vault dial hand pointing to ~2 o'clock (profitable) -->
<line x1="50" y1="53" x2="55" y2="46" stroke="#84CC16" stroke-width="1.2" stroke-linecap="round" filter="url(#cfo-glow)"/>
<line x1="50" y1="53" x2="48" y2="56" stroke="#FFD700" stroke-width="0.8" stroke-linecap="round"/>
<circle cx="50" cy="53" r="1.2" fill="#84CC16"/>
<!-- vault center lock dot -->
<circle cx="50" cy="53" r="0.5" fill="#FFD700"/>
<!-- eyes: calculating, narrow -->
<rect x="37" y="38" width="7" height="3.5" rx="1.2" fill="#0A1A0A" stroke="#84CC16" stroke-width="0.8"/>
<rect x="56" y="38" width="7" height="3.5" rx="1.2" fill="#0A1A0A" stroke="#84CC16" stroke-width="0.8"/>
<rect x="38.5" y="39" width="4" height="1.5" rx="0.6" fill="#84CC16" opacity="0.9"/>
<rect x="57.5" y="39" width="4" height="1.5" rx="0.6" fill="#84CC16" opacity="0.9"/>
<!-- neutral precise mouth -->
<path d="M44,67 L56,67" stroke="#84CC16" stroke-width="1.2" stroke-linecap="round"/>
<!-- body: suit + tie detail -->
<path d="M32,75 L28,91 L50,88 L72,91 L68,75 Z" fill="#0A1A0A" stroke="#84CC16" stroke-width="1"/>
<line x1="50" y1="76" x2="50" y2="88" stroke="#84CC16" stroke-width="0.8" opacity="0.7"/>
<polygon points="50,76 47,80 50,86 53,80" fill="#84CC16" opacity="0.3"/>
<ellipse cx="50" cy="96" rx="22" ry="3" fill="rgba(132,204,22,0.15)"/>
`),

// ─────────────────────────────────────────────────────────────────
// CMO — 4 spikes, megaphone shape in hex face,
//        purple accent, sound waves emanating
// ─────────────────────────────────────────────────────────────────
"CMO": svg(`
<defs>
  <radialGradient id="cmo-eye" cx="40%" cy="35%" r="55%"><stop offset="0%" stop-color="#E879F9"/><stop offset="100%" stop-color="#7E22CE"/></radialGradient>
  <filter id="cmo-glow"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- 4 spikes: dynamic, forward-leaning style -->
<polygon points="28,37 33,37 31,11"  fill="#FFD700" opacity="0.9"/>
<polygon points="40,36 45,36 43,16"  fill="#A855F7" opacity="0.9"/>
<polygon points="55,36 60,36 57,16"  fill="#A855F7" opacity="0.9"/>
<polygon points="67,37 72,37 69,11"  fill="#FFD700" opacity="0.9"/>
<!-- hex head -->
<path d="M50,34 L68,44 L68,66 L50,76 L32,66 L32,44 Z" fill="#180A2A" stroke="#A855F7" stroke-width="2"/>
<rect x="32" y="34" width="36" height="5" rx="1" fill="#A855F7" opacity="0.8"/>
<!-- megaphone shape in hex face (pointing left) -->
<!-- bell of megaphone -->
<polygon points="38,44 38,62 50,66 50,40" fill="#A855F7" opacity="0.25"/>
<polygon points="38,44 38,62 50,66 50,40" fill="none" stroke="#A855F7" stroke-width="1.2"/>
<!-- megaphone body (narrow part) -->
<rect x="50" y="50" width="7" height="6" rx="1" fill="#A855F7" opacity="0.4"/>
<rect x="50" y="50" width="7" height="6" rx="1" fill="none" stroke="#A855F7" stroke-width="1"/>
<!-- handle -->
<rect x="57" y="51.5" width="5" height="3" rx="1" fill="#A855F7" opacity="0.7"/>
<!-- sound waves from bell -->
<path d="M34,47 Q30,53 34,59" fill="none" stroke="#A855F7" stroke-width="0.9" opacity="0.8" filter="url(#cmo-glow)"/>
<path d="M31,44 Q25,53 31,62" fill="none" stroke="#A855F7" stroke-width="0.7" opacity="0.5"/>
<path d="M28,41 Q20,53 28,65" fill="none" stroke="#A855F7" stroke-width="0.5" opacity="0.3"/>
<!-- eyes: expressive, wide -->
<circle cx="57" cy="44" r="3.5" fill="#0D0518" stroke="#A855F7" stroke-width="0.8"/>
<circle cx="65" cy="44" r="3.5" fill="#0D0518" stroke="#A855F7" stroke-width="0.8"/>
<circle cx="57" cy="44" r="1.8" fill="url(#cmo-eye)"/>
<circle cx="65" cy="44" r="1.8" fill="url(#cmo-eye)"/>
<circle cx="56.3" cy="43.3" r="0.6" fill="white" opacity="0.9"/>
<circle cx="64.3" cy="43.3" r="0.6" fill="white" opacity="0.9"/>
<!-- excited/broadcasting smile -->
<path d="M55,64 Q61,68 67,64" stroke="#A855F7" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<path d="M55,64 Q61,72 67,64" stroke="#FFD700" stroke-width="0.6" fill="none" opacity="0.4" stroke-linecap="round"/>
<!-- body -->
<path d="M32,75 L27,91 L50,88 L73,91 L68,75 Z" fill="#180A2A" stroke="#A855F7" stroke-width="1"/>
<ellipse cx="50" cy="96" rx="22" ry="3" fill="rgba(168,85,247,0.18)"/>
`),

// ─────────────────────────────────────────────────────────────────
// CRO — 3 spikes, U-magnet in hex face,
//        orange accent, N/S pole labels
// ─────────────────────────────────────────────────────────────────
"CRO": svg(`
<defs>
  <linearGradient id="cro-magN" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#EF4444"/><stop offset="100%" stop-color="#F97316"/></linearGradient>
  <linearGradient id="cro-magS" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#F97316"/><stop offset="100%" stop-color="#FBBF24"/></linearGradient>
  <filter id="cro-glow"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- 3 spikes -->
<polygon points="35,37 40,37 37.5,14" fill="#FFD700" opacity="0.9"/>
<polygon points="47,36 53,36 50,10"   fill="#F97316" opacity="0.95"/>
<polygon points="60,37 65,37 62.5,14" fill="#FFD700" opacity="0.9"/>
<!-- hex head -->
<path d="M50,34 L68,44 L68,66 L50,76 L32,66 L32,44 Z" fill="#1A0800" stroke="#F97316" stroke-width="2"/>
<rect x="32" y="34" width="36" height="5" rx="1" fill="#F97316" opacity="0.75"/>
<!-- U-magnet shape in hex face -->
<!-- left arm of U -->
<rect x="36" y="42" width="7" height="18" rx="2" fill="none" stroke="#F97316" stroke-width="2"/>
<rect x="36.5" y="42.5" width="6" height="9" rx="1.2" fill="url(#cro-magN)" opacity="0.8"/>
<rect x="36.5" y="51.5" width="6" height="8.5" rx="1.2" fill="url(#cro-magS)" opacity="0.5"/>
<!-- right arm of U -->
<rect x="57" y="42" width="7" height="18" rx="2" fill="none" stroke="#F97316" stroke-width="2"/>
<rect x="57.5" y="42.5" width="6" height="9" rx="1.2" fill="url(#cro-magN)" opacity="0.8"/>
<rect x="57.5" y="51.5" width="6" height="8.5" rx="1.2" fill="url(#cro-magS)" opacity="0.5"/>
<!-- curved top of U connecting both arms -->
<path d="M38,42 Q50,34 62,42" fill="none" stroke="#F97316" stroke-width="2.5"/>
<!-- N label -->
<text x="37.5" y="50" font-size="3.5" fill="white" font-family="monospace" font-weight="bold">N</text>
<text x="58.5" y="50" font-size="3.5" fill="white" font-family="monospace" font-weight="bold">N</text>
<!-- S label -->
<text x="37.5" y="59" font-size="3.5" fill="#FBBF24" font-family="monospace" font-weight="bold">S</text>
<text x="58.5" y="59" font-size="3.5" fill="#FBBF24" font-family="monospace" font-weight="bold">S</text>
<!-- magnetic field arcs between poles -->
<path d="M43,60 Q50,68 57,60" fill="none" stroke="#F97316" stroke-width="0.8" opacity="0.6" filter="url(#cro-glow)"/>
<path d="M43,63 Q50,73 57,63" fill="none" stroke="#F97316" stroke-width="0.5" opacity="0.35"/>
<!-- eyes: sharp, predatory -->
<path d="M37,38 L44,38 L42,41 L37,41 Z" fill="#0A0400" stroke="#F97316" stroke-width="0.7"/>
<path d="M56,38 L63,38 L63,41 L58,41 Z" fill="#0A0400" stroke="#F97316" stroke-width="0.7"/>
<rect x="38" y="38.5" width="3.5" height="2" rx="0.5" fill="#F97316" opacity="0.8"/>
<rect x="57.5" y="38.5" width="3.5" height="2" rx="0.5" fill="#F97316" opacity="0.8"/>
<!-- confident smirk -->
<path d="M44,66 Q52,71 58,67" stroke="#F97316" stroke-width="1.4" fill="none" stroke-linecap="round"/>
<!-- body -->
<path d="M32,75 L28,91 L50,88 L72,91 L68,75 Z" fill="#1A0800" stroke="#F97316" stroke-width="1"/>
<ellipse cx="50" cy="96" rx="22" ry="3" fill="rgba(249,115,22,0.18)"/>
`),

// ─────────────────────────────────────────────────────────────────
// CHRO — 3 spikes, heart with crystal nodes in hex face,
//         pink accent, warm and human
// ─────────────────────────────────────────────────────────────────
"CHRO": svg(`
<defs>
  <radialGradient id="chro-heart" cx="50%" cy="35%" r="60%"><stop offset="0%" stop-color="#F9A8D4"/><stop offset="100%" stop-color="#BE185D"/></radialGradient>
  <radialGradient id="chro-eye" cx="40%" cy="35%" r="55%"><stop offset="0%" stop-color="#FDF2F8"/><stop offset="100%" stop-color="#EC4899"/></radialGradient>
  <filter id="chro-glow"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- 3 spikes: welcoming, rounded tips -->
<polygon points="35,37 40,37 37.5,14" fill="#FFD700" opacity="0.9"/>
<polygon points="47,36 53,36 50,10"   fill="#EC4899" opacity="0.95"/>
<polygon points="60,37 65,37 62.5,14" fill="#FFD700" opacity="0.9"/>
<!-- hex head -->
<path d="M50,34 L68,44 L68,66 L50,76 L32,66 L32,44 Z" fill="#1A0412" stroke="#EC4899" stroke-width="2"/>
<rect x="32" y="34" width="36" height="5" rx="1" fill="#EC4899" opacity="0.8"/>
<!-- heart shape in hex face -->
<path d="M50,62 C50,62 37,54 37,47 C37,42 41,40 44,40 C46,40 48.5,41.5 50,43.5 C51.5,41.5 54,40 56,40 C59,40 63,42 63,47 C63,54 50,62 50,62Z" fill="url(#chro-heart)" filter="url(#chro-glow)"/>
<!-- crystal nodes on heart outline -->
<circle cx="44" cy="40.5" r="1.8" fill="#F9A8D4" stroke="#EC4899" stroke-width="0.8"/>
<circle cx="56" cy="40.5" r="1.8" fill="#F9A8D4" stroke="#EC4899" stroke-width="0.8"/>
<circle cx="37" cy="50" r="1.5" fill="#F9A8D4" stroke="#EC4899" stroke-width="0.7"/>
<circle cx="63" cy="50" r="1.5" fill="#F9A8D4" stroke="#EC4899" stroke-width="0.7"/>
<circle cx="50" cy="62" r="1.8" fill="#F9A8D4" stroke="#EC4899" stroke-width="0.8"/>
<!-- connecting lines between crystal nodes -->
<line x1="44" y1="40.5" x2="37" y2="50" stroke="#EC4899" stroke-width="0.6" opacity="0.5"/>
<line x1="56" y1="40.5" x2="63" y2="50" stroke="#EC4899" stroke-width="0.6" opacity="0.5"/>
<line x1="37" y1="50" x2="50" y2="62" stroke="#EC4899" stroke-width="0.6" opacity="0.5"/>
<line x1="63" y1="50" x2="50" y2="62" stroke="#EC4899" stroke-width="0.6" opacity="0.5"/>
<!-- heart highlight -->
<path d="M45,44 Q50,42 55,44" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
<!-- warm eyes -->
<circle cx="41" cy="38.5" r="3.5" fill="#0A0210" stroke="#EC4899" stroke-width="0.8"/>
<circle cx="59" cy="38.5" r="3.5" fill="#0A0210" stroke="#EC4899" stroke-width="0.8"/>
<circle cx="41" cy="38.5" r="1.8" fill="url(#chro-eye)"/>
<circle cx="59" cy="38.5" r="1.8" fill="url(#chro-eye)"/>
<!-- sparkle in eyes -->
<circle cx="40.2" cy="37.7" r="0.6" fill="white" opacity="0.9"/>
<circle cx="58.2" cy="37.7" r="0.6" fill="white" opacity="0.9"/>
<circle cx="42" cy="39.5" r="0.3" fill="white" opacity="0.5"/>
<circle cx="60" cy="39.5" r="0.3" fill="white" opacity="0.5"/>
<!-- warm genuine smile -->
<path d="M43,66 Q50,71 57,66" stroke="#EC4899" stroke-width="1.6" fill="none" stroke-linecap="round"/>
<path d="M44,67 Q50,72 56,67" stroke="#F9A8D4" stroke-width="0.6" fill="none" stroke-linecap="round" opacity="0.5"/>
<!-- body -->
<path d="M32,75 L27,91 L50,88 L73,91 L68,75 Z" fill="#1A0412" stroke="#EC4899" stroke-width="1"/>
<ellipse cx="50" cy="96" rx="22" ry="3" fill="rgba(236,72,153,0.18)"/>
`),

// ─────────────────────────────────────────────────────────────────
// CISO — 4 dark spikes (menacing), red glowing visor slit eyes,
//         lock symbol on hex face, dark and imposing
// ─────────────────────────────────────────────────────────────────
"CISO": svg(`
<defs>
  <linearGradient id="ciso-visor" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#7F1D1D"/><stop offset="30%" stop-color="#EF4444"/><stop offset="50%" stop-color="#FCA5A5"/><stop offset="70%" stop-color="#EF4444"/><stop offset="100%" stop-color="#7F1D1D"/></linearGradient>
  <radialGradient id="ciso-dark" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#1A0000"/><stop offset="100%" stop-color="#050000"/></radialGradient>
  <filter id="ciso-glow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="ciso-visor-blur"><feGaussianBlur stdDeviation="0.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- 4 dark, menacing spikes with jagged edges -->
<polygon points="29,38 34,38 31.5,10" fill="#4B0000" opacity="0.95"/>
<polygon points="29,38 34,38 31.5,10 30,18 33,22" fill="#6B0000" opacity="0.7"/>
<polygon points="41,37 46,37 43.5,16" fill="#4B0000" opacity="0.9"/>
<polygon points="54,37 59,37 56.5,16" fill="#4B0000" opacity="0.9"/>
<polygon points="66,38 71,38 68.5,10" fill="#4B0000" opacity="0.95"/>
<polygon points="66,38 71,38 68.5,10 67,18 70,22" fill="#6B0000" opacity="0.7"/>
<!-- hex head: very dark -->
<path d="M50,34 L68,44 L68,66 L50,76 L32,66 L32,44 Z" fill="url(#ciso-dark)" stroke="#EF4444" stroke-width="1.5"/>
<rect x="32" y="34" width="36" height="4" rx="0" fill="#3B0000" opacity="0.9"/>
<!-- red visor slit INSTEAD of normal eyes -->
<rect x="33" y="48" width="34" height="5" rx="1" fill="#0A0000"/>
<rect x="33" y="48" width="34" height="5" rx="1" fill="url(#ciso-visor)" filter="url(#ciso-visor-blur)"/>
<!-- visor edge glare -->
<line x1="33" y1="48.5" x2="67" y2="48.5" stroke="rgba(255,200,200,0.3)" stroke-width="0.5"/>
<!-- lock symbol in hex face lower area -->
<!-- lock shackle (U-shape) -->
<path d="M44,60 L44,56 Q44,52 50,52 Q56,52 56,56 L56,60" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"/>
<!-- lock body -->
<rect x="41.5" y="60" width="17" height="12" rx="2" fill="#1A0000" stroke="#EF4444" stroke-width="1.4"/>
<!-- keyhole -->
<circle cx="50" cy="65.5" r="2.2" fill="#EF4444" opacity="0.8"/>
<rect x="49" y="65.5" width="2" height="4" rx="0.5" fill="#EF4444" opacity="0.8"/>
<!-- warning: hex face background -->
<line x1="33" y1="55" x2="67" y2="55" stroke="#3B0000" stroke-width="0.5" opacity="0.5"/>
<!-- body: armored -->
<path d="M32,75 L26,91 L50,87 L74,91 L68,75 Z" fill="url(#ciso-dark)" stroke="#EF4444" stroke-width="1.2"/>
<!-- armor plating lines -->
<line x1="32" y1="79" x2="50" y2="79" stroke="#3B0000" stroke-width="1" opacity="0.8"/>
<line x1="50" y1="79" x2="68" y2="79" stroke="#3B0000" stroke-width="1" opacity="0.8"/>
<polygon points="50,75 46,79 50,83 54,79" fill="#EF4444" opacity="0.2"/>
<ellipse cx="50" cy="96" rx="22" ry="3" fill="rgba(239,68,68,0.2)"/>
`),

// ─────────────────────────────────────────────────────────────────
// CLO — 3 spikes, balance scale in hex face,
//        yellow accent, book at hex base
// ─────────────────────────────────────────────────────────────────
"CLO": svg(`
<defs>
  <radialGradient id="clo-eye" cx="40%" cy="35%" r="55%"><stop offset="0%" stop-color="#FEF08A"/><stop offset="100%" stop-color="#A16207"/></radialGradient>
  <filter id="clo-glow"><feGaussianBlur stdDeviation="0.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- 3 stately spikes -->
<polygon points="35,37 40,37 37.5,15" fill="#FFD700" opacity="0.9"/>
<polygon points="47,36 53,36 50,10"   fill="#EAB308" opacity="0.95"/>
<polygon points="60,37 65,37 62.5,15" fill="#FFD700" opacity="0.9"/>
<!-- hex head -->
<path d="M50,34 L68,44 L68,66 L50,76 L32,66 L32,44 Z" fill="#1A1400" stroke="#EAB308" stroke-width="2"/>
<rect x="32" y="34" width="36" height="5" rx="1" fill="#EAB308" opacity="0.8"/>
<!-- balance scale in hex face -->
<!-- scale pole/fulcrum -->
<line x1="50" y1="39" x2="50" y2="65" stroke="#EAB308" stroke-width="1.2"/>
<!-- scale beam -->
<line x1="36" y1="48" x2="64" y2="48" stroke="#EAB308" stroke-width="1"/>
<!-- left pan (higher - empty) -->
<line x1="36" y1="48" x2="36" y2="54" stroke="#EAB308" stroke-width="0.8"/>
<line x1="36" y1="48" x2="34" y2="52" stroke="#EAB308" stroke-width="0.6"/>
<line x1="36" y1="48" x2="38" y2="52" stroke="#EAB308" stroke-width="0.6"/>
<path d="M32,54 Q36,56 40,54" fill="none" stroke="#EAB308" stroke-width="0.9"/>
<!-- right pan (lower - justice) -->
<line x1="64" y1="48" x2="64" y2="57" stroke="#EAB308" stroke-width="0.8"/>
<line x1="64" y1="48" x2="62" y2="55" stroke="#EAB308" stroke-width="0.6"/>
<line x1="64" y1="48" x2="66" y2="55" stroke="#EAB308" stroke-width="0.6"/>
<path d="M60,57 Q64,59 68,57" fill="none" stroke="#EAB308" stroke-width="0.9"/>
<!-- small law symbol at fulcrum -->
<circle cx="50" cy="48" r="1.5" fill="#EAB308"/>
<!-- base of scale -->
<line x1="46" y1="65" x2="54" y2="65" stroke="#EAB308" stroke-width="1.2"/>
<line x1="48" y1="63" x2="52" y2="63" stroke="#EAB308" stroke-width="0.8"/>
<!-- eyes: wise, measured -->
<circle cx="40" cy="40" r="3.2" fill="#0A0900" stroke="#EAB308" stroke-width="0.8"/>
<circle cx="59" cy="40" r="3.2" fill="#0A0900" stroke="#EAB308" stroke-width="0.8"/>
<circle cx="40" cy="40" r="1.5" fill="url(#clo-eye)"/>
<circle cx="59" cy="40" r="1.5" fill="url(#clo-eye)"/>
<circle cx="39.2" cy="39.2" r="0.5" fill="white" opacity="0.8"/>
<circle cx="58.2" cy="39.2" r="0.5" fill="white" opacity="0.8"/>
<!-- measured, careful mouth -->
<path d="M44,67 Q50,69 56,67" stroke="#EAB308" stroke-width="1.3" fill="none" stroke-linecap="round"/>
<!-- book at hex base (body) -->
<path d="M32,75 L27,91 L50,88 L73,91 L68,75 Z" fill="#1A1400" stroke="#EAB308" stroke-width="1"/>
<!-- book shape on body -->
<rect x="40" y="79" width="20" height="7" rx="1" fill="#1A1400" stroke="#EAB308" stroke-width="0.8"/>
<line x1="50" y1="79" x2="50" y2="86" stroke="#EAB308" stroke-width="0.6"/>
<line x1="42" y1="81" x2="48" y2="81" stroke="#EAB308" stroke-width="0.4" opacity="0.6"/>
<line x1="42" y1="83" x2="48" y2="83" stroke="#EAB308" stroke-width="0.4" opacity="0.6"/>
<line x1="52" y1="81" x2="58" y2="81" stroke="#EAB308" stroke-width="0.4" opacity="0.6"/>
<line x1="52" y1="83" x2="58" y2="83" stroke="#EAB308" stroke-width="0.4" opacity="0.6"/>
<ellipse cx="50" cy="96" rx="22" ry="3" fill="rgba(234,179,8,0.15)"/>
`),

// ─────────────────────────────────────────────────────────────────
// CAIO — 4 spikes, neural network node cluster in hex face,
//         green (#00FF88) accent, connected circles
// ─────────────────────────────────────────────────────────────────
"CAIO": svg(`
<defs>
  <radialGradient id="caio-node" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#00FF88"/><stop offset="100%" stop-color="#006633"/></radialGradient>
  <radialGradient id="caio-eye" cx="40%" cy="35%" r="55%"><stop offset="0%" stop-color="#6EE7B7"/><stop offset="100%" stop-color="#00FF88"/></radialGradient>
  <filter id="caio-glow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- 4 spikes: tech-forward -->
<polygon points="29,37 34,37 31.5,12" fill="#FFD700" opacity="0.88"/>
<polygon points="41,36 46,36 43.5,18" fill="#00FF88" opacity="0.9"/>
<polygon points="54,36 59,36 56.5,18" fill="#00FF88" opacity="0.9"/>
<polygon points="66,37 71,37 68.5,12" fill="#FFD700" opacity="0.88"/>
<!-- hex head -->
<path d="M50,34 L68,44 L68,66 L50,76 L32,66 L32,44 Z" fill="#001A0D" stroke="#00FF88" stroke-width="2"/>
<rect x="32" y="34" width="36" height="5" rx="1" fill="#00FF88" opacity="0.75"/>
<!-- neural network node cluster in hex face -->
<!-- nodes: central + 7 satellites -->
<circle cx="50" cy="53" r="3.5" fill="url(#caio-node)" filter="url(#caio-glow)"/>
<circle cx="40" cy="45" r="2.2" fill="url(#caio-node)" opacity="0.9"/>
<circle cx="60" cy="45" r="2.2" fill="url(#caio-node)" opacity="0.9"/>
<circle cx="36" cy="55" r="1.8" fill="url(#caio-node)" opacity="0.8"/>
<circle cx="64" cy="55" r="1.8" fill="url(#caio-node)" opacity="0.8"/>
<circle cx="43" cy="63" r="2" fill="url(#caio-node)" opacity="0.85"/>
<circle cx="57" cy="63" r="2" fill="url(#caio-node)" opacity="0.85"/>
<circle cx="50" cy="40" r="1.8" fill="url(#caio-node)" opacity="0.8"/>
<!-- neural connections (edges) -->
<line x1="50" y1="53" x2="40" y2="45" stroke="#00FF88" stroke-width="0.8" opacity="0.6"/>
<line x1="50" y1="53" x2="60" y2="45" stroke="#00FF88" stroke-width="0.8" opacity="0.6"/>
<line x1="50" y1="53" x2="36" y2="55" stroke="#00FF88" stroke-width="0.7" opacity="0.5"/>
<line x1="50" y1="53" x2="64" y2="55" stroke="#00FF88" stroke-width="0.7" opacity="0.5"/>
<line x1="50" y1="53" x2="43" y2="63" stroke="#00FF88" stroke-width="0.7" opacity="0.55"/>
<line x1="50" y1="53" x2="57" y2="63" stroke="#00FF88" stroke-width="0.7" opacity="0.55"/>
<line x1="50" y1="53" x2="50" y2="40" stroke="#00FF88" stroke-width="0.7" opacity="0.5"/>
<line x1="40" y1="45" x2="50" y2="40" stroke="#00FF88" stroke-width="0.5" opacity="0.4"/>
<line x1="60" y1="45" x2="50" y2="40" stroke="#00FF88" stroke-width="0.5" opacity="0.4"/>
<line x1="40" y1="45" x2="36" y2="55" stroke="#00FF88" stroke-width="0.5" opacity="0.35"/>
<line x1="60" y1="45" x2="64" y2="55" stroke="#00FF88" stroke-width="0.5" opacity="0.35"/>
<line x1="36" y1="55" x2="43" y2="63" stroke="#00FF88" stroke-width="0.5" opacity="0.35"/>
<line x1="64" y1="55" x2="57" y2="63" stroke="#00FF88" stroke-width="0.5" opacity="0.35"/>
<!-- eyes above the neural net -->
<circle cx="40" cy="38" r="3" fill="#000D06" stroke="#00FF88" stroke-width="0.8"/>
<circle cx="60" cy="38" r="3" fill="#000D06" stroke="#00FF88" stroke-width="0.8"/>
<circle cx="40" cy="38" r="1.4" fill="url(#caio-eye)"/>
<circle cx="60" cy="38" r="1.4" fill="url(#caio-eye)"/>
<circle cx="39.3" cy="37.3" r="0.5" fill="white" opacity="0.8"/>
<circle cx="59.3" cy="37.3" r="0.5" fill="white" opacity="0.8"/>
<!-- processing expression -->
<path d="M44,67 Q50,70 56,67" stroke="#00FF88" stroke-width="1.3" fill="none" stroke-linecap="round"/>
<!-- body -->
<path d="M32,75 L27,91 L50,88 L73,91 L68,75 Z" fill="#001A0D" stroke="#00FF88" stroke-width="1"/>
<ellipse cx="50" cy="96" rx="22" ry="3" fill="rgba(0,255,136,0.15)"/>
`),

// ─────────────────────────────────────────────────────────────────
// CSA — 5 large spikes, 24 tiny orbiting dots around hex,
//        cosmic conductor vibe, all colors in spectrum
// ─────────────────────────────────────────────────────────────────
"CSA": svg(`
<defs>
  <radialGradient id="csa-core" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="30%" stop-color="#A78BFA"/><stop offset="100%" stop-color="#1E1B4B"/></radialGradient>
  <radialGradient id="csa-bg" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#1E1B4B"/><stop offset="100%" stop-color="#030108"/></radialGradient>
  <filter id="csa-glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="csa-glow2"><feGaussianBlur stdDeviation="1" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- 5 large spikes with spectrum colors -->
<polygon points="24,38 29,38 26.5,6" fill="#FFD700" opacity="1" filter="url(#csa-glow2)"/>
<polygon points="36,37 41,37 38.5,14" fill="#FF6B35" opacity="0.95"/>
<polygon points="47.5,36 52.5,36 50,4" fill="#FFFFFF" opacity="1" filter="url(#csa-glow)"/>
<polygon points="59,37 64,37 61.5,14" fill="#00FF88" opacity="0.95"/>
<polygon points="71,38 76,38 73.5,6" fill="#00D9FF" opacity="1" filter="url(#csa-glow2)"/>
<!-- spectrum tips -->
<circle cx="26.5" cy="6"  r="2" fill="#FFD700" filter="url(#csa-glow)"/>
<circle cx="50"   cy="4"  r="2.5" fill="white" filter="url(#csa-glow)"/>
<circle cx="73.5" cy="6"  r="2" fill="#00D9FF" filter="url(#csa-glow)"/>
<!-- hex head with cosmic background -->
<path d="M50,34 L68,44 L68,66 L50,76 L32,66 L32,44 Z" fill="url(#csa-bg)" stroke="url(#csa-core)" stroke-width="2"/>
<rect x="32" y="34" width="36" height="5" rx="1" fill="rgba(255,255,255,0.8)"/>
<!-- 24 tiny orbiting dots arranged in 3 rings around hex -->
<!-- ring 1: 8 dots close -->
<circle cx="50"    cy="30.5" r="1.2" fill="#FFD700"/>
<circle cx="56.8"  cy="31.8" r="1"   fill="#FF6B35"/>
<circle cx="61.5"  cy="36.5" r="1"   fill="#EC4899"/>
<circle cx="63.5"  cy="43.2" r="1.2" fill="#A855F7" filter="url(#csa-glow2)"/>
<circle cx="61.5"  cy="50"   r="1"   fill="#6366F1"/>
<circle cx="56.8"  cy="55.8" r="1"   fill="#00D9FF"/>
<circle cx="50"    cy="58.5" r="1.2" fill="#00FF88"/>
<circle cx="43.2"  cy="55.8" r="1"   fill="#84CC16"/>
<circle cx="38.5"  cy="50"   r="1"   fill="#EAB308"/>
<circle cx="36.5"  cy="43.2" r="1.2" fill="#F97316" filter="url(#csa-glow2)"/>
<circle cx="38.5"  cy="36.5" r="1"   fill="#EF4444"/>
<circle cx="43.2"  cy="31.8" r="1"   fill="#FFD700"/>
<!-- ring 2: 8 dots farther -->
<circle cx="50"    cy="23"   r="0.9" fill="#00D9FF" opacity="0.8"/>
<circle cx="61"    cy="26"   r="0.8" fill="#FF6B35" opacity="0.7"/>
<circle cx="68"    cy="34"   r="0.9" fill="#EC4899" opacity="0.8"/>
<circle cx="70.5"  cy="44"   r="0.8" fill="#A855F7" opacity="0.7"/>
<circle cx="69"    cy="55"   r="0.9" fill="#00FF88" opacity="0.8"/>
<circle cx="62"    cy="63"   r="0.8" fill="#00D9FF" opacity="0.7"/>
<circle cx="50"    cy="67"   r="0.9" fill="#FFD700" opacity="0.8"/>
<circle cx="38"    cy="63"   r="0.8" fill="#EF4444" opacity="0.7"/>
<circle cx="31"    cy="55"   r="0.9" fill="#F97316" opacity="0.8"/>
<circle cx="29.5"  cy="44"   r="0.8" fill="#A855F7" opacity="0.7"/>
<circle cx="32"    cy="34"   r="0.9" fill="#84CC16" opacity="0.8"/>
<circle cx="39"    cy="26"   r="0.8" fill="#EAB308" opacity="0.7"/>
<!-- central radiant eye (single all-seeing) -->
<circle cx="50" cy="53" r="10" fill="url(#csa-core)" opacity="0.15"/>
<circle cx="50" cy="53" r="7" fill="url(#csa-core)" opacity="0.2"/>
<circle cx="50" cy="53" r="4.5" fill="url(#csa-core)" filter="url(#csa-glow)"/>
<circle cx="50" cy="53" r="2" fill="white"/>
<!-- radiant lines from center -->
<line x1="50" y1="44" x2="50" y2="46" stroke="white" stroke-width="0.6" opacity="0.7"/>
<line x1="50" y1="60" x2="50" y2="62" stroke="white" stroke-width="0.6" opacity="0.7"/>
<line x1="41" y1="53" x2="43" y2="53" stroke="white" stroke-width="0.6" opacity="0.7"/>
<line x1="57" y1="53" x2="59" y2="53" stroke="white" stroke-width="0.6" opacity="0.7"/>
<line x1="43.6" y1="46.6" x2="44.9" y2="47.9" stroke="white" stroke-width="0.5" opacity="0.6"/>
<line x1="55.1" y1="58.1" x2="56.4" y2="59.4" stroke="white" stroke-width="0.5" opacity="0.6"/>
<line x1="55.1" y1="46.6" x2="56.4" y2="47.9" stroke="white" stroke-width="0.5" opacity="0.6"/>
<line x1="43.6" y1="58.1" x2="44.9" y2="59.4" stroke="white" stroke-width="0.5" opacity="0.6"/>
<!-- two small flanking eyes above prism -->
<circle cx="40" cy="38" r="3" fill="#0A0A1A" stroke="white" stroke-width="0.8"/>
<circle cx="60" cy="38" r="3" fill="#0A0A1A" stroke="white" stroke-width="0.8"/>
<circle cx="40" cy="38" r="1.5" fill="white" filter="url(#csa-glow2)"/>
<circle cx="60" cy="38" r="1.5" fill="white" filter="url(#csa-glow2)"/>
<!-- omniscient expression -->
<path d="M44,66 Q50,69 56,66" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<!-- body: cosmic conductor with all colors -->
<path d="M32,75 L26,91 L50,88 L74,91 L68,75 Z" fill="url(#csa-bg)" stroke="white" stroke-width="1.2"/>
<!-- spectrum line on body -->
<line x1="30" y1="82" x2="36" y2="82" stroke="#FFD700" stroke-width="1.2"/>
<line x1="37" y1="82" x2="43" y2="82" stroke="#FF6B35" stroke-width="1.2"/>
<line x1="44" y1="82" x2="50" y2="82" stroke="#EC4899" stroke-width="1.2"/>
<line x1="51" y1="82" x2="57" y2="82" stroke="#00D9FF" stroke-width="1.2"/>
<line x1="58" y1="82" x2="64" y2="82" stroke="#00FF88" stroke-width="1.2"/>
<line x1="65" y1="82" x2="70" y2="82" stroke="#A855F7" stroke-width="1.2"/>
<ellipse cx="50" cy="96" rx="24" ry="3.5" fill="rgba(167,139,250,0.2)"/>
`),

// ═══════════════════════════════════════════════════════════════════
//  GOVERNANCE AGENTS — Hexagonal gate + unique symbol per agent
// ═══════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────
// ARB-AGENT — Hexagonal gate, "ARB" text + scales in center lock
// ─────────────────────────────────────────────────────────────────
"ARB-AGENT": svg(`
<defs>
  <linearGradient id="arb-gate" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#818CF8"/><stop offset="100%" stop-color="#3730A3"/></linearGradient>
  <filter id="arb-glow"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- hexagonal portal frame -->
<path d="M50,10 L75,25 L75,55 L50,70 L25,55 L25,25 Z" fill="#0A0B1E" stroke="#6366F1" stroke-width="2.5"/>
<!-- outer portal glow ring -->
<path d="M50,7 L78,23 L78,57 L50,73 L22,57 L22,23 Z" fill="none" stroke="#6366F1" stroke-width="0.8" opacity="0.3"/>
<!-- gate bars (4 vertical bars) -->
<rect x="32" y="25" width="5" height="30" rx="1.5" fill="url(#arb-gate)" opacity="0.9"/>
<rect x="41" y="25" width="5" height="30" rx="1.5" fill="url(#arb-gate)" opacity="0.9"/>
<rect x="54" y="25" width="5" height="30" rx="1.5" fill="url(#arb-gate)" opacity="0.9"/>
<rect x="63" y="25" width="5" height="30" rx="1.5" fill="url(#arb-gate)" opacity="0.9"/>
<!-- horizontal bar across gate top -->
<rect x="30" y="24" width="40" height="4" rx="1" fill="#6366F1" opacity="0.8"/>
<!-- horizontal bar across gate bottom -->
<rect x="30" y="52" width="40" height="4" rx="1" fill="#6366F1" opacity="0.8"/>
<!-- center lock/medallion -->
<circle cx="50" cy="40" r="9" fill="#0A0B1E" stroke="#6366F1" stroke-width="1.5" filter="url(#arb-glow)"/>
<!-- ARB text in lock -->
<text x="50" y="38.5" font-size="4.5" fill="#818CF8" font-family="monospace" font-weight="bold" text-anchor="middle">ARB</text>
<!-- scales symbol in lock -->
<line x1="50" y1="40" x2="50" y2="47" stroke="#6366F1" stroke-width="0.8"/>
<line x1="44" y1="42" x2="56" y2="42" stroke="#6366F1" stroke-width="0.8"/>
<line x1="44" y1="42" x2="44" y2="46" stroke="#6366F1" stroke-width="0.6"/>
<line x1="56" y1="42" x2="56" y2="44" stroke="#6366F1" stroke-width="0.6"/>
<path d="M41.5,46 Q44,47.5 46.5,46" fill="none" stroke="#6366F1" stroke-width="0.7"/>
<path d="M53.5,44 Q56,45.5 58.5,44" fill="none" stroke="#6366F1" stroke-width="0.7"/>
<!-- top label -->
<text x="50" y="87" font-size="5" fill="#6366F1" font-family="monospace" font-weight="bold" text-anchor="middle">ARBITRATION</text>
<!-- footer glow -->
<ellipse cx="50" cy="78" rx="20" ry="2.5" fill="rgba(99,102,241,0.2)"/>
`),

// ─────────────────────────────────────────────────────────────────
// SEC-REVIEW — Hexagonal gate, red accent bars, magnifying glass
// ─────────────────────────────────────────────────────────────────
"SEC-REVIEW": svg(`
<defs>
  <linearGradient id="sec-gate" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#F87171"/><stop offset="100%" stop-color="#991B1B"/></linearGradient>
  <filter id="sec-glow"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- hexagonal portal frame -->
<path d="M50,10 L75,25 L75,55 L50,70 L25,55 L25,25 Z" fill="#0A0000" stroke="#EF4444" stroke-width="2.5"/>
<path d="M50,7 L78,23 L78,57 L50,73 L22,57 L22,23 Z" fill="none" stroke="#EF4444" stroke-width="0.8" opacity="0.25"/>
<!-- gate bars: red accent -->
<rect x="32" y="25" width="5" height="30" rx="1.5" fill="url(#sec-gate)" opacity="0.9"/>
<rect x="41" y="25" width="5" height="30" rx="1.5" fill="url(#sec-gate)" opacity="0.9"/>
<rect x="54" y="25" width="5" height="30" rx="1.5" fill="url(#sec-gate)" opacity="0.9"/>
<rect x="63" y="25" width="5" height="30" rx="1.5" fill="url(#sec-gate)" opacity="0.9"/>
<rect x="30" y="24" width="40" height="4" rx="1" fill="#EF4444" opacity="0.8"/>
<rect x="30" y="52" width="40" height="4" rx="1" fill="#EF4444" opacity="0.8"/>
<!-- center lock: magnifying glass -->
<circle cx="50" cy="40" r="9" fill="#0A0000" stroke="#EF4444" stroke-width="1.5" filter="url(#sec-glow)"/>
<!-- magnifying glass circle -->
<circle cx="48" cy="38" r="5" fill="none" stroke="#EF4444" stroke-width="1.5"/>
<circle cx="48" cy="38" r="3" fill="#1A0000" stroke="#F87171" stroke-width="0.6" opacity="0.5"/>
<!-- lens cross-hairs -->
<line x1="48" y1="35" x2="48" y2="41" stroke="#EF4444" stroke-width="0.5" opacity="0.6"/>
<line x1="45" y1="38" x2="51" y2="38" stroke="#EF4444" stroke-width="0.5" opacity="0.6"/>
<!-- handle -->
<line x1="51.5" y1="42" x2="56" y2="47" stroke="#EF4444" stroke-width="2" stroke-linecap="round"/>
<!-- alert triangle on glass -->
<polygon points="48,35.5 46.5,38.5 49.5,38.5" fill="#F87171" opacity="0.9"/>
<!-- label -->
<text x="50" y="87" font-size="4.5" fill="#EF4444" font-family="monospace" font-weight="bold" text-anchor="middle">SEC-REVIEW</text>
<ellipse cx="50" cy="78" rx="20" ry="2.5" fill="rgba(239,68,68,0.2)"/>
`),

// ─────────────────────────────────────────────────────────────────
// LEGAL-REVIEW — Hexagonal gate, yellow accent bars, gavel
// ─────────────────────────────────────────────────────────────────
"LEGAL-REVIEW": svg(`
<defs>
  <linearGradient id="legal-gate" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#FDE047"/><stop offset="100%" stop-color="#92400E"/></linearGradient>
  <filter id="legal-glow"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- hexagonal portal frame -->
<path d="M50,10 L75,25 L75,55 L50,70 L25,55 L25,25 Z" fill="#0D0A00" stroke="#EAB308" stroke-width="2.5"/>
<path d="M50,7 L78,23 L78,57 L50,73 L22,57 L22,23 Z" fill="none" stroke="#EAB308" stroke-width="0.8" opacity="0.25"/>
<!-- gate bars: yellow accent -->
<rect x="32" y="25" width="5" height="30" rx="1.5" fill="url(#legal-gate)" opacity="0.9"/>
<rect x="41" y="25" width="5" height="30" rx="1.5" fill="url(#legal-gate)" opacity="0.9"/>
<rect x="54" y="25" width="5" height="30" rx="1.5" fill="url(#legal-gate)" opacity="0.9"/>
<rect x="63" y="25" width="5" height="30" rx="1.5" fill="url(#legal-gate)" opacity="0.9"/>
<rect x="30" y="24" width="40" height="4" rx="1" fill="#EAB308" opacity="0.8"/>
<rect x="30" y="52" width="40" height="4" rx="1" fill="#EAB308" opacity="0.8"/>
<!-- center lock: gavel -->
<circle cx="50" cy="40" r="9" fill="#0D0A00" stroke="#EAB308" stroke-width="1.5" filter="url(#legal-glow)"/>
<!-- gavel head -->
<rect x="43" y="34" width="10" height="5" rx="1.5" fill="#EAB308" transform="rotate(-35 48 36.5)"/>
<!-- gavel strike line -->
<line x1="49" y1="38" x2="54" y2="44" stroke="#EAB308" stroke-width="1.8" stroke-linecap="round"/>
<!-- sound lines from gavel strike -->
<line x1="50.5" y1="44" x2="52.5" y2="46.5" stroke="#FDE047" stroke-width="0.8" opacity="0.7"/>
<line x1="53" y1="42.5" x2="56" y2="44" stroke="#FDE047" stroke-width="0.8" opacity="0.7"/>
<!-- podium -->
<rect x="43" y="46" width="14" height="2" rx="0.5" fill="#EAB308" opacity="0.7"/>
<!-- label -->
<text x="50" y="87" font-size="4" fill="#EAB308" font-family="monospace" font-weight="bold" text-anchor="middle">LEGAL-REVIEW</text>
<ellipse cx="50" cy="78" rx="20" ry="2.5" fill="rgba(234,179,8,0.2)"/>
`),

// ─────────────────────────────────────────────────────────────────
// QA-GATE — Hexagonal gate, green accent bars, checkmark
// ─────────────────────────────────────────────────────────────────
"QA-GATE": svg(`
<defs>
  <linearGradient id="qa-gate" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#4ADE80"/><stop offset="100%" stop-color="#14532D"/></linearGradient>
  <filter id="qa-glow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- hexagonal portal frame -->
<path d="M50,10 L75,25 L75,55 L50,70 L25,55 L25,25 Z" fill="#001A06" stroke="#22C55E" stroke-width="2.5"/>
<path d="M50,7 L78,23 L78,57 L50,73 L22,57 L22,23 Z" fill="none" stroke="#22C55E" stroke-width="0.8" opacity="0.25"/>
<!-- gate bars: green accent -->
<rect x="32" y="25" width="5" height="30" rx="1.5" fill="url(#qa-gate)" opacity="0.9"/>
<rect x="41" y="25" width="5" height="30" rx="1.5" fill="url(#qa-gate)" opacity="0.9"/>
<rect x="54" y="25" width="5" height="30" rx="1.5" fill="url(#qa-gate)" opacity="0.9"/>
<rect x="63" y="25" width="5" height="30" rx="1.5" fill="url(#qa-gate)" opacity="0.9"/>
<rect x="30" y="24" width="40" height="4" rx="1" fill="#22C55E" opacity="0.8"/>
<rect x="30" y="52" width="40" height="4" rx="1" fill="#22C55E" opacity="0.8"/>
<!-- center lock: checkmark in circle -->
<circle cx="50" cy="40" r="9" fill="#001A06" stroke="#22C55E" stroke-width="1.5" filter="url(#qa-glow)"/>
<!-- large checkmark -->
<path d="M43,40 L47.5,45.5 L58,34" fill="none" stroke="#22C55E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#qa-glow)"/>
<!-- secondary thin checkmark for depth -->
<path d="M43,40 L47.5,45.5 L58,34" fill="none" stroke="#4ADE80" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
<!-- label -->
<text x="50" y="87" font-size="5.5" fill="#22C55E" font-family="monospace" font-weight="bold" text-anchor="middle">QA-GATE</text>
<ellipse cx="50" cy="78" rx="20" ry="2.5" fill="rgba(34,197,94,0.2)"/>
`),

// ─────────────────────────────────────────────────────────────────
// REL-APPROVE — Hexagonal gate, cyan bars, rocket/launch symbol
// ─────────────────────────────────────────────────────────────────
"REL-APPROVE": svg(`
<defs>
  <linearGradient id="rel-gate" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#67E8F9"/><stop offset="100%" stop-color="#0E7490"/></linearGradient>
  <radialGradient id="rel-rocket" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#E0F2FE"/><stop offset="100%" stop-color="#0891B2"/></radialGradient>
  <filter id="rel-glow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- hexagonal portal frame -->
<path d="M50,10 L75,25 L75,55 L50,70 L25,55 L25,25 Z" fill="#001418" stroke="#06B6D4" stroke-width="2.5"/>
<path d="M50,7 L78,23 L78,57 L50,73 L22,57 L22,23 Z" fill="none" stroke="#06B6D4" stroke-width="0.8" opacity="0.25"/>
<!-- gate bars: cyan -->
<rect x="32" y="25" width="5" height="30" rx="1.5" fill="url(#rel-gate)" opacity="0.9"/>
<rect x="41" y="25" width="5" height="30" rx="1.5" fill="url(#rel-gate)" opacity="0.9"/>
<rect x="54" y="25" width="5" height="30" rx="1.5" fill="url(#rel-gate)" opacity="0.9"/>
<rect x="63" y="25" width="5" height="30" rx="1.5" fill="url(#rel-gate)" opacity="0.9"/>
<rect x="30" y="24" width="40" height="4" rx="1" fill="#06B6D4" opacity="0.8"/>
<rect x="30" y="52" width="40" height="4" rx="1" fill="#06B6D4" opacity="0.8"/>
<!-- center lock: rocket -->
<circle cx="50" cy="40" r="9" fill="#001418" stroke="#06B6D4" stroke-width="1.5" filter="url(#rel-glow)"/>
<!-- rocket body -->
<path d="M50,31 Q54,33 54,39 L54,44 L50,47 L46,44 L46,39 Q46,33 50,31Z" fill="url(#rel-rocket)"/>
<!-- rocket nose cone -->
<path d="M50,31 Q52,28 50,25 Q48,28 50,31" fill="#E0F2FE"/>
<!-- rocket window -->
<circle cx="50" cy="38" r="2" fill="#001418" stroke="#67E8F9" stroke-width="0.8"/>
<circle cx="50" cy="38" r="1" fill="#67E8F9" opacity="0.6"/>
<!-- rocket fins -->
<polygon points="46,44 43,47 46,46" fill="#06B6D4" opacity="0.8"/>
<polygon points="54,44 57,47 54,46" fill="#06B6D4" opacity="0.8"/>
<!-- launch flame -->
<path d="M48,47 Q50,52 52,47" fill="#FFD700" opacity="0.9" filter="url(#rel-glow)"/>
<path d="M49,47 Q50,50 51,47" fill="#FFF" opacity="0.7"/>
<!-- label -->
<text x="50" y="87" font-size="4" fill="#06B6D4" font-family="monospace" font-weight="bold" text-anchor="middle">REL-APPROVE</text>
<ellipse cx="50" cy="78" rx="20" ry="2.5" fill="rgba(6,182,212,0.2)"/>
`),

// ─────────────────────────────────────────────────────────────────
// CHANGE-MGR — Hexagonal gate, purple bars, infinity/cycle arrows
// ─────────────────────────────────────────────────────────────────
"CHANGE-MGR": svg(`
<defs>
  <linearGradient id="chg-gate" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#C084FC"/><stop offset="100%" stop-color="#581C87"/></linearGradient>
  <filter id="chg-glow"><feGaussianBlur stdDeviation="1.3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- hexagonal portal frame -->
<path d="M50,10 L75,25 L75,55 L50,70 L25,55 L25,25 Z" fill="#0D0018" stroke="#A855F7" stroke-width="2.5"/>
<path d="M50,7 L78,23 L78,57 L50,73 L22,57 L22,23 Z" fill="none" stroke="#A855F7" stroke-width="0.8" opacity="0.25"/>
<!-- gate bars: purple -->
<rect x="32" y="25" width="5" height="30" rx="1.5" fill="url(#chg-gate)" opacity="0.9"/>
<rect x="41" y="25" width="5" height="30" rx="1.5" fill="url(#chg-gate)" opacity="0.9"/>
<rect x="54" y="25" width="5" height="30" rx="1.5" fill="url(#chg-gate)" opacity="0.9"/>
<rect x="63" y="25" width="5" height="30" rx="1.5" fill="url(#chg-gate)" opacity="0.9"/>
<rect x="30" y="24" width="40" height="4" rx="1" fill="#A855F7" opacity="0.8"/>
<rect x="30" y="52" width="40" height="4" rx="1" fill="#A855F7" opacity="0.8"/>
<!-- center lock: cycle arrows (circular refresh/change symbol) -->
<circle cx="50" cy="40" r="9" fill="#0D0018" stroke="#A855F7" stroke-width="1.5" filter="url(#chg-glow)"/>
<!-- circular cycle arrows -->
<!-- upper arc with arrowhead (clockwise top) -->
<path d="M44,37 A7,7 0 0,1 56,37" fill="none" stroke="#A855F7" stroke-width="1.8" stroke-linecap="round"/>
<!-- upper arrowhead -->
<polygon points="56,37 53,34.5 55.5,34" fill="#A855F7"/>
<!-- lower arc with arrowhead (clockwise bottom) -->
<path d="M56,43 A7,7 0 0,1 44,43" fill="none" stroke="#C084FC" stroke-width="1.8" stroke-linecap="round"/>
<!-- lower arrowhead -->
<polygon points="44,43 47,45.5 44.5,46" fill="#C084FC"/>
<!-- center dot -->
<circle cx="50" cy="40" r="1.5" fill="#A855F7" filter="url(#chg-glow)"/>
<!-- small infinity lines beneath -->
<path d="M45,49 Q47.5,47 50,49 Q52.5,51 55,49" fill="none" stroke="#A855F7" stroke-width="0.9" opacity="0.7"/>
<!-- label -->
<text x="50" y="87" font-size="4" fill="#A855F7" font-family="monospace" font-weight="bold" text-anchor="middle">CHANGE-MGR</text>
<ellipse cx="50" cy="78" rx="20" ry="2.5" fill="rgba(168,85,247,0.2)"/>
`),

};

for (const [code, content] of Object.entries(avatars)) {
  writeFileSync(join(OUT, `${code}.svg`), content);
  console.log(`  Written: ${code}.svg`);
}
console.log(`\n✅ Batch 1: ${Object.keys(avatars).length} unique executive+governance avatars written to ${OUT}`);
