import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "logo-blue": "#036EB7",
        "main-color": "#3055A1",
      },
      fontFamily: {
        Rounded: [
          "Helvetica Neue",
          "Arial",
          "Hiragino Sans",
          "Meiryo",
          "sans-serif",
        ],
      },
      animation: {
        "tracking-in-expand":
          "tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",
        "jello-vertical": "jello-vertical 0.8s ease   both",
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
      },
      keyframes: {
        "tracking-in-expand": {
          "0%": {
            "letter-spacing": "-.5em",
            opacity: "0",
          },
          "40%": {
            opacity: ".6",
          },
          to: {
            opacity: "1",
          },
        },
        "jello-vertical": {
          "0%,to": {
            transform: "scale3d(1, 1, 1)",
          },
          "30%": {
            transform: "scale3d(.75, 1.25, 1)",
          },
          "40%": {
            transform: "scale3d(1.25, .75, 1)",
          },
          "50%": {
            transform: "scale3d(.85, 1.15, 1)",
          },
          "65%": {
            transform: "scale3d(1.05, .95, 1)",
          },
          "75%": {
            transform: "scale3d(.95, 1.05, 1)",
          },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};
export default config;
