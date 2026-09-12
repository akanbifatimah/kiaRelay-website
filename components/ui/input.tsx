import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const inputClasses =
  "block w-full rounded-md border border-border bg-surface px-4 py-3 text-base text-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return <input ref={ref} className={cn(inputClasses, className)} {...props} />;
  }
);
