/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Quicksand': ['Quicksand', 'sans-serif'],
      },

      colors: {
        background: "rgb(var(--color-bg) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",

        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          light: {
            DEFAULT: "rgb(var(--color-primary-light) / <alpha-value>)",
            hover: "rgb(var(--color-primary-light-hover) / <alpha-value>)",
            active: "rgb(var(--color-primary-light-active) / <alpha-value>)",
          },
          normal: {
            DEFAULT: "rgb(var(--color-primary-normal) / <alpha-value>)",
            hover: "rgb(var(--color-primary-normal-hover) / <alpha-value>)",
            active: "rgb(var(--color-primary-normal-active) / <alpha-value>)",
          },
          dark: {
            DEFAULT: "rgb(var(--color-primary-dark) / <alpha-value>)",
            hover: "rgb(var(--color-primary-dark-hover) / <alpha-value>)",
            active: "rgb(var(--color-primary-dark-active) / <alpha-value>)",
          },
          darker: "rgb(var(--color-primary-darker) / <alpha-value>)",
        },

        secondary: {
          DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
          light: {
            DEFAULT: "rgb(var(--color-secondary-light) / <alpha-value>)",
            hover: "rgb(var(--color-secondary-light-hover) / <alpha-value>)",
            active: "rgb(var(--color-secondary-light-active) / <alpha-value>)",
          },
          normal: {
            DEFAULT: "rgb(var(--color-secondary-normal) / <alpha-value>)",
            hover: "rgb(var(--color-secondary-normal-hover) / <alpha-value>)",
            active: "rgb(var(--color-secondary-normal-active) / <alpha-value>)",
          },
          dark: {
            DEFAULT: "rgb(var(--color-secondary-dark) / <alpha-value>)",
            hover: "rgb(var(--color-secondary-dark-hover) / <alpha-value>)",
            active: "rgb(var(--color-secondary-dark-active) / <alpha-value>)",
          },
          darker: "rgb(var(--color-secondary-darker) / <alpha-value>)",
        },

        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          light: {
            DEFAULT: "rgb(var(--color-accent-light) / <alpha-value>)",
            hover: "rgb(var(--color-accent-light-hover) / <alpha-value>)",
            active: "rgb(var(--color-accent-light-active) / <alpha-value>)",
          },
          normal: {
            DEFAULT: "rgb(var(--color-accent-normal) / <alpha-value>)",
            hover: "rgb(var(--color-accent-normal-hover) / <alpha-value>)",
            active: "rgb(var(--color-accent-normal-active) / <alpha-value>)",
          },
          dark: {
            DEFAULT: "rgb(var(--color-accent-dark) / <alpha-value>)",
            hover: "rgb(var(--color-accent-dark-hover) / <alpha-value>)",
            active: "rgb(var(--color-accent-dark-active) / <alpha-value>)",
          },
          darker: "rgb(var(--color-accent-darker) / <alpha-value>)",
        },
      },

      boxShadow: {
        modal: '0 0 10px 10px rgb(0 0 0 / 0.1)'
      },
    },
  },
  plugins: [],
};
