## The NeuroByte Society — VIT Bhopal

Multi-page marketing site with a deep navy + silver aesthetic pulled from the club logo. Premium bio-tech feel, restrained motion, editorial typography.

### Design system

- **Palette**: deep navy `#0a1628` (bg), midnight `#0f2444` (surfaces), silver `#c0c9d6` (foreground), electric blue `#4f8fd6` (accent). Subtle magenta glow `#a855f7` used sparingly for the neural-network accents on hero.
- **Typography**: pairing chosen for fit — `Sora` for display/headings (geometric, technical, matches the logo wordmark feel), `Inter` for body (clean, legible for dense project/event copy). Loaded via `<link>` in `__root.tsx`.
- **Tokens**: defined in `src/styles.css` under `@theme inline` + `:root` (oklch). Radii soft (0.75rem). Card surfaces with hairline silver borders and subtle inner glow.
- **Motion**: gentle fade/rise on scroll, hover elevation on cards. No heavy libraries.

### Routes

```
src/routes/
  __root.tsx        -> header (logo + nav) + footer, dark theme shell, font <link>
  index.tsx         -> / — Hero, mission, quick highlights, CTAs to Event & Projects
  about.tsx         -> /about — vision, mission, what we do
  projects.tsx      -> /projects — all 15 project topics as cards, grouped by theme
  event.tsx         -> /event — BioGenesis / orientation event, 9 activities, prize, benefits
  team.tsx          -> /team — 5 core members with role + LinkedIn
  sponsors.tsx      -> /sponsors — 3 sponsorship tiers + contact CTA
  contact.tsx       -> /contact — email + socials + LinkedIn links
```

Each route gets its own `head()` with unique title, description, og:title, og:description.

### Page contents

**Home (`/`)** — replaces the placeholder index.
- Hero: club name, tagline ("AI × Bioinformatics at VIT Bhopal"), two CTAs (See our event, Explore projects). Subtle animated neural-network SVG backdrop on the right.
- "What we do" strip: 4 pillars (Research, Workshops, Hackathons, Publications).
- Featured project preview (3 highlighted cards) → link to /projects.
- Upcoming event teaser → link to /event.
- Join / sponsor CTA band.

**About (`/about`)** — vision, mission, domains covered (AI, Bioinformatics, Biotech, Healthcare, Robotics, Embedded), how members contribute.

**Projects (`/projects`)** — all 15 projects as cards with number, title, description. Grouped in 3 clusters:
- AI & Computational Biology (2, 5, 6, 7, 11, 12)
- Hardware & Devices (1, 8, 9, 10, 13, 15)
- Biotech & Materials (3, 4, 14)

**Event (`/event`)** — "BioGenesis: Orientation & Ideation" (working title, editable):
- Overview: mid-August, 2 hours, purpose.
- Timeline / agenda of the 9 activities as an accordion or stepped cards.
- Highlighted prize card: Google Gemini Pro 18-month for BioEvolution winner.
- Participant benefits list.
- Featured speaker card: Dr. Suresh Kumar R. S.
- Register CTA (mailto placeholder until form/backend added).

**Team (`/team`)** — 5 cards: Adil Sukumar (President), Anakha Shaji (VP), Snehal Dixit (Joint Secretary), Vishwa Namdeo Badgujar (General Secretary), Riddhi Garg (General Secretary). Each card: avatar placeholder (initials on a silver gradient), name, role, LinkedIn button. Copy note that more leads/co-leads are coming.

**Sponsors (`/sponsors`)** — 3 tier cards (Supporter ₹1000, Partner ₹2500, Title ₹5000) with the exact perks listed. Middle tier highlighted as "Most popular". CTA to contact for sponsorship.

**Contact (`/contact`)** — placeholder email, LinkedIn/Instagram social buttons (links empty for now, editable).

### Header / footer (in `__root.tsx`)

- Header: small logo mark (silver SVG) + "NeuroByte Society" wordmark, nav links (Home, About, Projects, Event, Team, Sponsors), Sponsor CTA button.
- Footer: brief club line, VIT Bhopal note, nav mirror, social icons, copyright.

### Assets

- Generate a small silver-line logo mark SVG in code (inspired by the uploaded logo's interlocked motif — no direct copy of the uploaded raster).
- Neural-network hero backdrop as inline SVG (dots + connecting lines with subtle magenta/blue glow).
- Team avatars: gradient tiles with initials (no external photos).

### Technical notes

- TanStack Start file-based routes; each `createFileRoute("/path")` matches the filename.
- Dark theme by default — add `class="dark"` on `<html>` in root shell, or just author the site directly against the dark tokens (simpler; site is dark-only).
- All colors via semantic tokens (`bg-background`, `text-foreground`, `bg-accent`, etc.) defined in `src/styles.css`. No hard-coded hex in JSX.
- Fonts loaded via `<link rel="preconnect">` + `<link rel="stylesheet">` to Google Fonts in root `head()`. `--font-display` and `--font-body` registered in `@theme`.
- Restrained motion via Tailwind transitions + `tw-animate-css` utilities already available.
- Placeholder content clearly marked where user should fill in (contact email, socials, exact event date, venue).
- Delete the `data-lovable-blank-page-placeholder` image and replace `/` with the real home page.

### What's NOT in this pass

- No backend, no registration form submission (just mailto or a note).
- No CMS — team/projects/sponsors are hardcoded in components, easy to edit.
- Additional leads/co-leads will be added when you send the next batch.
