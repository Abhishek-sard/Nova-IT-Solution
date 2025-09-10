/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nova: '#2c6e32',
        novaDark: '#205427',
        novaLight: '#3a8a40',
      },
    },
  },
  plugins: [],
}
