module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
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
  plugins: [require('@tailwindcss/typography')]
}
