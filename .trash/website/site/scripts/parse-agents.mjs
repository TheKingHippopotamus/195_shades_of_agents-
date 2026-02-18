#!/usr/bin/env node
/**
 * Agent Data Parser
 * Reads all 195 agent .md files from agents/ directory and produces
 * a JSON data file for the Astro site to consume at build time.
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, basename } from 'path';

const AGENTS_DIR = join(import.meta.dirname, '..', '..', '..', 'agents');
const OUTPUT_FILE = join(import.meta.dirname, '..', 'src', 'data', 'agents.json');

// Department folder number -> display name mapping
const DEPT_NAMES = {
  '01': 'Executive Leadership',
  '02': 'Engineering',
  '03': 'Platform & Infrastructure',
  '04': 'Product Management',
  '05': 'Design',
  '06': 'Data Science & AI/ML',
  '07': 'Quality Assurance',
  '08': 'Security',
  '09': 'Sales & Revenue',
  '10': 'Marketing',
  '11': 'Customer Success & Support',
  '12': 'People / HR',
  '13': 'Finance & Accounting',
  '14': 'Legal & Compliance',
  '15': 'IT & Operations',
  '16': 'Developer Relations',
  '17': 'Program Management',
  '18': 'Governance',
  '19': 'Special Agents',
  '20': 'Documentation',
};

function extractTag(content, tag) {
  const regex = new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, 'i');
  const match = content.match(regex);
  return match ? match[1].trim() : '';
}

function extractTierNumber(tierStr) {
  const match = tierStr.match(/Tier\s*(\d+)/i);
  return match ? parseInt(match[1], 10) : -1;
}

function extractPersonalField(personalBlock, field) {
  const regex = new RegExp(`<${field}>([\\s\\S]*?)</${field}>`, 'i');
  const match = personalBlock.match(regex);
  return match ? match[1].trim() : '';
}

function parseAgentFile(filePath, deptNumber) {
  const content = readFileSync(filePath, 'utf-8');

  // Extract title from first heading
  const titleMatch = content.match(/^#\s+AGENT\s+(\d+):\s+(\S+)\s*[—–-]\s*(.+)$/m);
  const agentNumber = titleMatch ? parseInt(titleMatch[1], 10) : 0;
  const codeFromTitle = titleMatch ? titleMatch[2] : '';
  const roleFromTitle = titleMatch ? titleMatch[3].trim() : '';

  // Extract from XML tags
  const role = extractTag(content, 'role') || roleFromTitle;
  const code = extractTag(content, 'code') || codeFromTitle;
  const department = extractTag(content, 'department') || DEPT_NAMES[deptNumber] || '';
  const reportsTo = extractTag(content, 'reports_to') || '';
  const tier = extractTag(content, 'tier') || '';
  const tierNum = extractTierNumber(tier);

  // Personality (first paragraph or sentence)
  const personalityFull = extractTag(content, 'personality');
  const personalitySummary = personalityFull
    .split('\n')
    .filter(l => l.trim() && !l.startsWith('-') && !l.startsWith('*'))
    .slice(0, 2)
    .join(' ')
    .slice(0, 300);

  // Core responsibilities
  const responsibilitiesRaw = extractTag(content, 'core_responsibilities');
  const responsibilities = responsibilitiesRaw
    .split('\n')
    .filter(l => /^\d+\.\s/.test(l.trim()))
    .map(l => {
      const match = l.match(/\d+\.\s+\*\*(.+?)\*\*:?\s*(.*)/);
      if (match) return { title: match[1], description: match[2] || '' };
      const plain = l.replace(/^\d+\.\s+/, '').trim();
      return { title: plain.slice(0, 60), description: plain };
    })
    .slice(0, 8);

  // Decision authority
  const canDecide = extractTag(content, 'can_decide')
    .split('\n')
    .map(l => l.replace(/^[-*]\s*/, '').trim())
    .filter(Boolean);
  const mustEscalate = extractTag(content, 'must_escalate')
    .split('\n')
    .map(l => l.replace(/^[-*]\s*/, '').trim())
    .filter(Boolean);

  // Personal section
  const personal = extractTag(content, 'personal');
  const nickname = extractPersonalField(personal, 'nickname');
  const age = parseInt(extractPersonalField(personal, 'age'), 10) || null;
  const aboutMe = extractPersonalField(personal, 'about_me');
  const whatIBring = extractPersonalField(personal, 'what_i_bring');
  const myStrengths = extractPersonalField(personal, 'my_strengths')
    .split('\n')
    .map(l => l.replace(/^[-*]\s*/, '').trim())
    .filter(Boolean);
  const myWeaknesses = extractPersonalField(personal, 'my_weaknesses')
    .split('\n')
    .map(l => l.replace(/^[-*]\s*/, '').trim())
    .filter(Boolean);
  const workingWithMe = extractPersonalField(personal, 'working_with_me');

  // Clean role name (remove code in parens)
  const cleanRole = role.replace(/\s*\([^)]*\)\s*$/, '').trim();

  // Derive department display name from folder
  const deptDisplayName = DEPT_NAMES[deptNumber] || department;

  return {
    agentNumber,
    code,
    role: cleanRole,
    department: deptDisplayName,
    departmentNumber: parseInt(deptNumber, 10),
    reportsTo,
    tier: tierNum,
    tierLabel: tier,
    personality: personalitySummary,
    responsibilities,
    canDecide,
    mustEscalate,
    nickname: nickname || null,
    age,
    aboutMe: aboutMe || null,
    whatIBring: whatIBring || null,
    strengths: myStrengths,
    weaknesses: myWeaknesses,
    workingWithMe: workingWithMe || null,
    slug: code.toLowerCase(),
  };
}

function main() {
  const agents = [];
  const folders = readdirSync(AGENTS_DIR)
    .filter(f => /^\d{2}-/.test(f))
    .sort();

  for (const folder of folders) {
    const deptNumber = folder.slice(0, 2);
    const deptPath = join(AGENTS_DIR, folder);

    if (!statSync(deptPath).isDirectory()) continue;

    const files = readdirSync(deptPath)
      .filter(f => f.endsWith('.md') && /^\d{3}-/.test(f))
      .sort();

    for (const file of files) {
      try {
        const agent = parseAgentFile(join(deptPath, file), deptNumber);
        if (agent.agentNumber > 0) {
          agents.push(agent);
        }
      } catch (err) {
        console.error(`Error parsing ${folder}/${file}:`, err.message);
      }
    }
  }

  // Sort by agent number
  agents.sort((a, b) => a.agentNumber - b.agentNumber);

  writeFileSync(OUTPUT_FILE, JSON.stringify(agents, null, 2));
  console.log(`Parsed ${agents.length} agents -> ${OUTPUT_FILE}`);

  // Summary stats
  const byDept = {};
  const byTier = {};
  for (const a of agents) {
    byDept[a.department] = (byDept[a.department] || 0) + 1;
    byTier[a.tier] = (byTier[a.tier] || 0) + 1;
  }
  console.log(`Departments: ${Object.keys(byDept).length}`);
  console.log(`Tiers: ${Object.keys(byTier).length}`);
}

main();
