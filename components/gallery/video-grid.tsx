"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { GalleryVideo } from "@/lib/gallery";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";

interface VideoGridProps {
  videos: GalleryVideo[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  const [openVideoId, setOpenVideoId] = useState<string | null>(null);
  const openVideo = useMemo(
    () => videos.find((video) => video.id === openVideoId) || null,
    [videos, openVideoId],
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <button
            key={video.id}
            type="button"
            className="focus-ring group text-left"
            onClick={() => setOpenVideoId(video.id)}
            aria-label={`Play ${video.title}`}
          >
            <div className="relative aspect-video overflow-hidden rounded-xl bg-surface-container shadow-warm">
              <Image
                src={video.thumbnail}
                alt={video.alt}
                fill
                className="object-cover opacity-85 transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-on-primary shadow-warm">
                  <Icon name="play" className="h-8 w-8" />
                </span>
              </div>
              <Badge className="absolute bottom-3 right-3">{video.duration}</Badge>
            </div>
            <h3 className="mt-4 font-headline text-2xl text-on-surface">{video.title}</h3>
          </button>
        ))}
      </div>

      {openVideo ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-on-surface/85 p-4"
          onClick={() => setOpenVideoId(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl rounded-xl bg-background p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close video"
              className="focus-ring absolute right-4 top-4 z-20 rounded-full bg-surface-container p-2"
              onClick={() => setOpenVideoId(null)}
            >
              <Icon name="close" className="h-4 w-4" />
            </button>

            {openVideo.sourceType === "youtube" ? (
              <iframe
                title={openVideo.title}
                src={openVideo.videoSrc}
                className="aspect-video w-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                className="aspect-video w-full rounded-lg"
                controls
                autoPlay
                src={openVideo.videoSrc}
              >
                <track kind="captions" />
              </video>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
