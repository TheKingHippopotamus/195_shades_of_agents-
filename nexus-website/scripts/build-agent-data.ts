import { globSync } from "glob";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, basename, dirname } from "path";

// Resolve the agents directory relative to the project root (one level up from nexus-website)
const PROJECT_ROOT = resolve(import.meta.dirname, "../..");
const AGENTS_DIR = resolve(PROJECT_ROOT, "agents");
const SRC_DATA_DIR = resolve(import.meta.dirname, "../src/data");
const PUBLIC_DATA_DIR = resolve(import.meta.dirname, "../public/data");

interface AgentData {
  agent_number: string;
  code: string;
  role: string;
  department: string;
  department_number: string;
  department_slug: string;
  reports_to: string;
  direct_reports?: string[];
  tier: { number: number; label: string };
  personality: string;
  core_responsibilities: string[];
  decision_authority: {
    can_decide: string[];
    must_escalate: string[];
  };
  output_standards: string;
  success_metrics: string[];
  personal?: {
    nickname: string;
    age: number;
    about_me: string;
    what_i_bring: string;
    my_strengths: string[];
    my_weaknesses: string[];
    working_with_me: string;
  };
  avatar_url: string;
}

interface DepartmentData {
  number: string;
  name: string;
  slug: string;
  folder: string;
  agent_count: number;
  agent_range: { start: string; end: string };
  leadership: { code: string; role: string; tier: number }[];
  agents: string[];
  color: string;
}

const DEPT_COLORS: Record<string, string> = {
  "01": "#6366F1", "02": "#8B5CF6", "03": "#22D3EE", "04": "#F59E0B",
  "05": "#F97316", "06": "#06B6D4", "07": "#10B981", "08": "#EF4444",
  "09": "#3B82F6", "10": "#EC4899", "11": "#14B8A6", "12": "#A855F7",
  "13": "#84CC16", "14": "#F43F5E", "15": "#94A3B8", "16": "#D946EF",
  "17": "#0EA5E9", "18": "#78716C", "19": "#FBBF24", "20": "#2DD4BF",
};

const TIER_LABELS: Record<number, string> = {
  0: "C-Suite", 1: "VP", 2: "Director", 3: "Manager",
  4: "Staff+ IC", 5: "Senior IC", 6: "Mid-Level", 7: "Junior",
  8: "Governance", 9: "Special Agent",
};

function extractBetweenTags(content: string, tag: string): string {
  const regex = new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, "m");
  const match = content.match(regex);
  return match ? match[1].trim() : "";
}

function extractTagValue(content: string, tag: string): string {
  const regex = new RegExp(`<${tag}>(.*?)</${tag}>`, "s");
  const match = content.match(regex);
  return match ? match[1].trim() : "";
}

function parseListItems(text: string): string[] {
  if (!text) return [];
  return text
    .split(/\n/)
    .map((line) => line.replace(/^\s*[-\d.)*]+\s*/, "").trim())
    .filter((line) => line.length > 0);
}

