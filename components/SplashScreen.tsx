"use client";

import { useCallback, useEffect, useState } from "react";
import { SITE } from "@/lib/constants";

type SplashScreenProps = {
  onComplete: () => void;
};

const TYPING_SPEED_MS = 80;
const PAUSE_AFTER_TYPING_MS = 800;
const FADE_DURATION_MS = 600;

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isFadingOut, setIsFadingOut] = useState(false);
  const fullName = SITE.name;

  const finish = useCallback(() => {
    setIsFadingOut(true);
    window.setTimeout(onComplete, FADE_DURATION_MS);
  }, [onComplete]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setDisplayedText(fullName);
      const pauseTimer = window.setTimeout(finish, PAUSE_AFTER_TYPING_MS);
      return () => window.clearTimeout(pauseTimer);
    }

    let index = 0;
    const typingTimer = window.setInterval(() => {
      index += 1;
      setDisplayedText(fullName.slice(0, index));

      if (index >= fullName.length) {
        window.clearInterval(typingTimer);
        window.setTimeout(finish, PAUSE_AFTER_TYPING_MS);
      }
    }, TYPING_SPEED_MS);

    return () => window.clearInterval(typingTimer);
  }, [finish, fullName]);

  useEffect(() => {
    const handleSkip = () => finish();

    window.addEventListener("click", handleSkip);
    window.addEventListener("keydown", handleSkip);

    return () => {
      window.removeEventListener("click", handleSkip);
      window.removeEventListener("keydown", handleSkip);
    };
  }, [finish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-neutral-950 transition-opacity duration-600 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_DURATION_MS}ms` }}
      aria-live="polite"
    >
      <h1 className="font-mono text-4xl tracking-tight text-white sm:text-5xl">
        {displayedText}
        {!isFadingOut && displayedText.length < fullName.length && (
          <span className="animate-pulse">|</span>
        )}
      </h1>
      <p className="absolute bottom-8 text-sm text-neutral-500">
        Click or press any key to skip
      </p>
    </div>
  );
}
