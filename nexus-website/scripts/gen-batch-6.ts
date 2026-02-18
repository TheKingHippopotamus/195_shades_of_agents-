/**
 * gen-batch-6.ts
 * Generates SVG avatars for:
 *   Dept 06 — Data Science & AI/ML  (Neural Network topologies, #00FF88)
 *   Dept 08 — Security               (Hooded shadow figures, #EF4444)
 */

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const OUT_DIR =
  "/Users/kinghippo/Documents/NEXUS_AI/nexus-website/public/brand/avatars/agents";

mkdirSync(OUT_DIR, { recursive: true });

function write(code: string, svg: string) {
  const path = join(OUT_DIR, `${code}.svg`);
  writeFileSync(path, svg, "utf-8");
  console.log(`  Wrote ${code}.svg`);
}

// ─────────────────────────────────────────────
//  SHARED HELPERS
// ─────────────────────────────────────────────
const svgWrap = (inner: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
${inner}
</svg>`;

// Neural node helper
const node = (cx: number, cy: number, r: number, color: string, opacity = 1) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" opacity="${opacity}"/>`;

// Neural edge helper
const edge = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: string,
  opacity = 0.5,
  width = 0.8
) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" opacity="${opacity}"/>`;

// Glow filter for neural agents
const glowFilter = (id: string, color: string) => `
  <defs>
    <filter id="${id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <radialGradient id="bg-${id}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0a1a0f"/>
      <stop offset="100%" stop-color="#040c07"/>
    </radialGradient>
  </defs>
  <rect width="100" height="100" fill="url(#bg-${id})" rx="8"/>`;

// ─────────────────────────────────────────────
//  DEPT 06 — DATA SCIENCE & AI/ML
//  Color: #00FF88 (neon green)
// ─────────────────────────────────────────────
const G = "#00FF88";
const Gd = "#00CC66"; // dim green
const Gf = "#00FF88"; // full green

console.log("\n=== DEPT 06 — Data Science & AI/ML ===");

// ── VP-AI ────────────────────────────────────
// Grand Neural Network: large central hub + 3 rings (4 + 8 + 12 nodes)
{
  const ring1 = Array.from({ length: 4 }, (_, i) => {
    const a = (i / 4) * Math.PI * 2;
    return { x: 50 + 14 * Math.cos(a), y: 50 + 14 * Math.sin(a) };
  });
  const ring2 = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2;
    return { x: 50 + 26 * Math.cos(a), y: 50 + 26 * Math.sin(a) };
  });
  const ring3 = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2;
    return { x: 50 + 39 * Math.cos(a), y: 50 + 39 * Math.sin(a) };
  });

  const edges: string[] = [];
  // hub → ring1
  ring1.forEach((n) => edges.push(edge(50, 50, n.x, n.y, G, 0.7, 1.0)));
  // ring1 → ring2
  ring1.forEach((n1) =>
    ring2.forEach((n2) => {
      const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
      if (dist < 18) edges.push(edge(n1.x, n1.y, n2.x, n2.y, G, 0.45, 0.7));
    })
  );
  // ring2 → ring3
  ring2.forEach((n2) =>
    ring3.forEach((n3) => {
      const dist = Math.hypot(n2.x - n3.x, n2.y - n3.y);
      if (dist < 16) edges.push(edge(n2.x, n2.y, n3.x, n3.y, Gd, 0.35, 0.6));
    })
  );
  // ring1 cross-connects
  for (let i = 0; i < ring1.length; i++) {
    for (let j = i + 1; j < ring1.length; j++) {
      edges.push(edge(ring1[i].x, ring1[i].y, ring1[j].x, ring1[j].y, G, 0.4, 0.6));
    }
  }

  const nodes: string[] = [];
  nodes.push(node(50, 50, 8, G, 1));          // hub
  nodes.push(`<circle cx="50" cy="50" r="10" fill="none" stroke="${G}" stroke-width="1" opacity="0.4"/>`);
  ring1.forEach((n) => nodes.push(node(n.x, n.y, 3.5, G, 0.95)));
  ring2.forEach((n) => nodes.push(node(n.x, n.y, 2.5, G, 0.8)));
  ring3.forEach((n) => nodes.push(node(n.x, n.y, 1.8, Gd, 0.65)));

  const badge = `
    <rect x="36" y="4" width="28" height="10" rx="3" fill="#001a0a" stroke="${G}" stroke-width="0.8"/>
    <text x="50" y="11.5" font-family="monospace" font-size="5.5" fill="${G}" text-anchor="middle" letter-spacing="1">VP·AI</text>`;

  write(
    "VP-AI",
    svgWrap(`
  ${glowFilter("vp-ai", G)}
  <g filter="url(#vp-ai)">
    ${edges.join("\n    ")}
    ${nodes.join("\n    ")}
  </g>
  ${badge}`)
  );
}

// ── DIR-DS ───────────────────────────────────
// Scatter plot topology with regression line
{
  const pts = [
    { x: 20, y: 70 }, { x: 25, y: 65 }, { x: 28, y: 72 }, { x: 32, y: 60 },
    { x: 35, y: 55 }, { x: 38, y: 62 }, { x: 42, y: 50 }, { x: 45, y: 48 },
    { x: 48, y: 55 }, { x: 52, y: 42 }, { x: 55, y: 38 }, { x: 58, y: 44 },
    { x: 62, y: 35 }, { x: 65, y: 30 }, { x: 68, y: 36 }, { x: 72, y: 25 },
    { x: 75, y: 28 }, { x: 78, y: 22 },
  ];
  const outliers = [
    { x: 30, y: 40 }, { x: 60, y: 70 }, { x: 22, y: 28 },
  ];

  // connect nearby scatter points
  const scatterEdges: string[] = [];
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
      if (d < 12) scatterEdges.push(edge(pts[i].x, pts[i].y, pts[j].x, pts[j].y, Gd, 0.3, 0.5));
    }
  }

  const svg = `
  ${glowFilter("dir-ds", G)}
  <!-- Axis lines -->
  <line x1="15" y1="80" x2="85" y2="80" stroke="${G}" stroke-width="0.6" opacity="0.3"/>
  <line x1="15" y1="80" x2="15" y2="15" stroke="${G}" stroke-width="0.6" opacity="0.3"/>
  <!-- Tick marks -->
  ${[20, 30, 40, 50, 60, 70, 80].map(x => `<line x1="${x}" y1="78" x2="${x}" y2="82" stroke="${G}" stroke-width="0.4" opacity="0.25"/>`).join("")}
  ${[20, 30, 40, 50, 60, 70].map(y => `<line x1="13" y1="${y}" x2="17" y2="${y}" stroke="${G}" stroke-width="0.4" opacity="0.25"/>`).join("")}
  <!-- Regression line -->
  <line x1="15" y1="76" x2="85" y2="18" stroke="${G}" stroke-width="1.2" opacity="0.5" stroke-dasharray="3,2"/>
  <!-- Confidence band -->
  <path d="M15,80 L85,22 L85,14 L15,68 Z" fill="${G}" opacity="0.05"/>
  <!-- Scatter edges -->
  <g filter="url(#dir-ds)">
    ${scatterEdges.join("\n    ")}
    ${pts.map((p) => node(p.x, p.y, 2.2, G, 0.85)).join("\n    ")}
    ${outliers.map((p) => `<circle cx="${p.x}" cy="${p.y}" r="2" fill="none" stroke="${G}" stroke-width="0.8" opacity="0.6"/>`).join("\n    ")}
  </g>
  <!-- Badge -->
  <rect x="29" y="86" width="42" height="9" rx="3" fill="#001a0a" stroke="${G}" stroke-width="0.7"/>
  <text x="50" y="92.5" font-family="monospace" font-size="4.5" fill="${G}" text-anchor="middle" letter-spacing="0.5">DIR · DATA SCI</text>`;

  write("DIR-DS", svgWrap(svg));
}

