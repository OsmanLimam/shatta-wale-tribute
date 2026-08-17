"use client";

import { useState } from "react";
import { Section } from "./primitives";
import { Reveal, MaskText } from "@/lib/legacy/motion";
import { contributionFields } from "@/content/letter";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Check, Mic, Square, Loader2 } from "lucide-react";

type Status = "idle" | "recording" | "submitting" | "pending" | "error";

export function Contribute() {
  const { toast } = useToast();
  const [selectedField, setSelectedField] = useState(contributionFields[0].id);
  const [text, setText] = useState("");
  const [attribution, setAttribution] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [recordSeconds, setRecordSeconds] = useState(0);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [timerHandle, setTimerHandle] = useState<ReturnType<typeof setInterval> | null>(null);

  const field = contributionFields.find((f) => f.id === selectedField)!;
  const isVoice = field.type === "voice";

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const rec = new MediaRecorder(stream);
      const chunks: Blob[] = [];
      rec.ondataavailable = (e) => e.data.size > 0 && chunks.push(e.data);
      rec.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        stream.getTracks().forEach((t) => t.stop());
        if (timerHandle) {
          clearInterval(timerHandle);
          setTimerHandle(null);
        }
      };
      rec.start();
      setMediaRecorder(rec);
      setStatus("recording");
      setRecordSeconds(0);
      const h = setInterval(() => setRecordSeconds((s) => s + 1), 1000);
      setTimerHandle(h);
    } catch {
      setStatus("error");
      toast({
        title: "Microphone unavailable",
        description: "Browser permission is required for voice contributions.",
        variant: "destructive",
      });
    }
  };

  const stopRecording = () => {
    mediaRecorder?.stop();
    setStatus("idle");
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Honest backend state — no fake submission.
    // Contribution is stored locally as pending-review.
    setTimeout(() => {
      try {
        const pending = JSON.parse(localStorage.getItem("sw-pending-contributions") ?? "[]");
        pending.push({
          field: field.id,
          type: field.type,
          text: text || null,
          audioUrl: isVoice ? audioUrl : null,
          attribution: attribution || null,
          submittedAt: new Date().toISOString(),
          status: "pending-review",
        });
        localStorage.setItem("sw-pending-contributions", JSON.stringify(pending));
      } catch {
        /* storage may be unavailable */
      }
      setStatus("pending");
      toast({
        title: "Contribution stored locally",
        description:
          "Stored as pending-review in this browser. No backend review pipeline is connected yet — nothing has been published.",
      });
      setText("");
      setAttribution("");
      setAudioUrl(null);
    }, 900);
  };

  return (
    <Section id="contribute" tone="charcoal" className="grain sm-watermark">
      <div className="mb-14 md:mb-20">
        <Reveal>
          <div className="font-mono-caps mb-5 text-gold">12 — Your Chapter</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.92] text-ivory-fade">
            Shatta Wale,
            <br />
            this page is yours.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl font-display text-xl italic leading-snug text-ivory sm:text-2xl">
            <MaskText
              text="Everything here was created from the public record. But no archive can fully know the person behind the story."
              amount={0.4}
            />
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Field picker */}
        <div className="lg:col-span-4">
          <Reveal>
            <div className="font-mono-caps mb-5 text-gold">Add your story</div>
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="space-y-1">
              {contributionFields.map((f) => (
                <li key={f.id}>
                  <button
                    onClick={() => {
                      setSelectedField(f.id);
                      setStatus("idle");
                      setAudioUrl(null);
                    }}
                    className={cn(
                      "focus-legacy group flex w-full items-center justify-between border-l-2 px-4 py-3 text-left transition-colors",
                      selectedField === f.id
                        ? "border-gold bg-charcoal-2"
                        : "border-transparent hover:border-ivory/30 hover:bg-charcoal/50",
                    )}
                  >
                    <span
                      className={cn(
                        "font-display text-lg",
                        selectedField === f.id ? "text-gold" : "text-ivory",
                      )}
                    >
                      {f.label}
                    </span>
                    {f.required && (
                      <span className="font-mono-caps text-[0.5rem] text-clay">
                        REQUIRED
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Contribution form */}
        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal>
            <form onSubmit={submit} className="space-y-7">
              <div>
                <div className="font-mono-caps mb-2 text-ivory-dim">
                  {field.label}
                </div>
                <p className="text-sm leading-relaxed text-ivory-dim">
                  {field.description}
                </p>
              </div>

              {isVoice ? (
                <div className="border border-hairline bg-charcoal p-6">
                  {audioUrl ? (
                    <div className="space-y-4">
                      <div className="font-mono-caps text-gold">Recording captured</div>
                      <audio src={audioUrl} controls className="w-full" />
                      <button
                        type="button"
                        onClick={() => setAudioUrl(null)}
                        className="font-mono-caps text-ivory-dim hover:text-gold focus-legacy"
                      >
                        Discard &amp; re-record
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex items-center gap-4">
                        {status === "recording" ? (
                          <button
                            type="button"
                            onClick={stopRecording}
                            className="focus-legacy flex items-center gap-2 border border-clay bg-clay/10 px-4 py-2 font-mono-caps text-clay hover:bg-clay/20"
                          >
                            <Square className="h-3 w-3 fill-current" />
                            Stop
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={startRecording}
                            className="focus-legacy flex items-center gap-2 border border-gold px-4 py-2 font-mono-caps text-gold hover:bg-gold/10"
                          >
                            <Mic className="h-3 w-3" />
                            Start recording
                          </button>
                        )}
                        {status === "recording" && (
                          <span className="font-mono-caps text-ivory-dim">
                            ● {String(Math.floor(recordSeconds / 60)).padStart(2, "0")}:
                            {String(recordSeconds % 60).padStart(2, "0")}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-ivory-dim/70">
                        Audio stays in your browser. Nothing is uploaded until a
                        backend review pipeline is connected.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={6}
                  required={field.required}
                  placeholder="Write here…"
                  className="focus-legacy w-full resize-y border border-hairline bg-charcoal p-4 text-base text-ivory placeholder:text-ivory-dim/50"
                />
              )}

              {/* Attribution */}
              <div>
                <label
                  htmlFor="attribution"
                  className="font-mono-caps mb-2 block text-ivory-dim"
                >
                  Attribution (optional)
                </label>
                <input
                  id="attribution"
                  type="text"
                  value={attribution}
                  onChange={(e) => setAttribution(e.target.value)}
                  placeholder="Your name, or leave blank to remain anonymous"
                  className="focus-legacy w-full border border-hairline bg-charcoal px-4 py-2.5 text-base text-ivory placeholder:text-ivory-dim/50"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col items-start gap-3 pt-2">
                <button
                  type="submit"
                  disabled={
                    status === "submitting" ||
                    (field.required && !text && !audioUrl)
                  }
                  className="focus-legacy flex items-center gap-2 border border-gold bg-gold px-8 py-3 font-mono-caps text-ink transition-colors hover:bg-transparent hover:text-gold disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {status === "submitting" ? (
                    <Loader2 className="h-3 w-3 animate-spin" />
                  ) : status === "pending" ? (
                    <Check className="h-3 w-3" />
                  ) : null}
                  {status === "submitting"
                    ? "Storing…"
                    : status === "pending"
                      ? "Stored pending review"
                      : "Submit contribution"}
                </button>

                <p className="text-xs leading-relaxed text-ivory-dim/70">
                  No fake submission. Your contribution is stored locally as
                  pending-review in this browser. Nothing is published. A
                  backend review pipeline is prepared for but not yet
                  connected &mdash; the architecture is honest about this.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
