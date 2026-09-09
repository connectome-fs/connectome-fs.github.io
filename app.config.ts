import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    preset: "static",
    baseURL: "/",
    prerender: {
      crawlLinks: true,
      routes: ["/", "/news", "/blog", "/about", "/roadmap"],
    },
  },
  vite: {
    base: "/",
  },
});
