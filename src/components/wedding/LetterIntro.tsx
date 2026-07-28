import { useEffect, useState } from "react";

import { wedding } from "@/config/wedding";

const TOTAL_MS = 4400;

/**
 * Intro-Sequenz: ein echter Briefumschlag mit dunkelgrünem Wachssiegel ("A&L")
 * öffnet sich, der Brief fährt heraus – dahinter erscheint die Website.
 */
export function LetterIntro() {
  const [visible, setVisible] = useState(true);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("letter-intro-seen") === "1") {
      setVisible(false);
      return;
    }
    sessionStorage.setItem("letter-intro-seen", "1");
    document.body.style.overflow = "hidden";
    const id = setTimeout(() => setGone(true), TOTAL_MS);
    return () => {
      clearTimeout(id);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (gone || !visible) document.body.style.overflow = "";
  }, [gone, visible]);

  if (!visible || gone) return null;

  const skip = () => setGone(true);

  return (
    <div
      className="intro-out fixed inset-0 z-50 flex items-center justify-center bg-background px-6"
      role="presentation"
    >
      <button
        type="button"
        onClick={skip}
        className="absolute top-5 right-5 z-10 text-[0.65rem] tracking-[0.24em] uppercase text-muted-foreground transition-colors hover:text-foreground"
      >
        Überspringen
      </button>

      <div className="letter-stage w-full max-w-[min(88vw,560px)]">
        <div className="envelope-drop relative aspect-[3/2] w-full">
          {/* Schattenwurf des Umschlags */}
          <div
            className="absolute inset-x-[8%] -bottom-[3%] h-[10%] rounded-[50%] bg-foreground/25 blur-2xl"
            aria-hidden
          />

          {/* Rückseite / Innenraum */}
          <div
            className="absolute inset-0 rounded-[3px]"
            style={{
              background: "linear-gradient(160deg, var(--paper) 0%, var(--paper-shade) 100%)",
              boxShadow:
                "0 30px 60px -20px color-mix(in oklab, var(--foreground) 45%, transparent), 0 8px 18px -8px color-mix(in oklab, var(--foreground) 35%, transparent)",
            }}
            aria-hidden
          />

          {/* Brief im Umschlag */}
          <div className="letter-rise absolute inset-x-[7%] bottom-[7%] top-[9%] z-10 origin-bottom">
            <div
              className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-[2px] px-4 text-center sm:gap-3"
              style={{
                background: "var(--paper)",
                boxShadow:
                  "0 14px 28px -14px color-mix(in oklab, var(--foreground) 50%, transparent)",
              }}
            >
              <p className="text-[0.5rem] tracking-[0.3em] uppercase text-muted-foreground sm:text-[0.62rem]">
                Save the Date
              </p>
              <p className="font-display text-[clamp(1.6rem,7vw,2.6rem)] leading-none">
                {wedding.bride}
                <span className="mx-1.5 italic text-accent">&amp;</span>
                {wedding.groom}
              </p>
              <p className="text-[0.5rem] tracking-[0.22em] uppercase text-muted-foreground sm:text-[0.62rem]">
                {wedding.dateLong}
              </p>
            </div>
          </div>

          {/* Vorderseite: Seitentaschen + Bodenklappe */}
          <div
            className="absolute inset-0 z-20 rounded-[3px]"
            style={{
              background: "linear-gradient(180deg, var(--paper-shade), var(--paper-deep))",
              clipPath: "polygon(0 0, 50% 52%, 100% 0, 100% 100%, 0 100%)",
              boxShadow:
                "inset 0 1px 0 color-mix(in oklab, var(--paper) 70%, transparent), 0 -2px 10px -6px color-mix(in oklab, var(--foreground) 40%, transparent)",
            }}
            aria-hidden
          />

          {/* Obere Klappe */}
          <div className="flap-open absolute inset-x-0 top-0 z-40 h-[56%]" aria-hidden>
            <div
              className="h-full w-full rounded-t-[3px]"
              style={{
                background: "linear-gradient(180deg, var(--paper) 0%, var(--paper-shade) 100%)",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                filter:
                  "drop-shadow(0 6px 8px color-mix(in oklab, var(--foreground) 28%, transparent))",
              }}
            />
          </div>

          {/* Wachssiegel */}
          <div
            className="seal-break absolute top-[52%] left-1/2 z-50 grid h-[19%] aspect-square place-items-center rounded-full"
            style={{
              background:
                "radial-gradient(circle at 34% 30%, var(--wax-light), var(--wax) 62%, color-mix(in oklab, var(--wax) 78%, black) 100%)",
              boxShadow:
                "0 6px 14px -4px color-mix(in oklab, var(--foreground) 60%, transparent), inset 0 -2px 4px color-mix(in oklab, black 35%, transparent), inset 0 2px 3px color-mix(in oklab, white 22%, transparent)",
            }}
            aria-hidden
          >
            <span
              className="font-display text-[clamp(0.85rem,3.4vw,1.35rem)] leading-none"
              style={{ color: "color-mix(in oklab, var(--paper) 82%, var(--wax))" }}
            >
              A&amp;L
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
