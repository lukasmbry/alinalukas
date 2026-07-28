import { wedding } from "@/config/wedding";

/** Wandelt ein Datum in das UTC-Format des iCal-Standards um. */
function toICalUTC(value: string) {
  return new Date(value).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function escapeText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

export function buildWeddingICS() {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Alina und Lukas//Hochzeit//DE",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:hochzeit-${wedding.bride.toLowerCase()}-${wedding.groom.toLowerCase()}-2027@wedding`,
    `DTSTAMP:${toICalUTC(new Date().toISOString())}`,
    `DTSTART:${toICalUTC(wedding.startISO)}`,
    `DTEND:${toICalUTC(wedding.endISO)}`,
    `SUMMARY:${escapeText(wedding.calendarTitle)}`,
    `LOCATION:${escapeText(wedding.address)}`,
    `DESCRIPTION:${escapeText(
      `Wir feiern unsere Hochzeit auf ${wedding.venue} in ${wedding.city}. Wir freuen uns auf euch!`,
    )}`,
    "STATUS:CONFIRMED",
    "BEGIN:VALARM",
    "TRIGGER:-P1D",
    "ACTION:DISPLAY",
    `DESCRIPTION:${escapeText(wedding.calendarTitle)}`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return lines.join("\r\n");
}

export function downloadWeddingICS() {
  const blob = new Blob([buildWeddingICS()], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "hochzeit-alina-und-lukas.ics";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