// ── DIR-MLE ──────────────────────────────────
// Neural layers topology: input (4) → hidden1 (6) → hidden2 (6) → output (3)
{
  const layers = [
    { x: 18, nodes: [22, 34, 46, 58, 70, 78].slice(1, 5) },   // input: 4
    { x: 38, nodes: [18, 30, 42, 54, 66, 78] },               // hidden1: 6
    { x: 58, nodes: [18, 30, 42, 54, 66, 78] },               // hidden2: 6
    { x: 78, nodes: [30, 50, 70] },                            // output: 3
  ];

  const allEdges: string[] = [];
  const allNodes: string[] = [];

  for (let li = 0; li < layers.length - 1; li++) {
    const la = layers[li];
    const lb = layers[li + 1];
    la.nodes.forEach((ya) => {
      lb.nodes.forEach((yb) => {
        const opacity = 0.18 + Math.random() * 0.25;
        allEdges.push(edge(la.x, ya, lb.x, yb, G, opacity, 0.6));
      });
    });
  }

  layers.forEach((l, li) => {
    const isOut = li === layers.length - 1;
    l.nodes.forEach((y) => {
      const r = isOut ? 4 : li === 0 ? 3 : 2.5;
      const op = isOut ? 1 : 0.85;
      allNodes.push(node(l.x, y, r, G, op));
      if (isOut) allNodes.push(`<circle cx="${l.x}" cy="${y}" r="${r + 1.5}" fill="none" stroke="${G}" stroke-width="0.6" opacity="0.4"/>`);
    });
  });

  // Layer labels
  const labels = [
    { x: 18, label: "IN" },
    { x: 38, label: "H1" },
    { x: 58, label: "H2" },
    { x: 78, label: "OUT" },
  ];

  const svg = `
  ${glowFilter("dir-mle", G)}
  <!-- Activation flow arrows -->
  <defs>
    <marker id="arr-mle" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
      <path d="M0,0 L4,2 L0,4 Z" fill="${G}" opacity="0.6"/>
    </marker>
  </defs>
  <line x1="26" y1="50" x2="32" y2="50" stroke="${G}" stroke-width="0.8" opacity="0.5" marker-end="url(#arr-mle)"/>
  <line x1="46" y1="50" x2="52" y2="50" stroke="${G}" stroke-width="0.8" opacity="0.5" marker-end="url(#arr-mle)"/>
  <line x1="66" y1="50" x2="72" y2="50" stroke="${G}" stroke-width="0.8" opacity="0.5" marker-end="url(#arr-mle)"/>
  <g filter="url(#dir-mle)">
    ${allEdges.join("\n    ")}
    ${allNodes.join("\n    ")}
  </g>
  ${labels.map((l) => `<text x="${l.x}" y="90" font-family="monospace" font-size="3.5" fill="${G}" text-anchor="middle" opacity="0.6">${l.label}</text>`).join("")}
  <rect x="25" y="4" width="50" height="8" rx="2" fill="#001a0a" stroke="${G}" stroke-width="0.7"/>
  <text x="50" y="9.8" font-family="monospace" font-size="4" fill="${G}" text-anchor="middle" letter-spacing="0.3">DIR · ML ENG</text>`;

  write("DIR-MLE", svgWrap(svg));
}

// ── DIR-AIE ──────────────────────────────────
// Branching tree topology: root → branches → leaves
{
  const root = { x: 50, y: 88 };
  const level1 = [
    { x: 25, y: 68 }, { x: 50, y: 68 }, { x: 75, y: 68 },
  ];
  const level2 = [
    { x: 12, y: 46 }, { x: 25, y: 46 }, { x: 38, y: 46 },
    { x: 44, y: 46 }, { x: 56, y: 46 },
    { x: 62, y: 46 }, { x: 75, y: 46 }, { x: 88, y: 46 },
  ];
  const level3 = [
    { x: 8, y: 25 }, { x: 16, y: 25 }, { x: 24, y: 25 }, { x: 32, y: 25 },
    { x: 40, y: 25 }, { x: 50, y: 25 }, { x: 60, y: 25 },
    { x: 68, y: 25 }, { x: 76, y: 25 }, { x: 84, y: 25 }, { x: 92, y: 25 },
  ];
  const parents2 = [0, 0, 1, 1, 2, 2, 2, 2];
  const parents3 = [0, 0, 1, 2, 3, 4, 4, 5, 6, 6, 7];

  const treeEdges: string[] = [];
  level1.forEach((n) => treeEdges.push(edge(root.x, root.y, n.x, n.y, G, 0.7, 1.2)));
  level2.forEach((n, i) => treeEdges.push(edge(level1[parents2[i]].x, level1[parents2[i]].y, n.x, n.y, G, 0.55, 0.9)));
  level3.forEach((n, i) => treeEdges.push(edge(level2[parents3[i]].x, level2[parents3[i]].y, n.x, n.y, Gd, 0.4, 0.6)));

  const svg = `
  ${glowFilter("dir-aie", G)}
  <g filter="url(#dir-aie)">
    ${treeEdges.join("\n    ")}
    ${node(root.x, root.y, 5, G, 1)}
    <circle cx="${root.x}" cy="${root.y}" r="7" fill="none" stroke="${G}" stroke-width="0.8" opacity="0.4"/>
    ${level1.map((n) => node(n.x, n.y, 3.5, G, 0.9)).join("\n    ")}
    ${level2.map((n) => node(n.x, n.y, 2.5, G, 0.75)).join("\n    ")}
    ${level3.map((n) => node(n.x, n.y, 1.5, Gd, 0.6)).join("\n    ")}
  </g>
  <rect x="26" y="4" width="48" height="8" rx="2" fill="#001a0a" stroke="${G}" stroke-width="0.7"/>
  <text x="50" y="9.8" font-family="monospace" font-size="4" fill="${G}" text-anchor="middle" letter-spacing="0.3">DIR · AI ENG</text>`;

  write("DIR-AIE", svgWrap(svg));
}

