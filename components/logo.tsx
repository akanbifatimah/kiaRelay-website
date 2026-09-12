import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// The source mark (public/kia-relay-logo.svg) is a flattened raster on an
// opaque white background, not a transparent vector, so it can't sit
// directly on the navy dark-mode surfaces. Wrapping it in a white chip keeps
// it legible in both themes until a transparent/dark variant is supplied.
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="KiaRelay home"
      className={cn("inline-flex items-center rounded-md bg-white px-2 py-1.5", className)}
    >
      <Image
        src="/kia-relay-logo.svg"
        alt="KiaRelay – Connected Logistics. Delivered."
        width={155}
        height={103}
        priority
        className="h-8 w-auto sm:h-9"
      />
    </Link>
  );
}
