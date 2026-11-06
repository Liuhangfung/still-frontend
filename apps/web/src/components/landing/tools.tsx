import { ButtonLink, Eyebrow, Icon } from "@still/ui";
import { joinCta, price, priceIncludes, tools } from "@/content/site";
import { Stagger, StaggerItem } from "../motion/reveal";
import { Painting } from "./painting";
import { PriceTag } from "./price-tag";
import { Section, Wrap } from "./section";
import { Lines, Magnetic, Rule, Unveil } from "../motion/scenes";

/** Your own tools, not a dashboard full of promises. */
export function Tools() {
  return (
    <Section labelledBy="tools-title">
      <Wrap>
        <div className="mb-[26px] grid gap-[23px] md:mb-[42px] md:grid-cols-2 md:gap-[45px] lg:gap-[90px]">
          <div>
            <Eyebrow className="mb-[19px]">Not just a completed programme</Eyebrow>
            <h2 id="tools-title" className="section-title">
              <Lines lines={["Tools for the days", "that follow."]} />
            </h2>
          </div>
          <p className="max-w-[390px] self-end text-[13px] leading-[1.9] text-muted md:mb-1.5">
            Build them in your own words. Use them in your own market. Return to them when a
            decision feels difficult.
          </p>
        </div>
        <Stagger className="grid md:grid-cols-2 md:gap-x-[70px] md:gap-y-4">
          {tools.map((t, i) => (
            <StaggerItem key={t.title}>
              <Unveil className="mb-5 mt-2 h-[150px] rounded-[3px] md:h-[190px] lg:h-[215px]">
                <Painting art={t.art} sizes="(min-width: 768px) 520px, 100vw" />
              </Unveil>
              <Rule />
              <article className="flex items-start gap-[18px] pb-[30px] pt-[22px]">
                <span className="min-w-[31px] font-serif text-[29px] leading-none text-[#857a68]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[27px]">{t.title}</h3>
                  <p className="mt-2.5 max-w-[350px] text-[13px] text-muted">{t.text}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-[18px] flex items-start gap-[15px] border-t border-line pt-[25px] text-[13px] leading-[1.8] text-muted md:items-center">
          <Icon name="exercise" strokeWidth={1.4} className="text-[25px] text-gold-text" />A
          practice for the person, not just the trader: movement, sleep awareness, research and time
          away from screens.
        </p>
      </Wrap>
    </Section>
  );
}

/** Planned pricing; there is no checkout on this site (in-app purchase only). */
export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-y border-[#d8d0c2] bg-stone-warm py-[62px] md:py-20"
    >
      <Wrap className="grid items-center gap-9 md:grid-cols-2 md:gap-[45px] lg:gap-[100px]">
        <div>
          <Eyebrow className="mb-[22px]">Founder offer · Limited</Eyebrow>
          <h2 id="pricing-title" className="text-[46px] tracking-[-0.02em] md:text-[53px]">
            <Lines lines={["A practice.", "Not another feed."]} />
          </h2>
          <p className="mt-5 max-w-[370px] text-[13px] text-muted md:mt-6">
            One guided programme. Practical tools. No trading-account connection and no need to
            watch markets inside Still.
          </p>
          <p className="mt-5 max-w-[370px] text-[13px] text-muted md:mt-6">
            Founders get the full programme for {price.currency}
            {price.founder} instead of {price.currency}
            {price.regular}, applied in the app at launch. Join the list now; you decide when you
            see the app.
          </p>
        </div>
        <div className="border-t border-[#c9beab] pt-7 md:border-l md:border-t-0 md:pl-[35px] md:pt-0 lg:pl-[70px]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[10px] uppercase tracking-[1.8px] text-muted">
              56-day programme · Founder offer
            </p>
            <p className="rounded-full bg-ink px-3 py-1 text-[11px] font-medium text-ivory">
              Save {Math.round((1 - price.founder / price.regular) * 100)}%
            </p>
          </div>
          <PriceTag />
          <p className="mt-4 text-xs text-muted">
            One-time in-app purchase · For the first {price.founderSpots} people on the founder list
          </p>
          <ul className="my-6 flex flex-col gap-[11px] text-[13px] text-lead">
            {priceIncludes.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <Icon name="check" strokeWidth={1.4} className="text-sm" />
                {item}
              </li>
            ))}
          </ul>
          <Magnetic strength={0.15} className="w-full md:max-w-[350px]">
            <ButtonLink href={joinCta.href} className="w-full">
              Join free to lock in {price.currency}
              {price.founder}
              <Icon name="arrow-right" strokeWidth={1.4} className="text-lg" />
            </ButtonLink>
          </Magnetic>
          <p className="mt-3 max-w-[350px] text-[11px] text-muted">
            Planned prices, confirmed at launch. The founder price ends after the first{" "}
            {price.founderSpots} founder buyers. Joining is free; there is no checkout or payment on
            this website.
          </p>
        </div>
      </Wrap>
    </section>
  );
}
