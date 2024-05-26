/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        30: '190px repeat(30, minmax(100px, 1fr))',
        31: '190px repeat(31, minmax(100px, 1fr))',
        28: '190px repeat(28, minmax(100px, 1fr))',
        29: '190px repeat(29, minmax(100px, 1fr))',
      },
    },
  },
  plugins: [],
}