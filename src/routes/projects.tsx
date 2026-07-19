import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — The NeuroByte Society" },
      {
        name: "description",
        content:
          "Fifteen student projects spanning AI, bioinformatics, biomedical devices, agri-tech, and 3D printing.",
      },
      { property: "og:title", content: "Projects — The NeuroByte Society" },
      {
        property: "og:description",
        content: "The full 15-project slate the club is working on this academic year.",
      },
    ],
  }),
  component: Projects,
});

type P = { n: string; t: string; d: string };

const AI_COMP: P[] = [
  { n: "02", t: "AI-Powered Drug Discovery Tool", d: "AI-assisted molecular screening and prediction for drug discovery." },
  { n: "05", t: "Protein 3D Visualization with AR/VR", d: "Interactive AR/VR platform to explore protein structures." },
  { n: "06", t: "Genetic Ancestry Simulator (NCBI-Based)", d: "Simulator for genetic ancestry and evolutionary relationships using public genomic data." },
  { n: "07", t: "AI-Driven CRISPR Demo", d: "Demonstration tool for AI-assisted CRISPR analysis and guide RNA selection." },
  { n: "11", t: "Cancer Diagnosis from Medical Images", d: "Deep learning applied to medical imaging for cancer detection." },
  { n: "12", t: "ECG & EEG Signal Processing", d: "Biomedical signal analysis using AI and DSP techniques." },
];

const HARDWARE: P[] = [
  { n: "01", t: "Robotic Arm", d: "A robotic arm designed for automation and precision tasks." },
  { n: "08", t: "Personalized Take-Home Healthcare Device", d: "Smart, personal monitoring device for home use." },
  { n: "09", t: "Smart Plant Pot with Measurement System", d: "Monitors soil moisture, temperature, humidity, and plant health." },
  { n: "10", t: "Agricultural Sensors", d: "IoT sensors for smart farming and precision agriculture." },
  { n: "13", t: "Portable ECG Machine", d: "Compact, low-cost ECG monitoring device." },
  { n: "15", t: "Biosensors", d: "Biosensor systems for healthcare, environmental monitoring, or disease detection." },
];

const BIOTECH: P[] = [
  { n: "03", t: "Nanomedicine", d: "Nanotechnology concepts for medicine and targeted drug delivery." },
  { n: "04", t: "GMO / GMC", d: "Applications of genetic engineering in plants and animals." },
  { n: "14", t: "3D Printing for Biomedical Applications", d: "Implants, prosthetics, and healthcare prototypes via 3D printing." },
];

function Group({ title, subtitle, items }: { title: string; subtitle: string; items: P[] }) {
  return (
    <section className="mt-16">
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <article key={p.n} className="surface-card rounded-2xl p-6 hover:glow-ring transition-shadow">
            <div className="flex items-center justify-between">
              <span className="font-display text-xs text-muted-foreground">Project {p.n}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-xs uppercase tracking-widest text-primary">Projects</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-gradient-silver">
        Fifteen projects, one interdisciplinary vision
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
        Our members work in small teams across research, prototyping, and hackathons. Each project
        is open for contributors from any domain — bring your CS, wet-lab thinking, hardware, or
        design skills.
      </p>

      <Group
        title="AI & Computational Biology"
        subtitle="Where ML meets molecular biology"
        items={AI_COMP}
      />
      <Group
        title="Hardware & Devices"
        subtitle="Sensors, robotics, and portable medical devices"
        items={HARDWARE}
      />
      <Group
        title="Biotech & Materials"
        subtitle="Genetic engineering, nanomedicine, and 3D printing"
        items={BIOTECH}
      />
    </div>
  );
}
