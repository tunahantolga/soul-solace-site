import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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
    <Card
      className="overflow-hidden border border-border shadow-soft bg-card"
      role="region"
      aria-roledescription="galeri"
      aria-label={`${label} görselleri`}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
    >
      <div className="relative">
        <img
          key={photo.image.src}
          src={photo.image.src}
          srcSet={photo.image.srcSet}
          sizes="(min-width: 896px) 896px, 100vw"
          width={photo.image.width}
          height={photo.image.height}
          alt={photo.alt}
          className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-contain bg-white"
          loading="lazy"
          decoding="async"
        />

        <button
          type="button"
          onClick={prev}
          className="absolute left-4 sm:left-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-black/70 transition"
          aria-label={`Önceki ${label} görseli`}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={next}
          className="absolute right-4 sm:right-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-black/70 transition"
          aria-label={`Sonraki ${label} görseli`}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <CardContent className="py-3 text-center text-sm text-muted-foreground" aria-live="polite">
        {current + 1} / {photos.length}
      </CardContent>
    </Card>
  );
};

export default Gallery;
