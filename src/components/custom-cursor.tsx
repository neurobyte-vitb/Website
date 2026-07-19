import { useEffect, useRef, useState } from "react";

/**
 * CustomCursor — dual-element cursor: a fast primary dot and a lagging ring
 * that scales up over interactive targets. Hides on touch and reduced-motion.
 */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const touch = matchMedia("(pointer: coarse)").matches;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (touch || reduced) return;
    setEnabled(true);

    const state = { x: innerWidth / 2, y: innerHeight / 2, rx: innerWidth / 2, ry: innerHeight / 2, scale: 1 };
    let raf = 0;
    const move = (e: MouseEvent) => { state.x = e.clientX; state.y = e.clientY; };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      state.scale = t?.closest("a,button,[role=button],input,textarea,label,summary,[data-cursor]") ? 2.4 : 1;
    };
    const loop = () => {
      state.rx += (state.x - state.rx) * 0.18;
      state.ry += (state.y - state.ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate3d(${state.x - 4}px,${state.y - 4}px,0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${state.rx - 18}px,${state.ry - 18}px,0) scale(${state.scale})`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    document.documentElement.style.cursor = "none";
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); document.documentElement.style.cursor = ""; };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-primary mix-blend-difference" style={{ willChange: "transform" }} />
      <div ref={ring} className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border border-primary/70 mix-blend-difference transition-[width,height,border-color] duration-200" style={{ willChange: "transform" }} />
    </>
  );
}
