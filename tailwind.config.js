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
        'bg-light': '#F7F7FA',
        'bg-footer': '#0A0A14',
        'bg-form': '#1F1F2E',
        'bg-input': '#2E2E40',
        'bg-avatar': '#262640',
        'bg-project-img': '#E0E3EB',
        'text-primary': '#FFFFFF',
        'text-heading': '#1A1A26',
        'text-nav': '#D9D9D9',
        'text-sub': '#9999B2',
        'text-secondary': '#A6A6B8',
        'text-body': '#595966',
        'text-muted': '#80808C',
        'text-avatar': '#666680',
      },
      borderRadius: {
        card: '12px',
      },
      fontFamily: {
        sans: [
          'Inter',
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
