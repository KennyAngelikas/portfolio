"use client";

import { useEffect, useState } from "react";
import {
  FIGMA_FILE_URL,
  NAV_LINKS,
  SITE,
  SOCIAL_LINKS,
} from "@/lib/constants";

type SidePanelProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export function SidePanel({ isOpen, onToggle }: SidePanelProps) {
  const isPlaceholderFigma = FIGMA_FILE_URL.includes("placeholder");

  const toggleButtonClass =
    "fixed right-4 top-4 z-40 rounded-md border border-white/20 bg-neutral-950/90 px-3 py-2 text-sm font-medium text-white/60 shadow-sm backdrop-blur-sm hover:bg-neutral-800 hover:text-white/80";
  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={onToggle}
          className={toggleButtonClass}
          aria-expanded={isOpen}
          aria-controls="side-panel"
        >
          Menu
        </button>
      )}

      {isOpen && (
        <button
          type="button"
          onClick={onToggle}
          className={`${toggleButtonClass} lg:hidden`}
          aria-expanded={isOpen}
          aria-controls="side-panel"
        >
          Close
        </button>
      )}

      <aside
        id="side-panel"
        className={`fixed inset-y-0 right-0 z-30 flex w-80 shrink-0 flex-col border-l border-neutral-800 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black transition-transform duration-300 lg:static ${
          isOpen ? "translate-x-0" : "translate-x-full lg:hidden"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <div>
            <h2 className="text-xl font-semibold text-white">{SITE.name}</h2>
            <p className="text-sm text-white/50">{SITE.tagline}</p>
          </div>
          <button
            type="button"
            onClick={onToggle}
            className="hidden rounded-md px-2 py-1 text-sm text-white/60 hover:bg-white/10 hover:text-white/80 lg:block"
            aria-label="Collapse panel"
          >
            Hide
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wide text-white/90">
            Navigate
          </p>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white/80"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto border-t border-white/10 p-4">
          <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wide text-white/90">
            Contact
          </p>
          <div className="flex flex-col gap-1">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="rounded-md px-2 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white/80"
              >
                {link.label}
              </a>
            ))}
          </div>

          {!isPlaceholderFigma && (
            <a
              href={FIGMA_FILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block rounded-md border border-white/30 px-3 py-2 text-center text-sm font-medium text-white hover:bg-white/10"
            >
              Open in Figma
            </a>
          )}
        </div>
      </aside>

      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-20 bg-black/30 lg:hidden"
          onClick={onToggle}
          aria-label="Close menu overlay"
        />
      )}
    </>
  );
}

export function useSidePanel() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsOpen(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsOpen(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return {
    isOpen,
    toggle: () => setIsOpen((open) => !open),
  };
}
