"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { Icon } from "@/components/ui/icon";

interface LightboxProps {
  open: boolean;
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({
  open,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;

  const current = images[currentIndex];
  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-on-surface/85 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeRef}
          type="button"
          aria-label="Close lightbox"
          className="focus-ring absolute right-2 top-2 z-20 rounded-full bg-background/90 p-2 text-on-surface"
          onClick={onClose}
        >
          <Icon name="close" className="h-5 w-5" />
        </button>

        <button
          type="button"
          aria-label="Previous image"
          className="focus-ring absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/90 p-2 text-on-surface"
          onClick={onPrev}
        >
          <Icon name="arrow-left" className="h-5 w-5" />
        </button>

        <button
          type="button"
          aria-label="Next image"
          className="focus-ring absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/90 p-2 text-on-surface"
          onClick={onNext}
        >
          <Icon name="arrow-right" className="h-5 w-5" />
        </button>

        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface-container-low">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
