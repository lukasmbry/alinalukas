import { wedding } from "@/config/wedding";

const query = encodeURIComponent(wedding.address);
const embedSrc = `https://www.google.com/maps?q=${query}&hl=de&z=16&output=embed`;
const linkHref = `https://www.google.com/maps/search/?api=1&query=${query}`;

export function LocationMap() {
  return (
    <section id="anfahrt" className="border-t border-border px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Wo ihr uns findet</p>
        <h2 className="rule-line mt-4 text-3xl sm:text-4xl">Anfahrt</h2>

        <div className="mt-10 overflow-hidden rounded-sm border border-border bg-card shadow-sm">
          <iframe
            title={`Karte – ${wedding.venue}`}
            src={embedSrc}
            className="block h-[300px] w-full sm:h-[420px]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          {wedding.venue} · Rosengasse 32 · 65366 Geisenheim-Johannisberg{" "}
          <span className="hidden sm:inline">— </span>
          <br className="sm:hidden" />
          <a
            href={linkHref}
            target="_blank"
            rel="noreferrer"
            className="story-link text-foreground"
          >
            Route in Google Maps öffnen
          </a>
        </p>
      </div>
    </section>
  );
}
