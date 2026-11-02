<script setup lang="ts">
import { getPublishedServices, services } from "#shared/data/services";

const publishedServices = getPublishedServices(services);

usePageSeo(
  "Services | Tam's Commercial & Residential Services",
  "General property help for homes and businesses in Benbrook, Texas. Discuss your project with us; work requiring a licensed contractor is not offered.",
  "/services/",
);
</script>

<template>
  <main id="main-content" class="page-main">
    <section class="page-intro">
      <p class="eyebrow">Services</p>
      <h1>Big or small, start here.</h1>
      <p class="lead">
        From the everyday to-do list to that issue you’re not sure where to
        start with, tell us what you need. We’ll discuss the job and let you
        know whether it fits the general property help we can provide.
      </p>
    </section>

    <section v-if="publishedServices.length" class="service-list" aria-label="Published services">
      <article v-for="service in publishedServices" :key="service.slug" class="service-card">
        <p class="eyebrow">Service</p>
        <h2>{{ service.name }}</h2>
        <p>{{ service.summary }}</p>
        <NuxtLink class="text-link" :to="`/services/${service.slug}/`">
          Read about {{ service.name.toLowerCase() }} <span aria-hidden="true">→</span>
        </NuxtLink>
      </article>
    </section>

    <section v-else class="notice-card">
      <span class="notice-mark" aria-hidden="true">i</span>
      <div>
        <h2>Let’s talk about your project</h2>
        <p>
          No need to have it all figured out. Share the problem, your location,
          and what a good result looks like. We’ll explain what we can take on
          and agree on next steps with you.
        </p>
        <NuxtLink class="button button-primary" to="/contact/">Discuss a project</NuxtLink>
      </div>
    </section>
  </main>
</template>
