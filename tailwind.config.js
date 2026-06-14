/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      'mlg': '1.2rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '7xl': '4.5rem',
      '8.5xl': '7rem'
    },
    extend: {
      colors: {
        accent: '#4070F4',
        'accent-hover': '#2050D2',
        // Page surfaces — only two per theme, alternated across sections
        base: '#ffffff',
        'base-dark': '#010718',
        panel: '#f3f4f6',
        'panel-dark': '#0b1426',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'menu-in': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease forwards',
        'menu-in': 'menu-in 0.18s ease-out',
      },
    },
  },
  plugins: [],
}