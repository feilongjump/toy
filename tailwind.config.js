module.exports = {
  purge: ['./src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'box-violet': '#4c065c',
      },
      inset: {
        '-30': '-7.5rem',
        39: '9.75rem',
      },
      rotate: {
        55: '55deg',
      },
      skew: {
        '-25': '-25deg',
      },
      spacing: {
        26: '6.5rem',
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
