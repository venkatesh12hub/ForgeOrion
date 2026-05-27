/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#050706',
        ink: '#090d0b',
        volt: '#a8ff60',
        mint: '#4cff96',
        cyan: '#6fffe9',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(168, 255, 96, 0.24)',
        soft: '0 24px 80px rgba(0, 0, 0, 0.55)',
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at 20% 10%, rgba(168,255,96,.14), transparent 24rem), radial-gradient(circle at 80% 20%, rgba(76,255,150,.1), transparent 22rem), radial-gradient(circle at 50% 100%, rgba(111,255,233,.08), transparent 26rem)',
      },
    },
  },
  plugins: [],
};
