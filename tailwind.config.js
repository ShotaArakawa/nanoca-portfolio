/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#06060a',
          900: '#0a0a0f',
          800: '#101017',
          700: '#16161f',
          600: '#1f1f2a',
        },
        accent: {
          DEFAULT: '#e6f1ff',
          soft: '#a8b3c7',
          cyan: '#7dd3fc',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans JP"', 'system-ui', 'sans-serif'],
        display: ['"Zen Kaku Gothic New"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widestest: '0.4em',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '45%': { opacity: '0.85' },
          '50%': { opacity: '0.4' },
          '55%': { opacity: '0.9' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        flicker: 'flicker 5s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
