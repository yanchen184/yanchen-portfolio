/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6182FF',
        'bg-dark': '#12121F',
        'bg-card': '#1E1E2E',
        'bg-section': '#F8F8FA',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A6A6B8',
      },
      borderRadius: {
        card: '12px',
      },
      fontFamily: {
        sans: [
          '"Noto Sans TC"',
          '"Microsoft JhengHei"',
          '"PingFang TC"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
