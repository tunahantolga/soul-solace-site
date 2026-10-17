// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://integratifenstitu.com",
  // Every page is emitted as <route>/index.html and linked as /<route>/, which
  // every static host (Outplane/serve, GitHub Pages, nginx, Vercel) serves
  // directly without relying on clean-URL rewrites.
  build: { format: "directory" },
  trailingSlash: "always",
  integrations: [react(), sitemap()],
  server: { host: true, port: 8080 },
});
