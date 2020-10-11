module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: {
    applyComplexClasses: true,
    uniformColorPalette: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true,
    darkModeVariant: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      mono: ["VT323", "mono"],
    },
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
