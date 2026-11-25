"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectGalleryProps {
  images: string[];
  projectName: string;
}

export default function ProjectGallery({
  images,
  projectName,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-xl border border-border bg-surface text-muted">
        No project images available.
      </div>
    );
  }

  const hasMultipleImages = images.length > 1;

  const previousImage = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const nextImage = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="group relative aspect-video overflow-hidden rounded-xl border border-border bg-surface">
        <Image
          key={images[activeIndex]}
          src={images[activeIndex]}
          alt={`${projectName} screenshot ${activeIndex + 1}`}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 768px) 100vw, 1120px"
          className="object-contain"
        />

        {/* Navigation Controls */}
        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-background/80 text-foreground opacity-100 backdrop-blur transition-colors hover:bg-accent hover:text-background sm:opacity-0 sm:group-hover:opacity-100"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-background/80 text-foreground opacity-100 backdrop-blur transition-colors hover:bg-accent hover:text-background sm:opacity-0 sm:group-hover:opacity-100"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Image Indicators */}
      {hasMultipleImages && (
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show image ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`
                  h-2.5 cursor-pointer rounded-full transition-all
                  ${
                    activeIndex === index
                      ? "w-7 bg-accent"
                      : "w-2.5 bg-border hover:bg-muted"
                  }
                `}
              />
            ))}
          </div>

          <span className="shrink-0 text-xs text-muted">
            {activeIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  );
}
