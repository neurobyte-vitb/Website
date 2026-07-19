import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — The NeuroByte Society" },
      {
        name: "description",
        content: "Meet the core team leading The NeuroByte Society at VIT Bhopal.",
      },
      { property: "og:title", content: "Team — The NeuroByte Society" },
      {
        property: "og:description",
        content: "The founding core of NeuroByte Society at VIT Bhopal.",
      },
    ],
  }),
  component: Team,
});

const CORE = [
  { name: "Adil Sukumar", role: "President", li: "https://linkedin.com/in/adilsukumar" },
  { name: "Anakha Shaji", role: "Vice-President", li: "https://www.linkedin.com/in/anakha-shaji-8361b3387/" },
  { name: "Snehal Dixit", role: "Joint Secretary", li: "https://linkedin.com/in/snehaldixitofficial" },
  { name: "Vishwa Namdeo Badgujar", role: "General Secretary", li: "https://www.linkedin.com/in/vishwa-badgujar-bb747037b/" },
  { name: "Riddhi Garg", role: "General Secretary", li: "https://www.linkedin.com/in/riddhigarg--/" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Team() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-xs uppercase tracking-widest text-primary">Team</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-gradient-silver">
        The founding core
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        The people building the NeuroByte Society from day one. Leads and co-leads across
        verticals will be added shortly.
      </p>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CORE.map((m) => (
          <article key={m.name} className="surface-card rounded-2xl p-6">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-silver to-primary/60 text-background font-display text-xl font-bold flex items-center justify-center">
              {initials(m.name)}
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{m.name}</h3>
            <p className="text-sm text-primary">{m.role}</p>
            <a
              href={m.li}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/90 hover:text-primary"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8h4.53v14H.24V8zm7.5 0h4.34v1.92h.06c.6-1.14 2.07-2.34 4.26-2.34 4.55 0 5.39 3 5.39 6.9V22h-4.53v-6.16c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.25V22H7.74V8z" />
              </svg>
              View LinkedIn →
            </a>
          </article>
        ))}
        <div className="surface-card rounded-2xl p-6 flex flex-col justify-center border-dashed">
          <p className="font-display text-lg font-semibold">More coming</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Leads and co-leads across verticals will be listed here soon.
          </p>
        </div>
      </div>
    </div>
  );
}
