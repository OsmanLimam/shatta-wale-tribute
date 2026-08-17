"use client";

import { Section, LegacyImage } from "./primitives";
import { Reveal, MaskText } from "@/lib/legacy/motion";

export function FutureMessage() {
  return (
    <Section id="future-message" tone="ink">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="font-mono-caps mb-5 text-gold">12 — A Message For The Future</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[0.98] text-ivory-fade">
              If someone finds this in fifty years…
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8">
              <LegacyImage
                src="/images/shatta-wale/future-message.jpg"
                alt="Shatta Wale — a moment held in time, looking toward the future."
                caption="Time, preserved. The future is listening."
                className="aspect-[4/5] w-full max-w-md"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="font-display text-3xl italic leading-snug text-gold sm:text-4xl md:text-[2.5rem] md:leading-[1.2]">
              <MaskText
                text="If someone discovers your story fifty years from now, what would you want them to know?"
                amount={0.4}
              />
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 text-base leading-relaxed text-ivory-dim sm:text-lg">
              This section is reserved. It is the most meaningful part of the
              archive &mdash; and the part that cannot be completed by anyone
              other than the person whose story this is.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-ivory-dim sm:text-lg">
              The page is ready. The contribution form is wired. The
              architecture is honest about its current backend state. When the
              subject chooses to add a message &mdash; a sentence, a paragraph,
              a recorded voice, a written letter &mdash; it will be preserved
              here, on this page, in this exact place.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-base leading-relaxed text-ivory-dim sm:text-lg">
              The premise of a living-legacy archive is that some contributions
              cannot be reconstructed from memory. A message to the future, by
              definition, has to be left by the person who will not be there to
              deliver it in person.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="hairline-gold my-8" />
          </Reveal>

          <Reveal delay={0.3}>
            <p className="font-display text-xl italic leading-snug text-ivory sm:text-2xl">
              The page is open. The future is listening.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <a
              href="#contribute"
              className="focus-legacy mt-8 inline-flex items-center gap-2 border border-ivory/30 px-8 py-3 font-mono-caps text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              Leave a message for the future →
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
