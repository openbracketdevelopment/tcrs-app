<script setup lang="ts">
import { business } from "#shared/data/business";
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <NuxtLink class="footer-brand" to="/" aria-label="Tam's Services home">
        <span class="brand-badge">
          <img
            src="/assets/brand/calltam-mark-light-bg.png"
            alt=""
            width="512"
            height="512"
            loading="lazy"
          />
        </span>
        <span class="footer-brand-copy" aria-hidden="true">
          <strong>Tam’s</strong>
          <span>Commercial &amp; Residential Services</span>
        </span>
      </NuxtLink>
      <div class="footer-location">
        <p class="footer-title">{{ business.name }}</p>
        <p>Based in {{ business.location }}</p>
      </div>
      <div class="footer-contact">
        <a :href="business.phoneLink">{{ business.phone }}</a>
        <a
          v-for="email in business.emails"
          :key="email"
          :href="`mailto:${email}`"
        >
          {{ email }}
        </a>
      </div>
      <SocialLinks class="footer-social-links" />
      <NuxtLink class="brand-assets-link" to="/brand/">Brand assets</NuxtLink>
      <p class="copyright">© {{ new Date().getFullYear() }} Tam's Services</p>
    </div>
  </footer>
</template>
