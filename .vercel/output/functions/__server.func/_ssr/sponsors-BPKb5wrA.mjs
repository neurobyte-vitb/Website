import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sponsors-BPKb5wrA.js
var import_jsx_runtime = require_jsx_runtime();
var TIERS = [
	{
		tag: "T1",
		name: "Supporter",
		price: "₹1,000",
		tagline: "Introduce your brand to our audience.",
		perks: [
			"Small logo placement on shirt sleeve or upper back",
			"2 dedicated shoutouts on our Stories, tagging your account",
			"Brand name listed in event & post credits"
		],
		highlight: false
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
			"Custom discount code (e.g. TEAM20) driving traffic"
		],
		highlight: true
	},
	{
		tag: "T3",
		name: "Title Sponsor",
		price: "₹5,000",
		tagline: "The all-in package — we treat your brand like our own.",
		perks: [
			"Title status: \"Presented by [Your Brand]\"",
			"Massive premium logo — front & center on shirts",
			"Link in bio, constant tags, dedicated promo videos",
			"Custom activations: giveaways, product placements, more"
		],
		highlight: false
	}
];
function Sponsors() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative border-b border-border/40 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-lines opacity-30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-10 right-10 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-[1400px] px-6 py-24 md:py-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-widest text-primary",
							children: "[ 05 ] Sponsorship"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-tighter max-w-5xl",
							children: [
								"Partner with ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gradient-bio",
									children: "The NeuroByte Society"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed",
							children: "Sponsor The NeuroByte Society and put your brand in front of the students building the future of bioinformatics, healthcare, and applied AI at VIT Bhopal."
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-[1400px] px-6 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 lg:grid-cols-3 items-stretch",
				children: TIERS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative rounded-3xl p-10 flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 ${t.highlight ? "surface-dark border border-primary/60 glow-cyan" : "surface-glass"}`,
					children: [
						t.highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-primary-foreground",
							children: "Most popular"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] uppercase tracking-widest text-primary",
								children: t.tag
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
								children: "Sponsor tier"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "relative mt-6 font-display text-4xl",
							children: t.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "relative mt-2 text-sm text-muted-foreground",
							children: t.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative mt-8 font-display text-6xl italic text-gradient-bio",
							children: t.price
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "relative mt-8 space-y-3 text-sm flex-1",
							children: t.perks.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-primary shrink-0",
									children: "+"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground/90",
									children: p
								})]
							}, p))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: `relative mt-10 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition ${t.highlight ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-border hover:bg-secondary"}`,
							children: "Talk to us →"
						})
					]
				}, t.name))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-[1400px] px-6 pb-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-dark rounded-3xl p-10 md:p-16 relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-lines opacity-30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid gap-8 md:grid-cols-2 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-widest text-primary",
								children: "// Custom"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 font-display text-4xl md:text-5xl",
								children: [
									"Have something ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-gradient-bio",
										children: "bigger"
									}),
									" in mind?"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground max-w-md",
								children: "Custom activations, workshops with your product, hackathon sponsorships, long-term partnerships. Let's design it together."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:justify-self-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground hover:opacity-90",
								children: "Start the conversation →"
							})
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { Sponsors as component };
