import { forwardRef } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  slug: string;
  name: string;
  need: string;
  icon: LucideIcon;
  className?: string;
  style?: CSSProperties;
}

export const IndustryCard = forwardRef<HTMLAnchorElement, IndustryCardProps>(
  function IndustryCard({ slug, name, need, icon: Icon, className, style }, ref) {
    return (
      <Link
        ref={ref}
        href={`/industries/${slug}`}
        style={style}
        className={cn(
          "group flex flex-col rounded-xl border border-border bg-bg p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-md",
          className
        )}
      >
        <Icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" aria-hidden />
        <h3 className="mt-4 text-lg font-semibold text-text">{name}</h3>
        <p className="mt-2 flex-1 text-sm text-text-muted">{need}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </Link>
    );
  }
);
