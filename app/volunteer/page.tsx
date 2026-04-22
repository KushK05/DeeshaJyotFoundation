import type { Metadata } from "next";
import Image from "next/image";

import { volunteerRoles, volunteerTestimonials } from "@/lib/volunteer";
import { RoleCard } from "@/components/volunteer/role-card";
import { VolunteerForm } from "@/components/volunteer/volunteer-form";
import { NGO_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Join our volunteer network and contribute your skills to education, outreach, and community impact.",
  openGraph: {
    title: `Volunteer | ${NGO_INFO.name}`,
    description:
      "Join our volunteer network and contribute your skills to education, outreach, and community impact.",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function VolunteerPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h1 className="mb-6 font-headline text-5xl leading-none tracking-tight text-primary md:text-7xl">
              Join Hands.
              <br />
              Change Lives.
            </h1>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-on-surface-variant">
              Whether you&apos;re an educator, storyteller, organizer, or mentor,
              there&apos;s a place for you in our community.
            </p>
            <a
              href="#volunteer-form"
              className="focus-ring inline-flex rounded-lg bg-primary px-8 py-4 text-lg font-bold text-on-primary shadow-warm transition-transform duration-200 hover:-rotate-1"
            >
              Become a Volunteer
            </a>
          </div>

          <div className="order-1 md:order-2">
            <div className="rotate-2 bg-surface-container-low p-4 shadow-warm">
              <Image
                src="/assets/images/volunteer-hero.jpeg"
                alt="Volunteers sitting together in community setting"
                width={700}
                height={500}
                className="h-[400px] w-full rounded-sm object-cover"
              />
              <p className="mt-4 font-headline italic text-on-surface-variant">
                Our community, Summer 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-2 font-headline text-4xl">Ways You Can Help</h2>
          <p className="mb-10 text-on-surface-variant">
            Choose a role that resonates with your skills and heart.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {volunteerRoles.map((role) => (
              <RoleCard key={role.id} role={role} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-8">
          {volunteerTestimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className={`w-full border-l-4 p-6 shadow-warm md:w-80 ${
                index === 0
                  ? "-rotate-2 border-primary bg-surface-container-highest"
                  : index === 1
                    ? "rotate-1 border-secondary bg-surface-container"
                    : "-rotate-1 border-tertiary bg-surface-container-low"
              }`}
            >
              <p className="mb-4 font-headline text-lg italic text-on-surface">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="text-sm font-bold">
                — {testimonial.author}, {testimonial.role}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="volunteer-form" className="mx-auto max-w-4xl px-6 pb-20 md:px-8">
        <VolunteerForm />
      </section>
    </>
  );
}
