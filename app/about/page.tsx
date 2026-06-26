import type { Metadata } from "next";
import Image from "next/image";

import { teamMembers, timeline, values } from "@/lib/about";
import { Icon } from "@/components/ui/icon";
import { NGO_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story, values, and team behind our grassroots community impact.",
  openGraph: {
    title: `About | ${NGO_INFO.name}`,
    description:
      "Learn the story, values, and team behind our grassroots community impact.",
    images: [{ url: "/og-image.jpg" }],
  },
};

const valueIcons: Record<string, Parameters<typeof Icon>[0]["name"]> = {
  hand: "hand",
  group: "group",
  spark: "spark",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[420px] overflow-hidden">
        <Image
          src="/assets/images/about/about-hero.jpeg"
          alt="Community members gathered and smiling"
          fill
          priority
          className="object-cover translate-y-7 scale-[1.04]"
        />
        <div className="absolute inset-0 bg-on-surface/45" />
        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center px-6 md:px-8">
          <h1 className="font-headline text-6xl text-on-primary md:text-7xl">Our Story</h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-8">
        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-outline-variant/40 md:block" />

          <div className="space-y-20">
            {timeline.map((item, index) => {
              const reverse = index % 2 === 1;
              return (
                <article
                  key={item.year}
                  className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className={reverse ? "md:pl-12" : "md:pr-12 md:text-right"}>
                    <p className="font-headline text-4xl italic text-primary">{item.year}</p>
                    <h3 className="mt-2 font-headline text-3xl text-on-surface">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-on-surface-variant">{item.description}</p>
                  </div>

                  <div className="relative">
                    <div className="hidden md:block">
                      <span className="absolute left-0 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-surface bg-primary" />
                    </div>
                    <div
                      className={`rounded-lg bg-surface-container-low p-2 shadow-warm transition-transform duration-500 hover:rotate-0 ${
                        reverse ? "rotate-2" : "-rotate-2"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={560}
                        height={320}
                        className="h-64 w-full rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="deckled-edge relative mb-24 bg-surface-container-high py-20">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
          <p className="mb-4 text-primary">&ldquo;</p>
          <blockquote className="font-headline text-3xl italic leading-snug text-on-surface md:text-4xl">
            I used to think my future was written in stone. {NGO_INFO.name} helped
            me pick up the pen and write my own destiny.
          </blockquote>
          <p className="mt-6 font-label italic text-tertiary">
            — Maria, Community Leader & Tailoring Graduate
          </p>
        </div>
      </section>

      <section className="mx-auto mb-24 max-w-7xl px-6 md:px-8">
        <h2 className="mb-10 text-center font-headline text-4xl text-on-surface">
          The Pillars of our Work
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.id}
              className="rounded-lg bg-surface-container-low p-8 text-center"
            >
              <span className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                <Icon
                  name={valueIcons[value.icon]}
                  className="h-7 w-7"
                />
              </span>
              <h3 className="font-headline text-2xl text-on-surface">{value.title}</h3>
              <p className="mt-3 text-on-surface-variant">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-20 max-w-7xl px-6 md:px-8">
        <h2 className="mb-10 text-center font-headline text-4xl text-on-surface">
          The Hands Behind the Work
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <article key={member.id} className="w-full max-w-[260px] text-center">
              <div className="mx-auto mb-4 h-40 w-40 rounded-full border-2 border-dashed border-outline-variant p-1">
                <Image
                  src={member.image}
                  alt={member.alt}
                  width={160}
                  height={160}
                  className="h-full w-full rounded-full object-cover"
                  style={{ objectPosition: member.imagePosition }}
                />
              </div>
              <h3 className="font-headline text-2xl text-on-surface">{member.name}</h3>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-primary">
                {member.role}
              </p>
              <p className="mt-2 text-sm italic text-on-surface-variant">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
