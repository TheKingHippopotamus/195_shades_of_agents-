import agents from "../src/data/agents.json";
import fs from "fs";
import path from "path";

/**
 * Generates AI avatar image prompts for all 195 agents
 * Each prompt is designed to create a unique, soulful avatar based on:
 * - Agent's role and tier
 * - Department color
 * - Personality traits (if available)
 * - Professional style appropriate to their position
 */

const TIER_STYLES = [
  "Executive portrait, confident and visionary, commanding presence, refined aesthetic",
  "Senior leadership, strategic thinker, polished and sophisticated, inspiring confidence",
  "Director-level professional, decisive and experienced, sharp and focused",
  "Manager, collaborative and organized, approachable yet authoritative",
  "Staff engineer, innovative and thoughtful, creative problem-solver aesthetic",
  "Senior professional, skilled and knowledgeable, confident expertise",
  "Mid-level professional, energetic and determined, growth-oriented",
  "Junior professional, eager and fresh, bright and optimistic",
  "Governance specialist, analytical and precise, systematic and thorough",
  "Special operations, unique and strategic, distinct character",
];

const DEPT_THEMES: Record<string, string> = {
  "01": "leadership and vision, strategic depth, wisdom",
  "02": "technology and innovation, code and circuits, engineering precision",
  "03": "infrastructure and systems, reliability and scale, architectural thinking",
  "04": "product strategy, user focus, market insight",
  "05": "creativity and aesthetics, visual thinking, design excellence",
  "06": "data and intelligence, analytical depth, machine learning",
  "07": "quality and testing, precision and standards, systematic validation",
  "08": "security and protection, vigilance and defense, cryptographic elements",
  "09": "business and revenue, ambition and results, deal-making energy",
  "10": "marketing and storytelling, brand and messaging, creative communication",
  "11": "customer success, empathy and service, relationship building",
  "12": "people and culture, humanity and growth, organizational development",
  "13": "finance and metrics, precision and accountability, fiscal wisdom",
  "14": "legal and compliance, justice and ethics, regulatory expertise",
  "15": "operations and efficiency, systems and process, operational excellence",
  "16": "developer relations, community and code, technical evangelism",
  "17": "program management, coordination and delivery, orchestration",
  "18": "governance and oversight, authority and standards, gatekeeping",
  "19": "special operations, unique missions, strategic flexibility",
  "20": "documentation and knowledge, clarity and structure, information architecture",
};

const VISUAL_STYLES = [
  "professional headshot, clean background, sharp focus, corporate aesthetic",
  "tech industry portrait, modern office setting, contemporary lighting",
  "minimalist portrait, abstract geometric background, bold colors",
  "cinematic portrait, dramatic lighting, shallow depth of field",
  "illustrated avatar, vector art style, clean lines, modern design",
  "3D rendered character, stylized realism, soft lighting, professional",
  "isometric character design, corporate theme, vibrant colors",
  "flat design illustration, minimal, geometric, professional",
];

interface AgentData {
  agent_number: string;
  code: string;
  role: string;
  department: string;
  department_number: string;
  tier: { number: number; label: string };
  personality?: string;
  personal?: { nickname: string; age: number; about_me?: string };
}

function generateAvatarPrompt(agent: AgentData): string {
  const tierStyle = TIER_STYLES[agent.tier.number] || TIER_STYLES[6];
  const deptTheme = DEPT_THEMES[agent.department_number] || "professional excellence";
  const visualStyle = VISUAL_STYLES[parseInt(agent.agent_number) % VISUAL_STYLES.length];

  // Extract key personality traits if available
  let personalityHint = "";
  if (agent.personality) {
    const traits = agent.personality
      .toLowerCase()
      .match(/(analytical|creative|strategic|collaborative|decisive|innovative|methodical|visionary|empathetic|technical|systematic|dynamic|focused|pragmatic|insightful)/g);
    if (traits && traits.length > 0) {
      personalityHint = `, ${traits.slice(0, 2).join(" and ")} expression`;
    }
  }

  // Age and gender-neutral representation
  const ageGroup = agent.personal?.age
    ? agent.personal.age < 30
      ? "young professional"
      : agent.personal.age < 45
      ? "mid-career professional"
      : "experienced professional"
    : "professional";

  const prompt = `
Avatar for ${agent.code} (${agent.role}) at NEXUS AI.
Style: ${visualStyle}
Character: ${ageGroup}, ${tierStyle}${personalityHint}
Theme: ${deptTheme}
Mood: Professional, confident, approachable, representing expertise in ${agent.department.toLowerCase()}
Technical details: High quality, 512x512px, centered composition, professional attire, neutral expression with subtle confidence
Color accent: Department theme color (can be integrated into background or subtle details)
Avoid: Cartoonish, overly casual, generic stock photo, photorealistic humans (use stylized/illustrated approach for consistency)
`.trim();

  return prompt;
}

function main() {
  const prompts: Array<{
    agent_number: string;
    code: string;
    role: string;
    department: string;
    tier: number;
    nickname?: string;
    prompt: string;
  }> = [];

  for (const agent of agents as AgentData[]) {
    prompts.push({
      agent_number: agent.agent_number,
      code: agent.code,
      role: agent.role,
      department: agent.department,
      tier: agent.tier.number,
      nickname: agent.personal?.nickname,
      prompt: generateAvatarPrompt(agent),
    });
  }

  // Write prompts as JSON
  const outputPath = path.join(process.cwd(), "avatar-prompts.json");
  fs.writeFileSync(outputPath, JSON.stringify(prompts, null, 2));

  console.log(`✅ Generated ${prompts.length} avatar prompts`);
  console.log(`📄 Saved to: ${outputPath}`);
  console.log("\n📋 Next steps:");
  console.log("1. Use these prompts with DALL-E 3, Midjourney, or Stable Diffusion");
  console.log("2. Generate images and save them as public/avatars/{code}.png");
  console.log("3. Update agents.json to set avatar_url: /195_shades_of_agents-/avatars/{code}.png");
  console.log("\n💡 Tip: For batch generation, use OpenAI API or Replicate API");
  console.log("\nFirst 3 prompts preview:");
  prompts.slice(0, 3).forEach((p) => {
    console.log(`\n--- ${p.code} (${p.role}) ---`);
    console.log(p.prompt);
  });
}

main();
