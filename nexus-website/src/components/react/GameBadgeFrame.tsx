import React from "react";

interface GameBadgeFrameProps {
  avatarSrc: string;
  agentCode: string;
  tierNumber: number;  // 0-9
  departmentNumber: number;  // 1-20
  departmentColor: string;  // hex color
  size: 'sm' | 'lg';  // sm=48px (directory), lg=96px (detail page)
}

// Department specialty labels
const DEPT_SPECIALTY: Record<number, string> = {
  1: 'EXEC', 2: 'ENG', 3: 'OPS', 4: 'PRD',
  5: 'DES', 6: 'AI', 7: 'QA', 8: 'SEC',
  9: 'REV', 10: 'MKT', 11: 'SUP', 12: 'PPL',
  13: 'FIN', 14: 'LEG', 15: 'IT', 16: 'DEV',
  17: 'PMO', 18: '\u26A1', 19: '\u2B21', 20: 'DOC',
};

// Tier colors for badge pips
const TIER_COLORS: Record<number, string> = {
  0: '#FFD700',
  1: '#B026FF',
  2: '#6B8E23',
  3: '#3DDC84',
  4: '#C0A060',
  5: '#C89B3C',
  6: '#00BCFF',
  7: '#FF6B6B',
  8: '#FF4655',
  9: '#FF00FF',
};

// ──────────────────────────────────────────────────────────────
// Individual tier frame SVG renderers
// viewBox is always "0 0 {vb} {vb}" where vb = avatarPx + 2*padding
// ──────────────────────────────────────────────────────────────

function Tier0Frame({ vb }: { vb: number }) {
  const cx = vb / 2;
  const r = vb / 2 - 6;
  // Hexagon points
  const hex = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    return { x: cx + r * Math.cos(angle), y: cx + r * Math.sin(angle) };
  });
  const hexPoints = hex.map((p) => `${p.x},${p.y}`).join(' ');

  // Crown triangles at top vertex
  const topV = hex[0];
  const crownH = 6;
  const crownW = 5;
  const crowns = [
    { x: topV.x - crownW, y: topV.y - crownH },
    { x: topV.x, y: topV.y - crownH - 3 },
    { x: topV.x + crownW, y: topV.y - crownH },
  ];

  return (
    <>
      <defs>
        <filter id="gold-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feComposite in="blur" in2="SourceGraphic" operator="over" />
        </filter>
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF176" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>
      {/* Outer glow hex */}
      <polygon
        points={hexPoints}
        fill="none"
        stroke="#FFD700"
        strokeWidth="1.5"
        opacity="0.3"
        filter="url(#gold-glow)"
      />
      {/* Main hex border */}
      <polygon
        points={hexPoints}
        fill="none"
        stroke="url(#gold-grad)"
        strokeWidth="3"
        filter="url(#gold-glow)"
      />
      {/* Star diamonds at each vertex */}
      {hex.map((p, i) => (
        <polygon
          key={i}
          points={`${p.x},${p.y - 4} ${p.x + 3},${p.y} ${p.x},${p.y + 4} ${p.x - 3},${p.y}`}
          fill="#FFD700"
          filter="url(#gold-glow)"
        />
      ))}
      {/* Crown triangles */}
      {crowns.map((c, i) => (
        <polygon
          key={i}
          points={`${c.x},${c.y} ${c.x + crownW / 2},${c.y + crownH} ${c.x - crownW / 2},${c.y + crownH}`}
          fill="#FFD700"
          filter="url(#gold-glow)"
        />
      ))}
      {/* LEGENDARY label */}
      <text
        x={cx}
        y={vb - 2}
        textAnchor="middle"
        fontSize="5"
        fontFamily="monospace"
        fontWeight="bold"
        fill="#FFD700"
        letterSpacing="1"
      >
        LEGENDARY
      </text>
    </>
  );
}

