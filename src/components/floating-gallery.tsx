import { useEffect, useRef } from "react";

type Item = { src: string; alt: string; caption: string; tag: string };

/**
 * FloatingGallery — infinite two-row image marquee that drifts in opposite
 * directions, with cursor-parallax on each tile (mouse tilt + subtle lift).
 */
export function FloatingGallery({ items }: { items: Item[] }) {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current; if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tiles = el.querySelectorAll<HTMLElement>("[data-tile]");
    const onMove = (e: MouseEvent) => {
      tiles.forEach((t) => {
        const r = t.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) / innerWidth;
        const dy = (e.clientY - cy) / innerHeight;
        t.style.setProperty("--rx", `${(-dy * 6).toFixed(2)}deg`);
        t.style.setProperty("--ry", `${(dx * 6).toFixed(2)}deg`);
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const row = (dir: "l" | "r", offset: string) => (
    <div className="flex gap-6 shrink-0" style={{ animation: `marquee-${dir} 60s linear infinite`, marginLeft: offset }}>
      {[...items, ...items].map((it, i) => (
        <figure
          key={`${dir}-${i}`}
          data-tile
          className="group relative w-[380px] h-[280px] shrink-0 rounded-2xl overflow-hidden border border-primary/20 surface-glass"
          style={{ transform: "perspective(1200px) rotateX(var(--rx,0)) rotateY(var(--ry,0))", transition: "transform 400ms cubic-bezier(.2,.7,.2,1)" }}
        >
          <img
            src={it.src}
            alt={it.alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-[1200ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-primary/25 to-transparent animate-scan" />
          </div>
          <figcaption className="absolute inset-x-0 bottom-0 p-5">
            <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary">{it.tag}</div>
            <div className="mt-1 font-display text-xl leading-tight">{it.caption}</div>
          </figcaption>
        </figure>
      ))}
    </div>
  );

  return (
    <div ref={wrap} className="relative w-full overflow-hidden py-4 space-y-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max">{row("l", "0px")}</div>
      <div className="flex w-max">{row("r", "-120px")}</div>
      <style>{`
        @keyframes marquee-l { to { transform: translateX(-50%); } }
        @keyframes marquee-r { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
}
