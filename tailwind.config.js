/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        strelka: ['Strelka', 'sans-serif'],
        heebo: ['Heebo', 'sans-serif'],
        benzin: ['Benzin-Bold', 'sans-serif'],
      },
      colors: {
        silver: '#C0C0C0',
      },
    },
  },
  plugins: [],
};