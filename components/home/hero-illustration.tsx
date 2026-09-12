import type { LucideIcon } from "lucide-react";

interface HeroIllustrationProps {
  trackingLabel: string;
  progress: number;
  fromIcon: LucideIcon;
  toIcon: LucideIcon;
  badgeIcons: readonly [LucideIcon, LucideIcon];
}

// Original geometric/iconographic composition (not a copy of any reference
// image) — a floating tracking-card motif that ties directly to KiaRelay's
// real-time tracking feature rather than generic character art.
export function HeroIllustration({
  trackingLabel,
  progress,
  fromIcon: FromIcon,
  toIcon: ToIcon,
  badgeIcons,
}: HeroIllustrationProps) {
  const [BadgeA, BadgeB] = badgeIcons;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm" aria-hidden>
      <div className="absolute inset-0 rounded-[42%_58%_63%_37%/45%_42%_58%_55%] bg-white/5" />
      <div className="absolute inset-8 rounded-[45%_55%_60%_40%/50%_38%_62%_50%] bg-primary/10" />

      <svg viewBox="0 0 320 320" className="absolute inset-0 h-full w-full" fill="none">
        <path
          d="M44 236 C 104 158, 216 158, 276 82"
          className="stroke-white/20"
          strokeWidth="2"
          strokeDasharray="6 9"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute bottom-16 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20">
        <FromIcon className="h-6 w-6" />
      </div>
      <div className="absolute right-4 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
        <ToIcon className="h-6 w-6" />
      </div>

      <div className="absolute left-1/2 top-2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-white text-sidebar shadow-md">
        <BadgeA className="h-5 w-5" />
      </div>
      <div className="absolute bottom-28 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sidebar shadow-md">
        <BadgeB className="h-5 w-5" />
      </div>

      <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/10 p-5 shadow-xl ring-1 ring-white/15">
        <div className="flex items-center justify-between text-xs font-medium text-white/70">
          <span>{trackingLabel}</span>
          <span className="flex items-center gap-1.5 text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Live
          </span>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
