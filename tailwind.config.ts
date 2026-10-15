import type { Config } from "tailwindcss";

// Tokens from design.md §2 / §3 / §10 — monochrome only, do not add colors.
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FCFCF9",
        bg2: "#F2F2F0",
        card: "#FFFFFF",
        fg: "#0A0A0A",
        fg2: "#6B6B6B",
        muted: "#9A9A9A",
        border: "#E5E5E5",
        borderDark: "#111111",
      },
      fontFamily: {
        // CSS variables are injected by next/font in app/layout.tsx
        display: ["var(--font-display)", "Instrument Sans", "Inter", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        mono: "0.10em",
      },
      maxWidth: {
        site: "1440px",
      },
      borderRadius: {
        card: "12px",
        input: "8px",
      },
    },
  },
  plugins: [],
};
export default config;
