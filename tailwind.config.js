/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px'
    },
    extend: {
      colors:{
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
      },
      fontFamily: {
        opensans: ["Titillium Web", "sans-serif"],
      },
      fontWeight: {
        light: 200,
        normal: 400,
        semiBold: 600,
        bold: 700,
      },
    },
  },
  variants:{
    extend: {
      backgroundImage: ['dark']
    }
  },
  plugins: [],
};
