import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 6510 },
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["favicon.ico", "robots.txt", "manifest.json"],
      manifest: {
        name: "Shawermakrakow",
        short_name: "Shawermakrakow",
        description: "Delicious Halal Food",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#12342f",
        // "scope":"/",
        // "start_url":"/",
        icons: [
          {
            src: "./Brand/192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./Brand/512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  scripts: {
    build: "vite build",
    preview: "vite preview",
  },
  base: "/shawermakrakow",
});
