import { clsx } from "clsx";
import Image from "next/image";
import type { Artwork } from "@/content/artwork";

/** A small museum label: title, painter and year. */
export function Label({
  art,
  dark,
  className,
}: {
  art: Artwork;
  /** For labels on the dark Pause section. */
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        "text-[11px] leading-snug",
        dark ? "text-[#bfbdb3]" : "text-muted",
        className
      )}
    >
      <i className={clsx("font-serif text-[13px] not-italic", dark ? "text-ivory" : "text-ink")}>
        {art.title}
      </i>
      <span className={clsx("mx-1.5", dark ? "text-[#827c6f]" : "text-line")}>·</span>
      {art.artist}, {art.year}
    </p>
  );
}

/** A painting that fills its box, cropped around the artwork's focus point. */
export function Painting({
  art,
  sizes,
  priority,
  className,
}: {
  art: Artwork;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={art.src}
      alt={art.alt}
      width={art.width}
      height={art.height}
      sizes={sizes}
      priority={priority}
      className={clsx("h-full w-full object-cover", className)}
      style={{ objectPosition: art.focus }}
    />
  );
}
