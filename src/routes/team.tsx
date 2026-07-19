import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — The NeuroByte Society" },
      { name: "description", content: "Meet the founding core team leading The NeuroByte Society at VIT Bhopal." },
      { property: "og:title", content: "Team — The NeuroByte Society" },
      { property: "og:description", content: "The founding core of the NeuroByte Society." },
    ],
  }),
  component: Team,
});

const CORE = [
  { name: "Adil Sukumar", role: "President", li: "https://linkedin.com/in/adilsukumar", tone: "primary" },
  { name: "Anakha Shaji", role: "Vice-President", li: "https://www.linkedin.com/in/anakha-shaji-8361b3387/", tone: "accent" },
  { name: "Snehal Dixit", role: "Joint Secretary", li: "https://linkedin.com/in/snehaldixitofficial", tone: "primary" },
  { name: "Vishwa Namdeo Badgujar", role: "General Secretary", li: "https://www.linkedin.com/in/vishwa-badgujar-bb747037b/", tone: "accent" },
  { name: "Riddhi Garg", role: "General Secretary", li: "https://www.linkedin.com/in/riddhigarg--/", tone: "primary" },
];

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
}

function Team() {
  return (
    <div>
      {/* HERO */}
      <section className="relative border-b border-border/40 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="absolute top-10 left-1/3 h-80 w-80 rounded-full bg-primary/15 blur-[120px]" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary">[ 04 ] Team · 05</p>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,9vw,7.5rem)] leading-[0.9] tracking-tighter max-w-5xl">
            The <span className="italic text-gradient-bio">founding</span> core.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            The people building the NeuroByte Society from day one. Leads and co-leads across
            verticals will be added shortly.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-4 md:grid-cols-12 md:auto-rows-[280px]">
          {CORE.map((m, i) => {
            // Broken layout: President big, others in mixed shapes
            const layouts = [
              "md:col-span-6 md:row-span-2", // 0 — President large
              "md:col-span-6",                // 1 — VP
              "md:col-span-3",                // 2
              "md:col-span-3",                // 3
              "md:col-span-6",                // 4
            ];
            return (
              <article
                key={m.name}
                className={`group relative rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1 ${layouts[i]} ${
                  i === 0 ? "surface-dark border border-primary/40" : "surface-glass"
                }`}
              >
                <div className={`absolute inset-0 grid-lines opacity-${i === 0 ? "40" : "20"}`} />
                <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition-all duration-700 ${
                  m.tone === "primary" ? "bg-primary/20 group-hover:bg-primary/40" : "bg-accent/20 group-hover:bg-accent/40"
                }`} />
                <div className="relative h-full flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className={`rounded-2xl font-display flex items-center justify-center text-background ${
                      i === 0 ? "h-24 w-24 text-4xl bg-gradient-to-br from-primary to-accent" : "h-14 w-14 text-xl bg-gradient-to-br from-primary to-accent"
                    }`}>
                      {initials(m.name)}
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-primary">
                      /0{i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className={`font-display leading-tight ${i === 0 ? "text-5xl" : "text-2xl"}`}>
                      {m.name}
                    </h3>
                    <p className={`mt-1 italic text-gradient-bio ${i === 0 ? "font-display text-2xl" : "text-sm"}`}>
                      {m.role}
                    </p>
                    <a
                      href={m.li}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8h4.53v14H.24V8zm7.5 0h4.34v1.92h.06c.6-1.14 2.07-2.34 4.26-2.34 4.55 0 5.39 3 5.39 6.9V22h-4.53v-6.16c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.25V22H7.74V8z" />
                      </svg>
                      LinkedIn →
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
          {/* Placeholder for more */}
          <div className="md:col-span-12 rounded-3xl border border-dashed border-border/60 p-10 flex items-center justify-between gap-6 flex-wrap">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary">// Coming soon</p>
              <h3 className="mt-2 font-display text-3xl">Leads and co-leads across verticals.</h3>
            </div>
            <span className="font-mono text-xs text-muted-foreground animate-blink">_</span>
          </div>
        </div>
      </section>
    </div>
  );
}
