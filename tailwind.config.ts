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
        primaryColor:"rgb(40, 38, 91)",
        secondColor:"rgb(0, 149, 128)",
        textPrimaryColor:"#000",
        textSecondColor:"#FFF",
      },
      backgroundImage: {
        'custom-linear': 'linear-gradient(to right, rgb(40, 38, 91) 0%, rgb(0, 149, 128) 100%)', // Gradiente linear de cima para baixo (180 graus)
      },
      height: {
        h100:"100px",
        
      },
      
    },
  },
  plugins: [],
};
export default config;
