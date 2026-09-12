import Link from "next/link";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { NavDropdown } from "@/components/nav-dropdown";
import { Button } from "@/components/ui/button";
import { LOGIN_URL, SIGNUP_URL, primaryNavLinks, servicesMenu } from "@/lib/site-config";

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
          <ThemeToggle />
          <Button href={LOGIN_URL} variant="outline" size="md">
            Log In
          </Button>
          <Button href={SIGNUP_URL} variant="primary" size="md">
            Sign Up
          </Button>
          <Button href="/business#quote" variant="primary" size="md" className="hidden xl:inline-flex">
            Get a Quote
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
