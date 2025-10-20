// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Inter', 'Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          600: '#155EEF',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#EEF2F6',
          200: '#E3E8EF',
          600: '#4B5565',
          700: '#364152',
          900: '#121926',
          color: '#363F72',
        },
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      spacing: {
        5: '1.25rem', // 20px
        6: '1.5rem', // 24px
        7: '1.75rem', // 28px
        8: '2rem', // 32px
        9: '2.25rem', // 36px
        10: '2.5rem', // 40px
        12: '3rem', // 48px
        14: '3.5rem', // 56px
        16: '4rem', // 64px
        20: '5rem', // 80px
        24: '6rem', // 96px
        32: '8rem', // 128px
      },
    },
  },
  plugins: [],
};
