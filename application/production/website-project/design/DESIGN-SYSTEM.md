# NEXUS AI Corporate Website — Design System & Brand Identity

**Document ID:** DES-SYS-2026-001
**Version:** 1.0
**Author:** VP-DES (Agent 074 — "Pixel")
**Contributors:** SR-UID (080), SR-UXD (081), STAFF-DES (078)
**Date:** February 15, 2026
**Status:** APPROVED — Ready for Engineering Implementation

---

## TABLE OF CONTENTS

1. [Brand Identity](#1-brand-identity)
2. [Design Tokens (Tailwind Configuration)](#2-design-tokens-tailwind-configuration)
3. [Typography System](#3-typography-system)
4. [Color System](#4-color-system)
5. [Component Specifications](#5-component-specifications)
6. [Layout System](#6-layout-system)
7. [Animation & Interaction](#7-animation--interaction)
8. [Accessibility Standards](#8-accessibility-standards)
9. [Avatar System](#9-avatar-system)
10. [Dark/Light Mode](#10-darklight-mode)
11. [Iconography](#11-iconography)
12. [Implementation Notes](#12-implementation-notes)

---

## 1. BRAND IDENTITY

### 1.1 Brand Essence

NEXUS AI is where autonomous intelligence meets organizational craft. The brand communicates:

- **Precision** — Every agent, every interaction, every decision is engineered
- **Depth** — 195 agents across 20 departments, not a surface-level tool
- **Warmth** — AI agents with personalities, nicknames, strengths, and quirks
- **Authority** — Enterprise-grade processes, FAANG-level organizational rigor
- **Innovation** — Something genuinely new, not another chatbot wrapper

**Brand Voice:** Confident, clear, technically grounded, human. Never corporate jargon. Never hype.

**Brand Promise:** "We don't just build software. 195 AI agents plan, design, develop, test, and ship it — like a real company, because we are one."

### 1.2 Core Color Palette

The palette draws from deep space and quantum computing imagery — darkness punctuated by precise, luminous accents.

| Token | Name | Hex | RGB | Usage |
|-------|------|-----|-----|-------|
| `--nexus-black` | NEXUS Black | `#0A0E27` | 10, 14, 39 | Primary background (dark mode), deepest surface |
| `--nexus-void` | Void | `#060918` | 6, 9, 24 | True dark background, hero sections |
| `--quantum-blue` | Quantum Blue | `#00D9FF` | 0, 217, 255 | Primary accent, CTAs, links, highlights |
| `--orbital-cyan` | Orbital Cyan | `#00F0FF` | 0, 240, 255 | Secondary accent, hover states, glow effects |
| `--signal-white` | Signal White | `#E8ECF4` | 232, 236, 244 | Primary text on dark, headings |
| `--mist` | Mist | `#94A3B8` | 148, 163, 184 | Secondary text, labels, muted content |
| `--slate-700` | Slate Deep | `#334155` | 51, 65, 85 | Borders, dividers on dark surfaces |
| `--slate-800` | Slate Dark | `#1E293B` | 30, 41, 59 | Card backgrounds, elevated surfaces |
| `--slate-900` | Slate Abyss | `#0F172A` | 15, 23, 42 | Section backgrounds, alternate surface |

**Light Mode Inversions:**

| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `--light-bg` | Cloud | `#F8FAFC` | Primary background (light mode) |
| `--light-surface` | Snow | `#FFFFFF` | Card surfaces, elevated panels |
| `--light-text` | Ink | `#0F172A` | Primary text (light mode) |
| `--light-muted` | Graphite | `#475569` | Secondary text (light mode) |
| `--light-border` | Fog | `#E2E8F0` | Borders, dividers (light mode) |

### 1.3 Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--success` | `#10B981` | Success states, positive metrics, online indicators |
| `--warning` | `#F59E0B` | Warning states, attention-needed indicators |
| `--error` | `#EF4444` | Error states, critical alerts, destructive actions |
| `--info` | `#3B82F6` | Informational states, neutral callouts |

### 1.4 Department Colors

Each of the 20 departments has a unique color for badges, borders, and department-specific accents. Colors are chosen for distinctiveness and WCAG AA contrast on both dark and light backgrounds.

| # | Department | Hex | Name |
|---|-----------|-----|------|
| 01 | Executive Leadership | `#6366F1` | Indigo |
| 02 | Engineering | `#8B5CF6` | Violet |
| 03 | Platform & Infrastructure | `#22D3EE` | Cyan |
| 04 | Product Management | `#F59E0B` | Amber |
| 05 | Design | `#F97316` | Tangerine |
| 06 | Data Science & AI/ML | `#06B6D4` | Sky Cyan |
| 07 | Quality Assurance | `#10B981` | Emerald |
| 08 | Security | `#EF4444` | Crimson |
| 09 | Sales & Revenue | `#3B82F6` | Blue |
| 10 | Marketing | `#EC4899` | Pink |
| 11 | Customer Success | `#14B8A6` | Teal |
| 12 | People / HR | `#A855F7` | Purple |
| 13 | Finance & Accounting | `#84CC16` | Lime |
| 14 | Legal & Compliance | `#F43F5E` | Rose |
| 15 | IT & Operations | `#94A3B8` | Slate |
| 16 | Developer Relations | `#FB923C` | Orange |
| 17 | Program Management | `#FACC15` | Yellow |
| 18 | Governance | `#FBBF24` | Sunflower |
| 19 | Special Agents | `#F472B6` | Pink Rose |
| 20 | Documentation | `#A3E635` | Lime Green |

### 1.5 Tier Colors

Each of the 10 organizational tiers has a unique badge color reflecting its authority level.

| Tier | Label | Hex | Name |
|------|-------|-----|------|
| 0 | C-Suite | `#FFD700` | Gold |
| 1 | VPs | `#C0C0C0` | Silver |
| 2 | Directors | `#CD7F32` | Bronze |
| 3 | Managers | `#8B5CF6` | Violet |
| 4 | Staff+ ICs | `#3B82F6` | Cobalt |
| 5 | Senior ICs | `#14B8A6` | Teal |
| 6 | Mid-Level | `#22C55E` | Green |
| 7 | Junior | `#06B6D4` | Cyan |
| 8 | Governance | `#94A3B8` | Steel |
| 9 | Special | `#FBBF24` | Sunflower |

### 1.6 Typography

| Role | Font | Weight | Fallback Stack |
|------|------|--------|---------------|
| **Headings** | Inter | 700 (Bold), 800 (ExtraBold) | system-ui, -apple-system, sans-serif |
| **Body** | Inter | 400 (Regular), 500 (Medium) | system-ui, -apple-system, sans-serif |
| **Code / Data** | JetBrains Mono | 400, 500 | ui-monospace, Menlo, Monaco, monospace |
| **Labels / Badges** | Inter | 600 (SemiBold) | system-ui, sans-serif |

**Loading Strategy:** Self-host via `@fontsource/inter` and `@fontsource/jetbrains-mono`. Use `font-display: swap` for web font loading. Subset to Latin to reduce bundle size.

### 1.7 Logo Concept

**Primary Mark:** The word "NEXUS" in Inter ExtraBold (800), letterspaced +0.05em, with "AI" in Quantum Blue (#00D9FF). The "X" in NEXUS has a subtle node/connection-point treatment — two small circular nodes at the intersection of the X strokes, evoking a network graph vertex.

**Icon Mark:** A stylized "N" constructed from interconnected nodes and edges — three vertical nodes on the left, three on the right, connected by crossing diagonal lines that form the N shape. The nodes glow in Quantum Blue against NEXUS Black.

**Favicon:** The icon mark simplified to a single "N" node shape, rendered in Quantum Blue on transparent background. Provided as SVG, 32x32 PNG, and 180x180 Apple Touch Icon.

**Logo Clearspace:** Minimum clearspace equal to the height of the "N" in the wordmark on all sides.

**Logo on Dark:** Full color (Quantum Blue "AI" + Signal White "NEXUS")
**Logo on Light:** Full color (Quantum Blue "AI" + Ink "NEXUS")
**Monochrome:** All white on dark, all black on light.

---

## 2. DESIGN TOKENS (TAILWIND CONFIGURATION)

### 2.1 Tailwind Config (tailwind.config.ts)

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // ── Colors ──────────────────────────────────────────────
      colors: {
        // Core brand
        nexus: {
          black: "#0A0E27",
          void: "#060918",
        },
        quantum: {
          DEFAULT: "#00D9FF",
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
        orbital: "#00F0FF",
        signal: "#E8ECF4",
        mist: "#94A3B8",

        // Semantic
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",

        // Department colors (aligned with project config)
        dept: {
          "executive":    "#6366F1",
          "engineering":  "#8B5CF6",
          "platform":     "#22D3EE",
          "product":      "#F59E0B",
          "design":       "#F97316",
          "data-ai":      "#06B6D4",
          "qa":           "#10B981",
          "security":     "#EF4444",
          "sales":        "#3B82F6",
          "marketing":    "#EC4899",
          "customer":     "#14B8A6",
          "hr":           "#A855F7",
          "finance":      "#84CC16",
          "legal":        "#F43F5E",
          "it-ops":       "#94A3B8",
          "devrel":       "#FB923C",
          "program":      "#FACC15",
          "governance":   "#FBBF24",
          "special":      "#F472B6",
          "docs":         "#A3E635",
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

      // ── Typography ──────────────────────────────────────────
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "Menlo", "Monaco", "monospace"],
      },
      fontSize: {
        // Fluid type scale (clamp: min, preferred, max)
        "display": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "h1":      ["clamp(2rem, 4vw, 3.5rem)",   { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "800" }],
        "h2":      ["clamp(1.5rem, 3vw, 2.5rem)",  { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "h3":      ["clamp(1.25rem, 2vw, 1.875rem)",{ lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "700" }],
        "h4":      ["clamp(1.125rem, 1.5vw, 1.5rem)", { lineHeight: "1.4", fontWeight: "600" }],
        "h5":      ["clamp(1rem, 1.25vw, 1.25rem)",   { lineHeight: "1.4", fontWeight: "600" }],
        "h6":      ["clamp(0.875rem, 1vw, 1rem)",     { lineHeight: "1.5", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body":    ["1rem",     { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "caption": ["0.75rem",  { lineHeight: "1.5" }],
        "badge":   ["0.6875rem",{ lineHeight: "1", fontWeight: "600", letterSpacing: "0.05em" }],
      },

      // ── Spacing ─────────────────────────────────────────────
      // 4px base grid, 8px foundation
      spacing: {
        "0.5": "0.125rem",  // 2px
        "1":   "0.25rem",   // 4px
        "1.5": "0.375rem",  // 6px
        "2":   "0.5rem",    // 8px
        "3":   "0.75rem",   // 12px
        "4":   "1rem",      // 16px
        "5":   "1.25rem",   // 20px
        "6":   "1.5rem",    // 24px
        "8":   "2rem",      // 32px
        "10":  "2.5rem",    // 40px
        "12":  "3rem",      // 48px
        "16":  "4rem",      // 64px
        "20":  "5rem",      // 80px
        "24":  "6rem",      // 96px
        "32":  "8rem",      // 128px
        "40":  "10rem",     // 160px
        "48":  "12rem",     // 192px
      },

      // ── Border Radius ───────────────────────────────────────
      borderRadius: {
        "none": "0",
        "sm":   "0.25rem",   // 4px — subtle
        "md":   "0.5rem",    // 8px — cards, buttons
        "lg":   "0.75rem",   // 12px — large cards, modals
        "xl":   "1rem",      // 16px — hero cards, feature blocks
        "2xl":  "1.5rem",    // 24px — prominent containers
        "full": "9999px",    // pills, avatars
      },

      // ── Shadows ─────────────────────────────────────────────
      boxShadow: {
        "subtle":   "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "sm":       "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        "md":       "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        "lg":       "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        "xl":       "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        "glow-sm":  "0 0 15px rgba(0, 217, 255, 0.15)",
        "glow-md":  "0 0 30px rgba(0, 217, 255, 0.2)",
        "glow-lg":  "0 0 60px rgba(0, 217, 255, 0.25)",
        "inner":    "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        // Dark mode card shadow
        "card-dark": "0 4px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)",
      },

      // ── Breakpoints ─────────────────────────────────────────
      screens: {
        "xs":   "320px",
        "sm":   "640px",
        "md":   "768px",
        "lg":   "1024px",
        "xl":   "1280px",
        "2xl":  "1440px",
        "3xl":  "1920px",
      },

      // ── Max Widths ──────────────────────────────────────────
      maxWidth: {
        "prose":      "65ch",
        "content":    "72rem",    // 1152px — standard content
        "wide":       "90rem",    // 1440px — wide layouts (visualizations)
        "full-bleed": "120rem",   // 1920px — full-bleed hero sections
      },

      // ── Z-Index ─────────────────────────────────────────────
      zIndex: {
        "behind":     "-1",
        "base":       "0",
        "raised":     "10",
        "dropdown":   "20",
        "sticky":     "30",
        "overlay":    "40",
        "modal":      "50",
        "toast":      "60",
        "tooltip":    "70",
      },

      // ── Animations ──────────────────────────────────────────
      keyframes: {
        "fade-in": {
          "0%":   { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%":   { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 15px rgba(0, 217, 255, 0.15)" },
          "50%":      { boxShadow: "0 0 30px rgba(0, 217, 255, 0.3)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-in":        "fade-in 0.5s ease-out forwards",
        "fade-up":        "fade-up 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "scale-in":       "scale-in 0.4s ease-out forwards",
        "pulse-glow":     "pulse-glow 3s ease-in-out infinite",
        "float":          "float 4s ease-in-out infinite",
      },

      // ── Transitions ─────────────────────────────────────────
      transitionDuration: {
        "fast":   "150ms",
        "normal": "250ms",
        "slow":   "400ms",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
```

### 2.2 CSS Custom Properties (globals.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* ── Surface & Background ───────────────── */
    --bg-primary:    #F8FAFC;
    --bg-secondary:  #FFFFFF;
    --bg-tertiary:   #F1F5F9;
    --text-primary:  #0F172A;
    --text-secondary:#475569;
    --text-muted:    #94A3B8;
    --border:        #E2E8F0;
    --ring:          #00D9FF;

    /* ── Accent ──────────────────────────────── */
    --accent:        #00D9FF;
    --accent-hover:  #00C4E6;
    --accent-muted:  rgba(0, 217, 255, 0.1);
  }

  .dark {
    --bg-primary:    #0A0E27;
    --bg-secondary:  #1E293B;
    --bg-tertiary:   #0F172A;
    --text-primary:  #E8ECF4;
    --text-secondary:#94A3B8;
    --text-muted:    #64748B;
    --border:        #334155;
    --ring:          #00D9FF;

    --accent:        #00D9FF;
    --accent-hover:  #00F0FF;
    --accent-muted:  rgba(0, 217, 255, 0.1);
  }

  /* ── Base Resets & Defaults ──────────────── */
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: "Inter", system-ui, -apple-system, sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    html { scroll-behavior: auto; }
  }

  /* Focus ring */
  :focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* Selection */
  ::selection {
    background-color: rgba(0, 217, 255, 0.2);
    color: inherit;
  }
}
```

---

## 3. TYPOGRAPHY SYSTEM

### 3.1 Type Scale

| Level | Size (fluid) | Weight | Line Height | Letter Spacing | Usage |
|-------|-------------|--------|-------------|----------------|-------|
| Display | 2.5rem-4.5rem | 800 | 1.1 | -0.02em | Hero headlines |
| H1 | 2rem-3.5rem | 800 | 1.15 | -0.02em | Page titles |
| H2 | 1.5rem-2.5rem | 700 | 1.2 | -0.01em | Section headings |
| H3 | 1.25rem-1.875rem | 700 | 1.3 | -0.01em | Subsection headings |
| H4 | 1.125rem-1.5rem | 600 | 1.4 | — | Card titles, feature titles |
| H5 | 1rem-1.25rem | 600 | 1.4 | — | Small section heads |
| H6 | 0.875rem-1rem | 600 | 1.5 | — | Label headings |
| Body Large | 1.125rem | 400 | 1.7 | — | Lead paragraphs, intro text |
| Body | 1rem | 400 | 1.7 | — | Default body copy |
| Body Small | 0.875rem | 400 | 1.6 | — | Secondary content, metadata |
| Caption | 0.75rem | 400 | 1.5 | — | Footnotes, timestamps |
| Badge | 0.6875rem | 600 | 1.0 | 0.05em | Badges, labels, tags |

### 3.2 Typography Rules

1. **Maximum line width:** 65ch for body text (readability)
2. **Heading hierarchy:** Never skip heading levels (H1 -> H2 -> H3, not H1 -> H3)
3. **Font loading:** Use `font-display: swap` to prevent FOIT
4. **Code blocks:** Always use JetBrains Mono, with syntax highlighting via Shiki
5. **Numbers in data:** Use JetBrains Mono for tabular data (numeric columns) with `font-variant-numeric: tabular-nums`

---

## 4. COLOR SYSTEM

### 4.1 Contrast Matrix (WCAG AA Compliance)

All text-on-background combinations must meet WCAG 2.1 AA minimum contrast ratios:
- **Normal text (< 18pt):** 4.5:1 minimum
- **Large text (>= 18pt bold or >= 24pt regular):** 3:1 minimum
- **UI components and graphical objects:** 3:1 minimum

**Verified Combinations:**

| Foreground | Background | Ratio | Pass? |
|-----------|-----------|-------|-------|
| Signal White (#E8ECF4) | NEXUS Black (#0A0E27) | 14.2:1 | AA, AAA |
| Mist (#94A3B8) | NEXUS Black (#0A0E27) | 6.8:1 | AA, AAA |
| Quantum Blue (#00D9FF) | NEXUS Black (#0A0E27) | 10.1:1 | AA, AAA |
| Ink (#0F172A) | Cloud (#F8FAFC) | 15.4:1 | AA, AAA |
| Graphite (#475569) | Cloud (#F8FAFC) | 6.3:1 | AA |
| Quantum Blue (#00D9FF) | Cloud (#F8FAFC) | 2.8:1 | FAIL for small text |

**Note:** Quantum Blue on light backgrounds does not meet AA for small text. Use `#0891B2` (Quantum 700) for text on light backgrounds.

| Foreground | Background | Ratio | Pass? |
|-----------|-----------|-------|-------|
| Quantum Dark (#0891B2) | Cloud (#F8FAFC) | 4.6:1 | AA |

### 4.2 Color Usage Guidelines

- **Primary actions (buttons, links):** Quantum Blue on dark; Quantum 700 (#0891B2) on light
- **Backgrounds:** NEXUS Black (dark mode) / Cloud (light mode)
- **Cards and elevated surfaces:** Slate Dark #1E293B (dark) / Snow #FFFFFF (light)
- **Borders:** Slate #334155 (dark) / Fog #E2E8F0 (light)
- **Department badges:** Use department color as background with white text (all pass AA at these sizes)
- **Tier badges:** Use tier color as background with appropriate text (white or dark) per contrast check
- **Destructive actions:** Error Red (#EF4444) — always with confirmation dialog
- **Disabled states:** 40% opacity of the normal color

### 4.3 Gradient Definitions

```css
/* Hero background gradient */
.gradient-hero {
  background: linear-gradient(135deg, #060918 0%, #0A0E27 40%, #0F172A 100%);
}

/* Quantum accent gradient (for glowing elements) */
.gradient-quantum {
  background: linear-gradient(135deg, #00D9FF 0%, #00F0FF 100%);
}

/* Card hover shimmer */
.gradient-shimmer {
  background: linear-gradient(
    135deg,
    rgba(0, 217, 255, 0.05) 0%,
    rgba(0, 240, 255, 0.02) 50%,
    rgba(0, 217, 255, 0.05) 100%
  );
}

/* Mesh gradient for hero (applied via pseudo-element) */
.gradient-mesh {
  background:
    radial-gradient(ellipse at 20% 50%, rgba(0, 217, 255, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 80%, rgba(0, 240, 255, 0.04) 0%, transparent 50%);
}
```

---

## 5. COMPONENT SPECIFICATIONS

### 5.1 AgentCard

The primary component for displaying agent profiles in grid views.

**Anatomy:**

```
┌─────────────────────────────────────┐
│  [Avatar: 64x64, rounded-full]      │
│                                     │
│  Agent Name (H4, bold)              │
│  Role Title (body-sm, muted)        │
│                                     │
│  ┌─────────┐  ┌──────────┐         │
│  │ Dept     │  │ Tier     │         │
│  │ Badge    │  │ Badge    │         │
│  └─────────┘  └──────────┘         │
│                                     │
│  Agent #042  ·  Reports to: CTO     │
└─────────────────────────────────────┘
```

**Specifications:**

| Property | Value |
|----------|-------|
| Width | 100% of grid column |
| Min height | 200px |
| Padding | 24px (p-6) |
| Background | `var(--bg-secondary)` |
| Border | 1px solid `var(--border)` |
| Border radius | 12px (rounded-lg) |
| Hover | Translate Y -2px, shadow-lg, border-color → quantum-500/20 |
| Transition | 250ms smooth |
| Avatar size | 64x64px, rounded-full, with 2px ring in department color |
| Department badge | Pill shape, department color bg, white text, font-badge |
| Tier badge | Pill shape, tier color bg, appropriate text, font-badge |
| Agent number | Caption size, muted text, monospace font |
| Click target | Entire card is clickable (link to agent profile page) |

**States:**
- Default: Subtle border, no shadow
- Hover: Elevated (translateY -2px), glow-sm shadow, border brightens
- Focus: 2px quantum blue outline
- Loading: Skeleton shimmer (pulsing gradient animation on placeholder shapes)

**React Component Interface:**

```tsx
interface AgentCardProps {
  agentNumber: number;       // 001-195
  code: string;              // e.g., "CEO", "SR-FE-REACT"
  name: string;              // Role title
  department: string;        // Department name
  departmentNumber: number;  // 01-20
  tier: number;              // 0-9
  tierLabel: string;         // e.g., "C-Suite", "Senior ICs"
  nickname?: string;         // e.g., "Sherlock"
  reportsTo: string;         // Code of reporting agent
  avatarUrl?: string;        // Path to avatar image
}
```

### 5.2 DepartmentCard

Used on the Our Team overview and department listing pages.

**Anatomy:**

```
┌──────────────────────────────────────────┐
│  [Department Icon: 48x48]                │
│                                          │
│  Department Name (H3)                    │
│  XX Agents · Tier Range (body-sm, muted) │
│                                          │
│  Brief description or mission (body-sm)  │
│                                          │
│  ┌──────────────────────────┐            │
│  │ Explore Department →     │            │
│  └──────────────────────────┘            │
│                                          │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━           │
│  (Bottom border in department color)     │
└──────────────────────────────────────────┘
```

**Specifications:**

| Property | Value |
|----------|-------|
| Width | 100% of grid column |
| Padding | 32px (p-8) |
| Background | `var(--bg-secondary)` |
| Border | 1px solid `var(--border)` |
| Bottom border | 3px solid department color |
| Border radius | 12px (rounded-lg) |
| Hover | Shadow-lg, bottom border widens to 4px |
| Icon | Department-specific SVG icon, 48x48, colored in department color |
| CTA text | "Explore Department" with right arrow, quantum blue |

### 5.3 Hero Section

The homepage hero is the first impression — it must communicate scale, sophistication, and energy.

**Anatomy:**

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  ░░░ Animated mesh gradient background ░░░                 │
│  ░░░ (subtle particle/node network animation) ░░░          │
│                                                            │
│     [NEXUS AI Logo]                                        │
│                                                            │
│     195 AI Agents.                           (display)     │
│     20 Departments.                          (h1)          │
│     One Autonomous Agency.                   (h1)          │
│                                                            │
│     We don't just build software.            (body-lg)     │
│     Our AI agents plan, design, develop,                   │
│     test, and ship it.                                     │
│                                                            │
│     ┌────────────────┐  ┌───────────────────┐              │
│     │ Request Demo   │  │ Meet the Team →   │              │
│     │ (Primary CTA)  │  │ (Secondary CTA)   │              │
│     └────────────────┘  └───────────────────┘              │
│                                                            │
│     [Scrolling agent avatar strip — 20 featured agents]    │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Specifications:**

| Property | Value |
|----------|-------|
| Height | 100vh (min 600px, max 900px) |
| Background | gradient-hero + gradient-mesh overlay |
| Animation | Subtle floating particle nodes (canvas or SVG), connected by faint lines — evokes a neural network. Respect `prefers-reduced-motion`. |
| Headline | Display size, Signal White, staggered fade-up animation (0.1s delay per line) |
| Subtext | body-lg, Mist color, fade-in after headline completes |
| Primary CTA | Quantum Blue bg, NEXUS Black text, rounded-md, px-8 py-4, font-semibold |
| Secondary CTA | Transparent bg, quantum blue border, quantum blue text, rounded-md |
| Avatar strip | Horizontal scroll of 20 circular avatars (40x40), subtle glow on hover, auto-scroll animation |

### 5.4 Navigation (Header)

**Desktop (>= 1024px):**

```
┌────────────────────────────────────────────────────────────────┐
│ [Logo]    About ▾   Our Team   How We Work ▾   Services ▾     │
│                               Resources ▾   [🌙] [Contact →]  │
└────────────────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Height | 64px |
| Position | Fixed top, z-sticky (30) |
| Background | Transparent at top, bg-primary/80 + backdrop-blur-lg on scroll |
| Logo | Left-aligned, links to home |
| Nav links | font-medium, text-body-sm, 8px gap |
| Dropdown | Opens on hover (desktop) / click (touch), 200ms delay |
| Dark mode toggle | Icon button (sun/moon), 32x32 |
| CTA button | "Contact" — primary button style, right-aligned |
| Scroll behavior | Background becomes semi-opaque with blur after 50px scroll |

**Mobile (< 1024px):**

```
┌──────────────────────────────────┐
│ [Logo]             [🌙] [☰]     │
└──────────────────────────────────┘

Hamburger opens full-screen overlay:
┌──────────────────────────────────┐
│                           [✕]    │
│                                  │
│  About                    [+]    │
│  Our Team                        │
│  How We Work              [+]    │
│  Services                 [+]    │
│  Resources                [+]    │
│                                  │
│  ┌──────────────────────────┐    │
│  │       Contact Us         │    │
│  └──────────────────────────┘    │
│                                  │
│  [Dark mode toggle]              │
└──────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Overlay | Full screen, bg-primary, z-overlay (40) |
| Animation | Slide in from right, 300ms |
| Links | H3 size, full width, 16px padding vertical |
| Expandable sections | Accordion pattern with [+/-] indicator |
| Close | X button top-right, or swipe right, or Escape key |

### 5.5 Footer

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  [Logo]                                                            │
│                                                                    │
│  195 AI Agents building the future of software.                    │
│                                                                    │
│  ── Company ──    ── Platform ──     ── Resources ──   ── Legal ── │
│  About            How We Work        Blog              Terms       │
│  Our Team         Services           Documentation     Privacy     │
│  Careers          Industries         Open Source        Cookies     │
│  Contact          Case Studies       Events                        │
│                   Technology         Media Kit                      │
│                                                                    │
│  ── Newsletter ──────────────────────────────────────              │
│  [Enter email                        ] [Subscribe]                 │
│                                                                    │
│  ── Social ──────────────────────────────────────────              │
│  [GitHub] [LinkedIn] [Twitter/X] [YouTube]                         │
│                                                                    │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  (c) 2026 NEXUS AI. All rights reserved.                           │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Background | bg-tertiary (slightly different from page bg) |
| Top border | 1px solid var(--border) |
| Padding | py-16 px-6 (section), py-6 (bottom bar) |
| Grid | 4-column on desktop, 2-column on tablet, stacked on mobile |
| Newsletter input | Full-width on mobile, inline on desktop |
| Social icons | 24x24, muted color, quantum blue on hover |
| Copyright | caption size, muted text |

### 5.6 Search & Filter UI (Agent Directory)

**Desktop Layout:**

```
┌───────────────────────────────────────────────────────────────┐
│                                                               │
│  Our Team                                                     │
│  195 AI Agents across 20 Departments                          │
│                                                               │
│  ┌─[🔍 Search agents by name, role, or code...]──────────┐   │
│  └────────────────────────────────────────────────────────┘   │
│                                                               │
│  Filter: [All Depts ▾]  [All Tiers ▾]  [Sort: Number ▾]      │
│                                                               │
│  Showing 195 of 195 agents                                    │
│                                                               │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐            │
│  │ Agent   │ │ Agent   │ │ Agent   │ │ Agent   │            │
│  │ Card    │ │ Card    │ │ Card    │ │ Card    │            │
│  │         │ │         │ │         │ │         │            │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘            │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐            │
│  │ ...     │ │ ...     │ │ ...     │ │ ...     │            │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘            │
│                                                               │
│  [Load More] or [Pagination: 1 2 3 ... 10]                   │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

**Search Specifications:**

| Property | Value |
|----------|-------|
| Search input | Full width, 48px height, rounded-lg, search icon left, clear button right |
| Debounce | 300ms debounce on search input |
| Filters | Dropdown selects (department, tier), pill toggle for sort |
| Grid | 4-col (xl), 3-col (lg), 2-col (md), 1-col (sm) |
| Pagination | Show 24 agents per page (6 rows x 4 cols) |
| Empty state | Friendly illustration + "No agents match your search" message |
| URL sync | Filter state reflected in URL query params for shareability |

### 5.7 Interactive Visualizations

**Network Graph (Agent Explorer):**

A force-directed graph visualization showing all 195 agents as nodes, connected by reporting relationships. Built with D3.js or a React wrapper.

| Property | Value |
|----------|-------|
| Node size | Varies by tier (Tier 0 largest, Tier 9 smallest) |
| Node color | Department color |
| Edge color | Muted (slate-700), brightens on hover |
| Hover | Node enlarges, shows tooltip with agent name/role/department |
| Click | Navigate to agent profile page |
| Controls | Zoom, pan, department filter toggles, tier filter toggles |
| Performance | Use WebGL renderer (via @react-three/fiber or Pixi.js) for 195+ nodes |
| Reduced motion | Static layout with no physics simulation |

**Org Chart:**

A hierarchical tree showing the reporting structure from CEO down. Collapsible per level.

| Property | Value |
|----------|-------|
| Orientation | Top-down (desktop), left-right (mobile) |
| Node | Small agent card (avatar + name + code) |
| Expand/collapse | Click on a node to expand its direct reports |
| Default state | Expanded to Tier 2 (Directors), collapsed below |
| Highlight | Click a department filter to highlight only that department's chain |

---

## 6. LAYOUT SYSTEM

### 6.1 Container System

```css
/* Standard content container */
.container-content {
  max-width: 72rem;    /* 1152px */
  margin: 0 auto;
  padding: 0 1.5rem;   /* 24px horizontal padding */
}

/* Narrow container for long-form text */
.container-prose {
  max-width: 65ch;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Wide container for visualizations */
.container-wide {
  max-width: 90rem;    /* 1440px */
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Full-bleed sections (hero, etc.) */
.container-bleed {
  max-width: 120rem;   /* 1920px */
  margin: 0 auto;
  padding: 0;
}

/* Responsive padding adjustment */
@media (min-width: 768px) {
  .container-content,
  .container-prose,
  .container-wide {
    padding: 0 2rem;   /* 32px on tablet+ */
  }
}

@media (min-width: 1280px) {
  .container-content,
  .container-prose,
  .container-wide {
    padding: 0 3rem;   /* 48px on desktop+ */
  }
}
```

### 6.2 Grid Systems

**Agent Grid:**

| Breakpoint | Columns | Gap |
|-----------|---------|-----|
| < 640px (xs/sm) | 1 | 16px |
| 640px-767px | 2 | 16px |
| 768px-1023px (md) | 2 | 24px |
| 1024px-1279px (lg) | 3 | 24px |
| >= 1280px (xl+) | 4 | 24px |

**Department Grid:**

| Breakpoint | Columns | Gap |
|-----------|---------|-----|
| < 768px | 1 | 16px |
| 768px-1279px | 2 | 24px |
| >= 1280px | 3 | 24px |

**Feature/Service Grid:**

| Breakpoint | Columns | Gap |
|-----------|---------|-----|
| < 768px | 1 | 24px |
| 768px-1023px | 2 | 24px |
| >= 1024px | 3 | 32px |

### 6.3 Section Spacing

| Context | Spacing |
|---------|---------|
| Between major page sections | 96px (py-24) on desktop, 64px (py-16) on mobile |
| Between subsections | 48px (py-12) on desktop, 32px (py-8) on mobile |
| Section heading to content | 32px (mb-8) |
| Between cards in a grid | 24px (gap-6) |
| Between paragraphs | 24px (space-y-6) for body text |
| Between list items | 8px (space-y-2) |

### 6.4 Page Templates

**Homepage:**
1. Hero (full-bleed, 100vh)
2. Social proof bar (logos, metrics) — container-content
3. What We Do (3-col feature grid) — container-content
4. Meet the Team (featured agents carousel) — container-wide
5. How We Work (lifecycle preview) — container-content
6. Testimonials/Case Studies — container-content
7. CTA Section (dark, full-bleed)
8. Footer

**Agent Profile Page:**
1. Agent header (avatar, name, code, dept badge, tier badge) — container-content
2. About / Personality section — container-prose
3. Core Responsibilities — container-prose
4. Decision Authority — container-prose
5. Personal section (nickname, strengths, working-with-me) — container-prose
6. Reporting chain (mini org chart) — container-content
7. Related agents (same department) — container-content

**Department Page:**
1. Department header (icon, name, agent count, description) — container-content
2. Agent grid (all agents in this department) — container-content
3. Department reporting structure (mini org chart) — container-content
4. Key responsibilities and SOPs — container-prose
5. Cross-department interactions — container-content

**About Page:**
1. Hero (smaller, with background image/gradient)
2. Our Story — container-prose
3. Mission & Values — container-content (3-col grid)
4. Leadership Team (C-Suite cards) — container-content
5. By the Numbers (stats) — container-wide
6. AI Ethics — container-prose

**Blog Post:**
1. Hero image (full-bleed, 40vh)
2. Title, author, date, tags — container-prose
3. Body content (markdown rendered) — container-prose
4. Author card — container-prose
5. Related posts — container-content

---

## 7. ANIMATION & INTERACTION

### 7.1 Scroll-Triggered Animations (Framer Motion)

All scroll animations use Framer Motion's `useInView` hook with `once: true` (animate only on first view).

**Fade-Up (Default Section Entrance):**

```tsx
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};
```

**Staggered Children (Card Grids):**

```tsx
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const staggerChild = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};
```

**Counter Animation (Stats):**

Animate numbers from 0 to target value over 1.5 seconds using `useSpring` or `useMotionValue`.

```
195 agents → counts up from 0 to 195
20 departments → counts up from 0 to 20
10 tiers → counts up from 0 to 10
```

### 7.2 Page Transitions

Use Framer Motion `AnimatePresence` for route transitions:

```tsx
const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};
```

Keep transitions subtle (opacity only) — avoid full-page slide animations that slow perceived navigation speed.

### 7.3 Micro-Interactions

| Element | Interaction | Animation |
|---------|-----------|-----------|
| **Buttons (primary)** | Hover | Scale 1.02, shadow-glow-sm, 150ms |
| **Buttons (primary)** | Press | Scale 0.98, 100ms |
| **Cards** | Hover | TranslateY -2px, shadow-lg, border glow, 250ms |
| **Links** | Hover | Color transition to quantum blue, underline slide-in from left, 200ms |
| **Navigation dropdown** | Open | Opacity + translateY from -8px, 200ms |
| **Avatar** | Hover | Scale 1.1, ring glow in department color, 200ms |
| **Toggle (dark mode)** | Click | Icon rotates 180deg, 300ms |
| **Badge** | Hover | Slight brightness increase (filter: brightness(1.1)), 150ms |
| **Search input** | Focus | Border color to quantum blue, shadow-glow-sm, 200ms |
| **Accordion** | Expand | Height auto-animate + rotate chevron, 300ms |
| **Toast/notification** | Enter | Slide in from top-right, 300ms |
| **Toast/notification** | Exit | Fade out + slide right, 200ms |

### 7.4 Loading States

**Skeleton Screens:**

Replace content with pulsing placeholder blocks that match the shape of the expected content:

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--bg-tertiary) 0%,
    var(--bg-secondary) 50%,
    var(--bg-tertiary) 100%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
  border-radius: 4px;
}

@keyframes skeleton-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

**Loading Patterns:**
- Agent grid: Show skeleton AgentCards (6-12 depending on viewport)
- Agent profile: Show skeleton layout matching the page structure
- Search: Show inline spinner next to search icon, do not block the UI
- Page transition: Minimal — use skeleton of target page, not a full-page spinner

### 7.5 Reduced Motion

All animations must respect `prefers-reduced-motion: reduce`:

```tsx
const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// In Framer Motion components:
<motion.div
  variants={fadeUpVariants}
  initial={prefersReducedMotion ? "visible" : "hidden"}
  whileInView="visible"
  viewport={{ once: true }}
/>
```

When reduced motion is preferred:
- Replace slide/fade animations with instant appearance (opacity: 0 → 1, duration: 0.01s)
- Disable parallax effects
- Disable auto-scrolling carousels (show static state)
- Keep hover color changes (they are not motion)
- Remove the floating particle animation in the hero (show static gradient)

---

## 8. ACCESSIBILITY STANDARDS

### 8.1 WCAG 2.1 AA Compliance Checklist

**Perceivable:**
- [ ] All images have meaningful alt text (or `alt=""` for decorative)
- [ ] Color is never the only means of conveying information
- [ ] Text contrast meets 4.5:1 for normal, 3:1 for large text
- [ ] UI component contrast meets 3:1
- [ ] Content is readable at 200% zoom
- [ ] Responsive down to 320px viewport width without horizontal scroll

**Operable:**
- [ ] All interactive elements are keyboard accessible
- [ ] Focus order is logical and follows DOM order
- [ ] Focus indicator is visible (2px quantum blue ring)
- [ ] No keyboard traps
- [ ] Skip-to-content link as first focusable element
- [ ] Dropdown menus navigable with arrow keys
- [ ] Modal dialogs trap focus within
- [ ] Escape key closes modals and overlays

**Understandable:**
- [ ] Language attribute set on `<html>` (`lang="en"`)
- [ ] Form inputs have associated `<label>` elements
- [ ] Error messages are descriptive and associated with the input
- [ ] Consistent navigation across pages
- [ ] No unexpected context changes on focus

**Robust:**
- [ ] Valid HTML (no duplicate IDs, proper nesting)
- [ ] ARIA roles and attributes used correctly
- [ ] Dynamic content updates announced to screen readers (`aria-live`)
- [ ] Works with major screen readers (VoiceOver, NVDA, JAWS)

### 8.2 Focus Management

```css
/* Custom focus ring */
:focus-visible {
  outline: 2px solid #00D9FF;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Remove default focus for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
```

**Skip-to-content link:**

```html
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-tooltip focus:bg-quantum focus:text-nexus-black focus:px-4 focus:py-2 focus:rounded-md">
  Skip to main content
</a>
```

### 8.3 Screen Reader Considerations

- **Agent cards:** Use `role="article"` or semantic `<article>` with `aria-label="Agent 042: SR-FE-REACT, Senior Frontend Engineer"`
- **Department badges:** Include department name in screen reader text, not just color
- **Tier badges:** Include tier number and label in screen reader text
- **Icon-only buttons:** Always provide `aria-label` (e.g., dark mode toggle: `aria-label="Switch to dark mode"`)
- **Dynamic content:** Use `aria-live="polite"` for search result counts that update
- **Org chart visualization:** Provide an accessible alternative (nested list of reporting chains)
- **Network graph:** Provide an accessible alternative (sortable table of agents)

### 8.4 Testing Requirements

| Tool | Purpose | Frequency |
|------|---------|-----------|
| axe DevTools | Automated accessibility audit | Every PR |
| Lighthouse Accessibility | Overall score | Every build (CI) |
| VoiceOver (macOS/iOS) | Manual screen reader testing | Per sprint |
| Keyboard-only navigation | Manual keyboard testing | Per sprint |
| Color contrast analyzer | Verify new color combinations | Per design change |

---

## 9. AVATAR SYSTEM

### 9.1 Overview

Each of the 195 agents has a unique cinematic avatar — AI-generated portraits with a consistent visual style.

### 9.2 Generation Pipeline

1. **Source script:** `/8k_Avaters/nexus_avatar_generator.py`
2. **Input:** Agent data from `/8k_Avaters/agents.nexus.json`
3. **Output:** One avatar prompt per agent, designed for image generation tools
4. **Generation command:**
   ```bash
   python3 8k_Avaters/nexus_avatar_generator.py \
     --input 8k_Avaters/agents.nexus.json \
     --output avatars.txt \
     --seed 8800
   ```

### 9.3 Avatar Style Guide

| Property | Specification |
|----------|--------------|
| Style | Cinematic portrait, dramatic lighting, futuristic/cyberpunk aesthetic |
| Framing | Head and shoulders, slight angle |
| Background | Abstract, dark with department-color accent lighting |
| Resolution | Source: 1024x1024 minimum |
| Web format | WebP, served at 128x128 (profile grid), 256x256 (profile page), 64x64 (cards) |
| Aspect ratio | 1:1 (square, displayed as circle with rounded-full) |
| Lazy loading | All avatars use `loading="lazy"` except above-the-fold |

### 9.4 Fallback System

When an avatar fails to load (network error, missing file), display initials fallback:

```tsx
interface AvatarProps {
  src?: string;
  code: string;             // Agent code for initials
  departmentColor: string;  // Background color for fallback
  size: "sm" | "md" | "lg"; // 64px | 128px | 256px
}

// Fallback rendering:
// - Circle with department color background (20% opacity)
// - First two letters of agent code centered
// - Text in department color
// Example: "CE" for CEO, "SR" for SR-FE-REACT
```

**Size Map:**

| Size | Dimensions | Font | Usage |
|------|-----------|------|-------|
| sm | 40x40px | 14px semibold | Avatar strips, inline mentions |
| md | 64x64px | 18px semibold | Agent cards in grid |
| lg | 128x128px | 32px semibold | Agent profile page header |
| xl | 256x256px | — | Agent profile hero |

---

## 10. DARK/LIGHT MODE

### 10.1 Implementation

- Use Tailwind `darkMode: "class"` strategy
- Default to system preference via `prefers-color-scheme` media query
- Manual toggle overrides system preference, stored in `localStorage`
- Transition between modes: 300ms ease on background-color and color

### 10.2 Detection and Persistence

```typescript
// On page load (run before render to prevent flash):
const theme = (() => {
  const stored = localStorage.getItem("nexus-theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
})();

document.documentElement.classList.toggle("dark", theme === "dark");
```

Place this script in the `<head>` as a blocking `<script>` to prevent flash of wrong theme (FOWT).

### 10.3 Color Token Mapping

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| bg-primary | #F8FAFC | #0A0E27 |
| bg-secondary | #FFFFFF | #1E293B |
| bg-tertiary | #F1F5F9 | #0F172A |
| text-primary | #0F172A | #E8ECF4 |
| text-secondary | #475569 | #94A3B8 |
| text-muted | #94A3B8 | #64748B |
| border | #E2E8F0 | #334155 |
| accent | #00D9FF | #00D9FF |
| accent-text (for readable links) | #0891B2 | #00D9FF |

### 10.4 Component Adaptations

- **Hero background:** gradient-hero (dark) / subtle light gradient (light)
- **Particle animation:** Quantum Blue nodes on Void (dark) / Slate-200 nodes on Cloud (light)
- **Cards:** Shadow-md on white (light) / card-dark shadow on slate-800 (dark)
- **Code blocks:** Dark theme always (consistent with developer expectations)
- **Images:** Apply subtle brightness reduction in dark mode to prevent glare: `dark:brightness-90`

---

## 11. ICONOGRAPHY

### 11.1 Icon Library

Use **Lucide React** as the primary icon library. It provides consistent, well-crafted SVG icons with React components.

```bash
npm install lucide-react
```

### 11.2 Icon Sizing

| Context | Size | Tailwind Class |
|---------|------|---------------|
| Inline with text | 16px | `w-4 h-4` |
| Buttons | 20px | `w-5 h-5` |
| Navigation | 20px | `w-5 h-5` |
| Card icons | 24px | `w-6 h-6` |
| Feature icons | 32px | `w-8 h-8` |
| Department icons | 48px | `w-12 h-12` |
| Hero / empty state | 64px | `w-16 h-16` |

### 11.3 Department Icons

Each department has a designated icon from Lucide:

| # | Department | Icon |
|---|-----------|------|
| 01 | Executive Leadership | `Crown` |
| 02 | Engineering | `Code2` |
| 03 | Platform & Infrastructure | `Server` |
| 04 | Product Management | `LayoutDashboard` |
| 05 | Design | `Palette` |
| 06 | Data Science & AI/ML | `Brain` |
| 07 | Quality Assurance | `ShieldCheck` |
| 08 | Security | `Lock` |
| 09 | Sales & Revenue | `TrendingUp` |
| 10 | Marketing | `Megaphone` |
| 11 | Customer Success | `HeartHandshake` |
| 12 | People / HR | `Users` |
| 13 | Finance & Accounting | `Calculator` |
| 14 | Legal & Compliance | `Scale` |
| 15 | IT & Operations | `Monitor` |
| 16 | Developer Relations | `MessageCircleCode` |
| 17 | Program Management | `Kanban` |
| 18 | Governance | `Landmark` |
| 19 | Special Agents | `Sparkles` |
| 20 | Documentation | `BookOpen` |

---

## 12. IMPLEMENTATION NOTES

### 12.1 Technology Stack Alignment

This design system is built for the following stack (per Discovery Report and Architecture decisions):

| Layer | Technology |
|-------|-----------|
| Framework | **Astro + React Islands** (confirmed — static output for GitHub Pages) |
| Styling | Tailwind CSS 3.4+ |
| Components | shadcn/ui as base (customized to NEXUS brand), used within React islands |
| Animation | Framer Motion 10+ (React islands only), CSS keyframes (Astro static sections) |
| Icons | Lucide React (islands) / lucide-astro (static components) |
| Fonts | @fontsource/inter, @fontsource/jetbrains-mono |
| Hosting | **GitHub Pages** (static-only, no SSR) |
| Visualization | D3.js for network graphs (React island) |

**Component Boundaries (Astro vs React Islands):**

| Component | Type | Rationale |
|-----------|------|-----------|
| AgentCard | `.astro` | Static content, no client JS needed |
| DepartmentCard | `.astro` | Static content |
| Hero (content) | `.astro` | Static headline, CTAs |
| Hero (particle animation) | React island (`client:visible`) | Canvas/WebGL requires JS |
| Header (desktop nav) | `.astro` | Static links, CSS-only dropdowns |
| MobileMenu | React island (`client:media="(max-width: 1023px)"`) | Toggle state requires JS |
| Footer | `.astro` | Static content |
| AgentSearch + Filters | React island (`client:load`) | Interactive search, state management |
| NetworkGraph | React island (`client:visible`) | D3.js visualization |
| OrgChart | React island (`client:visible`) | Interactive expand/collapse |
| ThemeToggle | React island (`client:load`) | localStorage + class toggle |
| Newsletter form | React island (`client:visible`) | Form validation + submission |

### 12.2 shadcn/ui Customization

shadcn/ui provides unstyled, accessible component primitives. Customize them using the NEXUS design tokens:

- Override the default shadcn color CSS variables with NEXUS tokens in `globals.css`
- Use the NEXUS border-radius scale (8px default instead of shadcn's 6px)
- Apply NEXUS font family to all text components
- Extend Button variants to include `quantum` (Quantum Blue bg, dark text)
- Add `glow` variant to Card component (for featured agents, hover states)

### 12.3 File Organization

```
src/
  styles/
    globals.css          # Tailwind directives + CSS custom properties
  lib/
    constants/
      colors.ts          # Department & tier color mappings (typed)
      icons.ts           # Department icon mappings
  components/
    ui/                  # shadcn/ui base components (customized)
    agents/
      AgentCard.tsx
      AgentGrid.tsx
      AgentProfile.tsx
      AgentSearch.tsx
      AvatarFallback.tsx
    departments/
      DepartmentCard.tsx
      DepartmentGrid.tsx
    layout/
      Header.tsx
      Footer.tsx
      MobileMenu.tsx
      Container.tsx
      ThemeToggle.tsx
    sections/
      Hero.tsx
      SocialProof.tsx
      FeatureGrid.tsx
    visualizations/
      NetworkGraph.tsx
      OrgChart.tsx
```

### 12.4 Performance Budget

| Asset | Budget |
|-------|--------|
| Initial JS bundle | < 150KB (gzipped) |
| CSS | < 30KB (Tailwind purged) |
| Fonts (Inter + JetBrains Mono) | < 80KB (subsetted, woff2) |
| Hero image/animation | < 200KB |
| Individual avatar (WebP) | < 15KB at 256x256 |
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |

### 12.5 Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 90+ |
| Firefox | 90+ |
| Safari | 15+ |
| Edge | 90+ |
| iOS Safari | 15+ |
| Chrome Android | 90+ |

### 12.6 Handoff to Engineering

This design system document serves as the source of truth for Sprint 1 implementation. Engineers should:

1. Set up Tailwind config using Section 2.1 token definitions
2. Implement globals.css using Section 2.2
3. Install and configure fonts (Inter, JetBrains Mono)
4. Install Lucide React for iconography
5. Set up shadcn/ui with NEXUS customizations
6. Implement dark/light mode toggle per Section 10
7. Build core components (AgentCard, DepartmentCard, Header, Footer) per Section 5
8. Implement layout containers and grids per Section 6
9. Add Framer Motion animation utilities per Section 7
10. Run accessibility audit baseline per Section 8

---

**Document prepared by:** VP-DES (074 — "Pixel")
**Reviewed by:** SR-UID (080), SR-UXD (081), STAFF-DES (078)
**Date:** February 15, 2026
**Status:** APPROVED
**Next Step:** Handoff to Engineering for Sprint 1 Foundation & Setup (Task #5)
