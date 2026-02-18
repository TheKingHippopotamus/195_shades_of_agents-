/**
 * NEXUS AI — Pokemon-Style Avatar Generator v2
 * 20 archetypes, each a completely unique visual concept and shape.
 * CEO = Crown-hex royalty. Security = Dark hooded shadow. Neural = Node cluster. Etc.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface Agent { code: string; number: number; dept: number; tier: number; }

function hash(s: string, seed = 0): number {
  let h = seed + 0x12345678;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x9e3779b9); h ^= h >>> 16; }
  return Math.abs(h);
}
function hi(code: string, seed: number, max: number, min = 0): number { return (hash(code, seed) % (max - min)) + min; }
function hf(code: string, seed: number): number { return (hash(code, seed) % 1000) / 1000; }
function pick<T>(arr: T[], code: string, seed: number): T { return arr[hash(code, seed) % arr.length]; }
function dim(hex: string, a = 0.3): string { const n = parseInt(hex.slice(1),16); return `rgba(${(n>>16)&255},${(n>>8)&255},${n&255},${a})`; }

const DC: Record<number,string> = {
  1:"#FFD700",2:"#00D9FF",3:"#7C3AED",4:"#FF6B35",5:"#FF2D78",
  6:"#00FF88",7:"#22C55E",8:"#EF4444",9:"#F97316",10:"#A855F7",
  11:"#06B6D4",12:"#EC4899",13:"#84CC16",14:"#EAB308",15:"#64748B",
  16:"#8B5CF6",17:"#14B8A6",18:"#6366F1",19:"#FF4444",20:"#D97706",
};
const DK = "#030108";

function wrap(body: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
<defs><radialGradient id="bg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#1a1f3a"/><stop offset="100%" stop-color="${DK}"/></radialGradient></defs>
<rect width="100" height="100" rx="18" fill="url(#bg)"/>
${body}</svg>`;
}

// ── CROWN: Executive Dept 01 ── Hex head, spike crown, gem eyes
function crown(a: Agent): string {
  const c = DC[1]; const gem = pick(["#FF2D78","#00D9FF","#7C3AED","#FF6B35"],a.code,7);
  const spikes = a.tier<=1?5:a.tier<=3?4:3; const crownH = 18+hi(a.code,1,10);
  const sw = 60/(spikes*2+1); let sp="";
  for(let i=0;i<spikes;i++){const x=20+sw+i*(sw*2+4);const ty=30-crownH+(i%2?8:0);sp+=`<polygon points="${x},30 ${x+sw},30 ${x+sw/2},${ty}" fill="${c}" opacity="0.9"/>`+(i%2===0?`<circle cx="${x+sw/2}" cy="${ty-2}" r="2.5" fill="${gem}"/>`:"");}
  return wrap(`${sp}
<path d="M50,30 L68,40 L68,62 L50,72 L32,62 L32,40 Z" fill="#1E2440" stroke="${c}" stroke-width="2"/>
<rect x="32" y="30" width="36" height="6" rx="1" fill="${c}" opacity="0.7"/>
<polygon points="50,28 53,32 50,36 47,32" fill="${gem}"/>
<ellipse cx="42" cy="52" rx="4.5" ry="5" fill="${DK}"/><ellipse cx="58" cy="52" rx="4.5" ry="5" fill="${DK}"/>
<circle cx="42" cy="52" r="2.5" fill="${gem}"/><circle cx="58" cy="52" r="2.5" fill="${gem}"/>
<circle cx="43" cy="51" r="1" fill="white" opacity="0.8"/><circle cx="59" cy="51" r="1" fill="white" opacity="0.8"/>
<path d="M43,60 Q50,57 57,60" stroke="${c}" stroke-width="1.5" fill="none"/>
<path d="M32,70 L25,85 L50,80 L75,85 L68,70 Z" fill="#1E2440" stroke="${c}" stroke-width="1"/>
<ellipse cx="50" cy="95" rx="25" ry="4" fill="${dim(c,0.2)}"/>`);
}

// ── CIRCUIT: Engineering Dept 02 ── Rectangle head, PCB traces, LED eyes
function circuit(a: Agent): string {
  const c = DC[2]; const as_ = hi(a.code,3,3); const es = hi(a.code,4,3);
  const ant = as_===0?`<line x1="50" y1="25" x2="50" y2="12" stroke="${c}" stroke-width="1.5"/><circle cx="50" cy="11" r="2" fill="${c}"/>`:as_===1?`<path d="M50,25 L50,15 L44,10 M50,15 L56,10" stroke="${c}" stroke-width="1.5" fill="none"/>`:
    `<line x1="50" y1="25" x2="50" y2="15" stroke="${c}" stroke-width="1.5"/><ellipse cx="50" cy="13" rx="5" ry="3" fill="none" stroke="${c}" stroke-width="1"/>`;
  const eyes = es===0?`<rect x="35" y="42" width="10" height="7" rx="1" fill="${c}" opacity="0.9"/><rect x="55" y="42" width="10" height="7" rx="1" fill="${c}" opacity="0.9"/>`:
    es===1?`<circle cx="42" cy="46" r="5" fill="${DK}" stroke="${c}" stroke-width="1.5"/><circle cx="58" cy="46" r="5" fill="${DK}" stroke="${c}" stroke-width="1.5"/><circle cx="42" cy="46" r="2" fill="${c}"/><circle cx="58" cy="46" r="2" fill="${c}"/>`:
    `<polygon points="42,41 47,46 42,51 37,46" fill="${c}" opacity="0.9"/><polygon points="58,41 63,46 58,51 53,46" fill="${c}" opacity="0.9"/>`;
  let traces=""; for(let i=0;i<4;i++){const y=55+i*5;const sx=22+hi(a.code,i*10,5);traces+=`<path d="M${sx},${y} H${sx+8} V${y-3} H${sx+16}" stroke="${c}" stroke-width="0.8" fill="none" opacity="0.5"/><circle cx="${sx+16}" cy="${y-3}" r="1.2" fill="${c}" opacity="0.7"/>`;}
  return wrap(`${ant}
<rect x="22" y="25" width="56" height="52" rx="4" fill="#0F172A" stroke="${c}" stroke-width="2"/>
<rect x="26" y="29" width="48" height="44" rx="2" fill="#1E293B" stroke="${c}" stroke-width="0.5" opacity="0.5"/>
${eyes}
<rect x="32" y="57" width="36" height="8" rx="2" fill="${DK}" stroke="${c}" stroke-width="0.5"/>
<text x="50" y="63.5" text-anchor="middle" fill="${c}" font-size="5" font-family="monospace">10110100</text>
${traces}
<rect x="18" y="38" width="4" height="3" rx="1" fill="${c}" opacity="0.6"/>
<rect x="78" y="38" width="4" height="3" rx="1" fill="${c}" opacity="0.6"/>`);
}

// ── CLOUD: Platform/Infra Dept 03 ── Cloud body + server rack legs
function cloud(a: Agent): string {
  const c = DC[3]; const bn = 2+hi(a.code,1,3); let beams="";
  for(let i=0;i<bn;i++){const x=35+i*(30/(bn-1||1));const bx=x+hi(a.code,i+10,10)-5;beams+=`<line x1="${x}" y1="22" x2="${bx}" y2="10" stroke="${c}" stroke-width="1.5" opacity="${0.5+i*0.1}"/><circle cx="${bx}" cy="10" r="1.5" fill="${c}"/>`;}
  return wrap(`${beams}
<ellipse cx="50" cy="40" rx="28" ry="18" fill="#1E293B" stroke="${c}" stroke-width="1.5"/>
<ellipse cx="36" cy="45" rx="14" ry="10" fill="#1E293B" stroke="${c}" stroke-width="1"/>
<ellipse cx="64" cy="45" rx="14" ry="10" fill="#1E293B" stroke="${c}" stroke-width="1"/>
<circle cx="44" cy="40" r="3.5" fill="${c}" opacity="0.8"/><circle cx="56" cy="40" r="3.5" fill="${c}" opacity="0.8"/>
<circle cx="44" cy="40" r="1.5" fill="${DK}"/><circle cx="56" cy="40" r="1.5" fill="${DK}"/>
<path d="M44,48 Q50,52 56,48" stroke="${c}" stroke-width="1.5" fill="none"/>
<rect x="32" y="58" width="36" height="22" rx="2" fill="#0F172A" stroke="${c}" stroke-width="1"/>
<line x1="32" y1="64" x2="68" y2="64" stroke="${c}" stroke-width="0.5" opacity="0.5"/>
<line x1="32" y1="70" x2="68" y2="70" stroke="${c}" stroke-width="0.5" opacity="0.5"/>
<line x1="32" y1="76" x2="68" y2="76" stroke="${c}" stroke-width="0.5" opacity="0.5"/>
<circle cx="62" cy="61.5" r="1.5" fill="#22C55E"/>
<circle cx="62" cy="67.5" r="1.5" fill="${c}"/>
<circle cx="62" cy="73.5" r="1.5" fill="#EF4444"/>`);
}

// ── PRISM: Product Dept 04 ── Diamond gem with refraction rays
function prism(a: Agent): string {
  const c = DC[4]; const rc = hi(a.code,2,4)+5;
  const rc_colors = [c,"#FF2D78","#00D9FF","#7C3AED"]; let rays="";
  for(let i=0;i<rc;i++){const ang=(i/rc)*Math.PI*2;const r1=30;const r2=45+hi(a.code,i+20,8);
    rays+=`<line x1="${(50+r1*Math.cos(ang)).toFixed(1)}" y1="${(45+r1*Math.sin(ang)).toFixed(1)}" x2="${(50+r2*Math.cos(ang)).toFixed(1)}" y2="${(45+r2*Math.sin(ang)).toFixed(1)}" stroke="${pick(rc_colors,a.code,i)}" stroke-width="1" opacity="0.4"/>`;}
  return wrap(`${rays}
<path d="M50,15 L72,45 L50,72 L28,45 Z" fill="${dim(c,0.15)}" stroke="${c}" stroke-width="2"/>
<path d="M50,22 L66,45 L50,65 L34,45 Z" fill="${dim(c,0.25)}" stroke="${c}" stroke-width="0.5" opacity="0.5"/>
<circle cx="50" cy="45" r="8" fill="${dim(c,0.5)}"/>
<circle cx="50" cy="45" r="4" fill="${c}" opacity="0.9"/>
<circle cx="52" cy="43" r="1.5" fill="white" opacity="0.8"/>
<line x1="44" y1="22" x2="50" y2="15" stroke="white" stroke-width="1.5" opacity="0.4"/>
<line x1="50" y1="73" x2="50" y2="85" stroke="${c}" stroke-width="1" opacity="0.6"/>
<polygon points="50,88 56,82 50,79 44,82" fill="${c}" opacity="0.7"/>`);
}

// ── PALETTE: Design Dept 05 ── Organic blob + paint brush tail + splatters
function palette(a: Agent): string {
  const c = DC[5]; const bw = hf(a.code,3)*6-3;
  const scs = ["#FF2D78","#00D9FF","#00FF88","#FFD700","#7C3AED","#FF6B35"]; let sp="";
  for(let i=0;i<5;i++){const sc=pick(scs,a.code,i+5);sp+=`<circle cx="${15+hi(a.code,i*7+20,70)}" cy="${10+hi(a.code,i*7+21,75)}" r="${2+hi(a.code,i*7+22,4)}" fill="${sc}" opacity="0.7"/>`;}
  return wrap(`${sp}
<path d="M50,20 C${60+bw},18 72,28 74,40 C76,52 70,65 58,70 C46,75 30,70 26,58 C22,46 28,30 ${38-bw},22 C42,19 46,20 50,20 Z" fill="#1E293B" stroke="${c}" stroke-width="2"/>
<path d="M58,70 C65,78 68,85 65,90" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round"/>
<ellipse cx="64" cy="91" rx="4" ry="2" fill="${c}" opacity="0.8"/>
<circle cx="42" cy="44" r="7" fill="white"/><circle cx="58" cy="44" r="7" fill="white"/>
<circle cx="42" cy="44" r="4" fill="${c}"/><circle cx="58" cy="44" r="4" fill="${c}"/>
<circle cx="44" cy="42" r="1.5" fill="white"/><circle cx="60" cy="42" r="1.5" fill="white"/>
<path d="M36,37 Q42,33 48,37" stroke="${c}" stroke-width="1.5" fill="none"/>
<path d="M52,37 Q58,33 64,37" stroke="${c}" stroke-width="1.5" fill="none"/>
<path d="M40,57 Q50,64 60,57" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/>`);
}

// ── NEURAL: Data/AI Dept 06 ── Pure node cluster — no face
function neural(a: Agent): string {
  const c = DC[6];
  const ns: [number,number,number][] = [[50,30,6],[50+hi(a.code,1,20)-10,50,4],[50-hi(a.code,2,15)+5,48,4],[50+hi(a.code,3,25)-12,68,3.5],[50-hi(a.code,4,18)+9,68,3.5],[50+hi(a.code,5,30)-15,35,3],[50-hi(a.code,6,25)+12,38,3],[50+hi(a.code,7,20)-10,82,3],[50,18,4],[50+20,55,2.5],[50-20,55,2.5]];
  const edges=[[0,1],[0,2],[0,5],[0,6],[0,8],[1,3],[2,4],[1,4],[2,3],[3,7],[5,6],[1,9],[2,10]];
  let lines="",nodes_="";
  for(const [ai,bi] of edges){const [x1,y1]=ns[ai];const [x2,y2]=ns[bi];lines+=`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="1" opacity="0.4"/>`;}
  for(const [i,[nx,ny,nr]] of ns.entries()){if(i===0)nodes_+=`<circle cx="${nx}" cy="${ny}" r="${nr*2.2}" fill="${c}" opacity="0.1"/>`;nodes_+=`<circle cx="${nx}" cy="${ny}" r="${nr}" fill="${DK}" stroke="${c}" stroke-width="1.5"/>`;if(i===0)nodes_+=`<circle cx="${nx}" cy="${ny}" r="${nr*0.5}" fill="${c}"/>`;}
  return wrap(`${lines}${nodes_}<text x="50" y="97" text-anchor="middle" fill="${c}" font-size="5" font-family="monospace" opacity="0.5">NEURAL</text>`);
}

// ── SHIELD: QA Dept 07 ── Shield + checkmark + bug antenna
function shield(a: Agent): string {
  const c = DC[7]; const ant = a.tier<=4;
  return wrap(`<ellipse cx="50" cy="94" rx="22" ry="4" fill="${dim(c,0.2)}"/>
${ant?`<line x1="43" y1="22" x2="38" y2="12" stroke="${c}" stroke-width="1.5"/><line x1="57" y1="22" x2="62" y2="12" stroke="${c}" stroke-width="1.5"/><circle cx="38" cy="11" r="2.5" fill="${c}"/><circle cx="62" cy="11" r="2.5" fill="${c}"/>`:``}
<path d="M50,18 L75,28 L75,55 Q75,78 50,88 Q25,78 25,55 L25,28 Z" fill="#0F2A18" stroke="${c}" stroke-width="2"/>
<path d="M50,24 L69,32 L69,55 Q69,73 50,82 Q31,73 31,55 L31,32 Z" fill="#1a3a20" stroke="${c}" stroke-width="0.5" opacity="0.5"/>
<path d="M36,53 L45,63 L66,40" stroke="${c}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="50" cy="34" r="5" fill="${DK}" stroke="${c}" stroke-width="1"/>
<text x="50" y="37" text-anchor="middle" fill="${c}" font-size="6" font-family="monospace">QA</text>`);
}

// ── SHADOW: Security Dept 08 ── Dark hooded figure + glowing visor slit
function shadow(a: Agent): string {
  const c = DC[8]; const tools:Record<string,string> = {
    lock:`<path d="M62,68 L62,72 L68,72 L68,68 L65,65 Z" fill="${c}" opacity="0.8"/><rect x="62" y="72" width="6" height="5" rx="1" fill="${c}" opacity="0.8"/>`,
    key:`<circle cx="65" cy="68" r="3" fill="none" stroke="${c}" stroke-width="1.5"/><line x1="68" y1="68" x2="75" y2="68" stroke="${c}" stroke-width="1.5"/><line x1="73" y1="68" x2="73" y2="71" stroke="${c}" stroke-width="1.5"/>`,
    skull:`<circle cx="65" cy="68" r="4" fill="${DK}" stroke="${c}" stroke-width="1"/><circle cx="63" cy="67" r="1" fill="${c}"/><circle cx="67" cy="67" r="1" fill="${c}"/>`,
    eye:`<ellipse cx="65" cy="68" rx="5" ry="3" fill="${DK}" stroke="${c}" stroke-width="1"/><ellipse cx="65" cy="68" rx="2" ry="2" fill="${c}"/>`,
  };
  return wrap(`<circle cx="50" cy="50" r="42" fill="${dim(c,0.05)}"/>
<path d="M50,10 L70,25 L75,60 L68,85 L50,90 L32,85 L25,60 L30,25 Z" fill="#150010" stroke="${c}" stroke-width="1.5"/>
<ellipse cx="50" cy="30" rx="22" ry="16" fill="#0a0008" opacity="0.8"/>
<rect x="34" y="35" width="32" height="7" rx="3" fill="${DK}" stroke="${c}" stroke-width="1"/>
<rect x="36" y="36.5" width="28" height="4" rx="2" fill="${c}" opacity="0.7"/>
<circle cx="43" cy="38" r="3" fill="${c}" opacity="0.5"/><circle cx="57" cy="38" r="3" fill="${c}" opacity="0.5"/>
<path d="M38,55 Q50,60 62,55" stroke="${c}" stroke-width="0.5" opacity="0.3"/>
${tools[pick(["lock","key","skull","eye"],a.code,5)]}
<ellipse cx="50" cy="93" rx="20" ry="3" fill="${dim(c,0.3)}"/>`);
}

// ── CATALYST: Sales Dept 09 ── Magnet + spark energy
function catalyst(a: Agent): string {
  const c = DC[9]; const sc = 4+hi(a.code,1,5); let sparks="";
  for(let i=0;i<sc;i++){const ang=(i/sc)*Math.PI*2-Math.PI/4;const r=38+hi(a.code,i+5,10);const x=50+r*Math.cos(ang);const y=48+r*Math.sin(ang);sparks+=`<line x1="${(50+25*Math.cos(ang)).toFixed(1)}" y1="${(48+25*Math.sin(ang)).toFixed(1)}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="${c}" stroke-width="1.5" opacity="0.6"/><polygon points="${x},${y} ${x+3},${y-3} ${x+1},${y+2}" fill="${c}" opacity="0.7"/>`;}
  return wrap(`<circle cx="50" cy="48" r="32" fill="${dim(c,0.08)}" stroke="${c}" stroke-width="0.5" opacity="0.3"/>
${sparks}
<path d="M34,28 L34,55 Q34,72 50,72 Q66,72 66,55 L66,28" stroke="${c}" stroke-width="5" fill="none" stroke-linecap="round"/>
<rect x="28" y="24" width="10" height="8" rx="2" fill="${c}"/><rect x="62" y="24" width="10" height="8" rx="2" fill="${c}"/>
<text x="33" y="30" text-anchor="middle" fill="${DK}" font-size="5" font-weight="bold">N</text>
<text x="67" y="30" text-anchor="middle" fill="${DK}" font-size="5" font-weight="bold">S</text>
<circle cx="50" cy="50" r="14" fill="#1a0f00" stroke="${c}" stroke-width="1.5"/>
<circle cx="44" cy="48" r="3" fill="${c}" opacity="0.9"/><circle cx="56" cy="48" r="3" fill="${c}" opacity="0.9"/>
<path d="M43,55 Q50,60 57,55" stroke="${c}" stroke-width="1.5" fill="none"/>
<text x="50" y="72" text-anchor="middle" fill="${c}" font-size="8" opacity="0.4">$</text>`);
}

// ── SIGNAL: Marketing Dept 10 ── Megaphone + broadcast waves
function signal(a: Agent): string {
  const c = DC[10]; const wc = 3+hi(a.code,1,3); let waves="";
  for(let i=0;i<wc;i++)waves+=`<circle cx="35" cy="52" r="${20+i*10}" fill="none" stroke="${c}" stroke-width="${1.5-i*0.3}" opacity="${0.6-i*0.15}" stroke-dasharray="${i*2} ${i+1}"/>`;
  return wrap(`${waves}
<path d="M38,35 L65,22 L65,70 L38,58 Z" fill="#1a0a1f" stroke="${c}" stroke-width="2"/>
<ellipse cx="65" cy="46" rx="5" ry="24" fill="#1a0a1f" stroke="${c}" stroke-width="1.5"/>
<rect x="28" y="40" width="10" height="18" rx="3" fill="#1a0a1f" stroke="${c}" stroke-width="1.5"/>
<circle cx="52" cy="46" r="5" fill="${DK}" stroke="${c}" stroke-width="1"/>
<circle cx="52" cy="46" r="2.5" fill="${c}"/><circle cx="53.5" cy="44.5" r="1" fill="white" opacity="0.7"/>
<line x1="70" y1="30" x2="80" y2="20" stroke="${c}" stroke-width="1.5" opacity="0.5"/>
<line x1="72" y1="46" x2="85" y2="46" stroke="${c}" stroke-width="1.5" opacity="0.5"/>
<line x1="70" y1="62" x2="80" y2="72" stroke="${c}" stroke-width="1.5" opacity="0.5"/>`);
}

// ── BEACON: Customer Success Dept 11 ── Lighthouse + pulse rings + open arms
function beacon(a: Agent): string {
  const c = DC[11];
  return wrap(`<circle cx="50" cy="30" r="15" fill="none" stroke="${c}" stroke-width="1" opacity="0.3"/>
<circle cx="50" cy="30" r="22" fill="none" stroke="${c}" stroke-width="0.8" opacity="0.2"/>
<rect x="42" y="42" width="16" height="38" rx="2" fill="#0f1a2a" stroke="${c}" stroke-width="1.5"/>
<rect x="42" y="50" width="16" height="5" fill="${c}" opacity="0.3"/>
<rect x="42" y="62" width="16" height="5" fill="${c}" opacity="0.3"/>
<rect x="42" y="74" width="16" height="5" fill="${c}" opacity="0.3"/>
<rect x="38" y="36" width="24" height="8" rx="2" fill="#1a2a3a" stroke="${c}" stroke-width="1.5"/>
<circle cx="50" cy="30" r="10" fill="${dim(c,0.2)}" stroke="${c}" stroke-width="2"/>
<circle cx="50" cy="30" r="5" fill="${c}" opacity="0.9"/>
<line x1="50" y1="20" x2="40" y2="8" stroke="${c}" stroke-width="2" opacity="0.5"/>
<line x1="50" y1="20" x2="60" y2="8" stroke="${c}" stroke-width="2" opacity="0.5"/>
<rect x="34" y="80" width="32" height="5" rx="2" fill="#1a2a3a" stroke="${c}" stroke-width="1"/>
<path d="M34,65 Q22,60 18,50" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M66,65 Q78,60 82,50" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/>
<circle cx="18" cy="50" r="3" fill="${c}" opacity="0.7"/><circle cx="82" cy="50" r="3" fill="${c}" opacity="0.7"/>`);
}

// ── CRYSTAL_PEOPLE: HR Dept 12 ── Geometric humanoid + heart core
function crystal(a: Agent): string {
  const c = DC[12]; const nps:[[number,number]][] = [[50,18],[50,35],[35,50],[65,50],[42,68],[58,68],[50,82]] as any;
  const edges=[[0,1],[1,2],[1,3],[2,4],[3,5],[4,6],[5,6],[2,3]]; let co="",nd="";
  for(const [ai,bi] of edges){const [x1,y1]=nps[ai];const [x2,y2]=nps[bi];co+=`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="1.5" opacity="0.6"/>`;}
  for(const [i,[nx,ny]] of nps.entries()){const r=i===0?8:i<=2?6:5;nd+=`<circle cx="${nx}" cy="${ny}" r="${r}" fill="#1a0a1a" stroke="${c}" stroke-width="1.5"/>`;}
  return wrap(`${co}${nd}<path d="M46,33 Q50,29 54,33 Q58,37 50,43 Q42,37 46,33 Z" fill="${c}" opacity="0.8"/>
<circle cx="46" cy="16" r="2" fill="${c}" opacity="0.7"/><circle cx="54" cy="16" r="2" fill="${c}" opacity="0.7"/>
<path d="M46,20 Q50,23 54,20" stroke="${c}" stroke-width="1" fill="none"/>`);
}

// ── VAULT: Finance Dept 13 ── Circular vault door + combination lock
function vault(a: Agent): string {
  const c = DC[13]; const nc = 8+hi(a.code,1,8); let notches="";
  for(let i=0;i<nc;i++){const ang=(i/nc)*Math.PI*2;notches+=`<line x1="${(50+36*Math.cos(ang)).toFixed(1)}" y1="${(50+36*Math.sin(ang)).toFixed(1)}" x2="${(50+40*Math.cos(ang)).toFixed(1)}" y2="${(50+40*Math.sin(ang)).toFixed(1)}" stroke="${c}" stroke-width="1.5"/>`;}
  const bars=[30,45,55,40,60]; let bc="";
  for(const [i,bh] of bars.entries())bc+=`<rect x="${34+i*7}" y="${58-bh*0.25}" width="5" height="${bh*0.25}" fill="${c}" opacity="${0.5+i*0.1}"/>`;
  return wrap(`<circle cx="50" cy="50" r="42" fill="#0a0f0a" stroke="${c}" stroke-width="2.5"/>
${notches}
<circle cx="50" cy="50" r="35" fill="#0f1a0f" stroke="${c}" stroke-width="2"/>
<circle cx="50" cy="50" r="18" fill="#0a0f0a" stroke="${c}" stroke-width="1.5"/>
<circle cx="50" cy="32" r="2" fill="${c}"/><circle cx="68" cy="50" r="2" fill="${c}"/>
<circle cx="50" cy="68" r="2" fill="${c}"/><circle cx="32" cy="50" r="2" fill="${c}"/>
<line x1="50" y1="50" x2="50" y2="35" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
${bc}<circle cx="50" cy="50" r="5" fill="${DK}" stroke="${c}" stroke-width="2"/>
<circle cx="50" cy="18" r="3" fill="${c}" opacity="0.6"/><circle cx="82" cy="50" r="3" fill="${c}" opacity="0.6"/>
<circle cx="50" cy="82" r="3" fill="${c}" opacity="0.6"/><circle cx="18" cy="50" r="3" fill="${c}" opacity="0.6"/>`);
}

// ── SCALE: Legal Dept 14 ── Balance scale + open book
function scale(a: Agent): string {
  const c = DC[14]; const tilt = a.tier<=2?0:(hi(a.code,1,2)===0?-3:3);
  return wrap(`<line x1="50" y1="15" x2="50" y2="48" stroke="${c}" stroke-width="2"/>
<line x1="22" y1="38" x2="78" y2="38" stroke="${c}" stroke-width="1.5" transform="rotate(${tilt},50,38)"/>
<line x1="22" y1="${38+tilt}" x2="22" y2="62" stroke="${c}" stroke-width="1" opacity="0.7"/>
<line x1="78" y1="${38-tilt}" x2="78" y2="62" stroke="${c}" stroke-width="1" opacity="0.7"/>
<path d="M12,${62+tilt} Q22,${68+tilt} 32,${62+tilt}" fill="none" stroke="${c}" stroke-width="2"/>
<path d="M68,${62-tilt} Q78,${68-tilt} 88,${62-tilt}" fill="none" stroke="${c}" stroke-width="2"/>
<circle cx="50" cy="15" r="4" fill="${DK}" stroke="${c}" stroke-width="1.5"/>
<rect x="34" y="78" width="32" height="16" rx="2" fill="#1a1500" stroke="${c}" stroke-width="1.5"/>
<line x1="50" y1="78" x2="50" y2="94" stroke="${c}" stroke-width="0.5" opacity="0.5"/>
<line x1="37" y1="83" x2="48" y2="83" stroke="${c}" stroke-width="0.5" opacity="0.5"/>
<line x1="37" y1="87" x2="48" y2="87" stroke="${c}" stroke-width="0.5" opacity="0.5"/>
<line x1="52" y1="83" x2="63" y2="83" stroke="${c}" stroke-width="0.5" opacity="0.5"/>
<rect x="44" y="48" width="12" height="32" fill="#1a1500" stroke="${c}" stroke-width="1"/>`);
}

// ── SERVER_MIND: IT Ops Dept 15 ── Server rack with face
function serverMind(a: Agent): string {
  const c = DC[15]; const leds=["#22C55E","#EF4444","#F97316",c,"#22C55E"]; let rack="";
  for(let i=0;i<5;i++){const y=28+i*13;rack+=`<rect x="22" y="${y}" width="56" height="10" rx="1" fill="#0f1520" stroke="${c}" stroke-width="0.8"/><circle cx="70" cy="${y+5}" r="2" fill="${leds[i]}"/>`;for(let j=0;j<3;j++)rack+=`<rect x="${26+j*8}" y="${y+3}" width="5" height="4" rx="1" fill="${DK}" stroke="${c}" stroke-width="0.5" opacity="0.7"/>`;}
  return wrap(`<rect x="18" y="22" width="64" height="68" rx="4" fill="#0a0f1a" stroke="${c}" stroke-width="2"/>
${rack}
<circle cx="37" cy="33" r="4" fill="${DK}" stroke="${c}" stroke-width="1.5"/><circle cx="63" cy="33" r="4" fill="${DK}" stroke="${c}" stroke-width="1.5"/>
<circle cx="37" cy="33" r="2" fill="${c}"/><circle cx="63" cy="33" r="2" fill="${c}"/>
<rect x="28" y="54" width="44" height="5" rx="2" fill="${DK}" stroke="${c}" stroke-width="0.8"/>
<rect x="29" y="54.5" width="${15+hi(a.code,2,25)}" height="4" rx="1.5" fill="${c}" opacity="0.8"/>
<rect x="14" y="25" width="4" height="62" rx="2" fill="#0f1520" stroke="${c}" stroke-width="1"/>
<rect x="82" y="25" width="4" height="62" rx="2" fill="#0f1520" stroke="${c}" stroke-width="1"/>`);
}

// ── BROADCAST: DevRel Dept 16 ── Satellite dish + globe + code
function broadcast(a: Agent): string {
  const c = DC[16]; const cl = pick(["fn dev()","// ship","> build","npm run"],a.code,1);
  return wrap(`<circle cx="50" cy="60" r="28" fill="#0a0f1f" stroke="${c}" stroke-width="1.5"/>
<ellipse cx="50" cy="60" rx="15" ry="28" fill="none" stroke="${c}" stroke-width="0.5" opacity="0.4"/>
<line x1="22" y1="60" x2="78" y2="60" stroke="${c}" stroke-width="0.5" opacity="0.4"/>
<path d="M22,48 Q50,44 78,48" stroke="${c}" stroke-width="0.5" opacity="0.4" fill="none"/>
<path d="M30,20 Q50,10 70,20 Q60,35 50,38 Q40,35 30,20 Z" fill="#1a1530" stroke="${c}" stroke-width="2"/>
<line x1="50" y1="38" x2="50" y2="50" stroke="${c}" stroke-width="1.5"/>
<path d="M50,15 Q40,8 30,12" stroke="${c}" stroke-width="1.5" fill="none" opacity="0.5"/>
<path d="M50,15 Q60,8 70,12" stroke="${c}" stroke-width="1.5" fill="none" opacity="0.5"/>
<rect x="34" y="50" width="32" height="20" rx="3" fill="#0d1230" stroke="${c}" stroke-width="1"/>
<text x="50" y="58" text-anchor="middle" fill="${c}" font-size="5" font-family="monospace">${cl}</text>
<circle cx="28" cy="52" r="3" fill="${c}" opacity="0.7"/>
<circle cx="72" cy="52" r="3" fill="${c}" opacity="0.7"/>
<circle cx="50" cy="85" r="3" fill="${c}" opacity="0.7"/>`);
}

// ── TIMELINE: Program Mgmt Dept 17 ── Gantt chart + clock
function timeline(a: Agent): string {
  const c = DC[17]; const ms = 3+hi(a.code,1,3); let gantt="",dms="";
  for(let i=0;i<4;i++)gantt+=`<rect x="${28+hi(a.code,i+3,10)}" y="${35+i*10}" width="${20+hi(a.code,i+7,25)}" height="6" rx="2" fill="${c}" opacity="${0.4+i*0.1}"/>`;
  for(let i=0;i<ms;i++){const dx=30+i*(40/(ms-1||1));dms+=`<polygon points="${dx},75 ${dx+5},80 ${dx},85 ${dx-5},80" fill="${c}" opacity="0.8"/>`;}
  return wrap(`<circle cx="50" cy="22" r="14" fill="#0f1a1a" stroke="${c}" stroke-width="1.5"/>
<circle cx="50" cy="22" r="1.5" fill="${c}"/>
<line x1="50" y1="22" x2="50" y2="12" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/>
<line x1="50" y1="22" x2="58" y2="22" stroke="${c}" stroke-width="1" stroke-linecap="round"/>
<rect x="20" y="30" width="60" height="48" rx="2" fill="#0a1520" stroke="${c}" stroke-width="1"/>
<line x1="20" y1="40" x2="80" y2="40" stroke="${c}" stroke-width="0.3" opacity="0.3"/>
<line x1="20" y1="50" x2="80" y2="50" stroke="${c}" stroke-width="0.3" opacity="0.3"/>
<line x1="20" y1="60" x2="80" y2="60" stroke="${c}" stroke-width="0.3" opacity="0.3"/>
${gantt}
<line x1="${35+hi(a.code,8,20)}" y1="30" x2="${35+hi(a.code,8,20)}" y2="78" stroke="#EF4444" stroke-width="0.8" opacity="0.7"/>
${dms}`);
}

// ── GATE: Governance Dept 18 ── Hexagonal portal + approval seal
function gate(a: Agent): string {
  const c = DC[18]; let hl="";
  for(let i=0;i<6;i++){const r=15+i*4;const pts=Array.from({length:6},(_,j)=>{const ang=j*Math.PI/3-Math.PI/6;return `${(50+r*Math.cos(ang)).toFixed(1)},${(50+r*Math.sin(ang)).toFixed(1)}`;}).join(' ');hl+=`<polygon points="${pts}" fill="none" stroke="${c}" stroke-width="0.5" opacity="${0.2+i*0.05}"/>`;}
  return wrap(`<polygon points="50,8 84,27 84,73 50,92 16,73 16,27" fill="#0a0f20" stroke="${c}" stroke-width="2.5"/>
${hl}
<line x1="38" y1="28" x2="38" y2="72" stroke="${c}" stroke-width="2" opacity="0.7"/>
<line x1="50" y1="25" x2="50" y2="75" stroke="${c}" stroke-width="2" opacity="0.7"/>
<line x1="62" y1="28" x2="62" y2="72" stroke="${c}" stroke-width="2" opacity="0.7"/>
<rect x="30" y="44" width="40" height="5" rx="1" fill="${DK}" stroke="${c}" stroke-width="1.5"/>
<circle cx="50" cy="46" r="8" fill="#0a0f20" stroke="${c}" stroke-width="2"/>
<path d="M44,46 L48,51 L57,40" stroke="${c}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<circle cx="50" cy="10" r="3" fill="${c}"/><circle cx="50" cy="90" r="3" fill="${c}"/>`);
}

// ── ORACLE: Special Agents Dept 19 ── Cosmic orbiting entity
function oracle(a: Agent): string {
  const c = DC[19];
  if (a.code === "NEXUS-ORCHESTRATOR") {
    let mn="";
    const rings=[8,16,24,32,40]; let drawn=0;
    for(const [ri,cnt] of rings.entries()){const r=8+ri*9;mn+=`<circle cx="50" cy="50" r="${r}" fill="none" stroke="${c}" stroke-width="0.4" opacity="0.2"/>`;for(let i=0;i<cnt&&drawn<55;i++,drawn++){const ang=(i/cnt)*Math.PI*2;mn+=`<circle cx="${(50+r*Math.cos(ang)).toFixed(1)}" cy="${(50+r*Math.sin(ang)).toFixed(1)}" r="0.9" fill="${c}" opacity="${0.4+ri*0.1}"/>`;}}
    return wrap(`${mn}<circle cx="50" cy="50" r="10" fill="${dim(c,0.3)}" stroke="${c}" stroke-width="2"/><circle cx="50" cy="50" r="5" fill="${c}" opacity="0.9"/><circle cx="52" cy="48" r="2" fill="white" opacity="0.7"/><line x1="50" y1="40" x2="50" y2="35" stroke="${c}" stroke-width="1.5"/><line x1="50" y1="60" x2="50" y2="65" stroke="${c}" stroke-width="1.5"/><line x1="40" y1="50" x2="35" y2="50" stroke="${c}" stroke-width="1.5"/><line x1="60" y1="50" x2="65" y2="50" stroke="${c}" stroke-width="1.5"/>`);
  }
  const oc = 3+hi(a.code,2,4); let orbits="";
  for(let i=0;i<oc;i++){const r=18+i*9;const obc=2+i;orbits+=`<circle cx="50" cy="50" r="${r}" fill="none" stroke="${c}" stroke-width="0.8" opacity="${0.3+i*0.1}"/>`;for(let j=0;j<obc;j++){const ang=((j/obc)+hf(a.code,i*5+j))*Math.PI*2;orbits+=`<circle cx="${(50+r*Math.cos(ang)).toFixed(1)}" cy="${(50+r*Math.sin(ang)).toFixed(1)}" r="${1.5+hi(a.code,i*8+j,2)}" fill="${c}" opacity="0.8"/>`;}}
  const v=hi(a.code,1,3);
  const eye=[`<ellipse cx="50" cy="50" rx="10" ry="12" fill="${DK}" stroke="${c}" stroke-width="2"/><ellipse cx="50" cy="50" rx="5" ry="6" fill="${c}" opacity="0.8"/><circle cx="52" cy="48" r="2" fill="white" opacity="0.6"/>`,`<polygon points="50,38 62,50 50,62 38,50" fill="${DK}" stroke="${c}" stroke-width="2"/><circle cx="50" cy="50" r="6" fill="${c}" opacity="0.8"/>`,`<circle cx="50" cy="50" r="12" fill="${dim(c,0.2)}" stroke="${c}" stroke-width="2"/><text x="50" y="55" text-anchor="middle" fill="${c}" font-size="14">&#x221E;</text>`][v];
  return wrap(`${orbits}${eye}<circle cx="50" cy="50" r="8" fill="${dim(c,0.1)}"/>`);
}

// ── CODEX: Documentation Dept 20 ── Open book + quill
function codex(a: Agent): string {
  const c = DC[20]; const lc=5+hi(a.code,1,4); let lines="";
  for(let i=0;i<lc;i++){const ly=45+i*6;lines+=`<line x1="25" y1="${ly}" x2="${25+15+hi(a.code,i+5,20)}" y2="${ly}" stroke="${c}" stroke-width="1" opacity="0.5"/>`;lines+=`<line x1="53" y1="${ly}" x2="${53+15+hi(a.code,i+15,18)}" y2="${ly}" stroke="${c}" stroke-width="1" opacity="0.5"/>`;}
  return wrap(`<rect x="47" y="22" width="6" height="68" rx="1" fill="${dim(c,0.5)}" stroke="${c}" stroke-width="1"/>
<rect x="15" y="22" width="32" height="68" rx="3" fill="#0f1500" stroke="${c}" stroke-width="1.5"/>
<rect x="53" y="22" width="32" height="68" rx="3" fill="#0f1500" stroke="${c}" stroke-width="1.5"/>
${lines}
<path d="M68,25 C80,22 85,35 70,55 C65,40 62,30 68,25 Z" fill="${c}" opacity="0.7"/>
<line x1="68" y1="25" x2="62" y2="60" stroke="${c}" stroke-width="0.8" opacity="0.5"/>
<rect x="18" y="26" width="22" height="4" rx="1" fill="${c}" opacity="0.5"/>
<rect x="56" y="26" width="22" height="4" rx="1" fill="${c}" opacity="0.5"/>
<circle cx="30" cy="35" r="4" fill="${DK}" stroke="${c}" stroke-width="1"/>
<circle cx="30" cy="35" r="2" fill="${c}"/>`);
}

function gen(a: Agent): string {
  const gens: Record<number,(a:Agent)=>string> = {
    1:crown,2:circuit,3:cloud,4:prism,5:palette,6:neural,7:shield,8:shadow,
    9:catalyst,10:signal,11:beacon,12:crystal,13:vault,14:scale,
    15:serverMind,16:broadcast,17:timeline,18:gate,19:oracle,20:codex,
  };
  return (gens[a.dept]||oracle)(a);
}

// ── Parse and generate ────────────────────────────────────────────────────────
const agentsDir = join(__dirname,"../../agents");
const outDir = join(__dirname,"../public/brand/avatars/agents");
mkdirSync(outDir, {recursive:true});

let count=0;
for(const dept of readdirSync(agentsDir).filter(d=>/^\d{2}-/.test(d)).sort()){
  const dn=parseInt(dept.split("-")[0]);
  const dp=join(agentsDir,dept);
  let files:string[]=[];
  try{files=readdirSync(dp).filter(f=>f.endsWith(".md"));}catch{continue;}
  for(const file of files){
    const m=file.match(/^(\d+)-(.+)\.md$/);
    if(!m)continue;
    const code=m[2];const num=parseInt(m[1]);
    try{
      const content=readFileSync(join(dp,file),"utf8");
      const tier=parseInt(content.match(/<tier>Tier (\d)/)?.[1]??"5");
      const a:Agent={code,number:num,dept:dn,tier};
      writeFileSync(join(outDir,`${code}.svg`),gen(a));
      count++;
    }catch(e){console.error(`Error ${code}:${e}`);}
  }
}

// Tier fallbacks
const tn=["csuite","vp","director","manager","staff-plus","senior","mid","junior","governance","special"];
const td=[1,2,3,3,4,5,6,7,18,19];
for(let i=0;i<10;i++){
  const a:Agent={code:`TIER-${i}`,number:i,dept:td[i],tier:i};
  writeFileSync(join(outDir,`../tier-${i}-${tn[i]}.svg`),gen(a));
}
console.log(`✅ POKEMON-STYLE: Generated ${count} agent avatars + 10 tier fallbacks`);
