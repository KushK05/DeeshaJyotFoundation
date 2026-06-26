import type { Metadata } from "next";
import Image from "next/image";

import { DonateForm } from "@/components/donate/donate-form";
import { NGO_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support our mission through UPI donations.",
  openGraph: {
    title: `Donate | ${NGO_INFO.name}`,
    description: "Support our mission through UPI donations.",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function DonatePage() {
  return (
    <>
      <section className="relative flex min-h-[820px] items-center overflow-hidden">
        <Image
          src="/assets/images/donate-hero.png"
          alt="Smiling child portrait representing donation impact"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-on-surface/60 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
          <h1 className="font-headline text-5xl font-bold leading-tight text-surface md:text-7xl">
            Your Generosity
            <br />
            <span className="italic text-primary-fixed">Changes Everything.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-surface/90">
            Every contribution is a thread in a brighter future for children and
            women across our communities.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <DonateForm />
        </div>
        <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
          <div className="space-y-8">
            <div className="rounded-lg bg-surface-container-high p-1 shadow-warm">
              <Image
                src="/assets/images/donate-impact-polaroid.jpeg"
                alt="Artisan weaving in workshop"
                width={600}
                height={600}
                className="aspect-square w-full rounded-md object-cover"
              />
              <p className="p-4 text-center font-headline italic text-on-surface-variant">
                Because of you, Children have access to basic education.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
