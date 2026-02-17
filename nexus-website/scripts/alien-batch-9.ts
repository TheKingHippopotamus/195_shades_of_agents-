import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUT = path.resolve(__dirname, "../public/brand/avatars/agents");

function wrap(body: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200"><defs><radialGradient id="bg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#1a1f3a"/><stop offset="100%" stop-color="#030108"/></radialGradient></defs><rect width="100" height="100" rx="18" fill="url(#bg)"/>${body}</svg>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// DEPT 14: LEGAL — stern, formal, precise (navy/gold #EAB308 accent)
// Face: angular heads, scales-of-justice iris, gavel marks, imposing gaze
// ─────────────────────────────────────────────────────────────────────────────

// VP-LEGAL: Imposing formal face, deep navy skin, scales-of-justice iris
const VP_LEGAL = wrap(`
  <!-- Deep navy head — wide authoritative shape -->
  <ellipse cx="50" cy="44" rx="28" ry="30" fill="#0d1a3a" stroke="#EAB308" stroke-width="1.8"/>
  <!-- Brow ridge — heavy, commanding -->
  <path d="M22,36 Q50,28 78,36" fill="#102040" stroke="#EAB308" stroke-width="1.2"/>
  <!-- Left eye socket -->
  <ellipse cx="36" cy="44" rx="9" ry="7" fill="#060e22" stroke="#EAB308" stroke-width="1.2"/>
  <!-- Right eye socket -->
  <ellipse cx="64" cy="44" rx="9" ry="7" fill="#060e22" stroke="#EAB308" stroke-width="1.2"/>
  <!-- Left iris: scales of justice (beam + two pans) -->
  <line x1="36" y1="42" x2="36" y2="46" stroke="#EAB308" stroke-width="0.8"/>
  <line x1="31" y1="42" x2="41" y2="42" stroke="#EAB308" stroke-width="0.7"/>
  <path d="M31,42 L31,45 Q33,47 36,45" stroke="#EAB308" stroke-width="0.6" fill="rgba(234,179,8,0.15)"/>
  <path d="M41,42 L41,45 Q39,47 36,45" stroke="#EAB308" stroke-width="0.6" fill="rgba(234,179,8,0.15)"/>
  <circle cx="36" cy="44" r="1" fill="#EAB308" opacity="0.9"/>
  <!-- Right iris: scales of justice -->
  <line x1="64" y1="42" x2="64" y2="46" stroke="#EAB308" stroke-width="0.8"/>
  <line x1="59" y1="42" x2="69" y2="42" stroke="#EAB308" stroke-width="0.7"/>
  <path d="M59,42 L59,45 Q61,47 64,45" stroke="#EAB308" stroke-width="0.6" fill="rgba(234,179,8,0.15)"/>
  <path d="M69,42 L69,45 Q67,47 64,45" stroke="#EAB308" stroke-width="0.6" fill="rgba(234,179,8,0.15)"/>
  <circle cx="64" cy="44" r="1" fill="#EAB308" opacity="0.9"/>
  <!-- Gavel marks on forehead: 3 horizontal strikes -->
  <line x1="40" y1="32" x2="60" y2="32" stroke="#EAB308" stroke-width="1.2" opacity="0.7"/>
  <line x1="43" y1="30" x2="57" y2="30" stroke="#EAB308" stroke-width="0.8" opacity="0.5"/>
  <line x1="46" y1="28" x2="54" y2="28" stroke="#EAB308" stroke-width="0.6" opacity="0.35"/>
  <!-- Nose ridge -->
  <path d="M47,50 L50,56 L53,50" stroke="#EAB308" stroke-width="0.8" fill="none" opacity="0.6"/>
  <!-- Mouth: thin stern line -->
  <path d="M38,62 Q50,60 62,62" stroke="#EAB308" stroke-width="1.2" fill="none"/>
  <!-- Jaw marks: authority lines -->
  <line x1="22" y1="52" x2="25" y2="58" stroke="#EAB308" stroke-width="0.8" opacity="0.5"/>
  <line x1="78" y1="52" x2="75" y2="58" stroke="#EAB308" stroke-width="0.8" opacity="0.5"/>
  <!-- Name label -->
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="4" fill="#EAB308" opacity="0.9">VP-LEGAL</text>
`);

// CONTRACTS: Rigid precise oval, dark blue-grey, contract-paragraph iris, red pen marks
const CONTRACTS = wrap(`
  <!-- Dark blue-grey head — precise oval -->
  <ellipse cx="50" cy="46" rx="24" ry="27" fill="#0e1525" stroke="#EAB308" stroke-width="1.4"/>
  <!-- Brow ridge — angular -->
  <path d="M26,38 L38,34 L50,36 L62,34 L74,38" fill="none" stroke="#EAB308" stroke-width="1"/>
  <!-- Left eye -->
  <ellipse cx="38" cy="46" rx="7.5" ry="6" fill="#06090f" stroke="#EAB308" stroke-width="1"/>
  <!-- Left iris: contract paragraph lines -->
  <line x1="33" y1="44" x2="43" y2="44" stroke="#EAB308" stroke-width="0.6" opacity="0.8"/>
  <line x1="33" y1="46" x2="43" y2="46" stroke="#EAB308" stroke-width="0.6" opacity="0.6"/>
  <line x1="33" y1="48" x2="40" y2="48" stroke="#EAB308" stroke-width="0.6" opacity="0.5"/>
  <circle cx="38" cy="46" r="1.2" fill="#EAB308" opacity="0.85"/>
  <!-- Right eye -->
  <ellipse cx="62" cy="46" rx="7.5" ry="6" fill="#06090f" stroke="#EAB308" stroke-width="1"/>
  <!-- Right iris: contract paragraph lines -->
  <line x1="57" y1="44" x2="67" y2="44" stroke="#EAB308" stroke-width="0.6" opacity="0.8"/>
  <line x1="57" y1="46" x2="67" y2="46" stroke="#EAB308" stroke-width="0.6" opacity="0.6"/>
  <line x1="57" y1="48" x2="64" y2="48" stroke="#EAB308" stroke-width="0.6" opacity="0.5"/>
  <circle cx="62" cy="46" r="1.2" fill="#EAB308" opacity="0.85"/>
  <!-- Red pen marks on cheeks -->
  <line x1="26" y1="50" x2="33" y2="55" stroke="#ef4444" stroke-width="1.2" opacity="0.7"/>
  <line x1="74" y1="50" x2="67" y2="55" stroke="#ef4444" stroke-width="1.2" opacity="0.7"/>
  <!-- Nose: small vertical lines -->
  <line x1="48" y1="53" x2="48" y2="58" stroke="#EAB308" stroke-width="0.7" opacity="0.5"/>
  <line x1="52" y1="53" x2="52" y2="58" stroke="#EAB308" stroke-width="0.7" opacity="0.5"/>
  <!-- Mouth: stern compressed -->
  <path d="M40,64 Q50,63 60,64" stroke="#EAB308" stroke-width="1" fill="none"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="4" fill="#EAB308" opacity="0.9">CONTRACTS</text>
`);

// PRIVACY: Watchful midnight blue face, eye-with-lock iris, shield-lock forehead glyph
const PRIVACY = wrap(`
  <!-- Midnight blue head — watchful, slightly taller -->
  <ellipse cx="50" cy="45" rx="25" ry="29" fill="#080f28" stroke="#3b82f6" stroke-width="1.5"/>
  <!-- Forehead: shield with lock glyph -->
  <path d="M44,24 Q50,21 56,24 L57,31 Q50,35 43,31 Z" fill="none" stroke="#3b82f6" stroke-width="1.2"/>
  <rect x="47" y="27" width="6" height="5" rx="1" fill="none" stroke="#3b82f6" stroke-width="0.9"/>
  <path d="M48,27 L48,25 Q50,23 52,25 L52,27" stroke="#3b82f6" stroke-width="0.8" fill="none"/>
  <circle cx="50" cy="30" r="0.8" fill="#3b82f6" opacity="0.8"/>
  <!-- Brow ridge: narrowed watchful -->
  <path d="M25,40 Q38,36 50,38 Q62,36 75,40" fill="none" stroke="#3b82f6" stroke-width="1.1"/>
  <!-- Left eye: large watchful -->
  <ellipse cx="37" cy="48" rx="8" ry="6.5" fill="#030a1a" stroke="#3b82f6" stroke-width="1.2"/>
  <!-- Left iris: eye-with-lock (open eye + lock pupil) -->
  <ellipse cx="37" cy="48" rx="5" ry="4" fill="none" stroke="#3b82f6" stroke-width="0.7" opacity="0.6"/>
  <rect x="34.5" y="47" width="5" height="3.5" rx="0.8" fill="none" stroke="#3b82f6" stroke-width="0.7"/>
  <path d="M35.5,47 L35.5,46 Q37,44.5 38.5,46 L38.5,47" stroke="#3b82f6" stroke-width="0.6" fill="none"/>
  <circle cx="37" cy="48.5" r="0.7" fill="#3b82f6" opacity="0.9"/>
  <!-- Right eye -->
  <ellipse cx="63" cy="48" rx="8" ry="6.5" fill="#030a1a" stroke="#3b82f6" stroke-width="1.2"/>
  <ellipse cx="63" cy="48" rx="5" ry="4" fill="none" stroke="#3b82f6" stroke-width="0.7" opacity="0.6"/>
  <rect x="60.5" y="47" width="5" height="3.5" rx="0.8" fill="none" stroke="#3b82f6" stroke-width="0.7"/>
  <path d="M61.5,47 L61.5,46 Q63,44.5 64.5,46 L64.5,47" stroke="#3b82f6" stroke-width="0.6" fill="none"/>
  <circle cx="63" cy="48.5" r="0.7" fill="#3b82f6" opacity="0.9"/>
  <!-- Nose: subtle bumps -->
  <circle cx="48" cy="55" r="1" fill="none" stroke="#3b82f6" stroke-width="0.6" opacity="0.4"/>
  <circle cx="52" cy="55" r="1" fill="none" stroke="#3b82f6" stroke-width="0.6" opacity="0.4"/>
  <!-- Mouth: closed guarded -->
  <path d="M39,63 Q50,65 61,63" stroke="#3b82f6" stroke-width="0.9" fill="none"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="4" fill="#3b82f6" opacity="0.9">PRIVACY</text>
`);

// COMPLIANCE: Rigid angular face, regulation-grey, compliance-checklist iris, policy book forehead
const COMPLIANCE = wrap(`
  <!-- Regulation grey head — angular hexagonal feel -->
  <path d="M26,35 L30,20 L70,20 L74,35 L74,65 L70,76 L30,76 L26,65 Z" fill="#111825" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- Policy book forehead mark: open book icon -->
  <path d="M42,27 Q50,24 58,27" stroke="#94a3b8" stroke-width="1"/>
  <line x1="50" y1="27" x2="50" y2="33" stroke="#94a3b8" stroke-width="1"/>
  <line x1="42" y1="29" x2="50" y2="29" stroke="#94a3b8" stroke-width="0.6" opacity="0.6"/>
  <line x1="50" y1="29" x2="58" y2="29" stroke="#94a3b8" stroke-width="0.6" opacity="0.6"/>
  <line x1="42" y1="31" x2="50" y2="31" stroke="#94a3b8" stroke-width="0.6" opacity="0.5"/>
  <line x1="50" y1="31" x2="58" y2="31" stroke="#94a3b8" stroke-width="0.6" opacity="0.5"/>
  <!-- Brow: rigid straight lines -->
  <line x1="26" y1="38" x2="44" y2="38" stroke="#94a3b8" stroke-width="1.2"/>
  <line x1="56" y1="38" x2="74" y2="38" stroke="#94a3b8" stroke-width="1.2"/>
  <!-- Left eye -->
  <rect x="28" y="40" width="16" height="12" rx="2" fill="#060c18" stroke="#94a3b8" stroke-width="1"/>
  <!-- Left iris: checklist 3 lines with check marks -->
  <line x1="34" y1="43" x2="42" y2="43" stroke="#94a3b8" stroke-width="0.6"/>
  <line x1="34" y1="46" x2="42" y2="46" stroke="#94a3b8" stroke-width="0.6"/>
  <line x1="34" y1="49" x2="40" y2="49" stroke="#94a3b8" stroke-width="0.6"/>
  <path d="M30,42.5 L31.5,44 L33.5,41" stroke="#22c55e" stroke-width="0.8" fill="none"/>
  <path d="M30,45.5 L31.5,47 L33.5,44" stroke="#22c55e" stroke-width="0.8" fill="none"/>
  <circle cx="36" cy="46" r="1.2" fill="#94a3b8" opacity="0.8"/>
  <!-- Right eye -->
  <rect x="56" y="40" width="16" height="12" rx="2" fill="#060c18" stroke="#94a3b8" stroke-width="1"/>
  <line x1="62" y1="43" x2="70" y2="43" stroke="#94a3b8" stroke-width="0.6"/>
  <line x1="62" y1="46" x2="70" y2="46" stroke="#94a3b8" stroke-width="0.6"/>
  <line x1="62" y1="49" x2="68" y2="49" stroke="#94a3b8" stroke-width="0.6"/>
  <path d="M58,42.5 L59.5,44 L61.5,41" stroke="#22c55e" stroke-width="0.8" fill="none"/>
  <path d="M58,45.5 L59.5,47 L61.5,44" stroke="#22c55e" stroke-width="0.8" fill="none"/>
  <circle cx="64" cy="46" r="1.2" fill="#94a3b8" opacity="0.8"/>
  <!-- Nose: rectangular bumps -->
  <rect x="47" y="55" width="6" height="4" rx="1" fill="none" stroke="#94a3b8" stroke-width="0.7" opacity="0.5"/>
  <!-- Mouth: flat regulatory line -->
  <line x1="36" y1="64" x2="64" y2="64" stroke="#94a3b8" stroke-width="1.2"/>
  <line x1="38" y1="66" x2="62" y2="66" stroke="#94a3b8" stroke-width="0.6" opacity="0.4"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="4" fill="#94a3b8" opacity="0.9">COMPLIANCE</text>
`);

// PARALEGAL: Helpful precise, medium blue-grey, filing-folder iris, stack of papers on cheeks
const PARALEGAL = wrap(`
  <!-- Medium blue-grey head — helpful oval -->
  <ellipse cx="50" cy="46" rx="23" ry="27" fill="#0f1826" stroke="#7aa2c8" stroke-width="1.3"/>
  <!-- Brow: slightly furrowed, diligent -->
  <path d="M27,38 Q38,35 50,37 Q62,35 73,38" fill="none" stroke="#7aa2c8" stroke-width="1"/>
  <!-- Left eye -->
  <ellipse cx="37" cy="46" rx="7" ry="5.5" fill="#060d1a" stroke="#7aa2c8" stroke-width="1"/>
  <!-- Left iris: filing-folder tab icon -->
  <rect x="32" y="43" width="10" height="7" rx="1" fill="none" stroke="#7aa2c8" stroke-width="0.7"/>
  <path d="M32,43 L34,41 L37,41 L39,43" stroke="#7aa2c8" stroke-width="0.6" fill="none"/>
  <line x1="33" y1="45" x2="41" y2="45" stroke="#7aa2c8" stroke-width="0.5" opacity="0.6"/>
  <line x1="33" y1="47" x2="41" y2="47" stroke="#7aa2c8" stroke-width="0.5" opacity="0.5"/>
  <circle cx="37" cy="46" r="1" fill="#7aa2c8" opacity="0.85"/>
  <!-- Right eye -->
  <ellipse cx="63" cy="46" rx="7" ry="5.5" fill="#060d1a" stroke="#7aa2c8" stroke-width="1"/>
  <rect x="58" y="43" width="10" height="7" rx="1" fill="none" stroke="#7aa2c8" stroke-width="0.7"/>
  <path d="M58,43 L60,41 L63,41 L65,43" stroke="#7aa2c8" stroke-width="0.6" fill="none"/>
  <line x1="59" y1="45" x2="67" y2="45" stroke="#7aa2c8" stroke-width="0.5" opacity="0.6"/>
  <line x1="59" y1="47" x2="67" y2="47" stroke="#7aa2c8" stroke-width="0.5" opacity="0.5"/>
  <circle cx="63" cy="46" r="1" fill="#7aa2c8" opacity="0.85"/>
  <!-- Stack of papers marks on cheeks (left) -->
  <rect x="22" y="50" width="10" height="2.5" rx="0.5" fill="none" stroke="#7aa2c8" stroke-width="0.7" opacity="0.6"/>
  <rect x="22" y="53.5" width="10" height="2.5" rx="0.5" fill="none" stroke="#7aa2c8" stroke-width="0.7" opacity="0.5"/>
  <rect x="22" y="57" width="10" height="2.5" rx="0.5" fill="none" stroke="#7aa2c8" stroke-width="0.7" opacity="0.4"/>
  <!-- Stack of papers marks on cheeks (right) -->
  <rect x="68" y="50" width="10" height="2.5" rx="0.5" fill="none" stroke="#7aa2c8" stroke-width="0.7" opacity="0.6"/>
  <rect x="68" y="53.5" width="10" height="2.5" rx="0.5" fill="none" stroke="#7aa2c8" stroke-width="0.7" opacity="0.5"/>
  <rect x="68" y="57" width="10" height="2.5" rx="0.5" fill="none" stroke="#7aa2c8" stroke-width="0.7" opacity="0.4"/>
  <!-- Nose -->
  <path d="M48,53 L50,57 L52,53" stroke="#7aa2c8" stroke-width="0.7" fill="none" opacity="0.5"/>
  <!-- Mouth: helpful slight smile -->
  <path d="M40,63 Q50,67 60,63" stroke="#7aa2c8" stroke-width="1" fill="none"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="4" fill="#7aa2c8" opacity="0.9">PARALEGAL</text>
`);

// IP-COUNSEL: Protective face, patent-blue, copyright/patent iris, IP shield marks
const IP_COUNSEL = wrap(`
  <!-- Patent blue head — fiercely protective, slightly squared jaw -->
  <path d="M24,38 Q25,18 50,16 Q75,18 76,38 L76,62 Q75,78 50,80 Q25,78 24,62 Z" fill="#0a1530" stroke="#60a5fa" stroke-width="1.5"/>
  <!-- Brow: protective lowered -->
  <path d="M24,40 Q36,34 50,36 Q64,34 76,40" fill="none" stroke="#60a5fa" stroke-width="1.2"/>
  <!-- IP shield marks on forehead -->
  <path d="M44,26 Q50,22 56,26 L57,33 Q50,37 43,33 Z" fill="none" stroke="#60a5fa" stroke-width="1"/>
  <text x="50" y="33" text-anchor="middle" font-family="monospace" font-size="5" fill="#60a5fa" opacity="0.8">IP</text>
  <!-- Left eye -->
  <ellipse cx="36" cy="48" rx="8" ry="6" fill="#040c22" stroke="#60a5fa" stroke-width="1.2"/>
  <!-- Left iris: copyright circle with C -->
  <circle cx="36" cy="48" r="4.5" fill="none" stroke="#60a5fa" stroke-width="0.8"/>
  <text x="36" y="50" text-anchor="middle" font-family="monospace" font-size="5" fill="#60a5fa" opacity="0.9">©</text>
  <!-- Right eye -->
  <ellipse cx="64" cy="48" rx="8" ry="6" fill="#040c22" stroke="#60a5fa" stroke-width="1.2"/>
  <!-- Right iris: patent P circle -->
  <circle cx="64" cy="48" r="4.5" fill="none" stroke="#60a5fa" stroke-width="0.8"/>
  <text x="64" y="50" text-anchor="middle" font-family="monospace" font-size="5" fill="#60a5fa" opacity="0.9">℗</text>
  <!-- Chin: sharp protective jaw lines -->
  <line x1="30" y1="70" x2="40" y2="76" stroke="#60a5fa" stroke-width="0.8" opacity="0.5"/>
  <line x1="70" y1="70" x2="60" y2="76" stroke="#60a5fa" stroke-width="0.8" opacity="0.5"/>
  <!-- Nose -->
  <path d="M47,55 Q50,60 53,55" stroke="#60a5fa" stroke-width="0.8" fill="none" opacity="0.6"/>
  <!-- Mouth: determined tight -->
  <path d="M37,66 Q50,64 63,66" stroke="#60a5fa" stroke-width="1.1" fill="none"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="4" fill="#60a5fa" opacity="0.9">IP-COUNSEL</text>
`);

// PROD-COUNSEL: Strategic legal, teal-navy, product-legal-bridge iris, handshake-code hybrid marks
const PROD_COUNSEL = wrap(`
  <!-- Teal-navy head — strategic, balanced oval -->
  <ellipse cx="50" cy="46" rx="26" ry="28" fill="#0b1e22" stroke="#2dd4bf" stroke-width="1.4"/>
  <!-- Brow: strategic, slightly angled -->
  <path d="M24,38 Q37,33 50,35 Q63,33 76,38" fill="none" stroke="#2dd4bf" stroke-width="1"/>
  <!-- Left eye -->
  <ellipse cx="36" cy="47" rx="8" ry="6.5" fill="#040e10" stroke="#2dd4bf" stroke-width="1.1"/>
  <!-- Left iris: left half = product box, right half = gavel -->
  <rect x="29" y="44" width="6" height="6" rx="1" fill="none" stroke="#2dd4bf" stroke-width="0.7"/>
  <line x1="29" y1="46" x2="35" y2="46" stroke="#2dd4bf" stroke-width="0.5" opacity="0.6"/>
  <circle cx="36" cy="47" r="1" fill="#2dd4bf" opacity="0.85"/>
  <!-- Right iris: right half = scales hint -->
  <ellipse cx="64" cy="47" rx="8" ry="6.5" fill="#040e10" stroke="#2dd4bf" stroke-width="1.1"/>
  <line x1="64" y1="44" x2="64" y2="50" stroke="#2dd4bf" stroke-width="0.7"/>
  <line x1="60" y1="44" x2="68" y2="44" stroke="#2dd4bf" stroke-width="0.6"/>
  <path d="M60,44 Q60,47 64,47" stroke="#2dd4bf" stroke-width="0.6" fill="rgba(45,212,191,0.15)"/>
  <path d="M68,44 Q68,47 64,47" stroke="#2dd4bf" stroke-width="0.6" fill="rgba(45,212,191,0.15)"/>
  <circle cx="64" cy="47" r="1" fill="#2dd4bf" opacity="0.85"/>
  <!-- Handshake-code hybrid marks on cheeks -->
  <!-- Left cheek: handshake arc -->
  <path d="M21,52 Q24,48 27,52" stroke="#2dd4bf" stroke-width="1" fill="none" opacity="0.6"/>
  <line x1="21" y1="52" x2="27" y2="52" stroke="#2dd4bf" stroke-width="0.7" opacity="0.5"/>
  <!-- Right cheek: code brackets -->
  <path d="M73,50 L70,53 L73,56" stroke="#2dd4bf" stroke-width="1" fill="none" opacity="0.6"/>
  <path d="M77,50 L80,53 L77,56" stroke="#2dd4bf" stroke-width="1" fill="none" opacity="0.6"/>
  <!-- Nose -->
  <path d="M47,53 L50,58 L53,53" stroke="#2dd4bf" stroke-width="0.8" fill="none" opacity="0.55"/>
  <!-- Mouth: strategic measured -->
  <path d="M38,64 Q50,62 62,64" stroke="#2dd4bf" stroke-width="1" fill="none"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#2dd4bf" opacity="0.9">PROD-COUNSEL</text>
`);

// ─────────────────────────────────────────────────────────────────────────────
// DEPT 15: IT OPS — practical, workman-like (server-grey #64748B)
// ─────────────────────────────────────────────────────────────────────────────

// DIR-IT: Command-and-control face, server-grey, network-topology iris, control panel marks
const DIR_IT = wrap(`
  <!-- Server-grey head — command presence, broad -->
  <ellipse cx="50" cy="45" rx="30" ry="28" fill="#0d1117" stroke="#64748b" stroke-width="1.8"/>
  <!-- Director crown: 3 antenna spikes -->
  <line x1="38" y1="17" x2="38" y2="10" stroke="#64748b" stroke-width="1.5"/>
  <circle cx="38" cy="9" r="2" fill="#64748b" opacity="0.8"/>
  <line x1="50" y1="17" x2="50" y2="8" stroke="#64748b" stroke-width="1.5"/>
  <circle cx="50" cy="7" r="2.5" fill="#64748b" opacity="0.9"/>
  <line x1="62" y1="17" x2="62" y2="10" stroke="#64748b" stroke-width="1.5"/>
  <circle cx="62" cy="9" r="2" fill="#64748b" opacity="0.8"/>
  <!-- Brow ridge: heavy control -->
  <path d="M20,37 L35,33 L50,35 L65,33 L80,37" fill="none" stroke="#64748b" stroke-width="1.3"/>
  <!-- Left eye: network topology iris (nodes and links) -->
  <ellipse cx="36" cy="46" rx="9" ry="7" fill="#050b14" stroke="#64748b" stroke-width="1.2"/>
  <circle cx="36" cy="46" r="2" fill="none" stroke="#64748b" stroke-width="0.6"/>
  <circle cx="32" cy="44" r="1" fill="#64748b" opacity="0.7"/>
  <circle cx="40" cy="44" r="1" fill="#64748b" opacity="0.7"/>
  <circle cx="36" cy="50" r="1" fill="#64748b" opacity="0.7"/>
  <line x1="32" y1="44" x2="36" y2="46" stroke="#64748b" stroke-width="0.5" opacity="0.6"/>
  <line x1="40" y1="44" x2="36" y2="46" stroke="#64748b" stroke-width="0.5" opacity="0.6"/>
  <line x1="36" y1="48" x2="36" y2="50" stroke="#64748b" stroke-width="0.5" opacity="0.6"/>
  <circle cx="36" cy="46" r="1.2" fill="#64748b" opacity="0.9"/>
  <!-- Right eye: network topology iris -->
  <ellipse cx="64" cy="46" rx="9" ry="7" fill="#050b14" stroke="#64748b" stroke-width="1.2"/>
  <circle cx="64" cy="46" r="2" fill="none" stroke="#64748b" stroke-width="0.6"/>
  <circle cx="60" cy="44" r="1" fill="#64748b" opacity="0.7"/>
  <circle cx="68" cy="44" r="1" fill="#64748b" opacity="0.7"/>
  <circle cx="64" cy="50" r="1" fill="#64748b" opacity="0.7"/>
  <line x1="60" y1="44" x2="64" y2="46" stroke="#64748b" stroke-width="0.5" opacity="0.6"/>
  <line x1="68" y1="44" x2="64" y2="46" stroke="#64748b" stroke-width="0.5" opacity="0.6"/>
  <line x1="64" y1="48" x2="64" y2="50" stroke="#64748b" stroke-width="0.5" opacity="0.6"/>
  <circle cx="64" cy="46" r="1.2" fill="#64748b" opacity="0.9"/>
  <!-- Control panel marks: 3 buttons on chin area -->
  <circle cx="42" cy="66" r="2" fill="none" stroke="#22c55e" stroke-width="0.8"/>
  <circle cx="50" cy="66" r="2" fill="none" stroke="#64748b" stroke-width="0.8"/>
  <circle cx="58" cy="66" r="2" fill="none" stroke="#ef4444" stroke-width="0.8"/>
  <circle cx="42" cy="66" r="0.8" fill="#22c55e" opacity="0.7"/>
  <circle cx="58" cy="66" r="0.8" fill="#ef4444" opacity="0.7"/>
  <!-- Nose: panel ridge -->
  <rect x="47" y="54" width="6" height="4" rx="1" fill="none" stroke="#64748b" stroke-width="0.7" opacity="0.5"/>
  <!-- Mouth: calm operational -->
  <path d="M35,60 Q50,58 65,60" stroke="#64748b" stroke-width="1.2" fill="none"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="4" fill="#64748b" opacity="0.9">DIR-IT</text>
`);

// SYSADMIN: Rugged practical, dark grey-green, terminal/console iris, root # forehead symbol
const SYSADMIN = wrap(`
  <!-- Dark grey-green head — rugged, slightly wider -->
  <ellipse cx="50" cy="46" rx="27" ry="27" fill="#0a1210" stroke="#4a7c59" stroke-width="1.5"/>
  <!-- Forehead: root access hash symbol -->
  <text x="50" y="30" text-anchor="middle" font-family="monospace" font-size="10" fill="#4a7c59" opacity="0.85">#</text>
  <!-- Brow: no-nonsense straight -->
  <line x1="23" y1="39" x2="43" y2="38" stroke="#4a7c59" stroke-width="1.3"/>
  <line x1="57" y1="38" x2="77" y2="39" stroke="#4a7c59" stroke-width="1.3"/>
  <!-- Left eye: terminal/console iris (blinking cursor) -->
  <ellipse cx="36" cy="48" rx="8" ry="6" fill="#040d09" stroke="#4a7c59" stroke-width="1.1"/>
  <rect x="28" y="44" width="16" height="8" rx="1" fill="none" stroke="#4a7c59" stroke-width="0.6" opacity="0.5"/>
  <text x="31" y="50" font-family="monospace" font-size="4" fill="#4a7c59" opacity="0.9">$_</text>
  <!-- Right eye: terminal/console iris -->
  <ellipse cx="64" cy="48" rx="8" ry="6" fill="#040d09" stroke="#4a7c59" stroke-width="1.1"/>
  <rect x="56" y="44" width="16" height="8" rx="1" fill="none" stroke="#4a7c59" stroke-width="0.6" opacity="0.5"/>
  <text x="59" y="50" font-family="monospace" font-size="4" fill="#4a7c59" opacity="0.9">$_</text>
  <!-- Nose: ridge line -->
  <line x1="50" y1="55" x2="50" y2="61" stroke="#4a7c59" stroke-width="0.9" opacity="0.5"/>
  <line x1="47" y1="61" x2="53" y2="61" stroke="#4a7c59" stroke-width="0.8" opacity="0.4"/>
  <!-- Mouth: flat sleeves-up -->
  <line x1="37" y1="65" x2="63" y2="65" stroke="#4a7c59" stroke-width="1.2"/>
  <!-- Chin stubble dots -->
  <circle cx="44" cy="69" r="0.7" fill="#4a7c59" opacity="0.4"/>
  <circle cx="50" cy="70" r="0.7" fill="#4a7c59" opacity="0.4"/>
  <circle cx="56" cy="69" r="0.7" fill="#4a7c59" opacity="0.4"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="4" fill="#4a7c59" opacity="0.9">SYSADMIN</text>
`);

// IT-SUPPORT: Helpful patient, medium grey-blue, help-ticket iris, headset arc on head
const IT_SUPPORT = wrap(`
  <!-- Medium grey-blue head — patient helpful oval -->
  <ellipse cx="50" cy="48" rx="24" ry="27" fill="#0c1520" stroke="#7b92a8" stroke-width="1.3"/>
  <!-- Headset arc on top of head -->
  <path d="M30,32 Q50,20 70,32" stroke="#7b92a8" stroke-width="2" fill="none"/>
  <rect x="27" y="30" width="6" height="8" rx="2.5" fill="none" stroke="#7b92a8" stroke-width="1.5"/>
  <rect x="67" y="30" width="6" height="8" rx="2.5" fill="none" stroke="#7b92a8" stroke-width="1.5"/>
  <!-- Mic arm: right side -->
  <path d="M73,38 Q76,44 74,48" stroke="#7b92a8" stroke-width="1.2" fill="none"/>
  <circle cx="74" cy="49" r="1.5" fill="#7b92a8" opacity="0.8"/>
  <!-- Brow: patient open -->
  <path d="M28,40 Q38,36 50,38 Q62,36 72,40" fill="none" stroke="#7b92a8" stroke-width="0.9"/>
  <!-- Left eye: help-ticket iris -->
  <ellipse cx="37" cy="50" rx="7" ry="5.5" fill="#060d18" stroke="#7b92a8" stroke-width="1"/>
  <rect x="31" y="47" width="12" height="7" rx="1" fill="none" stroke="#7b92a8" stroke-width="0.6" opacity="0.5"/>
  <text x="37" y="52.5" text-anchor="middle" font-family="monospace" font-size="5" fill="#7b92a8" opacity="0.9">?</text>
  <!-- Right eye: help-ticket iris -->
  <ellipse cx="63" cy="50" rx="7" ry="5.5" fill="#060d18" stroke="#7b92a8" stroke-width="1"/>
  <rect x="57" y="47" width="12" height="7" rx="1" fill="none" stroke="#7b92a8" stroke-width="0.6" opacity="0.5"/>
  <text x="63" y="52.5" text-anchor="middle" font-family="monospace" font-size="5" fill="#7b92a8" opacity="0.9">?</text>
  <!-- Nose: soft bumps -->
  <circle cx="48" cy="57" r="1.2" fill="none" stroke="#7b92a8" stroke-width="0.7" opacity="0.4"/>
  <circle cx="52" cy="57" r="1.2" fill="none" stroke="#7b92a8" stroke-width="0.7" opacity="0.4"/>
  <!-- Mouth: patient slight smile -->
  <path d="M38,65 Q50,69 62,65" stroke="#7b92a8" stroke-width="1" fill="none"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="3.8" fill="#7b92a8" opacity="0.9">IT-SUPPORT</text>
`);

// ENT-APPS: Technical systematic, cool grey, enterprise-software grid iris, CRM/ERP marks
const ENT_APPS = wrap(`
  <!-- Cool grey head — systematic, rectangular feel -->
  <path d="M25,36 Q26,18 50,17 Q74,18 75,36 L75,62 Q74,76 50,77 Q26,76 25,62 Z" fill="#0e1318" stroke="#8fa3b1" stroke-width="1.3"/>
  <!-- Brow: systematic flat -->
  <line x1="25" y1="39" x2="40" y2="37" stroke="#8fa3b1" stroke-width="1.1"/>
  <line x1="60" y1="37" x2="75" y2="39" stroke="#8fa3b1" stroke-width="1.1"/>
  <!-- Left eye: enterprise-software grid (3x3 app tiles) -->
  <ellipse cx="36" cy="48" rx="9" ry="7" fill="#060c13" stroke="#8fa3b1" stroke-width="1"/>
  <rect x="29" y="43" width="14" height="10" rx="1" fill="none" stroke="#8fa3b1" stroke-width="0.5" opacity="0.5"/>
  <!-- 2x2 grid inside left eye -->
  <rect x="30" y="44" width="5" height="4" rx="0.5" fill="rgba(143,163,177,0.25)"/>
  <rect x="37" y="44" width="5" height="4" rx="0.5" fill="rgba(143,163,177,0.15)"/>
  <rect x="30" y="49.5" width="5" height="3" rx="0.5" fill="rgba(143,163,177,0.2)"/>
  <rect x="37" y="49.5" width="5" height="3" rx="0.5" fill="rgba(143,163,177,0.3)"/>
  <circle cx="36" cy="48" r="1" fill="#8fa3b1" opacity="0.85"/>
  <!-- Right eye: enterprise grid -->
  <ellipse cx="64" cy="48" rx="9" ry="7" fill="#060c13" stroke="#8fa3b1" stroke-width="1"/>
  <rect x="57" y="43" width="14" height="10" rx="1" fill="none" stroke="#8fa3b1" stroke-width="0.5" opacity="0.5"/>
  <rect x="58" y="44" width="5" height="4" rx="0.5" fill="rgba(143,163,177,0.25)"/>
  <rect x="65" y="44" width="5" height="4" rx="0.5" fill="rgba(143,163,177,0.15)"/>
  <rect x="58" y="49.5" width="5" height="3" rx="0.5" fill="rgba(143,163,177,0.2)"/>
  <rect x="65" y="49.5" width="5" height="3" rx="0.5" fill="rgba(143,163,177,0.3)"/>
  <circle cx="64" cy="48" r="1" fill="#8fa3b1" opacity="0.85"/>
  <!-- CRM/ERP forehead marks -->
  <text x="50" y="30" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#8fa3b1" opacity="0.7">CRM·ERP</text>
  <!-- Nose: module -->
  <rect x="47" y="56" width="6" height="4" rx="1" fill="none" stroke="#8fa3b1" stroke-width="0.6" opacity="0.4"/>
  <!-- Mouth: methodical flat -->
  <path d="M36,65 Q50,63 64,65" stroke="#8fa3b1" stroke-width="1.1" fill="none"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="4" fill="#8fa3b1" opacity="0.9">ENT-APPS</text>
`);

// BI-ANALYST: Data-visual face, warm blue-grey, dashboard/chart iris, KPI crown marks
const BI_ANALYST = wrap(`
  <!-- Warm blue-grey head — insightful, rounded -->
  <ellipse cx="50" cy="46" rx="26" ry="28" fill="#0c1520" stroke="#7b96b8" stroke-width="1.4"/>
  <!-- KPI crown: bar chart spikes on forehead -->
  <rect x="36" y="20" width="5" height="10" rx="1" fill="#7b96b8" opacity="0.5"/>
  <rect x="43" y="15" width="5" height="15" rx="1" fill="#7b96b8" opacity="0.7"/>
  <rect x="50" y="18" width="5" height="12" rx="1" fill="#7b96b8" opacity="0.6"/>
  <rect x="57" y="13" width="5" height="17" rx="1" fill="#7b96b8" opacity="0.8"/>
  <line x1="34" y1="30" x2="64" y2="30" stroke="#7b96b8" stroke-width="0.8" opacity="0.5"/>
  <!-- Brow: analytical raised -->
  <path d="M24,39 Q36,35 50,37 Q64,35 76,39" fill="none" stroke="#7b96b8" stroke-width="1"/>
  <!-- Left eye: bar chart iris (5 bars) -->
  <ellipse cx="36" cy="49" rx="8.5" ry="6.5" fill="#050d18" stroke="#7b96b8" stroke-width="1.1"/>
  <rect x="28.5" y="44" width="15" height="11" rx="1" fill="none" stroke="#7b96b8" stroke-width="0.5" opacity="0.4"/>
  <rect x="30" y="50" width="2" height="4" fill="#7b96b8" opacity="0.7"/>
  <rect x="33.5" y="47" width="2" height="7" fill="#7b96b8" opacity="0.6"/>
  <rect x="37" y="48.5" width="2" height="5.5" fill="#7b96b8" opacity="0.8"/>
  <rect x="40.5" y="46" width="2" height="8" fill="#7b96b8" opacity="0.5"/>
  <polyline points="31,49.5 34.5,46.5 38,48 41.5,45.5" stroke="#0ea5e9" stroke-width="0.8" fill="none" opacity="0.8"/>
  <circle cx="36" cy="49" r="1" fill="#7b96b8" opacity="0.85"/>
  <!-- Right eye: bar chart iris -->
  <ellipse cx="64" cy="49" rx="8.5" ry="6.5" fill="#050d18" stroke="#7b96b8" stroke-width="1.1"/>
  <rect x="56.5" y="44" width="15" height="11" rx="1" fill="none" stroke="#7b96b8" stroke-width="0.5" opacity="0.4"/>
  <rect x="58" y="50" width="2" height="4" fill="#7b96b8" opacity="0.7"/>
  <rect x="61.5" y="47" width="2" height="7" fill="#7b96b8" opacity="0.6"/>
  <rect x="65" y="48.5" width="2" height="5.5" fill="#7b96b8" opacity="0.8"/>
  <rect x="68.5" y="46" width="2" height="8" fill="#7b96b8" opacity="0.5"/>
  <polyline points="59,49.5 62.5,46.5 66,48 69.5,45.5" stroke="#0ea5e9" stroke-width="0.8" fill="none" opacity="0.8"/>
  <circle cx="64" cy="49" r="1" fill="#7b96b8" opacity="0.85"/>
  <!-- Nose: data point -->
  <circle cx="50" cy="58" r="1.5" fill="none" stroke="#7b96b8" stroke-width="0.8" opacity="0.5"/>
  <!-- Mouth: insightful curve -->
  <path d="M38,66 Q50,70 62,66" stroke="#7b96b8" stroke-width="1" fill="none"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="3.8" fill="#7b96b8" opacity="0.9">BI-ANALYST</text>
`);

// ─────────────────────────────────────────────────────────────────────────────
// DEPT 16: DEVREL — enthusiastic, open-source spirit, community-focused (orange #f97316)
// ─────────────────────────────────────────────────────────────────────────────

// DIR-DEVREL: Charismatic, bright community-orange, OSI open-source iris, conference stage marks
const DIR_DEVREL = wrap(`
  <!-- Bright community-orange head — charismatic, energetic oval -->
  <ellipse cx="50" cy="46" rx="27" ry="28" fill="#1a0d04" stroke="#f97316" stroke-width="1.6"/>
  <!-- Conference stage marks: spotlight beams from top -->
  <path d="M30,10 L38,32" stroke="#f97316" stroke-width="0.8" opacity="0.3" stroke-dasharray="2,2"/>
  <path d="M50,8 L50,30" stroke="#f97316" stroke-width="1" opacity="0.4" stroke-dasharray="2,2"/>
  <path d="M70,10 L62,32" stroke="#f97316" stroke-width="0.8" opacity="0.3" stroke-dasharray="2,2"/>
  <!-- Brow: raised enthusiastic -->
  <path d="M23,37 Q36,30 50,33 Q64,30 77,37" fill="none" stroke="#f97316" stroke-width="1.2"/>
  <!-- Left eye: OSI open-source iris (6-pointed wheel) -->
  <ellipse cx="35" cy="47" rx="9" ry="7.5" fill="#100600" stroke="#f97316" stroke-width="1.3"/>
  <circle cx="35" cy="47" r="5.5" fill="none" stroke="#f97316" stroke-width="0.8"/>
  <!-- OSI circle with spokes -->
  <circle cx="35" cy="47" r="2" fill="none" stroke="#f97316" stroke-width="0.7"/>
  <line x1="35" y1="41.5" x2="35" y2="44.5" stroke="#f97316" stroke-width="0.7" opacity="0.7"/>
  <line x1="35" y1="49.5" x2="35" y2="52.5" stroke="#f97316" stroke-width="0.7" opacity="0.7"/>
  <line x1="29.5" y1="47" x2="32.5" y2="47" stroke="#f97316" stroke-width="0.7" opacity="0.7"/>
  <line x1="37.5" y1="47" x2="40.5" y2="47" stroke="#f97316" stroke-width="0.7" opacity="0.7"/>
  <line x1="31.3" y1="43.3" x2="33.4" y2="45.4" stroke="#f97316" stroke-width="0.7" opacity="0.6"/>
  <line x1="36.6" y1="48.6" x2="38.7" y2="50.7" stroke="#f97316" stroke-width="0.7" opacity="0.6"/>
  <circle cx="35" cy="47" r="1.2" fill="#f97316" opacity="0.95"/>
  <!-- Right eye: OSI iris -->
  <ellipse cx="65" cy="47" rx="9" ry="7.5" fill="#100600" stroke="#f97316" stroke-width="1.3"/>
  <circle cx="65" cy="47" r="5.5" fill="none" stroke="#f97316" stroke-width="0.8"/>
  <circle cx="65" cy="47" r="2" fill="none" stroke="#f97316" stroke-width="0.7"/>
  <line x1="65" y1="41.5" x2="65" y2="44.5" stroke="#f97316" stroke-width="0.7" opacity="0.7"/>
  <line x1="65" y1="49.5" x2="65" y2="52.5" stroke="#f97316" stroke-width="0.7" opacity="0.7"/>
  <line x1="59.5" y1="47" x2="62.5" y2="47" stroke="#f97316" stroke-width="0.7" opacity="0.7"/>
  <line x1="67.5" y1="47" x2="70.5" y2="47" stroke="#f97316" stroke-width="0.7" opacity="0.7"/>
  <line x1="61.3" y1="43.3" x2="63.4" y2="45.4" stroke="#f97316" stroke-width="0.7" opacity="0.6"/>
  <line x1="66.6" y1="48.6" x2="68.7" y2="50.7" stroke="#f97316" stroke-width="0.7" opacity="0.6"/>
  <circle cx="65" cy="47" r="1.2" fill="#f97316" opacity="0.95"/>
  <!-- Nose: wide expressive -->
  <path d="M46,55 Q50,60 54,55" stroke="#f97316" stroke-width="0.9" fill="none" opacity="0.6"/>
  <!-- Mouth: big energetic smile -->
  <path d="M35,65 Q50,74 65,65" stroke="#f97316" stroke-width="1.5" fill="none"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#f97316" opacity="0.9">DIR-DEVREL</text>
`);

// SR-DEV-ADV: Engaging expert, electric orange, talk/presentation-bubble iris, microphone antenna
const SR_DEV_ADV = wrap(`
  <!-- Electric orange head — engaging, speaker presence -->
  <ellipse cx="50" cy="46" rx="26" ry="27" fill="#170900" stroke="#fb923c" stroke-width="1.5"/>
  <!-- Microphone antenna on top right -->
  <line x1="65" y1="19" x2="65" y2="10" stroke="#fb923c" stroke-width="1.5"/>
  <ellipse cx="65" cy="8" rx="4" ry="5" fill="none" stroke="#fb923c" stroke-width="1.2"/>
  <line x1="62" y1="13" x2="68" y2="13" stroke="#fb923c" stroke-width="0.7" opacity="0.6"/>
  <!-- Signal waves from mic -->
  <path d="M70,9 Q74,9 74,8 Q74,7 70,7" stroke="#fb923c" stroke-width="0.7" fill="none" opacity="0.6"/>
  <path d="M71,11 Q76,11 76,9 Q76,7 71,7" stroke="#fb923c" stroke-width="0.5" fill="none" opacity="0.4"/>
  <!-- Brow: confident raised -->
  <path d="M24,38 Q36,32 50,34 Q64,32 76,38" fill="none" stroke="#fb923c" stroke-width="1.1"/>
  <!-- Left eye: talk/presentation-bubble iris -->
  <ellipse cx="35" cy="48" rx="8.5" ry="7" fill="#100500" stroke="#fb923c" stroke-width="1.2"/>
  <!-- Speech bubble shape in iris -->
  <rect x="28" y="44" width="14" height="8" rx="3" fill="none" stroke="#fb923c" stroke-width="0.8"/>
  <path d="M32,52 L30,55 L35,52" fill="none" stroke="#fb923c" stroke-width="0.7"/>
  <circle cx="32" cy="48" r="0.8" fill="#fb923c" opacity="0.8"/>
  <circle cx="35" cy="48" r="0.8" fill="#fb923c" opacity="0.8"/>
  <circle cx="38" cy="48" r="0.8" fill="#fb923c" opacity="0.8"/>
  <!-- Right eye: talk-bubble iris -->
  <ellipse cx="65" cy="48" rx="8.5" ry="7" fill="#100500" stroke="#fb923c" stroke-width="1.2"/>
  <rect x="58" y="44" width="14" height="8" rx="3" fill="none" stroke="#fb923c" stroke-width="0.8"/>
  <path d="M62,52 L60,55 L65,52" fill="none" stroke="#fb923c" stroke-width="0.7"/>
  <circle cx="62" cy="48" r="0.8" fill="#fb923c" opacity="0.8"/>
  <circle cx="65" cy="48" r="0.8" fill="#fb923c" opacity="0.8"/>
  <circle cx="68" cy="48" r="0.8" fill="#fb923c" opacity="0.8"/>
  <!-- Nose -->
  <path d="M47,56 Q50,61 53,56" stroke="#fb923c" stroke-width="0.8" fill="none" opacity="0.6"/>
  <!-- Mouth: presenting wide smile -->
  <path d="M36,66 Q50,74 64,66" stroke="#fb923c" stroke-width="1.4" fill="none"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#fb923c" opacity="0.9">SR-DEV-ADV</text>
`);

// DRE: Hacker-friendly, orange-green hybrid skin, code+community iris, terminal brackets on cheeks
const DRE = wrap(`
  <!-- Orange-green hybrid head — hacker-friendly -->
  <ellipse cx="50" cy="47" rx="25" ry="27" fill="#0d1208" stroke="#84cc16" stroke-width="1.4"/>
  <!-- Second tone: orange tint overlay on one side -->
  <path d="M50,20 Q75,20 75,47 Q75,74 50,74" fill="#1a0c04" opacity="0.4"/>
  <!-- Brow: hacker angled -->
  <path d="M25,39 Q36,34 50,36 Q60,34 75,39" fill="none" stroke="#84cc16" stroke-width="1"/>
  <!-- Left eye: code iris (brackets + cursor) -->
  <ellipse cx="35" cy="48" rx="8" ry="6.5" fill="#050c04" stroke="#84cc16" stroke-width="1.1"/>
  <text x="27" y="51" font-family="monospace" font-size="7" fill="#84cc16" opacity="0.9">&lt;</text>
  <text x="38" y="51" font-family="monospace" font-size="7" fill="#f97316" opacity="0.8">/&gt;</text>
  <circle cx="35" cy="48" r="1.2" fill="#84cc16" opacity="0.9"/>
  <!-- Right eye: community nodes iris -->
  <ellipse cx="65" cy="48" rx="8" ry="6.5" fill="#050c04" stroke="#f97316" stroke-width="1.1"/>
  <circle cx="65" cy="44" r="1.5" fill="#f97316" opacity="0.7"/>
  <circle cx="60" cy="49" r="1.5" fill="#f97316" opacity="0.7"/>
  <circle cx="70" cy="49" r="1.5" fill="#f97316" opacity="0.7"/>
  <line x1="65" y1="44" x2="60" y2="49" stroke="#f97316" stroke-width="0.6" opacity="0.5"/>
  <line x1="65" y1="44" x2="70" y2="49" stroke="#f97316" stroke-width="0.6" opacity="0.5"/>
  <line x1="60" y1="49" x2="70" y2="49" stroke="#f97316" stroke-width="0.6" opacity="0.5"/>
  <circle cx="65" cy="48" r="1" fill="#f97316" opacity="0.85"/>
  <!-- Terminal brackets on cheeks -->
  <text x="15" y="54" font-family="monospace" font-size="8" fill="#84cc16" opacity="0.6">{</text>
  <text x="77" y="54" font-family="monospace" font-size="8" fill="#84cc16" opacity="0.6">}</text>
  <!-- Nose -->
  <line x1="49" y1="55" x2="49" y2="60" stroke="#84cc16" stroke-width="0.7" opacity="0.4"/>
  <line x1="51" y1="55" x2="51" y2="60" stroke="#84cc16" stroke-width="0.7" opacity="0.4"/>
  <!-- Mouth: hacker grin -->
  <path d="M37,66 Q50,72 63,66" stroke="#84cc16" stroke-width="1.2" fill="none"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="4" fill="#84cc16" opacity="0.9">DRE</text>
`);

// DEV-COMMUNITY: Warm community-builder, community-orange, social-graph iris, group-hug antennae arcing
const DEV_COMMUNITY = wrap(`
  <!-- Community orange head — warm, wider, welcoming -->
  <ellipse cx="50" cy="47" rx="28" ry="28" fill="#150800" stroke="#f97316" stroke-width="1.5"/>
  <!-- Group-hug antennae: two arcing outward arms from top -->
  <path d="M36,19 Q20,10 18,24" stroke="#f97316" stroke-width="1.2" fill="none" opacity="0.7"/>
  <circle cx="18" cy="25" r="2.5" fill="none" stroke="#f97316" stroke-width="1"/>
  <path d="M64,19 Q80,10 82,24" stroke="#f97316" stroke-width="1.2" fill="none" opacity="0.7"/>
  <circle cx="82" cy="25" r="2.5" fill="none" stroke="#f97316" stroke-width="1"/>
  <!-- Brow: welcoming open -->
  <path d="M22,38 Q36,32 50,34 Q64,32 78,38" fill="none" stroke="#f97316" stroke-width="1.1"/>
  <!-- Left eye: social-graph iris (people connected) -->
  <ellipse cx="35" cy="49" rx="9" ry="7" fill="#0f0500" stroke="#f97316" stroke-width="1.2"/>
  <circle cx="31" cy="46" r="1.8" fill="none" stroke="#f97316" stroke-width="0.8"/>
  <circle cx="39" cy="46" r="1.8" fill="none" stroke="#f97316" stroke-width="0.8"/>
  <circle cx="35" cy="52" r="1.8" fill="none" stroke="#f97316" stroke-width="0.8"/>
  <line x1="32.5" y1="47" x2="37.5" y2="47" stroke="#f97316" stroke-width="0.7" opacity="0.6"/>
  <line x1="31.5" y1="47.8" x2="34.5" y2="50.5" stroke="#f97316" stroke-width="0.7" opacity="0.6"/>
  <line x1="38.5" y1="47.8" x2="35.5" y2="50.5" stroke="#f97316" stroke-width="0.7" opacity="0.6"/>
  <circle cx="35" cy="48.5" r="1" fill="#f97316" opacity="0.85"/>
  <!-- Right eye: social-graph iris -->
  <ellipse cx="65" cy="49" rx="9" ry="7" fill="#0f0500" stroke="#f97316" stroke-width="1.2"/>
  <circle cx="61" cy="46" r="1.8" fill="none" stroke="#f97316" stroke-width="0.8"/>
  <circle cx="69" cy="46" r="1.8" fill="none" stroke="#f97316" stroke-width="0.8"/>
  <circle cx="65" cy="52" r="1.8" fill="none" stroke="#f97316" stroke-width="0.8"/>
  <line x1="62.5" y1="47" x2="67.5" y2="47" stroke="#f97316" stroke-width="0.7" opacity="0.6"/>
  <line x1="61.5" y1="47.8" x2="64.5" y2="50.5" stroke="#f97316" stroke-width="0.7" opacity="0.6"/>
  <line x1="68.5" y1="47.8" x2="65.5" y2="50.5" stroke="#f97316" stroke-width="0.7" opacity="0.6"/>
  <circle cx="65" cy="48.5" r="1" fill="#f97316" opacity="0.85"/>
  <!-- Nose: round friendly -->
  <circle cx="50" cy="59" r="2" fill="none" stroke="#f97316" stroke-width="0.8" opacity="0.5"/>
  <!-- Mouth: big warm smile -->
  <path d="M33,67 Q50,77 67,67" stroke="#f97316" stroke-width="1.5" fill="none"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#f97316" opacity="0.9">DEV-COMMUNITY</text>
`);

// DEV-ADV: Same community-orange as SR-DEV-ADV but rounder, more approachable, slightly different
const DEV_ADV = wrap(`
  <!-- Community-orange head — rounder, more approachable than SR-DEV-ADV -->
  <circle cx="50" cy="48" r="28" fill="#130800" stroke="#fb923c" stroke-width="1.4"/>
  <!-- Brow: approachable soft arc -->
  <path d="M25,40 Q38,33 50,35 Q62,33 75,40" fill="none" stroke="#fb923c" stroke-width="1"/>
  <!-- Left eye: presentation bubble (rounder version) -->
  <circle cx="36" cy="49" r="8" fill="#0e0400" stroke="#fb923c" stroke-width="1.1"/>
  <path d="M29,47 Q36,43 43,47 Q43,53 36,53 Q29,53 29,47 Z" fill="none" stroke="#fb923c" stroke-width="0.8"/>
  <path d="M33,53 L31,57 L36,53" fill="none" stroke="#fb923c" stroke-width="0.7"/>
  <line x1="32" y1="49" x2="40" y2="49" stroke="#fb923c" stroke-width="0.6" opacity="0.6"/>
  <line x1="32" y1="51" x2="39" y2="51" stroke="#fb923c" stroke-width="0.6" opacity="0.4"/>
  <circle cx="36" cy="49" r="1.2" fill="#fb923c" opacity="0.9"/>
  <!-- Right eye: presentation bubble -->
  <circle cx="64" cy="49" r="8" fill="#0e0400" stroke="#fb923c" stroke-width="1.1"/>
  <path d="M57,47 Q64,43 71,47 Q71,53 64,53 Q57,53 57,47 Z" fill="none" stroke="#fb923c" stroke-width="0.8"/>
  <path d="M61,53 L59,57 L64,53" fill="none" stroke="#fb923c" stroke-width="0.7"/>
  <line x1="60" y1="49" x2="68" y2="49" stroke="#fb923c" stroke-width="0.6" opacity="0.6"/>
  <line x1="60" y1="51" x2="67" y2="51" stroke="#fb923c" stroke-width="0.6" opacity="0.4"/>
  <circle cx="64" cy="49" r="1.2" fill="#fb923c" opacity="0.9"/>
  <!-- Nose: rounder -->
  <path d="M47,57 Q50,62 53,57" stroke="#fb923c" stroke-width="0.9" fill="none" opacity="0.5"/>
  <!-- Mouth: approachable friendly smile -->
  <path d="M36,67 Q50,75 64,67" stroke="#fb923c" stroke-width="1.3" fill="none"/>
  <!-- Cheek dots: community warmth -->
  <circle cx="27" cy="57" r="3" fill="#fb923c" opacity="0.12"/>
  <circle cx="73" cy="57" r="3" fill="#fb923c" opacity="0.12"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="4" fill="#fb923c" opacity="0.9">DEV-ADV</text>
`);

// ─────────────────────────────────────────────────────────────────────────────
// DEPT 17: PROGRAM MANAGEMENT — organized, systematic (project-blue #3b82f6)
// ─────────────────────────────────────────────────────────────────────────────

// DIR-PMO: Organized commanding, project-blue, gantt-chart iris, project timeline crown
const DIR_PMO = wrap(`
  <!-- Project-blue head — commanding, structured -->
  <ellipse cx="50" cy="45" rx="27" ry="28" fill="#040c1e" stroke="#3b82f6" stroke-width="1.7"/>
  <!-- Project timeline crown: horizontal milestone line -->
  <line x1="28" y1="17" x2="72" y2="17" stroke="#3b82f6" stroke-width="1.2"/>
  <circle cx="35" cy="17" r="2.5" fill="#3b82f6" opacity="0.8"/>
  <circle cx="50" cy="17" r="2.5" fill="#3b82f6" opacity="0.9"/>
  <circle cx="65" cy="17" r="2.5" fill="#3b82f6" opacity="0.8"/>
  <line x1="35" y1="17" x2="35" y2="10" stroke="#3b82f6" stroke-width="0.8" opacity="0.5"/>
  <line x1="50" y1="17" x2="50" y2="8" stroke="#3b82f6" stroke-width="1" opacity="0.7"/>
  <line x1="65" y1="17" x2="65" y2="10" stroke="#3b82f6" stroke-width="0.8" opacity="0.5"/>
  <!-- Brow: commanding authoritative -->
  <path d="M23,37 L36,33 L50,35 L64,33 L77,37" fill="none" stroke="#3b82f6" stroke-width="1.2"/>
  <!-- Left eye: gantt chart iris (horizontal bars of varying lengths) -->
  <ellipse cx="36" cy="47" rx="9" ry="7" fill="#020810" stroke="#3b82f6" stroke-width="1.2"/>
  <rect x="28" y="42" width="16" height="10" rx="1" fill="none" stroke="#3b82f6" stroke-width="0.5" opacity="0.4"/>
  <rect x="29" y="43.5" width="12" height="2" rx="0.5" fill="#3b82f6" opacity="0.7"/>
  <rect x="29" y="46.5" width="9" height="2" rx="0.5" fill="#3b82f6" opacity="0.8"/>
  <rect x="29" y="49.5" width="14" height="2" rx="0.5" fill="#3b82f6" opacity="0.6"/>
  <!-- Milestone diamond on right side of gantt iris -->
  <path d="M43,46 L45,47 L43,48 L41,47 Z" fill="#f59e0b" opacity="0.9"/>
  <circle cx="36" cy="47" r="1.2" fill="#3b82f6" opacity="0.9"/>
  <!-- Right eye: gantt chart iris -->
  <ellipse cx="64" cy="47" rx="9" ry="7" fill="#020810" stroke="#3b82f6" stroke-width="1.2"/>
  <rect x="56" y="42" width="16" height="10" rx="1" fill="none" stroke="#3b82f6" stroke-width="0.5" opacity="0.4"/>
  <rect x="57" y="43.5" width="12" height="2" rx="0.5" fill="#3b82f6" opacity="0.7"/>
  <rect x="57" y="46.5" width="9" height="2" rx="0.5" fill="#3b82f6" opacity="0.8"/>
  <rect x="57" y="49.5" width="14" height="2" rx="0.5" fill="#3b82f6" opacity="0.6"/>
  <path d="M71,46 L73,47 L71,48 L69,47 Z" fill="#f59e0b" opacity="0.9"/>
  <circle cx="64" cy="47" r="1.2" fill="#3b82f6" opacity="0.9"/>
  <!-- Nose: milestone diamond -->
  <path d="M50,55 L53,58 L50,61 L47,58 Z" fill="none" stroke="#3b82f6" stroke-width="0.8" opacity="0.5"/>
  <!-- Mouth: confident delivery line -->
  <path d="M35,66 Q50,64 65,66" stroke="#3b82f6" stroke-width="1.3" fill="none"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="4" fill="#3b82f6" opacity="0.9">DIR-PMO</text>
`);

// SR-TPM: Technical programmatic, deep blue, dependency-graph iris (nodes and arrows), milestone marks
const SR_TPM = wrap(`
  <!-- Deep blue head — technical programmatic -->
  <ellipse cx="50" cy="46" rx="26" ry="28" fill="#030a1a" stroke="#2563eb" stroke-width="1.5"/>
  <!-- Milestone marks on forehead: two diamonds -->
  <path d="M39,26 L43,22 L47,26 L43,30 Z" fill="none" stroke="#2563eb" stroke-width="1"/>
  <path d="M53,26 L57,22 L61,26 L57,30 Z" fill="none" stroke="#2563eb" stroke-width="1"/>
  <line x1="47" y1="26" x2="53" y2="26" stroke="#2563eb" stroke-width="0.8"/>
  <!-- Brow: technical precise -->
  <path d="M24,38 Q37,33 50,35 Q63,33 76,38" fill="none" stroke="#2563eb" stroke-width="1.1"/>
  <!-- Left eye: dependency-graph iris (nodes + arrows) -->
  <ellipse cx="35" cy="48" rx="9" ry="7" fill="#020610" stroke="#2563eb" stroke-width="1.2"/>
  <!-- Node A, B with arrow -->
  <circle cx="30" cy="46" r="2" fill="#2563eb" opacity="0.7"/>
  <circle cx="40" cy="50" r="2" fill="#2563eb" opacity="0.7"/>
  <line x1="32" y1="47" x2="38" y2="49" stroke="#2563eb" stroke-width="0.8"/>
  <!-- Arrow head -->
  <path d="M37,48 L40,50 L37,51.5" fill="none" stroke="#2563eb" stroke-width="0.6"/>
  <circle cx="35" cy="48" r="1" fill="#2563eb" opacity="0.9"/>
  <!-- Right eye: dependency-graph iris -->
  <ellipse cx="65" cy="48" rx="9" ry="7" fill="#020610" stroke="#2563eb" stroke-width="1.2"/>
  <circle cx="60" cy="46" r="2" fill="#2563eb" opacity="0.7"/>
  <circle cx="70" cy="50" r="2" fill="#2563eb" opacity="0.7"/>
  <line x1="62" y1="47" x2="68" y2="49" stroke="#2563eb" stroke-width="0.8"/>
  <path d="M67,48 L70,50 L67,51.5" fill="none" stroke="#2563eb" stroke-width="0.6"/>
  <circle cx="65" cy="48" r="1" fill="#2563eb" opacity="0.9"/>
  <!-- Nose -->
  <path d="M47,55 L50,60 L53,55" stroke="#2563eb" stroke-width="0.8" fill="none" opacity="0.5"/>
  <!-- Mouth: systematic -->
  <path d="M37,66 Q50,64 63,66" stroke="#2563eb" stroke-width="1.1" fill="none"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="4" fill="#2563eb" opacity="0.9">SR-TPM</text>
`);

// TPM: Systematic oval, medium blue, roadmap-milestone iris, OKR marks on forehead
const TPM = wrap(`
  <!-- Medium blue head — systematic -->
  <ellipse cx="50" cy="47" rx="25" ry="27" fill="#040b1c" stroke="#60a5fa" stroke-width="1.3"/>
  <!-- OKR marks on forehead: O·K·R text -->
  <text x="50" y="30" text-anchor="middle" font-family="monospace" font-size="4.5" fill="#60a5fa" opacity="0.7">O·K·R</text>
  <!-- Brow: organized -->
  <path d="M25,38 Q37,34 50,36 Q63,34 75,38" fill="none" stroke="#60a5fa" stroke-width="1"/>
  <!-- Left eye: roadmap-milestone iris (horizontal roadmap path) -->
  <ellipse cx="36" cy="48" rx="8" ry="6.5" fill="#020811" stroke="#60a5fa" stroke-width="1.1"/>
  <!-- Roadmap line with milestone nodes -->
  <line x1="28.5" y1="48" x2="43.5" y2="48" stroke="#60a5fa" stroke-width="0.8"/>
  <circle cx="30" cy="48" r="1.3" fill="#60a5fa" opacity="0.7"/>
  <circle cx="36" cy="48" r="1.8" fill="#60a5fa" opacity="0.9"/>
  <circle cx="43" cy="48" r="1.3" fill="#60a5fa" opacity="0.7"/>
  <!-- Mile-markers: vertical ticks -->
  <line x1="30" y1="45" x2="30" y2="51" stroke="#60a5fa" stroke-width="0.5" opacity="0.5"/>
  <line x1="36" y1="44" x2="36" y2="52" stroke="#60a5fa" stroke-width="0.7" opacity="0.6"/>
  <line x1="43" y1="45" x2="43" y2="51" stroke="#60a5fa" stroke-width="0.5" opacity="0.5"/>
  <!-- Right eye: roadmap iris -->
  <ellipse cx="64" cy="48" rx="8" ry="6.5" fill="#020811" stroke="#60a5fa" stroke-width="1.1"/>
  <line x1="56.5" y1="48" x2="71.5" y2="48" stroke="#60a5fa" stroke-width="0.8"/>
  <circle cx="58" cy="48" r="1.3" fill="#60a5fa" opacity="0.7"/>
  <circle cx="64" cy="48" r="1.8" fill="#60a5fa" opacity="0.9"/>
  <circle cx="71" cy="48" r="1.3" fill="#60a5fa" opacity="0.7"/>
  <line x1="58" y1="45" x2="58" y2="51" stroke="#60a5fa" stroke-width="0.5" opacity="0.5"/>
  <line x1="64" y1="44" x2="64" y2="52" stroke="#60a5fa" stroke-width="0.7" opacity="0.6"/>
  <line x1="71" y1="45" x2="71" y2="51" stroke="#60a5fa" stroke-width="0.5" opacity="0.5"/>
  <!-- Nose: milestone dot -->
  <circle cx="50" cy="57" r="1.5" fill="#60a5fa" opacity="0.5"/>
  <!-- Mouth: systematic curve -->
  <path d="M38,65 Q50,63 62,65" stroke="#60a5fa" stroke-width="1" fill="none"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="4" fill="#60a5fa" opacity="0.9">TPM</text>
`);

// ─────────────────────────────────────────────────────────────────────────────
// DEPT 17: SCRUM MASTER — agile-purple, sprint-burndown iris
// ─────────────────────────────────────────────────────────────────────────────

// SCRUM: Energetic sprint-master, agile-purple, sprint-burndown iris, sprint velocity marks
const SCRUM = wrap(`
  <!-- Agile purple head — energetic, dynamic -->
  <ellipse cx="50" cy="46" rx="26" ry="28" fill="#0e0618" stroke="#a855f7" stroke-width="1.5"/>
  <!-- Sprint velocity marks: upward arrows on forehead -->
  <path d="M38,28 L38,20 M36,22 L38,20 L40,22" stroke="#a855f7" stroke-width="1.2" fill="none" opacity="0.7"/>
  <path d="M50,26 L50,17 M48,19 L50,17 L52,19" stroke="#a855f7" stroke-width="1.4" fill="none" opacity="0.9"/>
  <path d="M62,28 L62,20 M60,22 L62,20 L64,22" stroke="#a855f7" stroke-width="1.2" fill="none" opacity="0.7"/>
  <!-- Brow: facilitative, open -->
  <path d="M24,38 Q37,33 50,35 Q63,33 76,38" fill="none" stroke="#a855f7" stroke-width="1.1"/>
  <!-- Left eye: sprint burndown chart iris -->
  <ellipse cx="35" cy="48" rx="9" ry="7.5" fill="#07030f" stroke="#a855f7" stroke-width="1.2"/>
  <rect x="27" y="42" width="16" height="11" rx="1" fill="none" stroke="#a855f7" stroke-width="0.5" opacity="0.4"/>
  <!-- Ideal burndown: straight diagonal -->
  <line x1="28" y1="43" x2="42" y2="52" stroke="#a855f7" stroke-width="0.6" opacity="0.4" stroke-dasharray="1.5,1"/>
  <!-- Actual burndown: stepped line -->
  <polyline points="28,43 30,43 30,46 33,46 33,44 36,44 36,49 39,49 39,47 42,47" stroke="#22c55e" stroke-width="0.8" fill="none" opacity="0.8"/>
  <circle cx="35" cy="48" r="1.2" fill="#a855f7" opacity="0.9"/>
  <!-- Right eye: sprint burndown iris -->
  <ellipse cx="65" cy="48" rx="9" ry="7.5" fill="#07030f" stroke="#a855f7" stroke-width="1.2"/>
  <rect x="57" y="42" width="16" height="11" rx="1" fill="none" stroke="#a855f7" stroke-width="0.5" opacity="0.4"/>
  <line x1="58" y1="43" x2="72" y2="52" stroke="#a855f7" stroke-width="0.6" opacity="0.4" stroke-dasharray="1.5,1"/>
  <polyline points="58,43 60,43 60,46 63,46 63,44 66,44 66,49 69,49 69,47 72,47" stroke="#22c55e" stroke-width="0.8" fill="none" opacity="0.8"/>
  <circle cx="65" cy="48" r="1.2" fill="#a855f7" opacity="0.9"/>
  <!-- Nose: agile circle -->
  <circle cx="50" cy="57" r="2" fill="none" stroke="#a855f7" stroke-width="0.8" opacity="0.6"/>
  <!-- Mouth: energetic facilitator smile -->
  <path d="M36,66 Q50,72 64,66" stroke="#a855f7" stroke-width="1.4" fill="none"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="4" fill="#a855f7" opacity="0.9">SCRUM</text>
`);

// ─────────────────────────────────────────────────────────────────────────────
// ADDITIONAL: PPL-ANALYTICS & DEV-ADV
// ─────────────────────────────────────────────────────────────────────────────

// PPL-ANALYTICS: Data meets HR face, warm-data purple, people-chart iris, analytics marks
const PPL_ANALYTICS = wrap(`
  <!-- Warm-data purple head — data meets HR, hybrid oval -->
  <ellipse cx="50" cy="46" rx="26" ry="28" fill="#100818" stroke="#c084fc" stroke-width="1.4"/>
  <!-- Analytics marks: small chart crown -->
  <rect x="38" y="20" width="4" height="8" rx="1" fill="#c084fc" opacity="0.5"/>
  <rect x="44" y="16" width="4" height="12" rx="1" fill="#c084fc" opacity="0.7"/>
  <rect x="50" y="18" width="4" height="10" rx="1" fill="#c084fc" opacity="0.6"/>
  <rect x="56" y="14" width="4" height="14" rx="1" fill="#c084fc" opacity="0.8"/>
  <line x1="36" y1="28" x2="62" y2="28" stroke="#c084fc" stroke-width="0.7" opacity="0.4"/>
  <!-- Brow: analytical-warm -->
  <path d="M24,38 Q37,33 50,35 Q63,33 76,38" fill="none" stroke="#c084fc" stroke-width="1"/>
  <!-- Left eye: people-chart iris (person icons in bar chart) -->
  <ellipse cx="35" cy="49" rx="8.5" ry="6.5" fill="#08040f" stroke="#c084fc" stroke-width="1.1"/>
  <!-- Mini bar chart with person shape on each bar -->
  <rect x="28" y="50" width="3" height="5" fill="#c084fc" opacity="0.6"/>
  <circle cx="29.5" cy="49" r="1.5" fill="none" stroke="#c084fc" stroke-width="0.7"/>
  <rect x="33" y="47" width="3" height="8" fill="#c084fc" opacity="0.7"/>
  <circle cx="34.5" cy="46" r="1.5" fill="none" stroke="#c084fc" stroke-width="0.7"/>
  <rect x="38" y="48.5" width="3" height="6.5" fill="#c084fc" opacity="0.8"/>
  <circle cx="39.5" cy="47.5" r="1.5" fill="none" stroke="#c084fc" stroke-width="0.7"/>
  <line x1="27" y1="55" x2="43" y2="55" stroke="#c084fc" stroke-width="0.5" opacity="0.4"/>
  <circle cx="35" cy="49" r="1" fill="#c084fc" opacity="0.85"/>
  <!-- Right eye: people-chart iris -->
  <ellipse cx="65" cy="49" rx="8.5" ry="6.5" fill="#08040f" stroke="#c084fc" stroke-width="1.1"/>
  <rect x="58" y="50" width="3" height="5" fill="#c084fc" opacity="0.6"/>
  <circle cx="59.5" cy="49" r="1.5" fill="none" stroke="#c084fc" stroke-width="0.7"/>
  <rect x="63" y="47" width="3" height="8" fill="#c084fc" opacity="0.7"/>
  <circle cx="64.5" cy="46" r="1.5" fill="none" stroke="#c084fc" stroke-width="0.7"/>
  <rect x="68" y="48.5" width="3" height="6.5" fill="#c084fc" opacity="0.8"/>
  <circle cx="69.5" cy="47.5" r="1.5" fill="none" stroke="#c084fc" stroke-width="0.7"/>
  <line x1="57" y1="55" x2="73" y2="55" stroke="#c084fc" stroke-width="0.5" opacity="0.4"/>
  <circle cx="65" cy="49" r="1" fill="#c084fc" opacity="0.85"/>
  <!-- Nose: data dot -->
  <circle cx="50" cy="58" r="1.5" fill="none" stroke="#c084fc" stroke-width="0.7" opacity="0.5"/>
  <!-- Mouth: analytical smile -->
  <path d="M38,66 Q50,70 62,66" stroke="#c084fc" stroke-width="1" fill="none"/>
  <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#c084fc" opacity="0.9">PPL-ANALYTICS</text>
`);

const svgs: Record<string, string> = {
  // DEPT 14: LEGAL
  "VP-LEGAL": VP_LEGAL,
  "CONTRACTS": CONTRACTS,
  "PRIVACY": PRIVACY,
  "COMPLIANCE": COMPLIANCE,
  "PARALEGAL": PARALEGAL,
  "IP-COUNSEL": IP_COUNSEL,
  "PROD-COUNSEL": PROD_COUNSEL,
  // DEPT 15: IT OPS
  "DIR-IT": DIR_IT,
  "SYSADMIN": SYSADMIN,
  "IT-SUPPORT": IT_SUPPORT,
  "ENT-APPS": ENT_APPS,
  "BI-ANALYST": BI_ANALYST,
  // DEPT 16: DEVREL
  "DIR-DEVREL": DIR_DEVREL,
  "SR-DEV-ADV": SR_DEV_ADV,
  "DRE": DRE,
  "DEV-COMMUNITY": DEV_COMMUNITY,
  "DEV-ADV": DEV_ADV,
  // DEPT 17: PROGRAM MANAGEMENT
  "DIR-PMO": DIR_PMO,
  "SR-TPM": SR_TPM,
  "TPM": TPM,
  "SCRUM": SCRUM,
  // ADDITIONAL
  "PPL-ANALYTICS": PPL_ANALYTICS,
};

for (const [code, svg] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(OUT, `${code}.svg`), svg);
  console.log(`+ ${code}.svg`);
}

console.log(`\nBatch 9 complete: ${Object.keys(svgs).length} alien face SVGs written to ${OUT}`);
