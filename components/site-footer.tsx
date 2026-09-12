import Link from "next/link";
import { Logo } from "@/components/logo";
import { footerSitemap, serviceAreaStates } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-sidebar text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-7">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              Specialized delivery logistics for refineries, construction, healthcare,
              and general commercial shippers across Texas and Louisiana.
            </p>
          </div>

          {footerSitemap.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold text-white">{column.heading}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-white">Service Area</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              {serviceAreaStates.primary.map((state) => (
                <li key={state}>{state}</li>
              ))}
              <li className="text-slate-500">
                Expanding soon: {serviceAreaStates.expanding.join(", ")}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>DOT-aware &middot; Background-checked drivers &middot; Insured shipments</p>
          <p>&copy; {year} KiaRelay. All rights reserved.</p>
        </div>

        {/* TODO: replace with real office phone/email/address once provided. */}
        <p className="mt-4 text-xs text-slate-500">
          Contact details coming soon — placeholder footer, pending real business info.
        </p>
      </div>
    </footer>
  );
}