// ── STAFF-DS ─────────────────────────────────
// Complex scatter cluster + outlier nodes, senior badge
{
  const mainCluster = Array.from({ length: 22 }, (_, i) => {
    const angle = (i / 22) * Math.PI * 2;
    const r = 10 + Math.random() * 18;
    return {
      x: 50 + r * Math.cos(angle),
      y: 50 + r * Math.sin(angle),
      r: 1.5 + Math.random() * 1.5,
    };
  });
  const outliers = [
    { x: 12, y: 20, r: 2 }, { x: 88, y: 18, r: 1.8 },
    { x: 15, y: 82, r: 2.2 }, { x: 85, y: 80, r: 1.6 },
  ];

  const clusterEdges: string[] = [];
  for (let i = 0; i < mainCluster.length; i++) {
    for (let j = i + 1; j < mainCluster.length; j++) {
      const d = Math.hypot(mainCluster[i].x - mainCluster[j].x, mainCluster[i].y - mainCluster[j].y);
      if (d < 15) clusterEdges.push(edge(mainCluster[i].x, mainCluster[i].y, mainCluster[j].x, mainCluster[j].y, G, 0.25, 0.5));
    }
  }
  // outlier connections to nearest cluster node
  outliers.forEach((o) => {
    let nearest = mainCluster[0];
    let minD = Infinity;
    mainCluster.forEach((m) => {
      const d = Math.hypot(o.x - m.x, o.y - m.y);
      if (d < minD) { minD = d; nearest = m; }
    });
    clusterEdges.push(edge(o.x, o.y, nearest.x, nearest.y, G, 0.3, 0.6));
  });

  const svg = `
  ${glowFilter("staff-ds", G)}
  <g filter="url(#staff-ds)">
    ${clusterEdges.join("\n    ")}
    ${mainCluster.map((p) => node(p.x, p.y, p.r, G, 0.8)).join("\n    ")}
    ${outliers.map((p) => `<circle cx="${p.x}" cy="${p.y}" r="${p.r}" fill="none" stroke="${G}" stroke-width="1" opacity="0.7"/><circle cx="${p.x}" cy="${p.y}" r="${p.r * 0.4}" fill="${G}" opacity="0.8"/>`).join("\n    ")}
  </g>
  <!-- Senior badge -->
  <rect x="28" y="4" width="44" height="8" rx="2" fill="#001a0a" stroke="${G}" stroke-width="0.7"/>
  <text x="50" y="9.8" font-family="monospace" font-size="4" fill="${G}" text-anchor="middle" letter-spacing="0.3">STAFF · DS</text>`;

  write("STAFF-DS", svgWrap(svg));
}

// ── SR-DS ────────────────────────────────────
// Medium complexity cluster, well-connected
{
  const pts = Array.from({ length: 14 }, (_, i) => {
    const angle = (i / 14) * Math.PI * 2;
    const r = 8 + (i % 3) * 8;
    return { x: 50 + r * Math.cos(angle), y: 50 + r * Math.sin(angle) };
  });

  const edgesArr: string[] = [];
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
      if (d < 22) edgesArr.push(edge(pts[i].x, pts[i].y, pts[j].x, pts[j].y, G, 0.35, 0.65));
    }
  }

  const svg = `
  ${glowFilter("sr-ds", G)}
  <g filter="url(#sr-ds)">
    ${edgesArr.join("\n    ")}
    ${node(50, 50, 4, G, 1)}
    ${pts.map((p, i) => node(p.x, p.y, i < 5 ? 2.8 : 2, G, 0.8)).join("\n    ")}
  </g>
  <rect x="32" y="4" width="36" height="8" rx="2" fill="#001a0a" stroke="${G}" stroke-width="0.7"/>
  <text x="50" y="9.8" font-family="monospace" font-size="4.5" fill="${G}" text-anchor="middle">SR · DS</text>`;

  write("SR-DS", svgWrap(svg));
}

// ── DS ───────────────────────────────────────
// Standard cluster, clean connections
{
  const pts = Array.from({ length: 10 }, (_, i) => {
    const angle = (i / 10) * Math.PI * 2;
    const r = i % 2 === 0 ? 14 : 26;
    return { x: 50 + r * Math.cos(angle), y: 50 + r * Math.sin(angle) };
  });

  const edgesArr: string[] = [];
  for (let i = 0; i < pts.length; i++) {
    edgesArr.push(edge(50, 50, pts[i].x, pts[i].y, G, 0.4, 0.7));
    edgesArr.push(edge(pts[i].x, pts[i].y, pts[(i + 1) % pts.length].x, pts[(i + 1) % pts.length].y, G, 0.3, 0.6));
  }

  const svg = `
  ${glowFilter("ds", G)}
  <g filter="url(#ds)">
    ${edgesArr.join("\n    ")}
    ${node(50, 50, 4.5, G, 1)}
    ${pts.map((p, i) => node(p.x, p.y, i % 2 === 0 ? 3 : 2, G, 0.8)).join("\n    ")}
  </g>
  <rect x="37" y="4" width="26" height="8" rx="2" fill="#001a0a" stroke="${G}" stroke-width="0.7"/>
  <text x="50" y="9.8" font-family="monospace" font-size="5" fill="${G}" text-anchor="middle">D · S</text>`;

  write("DS", svgWrap(svg));
}

