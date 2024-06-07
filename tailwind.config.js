/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      }
    },
    fontFamily: {
      'primary':['HelveticNeue'],
   } 
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
}

