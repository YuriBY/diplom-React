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
        'bebas' : ['Bebas', 'Redular'],
        'dinpro' : ['DIN Pro Regular', 'Regular'],
      }
    },
  },
  plugins: [],
}