<script setup lang="ts">
import { getPublishedServices, services } from "#shared/data/services";

const publishedServices = getPublishedServices(services);

usePageSeo(
  "Services | Tam's Commercial & Residential Services",
  "Review currently published services from Tam's Commercial & Residential Services in Benbrook, Texas.",
  "/services/",
);
</script>

<template>
  <main id="main-content" class="page-main">
    <section class="page-intro">
      <p class="eyebrow">Services</p>
      <h1>Clear scope. A direct conversation.</h1>
      <p class="lead">
        Service details are being confirmed before they are listed here. No
        trade or project is advertised until its scope has been reviewed.
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
        <h2>Service list in review</h2>
        <p>
          The previous site mentioned several building trades. Those claims
          need an owner review before they can be published here. Call or email
          to ask about a specific project.
        </p>
        <NuxtLink class="button button-primary" to="/contact/">Discuss a project</NuxtLink>
      </div>
    </section>
  </main>
</template>
