import Image from "next/image";
import { Float } from "../motion/effects";
import { Reveal, Stagger, StaggerItem } from "../motion/reveal";
import { Section, Wrap } from "./section";
import { SignupForm } from "./signup-form";

const words = ["RESET.", "REBUILD.", "LEVEL UP."];

export function Final() {
  return (
    <Section
      id="join"
      className="relative overflow-hidden border-t-[2.5px] border-ink bg-teal text-center"
    >
      <div className="halftone-drift absolute inset-0 bg-[radial-gradient(rgba(6,78,78,.22)_1.6px,transparent_1.8px)] bg-[length:16px_16px]" />
      <Wrap className="relative">
        <Reveal from="pop">
          <Float distance={8} duration={4}>
            <Image
              src="/images/still-logo-on-dark.svg"
              alt="Still"
              width={200}
              height={200}
              className="mx-auto -my-6"
            />
          </Float>
        </Reveal>
        <h2 className="sr-only">{words.join(" ")}</h2>
        <Stagger
          className="display mb-4 mt-2.5 flex flex-wrap justify-center gap-x-[.3em] text-[clamp(54px,8vw,104px)]"
          gap={0.15}
        >
          {words.map((w) => (
            <StaggerItem key={w} from="pop">
              <span aria-hidden className="block text-ink">
                {w}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.3}>
          <p className="mx-auto mb-8 max-w-[600px] text-[19px] font-medium text-ink">
            56 days from now, you could be trading with a plan instead of a feeling.
          </p>
        </Reveal>
        <Reveal from="zoom" delay={0.4}>
          <SignupForm />
        </Reveal>
      </Wrap>
    </Section>
  );
}
