import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { plugin as markdown, Mode } from "vite-plugin-markdown";

export default defineConfig({
  plugins: [
    react(),
    markdown({
      mode: [Mode.HTML, Mode.TOC, Mode.REACT],
    }),
  ],
  optimizeDeps: {
    include: ["lucide-react"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});