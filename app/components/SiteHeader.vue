<script setup lang="ts">
import { business } from "#shared/data/business";

const menuOpen = ref(false);
const route = useRoute();

const navigation = [
  { label: "Services", to: "/services/" },
  { label: "About", to: "/about/" },
  { label: "Service area", to: "/service-area/" },
  { label: "Contact", to: "/contact/" },
];

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false;
  },
);

function closeMenu() {
  menuOpen.value = false;
}
</script>

<template>
  <header class="site-header" @keydown.esc="closeMenu">
    <div class="header-inner">
      <NuxtLink class="brand" to="/" aria-label="Tam's Services home" @click="closeMenu">
        <span class="brand-badge">
          <img
            src="/assets/brand/calltam-mark-light-bg.png"
            alt="Tam's Services mascot badge"
            width="512"
            height="512"
          />
        </span>
        <span class="brand-wordmark">
          <strong>Tam’s</strong>
          <span>Commercial &amp; Residential Services</span>
        </span>
      </NuxtLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="primary-navigation"
        @click="menuOpen = !menuOpen"
      >
        <span>{{ menuOpen ? "Close" : "Menu" }}</span>
        <span class="menu-icon" aria-hidden="true">{{ menuOpen ? "×" : "☰" }}</span>
      </button>

      <nav
        id="primary-navigation"
        class="primary-navigation"
        :class="{ 'is-open': menuOpen }"
        aria-label="Main navigation"
      >
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          active-class="is-active"
          @click="closeMenu"
        >
          {{ item.label }}
        </NuxtLink>
        <a class="header-call" :href="business.phoneLink">
          <span aria-hidden="true">Call</span>
          {{ business.phone }}
        </a>
      </nav>
    </div>
  </header>
</template>
