import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, "../public/brand/avatars/agents");

const svgs: Record<string, string> = {

  // ─────────────────────────────────────────────────────────────────────────
  // AI/ML TAIL
  // ─────────────────────────────────────────────────────────────────────────

  "SR-AIE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="aie-bg" cx="50%" cy="45%" r="55%">
    <stop offset="0%" stop-color="#2a1040"/>
    <stop offset="100%" stop-color="#0d0520"/>
  </radialGradient>
  <radialGradient id="aie-skin" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#5a2d8a"/>
    <stop offset="100%" stop-color="#3a1060"/>
  </radialGradient>
  <radialGradient id="aie-eye-l" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#e8d4ff"/>
    <stop offset="60%" stop-color="#9b5fe0"/>
    <stop offset="100%" stop-color="#1a0040"/>
  </radialGradient>
  <radialGradient id="aie-eye-r" cx="40%" cy="35%" r="55%">
    <stop offset="0%" stop-color="#e8d4ff"/>
    <stop offset="60%" stop-color="#9b5fe0"/>
    <stop offset="100%" stop-color="#1a0040"/>
  </radialGradient>
  <filter id="aie-glow" x="-40%" y="-40%" width="180%" height="180%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<!-- Background -->
<rect width="100" height="100" fill="url(#aie-bg)" rx="8"/>
<!-- Neck -->
<rect x="43" y="68" width="14" height="10" rx="3" fill="#3a1060"/>
<!-- Head shape - elongated ethereal -->
<ellipse cx="50" cy="46" rx="24" ry="28" fill="url(#aie-skin)"/>
<!-- Subtle face sheen -->
<ellipse cx="50" cy="36" rx="16" ry="12" fill="#7a40b0" opacity="0.25"/>
<!-- Circuit antennae left -->
<line x1="38" y1="20" x2="28" y2="8" stroke="#c084fc" stroke-width="1" opacity="0.9"/>
<circle cx="28" cy="8" r="2" fill="#c084fc" opacity="0.9"/>
<line x1="28" y1="8" x2="22" y2="11" stroke="#c084fc" stroke-width="0.7" opacity="0.7"/>
<line x1="28" y1="8" x2="25" y2="3" stroke="#c084fc" stroke-width="0.7" opacity="0.7"/>
<rect x="21" y="10" width="3" height="2" rx="0.5" fill="#c084fc" opacity="0.7"/>
<!-- Circuit antennae right -->
<line x1="62" y1="20" x2="72" y2="8" stroke="#c084fc" stroke-width="1" opacity="0.9"/>
<circle cx="72" cy="8" r="2" fill="#c084fc" opacity="0.9"/>
<line x1="72" y1="8" x2="78" y2="11" stroke="#c084fc" stroke-width="0.7" opacity="0.7"/>
<line x1="72" y1="8" x2="75" y2="3" stroke="#c084fc" stroke-width="0.7" opacity="0.7"/>
<rect x="76" y="10" width="3" height="2" rx="0.5" fill="#c084fc" opacity="0.7"/>
<!-- Left eye (transformer iris: stacked rectangles) -->
<g filter="url(#aie-glow)">
  <ellipse cx="38" cy="44" rx="7" ry="7" fill="url(#aie-eye-l)"/>
  <rect x="33.5" y="41.5" width="9" height="1.2" rx="0.4" fill="#1a0040" opacity="0.85"/>
  <rect x="33.5" y="43.2" width="9" height="1.2" rx="0.4" fill="#1a0040" opacity="0.85"/>
  <rect x="33.5" y="44.9" width="9" height="1.2" rx="0.4" fill="#1a0040" opacity="0.85"/>
  <rect x="33.5" y="46.6" width="9" height="1.2" rx="0.4" fill="#1a0040" opacity="0.85"/>
  <ellipse cx="38" cy="44" rx="7" ry="7" fill="none" stroke="#c084fc" stroke-width="0.8"/>
  <ellipse cx="38" cy="44" rx="2" ry="2" fill="#ffffff" opacity="0.7"/>
</g>
<!-- Right eye (transformer iris: stacked rectangles) -->
<g filter="url(#aie-glow)">
  <ellipse cx="62" cy="44" rx="7" ry="7" fill="url(#aie-eye-r)"/>
  <rect x="57.5" y="41.5" width="9" height="1.2" rx="0.4" fill="#1a0040" opacity="0.85"/>
  <rect x="57.5" y="43.2" width="9" height="1.2" rx="0.4" fill="#1a0040" opacity="0.85"/>
  <rect x="57.5" y="44.9" width="9" height="1.2" rx="0.4" fill="#1a0040" opacity="0.85"/>
  <rect x="57.5" y="46.6" width="9" height="1.2" rx="0.4" fill="#1a0040" opacity="0.85"/>
  <ellipse cx="62" cy="44" rx="7" ry="7" fill="none" stroke="#c084fc" stroke-width="0.8"/>
  <ellipse cx="62" cy="44" rx="2" ry="2" fill="#ffffff" opacity="0.7"/>
</g>
<!-- Nose hint -->
<ellipse cx="50" cy="56" rx="2.5" ry="1.5" fill="#2a0050" opacity="0.5"/>
<!-- Subtle mouth - composed expression -->
<path d="M43,63 Q50,65 57,63" fill="none" stroke="#7a40b0" stroke-width="1" opacity="0.6"/>
<!-- Label -->
<rect x="28" y="88" width="44" height="8" rx="2" fill="#1a0040" stroke="#c084fc" stroke-width="0.7"/>
<text x="50" y="93.8" font-family="monospace" font-size="4" fill="#c084fc" text-anchor="middle">SR · AIE</text>
</svg>`,

  "AI-RES": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="res-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#1a0a30"/>
    <stop offset="100%" stop-color="#080215"/>
  </radialGradient>
  <radialGradient id="res-skin" cx="50%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#6b35a0" stop-opacity="1"/>
    <stop offset="40%" stop-color="#4a1880"/>
    <stop offset="100%" stop-color="#2a0850"/>
  </radialGradient>
  <radialGradient id="res-nebula" cx="30%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#9b3fc8" stop-opacity="0.3"/>
    <stop offset="100%" stop-color="#1a0040" stop-opacity="0"/>
  </radialGradient>
  <filter id="res-glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<!-- Background with nebula hint -->
<rect width="100" height="100" fill="url(#res-bg)" rx="8"/>
<ellipse cx="30" cy="30" rx="35" ry="30" fill="url(#res-nebula)"/>
<!-- Neck -->
<rect x="43" y="70" width="14" height="9" rx="3" fill="#2a0850"/>
<!-- Head shape - otherworldly elongated oval -->
<ellipse cx="50" cy="46" rx="25" ry="30" fill="url(#res-skin)"/>
<!-- Nebula texture on face -->
<ellipse cx="40" cy="38" rx="12" ry="8" fill="#7b2fbe" opacity="0.2"/>
<ellipse cx="62" cy="52" rx="10" ry="7" fill="#a855f7" opacity="0.12"/>
<!-- Three eyes in triangle formation -->
<!-- Top eye (apex of triangle) - white glowing -->
<g filter="url(#res-glow)">
  <ellipse cx="50" cy="36" rx="6" ry="6" fill="#ffffff" opacity="0.95"/>
  <ellipse cx="50" cy="36" rx="3" ry="3" fill="#e8d4ff"/>
  <ellipse cx="50" cy="36" rx="1.5" ry="1.5" fill="#000010"/>
  <ellipse cx="50" cy="36" rx="6" ry="6" fill="none" stroke="#e8d4ff" stroke-width="1" opacity="0.8"/>
</g>
<!-- Bottom left eye -->
<g filter="url(#res-glow)">
  <ellipse cx="37" cy="52" rx="6" ry="6" fill="#ffffff" opacity="0.95"/>
  <ellipse cx="37" cy="52" rx="3" ry="3" fill="#e8d4ff"/>
  <ellipse cx="37" cy="52" rx="1.5" ry="1.5" fill="#000010"/>
  <ellipse cx="37" cy="52" rx="6" ry="6" fill="none" stroke="#e8d4ff" stroke-width="1" opacity="0.8"/>
</g>
<!-- Bottom right eye -->
<g filter="url(#res-glow)">
  <ellipse cx="63" cy="52" rx="6" ry="6" fill="#ffffff" opacity="0.95"/>
  <ellipse cx="63" cy="52" rx="3" ry="3" fill="#e8d4ff"/>
  <ellipse cx="63" cy="52" rx="1.5" ry="1.5" fill="#000010"/>
  <ellipse cx="63" cy="52" rx="6" ry="6" fill="none" stroke="#e8d4ff" stroke-width="1" opacity="0.8"/>
</g>
<!-- Research paper glyph floating near head (right side) -->
<g opacity="0.8">
  <rect x="72" y="22" width="10" height="13" rx="1" fill="#1a0040" stroke="#a78bfa" stroke-width="0.7"/>
  <line x1="74" y1="26" x2="80" y2="26" stroke="#a78bfa" stroke-width="0.5" opacity="0.8"/>
  <line x1="74" y1="28" x2="80" y2="28" stroke="#a78bfa" stroke-width="0.5" opacity="0.8"/>
  <line x1="74" y1="30" x2="78" y2="30" stroke="#a78bfa" stroke-width="0.5" opacity="0.8"/>
  <text x="77" y="24.5" font-family="monospace" font-size="2.5" fill="#a78bfa" text-anchor="middle">R</text>
</g>
<!-- Subtle nose -->
<ellipse cx="50" cy="62" rx="2" ry="1.2" fill="#2a0850" opacity="0.4"/>
<!-- Thin serene mouth -->
<path d="M44,68 Q50,70 56,68" fill="none" stroke="#7b2fbe" stroke-width="0.8" opacity="0.5"/>
<!-- Label -->
<rect x="28" y="88" width="44" height="8" rx="2" fill="#1a0040" stroke="#a78bfa" stroke-width="0.7"/>
<text x="50" y="93.8" font-family="monospace" font-size="4" fill="#a78bfa" text-anchor="middle">AI · RES</text>
</svg>`,

  "AI-ETHICS": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <linearGradient id="eth-bg" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#050505"/>
    <stop offset="100%" stop-color="#0a0a0a"/>
  </linearGradient>
  <linearGradient id="eth-skin" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#1a1a1a"/>
    <stop offset="50%" stop-color="#f0f0f0"/>
    <stop offset="100%" stop-color="#f0f0f0"/>
  </linearGradient>
  <filter id="eth-glow" x="-40%" y="-40%" width="180%" height="180%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <clipPath id="eth-face-clip">
    <ellipse cx="50" cy="46" rx="24" ry="27"/>
  </clipPath>
</defs>
<!-- Background -->
<rect width="100" height="100" fill="url(#eth-bg)" rx="8"/>
<!-- Neck -->
<rect x="44" y="70" width="12" height="9" rx="2">
  <animate attributeName="fill" values="#1a1a1a;#f0f0f0" dur="0s" fill="freeze"/>
</rect>
<rect x="44" y="70" width="6" height="9" rx="0" fill="#1a1a1a"/>
<rect x="50" y="70" width="6" height="9" rx="0" fill="#f0f0f0"/>
<!-- Head shape (yin-yang split skin) -->
<ellipse cx="50" cy="46" rx="24" ry="27" fill="url(#eth-skin)"/>
<!-- Hard vertical split line through center -->
<line x1="50" y1="19" x2="50" y2="73" stroke="#555555" stroke-width="0.4" opacity="0.5"/>
<!-- Left eye (black) -->
<g filter="url(#eth-glow)">
  <ellipse cx="38" cy="44" rx="6.5" ry="6.5" fill="#1a1a1a" stroke="#ffffff" stroke-width="0.8"/>
  <ellipse cx="38" cy="44" rx="2.5" ry="2.5" fill="#000000"/>
  <ellipse cx="36.5" cy="42.5" rx="1" ry="1" fill="#333333" opacity="0.7"/>
</g>
<!-- Right eye (white) -->
<g filter="url(#eth-glow)">
  <ellipse cx="62" cy="44" rx="6.5" ry="6.5" fill="#f5f5f5" stroke="#1a1a1a" stroke-width="0.8"/>
  <ellipse cx="62" cy="44" rx="2.5" ry="2.5" fill="#ffffff"/>
  <ellipse cx="60.5" cy="42.5" rx="1" ry="1" fill="#cccccc" opacity="0.7"/>
</g>
<!-- Scale/balance forehead mark -->
<g opacity="0.9">
  <!-- Balance beam -->
  <line x1="42" y1="26" x2="58" y2="26" stroke="#999999" stroke-width="1"/>
  <!-- Center post -->
  <line x1="50" y1="22" x2="50" y2="26" stroke="#999999" stroke-width="1"/>
  <circle cx="50" cy="22" r="1.2" fill="#999999"/>
  <!-- Left pan -->
  <line x1="42" y1="26" x2="40" y2="30" stroke="#777777" stroke-width="0.6"/>
  <ellipse cx="40" cy="31" rx="3" ry="1" fill="none" stroke="#777777" stroke-width="0.6"/>
  <!-- Right pan -->
  <line x1="58" y1="26" x2="60" y2="30" stroke="#777777" stroke-width="0.6"/>
  <ellipse cx="60" cy="31" rx="3" ry="1" fill="none" stroke="#777777" stroke-width="0.6"/>
</g>
<!-- Solemn thin mouth -->
<path d="M43,62 L57,62" fill="none" stroke="#777777" stroke-width="0.9" opacity="0.8"/>
<!-- Subtle nose -->
<ellipse cx="50" cy="55" rx="2" ry="1.2" fill="#555555" opacity="0.3"/>
<!-- Label -->
<rect x="22" y="88" width="56" height="8" rx="2" fill="#0d0d0d" stroke="#888888" stroke-width="0.7"/>
<text x="50" y="93.8" font-family="monospace" font-size="3.8" fill="#aaaaaa" text-anchor="middle">AI · ETHICS</text>
</svg>`,

  // ─────────────────────────────────────────────────────────────────────────
  // QA DEPARTMENT — MULTIPLE EYES (THEY SEE ALL BUGS)
  // ─────────────────────────────────────────────────────────────────────────

  "DIR-QA": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="qa-dir-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#1a0e00"/>
    <stop offset="100%" stop-color="#080500"/>
  </radialGradient>
  <radialGradient id="qa-dir-skin" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#b45309"/>
    <stop offset="100%" stop-color="#78350f"/>
  </radialGradient>
  <radialGradient id="qa-eye-orange" cx="35%" cy="35%" r="60%">
    <stop offset="0%" stop-color="#fdba74"/>
    <stop offset="50%" stop-color="#ea580c"/>
    <stop offset="100%" stop-color="#1a0800"/>
  </radialGradient>
  <filter id="qa-dir-glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<!-- Background -->
<rect width="100" height="100" fill="url(#qa-dir-bg)" rx="8"/>
<!-- Neck -->
<rect x="43" y="70" width="14" height="9" rx="3" fill="#78350f"/>
<!-- Head - wide commanding -->
<ellipse cx="50" cy="46" rx="27" ry="24" fill="url(#qa-dir-skin)"/>
<!-- Brow ridge (stern) -->
<path d="M26,36 Q50,31 74,36" fill="none" stroke="#451a03" stroke-width="2" opacity="0.6"/>
<!-- 4 eyes in 2x2 grid - all scanning orange -->
<!-- Top-left eye -->
<g filter="url(#qa-dir-glow)">
  <ellipse cx="36" cy="40" rx="5.5" ry="5.5" fill="url(#qa-eye-orange)"/>
  <ellipse cx="36" cy="40" rx="2" ry="2" fill="#7c2d12"/>
  <ellipse cx="36" cy="40" rx="5.5" ry="5.5" fill="none" stroke="#fb923c" stroke-width="0.8"/>
  <ellipse cx="34.8" cy="38.8" rx="0.8" ry="0.8" fill="#ffffff" opacity="0.6"/>
</g>
<!-- Top-right eye -->
<g filter="url(#qa-dir-glow)">
  <ellipse cx="64" cy="40" rx="5.5" ry="5.5" fill="url(#qa-eye-orange)"/>
  <ellipse cx="64" cy="40" rx="2" ry="2" fill="#7c2d12"/>
  <ellipse cx="64" cy="40" rx="5.5" ry="5.5" fill="none" stroke="#fb923c" stroke-width="0.8"/>
  <ellipse cx="62.8" cy="38.8" rx="0.8" ry="0.8" fill="#ffffff" opacity="0.6"/>
</g>
<!-- Bottom-left eye -->
<g filter="url(#qa-dir-glow)">
  <ellipse cx="36" cy="54" rx="5.5" ry="5.5" fill="url(#qa-eye-orange)"/>
  <ellipse cx="36" cy="54" rx="2" ry="2" fill="#7c2d12"/>
  <ellipse cx="36" cy="54" rx="5.5" ry="5.5" fill="none" stroke="#fb923c" stroke-width="0.8"/>
  <ellipse cx="34.8" cy="52.8" rx="0.8" ry="0.8" fill="#ffffff" opacity="0.6"/>
</g>
<!-- Bottom-right eye -->
<g filter="url(#qa-dir-glow)">
  <ellipse cx="64" cy="54" rx="5.5" ry="5.5" fill="url(#qa-eye-orange)"/>
  <ellipse cx="64" cy="54" rx="2" ry="2" fill="#7c2d12"/>
  <ellipse cx="64" cy="54" rx="5.5" ry="5.5" fill="none" stroke="#fb923c" stroke-width="0.8"/>
  <ellipse cx="62.8" cy="52.8" rx="0.8" ry="0.8" fill="#ffffff" opacity="0.6"/>
</g>
<!-- Bug-zapper marks on face -->
<path d="M47,38 L50,33 L53,38" fill="none" stroke="#fbbf24" stroke-width="0.7" opacity="0.7"/>
<path d="M49,38 L50,35 L51,38" fill="#fbbf24" opacity="0.5"/>
<path d="M47,56 L50,61 L53,56" fill="none" stroke="#fbbf24" stroke-width="0.7" opacity="0.7"/>
<!-- Stern mouth -->
<path d="M38,65 L62,65" fill="none" stroke="#451a03" stroke-width="1.5" opacity="0.8"/>
<path d="M38,65 L40,62" fill="none" stroke="#451a03" stroke-width="0.9" opacity="0.6"/>
<path d="M62,65 L60,62" fill="none" stroke="#451a03" stroke-width="0.9" opacity="0.6"/>
<!-- Label -->
<rect x="28" y="88" width="44" height="8" rx="2" fill="#1a0800" stroke="#fb923c" stroke-width="0.7"/>
<text x="50" y="93.8" font-family="monospace" font-size="4" fill="#fb923c" text-anchor="middle">DIR · QA</text>
</svg>`,

  "MGR-QA": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="qa-mgr-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#180d00"/>
    <stop offset="100%" stop-color="#070400"/>
  </radialGradient>
  <radialGradient id="qa-mgr-skin" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#d97706"/>
    <stop offset="100%" stop-color="#92400e"/>
  </radialGradient>
  <radialGradient id="qa-mgr-eye" cx="35%" cy="35%" r="60%">
    <stop offset="0%" stop-color="#fde68a"/>
    <stop offset="55%" stop-color="#d97706"/>
    <stop offset="100%" stop-color="#1a0800"/>
  </radialGradient>
  <filter id="qa-mgr-glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<!-- Background -->
<rect width="100" height="100" fill="url(#qa-mgr-bg)" rx="8"/>
<!-- Neck -->
<rect x="43" y="70" width="14" height="9" rx="3" fill="#92400e"/>
<!-- Wide face -->
<ellipse cx="50" cy="46" rx="28" ry="22" fill="url(#qa-mgr-skin)"/>
<!-- 3 eyes in horizontal row (left, center, right) -->
<!-- Left eye -->
<g filter="url(#qa-mgr-glow)">
  <ellipse cx="32" cy="46" rx="5.5" ry="5.5" fill="url(#qa-mgr-eye)"/>
  <ellipse cx="32" cy="46" rx="2" ry="2" fill="#7c2d12"/>
  <ellipse cx="32" cy="46" rx="5.5" ry="5.5" fill="none" stroke="#fbbf24" stroke-width="0.8"/>
  <ellipse cx="30.8" cy="44.8" rx="0.8" ry="0.8" fill="#ffffff" opacity="0.6"/>
</g>
<!-- Center eye -->
<g filter="url(#qa-mgr-glow)">
  <ellipse cx="50" cy="46" rx="5.5" ry="5.5" fill="url(#qa-mgr-eye)"/>
  <ellipse cx="50" cy="46" rx="2" ry="2" fill="#7c2d12"/>
  <ellipse cx="50" cy="46" rx="5.5" ry="5.5" fill="none" stroke="#fbbf24" stroke-width="0.8"/>
  <ellipse cx="48.8" cy="44.8" rx="0.8" ry="0.8" fill="#ffffff" opacity="0.6"/>
</g>
<!-- Right eye -->
<g filter="url(#qa-mgr-glow)">
  <ellipse cx="68" cy="46" rx="5.5" ry="5.5" fill="url(#qa-mgr-eye)"/>
  <ellipse cx="68" cy="46" rx="2" ry="2" fill="#7c2d12"/>
  <ellipse cx="68" cy="46" rx="5.5" ry="5.5" fill="none" stroke="#fbbf24" stroke-width="0.8"/>
  <ellipse cx="66.8" cy="44.8" rx="0.8" ry="0.8" fill="#ffffff" opacity="0.6"/>
</g>
<!-- Checklist marks on cheeks -->
<!-- Left cheek -->
<text x="22" y="52" font-family="monospace" font-size="5" fill="#fbbf24" opacity="0.6">v</text>
<text x="22" y="57" font-family="monospace" font-size="5" fill="#fbbf24" opacity="0.4">v</text>
<!-- Right cheek -->
<text x="73" y="52" font-family="monospace" font-size="5" fill="#fbbf24" opacity="0.6">v</text>
<text x="73" y="57" font-family="monospace" font-size="5" fill="#fbbf24" opacity="0.4">v</text>
<!-- Methodical flat mouth -->
<path d="M40,62 L60,62" fill="none" stroke="#78350f" stroke-width="1.2" opacity="0.8"/>
<!-- Subtle nose -->
<ellipse cx="50" cy="56" rx="2" ry="1.2" fill="#78350f" opacity="0.4"/>
<!-- Label -->
<rect x="28" y="88" width="44" height="8" rx="2" fill="#1a0800" stroke="#fbbf24" stroke-width="0.7"/>
<text x="50" y="93.8" font-family="monospace" font-size="4" fill="#fbbf24" text-anchor="middle">MGR · QA</text>
</svg>`,

  "SR-QA-AUTO": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="auto-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#141414"/>
    <stop offset="100%" stop-color="#060606"/>
  </radialGradient>
  <radialGradient id="auto-skin" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#8a7a6a"/>
    <stop offset="100%" stop-color="#5a4a3a"/>
  </radialGradient>
  <radialGradient id="auto-eye-gear" cx="35%" cy="35%" r="60%">
    <stop offset="0%" stop-color="#fcd34d"/>
    <stop offset="55%" stop-color="#b45309"/>
    <stop offset="100%" stop-color="#1a0800"/>
  </radialGradient>
  <filter id="auto-glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<!-- Background -->
<rect width="100" height="100" fill="url(#auto-bg)" rx="8"/>
<!-- Neck -->
<rect x="43" y="68" width="14" height="10" rx="3" fill="#5a4a3a"/>
<!-- Technical face - steel amber -->
<ellipse cx="50" cy="46" rx="24" ry="26" fill="url(#auto-skin)"/>
<!-- Metal plate texture lines -->
<line x1="30" y1="30" x2="70" y2="30" stroke="#7a6a5a" stroke-width="0.4" opacity="0.4"/>
<line x1="28" y1="42" x2="72" y2="42" stroke="#7a6a5a" stroke-width="0.4" opacity="0.3"/>
<!-- Left eye - automation gear iris -->
<g filter="url(#auto-glow)">
  <ellipse cx="37" cy="44" rx="7" ry="7" fill="url(#auto-eye-gear)"/>
  <!-- Gear teeth on iris -->
  <circle cx="37" cy="44" r="4.5" fill="none" stroke="#1a0800" stroke-width="3" stroke-dasharray="2.4 1.4"/>
  <ellipse cx="37" cy="44" rx="2.5" ry="2.5" fill="#fcd34d" opacity="0.9"/>
  <ellipse cx="37" cy="44" rx="1" ry="1" fill="#1a0800"/>
  <ellipse cx="37" cy="44" rx="7" ry="7" fill="none" stroke="#fbbf24" stroke-width="0.7"/>
</g>
<!-- Right eye - robot reticle -->
<g filter="url(#auto-glow)">
  <ellipse cx="63" cy="44" rx="7" ry="7" fill="#0a1a0a"/>
  <ellipse cx="63" cy="44" rx="7" ry="7" fill="none" stroke="#00ff88" stroke-width="0.8"/>
  <!-- Reticle cross -->
  <line x1="56" y1="44" x2="70" y2="44" stroke="#00ff88" stroke-width="0.6" opacity="0.9"/>
  <line x1="63" y1="37" x2="63" y2="51" stroke="#00ff88" stroke-width="0.6" opacity="0.9"/>
  <!-- Corner brackets -->
  <path d="M57.5,40 L57.5,38 L59.5,38" fill="none" stroke="#00ff88" stroke-width="0.5"/>
  <path d="M68.5,40 L68.5,38 L66.5,38" fill="none" stroke="#00ff88" stroke-width="0.5"/>
  <path d="M57.5,48 L57.5,50 L59.5,50" fill="none" stroke="#00ff88" stroke-width="0.5"/>
  <path d="M68.5,48 L68.5,50 L66.5,50" fill="none" stroke="#00ff88" stroke-width="0.5"/>
  <ellipse cx="63" cy="44" rx="2" ry="2" fill="#00ff88" opacity="0.6"/>
</g>
<!-- Terminal chin marks -->
<text x="42" y="66" font-family="monospace" font-size="3.5" fill="#fbbf24" opacity="0.5">&gt;_</text>
<text x="52" y="66" font-family="monospace" font-size="3.5" fill="#00ff88" opacity="0.4">OK</text>
<!-- Determined flat expression -->
<path d="M40,61 L60,61" fill="none" stroke="#5a4a3a" stroke-width="1" opacity="0.7"/>
<!-- Label -->
<rect x="22" y="88" width="56" height="8" rx="2" fill="#0d0d0d" stroke="#fbbf24" stroke-width="0.7"/>
<text x="50" y="93.8" font-family="monospace" font-size="3.8" fill="#fbbf24" text-anchor="middle">SR · QA · AUTO</text>
</svg>`,

  "SR-QA-MAN": `<svg xmlns="http://www.w3.org/2020/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="man-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#1a0e00"/>
    <stop offset="100%" stop-color="#070400"/>
  </radialGradient>
  <radialGradient id="man-skin" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#c87941"/>
    <stop offset="100%" stop-color="#92400e"/>
  </radialGradient>
  <radialGradient id="man-eye" cx="30%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#fef3c7"/>
    <stop offset="50%" stop-color="#d97706"/>
    <stop offset="100%" stop-color="#1a0800"/>
  </radialGradient>
  <filter id="man-glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" fill="url(#man-bg)" rx="8"/>
<!-- Neck -->
<rect x="43" y="68" width="14" height="10" rx="3" fill="#92400e"/>
<!-- Careful oval face -->
<ellipse cx="50" cy="46" rx="22" ry="26" fill="url(#man-skin)"/>
<!-- Left eye - magnifying glass iris -->
<g filter="url(#man-glow)">
  <ellipse cx="37" cy="44" rx="7" ry="7" fill="url(#man-eye)"/>
  <!-- Magnifying glass shape in iris -->
  <circle cx="37" cy="43" r="3.5" fill="none" stroke="#451a03" stroke-width="1.2"/>
  <line x1="39.5" y1="46" x2="42" y2="49" stroke="#451a03" stroke-width="1.2" stroke-linecap="round"/>
  <ellipse cx="37" cy="44" rx="7" ry="7" fill="none" stroke="#fbbf24" stroke-width="0.7"/>
  <ellipse cx="35.5" cy="42" rx="0.8" ry="0.8" fill="#ffffff" opacity="0.5"/>
</g>
<!-- Right eye - magnifying glass iris -->
<g filter="url(#man-glow)">
  <ellipse cx="63" cy="44" rx="7" ry="7" fill="url(#man-eye)"/>
  <circle cx="63" cy="43" r="3.5" fill="none" stroke="#451a03" stroke-width="1.2"/>
  <line x1="65.5" y1="46" x2="68" y2="49" stroke="#451a03" stroke-width="1.2" stroke-linecap="round"/>
  <ellipse cx="63" cy="44" rx="7" ry="7" fill="none" stroke="#fbbf24" stroke-width="0.7"/>
  <ellipse cx="61.5" cy="42" rx="0.8" ry="0.8" fill="#ffffff" opacity="0.5"/>
</g>
<!-- Clipboard marks on forehead -->
<rect x="44" y="22" width="12" height="8" rx="1" fill="#451a03" stroke="#fbbf24" stroke-width="0.6" opacity="0.8"/>
<line x1="46" y1="24.5" x2="54" y2="24.5" stroke="#fbbf24" stroke-width="0.5" opacity="0.7"/>
<line x1="46" y1="26" x2="54" y2="26" stroke="#fbbf24" stroke-width="0.5" opacity="0.7"/>
<line x1="46" y1="27.5" x2="51" y2="27.5" stroke="#fbbf24" stroke-width="0.5" opacity="0.7"/>
<path d="M46.5,23 Q50,21.5 53.5,23" fill="none" stroke="#fbbf24" stroke-width="0.6" opacity="0.6"/>
<!-- Meticulous tight mouth -->
<path d="M43,63 L57,63" fill="none" stroke="#78350f" stroke-width="1" opacity="0.7"/>
<!-- Slight nose -->
<ellipse cx="50" cy="56" rx="2" ry="1.2" fill="#78350f" opacity="0.35"/>
<!-- Label -->
<rect x="22" y="88" width="56" height="8" rx="2" fill="#1a0800" stroke="#fbbf24" stroke-width="0.7"/>
<text x="50" y="93.8" font-family="monospace" font-size="3.8" fill="#fbbf24" text-anchor="middle">SR · QA · MAN</text>
</svg>`,

  "QA-ENG": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="qaeng-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#1a0900"/>
    <stop offset="100%" stop-color="#080400"/>
  </radialGradient>
  <radialGradient id="qaeng-skin" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#ea7c2a"/>
    <stop offset="100%" stop-color="#b45309"/>
  </radialGradient>
  <radialGradient id="qaeng-eye" cx="30%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#fff7ed"/>
    <stop offset="40%" stop-color="#f97316"/>
    <stop offset="100%" stop-color="#1a0800"/>
  </radialGradient>
  <filter id="qaeng-glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" fill="url(#qaeng-bg)" rx="8"/>
<!-- Neck -->
<rect x="43" y="69" width="14" height="9" rx="3" fill="#b45309"/>
<!-- Round face -->
<ellipse cx="50" cy="46" rx="24" ry="24" fill="url(#qaeng-skin)"/>
<!-- Left eye - test-case checklist iris -->
<g filter="url(#qaeng-glow)">
  <ellipse cx="36" cy="44" rx="7" ry="7" fill="url(#qaeng-eye)"/>
  <!-- Checklist rows in iris -->
  <line x1="31.5" y1="42" x2="40.5" y2="42" stroke="#7c2d12" stroke-width="0.6" opacity="0.8"/>
  <line x1="31.5" y1="44" x2="40.5" y2="44" stroke="#7c2d12" stroke-width="0.6" opacity="0.8"/>
  <line x1="31.5" y1="46" x2="40.5" y2="46" stroke="#7c2d12" stroke-width="0.6" opacity="0.8"/>
  <text x="33" y="42.8" font-family="monospace" font-size="2.2" fill="#7c2d12" opacity="0.9">v</text>
  <text x="33" y="44.8" font-family="monospace" font-size="2.2" fill="#7c2d12" opacity="0.9">v</text>
  <text x="33" y="46.8" font-family="monospace" font-size="2.2" fill="#7c2d12" opacity="0.7">?</text>
  <ellipse cx="36" cy="44" rx="7" ry="7" fill="none" stroke="#f97316" stroke-width="0.7"/>
</g>
<!-- Right eye - test-case checklist iris -->
<g filter="url(#qaeng-glow)">
  <ellipse cx="64" cy="44" rx="7" ry="7" fill="url(#qaeng-eye)"/>
  <line x1="59.5" y1="42" x2="68.5" y2="42" stroke="#7c2d12" stroke-width="0.6" opacity="0.8"/>
  <line x1="59.5" y1="44" x2="68.5" y2="44" stroke="#7c2d12" stroke-width="0.6" opacity="0.8"/>
  <line x1="59.5" y1="46" x2="68.5" y2="46" stroke="#7c2d12" stroke-width="0.6" opacity="0.8"/>
  <text x="61" y="42.8" font-family="monospace" font-size="2.2" fill="#7c2d12" opacity="0.9">v</text>
  <text x="61" y="44.8" font-family="monospace" font-size="2.2" fill="#7c2d12" opacity="0.7">x</text>
  <text x="61" y="46.8" font-family="monospace" font-size="2.2" fill="#7c2d12" opacity="0.7">?</text>
  <ellipse cx="64" cy="44" rx="7" ry="7" fill="none" stroke="#f97316" stroke-width="0.7"/>
</g>
<!-- Alert slight frown (bug-hunting mode) -->
<path d="M40,63 Q50,60 60,63" fill="none" stroke="#7c2d12" stroke-width="1.2" opacity="0.8"/>
<!-- Slight nose -->
<ellipse cx="50" cy="56" rx="2" ry="1.2" fill="#7c2d12" opacity="0.35"/>
<!-- Label -->
<rect x="28" y="88" width="44" height="8" rx="2" fill="#1a0800" stroke="#f97316" stroke-width="0.7"/>
<text x="50" y="93.8" font-family="monospace" font-size="4" fill="#f97316" text-anchor="middle">QA · ENG</text>
</svg>`,

  "JR-QA": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="jrqa-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#1c0e00"/>
    <stop offset="100%" stop-color="#090500"/>
  </radialGradient>
  <radialGradient id="jrqa-skin" cx="50%" cy="35%" r="60%">
    <stop offset="0%" stop-color="#fbbf24"/>
    <stop offset="100%" stop-color="#d97706"/>
  </radialGradient>
  <radialGradient id="jrqa-eye" cx="30%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#fffbeb"/>
    <stop offset="45%" stop-color="#f59e0b"/>
    <stop offset="100%" stop-color="#1a0800"/>
  </radialGradient>
  <filter id="jrqa-glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" fill="url(#jrqa-bg)" rx="8"/>
<!-- Neck -->
<rect x="43" y="70" width="14" height="8" rx="3" fill="#d97706"/>
<!-- Young round face -->
<ellipse cx="50" cy="47" rx="22" ry="24" fill="url(#jrqa-skin)"/>
<!-- Raised antennae (surprised) -->
<line x1="40" y1="24" x2="34" y2="10" stroke="#fbbf24" stroke-width="1.2" opacity="0.9"/>
<circle cx="34" cy="10" r="2.2" fill="#fbbf24" opacity="0.9"/>
<line x1="60" y1="24" x2="66" y2="10" stroke="#fbbf24" stroke-width="1.2" opacity="0.9"/>
<circle cx="66" cy="10" r="2.2" fill="#fbbf24" opacity="0.9"/>
<!-- Wide surprised eyes (finding first bugs) -->
<!-- Left eye - wide open -->
<g filter="url(#jrqa-glow)">
  <ellipse cx="37" cy="45" rx="8" ry="8.5" fill="url(#jrqa-eye)"/>
  <ellipse cx="37" cy="45" rx="3.5" ry="3.5" fill="#78350f"/>
  <ellipse cx="37" cy="45" rx="1.5" ry="1.5" fill="#1a0800"/>
  <ellipse cx="37" cy="45" rx="8" ry="8.5" fill="none" stroke="#fbbf24" stroke-width="0.8"/>
  <ellipse cx="35" cy="43" rx="1.2" ry="1.2" fill="#ffffff" opacity="0.7"/>
</g>
<!-- Right eye - wide open -->
<g filter="url(#jrqa-glow)">
  <ellipse cx="63" cy="45" rx="8" ry="8.5" fill="url(#jrqa-eye)"/>
  <ellipse cx="63" cy="45" rx="3.5" ry="3.5" fill="#78350f"/>
  <ellipse cx="63" cy="45" rx="1.5" ry="1.5" fill="#1a0800"/>
  <ellipse cx="63" cy="45" rx="8" ry="8.5" fill="none" stroke="#fbbf24" stroke-width="0.8"/>
  <ellipse cx="61" cy="43" rx="1.2" ry="1.2" fill="#ffffff" opacity="0.7"/>
</g>
<!-- Surprised "O" mouth -->
<ellipse cx="50" cy="65" rx="4" ry="3" fill="#78350f" opacity="0.7"/>
<ellipse cx="50" cy="65" rx="4" ry="3" fill="none" stroke="#d97706" stroke-width="0.7"/>
<!-- Slight nose -->
<ellipse cx="50" cy="58" rx="2" ry="1" fill="#d97706" opacity="0.4"/>
<!-- Label -->
<rect x="28" y="88" width="44" height="8" rx="2" fill="#1a0800" stroke="#fbbf24" stroke-width="0.7"/>
<text x="50" y="93.8" font-family="monospace" font-size="4" fill="#fbbf24" text-anchor="middle">JR · QA</text>
</svg>`,

  "PERF-TEST": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="perf-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#1a0000"/>
    <stop offset="100%" stop-color="#070000"/>
  </radialGradient>
  <radialGradient id="perf-skin" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#c2410c"/>
    <stop offset="100%" stop-color="#7f1d1d"/>
  </radialGradient>
  <radialGradient id="perf-eye" cx="30%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#fff1f2"/>
    <stop offset="45%" stop-color="#ef4444"/>
    <stop offset="100%" stop-color="#1a0000"/>
  </radialGradient>
  <filter id="perf-glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" fill="url(#perf-bg)" rx="8"/>
<!-- Neck -->
<rect x="44" y="70" width="12" height="8" rx="2" fill="#7f1d1d"/>
<!-- Intense narrow face -->
<ellipse cx="50" cy="46" rx="20" ry="26" fill="url(#perf-skin)"/>
<!-- Stopwatch mark on forehead -->
<circle cx="50" cy="26" r="6" fill="#1a0000" stroke="#ef4444" stroke-width="0.8"/>
<line x1="50" y1="20" x2="50" y2="23" stroke="#ef4444" stroke-width="0.7"/>
<line x1="50" y1="23" x2="53" y2="26" stroke="#fca5a5" stroke-width="0.7"/>
<line x1="47" y1="20.5" x2="53" y2="20.5" stroke="#ef4444" stroke-width="0.7"/>
<!-- Speed gauge iris eyes -->
<!-- Left eye -->
<g filter="url(#perf-glow)">
  <ellipse cx="38" cy="46" rx="7" ry="7" fill="url(#perf-eye)"/>
  <!-- Speedometer arc -->
  <path d="M32,46 A6,6 0 0,1 44,46" fill="none" stroke="#7f1d1d" stroke-width="1.2"/>
  <!-- Gauge needle -->
  <line x1="38" y1="46" x2="38" y2="40" stroke="#1a0000" stroke-width="0.8" stroke-linecap="round"/>
  <!-- Speed marks -->
  <line x1="32.5" y1="44" x2="33.5" y2="42" stroke="#7f1d1d" stroke-width="0.5"/>
  <line x1="38" y1="40.5" x2="38" y2="41.5" stroke="#7f1d1d" stroke-width="0.5"/>
  <line x1="43.5" y1="44" x2="42.5" y2="42" stroke="#7f1d1d" stroke-width="0.5"/>
  <ellipse cx="38" cy="46" rx="7" ry="7" fill="none" stroke="#ef4444" stroke-width="0.7"/>
  <ellipse cx="38" cy="46" rx="1.2" ry="1.2" fill="#ef4444"/>
</g>
<!-- Right eye -->
<g filter="url(#perf-glow)">
  <ellipse cx="62" cy="46" rx="7" ry="7" fill="url(#perf-eye)"/>
  <path d="M56,46 A6,6 0 0,1 68,46" fill="none" stroke="#7f1d1d" stroke-width="1.2"/>
  <line x1="62" y1="46" x2="65" y2="41" stroke="#1a0000" stroke-width="0.8" stroke-linecap="round"/>
  <line x1="56.5" y1="44" x2="57.5" y2="42" stroke="#7f1d1d" stroke-width="0.5"/>
  <line x1="62" y1="40.5" x2="62" y2="41.5" stroke="#7f1d1d" stroke-width="0.5"/>
  <line x1="67.5" y1="44" x2="66.5" y2="42" stroke="#7f1d1d" stroke-width="0.5"/>
  <ellipse cx="62" cy="46" rx="7" ry="7" fill="none" stroke="#ef4444" stroke-width="0.7"/>
  <ellipse cx="62" cy="46" rx="1.2" ry="1.2" fill="#ef4444"/>
</g>
<!-- Tight intense expression -->
<path d="M42,64 L58,64" fill="none" stroke="#7f1d1d" stroke-width="1.2" opacity="0.8"/>
<path d="M42,64 Q44,62 46,64" fill="none" stroke="#7f1d1d" stroke-width="0.7" opacity="0.5"/>
<path d="M54,64 Q56,62 58,64" fill="none" stroke="#7f1d1d" stroke-width="0.7" opacity="0.5"/>
<!-- Label -->
<rect x="22" y="88" width="56" height="8" rx="2" fill="#1a0000" stroke="#ef4444" stroke-width="0.7"/>
<text x="50" y="93.8" font-family="monospace" font-size="3.8" fill="#ef4444" text-anchor="middle">PERF · TEST</text>
</svg>`,

  "A11Y-TEST": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="a11y-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#001a20"/>
    <stop offset="100%" stop-color="#000a10"/>
  </radialGradient>
  <radialGradient id="a11y-skin" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#bfdbfe"/>
    <stop offset="100%" stop-color="#7dd3fc"/>
  </radialGradient>
  <radialGradient id="a11y-eye" cx="30%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#ffffff"/>
    <stop offset="50%" stop-color="#60a5fa"/>
    <stop offset="100%" stop-color="#1e3a5f"/>
  </radialGradient>
  <filter id="a11y-glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" fill="url(#a11y-bg)" rx="8"/>
<!-- Neck -->
<rect x="43" y="70" width="14" height="8" rx="3" fill="#7dd3fc"/>
<!-- Open kind face -->
<ellipse cx="50" cy="46" rx="24" ry="25" fill="url(#a11y-skin)"/>
<!-- Universal access symbol on forehead -->
<circle cx="50" cy="26" r="5.5" fill="none" stroke="#1d4ed8" stroke-width="1"/>
<circle cx="50" cy="23" r="1.5" fill="#1d4ed8"/>
<!-- Person body in symbol -->
<line x1="50" y1="24.5" x2="50" y2="29" stroke="#1d4ed8" stroke-width="1.2"/>
<line x1="47" y1="26.5" x2="53" y2="26.5" stroke="#1d4ed8" stroke-width="1"/>
<line x1="50" y1="29" x2="47.5" y2="32" stroke="#1d4ed8" stroke-width="1"/>
<line x1="50" y1="29" x2="52.5" y2="32" stroke="#1d4ed8" stroke-width="1"/>
<!-- Left eye - magnifying circle (accessibility check) -->
<g filter="url(#a11y-glow)">
  <ellipse cx="36" cy="45" rx="7.5" ry="7.5" fill="url(#a11y-eye)"/>
  <!-- Magnifying ring -->
  <circle cx="36" cy="44" r="4" fill="none" stroke="#1e40af" stroke-width="1.2"/>
  <line x1="39" y1="47" x2="42" y2="50" stroke="#1e40af" stroke-width="1.2" stroke-linecap="round"/>
  <ellipse cx="36" cy="45" rx="7.5" ry="7.5" fill="none" stroke="#60a5fa" stroke-width="0.7"/>
  <ellipse cx="34.5" cy="43" rx="0.8" ry="0.8" fill="#ffffff" opacity="0.6"/>
</g>
<!-- Right eye - magnifying circle -->
<g filter="url(#a11y-glow)">
  <ellipse cx="64" cy="45" rx="7.5" ry="7.5" fill="url(#a11y-eye)"/>
  <circle cx="64" cy="44" r="4" fill="none" stroke="#1e40af" stroke-width="1.2"/>
  <line x1="67" y1="47" x2="70" y2="50" stroke="#1e40af" stroke-width="1.2" stroke-linecap="round"/>
  <ellipse cx="64" cy="45" rx="7.5" ry="7.5" fill="none" stroke="#60a5fa" stroke-width="0.7"/>
  <ellipse cx="62.5" cy="43" rx="0.8" ry="0.8" fill="#ffffff" opacity="0.6"/>
</g>
<!-- Extra expressive brow lines (warm expression) -->
<path d="M28,37 Q36,34 44,37" fill="none" stroke="#1e40af" stroke-width="0.8" opacity="0.5"/>
<path d="M56,37 Q64,34 72,37" fill="none" stroke="#1e40af" stroke-width="0.8" opacity="0.5"/>
<!-- Friendly open mouth -->
<path d="M40,64 Q50,70 60,64" fill="none" stroke="#1e40af" stroke-width="1.2" opacity="0.7"/>
<!-- Slight nose -->
<ellipse cx="50" cy="57" rx="2" ry="1.2" fill="#5b8fa8" opacity="0.4"/>
<!-- Label -->
<rect x="22" y="88" width="56" height="8" rx="2" fill="#000a10" stroke="#60a5fa" stroke-width="0.7"/>
<text x="50" y="93.8" font-family="monospace" font-size="3.8" fill="#60a5fa" text-anchor="middle">A11Y · TEST</text>
</svg>`,

  // ─────────────────────────────────────────────────────────────────────────
  // SECURITY DEPARTMENT — MENACING, ARMORED, DANGEROUS
  // ─────────────────────────────────────────────────────────────────────────

  "DIR-SEC": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="dsec-bg" cx="50%" cy="35%" r="60%">
    <stop offset="0%" stop-color="#0d0d0d"/>
    <stop offset="100%" stop-color="#020202"/>
  </radialGradient>
  <radialGradient id="dsec-skin" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#1c1c1c"/>
    <stop offset="100%" stop-color="#0a0a0a"/>
  </radialGradient>
  <radialGradient id="dsec-eye" cx="30%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#ff6666"/>
    <stop offset="50%" stop-color="#cc0000"/>
    <stop offset="100%" stop-color="#300000"/>
  </radialGradient>
  <filter id="dsec-glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" fill="url(#dsec-bg)" rx="8"/>
<!-- Armored neck/shoulders -->
<path d="M30,75 L30,95 L70,95 L70,75 Q60,72 50,72 Q40,72 30,75 Z" fill="#141414" stroke="#ef4444" stroke-width="0.4"/>
<path d="M35,73 L35,95 L65,95 L65,73" fill="#0d0d0d" stroke="#333" stroke-width="0.3" opacity="0.5"/>
<!-- Head shape - armored -->
<ellipse cx="50" cy="44" rx="26" ry="24" fill="url(#dsec-skin)"/>
<!-- Armor plate top ridge -->
<path d="M28,36 L35,30 L50,28 L65,30 L72,36" fill="none" stroke="#ef4444" stroke-width="0.8" opacity="0.6"/>
<!-- Armored plate markings on face -->
<line x1="28" y1="40" x2="72" y2="40" stroke="#2a2a2a" stroke-width="1" opacity="0.7"/>
<line x1="28" y1="50" x2="72" y2="50" stroke="#2a2a2a" stroke-width="0.7" opacity="0.5"/>
<line x1="50" y1="28" x2="50" y2="68" stroke="#1a1a1a" stroke-width="0.5" opacity="0.4"/>
<!-- SINGLE MASSIVE RED EYE - centered, hexagonal iris -->
<g filter="url(#dsec-glow)">
  <!-- Outer glow ring -->
  <ellipse cx="50" cy="44" rx="13" ry="13" fill="#300000" opacity="0.6"/>
  <!-- Main eye -->
  <ellipse cx="50" cy="44" rx="11" ry="11" fill="url(#dsec-eye)"/>
  <!-- Hexagonal iris overlay -->
  <polygon points="50,33.5 59.5,38.75 59.5,49.25 50,54.5 40.5,49.25 40.5,38.75" fill="none" stroke="#cc0000" stroke-width="1.5" opacity="0.8"/>
  <!-- Inner hex -->
  <polygon points="50,37 56,40.5 56,47.5 50,51 44,47.5 44,40.5" fill="#600000" opacity="0.6"/>
  <!-- Pupil -->
  <ellipse cx="50" cy="44" rx="4" ry="4" fill="#1a0000"/>
  <ellipse cx="50" cy="44" rx="2" ry="2" fill="#ff0000" opacity="0.7"/>
  <!-- Eye gleam -->
  <ellipse cx="46" cy="40" rx="1.5" ry="1.5" fill="#ff6666" opacity="0.4"/>
</g>
<!-- NO MOUTH - tactical silence (just armored chin) -->
<path d="M34,60 Q50,58 66,60" fill="none" stroke="#1a1a1a" stroke-width="1" opacity="0.5"/>
<rect x="36" y="60" width="28" height="5" rx="1" fill="#141414" stroke="#333" stroke-width="0.4"/>
<!-- Menacing corner marks -->
<path d="M28,34 L24,30 L28,30" fill="none" stroke="#ef4444" stroke-width="0.7" opacity="0.6"/>
<path d="M72,34 L76,30 L72,30" fill="none" stroke="#ef4444" stroke-width="0.7" opacity="0.6"/>
<!-- Label -->
<rect x="28" y="88" width="44" height="8" rx="2" fill="#0d0000" stroke="#ef4444" stroke-width="0.7"/>
<text x="50" y="93.8" font-family="monospace" font-size="4" fill="#ef4444" text-anchor="middle">DIR · SEC</text>
</svg>`,

  "SR-SEC-ENG": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="srsec-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#111111"/>
    <stop offset="100%" stop-color="#040404"/>
  </radialGradient>
  <radialGradient id="srsec-skin" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#404040"/>
    <stop offset="100%" stop-color="#1a1a1a"/>
  </radialGradient>
  <radialGradient id="srsec-eye" cx="30%" cy="30%" r="65%">
    <stop offset="0%" stop-color="#fca5a5"/>
    <stop offset="55%" stop-color="#dc2626"/>
    <stop offset="100%" stop-color="#2a0000"/>
  </radialGradient>
  <filter id="srsec-glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" fill="url(#srsec-bg)" rx="8"/>
<!-- Neck -->
<rect x="44" y="68" width="12" height="10" rx="2" fill="#1a1a1a"/>
<!-- Angular tactical face -->
<path d="M26,36 L32,22 L50,18 L68,22 L74,36 L72,65 Q50,72 28,65 Z" fill="url(#srsec-skin)"/>
<!-- Lock symbol on forehead -->
<rect x="44" y="21" width="12" height="9" rx="2" fill="#0d0d0d" stroke="#dc2626" stroke-width="0.8"/>
<path d="M44,24 Q44,19 50,19 Q56,19 56,24" fill="none" stroke="#dc2626" stroke-width="0.8"/>
<rect x="48" y="24.5" width="4" height="3" rx="0.5" fill="#dc2626"/>
<!-- Reticle markings (tactical) -->
<line x1="26" y1="44" x2="30" y2="44" stroke="#dc2626" stroke-width="0.5" opacity="0.5"/>
<line x1="70" y1="44" x2="74" y2="44" stroke="#dc2626" stroke-width="0.5" opacity="0.5"/>
<!-- Small piercing red eyes -->
<g filter="url(#srsec-glow)">
  <ellipse cx="38" cy="44" rx="6" ry="5" fill="url(#srsec-eye)"/>
  <!-- Reticle iris -->
  <circle cx="38" cy="44" r="3" fill="none" stroke="#7f1d1d" stroke-width="0.7"/>
  <line x1="32" y1="44" x2="44" y2="44" stroke="#7f1d1d" stroke-width="0.4" opacity="0.8"/>
  <line x1="38" y1="38.5" x2="38" y2="49.5" stroke="#7f1d1d" stroke-width="0.4" opacity="0.8"/>
  <ellipse cx="38" cy="44" rx="1.2" ry="1.2" fill="#ff0000" opacity="0.8"/>
  <ellipse cx="38" cy="44" rx="6" ry="5" fill="none" stroke="#ef4444" stroke-width="0.6"/>
</g>
<g filter="url(#srsec-glow)">
  <ellipse cx="62" cy="44" rx="6" ry="5" fill="url(#srsec-eye)"/>
  <circle cx="62" cy="44" r="3" fill="none" stroke="#7f1d1d" stroke-width="0.7"/>
  <line x1="56" y1="44" x2="68" y2="44" stroke="#7f1d1d" stroke-width="0.4" opacity="0.8"/>
  <line x1="62" y1="38.5" x2="62" y2="49.5" stroke="#7f1d1d" stroke-width="0.4" opacity="0.8"/>
  <ellipse cx="62" cy="44" rx="1.2" ry="1.2" fill="#ff0000" opacity="0.8"/>
  <ellipse cx="62" cy="44" rx="6" ry="5" fill="none" stroke="#ef4444" stroke-width="0.6"/>
</g>
<!-- Stern expression -->
<path d="M38,62 L62,62" fill="none" stroke="#404040" stroke-width="1.2" opacity="0.8"/>
<path d="M38,62 L40,59" fill="none" stroke="#404040" stroke-width="0.7" opacity="0.5"/>
<path d="M62,62 L60,59" fill="none" stroke="#404040" stroke-width="0.7" opacity="0.5"/>
<!-- Label -->
<rect x="22" y="88" width="56" height="8" rx="2" fill="#0d0000" stroke="#dc2626" stroke-width="0.7"/>
<text x="50" y="93.8" font-family="monospace" font-size="3.5" fill="#dc2626" text-anchor="middle">SR · SEC · ENG</text>
</svg>`,

  "APPSEC": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="appsec-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#0f120a"/>
    <stop offset="100%" stop-color="#040504"/>
  </radialGradient>
  <radialGradient id="appsec-skin" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#4a5240"/>
    <stop offset="100%" stop-color="#2a3020"/>
  </radialGradient>
  <radialGradient id="appsec-eye" cx="30%" cy="30%" r="65%">
    <stop offset="0%" stop-color="#d4edda"/>
    <stop offset="50%" stop-color="#4a7055"/>
    <stop offset="100%" stop-color="#0a1a0a"/>
  </radialGradient>
  <filter id="appsec-glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" fill="url(#appsec-bg)" rx="8"/>
<!-- Neck -->
<rect x="43" y="68" width="14" height="10" rx="2" fill="#2a3020"/>
<!-- Code-scanning face - dark olive grey -->
<ellipse cx="50" cy="46" rx="24" ry="26" fill="url(#appsec-skin)"/>
<!-- Code bracket marks on cheeks -->
<text x="22" y="46" font-family="monospace" font-size="7" fill="#4ade80" opacity="0.5">{</text>
<text x="71" y="46" font-family="monospace" font-size="7" fill="#4ade80" opacity="0.5">}</text>
<!-- Left eye - code-scanning iris (horizontal scan lines) -->
<g filter="url(#appsec-glow)">
  <ellipse cx="37" cy="44" rx="7" ry="7" fill="url(#appsec-eye)"/>
  <!-- Horizontal scan lines across pupil -->
  <line x1="30.5" y1="41" x2="43.5" y2="41" stroke="#0a1a0a" stroke-width="0.7" opacity="0.85"/>
  <line x1="30.5" y1="43" x2="43.5" y2="43" stroke="#0a1a0a" stroke-width="0.7" opacity="0.85"/>
  <line x1="30.5" y1="45" x2="43.5" y2="45" stroke="#0a1a0a" stroke-width="0.7" opacity="0.85"/>
  <line x1="30.5" y1="47" x2="43.5" y2="47" stroke="#0a1a0a" stroke-width="0.7" opacity="0.85"/>
  <!-- Scan beam -->
  <line x1="30.5" y1="43.5" x2="43.5" y2="43.5" stroke="#00ff44" stroke-width="0.5" opacity="0.7"/>
  <ellipse cx="37" cy="44" rx="7" ry="7" fill="none" stroke="#4ade80" stroke-width="0.7"/>
  <ellipse cx="37" cy="44" rx="1.5" ry="1.5" fill="#4ade80" opacity="0.5"/>
</g>
<!-- Right eye - code-scanning iris -->
<g filter="url(#appsec-glow)">
  <ellipse cx="63" cy="44" rx="7" ry="7" fill="url(#appsec-eye)"/>
  <line x1="56.5" y1="41" x2="69.5" y2="41" stroke="#0a1a0a" stroke-width="0.7" opacity="0.85"/>
  <line x1="56.5" y1="43" x2="69.5" y2="43" stroke="#0a1a0a" stroke-width="0.7" opacity="0.85"/>
  <line x1="56.5" y1="45" x2="69.5" y2="45" stroke="#0a1a0a" stroke-width="0.7" opacity="0.85"/>
  <line x1="56.5" y1="47" x2="69.5" y2="47" stroke="#0a1a0a" stroke-width="0.7" opacity="0.85"/>
  <line x1="56.5" y1="45.5" x2="69.5" y2="45.5" stroke="#00ff44" stroke-width="0.5" opacity="0.7"/>
  <ellipse cx="63" cy="44" rx="7" ry="7" fill="none" stroke="#4ade80" stroke-width="0.7"/>
  <ellipse cx="63" cy="44" rx="1.5" ry="1.5" fill="#4ade80" opacity="0.5"/>
</g>
<!-- Flat focused expression -->
<path d="M41,62 L59,62" fill="none" stroke="#2a3020" stroke-width="1.2" opacity="0.7"/>
<!-- Subtle nose -->
<ellipse cx="50" cy="55" rx="2" ry="1.2" fill="#2a3020" opacity="0.4"/>
<!-- Label -->
<rect x="28" y="88" width="44" height="8" rx="2" fill="#050705" stroke="#4ade80" stroke-width="0.7"/>
<text x="50" y="93.8" font-family="monospace" font-size="4" fill="#4ade80" text-anchor="middle">APP · SEC</text>
</svg>`,

  "SEC-ENG": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="seceng-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#0e0e0e"/>
    <stop offset="100%" stop-color="#040404"/>
  </radialGradient>
  <radialGradient id="seceng-skin" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#555555"/>
    <stop offset="100%" stop-color="#2a2a2a"/>
  </radialGradient>
  <radialGradient id="seceng-eye" cx="30%" cy="30%" r="65%">
    <stop offset="0%" stop-color="#fecaca"/>
    <stop offset="55%" stop-color="#b91c1c"/>
    <stop offset="100%" stop-color="#200000"/>
  </radialGradient>
  <filter id="seceng-glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" fill="url(#seceng-bg)" rx="8"/>
<!-- Neck -->
<rect x="43" y="69" width="14" height="9" rx="2" fill="#2a2a2a"/>
<!-- Focused dark face - graphite -->
<ellipse cx="50" cy="46" rx="23" ry="25" fill="url(#seceng-skin)"/>
<!-- Shield marking on forehead -->
<path d="M44,20 L50,17 L56,20 L56,28 Q50,32 44,28 Z" fill="#1a1a1a" stroke="#b91c1c" stroke-width="0.9"/>
<!-- Cross on shield -->
<line x1="50" y1="19" x2="50" y2="30" stroke="#ef4444" stroke-width="0.7"/>
<line x1="45" y1="24" x2="55" y2="24" stroke="#ef4444" stroke-width="0.7"/>
<!-- Left eye - firewall-brick iris -->
<g filter="url(#seceng-glow)">
  <ellipse cx="37" cy="45" rx="7" ry="7" fill="url(#seceng-eye)"/>
  <!-- Brick pattern -->
  <rect x="31" y="42" width="5" height="2.5" rx="0.3" fill="#7f1d1d" opacity="0.8"/>
  <rect x="37" y="42" width="5" height="2.5" rx="0.3" fill="#7f1d1d" opacity="0.8"/>
  <rect x="28.5" y="45" width="5" height="2.5" rx="0.3" fill="#7f1d1d" opacity="0.8"/>
  <rect x="34" y="45" width="5" height="2.5" rx="0.3" fill="#7f1d1d" opacity="0.8"/>
  <ellipse cx="37" cy="45" rx="7" ry="7" fill="none" stroke="#b91c1c" stroke-width="0.7"/>
  <ellipse cx="37" cy="45" rx="2" ry="2" fill="#ef4444" opacity="0.7"/>
</g>
<!-- Right eye - firewall-brick iris -->
<g filter="url(#seceng-glow)">
  <ellipse cx="63" cy="45" rx="7" ry="7" fill="url(#seceng-eye)"/>
  <rect x="57" y="42" width="5" height="2.5" rx="0.3" fill="#7f1d1d" opacity="0.8"/>
  <rect x="63" y="42" width="5" height="2.5" rx="0.3" fill="#7f1d1d" opacity="0.8"/>
  <rect x="54.5" y="45" width="5" height="2.5" rx="0.3" fill="#7f1d1d" opacity="0.8"/>
  <rect x="60" y="45" width="5" height="2.5" rx="0.3" fill="#7f1d1d" opacity="0.8"/>
  <ellipse cx="63" cy="45" rx="7" ry="7" fill="none" stroke="#b91c1c" stroke-width="0.7"/>
  <ellipse cx="63" cy="45" rx="2" ry="2" fill="#ef4444" opacity="0.7"/>
</g>
<!-- Alert expression -->
<path d="M40,63 L60,63" fill="none" stroke="#3a3a3a" stroke-width="1.2" opacity="0.8"/>
<!-- Subtle nose -->
<ellipse cx="50" cy="56" rx="2" ry="1.2" fill="#2a2a2a" opacity="0.4"/>
<!-- Label -->
<rect x="28" y="88" width="44" height="8" rx="2" fill="#0d0000" stroke="#b91c1c" stroke-width="0.7"/>
<text x="50" y="93.8" font-family="monospace" font-size="4" fill="#b91c1c" text-anchor="middle">SEC · ENG</text>
</svg>`,

  "PENTEST": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="pt-bg" cx="50%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#080808"/>
    <stop offset="100%" stop-color="#000000"/>
  </radialGradient>
  <radialGradient id="pt-skin" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#111111"/>
    <stop offset="100%" stop-color="#000000"/>
  </radialGradient>
  <radialGradient id="pt-eye-main" cx="30%" cy="25%" r="70%">
    <stop offset="0%" stop-color="#ff4444"/>
    <stop offset="50%" stop-color="#cc0000"/>
    <stop offset="100%" stop-color="#300000"/>
  </radialGradient>
  <radialGradient id="pt-eye-small" cx="30%" cy="25%" r="70%">
    <stop offset="0%" stop-color="#ff2222"/>
    <stop offset="60%" stop-color="#880000"/>
    <stop offset="100%" stop-color="#200000"/>
  </radialGradient>
  <filter id="pt-glow" x="-60%" y="-60%" width="220%" height="220%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <filter id="pt-glow-sm" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" fill="url(#pt-bg)" rx="8"/>
<!-- Shark-fin head ridge -->
<path d="M50,4 L56,18 L50,17 L44,18 Z" fill="#1a0000" stroke="#cc0000" stroke-width="0.6"/>
<!-- Predatory angular face - void-black -->
<path d="M22,40 L26,20 L50,16 L74,20 L78,40 L74,68 Q50,76 26,68 Z" fill="url(#pt-skin)"/>
<!-- Sharp angular features suggesting danger -->
<!-- Cheekbone lines -->
<line x1="22" y1="40" x2="28" y2="44" stroke="#1a0000" stroke-width="1.5" opacity="0.6"/>
<line x1="78" y1="40" x2="72" y2="44" stroke="#1a0000" stroke-width="1.5" opacity="0.6"/>
<!-- Two smaller upper eyes (above main pair) -->
<g filter="url(#pt-glow-sm)">
  <ellipse cx="37" cy="33" rx="4.5" ry="3.5" fill="url(#pt-eye-small)"/>
  <line x1="32.5" y1="33" x2="41.5" y2="33" stroke="#500000" stroke-width="0.5" opacity="0.8"/>
  <line x1="37" y1="29.5" x2="37" y2="36.5" stroke="#500000" stroke-width="0.5" opacity="0.8"/>
  <circle cx="37" cy="33" r="1.5" fill="#cc0000" opacity="0.8"/>
  <ellipse cx="37" cy="33" rx="4.5" ry="3.5" fill="none" stroke="#ff2222" stroke-width="0.6"/>
</g>
<g filter="url(#pt-glow-sm)">
  <ellipse cx="63" cy="33" rx="4.5" ry="3.5" fill="url(#pt-eye-small)"/>
  <line x1="58.5" y1="33" x2="67.5" y2="33" stroke="#500000" stroke-width="0.5" opacity="0.8"/>
  <line x1="63" y1="29.5" x2="63" y2="36.5" stroke="#500000" stroke-width="0.5" opacity="0.8"/>
  <circle cx="63" cy="33" r="1.5" fill="#cc0000" opacity="0.8"/>
  <ellipse cx="63" cy="33" rx="4.5" ry="3.5" fill="none" stroke="#ff2222" stroke-width="0.6"/>
</g>
<!-- Two main glowing crimson eyes with crosshair iris -->
<g filter="url(#pt-glow)">
  <ellipse cx="36" cy="48" rx="8" ry="7" fill="url(#pt-eye-main)"/>
  <!-- Crosshair -->
  <line x1="28" y1="48" x2="44" y2="48" stroke="#200000" stroke-width="0.7" opacity="0.9"/>
  <line x1="36" y1="41" x2="36" y2="55" stroke="#200000" stroke-width="0.7" opacity="0.9"/>
  <!-- Corner brackets of crosshair -->
  <path d="M29,43 L29,41 L31,41" fill="none" stroke="#cc0000" stroke-width="0.6"/>
  <path d="M43,43 L43,41 L41,41" fill="none" stroke="#cc0000" stroke-width="0.6"/>
  <path d="M29,53 L29,55 L31,55" fill="none" stroke="#cc0000" stroke-width="0.6"/>
  <path d="M43,53 L43,55 L41,55" fill="none" stroke="#cc0000" stroke-width="0.6"/>
  <ellipse cx="36" cy="48" rx="8" ry="7" fill="none" stroke="#ff2222" stroke-width="0.7"/>
  <ellipse cx="36" cy="48" rx="2.5" ry="2.5" fill="#ff0000" opacity="0.8"/>
</g>
<g filter="url(#pt-glow)">
  <ellipse cx="64" cy="48" rx="8" ry="7" fill="url(#pt-eye-main)"/>
  <line x1="56" y1="48" x2="72" y2="48" stroke="#200000" stroke-width="0.7" opacity="0.9"/>
  <line x1="64" y1="41" x2="64" y2="55" stroke="#200000" stroke-width="0.7" opacity="0.9"/>
  <path d="M57,43 L57,41 L59,41" fill="none" stroke="#cc0000" stroke-width="0.6"/>
  <path d="M71,43 L71,41 L69,41" fill="none" stroke="#cc0000" stroke-width="0.6"/>
  <path d="M57,53 L57,55 L59,55" fill="none" stroke="#cc0000" stroke-width="0.6"/>
  <path d="M71,53 L71,55 L69,55" fill="none" stroke="#cc0000" stroke-width="0.6"/>
  <ellipse cx="64" cy="48" rx="8" ry="7" fill="none" stroke="#ff2222" stroke-width="0.7"/>
  <ellipse cx="64" cy="48" rx="2.5" ry="2.5" fill="#ff0000" opacity="0.8"/>
</g>
<!-- No visible mouth - just menacing presence, armored chin plate -->
<rect x="36" y="62" width="28" height="6" rx="1" fill="#0d0000" stroke="#330000" stroke-width="0.5"/>
<line x1="36" y1="65" x2="64" y2="65" stroke="#1a0000" stroke-width="0.4" opacity="0.5"/>
<!-- Label -->
<rect x="28" y="88" width="44" height="8" rx="2" fill="#050000" stroke="#cc0000" stroke-width="0.7"/>
<text x="50" y="93.8" font-family="monospace" font-size="4" fill="#cc0000" text-anchor="middle">PENTEST</text>
</svg>`,

  "SOC-ANALYST": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="soc-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#001a08"/>
    <stop offset="100%" stop-color="#000804"/>
  </radialGradient>
  <radialGradient id="soc-skin" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#14532d"/>
    <stop offset="100%" stop-color="#052e16"/>
  </radialGradient>
  <radialGradient id="soc-eye" cx="30%" cy="30%" r="65%">
    <stop offset="0%" stop-color="#bbf7d0"/>
    <stop offset="50%" stop-color="#16a34a"/>
    <stop offset="100%" stop-color="#052e16"/>
  </radialGradient>
  <filter id="soc-glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" fill="url(#soc-bg)" rx="8"/>
<!-- Headset arc (on-call) -->
<path d="M24,44 Q22,24 50,22 Q78,24 76,44" fill="none" stroke="#4ade80" stroke-width="1.2"/>
<circle cx="24" cy="44" r="3" fill="#052e16" stroke="#4ade80" stroke-width="0.8"/>
<circle cx="76" cy="44" r="3" fill="#052e16" stroke="#4ade80" stroke-width="0.8"/>
<line x1="24" y1="44" x2="22" y2="48" stroke="#4ade80" stroke-width="0.8"/>
<!-- Radar sweep on forehead -->
<circle cx="50" cy="27" r="6.5" fill="#052e16" stroke="#22c55e" stroke-width="0.7"/>
<line x1="50" y1="27" x2="55" y2="23" stroke="#4ade80" stroke-width="0.8" opacity="0.9"/>
<circle cx="50" cy="27" r="4" fill="none" stroke="#22c55e" stroke-width="0.4" opacity="0.6"/>
<circle cx="50" cy="27" r="2" fill="none" stroke="#22c55e" stroke-width="0.4" opacity="0.4"/>
<!-- Vigilant round face - night-vision green -->
<ellipse cx="50" cy="50" rx="24" ry="23" fill="url(#soc-skin)"/>
<!-- 4 eyes (2 pairs stacked) - all alert and scanning -->
<!-- Upper pair -->
<g filter="url(#soc-glow)">
  <ellipse cx="36" cy="44" rx="5.5" ry="5" fill="url(#soc-eye)"/>
  <ellipse cx="36" cy="44" rx="2" ry="2" fill="#052e16"/>
  <ellipse cx="36" cy="44" rx="5.5" ry="5" fill="none" stroke="#4ade80" stroke-width="0.7"/>
  <ellipse cx="34.8" cy="42.8" rx="0.7" ry="0.7" fill="#bbf7d0" opacity="0.6"/>
</g>
<g filter="url(#soc-glow)">
  <ellipse cx="64" cy="44" rx="5.5" ry="5" fill="url(#soc-eye)"/>
  <ellipse cx="64" cy="44" rx="2" ry="2" fill="#052e16"/>
  <ellipse cx="64" cy="44" rx="5.5" ry="5" fill="none" stroke="#4ade80" stroke-width="0.7"/>
  <ellipse cx="62.8" cy="42.8" rx="0.7" ry="0.7" fill="#bbf7d0" opacity="0.6"/>
</g>
<!-- Lower pair -->
<g filter="url(#soc-glow)">
  <ellipse cx="36" cy="56" rx="5.5" ry="5" fill="url(#soc-eye)"/>
  <ellipse cx="36" cy="56" rx="2" ry="2" fill="#052e16"/>
  <ellipse cx="36" cy="56" rx="5.5" ry="5" fill="none" stroke="#4ade80" stroke-width="0.7"/>
  <ellipse cx="34.8" cy="54.8" rx="0.7" ry="0.7" fill="#bbf7d0" opacity="0.6"/>
</g>
<g filter="url(#soc-glow)">
  <ellipse cx="64" cy="56" rx="5.5" ry="5" fill="url(#soc-eye)"/>
  <ellipse cx="64" cy="56" rx="2" ry="2" fill="#052e16"/>
  <ellipse cx="64" cy="56" rx="5.5" ry="5" fill="none" stroke="#4ade80" stroke-width="0.7"/>
  <ellipse cx="62.8" cy="54.8" rx="0.7" ry="0.7" fill="#bbf7d0" opacity="0.6"/>
</g>
<!-- Alert focused expression -->
<path d="M40,68 L60,68" fill="none" stroke="#052e16" stroke-width="1" opacity="0.7"/>
<!-- Nose -->
<ellipse cx="50" cy="62" rx="2" ry="1.2" fill="#052e16" opacity="0.4"/>
<!-- Label -->
<rect x="22" y="88" width="56" height="8" rx="2" fill="#000804" stroke="#4ade80" stroke-width="0.7"/>
<text x="50" y="93.8" font-family="monospace" font-size="3.8" fill="#4ade80" text-anchor="middle">SOC · ANALYST</text>
</svg>`,

  "IR-LEAD": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="ir-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#1a0505"/>
    <stop offset="100%" stop-color="#080202"/>
  </radialGradient>
  <radialGradient id="ir-skin" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#7f1d1d"/>
    <stop offset="100%" stop-color="#3a0a0a"/>
  </radialGradient>
  <radialGradient id="ir-eye" cx="30%" cy="30%" r="65%">
    <stop offset="0%" stop-color="#fecaca"/>
    <stop offset="40%" stop-color="#ef4444"/>
    <stop offset="100%" stop-color="#1a0000"/>
  </radialGradient>
  <filter id="ir-glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" fill="url(#ir-bg)" rx="8"/>
<!-- Neck -->
<rect x="43" y="69" width="14" height="9" rx="2" fill="#3a0a0a"/>
<!-- Battle-ready face -->
<ellipse cx="50" cy="46" rx="24" ry="26" fill="url(#ir-skin)"/>
<!-- Red warning strobe marks on face -->
<!-- Left strobe bar -->
<rect x="22" y="34" width="8" height="3" rx="0.8" fill="#ef4444" opacity="0.8"/>
<rect x="22" y="38" width="8" height="3" rx="0.8" fill="#dc2626" opacity="0.4"/>
<!-- Right strobe bar -->
<rect x="70" y="34" width="8" height="3" rx="0.8" fill="#ef4444" opacity="0.8"/>
<rect x="70" y="38" width="8" height="3" rx="0.8" fill="#dc2626" opacity="0.4"/>
<!-- Forehead alert -->
<ellipse cx="50" cy="26" r="5" fill="#1a0000" stroke="#ef4444" stroke-width="0.8"/>
<!-- Concentric circles = blinking-alert iris -->
<circle cx="50" cy="26" r="3.5" fill="none" stroke="#ef4444" stroke-width="0.6"/>
<circle cx="50" cy="26" r="2" fill="none" stroke="#ef4444" stroke-width="0.6"/>
<circle cx="50" cy="26" r="0.8" fill="#ef4444"/>
<!-- Left eye - blinking-alert iris (concentric circles) -->
<g filter="url(#ir-glow)">
  <ellipse cx="37" cy="44" rx="7.5" ry="7.5" fill="url(#ir-eye)"/>
  <circle cx="37" cy="44" r="5.5" fill="none" stroke="#7f1d1d" stroke-width="0.8"/>
  <circle cx="37" cy="44" r="3.5" fill="none" stroke="#7f1d1d" stroke-width="0.8"/>
  <circle cx="37" cy="44" r="1.5" fill="#ef4444" opacity="0.9"/>
  <ellipse cx="37" cy="44" rx="7.5" ry="7.5" fill="none" stroke="#ef4444" stroke-width="0.7"/>
</g>
<!-- Right eye - blinking-alert iris -->
<g filter="url(#ir-glow)">
  <ellipse cx="63" cy="44" rx="7.5" ry="7.5" fill="url(#ir-eye)"/>
  <circle cx="63" cy="44" r="5.5" fill="none" stroke="#7f1d1d" stroke-width="0.8"/>
  <circle cx="63" cy="44" r="3.5" fill="none" stroke="#7f1d1d" stroke-width="0.8"/>
  <circle cx="63" cy="44" r="1.5" fill="#ef4444" opacity="0.9"/>
  <ellipse cx="63" cy="44" rx="7.5" ry="7.5" fill="none" stroke="#ef4444" stroke-width="0.7"/>
</g>
<!-- Urgent set mouth -->
<path d="M38,63 Q50,61 62,63" fill="none" stroke="#7f1d1d" stroke-width="1.2" opacity="0.8"/>
<!-- Nose -->
<ellipse cx="50" cy="55" rx="2" ry="1.2" fill="#3a0a0a" opacity="0.4"/>
<!-- Label -->
<rect x="28" y="88" width="44" height="8" rx="2" fill="#0d0000" stroke="#ef4444" stroke-width="0.7"/>
<text x="50" y="93.8" font-family="monospace" font-size="4" fill="#ef4444" text-anchor="middle">IR · LEAD</text>
</svg>`,

  "GRC-SPEC": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs>
  <radialGradient id="grc-bg" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#0c1019"/>
    <stop offset="100%" stop-color="#040609"/>
  </radialGradient>
  <radialGradient id="grc-skin" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#94a3b8"/>
    <stop offset="100%" stop-color="#4a5568"/>
  </radialGradient>
  <radialGradient id="grc-eye" cx="30%" cy="30%" r="65%">
    <stop offset="0%" stop-color="#e0f2fe"/>
    <stop offset="50%" stop-color="#3b82f6"/>
    <stop offset="100%" stop-color="#0c1a3a"/>
  </radialGradient>
  <filter id="grc-glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="0.9" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>
<rect width="100" height="100" fill="url(#grc-bg)" rx="8"/>
<!-- Neck -->
<rect x="43" y="70" width="14" height="8" rx="2" fill="#4a5568"/>
<!-- Precise regulatory face -->
<ellipse cx="50" cy="46" rx="23" ry="25" fill="url(#grc-skin)"/>
<!-- Policy document mark on forehead -->
<rect x="42" y="20" width="16" height="12" rx="1" fill="#0c1a3a" stroke="#3b82f6" stroke-width="0.7"/>
<line x1="44" y1="23" x2="56" y2="23" stroke="#3b82f6" stroke-width="0.5" opacity="0.8"/>
<line x1="44" y1="25" x2="56" y2="25" stroke="#3b82f6" stroke-width="0.5" opacity="0.8"/>
<line x1="44" y1="27" x2="53" y2="27" stroke="#3b82f6" stroke-width="0.5" opacity="0.6"/>
<!-- Check marks on doc -->
<text x="44" y="23.5" font-family="monospace" font-size="2" fill="#60a5fa" opacity="0.8">v</text>
<text x="44" y="25.5" font-family="monospace" font-size="2" fill="#60a5fa" opacity="0.8">v</text>
<text x="44" y="27.5" font-family="monospace" font-size="2" fill="#60a5fa" opacity="0.6">v</text>
<!-- Left eye - compliance-checklist iris (rows of check marks) -->
<g filter="url(#grc-glow)">
  <ellipse cx="36" cy="44" rx="7" ry="7" fill="url(#grc-eye)"/>
  <!-- Check mark rows in iris -->
  <text x="30" y="41.5" font-family="monospace" font-size="3" fill="#0c1a3a" opacity="0.9">v v</text>
  <text x="30" y="44.5" font-family="monospace" font-size="3" fill="#0c1a3a" opacity="0.9">v v</text>
  <text x="30" y="47.5" font-family="monospace" font-size="3" fill="#0c1a3a" opacity="0.9">v v</text>
  <ellipse cx="36" cy="44" rx="7" ry="7" fill="none" stroke="#3b82f6" stroke-width="0.7"/>
  <ellipse cx="36" cy="44" rx="1.8" ry="1.8" fill="#60a5fa" opacity="0.6"/>
</g>
<!-- Right eye - compliance-checklist iris -->
<g filter="url(#grc-glow)">
  <ellipse cx="64" cy="44" rx="7" ry="7" fill="url(#grc-eye)"/>
  <text x="58" y="41.5" font-family="monospace" font-size="3" fill="#0c1a3a" opacity="0.9">v v</text>
  <text x="58" y="44.5" font-family="monospace" font-size="3" fill="#0c1a3a" opacity="0.9">v v</text>
  <text x="58" y="47.5" font-family="monospace" font-size="3" fill="#0c1a3a" opacity="0.9">v v</text>
  <ellipse cx="64" cy="44" rx="7" ry="7" fill="none" stroke="#3b82f6" stroke-width="0.7"/>
  <ellipse cx="64" cy="44" rx="1.8" ry="1.8" fill="#60a5fa" opacity="0.6"/>
</g>
<!-- Formal composed expression -->
<path d="M40,63 L60,63" fill="none" stroke="#4a5568" stroke-width="1.2" opacity="0.8"/>
<!-- Subtle nose -->
<ellipse cx="50" cy="56" rx="2" ry="1.2" fill="#4a5568" opacity="0.3"/>
<!-- Label -->
<rect x="28" y="88" width="44" height="8" rx="2" fill="#050810" stroke="#3b82f6" stroke-width="0.7"/>
<text x="50" y="93.8" font-family="monospace" font-size="4" fill="#3b82f6" text-anchor="middle">GRC · SPEC</text>
</svg>`,
};

// Fix SR-QA-MAN xmlns typo before writing
const fixedSvgs: Record<string, string> = {};
for (const [code, svg] of Object.entries(svgs)) {
  fixedSvgs[code] = svg.replace(
    'xmlns="http://www.w3.org/2020/svg"',
    'xmlns="http://www.w3.org/2000/svg"'
  );
}

let written = 0;
let skipped = 0;

for (const [code, svg] of Object.entries(fixedSvgs)) {
  const filePath = path.join(OUT, `${code}.svg`);
  fs.writeFileSync(filePath, svg, "utf8");
  console.log(`+ ${code}.svg  (${svg.length} bytes)`);
  written++;
}

console.log(`\nDone. ${written} SVGs written to ${OUT}`);
if (skipped > 0) console.log(`${skipped} skipped.`);
