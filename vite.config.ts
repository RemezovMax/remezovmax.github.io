import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/https://remezovmax.github.io/", // Указывается корневой путь
  server: {
    port: 3000,
  },
});
