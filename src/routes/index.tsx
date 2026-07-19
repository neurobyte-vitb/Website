import { createFileRoute, Link } from "@tanstack/react-router";
import { NeuralBg } from "../components/neural-bg";

export const Route = createFileRoute("/")({
  component: Index,
});

const PILLARS = [
  { title: "Research", body: "Publications, literature review, and cross-domain investigation." },
  { title: "Workshops", body: "Hands-on sessions on tools, wet-lab bridges, and AI pipelines." },
  { title: "Hackathons", body: "Interdisciplinary sprints turning ideas into working prototypes." },
  { title: "Community", body: "Mentorship, industry talks, and a network across biology & CS." },
];

const FEATURED = [
  { n: "02", t: "AI-Powered Drug Discovery", d: "Molecular screening and prediction pipelines built on modern ML." },
  { n: "05", t: "Protein 3D with AR/VR", d: "Immersive visualization of protein structures for study and research." },
  { n: "11", t: "Cancer Diagnosis from Imaging", d: "Deep learning on medical images for early detection." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-70">
          <NeuralBg className="h-full w-full" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 lg:pt-32 lg:pb-40">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            A student research club · VIT Bhopal
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] text-gradient-silver">
            The NeuroByte Society
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Where artificial intelligence meets bioinformatics, biotechnology, and healthcare —
            a community of students building the interdisciplinary future of life sciences.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/event"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              See our first event →
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              Explore projects
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <div key={p.title} className="surface-card rounded-2xl p-6">
              <div className="h-8 w-8 rounded-md bg-primary/15 text-primary flex items-center justify-center text-xs font-bold">
                {p.title[0]}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">This year</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-gradient-silver">
              15 projects in motion
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              From robotic arms and portable ECG machines to CRISPR demos and protein AR/VR — a slate that spans hardware, wet-lab thinking, and AI.
            </p>
          </div>
          <Link to="/projects" className="text-sm text-primary hover:underline">
            See all 15 →
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {FEATURED.map((f) => (
            <div key={f.n} className="surface-card rounded-2xl p-6 hover:glow-ring transition-shadow">
              <span className="font-display text-xs text-muted-foreground">Project {f.n}</span>
              <h3 className="mt-2 font-display text-xl font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Event teaser */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="surface-card relative overflow-hidden rounded-3xl p-10 lg:p-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-glow/20 blur-3xl" />
          <p className="text-xs uppercase tracking-widest text-primary">Upcoming · Mid-August</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold max-w-2xl">
            BioGenesis: our orientation & ideation launch
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A 2-hour non-technical program — club intro, the BioEvolution Ideation Challenge (win an
            18-month Gemini Pro subscription), an expert talk by Dr. Suresh Kumar R. S., LinkedIn
            networking, mentorship, jamming, and more.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/event"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Full event breakdown
            </Link>
            <Link
              to="/sponsors"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary"
            >
              Sponsor this event
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
