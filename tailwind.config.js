/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.8rem',
      base: '1rem',
      'mlg': '1.2rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8.5xl': '7rem'
    },
    extend: {
      fontFamily: {
        // Display face for headings; falls back through the nicest faces
        // commonly present on macOS / Windows / Linux before generic serif.
        serif: ['"Playfair Display"', 'Georgia', '"Iowan Old Style"', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        accent: '#4f7dff',
        'accent-hover': '#2f5ce0',
        'accent-2': '#a855f7',   // violet, second stop of the brand gradient
        'accent-3': '#22d3ee',   // cyan, third stop
        // Page surfaces — only two per theme, alternated across sections
        base: '#ffffff',
        'base-dark': '#050912',
        panel: '#f6f7fb',
        'panel-dark': '#0a1020',
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(79 125 255 / 0.25), 0 8px 40px -8px rgb(79 125 255 / 0.45)',
        'glow-lg': '0 0 0 1px rgb(79 125 255 / 0.3), 0 24px 70px -18px rgb(79 125 255 / 0.55)',
        card: '0 1px 2px rgb(0 0 0 / 0.06), 0 12px 32px -12px rgb(0 0 0 / 0.25)',
        'card-hover': '0 1px 2px rgb(0 0 0 / 0.08), 0 28px 60px -18px rgb(0 0 0 / 0.45)',
      },
      transitionTimingFunction: {
        // A springy ease used for anything that "pops" (buttons, cards, chips).
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
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
        'rise-in': {
          '0%': { opacity: '0', transform: 'translateY(24px)', filter: 'blur(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        // Slow drift for the ambient gradient orbs behind sections.
        float: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(3%, -5%, 0) scale(1.06)' },
          '66%': { transform: 'translate3d(-4%, 3%, 0) scale(0.96)' },
        },
        // Pans a 200%-wide gradient so text/borders shimmer.
        'gradient-pan': {
          '0%,100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        // Diagonal light sweep across buttons and cards on hover.
        shine: {
          '0%': { transform: 'translateX(-120%) skewX(-18deg)' },
          '100%': { transform: 'translateX(220%) skewX(-18deg)' },
        },
        'bounce-slow': {
          '0%,100%': { transform: 'translateY(0)', opacity: '0.55' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.85) translateY(10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'caret-blink': {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease forwards',
        'menu-in': 'menu-in 0.22s cubic-bezier(0.22, 1, 0.36, 1)',
        'rise-in': 'rise-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        float: 'float 18s ease-in-out infinite',
        'float-slow': 'float 26s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 6s ease infinite',
        shine: 'shine 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
        marquee: 'marquee 40s linear infinite',
        'pop-in': 'pop-in 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
    },
  },
  plugins: [],
}
