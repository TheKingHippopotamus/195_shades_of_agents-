/**
 * Fetch content from Sanity CMS at build time.
 * Runs during GitHub Actions build, before Astro build.
 *
 * Usage: npx tsx scripts/fetch-sanity-content.ts
 *
 * Requires environment variables:
 *   SANITY_PROJECT_ID - Sanity project ID
 *   SANITY_DATASET    - Dataset name (default: "production")
 *   SANITY_API_TOKEN  - Read-only API token
 *
 * If Sanity credentials are not configured, writes placeholder JSON files
 * so the Astro build can proceed with static content.
 */

import { writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";

const OUTPUT_DIR = resolve(import.meta.dirname, "../src/data/sanity");

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

// Placeholder content used when Sanity is not configured
const PLACEHOLDER_BLOG_POSTS = [
  {
    title: "Introducing NEXUS AI: 195 Agents, One Mission",
    slug: { current: "introducing-nexus-ai" },
    author: "CEO",
    category: "Company",
    publishedAt: "2026-02-15T00:00:00Z",
    excerpt: "How we built the world's first AI-powered software agency with 195 autonomous agents across 20 departments.",
    tags: ["launch", "company", "ai"],
    body: null,
    coverImage: null,
    seo: { metaTitle: "Introducing NEXUS AI", metaDescription: "Meet the 195 AI agents building software like a real company." },
  },
  {
    title: "The 13-Stage Project Lifecycle: How NEXUS AI Delivers",
    slug: { current: "project-lifecycle" },
    author: "VP-PROD",
    category: "Process",
    publishedAt: "2026-02-14T00:00:00Z",
    excerpt: "From lead qualification to maintenance — every NEXUS AI project follows a rigorous 13-stage lifecycle with governance gates.",
    tags: ["process", "lifecycle", "governance"],
    body: null,
    coverImage: null,
    seo: { metaTitle: "NEXUS AI Project Lifecycle", metaDescription: "13 stages from discovery to maintenance." },
  },
  {
    title: "Why We Have 20 Departments (Not Just Engineering)",
    slug: { current: "why-20-departments" },
    author: "COO",
    category: "Organization",
    publishedAt: "2026-02-13T00:00:00Z",
    excerpt: "Most AI tools focus on code generation. NEXUS AI includes Legal, Finance, HR, Marketing, and 16 other departments. Here's why.",
    tags: ["organization", "departments", "strategy"],
    body: null,
    coverImage: null,
    seo: { metaTitle: "Why 20 Departments", metaDescription: "Real software agencies need more than engineers." },
  },
];

const PLACEHOLDER_CASE_STUDIES = [
  {
    title: "FinTech Startup: From MVP to Series A in 12 Weeks",
    slug: { current: "fintech-mvp-to-series-a" },
    client: "NovaPay (Anonymized)",
    industry: "FinTech",
    challenge: null,
    approach: null,
    results: null,
    metrics: [
      { label: "Time to MVP", value: "6 weeks", improvement: "60% faster" },
      { label: "Test Coverage", value: "94%", improvement: "Above target" },
      { label: "Lighthouse Score", value: "97", improvement: "Enterprise grade" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    teamAgents: ["CTO", "VP-ENG", "SR-FE-REACT", "SR-BE-NODE", "DIR-QA", "CISO"],
    testimonial: {
      quote: "NEXUS AI delivered what our previous agency couldn't in 6 months — a production-ready MVP with enterprise security, in 6 weeks.",
      author: "Sarah Chen",
      title: "CTO, NovaPay",
    },
    coverImage: null,
  },
];

const PLACEHOLDER_TESTIMONIALS = [
  {
    quote: "Working with NEXUS AI felt like having an entire tech department on demand. The agents don't just write code — they think about architecture, security, and user experience.",
    author: "Marcus Rivera",
    title: "VP of Engineering",
    company: "DataStream Inc.",
    avatar: null,
  },
  {
    quote: "The governance gates alone sold me. Every release goes through architecture review, security audit, and QA gate. No shortcuts.",
    author: "Priya Patel",
    title: "CTO",
    company: "HealthBridge",
    avatar: null,
  },
];

const PLACEHOLDER_FAQS = [
  {
    question: "What is NEXUS AI?",
    answer: null,
    category: "General",
    order: 1,
  },
  {
    question: "How are the 195 agents organized?",
    answer: null,
    category: "General",
    order: 2,
  },
  {
    question: "What technologies does NEXUS AI use?",
    answer: null,
    category: "Technical",
    order: 3,
  },
  {
    question: "How does the project lifecycle work?",
    answer: null,
    category: "Process",
    order: 4,
  },
  {
    question: "What are governance gates?",
    answer: null,
    category: "Process",
    order: 5,
  },
];

async function fetchFromSanity(query: string): Promise<any[]> {
  const url = `https://${projectId}.api.sanity.io/v2026-02-15/data/query/${dataset}?query=${encodeURIComponent(query)}`;
  const res = await fetch(url, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) throw new Error(`Sanity API error: ${res.status}`);
  const data = await res.json();
  return data.result || [];
}

async function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  if (!projectId) {
    console.log("SANITY_PROJECT_ID not set — writing placeholder content");
    writeFileSync(resolve(OUTPUT_DIR, "blog-posts.json"), JSON.stringify(PLACEHOLDER_BLOG_POSTS, null, 2));
    writeFileSync(resolve(OUTPUT_DIR, "case-studies.json"), JSON.stringify(PLACEHOLDER_CASE_STUDIES, null, 2));
    writeFileSync(resolve(OUTPUT_DIR, "testimonials.json"), JSON.stringify(PLACEHOLDER_TESTIMONIALS, null, 2));
    writeFileSync(resolve(OUTPUT_DIR, "faqs.json"), JSON.stringify(PLACEHOLDER_FAQS, null, 2));
    console.log("Placeholder content written (3 blog posts, 1 case study, 2 testimonials, 5 FAQs)");
    return;
  }

  console.log(`Fetching content from Sanity (project: ${projectId}, dataset: ${dataset})...`);

  try {
    const blogPosts = await fetchFromSanity(`
      *[_type == "blogPost" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
        title, slug, author, category, publishedAt, excerpt,
        "coverImage": coverImage.asset->url,
        tags, body, seo
      }
    `);
    writeFileSync(resolve(OUTPUT_DIR, "blog-posts.json"), JSON.stringify(blogPosts, null, 2));

    const caseStudies = await fetchFromSanity(`
      *[_type == "caseStudy" && !(_id in path("drafts.**"))] {
        title, slug, client, industry, challenge, approach, results,
        metrics, technologies, teamAgents, testimonial,
        "coverImage": coverImage.asset->url
      }
    `);
    writeFileSync(resolve(OUTPUT_DIR, "case-studies.json"), JSON.stringify(caseStudies, null, 2));

    const testimonials = await fetchFromSanity(`*[_type == "testimonial"]`);
    writeFileSync(resolve(OUTPUT_DIR, "testimonials.json"), JSON.stringify(testimonials, null, 2));

    const faqs = await fetchFromSanity(`*[_type == "faq"] | order(order asc)`);
    writeFileSync(resolve(OUTPUT_DIR, "faqs.json"), JSON.stringify(faqs, null, 2));

    console.log(`Fetched: ${blogPosts.length} posts, ${caseStudies.length} case studies, ${testimonials.length} testimonials, ${faqs.length} FAQs`);
  } catch (err) {
    console.error("Sanity fetch failed:", (err as Error).message);
    console.log("Falling back to placeholder content");
    writeFileSync(resolve(OUTPUT_DIR, "blog-posts.json"), JSON.stringify(PLACEHOLDER_BLOG_POSTS, null, 2));
    writeFileSync(resolve(OUTPUT_DIR, "case-studies.json"), JSON.stringify(PLACEHOLDER_CASE_STUDIES, null, 2));
    writeFileSync(resolve(OUTPUT_DIR, "testimonials.json"), JSON.stringify(PLACEHOLDER_TESTIMONIALS, null, 2));
    writeFileSync(resolve(OUTPUT_DIR, "faqs.json"), JSON.stringify(PLACEHOLDER_FAQS, null, 2));
  }
}

main();
