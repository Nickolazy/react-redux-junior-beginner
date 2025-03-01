/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: '#141414',
        darker: '#0B0B0B',

        light: '#F4F1EB',
        ligther: '#E5E3E3',

        yellow: '#CCAF7E'
      }
    },
  },
  plugins: [],
}
