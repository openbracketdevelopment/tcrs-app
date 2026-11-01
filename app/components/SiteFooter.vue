<script setup lang="ts">
import { business } from "#shared/data/business";
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div>
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
      <a
        class="nextdoor-link"
        :href="business.nextdoor"
        target="_blank"
        rel="noopener noreferrer"
      >
        Find Tam on Nextdoor
        <span aria-hidden="true">↗</span>
      </a>
      <p class="copyright">© {{ new Date().getFullYear() }} Tam's Services</p>
    </div>
  </footer>
</template>
