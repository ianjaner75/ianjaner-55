import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tanstackRouter from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

const base = process.env.GH_PAGES_BASE || process.env.BASE_PATH || "/";

export default defineConfig({
  base,
  plugins: [tanstackRouter(), react(), tailwindcss(), tsConfigPaths()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "gh-pages/index.html",
    },
  },
});