// ── SR-MLE ───────────────────────────────────
// Layered network with activation arrows between layers
{
  const layers2 = [
    { x: 20, ys: [28, 40, 52, 64, 76] },
    { x: 42, ys: [22, 36, 50, 64, 78] },
    { x: 64, ys: [28, 42, 56, 70] },
    { x: 82, ys: [36, 50, 64] },
  ];

  const edgesArr: string[] = [];
  const nodesArr: string[] = [];

  for (let li = 0; li < layers2.length - 1; li++) {
    const la = layers2[li];
    const lb = layers2[li + 1];
    la.ys.forEach((ya) => {
      lb.ys.forEach((yb) => {
        const w = 0.3 + Math.random() * 0.4;
        edgesArr.push(edge(la.x, ya, lb.x, yb, G, w * 0.6, 0.55));
      });
    });
  }

  layers2.forEach((l, li) => {
    l.ys.forEach((y) => {
      const r = li === 0 ? 2.8 : li === layers2.length - 1 ? 3.5 : 2.5;
      nodesArr.push(node(l.x, y, r, G, 0.85));
    });
  });

  // Activation squiggle between layers
  const acts = [
    `<path d="M28,50 Q31,45 33,50 Q35,55 38,50" stroke="${G}" stroke-width="0.7" fill="none" opacity="0.5"/>`,
    `<path d="M50,50 Q53,45 55,50 Q57,55 60,50" stroke="${G}" stroke-width="0.7" fill="none" opacity="0.5"/>`,
    `<path d="M70,50 Q73,45 75,50 Q77,55 80,50" stroke="${G}" stroke-width="0.7" fill="none" opacity="0.5"/>`,
  ];

  const svg = `
  ${glowFilter("sr-mle", G)}
  <g filter="url(#sr-mle)">
    ${edgesArr.join("\n    ")}
    ${nodesArr.join("\n    ")}
    ${acts.join("\n    ")}
  </g>
  <rect x="28" y="4" width="44" height="8" rx="2" fill="#001a0a" stroke="${G}" stroke-width="0.7"/>
  <text x="50" y="9.8" font-family="monospace" font-size="4.5" fill="${G}" text-anchor="middle">SR · MLE</text>`;

  write("SR-MLE", svgWrap(svg));
}

// ── MLE ──────────────────────────────────────
// Simpler layered network, fewer nodes
{
  const layers3 = [
    { x: 22, ys: [32, 50, 68] },
    { x: 50, ys: [26, 44, 62, 76] },
    { x: 78, ys: [36, 50, 64] },
  ];

  const edgesArr: string[] = [];
  const nodesArr: string[] = [];

  for (let li = 0; li < layers3.length - 1; li++) {
    const la = layers3[li];
    const lb = layers3[li + 1];
    la.ys.forEach((ya) => {
      lb.ys.forEach((yb) => {
        edgesArr.push(edge(la.x, ya, lb.x, yb, G, 0.35, 0.65));
      });
    });
  }

  layers3.forEach((l, li) => {
    l.ys.forEach((y) => {
      const r = li === 1 ? 3 : 2.5;
      nodesArr.push(node(l.x, y, r, G, 0.85));
    });
  });

  const svg = `
  ${glowFilter("mle", G)}
  <g filter="url(#mle)">
    ${edgesArr.join("\n    ")}
    ${nodesArr.join("\n    ")}
  </g>
  <rect x="35" y="4" width="30" height="8" rx="2" fill="#001a0a" stroke="${G}" stroke-width="0.7"/>
  <text x="50" y="9.8" font-family="monospace" font-size="5" fill="${G}" text-anchor="middle">MLE</text>`;

  write("MLE", svgWrap(svg));
}

// ── SR-AIE ───────────────────────────────────
// Knowledge graph topology — nodes with labeled edges
{
  const knodes = [
    { x: 50, y: 48, label: "AI", r: 5 },
    { x: 24, y: 28, label: "NLP", r: 3.5 },
    { x: 76, y: 28, label: "CV", r: 3.5 },
    { x: 20, y: 62, label: "RL", r: 3 },
    { x: 80, y: 62, label: "GNN", r: 3 },
    { x: 38, y: 78, label: "SYS", r: 3 },
    { x: 62, y: 78, label: "OPS", r: 3 },
    { x: 50, y: 18, label: "LLM", r: 3.5 },
  ];

  const kEdgeDefs = [
    [0, 1, "uses"], [0, 2, "uses"], [0, 3, "trains"],
    [0, 4, "graphs"], [0, 5, "serves"], [0, 6, "deploys"],
    [0, 7, "powers"], [1, 7, "feeds"], [2, 7, "feeds"],
    [3, 5, "signals"], [4, 6, "monitors"],
  ];

  const gedges: string[] = [];
  const glabels: string[] = [];

  kEdgeDefs.forEach(([ai, bi, lbl]) => {
    const a = knodes[ai as number];
    const b = knodes[bi as number];
    gedges.push(edge(a.x, a.y, b.x, b.y, G, 0.4, 0.7));
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    glabels.push(`<text x="${mx}" y="${my}" font-family="monospace" font-size="3" fill="${G}" text-anchor="middle" opacity="0.45">${lbl}</text>`);
  });

  const svg = `
  ${glowFilter("sr-aie", G)}
  <g filter="url(#sr-aie)">
    ${gedges.join("\n    ")}
    ${knodes.map((n) => `${node(n.x, n.y, n.r, G, 0.9)}<text x="${n.x}" y="${n.y + 1.2}" font-family="monospace" font-size="${n.r < 4 ? 2.8 : 3.5}" fill="#001a0a" text-anchor="middle" font-weight="bold">${n.label}</text>`).join("\n    ")}
    ${glabels.join("\n    ")}
  </g>
  <rect x="28" y="88" width="44" height="8" rx="2" fill="#001a0a" stroke="${G}" stroke-width="0.7"/>
  <text x="50" y="93.8" font-family="monospace" font-size="4" fill="${G}" text-anchor="middle">SR · AI ENG</text>`;

  write("SR-AIE", svgWrap(svg));
}

