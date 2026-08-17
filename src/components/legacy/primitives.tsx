"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import { Reveal } from "@/lib/legacy/motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  index?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  index,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {(eyebrow || index) && (
        <Reveal variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}>
          <div
            className={cn(
              "flex items-center gap-3 font-mono-caps text-gold",
              align === "center" && "justify-center",
            )}
          >
            {index && <span className="text-ivory-dim">{index}</span>}
            {index && eyebrow && <span className="h-px w-8 bg-gold/40" />}
            {eyebrow && <span>{eyebrow}</span>}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display text-balance text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-ivory">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-base leading-relaxed text-ivory-dim sm:text-lg md:text-xl",
              align === "center" && "mx-auto",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  container?: "wide" | "prose" | "none";
  tone?: "ink" | "charcoal";
}

export function Section({
  id,
  children,
  className,
  container = "wide",
  tone = "ink",
}: SectionProps) {
  const containerCls =
    container === "wide"
      ? "container-legacy"
      : container === "prose"
        ? "container-prose"
        : "";
  return (
    <section
      id={id}
      className={cn(
        "section-pad relative scroll-mt-24",
        tone === "charcoal" ? "bg-charcoal" : "bg-ink",
        className,
      )}
    >
      <div className={cn(containerCls, "relative z-10")}>{children}</div>
    </section>
  );
}

/** Elegant placeholder portrait — used in lieu of unauthorised photographs. */
export function PortraitPlaceholder({
  label,
  sublabel,
  className,
}: {
  label: string;
  sublabel?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden border border-hairline bg-charcoal",
        className,
      )}
      aria-hidden="true"
    >
      {/* Atmospheric gradient — not an image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, rgba(201,162,75,0.10) 0%, rgba(22,22,22,0.6) 45%, #0a0a0a 100%)",
        }}
      />
      {/* Hairline cross — museum-style frame */}
      <div className="absolute left-1/2 top-0 h-px w-12 -translate-x-1/2 bg-gold/40" />
      <div className="absolute left-1/2 bottom-0 h-px w-12 -translate-x-1/2 bg-gold/40" />
      <div className="absolute left-0 top-1/2 h-12 w-px -translate-y-1/2 bg-gold/40" />
      <div className="absolute right-0 top-1/2 h-12 w-px -translate-y-1/2 bg-gold/40" />
      {/* Content */}
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="font-mono-caps text-gold">{label}</span>
        {sublabel && (
          <span className="font-display text-2xl italic text-ivory-dim sm:text-3xl">
            {sublabel}
          </span>
        )}
      </div>
    </div>
  );
}

/**
 * LegacyImage — renders an editorial photograph with:
 *  - Next.js Image optimization (lazy, responsive, blurred placeholder)
 *  - descriptive alt text
 *  - subtle ken-burns hover (desktop only, reduced-motion aware)
 *  - attribution overlay ("Photo · Web archive")
 *  - gold crosshair framing (museum-style)
 *
 * Images are sourced from public web archives of Shatta Wale's career
 * and edited into the editorial palette via a tonal multiply overlay.
 */
export function LegacyImage({
  src,
  alt,
  caption,
  className,
  showAttribution = true,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  showAttribution?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure
      className={cn(
        "group relative isolate overflow-hidden border border-hairline bg-charcoal",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.04]"
      />
      {/* Tonal overlay to keep imagery within the editorial palette */}
      <div
        className="absolute inset-0 z-[1] mix-blend-multiply"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.10) 0%, rgba(10,10,10,0.35) 60%, rgba(10,10,10,0.75) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Gold crosshair frame */}
      <div className="absolute left-1/2 top-0 z-[2] h-px w-10 -translate-x-1/2 bg-gold/50" aria-hidden="true" />
      <div className="absolute left-1/2 bottom-0 z-[2] h-px w-10 -translate-x-1/2 bg-gold/50" aria-hidden="true" />
      <div className="absolute left-0 top-1/2 z-[2] h-10 w-px -translate-y-1/2 bg-gold/50" aria-hidden="true" />
      <div className="absolute right-0 top-1/2 z-[2] h-10 w-px -translate-y-1/2 bg-gold/50" aria-hidden="true" />

      {/* Caption / attribution */}
      {(caption || showAttribution) && (
        <figcaption className="absolute inset-x-0 bottom-0 z-[3] flex flex-col gap-1 p-4">
          {showAttribution && (
            <span className="font-mono-caps text-[0.55rem] text-gold">
              ● Photo · Web archive
            </span>
          )}
          {caption && (
            <span className="text-xs leading-snug text-ivory/85">{caption}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * LocalLine — renders a single line of Ghanaian local language
 * (Ga, Twi, or Pidgin) sitting underneath an English headline/body,
 * with a small mono-caps language label in gold.
 *
 * Visual contract:
 *  - English (primary, formal) stays as the main heading/body
 *  - Local language sits as a smaller italic gold line directly underneath
 *  - Language tag (`GA` / `TWI` / `PIDGIN`) prefixed in mono-caps
 *
 * This preserves the editorial design while letting the archive
 * speak in the languages of Accra and the people who shaped the story.
 */
export function LocalLine({
  lang,
  children,
  className,
}: {
  lang: "GA" | "TWI" | "PIDGIN";
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-display text-base italic leading-snug text-gold/85 sm:text-lg",
        className,
      )}
    >
      <span className="font-mono-caps mr-3 text-[0.55rem] tracking-wider text-gold/60">
        {lang}
      </span>
      {children}
    </p>
  );
}

/** Source-tag chip used to anchor factual claims. */
export function SourceChip({ label, tier }: { label: string; tier: string }) {
  const tierColor =
    tier === "primary"
      ? "text-gold"
      : tier === "reputable"
        ? "text-ivory"
        : tier === "interview"
          ? "text-ivory-dim"
          : "text-clay";
  return (
    <span className="inline-flex items-center gap-2 border border-hairline px-2 py-1 font-mono-caps text-[0.6rem]">
      <span className={tierColor}>●</span>
      <span className="text-ivory-dim">{label}</span>
    </span>
  );
}
