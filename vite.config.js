import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

import { SitemapPlugin } from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    SitemapPlugin({
      hostname: "https://www.bayuerfan.com",
      routes: ["/", "/project", "/about", "/contact"],
    }),
  ],
});
