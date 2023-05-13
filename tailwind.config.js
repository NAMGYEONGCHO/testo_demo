module.exports = {
    mode: 'jit',
    purge: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'weather-blue': '#1E213A',
          'weather-light-blue': '#3C47E9',
          'weather-card': '#1E213A',
          'weather-gray': '#6E707A',
          'weather-light-gray': '#A09FB1',
          'weather-lightest-gray': '#E7E7EB',
          'weather-white': '#100E1D',
        },
        backgroundImage: theme => ({
          'weather-cloudy': "url('/src/assets/cloudy.svg')",
          'weather-sunny': "url('/src/assets/sunny.svg')",
        }),
        spacing: {
          '72': '18rem',
          '84': '21rem',
          '96': '24rem',
        },
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
