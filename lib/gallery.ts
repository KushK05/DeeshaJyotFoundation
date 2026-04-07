export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
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
  description: string;
}

export const GALLERY_DATA: {
  photos: GalleryPhoto[];
  videos: GalleryVideo[];
} = {
  photos: [
    {
      id: "photo-1",
      src: "/assets/images/gallery/photo-1.svg",
      alt: "Smiling child in warm afternoon sunlight",
      width: 800,
      height: 1067,
    },
    {
      id: "photo-2",
      src: "/assets/images/gallery/photo-2.svg",
      alt: "Women weaving together in a workshop",
      width: 800,
      height: 1000,
    },
    {
      id: "photo-3",
      src: "/assets/images/gallery/photo-3.svg",
      alt: "Children reading under a tree",
      width: 800,
      height: 1200,
    },
    {
      id: "photo-4",
      src: "/assets/images/gallery/photo-4.svg",
      alt: "Rural classroom in afternoon light",
      width: 800,
      height: 900,
    },
    {
      id: "photo-5",
      src: "/assets/images/gallery/photo-5.svg",
      alt: "Women teaching embroidery skills",
      width: 800,
      height: 1100,
    },
    {
      id: "photo-6",
      src: "/assets/images/gallery/photo-6.svg",
      alt: "Hands planting a sapling",
      width: 800,
      height: 1000,
    },
  ],
  videos: [
    {
      id: "video-1",
      title: "The Weaver's Tale",
      duration: "12:45",
      thumbnail: "/assets/images/gallery/video-thumb-1.svg",
      type: "local",
      src: "/assets/videos/activity-1.mp4",
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
      description:
        "Infrastructure project updates from our lakeside community.",
    },
  ],
};
