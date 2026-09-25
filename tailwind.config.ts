import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "accent-red": "var(--accent-red)",
        "bright-red": "var(--bright-red)",
        text: "var(--text)",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)", "sans-serif"],
        syne: ["var(--font-syne)", "sans-serif"],
        space: ["var(--font-space)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "laser-scan": "laserScan 2.5s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        laserScan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        }
      },
      boxShadow: {
        "red-glow": "0 0 35px -5px rgba(196, 0, 36, 0.4)",
        "red-beam": "0 0 15px 2px rgba(224, 0, 42, 0.6)",
      }
    },
  },
  plugins: [],
};
export default config;
