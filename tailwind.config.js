const tokens = require("./style-dictionary/build/js/tokens");
const colorTokens = Object.values(tokens.color);
const colors = new Object();
colorTokens.forEach((el) => {
  colors[[el.attributes.type]] = el.value;
});

console.log(colors);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Toggle dark-mode based on class or data-mode=”dark”
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
};
