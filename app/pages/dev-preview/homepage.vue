<script setup lang="ts">
import maintenanceArtwork from "~/assets/illustrations/drafts/draft-project-maintenance.webp";
import planningArtwork from "~/assets/illustrations/drafts/draft-project-planning.webp";
import reviewArtwork from "~/assets/illustrations/drafts/draft-project-review.webp";

usePageSeo(
  "Illustrated homepage preview | Development only",
  "Internal layout preview. Service concepts, artwork, projects, and testimonials are not published.",
  "/dev-preview/homepage/",
);
useSeoMeta({ robots: "noindex, nofollow" });

const draftCards = [
  {
    title: "Property upkeep",
    category: "Draft category · Scope to confirm",
    image: maintenanceArtwork,
    alt: "Tam's mascot beside a toolbox and a blank project checklist.",
    tasks: [
      "Confirm the specific tasks under consideration",
      "Discuss property and project boundaries",
      "Review any requirements before publication",
    ],
  },
  {
    title: "Project planning",
    category: "Draft category · Scope to confirm",
    image: planningArtwork,
    alt: "Tam's mascot beside a measuring plan, level, and project materials.",
    tasks: [
      "Clarify the goals and details of the request",
      "Discuss what is included in the proposed scope",
      "Confirm next steps before work is arranged",
    ],
  },
  {
    title: "Project review",
    category: "Draft category · Scope to confirm",
    image: reviewArtwork,
    alt: "Tam's mascot reviewing a blank checklist beside a toolbox.",
    tasks: [
      "Review the requested tasks together",
      "Identify any open questions or boundaries",
      "Agree what should happen next",
    ],
  },
];
</script>

<template>
  <main id="main-content" class="design-preview">
    <div class="preview-banner">
      Development-only design preview. All service panels are unapproved concepts;
      project photography and customer reviews have not been supplied.
    </div>

    <section class="design-preview-intro">
      <p class="eyebrow">Internal review · Not for publication</p>
      <h1>Illustrated homepage layout.</h1>
      <p class="lead">
        This preview shows the full visual direction while keeping unconfirmed
        services, projects, and testimonials out of the public site.
      </p>
      <NuxtLink class="text-link" to="/">Return to the public homepage →</NuxtLink>
    </section>

    <section class="design-preview-categories" aria-labelledby="preview-categories-heading">
      <div class="decorated-heading">
        <span aria-hidden="true"></span>
        <h2 id="preview-categories-heading">What We Do</h2>
        <span aria-hidden="true"></span>
      </div>
      <div class="heading-star" aria-hidden="true">★</div>
      <div class="preview-category-row">
        <article>
          <span class="category-icon category-icon-blue" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <path d="m7 22 17-14 17 14v19H7V22Z" />
              <path d="M19 41V27h10v14M13 22h22" />
            </svg>
          </span>
          <div>
            <h3>Property care</h3>
            <p>A visual category concept, pending owner scope review.</p>
          </div>
        </article>
        <article>
          <span class="category-icon category-icon-tan" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <path d="M8 37 31 14m-7-7 11 11M5 40l7-1 27-27-6-6L6 33l-1 7Z" />
              <path d="m21 20 7 7" />
            </svg>
          </span>
          <div>
            <h3>Project planning</h3>
            <p>Discussing project scope, not advertising a service.</p>
          </div>
        </article>
        <article>
          <span class="category-icon category-icon-blue" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <path d="M15 10H9v32h30V10h-6" />
              <path d="M17 7h14v8H17zM17 23h14M17 31h14M17 38h9" />
              <path d="m11 23 2 2 3-4m-5 10 2 2 3-4" />
            </svg>
          </span>
          <div>
            <h3>Clear next steps</h3>
            <p>A review-and-planning concept for the page layout.</p>
          </div>
        </article>
      </div>
    </section>

    <section class="design-preview-services" aria-labelledby="preview-services-heading">
      <div class="decorated-heading">
        <span aria-hidden="true"></span>
        <h2 id="preview-services-heading">Service panel concepts</h2>
        <span aria-hidden="true"></span>
      </div>
      <div class="heading-star" aria-hidden="true">★</div>
      <p class="preview-section-intro">
        These illustrated layouts are for design review only. The titles and
        checklist items are not a list of services offered.
      </p>
      <div class="preview-service-grid">
        <article
          v-for="(card, index) in draftCards"
          :key="card.title"
          class="preview-service-card"
          :class="{ 'preview-service-card-tan': index === 1 }"
        >
          <p class="preview-service-label">{{ card.category }}</p>
          <h3>{{ card.title }}</h3>
          <img
            :src="card.image"
            :alt="card.alt"
            width="1024"
            height="1024"
            loading="lazy"
          />
          <ul>
            <li v-for="task in card.tasks" :key="task">
              <span aria-hidden="true">✦</span>{{ task }}
            </li>
          </ul>
          <span class="preview-card-cta">Discuss a project · Preview only</span>
        </article>
      </div>
    </section>

    <section class="preview-unavailable-grid" aria-label="Content awaiting approval">
      <article class="preview-content-placeholder">
        <div class="decorated-heading">
          <span aria-hidden="true"></span>
          <h2>Recent work</h2>
          <span aria-hidden="true"></span>
        </div>
        <div class="preview-empty-art" aria-hidden="true">
          <span>Before</span><span>After</span>
        </div>
        <p>No approved before-and-after project photos have been provided.</p>
      </article>
      <article class="preview-content-placeholder">
        <div class="decorated-heading">
          <span aria-hidden="true"></span>
          <h2>Customer reviews</h2>
          <span aria-hidden="true"></span>
        </div>
        <div class="preview-review-empty">
          <span aria-hidden="true">“</span>
          <p>Only publish genuine, approved customer feedback.</p>
        </div>
        <p>No approved reviews have been provided for publication.</p>
      </article>
    </section>

    <ContactBanner />
  </main>
</template>
