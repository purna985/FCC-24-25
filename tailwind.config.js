/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-blue' :'#1270ed',
        'custom-white':'#f2f2f2',
      },
      backgroundColor:{
        'custom-bg' : 'rgba(0, 0, 0, 1)',
        'custom-butt-bg':'#0d6efd',
        'custom-butt-bg-hover':'#0b5ed7',
      },
      backgroundImage:{
        'custom-grad-1':'linear-gradient(to bottom,rgba(15, 70, 147, 0.9),rgba(15, 72, 147, 0.6))',
        'horizonText':'linear-gradient(124deg, #1680e8 2%, #2bc9d3 133.32%)',
      },
      fontFamily: {
        ikaros: ['"Ikaros Sans"', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins' , "sans-serif"],
        rosario: ['Rosario', 'sans-serif'],
      },
      fontWeight: {
        light: 200,
        normal: 400,
      },
      fontSize:{
        'vw-2.3': '2.3vw',
        'vw-2.75':'2.75vw',
        'vw-5'  : '5vw',
        'vw-7'  : '7vw',
        'vw-10' : '10vw',
        'vw-14' : '12vw',
      },
      spacing:{
        '1p' : '1%',
        '2p' : '2%',
        '3p' : '3%',
        '10p': '10%',
        '23p': '23%',
        '45p': '45%',
        '50p': '50%',
        '70p': '70%',
        '90p': '90%',
      },
      lineHeight: {
        normal: 'normal',
        '100p': '100%',
      },
      animation:{
        'scroll-1' : 'scrollH 30s linear infinite',
      },
      keyframes:{
        scrollH:{
          '0%' : {transform: 'translateX(-300%)'},
          '100%' : {transform: 'translateX(100%)'}
        }
      },
      screens:{
        'sm' : { 'max': '420px' },
        'md-1' : {'max': '800px'},
        'md-2' : {'min': '800px'},
      },
    },
  },
  plugins: [],
}

