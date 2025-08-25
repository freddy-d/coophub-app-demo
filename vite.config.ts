import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  // If you will serve the app under /demo/ in production, set base accordingly:
  // base: './',          // writes ./assets/... (good when copying into /public/demo)
  // or base: '/demo/',   // when the app always lives under /demo/
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
