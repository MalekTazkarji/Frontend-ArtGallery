const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      xs: "380px",
      ss: "450px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
