import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LogoMark } from "../components/logo-mark";
import { CursorSpotlight, ScrollProgress } from "../components/fx";
import { CustomCursor } from "../components/custom-cursor";
import { IntroLoader } from "../components/intro-loader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Error 404</p>
        <h1 className="mt-2 font-display text-7xl">Not found.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          This sequence doesn't exist in our genome.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm text-primary hover:bg-primary/20"
        >
          Return home →
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl">Something ruptured.</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page failed to mount. Try again or head home.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Retry
          </button>
          <a href="/" className="rounded-full border border-border px-4 py-2 text-sm">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The NeuroByte Society — VIT Bhopal" },
      {
        name: "description",
        content:
          "Student research collective at VIT Bhopal decoding biology with code — AI, bioinformatics, biotech, healthcare.",
      },
      { property: "og:title", content: "The NeuroByte Society — VIT Bhopal" },
      {
        property: "og:description",
        content:
          "Student research collective at VIT Bhopal decoding biology with code — AI, bioinformatics, biotech, healthcare.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "NeuroByte Society" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The NeuroByte Society — VIT Bhopal" },
      { name: "twitter:description", content: "Student research collective at VIT Bhopal decoding biology with code — AI, bioinformatics, biotech, healthcare." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6131e3b9-de96-49ac-b486-fd80b55a5088/id-preview-1829ad61--9efbb7e9-c450-4309-b22d-1574aade8e67.lovable.app-1784484922719.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6131e3b9-de96-49ac-b486-fd80b55a5088/id-preview-1829ad61--9efbb7e9-c450-4309-b22d-1574aade8e67.lovable.app-1784484922719.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

const NAV = [
  { to: "/", label: "Index", num: "00" },
  { to: "/about", label: "About", num: "01" },
  { to: "/projects", label: "Projects", num: "02" },
  { to: "/event", label: "Event", num: "03" },
  { to: "/team", label: "Team", num: "04" },
  { to: "/sponsors", label: "Sponsors", num: "05" },
  { to: "/contact", label: "Contact", num: "06" },
] as const;

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <LogoMark className="h-9 w-9 transition-transform group-hover:rotate-90 duration-700" />
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-tight text-foreground">
              Neuro<span className="italic font-light text-gradient-bio">Byte</span>
            </span>
            <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.35em] text-muted-foreground/80">
              society <span className="text-primary/70">·</span> est.2026
            </span>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative rounded-md px-3 py-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              <span className="font-mono text-[10px] tracking-widest opacity-50 mr-1.5 align-middle">{item.num}</span>
              <span className="font-display font-medium tracking-tight align-middle">{item.label}</span>
              <span className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-primary/60 via-primary to-primary/60 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/sponsors"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 font-display text-xs font-medium tracking-wide text-primary transition-colors hover:bg-primary/20"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Partner
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden rounded-md border border-border p-2 text-muted-foreground"
            aria-label="Menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/40 px-6 py-3">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                <span className="opacity-50 mr-2">{item.num}</span>{item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="relative border-t border-border/40 mt-32 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="relative mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <LogoMark className="h-10 w-10" />
              <span className="font-display text-2xl">NeuroByte Society</span>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Decoding biology with code at VIT Bhopal. A student collective at the frontier of
              AI, bioinformatics, biotechnology, and healthcare.
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-primary">
              [ 23.078° N · 76.855° E ]
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Navigate</h4>
            <ul className="space-y-2.5 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-foreground/80 hover:text-primary transition-colors">
                    <span className="font-mono text-[10px] opacity-40 mr-2">{n.num}</span>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Signal</h4>
            <p className="text-sm text-muted-foreground">
              VIT Bhopal University<br />Kothrikalan, Sehore, MP<br />India
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 font-display text-2xl italic text-primary hover:text-foreground transition-colors"
            >
              Reach out →
            </Link>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-border/40 flex flex-wrap justify-between gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>© {new Date().getFullYear()} NeuroByte Society</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
            System online
          </span>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <IntroLoader />
      <ScrollProgress />
      <CursorSpotlight />
      <CustomCursor />
      <div className="min-h-screen flex flex-col relative">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
