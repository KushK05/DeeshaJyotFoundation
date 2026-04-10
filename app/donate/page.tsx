import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { DonateForm } from "@/components/donate/donate-form";
import { DonorTrustBar } from "@/components/donate/donor-trust-bar";
import { Icon } from "@/components/ui/icon";
import { NGO_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support our mission with secure one-time or monthly donations and receive 80G tax benefits.",
  openGraph: {
    title: `Donate | ${NGO_INFO.name}`,
    description:
      "Support our mission with secure one-time or monthly donations and receive 80G tax benefits.",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function DonatePage() {
  return (
    <>
      <section className="relative flex min-h-[820px] items-center overflow-hidden">
        <Image
          src="/assets/images/donate-hero.svg"
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
                src="/assets/images/donate-impact-polaroid.svg"
                alt="Artisan weaving in workshop"
                width={600}
                height={600}
                className="aspect-square w-full rounded-md object-cover"
              />
              <p className="p-4 text-center font-headline italic text-on-surface-variant">
                Because of you, Kamala started her own workshop.
              </p>
            </div>

            <DonorTrustBar />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-surface-container px-6 py-24 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 md:flex-row">
          <div className="relative md:w-1/2">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-secondary-container/30 blur-3xl" />
            <Image
              src="/assets/images/donate-volunteer-cta.svg"
              alt="Group of volunteers planting together"
              width={720}
              height={520}
              className="relative z-10 rounded-2xl shadow-warm"
            />
          </div>

          <div className="space-y-6 md:w-1/2">
            <h2 className="font-headline text-4xl text-tertiary md:text-5xl">
              Donate Your Time Instead
            </h2>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              If you cannot donate financially right now, your time can still
              create lasting impact.
            </p>
            <Link
              href="/volunteer"
              className="focus-ring inline-flex items-center gap-2 text-lg font-bold text-secondary underline decoration-dotted"
            >
              Learn about volunteering
              <Icon name="arrow-right" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
