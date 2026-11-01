import type { Service } from "#shared/data/services";

export const draftServicePreviews: Service[] = [
  {
    slug: "property-maintenance",
    name: "Property maintenance",
    summary: "A draft page for routine property upkeep.",
    description:
      "A place to describe specific maintenance tasks after the owner has confirmed the work they offer and the applicable requirements.",
    scopeNote:
      "Do not publish until the exact tasks and any applicable licensing requirements are reviewed.",
    status: "draft",
    candidateTasks: [
      "Define the specific upkeep tasks offered.",
      "Confirm residential and commercial project boundaries.",
      "Review any requirements that apply to each task.",
    ],
    faqs: [
      {
        question: "Can I book a maintenance visit from this page?",
        answer:
          "No. This is an unpublished preview. Ask Tam directly about a specific request.",
      },
    ],
  },
  {
    slug: "remodeling",
    name: "Remodeling",
    summary: "A draft page for improvement projects.",
    description:
      "A place to outline a confirmed project scope, the type of properties it suits, and how the first conversation works.",
    scopeNote:
      "Do not publish until each proposed task and any applicable licensing requirements are reviewed.",
    status: "draft",
    candidateTasks: [
      "Describe the types of projects the owner confirms.",
      "Clarify project boundaries before accepting enquiries.",
      "Review requirements for each proposed task.",
    ],
    faqs: [
      {
        question: "Which remodeling projects are offered?",
        answer:
          "The project scope has not been confirmed for publication. Contact Tam to discuss a specific request.",
      },
    ],
  },
  {
    slug: "heating-cooling",
    name: "Heating and cooling",
    summary: "Development-only service page preview.",
    description:
      "This preview is only a layout placeholder. No heating or cooling work is represented as currently offered.",
    scopeNote:
      "Draft only. Confirm the exact scope and any required credentials before publication.",
    status: "draft",
    candidateTasks: [
      "Historical site claim: general air-conditioning service.",
      "Historical site claim: heating and heat-pump service.",
      "Historical site claim: refrigerant, installation, and duct work.",
    ],
    faqs: [
      {
        question: "Does this preview mean heating or cooling work is available?",
        answer:
          "No. It is a private draft based on historical website content, which has not been confirmed.",
      },
    ],
  },
  {
    slug: "electrical",
    name: "Electrical",
    summary: "Development-only service page preview.",
    description:
      "This preview is only a layout placeholder. No electrical work is represented as currently offered.",
    scopeNote:
      "Draft only. Confirm the exact scope and any required credentials before publication.",
    status: "draft",
    candidateTasks: [
      "Historical site claim: general electrical service and fault testing.",
      "Historical site claim: rewiring and electrical panels.",
      "Historical site claim: fixtures and outlets.",
    ],
    faqs: [
      {
        question: "Can I request electrical work from this page?",
        answer:
          "No. This unpublished preview is not an offer of electrical services. The owner must first confirm the scope and requirements.",
      },
    ],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    summary: "Development-only service page preview.",
    description:
      "This preview is only a layout placeholder. No plumbing work is represented as currently offered.",
    scopeNote:
      "Draft only. Confirm the exact scope and any required credentials before publication.",
    status: "draft",
    candidateTasks: [
      "Historical site claim: general plumbing service.",
      "Historical site claim: slab leaks, replumbing, and repiping.",
      "Historical site claim: water-heater installation.",
    ],
    faqs: [
      {
        question: "Can I request plumbing work from this page?",
        answer:
          "No. This unpublished preview is not an offer of plumbing services. The owner must first confirm the scope and requirements.",
      },
    ],
  },
];
