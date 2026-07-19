import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Tilt } from "../components/fx";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — The NeuroByte Society" },
      { name: "description", content: "Meet the core board and vertical leads driving The NeuroByte Society at VIT Bhopal." },
      { property: "og:title", content: "Team — The NeuroByte Society" },
      { property: "og:description", content: "Core board and vertical leads of the NeuroByte Society." },
    ],
  }),
  component: Team,
});

type Member = {
  name: string;
  role: string;
  regNo: string;
  program: string;
  batch: string;
  email: string;
  linkedin?: string;
  tone: "primary" | "accent";
};

const BOARD: Member[] = [
  { name: "Adil Sukumar", role: "President", regNo: "25MIB10056", program: "Int. M.Tech AI & Bioinformatics", batch: "2025", email: "adil.25mib10056@vitbhopal.ac.in", linkedin: "https://linkedin.com/in/adilsukumar", tone: "primary" },
  { name: "Anakha Shaji", role: "Vice President", regNo: "25MIB10003", program: "Int. M.Tech AI & Bioinformatics", batch: "2025", email: "anakha.25mib10003@vitbhopal.ac.in", linkedin: "https://www.linkedin.com/in/anakha-shaji-8361b3387/", tone: "accent" },
  { name: "Snehal Dixit", role: "Joint Secretary", regNo: "25MIP10072", program: "Int. M.Tech Computational & Data Science", batch: "2025", email: "snehal.25mip10072@vitbhopal.ac.in", linkedin: "https://linkedin.com/in/snehaldixitofficial", tone: "primary" },
  { name: "Riddhi Garg", role: "General Secretary", regNo: "25BHI10004", program: "B.Tech CSE (Health Informatics)", batch: "2025", email: "riddhi.25BHI10004@vitbhopal.ac.in", linkedin: "https://www.linkedin.com/in/riddhigarg--/", tone: "accent" },
  { name: "Vishwa Namdeo Badgujar", role: "General Secretary", regNo: "25BCY10098", program: "B.Tech CSE (Cyber Security & Digital Forensics)", batch: "2025", email: "vishwa.25bcy10098@vitbhopal.ac.in", linkedin: "https://www.linkedin.com/in/vishwa-badgujar-bb747037b/", tone: "primary" },
  { name: "Trisha Kapadia", role: "Treasurer", regNo: "24BAI10659", program: "B.Tech CSE (AIML)", batch: "2024", email: "trisha.24bai10659@vitbhopal.ac.in", tone: "accent" },
];

type Vertical = {
  name: string;
  tag: string;
  lead: Member;
  coLead: Member;
};

