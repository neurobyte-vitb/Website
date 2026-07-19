import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsor us — The NeuroByte Society" },
      {
        name: "description",
        content:
          "Three sponsorship tiers to partner with the NeuroByte Society at VIT Bhopal — from ₹1000 to ₹5000.",
      },
      { property: "og:title", content: "Sponsor The NeuroByte Society" },
      {
        property: "og:description",
        content: "Supporter, Partner, and Title Sponsor packages for brands who want to reach VIT Bhopal students.",
      },
    ],
  }),
  component: Sponsors,
});

const TIERS = [
  {
    tag: "Tier 1",
    medal: "🥉",
    name: "Supporter",
    price: "₹1,000",
    tagline: "Get your brand introduced to our audience.",
    perks: [
      "Small logo placement on shirt sleeve or upper back",
      "2 dedicated shoutouts on our social Stories, tagging your account",
      "Brand name listed in event & post credits",
    ],
    highlight: false,
  },
  {
    tag: "Tier 2",
    medal: "🥈",
    name: "Partner",
    price: "₹2,500",
    tagline: "Our most popular tier for strong, ongoing visibility.",
    perks: [
      "Medium, prominent logo on the back of our shirts",
      "Dedicated feed posts + constant Story shoutouts",
      "Verbal shoutouts during the event",
      "Custom discount code (e.g. TEAM20) driving traffic to your store",
    ],
    highlight: true,
  },
  {
    tag: "Tier 3",
    medal: "🥇",
    name: "Title Sponsor",
    price: "₹5,000",
    tagline: "The all-in package — we treat your brand like our own.",
    perks: [
      "Title status: “Presented by [Your Brand]”",
      "Massive premium logo — front & center on shirts",
      "Link in bio, constant tags, dedicated promo videos",
      "Custom activations: giveaways, product placements, and more",
    ],
    highlight: false,
  },
];

function Sponsors() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-xs uppercase tracking-widest text-primary">Sponsorship</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-gradient-silver">
        Partner with the next generation of AI × Bio talent
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Sponsor The NeuroByte Society and put your brand in front of the students building the
        future of bioinformatics, healthcare, and applied AI at VIT Bhopal.
      </p>

      <div className="mt-14 grid gap-6 lg:grid-cols-3 items-stretch">
        {TIERS.map((t) => (
          <div
            key={t.name}
            className={`relative rounded-3xl p-8 flex flex-col ${
              t.highlight
                ? "surface-card glow-ring bg-gradient-to-b from-primary/10 to-transparent"
                : "surface-card"
            }`}
          >
            {t.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
                Most popular
              </span>
            )}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">{t.tag}</span>
              <span className="text-2xl">{t.medal}</span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold">{t.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t.tagline}</p>
            <div className="mt-6 font-display text-4xl font-bold text-gradient-silver">{t.price}</div>
            <ul className="mt-6 space-y-3 text-sm">
              {t.perks.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${
                t.highlight
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "border border-border hover:bg-secondary"
              }`}
            >
              Talk to us
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 surface-card rounded-3xl p-8 sm:p-10">
        <h2 className="font-display text-2xl font-semibold">Custom collaborations</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Have something bigger in mind? We're open to custom activations, workshops with your
          product, hackathon sponsorships, and long-term partnerships.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Start the conversation →
        </Link>
      </div>
    </div>
  );
}
