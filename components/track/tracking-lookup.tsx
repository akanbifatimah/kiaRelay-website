"use client";

import { useState, type FormEvent } from "react";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { trackingTimeline } from "@/lib/content";
import { cn } from "@/lib/utils";

// Demo-only: no backend order lookup exists yet, so every submitted number
// resolves to the same sample "In Transit" state.
// TODO: replace with a real lookup against GET /shipments/:trackingNumber
const CURRENT_STEP_INDEX = 2;

export function TrackingLookup() {
  const [value, setValue] = useState("");
  const [submittedNumber, setSubmittedNumber] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    setSubmittedNumber(trimmed);
  }

  const progress = ((CURRENT_STEP_INDEX + 1) / trackingTimeline.length) * 100;

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <Field label="Tracking number" htmlFor="trackingNumber" hint="Try any value — e.g. KR-48213">
            <Input
              id="trackingNumber"
              placeholder="e.g. KR-48213"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </Field>
        </div>
        <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
          Track
        </Button>
      </form>

      {submittedNumber ? (
        <div className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-semibold text-text">Tracking {submittedNumber}</p>
            <span className="rounded-full bg-warning/10 px-3 py-1 text-xs font-semibold text-warning">
              Demo result
            </span>
          </div>
          <p className="mt-1 text-xs text-text-muted">
            This is a sample status shown for demonstration — no real order exists for this
            number yet.
          </p>

          <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-bg">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>

          <ol className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {trackingTimeline.map((step, index) => {
              const isComplete = index <= CURRENT_STEP_INDEX;
              const isCurrent = index === CURRENT_STEP_INDEX;
              return (
                <li key={step.label} className="flex flex-col items-center text-center">
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full",
                      isComplete
                        ? "bg-primary text-primary-foreground"
                        : "bg-bg text-text-muted ring-1 ring-border"
                    )}
                  >
                    <step.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <p className={cn("mt-3 text-sm font-semibold", isComplete ? "text-text" : "text-text-muted")}>
                    {step.label}
                  </p>
                  {isCurrent ? (
                    <p className="mt-1 text-xs font-medium text-primary">Current status</p>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>
      ) : null}
    </div>
  );
}
