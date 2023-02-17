import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    port: 5173,
    proxy: "js",
  },
  plugins: [react()],
});
