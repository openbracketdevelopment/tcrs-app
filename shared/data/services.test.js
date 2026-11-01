import assert from "node:assert/strict";
import { test } from "node:test";
import { getDraftServices, getPublishedServices } from "./services.ts";

test("service filtering includes only approved publication status", () => {
  const items = [
    { slug: "approved", status: "published" },
    { slug: "pending", status: "draft" },
  ];

  assert.deepEqual(
    getPublishedServices(items).map((service) => service.slug),
    ["approved"],
  );
  assert.deepEqual(
    getDraftServices(items).map((service) => service.slug),
    ["pending"],
  );
});
