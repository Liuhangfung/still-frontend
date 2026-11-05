import { ButtonLink, Eyebrow, Icon } from "@still/ui";
import { joinCta, trust } from "@/content/site";
import { FadeUp, HeroArt, HeroHeadline } from "./hero-motion";
import { Wrap } from "./section";

function StoreBadge({ store }: { store: "apple" | "google" }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl bg-ink py-2 pl-3 pr-4 text-white">
      {store === "apple" ? (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-[26px] w-[26px]">
          <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden className="h-[26px] w-[26px]">
          {/* Google Play logo (2022): four-colour play triangle */}
          <path
            fill="#EA4335"
            d="M10.4 11.6 1.1 21.5c.3 1 1.3 1.8 2.4 1.8.5 0 .9-.1 1.3-.4l10.5-6z"
          />
          <path
            fill="#FBBC04"
            d="m19.9 9.9-4.5-2.6-5.1 4.5 5.1 5 4.5-2.5c.8-.4 1.3-1.3 1.3-2.2s-.5-1.8-1.3-2.2z"
          />
          <path fill="#4285F4" d="M1.1 2.5C1 2.7 1 3 1 3.3v17.4c0 .3 0 .6.1.8l9.6-9.6z" />
          <path
            fill="#34A853"
            d="m10.5 12 4.8-4.8L4.8 1.3C4.4 1.1 4 1 3.5 1 2.4 1 1.4 1.8 1.1 2.8z"
          />
        </svg>
      )}
      <div>
        <small className="block text-[10px] leading-[1.1] text-[#BFCFD0]">
          {store === "apple" ? "Coming soon on the" : "Coming soon on"}
        </small>
        <b className="text-[15px] leading-tight">
          {store === "apple" ? "App Store" : "Google Play"}
        </b>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-[radial-gradient(900px_520px_at_78%_30%,#EAF7F7_0%,rgba(234,247,247,0)_70%)] pb-[110px] pt-9 lg:pt-16">
      <Wrap className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <FadeUp delay={0}>
            <Eyebrow>The 56-day trading reset</Eyebrow>
          </FadeUp>
          <HeroHeadline />
          <FadeUp delay={0.55}>
            <p className="mb-[34px] max-w-[600px] text-xl text-muted">
              Still is a 56-day reset for the way you trade:{" "}
              <b className="text-ink">how you think, plan, practise and review.</b> One short quest
              a day, built around your own problems, whether that&apos;s FOMO, revenge trading,
              overtrading or no plan at all.
            </p>
          </FadeUp>
          <FadeUp delay={0.7} className="flex flex-wrap items-center gap-4">
            <ButtonLink href={joinCta.href} className="w-full sm:w-auto">
              {joinCta.label}
            </ButtonLink>
            <ButtonLink href="#how" variant="outline" className="w-full sm:w-auto">
              See how it works
            </ButtonLink>
          </FadeUp>
          <FadeUp
            delay={0.85}
            className="mt-7 flex flex-wrap gap-[22px] text-sm font-semibold text-muted"
          >
            {trust.map((t) => (
              <span key={t.text} className="flex items-center gap-2">
                <Icon name={t.icon} className="text-lg text-teal" />
                {t.text}
              </span>
            ))}
          </FadeUp>
          <FadeUp delay={1} className="mt-[30px] flex flex-wrap items-center gap-3">
            <StoreBadge store="apple" />
            <StoreBadge store="google" />
            <span className="text-[13px] font-semibold text-muted">Founder list hears first</span>
          </FadeUp>
        </div>
        <HeroArt />
      </Wrap>
    </header>
  );
}
