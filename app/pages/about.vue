<script setup lang="ts">
usePageSeo(
  "About Us | Tam's Commercial & Residential Services",
  "Owner-operated general property help in Benbrook, Texas. Get to know our straightforward approach and clear service limits.",
  "/about/",
);
</script>

<template>
  <main id="main-content" class="page-main">
    <section class="page-intro">
      <p class="eyebrow">About us</p>
      <h1>Practical help. Personal service.</h1>
      <p class="lead">
        We’re an owner-operated business based in Benbrook, Texas, with a
        simple approach: listen to what you need, be honest about the scope,
        and keep the next steps clear.
      </p>
    </section>

    <section class="about-layout">
      <div class="about-copy">
        <h2>Your property. Your priorities.</h2>
        <p>
          Your home or business deserves attention without the runaround.
          Whether it’s a small concern or a longer list, you can talk directly
          with the person who will discuss your project.
        </p>
        <p>
          We’ll explain what we can help with, what’s included, and what falls
          outside our scope. You get clear expectations before any work is
          arranged, not promises we can’t keep.
        </p>
        <NuxtLink class="button button-primary" to="/contact/">Start a conversation</NuxtLink>
      </div>
      <figure class="mascot-card">
        <img
          src="/assets/images/tcrs_logo.webp"
          alt="Tam's illustrated mascot wearing a golden hat, glasses, a blue work shirt, and a tool belt."
          width="420"
          height="770"
          loading="lazy"
        />
      </figure>
    </section>
  </main>
</template>
