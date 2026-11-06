import { Eyebrow } from "@still/ui";
import Image from "next/image";
import { Wrap } from "./section";
import { SignupForm } from "./signup-form";

/** The founder list. Payment happens only in the app at launch. */
export function Join() {
  return (
    <section
      id="join"
      aria-labelledby="join-title"
      className="relative isolate overflow-hidden border-t border-line pb-12 pt-[62px] md:pb-[83px] md:pt-[88px]"
    >
      <Image
        src="/images/art/fresco.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(245,242,235,.96),rgba(245,242,235,.86))]"
      />
      <Wrap className="grid items-center gap-[30px] md:grid-cols-2 md:gap-[45px] lg:gap-[90px]">
        <div>
          <Eyebrow dot className="mb-5">
            iPhone first · In development
          </Eyebrow>
          <h2 id="join-title" className="text-[47px] tracking-[-0.025em] md:text-[58px]">
            Make room for
            <br />a different routine.
          </h2>
          <p className="mt-5 max-w-[340px] text-[13px] text-lead">
            Launch updates, a first look at the app and details of the founder offer. A small next
            step, with no payment today.
          </p>
        </div>
        <SignupForm />
      </Wrap>
    </section>
  );
}
