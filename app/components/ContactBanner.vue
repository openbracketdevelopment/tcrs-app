<script setup lang="ts">
import { business } from "#shared/data/business";
</script>

<template>
  <section class="contact-banner-section" aria-labelledby="contact-banner-heading">
    <div class="contact-banner">
      <div class="contact-mascot">
        <img
          src="/assets/illustrations/contact-mascot.webp"
          alt=""
          width="1053"
          height="1456"
          loading="lazy"
        />
      </div>
      <div class="contact-banner-title">
        <p class="eyebrow">Your next step</p>
        <h2 id="contact-banner-heading">
          <span>Let’s get</span>
          <span class="hero-emphasis">it done.</span>
        </h2>
        <span class="contact-title-rule" aria-hidden="true"></span>
      </div>
      <div class="contact-options">
        <a class="contact-option" :href="business.phoneLink">
          <span class="contact-option-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 3a14 14 0 0 1-9-9l3-2-1-4Z" />
            </svg>
          </span>
          <span class="contact-option-label">Call</span>
          <strong>{{ business.phone }}</strong>
        </a>
        <a
          v-for="email in business.emails"
          :key="email"
          class="contact-option"
          :href="`mailto:${email}`"
        >
          <span class="contact-option-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="1" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </span>
          <span class="contact-option-label">Email</span>
          <strong>{{ email }}</strong>
        </a>
      </div>
      <SocialLinks class="contact-social-links" />
    </div>
  </section>
</template>
