import { useState, useEffect, useMemo } from "react";

interface Agent {
  agent_number: string;
  code: string;
  role: string;
  department: string;
  department_number: string;
  department_slug: string;
  tier: { number: number; label: string };
  personal?: { nickname: string; age: number };
  avatar_url: string;
}

interface Department {
  number: string;
  name: string;
  color: string;
  agent_count: number;
}

const DEPT_COLORS: Record<string, string> = {
  "01": "#6366F1", "02": "#8B5CF6", "03": "#22D3EE", "04": "#F59E0B",
  "05": "#F97316", "06": "#06B6D4", "07": "#10B981", "08": "#EF4444",
  "09": "#3B82F6", "10": "#EC4899", "11": "#14B8A6", "12": "#A855F7",
  "13": "#84CC16", "14": "#F43F5E", "15": "#94A3B8", "16": "#D946EF",
  "17": "#0EA5E9", "18": "#78716C", "19": "#FBBF24", "20": "#2DD4BF",
};

type SortKey = "number" | "code" | "tier" | "department";
type ViewMode = "grid" | "list";

export default function AgentDirectory() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [deptFilter, setDeptFilter] = useState("");
  const [tierFilter, setTierFilter] = useState("");
  const [sort, setSort] = useState<SortKey>("number");
  const [view, setView] = useState<ViewMode>("grid");

  useEffect(() => {
    Promise.all([
      fetch("/195_shades_of_agents-/data/agents.json").then((r) => r.json()),
      fetch("/195_shades_of_agents-/data/departments.json").then((r) => r.json()),
    ]).then(([a, d]) => {
      setAgents(a);
      setDepartments(d);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    let result = agents;

    if (query) {
      const q = query.toLowerCase();
      result = result.filter(
        (a) =>
          a.code.toLowerCase().includes(q) ||
          a.role.toLowerCase().includes(q) ||
          a.department.toLowerCase().includes(q) ||
          a.personal?.nickname?.toLowerCase().includes(q) ||
          a.agent_number.includes(q)
      );
    }

    if (deptFilter) {
      result = result.filter((a) => a.department_number === deptFilter);
    }

    if (tierFilter) {
      result = result.filter((a) => a.tier.number === parseInt(tierFilter));
    }

    result = [...result].sort((a, b) => {
      switch (sort) {
        case "code": return a.code.localeCompare(b.code);
        case "tier": return a.tier.number - b.tier.number || parseInt(a.agent_number) - parseInt(b.agent_number);
        case "department": return a.department_number.localeCompare(b.department_number) || parseInt(a.agent_number) - parseInt(b.agent_number);
        default: return parseInt(a.agent_number) - parseInt(b.agent_number);
      }
    });

    return result;
  }, [agents, query, deptFilter, tierFilter, sort]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 border-2 border-[#00D9FF] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        {/* Search */}
        <div className="flex-1">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search agents by name, code, role, or department..."
            className="w-full px-3 py-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] placeholder:text-[var(--text-secondary)]"
          />
        </div>

        {/* Department filter */}
        <select
          value={deptFilter}
          onChange={(e) => setDeptFilter(e.target.value)}
          className="px-3 py-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#00D9FF]"
        >
          <option value="">All Departments</option>
          {departments.map((d) => (
            <option key={d.number} value={d.number}>
              {d.name} ({d.agent_count})
            </option>
          ))}
        </select>

        {/* Tier filter */}
        <select
          value={tierFilter}
          onChange={(e) => setTierFilter(e.target.value)}
          className="px-3 py-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#00D9FF]"
        >
          <option value="">All Tiers</option>
          {[0,1,2,3,4,5,6,7,8,9].map((t) => (
            <option key={t} value={t}>
              Tier {t} — {["C-Suite","VP","Director","Manager","Staff+","Senior","Mid","Junior","Governance","Special"][t]}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="px-3 py-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#00D9FF]"
        >
          <option value="number">Sort: Number</option>
          <option value="code">Sort: Code</option>
          <option value="tier">Sort: Tier</option>
          <option value="department">Sort: Department</option>
        </select>

        {/* View toggle */}
        <div className="flex rounded-lg border border-[var(--border-color)] overflow-hidden">
          <button
            onClick={() => setView("grid")}
            className={`px-3 py-2 text-sm ${view === "grid" ? "bg-[#00D9FF]/10 text-[#00D9FF]" : "text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]"}`}
          >
            Grid
          </button>
          <button
            onClick={() => setView("list")}
            className={`px-3 py-2 text-sm ${view === "list" ? "bg-[#00D9FF]/10 text-[#00D9FF]" : "text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]"}`}
          >
            List
          </button>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-[var(--text-secondary)] mb-4">
        {filtered.length} of {agents.length} agents
      </p>

      {/* Grid view */}
      {view === "grid" ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {filtered.map((agent) => {
            const color = DEPT_COLORS[agent.department_number] || "#94A3B8";
            const avatarSrc = `/195_shades_of_agents-/brand/avatars/agents/${agent.agent_number}-${agent.code}.svg`;
            return (
              <a
                key={agent.code}
                href={`/195_shades_of_agents-/agents/${agent.code.toLowerCase()}/`}
                className="nexus-card p-4 block group"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="h-12 w-12 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold overflow-hidden"
                    style={{ backgroundColor: `${color}20`, border: `2px solid ${color}` }}
                  >
                    <img
                      src={avatarSrc}
                      alt={`${agent.code} avatar`}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.color = color;
                          parent.textContent = agent.agent_number;
                        }
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-xs font-mono font-semibold text-[#00D9FF]">{agent.code}</span>
                      <span
                        className="text-[9px] px-1 py-0.5 rounded-full font-medium"
                        style={{ backgroundColor: `${color}20`, color }}
                      >
                        T{agent.tier.number}
                      </span>
                    </div>
                    <h3 className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[#00D9FF] transition-colors truncate">
                      {agent.role}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] truncate">{agent.department}</p>
                    {agent.personal?.nickname && (
                      <p className="text-[10px] text-[var(--text-secondary)] italic mt-0.5">
                        &ldquo;{agent.personal.nickname}&rdquo;
                      </p>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      ) : (
        /* List view */
        <div className="space-y-1">
          {filtered.map((agent) => {
            const color = DEPT_COLORS[agent.department_number] || "#94A3B8";
            return (
              <a
                key={agent.code}
                href={`/195_shades_of_agents-/agents/${agent.code.toLowerCase()}/`}
                className="flex items-center gap-4 px-4 py-2.5 rounded-lg hover:bg-[var(--bg-elevated)] transition-colors group"
              >
                <span className="text-xs font-mono text-[var(--text-secondary)] w-8">{agent.agent_number}</span>
                <span className="text-xs font-mono font-semibold text-[#00D9FF] w-24">{agent.code}</span>
                <span
                  className="text-[9px] px-1.5 py-0.5 rounded-full font-medium w-8 text-center"
                  style={{ backgroundColor: `${color}20`, color }}
                >
                  T{agent.tier.number}
                </span>
                <span className="text-sm text-[var(--text-primary)] group-hover:text-[#00D9FF] transition-colors flex-1 truncate">
                  {agent.role}
                </span>
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full hidden sm:inline"
                  style={{ backgroundColor: `${color}15`, color, border: `1px solid ${color}30` }}
                >
                  {agent.department}
                </span>
              </a>
            );
          })}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-lg text-[var(--text-secondary)]">No agents match your filters.</p>
          <button
            onClick={() => { setQuery(""); setDeptFilter(""); setTierFilter(""); }}
            className="mt-4 text-sm text-[#00D9FF] hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
