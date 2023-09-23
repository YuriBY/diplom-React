/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'helios' : ['Helois', 'Regular'],
        'bebas' : ['Bebas', 'sans-serif'],
        'dinpro' : ['"DIN pro"', 'sans-serif']
      }
    },
  },
  plugins: [],
}