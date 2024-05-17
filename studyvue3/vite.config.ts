import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createVuePlugin } from "vite-plugin-vue2";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
  plugins: [
    vue(),
    createVuePlugin(), // 使用 vue2 插件
  ],
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: 3,
          features: {
            "nesting-rules": true,
          },
        }),
        require("postcss-pxtorem")({
          rootValue: 16,
          propList: ["*"],
          selectorBlackList: [],
        }),
      ],
    },
  },
  server: {
    port: 7070,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
});
