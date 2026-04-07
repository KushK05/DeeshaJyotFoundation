export interface VolunteerRole {
  id: string;
  title: string;
  description: string;
  commitment: string;
  icon: string;
}

export const volunteerRoles: VolunteerRole[] = [
  {
    id: "teaching-assistant",
    title: "Teaching Assistant",
    description:
      "Support local educators in bridge schools, focusing on literacy and numeracy.",
    commitment: "4-6 Hours / Week",
    icon: "school",
  },
  {
    id: "photography-documentation",
    title: "Photography & Documentation",
    description:
      "Capture stories and field updates through photographs, interviews, and notes.",
    commitment: "Event Based",
    icon: "camera",
  },
  {
    id: "logistics-support",
    title: "Logistics Support",
    description:
      "Coordinate delivery of kits, supplies, and event resources across locations.",
    commitment: "Weekend Focus",
    icon: "truck",
  },
  {
    id: "digital-marketing-help",
    title: "Digital & Marketing Help",
    description:
      "Assist with social content, campaign landing pages, and donor communication.",
    commitment: "Remote Friendly",
    icon: "digital",
  },
  {
    id: "fundraising-events",
    title: "Fundraising & Events",
    description:
      "Support outreach campaigns, donor events, and community fundraising drives.",
    commitment: "Flexible",
    icon: "fundraising",
  },
];

export const volunteerTestimonials = [
  {
    id: "sarah",
    quote:
      "I came to teach, but I ended up learning so much more about resilience and community.",
    author: "Sarah J.",
    role: "Volunteer",
  },
  {
    id: "marcus",
    quote:
      "Capturing these stories has changed my perspective on what it means to give back.",
    author: "Marcus T.",
    role: "Photographer",
  },
  {
    id: "elena",
    quote:
      "Seeing supplies reach families makes every weekend hour worth it.",
    author: "Elena G.",
    role: "Logistics Support",
  },
] as const;
