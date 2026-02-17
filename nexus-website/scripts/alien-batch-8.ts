import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, "../public/brand/avatars/agents");

const svgs: Record<string, string> = {

  // ─── CUSTOMER SUCCESS ────────────────────────────────────────────────────────

  "MGR-CS": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#0d2a2a"/>
    <stop offset="100%" stop-color="#030c0c"/>
  </radialGradient>
  <radialGradient id="faceGlow" cx="50%" cy="48%" r="50%">
    <stop offset="0%" stop-color="#0d9488" stop-opacity="0.35"/>
    <stop offset="100%" stop-color="#0d9488" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<!-- ambient glow -->
<ellipse cx="50" cy="54" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- head -->
<ellipse cx="50" cy="52" rx="22" ry="24" fill="#052020" stroke="#14b8a6" stroke-width="1.8"/>
<!-- NPS gauge iris — left eye -->
<circle cx="40" cy="47" r="8" fill="#031818" stroke="#14b8a6" stroke-width="1.2"/>
<path d="M33,47 A7,7 0 0,1 47,47" fill="none" stroke="#14b8a6" stroke-width="1" opacity="0.5"/>
<path d="M34.5,43 A7,7 0 0,1 45.5,43" fill="none" stroke="#0d9488" stroke-width="1.5" opacity="0.8"/>
<line x1="40" y1="47" x2="40" y2="41" stroke="#2dd4bf" stroke-width="1.5" stroke-linecap="round"/>
<circle cx="40" cy="47" r="1.5" fill="#2dd4bf"/>
<!-- NPS gauge iris — right eye -->
<circle cx="60" cy="47" r="8" fill="#031818" stroke="#14b8a6" stroke-width="1.2"/>
<path d="M53,47 A7,7 0 0,1 67,47" fill="none" stroke="#14b8a6" stroke-width="1" opacity="0.5"/>
<path d="M54.5,43 A7,7 0 0,1 65.5,43" fill="none" stroke="#0d9488" stroke-width="1.5" opacity="0.8"/>
<line x1="60" y1="47" x2="64" y2="42.5" stroke="#2dd4bf" stroke-width="1.5" stroke-linecap="round"/>
<circle cx="60" cy="47" r="1.5" fill="#2dd4bf"/>
<!-- caring smile -->
<path d="M41,62 Q50,70 59,62" fill="none" stroke="#14b8a6" stroke-width="2" stroke-linecap="round"/>
<!-- hug antennae arcing left -->
<path d="M34,34 Q18,20 22,42" fill="none" stroke="#14b8a6" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
<circle cx="22" cy="42" r="2.5" fill="#14b8a6" opacity="0.7"/>
<!-- hug antennae arcing right -->
<path d="M66,34 Q82,20 78,42" fill="none" stroke="#14b8a6" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
<circle cx="78" cy="42" r="2.5" fill="#14b8a6" opacity="0.7"/>
<!-- cheek warmth dots -->
<circle cx="33" cy="58" r="3.5" fill="#0d9488" opacity="0.3"/>
<circle cx="67" cy="58" r="3.5" fill="#0d9488" opacity="0.3"/>
<!-- nose mark -->
<path d="M48,54 Q50,57 52,54" fill="none" stroke="#14b8a6" stroke-width="1" stroke-linecap="round" opacity="0.6"/>
</svg>`,

  "SR-CSM": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#0a2820"/>
    <stop offset="100%" stop-color="#020c0a"/>
  </radialGradient>
  <radialGradient id="faceGlow" cx="50%" cy="48%" r="50%">
    <stop offset="0%" stop-color="#059669" stop-opacity="0.3"/>
    <stop offset="100%" stop-color="#059669" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<ellipse cx="50" cy="54" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- head oval -->
<ellipse cx="50" cy="53" rx="21" ry="23" fill="#041a14" stroke="#10b981" stroke-width="1.8"/>
<!-- account-health dashboard iris left -->
<circle cx="40" cy="47" r="8" fill="#021008" stroke="#10b981" stroke-width="1.2"/>
<!-- dashboard bars inside left iris -->
<rect x="33.5" y="50" width="3" height="4" rx="0.5" fill="#34d399" opacity="0.9"/>
<rect x="37.5" y="48" width="3" height="6" rx="0.5" fill="#10b981" opacity="0.9"/>
<rect x="41.5" y="45" width="3" height="9" rx="0.5" fill="#6ee7b7" opacity="0.8"/>
<!-- trend line left iris -->
<path d="M34,50 Q38,44 46,43" fill="none" stroke="#34d399" stroke-width="1" opacity="0.7"/>
<!-- account-health dashboard iris right -->
<circle cx="60" cy="47" r="8" fill="#021008" stroke="#10b981" stroke-width="1.2"/>
<rect x="53.5" y="50" width="3" height="4" rx="0.5" fill="#34d399" opacity="0.9"/>
<rect x="57.5" y="47" width="3" height="7" rx="0.5" fill="#10b981" opacity="0.9"/>
<rect x="61.5" y="44" width="3" height="10" rx="0.5" fill="#6ee7b7" opacity="0.8"/>
<path d="M54,50 Q58,44 66,43" fill="none" stroke="#34d399" stroke-width="1" opacity="0.7"/>
<!-- warm professional smile -->
<path d="M42,62 Q50,68 58,62" fill="none" stroke="#10b981" stroke-width="1.8" stroke-linecap="round"/>
<!-- experience lines on forehead -->
<line x1="42" y1="33" x2="48" y2="33" stroke="#10b981" stroke-width="0.8" opacity="0.5"/>
<line x1="52" y1="33" x2="58" y2="33" stroke="#10b981" stroke-width="0.8" opacity="0.5"/>
<!-- antenna pair -->
<line x1="43" y1="30" x2="38" y2="20" stroke="#10b981" stroke-width="1.3" stroke-linecap="round" opacity="0.7"/>
<circle cx="38" cy="20" r="2" fill="#34d399" opacity="0.8"/>
<line x1="57" y1="30" x2="62" y2="20" stroke="#10b981" stroke-width="1.3" stroke-linecap="round" opacity="0.7"/>
<circle cx="62" cy="20" r="2" fill="#34d399" opacity="0.8"/>
<!-- nose -->
<path d="M48,55 Q50,58 52,55" fill="none" stroke="#10b981" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
<!-- chin groove -->
<path d="M47,71 Q50,74 53,71" fill="none" stroke="#10b981" stroke-width="0.8" stroke-linecap="round" opacity="0.4"/>
</svg>`,

  "CSM": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#0b2424"/>
    <stop offset="100%" stop-color="#030d0d"/>
  </radialGradient>
  <radialGradient id="faceGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.28"/>
    <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<ellipse cx="50" cy="53" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- friendly oval head -->
<ellipse cx="50" cy="53" rx="22" ry="24" fill="#041a1a" stroke="#06b6d4" stroke-width="1.8"/>
<!-- large empathetic left eye -->
<circle cx="39" cy="47" r="9" fill="#02100f" stroke="#06b6d4" stroke-width="1.4"/>
<circle cx="39" cy="47" r="6" fill="#031414" stroke="#0891b2" stroke-width="0.8"/>
<circle cx="39" cy="47" r="3" fill="#06b6d4" opacity="0.9"/>
<circle cx="41" cy="45" r="1.5" fill="#7dd3fc" opacity="0.8"/>
<!-- large empathetic right eye -->
<circle cx="61" cy="47" r="9" fill="#02100f" stroke="#06b6d4" stroke-width="1.4"/>
<circle cx="61" cy="47" r="6" fill="#031414" stroke="#0891b2" stroke-width="0.8"/>
<circle cx="61" cy="47" r="3" fill="#06b6d4" opacity="0.9"/>
<circle cx="63" cy="45" r="1.5" fill="#7dd3fc" opacity="0.8"/>
<!-- relationship marks — connected dots cheeks -->
<circle cx="30" cy="56" r="2" fill="#06b6d4" opacity="0.6"/>
<circle cx="25" cy="54" r="1.5" fill="#06b6d4" opacity="0.4"/>
<line x1="25" y1="54" x2="30" y2="56" stroke="#06b6d4" stroke-width="0.8" opacity="0.5"/>
<circle cx="70" cy="56" r="2" fill="#06b6d4" opacity="0.6"/>
<circle cx="75" cy="54" r="1.5" fill="#06b6d4" opacity="0.4"/>
<line x1="70" y1="56" x2="75" y2="54" stroke="#06b6d4" stroke-width="0.8" opacity="0.5"/>
<!-- open genuine smile -->
<path d="M40,63 Q50,73 60,63" fill="none" stroke="#06b6d4" stroke-width="2.2" stroke-linecap="round"/>
<!-- nose -->
<path d="M47,55 Q50,58 53,55" fill="none" stroke="#06b6d4" stroke-width="1.1" stroke-linecap="round" opacity="0.5"/>
<!-- antennae -->
<line x1="44" y1="29" x2="40" y2="19" stroke="#06b6d4" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
<circle cx="40" cy="19" r="2.2" fill="#06b6d4" opacity="0.7"/>
<line x1="56" y1="29" x2="60" y2="19" stroke="#06b6d4" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
<circle cx="60" cy="19" r="2.2" fill="#06b6d4" opacity="0.7"/>
</svg>`,

  "TAM": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#0b1e2e"/>
    <stop offset="100%" stop-color="#030810"/>
  </radialGradient>
  <linearGradient id="faceSplit" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#06b6d4"/>
    <stop offset="50%" stop-color="#1e3a4a"/>
    <stop offset="100%" stop-color="#0ea5e9"/>
  </linearGradient>
  <radialGradient id="faceGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.25"/>
    <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<ellipse cx="50" cy="53" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- dual-mode head with vertical split -->
<ellipse cx="50" cy="53" rx="22" ry="24" fill="#051520" stroke="#0ea5e9" stroke-width="1.8"/>
<!-- split line down center -->
<line x1="50" y1="29" x2="50" y2="77" stroke="#0ea5e9" stroke-width="0.8" opacity="0.5" stroke-dasharray="2,2"/>
<!-- tech circuit left eye -->
<circle cx="39" cy="47" r="8.5" fill="#021018" stroke="#06b6d4" stroke-width="1.3"/>
<!-- circuit board pattern in left iris -->
<line x1="34" y1="47" x2="44" y2="47" stroke="#06b6d4" stroke-width="0.8" opacity="0.8"/>
<line x1="39" y1="42" x2="39" y2="52" stroke="#06b6d4" stroke-width="0.8" opacity="0.8"/>
<rect x="36" y="44.5" width="6" height="5" rx="0.5" fill="none" stroke="#0ea5e9" stroke-width="0.8"/>
<circle cx="36" cy="44.5" r="1" fill="#06b6d4" opacity="0.9"/>
<circle cx="42" cy="44.5" r="1" fill="#06b6d4" opacity="0.9"/>
<circle cx="36" cy="49.5" r="1" fill="#06b6d4" opacity="0.9"/>
<circle cx="42" cy="49.5" r="1" fill="#06b6d4" opacity="0.9"/>
<!-- warm star right eye -->
<circle cx="61" cy="47" r="8.5" fill="#021018" stroke="#38bdf8" stroke-width="1.3"/>
<path d="M61,40 L62.4,45.1 L67.5,45.1 L63.6,48.1 L65,53.2 L61,50.2 L57,53.2 L58.4,48.1 L54.5,45.1 L59.6,45.1 Z" fill="#38bdf8" opacity="0.85"/>
<!-- bridge symbol forehead -->
<path d="M44,37 Q50,31 56,37" fill="none" stroke="#0ea5e9" stroke-width="1.5" stroke-linecap="round"/>
<line x1="44" y1="37" x2="44" y2="33" stroke="#0ea5e9" stroke-width="1.2"/>
<line x1="56" y1="37" x2="56" y2="33" stroke="#0ea5e9" stroke-width="1.2"/>
<!-- neutral expression -->
<path d="M43,62 Q50,66 57,62" fill="none" stroke="#0ea5e9" stroke-width="1.8" stroke-linecap="round"/>
<!-- nose -->
<path d="M48,55 Q50,58 52,55" fill="none" stroke="#0ea5e9" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
<!-- antennae -->
<line x1="44" y1="29" x2="39" y2="20" stroke="#0ea5e9" stroke-width="1.3" stroke-linecap="round" opacity="0.65"/>
<circle cx="39" cy="20" r="2" fill="#0ea5e9" opacity="0.7"/>
<line x1="56" y1="29" x2="61" y2="20" stroke="#0ea5e9" stroke-width="1.3" stroke-linecap="round" opacity="0.65"/>
<circle cx="61" cy="20" r="2" fill="#0ea5e9" opacity="0.7"/>
</svg>`,

  "ONBOARD-SPEC": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#0a2218"/>
    <stop offset="100%" stop-color="#020c08"/>
  </radialGradient>
  <radialGradient id="faceGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#10b981" stop-opacity="0.3"/>
    <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<ellipse cx="50" cy="53" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- welcoming energetic mint-green head -->
<ellipse cx="50" cy="53" rx="21" ry="23" fill="#04180e" stroke="#34d399" stroke-width="1.8"/>
<!-- progress-bar step iris left -->
<circle cx="39" cy="47" r="8" fill="#021008" stroke="#34d399" stroke-width="1.3"/>
<rect x="33" y="45" width="12" height="4" rx="1" fill="#031a0a" stroke="#34d399" stroke-width="0.7"/>
<rect x="33" y="45" width="4" height="4" rx="1" fill="#34d399" opacity="0.9"/>
<rect x="37.5" y="45" width="4" height="4" rx="1" fill="#10b981" opacity="0.7"/>
<rect x="42" y="45" width="3" height="4" rx="1" fill="#059669" opacity="0.5"/>
<!-- progress-bar step iris right -->
<circle cx="61" cy="47" r="8" fill="#021008" stroke="#34d399" stroke-width="1.3"/>
<rect x="55" y="45" width="12" height="4" rx="1" fill="#031a0a" stroke="#34d399" stroke-width="0.7"/>
<rect x="55" y="45" width="4" height="4" rx="1" fill="#34d399" opacity="0.9"/>
<rect x="59.5" y="45" width="4" height="4" rx="1" fill="#10b981" opacity="0.7"/>
<rect x="64" y="45" width="3" height="4" rx="1" fill="#059669" opacity="0.5"/>
<!-- welcome mat forehead glyph — doorway arch -->
<path d="M44,36 Q50,29 56,36" fill="none" stroke="#34d399" stroke-width="1.5" stroke-linecap="round"/>
<rect x="44" y="36" width="12" height="1.5" rx="0.5" fill="#34d399" opacity="0.7"/>
<!-- outstretched antennae arms -->
<path d="M29,47 Q22,36 28,28" fill="none" stroke="#34d399" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
<circle cx="28" cy="28" r="2.5" fill="#34d399" opacity="0.7"/>
<path d="M71,47 Q78,36 72,28" fill="none" stroke="#34d399" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
<circle cx="72" cy="28" r="2.5" fill="#34d399" opacity="0.7"/>
<!-- big energetic smile -->
<path d="M40,63 Q50,72 60,63" fill="none" stroke="#34d399" stroke-width="2.2" stroke-linecap="round"/>
<!-- nose -->
<path d="M48,55 Q50,57 52,55" fill="none" stroke="#34d399" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
<!-- cheek energizer dots -->
<circle cx="31" cy="56" r="2.5" fill="#34d399" opacity="0.25"/>
<circle cx="69" cy="56" r="2.5" fill="#34d399" opacity="0.25"/>
</svg>`,

  "SUPPORT-T2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#0c2020"/>
    <stop offset="100%" stop-color="#030c0c"/>
  </radialGradient>
  <radialGradient id="faceGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#0891b2" stop-opacity="0.25"/>
    <stop offset="100%" stop-color="#0891b2" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<ellipse cx="50" cy="53" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- problem-solving medium teal head -->
<ellipse cx="50" cy="53" rx="22" ry="24" fill="#051818" stroke="#0891b2" stroke-width="1.8"/>
<!-- escalation ladder iris left — rungs going up -->
<circle cx="39" cy="47" r="8" fill="#021010" stroke="#0891b2" stroke-width="1.3"/>
<line x1="36" y1="52" x2="36" y2="42" stroke="#0891b2" stroke-width="1" opacity="0.8"/>
<line x1="42" y1="52" x2="42" y2="42" stroke="#0891b2" stroke-width="1" opacity="0.8"/>
<line x1="35" y1="50.5" x2="43" y2="50.5" stroke="#0891b2" stroke-width="1.2" opacity="0.9"/>
<line x1="35" y1="47.5" x2="43" y2="47.5" stroke="#0891b2" stroke-width="1.2" opacity="0.9"/>
<line x1="35" y1="44.5" x2="43" y2="44.5" stroke="#0891b2" stroke-width="1.2" opacity="0.9"/>
<circle cx="39" cy="43" r="1.5" fill="#22d3ee" opacity="0.9"/>
<!-- escalation ladder iris right -->
<circle cx="61" cy="47" r="8" fill="#021010" stroke="#0891b2" stroke-width="1.3"/>
<line x1="58" y1="52" x2="58" y2="42" stroke="#0891b2" stroke-width="1" opacity="0.8"/>
<line x1="64" y1="52" x2="64" y2="42" stroke="#0891b2" stroke-width="1" opacity="0.8"/>
<line x1="57" y1="50.5" x2="65" y2="50.5" stroke="#0891b2" stroke-width="1.2" opacity="0.9"/>
<line x1="57" y1="47.5" x2="65" y2="47.5" stroke="#0891b2" stroke-width="1.2" opacity="0.9"/>
<line x1="57" y1="44.5" x2="65" y2="44.5" stroke="#0891b2" stroke-width="1.2" opacity="0.9"/>
<circle cx="61" cy="43" r="1.5" fill="#22d3ee" opacity="0.9"/>
<!-- technical support wrench marks on cheeks -->
<path d="M29,52 Q26,50 27,48 Q28,47 30,47.5 Q30.5,47 31,46 Q32,44 31,43 Q33,43 33.5,45 Q34,46 33,48 Z" fill="#0891b2" opacity="0.55"/>
<path d="M71,52 Q74,50 73,48 Q72,47 70,47.5 Q69.5,47 69,46 Q68,44 69,43 Q67,43 66.5,45 Q66,46 67,48 Z" fill="#0891b2" opacity="0.55"/>
<!-- focused expression -->
<path d="M43,62 Q50,67 57,62" fill="none" stroke="#0891b2" stroke-width="1.8" stroke-linecap="round"/>
<!-- nose -->
<path d="M48,55 Q50,58 52,55" fill="none" stroke="#0891b2" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
<!-- antennae -->
<line x1="44" y1="29" x2="40" y2="20" stroke="#0891b2" stroke-width="1.3" stroke-linecap="round" opacity="0.65"/>
<circle cx="40" cy="20" r="2" fill="#0891b2" opacity="0.7"/>
<line x1="56" y1="29" x2="60" y2="20" stroke="#0891b2" stroke-width="1.3" stroke-linecap="round" opacity="0.65"/>
<circle cx="60" cy="20" r="2" fill="#0891b2" opacity="0.7"/>
</svg>`,

  "SUPPORT-T1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#0a2424"/>
    <stop offset="100%" stop-color="#030e0e"/>
  </radialGradient>
  <radialGradient id="faceGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#67e8f9" stop-opacity="0.22"/>
    <stop offset="100%" stop-color="#67e8f9" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<ellipse cx="50" cy="53" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- helpful eager light cyan-green head -->
<ellipse cx="50" cy="53" rx="21" ry="23" fill="#051818" stroke="#22d3ee" stroke-width="1.8"/>
<!-- FAQ list iris left -->
<circle cx="39" cy="47" r="8" fill="#021010" stroke="#22d3ee" stroke-width="1.3"/>
<line x1="34" y1="43.5" x2="44" y2="43.5" stroke="#22d3ee" stroke-width="1" opacity="0.7"/>
<line x1="34" y1="46.5" x2="44" y2="46.5" stroke="#22d3ee" stroke-width="1" opacity="0.7"/>
<line x1="34" y1="49.5" x2="44" y2="49.5" stroke="#22d3ee" stroke-width="1" opacity="0.7"/>
<circle cx="35.5" cy="43.5" r="1" fill="#22d3ee" opacity="0.9"/>
<circle cx="35.5" cy="46.5" r="1" fill="#22d3ee" opacity="0.9"/>
<circle cx="35.5" cy="49.5" r="1" fill="#22d3ee" opacity="0.9"/>
<!-- FAQ list iris right -->
<circle cx="61" cy="47" r="8" fill="#021010" stroke="#22d3ee" stroke-width="1.3"/>
<line x1="56" y1="43.5" x2="66" y2="43.5" stroke="#22d3ee" stroke-width="1" opacity="0.7"/>
<line x1="56" y1="46.5" x2="66" y2="46.5" stroke="#22d3ee" stroke-width="1" opacity="0.7"/>
<line x1="56" y1="49.5" x2="66" y2="49.5" stroke="#22d3ee" stroke-width="1" opacity="0.7"/>
<circle cx="57.5" cy="43.5" r="1" fill="#22d3ee" opacity="0.9"/>
<circle cx="57.5" cy="46.5" r="1" fill="#22d3ee" opacity="0.9"/>
<circle cx="57.5" cy="49.5" r="1" fill="#22d3ee" opacity="0.9"/>
<!-- headset arc over head -->
<path d="M29,47 Q29,26 50,26 Q71,26 71,47" fill="none" stroke="#22d3ee" stroke-width="1.5" opacity="0.6"/>
<circle cx="29" cy="47" r="3" fill="#051818" stroke="#22d3ee" stroke-width="1.2"/>
<circle cx="71" cy="47" r="3" fill="#051818" stroke="#22d3ee" stroke-width="1.2"/>
<!-- patiently helpful smile -->
<path d="M41,63 Q50,70 59,63" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round"/>
<!-- nose -->
<path d="M48,55 Q50,57 52,55" fill="none" stroke="#22d3ee" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
<!-- cheek warmth -->
<circle cx="31" cy="57" r="3" fill="#22d3ee" opacity="0.18"/>
<circle cx="69" cy="57" r="3" fill="#22d3ee" opacity="0.18"/>
</svg>`,

  // ─── HR / PEOPLE TEAM ────────────────────────────────────────────────────────

  "VP-PEOPLE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#2a1520"/>
    <stop offset="100%" stop-color="#0e0508"/>
  </radialGradient>
  <radialGradient id="faceGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#f472b6" stop-opacity="0.28"/>
    <stop offset="100%" stop-color="#f472b6" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<ellipse cx="50" cy="53" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- warm commanding rose-gold head -->
<ellipse cx="50" cy="53" rx="23" ry="25" fill="#180a10" stroke="#f472b6" stroke-width="2"/>
<!-- org-tree iris left — people connected -->
<circle cx="39" cy="47" r="9" fill="#0e0408" stroke="#f472b6" stroke-width="1.3"/>
<circle cx="39" cy="43" r="2" fill="#f472b6" opacity="0.9"/>
<circle cx="34" cy="50" r="1.8" fill="#f472b6" opacity="0.75"/>
<circle cx="44" cy="50" r="1.8" fill="#f472b6" opacity="0.75"/>
<line x1="39" y1="45" x2="34.5" y2="48.5" stroke="#f472b6" stroke-width="1" opacity="0.7"/>
<line x1="39" y1="45" x2="43.5" y2="48.5" stroke="#f472b6" stroke-width="1" opacity="0.7"/>
<!-- org-tree iris right -->
<circle cx="61" cy="47" r="9" fill="#0e0408" stroke="#f472b6" stroke-width="1.3"/>
<circle cx="61" cy="43" r="2" fill="#f472b6" opacity="0.9"/>
<circle cx="56" cy="50" r="1.8" fill="#f472b6" opacity="0.75"/>
<circle cx="66" cy="50" r="1.8" fill="#f472b6" opacity="0.75"/>
<line x1="61" y1="45" x2="56.5" y2="48.5" stroke="#f472b6" stroke-width="1" opacity="0.7"/>
<line x1="61" y1="45" x2="65.5" y2="48.5" stroke="#f472b6" stroke-width="1" opacity="0.7"/>
<!-- heart glyph forehead -->
<path d="M50,38 L45.5,33.5 Q43,30.5 46.5,30.5 Q48.5,30.5 50,33 Q51.5,30.5 53.5,30.5 Q57,30.5 54.5,33.5 Z" fill="#f472b6" opacity="0.9"/>
<!-- genuine warmth smile -->
<path d="M39,64 Q50,73 61,64" fill="none" stroke="#f472b6" stroke-width="2.2" stroke-linecap="round"/>
<!-- commanding brow lines -->
<line x1="33" y1="38" x2="38" y2="37" stroke="#f472b6" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
<line x1="62" y1="37" x2="67" y2="38" stroke="#f472b6" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
<!-- nose -->
<path d="M48,56 Q50,59 52,56" fill="none" stroke="#f472b6" stroke-width="1.1" stroke-linecap="round" opacity="0.5"/>
<!-- antennae -->
<line x1="44" y1="28" x2="40" y2="18" stroke="#f472b6" stroke-width="1.4" stroke-linecap="round" opacity="0.65"/>
<circle cx="40" cy="18" r="2.2" fill="#f472b6" opacity="0.75"/>
<line x1="56" y1="28" x2="60" y2="18" stroke="#f472b6" stroke-width="1.4" stroke-linecap="round" opacity="0.65"/>
<circle cx="60" cy="18" r="2.2" fill="#f472b6" opacity="0.75"/>
</svg>`,

  "SR-RECRUITER": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#251a10"/>
    <stop offset="100%" stop-color="#0c0804"/>
  </radialGradient>
  <radialGradient id="faceGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#fb923c" stop-opacity="0.25"/>
    <stop offset="100%" stop-color="#fb923c" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<ellipse cx="50" cy="53" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- charming warm peach head -->
<ellipse cx="50" cy="53" rx="22" ry="24" fill="#180f06" stroke="#fb923c" stroke-width="1.8"/>
<!-- talent radar iris left — sweeping scan arc -->
<circle cx="39" cy="47" r="8.5" fill="#0e0804" stroke="#fb923c" stroke-width="1.3"/>
<circle cx="39" cy="47" r="5" fill="none" stroke="#fb923c" stroke-width="0.7" opacity="0.5"/>
<circle cx="39" cy="47" r="2.5" fill="none" stroke="#fb923c" stroke-width="0.7" opacity="0.7"/>
<path d="M39,47 L44,41" stroke="#fb923c" stroke-width="1.5" stroke-linecap="round" opacity="0.9"/>
<circle cx="44" cy="41" r="1.5" fill="#fb923c" opacity="0.9"/>
<!-- talent radar iris right -->
<circle cx="61" cy="47" r="8.5" fill="#0e0804" stroke="#fb923c" stroke-width="1.3"/>
<circle cx="61" cy="47" r="5" fill="none" stroke="#fb923c" stroke-width="0.7" opacity="0.5"/>
<circle cx="61" cy="47" r="2.5" fill="none" stroke="#fb923c" stroke-width="0.7" opacity="0.7"/>
<path d="M61,47 L56,41" stroke="#fb923c" stroke-width="1.5" stroke-linecap="round" opacity="0.9"/>
<circle cx="56" cy="41" r="1.5" fill="#fb923c" opacity="0.9"/>
<!-- handshake cheek marks -->
<path d="M28,55 Q25,53 27,51 L31,51 Q33,51 31,53 Z" fill="#fb923c" opacity="0.5"/>
<path d="M72,55 Q75,53 73,51 L69,51 Q67,51 69,53 Z" fill="#fb923c" opacity="0.5"/>
<!-- enthusiastic recruiter smile -->
<path d="M40,63 Q50,72 60,63" fill="none" stroke="#fb923c" stroke-width="2.2" stroke-linecap="round"/>
<!-- nose -->
<path d="M48,55 Q50,58 52,55" fill="none" stroke="#fb923c" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
<!-- raised brows — enthusiasm -->
<path d="M33,37 Q37,34 42,36" fill="none" stroke="#fb923c" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
<path d="M58,36 Q63,34 67,37" fill="none" stroke="#fb923c" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
<!-- antennae -->
<line x1="44" y1="29" x2="40" y2="19" stroke="#fb923c" stroke-width="1.3" stroke-linecap="round" opacity="0.65"/>
<circle cx="40" cy="19" r="2" fill="#fb923c" opacity="0.75"/>
<line x1="56" y1="29" x2="60" y2="19" stroke="#fb923c" stroke-width="1.3" stroke-linecap="round" opacity="0.65"/>
<circle cx="60" cy="19" r="2" fill="#fb923c" opacity="0.75"/>
</svg>`,

  "RECRUITER": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#22160a"/>
    <stop offset="100%" stop-color="#0a0604"/>
  </radialGradient>
  <radialGradient id="faceGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#fdba74" stop-opacity="0.22"/>
    <stop offset="100%" stop-color="#fdba74" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<ellipse cx="50" cy="53" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- friendly open light peach head -->
<ellipse cx="50" cy="53" rx="21" ry="23" fill="#180d06" stroke="#fdba74" stroke-width="1.8"/>
<!-- magnifying person iris left -->
<circle cx="39" cy="47" r="8" fill="#100806" stroke="#fdba74" stroke-width="1.3"/>
<!-- person shape inside left iris -->
<circle cx="37" cy="43.5" r="2" fill="#fdba74" opacity="0.85"/>
<path d="M34,52 Q34,47 37,47 Q40,47 40,52" fill="none" stroke="#fdba74" stroke-width="1" opacity="0.8"/>
<!-- magnifier circle overlay -->
<circle cx="39" cy="46" r="4.5" fill="none" stroke="#fdba74" stroke-width="1" opacity="0.5"/>
<line x1="42" y1="49.5" x2="44.5" y2="52" stroke="#fdba74" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>
<!-- magnifying person iris right -->
<circle cx="61" cy="47" r="8" fill="#100806" stroke="#fdba74" stroke-width="1.3"/>
<circle cx="59" cy="43.5" r="2" fill="#fdba74" opacity="0.85"/>
<path d="M56,52 Q56,47 59,47 Q62,47 62,52" fill="none" stroke="#fdba74" stroke-width="1" opacity="0.8"/>
<circle cx="61" cy="46" r="4.5" fill="none" stroke="#fdba74" stroke-width="1" opacity="0.5"/>
<line x1="64" y1="49.5" x2="66.5" y2="52" stroke="#fdba74" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>
<!-- LinkedIn connection marks on cheeks -->
<rect x="27" y="52" width="5" height="5" rx="1" fill="none" stroke="#fdba74" stroke-width="1" opacity="0.5"/>
<circle cx="29.5" cy="51" r="1.5" fill="#fdba74" opacity="0.5"/>
<rect x="68" y="52" width="5" height="5" rx="1" fill="none" stroke="#fdba74" stroke-width="1" opacity="0.5"/>
<circle cx="70.5" cy="51" r="1.5" fill="#fdba74" opacity="0.5"/>
<!-- open welcoming smile -->
<path d="M41,63 Q50,71 59,63" fill="none" stroke="#fdba74" stroke-width="2" stroke-linecap="round"/>
<!-- nose -->
<path d="M48,55 Q50,57 52,55" fill="none" stroke="#fdba74" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
<!-- antennae -->
<line x1="44" y1="30" x2="40" y2="20" stroke="#fdba74" stroke-width="1.3" stroke-linecap="round" opacity="0.65"/>
<circle cx="40" cy="20" r="2" fill="#fdba74" opacity="0.7"/>
<line x1="56" y1="30" x2="60" y2="20" stroke="#fdba74" stroke-width="1.3" stroke-linecap="round" opacity="0.65"/>
<circle cx="60" cy="20" r="2" fill="#fdba74" opacity="0.7"/>
</svg>`,

  "HRBP": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#201810"/>
    <stop offset="100%" stop-color="#080604"/>
  </radialGradient>
  <radialGradient id="faceGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#d4a574" stop-opacity="0.22"/>
    <stop offset="100%" stop-color="#d4a574" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<ellipse cx="50" cy="53" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- balanced warm beige oval head -->
<ellipse cx="50" cy="53" rx="21" ry="23" fill="#180e08" stroke="#d4a574" stroke-width="1.8"/>
<!-- bridge-connection iris left — two nodes bridged -->
<circle cx="39" cy="47" r="8" fill="#100806" stroke="#d4a574" stroke-width="1.3"/>
<circle cx="35" cy="47" r="2" fill="#d4a574" opacity="0.85"/>
<circle cx="43" cy="47" r="2" fill="#d4a574" opacity="0.85"/>
<path d="M37,47 Q39,43 41,47" fill="none" stroke="#d4a574" stroke-width="1.2" opacity="0.8"/>
<path d="M37,47 Q39,51 41,47" fill="none" stroke="#d4a574" stroke-width="1.2" opacity="0.5"/>
<!-- bridge-connection iris right -->
<circle cx="61" cy="47" r="8" fill="#100806" stroke="#d4a574" stroke-width="1.3"/>
<circle cx="57" cy="47" r="2" fill="#d4a574" opacity="0.85"/>
<circle cx="65" cy="47" r="2" fill="#d4a574" opacity="0.85"/>
<path d="M59,47 Q61,43 63,47" fill="none" stroke="#d4a574" stroke-width="1.2" opacity="0.8"/>
<path d="M59,47 Q61,51 63,47" fill="none" stroke="#d4a574" stroke-width="1.2" opacity="0.5"/>
<!-- mediator balance marks — scales on forehead -->
<line x1="50" y1="32" x2="50" y2="38" stroke="#d4a574" stroke-width="1.2" opacity="0.7"/>
<line x1="43" y1="35" x2="57" y2="35" stroke="#d4a574" stroke-width="1.2" opacity="0.7"/>
<path d="M43,35 L41,38.5 L45,38.5 Z" fill="none" stroke="#d4a574" stroke-width="0.8" opacity="0.6"/>
<path d="M57,35 L55,38.5 L59,38.5 Z" fill="none" stroke="#d4a574" stroke-width="0.8" opacity="0.6"/>
<!-- diplomatic neutral expression -->
<path d="M43,62 Q50,67 57,62" fill="none" stroke="#d4a574" stroke-width="1.8" stroke-linecap="round"/>
<!-- nose -->
<path d="M48,55 Q50,57 52,55" fill="none" stroke="#d4a574" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
<!-- antennae -->
<line x1="44" y1="30" x2="40" y2="20" stroke="#d4a574" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
<circle cx="40" cy="20" r="2" fill="#d4a574" opacity="0.7"/>
<line x1="56" y1="30" x2="60" y2="20" stroke="#d4a574" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
<circle cx="60" cy="20" r="2" fill="#d4a574" opacity="0.7"/>
</svg>`,

  "L&D-MGR": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#201a08"/>
    <stop offset="100%" stop-color="#080600"/>
  </radialGradient>
  <radialGradient id="faceGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.28"/>
    <stop offset="100%" stop-color="#fbbf24" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<ellipse cx="50" cy="53" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- enthusiastic warm-golden head -->
<ellipse cx="50" cy="53" rx="22" ry="24" fill="#180e02" stroke="#fbbf24" stroke-width="1.8"/>
<!-- book/graduation cap iris left -->
<circle cx="39" cy="47" r="8.5" fill="#100a02" stroke="#fbbf24" stroke-width="1.3"/>
<!-- open book in left iris -->
<path d="M32,50 Q32,43 39,43 Q46,43 46,50 L46,50" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.7"/>
<line x1="39" y1="43" x2="39" y2="50" stroke="#fbbf24" stroke-width="0.8" opacity="0.7"/>
<line x1="33" y1="46" x2="38.5" y2="46" stroke="#fbbf24" stroke-width="0.7" opacity="0.6"/>
<line x1="33" y1="48" x2="38.5" y2="48" stroke="#fbbf24" stroke-width="0.7" opacity="0.6"/>
<line x1="39.5" y1="46" x2="45" y2="46" stroke="#fbbf24" stroke-width="0.7" opacity="0.6"/>
<line x1="39.5" y1="48" x2="45" y2="48" stroke="#fbbf24" stroke-width="0.7" opacity="0.6"/>
<!-- grad cap iris right -->
<circle cx="61" cy="47" r="8.5" fill="#100a02" stroke="#fbbf24" stroke-width="1.3"/>
<rect x="57" y="44" width="8" height="2" rx="0.5" fill="#fbbf24" opacity="0.9"/>
<rect x="59" y="44" width="4" height="4" rx="0.5" fill="#fbbf24" opacity="0.6"/>
<path d="M61,46 L55,49" stroke="#fbbf24" stroke-width="1" stroke-linecap="round" opacity="0.6"/>
<circle cx="55" cy="49.5" r="2" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.6"/>
<!-- knowledge lightbulb on forehead -->
<circle cx="50" cy="34" r="4" fill="none" stroke="#fbbf24" stroke-width="1.3"/>
<line x1="48" y1="38" x2="52" y2="38" stroke="#fbbf24" stroke-width="1.2"/>
<line x1="48.5" y1="40" x2="51.5" y2="40" stroke="#fbbf24" stroke-width="1.2"/>
<line x1="50" y1="30" x2="50" y2="31.5" stroke="#fbbf24" stroke-width="1.2"/>
<!-- excited teacher smile -->
<path d="M40,63 Q50,72 60,63" fill="none" stroke="#fbbf24" stroke-width="2.2" stroke-linecap="round"/>
<!-- raised brows excitement -->
<path d="M33,38 Q38,35 43,37" fill="none" stroke="#fbbf24" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
<path d="M57,37 Q62,35 67,38" fill="none" stroke="#fbbf24" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
<!-- nose -->
<path d="M48,55 Q50,58 52,55" fill="none" stroke="#fbbf24" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
<!-- antennae -->
<line x1="44" y1="29" x2="40" y2="20" stroke="#fbbf24" stroke-width="1.3" stroke-linecap="round" opacity="0.65"/>
<circle cx="40" cy="20" r="2" fill="#fbbf24" opacity="0.7"/>
<line x1="56" y1="29" x2="60" y2="20" stroke="#fbbf24" stroke-width="1.3" stroke-linecap="round" opacity="0.65"/>
<circle cx="60" cy="20" r="2" fill="#fbbf24" opacity="0.7"/>
</svg>`,

  "COMP-ANALYST": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#1a1810"/>
    <stop offset="100%" stop-color="#070604"/>
  </radialGradient>
  <radialGradient id="faceGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#a78350" stop-opacity="0.22"/>
    <stop offset="100%" stop-color="#a78350" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<ellipse cx="50" cy="53" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- precise neutral tan oval head -->
<ellipse cx="50" cy="53" rx="21" ry="23" fill="#120e06" stroke="#a78350" stroke-width="1.8"/>
<!-- salary-band chart iris left — horizontal bands -->
<circle cx="39" cy="47" r="8" fill="#0e0a04" stroke="#a78350" stroke-width="1.3"/>
<rect x="33" y="43" width="12" height="2" rx="0.5" fill="#a78350" opacity="0.4"/>
<rect x="33" y="46" width="12" height="2" rx="0.5" fill="#a78350" opacity="0.6"/>
<rect x="33" y="49" width="12" height="2" rx="0.5" fill="#a78350" opacity="0.8"/>
<rect x="33" y="43" width="6" height="2" rx="0.5" fill="#d4a574" opacity="0.7"/>
<rect x="33" y="46" width="9" height="2" rx="0.5" fill="#d4a574" opacity="0.7"/>
<rect x="33" y="49" width="11" height="2" rx="0.5" fill="#d4a574" opacity="0.7"/>
<!-- salary-band chart iris right -->
<circle cx="61" cy="47" r="8" fill="#0e0a04" stroke="#a78350" stroke-width="1.3"/>
<rect x="55" y="43" width="12" height="2" rx="0.5" fill="#a78350" opacity="0.4"/>
<rect x="55" y="46" width="12" height="2" rx="0.5" fill="#a78350" opacity="0.6"/>
<rect x="55" y="49" width="12" height="2" rx="0.5" fill="#a78350" opacity="0.8"/>
<rect x="55" y="43" width="5" height="2" rx="0.5" fill="#d4a574" opacity="0.7"/>
<rect x="55" y="46" width="8" height="2" rx="0.5" fill="#d4a574" opacity="0.7"/>
<rect x="55" y="49" width="10" height="2" rx="0.5" fill="#d4a574" opacity="0.7"/>
<!-- calculator marks on cheeks -->
<rect x="27" y="50" width="6" height="7" rx="1" fill="none" stroke="#a78350" stroke-width="0.8" opacity="0.6"/>
<rect x="28" y="51.5" width="4" height="1.5" rx="0.3" fill="#a78350" opacity="0.5"/>
<circle cx="29" cy="54.5" r="0.7" fill="#a78350" opacity="0.6"/>
<circle cx="31" cy="54.5" r="0.7" fill="#a78350" opacity="0.6"/>
<rect x="67" y="50" width="6" height="7" rx="1" fill="none" stroke="#a78350" stroke-width="0.8" opacity="0.6"/>
<rect x="68" y="51.5" width="4" height="1.5" rx="0.3" fill="#a78350" opacity="0.5"/>
<circle cx="69" cy="54.5" r="0.7" fill="#a78350" opacity="0.6"/>
<circle cx="71" cy="54.5" r="0.7" fill="#a78350" opacity="0.6"/>
<!-- analytical neutral expression -->
<line x1="43" y1="63" x2="57" y2="63" stroke="#a78350" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
<!-- nose -->
<path d="M48,55 Q50,57 52,55" fill="none" stroke="#a78350" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
<!-- antennae -->
<line x1="44" y1="30" x2="40" y2="21" stroke="#a78350" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
<circle cx="40" cy="21" r="2" fill="#a78350" opacity="0.7"/>
<line x1="56" y1="30" x2="60" y2="21" stroke="#a78350" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
<circle cx="60" cy="21" r="2" fill="#a78350" opacity="0.7"/>
</svg>`,

  // ─── FINANCE TEAM ────────────────────────────────────────────────────────────

  "VP-FIN": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#0e1018"/>
    <stop offset="100%" stop-color="#030408"/>
  </radialGradient>
  <radialGradient id="faceGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#6366f1" stop-opacity="0.22"/>
    <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<ellipse cx="50" cy="53" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- authoritative dark charcoal angular head -->
<rect x="28" y="29" width="44" height="48" rx="12" fill="#080a10" stroke="#6366f1" stroke-width="2"/>
<!-- balance-sheet ledger iris left — column lines -->
<circle cx="39" cy="47" r="8.5" fill="#040614" stroke="#6366f1" stroke-width="1.4"/>
<line x1="35" y1="42" x2="35" y2="52" stroke="#6366f1" stroke-width="0.8" opacity="0.8"/>
<line x1="39" y1="42" x2="39" y2="52" stroke="#6366f1" stroke-width="0.8" opacity="0.8"/>
<line x1="43" y1="42" x2="43" y2="52" stroke="#6366f1" stroke-width="0.8" opacity="0.8"/>
<line x1="33" y1="44.5" x2="45" y2="44.5" stroke="#6366f1" stroke-width="0.7" opacity="0.7"/>
<line x1="33" y1="47" x2="45" y2="47" stroke="#6366f1" stroke-width="0.7" opacity="0.7"/>
<line x1="33" y1="49.5" x2="45" y2="49.5" stroke="#6366f1" stroke-width="0.7" opacity="0.7"/>
<!-- highlight top-right cell -->
<rect x="39" y="42" width="4" height="2.5" rx="0" fill="#818cf8" opacity="0.5"/>
<!-- balance-sheet ledger iris right -->
<circle cx="61" cy="47" r="8.5" fill="#040614" stroke="#6366f1" stroke-width="1.4"/>
<line x1="57" y1="42" x2="57" y2="52" stroke="#6366f1" stroke-width="0.8" opacity="0.8"/>
<line x1="61" y1="42" x2="61" y2="52" stroke="#6366f1" stroke-width="0.8" opacity="0.8"/>
<line x1="65" y1="42" x2="65" y2="52" stroke="#6366f1" stroke-width="0.8" opacity="0.8"/>
<line x1="55" y1="44.5" x2="67" y2="44.5" stroke="#6366f1" stroke-width="0.7" opacity="0.7"/>
<line x1="55" y1="47" x2="67" y2="47" stroke="#6366f1" stroke-width="0.7" opacity="0.7"/>
<line x1="55" y1="49.5" x2="67" y2="49.5" stroke="#6366f1" stroke-width="0.7" opacity="0.7"/>
<rect x="61" y="42" width="4" height="2.5" rx="0" fill="#818cf8" opacity="0.5"/>
<!-- dollar/currency mark forehead -->
<text x="50" y="39" text-anchor="middle" font-size="7" fill="#6366f1" opacity="0.9" font-family="monospace">$</text>
<!-- stern precise expression — flat line -->
<line x1="42" y1="63" x2="58" y2="63" stroke="#6366f1" stroke-width="1.8" stroke-linecap="round" opacity="0.8"/>
<!-- strong brow lines -->
<line x1="33" y1="38" x2="42" y2="37" stroke="#6366f1" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
<line x1="58" y1="37" x2="67" y2="38" stroke="#6366f1" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
<!-- nose -->
<path d="M48,55 Q50,58 52,55" fill="none" stroke="#6366f1" stroke-width="1.1" stroke-linecap="round" opacity="0.5"/>
</svg>`,

  "FPA-MGR": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#101218"/>
    <stop offset="100%" stop-color="#04050a"/>
  </radialGradient>
  <radialGradient id="faceGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.2"/>
    <stop offset="100%" stop-color="#7c3aed" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<ellipse cx="50" cy="53" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- calculating finance-grey head -->
<ellipse cx="50" cy="53" rx="22" ry="24" fill="#080a10" stroke="#7c3aed" stroke-width="1.8"/>
<!-- forecast-chart iris left — rising area chart -->
<circle cx="39" cy="47" r="8.5" fill="#04040e" stroke="#7c3aed" stroke-width="1.3"/>
<polyline points="32,52 35,50 38,47 41,44 46,41" fill="none" stroke="#7c3aed" stroke-width="1.2" opacity="0.9"/>
<polygon points="32,52 35,50 38,47 41,44 46,41 46,52" fill="#7c3aed" opacity="0.15"/>
<!-- forecast dotted extension -->
<line x1="44" y1="41.5" x2="47" y2="39.5" stroke="#a78bfa" stroke-width="1" stroke-dasharray="1.5,1.5" opacity="0.7"/>
<!-- forecast-chart iris right -->
<circle cx="61" cy="47" r="8.5" fill="#04040e" stroke="#7c3aed" stroke-width="1.3"/>
<polyline points="54,52 57,50 60,47 63,44 68,41" fill="none" stroke="#7c3aed" stroke-width="1.2" opacity="0.9"/>
<polygon points="54,52 57,50 60,47 63,44 68,41 68,52" fill="#7c3aed" opacity="0.15"/>
<line x1="66" y1="41.5" x2="69" y2="39.5" stroke="#a78bfa" stroke-width="1" stroke-dasharray="1.5,1.5" opacity="0.7"/>
<!-- spreadsheet grid marks on cheeks -->
<rect x="27" y="51" width="6" height="6" rx="0.5" fill="none" stroke="#7c3aed" stroke-width="0.8" opacity="0.6"/>
<line x1="30" y1="51" x2="30" y2="57" stroke="#7c3aed" stroke-width="0.5" opacity="0.5"/>
<line x1="27" y1="54" x2="33" y2="54" stroke="#7c3aed" stroke-width="0.5" opacity="0.5"/>
<rect x="67" y="51" width="6" height="6" rx="0.5" fill="none" stroke="#7c3aed" stroke-width="0.8" opacity="0.6"/>
<line x1="70" y1="51" x2="70" y2="57" stroke="#7c3aed" stroke-width="0.5" opacity="0.5"/>
<line x1="67" y1="54" x2="73" y2="54" stroke="#7c3aed" stroke-width="0.5" opacity="0.5"/>
<!-- calculated expression -->
<path d="M43,63 Q50,67 57,63" fill="none" stroke="#7c3aed" stroke-width="1.7" stroke-linecap="round"/>
<!-- nose -->
<path d="M48,55 Q50,57 52,55" fill="none" stroke="#7c3aed" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
<!-- antennae -->
<line x1="44" y1="29" x2="40" y2="20" stroke="#7c3aed" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
<circle cx="40" cy="20" r="2" fill="#7c3aed" opacity="0.7"/>
<line x1="56" y1="29" x2="60" y2="20" stroke="#7c3aed" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
<circle cx="60" cy="20" r="2" fill="#7c3aed" opacity="0.7"/>
</svg>`,

  "FIN-ANALYST": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#101418"/>
    <stop offset="100%" stop-color="#040508"/>
  </radialGradient>
  <radialGradient id="faceGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#94a3b8" stop-opacity="0.2"/>
    <stop offset="100%" stop-color="#94a3b8" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<ellipse cx="50" cy="53" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- focused silver-grey head -->
<ellipse cx="50" cy="53" rx="21" ry="23" fill="#080a0e" stroke="#94a3b8" stroke-width="1.8"/>
<!-- stock graph candlestick iris left -->
<circle cx="39" cy="47" r="8.5" fill="#04060c" stroke="#94a3b8" stroke-width="1.3"/>
<!-- candlestick candles left iris -->
<line x1="35" y1="41" x2="35" y2="53" stroke="#94a3b8" stroke-width="0.7" opacity="0.6"/>
<rect x="33.5" y="44" width="3" height="5" rx="0.3" fill="#22c55e" opacity="0.8"/>
<line x1="39" y1="41" x2="39" y2="53" stroke="#94a3b8" stroke-width="0.7" opacity="0.6"/>
<rect x="37.5" y="45.5" width="3" height="4" rx="0.3" fill="#ef4444" opacity="0.8"/>
<line x1="43" y1="41" x2="43" y2="53" stroke="#94a3b8" stroke-width="0.7" opacity="0.6"/>
<rect x="41.5" y="43" width="3" height="6" rx="0.3" fill="#22c55e" opacity="0.8"/>
<!-- candlestick iris right -->
<circle cx="61" cy="47" r="8.5" fill="#04060c" stroke="#94a3b8" stroke-width="1.3"/>
<line x1="57" y1="41" x2="57" y2="53" stroke="#94a3b8" stroke-width="0.7" opacity="0.6"/>
<rect x="55.5" y="45" width="3" height="5" rx="0.3" fill="#ef4444" opacity="0.8"/>
<line x1="61" y1="41" x2="61" y2="53" stroke="#94a3b8" stroke-width="0.7" opacity="0.6"/>
<rect x="59.5" y="43" width="3" height="6" rx="0.3" fill="#22c55e" opacity="0.8"/>
<line x1="65" y1="41" x2="65" y2="53" stroke="#94a3b8" stroke-width="0.7" opacity="0.6"/>
<rect x="63.5" y="44.5" width="3" height="4" rx="0.3" fill="#22c55e" opacity="0.8"/>
<!-- number marks on cheeks -->
<text x="29" y="55" text-anchor="middle" font-size="4.5" fill="#94a3b8" opacity="0.6" font-family="monospace">42</text>
<text x="71" y="55" text-anchor="middle" font-size="4.5" fill="#94a3b8" opacity="0.6" font-family="monospace">7%</text>
<!-- focused expression -->
<path d="M43,63 Q50,67 57,63" fill="none" stroke="#94a3b8" stroke-width="1.7" stroke-linecap="round"/>
<!-- brow furrow — concentration -->
<line x1="34" y1="38" x2="42" y2="37" stroke="#94a3b8" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
<line x1="58" y1="37" x2="66" y2="38" stroke="#94a3b8" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
<!-- nose -->
<path d="M48,55 Q50,57 52,55" fill="none" stroke="#94a3b8" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
<!-- antennae -->
<line x1="44" y1="30" x2="40" y2="21" stroke="#94a3b8" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
<circle cx="40" cy="21" r="2" fill="#94a3b8" opacity="0.65"/>
<line x1="56" y1="30" x2="60" y2="21" stroke="#94a3b8" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
<circle cx="60" cy="21" r="2" fill="#94a3b8" opacity="0.65"/>
</svg>`,

  "CONTROLLER": `<svg xmlns="http://www.w3.org/2020/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#0c0e18"/>
    <stop offset="100%" stop-color="#03040a"/>
  </radialGradient>
  <radialGradient id="faceGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#475569" stop-opacity="0.22"/>
    <stop offset="100%" stop-color="#475569" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<ellipse cx="50" cy="53" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- rigid formal dark navy-grey head — more angular -->
<rect x="29" y="29" width="42" height="48" rx="10" fill="#060810" stroke="#475569" stroke-width="2"/>
<!-- audit-trail iris left — numbered rows -->
<circle cx="39" cy="47" r="8.5" fill="#030508" stroke="#475569" stroke-width="1.4"/>
<line x1="33" y1="43" x2="45" y2="43" stroke="#475569" stroke-width="0.7" opacity="0.7"/>
<line x1="33" y1="46" x2="45" y2="46" stroke="#475569" stroke-width="0.7" opacity="0.7"/>
<line x1="33" y1="49" x2="45" y2="49" stroke="#475569" stroke-width="0.7" opacity="0.7"/>
<line x1="33" y1="52" x2="45" y2="52" stroke="#475569" stroke-width="0.7" opacity="0.7"/>
<text x="34.5" y="45.2" font-size="2.8" fill="#64748b" opacity="0.8" font-family="monospace">01</text>
<text x="34.5" y="48.2" font-size="2.8" fill="#64748b" opacity="0.8" font-family="monospace">02</text>
<text x="34.5" y="51.2" font-size="2.8" fill="#64748b" opacity="0.8" font-family="monospace">03</text>
<!-- audit-trail iris right -->
<circle cx="61" cy="47" r="8.5" fill="#030508" stroke="#475569" stroke-width="1.4"/>
<line x1="55" y1="43" x2="67" y2="43" stroke="#475569" stroke-width="0.7" opacity="0.7"/>
<line x1="55" y1="46" x2="67" y2="46" stroke="#475569" stroke-width="0.7" opacity="0.7"/>
<line x1="55" y1="49" x2="67" y2="49" stroke="#475569" stroke-width="0.7" opacity="0.7"/>
<line x1="55" y1="52" x2="67" y2="52" stroke="#475569" stroke-width="0.7" opacity="0.7"/>
<text x="56.5" y="45.2" font-size="2.8" fill="#64748b" opacity="0.8" font-family="monospace">01</text>
<text x="56.5" y="48.2" font-size="2.8" fill="#64748b" opacity="0.8" font-family="monospace">02</text>
<text x="56.5" y="51.2" font-size="2.8" fill="#64748b" opacity="0.8" font-family="monospace">03</text>
<!-- ledger marks on forehead -->
<line x1="40" y1="35" x2="60" y2="35" stroke="#475569" stroke-width="1" opacity="0.6"/>
<line x1="40" y1="37.5" x2="60" y2="37.5" stroke="#475569" stroke-width="1" opacity="0.4"/>
<!-- strict flat expression -->
<line x1="42" y1="63" x2="58" y2="63" stroke="#475569" stroke-width="2" stroke-linecap="round" opacity="0.9"/>
<!-- heavy straight brows -->
<line x1="32" y1="38" x2="43" y2="38" stroke="#475569" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
<line x1="57" y1="38" x2="68" y2="38" stroke="#475569" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
<!-- nose -->
<path d="M48,55 Q50,58 52,55" fill="none" stroke="#475569" stroke-width="1.1" stroke-linecap="round" opacity="0.5"/>
</svg>`,

  "REV-REC": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#0e1218"/>
    <stop offset="100%" stop-color="#04050a"/>
  </radialGradient>
  <radialGradient id="faceGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#64748b" stop-opacity="0.22"/>
    <stop offset="100%" stop-color="#64748b" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<ellipse cx="50" cy="53" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- precise steel grey head -->
<ellipse cx="50" cy="53" rx="21" ry="23" fill="#060810" stroke="#64748b" stroke-width="1.8"/>
<!-- revenue recognition waterfall iris left — stepped bars -->
<circle cx="39" cy="47" r="8.5" fill="#030508" stroke="#64748b" stroke-width="1.3"/>
<rect x="33" y="50" width="3" height="4" rx="0.3" fill="#64748b" opacity="0.9"/>
<rect x="36.5" y="47" width="3" height="7" rx="0.3" fill="#64748b" opacity="0.75"/>
<rect x="40" y="44" width="3" height="10" rx="0.3" fill="#64748b" opacity="0.6"/>
<rect x="43.5" y="42" width="3" height="12" rx="0.3" fill="#64748b" opacity="0.45"/>
<line x1="33" y1="52" x2="46.5" y2="42" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="1.5,1" opacity="0.7"/>
<!-- waterfall iris right -->
<circle cx="61" cy="47" r="8.5" fill="#030508" stroke="#64748b" stroke-width="1.3"/>
<rect x="55" y="50" width="3" height="4" rx="0.3" fill="#64748b" opacity="0.9"/>
<rect x="58.5" y="47" width="3" height="7" rx="0.3" fill="#64748b" opacity="0.75"/>
<rect x="62" y="44" width="3" height="10" rx="0.3" fill="#64748b" opacity="0.6"/>
<rect x="65.5" y="42" width="3" height="12" rx="0.3" fill="#64748b" opacity="0.45"/>
<line x1="55" y1="52" x2="68.5" y2="42" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="1.5,1" opacity="0.7"/>
<!-- ASC 606 glyph on forehead -->
<text x="50" y="37" text-anchor="middle" font-size="5" fill="#64748b" opacity="0.8" font-family="monospace">606</text>
<!-- precise expression -->
<line x1="43" y1="63" x2="57" y2="63" stroke="#64748b" stroke-width="1.6" stroke-linecap="round" opacity="0.8"/>
<!-- brows -->
<line x1="33" y1="38" x2="43" y2="37.5" stroke="#64748b" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
<line x1="57" y1="37.5" x2="67" y2="38" stroke="#64748b" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
<!-- nose -->
<path d="M48,55 Q50,57 52,55" fill="none" stroke="#64748b" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
<!-- antennae -->
<line x1="44" y1="30" x2="40" y2="21" stroke="#64748b" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
<circle cx="40" cy="21" r="2" fill="#64748b" opacity="0.7"/>
<line x1="56" y1="30" x2="60" y2="21" stroke="#64748b" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
<circle cx="60" cy="21" r="2" fill="#64748b" opacity="0.7"/>
</svg>`,

  "PROCUREMENT": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#141210"/>
    <stop offset="100%" stop-color="#060504"/>
  </radialGradient>
  <radialGradient id="faceGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#78716c" stop-opacity="0.22"/>
    <stop offset="100%" stop-color="#78716c" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<ellipse cx="50" cy="53" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- negotiating warm grey head -->
<ellipse cx="50" cy="53" rx="22" ry="24" fill="#0a0806" stroke="#78716c" stroke-width="1.8"/>
<!-- vendor comparison iris left — two columns side by side -->
<circle cx="39" cy="47" r="8.5" fill="#060504" stroke="#78716c" stroke-width="1.3"/>
<!-- vendor A column -->
<rect x="33" y="42" width="4.5" height="11" rx="0.5" fill="none" stroke="#78716c" stroke-width="0.8" opacity="0.7"/>
<rect x="33" y="42" width="4.5" height="3.5" rx="0.3" fill="#78716c" opacity="0.4"/>
<rect x="33" y="46.5" width="4.5" height="3" rx="0.3" fill="#78716c" opacity="0.3"/>
<!-- vendor B column -->
<rect x="38.5" y="42" width="4.5" height="11" rx="0.5" fill="none" stroke="#78716c" stroke-width="0.8" opacity="0.7"/>
<rect x="38.5" y="42" width="4.5" height="5" rx="0.3" fill="#a8a29e" opacity="0.4"/>
<rect x="38.5" y="47.5" width="4.5" height="2" rx="0.3" fill="#a8a29e" opacity="0.3"/>
<!-- vendor comparison iris right -->
<circle cx="61" cy="47" r="8.5" fill="#060504" stroke="#78716c" stroke-width="1.3"/>
<rect x="55" y="42" width="4.5" height="11" rx="0.5" fill="none" stroke="#78716c" stroke-width="0.8" opacity="0.7"/>
<rect x="55" y="42" width="4.5" height="3.5" rx="0.3" fill="#78716c" opacity="0.4"/>
<rect x="55" y="46.5" width="4.5" height="3" rx="0.3" fill="#78716c" opacity="0.3"/>
<rect x="60.5" y="42" width="4.5" height="11" rx="0.5" fill="none" stroke="#78716c" stroke-width="0.8" opacity="0.7"/>
<rect x="60.5" y="42" width="4.5" height="5" rx="0.3" fill="#a8a29e" opacity="0.4"/>
<rect x="60.5" y="47.5" width="4.5" height="2" rx="0.3" fill="#a8a29e" opacity="0.3"/>
<!-- deal-haggling tag marks on cheeks -->
<path d="M27,51 L32,51 L34,54 L32,57 L27,57 Z" fill="none" stroke="#78716c" stroke-width="0.8" opacity="0.55"/>
<path d="M73,51 L68,51 L66,54 L68,57 L73,57 Z" fill="none" stroke="#78716c" stroke-width="0.8" opacity="0.55"/>
<circle cx="28.5" cy="53.5" r="1" fill="#78716c" opacity="0.5"/>
<circle cx="71.5" cy="53.5" r="1" fill="#78716c" opacity="0.5"/>
<!-- negotiating slight smile -->
<path d="M43,62 Q50,67 57,62" fill="none" stroke="#78716c" stroke-width="1.7" stroke-linecap="round"/>
<!-- nose -->
<path d="M48,55 Q50,57 52,55" fill="none" stroke="#78716c" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
<!-- antennae -->
<line x1="44" y1="29" x2="40" y2="20" stroke="#78716c" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
<circle cx="40" cy="20" r="2" fill="#78716c" opacity="0.7"/>
<line x1="56" y1="29" x2="60" y2="20" stroke="#78716c" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
<circle cx="60" cy="20" r="2" fill="#78716c" opacity="0.7"/>
</svg>`,

  "EQUITY-ADMIN": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#121418"/>
    <stop offset="100%" stop-color="#050608"/>
  </radialGradient>
  <radialGradient id="faceGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#b0b8c8" stop-opacity="0.2"/>
    <stop offset="100%" stop-color="#b0b8c8" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
<ellipse cx="50" cy="53" rx="30" ry="28" fill="url(#faceGlow)"/>
<!-- formal careful platinum-grey head -->
<ellipse cx="50" cy="53" rx="21" ry="23" fill="#080a0e" stroke="#b0b8c8" stroke-width="1.8"/>
<!-- vesting-schedule cliff/ramp iris left — cliff then ramp -->
<circle cx="39" cy="47" r="8.5" fill="#04050a" stroke="#b0b8c8" stroke-width="1.3"/>
<!-- cliff: flat then jump -->
<polyline points="33,52 37,52 37,45 46,41" fill="none" stroke="#b0b8c8" stroke-width="1.3" opacity="0.9"/>
<polygon points="33,52 37,52 37,45 46,41 46,52" fill="#b0b8c8" opacity="0.1"/>
<!-- year 1 cliff mark -->
<line x1="37" y1="51" x2="37" y2="53" stroke="#b0b8c8" stroke-width="0.8" opacity="0.6"/>
<!-- vesting ramp iris right -->
<circle cx="61" cy="47" r="8.5" fill="#04050a" stroke="#b0b8c8" stroke-width="1.3"/>
<polyline points="55,52 59,52 59,45 68,41" fill="none" stroke="#b0b8c8" stroke-width="1.3" opacity="0.9"/>
<polygon points="55,52 59,52 59,45 68,41 68,52" fill="#b0b8c8" opacity="0.1"/>
<line x1="59" y1="51" x2="59" y2="53" stroke="#b0b8c8" stroke-width="0.8" opacity="0.6"/>
<!-- equity pie-chart on forehead -->
<circle cx="50" cy="34" r="5" fill="none" stroke="#b0b8c8" stroke-width="1.2"/>
<path d="M50,34 L50,29 A5,5 0 0,1 54.3,36.5 Z" fill="#b0b8c8" opacity="0.6"/>
<path d="M50,34 L54.3,36.5 A5,5 0 0,1 45.7,36.5 Z" fill="#b0b8c8" opacity="0.35"/>
<!-- formal careful expression -->
<path d="M43,63 Q50,67 57,63" fill="none" stroke="#b0b8c8" stroke-width="1.6" stroke-linecap="round"/>
<!-- brows -->
<line x1="33" y1="38" x2="42" y2="37.5" stroke="#b0b8c8" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
<line x1="58" y1="37.5" x2="67" y2="38" stroke="#b0b8c8" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
<!-- nose -->
<path d="M48,55 Q50,57 52,55" fill="none" stroke="#b0b8c8" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
<!-- antennae -->
<line x1="44" y1="30" x2="40" y2="21" stroke="#b0b8c8" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
<circle cx="40" cy="21" r="2" fill="#b0b8c8" opacity="0.65"/>
<line x1="56" y1="30" x2="60" y2="21" stroke="#b0b8c8" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
<circle cx="60" cy="21" r="2" fill="#b0b8c8" opacity="0.65"/>
</svg>`,

};

// Fix CONTROLLER xmlns typo if present
for (const [code, svg] of Object.entries(svgs)) {
  if (svg.includes("http://www.w3.org/2020/svg")) {
    svgs[code] = svg.replace("http://www.w3.org/2020/svg", "http://www.w3.org/2000/svg");
  }
}

let written = 0;
let errors = 0;

for (const [code, svg] of Object.entries(svgs)) {
  const filePath = path.join(OUT, `${code}.svg`);
  try {
    fs.writeFileSync(filePath, svg.trim() + "\n");
    console.log(`✓ ${code}.svg`);
    written++;
  } catch (err) {
    console.error(`✗ ${code}.svg — ${(err as Error).message}`);
    errors++;
  }
}

console.log(`\nDone: ${written} written, ${errors} errors`);
console.log(`Output: ${OUT}`);
