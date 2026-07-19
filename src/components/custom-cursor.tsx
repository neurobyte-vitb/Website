import { useEffect, useRef, useState } from "react";

/**
 * CustomCursor — a crosshair-style reticle with a snappy dot and a smoothly
 * trailing ring. Uses time-delta based smoothing so motion feels identical at
 * 60/90/120/144Hz, and avoids mix-blend-difference (which forces expensive
 * re-composites over the whole viewport).
 */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const crossH = useRef<HTMLDivElement>(null);
  const crossV = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const touch = matchMedia("(pointer: coarse)").matches;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (touch || reduced) return;
    setEnabled(true);

    const s = {
      x: innerWidth / 2,
      y: innerHeight / 2,
      // dot follows mouse near-instantly
      dx: innerWidth / 2,
      dy: innerHeight / 2,
      // ring lags for a smooth trailing feel
      rx: innerWidth / 2,
      ry: innerHeight / 2,
      scale: 1,
      targetScale: 1,
      rot: 0,
      hidden: false,
    };
    let raf = 0;
    let last = performance.now();

    const move = (e: MouseEvent) => {
      s.x = e.clientX;
      s.y = e.clientY;
      if (s.hidden) {
        s.hidden = false;
        for (const el of [dot.current, ring.current, crossH.current, crossV.current]) {
          if (el) el.style.opacity = "1";
        }
      }
    };
    const leave = () => {
      s.hidden = true;
      for (const el of [dot.current, ring.current, crossH.current, crossV.current]) {
        if (el) el.style.opacity = "0";
      }
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const hot = t?.closest("a,button,[role=button],input,textarea,label,summary,[data-cursor]");
      s.targetScale = hot ? 2.2 : 1;
    };
    const down = () => { s.targetScale = Math.max(0.6, s.targetScale * 0.7); };
    const up = () => { s.targetScale = s.targetScale < 1 ? 1 : s.targetScale / 0.7; };

    // frame-rate independent smoothing: same visual speed at 60/120/144Hz
    const smooth = (current: number, target: number, halfLife: number, dt: number) => {
      const t = 1 - Math.pow(2, -dt / halfLife);
      return current + (target - current) * t;
    };

    const loop = (now: number) => {
      const dt = Math.min(50, now - last); // clamp big gaps (tab-switch)
      last = now;

      // dot — very tight follow (~25ms half-life)
      s.dx = smooth(s.dx, s.x, 25, dt);
      s.dy = smooth(s.dy, s.y, 25, dt);
      // ring — smooth trail (~110ms half-life)
      s.rx = smooth(s.rx, s.x, 110, dt);
      s.ry = smooth(s.ry, s.y, 110, dt);
      s.scale = smooth(s.scale, s.targetScale, 90, dt);
      // subtle continuous rotation of the reticle
      s.rot = (s.rot + dt * 0.03) % 360;

      if (dot.current) dot.current.style.transform = `translate3d(${s.dx}px,${s.dy}px,0) translate(-50%,-50%)`;
      if (ring.current) ring.current.style.transform = `translate3d(${s.rx}px,${s.ry}px,0) translate(-50%,-50%) scale(${s.scale}) rotate(${s.rot}deg)`;
      if (crossH.current) crossH.current.style.transform = `translate3d(${s.dx}px,${s.dy}px,0) translate(-50%,-50%)`;
      if (crossV.current) crossV.current.style.transform = `translate3d(${s.dx}px,${s.dy}px,0) translate(-50%,-50%)`;

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", down, { passive: true });
    window.addEventListener("mouseup", up, { passive: true });
    document.addEventListener("mouseleave", leave);
    document.documentElement.style.cursor = "none";
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.style.cursor = "";
    };
  }, []);

  if (!enabled) return null;
  const base = "pointer-events-none fixed left-0 top-0 z-[100] transition-opacity duration-200";
  return (
    <>
      {/* crosshair — thin cyan lines that follow the dot */}
      <div ref={crossH} className={`${base} h-px w-5 bg-primary/50`} style={{ willChange: "transform" }} />
      <div ref={crossV} className={`${base} h-5 w-px bg-primary/50`} style={{ willChange: "transform" }} />
      {/* inner dot */}
      <div
        ref={dot}
        className={`${base} h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]`}
        style={{ willChange: "transform" }}
      />
      {/* trailing reticle ring with tick marks */}
      <div
        ref={ring}
        className={`${base} h-10 w-10 rounded-full border border-primary/60`}
        style={{ willChange: "transform" }}
      >
        <span className="absolute left-1/2 top-0 h-1.5 w-px -translate-x-1/2 bg-primary/70" />
        <span className="absolute left-1/2 bottom-0 h-1.5 w-px -translate-x-1/2 bg-primary/70" />
        <span className="absolute top-1/2 left-0 w-1.5 h-px -translate-y-1/2 bg-primary/70" />
        <span className="absolute top-1/2 right-0 w-1.5 h-px -translate-y-1/2 bg-primary/70" />
      </div>
    </>
  );
}
