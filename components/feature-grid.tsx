import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

interface FeatureGridItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  items: readonly FeatureGridItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const columnClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

export function FeatureGrid({ items, columns = 3, className }: FeatureGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-6", columnClasses[columns], className)}>
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 80}>
          <div className="rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
            <item.icon className="h-8 w-8 text-primary" aria-hidden />
            <h3 className="mt-4 text-lg font-semibold text-text">{item.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{item.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
