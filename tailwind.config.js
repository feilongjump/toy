module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      blur: {
        '4xl': '96px',
        '5xl': '136px'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
