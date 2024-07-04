import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      Pages({
        // Your Pages configuration
      }),
    ],
    define: {
      "process.env": env,
    },
  };
});
