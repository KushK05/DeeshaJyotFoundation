export interface NewsItem {
  id: string;
  headline: string;
  publication: string;
  date: string;
  year: number;
  excerpt: string;
  externalUrl: string;
  imageUrl: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "news-1",
    headline: "Ahilyadevi Holkar Jayanti Celebrated in Mankhurd",
    publication: "Local Marathi Press",
    date: "2026-03-26",
    year: 2026,
    excerpt:
      "Disha Jyot Foundation marked the birth anniversary of Ahilyadevi Holkar with youth-led activities focused on social awareness and girls' safety.",
    externalUrl: "/assets/images/news/ahilyadevi-holkar-jayanti-mankhurd.jpeg",
    imageUrl: "/assets/images/news/ahilyadevi-holkar-jayanti-mankhurd.jpeg",
  },
  {
    id: "news-2",
    headline: "Women's Counseling Center Opens in Mankhurd",
    publication: "Lokmat",
    date: "2026-03-08",
    year: 2026,
    excerpt:
      "Launched on International Women's Day, the center offers counseling, skills training, education support, and livelihood guidance for women.",
    externalUrl: "/assets/images/news/women-counseling-center-lokmat.jpeg",
    imageUrl: "/assets/images/news/women-counseling-center-lokmat.jpeg",
  },
  {
    id: "news-3",
    headline: "Women's Dialogue and Counseling Center Begins Operations",
    publication: "Punya Nagari",
    date: "2026-03-02",
    year: 2026,
    excerpt:
      "A dedicated women-focused space in Mankhurd now provides mental health support, leadership development, and access to training and jobs.",
    externalUrl: "/assets/images/news/women-counseling-center-punyanagari.jpeg",
    imageUrl: "/assets/images/news/women-counseling-center-punyanagari.jpeg",
  },
  {
    id: "news-4",
    headline: "Disability Conference Held with Strong Participation",
    publication: "Punya Nagari",
    date: "2026-03-26",
    year: 2026,
    excerpt:
      "Around 100 participants joined a disability rights event where officials shared government schemes and the foundation announced follow-up support camps.",
    externalUrl: "/assets/images/news/disability-conference-mankhurd.jpeg",
    imageUrl: "/assets/images/news/disability-conference-mankhurd.jpeg",
  },
  {
    id: "news-5",
    headline: "Cultural Program Organized in Marginalized Settlements",
    publication: "Punya Nagari",
    date: "2025-02-18",
    year: 2025,
    excerpt:
      "Over 300 women and youth attended a community program highlighting education, health, safety, and women-led collective empowerment.",
    externalUrl: "/assets/images/news/cultural-program-marginalized-settlements.jpeg",
    imageUrl: "/assets/images/news/cultural-program-marginalized-settlements.jpeg",
  },
  {
    id: "news-6",
    headline: "Mahatma Jyotiba Phule Jayanti Observed in Community Study Circles",
    publication: "Local Marathi Press",
    date: "2026-03-26",
    year: 2026,
    excerpt:
      "The foundation celebrated Phule Jayanti and used neighborhood study circles to spread awareness of social reform and inclusive education.",
    externalUrl: "/assets/images/news/mahatma-jyotiba-phule-jayanti.jpeg",
    imageUrl: "/assets/images/news/mahatma-jyotiba-phule-jayanti.jpeg",
  },
];

export const NEWS_YEARS = [
  "All",
  ...Array.from(new Set(NEWS_ITEMS.map((item) => item.year))).sort((a, b) => b - a),
] as const;

// Backward-compatible aliases
export type NewsClipping = NewsItem;
export const newsClippings = NEWS_ITEMS;
export const newsYears = NEWS_YEARS;
