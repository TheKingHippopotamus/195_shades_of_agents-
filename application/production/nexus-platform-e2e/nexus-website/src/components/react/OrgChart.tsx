import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface Agent {
  code: string;
  role: string;
  department: string;
  department_number: string;
  tier: { number: number; label: string };
  reports_to: string;
  personal?: { nickname: string };
}

interface TreeNode {
  code: string;
  role: string;
  department: string;
  deptNum: string;
  tier: number;
  color: string;
  children?: TreeNode[];
}

const DEPT_COLORS: Record<string, string> = {
  "01": "#6366F1", "02": "#8B5CF6", "03": "#22D3EE", "04": "#F59E0B",
  "05": "#F97316", "06": "#06B6D4", "07": "#10B981", "08": "#EF4444",
  "09": "#3B82F6", "10": "#EC4899", "11": "#14B8A6", "12": "#A855F7",
  "13": "#84CC16", "14": "#F43F5E", "15": "#94A3B8", "16": "#D946EF",
  "17": "#0EA5E9", "18": "#78716C", "19": "#FBBF24", "20": "#2DD4BF",
};

function buildTree(agents: Agent[]): TreeNode {
  const agentMap = new Map<string, Agent>();
  agents.forEach((a) => agentMap.set(a.code, a));

  function makeNode(agent: Agent): TreeNode {
    const children = agents
      .filter((a) => a.reports_to === agent.code)
      .sort((a, b) => parseInt(a.department_number) - parseInt(b.department_number))
      .map(makeNode);

    return {
      code: agent.code,
      role: agent.role,
      department: agent.department,
      deptNum: agent.department_number,
      tier: agent.tier.number,
      color: DEPT_COLORS[agent.department_number] || "#94A3B8",
      children: children.length > 0 ? children : undefined,
    };
  }

  // CEO is the root
  const ceo = agents.find((a) => a.code === "CEO");
  if (ceo) return makeNode(ceo);

  // Fallback: find the agent with no valid reports_to
  const root = agents.find((a) => !agentMap.has(a.reports_to));
  return root ? makeNode(root) : { code: "ROOT", role: "Root", department: "", deptNum: "01", tier: 0, color: "#6366F1" };
}

