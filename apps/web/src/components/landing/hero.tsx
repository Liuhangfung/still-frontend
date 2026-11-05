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
        <svg viewBox="0 0 24 24" fill="#3DDC84" aria-hidden className="h-[26px] w-[26px]">
          <path d="M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9037-.4223-1.3065-.1238-.4207.3118-.5452.9135-.2833 1.3651.6876 1.1855 1.374 2.3717 2.0606 3.5577-1.7765 1.0168-3.3002 2.4931-4.249 4.3008C.8698 15.5765.2783 17.9172.209 20.2813v.0157h23.582v-.0157c-.0695-2.3622-.6612-4.7023-1.7618-6.7989-.9467-1.8075-2.4688-3.2853-4.2441-4.3027.6837-1.1806 1.3672-2.3609 2.0508-3.5413.2614-.4511.1377-1.0527-.2832-1.3653-.4029-.2985-.9754-.2401-1.3067.1239a1.1452 1.1452 0 0 0-.1406.1913zM6.7954 15.0137a1.1463 1.1463 0 0 1 1.1465 1.1465 1.1463 1.1463 0 0 1-1.1465 1.1445 1.1463 1.1463 0 0 1-1.1465-1.1445 1.1463 1.1463 0 0 1 1.1465-1.1465zm10.4092 0a1.1463 1.1463 0 0 1 1.1465 1.1465 1.1463 1.1463 0 0 1-1.1465 1.1445 1.1463 1.1463 0 0 1-1.1465-1.1445 1.1463 1.1463 0 0 1 1.1465-1.1465z" />
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
              Still is a 56-day programme that rebuilds your whole trading behaviour:{" "}
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
