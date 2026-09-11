/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        syne: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        theme: {
          bg: 'var(--bg)',
          card: 'var(--bg-card)',
          'card-hover': 'var(--bg-card-hover)',
          border: 'var(--border)',
          accent: 'var(--accent)',
          'accent-dim': 'var(--accent-dim)',
          text: 'var(--text)',
          'text-muted': 'var(--text-muted)',
          'text-dim': 'var(--text-dim)',
        },
      },
    },
  },
  plugins: [],
}
