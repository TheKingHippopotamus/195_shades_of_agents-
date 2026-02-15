/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        nexus: {
          black: "#0A0E27",
          void: "#060918",
        },
        quantum: {
          blue: "#00D9FF",
        },
        orbital: {
          cyan: "#00F0FF",
        },
        signal: {
          white: "#E8ECF4",
        },
        mist: "#94A3B8",
        dept: {
          "executive": "#6366F1",
          "engineering": "#8B5CF6",
          "platform": "#22D3EE",
          "product": "#F59E0B",
          "design": "#F97316",
          "data-science": "#06B6D4",
          "qa": "#10B981",
          "security": "#EF4444",
          "sales": "#3B82F6",
          "marketing": "#EC4899",
          "customer-success": "#14B8A6",
          "people-hr": "#A855F7",
          "finance": "#84CC16",
          "legal": "#F43F5E",
          "it-ops": "#94A3B8",
          "devrel": "#D946EF",
          "program-mgmt": "#0EA5E9",
          "governance": "#78716C",
          "special-agents": "#FBBF24",
          "documentation": "#2DD4BF",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 217, 255, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 217, 255, 0.3)" },
        },
      },
    },
  },
  plugins: [],
};
