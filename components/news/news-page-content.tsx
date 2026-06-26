"use client";

import { useMemo, useState } from "react";

import { newsClippings, newsYears } from "@/lib/news";
import { ClippingsGrid } from "@/components/news/clippings-grid";

export function NewsPageContent() {
  const [year, setYear] = useState<(typeof newsYears)[number]>("All");

  const filtered = useMemo(() => {
    if (year === "All") return newsClippings;
    return newsClippings.filter((item) => item.year === year);
  }, [year]);

  return (
    <>
      <section className="mx-auto mb-16 max-w-7xl px-6 pt-16 text-center md:px-8">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
          News & Media
        </span>
        <h1 className="font-headline text-5xl leading-tight md:text-7xl">
          Our Story, <span className="italic">As the World Sees It.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-on-surface-variant">
          A digital archive of our impact through grassroots reports and global
          coverage.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/assets/media-kit.pdf"
            className="focus-ring inline-flex items-center rounded-lg bg-secondary-container px-8 py-3 text-sm font-semibold text-on-secondary-container"
            download
          >
            Download Media Kit
          </a>

          <div className="inline-flex flex-wrap items-center gap-2 rounded-xl bg-surface-container-low p-1">
            {newsYears.map((yearItem) => (
              <button
                key={yearItem}
                type="button"
                onClick={() => setYear(yearItem)}
                className={`focus-ring rounded-lg px-5 py-2 text-sm font-medium transition-colors ${
                  year === yearItem
                    ? "bg-primary text-on-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {yearItem === "All" ? "All" : yearItem}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-8">
        <ClippingsGrid clippings={filtered} />
      </section>

    </>
  );
}