function Tier1Frame({ vb }: { vb: number }) {
  const cx = vb / 2;
  const r = vb / 2 - 6;
  // Octagon points
  const oct = Array.from({ length: 8 }, (_, i) => {
    const angle = (Math.PI / 4) * i - Math.PI / 8;
    return { x: cx + r * Math.cos(angle), y: cx + r * Math.sin(angle) };
  });
  const octPoints = oct.map((p) => `${p.x},${p.y}`).join(' ');

  return (
    <>
      <defs>
        <filter id="purple-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feComposite in="blur" in2="SourceGraphic" operator="over" />
        </filter>
        <linearGradient id="purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D580FF" />
          <stop offset="50%" stopColor="#B026FF" />
          <stop offset="100%" stopColor="#7B00CC" />
        </linearGradient>
      </defs>
      {/* Glow */}
      <polygon
        points={octPoints}
        fill="none"
        stroke="#B026FF"
        strokeWidth="1.5"
        opacity="0.35"
        filter="url(#purple-glow)"
      />
      {/* Main octagon */}
      <polygon
        points={octPoints}
        fill="none"
        stroke="url(#purple-grad)"
        strokeWidth="2.5"
        filter="url(#purple-glow)"
      />
      {/* Gem diamonds at vertices */}
      {oct.map((p, i) => (
        <polygon
          key={i}
          points={`${p.x},${p.y - 3.5} ${p.x + 2.5},${p.y} ${p.x},${p.y + 3.5} ${p.x - 2.5},${p.y}`}
          fill="#B026FF"
          filter="url(#purple-glow)"
        />
      ))}
      {/* Gem shapes top-left and top-right */}
      {[oct[1], oct[7]].map((p, i) => (
        <polygon
          key={i}
          points={`${p.x},${p.y - 6} ${p.x + 4},${p.y} ${p.x},${p.y + 6} ${p.x - 4},${p.y}`}
          fill="none"
          stroke="#D580FF"
          strokeWidth="1"
        />
      ))}
    </>
  );
}

function Tier2Frame({ vb }: { vb: number }) {
  const pad = 5;
  const size = vb - pad * 2;
  // Tactical square with cut corners (clip-path via polygon)
  const cut = size * 0.12;
  const x = pad;
  const y = pad;
  const points = [
    `${x + cut},${y}`,
    `${x + size - cut},${y}`,
    `${x + size},${y + cut}`,
    `${x + size},${y + size - cut}`,
    `${x + size - cut},${y + size}`,
    `${x + cut},${y + size}`,
    `${x},${y + size - cut}`,
    `${x},${y + cut}`,
  ].join(' ');

  const cx = vb / 2;
  const topY = y;
  const rightX = x + size;
  const bottomY = y + size;
  const leftX = x;

  return (
    <>
      <defs>
        <linearGradient id="olive-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9AB34B" />
          <stop offset="50%" stopColor="#6B8E23" />
          <stop offset="100%" stopColor="#4A6318" />
        </linearGradient>
      </defs>
      {/* Main tactical frame */}
      <polygon
        points={points}
        fill="none"
        stroke="url(#olive-grad)"
        strokeWidth="2.5"
      />
      {/* Corner pip marks (rank insignia) */}
      {[
        { x: x, y: y + cut / 2 },
        { x: rightX - cut / 2, y: y },
        { x: rightX, y: bottomY - cut / 2 },
        { x: x + cut / 2, y: bottomY },
      ].map((p, i) => (
        <rect
          key={i}
          x={p.x - 2}
          y={p.y - 2}
          width="5"
          height="3"
          fill="#6B8E23"
          transform={i % 2 === 1 ? `rotate(90 ${p.x} ${p.y})` : ''}
        />
      ))}
      {/* Crosshair on top edge */}
      <line x1={cx - 5} y1={topY} x2={cx + 5} y2={topY} stroke="#9AB34B" strokeWidth="1.5" />
      <line x1={cx} y1={topY - 4} x2={cx} y2={topY + 4} stroke="#9AB34B" strokeWidth="1.5" />
      <circle cx={cx} cy={topY} r="2" fill="none" stroke="#9AB34B" strokeWidth="1" />
    </>
  );
}

