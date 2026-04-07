"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MaterialIcon } from "@/components/ui/material-icon";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-200",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!open}
    >
      <button
        className="absolute inset-0 bg-on-surface/35"
        onClick={onClose}
        aria-label="Close menu overlay"
      />
      <div
        className={cn(
          "absolute right-0 top-0 h-full w-[82%] max-w-sm bg-surface p-6 shadow-2xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="mb-10 flex items-center justify-between">
          <span className="font-headline text-2xl font-bold italic text-primary">
            NGO NAME
          </span>
          <button
            onClick={onClose}
            className="focus-ring rounded-lg p-2 text-on-surface"
            aria-label="Close mobile menu"
          >
            <MaterialIcon name="close" className="text-2xl" />
          </button>
        </div>

        <nav className="space-y-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "focus-ring block rounded-lg px-4 py-3 font-headline text-xl tracking-tight transition-colors",
                  active
                    ? "bg-primary text-on-primary"
                    : "text-on-surface hover:bg-surface-container-low",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 space-y-3">
          <Link href="/donate" onClick={onClose}>
            <Button className="w-full justify-center">Donate Now</Button>
          </Link>
          <Link href="/volunteer" onClick={onClose}>
            <Button variant="outline" className="w-full justify-center">
              Volunteer With Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
