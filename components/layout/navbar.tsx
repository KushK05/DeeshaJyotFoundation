"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { NAV_LINKS, NGO_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={cn(
          "fixed left-0 top-0 z-50 w-full border-b border-transparent transition-all duration-300",
          scrolled
            ? "border-outline-variant/30 bg-background/85 shadow-warm backdrop-blur-md"
            : "bg-background/85 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-4 md:px-8">
          <Link href="/" className="focus-ring flex items-center gap-3 rounded-md">
            <Image
              src="/assets/icons/484978104_1041896614650859_2359847097635358716_n.jpg"
              alt={`${NGO_INFO.name} logo`}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
              priority
            />
            <span className="font-headline text-2xl italic tracking-tight text-primary">
              {NGO_INFO.name}
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "focus-ring rounded-md font-headline text-lg tracking-tight transition-all duration-200",
                    active
                      ? "text-primary"
                      : "text-on-surface opacity-80 hover:rotate-1 hover:text-primary-container",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Button className="hidden md:inline-flex" size="md">
              <Link href="/donate">Donate Now</Link>
            </Button>
            <button
              aria-label="Open navigation menu"
              className="focus-ring rounded-md p-2 md:hidden"
              onClick={() => setMenuOpen(true)}
              type="button"
            >
              <Icon name="menu" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
