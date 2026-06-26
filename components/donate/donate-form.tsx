import { NGO_INFO } from "@/lib/constants";

export function DonateForm() {
  return (
    <section className="rounded-xl bg-surface-container p-8 md:p-12">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
        UPI Donation
      </p>
      <h2 className="mt-3 font-headline text-4xl text-on-surface">
        Scan to Support
      </h2>
      <p className="mt-4 text-on-surface-variant">
        A UPI QR code will be added here. Until then, please contact the team to
        complete your donation and receive confirmation details.
      </p>

      <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-center">
        <div className="flex aspect-square w-full max-w-[280px] items-center justify-center rounded-lg border-2 border-dashed border-outline-variant bg-surface-container-low p-6 text-center">
          <div>
            <p className="font-headline text-3xl text-primary">UPI QR</p>
            <p className="mt-2 text-sm text-on-surface-variant">
              Placeholder
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-on-surface-variant">
          <p>
            Phone:{" "}
            <a className="font-semibold text-primary" href={`tel:${NGO_INFO.phone}`}>
              {NGO_INFO.phone}
            </a>
          </p>
          <p>Address: {NGO_INFO.address}</p>
        </div>
      </div>
    </section>
  );
}
