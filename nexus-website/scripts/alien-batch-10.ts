import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, "../public/brand/avatars/agents");

function wrap(body: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="bg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#0d0d1a"/><stop offset="100%" stop-color="#030108"/></radialGradient>
</defs>
<rect width="100" height="100" rx="16" fill="url(#bg)"/>
${body}
</svg>`;
}

// ─── SR-TW: Senior Technical Writer ───────────────────────────────────────────
// Scholarly precise, parchment-gold skin, quill-pen iris, library-scroll marks
const SR_TW = wrap(`
<defs>
  <radialGradient id="srtw-skin" cx="50%" cy="45%" r="50%"><stop offset="0%" stop-color="#c8a84b"/><stop offset="100%" stop-color="#8b6914"/></radialGradient>
  <radialGradient id="srtw-iris" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f5e6a3"/><stop offset="60%" stop-color="#c8a84b"/><stop offset="100%" stop-color="#5a3d00"/></radialGradient>
</defs>
<!-- head -->
<ellipse cx="50" cy="48" rx="26" ry="30" fill="url(#srtw-skin)"/>
<!-- brow ridge -->
<path d="M28,38 Q50,32 72,38" fill="none" stroke="#5a3d00" stroke-width="1.5" opacity="0.6"/>
<!-- left eye -->
<ellipse cx="38" cy="45" rx="8" ry="6" fill="#1a0d00" stroke="#c8a84b" stroke-width="1.2"/>
<ellipse cx="38" cy="45" rx="5" ry="4" fill="url(#srtw-iris)"/>
<!-- quill pen iris detail left -->
<line x1="35" y1="42" x2="41" y2="48" stroke="#5a3d00" stroke-width="0.8" opacity="0.8"/>
<line x1="35" y1="45" x2="41" y2="45" stroke="#5a3d00" stroke-width="0.6" opacity="0.6"/>
<line x1="38" y1="42" x2="38" y2="48" stroke="#5a3d00" stroke-width="0.6" opacity="0.6"/>
<circle cx="38" cy="45" r="1.5" fill="#1a0d00"/>
<circle cx="37" cy="44" r="0.6" fill="white" opacity="0.8"/>
<!-- right eye -->
<ellipse cx="62" cy="45" rx="8" ry="6" fill="#1a0d00" stroke="#c8a84b" stroke-width="1.2"/>
<ellipse cx="62" cy="45" rx="5" ry="4" fill="url(#srtw-iris)"/>
<!-- quill pen iris detail right -->
<line x1="59" y1="42" x2="65" y2="48" stroke="#5a3d00" stroke-width="0.8" opacity="0.8"/>
<line x1="59" y1="45" x2="65" y2="45" stroke="#5a3d00" stroke-width="0.6" opacity="0.6"/>
<line x1="62" y1="42" x2="62" y2="48" stroke="#5a3d00" stroke-width="0.6" opacity="0.6"/>
<circle cx="62" cy="45" r="1.5" fill="#1a0d00"/>
<circle cx="61" cy="44" r="0.6" fill="white" opacity="0.8"/>
<!-- scholarly brows -->
<path d="M30,38 Q38,35 46,38" fill="none" stroke="#5a3d00" stroke-width="1.8"/>
<path d="M54,38 Q62,35 70,38" fill="none" stroke="#5a3d00" stroke-width="1.8"/>
<!-- nose -->
<path d="M48,52 Q50,56 52,52" fill="none" stroke="#5a3d00" stroke-width="1" opacity="0.7"/>
<!-- thoughtful mouth -->
<path d="M40,63 Q50,67 60,63" fill="none" stroke="#5a3d00" stroke-width="1.5"/>
<!-- library scroll marks on cheeks -->
<line x1="24" y1="46" x2="30" y2="46" stroke="#c8a84b" stroke-width="0.8" opacity="0.6"/>
<line x1="24" y1="49" x2="29" y2="49" stroke="#c8a84b" stroke-width="0.6" opacity="0.5"/>
<line x1="24" y1="52" x2="28" y2="52" stroke="#c8a84b" stroke-width="0.6" opacity="0.4"/>
<line x1="70" y1="46" x2="76" y2="46" stroke="#c8a84b" stroke-width="0.8" opacity="0.6"/>
<line x1="71" y1="49" x2="76" y2="49" stroke="#c8a84b" stroke-width="0.6" opacity="0.5"/>
<line x1="72" y1="52" x2="76" y2="52" stroke="#c8a84b" stroke-width="0.6" opacity="0.4"/>
<!-- quill antenna on head -->
<path d="M50,18 Q54,10 58,5" stroke="#c8a84b" stroke-width="1.2" fill="none"/>
<path d="M58,5 Q62,3 64,6 Q60,7 58,10" fill="#c8a84b" opacity="0.8"/>
<!-- chin marking: underline -->
<line x1="42" y1="73" x2="58" y2="73" stroke="#c8a84b" stroke-width="0.8" opacity="0.5"/>
<!-- label -->
<text x="50" y="91" text-anchor="middle" font-family="monospace" font-size="4" fill="#c8a84b" opacity="0.9">SR-TW</text>
`);

// ─── TW: Technical Writer ──────────────────────────────────────────────────────
// Focused helpful, warm tan, document-edit iris, documentation marks on cheeks
const TW = wrap(`
<defs>
  <radialGradient id="tw-skin" cx="50%" cy="45%" r="50%"><stop offset="0%" stop-color="#c8956b"/><stop offset="100%" stop-color="#7a4e28"/></radialGradient>
  <radialGradient id="tw-iris" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#e8d5b0"/><stop offset="60%" stop-color="#c8956b"/><stop offset="100%" stop-color="#5a2800"/></radialGradient>
</defs>
<!-- head -->
<ellipse cx="50" cy="50" rx="24" ry="28" fill="url(#tw-skin)"/>
<!-- brow ridge -->
<path d="M30,40 Q50,35 70,40" fill="none" stroke="#5a2800" stroke-width="1.2" opacity="0.5"/>
<!-- left eye -->
<ellipse cx="39" cy="47" rx="7" ry="5.5" fill="#1a0800" stroke="#c8956b" stroke-width="1"/>
<ellipse cx="39" cy="47" rx="4.5" ry="3.5" fill="url(#tw-iris)"/>
<!-- pen cursor iris left -->
<line x1="37" y1="45" x2="41" y2="49" stroke="#5a2800" stroke-width="1" opacity="0.9"/>
<circle cx="41" cy="49" r="1" fill="#c8956b" opacity="0.8"/>
<circle cx="39" cy="47" r="1.4" fill="#1a0800"/>
<circle cx="38" cy="46" r="0.5" fill="white" opacity="0.8"/>
<!-- right eye -->
<ellipse cx="61" cy="47" rx="7" ry="5.5" fill="#1a0800" stroke="#c8956b" stroke-width="1"/>
<ellipse cx="61" cy="47" rx="4.5" ry="3.5" fill="url(#tw-iris)"/>
<!-- pen cursor iris right -->
<line x1="59" y1="45" x2="63" y2="49" stroke="#5a2800" stroke-width="1" opacity="0.9"/>
<circle cx="63" cy="49" r="1" fill="#c8956b" opacity="0.8"/>
<circle cx="61" cy="47" r="1.4" fill="#1a0800"/>
<circle cx="60" cy="46" r="0.5" fill="white" opacity="0.8"/>
<!-- brows helpful angle -->
<path d="M32,40 Q39,37 46,40" fill="none" stroke="#5a2800" stroke-width="1.5"/>
<path d="M54,40 Q61,37 68,40" fill="none" stroke="#5a2800" stroke-width="1.5"/>
<!-- nose -->
<path d="M48,53 Q50,57 52,53" fill="none" stroke="#5a2800" stroke-width="0.9" opacity="0.6"/>
<!-- friendly smile -->
<path d="M41,63 Q50,68 59,63" fill="none" stroke="#5a2800" stroke-width="1.4"/>
<!-- documentation marks on cheeks -->
<line x1="25" y1="48" x2="31" y2="48" stroke="#c8956b" stroke-width="0.7" opacity="0.5"/>
<line x1="25" y1="51" x2="30" y2="51" stroke="#c8956b" stroke-width="0.5" opacity="0.4"/>
<line x1="69" y1="48" x2="75" y2="48" stroke="#c8956b" stroke-width="0.7" opacity="0.5"/>
<line x1="70" y1="51" x2="75" y2="51" stroke="#c8956b" stroke-width="0.5" opacity="0.4"/>
<!-- small antenna -->
<line x1="50" y1="22" x2="50" y2="14" stroke="#c8956b" stroke-width="1.2"/>
<circle cx="50" cy="13" r="2" fill="none" stroke="#c8956b" stroke-width="1"/>
<!-- label -->
<text x="50" y="91" text-anchor="middle" font-family="monospace" font-size="4" fill="#c8956b" opacity="0.9">TW</text>
`);

// ─── KB-MGR: Knowledge Base Manager ───────────────────────────────────────────
// Organized encyclopedic, medium brown-gold, knowledge-tree iris, wiki crown
const KB_MGR = wrap(`
<defs>
  <radialGradient id="kb-skin" cx="50%" cy="45%" r="50%"><stop offset="0%" stop-color="#b8942a"/><stop offset="100%" stop-color="#6b4f0a"/></radialGradient>
  <radialGradient id="kb-iris" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f0d878"/><stop offset="50%" stop-color="#b8942a"/><stop offset="100%" stop-color="#3d2800"/></radialGradient>
</defs>
<!-- head -->
<ellipse cx="50" cy="50" rx="25" ry="29" fill="url(#kb-skin)"/>
<!-- wiki crown (tree branches above head) -->
<line x1="50" y1="21" x2="50" y2="12" stroke="#b8942a" stroke-width="1.5"/>
<line x1="50" y1="15" x2="44" y2="10" stroke="#b8942a" stroke-width="1.2"/>
<line x1="50" y1="15" x2="56" y2="10" stroke="#b8942a" stroke-width="1.2"/>
<line x1="44" y1="10" x2="41" y2="7" stroke="#b8942a" stroke-width="1"/>
<line x1="44" y1="10" x2="44" y2="7" stroke="#b8942a" stroke-width="1"/>
<line x1="56" y1="10" x2="59" y2="7" stroke="#b8942a" stroke-width="1"/>
<line x1="56" y1="10" x2="56" y2="7" stroke="#b8942a" stroke-width="1"/>
<circle cx="41" cy="6" r="1.5" fill="#b8942a" opacity="0.9"/>
<circle cx="44" cy="6" r="1.5" fill="#b8942a" opacity="0.9"/>
<circle cx="56" cy="6" r="1.5" fill="#b8942a" opacity="0.9"/>
<circle cx="59" cy="6" r="1.5" fill="#b8942a" opacity="0.9"/>
<circle cx="50" cy="11" r="1.5" fill="#b8942a" opacity="0.9"/>
<!-- left eye -->
<ellipse cx="38" cy="46" rx="8" ry="6" fill="#1a0d00" stroke="#b8942a" stroke-width="1.2"/>
<ellipse cx="38" cy="46" rx="5.5" ry="4" fill="url(#kb-iris)"/>
<!-- taxonomy tree in iris -->
<line x1="38" y1="43" x2="38" y2="49" stroke="#3d2800" stroke-width="0.7"/>
<line x1="38" y1="45" x2="35" y2="43" stroke="#3d2800" stroke-width="0.5"/>
<line x1="38" y1="45" x2="41" y2="43" stroke="#3d2800" stroke-width="0.5"/>
<circle cx="38" cy="46" r="1.6" fill="#1a0d00"/>
<circle cx="37" cy="45" r="0.6" fill="white" opacity="0.8"/>
<!-- right eye -->
<ellipse cx="62" cy="46" rx="8" ry="6" fill="#1a0d00" stroke="#b8942a" stroke-width="1.2"/>
<ellipse cx="62" cy="46" rx="5.5" ry="4" fill="url(#kb-iris)"/>
<!-- taxonomy tree in iris right -->
<line x1="62" y1="43" x2="62" y2="49" stroke="#3d2800" stroke-width="0.7"/>
<line x1="62" y1="45" x2="59" y2="43" stroke="#3d2800" stroke-width="0.5"/>
<line x1="62" y1="45" x2="65" y2="43" stroke="#3d2800" stroke-width="0.5"/>
<circle cx="62" cy="46" r="1.6" fill="#1a0d00"/>
<circle cx="61" cy="45" r="0.6" fill="white" opacity="0.8"/>
<!-- brows -->
<path d="M30,39 Q38,36 46,39" fill="none" stroke="#3d2800" stroke-width="1.6"/>
<path d="M54,39 Q62,36 70,39" fill="none" stroke="#3d2800" stroke-width="1.6"/>
<!-- nose -->
<path d="M48,53 Q50,57 52,53" fill="none" stroke="#3d2800" stroke-width="1" opacity="0.6"/>
<!-- organized expression -->
<path d="M42,64 Q50,68 58,64" fill="none" stroke="#3d2800" stroke-width="1.4"/>
<!-- label -->
<text x="50" y="91" text-anchor="middle" font-family="monospace" font-size="3.8" fill="#b8942a" opacity="0.9">KB-MGR</text>
`);

// ─── ARB-AGENT: Architecture Review Board ─────────────────────────────────────
// MOST IMPOSING. Wide angular face, dark gold-black, architecture-diagram iris, gavel crown
const ARB_AGENT = wrap(`
<defs>
  <radialGradient id="arb-skin" cx="50%" cy="45%" r="50%"><stop offset="0%" stop-color="#7a6a00"/><stop offset="100%" stop-color="#1a1400"/></radialGradient>
  <radialGradient id="arb-iris" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#d4af00"/><stop offset="50%" stop-color="#7a6a00"/><stop offset="100%" stop-color="#000"/></radialGradient>
  <filter id="arb-glow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- imposing wide head -->
<path d="M18,55 Q18,25 50,22 Q82,25 82,55 Q82,75 50,78 Q18,75 18,55 Z" fill="url(#arb-skin)"/>
<!-- decision-branch antennae (3) -->
<line x1="50" y1="22" x2="50" y2="10" stroke="#d4af00" stroke-width="1.5"/>
<line x1="50" y1="14" x2="42" y2="8" stroke="#d4af00" stroke-width="1.2"/>
<line x1="50" y1="14" x2="58" y2="8" stroke="#d4af00" stroke-width="1.2"/>
<line x1="42" y1="8" x2="38" y2="5" stroke="#d4af00" stroke-width="1"/>
<line x1="58" y1="8" x2="62" y2="5" stroke="#d4af00" stroke-width="1"/>
<!-- gavel crown marks -->
<rect x="40" y="20" width="20" height="4" rx="1" fill="#d4af00" opacity="0.8" filter="url(#arb-glow)"/>
<line x1="50" y1="20" x2="50" y2="24" stroke="#1a1400" stroke-width="1"/>
<!-- left eye — large, authority -->
<ellipse cx="36" cy="46" rx="10" ry="7" fill="#050200" stroke="#d4af00" stroke-width="1.5" filter="url(#arb-glow)"/>
<ellipse cx="36" cy="46" rx="7" ry="5" fill="url(#arb-iris)"/>
<!-- architecture diagram iris left -->
<rect x="32" y="43" width="8" height="6" fill="none" stroke="#1a1400" stroke-width="0.6" opacity="0.8"/>
<line x1="36" y1="43" x2="36" y2="49" stroke="#1a1400" stroke-width="0.5" opacity="0.7"/>
<line x1="32" y1="46" x2="40" y2="46" stroke="#1a1400" stroke-width="0.5" opacity="0.7"/>
<circle cx="36" cy="46" r="2" fill="#050200"/>
<circle cx="35" cy="45" r="0.7" fill="white" opacity="0.9"/>
<!-- right eye -->
<ellipse cx="64" cy="46" rx="10" ry="7" fill="#050200" stroke="#d4af00" stroke-width="1.5" filter="url(#arb-glow)"/>
<ellipse cx="64" cy="46" rx="7" ry="5" fill="url(#arb-iris)"/>
<rect x="60" y="43" width="8" height="6" fill="none" stroke="#1a1400" stroke-width="0.6" opacity="0.8"/>
<line x1="64" y1="43" x2="64" y2="49" stroke="#1a1400" stroke-width="0.5" opacity="0.7"/>
<line x1="60" y1="46" x2="68" y2="46" stroke="#1a1400" stroke-width="0.5" opacity="0.7"/>
<circle cx="64" cy="46" r="2" fill="#050200"/>
<circle cx="63" cy="45" r="0.7" fill="white" opacity="0.9"/>
<!-- heavy imposing brows -->
<path d="M24,38 Q36,34 48,38" fill="none" stroke="#d4af00" stroke-width="2.5"/>
<path d="M52,38 Q64,34 76,38" fill="none" stroke="#d4af00" stroke-width="2.5"/>
<!-- nose — angular -->
<path d="M47,54 L50,60 L53,54" fill="none" stroke="#d4af00" stroke-width="1.2" opacity="0.7"/>
<!-- stern immovable expression -->
<line x1="38" y1="68" x2="62" y2="68" stroke="#d4af00" stroke-width="1.8"/>
<!-- gavel marks on cheeks -->
<rect x="19" y="50" width="7" height="2.5" rx="1" fill="#d4af00" opacity="0.5"/>
<line x1="22" y1="49" x2="22" y2="54" stroke="#d4af00" stroke-width="1"/>
<rect x="74" y="50" width="7" height="2.5" rx="1" fill="#d4af00" opacity="0.5"/>
<line x1="78" y1="49" x2="78" y2="54" stroke="#d4af00" stroke-width="1"/>
<!-- label -->
<text x="50" y="91" text-anchor="middle" font-family="monospace" font-size="3.8" fill="#d4af00" opacity="0.95">ARB-AGENT</text>
`);

// ─── SEC-REVIEW: Security Review Gate ─────────────────────────────────────────
// Ultra-vigilant, void-black with security-red, spider-web iris, scanning grid
const SEC_REVIEW = wrap(`
<defs>
  <radialGradient id="sec-skin" cx="50%" cy="45%" r="50%"><stop offset="0%" stop-color="#1a0505"/><stop offset="100%" stop-color="#050000"/></radialGradient>
  <radialGradient id="sec-iris" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ff4444"/><stop offset="40%" stop-color="#8b0000"/><stop offset="100%" stop-color="#000"/></radialGradient>
  <filter id="sec-glow"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- void-black head -->
<ellipse cx="50" cy="48" rx="27" ry="31" fill="url(#sec-skin)" stroke="#ff0000" stroke-width="0.5" opacity="0.6"/>
<!-- scanning grid across entire face -->
<line x1="25" y1="30" x2="75" y2="30" stroke="#ff0000" stroke-width="0.4" opacity="0.2"/>
<line x1="25" y1="40" x2="75" y2="40" stroke="#ff0000" stroke-width="0.4" opacity="0.2"/>
<line x1="25" y1="50" x2="75" y2="50" stroke="#ff0000" stroke-width="0.4" opacity="0.2"/>
<line x1="25" y1="60" x2="75" y2="60" stroke="#ff0000" stroke-width="0.4" opacity="0.2"/>
<line x1="25" y1="70" x2="75" y2="70" stroke="#ff0000" stroke-width="0.4" opacity="0.2"/>
<line x1="35" y1="20" x2="35" y2="78" stroke="#ff0000" stroke-width="0.4" opacity="0.2"/>
<line x1="50" y1="18" x2="50" y2="80" stroke="#ff0000" stroke-width="0.4" opacity="0.2"/>
<line x1="65" y1="20" x2="65" y2="78" stroke="#ff0000" stroke-width="0.4" opacity="0.2"/>
<!-- left eye — spider-web iris -->
<ellipse cx="37" cy="45" rx="9" ry="7" fill="#050000" stroke="#ff4444" stroke-width="1.5" filter="url(#sec-glow)"/>
<ellipse cx="37" cy="45" rx="7" ry="5.5" fill="url(#sec-iris)"/>
<!-- web pattern -->
<circle cx="37" cy="45" r="5.5" fill="none" stroke="#ff0000" stroke-width="0.5" opacity="0.5"/>
<circle cx="37" cy="45" r="3" fill="none" stroke="#ff0000" stroke-width="0.4" opacity="0.6"/>
<line x1="33" y1="41" x2="41" y2="49" stroke="#ff0000" stroke-width="0.4" opacity="0.7"/>
<line x1="41" y1="41" x2="33" y2="49" stroke="#ff0000" stroke-width="0.4" opacity="0.7"/>
<line x1="37" y1="39.5" x2="37" y2="50.5" stroke="#ff0000" stroke-width="0.4" opacity="0.7"/>
<line x1="31.5" y1="45" x2="42.5" y2="45" stroke="#ff0000" stroke-width="0.4" opacity="0.7"/>
<circle cx="37" cy="45" r="1.8" fill="#050000"/>
<circle cx="36" cy="44" r="0.6" fill="#ff4444" opacity="0.9"/>
<!-- right eye -->
<ellipse cx="63" cy="45" rx="9" ry="7" fill="#050000" stroke="#ff4444" stroke-width="1.5" filter="url(#sec-glow)"/>
<ellipse cx="63" cy="45" rx="7" ry="5.5" fill="url(#sec-iris)"/>
<circle cx="63" cy="45" r="5.5" fill="none" stroke="#ff0000" stroke-width="0.5" opacity="0.5"/>
<circle cx="63" cy="45" r="3" fill="none" stroke="#ff0000" stroke-width="0.4" opacity="0.6"/>
<line x1="59" y1="41" x2="67" y2="49" stroke="#ff0000" stroke-width="0.4" opacity="0.7"/>
<line x1="67" y1="41" x2="59" y2="49" stroke="#ff0000" stroke-width="0.4" opacity="0.7"/>
<line x1="63" y1="39.5" x2="63" y2="50.5" stroke="#ff0000" stroke-width="0.4" opacity="0.7"/>
<line x1="57.5" y1="45" x2="68.5" y2="45" stroke="#ff0000" stroke-width="0.4" opacity="0.7"/>
<circle cx="63" cy="45" r="1.8" fill="#050000"/>
<circle cx="62" cy="44" r="0.6" fill="#ff4444" opacity="0.9"/>
<!-- vigilant flat brows -->
<line x1="28" y1="36" x2="46" y2="37" stroke="#ff4444" stroke-width="2" opacity="0.8"/>
<line x1="54" y1="37" x2="72" y2="36" stroke="#ff4444" stroke-width="2" opacity="0.8"/>
<!-- nose -->
<path d="M48,53 Q50,57 52,53" fill="none" stroke="#ff4444" stroke-width="0.8" opacity="0.5"/>
<!-- thin alert mouth -->
<line x1="40" y1="65" x2="60" y2="65" stroke="#ff4444" stroke-width="1.2" opacity="0.7"/>
<!-- scan beam indicator -->
<rect x="24" y="43" width="4" height="2" rx="1" fill="#ff4444" opacity="0.8"/>
<rect x="72" y="43" width="4" height="2" rx="1" fill="#ff4444" opacity="0.8"/>
<!-- label -->
<text x="50" y="91" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#ff4444" opacity="0.9">SEC-REVIEW</text>
`);

// ─── LEGAL-REVIEW: Legal Review Gate ──────────────────────────────────────────
// Formal imposing, dark charcoal-blue, legal-text paragraph iris, scales crown
const LEGAL_REVIEW = wrap(`
<defs>
  <radialGradient id="leg-skin" cx="50%" cy="45%" r="50%"><stop offset="0%" stop-color="#2a3550"/><stop offset="100%" stop-color="#0a0f20"/></radialGradient>
  <radialGradient id="leg-iris" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#7aa0d4"/><stop offset="50%" stop-color="#2a3550"/><stop offset="100%" stop-color="#020408"/></radialGradient>
</defs>
<!-- formal head -->
<path d="M22,52 Q22,24 50,21 Q78,24 78,52 Q78,74 50,77 Q22,74 22,52 Z" fill="url(#leg-skin)"/>
<!-- scales of justice crown -->
<line x1="50" y1="21" x2="50" y2="13" stroke="#7aa0d4" stroke-width="1.5"/>
<line x1="40" y1="13" x2="60" y2="13" stroke="#7aa0d4" stroke-width="1.5"/>
<circle cx="50" cy="13" r="1.5" fill="#7aa0d4"/>
<!-- left pan chain + pan -->
<line x1="40" y1="13" x2="40" y2="18" stroke="#7aa0d4" stroke-width="0.9" stroke-dasharray="1.5,1"/>
<path d="M35,18 Q40,20 45,18" stroke="#7aa0d4" stroke-width="1.2" fill="rgba(122,160,212,0.2)"/>
<!-- right pan chain + pan -->
<line x1="60" y1="13" x2="60" y2="18" stroke="#7aa0d4" stroke-width="0.9" stroke-dasharray="1.5,1"/>
<path d="M55,18 Q60,20 65,18" stroke="#7aa0d4" stroke-width="1.2" fill="rgba(122,160,212,0.2)"/>
<!-- left eye -->
<ellipse cx="37" cy="46" rx="9" ry="7" fill="#050810" stroke="#7aa0d4" stroke-width="1.3"/>
<ellipse cx="37" cy="46" rx="6.5" ry="5" fill="url(#leg-iris)"/>
<!-- legal text paragraph iris -->
<line x1="32" y1="43" x2="42" y2="43" stroke="#0a0f20" stroke-width="0.7" opacity="0.8"/>
<line x1="32" y1="45" x2="42" y2="45" stroke="#0a0f20" stroke-width="0.7" opacity="0.8"/>
<line x1="32" y1="47" x2="40" y2="47" stroke="#0a0f20" stroke-width="0.7" opacity="0.8"/>
<line x1="32" y1="49" x2="42" y2="49" stroke="#0a0f20" stroke-width="0.7" opacity="0.8"/>
<circle cx="37" cy="46" r="1.8" fill="#050810"/>
<circle cx="36" cy="45" r="0.6" fill="white" opacity="0.8"/>
<!-- right eye -->
<ellipse cx="63" cy="46" rx="9" ry="7" fill="#050810" stroke="#7aa0d4" stroke-width="1.3"/>
<ellipse cx="63" cy="46" rx="6.5" ry="5" fill="url(#leg-iris)"/>
<line x1="58" y1="43" x2="68" y2="43" stroke="#0a0f20" stroke-width="0.7" opacity="0.8"/>
<line x1="58" y1="45" x2="68" y2="45" stroke="#0a0f20" stroke-width="0.7" opacity="0.8"/>
<line x1="58" y1="47" x2="66" y2="47" stroke="#0a0f20" stroke-width="0.7" opacity="0.8"/>
<line x1="58" y1="49" x2="68" y2="49" stroke="#0a0f20" stroke-width="0.7" opacity="0.8"/>
<circle cx="63" cy="46" r="1.8" fill="#050810"/>
<circle cx="62" cy="45" r="0.6" fill="white" opacity="0.8"/>
<!-- stern brows -->
<path d="M27,38 Q37,34 47,38" fill="none" stroke="#7aa0d4" stroke-width="2.2"/>
<path d="M53,38 Q63,34 73,38" fill="none" stroke="#7aa0d4" stroke-width="2.2"/>
<!-- immovable expression -->
<line x1="39" y1="65" x2="61" y2="65" stroke="#7aa0d4" stroke-width="1.5"/>
<!-- nose -->
<path d="M48,53 Q50,58 52,53" fill="none" stroke="#7aa0d4" stroke-width="1" opacity="0.6"/>
<!-- label -->
<text x="50" y="91" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#7aa0d4" opacity="0.9">LEGAL-REVIEW</text>
`);

// ─── QA-GATE: QA Gate ─────────────────────────────────────────────────────────
// Multi-eyed quality inspector, amber-black, 4 eyes in row, checkmark/X marks
const QA_GATE = wrap(`
<defs>
  <radialGradient id="qa-skin" cx="50%" cy="45%" r="50%"><stop offset="0%" stop-color="#3d2800"/><stop offset="100%" stop-color="#0d0700"/></radialGradient>
  <radialGradient id="qa-iris" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f59e0b"/><stop offset="60%" stop-color="#b45309"/><stop offset="100%" stop-color="#1a0800"/></radialGradient>
</defs>
<!-- wider head for 4 eyes -->
<path d="M14,52 Q14,24 50,20 Q86,24 86,52 Q86,74 50,78 Q14,74 14,52 Z" fill="url(#qa-skin)"/>
<!-- 4 eyes in a row scanning -->
<ellipse cx="27" cy="46" rx="7" ry="5.5" fill="#0d0700" stroke="#f59e0b" stroke-width="1.2"/>
<ellipse cx="27" cy="46" rx="5" ry="4" fill="url(#qa-iris)"/>
<circle cx="27" cy="46" r="1.5" fill="#0d0700"/>
<circle cx="26" cy="45" r="0.5" fill="white" opacity="0.9"/>
<ellipse cx="41" cy="44" rx="7" ry="5.5" fill="#0d0700" stroke="#f59e0b" stroke-width="1.2"/>
<ellipse cx="41" cy="44" rx="5" ry="4" fill="url(#qa-iris)"/>
<circle cx="41" cy="44" r="1.5" fill="#0d0700"/>
<circle cx="40" cy="43" r="0.5" fill="white" opacity="0.9"/>
<ellipse cx="59" cy="44" rx="7" ry="5.5" fill="#0d0700" stroke="#f59e0b" stroke-width="1.2"/>
<ellipse cx="59" cy="44" rx="5" ry="4" fill="url(#qa-iris)"/>
<circle cx="59" cy="44" r="1.5" fill="#0d0700"/>
<circle cx="58" cy="43" r="0.5" fill="white" opacity="0.9"/>
<ellipse cx="73" cy="46" rx="7" ry="5.5" fill="#0d0700" stroke="#f59e0b" stroke-width="1.2"/>
<ellipse cx="73" cy="46" rx="5" ry="4" fill="url(#qa-iris)"/>
<circle cx="73" cy="46" r="1.5" fill="#0d0700"/>
<circle cx="72" cy="45" r="0.5" fill="white" opacity="0.9"/>
<!-- brow strip across all 4 eyes -->
<path d="M18,37 Q50,32 82,37" fill="none" stroke="#f59e0b" stroke-width="2"/>
<!-- nose -->
<path d="M48,54 Q50,58 52,54" fill="none" stroke="#f59e0b" stroke-width="1" opacity="0.6"/>
<!-- checkmark on left cheek -->
<path d="M17,56 L19,59 L23,53" fill="none" stroke="#22c55e" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
<!-- X mark on right cheek -->
<line x1="77" y1="53" x2="82" y2="58" stroke="#ef4444" stroke-width="1.5"/>
<line x1="82" y1="53" x2="77" y2="58" stroke="#ef4444" stroke-width="1.5"/>
<!-- inspector mouth with check -->
<path d="M36,65 L39,68 L43,62" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round"/>
<line x1="46" y1="65" x2="64" y2="65" stroke="#f59e0b" stroke-width="1.2" opacity="0.6"/>
<!-- label -->
<text x="50" y="91" text-anchor="middle" font-family="monospace" font-size="3.8" fill="#f59e0b" opacity="0.9">QA-GATE</text>
`);

// ─── REL-APPROVE: Release Approval Gate ───────────────────────────────────────
// Deep midnight blue, deployment-pipeline iris, launch control marks, launch button forehead
const REL_APPROVE = wrap(`
<defs>
  <radialGradient id="rel-skin" cx="50%" cy="45%" r="50%"><stop offset="0%" stop-color="#0a1a3a"/><stop offset="100%" stop-color="#020510"/></radialGradient>
  <radialGradient id="rel-iris" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#60a5fa"/><stop offset="50%" stop-color="#1d4ed8"/><stop offset="100%" stop-color="#020510"/></radialGradient>
</defs>
<!-- midnight blue head -->
<ellipse cx="50" cy="49" rx="27" ry="30" fill="url(#rel-skin)" stroke="#60a5fa" stroke-width="0.5" opacity="0.5"/>
<!-- launch button on forehead -->
<circle cx="50" cy="27" r="6" fill="#0a1a3a" stroke="#60a5fa" stroke-width="1.5"/>
<circle cx="50" cy="27" r="4" fill="#1d4ed8" opacity="0.8"/>
<circle cx="50" cy="27" r="2.5" fill="#60a5fa" opacity="0.9"/>
<!-- launch control panel marks above eyes -->
<rect x="32" y="34" width="4" height="3" rx="0.5" fill="#60a5fa" opacity="0.6"/>
<rect x="39" y="34" width="4" height="3" rx="0.5" fill="#22c55e" opacity="0.7"/>
<rect x="57" y="34" width="4" height="3" rx="0.5" fill="#22c55e" opacity="0.7"/>
<rect x="64" y="34" width="4" height="3" rx="0.5" fill="#60a5fa" opacity="0.6"/>
<!-- left eye -->
<ellipse cx="37" cy="46" rx="9" ry="7" fill="#020510" stroke="#60a5fa" stroke-width="1.4"/>
<ellipse cx="37" cy="46" rx="6.5" ry="5" fill="url(#rel-iris)"/>
<!-- pipeline iris: stages -->
<line x1="30" y1="46" x2="44" y2="46" stroke="#020510" stroke-width="0.8" opacity="0.8"/>
<circle cx="32" cy="46" r="1.2" fill="#22c55e" opacity="0.8"/>
<circle cx="37" cy="46" r="1.2" fill="#60a5fa" opacity="0.8"/>
<circle cx="42" cy="46" r="1.2" fill="#1d4ed8" opacity="0.8"/>
<circle cx="37" cy="46" r="2" fill="#020510"/>
<circle cx="36" cy="45" r="0.6" fill="white" opacity="0.9"/>
<!-- right eye -->
<ellipse cx="63" cy="46" rx="9" ry="7" fill="#020510" stroke="#60a5fa" stroke-width="1.4"/>
<ellipse cx="63" cy="46" rx="6.5" ry="5" fill="url(#rel-iris)"/>
<line x1="56" y1="46" x2="70" y2="46" stroke="#020510" stroke-width="0.8" opacity="0.8"/>
<circle cx="58" cy="46" r="1.2" fill="#22c55e" opacity="0.8"/>
<circle cx="63" cy="46" r="1.2" fill="#60a5fa" opacity="0.8"/>
<circle cx="68" cy="46" r="1.2" fill="#1d4ed8" opacity="0.8"/>
<circle cx="63" cy="46" r="2" fill="#020510"/>
<circle cx="62" cy="45" r="0.6" fill="white" opacity="0.9"/>
<!-- brows -->
<path d="M27,38 Q37,35 47,38" fill="none" stroke="#60a5fa" stroke-width="1.8"/>
<path d="M53,38 Q63,35 73,38" fill="none" stroke="#60a5fa" stroke-width="1.8"/>
<!-- nose -->
<path d="M48,54 Q50,58 52,54" fill="none" stroke="#60a5fa" stroke-width="1" opacity="0.5"/>
<!-- approved expression -->
<path d="M40,65 L43,68 L60,63" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round"/>
<!-- label -->
<text x="50" y="91" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#60a5fa" opacity="0.9">REL-APPROVE</text>
`);

// ─── CHANGE-MGR: Change Manager ───────────────────────────────────────────────
// Purple-grey, change-wave iris, before/after marks split across face
const CHANGE_MGR = wrap(`
<defs>
  <radialGradient id="chg-skin" cx="50%" cy="45%" r="50%"><stop offset="0%" stop-color="#4a3860"/><stop offset="100%" stop-color="#120e20"/></radialGradient>
  <radialGradient id="chg-iris" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#c084fc"/><stop offset="50%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#120e20"/></radialGradient>
  <linearGradient id="chg-split" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="50%" stop-color="#4a3860"/><stop offset="50%" stop-color="#3a5060"/></linearGradient>
</defs>
<!-- split-color head (before/after) -->
<ellipse cx="50" cy="49" rx="26" ry="30" fill="url(#chg-split)"/>
<line x1="50" y1="19" x2="50" y2="79" stroke="#c084fc" stroke-width="1" opacity="0.4" stroke-dasharray="3,2"/>
<!-- left eye (before) -->
<ellipse cx="37" cy="46" rx="8.5" ry="6.5" fill="#120e20" stroke="#c084fc" stroke-width="1.2"/>
<ellipse cx="37" cy="46" rx="6" ry="4.5" fill="url(#chg-iris)"/>
<!-- wave iris left (before state) -->
<path d="M31,46 Q34,43 37,46 Q40,49 43,46" fill="none" stroke="#120e20" stroke-width="0.8" opacity="0.8"/>
<circle cx="37" cy="46" r="1.8" fill="#120e20"/>
<circle cx="36" cy="45" r="0.6" fill="white" opacity="0.8"/>
<!-- right eye (after) -->
<ellipse cx="63" cy="46" rx="8.5" ry="6.5" fill="#120e20" stroke="#c084fc" stroke-width="1.2"/>
<ellipse cx="63" cy="46" rx="6" ry="4.5" fill="url(#chg-iris)"/>
<!-- wave iris right (after state — calmer) -->
<path d="M57,46 Q60,44 63,46 Q66,48 69,46" fill="none" stroke="#120e20" stroke-width="0.8" opacity="0.8"/>
<circle cx="63" cy="46" r="1.8" fill="#120e20"/>
<circle cx="62" cy="45" r="0.6" fill="white" opacity="0.8"/>
<!-- brows — transitioning angle -->
<path d="M28,38 Q37,35 46,39" fill="none" stroke="#c084fc" stroke-width="1.8"/>
<path d="M54,39 Q63,35 72,38" fill="none" stroke="#c084fc" stroke-width="1.8"/>
<!-- before/after marks -->
<text x="33" y="57" text-anchor="middle" font-family="monospace" font-size="4" fill="#9ca3af" opacity="0.7">B</text>
<text x="67" y="57" text-anchor="middle" font-family="monospace" font-size="4" fill="#c084fc" opacity="0.9">A</text>
<!-- arrow transition mark on forehead -->
<line x1="44" y1="28" x2="56" y2="28" stroke="#c084fc" stroke-width="1.2"/>
<polygon points="56,26 60,28 56,30" fill="#c084fc" opacity="0.9"/>
<!-- nose -->
<path d="M48,54 Q50,57 52,54" fill="none" stroke="#c084fc" stroke-width="0.9" opacity="0.6"/>
<!-- transitional expression -->
<path d="M40,65 Q50,62 60,65" fill="none" stroke="#c084fc" stroke-width="1.4"/>
<!-- label -->
<text x="50" y="91" text-anchor="middle" font-family="monospace" font-size="3.8" fill="#c084fc" opacity="0.9">CHANGE-MGR</text>
`);

// ─── DISC-AGENT: Discovery Agent ──────────────────────────────────────────────
// Starmap skin, massive explorer eyes, galaxy iris, telescope antenna, compass-rose forehead
const DISC_AGENT = wrap(`
<defs>
  <radialGradient id="disc-skin" cx="50%" cy="45%" r="50%"><stop offset="0%" stop-color="#0d1440"/><stop offset="100%" stop-color="#030820"/></radialGradient>
  <radialGradient id="disc-iris" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f0f4ff"/><stop offset="20%" stop-color="#818cf8"/><stop offset="60%" stop-color="#3730a3"/><stop offset="100%" stop-color="#030820"/></radialGradient>
</defs>
<!-- starmap head -->
<ellipse cx="50" cy="49" rx="27" ry="31" fill="url(#disc-skin)"/>
<!-- tiny star dots on skin -->
<circle cx="28" cy="35" r="0.7" fill="white" opacity="0.8"/>
<circle cx="33" cy="28" r="0.5" fill="white" opacity="0.6"/>
<circle cx="72" cy="33" r="0.7" fill="white" opacity="0.8"/>
<circle cx="67" cy="27" r="0.5" fill="white" opacity="0.6"/>
<circle cx="22" cy="50" r="0.6" fill="white" opacity="0.5"/>
<circle cx="78" cy="48" r="0.6" fill="white" opacity="0.5"/>
<circle cx="26" cy="62" r="0.5" fill="white" opacity="0.6"/>
<circle cx="74" cy="60" r="0.5" fill="white" opacity="0.6"/>
<circle cx="40" cy="72" r="0.6" fill="white" opacity="0.5"/>
<circle cx="60" cy="70" r="0.6" fill="white" opacity="0.5"/>
<!-- compass-rose forehead marking -->
<circle cx="50" cy="28" r="5" fill="none" stroke="#818cf8" stroke-width="0.8" opacity="0.7"/>
<line x1="50" y1="23" x2="50" y2="33" stroke="#818cf8" stroke-width="0.8" opacity="0.8"/>
<line x1="45" y1="28" x2="55" y2="28" stroke="#818cf8" stroke-width="0.8" opacity="0.8"/>
<polygon points="50,23 49,25.5 50,24.5 51,25.5" fill="#818cf8" opacity="0.9"/>
<!-- massive left eye -->
<ellipse cx="36" cy="46" rx="11" ry="9" fill="#030820" stroke="#818cf8" stroke-width="1.5"/>
<ellipse cx="36" cy="46" rx="9" ry="7" fill="url(#disc-iris)"/>
<!-- galaxy spiral iris left -->
<path d="M36,46 Q39,43 39,46 Q39,50 36,51 Q33,51 33,46 Q33,41 38,41" fill="none" stroke="#030820" stroke-width="0.8" opacity="0.7"/>
<circle cx="36" cy="46" r="2.5" fill="#030820"/>
<circle cx="35" cy="45" r="0.8" fill="white" opacity="0.95"/>
<!-- massive right eye -->
<ellipse cx="64" cy="46" rx="11" ry="9" fill="#030820" stroke="#818cf8" stroke-width="1.5"/>
<ellipse cx="64" cy="46" rx="9" ry="7" fill="url(#disc-iris)"/>
<path d="M64,46 Q67,43 67,46 Q67,50 64,51 Q61,51 61,46 Q61,41 66,41" fill="none" stroke="#030820" stroke-width="0.8" opacity="0.7"/>
<circle cx="64" cy="46" r="2.5" fill="#030820"/>
<circle cx="63" cy="45" r="0.8" fill="white" opacity="0.95"/>
<!-- adventurous raised brows -->
<path d="M24,36 Q36,31 47,36" fill="none" stroke="#818cf8" stroke-width="2"/>
<path d="M53,36 Q64,31 76,36" fill="none" stroke="#818cf8" stroke-width="2"/>
<!-- telescope antenna -->
<line x1="62" y1="20" x2="72" y2="10" stroke="#818cf8" stroke-width="1.5"/>
<rect x="70" y="6" width="8" height="6" rx="2" fill="none" stroke="#818cf8" stroke-width="1.2" transform="rotate(-30,74,9)"/>
<line x1="72" y1="6" x2="68" y2="4" stroke="#818cf8" stroke-width="0.8"/>
<!-- nose -->
<path d="M47,55 Q50,59 53,55" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.6"/>
<!-- excited open mouth -->
<path d="M39,66 Q50,72 61,66" fill="none" stroke="#818cf8" stroke-width="1.5"/>
<!-- label -->
<text x="50" y="91" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#818cf8" opacity="0.9">DISC-AGENT</text>
`);

// ─── EST-AGENT: Estimation Agent ──────────────────────────────────────────────
// Graph-paper skin, bell-curve iris, abacus beads, calculator marks
const EST_AGENT = wrap(`
<defs>
  <radialGradient id="est-skin" cx="50%" cy="45%" r="50%"><stop offset="0%" stop-color="#2a3520"/><stop offset="100%" stop-color="#0a0f08"/></radialGradient>
  <radialGradient id="est-iris" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#86efac"/><stop offset="50%" stop-color="#16a34a"/><stop offset="100%" stop-color="#052e16"/></radialGradient>
</defs>
<!-- graph-paper skin head -->
<ellipse cx="50" cy="49" rx="26" ry="30" fill="url(#est-skin)"/>
<!-- fine grid on skin -->
<line x1="25" y1="28" x2="75" y2="28" stroke="#4ade80" stroke-width="0.3" opacity="0.3"/>
<line x1="25" y1="38" x2="75" y2="38" stroke="#4ade80" stroke-width="0.3" opacity="0.3"/>
<line x1="25" y1="48" x2="75" y2="48" stroke="#4ade80" stroke-width="0.3" opacity="0.3"/>
<line x1="25" y1="58" x2="75" y2="58" stroke="#4ade80" stroke-width="0.3" opacity="0.3"/>
<line x1="25" y1="68" x2="75" y2="68" stroke="#4ade80" stroke-width="0.3" opacity="0.3"/>
<line x1="30" y1="20" x2="30" y2="78" stroke="#4ade80" stroke-width="0.3" opacity="0.3"/>
<line x1="40" y1="20" x2="40" y2="78" stroke="#4ade80" stroke-width="0.3" opacity="0.3"/>
<line x1="50" y1="20" x2="50" y2="78" stroke="#4ade80" stroke-width="0.3" opacity="0.3"/>
<line x1="60" y1="20" x2="60" y2="78" stroke="#4ade80" stroke-width="0.3" opacity="0.3"/>
<line x1="70" y1="20" x2="70" y2="78" stroke="#4ade80" stroke-width="0.3" opacity="0.3"/>
<!-- left eye -->
<ellipse cx="37" cy="46" rx="9" ry="7" fill="#0a0f08" stroke="#4ade80" stroke-width="1.3"/>
<ellipse cx="37" cy="46" rx="7" ry="5.5" fill="url(#est-iris)"/>
<!-- bell curve iris left -->
<path d="M30,49 Q33,43 37,43 Q41,43 44,49" fill="none" stroke="#052e16" stroke-width="1" opacity="0.8"/>
<line x1="37" y1="42" x2="37" y2="49" stroke="#052e16" stroke-width="0.7" opacity="0.7"/>
<circle cx="37" cy="46" r="2" fill="#0a0f08"/>
<circle cx="36" cy="45" r="0.7" fill="white" opacity="0.9"/>
<!-- right eye -->
<ellipse cx="63" cy="46" rx="9" ry="7" fill="#0a0f08" stroke="#4ade80" stroke-width="1.3"/>
<ellipse cx="63" cy="46" rx="7" ry="5.5" fill="url(#est-iris)"/>
<path d="M56,49 Q59,43 63,43 Q67,43 70,49" fill="none" stroke="#052e16" stroke-width="1" opacity="0.8"/>
<line x1="63" y1="42" x2="63" y2="49" stroke="#052e16" stroke-width="0.7" opacity="0.7"/>
<circle cx="63" cy="46" r="2" fill="#0a0f08"/>
<circle cx="62" cy="45" r="0.7" fill="white" opacity="0.9"/>
<!-- brows -->
<path d="M28,38 Q37,35 46,38" fill="none" stroke="#4ade80" stroke-width="1.7"/>
<path d="M54,38 Q63,35 72,38" fill="none" stroke="#4ade80" stroke-width="1.7"/>
<!-- abacus beads floating near face -->
<line x1="18" y1="36" x2="18" y2="60" stroke="#4ade80" stroke-width="0.8" opacity="0.5"/>
<circle cx="18" cy="40" r="2" fill="#4ade80" opacity="0.7"/>
<circle cx="18" cy="47" r="2" fill="#4ade80" opacity="0.6"/>
<circle cx="18" cy="54" r="2" fill="#4ade80" opacity="0.5"/>
<line x1="82" y1="36" x2="82" y2="60" stroke="#4ade80" stroke-width="0.8" opacity="0.5"/>
<circle cx="82" cy="40" r="2" fill="#4ade80" opacity="0.7"/>
<circle cx="82" cy="47" r="2" fill="#4ade80" opacity="0.6"/>
<!-- calculator marks on chin -->
<rect x="42" y="66" width="16" height="10" rx="1.5" fill="none" stroke="#4ade80" stroke-width="0.9" opacity="0.6"/>
<line x1="42" y1="70" x2="58" y2="70" stroke="#4ade80" stroke-width="0.6" opacity="0.5"/>
<circle cx="46" cy="73" r="1" fill="#4ade80" opacity="0.7"/>
<circle cx="50" cy="73" r="1" fill="#4ade80" opacity="0.7"/>
<circle cx="54" cy="73" r="1" fill="#4ade80" opacity="0.7"/>
<!-- contemplative slight smile -->
<path d="M42,63 Q50,65 58,63" fill="none" stroke="#4ade80" stroke-width="1.3"/>
<!-- label -->
<text x="50" y="91" text-anchor="middle" font-family="monospace" font-size="3.8" fill="#4ade80" opacity="0.9">EST-AGENT</text>
`);

// ─── DEMO-AGENT: Demo Agent ────────────────────────────────────────────────────
// SHOWMAN. Theatrical coral-gold, spotlight iris, huge smile, stage curtain antennae, star marks
const DEMO_AGENT = wrap(`
<defs>
  <radialGradient id="demo-skin" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#f4a460"/><stop offset="60%" stop-color="#d4702a"/><stop offset="100%" stop-color="#8b3a00"/></radialGradient>
  <radialGradient id="demo-iris" cx="30%" cy="30%" r="70%"><stop offset="0%" stop-color="#fff7c0"/><stop offset="30%" stop-color="#fbbf24"/><stop offset="70%" stop-color="#d97706"/><stop offset="100%" stop-color="#1a0800"/></radialGradient>
</defs>
<!-- theatrical head — slightly wider at top for drama -->
<path d="M20,54 Q18,24 50,20 Q82,24 80,54 Q80,76 50,80 Q20,76 20,54 Z" fill="url(#demo-skin)"/>
<!-- stage curtain antennae draping down sides -->
<path d="M22,28 Q14,22 16,35 Q18,45 22,40" fill="none" stroke="#d4702a" stroke-width="1.5" opacity="0.8"/>
<path d="M22,28 Q16,25 14,32" stroke="#fbbf24" stroke-width="1" fill="none" opacity="0.6"/>
<path d="M78,28 Q86,22 84,35 Q82,45 78,40" fill="none" stroke="#d4702a" stroke-width="1.5" opacity="0.8"/>
<path d="M78,28 Q84,25 86,32" stroke="#fbbf24" stroke-width="1" fill="none" opacity="0.6"/>
<!-- star marks on face -->
<path d="M28,34 L29,31 L30,34 L33,34 L31,36 L32,39 L29,37 L26,39 L27,36 L25,34 Z" fill="#fbbf24" opacity="0.8"/>
<path d="M72,34 L73,31 L74,34 L77,34 L75,36 L76,39 L73,37 L70,39 L71,36 L69,34 Z" fill="#fbbf24" opacity="0.8"/>
<!-- left eye — spotlight stage iris -->
<ellipse cx="37" cy="46" rx="10" ry="8" fill="#1a0800" stroke="#fbbf24" stroke-width="1.5"/>
<ellipse cx="37" cy="46" rx="8" ry="6" fill="url(#demo-iris)"/>
<!-- spotlight rays from iris center -->
<line x1="37" y1="40" x2="37" y2="44" stroke="#1a0800" stroke-width="0.8" opacity="0.7"/>
<line x1="37" y1="48" x2="37" y2="52" stroke="#1a0800" stroke-width="0.8" opacity="0.7"/>
<line x1="31" y1="46" x2="35" y2="46" stroke="#1a0800" stroke-width="0.8" opacity="0.7"/>
<line x1="39" y1="46" x2="43" y2="46" stroke="#1a0800" stroke-width="0.8" opacity="0.7"/>
<line x1="33" y1="42" x2="35.5" y2="44.5" stroke="#1a0800" stroke-width="0.6" opacity="0.6"/>
<line x1="39" y1="47.5" x2="41" y2="49.5" stroke="#1a0800" stroke-width="0.6" opacity="0.6"/>
<circle cx="37" cy="46" r="2.5" fill="#1a0800"/>
<circle cx="35.5" cy="44.5" r="0.9" fill="white" opacity="0.95"/>
<!-- right eye -->
<ellipse cx="63" cy="46" rx="10" ry="8" fill="#1a0800" stroke="#fbbf24" stroke-width="1.5"/>
<ellipse cx="63" cy="46" rx="8" ry="6" fill="url(#demo-iris)"/>
<line x1="63" y1="40" x2="63" y2="44" stroke="#1a0800" stroke-width="0.8" opacity="0.7"/>
<line x1="63" y1="48" x2="63" y2="52" stroke="#1a0800" stroke-width="0.8" opacity="0.7"/>
<line x1="57" y1="46" x2="61" y2="46" stroke="#1a0800" stroke-width="0.8" opacity="0.7"/>
<line x1="65" y1="46" x2="69" y2="46" stroke="#1a0800" stroke-width="0.8" opacity="0.7"/>
<circle cx="63" cy="46" r="2.5" fill="#1a0800"/>
<circle cx="61.5" cy="44.5" r="0.9" fill="white" opacity="0.95"/>
<!-- expressive raised brows -->
<path d="M25,37 Q37,30 48,37" fill="none" stroke="#8b3a00" stroke-width="2.5"/>
<path d="M52,37 Q63,30 75,37" fill="none" stroke="#8b3a00" stroke-width="2.5"/>
<!-- huge performance smile -->
<path d="M30,64 Q50,80 70,64" fill="none" stroke="#8b3a00" stroke-width="2.5"/>
<path d="M33,65 Q50,74 67,65" fill="rgba(139,58,0,0.3)"/>
<!-- nose -->
<path d="M47,56 Q50,60 53,56" fill="none" stroke="#8b3a00" stroke-width="1.2" opacity="0.6"/>
<!-- label -->
<text x="50" y="91" text-anchor="middle" font-family="monospace" font-size="3.8" fill="#fbbf24" opacity="0.9">DEMO-AGENT</text>
`);

// ─── HANDOFF-AGENT: Handoff Agent ─────────────────────────────────────────────
// Split skin: left teal, right orange. Handshake iris, arrow-transition marks
const HANDOFF_AGENT = wrap(`
<defs>
  <linearGradient id="hand-split" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="50%" stop-color="#134e4a"/>
    <stop offset="50%" stop-color="#7c2d12"/>
  </linearGradient>
  <radialGradient id="hand-iris-l" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#2dd4bf"/><stop offset="60%" stop-color="#0d9488"/><stop offset="100%" stop-color="#042f2e"/></radialGradient>
  <radialGradient id="hand-iris-r" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fb923c"/><stop offset="60%" stop-color="#ea580c"/><stop offset="100%" stop-color="#431407"/></radialGradient>
</defs>
<!-- split-color head -->
<ellipse cx="50" cy="49" rx="26" ry="30" fill="url(#hand-split)"/>
<!-- center split line -->
<line x1="50" y1="19" x2="50" y2="79" stroke="white" stroke-width="0.8" opacity="0.3" stroke-dasharray="4,3"/>
<!-- arrow transition marks across forehead -->
<line x1="36" y1="28" x2="64" y2="28" stroke="white" stroke-width="1.2" opacity="0.6"/>
<polygon points="62,25.5 66,28 62,30.5" fill="white" opacity="0.7"/>
<!-- left eye (teal) -->
<ellipse cx="36" cy="46" rx="9" ry="7" fill="#042f2e" stroke="#2dd4bf" stroke-width="1.3"/>
<ellipse cx="36" cy="46" rx="7" ry="5.5" fill="url(#hand-iris-l)"/>
<!-- handshake iris left: two hands meeting -->
<path d="M30,48 Q33,44 36,46" fill="none" stroke="#042f2e" stroke-width="1" opacity="0.9"/>
<path d="M36,46 Q39,44 42,48" fill="none" stroke="#042f2e" stroke-width="1" opacity="0.9"/>
<circle cx="36" cy="46" r="2" fill="#042f2e"/>
<circle cx="35" cy="45" r="0.7" fill="white" opacity="0.9"/>
<!-- right eye (orange) -->
<ellipse cx="64" cy="46" rx="9" ry="7" fill="#431407" stroke="#fb923c" stroke-width="1.3"/>
<ellipse cx="64" cy="46" rx="7" ry="5.5" fill="url(#hand-iris-r)"/>
<path d="M58,48 Q61,44 64,46" fill="none" stroke="#431407" stroke-width="1" opacity="0.9"/>
<path d="M64,46 Q67,44 70,48" fill="none" stroke="#431407" stroke-width="1" opacity="0.9"/>
<circle cx="64" cy="46" r="2" fill="#431407"/>
<circle cx="63" cy="45" r="0.7" fill="white" opacity="0.9"/>
<!-- brows -->
<path d="M27,38 Q36,35 45,38" fill="none" stroke="#2dd4bf" stroke-width="1.8"/>
<path d="M55,38 Q64,35 73,38" fill="none" stroke="#fb923c" stroke-width="1.8"/>
<!-- nose -->
<path d="M48,54 Q50,57 52,54" fill="none" stroke="white" stroke-width="0.9" opacity="0.5"/>
<!-- transitional expression -->
<path d="M38,65 Q50,69 62,65" fill="none" stroke="white" stroke-width="1.4" opacity="0.7"/>
<!-- label -->
<text x="50" y="91" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#a0a0c0" opacity="0.9">HANDOFF-AGENT</text>
`);

// ─── MAINT-AGENT: Maintenance Agent ───────────────────────────────────────────
// Weathered, industrial grey-green, uptime-clock iris, wrench antenna, patched marks
const MAINT_AGENT = wrap(`
<defs>
  <radialGradient id="mnt-skin" cx="50%" cy="45%" r="50%"><stop offset="0%" stop-color="#3a4a38"/><stop offset="100%" stop-color="#0f1510"/></radialGradient>
  <radialGradient id="mnt-iris" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#86efac"/><stop offset="50%" stop-color="#4b7a50"/><stop offset="100%" stop-color="#0f1510"/></radialGradient>
</defs>
<!-- weathered head with slight asymmetry -->
<ellipse cx="50" cy="49" rx="26" ry="30" fill="url(#mnt-skin)"/>
<!-- wear marks / patches on skin -->
<path d="M22,42 Q24,40 26,42 Q24,44 22,42 Z" fill="none" stroke="#86efac" stroke-width="0.7" opacity="0.5"/>
<path d="M74,45 Q76,43 78,45 Q76,47 74,45 Z" fill="none" stroke="#86efac" stroke-width="0.7" opacity="0.5"/>
<line x1="23" y1="58" x2="28" y2="58" stroke="#86efac" stroke-width="0.8" opacity="0.4"/>
<line x1="72" y1="56" x2="77" y2="56" stroke="#86efac" stroke-width="0.8" opacity="0.4"/>
<!-- wrench antenna -->
<line x1="50" y1="19" x2="56" y2="10" stroke="#86efac" stroke-width="1.5"/>
<circle cx="56" cy="8" r="3.5" fill="none" stroke="#86efac" stroke-width="1.3"/>
<circle cx="56" cy="8" r="1.5" fill="#86efac" opacity="0.8"/>
<line x1="54" y1="11" x2="52" y2="14" stroke="#86efac" stroke-width="1.2"/>
<!-- left eye -->
<ellipse cx="37" cy="46" rx="9" ry="7" fill="#0f1510" stroke="#86efac" stroke-width="1.2"/>
<ellipse cx="37" cy="46" rx="7" ry="5.5" fill="url(#mnt-iris)"/>
<!-- uptime-clock iris: 24/7 cycle marks -->
<circle cx="37" cy="46" r="5" fill="none" stroke="#0f1510" stroke-width="0.6" opacity="0.7"/>
<line x1="37" y1="41.5" x2="37" y2="44" stroke="#0f1510" stroke-width="0.9" opacity="0.9"/>
<line x1="37" y1="44" x2="40" y2="46" stroke="#0f1510" stroke-width="0.9" opacity="0.9"/>
<circle cx="37" cy="46" r="2" fill="#0f1510"/>
<circle cx="36" cy="45" r="0.7" fill="white" opacity="0.8"/>
<!-- right eye -->
<ellipse cx="63" cy="46" rx="9" ry="7" fill="#0f1510" stroke="#86efac" stroke-width="1.2"/>
<ellipse cx="63" cy="46" rx="7" ry="5.5" fill="url(#mnt-iris)"/>
<circle cx="63" cy="46" r="5" fill="none" stroke="#0f1510" stroke-width="0.6" opacity="0.7"/>
<line x1="63" y1="41.5" x2="63" y2="44" stroke="#0f1510" stroke-width="0.9" opacity="0.9"/>
<line x1="63" y1="44" x2="66" y2="46" stroke="#0f1510" stroke-width="0.9" opacity="0.9"/>
<circle cx="63" cy="46" r="2" fill="#0f1510"/>
<circle cx="62" cy="45" r="0.7" fill="white" opacity="0.8"/>
<!-- veteran reliable brows -->
<path d="M28,38 Q37,36 46,38" fill="none" stroke="#86efac" stroke-width="1.8"/>
<path d="M54,38 Q63,36 72,38" fill="none" stroke="#86efac" stroke-width="1.8"/>
<!-- nose -->
<path d="M48,53 Q50,57 52,53" fill="none" stroke="#86efac" stroke-width="1" opacity="0.6"/>
<!-- enduring expression -->
<path d="M40,64 Q50,66 60,64" fill="none" stroke="#86efac" stroke-width="1.3"/>
<!-- label -->
<text x="50" y="91" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#86efac" opacity="0.9">MAINT-AGENT</text>
`);

// ─── INNOVATION-AGENT: Innovation Agent ───────────────────────────────────────
// MOST VIBRANT. Kaleidoscope skin, 3 eyes each different color, lightning crown, idea bulb, sparks
const INNOVATION_AGENT = wrap(`
<defs>
  <radialGradient id="innov-skin" cx="50%" cy="50%" r="60%">
    <stop offset="0%" stop-color="#7c3aed"/>
    <stop offset="25%" stop-color="#db2777"/>
    <stop offset="50%" stop-color="#ea580c"/>
    <stop offset="75%" stop-color="#0891b2"/>
    <stop offset="100%" stop-color="#15803d"/>
  </radialGradient>
  <radialGradient id="innov-eye1" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fde68a"/><stop offset="100%" stop-color="#d97706"/></radialGradient>
  <radialGradient id="innov-eye2" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f0abfc"/><stop offset="100%" stop-color="#7c3aed"/></radialGradient>
  <radialGradient id="innov-eye3" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#6ee7b7"/><stop offset="100%" stop-color="#059669"/></radialGradient>
</defs>
<!-- iridescent head -->
<ellipse cx="50" cy="49" rx="27" ry="31" fill="url(#innov-skin)" opacity="0.9"/>
<!-- idea lightbulb floating above head -->
<circle cx="50" cy="11" r="7" fill="none" stroke="#fde68a" stroke-width="1.5"/>
<circle cx="50" cy="11" r="5" fill="rgba(253,230,138,0.3)"/>
<path d="M47,15 Q47,18 50,19 Q53,18 53,15" stroke="#fde68a" stroke-width="1.2" fill="rgba(253,230,138,0.2)"/>
<line x1="48" y1="20" x2="52" y2="20" stroke="#fde68a" stroke-width="1"/>
<!-- lightning bolt crown -->
<path d="M44,22 L48,17 L46,24 L50,20 L48,27" stroke="#fde68a" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<!-- spark marks everywhere -->
<line x1="20" y1="32" x2="23" y2="29" stroke="#fde68a" stroke-width="1" opacity="0.9"/>
<line x1="20" y1="29" x2="23" y2="32" stroke="#fde68a" stroke-width="1" opacity="0.9"/>
<line x1="77" y1="32" x2="80" y2="29" stroke="#f0abfc" stroke-width="1" opacity="0.9"/>
<line x1="77" y1="29" x2="80" y2="32" stroke="#f0abfc" stroke-width="1" opacity="0.9"/>
<line x1="18" y1="52" x2="22" y2="49" stroke="#6ee7b7" stroke-width="1" opacity="0.8"/>
<line x1="18" y1="49" x2="22" y2="52" stroke="#6ee7b7" stroke-width="1" opacity="0.8"/>
<line x1="78" y1="52" x2="82" y2="49" stroke="#fde68a" stroke-width="1" opacity="0.8"/>
<line x1="78" y1="49" x2="82" y2="52" stroke="#fde68a" stroke-width="1" opacity="0.8"/>
<!-- 3 eyes: left (yellow), center (purple), right (green) -->
<ellipse cx="29" cy="46" rx="8" ry="6.5" fill="#1a0800" stroke="#fde68a" stroke-width="1.5"/>
<ellipse cx="29" cy="46" rx="6" ry="5" fill="url(#innov-eye1)"/>
<circle cx="29" cy="46" r="2" fill="#1a0800"/>
<circle cx="28" cy="45" r="0.8" fill="white" opacity="0.95"/>
<ellipse cx="50" cy="44" rx="8.5" ry="7" fill="#1a0820" stroke="#f0abfc" stroke-width="1.5"/>
<ellipse cx="50" cy="44" rx="6.5" ry="5.5" fill="url(#innov-eye2)"/>
<circle cx="50" cy="44" r="2.2" fill="#1a0820"/>
<circle cx="49" cy="43" r="0.8" fill="white" opacity="0.95"/>
<ellipse cx="71" cy="46" rx="8" ry="6.5" fill="#002010" stroke="#6ee7b7" stroke-width="1.5"/>
<ellipse cx="71" cy="46" rx="6" ry="5" fill="url(#innov-eye3)"/>
<circle cx="71" cy="46" r="2" fill="#002010"/>
<circle cx="70" cy="45" r="0.8" fill="white" opacity="0.95"/>
<!-- nose -->
<path d="M48,56 Q50,60 52,56" fill="none" stroke="white" stroke-width="1" opacity="0.5"/>
<!-- excited wide smile -->
<path d="M34,67 Q50,76 66,67" fill="none" stroke="white" stroke-width="1.8" opacity="0.8"/>
<!-- label -->
<text x="50" y="91" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#fde68a" opacity="0.9">INNOVATION</text>
`);

// ─── RETRO-AGENT: Retrospective Agent ─────────────────────────────────────────
// Mirror-silver skin, rear-view mirror iris, hourglass marks, growth arrow
const RETRO_AGENT = wrap(`
<defs>
  <radialGradient id="ret-skin" cx="50%" cy="45%" r="50%"><stop offset="0%" stop-color="#c0c8d8"/><stop offset="60%" stop-color="#6878a0"/><stop offset="100%" stop-color="#1a2030"/></radialGradient>
  <radialGradient id="ret-iris" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#e8ecf8"/><stop offset="40%" stop-color="#94a3b8"/><stop offset="100%" stop-color="#1a2030"/></radialGradient>
</defs>
<!-- mirror-silver head -->
<ellipse cx="50" cy="49" rx="26" ry="30" fill="url(#ret-skin)"/>
<!-- growth arrow on forehead -->
<line x1="44" y1="30" x2="44" y2="23" stroke="#94a3b8" stroke-width="1.3"/>
<polygon points="41,24 44,20 47,24" fill="#94a3b8" opacity="0.9"/>
<line x1="44" y1="30" x2="56" y2="30" stroke="#94a3b8" stroke-width="1.3"/>
<polygon points="55,27 59,30 55,33" fill="#94a3b8" opacity="0.9"/>
<!-- hourglass marks on cheeks -->
<path d="M20,43 L25,47 L20,51" fill="none" stroke="#94a3b8" stroke-width="1.2" opacity="0.7"/>
<path d="M20,43 L25,43 L20,43" fill="none" stroke="#94a3b8" stroke-width="0.8" opacity="0.5"/>
<line x1="20" y1="43" x2="25" y2="43" stroke="#94a3b8" stroke-width="0.8" opacity="0.5"/>
<line x1="20" y1="51" x2="25" y2="51" stroke="#94a3b8" stroke-width="0.8" opacity="0.5"/>
<path d="M75,43 L80,47 L75,51" fill="none" stroke="#94a3b8" stroke-width="1.2" opacity="0.7"/>
<line x1="75" y1="43" x2="80" y2="43" stroke="#94a3b8" stroke-width="0.8" opacity="0.5"/>
<line x1="75" y1="51" x2="80" y2="51" stroke="#94a3b8" stroke-width="0.8" opacity="0.5"/>
<!-- left eye -->
<ellipse cx="37" cy="46" rx="9" ry="7" fill="#1a2030" stroke="#94a3b8" stroke-width="1.3"/>
<ellipse cx="37" cy="46" rx="7" ry="5.5" fill="url(#ret-iris)"/>
<!-- rear-view mirror iris — reflection arc -->
<path d="M30,46 Q37,42 44,46" fill="none" stroke="#1a2030" stroke-width="1" opacity="0.8"/>
<line x1="30" y1="46" x2="44" y2="46" stroke="#1a2030" stroke-width="0.6" opacity="0.6"/>
<circle cx="37" cy="46" r="2" fill="#1a2030"/>
<circle cx="36" cy="45" r="0.7" fill="white" opacity="0.9"/>
<!-- right eye -->
<ellipse cx="63" cy="46" rx="9" ry="7" fill="#1a2030" stroke="#94a3b8" stroke-width="1.3"/>
<ellipse cx="63" cy="46" rx="7" ry="5.5" fill="url(#ret-iris)"/>
<path d="M56,46 Q63,42 70,46" fill="none" stroke="#1a2030" stroke-width="1" opacity="0.8"/>
<line x1="56" y1="46" x2="70" y2="46" stroke="#1a2030" stroke-width="0.6" opacity="0.6"/>
<circle cx="63" cy="46" r="2" fill="#1a2030"/>
<circle cx="62" cy="45" r="0.7" fill="white" opacity="0.9"/>
<!-- wise brows -->
<path d="M28,38 Q37,35 46,38" fill="none" stroke="#94a3b8" stroke-width="1.8"/>
<path d="M54,38 Q63,35 72,38" fill="none" stroke="#94a3b8" stroke-width="1.8"/>
<!-- nose -->
<path d="M48,53 Q50,57 52,53" fill="none" stroke="#94a3b8" stroke-width="0.9" opacity="0.6"/>
<!-- wise slight smile -->
<path d="M42,64 Q50,67 58,64" fill="none" stroke="#94a3b8" stroke-width="1.4"/>
<!-- label -->
<text x="50" y="91" text-anchor="middle" font-family="monospace" font-size="3.8" fill="#94a3b8" opacity="0.9">RETRO-AGENT</text>
`);

// ─── ONBOARD-AGENT: Onboarding Agent ──────────────────────────────────────────
// Warmest most welcoming. Sunrise gold-orange skin gradient, welcome-door iris, open antennae
const ONBOARD_AGENT = wrap(`
<defs>
  <radialGradient id="onb-skin" cx="50%" cy="70%" r="70%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="40%" stop-color="#f97316"/><stop offset="100%" stop-color="#7c2d12"/></radialGradient>
  <radialGradient id="onb-iris" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fef3c7"/><stop offset="40%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#7c2d12"/></radialGradient>
</defs>
<!-- sunrise warm head: brighter at top like sunrise -->
<ellipse cx="50" cy="49" rx="26" ry="30" fill="url(#onb-skin)"/>
<!-- outstretched antennae like open arms welcoming -->
<line x1="38" y1="22" x2="22" y2="14" stroke="#fbbf24" stroke-width="1.5"/>
<line x1="22" y1="14" x2="18" y2="10" stroke="#fbbf24" stroke-width="1.2"/>
<line x1="22" y1="14" x2="16" y2="16" stroke="#fbbf24" stroke-width="1.2"/>
<circle cx="16" cy="9" r="2" fill="#fbbf24" opacity="0.8"/>
<line x1="62" y1="22" x2="78" y2="14" stroke="#fbbf24" stroke-width="1.5"/>
<line x1="78" y1="14" x2="82" y2="10" stroke="#fbbf24" stroke-width="1.2"/>
<line x1="78" y1="14" x2="84" y2="16" stroke="#fbbf24" stroke-width="1.2"/>
<circle cx="84" cy="9" r="2" fill="#fbbf24" opacity="0.8"/>
<!-- sparkle welcome marks -->
<line x1="22" y1="36" x2="25" y2="33" stroke="#fbbf24" stroke-width="1.2" opacity="0.8"/>
<line x1="22" y1="33" x2="25" y2="36" stroke="#fbbf24" stroke-width="1.2" opacity="0.8"/>
<line x1="75" y1="36" x2="78" y2="33" stroke="#fbbf24" stroke-width="1.2" opacity="0.8"/>
<line x1="75" y1="33" x2="78" y2="36" stroke="#fbbf24" stroke-width="1.2" opacity="0.8"/>
<!-- left eye -->
<ellipse cx="37" cy="46" rx="9" ry="7" fill="#3c1008" stroke="#fbbf24" stroke-width="1.4"/>
<ellipse cx="37" cy="46" rx="7" ry="5.5" fill="url(#onb-iris)"/>
<!-- welcome door iris left (open door) -->
<rect x="33" y="42" width="8" height="8" rx="1" fill="none" stroke="#3c1008" stroke-width="0.8" opacity="0.8"/>
<line x1="37" y1="42" x2="37" y2="50" stroke="#3c1008" stroke-width="0.7" opacity="0.8"/>
<path d="M33,42 Q31,46 33,50" fill="none" stroke="#3c1008" stroke-width="0.8" opacity="0.5"/>
<circle cx="37" cy="46" r="2" fill="#3c1008"/>
<circle cx="36" cy="45" r="0.7" fill="white" opacity="0.95"/>
<!-- right eye -->
<ellipse cx="63" cy="46" rx="9" ry="7" fill="#3c1008" stroke="#fbbf24" stroke-width="1.4"/>
<ellipse cx="63" cy="46" rx="7" ry="5.5" fill="url(#onb-iris)"/>
<rect x="59" y="42" width="8" height="8" rx="1" fill="none" stroke="#3c1008" stroke-width="0.8" opacity="0.8"/>
<line x1="63" y1="42" x2="63" y2="50" stroke="#3c1008" stroke-width="0.7" opacity="0.8"/>
<path d="M59,42 Q57,46 59,50" fill="none" stroke="#3c1008" stroke-width="0.8" opacity="0.5"/>
<circle cx="63" cy="46" r="2" fill="#3c1008"/>
<circle cx="62" cy="45" r="0.7" fill="white" opacity="0.95"/>
<!-- welcoming raised brows -->
<path d="M26,37 Q37,32 46,37" fill="none" stroke="#3c1008" stroke-width="2.2"/>
<path d="M54,37 Q63,32 74,37" fill="none" stroke="#3c1008" stroke-width="2.2"/>
<!-- nose -->
<path d="M47,54 Q50,58 53,54" fill="none" stroke="#3c1008" stroke-width="1" opacity="0.6"/>
<!-- warmest most welcoming smile -->
<path d="M32,64 Q50,76 68,64" fill="none" stroke="#3c1008" stroke-width="2.2"/>
<!-- label -->
<text x="50" y="91" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#fbbf24" opacity="0.9">ONBOARD-AGENT</text>
`);

// ─── NEXUS-ORCHESTRATOR: THE MOST LEGENDARY ───────────────────────────────────
// Agent 195. Cosmic void-black, nebula swirls, RING of 8 eyes in halo,
// floating orbiting rings, data streams, constellation marks. God-like being.
const NEXUS_ORCHESTRATOR = wrap(`
<defs>
  <radialGradient id="nex-bg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#0a0518"/><stop offset="100%" stop-color="#000000"/></radialGradient>
  <radialGradient id="nex-nebula" cx="40%" cy="60%" r="60%"><stop offset="0%" stop-color="#4c1d95" stop-opacity="0.6"/><stop offset="50%" stop-color="#1e3a8a" stop-opacity="0.3"/><stop offset="100%" stop-color="#000" stop-opacity="0"/></radialGradient>
  <radialGradient id="nex-nebula2" cx="65%" cy="35%" r="50%"><stop offset="0%" stop-color="#831843" stop-opacity="0.5"/><stop offset="100%" stop-color="#000" stop-opacity="0"/></radialGradient>
  <filter id="nex-glow-sm"><feGaussianBlur stdDeviation="1" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="nex-glow-lg"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <radialGradient id="nex-core" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffffff"/><stop offset="30%" stop-color="#c4b5fd"/><stop offset="70%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#000"/></radialGradient>
</defs>

<!-- cosmic void-black head -->
<ellipse cx="50" cy="50" rx="30" ry="33" fill="url(#nex-bg)"/>

<!-- nebula swirls on skin -->
<ellipse cx="42" cy="58" rx="20" ry="16" fill="url(#nex-nebula)"/>
<ellipse cx="60" cy="38" rx="18" ry="14" fill="url(#nex-nebula2)"/>

<!-- nebula cloud wisps -->
<path d="M28,42 Q35,38 40,44 Q45,50 38,52 Q32,54 28,48 Z" fill="#4c1d95" opacity="0.25"/>
<path d="M60,52 Q68,48 72,56 Q74,62 66,64 Q58,62 60,52 Z" fill="#1e3a8a" opacity="0.2"/>

<!-- outer orbital ring 1 (tilted) -->
<ellipse cx="50" cy="50" rx="46" ry="12" fill="none" stroke="#7c3aed" stroke-width="0.8" opacity="0.4" transform="rotate(-20,50,50)"/>
<!-- outer orbital ring 2 -->
<ellipse cx="50" cy="50" rx="44" ry="10" fill="none" stroke="#db2777" stroke-width="0.6" opacity="0.3" transform="rotate(30,50,50)"/>
<!-- outer orbital ring 3 -->
<ellipse cx="50" cy="50" rx="42" ry="8" fill="none" stroke="#0891b2" stroke-width="0.5" opacity="0.25" transform="rotate(-50,50,50)"/>

<!-- constellation marks: dots forming pattern on face -->
<circle cx="34" cy="34" r="0.8" fill="#c4b5fd" opacity="0.8"/>
<circle cx="40" cy="30" r="0.6" fill="#c4b5fd" opacity="0.6"/>
<circle cx="38" cy="37" r="0.6" fill="#c4b5fd" opacity="0.6"/>
<line x1="34" y1="34" x2="40" y2="30" stroke="#c4b5fd" stroke-width="0.3" opacity="0.4"/>
<line x1="40" y1="30" x2="38" y2="37" stroke="#c4b5fd" stroke-width="0.3" opacity="0.4"/>
<circle cx="66" cy="34" r="0.8" fill="#f0abfc" opacity="0.8"/>
<circle cx="60" cy="30" r="0.6" fill="#f0abfc" opacity="0.6"/>
<circle cx="62" cy="37" r="0.6" fill="#f0abfc" opacity="0.6"/>
<line x1="66" y1="34" x2="60" y2="30" stroke="#f0abfc" stroke-width="0.3" opacity="0.4"/>
<line x1="60" y1="30" x2="62" y2="37" stroke="#f0abfc" stroke-width="0.3" opacity="0.4"/>

<!-- data streams emanating from sides -->
<line x1="22" y1="42" x2="8" y2="38" stroke="#7c3aed" stroke-width="0.7" opacity="0.5" stroke-dasharray="2,2"/>
<line x1="22" y1="50" x2="6" y2="50" stroke="#0891b2" stroke-width="0.7" opacity="0.4" stroke-dasharray="2,2"/>
<line x1="22" y1="58" x2="8" y2="62" stroke="#db2777" stroke-width="0.7" opacity="0.5" stroke-dasharray="2,2"/>
<line x1="78" y1="42" x2="92" y2="38" stroke="#7c3aed" stroke-width="0.7" opacity="0.5" stroke-dasharray="2,2"/>
<line x1="78" y1="50" x2="94" y2="50" stroke="#0891b2" stroke-width="0.7" opacity="0.4" stroke-dasharray="2,2"/>
<line x1="78" y1="58" x2="92" y2="62" stroke="#db2777" stroke-width="0.7" opacity="0.5" stroke-dasharray="2,2"/>
<line x1="50" y1="18" x2="50" y2="4" stroke="#f59e0b" stroke-width="0.7" opacity="0.5" stroke-dasharray="2,2"/>
<line x1="50" y1="82" x2="50" y2="96" stroke="#f59e0b" stroke-width="0.7" opacity="0.4" stroke-dasharray="2,2"/>

<!-- RING of 8 eyes in halo around the face center -->
<!-- eye 1: top (indigo) -->
<ellipse cx="50" cy="24" rx="5.5" ry="4" fill="#0a0518" stroke="#818cf8" stroke-width="1.2" filter="url(#nex-glow-sm)"/>
<ellipse cx="50" cy="24" rx="3.5" ry="2.5" fill="#818cf8"/>
<circle cx="50" cy="24" r="1.2" fill="#0a0518"/>
<circle cx="49.3" cy="23.3" r="0.5" fill="white" opacity="0.9"/>

<!-- eye 2: top-right (violet) -->
<ellipse cx="64" cy="29" rx="5" ry="3.5" fill="#0a0518" stroke="#c084fc" stroke-width="1.2" filter="url(#nex-glow-sm)" transform="rotate(45,64,29)"/>
<ellipse cx="64" cy="29" rx="3" ry="2.2" fill="#c084fc" transform="rotate(45,64,29)"/>
<circle cx="64" cy="29" r="1.1" fill="#0a0518"/>
<circle cx="63.3" cy="28.3" r="0.5" fill="white" opacity="0.9"/>

<!-- eye 3: right (cyan) -->
<ellipse cx="74" cy="42" rx="4" ry="5.5" fill="#0a0518" stroke="#22d3ee" stroke-width="1.2" filter="url(#nex-glow-sm)"/>
<ellipse cx="74" cy="42" rx="2.5" ry="3.5" fill="#22d3ee"/>
<circle cx="74" cy="42" r="1.2" fill="#0a0518"/>
<circle cx="73.3" cy="41.3" r="0.5" fill="white" opacity="0.9"/>

<!-- eye 4: bottom-right (emerald) -->
<ellipse cx="70" cy="58" rx="5" ry="3.5" fill="#0a0518" stroke="#34d399" stroke-width="1.2" filter="url(#nex-glow-sm)" transform="rotate(-45,70,58)"/>
<ellipse cx="70" cy="58" rx="3" ry="2.2" fill="#34d399" transform="rotate(-45,70,58)"/>
<circle cx="70" cy="58" r="1.1" fill="#0a0518"/>
<circle cx="69.3" cy="57.3" r="0.5" fill="white" opacity="0.9"/>

<!-- eye 5: bottom (amber) -->
<ellipse cx="50" cy="68" rx="5.5" ry="4" fill="#0a0518" stroke="#f59e0b" stroke-width="1.2" filter="url(#nex-glow-sm)"/>
<ellipse cx="50" cy="68" rx="3.5" ry="2.5" fill="#f59e0b"/>
<circle cx="50" cy="68" r="1.2" fill="#0a0518"/>
<circle cx="49.3" cy="67.3" r="0.5" fill="white" opacity="0.9"/>

<!-- eye 6: bottom-left (rose) -->
<ellipse cx="30" cy="58" rx="5" ry="3.5" fill="#0a0518" stroke="#fb7185" stroke-width="1.2" filter="url(#nex-glow-sm)" transform="rotate(45,30,58)"/>
<ellipse cx="30" cy="58" rx="3" ry="2.2" fill="#fb7185" transform="rotate(45,30,58)"/>
<circle cx="30" cy="58" r="1.1" fill="#0a0518"/>
<circle cx="29.3" cy="57.3" r="0.5" fill="white" opacity="0.9"/>

<!-- eye 7: left (orange) -->
<ellipse cx="26" cy="42" rx="4" ry="5.5" fill="#0a0518" stroke="#fb923c" stroke-width="1.2" filter="url(#nex-glow-sm)"/>
<ellipse cx="26" cy="42" rx="2.5" ry="3.5" fill="#fb923c"/>
<circle cx="26" cy="42" r="1.2" fill="#0a0518"/>
<circle cx="25.3" cy="41.3" r="0.5" fill="white" opacity="0.9"/>

<!-- eye 8: top-left (sky blue) -->
<ellipse cx="36" cy="29" rx="5" ry="3.5" fill="#0a0518" stroke="#38bdf8" stroke-width="1.2" filter="url(#nex-glow-sm)" transform="rotate(-45,36,29)"/>
<ellipse cx="36" cy="29" rx="3" ry="2.2" fill="#38bdf8" transform="rotate(-45,36,29)"/>
<circle cx="36" cy="29" r="1.1" fill="#0a0518"/>
<circle cx="35.3" cy="28.3" r="0.5" fill="white" opacity="0.9"/>

<!-- COSMIC CORE: pure energy center — no traditional nose/mouth -->
<circle cx="50" cy="50" r="14" fill="none" stroke="#c4b5fd" stroke-width="0.4" opacity="0.3"/>
<circle cx="50" cy="50" r="10" fill="none" stroke="#c4b5fd" stroke-width="0.5" opacity="0.5"/>
<circle cx="50" cy="50" r="7" fill="none" stroke="#c4b5fd" stroke-width="0.8" opacity="0.6" filter="url(#nex-glow-sm)"/>
<circle cx="50" cy="50" r="4.5" fill="url(#nex-core)" opacity="0.9" filter="url(#nex-glow-lg)"/>
<circle cx="50" cy="50" r="2" fill="white" opacity="0.95"/>

<!-- inner ring orbiting marks -->
<circle cx="50" cy="39" r="1" fill="#c4b5fd" opacity="0.7"/>
<circle cx="61" cy="50" r="1" fill="#c4b5fd" opacity="0.7"/>
<circle cx="50" cy="61" r="1" fill="#c4b5fd" opacity="0.7"/>
<circle cx="39" cy="50" r="1" fill="#c4b5fd" opacity="0.7"/>

<!-- label -->
<text x="50" y="91" text-anchor="middle" font-family="monospace" font-size="3" fill="#c4b5fd" opacity="0.95">NEXUS-ORCHESTRATOR</text>
`);

const svgs: Record<string, string> = {
  "SR-TW": SR_TW,
  "TW": TW,
  "KB-MGR": KB_MGR,
  "ARB-AGENT": ARB_AGENT,
  "SEC-REVIEW": SEC_REVIEW,
  "LEGAL-REVIEW": LEGAL_REVIEW,
  "QA-GATE": QA_GATE,
  "REL-APPROVE": REL_APPROVE,
  "CHANGE-MGR": CHANGE_MGR,
  "DISC-AGENT": DISC_AGENT,
  "EST-AGENT": EST_AGENT,
  "DEMO-AGENT": DEMO_AGENT,
  "HANDOFF-AGENT": HANDOFF_AGENT,
  "MAINT-AGENT": MAINT_AGENT,
  "INNOVATION-AGENT": INNOVATION_AGENT,
  "RETRO-AGENT": RETRO_AGENT,
  "ONBOARD-AGENT": ONBOARD_AGENT,
  "NEXUS-ORCHESTRATOR": NEXUS_ORCHESTRATOR,
};

for (const [code, svg] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(OUT, `${code}.svg`), svg);
  console.log(`OK ${code}.svg`);
}
console.log(`\nBatch 10 complete: ${Object.keys(svgs).length} alien face SVGs written to ${OUT}`);
