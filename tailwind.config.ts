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
        ink: "#0C0A09",
        inkAlt: "#110E0C",
        cream: "#F5F1EA",
        flagYellow: "#FFE800",
        flagBlue: "#2A4FFF",
        flagRed: "#FF2233",
        bandRed: "#E31212",
        heroBlue: "#105AA7",
        heroRed: "#B90808",
        rule: "rgba(244,242,238,0.12)",
        ruleStrong: "rgba(244,242,238,0.16)",
      },
      fontFamily: {
        display: ["var(--font-antonio)", "Antonio", "sans-serif"],
        body: ["var(--font-dmsans)", "DM Sans", "sans-serif"],
      },
      maxWidth: { shell: "1360px" },
    },
  },
  plugins: [],
};

export default config;
