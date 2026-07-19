import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The NeuroByte Society" },
      { name: "description", content: "Our vision, mission, and the six domains we work across at VIT Bhopal." },
      { property: "og:title", content: "About — The NeuroByte Society" },
      { property: "og:description", content: "A student club engineering the intersection of biology and code." },
    ],
  }),
  component: About,
});

const DOMAINS = [
  { n: "01", t: "Artificial Intelligence", d: "Deep learning, transformers, vision, and reinforcement systems applied to biology." },
  { n: "02", t: "Bioinformatics", d: "Genomic analysis, sequence alignment, and computational biology pipelines." },
  { n: "03", t: "Biotechnology", d: "Genetic engineering, CRISPR, nanomedicine, and materials science." },
  { n: "04", t: "Healthcare", d: "Diagnostic imaging, medical devices, and clinical decision support." },
  { n: "05", t: "Robotics", d: "Arms, actuators, and autonomous systems for lab and field." },
  { n: "06", t: "Embedded Systems", d: "Custom hardware, sensors, and microcontrollers for real-world sensing." },
];

function About() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative border-b border-border/40 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary">[ 01 ] About</p>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-tighter max-w-5xl">
            A club at the <span className="italic text-gradient-bio">intersection</span> of biology and code.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            The NeuroByte Society is a student-run research and innovation collective at VIT Bhopal.
            We bring together students across engineering, biosciences, and computer science to
            explore how AI is reshaping life sciences — through hands-on projects, research,
            workshops, and real problem solving.
          </p>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="surface-glass rounded-2xl p-10 relative overflow-hidden group">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/40 transition-all duration-700" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">// Vision</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              A community that <span className="italic text-gradient-bio">solves</span> meaningful problems.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Students using AI, bioinformatics, and biotechnology to work on health, agriculture,
              and the life sciences — with rigor and imagination.
            </p>
          </div>
          <div className="surface-dark rounded-2xl p-10 relative overflow-hidden group">
            <div className="absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-accent/20 blur-3xl group-hover:bg-accent/40 transition-all duration-700" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">// Mission</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              Research, workshops, hackathons, <span className="italic text-gradient-bio">mentorship</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We give members interdisciplinary learning, industry interactions, publication
              support, and leadership opportunities — from day one.
            </p>
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <section className="mx-auto max-w-[1400px] px-6 pb-24">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">[ 02 ] Domains</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Six fields. Zero silos.</h2>
          </div>
        </div>
        <div className="grid divide-y divide-border/40 border-y border-border/40">
          {DOMAINS.map((d) => (
            <div key={d.n} className="grid md:grid-cols-12 gap-6 py-8 group hover:bg-primary/5 transition-colors px-4 -mx-4 rounded-lg">
              <div className="md:col-span-1 font-mono text-xs text-primary">{d.n}</div>
              <div className="md:col-span-4">
                <h3 className="font-display text-3xl md:text-4xl group-hover:italic transition-all">{d.t}</h3>
              </div>
              <div className="md:col-span-7 text-muted-foreground max-w-2xl">{d.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW MEMBERS CONTRIBUTE */}
      <section className="mx-auto max-w-[1400px] px-6 pb-32">
        <div className="surface-dark rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 grid-lines opacity-30" />
          <div className="relative">
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">[ 03 ] Contribute</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl max-w-3xl">
              However you show up, there's a way in.
            </h2>
            <ul className="mt-10 grid gap-x-8 gap-y-4 md:grid-cols-2 text-lg">
              {[
                "Research groups on ongoing projects",
                "Prototype development and lab work",
                "Collaborative learning sessions",
                "Hackathons and interdisciplinary sprints",
                "Paper writing and publication support",
                "Workshops and speaker sessions",
              ].map((line, i) => (
                <li key={line} className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-foreground/90">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
