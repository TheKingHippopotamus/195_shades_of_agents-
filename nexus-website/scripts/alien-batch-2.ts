import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, "../public/brand/avatars/agents");

const svgs: Record<string, string> = {
  // 1. SEM-FE — Senior Engineering Manager Frontend
  // Wide confident face, electric blue skin, 2 large eyes with CSS color-wheel iris, curved antennae, </> forehead
  "SEM-FE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bg-sem-fe" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0a1a2e"/>
      <stop offset="100%" stop-color="#020810"/>
    </radialGradient>
    <radialGradient id="face-sem-fe" cx="50%" cy="45%" r="52%">
      <stop offset="0%" stop-color="#1565C0"/>
      <stop offset="60%" stop-color="#0D47A1"/>
      <stop offset="100%" stop-color="#082a6e"/>
    </radialGradient>
    <radialGradient id="iris-l-sem-fe" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="15%" stop-color="#FF0080"/>
      <stop offset="30%" stop-color="#FF8C00"/>
      <stop offset="45%" stop-color="#FFE600"/>
      <stop offset="60%" stop-color="#00FF00"/>
      <stop offset="75%" stop-color="#00BFFF"/>
      <stop offset="90%" stop-color="#8000FF"/>
      <stop offset="100%" stop-color="#FF0080"/>
    </radialGradient>
    <radialGradient id="iris-r-sem-fe" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="15%" stop-color="#FF0080"/>
      <stop offset="30%" stop-color="#FF8C00"/>
      <stop offset="45%" stop-color="#FFE600"/>
      <stop offset="60%" stop-color="#00FF00"/>
      <stop offset="75%" stop-color="#00BFFF"/>
      <stop offset="90%" stop-color="#8000FF"/>
      <stop offset="100%" stop-color="#FF0080"/>
    </radialGradient>
    <filter id="glow-sem-fe">
      <feGaussianBlur stdDeviation="1.2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="100" height="100" fill="url(#bg-sem-fe)" rx="12"/>
  <!-- Curved antennae -->
  <path d="M36,22 C34,14 28,10 30,6" stroke="#00BFFF" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <circle cx="30" cy="6" r="2.2" fill="#00BFFF" filter="url(#glow-sem-fe)"/>
  <path d="M64,22 C66,14 72,10 70,6" stroke="#00BFFF" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <circle cx="70" cy="6" r="2.2" fill="#00BFFF" filter="url(#glow-sem-fe)"/>
  <!-- Wide face -->
  <ellipse cx="50" cy="55" rx="38" ry="34" fill="url(#face-sem-fe)" stroke="#1976D2" stroke-width="1.5"/>
  <!-- Brow ridge -->
  <path d="M18,42 Q50,36 82,42" stroke="#0D47A1" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Eye whites -->
  <ellipse cx="33" cy="50" rx="10" ry="9" fill="#e8f4ff" stroke="#0288D1" stroke-width="1.2"/>
  <ellipse cx="67" cy="50" rx="10" ry="9" fill="#e8f4ff" stroke="#0288D1" stroke-width="1.2"/>
  <!-- Color-wheel irises -->
  <circle cx="33" cy="50" r="7.5" fill="url(#iris-l-sem-fe)"/>
  <circle cx="67" cy="50" r="7.5" fill="url(#iris-r-sem-fe)"/>
  <!-- Pupils -->
  <circle cx="33" cy="50" r="2.8" fill="#000a1a"/>
  <circle cx="67" cy="50" r="2.8" fill="#000a1a"/>
  <!-- Eye shine -->
  <circle cx="34.8" cy="48.2" r="1.2" fill="#ffffff" opacity="0.85"/>
  <circle cx="68.8" cy="48.2" r="1.2" fill="#ffffff" opacity="0.85"/>
  <!-- </> forehead marking -->
  <text x="50" y="31" text-anchor="middle" font-family="monospace" font-size="7.5" font-weight="bold" fill="#00BFFF" filter="url(#glow-sem-fe)" opacity="0.9">&lt;/&gt;</text>
  <!-- Nose -->
  <path d="M47,59 Q50,63 53,59" stroke="#0288D1" stroke-width="1" fill="none" stroke-linecap="round"/>
  <!-- Confident wide mouth -->
  <path d="M30,70 Q50,78 70,70" stroke="#0288D1" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Cheek highlights -->
  <ellipse cx="22" cy="60" rx="5" ry="3" fill="#1976D2" opacity="0.4"/>
  <ellipse cx="78" cy="60" rx="5" ry="3" fill="#1976D2" opacity="0.4"/>
  <!-- Ear bumps -->
  <ellipse cx="13" cy="55" rx="4" ry="6" fill="#0D47A1" stroke="#1976D2" stroke-width="1"/>
  <ellipse cx="87" cy="55" rx="4" ry="6" fill="#0D47A1" stroke="#1976D2" stroke-width="1"/>
  <!-- Label -->
  <rect x="22" y="90" width="56" height="8" rx="3" fill="#000a1a" stroke="#00BFFF" stroke-width="0.6"/>
  <text x="50" y="96" text-anchor="middle" font-family="monospace" font-size="4" fill="#00BFFF">SEM-FE</text>
</svg>`,

  // 2. SEM-BE — Senior Engineering Manager Backend
  // Narrow focused face, dark teal skin, narrow eyes with scrolling text iris, { } forehead, server rack cheek marks
  "SEM-BE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bg-sem-be" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#071a18"/>
      <stop offset="100%" stop-color="#020c0b"/>
    </radialGradient>
    <radialGradient id="face-sem-be" cx="50%" cy="45%" r="52%">
      <stop offset="0%" stop-color="#00695C"/>
      <stop offset="60%" stop-color="#004D40"/>
      <stop offset="100%" stop-color="#002820"/>
    </radialGradient>
    <radialGradient id="iris-be" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#00E5FF"/>
      <stop offset="40%" stop-color="#007c91"/>
      <stop offset="100%" stop-color="#003040"/>
    </radialGradient>
    <filter id="glow-sem-be">
      <feGaussianBlur stdDeviation="1" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#bg-sem-be)" rx="12"/>
  <!-- Narrow face -->
  <ellipse cx="50" cy="56" rx="27" ry="35" fill="url(#face-sem-be)" stroke="#00897B" stroke-width="1.5"/>
  <!-- Heavy brow - focused look -->
  <path d="M25,44 Q50,40 75,44" stroke="#002820" stroke-width="4" fill="none" stroke-linecap="round"/>
  <!-- Narrow eyes -->
  <ellipse cx="37" cy="50" rx="8" ry="5" fill="#002820" stroke="#00897B" stroke-width="1"/>
  <ellipse cx="63" cy="50" rx="8" ry="5" fill="#002820" stroke="#00897B" stroke-width="1"/>
  <!-- Scrolling text iris -->
  <ellipse cx="37" cy="50" rx="6.5" ry="4" fill="url(#iris-be)"/>
  <ellipse cx="63" cy="50" rx="6.5" ry="4" fill="url(#iris-be)"/>
  <!-- Text lines in iris (scrolling text effect) -->
  <line x1="31" y1="49" x2="43" y2="49" stroke="#00E5FF" stroke-width="0.5" opacity="0.7"/>
  <line x1="31" y1="51" x2="43" y2="51" stroke="#00E5FF" stroke-width="0.5" opacity="0.5"/>
  <line x1="57" y1="49" x2="69" y2="49" stroke="#00E5FF" stroke-width="0.5" opacity="0.7"/>
  <line x1="57" y1="51" x2="69" y2="51" stroke="#00E5FF" stroke-width="0.5" opacity="0.5"/>
  <!-- Pupils -->
  <ellipse cx="37" cy="50" rx="2" ry="2.5" fill="#000d0c"/>
  <ellipse cx="63" cy="50" rx="2" ry="2.5" fill="#000d0c"/>
  <!-- { } forehead marking -->
  <text x="50" y="33" text-anchor="middle" font-family="monospace" font-size="8" font-weight="bold" fill="#00E5FF" filter="url(#glow-sem-be)" opacity="0.9">&#123; &#125;</text>
  <!-- Server rack marks on cheeks -->
  <rect x="18" y="52" width="8" height="1.5" rx="0.5" fill="#00897B" opacity="0.8"/>
  <rect x="18" y="55" width="8" height="1.5" rx="0.5" fill="#00897B" opacity="0.6"/>
  <rect x="18" y="58" width="8" height="1.5" rx="0.5" fill="#00897B" opacity="0.4"/>
  <rect x="74" y="52" width="8" height="1.5" rx="0.5" fill="#00897B" opacity="0.8"/>
  <rect x="74" y="55" width="8" height="1.5" rx="0.5" fill="#00897B" opacity="0.6"/>
  <rect x="74" y="58" width="8" height="1.5" rx="0.5" fill="#00897B" opacity="0.4"/>
  <!-- Nose bridge -->
  <line x1="50" y1="55" x2="50" y2="60" stroke="#00695C" stroke-width="1.2"/>
  <!-- Thin focused mouth -->
  <path d="M38,68 Q50,72 62,68" stroke="#00695C" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Chin circuit -->
  <path d="M40,76 H50 V80 H60" stroke="#00897B" stroke-width="0.8" fill="none" opacity="0.6"/>
  <circle cx="50" cy="76" r="1" fill="#00E5FF" opacity="0.8"/>
  <!-- Label -->
  <rect x="22" y="90" width="56" height="8" rx="3" fill="#020c0b" stroke="#00E5FF" stroke-width="0.6"/>
  <text x="50" y="96" text-anchor="middle" font-family="monospace" font-size="4" fill="#00E5FF">SEM-BE</text>
</svg>`,

  // 3. EM-FE — Engineering Manager Frontend
  // Rounded face, cobalt blue skin, 3 eyes (2+1 third eye smaller), cyan iris, small antennae with globe nodes
  "EM-FE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bg-em-fe" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0a1535"/>
      <stop offset="100%" stop-color="#020812"/>
    </radialGradient>
    <radialGradient id="face-em-fe" cx="50%" cy="45%" r="52%">
      <stop offset="0%" stop-color="#2962FF"/>
      <stop offset="60%" stop-color="#1A47CC"/>
      <stop offset="100%" stop-color="#0d2a80"/>
    </radialGradient>
    <radialGradient id="iris-em-fe" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#E0F7FF"/>
      <stop offset="50%" stop-color="#00E5FF"/>
      <stop offset="100%" stop-color="#006080"/>
    </radialGradient>
    <filter id="glow-em-fe">
      <feGaussianBlur stdDeviation="1.3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#bg-em-fe)" rx="12"/>
  <!-- Antennae with globe nodes -->
  <line x1="37" y1="22" x2="33" y2="10" stroke="#00E5FF" stroke-width="1.5"/>
  <circle cx="33" cy="10" r="3" fill="none" stroke="#00E5FF" stroke-width="1.2"/>
  <circle cx="33" cy="10" r="1.2" fill="#00E5FF"/>
  <line x1="63" y1="22" x2="67" y2="10" stroke="#00E5FF" stroke-width="1.5"/>
  <circle cx="67" cy="10" r="3" fill="none" stroke="#00E5FF" stroke-width="1.2"/>
  <circle cx="67" cy="10" r="1.2" fill="#00E5FF"/>
  <!-- Rounded face -->
  <ellipse cx="50" cy="56" rx="32" ry="32" fill="url(#face-em-fe)" stroke="#448AFF" stroke-width="1.5"/>
  <!-- Brow -->
  <path d="M24,47 Q35,43 44,47" stroke="#0d2a80" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M56,47 Q65,43 76,47" stroke="#0d2a80" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Two main eyes -->
  <circle cx="36" cy="52" r="9" fill="#0a1f5a" stroke="#448AFF" stroke-width="1.2"/>
  <circle cx="64" cy="52" r="9" fill="#0a1f5a" stroke="#448AFF" stroke-width="1.2"/>
  <circle cx="36" cy="52" r="7" fill="url(#iris-em-fe)"/>
  <circle cx="64" cy="52" r="7" fill="url(#iris-em-fe)"/>
  <circle cx="36" cy="52" r="3" fill="#000a20"/>
  <circle cx="64" cy="52" r="3" fill="#000a20"/>
  <circle cx="37.5" cy="50.5" r="1.3" fill="#ffffff" opacity="0.8"/>
  <circle cx="65.5" cy="50.5" r="1.3" fill="#ffffff" opacity="0.8"/>
  <!-- Third eye (smaller, between and above) -->
  <circle cx="50" cy="38" r="5.5" fill="#0a1f5a" stroke="#00E5FF" stroke-width="1" filter="url(#glow-em-fe)"/>
  <circle cx="50" cy="38" r="4.2" fill="url(#iris-em-fe)"/>
  <circle cx="50" cy="38" r="1.8" fill="#000a20"/>
  <circle cx="51" cy="37" r="0.8" fill="#ffffff" opacity="0.8"/>
  <!-- Nose -->
  <path d="M46,62 Q50,66 54,62" stroke="#2962FF" stroke-width="1" fill="none"/>
  <!-- Gentle smile -->
  <path d="M34,72 Q50,80 66,72" stroke="#448AFF" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <!-- Ear bumps -->
  <ellipse cx="19" cy="56" rx="4" ry="6" fill="#1A47CC" stroke="#448AFF" stroke-width="1"/>
  <ellipse cx="81" cy="56" rx="4" ry="6" fill="#1A47CC" stroke="#448AFF" stroke-width="1"/>
  <!-- Label -->
  <rect x="22" y="90" width="56" height="8" rx="3" fill="#020812" stroke="#00E5FF" stroke-width="0.6"/>
  <text x="50" y="96" text-anchor="middle" font-family="monospace" font-size="4" fill="#00E5FF">EM-FE</text>
</svg>`,

  // 4. EM-BE — Engineering Manager Backend
  // Square face, forest green skin, 2 rectangular eye panels, terminal text scrolling iris, circuit board chin
  "EM-BE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bg-em-be" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#071a09"/>
      <stop offset="100%" stop-color="#020c03"/>
    </radialGradient>
    <linearGradient id="face-em-be" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2E7D32"/>
      <stop offset="50%" stop-color="#1B5E20"/>
      <stop offset="100%" stop-color="#0d3410"/>
    </linearGradient>
    <filter id="glow-em-be">
      <feGaussianBlur stdDeviation="1" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#bg-em-be)" rx="12"/>
  <!-- Square face -->
  <rect x="16" y="22" width="68" height="62" rx="6" fill="url(#face-em-be)" stroke="#43A047" stroke-width="1.5"/>
  <!-- Heavy square brow -->
  <rect x="16" y="22" width="68" height="8" rx="3" fill="#0d3410" opacity="0.8"/>
  <!-- Rectangular eye panels -->
  <rect x="22" y="38" width="22" height="14" rx="2" fill="#021205" stroke="#43A047" stroke-width="1.2"/>
  <rect x="56" y="38" width="22" height="14" rx="2" fill="#021205" stroke="#43A047" stroke-width="1.2"/>
  <!-- Terminal text lines in eyes -->
  <text x="24" y="45" font-family="monospace" font-size="3" fill="#00FF41" opacity="0.9">&gt; run</text>
  <text x="24" y="49" font-family="monospace" font-size="2.5" fill="#00FF41" opacity="0.6">../srv</text>
  <text x="58" y="45" font-family="monospace" font-size="3" fill="#00FF41" opacity="0.9">0x4F</text>
  <text x="58" y="49" font-family="monospace" font-size="2.5" fill="#00FF41" opacity="0.6">OK_</text>
  <!-- Pupil cursor blink lines -->
  <line x1="41" y1="44" x2="41" y2="48" stroke="#00FF41" stroke-width="1.2"/>
  <line x1="75" y1="44" x2="75" y2="48" stroke="#00FF41" stroke-width="1.2"/>
  <!-- Nose bridge line -->
  <line x1="50" y1="53" x2="50" y2="59" stroke="#2E7D32" stroke-width="1.5"/>
  <!-- Straight determined mouth -->
  <line x1="30" y1="66" x2="70" y2="66" stroke="#43A047" stroke-width="2" stroke-linecap="round"/>
  <!-- Circuit board chin -->
  <path d="M28,70 H38 V74 H42" stroke="#43A047" stroke-width="0.9" fill="none" opacity="0.8"/>
  <circle cx="38" cy="74" r="1.2" fill="#00FF41" opacity="0.8"/>
  <path d="M52,70 H62 V75 H68" stroke="#43A047" stroke-width="0.9" fill="none" opacity="0.8"/>
  <circle cx="62" cy="75" r="1.2" fill="#00FF41" opacity="0.8"/>
  <path d="M44,72 H56" stroke="#43A047" stroke-width="0.7" fill="none" opacity="0.5"/>
  <!-- Side ear panels -->
  <rect x="8" y="42" width="8" height="14" rx="2" fill="#0d3410" stroke="#43A047" stroke-width="1"/>
  <rect x="84" y="42" width="8" height="14" rx="2" fill="#0d3410" stroke="#43A047" stroke-width="1"/>
  <!-- Label -->
  <rect x="22" y="90" width="56" height="8" rx="3" fill="#020c03" stroke="#00FF41" stroke-width="0.6"/>
  <text x="50" y="96" text-anchor="middle" font-family="monospace" font-size="4" fill="#00FF41">EM-BE</text>
</svg>`,

  // 5. EM-MOB — Engineering Manager Mobile
  // Round face, sky-cyan skin, 2 round eyes with phone-screen rectangle inside iris, signal waves from top
  "EM-MOB": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bg-em-mob" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#071c22"/>
      <stop offset="100%" stop-color="#020c10"/>
    </radialGradient>
    <radialGradient id="face-em-mob" cx="50%" cy="45%" r="52%">
      <stop offset="0%" stop-color="#00ACC1"/>
      <stop offset="60%" stop-color="#00838F"/>
      <stop offset="100%" stop-color="#004d58"/>
    </radialGradient>
    <radialGradient id="iris-em-mob" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#B2EBF2"/>
      <stop offset="50%" stop-color="#00BCD4"/>
      <stop offset="100%" stop-color="#006064"/>
    </radialGradient>
    <filter id="glow-em-mob">
      <feGaussianBlur stdDeviation="1.2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#bg-em-mob)" rx="12"/>
  <!-- Signal waves radiating from top -->
  <path d="M50,6 Q38,12 50,16 Q62,12 50,6" stroke="#00E5FF" stroke-width="0.8" fill="none" opacity="0.7"/>
  <path d="M50,3 Q32,12 50,20 Q68,12 50,3" stroke="#00E5FF" stroke-width="0.7" fill="none" opacity="0.5"/>
  <path d="M50,1 Q26,12 50,22 Q74,12 50,1" stroke="#00E5FF" stroke-width="0.5" fill="none" opacity="0.3"/>
  <!-- Round face -->
  <circle cx="50" cy="58" r="34" fill="url(#face-em-mob)" stroke="#00ACC1" stroke-width="1.5"/>
  <!-- Brow -->
  <path d="M26,48 Q36,44 44,48" stroke="#004d58" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M56,48 Q64,44 74,48" stroke="#004d58" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Round eyes -->
  <circle cx="36" cy="54" r="9.5" fill="#003040" stroke="#00ACC1" stroke-width="1.2"/>
  <circle cx="64" cy="54" r="9.5" fill="#003040" stroke="#00ACC1" stroke-width="1.2"/>
  <!-- Phone screen inside iris -->
  <circle cx="36" cy="54" r="8" fill="url(#iris-em-mob)"/>
  <circle cx="64" cy="54" r="8" fill="url(#iris-em-mob)"/>
  <!-- Phone rectangle inside each eye -->
  <rect x="31" y="49" width="10" height="10" rx="2" fill="#003040" stroke="#00E5FF" stroke-width="0.8"/>
  <rect x="59" y="49" width="10" height="10" rx="2" fill="#003040" stroke="#00E5FF" stroke-width="0.8"/>
  <!-- Phone home button -->
  <circle cx="36" cy="57" r="1" fill="#00E5FF" opacity="0.9"/>
  <circle cx="64" cy="57" r="1" fill="#00E5FF" opacity="0.9"/>
  <!-- Pupils -->
  <circle cx="36" cy="54" r="2.5" fill="#000a10"/>
  <circle cx="64" cy="54" r="2.5" fill="#000a10"/>
  <!-- Shine -->
  <circle cx="37.5" cy="52.5" r="1.1" fill="#ffffff" opacity="0.8"/>
  <circle cx="65.5" cy="52.5" r="1.1" fill="#ffffff" opacity="0.8"/>
  <!-- Nose -->
  <path d="M46,63 Q50,67 54,63" stroke="#00838F" stroke-width="1.2" fill="none"/>
  <!-- Smile -->
  <path d="M33,72 Q50,82 67,72" stroke="#00ACC1" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Label -->
  <rect x="22" y="90" width="56" height="8" rx="3" fill="#020c10" stroke="#00E5FF" stroke-width="0.6"/>
  <text x="50" y="96" text-anchor="middle" font-family="monospace" font-size="4" fill="#00E5FF">EM-MOB</text>
</svg>`,

  // 6. EM-DATA — Engineering Manager Data
  // Wide oval, deep indigo skin, 2 eyes with database-table grid inside, Y-fork antennae, data stream lines neck
  "EM-DATA": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bg-em-data" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0d0a2e"/>
      <stop offset="100%" stop-color="#05030f"/>
    </radialGradient>
    <radialGradient id="face-em-data" cx="50%" cy="45%" r="52%">
      <stop offset="0%" stop-color="#4527A0"/>
      <stop offset="60%" stop-color="#311B92"/>
      <stop offset="100%" stop-color="#1a0d55"/>
    </radialGradient>
    <filter id="glow-em-data">
      <feGaussianBlur stdDeviation="1.2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#bg-em-data)" rx="12"/>
  <!-- Y-fork antennae -->
  <line x1="50" y1="22" x2="50" y2="10" stroke="#7C4DFF" stroke-width="1.8"/>
  <line x1="50" y1="10" x2="44" y2="5" stroke="#7C4DFF" stroke-width="1.5"/>
  <line x1="50" y1="10" x2="56" y2="5" stroke="#7C4DFF" stroke-width="1.5"/>
  <circle cx="44" cy="5" r="1.8" fill="#7C4DFF" filter="url(#glow-em-data)"/>
  <circle cx="56" cy="5" r="1.8" fill="#7C4DFF" filter="url(#glow-em-data)"/>
  <!-- Wide oval face -->
  <ellipse cx="50" cy="55" rx="36" ry="30" fill="url(#face-em-data)" stroke="#5E35B1" stroke-width="1.5"/>
  <!-- Brow -->
  <path d="M20,46 Q50,40 80,46" stroke="#1a0d55" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- Eye sockets -->
  <ellipse cx="34" cy="52" rx="10" ry="8" fill="#0d0520" stroke="#5E35B1" stroke-width="1.2"/>
  <ellipse cx="66" cy="52" rx="10" ry="8" fill="#0d0520" stroke="#5E35B1" stroke-width="1.2"/>
  <!-- Database table grid in iris -->
  <ellipse cx="34" cy="52" rx="8.5" ry="7" fill="#1a0d55"/>
  <ellipse cx="66" cy="52" rx="8.5" ry="7" fill="#1a0d55"/>
  <!-- Grid lines -->
  <line x1="25.5" y1="50" x2="42.5" y2="50" stroke="#7C4DFF" stroke-width="0.5" opacity="0.9"/>
  <line x1="25.5" y1="52.5" x2="42.5" y2="52.5" stroke="#7C4DFF" stroke-width="0.5" opacity="0.7"/>
  <line x1="25.5" y1="55" x2="42.5" y2="55" stroke="#7C4DFF" stroke-width="0.5" opacity="0.5"/>
  <line x1="32" y1="45" x2="32" y2="59" stroke="#7C4DFF" stroke-width="0.5" opacity="0.6"/>
  <line x1="36" y1="45" x2="36" y2="59" stroke="#7C4DFF" stroke-width="0.5" opacity="0.6"/>
  <line x1="57.5" y1="50" x2="74.5" y2="50" stroke="#7C4DFF" stroke-width="0.5" opacity="0.9"/>
  <line x1="57.5" y1="52.5" x2="74.5" y2="52.5" stroke="#7C4DFF" stroke-width="0.5" opacity="0.7"/>
  <line x1="57.5" y1="55" x2="74.5" y2="55" stroke="#7C4DFF" stroke-width="0.5" opacity="0.5"/>
  <line x1="64" y1="45" x2="64" y2="59" stroke="#7C4DFF" stroke-width="0.5" opacity="0.6"/>
  <line x1="68" y1="45" x2="68" y2="59" stroke="#7C4DFF" stroke-width="0.5" opacity="0.6"/>
  <!-- Pupils -->
  <circle cx="34" cy="52" r="2.8" fill="#08031a"/>
  <circle cx="66" cy="52" r="2.8" fill="#08031a"/>
  <circle cx="35.2" cy="50.8" r="1" fill="#ffffff" opacity="0.7"/>
  <circle cx="67.2" cy="50.8" r="1" fill="#ffffff" opacity="0.7"/>
  <!-- Nose -->
  <path d="M46,61 Q50,65 54,61" stroke="#5E35B1" stroke-width="1.2" fill="none"/>
  <!-- Mouth -->
  <path d="M32,70 Q50,77 68,70" stroke="#5E35B1" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <!-- Data stream lines on neck/chin area -->
  <line x1="38" y1="78" x2="62" y2="78" stroke="#7C4DFF" stroke-width="0.6" opacity="0.7"/>
  <line x1="40" y1="81" x2="60" y2="81" stroke="#7C4DFF" stroke-width="0.5" opacity="0.5"/>
  <line x1="43" y1="84" x2="57" y2="84" stroke="#7C4DFF" stroke-width="0.4" opacity="0.3"/>
  <!-- Label -->
  <rect x="18" y="90" width="64" height="8" rx="3" fill="#05030f" stroke="#7C4DFF" stroke-width="0.6"/>
  <text x="50" y="96" text-anchor="middle" font-family="monospace" font-size="4" fill="#7C4DFF">EM-DATA</text>
</svg>`,

  // 7. DIST-ENG — Distinguished Engineer
  // Elongated oval, silver-white skin, 4 eyes in diamond pattern all glowing white-blue, HALO ring above, formula lines forehead
  "DIST-ENG": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bg-dist" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#111820"/>
      <stop offset="100%" stop-color="#040810"/>
    </radialGradient>
    <radialGradient id="face-dist" cx="50%" cy="45%" r="52%">
      <stop offset="0%" stop-color="#ECEFF1"/>
      <stop offset="50%" stop-color="#B0BEC5"/>
      <stop offset="100%" stop-color="#607D8B"/>
    </radialGradient>
    <radialGradient id="eye-dist" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="40%" stop-color="#B3E5FC"/>
      <stop offset="100%" stop-color="#0288D1"/>
    </radialGradient>
    <filter id="glow-dist" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#bg-dist)" rx="12"/>
  <!-- HALO ring above head -->
  <ellipse cx="50" cy="14" rx="22" ry="5" fill="none" stroke="#B3E5FC" stroke-width="2.5" filter="url(#glow-dist)" opacity="0.9"/>
  <ellipse cx="50" cy="14" rx="22" ry="5" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.5"/>
  <!-- Elongated oval face -->
  <ellipse cx="50" cy="58" rx="28" ry="36" fill="url(#face-dist)" stroke="#90A4AE" stroke-width="1.5"/>
  <!-- Formula lines on forehead -->
  <text x="50" y="34" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#0288D1" opacity="0.7">E=mc²</text>
  <text x="50" y="39" text-anchor="middle" font-family="monospace" font-size="3" fill="#0288D1" opacity="0.5">O(log n)</text>
  <!-- 4 eyes in diamond pattern: top, left, right, bottom -->
  <!-- Top eye -->
  <circle cx="50" cy="46" r="5" fill="#263238" stroke="#B3E5FC" stroke-width="1" filter="url(#glow-dist)"/>
  <circle cx="50" cy="46" r="3.8" fill="url(#eye-dist)"/>
  <circle cx="50" cy="46" r="1.5" fill="#04111a"/>
  <!-- Left eye -->
  <circle cx="38" cy="54" r="5" fill="#263238" stroke="#B3E5FC" stroke-width="1" filter="url(#glow-dist)"/>
  <circle cx="38" cy="54" r="3.8" fill="url(#eye-dist)"/>
  <circle cx="38" cy="54" r="1.5" fill="#04111a"/>
  <!-- Right eye -->
  <circle cx="62" cy="54" r="5" fill="#263238" stroke="#B3E5FC" stroke-width="1" filter="url(#glow-dist)"/>
  <circle cx="62" cy="54" r="3.8" fill="url(#eye-dist)"/>
  <circle cx="62" cy="54" r="1.5" fill="#04111a"/>
  <!-- Bottom eye -->
  <circle cx="50" cy="62" r="5" fill="#263238" stroke="#B3E5FC" stroke-width="1" filter="url(#glow-dist)"/>
  <circle cx="50" cy="62" r="3.8" fill="url(#eye-dist)"/>
  <circle cx="50" cy="62" r="1.5" fill="#04111a"/>
  <!-- Eye shine dots -->
  <circle cx="51" cy="45" r="0.9" fill="#ffffff" opacity="0.9"/>
  <circle cx="39" cy="53" r="0.9" fill="#ffffff" opacity="0.9"/>
  <circle cx="63" cy="53" r="0.9" fill="#ffffff" opacity="0.9"/>
  <circle cx="51" cy="61" r="0.9" fill="#ffffff" opacity="0.9"/>
  <!-- Narrow nose slit -->
  <line x1="50" y1="67" x2="50" y2="71" stroke="#607D8B" stroke-width="1"/>
  <!-- Thin serene mouth -->
  <path d="M39,76 Q50,80 61,76" stroke="#78909C" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Label -->
  <rect x="18" y="90" width="64" height="8" rx="3" fill="#040810" stroke="#B3E5FC" stroke-width="0.6"/>
  <text x="50" y="96" text-anchor="middle" font-family="monospace" font-size="4" fill="#B3E5FC">DIST-ENG</text>
</svg>`,

  // 8. PRINC-ENG — Principal Engineer
  // Angular strong face, dark steel skin, 2 eyes with supraorbital ridge, gold iris, prominent head crests
  "PRINC-ENG": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bg-princ" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#101820"/>
      <stop offset="100%" stop-color="#050a10"/>
    </radialGradient>
    <linearGradient id="face-princ" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#455A64"/>
      <stop offset="50%" stop-color="#37474F"/>
      <stop offset="100%" stop-color="#263238"/>
    </linearGradient>
    <radialGradient id="iris-princ" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFF176"/>
      <stop offset="50%" stop-color="#FFD600"/>
      <stop offset="100%" stop-color="#FF6F00"/>
    </radialGradient>
    <filter id="glow-princ">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#bg-princ)" rx="12"/>
  <!-- Head crests (prominent ridges) -->
  <path d="M22,26 L30,18 L38,24 L46,16 L54,24 L62,16 L70,24 L78,18" stroke="#FFD600" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow-princ)"/>
  <!-- Angular face -->
  <path d="M18,32 L82,32 L78,82 L50,88 L22,82 Z" fill="url(#face-princ)" stroke="#546E7A" stroke-width="1.5"/>
  <!-- Heavy supraorbital ridge -->
  <path d="M20,44 L42,40 L42,44 Z" fill="#263238"/>
  <path d="M58,40 L80,44 L58,44 Z" fill="#263238"/>
  <path d="M20,44 Q31,40 42,44" stroke="#FFD600" stroke-width="1.5" fill="none" filter="url(#glow-princ)"/>
  <path d="M58,44 Q69,40 80,44" stroke="#FFD600" stroke-width="1.5" fill="none" filter="url(#glow-princ)"/>
  <!-- Angular eyes -->
  <path d="M22,48 L42,46 L42,56 L22,58 Z" fill="#101820" stroke="#546E7A" stroke-width="1.2"/>
  <path d="M58,46 L78,48 L78,58 L58,56 Z" fill="#101820" stroke="#546E7A" stroke-width="1.2"/>
  <!-- Gold iris -->
  <ellipse cx="32" cy="52" rx="7" ry="5.5" fill="url(#iris-princ)"/>
  <ellipse cx="68" cy="52" rx="7" ry="5.5" fill="url(#iris-princ)"/>
  <!-- Pupils -->
  <ellipse cx="32" cy="52" rx="2.5" ry="3" fill="#050a10"/>
  <ellipse cx="68" cy="52" rx="2.5" ry="3" fill="#050a10"/>
  <circle cx="33.2" cy="50.8" r="1.1" fill="#ffffff" opacity="0.8"/>
  <circle cx="69.2" cy="50.8" r="1.1" fill="#ffffff" opacity="0.8"/>
  <!-- Strong nose ridge -->
  <path d="M50,58 L46,65 L54,65" stroke="#546E7A" stroke-width="1.5" fill="none"/>
  <!-- Stern set mouth -->
  <line x1="31" y1="73" x2="69" y2="73" stroke="#546E7A" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Jaw lines -->
  <line x1="22" y1="68" x2="31" y2="73" stroke="#37474F" stroke-width="1.5"/>
  <line x1="78" y1="68" x2="69" y2="73" stroke="#37474F" stroke-width="1.5"/>
  <!-- Label -->
  <rect x="16" y="90" width="68" height="8" rx="3" fill="#050a10" stroke="#FFD600" stroke-width="0.6"/>
  <text x="50" y="96" text-anchor="middle" font-family="monospace" font-size="4" fill="#FFD600">PRINC-ENG</text>
</svg>`,

  // 9. SR-STAFF — Senior Staff Engineer
  // Rounded professional, slate-blue skin, calm intense eyes cyan iris, single centered antenna with node, gear markings around eyes
  "SR-STAFF": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bg-sr-staff" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0d1525"/>
      <stop offset="100%" stop-color="#050a15"/>
    </radialGradient>
    <radialGradient id="face-sr-staff" cx="50%" cy="45%" r="52%">
      <stop offset="0%" stop-color="#546E7A"/>
      <stop offset="60%" stop-color="#37474F"/>
      <stop offset="100%" stop-color="#1C2A33"/>
    </radialGradient>
    <radialGradient id="iris-sr-staff" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#E0F7FA"/>
      <stop offset="50%" stop-color="#00BCD4"/>
      <stop offset="100%" stop-color="#00606A"/>
    </radialGradient>
    <filter id="glow-sr-staff">
      <feGaussianBlur stdDeviation="1" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#bg-sr-staff)" rx="12"/>
  <!-- Single centered antenna with node -->
  <line x1="50" y1="22" x2="50" y2="8" stroke="#00BCD4" stroke-width="1.8"/>
  <circle cx="50" cy="8" r="3.5" fill="none" stroke="#00BCD4" stroke-width="1.5" filter="url(#glow-sr-staff)"/>
  <circle cx="50" cy="8" r="1.8" fill="#00BCD4"/>
  <!-- Rounded face -->
  <ellipse cx="50" cy="56" rx="30" ry="32" fill="url(#face-sr-staff)" stroke="#607D8B" stroke-width="1.5"/>
  <!-- Calm brow -->
  <path d="M26,46 Q36,43 44,46" stroke="#1C2A33" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M56,46 Q64,43 74,46" stroke="#1C2A33" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Eyes -->
  <ellipse cx="36" cy="52" rx="9" ry="8.5" fill="#0a1520" stroke="#607D8B" stroke-width="1.2"/>
  <ellipse cx="64" cy="52" rx="9" ry="8.5" fill="#0a1520" stroke="#607D8B" stroke-width="1.2"/>
  <!-- Cyan iris -->
  <circle cx="36" cy="52" r="7" fill="url(#iris-sr-staff)"/>
  <circle cx="64" cy="52" r="7" fill="url(#iris-sr-staff)"/>
  <!-- Gear markings around eyes (subtle tick marks) -->
  <line x1="36" y1="43" x2="36" y2="41" stroke="#00BCD4" stroke-width="1" opacity="0.7"/>
  <line x1="43" y1="46" x2="44.5" y2="44.5" stroke="#00BCD4" stroke-width="1" opacity="0.7"/>
  <line x1="45" y1="52" x2="47" y2="52" stroke="#00BCD4" stroke-width="1" opacity="0.7"/>
  <line x1="43" y1="58" x2="44.5" y2="59.5" stroke="#00BCD4" stroke-width="1" opacity="0.7"/>
  <line x1="64" y1="43" x2="64" y2="41" stroke="#00BCD4" stroke-width="1" opacity="0.7"/>
  <line x1="71" y1="46" x2="72.5" y2="44.5" stroke="#00BCD4" stroke-width="1" opacity="0.7"/>
  <line x1="73" y1="52" x2="75" y2="52" stroke="#00BCD4" stroke-width="1" opacity="0.7"/>
  <line x1="71" y1="58" x2="72.5" y2="59.5" stroke="#00BCD4" stroke-width="1" opacity="0.7"/>
  <!-- Pupils -->
  <circle cx="36" cy="52" r="3" fill="#020c12"/>
  <circle cx="64" cy="52" r="3" fill="#020c12"/>
  <circle cx="37.2" cy="50.8" r="1.2" fill="#ffffff" opacity="0.8"/>
  <circle cx="65.2" cy="50.8" r="1.2" fill="#ffffff" opacity="0.8"/>
  <!-- Nose -->
  <path d="M46,61 Q50,65 54,61" stroke="#546E7A" stroke-width="1.2" fill="none"/>
  <!-- Professional steady mouth -->
  <path d="M34,70 Q50,76 66,70" stroke="#607D8B" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <!-- Ear bumps -->
  <ellipse cx="21" cy="55" rx="3.5" ry="5.5" fill="#37474F" stroke="#607D8B" stroke-width="1"/>
  <ellipse cx="79" cy="55" rx="3.5" ry="5.5" fill="#37474F" stroke="#607D8B" stroke-width="1"/>
  <!-- Label -->
  <rect x="18" y="90" width="64" height="8" rx="3" fill="#050a15" stroke="#00BCD4" stroke-width="0.6"/>
  <text x="50" y="96" text-anchor="middle" font-family="monospace" font-size="4" fill="#00BCD4">SR-STAFF</text>
</svg>`,

  // 10. STAFF-FE — Staff Frontend Engineer
  // Friendly oval, bright azure skin, 2 wide curious eyes with box-model iris, short bouncy antennae
  "STAFF-FE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bg-staff-fe" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0a1a30"/>
      <stop offset="100%" stop-color="#040c18"/>
    </radialGradient>
    <radialGradient id="face-staff-fe" cx="50%" cy="45%" r="52%">
      <stop offset="0%" stop-color="#1E88E5"/>
      <stop offset="60%" stop-color="#1565C0"/>
      <stop offset="100%" stop-color="#0d3d7a"/>
    </radialGradient>
    <filter id="glow-staff-fe">
      <feGaussianBlur stdDeviation="1.2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#bg-staff-fe)" rx="12"/>
  <!-- Short bouncy antennae -->
  <path d="M38,24 C36,18 34,15 36,12" stroke="#64B5F6" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <circle cx="36" cy="12" r="2.5" fill="#64B5F6" filter="url(#glow-staff-fe)"/>
  <path d="M62,24 C64,18 66,15 64,12" stroke="#64B5F6" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <circle cx="64" cy="12" r="2.5" fill="#64B5F6" filter="url(#glow-staff-fe)"/>
  <!-- Friendly oval face -->
  <ellipse cx="50" cy="56" rx="31" ry="32" fill="url(#face-staff-fe)" stroke="#42A5F5" stroke-width="1.5"/>
  <!-- Raised curious brows -->
  <path d="M24,44 Q34,39 44,43" stroke="#0d3d7a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M56,43 Q66,39 76,44" stroke="#0d3d7a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Wide curious eyes -->
  <circle cx="35" cy="52" r="10" fill="#081d3a" stroke="#42A5F5" stroke-width="1.3"/>
  <circle cx="65" cy="52" r="10" fill="#081d3a" stroke="#42A5F5" stroke-width="1.3"/>
  <!-- Box-model iris: nested boxes -->
  <rect x="27" y="44" width="16" height="16" rx="1" fill="none" stroke="#64B5F6" stroke-width="0.8" opacity="0.8"/>
  <rect x="30" y="47" width="10" height="10" rx="1" fill="#0d2860" stroke="#64B5F6" stroke-width="0.6" opacity="0.7"/>
  <rect x="32.5" y="49.5" width="5" height="5" rx="0.5" fill="#1565C0" stroke="#64B5F6" stroke-width="0.5" opacity="0.9"/>
  <rect x="57" y="44" width="16" height="16" rx="1" fill="none" stroke="#64B5F6" stroke-width="0.8" opacity="0.8"/>
  <rect x="60" y="47" width="10" height="10" rx="1" fill="#0d2860" stroke="#64B5F6" stroke-width="0.6" opacity="0.7"/>
  <rect x="62.5" y="49.5" width="5" height="5" rx="0.5" fill="#1565C0" stroke="#64B5F6" stroke-width="0.5" opacity="0.9"/>
  <!-- Pupils -->
  <circle cx="35" cy="52" r="2.5" fill="#020c1a"/>
  <circle cx="65" cy="52" r="2.5" fill="#020c1a"/>
  <circle cx="36.2" cy="50.8" r="1.1" fill="#ffffff" opacity="0.8"/>
  <circle cx="66.2" cy="50.8" r="1.1" fill="#ffffff" opacity="0.8"/>
  <!-- Nose -->
  <path d="M46,62 Q50,66 54,62" stroke="#1E88E5" stroke-width="1.2" fill="none"/>
  <!-- Friendly open smile -->
  <path d="M32,71 Q50,82 68,71" stroke="#42A5F5" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Label -->
  <rect x="18" y="90" width="64" height="8" rx="3" fill="#040c18" stroke="#64B5F6" stroke-width="0.6"/>
  <text x="50" y="96" text-anchor="middle" font-family="monospace" font-size="4" fill="#64B5F6">STAFF-FE</text>
</svg>`,

  // 11. STAFF-BE — Staff Backend Engineer
  // Compact round, dark navy skin, 2 focused eyes with server-rack iris, antennae both bent at 90 degrees
  "STAFF-BE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bg-staff-be" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#060e1c"/>
      <stop offset="100%" stop-color="#020810"/>
    </radialGradient>
    <radialGradient id="face-staff-be" cx="50%" cy="45%" r="52%">
      <stop offset="0%" stop-color="#1A237E"/>
      <stop offset="60%" stop-color="#0D1465"/>
      <stop offset="100%" stop-color="#060a38"/>
    </radialGradient>
    <filter id="glow-staff-be">
      <feGaussianBlur stdDeviation="1" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#bg-staff-be)" rx="12"/>
  <!-- Antennae bent at 90 degrees -->
  <path d="M38,24 L38,12 L28,12" stroke="#5C6BC0" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="28" cy="12" r="2" fill="#5C6BC0" filter="url(#glow-staff-be)"/>
  <path d="M62,24 L62,12 L72,12" stroke="#5C6BC0" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="72" cy="12" r="2" fill="#5C6BC0" filter="url(#glow-staff-be)"/>
  <!-- Compact round face -->
  <circle cx="50" cy="57" r="31" fill="url(#face-staff-be)" stroke="#3949AB" stroke-width="1.5"/>
  <!-- Focused brow -->
  <path d="M25,48 Q36,44 44,48" stroke="#060a38" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M56,48 Q64,44 75,48" stroke="#060a38" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- Eyes with server-rack iris -->
  <ellipse cx="35" cy="54" rx="9" ry="8" fill="#060a38" stroke="#3949AB" stroke-width="1.2"/>
  <ellipse cx="65" cy="54" rx="9" ry="8" fill="#060a38" stroke="#3949AB" stroke-width="1.2"/>
  <!-- Server rack lines in iris -->
  <rect x="27" y="47" width="16" height="14" rx="1.5" fill="#0a1252"/>
  <rect x="57" y="47" width="16" height="14" rx="1.5" fill="#0a1252"/>
  <rect x="28" y="48.5" width="14" height="2" rx="0.5" fill="#3949AB" opacity="0.9"/>
  <rect x="28" y="51.5" width="14" height="2" rx="0.5" fill="#3949AB" opacity="0.7"/>
  <rect x="28" y="54.5" width="14" height="2" rx="0.5" fill="#3949AB" opacity="0.5"/>
  <rect x="28" y="57.5" width="14" height="2" rx="0.5" fill="#3949AB" opacity="0.3"/>
  <rect x="58" y="48.5" width="14" height="2" rx="0.5" fill="#3949AB" opacity="0.9"/>
  <rect x="58" y="51.5" width="14" height="2" rx="0.5" fill="#3949AB" opacity="0.7"/>
  <rect x="58" y="54.5" width="14" height="2" rx="0.5" fill="#3949AB" opacity="0.5"/>
  <rect x="58" y="57.5" width="14" height="2" rx="0.5" fill="#3949AB" opacity="0.3"/>
  <!-- Status lights -->
  <circle cx="39" cy="49.5" r="1" fill="#00FF41" opacity="0.9"/>
  <circle cx="69" cy="49.5" r="1" fill="#00FF41" opacity="0.9"/>
  <!-- Pupils -->
  <circle cx="35" cy="54" r="2.5" fill="#020610"/>
  <circle cx="65" cy="54" r="2.5" fill="#020610"/>
  <!-- Nose -->
  <path d="M46,63 Q50,67 54,63" stroke="#1A237E" stroke-width="1.2" fill="none"/>
  <!-- Mouth -->
  <path d="M33,72 Q50,79 67,72" stroke="#3949AB" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <!-- Label -->
  <rect x="18" y="90" width="64" height="8" rx="3" fill="#020810" stroke="#5C6BC0" stroke-width="0.6"/>
  <text x="50" y="96" text-anchor="middle" font-family="monospace" font-size="4" fill="#5C6BC0">STAFF-BE</text>
</svg>`,

  // 12. STAFF-MOB — Staff Mobile Engineer
  // Elongated face, app-store-blue skin, 2 eyes with rounded-rect phone icon iris, small antenna with wifi ring
  "STAFF-MOB": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bg-staff-mob" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#071222"/>
      <stop offset="100%" stop-color="#030a16"/>
    </radialGradient>
    <radialGradient id="face-staff-mob" cx="50%" cy="45%" r="52%">
      <stop offset="0%" stop-color="#0277BD"/>
      <stop offset="60%" stop-color="#01579B"/>
      <stop offset="100%" stop-color="#003060"/>
    </radialGradient>
    <radialGradient id="iris-mob" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#B3E5FC"/>
      <stop offset="50%" stop-color="#0288D1"/>
      <stop offset="100%" stop-color="#003060"/>
    </radialGradient>
    <filter id="glow-staff-mob">
      <feGaussianBlur stdDeviation="1.1" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#bg-staff-mob)" rx="12"/>
  <!-- Small antenna with circular wifi ring -->
  <line x1="50" y1="22" x2="50" y2="10" stroke="#29B6F6" stroke-width="1.6"/>
  <circle cx="50" cy="7" r="4.5" fill="none" stroke="#29B6F6" stroke-width="1.2" filter="url(#glow-staff-mob)"/>
  <circle cx="50" cy="7" r="2.5" fill="none" stroke="#29B6F6" stroke-width="0.8" opacity="0.6"/>
  <circle cx="50" cy="7" r="1" fill="#29B6F6"/>
  <!-- Elongated face -->
  <ellipse cx="50" cy="57" rx="26" ry="34" fill="url(#face-staff-mob)" stroke="#0288D1" stroke-width="1.5"/>
  <!-- Brow -->
  <path d="M28,46 Q38,42 46,46" stroke="#003060" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M54,46 Q62,42 72,46" stroke="#003060" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Eyes -->
  <ellipse cx="37" cy="53" rx="9" ry="8.5" fill="#002040" stroke="#0288D1" stroke-width="1.2"/>
  <ellipse cx="63" cy="53" rx="9" ry="8.5" fill="#002040" stroke="#0288D1" stroke-width="1.2"/>
  <!-- Phone icon (rounded rect) iris -->
  <ellipse cx="37" cy="53" rx="7.5" ry="7" fill="url(#iris-mob)"/>
  <ellipse cx="63" cy="53" rx="7.5" ry="7" fill="url(#iris-mob)"/>
  <!-- Phone shape inside -->
  <rect x="32.5" y="47.5" width="9" height="11" rx="2.2" fill="#002040" stroke="#29B6F6" stroke-width="0.8"/>
  <rect x="58.5" y="47.5" width="9" height="11" rx="2.2" fill="#002040" stroke="#29B6F6" stroke-width="0.8"/>
  <circle cx="37" cy="57" r="1.2" fill="#29B6F6" opacity="0.9"/>
  <circle cx="63" cy="57" r="1.2" fill="#29B6F6" opacity="0.9"/>
  <!-- Screen brightness bar -->
  <line x1="34" y1="50" x2="40" y2="50" stroke="#29B6F6" stroke-width="0.6" opacity="0.7"/>
  <line x1="60" y1="50" x2="66" y2="50" stroke="#29B6F6" stroke-width="0.6" opacity="0.7"/>
  <!-- Pupils -->
  <circle cx="37" cy="53" r="2.5" fill="#00101c"/>
  <circle cx="63" cy="53" r="2.5" fill="#00101c"/>
  <circle cx="38.2" cy="51.8" r="1" fill="#ffffff" opacity="0.8"/>
  <circle cx="64.2" cy="51.8" r="1" fill="#ffffff" opacity="0.8"/>
  <!-- Nose -->
  <path d="M46,62 Q50,66 54,62" stroke="#0277BD" stroke-width="1.2" fill="none"/>
  <!-- Mouth -->
  <path d="M35,71 Q50,79 65,71" stroke="#0288D1" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <!-- Label -->
  <rect x="16" y="90" width="68" height="8" rx="3" fill="#030a16" stroke="#29B6F6" stroke-width="0.6"/>
  <text x="50" y="96" text-anchor="middle" font-family="monospace" font-size="4" fill="#29B6F6">STAFF-MOB</text>
</svg>`,

  // 13. STAFF-DATA — Staff Data Engineer
  // Wide face, data-lake blue (#1B4F72), 2 eyes with flowing stream iris (wavy lines), Y-fork antennae
  "STAFF-DATA": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bg-staff-data" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0c1e2e"/>
      <stop offset="100%" stop-color="#060f18"/>
    </radialGradient>
    <radialGradient id="face-staff-data" cx="50%" cy="45%" r="52%">
      <stop offset="0%" stop-color="#2471A3"/>
      <stop offset="60%" stop-color="#1B4F72"/>
      <stop offset="100%" stop-color="#0e2e44"/>
    </radialGradient>
    <filter id="glow-staff-data">
      <feGaussianBlur stdDeviation="1.2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#bg-staff-data)" rx="12"/>
  <!-- Y-fork antennae -->
  <line x1="50" y1="22" x2="50" y2="11" stroke="#5DADE2" stroke-width="1.8"/>
  <line x1="50" y1="11" x2="43" y2="5" stroke="#5DADE2" stroke-width="1.5"/>
  <line x1="50" y1="11" x2="57" y2="5" stroke="#5DADE2" stroke-width="1.5"/>
  <circle cx="43" cy="5" r="1.8" fill="#5DADE2" filter="url(#glow-staff-data)"/>
  <circle cx="57" cy="5" r="1.8" fill="#5DADE2" filter="url(#glow-staff-data)"/>
  <!-- Wide face -->
  <ellipse cx="50" cy="55" rx="36" ry="31" fill="url(#face-staff-data)" stroke="#2E86C1" stroke-width="1.5"/>
  <!-- Brow -->
  <path d="M20,46 Q50,41 80,46" stroke="#0e2e44" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- Eyes -->
  <ellipse cx="34" cy="53" rx="10" ry="9" fill="#0a1e2e" stroke="#2E86C1" stroke-width="1.2"/>
  <ellipse cx="66" cy="53" rx="10" ry="9" fill="#0a1e2e" stroke="#2E86C1" stroke-width="1.2"/>
  <!-- Flowing stream iris (wavy lines) -->
  <ellipse cx="34" cy="53" rx="8.5" ry="7.5" fill="#0f2840"/>
  <ellipse cx="66" cy="53" rx="8.5" ry="7.5" fill="#0f2840"/>
  <!-- Wavy lines in left eye -->
  <path d="M26,51 Q29,49 32,51 Q35,53 38,51 Q41,49 42,51" stroke="#5DADE2" stroke-width="0.7" fill="none" opacity="0.9"/>
  <path d="M26,53.5 Q29,51.5 32,53.5 Q35,55.5 38,53.5 Q41,51.5 42,53.5" stroke="#5DADE2" stroke-width="0.7" fill="none" opacity="0.7"/>
  <path d="M26,56 Q29,54 32,56 Q35,58 38,56 Q41,54 42,56" stroke="#5DADE2" stroke-width="0.5" fill="none" opacity="0.5"/>
  <!-- Wavy lines in right eye -->
  <path d="M58,51 Q61,49 64,51 Q67,53 70,51 Q73,49 74,51" stroke="#5DADE2" stroke-width="0.7" fill="none" opacity="0.9"/>
  <path d="M58,53.5 Q61,51.5 64,53.5 Q67,55.5 70,53.5 Q73,51.5 74,53.5" stroke="#5DADE2" stroke-width="0.7" fill="none" opacity="0.7"/>
  <path d="M58,56 Q61,54 64,56 Q67,58 70,56 Q73,54 74,56" stroke="#5DADE2" stroke-width="0.5" fill="none" opacity="0.5"/>
  <!-- Pupils -->
  <circle cx="34" cy="53" r="2.8" fill="#040e18"/>
  <circle cx="66" cy="53" r="2.8" fill="#040e18"/>
  <circle cx="35.2" cy="51.8" r="1.1" fill="#ffffff" opacity="0.8"/>
  <circle cx="67.2" cy="51.8" r="1.1" fill="#ffffff" opacity="0.8"/>
  <!-- Nose -->
  <path d="M46,62 Q50,66 54,62" stroke="#2471A3" stroke-width="1.2" fill="none"/>
  <!-- Mouth -->
  <path d="M32,71 Q50,78 68,71" stroke="#2E86C1" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <!-- Ear bumps -->
  <ellipse cx="15" cy="54" rx="4" ry="6" fill="#1B4F72" stroke="#2E86C1" stroke-width="1"/>
  <ellipse cx="85" cy="54" rx="4" ry="6" fill="#1B4F72" stroke="#2E86C1" stroke-width="1"/>
  <!-- Label -->
  <rect x="16" y="90" width="68" height="8" rx="3" fill="#060f18" stroke="#5DADE2" stroke-width="0.6"/>
  <text x="50" y="96" text-anchor="middle" font-family="monospace" font-size="4" fill="#5DADE2">STAFF-DATA</text>
</svg>`,

  // 14. SR-FE-REACT — Senior Frontend React Engineer
  // Bright energetic, React-cyan skin, 2 eyes with React atom iris (3 orbiting ellipses), excited antennae pointing outward
  "SR-FE-REACT": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bg-react" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#071c24"/>
      <stop offset="100%" stop-color="#030e12"/>
    </radialGradient>
    <radialGradient id="face-react" cx="50%" cy="45%" r="52%">
      <stop offset="0%" stop-color="#40C8E8"/>
      <stop offset="50%" stop-color="#20A8C8"/>
      <stop offset="100%" stop-color="#0e6a82"/>
    </radialGradient>
    <radialGradient id="iris-react" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="30%" stop-color="#61DAFB"/>
      <stop offset="100%" stop-color="#0e6a82"/>
    </radialGradient>
    <filter id="glow-react">
      <feGaussianBlur stdDeviation="1.3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#bg-react)" rx="12"/>
  <!-- Excited antennae pointing outward -->
  <path d="M38,24 L28,12" stroke="#61DAFB" stroke-width="2" stroke-linecap="round"/>
  <circle cx="27" cy="11" r="2.8" fill="#61DAFB" filter="url(#glow-react)"/>
  <path d="M62,24 L72,12" stroke="#61DAFB" stroke-width="2" stroke-linecap="round"/>
  <circle cx="73" cy="11" r="2.8" fill="#61DAFB" filter="url(#glow-react)"/>
  <!-- Bright energetic face -->
  <ellipse cx="50" cy="56" rx="31" ry="32" fill="url(#face-react)" stroke="#61DAFB" stroke-width="1.5"/>
  <!-- Raised excited brows -->
  <path d="M23,44 Q33,38 43,43" stroke="#0e6a82" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M57,43 Q67,38 77,44" stroke="#0e6a82" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Eyes -->
  <circle cx="35" cy="52" r="9.5" fill="#071c24" stroke="#61DAFB" stroke-width="1.5"/>
  <circle cx="65" cy="52" r="9.5" fill="#071c24" stroke="#61DAFB" stroke-width="1.5"/>
  <!-- React atom iris - 3 orbiting ellipses -->
  <circle cx="35" cy="52" r="8" fill="#061418"/>
  <ellipse cx="35" cy="52" rx="8" ry="3" fill="none" stroke="#61DAFB" stroke-width="1" opacity="0.9"/>
  <ellipse cx="35" cy="52" rx="8" ry="3" fill="none" stroke="#61DAFB" stroke-width="1" opacity="0.9" transform="rotate(60 35 52)"/>
  <ellipse cx="35" cy="52" rx="8" ry="3" fill="none" stroke="#61DAFB" stroke-width="1" opacity="0.9" transform="rotate(120 35 52)"/>
  <circle cx="35" cy="52" r="2.5" fill="#61DAFB" filter="url(#glow-react)"/>
  <circle cx="35" cy="52" r="1.2" fill="#071c24"/>
  <!-- Right eye React atom -->
  <circle cx="65" cy="52" r="8" fill="#061418"/>
  <ellipse cx="65" cy="52" rx="8" ry="3" fill="none" stroke="#61DAFB" stroke-width="1" opacity="0.9"/>
  <ellipse cx="65" cy="52" rx="8" ry="3" fill="none" stroke="#61DAFB" stroke-width="1" opacity="0.9" transform="rotate(60 65 52)"/>
  <ellipse cx="65" cy="52" rx="8" ry="3" fill="none" stroke="#61DAFB" stroke-width="1" opacity="0.9" transform="rotate(120 65 52)"/>
  <circle cx="65" cy="52" r="2.5" fill="#61DAFB" filter="url(#glow-react)"/>
  <circle cx="65" cy="52" r="1.2" fill="#071c24"/>
  <!-- Excited open smile -->
  <path d="M30,67 Q50,80 70,67" stroke="#61DAFB" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Cheek flush marks -->
  <ellipse cx="22" cy="60" rx="5" ry="3" fill="#61DAFB" opacity="0.25"/>
  <ellipse cx="78" cy="60" rx="5" ry="3" fill="#61DAFB" opacity="0.25"/>
  <!-- Label -->
  <rect x="14" y="90" width="72" height="8" rx="3" fill="#030e12" stroke="#61DAFB" stroke-width="0.6"/>
  <text x="50" y="96" text-anchor="middle" font-family="monospace" font-size="4" fill="#61DAFB">SR-FE-REACT</text>
</svg>`,

  // 15. SR-FE-VUE — Senior Frontend Vue Engineer
  // Rounded pleasant face, Vue-green skin, 2 eyes with Vue hexagon iris, small smile, antennae forming V shape
  "SR-FE-VUE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bg-vue" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#071a10"/>
      <stop offset="100%" stop-color="#030e08"/>
    </radialGradient>
    <radialGradient id="face-vue" cx="50%" cy="45%" r="52%">
      <stop offset="0%" stop-color="#5DCFA3"/>
      <stop offset="50%" stop-color="#42B883"/>
      <stop offset="100%" stop-color="#26875e"/>
    </radialGradient>
    <filter id="glow-vue">
      <feGaussianBlur stdDeviation="1.2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#bg-vue)" rx="12"/>
  <!-- V-shape antennae -->
  <path d="M50,22 L38,10" stroke="#42B883" stroke-width="2" stroke-linecap="round"/>
  <circle cx="37" cy="9" r="2.5" fill="#42B883" filter="url(#glow-vue)"/>
  <path d="M50,22 L62,10" stroke="#42B883" stroke-width="2" stroke-linecap="round"/>
  <circle cx="63" cy="9" r="2.5" fill="#42B883" filter="url(#glow-vue)"/>
  <!-- Rounded face -->
  <ellipse cx="50" cy="56" rx="30" ry="32" fill="url(#face-vue)" stroke="#42B883" stroke-width="1.5"/>
  <!-- Pleasant brows (slightly arched) -->
  <path d="M26,46 Q36,41 44,45" stroke="#26875e" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M56,45 Q64,41 74,46" stroke="#26875e" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Eyes -->
  <circle cx="36" cy="53" r="9" fill="#07200f" stroke="#42B883" stroke-width="1.3"/>
  <circle cx="64" cy="53" r="9" fill="#07200f" stroke="#42B883" stroke-width="1.3"/>
  <!-- Vue hexagon iris -->
  <circle cx="36" cy="53" r="7.5" fill="#0d3020"/>
  <polygon points="36,46.5 42,50.25 42,57.75 36,61.5 30,57.75 30,50.25" fill="none" stroke="#42B883" stroke-width="1.2" opacity="0.9"/>
  <polygon points="36,49 40.5,51.5 40.5,56.5 36,59 31.5,56.5 31.5,51.5" fill="#42B883" opacity="0.2"/>
  <circle cx="36" cy="64" r="9" fill="#07200f" stroke="#42B883" stroke-width="0"/>
  <circle cx="64" cy="53" r="7.5" fill="#0d3020"/>
  <polygon points="64,46.5 70,50.25 70,57.75 64,61.5 58,57.75 58,50.25" fill="none" stroke="#42B883" stroke-width="1.2" opacity="0.9"/>
  <polygon points="64,49 68.5,51.5 68.5,56.5 64,59 59.5,56.5 59.5,51.5" fill="#42B883" opacity="0.2"/>
  <!-- Pupils -->
  <circle cx="36" cy="53" r="3" fill="#020c06"/>
  <circle cx="64" cy="53" r="3" fill="#020c06"/>
  <circle cx="37.2" cy="51.8" r="1.2" fill="#ffffff" opacity="0.8"/>
  <circle cx="65.2" cy="51.8" r="1.2" fill="#ffffff" opacity="0.8"/>
  <!-- Small smile -->
  <path d="M36,68 Q50,75 64,68" stroke="#42B883" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Nose -->
  <path d="M46,62 Q50,66 54,62" stroke="#42B883" stroke-width="1.2" fill="none"/>
  <!-- Ear bumps -->
  <ellipse cx="21" cy="55" rx="3.5" ry="5.5" fill="#42B883" opacity="0.6" stroke="#42B883" stroke-width="1"/>
  <ellipse cx="79" cy="55" rx="3.5" ry="5.5" fill="#42B883" opacity="0.6" stroke="#42B883" stroke-width="1"/>
  <!-- Label -->
  <rect x="17" y="90" width="66" height="8" rx="3" fill="#030e08" stroke="#42B883" stroke-width="0.6"/>
  <text x="50" y="96" text-anchor="middle" font-family="monospace" font-size="4" fill="#42B883">SR-FE-VUE</text>
</svg>`,

  // 16. SR-BE-NODE — Senior Backend Node Engineer
  // Calm oval, Node.js-green (#339933 tinted) skin, 2 steady eyes with hex symbol iris, single long antenna, circuit chin
  "SR-BE-NODE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bg-node" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#071408"/>
      <stop offset="100%" stop-color="#030a04"/>
    </radialGradient>
    <radialGradient id="face-node" cx="50%" cy="45%" r="52%">
      <stop offset="0%" stop-color="#4CAF50"/>
      <stop offset="60%" stop-color="#339933"/>
      <stop offset="100%" stop-color="#1a5c1a"/>
    </radialGradient>
    <radialGradient id="iris-node" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#C8E6C9"/>
      <stop offset="50%" stop-color="#66BB6A"/>
      <stop offset="100%" stop-color="#1B5E20"/>
    </radialGradient>
    <filter id="glow-node">
      <feGaussianBlur stdDeviation="1.1" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#bg-node)" rx="12"/>
  <!-- Long single centered antenna -->
  <line x1="50" y1="22" x2="50" y2="5" stroke="#66BB6A" stroke-width="2" stroke-linecap="round"/>
  <circle cx="50" cy="5" r="2.5" fill="#66BB6A" filter="url(#glow-node)"/>
  <!-- Calm oval face -->
  <ellipse cx="50" cy="56" rx="28" ry="32" fill="url(#face-node)" stroke="#4CAF50" stroke-width="1.5"/>
  <!-- Calm brows -->
  <path d="M27,46 Q37,43 46,46" stroke="#1a5c1a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M54,46 Q63,43 73,46" stroke="#1a5c1a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Eyes -->
  <ellipse cx="37" cy="53" rx="9" ry="8.5" fill="#071408" stroke="#4CAF50" stroke-width="1.2"/>
  <ellipse cx="63" cy="53" rx="9" ry="8.5" fill="#071408" stroke="#4CAF50" stroke-width="1.2"/>
  <!-- Hex symbol iris -->
  <circle cx="37" cy="53" r="7.5" fill="url(#iris-node)"/>
  <polygon points="37,46.5 43,50.25 43,57.75 37,61.5 31,57.75 31,50.25" fill="none" stroke="#339933" stroke-width="1.5" opacity="0.9"/>
  <text x="37" y="55" text-anchor="middle" font-family="monospace" font-size="5" fill="#1B5E20" font-weight="bold">#</text>
  <circle cx="63" cy="53" r="7.5" fill="url(#iris-node)"/>
  <polygon points="63,46.5 69,50.25 69,57.75 63,61.5 57,57.75 57,50.25" fill="none" stroke="#339933" stroke-width="1.5" opacity="0.9"/>
  <text x="63" y="55" text-anchor="middle" font-family="monospace" font-size="5" fill="#1B5E20" font-weight="bold">#</text>
  <!-- Pupils -->
  <circle cx="37" cy="53" r="2.5" fill="#030a04"/>
  <circle cx="63" cy="53" r="2.5" fill="#030a04"/>
  <circle cx="38.2" cy="51.8" r="1" fill="#ffffff" opacity="0.8"/>
  <circle cx="64.2" cy="51.8" r="1" fill="#ffffff" opacity="0.8"/>
  <!-- Nose -->
  <path d="M46,62 Q50,66 54,62" stroke="#339933" stroke-width="1.2" fill="none"/>
  <!-- Calm steady mouth -->
  <path d="M34,70 Q50,77 66,70" stroke="#4CAF50" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <!-- Circuit lines on chin -->
  <path d="M36,75 H44 V79 H50" stroke="#66BB6A" stroke-width="0.8" fill="none" opacity="0.7"/>
  <circle cx="44" cy="79" r="1" fill="#66BB6A" opacity="0.8"/>
  <path d="M64,75 H56 V79 H50" stroke="#66BB6A" stroke-width="0.8" fill="none" opacity="0.7"/>
  <circle cx="56" cy="79" r="1" fill="#66BB6A" opacity="0.8"/>
  <!-- Label -->
  <rect x="14" y="90" width="72" height="8" rx="3" fill="#030a04" stroke="#66BB6A" stroke-width="0.6"/>
  <text x="50" y="96" text-anchor="middle" font-family="monospace" font-size="4" fill="#66BB6A">SR-BE-NODE</text>
</svg>`,

  // 17. SR-BE-PY — Senior Backend Python Engineer
  // Serpentine-ish face, Python-yellow (#FFD43B) skin, snake-scale iris, vertical slit pupils, tongue hint at mouth
  "SR-BE-PY": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bg-py" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1a1700"/>
      <stop offset="100%" stop-color="#0c0e00"/>
    </radialGradient>
    <radialGradient id="face-py" cx="50%" cy="45%" r="52%">
      <stop offset="0%" stop-color="#FFD43B"/>
      <stop offset="50%" stop-color="#D4AC0D"/>
      <stop offset="100%" stop-color="#9a7d00"/>
    </radialGradient>
    <radialGradient id="iris-py" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFD43B"/>
      <stop offset="40%" stop-color="#B7950B"/>
      <stop offset="100%" stop-color="#5a4a00"/>
    </radialGradient>
    <filter id="glow-py">
      <feGaussianBlur stdDeviation="1" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#bg-py)" rx="12"/>
  <!-- Slightly elongated face with serpentine quality -->
  <ellipse cx="50" cy="56" rx="27" ry="34" fill="url(#face-py)" stroke="#D4AC0D" stroke-width="1.5"/>
  <!-- Low ridge brow -->
  <path d="M27,46 Q38,41 48,45" stroke="#5a4a00" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M52,45 Q62,41 73,46" stroke="#5a4a00" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- Python logo colors: blue + yellow accent on forehead -->
  <path d="M40,30 Q50,26 60,30 Q50,34 40,30" fill="#4B8BBE" opacity="0.7"/>
  <!-- Eyes with scale pattern iris -->
  <ellipse cx="37" cy="52" rx="9" ry="8.5" fill="#0c0e00" stroke="#D4AC0D" stroke-width="1.2"/>
  <ellipse cx="63" cy="52" rx="9" ry="8.5" fill="#0c0e00" stroke="#D4AC0D" stroke-width="1.2"/>
  <ellipse cx="37" cy="52" rx="7.5" ry="7" fill="url(#iris-py)"/>
  <ellipse cx="63" cy="52" rx="7.5" ry="7" fill="url(#iris-py)"/>
  <!-- Scale pattern in iris (overlapping arcs) -->
  <path d="M30,51 Q33.5,47 37,51 Q40.5,55 44,51" stroke="#5a4a00" stroke-width="0.8" fill="none" opacity="0.7"/>
  <path d="M30,54 Q33.5,50 37,54 Q40.5,58 44,54" stroke="#5a4a00" stroke-width="0.8" fill="none" opacity="0.7"/>
  <path d="M56,51 Q59.5,47 63,51 Q66.5,55 70,51" stroke="#5a4a00" stroke-width="0.8" fill="none" opacity="0.7"/>
  <path d="M56,54 Q59.5,50 63,54 Q66.5,58 70,54" stroke="#5a4a00" stroke-width="0.8" fill="none" opacity="0.7"/>
  <!-- Vertical slit pupils -->
  <ellipse cx="37" cy="52" rx="1.5" ry="4" fill="#000000"/>
  <ellipse cx="63" cy="52" rx="1.5" ry="4" fill="#000000"/>
  <!-- Eye shine -->
  <circle cx="38" cy="50" r="0.9" fill="#ffffff" opacity="0.8"/>
  <circle cx="64" cy="50" r="0.9" fill="#ffffff" opacity="0.8"/>
  <!-- Nose (subtle slits) -->
  <ellipse cx="47" cy="61" rx="1.5" ry="0.7" fill="#5a4a00" opacity="0.7"/>
  <ellipse cx="53" cy="61" rx="1.5" ry="0.7" fill="#5a4a00" opacity="0.7"/>
  <!-- Mouth with tongue hint -->
  <path d="M34,68 Q50,74 66,68" stroke="#9a7d00" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <!-- Tongue (forked) -->
  <path d="M50,68 L48,73 M50,68 L52,73" stroke="#FF6B6B" stroke-width="1.2" fill="none" stroke-linecap="round"/>
  <!-- Scale markings on cheeks -->
  <path d="M20,53 Q23.5,49 27,53" stroke="#D4AC0D" stroke-width="0.7" fill="none" opacity="0.6"/>
  <path d="M20,57 Q23.5,53 27,57" stroke="#D4AC0D" stroke-width="0.7" fill="none" opacity="0.4"/>
  <path d="M73,53 Q76.5,49 80,53" stroke="#D4AC0D" stroke-width="0.7" fill="none" opacity="0.6"/>
  <path d="M73,57 Q76.5,53 80,57" stroke="#D4AC0D" stroke-width="0.7" fill="none" opacity="0.4"/>
  <!-- Label -->
  <rect x="18" y="90" width="64" height="8" rx="3" fill="#0c0e00" stroke="#FFD43B" stroke-width="0.6"/>
  <text x="50" y="96" text-anchor="middle" font-family="monospace" font-size="4" fill="#FFD43B">SR-BE-PY</text>
</svg>`,

  // 18. SR-BE-GO — Senior Backend Go Engineer
  // Clean angular face, Go-blue (#00ADD8) skin, 2 sharp eyes with large round Gopher irises, cheerful, short flat antennae
  "SR-BE-GO": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bg-go" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#071820"/>
      <stop offset="100%" stop-color="#030c12"/>
    </radialGradient>
    <radialGradient id="face-go" cx="50%" cy="45%" r="52%">
      <stop offset="0%" stop-color="#29C9ED"/>
      <stop offset="50%" stop-color="#00ADD8"/>
      <stop offset="100%" stop-color="#006e8a"/>
    </radialGradient>
    <radialGradient id="iris-go" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="40%" stop-color="#B2EBF2"/>
      <stop offset="100%" stop-color="#0097A7"/>
    </radialGradient>
    <filter id="glow-go">
      <feGaussianBlur stdDeviation="1.1" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#bg-go)" rx="12"/>
  <!-- Short flat antennae (Gopher-inspired) -->
  <path d="M38,25 L32,18" stroke="#00ADD8" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M40,24 L35,17" stroke="#006e8a" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <path d="M62,25 L68,18" stroke="#00ADD8" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M60,24 L65,17" stroke="#006e8a" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Clean angular face -->
  <path d="M18,32 L82,32 L78,80 L50,87 L22,80 Z" fill="url(#face-go)" stroke="#00ADD8" stroke-width="1.5"/>
  <!-- Cheerful raised brows -->
  <path d="M22,44 Q32,38 42,43" stroke="#006e8a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M58,43 Q68,38 78,44" stroke="#006e8a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Large round Gopher-style eyes -->
  <circle cx="34" cy="52" r="11" fill="#002030" stroke="#00ADD8" stroke-width="1.5"/>
  <circle cx="66" cy="52" r="11" fill="#002030" stroke="#00ADD8" stroke-width="1.5"/>
  <!-- Big round irises -->
  <circle cx="34" cy="52" r="9.5" fill="url(#iris-go)"/>
  <circle cx="66" cy="52" r="9.5" fill="url(#iris-go)"/>
  <!-- Pupils -->
  <circle cx="34" cy="52" r="4.5" fill="#001018"/>
  <circle cx="66" cy="52" r="4.5" fill="#001018"/>
  <!-- Large eye shine -->
  <circle cx="36.5" cy="49.5" r="2.2" fill="#ffffff" opacity="0.85"/>
  <circle cx="68.5" cy="49.5" r="2.2" fill="#ffffff" opacity="0.85"/>
  <!-- Nose (short angular) -->
  <path d="M47,64 L50,68 L53,64" stroke="#006e8a" stroke-width="1.5" fill="none"/>
  <!-- Cheerful wide smile -->
  <path d="M26,72 Q50,84 74,72" stroke="#00ADD8" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Go text on forehead -->
  <text x="50" y="34" text-anchor="middle" font-family="monospace" font-size="5" font-weight="bold" fill="#00ADD8" opacity="0.7">Go</text>
  <!-- Label -->
  <rect x="17" y="90" width="66" height="8" rx="3" fill="#030c12" stroke="#00ADD8" stroke-width="0.6"/>
  <text x="50" y="96" text-anchor="middle" font-family="monospace" font-size="4" fill="#00ADD8">SR-BE-GO</text>
</svg>`,

  // 19. SR-FS — Senior Full-Stack Engineer
  // Face split: left frontend-cyan, right backend-green, left eye cyan, right eye green, antennae pointing opposite directions
  "SR-FS": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bg-fs" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0a1820"/>
      <stop offset="100%" stop-color="#040c10"/>
    </radialGradient>
    <linearGradient id="face-fs" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00BCD4"/>
      <stop offset="48%" stop-color="#009aad"/>
      <stop offset="52%" stop-color="#2E7D32"/>
      <stop offset="100%" stop-color="#4CAF50"/>
    </linearGradient>
    <radialGradient id="iris-left-fs" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#E0F7FA"/>
      <stop offset="50%" stop-color="#00E5FF"/>
      <stop offset="100%" stop-color="#006070"/>
    </radialGradient>
    <radialGradient id="iris-right-fs" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#C8E6C9"/>
      <stop offset="50%" stop-color="#66BB6A"/>
      <stop offset="100%" stop-color="#1B5E20"/>
    </radialGradient>
    <filter id="glow-fs">
      <feGaussianBlur stdDeviation="1.2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#bg-fs)" rx="12"/>
  <!-- Antennae pointing in opposite directions -->
  <path d="M46,24 L34,12" stroke="#00E5FF" stroke-width="2" stroke-linecap="round"/>
  <circle cx="33" cy="11" r="2.5" fill="#00E5FF" filter="url(#glow-fs)"/>
  <path d="M54,24 L66,12" stroke="#66BB6A" stroke-width="2" stroke-linecap="round"/>
  <circle cx="67" cy="11" r="2.5" fill="#66BB6A" filter="url(#glow-fs)"/>
  <!-- Face with split coloring (clipped with vertical center line) -->
  <ellipse cx="50" cy="56" rx="32" ry="32" fill="url(#face-fs)" stroke="none"/>
  <!-- Center dividing line -->
  <line x1="50" y1="25" x2="50" y2="87" stroke="#ffffff" stroke-width="1.2" opacity="0.5" stroke-dasharray="3 2"/>
  <!-- Face outline -->
  <ellipse cx="50" cy="56" rx="32" ry="32" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.4"/>
  <!-- Brow -->
  <path d="M22,46 Q35,41 48,45" stroke="#004d5a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M52,45 Q65,41 78,46" stroke="#1a4020" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Left eye (cyan) -->
  <circle cx="35" cy="52" r="9.5" fill="#04181c" stroke="#00BCD4" stroke-width="1.5"/>
  <circle cx="35" cy="52" r="8" fill="url(#iris-left-fs)"/>
  <circle cx="35" cy="52" r="3.2" fill="#010a0c"/>
  <circle cx="36.5" cy="50.5" r="1.4" fill="#ffffff" opacity="0.85"/>
  <!-- Right eye (green) -->
  <circle cx="65" cy="52" r="9.5" fill="#081408" stroke="#4CAF50" stroke-width="1.5"/>
  <circle cx="65" cy="52" r="8" fill="url(#iris-right-fs)"/>
  <circle cx="65" cy="52" r="3.2" fill="#040c04"/>
  <circle cx="66.5" cy="50.5" r="1.4" fill="#ffffff" opacity="0.85"/>
  <!-- Nose -->
  <path d="M46,62 Q50,66 54,62" stroke="#5a8a7a" stroke-width="1.2" fill="none"/>
  <!-- Split mouth: left cyan, right green -->
  <path d="M30,70 Q50,80 70,70" stroke="url(#face-fs)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- FE/BE labels on cheeks -->
  <text x="26" y="60" text-anchor="middle" font-family="monospace" font-size="4" fill="#00E5FF" opacity="0.8">FE</text>
  <text x="74" y="60" text-anchor="middle" font-family="monospace" font-size="4" fill="#66BB6A" opacity="0.8">BE</text>
  <!-- Ear bumps -->
  <ellipse cx="19" cy="55" rx="3.5" ry="5.5" fill="#00838F" stroke="#00BCD4" stroke-width="1"/>
  <ellipse cx="81" cy="55" rx="3.5" ry="5.5" fill="#2E7D32" stroke="#4CAF50" stroke-width="1"/>
  <!-- Label -->
  <rect x="22" y="90" width="56" height="8" rx="3" fill="#040c10" stroke="#ffffff" stroke-width="0.5"/>
  <text x="50" y="96" text-anchor="middle" font-family="monospace" font-size="4" fill="#ffffff">SR-FS</text>
</svg>`,
};

// Ensure output directory exists
if (!fs.existsSync(OUT)) {
  fs.mkdirSync(OUT, { recursive: true });
}

let successCount = 0;
for (const [code, svg] of Object.entries(svgs)) {
  const filePath = path.join(OUT, `${code}.svg`);
  fs.writeFileSync(filePath, svg, "utf-8");
  console.log(`Written: ${code}.svg`);
  successCount++;
}

console.log(`\nDone. ${successCount}/${Object.keys(svgs).length} SVGs written to:`);
console.log(OUT);
