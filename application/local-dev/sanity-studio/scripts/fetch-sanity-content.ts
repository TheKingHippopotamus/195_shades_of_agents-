/**
 * Build-time Sanity Content Fetcher
 *
 * Runs during GitHub Actions build (before Astro build) to fetch all
 * published content from Sanity CMS and write it to JSON files in
 * the Astro project's src/data/sanity/ directory.
 *
 * The deployed site has zero runtime Sanity dependency — all content
 * is baked into static HTML at build time.
 *
 * Usage:
 *   npx tsx scripts/fetch-sanity-content.ts
 *
 * Required env vars:
 *   SANITY_PROJECT_ID  — Sanity project identifier
 *   SANITY_DATASET     — Dataset name (default: "production")
 *   SANITY_API_TOKEN   — Read-only API token
 */

import { createClient } from "@sanity/client";
import { writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";
import {
  allBlogPostsQuery,
  allCaseStudiesQuery,
  allTestimonialsQuery,
  allFaqsQuery,
} from "../lib/queries";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId) {
  console.error("ERROR: SANITY_PROJECT_ID environment variable is required");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-02-15",
  useCdn: true,
  token,
});

// Output directory — cross-tree reference from local-dev to production nexus-website
const OUTPUT_DIR = resolve(
  __dirname,
  "../../../production/nexus-platform-e2e/nexus-website/src/data/sanity"
);

async function fetchAndWrite(): Promise<void> {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log("Fetching Sanity CMS content...");
  console.log(`  Project: ${projectId}`);
  console.log(`  Dataset: ${dataset}`);
  console.log(`  Output:  ${OUTPUT_DIR}`);
  console.log("");

  const [blogPosts, caseStudies, testimonials, faqs] = await Promise.all([
    client.fetch(allBlogPostsQuery),
    client.fetch(allCaseStudiesQuery),
    client.fetch(allTestimonialsQuery),
    client.fetch(allFaqsQuery),
  ]);

  writeFileSync(
    resolve(OUTPUT_DIR, "blog-posts.json"),
    JSON.stringify(blogPosts, null, 2)
  );
  writeFileSync(
    resolve(OUTPUT_DIR, "case-studies.json"),
    JSON.stringify(caseStudies, null, 2)
  );
  writeFileSync(
    resolve(OUTPUT_DIR, "testimonials.json"),
    JSON.stringify(testimonials, null, 2)
  );
  writeFileSync(
    resolve(OUTPUT_DIR, "faqs.json"),
    JSON.stringify(faqs, null, 2)
  );

  console.log(
    `Fetched: ${blogPosts.length} blog posts, ${caseStudies.length} case studies, ${testimonials.length} testimonials, ${faqs.length} FAQs`
  );
  console.log("Sanity content written to JSON successfully.");
}

fetchAndWrite().catch((err) => {
  console.error("Failed to fetch Sanity content:", err);
  process.exit(1);
});
