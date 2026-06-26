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
    id: "jyoti-sathe",
    name: "Jyoti Sathe",
    role: "Director",
    bio: "MA, MSW. Guiding the foundation's community programs and long-term vision.",
    image: "/assets/images/team/Director Jyoti Sathe ( MA, MSW) .jpeg",
    alt: "Portrait of Director Jyoti Sathe",
  },
  {
    id: "sunita-namdev-sathe",
    name: "Sunita Namdev Sathe",
    role: "Director",
    bio: "Supporting grassroots outreach and day-to-day program coordination.",
    image: "/assets/images/team/Director - Sunita Namdev Sathe.jpeg",
    alt: "Portrait of Director Sunita Namdev Sathe",
  },
  {
    id: "madhukar-waman-borade",
    name: "Madhukar Waman Borade",
    role: "Board Member",
    bio: "Contributing governance support and community leadership.",
    image: "/assets/images/team/Board Member - Madhukar Waman Borade.jpeg",
    alt: "Portrait of Board Member Madhukar Waman Borade",
  },
  {
    id: "sunny-praksh-sable",
    name: "Sunny Praksh Sable",
    role: "Board Member",
    bio: "Helping strengthen partnerships and local implementation.",
    image: "/assets/images/team/Board Member - Sunny Praksh Sable.jpeg",
    alt: "Portrait of Board Member Sunny Praksh Sable",
  },
  {
    id: "akash-sathe",
    name: "Akash Sathe",
    role: "Trust Member",
    bio: "Supporting the trust's operations and community initiatives.",
    image: "/assets/images/team/Trust Member - Akash Sathe.jpeg",
    alt: "Portrait of Trust Member Akash Sathe",
  },
  {
    id: "sidharth-mahadev-gadvir",
    name: "Sidharth Mahadev Gadvir",
    role: "Member",
    bio: "Contributing to field activities and community engagement.",
    image: "/assets/images/team/Member- Sidharth Mahadev Gadvir.jpeg",
    alt: "Portrait of Member Sidharth Mahadev Gadvir",
  },
];

export const VALUE_ITEMS: ValueItem[] = [
  {
    id: "dignity",
    icon: "hand",
    title: "Dignity",
    description:
      "We believe every human being deserves self-respect and the power of choice.",
  },
  {
    id: "community",
    icon: "group",
    title: "Community",
    description:
      "Change does not happen in isolation. We build deep-rooted support networks.",
  },
  {
    id: "opportunity",
    icon: "spark",
    title: "Opportunity",
    description:
      "We open doors through education, training, and resources for tomorrow.",
  },
];

// Backward-compatible aliases
export const timeline = ABOUT_TIMELINE;
export const teamMembers = TEAM_MEMBERS;
export const values = VALUE_ITEMS;
