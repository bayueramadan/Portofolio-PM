import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import Sitemap from "vite-plugin-sitemap"; // ✅ default import, bukan { SitemapPlugin }

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: "https://www.bayuerfan.com",
      routes: ["/", "/project", "/project/bank-jago", "/about", "/contact"],
    }),
  ],
});
