import { cn } from "@/lib/utils";

type IconName =
  | "menu"
  | "close"
  | "arrow-right"
  | "arrow-left"
  | "chevron-down"
  | "chevron-right"
  | "donate"
  | "volunteer"
  | "play"
  | "lock"
  | "check"
  | "instagram"
  | "facebook"
  | "twitter"
  | "youtube"
  | "linkedin"
  | "child"
  | "women"
  | "history"
  | "school"
  | "camera"
  | "truck"
  | "digital"
  | "fundraising"
  | "hand"
  | "group"
  | "spark";

interface IconProps {
  name: IconName;
  className?: string;
}

const paths: Record<IconName, JSX.Element> = {
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  "arrow-right": <path d="M5 12h14M13 5l7 7-7 7" />,
  "arrow-left": <path d="M19 12H5m7 7-7-7 7-7" />,
  "chevron-down": <path d="M6 9l6 6 6-6" />,
  "chevron-right": <path d="M9 6l6 6-6 6" />,
  donate: <path d="M12 21s-8-4.7-8-10.4C4 6.9 6.3 5 9 5c1.7 0 2.8.8 3 1.3.2-.5 1.3-1.3 3-1.3 2.7 0 5 1.9 5 5.6C20 16.3 12 21 12 21z" />,
  volunteer: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4.4 0-8 2-8 4.5V21h16v-2.5c0-2.5-3.6-4.5-8-4.5z" />,
  play: <path d="M9 7l8 5-8 5V7z" />,
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 118 0v3" />
    </>
  ),
  check: <path d="M5 13l4 4L19 7" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" />
    </>
  ),
  facebook: <path d="M14 8h3V4h-3c-2.2 0-4 1.8-4 4v3H7v4h3v5h4v-5h3l1-4h-4V8c0-.6.4-1 1-1z" />,
  twitter: <path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.2-.8.5-1.6.8-2.5 1A4 4 0 0012 8a11.2 11.2 0 01-8.1-4.1 4 4 0 001.2 5.4c-.6 0-1.2-.2-1.7-.5 0 1.9 1.3 3.5 3.2 3.9-.6.2-1.2.2-1.8.1.5 1.6 2 2.7 3.8 2.8A8 8 0 012 18.6 11.3 11.3 0 008.1 20c7.3 0 11.3-6.1 11.3-11.3v-.5c.8-.6 1.5-1.4 2-2.4z" />,
  youtube: <path d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.1 5 12 5 12 5s-6.1 0-7.8.4A2.5 2.5 0 002.4 7.2C2 8.9 2 12 2 12s0 3.1.4 4.8a2.5 2.5 0 001.8 1.8C5.9 19 12 19 12 19s6.1 0 7.8-.4a2.5 2.5 0 001.8-1.8c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15V9l5 3-5 3z" />,
  linkedin: <path d="M6 9h3v10H6zM7.5 4a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zM11 9h2.9v1.4h.1c.4-.8 1.4-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8V19h-3v-4.8c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V19h-3V9z" />,
  child: <path d="M12 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-5 18v-3c0-2.2 2.2-4 5-4s5 1.8 5 4v3" />,
  women: <path d="M12 3a3 3 0 100 6 3 3 0 000-6zm-3 9h6l-1 4h2v2h-3v3h-2v-3H8v-2h2l-1-4z" />,
  history: <path d="M12 8v5l3 2M3 12a9 9 0 109-9" />,
  school: <path d="M2 10l10-5 10 5-10 5-10-5zm4 2v4l6 3 6-3v-4" />,
  camera: (
    <>
      <path d="M4 7h4l2-2h4l2 2h4v12H4z" />
      <circle cx="12" cy="13" r="3" />
    </>
  ),
  truck: <path d="M1 6h13v8H1V6zm13 2h4l3 3v3h-7V8zm-8 9a2 2 0 100 4 2 2 0 000-4zm11 0a2 2 0 100 4 2 2 0 000-4z" />,
  digital: <path d="M3 4h18v14H3V4zm2 2v10h14V6H5zm2 12h10v2H7z" />,
  fundraising: <path d="M12 21s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.5-7 10-7 10zM12 8v6m-3-3h6" />,
  hand: <path d="M5 12v6h12v-5c0-1.7-1.3-3-3-3h-1V4a1 1 0 10-2 0v6h-1V3a1 1 0 10-2 0v7H7V6a1 1 0 10-2 0v6z" />,
  group: <path d="M9 10a3 3 0 100-6 3 3 0 000 6zm6 1a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM4 20v-1.5C4 16.6 6.7 15 10 15s6 1.6 6 3.5V20H4zm12 0v-1c0-1.2-.5-2.2-1.4-3 2 .1 3.4 1.1 3.4 2.5V20h-2z" />,
  spark: <path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5zm7 13l1.2 2.8L23 19l-2.8 1.2L19 23l-1.2-2.8L15 19l2.8-1.2L19 15zM5 15l.9 2L8 18l-2.1.9L5 21l-.9-2.1L2 18l2.1-.9L5 15z" />,
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5", className)}
    >
      {paths[name]}
    </svg>
  );
}
