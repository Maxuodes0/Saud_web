export type ProjectCard = {
  title: string;
  alt: string;
  image: string;
};

export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type SaudiClientLogo = {
  id: string;
  label: string;
  tone: "white" | "sky" | "mint" | "violet" | "gold";
};

export type SocialAccount = {
  id: string;
  platform: string;
  handle: string;
  href: string;
  icon: "instagram" | "x" | "linkedin" | "youtube" | "email";
};

export type ContactInfoBlock = {
  title: string;
  description: string;
  cta: string;
  href: string;
};

export const HERO_TITLE_WORDS = ["WE", "FRAME", "STORIES"];

export const HERO_SUBTITLE =
  "Cinematic photography and visual direction for brands, people, and meaningful moments.";

export const PROJECTS_HEADING_WORDS = [
  "Selected",
  "Photography",
  "&",
  "Production",
  "Work",
];

export const PROJECT_CARDS: ProjectCard[] = [
  {
    title: "Commercial Portrait Direction",
    alt: "Portrait camera setup in studio lighting",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "On-Set Production & Lighting",
    alt: "Film production set with dramatic light",
    image:
      "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Brand Film Post-Production",
    alt: "Video editing and post-production workstation",
    image:
      "https://images.unsplash.com/photo-1574717024453-354056d8477c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Music Video Color Grading",
    alt: "Colorful cinematic production frame",
    image:
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Social Campaign Reel Production",
    alt: "Professional filming for social campaign",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=900&q=80",
  },
];

export const SMOOTH_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const GALLERY_DIMENSIONS = [
  { width: 920, height: 1240 },
  { width: 920, height: 920 },
  { width: 920, height: 1320 },
  { width: 1200, height: 900 },
  { width: 980, height: 1360 },
  { width: 940, height: 1260 },
] as const;

export const GALLERY_IMAGES: GalleryImage[] = Array.from(
  { length: 15 },
  (_, index) => {
    const size = GALLERY_DIMENSIONS[index % GALLERY_DIMENSIONS.length];
    const id = index + 1;

    return {
      id,
      src: `https://picsum.photos/seed/professional-studio-${id}/${size.width}/${size.height}`,
      alt: `Random project gallery image ${id}`,
      width: size.width,
      height: size.height,
    };
  },
);

export const SAUDI_CLIENT_LOGOS: SaudiClientLogo[] = [
  { id: "aramco", label: "aramco", tone: "mint" },
  { id: "stc", label: "stc", tone: "violet" },
  { id: "sabic", label: "SABIC", tone: "white" },
  { id: "saudia", label: "SAUDIA", tone: "white" },
  { id: "al-rajhi", label: "Al Rajhi Bank", tone: "sky" },
  { id: "almarai", label: "ALMARAI", tone: "white" },
  { id: "jarir", label: "Jarir", tone: "gold" },
  { id: "neom", label: "NEOM", tone: "white" },
];

export const CLIENTS_STRIP_LABEL = "Trusted Clients";

export const CONTACT_HEADING = "just send it.";

export const CONTACT_SUBTITLE =
  "Share your idea, timeline, and goals. We usually respond within one business day.";

export const CONTACT_INFO_BLOCKS: ContactInfoBlock[] = [
  {
    title: "You don't like forms?",
    description: "Send us your brief directly and we'll reply fast.",
    cta: "hello@yourstudio.com",
    href: "mailto:hello@yourstudio.com",
  },
  {
    title: "Looking to do great work?",
    description: "Open for selected collaborations, production, and campaigns.",
    cta: "Book a discovery call",
    href: "#",
  },
];

export const SOCIAL_ACCOUNTS: SocialAccount[] = [
  {
    id: "instagram",
    platform: "Instagram",
    handle: "@yourstudio",
    href: "#",
    icon: "instagram",
  },
  {
    id: "x",
    platform: "X",
    handle: "@yourstudio",
    href: "#",
    icon: "x",
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    handle: "Your Studio",
    href: "#",
    icon: "linkedin",
  },
  {
    id: "youtube",
    platform: "YouTube",
    handle: "Your Studio Films",
    href: "#",
    icon: "youtube",
  },
  {
    id: "email",
    platform: "Email",
    handle: "hello@yourstudio.com",
    href: "mailto:hello@yourstudio.com",
    icon: "email",
  },
];
