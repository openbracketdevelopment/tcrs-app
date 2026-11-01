import process from "node:process";
import type { NuxtPage } from "@nuxt/schema";
import { getPublishedServices, services } from "./shared/data/services";

function removeDevelopmentPreviewPages(pages: NuxtPage[]) {
  for (let index = pages.length - 1; index >= 0; index -= 1) {
    const page = pages[index];

    if (!page) {
      continue;
    }

    if (page.path.startsWith("/dev-preview/")) {
      pages.splice(index, 1);
    } else if (page.children) {
      removeDevelopmentPreviewPages(page.children);
    }
  }
}

export default defineNuxtConfig({
  compatibilityDate: "2026-11-01",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://calltam.com",
    },
  },
  hooks: {
    "pages:extend"(pages) {
      if (process.env.NODE_ENV === "production") {
        removeDevelopmentPreviewPages(pages);
      }
    },
  },
  nitro: {
    prerender: {
      routes: [
        "/",
        "/services/",
        "/about/",
        "/service-area/",
        "/contact/",
        "/sitemap.xml",
        "/robots.txt",
        ...getPublishedServices(services).map(
          (service) => `/services/${service.slug}/`,
        ),
      ],
    },
  },
});
