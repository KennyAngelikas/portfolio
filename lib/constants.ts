export const SITE = {
  name: "Kenny Angelikas",
  tagline: "Designer & Developer",
  description: "Portfolio of Kenny — design, development, and creative work.",
} as const;

export const FIGMA_EMBED_URL =
  "https://embed.figma.com/board/ZfkEERy4sTpHF8912wzQoQ/website-portfolio?node-id=0-1&embed-host=share";

/** Public Figma board URL for "Open in Figma" */
export const FIGMA_FILE_URL =
  "https://www.figma.com/board/ZfkEERy4sTpHF8912wzQoQ/website-portfolio?node-id=0-1&t=0x7HGTO5Wt06PEE4-1";

export const INTRO_STORAGE_KEY = "portfolio-intro-seen";

export const SOCIAL_LINKS = [
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
  { label: "GitHub", href: "https://github.com/yourusername" },
] as const;

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
