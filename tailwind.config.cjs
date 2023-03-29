/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        din: ["DIN_Regular", "sans-serif"],
        dinBold: ["DIN_Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
