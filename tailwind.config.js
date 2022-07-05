/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      colors: {
        "pastel-dgreen": "#388087",
        "pastel-black": "#3a3d36",
        "pastel-green": "#C2EDCE",
        "pastel-blue": "#BADFE7",
        "pastel-dblue": "#6fb3b8",
        "pastel-purple": "#6184D8",
        "pastel-white": "#F6F6F2",
        "pastel-lwhite": "#DEDECF",
      },
    },
  },
  plugins: [],
};