const VERTICALS: Vertical[] = [
  {
    name: "AI / ML",
    tag: "models · pipelines · inference",
    lead: { name: "Naivedya Singh", role: "Lead", regNo: "25BAI10770", program: "B.Tech CSE (AIML)", batch: "2025", email: "naivedya.25bai10770@vitbhopal.ac.in", linkedin: "https://www.linkedin.com/in/naivedya-singh-5005a4366", tone: "primary" },
    coLead: { name: "Devashish Rege", role: "Co-Lead", regNo: "25BCE10799", program: "B.Tech CSE (Core)", batch: "2025", email: "devashish.25bce10799@vitbhopal.ac.in", linkedin: "https://www.linkedin.com/in/devashish-rege", tone: "accent" },
  },
  {
    name: "Research & Projects",
    tag: "papers · prototypes · experiments",
    lead: { name: "Gauri Nandana M", role: "Lead", regNo: "25BAI10053", program: "B.Tech CSE (AIML)", batch: "2025", email: "gauri.25bai10053@vitbhopal.ac.in", linkedin: "https://www.linkedin.com/in/gauri-nandana-m-463b6b378/", tone: "accent" },
    coLead: { name: "Vaswati Mohanty", role: "Co-Lead", regNo: "25BOE10084", program: "B.Tech Bioengineering", batch: "2025", email: "vaswati.25boe10084@vitbhopal.ac.in", linkedin: "https://www.linkedin.com/in/vaswati-mohanty-2b606637b/", tone: "primary" },
  },
  {
    name: "Event Coordination",
    tag: "logistics · programming · execution",
    lead: { name: "Heeral Jinwani", role: "Lead", regNo: "24BHI10009", program: "B.Tech CSE (Health Informatics)", batch: "2024", email: "heeral.24bhi10009@vitbhopal.ac.in", linkedin: "https://www.linkedin.com/in/heeral-jiwnani-637574310/", tone: "primary" },
    coLead: { name: "L Akash", role: "Co-Lead", regNo: "25BHI10110", program: "B.Tech CSE (Health Informatics)", batch: "2025", email: "akash.25bhi10110@vitbhopal.ac.in", linkedin: "https://www.linkedin.com/in/lakshmana-akash-961a5937a/", tone: "accent" },
  },
  {
    name: "Student Coordination",
    tag: "outreach · community · onboarding",
    lead: { name: "Gazal", role: "Lead", regNo: "24BCE11002", program: "B.Tech CSE (Core)", batch: "2024", email: "gazal.24bce11002@vitbhopal.ac.in", linkedin: "https://www.linkedin.com/in/gazal-gazal1509", tone: "accent" },
    coLead: { name: "Ashwin S Pillai", role: "Co-Lead", regNo: "25MIM10085", program: "Int. M.Tech AI", batch: "2025", email: "ashwin.25mim@vitbhopal.ac.in", linkedin: "https://www.linkedin.com/in/ashwin-pillai-b496492b9/", tone: "primary" },
  },
  {
    name: "Media & Publications",
    tag: "design · content · storytelling",
    lead: { name: "Mayank Trigunayat", role: "Lead", regNo: "25BCY10182", program: "B.Tech CSE (Cyber Security & Digital Forensics)", batch: "2025", email: "mayank.25bcy10182@vitbhopal.ac.in", linkedin: "https://www.linkedin.com/in/mayank-trigunayat-abbba9375/", tone: "primary" },
    coLead: { name: "Niya Saji", role: "Co-Lead", regNo: "25MIB10017", program: "Int. M.Tech AI & Bioinformatics", batch: "2025", email: "niya.25mib10017@vitbhopal.ac.in", linkedin: "https://www.linkedin.com/in/niya-saji-4a077339b/", tone: "accent" },
  },
];

function initials(name: string) {
  return name.split(" ").filter(Boolean).map((p) => p[0]).slice(0, 2).join("").toUpperCase();
}

function Avatar({ name, tone, size = "md" }: { name: string; tone: "primary" | "accent"; size?: "sm" | "md" | "lg" }) {
  const dims = size === "lg" ? "h-24 w-24 text-4xl" : size === "sm" ? "h-12 w-12 text-sm" : "h-14 w-14 text-lg";
  const grad = tone === "primary" ? "from-primary to-accent" : "from-accent to-primary";
  return (
    <div className={`rounded-2xl font-display flex items-center justify-center text-background bg-gradient-to-br ${grad} ${dims}`}>
      {initials(name)}
    </div>
  );
}

function LinkedInLink({ href, variant = "badge" }: { href: string; variant?: "badge" | "button" }) {
  if (variant === "button") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="inline-flex items-center gap-2 rounded-full border border-[#0A66C2]/60 bg-[#0A66C2]/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-[#4aa8ff] hover:bg-[#0A66C2]/20 hover:border-[#0A66C2] transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
        </svg>
        LinkedIn
      </a>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn profile"
      className="inline-flex items-center gap-1.5 rounded-full border border-[#0A66C2]/40 bg-[#0A66C2]/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-[#4aa8ff] hover:bg-[#0A66C2]/20 hover:border-[#0A66C2] transition-colors"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
      </svg>
      LinkedIn
    </a>
  );
}

function MemberMeta({ m, showLinkedIn = true }: { m: Member; showLinkedIn?: boolean }) {
  return (
    <div className="mt-3 space-y-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
      <div>{m.regNo} · Batch {m.batch}</div>
      <div className="normal-case tracking-wide text-foreground/70">{m.program}</div>
      <a href={`mailto:${m.email}`} className="block normal-case tracking-normal text-primary hover:underline break-all">
        {m.email}
      </a>
      {showLinkedIn && m.linkedin && (
        <div className="pt-2">
          <LinkedInLink href={m.linkedin} variant="button" />
        </div>
      )}
    </div>
  );
}

