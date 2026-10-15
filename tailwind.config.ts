import type { Config } from "tailwindcss";

// Tailwind is only used for its CSS reset (preflight); all styling lives in
// app/globals.css (tokens + type scale) and per-component CSS modules.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
export default config;
