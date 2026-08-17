"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/legacy/motion";

/**
 * AmbientAudio — soft background music for the Living Legacy Experience.
 *
 * Track: Wendy Shay (artist-provided ambient score).
 * Sourced from user-provided file; used here as ambient score for the archive.
 *
 * Behaviour:
 *  - Attempts autoplay on mount (1.5s delay so it doesn't fight the hero intro).
 *  - If browser blocks autoplay with sound (most do), waits for first user
 *    gesture anywhere on the page, then starts playback.
 *  - 1.5s volume fade-in on play, 0.6s fade-out on pause — cinematic, not abrupt.
 *  - Persists play/pause + mute + dismissed state to localStorage so returning
 *    visitors aren't surprised.
 *  - Respects prefers-reduced-motion: visualizer bars stay static.
 *  - Respects navigator.connection.saveData: skips preload on metered connections.
 *  - Loop enabled — the track is the room tone of the archive.
 *  - Live time readout (current / duration).
 *  - Collapsible to a tiny gold dot when dismissed — tap to expand back.
 *
 * UI: small fixed bottom-right panel, gold accent, equalizer bars animate
 * when audio is actually playing. Always dismissable.
 */
const TRACK_SRC_M4A = "/audio/wendy-shay-ambient.m4a";
const TRACK_TITLE = "Wendy Shay";
const TRACK_ARTIST = "Wendy Shay";
const STORAGE_KEY = "legacy-audio-pref";

