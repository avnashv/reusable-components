import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "ReactMuiTailwindUI",
      fileName: (format) => `react-mui-tailwind-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "@mui/material"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@mui/material": "MaterialUI",
        },
      },
    },
  },
})
