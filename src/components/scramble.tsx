import { useEffect, useRef, useState } from "react";

const CHARS = "ACGT01{}[]<>/\\|=+*#@$%&";

/**
 * Scramble — reveals text with a glitchy cipher pass. Triggers on view.
 */
export function Scramble({ text, className = "", speed = 40 }: { text: string; className?: string; speed?: number }) {
  const [out, setOut] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setOut(text); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting || done.current) return;
        done.current = true;
        let frame = 0;
        const total = Math.ceil(text.length * 1.5);
        const id = setInterval(() => {
          frame++;
          const revealed = Math.floor((frame / total) * text.length);
          const s = text.split("").map((c, i) => {
            if (i < revealed || c === " ") return c;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }).join("");
          setOut(s);
          if (frame >= total) { clearInterval(id); setOut(text); }
        }, speed);
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [text, speed]);

  return <span ref={ref} className={className}>{out}</span>;
}
