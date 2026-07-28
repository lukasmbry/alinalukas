/**
 * Zentrale Konfiguration der Hochzeitsseite.
 *
 * `phase` steuert, welche Inhalte angezeigt werden:
 *  - "save-the-date": Ankündigung + Rückmeldeformular (BRYTER)
 *  - "invitation":    Offizielle Einladung mit Details & Unterkunft
 *  - "agenda":        Finaler Tagesablauf kurz vor der Hochzeit
 *  - "after":         Nach der Hochzeit (Danke)
 *
 * Später einfach `phase` umstellen – die Seite passt sich automatisch an.
 */
export type Phase = "save-the-date" | "invitation" | "agenda" | "after";

export const wedding = {
  phase: "save-the-date" as Phase,
  bride: "Alina",
  groom: "Lukas",
  dateISO: "2027-08-27",
  /** Startzeitpunkt der Hochzeit – 27.08.2027, 14:30 Uhr CET/MESZ (UTC+2). */
  startISO: "2027-08-27T14:30:00+02:00",
  /** Ende der Feier – 28.08.2027, 03:00 Uhr (UTC+2). */
  endISO: "2027-08-28T03:00:00+02:00",
  calendarTitle: "Hochzeit Alina und Lukas",
  dateLong: "27. August 2027",
  weekday: "Freitag",
  venue: "Burg Schwarzenstein",
  city: "Geisenheim-Johannisberg",
  address: "Burg Schwarzenstein, Rosengasse 32, 65366 Geisenheim-Johannisberg",

  rsvpDeadline: "31. Dezember 2026",
  /**
   * BRYTER-Modul: hier später die Embed-URL eures BRYTER-Moduls eintragen.
   * Solange der Wert leer ist, wird ein Platzhalter angezeigt.
   */
  bryterUrl: "https://mechtech.bryter.io/s/AH9BbQcyRAehiEJ7lNNXXw/std",
  bryterHeight: 600,

} as const;

export const steps: { id: Phase; label: string; note: string }[] = [
  { id: "save-the-date", label: "Save the Date", note: "Termin vormerken & rückmelden" },
  { id: "invitation", label: "Einladung", note: "Alle Details zum Tag" },
  { id: "agenda", label: "Agenda", note: "Der Ablauf im Detail" },
  { id: "after", label: "Danke", note: "Erinnerungen & Fotos" },
];

export const agenda = [
  { time: "14:00", title: "Ankunft & Empfang", text: "Sekt, Sonne und erstes Wiedersehen im Burghof." },
  { time: "15:00", title: "Freie Trauung", text: "Zeremonie in den Weinbergen mit Blick über den Rhein." },
  { time: "16:00", title: "Gratulation & Fotos", text: "Kaffee, Kuchen und Gruppenbilder." },
  { time: "18:30", title: "Dinner", text: "Festliches Menü im Burgsaal." },
  { time: "21:00", title: "Party", text: "Eröffnungstanz, Musik und Tanzfläche bis spät." },
  { time: "01:00", title: "Mitternachtssnack", text: "Für alle, die durchhalten." },
];
