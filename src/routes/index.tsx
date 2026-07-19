import { createFileRoute, Link } from "@tanstack/react-router";
import { NeuroHelix } from "../components/neuro-helix";
import { NeuroCanvas } from "../components/neuro-canvas";
import { TerminalType } from "../components/terminal-type";
import { NeuralBg } from "../components/neural-bg";

import { Reveal, Tilt, Magnetic, CountUp } from "../components/fx";
import { ShaderGradient } from "../components/shader-gradient";
import { Scramble } from "../components/scramble";
import { FloatingGallery } from "../components/floating-gallery";
import heroFusion from "../assets/hero-fusion.jpg";
import neuronCircuit from "../assets/neuron-circuit.jpg";
import proteinAi from "../assets/protein-ai.jpg";
import synapseCircuit from "../assets/synapse-circuit.jpg";
import dnaChrome from "../assets/dna-chrome.jpg";
import heartTransformer from "../assets/heart-transformer.jpg";
import petriNetwork from "../assets/petri-network.jpg";
import brainDna from "../assets/brain-dna.jpg";
import chromosomeMesh from "../assets/chromosome-mesh.jpg";

const GALLERY = [
  { src: synapseCircuit, alt: "Synapse merging with circuit", tag: "Synapse × Silicon", caption: "Where signals learn to think." },
  { src: petriNetwork, alt: "Petri dish with neural network", tag: "In vitro · In silico", caption: "Culturing intelligence." },
  { src: dnaChrome, alt: "Chrome DNA helix with code", tag: "Helix · Bytecode", caption: "The genome, compiled." },
  { src: heartTransformer, alt: "Heart cell with transformer diagram", tag: "Cardio × Attention", caption: "Every heartbeat is a token." },
  { src: brainDna, alt: "Translucent brain with DNA", tag: "Cognition · Genome", caption: "Wet-wired inference." },
  { src: chromosomeMesh, alt: "Chromosomes wrapped in neural mesh", tag: "Chromatin · Mesh", caption: "Structure is memory." },
];

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
  { k: 15, suffix: "", l: "Upcoming projects", s: "planned across AI, hardware, biotech" },
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
  { n: "02", t: "AI-Powered Drug Discovery", tag: "NeuroByte", d: "ML-assisted molecular screening for candidate compounds." },
  { n: "07", t: "AI-Driven CRISPR Demo", tag: "Genomics", d: "Guide-RNA selection augmented by deep learning." },
  { n: "13", t: "Portable ECG Machine", tag: "Hardware", d: "Compact, affordable cardiac monitoring, engineered on campus." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[100vh] flex items-center">
        {/* Live WebGL shader plasma — The NeuroByte Society palette */}
        <ShaderGradient className="absolute inset-0 h-full w-full opacity-70" />
        {/* Cinematic photographic backdrop layered on shader */}
        <div className="absolute inset-0 mix-blend-overlay">
          <img
            src={heroFusion}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-60 animate-ken-burns"
          />
        </div>
        {/* dark gradient wash so text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="absolute inset-0 grid-lines opacity-25" />
        <NeuralBg className="absolute inset-0 opacity-30" />
        {/* Interactive fusion canvas — reacts to your cursor */}
        <div className="absolute right-0 top-0 h-full w-[62%] hidden md:block">
          <NeuroCanvas className="absolute inset-0 h-full w-full" />
        </div>
        {/* Mobile: static SVG fallback */}
        <div className="absolute right-0 top-0 h-full w-full pointer-events-none md:hidden opacity-40">
          <NeuroHelix className="h-full w-full" />
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
              <Scramble text="We decode" className="text-foreground" />{" "}
              <span className="italic text-gradient-animated">biology</span>{" "}
              <Scramble text="with" className="text-foreground" speed={30} />{" "}
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

            {/* Live terminal */}
            <div className="mt-10 max-w-xl animate-rise" style={{ animationDelay: "0.4s" }}>
              <div className="surface-glass rounded-xl overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-2 border-b border-border/50">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-lime/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                  <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">neurobyte@vitb : ~</span>
                </div>
                <TerminalType
                  className="px-4 py-3 font-mono text-xs md:text-sm text-foreground"
                  lines={[
                    "python fold.py --seq MKVLW... --model esm3",
                    "curl -X POST /api/crispr/guides < target.fa",
                    "torchrun screen.py --library zinc22 --top-k 128",
                    "flash ecg-portable.hex --board stm32-nucleo",
                  ]}
                />
              </div>
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

      {/* INTERSECTION EDITORIAL — visual proof of The NeuroByte Society */}
      <section className="relative mx-auto max-w-[1400px] px-6 pb-32">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-12 md:auto-rows-[280px]">
            {/* Big feature — neuron × circuit */}
            <Tilt max={5} className="md:col-span-8 md:row-span-2">
              <div className="relative h-full rounded-3xl overflow-hidden surface-glass group">
                <img
                  src={neuronCircuit}
                  alt="A neuron whose dendrites branch into circuit traces and DNA — The NeuroByte Society"
                  loading="lazy"
                  width={1200}
                  height={1200}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1600ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/20 to-transparent" />
                {/* scan line */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-primary/15 to-transparent animate-scan" />
                </div>
                <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    Neuron × Circuit × Genome
                  </div>
                  <div>
                    <h3 className="font-display text-4xl md:text-6xl leading-[1] tracking-tight max-w-lg">
                      Where <span className="italic text-gradient-animated">wetware</span> meets{" "}
                      <span className="italic text-gradient-animated">weights</span>.
                    </h3>
                    <p className="mt-4 text-sm text-muted-foreground max-w-md">
                      Every project sits at a seam — a dendrite becoming a data pipeline, a base pair
                      becoming a token, a heartbeat becoming a feature vector.
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>

            {/* Protein × AI card */}
            <Tilt max={7} className="md:col-span-4">
              <div className="relative h-full rounded-3xl overflow-hidden surface-glass group">
                <img
                  src={proteinAi}
                  alt="Protein structure overlaid with AI attention maps"
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[1600ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-6">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-primary">Protein × Transformer</span>
                  <h4 className="mt-1 font-display text-2xl leading-tight">Fold. Predict. Iterate.</h4>
                </div>
              </div>
            </Tilt>

            {/* Live NeuroHelix mini card */}
            <Tilt max={7} className="md:col-span-4">
              <div className="relative h-full rounded-3xl overflow-hidden surface-dark border border-primary/30 group">
                <NeuroHelix className="absolute inset-0 h-full w-full opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-6">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-primary">DNA → Network</span>
                  <h4 className="mt-1 font-display text-2xl leading-tight">The morph is the mission.</h4>
                </div>
              </div>
            </Tilt>
          </div>
        </Reveal>
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

      {/* FULL-BLEED CINEMATIC PARALLAX BAND */}
      <section className="relative py-32 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 mb-12 flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">[ 04 ] Signal archive</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1] tracking-tight">
              Six frames from the <span className="italic text-gradient-animated">frontier</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            An evolving visual index of the seams we chase — biology becoming code, code becoming biology.
          </p>
        </div>
        <FloatingGallery items={GALLERY} />
      </section>

      {/* PINNED CINEMATIC EDITORIAL — brain × DNA */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[90vh] flex items-center">
          <img
            src={brainDna}
            alt="Translucent brain filled with DNA and code"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-60 animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
          <div className="absolute inset-0 grid-lines opacity-20" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-24 w-full">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary">[ 05 ] Thesis</p>
              <h2 className="mt-6 font-display text-5xl md:text-8xl leading-[0.95] tracking-tighter max-w-4xl">
                The next model won't be trained.<br />
                It will be <span className="italic text-gradient-animated">grown</span>.
              </h2>
              <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
                We treat every project like a cell line — small, curious, mutable. Some die. Some
                divide. The ones that survive get papers, prototypes, and public write-ups.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-2xl">
                {[
                  { k: "λ", l: "wavelength / research" },
                  { k: "Σ", l: "sum / collaboration" },
                  { k: "∇", l: "gradient / iteration" },
                ].map((s) => (
                  <div key={s.k} className="border-l border-primary/40 pl-4">
                    <div className="font-display text-5xl text-gradient-animated">{s.k}</div>
                    <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
