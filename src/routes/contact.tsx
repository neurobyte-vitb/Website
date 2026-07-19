import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The NeuroByte Society" },
      { name: "description", content: "Get in touch with The NeuroByte Society at VIT Bhopal — join, collaborate, or sponsor." },
      { property: "og:title", content: "Contact — The NeuroByte Society" },
      { property: "og:description", content: "Reach out to join, collaborate, or sponsor." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div>
      <section className="relative border-b border-border/40 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-accent/15 blur-[120px]" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary">[ 06 ] Contact</p>
          <h1 className="mt-6 font-display text-[clamp(3rem,12vw,10rem)] leading-[0.9] tracking-tighter">
            Let's <span className="italic text-gradient-bio">talk</span>.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Whether you want to join, collaborate on a project, invite us to something, or sponsor
            an event — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-4 md:grid-cols-12 md:auto-rows-[220px]">
          <a
            href="mailto:neurobyte@vitbhopal.ac.in"
            className="md:col-span-8 md:row-span-2 group surface-dark rounded-3xl p-10 md:p-12 relative overflow-hidden transition-all hover:-translate-y-1"
          >
            <div className="absolute inset-0 grid-lines opacity-40" />
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-[100px] group-hover:bg-primary/40 transition-all duration-700" />
            <div className="relative h-full flex flex-col justify-between">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary">// Email</p>
              <div>
                <p className="font-display text-4xl md:text-6xl break-all">
                  neurobyte<span className="text-primary">@</span>vitbhopal.ac.in
                </p>
                <p className="mt-4 font-mono text-xs text-muted-foreground">
                  ( placeholder — update once official )
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary">
                  Send us a message →
                </span>
              </div>
            </div>
          </a>

          <div className="md:col-span-4 surface-glass rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">// Location</p>
            <p className="mt-4 font-display text-3xl leading-tight">VIT Bhopal</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Kothrikalan, Sehore<br />Madhya Pradesh, India
            </p>
          </div>

          <div className="md:col-span-4 surface-glass rounded-3xl p-8 relative overflow-hidden">
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">// Coordinates</p>
            <p className="mt-4 font-mono text-2xl text-foreground/90">23.078° N</p>
            <p className="font-mono text-2xl text-foreground/90">76.855° E</p>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="mt-4 surface-glass rounded-3xl p-10 relative overflow-hidden">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary">// Follow the signal</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["LinkedIn", "Instagram", "GitHub", "X / Twitter"].map((s) => (
              <a
                key={s}
                href="#"
                className="group inline-flex items-center gap-3 rounded-full border border-border px-5 py-3 text-sm hover:bg-primary/10 hover:border-primary/60 transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground group-hover:bg-primary" />
                {s}
              </a>
            ))}
          </div>
          <p className="mt-4 font-mono text-[10px] text-muted-foreground">
            Social links will be added once accounts are live.
          </p>
        </div>
      </section>
    </div>
  );
}
