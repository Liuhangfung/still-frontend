import { ButtonLink, Eyebrow, Icon } from "@still/ui";
import { joinCta, price, priceIncludes, tools } from "@/content/site";
import { art } from "@/content/artwork";
import { ScrollZoom } from "../motion/depth";
import { Stagger, StaggerItem } from "../motion/reveal";
import { Label, Painting } from "./painting";
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
        <figure className="mb-10 md:mb-14">
          <Unveil className="rounded-[3px]">
            <ScrollZoom from={1.25} className="h-[220px] rounded-[3px] md:h-[380px]">
              <Painting art={art.vulcan} sizes="(min-width: 1180px) 1108px, 100vw" />
            </ScrollZoom>
          </Unveil>
          <figcaption className="mt-3 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <span className="font-serif text-[17px]">{art.vulcan.myth}</span>
            <Label art={art.vulcan} />
          </figcaption>
        </figure>
        <Stagger className="grid md:grid-cols-2 md:gap-x-[70px]">
          {tools.map((t, i) => (
            <StaggerItem key={t.title}>
              <Rule />
              <article className="flex items-start gap-[18px] py-[25px]">
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
          <Eyebrow className="mb-[22px]">The planned founder offer</Eyebrow>
          <h2 id="pricing-title" className="text-[46px] tracking-[-0.02em] md:text-[53px]">
            <Lines lines={["A practice.", "Not another feed."]} />
          </h2>
          <p className="mt-5 max-w-[370px] text-[13px] text-muted md:mt-6">
            One guided programme. Practical tools. No trading-account connection and no need to
            watch markets inside Still.
          </p>
          <p className="mt-5 max-w-[370px] text-[13px] text-muted md:mt-6">
            Join the founder list to hear when the iPhone app is ready and see the final offer
            before you decide.
          </p>
        </div>
        <div className="border-t border-[#c9beab] pt-7 md:border-l md:border-t-0 md:pl-[35px] md:pt-0 lg:pl-[70px]">
          <p className="text-[10px] uppercase tracking-[1.8px] text-muted">
            56-day programme · Planned founder price
          </p>
          <p className="mt-4 flex items-baseline gap-2.5">
            <span className="font-serif text-[30px] leading-none">{price.currency}</span>
            <span className="font-serif text-[78px] leading-[.95] tracking-[-0.025em] md:text-[83px]">
              {price.founder}
            </span>
          </p>
          <p className="mt-3 text-xs text-muted">One-time in-app purchase at launch</p>
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
              {joinCta.label}
              <Icon name="arrow-right" strokeWidth={1.4} className="text-lg" />
            </ButtonLink>
          </Magnetic>
          <p className="mt-3 text-xs text-muted">Expected regular price: {price.regular}</p>
          <p className="mt-3 max-w-[350px] text-[11px] text-muted">
            Pricing is planned and will be confirmed at launch. Joining is free. No checkout or
            payment on this website.
          </p>
        </div>
      </Wrap>
    </section>
  );
}
