import { siDiscord, siInstagram, siTiktok, siX, siYoutube, type SimpleIcon } from "simple-icons";
import { socials } from "@/content/site";

const logos: Record<(typeof socials)[number]["network"], SimpleIcon> = {
  x: siX,
  instagram: siInstagram,
  tiktok: siTiktok,
  youtube: siYoutube,
  discord: siDiscord,
};

const circle =
  "flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-[transform,background-color]";

/** Round social logo buttons. Each becomes a link once its URL is set in content/site.ts. */
export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-3" aria-label="Still on social media">
      {socials.map((s) => {
        const logo = (
          <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
            <path d={logos[s.network].path} />
          </svg>
        );
        return (
          <li key={s.network}>
            {s.url ? (
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`${circle} hover:-translate-y-0.5 hover:bg-ink/5`}
              >
                {logo}
              </a>
            ) : (
              <span
                aria-label={`${s.label} (coming soon)`}
                title="Coming soon"
                className={`${circle} opacity-60`}
              >
                {logo}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
