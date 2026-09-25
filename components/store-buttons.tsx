import { Apple, Play } from "lucide-react";
import { APPS, type AppKey } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface StoreButtonsProps {
  /** Which app the badges download: the customer app or the driver app. */
  app: AppKey;
  className?: string;
  tone?: "dark" | "light";
}

// App Store / Google Play badges for one specific app. KiaRelay ships two
// apps (2026-09-25): "customer" (individual + company accounts in one app)
// and "driver". Links come from site-config — "#" until the real store URLs
// are set via the NEXT_PUBLIC_{CUSTOMER,DRIVER}_{APP_STORE,PLAY_STORE}_URL
// environment variables.
export function StoreButtons({ app, className, tone = "dark" }: StoreButtonsProps) {
  const { name, appStore, playStore } = APPS[app];
  const stores = [
    { key: "ios", label: "App Store", eyebrow: "Download on the", icon: Apple, href: appStore },
    { key: "android", label: "Google Play", eyebrow: "Get it on", icon: Play, href: playStore },
  ];

  return (
    <div className={cn("flex flex-col items-center gap-3 sm:flex-row sm:justify-center", className)}>
      {stores.map((store) => {
        const external = store.href.startsWith("http");
        return (
          <a
            key={store.key}
            href={store.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={`${store.eyebrow} ${store.label}: ${name}`}
            className={cn(
              "flex h-14 w-full items-center gap-3 rounded-lg px-5 transition-colors sm:w-auto",
              tone === "dark"
                ? "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20"
                : "bg-surface text-text ring-1 ring-border hover:bg-bg",
            )}
          >
            <store.icon className="h-6 w-6 shrink-0" aria-hidden />
            <span className="flex flex-col text-left leading-tight">
              <span className="text-[11px] font-medium opacity-80">{store.eyebrow}</span>
              <span className="text-base font-semibold">{store.label}</span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
