import { ButtonLink, Card, Eyebrow, Icon } from "@still/ui";
import { joinCta, price, priceIncludes } from "@/content/site";
import { CountTo, DrawMark } from "../motion/effects";
import { Reveal, Stagger, StaggerItem } from "../motion/reveal";
import { Tilt } from "../motion/tilt";
import { Section, Wrap } from "./section";

export function Pricing() {
  return (
    <Section id="pricing" className="overflow-hidden bg-gradient-to-b from-white to-tint">
      <Wrap className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <Reveal from="left">
          <Eyebrow>Founder price</Eyebrow>
          <h2 className="display mb-[18px] mt-4 text-[clamp(48px,6.6vw,80px)]">
            LESS THAN
            <br />
            <DrawMark>ONE BAD TRADE.</DrawMark>
          </h2>
          <p className="max-w-[600px] text-[19px] text-muted">
            Join the founder list. When the app launches, the first 100 get all 56 days at the
            lowest price it will ever be, and help shape the quests.
          </p>
          <div className="mt-7 flex items-start gap-4">
            <Icon name="event-calendar" className="mt-0.5 text-[26px] text-teal" />
            <div>
              <b className="block text-base">After day 56</b>
              <p className="text-[15px] text-muted">
                Keep your rank, tools and history for free. An optional membership (
                {price.membership}) keeps daily Rule Checks and new Season Gates going. You decide
                at day 56, never before.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal from="right" delay={0.1}>
          <Tilt className="rounded-[20px]" max={6}>
            <Card className="relative p-[34px]">
              <div className="ribbon-swing absolute -top-5 right-[26px] rounded-[10px] border-[2.5px] border-ink bg-gold px-3.5 py-[7px] text-[13px] font-extrabold tracking-[1px] shadow-comic-sm">
                FIRST 100 ONLY
              </div>
              <Eyebrow>All 56 days</Eyebrow>
              <div className="mb-1 mt-2 flex items-end gap-3.5">
                <span className="font-display text-[76px] leading-[.85] sm:text-[90px]">
                  <CountTo from={79} to={49} prefix="US$" />
                </span>
                <span className="mb-2.5 text-[22px] font-bold text-muted line-through">
                  {price.regular}
                </span>
              </div>
              <div className="text-sm font-bold text-teal-dark">
                One-time payment · no subscription
              </div>
              <Stagger className="my-6 flex flex-col gap-3" gap={0.07} delay={0.3}>
                {priceIncludes.map((item) => (
                  <StaggerItem key={item} from="left">
                    <div className="flex gap-2.5 text-[15px] font-semibold">
                      <Icon name="check" className="mt-0.5 text-[19px] text-teal-dark" />
                      {item}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <ButtonLink href={joinCta.href} className="w-full">
                {joinCta.label}
              </ButtonLink>
              <div className="mt-4 flex items-center justify-center gap-2 text-[13px] text-muted">
                <Icon name="lock" /> Paid in the app via the App Store or Google Play
              </div>
            </Card>
          </Tilt>
        </Reveal>
      </Wrap>
    </Section>
  );
}
