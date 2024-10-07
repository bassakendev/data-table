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
    },
  },
  plugins: [],
};

export default config;
