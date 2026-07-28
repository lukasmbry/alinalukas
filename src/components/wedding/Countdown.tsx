import { useEffect, useState } from "react";

import { AddToCalendarButton } from "@/components/wedding/AddToCalendarButton";
import { wedding } from "@/config/wedding";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
    done: ms === 0,
  };
}

export function Countdown() {
  const target = new Date(wedding.startISO).getTime();
  const [left, setLeft] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setLeft(diff(target));
    const id = setInterval(() => setLeft(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { value: left?.days, label: "Tage" },
    { value: left?.hours, label: "Stunden" },
    { value: left?.minutes, label: "Minuten" },
    { value: left?.seconds, label: "Sekunden" },
  ];

  return (
    <section className="border-t border-border bg-card px-5 py-14 text-center sm:px-6 sm:py-16">
      <p className="eyebrow">{left?.done ? "Heute ist es so weit" : "Countdown"}</p>
      <h2 className="rule-line mt-4 text-3xl sm:text-4xl">
        {left?.done ? "Wir feiern!" : "Bis wir Ja sagen"}
      </h2>

      <div className="mx-auto mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6">
        {units.map((unit) => (
          <div key={unit.label} className="border border-border bg-background px-2 py-5 sm:py-6">
            <p className="font-display text-4xl leading-none tabular-nums sm:text-5xl">
              {unit.value === undefined ? "–" : String(unit.value).padStart(2, "0")}
            </p>
            <p className="mt-3 text-[0.6rem] tracking-[0.18em] uppercase text-muted-foreground sm:text-[0.65rem] sm:tracking-[0.24em]">
              {unit.label}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-[0.7rem] tracking-[0.16em] uppercase text-muted-foreground sm:text-xs sm:tracking-[0.2em]">
        {wedding.dateLong} · 14:30 Uhr (MESZ)
      </p>

      <AddToCalendarButton className="mt-8" />
    </section>
  );
}
