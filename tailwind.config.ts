import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night:   "#080808",
        surface: "#101010",
        stone:   "#191919",
        cream:   "#EDEAE4",
        orange:  "#ec7c0d",
        yellow:  "#f1aa08",
        muted:   "#666666",
      },
      fontFamily: {
        sans:      ["var(--font-space)",     "Space Grotesk",  "sans-serif"],
        mono:      ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
        condensed: ["var(--font-bebas)",     "Bebas Neue",     "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
