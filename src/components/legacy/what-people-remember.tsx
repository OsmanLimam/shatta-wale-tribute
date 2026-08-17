"use client";

import { Section } from "./primitives";
import { Reveal } from "@/lib/legacy/motion";

const perceptions = [
  {
    intro: "To some, he is",
    body: "the voice of a specific Accra moment — the artist whose breakthrough-era singles became the soundtrack to a generation&rsquo;s coming-of-age, played at the weddings, the football viewings, and the ordinary days that turned into memories.",
    tag: "popular music",
  },
  {
    intro: "To others, he represents",
    body: "an uncompromising independence &mdash; a model of how to release, market, and tour without depending on the traditional label infrastructure that previously defined what a Ghanaian artist could be.",
    tag: "independent model",
  },
  {
    intro: "To Ghanaian popular culture,",
    body: "he is one of the most recognizable musical figures of the past two decades &mdash; the artist the conversation keeps returning to, whether in praise, in argument, or in nostalgia for a chapter that turned out to define a stretch of years.",
    tag: "cultural presence",
  },
  {
    intro: "To the people who grew up listening,",
    body: "he is the throughline of a stretch of life &mdash; the artist whose releases marked the seasons, whose public moments marked the years, and whose music is now bound to memories that are older than some of his current listeners.",
    tag: "generational memory",
  },
];

export function WhatPeopleRemember() {
  return (
    <Section id="remember" tone="charcoal" className="grain">
      <div className="mb-16 md:mb-20">
        <Reveal>
          <div className="font-mono-caps mb-5 text-gold">09 — What People Remember</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95]">
            <span className="block text-ivory">A mosaic of</span>
            <span className="block text-ivory-fade">public perception.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-dim sm:text-lg">
            Carefully framed editorial interpretation, drawn from sustained
            Ghanaian entertainment coverage. No fabricated testimonials. The
            distinction between interpretation and direct quotation is
            preserved throughout.
          </p>
        </Reveal>
      </div>

      <div className="space-y-px overflow-hidden border border-hairline bg-hairline">
        {perceptions.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <article className="grid grid-cols-1 gap-6 bg-charcoal p-7 transition-colors hover:bg-charcoal-2 sm:p-9 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-3">
                <span className="font-mono-caps text-gold">{p.tag}</span>
              </div>
              <div className="md:col-span-9">
                <p className="font-display text-2xl leading-snug text-ivory sm:text-3xl md:text-[2rem] md:leading-[1.25]">
                  <span className="text-ivory-dim">{p.intro} </span>
                  <span className="text-ivory">{p.body}</span>
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-8 font-mono-caps text-ivory-dim/70">
          ● Editorial interpretation &mdash; drawn from sustained coverage by
          Graphic Showbiz, MyJoyOnline, Citi Newsroom, Modern Ghana, and Pulse
          Ghana. Not direct quotation.
        </p>
      </Reveal>
    </Section>
  );
}
