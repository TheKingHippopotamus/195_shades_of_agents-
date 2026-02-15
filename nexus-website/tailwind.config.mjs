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
          deep: "#030108",
        },
        quantum: {
          DEFAULT: "#00D9FF",
          blue: "#00D9FF",
          50: "#E6FBFF",
          100: "#B3F4FF",
          200: "#80EDFF",
          300: "#4DE6FF",
          400: "#1ADFFF",
          500: "#00D9FF",
          600: "#00AECC",
          700: "#008299",
          800: "#005766",
          900: "#002B33",
        },
        orbital: {
          DEFAULT: "#00F0FF",
          cyan: "#00F0FF",
        },
        signal: {
          DEFAULT: "#E8ECF4",
          white: "#E8ECF4",
        },
        mist: "#94A3B8",

        // 2999 Neon palette
        neon: {
          magenta: "#FF00E5",
          purple: "#B026FF",
          pink: "#FF2D95",
          green: "#00FF88",
          blue: "#00B4FF",
          yellow: "#FFE600",
        },
        plasma: {
          violet: "#7B2FFF",
          blue: "#4361EE",
        },

        // Semantic
        success: "#00FF88",
        warning: "#FFE600",
        error: "#FF2D55",
        info: "#00B4FF",

        // Department colors
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
          "devrel": "#FB923C",
          "program-mgmt": "#FACC15",
          "governance": "#FBBF24",
          "special-agents": "#F472B6",
          "documentation": "#A3E635",
        },

        // Tier colors
        tier: {
          0: "#FFD700",
          1: "#C0C0C0",
          2: "#CD7F32",
          3: "#8B5CF6",
          4: "#3B82F6",
          5: "#14B8A6",
          6: "#22C55E",
          7: "#06B6D4",
          8: "#94A3B8",
          9: "#FBBF24",
        },
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "Menlo", "Monaco", "monospace"],
      },

      fontSize: {
        "display": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "h1": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "800" }],
        "h2": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "h3": ["clamp(1.25rem, 2vw, 1.875rem)", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "700" }],
        "h4": ["clamp(1.125rem, 1.5vw, 1.5rem)", { lineHeight: "1.4", fontWeight: "600" }],
        "h5": ["clamp(1rem, 1.25vw, 1.25rem)", { lineHeight: "1.4", fontWeight: "600" }],
        "h6": ["clamp(0.875rem, 1vw, 1rem)", { lineHeight: "1.5", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "caption": ["0.75rem", { lineHeight: "1.5" }],
        "badge": ["0.6875rem", { lineHeight: "1", fontWeight: "600", letterSpacing: "0.05em" }],
      },

      borderRadius: {
        "none": "0",
        "sm": "0.25rem",
        "md": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "full": "9999px",
      },

      boxShadow: {
        "subtle": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "glow-sm": "0 0 15px rgba(0, 217, 255, 0.2), 0 0 30px rgba(0, 217, 255, 0.05)",
        "glow-md": "0 0 30px rgba(0, 217, 255, 0.25), 0 0 60px rgba(0, 217, 255, 0.1)",
        "glow-lg": "0 0 60px rgba(0, 217, 255, 0.3), 0 0 120px rgba(0, 217, 255, 0.1)",
        "glow-neon": "0 0 10px rgba(0, 217, 255, 0.4), 0 0 20px rgba(0, 217, 255, 0.2), 0 0 40px rgba(0, 217, 255, 0.1)",
        "glow-magenta": "0 0 15px rgba(255, 0, 229, 0.3), 0 0 30px rgba(255, 0, 229, 0.1)",
        "glow-purple": "0 0 15px rgba(176, 38, 255, 0.3), 0 0 30px rgba(176, 38, 255, 0.1)",
        "card-dark": "0 4px 24px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(0, 217, 255, 0.05)",
        "hologram": "0 0 20px rgba(0, 217, 255, 0.3), 0 0 40px rgba(176, 38, 255, 0.15), 0 0 80px rgba(255, 0, 229, 0.05)",
      },

      screens: {
        "xs": "320px",
        "3xl": "1920px",
      },

      maxWidth: {
        "prose": "65ch",
        "content": "72rem",
        "wide": "90rem",
        "full-bleed": "120rem",
      },

      zIndex: {
        "behind": "-1",
        "base": "0",
        "raised": "10",
        "dropdown": "20",
        "sticky": "30",
        "overlay": "40",
        "modal": "50",
        "toast": "60",
        "tooltip": "70",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 217, 255, 0.15), 0 0 40px rgba(0, 217, 255, 0.05)" },
          "50%": { boxShadow: "0 0 30px rgba(0, 217, 255, 0.35), 0 0 60px rgba(0, 217, 255, 0.15), 0 0 100px rgba(176, 38, 255, 0.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        neonFlicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: "1" },
          "20%, 24%, 55%": { opacity: "0.6" },
        },
        borderRotate: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        textGlow: {
          "0%, 100%": { textShadow: "0 0 10px rgba(0, 217, 255, 0.3), 0 0 20px rgba(0, 217, 255, 0.1)" },
          "50%": { textShadow: "0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.2), 0 0 80px rgba(176, 38, 255, 0.1)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "neon-flicker": "neonFlicker 4s linear infinite",
        "border-rotate": "borderRotate 4s ease infinite",
        "text-glow": "textGlow 3s ease-in-out infinite",
      },

      transitionDuration: {
        "fast": "150ms",
        "normal": "250ms",
        "slow": "400ms",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      backdropBlur: {
        "xs": "2px",
        "glass": "20px",
      },
    },
  },
  plugins: [],
};
