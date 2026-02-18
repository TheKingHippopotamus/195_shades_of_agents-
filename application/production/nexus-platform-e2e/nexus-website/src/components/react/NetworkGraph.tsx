import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface Agent {
  agent_number: string;
  code: string;
  role: string;
  department: string;
  department_number: string;
  tier: { number: number; label: string };
  reports_to: string;
  personal?: { nickname: string };
}

interface GraphNode extends d3.SimulationNodeDatum {
  id: string;
  code: string;
  role: string;
  department: string;
  deptNum: string;
  tier: number;
  color: string;
  radius: number;
}

interface GraphLink extends d3.SimulationLinkDatum<GraphNode> {
  source: string | GraphNode;
  target: string | GraphNode;
  tierDiff: number;
  sameDept: boolean;
}

const DEPT_COLORS: Record<string, string> = {
  "01": "#7C3AED",
  "02": "#A855F7",
  "03": "#00E5FF",
  "04": "#FFB800",
  "05": "#FF6B2B",
  "06": "#00BFFF",
  "07": "#00FF88",
  "08": "#FF1744",
  "09": "#448AFF",
  "10": "#FF4081",
  "11": "#1DE9B6",
  "12": "#B388FF",
  "13": "#76FF03",
  "14": "#FF5252",
  "15": "#90A4AE",
  "16": "#E040FB",
  "17": "#40C4FF",
  "18": "#8D6E63",
  "19": "#FFD740",
  "20": "#64FFDA",
};

const DEPT_NAMES: Record<string, string> = {
  "01": "Executive", "02": "Engineering", "03": "Platform", "04": "Product",
  "05": "Design", "06": "Data/AI/ML", "07": "QA", "08": "Security",
  "09": "Sales", "10": "Marketing", "11": "Customer", "12": "HR",
  "13": "Finance", "14": "Legal", "15": "IT Ops", "16": "DevRel",
  "17": "Programs", "18": "Governance", "19": "Special", "20": "Docs",
};

function tierRadius(tier: number): number {
  return [28, 22, 18, 15, 13, 12, 11, 10, 13, 15][tier] ?? 11;
}

/**
 * Some agents carry compound reports_to values such as "CTO + VP-ARCH" or
 * "EM-FE or EM-BE". We normalise these to the first code so that the node
 * still connects to a real manager rather than floating free in the graph.
 */
function primaryReportsTo(raw: string | undefined, nodeIds: Set<string>): string | null {
  if (!raw) return null;
  // Split on " + " or " or " (case-insensitive) and take the first token
  const first = raw.split(/\s*\+\s*|\s+or\s+/i)[0].trim();
  return nodeIds.has(first) ? first : null;
}

