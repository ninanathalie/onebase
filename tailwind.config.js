/** @type {import('tailwindcss').Config} */

const svgToDataUri = require("mini-svg-data-uri");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

export default {
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