import { getRequestIP, readBody, createError } from "h3";
import { getPublishedServices, services } from "#shared/data/services";
import type { ContactSubmission } from "#shared/types/contact";

const requestLog = new Map<string, number[]>();
const requestLimit = 5;
const requestWindow = 15 * 60 * 1000;

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function recordRequest(ip: string) {
  const now = Date.now();
  for (const [key, timestamps] of requestLog) {
    const recent = timestamps.filter(
      (timestamp) => now - timestamp < requestWindow,
    );
    if (recent.length) {
      requestLog.set(key, recent);
    } else {
      requestLog.delete(key);
    }
  }

  const recentRequests = requestLog.get(ip) ?? [];
  if (recentRequests.length >= requestLimit) {
    return false;
  }

  if (!requestLog.has(ip) && requestLog.size >= 500) {
    return false;
  }

  recentRequests.push(now);
  requestLog.set(ip, recentRequests);

  return true;
}

export default defineEventHandler(async (event) => {
  const ip = getRequestIP(event) || "unknown";
  if (!recordRequest(ip)) {
    throw createError({
      statusCode: 429,
      statusMessage: "Too many requests. Please call or email instead.",
    });
  }

  const body = await readBody<Partial<ContactSubmission>>(event);
  const name = readString(body?.name);
  const email = readString(body?.email);
  const phone = readString(body?.phone);
  const preferredContact = readString(body?.preferredContact);
  const city = readString(body?.city);
  const propertyType = readString(body?.propertyType);
  const service = readString(body?.service);
  const project = readString(body?.project);
  const website = readString(body?.website);
  const publishedSlugs = new Set(
    getPublishedServices(services).map((item) => item.slug),
  );

  if (website) {
    throw createError({ statusCode: 400, statusMessage: "Unable to submit this request." });
  }

  const validPropertyType = ["", "residential", "commercial"].includes(propertyType);
  const validService = service === "other" || publishedSlugs.has(service);
  const validPhone = phone === "" || /^[+\d().\-\s]{7,30}$/.test(phone);
  const validPreferredContact =
    preferredContact === "" ||
    (preferredContact === "email" && email !== "") ||
    (preferredContact === "phone" && phone !== "");

  if (
    name.length < 2 ||
    name.length > 80 ||
    email.length > 254 ||
    phone.length > 30 ||
    !validPreferredContact ||
    city.length > 80 ||
    service.length > 80 ||
    project.length === 0 ||
    project.length > 2000 ||
    website.length > 200 ||
    (!email && !phone) ||
    (email !== "" && !isEmail(email)) ||
    !validPhone ||
    !validPropertyType ||
    !validService
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: "Check the required fields and contact details, then try again.",
    });
  }

  throw createError({
    statusCode: 503,
    statusMessage:
      "Form delivery is not configured yet. Please call 817-823-8009 or email Tam directly.",
  });
});
