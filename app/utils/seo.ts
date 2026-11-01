export function usePageSeo(title: string, description: string, path: string) {
  const config = useRuntimeConfig();
  const canonicalUrl = new URL(path, config.public.siteUrl).toString();

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: "website",
    ogUrl: canonicalUrl,
    ogSiteName: "Tam's Commercial & Residential Services",
    ogImage: new URL("/assets/images/tcrs_logo.webp", config.public.siteUrl).toString(),
    twitterCard: "summary",
  });

  useHead({
    link: [{ rel: "canonical", href: canonicalUrl }],
  });
}
