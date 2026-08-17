"use client";

import { Section } from "./primitives";
import { Reveal, MaskText } from "@/lib/legacy/motion";

export function FinalReveal() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section id="final-reveal" tone="ink" className="grain min-h-[100svh] flex items-center">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal>
          <div className="font-mono-caps mb-8 text-gold">14 — Final Reveal</div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] text-ivory-fade">
            <MaskText text="Your story is still being written." amount={0.4} />
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-10 font-display text-xl italic text-ivory sm:text-2xl md:text-3xl">
            This archive is not the ending.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-2 font-display text-2xl italic text-gold sm:text-3xl md:text-4xl">
            It&rsquo;s a beginning.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="hairline-gold my-16 w-32" />
        </Reveal>

        <Reveal delay={0.35}>
          <div className="space-y-2">
            <p className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-none text-ivory-fade">
              SHATTA WALE
            </p>
            <p className="font-mono-caps text-gold">The story continues.</p>
          </div>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row">
            <button
              onClick={() => scrollTo("hero")}
              className="focus-legacy border border-gold bg-gold px-8 py-3.5 font-mono-caps text-ink transition-colors hover:bg-transparent hover:text-gold"
            >
              Enter The Archive Again
            </button>
            <button
              onClick={() => scrollTo("contribute")}
              className="focus-legacy border border-ivory/30 px-8 py-3.5 font-mono-caps text-ivory transition-colors hover:border-ivory hover:bg-ivory/5"
            >
              Leave A Message
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.55}>
          <p className="mt-20 max-w-xl text-sm leading-relaxed text-ivory-dim/70">
            An independent creative archival project. Not affiliated with or
            officially endorsed by Shatta Wale or his management unless
            explicitly stated. Created by Osman Limam.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
