import type { Agent } from "../schemas/agent";

let agentsCache: Agent[] | null = null;

export async function getAllAgents(): Promise<Agent[]> {
  if (agentsCache) return agentsCache;

  const data = await import("../data/agents.json");
  agentsCache = data.default as Agent[];
  return agentsCache;
}

export async function getAgentByCode(code: string): Promise<Agent | undefined> {
  const agents = await getAllAgents();
  return agents.find((a) => a.code.toLowerCase() === code.toLowerCase());
}

export async function getAgentByNumber(num: string): Promise<Agent | undefined> {
  const agents = await getAllAgents();
  return agents.find((a) => a.agent_number === num);
}

export async function getAgentsByDepartment(deptNumber: string): Promise<Agent[]> {
  const agents = await getAllAgents();
  return agents.filter((a) => a.department_number === deptNumber);
}

export async function getAgentsByTier(tier: number): Promise<Agent[]> {
  const agents = await getAllAgents();
  return agents.filter((a) => a.tier.number === tier);
}

export async function getDirectReports(code: string): Promise<Agent[]> {
  const agents = await getAllAgents();
  return agents.filter((a) => a.reports_to === code);
}

export async function getReportingChain(code: string): Promise<Agent[]> {
  const agents = await getAllAgents();
  const chain: Agent[] = [];
  let current = agents.find((a) => a.code === code);

  while (current) {
    chain.unshift(current);
    if (!current.reports_to || current.reports_to === "Board/Client") break;
    current = agents.find((a) => a.code === current!.reports_to);
  }

  return chain;
}
