<script setup lang="ts">
import { getPublishedServiceAreas } from "#shared/data/business";

const areas = getPublishedServiceAreas();

usePageSeo(
  "Service Area | Tam's Commercial & Residential Services",
  "Based in Benbrook, Texas. Share your property location with us to confirm service availability before arranging work.",
  "/service-area/",
);
</script>

<template>
  <main id="main-content" class="page-main">
    <section class="page-intro">
      <p class="eyebrow">Service area</p>
      <h1>Local to Benbrook.</h1>
      <p class="lead">
        We’re based in Benbrook, Texas. Have a project at home or at your
        business? Share the location so we can confirm whether it’s within
        our service area.
      </p>
    </section>

    <section class="area-panel">
      <h2>Our home base</h2>
      <ul class="area-list">
        <li v-for="area in areas" :key="area.name">
          <span aria-hidden="true">⌖</span>{{ area.name }}
        </li>
      </ul>
      <p>
        Not sure whether we can come to you? Get in touch with your city or
        ZIP code before arranging work. We’ll confirm availability for your
        location.
      </p>
      <NuxtLink class="text-link" to="/contact/">Ask about your location <span aria-hidden="true">→</span></NuxtLink>
    </section>
  </main>
</template>
