# Tam's Commercial & Residential Services

The public website for Tam's owner-operated residential and commercial service
business, based in Benbrook, Texas. It introduces the business, provides
contact information, and presents only services and locations confirmed for
publication.

Built with Nuxt 4, Vue 3, and TypeScript. Public information pages are
prerendered in the Nuxt Node build; the contact API runs on the Nuxt server.

## Requirements

- Node.js 22.22.3 or later in the 22.x line, 24.15.0 or later in the 24.x
  line, or 26+
- npm

## Setup and development

```bash
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and preview

Build the production app and start its local preview:

```bash
npm run build
npm run preview
```

The production server can also be started with:

```bash
node .output/server/index.mjs
```

Deploy the Nuxt Node output to a Node-compatible host. The public pages are
prerendered, while `/api/contact` requires a running server. Static generation
is available with `npm run generate`, but a static-only host cannot run the
contact API; do not use that output if a functioning form endpoint is required.

The contact API validates input, limits requests per server process, and
rejects its honeypot field. Email delivery is not configured, so valid
submissions receive an explicit unavailable response and are not stored or
sent. Until a delivery provider and recipient are selected, use the displayed
phone and email links.

## Updating content

- Edit the public contact details and Nextdoor link in `shared/data/business.ts`.
- Edit the confirmed service-area list in the same file.
- Keep draft concepts in `app/data/draft-service-previews.ts` only. Once the
  owner confirms a service's exact scope and applicable requirements, move
  its approved content into `shared/data/services.ts` with `status: "published"`.
- Published service cards and contact-form options use
  `getPublishedServices()`. Published service pages, prerender routes, and the
  sitemap are derived from this list.
- Development-only service previews are in `app/data/draft-service-previews.ts`.
  Their routes are removed in production by `nuxt.config.ts`; their content is
  not part of the production route manifest.
- Review `docs/launch-checklist.md` before launch and
  `docs/illustration-brief.md` before creating additional artwork.

Set `NUXT_PUBLIC_SITE_URL` to the production domain when building. Copy
`.env.example` for local configuration and replace its placeholder value;
never put provider credentials in browser-visible variables.

## Tests

Run the service publication-filter test:

```bash
npm run test:unit
```

Start the development server in one terminal, then run:

```bash
npm run test:e2e
```

Cypress checks public navigation and assets, draft-service publication, form
validation, and the contact API's unavailable-delivery response.
