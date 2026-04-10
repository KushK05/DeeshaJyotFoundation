export interface VolunteerRole {
  id: string;
  title: string;
  icon: string;
  description: string;
  commitment: string;
}

export const VOLUNTEER_ROLES: VolunteerRole[] = [
  {
    id: "teaching-assistant",
    title: "Teaching Assistant",
    icon: "school",
    description:
      "Support educators in bridge schools with elementary literacy and numeracy.",
    commitment: "4-6 Hours / Week",
  },
  {
    id: "photography-documentation",
    title: "Photography & Documentation",
    icon: "photo_camera",
    description:
      "Capture stories, events, and milestones through photos and short written notes.",
    commitment: "Event Based",
  },
  {
    id: "logistics-support",
    title: "Logistics Support",
    icon: "local_shipping",
    description:
      "Coordinate supplies for community pantries, outreach drives, and learning kits.",
    commitment: "Weekend Focus",
  },
  {
    id: "digital-marketing",
    title: "Digital & Marketing Help",
    icon: "campaign",
    description:
      "Contribute to social media, campaigns, content calendars, and storytelling assets.",
    commitment: "Remote Friendly",
  },
  {
    id: "fundraising-events",
    title: "Fundraising & Events",
    icon: "celebration",
    description:
      "Help plan local events and mobilize supporters through community-led campaigns.",
    commitment: "Flexible",
  },
];

export interface VolunteerTestimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export const VOLUNTEER_TESTIMONIALS: VolunteerTestimonial[] = [
  {
    id: "volunteer-1",
    quote:
      "I came to teach, but ended up learning what real resilience looks like.",
    author: "Sarah J.",
    role: "Teaching Volunteer",
  },
  {
    id: "volunteer-2",
    quote:
      "Documenting field stories has changed how I understand impact and dignity.",
    author: "Marcus T.",
    role: "Documentation Volunteer",
  },
  {
    id: "volunteer-3",
    quote:
      "Logistics days are intense, but seeing relief reach families makes it worth every hour.",
    author: "Elena G.",
    role: "Logistics Volunteer",
  },
];

// Backward-compatible aliases
export const volunteerRoles = VOLUNTEER_ROLES;
export const volunteerTestimonials = VOLUNTEER_TESTIMONIALS;
