<script setup lang="ts">
import { getPublishedServiceAreas } from "#shared/data/business";

const areas = getPublishedServiceAreas();

usePageSeo(
  "Service Area | Tam's Commercial & Residential Services",
  "Find the confirmed service area for Tam's Commercial & Residential Services.",
  "/service-area/",
);
</script>

<template>
  <main id="main-content" class="page-main">
    <section class="page-intro">
      <p class="eyebrow">Service area</p>
      <h1>Local to Benbrook.</h1>
      <p class="lead">
        Tam's Commercial &amp; Residential Services is based in Benbrook,
        Texas. Ask about your property's location before planning a project.
      </p>
    </section>

    <section class="area-panel">
      <h2>Currently confirmed</h2>
      <ul class="area-list">
        <li v-for="area in areas" :key="area.name">
          <span aria-hidden="true">⌖</span>{{ area.name }}
        </li>
      </ul>
      <p>
        Other locations listed on the former site are being reviewed and
        won't be advertised until confirmed.
      </p>
      <NuxtLink class="text-link" to="/contact/">Ask about your location <span aria-hidden="true">→</span></NuxtLink>
    </section>
  </main>
</template>
