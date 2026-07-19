import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ScrollProgress, n as CursorSpotlight } from "./fx-CLjkDqSi.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B1hJcKtz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Bdu3OOIV.css";
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/logo.jpg",
		alt: "NeuroByte Society",
		className: `${className ?? ""} rounded-full object-cover ring-1 ring-white/15`
	});
}
var defaultCursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M7 4.5 24.5 16 16.2 18.2 13.8 27.5 7 4.5Z' fill='%2307141e' stroke='%236ef3ff' stroke-width='1.6' stroke-linejoin='round'/%3E%3Cpath d='M12.2 11.2 20.4 16.1 15.4 17.3 13.9 22.8Z' fill='%23b6faff' fill-opacity='.72'/%3E%3Ccircle cx='23.8' cy='8.2' r='2.2' fill='%23ff4fd8'/%3E%3Cpath d='M20.8 8.2h6M23.8 5.2v6' stroke='%236ef3ff' stroke-width='.9' stroke-linecap='round'/%3E%3C/svg%3E") 7 5, auto`;
var pointerCursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='11' fill='%2307141e' stroke='%23ff4fd8' stroke-width='1.8'/%3E%3Ccircle cx='16' cy='16' r='3.6' fill='%236ef3ff'/%3E%3Cpath d='M16 2.8v6M16 23.2v6M2.8 16h6M23.2 16h6' stroke='%236ef3ff' stroke-width='1.2' stroke-linecap='round'/%3E%3Cpath d='m11.8 11.8 8.4 8.4M20.2 11.8l-8.4 8.4' stroke='%23ff4fd8' stroke-width='1' stroke-linecap='round'/%3E%3C/svg%3E") 16 16, pointer`;
/**
* CustomCursor — now uses native CSS cursors instead of a requestAnimationFrame
* DOM cursor. That removes the per-frame work entirely, so pointer movement is
* handled by the OS/browser at full refresh rate with no trailing lag.
*/
function CustomCursor() {
	(0, import_react.useEffect)(() => {
		if (matchMedia("(pointer: coarse)").matches) return;
		const style = document.createElement("style");
		style.dataset.neurobyteCursor = "true";
		style.textContent = `
      html, body, body * { cursor: ${defaultCursor}; }
      a, button, [role="button"], input, textarea, select, summary, label, [data-cursor],
      a *, button *, [role="button"] *, label * { cursor: ${pointerCursor}; }
      input[type="text"], input[type="email"], input[type="search"], textarea { cursor: text; }
    `;
		document.head.appendChild(style);
		return () => {
			style.remove();
		};
	}, []);
	return null;
}
/**
* IntroLoader — a one-time boot sequence: ATCG cipher resolves to
* "NEUROBYTE // ONLINE" then peels away. Shown once per session.
*/
function IntroLoader() {
	const [show, setShow] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return false;
		return !sessionStorage.getItem("nb_booted");
	});
	const [phase, setPhase] = (0, import_react.useState)("boot");
	const [line, setLine] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!show) return;
		if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
			sessionStorage.setItem("nb_booted", "1");
			setShow(false);
			return;
		}
		const seq = [
			"> init genome...",
			"> loading weights...",
			"> aligning helix ↔ network",
			"> NEUROBYTE // ONLINE"
		];
		let i = 0, j = 0;
		const t = setInterval(() => {
			const cur = seq[i];
			j++;
			setLine(cur.slice(0, j));
			if (j >= cur.length) {
				j = 0;
				i++;
				if (i >= seq.length) {
					clearInterval(t);
					setTimeout(() => setPhase("leave"), 350);
					setTimeout(() => {
						setPhase("gone");
						sessionStorage.setItem("nb_booted", "1");
					}, 1200);
				}
			}
		}, 32);
		return () => clearInterval(t);
	}, [show]);
	if (!show || phase === "gone") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `fixed inset-0 z-[200] bg-background flex items-center justify-center transition-all duration-700 ${phase === "leave" ? "opacity-0 [clip-path:inset(50%_0_50%_0)]" : "opacity-100 [clip-path:inset(0_0_0_0)]"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-lines opacity-30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] animate-pulse" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-4",
						children: "/ NeuroByte boot sequence"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-display text-5xl md:text-7xl tracking-tighter",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "bio"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-foreground",
								children: "ai"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 font-mono text-xs text-foreground/80 h-5",
						children: [line, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "animate-blink",
							children: "▍"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 mx-auto h-px w-64 bg-border overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full bg-primary animate-[loadbar_2.2s_ease-in-out_forwards]" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes loadbar{from{width:0}to{width:100%}}` })
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-primary",
					children: "Error 404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-7xl",
					children: "Not found."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "This sequence doesn't exist in our genome."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-flex rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm text-primary hover:bg-primary/20",
					children: "Return home →"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl",
					children: "Something ruptured."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "The page failed to mount. Try again or head home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
						children: "Retry"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border border-border px-4 py-2 text-sm",
						children: "Home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "The NeuroByte Society — VIT Bhopal" },
			{
				name: "description",
				content: "Student research collective at VIT Bhopal decoding biology with code — AI, bioinformatics, biotech, healthcare."
			},
			{
				property: "og:title",
				content: "The NeuroByte Society — VIT Bhopal"
			},
			{
				property: "og:description",
				content: "Student research collective at VIT Bhopal decoding biology with code — AI, bioinformatics, biotech, healthcare."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "NeuroByte Society"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "The NeuroByte Society — VIT Bhopal"
			},
			{
				name: "twitter:description",
				content: "Student research collective at VIT Bhopal decoding biology with code — AI, bioinformatics, biotech, healthcare."
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
var NAV = [
	{
		to: "/",
		label: "Index",
		num: "00"
	},
	{
		to: "/about",
		label: "About",
		num: "01"
	},
	{
		to: "/projects",
		label: "Projects",
		num: "02"
	},
	{
		to: "/event",
		label: "Event",
		num: "03"
	},
	{
		to: "/team",
		label: "Team",
		num: "04"
	},
	{
		to: "/sponsors",
		label: "Sponsors",
		num: "05"
	},
	{
		to: "/contact",
		label: "Contact",
		num: "06"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: "h-9 w-9 transition-transform group-hover:rotate-90 duration-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-xl font-semibold tracking-tight text-foreground",
							children: ["Neuro", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic font-light text-gradient-bio",
								children: "Byte"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-1 font-mono text-[9px] uppercase tracking-[0.35em] text-muted-foreground/80",
							children: [
								"society ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary/70",
									children: "·"
								}),
								" est.2026"
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-0.5",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						className: "group relative rounded-md px-3 py-2 text-sm text-foreground/70 transition-colors hover:text-foreground",
						activeProps: { className: "rounded-md px-3 py-2 text-sm text-primary" },
						activeOptions: { exact: item.to === "/" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] tracking-widest opacity-50 mr-1.5 align-middle",
								children: item.num
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display font-medium tracking-tight align-middle",
								children: item.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-primary/60 via-primary to-primary/60 transition-transform duration-300 group-hover:scale-x-100" })
						]
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/sponsors",
						className: "hidden sm:inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 font-display text-xs font-medium tracking-wide text-primary transition-colors hover:bg-primary/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }), "Partner"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen((v) => !v),
						className: "lg:hidden rounded-md border border-border p-2 text-muted-foreground",
						"aria-label": "Menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
									x1: "3",
									y1: "6",
									x2: "21",
									y2: "6"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
									x1: "3",
									y1: "12",
									x2: "21",
									y2: "12"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
									x1: "3",
									y1: "18",
									x2: "21",
									y2: "18"
								})
							]
						})
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden border-t border-border/40 px-6 py-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-1",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "rounded-md px-3 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:bg-secondary hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "opacity-50 mr-2",
						children: item.num
					}), item.label]
				}, item.to))
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative border-t border-border/40 mt-32 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-lines opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1400px] px-6 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: "h-10 w-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl",
									children: "NeuroByte Society"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed",
								children: "Decoding biology with code at VIT Bhopal. A student collective at the frontier of AI, bioinformatics, biotechnology, and healthcare."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 font-mono text-[10px] uppercase tracking-widest text-primary",
								children: "[ 23.078° N · 76.855° E ]"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4",
							children: "Navigate"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2.5 text-sm",
							children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: n.to,
								className: "text-foreground/80 hover:text-primary transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] opacity-40 mr-2",
									children: n.num
								}), n.label]
							}) }, n.to))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4",
								children: "Signal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									"VIT Bhopal University",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Kothrikalan, Sehore, MP",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"India"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "mt-4 inline-flex items-center gap-2 font-display text-2xl italic text-primary hover:text-foreground transition-colors",
								children: "Reach out →"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 pt-6 border-t border-border/40 flex flex-wrap justify-between gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" NeuroByte Society"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-lime animate-pulse" }), "System online"]
				})]
			})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntroLoader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorSpotlight, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-screen flex flex-col relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
				]
			})
		]
	});
}
var $$splitComponentImporter$6 = () => import("./team-B780SY3b.mjs");
var Route$6 = createFileRoute("/team")({
	head: () => ({ meta: [
		{ title: "Team — The NeuroByte Society" },
		{
			name: "description",
			content: "Meet the core board and vertical leads driving The NeuroByte Society at VIT Bhopal."
		},
		{
			property: "og:title",
			content: "Team — The NeuroByte Society"
		},
		{
			property: "og:description",
			content: "Core board and vertical leads of the NeuroByte Society."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./sponsors-BPKb5wrA.mjs");
var Route$5 = createFileRoute("/sponsors")({
	head: () => ({ meta: [
		{ title: "Sponsor us — The NeuroByte Society" },
		{
			name: "description",
			content: "Three sponsorship tiers to partner with The NeuroByte Society at VIT Bhopal — from ₹1,000 to ₹5,000."
		},
		{
			property: "og:title",
			content: "Sponsor The NeuroByte Society"
		},
		{
			property: "og:description",
			content: "Supporter, Partner, and Title Sponsor packages for reaching VIT Bhopal students."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./projects-Chiy6jbU.mjs");
var Route$4 = createFileRoute("/projects")({
	head: () => ({ meta: [
		{ title: "Future Projects — The NeuroByte Society" },
		{
			name: "description",
			content: "Fifteen upcoming student projects across AI, bioinformatics, biomedical devices, agri-tech, and 3D printing — the slate we're about to build."
		},
		{
			property: "og:title",
			content: "Future Projects — The NeuroByte Society"
		},
		{
			property: "og:description",
			content: "The 15-project slate we're about to build this academic year."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./event-BuI-hKVm.mjs");
var Route$3 = createFileRoute("/event")({
	head: () => ({ meta: [
		{ title: "BioGenesis — NeuroByte Society launch event" },
		{
			name: "description",
			content: "Our orientation event: 9 activities, a BioEvolution ideation challenge with a Gemini Pro prize, and a talk by Dr. Suresh Kumar R. S."
		},
		{
			property: "og:title",
			content: "BioGenesis · NeuroByte Society"
		},
		{
			property: "og:description",
			content: "Mid-August. 2 hours. 9 activities. Club intro, ideation challenge, expert talk, jamming."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-DjcjKxZ5.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — The NeuroByte Society" },
		{
			name: "description",
			content: "Get in touch with The NeuroByte Society at VIT Bhopal — join, collaborate, or sponsor."
		},
		{
			property: "og:title",
			content: "Contact — The NeuroByte Society"
		},
		{
			property: "og:description",
			content: "Reach out to join, collaborate, or sponsor."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-DmaFNf1o.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — The NeuroByte Society" },
		{
			name: "description",
			content: "Our vision, mission, and the six domains we work across at VIT Bhopal."
		},
		{
			property: "og:title",
			content: "About — The NeuroByte Society"
		},
		{
			property: "og:description",
			content: "A student club engineering the intersection of biology and code."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-OQ8LvwQz.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "The NeuroByte Society — VIT Bhopal" },
		{
			name: "description",
			content: "Student research collective at VIT Bhopal decoding biology with code — AI, bioinformatics, biotech, healthcare."
		},
		{
			property: "og:title",
			content: "The NeuroByte Society — VIT Bhopal"
		},
		{
			property: "og:description",
			content: "Student research collective at VIT Bhopal decoding biology with code — AI, bioinformatics, biotech, healthcare."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TeamRoute = Route$6.update({
	id: "/team",
	path: "/team",
	getParentRoute: () => Route$7
});
var SponsorsRoute = Route$5.update({
	id: "/sponsors",
	path: "/sponsors",
	getParentRoute: () => Route$7
});
var ProjectsRoute = Route$4.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$7
});
var EventRoute = Route$3.update({
	id: "/event",
	path: "/event",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute,
	ContactRoute,
	EventRoute,
	ProjectsRoute,
	SponsorsRoute,
	TeamRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 3e4,
		defaultPendingMinMs: 0,
		defaultPendingMs: 0
	});
};
//#endregion
export { getRouter };
