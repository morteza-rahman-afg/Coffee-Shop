/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Brown: {
          100: '#ECE0D1',
          300: '#DBC1AC',
          600: '#967259',
          900: '#634832',
        },
      },
      boxShadow: {
        'shadow-normal': '0 1px 10px rgba(0,0,0,0.5)',
      },
      borderDadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        Dana: 'Dana',
        DanaMedium: 'Dana Medium',
        DanaDemiBold: 'Dana Bold',
        MorabbaLight: 'Morabba Light',
        MorabbaMedium: 'Morabba Medium',
        MorabbaBold: 'Morabba Bold',
      },
    },
  },
  plugins: [],
};
