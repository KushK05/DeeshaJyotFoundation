import { NewsClipping } from "@/lib/news";
import { ClippingCard } from "@/components/news/clipping-card";

interface ClippingsGridProps {
  clippings: NewsClipping[];
}

export function ClippingsGrid({ clippings }: ClippingsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {clippings.map((clipping) => (
        <ClippingCard key={clipping.id} clipping={clipping} />
      ))}
    </div>
  );
}
