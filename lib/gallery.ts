export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

export interface GalleryVideo {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  type: "local" | "youtube";
  src: string;
  alt: string;
  sourceType: "local" | "youtube";
  videoSrc: string;
  description: string;
}

export const GALLERY_DATA: {
  photos: GalleryPhoto[];
  videos: GalleryVideo[];
} = {
  photos: [
    {
      id: "photo-1",
      src: "/assets/images/gallery/learning-center-group-photo.png",
      alt: "Children and mentors gathered at the Deesha Jyot learning center",
      title: "Learning Center Gathering",
      description:
        "Students and mentors come together for a community learning session at the Mankhurd center.",
      width: 1876,
      height: 1402,
    },
    {
      id: "photo-2",
      src: "/assets/images/gallery/sewing-machine-distribution.png",
      alt: "Women trainees standing with newly distributed sewing machines",
      title: "Sewing Machine Distribution",
      description:
        "New sewing machines were distributed to women trainees to support livelihood and home-based earning.",
      width: 1876,
      height: 1402,
    },
    {
      id: "photo-3",
      src: "/assets/images/gallery/school-kit-distribution.png",
      alt: "Children and women receiving school kits in a community drive",
      title: "Free School Kit Drive",
      description:
        "School kits were distributed to children of domestic workers, sanitation workers, daily wage families, and rickshaw drivers.",
      width: 1876,
      height: 1402,
    },
    {
      id: "photo-4",
      src: "/assets/images/gallery/classroom-nutrition-cpr-session.png",
      alt: "Classroom session where students attend a CPR and health awareness training",
      title: "Nutrition and CPR Session",
      description:
        "Students receive daily nutrition support along with practical CPR and emergency health awareness training.",
      width: 1876,
      height: 1348,
    },
  ],
  videos: [
    {
      id: "video-1",
      title: "Mother's Day",
      duration: "12:45",
      thumbnail: "/assets/images/gallery/video-thumb-1.svg",
      type: "local",
      src: "/assets/videos/activity-1.mp4",
      sourceType: "local",
      videoSrc: "public/assets/videos/WhatsApp Video 2026-03-26 at 13.27.37.mp4",
      alt: "Thumbnail for The Weaver's Tale",
      description:
        "A story of resilience and heritage from our textile workshop.",
    },
    {
      id: "video-2",
      title: "Small Steps, Big Dreams",
      duration: "08:20",
      thumbnail: "/assets/images/gallery/video-thumb-2.svg",
      type: "local",
      src: "/assets/videos/activity-2.mp4",
      sourceType: "local",
      videoSrc: "public/assets/videos/WhatsApp Video 2026-03-26 at 13.27.50.mp4",
      alt: "Thumbnail for Small Steps, Big Dreams",
      description:
        "Following a day in the life of students at the Sunrise Academy.",
    },
    {
      id: "video-3",
      title: "Foundations for Tomorrow",
      duration: "15:10",
      thumbnail: "/assets/images/gallery/video-thumb-3.svg",
      type: "youtube",
      src: "https://www.youtube.com/embed/ysz5S6PUM-U",
      sourceType: "youtube",
      videoSrc: "https://www.youtube.com/embed/ysz5S6PUM-U",
      alt: "Thumbnail for Foundations for Tomorrow",
      description:
        "Infrastructure project updates from our lakeside community.",
    },
  ],
};

// Backward-compatible alias
export const galleryData = GALLERY_DATA;