function parseTier(tierStr: string): { number: number; label: string } {
  const match = tierStr.match(/Tier\s+(\d)/i);
  const num = match ? parseInt(match[1]) : 6;
  return { number: num, label: TIER_LABELS[num] || "Unknown" };
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[&]/g, "and")
    .replace(/[\/]/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parsePersonal(content: string): AgentData["personal"] | undefined {
  const personalBlock = extractBetweenTags(content, "personal");
  if (!personalBlock) return undefined;

  const nickname = extractTagValue(personalBlock, "nickname");
  const ageStr = extractTagValue(personalBlock, "age");
  const about_me = extractTagValue(personalBlock, "about_me");
  const what_i_bring = extractTagValue(personalBlock, "what_i_bring");
  const my_strengths = parseListItems(extractTagValue(personalBlock, "my_strengths"));
  const my_weaknesses = parseListItems(extractTagValue(personalBlock, "my_weaknesses"));
  const working_with_me = extractTagValue(personalBlock, "working_with_me");

  if (!nickname) return undefined;

  return {
    nickname,
    age: parseInt(ageStr) || 30,
    about_me,
    what_i_bring,
    my_strengths,
    my_weaknesses,
    working_with_me,
  };
}

function parseAgentFile(filePath: string): AgentData {
  const content = readFileSync(filePath, "utf-8");
  const systemPrompt = extractBetweenTags(content, "system_prompt");
  const identity = extractBetweenTags(systemPrompt, "agent_identity");

  const code = extractTagValue(identity, "code");
  const role = extractTagValue(identity, "role").replace(/\s*\(.*\)/, "");
  const agentNumber = extractTagValue(identity, "agent_number");
  const department = extractTagValue(identity, "department");
  const reportsTo = extractTagValue(identity, "reports_to");
  const tierStr = extractTagValue(identity, "tier");

  // Get department number from folder
  const folderName = basename(dirname(filePath));
  const deptNum = folderName.substring(0, 2);

  const personality = extractBetweenTags(systemPrompt, "personality");
  const responsibilities = extractBetweenTags(systemPrompt, "core_responsibilities");
  const decisionAuth = extractBetweenTags(systemPrompt, "decision_authority");
  const outputStandards = extractBetweenTags(systemPrompt, "output_standards");
  const successMetrics = extractBetweenTags(systemPrompt, "success_metrics");

  const canDecide = parseListItems(extractBetweenTags(decisionAuth, "can_decide"));
  const mustEscalate = parseListItems(extractBetweenTags(decisionAuth, "must_escalate"));

  const personal = parsePersonal(systemPrompt);

  return {
    agent_number: agentNumber.padStart(3, "0"),
    code,
    role,
    department,
    department_number: deptNum,
    department_slug: slugify(department),
    reports_to: reportsTo,
    tier: parseTier(tierStr),
    personality,
    core_responsibilities: parseListItems(responsibilities),
    decision_authority: {
      can_decide: canDecide,
      must_escalate: mustEscalate,
    },
    output_standards: outputStandards,
    success_metrics: parseListItems(successMetrics),
    personal,
    avatar_url: `/avatars/${agentNumber.padStart(3, "0")}-${code}.svg`,
  };
}

function buildDirectReports(agents: AgentData[]): void {
  for (const agent of agents) {
    const reports = agents
      .filter((a) => a.reports_to === agent.code)
      .map((a) => a.code);
    if (reports.length > 0) {
      agent.direct_reports = reports;
    }
  }
}

function buildDepartments(agents: AgentData[]): DepartmentData[] {
  const deptMap = new Map<string, AgentData[]>();

  for (const agent of agents) {
    const key = agent.department_number;
    if (!deptMap.has(key)) deptMap.set(key, []);
    deptMap.get(key)!.push(agent);
  }

  const departments: DepartmentData[] = [];

  for (const [deptNum, deptAgents] of deptMap) {
    const sorted = deptAgents.sort(
      (a, b) => parseInt(a.agent_number) - parseInt(b.agent_number)
    );
    const name = sorted[0].department;
    const leadership = sorted
      .filter((a) => a.tier.number <= 2)
      .map((a) => ({ code: a.code, role: a.role, tier: a.tier.number }));

    departments.push({
      number: deptNum,
      name,
      slug: slugify(name),
      folder: `${deptNum}-${name.replace(/[&\/\s]+/g, "-")}`,
      agent_count: sorted.length,
      agent_range: {
        start: sorted[0].agent_number,
        end: sorted[sorted.length - 1].agent_number,
      },
      leadership,
      agents: sorted.map((a) => a.code),
      color: DEPT_COLORS[deptNum] || "#94A3B8",
    });
  }

  return departments.sort((a, b) => a.number.localeCompare(b.number));
}

// ---- MAIN ----
console.log("Building agent data...");
console.log(`Scanning: ${AGENTS_DIR}`);

const files = globSync(`${AGENTS_DIR}/*/*.md`);
console.log(`Found ${files.length} agent files`);

const agents: AgentData[] = [];
const errors: string[] = [];

for (const file of files) {
  try {
    const agent = parseAgentFile(file);
    if (agent.code && agent.agent_number) {
      agents.push(agent);
    } else {
      errors.push(`Skipped (no code/number): ${basename(file)}`);
    }
  } catch (err) {
    errors.push(`Error parsing ${basename(file)}: ${(err as Error).message}`);
  }
}

// Sort by agent number
agents.sort((a, b) => parseInt(a.agent_number) - parseInt(b.agent_number));

// Build cross-references
buildDirectReports(agents);

// Build departments
const departments = buildDepartments(agents);

// Write outputs
mkdirSync(SRC_DATA_DIR, { recursive: true });
mkdirSync(PUBLIC_DATA_DIR, { recursive: true });

writeFileSync(
  resolve(SRC_DATA_DIR, "agents.json"),
  JSON.stringify(agents, null, 2)
);
writeFileSync(
  resolve(SRC_DATA_DIR, "departments.json"),
  JSON.stringify(departments, null, 2)
);
writeFileSync(
  resolve(PUBLIC_DATA_DIR, "agents.json"),
  JSON.stringify(agents)
);
writeFileSync(
  resolve(PUBLIC_DATA_DIR, "departments.json"),
  JSON.stringify(departments)
);

console.log(`\nResults:`);
console.log(`  Agents parsed: ${agents.length}`);
console.log(`  Departments: ${departments.length}`);
console.log(`  Errors: ${errors.length}`);

if (errors.length > 0) {
  console.log("\nWarnings:");
  for (const err of errors) {
    console.log(`  - ${err}`);
  }
}

if (agents.length < 190) {
  console.warn(`\nWARNING: Expected ~195 agents but only found ${agents.length}`);
}

console.log("\nAgent data build complete!");
