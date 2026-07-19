import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsor us — The NeuroByte Society" },
      { name: "description", content: "Three sponsorship tiers to partner with The NeuroByte Society at VIT Bhopal — from ₹1,000 to ₹5,000." },
      { property: "og:title", content: "Sponsor The NeuroByte Society" },
      { property: "og:description", content: "Supporter, Partner, and Title Sponsor packages for reaching VIT Bhopal students." },
    ],
  }),
  component: Sponsors,
});

const TIERS = [
  {
    tag: "T1",
    name: "Supporter",
    price: "₹1,000",
    tagline: "Introduce your brand to our audience.",
    perks: [
      "Small logo placement on shirt sleeve or upper back",
      "2 dedicated shoutouts on our Stories, tagging your account",
      "Brand name listed in event & post credits",
    ],
    highlight: false,
  },
  {
    tag: "T2",
    name: "Partner",
    price: "₹2,500",
    tagline: "Our most popular tier — strong ongoing visibility.",
    perks: [
      "Medium prominent logo on the back of our shirts",
      "Dedicated feed posts + constant Story shoutouts",
      "Verbal shoutouts during the event",
      "Custom discount code (e.g. TEAM20) driving traffic",
    ],
    highlight: true,
  },
  {
    tag: "T3",
    name: "Title Sponsor",
    price: "₹5,000",
    tagline: "The all-in package — we treat your brand like our own.",
    perks: [
      'Title status: "Presented by [Your Brand]"',
      "Massive premium logo — front & center on shirts",
      "Link in bio, constant tags, dedicated promo videos",
      "Custom activations: giveaways, product placements, more",
    ],
    highlight: false,
  },
];

function Sponsors() {
  return (
    <div>
      {/* HERO */}
      <section className="relative border-b border-border/40 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="absolute top-10 right-10 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary">[ 05 ] Sponsorship</p>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-tighter max-w-5xl">
            Partner with the next generation of <span className="italic text-gradient-bio">AI × Bio</span> talent.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Sponsor The NeuroByte Society and put your brand in front of the students building the
            future of bioinformatics, healthcare, and applied AI at VIT Bhopal.
          </p>
        </div>
      </section>

      {/* TIERS */}
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-4 lg:grid-cols-3 items-stretch">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl p-10 flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                t.highlight ? "surface-dark border border-primary/60 glow-cyan" : "surface-glass"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-primary-foreground">
                  Most popular
                </span>
              )}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">{t.tag}</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                  Sponsor tier
                </span>
              </div>
              <h2 className="relative mt-6 font-display text-4xl">{t.name}</h2>
              <p className="relative mt-2 text-sm text-muted-foreground">{t.tagline}</p>
              <div className="relative mt-8 font-display text-6xl italic text-gradient-bio">{t.price}</div>
              <ul className="relative mt-8 space-y-3 text-sm flex-1">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="font-mono text-primary shrink-0">+</span>
                    <span className="text-foreground/90">{p}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`relative mt-10 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition ${
                  t.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border hover:bg-secondary"
                }`}
              >
                Talk to us →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOM */}
      <section className="mx-auto max-w-[1400px] px-6 pb-32">
        <div className="surface-dark rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 grid-lines opacity-30" />
          <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
          <div className="relative grid gap-8 md:grid-cols-2 items-center">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary">// Custom</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                Have something <span className="italic text-gradient-bio">bigger</span> in mind?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                Custom activations, workshops with your product, hackathon sponsorships, long-term
                partnerships. Let's design it together.
              </p>
            </div>
            <div className="md:justify-self-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground hover:opacity-90"
              >
                Start the conversation →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
