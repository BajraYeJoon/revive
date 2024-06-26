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
        black: {
          DEFAULT: "#000000",
          100: "#000000",
          200: "#000000",
          300: "#000000",
          400: "#000000",
          500: "#000000",
          600: "#333333",
          700: "#666666",
          800: "#999999",
          900: "#cccccc",
        },
        yellow_green: {
          DEFAULT: "#0e402d",
          100: "#030d09",
          200: "#061912",
          300: "#08261a",
          400: "#0b3223",
          500: "#0e402d",
          600: "#1d865e",
          700: "#2dcd90",
          800: "#71e0b5",
          900: "#b8efda",
        },
        cal_poly_green: {
          DEFAULT: "#295135",
          100: "#08100b",
          200: "#102115",
          300: "#193120",
          400: "#21412a",
          500: "#295135",
          600: "#438557",
          700: "#64b17b",
          800: "#98cba7",
          900: "#cbe5d3",
        },
        ebony: {
          DEFAULT: "#5a6650",
          100: "#121510",
          200: "#242920",
          300: "#363e30",
          400: "#495241",
          500: "#5a6650",
          600: "#7b8b6e",
          700: "#9ca991",
          800: "#bdc6b6",
          900: "#dee2da",
        },
        button_green: {
          DEFAULT: "#9fcc2e",
          100: "#202909",
          200: "#405112",
          300: "#5f7a1c",
          400: "#7fa325",
          500: "#9fcc2e",
          600: "#b3d955",
          700: "#c6e280",
          800: "#d9ecaa",
          900: "#ecf5d5",
        },
      },
    },
  },
  plugins: [],
};
export default config;
