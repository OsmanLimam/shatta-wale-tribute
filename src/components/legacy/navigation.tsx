"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "why-this-exists", label: "Why This Exists" },
  { id: "journey", label: "The Journey" },
  { id: "music", label: "The Music" },
  { id: "impact", label: "The Impact" },
  { id: "moments", label: "The Moments" },
  { id: "collaborators", label: "Collaborators" },
  { id: "archive", label: "The Archive" },
  { id: "letter", label: "The Letter" },
  { id: "contribute", label: "Your Chapter" },
];

export function Navigation({ entered }: { entered: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      // Active-section tracking
      const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(
        Boolean,
      ) as HTMLElement[];
      const offset = window.innerHeight * 0.4;
      let current = "hero";
      for (const s of sections) {
        const rect = s.getBoundingClientRect();
        if (rect.top <= offset) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          entered ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
          scrolled ? "bg-ink/85 backdrop-blur-md border-b border-hairline" : "bg-transparent",
        )}
      >
        <nav className="container-legacy flex h-16 items-center justify-between md:h-20">
          <button
            onClick={() => go("hero")}
            className="flex items-center gap-2.5 focus-legacy"
            aria-label="Back to top"
          >
            <Image
              src="/sm-symbol.svg"
              alt="Shatta Movement emblem"
              width={32}
              height={32}
              className="h-7 w-7 md:h-8 md:w-8"
              priority
            />
            <span className="font-mono-caps text-gold">SW · LIVING LEGACY</span>
          </button>

          <div className="hidden items-center gap-7 lg:flex">
            {NAV_ITEMS.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={cn(
                  "font-mono-caps transition-colors focus-legacy",
                  active === item.id ? "text-gold" : "text-ivory-dim hover:text-ivory",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 font-mono-caps text-ivory focus-legacy lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
            MENU
          </button>
        </nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[70] bg-ink lg:hidden"
          >
            <div className="grain absolute inset-0" />
            <div className="relative flex h-full flex-col">
              <div className="container-legacy flex h-16 items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/sm-symbol.svg"
                    alt="Shatta Movement emblem"
                    width={32}
                    height={32}
                    className="h-7 w-7"
                  />
                  <span className="font-mono-caps text-gold">SW · LIVING LEGACY</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 font-mono-caps text-ivory focus-legacy"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                  CLOSE
                </button>
              </div>
              <nav className="container-legacy flex flex-1 flex-col justify-center gap-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                    onClick={() => go(item.id)}
                    className="group flex items-baseline gap-4 py-2 text-left focus-legacy"
                  >
                    <span className="font-mono-caps text-gold/60 group-hover:text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-3xl text-ivory group-hover:text-gold sm:text-4xl">
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </nav>
              <div className="container-legacy py-8">
                <p className="font-mono-caps text-ivory-dim">
                  An independent project by Osman Limam
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
