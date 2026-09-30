"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { primaryNavLinks, servicesMenu, webAppLogin } from "@/lib/site-config";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const trigger = triggerRef.current;
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-text lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`absolute inset-y-0 right-0 flex h-full w-full max-w-sm flex-col overflow-y-auto bg-surface p-6 shadow-xl transition-transform duration-200 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-text-muted">Menu</span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-text"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-1">
            <span className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-text-muted">
              {servicesMenu.label}
            </span>
            {servicesMenu.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-text hover:bg-bg"
              >
                {item.label}
              </Link>
            ))}

            <div className="my-2 border-t border-border" />

            {primaryNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-text hover:bg-bg"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-1 border-t border-border pt-6">
            <a
              href={webAppLogin.href}
              className="rounded-md px-3 py-3 text-base font-medium text-text hover:bg-bg"
            >
              {webAppLogin.label}
            </a>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
            <span className="text-sm font-medium text-text-muted">Theme</span>
            <ThemeToggle />
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Button href="/download" variant="primary" className="w-full">
              Get the App
            </Button>
            <Button href="/contact" variant="outline" className="w-full">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
