import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-foreground)",
        secondary: "var(--secondary-foreground)",
        accent: "var(--accent)",
        muted: "var(--muted)",
      },
      backgroundColor: {
        primary: "var(--primary-background)",
        secondary: "var(--secondary-background)",
        accent: "var(--accent)",
        muted: "var(--muted)",
      },
      borderColor: {
        primary: "var(--primary-background)",
        secondary: "var(--secondary-background)",
        accent: "var(--accent)",
        muted: "var(--muted)",
      },
    },
  },
  plugins: [],
};
export default config;
