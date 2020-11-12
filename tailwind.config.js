module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: () => ({
        'main-pattern': "url('~@/assets/background_image.jpg')",
      }),
    },
  },
  variants: {},
  plugins: [],
}
