"use client";

import { cloneElement, isValidElement, useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactElement } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right";

const hiddenByDirection: Record<Direction, string> = {
  up: "opacity-0 translate-y-6",
  left: "opacity-0 -translate-x-6",
  right: "opacity-0 translate-x-6",
};

interface RevealProps {
  children: ReactElement<{ className?: string; style?: CSSProperties }>;
  delay?: number;
  direction?: Direction;
}

// Fades/slides an element into place the first time it enters the viewport.
// Clones the child instead of wrapping it so it can be dropped onto list
// items (li, tr, etc.) without breaking parent content-model rules.
export function Reveal({ children, delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (!isValidElement(children)) return children;

  // cloneElement only forwards this ref descriptor for React to attach to
  // the DOM node after commit — it never reads ref.current during render —
  // but the lint rule can't verify that for an arbitrary function call.
  // eslint-disable-next-line react-hooks/refs
  return cloneElement(children, {
    ref,
    style: { ...children.props.style, transitionDelay: `${delay}ms` },
    className: cn(
      "transition-all duration-700 ease-out",
      visible ? "opacity-100 translate-x-0 translate-y-0" : hiddenByDirection[direction],
      children.props.className
    ),
  } as Partial<unknown> & { ref: typeof ref });
}
