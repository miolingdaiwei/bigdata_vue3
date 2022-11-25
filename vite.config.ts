import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://192.168.4.6:3333",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/pp": {
        target: "https://api.wmdb.tv/movie/api?id=1428581",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pp/, ""),
      },
      https: {
        changeOrigin: true,
        secure: false, // 设置支持https协议的代理
        rewrite: (path) => path.replace(/^\/https/, "https"),
      },
    },
    host: "0.0.0.0",
  },
});
