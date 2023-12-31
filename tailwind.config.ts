import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {"100": "#DDD", "200": "#F9FAFB", "300": "#D1D5DB"},
        gray: {
          "50": "#ffffff",
          "100": "#F5F5F5",
          "400": "#9CA3AF",
          "800": "#1F2937",
          "900": "#111827",
          "950": "#0C0C45",
        },
        neutral: {"500": "#68958D", "600": "#6B7280", "700": "#4B5563"},
        red: {"500": "#FE5424"},
        cyan: {"900": "#15357A", "950": "#0D3251", "800": "#0A2742"},
        indigo: {"200": "#E0E7FF", "600": "#4F46E5"},
      },
    },
    fontSize: {
      xs: ["12px", {}],
      sm: ["14px", {lineHeight: "1.43em", letterSpacing: "0.025em"}],
      md: ["16px", {lineHeight: "1.5em"}],
      base: ["18px", {lineHeight: "1.56em", letterSpacing: "0.05em"}],
      lg: ["20px", {lineHeight: "1.4em"}],
      xl: ["24px", {lineHeight: "1.33em"}],
      "2xl": ["28px", {lineHeight: "0.86em"}],
      "3xl": ["33px", {lineHeight: "1em"}],
      "4xl": ["36px", {lineHeight: "1.11em"}],
      "5xl": ["40px", {lineHeight: "1em"}],
      "6xl": ["48px", {lineHeight: "1.4em"}],
      "7xl": ["60px", {lineHeight: "1em"}],
      "8xl": ["88px", {lineHeight: "1.03em"}],
      "9xl": ["75px", {lineHeight: "1.03em"}],
      "30": ["30px", {lineHeight: "36px", letterSpacing: "-0.75px"}],
    },
    shadows: {
      sm: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      md: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      lg: "0px 1px 2px rgba(0, 0, 0, 0.06)",
      xl: "0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
      "2xl":
        "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
    },
    fontFamily: {
      "ibm-plex-sans": ["'IBM Plex Sans'", ...fontFamily.sans],
      "ibm-plex-mono": ["'IBM Plex Mono'", ...fontFamily.sans],
      inter: ["'Inter'", ...fontFamily.sans],
    },
    backgroundImage: {
      100: "linear-gradient(270deg, #0C0C45 0.22%, #FE5424 50.74%)",
      200: "radial-gradient(90.94% 190% at 0% 60%, #FE5424 0%, #0C0C45 100%)",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1020px",
      xl: "1248px",
    },
  },
  plugins: [],
};
export default config;
