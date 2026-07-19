import { createFileRoute, Link } from "@tanstack/react-router";
import { DnaViz } from "../components/dna-viz";
import { NeuralBg } from "../components/neural-bg";
import { Marquee } from "../components/marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The NeuroByte Society — AI × Bioinformatics · VIT Bhopal" },
      { name: "description", content: "Student research collective at VIT Bhopal decoding biology with code — AI, bioinformatics, biotech, healthcare." },
      { property: "og:title", content: "The NeuroByte Society" },
      { property: "og:description", content: "15 projects. 9 activities. One mission — decode biology with code." },
    ],
  }),
  component: Home,
});

const STATS = [
  { k: "15", l: "Active projects", s: "spanning AI, hardware, biotech" },
  { k: "09", l: "Launch activities", s: "in the BioGenesis event" },
  { k: "06", l: "Domains", s: "AI · Bio · Health · Robotics" },
  { k: "∞", l: "Curiosity", s: "the only real prerequisite" },
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
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <NeuralBg className="absolute inset-0 opacity-60" />
        <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none hidden md:block">
          <DnaViz className="h-full w-full animate-float-slow" />
        </div>
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-float-slow" />
        <div className="absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-accent/15 blur-[120px]" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-20 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary animate-rise">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-ring relative">
                <span className="absolute inset-0 rounded-full bg-primary" />
              </span>
              <span>/ VIT Bhopal · Est. 2026 · Recruiting now</span>
            </div>
            <h1 className="mt-8 font-display text-[clamp(3rem,10vw,8.5rem)] leading-[0.95] tracking-tighter animate-rise" style={{ animationDelay: "0.1s" }}>
              <span className="text-foreground">We decode</span>{" "}
              <span className="italic text-gradient-bio">biology</span>{" "}
              <span className="text-foreground">with</span>{" "}
              <span className="italic text-gradient-bio">code</span>.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-rise" style={{ animationDelay: "0.2s" }}>
              The NeuroByte Society is a student research collective at VIT Bhopal building at the
              intersection of artificial intelligence, bioinformatics, biotechnology, and
              healthcare — one experiment at a time.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 animate-rise" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/event"
                className="group relative inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity" style={{ animation: "shimmer 2s linear infinite" }} />
                <span className="relative">Explore BioGenesis</span>
                <span className="relative">→</span>
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-foreground hover:text-primary transition-colors"
              >
                <span className="h-px w-8 bg-foreground group-hover:bg-primary" />
                See 15 projects
              </Link>
            </div>
          </div>

          {/* Corner tick marks */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl animate-rise" style={{ animationDelay: "0.4s" }}>
            {STATS.map((s) => (
              <div key={s.l} className="border-l border-primary/40 pl-4">
                <div className="font-display text-5xl md:text-6xl text-foreground leading-none">{s.k}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-primary">{s.l}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.s}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex flex-col items-center gap-2">
          <span>scroll</span>
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
            <div
              key={p.n}
              className={`surface-glass rounded-2xl p-8 group hover:border-primary/60 transition-all duration-500 relative overflow-hidden
                ${i === 0 ? "md:col-span-5 md:row-span-2" : ""}
                ${i === 1 ? "md:col-span-7" : ""}
                ${i === 2 ? "md:col-span-4" : ""}
                ${i === 3 ? "md:col-span-3" : ""}`}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-3xl transition-all duration-700" />
              <div className="relative flex flex-col h-full justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary/70">{p.n}</span>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl">{p.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </div>
            </div>
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
            className="font-mono text-[11px] uppercase tracking-widest text-primary hover:text-foreground transition-colors"
          >
            All projects →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {FEATURED.map((f, i) => (
            <Link
              key={f.n}
              to="/projects"
              className={`group relative rounded-2xl p-8 min-h-[320px] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-1
                ${i === 0 ? "surface-glass" : ""}
                ${i === 1 ? "surface-dark border border-primary/40" : ""}
                ${i === 2 ? "surface-glass" : ""}`}
            >
              <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity">
                <NeuralBg className="w-full h-full" />
              </div>
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Project · {f.n}</span>
                <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-1 rounded-full border border-border">{f.tag}</span>
              </div>
              <div className="relative">
                <h3 className="font-display text-3xl leading-tight">{f.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{f.d}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* EVENT CTA */}
      <section className="relative mx-auto max-w-[1400px] px-6 pb-32">
        <div className="relative surface-dark rounded-3xl overflow-hidden p-10 md:p-16">
          <div className="absolute inset-0 grid-lines opacity-40" />
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
          <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />
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
                <Link
                  to="/event"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  See the full lineup →
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm hover:bg-secondary"
                >
                  Register interest
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="font-mono text-xs space-y-3">
                {["01 · Club introduction", "02 · BioEvolution challenge", "03 · LinkedIn networking", "04 · Student benefits", "05 · Menstrual health", "06 · Mentorship corner", "07 · Photo booth", "08 · Expert talk", "09 · Jamming session"].map((line) => (
                  <div key={line} className="flex items-center gap-3 group">
                    <span className="h-px flex-1 bg-border" />
                    <span className="text-foreground/80 group-hover:text-primary transition-colors">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
