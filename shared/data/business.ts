export const business = {
  name: "Tam's Commercial & Residential Services",
  shortName: "Tam's Services",
  phone: "817-823-8009",
  phoneLink: "tel:+18178238009",
  emails: ["elite_works@hotmail.com", "phamt@live.com"],
  location: "Benbrook, Texas",
  nextdoor:
    "https://nextdoor.com/pages/tam-pham-tams-management-co-plumbing-electrical-hvac-fort-worth-tx/?init_source=org_pages&utm_campaign=1702364895672",
} as const;

export const serviceAreas = [
  { name: "Benbrook, Texas", status: "published" },
] as const;

export function getPublishedServiceAreas() {
  return serviceAreas.filter((area) => area.status === "published");
}
