/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#050816",
        primary: "#000000",
        secondary: "#808080",
        tertiary: "#151030",
        orange: "#f94c10",
        yellow: "#f8de22",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg.jpg')",
      },
      fontFamily: {
        dragon_outline: ["DRAGON_OUTLINE", "cursive"],
        dragon_bold: ["DRAGON_BOLD", "cursive"],
        dragon_deco: ["DRAGON_DECO", "cursive"],
        garamond: ["GARAMOND", "cursive"]
      }
    },
  },
  plugins: [],
};