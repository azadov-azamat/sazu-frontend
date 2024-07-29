/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#0B0B0B'
      },
      lineHeight: {
        '62': '62px',
      }
    },
  },
  plugins: [],
}