import type { ReactNode } from "react";
import { APPS, DOWNLOAD_PATHS, type DownloadPathKey } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface StoreButtonsProps {
  /** Which download path the badges belong to (business, individual, driver). */
  path: DownloadPathKey;
  className?: string;
}

// Official-style App Store / Google Play badges (TC-02, 2026-09-28): black
// badge, the real Apple and four-colour Play marks, and the stores' own
// wording ("Download on the App Store", "GET IT ON Google Play"). The colours
// are fixed by Apple's and Google's badge guidelines, so they're intentionally
// not theme tokens. Links come from site-config — "#" until the
// NEXT_PUBLIC_{CUSTOMER,DRIVER}_{APP_STORE,PLAY_STORE}_URL variables are set.
// TODO: once the listings are live, swap these for the exact badge files
// downloaded from Apple's and Google's marketing sites if brand review asks.
export function StoreButtons({ path, className }: StoreButtonsProps) {
  const { app, label } = DOWNLOAD_PATHS[path];
  const { appStore, playStore } = APPS[app];

  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-3", className)}>
      <StoreBadge href={appStore} ariaLabel={`Download ${label} on the App Store`} eyebrow="Download on the" name="App Store">
        <AppleMark />
      </StoreBadge>
      <StoreBadge href={playStore} ariaLabel={`Get ${label} on Google Play`} eyebrow="GET IT ON" name="Google Play">
        <PlayMark />
      </StoreBadge>
    </div>
  );
}

function StoreBadge({ href, ariaLabel, eyebrow, name, children }: { href: string; ariaLabel: string; eyebrow: string; name: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className="flex h-[52px] min-w-[168px] items-center gap-2.5 rounded-[10px] border border-[#A6A6A6] bg-black px-3.5 text-white transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {children}
      <span className="flex flex-col text-left leading-none">
        <span className={cn("font-medium", eyebrow === "GET IT ON" ? "text-[10px] tracking-wide" : "text-[11px]")}>{eyebrow}</span>
        <span className="mt-0.5 text-[21px] font-semibold tracking-tight">{name}</span>
      </span>
    </a>
  );
}

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden fill="currentColor">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden>
      <path fill="#00A0FF" d="M1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924z" />
      <path fill="#00F076" d="M13.544 10.989l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973z" />
      <path fill="#FFD500" d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594z" />
      <path fill="#FF3A44" d="M13.544 13.056l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
    </svg>
  );
}
