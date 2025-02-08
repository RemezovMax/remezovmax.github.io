import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Указываем корень для GitHub Pages
  server: {
    port: 3001, // Порт для локальной разработки http://localhost/
  },
});
