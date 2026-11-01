export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  summary: string;
  description: string;
  scopeNote: string;
  status: "published" | "draft";
  candidateTasks?: string[];
  faqs: ServiceFaq[];
}

export const services: Service[] = [];

export function getPublishedServices(items: readonly Service[] = services) {
  return items.filter((service) => service.status === "published");
}

export function getDraftServices(items: readonly Service[] = services) {
  return items.filter((service) => service.status === "draft");
}
