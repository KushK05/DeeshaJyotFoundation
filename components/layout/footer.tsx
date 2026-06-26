import Link from "next/link";

import { FOOTER_QUICK_LINKS, NGO_INFO } from "@/lib/constants";
import { Icon } from "@/components/ui/icon";

const socialLinks = [
  { key: "instagram", href: NGO_INFO.social.instagram, icon: "instagram", label: "Instagram" },
  { key: "facebook", href: NGO_INFO.social.facebook, icon: "facebook", label: "Facebook" },
  { key: "twitter", href: NGO_INFO.social.twitter, icon: "twitter", label: "Twitter/X" },
  { key: "youtube", href: NGO_INFO.social.youtube, icon: "youtube", label: "YouTube" },
  { key: "linkedin", href: NGO_INFO.social.linkedin, icon: "linkedin", label: "LinkedIn" },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24 w-full bg-surface-container px-6 py-14 md:px-8">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
        <div className="space-y-5">
          <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-md">
            <span className="font-headline text-2xl text-on-surface">{NGO_INFO.name}</span>
          </Link>
          <p className="max-w-sm text-sm text-on-surface-variant">{NGO_INFO.tagline}</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.key}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex rounded-md border border-outline-variant/40 p-2 text-primary transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-warm"
              >
                <Icon name={social.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-label text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="focus-ring rounded-md text-sm text-on-surface-variant underline decoration-dotted underline-offset-4 transition-colors hover:text-tertiary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-label text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Contact
          </h3>
          <div className="space-y-1 text-sm text-on-surface-variant">
            <p>{NGO_INFO.address}</p>
            <p>{NGO_INFO.phone}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-7xl flex-col items-center justify-between gap-3 border-t border-outline-variant/30 pt-7 text-xs tracking-[0.16em] text-on-surface-variant md:flex-row">
        <p>© {new Date().getFullYear()} {NGO_INFO.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
