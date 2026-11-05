import { ButtonLink, Card, Eyebrow, Icon, Mark } from "@still/ui";
import { joinCta, price, priceIncludes } from "@/content/site";
import { Section, Wrap } from "./section";

export function Pricing() {
  return (
    <Section id="pricing" className="bg-gradient-to-b from-white to-tint">
      <Wrap className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <Eyebrow>Founder price</Eyebrow>
          <h2 className="display mb-[18px] mt-4 text-[clamp(48px,6.6vw,80px)]">
            LESS THAN
            <br />
            <Mark>ONE BAD TRADE.</Mark>
          </h2>
          <p className="max-w-[600px] text-[19px] text-muted">
            Join the founder list. When the app launches, the first 100 get the full 56-day
            programme at the lowest price it will ever be, and help shape the quests.
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
        </div>
        <Card className="relative p-[34px]">
          <div className="absolute -top-5 right-[26px] rotate-3 rounded-[10px] border-[2.5px] border-ink bg-gold px-3.5 py-[7px] text-[13px] font-extrabold tracking-[1px] shadow-comic-sm">
            FIRST 100 ONLY
          </div>
          <Eyebrow>56-day programme</Eyebrow>
          <div className="mb-1 mt-2 flex items-end gap-3.5">
            <span className="font-display text-[76px] leading-[.85] sm:text-[90px]">
              {price.founder}
            </span>
            <span className="mb-2.5 text-[22px] font-bold text-muted line-through">
              {price.regular}
            </span>
          </div>
          <div className="text-sm font-bold text-teal-dark">One-time payment · no subscription</div>
          <ul className="my-6 flex flex-col gap-3">
            {priceIncludes.map((item) => (
              <li key={item} className="flex gap-2.5 text-[15px] font-semibold">
                <Icon name="check" className="mt-0.5 text-[19px] text-teal-dark" />
                {item}
              </li>
            ))}
          </ul>
          <ButtonLink href={joinCta.href} className="w-full">
            {joinCta.label}
          </ButtonLink>
          <div className="mt-4 flex items-center justify-center gap-2 text-[13px] text-muted">
            <Icon name="lock" /> Paid in the app via the App Store or Google Play
          </div>
        </Card>
      </Wrap>
    </Section>
  );
}
