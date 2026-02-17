import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUT = join(__dirname, "../public/brand/avatars/agents");

function svg(body: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200"><defs><radialGradient id="bg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#1a1f3a"/><stop offset="100%" stop-color="#030108"/></radialGradient></defs><rect width="100" height="100" rx="18" fill="url(#bg)"/>${body}</svg>`;
}

// Helper: crystal humanoid skeleton (HR archetype, pink #EC4899)
// nodes: array of [cx, cy, r] for each joint
// edges: array of [x1,y1,x2,y2] for limb connections
// symbol: SVG string drawn in chest area
function crystalHumanoid(
  nodes: [number, number, number][],
  edges: [number, number, number, number][],
  symbol: string,
  color: string = "#EC4899",
  heartCx: number = 50,
  heartCy: number = 55,
  heartSize: number = 5
): string {
  const edgeLines = edges
    .map(
      ([x1, y1, x2, y2]) =>
        `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="1.5" opacity="0.6"/>`
    )
    .join("");
  const nodeCircles = nodes
    .map(
      ([cx, cy, r]) =>
        `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#1a0a1a" stroke="${color}" stroke-width="1.5"/>`
    )
    .join("");
  // Heart shape in chest
  const hs = heartSize;
  const hx = heartCx;
  const hy = heartCy;
  const heart = `<path d="M${hx},${hy + hs * 0.4} Q${hx - hs},${hy - hs * 0.6} ${hx - hs},${hy} Q${hx - hs},${hy + hs * 0.8} ${hx},${hy + hs * 1.4} Q${hx + hs},${hy + hs * 0.8} ${hx + hs},${hy} Q${hx + hs},${hy - hs * 0.6} ${hx},${hy + hs * 0.4} Z" fill="${color}" opacity="0.85"/>`;
  return edgeLines + nodeCircles + symbol + heart;
}

// Helper: vault door (Finance archetype, green #84CC16)
function vaultDoor(
  cx: number,
  cy: number,
  r: number,
  notches: number,
  dialColor: string,
  symbol: string,
  isCrown: boolean = false,
  color: string = "#84CC16"
): string {
  // Outer ring
  let out = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#0a1a00" stroke="${color}" stroke-width="2"/>`;
  // Notches around rim
  for (let i = 0; i < notches; i++) {
    const angle = (i / notches) * Math.PI * 2;
    const nx = cx + (r - 1) * Math.cos(angle);
    const ny = cy + (r - 1) * Math.sin(angle);
    const nx2 = cx + (r + 1.5) * Math.cos(angle);
    const ny2 = cy + (r + 1.5) * Math.sin(angle);
    out += `<line x1="${nx.toFixed(1)}" y1="${ny.toFixed(1)}" x2="${nx2.toFixed(1)}" y2="${ny2.toFixed(1)}" stroke="${color}" stroke-width="1.2" opacity="0.8"/>`;
  }
  // Inner ring
  out += `<circle cx="${cx}" cy="${cy}" r="${(r * 0.65).toFixed(1)}" fill="none" stroke="${color}" stroke-width="1" opacity="0.5"/>`;
  // Combination dial (cross lines)
  out += `<circle cx="${cx}" cy="${cy}" r="${(r * 0.32).toFixed(1)}" fill="${dialColor}" stroke="${color}" stroke-width="1"/>`;
  out += `<line x1="${cx}" y1="${(cy - r * 0.28).toFixed(1)}" x2="${cx}" y2="${(cy + r * 0.28).toFixed(1)}" stroke="${color}" stroke-width="0.8" opacity="0.7"/>`;
  out += `<line x1="${(cx - r * 0.28).toFixed(1)}" y1="${cy}" x2="${(cx + r * 0.28).toFixed(1)}" y2="${cy}" stroke="${color}" stroke-width="0.8" opacity="0.7"/>`;
  // Locking bolts (4 cardinal)
  for (const [bx, by] of [
    [cx, cy - r + 3],
    [cx, cy + r - 3],
    [cx - r + 3, cy],
    [cx + r - 3, cy],
  ]) {
    out += `<circle cx="${bx}" cy="${by}" r="1.5" fill="${color}" opacity="0.8"/>`;
  }
  // Handle
  out += `<rect x="${(cx + r * 0.55).toFixed(1)}" y="${(cy - 2).toFixed(1)}" width="${(r * 0.3).toFixed(1)}" height="4" rx="1.5" fill="${color}" opacity="0.7"/>`;
  // Crown if VP
  if (isCrown) {
    out += `<path d="M${cx - 5},${cy - r - 3} L${cx - 3},${cy - r - 7} L${cx},${cy - r - 5} L${cx + 3},${cy - r - 7} L${cx + 5},${cy - r - 3} Z" fill="${color}" opacity="0.9"/>`;
  }
  // Symbol inside
  out += symbol;
  return out;
}

// Helper: balance scale (Legal archetype, yellow #EAB308)
function balanceScale(
  cx: number,
  baseCy: number,
  postH: number,
  panW: number,
  leftSymbol: string,
  rightSymbol: string,
  baseSymbol: string,
  isVP: boolean = false,
  color: string = "#EAB308"
): string {
  const topY = baseCy - postH;
  const beamHalf = panW + 6;
  const panY = topY + 12;
  const leftPanCx = cx - beamHalf;
  const rightPanCx = cx + beamHalf;
  let out = "";
  // Post
  out += `<line x1="${cx}" y1="${baseCy}" x2="${cx}" y2="${topY}" stroke="${color}" stroke-width="2"/>`;
  // Top ornament
  out += `<circle cx="${cx}" cy="${topY}" r="2.5" fill="${color}"/>`;
  // Beam
  out += `<line x1="${cx - beamHalf}" y1="${topY}" x2="${cx + beamHalf}" y2="${topY}" stroke="${color}" stroke-width="1.5"/>`;
  // Chains
  out += `<line x1="${leftPanCx}" y1="${topY}" x2="${leftPanCx}" y2="${panY}" stroke="${color}" stroke-width="1" opacity="0.7" stroke-dasharray="1.5,1"/>`;
  out += `<line x1="${rightPanCx}" y1="${topY}" x2="${rightPanCx}" y2="${panY}" stroke="${color}" stroke-width="1" opacity="0.7" stroke-dasharray="1.5,1"/>`;
  // Pans
  out += `<path d="M${leftPanCx - panW},${panY} Q${leftPanCx},${panY + 5} ${leftPanCx + panW},${panY}" stroke="${color}" stroke-width="1.5" fill="rgba(234,179,8,0.15)"/>`;
  out += `<path d="M${rightPanCx - panW},${panY} Q${rightPanCx},${panY + 5} ${rightPanCx + panW},${panY}" stroke="${color}" stroke-width="1.5" fill="rgba(234,179,8,0.15)"/>`;
  // VP gavel above
  if (isVP) {
    out += `<rect x="${cx - 7}" y="${topY - 11}" width="14" height="4" rx="1.5" fill="${color}" opacity="0.9"/>`;
    out += `<line x1="${cx}" y1="${topY - 7}" x2="${cx}" y2="${topY - 3}" stroke="${color}" stroke-width="1.5"/>`;
  }
  // Left/right pan symbols
  out += leftSymbol;
  out += rightSymbol;
  // Base book
  out += baseSymbol;
  // Base stand
  out += `<path d="M${cx - 10},${baseCy} L${cx - 6},${baseCy - 4} L${cx + 6},${baseCy - 4} L${cx + 10},${baseCy} Z" fill="${color}" opacity="0.7"/>`;
  out += `<rect x="${cx - 12}" y="${baseCy}" width="24" height="3" rx="1" fill="${color}" opacity="0.5"/>`;
  return out;
}

