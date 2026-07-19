import { useEffect, useState } from "react";

// Rotating terminal-style typewriter with blinking caret.
export function TerminalType({
  lines,
  className,
  prompt = "$",
}: {
  lines: string[];
  className?: string;
  prompt?: string;
}) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = lines[i % lines.length];
    const speed = deleting ? 28 : 55;
    const at = deleting ? current.slice(0, Math.max(0, text.length - 1)) : current.slice(0, text.length + 1);
    const holdEnd = !deleting && at === current;
    const holdStart = deleting && at === "";
    const t = setTimeout(
      () => {
        if (holdEnd) { setDeleting(true); return; }
        if (holdStart) { setDeleting(false); setI((v) => v + 1); return; }
        setText(at);
      },
      holdEnd ? 1600 : holdStart ? 300 : speed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, lines]);

  return (
    <div className={className}>
      <span className="text-primary">{prompt}</span>{" "}
      <span>{text}</span>
      <span className="inline-block w-[0.6ch] -mb-0.5 animate-blink bg-primary h-[1em] align-middle" />
    </div>
  );
}
