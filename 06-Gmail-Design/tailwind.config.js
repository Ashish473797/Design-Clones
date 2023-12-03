/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        "primary": "#F6F8FC",
        "secondary": "#EAEBEF",
        "input": "#EAF1FB",
        "compose": "#C2E7FF",
        "inbox": "#D3E3FD",
        "gray": "#5F6368",
        "secondary-gray": "#5F6368",
        "light-gray": "#676A69",
        "primary-blue": "#4C82D8",
      }, 
    },
  },
  plugins: [],
}

