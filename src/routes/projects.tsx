import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Future Projects — The NeuroByte Society" },
      { name: "description", content: "Fifteen upcoming student projects across AI, bioinformatics, biomedical devices, agri-tech, and 3D printing — the slate we're about to build." },
      { property: "og:title", content: "Future Projects — The NeuroByte Society" },
      { property: "og:description", content: "The 15-project slate we're about to build this academic year." },
    ],
  }),
  component: Projects,
});

type P = { n: string; t: string; d: string; tag: string };

const ALL: P[] = [
  { n: "01", t: "Robotic Arm", d: "A robotic arm engineered for automation and precision tasks.", tag: "Hardware" },
  { n: "02", t: "AI-Powered Drug Discovery Tool", d: "AI-assisted molecular screening and prediction for candidate compounds.", tag: "NeuroByte" },
  { n: "03", t: "Nanomedicine", d: "Nanotechnology concepts for medicine and targeted drug delivery.", tag: "Biotech" },
  { n: "04", t: "GMO / GMC", d: "Applications of genetic engineering in plants and animals.", tag: "Biotech" },
  { n: "05", t: "Protein 3D Visualization (AR/VR)", d: "Interactive AR/VR platform to explore protein structures.", tag: "Visualization" },
  { n: "06", t: "Genetic Ancestry Simulator", d: "NCBI-based simulator for genetic ancestry and evolutionary relationships.", tag: "Genomics" },
  { n: "07", t: "AI-Driven CRISPR Demo", d: "AI-assisted CRISPR analysis and guide-RNA selection tool.", tag: "NeuroByte" },
  { n: "08", t: "Personalized Take-Home Healthcare Device", d: "Smart, personal monitoring device engineered for home use.", tag: "Healthcare" },
  { n: "09", t: "Smart Plant Pot", d: "Monitors soil moisture, temperature, humidity, and plant health.", tag: "IoT" },
  { n: "10", t: "Agricultural Sensors", d: "IoT sensors for smart farming and precision agriculture.", tag: "IoT" },
  { n: "11", t: "Cancer Diagnosis from Images", d: "Deep learning applied to medical imaging for cancer detection.", tag: "AI × Health" },
  { n: "12", t: "ECG & EEG Signal Processing", d: "Biomedical signal analysis using AI and DSP techniques.", tag: "Signals" },
  { n: "13", t: "Portable ECG Machine", d: "Compact, low-cost ECG monitoring device.", tag: "Hardware" },
  { n: "14", t: "3D Printing for Biomedical Applications", d: "Implants, prosthetics, and healthcare prototypes via additive manufacturing.", tag: "Biotech" },
  { n: "15", t: "Biosensors", d: "Biosensor systems for healthcare, environment, and disease detection.", tag: "Hardware" },
];

function Projects() {
  return (
    <div>
      {/* HERO */}
      <section className="relative border-b border-border/40 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/15 blur-[120px]" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary">[ 02 ] Future Projects · 15 · Upcoming</p>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-tighter max-w-5xl">
            Fifteen projects we're <span className="italic text-gradient-bio">about to build</span>.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            This is our upcoming slate — nothing shipped yet. Members will work in small teams across
            research, prototyping, and hackathons. Bring your CS, wet-lab thinking, hardware, or design
            skills — every project below is open and waiting for a team.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Status · Planned / Recruiting
          </div>
        </div>
      </section>


      {/* GRID */}
      <section className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ALL.map((p, i) => (
            <article
              key={p.n}
              className="group relative surface-glass rounded-2xl p-8 min-h-[240px] flex flex-col justify-between hover:border-primary/60 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${i * 30}ms` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-3xl transition-all duration-700" />
              <div className="relative flex items-start justify-between">
                <span className="font-display text-6xl italic text-primary/40 group-hover:text-primary transition-colors leading-none">
                  {p.n}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-1 rounded-full border border-border">
                  {p.tag}
                </span>
              </div>
              <div className="relative mt-6">
                <h3 className="font-display text-2xl leading-tight">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
