import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/event")({
  head: () => ({
    meta: [
      { title: "BioGenesis — NeuroByte Society launch event" },
      { name: "description", content: "Our orientation event: 9 activities, a BioEvolution ideation challenge with a Gemini Pro prize, and a talk by Dr. Suresh Kumar R. S." },
      { property: "og:title", content: "BioGenesis · NeuroByte Society" },
      { property: "og:description", content: "Mid-August. 2 hours. 9 activities. Club intro, ideation challenge, expert talk, jamming." },
    ],
  }),
  component: Event,
});

const AGENDA = [
  { t: "Club Introduction", d: "Vision, mission, annual roadmap, and the opportunities available to members — projects, workshops, research, hackathons, publications, and leadership.", tag: "Intro" },
  { t: "BioEvolution Ideation Challenge", d: "Given a hypothetical planet, teams design an organism that survives its conditions — and explain the science behind its adaptations. Winner receives 18-month Google Gemini Pro.", tag: "Challenge" },
  { t: "LinkedIn Networking Session", d: "Create and optimize your LinkedIn profile — personal branding and building meaningful industry connections from day one.", tag: "Career" },
  { t: "Student Benefits Session", d: "How to get the most from your college ID: Spotify, Perplexity Pro, GitHub Student Pack, certification platforms, academic resources.", tag: "Perks" },
  { t: "Menstrual Health Awareness", d: "A short interactive session on menstrual hygiene — busting myths and encouraging informed, respectful conversation.", tag: "Health" },
  { t: "Mentorship Corner", d: "Seniors on hand to guide you on academics, clubs, internships, research, higher studies, and career planning.", tag: "Mentor" },
  { t: "Photo Booth", d: "Club-branded booth to capture memories and share the event with fellow attendees.", tag: "Fun" },
  { t: "Expert Speaker: Dr. Suresh Kumar R. S.", d: "Ph.D., DABT, ERT — board-certified toxicologist and VIT alumnus. On AI in Bioinformatics, Drug Discovery, Toxicology, and life-science careers.", tag: "Talk" },
  { t: "Jamming Session", d: "Open mic — singing, instruments, dance, group jams. A relaxed close to the evening.", tag: "Music" },
];

const BENEFITS = [
  "18-month Google Gemini Pro subscription (winner's prize)",
  "Certificates of participation for all registered attendees",
  "Complimentary food and beverages",
  "Networking with seniors, faculty, and peers",
  "Access to future workshops, hackathons, and research",
];

function Event() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-accent/25 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
            [ 03 ] Event · Mid-August · 2 hours
          </div>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,10vw,8rem)] leading-[0.9] tracking-tighter max-w-5xl">
            <span className="italic text-gradient-bio">BioGenesis.</span><br />
            <span className="text-foreground">Our launch, in one evening.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A non-technical program to introduce the NeuroByte Society to VIT Bhopal and gather
            students curious about bioinformatics, biotechnology, AI, and computational biology.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Register interest →
            </Link>
            <Link
              to="/sponsors"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm hover:bg-secondary"
            >
              Sponsor the event
            </Link>
          </div>
        </div>
      </section>

      {/* PRIZE + SPEAKER — BROKEN GRID */}
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-4 md:grid-cols-12 md:auto-rows-[180px]">
          {/* Prize (large) */}
          <div className="md:col-span-8 md:row-span-2 surface-dark rounded-3xl p-10 relative overflow-hidden group">
            <div className="absolute inset-0 grid-lines opacity-40" />
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/30 blur-[100px]" />
            <div className="relative h-full flex flex-col justify-between">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary">// Featured prize</p>
              <div>
                <h2 className="font-display text-5xl md:text-7xl leading-none">
                  <span className="italic text-gradient-bio">Gemini Pro</span><br />
                  <span className="text-foreground">18-month subscription.</span>
                </h2>
                <p className="mt-6 text-muted-foreground max-w-lg">
                  Awarded to the winner of the BioEvolution Ideation Challenge — a full
                  academic year of Google's frontier AI, on us.
                </p>
              </div>
            </div>
          </div>
          {/* Speaker */}
          <div className="md:col-span-4 surface-glass rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-primary/30 blur-3xl" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">// Speaker</p>
            <div className="mt-4 h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-background font-display text-2xl flex items-center justify-center">
              SK
            </div>
            <h3 className="mt-4 font-display text-2xl leading-tight">Dr. Suresh Kumar R. S.</h3>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Ph.D · DABT · ERT
            </p>
          </div>
          {/* Attendees / meta */}
          <div className="md:col-span-4 surface-glass rounded-3xl p-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">// Format</p>
            <p className="mt-2 font-display text-4xl">2 hours</p>
            <p className="mt-1 text-sm text-muted-foreground">Non-technical · Open to all VIT Bhopal students</p>
          </div>
        </div>
      </section>

      {/* AGENDA — TIMELINE */}
      <section className="mx-auto max-w-[1400px] px-6 pb-24">
        <div className="mb-12">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary">[ 04 ] Agenda</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">Nine activities. One evening.</h2>
        </div>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
          <ol className="space-y-4">
            {AGENDA.map((a, i) => (
              <li key={a.t} className={`relative grid md:grid-cols-2 gap-4 ${i % 2 === 0 ? "" : "md:direction-rtl"}`}>
                <div className={`${i % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}>
                  <div className="surface-glass rounded-2xl p-6 md:p-8 group hover:border-primary/60 transition-all duration-500 relative">
                    <div className="absolute -left-2 md:left-auto md:-right-2 top-8 h-4 w-4 rounded-full bg-primary ring-4 ring-background md:hidden" />
                    <div className="flex items-baseline justify-between gap-4 mb-3">
                      <span className="font-display text-5xl italic text-primary/60 group-hover:text-primary transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-1 rounded-full border border-border">
                        {a.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl">{a.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SPEAKER DETAIL */}
      <section className="mx-auto max-w-[1400px] px-6 pb-24">
        <div className="surface-dark rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 grid-lines opacity-30" />
          <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
          <div className="relative grid gap-10 md:grid-cols-[auto,1fr] items-start">
            <div className="h-32 w-32 rounded-3xl bg-gradient-to-br from-primary to-accent text-background font-display text-5xl flex items-center justify-center shrink-0">
              SK
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary">// Keynote</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Dr. Suresh Kumar R. S.</h2>
              <p className="mt-2 font-mono text-sm text-muted-foreground">
                Ph.D., DABT, ERT · Palamur Biosciences · VIT alumnus
              </p>
              <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">
                Board-certified toxicologist and researcher. His talk covers the role of AI in
                Bioinformatics, Computational Biology, Drug Discovery, Toxicology, and emerging
                careers in the life sciences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-[1400px] px-6 pb-32">
        <div className="mb-10">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary">[ 05 ] Benefits</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">What every attendee walks away with.</h2>
        </div>
        <ul className="grid gap-3 md:grid-cols-2">
          {BENEFITS.map((b, i) => (
            <li key={b} className="surface-glass rounded-2xl p-6 flex items-start gap-4 hover:border-primary/60 transition-colors">
              <span className="font-mono text-[10px] text-primary shrink-0 mt-1">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-foreground/90">{b}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
