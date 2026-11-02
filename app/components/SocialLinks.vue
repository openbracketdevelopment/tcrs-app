<script setup lang="ts">
import { business } from "#shared/data/business";
</script>

<template>
  <nav class="social-links" aria-label="Social media">
    <a
      :href="business.facebook"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z"
        />
      </svg>
    </a>
    <a
      :href="business.nextdoor"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nextdoor"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="m3.3 10.1 8.7-7 8.7 7v9.7h-5.3v-6.1H8.6v6.1H3.3v-9.7Z"
        />
        <path d="M9.6 19.8v-4.4h4.8v4.4" />
      </svg>
    </a>
  </nav>
</template>
