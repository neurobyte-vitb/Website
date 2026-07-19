import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The NeuroByte Society" },
      {
        name: "description",
        content:
          "Our mission, vision, and the interdisciplinary domains the NeuroByte Society explores at VIT Bhopal.",
      },
      { property: "og:title", content: "About — The NeuroByte Society" },
      {
        property: "og:description",
        content: "A student club building at the intersection of AI, biology, and healthcare.",
      },
    ],
  }),
  component: About,
});

const DOMAINS = [
  "Artificial Intelligence",
  "Bioinformatics",
  "Biotechnology",
  "Healthcare & Medical Devices",
  "Robotics",
  "Embedded Systems",
];

function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-xs uppercase tracking-widest text-primary">About</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-gradient-silver">
        A club at the intersection of biology and code
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
        The NeuroByte Society is a student-run research and innovation club at VIT Bhopal. We bring
        together students across engineering, biosciences, and computer science to explore how AI is
        reshaping life sciences — through hands-on projects, research, workshops, and real problem
        solving.
      </p>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="surface-card rounded-2xl p-8">
          <h2 className="font-display text-2xl font-semibold">Our vision</h2>
          <p className="mt-3 text-muted-foreground">
            To build a community of students who use AI, bioinformatics, and biotechnology to solve
            meaningful problems in health, agriculture, and the life sciences.
          </p>
        </div>
        <div className="surface-card rounded-2xl p-8">
          <h2 className="font-display text-2xl font-semibold">Our mission</h2>
          <p className="mt-3 text-muted-foreground">
            To offer members research, workshops, hackathons, publications, industry interactions,
            and interdisciplinary learning — plus leadership opportunities and mentorship along the
            way.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-2xl font-semibold">Domains we work across</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {DOMAINS.map((d) => (
            <span
              key={d}
              className="rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-foreground"
            >
              {d}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-16 surface-card rounded-2xl p-8">
        <h2 className="font-display text-2xl font-semibold">How members contribute</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-muted-foreground">
          <li>· Research groups on ongoing projects</li>
          <li>· Prototype development and lab work</li>
          <li>· Collaborative learning sessions</li>
          <li>· Hackathons and interdisciplinary sprints</li>
          <li>· Paper writing and publication support</li>
          <li>· Workshops and speaker sessions</li>
        </ul>
      </div>
    </div>
  );
}