function Tier3Frame({ vb }: { vb: number }) {
  // Pixel-block border: 12 blocks, 3 per side — all kept within viewBox bounds
  const blockCount = 3;
  const blockSize = Math.floor(vb / blockCount);
  const border = 3; // thickness of block strip
  const colors = ['#3DDC84', '#228B44', '#3DDC84'];

  const blocks: React.ReactNode[] = [];

  // Top row
  for (let i = 0; i < blockCount; i++) {
    blocks.push(
      <rect key={`t${i}`} x={i * blockSize} y={0} width={blockSize - 1} height={border + 1} fill={colors[i]} rx="1" />
    );
  }
  // Bottom row
  for (let i = 0; i < blockCount; i++) {
    blocks.push(
      <rect key={`b${i}`} x={i * blockSize} y={vb - border - 1} width={blockSize - 1} height={border + 1} fill={colors[blockCount - 1 - i]} rx="1" />
    );
  }
  // Left column
  for (let i = 0; i < blockCount; i++) {
    blocks.push(
      <rect key={`l${i}`} x={0} y={i * blockSize} width={border + 1} height={blockSize - 1} fill={colors[i]} rx="1" />
    );
  }
  // Right column
  for (let i = 0; i < blockCount; i++) {
    blocks.push(
      <rect key={`r${i}`} x={vb - border - 1} y={i * blockSize} width={border + 1} height={blockSize - 1} fill={colors[blockCount - 1 - i]} rx="1" />
    );
  }

  return <>{blocks}</>;
}

