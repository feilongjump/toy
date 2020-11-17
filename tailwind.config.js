module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
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
  variants: { animation: ['responsive', 'motion-safe', 'motion-reduce'] },
  plugins: [],
}
