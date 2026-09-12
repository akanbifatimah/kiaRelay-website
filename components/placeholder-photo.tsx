import Image from "next/image";
import { cn } from "@/lib/utils";

interface PlaceholderPhotoProps {
  seed: string;
  alt: string;
  className?: string;
}

// TODO: replace with real KiaRelay freight/industrial photography (loaded
// trailers, yards, drivers, industrial sites) — these are stock placeholders
// from Lorem Picsum, not real KiaRelay imagery.
export function PlaceholderPhoto({ seed, alt, className }: PlaceholderPhotoProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-bg", className)}>
      <Image
        src={`https://picsum.photos/seed/${seed}/1200/900`}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