// ── AI-RES ───────────────────────────────────
// Research topology: hypothesis nodes with ? inside, experimental connections
{
  const hypoNodes = [
    { x: 50, y: 50, r: 7, main: true },
    { x: 26, y: 32, r: 5 }, { x: 74, y: 32, r: 5 },
    { x: 20, y: 65, r: 4 }, { x: 80, y: 65, r: 4 },
    { x: 50, y: 82, r: 4.5 },
    { x: 40, y: 18, r: 3 }, { x: 60, y: 18, r: 3 },
  ];

  const hypoEdges = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
    [1, 6], [2, 7], [1, 3], [2, 4], [3, 5], [4, 5],
  ];

  // Dashed experimental connections
  const expEdges = hypoEdges.map(([ai, bi]) => {
    const a = hypoNodes[ai];
    const b = hypoNodes[bi];
    return `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="${G}" stroke-width="0.65" opacity="0.4" stroke-dasharray="2,2"/>`;
  });

  const svg = `
  ${glowFilter("ai-res", G)}
  <g filter="url(#ai-res)">
    ${expEdges.join("\n    ")}
    ${hypoNodes.map((n) => `
      <circle cx="${n.x}" cy="${n.y}" r="${n.r}" fill="#001a0a" stroke="${G}" stroke-width="${n.main ? 1.2 : 0.9}" opacity="0.9"/>
      <text x="${n.x}" y="${n.y + n.r * 0.45}" font-family="monospace" font-size="${n.r * 0.9}" fill="${G}" text-anchor="middle" opacity="0.9">?</text>
    `).join("")}
  </g>
  <!-- Starburst for "hypothesis confirmed" -->
  ${Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2;
    const x1 = 50 + 9 * Math.cos(a);
    const y1 = 50 + 9 * Math.sin(a);
    const x2 = 50 + 13 * Math.cos(a);
    const y2 = 50 + 13 * Math.sin(a);
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${G}" stroke-width="0.6" opacity="0.3"/>`;
  }).join("")}
  <rect x="29" y="4" width="42" height="8" rx="2" fill="#001a0a" stroke="${G}" stroke-width="0.7"/>
  <text x="50" y="9.8" font-family="monospace" font-size="4.5" fill="${G}" text-anchor="middle">AI · RES</text>`;

  write("AI-RES", svgWrap(svg));
}

// ── AI-ETHICS ────────────────────────────────
// Balanced/symmetrical network, scales in node arrangement, gold accent
{
  const gold = "#EAB308";
  const leftNodes = [
    { x: 24, y: 30 }, { x: 18, y: 50 }, { x: 24, y: 70 },
    { x: 36, y: 40 }, { x: 36, y: 60 },
  ];
  const rightNodes = [
    { x: 76, y: 30 }, { x: 82, y: 50 }, { x: 76, y: 70 },
    { x: 64, y: 40 }, { x: 64, y: 60 },
  ];
  const centerNodes = [
    { x: 50, y: 22 }, { x: 50, y: 50 }, { x: 50, y: 78 },
  ];

  const symmEdges: string[] = [];
  // Connect left to center
  leftNodes.forEach((l) => symmEdges.push(edge(l.x, l.y, 50, 50, G, 0.35, 0.6)));
  // Connect right to center
  rightNodes.forEach((r) => symmEdges.push(edge(r.x, r.y, 50, 50, G, 0.35, 0.6)));
  // Top/bottom center
  symmEdges.push(edge(50, 22, 50, 50, gold, 0.5, 0.8));
  symmEdges.push(edge(50, 78, 50, 50, gold, 0.5, 0.8));
  // Left chain
  symmEdges.push(edge(24, 30, 36, 40, G, 0.3, 0.6));
  symmEdges.push(edge(36, 40, 36, 60, G, 0.3, 0.6));
  symmEdges.push(edge(36, 60, 24, 70, G, 0.3, 0.6));
  symmEdges.push(edge(18, 50, 24, 30, G, 0.25, 0.5));
  symmEdges.push(edge(18, 50, 24, 70, G, 0.25, 0.5));
  // Right mirror
  symmEdges.push(edge(76, 30, 64, 40, G, 0.3, 0.6));
  symmEdges.push(edge(64, 40, 64, 60, G, 0.3, 0.6));
  symmEdges.push(edge(64, 60, 76, 70, G, 0.3, 0.6));
  symmEdges.push(edge(82, 50, 76, 30, G, 0.25, 0.5));
  symmEdges.push(edge(82, 50, 76, 70, G, 0.25, 0.5));

  // Scales beam
  const scaleBeam = `
    <line x1="30" y1="50" x2="70" y2="50" stroke="${gold}" stroke-width="1" opacity="0.6"/>
    <circle cx="50" cy="50" r="1.5" fill="${gold}" opacity="0.9"/>
    <!-- Left scale pan -->
    <line x1="30" y1="50" x2="22" y2="62" stroke="${gold}" stroke-width="0.7" opacity="0.5"/>
    <line x1="22" y1="62" x2="30" y2="62" stroke="${gold}" stroke-width="0.7" opacity="0.5"/>
    <!-- Right scale pan -->
    <line x1="70" y1="50" x2="78" y2="62" stroke="${gold}" stroke-width="0.7" opacity="0.5"/>
    <line x1="70" y1="62" x2="78" y2="62" stroke="${gold}" stroke-width="0.7" opacity="0.5"/>`;

  const svg = `
  ${glowFilter("ai-ethics", G)}
  <g filter="url(#ai-ethics)">
    ${symmEdges.join("\n    ")}
    ${leftNodes.map((n) => node(n.x, n.y, 2.5, G, 0.8)).join("\n    ")}
    ${rightNodes.map((n) => node(n.x, n.y, 2.5, G, 0.8)).join("\n    ")}
    ${centerNodes.map((n, i) => node(n.x, n.y, i === 1 ? 4 : 3, i === 1 ? gold : G, 0.9)).join("\n    ")}
    ${scaleBeam}
  </g>
  <rect x="24" y="4" width="52" height="8" rx="2" fill="#001a0a" stroke="${gold}" stroke-width="0.7"/>
  <text x="50" y="9.8" font-family="monospace" font-size="4" fill="${gold}" text-anchor="middle" letter-spacing="0.3">AI · ETHICS</text>`;

  write("AI-ETHICS", svgWrap(svg));
}

// ─────────────────────────────────────────────
//  DEPT 08 — SECURITY
//  Color: #EF4444 (red)
//  Archetype: dark hooded figure + glowing visor + unique tool
// ─────────────────────────────────────────────
const R = "#EF4444";
const Rd = "#B91C1C"; // dark red
const Rb = "#FCA5A5"; // bright pink/light red

console.log("\n=== DEPT 08 — Security ===");

const secGlowFilter = (id: string) => `
  <defs>
    <filter id="${id}" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <radialGradient id="secbg-${id}" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#1a0000"/>
      <stop offset="100%" stop-color="#060000"/>
    </radialGradient>
  </defs>
  <rect width="100" height="100" fill="url(#secbg-${id})" rx="8"/>`;

// Base hooded figure (body + hood silhouette)
// cloak-bottom: trapezoid from ~y=55 to y=95, wide at base
// hood: dome over head area with depth shadow
const buildHood = (
  hoodSize: number, // 1.0 = normal, 1.2 = director
  visorColor: string,
  chestSymbol: string,
  tool: string,
  extras: string = ""
) => {
  const s = hoodSize;
  const cx = 50;
  const headTop = 22 * (2 - s);  // higher for bigger hoods
  const headR = 9 * s;
  const shoulderY = 42 + (s - 1) * 8;
  const cloakBottom = 95;

  return `
  <!-- Cloak body -->
  <path d="M${cx - 22 * s},${shoulderY} L${cx - 30},${cloakBottom} L${cx + 30},${cloakBottom} L${cx + 22 * s},${shoulderY} Z"
        fill="#0d0000" stroke="${Rd}" stroke-width="0.5"/>
  <!-- Inner cloak shadow -->
  <path d="M${cx - 14 * s},${shoulderY + 2} L${cx - 18},${cloakBottom} L${cx + 18},${cloakBottom} L${cx + 14 * s},${shoulderY + 2} Z"
        fill="#050000" opacity="0.7"/>
  <!-- Neck -->
  <rect x="${cx - 5}" y="${shoulderY - 6}" width="10" height="8" fill="#080000"/>
  <!-- Hood outer -->
  <ellipse cx="${cx}" cy="${headTop + headR}" rx="${headR * 1.3}" ry="${headR * 1.1}" fill="#0d0000" stroke="${Rd}" stroke-width="0.6"/>
  <!-- Hood inner shadow -->
  <ellipse cx="${cx}" cy="${headTop + headR + 2}" rx="${headR * 0.85}" ry="${headR * 0.7}" fill="#020000"/>
  <!-- Visor glow -->
  <ellipse cx="${cx}" cy="${headTop + headR * 1.1}" rx="${headR * 0.55}" ry="${headR * 0.22}" fill="${visorColor}" opacity="0.9"/>
  <ellipse cx="${cx}" cy="${headTop + headR * 1.1}" rx="${headR * 0.55}" ry="${headR * 0.22}" fill="none" stroke="${visorColor}" stroke-width="0.5" opacity="0.5"/>
  <!-- Chest area -->
  ${chestSymbol}
  <!-- Tool -->
  ${tool}
  <!-- Extras -->
  ${extras}`;
};

// ── DIR-SEC ──────────────────────────────────
{
  // Largest hood, shield+sword on chest, director badge
  const chestSymbol = `
    <!-- Shield -->
    <path d="M44,55 L50,52 L56,55 L56,66 Q50,70 44,66 Z" fill="#1a0000" stroke="${R}" stroke-width="0.9"/>
    <path d="M46,57 L50,55 L54,57 L54,64 Q50,67 46,64 Z" fill="${Rd}" opacity="0.4"/>
    <!-- Sword on shield -->
    <line x1="50" y1="54" x2="50" y2="67" stroke="${Rb}" stroke-width="0.7"/>
    <line x1="47" y1="58" x2="53" y2="58" stroke="${Rb}" stroke-width="0.7"/>`;

  const tool = `
    <!-- Director staff/sword -->
    <line x1="70" y1="35" x2="78" y2="88" stroke="${Rd}" stroke-width="1.4"/>
    <path d="M66,36 L72,30 L78,36 L74,40 L68,40 Z" fill="${R}" opacity="0.85"/>`;

  const extras = `
    <!-- Director badge -->
    <rect x="28" y="4" width="44" height="8" rx="2" fill="#1a0000" stroke="${R}" stroke-width="0.9"/>
    <text x="50" y="9.8" font-family="monospace" font-size="4.5" fill="${R}" text-anchor="middle" letter-spacing="0.3">DIR · SEC</text>
    <!-- Menace aura -->
    ${Array.from({ length: 6 }, (_, i) => {
      const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
      return `<line x1="${50 + 14 * Math.cos(a)}" y1="${24 + 14 * Math.sin(a)}" x2="${50 + 18 * Math.cos(a)}" y2="${24 + 18 * Math.sin(a)}" stroke="${R}" stroke-width="0.7" opacity="0.5"/>`;
    }).join("")}`;

  write(
    "DIR-SEC",
    svgWrap(`
  ${secGlowFilter("dir-sec")}
  <g filter="url(#dir-sec)">
    ${buildHood(1.25, R, chestSymbol, tool, extras)}
  </g>`)
  );
}

// ── SR-SEC-ENG ───────────────────────────────
{
  // Firewall lines (vertical bars) on cloak body, lock tool
  const chestSymbol = `
    <!-- Firewall bars -->
    ${[44, 47, 50, 53, 56].map((x, i) => `<rect x="${x}" y="${56 + (i % 2) * 2}" width="1.5" height="${8 - (i % 2) * 2}" fill="${R}" opacity="${0.5 + i * 0.05}" rx="0.3"/>`).join("")}
    <rect x="43" y="55" width="15" height="12" fill="none" stroke="${R}" stroke-width="0.6" opacity="0.4"/>`;

  const tool = `
    <!-- Lock -->
    <rect x="72" y="58" width="10" height="8" rx="1" fill="#1a0000" stroke="${R}" stroke-width="0.8"/>
    <path d="M74,58 L74,55 Q77,51 80,55 L80,58" fill="none" stroke="${R}" stroke-width="0.8"/>
    <circle cx="77" cy="62" r="1.5" fill="${R}" opacity="0.7"/>
    <!-- Handle -->
    <line x1="77" y1="62" x2="82" y2="85" stroke="${Rd}" stroke-width="1"/>`;

  write(
    "SR-SEC-ENG",
    svgWrap(`
  ${secGlowFilter("sr-sec-eng")}
  <g filter="url(#sr-sec-eng)">
    ${buildHood(1.05, R, chestSymbol, tool)}
  </g>
  <rect x="25" y="4" width="50" height="8" rx="2" fill="#1a0000" stroke="${R}" stroke-width="0.7"/>
  <text x="50" y="9.8" font-family="monospace" font-size="4" fill="${R}" text-anchor="middle">SR · SEC ENG</text>`)
  );
}

// ── APPSEC ───────────────────────────────────
{
  // Code brackets </> on chest, exploit tool
  const chestSymbol = `
    <!-- Code brackets -->
    <text x="50" y="65" font-family="monospace" font-size="9" fill="${R}" text-anchor="middle" opacity="0.85" font-weight="bold">&lt;/&gt;</text>`;

  const tool = `
    <!-- Exploit USB/key tool -->
    <rect x="70" y="55" width="14" height="5" rx="1" fill="#1a0000" stroke="${R}" stroke-width="0.8"/>
    <rect x="72" y="53" width="2" height="3" fill="${R}" opacity="0.7" rx="0.3"/>
    <rect x="75" y="53" width="2" height="4" fill="${R}" opacity="0.7" rx="0.3"/>
    <rect x="78" y="53" width="2" height="2.5" fill="${R}" opacity="0.7" rx="0.3"/>
    <line x1="77" y1="60" x2="80" y2="84" stroke="${Rd}" stroke-width="0.9"/>`;

  write(
    "APPSEC",
    svgWrap(`
  ${secGlowFilter("appsec")}
  <g filter="url(#appsec)">
    ${buildHood(1.0, R, chestSymbol, tool)}
  </g>
  <rect x="31" y="4" width="38" height="8" rx="2" fill="#1a0000" stroke="${R}" stroke-width="0.7"/>
  <text x="50" y="9.8" font-family="monospace" font-size="4.5" fill="${R}" text-anchor="middle">APPSEC</text>`)
  );
}

// ── SEC-ENG ──────────────────────────────────
{
  // Gear symbol on chest, standard lock tool
  const gearTeeth = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2;
    const r1 = 5, r2 = 7;
    const ax = 50 + r1 * Math.cos(a - 0.2);
    const ay = 63 + r1 * Math.sin(a - 0.2);
    const bx = 50 + r2 * Math.cos(a - 0.1);
    const by = 63 + r2 * Math.sin(a - 0.1);
    const cx2 = 50 + r2 * Math.cos(a + 0.1);
    const cy2 = 63 + r2 * Math.sin(a + 0.1);
    const dx = 50 + r1 * Math.cos(a + 0.2);
    const dy = 63 + r1 * Math.sin(a + 0.2);
    return `<path d="M${ax},${ay} L${bx},${by} L${cx2},${cy2} L${dx},${dy} Z" fill="${R}" opacity="0.6"/>`;
  }).join("");

  const chestSymbol = `
    <circle cx="50" cy="63" r="5" fill="none" stroke="${R}" stroke-width="0.8" opacity="0.6"/>
    <circle cx="50" cy="63" r="2.5" fill="${Rd}" opacity="0.5"/>
    ${gearTeeth}`;

  const tool = `
    <!-- Standard padlock -->
    <rect x="71" y="59" width="10" height="8" rx="1" fill="#1a0000" stroke="${R}" stroke-width="0.8"/>
    <path d="M73,59 L73,56 Q76,52 79,56 L79,59" fill="none" stroke="${R}" stroke-width="0.8"/>
    <circle cx="76" cy="63" r="1.2" fill="${R}" opacity="0.6"/>
    <line x1="76" y1="64" x2="76" y2="66" stroke="${R}" stroke-width="0.7"/>
    <line x1="76" y1="66" x2="80" y2="84" stroke="${Rd}" stroke-width="0.9"/>`;

  write(
    "SEC-ENG",
    svgWrap(`
  ${secGlowFilter("sec-eng")}
  <g filter="url(#sec-eng)">
    ${buildHood(1.0, R, chestSymbol, tool)}
  </g>
  <rect x="30" y="4" width="40" height="8" rx="2" fill="#1a0000" stroke="${R}" stroke-width="0.7"/>
  <text x="50" y="9.8" font-family="monospace" font-size="4.5" fill="${R}" text-anchor="middle">SEC · ENG</text>`)
  );
}

// ── PENTEST ──────────────────────────────────
{
  // MOST UNIQUE: skull on chest, red eyes, pick/lockpick tool
  const chestSymbol = `
    <!-- Skull -->
    <ellipse cx="50" cy="60" rx="7" ry="6" fill="#1a0000" stroke="${R}" stroke-width="0.9"/>
    <ellipse cx="47" cy="59" rx="1.8" ry="2" fill="${R}" opacity="0.85"/>
    <ellipse cx="53" cy="59" rx="1.8" ry="2" fill="${R}" opacity="0.85"/>
    <!-- Skull nasal -->
    <path d="M49,62 L51,62 L50.5,64 L49.5,64 Z" fill="${Rd}" opacity="0.6"/>
    <!-- Skull teeth -->
    <line x1="47" y1="65" x2="47" y2="67" stroke="${R}" stroke-width="1" opacity="0.5"/>
    <line x1="50" y1="65" x2="50" y2="67" stroke="${R}" stroke-width="1" opacity="0.5"/>
    <line x1="53" y1="65" x2="53" y2="67" stroke="${R}" stroke-width="1" opacity="0.5"/>`;

  // Red glowing eyes in visor
  const redEyes = `
    <!-- Red eyes (replace visor) -->
    <ellipse cx="45" cy="28" rx="2.5" ry="1.5" fill="${R}" opacity="0.95"/>
    <ellipse cx="55" cy="28" rx="2.5" ry="1.5" fill="${R}" opacity="0.95"/>
    <ellipse cx="45" cy="28" rx="1.2" ry="0.7" fill="#FF0000"/>
    <ellipse cx="55" cy="28" rx="1.2" ry="0.7" fill="#FF0000"/>`;

  const tool = `
    <!-- Lockpick/exploit pick -->
    <line x1="68" y1="45" x2="82" y2="85" stroke="${Rd}" stroke-width="1.1"/>
    <path d="M65,42 Q68,38 72,42 Q70,46 66,46 Z" fill="${R}" opacity="0.8"/>
    <path d="M72,44 L75,41 L76,43 Z" fill="${Rb}" opacity="0.7"/>`;

  const extras = `
    <!-- Danger aura -->
    ${Array.from({ length: 8 }, (_, i) => {
      const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
      const len = i % 2 === 0 ? 5 : 3;
      return `<line x1="${50 + 15 * Math.cos(a)}" y1="${26 + 15 * Math.sin(a)}" x2="${50 + (15 + len) * Math.cos(a)}" y2="${26 + (15 + len) * Math.sin(a)}" stroke="${R}" stroke-width="0.8" opacity="0.6"/>`;
    }).join("")}`;

  write(
    "PENTEST",
    svgWrap(`
  ${secGlowFilter("pentest")}
  <g filter="url(#pentest)">
    ${buildHood(1.08, "transparent", chestSymbol, tool, redEyes + extras)}
  </g>
  <rect x="28" y="4" width="44" height="8" rx="2" fill="#1a0000" stroke="${R}" stroke-width="0.8"/>
  <text x="50" y="9.8" font-family="monospace" font-size="4.5" fill="${R}" text-anchor="middle">PENTEST</text>`)
  );
}

// ── SOC-ANALYST ──────────────────────────────
{
  // Radar/sonar circle on chest, eye/surveillance tool
  const chestSymbol = `
    <!-- Radar circles -->
    <circle cx="50" cy="62" r="2" fill="${R}" opacity="0.8"/>
    <circle cx="50" cy="62" r="4.5" fill="none" stroke="${R}" stroke-width="0.6" opacity="0.6"/>
    <circle cx="50" cy="62" r="7" fill="none" stroke="${R}" stroke-width="0.5" opacity="0.4"/>
    <!-- Radar sweep -->
    <line x1="50" y1="62" x2="56" y2="56" stroke="${R}" stroke-width="0.8" opacity="0.7"/>
    <!-- Radar blip -->
    <circle cx="54" cy="57" r="1" fill="${Rb}" opacity="0.9"/>`;

  const tool = `
    <!-- Eye surveillance tool -->
    <ellipse cx="76" cy="60" rx="7" ry="4" fill="none" stroke="${R}" stroke-width="0.8"/>
    <circle cx="76" cy="60" r="2.5" fill="${Rd}" opacity="0.6"/>
    <circle cx="76" cy="60" r="1.2" fill="${R}" opacity="0.9"/>
    <line x1="76" y1="64" x2="76" y2="85" stroke="${Rd}" stroke-width="0.9"/>`;

  write(
    "SOC-ANALYST",
    svgWrap(`
  ${secGlowFilter("soc")}
  <g filter="url(#soc)">
    ${buildHood(1.0, R, chestSymbol, tool)}
  </g>
  <rect x="22" y="4" width="56" height="8" rx="2" fill="#1a0000" stroke="${R}" stroke-width="0.7"/>
  <text x="50" y="9.8" font-family="monospace" font-size="4" fill="${R}" text-anchor="middle" letter-spacing="0.2">SOC ANALYST</text>`)
  );
}

// ── IR-LEAD ──────────────────────────────────
{
  // Fire symbol on chest, red accent burst around hood
  const chestSymbol = `
    <!-- Fire symbol -->
    <path d="M50,55 Q46,60 48,66 Q44,62 45,68 Q48,72 50,71 Q52,72 55,68 Q56,62 52,66 Q54,60 50,55 Z"
          fill="${R}" opacity="0.8"/>
    <path d="M50,59 Q48,63 49,66 Q50,68 51,66 Q52,63 50,59 Z" fill="${Rb}" opacity="0.6"/>`;

  // Red burst lines around hood
  const burst = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2;
    const r1 = 16, r2 = 22;
    return `<line x1="${50 + r1 * Math.cos(a)}" y1="${26 + r1 * Math.sin(a)}" x2="${50 + r2 * Math.cos(a)}" y2="${26 + r2 * Math.sin(a)}" stroke="${R}" stroke-width="0.6" opacity="${i % 3 === 0 ? 0.6 : 0.3}"/>`;
  }).join("");

  const tool = `
    <!-- Fire axe / incident response tool -->
    <line x1="69" y1="48" x2="78" y2="85" stroke="${Rd}" stroke-width="1.2"/>
    <path d="M65,44 L72,40 L76,46 L70,50 Z" fill="${R}" opacity="0.85"/>
    <path d="M72,40 L78,36 L80,42 L76,46 Z" fill="${Rb}" opacity="0.6"/>`;

  write(
    "IR-LEAD",
    svgWrap(`
  ${secGlowFilter("ir-lead")}
  <g filter="url(#ir-lead)">
    ${buildHood(1.05, R, chestSymbol, tool, burst)}
  </g>
  <rect x="29" y="4" width="42" height="8" rx="2" fill="#1a0000" stroke="${R}" stroke-width="0.7"/>
  <text x="50" y="9.8" font-family="monospace" font-size="4.5" fill="${R}" text-anchor="middle">IR · LEAD</text>`)
  );
}

// ── GRC-SPEC ─────────────────────────────────
{
  // Compliance checkboxes on chest, book/scroll tool
  const chestSymbol = `
    <!-- Compliance checkboxes -->
    <rect x="40" y="54" width="5" height="5" fill="none" stroke="${R}" stroke-width="0.7" rx="0.5"/>
    <polyline points="41,57 43,59 45,55" fill="none" stroke="${R}" stroke-width="0.7"/>
    <rect x="40" y="61" width="5" height="5" fill="none" stroke="${R}" stroke-width="0.7" rx="0.5"/>
    <polyline points="41,64 43,66 45,62" fill="none" stroke="${R}" stroke-width="0.7"/>
    <rect x="40" y="68" width="5" height="5" fill="none" stroke="${R}" stroke-width="0.7" rx="0.5"/>
    <!-- Last one pending (no check) -->
    <line x1="52" y1="55" x2="60" y2="55" stroke="${R}" stroke-width="0.5" opacity="0.4"/>
    <line x1="52" y1="63" x2="60" y2="63" stroke="${R}" stroke-width="0.5" opacity="0.4"/>
    <line x1="52" y1="70" x2="60" y2="70" stroke="${R}" stroke-width="0.3" opacity="0.3"/>`;

  const tool = `
    <!-- Scroll/book -->
    <rect x="68" y="52" width="12" height="14" rx="1" fill="#1a0000" stroke="${R}" stroke-width="0.8"/>
    <line x1="70" y1="56" x2="78" y2="56" stroke="${R}" stroke-width="0.5" opacity="0.5"/>
    <line x1="70" y1="58" x2="78" y2="58" stroke="${R}" stroke-width="0.5" opacity="0.5"/>
    <line x1="70" y1="60" x2="78" y2="60" stroke="${R}" stroke-width="0.5" opacity="0.5"/>
    <line x1="70" y1="62" x2="75" y2="62" stroke="${R}" stroke-width="0.5" opacity="0.5"/>
    <!-- Scroll curl top -->
    <path d="M68,52 Q74,49 80,52" fill="none" stroke="${R}" stroke-width="0.7"/>
    <!-- Scroll curl bottom -->
    <path d="M68,66 Q74,69 80,66" fill="none" stroke="${R}" stroke-width="0.7"/>
    <line x1="74" y1="66" x2="74" y2="85" stroke="${Rd}" stroke-width="0.9"/>`;

  write(
    "GRC-SPEC",
    svgWrap(`
  ${secGlowFilter("grc")}
  <g filter="url(#grc)">
    ${buildHood(0.98, R, chestSymbol, tool)}
  </g>
  <rect x="28" y="4" width="44" height="8" rx="2" fill="#1a0000" stroke="${R}" stroke-width="0.7"/>
  <text x="50" y="9.8" font-family="monospace" font-size="4.5" fill="${R}" text-anchor="middle">GRC · SPEC</text>`)
  );
}

console.log("\nAll 20 avatars written successfully.");
console.log(`Output: ${OUT_DIR}`);
