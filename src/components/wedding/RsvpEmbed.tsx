import { useEffect, useRef, useState } from "react";

import { wedding } from "@/config/wedding";

const IFRAME_ID = "bryter-module-1";

/**
 * Rückmeldeformular.
 * Sobald `bryterUrl` in src/config/wedding.ts gesetzt ist, wird das
 * BRYTER-Modul als iFrame eingebettet. Vorher erscheint ein Platzhalter.
 *
 * Die Höhe passt sich automatisch an: BRYTER schickt per postMessage
 * ("bryter:module" / "set:iframe:height") die aktuelle Inhaltshöhe,
 * nachdem wir dem Modul `isVariableHeight: true` mitgeteilt haben.
 */
export function RsvpEmbed() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(wedding.bryterHeight);

  useEffect(() => {
    let handshake: ReturnType<typeof setInterval> | undefined;

    function announce() {
      frameRef.current?.contentWindow?.postMessage(
        {
          type: "bryter:module",
          action: "set:iframe:data",
          data: { id: IFRAME_ID, isVariableHeight: true },
        },
        "*",
      );
    }

    function onMessage(event: MessageEvent) {
      const data = event.data;
      if (!data || data.type !== "bryter:module" || data.id !== IFRAME_ID) return;

      if (data.action === "set:iframe:height") {
        const next = Number(data.height);
        if (Number.isFinite(next) && next > 0) {
          if (handshake) clearInterval(handshake);
          setHeight(Math.max(next, 200));
        }
      }

      if (data.action === "scrollTo:iframe" && frameRef.current) {
        const box = frameRef.current.getBoundingClientRect();
        const offset = Number(data.paddingTop) || 24;
        if (box.top < offset) {
          window.scrollTo({ top: box.top + window.scrollY - offset, behavior: "smooth" });
        }
      }
    }

    window.addEventListener("message", onMessage);
    // Das Modul registriert seinen Listener erst nach dem Laden – daher
    // solange wiederholt anmelden, bis die erste Höhe zurückkommt.
    announce();
    handshake = setInterval(announce, 500);
    const stop = setTimeout(() => handshake && clearInterval(handshake), 20000);

    return () => {
      window.removeEventListener("message", onMessage);
      if (handshake) clearInterval(handshake);
      clearTimeout(stop);
    };
  }, []);


  return (
    <section id="rueckmeldung" className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-28">
      <div className="text-center">
        <p className="eyebrow">Rückmeldung</p>
        <h2 className="rule-line mt-4 text-3xl sm:text-5xl">Sagt uns Bescheid</h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Kommt ihr? Braucht ihr ein Hotelzimmer auf der Burg? Gibt es Allergien oder
          Verpflegungswünsche? Ein paar Klicks – und wir wissen Bescheid. Wir freuen uns über eure
          Antwort bis zum {wedding.rsvpDeadline}.
        </p>
      </div>

      <div className="mt-10 overflow-hidden sm:mt-12 rounded-lg border border-border bg-card">
        {wedding.bryterUrl ? (
          <iframe
            id={IFRAME_ID}
            ref={frameRef}
            src={wedding.bryterUrl}
            title="Rückmeldeformular zur Hochzeit"
            className="block w-full border-0 transition-[height] duration-300"
            style={{ height: `${height}px` }}
            scrolling="no"
            allow="clipboard-write; camera; microphone; geolocation"
            allowFullScreen
          />

        ) : (
          <div className="flex min-h-72 flex-col items-center justify-center gap-3 px-6 py-14 sm:px-8 sm:py-16 text-center">
            <p className="eyebrow">Formular folgt</p>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Hier erscheint in Kürze das Rückmeldeformular. (Technischer Hinweis: die Embed-URL des
              BRYTER-Moduls in <code>src/config/wedding.ts</code> unter <code>bryterUrl</code>
              &nbsp;eintragen.)
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
