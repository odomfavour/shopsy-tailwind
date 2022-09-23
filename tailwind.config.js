/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'news-pattern': "url('./images/bg-image-5.jpg')",
      }
    },
  },
  plugins: [],
}