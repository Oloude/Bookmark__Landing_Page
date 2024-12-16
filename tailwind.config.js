/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Rubik": ['"Rubik"', ...defaultTheme.fontFamily.sans],
      },
      colors : {
        "softBlue" : "#5368df",
        "softRed" : "#fa5757",
        "blue" : "#9194a1",
        "darkBlue" : "#252b46",
      }
    },
  },
  plugins: [],
}