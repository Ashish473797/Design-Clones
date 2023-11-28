/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        "primary": "#541554",
        "secondary": "#611F69",
        "secondary-dark": "#4A154B",
        "light-gray": "#F4EDE4",
        "dark-yellow": "#ECB22E",
        "regular-blue": "#1264A3",
        "black": "#000000",
        "white": "#FFFFFF",
        "gray": "#555555",
        "blue": "#4285f4",
      },
    },
  },
  plugins: [],
}

