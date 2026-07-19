import { createFileRoute, Link } from "@tanstack/react-router";
import { NeuroHelix } from "../components/neuro-helix";
import { NeuralBg } from "../components/neural-bg";
import { Marquee } from "../components/marquee";
import { Reveal, Tilt, Magnetic, CountUp } from "../components/fx";
import heroFusion from "../assets/hero-fusion.jpg";
import neuronCircuit from "../assets/neuron-circuit.jpg";
import proteinAi from "../assets/protein-ai.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The NeuroByte Society — AI × Bioinformatics · VIT Bhopal" },
      { name: "description", content: "Student research collective at VIT Bhopal decoding biology with code — AI, bioinformatics, biotech, healthcare." },
      { property: "og:title", content: "The NeuroByte Society — AI × Bioinformatics · VIT Bhopal" },
      { property: "og:description", content: "Student research collective at VIT Bhopal decoding biology with code — AI, bioinformatics, biotech, healthcare." },
    ],
  }),
  component: Home,
});

const STATS = [
  { k: 15, suffix: "", l: "Active projects", s: "spanning AI, hardware, biotech" },
  { k: 9, suffix: "", l: "Launch activities", s: "in the BioGenesis event" },
  { k: 6, suffix: "", l: "Domains", s: "AI · Bio · Health · Robotics" },
  { k: 0, suffix: "∞", l: "Curiosity", s: "the only real prerequisite" },
];

const PILLARS = [
  { n: "01", t: "Research", d: "Small teams, real problems. Papers, prototypes, and public write-ups." },
  { n: "02", t: "Workshops", d: "From protein folding to embedded C — practical, hands-on, no gatekeeping." },
  { n: "03", t: "Hackathons", d: "Interdisciplinary sprints where CS meets wet-lab thinking." },
  { n: "04", t: "Publications", d: "Support for members writing, submitting, and presenting research." },
];

