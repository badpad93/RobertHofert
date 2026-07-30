import { z } from "zod";
import { propertyTypes } from "@/lib/site";

const requiredString = (label: string, max = 300) =>
  z
    .string({ required_error: `${label} is required.` })
    .trim()
    .min(1, `${label} is required.`)
    .max(max, `${label} is too long.`);

export const contactSchema = z.object({
  // Required
  fullName: requiredString("Full name", 120),
  businessName: requiredString("Business or property name", 160),
  email: requiredString("Email", 200).email("Enter a valid email address."),
  phone: requiredString("Phone", 40).regex(
    /^[0-9()+\-.\s]{7,40}$/,
    "Enter a valid phone number.",
  ),
  propertyType: z.enum(propertyTypes, {
    errorMap: () => ({ message: "Select a property type." }),
  }),
  propertyAddress: requiredString("Property address", 200),
  city: requiredString("City", 100),
  state: requiredString("State", 60),
  zip: requiredString("ZIP code", 12).regex(
    /^[0-9A-Za-z\s-]{3,12}$/,
    "Enter a valid ZIP or postal code.",
  ),
  approxUsers: requiredString("Approximate number of users", 60),
  placementArea: requiredString("Preferred placement area", 200),
  message: requiredString("Message", 2000).min(
    10,
    "Please provide a little more detail (at least 10 characters).",
  ),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Please confirm consent to be contacted.",
    }),
  }),

  // Optional
  website: z.string().trim().max(200).optional().or(z.literal("")),
  operatingHours: z.string().trim().max(160).optional().or(z.literal("")),
  existingService: z.string().trim().max(200).optional().or(z.literal("")),
  bestTime: z.string().trim().max(120).optional().or(z.literal("")),
  referralSource: z.string().trim().max(160).optional().or(z.literal("")),

  // Honeypot — accepted by the schema so bots do not learn it is a trap;
  // the API route silently drops any submission where this is non-empty.
  company_website_url: z.string().max(200).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const contactFieldLabels: Record<string, string> = {
  fullName: "Full name",
  businessName: "Business or property name",
  email: "Email",
  phone: "Phone",
  propertyType: "Property type",
  propertyAddress: "Property address",
  city: "City",
  state: "State",
  zip: "ZIP code",
  approxUsers: "Approximate number of users",
  placementArea: "Preferred placement area",
  message: "Message",
  website: "Property website",
  operatingHours: "Operating hours",
  existingService: "Existing vending or food service",
  bestTime: "Best time to contact",
  referralSource: "How they heard about RVRH",
};
