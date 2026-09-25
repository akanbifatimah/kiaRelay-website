import Link from "next/link";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { NavDropdown } from "@/components/nav-dropdown";
import { Button } from "@/components/ui/button";
import { primaryNavLinks, servicesMenu } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <NavDropdown label={servicesMenu.label} items={servicesMenu.items} />
          {primaryNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-bg hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {/* No Log In / Sign Up: customers and drivers sign in inside the
              KiaRelay mobile apps; the web app is staff-only. */}
          <ThemeToggle />
          <Button href="/download" variant="primary" size="md">
            Get the App
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
