import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#4C0F0E",
          dark: "#310808",
        },
        gold: {
          DEFAULT: "#E39B13",
          bright: "#FFB515",
        },
        cream: "#F4F0EA",
        warmwhite: "#FAF9F7",
        charcoal: "#18181B",
        mediumgray: "#5E5E63",
      },
      fontFamily: {
        heading: ["var(--font-oswald)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        script: ["var(--font-dancing)", "cursive"],
      },
      borderColor: {
        brand: "rgba(76, 15, 14, 0.15)",
      },
      boxShadow: {
        card: "0 2px 12px rgba(76, 15, 14, 0.08)",
        "card-hover": "0 8px 28px rgba(76, 15, 14, 0.14)",
        header: "0 2px 12px rgba(24, 24, 27, 0.08)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
