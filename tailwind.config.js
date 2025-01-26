/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BebasNeue: ["Bebas Neue", "serif"],
        AlexBrush: ['Alex Brush', 'serif'],
      },
    },
  },
  plugins: [],
}