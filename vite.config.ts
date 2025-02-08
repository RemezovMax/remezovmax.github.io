import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 3000,
  },
  esbuild: {
    legalComments: "none", // Убираем лишние комментарии
  },
  build: {
    sourcemap: false, // Отключаем eval-строки
  },
});
