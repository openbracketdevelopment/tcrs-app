<script setup lang="ts">
import { getPublishedServices, services } from "#shared/data/services";

const route = useRoute();
const service = computed(() =>
  getPublishedServices(services).find(
    (item) => item.slug === String(route.params.slug),
  ),
);

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: "Service not found" });
}

usePageSeo(
  `${service.value.name} | Tam's Commercial & Residential Services`,
  service.value.description,
  `/services/${service.value.slug}/`,
);
</script>

<template>
  <main v-if="service" id="main-content" class="page-main">
    <section class="page-intro">
      <p class="eyebrow">Services</p>
      <h1>{{ service.name }}</h1>
      <p class="lead">{{ service.description }}</p>
    </section>

    <div class="service-detail-layout">
      <section>
        <h2>What this service includes</h2>
        <p>{{ service.summary }}</p>
        <h2>Scope and next steps</h2>
        <p>{{ service.scopeNote }}</p>
        <NuxtLink
          class="button button-primary"
          :to="{ path: '/contact/', query: { service: service.slug } }"
        >
          Discuss {{ service.name.toLowerCase() }}
        </NuxtLink>
      </section>

      <aside class="service-detail-aside">
        <p class="eyebrow">A straightforward start</p>
        <ol>
          <li>Describe the project and property.</li>
          <li>Discuss whether the request fits the confirmed scope.</li>
          <li>Agree on next steps before arranging work.</li>
        </ol>
      </aside>
    </div>

    <section v-if="service.faqs.length" class="faq-section">
      <h2>Frequently asked questions</h2>
      <details v-for="faq in service.faqs" :key="faq.question" class="faq-item">
        <summary>{{ faq.question }}</summary>
        <p>{{ faq.answer }}</p>
      </details>
    </section>
  </main>
</template>
