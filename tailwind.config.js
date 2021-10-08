const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

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
    require("@tailwindcss/typography"),
  ],
};
