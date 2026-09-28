import Link from "next/link";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { NavDropdown } from "@/components/nav-dropdown";
import { Button } from "@/components/ui/button";
import { loginMenu, primaryNavLinks, servicesMenu } from "@/lib/site-config";

// TC-03 (2026-09-28): three zones on desktop, with logo left, nav centred
// and actions right, each given its own column so they never crowd together.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-10 lg:px-8">
        <div className="flex items-center">
          <Logo />
        </div>

        <nav className="hidden items-center gap-2 lg:flex xl:gap-4" aria-label="Primary">
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

        <div className="hidden items-center justify-end gap-4 lg:flex">
          {/* Log In (approved 2026-09-28): KiaRelay Business accounts and
              admins sign in on the web app. Customers and drivers still use
              the mobile apps. */}
          <ThemeToggle />
          <NavDropdown label={loginMenu.label} items={loginMenu.items} align="right" variant="outline" />
          <Button href="/download" variant="primary" size="md">
            Get the App
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
