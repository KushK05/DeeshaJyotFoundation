import type { Metadata } from "next";

import { GalleryTabs } from "@/components/gallery/gallery-tabs";
import { NGO_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore photos, videos, and event highlights from our programs and community milestones.",
  openGraph: {
    title: `Gallery | ${NGO_INFO.name}`,
    description:
      "Explore photos, videos, and event highlights from our programs and community milestones.",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:px-8">
      <header className="mb-16 text-center">
        <span className="mb-4 block text-sm uppercase tracking-[0.2em] text-primary">
          Capturing Moments
        </span>
        <h1 className="font-headline text-5xl leading-tight text-on-surface md:text-7xl">
          Our Human Anthology
        </h1>
        <div className="mx-auto mt-6 h-1 w-32 rounded-full bg-primary-container/30" />
      </header>

      <GalleryTabs />
    </section>
  );
}