function Tier4Frame({ vb }: { vb: number }) {
  const cx = vb / 2;
  const cy = vb / 2;
  const r = vb / 2 - 6;
  // Diamond (rotated square)
  const diamondPoints = `${cx},${cy - r} ${cx + r},${cy} ${cx},${cy + r} ${cx - r},${cy}`;
  // Arrow chevrons at corners
  const chevronSize = 5;
  const corners = [
    { x: cx, y: cy - r, dir: 'up' },
    { x: cx + r, y: cy, dir: 'right' },
    { x: cx, y: cy + r, dir: 'down' },
    { x: cx - r, y: cy, dir: 'left' },
  ];

  return (
    <>
      <defs>
        <linearGradient id="bronze-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A84B" />
          <stop offset="50%" stopColor="#C0A060" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
      </defs>
      {/* Diamond border */}
      <polygon
        points={diamondPoints}
        fill="none"
        stroke="url(#bronze-grad)"
        strokeWidth="2.5"
      />
      {/* Chevron marks at diamond tips */}
      {corners.map((c, i) => {
        const offset = 8;
        let pts = '';
        if (c.dir === 'up') {
          pts = `${c.x - chevronSize},${c.y + offset} ${c.x},${c.y + offset - chevronSize} ${c.x + chevronSize},${c.y + offset}`;
        } else if (c.dir === 'down') {
          pts = `${c.x - chevronSize},${c.y - offset} ${c.x},${c.y - offset + chevronSize} ${c.x + chevronSize},${c.y - offset}`;
        } else if (c.dir === 'right') {
          pts = `${c.x - offset},${c.y - chevronSize} ${c.x - offset + chevronSize},${c.y} ${c.x - offset},${c.y + chevronSize}`;
        } else {
          pts = `${c.x + offset},${c.y - chevronSize} ${c.x + offset - chevronSize},${c.y} ${c.x + offset},${c.y + chevronSize}`;
        }
        return (
          <polyline key={i} points={pts} fill="none" stroke="#C0A060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        );
      })}
    </>
  );
}

function Tier5Frame({ vb }: { vb: number }) {
  const cx = vb / 2;
  const cy = vb / 2;
  const r = vb / 2 - 6;
  const r2 = r - 5;

  // Arc decorations at top, left, right (120deg arcs)
  const arcPositions = [
    { startAngle: -120, endAngle: -60 },   // top
    { startAngle: 150, endAngle: 210 },    // left (bottom-left actually)
    { startAngle: -30, endAngle: 30 },     // right
  ];

  const describeArc = (startDeg: number, endDeg: number, radius: number) => {
    const startRad = (startDeg * Math.PI) / 180;
    const endRad = (endDeg * Math.PI) / 180;
    const x1 = cx + radius * Math.cos(startRad);
    const y1 = cy + radius * Math.sin(startRad);
    const x2 = cx + radius * Math.cos(endRad);
    const y2 = cy + radius * Math.sin(endRad);
    const largeArc = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`;
  };

  // Diamond marks between arcs
  const diamondAngles = [-90, -30, 30, 90, 150, -150];

  return (
    <>
      <defs>
        <linearGradient id="lol-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8C05A" />
          <stop offset="50%" stopColor="#C89B3C" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
      </defs>
      {/* Main circle */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="url(#lol-gold-grad)" strokeWidth="2" />
      {/* Inner ring */}
      <circle cx={cx} cy={cy} r={r2} fill="none" stroke="#C89B3C" strokeWidth="0.5" opacity="0.5" />
      {/* Ornate arcs */}
      {arcPositions.map((a, i) => (
        <path
          key={i}
          d={describeArc(a.startAngle, a.endAngle, r + 2)}
          fill="none"
          stroke="#E8C05A"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
      {/* Diamond marks */}
      {diamondAngles.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const px = cx + (r + 5) * Math.cos(rad);
        const py = cy + (r + 5) * Math.sin(rad);
        return (
          <polygon
            key={i}
            points={`${px},${py - 3} ${px + 2},${py} ${px},${py + 3} ${px - 2},${py}`}
            fill="#C89B3C"
          />
        );
      })}
    </>
  );
}

function Tier6Frame({ vb }: { vb: number }) {
  const cx = vb / 2;
  const cy = vb / 2;
  const r = vb / 2 - 6;
  // 6 tick marks at clock positions
  const tickAngles = [0, 60, 120, 180, 240, 300]; // degrees, 0=top (12 o'clock) offset by -90
  const innerR = r - 5;
  const outerR = r + 4;

  return (
    <>
      <defs>
        <filter id="cyan-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feComposite in="blur" in2="SourceGraphic" operator="over" />
        </filter>
      </defs>
      {/* Main circle */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#00BCFF" strokeWidth="2" filter="url(#cyan-glow)" />
      {/* Tick marks */}
      {tickAngles.map((deg, i) => {
        const rad = ((deg - 90) * Math.PI) / 180;
        const x1 = cx + innerR * Math.cos(rad);
        const y1 = cy + innerR * Math.sin(rad);
        const x2 = cx + outerR * Math.cos(rad);
        const y2 = cy + outerR * Math.sin(rad);
        return (
          <line
            key={i}
            x1={x1} y1={y1}
            x2={x2} y2={y2}
            stroke="#00BCFF"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#cyan-glow)"
          />
        );
      })}
      {/* Inner geometric ring at tick bases */}
      <circle cx={cx} cy={cy} r={innerR} fill="none" stroke="#00BCFF" strokeWidth="0.75" opacity="0.4" />
    </>
  );
}

function Tier7Frame({ vb }: { vb: number }) {
  const pad = 4;
  const size = vb - pad * 2;
  const cornerSize = 5;
  const rx = 4;

  // Chunky rounded square with multicolor sides
  // Top = red, right = blue, bottom = green, left = yellow
  const sides = [
    { color: '#FF4444', d: `M ${pad + rx} ${pad} L ${pad + size - rx} ${pad}` },
    { color: '#4444FF', d: `M ${pad + size} ${pad + rx} L ${pad + size} ${pad + size - rx}` },
    { color: '#44CC44', d: `M ${pad + size - rx} ${pad + size} L ${pad + rx} ${pad + size}` },
    { color: '#FFCC00', d: `M ${pad} ${pad + size - rx} L ${pad} ${pad + rx}` },
  ];

  // Corner squares (protruding)
  const corners = [
    { x: pad - cornerSize / 2, y: pad - cornerSize / 2 },
    { x: pad + size - cornerSize / 2, y: pad - cornerSize / 2 },
    { x: pad - cornerSize / 2, y: pad + size - cornerSize / 2 },
    { x: pad + size - cornerSize / 2, y: pad + size - cornerSize / 2 },
  ];

  const cornerColors = ['#FF4444', '#4444FF', '#FFCC00', '#44CC44'];

  return (
    <>
      {/* Multicolor sides */}
      {sides.map((s, i) => (
        <path key={i} d={s.d} fill="none" stroke={s.color} strokeWidth="3" strokeLinecap="round" />
      ))}
      {/* Corner squares */}
      {corners.map((c, i) => (
        <rect
          key={i}
          x={c.x}
          y={c.y}
          width={cornerSize}
          height={cornerSize}
          fill={cornerColors[i]}
          rx="1"
        />
      ))}
    </>
  );
}

function Tier8Frame({ vb }: { vb: number }) {
  const cx = vb / 2;
  const cy = vb / 2;
  const r = vb / 2 - 5;
  // Rhombus with angular points
  const pts = `${cx},${cy - r} ${cx + r},${cy} ${cx},${cy + r} ${cx - r},${cy}`;
  const sharpness = 6;
  // Triangle marks at each tip
  const tips = [
    { x: cx, y: cy - r, pts: `${cx - sharpness},${cy - r + sharpness * 1.5} ${cx},${cy - r - sharpness} ${cx + sharpness},${cy - r + sharpness * 1.5}` },
    { x: cx + r, y: cy, pts: `${cx + r - sharpness * 1.5},${cy - sharpness} ${cx + r + sharpness},${cy} ${cx + r - sharpness * 1.5},${cy + sharpness}` },
    { x: cx, y: cy + r, pts: `${cx - sharpness},${cy + r - sharpness * 1.5} ${cx},${cy + r + sharpness} ${cx + sharpness},${cy + r - sharpness * 1.5}` },
    { x: cx - r, y: cy, pts: `${cx - r + sharpness * 1.5},${cy - sharpness} ${cx - r - sharpness},${cy} ${cx - r + sharpness * 1.5},${cy + sharpness}` },
  ];

  return (
    <>
      <defs>
        <filter id="red-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feComposite in="blur" in2="SourceGraphic" operator="over" />
        </filter>
        <linearGradient id="valorant-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B7A" />
          <stop offset="50%" stopColor="#FF4655" />
          <stop offset="100%" stopColor="#CC1A2A" />
        </linearGradient>
      </defs>
      {/* Glow rhombus */}
      <polygon points={pts} fill="none" stroke="#FF4655" strokeWidth="1" opacity="0.3" filter="url(#red-glow)" />
      {/* Main rhombus */}
      <polygon points={pts} fill="none" stroke="url(#valorant-grad)" strokeWidth="2.5" />
      {/* Triangle marks at tips */}
      {tips.map((t, i) => (
        <polygon key={i} points={t.pts} fill="#FF4655" filter="url(#red-glow)" />
      ))}
      {/* Inner smaller rhombus */}
      <polygon
        points={`${cx},${cy - r * 0.6} ${cx + r * 0.6},${cy} ${cx},${cy + r * 0.6} ${cx - r * 0.6},${cy}`}
        fill="none"
        stroke="#FF4655"
        strokeWidth="0.75"
        opacity="0.4"
      />
    </>
  );
}

function Tier9Frame({ vb }: { vb: number }) {
  const cx = vb / 2;
  const cy = vb / 2;
  const r = vb / 2 - 5;

  // Hexagon outline with rainbow gradient
  const hex = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });
  const hexPoints = hex.map((p) => `${p.x},${p.y}`).join(' ');

  // 8 orbiting dots
  const dotR = r + 7;
  const dots = Array.from({ length: 8 }, (_, i) => {
    const angle = (Math.PI * 2 * i) / 8;
    return { x: cx + dotR * Math.cos(angle), y: cy + dotR * Math.sin(angle) };
  });

  const rainbowColors = ['#FF0000', '#FF7700', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#8800FF', '#FF00FF'];

  return (
    <>
      <defs>
        <linearGradient id="rainbow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF0000" />
          <stop offset="17%" stopColor="#FF7700" />
          <stop offset="33%" stopColor="#FFFF00" />
          <stop offset="50%" stopColor="#00FF00" />
          <stop offset="67%" stopColor="#00FFFF" />
          <stop offset="83%" stopColor="#0000FF" />
          <stop offset="100%" stopColor="#FF00FF" />
        </linearGradient>
        <filter id="mythic-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feComposite in="blur" in2="SourceGraphic" operator="over" />
        </filter>
      </defs>
      {/* Multi-layer hexagons for depth */}
      <polygon points={hexPoints} fill="none" stroke="url(#rainbow-grad)" strokeWidth="1.5" opacity="0.4" filter="url(#mythic-glow)" />
      <polygon points={hexPoints} fill="none" stroke="url(#rainbow-grad)" strokeWidth="3" />
      {/* Inner hex */}
      {(() => {
        const innerHex = Array.from({ length: 6 }, (_, i) => {
          const angle = (Math.PI / 3) * i - Math.PI / 6;
          return { x: cx + (r - 6) * Math.cos(angle), y: cy + (r - 6) * Math.sin(angle) };
        });
        return (
          <polygon
            points={innerHex.map((p) => `${p.x},${p.y}`).join(' ')}
            fill="none"
            stroke="url(#rainbow-grad)"
            strokeWidth="0.75"
            opacity="0.5"
          />
        );
      })()}
      {/* Orbiting dots */}
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r="2.5"
          fill={rainbowColors[i]}
          filter="url(#mythic-glow)"
        />
      ))}
      {/* Vertex diamonds on hex */}
      {hex.map((p, i) => (
        <polygon
          key={i}
          points={`${p.x},${p.y - 4} ${p.x + 3},${p.y} ${p.x},${p.y + 4} ${p.x - 3},${p.y}`}
          fill={rainbowColors[i]}
          filter="url(#mythic-glow)"
        />
      ))}
    </>
  );
}

// ──────────────────────────────────────────────────────────────
// Badge medallion components
// ──────────────────────────────────────────────────────────────

interface BadgeProps {
  size: 'sm' | 'lg';
  tierNumber: number;
  departmentNumber: number;
  departmentColor: string;
}

function TierBadge({ size, tierNumber, departmentColor }: BadgeProps) {
  const badgePx = size === 'sm' ? 16 : 20;
  const tierColor = TIER_COLORS[tierNumber] ?? '#94A3B8';
  const fontSize = size === 'sm' ? 5 : 6;
  const offset = size === 'sm' ? -4 : -5;

  return (
    <div
      style={{
        position: 'absolute',
        top: offset,
        left: offset,
        width: badgePx,
        height: badgePx,
        borderRadius: '50%',
        backgroundColor: tierColor,
        border: '1.5px solid rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0 0 4px ${tierColor}80`,
        zIndex: 10,
      }}
    >
      <span
        style={{
          fontSize: fontSize,
          fontFamily: 'monospace',
          fontWeight: 'bold',
          color: '#000',
          lineHeight: 1,
        }}
      >
        T{tierNumber}
      </span>
    </div>
  );
}

