import { AddToCalendarButton } from "@/components/wedding/AddToCalendarButton";
import heroImage from "@/assets/hero-burg.jpg";
import { wedding } from "@/config/wedding";

const headline: Record<typeof wedding.phase, string> = {
  "save-the-date": "Save the Date",
  invitation: "Wir laden euch ein",
  agenda: "Es ist so weit",
  after: "Danke",
};

const intro: Record<typeof wedding.phase, string> = {
  "save-the-date":
    "Wir heiraten! Haltet euch den Termin frei – die offizielle Einladung mit allen Details folgt. Sagt uns schon jetzt, ob ihr dabei seid.",
  invitation:
    "Es ist offiziell: Wir feiern unsere Hochzeit mit euch. Hier findet ihr alle Details zu Trauung, Feier und Übernachtung.",
  agenda:
    "Bald ist es so weit. Hier findet ihr den finalen Ablauf des Tages und alle letzten Informationen.",
  after: "Danke, dass ihr diesen Tag mit uns gefeiert habt. Hier findet ihr Erinnerungen an unsere Hochzeit.",
};

export function Hero() {
  return (
    <header className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden sm:min-h-[88vh]">
      <img
        src={heroImage}
        alt="Burg Schwarzenstein über den Weinbergen im Rheingau im Morgenlicht"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-background/70" />

      <div className="fade-up mx-auto w-full max-w-2xl px-5 py-20 text-center sm:px-6 sm:py-24">
        <p className="eyebrow">{headline[wedding.phase]}</p>
        <h1 className="mt-6 text-[clamp(2.75rem,13vw,4rem)] leading-[0.95] break-words sm:text-8xl">
          {wedding.bride}
          <span className="mx-2 font-display italic text-accent sm:mx-3">&amp;</span>
          {wedding.groom}
        </h1>
        <p className="rule-line mt-8 text-[0.7rem] tracking-[0.2em] uppercase sm:text-sm sm:tracking-[0.28em]">
          {wedding.dateLong} · {wedding.venue}
        </p>
        <p className="mx-auto mt-8 max-w-lg text-sm leading-relaxed text-muted-foreground">
          {intro[wedding.phase]}
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          {wedding.phase !== "after" && (
            <a
              href="#rueckmeldung"
              className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3.5 text-xs tracking-[0.2em] uppercase text-primary-foreground transition-colors hover:bg-transparent hover:text-primary sm:px-8 sm:py-3"
            >
              Zur Rückmeldung
            </a>
          )}
          <AddToCalendarButton />
        </div>
      </div>
    </header>
  );
}
