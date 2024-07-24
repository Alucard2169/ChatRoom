/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "MAIN_BG": "#131313",
        "PRIMARY_BG":"#ffffff"
      }
    },
  },
  plugins: [],
}