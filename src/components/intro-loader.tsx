import { useEffect, useState } from "react";

/**
 * IntroLoader — a one-time boot sequence: ATCG cipher resolves to
 * "NEUROBYTE // ONLINE" then peels away. Shown once per session.
 */
export function IntroLoader() {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem("nb_booted");
  });
  const [phase, setPhase] = useState<"boot" | "leave" | "gone">("boot");
  const [line, setLine] = useState("");

  useEffect(() => {
    if (!show) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sessionStorage.setItem("nb_booted", "1"); setShow(false); return;
    }
    const seq = ["> init genome...", "> loading weights...", "> aligning helix ↔ network", "> NEUROBYTE // ONLINE"];
    let i = 0, j = 0;
    const t = setInterval(() => {
      const cur = seq[i];
      j++;
      setLine(cur.slice(0, j));
      if (j >= cur.length) { j = 0; i++; if (i >= seq.length) { clearInterval(t); setTimeout(() => setPhase("leave"), 350); setTimeout(() => { setPhase("gone"); sessionStorage.setItem("nb_booted", "1"); }, 1200); } }
    }, 32);
    return () => clearInterval(t);
  }, [show]);

  if (!show || phase === "gone") return null;
  return (
    <div className={`fixed inset-0 z-[200] bg-background flex items-center justify-center transition-all duration-700 ${phase === "leave" ? "opacity-0 [clip-path:inset(50%_0_50%_0)]" : "opacity-100 [clip-path:inset(0_0_0_0)]"}`}>
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] animate-pulse" />
      </div>
      <div className="relative text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-4">/ NeuroByte boot sequence</div>
        <div className="font-display text-5xl md:text-7xl tracking-tighter">
          <span className="text-foreground">bio</span>
          <span className="text-primary">·</span>
          <span className="italic text-foreground">ai</span>
        </div>
        <div className="mt-6 font-mono text-xs text-foreground/80 h-5">{line}<span className="animate-blink">▍</span></div>
        <div className="mt-4 mx-auto h-px w-64 bg-border overflow-hidden">
          <div className="h-full bg-primary animate-[loadbar_2.2s_ease-in-out_forwards]" />
        </div>
      </div>
      <style>{`@keyframes loadbar{from{width:0}to{width:100%}}`}</style>
    </div>
  );
}
