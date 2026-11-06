import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Change to "/repository-name/" only if deploying to a project GitHub Pages URL.
});
