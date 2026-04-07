import type { Metadata } from "next";

import { CTAGrid } from "@/components/home/cta-grid";
import { HeroSection } from "@/components/home/hero-section";
import { ImpactCounter } from "@/components/home/impact-counter";
import { MissionSplit } from "@/components/home/mission-split";
import { PressBanner } from "@/components/home/press-banner";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Empowering children and women through education, nutrition, and sustainable livelihoods.",
  openGraph: {
    title: "Home | NGO NAME",
    description:
      "Empowering children and women through education, nutrition, and sustainable livelihoods.",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactCounter />
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="h-px w-full bg-outline-variant/40" />
      </div>
      <MissionSplit />
      <PressBanner />
      <CTAGrid />
      <div className="mb-16 flex justify-center px-8">
        <svg
          className="w-full max-w-lg text-outline-variant opacity-60"
          viewBox="0 0 400 20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10 Q50,0 100,10 T200,10 T300,10 T400,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>
      </div>
    </>
  );
}
