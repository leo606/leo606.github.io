import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../docs",
  },
  server: {
    port: 3001,
  },
});
