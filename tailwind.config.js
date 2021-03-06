const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  experimental: {
    applyComplexClasses: true,
    uniformColorPalette: true,
    extendedSpacingScale: true,
    extendedFontSizeScale: true,
    darkModeVariant: true,
  },
  purge: {
    enabled: false,
    // purgeCSS is is enabled in postCSS instead
    // purged files are configured in postcss.config.js
  },
  theme: {
    fontFamily: {
      mono: ["VT323", "mono"],
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require("postcss-100vh-fix"),
    require("postcss-viewport-height-correction"),
    require("@tailwindcss/ui"),
    require("@tailwindcss/typography"),
  ],
};
