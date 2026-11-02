# Launch checklist

Resolve these items with the business owner before publishing service claims or
enabling form delivery.

## Service scope

The public offer is general property help only. The business is not a licensed
contractor and does not offer work requiring a trade license. Do not advertise licensed HVAC,
electrical, or plumbing work or imply licensed partners without verification.

- [ ] Confirm the exact tasks currently offered for each service.
- [ ] Review applicable Texas and local licensing requirements for each task.
- [ ] Confirm which residential and commercial projects are in scope.
- [ ] Confirm whether work is performed directly or through any properly
      authorized provider. Do not imply a partner relationship unless verified.
- [ ] Only then move approved service content into `shared/data/services.ts`
      with `status: "published"`. Keep draft copy in
      `app/data/draft-service-previews.ts`.
- [ ] Review any claims about experience, credentials, insurance, warranties,
      pricing, availability, or scheduling before adding them.

The previous website mentions HVAC, electrical, plumbing, and remodeling.
Those are historical claims, not confirmation of current authority or scope.
Development-only previews are under `/dev-preview/services/:slug` and are
removed from production page routing and builds.

## Service area

- [ ] Confirm whether Benbrook is the only service location to publish.
- [ ] Review each additional city from the previous website before adding it.

The previous website lists Fort Worth, Benbrook, Dallas, Irving, Lake Worth,
White Settlement, Arlington, Garland, Grand Prairie, Burleson, Denton,
Cleburne, Weatherford, Midlothian, Granbury, Haltom City, Richardson, and
Euless. None beyond Benbrook is published pending confirmation.

## Contact form and business details

- [ ] Choose which listed email should receive website enquiries.
- [ ] Select and configure a form-delivery provider and its server-side
      credentials; no delivery provider is currently configured.
- [ ] Confirm whether the preferred contact method should be collected.
- [ ] Confirm public email addresses and the Nextdoor profile link remain
      current.
- [ ] Confirm the production domain before changing `NUXT_PUBLIC_SITE_URL`.

The server validates submissions, applies a basic per-process request limit,
and rejects the hidden honeypot field. Until a delivery provider is configured,
valid form submissions receive an honest unavailable response and are not
stored or sent.

## Artwork and launch review

- [ ] Confirm the existing mascot artwork is approved for the redesigned site.
- [ ] Confirm the utility-truck illustration, circular mascot badge, and
      project-conversation illustrations are approved.
- [ ] Supply genuine project photographs and approved customer reviews before
      adding recent-work or testimonial sections to the public site.
- [ ] Keep draft service illustrations in `app/assets/illustrations/drafts/`;
      do not publish them before confirming the depicted work.
- [ ] Review `docs/illustration-brief.md` if commissioning additional artwork.
- [ ] Check the production deployment supports Nuxt's Node server output and
      the `/api/contact` endpoint.
- [ ] Recheck page metadata, sitemap, mobile navigation, and contact links
      after business details are confirmed.