// Helper: server rack (IT archetype, grey #64748B)
function serverRack(
  cx: number,
  cy: number,
  units: number,
  symbol: string,
  topDecor: string = "",
  color: string = "#64748B"
): string {
  const rw = 28;
  const uh = 7;
  const totalH = units * uh + 4;
  const rx = cx - rw / 2;
  const ry = cy - totalH / 2;
  let out = "";
  // Outer chassis
  out += `<rect x="${rx}" y="${ry}" width="${rw}" height="${totalH}" rx="2" fill="#0a0f1a" stroke="${color}" stroke-width="1.5"/>`;
  // Unit slots
  for (let i = 0; i < units; i++) {
    const uy = ry + 2 + i * uh;
    out += `<rect x="${rx + 2}" y="${uy}" width="${rw - 4}" height="${uh - 1.5}" rx="1" fill="#111827" stroke="${color}" stroke-width="0.7" opacity="0.8"/>`;
    // LED indicator dots
    out += `<circle cx="${rx + 5}" cy="${uy + (uh - 1.5) / 2}" r="1" fill="#22c55e" opacity="0.8"/>`;
    out += `<circle cx="${rx + 8}" cy="${uy + (uh - 1.5) / 2}" r="1" fill="${color}" opacity="0.5"/>`;
  }
  // Display panel area (bottom 2 units)
  const dpY = ry + 2 + (units - 2) * uh;
  out += `<rect x="${rx + 2}" y="${dpY}" width="${rw - 4}" height="${uh * 2 - 1.5}" rx="1" fill="#0a1020" stroke="${color}" stroke-width="0.7"/>`;
  // Symbol drawn in display
  out += symbol;
  // Top decor (headset, crown, etc.)
  out += topDecor;
  // Side vents
  for (let i = 0; i < 5; i++) {
    out += `<line x1="${rx - 0.5}" y1="${ry + 4 + i * 5}" x2="${rx - 3}" y2="${ry + 4 + i * 5}" stroke="${color}" stroke-width="0.8" opacity="0.5"/>`;
    out += `<line x1="${rx + rw + 0.5}" y1="${ry + 4 + i * 5}" x2="${rx + rw + 3}" y2="${ry + 4 + i * 5}" stroke="${color}" stroke-width="0.8" opacity="0.5"/>`;
  }
  return out;
}

// Helper: satellite dish (DevRel archetype, violet #8B5CF6)
function satelliteDish(
  cx: number,
  cy: number,
  dishR: number,
  globeSymbol: string,
  overlaySymbol: string,
  badgeText: string = "",
  color: string = "#8B5CF6"
): string {
  let out = "";
  // Dish bowl
  out += `<ellipse cx="${cx - 8}" cy="${cy + 5}" rx="${dishR}" ry="${dishR * 0.5}" fill="none" stroke="${color}" stroke-width="1.8"/>`;
  out += `<ellipse cx="${cx - 8}" cy="${cy + 5}" rx="${dishR * 0.6}" ry="${dishR * 0.3}" fill="none" stroke="${color}" stroke-width="0.8" opacity="0.5"/>`;
  // Dish arm/mount
  out += `<line x1="${cx - 8}" y1="${cy + 5}" x2="${cx}" y2="${cy + 18}" stroke="${color}" stroke-width="2"/>`;
  out += `<line x1="${cx}" y1="${cy + 18}" x2="${cx - 8}" y2="${cy + 18}" stroke="${color}" stroke-width="1.5"/>`;
  out += `<line x1="${cx}" y1="${cy + 18}" x2="${cx + 8}" y2="${cy + 18}" stroke="${color}" stroke-width="1.5"/>`;
  // Signal waves from dish
  out += `<path d="M${cx - 8 + dishR * 0.7},${cy + 2} Q${cx + dishR - 4},${cy - 5} ${cx + dishR + 2},${cy - 10}" stroke="${color}" stroke-width="1" fill="none" opacity="0.5" stroke-dasharray="2,2"/>`;
  out += `<path d="M${cx - 8 + dishR * 0.5},${cy} Q${cx + dishR - 6},${cy - 8} ${cx + dishR},${cy - 15}" stroke="${color}" stroke-width="0.8" fill="none" opacity="0.35" stroke-dasharray="1.5,2.5"/>`;
  // Globe circle
  const gx = cx + 12;
  const gy = cy - 12;
  const gr = 14;
  out += `<circle cx="${gx}" cy="${gy}" r="${gr}" fill="#1a0a2e" stroke="${color}" stroke-width="1.5"/>`;
  // Globe meridians
  out += `<ellipse cx="${gx}" cy="${gy}" rx="${gr * 0.5}" ry="${gr}" fill="none" stroke="${color}" stroke-width="0.7" opacity="0.4"/>`;
  out += `<line x1="${gx - gr}" y1="${gy}" x2="${gx + gr}" y2="${gy}" stroke="${color}" stroke-width="0.7" opacity="0.4"/>`;
  out += `<ellipse cx="${gx}" cy="${gy}" rx="${gr}" ry="${gr * 0.4}" fill="none" stroke="${color}" stroke-width="0.7" opacity="0.35"/>`;
  // Globe symbol inside
  out += globeSymbol;
  // Overlay symbol on dish
  out += overlaySymbol;
  // Badge text
  if (badgeText) {
    out += `<rect x="${cx - 16}" y="${cy + 22}" width="32" height="7" rx="2" fill="${color}" opacity="0.2" stroke="${color}" stroke-width="0.5"/>`;
    out += `<text x="${cx}" y="${cy + 27.5}" text-anchor="middle" font-family="monospace" font-size="4" fill="${color}" opacity="0.9">${badgeText}</text>`;
  }
  return out;
}

// Helper: gantt chart (Program Mgmt archetype, teal #14B8A6)
function ganttChart(
  cx: number,
  cy: number,
  bars: number,
  milestones: number,
  symbol: string,
  color: string = "#14B8A6"
): string {
  const chartW = 58;
  const chartH = bars * 8 + 10;
  const lx = cx - chartW / 2;
  const ty = cy - chartH / 2 - 5;
  let out = "";
  // Chart border
  out += `<rect x="${lx}" y="${ty}" width="${chartW}" height="${chartH}" rx="2" fill="#001a18" stroke="${color}" stroke-width="1"/>`;
  // Header bar
  out += `<rect x="${lx}" y="${ty}" width="${chartW}" height="8" rx="2" fill="${color}" opacity="0.3"/>`;
  out += `<text x="${lx + chartW / 2}" y="${ty + 5.5}" text-anchor="middle" font-family="monospace" font-size="3.5" fill="${color}" opacity="0.9">GANTT</text>`;
  // Row labels + bars
  const barColors = ["#14B8A6", "#0ea5e9", "#8b5cf6", "#ec4899", "#f59e0b", "#22c55e"];
  const barWidths = [38, 28, 44, 20, 34, 16];
  const barOffsets = [2, 6, 0, 12, 4, 8];
  for (let i = 0; i < bars; i++) {
    const rowY = ty + 10 + i * 8;
    // Row BG
    out += `<rect x="${lx + 2}" y="${rowY + 1}" width="${chartW - 4}" height="6" rx="1" fill="rgba(20,184,166,0.05)"/>`;
    // Task bar
    const bw = Math.min(barWidths[i] ?? 30, chartW - 14 - (barOffsets[i] ?? 0));
    const bx = lx + 12 + (barOffsets[i] ?? 0);
    out += `<rect x="${bx}" y="${rowY + 1.5}" width="${bw}" height="5" rx="1.5" fill="${barColors[i % barColors.length]}" opacity="0.7"/>`;
    // Row label
    out += `<rect x="${lx + 2}" y="${rowY + 2}" width="8" height="4" rx="0.5" fill="${color}" opacity="0.2"/>`;
  }
  // Milestone diamonds
  const mstoneX = [lx + 22, lx + 32, lx + 45, lx + 18, lx + 54];
  const mstoneY = [ty + 14, ty + 26, ty + 18, ty + 34, ty + 22];
  for (let i = 0; i < milestones; i++) {
    const mx = mstoneX[i] ?? lx + 30;
    const my = mstoneY[i] ?? ty + 20;
    out += `<path d="M${mx},${my - 3} L${mx + 3},${my} L${mx},${my + 3} L${mx - 3},${my} Z" fill="${color}" opacity="0.9"/>`;
  }
  // Clock in corner
  const clkX = cx + chartW / 2 - 10;
  const clkY = cy - chartH / 2 + 28;
  out += `<circle cx="${clkX}" cy="${clkY}" r="8" fill="#001a18" stroke="${color}" stroke-width="1"/>`;
  out += `<line x1="${clkX}" y1="${clkY}" x2="${clkX}" y2="${clkY - 5}" stroke="${color}" stroke-width="1"/>`;
  out += `<line x1="${clkX}" y1="${clkY}" x2="${clkX + 4}" y2="${clkY}" stroke="${color}" stroke-width="1"/>`;
  out += `<circle cx="${clkX}" cy="${clkY}" r="1" fill="${color}"/>`;
  // Extra symbol
  out += symbol;
  return out;
}

