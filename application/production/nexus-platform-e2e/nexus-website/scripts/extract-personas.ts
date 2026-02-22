/**
 * NEXUS AI — Persona Extractor
 *
 * Reads all 195 agent .md files, parses the <personal> XML section from
 * each system prompt, and writes a SQL seed file for Cloudflare D1.
 *
 * Usage (from the nexus-website directory):
 *   npx tsx scripts/extract-personas.ts
 *
 * Output:
 *   /workers/persona-api/seed.sql
 *
 * After generating seed.sql, run the full setup sequence:
 *   See workers/persona-api/README.md for the complete workflow.
 *
 * PRIVACY NOTE:
 *   seed.sql contains ALL personal data and must NEVER be committed
 *   to the public GitHub repository. It is listed in .gitignore.
 */

import { globSync } from "glob";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, basename, dirname } from "path";

// ---------------------------------------------------------------------------
// Path constants
// ---------------------------------------------------------------------------

// import.meta.dirname = nexus-website/scripts/
const PROJECT_ROOT = resolve(import.meta.dirname, "../..");
const AGENTS_DIR   = resolve(PROJECT_ROOT, "agents");
const OUTPUT_DIR   = resolve(PROJECT_ROOT, "workers/persona-api");
const OUTPUT_FILE  = resolve(OUTPUT_DIR, "seed.sql");

// ---------------------------------------------------------------------------
// Tier metadata (mirrors build-agent-data.ts)
// ---------------------------------------------------------------------------

const TIER_LABELS: Record<number, string> = {
  0: "C-Suite",
  1: "VP",
  2: "Director",
  3: "Manager",
  4: "Staff+ IC",
  5: "Senior IC",
  6: "Mid-Level",
  7: "Junior",
  8: "Governance",
  9: "Special Agent",
};

// ---------------------------------------------------------------------------
// XML tag parsers (mirrors build-agent-data.ts exactly)
// ---------------------------------------------------------------------------

function extractBetweenTags(content: string, tag: string): string {
  const regex = new RegExp(`<${tag}>[\\s\\S]*?</${tag}>`, "m");
  const match = content.match(regex);
  if (!match) return "";
  return match[0]
    .replace(new RegExp(`^<${tag}>`), "")
    .replace(new RegExp(`</${tag}>$`), "")
    .trim();
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
  const num   = match ? parseInt(match[1]) : 6;
  return { number: num, label: TIER_LABELS[num] ?? "Unknown" };
}

// ---------------------------------------------------------------------------
// SQL escaping
// ---------------------------------------------------------------------------

