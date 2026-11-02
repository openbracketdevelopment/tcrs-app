<script setup lang="ts">
import { business, getPublishedServiceAreas } from "#shared/data/business";

const areas = getPublishedServiceAreas();
const config = useRuntimeConfig();
const showDesignPreviewLink = import.meta.dev;
const projectStages = [
  {
    title: "Start with the property",
    description: "Home or business, tell us what needs attention.",
    image: "/assets/illustrations/project-conversation.webp",
    alt: "Tam and a homeowner discuss a project outside a house.",
  },
  {
    title: "Talk through the details",
    description: "We’ll talk through the scope, options, and any limits.",
    image: "/assets/illustrations/project-planning.webp",
    alt: "Tam and a homeowner review a project plan together at a table.",
  },
  {
    title: "Agree on next steps",
    description: "Know what’s included before any work is arranged.",
    image: "/assets/illustrations/next-steps.webp",
    alt: "Tam and a homeowner agree on next steps while reviewing a checklist.",
  },
];

usePageSeo(
  "Tam's Commercial & Residential Services | Benbrook, TX",
  "General property help for homes and businesses in Benbrook, Texas. Big or small, tell us what needs attention. Work requiring a licensed contractor is excluded.",
  "/",
);

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: business.name,
        url: config.public.siteUrl,
        telephone: "+18178238009",
        email: business.emails[0],
      }),
    },
  ],
});
</script>

<template>
  <main id="main-content" class="home-page">
    <section class="home-hero" aria-labelledby="hero-heading">
      <div class="home-hero-inner">
        <div class="home-hero-copy">
          <p class="eyebrow"><span aria-hidden="true">✦</span> Benbrook, Texas</p>
          <h1
            id="hero-heading"
            aria-label="One man. One truck. Big or small. We do it all!"
          >
            <span>One man.</span>
            <span>One truck.</span>
            <span class="hero-emphasis">Big or small.</span>
            <span>We do it all!</span>
          </h1>
          <div class="home-hero-divider" aria-hidden="true"><span>★</span></div>
          <p class="home-hero-lead">
            Done right the first time.<br />
            We diagnose. We fix. You relax.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" :href="business.phoneLink">
              Give us a call <span aria-hidden="true">→</span>
            </a>
            <NuxtLink class="button button-secondary" to="/contact/">
              Tell us what you need
            </NuxtLink>
          </div>
          <p class="hero-location">
            Owner-operated · Based in
            {{ areas.map((area) => area.name).join(" · ") }}
          </p>
        </div>
        <figure class="home-hero-art">
          <img
            src="/assets/illustrations/hero-truck-mascot.webp"
            alt="Tam’s illustrated mascot beside a white short-hood utility truck with a separate cab, a tall service body with visible storage doors, and an overhead ladder rack."
            width="1595"
            height="986"
            fetchpriority="high"
          />
        </figure>
      </div>
      <div class="hero-scroll-cue" aria-hidden="true">
        <span>Scroll to learn more</span>
        <span class="hero-scroll-arrow">↓</span>
      </div>
    </section>

    <section class="home-intro" aria-label="About Tam's Services">
      <span class="intro-sparkle intro-sparkle-left" aria-hidden="true">✦</span>
      <p>
        Practical help for your home or business. Straight answers, clear
        expectations, and a plan that fits the job.
      </p>
      <span class="intro-sparkle intro-sparkle-right" aria-hidden="true">✦</span>
    </section>

    <section class="home-services" aria-labelledby="what-we-do-heading">
      <div class="decorated-heading">
        <span aria-hidden="true"></span>
        <h2 id="what-we-do-heading">What We Do</h2>
        <span aria-hidden="true"></span>
      </div>
      <div class="heading-star" aria-hidden="true">★</div>

      <div class="home-category-grid">
        <article
          v-for="(stage, index) in projectStages"
          :key="stage.title"
          class="home-category"
          :class="{ 'home-category-tan': index === 1 }"
        >
          <img
            class="home-category-art"
            :src="stage.image"
            :alt="stage.alt"
            width="1024"
            height="1024"
            loading="lazy"
          />
          <div class="home-category-copy">
            <h3>{{ stage.title }}</h3>
            <p>{{ stage.description }}</p>
          </div>
        </article>
      </div>

      <NuxtLink class="services-contact-link" to="/contact/">
        Have a project in mind? Get in touch <span aria-hidden="true">→</span>
      </NuxtLink>
    </section>

    <section class="home-about-strip" aria-labelledby="home-about-heading">
      <div class="home-about-copy">
        <p class="eyebrow">Our approach</p>
        <h2 id="home-about-heading">Less runaround. More peace of mind.</h2>
        <p>
          We’re an owner-operated business that keeps things personal. Tell us
          what’s on your list, and we’ll be clear about what we can take on
          before you make a commitment.
        </p>
      </div>
      <NuxtLink class="button button-secondary" to="/about/">How we work</NuxtLink>
    </section>

    <section class="home-area" aria-labelledby="home-area-heading">
      <svg class="home-area-art" viewBox="0 0 180 160" aria-hidden="true">
        <ellipse cx="90" cy="140" rx="72" ry="10" fill="#d8e7e9" />
        <path d="M16 106 55 75l39 31v34H27v-34" fill="#fffefa" stroke="#143f61" stroke-width="3" stroke-linejoin="round" />
        <path d="m11 106 44-36 44 36" fill="none" stroke="#143f61" stroke-width="5" stroke-linecap="round" />
        <path d="M49 115h16v25H49z" fill="#d7a14a" />
        <path d="M31 109h12v12H31z" fill="#b8dfe9" stroke="#143f61" stroke-width="2" />
        <path d="M117 17c-23 0-40 17-40 39 0 30 40 66 40 66s40-36 40-66c0-22-17-39-40-39Z" fill="#b83432" stroke="#143f61" stroke-width="3" />
        <circle cx="117" cy="56" r="17" fill="#fffefa" />
        <path d="m111 56 4 4 8-9" fill="none" stroke="#143f61" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M26 42v14m-7-7h14m123 64v12m-6-6h12" stroke="#d7a14a" stroke-width="3" stroke-linecap="round" />
      </svg>
      <div>
        <p class="eyebrow">Service area</p>
        <h2 id="home-area-heading">
          Local help. Right here in Benbrook.
        </h2>
        <p>
          Based in {{ areas.map((area) => area.name).join(" and ") }}.
          Share your location and we’ll confirm whether we can come to you.
        </p>
      </div>
      <NuxtLink class="text-link" to="/service-area/">
        See service area <span aria-hidden="true">→</span>
      </NuxtLink>
    </section>

    <ContactBanner />
    <section v-if="showDesignPreviewLink" class="design-preview-section">
      <p class="design-preview-link">
        <NuxtLink to="/dev-preview/homepage/">
          Open the full illustrated layout preview
        </NuxtLink>
      </p>
    </section>
  </main>
</template>