function DeptBadge({ size, departmentNumber, departmentColor }: BadgeProps) {
  const badgePx = size === 'sm' ? 16 : 20;
  const fontSize = size === 'sm' ? 5 : 6;
  const offset = size === 'sm' ? -4 : -5;
  const deptStr = String(departmentNumber).padStart(2, '0');

  return (
    <div
      style={{
        position: 'absolute',
        top: offset,
        right: offset,
        width: badgePx,
        height: badgePx,
        borderRadius: '50%',
        backgroundColor: departmentColor,
        border: '1.5px solid rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0 0 4px ${departmentColor}80`,
        zIndex: 10,
      }}
    >
      <span
        style={{
          fontSize: fontSize,
          fontFamily: 'monospace',
          fontWeight: 'bold',
          color: '#fff',
          lineHeight: 1,
        }}
      >
        {deptStr}
      </span>
    </div>
  );
}

function SpecialtyBadge({ size, tierNumber, departmentNumber, departmentColor }: BadgeProps) {
  const badgeH = size === 'sm' ? 12 : 15;
  const badgeW = size === 'sm' ? 26 : 32;
  const fontSize = size === 'sm' ? 5 : 6;
  const bottomOffset = size === 'sm' ? -6 : -8;
  const label = DEPT_SPECIALTY[departmentNumber] ?? 'SYS';
  const tierColor = TIER_COLORS[tierNumber] ?? '#94A3B8';

  // Special overrides
  const bg = tierNumber === 8 ? '#FF4655' : tierNumber === 9 ? '#8800FF' : departmentColor;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: bottomOffset,
        left: '50%',
        transform: 'translateX(-50%)',
        width: badgeW,
        height: badgeH,
        borderRadius: 4,
        backgroundColor: bg,
        border: '1.5px solid rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0 0 4px ${bg}80`,
        zIndex: 10,
      }}
    >
      <span
        style={{
          fontSize: fontSize,
          fontFamily: 'monospace',
          fontWeight: 'bold',
          color: '#fff',
          lineHeight: 1,
          letterSpacing: '0.5px',
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// Main GameBadgeFrame component
// ──────────────────────────────────────────────────────────────

export default function GameBadgeFrame({
  avatarSrc,
  agentCode,
  tierNumber,
  departmentNumber,
  departmentColor,
  size,
}: GameBadgeFrameProps) {
  const avatarPx = size === 'sm' ? 48 : 96;
  const padding = 8; // negative extension beyond avatar
  const vb = avatarPx + padding * 2; // SVG viewBox size
  const borderRadius = size === 'sm' ? '50%' : '16px';

  // Handle avatar load error
  const [imgError, setImgError] = React.useState(false);

  const tierFrames: Record<number, React.ReactNode> = {
    0: <Tier0Frame vb={vb} />,
    1: <Tier1Frame vb={vb} />,
    2: <Tier2Frame vb={vb} />,
    3: <Tier3Frame vb={vb} />,
    4: <Tier4Frame vb={vb} />,
    5: <Tier5Frame vb={vb} />,
    6: <Tier6Frame vb={vb} />,
    7: <Tier7Frame vb={vb} />,
    8: <Tier8Frame vb={vb} />,
    9: <Tier9Frame vb={vb} />,
  };

  const tierColor = TIER_COLORS[tierNumber] ?? '#94A3B8';

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        width: avatarPx,
        height: avatarPx,
        // Reserve space so badge frame overflow doesn't bleed into sibling text
        margin: size === 'sm' ? `${padding}px` : `${padding / 2}px`,
      }}
    >
      {/* Avatar image */}
      {imgError ? (
        <div
          style={{
            width: avatarPx,
            height: avatarPx,
            borderRadius,
            backgroundColor: `${departmentColor}20`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: avatarPx * 0.25,
            fontFamily: 'monospace',
            fontWeight: 'bold',
            color: departmentColor,
          }}
        >
          {agentCode.slice(0, 2)}
        </div>
      ) : (
        <img
          src={avatarSrc}
          alt={`${agentCode} avatar`}
          width={avatarPx}
          height={avatarPx}
          style={{
            width: avatarPx,
            height: avatarPx,
            borderRadius,
            objectFit: 'cover',
            display: 'block',
          }}
          onError={() => setImgError(true)}
        />
      )}

      {/* Frame SVG — extends 8px beyond avatar on all sides */}
      <svg
        viewBox={`0 0 ${vb} ${vb}`}
        width={vb}
        height={vb}
        style={{
          position: 'absolute',
          top: -padding,
          left: -padding,
          pointerEvents: 'none',
          overflow: 'visible',
        }}
        aria-hidden="true"
      >
        {tierFrames[tierNumber] ?? <Tier5Frame vb={vb} />}
      </svg>

      {/* Badge medallions */}
      <TierBadge
        size={size}
        tierNumber={tierNumber}
        departmentNumber={departmentNumber}
        departmentColor={departmentColor}
      />
      <DeptBadge
        size={size}
        tierNumber={tierNumber}
        departmentNumber={departmentNumber}
        departmentColor={departmentColor}
      />
      <SpecialtyBadge
        size={size}
        tierNumber={tierNumber}
        departmentNumber={departmentNumber}
        departmentColor={departmentColor}
      />
    </div>
  );
}
