"use client";

import { useState } from "react";
import { FigmaEmbed } from "@/components/FigmaEmbed";
import { SidePanel, useSidePanel } from "@/components/SidePanel";

type PortfolioViewProps = {
  isVisible: boolean;
};

export function PortfolioView({ isVisible }: PortfolioViewProps) {
  const { isOpen, toggle } = useSidePanel();

  return (
    <div
      className={`relative flex h-screen transition-opacity duration-600 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDuration: "600ms" }}
    >
      <main className={`min-w-0 flex-1 ${isOpen ? "lg:mr-0" : ""}`}>
        <FigmaEmbed />
      </main>
      <SidePanel isOpen={isOpen} onToggle={toggle} />
    </div>
  );
}
