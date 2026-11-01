<script setup lang="ts">
import { business, getPublishedServiceAreas } from "#shared/data/business";
import { getPublishedServices, services } from "#shared/data/services";

const publishedServices = getPublishedServices(services);
const areas = getPublishedServiceAreas();
const config = useRuntimeConfig();

usePageSeo(
  "Tam's Commercial & Residential Services | Benbrook, TX",
  "A personal, owner-operated service business based in Benbrook, Texas. Get in touch to discuss your property project and confirm its scope.",
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
  <main id="main-content">
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">A personal, local service business</p>
          <h1>One man. One truck. Your to-do list, handled.</h1>
          <p>
            Tell Tam what needs attention. He'll discuss the project, confirm
            whether it fits his current scope, and talk through what comes
            next.
          </p>
          <div class="hero-actions">
            <NuxtLink class="button button-primary" to="/contact/">
              Discuss your project <span aria-hidden="true">→</span>
            </NuxtLink>
            <a class="button button-secondary" :href="business.phoneLink">
              Call {{ business.phone }}
            </a>
          </div>
          <p class="hero-location">
            Based in {{ areas.map((area) => area.name).join(" · ") }}.
            Ask about your location.
          </p>
        </div>
        <div class="hero-art">
          <img
            src="/assets/images/tcrs_logo.webp"
            alt="Tam's illustrated mascot wearing a golden hat, glasses, a blue work shirt, and a tool belt."
            width="840"
            height="1540"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="services-heading">
      <div class="section-inner">
        <div class="section-heading">
          <p class="eyebrow">Services</p>
          <h2 id="services-heading">A clear list starts with a clear scope.</h2>
          <p>
            Service details are being reviewed before publication. Tam can
            discuss a project with you and confirm whether it fits the work
            he can take on.
          </p>
        </div>

        <div v-if="publishedServices.length" class="service-grid">
          <article
            v-for="service in publishedServices"
            :key="service.slug"
            class="service-card"
          >
            <p class="eyebrow">Available service</p>
            <h3>{{ service.name }}</h3>
            <p>{{ service.summary }}</p>
            <NuxtLink class="text-link" :to="`/services/${service.slug}/`">
              Learn more <span aria-hidden="true">→</span>
            </NuxtLink>
          </article>
        </div>
        <div v-else class="notice-card">
          <span class="notice-mark" aria-hidden="true">i</span>
          <div>
            <h2>Service details are being confirmed</h2>
            <p>
              No specific trade or project is advertised until the owner has
              confirmed its scope and any applicable requirements.
            </p>
            <NuxtLink class="text-link" to="/services/">
              About service listings <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-blue" aria-labelledby="customers-heading">
      <div class="section-inner">
        <div class="section-heading">
          <p class="eyebrow">Who we work with</p>
          <h2 id="customers-heading">A direct conversation, whether it’s home or work.</h2>
          <p>
            Start with the property and what needs attention. The right next
            step depends on the details and confirmed project scope.
          </p>
        </div>
        <div class="audience-grid">
          <article>
            <h3>Residential properties</h3>
            <p>
              Homeowners can explain the issue, share where the property is,
              and discuss whether the request is a fit.
            </p>
          </article>
          <article>
            <h3>Commercial properties</h3>
            <p>
              Property owners and managers can describe the site and project
              needs before any work is arranged.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="process-heading">
      <div class="section-inner">
        <div class="section-heading">
          <p class="eyebrow">How it works</p>
          <h2 id="process-heading">Three simple steps.</h2>
          <p>No instant quotes or scheduling promises—just a clear first conversation.</p>
        </div>
        <div class="steps-grid">
          <article class="step-card">
            <span class="step-number">1</span>
            <h3>Tell us what needs attention</h3>
            <p>Share the property location and a short description of the project.</p>
          </article>
          <article class="step-card">
            <span class="step-number">2</span>
            <h3>Discuss the details</h3>
            <p>Talk through the request, its scope, and whether it is a fit.</p>
          </article>
          <article class="step-card">
            <span class="step-number">3</span>
            <h3>Agree on next steps</h3>
            <p>Arrange work only after the project scope and next steps are clear.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="about-heading">
      <div class="section-inner">
        <div class="about-strip">
          <div>
            <p class="eyebrow">About Tam</p>
            <h2 id="about-heading">One person to talk to from the start.</h2>
            <p>
              Tam's is an owner-operated business based in Benbrook, Texas.
              Get in touch directly to discuss a project and its scope.
            </p>
          </div>
          <NuxtLink class="button button-secondary" to="/about/">Meet Tam</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="area-heading">
      <div class="section-inner area-preview">
        <div>
          <p class="eyebrow">Service area</p>
          <h2 id="area-heading">Based in {{ areas.map((area) => area.name).join(" and ") }}.</h2>
          <p>Ask Tam whether your property location is within the current area.</p>
        </div>
        <NuxtLink class="text-link" to="/service-area/">
          See service area <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </section>

    <section class="section section-blue" aria-labelledby="contact-heading">
      <div class="section-inner final-cta">
        <div>
          <p class="eyebrow">Start here</p>
          <h2 id="contact-heading">Have a project in mind? Let’s talk it through.</h2>
        </div>
        <NuxtLink class="button button-primary" to="/contact/">
          Discuss your project <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
