/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '1280-1380': {'min': '1280px', 'max': '1380px'},
        '1535-1650': {'min': '1535px', 'max': '1650px'},
        '1024-1100': {'min': '1024px', 'max': '1100px'},
      },
      boxShadow: {
        'purple-blur': '0 12px 20px rgba(91, 33, 182, 0.5)',
      },
      backgroundPosition: {
        'right-top-20px': 'right 20px top',
      },
      backgroundImage: theme => ({
        'first-pattern': "url('/src/assets/background/img1.png')",
        'second-pattern': "url('/src/assets/background/img_1.png')",
        'thirty-pattern': "url('/src/assets/background/img_2.png')",
        'fourth-pattern': "url('/src/assets/background/img_3.png')",
        'fifth-pattern': "url('/src/assets/background/img_4.png')",
      }),
      perspective: {
        '1000': '1000px',
      },
      backfaceVisibility: ['hover', 'focus'],
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        'primary-black': '#0B0B0B',
        'primary-gray': '#828282',
        'primary-purple': '#54257C'
      },
      lineHeight: {
        '62': '62px',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 55s linear infinite',
      },
    },
    filter: {
      'blur': 'blur(4px)',
    }
  },
  plugins: [],
}