/** Escape single quotes for use inside SQL string literals. */
function sqlEscape(value: string): string {
  return value.replace(/'/g, "''");
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface AgentPersona {
  agent_number:      number;
  agent_code:        string;
  nickname:          string;
  age:               number;
  about_me:          string;
  what_i_bring:      string;
  strengths:         string[];
  weaknesses:        string[];
  working_with_me:   string;
  department_name:   string;
  department_number: number;
  tier_number:       number;
  tier_label:        string;
}

// ---------------------------------------------------------------------------
// Agent file parser
// ---------------------------------------------------------------------------

function parseAgentFile(filePath: string): AgentPersona | null {
  const content      = readFileSync(filePath, "utf-8");
  const systemPrompt = extractBetweenTags(content, "system_prompt");
  if (!systemPrompt) return null;

  const identity      = extractBetweenTags(systemPrompt, "agent_identity");
  const personalBlock = extractBetweenTags(systemPrompt, "personal");

  // Skip agents without a <personal> block or without a nickname
  if (!personalBlock) return null;
  const nickname = extractTagValue(personalBlock, "nickname");
  if (!nickname)  return null;

  const agentCode   = extractTagValue(identity, "code");
  const agentNumStr = extractTagValue(identity, "agent_number");
  const department  = extractTagValue(identity, "department");
  const tierStr     = extractTagValue(identity, "tier");

  const agentNumber = parseInt(agentNumStr, 10);
  if (isNaN(agentNumber)) return null;

  // Derive department number from folder name (e.g. "02-Engineering" → 2)
  const folderName = basename(dirname(filePath));
  const deptNum    = parseInt(folderName.substring(0, 2), 10);
  const tier       = parseTier(tierStr);

  const ageStr        = extractTagValue(personalBlock, "age");
  const aboutMe       = extractTagValue(personalBlock, "about_me");
  const whatIBring    = extractTagValue(personalBlock, "what_i_bring");
  const strengths     = parseListItems(extractTagValue(personalBlock, "my_strengths"));
  const weaknesses    = parseListItems(extractTagValue(personalBlock, "my_weaknesses"));
  const workingWithMe = extractTagValue(personalBlock, "working_with_me");

  return {
    agent_number:      agentNumber,
    agent_code:        agentCode,
    nickname,
    age:               parseInt(ageStr, 10) || 30,
    about_me:          aboutMe,
    what_i_bring:      whatIBring,
    strengths,
    weaknesses,
    working_with_me:   workingWithMe,
    department_name:   department,
    department_number: isNaN(deptNum) ? 0 : deptNum,
    tier_number:       tier.number,
    tier_label:        tier.label,
  };
}

// ---------------------------------------------------------------------------
// SQL INSERT builder
// ---------------------------------------------------------------------------

function buildInsertStatement(p: AgentPersona): string {
  const strengthsJson  = sqlEscape(JSON.stringify(p.strengths));
  const weaknessesJson = sqlEscape(JSON.stringify(p.weaknesses));

  return [
    "INSERT INTO agent_personas",
    "  (agent_number, agent_code, nickname, age,",
    "   about_me, what_i_bring, strengths, weaknesses,",
    "   working_with_me, department_name, department_number,",
    "   tier_number, tier_label)",
    "VALUES",
    `  (${p.agent_number},`,
    `   '${sqlEscape(p.agent_code)}',`,
    `   '${sqlEscape(p.nickname)}',`,
    `   ${p.age},`,
    `   '${sqlEscape(p.about_me)}',`,
    `   '${sqlEscape(p.what_i_bring)}',`,
    `   '${strengthsJson}',`,
    `   '${weaknessesJson}',`,
    `   '${sqlEscape(p.working_with_me)}',`,
    `   '${sqlEscape(p.department_name)}',`,
    `   ${p.department_number},`,
    `   ${p.tier_number},`,
    `   '${sqlEscape(p.tier_label)}');`,
  ].join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

console.log("NEXUS AI — Persona Extractor");
console.log("=".repeat(50));
console.log(`Agents dir : ${AGENTS_DIR}`);
console.log(`Output     : ${OUTPUT_FILE}`);
console.log("");

const files: string[] = globSync(`${AGENTS_DIR}/*/*.md`);
console.log(`Found ${files.length} agent files — parsing...`);

const personas: AgentPersona[] = [];
const skipped:  string[]       = [];
const errors:   string[]       = [];

for (const file of files) {
  try {
    const persona = parseAgentFile(file);
    if (persona) {
      personas.push(persona);
    } else {
      skipped.push(basename(file));
    }
  } catch (err) {
    errors.push(`${basename(file)}: ${(err as Error).message}`);
  }
}

// Sort ascending by agent_number so the seed file is readable
personas.sort((a, b) => a.agent_number - b.agent_number);

// ---------------------------------------------------------------------------
// Build SQL output
// ---------------------------------------------------------------------------

const header = [
  "-- ============================================================",
  "-- NEXUS AI — Agent Persona Seed Data",
  `-- Generated : ${new Date().toISOString()}`,
  `-- Agents    : ${personas.length}`,
  "--",
  "-- WARNING: This file contains PRIVATE persona data.",
  "--          NEVER commit this file to the public GitHub repo.",
  "--          It is excluded via .gitignore.",
  "-- ============================================================",
  "",
  "-- Wipe existing rows before re-seeding (idempotent re-runs)",
  "DELETE FROM agent_personas;",
  "",
].join("\n");

const inserts = personas
  .map((p) => buildInsertStatement(p))
  .join("\n\n");

const sql = header + inserts + "\n";

// Ensure the output directory exists (wrangler may not have created it yet)
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, sql, "utf-8");

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

console.log("\nResults:");
console.log(`  Personas extracted : ${personas.length}`);
console.log(`  Skipped (no <personal>) : ${skipped.length}`);
console.log(`  Parse errors       : ${errors.length}`);

if (errors.length > 0) {
  console.log("\nParse errors:");
  for (const e of errors) console.log(`  - ${e}`);
}

if (personas.length < 190) {
  console.warn(
    `\nWARNING: Expected ~195 personas but only extracted ${personas.length}.`
  );
}

console.log(`\nOutput written to: ${OUTPUT_FILE}`);
console.log("\nNext steps (see workers/persona-api/README.md):");
console.log("  1. wrangler d1 create nexus-personas");
console.log("     → Copy the database_id into workers/persona-api/wrangler.toml");
console.log("  2. cd workers/persona-api");
console.log("     wrangler d1 execute nexus-personas --file=schema.sql --remote");
console.log("  3. wrangler d1 execute nexus-personas --file=seed.sql --remote");
console.log("  4. wrangler deploy");
console.log("\nDone.");
