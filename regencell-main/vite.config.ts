import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// CHANGE: Add lovable-tagger for development mode So Remove it.
import {componentTagger} from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
