import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";

const ctas = [
  {
    title: "Make a Donation",
    body: "Your contributions directly support schools and community training centers.",
    href: "/donate",
    cta: "Ways to Give",
    icon: "donate",
    iconBg: "bg-on-primary/10 text-on-primary",
    emphasized: true,
  },
  {
    title: "Volunteer Time",
    body: "Join our mentors, teachers, and field workers creating impact every week.",
    href: "/volunteer",
    cta: "Join Us",
    icon: "volunteer",
    iconBg: "bg-tertiary-container text-on-tertiary-container",
    emphasized: false,
  },
] as const;

export function CTAGrid() {
  return (
    <section className="mx-auto mb-32 max-w-7xl px-6 md:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {ctas.map((item) => (
          <Card
            key={item.title}
            hoverable
            className={
              item.emphasized
                ? "!border-[#8a2b00]/50 !bg-[#9b3100] !text-white shadow-[0_14px_34px_-18px_rgba(76,21,0,0.55)]"
                : ""
            }
            style={
              item.emphasized
                ? {
                    backgroundColor: "#9b3100",
                    borderColor: "rgba(138,43,0,0.5)",
                    color: "#ffffff",
                  }
                : undefined
            }
          >
            <div
              className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${item.iconBg}`}
            >
              <Icon name={item.icon} className="h-8 w-8" />
            </div>
            <h3 className="mb-4 font-headline text-2xl">{item.title}</h3>
            <p
              className={
                item.emphasized
                  ? "mb-6 opacity-90"
                  : "mb-6 text-on-surface-variant"
              }
            >
              {item.body}
            </p>
            <div
              className={`mb-6 h-px w-full ${item.emphasized ? "bg-white/25" : "bg-outline-variant"}`}
            />
            <Link
              href={item.href}
              className={`focus-ring inline-flex items-center gap-2 font-bold ${item.emphasized ? "text-white" : "text-primary"}`}
            >
              {item.cta}
              <Icon name="chevron-right" className="h-4 w-4" />
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
