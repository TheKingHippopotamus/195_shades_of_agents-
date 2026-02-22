import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, "../public/brand/avatars/agents");

const svgs: Record<string, string> = {

  // ─────────────────────────────────────────────────────────────────────────
  // DESIGN TEAM — Artistic, vibrant, flowing
  // ─────────────────────────────────────────────────────────────────────────

  "MGR-UX": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="mgux-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#5C1A2E"/>
      <stop offset="100%" stop-color="#1A0810"/>
    </radialGradient>
    <radialGradient id="mgux-skin" cx="45%" cy="38%" r="58%">
      <stop offset="0%" stop-color="#FFB8C8"/>
      <stop offset="60%" stop-color="#E8788A"/>
      <stop offset="100%" stop-color="#C04060"/>
    </radialGradient>
    <radialGradient id="mgux-iris" cx="40%" cy="35%" r="55%">
      <stop offset="0%" stop-color="#FFE0D0"/>
      <stop offset="40%" stop-color="#FF8060"/>
      <stop offset="100%" stop-color="#8B2000"/>
    </radialGradient>
    <filter id="mgux-glow">
      <feGaussianBlur stdDeviation="1.2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="100" height="100" fill="url(#mgux-bg)" rx="10"/>
  <!-- Soft ambient stars -->
  <circle cx="10" cy="12" r="0.8" fill="#FF9AB0" opacity="0.5"/>
  <circle cx="88" cy="9" r="0.6" fill="#FFD0E0" opacity="0.4"/>
  <circle cx="92" cy="82" r="0.7" fill="#FF9AB0" opacity="0.4"/>
  <!-- Head — warm rose oval -->
  <ellipse cx="50" cy="54" rx="24" ry="28" fill="url(#mgux-skin)"/>
  <!-- Flowing antennae like hair — left -->
  <path d="M 34 32 Q 22 18 28 8 Q 30 4 33 7 Q 31 14 36 24 Q 40 30 38 35" fill="none" stroke="#FFB8C8" stroke-width="2.2" stroke-linecap="round"/>
  <!-- Flowing antennae — right -->
  <path d="M 66 32 Q 78 18 72 8 Q 70 4 67 7 Q 69 14 64 24 Q 60 30 62 35" fill="none" stroke="#FFB8C8" stroke-width="2.2" stroke-linecap="round"/>
  <!-- Antennae tips (empathy orbs) -->
  <circle cx="31" cy="7" r="3" fill="#FF6080" filter="url(#mgux-glow)"/>
  <circle cx="69" cy="7" r="3" fill="#FF6080" filter="url(#mgux-glow)"/>
  <!-- Left eye socket -->
  <ellipse cx="40" cy="50" rx="8" ry="9" fill="#2A0818"/>
  <!-- Right eye socket -->
  <ellipse cx="60" cy="50" rx="8" ry="9" fill="#2A0818"/>
  <!-- Left iris — user journey path -->
  <circle cx="40" cy="50" r="6" fill="url(#mgux-iris)"/>
  <path d="M 35 50 Q 38 47 40 50 Q 42 53 45 50" fill="none" stroke="#FFE0D0" stroke-width="0.9" stroke-linecap="round"/>
  <circle cx="40" cy="50" r="6" fill="none" stroke="#FF9AB0" stroke-width="0.5" opacity="0.6"/>
  <!-- Right iris -->
  <circle cx="60" cy="50" r="6" fill="url(#mgux-iris)"/>
  <path d="M 55 50 Q 58 47 60 50 Q 62 53 65 50" fill="none" stroke="#FFE0D0" stroke-width="0.9" stroke-linecap="round"/>
  <!-- Eye pupils -->
  <circle cx="41" cy="49" r="2.5" fill="#1A0408"/>
  <circle cx="61" cy="49" r="2.5" fill="#1A0408"/>
  <!-- Eye highlight -->
  <circle cx="42" cy="48" r="1" fill="#FFFFFF" opacity="0.7"/>
  <circle cx="62" cy="48" r="1" fill="#FFFFFF" opacity="0.7"/>
  <!-- Empathetic small smile -->
  <path d="M 42 66 Q 50 72 58 66" fill="none" stroke="#FF8090" stroke-width="1.8" stroke-linecap="round"/>
  <!-- Nose hint -->
  <ellipse cx="50" cy="61" rx="3" ry="2" fill="#C04060" opacity="0.5"/>
  <!-- Cheek blush marks -->
  <ellipse cx="34" cy="58" rx="5" ry="3" fill="#FF6080" opacity="0.25"/>
  <ellipse cx="66" cy="58" rx="5" ry="3" fill="#FF6080" opacity="0.25"/>
</svg>`,

  "STAFF-DES": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="stdes-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#2D0040"/>
      <stop offset="100%" stop-color="#0D0018"/>
    </radialGradient>
    <radialGradient id="stdes-skin" cx="45%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#E060C0"/>
      <stop offset="55%" stop-color="#A0208A"/>
      <stop offset="100%" stop-color="#601060"/>
    </radialGradient>
    <radialGradient id="stdes-iris" cx="38%" cy="32%" r="58%">
      <stop offset="0%" stop-color="#FFE840"/>
      <stop offset="45%" stop-color="#D4A800"/>
      <stop offset="100%" stop-color="#6B5000"/>
    </radialGradient>
    <filter id="stdes-glow">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#stdes-bg)" rx="10"/>
  <!-- Stars -->
  <circle cx="8" cy="15" r="0.7" fill="#E060C0" opacity="0.5"/>
  <circle cx="91" cy="11" r="0.5" fill="#FFE840" opacity="0.4"/>
  <circle cx="89" cy="88" r="0.6" fill="#E060C0" opacity="0.35"/>
  <!-- Elegant head — deep magenta -->
  <ellipse cx="50" cy="55" rx="22" ry="27" fill="url(#stdes-skin)"/>
  <!-- Slender antennae -->
  <line x1="42" y1="29" x2="36" y2="10" stroke="#E060C0" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="58" y1="29" x2="64" y2="10" stroke="#E060C0" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="36" cy="10" r="2.5" fill="#FFE840" filter="url(#stdes-glow)"/>
  <circle cx="64" cy="10" r="2.5" fill="#FFE840" filter="url(#stdes-glow)"/>
  <!-- Eye sockets -->
  <ellipse cx="40" cy="51" rx="7.5" ry="8.5" fill="#18001A"/>
  <ellipse cx="60" cy="51" rx="7.5" ry="8.5" fill="#18001A"/>
  <!-- Golden-ratio spiral iris left -->
  <circle cx="40" cy="51" r="5.5" fill="url(#stdes-iris)"/>
  <path d="M 40 51 Q 41.5 49.5 43 51 Q 41.5 52.5 40 51" fill="none" stroke="#FFFACC" stroke-width="0.7" opacity="0.8"/>
  <circle cx="40" cy="51" r="3" fill="none" stroke="#FFFACC" stroke-width="0.5" opacity="0.5"/>
  <circle cx="40" cy="51" r="1.5" fill="none" stroke="#FFFACC" stroke-width="0.4" opacity="0.4"/>
  <!-- Golden-ratio spiral iris right -->
  <circle cx="60" cy="51" r="5.5" fill="url(#stdes-iris)"/>
  <path d="M 60 51 Q 61.5 49.5 63 51 Q 61.5 52.5 60 51" fill="none" stroke="#FFFACC" stroke-width="0.7" opacity="0.8"/>
  <circle cx="60" cy="51" r="3" fill="none" stroke="#FFFACC" stroke-width="0.5" opacity="0.5"/>
  <circle cx="60" cy="51" r="1.5" fill="none" stroke="#FFFACC" stroke-width="0.4" opacity="0.4"/>
  <!-- Pupils -->
  <circle cx="41" cy="50" r="2" fill="#0A0010"/>
  <circle cx="61" cy="50" r="2" fill="#0A0010"/>
  <!-- Highlights -->
  <circle cx="42" cy="49" r="0.9" fill="#FFFFFF" opacity="0.7"/>
  <circle cx="62" cy="49" r="0.9" fill="#FFFFFF" opacity="0.7"/>
  <!-- Artistic flourish marks on cheeks -->
  <path d="M 30 56 Q 33 52 30 48" fill="none" stroke="#FFE840" stroke-width="1" stroke-linecap="round" opacity="0.7"/>
  <path d="M 70 56 Q 67 52 70 48" fill="none" stroke="#FFE840" stroke-width="1" stroke-linecap="round" opacity="0.7"/>
  <!-- Nose -->
  <ellipse cx="50" cy="62" rx="2.5" ry="1.8" fill="#601060" opacity="0.6"/>
  <!-- Composed slight smile -->
  <path d="M 43 69 Q 50 74 57 69" fill="none" stroke="#E060C0" stroke-width="1.6" stroke-linecap="round"/>
</svg>`,

  "SR-PROD-DES": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="srpd-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#3A1020"/>
      <stop offset="100%" stop-color="#120608"/>
    </radialGradient>
    <radialGradient id="srpd-skin" cx="45%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#FFB890"/>
      <stop offset="55%" stop-color="#E87050"/>
      <stop offset="100%" stop-color="#A03828"/>
    </radialGradient>
    <radialGradient id="srpd-iris" cx="38%" cy="32%" r="58%">
      <stop offset="0%" stop-color="#C0E8FF"/>
      <stop offset="50%" stop-color="#6090C0"/>
      <stop offset="100%" stop-color="#203858"/>
    </radialGradient>
    <filter id="srpd-glow">
      <feGaussianBlur stdDeviation="1.2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#srpd-bg)" rx="10"/>
  <circle cx="12" cy="14" r="0.8" fill="#FFB890" opacity="0.4"/>
  <circle cx="88" cy="10" r="0.6" fill="#C0E8FF" opacity="0.4"/>
  <!-- Refined oval head — coral-pink -->
  <ellipse cx="50" cy="54" rx="23" ry="27" fill="url(#srpd-skin)"/>
  <!-- Clean antennae -->
  <line x1="43" y1="28" x2="39" y2="12" stroke="#FFB890" stroke-width="1.6" stroke-linecap="round"/>
  <line x1="57" y1="28" x2="61" y2="12" stroke="#FFB890" stroke-width="1.6" stroke-linecap="round"/>
  <circle cx="39" cy="12" r="2.2" fill="#6090C0" filter="url(#srpd-glow)"/>
  <circle cx="61" cy="12" r="2.2" fill="#6090C0" filter="url(#srpd-glow)"/>
  <!-- Eye sockets -->
  <ellipse cx="40" cy="51" rx="7" ry="8" fill="#1A0810"/>
  <ellipse cx="60" cy="51" rx="7" ry="8" fill="#1A0810"/>
  <!-- Wireframe-grid iris left -->
  <circle cx="40" cy="51" r="5.5" fill="url(#srpd-iris)"/>
  <line x1="36" y1="51" x2="44" y2="51" stroke="#C0E8FF" stroke-width="0.5" opacity="0.7"/>
  <line x1="40" y1="47" x2="40" y2="55" stroke="#C0E8FF" stroke-width="0.5" opacity="0.7"/>
  <line x1="37" y1="48.5" x2="43" y2="48.5" stroke="#C0E8FF" stroke-width="0.3" opacity="0.4"/>
  <line x1="37" y1="53.5" x2="43" y2="53.5" stroke="#C0E8FF" stroke-width="0.3" opacity="0.4"/>
  <!-- Wireframe-grid iris right -->
  <circle cx="60" cy="51" r="5.5" fill="url(#srpd-iris)"/>
  <line x1="56" y1="51" x2="64" y2="51" stroke="#C0E8FF" stroke-width="0.5" opacity="0.7"/>
  <line x1="60" y1="47" x2="60" y2="55" stroke="#C0E8FF" stroke-width="0.5" opacity="0.7"/>
  <line x1="57" y1="48.5" x2="63" y2="48.5" stroke="#C0E8FF" stroke-width="0.3" opacity="0.4"/>
  <line x1="57" y1="53.5" x2="63" y2="53.5" stroke="#C0E8FF" stroke-width="0.3" opacity="0.4"/>
  <!-- Pupils -->
  <circle cx="41" cy="50" r="2" fill="#0A0414"/>
  <circle cx="61" cy="50" r="2" fill="#0A0414"/>
  <circle cx="42" cy="49" r="0.8" fill="#FFFFFF" opacity="0.75"/>
  <circle cx="62" cy="49" r="0.8" fill="#FFFFFF" opacity="0.75"/>
  <!-- Nose -->
  <ellipse cx="50" cy="61" rx="2.5" ry="1.8" fill="#A03828" opacity="0.5"/>
  <!-- Thoughtful expression — slight asymmetric smile -->
  <path d="M 43 67 Q 50 73 57 68" fill="none" stroke="#E87050" stroke-width="1.7" stroke-linecap="round"/>
  <!-- Cheek marks — sketch lines -->
  <line x1="28" y1="55" x2="34" y2="52" stroke="#FFB890" stroke-width="0.8" opacity="0.5" stroke-linecap="round"/>
  <line x1="66" y1="52" x2="72" y2="55" stroke="#FFB890" stroke-width="0.8" opacity="0.5" stroke-linecap="round"/>
</svg>`,

  "SR-UID": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="suid-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#1A0040"/>
      <stop offset="100%" stop-color="#080018"/>
    </radialGradient>
    <radialGradient id="suid-skin" cx="45%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#C880FF"/>
      <stop offset="55%" stop-color="#8030D0"/>
      <stop offset="100%" stop-color="#40006A"/>
    </radialGradient>
    <radialGradient id="suid-iris-l" cx="20%" cy="20%" r="80%">
      <stop offset="0%" stop-color="#FF4444"/>
      <stop offset="16%" stop-color="#FF8800"/>
      <stop offset="33%" stop-color="#FFEE00"/>
      <stop offset="50%" stop-color="#44FF44"/>
      <stop offset="66%" stop-color="#4444FF"/>
      <stop offset="83%" stop-color="#8800FF"/>
      <stop offset="100%" stop-color="#FF44AA"/>
    </radialGradient>
    <filter id="suid-glow">
      <feGaussianBlur stdDeviation="1.4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#suid-bg)" rx="10"/>
  <circle cx="10" cy="10" r="0.7" fill="#C880FF" opacity="0.5"/>
  <circle cx="90" cy="14" r="0.6" fill="#FF44AA" opacity="0.4"/>
  <circle cx="88" cy="86" r="0.8" fill="#4444FF" opacity="0.4"/>
  <!-- Precise angular-to-oval head — electric violet -->
  <path d="M 28 40 Q 28 28 50 27 Q 72 28 72 40 L 72 65 Q 72 80 50 81 Q 28 80 28 65 Z" fill="url(#suid-skin)"/>
  <!-- Sharp geometric antennae -->
  <line x1="42" y1="28" x2="38" y2="11" stroke="#C880FF" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="58" y1="28" x2="62" y2="11" stroke="#C880FF" stroke-width="1.8" stroke-linecap="round"/>
  <!-- Pixel-square tips -->
  <rect x="35" y="8" width="6" height="6" rx="1" fill="#FF44AA" filter="url(#suid-glow)"/>
  <rect x="59" y="8" width="6" height="6" rx="1" fill="#44FF44" filter="url(#suid-glow)"/>
  <!-- Eye sockets -->
  <ellipse cx="40" cy="51" rx="7.5" ry="8" fill="#0D0020"/>
  <ellipse cx="60" cy="51" rx="7.5" ry="8" fill="#0D0020"/>
  <!-- Color-wheel iris left -->
  <circle cx="40" cy="51" r="5.5" fill="url(#suid-iris-l)"/>
  <circle cx="40" cy="51" r="5.5" fill="none" stroke="#FFFFFF" stroke-width="0.4" opacity="0.5"/>
  <!-- Color-wheel iris right -->
  <circle cx="60" cy="51" r="5.5" fill="url(#suid-iris-l)"/>
  <circle cx="60" cy="51" r="5.5" fill="none" stroke="#FFFFFF" stroke-width="0.4" opacity="0.5"/>
  <!-- Pupils -->
  <circle cx="41" cy="50" r="2" fill="#08000F"/>
  <circle cx="61" cy="50" r="2" fill="#08000F"/>
  <circle cx="42" cy="49" r="0.9" fill="#FFFFFF" opacity="0.8"/>
  <circle cx="62" cy="49" r="0.9" fill="#FFFFFF" opacity="0.8"/>
  <!-- Pixel-art forehead marks -->
  <rect x="47" y="32" width="2" height="2" fill="#FF44AA" opacity="0.8"/>
  <rect x="51" y="32" width="2" height="2" fill="#44FF44" opacity="0.8"/>
  <rect x="49" y="35" width="2" height="2" fill="#4444FF" opacity="0.8"/>
  <!-- Nose -->
  <ellipse cx="50" cy="62" rx="2.5" ry="1.8" fill="#40006A" opacity="0.6"/>
  <!-- Artful precise expression -->
  <path d="M 42 69 Q 50 74 58 69" fill="none" stroke="#C880FF" stroke-width="1.7" stroke-linecap="round"/>
</svg>`,

  "SR-UXD": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="suxd-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#20103A"/>
      <stop offset="100%" stop-color="#0A0518"/>
    </radialGradient>
    <radialGradient id="suxd-skin" cx="45%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#D0B8F0"/>
      <stop offset="55%" stop-color="#9878C8"/>
      <stop offset="100%" stop-color="#5038808"/>
    </radialGradient>
    <radialGradient id="suxd-iris" cx="40%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#E0F0FF"/>
      <stop offset="50%" stop-color="#80B0E0"/>
      <stop offset="100%" stop-color="#204060"/>
    </radialGradient>
    <filter id="suxd-glow">
      <feGaussianBlur stdDeviation="1.3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#suxd-bg)" rx="10"/>
  <circle cx="9" cy="11" r="0.8" fill="#D0B8F0" opacity="0.5"/>
  <circle cx="90" cy="8" r="0.6" fill="#D0B8F0" opacity="0.35"/>
  <!-- Wide empathetic face — soft lavender -->
  <ellipse cx="50" cy="54" rx="26" ry="27" fill="url(#suxd-skin)"/>
  <!-- Gentle antennae -->
  <path d="M 38 29 Q 30 18 35 10" fill="none" stroke="#D0B8F0" stroke-width="2" stroke-linecap="round"/>
  <path d="M 62 29 Q 70 18 65 10" fill="none" stroke="#D0B8F0" stroke-width="2" stroke-linecap="round"/>
  <circle cx="35" cy="10" r="2.5" fill="#80B0E0" filter="url(#suxd-glow)"/>
  <circle cx="65" cy="10" r="2.5" fill="#80B0E0" filter="url(#suxd-glow)"/>
  <!-- Large empathetic eye sockets -->
  <ellipse cx="39" cy="50" rx="9" ry="10" fill="#180830"/>
  <ellipse cx="61" cy="50" rx="9" ry="10" fill="#180830"/>
  <!-- Person-silhouette iris left -->
  <circle cx="39" cy="50" r="7" fill="url(#suxd-iris)"/>
  <!-- Tiny person figure in iris -->
  <circle cx="39" cy="47" r="1.5" fill="#D0B8F0" opacity="0.9"/>
  <line x1="39" y1="48.5" x2="39" y2="52" stroke="#D0B8F0" stroke-width="1" opacity="0.8"/>
  <line x1="36.5" y1="50" x2="41.5" y2="50" stroke="#D0B8F0" stroke-width="0.9" opacity="0.8"/>
  <!-- Person-silhouette iris right -->
  <circle cx="61" cy="50" r="7" fill="url(#suxd-iris)"/>
  <circle cx="61" cy="47" r="1.5" fill="#D0B8F0" opacity="0.9"/>
  <line x1="61" y1="48.5" x2="61" y2="52" stroke="#D0B8F0" stroke-width="1" opacity="0.8"/>
  <line x1="58.5" y1="50" x2="63.5" y2="50" stroke="#D0B8F0" stroke-width="0.9" opacity="0.8"/>
  <!-- Pupils -->
  <circle cx="40" cy="49" r="2.5" fill="#080414"/>
  <circle cx="62" cy="49" r="2.5" fill="#080414"/>
  <circle cx="41" cy="48" r="1.1" fill="#FFFFFF" opacity="0.75"/>
  <circle cx="63" cy="48" r="1.1" fill="#FFFFFF" opacity="0.75"/>
  <!-- Nose -->
  <ellipse cx="50" cy="62" rx="3" ry="2" fill="#5038808" opacity="0.5"/>
  <!-- Kind warm smile -->
  <path d="M 41 69 Q 50 76 59 69" fill="none" stroke="#9878C8" stroke-width="2" stroke-linecap="round"/>
</svg>`,

  "PROD-DES": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="pdes-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#2A1015"/>
      <stop offset="100%" stop-color="#0D0508"/>
    </radialGradient>
    <radialGradient id="pdes-skin" cx="45%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#FFCCA0"/>
      <stop offset="55%" stop-color="#F09060"/>
      <stop offset="100%" stop-color="#A84828"/>
    </radialGradient>
    <radialGradient id="pdes-iris" cx="38%" cy="32%" r="58%">
      <stop offset="0%" stop-color="#E0F0FF"/>
      <stop offset="45%" stop-color="#7090D0"/>
      <stop offset="100%" stop-color="#203060"/>
    </radialGradient>
    <filter id="pdes-glow">
      <feGaussianBlur stdDeviation="1.1" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#pdes-bg)" rx="10"/>
  <circle cx="11" cy="13" r="0.7" fill="#FFCCA0" opacity="0.45"/>
  <circle cx="89" cy="10" r="0.6" fill="#7090D0" opacity="0.4"/>
  <!-- Creative round head — peach-pink -->
  <ellipse cx="50" cy="55" rx="23" ry="26" fill="url(#pdes-skin)"/>
  <!-- Antennae -->
  <line x1="43" y1="30" x2="38" y2="13" stroke="#FFCCA0" stroke-width="1.7" stroke-linecap="round"/>
  <line x1="57" y1="30" x2="62" y2="13" stroke="#FFCCA0" stroke-width="1.7" stroke-linecap="round"/>
  <circle cx="38" cy="13" r="2.2" fill="#7090D0" filter="url(#pdes-glow)"/>
  <circle cx="62" cy="13" r="2.2" fill="#7090D0" filter="url(#pdes-glow)"/>
  <!-- Eye sockets -->
  <ellipse cx="40" cy="52" rx="7" ry="7.5" fill="#180A08"/>
  <ellipse cx="60" cy="52" rx="7" ry="7.5" fill="#180A08"/>
  <!-- Component-box iris left -->
  <circle cx="40" cy="52" r="5.5" fill="url(#pdes-iris)"/>
  <rect x="36.5" y="48.5" width="7" height="7" rx="1" fill="none" stroke="#E0F0FF" stroke-width="0.6" opacity="0.7"/>
  <line x1="40" y1="48.5" x2="40" y2="55.5" stroke="#E0F0FF" stroke-width="0.4" opacity="0.5"/>
  <line x1="36.5" y1="52" x2="43.5" y2="52" stroke="#E0F0FF" stroke-width="0.4" opacity="0.5"/>
  <!-- Component-box iris right -->
  <circle cx="60" cy="52" r="5.5" fill="url(#pdes-iris)"/>
  <rect x="56.5" y="48.5" width="7" height="7" rx="1" fill="none" stroke="#E0F0FF" stroke-width="0.6" opacity="0.7"/>
  <line x1="60" y1="48.5" x2="60" y2="55.5" stroke="#E0F0FF" stroke-width="0.4" opacity="0.5"/>
  <line x1="56.5" y1="52" x2="63.5" y2="52" stroke="#E0F0FF" stroke-width="0.4" opacity="0.5"/>
  <!-- Pupils -->
  <circle cx="41" cy="51" r="2" fill="#080408"/>
  <circle cx="61" cy="51" r="2" fill="#080408"/>
  <circle cx="42" cy="50" r="0.9" fill="#FFFFFF" opacity="0.75"/>
  <circle cx="62" cy="50" r="0.9" fill="#FFFFFF" opacity="0.75"/>
  <!-- Sketch line cheek marks -->
  <path d="M 29 58 L 34 55" stroke="#FFCCA0" stroke-width="0.9" stroke-linecap="round" opacity="0.55"/>
  <path d="M 29 61 L 34 58" stroke="#FFCCA0" stroke-width="0.9" stroke-linecap="round" opacity="0.4"/>
  <path d="M 71 58 L 66 55" stroke="#FFCCA0" stroke-width="0.9" stroke-linecap="round" opacity="0.55"/>
  <path d="M 71 61 L 66 58" stroke="#FFCCA0" stroke-width="0.9" stroke-linecap="round" opacity="0.4"/>
  <!-- Nose -->
  <ellipse cx="50" cy="62" rx="2.5" ry="1.8" fill="#A84828" opacity="0.5"/>
  <!-- Creative open smile -->
  <path d="M 42 68 Q 50 75 58 68" fill="none" stroke="#F09060" stroke-width="1.8" stroke-linecap="round"/>
</svg>`,

  "UI-DES": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="uides-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#0A0828"/>
      <stop offset="100%" stop-color="#040310"/>
    </radialGradient>
    <radialGradient id="uides-skin" cx="45%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#8090FF"/>
      <stop offset="55%" stop-color="#4850C8"/>
      <stop offset="100%" stop-color="#18206A"/>
    </radialGradient>
    <radialGradient id="uides-iris" cx="38%" cy="32%" r="58%">
      <stop offset="0%" stop-color="#F0F8FF"/>
      <stop offset="45%" stop-color="#80A8D8"/>
      <stop offset="100%" stop-color="#203050"/>
    </radialGradient>
    <filter id="uides-glow">
      <feGaussianBlur stdDeviation="1.2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#uides-bg)" rx="10"/>
  <circle cx="9" cy="9" r="0.7" fill="#8090FF" opacity="0.5"/>
  <circle cx="91" cy="12" r="0.5" fill="#80A8D8" opacity="0.4"/>
  <!-- Geometric angular head — bright blue-violet -->
  <path d="M 27 38 L 30 28 L 50 25 L 70 28 L 73 38 L 73 65 Q 73 79 50 80 Q 27 79 27 65 Z" fill="url(#uides-skin)"/>
  <!-- Sharp geometric antennae -->
  <path d="M 42 26 L 38 9" stroke="#8090FF" stroke-width="1.8" stroke-linecap="square"/>
  <path d="M 58 26 L 62 9" stroke="#8090FF" stroke-width="1.8" stroke-linecap="square"/>
  <!-- Diamond tips -->
  <polygon points="38,6 40.5,9 38,12 35.5,9" fill="#80A8D8" filter="url(#uides-glow)"/>
  <polygon points="62,6 64.5,9 62,12 59.5,9" fill="#80A8D8" filter="url(#uides-glow)"/>
  <!-- Eye sockets -->
  <ellipse cx="40" cy="51" rx="7.5" ry="8" fill="#08061A"/>
  <ellipse cx="60" cy="51" rx="7.5" ry="8" fill="#08061A"/>
  <!-- Layout-grid iris left -->
  <circle cx="40" cy="51" r="5.5" fill="url(#uides-iris)"/>
  <line x1="36" y1="49" x2="44" y2="49" stroke="#8090FF" stroke-width="0.5" opacity="0.7"/>
  <line x1="36" y1="51" x2="44" y2="51" stroke="#8090FF" stroke-width="0.5" opacity="0.7"/>
  <line x1="36" y1="53" x2="44" y2="53" stroke="#8090FF" stroke-width="0.5" opacity="0.7"/>
  <line x1="38.5" y1="47" x2="38.5" y2="55" stroke="#8090FF" stroke-width="0.5" opacity="0.6"/>
  <line x1="41.5" y1="47" x2="41.5" y2="55" stroke="#8090FF" stroke-width="0.5" opacity="0.6"/>
  <!-- Layout-grid iris right -->
  <circle cx="60" cy="51" r="5.5" fill="url(#uides-iris)"/>
  <line x1="56" y1="49" x2="64" y2="49" stroke="#8090FF" stroke-width="0.5" opacity="0.7"/>
  <line x1="56" y1="51" x2="64" y2="51" stroke="#8090FF" stroke-width="0.5" opacity="0.7"/>
  <line x1="56" y1="53" x2="64" y2="53" stroke="#8090FF" stroke-width="0.5" opacity="0.7"/>
  <line x1="58.5" y1="47" x2="58.5" y2="55" stroke="#8090FF" stroke-width="0.5" opacity="0.6"/>
  <line x1="61.5" y1="47" x2="61.5" y2="55" stroke="#8090FF" stroke-width="0.5" opacity="0.6"/>
  <!-- Pupils -->
  <circle cx="41" cy="50" r="2" fill="#040312"/>
  <circle cx="61" cy="50" r="2" fill="#040312"/>
  <circle cx="42" cy="49" r="0.9" fill="#FFFFFF" opacity="0.8"/>
  <circle cx="62" cy="49" r="0.9" fill="#FFFFFF" opacity="0.8"/>
  <!-- Sharp artful forehead mark -->
  <path d="M 46 34 L 50 30 L 54 34" fill="none" stroke="#80A8D8" stroke-width="0.9" stroke-linecap="square" opacity="0.7"/>
  <!-- Nose -->
  <ellipse cx="50" cy="62" rx="2.5" ry="1.8" fill="#18206A" opacity="0.6"/>
  <!-- Confident straight expression -->
  <path d="M 43 69 L 57 69" fill="none" stroke="#8090FF" stroke-width="1.6" stroke-linecap="round"/>
</svg>`,

  "JR-DES": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="jrdes-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#180828"/>
      <stop offset="100%" stop-color="#080310"/>
    </radialGradient>
    <radialGradient id="jrdes-skin" cx="45%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#DDB8F8"/>
      <stop offset="55%" stop-color="#A068D8"/>
      <stop offset="100%" stop-color="#582890"/>
    </radialGradient>
    <radialGradient id="jrdes-iris" cx="38%" cy="32%" r="58%">
      <stop offset="0%" stop-color="#FFFFD0"/>
      <stop offset="40%" stop-color="#FFE840"/>
      <stop offset="100%" stop-color="#806000"/>
    </radialGradient>
    <filter id="jrdes-glow">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#jrdes-bg)" rx="10"/>
  <circle cx="10" cy="10" r="1" fill="#DDB8F8" opacity="0.5"/>
  <circle cx="88" cy="8" r="0.7" fill="#FFE840" opacity="0.45"/>
  <circle cx="92" cy="90" r="0.8" fill="#A068D8" opacity="0.4"/>
  <!-- Young round face — light purple -->
  <ellipse cx="50" cy="56" rx="24" ry="26" fill="url(#jrdes-skin)"/>
  <!-- Slightly messy antennae -->
  <path d="M 38 31 Q 28 19 31 9" fill="none" stroke="#DDB8F8" stroke-width="2" stroke-linecap="round"/>
  <path d="M 62 31 Q 73 20 69 10" fill="none" stroke="#DDB8F8" stroke-width="2.2" stroke-linecap="round"/>
  <!-- One antennae tip slightly drooping -->
  <circle cx="31" cy="9" r="2.8" fill="#FFE840" filter="url(#jrdes-glow)"/>
  <circle cx="69" cy="10" r="2.5" fill="#A068D8" filter="url(#jrdes-glow)"/>
  <!-- HUGE star-struck eyes -->
  <ellipse cx="39" cy="50" rx="10" ry="11" fill="#100520"/>
  <ellipse cx="61" cy="50" rx="10" ry="11" fill="#100520"/>
  <!-- Sparkle iris left -->
  <circle cx="39" cy="50" r="8" fill="url(#jrdes-iris)"/>
  <!-- Sparkle lines -->
  <line x1="39" y1="43" x2="39" y2="57" stroke="#FFFFD0" stroke-width="0.7" opacity="0.6"/>
  <line x1="32" y1="50" x2="46" y2="50" stroke="#FFFFD0" stroke-width="0.7" opacity="0.6"/>
  <line x1="34" y1="45" x2="44" y2="55" stroke="#FFFFD0" stroke-width="0.5" opacity="0.4"/>
  <line x1="44" y1="45" x2="34" y2="55" stroke="#FFFFD0" stroke-width="0.5" opacity="0.4"/>
  <!-- Sparkle iris right -->
  <circle cx="61" cy="50" r="8" fill="url(#jrdes-iris)"/>
  <line x1="61" y1="43" x2="61" y2="57" stroke="#FFFFD0" stroke-width="0.7" opacity="0.6"/>
  <line x1="54" y1="50" x2="68" y2="50" stroke="#FFFFD0" stroke-width="0.7" opacity="0.6"/>
  <line x1="56" y1="45" x2="66" y2="55" stroke="#FFFFD0" stroke-width="0.5" opacity="0.4"/>
  <line x1="66" y1="45" x2="56" y2="55" stroke="#FFFFD0" stroke-width="0.5" opacity="0.4"/>
  <!-- Pupils -->
  <circle cx="40" cy="49" r="3" fill="#080310"/>
  <circle cx="62" cy="49" r="3" fill="#080310"/>
  <circle cx="42" cy="47" r="1.4" fill="#FFFFFF" opacity="0.9"/>
  <circle cx="64" cy="47" r="1.4" fill="#FFFFFF" opacity="0.9"/>
  <!-- Excited open mouth smile -->
  <path d="M 42 69 Q 50 78 58 69" fill="none" stroke="#A068D8" stroke-width="2.2" stroke-linecap="round"/>
  <!-- Nose -->
  <ellipse cx="50" cy="63" rx="2.5" ry="1.8" fill="#582890" opacity="0.5"/>
  <!-- Cheek blush -->
  <ellipse cx="33" cy="60" rx="5" ry="3" fill="#FFE840" opacity="0.2"/>
  <ellipse cx="67" cy="60" rx="5" ry="3" fill="#FFE840" opacity="0.2"/>
</svg>`,

  "UXR": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="uxr-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#101A10"/>
      <stop offset="100%" stop-color="#050A05"/>
    </radialGradient>
    <radialGradient id="uxr-skin" cx="45%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#A8C890"/>
      <stop offset="55%" stop-color="#608850"/>
      <stop offset="100%" stop-color="#2A4820"/>
    </radialGradient>
    <radialGradient id="uxr-iris" cx="38%" cy="32%" r="58%">
      <stop offset="0%" stop-color="#E0F0E0"/>
      <stop offset="50%" stop-color="#70A870"/>
      <stop offset="100%" stop-color="#204020"/>
    </radialGradient>
    <filter id="uxr-glow">
      <feGaussianBlur stdDeviation="1.1" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#uxr-bg)" rx="10"/>
  <circle cx="10" cy="12" r="0.7" fill="#A8C890" opacity="0.45"/>
  <circle cx="88" cy="10" r="0.6" fill="#70A870" opacity="0.4"/>
  <!-- Thoughtful oval — sage-green -->
  <ellipse cx="50" cy="54" rx="23" ry="27" fill="url(#uxr-skin)"/>
  <!-- Antennae -->
  <line x1="43" y1="28" x2="40" y2="11" stroke="#A8C890" stroke-width="1.6" stroke-linecap="round"/>
  <line x1="57" y1="28" x2="60" y2="11" stroke="#A8C890" stroke-width="1.6" stroke-linecap="round"/>
  <circle cx="40" cy="11" r="2.2" fill="#70A870" filter="url(#uxr-glow)"/>
  <circle cx="60" cy="11" r="2.2" fill="#70A870" filter="url(#uxr-glow)"/>
  <!-- Eye sockets -->
  <ellipse cx="40" cy="51" rx="7.5" ry="8.5" fill="#0A1008"/>
  <ellipse cx="60" cy="51" rx="7.5" ry="8.5" fill="#0A1008"/>
  <!-- Magnifying-glass iris left -->
  <circle cx="40" cy="51" r="5.5" fill="url(#uxr-iris)"/>
  <!-- Magnifying glass shape -->
  <circle cx="39" cy="50" r="3" fill="none" stroke="#E0F0E0" stroke-width="0.8" opacity="0.8"/>
  <line x1="41.5" y1="52.5" x2="43.5" y2="54.5" stroke="#E0F0E0" stroke-width="1" stroke-linecap="round" opacity="0.8"/>
  <!-- Magnifying-glass iris right -->
  <circle cx="60" cy="51" r="5.5" fill="url(#uxr-iris)"/>
  <circle cx="59" cy="50" r="3" fill="none" stroke="#E0F0E0" stroke-width="0.8" opacity="0.8"/>
  <line x1="61.5" y1="52.5" x2="63.5" y2="54.5" stroke="#E0F0E0" stroke-width="1" stroke-linecap="round" opacity="0.8"/>
  <!-- Pupils -->
  <circle cx="40" cy="50" r="2" fill="#060A06"/>
  <circle cx="60" cy="50" r="2" fill="#060A06"/>
  <circle cx="41" cy="49" r="0.9" fill="#FFFFFF" opacity="0.7"/>
  <circle cx="61" cy="49" r="0.9" fill="#FFFFFF" opacity="0.7"/>
  <!-- Clipboard / research marks on cheeks -->
  <rect x="28" y="54" width="6" height="7" rx="0.8" fill="none" stroke="#A8C890" stroke-width="0.7" opacity="0.5"/>
  <line x1="29.5" y1="56" x2="32.5" y2="56" stroke="#A8C890" stroke-width="0.5" opacity="0.5"/>
  <line x1="29.5" y1="57.5" x2="32.5" y2="57.5" stroke="#A8C890" stroke-width="0.5" opacity="0.4"/>
  <rect x="66" y="54" width="6" height="7" rx="0.8" fill="none" stroke="#A8C890" stroke-width="0.7" opacity="0.5"/>
  <line x1="67.5" y1="56" x2="70.5" y2="56" stroke="#A8C890" stroke-width="0.5" opacity="0.5"/>
  <line x1="67.5" y1="57.5" x2="70.5" y2="57.5" stroke="#A8C890" stroke-width="0.5" opacity="0.4"/>
  <!-- Nose -->
  <ellipse cx="50" cy="61" rx="2.5" ry="1.8" fill="#2A4820" opacity="0.55"/>
  <!-- Analytical measured expression -->
  <path d="M 43 68 Q 50 72 57 68" fill="none" stroke="#608850" stroke-width="1.6" stroke-linecap="round"/>
</svg>`,

  "CONTENT-DES": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="cdes-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#28200A"/>
      <stop offset="100%" stop-color="#100C04"/>
    </radialGradient>
    <radialGradient id="cdes-skin" cx="45%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#FFE870"/>
      <stop offset="55%" stop-color="#D4A800"/>
      <stop offset="100%" stop-color="#7A5C00"/>
    </radialGradient>
    <radialGradient id="cdes-iris" cx="38%" cy="32%" r="58%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="40%" stop-color="#C0D8FF"/>
      <stop offset="100%" stop-color="#304880"/>
    </radialGradient>
    <filter id="cdes-glow">
      <feGaussianBlur stdDeviation="1.2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#cdes-bg)" rx="10"/>
  <circle cx="9" cy="11" r="0.8" fill="#FFE870" opacity="0.5"/>
  <circle cx="89" cy="9" r="0.6" fill="#D4A800" opacity="0.4"/>
  <!-- Expressive face — golden-yellow -->
  <ellipse cx="50" cy="54" rx="23" ry="27" fill="url(#cdes-skin)"/>
  <!-- Expressive antennae -->
  <path d="M 39 29 Q 32 16 36 9" fill="none" stroke="#FFE870" stroke-width="2" stroke-linecap="round"/>
  <path d="M 61 29 Q 68 16 64 9" fill="none" stroke="#FFE870" stroke-width="2" stroke-linecap="round"/>
  <circle cx="36" cy="9" r="2.5" fill="#C0D8FF" filter="url(#cdes-glow)"/>
  <circle cx="64" cy="9" r="2.5" fill="#C0D8FF" filter="url(#cdes-glow)"/>
  <!-- Eye sockets -->
  <ellipse cx="40" cy="51" rx="7.5" ry="8.5" fill="#180E00"/>
  <ellipse cx="60" cy="51" rx="7.5" ry="8.5" fill="#180E00"/>
  <!-- Text/type letterform iris left — "A" serif -->
  <circle cx="40" cy="51" r="5.5" fill="url(#cdes-iris)"/>
  <text x="40" y="54" font-size="7" font-family="Georgia,serif" fill="#304880" text-anchor="middle" opacity="0.9">A</text>
  <!-- Text/type letterform iris right — "g" -->
  <circle cx="60" cy="51" r="5.5" fill="url(#cdes-iris)"/>
  <text x="60" y="54" font-size="7" font-family="Georgia,serif" fill="#304880" text-anchor="middle" opacity="0.9">g</text>
  <!-- Pupils -->
  <circle cx="41" cy="50" r="1.8" fill="#0A0804"/>
  <circle cx="61" cy="50" r="1.8" fill="#0A0804"/>
  <circle cx="42" cy="49" r="0.8" fill="#FFFFFF" opacity="0.8"/>
  <circle cx="62" cy="49" r="0.8" fill="#FFFFFF" opacity="0.8"/>
  <!-- Nose -->
  <ellipse cx="50" cy="62" rx="2.5" ry="1.8" fill="#7A5C00" opacity="0.5"/>
  <!-- Open expressive mouth -->
  <path d="M 41 68 Q 50 77 59 68" fill="#7A5C00" opacity="0.4"/>
  <path d="M 41 68 Q 50 77 59 68" fill="none" stroke="#D4A800" stroke-width="1.8" stroke-linecap="round"/>
  <!-- Cheek dimples -->
  <circle cx="34" cy="61" r="1.5" fill="#D4A800" opacity="0.3"/>
  <circle cx="66" cy="61" r="1.5" fill="#D4A800" opacity="0.3"/>
</svg>`,

  "MOTION-DES": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="mdes-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#2A1000"/>
      <stop offset="100%" stop-color="#100600"/>
    </radialGradient>
    <radialGradient id="mdes-skin" cx="45%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#FFA050"/>
      <stop offset="55%" stop-color="#E06010"/>
      <stop offset="100%" stop-color="#803000"/>
    </radialGradient>
    <radialGradient id="mdes-iris" cx="38%" cy="32%" r="58%">
      <stop offset="0%" stop-color="#FFE0C0"/>
      <stop offset="45%" stop-color="#C08040"/>
      <stop offset="100%" stop-color="#503010"/>
    </radialGradient>
    <filter id="mdes-glow">
      <feGaussianBlur stdDeviation="1.4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="mdes-blur">
      <feGaussianBlur stdDeviation="1.8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#mdes-bg)" rx="10"/>
  <circle cx="10" cy="10" r="0.8" fill="#FFA050" opacity="0.5"/>
  <circle cx="90" cy="12" r="0.6" fill="#E06010" opacity="0.4"/>
  <!-- Dynamic face — bright orange -->
  <ellipse cx="50" cy="54" rx="23" ry="26" fill="url(#mdes-skin)"/>
  <!-- Antennae in motion blur — multiple ghost lines -->
  <line x1="43" y1="29" x2="36" y2="10" stroke="#FFA050" stroke-width="2.5" stroke-linecap="round" opacity="0.25" filter="url(#mdes-blur)"/>
  <line x1="43" y1="29" x2="38" y2="10" stroke="#FFA050" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
  <line x1="43" y1="29" x2="40" y2="10" stroke="#FFA050" stroke-width="1.6" stroke-linecap="round" opacity="0.9"/>
  <line x1="57" y1="29" x2="64" y2="10" stroke="#FFA050" stroke-width="2.5" stroke-linecap="round" opacity="0.25" filter="url(#mdes-blur)"/>
  <line x1="57" y1="29" x2="62" y2="10" stroke="#FFA050" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
  <line x1="57" y1="29" x2="60" y2="10" stroke="#FFA050" stroke-width="1.6" stroke-linecap="round" opacity="0.9"/>
  <!-- Antennae tips -->
  <circle cx="40" cy="10" r="2.5" fill="#FFE0C0" filter="url(#mdes-glow)"/>
  <circle cx="60" cy="10" r="2.5" fill="#FFE0C0" filter="url(#mdes-glow)"/>
  <!-- Eye sockets -->
  <ellipse cx="40" cy="51" rx="7.5" ry="8.5" fill="#180800"/>
  <ellipse cx="60" cy="51" rx="7.5" ry="8.5" fill="#180800"/>
  <!-- Film-frame iris left (timeline strips) -->
  <circle cx="40" cy="51" r="5.5" fill="url(#mdes-iris)"/>
  <!-- Film frame markers -->
  <rect x="35" y="47" width="10" height="8" rx="0.5" fill="none" stroke="#FFE0C0" stroke-width="0.6" opacity="0.7"/>
  <rect x="35" y="47" width="1.5" height="2" fill="#FFE0C0" opacity="0.6"/>
  <rect x="35" y="53" width="1.5" height="2" fill="#FFE0C0" opacity="0.6"/>
  <rect x="43.5" y="47" width="1.5" height="2" fill="#FFE0C0" opacity="0.6"/>
  <rect x="43.5" y="53" width="1.5" height="2" fill="#FFE0C0" opacity="0.6"/>
  <!-- Film-frame iris right -->
  <circle cx="60" cy="51" r="5.5" fill="url(#mdes-iris)"/>
  <rect x="55" y="47" width="10" height="8" rx="0.5" fill="none" stroke="#FFE0C0" stroke-width="0.6" opacity="0.7"/>
  <rect x="55" y="47" width="1.5" height="2" fill="#FFE0C0" opacity="0.6"/>
  <rect x="55" y="53" width="1.5" height="2" fill="#FFE0C0" opacity="0.6"/>
  <rect x="63.5" y="47" width="1.5" height="2" fill="#FFE0C0" opacity="0.6"/>
  <rect x="63.5" y="53" width="1.5" height="2" fill="#FFE0C0" opacity="0.6"/>
  <!-- Pupils -->
  <circle cx="41" cy="50" r="2" fill="#0A0400"/>
  <circle cx="61" cy="50" r="2" fill="#0A0400"/>
  <circle cx="42" cy="49" r="0.9" fill="#FFFFFF" opacity="0.8"/>
  <circle cx="62" cy="49" r="0.9" fill="#FFFFFF" opacity="0.8"/>
  <!-- Nose -->
  <ellipse cx="50" cy="62" rx="2.5" ry="1.8" fill="#803000" opacity="0.55"/>
  <!-- Energetic wide grin -->
  <path d="M 40 67 Q 50 77 60 67" fill="none" stroke="#E06010" stroke-width="2.2" stroke-linecap="round"/>
  <!-- Cheek energy marks -->
  <path d="M 28 52 Q 31 50 28 48" fill="none" stroke="#FFA050" stroke-width="0.8" opacity="0.6" stroke-linecap="round"/>
  <path d="M 72 52 Q 69 50 72 48" fill="none" stroke="#FFA050" stroke-width="0.8" opacity="0.6" stroke-linecap="round"/>
</svg>`,

  // ─────────────────────────────────────────────────────────────────────────
  // AI/ML DEPARTMENT — Ethereal, glowing, neural, transcendent
  // ─────────────────────────────────────────────────────────────────────────

  "VP-AI": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="vpai-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#020820"/>
      <stop offset="100%" stop-color="#010410"/>
    </radialGradient>
    <radialGradient id="vpai-skin" cx="45%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#E8F4FF"/>
      <stop offset="45%" stop-color="#90C0F0"/>
      <stop offset="100%" stop-color="#3060A0"/>
    </radialGradient>
    <radialGradient id="vpai-iris" cx="40%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="30%" stop-color="#80D0FF"/>
      <stop offset="100%" stop-color="#0060C0"/>
    </radialGradient>
    <filter id="vpai-glow">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="vpai-glow-soft">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#vpai-bg)" rx="10"/>
  <!-- Neural halo ring above head -->
  <ellipse cx="50" cy="18" rx="20" ry="5" fill="none" stroke="#80D0FF" stroke-width="1.2" opacity="0.7" filter="url(#vpai-glow)"/>
  <ellipse cx="50" cy="18" rx="20" ry="5" fill="none" stroke="#FFFFFF" stroke-width="0.4" opacity="0.5"/>
  <!-- Floating geometric shapes around face -->
  <polygon points="10,28 14,22 18,28" fill="none" stroke="#80D0FF" stroke-width="0.7" opacity="0.5"/>
  <polygon points="82,28 86,22 90,28" fill="none" stroke="#80D0FF" stroke-width="0.7" opacity="0.5"/>
  <rect x="8" y="62" width="8" height="8" rx="1" fill="none" stroke="#80D0FF" stroke-width="0.6" opacity="0.4" transform="rotate(20,12,66)"/>
  <rect x="84" y="62" width="8" height="8" rx="1" fill="none" stroke="#80D0FF" stroke-width="0.6" opacity="0.4" transform="rotate(-20,88,66)"/>
  <!-- Transcendent oval face — iridescent white-blue -->
  <ellipse cx="50" cy="57" rx="22" ry="27" fill="url(#vpai-skin)" filter="url(#vpai-glow-soft)" opacity="0.3"/>
  <ellipse cx="50" cy="57" rx="22" ry="27" fill="url(#vpai-skin)"/>
  <!-- 3 eyes in vertical column -->
  <!-- Top eye (center) -->
  <ellipse cx="50" cy="40" rx="7" ry="7" fill="#020C28"/>
  <circle cx="50" cy="40" r="5.5" fill="url(#vpai-iris)" filter="url(#vpai-glow)"/>
  <circle cx="50" cy="40" r="2.5" fill="#001040"/>
  <circle cx="51.5" cy="38.5" r="1.2" fill="#FFFFFF" opacity="0.9"/>
  <!-- Middle left eye -->
  <ellipse cx="40" cy="52" rx="6.5" ry="7" fill="#020C28"/>
  <circle cx="40" cy="52" r="5" fill="url(#vpai-iris)" filter="url(#vpai-glow)"/>
  <circle cx="40" cy="52" r="2.2" fill="#001040"/>
  <circle cx="41.5" cy="50.5" r="1" fill="#FFFFFF" opacity="0.9"/>
  <!-- Middle right eye -->
  <ellipse cx="60" cy="52" rx="6.5" ry="7" fill="#020C28"/>
  <circle cx="60" cy="52" r="5" fill="url(#vpai-iris)" filter="url(#vpai-glow)"/>
  <circle cx="60" cy="52" r="2.2" fill="#001040"/>
  <circle cx="61.5" cy="50.5" r="1" fill="#FFFFFF" opacity="0.9"/>
  <!-- Nose -->
  <ellipse cx="50" cy="64" rx="2" ry="1.5" fill="#3060A0" opacity="0.5"/>
  <!-- Mystical calm expression -->
  <path d="M 43 72 Q 50 76 57 72" fill="none" stroke="#80D0FF" stroke-width="1.6" stroke-linecap="round"/>
</svg>`,

  "DIR-DS": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="dirds-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#081428"/>
      <stop offset="100%" stop-color="#030810"/>
    </radialGradient>
    <radialGradient id="dirds-skin" cx="45%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#4878B0"/>
      <stop offset="55%" stop-color="#1B4F72"/>
      <stop offset="100%" stop-color="#0A2438"/>
    </radialGradient>
    <radialGradient id="dirds-iris" cx="38%" cy="32%" r="58%">
      <stop offset="0%" stop-color="#D0E8FF"/>
      <stop offset="50%" stop-color="#6090C8"/>
      <stop offset="100%" stop-color="#203858"/>
    </radialGradient>
    <filter id="dirds-glow">
      <feGaussianBlur stdDeviation="1.3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#dirds-bg)" rx="10"/>
  <circle cx="9" cy="11" r="0.8" fill="#4878B0" opacity="0.5"/>
  <circle cx="89" cy="8" r="0.6" fill="#6090C8" opacity="0.4"/>
  <!-- Wide analytical face — data-blue -->
  <ellipse cx="50" cy="55" rx="25" ry="27" fill="url(#dirds-skin)"/>
  <!-- Antennae -->
  <line x1="42" y1="29" x2="38" y2="11" stroke="#4878B0" stroke-width="1.7" stroke-linecap="round"/>
  <line x1="58" y1="29" x2="62" y2="11" stroke="#4878B0" stroke-width="1.7" stroke-linecap="round"/>
  <circle cx="38" cy="11" r="2.2" fill="#6090C8" filter="url(#dirds-glow)"/>
  <circle cx="62" cy="11" r="2.2" fill="#6090C8" filter="url(#dirds-glow)"/>
  <!-- Eye sockets -->
  <ellipse cx="40" cy="52" rx="7.5" ry="8" fill="#040C1C"/>
  <ellipse cx="60" cy="52" rx="7.5" ry="8" fill="#040C1C"/>
  <!-- Scatter-plot iris left -->
  <circle cx="40" cy="52" r="5.5" fill="url(#dirds-iris)"/>
  <circle cx="38" cy="50" r="0.8" fill="#1B4F72" opacity="0.9"/>
  <circle cx="41" cy="53" r="0.6" fill="#1B4F72" opacity="0.9"/>
  <circle cx="43" cy="50" r="0.7" fill="#1B4F72" opacity="0.9"/>
  <circle cx="39" cy="54" r="0.5" fill="#1B4F72" opacity="0.8"/>
  <circle cx="42" cy="51" r="0.6" fill="#1B4F72" opacity="0.8"/>
  <!-- Scatter-plot iris right -->
  <circle cx="60" cy="52" r="5.5" fill="url(#dirds-iris)"/>
  <circle cx="58" cy="50" r="0.8" fill="#1B4F72" opacity="0.9"/>
  <circle cx="61" cy="53" r="0.6" fill="#1B4F72" opacity="0.9"/>
  <circle cx="63" cy="50" r="0.7" fill="#1B4F72" opacity="0.9"/>
  <circle cx="59" cy="54" r="0.5" fill="#1B4F72" opacity="0.8"/>
  <circle cx="62" cy="51" r="0.6" fill="#1B4F72" opacity="0.8"/>
  <!-- Pupils -->
  <circle cx="41" cy="51" r="2" fill="#030810"/>
  <circle cx="61" cy="51" r="2" fill="#030810"/>
  <circle cx="42" cy="50" r="0.9" fill="#FFFFFF" opacity="0.75"/>
  <circle cx="62" cy="50" r="0.9" fill="#FFFFFF" opacity="0.75"/>
  <!-- Statistical formula marks on forehead -->
  <text x="50" y="38" font-size="5" font-family="monospace" fill="#6090C8" text-anchor="middle" opacity="0.7">y=mx+b</text>
  <!-- Nose -->
  <ellipse cx="50" cy="63" rx="2.5" ry="1.8" fill="#0A2438" opacity="0.5"/>
  <!-- Focused analytical expression -->
  <path d="M 43 69 Q 50 73 57 69" fill="none" stroke="#4878B0" stroke-width="1.6" stroke-linecap="round"/>
</svg>`,

  "DIR-MLE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="dirmle-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#08101C"/>
      <stop offset="100%" stop-color="#040810"/>
    </radialGradient>
    <radialGradient id="dirmle-skin" cx="45%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#A0C0E0"/>
      <stop offset="55%" stop-color="#5080A8"/>
      <stop offset="100%" stop-color="#203050"/>
    </radialGradient>
    <radialGradient id="dirmle-iris" cx="38%" cy="32%" r="58%">
      <stop offset="0%" stop-color="#E0F4FF"/>
      <stop offset="50%" stop-color="#60A0D0"/>
      <stop offset="100%" stop-color="#103050"/>
    </radialGradient>
    <filter id="dirmle-glow">
      <feGaussianBlur stdDeviation="1.2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#dirmle-bg)" rx="10"/>
  <circle cx="8" cy="10" r="0.7" fill="#A0C0E0" opacity="0.4"/>
  <circle cx="90" cy="12" r="0.6" fill="#60A0D0" opacity="0.4"/>
  <!-- Technical ethereal face — silver-blue -->
  <ellipse cx="50" cy="54" rx="23" ry="27" fill="url(#dirmle-skin)"/>
  <!-- Circuit-trace antennae -->
  <path d="M 43 29 L 43 20 L 38 20 L 38 11" stroke="#A0C0E0" stroke-width="1.4" stroke-linecap="square" fill="none"/>
  <path d="M 57 29 L 57 20 L 62 20 L 62 11" stroke="#A0C0E0" stroke-width="1.4" stroke-linecap="square" fill="none"/>
  <circle cx="38" cy="11" r="2" fill="#60A0D0" filter="url(#dirmle-glow)"/>
  <circle cx="62" cy="11" r="2" fill="#60A0D0" filter="url(#dirmle-glow)"/>
  <!-- Eye sockets -->
  <ellipse cx="40" cy="51" rx="7.5" ry="8" fill="#04080E"/>
  <ellipse cx="60" cy="51" rx="7.5" ry="8" fill="#04080E"/>
  <!-- Neural-network iris left (dots connected by lines) -->
  <circle cx="40" cy="51" r="5.5" fill="url(#dirmle-iris)"/>
  <circle cx="38" cy="49.5" r="1" fill="#203050" opacity="0.9"/>
  <circle cx="42" cy="49.5" r="1" fill="#203050" opacity="0.9"/>
  <circle cx="40" cy="52.5" r="1" fill="#203050" opacity="0.9"/>
  <line x1="38" y1="49.5" x2="42" y2="49.5" stroke="#203050" stroke-width="0.5" opacity="0.7"/>
  <line x1="38" y1="49.5" x2="40" y2="52.5" stroke="#203050" stroke-width="0.5" opacity="0.7"/>
  <line x1="42" y1="49.5" x2="40" y2="52.5" stroke="#203050" stroke-width="0.5" opacity="0.7"/>
  <!-- Neural-network iris right -->
  <circle cx="60" cy="51" r="5.5" fill="url(#dirmle-iris)"/>
  <circle cx="58" cy="49.5" r="1" fill="#203050" opacity="0.9"/>
  <circle cx="62" cy="49.5" r="1" fill="#203050" opacity="0.9"/>
  <circle cx="60" cy="52.5" r="1" fill="#203050" opacity="0.9"/>
  <line x1="58" y1="49.5" x2="62" y2="49.5" stroke="#203050" stroke-width="0.5" opacity="0.7"/>
  <line x1="58" y1="49.5" x2="60" y2="52.5" stroke="#203050" stroke-width="0.5" opacity="0.7"/>
  <line x1="62" y1="49.5" x2="60" y2="52.5" stroke="#203050" stroke-width="0.5" opacity="0.7"/>
  <!-- Pupils -->
  <circle cx="41" cy="50" r="2" fill="#020608"/>
  <circle cx="61" cy="50" r="2" fill="#020608"/>
  <circle cx="42" cy="49" r="0.9" fill="#FFFFFF" opacity="0.75"/>
  <circle cx="62" cy="49" r="0.9" fill="#FFFFFF" opacity="0.75"/>
  <!-- Training curve glyph on chin -->
  <path d="M 43 70 Q 47 68 50 69 Q 53 70 57 67" fill="none" stroke="#A0C0E0" stroke-width="0.8" stroke-linecap="round" opacity="0.6"/>
  <!-- Nose -->
  <ellipse cx="50" cy="62" rx="2.5" ry="1.8" fill="#203050" opacity="0.5"/>
  <!-- Technical composed expression -->
  <path d="M 43 67 Q 50 71 57 67" fill="none" stroke="#5080A8" stroke-width="1.6" stroke-linecap="round"/>
</svg>`,

  "DIR-AIE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="daie-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#040818"/>
      <stop offset="100%" stop-color="#02040C"/>
    </radialGradient>
    <radialGradient id="daie-skin" cx="45%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#3050A0"/>
      <stop offset="55%" stop-color="#102060"/>
      <stop offset="100%" stop-color="#060E30"/>
    </radialGradient>
    <radialGradient id="daie-iris" cx="38%" cy="32%" r="58%">
      <stop offset="0%" stop-color="#C0D8FF"/>
      <stop offset="45%" stop-color="#5080D0"/>
      <stop offset="100%" stop-color="#182858"/>
    </radialGradient>
    <filter id="daie-glow">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#daie-bg)" rx="10"/>
  <circle cx="8" cy="9" r="0.7" fill="#3050A0" opacity="0.5"/>
  <circle cx="91" cy="11" r="0.6" fill="#5080D0" opacity="0.4"/>
  <!-- Commanding deep space-blue face -->
  <ellipse cx="50" cy="54" rx="23" ry="27" fill="url(#daie-skin)"/>
  <!-- Circuit-trace antennae -->
  <path d="M 43 28 L 36 28 L 36 12" stroke="#5080D0" stroke-width="1.5" stroke-linecap="square" fill="none"/>
  <path d="M 57 28 L 64 28 L 64 12" stroke="#5080D0" stroke-width="1.5" stroke-linecap="square" fill="none"/>
  <!-- Junction dots on circuit traces -->
  <circle cx="36" cy="28" r="1.5" fill="#5080D0"/>
  <circle cx="64" cy="28" r="1.5" fill="#5080D0"/>
  <circle cx="36" cy="12" r="2.2" fill="#C0D8FF" filter="url(#daie-glow)"/>
  <circle cx="64" cy="12" r="2.2" fill="#C0D8FF" filter="url(#daie-glow)"/>
  <!-- Eye sockets -->
  <ellipse cx="40" cy="51" rx="7.5" ry="8" fill="#02040C"/>
  <ellipse cx="60" cy="51" rx="7.5" ry="8" fill="#02040C"/>
  <!-- AI brain-circuit iris left -->
  <circle cx="40" cy="51" r="5.5" fill="url(#daie-iris)"/>
  <!-- Circuit inside iris -->
  <circle cx="40" cy="51" r="2.5" fill="none" stroke="#182858" stroke-width="0.7" opacity="0.9"/>
  <line x1="37.5" y1="51" x2="35.5" y2="51" stroke="#182858" stroke-width="0.5" opacity="0.8"/>
  <line x1="42.5" y1="51" x2="44.5" y2="51" stroke="#182858" stroke-width="0.5" opacity="0.8"/>
  <line x1="40" y1="48.5" x2="40" y2="46.5" stroke="#182858" stroke-width="0.5" opacity="0.8"/>
  <!-- AI brain-circuit iris right -->
  <circle cx="60" cy="51" r="5.5" fill="url(#daie-iris)"/>
  <circle cx="60" cy="51" r="2.5" fill="none" stroke="#182858" stroke-width="0.7" opacity="0.9"/>
  <line x1="57.5" y1="51" x2="55.5" y2="51" stroke="#182858" stroke-width="0.5" opacity="0.8"/>
  <line x1="62.5" y1="51" x2="64.5" y2="51" stroke="#182858" stroke-width="0.5" opacity="0.8"/>
  <line x1="60" y1="48.5" x2="60" y2="46.5" stroke="#182858" stroke-width="0.5" opacity="0.8"/>
  <!-- Pupils -->
  <circle cx="41" cy="50" r="2" fill="#010306"/>
  <circle cx="61" cy="50" r="2" fill="#010306"/>
  <circle cx="42" cy="49" r="0.9" fill="#FFFFFF" opacity="0.75"/>
  <circle cx="62" cy="49" r="0.9" fill="#FFFFFF" opacity="0.75"/>
  <!-- Nose -->
  <ellipse cx="50" cy="62" rx="2.5" ry="1.8" fill="#060E30" opacity="0.6"/>
  <!-- Commanding authoritative expression -->
  <path d="M 42 69 L 58 69" fill="none" stroke="#5080D0" stroke-width="1.8" stroke-linecap="round"/>
</svg>`,

  "STAFF-DS": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="stds-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#100820"/>
      <stop offset="100%" stop-color="#060410"/>
    </radialGradient>
    <radialGradient id="stds-skin" cx="45%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#7060C0"/>
      <stop offset="55%" stop-color="#402880"/>
      <stop offset="100%" stop-color="#180C40"/>
    </radialGradient>
    <radialGradient id="stds-iris" cx="38%" cy="32%" r="58%">
      <stop offset="0%" stop-color="#D8D0FF"/>
      <stop offset="50%" stop-color="#8068C0"/>
      <stop offset="100%" stop-color="#281848"/>
    </radialGradient>
    <filter id="stds-glow">
      <feGaussianBlur stdDeviation="1.2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#stds-bg)" rx="10"/>
  <circle cx="9" cy="11" r="0.7" fill="#7060C0" opacity="0.5"/>
  <circle cx="89" cy="9" r="0.6" fill="#8068C0" opacity="0.4"/>
  <!-- Analytical indigo face -->
  <ellipse cx="50" cy="54" rx="23" ry="27" fill="url(#stds-skin)"/>
  <!-- Antennae -->
  <line x1="43" y1="28" x2="39" y2="11" stroke="#7060C0" stroke-width="1.6" stroke-linecap="round"/>
  <line x1="57" y1="28" x2="61" y2="11" stroke="#7060C0" stroke-width="1.6" stroke-linecap="round"/>
  <circle cx="39" cy="11" r="2.2" fill="#8068C0" filter="url(#stds-glow)"/>
  <circle cx="61" cy="11" r="2.2" fill="#8068C0" filter="url(#stds-glow)"/>
  <!-- Eye sockets -->
  <ellipse cx="40" cy="51" rx="7" ry="8" fill="#08040E"/>
  <ellipse cx="60" cy="51" rx="7" ry="8" fill="#08040E"/>
  <!-- Probability-wave iris left -->
  <circle cx="40" cy="51" r="5.5" fill="url(#stds-iris)"/>
  <path d="M 35 51 Q 37 48 39 51 Q 41 54 43 51 Q 44 49.5 45 51" fill="none" stroke="#281848" stroke-width="0.8" opacity="0.85"/>
  <!-- Probability-wave iris right -->
  <circle cx="60" cy="51" r="5.5" fill="url(#stds-iris)"/>
  <path d="M 55 51 Q 57 48 59 51 Q 61 54 63 51 Q 64 49.5 65 51" fill="none" stroke="#281848" stroke-width="0.8" opacity="0.85"/>
  <!-- Pupils -->
  <circle cx="41" cy="50" r="2" fill="#040208"/>
  <circle cx="61" cy="50" r="2" fill="#040208"/>
  <circle cx="42" cy="49" r="0.9" fill="#FFFFFF" opacity="0.75"/>
  <circle cx="62" cy="49" r="0.9" fill="#FFFFFF" opacity="0.75"/>
  <!-- Bar chart cheek marks -->
  <rect x="28" y="59" width="2" height="5" fill="#7060C0" opacity="0.5"/>
  <rect x="31" y="56" width="2" height="8" fill="#7060C0" opacity="0.5"/>
  <rect x="34" y="58" width="2" height="6" fill="#7060C0" opacity="0.4"/>
  <rect x="64" y="59" width="2" height="5" fill="#7060C0" opacity="0.5"/>
  <rect x="67" y="56" width="2" height="8" fill="#7060C0" opacity="0.5"/>
  <rect x="70" y="58" width="2" height="6" fill="#7060C0" opacity="0.4"/>
  <!-- Nose -->
  <ellipse cx="50" cy="62" rx="2.5" ry="1.8" fill="#180C40" opacity="0.5"/>
  <!-- Composed analytical expression -->
  <path d="M 43 68 Q 50 72 57 68" fill="none" stroke="#7060C0" stroke-width="1.6" stroke-linecap="round"/>
</svg>`,

  "SR-DS": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="srds-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#0C0818"/>
      <stop offset="100%" stop-color="#05040C"/>
    </radialGradient>
    <radialGradient id="srds-skin" cx="45%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#6050A0"/>
      <stop offset="55%" stop-color="#302068"/>
      <stop offset="100%" stop-color="#100830"/>
    </radialGradient>
    <radialGradient id="srds-iris" cx="38%" cy="32%" r="58%">
      <stop offset="0%" stop-color="#C8C0F0"/>
      <stop offset="50%" stop-color="#6858A8"/>
      <stop offset="100%" stop-color="#201840"/>
    </radialGradient>
    <filter id="srds-glow">
      <feGaussianBlur stdDeviation="1.2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#srds-bg)" rx="10"/>
  <circle cx="9" cy="11" r="0.7" fill="#6050A0" opacity="0.45"/>
  <circle cx="89" cy="9" r="0.5" fill="#6858A8" opacity="0.4"/>
  <!-- Focused dark blue-purple oval -->
  <ellipse cx="50" cy="54" rx="23" ry="27" fill="url(#srds-skin)"/>
  <!-- Antennae -->
  <line x1="43" y1="28" x2="39" y2="11" stroke="#6050A0" stroke-width="1.6" stroke-linecap="round"/>
  <line x1="57" y1="28" x2="61" y2="11" stroke="#6050A0" stroke-width="1.6" stroke-linecap="round"/>
  <circle cx="39" cy="11" r="2" fill="#6858A8" filter="url(#srds-glow)"/>
  <circle cx="61" cy="11" r="2" fill="#6858A8" filter="url(#srds-glow)"/>
  <!-- Eye sockets -->
  <ellipse cx="40" cy="51" rx="7" ry="8" fill="#06040C"/>
  <ellipse cx="60" cy="51" rx="7" ry="8" fill="#06040C"/>
  <!-- Regression-line iris left -->
  <circle cx="40" cy="51" r="5.5" fill="url(#srds-iris)"/>
  <!-- Diagonal regression line -->
  <line x1="35.5" y1="54.5" x2="44.5" y2="47.5" stroke="#201840" stroke-width="1.2" stroke-linecap="round" opacity="0.9"/>
  <!-- Scatter dots -->
  <circle cx="37" cy="53" r="0.7" fill="#201840" opacity="0.8"/>
  <circle cx="40" cy="50" r="0.7" fill="#201840" opacity="0.8"/>
  <circle cx="43" cy="48" r="0.7" fill="#201840" opacity="0.8"/>
  <!-- Regression-line iris right -->
  <circle cx="60" cy="51" r="5.5" fill="url(#srds-iris)"/>
  <line x1="55.5" y1="54.5" x2="64.5" y2="47.5" stroke="#201840" stroke-width="1.2" stroke-linecap="round" opacity="0.9"/>
  <circle cx="57" cy="53" r="0.7" fill="#201840" opacity="0.8"/>
  <circle cx="60" cy="50" r="0.7" fill="#201840" opacity="0.8"/>
  <circle cx="63" cy="48" r="0.7" fill="#201840" opacity="0.8"/>
  <!-- Pupils -->
  <circle cx="41" cy="50" r="2" fill="#030208"/>
  <circle cx="61" cy="50" r="2" fill="#030208"/>
  <circle cx="42" cy="49" r="0.9" fill="#FFFFFF" opacity="0.75"/>
  <circle cx="62" cy="49" r="0.9" fill="#FFFFFF" opacity="0.75"/>
  <!-- Nose -->
  <ellipse cx="50" cy="61" rx="2.5" ry="1.8" fill="#100830" opacity="0.5"/>
  <!-- Confident data-driven expression -->
  <path d="M 43 68 Q 50 73 57 68" fill="none" stroke="#6050A0" stroke-width="1.7" stroke-linecap="round"/>
</svg>`,

  "DS": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="ds-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#081018"/>
      <stop offset="100%" stop-color="#04080E"/>
    </radialGradient>
    <radialGradient id="ds-skin" cx="45%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#4880C0"/>
      <stop offset="55%" stop-color="#205080"/>
      <stop offset="100%" stop-color="#0C2840"/>
    </radialGradient>
    <radialGradient id="ds-iris" cx="38%" cy="32%" r="58%">
      <stop offset="0%" stop-color="#C0E0FF"/>
      <stop offset="50%" stop-color="#6090C0"/>
      <stop offset="100%" stop-color="#203048"/>
    </radialGradient>
    <filter id="ds-glow">
      <feGaussianBlur stdDeviation="1.1" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#ds-bg)" rx="10"/>
  <circle cx="9" cy="11" r="0.7" fill="#4880C0" opacity="0.45"/>
  <circle cx="89" cy="9" r="0.6" fill="#6090C0" opacity="0.4"/>
  <!-- Round curious medium-blue face -->
  <ellipse cx="50" cy="55" rx="23" ry="26" fill="url(#ds-skin)"/>
  <!-- Antennae -->
  <line x1="43" y1="30" x2="39" y2="12" stroke="#4880C0" stroke-width="1.6" stroke-linecap="round"/>
  <line x1="57" y1="30" x2="61" y2="12" stroke="#4880C0" stroke-width="1.6" stroke-linecap="round"/>
  <circle cx="39" cy="12" r="2" fill="#6090C0" filter="url(#ds-glow)"/>
  <circle cx="61" cy="12" r="2" fill="#6090C0" filter="url(#ds-glow)"/>
  <!-- Eye sockets -->
  <ellipse cx="40" cy="52" rx="7" ry="7.5" fill="#040810"/>
  <ellipse cx="60" cy="52" rx="7" ry="7.5" fill="#040810"/>
  <!-- Dataset-table iris left (grid of rows/cols) -->
  <circle cx="40" cy="52" r="5.5" fill="url(#ds-iris)"/>
  <!-- Table header + rows -->
  <rect x="35.5" y="48" width="9" height="8" rx="0.5" fill="none" stroke="#203048" stroke-width="0.5" opacity="0.8"/>
  <line x1="35.5" y1="50" x2="44.5" y2="50" stroke="#203048" stroke-width="0.5" opacity="0.7"/>
  <line x1="35.5" y1="52" x2="44.5" y2="52" stroke="#203048" stroke-width="0.5" opacity="0.6"/>
  <line x1="35.5" y1="54" x2="44.5" y2="54" stroke="#203048" stroke-width="0.5" opacity="0.5"/>
  <line x1="40" y1="48" x2="40" y2="56" stroke="#203048" stroke-width="0.5" opacity="0.6"/>
  <!-- Dataset-table iris right -->
  <circle cx="60" cy="52" r="5.5" fill="url(#ds-iris)"/>
  <rect x="55.5" y="48" width="9" height="8" rx="0.5" fill="none" stroke="#203048" stroke-width="0.5" opacity="0.8"/>
  <line x1="55.5" y1="50" x2="64.5" y2="50" stroke="#203048" stroke-width="0.5" opacity="0.7"/>
  <line x1="55.5" y1="52" x2="64.5" y2="52" stroke="#203048" stroke-width="0.5" opacity="0.6"/>
  <line x1="55.5" y1="54" x2="64.5" y2="54" stroke="#203048" stroke-width="0.5" opacity="0.5"/>
  <line x1="60" y1="48" x2="60" y2="56" stroke="#203048" stroke-width="0.5" opacity="0.6"/>
  <!-- Pupils -->
  <circle cx="41" cy="51" r="2" fill="#030608"/>
  <circle cx="61" cy="51" r="2" fill="#030608"/>
  <circle cx="42" cy="50" r="0.9" fill="#FFFFFF" opacity="0.75"/>
  <circle cx="62" cy="50" r="0.9" fill="#FFFFFF" opacity="0.75"/>
  <!-- Nose -->
  <ellipse cx="50" cy="62" rx="2.5" ry="1.8" fill="#0C2840" opacity="0.5"/>
  <!-- Eager analytical expression -->
  <path d="M 42 69 Q 50 76 58 69" fill="none" stroke="#4880C0" stroke-width="1.8" stroke-linecap="round"/>
</svg>`,

  "SR-MLE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="srmle-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#040C20"/>
      <stop offset="100%" stop-color="#020610"/>
    </radialGradient>
    <radialGradient id="srmle-skin" cx="45%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#40A0F0"/>
      <stop offset="55%" stop-color="#1060C0"/>
      <stop offset="100%" stop-color="#083060"/>
    </radialGradient>
    <radialGradient id="srmle-iris" cx="38%" cy="32%" r="58%">
      <stop offset="0%" stop-color="#D0ECFF"/>
      <stop offset="50%" stop-color="#5090D0"/>
      <stop offset="100%" stop-color="#103058"/>
    </radialGradient>
    <filter id="srmle-glow">
      <feGaussianBlur stdDeviation="1.4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#srmle-bg)" rx="10"/>
  <circle cx="8" cy="10" r="0.7" fill="#40A0F0" opacity="0.45"/>
  <circle cx="90" cy="11" r="0.6" fill="#5090D0" opacity="0.4"/>
  <!-- Technical electric-blue face -->
  <ellipse cx="50" cy="54" rx="23" ry="27" fill="url(#srmle-skin)"/>
  <!-- Neural antennae — rounded and glowing -->
  <path d="M 42 28 Q 36 18 38 10" fill="none" stroke="#40A0F0" stroke-width="2" stroke-linecap="round" filter="url(#srmle-glow)" opacity="0.5"/>
  <path d="M 42 28 Q 36 18 38 10" fill="none" stroke="#40A0F0" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M 58 28 Q 64 18 62 10" fill="none" stroke="#40A0F0" stroke-width="2" stroke-linecap="round" filter="url(#srmle-glow)" opacity="0.5"/>
  <path d="M 58 28 Q 64 18 62 10" fill="none" stroke="#40A0F0" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="38" cy="10" r="2.5" fill="#D0ECFF" filter="url(#srmle-glow)"/>
  <circle cx="62" cy="10" r="2.5" fill="#D0ECFF" filter="url(#srmle-glow)"/>
  <!-- Eye sockets -->
  <ellipse cx="40" cy="51" rx="7.5" ry="8.5" fill="#020610"/>
  <ellipse cx="60" cy="51" rx="7.5" ry="8.5" fill="#020610"/>
  <!-- Model-training graph iris left (loss curve going down) -->
  <circle cx="40" cy="51" r="5.5" fill="url(#srmle-iris)"/>
  <!-- Loss curve: starts high, slopes down -->
  <path d="M 35.5 47 Q 37 49 39 50.5 Q 41 52 43 52.5 Q 44 52.7 44.5 53" fill="none" stroke="#103058" stroke-width="1" stroke-linecap="round" opacity="0.9"/>
  <!-- Training axis lines -->
  <line x1="35.5" y1="47" x2="35.5" y2="55" stroke="#103058" stroke-width="0.4" opacity="0.5"/>
  <line x1="35.5" y1="55" x2="44.5" y2="55" stroke="#103058" stroke-width="0.4" opacity="0.5"/>
  <!-- Model-training graph iris right -->
  <circle cx="60" cy="51" r="5.5" fill="url(#srmle-iris)"/>
  <path d="M 55.5 47 Q 57 49 59 50.5 Q 61 52 63 52.5 Q 64 52.7 64.5 53" fill="none" stroke="#103058" stroke-width="1" stroke-linecap="round" opacity="0.9"/>
  <line x1="55.5" y1="47" x2="55.5" y2="55" stroke="#103058" stroke-width="0.4" opacity="0.5"/>
  <line x1="55.5" y1="55" x2="64.5" y2="55" stroke="#103058" stroke-width="0.4" opacity="0.5"/>
  <!-- Pupils -->
  <circle cx="41" cy="50" r="2" fill="#010408"/>
  <circle cx="61" cy="50" r="2" fill="#010408"/>
  <circle cx="42" cy="49" r="0.9" fill="#FFFFFF" opacity="0.8"/>
  <circle cx="62" cy="49" r="0.9" fill="#FFFFFF" opacity="0.8"/>
  <!-- Nose -->
  <ellipse cx="50" cy="62" rx="2.5" ry="1.8" fill="#083060" opacity="0.5"/>
  <!-- Focused technical expression -->
  <path d="M 43 68 Q 50 72 57 68" fill="none" stroke="#1060C0" stroke-width="1.7" stroke-linecap="round"/>
</svg>`,

  "MLE": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <radialGradient id="mle-bg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#080818"/>
      <stop offset="100%" stop-color="#04040C"/>
    </radialGradient>
    <radialGradient id="mle-skin" cx="45%" cy="35%" r="58%">
      <stop offset="0%" stop-color="#7068D0"/>
      <stop offset="55%" stop-color="#3830A0"/>
      <stop offset="100%" stop-color="#141050"/>
    </radialGradient>
    <radialGradient id="mle-iris" cx="38%" cy="32%" r="58%">
      <stop offset="0%" stop-color="#D0D0FF"/>
      <stop offset="50%" stop-color="#7070D0"/>
      <stop offset="100%" stop-color="#201860"/>
    </radialGradient>
    <filter id="mle-glow">
      <feGaussianBlur stdDeviation="1.1" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" fill="url(#mle-bg)" rx="10"/>
  <circle cx="9" cy="11" r="0.7" fill="#7068D0" opacity="0.45"/>
  <circle cx="89" cy="9" r="0.6" fill="#7070D0" opacity="0.4"/>
  <!-- Focused round blue-violet face -->
  <ellipse cx="50" cy="55" rx="23" ry="26" fill="url(#mle-skin)"/>
  <!-- Antennae -->
  <line x1="43" y1="30" x2="39" y2="12" stroke="#7068D0" stroke-width="1.6" stroke-linecap="round"/>
  <line x1="57" y1="30" x2="61" y2="12" stroke="#7068D0" stroke-width="1.6" stroke-linecap="round"/>
  <circle cx="39" cy="12" r="2" fill="#7070D0" filter="url(#mle-glow)"/>
  <circle cx="61" cy="12" r="2" fill="#7070D0" filter="url(#mle-glow)"/>
  <!-- Eye sockets -->
  <ellipse cx="40" cy="52" rx="7" ry="7.5" fill="#040408"/>
  <ellipse cx="60" cy="52" rx="7" ry="7.5" fill="#040408"/>
  <!-- Neural-node iris left (central node + connections) -->
  <circle cx="40" cy="52" r="5.5" fill="url(#mle-iris)"/>
  <!-- Central node -->
  <circle cx="40" cy="52" r="1.8" fill="#201860" opacity="0.9"/>
  <!-- Radiating connection lines -->
  <line x1="40" y1="50.2" x2="40" y2="47.5" stroke="#201860" stroke-width="0.5" opacity="0.7"/>
  <line x1="41.6" y1="52" x2="44" y2="52" stroke="#201860" stroke-width="0.5" opacity="0.7"/>
  <line x1="38.4" y1="52" x2="36" y2="52" stroke="#201860" stroke-width="0.5" opacity="0.7"/>
  <line x1="41.3" y1="53.3" x2="43" y2="55" stroke="#201860" stroke-width="0.5" opacity="0.6"/>
  <line x1="38.7" y1="53.3" x2="37" y2="55" stroke="#201860" stroke-width="0.5" opacity="0.6"/>
  <!-- Satellite nodes -->
  <circle cx="40" cy="47" r="0.9" fill="#201860" opacity="0.8"/>
  <circle cx="44.5" cy="52" r="0.9" fill="#201860" opacity="0.8"/>
  <circle cx="35.5" cy="52" r="0.9" fill="#201860" opacity="0.8"/>
  <!-- Neural-node iris right -->
  <circle cx="60" cy="52" r="5.5" fill="url(#mle-iris)"/>
  <circle cx="60" cy="52" r="1.8" fill="#201860" opacity="0.9"/>
  <line x1="60" y1="50.2" x2="60" y2="47.5" stroke="#201860" stroke-width="0.5" opacity="0.7"/>
  <line x1="61.6" y1="52" x2="64" y2="52" stroke="#201860" stroke-width="0.5" opacity="0.7"/>
  <line x1="58.4" y1="52" x2="56" y2="52" stroke="#201860" stroke-width="0.5" opacity="0.7"/>
  <line x1="61.3" y1="53.3" x2="63" y2="55" stroke="#201860" stroke-width="0.5" opacity="0.6"/>
  <line x1="58.7" y1="53.3" x2="57" y2="55" stroke="#201860" stroke-width="0.5" opacity="0.6"/>
  <circle cx="60" cy="47" r="0.9" fill="#201860" opacity="0.8"/>
  <circle cx="64.5" cy="52" r="0.9" fill="#201860" opacity="0.8"/>
  <circle cx="55.5" cy="52" r="0.9" fill="#201860" opacity="0.8"/>
  <!-- Pupils -->
  <circle cx="41" cy="51" r="2" fill="#030308"/>
  <circle cx="61" cy="51" r="2" fill="#030308"/>
  <circle cx="42" cy="50" r="0.9" fill="#FFFFFF" opacity="0.75"/>
  <circle cx="62" cy="50" r="0.9" fill="#FFFFFF" opacity="0.75"/>
  <!-- Nose -->
  <ellipse cx="50" cy="63" rx="2.5" ry="1.8" fill="#141050" opacity="0.5"/>
  <!-- Learning open expression -->
  <path d="M 42 69 Q 50 75 58 69" fill="none" stroke="#7068D0" stroke-width="1.7" stroke-linecap="round"/>
</svg>`,

};

// Write all SVGs
let written = 0;
for (const [code, svg] of Object.entries(svgs)) {
  const filePath = path.join(OUT, `${code}.svg`);
  fs.writeFileSync(filePath, svg, "utf-8");
  console.log(`Written: ${code}.svg`);
  written++;
}

console.log(`\nDone. ${written} SVGs written to ${OUT}`);
