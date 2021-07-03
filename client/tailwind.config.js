module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize:{
        'f13': '0.813rem', 
        'f12': '0.75rem', 
        'f11': '0.688rem', 
      },
      colors: {
          main: {
              primary: '#1587DA',
              primaryLight: '#AFDCFC',
          },
          txt: {
              high: '#323338',
              medium: '#53575E',
              low: '#8A8F98'
          },
          bdr: {
              low: '#E8E8E9'
          },
          grey: {
            medium: '#F8F8F9',
            low: '#FCFCFD'
          },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
