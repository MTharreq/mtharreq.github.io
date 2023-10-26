/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'ibm': ['IBM Plex Mono', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'lexend': ['Lexend Mega', 'sans-serif'],
        'archivo': ['Archivo', 'sans-serif']
      },     
      colors: {
        'req-black': '#1D1D1D',
        'req-white': '#FFFFFF',
        'req-blue-50': '#5B6DFF',
        'req-pink-50': '#FE74A6',
        'req-purple-50': '#928CF8',
        'req-yellow-50': '#FCC526',
        'req-green-50': '#3DC39B'
      }
    },
  },
  plugins: [],
}