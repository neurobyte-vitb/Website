export function DnaViz({ className }: { className?: string }) {
  // Double helix rendered as two sinusoids with rungs
  const points = 40;
  const width = 400;
  const height = 600;
  const amp = 70;
  const cx = width / 2;
  const helixA: string[] = [];
  const helixB: string[] = [];
  const rungs: { x1: number; x2: number; y: number; z: number }[] = [];
  for (let i = 0; i <= points; i++) {
    const t = i / points;
    const y = t * height;
    const phase = t * Math.PI * 5;
    const xa = cx + Math.sin(phase) * amp;
    const xb = cx + Math.sin(phase + Math.PI) * amp;
    helixA.push(`${i === 0 ? "M" : "L"}${xa.toFixed(1)},${y.toFixed(1)}`);
    helixB.push(`${i === 0 ? "M" : "L"}${xb.toFixed(1)},${y.toFixed(1)}`);
    if (i % 2 === 0) rungs.push({ x1: xa, x2: xb, y, z: Math.cos(phase) });
  }
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={className} aria-hidden>
      <defs>
        <linearGradient id="hA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.82 0.18 200)" />
          <stop offset="100%" stopColor="oklch(0.7 0.25 310)" />
        </linearGradient>
        <linearGradient id="hB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.7 0.25 310)" />
          <stop offset="100%" stopColor="oklch(0.82 0.18 200)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
      <g filter="url(#glow)" opacity="0.5">
        <path d={helixA.join(" ")} stroke="url(#hA)" strokeWidth="4" fill="none" />
        <path d={helixB.join(" ")} stroke="url(#hB)" strokeWidth="4" fill="none" />
      </g>
      <path d={helixA.join(" ")} stroke="url(#hA)" strokeWidth="1.5" fill="none" />
      <path d={helixB.join(" ")} stroke="url(#hB)" strokeWidth="1.5" fill="none" />
      {rungs.map((r, i) => (
        <g key={i} opacity={0.3 + Math.abs(r.z) * 0.5}>
          <line
            x1={r.x1}
            y1={r.y}
            x2={r.x2}
            y2={r.y}
            stroke="oklch(0.85 0.05 250)"
            strokeWidth={0.6 + Math.abs(r.z) * 0.8}
          />
          <circle cx={r.x1} cy={r.y} r={1.5 + Math.abs(r.z)} fill="oklch(0.82 0.18 200)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={r.x2} cy={r.y} r={1.5 + Math.abs(r.z)} fill="oklch(0.7 0.25 310)">
            <animate attributeName="opacity" values="1;0.4;1" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
}
