import { DONOR_QUOTES, NGO_INFO } from "@/lib/constants";
import { Icon } from "@/components/ui/icon";

export function DonorTrustBar() {
  return (
    <section className="space-y-6 rounded-xl bg-surface-container p-8">
      <h3 className="font-headline text-2xl text-on-surface">Transparency Matters</h3>
      <div className="grid gap-3 text-sm text-on-surface-variant">
        <p className="inline-flex items-center gap-2">
          <Icon name="check" className="h-4 w-4 text-secondary" />
          NGO Registration Number: {NGO_INFO.registrationNumber}
        </p>
        <p className="inline-flex items-center gap-2">
          <Icon name="check" className="h-4 w-4 text-secondary" />
          {NGO_INFO.eightyGBadge}
        </p>
        <p className="inline-flex items-center gap-2">
          <Icon name="lock" className="h-4 w-4 text-secondary" />
          Secure Payment via Razorpay
        </p>
      </div>

      <div className="space-y-3">
        {DONOR_QUOTES.slice(0, 3).map((quote) => (
          <blockquote
            key={quote.id}
            className="rounded-lg border-l-4 border-primary bg-surface-container-low p-4 italic text-on-surface-variant"
          >
            &ldquo;{quote.quote}&rdquo;
            <p className="mt-2 text-sm font-bold not-italic text-on-surface">
              — {quote.author}, {quote.role}
            </p>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
