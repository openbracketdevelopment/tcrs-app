<script setup lang="ts">
usePageSeo(
  "Brand assets | Tam's Commercial & Residential Services",
  "Download the approved logo and mascot artwork for Tam's Commercial & Residential Services.",
  "/brand/",
);

const assets = [
  {
    name: "Mascot badge logo · horizontal · light",
    src: "/assets/brand/calltam-logo-horizontal-light-bg.png",
    surface: "light",
    width: 1400,
    height: 460,
  },
  {
    name: "Mascot badge logo · horizontal · dark",
    src: "/assets/brand/calltam-logo-horizontal-dark-bg.png",
    surface: "dark",
    width: 1400,
    height: 460,
  },
  {
    name: "Mascot badge logo · stacked · light",
    src: "/assets/brand/calltam-logo-stacked-light-bg.png",
    surface: "light",
    width: 700,
    height: 900,
  },
  {
    name: "Mascot badge logo · stacked · dark",
    src: "/assets/brand/calltam-logo-stacked-dark-bg.png",
    surface: "dark",
    width: 700,
    height: 900,
  },
  {
    name: "Mascot badge · light background",
    src: "/assets/brand/calltam-mark-light-bg.png",
    surface: "light",
    width: 512,
    height: 512,
  },
  {
    name: "Mascot badge · dark background",
    src: "/assets/brand/calltam-mark-dark-bg.png",
    surface: "dark",
    width: 512,
    height: 512,
  },
  {
    name: "Full-body logo · horizontal · light",
    src: "/assets/brand/calltam-logo-full-body-horizontal-light-bg.png",
    surface: "light",
    width: 1800,
    height: 600,
  },
  {
    name: "Full-body logo · horizontal · dark",
    src: "/assets/brand/calltam-logo-full-body-horizontal-dark-bg.png",
    surface: "dark",
    width: 1800,
    height: 600,
  },
  {
    name: "Full-body logo · stacked · light",
    src: "/assets/brand/calltam-logo-full-body-stacked-light-bg.png",
    surface: "light",
    width: 840,
    height: 1900,
  },
  {
    name: "Full-body logo · stacked · dark",
    src: "/assets/brand/calltam-logo-full-body-stacked-dark-bg.png",
    surface: "dark",
    width: 840,
    height: 1900,
  },
];
</script>

<template>
  <main id="main-content" class="page-main brand-page">
    <section class="page-intro">
      <p class="eyebrow">Brand resources</p>
      <h1>Logo and mascot artwork.</h1>
      <p class="lead">
        Choose the circular mascot badge paired with a wordmark, or a full-body
        logo in horizontal or stacked layouts. Each version is available for
        light and dark backgrounds.
      </p>
    </section>

    <section class="brand-grid" aria-label="Logo and mascot downloads">
      <article
        v-for="asset in assets"
        :key="asset.src"
        class="brand-card"
      >
        <div
          class="brand-preview"
          :class="`brand-preview--${asset.surface}`"
        >
          <img
            :src="asset.src"
            :alt="asset.name"
            :width="asset.width"
            :height="asset.height"
            loading="lazy"
          />
        </div>
        <div class="brand-card-copy">
          <h2>{{ asset.name }}</h2>
          <a :href="asset.src" :download="asset.src.split('/').pop()">
            Download PNG <span aria-hidden="true">↓</span>
          </a>
        </div>
      </article>
    </section>

    <section class="brand-usage">
      <p class="eyebrow">Quick guide</p>
      <h2>Choose the right version.</h2>
      <ul>
        <li>Use the light-background logo on cream, white, or other light surfaces.</li>
        <li>Use the dark-background logo on deep blue or other dark surfaces.</li>
        <li>Use the circular mascot badge when a full wordmark will not fit.</li>
        <li>Choose the badge or full-body layout to suit the space available.</li>
      </ul>
      <p>
        The character artwork is raster, not vector. These logo files are
        transparent PNGs; avoid enlarging them beyond their native dimensions.
      </p>
    </section>
  </main>
</template>
