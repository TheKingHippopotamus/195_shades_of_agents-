import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://thekinghampopotamus.github.io",
  base: "/195_shades_of_agents-",
  // "hybrid" mode: pages default to static, API routes opt-in to SSR
  // NOTE: When deploying to GitHub Pages, only the static pages are served.
  //       The /api/contact endpoint requires a Node.js server (local dev or a
  //       server hosting provider like Railway, Fly.io, or Vercel).
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    react(),
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
  vite: {
    ssr: {
      noExternal: ["framer-motion"],
    },
  },
});
