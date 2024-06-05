/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ikaros': ['"Ikaros Sans"', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        light: 200,
        normal: 400,
      },
      lineHeight: {
        normal: 'normal', // Add this line to include normal line height
      },
    },
  },
  plugins: [],
}

