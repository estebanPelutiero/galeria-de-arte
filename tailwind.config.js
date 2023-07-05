/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {},

    colors: {
      'background': '#F6EEE8',
      'orange': '#EF5C2C',
      'brick': '#DE7546',
      'black': '#1F1D20',
      'gray': '#A0A0A0',
      'white': '#FFFFFF'
    },

    fontFamily: {
      'redHat': ["'Red Hat Display'", 'sans-serif']
    }
  },
  plugins: [],
}