function Team() {
  return (
    <div>
      {/* HERO */}
      <section className="relative border-b border-border/40 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="absolute top-10 left-1/3 h-80 w-80 rounded-full bg-primary/15 blur-[120px]" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
            [ 04 ] Team · {BOARD.length + VERTICALS.length * 2} members
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,9vw,7.5rem)] leading-[0.9] tracking-tighter max-w-5xl">
            The <span className="italic text-gradient-bio">founding</span> core.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A board of six and five specialised verticals — from AI/ML and research to events,
            outreach and media. This is the team building NeuroByte Society from day one.
          </p>
        </div>
      </section>

      {/* CORE BOARD */}
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="flex items-end justify-between gap-6 mb-10 border-b border-border/40 pb-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">// 01 — Core Board</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tighter">Leadership</h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
            {BOARD.length.toString().padStart(2, "0")} officers
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-12 md:auto-rows-[280px]">
          {BOARD.map((m, i) => {
            const layouts = [
              "md:col-span-6 md:row-span-2",
              "md:col-span-6",
              "md:col-span-3",
              "md:col-span-3",
              "md:col-span-3",
              "md:col-span-3",
            ];
            const big = i === 0;
            return (
              <Reveal key={m.regNo} delay={i * 80} className={layouts[i]}>
                <Tilt max={big ? 5 : 8} className="h-full">
                  <article
                    className={`group relative rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-500 h-full ${
                      big ? "surface-dark border border-primary/40" : "surface-glass"
                    }`}
                  >
                    <div className={`absolute inset-0 grid-lines opacity-${big ? "40" : "20"}`} />
                    <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition-all duration-700 ${
                      m.tone === "primary" ? "bg-primary/20 group-hover:bg-primary/50" : "bg-accent/20 group-hover:bg-accent/50"
                    }`} />
                    <div className="relative h-full flex flex-col justify-between gap-4">
                      <div className="flex items-start justify-between">
                        <Avatar name={m.name} tone={m.tone} size={big ? "lg" : "md"} />
                        <span className="font-mono text-[9px] uppercase tracking-widest text-primary">
                          /{(i + 1).toString().padStart(2, "0")}
                        </span>
                      </div>
                      <div>
                        <h3 className={`font-display leading-tight ${big ? "text-4xl md:text-5xl" : "text-xl"}`}>
                          {m.name}
                        </h3>
                        <p className={`mt-1 italic text-gradient-bio ${big ? "font-display text-2xl" : "text-sm"}`}>
                          {m.role}
                        </p>
                        <MemberMeta m={m} />
                      </div>
                    </div>
                  </article>
                </Tilt>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* VERTICALS */}
      <section className="mx-auto max-w-[1400px] px-6 pb-24">
        <div className="flex items-end justify-between gap-6 mb-10 border-b border-border/40 pb-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">// 02 — Verticals</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tighter">
              Leads &amp; <span className="italic text-gradient-bio">co-leads</span>
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
            {VERTICALS.length.toString().padStart(2, "0")} verticals
          </span>
        </div>

        <div className="space-y-6">
          {VERTICALS.map((v, i) => (
            <Reveal key={v.name} delay={i * 80}>
              <article className="group relative rounded-3xl surface-glass overflow-hidden hover:border-primary/60 transition-colors duration-500">
                <div className="absolute inset-0 grid-lines opacity-15" />
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary via-accent to-lime scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-700" />
                <div className="relative grid gap-6 md:grid-cols-12 p-6 md:p-8">
                  <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start gap-4 md:border-r md:border-border/40 md:pr-6">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                        V/{(i + 1).toString().padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 font-display text-2xl md:text-3xl leading-tight transition-transform duration-500 group-hover:translate-x-1">{v.name}</h3>
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {v.tag}
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-5 flex gap-4 items-start md:border-r md:border-border/40 md:pr-6">
                    <Avatar name={v.lead.name} tone={v.lead.tone} />
                    <div className="min-w-0">
                      <p className="font-mono text-[9px] uppercase tracking-widest text-primary">Lead</p>
                      <h4 className="mt-1 font-display text-xl leading-tight">{v.lead.name}</h4>
                      <MemberMeta m={v.lead} />
                    </div>
                  </div>

                  <div className="md:col-span-4 flex gap-4 items-start">
                    <Avatar name={v.coLead.name} tone={v.coLead.tone} />
                    <div className="min-w-0">
                      <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Co-Lead</p>
                      <h4 className="mt-1 font-display text-xl leading-tight">{v.coLead.name}</h4>
                      <MemberMeta m={v.coLead} />
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
