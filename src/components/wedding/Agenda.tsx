import { agenda } from "@/config/wedding";

export function Agenda() {
  return (
    <section id="agenda" className="border-t border-border bg-card">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-28">
        <div className="text-center">
          <p className="eyebrow">Ablauf</p>
          <h2 className="rule-line mt-4 text-3xl sm:text-5xl">Der Tag</h2>
        </div>
        <ol className="mt-10 space-y-0 sm:mt-14">
          {agenda.map((item) => (
            <li
              key={item.time}
              className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 border-t border-border py-6 last:border-b sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-6 sm:py-7"
            >
              <span className="font-display text-lg text-accent sm:text-xl">{item.time}</span>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
