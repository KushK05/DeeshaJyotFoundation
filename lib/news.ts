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
    headline: "How local initiatives are redefining global welfare standards.",
    publication: "The Guardian",
    date: "2024-10-03",
    year: 2024,
    excerpt:
      "A deep report on the NGO's model for lasting grassroots support structures and local leadership.",
    externalUrl: "https://example.com/guardian-story",
    imageUrl: "/assets/images/news/guardian-2024.svg",
  },
  {
    id: "news-2",
    headline: "Voices of Resilience: The Women of the Craft Center.",
    publication: "Le Monde",
    date: "2024-08-14",
    year: 2024,
    excerpt:
      "An intimate portrait of women-led empowerment through craft, identity, and collective income.",
    externalUrl: "https://example.com/le-monde-story",
    imageUrl: "/assets/images/news/lemonde-2024.svg",
  },
  {
    id: "news-3",
    headline: "The Education Revolution in Rural Heartland.",
    publication: "NY Times",
    date: "2024-06-22",
    year: 2024,
    excerpt:
      "How hybrid education delivery is enabling quality learning in hard-to-reach communities.",
    externalUrl: "https://example.com/nyt-story",
    imageUrl: "/assets/images/news/nyt-2024.svg",
  },
  {
    id: "news-4",
    headline: "Sustainability or Charity? The NGO Hybrid Model.",
    publication: "The Economist",
    date: "2024-03-02",
    year: 2024,
    excerpt:
      "A systems-level look at livelihoods-first approaches and their long-term economic effects.",
    externalUrl: "https://example.com/economist-story",
    imageUrl: "/assets/images/news/economist-2024.svg",
  },
  {
    id: "news-5",
    headline: "Traditional Craft Meets Modern Markets.",
    publication: "Vogue India",
    date: "2024-01-20",
    year: 2024,
    excerpt:
      "Rural artisans are reaching premium markets while retaining traditional design language.",
    externalUrl: "https://example.com/vogue-story",
    imageUrl: "/assets/images/news/vogue-2024.svg",
  },
  {
    id: "news-6",
    headline: "A Beacon of Hope: 20 Years of Grassroots Impact.",
    publication: "The Hindu",
    date: "2023-12-11",
    year: 2023,
    excerpt:
      "A retrospective on growth from one village initiative to a broad multi-state impact network.",
    externalUrl: "https://example.com/the-hindu-story",
    imageUrl: "/assets/images/news/hindu-2023.svg",
  },
  {
    id: "news-7",
    headline: "Why Community-Led Design Is Working.",
    publication: "Mint",
    date: "2022-09-18",
    year: 2022,
    excerpt:
      "Policy experts discuss the NGO's co-created programs with local women and youth leaders.",
    externalUrl: "https://example.com/mint-story",
    imageUrl: "/assets/images/news/mint-2022.svg",
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
