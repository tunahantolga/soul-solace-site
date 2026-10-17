import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { GalleryGroup } from "@/lib/types";

interface GalleryTabsProps {
  groups: GalleryGroup[];
}

const PREVIEW_COUNT = 8;

const GalleryTabs = ({ groups }: GalleryTabsProps) => {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);

  const group = groups[active];
  const photos = group.photos;
  const visible = expanded ? photos : photos.slice(0, PREVIEW_COUNT);
  const current = open === null ? null : photos[open];

  const step = (delta: number) => setOpen((i) => (i === null ? i : (i + delta + photos.length) % photos.length));

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open !== null && !dialog.open) dialog.showModal();
    if (open === null && dialog.open) dialog.close();
  }, [open]);

  const selectTab = (index: number) => {
    setActive(index);
    setExpanded(false);
  };

  return (
    <div>
      <div role="tablist" aria-label="Galeri kategorileri" className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
        {groups.map((g, i) => (
          <button
            key={g.id}
            type="button"
            role="tab"
            id={`tab-${g.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${g.id}`}
            onClick={() => selectTab(i)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") selectTab((i + 1) % groups.length);
              if (e.key === "ArrowLeft") selectTab((i - 1 + groups.length) % groups.length);
            }}
            className={`inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              i === active
                ? "bg-foreground text-background"
                : "bg-white text-muted-foreground ring-1 ring-border hover:text-foreground"
            }`}
          >
            {g.title}
            <span className={`text-xs tabular-nums ${i === active ? "text-background/60" : "text-muted-foreground/70"}`}>
              {g.photos.length}
            </span>
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${group.id}`}
        aria-labelledby={`tab-${group.id}`}
        className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
      >
        {visible.map((photo, i) => (
          <button
            key={photo.thumb.src}
            type="button"
            onClick={() => setOpen(i)}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-muted animate-in fade-in duration-500"
            aria-label={`${photo.alt} — büyüt`}
          >
            <img
              src={photo.thumb.src}
              srcSet={photo.thumb.srcSet}
              sizes="(min-width: 1024px) 300px, (min-width: 640px) 33vw, 50vw"
              width={photo.thumb.width}
              height={photo.thumb.height}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <Expand className="absolute bottom-3 right-3 h-5 w-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {photos.length > PREVIEW_COUNT && (
        <div className="mt-8 text-center">
          <button type="button" onClick={() => setExpanded((v) => !v)} className="btn-ghost">
            {expanded ? "Daha az göster" : `Tümünü göster (${photos.length})`}
          </button>
        </div>
      )}

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(null);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") step(-1);
          if (e.key === "ArrowRight") step(1);
        }}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
        aria-label={`${group.title} görselleri`}
        className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-foreground/90 backdrop:backdrop-blur-sm"
      >
        {current && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-4 sm:p-10" onClick={(e) => e.target === e.currentTarget && setOpen(null)}>
            <img
              key={current.full.src}
              src={current.full.src}
              srcSet={current.full.srcSet}
              sizes="90vw"
              alt={current.alt}
              className="max-h-[80vh] max-w-full rounded-xl object-contain shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            />
            <p className="text-sm text-white/80" aria-live="polite">
              {current.alt} · {(open ?? 0) + 1} / {photos.length}
            </p>
            <button
              type="button"
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Kapat"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => step(-1)}
              className="absolute left-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
              aria-label="Önceki görsel"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              className="absolute right-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
              aria-label="Sonraki görsel"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </dialog>
    </div>
  );
};

export default GalleryTabs;
