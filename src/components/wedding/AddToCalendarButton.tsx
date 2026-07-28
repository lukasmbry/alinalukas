import { downloadWeddingICS } from "@/lib/calendar";

export function AddToCalendarButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={downloadWeddingICS}
      className={`inline-flex items-center justify-center gap-2 border border-primary px-6 py-3.5 text-center text-[0.7rem] leading-tight tracking-[0.16em] uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:px-8 sm:py-3 sm:text-xs sm:tracking-[0.2em] ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-4 w-4"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18M12 14v4M10 16h4" strokeLinecap="round" />
      </svg>
      Zum Kalender hinzufügen
    </button>
  );
}
