"use client";

import { useState } from "react";
import { FIGMA_EMBED_URL, FIGMA_FILE_URL } from "@/lib/constants";

export function FigmaEmbed() {
  const [isLoading, setIsLoading] = useState(true);
  const isPlaceholder = FIGMA_EMBED_URL.includes("placeholder");

  if (isPlaceholder) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 bg-neutral-100 p-8 text-center dark:bg-neutral-900">
        <p className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
          Figma embed placeholder
        </p>
        <p className="max-w-md text-sm text-neutral-600 dark:text-neutral-400">
          Add your Figma embed URL in{" "}
          <code className="rounded bg-neutral-200 px-1.5 py-0.5 dark:bg-neutral-800">
            lib/constants.ts
          </code>
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <div className="flex h-full flex-col md:hidden">
        <div className="flex flex-1 flex-col items-center justify-center gap-3 bg-neutral-100 p-8 text-center dark:bg-neutral-900">
          <p className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
            Best viewed on desktop
          </p>
          <p className="max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
            The interactive Figma canvas works best on larger screens. Use the
            menu to explore links and contact info.
          </p>
          <a
            href={FIGMA_FILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            Open in Figma
          </a>
        </div>
      </div>

      <div className="relative hidden h-full md:block">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-900">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-800 dark:border-neutral-700 dark:border-t-neutral-200" />
          </div>
        )}
        <iframe
          src={FIGMA_EMBED_URL}
          allowFullScreen
          title="Portfolio design"
          className="h-full w-full border-0"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
}
