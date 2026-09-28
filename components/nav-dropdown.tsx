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
  align = "left",
  variant = "link",
}: {
  label: string;
  items: readonly NavDropdownItem[];
  /** "right" anchors the menu to the trigger's right edge (header's right cluster). */
  align?: "left" | "right";
  /** "outline" renders the trigger as a bordered button (the header's Log In). */
  variant?: "link" | "outline";
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastPointerType = useRef<string | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  // Hover only applies to real mice; touch and pen keep tap-to-toggle.
  const onPointerEnter = (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    cancelClose();
    setOpen(true);
  };
  const onPointerLeave = (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    cancelClose();
    // Short delay so moving diagonally toward the menu doesn't close it.
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => cancelClose, []);

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
    <div ref={rootRef} className="relative" onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave}>
      <button
        type="button"
        onPointerDown={(event) => {
          lastPointerType.current = event.pointerType;
        }}
        onClick={() => {
          // A mouse user already opened it by hovering, so a click shouldn't
          // snap it shut. Touch and keyboard (no pointerdown) still toggle.
          if (lastPointerType.current === "mouse") setOpen(true);
          else setOpen((value) => !value);
          lastPointerType.current = null;
        }}
        aria-haspopup="menu"
        aria-expanded={open}
        className={cn(
          "flex items-center gap-1 whitespace-nowrap rounded-md text-sm transition-colors",
          variant === "outline"
            ? "h-11 border border-border px-4 font-semibold text-text hover:bg-bg"
            : "px-3 py-2 font-medium text-text-muted hover:bg-bg hover:text-text"
        )}
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform", open && "rotate-180")} />
      </button>

      {/* pt-2 (not mt-2) keeps the gap under the trigger inside the hover area. */}
      <div
        className={cn(
          "absolute top-full z-50 pt-2",
          align === "right" ? "right-0" : "left-0",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          role="menu"
          className={cn(
            "w-72 rounded-lg border border-border bg-surface p-2 shadow-lg transition-all",
            align === "right" ? "origin-top-right" : "origin-top-left",
            open ? "scale-100 opacity-100" : "scale-95 opacity-0"
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
    </div>
  );
}
