"use client";

import { Eyebrow, Icon } from "@still/ui";
import { useState } from "react";
import { art } from "@/content/artwork";
import { Parallax, Tilt } from "../motion/depth";
import { Reveal } from "../motion/reveal";
import { Label, Painting } from "./painting";
import { Wrap } from "./section";

/** A pause is a useful outcome, not a game reward. */
export function Pause() {
  const [stepped, setStepped] = useState(false);

  return (
    <section
      id="pause"
      aria-labelledby="pause-title"
      className="relative isolate overflow-hidden bg-night py-[70px] text-ivory md:py-[110px]"
    >
      {/* Ulysses tied to the mast, on the deepest layer, under a dark veil. */}
      <Parallax depth={220} className="absolute -inset-y-[110px] inset-x-0 -z-20">
        <Painting art={art.sirens} sizes="100vw" />
      </Parallax>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(36,39,36,.95)_0%,rgba(36,39,36,.82)_45%,rgba(36,39,36,.55)_100%)] max-md:bg-[linear-gradient(180deg,rgba(36,39,36,.92),rgba(36,39,36,.8))]"
      />
      <Wrap className="grid items-center gap-9 md:grid-cols-[1.08fr_.92fr] md:gap-[45px] lg:gap-[90px]">
        <div>
          <Eyebrow className="mb-[22px] text-[#b9b09c]">A different kind of progress</Eyebrow>
          <h2
            id="pause-title"
            className="max-w-[470px] text-[46px] tracking-[-0.025em] md:text-[49px] lg:text-[58px]"
          >
            You don’t have to
            <br />
            win it back today.
          </h2>
          <p className="mt-5 max-w-[380px] text-[13px] leading-[1.9] text-[#bfbdb3] md:mt-6">
            When a loss becomes an urge, Pause gives you a moment to check in and return to your own
            rules. Sometimes the useful next step is not another trade.
          </p>
          <p className="mt-7 max-w-[380px] border-l border-gold pl-4 font-serif text-[20px] leading-[1.35] text-ivory">
            {art.sirens.myth} Pause is your mast.
          </p>
          <Label art={art.sirens} dark className="mt-2 pl-4" />
          <a className="text-link mt-6 border-[#827c6f] text-[#dfd8c9]" href="#join">
            Build a routine you can return to
            <Icon name="arrow-right" strokeWidth={1.4} className="text-lg" />
          </a>
        </div>

        <Reveal className="w-full">
          <Tilt max={6} className="mx-auto w-full max-w-[310px]">
            <div
              className="mx-auto w-full max-w-[310px] rounded-2xl bg-ivory bg-cover bg-top px-[26px] py-8 text-center text-ink shadow-float"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(245,242,235,.8), #F5F2EB 80%), url(/images/art/pause.jpg)",
              }}
            >
              <Eyebrow className="mb-[26px] text-[9px] tracking-[2px]">Pause</Eyebrow>
              <h3 className="text-[32px] tracking-[-0.015em]">
                You don’t have to
                <br />
                act right now.
              </h3>
              <div
                aria-hidden
                className="breathe mx-auto mb-4 mt-7 grid h-[61px] w-[61px] place-items-center rounded-full border border-[#91948d]"
              >
                <Icon name="pause" strokeWidth={1.4} className="text-2xl" />
              </div>
              <p className="mb-8 text-xs text-muted">Take one slow breath.</p>
              <p className="mb-6 font-serif text-[21px] leading-[1.16]">
                What are you hoping
                <br />
                the next trade will fix?
              </p>
              <p className="mb-3 mt-4 text-[11px] text-muted">
                Skipping a trade is a valid choice.
              </p>
              <button
                type="button"
                onClick={() => setStepped(true)}
                className="min-h-10 w-full rounded-full border border-ink bg-ink px-2 py-2 font-serif text-[17px] text-ivory hover:bg-ink-soft"
              >
                Step away for now
              </button>
              <p className="mt-3 min-h-[2.4em] text-[10px] text-muted" aria-live="polite">
                {stepped
                  ? "You can step away. No trade is required. This is a preview of the app."
                  : "This screen does not approve a trade."}
              </p>
            </div>
          </Tilt>
        </Reveal>
      </Wrap>
    </section>
  );
}
