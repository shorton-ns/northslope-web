import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Altitude Design System ─────────────────────────────────────────────
      // Northslope Technologies · Two-palette system: Verdant + Stone
      colors: {
        verdant: {
          50:  "#F0FBF5",
          100: "#D6F5E5",
          200: "#A8E8C5",
          300: "#72D4A0",
          400: "#3EBD78",
          500: "#2EA060",
          600: "#238551",
          700: "#1A6E45", // ← base
          800: "#125230",
          900: "#0A3620",
          950: "#071F13",
        },
        stone: {
          50:  "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D6D3D1",
          400: "#A8A29E",
          500: "#78716C", // ← base
          600: "#57534E",
          700: "#44403C",
          800: "#292524",
          900: "#1C1917",
          950: "#0C0A09",
        },
      },

      fontFamily: {
        heading: ["Aeonik", "Inter", "system-ui", "sans-serif"],
        body:    ["Hanken Grotesk", "Inter", "system-ui", "sans-serif"],
        mono:    ["JetBrains Mono", "Fira Code", "monospace"],
      },

      fontSize: {
        "xs":   ["12px", { lineHeight: "1.5" }],
        "sm":   ["14px", { lineHeight: "1.5" }],
        "md":   ["16px", { lineHeight: "1.5" }],
        "lg":   ["18px", { lineHeight: "1.5" }],
        "xl":   ["20px", { lineHeight: "1.2" }],
        "2xl":  ["24px", { lineHeight: "1.2" }],
        "3xl":  ["28px", { lineHeight: "1.2" }],
        "4xl":  ["36px", { lineHeight: "1.2" }],
        // Display sizes (marketing use only)
        "5xl":  ["48px", { lineHeight: "1.1" }],
        "6xl":  ["60px", { lineHeight: "1.05" }],
        "7xl":  ["72px", { lineHeight: "1.0" }],
      },

      letterSpacing: {
        tight:   "-0.02em",
        normal:  "0",
        wide:    "0.05em",
        widest:  "0.12em",
      },

      borderRadius: {
        sm:  "4px",
        md:  "8px",
        lg:  "12px",
        xl:  "16px",
        "2xl": "24px",
      },
    },
  },
  plugins: [],
};

export default config;
