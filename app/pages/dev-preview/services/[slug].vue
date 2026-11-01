<script setup lang="ts">
import { draftServicePreviews } from "~/data/draft-service-previews";
import { getDraftServices } from "#shared/data/services";

const route = useRoute();
const previews = getDraftServices(draftServicePreviews);
const service = computed(() =>
  previews.find((item) => item.slug === String(route.params.slug)),
);

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: "Preview not found" });
}

usePageSeo(
  `${service.value.name} preview | Development only`,
  "Development-only preview. This service is not currently published.",
  `/dev-preview/services/${service.value.slug}/`,
);

useSeoMeta({ robots: "noindex, nofollow" });
</script>

<template>
  <main v-if="service" id="main-content" class="page-main">
    <div class="preview-banner">
      Development preview only. This page and service are not published or
      available in production.
    </div>
    <section class="page-intro">
      <p class="eyebrow">Draft service · Not for publication</p>
      <h1>{{ service.name }}</h1>
      <p class="lead">{{ service.description }}</p>
    </section>
    <section class="notice-card">
      <span class="notice-mark" aria-hidden="true">!</span>
      <div>
        <h2>Scope review required</h2>
        <p>{{ service.scopeNote }}</p>
      </div>
    </section>
    <section class="preview-section">
      <h2>Tasks and details to confirm</h2>
      <p>These notes are review prompts, not published service claims.</p>
      <ul>
        <li v-for="task in service.candidateTasks" :key="task">{{ task }}</li>
      </ul>
    </section>
    <section v-if="service.faqs.length" class="faq-section">
      <h2>Draft FAQ</h2>
      <details v-for="faq in service.faqs" :key="faq.question" class="faq-item">
        <summary>{{ faq.question }}</summary>
        <p>{{ faq.answer }}</p>
      </details>
    </section>
  </main>
</template>
