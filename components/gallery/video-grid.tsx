"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { GalleryVideo } from "@/lib/gallery";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";

interface VideoGridProps {
  videos: GalleryVideo[];
}

function normalizeLocalVideoPath(path: string) {
  const trimmed = path.trim();
  if (!trimmed) {
    return "";
  }

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  const withoutPublicPrefix = trimmed.startsWith("public/")
    ? trimmed.slice("public".length)
    : trimmed;
  const withLeadingSlash = withoutPublicPrefix.startsWith("/")
    ? withoutPublicPrefix
    : `/${withoutPublicPrefix}`;

  return encodeURI(withLeadingSlash);
}

function getYouTubeId(url: string) {
  const match = url.match(
    /(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([^?&/]+)/i,
  );
  return match?.[1] ?? null;
}

function getYouTubeThumbnail(url: string) {
  const videoId = getYouTubeId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
}

function getYouTubeEmbedUrl(url: string) {
  const videoId = getYouTubeId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}

function getPlayableVideoSrc(video: GalleryVideo) {
  if (video.sourceType === "youtube") {
    return getYouTubeEmbedUrl(video.videoSrc);
  }

  return normalizeLocalVideoPath(video.videoSrc || video.src);
}

async function renderLocalVideoThumbnail(videoSrc: string) {
  if (!videoSrc) {
    return null;
  }

  return new Promise<string | null>((resolve) => {
    const video = document.createElement("video");
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";

    let isSettled = false;
    const timeoutId = window.setTimeout(() => finish(null), 8000);

    function finish(value: string | null) {
      if (isSettled) {
        return;
      }
      isSettled = true;
      window.clearTimeout(timeoutId);
      video.pause();
      video.removeAttribute("src");
      video.load();
      resolve(value);
    }

    video.addEventListener(
      "loadeddata",
      () => {
        try {
          const width = video.videoWidth || 640;
          const height = video.videoHeight || 360;
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const context = canvas.getContext("2d");
          if (!context) {
            finish(null);
            return;
          }

          context.drawImage(video, 0, 0, width, height);
          finish(canvas.toDataURL("image/jpeg", 0.82));
        } catch {
          finish(null);
        }
      },
      { once: true },
    );

    video.addEventListener("error", () => finish(null), { once: true });
    video.src = videoSrc;
    video.load();
  });
}

export function VideoGrid({ videos }: VideoGridProps) {
  const [openVideoId, setOpenVideoId] = useState<string | null>(null);
  const [autoThumbnails, setAutoThumbnails] = useState<Record<string, string>>({});

  useEffect(() => {
    let isCancelled = false;

    const generateThumbnails = async () => {
      for (const video of videos) {
        if (video.sourceType === "youtube") {
          const youtubeThumbnail = getYouTubeThumbnail(video.videoSrc);
          if (!youtubeThumbnail || isCancelled) {
            continue;
          }

          setAutoThumbnails((prev) =>
            prev[video.id] ? prev : { ...prev, [video.id]: youtubeThumbnail },
          );
          continue;
        }

        const thumbnail = await renderLocalVideoThumbnail(getPlayableVideoSrc(video));
        if (!thumbnail || isCancelled) {
          continue;
        }

        setAutoThumbnails((prev) =>
          prev[video.id] ? prev : { ...prev, [video.id]: thumbnail },
        );
      }
    };

    void generateThumbnails();
    return () => {
      isCancelled = true;
    };
  }, [videos]);

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
                src={autoThumbnails[video.id] || video.thumbnail}
                alt={video.alt}
                fill
                unoptimized
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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
                src={getPlayableVideoSrc(openVideo)}
                className="aspect-video w-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                className="aspect-video w-full rounded-lg"
                controls
                autoPlay
                src={getPlayableVideoSrc(openVideo)}
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
