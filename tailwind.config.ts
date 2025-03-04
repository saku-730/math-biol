import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,md}", // src 配下を全部対象に
    "./pages/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./content/***/**/*.{js,ts,jsx,tsx,mdx,md}",
  ],
  theme: {},
  plugins: [require("@tailwindcss/typography")], // ここにあるか確認
};

export default config;
