import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(async () => {
  const plugins = [
    react(),
    runtimeErrorOverlay(),
  ];

  // Load Replit dev-only plugins safely
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID) {
    const cartographer = await import("@replit/vite-plugin-cartographer").then(
      (m) => m.cartographer()
    );
    const devBanner = await import("@replit/vite-plugin-dev-banner").then(
      (m) => m.devBanner()
    );

    plugins.push(cartographer, devBanner);
  }

  return {
    base: "/ProAiGenesis/", // <-- REQUIRED FOR GITHUB PAGES

    plugins,

    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },

    root: path.resolve(import.meta.dirname, "client"),

    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },

    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
