import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUT = join(__dirname, "../public/brand/avatars/agents");
mkdirSync(OUT, { recursive: true });

const svgs: Record<string, string> = {

// ─────────────────────────────────────────────────────────────────
// 1. CEO — The Sovereign
// Tall hexagonal crown-head, deep violet-black, gold spikes, almond eyes
// ─────────────────────────────────────────────────────────────────
"CEO": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="ceo-bg" cx="50%" cy="40%" r="70%"><stop offset="0%" stop-color="#2D1459"/><stop offset="100%" stop-color="#000000"/></radialGradient>
  <radialGradient id="ceo-eye" cx="35%" cy="35%" r="60%"><stop offset="0%" stop-color="#FFE566"/><stop offset="100%" stop-color="#B8860B"/></radialGradient>
  <radialGradient id="ceo-skin" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#2A1245"/><stop offset="100%" stop-color="#1A0A2E"/></radialGradient>
  <filter id="ceo-glow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="ceo-glow-sm"><feGaussianBlur stdDeviation="0.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#ceo-bg)"/>
<!-- Hexagonal head shape -->
<polygon points="50,8 72,20 72,60 50,75 28,60 28,20" fill="url(#ceo-skin)" stroke="#3D1A6E" stroke-width="0.5"/>
<!-- 5 gold crown spikes from top -->
<polygon points="50,8 47,2 53,2" fill="#FFD700" filter="url(#ceo-glow-sm)"/>
<polygon points="42,13 38,5 45,8" fill="#FFD700" filter="url(#ceo-glow-sm)"/>
<polygon points="58,13 55,8 62,5" fill="#FFD700" filter="url(#ceo-glow-sm)"/>
<polygon points="34,19 28,12 36,16" fill="#DAA520"/>
<polygon points="66,19 64,16 72,12" fill="#DAA520"/>
<!-- Gold antennae -->
<line x1="44" y1="13" x2="40" y2="5" stroke="#FFD700" stroke-width="1" filter="url(#ceo-glow-sm)"/>
<circle cx="40" cy="5" r="1.2" fill="#FFD700" filter="url(#ceo-glow)"/>
<line x1="56" y1="13" x2="60" y2="5" stroke="#FFD700" stroke-width="1" filter="url(#ceo-glow-sm)"/>
<circle cx="60" cy="5" r="1.2" fill="#FFD700" filter="url(#ceo-glow)"/>
<!-- Left almond eye -->
<ellipse cx="38" cy="38" rx="8" ry="5" fill="url(#ceo-eye)" filter="url(#ceo-glow)"/>
<ellipse cx="38" cy="38" rx="2" ry="4.5" fill="#1A0A2E"/>
<ellipse cx="38" cy="38" rx="0.5" ry="4.2" fill="#FFD700" opacity="0.6"/>
<!-- Right almond eye -->
<ellipse cx="62" cy="38" rx="8" ry="5" fill="url(#ceo-eye)" filter="url(#ceo-glow)"/>
<ellipse cx="62" cy="38" rx="2" ry="4.5" fill="#1A0A2E"/>
<ellipse cx="62" cy="38" rx="0.5" ry="4.2" fill="#FFD700" opacity="0.6"/>
<!-- Thin regal mouth -->
<path d="M40,57 Q50,60 60,57" stroke="#8B6914" stroke-width="1.2" fill="none"/>
<!-- Gold circuit-trace markings on cheeks -->
<path d="M28,35 L33,35 L33,40 L36,40" stroke="#FFD700" stroke-width="0.5" fill="none" opacity="0.7"/>
<path d="M72,35 L67,35 L67,40 L64,40" stroke="#FFD700" stroke-width="0.5" fill="none" opacity="0.7"/>
<path d="M30,45 L34,45 L34,48" stroke="#FFD700" stroke-width="0.4" fill="none" opacity="0.5"/>
<path d="M70,45 L66,45 L66,48" stroke="#FFD700" stroke-width="0.4" fill="none" opacity="0.5"/>
<!-- Forehead gem -->
<polygon points="50,22 53,27 50,30 47,27" fill="#C084FC" filter="url(#ceo-glow-sm)"/>
<!-- Neck/shoulders -->
<rect x="44" y="72" width="12" height="6" rx="2" fill="#1A0A2E" stroke="#3D1A6E" stroke-width="0.5"/>
</svg>`,

// ─────────────────────────────────────────────────────────────────
// 2. CTO — The Architect
// Wide rounded rect, metallic blue-grey, 3 eyes, circuit traces, 4 antennae
// ─────────────────────────────────────────────────────────────────
"CTO": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="cto-bg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#0A1628"/><stop offset="100%" stop-color="#000000"/></radialGradient>
  <radialGradient id="cto-skin" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#2A3F5A"/><stop offset="100%" stop-color="#1C2E4A"/></radialGradient>
  <radialGradient id="cto-eye" cx="30%" cy="30%" r="60%"><stop offset="0%" stop-color="#66F0FF"/><stop offset="100%" stop-color="#0099BB"/></radialGradient>
  <filter id="cto-glow"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="cto-glow-sm"><feGaussianBlur stdDeviation="0.7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#cto-bg)"/>
<!-- Wide rounded rectangle head -->
<rect x="18" y="15" width="64" height="60" rx="14" fill="url(#cto-skin)" stroke="#2A4A70" stroke-width="0.6"/>
<!-- 4 antennae in arc with circuit node tips -->
<line x1="32" y1="18" x2="28" y2="5" stroke="#00D9FF" stroke-width="0.9"/>
<rect x="25.5" y="3" width="5" height="3" rx="0.5" fill="#00D9FF" filter="url(#cto-glow-sm)"/>
<line x1="42" y1="16" x2="40" y2="4" stroke="#00D9FF" stroke-width="0.9"/>
<rect x="37.5" y="2" width="5" height="3" rx="0.5" fill="#00D9FF" filter="url(#cto-glow-sm)"/>
<line x1="58" y1="16" x2="60" y2="4" stroke="#00D9FF" stroke-width="0.9"/>
<rect x="57.5" y="2" width="5" height="3" rx="0.5" fill="#00D9FF" filter="url(#cto-glow-sm)"/>
<line x1="68" y1="18" x2="72" y2="5" stroke="#00D9FF" stroke-width="0.9"/>
<rect x="69.5" y="3" width="5" height="3" rx="0.5" fill="#00D9FF" filter="url(#cto-glow-sm)"/>
<!-- Left eye -->
<ellipse cx="35" cy="38" rx="7" ry="6" fill="url(#cto-eye)" filter="url(#cto-glow)"/>
<ellipse cx="35" cy="38" rx="3" ry="3" fill="#003344"/>
<ellipse cx="33.5" cy="36.5" rx="1" ry="1" fill="#AAFFFF" opacity="0.8"/>
<!-- Right eye -->
<ellipse cx="65" cy="38" rx="7" ry="6" fill="url(#cto-eye)" filter="url(#cto-glow)"/>
<ellipse cx="65" cy="38" rx="3" ry="3" fill="#003344"/>
<ellipse cx="63.5" cy="36.5" rx="1" ry="1" fill="#AAFFFF" opacity="0.8"/>
<!-- Center forehead eye -->
<ellipse cx="50" cy="26" rx="5.5" ry="4.5" fill="url(#cto-eye)" filter="url(#cto-glow)"/>
<ellipse cx="50" cy="26" rx="2.2" ry="2.2" fill="#003344"/>
<ellipse cx="49" cy="25" rx="0.8" ry="0.8" fill="#AAFFFF" opacity="0.8"/>
<!-- Circuit board traces on face -->
<path d="M20,35 L25,35 L25,32 L28,32" stroke="#00D9FF" stroke-width="0.4" fill="none" opacity="0.5"/>
<path d="M20,45 L26,45 L26,48 L30,48" stroke="#00D9FF" stroke-width="0.4" fill="none" opacity="0.5"/>
<path d="M80,35 L75,35 L75,32 L72,32" stroke="#00D9FF" stroke-width="0.4" fill="none" opacity="0.5"/>
<path d="M80,45 L74,45 L74,48 L70,48" stroke="#00D9FF" stroke-width="0.4" fill="none" opacity="0.5"/>
<path d="M40,55 L45,55 L45,58 L55,58 L55,55 L60,55" stroke="#00D9FF" stroke-width="0.4" fill="none" opacity="0.4"/>
<path d="M35,48 L38,48 L38,52 L42,52" stroke="#00D9FF" stroke-width="0.4" fill="none" opacity="0.4"/>
<path d="M65,48 L62,48 L62,52 L58,52" stroke="#00D9FF" stroke-width="0.4" fill="none" opacity="0.4"/>
<!-- Neural glyph on chin (no mouth) -->
<path d="M44,63 L50,66 L56,63" stroke="#00D9FF" stroke-width="0.7" fill="none" opacity="0.7"/>
<circle cx="50" cy="66" r="1.2" fill="#00D9FF" filter="url(#cto-glow-sm)"/>
<!-- Neck -->
<rect x="44" y="73" width="12" height="5" rx="2" fill="#1C2E4A" stroke="#2A4A70" stroke-width="0.5"/>
</svg>`,

// ─────────────────────────────────────────────────────────────────
// 3. CPO — The Visionary
// Wide oval, lavender, huge round eyes with starburst, curling ram-horn antennae
// ─────────────────────────────────────────────────────────────────
"CPO": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="cpo-bg" cx="50%" cy="40%" r="65%"><stop offset="0%" stop-color="#1A0A2E"/><stop offset="100%" stop-color="#0A0014"/></radialGradient>
  <radialGradient id="cpo-skin" cx="50%" cy="35%" r="55%"><stop offset="0%" stop-color="#D8A0FF"/><stop offset="100%" stop-color="#9B5EC4"/></radialGradient>
  <radialGradient id="cpo-eye" cx="35%" cy="30%" r="60%"><stop offset="0%" stop-color="#F0D0FF"/><stop offset="100%" stop-color="#9B5EC4"/></radialGradient>
  <filter id="cpo-glow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="cpo-soft"><feGaussianBlur stdDeviation="0.6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#cpo-bg)"/>
<!-- Wide oval head -->
<ellipse cx="50" cy="48" rx="30" ry="34" fill="url(#cpo-skin)" stroke="#C084FC" stroke-width="0.5"/>
<!-- Ram-horn curling antennae -->
<path d="M34,20 C28,14 20,12 22,22 C24,30 32,28 30,20" stroke="#B060E8" stroke-width="2" fill="none"/>
<path d="M66,20 C72,14 80,12 78,22 C76,30 68,28 70,20" stroke="#B060E8" stroke-width="2" fill="none"/>
<!-- Left huge round eye -->
<circle cx="36" cy="42" r="10" fill="url(#cpo-eye)" filter="url(#cpo-glow)"/>
<!-- Starburst pattern in left eye -->
<line x1="36" y1="33" x2="36" y2="51" stroke="#C084FC" stroke-width="0.5" opacity="0.7"/>
<line x1="27" y1="42" x2="45" y2="42" stroke="#C084FC" stroke-width="0.5" opacity="0.7"/>
<line x1="29.6" y1="35.6" x2="42.4" y2="48.4" stroke="#C084FC" stroke-width="0.5" opacity="0.7"/>
<line x1="42.4" y1="35.6" x2="29.6" y2="48.4" stroke="#C084FC" stroke-width="0.5" opacity="0.7"/>
<circle cx="36" cy="42" r="4" fill="#3D0070"/>
<circle cx="34.5" cy="40.5" r="1.2" fill="#F0D0FF" opacity="0.9"/>
<!-- Right huge round eye -->
<circle cx="64" cy="42" r="10" fill="url(#cpo-eye)" filter="url(#cpo-glow)"/>
<line x1="64" y1="33" x2="64" y2="51" stroke="#C084FC" stroke-width="0.5" opacity="0.7"/>
<line x1="55" y1="42" x2="73" y2="42" stroke="#C084FC" stroke-width="0.5" opacity="0.7"/>
<line x1="57.6" y1="35.6" x2="70.4" y2="48.4" stroke="#C084FC" stroke-width="0.5" opacity="0.7"/>
<line x1="70.4" y1="35.6" x2="57.6" y2="48.4" stroke="#C084FC" stroke-width="0.5" opacity="0.7"/>
<circle cx="64" cy="42" r="4" fill="#3D0070"/>
<circle cx="62.5" cy="40.5" r="1.2" fill="#F0D0FF" opacity="0.9"/>
<!-- Gentle curved smile with extra tiny teeth row -->
<path d="M38,62 Q50,68 62,62" stroke="#7B2FBE" stroke-width="1.3" fill="none"/>
<path d="M40,63.5 Q50,67 60,63.5" stroke="#F0D0FF" stroke-width="0.4" fill="none" opacity="0.5"/>
<!-- Bioluminescent freckle-dots in constellation pattern -->
<circle cx="42" cy="32" r="1" fill="#E040FF" filter="url(#cpo-soft)" opacity="0.9"/>
<circle cx="48" cy="28" r="0.8" fill="#E040FF" filter="url(#cpo-soft)" opacity="0.9"/>
<circle cx="55" cy="30" r="1.1" fill="#E040FF" filter="url(#cpo-soft)" opacity="0.9"/>
<circle cx="60" cy="26" r="0.7" fill="#CC99FF" filter="url(#cpo-soft)" opacity="0.9"/>
<circle cx="44" cy="54" r="0.8" fill="#E040FF" filter="url(#cpo-soft)" opacity="0.7"/>
<circle cx="56" cy="55" r="0.8" fill="#E040FF" filter="url(#cpo-soft)" opacity="0.7"/>
<circle cx="30" cy="50" r="0.7" fill="#CC99FF" filter="url(#cpo-soft)" opacity="0.6"/>
<circle cx="70" cy="48" r="0.7" fill="#CC99FF" filter="url(#cpo-soft)" opacity="0.6"/>
<!-- Neck -->
<rect x="44" y="79" width="12" height="5" rx="2" fill="#9B5EC4" stroke="#C084FC" stroke-width="0.4"/>
</svg>`,

// ─────────────────────────────────────────────────────────────────
// 4. COO — The Operator
// Perfect circle head, military-green, 4 scanning eyes in 2x2 grid, mandibles
// ─────────────────────────────────────────────────────────────────
"COO": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="coo-bg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#0A1400"/><stop offset="100%" stop-color="#000000"/></radialGradient>
  <radialGradient id="coo-skin" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#3D6428"/><stop offset="100%" stop-color="#2D4A1E"/></radialGradient>
  <radialGradient id="coo-eye" cx="30%" cy="30%" r="60%"><stop offset="0%" stop-color="#FFAA44"/><stop offset="100%" stop-color="#CC5500"/></radialGradient>
  <filter id="coo-glow"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#coo-bg)"/>
<!-- Perfect circle head -->
<circle cx="50" cy="47" r="30" fill="url(#coo-skin)" stroke="#3D6428" stroke-width="0.7"/>
<!-- 2x2 grid of 4 scanning eyes (orange) -->
<ellipse cx="38" cy="38" rx="5.5" ry="4" fill="url(#coo-eye)" filter="url(#coo-glow)"/>
<ellipse cx="38" cy="38" rx="1.5" ry="3.5" fill="#1A0A00"/>
<ellipse cx="62" cy="38" rx="5.5" ry="4" fill="url(#coo-eye)" filter="url(#coo-glow)"/>
<ellipse cx="62" cy="38" rx="1.5" ry="3.5" fill="#1A0A00"/>
<ellipse cx="38" cy="48" rx="5.5" ry="4" fill="url(#coo-eye)" filter="url(#coo-glow)"/>
<ellipse cx="38" cy="48" rx="1.5" ry="3.5" fill="#1A0A00"/>
<ellipse cx="62" cy="48" rx="5.5" ry="4" fill="url(#coo-eye)" filter="url(#coo-glow)"/>
<ellipse cx="62" cy="48" rx="1.5" ry="3.5" fill="#1A0A00"/>
<!-- Straight horizontal mouth -->
<line x1="40" y1="60" x2="60" y2="60" stroke="#1A2E0A" stroke-width="1.5"/>
<!-- Mandible extensions from jaw -->
<path d="M35,63 L28,68 L32,72 L38,66" fill="#2D4A1E" stroke="#3D6428" stroke-width="0.5"/>
<path d="M65,63 L72,68 L68,72 L62,66" fill="#2D4A1E" stroke="#3D6428" stroke-width="0.5"/>
<!-- Tactical crosshair on forehead -->
<circle cx="50" cy="26" r="4" fill="none" stroke="#FF8C00" stroke-width="0.6" opacity="0.8"/>
<line x1="50" y1="20" x2="50" y2="23" stroke="#FF8C00" stroke-width="0.6" opacity="0.8"/>
<line x1="50" y1="29" x2="50" y2="32" stroke="#FF8C00" stroke-width="0.6" opacity="0.8"/>
<line x1="44" y1="26" x2="47" y2="26" stroke="#FF8C00" stroke-width="0.6" opacity="0.8"/>
<line x1="53" y1="26" x2="56" y2="26" stroke="#FF8C00" stroke-width="0.6" opacity="0.8"/>
<!-- Ridge marks on skull -->
<path d="M30,25 Q50,18 70,25" stroke="#1E3A14" stroke-width="1" fill="none" opacity="0.7"/>
<path d="M34,22 Q50,16 66,22" stroke="#1E3A14" stroke-width="0.6" fill="none" opacity="0.4"/>
<!-- Neck -->
<rect x="44" y="75" width="12" height="5" rx="2" fill="#2D4A1E" stroke="#3D6428" stroke-width="0.5"/>
</svg>`,

// ─────────────────────────────────────────────────────────────────
// 5. CFO — The Comptroller
// Angular pentagon, silver-grey, rectangular eyes with data lines, monocle
// ─────────────────────────────────────────────────────────────────
"CFO": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="cfo-bg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#0F1419"/><stop offset="100%" stop-color="#000000"/></radialGradient>
  <linearGradient id="cfo-skin" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#AAB8C8"/><stop offset="100%" stop-color="#8898AA"/></linearGradient>
  <radialGradient id="cfo-eye" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#C8D8E8"/><stop offset="100%" stop-color="#7090AA"/></radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#cfo-bg)"/>
<!-- Pentagon head shape -->
<polygon points="50,12 74,28 70,68 30,68 26,28" fill="url(#cfo-skin)" stroke="#99AABB" stroke-width="0.6"/>
<!-- Math grid overlay on skin (very faint) -->
<line x1="30" y1="30" x2="70" y2="30" stroke="#667788" stroke-width="0.3" opacity="0.3"/>
<line x1="30" y1="40" x2="70" y2="40" stroke="#667788" stroke-width="0.3" opacity="0.3"/>
<line x1="30" y1="50" x2="70" y2="50" stroke="#667788" stroke-width="0.3" opacity="0.3"/>
<line x1="30" y1="60" x2="70" y2="60" stroke="#667788" stroke-width="0.3" opacity="0.3"/>
<line x1="36" y1="20" x2="36" y2="68" stroke="#667788" stroke-width="0.3" opacity="0.3"/>
<line x1="44" y1="15" x2="44" y2="68" stroke="#667788" stroke-width="0.3" opacity="0.3"/>
<line x1="52" y1="13" x2="52" y2="68" stroke="#667788" stroke-width="0.3" opacity="0.3"/>
<line x1="60" y1="15" x2="60" y2="68" stroke="#667788" stroke-width="0.3" opacity="0.3"/>
<!-- Left rectangular eye with data lines inside -->
<rect x="28" y="33" width="14" height="9" rx="1.5" fill="url(#cfo-eye)"/>
<line x1="28" y1="35.5" x2="42" y2="35.5" stroke="#445566" stroke-width="0.5"/>
<line x1="28" y1="38" x2="42" y2="38" stroke="#445566" stroke-width="0.5"/>
<line x1="28" y1="40.5" x2="42" y2="40.5" stroke="#445566" stroke-width="0.5"/>
<!-- Right rectangular eye with data lines -->
<rect x="58" y="33" width="14" height="9" rx="1.5" fill="url(#cfo-eye)"/>
<line x1="58" y1="35.5" x2="72" y2="35.5" stroke="#445566" stroke-width="0.5"/>
<line x1="58" y1="38" x2="72" y2="38" stroke="#445566" stroke-width="0.5"/>
<line x1="58" y1="40.5" x2="72" y2="40.5" stroke="#445566" stroke-width="0.5"/>
<!-- Monocle ring around right eye -->
<rect x="56.5" y="31.5" width="17" height="12" rx="2.5" fill="none" stroke="#BBCCDD" stroke-width="1.2"/>
<line x1="73.5" y1="37.5" x2="76" y2="40" stroke="#BBCCDD" stroke-width="0.9"/>
<!-- Compressed thin mouth -->
<line x1="39" y1="57" x2="61" y2="57" stroke="#556677" stroke-width="1.2"/>
<line x1="41" y1="59" x2="59" y2="59" stroke="#445566" stroke-width="0.5" opacity="0.5"/>
<!-- Neck -->
<rect x="44" y="67" width="12" height="6" rx="2" fill="#8898AA" stroke="#99AABB" stroke-width="0.5"/>
</svg>`,

// ─────────────────────────────────────────────────────────────────
// 6. CMO — The Broadcaster
// Wide triangular-bottom face, vibrant coral-orange, huge charismatic smile
// ─────────────────────────────────────────────────────────────────
"CMO": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="cmo-bg" cx="50%" cy="40%" r="65%"><stop offset="0%" stop-color="#2D1400"/><stop offset="100%" stop-color="#000000"/></radialGradient>
  <radialGradient id="cmo-skin" cx="50%" cy="35%" r="55%"><stop offset="0%" stop-color="#FF8C55"/><stop offset="100%" stop-color="#E05020"/></radialGradient>
  <radialGradient id="cmo-eye" cx="30%" cy="30%" r="60%"><stop offset="0%" stop-color="#FF44CC"/><stop offset="100%" stop-color="#AA0077"/></radialGradient>
  <filter id="cmo-glow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="cmo-glow-sm"><feGaussianBlur stdDeviation="0.7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#cmo-bg)"/>
<!-- Wide triangular-bottom face -->
<path d="M22,20 Q50,12 78,20 L72,65 Q50,78 28,65 Z" fill="url(#cmo-skin)" stroke="#CC4400" stroke-width="0.5"/>
<!-- Spiral spring antennae -->
<path d="M36,22 C34,16 38,14 36,10 C34,7 38,5 36,2" stroke="#FF6B35" stroke-width="1.2" fill="none"/>
<circle cx="36" cy="2" r="1.5" fill="#FF6B35" filter="url(#cmo-glow-sm)"/>
<path d="M64,22 C66,16 62,14 64,10 C66,7 62,5 64,2" stroke="#FF6B35" stroke-width="1.2" fill="none"/>
<circle cx="64" cy="2" r="1.5" fill="#FF6B35" filter="url(#cmo-glow-sm)"/>
<!-- Left large round eye -->
<circle cx="36" cy="40" r="9" fill="url(#cmo-eye)" filter="url(#cmo-glow)"/>
<!-- Spotlight pupil in left eye -->
<circle cx="36" cy="40" r="4" fill="#220011"/>
<circle cx="34" cy="38" r="1.5" fill="#FFAAEE" opacity="0.9"/>
<!-- Starburst from left eye -->
<line x1="36" y1="30" x2="36" y2="33" stroke="#FF44CC" stroke-width="0.6" opacity="0.7"/>
<line x1="27" y1="38" x2="30" y2="39" stroke="#FF44CC" stroke-width="0.6" opacity="0.7"/>
<line x1="44" y1="42" x2="47" y2="43" stroke="#FF44CC" stroke-width="0.6" opacity="0.7"/>
<line x1="29" y1="33" x2="31" y2="35" stroke="#FF44CC" stroke-width="0.6" opacity="0.7"/>
<line x1="43" y1="33" x2="41" y2="35" stroke="#FF44CC" stroke-width="0.6" opacity="0.7"/>
<!-- Right large round eye -->
<circle cx="64" cy="40" r="9" fill="url(#cmo-eye)" filter="url(#cmo-glow)"/>
<circle cx="64" cy="40" r="4" fill="#220011"/>
<circle cx="62" cy="38" r="1.5" fill="#FFAAEE" opacity="0.9"/>
<line x1="64" y1="30" x2="64" y2="33" stroke="#FF44CC" stroke-width="0.6" opacity="0.7"/>
<line x1="55" y1="38" x2="58" y2="39" stroke="#FF44CC" stroke-width="0.6" opacity="0.7"/>
<line x1="72" y1="42" x2="69" y2="43" stroke="#FF44CC" stroke-width="0.6" opacity="0.7"/>
<line x1="57" y1="33" x2="59" y2="35" stroke="#FF44CC" stroke-width="0.6" opacity="0.7"/>
<line x1="71" y1="33" x2="69" y2="35" stroke="#FF44CC" stroke-width="0.6" opacity="0.7"/>
<!-- Huge charismatic smile -->
<path d="M33,58 Q50,72 67,58" fill="#CC3300" stroke="#AA2200" stroke-width="0.5"/>
<path d="M36,58 Q50,65 64,58" fill="#FFCCBB"/>
<!-- Neat teeth rows -->
<rect x="38" y="58" width="4" height="3" rx="0.5" fill="white"/>
<rect x="43" y="58" width="4" height="3" rx="0.5" fill="white"/>
<rect x="48" y="59" width="4" height="3" rx="0.5" fill="white"/>
<rect x="53" y="58" width="4" height="3" rx="0.5" fill="white"/>
<rect x="58" y="58" width="4" height="3" rx="0.5" fill="white"/>
</svg>`,

// ─────────────────────────────────────────────────────────────────
// 7. CRO — The Closer
// Elongated oval, deep amber, diamond eyes, fin ears, slash markings
// ─────────────────────────────────────────────────────────────────
"CRO": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="cro-bg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#1A1400"/><stop offset="100%" stop-color="#000000"/></radialGradient>
  <radialGradient id="cro-skin" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#D4A030"/><stop offset="100%" stop-color="#8B6010"/></radialGradient>
  <radialGradient id="cro-eye" cx="30%" cy="30%" r="60%"><stop offset="0%" stop-color="#66FF88"/><stop offset="100%" stop-color="#009922"/></radialGradient>
  <filter id="cro-glow"><feGaussianBlur stdDeviation="1.3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#cro-bg)"/>
<!-- Elongated oval head -->
<ellipse cx="50" cy="48" rx="26" ry="35" fill="url(#cro-skin)" stroke="#A07820" stroke-width="0.6"/>
<!-- Fin-like ear extensions -->
<path d="M24,38 L16,28 L18,42 L24,44" fill="#8B6010" stroke="#A07820" stroke-width="0.5"/>
<path d="M76,38 L84,28 L82,42 L76,44" fill="#8B6010" stroke="#A07820" stroke-width="0.5"/>
<!-- Left diamond eye -->
<polygon points="34,35 40,40 34,45 28,40" fill="url(#cro-eye)" filter="url(#cro-glow)"/>
<polygon points="34,37 38,40 34,43 30,40" fill="#004410"/>
<circle cx="33" cy="39" r="0.8" fill="#AAFFCC" opacity="0.9"/>
<!-- Right diamond eye -->
<polygon points="66,35 72,40 66,45 60,40" fill="url(#cro-eye)" filter="url(#cro-glow)"/>
<polygon points="66,37 70,40 66,43 62,40" fill="#004410"/>
<circle cx="65" cy="39" r="0.8" fill="#AAFFCC" opacity="0.9"/>
<!-- Wide predatory grin -->
<path d="M35,60 Q50,70 65,60" fill="#6B4010" stroke="#8B5010" stroke-width="0.5"/>
<path d="M37,61 Q50,67 63,61" fill="#FFDDAA"/>
<!-- Sharp canine teeth -->
<polygon points="40,61 43,61 41.5,65" fill="white"/>
<rect x="44" y="61" width="4" height="3.5" rx="0.3" fill="white"/>
<rect x="49" y="61" width="3" height="3.5" rx="0.3" fill="white"/>
<rect x="53" y="61" width="4" height="3.5" rx="0.3" fill="white"/>
<polygon points="57,61 60,61 58.5,65" fill="white"/>
<!-- Diagonal slash war paint markings -->
<line x1="28" y1="30" x2="38" y2="36" stroke="#6B4010" stroke-width="1.5" opacity="0.7"/>
<line x1="30" y1="34" x2="38" y2="39" stroke="#5A3008" stroke-width="0.8" opacity="0.5"/>
<line x1="62" y1="30" x2="72" y2="36" stroke="#6B4010" stroke-width="1.5" opacity="0.7"/>
<line x1="62" y1="34" x2="70" y2="39" stroke="#5A3008" stroke-width="0.8" opacity="0.5"/>
<!-- Forehead marking -->
<line x1="44" y1="18" x2="56" y2="24" stroke="#6B4010" stroke-width="1.2" opacity="0.6"/>
</svg>`,

// ─────────────────────────────────────────────────────────────────
// 8. CHRO — The Empath
// Soft rounded oval, warm peach-pink, gentle amber eyes, drooping antennae
// ─────────────────────────────────────────────────────────────────
"CHRO": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="chro-bg" cx="50%" cy="40%" r="65%"><stop offset="0%" stop-color="#1A0E0A"/><stop offset="100%" stop-color="#000000"/></radialGradient>
  <radialGradient id="chro-skin" cx="50%" cy="35%" r="55%"><stop offset="0%" stop-color="#F0B890"/><stop offset="100%" stop-color="#D08060"/></radialGradient>
  <radialGradient id="chro-eye" cx="35%" cy="30%" r="60%"><stop offset="0%" stop-color="#FFCC66"/><stop offset="100%" stop-color="#CC8800"/></radialGradient>
  <filter id="chro-soft"><feGaussianBlur stdDeviation="0.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#chro-bg)"/>
<!-- Soft rounded oval head -->
<ellipse cx="50" cy="50" rx="28" ry="32" fill="url(#chro-skin)" stroke="#C07050" stroke-width="0.5"/>
<!-- Gently drooping antennae -->
<path d="M38,22 C36,15 30,12 28,6" stroke="#C07050" stroke-width="1.2" fill="none"/>
<circle cx="28" cy="6" r="1.8" fill="#E8A87C" filter="url(#chro-soft)"/>
<path d="M62,22 C64,15 70,12 72,6" stroke="#C07050" stroke-width="1.2" fill="none"/>
<circle cx="72" cy="6" r="1.8" fill="#E8A87C" filter="url(#chro-soft)"/>
<!-- Left large gentle eye -->
<circle cx="37" cy="43" r="9" fill="url(#chro-eye)"/>
<circle cx="37" cy="43" r="5" fill="#3A2000"/>
<circle cx="35" cy="41" r="1.8" fill="#FFE8AA" opacity="0.9"/>
<!-- Right large gentle eye -->
<circle cx="63" cy="43" r="9" fill="url(#chro-eye)"/>
<circle cx="63" cy="43" r="5" fill="#3A2000"/>
<circle cx="61" cy="41" r="1.8" fill="#FFE8AA" opacity="0.9"/>
<!-- Kind smile, slightly open -->
<path d="M38,62 Q50,70 62,62" stroke="#A06040" stroke-width="1.2" fill="none"/>
<path d="M40,63.5 Q50,68 60,63.5" fill="#FFCCAA" stroke="none"/>
<line x1="43" y1="64" x2="57" y2="64" stroke="#CC8860" stroke-width="0.4" opacity="0.5"/>
<!-- Soft feather-like markings on cheeks -->
<path d="M25,45 C27,42 26,48 28,45" stroke="#C07050" stroke-width="0.8" fill="none" opacity="0.6"/>
<path d="M24,49 C26,46 25,52 27,49" stroke="#C07050" stroke-width="0.8" fill="none" opacity="0.5"/>
<path d="M75,45 C73,42 74,48 72,45" stroke="#C07050" stroke-width="0.8" fill="none" opacity="0.6"/>
<path d="M76,49 C74,46 75,52 73,49" stroke="#C07050" stroke-width="0.8" fill="none" opacity="0.5"/>
<!-- Nose (gentle) -->
<path d="M47,53 Q50,56 53,53" stroke="#C07050" stroke-width="0.7" fill="none"/>
</svg>`,

// ─────────────────────────────────────────────────────────────────
// 9. CISO — The Sentinel
// Angular armored head, charcoal, single large cyclops eye (red hex iris)
// ─────────────────────────────────────────────────────────────────
"CISO": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="ciso-bg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#100000"/><stop offset="100%" stop-color="#000000"/></radialGradient>
  <radialGradient id="ciso-skin" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#2A2A2A"/><stop offset="100%" stop-color="#1A1A1A"/></radialGradient>
  <radialGradient id="ciso-eye" cx="40%" cy="35%" r="55%"><stop offset="0%" stop-color="#FF4444"/><stop offset="100%" stop-color="#880000"/></radialGradient>
  <filter id="ciso-glow"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="ciso-glow-sm"><feGaussianBlur stdDeviation="1" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#ciso-bg)"/>
<!-- Angular armored head -->
<polygon points="50,10 75,25 78,60 65,75 35,75 22,60 25,25" fill="url(#ciso-skin)" stroke="#333333" stroke-width="0.7"/>
<!-- Honeycomb armor pattern on skin -->
<path d="M40,20 L45,17 L50,20 L50,26 L45,29 L40,26 Z" fill="none" stroke="#3A3A3A" stroke-width="0.5" opacity="0.8"/>
<path d="M50,20 L55,17 L60,20 L60,26 L55,29 L50,26 Z" fill="none" stroke="#3A3A3A" stroke-width="0.5" opacity="0.8"/>
<path d="M30,32 L35,29 L40,32 L40,38 L35,41 L30,38 Z" fill="none" stroke="#3A3A3A" stroke-width="0.5" opacity="0.8"/>
<path d="M60,32 L65,29 L70,32 L70,38 L65,41 L60,38 Z" fill="none" stroke="#3A3A3A" stroke-width="0.5" opacity="0.8"/>
<path d="M28,55 L33,52 L38,55 L38,61 L33,64 L28,61 Z" fill="none" stroke="#3A3A3A" stroke-width="0.5" opacity="0.6"/>
<path d="M62,55 L67,52 L72,55 L72,61 L67,64 L62,61 Z" fill="none" stroke="#3A3A3A" stroke-width="0.5" opacity="0.6"/>
<!-- Scar marks instead of antennae -->
<line x1="38" y1="18" x2="44" y2="28" stroke="#444" stroke-width="1.5" opacity="0.7"/>
<line x1="56" y1="18" x2="62" y2="28" stroke="#444" stroke-width="1.5" opacity="0.7"/>
<!-- Single large cyclops eye in center -->
<circle cx="50" cy="38" r="13" fill="url(#ciso-eye)" filter="url(#ciso-glow)"/>
<!-- Hexagonal facets in iris -->
<path d="M50,28 L56,31 L59,37 L56,43 L50,46 L44,43 L41,37 L44,31 Z" fill="none" stroke="#FF0040" stroke-width="0.6" opacity="0.8"/>
<path d="M50,31 L54,33 L56,37 L54,41 L50,43 L46,41 L44,37 L46,33 Z" fill="#660000" opacity="0.7"/>
<circle cx="50" cy="37" r="4" fill="#CC0020"/>
<circle cx="47" cy="35" r="1.5" fill="#FF8888" opacity="0.8"/>
<!-- Armored plate covering lower face -->
<rect x="28" y="57" width="44" height="18" rx="3" fill="#222222" stroke="#333333" stroke-width="0.7"/>
<line x1="28" y1="63" x2="72" y2="63" stroke="#333333" stroke-width="0.5"/>
<line x1="28" y1="68" x2="72" y2="68" stroke="#333333" stroke-width="0.5"/>
<rect x="35" y="60" width="8" height="3" rx="0.5" fill="#1A1A1A"/>
<rect x="45" y="60" width="10" height="3" rx="0.5" fill="#1A1A1A"/>
<rect x="57" y="60" width="8" height="3" rx="0.5" fill="#1A1A1A"/>
</svg>`,

// ─────────────────────────────────────────────────────────────────
// 10. CLO — The Arbiter
// Perfect oval, pale blue-white, scales/balance motif iris, rigid antennae
// ─────────────────────────────────────────────────────────────────
"CLO": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="clo-bg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#0A0F19"/><stop offset="100%" stop-color="#000000"/></radialGradient>
  <radialGradient id="clo-skin" cx="50%" cy="35%" r="55%"><stop offset="0%" stop-color="#D0DCEE"/><stop offset="100%" stop-color="#A0B4CC"/></radialGradient>
  <radialGradient id="clo-eye" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#99CCEE"/><stop offset="100%" stop-color="#4466AA"/></radialGradient>
</defs>
<rect width="100" height="100" rx="18" fill="url(#clo-bg)"/>
<!-- Perfect oval head -->
<ellipse cx="50" cy="48" rx="27" ry="33" fill="url(#clo-skin)" stroke="#B0C4DE" stroke-width="0.5"/>
<!-- Bilateral symmetry mark: vertical line down center of face -->
<line x1="50" y1="18" x2="50" y2="76" stroke="#8899AA" stroke-width="0.6" opacity="0.5"/>
<!-- 2 rigid antennae pointing straight up -->
<line x1="42" y1="18" x2="42" y2="4" stroke="#99AABB" stroke-width="1.2"/>
<circle cx="42" cy="3" r="1.8" fill="#B0C4DE"/>
<line x1="58" y1="18" x2="58" y2="4" stroke="#99AABB" stroke-width="1.2"/>
<circle cx="58" cy="3" r="1.8" fill="#B0C4DE"/>
<!-- Left eye with scales/balance motif in iris -->
<circle cx="36" cy="40" r="8.5" fill="url(#clo-eye)"/>
<!-- Balance scale lines inside left eye -->
<line x1="36" y1="33" x2="36" y2="47" stroke="#334455" stroke-width="0.6" opacity="0.7"/>
<line x1="29" y1="38" x2="43" y2="38" stroke="#334455" stroke-width="0.6" opacity="0.7"/>
<circle cx="30" cy="38" r="2" fill="none" stroke="#334455" stroke-width="0.5"/>
<circle cx="42" cy="38" r="2" fill="none" stroke="#334455" stroke-width="0.5"/>
<circle cx="36" cy="40" r="3" fill="#1A2A44"/>
<circle cx="34.5" cy="38.5" r="1" fill="#AACCEE" opacity="0.9"/>
<!-- Right eye -->
<circle cx="64" cy="40" r="8.5" fill="url(#clo-eye)"/>
<line x1="64" y1="33" x2="64" y2="47" stroke="#334455" stroke-width="0.6" opacity="0.7"/>
<line x1="57" y1="38" x2="71" y2="38" stroke="#334455" stroke-width="0.6" opacity="0.7"/>
<circle cx="58" cy="38" r="2" fill="none" stroke="#334455" stroke-width="0.5"/>
<circle cx="70" cy="38" r="2" fill="none" stroke="#334455" stroke-width="0.5"/>
<circle cx="64" cy="40" r="3" fill="#1A2A44"/>
<circle cx="62.5" cy="38.5" r="1" fill="#AACCEE" opacity="0.9"/>
<!-- Stern pursed slightly downturned mouth -->
<path d="M38,60 Q50,62 62,60" stroke="#7A8DA0" stroke-width="1.3" fill="none"/>
<path d="M40,62 Q50,60 60,62" stroke="#6A7D90" stroke-width="0.6" fill="none" opacity="0.5"/>
</svg>`,

// ─────────────────────────────────────────────────────────────────
// 11. CAIO — The Oracle
// Elongated tall oval, iridescent skin, 3 vertical eyes, neural halo, 6 antennae
// ─────────────────────────────────────────────────────────────────
"CAIO": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <linearGradient id="caio-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#050A1E"/><stop offset="100%" stop-color="#000000"/></linearGradient>
  <linearGradient id="caio-skin" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#5AA0E0"/><stop offset="50%" stop-color="#9B59B6"/><stop offset="100%" stop-color="#4A90D9"/></linearGradient>
  <radialGradient id="caio-eye" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="60%" stop-color="#88CCFF"/><stop offset="100%" stop-color="#2244AA"/></radialGradient>
  <filter id="caio-glow"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="caio-glow-sm"><feGaussianBlur stdDeviation="0.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#caio-bg)"/>
<!-- Neural halo ring above head -->
<ellipse cx="50" cy="10" rx="16" ry="4" fill="none" stroke="#88CCFF" stroke-width="1" opacity="0.8" filter="url(#caio-glow-sm)"/>
<circle cx="34" cy="10" r="1.2" fill="#AADDFF" filter="url(#caio-glow-sm)"/>
<circle cx="42" cy="7" r="1" fill="#AADDFF" filter="url(#caio-glow-sm)"/>
<circle cx="50" cy="6" r="1.2" fill="#FFFFFF" filter="url(#caio-glow-sm)"/>
<circle cx="58" cy="7" r="1" fill="#AADDFF" filter="url(#caio-glow-sm)"/>
<circle cx="66" cy="10" r="1.2" fill="#AADDFF" filter="url(#caio-glow-sm)"/>
<!-- 6 thin antennae like insect, each glowing -->
<line x1="38" y1="20" x2="30" y2="8" stroke="#7799CC" stroke-width="0.7"/>
<circle cx="30" cy="8" r="1" fill="#88CCFF" filter="url(#caio-glow-sm)"/>
<line x1="43" y1="18" x2="38" y2="6" stroke="#7799CC" stroke-width="0.7"/>
<circle cx="38" cy="6" r="1" fill="#88CCFF" filter="url(#caio-glow-sm)"/>
<line x1="48" y1="17" x2="46" y2="5" stroke="#7799CC" stroke-width="0.7"/>
<circle cx="46" cy="5" r="1" fill="#88CCFF" filter="url(#caio-glow-sm)"/>
<line x1="52" y1="17" x2="54" y2="5" stroke="#7799CC" stroke-width="0.7"/>
<circle cx="54" cy="5" r="1" fill="#88CCFF" filter="url(#caio-glow-sm)"/>
<line x1="57" y1="18" x2="62" y2="6" stroke="#7799CC" stroke-width="0.7"/>
<circle cx="62" cy="6" r="1" fill="#88CCFF" filter="url(#caio-glow-sm)"/>
<line x1="62" y1="20" x2="70" y2="8" stroke="#7799CC" stroke-width="0.7"/>
<circle cx="70" cy="8" r="1" fill="#88CCFF" filter="url(#caio-glow-sm)"/>
<!-- Elongated tall oval head -->
<ellipse cx="50" cy="52" rx="22" ry="36" fill="url(#caio-skin)" stroke="#5577AA" stroke-width="0.5"/>
<!-- 3 eyes in vertical column (center largest) -->
<ellipse cx="50" cy="35" rx="5" ry="4" fill="url(#caio-eye)" filter="url(#caio-glow)"/>
<ellipse cx="50" cy="35" rx="2" ry="2" fill="#001133"/>
<circle cx="49" cy="34" r="0.8" fill="white" opacity="0.9"/>
<!-- Center eye (largest) -->
<ellipse cx="50" cy="47" rx="7" ry="6" fill="url(#caio-eye)" filter="url(#caio-glow)"/>
<ellipse cx="50" cy="47" rx="3" ry="3" fill="#001133"/>
<circle cx="48.5" cy="45.5" r="1" fill="white" opacity="0.9"/>
<!-- Bottom eye -->
<ellipse cx="50" cy="60" rx="5" ry="4" fill="url(#caio-eye)" filter="url(#caio-glow)"/>
<ellipse cx="50" cy="60" rx="2" ry="2" fill="#001133"/>
<circle cx="49" cy="59" r="0.8" fill="white" opacity="0.9"/>
<!-- Neural transmission glyph where mouth is -->
<path d="M40,72 L45,69 L50,72 L55,69 L60,72" stroke="#88CCFF" stroke-width="0.8" fill="none" opacity="0.7"/>
<circle cx="50" cy="72" r="1" fill="#88CCFF" filter="url(#caio-glow-sm)"/>
</svg>`,

// ─────────────────────────────────────────────────────────────────
// 12. CSA — The Omniscient
// Large sphere head, 6 ring eyes, 4-part mandibles, floating geometry
// ─────────────────────────────────────────────────────────────────
"CSA": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="csa-bg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#0A0A2E"/><stop offset="100%" stop-color="#000000"/></radialGradient>
  <radialGradient id="csa-skin" cx="50%" cy="35%" r="60%"><stop offset="0%" stop-color="#0D0D20"/><stop offset="100%" stop-color="#050510"/></radialGradient>
  <filter id="csa-glow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="csa-glow-sm"><feGaussianBlur stdDeviation="0.7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#csa-bg)"/>
<!-- Floating geometric shapes orbiting head -->
<polygon points="14,18 18,12 22,18" fill="none" stroke="#FF4444" stroke-width="0.8" opacity="0.8"/>
<circle cx="82" cy="22" r="3.5" fill="none" stroke="#4444FF" stroke-width="0.8" opacity="0.8"/>
<polygon points="85,55 89,49 93,55" fill="none" stroke="#44FF44" stroke-width="0.8" opacity="0.8"/>
<rect x="6" y="55" width="6" height="6" rx="0.5" fill="none" stroke="#FFFF44" stroke-width="0.8" opacity="0.8"/>
<circle cx="20" cy="80" r="2.5" fill="none" stroke="#FF44FF" stroke-width="0.8" opacity="0.7"/>
<polygon points="78,80 82,74 86,80" fill="none" stroke="#44FFFF" stroke-width="0.8" opacity="0.8"/>
<!-- Large sphere head with flat bottom -->
<ellipse cx="50" cy="48" rx="30" ry="36" fill="url(#csa-skin)" stroke="#1A1A3E" stroke-width="0.6"/>
<!-- Galaxy spiral pattern across face -->
<path d="M50,48 C45,42 38,40 36,44 C34,48 37,54 42,55 C47,56 54,52 56,46 C58,40 54,34 48,33 C42,32 36,36 34,43" stroke="#3333AA" stroke-width="0.5" fill="none" opacity="0.5"/>
<path d="M50,48 C55,42 62,40 64,44 C66,48 63,54 58,55" stroke="#3333AA" stroke-width="0.4" fill="none" opacity="0.3"/>
<!-- Ring of 6 eyes around center, each different color -->
<circle cx="50" cy="30" r="4.5" fill="#CC0000" filter="url(#csa-glow)"/><circle cx="50" cy="30" r="2" fill="#660000"/>
<circle cx="64" cy="38" r="4.5" fill="#0044CC" filter="url(#csa-glow)"/><circle cx="64" cy="38" r="2" fill="#001166"/>
<circle cx="64" cy="54" r="4.5" fill="#00AA00" filter="url(#csa-glow)"/><circle cx="64" cy="54" r="2" fill="#004400"/>
<circle cx="50" cy="62" r="4.5" fill="#AAAA00" filter="url(#csa-glow)"/><circle cx="50" cy="62" r="2" fill="#555500"/>
<circle cx="36" cy="54" r="4.5" fill="#00AAAA" filter="url(#csa-glow)"/><circle cx="36" cy="54" r="2" fill="#004444"/>
<circle cx="36" cy="38" r="4.5" fill="#AA00AA" filter="url(#csa-glow)"/><circle cx="36" cy="38" r="2" fill="#440044"/>
<!-- 4-part mandible structure -->
<path d="M38,72 L32,80 L38,84" fill="none" stroke="#2A2A5A" stroke-width="1.5"/>
<path d="M44,74 L40,82 L46,84" fill="none" stroke="#2A2A5A" stroke-width="1.5"/>
<path d="M56,74 L60,82 L54,84" fill="none" stroke="#2A2A5A" stroke-width="1.5"/>
<path d="M62,72 L68,80 L62,84" fill="none" stroke="#2A2A5A" stroke-width="1.5"/>
</svg>`,

// ─────────────────────────────────────────────────────────────────
// 13. SVP-ENG — The Commander
// Wide angular face, dark navy, 3 neon cyan eyes, circuit mouth, square antennae
// ─────────────────────────────────────────────────────────────────
"SVP-ENG": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="svpe-bg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#060E1A"/><stop offset="100%" stop-color="#000000"/></radialGradient>
  <radialGradient id="svpe-skin" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#12264A"/><stop offset="100%" stop-color="#0A1628"/></radialGradient>
  <radialGradient id="svpe-eye" cx="35%" cy="30%" r="60%"><stop offset="0%" stop-color="#44FFFF"/><stop offset="100%" stop-color="#008899"/></radialGradient>
  <filter id="svpe-glow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="svpe-glow-sm"><feGaussianBlur stdDeviation="0.7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#svpe-bg)"/>
<!-- Wide angular face -->
<polygon points="20,18 80,18 76,72 24,72" fill="url(#svpe-skin)" stroke="#1A3A60" stroke-width="0.6"/>
<!-- 2 square-tip antennae -->
<line x1="38" y1="18" x2="36" y2="6" stroke="#00CCDD" stroke-width="1.1"/>
<rect x="33" y="3.5" width="6" height="4" rx="0.5" fill="#00CCDD" filter="url(#svpe-glow-sm)"/>
<line x1="62" y1="18" x2="64" y2="6" stroke="#00CCDD" stroke-width="1.1"/>
<rect x="61" y="3.5" width="6" height="4" rx="0.5" fill="#00CCDD" filter="url(#svpe-glow-sm)"/>
<!-- Left eye (cyan) -->
<ellipse cx="35" cy="36" rx="7" ry="5.5" fill="url(#svpe-eye)" filter="url(#svpe-glow)"/>
<ellipse cx="35" cy="36" rx="3" ry="3" fill="#001A22"/>
<circle cx="33.5" cy="34.5" r="1" fill="#AAFFFF" opacity="0.9"/>
<!-- Right eye (cyan) -->
<ellipse cx="65" cy="36" rx="7" ry="5.5" fill="url(#svpe-eye)" filter="url(#svpe-glow)"/>
<ellipse cx="65" cy="36" rx="3" ry="3" fill="#001A22"/>
<circle cx="63.5" cy="34.5" r="1" fill="#AAFFFF" opacity="0.9"/>
<!-- Third-eye forehead -->
<ellipse cx="50" cy="24" rx="5" ry="4" fill="url(#svpe-eye)" filter="url(#svpe-glow)"/>
<ellipse cx="50" cy="24" rx="2" ry="2" fill="#001A22"/>
<circle cx="49" cy="23" r="0.7" fill="#AAFFFF" opacity="0.9"/>
<!-- Technical grid / circuit pattern mouth -->
<rect x="35" y="53" width="30" height="8" rx="1" fill="#0A1E3A" stroke="#00CCDD" stroke-width="0.5"/>
<line x1="40" y1="53" x2="40" y2="61" stroke="#00CCDD" stroke-width="0.4" opacity="0.6"/>
<line x1="47" y1="53" x2="47" y2="61" stroke="#00CCDD" stroke-width="0.4" opacity="0.6"/>
<line x1="53" y1="53" x2="53" y2="61" stroke="#00CCDD" stroke-width="0.4" opacity="0.6"/>
<line x1="60" y1="53" x2="60" y2="61" stroke="#00CCDD" stroke-width="0.4" opacity="0.6"/>
<line x1="35" y1="57" x2="65" y2="57" stroke="#00CCDD" stroke-width="0.4" opacity="0.6"/>
<!-- Neck -->
<rect x="44" y="72" width="12" height="5" rx="2" fill="#0A1628" stroke="#1A3A60" stroke-width="0.5"/>
</svg>`,

// ─────────────────────────────────────────────────────────────────
// 14. VP-ENG — The Builder
// Square jaw, industrial grey-blue, rectangular scanning eyes, gear cog forehead
// ─────────────────────────────────────────────────────────────────
"VP-ENG": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="vpe-bg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#0D1117"/><stop offset="100%" stop-color="#000000"/></radialGradient>
  <radialGradient id="vpe-skin" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#3A4E64"/><stop offset="100%" stop-color="#2C3E50"/></radialGradient>
  <radialGradient id="vpe-eye" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#7ABACC"/><stop offset="100%" stop-color="#2A5A70"/></radialGradient>
  <filter id="vpe-glow-sm"><feGaussianBlur stdDeviation="0.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#vpe-bg)"/>
<!-- Square jaw face -->
<rect x="22" y="16" width="56" height="60" rx="8" fill="url(#vpe-skin)" stroke="#3A5070" stroke-width="0.6"/>
<!-- Gear-cog outline on forehead -->
<circle cx="50" cy="28" r="6" fill="none" stroke="#5A8AAA" stroke-width="1"/>
<circle cx="50" cy="28" r="3.5" fill="none" stroke="#5A8AAA" stroke-width="0.7"/>
<!-- Gear teeth -->
<rect x="48.5" y="21" width="3" height="2" rx="0.3" fill="#5A8AAA"/>
<rect x="48.5" y="33" width="3" height="2" rx="0.3" fill="#5A8AAA"/>
<rect x="43" y="26.5" width="2" height="3" rx="0.3" fill="#5A8AAA"/>
<rect x="55" y="26.5" width="2" height="3" rx="0.3" fill="#5A8AAA"/>
<!-- 2 antennae with blinking square nodes -->
<line x1="38" y1="18" x2="36" y2="6" stroke="#5A8AAA" stroke-width="1"/>
<rect x="33.5" y="3.5" width="5" height="4" rx="0.3" fill="#7ABACC" filter="url(#vpe-glow-sm)"/>
<line x1="62" y1="18" x2="64" y2="6" stroke="#5A8AAA" stroke-width="1"/>
<rect x="61.5" y="3.5" width="5" height="4" rx="0.3" fill="#7ABACC" filter="url(#vpe-glow-sm)"/>
<!-- Left rectangular eye with scanning bars -->
<rect x="27" y="38" width="18" height="10" rx="1.5" fill="url(#vpe-eye)"/>
<line x1="27" y1="41" x2="45" y2="41" stroke="#1A3A4A" stroke-width="1.2"/>
<line x1="27" y1="44" x2="45" y2="44" stroke="#1A3A4A" stroke-width="0.6" opacity="0.5"/>
<!-- Right rectangular eye -->
<rect x="55" y="38" width="18" height="10" rx="1.5" fill="url(#vpe-eye)"/>
<line x1="55" y1="41" x2="73" y2="41" stroke="#1A3A4A" stroke-width="1.2"/>
<line x1="55" y1="44" x2="73" y2="44" stroke="#1A3A4A" stroke-width="0.6" opacity="0.5"/>
<!-- Neutral expression -->
<line x1="36" y1="60" x2="64" y2="60" stroke="#2A3E52" stroke-width="1.3"/>
<!-- Neck -->
<rect x="44" y="74" width="12" height="5" rx="2" fill="#2C3E50" stroke="#3A5070" stroke-width="0.5"/>
</svg>`,

// ─────────────────────────────────────────────────────────────────
// 15. VP-ARCH — The Blueprint
// Diamond/rhombus shaped face, teal, compass-rose iris, 3 antennae
// ─────────────────────────────────────────────────────────────────
"VP-ARCH": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="vpa-bg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#002020"/><stop offset="100%" stop-color="#000000"/></radialGradient>
  <radialGradient id="vpa-skin" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#20A0A0"/><stop offset="100%" stop-color="#007070"/></radialGradient>
  <radialGradient id="vpa-eye" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#AAFFEE"/><stop offset="100%" stop-color="#006655"/></radialGradient>
  <filter id="vpa-glow-sm"><feGaussianBlur stdDeviation="0.7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#vpa-bg)"/>
<!-- Rhombus/diamond shaped face -->
<polygon points="50,10 78,48 50,80 22,48" fill="url(#vpa-skin)" stroke="#009090" stroke-width="0.6"/>
<!-- Blueprint grid lines etched on skin -->
<line x1="30" y1="35" x2="70" y2="35" stroke="#005555" stroke-width="0.4" opacity="0.5"/>
<line x1="28" y1="45" x2="72" y2="45" stroke="#005555" stroke-width="0.4" opacity="0.5"/>
<line x1="30" y1="55" x2="70" y2="55" stroke="#005555" stroke-width="0.4" opacity="0.5"/>
<line x1="38" y1="20" x2="38" y2="72" stroke="#005555" stroke-width="0.4" opacity="0.4"/>
<line x1="50" y1="15" x2="50" y2="78" stroke="#005555" stroke-width="0.4" opacity="0.4"/>
<line x1="62" y1="20" x2="62" y2="72" stroke="#005555" stroke-width="0.4" opacity="0.4"/>
<!-- 3 antennae with circle nodes -->
<line x1="40" y1="20" x2="34" y2="6" stroke="#00AAAA" stroke-width="1"/>
<circle cx="34" cy="5.5" r="1.8" fill="#AAFFEE" filter="url(#vpa-glow-sm)"/>
<line x1="50" y1="12" x2="50" y2="2" stroke="#00AAAA" stroke-width="1"/>
<circle cx="50" cy="1.5" r="1.8" fill="#AAFFEE" filter="url(#vpa-glow-sm)"/>
<line x1="60" y1="20" x2="66" y2="6" stroke="#00AAAA" stroke-width="1"/>
<circle cx="66" cy="5.5" r="1.8" fill="#AAFFEE" filter="url(#vpa-glow-sm)"/>
<!-- Left eye with compass-rose iris -->
<circle cx="38" cy="43" r="8" fill="url(#vpa-eye)"/>
<line x1="38" y1="36" x2="38" y2="50" stroke="#003A2A" stroke-width="0.7"/>
<line x1="31" y1="43" x2="45" y2="43" stroke="#003A2A" stroke-width="0.7"/>
<line x1="32.7" y1="37.7" x2="43.3" y2="48.3" stroke="#003A2A" stroke-width="0.5" opacity="0.7"/>
<line x1="43.3" y1="37.7" x2="32.7" y2="48.3" stroke="#003A2A" stroke-width="0.5" opacity="0.7"/>
<circle cx="38" cy="43" r="3" fill="#003A2A"/>
<circle cx="36.5" cy="41.5" r="1" fill="#AAFFEE" opacity="0.9"/>
<!-- Right eye -->
<circle cx="62" cy="43" r="8" fill="url(#vpa-eye)"/>
<line x1="62" y1="36" x2="62" y2="50" stroke="#003A2A" stroke-width="0.7"/>
<line x1="55" y1="43" x2="69" y2="43" stroke="#003A2A" stroke-width="0.7"/>
<line x1="56.7" y1="37.7" x2="67.3" y2="48.3" stroke="#003A2A" stroke-width="0.5" opacity="0.7"/>
<line x1="67.3" y1="37.7" x2="56.7" y2="48.3" stroke="#003A2A" stroke-width="0.5" opacity="0.7"/>
<circle cx="62" cy="43" r="3" fill="#003A2A"/>
<circle cx="60.5" cy="41.5" r="1" fill="#AAFFEE" opacity="0.9"/>
<!-- Small thoughtful mouth -->
<path d="M43,62 Q50,65 57,62" stroke="#006060" stroke-width="1.1" fill="none"/>
</svg>`,

// ─────────────────────────────────────────────────────────────────
// 16. DIR-FE — The Renderer
// Wide rounded face, electric blue, pixel-grid eyes, wireless arcs on head
// ─────────────────────────────────────────────────────────────────
"DIR-FE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="dfe-bg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#000A1F"/><stop offset="100%" stop-color="#000000"/></radialGradient>
  <radialGradient id="dfe-skin" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#2288FF"/><stop offset="100%" stop-color="#0044CC"/></radialGradient>
  <radialGradient id="dfe-eye" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#AADDFF"/><stop offset="100%" stop-color="#2266AA"/></radialGradient>
  <filter id="dfe-glow"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="dfe-glow-sm"><feGaussianBlur stdDeviation="0.7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#dfe-bg)"/>
<!-- Wide rounded face -->
<ellipse cx="50" cy="52" rx="32" ry="30" fill="url(#dfe-skin)" stroke="#1166EE" stroke-width="0.6"/>
<!-- Wireless wave arcs emanating from head top -->
<path d="M42,24 Q50,18 58,24" stroke="#AADDFF" stroke-width="0.9" fill="none" opacity="0.8" filter="url(#dfe-glow-sm)"/>
<path d="M38,19 Q50,11 62,19" stroke="#AADDFF" stroke-width="0.7" fill="none" opacity="0.6"/>
<path d="M35,14 Q50,5 65,14" stroke="#AADDFF" stroke-width="0.5" fill="none" opacity="0.4"/>
<!-- Left eye with pixel-grid iris -->
<ellipse cx="35" cy="45" rx="9" ry="8" fill="url(#dfe-eye)"/>
<!-- Pixel grid in left eye -->
<line x1="29" y1="43" x2="44" y2="43" stroke="#1144AA" stroke-width="0.5"/>
<line x1="29" y1="46" x2="44" y2="46" stroke="#1144AA" stroke-width="0.5"/>
<line x1="29" y1="49" x2="44" y2="49" stroke="#1144AA" stroke-width="0.5"/>
<line x1="32" y1="38" x2="32" y2="53" stroke="#1144AA" stroke-width="0.5"/>
<line x1="35" y1="38" x2="35" y2="53" stroke="#1144AA" stroke-width="0.5"/>
<line x1="38" y1="38" x2="38" y2="53" stroke="#1144AA" stroke-width="0.5"/>
<line x1="41" y1="38" x2="41" y2="53" stroke="#1144AA" stroke-width="0.5"/>
<circle cx="35" cy="45" r="3" fill="#001A55"/>
<circle cx="33.5" cy="43.5" r="1" fill="#DDEEFF" opacity="0.9"/>
<!-- Right eye with pixel grid -->
<ellipse cx="65" cy="45" rx="9" ry="8" fill="url(#dfe-eye)"/>
<line x1="59" y1="43" x2="74" y2="43" stroke="#1144AA" stroke-width="0.5"/>
<line x1="59" y1="46" x2="74" y2="46" stroke="#1144AA" stroke-width="0.5"/>
<line x1="59" y1="49" x2="74" y2="49" stroke="#1144AA" stroke-width="0.5"/>
<line x1="62" y1="38" x2="62" y2="53" stroke="#1144AA" stroke-width="0.5"/>
<line x1="65" y1="38" x2="65" y2="53" stroke="#1144AA" stroke-width="0.5"/>
<line x1="68" y1="38" x2="68" y2="53" stroke="#1144AA" stroke-width="0.5"/>
<line x1="71" y1="38" x2="71" y2="53" stroke="#1144AA" stroke-width="0.5"/>
<circle cx="65" cy="45" r="3" fill="#001A55"/>
<circle cx="63.5" cy="43.5" r="1" fill="#DDEEFF" opacity="0.9"/>
<!-- CSS bracket symbols on cheeks -->
<text x="22" y="56" font-family="monospace" font-size="7" fill="#AADDFF" opacity="0.8" font-weight="bold">{"{"}</text>
<text x="72" y="56" font-family="monospace" font-size="7" fill="#AADDFF" opacity="0.8" font-weight="bold">{"}"}</text>
<!-- Pixel-art style blocky rectangle mouth -->
<rect x="38" y="63" width="24" height="6" rx="0" fill="#001A55" stroke="#AADDFF" stroke-width="0.6"/>
<rect x="41" y="64" width="5" height="4" rx="0" fill="#2266AA"/>
<rect x="47" y="64" width="5" height="4" rx="0" fill="#2266AA"/>
<rect x="53" y="64" width="5" height="4" rx="0" fill="#2266AA"/>
</svg>`,

// ─────────────────────────────────────────────────────────────────
// 17. DIR-BE — The Processor
// Narrow oval, dark terminal green, text-scroll eyes, right-angle antennae, binary forehead
// ─────────────────────────────────────────────────────────────────
"DIR-BE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="dbe-bg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#001100"/><stop offset="100%" stop-color="#000000"/></radialGradient>
  <radialGradient id="dbe-skin" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#0A4A0A"/><stop offset="100%" stop-color="#003300"/></radialGradient>
  <radialGradient id="dbe-eye" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#44FF44"/><stop offset="100%" stop-color="#008800"/></radialGradient>
  <filter id="dbe-glow-sm"><feGaussianBlur stdDeviation="0.7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#dbe-bg)"/>
<!-- Narrow oval head -->
<ellipse cx="50" cy="50" rx="22" ry="34" fill="url(#dbe-skin)" stroke="#005500" stroke-width="0.6"/>
<!-- 2 antennae with right-angle bends like circuit traces -->
<path d="M42,18 L42,10 L34,10" stroke="#00AA00" stroke-width="1" fill="none"/>
<circle cx="34" cy="10" r="1.5" fill="#44FF44" filter="url(#dbe-glow-sm)"/>
<path d="M58,18 L58,10 L66,10" stroke="#00AA00" stroke-width="1" fill="none"/>
<circle cx="66" cy="10" r="1.5" fill="#44FF44" filter="url(#dbe-glow-sm)"/>
<!-- Binary 0/1 dots on forehead -->
<circle cx="46" cy="25" r="1.2" fill="#22CC22"/>
<circle cx="50" cy="22" r="1.2" fill="#44FF44" filter="url(#dbe-glow-sm)"/>
<circle cx="54" cy="25" r="1.2" fill="#22CC22"/>
<circle cx="44" cy="29" r="0.8" fill="#00AA00"/>
<circle cx="48" cy="27" r="0.8" fill="#22CC22"/>
<circle cx="52" cy="28" r="0.8" fill="#00AA00"/>
<circle cx="56" cy="29" r="0.8" fill="#22CC22"/>
<!-- Left narrow rectangular eye -->
<rect x="29" y="37" width="14" height="8" rx="1" fill="url(#dbe-eye)"/>
<!-- Scrolling text in eye (fine horizontal lines) -->
<line x1="29" y1="39.5" x2="43" y2="39.5" stroke="#004400" stroke-width="0.6"/>
<line x1="29" y1="42" x2="43" y2="42" stroke="#004400" stroke-width="0.6"/>
<line x1="29" y1="44.5" x2="43" y2="44.5" stroke="#004400" stroke-width="0.6"/>
<!-- Right narrow rectangular eye -->
<rect x="57" y="37" width="14" height="8" rx="1" fill="url(#dbe-eye)"/>
<line x1="57" y1="39.5" x2="71" y2="39.5" stroke="#004400" stroke-width="0.6"/>
<line x1="57" y1="42" x2="71" y2="42" stroke="#004400" stroke-width="0.6"/>
<line x1="57" y1="44.5" x2="71" y2="44.5" stroke="#004400" stroke-width="0.6"/>
<!-- Flat bar mouth -->
<rect x="36" y="60" width="28" height="3" rx="1" fill="#002200" stroke="#004400" stroke-width="0.5"/>
<!-- Neck -->
<rect x="44" y="82" width="12" height="5" rx="2" fill="#003300" stroke="#005500" stroke-width="0.5"/>
</svg>`,

// ─────────────────────────────────────────────────────────────────
// 18. DIR-MOB — The Navigator
// Rounded rectangle head like phone screen, sky blue, home-button iris, signal arcs
// ─────────────────────────────────────────────────────────────────
"DIR-MOB": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="dmob-bg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#000D1F"/><stop offset="100%" stop-color="#000000"/></radialGradient>
  <radialGradient id="dmob-skin" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#3AAFFF"/><stop offset="100%" stop-color="#0066CC"/></radialGradient>
  <radialGradient id="dmob-eye" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#DDEEFF"/><stop offset="100%" stop-color="#4488BB"/></radialGradient>
  <filter id="dmob-glow"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="dmob-glow-sm"><feGaussianBlur stdDeviation="0.7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#dmob-bg)"/>
<!-- Phone-screen shaped head: rounded rectangle -->
<rect x="24" y="12" width="52" height="72" rx="12" fill="url(#dmob-skin)" stroke="#2288CC" stroke-width="0.6"/>
<!-- Signal arc radiating from head top (no antennae) -->
<path d="M42,14 Q50,8 58,14" stroke="#AADDFF" stroke-width="0.9" fill="none" opacity="0.9" filter="url(#dmob-glow-sm)"/>
<path d="M38,10 Q50,2 62,10" stroke="#AADDFF" stroke-width="0.7" fill="none" opacity="0.7"/>
<path d="M35,6 Q50,-3 65,6" stroke="#AADDFF" stroke-width="0.5" fill="none" opacity="0.4"/>
<!-- Left eye with home-button circle iris -->
<circle cx="37" cy="40" r="8.5" fill="url(#dmob-eye)"/>
<circle cx="37" cy="40" r="5" fill="#1155AA"/>
<circle cx="37" cy="40" r="3" fill="none" stroke="#AADDFF" stroke-width="0.8"/>
<circle cx="35.5" cy="38.5" r="1" fill="#DDEEFF" opacity="0.9"/>
<!-- Right eye with home-button circle iris -->
<circle cx="63" cy="40" r="8.5" fill="url(#dmob-eye)"/>
<circle cx="63" cy="40" r="5" fill="#1155AA"/>
<circle cx="63" cy="40" r="3" fill="none" stroke="#AADDFF" stroke-width="0.8"/>
<circle cx="61.5" cy="38.5" r="1" fill="#DDEEFF" opacity="0.9"/>
<!-- Slide-to-unlock line across mouth area -->
<rect x="32" y="58" width="36" height="7" rx="3.5" fill="#0044AA" stroke="#AADDFF" stroke-width="0.5"/>
<circle cx="40" cy="61.5" r="3" fill="#AADDFF" opacity="0.8"/>
<line x1="45" y1="61.5" x2="62" y2="61.5" stroke="#AADDFF" stroke-width="0.7" opacity="0.5"/>
<!-- Home button at bottom of phone-face -->
<circle cx="50" cy="76" r="4" fill="none" stroke="#AADDFF" stroke-width="1"/>
<circle cx="50" cy="76" r="2" fill="#2288CC"/>
</svg>`,

// ─────────────────────────────────────────────────────────────────
// 19. DIR-DATA — The Archivist
// Wide flat oval, data-purple, data-stream eyes, Y-branch antennae, DB cylinder forehead
// ─────────────────────────────────────────────────────────────────
"DIR-DATA": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="ddat-bg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#0D0019"/><stop offset="100%" stop-color="#000000"/></radialGradient>
  <radialGradient id="ddat-skin" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#9030C0"/><stop offset="100%" stop-color="#6A0DAD"/></radialGradient>
  <radialGradient id="ddat-eye" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#CC88FF"/><stop offset="100%" stop-color="#7700AA"/></radialGradient>
  <filter id="ddat-glow-sm"><feGaussianBlur stdDeviation="0.7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="100" height="100" rx="18" fill="url(#ddat-bg)"/>
<!-- Wide flat oval head -->
<ellipse cx="50" cy="52" rx="34" ry="28" fill="url(#ddat-skin)" stroke="#8800CC" stroke-width="0.6"/>
<!-- Y-shaped antennae (branch at top into 2 each) -->
<line x1="38" y1="26" x2="38" y2="14" stroke="#AA44DD" stroke-width="1.1"/>
<line x1="38" y1="14" x2="32" y2="6" stroke="#AA44DD" stroke-width="1"/>
<circle cx="32" cy="6" r="1.5" fill="#CC88FF" filter="url(#ddat-glow-sm)"/>
<line x1="38" y1="14" x2="44" y2="6" stroke="#AA44DD" stroke-width="1"/>
<circle cx="44" cy="6" r="1.5" fill="#CC88FF" filter="url(#ddat-glow-sm)"/>
<line x1="62" y1="26" x2="62" y2="14" stroke="#AA44DD" stroke-width="1.1"/>
<line x1="62" y1="14" x2="56" y2="6" stroke="#AA44DD" stroke-width="1"/>
<circle cx="56" cy="6" r="1.5" fill="#CC88FF" filter="url(#ddat-glow-sm)"/>
<line x1="62" y1="14" x2="68" y2="6" stroke="#AA44DD" stroke-width="1"/>
<circle cx="68" cy="6" r="1.5" fill="#CC88FF" filter="url(#ddat-glow-sm)"/>
<!-- Database cylinder symbol on forehead -->
<ellipse cx="50" cy="32" rx="7" ry="2.5" fill="#CC88FF" opacity="0.7"/>
<rect x="43" y="32" width="14" height="5" fill="#9030C0" stroke="#CC88FF" stroke-width="0.4"/>
<ellipse cx="50" cy="37" rx="7" ry="2.5" fill="none" stroke="#CC88FF" stroke-width="0.5" opacity="0.7"/>
<!-- Left eye with data-stream vertical lines -->
<ellipse cx="34" cy="50" rx="8" ry="7" fill="url(#ddat-eye)"/>
<line x1="29" y1="43" x2="29" y2="57" stroke="#330055" stroke-width="0.7"/>
<line x1="32" y1="43" x2="32" y2="57" stroke="#330055" stroke-width="0.7"/>
<line x1="35" y1="43" x2="35" y2="57" stroke="#330055" stroke-width="0.7"/>
<line x1="38" y1="43" x2="38" y2="57" stroke="#330055" stroke-width="0.7"/>
<circle cx="34" cy="50" r="3" fill="#220033"/>
<circle cx="32.5" cy="48.5" r="1" fill="#EECCFF" opacity="0.9"/>
<!-- Right eye -->
<ellipse cx="66" cy="50" rx="8" ry="7" fill="url(#ddat-eye)"/>
<line x1="61" y1="43" x2="61" y2="57" stroke="#330055" stroke-width="0.7"/>
<line x1="64" y1="43" x2="64" y2="57" stroke="#330055" stroke-width="0.7"/>
<line x1="67" y1="43" x2="67" y2="57" stroke="#330055" stroke-width="0.7"/>
<line x1="70" y1="43" x2="70" y2="57" stroke="#330055" stroke-width="0.7"/>
<circle cx="66" cy="50" r="3" fill="#220033"/>
<circle cx="64.5" cy="48.5" r="1" fill="#EECCFF" opacity="0.9"/>
<!-- Narrow horizontal data-pipe line mouth -->
<rect x="38" y="64" width="24" height="3" rx="1.5" fill="#330055" stroke="#AA44DD" stroke-width="0.5"/>
<line x1="40" y1="65.5" x2="62" y2="65.5" stroke="#CC88FF" stroke-width="0.4" opacity="0.5"/>
<!-- Neck -->
<rect x="44" y="78" width="12" height="5" rx="2" fill="#6A0DAD" stroke="#8800CC" stroke-width="0.5"/>
</svg>`,

};

for (const [code, svg] of Object.entries(svgs)) {
  writeFileSync(`${OUT}/${code}.svg`, svg);
  console.log(`Written: ${code}.svg`);
}
console.log(`\nBatch 1 complete — ${Object.keys(svgs).length} alien avatars generated`);
