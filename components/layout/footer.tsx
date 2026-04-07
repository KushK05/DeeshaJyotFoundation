import Link from "next/link";
import { CONTACT_INFO, FOOTER_LINKS, NGO_NAME, NGO_TAGLINE, SOCIAL_LINKS } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SOCIAL_ICONS: Record<string, string> = {
  instagram: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm8 5.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm6-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z",
  facebook: "M14 22v-9h-3v-4h3V6.5c0-3 1.8-4.5 4.4-4.5 1.3 0 2.6.1 2.9.1v3.4h-2c-1.6 0-1.9.8-1.9 1.9V9h3.8l-.5 4h-3.3v9z",
  x: "M4 4l7.4 9.8L4.4 22h2.1l5.9-7.1 5.3 7.1H22l-7.8-10.5L21.2 4h-2.1l-5.4 6.5L8.9 4z",
  youtube: "M22.5 8.3a3 3 0 0 0-2.1-2.1C18.7 5.7 12 5.7 12 5.7s-6.7 0-8.4.5A3 3 0 0 0 1.5 8.3 31 31 0 0 0 1 12a31 31 0 0 0 .5 3.7 3 3 0 0 0 2.1 2.1c1.7.5 8.4.5 8.4.5s6.7 0 8.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23 12a31 31 0 0 0-.5-3.7zM10 15.5v-7l6 3.5z",
  linkedin: "M4 9h4v13H4zm2-7a2.3 2.3 0 1 1 0 4.6A2.3 2.3 0 0 1 6 2zm5 7h3.8v1.8h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.4 4.7 5.7V22h-4v-6.6c0-1.6 0-3.5-2.2-3.5s-2.5 1.6-2.5 3.4V22h-4z",
};

export const Footer = () => {
  return (
    <footer className="relative mt-24 bg-surface-container px-4 py-12 md:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
        <div className="space-y-4">
          <div className="font-headline text-2xl font-bold italic text-on-surface">{NGO_NAME}</div>
          <p className="max-w-md text-sm text-on-surface/70">{NGO_TAGLINE}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/60 bg-surface hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-primary" aria-hidden="true">
                  <path d={SOCIAL_ICONS[social.id]} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Quick Links</h2>
          <ul className="space-y-3 text-sm text-on-surface/75">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="focus-ring rounded-sm underline decoration-dotted underline-offset-4 transition-colors hover:text-tertiary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Newsletter & Contact</h2>
          <form className="space-y-3" action="/news#newsletter">
            <label htmlFor="footer-email" className="text-sm text-on-surface/70">
              Subscribe for updates
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input id="footer-email" name="email" type="email" placeholder="Email address" required />
              <Button className="px-5">Subscribe</Button>
            </div>
          </form>
          <div className="space-y-1 text-sm text-on-surface/70">
            <p>{CONTACT_INFO.address}</p>
            <p>
              <a href={`tel:${CONTACT_INFO.phone}`} className="focus-ring rounded-sm">
                {CONTACT_INFO.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${CONTACT_INFO.email}`} className="focus-ring rounded-sm">
                {CONTACT_INFO.email}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-outline-variant/30 pt-6 text-center text-xs uppercase tracking-[0.2em] text-on-surface/55 md:flex-row md:items-center md:justify-between md:text-left">
        <p>© {new Date().getFullYear()} {NGO_NAME}. All rights reserved.</p>
        <p>Registration: {CONTACT_INFO.registrationNumber}</p>
        <p>80G Tax Exemption Eligible</p>
      </div>
    </footer>
  );
};
