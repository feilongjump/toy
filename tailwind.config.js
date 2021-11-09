module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      blur: {
        '4xl': '96px',
        '5xl': '136px'
      }
    }
  },
  variants: {
    extend: {
      margin: ['last']
    }
  },
  plugins: []
}
