"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, NGO_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MaterialIcon } from "@/components/ui/material-icon";
import { MobileMenu } from "@/components/layout/mobile-menu";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-40 border-b border-outline-variant/30 bg-background/85 transition-all duration-300",
          scrolled && "bg-background/75 shadow-md backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-4 md:px-8">
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-3 rounded-lg px-1 py-1"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              className="text-primary"
              aria-hidden="true"
            >
              <circle cx="15" cy="15" r="14" fill="currentColor" opacity="0.14" />
              <path
                d="M8 17c3-1 4-5 7-5s4 4 7 5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <span className="font-headline text-2xl font-bold italic text-primary">
              {NGO_NAME}
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "focus-ring rounded-lg px-1 py-1 font-headline text-lg tracking-tight text-on-surface/80 transition-all duration-200 hover:-rotate-1 hover:text-primary-container",
                    active && "text-primary",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/donate" className="hidden md:block">
              <Button className="px-6 py-2">Donate Now</Button>
            </Link>
            <button
              className="focus-ring rounded-lg p-2 text-on-surface md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <MaterialIcon name="menu" className="text-3xl" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};
