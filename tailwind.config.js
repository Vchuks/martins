/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "cone":"#0077FE",
        "ctwo":"#001F42",
        "cthree":"#01E7FF"
      },
      fontFamily:{
        'inter':['Inter','sans-serif'],
        'epilogue':['Epilogue','sans-serif'],
        'satob':['satob'],
        'satom':['satom'],
        'sator':['sator'],
      }
    },
  },
  plugins: [],
}

