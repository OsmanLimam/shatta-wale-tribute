"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/** Fixed vertical scroll-progress line — the recurring "time" motif. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[60] h-screen w-px bg-ivory/5"
      aria-hidden="true"
    >
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="h-full w-full bg-gradient-to-b from-gold via-gold to-gold/40"
      />
    </div>
  );
}

/** Chapter counter that increments as the user scrolls through the journey. */
export function ChapterIndicator({ count }: { count: number }) {
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    const sections = document.querySelectorAll("[data-chapter-index]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = Number(
            (visible.target as HTMLElement).dataset.chapterIndex,
          );
          if (!Number.isNaN(idx)) setCurrent(idx);
        }
      },
      { threshold: [0.3, 0.5, 0.7] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="pointer-events-none fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-2 lg:flex"
      aria-hidden="true"
    >
      <div className="font-mono-caps text-gold">{`Chapter ${String(current).padStart(2, "0")} / ${String(count).padStart(2, "0")}`}</div>
      <div className="h-32 w-px bg-ivory/10">
        <div
          className="w-full bg-gold transition-[height] duration-500 ease-out"
          style={{ height: `${(current / count) * 100}%` }}
        />
      </div>
    </div>
  );
}
