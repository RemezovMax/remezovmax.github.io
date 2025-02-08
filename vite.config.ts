import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Определяем базовый путь в зависимости от среды
const basePath = process.env.NODE_ENV === "production" ? "/remezovmax.github.io/" : "/";

export default defineConfig({
  plugins: [react()],
  base: basePath, // Динамически устанавливаем base
  server: {
    port: 3000, // Порт для локальной разработки
  },
});
