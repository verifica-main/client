/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    'node_modules/preline/dist/*.js',
],
darkMode: ['class', '[data-mode="dark"]'],

theme: {

  container: {
      center: true,
  },

  fontFamily: {
      base: ['"Jost"', 'sans-serif'],
  },

  extend: {
      colors: {
          'primary': colors.blue[500],
          'secondary': '#747a80',
          'success': '#20b799',
          'info': '#3cbade',
          'warning': '#efb540',
          'danger': '#fa5944',
          'light': '#e9edf3',
          'dark': '#222a3e',
      },

      transitionProperty: {
          'height': 'height',
          'o-m': 'opacity,margin',
      },

      minWidth: theme => ({
          ...theme('width'),
      }),

      maxWidth: theme => ({
          ...theme('width'),
      }),

      minHeight: theme => ({
          ...theme('height'),
      }),

      maxHeight: theme => ({
          ...theme('height'),
      }),
  },
},

plugins: [
  require('preline/plugin'),
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
  require('@tailwindcss/aspect-ratio'),
],
}

