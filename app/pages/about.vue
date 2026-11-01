<script setup lang="ts">
usePageSeo(
  "About Tam | Tam's Commercial & Residential Services",
  "Learn about Tam's owner-operated commercial and residential service business based in Benbrook, Texas.",
  "/about/",
);
</script>

<template>
  <main id="main-content" class="page-main">
    <section class="page-intro">
      <p class="eyebrow">About Tam</p>
      <h1>One person to talk to. A clear plan for what comes next.</h1>
      <p class="lead">
        Tam's Commercial &amp; Residential Services is an owner-operated
        business based in Benbrook, Texas.
      </p>
    </section>

    <section class="about-layout">
      <div class="about-copy">
        <h2>A straightforward first conversation</h2>
        <p>
          When you reach out, you can explain what needs attention and where
          the property is. Tam can talk through the request, confirm whether
          it fits the work he can take on, and agree on next steps before
          anything is arranged.
        </p>
        <p>
          The business is reviewing the exact work it can offer. This site
          will list services only after their scope and applicable
          requirements have been confirmed.
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
        <figcaption>The familiar face of Tam's Services.</figcaption>
      </figure>
    </section>
  </main>
</template>
