import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Links to other sites (the web app, store listings) open in a new tab so
 * visitors keep the marketing site open. Spread onto an <a> or <Link>. */
export function externalLinkProps(href: string) {
  return /^https?:\/\//.test(href) ? ({ target: "_blank", rel: "noopener noreferrer" } as const) : {};
}
