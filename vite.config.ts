import { defineConfig } from "vite";
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import react from "@vitejs/plugin-react";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  manifest: {
    theme_color: "#1D0093",
    background_color: "#1D0093",
    name: 'TreePlanter',
    short_name: 'TreePlanter',
    description: 'Plant trees',
    orientation:'portrait',
    scope: "/",
    start_url: "/",
    icons: [
      {
        src: "/ico.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    VitePWA(manifestForPlugin)
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  }
});