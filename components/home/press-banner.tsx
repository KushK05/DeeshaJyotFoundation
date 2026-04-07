export function PressBanner() {
  return (
    <section className="relative mb-32 overflow-hidden bg-surface-container-high py-24">
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle,_#8d7168_1px,_transparent_1px)] [background-size:12px_12px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-8">
        <p className="mb-6 text-6xl text-primary/50">"</p>
        <blockquote className="font-headline text-3xl italic leading-snug text-on-surface md:text-4xl">
          NGO NAME doesn&apos;t just give handouts; they hand over the keys to a
          better life. In fifteen years, they&apos;ve turned a small village
          workshop into a regional beacon of hope.
        </blockquote>
        <p className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-on-surface-variant">
          The Community Times Editorial, 2023
        </p>
      </div>
    </section>
  );
}
