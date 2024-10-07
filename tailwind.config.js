/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Inter','Roboto', 'sans-serif']
      },
      container: {
        center: true,
      },
      gridTemplateColumns:{
        '70/30': '70% 28%'
      },
      colors:{
       'bgOpacity': 1,
        'bgDark': 'rgb(46, 44, 44)',
        
      }
    },
  },
  plugins: [],
}