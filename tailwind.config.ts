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
        slate: {"300": "#D1D5DB"},
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
        indigo: {"600": "#4F46E5"},
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
    },
    shadows: {
      sm: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      md: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      lg: "0px 1px 2px rgba(0, 0, 0, 0.06)",
      xl: "0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
    fontFamily: {
      inter: ["'Inter'", ...fontFamily.sans],
      "ibm-plex-sans": ["'IBM Plex Sans'", ...fontFamily.sans],
      "ibm-plex-mono": ["'IBM Plex Mono'", ...fontFamily.sans],
    },
    backgroundImage: {
      100: "radial-gradient(422.58% 100% at 0% 50.12%, #FE5424 0%, #0C0C45 100%)",
      200: "radial-gradient(90.94% 150% at 0% 60%, #FE5424 0%, #0C0C45 100%)",
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
      lg: "1271px",
      xl: "1512px",
    },
  },
  plugins: [],
};
export default config;
