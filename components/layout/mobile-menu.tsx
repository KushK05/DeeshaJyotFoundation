"use client";

import Link from "next/link";
import { useEffect } from "react";

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [open, onClose]);

  return (
    <>
      <div
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-40 bg-on-surface/20 transition-opacity md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
      />
      <aside
        aria-hidden={!open}
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-[84%] max-w-sm border-l border-outline-variant/30 bg-background p-6 shadow-warm transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-headline text-2xl italic text-primary">Menu</span>
          <button
            aria-label="Close navigation menu"
            className="focus-ring rounded-md p-2 text-on-surface"
            onClick={onClose}
            type="button"
          >
            <Icon name="close" className="h-6 w-6" />
          </button>
        </div>

        <nav className="space-y-4" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-lg px-3 py-2 font-headline text-2xl text-on-surface transition-colors hover:bg-surface-container hover:text-primary"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 border-t border-outline-variant/30 pt-8">
          <Link
            href="/volunteer"
            onClick={onClose}
            className="focus-ring inline-flex h-11 w-full items-center justify-center rounded-lg border border-primary bg-primary px-6 text-sm font-bold text-on-primary transition-all duration-200 hover:bg-primary-container"
          >
            Volunteer With Us
          </Link>
        </div>
      </aside>
    </>
  );
}
