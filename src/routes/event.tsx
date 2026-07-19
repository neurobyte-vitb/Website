import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/event")({
  head: () => ({
    meta: [
      { title: "BioGenesis Launch Event — NeuroByte Society" },
      {
        name: "description",
        content:
          "Our orientation event: 9 activities, an ideation challenge with a Gemini Pro prize, and a talk by Dr. Suresh Kumar R. S.",
      },
      { property: "og:title", content: "BioGenesis — NeuroByte Society launch event" },
      {
        property: "og:description",
        content:
          "Mid-August, 2 hours: club intro, BioEvolution ideation challenge, expert talk, mentorship, jamming, and more.",
      },
    ],
  }),
  component: Event,
});

const AGENDA = [
  {
    t: "Club Introduction",
    d: "Vision, mission, annual roadmap, and the opportunities available to members — projects, workshops, research, hackathons, publications, and leadership.",
  },
  {
    t: "BioEvolution Ideation Challenge",
    d: "Given a hypothetical planet, teams design an organism that survives its conditions — and explain the science behind its adaptations. Winner receives an 18-month Google Gemini Pro subscription.",
  },
  {
    t: "LinkedIn Networking Session",
    d: "Create and optimize your LinkedIn profile — personal branding and building meaningful industry connections from day one.",
  },
  {
    t: "Student Benefits Session",
    d: "How to get the most from your college ID: Spotify, Perplexity Pro, GitHub Student Developer Pack, certification platforms, and academic resources.",
  },
  {
    t: "Menstrual Health Awareness Session",
    d: "A short interactive session on menstrual hygiene — busting myths and encouraging informed, respectful conversation.",
  },
  {
    t: "Mentorship Corner",
    d: "Seniors on hand to guide you on academics, clubs, internships, research, higher studies, and career planning.",
  },
  {
    t: "Photo Booth",
    d: "Club-branded booth to capture memories and share the event with fellow attendees.",
  },
  {
    t: "Expert Speaker: Dr. Suresh Kumar R. S.",
    d: "Ph.D., DABT, ERT — board-certified toxicologist, researcher, VIT alumnus, and part of Palamur Biosciences. On AI in Bioinformatics, Drug Discovery, Toxicology, and life-science careers.",
  },
  {
    t: "Jamming Session (Music & Dance)",
    d: "Open mic — singing, instruments, dance, group jams. A relaxed close to the evening.",
  },
];

const BENEFITS = [
  "Winner's prize: 18-month Google Gemini Pro subscription",
  "Certificates of participation for all registered attendees",
  "Complimentary food and beverages",
  "Networking with seniors, faculty, and peers",
  "Access to future workshops, hackathons, and research opportunities",
];

function Event() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        First event · Tentative: mid-August · 2 hours
      </div>
      <h1 className="mt-4 font-display text-4xl sm:text-6xl font-bold text-gradient-silver max-w-4xl">
        BioGenesis: our orientation & engagement launch
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
        A non-technical program to introduce the NeuroByte Society to VIT Bhopal and to gather
        students curious about bioinformatics, biotechnology, AI, and computational biology.
      </p>

      {/* Prize card */}
      <div className="mt-12 surface-card relative overflow-hidden rounded-3xl p-8 sm:p-10">
        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-glow/25 blur-3xl" />
        <p className="text-xs uppercase tracking-widest text-primary">Featured prize</p>
        <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold">
          Google Gemini Pro — 18-month subscription
        </h2>
        <p className="mt-2 text-muted-foreground max-w-xl">
          Awarded to the winner of the BioEvolution Ideation Challenge.
        </p>
      </div>

      {/* Agenda */}
      <section className="mt-16">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold">The 9 activities</h2>
        <ol className="mt-8 space-y-4">
          {AGENDA.map((a, i) => (
            <li key={a.t} className="surface-card rounded-2xl p-6 flex gap-5">
              <div className="shrink-0 h-10 w-10 rounded-full bg-primary/15 text-primary flex items-center justify-center font-display font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{a.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Speaker */}
      <section className="mt-16 surface-card rounded-3xl p-8 sm:p-10">
        <p className="text-xs uppercase tracking-widest text-primary">Expert speaker</p>
        <div className="mt-4 grid gap-6 sm:grid-cols-[auto,1fr] items-start">
          <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-silver/60 to-primary/40 flex items-center justify-center font-display text-2xl font-bold text-background">
            SK
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">Dr. Suresh Kumar R. S.</h2>
            <p className="text-sm text-muted-foreground">Ph.D., DABT, ERT · Palamur Biosciences · VIT alumnus</p>
            <p className="mt-3 text-muted-foreground">
              Board-certified toxicologist and researcher. His talk covers the role of AI in
              Bioinformatics, Computational Biology, Drug Discovery, Toxicology, and emerging
              careers in the life sciences.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mt-16">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold">Participant benefits</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {BENEFITS.map((b) => (
            <li key={b} className="surface-card rounded-xl p-4 text-sm flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link
          to="/contact"
          className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Register interest
        </Link>
        <Link
          to="/sponsors"
          className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary"
        >
          Sponsor the event
        </Link>
      </div>
    </div>
  );
}
