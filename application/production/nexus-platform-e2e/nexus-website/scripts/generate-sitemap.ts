import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const SITE = "https://thekinghampopotamus.github.io";
const BASE = "/195_shades_of_agents-";
const DIST_DIR = resolve(import.meta.dirname, "../dist");
const TODAY = new Date().toISOString().split("T")[0];

// Static pages with their priority and change frequency
const STATIC_PAGES: Array<{ path: string; priority: string; changefreq: string }> = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about/", priority: "0.8", changefreq: "monthly" },
  { path: "/about/leadership/", priority: "0.7", changefreq: "monthly" },
  { path: "/about/culture/", priority: "0.6", changefreq: "monthly" },
  { path: "/about/org-chart/", priority: "0.7", changefreq: "monthly" },
  { path: "/agents/", priority: "0.9", changefreq: "weekly" },
  { path: "/departments/", priority: "0.8", changefreq: "weekly" },
  { path: "/capabilities/", priority: "0.8", changefreq: "monthly" },
  { path: "/capabilities/lifecycle/", priority: "0.7", changefreq: "monthly" },
  { path: "/capabilities/tech-stack/", priority: "0.7", changefreq: "monthly" },
  { path: "/how-we-work/", priority: "0.7", changefreq: "monthly" },
  { path: "/network/", priority: "0.6", changefreq: "monthly" },
  { path: "/contact/", priority: "0.6", changefreq: "monthly" },
  { path: "/blog/", priority: "0.7", changefreq: "weekly" },
  { path: "/case-studies/", priority: "0.7", changefreq: "monthly" },
  { path: "/careers/", priority: "0.5", changefreq: "monthly" },
  { path: "/press/", priority: "0.4", changefreq: "monthly" },
  { path: "/industries/", priority: "0.5", changefreq: "monthly" },
  { path: "/developers/", priority: "0.5", changefreq: "monthly" },
  { path: "/privacy/", priority: "0.3", changefreq: "yearly" },
  { path: "/terms/", priority: "0.3", changefreq: "yearly" },
];

// Load agent and department data
let agentPages: string[] = [];
let deptPages: string[] = [];

try {
  const agents = JSON.parse(readFileSync(resolve(import.meta.dirname, "../src/data/agents.json"), "utf-8"));
  agentPages = agents.map((a: any) => `/agents/${a.code.toLowerCase()}/`);
} catch {
  console.warn("Warning: Could not load agents.json for sitemap");
}

try {
  const depts = JSON.parse(readFileSync(resolve(import.meta.dirname, "../src/data/departments.json"), "utf-8"));
  deptPages = depts.map((d: any) => `/departments/${d.slug}/`);
} catch {
  console.warn("Warning: Could not load departments.json for sitemap");
}

// Build XML
const urls = [
  ...STATIC_PAGES.map(
    (p) =>
      `  <url>\n    <loc>${SITE}${BASE}${p.path}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
  ),
  ...agentPages.map(
    (p) =>
      `  <url>\n    <loc>${SITE}${BASE}${p}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.5</priority>\n  </url>`
  ),
  ...deptPages.map(
    (p) =>
      `  <url>\n    <loc>${SITE}${BASE}${p}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`
  ),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE}${BASE}/sitemap-0.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
</sitemapindex>
`;

writeFileSync(resolve(DIST_DIR, "sitemap-0.xml"), sitemap);
writeFileSync(resolve(DIST_DIR, "sitemap-index.xml"), sitemapIndex);

console.log(`Sitemap generated: ${STATIC_PAGES.length + agentPages.length + deptPages.length} URLs`);
