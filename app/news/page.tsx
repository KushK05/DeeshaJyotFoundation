import type { Metadata } from "next";

import { NewsPageContent } from "@/components/news/news-page-content";
import { NGO_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "News",
  description:
    "Read media coverage, press clippings, and updates on our community impact work.",
  openGraph: {
    title: `News | ${NGO_INFO.name}`,
    description:
      "Read media coverage, press clippings, and updates on our community impact work.",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function NewsPage() {
  return <NewsPageContent />;
}
