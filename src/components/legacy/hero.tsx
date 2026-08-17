"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { usePrefersReducedMotion } from "@/lib/legacy/motion";
import { LocalLine } from "./primitives";

interface HeroProps {
  onEnter: () => void;
}

export function Hero({ onEnter }: HeroProps) {
  const reduced = usePrefersReducedMotion();
  const [entered, setEntered] = useState(false);

  const enter = () => {
    setEntered(true);
    setTimeout(() => {
      onEnter();
      document
        .getElementById("why-this-exists")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, reduced ? 0 : 1100);
  };

  const why = () => {
    document
      .getElementById("why-this-exists")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative grain flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-ink"
    >
      {/* Atmospheric backdrop — Shatta Wale performing on stage */}
      <motion.div
        initial={{ opacity: 0, scale: reduced ? 1 : 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <Image
          src="/images/shatta-wale/hero-stage.jpg"
          alt="Shatta Wale performing on stage under gold light."
          fill
          priority
          sizes="100vw"
          quality={75}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Light tonal overlay — lets the photo show, with darker bottom for text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.30) 0%, rgba(10,10,10,0.15) 35%, rgba(10,10,10,0.55) 75%, #0a0a0a 100%)",
          }}
        />
        {/* Bottom fade into next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #0a0a0a 92%)",
          }}
        />
        {/* Attribution corner */}
        <div className="absolute bottom-4 right-4 z-10 font-mono-caps text-[0.5rem] text-ivory/50">
          ● Photo · Web archive
        </div>
      </motion.div>

      {/* Cinematic entrance overlay — mask/curtain transition */}
      <AnimatePresence>
        {entered && !reduced && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            style={{ transformOrigin: "bottom" }}
            className="absolute inset-0 z-40 bg-ink"
          />
        )}
      </AnimatePresence>

      {/* Hero content */}
      <div className="container-legacy relative z-10 flex flex-col items-center text-center">
        {/* Shatta Movement emblem — top accent above the eyebrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="mb-6"
          aria-hidden="true"
        >
          <Image
            src="/sm-symbol.svg"
            alt=""
            width={56}
            height={56}
            className="opacity-90"
            priority
          />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-mono-caps mb-7 text-gold"
        >
          A LIVING LEGACY EXPERIENCE
        </motion.span>

        <h1 className="font-display text-[clamp(3rem,12vw,11rem)] leading-[0.92] tracking-[-0.04em] text-ivory-fade [text-shadow:0_2px_30px_rgba(0,0,0,0.85),0_1px_3px_rgba(0,0,0,0.9)]">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            SHATTA WALE
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-[clamp(1.25rem,3.6vw,2.5rem)] italic leading-snug text-ivory [text-shadow:0_2px_20px_rgba(0,0,0,0.85)]"
        >
          Before History Writes Your Story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 [text-shadow:0_2px_20px_rgba(0,0,0,0.85)]"
        >
          <LocalLine lang="GA">Dani yinsane aaŋma bo osane.</LocalLine>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-ivory sm:text-lg [text-shadow:0_1px_12px_rgba(0,0,0,0.9)]"
        >
          A living digital archive of the journey, influence, and moments that
          shaped one of Ghana&rsquo;s most recognizable musical figures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 max-w-2xl [text-shadow:0_1px_12px_rgba(0,0,0,0.9)]"
        >
          <LocalLine lang="PIDGIN">
            Dis na living digital archive of di journey, di influence, and di
            moments wey shape one of Ghana ein most recognizable music icons.
          </LocalLine>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center gap-5 sm:flex-row"
        >
          <button
            onClick={enter}
            className="focus-legacy group relative overflow-hidden border border-gold bg-gold px-10 py-4 font-mono-caps text-ink transition-colors hover:bg-transparent hover:text-gold"
          >
            <span className="relative z-10">Enter The Story</span>
          </button>
          <button
            onClick={why}
            className="focus-legacy border border-ivory/30 bg-transparent px-10 py-4 font-mono-caps text-ivory transition-colors hover:border-ivory hover:bg-ivory/5"
          >
            Why This Exists
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 2.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono-caps text-ivory-dim">SCROLL</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-8 w-px bg-gradient-to-b from-gold to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
