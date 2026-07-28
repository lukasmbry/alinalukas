import { steps, wedding, type Phase } from "@/config/wedding";
import { cn } from "@/lib/utils";

const order: Phase[] = steps.map((s) => s.id);

export function StepNav() {
  const currentIndex = order.indexOf(wedding.phase);

  return (
    <nav aria-label="Status der Hochzeitsplanung" className="border-y border-border bg-card">
      <ol className="mx-auto flex max-w-5xl flex-col gap-5 px-5 py-7 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:px-6 sm:py-8">
        {steps.map((step, i) => {
          const done = i < currentIndex;
          const active = i === currentIndex;
          return (
            <li key={step.id} className="flex min-w-0 flex-1 items-start gap-3">
              <span
                aria-hidden
                className={cn(
                  "mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[0.7rem]",
                  active && "border-primary bg-primary text-primary-foreground",
                  done && "border-accent bg-accent text-accent-foreground",
                  !active && !done && "border-border text-muted-foreground",
                )}
              >
                {done ? "✓" : i + 1}
              </span>
              <span className="flex min-w-0 flex-col">
                <span
                  className={cn(
                    "text-sm tracking-wide",
                    active ? "font-semibold text-foreground" : "text-muted-foreground",
                  )}
                >
                  {step.label}
                  {active && <span className="sr-only"> (aktueller Schritt)</span>}
                </span>
                <span className="text-xs text-muted-foreground">{step.note}</span>
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