// Helper: oracle/cosmic orbiting (Special Agents, red #FF4444)
function oracleOrbit(
  cx: number,
  cy: number,
  rings: [number, number][], // [radius, nodeCount]
  centerSymbol: string,
  color: string = "#FF4444"
): string {
  let out = "";
  rings.forEach(([r, n], ri) => {
    const opacity = 0.2 + ri * 0.12;
    out += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="0.5" opacity="${opacity.toFixed(2)}"/>`;
    for (let i = 0; i < n; i++) {
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
      const nx = cx + r * Math.cos(angle);
      const ny = cy + r * Math.sin(angle);
      const nodeOpacity = 0.4 + ri * 0.15;
      out += `<circle cx="${nx.toFixed(1)}" cy="${ny.toFixed(1)}" r="1.2" fill="${color}" opacity="${nodeOpacity.toFixed(2)}"/>`;
    }
  });
  // Center glow
  out += `<circle cx="${cx}" cy="${cy}" r="12" fill="rgba(255,68,68,0.2)" stroke="${color}" stroke-width="1.5"/>`;
  out += `<circle cx="${cx}" cy="${cy}" r="6" fill="rgba(255,68,68,0.4)" stroke="${color}" stroke-width="1"/>`;
  // Center symbol
  out += centerSymbol;
  return out;
}

// Helper: codex open book (Documentation, amber #D97706)
function codexBook(
  cx: number,
  cy: number,
  lineCount: number,
  symbol: string,
  bookmarkLabel: string = "",
  color: string = "#D97706"
): string {
  let out = "";
  const bw = 38;
  const bh = 28;
  const bx = cx - bw / 2;
  const by = cy - bh / 2;
  // Left page
  out += `<path d="M${bx},${by + 4} Q${cx - 2},${by + 2} ${cx},${by + 4} L${cx},${by + bh + 4} Q${cx - 2},${by + bh + 2} ${bx},${by + bh + 4} Z" fill="#1a0a00" stroke="${color}" stroke-width="1.5"/>`;
  // Right page
  out += `<path d="M${cx},${by + 4} Q${cx + 2},${by + 2} ${bx + bw},${by + 4} L${bx + bw},${by + bh + 4} Q${cx + 2},${by + bh + 2} ${cx},${by + bh + 4} Z" fill="#1a0800" stroke="${color}" stroke-width="1.5"/>`;
  // Spine
  out += `<line x1="${cx}" y1="${by + 3}" x2="${cx}" y2="${by + bh + 5}" stroke="${color}" stroke-width="2"/>`;
  // Text lines on left page
  for (let i = 0; i < Math.min(lineCount, 5); i++) {
    const lw = i === 0 ? 14 : 12 - i;
    out += `<line x1="${bx + 3}" y1="${by + 8 + i * 4}" x2="${bx + 3 + lw}" y2="${by + 8 + i * 4}" stroke="${color}" stroke-width="0.9" opacity="${0.7 - i * 0.08}"/>`;
  }
  // Text lines on right page
  for (let i = 0; i < Math.min(lineCount, 5); i++) {
    const lw = i === 0 ? 13 : 11 - i;
    out += `<line x1="${cx + 3}" y1="${by + 8 + i * 4}" x2="${cx + 3 + lw}" y2="${by + 8 + i * 4}" stroke="${color}" stroke-width="0.9" opacity="${0.7 - i * 0.08}"/>`;
  }
  // Quill symbol
  out += symbol;
  // Bookmark
  if (bookmarkLabel) {
    out += `<path d="M${bx + bw - 5},${by - 2} L${bx + bw - 5},${by + 8} L${bx + bw - 7},${by + 6} L${bx + bw - 9},${by + 8} L${bx + bw - 9},${by - 2} Z" fill="${color}" opacity="0.8"/>`;
    out += `<text x="${bx + bw - 7}" y="${by + 3}" text-anchor="middle" font-family="monospace" font-size="2.2" fill="#1a0800">${bookmarkLabel}</text>`;
  }
  return out;
}

// Pre-computed complex bodies
function makeScrumBody(): string {
  const cx = 50;
  const cy = 48;
  const color = "#14B8A6";
  let body = "";
  const sprints = [
    { r: 28, nodes: 8, opacity: 0.3 },
    { r: 20, nodes: 6, opacity: 0.5 },
    { r: 13, nodes: 5, opacity: 0.7 },
    { r: 6,  nodes: 4, opacity: 0.9 },
  ];
  sprints.forEach(({ r, nodes, opacity }) => {
    body += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="1" opacity="${opacity}" stroke-dasharray="3,2"/>`;
    for (let i = 0; i < nodes; i++) {
      const angle = (i / nodes) * Math.PI * 2 - Math.PI / 2;
      const nx = cx + r * Math.cos(angle);
      const ny = cy + r * Math.sin(angle);
      body += `<circle cx="${nx.toFixed(1)}" cy="${ny.toFixed(1)}" r="1.5" fill="${color}" opacity="${opacity + 0.1}"/>`;
    }
  });
  body += `<circle cx="${cx}" cy="${cy}" r="4" fill="rgba(20,184,166,0.4)" stroke="${color}" stroke-width="1"/>`;
  body += `<text x="${cx}" y="${cy + 1.5}" text-anchor="middle" font-family="monospace" font-size="2.8" fill="white" font-weight="bold">SC</text>`;
  body += `<path d="M${cx + 28},${cy - 3} Q${cx + 32},${cy - 8} ${cx + 26},${cy - 10}" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.6"/>`;
  body += `<text x="50" y="90" text-anchor="middle" font-family="monospace" font-size="3.5" fill="${color}" opacity="0.8">SCRUM</text>`;
  return body;
}

