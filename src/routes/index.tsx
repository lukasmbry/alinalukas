import { createFileRoute } from "@tanstack/react-router";

import { Agenda } from "@/components/wedding/Agenda";
import { Countdown } from "@/components/wedding/Countdown";
import { Hero } from "@/components/wedding/Hero";
import { LocationMap } from "@/components/wedding/LocationMap";
import { LetterIntro } from "@/components/wedding/LetterIntro";
import { InfoGrid } from "@/components/wedding/InfoGrid";
import { RsvpEmbed } from "@/components/wedding/RsvpEmbed";
import { StepNav } from "@/components/wedding/StepNav";
import { wedding } from "@/config/wedding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alina & Lukas — Hochzeit am 27.08.2027" },
      {
        name: "description",
        content:
          "Save the Date für die Hochzeit von Alina und Lukas auf Burg Schwarzenstein. Rückmeldung, Übernachtung und Agenda an einem Ort.",
      },
      { property: "og:title", content: "Alina & Lukas — Hochzeit am 27.08.2027" },
      {
        property: "og:description",
        content: "Save the Date, Rückmeldung und alle Infos zu unserer Hochzeit auf Burg Schwarzenstein.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { phase } = wedding;
  const showDetails = phase !== "save-the-date";
  const showAgenda = phase === "agenda" || phase === "after";
  const showRsvp = phase === "save-the-date" || phase === "invitation";

  return (
    <main>
      <LetterIntro />
      <Hero />
      <Countdown />
      <StepNav />
      {showRsvp && <RsvpEmbed />}
      {showDetails && <InfoGrid />}
      {showAgenda && <Agenda />}

      {phase === "save-the-date" && (
        <section className="border-t border-border bg-card px-5 py-16 text-center sm:px-6 sm:py-20">
          <p className="eyebrow">Ausblick</p>
          <h2 className="rule-line mt-4 text-3xl sm:text-4xl">Was noch kommt</h2>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Die offizielle Einladung mit Uhrzeiten, Übernachtung, Anreise und Dresscode schicken wir
            euch rechtzeitig – und hier auf dieser Seite findet ihr später auch die komplette Agenda
            des Tages.
          </p>
        </section>
      )}

      <LocationMap />

      <footer className="border-t border-border px-5 py-12 text-center sm:px-6">
        <p className="font-display text-2xl">
          {wedding.bride} &amp; {wedding.groom}
        </p>
        <p className="mt-2 text-[0.65rem] tracking-[0.18em] sm:text-xs sm:tracking-[0.24em] uppercase text-muted-foreground">
          {wedding.dateLong} · {wedding.city}
        </p>
      </footer>
    </main>
  );
}
