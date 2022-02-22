module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        mainBg: '#040506',
        searchBg: '#100f14',
        textColor: '#b1b1b1',
        collectionBg: 'rgba(0,0,0,.4)',
        logoColor: '#ECCA00',
      },

      screens: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },

      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
};
