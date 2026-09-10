import { defineConfig } from "@solidjs/start/config";

/** Keep in sync with scripts/build-content.mjs writeDiscovery staticRoutes. */
export const PRERENDER_ROUTES = ["/", "/news", "/blog", "/about", "/roadmap"];

export default defineConfig({
  server: {
    preset: "static",
    baseURL: "/",
    prerender: {
      crawlLinks: true,
      routes: PRERENDER_ROUTES,
    },
  },
  vite: {
    base: "/",
  },
});
