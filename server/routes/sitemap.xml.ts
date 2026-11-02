import { getPublishedServices, services } from "#shared/data/services";

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event);
  const pages = [
    "/",
    "/services/",
    "/about/",
    "/service-area/",
    "/contact/",
    "/brand/",
    ...getPublishedServices(services).map(
      (service) => `/services/${service.slug}/`,
    ),
  ];
  const urls = pages
    .map(
      (path) =>
        `  <url><loc>${new URL(path, config.public.siteUrl).toString()}</loc></url>`,
    )
    .join("\n");

  setResponseHeader(event, "Content-Type", "application/xml; charset=utf-8");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
});