function makeNexusOrchestratorBody(): string {
  const cx = 50;
  const cy = 50;
  const color = "#FF4444";
  let body = "";

  // Cardinal cross rays
  const rays = [0, 45, 90, 135, 180, 225, 270, 315];
  rays.forEach((deg) => {
    const rad = (deg * Math.PI) / 180;
    const x2 = cx + 48 * Math.cos(rad);
    const y2 = cy + 48 * Math.sin(rad);
    body += `<line x1="${cx}" y1="${cy}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${color}" stroke-width="${deg % 90 === 0 ? 0.8 : 0.4}" opacity="${deg % 90 === 0 ? 0.3 : 0.15}"/>`;
  });

  // 12 orbital rings
  const ringDefs: [number, number][] = [
    [5,4],[9,5],[13,6],[17,7],[21,8],[25,10],
    [29,12],[33,14],[37,16],[41,18],[45,20],[49,22],
  ];
  ringDefs.forEach(([r, n], ri) => {
    const opacity = 0.08 + ri * 0.06;
    const nodeOpacity = 0.2 + ri * 0.05;
    body += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="0.3" opacity="${Math.min(opacity, 0.7).toFixed(2)}"/>`;
    for (let i = 0; i < n; i++) {
      const angle = (i / n) * Math.PI * 2;
      const nx = cx + r * Math.cos(angle);
      const ny = cy + r * Math.sin(angle);
      const nr = ri < 4 ? 0.7 : ri < 8 ? 0.9 : 1.1;
      body += `<circle cx="${nx.toFixed(1)}" cy="${ny.toFixed(1)}" r="${nr}" fill="${color}" opacity="${Math.min(nodeOpacity, 0.8).toFixed(2)}"/>`;
    }
  });

  // 8-pointed central star
  const starPoints: string[] = [];
  for (let i = 0; i < 8; i++) {
    const outerR = 8;
    const innerR = 4;
    const a1 = (i / 8) * Math.PI * 2 - Math.PI / 2;
    const a2 = ((i + 0.5) / 8) * Math.PI * 2 - Math.PI / 2;
    starPoints.push(`${(cx + outerR * Math.cos(a1)).toFixed(1)},${(cy + outerR * Math.sin(a1)).toFixed(1)}`);
    starPoints.push(`${(cx + innerR * Math.cos(a2)).toFixed(1)},${(cy + innerR * Math.sin(a2)).toFixed(1)}`);
  }
  body += `<polygon points="${starPoints.join(" ")}" fill="${color}" opacity="0.95"/>`;

  body += `<circle cx="${cx}" cy="${cy}" r="3.5" fill="white" opacity="0.9"/>`;
  body += `<circle cx="${cx}" cy="${cy}" r="6" fill="none" stroke="${color}" stroke-width="1.5" opacity="0.6"/>`;
  body += `<text x="${cx}" y="92" text-anchor="middle" font-family="monospace" font-size="3" fill="${color}" opacity="0.9">NEXUS ORCHESTRATOR</text>`;
  return body;
}

const avatars: Record<string, string> = {
  // ─────────────────────────────────────────────
  // DEPT 12: HR — CRYSTAL_PEOPLE (pink #EC4899)
  // ─────────────────────────────────────────────

  "VP-PEOPLE": svg(
    // Largest crystal humanoid: 7 nodes, crown at head, largest heart
    crystalHumanoid(
      [
        [50, 16, 8],  // head (crown node)
        [50, 32, 6],  // neck/chest
        [36, 46, 5],  // left shoulder
        [64, 46, 5],  // right shoulder
        [38, 63, 5],  // left knee
        [62, 63, 5],  // right knee
        [50, 80, 5],  // pelvis
      ],
      [
        [50, 24, 50, 32],
        [50, 32, 36, 46],
        [50, 32, 64, 46],
        [36, 46, 38, 63],
        [64, 46, 62, 63],
        [38, 63, 50, 80],
        [62, 63, 50, 80],
        [36, 46, 64, 46],
      ],
      // Crown on head node
      `<path d="M43,14 L45,9 L50,12 L55,9 L57,14 Z" fill="#EC4899" opacity="0.95"/>
       <path d="M44,14 L56,14" stroke="#EC4899" stroke-width="1"/>`,
      "#EC4899",
      50, 48, 6
    ) +
    // Glow aura on head
    `<circle cx="50" cy="16" r="10" fill="none" stroke="#EC4899" stroke-width="0.5" opacity="0.3"/>`
  ),

  "SR-RECRUITER": svg(
    crystalHumanoid(
      [
        [50, 18, 7],  // head = magnifying glass handle node
        [50, 33, 5],
        [37, 47, 5],
        [63, 47, 5],
        [40, 63, 5],
        [60, 63, 4],
        [50, 78, 4],
      ],
      [
        [50, 25, 50, 33],
        [50, 33, 37, 47],
        [50, 33, 63, 47],
        [37, 47, 40, 63],
        [63, 47, 60, 63],
        [40, 63, 50, 78],
        [60, 63, 50, 78],
        [37, 47, 63, 47],
      ],
      // Magnifying glass as head node
      `<circle cx="50" cy="15" r="7" fill="none" stroke="#EC4899" stroke-width="1.8"/>
       <circle cx="50" cy="15" r="4" fill="none" stroke="#EC4899" stroke-width="1" opacity="0.5"/>
       <line x1="55" y1="20" x2="59" y2="24" stroke="#EC4899" stroke-width="2" stroke-linecap="round"/>`,
      "#EC4899", 50, 48, 4
    )
  ),

  "RECRUITER": svg(
    crystalHumanoid(
      [
        [50, 20, 6],
        [50, 35, 5],
        [38, 48, 4],
        [62, 48, 4],
        [40, 64, 4],
        [60, 64, 4],
        [50, 78, 4],
      ],
      [
        [50, 26, 50, 35],
        [50, 35, 38, 48],
        [50, 35, 62, 48],
        [38, 48, 40, 64],
        [62, 48, 60, 64],
        [40, 64, 50, 78],
        [60, 64, 50, 78],
        [38, 48, 62, 48],
      ],
      // Briefcase in chest node
      `<rect x="43" y="30" width="14" height="10" rx="1.5" fill="none" stroke="#EC4899" stroke-width="1.3"/>
       <path d="M46,30 L46,28 Q50,26 54,28 L54,30" stroke="#EC4899" stroke-width="1" fill="none"/>
       <line x1="43" y1="35" x2="57" y2="35" stroke="#EC4899" stroke-width="0.8" opacity="0.6"/>`,
      "#EC4899", 50, 50, 4
    )
  ),

  "HRBP": svg(
    crystalHumanoid(
      [
        [50, 20, 6],
        [50, 35, 5],
        [38, 48, 4],
        [62, 48, 4],
        [40, 63, 4],
        [60, 63, 4],
        [50, 77, 4],
      ],
      [
        [50, 26, 50, 35],
        [50, 35, 38, 48],
        [50, 35, 62, 48],
        [38, 48, 40, 63],
        [62, 48, 60, 63],
        [40, 63, 50, 77],
        [60, 63, 50, 77],
        [38, 48, 62, 48],
      ],
      // Bridge in chest (two pillars + arch)
      `<line x1="44" y1="38" x2="44" y2="30" stroke="#EC4899" stroke-width="1.5"/>
       <line x1="56" y1="38" x2="56" y2="30" stroke="#EC4899" stroke-width="1.5"/>
       <path d="M44,30 Q50,25 56,30" stroke="#EC4899" stroke-width="1.5" fill="none"/>
       <line x1="42" y1="38" x2="58" y2="38" stroke="#EC4899" stroke-width="1"/>`,
      "#EC4899", 50, 52, 4
    )
  ),

  "L&D-MGR": svg(
    crystalHumanoid(
      [
        [50, 20, 6],
        [50, 35, 5],
        [38, 48, 4],
        [62, 48, 4],
        [40, 63, 4],
        [60, 63, 4],
        [50, 77, 4],
      ],
      [
        [50, 26, 50, 35],
        [50, 35, 38, 48],
        [50, 35, 62, 48],
        [38, 48, 40, 63],
        [62, 48, 60, 63],
        [40, 63, 50, 77],
        [60, 63, 50, 77],
        [38, 48, 62, 48],
      ],
      // Graduation cap on head node area
      `<rect x="43" y="15" width="14" height="3" rx="0.5" fill="#EC4899" opacity="0.9"/>
       <polygon points="50,10 44,15 56,15" fill="#EC4899" opacity="0.7"/>
       <line x1="56" y1="15" x2="58" y2="19" stroke="#EC4899" stroke-width="1"/>
       <circle cx="58" cy="20" r="1.2" fill="#EC4899" opacity="0.8"/>`,
      "#EC4899", 50, 50, 4
    )
  ),

  "COMP-ANALYST": svg(
    crystalHumanoid(
      [
        [50, 20, 6],
        [50, 35, 5],
        [38, 48, 4],
        [62, 48, 4],
        [40, 63, 4],
        [60, 63, 4],
        [50, 77, 4],
      ],
      [
        [50, 26, 50, 35],
        [50, 35, 38, 48],
        [50, 35, 62, 48],
        [38, 48, 40, 63],
        [62, 48, 60, 63],
        [40, 63, 50, 77],
        [60, 63, 50, 77],
        [38, 48, 62, 48],
      ],
      // Calculator in chest
      `<rect x="43" y="29" width="14" height="12" rx="1.5" fill="none" stroke="#EC4899" stroke-width="1.2"/>
       <rect x="44.5" y="30.5" width="11" height="4" rx="0.5" fill="rgba(236,72,153,0.2)"/>
       <circle cx="46" cy="38" r="1" fill="#EC4899" opacity="0.7"/>
       <circle cx="50" cy="38" r="1" fill="#EC4899" opacity="0.7"/>
       <circle cx="54" cy="38" r="1" fill="#EC4899" opacity="0.7"/>
       <text x="50" y="34" text-anchor="middle" font-size="3" fill="#EC4899" opacity="0.9">$</text>`,
      "#EC4899", 50, 50, 4
    )
  ),

  "PPL-ANALYTICS": svg(
    crystalHumanoid(
      [
        [50, 20, 6],
        [50, 35, 5],
        [38, 48, 4],
        [62, 48, 4],
        [40, 63, 4],
        [60, 63, 4],
        [50, 77, 4],
      ],
      [
        [50, 26, 50, 35],
        [50, 35, 38, 48],
        [50, 35, 62, 48],
        [38, 48, 40, 63],
        [62, 48, 60, 63],
        [40, 63, 50, 77],
        [60, 63, 50, 77],
        [38, 48, 62, 48],
      ],
      // Mini bar chart in chest
      `<rect x="43" y="38" width="3" height="3" fill="#EC4899" opacity="0.9"/>
       <rect x="47.5" y="34" width="3" height="7" fill="#EC4899" opacity="0.7"/>
       <rect x="52" y="36" width="3" height="5" fill="#EC4899" opacity="0.8"/>
       <rect x="56.5" y="30" width="3" height="11" fill="#EC4899" opacity="0.6"/>
       <line x1="42" y1="41" x2="61" y2="41" stroke="#EC4899" stroke-width="0.7" opacity="0.5"/>
       <polyline points="44.5,38 49,35 53.5,37 58,30" stroke="#EC4899" stroke-width="1" fill="none" opacity="0.8"/>`,
      "#EC4899", 50, 50, 4
    )
  ),

  // ─────────────────────────────────────────────
  // DEPT 13: FINANCE — VAULT (green #84CC16)
  // ─────────────────────────────────────────────

  "VP-FIN": svg(
    vaultDoor(
      50, 50, 30, 16, "#0d1f00",
      // Trend arrow (VP = crown dial + golden ratio)
      `<path d="M38,54 L44,46 L50,52 L56,42 L62,42" stroke="#84CC16" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
       <polyline points="57,38 62,42 58,46" fill="#84CC16" stroke="#84CC16" stroke-width="1"/>`,
      true
    )
  ),

  "FPA-MGR": svg(
    vaultDoor(
      50, 52, 26, 12, "#0a1800",
      // Graph trend arrow inside
      `<path d="M36,60 L42,52 L48,57 L54,46 L60,46" stroke="#84CC16" stroke-width="1.8" fill="none" stroke-linecap="round"/>
       <polyline points="55,42 60,46 56,50" fill="#84CC16" stroke="#84CC16" stroke-width="1"/>
       <text x="50" y="72" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#84CC16" opacity="0.7">FP&amp;A</text>`,
      false
    )
  ),

  "FIN-ANALYST": svg(
    vaultDoor(
      50, 52, 26, 12, "#0a1800",
      // Spreadsheet grid inside
      `<rect x="38" y="44" width="24" height="16" rx="1" fill="none" stroke="#84CC16" stroke-width="0.8" opacity="0.7"/>
       <line x1="46" y1="44" x2="46" y2="60" stroke="#84CC16" stroke-width="0.6" opacity="0.5"/>
       <line x1="54" y1="44" x2="54" y2="60" stroke="#84CC16" stroke-width="0.6" opacity="0.5"/>
       <line x1="38" y1="49" x2="62" y2="49" stroke="#84CC16" stroke-width="0.6" opacity="0.5"/>
       <line x1="38" y1="54" x2="62" y2="54" stroke="#84CC16" stroke-width="0.6" opacity="0.5"/>
       <rect x="38" y="44" width="8" height="5" rx="0" fill="rgba(132,204,22,0.2)"/>`,
      false
    )
  ),

  "CONTROLLER": svg(
    vaultDoor(
      50, 52, 26, 12, "#0a1800",
      // Ledger parallel lines inside
      `<line x1="37" y1="46" x2="63" y2="46" stroke="#84CC16" stroke-width="1.2" opacity="0.8"/>
       <line x1="37" y1="50" x2="63" y2="50" stroke="#84CC16" stroke-width="0.9" opacity="0.6"/>
       <line x1="37" y1="54" x2="63" y2="54" stroke="#84CC16" stroke-width="0.9" opacity="0.6"/>
       <line x1="37" y1="58" x2="63" y2="58" stroke="#84CC16" stroke-width="0.9" opacity="0.6"/>
       <line x1="44" y1="44" x2="44" y2="60" stroke="#84CC16" stroke-width="0.7" opacity="0.4"/>
       <text x="50" y="66" text-anchor="middle" font-family="monospace" font-size="3" fill="#84CC16" opacity="0.7">LEDGER</text>`,
      false
    )
  ),

  "REV-REC": svg(
    vaultDoor(
      50, 52, 26, 12, "#0a1800",
      // Stylized dollar sign inside
      `<text x="50" y="54" text-anchor="middle" font-family="monospace" font-size="18" fill="#84CC16" opacity="0.7">$</text>
       <line x1="50" y1="42" x2="50" y2="64" stroke="#84CC16" stroke-width="1.2" opacity="0.5"/>`,
      false
    )
  ),

  "PROCUREMENT": svg(
    vaultDoor(
      50, 52, 26, 12, "#0a1800",
      // Shopping cart inside
      `<path d="M36,44 L39,44 L43,56 L59,56 L62,48 L41,48" stroke="#84CC16" stroke-width="1.3" fill="none" stroke-linecap="round"/>
       <circle cx="45" cy="59" r="2" fill="#84CC16" opacity="0.8"/>
       <circle cx="57" cy="59" r="2" fill="#84CC16" opacity="0.8"/>`,
      false
    )
  ),

  "EQUITY-ADMIN": svg(
    vaultDoor(
      50, 52, 26, 12, "#0a1800",
      // Pie chart inside
      `<circle cx="50" cy="52" r="10" fill="none" stroke="#84CC16" stroke-width="1" opacity="0.5"/>
       <path d="M50,52 L50,42 A10,10 0 0,1 59,57 Z" fill="#84CC16" opacity="0.7"/>
       <path d="M50,52 L59,57 A10,10 0 0,1 41,57 Z" fill="#84CC16" opacity="0.4"/>
       <path d="M50,52 L41,57 A10,10 0 0,1 50,42 Z" fill="#84CC16" opacity="0.2"/>`,
      false
    )
  ),

  // ─────────────────────────────────────────────
  // DEPT 14: LEGAL — SCALE (yellow #EAB308)
  // ─────────────────────────────────────────────

  "VP-LEGAL": svg(
    balanceScale(
      50, 82, 48, 12,
      // Left pan: nothing extra (perfectly balanced VP)
      ``,
      ``,
      // Base: thick book
      `<rect x="32" y="82" width="36" height="8" rx="2" fill="#1a1200" stroke="#EAB308" stroke-width="1.2"/>
       <line x1="34" y1="85" x2="66" y2="85" stroke="#EAB308" stroke-width="0.7" opacity="0.5"/>
       <line x1="34" y1="87.5" x2="66" y2="87.5" stroke="#EAB308" stroke-width="0.7" opacity="0.5"/>`,
      true
    )
  ),

  "PROD-COUNSEL": svg(
    balanceScale(
      50, 82, 42, 10,
      // Left pan: product box
      `<rect x="22" y="38" width="10" height="8" rx="1" fill="none" stroke="#EAB308" stroke-width="1"/>
       <line x1="22" y1="41" x2="32" y2="41" stroke="#EAB308" stroke-width="0.7" opacity="0.6"/>`,
      // Right pan: empty
      ``,
      `<rect x="34" y="82" width="32" height="6" rx="1.5" fill="#1a1200" stroke="#EAB308" stroke-width="1"/>`,
      false
    )
  ),

  "IP-COUNSEL": svg(
    balanceScale(
      50, 82, 42, 10,
      // Left pan: lightbulb (intellectual property)
      `<circle cx="27" cy="38" r="5" fill="none" stroke="#EAB308" stroke-width="1.2"/>
       <path d="M24,38 Q24,43 27,44 Q30,43 30,38" fill="none" stroke="#EAB308" stroke-width="0.8"/>
       <line x1="25" y1="45" x2="29" y2="45" stroke="#EAB308" stroke-width="1"/>`,
      ``,
      `<rect x="34" y="82" width="32" height="6" rx="1.5" fill="#1a1200" stroke="#EAB308" stroke-width="1"/>`,
      false
    )
  ),

  "CONTRACTS": svg(
    balanceScale(
      50, 82, 42, 10,
      // Left pan: document/scroll
      `<rect x="22" y="33" width="10" height="13" rx="1" fill="none" stroke="#EAB308" stroke-width="1.1"/>
       <line x1="24" y1="37" x2="30" y2="37" stroke="#EAB308" stroke-width="0.7"/>
       <line x1="24" y1="40" x2="30" y2="40" stroke="#EAB308" stroke-width="0.7"/>
       <line x1="24" y1="43" x2="28" y2="43" stroke="#EAB308" stroke-width="0.7"/>`,
      ``,
      `<rect x="34" y="82" width="32" height="6" rx="1.5" fill="#1a1200" stroke="#EAB308" stroke-width="1"/>`,
      false
    )
  ),

  "COMPLIANCE": svg(
    balanceScale(
      50, 82, 42, 10,
      // Left pan: checklist with green accents
      `<rect x="21" y="33" width="11" height="13" rx="1" fill="none" stroke="#EAB308" stroke-width="1"/>
       <line x1="27" y1="37" x2="30" y2="37" stroke="#EAB308" stroke-width="0.7"/>
       <line x1="27" y1="40.5" x2="30" y2="40.5" stroke="#EAB308" stroke-width="0.7"/>
       <line x1="27" y1="44" x2="30" y2="44" stroke="#EAB308" stroke-width="0.7"/>
       <path d="M23,36 L24.5,37.5 L26,35" stroke="#22c55e" stroke-width="1" fill="none"/>
       <path d="M23,39.5 L24.5,41 L26,38.5" stroke="#22c55e" stroke-width="1" fill="none"/>
       <path d="M23,43 L24.5,44.5 L26,42" stroke="#22c55e" stroke-width="1" fill="none"/>`,
      ``,
      `<rect x="34" y="82" width="32" height="6" rx="1.5" fill="#1a1200" stroke="#EAB308" stroke-width="1"/>`,
      false
    )
  ),

  "PARALEGAL": svg(
    balanceScale(
      50, 76, 38, 9,
      ``,
      ``,
      // Stack of books at base
      `<rect x="30" y="76" width="40" height="5" rx="1" fill="#1a1200" stroke="#EAB308" stroke-width="1"/>
       <rect x="32" y="71" width="36" height="5" rx="1" fill="#1a1200" stroke="#EAB308" stroke-width="1"/>
       <rect x="34" y="66" width="32" height="5" rx="1" fill="#1a1200" stroke="#EAB308" stroke-width="1"/>
       <line x1="50" y1="67" x2="50" y2="81" stroke="#EAB308" stroke-width="0.7" opacity="0.5"/>`,
      false
    )
  ),

  "PRIVACY": svg(
    balanceScale(
      50, 82, 42, 10,
      // Left pan: lock symbol
      `<rect x="23" y="38" width="8" height="7" rx="1" fill="none" stroke="#EAB308" stroke-width="1.2"/>
       <path d="M25,38 L25,35 Q27,32 29,35 L29,38" stroke="#EAB308" stroke-width="1" fill="none"/>
       <circle cx="27" cy="41.5" r="1.2" fill="#EAB308" opacity="0.7"/>`,
      // Right pan: hint of blue/security
      `<circle cx="73" cy="40" r="4" fill="none" stroke="#3b82f6" stroke-width="1" opacity="0.6"/>
       <path d="M71,40 Q73,36 75,40 L75,44 Q73,46 71,44 Z" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="0.7"/>`,
      `<rect x="34" y="82" width="32" height="6" rx="1.5" fill="#1a1200" stroke="#EAB308" stroke-width="1"/>`,
      false
    )
  ),

  // ─────────────────────────────────────────────
  // DEPT 15: IT OPS — SERVER_MIND (grey #64748B)
  // ─────────────────────────────────────────────

  "DIR-IT": svg(
    // Largest rack: 6 units, crown on top, director badge
    serverRack(
      50, 50, 6,
      // Display symbol: complex dashboard
      `<rect x="25" y="60" width="50" height="13" rx="1" fill="#0a1020" stroke="#64748B" stroke-width="0.5"/>
       <line x1="28" y1="64" x2="48" y2="64" stroke="#64748B" stroke-width="0.8" opacity="0.7"/>
       <line x1="28" y1="67" x2="44" y2="67" stroke="#64748B" stroke-width="0.8" opacity="0.5"/>
       <line x1="28" y1="70" x2="46" y2="70" stroke="#64748B" stroke-width="0.8" opacity="0.5"/>
       <rect x="52" y="62" width="8" height="9" rx="0.5" fill="rgba(100,116,139,0.2)" stroke="#64748B" stroke-width="0.5"/>
       <line x1="54" y1="65" x2="58" y2="65" stroke="#64748B" stroke-width="0.5"/>
       <line x1="54" y1="68" x2="58" y2="68" stroke="#64748B" stroke-width="0.5"/>`,
      // Crown on top + DIR badge
      `<path d="M40,16 L43,11 L50,14 L57,11 L60,16 Z" fill="#64748B" opacity="0.8"/>
       <rect x="34" y="83" width="32" height="8" rx="2" fill="rgba(100,116,139,0.2)" stroke="#64748B" stroke-width="0.8"/>
       <text x="50" y="89" text-anchor="middle" font-family="monospace" font-size="4" fill="#64748B">DIR-IT</text>`
    )
  ),

  "SYSADMIN": svg(
    serverRack(
      50, 50, 5,
      // Display: wrench/system icon
      `<line x1="28" y1="64" x2="52" y2="64" stroke="#64748B" stroke-width="0.8" opacity="0.6"/>
       <line x1="28" y1="67" x2="46" y2="67" stroke="#64748B" stroke-width="0.7" opacity="0.5"/>
       <text x="58" y="67" text-anchor="middle" font-size="6" fill="#64748B" opacity="0.8">⚙</text>`,
      // Wrench extending from side
      `<line x1="72" y1="35" x2="80" y2="28" stroke="#64748B" stroke-width="2" stroke-linecap="round"/>
       <circle cx="80" cy="26" r="3.5" fill="none" stroke="#64748B" stroke-width="1.5"/>
       <circle cx="72" cy="37" r="2.5" fill="none" stroke="#64748B" stroke-width="1.5"/>
       <text x="50" y="88" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#64748B" opacity="0.7">SYSADMIN</text>`
    )
  ),

  "IT-SUPPORT": svg(
    serverRack(
      50, 50, 4,
      // Display: help icon
      `<line x1="28" y1="63" x2="46" y2="63" stroke="#64748B" stroke-width="0.8" opacity="0.6"/>
       <circle cx="56" cy="64" r="5" fill="none" stroke="#64748B" stroke-width="1"/>
       <text x="56" y="66" text-anchor="middle" font-size="5" font-family="monospace" fill="#64748B">?</text>`,
      // Headset on top
      `<path d="M38,18 Q50,12 62,18" stroke="#64748B" stroke-width="1.5" fill="none"/>
       <rect x="36" y="18" width="5" height="6" rx="2" fill="none" stroke="#64748B" stroke-width="1.2"/>
       <rect x="59" y="18" width="5" height="6" rx="2" fill="none" stroke="#64748B" stroke-width="1.2"/>
       <line x1="41" y1="21" x2="43" y2="26" stroke="#64748B" stroke-width="1"/>
       <text x="50" y="88" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#64748B" opacity="0.7">IT-SUPPORT</text>`
    )
  ),

  "ENT-APPS": svg(
    serverRack(
      50, 50, 4,
      // Display: 4 app squares grid
      `<rect x="27" y="60" width="8" height="6" rx="1" fill="rgba(100,116,139,0.3)" stroke="#64748B" stroke-width="0.7"/>
       <rect x="37" y="60" width="8" height="6" rx="1" fill="rgba(100,116,139,0.3)" stroke="#64748B" stroke-width="0.7"/>
       <rect x="27" y="68" width="8" height="6" rx="1" fill="rgba(100,116,139,0.3)" stroke="#64748B" stroke-width="0.7"/>
       <rect x="37" y="68" width="8" height="6" rx="1" fill="rgba(100,116,139,0.3)" stroke="#64748B" stroke-width="0.7"/>
       <line x1="49" y1="62" x2="61" y2="62" stroke="#64748B" stroke-width="0.7" opacity="0.5"/>
       <line x1="49" y1="65" x2="57" y2="65" stroke="#64748B" stroke-width="0.7" opacity="0.5"/>
       <line x1="49" y1="68" x2="59" y2="68" stroke="#64748B" stroke-width="0.7" opacity="0.5"/>`,
      `<text x="50" y="88" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#64748B" opacity="0.7">ENT-APPS</text>`
    )
  ),

  "BI-ANALYST": svg(
    serverRack(
      50, 50, 4,
      // Display: dashboard/chart data vibe
      `<rect x="26" y="60" width="36" height="14" rx="1" fill="#050d1f" stroke="#64748B" stroke-width="0.5"/>
       <rect x="28" y="68" width="4" height="4" fill="#64748B" opacity="0.8"/>
       <rect x="34" y="64" width="4" height="8" fill="#64748B" opacity="0.6"/>
       <rect x="40" y="66" width="4" height="6" fill="#64748B" opacity="0.7"/>
       <rect x="46" y="62" width="4" height="10" fill="#64748B" opacity="0.5"/>
       <rect x="52" y="65" width="4" height="7" fill="#64748B" opacity="0.6"/>
       <polyline points="30,67 36,64 42,65 48,61 54,64" stroke="#0ea5e9" stroke-width="0.8" fill="none" opacity="0.8"/>`,
      `<text x="50" y="88" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#64748B" opacity="0.7">BI ANALYST</text>`
    )
  ),

  // ─────────────────────────────────────────────
  // DEPT 16: DEVREL — BROADCAST (violet #8B5CF6)
  // ─────────────────────────────────────────────

  "DIR-DEVREL": svg(
    satelliteDish(
      22, 58, 20,
      // Globe: many connection nodes
      `<circle cx="62" cy="32" r="14" fill="#1a0a2e" stroke="#8B5CF6" stroke-width="1.5"/>
       <ellipse cx="62" cy="32" rx="7" ry="14" fill="none" stroke="#8B5CF6" stroke-width="0.7" opacity="0.4"/>
       <line x1="48" y1="32" x2="76" y2="32" stroke="#8B5CF6" stroke-width="0.7" opacity="0.4"/>
       <circle cx="62" cy="22" r="2" fill="#8B5CF6" opacity="0.8"/>
       <circle cx="72" cy="28" r="1.5" fill="#8B5CF6" opacity="0.7"/>
       <circle cx="74" cy="36" r="1.5" fill="#8B5CF6" opacity="0.7"/>
       <circle cx="68" cy="44" r="1.5" fill="#8B5CF6" opacity="0.7"/>
       <circle cx="56" cy="44" r="1.5" fill="#8B5CF6" opacity="0.6"/>
       <circle cx="50" cy="36" r="1.5" fill="#8B5CF6" opacity="0.6"/>
       <circle cx="52" cy="26" r="1.5" fill="#8B5CF6" opacity="0.6"/>
       <line x1="62" y1="22" x2="72" y2="28" stroke="#8B5CF6" stroke-width="0.5" opacity="0.4"/>
       <line x1="72" y1="28" x2="74" y2="36" stroke="#8B5CF6" stroke-width="0.5" opacity="0.4"/>
       <line x1="74" y1="36" x2="68" y2="44" stroke="#8B5CF6" stroke-width="0.5" opacity="0.4"/>
       <line x1="62" y1="22" x2="52" y2="26" stroke="#8B5CF6" stroke-width="0.5" opacity="0.4"/>`,
      ``,
      "DIR-DEVREL"
    )
  ),

  "SR-DEV-ADV": svg(
    satelliteDish(
      22, 58, 18,
      // Globe: standard meridians
      `<circle cx="62" cy="32" r="14" fill="#1a0a2e" stroke="#8B5CF6" stroke-width="1.5"/>
       <ellipse cx="62" cy="32" rx="7" ry="14" fill="none" stroke="#8B5CF6" stroke-width="0.7" opacity="0.4"/>
       <line x1="48" y1="32" x2="76" y2="32" stroke="#8B5CF6" stroke-width="0.7" opacity="0.4"/>`,
      // Megaphone overlay on dish
      `<path d="M10,62 L16,58 L16,70 L10,66 Z" fill="none" stroke="#8B5CF6" stroke-width="1.2"/>
       <path d="M16,58 Q24,54 26,64 Q24,74 16,70" stroke="#8B5CF6" stroke-width="1" fill="rgba(139,92,246,0.2)"/>
       <line x1="6" y1="61" x2="10" y2="62" stroke="#8B5CF6" stroke-width="1"/>
       <line x1="6" y1="65" x2="10" y2="64.5" stroke="#8B5CF6" stroke-width="1"/>`,
      "SR-DEV-ADV"
    )
  ),

  "DRE": svg(
    satelliteDish(
      22, 58, 16,
      // Globe: toolbox icon inside (developer tooling)
      `<circle cx="62" cy="32" r="14" fill="#1a0a2e" stroke="#8B5CF6" stroke-width="1.5"/>
       <ellipse cx="62" cy="32" rx="7" ry="14" fill="none" stroke="#8B5CF6" stroke-width="0.7" opacity="0.4"/>
       <line x1="48" y1="32" x2="76" y2="32" stroke="#8B5CF6" stroke-width="0.7" opacity="0.4"/>
       <rect x="55" y="28" width="14" height="10" rx="1" fill="none" stroke="#8B5CF6" stroke-width="1"/>
       <rect x="57" y="26" width="10" height="3" rx="1" fill="none" stroke="#8B5CF6" stroke-width="0.8"/>
       <line x1="55" y1="32" x2="69" y2="32" stroke="#8B5CF6" stroke-width="0.7"/>`,
      ``,
      "DRE"
    )
  ),

  "DEV-COMMUNITY": svg(
    satelliteDish(
      22, 58, 16,
      // Globe: community nodes (circle of connected dots)
      `<circle cx="62" cy="32" r="14" fill="#1a0a2e" stroke="#8B5CF6" stroke-width="1.5"/>
       <ellipse cx="62" cy="32" rx="7" ry="14" fill="none" stroke="#8B5CF6" stroke-width="0.7" opacity="0.3"/>
       <circle cx="62" cy="24" r="2.5" fill="#8B5CF6" opacity="0.8"/>
       <circle cx="70" cy="30" r="2.5" fill="#8B5CF6" opacity="0.7"/>
       <circle cx="68" cy="40" r="2.5" fill="#8B5CF6" opacity="0.7"/>
       <circle cx="56" cy="40" r="2.5" fill="#8B5CF6" opacity="0.7"/>
       <circle cx="54" cy="30" r="2.5" fill="#8B5CF6" opacity="0.7"/>
       <line x1="62" y1="24" x2="70" y2="30" stroke="#8B5CF6" stroke-width="0.8" opacity="0.5"/>
       <line x1="70" y1="30" x2="68" y2="40" stroke="#8B5CF6" stroke-width="0.8" opacity="0.5"/>
       <line x1="68" y1="40" x2="56" y2="40" stroke="#8B5CF6" stroke-width="0.8" opacity="0.5"/>
       <line x1="56" y1="40" x2="54" y2="30" stroke="#8B5CF6" stroke-width="0.8" opacity="0.5"/>
       <line x1="54" y1="30" x2="62" y2="24" stroke="#8B5CF6" stroke-width="0.8" opacity="0.5"/>`,
      ``,
      "COMMUNITY"
    )
  ),

  // ─────────────────────────────────────────────
  // DEPT 17: PROGRAM MGMT — TIMELINE (teal #14B8A6)
  // ─────────────────────────────────────────────

  "DIR-PMO": svg(
    ganttChart(
      50, 50, 6, 5,
      // Master plan label
      `<text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#14B8A6" opacity="0.8">MASTER PLAN</text>`,
      "#14B8A6"
    )
  ),

  "SR-TPM": svg(
    ganttChart(
      50, 50, 5, 4,
      // Technical gear overlay on clock
      `<circle cx="75" cy="28" r="8" fill="#001a18" stroke="#14B8A6" stroke-width="1"/>
       <circle cx="75" cy="28" r="4" fill="none" stroke="#14B8A6" stroke-width="1.5"/>
       <line x1="75" y1="24" x2="75" y2="20" stroke="#14B8A6" stroke-width="1"/>
       <line x1="75" y1="32" x2="75" y2="36" stroke="#14B8A6" stroke-width="1"/>
       <line x1="71" y1="28" x2="67" y2="28" stroke="#14B8A6" stroke-width="1"/>
       <line x1="79" y1="28" x2="83" y2="28" stroke="#14B8A6" stroke-width="1"/>
       <text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#14B8A6" opacity="0.8">SR-TPM</text>`,
      "#14B8A6"
    )
  ),

  "TPM": svg(
    ganttChart(
      50, 50, 4, 3,
      `<text x="50" y="93" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#14B8A6" opacity="0.8">TPM</text>`,
      "#14B8A6"
    )
  ),

  "SCRUM": svg(makeScrumBody()),

  // ─────────────────────────────────────────────
  // DEPT 19: SPECIAL AGENTS — ORACLE (red #FF4444)
  // ─────────────────────────────────────────────

  "DISC-AGENT": svg(
    oracleOrbit(
      50, 50,
      [[12, 6], [22, 10], [32, 14]],
      // Center: magnifying glass (discovery)
      `<circle cx="48" cy="48" r="6" fill="none" stroke="#FF4444" stroke-width="2"/>
       <line x1="53" y1="53" x2="58" y2="58" stroke="#FF4444" stroke-width="2.5" stroke-linecap="round"/>
       <circle cx="47" cy="47" r="3" fill="rgba(255,68,68,0.15)"/>
       <text x="50" y="87" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#FF4444" opacity="0.8">DISCOVERY</text>`
    )
  ),

  "EST-AGENT": svg(
    oracleOrbit(
      50, 50,
      [[12, 5], [22, 9], [32, 13]],
      // Center: ruler/measure (estimation)
      `<rect x="42" y="47" width="16" height="6" rx="1" fill="none" stroke="#FF4444" stroke-width="1.5"/>
       <line x1="44" y1="47" x2="44" y2="50" stroke="#FF4444" stroke-width="1"/>
       <line x1="47" y1="47" x2="47" y2="49" stroke="#FF4444" stroke-width="0.8"/>
       <line x1="50" y1="47" x2="50" y2="50" stroke="#FF4444" stroke-width="1"/>
       <line x1="53" y1="47" x2="53" y2="49" stroke="#FF4444" stroke-width="0.8"/>
       <line x1="56" y1="47" x2="56" y2="50" stroke="#FF4444" stroke-width="1"/>
       <text x="50" y="87" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#FF4444" opacity="0.8">ESTIMATE</text>`
    )
  ),

  "DEMO-AGENT": svg(
    oracleOrbit(
      50, 50,
      [[12, 5], [22, 9], [32, 13]],
      // Center: play button triangle
      `<circle cx="50" cy="50" r="7" fill="rgba(255,68,68,0.2)" stroke="#FF4444" stroke-width="1.5"/>
       <polygon points="47,46 47,54 55,50" fill="#FF4444" opacity="0.9"/>
       <text x="50" y="87" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#FF4444" opacity="0.8">DEMO</text>`
    )
  ),

  "HANDOFF-AGENT": svg(
    oracleOrbit(
      50, 50,
      [[12, 5], [22, 9], [32, 13]],
      // Center: baton/hand pass
      `<path d="M43,53 L57,47" stroke="#FF4444" stroke-width="3" stroke-linecap="round"/>
       <circle cx="43" cy="53" r="3" fill="rgba(255,68,68,0.3)" stroke="#FF4444" stroke-width="1.2"/>
       <circle cx="57" cy="47" r="2" fill="#FF4444" opacity="0.8"/>
       <path d="M55,43 Q59,45 57,50" stroke="#FF4444" stroke-width="1" fill="none" opacity="0.6"/>
       <text x="50" y="87" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#FF4444" opacity="0.8">HANDOFF</text>`
    )
  ),

  "MAINT-AGENT": svg(
    oracleOrbit(
      50, 50,
      [[12, 5], [22, 9], [32, 13]],
      // Center: wrench
      `<line x1="46" y1="54" x2="54" y2="46" stroke="#FF4444" stroke-width="2.5" stroke-linecap="round"/>
       <circle cx="44" cy="56" r="3.5" fill="none" stroke="#FF4444" stroke-width="1.5"/>
       <circle cx="56" cy="44" r="3.5" fill="none" stroke="#FF4444" stroke-width="1.5"/>
       <text x="50" y="87" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#FF4444" opacity="0.8">MAINTAIN</text>`
    )
  ),

  "INNOVATION-AGENT": svg(
    // Most rings of all special agents
    oracleOrbit(
      50, 50,
      [[10, 5], [18, 8], [26, 12], [34, 16]],
      // Center: lightbulb
      `<circle cx="50" cy="47" r="6" fill="none" stroke="#FF4444" stroke-width="1.8"/>
       <path d="M47,47 Q47,52 50,53 Q53,52 53,47" fill="rgba(255,68,68,0.2)" stroke="#FF4444" stroke-width="0.8"/>
       <line x1="48" y1="54" x2="52" y2="54" stroke="#FF4444" stroke-width="1.2"/>
       <line x1="48.5" y1="56" x2="51.5" y2="56" stroke="#FF4444" stroke-width="1"/>
       <line x1="50" y1="41" x2="50" y2="38" stroke="#FF4444" stroke-width="1"/>
       <text x="50" y="87" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#FF4444" opacity="0.8">INNOVATE</text>`
    )
  ),

  "RETRO-AGENT": svg(
    oracleOrbit(
      50, 50,
      [[12, 5], [22, 9], [32, 13]],
      // Center: backward arrow (look back)
      `<circle cx="50" cy="50" r="7" fill="rgba(255,68,68,0.15)" stroke="#FF4444" stroke-width="1.2"/>
       <path d="M56,47 Q52,44 48,47 L48,50" stroke="#FF4444" stroke-width="2" fill="none" stroke-linecap="round"/>
       <polygon points="45,47 48,44 48,50" fill="#FF4444" opacity="0.9"/>
       <text x="50" y="87" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#FF4444" opacity="0.8">RETRO</text>`
    )
  ),

  "ONBOARD-AGENT": svg(
    oracleOrbit(
      50, 50,
      [[12, 5], [22, 9], [32, 13]],
      // Center: door/welcome symbol
      `<rect x="44" y="43" width="12" height="16" rx="1.5" fill="none" stroke="#FF4444" stroke-width="1.5"/>
       <rect x="44" y="43" width="8" height="16" rx="1.5" fill="rgba(255,68,68,0.15)"/>
       <circle cx="52.5" cy="51" r="1.2" fill="#FF4444" opacity="0.8"/>
       <path d="M52,46 L55,44 L55,58" stroke="#FF4444" stroke-width="0.8" fill="none" opacity="0.5" stroke-dasharray="2,1"/>
       <text x="50" y="87" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#FF4444" opacity="0.8">ONBOARD</text>`
    )
  ),

  "NEXUS-ORCHESTRATOR": svg(makeNexusOrchestratorBody()),

  // ─────────────────────────────────────────────
  // DEPT 20: DOCUMENTATION — CODEX (amber #D97706)
  // ─────────────────────────────────────────────

  "SR-TW": svg(
    codexBook(
      50, 47, 5,
      // Golden quill — most ornate
      `<path d="M62,22 Q72,12 75,8 Q70,16 65,24 Q68,20 72,18 Q66,26 60,30 L58,35 L56,33 Z" fill="#D97706" opacity="0.85"/>
       <path d="M58,35 Q57,38 55,40" stroke="#D97706" stroke-width="1" fill="none"/>
       <path d="M62,22 Q60,26 60,30" stroke="#D97706" stroke-width="0.8" fill="none" opacity="0.5"/>
       <circle cx="74" cy="9" r="2" fill="#D97706" opacity="0.6"/>`,
      "SENIOR"
    )
  ),

  "TW": svg(
    codexBook(
      50, 48, 4,
      // Standard quill
      `<path d="M62,24 Q70,16 72,12 Q68,18 63,26 Q65,23 68,21 Q64,28 60,32 L58,36 L57,34 Z" fill="#D97706" opacity="0.8"/>
       <path d="M58,36 Q57,39 56,41" stroke="#D97706" stroke-width="1" fill="none"/>`,
      ""
    )
  ),

  "KB-MGR": svg(
    codexBook(
      50, 47, 5,
      // Key on cover (knowledge base = key to knowledge)
      `<circle cx="38" cy="36" r="5" fill="none" stroke="#D97706" stroke-width="1.5"/>
       <circle cx="38" cy="36" r="2" fill="none" stroke="#D97706" stroke-width="1"/>
       <line x1="43" y1="36" x2="50" y2="36" stroke="#D97706" stroke-width="1.5"/>
       <line x1="48" y1="36" x2="48" y2="39" stroke="#D97706" stroke-width="1.2"/>
       <line x1="50" y1="36" x2="50" y2="39" stroke="#D97706" stroke-width="1.2"/>
       <text x="50" y="86" text-anchor="middle" font-family="monospace" font-size="3.5" fill="#D97706" opacity="0.8">KB-MGR</text>`,
      "KEY"
    )
  ),
};

for (const [code, content] of Object.entries(avatars)) {
  writeFileSync(join(OUT, `${code}.svg`), content);
}
console.log(`✅ Batch 8: ${Object.keys(avatars).length} avatars done`);
console.log("Generated:", Object.keys(avatars).join(", "));
