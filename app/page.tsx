"use client";

import { useCallback, useEffect, useState } from "react";
import { PortfolioView } from "@/components/PortfolioView";
import { SplashScreen } from "@/components/SplashScreen";
import { INTRO_STORAGE_KEY } from "@/lib/constants";

type Phase = "splash" | "main";

export default function HomePage() {
  const [phase, setPhase] = useState<Phase | null>(null);

  useEffect(() => {
    const hasSeenIntro = window.localStorage.getItem(INTRO_STORAGE_KEY) === "true";
    setPhase(hasSeenIntro ? "main" : "splash");
  }, []);

  const handleIntroComplete = useCallback(() => {
    window.localStorage.setItem(INTRO_STORAGE_KEY, "true");
    setPhase("main");
  }, []);

  if (phase === null) {
    return <div className="h-screen bg-neutral-950" />;
  }

  return (
    <>
      {phase === "splash" && <SplashScreen onComplete={handleIntroComplete} />}
      <PortfolioView isVisible={phase === "main"} />
    </>
  );
}
