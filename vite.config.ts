import { defineConfig } from "vite";
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import react from "@vitejs/plugin-react";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: 'Carbbyn',
    short_name: 'Carbbyn',
    description: 'Your carbon credists in your pocket',
    icons: [
      {
        src: "/logo192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/logo512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: '/logo192.png',
        sizes:'192x192',
        type:'image/png',
        purpose:'apple touch icon',
      },
      {
        src: '/logo512.png',
        sizes:'512x512',
        type:'image/png',
        purpose:'any maskable',
      }
    ],
    display:"standalone",
    scope:'/',
    start_url:"/",
    orientation:'portrait'
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
});
