import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/assets/images/hero-home.svg"
        alt="Children and women in a warm community gathering"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-on-surface/45 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-headline text-5xl leading-tight text-on-primary-container drop-shadow-sm md:text-7xl">
          Where Every Child Learns
          <br />
          and Every Woman Leads
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-surface/90 md:text-lg">
          Empowering communities through nutrition, education, and livelihood
          programs that are designed to last.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg">
            <Link href="/donate">Support Our Mission</Link>
          </Button>
          <Button variant="ghost" size="lg">
            <Link href="/about">See Our Work</Link>
          </Button>
        </div>
      </div>

      <a
        href="#impact"
        className="focus-ring absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce rounded-full border border-surface/40 bg-surface/10 p-2 text-surface"
        aria-label="Scroll to impact section"
      >
        <Icon name="chevron-down" className="h-6 w-6" />
      </a>
    </section>
  );
}
