import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The NeuroByte Society" },
      {
        name: "description",
        content: "Get in touch with The NeuroByte Society at VIT Bhopal.",
      },
      { property: "og:title", content: "Contact — The NeuroByte Society" },
      {
        property: "og:description",
        content: "Reach out to join, collaborate, or sponsor.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-xs uppercase tracking-widest text-primary">Contact</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-gradient-silver">
        Let's talk
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Whether you want to join, collaborate on a project, invite us to something, or sponsor an
        event — we'd love to hear from you.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <a
          href="mailto:neurobyte@vitbhopal.ac.in"
          className="surface-card rounded-2xl p-6 hover:glow-ring transition-shadow"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
          <p className="mt-2 font-display text-lg font-semibold">neurobyte@vitbhopal.ac.in</p>
          <p className="mt-1 text-xs text-muted-foreground">(placeholder — update once official)</p>
        </a>
        <div className="surface-card rounded-2xl p-6">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Location</p>
          <p className="mt-2 font-display text-lg font-semibold">VIT Bhopal University</p>
          <p className="mt-1 text-sm text-muted-foreground">Kothrikalan, Sehore, Madhya Pradesh</p>
        </div>
      </div>

      <div className="mt-8 surface-card rounded-2xl p-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Follow us</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-secondary"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-secondary"
          >
            Instagram
          </a>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Social links will be added once accounts are live.
        </p>
      </div>
    </div>
  );
}