export default function OrgChart() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [depth, setDepth] = useState(3); // Default expansion depth

  useEffect(() => {
    fetch("/195_shades_of_agents-/data/agents.json")
      .then((r) => r.json())
      .then((agents: Agent[]) => {
        setLoading(false);
        if (!svgRef.current || !containerRef.current) return;

        const treeData = buildTree(agents);
        const root = d3.hierarchy(treeData);

        // Collapse nodes deeper than the depth setting
        root.each((d) => {
          if (d.depth >= depth && d.children) {
            (d as any)._children = d.children;
            d.children = undefined;
          }
        });

        const width = containerRef.current.clientWidth;
        const nodeWidth = 180;
        const nodeHeight = 50;

        const treeLayout = d3.tree<TreeNode>().nodeSize([nodeHeight + 10, nodeWidth + 40]);

        function update(source: d3.HierarchyPointNode<TreeNode>) {
          const treeRoot = treeLayout(root as d3.HierarchyNode<TreeNode>);
          const nodes = treeRoot.descendants();
          const links = treeRoot.links();

          // Calculate bounds
          let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
          nodes.forEach((d) => {
            if (d.x < minX) minX = d.x;
            if (d.x > maxX) maxX = d.x;
            if (d.y < minY) minY = d.y;
            if (d.y > maxY) maxY = d.y;
          });

          const treeHeight = maxX - minX + 100;
          const treeWidth = maxY - minY + nodeWidth + 100;

          const svg = d3.select(svgRef.current)
            .attr("width", Math.max(width, treeWidth))
            .attr("height", Math.max(600, treeHeight));

          svg.selectAll("*").remove();

          const g = svg.append("g")
            .attr("transform", `translate(50, ${-minX + 50})`);

          // Zoom
          const zoom = d3.zoom<SVGSVGElement, unknown>()
            .scaleExtent([0.2, 3])
            .on("zoom", (event) => g.attr("transform", event.transform));
          svg.call(zoom);

          // Initial transform
          svg.call(zoom.transform, d3.zoomIdentity.translate(50, -minX + 50));

          // Links
          g.selectAll("path.link")
            .data(links)
            .join("path")
            .attr("class", "link")
            .attr("fill", "none")
            .attr("stroke", "var(--border-color)")
            .attr("stroke-opacity", 0.4)
            .attr("stroke-width", 1)
            .attr("d", d3.linkHorizontal<d3.HierarchyLink<TreeNode>, d3.HierarchyPointNode<TreeNode>>()
              .x((d) => d.y)
              .y((d) => d.x) as any
            );

          // Node groups
          const node = g.selectAll("g.node")
            .data(nodes)
            .join("g")
            .attr("class", "node")
            .attr("transform", (d) => `translate(${d.y},${d.x})`)
            .attr("cursor", "pointer")
            .on("click", (_event, d) => {
              if ((d as any)._children) {
                d.children = (d as any)._children;
                (d as any)._children = undefined;
              } else if (d.children) {
                (d as any)._children = d.children;
                d.children = undefined;
              }
              update(d as d3.HierarchyPointNode<TreeNode>);
            });

          // Node backgrounds
          node.append("rect")
            .attr("x", -4)
            .attr("y", -18)
            .attr("width", nodeWidth - 10)
            .attr("height", 36)
            .attr("rx", 6)
            .attr("fill", "var(--bg-surface)")
            .attr("stroke", (d) => d.data.color)
            .attr("stroke-width", 1.5)
            .attr("stroke-opacity", 0.5);

          // Color bar
          node.append("rect")
            .attr("x", -4)
            .attr("y", -18)
            .attr("width", 4)
            .attr("height", 36)
            .attr("rx", 2)
            .attr("fill", (d) => d.data.color);

          // Code text
          node.append("text")
            .attr("x", 8)
            .attr("y", -4)
            .attr("fill", "#00D9FF")
            .attr("font-size", "10px")
            .attr("font-family", "monospace")
            .attr("font-weight", "600")
            .text((d) => d.data.code);

          // Role text
          node.append("text")
            .attr("x", 8)
            .attr("y", 10)
            .attr("fill", "var(--text-secondary)")
            .attr("font-size", "9px")
            .text((d) => {
              const role = d.data.role;
              return role.length > 24 ? role.substring(0, 22) + "..." : role;
            });

          // Expand/collapse indicator
          node.filter((d) => d.children || (d as any)._children)
            .append("circle")
            .attr("cx", nodeWidth - 16)
            .attr("cy", 0)
            .attr("r", 7)
            .attr("fill", (d) => d.children ? "var(--bg-elevated)" : d.data.color + "30")
            .attr("stroke", (d) => d.data.color)
            .attr("stroke-width", 1);

          node.filter((d) => d.children || (d as any)._children)
            .append("text")
            .attr("x", nodeWidth - 16)
            .attr("y", 3.5)
            .attr("text-anchor", "middle")
            .attr("fill", "var(--text-secondary)")
            .attr("font-size", "10px")
            .text((d) => d.children ? "-" : "+");
        }

        update(root as d3.HierarchyPointNode<TreeNode>);
      })
      .catch(() => setLoading(false));
  }, [depth]);

  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 border-2 border-[#00D9FF] border-t-transparent rounded-full animate-spin" />
          <span className="ml-3 text-[var(--text-secondary)]">Building org chart...</span>
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center gap-4 mb-4">
        <label className="text-sm text-[var(--text-secondary)]">Default depth:</label>
        <div className="flex gap-1">
          {[2, 3, 4, 5].map((d) => (
            <button
              key={d}
              onClick={() => setDepth(d)}
              className={`px-3 py-1 rounded text-sm ${
                depth === d
                  ? "bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30"
                  : "text-[var(--text-secondary)] border border-[var(--border-color)] hover:bg-[var(--bg-elevated)]"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
        <span className="text-xs text-[var(--text-secondary)]">Click nodes to expand/collapse</span>
      </div>

      <div ref={containerRef} className="w-full overflow-auto rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)]">
        <svg ref={svgRef} className="min-w-full" />
      </div>

      <p className="mt-3 text-xs text-[var(--text-secondary)] text-center">
        Scroll to zoom. Drag to pan. Click a node to expand or collapse its subtree.
      </p>
    </div>
  );
}