export default function NetworkGraph() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const simulationRef = useRef<d3.Simulation<GraphNode, GraphLink> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nodeCount, setNodeCount] = useState(0);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [hoveredDept, setHoveredDept] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/195_shades_of_agents-/data/agents.json")
      .then((r) => r.json())
      .then(async (agents: Agent[]) => {
        if (cancelled) return;
        setLoading(false);
        if (!svgRef.current || !containerRef.current) return;

        // Wait one frame before measuring so layout has painted
        await new Promise<void>((r) => requestAnimationFrame(() => r()));

        try {
          // Measure container — fall back to 1200 if layout hasn't painted yet
          const rawWidth = containerRef.current?.clientWidth ?? 0;
          const width = rawWidth > 0 ? rawWidth : 1200;
          const height = Math.max(700, window.innerHeight - 200);

          // Build nodes
          const nodes: GraphNode[] = agents.map((a) => ({
            id: a.code,
            code: a.code,
            role: a.role,
            department: a.department,
            deptNum: a.department_number,
            tier: typeof a.tier === "object" ? a.tier.number : 6,
            color: DEPT_COLORS[a.department_number] || "#94A3B8",
            radius: tierRadius(typeof a.tier === "object" ? a.tier.number : 6),
          }));

          // Expose node count for debug overlay
          setNodeCount(nodes.length);

          // Build links — only include links where both endpoints exist.
          // Compound reports_to values like "CTO + VP-ARCH" are normalised to the
          // primary manager so governance and special agents remain connected.
          const nodeIds = new Set(nodes.map((n) => n.id));
          const nodeMap = new Map(nodes.map((n) => [n.id, n]));
          const links: GraphLink[] = agents
            .map((a) => ({ agent: a, mgr: primaryReportsTo(a.reports_to, nodeIds) }))
            .filter(({ agent, mgr }) => mgr !== null && nodeIds.has(agent.code))
            .map(({ agent, mgr }) => {
              const srcNode = nodeMap.get(mgr!)!;
              const tgtNode = nodeMap.get(agent.code)!;
              return {
                source: mgr!,
                target: agent.code,
                tierDiff: Math.abs(srcNode.tier - tgtNode.tier),
                sameDept: srcNode.deptNum === tgtNode.deptNum,
              };
            });

          // Stop any previous simulation
          if (simulationRef.current) {
            simulationRef.current.stop();
            simulationRef.current = null;
          }

          // Force simulation
          const simulation = d3
            .forceSimulation<GraphNode>(nodes)
            .force("link", d3.forceLink<GraphNode, GraphLink>(links).id((d) => d.id).distance(50).strength(0.25))
            .force("charge", d3.forceManyBody().strength(-70).distanceMax(250))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("collision", d3.forceCollide<GraphNode>().radius((d) => d.radius + 3))
            .force("x", d3.forceX(width / 2).strength(0.04))
            .force("y", d3.forceY(height / 2).strength(0.04));

          simulationRef.current = simulation;

          // SVG setup
          const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", `0 0 ${width} ${height}`);

          svg.selectAll("*").remove();

          // Gradient defs
          const defs = svg.append("defs");
          links.forEach((l, i) => {
            const sNode = nodeMap.get(typeof l.source === "string" ? l.source : (l.source as GraphNode).id)!;
            const tNode = nodeMap.get(typeof l.target === "string" ? l.target : (l.target as GraphNode).id)!;
            if (sNode && tNode && sNode.deptNum !== tNode.deptNum) {
              const grad = defs.append("linearGradient")
                .attr("id", `edge-grad-${i}`)
                .attr("gradientUnits", "userSpaceOnUse");
              grad.append("stop").attr("offset", "0%").attr("stop-color", sNode.color).attr("stop-opacity", "0.7");
              grad.append("stop").attr("offset", "100%").attr("stop-color", tNode.color).attr("stop-opacity", "0.7");
            }
          });

          // Main transform group (zoom target)
          const g = svg.append("g");

          // Zoom behavior
          const zoomBehavior = d3.zoom<SVGSVGElement, unknown>()
            .scaleExtent([0.2, 5])
            .on("zoom", (event) => {
              g.attr("transform", event.transform);
            });
          svg.call(zoomBehavior);

          // Edge helpers
          function edgeWidth(l: GraphLink): number {
            if (l.tierDiff <= 1) return 2;
            if (l.tierDiff === 2) return 1.5;
            return 1;
          }

          function edgeOpacity(l: GraphLink): number {
            return l.sameDept ? 0.4 : 0.2;
          }

          function edgeColor(l: GraphLink, i: number): string {
            if (l.sameDept) {
              const sNode = nodeMap.get(typeof l.source === "string" ? l.source : (l.source as GraphNode).id)!;
              return sNode ? sNode.color : "#94A3B8";
            }
            return `url(#edge-grad-${i})`;
          }

          // Link layer
          const linkLayer = g.append("g").attr("class", "link-layer");
          const link = linkLayer
            .selectAll<SVGLineElement, GraphLink>("line")
            .data(links)
            .join("line")
            .attr("stroke", (l, i) => edgeColor(l, i))
            .attr("stroke-opacity", (l) => edgeOpacity(l))
            .attr("stroke-width", (l) => edgeWidth(l))
            .attr("stroke-linecap", "round")
            .attr("stroke-dasharray", "6 4")
            .on("mouseover", function (_event, d) {
              d3.select(this)
                .attr("stroke-opacity", 0.9)
                .attr("stroke-width", edgeWidth(d) + 2);
              const s = d.source as GraphNode;
              const t = d.target as GraphNode;
              if (s.x == null || t.x == null) return;
              const mx = (s.x + t.x) / 2;
              const my = (s.y! + t.y!) / 2;
              g.append("text")
                .attr("class", "edge-tooltip")
                .attr("x", mx).attr("y", my - 8)
                .attr("text-anchor", "middle")
                .attr("fill", "#00E5FF")
                .attr("font-size", "10px")
                .attr("font-family", "'JetBrains Mono', monospace")
                .attr("pointer-events", "none")
                .text(`${s.code} -> ${t.code}`);
            })
            .on("mouseout", function (_event, d) {
              d3.select(this)
                .attr("stroke-opacity", edgeOpacity(d))
                .attr("stroke-width", edgeWidth(d));
              g.selectAll(".edge-tooltip").remove();
            });

          // Node layer
          const nodeLayer = g.append("g").attr("class", "node-layer");

          // Orbital rings (static dashes — no animation)
          const orbitalRings = nodeLayer
            .selectAll<SVGCircleElement, GraphNode>("circle.orbital")
            .data(nodes)
            .join("circle")
            .attr("class", "orbital")
            .attr("r", (d) => d.radius + 5)
            .attr("fill", "none")
            .attr("stroke", (d) => d.color)
            .attr("stroke-width", 0.5)
            .attr("stroke-opacity", 0.25)
            .attr("stroke-dasharray", "3 3")
            .attr("pointer-events", "none");

          // Core node circles
          const node = nodeLayer
            .selectAll<SVGCircleElement, GraphNode>("circle.core-node")
            .data(nodes)
            .join("circle")
            .attr("class", "core-node")
            .attr("r", (d) => d.radius)
            .attr("fill", (d) => d.color)
            .attr("fill-opacity", 0.82)
            .attr("stroke", (d) => d.color)
            .attr("stroke-width", 1.5)
            .attr("stroke-opacity", 0.55)
            .attr("cursor", "pointer")
            .on("click", (_event, d) => {
              const agent = agents.find((a) => a.code === d.id);
              if (agent) setSelectedAgent(agent);

              // Click ripple
              const ripple = nodeLayer.append("circle")
                .attr("cx", d.x ?? 0).attr("cy", d.y ?? 0)
                .attr("r", d.radius)
                .attr("fill", "none")
                .attr("stroke", d.color)
                .attr("stroke-width", 2)
                .attr("stroke-opacity", 0.8)
                .attr("pointer-events", "none");
              ripple.transition().duration(700).ease(d3.easeCubicOut)
                .attr("r", d.radius + 35)
                .attr("stroke-opacity", 0)
                .remove();
            })
            .on("mouseover", function (_event, d) {
              d3.select(this)
                .attr("fill-opacity", 1)
                .attr("stroke-opacity", 1)
                .attr("stroke-width", 3);

              // Fade non-department nodes
              node
                .attr("fill-opacity", (n) => n.deptNum === d.deptNum ? 0.95 : 0.12)
                .attr("stroke-opacity", (n) => n.deptNum === d.deptNum ? 0.8 : 0.04);
              orbitalRings
                .attr("stroke-opacity", (n) => n.deptNum === d.deptNum ? 0.4 : 0.03);
              link
                .attr("stroke-opacity", (l) => {
                  const s = l.source as GraphNode;
                  const t = l.target as GraphNode;
                  return s.deptNum === d.deptNum || t.deptNum === d.deptNum ? 0.7 : 0.04;
                })
                .attr("stroke-width", (l) => {
                  const s = l.source as GraphNode;
                  const t = l.target as GraphNode;
                  return s.deptNum === d.deptNum || t.deptNum === d.deptNum
                    ? edgeWidth(l) + 1.5 : edgeWidth(l) * 0.3;
                });
              // Fade labels
              nodeLabels
                .attr("opacity", (n) => n.deptNum === d.deptNum ? 1 : 0.05);

              // Tooltip
              const tooltipG = g.append("g").attr("class", "tooltip-group");
              const label = `${d.code} -- ${d.role}`;
              const tw = label.length * 6.2 + 16;
              const tx = (d.x ?? 0) + d.radius + 8;
              const ty = (d.y ?? 0) - 10;
              tooltipG.append("rect")
                .attr("x", tx)
                .attr("y", ty)
                .attr("width", tw)
                .attr("height", 22)
                .attr("rx", 4)
                .attr("fill", "rgba(10, 14, 30, 0.88)")
                .attr("stroke", d.color)
                .attr("stroke-width", 0.5)
                .attr("stroke-opacity", 0.5);
              tooltipG.append("text")
                .attr("x", tx + 8)
                .attr("y", ty + 14)
                .attr("fill", d.color)
                .attr("font-size", "10px")
                .attr("font-family", "'JetBrains Mono', monospace")
                .attr("pointer-events", "none")
                .text(label);
            })
            .on("mouseout", function () {
              node
                .attr("fill-opacity", 0.82)
                .attr("stroke-opacity", 0.55)
                .attr("stroke-width", 1.5);
              orbitalRings.attr("stroke-opacity", 0.25);
              link
                .attr("stroke-opacity", (l) => edgeOpacity(l))
                .attr("stroke-width", (l) => edgeWidth(l));
              nodeLabels.attr("opacity", (d) => d.tier <= 3 ? 1 : 0.7);
              g.selectAll(".tooltip-group").remove();
            })
            .call(
              d3.drag<SVGCircleElement, GraphNode>()
                .on("start", (event, d) => {
                  if (!event.active) simulation.alphaTarget(0.3).restart();
                  d.fx = d.x;
                  d.fy = d.y;
                })
                .on("drag", (event, d) => {
                  d.fx = event.x;
                  d.fy = event.y;
                })
                .on("end", (event, d) => {
                  if (!event.active) simulation.alphaTarget(0);
                  d.fx = null;
                  d.fy = null;
                })
            );

          // Node labels — show code for senior tiers, smaller labels for others
          const nodeLabels = nodeLayer
            .selectAll<SVGTextElement, GraphNode>("text.node-label")
            .data(nodes)
            .join("text")
            .attr("class", "node-label")
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "central")
            .attr("font-family", "'JetBrains Mono', monospace")
            .attr("font-size", (d) => {
              if (d.tier === 0) return "8px";
              if (d.tier <= 2) return "6.5px";
              return "5.5px";
            })
            .attr("fill", "#ffffff")
            .attr("fill-opacity", (d) => d.tier <= 3 ? 0.95 : 0.75)
            .attr("opacity", (d) => d.tier <= 3 ? 1 : 0.7)
            .attr("pointer-events", "none")
            .attr("font-weight", (d) => d.tier <= 1 ? "700" : "500")
            .text((d) => d.code);

          // Tick — update positions
          simulation.on("tick", () => {
            link
              .attr("x1", (d) => (d.source as GraphNode).x ?? 0)
              .attr("y1", (d) => (d.source as GraphNode).y ?? 0)
              .attr("x2", (d) => (d.target as GraphNode).x ?? 0)
              .attr("y2", (d) => (d.target as GraphNode).y ?? 0);

            // Update gradient endpoints so gradients track node positions
            links.forEach((l, i) => {
              const s = l.source as GraphNode;
              const t = l.target as GraphNode;
              if (!l.sameDept && s.x != null && t.x != null) {
                defs.select(`#edge-grad-${i}`)
                  .attr("x1", s.x).attr("y1", s.y!)
                  .attr("x2", t.x).attr("y2", t.y!);
              }
            });

            node.attr("cx", (d) => d.x ?? 0).attr("cy", (d) => d.y ?? 0);
            orbitalRings.attr("cx", (d) => d.x ?? 0).attr("cy", (d) => d.y ?? 0);
            nodeLabels.attr("x", (d) => d.x ?? 0).attr("y", (d) => d.y ?? 0);
          });

          // After simulation settles, apply an initial zoom to center the graph
          simulation.on("end", () => {
            if (cancelled) return;
            const initialTransform = d3.zoomIdentity.translate(width / 2, height / 2).scale(0.7);
            svg.transition().duration(500).call(zoomBehavior.transform, initialTransform);
          });
        } catch (e) {
          if (!cancelled) {
            setError(`D3 render error: ${e instanceof Error ? e.message : String(e)}`);
            console.error("NetworkGraph D3 error:", e);
          }
        }
      })
      .catch(() => {
        if (!cancelled) {
          setLoading(false);
          setError("Failed to load agent data");
        }
      });

    // Proper useEffect cleanup
    return () => {
      cancelled = true;
      if (simulationRef.current) {
        simulationRef.current.stop();
        simulationRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative">
      {loading && (
        <div className="flex items-center justify-center py-20">
          <div className="relative">
            <div className="h-10 w-10 border-2 border-[#00E5FF] border-t-transparent rounded-full animate-spin" />
            <div
              className="absolute inset-0 h-10 w-10 border-2 border-[#7C3AED] border-b-transparent rounded-full animate-spin"
              style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
            />
          </div>
          <span className="ml-4 text-[#94A3B8] font-mono text-sm tracking-wider">
            Connecting 195 agents...
          </span>
        </div>
      )}

      <div
        ref={containerRef}
        className="w-full overflow-hidden rounded-xl relative"
        style={{
          minHeight: "700px",
          border: "1px solid rgba(0, 229, 255, 0.12)",
          background: "linear-gradient(135deg, #0a0a1a 0%, #0d1117 50%, #0a0f1e 100%)",
        }}
      >
        <svg
          ref={svgRef}
          className="w-full"
          height="700"
          style={{ background: "transparent" }}
        />
        {nodeCount > 0 && (
          <div style={{position:"absolute",top:8,left:12,background:"rgba(0,0,0,0.7)",color:"#00D9FF",padding:"4px 10px",borderRadius:4,fontSize:"11px",fontFamily:"monospace",pointerEvents:"none",zIndex:20}}>
            {nodeCount} agents
          </div>
        )}
        {error && (
          <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:"#FF4444",fontFamily:"monospace"}}>
            {error}
          </div>
        )}
      </div>

      {/* Department Legend */}
      <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
        {Object.entries(DEPT_COLORS).map(([num, color]) => (
          <button
            key={num}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono transition-all duration-200"
            style={{
              background: hoveredDept === num ? `${color}18` : "rgba(10, 14, 30, 0.6)",
              border: `1px solid ${hoveredDept === num ? color : "rgba(255,255,255,0.06)"}`,
            }}
            onMouseEnter={() => setHoveredDept(num)}
            onMouseLeave={() => setHoveredDept(null)}
          >
            <span
              className="h-2 w-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: color }}
            />
            <span style={{ color: hoveredDept === num ? color : "#64748B" }}>
              {DEPT_NAMES[num] || num}
            </span>
          </button>
        ))}
      </div>

      {/* Selected Agent Card */}
      {selectedAgent && (
        <div
          className="absolute top-4 right-4 p-4 max-w-xs z-10 rounded-xl"
          style={{
            background: "rgba(10, 14, 30, 0.92)",
            backdropFilter: "blur(12px)",
            border: `1px solid ${DEPT_COLORS[selectedAgent.department_number] || "#00E5FF"}35`,
          }}
        >
          <div className="flex items-start justify-between mb-2">
            <div>
              <span
                className="text-xs font-mono font-bold tracking-wider"
                style={{ color: DEPT_COLORS[selectedAgent.department_number] || "#00E5FF" }}
              >
                {selectedAgent.code}
              </span>
              <h3 className="text-sm font-semibold text-[#E8ECF4]">{selectedAgent.role}</h3>
            </div>
            <button
              onClick={() => setSelectedAgent(null)}
              className="text-[#64748B] hover:text-[#E8ECF4] text-lg leading-none transition-colors"
            >
              &times;
            </button>
          </div>
          <p className="text-xs text-[#94A3B8] mb-1.5 font-mono">{selectedAgent.department}</p>
          <p className="text-xs text-[#64748B] mb-3">
            <span
              className="inline-block px-1.5 py-0.5 rounded text-[9px] font-mono mr-1"
              style={{
                background: `${DEPT_COLORS[selectedAgent.department_number] || "#00E5FF"}15`,
                color: DEPT_COLORS[selectedAgent.department_number] || "#00E5FF",
                border: `1px solid ${DEPT_COLORS[selectedAgent.department_number] || "#00E5FF"}30`,
              }}
            >
              Tier {selectedAgent.tier.number}
            </span>
            {selectedAgent.tier.label}
            {selectedAgent.personal?.nickname && (
              <span className="italic text-[#94A3B8]"> &middot; &ldquo;{selectedAgent.personal.nickname}&rdquo;</span>
            )}
          </p>
          <a
            href={`/195_shades_of_agents-/agents/${selectedAgent.code.toLowerCase()}/`}
            className="text-xs font-mono hover:underline transition-colors"
            style={{ color: DEPT_COLORS[selectedAgent.department_number] || "#00E5FF" }}
          >
            View full profile &rarr;
          </a>
        </div>
      )}

      <p className="mt-3 text-[10px] text-[#475569] text-center font-mono tracking-wider uppercase">
        Drag to reposition &middot; Scroll to zoom &middot; Click to inspect agents
      </p>
    </div>
  );
}
