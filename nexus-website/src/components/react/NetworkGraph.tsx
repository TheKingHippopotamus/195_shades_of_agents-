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
}

const DEPT_COLORS: Record<string, string> = {
  "01": "#6366F1", "02": "#8B5CF6", "03": "#22D3EE", "04": "#F59E0B",
  "05": "#F97316", "06": "#06B6D4", "07": "#10B981", "08": "#EF4444",
  "09": "#3B82F6", "10": "#EC4899", "11": "#14B8A6", "12": "#A855F7",
  "13": "#84CC16", "14": "#F43F5E", "15": "#94A3B8", "16": "#D946EF",
  "17": "#0EA5E9", "18": "#78716C", "19": "#FBBF24", "20": "#2DD4BF",
};

function tierRadius(tier: number): number {
  return [18, 14, 12, 10, 9, 8, 7, 6, 9, 10][tier] || 7;
}

export default function NetworkGraph() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [hoveredDept, setHoveredDept] = useState<string | null>(null);

  useEffect(() => {
    fetch("/195_shades_of_agents-/data/agents.json")
      .then((r) => r.json())
      .then((agents: Agent[]) => {
        setLoading(false);
        if (!svgRef.current || !containerRef.current) return;

        const width = containerRef.current.clientWidth;
        const height = Math.max(600, window.innerHeight - 300);

        // Build nodes
        const nodes: GraphNode[] = agents.map((a) => ({
          id: a.code,
          code: a.code,
          role: a.role,
          department: a.department,
          deptNum: a.department_number,
          tier: a.tier.number,
          color: DEPT_COLORS[a.department_number] || "#94A3B8",
          radius: tierRadius(a.tier.number),
        }));

        // Build links (reporting chain)
        const nodeIds = new Set(nodes.map((n) => n.id));
        const links: GraphLink[] = agents
          .filter((a) => a.reports_to && nodeIds.has(a.reports_to))
          .map((a) => ({ source: a.reports_to, target: a.code }));

        // Create simulation
        const simulation = d3
          .forceSimulation(nodes)
          .force("link", d3.forceLink<GraphNode, GraphLink>(links).id((d) => d.id).distance(40).strength(0.3))
          .force("charge", d3.forceManyBody().strength(-60).distanceMax(200))
          .force("center", d3.forceCenter(width / 2, height / 2))
          .force("collision", d3.forceCollide<GraphNode>().radius((d) => d.radius + 2))
          .force("x", d3.forceX(width / 2).strength(0.05))
          .force("y", d3.forceY(height / 2).strength(0.05));

        // Set up SVG
        const svg = d3.select(svgRef.current)
          .attr("width", width)
          .attr("height", height)
          .attr("viewBox", `0 0 ${width} ${height}`);

        svg.selectAll("*").remove();

        // Zoom
        const g = svg.append("g");
        const zoom = d3.zoom<SVGSVGElement, unknown>()
          .scaleExtent([0.3, 4])
          .on("zoom", (event) => g.attr("transform", event.transform));
        svg.call(zoom);

        // Links
        const link = g
          .append("g")
          .selectAll("line")
          .data(links)
          .join("line")
          .attr("stroke", "var(--border-color)")
          .attr("stroke-opacity", 0.3)
          .attr("stroke-width", 0.5);

        // Nodes
        const node = g
          .append("g")
          .selectAll<SVGCircleElement, GraphNode>("circle")
          .data(nodes)
          .join("circle")
          .attr("r", (d) => d.radius)
          .attr("fill", (d) => d.color)
          .attr("fill-opacity", 0.8)
          .attr("stroke", (d) => d.color)
          .attr("stroke-width", 1.5)
          .attr("stroke-opacity", 0.3)
          .attr("cursor", "pointer")
          .on("click", (_event, d) => {
            const agent = agents.find((a) => a.code === d.id);
            if (agent) setSelectedAgent(agent);
          })
          .on("mouseover", function (_event, d) {
            d3.select(this)
              .attr("fill-opacity", 1)
              .attr("stroke-opacity", 1)
              .attr("stroke-width", 3);

            // Highlight same department
            node
              .attr("fill-opacity", (n) => n.deptNum === d.deptNum ? 0.9 : 0.2)
              .attr("stroke-opacity", (n) => n.deptNum === d.deptNum ? 0.6 : 0.1);
            link
              .attr("stroke-opacity", (l) => {
                const s = l.source as GraphNode;
                const t = l.target as GraphNode;
                return s.deptNum === d.deptNum || t.deptNum === d.deptNum ? 0.5 : 0.05;
              });

            // Tooltip
            g.append("text")
              .attr("class", "tooltip-text")
              .attr("x", d.x! + d.radius + 5)
              .attr("y", d.y! + 4)
              .attr("fill", "var(--text-primary)")
              .attr("font-size", "11px")
              .attr("font-family", "monospace")
              .text(`${d.code} — ${d.role}`);
          })
          .on("mouseout", function () {
            node
              .attr("fill-opacity", 0.8)
              .attr("stroke-opacity", 0.3)
              .attr("stroke-width", 1.5);
            link.attr("stroke-opacity", 0.3);
            g.selectAll(".tooltip-text").remove();
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

        // Tick
        simulation.on("tick", () => {
          link
            .attr("x1", (d) => (d.source as GraphNode).x!)
            .attr("y1", (d) => (d.source as GraphNode).y!)
            .attr("x2", (d) => (d.target as GraphNode).x!)
            .attr("y2", (d) => (d.target as GraphNode).y!);

          node
            .attr("cx", (d) => d.x!)
            .attr("cy", (d) => d.y!);
        });

        return () => simulation.stop();
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="relative">
      {loading && (
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 border-2 border-[#00D9FF] border-t-transparent rounded-full animate-spin" />
          <span className="ml-3 text-[var(--text-secondary)]">Loading 195 agents...</span>
        </div>
      )}

      <div ref={containerRef} className="w-full overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)]">
        <svg ref={svgRef} className="w-full" />
      </div>

      {/* Department Legend */}
      <div className="mt-4 flex flex-wrap gap-2">
        {Object.entries(DEPT_COLORS).map(([num, color]) => (
          <button
            key={num}
            className="flex items-center gap-1.5 px-2 py-1 rounded text-[10px] hover:bg-[var(--bg-elevated)] transition-colors"
            onMouseEnter={() => setHoveredDept(num)}
            onMouseLeave={() => setHoveredDept(null)}
          >
            <span className="h-2.5 w-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
            <span className="text-[var(--text-secondary)]">{num}</span>
          </button>
        ))}
      </div>

      {/* Selected agent detail */}
      {selectedAgent && (
        <div className="absolute top-4 right-4 nexus-card p-4 max-w-xs shadow-xl z-10">
          <div className="flex items-start justify-between mb-2">
            <div>
              <span className="text-xs font-mono text-[#00D9FF] font-bold">{selectedAgent.code}</span>
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">{selectedAgent.role}</h3>
            </div>
            <button
              onClick={() => setSelectedAgent(null)}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-lg leading-none"
            >
              &times;
            </button>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mb-2">{selectedAgent.department}</p>
          <p className="text-xs text-[var(--text-secondary)] mb-3">
            Tier {selectedAgent.tier.number} — {selectedAgent.tier.label}
            {selectedAgent.personal?.nickname && (
              <span className="italic"> &middot; &ldquo;{selectedAgent.personal.nickname}&rdquo;</span>
            )}
          </p>
          <a
            href={`/195_shades_of_agents-/agents/${selectedAgent.code.toLowerCase()}`}
            className="text-xs text-[#00D9FF] hover:underline"
          >
            View full profile &rarr;
          </a>
        </div>
      )}

      <p className="mt-3 text-xs text-[var(--text-secondary)] text-center">
        Drag to reposition nodes. Scroll to zoom. Click an agent for details. Hover to highlight department.
      </p>
    </div>
  );
}
