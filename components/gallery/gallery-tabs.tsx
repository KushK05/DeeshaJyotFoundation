"use client";

import { useEffect, useMemo, useState } from "react";

import { events } from "@/lib/events";
import { galleryData } from "@/lib/gallery";
import { PhotoGrid } from "@/components/gallery/photo-grid";
import { VideoGrid } from "@/components/gallery/video-grid";
import { Lightbox } from "@/components/gallery/lightbox";

type Tab = "photos" | "videos" | "events";

const tabs: { key: Tab; label: string; hash: string }[] = [
  { key: "photos", label: "Photos", hash: "#photos" },
  { key: "videos", label: "Videos", hash: "#videos" },
  { key: "events", label: "Events", hash: "#events" },
];

export function GalleryTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("photos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as Tab;
    if (hash === "photos" || hash === "videos" || hash === "events") {
      setActiveTab(hash);
    }
  }, []);

  const changeTab = (tab: Tab) => {
    setActiveTab(tab);
    window.history.replaceState({}, "", `#${tab}`);
  };

  const lightboxOpen = useMemo(() => lightboxIndex !== null, [lightboxIndex]);

  return (
    <section>
      <div className="mb-12 flex justify-center">
        <div className="inline-flex rounded-xl bg-surface-container p-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`focus-ring rounded-lg px-8 py-3 font-bold transition-all ${
                activeTab === tab.key
                  ? "bg-primary text-on-primary shadow-warm"
                  : "text-on-surface opacity-60 hover:opacity-100"
              }`}
              onClick={() => changeTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "photos" ? (
        <PhotoGrid photos={galleryData.photos} onOpen={setLightboxIndex} />
      ) : null}

      {activeTab === "videos" ? <VideoGrid videos={galleryData.videos} /> : null}

      {activeTab === "events" ? (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {events.map((event) => (
            <article
              key={event.id}
              className="rounded-xl border-b-4 border-primary-container/20 bg-surface-container p-4"
            >
              <div className="relative h-52 overflow-hidden rounded-lg">
                <img
                  src={event.coverImage}
                  alt={`${event.name} cover image`}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-secondary">
                {new Date(event.date).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h3 className="mt-2 font-headline text-3xl">{event.name}</h3>
              <p className="mt-1 text-sm font-medium text-tertiary">{event.location}</p>
              <p className="mt-3 text-sm text-on-surface-variant">{event.description}</p>
            </article>
          ))}
        </div>
      ) : null}

      <Lightbox
        open={lightboxOpen}
        images={galleryData.photos.map((photo) => ({ src: photo.src, alt: photo.alt }))}
        currentIndex={lightboxIndex ?? 0}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((prev) => {
            if (prev === null) return 0;
            return prev === 0 ? galleryData.photos.length - 1 : prev - 1;
          })
        }
        onNext={() =>
          setLightboxIndex((prev) => {
            if (prev === null) return 0;
            return prev === galleryData.photos.length - 1 ? 0 : prev + 1;
          })
        }
      />
    </section>
  );
}
