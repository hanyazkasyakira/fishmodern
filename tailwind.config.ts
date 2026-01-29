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
          green: '#c8dfe6',  // Soft Mist Blue (primary accent)
          dark: '#2f3b43',   // Deep Slate (primary text)
          gray: '#7c8a93',   // Cool Gray (secondary text)
          accent: '#f7f7f2', // Warm Off-White (background/highlight)
        }
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        display: ['Satoshi', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

export default config;
