import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#06B6D4', // cyan-500
          light: '#22D3EE',   // cyan-400
          dark: '#0E7490',    // cyan-700
          hover: {
            light: '#0891B2', // cyan-600
            dark: '#155E75',  // cyan-800
          },
          subtle: {
            light: '#ECFEFF', // cyan-50
            dark: '#164E63',  // cyan-900
          },
          text: {
            light: '#0E7490', // cyan-700
            dark: '#22D3EE',  // cyan-400
          }
        },
        gray: {
          DEFAULT: '#6B7280', // gray-500
          light: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          },
          dark: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          }
        },
        success: {
          DEFAULT: '#22C55E', // green-500
          light: '#86EFAC',   // green-300
          dark: '#15803D',    // green-700
          subtle: {
            light: '#DCFCE7', // green-100
            dark: '#166534',  // green-800
          },
          text: {
            light: '#15803D', // green-700
            dark: '#86EFAC',  // green-300
          }
        },
        error: {
          DEFAULT: '#EF4444', // red-500
          light: '#FCA5A5',   // red-300
          dark: '#B91C1C',    // red-700
          subtle: {
            light: '#FEE2E2', // red-100
            dark: '#991B1B',  // red-800
          },
          text: {
            light: '#B91C1C', // red-700
            dark: '#FCA5A5',  // red-300
          }
        },
        warning: {
          DEFAULT: '#F59E0B', // yellow-500
          light: '#FDE68A',   // yellow-300
          dark: '#B45309',    // yellow-700
          subtle: {
            light: '#FEF3C7', // yellow-100
            dark: '#92400E',  // yellow-800
          },
          text: {
            light: '#B45309', // yellow-700
            dark: '#FDE68A',  // yellow-300
          }
        },
        info: {
          DEFAULT: '#3B82F6', // blue-500
          light: '#93C5FD',   // blue-300
          dark: '#1D4ED8',    // blue-700
          subtle: {
            light: '#DBEAFE', // blue-100
            dark: '#1E40AF',  // blue-800
          },
          text: {
            light: '#1D4ED8', // blue-700
            dark: '#93C5FD',  // blue-300
          }
        },
        dark: {
          base: '#121212',
          elevated: '#1A1A1A',
          high: '#222222',
          border: {
            subtle: '#2A2A2A',
            default: '#333333',
            medium: '#444444',
            strong: '#555555',
          },
        },
      },
      boxShadow: {
        mode: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

export default config
