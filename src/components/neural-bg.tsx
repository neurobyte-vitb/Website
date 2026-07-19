export function NeuralBg({ className }: { className?: string }) {
  const nodes = [
    [10, 20], [22, 12], [35, 18], [48, 10], [60, 22], [75, 15], [88, 28],
    [15, 45], [30, 40], [45, 50], [58, 42], [72, 55], [85, 48],
    [12, 72], [28, 78], [42, 68], [55, 80], [70, 72], [86, 82],
  ];
  const links = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[0,7],[1,8],[2,9],[3,9],[4,10],[5,11],[6,12],
    [7,8],[8,9],[9,10],[10,11],[11,12],[7,13],[8,14],[9,15],[10,16],[11,17],[12,18],
    [13,14],[14,15],[15,16],[16,17],[17,18],
  ];
  return (
    <svg viewBox="0 0 100 100" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <radialGradient id="glowA" cx="70%" cy="30%" r="60%">
          <stop offset="0%" stopColor="oklch(0.65 0.2 300 / 0.35)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="glowB" cx="20%" cy="80%" r="60%">
          <stop offset="0%" stopColor="oklch(0.7 0.13 245 / 0.3)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="url(#glowA)" />
      <rect width="100" height="100" fill="url(#glowB)" />
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="oklch(0.83 0.02 250 / 0.25)"
          strokeWidth="0.15"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="0.55" fill="oklch(0.85 0.05 250 / 0.9)">
          <animate attributeName="opacity" values="0.4;1;0.4" dur={`${3 + (i % 4)}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}
