import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 6510 },
  plugins: [react()],
  scripts: {
    build: "vite build",
    preview: "vite preview",
  },
  base: "/shawermakrakow",
});
