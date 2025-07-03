/** @type {import('tailwindcss').Config} */

const svgToDataUri = require("mini-svg-data-uri");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  darkMode: "class",
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#FF8000",
          400: "#ff972e",
          300: "#ffae5d",
          200: "#ffc58b",
          100: "#ffdcb9",
          50: "#fff3e8",
        },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        krona: ["Krona One", "sans-serif"],
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "image-glow": "image-glow 4.1s ease-out 0.6s forwards",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "image-glow": {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`)}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
  ],
};