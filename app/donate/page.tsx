import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DonateForm } from "@/components/donate/DonateForm";
import { DonorTrustBar } from "@/components/donate/DonorTrustBar";
import { Button } from "@/components/ui/button";
import { NGO_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Donate | ${NGO_NAME}`,
  description:
    "Support children, women, and families through transparent one-time or monthly donations.",
  openGraph: {
    title: `Donate | ${NGO_NAME}`,
    description:
      "Support children, women, and families through transparent one-time or monthly donations.",
    images: ["/og-image.jpg"],
  },
};

export default function DonatePage() {
  return (
    <>
      <section className="relative flex h-[760px] items-center overflow-hidden">
        <Image
          src="/assets/images/donate/donate-hero.svg"
          alt="Smiling child looking toward the camera"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-on-surface/65 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">
          <h1 className="mb-4 font-headline text-5xl font-bold leading-tight text-surface md:text-7xl">
            Your Generosity
            <br />
            <span className="italic text-primary-fixed">Changes Everything.</span>
          </h1>
          <p className="max-w-2xl text-lg text-surface/90 md:text-xl">
            Every contribution is a thread in the tapestry of a brighter future. We believe in collective compassion to heal and empower.
          </p>
        </div>
      </section>

      <DonateForm />
      <DonorTrustBar />

      <section className="mt-16 bg-surface-container px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-44 w-44 rounded-full bg-secondary-container/40 blur-3xl" />
            <Image
              src="/assets/images/donate/volunteer-cta.svg"
              alt="Volunteers planting trees together"
              width={760}
              height={520}
              className="relative z-10 rounded-2xl"
            />
          </div>
          <div>
            <h2 className="mb-4 font-headline text-4xl text-tertiary md:text-5xl">
              Can't donate money?
              <br />
              <span className="text-on-surface">Donate your time instead.</span>
            </h2>
            <p className="mb-6 text-lg text-on-surface-variant">
              Join our volunteer network and contribute your skills to education, logistics, documentation, and field work.
            </p>
            <Link href="/volunteer">
              <Button variant="secondary">Donate Your Time Instead</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
