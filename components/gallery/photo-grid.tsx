"use client";

import Image from "next/image";

import { GalleryPhoto } from "@/lib/gallery";

interface PhotoGridProps {
  photos: GalleryPhoto[];
  onOpen: (index: number) => void;
}

export function PhotoGrid({ photos, onOpen }: PhotoGridProps) {
  return (
    <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
      {photos.map((photo, index) => (
        <button
          key={photo.id}
          type="button"
          onClick={() => onOpen(index)}
          className="focus-ring group relative mb-6 block w-full overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-low p-1 text-left shadow-warm"
          aria-label={`Open photo: ${photo.title}`}
        >
          <div className="relative min-h-[220px] overflow-hidden rounded-lg">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={800}
              height={1000}
              className="h-auto w-full rounded-lg object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </button>
      ))}
    </div>
  );
}
