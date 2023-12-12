/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        "primary-dark-theme": "#0F0F0F",
        "primary-dark-text": "#FFFFFF",
        "primary-light-theme": "#FFFFFF",
        "primary-light-text": "#030303",
        "text-gray": "#AAAAAA",
      },
    },
  },
  plugins: [],
}

