import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/jyportfolio/", // GitHub Pages에서 제공하는 리포지토리 경로
});
