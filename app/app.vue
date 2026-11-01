<script setup lang="ts">
useHead({
  htmlAttrs: { lang: "en" },
  meta: [
    { name: "theme-color", content: "#f8f5ed" },
    { name: "msapplication-TileColor", content: "#f8f5ed" },
  ],
  link: [
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "manifest", href: "/site.webmanifest" },
  ],
});
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <SiteHeader />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>
