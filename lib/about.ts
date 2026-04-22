export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
}

export interface ValueItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const ABOUT_TIMELINE: TimelineItem[] = [
  {
    year: "2012",
    title: "The First Stitch",
    description:
      "In a small community center, three volunteers began teaching tailoring to women. It started as a skill-share and became a movement for financial independence.",
    image: "/assets/images/about/timeline-2012.jpeg",
    alt: "Women learning tailoring in a community classroom",
  },
  {
    year: "2016",
    title: "Classrooms Without Borders",
    description:
      "We expanded into education, launching our first mobile school to reach children in remote rural areas who had never stepped into a classroom.",
    image: "/assets/images/about/timeline-2016.jpeg",
    alt: "Children learning outdoors in a rural village",
  },
  {
    year: "2021",
    title: "A Global Community",
    description:
      "During a global crisis, we strengthened our community networks, proving that when we stand together, we can weather any storm.",
    image: "/assets/images/about/timeline-2021.jpeg",
    alt: "Community members standing together in a circle",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "elias-thorne",
    name: "Jyoti Sathe",
    role: "Founder",
    bio: "Driven by community-led innovation since 2012.",
    image: "/assets/images/team/founder.png",
    alt: "Portrait of Jyoti Sathe",
  },
];

export const VALUE_ITEMS: ValueItem[] = [
  {
    id: "dignity",
    icon: "handshake",
    title: "Dignity",
    description:
      "We believe every human being deserves self-respect and the power of choice.",
  },
  {
    id: "community",
    icon: "groups",
    title: "Community",
    description:
      "Change does not happen in isolation. We build deep-rooted support networks.",
  },
  {
    id: "opportunity",
    icon: "auto_awesome",
    title: "Opportunity",
    description:
      "We open doors through education, training, and resources for tomorrow.",
  },
];

// Backward-compatible aliases
export const timeline = ABOUT_TIMELINE;
export const teamMembers = TEAM_MEMBERS;
export const values = VALUE_ITEMS;
