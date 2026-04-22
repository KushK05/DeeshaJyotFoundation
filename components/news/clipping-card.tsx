import Image from "next/image";

import { NewsClipping } from "@/lib/news";
import { Icon } from "@/components/ui/icon";

interface ClippingCardProps {
  clipping: NewsClipping;
}

export function ClippingCard({ clipping }: ClippingCardProps) {
  const date = new Date(clipping.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <article className="group flex h-full flex-col bg-surface-container-low p-6 shadow-warm transition-all duration-300 hover:-translate-y-0.5 hover:rotate-1">
      <div className="mb-5 overflow-hidden rounded-md">
        <Image
          src={clipping.imageUrl}
          alt={`${clipping.publication} article cover for ${clipping.headline}`}
          width={600}
          height={420}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mb-4 flex items-center justify-between border-b border-outline-variant/30 pb-2">
        <span className="font-headline text-lg italic text-primary">
          {clipping.publication}
        </span>
        <span className="text-xs uppercase tracking-[0.15em] text-on-surface-variant">
          {date}
        </span>
      </div>

      <h3 className="font-headline text-2xl leading-tight text-on-surface transition-colors group-hover:text-primary">
        {clipping.headline}
      </h3>
      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-on-surface-variant">
        {clipping.excerpt}
      </p>

      <a
        href={clipping.externalUrl}
        target="_blank"
        rel="noreferrer"
        className="focus-ring mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-primary"
      >
        View Full Clipping
        <Icon name="arrow-right" className="h-4 w-4" />
      </a>
    </article>
  );
}
