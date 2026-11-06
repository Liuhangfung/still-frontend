import { clsx } from "clsx";
import { siApple, siGoogleplay, type SimpleIcon } from "simple-icons";
import { stores } from "@/content/site";

const logos: Record<(typeof stores)[number]["id"], SimpleIcon> = {
  apple: siApple,
  google: siGoogleplay,
};

/**
 * App Store and Google Play badges in Still's style. Official store badges may
 * only be used once the app is live, so these are our own pills: "Coming soon"
 * and inert until a listing URL is set in content/site.ts.
 */
export function StoreBadges({ className }: { className?: string }) {
  return (
    <ul className={clsx("flex flex-wrap gap-2.5", className)} aria-label="Download Still">
      {stores.map((s) => {
        const live = Boolean(s.url);
        const inner = (
          <>
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-[22px] w-[22px] flex-none"
              fill="currentColor"
            >
              <path d={logos[s.id].path} />
            </svg>
            <span className="flex flex-col leading-none">
              <span
                className={clsx(
                  "text-[9px] uppercase tracking-[1.4px]",
                  live ? "text-ivory/70" : "text-muted"
                )}
              >
                {live ? "Download on" : "Coming soon"}
              </span>
              <span className="mt-1 text-[15px] font-semibold tracking-[-0.01em]">{s.store}</span>
            </span>
          </>
        );
        // Solid like a store badge once live; outlined while it can't be tapped yet,
        // so the founder-list button stays the one primary action.
        const base = clsx(
          "flex min-h-[52px] items-center gap-3 rounded-xl border px-4 py-2",
          live ? "border-ink bg-ink text-ivory" : "border-ink/70 bg-paper/70 text-ink backdrop-blur"
        );
        return (
          <li key={s.id}>
            {live ? (
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(base, "transition-colors hover:bg-ink-soft")}
              >
                {inner}
              </a>
            ) : (
              <span
                aria-label={`${s.store}: coming soon`}
                title="Coming soon"
                className={clsx(base, "cursor-default")}
              >
                {inner}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
