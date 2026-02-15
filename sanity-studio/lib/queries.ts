/**
 * GROQ Query Library — NEXUS AI Corporate Website
 *
 * These queries are used by scripts/fetch-sanity-content.ts during the
 * GitHub Actions build to fetch all published Sanity content and write
 * it to src/data/sanity/*.json. The deployed site has zero runtime
 * Sanity dependency.
 */

// ---------------------------------------------------------------------------
// Blog Posts
// ---------------------------------------------------------------------------

/** All published blog posts, newest first (for blog index page) */
export const allBlogPostsQuery = `
  *[_type == "blogPost" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    title,
    slug,
    author,
    category,
    publishedAt,
    excerpt,
    "coverImage": coverImage.asset->url,
    tags,
    body,
    seo
  }
`;

/** Latest N blog posts (for homepage preview) */
export const latestBlogPostsQuery = `
  *[_type == "blogPost" && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...$limit] {
    title,
    slug,
    author,
    category,
    publishedAt,
    excerpt,
    "coverImage": coverImage.asset->url,
    tags
  }
`;

/** Single blog post by slug */
export const blogPostBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    title,
    slug,
    author,
    category,
    publishedAt,
    excerpt,
    "coverImage": coverImage.asset->url,
    tags,
    body,
    seo
  }
`;

/** Blog posts filtered by category */
export const blogPostsByCategoryQuery = `
  *[_type == "blogPost" && category == $category && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    title,
    slug,
    author,
    category,
    publishedAt,
    excerpt,
    "coverImage": coverImage.asset->url,
    tags
  }
`;

/** Blog posts filtered by tag */
export const blogPostsByTagQuery = `
  *[_type == "blogPost" && $tag in tags && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    title,
    slug,
    author,
    category,
    publishedAt,
    excerpt,
    "coverImage": coverImage.asset->url,
    tags
  }
`;

// ---------------------------------------------------------------------------
// Case Studies
// ---------------------------------------------------------------------------

/** All published case studies */
export const allCaseStudiesQuery = `
  *[_type == "caseStudy" && !(_id in path("drafts.**"))] {
    title,
    slug,
    client,
    industry,
    challenge,
    approach,
    results,
    metrics,
    technologies,
    teamAgents,
    testimonial,
    "coverImage": coverImage.asset->url
  }
`;

/** Case studies filtered by industry */
export const caseStudiesByIndustryQuery = `
  *[_type == "caseStudy" && industry == $industry && !(_id in path("drafts.**"))] {
    title,
    slug,
    client,
    industry,
    challenge,
    approach,
    results,
    metrics,
    technologies,
    teamAgents,
    testimonial,
    "coverImage": coverImage.asset->url
  }
`;

/** Single case study by slug */
export const caseStudyBySlugQuery = `
  *[_type == "caseStudy" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    title,
    slug,
    client,
    industry,
    challenge,
    approach,
    results,
    metrics,
    technologies,
    teamAgents,
    testimonial,
    "coverImage": coverImage.asset->url
  }
`;

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

/** All testimonials */
export const allTestimonialsQuery = `
  *[_type == "testimonial" && !(_id in path("drafts.**"))] {
    quote,
    author,
    title,
    company,
    "avatar": avatar.asset->url
  }
`;

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------

/** All FAQs ordered by display order */
export const allFaqsQuery = `
  *[_type == "faq" && !(_id in path("drafts.**"))] | order(order asc) {
    question,
    answer,
    category,
    order
  }
`;

/** FAQs filtered by category */
export const faqsByCategoryQuery = `
  *[_type == "faq" && category == $category && !(_id in path("drafts.**"))] | order(order asc) {
    question,
    answer,
    category,
    order
  }
`;
