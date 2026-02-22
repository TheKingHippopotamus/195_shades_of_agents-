import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, "../public/brand/avatars/agents");

const svgs: Record<string, string> = {

  // 1. SR-MOB-RN — React Native Senior
  // Round face, React-orange-pink skin, mobile + react icon iris, app-notification bubble forehead
  "SR-MOB-RN": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="rn-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1a1030"/>
      <stop offset="100%" stop-color="#030108"/>
    </radialGradient>
    <radialGradient id="rn-skin" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#FF6B9D"/>
      <stop offset="100%" stop-color="#E91E63"/>
    </radialGradient>
    <radialGradient id="rn-iris" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#61DAFB"/>
      <stop offset="100%" stop-color="#0A7EA4"/>
    </radialGradient>
    <filter id="rn-glow">
      <feGaussianBlur stdDeviation="1.2" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#rn-bg)"/>
  <!-- Left antenna -->
  <line x1="38" y1="22" x2="33" y2="10" stroke="#FF6B9D" stroke-width="1.4"/>
  <circle cx="33" cy="9" r="2.2" fill="#FF2D78" filter="url(#rn-glow)"/>
  <!-- Right antenna -->
  <line x1="62" y1="22" x2="67" y2="10" stroke="#FF6B9D" stroke-width="1.4"/>
  <circle cx="67" cy="9" r="2.2" fill="#FF2D78" filter="url(#rn-glow)"/>
  <!-- Round face -->
  <ellipse cx="50" cy="52" rx="28" ry="30" fill="url(#rn-skin)" stroke="#FF2D78" stroke-width="1.8"/>
  <!-- App notification bubble on forehead -->
  <rect x="41" y="27" width="18" height="9" rx="4.5" fill="#FF2D78" stroke="#FFB3C8" stroke-width="0.8"/>
  <circle cx="53" cy="24" r="3" fill="#FF4081"/>
  <text x="53" y="26" font-family="monospace" font-size="4" font-weight="bold" fill="white" text-anchor="middle">3</text>
  <text x="50" y="34" font-family="monospace" font-size="4.5" font-weight="bold" fill="#FFE0EA" text-anchor="middle">APP</text>
  <!-- Left eye socket -->
  <ellipse cx="38" cy="52" rx="8" ry="8.5" fill="#0D0A1A" stroke="#FF2D78" stroke-width="1.2"/>
  <!-- Left iris - React orbital rings -->
  <ellipse cx="38" cy="52" rx="5" ry="2" fill="none" stroke="#61DAFB" stroke-width="1"/>
  <ellipse cx="38" cy="52" rx="5" ry="2" fill="none" stroke="#61DAFB" stroke-width="1" transform="rotate(60 38 52)"/>
  <ellipse cx="38" cy="52" rx="5" ry="2" fill="none" stroke="#61DAFB" stroke-width="1" transform="rotate(120 38 52)"/>
  <circle cx="38" cy="52" r="1.8" fill="#61DAFB"/>
  <circle cx="38" cy="52" r="0.8" fill="#0D0A1A"/>
  <!-- Right eye socket -->
  <ellipse cx="62" cy="52" rx="8" ry="8.5" fill="#0D0A1A" stroke="#FF2D78" stroke-width="1.2"/>
  <!-- Right iris - Mobile phone shape -->
  <rect x="59" y="47" width="6" height="10" rx="1.5" fill="none" stroke="#61DAFB" stroke-width="1"/>
  <rect x="60" y="48.5" width="4" height="6" rx="0.5" fill="#0A7EA4" opacity="0.5"/>
  <circle cx="62" cy="56" r="0.8" fill="#61DAFB"/>
  <circle cx="62" cy="52" r="0.6" fill="#FFFFFF"/>
  <!-- Cheerful smile -->
  <path d="M38,68 Q50,77 62,68" stroke="#FF2D78" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Cheek blush dots -->
  <circle cx="32" cy="60" r="3.5" fill="#FF6B9D" opacity="0.4"/>
  <circle cx="68" cy="60" r="3.5" fill="#FF6B9D" opacity="0.4"/>
  <!-- Chin mark -->
  <ellipse cx="50" cy="77" rx="4" ry="1.5" fill="#E91E63" opacity="0.5"/>
</svg>`,

  // 2. SR-MOB-NAT — Native Mobile Senior
  // Elongated face, native-blue skin, intense eyes with Apple/Android hybrid iris, ridge marks
  "SR-MOB-NAT": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="nat-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0a1628"/>
      <stop offset="100%" stop-color="#020510"/>
    </radialGradient>
    <radialGradient id="nat-skin" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#4A90D9"/>
      <stop offset="100%" stop-color="#1A5FAD"/>
    </radialGradient>
    <filter id="nat-glow">
      <feGaussianBlur stdDeviation="1" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#nat-bg)"/>
  <!-- Skull ridge marks top -->
  <line x1="35" y1="20" x2="35" y2="12" stroke="#4A90D9" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="43" y1="18" x2="43" y2="10" stroke="#4A90D9" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="17" x2="50" y2="9" stroke="#4A90D9" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="57" y1="18" x2="57" y2="10" stroke="#4A90D9" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="65" y1="20" x2="65" y2="12" stroke="#4A90D9" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Elongated face -->
  <ellipse cx="50" cy="55" rx="24" ry="34" fill="url(#nat-skin)" stroke="#2C7BE5" stroke-width="1.8"/>
  <!-- Ridge marks on skull sides -->
  <line x1="26" y1="38" x2="22" y2="38" stroke="#2C7BE5" stroke-width="1.5"/>
  <line x1="26" y1="44" x2="21" y2="44" stroke="#2C7BE5" stroke-width="1.5"/>
  <line x1="26" y1="50" x2="22" y2="50" stroke="#2C7BE5" stroke-width="1.5"/>
  <line x1="74" y1="38" x2="78" y2="38" stroke="#2C7BE5" stroke-width="1.5"/>
  <line x1="74" y1="44" x2="79" y2="44" stroke="#2C7BE5" stroke-width="1.5"/>
  <line x1="74" y1="50" x2="78" y2="50" stroke="#2C7BE5" stroke-width="1.5"/>
  <!-- Left eye socket - intense oval -->
  <ellipse cx="39" cy="50" rx="7.5" ry="8" fill="#060E1E" stroke="#2C7BE5" stroke-width="1.3"/>
  <!-- Left iris - Apple logo shape approximation -->
  <circle cx="39" cy="50" r="5" fill="#0A1F3D"/>
  <path d="M39,46 C41.5,46 43,47.5 43,50 C43,52.5 41.5,54 39,54 C36.5,54 35,52.5 35,50 C35,47.5 36.5,46 39,46Z" fill="#4A90D9" opacity="0.7"/>
  <path d="M37,44 L38.5,46" stroke="#88BFFF" stroke-width="0.8" stroke-linecap="round"/>
  <circle cx="39" cy="50" r="1.5" fill="#FFFFFF"/>
  <circle cx="39" cy="50" r="0.6" fill="#060E1E"/>
  <!-- Right eye socket -->
  <ellipse cx="61" cy="50" rx="7.5" ry="8" fill="#060E1E" stroke="#2C7BE5" stroke-width="1.3"/>
  <!-- Right iris - Android robot eye shape -->
  <circle cx="61" cy="50" r="5" fill="#0A1F3D"/>
  <rect x="57.5" y="47" width="7" height="5" rx="1" fill="#3DDC84" opacity="0.6"/>
  <rect x="58" y="47" width="1.5" height="3" rx="0.5" fill="#3DDC84"/>
  <rect x="63.5" y="47" width="1.5" height="3" rx="0.5" fill="#3DDC84"/>
  <circle cx="61" cy="50" r="1.5" fill="#FFFFFF"/>
  <circle cx="61" cy="50" r="0.6" fill="#060E1E"/>
  <!-- Rigid focused expression - straight line mouth -->
  <line x1="40" y1="68" x2="60" y2="68" stroke="#2C7BE5" stroke-width="2" stroke-linecap="round"/>
  <!-- Brow lines - intense -->
  <line x1="32" y1="42" x2="46" y2="42" stroke="#1A5FAD" stroke-width="2" stroke-linecap="round"/>
  <line x1="54" y1="42" x2="68" y2="42" stroke="#1A5FAD" stroke-width="2" stroke-linecap="round"/>
  <!-- Chin elongated mark -->
  <ellipse cx="50" cy="83" rx="5" ry="2" fill="#1A5FAD" opacity="0.6"/>
</svg>`,

  // 3. SR-DE — Senior Data Engineer
  // Wide head, data-lake teal, pipeline/flow iris, dual antennae, pipeline tube chin
  "SR-DE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="de-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#071a1a"/>
      <stop offset="100%" stop-color="#020c0c"/>
    </radialGradient>
    <radialGradient id="de-skin" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#2ECFCF"/>
      <stop offset="100%" stop-color="#0A8B8B"/>
    </radialGradient>
    <filter id="de-glow">
      <feGaussianBlur stdDeviation="1.2" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#de-bg)"/>
  <!-- Left antenna with data-node tip -->
  <line x1="35" y1="23" x2="25" y2="10" stroke="#2ECFCF" stroke-width="1.5"/>
  <circle cx="25" cy="9" r="3" fill="#0A8B8B" stroke="#2ECFCF" stroke-width="1"/>
  <circle cx="21" cy="9" r="1.2" fill="#2ECFCF" filter="url(#de-glow)"/>
  <circle cx="29" cy="9" r="1.2" fill="#2ECFCF" filter="url(#de-glow)"/>
  <!-- Right antenna with data-node tip -->
  <line x1="65" y1="23" x2="75" y2="10" stroke="#2ECFCF" stroke-width="1.5"/>
  <circle cx="75" cy="9" r="3" fill="#0A8B8B" stroke="#2ECFCF" stroke-width="1"/>
  <circle cx="71" cy="9" r="1.2" fill="#2ECFCF" filter="url(#de-glow)"/>
  <circle cx="79" cy="9" r="1.2" fill="#2ECFCF" filter="url(#de-glow)"/>
  <!-- Wide head -->
  <ellipse cx="50" cy="52" rx="33" ry="27" fill="url(#de-skin)" stroke="#0A8B8B" stroke-width="1.8"/>
  <!-- Left eye socket -->
  <ellipse cx="36" cy="50" rx="8.5" ry="8" fill="#030F0F" stroke="#2ECFCF" stroke-width="1.2"/>
  <!-- Left iris - pipeline/flow arrows -->
  <circle cx="36" cy="50" r="6" fill="#071A1A"/>
  <path d="M29,50 L33,47 L33,49 L39,49 L39,51 L33,51 L33,53Z" fill="#2ECFCF" opacity="0.8"/>
  <circle cx="36" cy="50" r="1.5" fill="#00FFFF" opacity="0.9"/>
  <circle cx="36" cy="50" r="0.6" fill="#030F0F"/>
  <!-- Right eye socket -->
  <ellipse cx="64" cy="50" rx="8.5" ry="8" fill="#030F0F" stroke="#2ECFCF" stroke-width="1.2"/>
  <!-- Right iris - pipeline arrows -->
  <circle cx="64" cy="50" r="6" fill="#071A1A"/>
  <path d="M57,50 L61,47 L61,49 L67,49 L67,51 L61,51 L61,53Z" fill="#2ECFCF" opacity="0.8"/>
  <circle cx="64" cy="50" r="1.5" fill="#00FFFF" opacity="0.9"/>
  <circle cx="64" cy="50" r="0.6" fill="#030F0F"/>
  <!-- Pipeline tube across chin -->
  <rect x="22" y="68" width="56" height="5" rx="2.5" fill="#071A1A" stroke="#2ECFCF" stroke-width="1"/>
  <circle cx="28" cy="70.5" r="1.5" fill="#2ECFCF" opacity="0.7"/>
  <circle cx="36" cy="70.5" r="1.5" fill="#2ECFCF" opacity="0.7"/>
  <circle cx="44" cy="70.5" r="1.5" fill="#2ECFCF" opacity="0.7"/>
  <line x1="29.5" y1="70.5" x2="34.5" y2="70.5" stroke="#2ECFCF" stroke-width="0.8" opacity="0.5"/>
  <line x1="37.5" y1="70.5" x2="42.5" y2="70.5" stroke="#2ECFCF" stroke-width="0.8" opacity="0.5"/>
  <!-- Neutral expression line -->
  <path d="M38,64 Q50,66 62,64" stroke="#0A8B8B" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <!-- Nose mark -->
  <ellipse cx="50" cy="60" rx="2.5" ry="1.5" fill="#0A8B8B" opacity="0.6"/>
  <!-- Pipeline side connectors -->
  <line x1="22" y1="68" x2="16" y2="68" stroke="#2ECFCF" stroke-width="1"/>
  <circle cx="15" cy="68" r="1.5" fill="#2ECFCF" opacity="0.7"/>
  <line x1="78" y1="68" x2="84" y2="68" stroke="#2ECFCF" stroke-width="1"/>
  <circle cx="85" cy="68" r="1.5" fill="#2ECFCF" opacity="0.7"/>
</svg>`,

  // 4. SR-DBA — Senior Database Admin
  // Compact round, deep maroon skin, cylinder/database stack iris, mustache marking, stern
  "SR-DBA": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="dba-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#150008"/>
      <stop offset="100%" stop-color="#050002"/>
    </radialGradient>
    <radialGradient id="dba-skin" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#A0002A"/>
      <stop offset="100%" stop-color="#550015"/>
    </radialGradient>
    <filter id="dba-glow">
      <feGaussianBlur stdDeviation="1" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#dba-bg)"/>
  <!-- Stern single antenna nub -->
  <rect x="47" y="16" width="6" height="8" rx="2" fill="#800020" stroke="#C0002E" stroke-width="0.8"/>
  <!-- Compact round face -->
  <circle cx="50" cy="54" r="27" fill="url(#dba-skin)" stroke="#C0002E" stroke-width="1.8"/>
  <!-- Left eye socket -->
  <ellipse cx="39" cy="50" rx="7.5" ry="7" fill="#0D0004" stroke="#C0002E" stroke-width="1.2"/>
  <!-- Left iris - cylinder/database stack -->
  <ellipse cx="39" cy="47" rx="5" ry="2" fill="#800020" stroke="#FF3355" stroke-width="0.7"/>
  <rect x="34" y="47" width="10" height="5" fill="#500015" stroke="#FF3355" stroke-width="0.5"/>
  <ellipse cx="39" cy="52" rx="5" ry="2" fill="#800020" stroke="#FF3355" stroke-width="0.7"/>
  <circle cx="39" cy="50" r="1.3" fill="#FF6680" opacity="0.9"/>
  <circle cx="39" cy="50" r="0.5" fill="#0D0004"/>
  <!-- Right eye socket -->
  <ellipse cx="61" cy="50" rx="7.5" ry="7" fill="#0D0004" stroke="#C0002E" stroke-width="1.2"/>
  <!-- Right iris - cylinder/database stack -->
  <ellipse cx="61" cy="47" rx="5" ry="2" fill="#800020" stroke="#FF3355" stroke-width="0.7"/>
  <rect x="56" y="47" width="10" height="5" fill="#500015" stroke="#FF3355" stroke-width="0.5"/>
  <ellipse cx="61" cy="52" rx="5" ry="2" fill="#800020" stroke="#FF3355" stroke-width="0.7"/>
  <circle cx="61" cy="50" r="1.3" fill="#FF6680" opacity="0.9"/>
  <circle cx="61" cy="50" r="0.5" fill="#0D0004"/>
  <!-- Stern brow lines -->
  <line x1="32" y1="43" x2="46" y2="44" stroke="#5A0012" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="54" y1="44" x2="68" y2="43" stroke="#5A0012" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Mustache-like marking under nose -->
  <path d="M43,63 Q50,61 57,63" stroke="#5A0012" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M44,63 Q47,65 50,64 Q53,65 56,63" fill="#5A0012" opacity="0.8"/>
  <!-- Stern straight mouth -->
  <line x1="42" y1="69" x2="58" y2="69" stroke="#800020" stroke-width="2" stroke-linecap="round"/>
  <!-- Nose mark -->
  <ellipse cx="50" cy="59" rx="2" ry="1.2" fill="#700018" opacity="0.7"/>
  <!-- Side cheek marks -->
  <path d="M27,50 L23,48 M27,54 L23,56" stroke="#C0002E" stroke-width="1" opacity="0.5"/>
  <path d="M73,50 L77,48 M73,54 L77,56" stroke="#C0002E" stroke-width="1" opacity="0.5"/>
</svg>`,

  // 5. FE-ENG — Frontend Engineer
  // Cheerful oval, sky-blue skin, wide energetic eyes, gradient iris, bouncy antennae
  "FE-ENG": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="fe-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#071828"/>
      <stop offset="100%" stop-color="#020810"/>
    </radialGradient>
    <radialGradient id="fe-skin" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#87CEEB"/>
      <stop offset="100%" stop-color="#4AAED9"/>
    </radialGradient>
    <radialGradient id="fe-iris-l" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#FFD700"/>
      <stop offset="50%" stop-color="#FF6B35"/>
      <stop offset="100%" stop-color="#E91E63"/>
    </radialGradient>
    <radialGradient id="fe-iris-r" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#00E5FF"/>
      <stop offset="50%" stop-color="#7B2FBE"/>
      <stop offset="100%" stop-color="#E91E63"/>
    </radialGradient>
    <filter id="fe-glow">
      <feGaussianBlur stdDeviation="1.3" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#fe-bg)"/>
  <!-- Bouncy left antenna - curved springy -->
  <path d="M37,24 Q30,16 35,9" stroke="#87CEEB" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  <circle cx="35" cy="8" r="2.5" fill="#FFD700" filter="url(#fe-glow)"/>
  <!-- Bouncy right antenna - curved springy -->
  <path d="M63,24 Q70,16 65,9" stroke="#87CEEB" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  <circle cx="65" cy="8" r="2.5" fill="#00E5FF" filter="url(#fe-glow)"/>
  <!-- Cheerful oval face -->
  <ellipse cx="50" cy="53" rx="27" ry="29" fill="url(#fe-skin)" stroke="#4AAED9" stroke-width="1.8"/>
  <!-- Left eye socket - wide and energetic -->
  <ellipse cx="37" cy="50" rx="9" ry="9.5" fill="#071828" stroke="#87CEEB" stroke-width="1.2"/>
  <!-- Left iris - gradient -->
  <circle cx="37" cy="50" r="6.5" fill="url(#fe-iris-l)"/>
  <circle cx="37" cy="50" r="2" fill="#071828"/>
  <circle cx="35" cy="48" r="1.2" fill="white" opacity="0.7"/>
  <!-- Right eye socket - wide and energetic -->
  <ellipse cx="63" cy="50" rx="9" ry="9.5" fill="#071828" stroke="#87CEEB" stroke-width="1.2"/>
  <!-- Right iris - gradient -->
  <circle cx="63" cy="50" r="6.5" fill="url(#fe-iris-r)"/>
  <circle cx="63" cy="50" r="2" fill="#071828"/>
  <circle cx="61" cy="48" r="1.2" fill="white" opacity="0.7"/>
  <!-- Excited big smile -->
  <path d="M36,68 Q50,80 64,68" stroke="#2E86AB" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  <!-- Teeth shine -->
  <path d="M39,70 Q50,77 61,70" fill="white" opacity="0.5"/>
  <!-- Cheek blush -->
  <circle cx="29" cy="60" r="4" fill="#87CEEB" opacity="0.4"/>
  <circle cx="71" cy="60" r="4" fill="#87CEEB" opacity="0.4"/>
  <!-- Nose -->
  <ellipse cx="50" cy="61" rx="2" ry="1.2" fill="#4AAED9" opacity="0.5"/>
</svg>`,

  // 6. BE-ENG — Backend Engineer
  // Solid rectangular face, dark green skin, calm square eyes, rigid antennae
  "BE-ENG": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="bkend-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#061208"/>
      <stop offset="100%" stop-color="#020704"/>
    </radialGradient>
    <linearGradient id="bkend-skin" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2D6A4F"/>
      <stop offset="100%" stop-color="#1B4332"/>
    </linearGradient>
    <filter id="bkend-glow">
      <feGaussianBlur stdDeviation="1" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#bkend-bg)"/>
  <!-- Rigid straight left antenna -->
  <line x1="38" y1="24" x2="38" y2="10" stroke="#2D6A4F" stroke-width="2"/>
  <rect x="35" y="8" width="6" height="4" rx="1" fill="#40916C" stroke="#2D6A4F" stroke-width="0.7"/>
  <!-- Rigid straight right antenna -->
  <line x1="62" y1="24" x2="62" y2="10" stroke="#2D6A4F" stroke-width="2"/>
  <rect x="59" y="8" width="6" height="4" rx="1" fill="#40916C" stroke="#2D6A4F" stroke-width="0.7"/>
  <!-- Solid rectangular face -->
  <rect x="18" y="24" width="64" height="58" rx="6" fill="url(#bkend-skin)" stroke="#40916C" stroke-width="1.8"/>
  <!-- Left eye socket - square/calm -->
  <rect x="24" y="38" width="22" height="18" rx="3" fill="#061208" stroke="#40916C" stroke-width="1.2"/>
  <!-- Left iris - calm square -->
  <rect x="28" y="42" width="14" height="10" rx="2" fill="#1B4332"/>
  <rect x="30" y="44" width="10" height="6" rx="1" fill="#40916C" opacity="0.5"/>
  <circle cx="35" cy="47" r="2" fill="#52B788"/>
  <circle cx="35" cy="47" r="0.8" fill="#061208"/>
  <!-- Right eye socket - square/calm -->
  <rect x="54" y="38" width="22" height="18" rx="3" fill="#061208" stroke="#40916C" stroke-width="1.2"/>
  <!-- Right iris - calm square -->
  <rect x="58" y="42" width="14" height="10" rx="2" fill="#1B4332"/>
  <rect x="60" y="44" width="10" height="6" rx="1" fill="#40916C" opacity="0.5"/>
  <circle cx="65" cy="47" r="2" fill="#52B788"/>
  <circle cx="65" cy="47" r="0.8" fill="#061208"/>
  <!-- Neutral expression -->
  <line x1="36" y1="67" x2="64" y2="67" stroke="#40916C" stroke-width="2" stroke-linecap="round"/>
  <!-- Nose area -->
  <rect x="47" y="60" width="6" height="4" rx="1.5" fill="#1B4332" opacity="0.6"/>
  <!-- Server-side marks on cheeks -->
  <line x1="24" y1="60" x2="18" y2="60" stroke="#40916C" stroke-width="1" opacity="0.5"/>
  <line x1="24" y1="64" x2="18" y2="64" stroke="#40916C" stroke-width="1" opacity="0.5"/>
  <line x1="76" y1="60" x2="82" y2="60" stroke="#40916C" stroke-width="1" opacity="0.5"/>
  <line x1="76" y1="64" x2="82" y2="64" stroke="#40916C" stroke-width="1" opacity="0.5"/>
</svg>`,

  // 7. MOB-ENG — Mobile Engineer
  // Rounded phone-like face, light blue, round camera aperture iris, signal arc
  "MOB-ENG": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="mob-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#07101E"/>
      <stop offset="100%" stop-color="#020810"/>
    </radialGradient>
    <radialGradient id="mob-skin" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#90CAF9"/>
      <stop offset="100%" stop-color="#42A5F5"/>
    </radialGradient>
    <filter id="mob-glow">
      <feGaussianBlur stdDeviation="1.2" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#mob-bg)"/>
  <!-- Signal arc on top -->
  <path d="M35,18 Q50,8 65,18" stroke="#42A5F5" stroke-width="1.5" fill="none" opacity="0.9"/>
  <path d="M40,15 Q50,8 60,15" stroke="#90CAF9" stroke-width="1.2" fill="none" opacity="0.7"/>
  <path d="M44,13 Q50,8 56,13" stroke="#BBDEFB" stroke-width="1" fill="none" opacity="0.5"/>
  <circle cx="50" cy="9" r="2" fill="#42A5F5" filter="url(#mob-glow)"/>
  <!-- Phone-like rounded face -->
  <rect x="20" y="22" width="60" height="60" rx="12" fill="url(#mob-skin)" stroke="#42A5F5" stroke-width="1.8"/>
  <!-- Left eye socket -->
  <circle cx="37" cy="50" r="9" fill="#07101E" stroke="#42A5F5" stroke-width="1.2"/>
  <!-- Left iris - camera aperture -->
  <circle cx="37" cy="50" r="6.5" fill="#0D1F35"/>
  <path d="M37,44 L38.5,50 L37,56 L35.5,50Z" fill="#42A5F5" opacity="0.5"/>
  <path d="M31,50 L37,51.5 L43,50 L37,48.5Z" fill="#42A5F5" opacity="0.5"/>
  <path d="M32.5,45.5 L37,50 L41.5,54.5" stroke="#90CAF9" stroke-width="0.6" fill="none" opacity="0.4"/>
  <path d="M41.5,45.5 L37,50 L32.5,54.5" stroke="#90CAF9" stroke-width="0.6" fill="none" opacity="0.4"/>
  <circle cx="37" cy="50" r="2.2" fill="#1565C0"/>
  <circle cx="37" cy="50" r="0.8" fill="#07101E"/>
  <circle cx="35" cy="48" r="1" fill="white" opacity="0.6"/>
  <!-- Right eye socket -->
  <circle cx="63" cy="50" r="9" fill="#07101E" stroke="#42A5F5" stroke-width="1.2"/>
  <!-- Right iris - camera aperture -->
  <circle cx="63" cy="50" r="6.5" fill="#0D1F35"/>
  <path d="M63,44 L64.5,50 L63,56 L61.5,50Z" fill="#42A5F5" opacity="0.5"/>
  <path d="M57,50 L63,51.5 L69,50 L63,48.5Z" fill="#42A5F5" opacity="0.5"/>
  <path d="M58.5,45.5 L63,50 L67.5,54.5" stroke="#90CAF9" stroke-width="0.6" fill="none" opacity="0.4"/>
  <path d="M67.5,45.5 L63,50 L58.5,54.5" stroke="#90CAF9" stroke-width="0.6" fill="none" opacity="0.4"/>
  <circle cx="63" cy="50" r="2.2" fill="#1565C0"/>
  <circle cx="63" cy="50" r="0.8" fill="#07101E"/>
  <circle cx="61" cy="48" r="1" fill="white" opacity="0.6"/>
  <!-- Smile -->
  <path d="M38,68 Q50,76 62,68" stroke="#1E88E5" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Home button hint -->
  <circle cx="50" cy="78" r="2.5" fill="#07101E" stroke="#42A5F5" stroke-width="0.8"/>
</svg>`,

  // 8. FS-ENG — Full-Stack Engineer
  // Oval face split diagonally: top-left blue, bottom-right green, one blue eye one green eye
  "FS-ENG": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="fs-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#071420"/>
      <stop offset="100%" stop-color="#020810"/>
    </radialGradient>
    <clipPath id="fs-face-clip">
      <ellipse cx="50" cy="52" rx="27" ry="30"/>
    </clipPath>
    <filter id="fs-glow">
      <feGaussianBlur stdDeviation="1.2" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#fs-bg)"/>
  <!-- Left antenna -->
  <line x1="38" y1="22" x2="35" y2="10" stroke="#4AAED9" stroke-width="1.5"/>
  <circle cx="35" cy="9" r="2.2" fill="#4AAED9" filter="url(#fs-glow)"/>
  <!-- Right antenna -->
  <line x1="62" y1="22" x2="65" y2="10" stroke="#52B788" stroke-width="1.5"/>
  <circle cx="65" cy="9" r="2.2" fill="#52B788" filter="url(#fs-glow)"/>
  <!-- Face outline -->
  <ellipse cx="50" cy="52" rx="27" ry="30" fill="#1B4332" stroke="#40916C" stroke-width="1.8"/>
  <!-- Top-left blue half -->
  <polygon points="23,52 50,22 77,22 50,22" clip-path="url(#fs-face-clip)" fill="#1A5FAD"/>
  <polygon points="23,52 23,22 77,22 50,52" clip-path="url(#fs-face-clip)" fill="#1A5FAD"/>
  <!-- Diagonal split line -->
  <line x1="23" y1="22" x2="77" y2="82" stroke="#FFFFFF" stroke-width="1.5" clip-path="url(#fs-face-clip)" opacity="0.6"/>
  <!-- Face border again -->
  <ellipse cx="50" cy="52" rx="27" ry="30" fill="none" stroke="#3A8CBF" stroke-width="1.8"/>
  <!-- Left eye socket - blue side -->
  <ellipse cx="37" cy="48" rx="8" ry="8" fill="#071828" stroke="#4AAED9" stroke-width="1.2"/>
  <!-- Left iris - blue -->
  <circle cx="37" cy="48" r="5.5" fill="#1565C0"/>
  <circle cx="37" cy="48" r="3" fill="#1A5FAD"/>
  <circle cx="37" cy="48" r="1.5" fill="#42A5F5"/>
  <circle cx="37" cy="48" r="0.6" fill="#071828"/>
  <circle cx="35" cy="46.5" r="0.9" fill="white" opacity="0.7"/>
  <!-- Right eye socket - green side -->
  <ellipse cx="63" cy="55" rx="8" ry="8" fill="#061208" stroke="#52B788" stroke-width="1.2"/>
  <!-- Right iris - green -->
  <circle cx="63" cy="55" r="5.5" fill="#1B4332"/>
  <circle cx="63" cy="55" r="3" fill="#2D6A4F"/>
  <circle cx="63" cy="55" r="1.5" fill="#52B788"/>
  <circle cx="63" cy="55" r="0.6" fill="#061208"/>
  <circle cx="61" cy="53.5" r="0.9" fill="white" opacity="0.7"/>
  <!-- Neutral mouth -->
  <path d="M38,70 Q50,73 62,70" stroke="#3A8CBF" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <!-- Nose -->
  <ellipse cx="50" cy="63" rx="2" ry="1.2" fill="#3A8CBF" opacity="0.5"/>
</svg>`,

  // 9. DATA-ENG — Data Engineer
  // Wide flat oval, dark purple, flowing data-stream iris, Y-fork antennae
  "DATA-ENG": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="deng-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0D0520"/>
      <stop offset="100%" stop-color="#050210"/>
    </radialGradient>
    <radialGradient id="deng-skin" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#7B2FBE"/>
      <stop offset="100%" stop-color="#3D0E6B"/>
    </radialGradient>
    <filter id="deng-glow">
      <feGaussianBlur stdDeviation="1.3" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#deng-bg)"/>
  <!-- Y-fork left antenna -->
  <line x1="38" y1="24" x2="38" y2="14" stroke="#7B2FBE" stroke-width="1.5"/>
  <line x1="38" y1="14" x2="33" y2="8" stroke="#9D4EDD" stroke-width="1.3"/>
  <line x1="38" y1="14" x2="43" y2="8" stroke="#9D4EDD" stroke-width="1.3"/>
  <circle cx="33" cy="7" r="2" fill="#C77DFF" filter="url(#deng-glow)"/>
  <circle cx="43" cy="7" r="2" fill="#C77DFF" filter="url(#deng-glow)"/>
  <!-- Y-fork right antenna -->
  <line x1="62" y1="24" x2="62" y2="14" stroke="#7B2FBE" stroke-width="1.5"/>
  <line x1="62" y1="14" x2="57" y2="8" stroke="#9D4EDD" stroke-width="1.3"/>
  <line x1="62" y1="14" x2="67" y2="8" stroke="#9D4EDD" stroke-width="1.3"/>
  <circle cx="57" cy="7" r="2" fill="#C77DFF" filter="url(#deng-glow)"/>
  <circle cx="67" cy="7" r="2" fill="#C77DFF" filter="url(#deng-glow)"/>
  <!-- Wide flat oval face -->
  <ellipse cx="50" cy="55" rx="34" ry="24" fill="url(#deng-skin)" stroke="#9D4EDD" stroke-width="1.8"/>
  <!-- Left eye socket -->
  <ellipse cx="35" cy="52" rx="8" ry="7.5" fill="#080114" stroke="#9D4EDD" stroke-width="1.2"/>
  <!-- Left iris - flowing data stream -->
  <circle cx="35" cy="52" r="5.5" fill="#1A0340"/>
  <path d="M29,51 Q32,50 35,52 Q38,54 41,53" stroke="#C77DFF" stroke-width="1.2" fill="none"/>
  <path d="M29,53 Q32,52 35,54 Q38,56 41,55" stroke="#9D4EDD" stroke-width="0.8" fill="none"/>
  <circle cx="35" cy="52" r="1.5" fill="#E0AAFF" opacity="0.9"/>
  <circle cx="35" cy="52" r="0.6" fill="#080114"/>
  <!-- Right eye socket -->
  <ellipse cx="65" cy="52" rx="8" ry="7.5" fill="#080114" stroke="#9D4EDD" stroke-width="1.2"/>
  <!-- Right iris - flowing data stream -->
  <circle cx="65" cy="52" r="5.5" fill="#1A0340"/>
  <path d="M59,51 Q62,50 65,52 Q68,54 71,53" stroke="#C77DFF" stroke-width="1.2" fill="none"/>
  <path d="M59,53 Q62,52 65,54 Q68,56 71,55" stroke="#9D4EDD" stroke-width="0.8" fill="none"/>
  <circle cx="65" cy="52" r="1.5" fill="#E0AAFF" opacity="0.9"/>
  <circle cx="65" cy="52" r="0.6" fill="#080114"/>
  <!-- Neutral expression -->
  <path d="M39,65 Q50,67 61,65" stroke="#7B2FBE" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <!-- Nose -->
  <ellipse cx="50" cy="60" rx="2" ry="1.2" fill="#5A189A" opacity="0.6"/>
  <!-- Data particle side marks -->
  <circle cx="17" cy="52" r="1.2" fill="#C77DFF" opacity="0.5"/>
  <circle cx="83" cy="52" r="1.2" fill="#C77DFF" opacity="0.5"/>
  <circle cx="15" cy="56" r="0.8" fill="#9D4EDD" opacity="0.4"/>
  <circle cx="85" cy="56" r="0.8" fill="#9D4EDD" opacity="0.4"/>
</svg>`,

  // 10. JR-FE — Junior Frontend
  // Baby-faced large head, bright cyan, huge curious eyes, star-struck pupils, short antennae, wide smile
  "JR-FE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="jfe-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#071828"/>
      <stop offset="100%" stop-color="#020a14"/>
    </radialGradient>
    <radialGradient id="jfe-skin" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#00E5FF"/>
      <stop offset="100%" stop-color="#00ACC1"/>
    </radialGradient>
    <filter id="jfe-glow">
      <feGaussianBlur stdDeviation="1.5" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#jfe-bg)"/>
  <!-- Short tiny left antenna -->
  <line x1="40" y1="20" x2="38" y2="13" stroke="#00E5FF" stroke-width="1.2"/>
  <circle cx="38" cy="12" r="1.8" fill="#FFD700" filter="url(#jfe-glow)"/>
  <!-- Short tiny right antenna -->
  <line x1="60" y1="20" x2="62" y2="13" stroke="#00E5FF" stroke-width="1.2"/>
  <circle cx="62" cy="12" r="1.8" fill="#FFD700" filter="url(#jfe-glow)"/>
  <!-- Baby-faced large head -->
  <ellipse cx="50" cy="56" rx="30" ry="33" fill="url(#jfe-skin)" stroke="#00ACC1" stroke-width="1.8"/>
  <!-- Left eye socket - huge curious -->
  <ellipse cx="37" cy="52" rx="11" ry="12" fill="#071828" stroke="#00E5FF" stroke-width="1.3"/>
  <!-- Left iris - star-struck star pupil -->
  <circle cx="37" cy="52" r="8" fill="#0A2A3A"/>
  <polygon points="37,46 38.5,50 43,50 39.5,52.5 41,57 37,54 33,57 34.5,52.5 31,50 35.5,50" fill="#FFD700" opacity="0.9"/>
  <circle cx="37" cy="52" r="1.5" fill="#FFFFFF" opacity="0.5"/>
  <!-- Right eye socket - huge curious -->
  <ellipse cx="63" cy="52" rx="11" ry="12" fill="#071828" stroke="#00E5FF" stroke-width="1.3"/>
  <!-- Right iris - star-struck -->
  <circle cx="63" cy="52" r="8" fill="#0A2A3A"/>
  <polygon points="63,46 64.5,50 69,50 65.5,52.5 67,57 63,54 59,57 60.5,52.5 57,50 61.5,50" fill="#FFD700" opacity="0.9"/>
  <circle cx="63" cy="52" r="1.5" fill="#FFFFFF" opacity="0.5"/>
  <!-- Wide big smile -->
  <path d="M33,75 Q50,88 67,75" stroke="#00819A" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Rosy baby cheeks -->
  <ellipse cx="27" cy="65" rx="5" ry="4" fill="#00E5FF" opacity="0.35"/>
  <ellipse cx="73" cy="65" rx="5" ry="4" fill="#00E5FF" opacity="0.35"/>
  <!-- Tiny nose -->
  <circle cx="50" cy="67" r="1.5" fill="#00ACC1" opacity="0.5"/>
</svg>`,

  // 11. JR-BE — Junior Backend
  // Round young face, fresh green, slightly smaller eyes, confused/eager, one shorter antenna
  "JR-BE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="jbe-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#061208"/>
      <stop offset="100%" stop-color="#030806"/>
    </radialGradient>
    <radialGradient id="jbe-skin" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#69EF8C"/>
      <stop offset="100%" stop-color="#2DBD52"/>
    </radialGradient>
    <filter id="jbe-glow">
      <feGaussianBlur stdDeviation="1.2" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#jbe-bg)"/>
  <!-- Left antenna - taller (more experienced side) -->
  <line x1="38" y1="23" x2="35" y2="9" stroke="#69EF8C" stroke-width="1.4"/>
  <circle cx="35" cy="8" r="2.2" fill="#A8F5BF" filter="url(#jbe-glow)"/>
  <!-- Right antenna - shorter (still learning) -->
  <line x1="62" y1="23" x2="64" y2="14" stroke="#69EF8C" stroke-width="1.4"/>
  <circle cx="64" cy="13" r="1.8" fill="#A8F5BF" filter="url(#jbe-glow)"/>
  <!-- Round young face -->
  <circle cx="50" cy="54" r="27" fill="url(#jbe-skin)" stroke="#2DBD52" stroke-width="1.8"/>
  <!-- Left eye socket -->
  <ellipse cx="38" cy="50" rx="8" ry="8.5" fill="#061208" stroke="#69EF8C" stroke-width="1.1"/>
  <!-- Left iris - confused but eager -->
  <circle cx="38" cy="50" r="5.5" fill="#0B200E"/>
  <circle cx="38" cy="50" r="3.5" fill="#1A5427"/>
  <circle cx="38" cy="50" r="1.8" fill="#40C26A"/>
  <circle cx="38" cy="50" r="0.7" fill="#061208"/>
  <circle cx="36" cy="48.5" r="0.9" fill="white" opacity="0.6"/>
  <!-- Right eye socket -->
  <ellipse cx="62" cy="50" rx="8" ry="8.5" fill="#061208" stroke="#69EF8C" stroke-width="1.1"/>
  <!-- Right iris -->
  <circle cx="62" cy="50" r="5.5" fill="#0B200E"/>
  <circle cx="62" cy="50" r="3.5" fill="#1A5427"/>
  <circle cx="62" cy="50" r="1.8" fill="#40C26A"/>
  <circle cx="62" cy="50" r="0.7" fill="#061208"/>
  <circle cx="60" cy="48.5" r="0.9" fill="white" opacity="0.6"/>
  <!-- Confused/eager slight frown + question mark -->
  <path d="M40,67 Q50,72 60,67" stroke="#1E8A38" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Question marks near head indicating confusion -->
  <text x="17" y="42" font-family="monospace" font-size="8" fill="#69EF8C" opacity="0.5">?</text>
  <text x="78" y="42" font-family="monospace" font-size="8" fill="#69EF8C" opacity="0.5">?</text>
  <!-- Cheek spots -->
  <circle cx="30" cy="58" r="3.5" fill="#69EF8C" opacity="0.3"/>
  <circle cx="70" cy="58" r="3.5" fill="#69EF8C" opacity="0.3"/>
  <!-- Tiny nose -->
  <ellipse cx="50" cy="61" rx="1.8" ry="1.1" fill="#2DBD52" opacity="0.5"/>
</svg>`,

  // 12. JR-MOB — Junior Mobile
  // Cute small oval, light purple, large round eyes, swirly curious pupils, app icons floating
  "JR-MOB": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="jmob-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#130820"/>
      <stop offset="100%" stop-color="#07030F"/>
    </radialGradient>
    <radialGradient id="jmob-skin" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#C9A8FF"/>
      <stop offset="100%" stop-color="#9B59D6"/>
    </radialGradient>
    <filter id="jmob-glow">
      <feGaussianBlur stdDeviation="1.3" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#jmob-bg)"/>
  <!-- App icon shapes floating near head -->
  <rect x="11" y="18" width="10" height="10" rx="3" fill="#FF6B9D" opacity="0.5"/>
  <rect x="79" y="18" width="10" height="10" rx="3" fill="#FFD700" opacity="0.5"/>
  <rect x="13" y="32" width="7" height="7" rx="2" fill="#00E5FF" opacity="0.4"/>
  <rect x="80" y="32" width="7" height="7" rx="2" fill="#69EF8C" opacity="0.4"/>
  <!-- Left antenna -->
  <line x1="40" y1="21" x2="38" y2="12" stroke="#C9A8FF" stroke-width="1.3"/>
  <circle cx="38" cy="11" r="2" fill="#E0AAFF" filter="url(#jmob-glow)"/>
  <!-- Right antenna -->
  <line x1="60" y1="21" x2="62" y2="12" stroke="#C9A8FF" stroke-width="1.3"/>
  <circle cx="62" cy="11" r="2" fill="#E0AAFF" filter="url(#jmob-glow)"/>
  <!-- Cute small oval face -->
  <ellipse cx="50" cy="55" rx="26" ry="30" fill="url(#jmob-skin)" stroke="#9B59D6" stroke-width="1.8"/>
  <!-- Left eye socket - large round -->
  <circle cx="37" cy="51" r="9.5" fill="#0D0520" stroke="#C9A8FF" stroke-width="1.2"/>
  <!-- Left iris - swirly curious pupil -->
  <circle cx="37" cy="51" r="7" fill="#1A0840"/>
  <path d="M37,47 Q41,48 41,51 Q41,54 38,55 Q35,56 34,54 Q33,52 34,50 Q35,48 37,47Z" fill="#9B59D6" opacity="0.6"/>
  <path d="M37,48.5 Q40,49.5 40,51.5 Q39.5,53 37,53.5" stroke="#E0AAFF" stroke-width="0.8" fill="none"/>
  <circle cx="37" cy="51" r="1.8" fill="#C9A8FF" opacity="0.9"/>
  <circle cx="37" cy="51" r="0.7" fill="#0D0520"/>
  <circle cx="35" cy="49.5" r="1" fill="white" opacity="0.6"/>
  <!-- Right eye socket -->
  <circle cx="63" cy="51" r="9.5" fill="#0D0520" stroke="#C9A8FF" stroke-width="1.2"/>
  <!-- Right iris - swirly -->
  <circle cx="63" cy="51" r="7" fill="#1A0840"/>
  <path d="M63,47 Q67,48 67,51 Q67,54 64,55 Q61,56 60,54 Q59,52 60,50 Q61,48 63,47Z" fill="#9B59D6" opacity="0.6"/>
  <path d="M63,48.5 Q66,49.5 66,51.5 Q65.5,53 63,53.5" stroke="#E0AAFF" stroke-width="0.8" fill="none"/>
  <circle cx="63" cy="51" r="1.8" fill="#C9A8FF" opacity="0.9"/>
  <circle cx="63" cy="51" r="0.7" fill="#0D0520"/>
  <circle cx="61" cy="49.5" r="1" fill="white" opacity="0.6"/>
  <!-- Cute smile -->
  <path d="M38,70 Q50,80 62,70" stroke="#7B2FBE" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  <!-- Tiny nose -->
  <circle cx="50" cy="62" r="1.5" fill="#9B59D6" opacity="0.5"/>
  <!-- Rosy cheeks -->
  <ellipse cx="28" cy="60" r="4.5" fill="#C9A8FF" opacity="0.3"/>
  <ellipse cx="72" cy="60" r="4.5" fill="#C9A8FF" opacity="0.3"/>
</svg>`,

  // 13. JR-DATA-ENG — Junior Data Engineer
  // Wide youthful face, pale indigo, big eyes with question-mark pupils, messy bent antennae
  "JR-DATA-ENG": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="jde-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0D0A28"/>
      <stop offset="100%" stop-color="#050316"/>
    </radialGradient>
    <radialGradient id="jde-skin" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#AABEFF"/>
      <stop offset="100%" stop-color="#667EEA"/>
    </radialGradient>
    <filter id="jde-glow">
      <feGaussianBlur stdDeviation="1.2" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#jde-bg)"/>
  <!-- Messy left antenna - bent/crooked -->
  <path d="M37,23 Q28,16 32,8" stroke="#AABEFF" stroke-width="1.4" fill="none" stroke-linecap="round"/>
  <circle cx="32" cy="7" r="2" fill="#C4B5FD" filter="url(#jde-glow)"/>
  <!-- Messy right antenna - bent other way -->
  <path d="M63,23 Q74,14 70,8" stroke="#AABEFF" stroke-width="1.4" fill="none" stroke-linecap="round"/>
  <circle cx="70" cy="7" r="2" fill="#C4B5FD" filter="url(#jde-glow)"/>
  <!-- Wide youthful face -->
  <ellipse cx="50" cy="54" rx="31" ry="28" fill="url(#jde-skin)" stroke="#667EEA" stroke-width="1.8"/>
  <!-- Left eye socket - big -->
  <ellipse cx="36" cy="51" rx="9.5" ry="10" fill="#070416" stroke="#AABEFF" stroke-width="1.2"/>
  <!-- Left iris - question mark pupil -->
  <circle cx="36" cy="51" r="7" fill="#0F0830"/>
  <text x="36" y="55" font-family="serif" font-size="11" font-weight="bold" fill="#AABEFF" text-anchor="middle" opacity="0.9">?</text>
  <circle cx="36" cy="51" r="0.8" fill="#0F0830" opacity="0"/>
  <circle cx="34" cy="49" r="0.9" fill="white" opacity="0.5"/>
  <!-- Right eye socket - big -->
  <ellipse cx="64" cy="51" rx="9.5" ry="10" fill="#070416" stroke="#AABEFF" stroke-width="1.2"/>
  <!-- Right iris - question mark -->
  <circle cx="64" cy="51" r="7" fill="#0F0830"/>
  <text x="64" y="55" font-family="serif" font-size="11" font-weight="bold" fill="#AABEFF" text-anchor="middle" opacity="0.9">?</text>
  <circle cx="62" cy="49" r="0.9" fill="white" opacity="0.5"/>
  <!-- Eager smile -->
  <path d="M38,69 Q50,78 62,69" stroke="#4A63C8" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Messy data dots floating around head -->
  <circle cx="19" cy="40" r="1.5" fill="#AABEFF" opacity="0.4"/>
  <circle cx="22" cy="52" r="1" fill="#667EEA" opacity="0.35"/>
  <circle cx="81" cy="40" r="1.5" fill="#AABEFF" opacity="0.4"/>
  <circle cx="78" cy="52" r="1" fill="#667EEA" opacity="0.35"/>
  <!-- Tiny nose -->
  <ellipse cx="50" cy="62" rx="2" ry="1.2" fill="#4A63C8" opacity="0.5"/>
  <!-- Cheek blush -->
  <ellipse cx="27" cy="60" r="4" fill="#AABEFF" opacity="0.3"/>
  <ellipse cx="73" cy="60" r="4" fill="#AABEFF" opacity="0.3"/>
</svg>`,

  // 14. TECH-LEAD — Tech Lead
  // Strong oval, deep blue-black, gold iris with crown-ring, leadership antenna crown
  "TECH-LEAD": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="tl-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#050A1E"/>
      <stop offset="100%" stop-color="#020510"/>
    </radialGradient>
    <radialGradient id="tl-skin" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#1A2B5E"/>
      <stop offset="100%" stop-color="#0A1235"/>
    </radialGradient>
    <radialGradient id="tl-iris" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#FFD700"/>
      <stop offset="100%" stop-color="#B8860B"/>
    </radialGradient>
    <filter id="tl-glow">
      <feGaussianBlur stdDeviation="1.5" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#tl-bg)"/>
  <!-- Leadership antenna crown - 3 spikes -->
  <line x1="38" y1="22" x2="32" y2="9" stroke="#1A2B5E" stroke-width="2"/>
  <line x1="50" y1="20" x2="50" y2="6" stroke="#1A2B5E" stroke-width="2.2"/>
  <line x1="62" y1="22" x2="68" y2="9" stroke="#1A2B5E" stroke-width="2"/>
  <polygon points="32,9 29,14 35,14" fill="#FFD700" filter="url(#tl-glow)"/>
  <polygon points="50,6 47,11 53,11" fill="#FFD700" filter="url(#tl-glow)"/>
  <polygon points="68,9 65,14 71,14" fill="#FFD700" filter="url(#tl-glow)"/>
  <!-- Strong oval face -->
  <ellipse cx="50" cy="54" rx="27" ry="30" fill="url(#tl-skin)" stroke="#2A3F8F" stroke-width="2"/>
  <!-- Left eye socket - authoritative -->
  <ellipse cx="37" cy="50" rx="8.5" ry="8" fill="#020510" stroke="#2A3F8F" stroke-width="1.3"/>
  <!-- Left iris - gold with crown ring -->
  <circle cx="37" cy="50" r="6" fill="url(#tl-iris)"/>
  <circle cx="37" cy="50" r="4" fill="#0A1235"/>
  <circle cx="37" cy="50" r="5.5" fill="none" stroke="#FFD700" stroke-width="0.8" stroke-dasharray="2,1"/>
  <circle cx="37" cy="50" r="2" fill="#FFD700" opacity="0.9"/>
  <circle cx="37" cy="50" r="0.8" fill="#020510"/>
  <circle cx="35" cy="48.5" r="0.9" fill="white" opacity="0.6"/>
  <!-- Right eye socket -->
  <ellipse cx="63" cy="50" rx="8.5" ry="8" fill="#020510" stroke="#2A3F8F" stroke-width="1.3"/>
  <!-- Right iris - gold with crown ring -->
  <circle cx="63" cy="50" r="6" fill="url(#tl-iris)"/>
  <circle cx="63" cy="50" r="4" fill="#0A1235"/>
  <circle cx="63" cy="50" r="5.5" fill="none" stroke="#FFD700" stroke-width="0.8" stroke-dasharray="2,1"/>
  <circle cx="63" cy="50" r="2" fill="#FFD700" opacity="0.9"/>
  <circle cx="63" cy="50" r="0.8" fill="#020510"/>
  <circle cx="61" cy="48.5" r="0.9" fill="white" opacity="0.6"/>
  <!-- Authoritative brow lines -->
  <line x1="30" y1="42" x2="46" y2="43" stroke="#0A1A60" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="54" y1="43" x2="70" y2="42" stroke="#0A1A60" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Composed expression - slight upward -->
  <path d="M38,67 Q50,73 62,67" stroke="#2A3F8F" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Nose -->
  <ellipse cx="50" cy="60" rx="2" ry="1.2" fill="#1A2B5E" opacity="0.6"/>
  <!-- Jaw mark -->
  <path d="M30,70 Q50,82 70,70" stroke="#1A2B5E" stroke-width="1.2" fill="none" opacity="0.4"/>
</svg>`,

  // 15. VP-INFRA — VP Infrastructure
  // Angular powerful face, steel blue, server-rack iris, command expression, infrastructure tower marks
  "VP-INFRA": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="vpi-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#07101C"/>
      <stop offset="100%" stop-color="#030810"/>
    </radialGradient>
    <linearGradient id="vpi-skin" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4A7FA5"/>
      <stop offset="100%" stop-color="#2C5F80"/>
    </linearGradient>
    <filter id="vpi-glow">
      <feGaussianBlur stdDeviation="1.2" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#vpi-bg)"/>
  <!-- Infrastructure tower marks rising from head (no antennae) -->
  <rect x="32" y="10" width="5" height="14" rx="1.5" fill="#2C5F80" stroke="#4A7FA5" stroke-width="0.8"/>
  <rect x="32" y="10" width="5" height="3" rx="1" fill="#4A7FA5"/>
  <rect x="40" y="6" width="5" height="18" rx="1.5" fill="#2C5F80" stroke="#4A7FA5" stroke-width="0.8"/>
  <rect x="40" y="6" width="5" height="3" rx="1" fill="#4A7FA5"/>
  <rect x="48" y="4" width="5" height="20" rx="1.5" fill="#2C5F80" stroke="#4A7FA5" stroke-width="0.8"/>
  <rect x="48" y="4" width="5" height="3" rx="1" fill="#5B9BD5" filter="url(#vpi-glow)"/>
  <rect x="56" y="6" width="5" height="18" rx="1.5" fill="#2C5F80" stroke="#4A7FA5" stroke-width="0.8"/>
  <rect x="56" y="6" width="5" height="3" rx="1" fill="#4A7FA5"/>
  <rect x="64" y="10" width="5" height="14" rx="1.5" fill="#2C5F80" stroke="#4A7FA5" stroke-width="0.8"/>
  <rect x="64" y="10" width="5" height="3" rx="1" fill="#4A7FA5"/>
  <!-- Angular powerful face -->
  <polygon points="18,26 82,26 82,82 18,82" rx="4" fill="url(#vpi-skin)" stroke="#4A7FA5" stroke-width="1.8"/>
  <rect x="18" y="26" width="64" height="56" rx="5" fill="url(#vpi-skin)" stroke="#4A7FA5" stroke-width="1.8"/>
  <!-- Left eye socket - precise -->
  <rect x="23" y="40" width="22" height="16" rx="2" fill="#050D18" stroke="#4A7FA5" stroke-width="1.2"/>
  <!-- Left iris - server rack rows -->
  <rect x="25" y="42" width="18" height="2.5" rx="1" fill="#2C5F80" stroke="#5B9BD5" stroke-width="0.5"/>
  <rect x="25" y="46" width="18" height="2.5" rx="1" fill="#2C5F80" stroke="#5B9BD5" stroke-width="0.5"/>
  <rect x="25" y="50" width="18" height="2.5" rx="1" fill="#2C5F80" stroke="#5B9BD5" stroke-width="0.5"/>
  <circle cx="40" cy="43.3" r="0.9" fill="#22C55E"/>
  <circle cx="40" cy="47.3" r="0.9" fill="#F59E0B"/>
  <circle cx="40" cy="51.3" r="0.9" fill="#22C55E"/>
  <!-- Right eye socket -->
  <rect x="55" y="40" width="22" height="16" rx="2" fill="#050D18" stroke="#4A7FA5" stroke-width="1.2"/>
  <!-- Right iris - server rack rows -->
  <rect x="57" y="42" width="18" height="2.5" rx="1" fill="#2C5F80" stroke="#5B9BD5" stroke-width="0.5"/>
  <rect x="57" y="46" width="18" height="2.5" rx="1" fill="#2C5F80" stroke="#5B9BD5" stroke-width="0.5"/>
  <rect x="57" y="50" width="18" height="2.5" rx="1" fill="#2C5F80" stroke="#5B9BD5" stroke-width="0.5"/>
  <circle cx="72" cy="43.3" r="0.9" fill="#22C55E"/>
  <circle cx="72" cy="47.3" r="0.9" fill="#22C55E"/>
  <circle cx="72" cy="51.3" r="0.9" fill="#EF4444"/>
  <!-- Command expression - firm straight mouth -->
  <line x1="30" y1="70" x2="70" y2="70" stroke="#2C5F80" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Power brow -->
  <line x1="23" y1="38" x2="45" y2="39" stroke="#1C3F5C" stroke-width="3" stroke-linecap="round"/>
  <line x1="55" y1="39" x2="77" y2="38" stroke="#1C3F5C" stroke-width="3" stroke-linecap="round"/>
  <!-- Nose -->
  <rect x="47" y="63" width="6" height="4" rx="1.5" fill="#2C5F80" opacity="0.5"/>
</svg>`,

  // 16. DIR-CLOUD — Director of Cloud
  // Round wide face, cloud-white skin, cloud-computing icon iris, fluffy antenna puffs
  "DIR-CLOUD": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="dc-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0A1525"/>
      <stop offset="100%" stop-color="#040A14"/>
    </radialGradient>
    <radialGradient id="dc-skin" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#D6E8F0"/>
      <stop offset="100%" stop-color="#B0C4DE"/>
    </radialGradient>
    <radialGradient id="dc-iris" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#87CEEB"/>
      <stop offset="100%" stop-color="#4A90D9"/>
    </radialGradient>
    <filter id="dc-glow">
      <feGaussianBlur stdDeviation="1.5" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#dc-bg)"/>
  <!-- Fluffy cloud puff left antenna -->
  <line x1="37" y1="23" x2="30" y2="17" stroke="#B0C4DE" stroke-width="1.3"/>
  <ellipse cx="26" cy="14" rx="4" ry="3" fill="#B0C4DE" opacity="0.8"/>
  <ellipse cx="30" cy="12" rx="4" ry="3.2" fill="#D6E8F0" opacity="0.9"/>
  <ellipse cx="34" cy="13" rx="3" ry="2.5" fill="#B0C4DE" opacity="0.7"/>
  <!-- Fluffy cloud puff right antenna -->
  <line x1="63" y1="23" x2="70" y2="17" stroke="#B0C4DE" stroke-width="1.3"/>
  <ellipse cx="74" cy="14" rx="4" ry="3" fill="#B0C4DE" opacity="0.8"/>
  <ellipse cx="70" cy="12" rx="4" ry="3.2" fill="#D6E8F0" opacity="0.9"/>
  <ellipse cx="66" cy="13" rx="3" ry="2.5" fill="#B0C4DE" opacity="0.7"/>
  <!-- Round wide face -->
  <ellipse cx="50" cy="54" rx="30" ry="28" fill="url(#dc-skin)" stroke="#8AAFC8" stroke-width="1.8"/>
  <!-- Left eye socket -->
  <ellipse cx="36" cy="50" rx="9" ry="9" fill="#0A1A2E" stroke="#87CEEB" stroke-width="1.2"/>
  <!-- Left iris - cloud computing icon -->
  <circle cx="36" cy="50" r="6.5" fill="url(#dc-iris)"/>
  <!-- Cloud shape in iris -->
  <ellipse cx="36" cy="52" rx="4" ry="2.5" fill="#1A3A5C" opacity="0.7"/>
  <ellipse cx="33" cy="50" rx="2.5" ry="2" fill="#2A5A8C" opacity="0.6"/>
  <ellipse cx="39" cy="50" rx="2.5" ry="2" fill="#2A5A8C" opacity="0.6"/>
  <ellipse cx="36" cy="48.5" rx="2" ry="1.8" fill="#3A7AAC" opacity="0.5"/>
  <circle cx="36" cy="50" r="1.2" fill="white" opacity="0.8"/>
  <circle cx="36" cy="50" r="0.5" fill="#0A1A2E"/>
  <!-- Right eye socket -->
  <ellipse cx="64" cy="50" rx="9" ry="9" fill="#0A1A2E" stroke="#87CEEB" stroke-width="1.2"/>
  <!-- Right iris - cloud computing -->
  <circle cx="64" cy="50" r="6.5" fill="url(#dc-iris)"/>
  <ellipse cx="64" cy="52" rx="4" ry="2.5" fill="#1A3A5C" opacity="0.7"/>
  <ellipse cx="61" cy="50" rx="2.5" ry="2" fill="#2A5A8C" opacity="0.6"/>
  <ellipse cx="67" cy="50" rx="2.5" ry="2" fill="#2A5A8C" opacity="0.6"/>
  <ellipse cx="64" cy="48.5" rx="2" ry="1.8" fill="#3A7AAC" opacity="0.5"/>
  <circle cx="64" cy="50" r="1.2" fill="white" opacity="0.8"/>
  <circle cx="64" cy="50" r="0.5" fill="#0A1A2E"/>
  <!-- Friendly expression -->
  <path d="M37,68 Q50,77 63,68" stroke="#7AAEC8" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Nose -->
  <ellipse cx="50" cy="61" rx="2" ry="1.2" fill="#8AAFC8" opacity="0.5"/>
  <!-- Cheek cloud wisps -->
  <path d="M19,54 Q22,51 25,53" stroke="#B0C4DE" stroke-width="1.5" fill="none" opacity="0.5"/>
  <path d="M75,54 Q78,51 81,53" stroke="#B0C4DE" stroke-width="1.5" fill="none" opacity="0.5"/>
</svg>`,

  // 17. DIR-SRE — Director of SRE
  // Tactical angular face, alert-amber skin, uptime-monitor graph iris, radar dish forehead
  "DIR-SRE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="sre-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1A1005"/>
      <stop offset="100%" stop-color="#0A0803"/>
    </radialGradient>
    <radialGradient id="sre-skin" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#D4890A"/>
      <stop offset="100%" stop-color="#8B5E0A"/>
    </radialGradient>
    <filter id="sre-glow">
      <feGaussianBlur stdDeviation="1.3" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#sre-bg)"/>
  <!-- Tactical antennae -->
  <line x1="36" y1="23" x2="30" y2="12" stroke="#D4890A" stroke-width="1.5"/>
  <rect x="27" y="10" width="6" height="4" rx="1" fill="#F59E0B" stroke="#D4890A" stroke-width="0.7"/>
  <line x1="64" y1="23" x2="70" y2="12" stroke="#D4890A" stroke-width="1.5"/>
  <rect x="67" y="10" width="6" height="4" rx="1" fill="#F59E0B" stroke="#D4890A" stroke-width="0.7"/>
  <!-- Tactical angular face -->
  <polygon points="19,27 81,27 87,82 13,82" fill="url(#sre-skin)" stroke="#D4890A" stroke-width="0.5"/>
  <rect x="19" y="27" width="62" height="55" rx="5" fill="url(#sre-skin)" stroke="#D4890A" stroke-width="1.8"/>
  <!-- Radar dish marking on forehead -->
  <path d="M38,33 Q50,28 62,33" stroke="#F59E0B" stroke-width="1.5" fill="none" opacity="0.8"/>
  <path d="M41,30 Q50,26 59,30" stroke="#D4890A" stroke-width="1" fill="none" opacity="0.6"/>
  <circle cx="50" cy="29" r="2" fill="#F59E0B" filter="url(#sre-glow)"/>
  <line x1="50" y1="31" x2="50" y2="36" stroke="#F59E0B" stroke-width="0.8"/>
  <!-- Left eye socket -->
  <ellipse cx="36" cy="52" rx="9" ry="8" fill="#0D0700" stroke="#D4890A" stroke-width="1.2"/>
  <!-- Left iris - uptime monitor graph -->
  <rect x="27" y="44" width="18" height="16" rx="2" fill="#1A0D00"/>
  <polyline points="28,57 31,52 34,55 37,48 40,52 43,54 45,50" stroke="#F59E0B" stroke-width="1.2" fill="none"/>
  <circle cx="36" cy="52" r="1.5" fill="#F59E0B" opacity="0.8"/>
  <!-- Right eye socket -->
  <ellipse cx="64" cy="52" rx="9" ry="8" fill="#0D0700" stroke="#D4890A" stroke-width="1.2"/>
  <!-- Right iris - uptime graph -->
  <rect x="55" y="44" width="18" height="16" rx="2" fill="#1A0D00"/>
  <polyline points="56,57 59,50 62,54 65,47 68,51 71,53 73,49" stroke="#F59E0B" stroke-width="1.2" fill="none"/>
  <circle cx="64" cy="52" r="1.5" fill="#F59E0B" opacity="0.8"/>
  <!-- Stern vigilant expression -->
  <path d="M37,70 Q50,68 63,70" stroke="#8B5E0A" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Alert brow lines - angled inward -->
  <line x1="27" y1="44" x2="43" y2="46" stroke="#5C3D08" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="57" y1="46" x2="73" y2="44" stroke="#5C3D08" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Nose -->
  <ellipse cx="50" cy="63" rx="2.2" ry="1.3" fill="#8B5E0A" opacity="0.6"/>
</svg>`,

  // 18. DIR-PLATFORM — Director of Platform
  // Solid hexagonal face, platform-grey-blue, hexagon iris, steady composed expression
  "DIR-PLATFORM": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="dp-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0C1220"/>
      <stop offset="100%" stop-color="#060A14"/>
    </radialGradient>
    <linearGradient id="dp-skin" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#5A7FA5"/>
      <stop offset="100%" stop-color="#35587A"/>
    </linearGradient>
    <filter id="dp-glow">
      <feGaussianBlur stdDeviation="1.1" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#dp-bg)"/>
  <!-- Platform antenna marks - two stubs -->
  <rect x="40" y="13" width="8" height="10" rx="2" fill="#35587A" stroke="#5A7FA5" stroke-width="0.8"/>
  <rect x="52" y="13" width="8" height="10" rx="2" fill="#35587A" stroke="#5A7FA5" stroke-width="0.8"/>
  <!-- Solid hexagonal face -->
  <polygon points="50,22 78,38 78,66 50,82 22,66 22,38" fill="url(#dp-skin)" stroke="#5A7FA5" stroke-width="1.8"/>
  <!-- Left eye socket -->
  <circle cx="37" cy="52" r="10" fill="#080E1C" stroke="#5A7FA5" stroke-width="1.2"/>
  <!-- Left iris - hexagon logo -->
  <polygon points="37,44 43,48 43,56 37,60 31,56 31,48" fill="#1A2E44" stroke="#5A7FA5" stroke-width="1"/>
  <polygon points="37,47 41,49 41,55 37,57 33,55 33,49" fill="#2A4A66" stroke="#7AA0C8" stroke-width="0.7"/>
  <circle cx="37" cy="52" r="2" fill="#7AA0C8" opacity="0.9"/>
  <circle cx="37" cy="52" r="0.8" fill="#080E1C"/>
  <!-- Right eye socket -->
  <circle cx="63" cy="52" r="10" fill="#080E1C" stroke="#5A7FA5" stroke-width="1.2"/>
  <!-- Right iris - hexagon -->
  <polygon points="63,44 69,48 69,56 63,60 57,56 57,48" fill="#1A2E44" stroke="#5A7FA5" stroke-width="1"/>
  <polygon points="63,47 67,49 67,55 63,57 59,55 59,49" fill="#2A4A66" stroke="#7AA0C8" stroke-width="0.7"/>
  <circle cx="63" cy="52" r="2" fill="#7AA0C8" opacity="0.9"/>
  <circle cx="63" cy="52" r="0.8" fill="#080E1C"/>
  <!-- Steady composed expression -->
  <line x1="38" y1="67" x2="62" y2="67" stroke="#5A7FA5" stroke-width="2" stroke-linecap="round"/>
  <!-- Power brows -->
  <line x1="29" y1="44" x2="44" y2="45" stroke="#2A3F5C" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="56" y1="45" x2="71" y2="44" stroke="#2A3F5C" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Nose -->
  <ellipse cx="50" cy="60" rx="2" ry="1.2" fill="#35587A" opacity="0.6"/>
  <!-- Hex pattern chin mark -->
  <polygon points="50,72 53,73.6 53,77 50,78.6 47,77 47,73.6" fill="#35587A" opacity="0.5" stroke="#5A7FA5" stroke-width="0.5"/>
</svg>`,

  // 19. MGR-DEVOPS — DevOps Manager
  // Rugged face, dark olive, infinity-loop iris, pipeline tubes wrapping head
  "MGR-DEVOPS": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="mdo-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0C1008"/>
      <stop offset="100%" stop-color="#060803"/>
    </radialGradient>
    <radialGradient id="mdo-skin" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#6B7A4A"/>
      <stop offset="100%" stop-color="#3D4A26"/>
    </radialGradient>
    <filter id="mdo-glow">
      <feGaussianBlur stdDeviation="1.2" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#mdo-bg)"/>
  <!-- Pipeline tubes wrapping from antennae around head -->
  <!-- Left pipeline tube -->
  <path d="M36,23 Q28,16 20,20 Q12,24 14,35 Q16,46 20,50" stroke="#6B7A4A" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M36,23 Q28,16 20,20 Q12,24 14,35 Q16,46 20,50" stroke="#8FA362" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Right pipeline tube -->
  <path d="M64,23 Q72,16 80,20 Q88,24 86,35 Q84,46 80,50" stroke="#6B7A4A" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M64,23 Q72,16 80,20 Q88,24 86,35 Q84,46 80,50" stroke="#8FA362" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Connector dots on pipeline -->
  <circle cx="14" cy="35" r="2" fill="#8FA362" filter="url(#mdo-glow)"/>
  <circle cx="86" cy="35" r="2" fill="#8FA362" filter="url(#mdo-glow)"/>
  <!-- Rugged face -->
  <ellipse cx="50" cy="54" rx="26" ry="29" fill="url(#mdo-skin)" stroke="#6B7A4A" stroke-width="1.8"/>
  <!-- Left eye socket -->
  <ellipse cx="37" cy="50" rx="8.5" ry="8" fill="#080A04" stroke="#6B7A4A" stroke-width="1.2"/>
  <!-- Left iris - infinity loop symbol -->
  <circle cx="37" cy="50" r="6.5" fill="#121A08"/>
  <!-- Infinity symbol approximation -->
  <path d="M31,50 Q33,47 36,50 Q38,52 41,50 Q38,48 36,50 Q33,53 31,50Z" fill="#8FA362" opacity="0.8"/>
  <path d="M41,50 Q39,47 36,50 Q34,52 31,50 Q34,48 36,50 Q39,53 41,50Z" fill="#6B7A4A" opacity="0.6"/>
  <circle cx="37" cy="50" r="1.3" fill="#A8C475" opacity="0.9"/>
  <circle cx="37" cy="50" r="0.5" fill="#080A04"/>
  <!-- Right eye socket -->
  <ellipse cx="63" cy="50" rx="8.5" ry="8" fill="#080A04" stroke="#6B7A4A" stroke-width="1.2"/>
  <!-- Right iris - infinity loop -->
  <circle cx="63" cy="50" r="6.5" fill="#121A08"/>
  <path d="M57,50 Q59,47 62,50 Q64,52 67,50 Q64,48 62,50 Q59,53 57,50Z" fill="#8FA362" opacity="0.8"/>
  <path d="M67,50 Q65,47 62,50 Q60,52 57,50 Q60,48 62,50 Q65,53 67,50Z" fill="#6B7A4A" opacity="0.6"/>
  <circle cx="63" cy="50" r="1.3" fill="#A8C475" opacity="0.9"/>
  <circle cx="63" cy="50" r="0.5" fill="#080A04"/>
  <!-- Tough expression -->
  <path d="M38,67 Q50,65 62,67" stroke="#3D4A26" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Rugged brow -->
  <line x1="29" y1="42" x2="45" y2="44" stroke="#2A3018" stroke-width="3" stroke-linecap="round"/>
  <line x1="55" y1="44" x2="71" y2="42" stroke="#2A3018" stroke-width="3" stroke-linecap="round"/>
  <!-- Nose -->
  <ellipse cx="50" cy="60" rx="2.2" ry="1.4" fill="#3D4A26" opacity="0.6"/>
  <!-- Jaw scar/mark -->
  <line x1="42" y1="73" x2="46" y2="76" stroke="#3D4A26" stroke-width="1.5" opacity="0.6"/>
</svg>`,

  // 20. MGR-SRE — SRE Manager
  // Battle-worn oval face, dark red-black skin, alert/warning triangle iris, alert dots on cheeks
  "MGR-SRE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="msre-bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#180A0A"/>
      <stop offset="100%" stop-color="#0A0404"/>
    </radialGradient>
    <radialGradient id="msre-skin" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#6B1A1A"/>
      <stop offset="100%" stop-color="#2D0A0A"/>
    </radialGradient>
    <filter id="msre-glow">
      <feGaussianBlur stdDeviation="1.3" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#msre-bg)"/>
  <!-- Battle-worn antennae - slightly bent -->
  <path d="M37,23 Q32,15 34,9" stroke="#6B1A1A" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  <circle cx="34" cy="8" r="2.2" fill="#EF4444" filter="url(#msre-glow)"/>
  <path d="M63,23 Q68,15 66,9" stroke="#6B1A1A" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  <circle cx="66" cy="8" r="2.2" fill="#EF4444" filter="url(#msre-glow)"/>
  <!-- Battle-worn oval face -->
  <ellipse cx="50" cy="54" rx="27" ry="30" fill="url(#msre-skin)" stroke="#991B1B" stroke-width="1.8"/>
  <!-- Battle scar marks -->
  <line x1="27" y1="40" x2="30" y2="48" stroke="#991B1B" stroke-width="1.2" opacity="0.5"/>
  <line x1="70" y1="40" x2="73" y2="48" stroke="#991B1B" stroke-width="1.2" opacity="0.5"/>
  <!-- Left eye socket -->
  <ellipse cx="37" cy="50" rx="9" ry="8.5" fill="#0A0404" stroke="#991B1B" stroke-width="1.3"/>
  <!-- Left iris - alert/warning triangle -->
  <circle cx="37" cy="50" r="7" fill="#1C0808"/>
  <!-- Warning triangle in iris -->
  <polygon points="37,44 43,55 31,55" fill="#EF4444" opacity="0.8"/>
  <polygon points="37,46 42,55 32,55" fill="#1C0808" opacity="0.5"/>
  <text x="37" y="53" font-family="monospace" font-size="5" font-weight="bold" fill="#FCA5A5" text-anchor="middle">!</text>
  <circle cx="37" cy="50" r="1.5" fill="#FCA5A5" opacity="0.5"/>
  <!-- Right eye socket -->
  <ellipse cx="63" cy="50" rx="9" ry="8.5" fill="#0A0404" stroke="#991B1B" stroke-width="1.3"/>
  <!-- Right iris - warning triangle -->
  <circle cx="63" cy="50" r="7" fill="#1C0808"/>
  <polygon points="63,44 69,55 57,55" fill="#EF4444" opacity="0.8"/>
  <polygon points="63,46 68,55 58,55" fill="#1C0808" opacity="0.5"/>
  <text x="63" y="53" font-family="monospace" font-size="5" font-weight="bold" fill="#FCA5A5" text-anchor="middle">!</text>
  <circle cx="63" cy="50" r="1.5" fill="#FCA5A5" opacity="0.5"/>
  <!-- Alert dots on cheeks - 3 dots each side -->
  <circle cx="26" cy="52" r="2" fill="#EF4444" opacity="0.7" filter="url(#msre-glow)"/>
  <circle cx="26" cy="58" r="1.5" fill="#EF4444" opacity="0.5"/>
  <circle cx="26" cy="63" r="1" fill="#EF4444" opacity="0.3"/>
  <circle cx="74" cy="52" r="2" fill="#EF4444" opacity="0.7" filter="url(#msre-glow)"/>
  <circle cx="74" cy="58" r="1.5" fill="#EF4444" opacity="0.5"/>
  <circle cx="74" cy="63" r="1" fill="#EF4444" opacity="0.3"/>
  <!-- Alert grim expression -->
  <path d="M38,68 Q50,65 62,68" stroke="#7F1D1D" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  <!-- Heavy battle brow -->
  <line x1="28" y1="42" x2="46" y2="44" stroke="#4A0A0A" stroke-width="3" stroke-linecap="round"/>
  <line x1="54" y1="44" x2="72" y2="42" stroke="#4A0A0A" stroke-width="3" stroke-linecap="round"/>
  <!-- Nose -->
  <ellipse cx="50" cy="61" rx="2" ry="1.3" fill="#6B1A1A" opacity="0.6"/>
  <!-- Forehead stress mark -->
  <line x1="48" y1="36" x2="52" y2="36" stroke="#991B1B" stroke-width="1.2" opacity="0.4"/>
  <line x1="47" y1="39" x2="53" y2="39" stroke="#991B1B" stroke-width="1" opacity="0.3"/>
</svg>`,

};

// Ensure output directory exists
if (!fs.existsSync(OUT)) {
  fs.mkdirSync(OUT, { recursive: true });
}

let written = 0;
for (const [code, svg] of Object.entries(svgs)) {
  const filename = `${code}.svg`;
  fs.writeFileSync(path.join(OUT, filename), svg.trim());
  console.log(`✓ ${filename}`);
  written++;
}

console.log(`\nDone. ${written} alien SVG avatars written to:\n${OUT}`);
