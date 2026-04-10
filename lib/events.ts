export interface EventItem {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  image: string;
  coverImage: string;
}

export const EVENTS: EventItem[] = [
  {
    id: "event-1",
    name: "Annual Harvest Festival",
    date: "2024-10-14",
    location: "Crafts Village Grounds",
    description:
      "Celebrating our organic farming initiative with community feasts, music, and artisan showcases.",
    image: "/assets/images/gallery/event-1.svg",
    coverImage: "/assets/images/gallery/event-1.svg",
  },
  {
    id: "event-2",
    name: "Skill Building Workshop",
    date: "2024-11-02",
    location: "Community Learning Hub",
    description:
      "Weekend intensive in digital literacy and vocational planning for youth entrepreneurs.",
    image: "/assets/images/gallery/event-2.svg",
    coverImage: "/assets/images/gallery/event-2.svg",
  },
  {
    id: "event-3",
    name: "Winter Relief Drive",
    date: "2024-12-11",
    location: "North Block Outreach Center",
    description:
      "Distribution of winter kits and health support led by volunteer field teams.",
    image: "/assets/images/gallery/event-3.svg",
    coverImage: "/assets/images/gallery/event-3.svg",
  },
];

// Backward-compatible alias
export const events = EVENTS;
