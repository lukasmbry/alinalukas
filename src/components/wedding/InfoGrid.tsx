const info = [
  {
    title: "Location",
    lines: [
      "Burg Schwarzenstein",
      "Rosengasse 32",
      "65366 Geisenheim-Johannisberg",
      "Trauung und Feier finden auf dem Burggelände statt.",
    ],
  },
  {
    title: "Übernachtung",
    lines: [
      "Auf der Burg steht ein Zimmerkontingent für unsere Gäste bereit.",
      "Bitte gebt im Formular an, ob ihr ein Zimmer benötigt – wir reservieren für euch.",
    ],
  },
  {
    title: "Anreise",
    lines: [
      "Bahnhof Geisenheim (ca. 10 Min. mit dem Taxi).",
      "Parkplätze sind direkt an der Burg vorhanden.",
      "Für die späte Rückfahrt organisieren wir Shuttles.",
    ],
  },
  {
    title: "Dresscode",
    lines: ["Festlich. Erdtöne, Creme und Salbei passen wunderbar zum Tag.", "Bitte kein Weiß."],
  },
];

export function InfoGrid() {
  return (
    <section id="infos" className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-28">
      <div className="text-center">
        <p className="eyebrow">Gut zu wissen</p>
        <h2 className="rule-line mt-4 text-3xl sm:text-5xl">Infos für euch</h2>
      </div>
      <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:mt-14 sm:grid-cols-2">
        {info.map((block) => (
          <article key={block.title} className="bg-background p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl">{block.title}</h3>
            <div className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
              {block.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
