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
    name: "Best Social Worker Recognition",
    date: "2026-01-22",
    location: "Wockhardt Hospital, Mumbai",
    description:
      "A team of doctors from Wockhardt Hospital honored Deesha Jyot Foundation with a Best Social Worker award.",
    image: "/assets/images/gallery/best-social-worker-award-wockhardt.png",
    coverImage: "/assets/images/gallery/best-social-worker-award-wockhardt.png",
  },
  {
    id: "event-2",
    name: "Annual Day Chief Guest Invitation",
    date: "2026-03-15",
    location: "Marsaari School, Mankhurd",
    description:
      "Foundation leadership attended the school annual day as chief guest and recognized student achievements.",
    image: "/assets/images/gallery/annual-day-chief-guest-marsaari-school.png",
    coverImage: "/assets/images/gallery/annual-day-chief-guest-marsaari-school.png",
  },
  {
    id: "event-3",
    name: "Shivaji Jayanti Celebration",
    date: "2026-02-19",
    location: "Community Grounds, Mankhurd",
    description:
      "Women and youth from the community came together for a cultural program honoring Shivaji Jayanti.",
    image: "/assets/images/gallery/shivaji-jayanti-celebration.png",
    coverImage: "/assets/images/gallery/shivaji-jayanti-celebration.png",
  },
  {
    id: "event-4",
    name: "Women's Community Gathering",
    date: "2026-03-08",
    location: "Deesha Jyot Center, Mankhurd",
    description:
      "A large neighborhood gathering of women focused on participation, leadership, and shared community goals.",
    image: "/assets/images/gallery/women-community-gathering.png",
    coverImage: "/assets/images/gallery/women-community-gathering.png",
  },
];

// Backward-compatible alias
export const events = EVENTS;
