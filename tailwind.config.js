/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'slices/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito Variable', 'sans-serif'],
        body: ['Nunito Sans Variable', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

