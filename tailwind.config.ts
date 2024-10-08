import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#fccb00',
        secondary: '#2e2d2c',
        tertiary: '#f2f2f2',
        customgray: '#797979'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Poppins', 'serif'],
        roma: ['Montserrat', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
