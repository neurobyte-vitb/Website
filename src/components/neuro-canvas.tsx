import { useEffect, useRef } from "react";

// Interactive canvas: DNA helix on the left dissolves into a live neural swarm
// on the right. Particles are attracted to the cursor and carry signal pulses.
export function NeuroCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 1.25);
    const mouse = { x: -9999, y: -9999, active: false };
    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
    io.observe(canvas);

    type P = {
      x: number; y: number; vx: number; vy: number;
      bx: number; by: number; // base (helix) position
      role: "helix" | "net";
      hue: number; size: number; phase: number;
    };
    let particles: P[] = [];
    type Edge = { a: number; b: number };
    let edges: Edge[] = [];

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      W = rect.width; H = rect.height;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = [];
      edges = [];

      const helixCount = 50;
      const helixX = W * 0.18;
      const amp = Math.min(80, W * 0.07);
      for (let i = 0; i < helixCount; i++) {
        const t = i / (helixCount - 1);
        const y = 20 + t * (H - 40);
        const strand = i % 2;
        const phase = t * Math.PI * 6 + (strand ? Math.PI : 0);
        const bx = helixX + Math.sin(phase) * amp;
        particles.push({
          x: bx, y, vx: 0, vy: 0, bx, by: y,
          role: "helix",
          hue: strand ? 200 : 310,
          size: 1.8,
          phase,
        });
      }

      // Neural swarm on the right two-thirds
      const netCount = 60;
      for (let i = 0; i < netCount; i++) {
        const x = W * 0.38 + Math.random() * W * 0.6;
        const y = 20 + Math.random() * (H - 40);
        particles.push({
          x, y,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          bx: x, by: y,
          role: "net",
          hue: Math.random() < 0.5 ? 200 : 310,
          size: 1.4 + Math.random() * 1.6,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    build();
    const onResize = () => build();
    window.addEventListener("resize", onResize);

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; mouse.x = -9999; mouse.y = -9999; };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    let raf = 0;
    let t = 0;
    const step = () => {
      t += reduce ? 0 : 0.012;
      ctx.clearRect(0, 0, W, H);

      // update
      for (const p of particles) {
        if (p.role === "helix") {
          const amp = Math.min(80, W * 0.07);
          const helixX = W * 0.18;
          // animate helix twist
          const strand = (p.hue === 310) ? 1 : 0;
          const yNorm = (p.by - 20) / Math.max(1, H - 40);
          const phase = yNorm * Math.PI * 6 + (strand ? Math.PI : 0) + t * 1.2;
          p.bx = helixX + Math.sin(phase) * amp;
        } else {
          p.bx += p.vx;
          p.by += p.vy;
          if (p.bx < W * 0.35 || p.bx > W - 10) p.vx *= -1;
          if (p.by < 10 || p.by > H - 10) p.vy *= -1;
        }

        // mouse repulsion
        let tx = p.bx, ty = p.by;
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 140 * 140) {
            const d = Math.sqrt(d2) || 1;
            const f = (140 - d) / 140;
            tx += (dx / d) * f * 40;
            ty += (dy / d) * f * 40;
          }
        }

        p.x += (tx - p.x) * 0.08;
        p.y += (ty - p.y) * 0.08;
      }

      // edges: rebuild sparsely each frame for net particles near each other
      // and helix rungs
      // helix rungs
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length - 1; i++) {
        const a = particles[i], b = particles[i + 1];
        if (a.role !== "helix" || b.role !== "helix") continue;
        // pair sequential same-y with opposite strand: our layout alternates, so i,i+1 are opposite strands close-by
        const dy = Math.abs(a.y - b.y);
        if (dy < 14) {
          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, `oklch(0.82 0.18 200 / 0.55)`);
          grad.addColorStop(1, `oklch(0.7 0.25 310 / 0.55)`);
          ctx.strokeStyle = grad;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // net edges (nearest neighbors)
      const netStart = particles.findIndex(p => p.role === "net");
      ctx.lineWidth = 0.5;
      for (let i = netStart; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 110 * 110) {
            const alpha = (1 - d2 / (110 * 110)) * 0.35;
            ctx.strokeStyle = `oklch(0.82 0.18 200 / ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // bridges: closest helix bottom-half → nearest net node (a few)
      ctx.lineWidth = 0.7;
      for (let i = 20; i < netStart; i += 10) {
        const h = particles[i];
        // find nearest net node
        let best = -1, bd = Infinity;
        for (let j = netStart; j < particles.length; j++) {
          const dx = h.x - particles[j].x, dy = h.y - particles[j].y;
          const d = dx * dx + dy * dy;
          if (d < bd) { bd = d; best = j; }
        }
        if (best >= 0) {
          const n = particles[best];
          const dashOffset = -(t * 30) % 12;
          ctx.setLineDash([3, 4]);
          ctx.lineDashOffset = dashOffset;
          ctx.strokeStyle = `oklch(0.82 0.18 200 / 0.35)`;
          ctx.beginPath();
          ctx.moveTo(h.x, h.y);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();
          ctx.setLineDash([]);
          // traveling pulse
          const k = ((t * 0.6 + i * 0.13) % 1);
          const px = h.x + (n.x - h.x) * k;
          const py = h.y + (n.y - h.y) * k;
          ctx.fillStyle = `oklch(0.95 0.12 200 / ${1 - k})`;
          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // nodes (optimized without createRadialGradient per frame per node)
      for (const p of particles) {
        // Fast, solid color rendering
        ctx.fillStyle = `oklch(0.97 0.08 ${p.hue})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Lightweight glow simulation
        ctx.fillStyle = `oklch(0.9 0.15 ${p.hue} / 0.15)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(loop);
    };
    const loop = () => {
      if (visible) step();
      else raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden />;
}
