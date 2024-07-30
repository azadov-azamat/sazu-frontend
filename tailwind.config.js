/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
        'primary-gray': '#828282'
      },
      lineHeight: {
        '62': '62px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'marquee-reverse': 'marquee-reverse 20s linear infinite',
      },
    },
    filter: {
      'blur': 'blur(4px)',
    }
  },
  plugins: [],
}