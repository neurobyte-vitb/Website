// NeuroHelix — DNA double helix on the left morphing into a neural network
// graph on the right. Represents the bio × AI intersection.
export function NeuroHelix({ className }: { className?: string }) {
  const width = 800;
  const height = 700;
  const helixEndX = 320;
  const points = 46;
  const amp = 55;
  const cx = 160;

  const helixA: string[] = [];
  const helixB: string[] = [];
  const rungs: { x1: number; x2: number; y: number; z: number; i: number }[] = [];
  const bridgePts: { x: number; y: number }[] = [];

  for (let i = 0; i <= points; i++) {
    const t = i / points;
    const y = 30 + t * (height - 60);
    const phase = t * Math.PI * 5;
    // fade helix out toward the right (morphing)
    const dissolve = Math.max(0, 1 - Math.max(0, (t - 0.55)) * 2.4);
    const xa = cx + Math.sin(phase) * amp * dissolve;
    const xb = cx + Math.sin(phase + Math.PI) * amp * dissolve;
    helixA.push(`${i === 0 ? "M" : "L"}${xa.toFixed(1)},${y.toFixed(1)}`);
    helixB.push(`${i === 0 ? "M" : "L"}${xb.toFixed(1)},${y.toFixed(1)}`);
    if (i % 2 === 0 && dissolve > 0.15) {
      rungs.push({ x1: xa, x2: xb, y, z: Math.cos(phase), i });
    }
    if (dissolve > 0.05 && dissolve < 0.9 && i % 3 === 0) {
      bridgePts.push({ x: (xa + xb) / 2, y });
    }
  }

  // Neural network nodes on the right
  const layers = [
    { x: 420, count: 6 },
    { x: 560, count: 8 },
    { x: 700, count: 5 },
  ];
  const nodes: { x: number; y: number; l: number; idx: number }[] = [];
  layers.forEach((layer, li) => {
    const spacing = (height - 80) / (layer.count + 1);
    for (let n = 0; n < layer.count; n++) {
      nodes.push({ x: layer.x, y: 40 + spacing * (n + 1), l: li, idx: n });
    }
  });

  // Edges between adjacent layers
  const edges: { x1: number; y1: number; x2: number; y2: number; k: string }[] = [];
  for (let li = 0; li < layers.length - 1; li++) {
    const from = nodes.filter((n) => n.l === li);
    const to = nodes.filter((n) => n.l === li + 1);
    from.forEach((a) => {
      to.forEach((b) => {
        // sparse — skip about 35%
        if (((a.idx * 7 + b.idx * 13) % 10) < 7) {
          edges.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, k: `${li}-${a.idx}-${b.idx}` });
        }
      });
    });
  }

  // Bridges: helix midpoints → first neural layer
  const firstLayer = nodes.filter((n) => n.l === 0);
  const bridges: { x1: number; y1: number; x2: number; y2: number; k: string }[] = [];
  bridgePts.forEach((p, i) => {
    const target = firstLayer[i % firstLayer.length];
    bridges.push({ x1: p.x, y1: p.y, x2: target.x, y2: target.y, k: `b-${i}` });
  });

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={className} aria-hidden preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="nh-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.82 0.18 200)" />
          <stop offset="100%" stopColor="oklch(0.7 0.25 310)" />
        </linearGradient>
        <linearGradient id="nh-b" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.88 0.2 140)" />
          <stop offset="100%" stopColor="oklch(0.82 0.18 200)" />
        </linearGradient>
        <linearGradient id="nh-bridge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.82 0.18 200)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="oklch(0.7 0.25 310)" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="nh-node">
          <stop offset="0%" stopColor="oklch(0.95 0.12 200)" />
          <stop offset="60%" stopColor="oklch(0.7 0.25 310)" />
          <stop offset="100%" stopColor="oklch(0.7 0.25 310 / 0)" />
        </radialGradient>
        <filter id="nh-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
      </defs>

      {/* helix glow */}
      <g filter="url(#nh-glow)" opacity="0.55">
        <path d={helixA.join(" ")} stroke="url(#nh-a)" strokeWidth="4" fill="none" />
        <path d={helixB.join(" ")} stroke="url(#nh-b)" strokeWidth="4" fill="none" />
      </g>
      <path d={helixA.join(" ")} stroke="url(#nh-a)" strokeWidth="1.4" fill="none" />
      <path d={helixB.join(" ")} stroke="url(#nh-b)" strokeWidth="1.4" fill="none" />

      {/* rungs (base pairs) */}
      {rungs.map((r) => (
        <g key={r.i} opacity={0.4 + Math.abs(r.z) * 0.5}>
          <line x1={r.x1} y1={r.y} x2={r.x2} y2={r.y}
            stroke="oklch(0.85 0.05 250)" strokeWidth={0.6 + Math.abs(r.z) * 0.7} />
          <circle cx={r.x1} cy={r.y} r={1.5} fill="oklch(0.82 0.18 200)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur={`${2 + (r.i % 3)}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={r.x2} cy={r.y} r={1.5} fill="oklch(0.7 0.25 310)">
            <animate attributeName="opacity" values="1;0.5;1" dur={`${2 + (r.i % 3)}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* bridges: helix → network */}
      {bridges.map((b) => (
        <line key={b.k} x1={b.x1} y1={b.y1} x2={b.x2} y2={b.y2}
          stroke="url(#nh-bridge)" strokeWidth="0.9" strokeDasharray="3 4" opacity="0.6">
          <animate attributeName="stroke-dashoffset" values="0;-14" dur="3s" repeatCount="indefinite" />
        </line>
      ))}

      {/* network edges */}
      <g stroke="oklch(0.82 0.18 200)" strokeWidth="0.6" fill="none">
        {edges.map((e, i) => (
          <line key={e.k} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
            opacity={0.15 + ((i * 37) % 40) / 100}>
            <animate attributeName="opacity"
              values={`${0.15};${0.5 + ((i * 17) % 30) / 100};${0.15}`}
              dur={`${3 + (i % 4)}s`} repeatCount="indefinite" />
          </line>
        ))}
      </g>

      {/* traveling signal pulses along a subset of edges */}
      {edges.filter((_, i) => i % 5 === 0).slice(0, 14).map((e, i) => (
        <circle key={`p-${e.k}`} r="2" fill="oklch(0.95 0.12 200)">
          <animate attributeName="cx" values={`${e.x1};${e.x2}`} dur={`${1.6 + (i % 3) * 0.5}s`}
            repeatCount="indefinite" begin={`${(i * 0.2).toFixed(2)}s`} />
          <animate attributeName="cy" values={`${e.y1};${e.y2}`} dur={`${1.6 + (i % 3) * 0.5}s`}
            repeatCount="indefinite" begin={`${(i * 0.2).toFixed(2)}s`} />
          <animate attributeName="opacity" values="0;1;0" dur={`${1.6 + (i % 3) * 0.5}s`}
            repeatCount="indefinite" begin={`${(i * 0.2).toFixed(2)}s`} />
        </circle>
      ))}

      {/* neural nodes */}
      {nodes.map((n) => (
        <g key={`n-${n.l}-${n.idx}`}>
          <circle cx={n.x} cy={n.y} r="10" fill="url(#nh-node)" opacity="0.4" />
          <circle cx={n.x} cy={n.y} r="3.4" fill="oklch(0.95 0.1 200)" filter="url(#nh-glow)">
            <animate attributeName="r" values="3.2;4.2;3.2"
              dur={`${2.4 + ((n.l + n.idx) % 3)}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={n.x} cy={n.y} r="1.6" fill="oklch(1 0 0)" />
        </g>
      ))}

      {helixEndX < 0 && null /* keep tsc happy for unused constant */}
    </svg>
  );
}
