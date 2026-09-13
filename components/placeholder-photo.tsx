import { forwardRef } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PlaceholderPhotoProps {
  seed: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}

// TODO: replace with real KiaRelay freight/industrial photography (loaded
// trailers, yards, drivers, industrial sites) — these are stock placeholders
// from Lorem Picsum, not real KiaRelay imagery.
export const PlaceholderPhoto = forwardRef<HTMLDivElement, PlaceholderPhotoProps>(
  function PlaceholderPhoto({ seed, alt, className, style }, ref) {
    return (
      <div
        ref={ref}
        style={style}
        className={cn(
          "group relative overflow-hidden rounded-2xl bg-bg",
          className
        )}
      >
        <Image
          src={`https://picsum.photos/seed/${seed}/1200/900`}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
    );
  }
);
