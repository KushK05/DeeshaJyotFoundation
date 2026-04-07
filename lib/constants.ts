export const NGO_NAME = process.env.NEXT_PUBLIC_NGO_NAME || "NGO NAME";
export const NGO_TAGLINE =
  process.env.NEXT_PUBLIC_NGO_TAGLINE ||
  "Every stitch, every smile - made with purpose.";

export const CONTACT_INFO = {
  email: process.env.NEXT_PUBLIC_NGO_EMAIL || "hello@ngoname.org",
  phone: process.env.NEXT_PUBLIC_NGO_PHONE || "+91 90000 00000",
  address:
    process.env.NEXT_PUBLIC_NGO_ADDRESS ||
    "123 Purpose Lane, Crafts Village, Kolkata, West Bengal 700001",
  registrationNumber:
    process.env.NEXT_PUBLIC_NGO_REG_NUMBER || "NGO/IND/2023/10294-B",
};

export const SOCIAL_LINKS = [
  { id: "instagram", label: "Instagram", href: "https://instagram.com" },
  { id: "facebook", label: "Facebook", href: "https://facebook.com" },
  { id: "x", label: "Twitter X", href: "https://x.com" },
  { id: "youtube", label: "YouTube", href: "https://youtube.com" },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
] as const;

export const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Donate", href: "/donate" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
] as const;

export const IMPACT_COUNTERS = [
  {
    id: "children",
    label: "Children Supported",
    value: 1200,
    suffix: "+",
    icon: "children",
  },
  {
    id: "women",
    label: "Women Trained",
    value: 400,
    suffix: "+",
    icon: "diversity_2",
  },
  {
    id: "years",
    label: "Years of Service",
    value: 15,
    suffix: "",
    icon: "history_edu",
  },
] as const;

export const DONOR_TESTIMONIALS = [
  {
    id: "donor-1",
    quote:
      "I've seen first-hand the impact of their livelihood programs. Giving here feels personal and direct.",
    author: "Anita Sharma",
    role: "Donor since 2021",
  },
  {
    id: "donor-2",
    quote:
      "Transparency and heart. That's why I choose to support this NGO every single month.",
    author: "David Miller",
    role: "Monthly Partner",
  },
  {
    id: "donor-3",
    quote:
      "Their team shares exactly where every rupee goes, and that trust means everything.",
    author: "Rina Das",
    role: "Recurring Donor",
  },
] as const;

export const VOLUNTEER_TESTIMONIALS = [
  {
    id: "vol-1",
    quote:
      "I came to teach, but I ended up learning more about resilience and community than I expected.",
    author: "Sarah J.",
    role: "Teaching Volunteer",
  },
  {
    id: "vol-2",
    quote:
      "Capturing these stories changed my perspective on what it means to give back.",
    author: "Marcus T.",
    role: "Documentation Volunteer",
  },
  {
    id: "vol-3",
    quote:
      "Seeing supplies reach those in need makes every weekend hour worth it.",
    author: "Elena G.",
    role: "Logistics Volunteer",
  },
] as const;

export const BASE_URL = "https://example.org";
