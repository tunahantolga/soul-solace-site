// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://integratifenstitu.com",
  // Emit /hakkimda.html instead of /hakkimda/index.html so URLs stay
  // slash-less on GitHub Pages and match the canonical links.
  build: { format: "file" },
  trailingSlash: "never",
  integrations: [react(), sitemap()],
  server: { host: true, port: 8080 },
});
