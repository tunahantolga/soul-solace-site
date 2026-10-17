import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryPhoto } from "@/lib/types";

interface GalleryProps {
  photos: GalleryPhoto[];
  /** Used in the button labels, e.g. "eğitim" -> "Önceki eğitim görseli". */
  label: string;
}

const Gallery = ({ photos, label }: GalleryProps) => {
  const [current, setCurrent] = useState(0);
  const photo = photos[current];

  const prev = () => setCurrent((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setCurrent((i) => (i + 1) % photos.length);

  if (!photo) return null;

  return (
    <div
      className="overflow-hidden rounded-3xl border border-border/80 bg-card shadow-soft"
      role="region"
      aria-roledescription="galeri"
      aria-label={`${label} görselleri`}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
    >
      <div className="aspect-[4/3] bg-white">
        <img
          key={photo.image.src}
          src={photo.image.src}
          srcSet={photo.image.srcSet}
          sizes="(min-width: 1024px) 600px, 100vw"
          width={photo.image.width}
          height={photo.image.height}
          alt={photo.alt}
          className="h-full w-full object-contain animate-in fade-in duration-300"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-border/80 px-4 py-3">
        <span className="text-sm tabular-nums text-muted-foreground" aria-live="polite">
          {current + 1} / {photos.length}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-colors hover:bg-muted"
            aria-label={`Önceki ${label} görseli`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-colors hover:bg-muted"
            aria-label={`Sonraki ${label} görseli`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
