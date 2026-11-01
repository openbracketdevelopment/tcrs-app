<script setup lang="ts">
import { business } from "#shared/data/business";
import { getPublishedServices, services } from "#shared/data/services";
import type { ContactSubmission } from "#shared/types/contact";

usePageSeo(
  "Contact | Tam's Commercial & Residential Services",
  "Contact Tam's Commercial & Residential Services by phone or email, or send a project enquiry.",
  "/contact/",
);

const publishedServices = getPublishedServices(services);
const route = useRoute();
const requestedService =
  typeof route.query.service === "string" ? route.query.service : "";
const form = reactive({
  name: "",
  email: "",
  phone: "",
  preferredContact: "",
  city: "",
  propertyType: "",
  service: publishedServices.some((service) => service.slug === requestedService)
    ? requestedService
    : "other",
  project: "",
  website: "",
});
const submitting = ref(false);
const message = ref("");
const messageType = ref<"error" | "success" | "">("");

async function submitForm() {
  message.value = "";
  messageType.value = "";

  const payload: ContactSubmission = { ...form };
  submitting.value = true;

  try {
    await $fetch("/api/contact", { method: "POST", body: payload });
    message.value = "Your message has been sent.";
    messageType.value = "success";
    form.name = "";
    form.email = "";
    form.phone = "";
    form.preferredContact = "";
    form.city = "";
    form.propertyType = "";
    form.service = "other";
    form.project = "";
    form.website = "";
  } catch (error) {
    const fetchError =
      typeof error === "object" && error !== null
        ? (error as {
            data?: { statusMessage?: string; message?: string };
            message?: string;
          })
        : undefined;
    message.value =
      fetchError?.data?.statusMessage ??
      fetchError?.data?.message ??
      fetchError?.message ??
      "The form could not be submitted. Please call or email instead.";
    messageType.value = "error";
  } finally {
    submitting.value = false;
  }
}
</script>

<template>
  <main id="main-content" class="page-main">
    <section class="page-intro">
      <p class="eyebrow">Contact</p>
      <h1>Tell Tam what needs attention.</h1>
      <p class="lead">
        Share a few details and the best way to reach you. You can also call or
        email directly.
      </p>
    </section>

    <div class="contact-layout">
      <section class="contact-form-card" aria-labelledby="form-heading">
        <h2 id="form-heading">Project enquiry</h2>
        <p class="form-intro">Fields marked with * are required.</p>
        <form @submit.prevent="submitForm">
          <div class="form-grid">
            <label class="form-field">
              <span>Name <span aria-hidden="true">*</span></span>
              <input v-model="form.name" name="name" autocomplete="name" required maxlength="80" />
            </label>

            <label class="form-field">
              <span>Email</span>
              <input
                v-model="form.email"
                name="email"
                type="email"
                autocomplete="email"
                maxlength="254"
                :required="!form.phone"
                aria-describedby="contact-method-hint"
              />
            </label>

            <label class="form-field">
              <span>Phone</span>
              <input
                v-model="form.phone"
                name="phone"
                type="tel"
                autocomplete="tel"
                maxlength="30"
                :required="!form.email"
                aria-describedby="contact-method-hint"
              />
            </label>

            <label v-if="form.email && form.phone" class="form-field">
              <span>Preferred contact</span>
              <select v-model="form.preferredContact" name="preferredContact">
                <option value="">No preference</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
            </label>

            <p id="contact-method-hint" class="field-hint">
              Provide an email address or phone number.
            </p>

            <label class="form-field">
              <span>City</span>
              <input v-model="form.city" name="city" autocomplete="address-level2" maxlength="80" />
            </label>

            <label class="form-field">
              <span>Property type</span>
              <select v-model="form.propertyType" name="propertyType">
                <option value="">Choose one</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </select>
            </label>

            <label class="form-field">
              <span>What would you like to discuss?</span>
              <select v-model="form.service" name="service">
                <option value="other">A project or general question</option>
                <option v-for="service in publishedServices" :key="service.slug" :value="service.slug">
                  {{ service.name }}
                </option>
              </select>
            </label>

            <label class="form-field form-field-wide">
              <span>Project details <span aria-hidden="true">*</span></span>
              <textarea
                v-model="form.project"
                name="project"
                rows="5"
                required
                maxlength="2000"
                aria-describedby="project-hint"
              />
              <span id="project-hint" class="field-hint">Up to 2,000 characters. Please don't include sensitive information.</span>
            </label>

            <label class="honeypot" aria-hidden="true">
              Leave this field empty
              <input v-model="form.website" name="website" tabindex="-1" autocomplete="off" />
            </label>
          </div>

          <p
            v-if="message"
            class="form-message"
            :class="`is-${messageType}`"
            :role="messageType === 'error' ? 'alert' : 'status'"
            aria-live="polite"
          >
            {{ message }}
          </p>

          <button class="button button-primary" type="submit" :disabled="submitting">
            {{ submitting ? "Sending…" : "Send project enquiry" }}
          </button>
          <p class="delivery-note">
            Form delivery is not configured yet, so this form will not send
            your details. Please call or email Tam directly instead.
          </p>
        </form>
      </section>

      <aside class="contact-direct" aria-labelledby="direct-heading">
        <p class="eyebrow">Prefer to reach out directly?</p>
        <h2 id="direct-heading">Talk with Tam.</h2>
        <a class="direct-link" :href="business.phoneLink">{{ business.phone }}</a>
        <a v-for="email in business.emails" :key="email" class="direct-link" :href="`mailto:${email}`">
          {{ email }}
        </a>
        <p>Based in {{ business.location }}.</p>
      </aside>
    </div>
  </main>
</template>
