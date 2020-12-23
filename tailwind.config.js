module.exports = {
  purge: ['./src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      skew: {
        '-35': '-35deg',
      },
      rotate: {
        55: '55deg',
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'lower-left': '#fdd3bb',
        'precise-middle': '#f1deda',
        'top-right': '#e3c9e2',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
