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
        'custom-blue' :'rgba(18, 112, 237, 1)',
        'custom-gradient-1' : 'rgba(18, 109, 237, 0.9)',
        'custom-gradient-2' : 'rgba(18, 112, 237, 0.6)',
      },
      backgroundColor:{
        'custom-bg' : 'rgba(30, 30, 30, 1)',
        'custom-butt-bg':'#0d6efd',
        'custom-butt-bg-hover':'#0b5ed7',
        'custom-blur-bg':'rgba(126, 71, 241, 0.4)',
        'custom-blue' :'rgba(18, 112, 237, 1)',
        'custom-bg2' : '#0C4393',
      },
      backgroundImage:{
        'custom-grad-1':'linear-gradient(to bottom,rgba(15, 70, 147, 0.9),rgba(15, 72, 147, 0.6))',
      },
      blur:{
        'blur-250' : '250px',
      },
      fontFamily:{
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        rosario: ['Rosario', 'sans-serif'],
        poppins: ['Poppins' , "sans-serif"],
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
        '20p': '20%',
        '23p': '23%',
        '45p': '45%',
        '50p': '50%',
        '70p': '70%',
        '90p': '90%',
        'vw-15' : '15vw',
        'vw-20' : '20vw',
        'vw-30' : '30vw',
        'vw-60' : '60vw',
        'vh-50' : '50vh',
        'vh-60' : '60vh',
      },
      rotate:{
        '20-deg' : '20deg',
        '60-deg' : '60deg',
      },
      zIndex:{
        'one' : '1',
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
        'sm'   : {'max': '420px'},
        'md-3' : {'max': '1000px'},
        'md-1' : {'max': '800px'},
        'md-2' : {'min': '800px'},
        'md-4' : {'max': '600px'},
        'md-5' : {'min': '601px'},
      },
    },
  },
  plugins: [],
}
