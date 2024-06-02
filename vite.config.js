import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: "globalThis",
    "process.env": {},
  },
  build: {
    rollupOptions: {
      external: [
        // '@safe-global/safe-ethers-lib',
        '@safe-global/safe-ethers-adapters',
        '@safe-global/safe-core-sdk'
      ],
    },
  }
});