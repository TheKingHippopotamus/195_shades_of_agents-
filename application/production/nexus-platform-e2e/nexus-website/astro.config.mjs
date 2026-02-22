import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://thekinghampopotamus.github.io",
  base: "/195_shades_of_agents-",
  output: "static",
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
