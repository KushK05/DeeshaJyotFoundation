import Image from "next/image";

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
        Scan this QR code with any UPI app to make a secure contribution to our
        work.
      </p>

      <div className="mt-8 flex flex-col gap-6">
        <div className="mx-auto w-full max-w-[448px] rounded-lg border border-outline-variant bg-surface p-4 shadow-warm sm:mx-0">
          <div className="relative aspect-square overflow-hidden rounded-md sm:hidden">
            <Image
              src="/assets/images/deesha-jyot-foundation-upi-qr-code.jpeg"
              alt="Deesha Jyot Foundation BharatQR UPI payment code"
              fill
              unoptimized
              sizes="(max-width: 639px) calc(100vw - 112px), 0px"
              className="object-cover translate-x-[40%] scale-[2.2]"
            />
          </div>
          <Image
            src="/assets/images/deesha-jyot-foundation-upi-qr-code.jpeg"
            alt="Deesha Jyot Foundation BharatQR UPI payment code"
            width={1080}
            height={1533}
            unoptimized
            className="hidden h-auto w-full rounded-md sm:block"
          />
        </div>

        <div className="space-y-4 text-sm text-on-surface-variant">
          <p className="font-semibold text-on-surface">
            Pay securely using any UPI app.
          </p>
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