const FEATURED = [
  { n: "02", t: "AI-Powered Drug Discovery", tag: "AI × Bio", d: "ML-assisted molecular screening for candidate compounds." },
  { n: "07", t: "AI-Driven CRISPR Demo", tag: "Genomics", d: "Guide-RNA selection augmented by deep learning." },
  { n: "13", t: "Portable ECG Machine", tag: "Hardware", d: "Compact, affordable cardiac monitoring, engineered on campus." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[100vh] flex items-center">
        {/* Cinematic photographic backdrop */}
        <div className="absolute inset-0">
          <img
            src={heroFusion}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-70 animate-ken-burns"
          />
          {/* dark gradient wash so text stays legible */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        </div>
        <div className="absolute inset-0 grid-lines opacity-25" />
        <NeuralBg className="absolute inset-0 opacity-30" />
        {/* Fusion helix → neural network viz */}
        <div className="absolute right-0 top-0 h-full w-[62%] pointer-events-none hidden md:block">
          <NeuroHelix className="h-full w-full animate-float-slow" />
        </div>
        {/* Aurora blobs */}
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/25 blur-[120px] animate-aurora" />
        <div className="absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-accent/20 blur-[120px] animate-aurora" style={{ animationDelay: "-6s" }} />
        <div className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-lime/10 blur-[100px] animate-drift" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-20 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary animate-rise">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-primary animate-pulse-ring" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span>/ VIT Bhopal · Est. 2026 · Recruiting now</span>
            </div>
            <h1 className="mt-8 font-display text-[clamp(3rem,10vw,8.5rem)] leading-[0.95] tracking-tighter animate-rise" style={{ animationDelay: "0.1s" }}>
              <span className="text-foreground">We decode</span>{" "}
              <span className="italic text-gradient-animated">biology</span>{" "}
              <span className="text-foreground">with</span>{" "}
              <span className="italic text-gradient-animated">code</span>.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-rise" style={{ animationDelay: "0.2s" }}>
              The NeuroByte Society is a student research collective at VIT Bhopal building at the
              intersection of artificial intelligence, bioinformatics, biotechnology, and
              healthcare — one experiment at a time.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 animate-rise" style={{ animationDelay: "0.3s" }}>
              <Magnetic>
                <Link
                  to="/event"
                  className="group relative inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground overflow-hidden animate-glow-pulse"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity" style={{ animation: "shimmer 2s linear infinite" }} />
                  <span className="relative">Explore BioGenesis</span>
                  <span className="relative transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                >
                  <span className="h-px w-8 bg-foreground/50 group-hover:w-14 group-hover:bg-primary transition-all duration-500" />
                  See 15 projects
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Stats with count-up */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl">
            {STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 120}>
                <div className="group border-l border-primary/40 pl-4 hover:border-primary hover:pl-6 transition-all duration-500">
                  <div className="font-display text-5xl md:text-6xl text-foreground leading-none">
                    {s.suffix === "∞" ? (
                      <span className="text-gradient-animated">∞</span>
                    ) : (
                      <CountUp to={s.k} />
                    )}
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-primary">{s.l}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.s}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex flex-col items-center gap-2">
          <span className="animate-blink">scroll</span>
          <span className="h-8 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee items={["Bioinformatics", "Neural Networks", "CRISPR", "Nanomedicine", "Robotics", "Signal Processing", "Genomics"]} />

      {/* MANIFESTO / EDITORIAL */}
      <section className="relative mx-auto max-w-[1400px] px-6 py-32">
        <div className="grid gap-12 md:grid-cols-12 items-start">
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary sticky top-32">
              [ 01 ] Manifesto
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Biology is the next{" "}
              <span className="italic text-gradient-bio">interface</span>.
              Code is the next{" "}
              <span className="italic text-gradient-bio">scalpel</span>.
              We're the ones learning to hold both.
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 text-muted-foreground text-base leading-relaxed">
              <p>
                We aren't waiting for a class to catch up. We build. Diagnostics from ECG signals,
                drug candidates from transformer models, protein structures rendered in AR, plants
                monitored by our own boards.
              </p>
              <p>
                No prerequisites beyond curiosity. If you've written a for-loop or pipetted a
                reagent, you belong here. The rest we learn — together, in public.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS BENTO */}
      <section className="mx-auto max-w-[1400px] px-6 pb-32">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">[ 02 ] What we do</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Four pillars, one loop.</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-12 md:auto-rows-[180px]">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 100}
              className={`
                ${i === 0 ? "md:col-span-5 md:row-span-2" : ""}
                ${i === 1 ? "md:col-span-7" : ""}
                ${i === 2 ? "md:col-span-4" : ""}
                ${i === 3 ? "md:col-span-3" : ""}`}
            >
              <Tilt max={6} className="h-full">
                <div className="surface-glass rounded-2xl p-8 group hover:border-primary/60 transition-all duration-500 relative overflow-hidden h-full">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/0 group-hover:bg-primary/30 blur-3xl transition-all duration-700" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), oklch(0.7 0.25 310 / 0.1), transparent 40%)",
                    }}
                  />
                  <div className="relative flex flex-col h-full justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary/70">{p.n}</span>
                    <div>
                      <h3 className="font-display text-3xl md:text-4xl transition-transform duration-500 group-hover:translate-x-1">{p.t}</h3>
                      <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
                    </div>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="relative mx-auto max-w-[1400px] px-6 pb-32">
        <div className="flex items-end justify-between gap-4 mb-12 flex-wrap">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">[ 03 ] Selected work</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Three of fifteen.</h2>
          </div>
          <Link
            to="/projects"
            className="group font-mono text-[11px] uppercase tracking-widest text-primary hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            All projects
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {FEATURED.map((f, i) => (
            <Reveal key={f.n} delay={i * 150}>
              <Tilt max={10}>
                <Link
                  to="/projects"
                  className={`group relative rounded-2xl p-8 min-h-[320px] flex flex-col justify-between overflow-hidden transition-all duration-500
                    ${i === 0 ? "surface-glass" : ""}
                    ${i === 1 ? "surface-dark border border-primary/40" : ""}
                    ${i === 2 ? "surface-glass" : ""}`}
                >
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-40 transition-opacity duration-700">
                    <NeuralBg className="w-full h-full" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  <div className="relative flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Project · {f.n}</span>
                    <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-1 rounded-full border border-border">{f.tag}</span>
                  </div>
                  <div className="relative">
                    <h3 className="font-display text-3xl leading-tight transition-transform duration-500 group-hover:-translate-y-1">{f.t}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{f.d}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 group-hover:gap-3 transition-all duration-500">
                      Read more →
                    </span>
                  </div>
                </Link>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EVENT CTA */}
      <section className="relative mx-auto max-w-[1400px] px-6 pb-32">
        <div className="relative surface-dark rounded-3xl overflow-hidden p-10 md:p-16">
          <div className="absolute inset-0 grid-lines opacity-40" />
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-[120px] animate-aurora" />
          <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-primary/20 blur-[120px] animate-aurora" style={{ animationDelay: "-4s" }} />
          <div className="relative grid gap-10 md:grid-cols-2 items-center">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
                Upcoming · Mid-August
              </p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1] tracking-tight">
                <span className="italic text-gradient-bio">BioGenesis.</span><br />
                The launch.
              </h2>
              <p className="mt-6 text-muted-foreground max-w-md">
                Two hours. Nine activities. One ideation challenge with an 18-month Gemini Pro
                subscription on the line. A talk by Dr. Suresh Kumar R. S. Food, jamming, mentors,
                photo booth.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Magnetic>
                  <Link
                    to="/event"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
                  >
                    See the full lineup
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm hover:bg-secondary hover:border-primary/60 transition-colors"
                  >
                    Register interest
                  </Link>
                </Magnetic>
              </div>
            </div>
            <div className="relative">
              <div className="font-mono text-xs space-y-3">
                {["01 · Club introduction", "02 · BioEvolution challenge", "03 · LinkedIn networking", "04 · Student benefits", "05 · Menstrual health", "06 · Mentorship corner", "07 · Photo booth", "08 · Expert talk", "09 · Jamming session"].map((line, idx) => (
                  <Reveal key={line} delay={idx * 60} y={8}>
                    <div className="flex items-center gap-3 group cursor-default">
                      <span className="h-px flex-1 bg-border group-hover:bg-primary transition-colors" />
                      <span className="text-foreground/80 group-hover:text-primary group-hover:-translate-x-1 transition-all duration-300 inline-block">{line}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
