import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, "../public/brand/avatars/agents");

const BG = `<defs><radialGradient id="bg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#1a1f3a"/><stop offset="100%" stop-color="#030108"/></radialGradient></defs><rect width="100" height="100" rx="18" fill="url(#bg)"/>`;

const svgs: Record<string, string> = {

  /* ------------------------------------------------------------------ */
  /* PLATFORM OPERATIONS CREW                                             */
  /* ------------------------------------------------------------------ */

  "SR-PLATFORM": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${BG}
<defs>
  <radialGradient id="spl-skin" cx="45%" cy="35%" r="58%">
    <stop offset="0%" stop-color="#9CADAA"/>
    <stop offset="60%" stop-color="#5C6B68"/>
    <stop offset="100%" stop-color="#2E3A38"/>
  </radialGradient>
  <radialGradient id="spl-iris" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#C0C8C7"/>
    <stop offset="100%" stop-color="#374140"/>
  </radialGradient>
  <filter id="spl-glow"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- Antennae: left angular -->
<line x1="38" y1="28" x2="30" y2="12" stroke="#8FA6A3" stroke-width="1.4"/>
<rect x="27" y="9" width="6" height="5" rx="1" fill="#5C6B68" stroke="#9CADAA" stroke-width="0.9"/>
<!-- Antennae: right angular -->
<line x1="62" y1="28" x2="70" y2="12" stroke="#8FA6A3" stroke-width="1.4"/>
<rect x="67" y="9" width="6" height="5" rx="1" fill="#5C6B68" stroke="#9CADAA" stroke-width="0.9"/>
<!-- Platform gear marks on temples -->
<circle cx="28" cy="43" r="4" fill="none" stroke="#8FA6A3" stroke-width="1"/>
<line x1="28" y1="38" x2="28" y2="36.5" stroke="#8FA6A3" stroke-width="1"/>
<line x1="28" y1="48" x2="28" y2="49.5" stroke="#8FA6A3" stroke-width="1"/>
<line x1="23" y1="43" x2="21.5" y2="43" stroke="#8FA6A3" stroke-width="1"/>
<line x1="33" y1="43" x2="34.5" y2="43" stroke="#8FA6A3" stroke-width="1"/>
<circle cx="72" cy="43" r="4" fill="none" stroke="#8FA6A3" stroke-width="1"/>
<line x1="72" y1="38" x2="72" y2="36.5" stroke="#8FA6A3" stroke-width="1"/>
<line x1="72" y1="48" x2="72" y2="49.5" stroke="#8FA6A3" stroke-width="1"/>
<line x1="67" y1="43" x2="65.5" y2="43" stroke="#8FA6A3" stroke-width="1"/>
<line x1="77" y1="43" x2="78.5" y2="43" stroke="#8FA6A3" stroke-width="1"/>
<!-- Angular head -->
<path d="M34,28 L66,28 L72,36 L72,62 L66,70 L34,70 L28,62 L28,36 Z" fill="url(#spl-skin)" stroke="#8FA6A3" stroke-width="1.4"/>
<!-- Forehead industrial ridge -->
<line x1="36" y1="33" x2="64" y2="33" stroke="#7A9290" stroke-width="1.2" opacity="0.7"/>
<!-- Left eye: hexagon grid iris -->
<circle cx="40" cy="46" r="7" fill="#1A2423" stroke="#9CADAA" stroke-width="1.2"/>
<circle cx="40" cy="46" r="4.5" fill="url(#spl-iris)"/>
<!-- Hexagon grid pattern in iris -->
<polygon points="40,42.2 42.6,43.6 42.6,46.4 40,47.8 37.4,46.4 37.4,43.6" fill="none" stroke="#C0C8C7" stroke-width="0.5" opacity="0.8"/>
<line x1="37.4" y1="43.6" x2="42.6" y2="46.4" stroke="#C0C8C7" stroke-width="0.3" opacity="0.5"/>
<line x1="42.6" y1="43.6" x2="37.4" y2="46.4" stroke="#C0C8C7" stroke-width="0.3" opacity="0.5"/>
<circle cx="40" cy="45" r="1.2" fill="#EAEAEA" filter="url(#spl-glow)"/>
<!-- Right eye: hexagon grid iris -->
<circle cx="60" cy="46" r="7" fill="#1A2423" stroke="#9CADAA" stroke-width="1.2"/>
<circle cx="60" cy="46" r="4.5" fill="url(#spl-iris)"/>
<polygon points="60,42.2 62.6,43.6 62.6,46.4 60,47.8 57.4,46.4 57.4,43.6" fill="none" stroke="#C0C8C7" stroke-width="0.5" opacity="0.8"/>
<line x1="57.4" y1="43.6" x2="62.6" y2="46.4" stroke="#C0C8C7" stroke-width="0.3" opacity="0.5"/>
<line x1="62.6" y1="43.6" x2="57.4" y2="46.4" stroke="#C0C8C7" stroke-width="0.3" opacity="0.5"/>
<circle cx="60" cy="45" r="1.2" fill="#EAEAEA" filter="url(#spl-glow)"/>
<!-- Nose: small angular bridge -->
<line x1="50" y1="54" x2="50" y2="58" stroke="#7A9290" stroke-width="1"/>
<!-- Flat determined mouth -->
<line x1="42" y1="62" x2="58" y2="62" stroke="#9CADAA" stroke-width="1.4" stroke-linecap="round"/>
<line x1="44" y1="60" x2="44" y2="64" stroke="#8FA6A3" stroke-width="0.8"/>
<line x1="56" y1="60" x2="56" y2="64" stroke="#8FA6A3" stroke-width="0.8"/>
<!-- Body with gear marks -->
<path d="M34,70 L30,86 L50,84 L70,86 L66,70 Z" fill="#2E3A38" stroke="#8FA6A3" stroke-width="1"/>
<line x1="38" y1="77" x2="62" y2="77" stroke="#7A9290" stroke-width="0.7" opacity="0.6"/>
<circle cx="50" cy="80" r="3.5" fill="none" stroke="#8FA6A3" stroke-width="0.8"/>
<circle cx="50" cy="80" r="1.5" fill="#9CADAA" opacity="0.7"/>
<!-- Ground shadow -->
<ellipse cx="50" cy="93" rx="20" ry="2.5" fill="rgba(156,173,170,0.12)"/>
</svg>`,

  "PLATFORM-ENG": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${BG}
<defs>
  <radialGradient id="pe-skin" cx="45%" cy="35%" r="58%">
    <stop offset="0%" stop-color="#B0BEC5"/>
    <stop offset="60%" stop-color="#607D8B"/>
    <stop offset="100%" stop-color="#2E3B47"/>
  </radialGradient>
  <radialGradient id="pe-iris" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#E0E8ED"/>
    <stop offset="100%" stop-color="#37505E"/>
  </radialGradient>
  <filter id="pe-glow"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- Short straight antennae -->
<line x1="44" y1="26" x2="40" y2="13" stroke="#90A4AE" stroke-width="1.2"/>
<circle cx="39" cy="12" r="2.2" fill="#B0BEC5" stroke="#78909C" stroke-width="0.8"/>
<line x1="56" y1="26" x2="60" y2="13" stroke="#90A4AE" stroke-width="1.2"/>
<circle cx="61" cy="12" r="2.2" fill="#B0BEC5" stroke="#78909C" stroke-width="0.8"/>
<!-- Tool belt marks around chin area (small wrench shapes) -->
<g opacity="0.7">
  <line x1="33" y1="67" x2="36" y2="70" stroke="#90A4AE" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="33" y1="70" x2="36" y2="67" stroke="#90A4AE" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="64" y1="67" x2="67" y2="70" stroke="#90A4AE" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="64" y1="70" x2="67" y2="67" stroke="#90A4AE" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="46" y1="71" x2="48" y2="73" stroke="#90A4AE" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="52" y1="71" x2="54" y2="73" stroke="#90A4AE" stroke-width="1.2" stroke-linecap="round"/>
</g>
<!-- Compact round head -->
<circle cx="50" cy="47" r="24" fill="url(#pe-skin)" stroke="#90A4AE" stroke-width="1.3"/>
<!-- Forehead crease -->
<path d="M38,33 Q50,30 62,33" fill="none" stroke="#78909C" stroke-width="0.8" opacity="0.6"/>
<!-- Left eye: wrench-cross iris -->
<circle cx="40" cy="46" r="7" fill="#1B2830" stroke="#90A4AE" stroke-width="1.2"/>
<circle cx="40" cy="46" r="4.5" fill="url(#pe-iris)"/>
<!-- Wrench cross in iris -->
<rect x="38.5" y="43.5" width="3" height="5" rx="1" fill="#B0BEC5" opacity="0.8"/>
<rect x="37" y="45" width="6" height="2" rx="1" fill="#B0BEC5" opacity="0.8"/>
<circle cx="40" cy="44" r="1" fill="none" stroke="#E0E8ED" stroke-width="0.5"/>
<circle cx="40" cy="48" r="1" fill="none" stroke="#E0E8ED" stroke-width="0.5"/>
<circle cx="40" cy="45.5" r="0.9" fill="#FFFFFF" filter="url(#pe-glow)"/>
<!-- Right eye: wrench-cross iris -->
<circle cx="60" cy="46" r="7" fill="#1B2830" stroke="#90A4AE" stroke-width="1.2"/>
<circle cx="60" cy="46" r="4.5" fill="url(#pe-iris)"/>
<rect x="58.5" y="43.5" width="3" height="5" rx="1" fill="#B0BEC5" opacity="0.8"/>
<rect x="57" y="45" width="6" height="2" rx="1" fill="#B0BEC5" opacity="0.8"/>
<circle cx="60" cy="44" r="1" fill="none" stroke="#E0E8ED" stroke-width="0.5"/>
<circle cx="60" cy="48" r="1" fill="none" stroke="#E0E8ED" stroke-width="0.5"/>
<circle cx="60" cy="45.5" r="0.9" fill="#FFFFFF" filter="url(#pe-glow)"/>
<!-- Competent slight frown -->
<path d="M44,57 Q50,59 56,57" fill="none" stroke="#90A4AE" stroke-width="1.3" stroke-linecap="round"/>
<!-- Body -->
<path d="M30,68 L26,84 L50,82 L74,84 L70,68 Z" fill="#2E3B47" stroke="#78909C" stroke-width="1"/>
<line x1="36" y1="75" x2="64" y2="75" stroke="#607D8B" stroke-width="0.7" opacity="0.6"/>
<!-- Tool dots on body -->
<circle cx="42" cy="78" r="1.5" fill="#90A4AE" opacity="0.8"/>
<circle cx="50" cy="78" r="1.5" fill="#90A4AE" opacity="0.8"/>
<circle cx="58" cy="78" r="1.5" fill="#90A4AE" opacity="0.8"/>
<ellipse cx="50" cy="91" rx="20" ry="2.5" fill="rgba(144,164,174,0.12)"/>
</svg>`,

  "SR-DEVOPS": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${BG}
<defs>
  <radialGradient id="srd-skin" cx="45%" cy="35%" r="58%">
    <stop offset="0%" stop-color="#8DA06E"/>
    <stop offset="60%" stop-color="#4A5E36"/>
    <stop offset="100%" stop-color="#2A3520"/>
  </radialGradient>
  <radialGradient id="srd-iris" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#F59E0B"/>
    <stop offset="60%" stop-color="#B45309"/>
    <stop offset="100%" stop-color="#4A2800"/>
  </radialGradient>
  <filter id="srd-glow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- Pipeline tubes as antennae -->
<path d="M40,27 Q35,18 30,14" fill="none" stroke="#8DA06E" stroke-width="2.5" stroke-linecap="round"/>
<circle cx="29" cy="13" r="3.5" fill="#4A5E36" stroke="#8DA06E" stroke-width="1"/>
<line x1="25" y1="13" x2="33" y2="13" stroke="#A3C07B" stroke-width="0.8"/>
<path d="M60,27 Q65,18 70,14" fill="none" stroke="#8DA06E" stroke-width="2.5" stroke-linecap="round"/>
<circle cx="71" cy="13" r="3.5" fill="#4A5E36" stroke="#8DA06E" stroke-width="1"/>
<line x1="67" y1="13" x2="75" y2="13" stroke="#A3C07B" stroke-width="0.8"/>
<!-- Angular battle-ready head -->
<path d="M32,26 L68,26 L76,38 L76,62 L68,72 L32,72 L24,62 L24,38 Z" fill="url(#srd-skin)" stroke="#6B8050" stroke-width="1.4"/>
<!-- Forehead battle ridge -->
<line x1="34" y1="32" x2="66" y2="32" stroke="#A3C07B" stroke-width="1.5" opacity="0.6"/>
<!-- Brow ridge -->
<path d="M32,41 L46,38 L50,39 L54,38 L68,41" fill="none" stroke="#4A5E36" stroke-width="1.5"/>
<!-- Left eye: infinity loop amber iris -->
<circle cx="39" cy="48" r="7.5" fill="#131E0F" stroke="#6B8050" stroke-width="1.3"/>
<circle cx="39" cy="48" r="5" fill="url(#srd-iris)"/>
<!-- Infinity symbol (two circles + bridge) -->
<circle cx="37" cy="48" r="2" fill="none" stroke="#FCD34D" stroke-width="0.8" opacity="0.9"/>
<circle cx="41" cy="48" r="2" fill="none" stroke="#FCD34D" stroke-width="0.8" opacity="0.9"/>
<line x1="39" y1="46.5" x2="39" y2="49.5" stroke="#FCD34D" stroke-width="0.5" opacity="0.7"/>
<circle cx="39" cy="46.5" r="1" fill="#F59E0B" filter="url(#srd-glow)"/>
<!-- Right eye: infinity loop amber iris -->
<circle cx="61" cy="48" r="7.5" fill="#131E0F" stroke="#6B8050" stroke-width="1.3"/>
<circle cx="61" cy="48" r="5" fill="url(#srd-iris)"/>
<circle cx="59" cy="48" r="2" fill="none" stroke="#FCD34D" stroke-width="0.8" opacity="0.9"/>
<circle cx="63" cy="48" r="2" fill="none" stroke="#FCD34D" stroke-width="0.8" opacity="0.9"/>
<line x1="61" y1="46.5" x2="61" y2="49.5" stroke="#FCD34D" stroke-width="0.5" opacity="0.7"/>
<circle cx="61" cy="46.5" r="1" fill="#F59E0B" filter="url(#srd-glow)"/>
<!-- Determined straight mouth -->
<line x1="42" y1="62" x2="58" y2="62" stroke="#8DA06E" stroke-width="1.6" stroke-linecap="round"/>
<!-- Battle scar / chin line -->
<line x1="48" y1="65" x2="52" y2="68" stroke="#4A5E36" stroke-width="0.9" opacity="0.6"/>
<!-- Body -->
<path d="M32,72 L26,88 L50,86 L74,88 L68,72 Z" fill="#2A3520" stroke="#6B8050" stroke-width="1"/>
<line x1="36" y1="79" x2="64" y2="79" stroke="#8DA06E" stroke-width="0.7" opacity="0.5"/>
<!-- Pipeline symbols on chest -->
<circle cx="43" cy="82" r="2" fill="none" stroke="#8DA06E" stroke-width="0.8"/>
<line x1="45" y1="82" x2="47" y2="82" stroke="#F59E0B" stroke-width="0.9"/>
<circle cx="50" cy="82" r="2" fill="none" stroke="#8DA06E" stroke-width="0.8"/>
<line x1="52" y1="82" x2="54" y2="82" stroke="#F59E0B" stroke-width="0.9"/>
<circle cx="57" cy="82" r="2" fill="none" stroke="#22C55E" stroke-width="0.8"/>
<ellipse cx="50" cy="93" rx="20" ry="2.5" fill="rgba(141,160,110,0.15)"/>
</svg>`,

  "DEVOPS-ENG": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${BG}
<defs>
  <radialGradient id="dev-skin" cx="45%" cy="35%" r="58%">
    <stop offset="0%" stop-color="#81A96E"/>
    <stop offset="60%" stop-color="#4A7036"/>
    <stop offset="100%" stop-color="#283D1D"/>
  </radialGradient>
  <radialGradient id="dev-iris" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#A8C890"/>
    <stop offset="100%" stop-color="#2E4A1E"/>
  </radialGradient>
  <filter id="dev-glow"><feGaussianBlur stdDeviation="1" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- Short straight antennae (working class) -->
<line x1="43" y1="26" x2="41" y2="14" stroke="#81A96E" stroke-width="1.3"/>
<circle cx="41" cy="13" r="2" fill="#4A7036" stroke="#81A96E" stroke-width="0.8"/>
<line x1="57" y1="26" x2="59" y2="14" stroke="#81A96E" stroke-width="1.3"/>
<circle cx="59" cy="13" r="2" fill="#4A7036" stroke="#81A96E" stroke-width="0.8"/>
<!-- Furrowed competent brow marks -->
<line x1="34" y1="38" x2="46" y2="36" stroke="#81A96E" stroke-width="1.5" opacity="0.7"/>
<line x1="54" y1="36" x2="66" y2="38" stroke="#81A96E" stroke-width="1.5" opacity="0.7"/>
<!-- Working-class oval head -->
<ellipse cx="50" cy="48" rx="25" ry="23" fill="url(#dev-skin)" stroke="#6A9058" stroke-width="1.3"/>
<!-- Left eye: gear-cog iris -->
<circle cx="39" cy="45" r="7.5" fill="#142008" stroke="#6A9058" stroke-width="1.2"/>
<circle cx="39" cy="45" r="5" fill="url(#dev-iris)"/>
<!-- Gear cog teeth -->
<rect x="37.5" y="39.5" width="3" height="2.5" rx="0.5" fill="#A8C890" opacity="0.8"/>
<rect x="37.5" y="48" width="3" height="2.5" rx="0.5" fill="#A8C890" opacity="0.8"/>
<rect x="33.5" y="43.5" width="2.5" height="3" rx="0.5" fill="#A8C890" opacity="0.8"/>
<rect x="42" y="43.5" width="2.5" height="3" rx="0.5" fill="#A8C890" opacity="0.8"/>
<circle cx="39" cy="45" r="2.5" fill="#1E3010" stroke="#A8C890" stroke-width="0.6"/>
<circle cx="39" cy="44" r="1" fill="#C8E0B0" filter="url(#dev-glow)"/>
<!-- Right eye: gear-cog iris -->
<circle cx="61" cy="45" r="7.5" fill="#142008" stroke="#6A9058" stroke-width="1.2"/>
<circle cx="61" cy="45" r="5" fill="url(#dev-iris)"/>
<rect x="59.5" y="39.5" width="3" height="2.5" rx="0.5" fill="#A8C890" opacity="0.8"/>
<rect x="59.5" y="48" width="3" height="2.5" rx="0.5" fill="#A8C890" opacity="0.8"/>
<rect x="55.5" y="43.5" width="2.5" height="3" rx="0.5" fill="#A8C890" opacity="0.8"/>
<rect x="64" y="43.5" width="2.5" height="3" rx="0.5" fill="#A8C890" opacity="0.8"/>
<circle cx="61" cy="45" r="2.5" fill="#1E3010" stroke="#A8C890" stroke-width="0.6"/>
<circle cx="61" cy="44" r="1" fill="#C8E0B0" filter="url(#dev-glow)"/>
<!-- Competent slight smile -->
<path d="M42,57 Q50,61 58,57" fill="none" stroke="#81A96E" stroke-width="1.3" stroke-linecap="round"/>
<!-- Body: sleeves-rolled-up look (wider shoulders) -->
<path d="M28,68 L22,86 L50,84 L78,86 L72,68 Z" fill="#283D1D" stroke="#6A9058" stroke-width="1"/>
<line x1="34" y1="74" x2="66" y2="74" stroke="#81A96E" stroke-width="0.7" opacity="0.5"/>
<!-- Rolled sleeve marks -->
<line x1="28" y1="70" x2="28" y2="76" stroke="#6A9058" stroke-width="1.5" opacity="0.6"/>
<line x1="72" y1="70" x2="72" y2="76" stroke="#6A9058" stroke-width="1.5" opacity="0.6"/>
<ellipse cx="50" cy="93" rx="22" ry="2.5" fill="rgba(129,169,110,0.12)"/>
</svg>`,

  "SR-SRE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${BG}
<defs>
  <radialGradient id="srs-skin" cx="45%" cy="35%" r="58%">
    <stop offset="0%" stop-color="#5B7EA0"/>
    <stop offset="60%" stop-color="#2C4A6E"/>
    <stop offset="100%" stop-color="#0F1E35"/>
  </radialGradient>
  <radialGradient id="srs-iris" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#60A8D0"/>
    <stop offset="60%" stop-color="#1A5C8A"/>
    <stop offset="100%" stop-color="#0A2840"/>
  </radialGradient>
  <filter id="srs-glow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- Radar antenna: single spike with dish -->
<line x1="50" y1="25" x2="50" y2="10" stroke="#4A7090" stroke-width="1.5"/>
<path d="M44,10 Q50,6 56,10" fill="none" stroke="#60A8D0" stroke-width="1.2" stroke-linecap="round"/>
<circle cx="50" cy="10" r="2" fill="#2C4A6E" stroke="#60A8D0" stroke-width="0.9"/>
<!-- Side scan emitters -->
<line x1="24" y1="45" x2="16" y2="40" stroke="#4A7090" stroke-width="1"/>
<circle cx="15" cy="39" r="2" fill="#2C4A6E" stroke="#60A8D0" stroke-width="0.7"/>
<line x1="76" y1="45" x2="84" y2="40" stroke="#4A7090" stroke-width="1"/>
<circle cx="85" cy="39" r="2" fill="#2C4A6E" stroke="#60A8D0" stroke-width="0.7"/>
<!-- Alert scan line across forehead -->
<line x1="28" y1="34" x2="72" y2="34" stroke="#60A8D0" stroke-width="0.8" opacity="0.8" stroke-dasharray="3,2"/>
<!-- Small triangular alert marks -->
<polygon points="48,30 50,26 52,30" fill="none" stroke="#3BB8E0" stroke-width="0.7" opacity="0.7"/>
<!-- Vigilant angular face -->
<path d="M30,26 L70,26 L78,40 L78,62 L70,72 L30,72 L22,62 L22,40 Z" fill="url(#srs-skin)" stroke="#4A7090" stroke-width="1.4"/>
<!-- Left eye: uptime-graph iris -->
<circle cx="38" cy="48" r="8" fill="#0A1825" stroke="#4A7090" stroke-width="1.3"/>
<circle cx="38" cy="48" r="5.5" fill="url(#srs-iris)"/>
<!-- Uptime graph lines in iris -->
<polyline points="33.5,50 35.5,47 37,49.5 39,46 40.5,48 42.5,50" fill="none" stroke="#A0D4EE" stroke-width="0.7" opacity="0.9"/>
<line x1="33.5" y1="51" x2="42.5" y2="51" stroke="#3BB8E0" stroke-width="0.4" opacity="0.5"/>
<circle cx="38" cy="46.5" r="1" fill="#B0E0F8" filter="url(#srs-glow)"/>
<!-- Right eye: uptime-graph iris -->
<circle cx="62" cy="48" r="8" fill="#0A1825" stroke="#4A7090" stroke-width="1.3"/>
<circle cx="62" cy="48" r="5.5" fill="url(#srs-iris)"/>
<polyline points="57.5,50 59.5,47 61,49.5 63,46 64.5,48 66.5,50" fill="none" stroke="#A0D4EE" stroke-width="0.7" opacity="0.9"/>
<line x1="57.5" y1="51" x2="66.5" y2="51" stroke="#3BB8E0" stroke-width="0.4" opacity="0.5"/>
<circle cx="62" cy="46.5" r="1" fill="#B0E0F8" filter="url(#srs-glow)"/>
<!-- Alert vigilant mouth -->
<line x1="44" y1="62" x2="56" y2="62" stroke="#60A8D0" stroke-width="1.5" stroke-linecap="round"/>
<line x1="44" y1="60" x2="44" y2="64" stroke="#4A7090" stroke-width="0.8"/>
<line x1="56" y1="60" x2="56" y2="64" stroke="#4A7090" stroke-width="0.8"/>
<!-- Body -->
<path d="M30,72 L25,88 L50,86 L75,88 L70,72 Z" fill="#0F1E35" stroke="#4A7090" stroke-width="1"/>
<line x1="34" y1="79" x2="66" y2="79" stroke="#2C4A6E" stroke-width="0.7" opacity="0.6"/>
<!-- Uptime percentage on chest -->
<text x="50" y="84" font-family="monospace" font-size="5" fill="#60A8D0" text-anchor="middle" opacity="0.9">99.99%</text>
<ellipse cx="50" cy="93" rx="22" ry="2.5" fill="rgba(91,126,160,0.15)"/>
</svg>`,

  "SRE-ENG": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${BG}
<defs>
  <radialGradient id="sree-skin" cx="45%" cy="35%" r="58%">
    <stop offset="0%" stop-color="#4E6E9A"/>
    <stop offset="60%" stop-color="#1E3A6A"/>
    <stop offset="100%" stop-color="#0A1830"/>
  </radialGradient>
  <radialGradient id="sree-iris" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#EF4444"/>
    <stop offset="30%" stop-color="#22C55E"/>
    <stop offset="70%" stop-color="#22C55E"/>
    <stop offset="100%" stop-color="#15803D"/>
  </radialGradient>
  <filter id="sree-glow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- On-call headset arc around head -->
<path d="M20,42 Q22,24 50,22 Q78,24 80,42" fill="none" stroke="#3A6090" stroke-width="2.5" stroke-linecap="round"/>
<circle cx="19" cy="43" r="4" fill="#1E3A6A" stroke="#3A6090" stroke-width="1.2"/>
<circle cx="81" cy="43" r="4" fill="#1E3A6A" stroke="#3A6090" stroke-width="1.2"/>
<!-- Mic boom on left -->
<line x1="17" y1="45" x2="14" y2="52" stroke="#3A6090" stroke-width="1.2"/>
<circle cx="13" cy="53" r="2" fill="#22C55E" opacity="0.9"/>
<!-- Round alert face -->
<circle cx="50" cy="50" r="26" fill="url(#sree-skin)" stroke="#3A6090" stroke-width="1.3"/>
<!-- Left eye: heartbeat/pulse iris -->
<circle cx="38" cy="47" r="8" fill="#0A1428" stroke="#3A6090" stroke-width="1.2"/>
<circle cx="38" cy="47" r="5.5" fill="url(#sree-iris)"/>
<!-- Pulse/heartbeat line in iris -->
<polyline points="33,47 35,47 36,44 37.5,50 39,44 40.5,47.5 42.5,47.5" fill="none" stroke="#FFFFFF" stroke-width="0.9" opacity="0.95"/>
<circle cx="38" cy="46" r="0.9" fill="#FAFAFA" filter="url(#sree-glow)"/>
<!-- Right eye: heartbeat/pulse iris -->
<circle cx="62" cy="47" r="8" fill="#0A1428" stroke="#3A6090" stroke-width="1.2"/>
<circle cx="62" cy="47" r="5.5" fill="url(#sree-iris)"/>
<polyline points="57,47 59,47 60,44 61.5,50 63,44 64.5,47.5 66.5,47.5" fill="none" stroke="#FFFFFF" stroke-width="0.9" opacity="0.95"/>
<circle cx="62" cy="46" r="0.9" fill="#FAFAFA" filter="url(#sree-glow)"/>
<!-- Alert wide mouth -->
<path d="M40,60 Q50,65 60,60" fill="none" stroke="#4E6E9A" stroke-width="1.5" stroke-linecap="round"/>
<!-- Body -->
<path d="M28,73 L23,88 L50,87 L77,88 L72,73 Z" fill="#0A1830" stroke="#3A6090" stroke-width="1"/>
<line x1="33" y1="79" x2="67" y2="79" stroke="#1E3A6A" stroke-width="0.7" opacity="0.6"/>
<!-- On-call badge -->
<rect x="43" y="81" width="14" height="5" rx="1.5" fill="#1E3A6A" stroke="#22C55E" stroke-width="0.8"/>
<circle cx="47" cy="83.5" r="1.2" fill="#22C55E" opacity="0.9"/>
<text x="53" y="84.5" font-family="monospace" font-size="3.5" fill="#A0C8A0" text-anchor="middle">ON</text>
<ellipse cx="50" cy="93" rx="21" ry="2.5" fill="rgba(78,110,154,0.15)"/>
</svg>`,

  /* ------------------------------------------------------------------ */
  /* PRODUCT MANAGEMENT TEAM                                              */
  /* ------------------------------------------------------------------ */

  "VP-PROD": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${BG}
<defs>
  <radialGradient id="vpp-skin" cx="45%" cy="35%" r="58%">
    <stop offset="0%" stop-color="#7BA8D4"/>
    <stop offset="60%" stop-color="#2C5F8A"/>
    <stop offset="100%" stop-color="#0E2640"/>
  </radialGradient>
  <radialGradient id="vpp-iris" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#A8D4F0"/>
    <stop offset="60%" stop-color="#2C5F8A"/>
    <stop offset="100%" stop-color="#0A1F30"/>
  </radialGradient>
  <filter id="vpp-glow"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- Crown of 5 product gems -->
<polygon points="50,8 51.5,12 53,8 51.5,6" fill="#4DA6FF" opacity="0.95"/>
<polygon points="42,10 43,14 44.5,10 43,8.5" fill="#60B8FF" opacity="0.85"/>
<polygon points="58,10 57,14 55.5,10 57,8.5" fill="#60B8FF" opacity="0.85"/>
<polygon points="35,15 36,18.5 37.5,15 36,13.5" fill="#82CAFF" opacity="0.75"/>
<polygon points="65,15 64,18.5 62.5,15 64,13.5" fill="#82CAFF" opacity="0.75"/>
<!-- Gem sparkles -->
<circle cx="50" cy="8" r="1.2" fill="#FFFFFF" filter="url(#vpp-glow)" opacity="0.9"/>
<!-- Elegant oval head -->
<ellipse cx="50" cy="50" rx="23" ry="25" fill="url(#vpp-skin)" stroke="#5A90C0" stroke-width="1.4"/>
<!-- Sharp strategic brow lines -->
<line x1="32" y1="38" x2="46" y2="35" stroke="#2C5F8A" stroke-width="1.5"/>
<line x1="54" y1="35" x2="68" y2="38" stroke="#2C5F8A" stroke-width="1.5"/>
<!-- Left eye: roadmap-grid iris -->
<circle cx="39" cy="46" r="8" fill="#08182A" stroke="#5A90C0" stroke-width="1.3"/>
<circle cx="39" cy="46" r="5.5" fill="url(#vpp-iris)"/>
<!-- Grid lines in iris (roadmap) -->
<line x1="33.5" y1="44" x2="44.5" y2="44" stroke="#A8D4F0" stroke-width="0.5" opacity="0.7"/>
<line x1="33.5" y1="46" x2="44.5" y2="46" stroke="#A8D4F0" stroke-width="0.5" opacity="0.7"/>
<line x1="33.5" y1="48" x2="44.5" y2="48" stroke="#A8D4F0" stroke-width="0.5" opacity="0.7"/>
<line x1="37" y1="41" x2="37" y2="51" stroke="#A8D4F0" stroke-width="0.5" opacity="0.5"/>
<line x1="41" y1="41" x2="41" y2="51" stroke="#A8D4F0" stroke-width="0.5" opacity="0.5"/>
<circle cx="39" cy="45" r="1.3" fill="#CCEEFF" filter="url(#vpp-glow)"/>
<!-- Right eye: roadmap-grid iris -->
<circle cx="61" cy="46" r="8" fill="#08182A" stroke="#5A90C0" stroke-width="1.3"/>
<circle cx="61" cy="46" r="5.5" fill="url(#vpp-iris)"/>
<line x1="55.5" y1="44" x2="66.5" y2="44" stroke="#A8D4F0" stroke-width="0.5" opacity="0.7"/>
<line x1="55.5" y1="46" x2="66.5" y2="46" stroke="#A8D4F0" stroke-width="0.5" opacity="0.7"/>
<line x1="55.5" y1="48" x2="66.5" y2="48" stroke="#A8D4F0" stroke-width="0.5" opacity="0.7"/>
<line x1="59" y1="41" x2="59" y2="51" stroke="#A8D4F0" stroke-width="0.5" opacity="0.5"/>
<line x1="63" y1="41" x2="63" y2="51" stroke="#A8D4F0" stroke-width="0.5" opacity="0.5"/>
<circle cx="61" cy="45" r="1.3" fill="#CCEEFF" filter="url(#vpp-glow)"/>
<!-- Refined smile -->
<path d="M41,60 Q50,66 59,60" fill="none" stroke="#7BA8D4" stroke-width="1.5" stroke-linecap="round"/>
<!-- Body: polished -->
<path d="M30,72 L26,87 L50,85 L74,87 L70,72 Z" fill="#0E2640" stroke="#5A90C0" stroke-width="1"/>
<!-- Collar -->
<line x1="44" y1="72" x2="50" y2="76" stroke="#5A90C0" stroke-width="1.2"/>
<line x1="56" y1="72" x2="50" y2="76" stroke="#5A90C0" stroke-width="1.2"/>
<ellipse cx="50" cy="93" rx="20" ry="2.5" fill="rgba(123,168,212,0.15)"/>
</svg>`,

  "DIR-PROD": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${BG}
<defs>
  <radialGradient id="dp-skin" cx="45%" cy="35%" r="58%">
    <stop offset="0%" stop-color="#4A7AB5"/>
    <stop offset="60%" stop-color="#1A3D70"/>
    <stop offset="100%" stop-color="#0A1A35"/>
  </radialGradient>
  <radialGradient id="dp-iris" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#7EC8E3"/>
    <stop offset="50%" stop-color="#2A78B0"/>
    <stop offset="100%" stop-color="#0A2840"/>
  </radialGradient>
  <filter id="dp-glow"><feGaussianBlur stdDeviation="1.3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- Pinned-note marking on forehead -->
<rect x="44" y="24" width="12" height="9" rx="1.5" fill="#1A3D70" stroke="#4A90C8" stroke-width="0.9"/>
<line x1="46" y1="27" x2="54" y2="27" stroke="#7EC8E3" stroke-width="0.7"/>
<line x1="46" y1="29" x2="54" y2="29" stroke="#7EC8E3" stroke-width="0.7"/>
<line x1="46" y1="31" x2="51" y2="31" stroke="#7EC8E3" stroke-width="0.7"/>
<!-- Two side antennae -->
<line x1="36" y1="30" x2="28" y2="16" stroke="#4A7AB5" stroke-width="1.3"/>
<circle cx="27" cy="15" r="2.5" fill="#1A3D70" stroke="#7EC8E3" stroke-width="0.8"/>
<line x1="64" y1="30" x2="72" y2="16" stroke="#4A7AB5" stroke-width="1.3"/>
<circle cx="73" cy="15" r="2.5" fill="#1A3D70" stroke="#7EC8E3" stroke-width="0.8"/>
<!-- Authoritative face -->
<path d="M28,30 L72,30 L76,44 L76,64 L72,74 L28,74 L24,64 L24,44 Z" fill="url(#dp-skin)" stroke="#3A6AA0" stroke-width="1.4"/>
<!-- Left eye: kanban-board iris (columns) -->
<circle cx="38" cy="50" r="8" fill="#080F1E" stroke="#3A6AA0" stroke-width="1.3"/>
<circle cx="38" cy="50" r="5.5" fill="url(#dp-iris)"/>
<!-- Kanban columns -->
<line x1="35" y1="45.5" x2="35" y2="54.5" stroke="#A0D8F0" stroke-width="0.8" opacity="0.8"/>
<line x1="38" y1="45.5" x2="38" y2="54.5" stroke="#A0D8F0" stroke-width="0.8" opacity="0.8"/>
<line x1="41" y1="45.5" x2="41" y2="54.5" stroke="#A0D8F0" stroke-width="0.8" opacity="0.8"/>
<!-- Cards in each column -->
<rect x="33.5" y="47" width="2" height="2" rx="0.3" fill="#4A90C8" opacity="0.9"/>
<rect x="33.5" y="50.5" width="2" height="2" rx="0.3" fill="#4A90C8" opacity="0.7"/>
<rect x="36.5" y="47" width="2" height="2" rx="0.3" fill="#4AE090" opacity="0.9"/>
<rect x="39.5" y="47" width="2" height="2" rx="0.3" fill="#F59E0B" opacity="0.9"/>
<circle cx="38" cy="49" r="1" fill="#D0EFFF" filter="url(#dp-glow)"/>
<!-- Right eye: kanban-board iris -->
<circle cx="62" cy="50" r="8" fill="#080F1E" stroke="#3A6AA0" stroke-width="1.3"/>
<circle cx="62" cy="50" r="5.5" fill="url(#dp-iris)"/>
<line x1="59" y1="45.5" x2="59" y2="54.5" stroke="#A0D8F0" stroke-width="0.8" opacity="0.8"/>
<line x1="62" y1="45.5" x2="62" y2="54.5" stroke="#A0D8F0" stroke-width="0.8" opacity="0.8"/>
<line x1="65" y1="45.5" x2="65" y2="54.5" stroke="#A0D8F0" stroke-width="0.8" opacity="0.8"/>
<rect x="57.5" y="47" width="2" height="2" rx="0.3" fill="#4A90C8" opacity="0.9"/>
<rect x="57.5" y="50.5" width="2" height="2" rx="0.3" fill="#4A90C8" opacity="0.7"/>
<rect x="60.5" y="47" width="2" height="2" rx="0.3" fill="#4AE090" opacity="0.9"/>
<rect x="63.5" y="47" width="2" height="2" rx="0.3" fill="#F59E0B" opacity="0.9"/>
<circle cx="62" cy="49" r="1" fill="#D0EFFF" filter="url(#dp-glow)"/>
<!-- Focused straight mouth -->
<line x1="43" y1="63" x2="57" y2="63" stroke="#4A7AB5" stroke-width="1.5" stroke-linecap="round"/>
<!-- Body -->
<path d="M28,74 L24,88 L50,87 L76,88 L72,74 Z" fill="#0A1A35" stroke="#3A6AA0" stroke-width="1"/>
<line x1="34" y1="80" x2="66" y2="80" stroke="#1A3D70" stroke-width="0.7" opacity="0.6"/>
<ellipse cx="50" cy="93" rx="21" ry="2.5" fill="rgba(74,122,181,0.15)"/>
</svg>`,

  "GPM": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${BG}
<defs>
  <radialGradient id="gpm-skin" cx="45%" cy="35%" r="58%">
    <stop offset="0%" stop-color="#7090B0"/>
    <stop offset="60%" stop-color="#3A5878"/>
    <stop offset="100%" stop-color="#182840"/>
  </radialGradient>
  <radialGradient id="gpm-iris" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#E05050"/>
    <stop offset="40%" stop-color="#C03030"/>
    <stop offset="100%" stop-color="#600000"/>
  </radialGradient>
  <filter id="gpm-glow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- Wide confident head -->
<ellipse cx="50" cy="49" rx="28" ry="24" fill="url(#gpm-skin)" stroke="#5078A0" stroke-width="1.4"/>
<!-- Commanding brow marks -->
<line x1="30" y1="38" x2="46" y2="36" stroke="#3A5878" stroke-width="1.8"/>
<line x1="54" y1="36" x2="70" y2="38" stroke="#3A5878" stroke-width="1.8"/>
<!-- Left eye: OKR bullseye iris -->
<circle cx="37" cy="47" r="8.5" fill="#0A1420" stroke="#4A6890" stroke-width="1.3"/>
<circle cx="37" cy="47" r="6" fill="#600000"/>
<circle cx="37" cy="47" r="4.5" fill="#901010"/>
<circle cx="37" cy="47" r="3" fill="#C03030"/>
<circle cx="37" cy="47" r="1.5" fill="#E05050"/>
<!-- Bullseye hit dot -->
<circle cx="37" cy="46" r="0.8" fill="#FFFFFF" filter="url(#gpm-glow)"/>
<!-- Right eye: OKR bullseye iris -->
<circle cx="63" cy="47" r="8.5" fill="#0A1420" stroke="#4A6890" stroke-width="1.3"/>
<circle cx="63" cy="47" r="6" fill="#600000"/>
<circle cx="63" cy="47" r="4.5" fill="#901010"/>
<circle cx="63" cy="47" r="3" fill="#C03030"/>
<circle cx="63" cy="47" r="1.5" fill="#E05050"/>
<circle cx="63" cy="46" r="0.8" fill="#FFFFFF" filter="url(#gpm-glow)"/>
<!-- Satisfied confident expression -->
<path d="M38,60 Q50,67 62,60" fill="none" stroke="#7090B0" stroke-width="1.8" stroke-linecap="round"/>
<!-- Chin confidence line -->
<line x1="46" y1="65" x2="54" y2="65" stroke="#5078A0" stroke-width="0.9" opacity="0.6"/>
<!-- Body: wide frame -->
<path d="M25,70 L20,87 L50,85 L80,87 L75,70 Z" fill="#182840" stroke="#4A6890" stroke-width="1"/>
<line x1="30" y1="77" x2="70" y2="77" stroke="#3A5878" stroke-width="0.7" opacity="0.6"/>
<!-- Status indicators -->
<circle cx="43" cy="81" r="2" fill="#22C55E" opacity="0.85"/>
<circle cx="50" cy="81" r="2" fill="#22C55E" opacity="0.85"/>
<circle cx="57" cy="81" r="2" fill="#F59E0B" opacity="0.85"/>
<ellipse cx="50" cy="93" rx="22" ry="2.5" fill="rgba(112,144,176,0.15)"/>
</svg>`,

  "SR-PM": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${BG}
<defs>
  <radialGradient id="spm-skin" cx="45%" cy="35%" r="58%">
    <stop offset="0%" stop-color="#6090C8"/>
    <stop offset="60%" stop-color="#2A548A"/>
    <stop offset="100%" stop-color="#0C2040"/>
  </radialGradient>
  <radialGradient id="spm-iris" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#A0C8F0"/>
    <stop offset="50%" stop-color="#3070B0"/>
    <stop offset="100%" stop-color="#0A1830"/>
  </radialGradient>
  <filter id="spm-glow"><feGaussianBlur stdDeviation="1.3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- Single strategic antenna -->
<line x1="55" y1="25" x2="60" y2="12" stroke="#5080B0" stroke-width="1.3"/>
<circle cx="61" cy="11" r="2.5" fill="#2A548A" stroke="#80B0E0" stroke-width="0.8"/>
<line x1="58" y1="9" x2="64" y2="9" stroke="#80B0E0" stroke-width="0.7"/>
<!-- Polished oval head -->
<ellipse cx="50" cy="49" rx="24" ry="24" fill="url(#spm-skin)" stroke="#4A78B0" stroke-width="1.3"/>
<!-- Thoughtful brow -->
<path d="M32,38 Q40,35 48,37" fill="none" stroke="#2A548A" stroke-width="1.3"/>
<path d="M52,37 Q60,35 68,38" fill="none" stroke="#2A548A" stroke-width="1.3"/>
<!-- Left eye: feature-flag switch iris -->
<circle cx="38" cy="47" r="8" fill="#081425" stroke="#4A78B0" stroke-width="1.2"/>
<circle cx="38" cy="47" r="5.5" fill="url(#spm-iris)"/>
<!-- Toggle switch symbol -->
<rect x="33.5" y="45.5" width="9" height="3" rx="1.5" fill="#1A3A60" stroke="#80C0E8" stroke-width="0.6"/>
<circle cx="40.5" cy="47" r="1.5" fill="#22C55E" opacity="0.95"/>
<circle cx="38" cy="46" r="0.9" fill="#C8E8FF" filter="url(#spm-glow)"/>
<!-- Right eye: feature-flag switch iris -->
<circle cx="62" cy="47" r="8" fill="#081425" stroke="#4A78B0" stroke-width="1.2"/>
<circle cx="62" cy="47" r="5.5" fill="url(#spm-iris)"/>
<rect x="57.5" y="45.5" width="9" height="3" rx="1.5" fill="#1A3A60" stroke="#80C0E8" stroke-width="0.6"/>
<circle cx="64.5" cy="47" r="1.5" fill="#22C55E" opacity="0.95"/>
<circle cx="62" cy="46" r="0.9" fill="#C8E8FF" filter="url(#spm-glow)"/>
<!-- Thoughtful expression -->
<path d="M40,59 Q50,63 60,59" fill="none" stroke="#6090C8" stroke-width="1.4" stroke-linecap="round"/>
<!-- Body -->
<path d="M30,70 L26,86 L50,84 L74,86 L70,70 Z" fill="#0C2040" stroke="#4A78B0" stroke-width="1"/>
<line x1="35" y1="77" x2="65" y2="77" stroke="#2A548A" stroke-width="0.7" opacity="0.6"/>
<ellipse cx="50" cy="93" rx="20" ry="2.5" fill="rgba(96,144,200,0.15)"/>
</svg>`,

  "PM": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${BG}
<defs>
  <radialGradient id="pm-skin" cx="45%" cy="35%" r="58%">
    <stop offset="0%" stop-color="#5888C8"/>
    <stop offset="60%" stop-color="#2058A0"/>
    <stop offset="100%" stop-color="#0C1E40"/>
  </radialGradient>
  <radialGradient id="pm-iris" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#90C8F0"/>
    <stop offset="50%" stop-color="#2068A8"/>
    <stop offset="100%" stop-color="#081828"/>
  </radialGradient>
  <filter id="pm-glow"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- Standard 2 antennae -->
<line x1="42" y1="26" x2="38" y2="13" stroke="#5080B0" stroke-width="1.2"/>
<circle cx="37" cy="12" r="2.2" fill="#2058A0" stroke="#6898C8" stroke-width="0.8"/>
<line x1="58" y1="26" x2="62" y2="13" stroke="#5080B0" stroke-width="1.2"/>
<circle cx="63" cy="12" r="2.2" fill="#2058A0" stroke="#6898C8" stroke-width="0.8"/>
<!-- Friendly oval head -->
<ellipse cx="50" cy="49" rx="24" ry="24" fill="url(#pm-skin)" stroke="#4070A8" stroke-width="1.3"/>
<!-- Open friendly brow -->
<path d="M32,38 Q40,35 47,37" fill="none" stroke="#2058A0" stroke-width="1.2" opacity="0.8"/>
<path d="M53,37 Q60,35 68,38" fill="none" stroke="#2058A0" stroke-width="1.2" opacity="0.8"/>
<!-- Left eye: user-journey map iris -->
<circle cx="38" cy="47" r="8" fill="#081428" stroke="#4070A8" stroke-width="1.2"/>
<circle cx="38" cy="47" r="5.5" fill="url(#pm-iris)"/>
<!-- Curved user path in iris -->
<path d="M33.5,50 Q36,45 38,47 Q40,50 42.5,46" fill="none" stroke="#C0E0FF" stroke-width="0.8" opacity="0.9"/>
<!-- Path waypoints -->
<circle cx="33.5" cy="50" r="0.8" fill="#F59E0B" opacity="0.9"/>
<circle cx="38" cy="47" r="0.8" fill="#22C55E" opacity="0.9"/>
<circle cx="42.5" cy="46" r="0.8" fill="#60A8FF" opacity="0.9"/>
<circle cx="38" cy="46" r="0.9" fill="#C8EAFF" filter="url(#pm-glow)"/>
<!-- Right eye: user-journey map iris -->
<circle cx="62" cy="47" r="8" fill="#081428" stroke="#4070A8" stroke-width="1.2"/>
<circle cx="62" cy="47" r="5.5" fill="url(#pm-iris)"/>
<path d="M57.5,50 Q60,45 62,47 Q64,50 66.5,46" fill="none" stroke="#C0E0FF" stroke-width="0.8" opacity="0.9"/>
<circle cx="57.5" cy="50" r="0.8" fill="#F59E0B" opacity="0.9"/>
<circle cx="62" cy="47" r="0.8" fill="#22C55E" opacity="0.9"/>
<circle cx="66.5" cy="46" r="0.8" fill="#60A8FF" opacity="0.9"/>
<circle cx="62" cy="46" r="0.9" fill="#C8EAFF" filter="url(#pm-glow)"/>
<!-- Open friendly smile -->
<path d="M39,59 Q50,66 61,59" fill="none" stroke="#5888C8" stroke-width="1.5" stroke-linecap="round"/>
<!-- Body -->
<path d="M30,70 L26,86 L50,84 L74,86 L70,70 Z" fill="#0C1E40" stroke="#4070A8" stroke-width="1"/>
<line x1="35" y1="77" x2="65" y2="77" stroke="#2058A0" stroke-width="0.7" opacity="0.6"/>
<ellipse cx="50" cy="93" rx="20" ry="2.5" fill="rgba(88,136,200,0.15)"/>
</svg>`,

  "TPM-PROD": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${BG}
<defs>
  <linearGradient id="tpm-skin" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#4A88B0"/>
    <stop offset="50%" stop-color="#3A7068"/>
    <stop offset="100%" stop-color="#1A3A30"/>
  </linearGradient>
  <radialGradient id="tpm-iris-l" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#80C0FF"/>
    <stop offset="100%" stop-color="#1040A0"/>
  </radialGradient>
  <radialGradient id="tpm-iris-r" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#80E8C0"/>
    <stop offset="100%" stop-color="#106040"/>
  </radialGradient>
  <filter id="tpm-glow"><feGaussianBlur stdDeviation="1.3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- Hybrid antennae: left tech (square tip), right smooth (round tip) -->
<line x1="40" y1="27" x2="34" y2="13" stroke="#5090A8" stroke-width="1.3"/>
<rect x="31" y="10" width="5" height="5" rx="0.5" fill="#2A5878" stroke="#80C0E8" stroke-width="0.8"/>
<line x1="60" y1="27" x2="66" y2="13" stroke="#3A8070" stroke-width="1.3"/>
<circle cx="67" cy="12" r="2.5" fill="#1A5040" stroke="#60C090" stroke-width="0.8"/>
<!-- Half-technical split face -->
<path d="M30,28 L70,28 L76,42 L76,66 L70,74 L30,74 L24,66 L24,42 Z" fill="url(#tpm-skin)" stroke="#406878" stroke-width="1.4"/>
<!-- Center split line (half-technical) -->
<line x1="50" y1="28" x2="50" y2="74" stroke="#406878" stroke-width="0.8" stroke-dasharray="3,2" opacity="0.5"/>
<!-- Left eye: code bracket iris -->
<circle cx="38" cy="50" r="8" fill="#080F20" stroke="#4070A8" stroke-width="1.2"/>
<circle cx="38" cy="50" r="5.5" fill="url(#tpm-iris-l)"/>
<!-- Code bracket symbols -->
<text x="38" y="53" font-family="monospace" font-size="6" fill="#A0D0FF" text-anchor="middle" opacity="0.9">&lt;/&gt;</text>
<circle cx="38" cy="48" r="0.9" fill="#C8E8FF" filter="url(#tpm-glow)"/>
<!-- Right eye: roadmap iris -->
<circle cx="62" cy="50" r="8" fill="#080F20" stroke="#30706A" stroke-width="1.2"/>
<circle cx="62" cy="50" r="5.5" fill="url(#tpm-iris-r)"/>
<!-- Roadmap line in right iris -->
<line x1="57.5" y1="50" x2="66.5" y2="50" stroke="#A0E8C8" stroke-width="1" opacity="0.8"/>
<circle cx="59" cy="50" r="1.2" fill="#60E0A0" opacity="0.9"/>
<circle cx="62" cy="50" r="1.2" fill="#60E0A0" opacity="0.9"/>
<circle cx="65" cy="50" r="1.2" fill="#C0F0E0" opacity="0.9"/>
<circle cx="62" cy="48" r="0.9" fill="#C0F0E0" filter="url(#tpm-glow)"/>
<!-- Balanced mouth -->
<line x1="43" y1="63" x2="57" y2="63" stroke="#5090A8" stroke-width="1.4" stroke-linecap="round"/>
<!-- Body -->
<path d="M30,74 L26,88 L50,86 L74,88 L70,74 Z" fill="#0F1E2A" stroke="#406878" stroke-width="1"/>
<line x1="35" y1="80" x2="65" y2="80" stroke="#2A4858" stroke-width="0.7" opacity="0.6"/>
<ellipse cx="50" cy="93" rx="21" ry="2.5" fill="rgba(74,136,176,0.15)"/>
</svg>`,

  "GROWTH-PM": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${BG}
<defs>
  <radialGradient id="grpm-skin" cx="45%" cy="35%" r="58%">
    <stop offset="0%" stop-color="#40C8A8"/>
    <stop offset="60%" stop-color="#1A8070"/>
    <stop offset="100%" stop-color="#083830"/>
  </radialGradient>
  <radialGradient id="grpm-iris" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#80FFD8"/>
    <stop offset="50%" stop-color="#20C090"/>
    <stop offset="100%" stop-color="#084040"/>
  </radialGradient>
  <filter id="grpm-glow"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- Growth spike crown marks -->
<polygon points="40,15 42,8 44,15" fill="#40C8A8" opacity="0.9"/>
<polygon points="48,12 50,5 52,12" fill="#20E0B0" opacity="0.95"/>
<polygon points="56,15 58,8 60,15" fill="#40C8A8" opacity="0.9"/>
<!-- Tiny sparkles around crown -->
<circle cx="36" cy="11" r="1.2" fill="#80FFD8" filter="url(#grpm-glow)" opacity="0.8"/>
<circle cx="64" cy="11" r="1.2" fill="#80FFD8" filter="url(#grpm-glow)" opacity="0.8"/>
<!-- Eager energetic face -->
<ellipse cx="50" cy="51" rx="25" ry="25" fill="url(#grpm-skin)" stroke="#1AB090" stroke-width="1.4"/>
<!-- Raised excited brows -->
<path d="M31,38 Q39,33 46,36" fill="none" stroke="#0A6050" stroke-width="1.5"/>
<path d="M54,36 Q61,33 69,38" fill="none" stroke="#0A6050" stroke-width="1.5"/>
<!-- Left eye: trending-up arrow iris -->
<circle cx="38" cy="48" r="8.5" fill="#041818" stroke="#1AB090" stroke-width="1.3"/>
<circle cx="38" cy="48" r="6" fill="url(#grpm-iris)"/>
<!-- Arrow trending up -->
<polyline points="33.5,52 36,49 38,51 41,45.5" fill="none" stroke="#FFFFFF" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
<polygon points="40,44 42.5,44.5 41.5,47" fill="#FFFFFF"/>
<circle cx="38" cy="47" r="1" fill="#E0FFEE" filter="url(#grpm-glow)"/>
<!-- Right eye: trending-up arrow iris -->
<circle cx="62" cy="48" r="8.5" fill="#041818" stroke="#1AB090" stroke-width="1.3"/>
<circle cx="62" cy="48" r="6" fill="url(#grpm-iris)"/>
<polyline points="57.5,52 60,49 62,51 65,45.5" fill="none" stroke="#FFFFFF" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
<polygon points="64,44 66.5,44.5 65.5,47" fill="#FFFFFF"/>
<circle cx="62" cy="47" r="1" fill="#E0FFEE" filter="url(#grpm-glow)"/>
<!-- Excited wide smile -->
<path d="M36,62 Q50,72 64,62" fill="none" stroke="#40C8A8" stroke-width="2" stroke-linecap="round"/>
<!-- Body: energetic -->
<path d="M28,73 L23,88 L50,86 L77,88 L72,73 Z" fill="#083830" stroke="#1AB090" stroke-width="1"/>
<line x1="33" y1="79" x2="67" y2="79" stroke="#1A8070" stroke-width="0.7" opacity="0.6"/>
<!-- Up-arrow on chest -->
<polygon points="50,82 54,86 46,86" fill="#40C8A8" opacity="0.8"/>
<ellipse cx="50" cy="93" rx="21" ry="2.5" fill="rgba(64,200,168,0.15)"/>
</svg>`,

  "AI-PM": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${BG}
<defs>
  <linearGradient id="aipm-skin" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#8080E8"/>
    <stop offset="50%" stop-color="#6060C0"/>
    <stop offset="100%" stop-color="#303090"/>
  </linearGradient>
  <radialGradient id="aipm-iris" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#D0A8FF"/>
    <stop offset="50%" stop-color="#8040D0"/>
    <stop offset="100%" stop-color="#200050"/>
  </radialGradient>
  <filter id="aipm-glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- Small brain symbol on forehead -->
<path d="M46,22 Q46,18 50,17 Q54,18 54,22 Q54,25 50,26 Q46,25 46,22" fill="none" stroke="#C080FF" stroke-width="1"/>
<path d="M47,21 Q50,19 53,21" fill="none" stroke="#C080FF" stroke-width="0.7" opacity="0.7"/>
<path d="M46,22 Q48,24 50,23 Q52,24 54,22" fill="none" stroke="#C080FF" stroke-width="0.7" opacity="0.7"/>
<!-- Neural pulse dots on forehead -->
<circle cx="50" cy="22" r="1.2" fill="#D0A8FF" filter="url(#aipm-glow)" opacity="0.9"/>
<!-- Ethereal face -->
<ellipse cx="50" cy="51" rx="24" ry="25" fill="url(#aipm-skin)" stroke="#7060C8" stroke-width="1.4"/>
<!-- Iridescent skin overlay -->
<ellipse cx="50" cy="46" rx="16" ry="12" fill="rgba(180,140,255,0.1)"/>
<!-- Left eye: neural-network iris -->
<circle cx="38" cy="48" r="8.5" fill="#100020" stroke="#7060C8" stroke-width="1.2"/>
<circle cx="38" cy="48" r="6" fill="url(#aipm-iris)"/>
<!-- Neural network nodes + connections -->
<circle cx="36" cy="50" r="1" fill="#E0C0FF" opacity="0.9"/>
<circle cx="38" cy="46.5" r="1" fill="#E0C0FF" opacity="0.9"/>
<circle cx="40" cy="50" r="1" fill="#E0C0FF" opacity="0.9"/>
<circle cx="38" cy="50" r="0.7" fill="#FFFFFF" opacity="0.6"/>
<line x1="36" y1="50" x2="38" y2="46.5" stroke="#C0A0FF" stroke-width="0.5" opacity="0.8"/>
<line x1="38" y1="46.5" x2="40" y2="50" stroke="#C0A0FF" stroke-width="0.5" opacity="0.8"/>
<line x1="36" y1="50" x2="40" y2="50" stroke="#C0A0FF" stroke-width="0.5" opacity="0.8"/>
<circle cx="38" cy="47" r="0.9" fill="#F0E0FF" filter="url(#aipm-glow)"/>
<!-- Right eye: neural-network iris -->
<circle cx="62" cy="48" r="8.5" fill="#100020" stroke="#7060C8" stroke-width="1.2"/>
<circle cx="62" cy="48" r="6" fill="url(#aipm-iris)"/>
<circle cx="60" cy="50" r="1" fill="#E0C0FF" opacity="0.9"/>
<circle cx="62" cy="46.5" r="1" fill="#E0C0FF" opacity="0.9"/>
<circle cx="64" cy="50" r="1" fill="#E0C0FF" opacity="0.9"/>
<circle cx="62" cy="50" r="0.7" fill="#FFFFFF" opacity="0.6"/>
<line x1="60" y1="50" x2="62" y2="46.5" stroke="#C0A0FF" stroke-width="0.5" opacity="0.8"/>
<line x1="62" y1="46.5" x2="64" y2="50" stroke="#C0A0FF" stroke-width="0.5" opacity="0.8"/>
<line x1="60" y1="50" x2="64" y2="50" stroke="#C0A0FF" stroke-width="0.5" opacity="0.8"/>
<circle cx="62" cy="47" r="0.9" fill="#F0E0FF" filter="url(#aipm-glow)"/>
<!-- Ethereal slight smile -->
<path d="M41,61 Q50,67 59,61" fill="none" stroke="#A080E0" stroke-width="1.4" stroke-linecap="round"/>
<!-- Body -->
<path d="M30,73 L26,88 L50,86 L74,88 L70,73 Z" fill="#181030" stroke="#6050B0" stroke-width="1"/>
<line x1="35" y1="79" x2="65" y2="79" stroke="#303080" stroke-width="0.7" opacity="0.6"/>
<!-- Neural dots on body -->
<circle cx="43" cy="82" r="1.5" fill="#A080E0" opacity="0.7"/>
<line x1="44.5" y1="82" x2="49.5" y2="82" stroke="#8060C0" stroke-width="0.6" opacity="0.5"/>
<circle cx="50" cy="82" r="1.5" fill="#A080E0" opacity="0.7"/>
<line x1="51.5" y1="82" x2="56.5" y2="82" stroke="#8060C0" stroke-width="0.6" opacity="0.5"/>
<circle cx="57" cy="82" r="1.5" fill="#A080E0" opacity="0.7"/>
<ellipse cx="50" cy="93" rx="21" ry="2.5" fill="rgba(128,128,232,0.15)"/>
</svg>`,

  "APM": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${BG}
<defs>
  <radialGradient id="apm-skin" cx="45%" cy="35%" r="58%">
    <stop offset="0%" stop-color="#70B0E8"/>
    <stop offset="60%" stop-color="#3078B8"/>
    <stop offset="100%" stop-color="#102848"/>
  </radialGradient>
  <radialGradient id="apm-iris" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#C0E0FF"/>
    <stop offset="60%" stop-color="#4090D0"/>
    <stop offset="100%" stop-color="#102038"/>
  </radialGradient>
  <filter id="apm-glow"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- One antenna slightly bent (eager) -->
<line x1="42" y1="26" x2="36" y2="16" stroke="#5090C8" stroke-width="1.2"/>
<line x1="36" y1="16" x2="32" y2="11" stroke="#5090C8" stroke-width="1" opacity="0.8"/>
<circle cx="31" cy="10" r="2.2" fill="#2060A0" stroke="#70B0F0" stroke-width="0.8"/>
<!-- Slightly bent: right side normal -->
<line x1="58" y1="26" x2="64" y2="13" stroke="#5090C8" stroke-width="1.2"/>
<circle cx="65" cy="12" r="2.2" fill="#2060A0" stroke="#70B0F0" stroke-width="0.8"/>
<!-- Slightly oversized eager head -->
<ellipse cx="50" cy="50" rx="26" ry="26" fill="url(#apm-skin)" stroke="#4080B8" stroke-width="1.3"/>
<!-- Large curious eyes (bigger than typical) -->
<!-- Left eye -->
<circle cx="38" cy="47" r="9.5" fill="#081830" stroke="#4080B8" stroke-width="1.2"/>
<circle cx="38" cy="47" r="7" fill="url(#apm-iris)"/>
<circle cx="38" cy="47" r="4" fill="#1840A0" opacity="0.6"/>
<circle cx="36.5" cy="45.5" r="2" fill="#E0F0FF" opacity="0.85"/>
<circle cx="36.5" cy="45.5" r="1.2" fill="#FFFFFF" filter="url(#apm-glow)"/>
<!-- Right eye -->
<circle cx="62" cy="47" r="9.5" fill="#081830" stroke="#4080B8" stroke-width="1.2"/>
<circle cx="62" cy="47" r="7" fill="url(#apm-iris)"/>
<circle cx="62" cy="47" r="4" fill="#1840A0" opacity="0.6"/>
<circle cx="60.5" cy="45.5" r="2" fill="#E0F0FF" opacity="0.85"/>
<circle cx="60.5" cy="45.5" r="1.2" fill="#FFFFFF" filter="url(#apm-glow)"/>
<!-- Eager smile (slight open) -->
<path d="M38,61 Q50,70 62,61" fill="none" stroke="#70B0E8" stroke-width="1.8" stroke-linecap="round"/>
<!-- Body -->
<path d="M28,73 L23,88 L50,87 L77,88 L72,73 Z" fill="#102848" stroke="#4080B8" stroke-width="1"/>
<line x1="33" y1="79" x2="67" y2="79" stroke="#1A4068" stroke-width="0.7" opacity="0.6"/>
<ellipse cx="50" cy="93" rx="22" ry="2.5" fill="rgba(112,176,232,0.12)"/>
</svg>`,

  "STAFF-PM": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${BG}
<defs>
  <radialGradient id="stpm-skin" cx="45%" cy="35%" r="58%">
    <stop offset="0%" stop-color="#4A6880"/>
    <stop offset="60%" stop-color="#283848"/>
    <stop offset="100%" stop-color="#101820"/>
  </radialGradient>
  <radialGradient id="stpm-iris" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#80B0D0"/>
    <stop offset="50%" stop-color="#305878"/>
    <stop offset="100%" stop-color="#101E28"/>
  </radialGradient>
  <filter id="stpm-glow"><feGaussianBlur stdDeviation="1.3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- Veteran ridge marks on forehead -->
<line x1="36" y1="30" x2="64" y2="30" stroke="#506070" stroke-width="0.8" opacity="0.6"/>
<line x1="38" y1="33" x2="62" y2="33" stroke="#506070" stroke-width="0.8" opacity="0.5"/>
<!-- Senior polished head -->
<path d="M30,28 L70,28 L76,44 L76,66 L70,75 L30,75 L24,66 L24,44 Z" fill="url(#stpm-skin)" stroke="#405870" stroke-width="1.4"/>
<!-- Deep-set composed brows -->
<line x1="31" y1="40" x2="46" y2="38" stroke="#283848" stroke-width="1.6" opacity="0.8"/>
<line x1="54" y1="38" x2="69" y2="40" stroke="#283848" stroke-width="1.6" opacity="0.8"/>
<!-- Left eye: multi-layered roadmap iris -->
<circle cx="38" cy="51" r="8.5" fill="#080E18" stroke="#405870" stroke-width="1.3"/>
<circle cx="38" cy="51" r="6" fill="url(#stpm-iris)"/>
<!-- Multi-layer roadmap rings + timeline -->
<circle cx="38" cy="51" r="4.5" fill="none" stroke="#80B0D0" stroke-width="0.5" opacity="0.7"/>
<circle cx="38" cy="51" r="3" fill="none" stroke="#60A0C0" stroke-width="0.5" opacity="0.7"/>
<line x1="33.5" y1="51" x2="42.5" y2="51" stroke="#A0C8E0" stroke-width="0.6" opacity="0.8"/>
<circle cx="36" cy="51" r="0.7" fill="#80C0E0" opacity="0.9"/>
<circle cx="38" cy="51" r="0.7" fill="#60B0D8" opacity="0.9"/>
<circle cx="40.5" cy="51" r="0.7" fill="#A0D0F0" opacity="0.9"/>
<circle cx="38" cy="49.5" r="0.9" fill="#C0E0F8" filter="url(#stpm-glow)"/>
<!-- Right eye: multi-layered roadmap iris -->
<circle cx="62" cy="51" r="8.5" fill="#080E18" stroke="#405870" stroke-width="1.3"/>
<circle cx="62" cy="51" r="6" fill="url(#stpm-iris)"/>
<circle cx="62" cy="51" r="4.5" fill="none" stroke="#80B0D0" stroke-width="0.5" opacity="0.7"/>
<circle cx="62" cy="51" r="3" fill="none" stroke="#60A0C0" stroke-width="0.5" opacity="0.7"/>
<line x1="57.5" y1="51" x2="66.5" y2="51" stroke="#A0C8E0" stroke-width="0.6" opacity="0.8"/>
<circle cx="60" cy="51" r="0.7" fill="#80C0E0" opacity="0.9"/>
<circle cx="62" cy="51" r="0.7" fill="#60B0D8" opacity="0.9"/>
<circle cx="64.5" cy="51" r="0.7" fill="#A0D0F0" opacity="0.9"/>
<circle cx="62" cy="49.5" r="0.9" fill="#C0E0F8" filter="url(#stpm-glow)"/>
<!-- Composed neutral expression -->
<line x1="43" y1="63" x2="57" y2="63" stroke="#4A6880" stroke-width="1.4" stroke-linecap="round"/>
<!-- Body: veteran composure -->
<path d="M30,75 L26,88 L50,87 L74,88 L70,75 Z" fill="#101820" stroke="#405870" stroke-width="1"/>
<line x1="35" y1="80" x2="65" y2="80" stroke="#283848" stroke-width="0.7" opacity="0.6"/>
<!-- Veteran service marks on body -->
<line x1="40" y1="83" x2="44" y2="83" stroke="#506070" stroke-width="1" opacity="0.7"/>
<line x1="46" y1="83" x2="54" y2="83" stroke="#506070" stroke-width="1" opacity="0.7"/>
<line x1="56" y1="83" x2="60" y2="83" stroke="#506070" stroke-width="1" opacity="0.7"/>
<ellipse cx="50" cy="93" rx="21" ry="2.5" fill="rgba(74,104,128,0.15)"/>
</svg>`,

  /* ------------------------------------------------------------------ */
  /* DESIGN DEPARTMENT LEADERSHIP                                         */
  /* ------------------------------------------------------------------ */

  "VP-DES": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${BG}
<defs>
  <radialGradient id="vpd-skin" cx="45%" cy="35%" r="58%">
    <stop offset="0%" stop-color="#D4959E"/>
    <stop offset="50%" stop-color="#B76E79"/>
    <stop offset="100%" stop-color="#7A3040"/>
  </radialGradient>
  <linearGradient id="vpd-iris-l" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FF6060"/>
    <stop offset="20%" stop-color="#FFA020"/>
    <stop offset="40%" stop-color="#FFFF40"/>
    <stop offset="60%" stop-color="#40E040"/>
    <stop offset="80%" stop-color="#4080FF"/>
    <stop offset="100%" stop-color="#A040FF"/>
  </linearGradient>
  <linearGradient id="vpd-iris-r" x1="100%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#A040FF"/>
    <stop offset="20%" stop-color="#4080FF"/>
    <stop offset="40%" stop-color="#40E040"/>
    <stop offset="60%" stop-color="#FFFF40"/>
    <stop offset="80%" stop-color="#FFA020"/>
    <stop offset="100%" stop-color="#FF6060"/>
  </linearGradient>
  <filter id="vpd-glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- Artistic flowing antennae: left graceful curve -->
<path d="M38,26 Q28,16 22,9" fill="none" stroke="#D4959E" stroke-width="1.8" stroke-linecap="round"/>
<circle cx="21" cy="8" r="3" fill="#B76E79" stroke="#E8B0B8" stroke-width="1"/>
<circle cx="21" cy="8" r="1.5" fill="#FFD0D8" filter="url(#vpd-glow)"/>
<!-- Right flowing curve -->
<path d="M62,26 Q72,16 78,9" fill="none" stroke="#D4959E" stroke-width="1.8" stroke-linecap="round"/>
<circle cx="79" cy="8" r="3" fill="#B76E79" stroke="#E8B0B8" stroke-width="1"/>
<circle cx="79" cy="8" r="1.5" fill="#FFD0D8" filter="url(#vpd-glow)"/>
<!-- Small creative flourish dots -->
<circle cx="28" cy="14" r="1.2" fill="#FFA0A8" opacity="0.8"/>
<circle cx="72" cy="14" r="1.2" fill="#FFA0A8" opacity="0.8"/>
<!-- Striking oval head -->
<ellipse cx="50" cy="50" rx="24" ry="25" fill="url(#vpd-skin)" stroke="#C07080" stroke-width="1.5"/>
<!-- Beautiful refined brow arcs -->
<path d="M31,38 Q40,33 47,36" fill="none" stroke="#7A3040" stroke-width="1.6" stroke-linecap="round"/>
<path d="M53,36 Q60,33 69,38" fill="none" stroke="#7A3040" stroke-width="1.6" stroke-linecap="round"/>
<!-- Left eye: color-spectrum rainbow iris -->
<circle cx="38" cy="47" r="9" fill="#180A10" stroke="#C07080" stroke-width="1.3"/>
<circle cx="38" cy="47" r="6.5" fill="url(#vpd-iris-l)"/>
<circle cx="38" cy="47" r="3" fill="rgba(0,0,0,0.5)"/>
<circle cx="36.5" cy="45.5" r="1.5" fill="#FFFFFF" filter="url(#vpd-glow)"/>
<!-- Right eye: color-spectrum rainbow iris -->
<circle cx="62" cy="47" r="9" fill="#180A10" stroke="#C07080" stroke-width="1.3"/>
<circle cx="62" cy="47" r="6.5" fill="url(#vpd-iris-r)"/>
<circle cx="62" cy="47" r="3" fill="rgba(0,0,0,0.5)"/>
<circle cx="60.5" cy="45.5" r="1.5" fill="#FFFFFF" filter="url(#vpd-glow)"/>
<!-- Beautiful expression / soft smile -->
<path d="M39,60 Q50,68 61,60" fill="none" stroke="#D4959E" stroke-width="1.8" stroke-linecap="round"/>
<!-- Cheek highlight -->
<circle cx="33" cy="54" r="3.5" fill="#FFB0B8" opacity="0.25"/>
<circle cx="67" cy="54" r="3.5" fill="#FFB0B8" opacity="0.25"/>
<!-- Body: artistic -->
<path d="M30,72 L26,87 L50,85 L74,87 L70,72 Z" fill="#4A1A28" stroke="#C07080" stroke-width="1.2"/>
<line x1="36" y1="78" x2="64" y2="78" stroke="#B76E79" stroke-width="0.8" opacity="0.6"/>
<!-- Color palette dots on body -->
<circle cx="40" cy="82" r="2" fill="#FF6060" opacity="0.85"/>
<circle cx="46" cy="82" r="2" fill="#FFA020" opacity="0.85"/>
<circle cx="50" cy="82" r="2" fill="#FFFF40" opacity="0.85"/>
<circle cx="54" cy="82" r="2" fill="#40E080" opacity="0.85"/>
<circle cx="60" cy="82" r="2" fill="#4080FF" opacity="0.85"/>
<ellipse cx="50" cy="93" rx="21" ry="2.5" fill="rgba(183,110,121,0.18)"/>
</svg>`,

  "DIR-DES": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${BG}
<defs>
  <radialGradient id="dd-skin" cx="45%" cy="35%" r="58%">
    <stop offset="0%" stop-color="#C0507A"/>
    <stop offset="60%" stop-color="#8A1A48"/>
    <stop offset="100%" stop-color="#420A25"/>
  </radialGradient>
  <radialGradient id="dd-iris" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#FFD060"/>
    <stop offset="50%" stop-color="#D09010"/>
    <stop offset="100%" stop-color="#503000"/>
  </radialGradient>
  <filter id="dd-glow"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- Artistic pattern markings on cheeks -->
<g opacity="0.7">
  <!-- Left cheek spiral -->
  <path d="M28,52 Q30,50 32,52 Q30,54 28,52" fill="none" stroke="#FFD060" stroke-width="0.8"/>
  <circle cx="30" cy="52" r="0.8" fill="#FFD060" opacity="0.6"/>
  <!-- Right cheek spiral -->
  <path d="M72,52 Q70,50 68,52 Q70,54 72,52" fill="none" stroke="#FFD060" stroke-width="0.8"/>
  <circle cx="70" cy="52" r="0.8" fill="#FFD060" opacity="0.6"/>
</g>
<!-- Antenna pair: artistic -->
<line x1="40" y1="27" x2="34" y2="14" stroke="#C0507A" stroke-width="1.4"/>
<path d="M32,12 Q34,10 36,12 Q34,14 32,12" fill="none" stroke="#FFB0C0" stroke-width="1.2"/>
<line x1="60" y1="27" x2="66" y2="14" stroke="#C0507A" stroke-width="1.4"/>
<path d="M64,12 Q66,10 68,12 Q66,14 64,12" fill="none" stroke="#FFB0C0" stroke-width="1.2"/>
<!-- Wide creative face -->
<ellipse cx="50" cy="50" rx="26" ry="25" fill="url(#dd-skin)" stroke="#A03060" stroke-width="1.4"/>
<!-- Artistic brow arcs -->
<path d="M30,38 Q40,33 47,36" fill="none" stroke="#6A0030" stroke-width="1.5"/>
<path d="M53,36 Q60,33 70,38" fill="none" stroke="#6A0030" stroke-width="1.5"/>
<!-- Left eye: golden-ratio spiral iris -->
<circle cx="38" cy="47" r="9" fill="#150808" stroke="#A03060" stroke-width="1.3"/>
<circle cx="38" cy="47" r="6.5" fill="url(#dd-iris)"/>
<!-- Spiral (golden ratio approximation) -->
<path d="M38,43 Q42.5,43 42.5,47 Q42.5,51.5 38,51.5 Q33.5,51.5 33.5,47 Q33.5,44.7 35,43.5" fill="none" stroke="#FFFFFF" stroke-width="0.6" opacity="0.7"/>
<path d="M38,44.5 Q41,44.5 41,47 Q41,49.5 38,49.5 Q35,49.5 35,47 Q35,45.7 36.2,44.8" fill="none" stroke="#FFFFFF" stroke-width="0.5" opacity="0.5"/>
<circle cx="38" cy="47" r="1" fill="#FFF0A0" filter="url(#dd-glow)"/>
<!-- Right eye: golden-ratio spiral iris -->
<circle cx="62" cy="47" r="9" fill="#150808" stroke="#A03060" stroke-width="1.3"/>
<circle cx="62" cy="47" r="6.5" fill="url(#dd-iris)"/>
<path d="M62,43 Q66.5,43 66.5,47 Q66.5,51.5 62,51.5 Q57.5,51.5 57.5,47 Q57.5,44.7 59,43.5" fill="none" stroke="#FFFFFF" stroke-width="0.6" opacity="0.7"/>
<path d="M62,44.5 Q65,44.5 65,47 Q65,49.5 62,49.5 Q59,49.5 59,47 Q59,45.7 60.2,44.8" fill="none" stroke="#FFFFFF" stroke-width="0.5" opacity="0.5"/>
<circle cx="62" cy="47" r="1" fill="#FFF0A0" filter="url(#dd-glow)"/>
<!-- Artistic smile -->
<path d="M39,60 Q50,68 61,60" fill="none" stroke="#C0507A" stroke-width="1.6" stroke-linecap="round"/>
<!-- Body -->
<path d="M28,72 L24,87 L50,86 L76,87 L72,72 Z" fill="#420A25" stroke="#A03060" stroke-width="1"/>
<line x1="33" y1="78" x2="67" y2="78" stroke="#8A1A48" stroke-width="0.7" opacity="0.6"/>
<!-- Golden spiral dot on body -->
<circle cx="50" cy="82" r="3" fill="none" stroke="#FFD060" stroke-width="1"/>
<circle cx="50" cy="82" r="1.2" fill="#FFD060" opacity="0.8"/>
<ellipse cx="50" cy="93" rx="21" ry="2.5" fill="rgba(192,80,122,0.15)"/>
</svg>`,

  "MGR-UI": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${BG}
<defs>
  <radialGradient id="mui-skin" cx="45%" cy="35%" r="58%">
    <stop offset="0%" stop-color="#6090C8"/>
    <stop offset="60%" stop-color="#2A5898"/>
    <stop offset="100%" stop-color="#0A1E40"/>
  </radialGradient>
  <radialGradient id="mui-iris" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#90C8FF"/>
    <stop offset="50%" stop-color="#2060A8"/>
    <stop offset="100%" stop-color="#081830"/>
  </radialGradient>
  <filter id="mui-glow"><feGaussianBlur stdDeviation="1.3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- Pixel-art markings on chin area -->
<rect x="44" y="67" width="3" height="3" rx="0.3" fill="#4A88C8" opacity="0.7"/>
<rect x="48" y="67" width="3" height="3" rx="0.3" fill="#2060A0" opacity="0.5"/>
<rect x="52" y="67" width="3" height="3" rx="0.3" fill="#4A88C8" opacity="0.7"/>
<rect x="45" y="71" width="3" height="3" rx="0.3" fill="#2060A0" opacity="0.5"/>
<rect x="51" y="71" width="3" height="3" rx="0.3" fill="#2060A0" opacity="0.5"/>
<!-- Short antennae -->
<line x1="43" y1="27" x2="39" y2="14" stroke="#5080B8" stroke-width="1.2"/>
<rect x="36.5" y="11" width="5" height="4" rx="0.5" fill="#2A5898" stroke="#6090D0" stroke-width="0.7"/>
<line x1="57" y1="27" x2="61" y2="14" stroke="#5080B8" stroke-width="1.2"/>
<rect x="58.5" y="11" width="5" height="4" rx="0.5" fill="#2A5898" stroke="#6090D0" stroke-width="0.7"/>
<!-- Precise face -->
<path d="M30,28 L70,28 L76,42 L76,66 L70,76 L30,76 L24,66 L24,42 Z" fill="url(#mui-skin)" stroke="#4070A8" stroke-width="1.3"/>
<!-- Precise horizontal brows -->
<line x1="31" y1="39" x2="46" y2="37" stroke="#1A4070" stroke-width="1.4"/>
<line x1="54" y1="37" x2="69" y2="39" stroke="#1A4070" stroke-width="1.4"/>
<!-- Left eye: UI component grid iris -->
<circle cx="38" cy="50" r="8.5" fill="#06121E" stroke="#4070A8" stroke-width="1.2"/>
<circle cx="38" cy="50" r="6" fill="url(#mui-iris)"/>
<!-- UI grid: navbar + content + button areas -->
<rect x="32.5" y="45" width="11" height="2" rx="0.5" fill="#A0C8E8" opacity="0.8"/>
<rect x="32.5" y="48.5" width="5" height="4" rx="0.5" fill="#7BA8D0" opacity="0.6"/>
<rect x="38.5" y="48.5" width="5" height="4" rx="0.5" fill="#7BA8D0" opacity="0.6"/>
<rect x="33.5" y="54" width="9" height="1.5" rx="0.5" fill="#60A0D8" opacity="0.8"/>
<circle cx="38" cy="49" r="0.9" fill="#D0E8FF" filter="url(#mui-glow)"/>
<!-- Right eye: UI component grid iris -->
<circle cx="62" cy="50" r="8.5" fill="#06121E" stroke="#4070A8" stroke-width="1.2"/>
<circle cx="62" cy="50" r="6" fill="url(#mui-iris)"/>
<rect x="56.5" y="45" width="11" height="2" rx="0.5" fill="#A0C8E8" opacity="0.8"/>
<rect x="56.5" y="48.5" width="5" height="4" rx="0.5" fill="#7BA8D0" opacity="0.6"/>
<rect x="62.5" y="48.5" width="5" height="4" rx="0.5" fill="#7BA8D0" opacity="0.6"/>
<rect x="57.5" y="54" width="9" height="1.5" rx="0.5" fill="#60A0D8" opacity="0.8"/>
<circle cx="62" cy="49" r="0.9" fill="#D0E8FF" filter="url(#mui-glow)"/>
<!-- Precise slight smile -->
<path d="M42,62 Q50,67 58,62" fill="none" stroke="#6090C8" stroke-width="1.3" stroke-linecap="round"/>
<!-- Body -->
<path d="M30,76 L26,88 L50,87 L74,88 L70,76 Z" fill="#0A1E40" stroke="#4070A8" stroke-width="1"/>
<line x1="35" y1="81" x2="65" y2="81" stroke="#2A5898" stroke-width="0.7" opacity="0.6"/>
<!-- UI grid on body -->
<rect x="41" y="83" width="5" height="3" rx="0.5" fill="#2A5898" stroke="#4070A8" stroke-width="0.5" opacity="0.7"/>
<rect x="47" y="83" width="5" height="3" rx="0.5" fill="#2A5898" stroke="#4070A8" stroke-width="0.5" opacity="0.7"/>
<rect x="53" y="83" width="5" height="3" rx="0.5" fill="#2A5898" stroke="#4070A8" stroke-width="0.5" opacity="0.7"/>
<ellipse cx="50" cy="93" rx="21" ry="2.5" fill="rgba(96,144,200,0.12)"/>
</svg>`,
};

// Ensure output directory exists
fs.mkdirSync(OUT, { recursive: true });

let written = 0;
for (const [code, svg] of Object.entries(svgs)) {
  const filePath = path.join(OUT, `${code}.svg`);
  fs.writeFileSync(filePath, svg, "utf8");
  console.log(`✓ ${code}.svg`);
  written++;
}

console.log(`\nDone. ${written} SVGs written to ${OUT}`);
