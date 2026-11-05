import Image from "next/image";
import { Section, Wrap } from "./section";
import { SignupForm } from "./signup-form";

export function Final() {
  return (
    <Section
      id="join"
      className="relative overflow-hidden border-t-[2.5px] border-ink bg-teal text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(rgba(6,78,78,.22)_1.6px,transparent_1.8px)] bg-[length:16px_16px]" />
      <Wrap className="relative">
        <Image
          src="/images/still-logo-on-dark.svg"
          alt="Still"
          width={200}
          height={200}
          className="mx-auto -my-6"
        />
        <h2 className="display mb-4 mt-2.5 text-[clamp(54px,8vw,104px)] text-ink">
          RESET. REBUILD. LEVEL UP.
        </h2>
        <p className="mx-auto mb-8 max-w-[600px] text-[19px] font-medium text-ink">
          56 days from now, you could be trading with a plan instead of a feeling.
        </p>
        <SignupForm />
      </Wrap>
    </Section>
  );
}
