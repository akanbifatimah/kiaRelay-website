"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavDropdownItem {
  label: string;
  href: string;
  description: string;
}

export function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: readonly NavDropdownItem[];
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-bg hover:text-text"
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>

      <div
        role="menu"
        className={cn(
          "absolute left-0 top-full z-50 mt-2 w-72 origin-top-left rounded-lg border border-border bg-surface p-2 shadow-lg transition-all",
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        )}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            role="menuitem"
            onClick={() => setOpen(false)}
            className="block rounded-md px-3 py-2 transition-colors hover:bg-bg"
          >
            <span className="block text-sm font-semibold text-text">{item.label}</span>
            <span className="mt-0.5 block text-xs text-text-muted">{item.description}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
