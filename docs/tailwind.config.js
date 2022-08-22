const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: true,
    content: [
      './**/*.html',],
  },
  theme: {
    extend: {
      maxWidth: {
      '6': '6rem',
      },
      colors: {
        primary: {
          DEFAULT: '#00214B',
          dark: '#00214B',
        },
        secondary: {
          DEFAULT: "#FFCC00",
        }
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
