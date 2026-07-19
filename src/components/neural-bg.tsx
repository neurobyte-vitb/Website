export function NeuralBg({ className }: { className?: string }) {
  const nodes: [number, number][] = [];
  const cols = 8;
  const rows = 6;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      nodes.push([
        (c / (cols - 1)) * 100 + (Math.sin(r * 1.7 + c) * 2),
        (r / (rows - 1)) * 100 + (Math.cos(c * 1.3 + r) * 2),
      ]);
    }
  }
  const links: [number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i][0] - nodes[j][0];
      const dy = nodes[i][1] - nodes[j][1];
      if (Math.hypot(dx, dy) < 18) links.push([i, j]);
    }
  }
  return (
    <svg viewBox="0 0 100 100" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="oklch(0.82 0.18 200 / 0.15)"
          strokeWidth="0.1"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="0.4" fill="oklch(0.82 0.18 200)">
          <animate attributeName="opacity" values="0.3;1;0.3" dur={`${3 + (i % 5)}s`} repeatCount="indefinite" begin={`${i * 0.1}s`} />
        </circle>
      ))}
    </svg>
  );
}
