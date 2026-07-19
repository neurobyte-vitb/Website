export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-6 border-y border-border/40 bg-gradient-to-r from-transparent via-primary/5 to-transparent">
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="font-display text-3xl md:text-5xl text-foreground/40 flex items-center gap-16">
            {item}
            <span className="text-primary text-xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
