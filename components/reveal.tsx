"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right";

const hiddenByDirection: Record<Direction, string> = {
  up: "opacity-0 translate-y-6",
  left: "opacity-0 -translate-x-6",
  right: "opacity-0 translate-x-6",
};

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  as?: "div" | "li";
  className?: string;
}

// Fades/slides its own wrapper element into place the first time it enters
// the viewport. Renders the element itself (via `as`) rather than cloning a
// server-rendered child — children crossing the Server/Client Component
// boundary are serialized, and cloneElement onto them doesn't reliably
// survive hydration (see the hydration-mismatch note in Reveal's history).
export function Reveal({ children, delay = 0, direction = "up", as: Tag = "div", className }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reveal = () => setVisible(true);
    const node = ref.current;

    // Safety net: content must never be stuck permanently hidden — if the
    // ref never attaches, IntersectionObserver isn't supported, or the
    // observer simply never fires, force it visible after a short delay.
    const fallback = window.setTimeout(reveal, 900);

    if (!node || typeof IntersectionObserver === "undefined") {
      reveal();
      return () => window.clearTimeout(fallback);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-x-0 translate-y-0" : hiddenByDirection[direction],
        className
      )}
    >
      {children}
    </Tag>
  );
}
