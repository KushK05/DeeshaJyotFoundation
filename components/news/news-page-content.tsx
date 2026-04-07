"use client";

import { FormEvent, useMemo, useState } from "react";

import { newsClippings, newsYears } from "@/lib/news";
import { submitNewsletterForm } from "@/lib/formspree";
import { ClippingsGrid } from "@/components/news/clippings-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsPageContent() {
  const [year, setYear] = useState<(typeof newsYears)[number]>("All");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (year === "All") return newsClippings;
    return newsClippings.filter((item) => item.year === year);
  }, [year]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setMessage(null);

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      await submitNewsletterForm({ email, source: "news-page-newsletter" });
      setMessage("You're subscribed!");
      setEmail("");
    } catch {
      setError("Subscription failed. Please retry.");
    } finally {
      setSubmitting(false);
    }
  };

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

      <section className="mx-auto mt-24 max-w-7xl px-6 pb-8 md:px-8">
        <div className="relative overflow-hidden rounded-xl bg-surface-container-high p-12 text-center md:p-16">
          <h2 className="font-headline text-3xl md:text-4xl">
            Stay tuned for the stories yet to be told.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-on-surface-variant">
            Subscribe to receive project updates and community spotlights.
          </p>

          <form
            className="mx-auto mt-8 flex max-w-lg flex-col items-center gap-4 md:flex-row"
            onSubmit={onSubmit}
          >
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              className="w-full"
              required
            />
            <Button type="submit" className="w-full md:w-auto" disabled={submitting}>
              {submitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          {message ? <p className="mt-4 text-sm text-secondary">{message}</p> : null}
          {error ? <p className="mt-4 text-sm text-error">{error}</p> : null}
        </div>
      </section>
    </>
  );
}
