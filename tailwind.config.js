module.exports = {
  purge: ['./src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        shaking: 'shaking 1s ease-in-out infinite',
      },
      backgroundImage: {
        'main-pattern': "url('~@/assets/background_image.jpg')",
      },
      keyframes: {
        shaking: {
          '0%, 100%': {
            transform: 'rotate(-30deg)',
          },
          '50%': {
            transform: 'rotate(30deg)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  plugins: [],
}
