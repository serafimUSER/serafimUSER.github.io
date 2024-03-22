/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    screens: {
      'lg': {'max': '1400px'},
      'md': {'max': '1440px'},
      'md-sm': {'max': '535px'},
      'sm': {'max': '480px'}
    },
    container: {
      center: true
    },
    fontFamily: {
      cruinnFont: ['Cruinn', "sans-serif"],
    },
    extend: {
      colors: {
        lightblack: '#4D4244',
        darkred: '#3F1D1D',
        darkgray: '#1E1E1E',
        lightgray: '#2E0000',
        mediumred: '#6D0004',
        lightred: '#C51218',
        bgbeige: '#EDE4DD',
        beige: '#FFF4F4'
      },
      boxShadow: {
        'customred': '0px 0px 30px rgba(255, 13, 56, 0.21)'
      }
    },
  },
  plugins: [],
}

