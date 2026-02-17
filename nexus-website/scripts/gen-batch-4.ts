import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUT = join(__dirname, "../public/brand/avatars/agents");

function svg(body: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200"><defs><radialGradient id="bg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#1a1f3a"/><stop offset="100%" stop-color="#030108"/></radialGradient></defs><rect width="100" height="100" rx="18" fill="url(#bg)"/>${body}</svg>`;
}

const avatars: Record<string, string> = {

  // ─── DEPT 03: PLATFORM / INFRASTRUCTURE (purple #7C3AED) ───────────────────

  // VP-INFRA: Large dual-cloud + dual server racks, 4 uplink beams, "INFRA" label, very complex
  "VP-INFRA": svg(`
    <defs>
      <radialGradient id="vi-cg" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stop-color="#A78BFA"/>
        <stop offset="100%" stop-color="#5B21B6"/>
      </radialGradient>
      <filter id="vi-glow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <!-- Dual uplink beams left -->
    <line x1="28" y1="54" x2="20" y2="8" stroke="#7C3AED" stroke-width="1.2" opacity="0.6"/>
    <line x1="38" y1="52" x2="32" y2="8" stroke="#A78BFA" stroke-width="0.8" opacity="0.5"/>
    <!-- Dual uplink beams right -->
    <line x1="62" y1="52" x2="68" y2="8" stroke="#A78BFA" stroke-width="0.8" opacity="0.5"/>
    <line x1="72" y1="54" x2="80" y2="8" stroke="#7C3AED" stroke-width="1.2" opacity="0.6"/>
    <!-- Satellite dot top -->
    <circle cx="50" cy="6" r="2.5" fill="#C4B5FD" filter="url(#vi-glow)"/>
    <!-- Cloud body -->
    <ellipse cx="50" cy="46" rx="28" ry="13" fill="url(#vi-cg)" stroke="#7C3AED" stroke-width="1.5"/>
    <ellipse cx="38" cy="41" rx="13" ry="10" fill="url(#vi-cg)" stroke="#7C3AED" stroke-width="1.2"/>
    <ellipse cx="58" cy="40" rx="14" ry="11" fill="url(#vi-cg)" stroke="#7C3AED" stroke-width="1.2"/>
    <ellipse cx="50" cy="36" rx="10" ry="8" fill="url(#vi-cg)" stroke="#7C3AED" stroke-width="1"/>
    <!-- "INFRA" label on cloud body -->
    <text x="50" y="49" font-family="monospace" font-size="6" font-weight="bold" fill="#EDE9FE" text-anchor="middle" letter-spacing="1">INFRA</text>
    <!-- Authority star badge -->
    <polygon points="50,29 51.8,34 57,34 52.9,37.2 54.7,42.2 50,39 45.3,42.2 47.1,37.2 43,34 48.2,34" fill="#FBBF24" opacity="0.85" transform="scale(0.45) translate(61,3)"/>
    <!-- Left server rack -->
    <rect x="18" y="58" width="22" height="26" rx="3" fill="#1e1b4b" stroke="#7C3AED" stroke-width="1.2"/>
    <rect x="20" y="61" width="18" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="20" y="66" width="18" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="20" y="71" width="18" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="20" y="76" width="18" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <circle cx="35" cy="62.5" r="1" fill="#22C55E"/>
    <circle cx="35" cy="67.5" r="1" fill="#22C55E"/>
    <circle cx="35" cy="72.5" r="1" fill="#F59E0B"/>
    <circle cx="35" cy="77.5" r="1" fill="#EF4444"/>
    <!-- Right server rack -->
    <rect x="60" y="58" width="22" height="26" rx="3" fill="#1e1b4b" stroke="#7C3AED" stroke-width="1.2"/>
    <rect x="62" y="61" width="18" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="62" y="66" width="18" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="62" y="71" width="18" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="62" y="76" width="18" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <circle cx="77" cy="62.5" r="1" fill="#22C55E"/>
    <circle cx="77" cy="67.5" r="1" fill="#22C55E"/>
    <circle cx="77" cy="72.5" r="1" fill="#22C55E"/>
    <circle cx="77" cy="77.5" r="1" fill="#F59E0B"/>
    <!-- Connection bridge between racks -->
    <line x1="40" y1="71" x2="60" y2="71" stroke="#7C3AED" stroke-width="0.8" stroke-dasharray="2,2"/>
  `),

  // DIR-CLOUD: Cloud body with 3 nested cloud shapes + providers, lightning bolt uplink
  "DIR-CLOUD": svg(`
    <defs>
      <radialGradient id="dc-cg" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stop-color="#8B5CF6"/>
        <stop offset="100%" stop-color="#4C1D95"/>
      </radialGradient>
    </defs>
    <!-- Lightning uplink -->
    <polygon points="50,6 46,20 50,18 46,32" fill="#F59E0B" opacity="0.9"/>
    <!-- Outer cloud -->
    <ellipse cx="50" cy="55" rx="26" ry="12" fill="url(#dc-cg)" stroke="#7C3AED" stroke-width="1.4"/>
    <ellipse cx="37" cy="49" rx="12" ry="9" fill="url(#dc-cg)" stroke="#7C3AED" stroke-width="1.2"/>
    <ellipse cx="58" cy="48" rx="13" ry="9.5" fill="url(#dc-cg)" stroke="#7C3AED" stroke-width="1.2"/>
    <ellipse cx="50" cy="44" rx="9" ry="7" fill="url(#dc-cg)" stroke="#7C3AED" stroke-width="1"/>
    <!-- Nested cloud 1 (small, left) -->
    <ellipse cx="36" cy="52" rx="6" ry="3.5" fill="#312e81" stroke="#C4B5FD" stroke-width="0.7"/>
    <ellipse cx="33" cy="49.5" rx="3.5" ry="3" fill="#312e81" stroke="#C4B5FD" stroke-width="0.6"/>
    <ellipse cx="38" cy="49" rx="4" ry="3" fill="#312e81" stroke="#C4B5FD" stroke-width="0.6"/>
    <!-- Nested cloud 2 (small, center) -->
    <ellipse cx="50" cy="50" rx="5.5" ry="3" fill="#312e81" stroke="#C4B5FD" stroke-width="0.7"/>
    <ellipse cx="47.5" cy="47.5" rx="3" ry="2.5" fill="#312e81" stroke="#C4B5FD" stroke-width="0.6"/>
    <ellipse cx="52" cy="47" rx="3.5" ry="2.8" fill="#312e81" stroke="#C4B5FD" stroke-width="0.6"/>
    <!-- Nested cloud 3 (small, right) -->
    <ellipse cx="63" cy="52" rx="6" ry="3.5" fill="#312e81" stroke="#C4B5FD" stroke-width="0.7"/>
    <ellipse cx="60" cy="49.5" rx="3.5" ry="3" fill="#312e81" stroke="#C4B5FD" stroke-width="0.6"/>
    <ellipse cx="65.5" cy="49" rx="4" ry="3" fill="#312e81" stroke="#C4B5FD" stroke-width="0.6"/>
    <!-- Cloud provider dots inside nested clouds -->
    <circle cx="36" cy="51.5" r="1.2" fill="#22C55E"/>
    <circle cx="50" cy="49.8" r="1.2" fill="#3B82F6"/>
    <circle cx="63" cy="51.5" r="1.2" fill="#F59E0B"/>
    <!-- Label -->
    <text x="50" y="65" font-family="monospace" font-size="5.5" fill="#DDD6FE" text-anchor="middle" font-weight="bold">CLOUD</text>
    <!-- Ground line with uplinks -->
    <line x1="24" y1="68" x2="76" y2="68" stroke="#7C3AED" stroke-width="0.8" opacity="0.5"/>
    <line x1="35" y1="67" x2="35" y2="78" stroke="#7C3AED" stroke-width="1" opacity="0.6"/>
    <line x1="50" y1="67" x2="50" y2="78" stroke="#7C3AED" stroke-width="1" opacity="0.6"/>
    <line x1="65" y1="67" x2="65" y2="78" stroke="#7C3AED" stroke-width="1" opacity="0.6"/>
    <rect x="30" y="78" width="10" height="6" rx="1.5" fill="#1e1b4b" stroke="#7C3AED" stroke-width="0.7"/>
    <rect x="45" y="78" width="10" height="6" rx="1.5" fill="#1e1b4b" stroke="#7C3AED" stroke-width="0.7"/>
    <rect x="60" y="78" width="10" height="6" rx="1.5" fill="#1e1b4b" stroke="#7C3AED" stroke-width="0.7"/>
  `),

  // DIR-SRE: Cloud with EKG heartbeat line + alert dot
  "DIR-SRE": svg(`
    <defs>
      <radialGradient id="ds-cg" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stop-color="#8B5CF6"/>
        <stop offset="100%" stop-color="#4C1D95"/>
      </radialGradient>
    </defs>
    <!-- Alert dot (pulsing indicator) -->
    <circle cx="76" cy="22" r="5" fill="#EF4444" opacity="0.25"/>
    <circle cx="76" cy="22" r="3" fill="#EF4444" opacity="0.6"/>
    <circle cx="76" cy="22" r="1.5" fill="#FCA5A5"/>
    <text x="76" y="15" font-family="monospace" font-size="4" fill="#FCA5A5" text-anchor="middle">ALERT</text>
    <!-- Uplink beam -->
    <line x1="50" y1="28" x2="50" y2="10" stroke="#7C3AED" stroke-width="1" opacity="0.7"/>
    <circle cx="50" cy="9" r="2" fill="#A78BFA"/>
    <!-- Cloud body -->
    <ellipse cx="50" cy="54" rx="27" ry="13" fill="url(#ds-cg)" stroke="#7C3AED" stroke-width="1.4"/>
    <ellipse cx="37" cy="48" rx="13" ry="9.5" fill="url(#ds-cg)" stroke="#7C3AED" stroke-width="1.2"/>
    <ellipse cx="59" cy="47" rx="13.5" ry="10" fill="url(#ds-cg)" stroke="#7C3AED" stroke-width="1.2"/>
    <ellipse cx="50" cy="43" rx="10" ry="7.5" fill="url(#ds-cg)" stroke="#7C3AED" stroke-width="1"/>
    <!-- EKG heartbeat line inside cloud -->
    <polyline points="22,54 30,54 33,48 36,60 39,45 42,62 45,54 52,54 54,50 56,58 58,54 78,54"
      fill="none" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.95"/>
    <!-- SRE label -->
    <text x="50" y="68" font-family="monospace" font-size="5.5" fill="#DDD6FE" text-anchor="middle" font-weight="bold">SRE</text>
    <!-- Server rack below -->
    <rect x="35" y="72" width="30" height="16" rx="3" fill="#1e1b4b" stroke="#7C3AED" stroke-width="1"/>
    <rect x="38" y="74.5" width="24" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="38" y="79.5" width="24" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="38" y="84" width="24" height="2" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <circle cx="59" cy="76" r="1" fill="#22C55E"/>
    <circle cx="59" cy="81" r="1" fill="#EF4444"/>
    <circle cx="59" cy="85" r="1" fill="#F59E0B"/>
  `),

  // DIR-PLATFORM: Cloud with horizontal platform/stage bar underneath
  "DIR-PLATFORM": svg(`
    <defs>
      <radialGradient id="dp-cg" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stop-color="#8B5CF6"/>
        <stop offset="100%" stop-color="#4C1D95"/>
      </radialGradient>
      <linearGradient id="dp-bar" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#4C1D95"/>
        <stop offset="50%" stop-color="#7C3AED"/>
        <stop offset="100%" stop-color="#4C1D95"/>
      </linearGradient>
    </defs>
    <!-- Uplink -->
    <line x1="50" y1="10" x2="50" y2="26" stroke="#7C3AED" stroke-width="1.2" opacity="0.7"/>
    <circle cx="50" cy="8" r="2.5" fill="#C4B5FD"/>
    <!-- Cloud body -->
    <ellipse cx="50" cy="50" rx="27" ry="13" fill="url(#dp-cg)" stroke="#7C3AED" stroke-width="1.4"/>
    <ellipse cx="37" cy="44" rx="13" ry="9.5" fill="url(#dp-cg)" stroke="#7C3AED" stroke-width="1.2"/>
    <ellipse cx="60" cy="43" rx="13.5" ry="10" fill="url(#dp-cg)" stroke="#7C3AED" stroke-width="1.2"/>
    <ellipse cx="50" cy="39" rx="10" ry="7.5" fill="url(#dp-cg)" stroke="#7C3AED" stroke-width="1"/>
    <!-- PLATFORM label in cloud -->
    <text x="50" y="53" font-family="monospace" font-size="5" fill="#EDE9FE" text-anchor="middle" font-weight="bold">PLATFORM</text>
    <!-- Stage/platform bar underneath cloud -->
    <rect x="16" y="64" width="68" height="8" rx="3" fill="url(#dp-bar)" stroke="#A78BFA" stroke-width="1.2"/>
    <!-- Platform surface highlights -->
    <line x1="18" y1="66" x2="82" y2="66" stroke="#C4B5FD" stroke-width="0.5" opacity="0.5"/>
    <line x1="18" y1="70" x2="82" y2="70" stroke="#6D28D9" stroke-width="0.4" opacity="0.4"/>
    <!-- Platform stage pillars -->
    <rect x="22" y="72" width="6" height="14" rx="2" fill="#3730A3" stroke="#7C3AED" stroke-width="0.8"/>
    <rect x="47" y="72" width="6" height="14" rx="2" fill="#3730A3" stroke="#7C3AED" stroke-width="0.8"/>
    <rect x="72" y="72" width="6" height="14" rx="2" fill="#3730A3" stroke="#7C3AED" stroke-width="0.8"/>
    <!-- Connection wires on platform top -->
    <line x1="28" y1="68" x2="47" y2="68" stroke="#A78BFA" stroke-width="0.6" stroke-dasharray="2,1.5"/>
    <line x1="53" y1="68" x2="72" y2="68" stroke="#A78BFA" stroke-width="0.6" stroke-dasharray="2,1.5"/>
  `),

  // MGR-DEVOPS: Cloud with DevOps infinity loop (∞) inside
  "MGR-DEVOPS": svg(`
    <defs>
      <radialGradient id="md-cg" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stop-color="#8B5CF6"/>
        <stop offset="100%" stop-color="#4C1D95"/>
      </radialGradient>
    </defs>
    <!-- Uplink beam -->
    <line x1="50" y1="12" x2="50" y2="28" stroke="#7C3AED" stroke-width="1.2" opacity="0.7"/>
    <circle cx="50" cy="10" r="2" fill="#A78BFA"/>
    <!-- Cloud body -->
    <ellipse cx="50" cy="52" rx="27" ry="12.5" fill="url(#md-cg)" stroke="#7C3AED" stroke-width="1.4"/>
    <ellipse cx="37" cy="46" rx="12.5" ry="9" fill="url(#md-cg)" stroke="#7C3AED" stroke-width="1.2"/>
    <ellipse cx="60" cy="45" rx="13" ry="9.5" fill="url(#md-cg)" stroke="#7C3AED" stroke-width="1.2"/>
    <ellipse cx="50" cy="41" rx="9.5" ry="7" fill="url(#md-cg)" stroke="#7C3AED" stroke-width="1"/>
    <!-- Infinity / DevOps cycle inside cloud -->
    <!-- Left loop -->
    <path d="M37,52 C34,48 28,48 28,52 C28,56 34,56 37,52" fill="none" stroke="#EDE9FE" stroke-width="2" stroke-linecap="round"/>
    <!-- Right loop -->
    <path d="M37,52 C40,56 46,56 46,52 C46,48 40,48 37,52" fill="none" stroke="#C4B5FD" stroke-width="2" stroke-linecap="round"/>
    <!-- Actually draw the ∞ symbol centered -->
    <!-- Redrawn: true infinity sign centered at 50,50 -->
    <path d="M42,50 C42,45.5 36,43 33,47 C30,51 33,55 38,53 C43,51 47,49 52,49 C57,49 62,53 59,57 C56,61 50,58 50,54" fill="none" stroke="#EDE9FE" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M42,50 C42,54.5 36,57 33,53 C30,49 33,45 38,47 C43,49 47,51 52,51 C57,51 62,47 59,43 C56,39 50,42 50,46" fill="none" stroke="#C4B5FD" stroke-width="2.2" stroke-linecap="round"/>
    <!-- Arrow tips on the loops -->
    <polygon points="50,53.5 53,50 50,47" fill="#F59E0B" opacity="0.8"/>
    <!-- DevOps label -->
    <text x="50" y="66" font-family="monospace" font-size="5" fill="#DDD6FE" text-anchor="middle" font-weight="bold">DEVOPS</text>
    <!-- Server rack -->
    <rect x="36" y="70" width="28" height="18" rx="3" fill="#1e1b4b" stroke="#7C3AED" stroke-width="1"/>
    <rect x="39" y="73" width="22" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="39" y="78" width="22" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="39" y="83" width="22" height="2" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <circle cx="58" cy="74.5" r="1" fill="#22C55E"/>
    <circle cx="58" cy="79.5" r="1" fill="#22C55E"/>
    <circle cx="58" cy="84" r="1" fill="#F59E0B"/>
  `),

  // MGR-SRE: Cloud with speedometer/gauge inside for reliability focus
  "MGR-SRE": svg(`
    <defs>
      <radialGradient id="ms-cg" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stop-color="#8B5CF6"/>
        <stop offset="100%" stop-color="#4C1D95"/>
      </radialGradient>
    </defs>
    <!-- Uplink -->
    <line x1="50" y1="10" x2="50" y2="27" stroke="#7C3AED" stroke-width="1.1" opacity="0.7"/>
    <circle cx="50" cy="9" r="1.8" fill="#A78BFA"/>
    <!-- Cloud body -->
    <ellipse cx="50" cy="51" rx="26" ry="12" fill="url(#ms-cg)" stroke="#7C3AED" stroke-width="1.4"/>
    <ellipse cx="37" cy="45" rx="12" ry="9" fill="url(#ms-cg)" stroke="#7C3AED" stroke-width="1.2"/>
    <ellipse cx="59" cy="44" rx="13" ry="9.5" fill="url(#ms-cg)" stroke="#7C3AED" stroke-width="1.2"/>
    <ellipse cx="50" cy="40" rx="9.5" ry="7" fill="url(#ms-cg)" stroke="#7C3AED" stroke-width="1"/>
    <!-- Speedometer gauge inside cloud -->
    <!-- Gauge arc background -->
    <path d="M33,52 A17,17 0 0,1 67,52" fill="none" stroke="#2e1065" stroke-width="5" stroke-linecap="round"/>
    <!-- Gauge colored zones -->
    <path d="M33,52 A17,17 0 0,1 42,37" fill="none" stroke="#EF4444" stroke-width="5" stroke-linecap="butt" opacity="0.8"/>
    <path d="M42,37 A17,17 0 0,1 58,37" fill="none" stroke="#F59E0B" stroke-width="5" stroke-linecap="butt" opacity="0.8"/>
    <path d="M58,37 A17,17 0 0,1 67,52" fill="none" stroke="#22C55E" stroke-width="5" stroke-linecap="butt" opacity="0.8"/>
    <!-- Gauge needle pointing high (green zone) -->
    <line x1="50" y1="52" x2="61" y2="40" stroke="#EDE9FE" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="50" cy="52" r="2.5" fill="#C4B5FD"/>
    <!-- Gauge ticks -->
    <line x1="33" y1="52" x2="35" y2="52" stroke="#EDE9FE" stroke-width="1" opacity="0.6"/>
    <line x1="50" y1="35" x2="50" y2="37" stroke="#EDE9FE" stroke-width="1" opacity="0.6"/>
    <line x1="67" y1="52" x2="65" y2="52" stroke="#EDE9FE" stroke-width="1" opacity="0.6"/>
    <!-- Label -->
    <text x="50" y="60" font-family="monospace" font-size="4.5" fill="#DDD6FE" text-anchor="middle">RELIABILITY</text>
    <!-- Server rack below -->
    <rect x="35" y="66" width="30" height="18" rx="3" fill="#1e1b4b" stroke="#7C3AED" stroke-width="1"/>
    <rect x="38" y="69" width="24" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="38" y="74" width="24" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="38" y="79" width="24" height="2" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <circle cx="59" cy="70.5" r="1" fill="#22C55E"/>
    <circle cx="59" cy="75.5" r="1" fill="#22C55E"/>
    <circle cx="59" cy="80" r="1" fill="#F59E0B"/>
  `),

  // SR-PLATFORM: Cloud with gear symbol inside, one server rack, refined
  "SR-PLATFORM": svg(`
    <defs>
      <radialGradient id="sp-cg" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stop-color="#8B5CF6"/>
        <stop offset="100%" stop-color="#4C1D95"/>
      </radialGradient>
    </defs>
    <!-- Uplink -->
    <line x1="50" y1="10" x2="50" y2="28" stroke="#7C3AED" stroke-width="1" opacity="0.6"/>
    <circle cx="50" cy="9" r="1.5" fill="#A78BFA"/>
    <!-- Cloud body (slightly smaller/cleaner) -->
    <ellipse cx="50" cy="50" rx="24" ry="11.5" fill="url(#sp-cg)" stroke="#7C3AED" stroke-width="1.3"/>
    <ellipse cx="38" cy="44" rx="11" ry="8.5" fill="url(#sp-cg)" stroke="#7C3AED" stroke-width="1.1"/>
    <ellipse cx="58" cy="44" rx="12" ry="9" fill="url(#sp-cg)" stroke="#7C3AED" stroke-width="1.1"/>
    <ellipse cx="50" cy="40" rx="8.5" ry="6.5" fill="url(#sp-cg)" stroke="#7C3AED" stroke-width="0.9"/>
    <!-- Gear inside cloud (8-tooth) -->
    <g transform="translate(50,47) scale(0.85)">
      <circle cx="0" cy="0" r="5.5" fill="#2e1065" stroke="#C4B5FD" stroke-width="0.8"/>
      <circle cx="0" cy="0" r="2.5" fill="#1e1b4b" stroke="#C4B5FD" stroke-width="0.6"/>
      <!-- Gear teeth -->
      <rect x="-1.2" y="-8" width="2.4" height="3" rx="0.5" fill="#C4B5FD"/>
      <rect x="-1.2" y="5" width="2.4" height="3" rx="0.5" fill="#C4B5FD"/>
      <rect x="-8" y="-1.2" width="3" height="2.4" rx="0.5" fill="#C4B5FD"/>
      <rect x="5" y="-1.2" width="3" height="2.4" rx="0.5" fill="#C4B5FD"/>
      <rect x="-6.5" y="-5.5" width="2.4" height="3" rx="0.5" fill="#C4B5FD" transform="rotate(-45)"/>
      <rect x="4" y="-5.5" width="2.4" height="3" rx="0.5" fill="#C4B5FD" transform="rotate(45)"/>
      <rect x="-6.5" y="2.5" width="2.4" height="3" rx="0.5" fill="#C4B5FD" transform="rotate(45)"/>
      <rect x="4" y="2.5" width="2.4" height="3" rx="0.5" fill="#C4B5FD" transform="rotate(-45)"/>
    </g>
    <!-- Label -->
    <text x="50" y="64" font-family="monospace" font-size="5" fill="#DDD6FE" text-anchor="middle" font-weight="bold">PLATFORM</text>
    <!-- Single server rack -->
    <rect x="36" y="68" width="28" height="18" rx="3" fill="#1e1b4b" stroke="#7C3AED" stroke-width="1"/>
    <rect x="39" y="71" width="22" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="39" y="76" width="22" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="39" y="81" width="22" height="2" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <circle cx="57" cy="72.5" r="1" fill="#22C55E"/>
    <circle cx="57" cy="77.5" r="1" fill="#22C55E"/>
    <circle cx="57" cy="82" r="1" fill="#F59E0B"/>
  `),

  // PLATFORM-ENG: Cloud with API hexagon inside, standard server rack
  "PLATFORM-ENG": svg(`
    <defs>
      <radialGradient id="pe-cg" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stop-color="#8B5CF6"/>
        <stop offset="100%" stop-color="#4C1D95"/>
      </radialGradient>
    </defs>
    <!-- Uplink -->
    <line x1="50" y1="11" x2="50" y2="27" stroke="#7C3AED" stroke-width="1" opacity="0.6"/>
    <circle cx="50" cy="10" r="1.5" fill="#A78BFA"/>
    <!-- Cloud body -->
    <ellipse cx="50" cy="49" rx="24" ry="11.5" fill="url(#pe-cg)" stroke="#7C3AED" stroke-width="1.3"/>
    <ellipse cx="38" cy="43" rx="11.5" ry="8.5" fill="url(#pe-cg)" stroke="#7C3AED" stroke-width="1.1"/>
    <ellipse cx="58" cy="43" rx="12" ry="9" fill="url(#pe-cg)" stroke="#7C3AED" stroke-width="1.1"/>
    <ellipse cx="50" cy="39" rx="9" ry="6.5" fill="url(#pe-cg)" stroke="#7C3AED" stroke-width="0.9"/>
    <!-- API Hexagon inside cloud -->
    <polygon points="50,39 55.2,42 55.2,48 50,51 44.8,48 44.8,42" fill="#2e1065" stroke="#C4B5FD" stroke-width="0.9"/>
    <text x="50" y="46.5" font-family="monospace" font-size="4" fill="#EDE9FE" text-anchor="middle" font-weight="bold">API</text>
    <!-- Connection nodes on hexagon edges -->
    <circle cx="50" cy="39" r="1" fill="#22C55E"/>
    <circle cx="55.2" cy="42" r="1" fill="#22C55E"/>
    <circle cx="55.2" cy="48" r="1" fill="#22C55E"/>
    <circle cx="50" cy="51" r="1" fill="#F59E0B"/>
    <circle cx="44.8" cy="48" r="1" fill="#F59E0B"/>
    <circle cx="44.8" cy="42" r="1" fill="#F59E0B"/>
    <!-- Label -->
    <text x="50" y="63" font-family="monospace" font-size="4.5" fill="#DDD6FE" text-anchor="middle">ENG</text>
    <!-- Server rack -->
    <rect x="36" y="67" width="28" height="19" rx="3" fill="#1e1b4b" stroke="#7C3AED" stroke-width="1"/>
    <rect x="39" y="70" width="22" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="39" y="75" width="22" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="39" y="80" width="22" height="2.5" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <circle cx="57" cy="71.5" r="1" fill="#22C55E"/>
    <circle cx="57" cy="76.5" r="1" fill="#22C55E"/>
    <circle cx="57" cy="81.5" r="1" fill="#22C55E"/>
  `),

  // SR-DEVOPS: Cloud with CI/CD pipeline flow arrows (→→→) inside
  "SR-DEVOPS": svg(`
    <defs>
      <radialGradient id="sd-cg" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stop-color="#8B5CF6"/>
        <stop offset="100%" stop-color="#4C1D95"/>
      </radialGradient>
    </defs>
    <!-- Uplink -->
    <line x1="50" y1="10" x2="50" y2="28" stroke="#7C3AED" stroke-width="1" opacity="0.6"/>
    <circle cx="50" cy="9" r="1.5" fill="#A78BFA"/>
    <!-- Cloud body -->
    <ellipse cx="50" cy="50" rx="25" ry="12" fill="url(#sd-cg)" stroke="#7C3AED" stroke-width="1.3"/>
    <ellipse cx="38" cy="44" rx="12" ry="8.5" fill="url(#sd-cg)" stroke="#7C3AED" stroke-width="1.1"/>
    <ellipse cx="59" cy="44" rx="12.5" ry="9" fill="url(#sd-cg)" stroke="#7C3AED" stroke-width="1.1"/>
    <ellipse cx="50" cy="40" rx="9" ry="6.5" fill="url(#sd-cg)" stroke="#7C3AED" stroke-width="0.9"/>
    <!-- CI/CD pipeline flow: boxes connected by arrows -->
    <!-- Box 1: BUILD -->
    <rect x="24" y="44" width="12" height="8" rx="1.5" fill="#2e1065" stroke="#A78BFA" stroke-width="0.7"/>
    <text x="30" y="49.5" font-family="monospace" font-size="3.2" fill="#EDE9FE" text-anchor="middle">BUILD</text>
    <!-- Arrow 1 -->
    <line x1="36" y1="48" x2="40" y2="48" stroke="#F59E0B" stroke-width="1.2"/>
    <polygon points="40,46.5 43,48 40,49.5" fill="#F59E0B"/>
    <!-- Box 2: TEST -->
    <rect x="43" y="44" width="12" height="8" rx="1.5" fill="#2e1065" stroke="#A78BFA" stroke-width="0.7"/>
    <text x="49" y="49.5" font-family="monospace" font-size="3.2" fill="#EDE9FE" text-anchor="middle">TEST</text>
    <!-- Arrow 2 -->
    <line x1="55" y1="48" x2="59" y2="48" stroke="#F59E0B" stroke-width="1.2"/>
    <polygon points="59,46.5 62,48 59,49.5" fill="#F59E0B"/>
    <!-- Box 3: DEPLOY -->
    <rect x="62" y="44" width="13" height="8" rx="1.5" fill="#2e1065" stroke="#22C55E" stroke-width="0.7"/>
    <text x="68.5" y="49.5" font-family="monospace" font-size="3" fill="#22C55E" text-anchor="middle">DEPLOY</text>
    <!-- Pipeline status dots -->
    <circle cx="30" cy="54" r="1.2" fill="#22C55E"/>
    <circle cx="49" cy="54" r="1.2" fill="#22C55E"/>
    <circle cx="68" cy="54" r="1.2" fill="#F59E0B"/>
    <!-- Label -->
    <text x="50" y="65" font-family="monospace" font-size="5" fill="#DDD6FE" text-anchor="middle" font-weight="bold">SR-DEVOPS</text>
    <!-- Server rack -->
    <rect x="36" y="69" width="28" height="18" rx="3" fill="#1e1b4b" stroke="#7C3AED" stroke-width="1"/>
    <rect x="39" y="72" width="22" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="39" y="77" width="22" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="39" y="82" width="22" height="2" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <circle cx="57" cy="73.5" r="1" fill="#22C55E"/>
    <circle cx="57" cy="78.5" r="1" fill="#22C55E"/>
  `),

  // DEVOPS-ENG: Cloud with smaller pipeline arrows, standard
  "DEVOPS-ENG": svg(`
    <defs>
      <radialGradient id="de-cg" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stop-color="#7C3AED"/>
        <stop offset="100%" stop-color="#3B0764"/>
      </radialGradient>
    </defs>
    <!-- Uplink -->
    <line x1="50" y1="11" x2="50" y2="27" stroke="#7C3AED" stroke-width="0.9" opacity="0.5"/>
    <circle cx="50" cy="10" r="1.2" fill="#A78BFA"/>
    <!-- Cloud body (standard size) -->
    <ellipse cx="50" cy="48" rx="23" ry="11" fill="url(#de-cg)" stroke="#7C3AED" stroke-width="1.2"/>
    <ellipse cx="38" cy="43" rx="11" ry="8" fill="url(#de-cg)" stroke="#7C3AED" stroke-width="1"/>
    <ellipse cx="58" cy="43" rx="11.5" ry="8.5" fill="url(#de-cg)" stroke="#7C3AED" stroke-width="1"/>
    <ellipse cx="50" cy="39" rx="8.5" ry="6" fill="url(#de-cg)" stroke="#7C3AED" stroke-width="0.8"/>
    <!-- Smaller pipeline flow inside cloud -->
    <!-- Stage dots connected by arrows -->
    <circle cx="32" cy="47" r="3.5" fill="#2e1065" stroke="#A78BFA" stroke-width="0.7"/>
    <text x="32" y="48.3" font-family="monospace" font-size="3" fill="#EDE9FE" text-anchor="middle">CI</text>
    <line x1="35.5" y1="47" x2="43.5" y2="47" stroke="#F59E0B" stroke-width="1"/>
    <polygon points="43.5,45.8 46,47 43.5,48.2" fill="#F59E0B"/>
    <circle cx="50" cy="47" r="3.5" fill="#2e1065" stroke="#A78BFA" stroke-width="0.7"/>
    <text x="50" y="48.3" font-family="monospace" font-size="3" fill="#EDE9FE" text-anchor="middle">QA</text>
    <line x1="53.5" y1="47" x2="61.5" y2="47" stroke="#F59E0B" stroke-width="1"/>
    <polygon points="61.5,45.8 64,47 61.5,48.2" fill="#F59E0B"/>
    <circle cx="68" cy="47" r="3.5" fill="#2e1065" stroke="#22C55E" stroke-width="0.7"/>
    <text x="68" y="48.3" font-family="monospace" font-size="3" fill="#22C55E" text-anchor="middle">CD</text>
    <!-- Label -->
    <text x="50" y="62" font-family="monospace" font-size="4.5" fill="#DDD6FE" text-anchor="middle">DEVOPS-ENG</text>
    <!-- Server rack standard -->
    <rect x="36" y="66" width="28" height="20" rx="3" fill="#1e1b4b" stroke="#7C3AED" stroke-width="1"/>
    <rect x="39" y="69" width="22" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="39" y="74" width="22" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="39" y="79" width="22" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <circle cx="57" cy="70.5" r="1" fill="#22C55E"/>
    <circle cx="57" cy="75.5" r="1" fill="#22C55E"/>
    <circle cx="57" cy="80.5" r="1" fill="#22C55E"/>
  `),

  // SR-SRE: Cloud with "99.9%" SLO display inside cloud face
  "SR-SRE": svg(`
    <defs>
      <radialGradient id="ss-cg" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stop-color="#8B5CF6"/>
        <stop offset="100%" stop-color="#4C1D95"/>
      </radialGradient>
    </defs>
    <!-- Uplink -->
    <line x1="50" y1="10" x2="50" y2="27" stroke="#7C3AED" stroke-width="1" opacity="0.6"/>
    <circle cx="50" cy="9" r="1.5" fill="#A78BFA"/>
    <!-- Cloud body -->
    <ellipse cx="50" cy="50" rx="26" ry="12.5" fill="url(#ss-cg)" stroke="#7C3AED" stroke-width="1.3"/>
    <ellipse cx="37" cy="44" rx="12.5" ry="9" fill="url(#ss-cg)" stroke="#7C3AED" stroke-width="1.1"/>
    <ellipse cx="59" cy="44" rx="13" ry="9.5" fill="url(#ss-cg)" stroke="#7C3AED" stroke-width="1.1"/>
    <ellipse cx="50" cy="40" rx="9.5" ry="7" fill="url(#ss-cg)" stroke="#7C3AED" stroke-width="0.9"/>
    <!-- SLO "99.9%" display inside cloud -->
    <rect x="32" y="41" width="36" height="14" rx="3" fill="#1e0a3c" stroke="#C4B5FD" stroke-width="0.8" opacity="0.9"/>
    <text x="50" y="50" font-family="monospace" font-size="9" fill="#22C55E" text-anchor="middle" font-weight="bold">99.9%</text>
    <text x="50" y="57" font-family="monospace" font-size="3.5" fill="#A78BFA" text-anchor="middle">UPTIME SLO</text>
    <!-- Status bar below percentage -->
    <rect x="34" y="55.5" width="32" height="2" rx="1" fill="#1e0a3c" stroke="#6D28D9" stroke-width="0.4"/>
    <rect x="34" y="55.5" width="31.7" height="2" rx="1" fill="#22C55E" opacity="0.7"/>
    <!-- Label -->
    <text x="50" y="66" font-family="monospace" font-size="5" fill="#DDD6FE" text-anchor="middle" font-weight="bold">SR-SRE</text>
    <!-- Server rack -->
    <rect x="36" y="70" width="28" height="17" rx="3" fill="#1e1b4b" stroke="#7C3AED" stroke-width="1"/>
    <rect x="39" y="73" width="22" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="39" y="78" width="22" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="39" y="83" width="22" height="1.5" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <circle cx="57" cy="74.5" r="1" fill="#22C55E"/>
    <circle cx="57" cy="79.5" r="1" fill="#22C55E"/>
  `),

  // SRE-ENG: Cloud with uptime status dots (green/red circles) inside cloud
  "SRE-ENG": svg(`
    <defs>
      <radialGradient id="se-cg" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stop-color="#7C3AED"/>
        <stop offset="100%" stop-color="#3B0764"/>
      </radialGradient>
    </defs>
    <!-- Uplink -->
    <line x1="50" y1="11" x2="50" y2="27" stroke="#7C3AED" stroke-width="0.9" opacity="0.5"/>
    <circle cx="50" cy="10" r="1.2" fill="#8B5CF6"/>
    <!-- Cloud body -->
    <ellipse cx="50" cy="49" rx="24" ry="11.5" fill="url(#se-cg)" stroke="#7C3AED" stroke-width="1.2"/>
    <ellipse cx="38" cy="43" rx="11.5" ry="8.5" fill="url(#se-cg)" stroke="#7C3AED" stroke-width="1"/>
    <ellipse cx="58" cy="43" rx="12" ry="9" fill="url(#se-cg)" stroke="#7C3AED" stroke-width="1"/>
    <ellipse cx="50" cy="39" rx="8.5" ry="6.5" fill="url(#se-cg)" stroke="#7C3AED" stroke-width="0.8"/>
    <!-- Uptime status dot grid inside cloud -->
    <!-- Row 1: all green -->
    <circle cx="31" cy="44" r="2.2" fill="#22C55E" opacity="0.9"/>
    <circle cx="37" cy="44" r="2.2" fill="#22C55E" opacity="0.9"/>
    <circle cx="43" cy="44" r="2.2" fill="#22C55E" opacity="0.9"/>
    <circle cx="49" cy="44" r="2.2" fill="#22C55E" opacity="0.9"/>
    <circle cx="55" cy="44" r="2.2" fill="#22C55E" opacity="0.9"/>
    <circle cx="61" cy="44" r="2.2" fill="#22C55E" opacity="0.9"/>
    <circle cx="67" cy="44" r="2.2" fill="#22C55E" opacity="0.9"/>
    <!-- Row 2: mostly green, one yellow, one red -->
    <circle cx="31" cy="51" r="2.2" fill="#22C55E" opacity="0.9"/>
    <circle cx="37" cy="51" r="2.2" fill="#22C55E" opacity="0.9"/>
    <circle cx="43" cy="51" r="2.2" fill="#22C55E" opacity="0.9"/>
    <circle cx="49" cy="51" r="2.2" fill="#F59E0B" opacity="0.9"/>
    <circle cx="55" cy="51" r="2.2" fill="#22C55E" opacity="0.9"/>
    <circle cx="61" cy="51" r="2.2" fill="#EF4444" opacity="0.9"/>
    <circle cx="67" cy="51" r="2.2" fill="#22C55E" opacity="0.9"/>
    <!-- Tooltip for red dot -->
    <line x1="61" y1="49" x2="65" y2="44" stroke="#EF4444" stroke-width="0.6" opacity="0.7"/>
    <rect x="64" y="40" width="10" height="5" rx="1" fill="#1e0a3c" stroke="#EF4444" stroke-width="0.5"/>
    <text x="69" y="43.5" font-family="monospace" font-size="3" fill="#FCA5A5" text-anchor="middle">DOWN</text>
    <!-- Label -->
    <text x="50" y="63" font-family="monospace" font-size="4.5" fill="#DDD6FE" text-anchor="middle">SRE-ENG</text>
    <!-- Server rack -->
    <rect x="36" y="67" width="28" height="19" rx="3" fill="#1e1b4b" stroke="#7C3AED" stroke-width="1"/>
    <rect x="39" y="70" width="22" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="39" y="75" width="22" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <rect x="39" y="80" width="22" height="3" rx="1" fill="#4C1D95" stroke="#7C3AED" stroke-width="0.5"/>
    <circle cx="57" cy="71.5" r="1" fill="#22C55E"/>
    <circle cx="57" cy="76.5" r="1" fill="#22C55E"/>
    <circle cx="57" cy="81.5" r="1" fill="#F59E0B"/>
  `),

  // ─── DEPT 07: QUALITY ASSURANCE (green #22C55E) ───────────────────────────

  // DIR-QA: Largest shield, bug antenna + microscope symbol, authority badge
  "DIR-QA": svg(`
    <defs>
      <linearGradient id="dq-sg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#4ADE80"/>
        <stop offset="100%" stop-color="#14532D"/>
      </linearGradient>
      <filter id="dq-glow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <!-- Bug antennae above shield -->
    <line x1="43" y1="16" x2="38" y2="8" stroke="#22C55E" stroke-width="1.2"/>
    <circle cx="38" cy="7" r="1.8" fill="#4ADE80"/>
    <line x1="57" y1="16" x2="62" y2="8" stroke="#22C55E" stroke-width="1.2"/>
    <circle cx="62" cy="7" r="1.8" fill="#4ADE80"/>
    <!-- Large shield (authority) -->
    <path d="M50,18 L72,26 L72,52 Q72,70 50,82 Q28,70 28,52 L28,26 Z" fill="url(#dq-sg)" stroke="#22C55E" stroke-width="2" filter="url(#dq-glow)"/>
    <!-- Shield inner border -->
    <path d="M50,23 L67,30 L67,52 Q67,66 50,76 Q33,66 33,52 L33,30 Z" fill="none" stroke="#86EFAC" stroke-width="0.8" opacity="0.5"/>
    <!-- Microscope symbol inside shield -->
    <!-- Eyepiece -->
    <rect x="46" y="30" width="8" height="5" rx="1.5" fill="#14532D" stroke="#86EFAC" stroke-width="0.8"/>
    <!-- Body tube -->
    <rect x="48" y="35" width="4" height="12" rx="1" fill="#14532D" stroke="#86EFAC" stroke-width="0.7"/>
    <!-- Objective lens -->
    <ellipse cx="50" cy="48" rx="4.5" ry="2.5" fill="#14532D" stroke="#86EFAC" stroke-width="0.8"/>
    <!-- Stage arm -->
    <rect x="42" y="52" width="16" height="2" rx="1" fill="#166534" stroke="#86EFAC" stroke-width="0.6"/>
    <!-- Base -->
    <rect x="42" y="54" width="16" height="3" rx="1.5" fill="#166534" stroke="#86EFAC" stroke-width="0.7"/>
    <!-- Light beam from microscope -->
    <polygon points="50,57 46,65 54,65" fill="#FCD34D" opacity="0.3"/>
    <!-- Authority gold star badge -->
    <polygon points="72,22 73.8,27.5 79.5,27.5 74.9,31 76.7,36.5 72,33 67.3,36.5 69.1,31 64.5,27.5 70.2,27.5" fill="#FBBF24"/>
    <text x="50" y="89" font-family="monospace" font-size="4.5" fill="#86EFAC" text-anchor="middle" font-weight="bold">DIR-QA</text>
  `),

  // MGR-QA: Shield with clipboard/checklist, management badge
  "MGR-QA": svg(`
    <defs>
      <linearGradient id="mq-sg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#4ADE80"/>
        <stop offset="100%" stop-color="#14532D"/>
      </linearGradient>
    </defs>
    <!-- Shield (large, management) -->
    <path d="M50,14 L70,22 L70,50 Q70,66 50,78 Q30,66 30,50 L30,22 Z" fill="url(#mq-sg)" stroke="#22C55E" stroke-width="1.8"/>
    <!-- Inner shield -->
    <path d="M50,19 L65,26 L65,50 Q65,62 50,72 Q35,62 35,50 L35,26 Z" fill="none" stroke="#86EFAC" stroke-width="0.7" opacity="0.4"/>
    <!-- Clipboard inside shield -->
    <!-- Clipboard board -->
    <rect x="39" y="30" width="22" height="30" rx="2" fill="#052e16" stroke="#86EFAC" stroke-width="0.8"/>
    <!-- Clipboard clip top -->
    <rect x="45" y="27" width="10" height="5" rx="2" fill="#166534" stroke="#86EFAC" stroke-width="0.7"/>
    <rect x="47" y="28.5" width="6" height="3" rx="1" fill="#052e16" stroke="#86EFAC" stroke-width="0.5"/>
    <!-- Checklist items -->
    <!-- Item 1: checked -->
    <rect x="42" y="35" width="4" height="4" rx="0.8" fill="none" stroke="#86EFAC" stroke-width="0.8"/>
    <polyline points="43,37 44.5,38.5 47,36" fill="none" stroke="#4ADE80" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="48" y1="37" x2="58" y2="37" stroke="#86EFAC" stroke-width="0.7"/>
    <!-- Item 2: checked -->
    <rect x="42" y="41" width="4" height="4" rx="0.8" fill="none" stroke="#86EFAC" stroke-width="0.8"/>
    <polyline points="43,43 44.5,44.5 47,42" fill="none" stroke="#4ADE80" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="48" y1="43" x2="58" y2="43" stroke="#86EFAC" stroke-width="0.7"/>
    <!-- Item 3: in progress -->
    <rect x="42" y="47" width="4" height="4" rx="0.8" fill="none" stroke="#F59E0B" stroke-width="0.8"/>
    <line x1="48" y1="49" x2="55" y2="49" stroke="#86EFAC" stroke-width="0.7"/>
    <!-- Item 4: empty -->
    <rect x="42" y="53" width="4" height="4" rx="0.8" fill="none" stroke="#6B7280" stroke-width="0.8"/>
    <line x1="48" y1="55" x2="53" y2="55" stroke="#4B5563" stroke-width="0.7"/>
    <!-- Management diamond badge -->
    <polygon points="74,18 78,22 74,26 70,22" fill="#A78BFA" stroke="#7C3AED" stroke-width="0.5"/>
    <text x="50" y="87" font-family="monospace" font-size="4.5" fill="#86EFAC" text-anchor="middle" font-weight="bold">MGR-QA</text>
  `),

  // SR-QA-AUTO: Shield with robot/automation symbol inside, "AUTO" tag
  "SR-QA-AUTO": svg(`
    <defs>
      <linearGradient id="qa-auto-sg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#4ADE80"/>
        <stop offset="100%" stop-color="#14532D"/>
      </linearGradient>
    </defs>
    <!-- "AUTO" tag upper right -->
    <rect x="65" y="8" width="22" height="9" rx="3" fill="#052e16" stroke="#22C55E" stroke-width="0.9"/>
    <text x="76" y="14.5" font-family="monospace" font-size="5" fill="#4ADE80" text-anchor="middle" font-weight="bold">AUTO</text>
    <!-- Shield -->
    <path d="M50,16 L69,23 L69,49 Q69,64 50,76 Q31,64 31,49 L31,23 Z" fill="url(#qa-auto-sg)" stroke="#22C55E" stroke-width="1.6"/>
    <!-- Robot face inside shield -->
    <!-- Robot head -->
    <rect x="38" y="30" width="24" height="18" rx="3" fill="#052e16" stroke="#86EFAC" stroke-width="0.9"/>
    <!-- Robot antenna -->
    <line x1="50" y1="30" x2="50" y2="25" stroke="#86EFAC" stroke-width="1"/>
    <circle cx="50" cy="24" r="2" fill="#4ADE80"/>
    <!-- Robot eyes (LED indicators) -->
    <rect x="41" y="34" width="5" height="4" rx="1" fill="#3B82F6" opacity="0.9"/>
    <rect x="54" y="34" width="5" height="4" rx="1" fill="#3B82F6" opacity="0.9"/>
    <!-- Robot mouth (binary display) -->
    <rect x="41" y="41" width="18" height="4" rx="1" fill="#0f172a" stroke="#4ADE80" stroke-width="0.5"/>
    <text x="50" y="44.5" font-family="monospace" font-size="3.2" fill="#4ADE80" text-anchor="middle">01 TEST 10</text>
    <!-- Automation gear symbol overlaid -->
    <circle cx="57" cy="58" r="7" fill="#052e16" stroke="#22C55E" stroke-width="0.8"/>
    <circle cx="57" cy="58" r="3" fill="#0f2d1a" stroke="#4ADE80" stroke-width="0.6"/>
    <!-- Gear teeth mini -->
    <rect x="55.7" y="50" width="2.6" height="2.5" rx="0.4" fill="#4ADE80"/>
    <rect x="55.7" y="63.5" width="2.6" height="2.5" rx="0.4" fill="#4ADE80"/>
    <rect x="49" y="56.7" width="2.5" height="2.6" rx="0.4" fill="#4ADE80"/>
    <rect x="62.5" y="56.7" width="2.5" height="2.6" rx="0.4" fill="#4ADE80"/>
    <!-- Circular arrow for automation -->
    <path d="M40,58 A12,12 0 1,1 47,70" fill="none" stroke="#4ADE80" stroke-width="1.2" stroke-dasharray="2,1"/>
    <polygon points="47,70 42,68 45,74" fill="#4ADE80"/>
    <text x="50" y="88" font-family="monospace" font-size="4" fill="#86EFAC" text-anchor="middle" font-weight="bold">SR-QA-AUTO</text>
  `),

  // SR-QA-MAN: Shield with magnifying glass inside, "MAN" tag, careful eyes
  "SR-QA-MAN": svg(`
    <defs>
      <linearGradient id="qm-sg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#4ADE80"/>
        <stop offset="100%" stop-color="#14532D"/>
      </linearGradient>
    </defs>
    <!-- "MAN" tag upper left -->
    <rect x="13" y="8" width="19" height="9" rx="3" fill="#052e16" stroke="#22C55E" stroke-width="0.9"/>
    <text x="22.5" y="14.5" font-family="monospace" font-size="5" fill="#4ADE80" text-anchor="middle" font-weight="bold">MAN</text>
    <!-- Careful eyes floating above shield -->
    <ellipse cx="43" cy="13" rx="4" ry="3" fill="#052e16" stroke="#86EFAC" stroke-width="0.8"/>
    <circle cx="43" cy="13" r="1.5" fill="#22C55E"/>
    <circle cx="43.8" cy="12.2" r="0.5" fill="#fff" opacity="0.8"/>
    <ellipse cx="57" cy="13" rx="4" ry="3" fill="#052e16" stroke="#86EFAC" stroke-width="0.8"/>
    <circle cx="57" cy="13" r="1.5" fill="#22C55E"/>
    <circle cx="57.8" cy="12.2" r="0.5" fill="#fff" opacity="0.8"/>
    <!-- Shield -->
    <path d="M50,18 L69,25 L69,51 Q69,66 50,78 Q31,66 31,51 L31,25 Z" fill="url(#qm-sg)" stroke="#22C55E" stroke-width="1.6"/>
    <!-- Magnifying glass inside shield -->
    <!-- Lens circle -->
    <circle cx="47" cy="45" r="13" fill="#052e16" stroke="#86EFAC" stroke-width="1.1"/>
    <circle cx="47" cy="45" r="10" fill="none" stroke="#4ADE80" stroke-width="0.6" opacity="0.4"/>
    <!-- Handle -->
    <line x1="56" y1="54" x2="64" y2="63" stroke="#86EFAC" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Lens reflection -->
    <circle cx="43" cy="41" r="3" fill="none" stroke="#fff" stroke-width="0.6" opacity="0.25"/>
    <!-- "INSPECT" text inside lens -->
    <text x="47" y="43" font-family="monospace" font-size="3.5" fill="#86EFAC" text-anchor="middle">TEST</text>
    <text x="47" y="48" font-family="monospace" font-size="3.5" fill="#4ADE80" text-anchor="middle">CHECK</text>
    <text x="50" y="88" font-family="monospace" font-size="4" fill="#86EFAC" text-anchor="middle" font-weight="bold">SR-QA-MAN</text>
  `),

  // QA-ENG: Shield with standard checkmark, clean design
  "QA-ENG": svg(`
    <defs>
      <linearGradient id="qe-sg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#22C55E"/>
        <stop offset="100%" stop-color="#14532D"/>
      </linearGradient>
    </defs>
    <!-- Shield -->
    <path d="M50,16 L68,23 L68,49 Q68,63 50,75 Q32,63 32,49 L32,23 Z" fill="url(#qe-sg)" stroke="#22C55E" stroke-width="1.5"/>
    <!-- Inner shield ring -->
    <path d="M50,22 L63,28 L63,49 Q63,60 50,69 Q37,60 37,49 L37,28 Z" fill="none" stroke="#86EFAC" stroke-width="0.7" opacity="0.4"/>
    <!-- Clean large checkmark inside shield -->
    <polyline points="36,48 46,59 65,36" fill="none" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
    <!-- QA-ENG label -->
    <text x="50" y="85" font-family="monospace" font-size="5" fill="#86EFAC" text-anchor="middle" font-weight="bold">QA-ENG</text>
    <!-- Status dots bottom of shield -->
    <circle cx="44" cy="78" r="2" fill="#22C55E"/>
    <circle cx="50" cy="79.5" r="2" fill="#22C55E"/>
    <circle cx="56" cy="78" r="2" fill="#22C55E"/>
  `),

  // JR-QA: Smaller shield, dotted/incomplete checkmark, pencil in corner
  "JR-QA": svg(`
    <defs>
      <linearGradient id="jq-sg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#4ADE80"/>
        <stop offset="100%" stop-color="#166534"/>
      </linearGradient>
    </defs>
    <!-- Pencil in upper right corner -->
    <!-- Pencil body -->
    <rect x="72" y="10" width="5" height="20" rx="1" fill="#FCD34D" transform="rotate(30, 74.5, 20)"/>
    <!-- Pencil tip -->
    <polygon points="79,24 74,30 77,30" fill="#1e293b" transform="rotate(30, 74.5, 20) translate(0,0)"/>
    <rect x="72" y="10" width="5" height="3" rx="0.5" fill="#9CA3AF" transform="rotate(30, 74.5, 20)"/>
    <!-- Smaller shield (junior/learning) -->
    <path d="M50,22 L65,28 L65,51 Q65,63 50,73 Q35,63 35,51 L35,28 Z" fill="url(#jq-sg)" stroke="#22C55E" stroke-width="1.3" opacity="0.9"/>
    <!-- Inner shield -->
    <path d="M50,27 L60,32 L60,51 Q60,60 50,68 Q40,60 40,51 L40,32 Z" fill="none" stroke="#86EFAC" stroke-width="0.6" opacity="0.35"/>
    <!-- Dotted / incomplete checkmark (learning) -->
    <!-- First leg of checkmark (dotted) -->
    <line x1="38" y1="50" x2="42" y2="54" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="2,2" opacity="0.7"/>
    <line x1="42" y1="54" x2="47" y2="58" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="2,2" opacity="0.8"/>
    <!-- Second leg (partially solid - still learning) -->
    <line x1="47" y1="58" x2="55" y2="46" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="3,2" opacity="0.6"/>
    <line x1="55" y1="46" x2="62" y2="36" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="2,3" opacity="0.4"/>
    <!-- "LEARNING" tag -->
    <rect x="30" y="76" width="40" height="8" rx="3" fill="#052e16" stroke="#22C55E" stroke-width="0.7"/>
    <text x="50" y="81.5" font-family="monospace" font-size="4" fill="#4ADE80" text-anchor="middle">LEARNING</text>
    <text x="50" y="93" font-family="monospace" font-size="4.5" fill="#86EFAC" text-anchor="middle" font-weight="bold">JR-QA</text>
  `),

  // PERF-TEST: Shield with speedometer/gauge inside + red accent for performance
  "PERF-TEST": svg(`
    <defs>
      <linearGradient id="pt-sg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#4ADE80"/>
        <stop offset="100%" stop-color="#14532D"/>
      </linearGradient>
    </defs>
    <!-- Performance speed lines upper right -->
    <line x1="68" y1="12" x2="82" y2="10" stroke="#EF4444" stroke-width="1.2" opacity="0.7"/>
    <line x1="70" y1="16" x2="84" y2="16" stroke="#EF4444" stroke-width="1.4" opacity="0.8"/>
    <line x1="68" y1="20" x2="82" y2="22" stroke="#EF4444" stroke-width="1.2" opacity="0.7"/>
    <!-- Shield -->
    <path d="M50,16 L69,23 L69,50 Q69,65 50,77 Q31,65 31,50 L31,23 Z" fill="url(#pt-sg)" stroke="#22C55E" stroke-width="1.6"/>
    <!-- Speedometer gauge inside shield (replaces checkmark) -->
    <!-- Gauge background arc -->
    <path d="M34,55 A18,18 0 0,1 66,55" fill="none" stroke="#0f2d1a" stroke-width="6" stroke-linecap="round"/>
    <!-- Red zone left -->
    <path d="M34,55 A18,18 0 0,1 41,40" fill="none" stroke="#EF4444" stroke-width="6" stroke-linecap="butt" opacity="0.85"/>
    <!-- Yellow zone center -->
    <path d="M41,40 A18,18 0 0,1 59,40" fill="none" stroke="#F59E0B" stroke-width="6" stroke-linecap="butt" opacity="0.85"/>
    <!-- Green zone right -->
    <path d="M59,40 A18,18 0 0,1 66,55" fill="none" stroke="#22C55E" stroke-width="6" stroke-linecap="butt" opacity="0.85"/>
    <!-- Inner arc cover -->
    <path d="M36,55 A16,16 0 0,1 64,55" fill="none" stroke="#14532D" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
    <!-- Needle pointing to red (high performance stress) -->
    <line x1="50" y1="55" x2="37" y2="43" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/>
    <circle cx="50" cy="55" r="2.8" fill="#FFFFFF"/>
    <!-- Speed ticks -->
    <line x1="34" y1="55" x2="36.5" y2="55" stroke="#EDE9FE" stroke-width="1" opacity="0.8"/>
    <line x1="50" y1="37" x2="50" y2="39.5" stroke="#EDE9FE" stroke-width="1" opacity="0.8"/>
    <line x1="66" y1="55" x2="63.5" y2="55" stroke="#EDE9FE" stroke-width="1" opacity="0.8"/>
    <!-- MAX text at needle tip -->
    <text x="37" y="40" font-family="monospace" font-size="3.5" fill="#EF4444" text-anchor="middle">MAX</text>
    <!-- Label -->
    <text x="50" y="88" font-family="monospace" font-size="4.5" fill="#86EFAC" text-anchor="middle" font-weight="bold">PERF-TEST</text>
  `),

  // A11Y-TEST: Shield with universal accessibility symbol inside, orange accent
  "A11Y-TEST": svg(`
    <defs>
      <linearGradient id="at-sg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#4ADE80"/>
        <stop offset="100%" stop-color="#14532D"/>
      </linearGradient>
    </defs>
    <!-- Shield -->
    <path d="M50,15 L70,23 L70,51 Q70,67 50,79 Q30,67 30,51 L30,23 Z" fill="url(#at-sg)" stroke="#22C55E" stroke-width="1.7"/>
    <!-- Orange accent ring around accessibility symbol -->
    <circle cx="50" cy="50" r="20" fill="#052e16" stroke="#F97316" stroke-width="1.5" opacity="0.9"/>
    <!-- Universal accessibility icon (person in circle with extending arms) -->
    <!-- Person head -->
    <circle cx="50" cy="35" r="4" fill="#F97316"/>
    <!-- Person body -->
    <line x1="50" y1="39" x2="50" y2="55" stroke="#F97316" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Extended arms (universal access style) -->
    <line x1="50" y1="43" x2="35" y2="39" stroke="#F97316" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="50" y1="43" x2="65" y2="39" stroke="#F97316" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Legs -->
    <line x1="50" y1="55" x2="41" y2="65" stroke="#F97316" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="50" y1="55" x2="59" y2="65" stroke="#F97316" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Outer accessibility circle ring -->
    <circle cx="50" cy="50" r="18" fill="none" stroke="#F97316" stroke-width="1.2" opacity="0.6"/>
    <!-- A11Y tag -->
    <rect x="27" y="82" width="46" height="9" rx="3" fill="#052e16" stroke="#F97316" stroke-width="0.9"/>
    <text x="50" y="88.5" font-family="monospace" font-size="5" fill="#F97316" text-anchor="middle" font-weight="bold">A11Y-TEST</text>
  `),

};

for (const [code, content] of Object.entries(avatars)) {
  writeFileSync(join(OUT, `${code}.svg`), content);
}
console.log(`Batch 4: ${Object.keys(avatars).length} platform/QA avatars written to ${OUT}`);
console.log("Agents:", Object.keys(avatars).join(", "));
