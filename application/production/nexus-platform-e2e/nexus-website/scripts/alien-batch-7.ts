import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, "../public/brand/avatars/agents");

const svgs: Record<string, string> = {

"VP-SALES": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="vps-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#2a1500"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <radialGradient id="vps-skin" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#FFD060"/>
    <stop offset="60%" stop-color="#D4860A"/>
    <stop offset="100%" stop-color="#8B5200"/>
  </radialGradient>
  <radialGradient id="vps-eye" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#FFD700"/>
    <stop offset="40%" stop-color="#FF6B00"/>
    <stop offset="100%" stop-color="#1a0800"/>
  </radialGradient>
  <filter id="vps-glow">
    <feGaussianBlur stdDeviation="1.5" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#vps-bg)"/>
<!-- crown antennae -->
<line x1="38" y1="26" x2="33" y2="10" stroke="#FFD700" stroke-width="1.8" stroke-linecap="round"/>
<circle cx="33" cy="9" r="2.5" fill="#FFD700" filter="url(#vps-glow)"/>
<line x1="50" y1="24" x2="50" y2="8" stroke="#FFD700" stroke-width="1.8" stroke-linecap="round"/>
<circle cx="50" cy="7" r="2.8" fill="#FFD700" filter="url(#vps-glow)"/>
<line x1="62" y1="26" x2="67" y2="10" stroke="#FFD700" stroke-width="1.8" stroke-linecap="round"/>
<circle cx="67" cy="9" r="2.5" fill="#FFD700" filter="url(#vps-glow)"/>
<!-- head -->
<ellipse cx="50" cy="52" rx="26" ry="28" fill="url(#vps-skin)" stroke="#D4860A" stroke-width="1.2"/>
<!-- brow ridges -->
<path d="M30,42 Q37,37 44,40" fill="none" stroke="#8B5200" stroke-width="2" stroke-linecap="round"/>
<path d="M56,40 Q63,37 70,42" fill="none" stroke="#8B5200" stroke-width="2" stroke-linecap="round"/>
<!-- eyes with bullseye/target iris -->
<circle cx="38" cy="47" r="7" fill="#0d0800" stroke="#FFD700" stroke-width="1.2"/>
<circle cx="62" cy="47" r="7" fill="#0d0800" stroke="#FFD700" stroke-width="1.2"/>
<circle cx="38" cy="47" r="5.5" fill="url(#vps-eye)"/>
<circle cx="62" cy="47" r="5.5" fill="url(#vps-eye)"/>
<!-- target rings -->
<circle cx="38" cy="47" r="3.8" fill="none" stroke="#FFD700" stroke-width="0.7" opacity="0.8"/>
<circle cx="38" cy="47" r="2.1" fill="none" stroke="#FF6B00" stroke-width="0.7" opacity="0.9"/>
<circle cx="38" cy="47" r="0.9" fill="#FFD700"/>
<circle cx="62" cy="47" r="3.8" fill="none" stroke="#FFD700" stroke-width="0.7" opacity="0.8"/>
<circle cx="62" cy="47" r="2.1" fill="none" stroke="#FF6B00" stroke-width="0.7" opacity="0.9"/>
<circle cx="62" cy="47" r="0.9" fill="#FFD700"/>
<!-- eye shine -->
<circle cx="35.5" cy="44.5" r="1" fill="white" opacity="0.9"/>
<circle cx="59.5" cy="44.5" r="1" fill="white" opacity="0.9"/>
<!-- nose -->
<path d="M48,55 L50,58 L52,55" fill="none" stroke="#8B5200" stroke-width="1.2" stroke-linecap="round"/>
<!-- huge confident smile with teeth -->
<path d="M33,65 Q50,76 67,65" fill="#8B5200" stroke="#D4860A" stroke-width="1.2"/>
<path d="M33,65 Q50,71 67,65" fill="white" opacity="0.95"/>
<path d="M39,65 L39,70" stroke="#D4860A" stroke-width="0.6" opacity="0.5"/>
<path d="M46,65 L46,71" stroke="#D4860A" stroke-width="0.6" opacity="0.5"/>
<path d="M54,65 L54,71" stroke="#D4860A" stroke-width="0.6" opacity="0.5"/>
<path d="M61,65 L61,70" stroke="#D4860A" stroke-width="0.6" opacity="0.5"/>
<!-- trophy marks on cheeks -->
<path d="M24,52 Q22,50 24,48 L27,50 Z" fill="#FFD700" opacity="0.8"/>
<path d="M76,52 Q78,50 76,48 L73,50 Z" fill="#FFD700" opacity="0.8"/>
<!-- chin -->
<ellipse cx="50" cy="79" rx="12" ry="4" fill="#D4860A" opacity="0.5"/>
</svg>`,

"DIR-SALES": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="ds-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#1e0d00"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <radialGradient id="ds-skin" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#E8A030"/>
    <stop offset="60%" stop-color="#B06010"/>
    <stop offset="100%" stop-color="#6B3500"/>
  </radialGradient>
  <radialGradient id="ds-eye" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#90EE90"/>
    <stop offset="50%" stop-color="#228B22"/>
    <stop offset="100%" stop-color="#0a1a0a"/>
  </radialGradient>
  <filter id="ds-glow">
    <feGaussianBlur stdDeviation="1.2" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#ds-bg)"/>
<!-- antennae -->
<line x1="42" y1="26" x2="36" y2="11" stroke="#E8A030" stroke-width="1.6" stroke-linecap="round"/>
<circle cx="36" cy="10" r="2.2" fill="#E8A030" filter="url(#ds-glow)"/>
<line x1="58" y1="26" x2="64" y2="11" stroke="#E8A030" stroke-width="1.6" stroke-linecap="round"/>
<circle cx="64" cy="10" r="2.2" fill="#E8A030" filter="url(#ds-glow)"/>
<!-- oval head -->
<ellipse cx="50" cy="53" rx="24" ry="27" fill="url(#ds-skin)" stroke="#B06010" stroke-width="1.2"/>
<!-- brow ridges -->
<path d="M31,43 Q38,38 45,41" fill="none" stroke="#6B3500" stroke-width="1.8" stroke-linecap="round"/>
<path d="M55,41 Q62,38 69,43" fill="none" stroke="#6B3500" stroke-width="1.8" stroke-linecap="round"/>
<!-- eyes with revenue-chart iris (trending up arrow) -->
<circle cx="39" cy="48" r="6.5" fill="#0a0800" stroke="#E8A030" stroke-width="1.1"/>
<circle cx="61" cy="48" r="6.5" fill="#0a0800" stroke="#E8A030" stroke-width="1.1"/>
<circle cx="39" cy="48" r="5" fill="url(#ds-eye)"/>
<circle cx="61" cy="48" r="5" fill="url(#ds-eye)"/>
<!-- chart arrow up inside eye -->
<polyline points="36,51 39,47 42,49 44,46" fill="none" stroke="#FFD700" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="58,51 61,47 64,49 66,46" fill="none" stroke="#FFD700" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="37" cy="45.5" r="0.9" fill="white" opacity="0.9"/>
<circle cx="59" cy="45.5" r="0.9" fill="white" opacity="0.9"/>
<!-- deal-sign marks on cheeks -->
<text x="25" y="52" font-size="6" fill="#E8A030" opacity="0.85" font-family="monospace" font-weight="bold">$</text>
<text x="70" y="52" font-size="6" fill="#E8A030" opacity="0.85" font-family="monospace" font-weight="bold">$</text>
<!-- nose -->
<ellipse cx="50" cy="57" rx="2.5" ry="1.5" fill="#6B3500" opacity="0.6"/>
<!-- persuasive grin -->
<path d="M35,65 Q50,74 65,65" fill="#6B3500" stroke="#B06010" stroke-width="1"/>
<path d="M35,65 Q50,70 65,65" fill="white" opacity="0.85"/>
<path d="M41,65 L41,69" stroke="#B06010" stroke-width="0.6" opacity="0.5"/>
<path d="M50,65 L50,70" stroke="#B06010" stroke-width="0.6" opacity="0.5"/>
<path d="M59,65 L59,69" stroke="#B06010" stroke-width="0.6" opacity="0.5"/>
<!-- chin accent -->
<ellipse cx="50" cy="79" rx="10" ry="3" fill="#B06010" opacity="0.4"/>
</svg>`,

"MGR-SALES": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="ms-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#1e0800"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <radialGradient id="ms-skin" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#FF9040"/>
    <stop offset="55%" stop-color="#E05000"/>
    <stop offset="100%" stop-color="#7a2500"/>
  </radialGradient>
  <radialGradient id="ms-eye" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#FFE580"/>
    <stop offset="50%" stop-color="#FF8C00"/>
    <stop offset="100%" stop-color="#1a0500"/>
  </radialGradient>
  <filter id="ms-glow">
    <feGaussianBlur stdDeviation="1.3" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#ms-bg)"/>
<!-- energetic antennae with sparks -->
<line x1="40" y1="27" x2="32" y2="12" stroke="#FF9040" stroke-width="1.8" stroke-linecap="round"/>
<polygon points="32,8 29,13 35,13" fill="#FF9040" filter="url(#ms-glow)"/>
<line x1="60" y1="27" x2="68" y2="12" stroke="#FF9040" stroke-width="1.8" stroke-linecap="round"/>
<polygon points="68,8 65,13 71,13" fill="#FF9040" filter="url(#ms-glow)"/>
<!-- round energetic head -->
<circle cx="50" cy="54" r="27" fill="url(#ms-skin)" stroke="#E05000" stroke-width="1.2"/>
<!-- brow ridges -->
<path d="M30,44 Q37,39 44,42" fill="none" stroke="#7a2500" stroke-width="2" stroke-linecap="round"/>
<path d="M56,42 Q63,39 70,44" fill="none" stroke="#7a2500" stroke-width="2" stroke-linecap="round"/>
<!-- eyes with funnel/pipeline iris -->
<circle cx="39" cy="50" r="7" fill="#0d0300" stroke="#FF9040" stroke-width="1.2"/>
<circle cx="61" cy="50" r="7" fill="#0d0300" stroke="#FF9040" stroke-width="1.2"/>
<circle cx="39" cy="50" r="5.5" fill="url(#ms-eye)"/>
<circle cx="61" cy="50" r="5.5" fill="url(#ms-eye)"/>
<!-- funnel shape inside eye -->
<path d="M36,47 L42,47 L40,53 L38,53 Z" fill="#E05000" opacity="0.7"/>
<path d="M58,47 L64,47 L62,53 L60,53 Z" fill="#E05000" opacity="0.7"/>
<circle cx="37" cy="47" r="0.9" fill="white" opacity="0.9"/>
<circle cx="59" cy="47" r="0.9" fill="white" opacity="0.9"/>
<!-- nose -->
<path d="M48,58 Q50,61 52,58" fill="none" stroke="#7a2500" stroke-width="1.2" stroke-linecap="round"/>
<!-- motivational expression — big open smile -->
<path d="M33,67 Q50,80 67,67" fill="#7a2500" stroke="#E05000" stroke-width="1.2"/>
<path d="M33,67 Q50,73 67,67" fill="white" opacity="0.9"/>
<path d="M40,67 L40,72" stroke="#E05000" stroke-width="0.6" opacity="0.5"/>
<path d="M50,67 L50,73" stroke="#E05000" stroke-width="0.6" opacity="0.5"/>
<path d="M60,67 L60,72" stroke="#E05000" stroke-width="0.6" opacity="0.5"/>
<!-- cheek glow marks -->
<circle cx="29" cy="57" r="4" fill="#FF9040" opacity="0.15"/>
<circle cx="71" cy="57" r="4" fill="#FF9040" opacity="0.15"/>
</svg>`,

"ENT-AE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="ea-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#1a1000"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <radialGradient id="ea-skin" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#F0C070"/>
    <stop offset="55%" stop-color="#C08030"/>
    <stop offset="100%" stop-color="#704800"/>
  </radialGradient>
  <radialGradient id="ea-eye" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#B0E0FF"/>
    <stop offset="50%" stop-color="#0060A0"/>
    <stop offset="100%" stop-color="#001020"/>
  </radialGradient>
  <filter id="ea-glow">
    <feGaussianBlur stdDeviation="1.2" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#ea-bg)"/>
<!-- elegant antennae -->
<line x1="43" y1="26" x2="40" y2="11" stroke="#C08030" stroke-width="1.5" stroke-linecap="round"/>
<circle cx="40" cy="10" r="2" fill="#F0C070" filter="url(#ea-glow)"/>
<line x1="57" y1="26" x2="60" y2="11" stroke="#C08030" stroke-width="1.5" stroke-linecap="round"/>
<circle cx="60" cy="10" r="2" fill="#F0C070" filter="url(#ea-glow)"/>
<!-- polished elegant head -->
<ellipse cx="50" cy="52" rx="23" ry="26" fill="url(#ea-skin)" stroke="#C08030" stroke-width="1.2"/>
<!-- refined brow ridges -->
<path d="M32,42 Q38,38 44,41" fill="none" stroke="#704800" stroke-width="1.6" stroke-linecap="round"/>
<path d="M56,41 Q62,38 68,42" fill="none" stroke="#704800" stroke-width="1.6" stroke-linecap="round"/>
<!-- eyes with enterprise-building iris -->
<circle cx="39" cy="48" r="6.5" fill="#001020" stroke="#F0C070" stroke-width="1.1"/>
<circle cx="61" cy="48" r="6.5" fill="#001020" stroke="#F0C070" stroke-width="1.1"/>
<circle cx="39" cy="48" r="5" fill="url(#ea-eye)"/>
<circle cx="61" cy="48" r="5" fill="url(#ea-eye)"/>
<!-- building silhouette in eye -->
<rect x="36" y="45" width="1.5" height="6" fill="#F0C070" opacity="0.8"/>
<rect x="38" y="43" width="2" height="8" fill="#F0C070" opacity="0.8"/>
<rect x="40.5" y="46" width="1.5" height="5" fill="#F0C070" opacity="0.8"/>
<rect x="58" y="45" width="1.5" height="6" fill="#F0C070" opacity="0.8"/>
<rect x="60" y="43" width="2" height="8" fill="#F0C070" opacity="0.8"/>
<rect x="62.5" y="46" width="1.5" height="5" fill="#F0C070" opacity="0.8"/>
<circle cx="37" cy="45.5" r="0.9" fill="white" opacity="0.85"/>
<circle cx="59" cy="45.5" r="0.9" fill="white" opacity="0.85"/>
<!-- handshake marks on cheeks -->
<path d="M22,50 Q25,48 27,50 Q25,52 22,50" fill="#F0C070" opacity="0.7"/>
<path d="M73,50 Q75,48 78,50 Q75,52 73,50" fill="#F0C070" opacity="0.7"/>
<!-- professional smile -->
<path d="M35,64 Q50,73 65,64" fill="#704800" stroke="#C08030" stroke-width="1"/>
<path d="M35,64 Q50,69 65,64" fill="white" opacity="0.9"/>
<path d="M42,64 L42,68" stroke="#C08030" stroke-width="0.6" opacity="0.5"/>
<path d="M50,64 L50,69" stroke="#C08030" stroke-width="0.6" opacity="0.5"/>
<path d="M58,64 L58,68" stroke="#C08030" stroke-width="0.6" opacity="0.5"/>
<!-- chin -->
<ellipse cx="50" cy="77" rx="10" ry="3" fill="#C08030" opacity="0.35"/>
</svg>`,

"AE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="ae-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#1a0e00"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <radialGradient id="ae-skin" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#FFA040"/>
    <stop offset="55%" stop-color="#D06010"/>
    <stop offset="100%" stop-color="#7a3500"/>
  </radialGradient>
  <radialGradient id="ae-eye" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#A0FFB0"/>
    <stop offset="50%" stop-color="#20A040"/>
    <stop offset="100%" stop-color="#001508"/>
  </radialGradient>
  <filter id="ae-glow">
    <feGaussianBlur stdDeviation="1.1" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#ae-bg)"/>
<!-- friendly antennae -->
<line x1="42" y1="27" x2="37" y2="13" stroke="#FFA040" stroke-width="1.6" stroke-linecap="round"/>
<circle cx="37" cy="12" r="2" fill="#FFA040" filter="url(#ae-glow)"/>
<line x1="58" y1="27" x2="63" y2="13" stroke="#FFA040" stroke-width="1.6" stroke-linecap="round"/>
<circle cx="63" cy="12" r="2" fill="#FFA040" filter="url(#ae-glow)"/>
<!-- warm friendly head -->
<ellipse cx="50" cy="53" rx="24" ry="26" fill="url(#ae-skin)" stroke="#D06010" stroke-width="1.2"/>
<!-- brow ridges -->
<path d="M31,43 Q38,39 44,42" fill="none" stroke="#7a3500" stroke-width="1.8" stroke-linecap="round"/>
<path d="M56,42 Q63,39 70,43" fill="none" stroke="#7a3500" stroke-width="1.8" stroke-linecap="round"/>
<!-- eyes with deal-flow iris -->
<circle cx="39" cy="49" r="6.5" fill="#001508" stroke="#FFA040" stroke-width="1.1"/>
<circle cx="61" cy="49" r="6.5" fill="#001508" stroke="#FFA040" stroke-width="1.1"/>
<circle cx="39" cy="49" r="5" fill="url(#ae-eye)"/>
<circle cx="61" cy="49" r="5" fill="url(#ae-eye)"/>
<!-- deal flow arrows -->
<path d="M36,51 L38,47 L40,49 L42,46" fill="none" stroke="#D06010" stroke-width="0.9" stroke-linecap="round"/>
<path d="M58,51 L60,47 L62,49 L64,46" fill="none" stroke="#D06010" stroke-width="0.9" stroke-linecap="round"/>
<circle cx="37" cy="46.5" r="0.9" fill="white" opacity="0.9"/>
<circle cx="59" cy="46.5" r="0.9" fill="white" opacity="0.9"/>
<!-- nose -->
<path d="M48,57 L50,60 L52,57" fill="none" stroke="#7a3500" stroke-width="1.1" stroke-linecap="round"/>
<!-- engaging open expression -->
<path d="M34,66 Q50,77 66,66" fill="#7a3500" stroke="#D06010" stroke-width="1.1"/>
<path d="M34,66 Q50,72 66,66" fill="white" opacity="0.9"/>
<path d="M41,66 L41,71" stroke="#D06010" stroke-width="0.6" opacity="0.5"/>
<path d="M50,66 L50,72" stroke="#D06010" stroke-width="0.6" opacity="0.5"/>
<path d="M59,66 L59,71" stroke="#D06010" stroke-width="0.6" opacity="0.5"/>
<!-- cheek glow -->
<circle cx="28" cy="56" r="4" fill="#FFA040" opacity="0.15"/>
<circle cx="72" cy="56" r="4" fill="#FFA040" opacity="0.15"/>
</svg>`,

"BDR": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bdr-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#1a1000"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <radialGradient id="bdr-skin" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#FFB840"/>
    <stop offset="55%" stop-color="#D07800"/>
    <stop offset="100%" stop-color="#7a4200"/>
  </radialGradient>
  <radialGradient id="bdr-eye" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#FFE0A0"/>
    <stop offset="50%" stop-color="#FF8800"/>
    <stop offset="100%" stop-color="#1a0800"/>
  </radialGradient>
  <filter id="bdr-glow">
    <feGaussianBlur stdDeviation="1.2" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bdr-bg)"/>
<!-- young eager antennae pointing outward -->
<line x1="40" y1="28" x2="30" y2="14" stroke="#FFB840" stroke-width="1.8" stroke-linecap="round"/>
<circle cx="30" cy="13" r="2.2" fill="#FFB840" filter="url(#bdr-glow)"/>
<line x1="60" y1="28" x2="70" y2="14" stroke="#FFB840" stroke-width="1.8" stroke-linecap="round"/>
<circle cx="70" cy="13" r="2.2" fill="#FFB840" filter="url(#bdr-glow)"/>
<!-- young round head -->
<circle cx="50" cy="54" r="26" fill="url(#bdr-skin)" stroke="#D07800" stroke-width="1.2"/>
<!-- eager raised brows -->
<path d="M30,43 Q37,37 44,41" fill="none" stroke="#7a4200" stroke-width="1.6" stroke-linecap="round"/>
<path d="M56,41 Q63,37 70,43" fill="none" stroke="#7a4200" stroke-width="1.6" stroke-linecap="round"/>
<!-- wide eager eyes with phone iris -->
<circle cx="39" cy="50" r="7.5" fill="#1a0800" stroke="#FFB840" stroke-width="1.3"/>
<circle cx="61" cy="50" r="7.5" fill="#1a0800" stroke="#FFB840" stroke-width="1.3"/>
<circle cx="39" cy="50" r="6" fill="url(#bdr-eye)"/>
<circle cx="61" cy="50" r="6" fill="url(#bdr-eye)"/>
<!-- phone/handset shape in iris -->
<path d="M37,47 Q36,48 36,50 Q36,52 37,53 Q38,53 38,52 Q38,51 39,51 Q40,51 40,52 Q40,53 41,53 Q42,52 42,50 Q42,48 41,47 Q40,47 40,48 Q40,49 39,49 Q38,49 38,48 Z" fill="#D07800" opacity="0.8" stroke="#FFB840" stroke-width="0.3"/>
<path d="M59,47 Q58,48 58,50 Q58,52 59,53 Q60,53 60,52 Q60,51 61,51 Q62,51 62,52 Q62,53 63,53 Q64,52 64,50 Q64,48 63,47 Q62,47 62,48 Q62,49 61,49 Q60,49 60,48 Z" fill="#D07800" opacity="0.8" stroke="#FFB840" stroke-width="0.3"/>
<circle cx="37" cy="47" r="1" fill="white" opacity="0.9"/>
<circle cx="59" cy="47" r="1" fill="white" opacity="0.9"/>
<!-- nose -->
<ellipse cx="50" cy="58" rx="2" ry="1.5" fill="#7a4200" opacity="0.6"/>
<!-- determined expression -->
<path d="M35,67 Q50,74 65,67" fill="#7a4200" stroke="#D07800" stroke-width="1"/>
<path d="M35,67 Q50,71 65,67" fill="white" opacity="0.85"/>
<path d="M41,67 L41,71" stroke="#D07800" stroke-width="0.6" opacity="0.5"/>
<path d="M50,67 L50,71" stroke="#D07800" stroke-width="0.6" opacity="0.5"/>
<path d="M59,67 L59,71" stroke="#D07800" stroke-width="0.6" opacity="0.5"/>
<!-- hunger marks on forehead -->
<path d="M46,34 L47,37" stroke="#FFB840" stroke-width="0.8" opacity="0.6"/>
<path d="M50,33 L50,36" stroke="#FFB840" stroke-width="0.8" opacity="0.6"/>
<path d="M54,34 L53,37" stroke="#FFB840" stroke-width="0.8" opacity="0.6"/>
</svg>`,

"SALES-ENG": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="se-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#080818"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <linearGradient id="se-skin" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#0080C0"/>
    <stop offset="50%" stop-color="#204080"/>
    <stop offset="50%" stop-color="#C07000"/>
    <stop offset="100%" stop-color="#804000"/>
  </linearGradient>
  <radialGradient id="se-eye-code" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#80FFD0"/>
    <stop offset="60%" stop-color="#00A060"/>
    <stop offset="100%" stop-color="#001a10"/>
  </radialGradient>
  <radialGradient id="se-eye-chart" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#FFD080"/>
    <stop offset="60%" stop-color="#D08000"/>
    <stop offset="100%" stop-color="#1a0800"/>
  </radialGradient>
  <filter id="se-glow">
    <feGaussianBlur stdDeviation="1.2" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#se-bg)"/>
<!-- tech antennae -->
<line x1="42" y1="27" x2="38" y2="12" stroke="#80FFD0" stroke-width="1.5" stroke-linecap="round"/>
<rect x="35" y="9" width="6" height="4" rx="1" fill="#00A060" filter="url(#se-glow)"/>
<line x1="58" y1="27" x2="62" y2="12" stroke="#FFD080" stroke-width="1.5" stroke-linecap="round"/>
<rect x="59" y="9" width="6" height="4" rx="1" fill="#D08000" filter="url(#se-glow)"/>
<!-- hybrid half-blue half-orange head -->
<ellipse cx="50" cy="52" rx="24" ry="27" fill="url(#se-skin)" stroke="#6040A0" stroke-width="1.2"/>
<!-- center dividing line -->
<line x1="50" y1="27" x2="50" y2="79" stroke="#A080FF" stroke-width="0.8" opacity="0.6" stroke-dasharray="2,2"/>
<!-- brow ridges -->
<path d="M31,42 Q38,38 44,41" fill="none" stroke="#004060" stroke-width="1.8" stroke-linecap="round"/>
<path d="M56,41 Q63,38 70,42" fill="none" stroke="#603000" stroke-width="1.8" stroke-linecap="round"/>
<!-- left eye: code iris -->
<circle cx="39" cy="48" r="6.5" fill="#001a10" stroke="#80FFD0" stroke-width="1.1"/>
<circle cx="39" cy="48" r="5" fill="url(#se-eye-code)"/>
<text x="36" y="50" font-size="4.5" fill="#001a10" font-family="monospace" font-weight="bold">&lt;/&gt;</text>
<circle cx="37" cy="45.5" r="0.9" fill="white" opacity="0.9"/>
<!-- right eye: chart iris -->
<circle cx="61" cy="48" r="6.5" fill="#1a0800" stroke="#FFD080" stroke-width="1.1"/>
<circle cx="61" cy="48" r="5" fill="url(#se-eye-chart)"/>
<polyline points="58,51 60,47 62,49 64,46" fill="none" stroke="#1a0800" stroke-width="0.9" stroke-linecap="round"/>
<circle cx="59" cy="45.5" r="0.9" fill="white" opacity="0.9"/>
<!-- demo-ready smile -->
<path d="M34,64 Q50,75 66,64" fill="#2a1850" stroke="#6040A0" stroke-width="1.1"/>
<path d="M34,64 Q50,70 66,64" fill="white" opacity="0.9"/>
<path d="M41,64 L41,69" stroke="#6040A0" stroke-width="0.6" opacity="0.5"/>
<path d="M50,64 L50,70" stroke="#6040A0" stroke-width="0.6" opacity="0.5"/>
<path d="M59,64 L59,69" stroke="#6040A0" stroke-width="0.6" opacity="0.5"/>
</svg>`,

"SOL-ARCH": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="sa-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#041418"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <radialGradient id="sa-skin" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#80D8C0"/>
    <stop offset="50%" stop-color="#308870"/>
    <stop offset="100%" stop-color="#0a3028"/>
  </radialGradient>
  <radialGradient id="sa-eye" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#FFFFFF"/>
    <stop offset="40%" stop-color="#A0D0FF"/>
    <stop offset="100%" stop-color="#001040"/>
  </radialGradient>
  <filter id="sa-glow">
    <feGaussianBlur stdDeviation="1.3" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#sa-bg)"/>
<!-- solution-bulb antenna -->
<line x1="50" y1="26" x2="50" y2="10" stroke="#80D8C0" stroke-width="2" stroke-linecap="round"/>
<circle cx="50" cy="8" r="4" fill="#FFD700" filter="url(#sa-glow)" opacity="0.9"/>
<path d="M47,5 L53,5 L53,11 L47,11 Z" fill="#FFD700" opacity="0.4"/>
<!-- side antennae -->
<line x1="37" y1="30" x2="25" y2="18" stroke="#308870" stroke-width="1.4" stroke-linecap="round"/>
<line x1="63" y1="30" x2="75" y2="18" stroke="#308870" stroke-width="1.4" stroke-linecap="round"/>
<!-- wise face -->
<ellipse cx="50" cy="54" rx="25" ry="27" fill="url(#sa-skin)" stroke="#308870" stroke-width="1.2"/>
<!-- blueprint grid on forehead -->
<line x1="36" y1="36" x2="64" y2="36" stroke="#80D8C0" stroke-width="0.5" opacity="0.4" stroke-dasharray="2,2"/>
<line x1="36" y1="40" x2="64" y2="40" stroke="#80D8C0" stroke-width="0.5" opacity="0.4" stroke-dasharray="2,2"/>
<line x1="42" y1="32" x2="42" y2="44" stroke="#80D8C0" stroke-width="0.5" opacity="0.4" stroke-dasharray="2,2"/>
<line x1="50" y1="32" x2="50" y2="44" stroke="#80D8C0" stroke-width="0.5" opacity="0.4" stroke-dasharray="2,2"/>
<line x1="58" y1="32" x2="58" y2="44" stroke="#80D8C0" stroke-width="0.5" opacity="0.4" stroke-dasharray="2,2"/>
<!-- brow ridges - wise thoughtful -->
<path d="M30,44 Q37,40 44,43" fill="none" stroke="#0a3028" stroke-width="1.8" stroke-linecap="round"/>
<path d="M56,43 Q63,40 70,44" fill="none" stroke="#0a3028" stroke-width="1.8" stroke-linecap="round"/>
<!-- eyes with blueprint iris -->
<circle cx="39" cy="50" r="6.5" fill="#001040" stroke="#80D8C0" stroke-width="1.1"/>
<circle cx="61" cy="50" r="6.5" fill="#001040" stroke="#80D8C0" stroke-width="1.1"/>
<circle cx="39" cy="50" r="5" fill="url(#sa-eye)"/>
<circle cx="61" cy="50" r="5" fill="url(#sa-eye)"/>
<!-- blueprint lines in iris -->
<line x1="36" y1="50" x2="42" y2="50" stroke="#308870" stroke-width="0.6" opacity="0.8"/>
<line x1="39" y1="47" x2="39" y2="53" stroke="#308870" stroke-width="0.6" opacity="0.8"/>
<line x1="58" y1="50" x2="64" y2="50" stroke="#308870" stroke-width="0.6" opacity="0.8"/>
<line x1="61" y1="47" x2="61" y2="53" stroke="#308870" stroke-width="0.6" opacity="0.8"/>
<circle cx="37" cy="47.5" r="0.9" fill="white" opacity="0.9"/>
<circle cx="59" cy="47.5" r="0.9" fill="white" opacity="0.9"/>
<!-- thoughtful half-smile -->
<path d="M36,65 Q50,72 64,65" fill="none" stroke="#80D8C0" stroke-width="2" stroke-linecap="round"/>
<!-- chin -->
<ellipse cx="50" cy="80" rx="11" ry="3.5" fill="#308870" opacity="0.35"/>
</svg>`,

"ACCT-MGR": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="am-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#1a1200"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <radialGradient id="am-skin" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#FFD080"/>
    <stop offset="55%" stop-color="#C09030"/>
    <stop offset="100%" stop-color="#6a4a00"/>
  </radialGradient>
  <radialGradient id="am-eye" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#FFE0C0"/>
    <stop offset="50%" stop-color="#D06040"/>
    <stop offset="100%" stop-color="#1a0800"/>
  </radialGradient>
  <filter id="am-glow">
    <feGaussianBlur stdDeviation="1.1" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#am-bg)"/>
<!-- welcoming curved antennae -->
<path d="M42,28 Q35,18 32,10" fill="none" stroke="#FFD080" stroke-width="1.6" stroke-linecap="round"/>
<circle cx="32" cy="10" r="2" fill="#FFD080" filter="url(#am-glow)"/>
<path d="M58,28 Q65,18 68,10" fill="none" stroke="#FFD080" stroke-width="1.6" stroke-linecap="round"/>
<circle cx="68" cy="10" r="2" fill="#FFD080" filter="url(#am-glow)"/>
<!-- warm oval head -->
<ellipse cx="50" cy="53" rx="24" ry="26" fill="url(#am-skin)" stroke="#C09030" stroke-width="1.2"/>
<!-- friendly brow ridges -->
<path d="M31,43 Q38,39 44,42" fill="none" stroke="#6a4a00" stroke-width="1.8" stroke-linecap="round"/>
<path d="M56,42 Q63,39 70,43" fill="none" stroke="#6a4a00" stroke-width="1.8" stroke-linecap="round"/>
<!-- eyes with relationship-network iris -->
<circle cx="39" cy="49" r="6.5" fill="#1a0800" stroke="#FFD080" stroke-width="1.1"/>
<circle cx="61" cy="49" r="6.5" fill="#1a0800" stroke="#FFD080" stroke-width="1.1"/>
<circle cx="39" cy="49" r="5" fill="url(#am-eye)"/>
<circle cx="61" cy="49" r="5" fill="url(#am-eye)"/>
<!-- network nodes in iris -->
<circle cx="39" cy="49" r="1.2" fill="#C09030" opacity="0.9"/>
<circle cx="36.5" cy="47" r="0.8" fill="#C09030" opacity="0.7"/>
<circle cx="41.5" cy="47" r="0.8" fill="#C09030" opacity="0.7"/>
<circle cx="36.5" cy="51" r="0.8" fill="#C09030" opacity="0.7"/>
<circle cx="41.5" cy="51" r="0.8" fill="#C09030" opacity="0.7"/>
<line x1="39" y1="49" x2="36.5" y2="47" stroke="#C09030" stroke-width="0.5" opacity="0.6"/>
<line x1="39" y1="49" x2="41.5" y2="47" stroke="#C09030" stroke-width="0.5" opacity="0.6"/>
<line x1="39" y1="49" x2="36.5" y2="51" stroke="#C09030" stroke-width="0.5" opacity="0.6"/>
<line x1="39" y1="49" x2="41.5" y2="51" stroke="#C09030" stroke-width="0.5" opacity="0.6"/>
<circle cx="61" cy="49" r="1.2" fill="#C09030" opacity="0.9"/>
<circle cx="58.5" cy="47" r="0.8" fill="#C09030" opacity="0.7"/>
<circle cx="63.5" cy="47" r="0.8" fill="#C09030" opacity="0.7"/>
<circle cx="58.5" cy="51" r="0.8" fill="#C09030" opacity="0.7"/>
<circle cx="63.5" cy="51" r="0.8" fill="#C09030" opacity="0.7"/>
<line x1="61" y1="49" x2="58.5" y2="47" stroke="#C09030" stroke-width="0.5" opacity="0.6"/>
<line x1="61" y1="49" x2="63.5" y2="47" stroke="#C09030" stroke-width="0.5" opacity="0.6"/>
<line x1="61" y1="49" x2="58.5" y2="51" stroke="#C09030" stroke-width="0.5" opacity="0.6"/>
<line x1="61" y1="49" x2="63.5" y2="51" stroke="#C09030" stroke-width="0.5" opacity="0.6"/>
<circle cx="37" cy="46.5" r="0.9" fill="white" opacity="0.9"/>
<circle cx="59" cy="46.5" r="0.9" fill="white" opacity="0.9"/>
<!-- genuine welcoming smile -->
<path d="M34,65 Q50,76 66,65" fill="#6a4a00" stroke="#C09030" stroke-width="1.1"/>
<path d="M34,65 Q50,71 66,65" fill="white" opacity="0.9"/>
<path d="M41,65 L41,70" stroke="#C09030" stroke-width="0.6" opacity="0.5"/>
<path d="M50,65 L50,71" stroke="#C09030" stroke-width="0.6" opacity="0.5"/>
<path d="M59,65 L59,70" stroke="#C09030" stroke-width="0.6" opacity="0.5"/>
<!-- cheek warmth -->
<circle cx="28" cy="56" r="5" fill="#FFD080" opacity="0.12"/>
<circle cx="72" cy="56" r="5" fill="#FFD080" opacity="0.12"/>
</svg>`,

"REVOPS": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="ro-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#100c14"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <radialGradient id="ro-skin" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#C0B0A0"/>
    <stop offset="50%" stop-color="#887060"/>
    <stop offset="100%" stop-color="#3a2820"/>
  </radialGradient>
  <radialGradient id="ro-eye" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#FFE060"/>
    <stop offset="50%" stop-color="#C09000"/>
    <stop offset="100%" stop-color="#1a0e00"/>
  </radialGradient>
  <filter id="ro-glow">
    <feGaussianBlur stdDeviation="1.1" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#ro-bg)"/>
<!-- data antennae -->
<line x1="44" y1="27" x2="42" y2="12" stroke="#C0B0A0" stroke-width="1.5" stroke-linecap="round"/>
<rect x="39" y="9" width="6" height="3" rx="1" fill="#C0B0A0" filter="url(#ro-glow)"/>
<line x1="56" y1="27" x2="58" y2="12" stroke="#C0B0A0" stroke-width="1.5" stroke-linecap="round"/>
<rect x="55" y="9" width="6" height="3" rx="1" fill="#C0B0A0" filter="url(#ro-glow)"/>
<!-- analytical head -->
<ellipse cx="50" cy="52" rx="23" ry="26" fill="url(#ro-skin)" stroke="#887060" stroke-width="1.2"/>
<!-- number marks on forehead -->
<text x="42" y="35" font-size="5" fill="#FFE060" opacity="0.75" font-family="monospace">$</text>
<text x="49" y="34" font-size="4" fill="#FFE060" opacity="0.6" font-family="monospace">%</text>
<text x="55" y="35" font-size="5" fill="#FFE060" opacity="0.75" font-family="monospace">#</text>
<!-- brow ridges - analytical level -->
<path d="M31,43 Q38,40 44,42" fill="none" stroke="#3a2820" stroke-width="1.6" stroke-linecap="round"/>
<path d="M56,42 Q63,40 70,43" fill="none" stroke="#3a2820" stroke-width="1.6" stroke-linecap="round"/>
<!-- eyes with revenue-metric dashboard iris -->
<circle cx="39" cy="49" r="6.5" fill="#1a0e00" stroke="#C0B0A0" stroke-width="1.1"/>
<circle cx="61" cy="49" r="6.5" fill="#1a0e00" stroke="#C0B0A0" stroke-width="1.1"/>
<circle cx="39" cy="49" r="5" fill="url(#ro-eye)"/>
<circle cx="61" cy="49" r="5" fill="url(#ro-eye)"/>
<!-- dashboard segments in iris -->
<rect x="36" y="47" width="2.5" height="4" fill="#887060" opacity="0.8"/>
<rect x="39" y="45.5" width="2.5" height="5.5" fill="#887060" opacity="0.9"/>
<rect x="42" y="46.5" width="1.5" height="4.5" fill="#887060" opacity="0.7"/>
<rect x="58" y="47" width="2.5" height="4" fill="#887060" opacity="0.8"/>
<rect x="61" y="45.5" width="2.5" height="5.5" fill="#887060" opacity="0.9"/>
<rect x="64" y="46.5" width="1.5" height="4.5" fill="#887060" opacity="0.7"/>
<circle cx="37" cy="46.5" r="0.9" fill="white" opacity="0.8"/>
<circle cx="59" cy="46.5" r="0.9" fill="white" opacity="0.8"/>
<!-- analytical expression - slight confident smile -->
<path d="M37,64 Q50,70 63,64" fill="none" stroke="#C0B0A0" stroke-width="2" stroke-linecap="round"/>
</svg>`,

"VP-MKT": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="vm-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#200010"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <radialGradient id="vm-skin" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#FF60C0"/>
    <stop offset="55%" stop-color="#C0108080"/>
    <stop offset="100%" stop-color="#600050"/>
  </radialGradient>
  <radialGradient id="vm-eye" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#FFFFFF"/>
    <stop offset="40%" stop-color="#FF80FF"/>
    <stop offset="100%" stop-color="#400040"/>
  </radialGradient>
  <filter id="vm-glow">
    <feGaussianBlur stdDeviation="1.8" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#vm-bg)"/>
<!-- megaphone antennae -->
<line x1="38" y1="28" x2="26" y2="13" stroke="#FF60C0" stroke-width="2" stroke-linecap="round"/>
<polygon points="22,9 22,17 30,13" fill="#FF60C0" filter="url(#vm-glow)"/>
<line x1="62" y1="28" x2="74" y2="13" stroke="#FF60C0" stroke-width="2" stroke-linecap="round"/>
<polygon points="78,9 78,17 70,13" fill="#FF60C0" filter="url(#vm-glow)"/>
<!-- stunning face -->
<ellipse cx="50" cy="54" rx="26" ry="28" fill="#FF1080" stroke="#FF60C0" stroke-width="1.4"/>
<ellipse cx="50" cy="54" rx="25" ry="27" fill="#B01060" opacity="0.7"/>
<!-- broadcast-signal iris: concentric circles emanating -->
<circle cx="39" cy="49" r="7" fill="#200010" stroke="#FF60C0" stroke-width="1.3"/>
<circle cx="61" cy="49" r="7" fill="#200010" stroke="#FF60C0" stroke-width="1.3"/>
<circle cx="39" cy="49" r="5.5" fill="url(#vm-eye)"/>
<circle cx="61" cy="49" r="5.5" fill="url(#vm-eye)"/>
<!-- concentric signal rings in eyes -->
<circle cx="39" cy="49" r="4.2" fill="none" stroke="#FF60C0" stroke-width="0.6" opacity="0.8"/>
<circle cx="39" cy="49" r="2.8" fill="none" stroke="#FF60C0" stroke-width="0.6" opacity="0.9"/>
<circle cx="39" cy="49" r="1.4" fill="#FF60C0" opacity="0.95"/>
<circle cx="61" cy="49" r="4.2" fill="none" stroke="#FF60C0" stroke-width="0.6" opacity="0.8"/>
<circle cx="61" cy="49" r="2.8" fill="none" stroke="#FF60C0" stroke-width="0.6" opacity="0.9"/>
<circle cx="61" cy="49" r="1.4" fill="#FF60C0" opacity="0.95"/>
<!-- brow ridges bold -->
<path d="M28,41 Q37,35 45,39" fill="none" stroke="#600050" stroke-width="2.2" stroke-linecap="round"/>
<path d="M55,39 Q63,35 72,41" fill="none" stroke="#600050" stroke-width="2.2" stroke-linecap="round"/>
<!-- nose -->
<ellipse cx="50" cy="58" rx="2.5" ry="1.8" fill="#600050" opacity="0.7"/>
<!-- bold charismatic expression -->
<path d="M31,67 Q50,82 69,67" fill="#600050" stroke="#FF60C0" stroke-width="1.4"/>
<path d="M31,67 Q50,74 69,67" fill="white" opacity="0.95"/>
<path d="M38,67 L38,73" stroke="#FF60C0" stroke-width="0.7" opacity="0.5"/>
<path d="M50,67 L50,74" stroke="#FF60C0" stroke-width="0.7" opacity="0.5"/>
<path d="M62,67 L62,73" stroke="#FF60C0" stroke-width="0.7" opacity="0.5"/>
<!-- glow cheeks -->
<circle cx="26" cy="58" r="6" fill="#FF60C0" opacity="0.18"/>
<circle cx="74" cy="58" r="6" fill="#FF60C0" opacity="0.18"/>
</svg>`,

"PMM": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="pmm-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#1c0018"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <radialGradient id="pmm-skin" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#FF80D0"/>
    <stop offset="55%" stop-color="#C03090"/>
    <stop offset="100%" stop-color="#600040"/>
  </radialGradient>
  <radialGradient id="pmm-eye" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#FFE0FF"/>
    <stop offset="50%" stop-color="#C060E0"/>
    <stop offset="100%" stop-color="#1a0025"/>
  </radialGradient>
  <filter id="pmm-glow">
    <feGaussianBlur stdDeviation="1.4" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#pmm-bg)"/>
<!-- rocket antennae -->
<line x1="44" y1="27" x2="40" y2="12" stroke="#FF80D0" stroke-width="1.8" stroke-linecap="round"/>
<polygon points="40,8 37,14 43,14" fill="#FF80D0" filter="url(#pmm-glow)"/>
<line x1="56" y1="27" x2="60" y2="12" stroke="#FF80D0" stroke-width="1.8" stroke-linecap="round"/>
<polygon points="60,8 57,14 63,14" fill="#FF80D0" filter="url(#pmm-glow)"/>
<!-- creative oval head -->
<ellipse cx="50" cy="53" rx="25" ry="27" fill="url(#pmm-skin)" stroke="#C03090" stroke-width="1.3"/>
<!-- brow ridges -->
<path d="M29,43 Q37,38 44,41" fill="none" stroke="#600040" stroke-width="2" stroke-linecap="round"/>
<path d="M56,41 Q63,38 71,43" fill="none" stroke="#600040" stroke-width="2" stroke-linecap="round"/>
<!-- eyes with product-launch rocket iris -->
<circle cx="39" cy="49" r="7" fill="#1a0025" stroke="#FF80D0" stroke-width="1.2"/>
<circle cx="61" cy="49" r="7" fill="#1a0025" stroke="#FF80D0" stroke-width="1.2"/>
<circle cx="39" cy="49" r="5.5" fill="url(#pmm-eye)"/>
<circle cx="61" cy="49" r="5.5" fill="url(#pmm-eye)"/>
<!-- rocket in eye -->
<path d="M39,53 L38,50 Q39,45 40,50 Z" fill="#C03090" opacity="0.9"/>
<path d="M38,52 L36,54" stroke="#FF8040" stroke-width="0.8" stroke-linecap="round" opacity="0.8"/>
<path d="M40,52 L42,54" stroke="#FF8040" stroke-width="0.8" stroke-linecap="round" opacity="0.8"/>
<path d="M61,53 L60,50 Q61,45 62,50 Z" fill="#C03090" opacity="0.9"/>
<path d="M60,52 L58,54" stroke="#FF8040" stroke-width="0.8" stroke-linecap="round" opacity="0.8"/>
<path d="M62,52 L64,54" stroke="#FF8040" stroke-width="0.8" stroke-linecap="round" opacity="0.8"/>
<circle cx="37" cy="46.5" r="0.9" fill="white" opacity="0.9"/>
<circle cx="59" cy="46.5" r="0.9" fill="white" opacity="0.9"/>
<!-- exciting energetic expression -->
<path d="M33,66 Q50,78 67,66" fill="#600040" stroke="#C03090" stroke-width="1.2"/>
<path d="M33,66 Q50,72 67,66" fill="white" opacity="0.9"/>
<path d="M40,66 L40,71" stroke="#C03090" stroke-width="0.6" opacity="0.5"/>
<path d="M50,66 L50,72" stroke="#C03090" stroke-width="0.6" opacity="0.5"/>
<path d="M60,66 L60,71" stroke="#C03090" stroke-width="0.6" opacity="0.5"/>
<!-- cheek excitement -->
<circle cx="27" cy="57" r="5" fill="#FF80D0" opacity="0.16"/>
<circle cx="73" cy="57" r="5" fill="#FF80D0" opacity="0.16"/>
</svg>`,

"GROWTH-MKT": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="gm-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#1a0020"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <radialGradient id="gm-skin" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#FF40B0"/>
    <stop offset="50%" stop-color="#E000A0"/>
    <stop offset="100%" stop-color="#700060"/>
  </radialGradient>
  <radialGradient id="gm-eye" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#FFFF80"/>
    <stop offset="50%" stop-color="#80FF40"/>
    <stop offset="100%" stop-color="#001a00"/>
  </radialGradient>
  <filter id="gm-glow">
    <feGaussianBlur stdDeviation="2" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#gm-bg)"/>
<!-- hyperactive spike antennae -->
<line x1="38" y1="27" x2="28" y2="9" stroke="#FF40B0" stroke-width="2.2" stroke-linecap="round"/>
<polygon points="28,5 24,12 32,12" fill="#FF40B0" filter="url(#gm-glow)"/>
<line x1="50" y1="25" x2="50" y2="9" stroke="#E000A0" stroke-width="2" stroke-linecap="round"/>
<polygon points="50,5 47,11 53,11" fill="#E000A0" filter="url(#gm-glow)"/>
<line x1="62" y1="27" x2="72" y2="9" stroke="#FF40B0" stroke-width="2.2" stroke-linecap="round"/>
<polygon points="72,5 68,12 76,12" fill="#FF40B0" filter="url(#gm-glow)"/>
<!-- hyperactive face -->
<ellipse cx="50" cy="54" rx="26" ry="27" fill="url(#gm-skin)" stroke="#FF40B0" stroke-width="1.4"/>
<!-- viral spark marks on cheeks -->
<path d="M23,50 L25,48 L26,50 L25,52 Z" fill="#FFFF80" opacity="0.9"/>
<path d="M22,55 L24,53 L25,55 L24,57 Z" fill="#FFFF80" opacity="0.7"/>
<path d="M75,50 L77,48 L78,50 L77,52 Z" fill="#FFFF80" opacity="0.9"/>
<path d="M76,55 L78,53 L79,55 L78,57 Z" fill="#FFFF80" opacity="0.7"/>
<!-- brow ridges intense -->
<path d="M28,42 Q37,36 45,40" fill="none" stroke="#700060" stroke-width="2.2" stroke-linecap="round"/>
<path d="M55,40 Q63,36 72,42" fill="none" stroke="#700060" stroke-width="2.2" stroke-linecap="round"/>
<!-- eyes with J-curve growth iris -->
<circle cx="39" cy="49" r="7" fill="#001a00" stroke="#FF40B0" stroke-width="1.3"/>
<circle cx="61" cy="49" r="7" fill="#001a00" stroke="#FF40B0" stroke-width="1.3"/>
<circle cx="39" cy="49" r="5.5" fill="url(#gm-eye)"/>
<circle cx="61" cy="49" r="5.5" fill="url(#gm-eye)"/>
<!-- J-curve in iris -->
<path d="M36,53 Q36,51 37,50 Q38,49 39,48 Q40,47 42,45" fill="none" stroke="#700060" stroke-width="1.2" stroke-linecap="round"/>
<path d="M58,53 Q58,51 59,50 Q60,49 61,48 Q62,47 64,45" fill="none" stroke="#700060" stroke-width="1.2" stroke-linecap="round"/>
<circle cx="37" cy="46.5" r="1" fill="white" opacity="0.9"/>
<circle cx="59" cy="46.5" r="1" fill="white" opacity="0.9"/>
<!-- intense energy smile -->
<path d="M31,67 Q50,82 69,67" fill="#700060" stroke="#FF40B0" stroke-width="1.4"/>
<path d="M31,67 Q50,74 69,67" fill="white" opacity="0.95"/>
<path d="M38,67 L38,73" stroke="#FF40B0" stroke-width="0.7" opacity="0.5"/>
<path d="M50,67 L50,74" stroke="#FF40B0" stroke-width="0.7" opacity="0.5"/>
<path d="M62,67 L62,73" stroke="#FF40B0" stroke-width="0.7" opacity="0.5"/>
</svg>`,

"CONTENT-MKT": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="cm-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#180014"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <radialGradient id="cm-skin" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#FF80A0"/>
    <stop offset="55%" stop-color="#C04070"/>
    <stop offset="100%" stop-color="#60001a"/>
  </radialGradient>
  <radialGradient id="cm-eye" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#FFF0C0"/>
    <stop offset="50%" stop-color="#D0A000"/>
    <stop offset="100%" stop-color="#1a0e00"/>
  </radialGradient>
  <filter id="cm-glow">
    <feGaussianBlur stdDeviation="1.3" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#cm-bg)"/>
<!-- quill pen antennae -->
<line x1="41" y1="27" x2="34" y2="11" stroke="#FF80A0" stroke-width="1.7" stroke-linecap="round"/>
<path d="M30,7 L38,14 L32,16 Z" fill="#FF80A0" filter="url(#cm-glow)"/>
<line x1="59" y1="27" x2="66" y2="11" stroke="#FF80A0" stroke-width="1.7" stroke-linecap="round"/>
<path d="M70,7 L62,14 L68,16 Z" fill="#FF80A0" filter="url(#cm-glow)"/>
<!-- expressive oval head -->
<ellipse cx="50" cy="53" rx="25" ry="27" fill="url(#cm-skin)" stroke="#C04070" stroke-width="1.3"/>
<!-- brow ridges -->
<path d="M29,43 Q37,38 44,41" fill="none" stroke="#60001a" stroke-width="2" stroke-linecap="round"/>
<path d="M56,41 Q63,38 71,43" fill="none" stroke="#60001a" stroke-width="2" stroke-linecap="round"/>
<!-- eyes with quill+text iris -->
<circle cx="39" cy="49" r="6.5" fill="#1a0e00" stroke="#FF80A0" stroke-width="1.2"/>
<circle cx="61" cy="49" r="6.5" fill="#1a0e00" stroke="#FF80A0" stroke-width="1.2"/>
<circle cx="39" cy="49" r="5" fill="url(#cm-eye)"/>
<circle cx="61" cy="49" r="5" fill="url(#cm-eye)"/>
<!-- quill nib in iris -->
<path d="M38,52 L40,46 L41,52 Z" fill="#C04070" opacity="0.8"/>
<line x1="36" y1="48" x2="42" y2="48" stroke="#C04070" stroke-width="0.6" opacity="0.6"/>
<line x1="36" y1="50" x2="42" y2="50" stroke="#C04070" stroke-width="0.6" opacity="0.5"/>
<path d="M60,52 L62,46 L63,52 Z" fill="#C04070" opacity="0.8"/>
<line x1="58" y1="48" x2="64" y2="48" stroke="#C04070" stroke-width="0.6" opacity="0.6"/>
<line x1="58" y1="50" x2="64" y2="50" stroke="#C04070" stroke-width="0.6" opacity="0.5"/>
<circle cx="37" cy="46.5" r="0.9" fill="white" opacity="0.9"/>
<circle cx="59" cy="46.5" r="0.9" fill="white" opacity="0.9"/>
<!-- storyteller open expression -->
<path d="M34,66 Q50,78 66,66" fill="#60001a" stroke="#C04070" stroke-width="1.2"/>
<path d="M34,66 Q50,74 66,66" fill="white" opacity="0.9"/>
<!-- open mouth detail -->
<ellipse cx="50" cy="71" rx="5" ry="3" fill="#60001a" opacity="0.7"/>
<path d="M41,66 L41,71" stroke="#C04070" stroke-width="0.6" opacity="0.5"/>
<path d="M59,66 L59,71" stroke="#C04070" stroke-width="0.6" opacity="0.5"/>
<!-- cheek storyteller blush -->
<circle cx="27" cy="57" r="5" fill="#FF80A0" opacity="0.14"/>
<circle cx="73" cy="57" r="5" fill="#FF80A0" opacity="0.14"/>
</svg>`,

"DEMGEN": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="dg-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#1e0008"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <radialGradient id="dg-skin" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#FF5050"/>
    <stop offset="50%" stop-color="#CC0040"/>
    <stop offset="100%" stop-color="#6a0020"/>
  </radialGradient>
  <radialGradient id="dg-eye" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#FFFF40"/>
    <stop offset="50%" stop-color="#FF8000"/>
    <stop offset="100%" stop-color="#1a0600"/>
  </radialGradient>
  <filter id="dg-glow">
    <feGaussianBlur stdDeviation="2" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#dg-bg)"/>
<!-- explosion burst marks on forehead -->
<path d="M50,26 L48,22 L50,18 L52,22 Z" fill="#FFFF40" opacity="0.9"/>
<path d="M44,28 L40,25 L41,21 L45,24 Z" fill="#FF8000" opacity="0.8"/>
<path d="M56,28 L60,25 L59,21 L55,24 Z" fill="#FF8000" opacity="0.8"/>
<!-- burst antennae -->
<line x1="40" y1="28" x2="29" y2="14" stroke="#FF5050" stroke-width="2.5" stroke-linecap="round"/>
<polygon points="25,10 25,18 33,14" fill="#FF5050" filter="url(#dg-glow)"/>
<line x1="60" y1="28" x2="71" y2="14" stroke="#FF5050" stroke-width="2.5" stroke-linecap="round"/>
<polygon points="75,10 75,18 67,14" fill="#FF5050" filter="url(#dg-glow)"/>
<!-- explosive face -->
<ellipse cx="50" cy="55" rx="27" ry="27" fill="url(#dg-skin)" stroke="#FF5050" stroke-width="1.5"/>
<!-- brow ridges intense downward -->
<path d="M28,44 Q37,40 45,43" fill="none" stroke="#6a0020" stroke-width="2.5" stroke-linecap="round"/>
<path d="M55,43 Q63,40 72,44" fill="none" stroke="#6a0020" stroke-width="2.5" stroke-linecap="round"/>
<!-- eyes with demand-wave iris -->
<circle cx="39" cy="50" r="7" fill="#1a0600" stroke="#FF5050" stroke-width="1.3"/>
<circle cx="61" cy="50" r="7" fill="#1a0600" stroke="#FF5050" stroke-width="1.3"/>
<circle cx="39" cy="50" r="5.5" fill="url(#dg-eye)"/>
<circle cx="61" cy="50" r="5.5" fill="url(#dg-eye)"/>
<!-- demand wave in iris -->
<path d="M35,52 Q36,49 37,51 Q38,48 39,50 Q40,48 41,51 Q42,49 43,52" fill="none" stroke="#CC0040" stroke-width="0.9" stroke-linecap="round"/>
<path d="M57,52 Q58,49 59,51 Q60,48 61,50 Q62,48 63,51 Q64,49 65,52" fill="none" stroke="#CC0040" stroke-width="0.9" stroke-linecap="round"/>
<circle cx="37" cy="47" r="1" fill="white" opacity="0.9"/>
<circle cx="59" cy="47" r="1" fill="white" opacity="0.9"/>
<!-- high energy wide expression -->
<path d="M30,68 Q50,84 70,68" fill="#6a0020" stroke="#FF5050" stroke-width="1.5"/>
<path d="M30,68 Q50,75 70,68" fill="white" opacity="0.95"/>
<path d="M37,68 L37,74" stroke="#FF5050" stroke-width="0.7" opacity="0.5"/>
<path d="M50,68 L50,75" stroke="#FF5050" stroke-width="0.7" opacity="0.5"/>
<path d="M63,68 L63,74" stroke="#FF5050" stroke-width="0.7" opacity="0.5"/>
</svg>`,

"MOPs": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="mo-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#14001e"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <radialGradient id="mo-skin" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#C080D0"/>
    <stop offset="55%" stop-color="#8030A0"/>
    <stop offset="100%" stop-color="#3a0050"/>
  </radialGradient>
  <radialGradient id="mo-eye" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#E0C0FF"/>
    <stop offset="50%" stop-color="#9040C0"/>
    <stop offset="100%" stop-color="#1a0028"/>
  </radialGradient>
  <filter id="mo-glow">
    <feGaussianBlur stdDeviation="1.1" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#mo-bg)"/>
<!-- methodical antennae -->
<line x1="43" y1="27" x2="41" y2="12" stroke="#C080D0" stroke-width="1.5" stroke-linecap="round"/>
<rect x="38" y="9" width="6" height="3" rx="1" fill="#C080D0" filter="url(#mo-glow)"/>
<line x1="57" y1="27" x2="59" y2="12" stroke="#C080D0" stroke-width="1.5" stroke-linecap="round"/>
<rect x="56" y="9" width="6" height="3" rx="1" fill="#C080D0" filter="url(#mo-glow)"/>
<!-- data pipe marks on sides -->
<rect x="21" y="46" width="6" height="3" rx="1" fill="#8030A0" opacity="0.7"/>
<rect x="21" y="51" width="6" height="3" rx="1" fill="#8030A0" opacity="0.5"/>
<rect x="73" y="46" width="6" height="3" rx="1" fill="#8030A0" opacity="0.7"/>
<rect x="73" y="51" width="6" height="3" rx="1" fill="#8030A0" opacity="0.5"/>
<!-- methodical face -->
<ellipse cx="50" cy="52" rx="24" ry="26" fill="url(#mo-skin)" stroke="#8030A0" stroke-width="1.2"/>
<!-- brow ridges -->
<path d="M31,42 Q38,38 44,41" fill="none" stroke="#3a0050" stroke-width="1.8" stroke-linecap="round"/>
<path d="M56,41 Q63,38 70,42" fill="none" stroke="#3a0050" stroke-width="1.8" stroke-linecap="round"/>
<!-- eyes with workflow-automation iris -->
<circle cx="39" cy="48" r="6.5" fill="#1a0028" stroke="#C080D0" stroke-width="1.1"/>
<circle cx="61" cy="48" r="6.5" fill="#1a0028" stroke="#C080D0" stroke-width="1.1"/>
<circle cx="39" cy="48" r="5" fill="url(#mo-eye)"/>
<circle cx="61" cy="48" r="5" fill="url(#mo-eye)"/>
<!-- workflow arrows in iris -->
<path d="M36,46 L38,48 L36,50" fill="none" stroke="#3a0050" stroke-width="0.9" stroke-linecap="round"/>
<path d="M39,46 L41,48 L39,50" fill="none" stroke="#3a0050" stroke-width="0.9" stroke-linecap="round"/>
<path d="M58,46 L60,48 L58,50" fill="none" stroke="#3a0050" stroke-width="0.9" stroke-linecap="round"/>
<path d="M61,46 L63,48 L61,50" fill="none" stroke="#3a0050" stroke-width="0.9" stroke-linecap="round"/>
<circle cx="37" cy="45.5" r="0.9" fill="white" opacity="0.9"/>
<circle cx="59" cy="45.5" r="0.9" fill="white" opacity="0.9"/>
<!-- precise technical expression -->
<path d="M37,63 Q50,69 63,63" fill="none" stroke="#C080D0" stroke-width="2" stroke-linecap="round"/>
<!-- chin -->
<ellipse cx="50" cy="77" rx="10" ry="3" fill="#8030A0" opacity="0.35"/>
</svg>`,

"SOCIAL-MGR": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="sm-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#1a000e"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <radialGradient id="sm-skin" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#FF70B0"/>
    <stop offset="55%" stop-color="#CC2080"/>
    <stop offset="100%" stop-color="#600040"/>
  </radialGradient>
  <radialGradient id="sm-eye" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#FFFFFF"/>
    <stop offset="40%" stop-color="#FF80C0"/>
    <stop offset="100%" stop-color="#300020"/>
  </radialGradient>
  <filter id="sm-glow">
    <feGaussianBlur stdDeviation="1.4" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#sm-bg)"/>
<!-- notification bell antenna -->
<line x1="50" y1="26" x2="50" y2="10" stroke="#FF70B0" stroke-width="2" stroke-linecap="round"/>
<path d="M44,8 Q50,4 56,8 L56,13 Q50,10 44,13 Z" fill="#FF70B0" filter="url(#sm-glow)"/>
<circle cx="50" cy="14" r="1.5" fill="#FFD700"/>
<!-- side antennae trending outward -->
<line x1="38" y1="29" x2="28" y2="16" stroke="#CC2080" stroke-width="1.5" stroke-linecap="round"/>
<circle cx="28" cy="15" r="2" fill="#CC2080" filter="url(#sm-glow)"/>
<line x1="62" y1="29" x2="72" y2="16" stroke="#CC2080" stroke-width="1.5" stroke-linecap="round"/>
<circle cx="72" cy="15" r="2" fill="#CC2080" filter="url(#sm-glow)"/>
<!-- trendy face -->
<ellipse cx="50" cy="55" rx="25" ry="26" fill="url(#sm-skin)" stroke="#CC2080" stroke-width="1.3"/>
<!-- brow ridges -->
<path d="M30,44 Q38,39 44,42" fill="none" stroke="#600040" stroke-width="1.9" stroke-linecap="round"/>
<path d="M56,42 Q63,39 71,44" fill="none" stroke="#600040" stroke-width="1.9" stroke-linecap="round"/>
<!-- eyes with hashtag iris -->
<circle cx="39" cy="50" r="6.5" fill="#300020" stroke="#FF70B0" stroke-width="1.2"/>
<circle cx="61" cy="50" r="6.5" fill="#300020" stroke="#FF70B0" stroke-width="1.2"/>
<circle cx="39" cy="50" r="5" fill="url(#sm-eye)"/>
<circle cx="61" cy="50" r="5" fill="url(#sm-eye)"/>
<!-- hashtag in iris -->
<line x1="37" y1="47" x2="37" y2="53" stroke="#CC2080" stroke-width="0.8"/>
<line x1="41" y1="47" x2="41" y2="53" stroke="#CC2080" stroke-width="0.8"/>
<line x1="35.5" y1="49" x2="42.5" y2="49" stroke="#CC2080" stroke-width="0.8"/>
<line x1="35.5" y1="51" x2="42.5" y2="51" stroke="#CC2080" stroke-width="0.8"/>
<line x1="59" y1="47" x2="59" y2="53" stroke="#CC2080" stroke-width="0.8"/>
<line x1="63" y1="47" x2="63" y2="53" stroke="#CC2080" stroke-width="0.8"/>
<line x1="57.5" y1="49" x2="64.5" y2="49" stroke="#CC2080" stroke-width="0.8"/>
<line x1="57.5" y1="51" x2="64.5" y2="51" stroke="#CC2080" stroke-width="0.8"/>
<circle cx="37" cy="47" r="0.9" fill="white" opacity="0.9"/>
<circle cx="59" cy="47" r="0.9" fill="white" opacity="0.9"/>
<!-- perpetually online expression -->
<path d="M34,67 Q50,78 66,67" fill="#600040" stroke="#CC2080" stroke-width="1.2"/>
<path d="M34,67 Q50,73 66,67" fill="white" opacity="0.9"/>
<path d="M41,67 L41,72" stroke="#CC2080" stroke-width="0.6" opacity="0.5"/>
<path d="M50,67 L50,73" stroke="#CC2080" stroke-width="0.6" opacity="0.5"/>
<path d="M59,67 L59,72" stroke="#CC2080" stroke-width="0.6" opacity="0.5"/>
<!-- notification dot -->
<circle cx="72" cy="50" r="3" fill="#FF0040" opacity="0.9"/>
<text x="70.5" y="52" font-size="4" fill="white" font-family="sans-serif" font-weight="bold">1</text>
</svg>`,

"PR-MGR": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="pr-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#100020"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <radialGradient id="pr-skin" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#C080FF"/>
    <stop offset="55%" stop-color="#8020C0"/>
    <stop offset="100%" stop-color="#3a0060"/>
  </radialGradient>
  <radialGradient id="pr-eye" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#FFEECC"/>
    <stop offset="50%" stop-color="#CC8800"/>
    <stop offset="100%" stop-color="#1a0e00"/>
  </radialGradient>
  <filter id="pr-glow">
    <feGaussianBlur stdDeviation="1.3" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#pr-bg)"/>
<!-- microphone antennae -->
<line x1="42" y1="27" x2="36" y2="12" stroke="#C080FF" stroke-width="1.8" stroke-linecap="round"/>
<rect x="33" y="8" width="6" height="5" rx="3" fill="#C080FF" filter="url(#pr-glow)"/>
<line x1="42" y1="27" x2="36" y2="17" stroke="#C080FF" stroke-width="0.7" opacity="0.4" stroke-dasharray="1,2"/>
<line x1="58" y1="27" x2="64" y2="12" stroke="#C080FF" stroke-width="1.8" stroke-linecap="round"/>
<rect x="61" y="8" width="6" height="5" rx="3" fill="#C080FF" filter="url(#pr-glow)"/>
<!-- speaker arc marks -->
<path d="M24,47 Q20,52 24,57" fill="none" stroke="#C080FF" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>
<path d="M21,44 Q15,52 21,60" fill="none" stroke="#C080FF" stroke-width="0.9" stroke-linecap="round" opacity="0.5"/>
<!-- polished head -->
<ellipse cx="50" cy="53" rx="24" ry="27" fill="url(#pr-skin)" stroke="#8020C0" stroke-width="1.3"/>
<!-- brow ridges -->
<path d="M31,43 Q38,38 44,41" fill="none" stroke="#3a0060" stroke-width="1.9" stroke-linecap="round"/>
<path d="M56,41 Q63,38 70,43" fill="none" stroke="#3a0060" stroke-width="1.9" stroke-linecap="round"/>
<!-- eyes with microphone iris -->
<circle cx="39" cy="49" r="6.5" fill="#1a0e00" stroke="#C080FF" stroke-width="1.2"/>
<circle cx="61" cy="49" r="6.5" fill="#1a0e00" stroke="#C080FF" stroke-width="1.2"/>
<circle cx="39" cy="49" r="5" fill="url(#pr-eye)"/>
<circle cx="61" cy="49" r="5" fill="url(#pr-eye)"/>
<!-- mic shape in iris -->
<rect x="37.5" y="45" width="3" height="5" rx="1.5" fill="#8020C0" opacity="0.9"/>
<path d="M36,49 Q36,53 39,53 Q42,53 42,49" fill="none" stroke="#8020C0" stroke-width="0.8"/>
<line x1="39" y1="53" x2="39" y2="55" stroke="#8020C0" stroke-width="0.8"/>
<rect x="59.5" y="45" width="3" height="5" rx="1.5" fill="#8020C0" opacity="0.9"/>
<path d="M58,49 Q58,53 61,53 Q64,53 64,49" fill="none" stroke="#8020C0" stroke-width="0.8"/>
<line x1="61" y1="53" x2="61" y2="55" stroke="#8020C0" stroke-width="0.8"/>
<circle cx="37" cy="46.5" r="0.9" fill="white" opacity="0.9"/>
<circle cx="59" cy="46.5" r="0.9" fill="white" opacity="0.9"/>
<!-- broadcast smile -->
<path d="M34,66 Q50,76 66,66" fill="#3a0060" stroke="#8020C0" stroke-width="1.2"/>
<path d="M34,66 Q50,71 66,66" fill="white" opacity="0.9"/>
<path d="M41,66 L41,70" stroke="#8020C0" stroke-width="0.6" opacity="0.5"/>
<path d="M50,66 L50,71" stroke="#8020C0" stroke-width="0.6" opacity="0.5"/>
<path d="M59,66 L59,70" stroke="#8020C0" stroke-width="0.6" opacity="0.5"/>
</svg>`,

"EVENTS-MGR": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="em-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#1a0808"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <radialGradient id="em-skin" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#FF9080"/>
    <stop offset="55%" stop-color="#E04040"/>
    <stop offset="100%" stop-color="#700020"/>
  </radialGradient>
  <radialGradient id="em-eye" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#FFFF80"/>
    <stop offset="50%" stop-color="#FF4080"/>
    <stop offset="100%" stop-color="#200015"/>
  </radialGradient>
  <filter id="em-glow">
    <feGaussianBlur stdDeviation="1.5" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#em-bg)"/>
<!-- party hat crown -->
<polygon points="50,5 42,26 58,26" fill="#FF9080" stroke="#FFD700" stroke-width="1"/>
<circle cx="50" cy="5" r="2" fill="#FFD700" filter="url(#em-glow)"/>
<circle cx="44" cy="14" r="1" fill="#FFD700" opacity="0.8"/>
<circle cx="56" cy="14" r="1" fill="#FFD700" opacity="0.8"/>
<!-- festive side antennae -->
<line x1="37" y1="30" x2="24" y2="17" stroke="#FF9080" stroke-width="1.7" stroke-linecap="round"/>
<circle cx="24" cy="17" r="2.5" fill="#FFD700" filter="url(#em-glow)"/>
<line x1="63" y1="30" x2="76" y2="17" stroke="#FF9080" stroke-width="1.7" stroke-linecap="round"/>
<circle cx="76" cy="17" r="2.5" fill="#FFD700" filter="url(#em-glow)"/>
<!-- festive face -->
<ellipse cx="50" cy="56" rx="26" ry="27" fill="url(#em-skin)" stroke="#E04040" stroke-width="1.3"/>
<!-- brow ridges joyful -->
<path d="M29,46 Q37,40 44,43" fill="none" stroke="#700020" stroke-width="2" stroke-linecap="round"/>
<path d="M56,43 Q64,40 71,46" fill="none" stroke="#700020" stroke-width="2" stroke-linecap="round"/>
<!-- eyes with spotlight iris -->
<circle cx="39" cy="52" r="7" fill="#200015" stroke="#FF9080" stroke-width="1.2"/>
<circle cx="61" cy="52" r="7" fill="#200015" stroke="#FF9080" stroke-width="1.2"/>
<circle cx="39" cy="52" r="5.5" fill="url(#em-eye)"/>
<circle cx="61" cy="52" r="5.5" fill="url(#em-eye)"/>
<!-- spotlight beams in iris -->
<path d="M39,52 L36,48 M39,52 L39,47 M39,52 L42,48" stroke="#E04040" stroke-width="0.8" stroke-linecap="round" opacity="0.8"/>
<path d="M61,52 L58,48 M61,52 L61,47 M61,52 L64,48" stroke="#E04040" stroke-width="0.8" stroke-linecap="round" opacity="0.8"/>
<circle cx="37" cy="49.5" r="1" fill="white" opacity="0.9"/>
<circle cx="59" cy="49.5" r="1" fill="white" opacity="0.9"/>
<!-- joyful wide smile -->
<path d="M31,68 Q50,84 69,68" fill="#700020" stroke="#E04040" stroke-width="1.4"/>
<path d="M31,68 Q50,76 69,68" fill="white" opacity="0.95"/>
<path d="M38,68 L38,75" stroke="#E04040" stroke-width="0.7" opacity="0.5"/>
<path d="M50,68 L50,76" stroke="#E04040" stroke-width="0.7" opacity="0.5"/>
<path d="M62,68 L62,75" stroke="#E04040" stroke-width="0.7" opacity="0.5"/>
<!-- confetti marks -->
<rect x="24" y="58" width="3" height="2" rx="0.5" fill="#FFD700" opacity="0.7" transform="rotate(-20,25,59)"/>
<rect x="73" y="58" width="3" height="2" rx="0.5" fill="#FFD700" opacity="0.7" transform="rotate(20,74,59)"/>
<rect x="26" y="63" width="2" height="3" rx="0.5" fill="#FF9080" opacity="0.6" transform="rotate(10,27,64)"/>
<rect x="72" y="63" width="2" height="3" rx="0.5" fill="#FF9080" opacity="0.6" transform="rotate(-10,73,64)"/>
</svg>`,

"VP-CS": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="vc-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#001a10"/>
    <stop offset="100%" stop-color="#030108"/>
  </radialGradient>
  <radialGradient id="vc-skin" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#80E8C0"/>
    <stop offset="55%" stop-color="#20A070"/>
    <stop offset="100%" stop-color="#003a28"/>
  </radialGradient>
  <radialGradient id="vc-eye" cx="35%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#FFFFFF"/>
    <stop offset="40%" stop-color="#80FFD0"/>
    <stop offset="100%" stop-color="#001a10"/>
  </radialGradient>
  <filter id="vc-glow">
    <feGaussianBlur stdDeviation="1.5" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#vc-bg)"/>
<!-- success star crown -->
<polygon points="50,7 52.5,14 60,14 54,18.5 56.5,26 50,21.5 43.5,26 46,18.5 40,14 47.5,14" fill="#FFD700" filter="url(#vc-glow)" opacity="0.95"/>
<!-- caring antennae -->
<line x1="38" y1="29" x2="30" y2="15" stroke="#80E8C0" stroke-width="1.7" stroke-linecap="round"/>
<circle cx="30" cy="14" r="2.2" fill="#80E8C0" filter="url(#vc-glow)"/>
<line x1="62" y1="29" x2="70" y2="15" stroke="#80E8C0" stroke-width="1.7" stroke-linecap="round"/>
<circle cx="70" cy="14" r="2.2" fill="#80E8C0" filter="url(#vc-glow)"/>
<!-- warm commanding head -->
<ellipse cx="50" cy="55" rx="26" ry="27" fill="url(#vc-skin)" stroke="#20A070" stroke-width="1.3"/>
<!-- brow ridges warm -->
<path d="M29,45 Q37,40 44,43" fill="none" stroke="#003a28" stroke-width="2" stroke-linecap="round"/>
<path d="M56,43 Q64,40 71,45" fill="none" stroke="#003a28" stroke-width="2" stroke-linecap="round"/>
<!-- eyes with customer-journey path iris -->
<circle cx="39" cy="51" r="7" fill="#001a10" stroke="#80E8C0" stroke-width="1.2"/>
<circle cx="61" cy="51" r="7" fill="#001a10" stroke="#80E8C0" stroke-width="1.2"/>
<circle cx="39" cy="51" r="5.5" fill="url(#vc-eye)"/>
<circle cx="61" cy="51" r="5.5" fill="url(#vc-eye)"/>
<!-- journey path in iris -->
<path d="M35,53 Q36,50 38,51 Q40,52 41,49 Q42,47 43,48" fill="none" stroke="#20A070" stroke-width="0.9" stroke-linecap="round"/>
<circle cx="35" cy="53" r="0.8" fill="#20A070" opacity="0.9"/>
<circle cx="39" cy="51" r="0.8" fill="#20A070" opacity="0.9"/>
<circle cx="43" cy="48" r="0.8" fill="#FFD700" opacity="0.9"/>
<path d="M57,53 Q58,50 60,51 Q62,52 63,49 Q64,47 65,48" fill="none" stroke="#20A070" stroke-width="0.9" stroke-linecap="round"/>
<circle cx="57" cy="53" r="0.8" fill="#20A070" opacity="0.9"/>
<circle cx="61" cy="51" r="0.8" fill="#20A070" opacity="0.9"/>
<circle cx="65" cy="48" r="0.8" fill="#FFD700" opacity="0.9"/>
<circle cx="37" cy="48.5" r="1" fill="white" opacity="0.9"/>
<circle cx="59" cy="48.5" r="1" fill="white" opacity="0.9"/>
<!-- genuine caring expression -->
<path d="M32,67 Q50,81 68,67" fill="#003a28" stroke="#20A070" stroke-width="1.3"/>
<path d="M32,67 Q50,74 68,67" fill="white" opacity="0.9"/>
<path d="M39,67 L39,73" stroke="#20A070" stroke-width="0.7" opacity="0.5"/>
<path d="M50,67 L50,74" stroke="#20A070" stroke-width="0.7" opacity="0.5"/>
<path d="M61,67 L61,73" stroke="#20A070" stroke-width="0.7" opacity="0.5"/>
<!-- warm cheek glow -->
<circle cx="27" cy="59" r="5.5" fill="#80E8C0" opacity="0.14"/>
<circle cx="73" cy="59" r="5.5" fill="#80E8C0" opacity="0.14"/>
</svg>`,

};

// Ensure output directory exists
if (!fs.existsSync(OUT)) {
  fs.mkdirSync(OUT, { recursive: true });
}

for (const [code, svg] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(OUT, `${code}.svg`), svg);
  console.log(`Written: ${code}.svg`);
}

console.log(`\nBatch 7 complete. ${Object.keys(svgs).length} alien SVGs written to ${OUT}`);
