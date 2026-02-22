import { useState, useMemo } from 'react';
import { DEPARTMENT_COLORS, TIER_COLORS, TIER_LABELS } from '../lib/constants';

interface Agent {
  agentNumber: number;
  code: string;
  role: string;
  department: string;
  departmentNumber: number;
  tier: number;
  tierLabel: string;
  nickname: string | null;
  reportsTo: string;
  slug: string;
}

interface Props {
  agents: Agent[];
  basePath: string;
}

export default function TeamFilter({ agents, basePath }: Props) {
  const [search, setSearch] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');

  const departments = useMemo(() => {
    const depts = [...new Set(agents.map(a => a.department))];
    depts.sort((a, b) => {
      const aNum = agents.find(ag => ag.department === a)?.departmentNumber ?? 0;
      const bNum = agents.find(ag => ag.department === b)?.departmentNumber ?? 0;
      return aNum - bNum;
    });
    return depts;
  }, [agents]);

  const tiers = useMemo(() => {
    return [...new Set(agents.map(a => a.tier))].sort((a, b) => a - b);
  }, [agents]);

  const filtered = useMemo(() => {
    return agents.filter(agent => {
      const matchesSearch = search === '' ||
        agent.code.toLowerCase().includes(search.toLowerCase()) ||
        agent.role.toLowerCase().includes(search.toLowerCase()) ||
        agent.nickname?.toLowerCase().includes(search.toLowerCase()) ||
        String(agent.agentNumber).padStart(3, '0').includes(search);

      const matchesDept = selectedDept === 'all' || agent.department === selectedDept;
      const matchesTier = selectedTier === 'all' || agent.tier === Number(selectedTier);

      return matchesSearch && matchesDept && matchesTier;
    });
  }, [agents, search, selectedDept, selectedTier]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search by name, code, or number..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border bg-[var(--bg-secondary)] text-[var(--text-primary)] border-[var(--border)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-quantum/50 focus:border-quantum transition-colors"
            aria-label="Search agents"
          />
        </div>
        <select
          value={selectedDept}
          onChange={e => setSelectedDept(e.target.value)}
          className="px-4 py-3 rounded-lg border bg-[var(--bg-secondary)] text-[var(--text-primary)] border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-quantum/50 cursor-pointer"
          aria-label="Filter by department"
        >
          <option value="all">All Departments</option>
          {departments.map(dept => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
        <select
          value={selectedTier}
          onChange={e => setSelectedTier(e.target.value)}
          className="px-4 py-3 rounded-lg border bg-[var(--bg-secondary)] text-[var(--text-primary)] border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-quantum/50 cursor-pointer"
          aria-label="Filter by tier"
        >
          <option value="all">All Tiers</option>
          {tiers.map(tier => (
            <option key={tier} value={tier}>Tier {tier} — {TIER_LABELS[tier] ?? `Tier ${tier}`}</option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <p className="text-[var(--text-muted)] text-sm mb-6">
        Showing {filtered.length} of {agents.length} agents
      </p>

      {/* Agent grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map(agent => {
          const deptColor = DEPARTMENT_COLORS[agent.department] ?? '#94A3B8';
          const tierColor = TIER_COLORS[agent.tier] ?? '#94A3B8';
          const tierLabel = TIER_LABELS[agent.tier] ?? `Tier ${agent.tier}`;
          const initials = agent.code.slice(0, 2).toUpperCase();
          const paddedNum = String(agent.agentNumber).padStart(3, '0');

          return (
            <a
              key={agent.agentNumber}
              href={`${basePath}team/${agent.slug}/`}
              className="group block rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-quantum/20 no-underline"
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ring-2"
                  style={{
                    backgroundColor: `${deptColor}20`,
                    color: deptColor,
                    ['--tw-ring-color' as string]: deptColor,
                  }}
                >
                  {initials}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-[var(--text-primary)] text-sm truncate">
                    {agent.nickname ? `"${agent.nickname}"` : agent.code}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] truncate">{agent.role}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-2">
                <span
                  className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold text-white uppercase tracking-wider"
                  style={{ backgroundColor: deptColor }}
                >
                  {agent.department.length > 16 ? agent.department.slice(0, 14) + '...' : agent.department}
                </span>
                <span
                  className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                  style={{
                    backgroundColor: tierColor,
                    color: agent.tier <= 2 ? '#0F172A' : '#FFFFFF',
                  }}
                >
                  {tierLabel}
                </span>
              </div>

              <p className="text-[10px] text-[var(--text-muted)] font-mono">
                #{paddedNum}
              </p>
            </a>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-[var(--text-muted)] text-lg">No agents match your filters.</p>
          <button
            onClick={() => { setSearch(''); setSelectedDept('all'); setSelectedTier('all'); }}
            className="mt-4 text-quantum hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