const FADE_IN_MS = 1500;
const FADE_OUT_MS = 600;
const TARGET_VOLUME = 0.4;

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeRef = useRef<{ cancel: () => void } | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [saveData, setSaveData] = useState(false);
  const reduced = usePrefersReducedMotion();

  // Detect Save-Data preference
  useEffect(() => {
    const conn = (navigator as unknown as { connection?: { saveData?: boolean } }).connection;
    if (conn?.saveData) setSaveData(true);
  }, []);

  // Smooth volume fade helper
  const fadeVolume = useCallback(
    (from: number, to: number, durationMs: number, onComplete: () => void) => {
      const audio = audioRef.current;
      if (!audio) return;
      if (fadeRef.current) fadeRef.current.cancel();

      if (reduced || durationMs <= 0) {
        audio.volume = to;
        onComplete();
        return;
      }

      const start = performance.now();
      let cancelled = false;

      const tick = (now: number) => {
        if (cancelled) return;
        const t = Math.min(1, (now - start) / durationMs);
        audio.volume = from + (to - from) * t;
        if (t < 1) {
          requestAnimationFrame(tick);
        } else {
          onComplete();
        }
      };
      requestAnimationFrame(tick);

      fadeRef.current = {
        cancel: () => {
          cancelled = true;
        },
      };
    },
    [reduced],
  );

  // Restore preference + attempt autoplay
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Restore prior preference (default: play, not collapsed)
    let savedPref: { play: boolean; muted: boolean; dismissed?: boolean } | null = null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) savedPref = JSON.parse(raw);
    } catch {
      /* ignore */
    }

    const shouldAutoplay = savedPref?.play !== false;
    const shouldMute = savedPref?.muted === true;
    const shouldCollapse = savedPref?.dismissed === true;

    audio.volume = 0;
    audio.muted = shouldMute;
    setIsMuted(shouldMute);
    setCollapsed(shouldCollapse);

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMeta = () => setDuration(audio.duration || 0);
    const onReady = () => setDuration(audio.duration || 0);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMeta);
    audio.addEventListener("canplaythrough", onReady);

    // Attempt autoplay after a short delay (lets hero animation begin first)
    const attemptAutoplay = async () => {
      if (!shouldAutoplay) return;
      try {
        await audio.play();
        setIsPlaying(true);
        setShowHint(false);
        // Fade in
        fadeVolume(0, TARGET_VOLUME, FADE_IN_MS, () => {});
      } catch {
        // Blocked — show hint and wait for gesture
        setShowHint(true);
      }
    };

    const playTimer = setTimeout(attemptAutoplay, 1500);

    // Listen for first user gesture to unlock audio
    const onFirstGesture = () => {
      if (hasInteracted) return;
      setHasInteracted(true);
      if (shouldAutoplay && audio.paused) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
            setShowHint(false);
            fadeVolume(0, TARGET_VOLUME, FADE_IN_MS, () => {});
          })
          .catch(() => {
            /* still blocked — user can use the toggle */
          });
      }
      document.removeEventListener("click", onFirstGesture);
      document.removeEventListener("keydown", onFirstGesture);
      document.removeEventListener("touchstart", onFirstGesture);
    };

    if (!hasInteracted) {
      document.addEventListener("click", onFirstGesture, { passive: true });
      document.addEventListener("keydown", onFirstGesture, { passive: true });
      document.addEventListener("touchstart", onFirstGesture, { passive: true });
    }

    return () => {
      clearTimeout(playTimer);
      if (fadeRef.current) fadeRef.current.cancel();
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMeta);
      audio.removeEventListener("canplaythrough", onReady);
      document.removeEventListener("click", onFirstGesture);
      document.removeEventListener("keydown", onFirstGesture);
      document.removeEventListener("touchstart", onFirstGesture);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasInteracted, fadeVolume]);

  // Persist preference changes
  const savePref = useCallback(
    (play: boolean, muted: boolean, dismissed?: boolean) => {
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ play, muted, dismissed }),
        );
      } catch {
        /* ignore */
      }
    },
    [],
  );

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setShowHint(false);
          fadeVolume(0, TARGET_VOLUME, FADE_IN_MS, () => {});
          savePref(true, audio.muted, collapsed);
        })
        .catch(() => {
          /* ignore */
        });
    } else {
      // Fade out then pause
      fadeVolume(audio.volume, 0, FADE_OUT_MS, () => {
        audio.pause();
        setIsPlaying(false);
      });
      savePref(false, audio.muted, collapsed);
    }
  }, [savePref, collapsed, fadeVolume]);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
    savePref(!audio.paused, audio.muted, collapsed);
  }, [savePref, collapsed]);

  const toggleCollapse = useCallback(() => {
    const next = !collapsed;
    setCollapsed(next);
    savePref(!audioRef.current?.paused ?? false, audioRef.current?.muted ?? false, next);
  }, [collapsed, savePref]);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload={saveData ? "none" : "auto"}
        playsInline
      >
        <source src={TRACK_SRC_M4A} type="audio/mp4" />
      </audio>

      {/* Floating control — bottom-right, above all content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-5 right-5 z-[60] flex items-center"
      >
        <AnimatePresence mode="wait">
          {collapsed ? (
            // Collapsed: tiny gold dot — tap to expand
            <motion.button
              key="collapsed"
              type="button"
              onClick={toggleCollapse}
              aria-label="Expand ambient music player"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="focus-legacy flex h-10 w-10 items-center justify-center border border-gold/50 bg-charcoal/90 backdrop-blur hover:bg-charcoal"
            >
              <span className="relative flex h-3 w-3">
                {isPlaying && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                )}
                <span className="relative inline-flex h-3 w-3 rounded-full bg-gold" />
              </span>
            </motion.button>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex items-center"
            >
              <AnimatePresence>
                {showHint && !isPlaying && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.4 }}
                    className="mr-3 hidden sm:block"
                  >
                    <div className="border border-hairline bg-charcoal/90 px-3 py-2 backdrop-blur">
                      <p className="font-mono-caps text-[0.55rem] text-gold">
                        ● Tap to play score
                      </p>
                      <p className="mt-0.5 text-[0.7rem] italic text-ivory-dim">
                        ambient audio for the archive
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-3 border border-hairline bg-charcoal/90 px-4 py-2.5 backdrop-blur">
                {/* Play/pause + equalizer + label */}
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause ambient music" : "Play ambient music"}
                  aria-pressed={isPlaying}
                  className="focus-legacy group flex items-center gap-2.5"
                >
                  <Equalizer active={isPlaying && !reduced} />

                  <div className="hidden text-left sm:block">
                    <p className="font-mono-caps text-[0.55rem] text-gold">
                      {isPlaying ? "NOW PLAYING" : "PAUSED"}
                    </p>
                    <p className="text-[0.7rem] leading-tight text-ivory">
                      {TRACK_TITLE}
                      <span className="ml-1 text-ivory-dim">— {TRACK_ARTIST}</span>
                    </p>
                    {/* Time readout */}
                    <p className="mt-0.5 font-mono-caps text-[0.5rem] text-ivory-dim/70">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </p>
                  </div>

                  {/* Play/pause icon */}
                  <span
                    className="flex h-7 w-7 items-center justify-center border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-ink"
                    aria-hidden="true"
                  >
                    {isPlaying ? (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                        <rect x="1" y="1" width="2.5" height="8" />
                        <rect x="6.5" y="1" width="2.5" height="8" />
                      </svg>
                    ) : (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                        <polygon points="2,1 9,5 2,9" />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Mute toggle */}
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute ambient music" : "Mute ambient music"}
                  aria-pressed={isMuted}
                  className="focus-legacy flex h-7 w-7 items-center justify-center text-ivory-dim transition-colors hover:text-gold"
                >
                  {isMuted ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                      <path d="M3 5v4h2l3 3V2L5 5H3z" />
                      <line x1="10" y1="4" x2="13" y2="7" stroke="currentColor" strokeWidth="1.2" />
                      <line x1="13" y1="4" x2="10" y2="7" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                      <path d="M3 5v4h2l3 3V2L5 5H3z" />
                      <path
                        d="M10 4 Q12 5.5 12 7 Q12 8.5 10 10"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </button>

                {/* Collapse / dismiss button */}
                <button
                  type="button"
                  onClick={toggleCollapse}
                  aria-label="Minimize ambient music player"
                  className="focus-legacy flex h-7 w-7 items-center justify-center text-ivory-dim transition-colors hover:text-gold"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="2" y1="2" x2="8" y2="8" />
                    <line x1="8" y1="2" x2="2" y2="8" />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

/**
 * Equalizer — three vertical bars that animate when active.
 * Static (mid-height) when paused or reduced-motion preferred.
 */
function Equalizer({ active }: { active: boolean }) {
  return (
    <span
      className="flex h-4 items-end gap-[2px]"
      aria-hidden="true"
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="block w-[2px] bg-gold"
          initial={{ height: "30%" }}
          animate={
            active
              ? { height: ["20%", "100%", "45%", "85%", "30%"] }
              : { height: "35%" }
          }
          transition={
            active
              ? {
                  duration: 0.9 + i * 0.15,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: i * 0.1,
                }
              : { duration: 0.3 }
          }
          style={{ originY: 1 }}
        />
      ))}
    </span>
  );
}
