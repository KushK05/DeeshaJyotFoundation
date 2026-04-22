export const NGO_INFO = {
  name: process.env.NEXT_PUBLIC_NGO_NAME || "Deesha Jyot Foundation",
  tagline:
    process.env.NEXT_PUBLIC_NGO_TAGLINE ||
    "Every stitch, every smile — made with purpose.",
  email: process.env.NEXT_PUBLIC_NGO_EMAIL || "hello@ngoname.org",
  phone: process.env.NEXT_PUBLIC_NGO_PHONE || "+91 98765 43210",
  address:
    process.env.NEXT_PUBLIC_NGO_ADDRESS ||
    "123 Purpose Lane, Crafts Village, Kolkata 700001",
  registrationNumber:
    process.env.NEXT_PUBLIC_NGO_REG_NUMBER || "NGO/IND/2023/10294-B",
  eightyGBadge: "80G Tax Exemption",
  trustCopy:
    "All donations are eligible for Section 80G tax benefit. Receipts are shared instantly over email.",
  social: {
    instagram: "https://www.instagram.com/deesha_jyot_foundation/",
    facebook: "https://facebook.com",
    twitter: "https://x.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },
};

export const NGO_NAME = NGO_INFO.name;
export const NGO_TAGLINE = NGO_INFO.tagline;
export const CONTACT_INFO = {
  email: NGO_INFO.email,
  phone: NGO_INFO.phone,
  address: NGO_INFO.address,
  registrationNumber: NGO_INFO.registrationNumber,
};

export const SOCIAL_LINKS = [
  { id: "instagram", label: "Instagram", href: NGO_INFO.social.instagram },
  { id: "facebook", label: "Facebook", href: NGO_INFO.social.facebook },
  { id: "x", label: "Twitter X", href: NGO_INFO.social.twitter },
  { id: "youtube", label: "YouTube", href: NGO_INFO.social.youtube },
  { id: "linkedin", label: "LinkedIn", href: NGO_INFO.social.linkedin },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
] as const;

export const FOOTER_QUICK_LINKS = [
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Donate", href: "/donate" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
] as const;

export const FOOTER_LINKS = FOOTER_QUICK_LINKS;

export const IMPACT_COUNTERS = [
  {
    key: "children",
    label: "Children Supported",
    value: 1200,
    suffix: "+",
    icon: "child",
    borderColor: "primary",
  },
  {
    key: "women",
    label: "Women Trained",
    value: 400,
    suffix: "+",
    icon: "women",
    borderColor: "secondary",
  },
  {
    key: "years",
    label: "Years of Service",
    value: 15,
    suffix: "",
    icon: "history",
    borderColor: "tertiary",
  },
] as const;

export const DONATION_PRESETS = [
  {
    amount: 500,
    impact: "Feeds a child for one month",
  },
  {
    amount: 1000,
    impact: "Provides school kits for two children",
  },
  {
    amount: 2500,
    impact: "Supports one women-led craft batch",
  },
  {
    amount: 5000,
    impact: "Supports medical aid for one family",
  },
] as const;

export const DONOR_QUOTES = [
  {
    id: "anita",
    quote:
      "I’ve seen first-hand the impact of their livelihood programs. Giving here feels personal and direct.",
    author: "Anita Sharma",
    role: "Donor since 2021",
  },
  {
    id: "david",
    quote:
      "Transparency and heart. That's why I choose to support this NGO every single month.",
    author: "David Miller",
    role: "Monthly Partner",
  },
  {
    id: "riya",
    quote:
      "Their updates are honest and grounded. I know exactly where my support goes.",
    author: "Riya Basu",
    role: "Recurring Donor",
  },
] as const;

export const DONOR_TESTIMONIALS = DONOR_QUOTES;

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.org";
