import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#c4915f',  // Sandy Gold (main brand color)
          dark: '#0f172a',   // Deep Navy/Slate
          gray: '#374151',   // Medium Gray
          accent: '#e8d4b8', // Light Beige (for highlights)
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

export default config;
