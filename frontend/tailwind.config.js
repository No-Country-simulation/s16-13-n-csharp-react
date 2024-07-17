/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundLight: '#F9FCFA',
        header: '#2B4D53',
        footerFlecha: '#62B0BD',
        footerText: '#151C1D',
        sombrasInicio: '#124F2F',
        petopiaH2: '#37636A',
        textLight: '#02120A',
        inputBg: '#FFFFFF',
        inputBorder: '#62B0BD',
        formStroke: '#62B0BD',
        formShadow: '#5CA5B1',
        buttonMainFill: '#4A848E',
      },
      borderRadius: {
        'xl': '1rem',
      },
    },
  },
  plugins: [],
}

