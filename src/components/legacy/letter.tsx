"use client";

import { Section, LocalLine } from "./primitives";
import { Reveal, MaskText } from "@/lib/legacy/motion";
import { letter } from "@/content/letter";

export function Letter() {
  return (
    <Section id="letter" tone="charcoal" className="grain sm-watermark-bl">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="font-mono-caps mb-5 text-center text-gold">
            15 — The Letter
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mb-14 text-center font-display text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.15] text-ivory-fade md:mb-20">
            {letter.title}
          </h2>
        </Reveal>

        <article className="space-y-6">
          {letter.paragraphs.map((para, i) => {
            // First paragraph is the salutation — render larger.
            if (i === 0) {
              return (
                <Reveal key={i}>
                  <div className="space-y-2">
                    <p className="font-display text-2xl italic text-gold sm:text-3xl">
                      {para}
                    </p>
                    {letter.salutationLocal && (
                      <LocalLine lang={letter.salutationLocal.lang}>
                        {letter.salutationLocal.text}
                      </LocalLine>
                    )}
                  </div>
                </Reveal>
              );
            }
            // Second-to-last two paragraphs are the closing lines — italic.
            const isClosing = i >= letter.paragraphs.length - 2;
            return (
              <Reveal key={i} delay={Math.min(i * 0.03, 0.2)}>
                <p
                  className={
                    isClosing
                      ? "font-display text-lg italic leading-relaxed text-ivory sm:text-xl"
                      : "text-base leading-[1.8] text-ivory-dim sm:text-lg sm:leading-[1.85]"
                  }
                >
                  {para}
                </p>
              </Reveal>
            );
          })}
        </article>

        <Reveal>
          <div className="mt-14 space-y-2 text-right">
            <p className="font-display text-xl italic text-ivory-dim">
              {letter.closing}
            </p>
            {letter.closingLocal && (
              <LocalLine
                lang={letter.closingLocal.lang}
                className="justify-end text-right"
              >
                {letter.closingLocal.text}
              </LocalLine>
            )}
            <p className="mt-3 font-mono-caps text-gold">
              {letter.signature}
            </p>
            <p className="mt-2 font-mono-caps text-[0.55rem] text-ivory-dim/85">
              {letter.date}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="hairline-gold mt-16" />
        </Reveal>

        <Reveal>
          <p className="mt-6 text-center font-mono-caps text-ivory-dim">
            ● Editorial &mdash; written for this archive by {letter.author}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
