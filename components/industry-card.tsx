import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface IndustryCardProps {
  slug: string;
  name: string;
  need: string;
  icon: LucideIcon;
}

export function IndustryCard({ slug, name, need, icon: Icon }: IndustryCardProps) {
  return (
    <Link
      href={`/industries/${slug}`}
      className="group flex flex-col rounded-xl border border-border bg-bg p-6 transition-colors hover:border-primary"
    >
      <Icon className="h-8 w-8 text-primary" aria-hidden />
      <h3 className="mt-4 text-lg font-semibold text-text">{name}</h3>
      <p className="mt-2 flex-1 text-sm text-text-muted">{need}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}
