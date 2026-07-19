import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Reveal, o as Tilt, r as Magnetic, t as CountUp } from "./fx-CLjkDqSi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-OQ8LvwQz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NeuroHelix({ className }) {
	const width = 800;
	const height = 700;
	const points = 46;
	const amp = 55;
	const cx = 160;
	const helixA = [];
	const helixB = [];
	const rungs = [];
	const bridgePts = [];
	for (let i = 0; i <= points; i++) {
		const t = i / points;
		const y = 30 + t * (height - 60);
		const phase = t * Math.PI * 5;
		const dissolve = Math.max(0, 1 - Math.max(0, t - .55) * 2.4);
		const xa = cx + Math.sin(phase) * amp * dissolve;
		const xb = cx + Math.sin(phase + Math.PI) * amp * dissolve;
		helixA.push(`${i === 0 ? "M" : "L"}${xa.toFixed(1)},${y.toFixed(1)}`);
		helixB.push(`${i === 0 ? "M" : "L"}${xb.toFixed(1)},${y.toFixed(1)}`);
		if (i % 2 === 0 && dissolve > .15) rungs.push({
			x1: xa,
			x2: xb,
			y,
			z: Math.cos(phase),
			i
		});
		if (dissolve > .05 && dissolve < .9 && i % 3 === 0) bridgePts.push({
			x: (xa + xb) / 2,
			y
		});
	}
	const layers = [
		{
			x: 420,
			count: 6
		},
		{
			x: 560,
			count: 8
		},
		{
			x: 700,
			count: 5
		}
	];
	const nodes = [];
	layers.forEach((layer, li) => {
		const spacing = (height - 80) / (layer.count + 1);
		for (let n = 0; n < layer.count; n++) nodes.push({
			x: layer.x,
			y: 40 + spacing * (n + 1),
			l: li,
			idx: n
		});
	});
	const edges = [];
	for (let li = 0; li < layers.length - 1; li++) {
		const from = nodes.filter((n) => n.l === li);
		const to = nodes.filter((n) => n.l === li + 1);
		from.forEach((a) => {
			to.forEach((b) => {
				if ((a.idx * 7 + b.idx * 13) % 10 < 7) edges.push({
					x1: a.x,
					y1: a.y,
					x2: b.x,
					y2: b.y,
					k: `${li}-${a.idx}-${b.idx}`
				});
			});
		});
	}
	const firstLayer = nodes.filter((n) => n.l === 0);
	const bridges = [];
	bridgePts.forEach((p, i) => {
		const target = firstLayer[i % firstLayer.length];
		bridges.push({
			x1: p.x,
			y1: p.y,
			x2: target.x,
			y2: target.y,
			k: `b-${i}`
		});
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${width} ${height}`,
		className,
		"aria-hidden": true,
		preserveAspectRatio: "xMidYMid meet",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "nh-a",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "oklch(0.82 0.18 200)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "oklch(0.7 0.25 310)"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "nh-b",
					x1: "1",
					y1: "0",
					x2: "0",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "oklch(0.88 0.2 140)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "oklch(0.82 0.18 200)"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "nh-bridge",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "oklch(0.82 0.18 200)",
						stopOpacity: "0.9"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "oklch(0.7 0.25 310)",
						stopOpacity: "0.2"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
					id: "nh-node",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "oklch(0.95 0.12 200)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "60%",
							stopColor: "oklch(0.7 0.25 310)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "oklch(0.7 0.25 310 / 0)"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
					id: "nh-glow",
					x: "-30%",
					y: "-30%",
					width: "160%",
					height: "160%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", { stdDeviation: "3.5" })
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				filter: "url(#nh-glow)",
				opacity: "0.55",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: helixA.join(" "),
					stroke: "url(#nh-a)",
					strokeWidth: "4",
					fill: "none"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: helixB.join(" "),
					stroke: "url(#nh-b)",
					strokeWidth: "4",
					fill: "none"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: helixA.join(" "),
				stroke: "url(#nh-a)",
				strokeWidth: "1.4",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: helixB.join(" "),
				stroke: "url(#nh-b)",
				strokeWidth: "1.4",
				fill: "none"
			}),
			rungs.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				opacity: .4 + Math.abs(r.z) * .5,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: r.x1,
						y1: r.y,
						x2: r.x2,
						y2: r.y,
						stroke: "oklch(0.85 0.05 250)",
						strokeWidth: .6 + Math.abs(r.z) * .7
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: r.x1,
						cy: r.y,
						r: 1.5,
						fill: "oklch(0.82 0.18 200)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
							attributeName: "opacity",
							values: "0.5;1;0.5",
							dur: `${2 + r.i % 3}s`,
							repeatCount: "indefinite"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: r.x2,
						cy: r.y,
						r: 1.5,
						fill: "oklch(0.7 0.25 310)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
							attributeName: "opacity",
							values: "1;0.5;1",
							dur: `${2 + r.i % 3}s`,
							repeatCount: "indefinite"
						})
					})
				]
			}, r.i)),
			bridges.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: b.x1,
				y1: b.y1,
				x2: b.x2,
				y2: b.y2,
				stroke: "url(#nh-bridge)",
				strokeWidth: "0.9",
				strokeDasharray: "3 4",
				opacity: "0.6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
					attributeName: "stroke-dashoffset",
					values: "0;-14",
					dur: "3s",
					repeatCount: "indefinite"
				})
			}, b.k)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				stroke: "oklch(0.82 0.18 200)",
				strokeWidth: "0.6",
				fill: "none",
				children: edges.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: e.x1,
					y1: e.y1,
					x2: e.x2,
					y2: e.y2,
					opacity: .15 + i * 37 % 40 / 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "opacity",
						values: `0.15;${.5 + i * 17 % 30 / 100};0.15`,
						dur: `${3 + i % 4}s`,
						repeatCount: "indefinite"
					})
				}, e.k))
			}),
			edges.filter((_, i) => i % 5 === 0).slice(0, 14).map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("circle", {
				r: "2",
				fill: "oklch(0.95 0.12 200)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "cx",
						values: `${e.x1};${e.x2}`,
						dur: `${1.6 + i % 3 * .5}s`,
						repeatCount: "indefinite",
						begin: `${(i * .2).toFixed(2)}s`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "cy",
						values: `${e.y1};${e.y2}`,
						dur: `${1.6 + i % 3 * .5}s`,
						repeatCount: "indefinite",
						begin: `${(i * .2).toFixed(2)}s`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "opacity",
						values: "0;1;0",
						dur: `${1.6 + i % 3 * .5}s`,
						repeatCount: "indefinite",
						begin: `${(i * .2).toFixed(2)}s`
					})
				]
			}, `p-${e.k}`)),
			nodes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: n.x,
					cy: n.y,
					r: "10",
					fill: "url(#nh-node)",
					opacity: "0.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: n.x,
					cy: n.y,
					r: "3.4",
					fill: "oklch(0.95 0.1 200)",
					filter: "url(#nh-glow)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "r",
						values: "3.2;4.2;3.2",
						dur: `${2.4 + (n.l + n.idx) % 3}s`,
						repeatCount: "indefinite"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: n.x,
					cy: n.y,
					r: "1.6",
					fill: "oklch(1 0 0)"
				})
			] }, `n-${n.l}-${n.idx}`)),
			false
		]
	});
}
function NeuroCanvas({ className }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 1.25);
		const mouse = {
			x: -9999,
			y: -9999,
			active: false
		};
		let visible = true;
		const io = new IntersectionObserver(([e]) => {
			visible = e.isIntersecting;
		}, { threshold: 0 });
		io.observe(canvas);
		let particles = [];
		const build = () => {
			const rect = canvas.getBoundingClientRect();
			W = rect.width;
			H = rect.height;
			canvas.width = W * dpr;
			canvas.height = H * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			particles = [];
			const helixCount = 90;
			const helixX = W * .18;
			const amp = Math.min(80, W * .07);
			for (let i = 0; i < helixCount; i++) {
				const t = i / (helixCount - 1);
				const y = 20 + t * (H - 40);
				const strand = i % 2;
				const phase = t * Math.PI * 6 + (strand ? Math.PI : 0);
				const bx = helixX + Math.sin(phase) * amp;
				particles.push({
					x: bx,
					y,
					vx: 0,
					vy: 0,
					bx,
					by: y,
					role: "helix",
					hue: strand ? 200 : 310,
					size: 1.8,
					phase
				});
			}
			const netCount = 110;
			for (let i = 0; i < netCount; i++) {
				const x = W * .38 + Math.random() * W * .6;
				const y = 20 + Math.random() * (H - 40);
				particles.push({
					x,
					y,
					vx: (Math.random() - .5) * .15,
					vy: (Math.random() - .5) * .15,
					bx: x,
					by: y,
					role: "net",
					hue: Math.random() < .5 ? 200 : 310,
					size: 1.4 + Math.random() * 1.6,
					phase: Math.random() * Math.PI * 2
				});
			}
		};
		build();
		const onResize = () => build();
		window.addEventListener("resize", onResize);
		const onMove = (e) => {
			const r = canvas.getBoundingClientRect();
			mouse.x = e.clientX - r.left;
			mouse.y = e.clientY - r.top;
			mouse.active = true;
		};
		const onLeave = () => {
			mouse.active = false;
			mouse.x = -9999;
			mouse.y = -9999;
		};
		canvas.addEventListener("mousemove", onMove);
		canvas.addEventListener("mouseleave", onLeave);
		let raf = 0;
		let t = 0;
		const step = () => {
			t += reduce ? 0 : .012;
			ctx.clearRect(0, 0, W, H);
			for (const p of particles) {
				if (p.role === "helix") {
					const amp = Math.min(80, W * .07);
					const helixX = W * .18;
					const strand = p.hue === 310 ? 1 : 0;
					const phase = (p.by - 20) / Math.max(1, H - 40) * Math.PI * 6 + (strand ? Math.PI : 0) + t * 1.2;
					p.bx = helixX + Math.sin(phase) * amp;
				} else {
					p.bx += p.vx;
					p.by += p.vy;
					if (p.bx < W * .35 || p.bx > W - 10) p.vx *= -1;
					if (p.by < 10 || p.by > H - 10) p.vy *= -1;
				}
				let tx = p.bx, ty = p.by;
				if (mouse.active) {
					const dx = p.x - mouse.x;
					const dy = p.y - mouse.y;
					const d2 = dx * dx + dy * dy;
					if (d2 < 19600) {
						const d = Math.sqrt(d2) || 1;
						const f = (140 - d) / 140;
						tx += dx / d * f * 40;
						ty += dy / d * f * 40;
					}
				}
				p.x += (tx - p.x) * .08;
				p.y += (ty - p.y) * .08;
			}
			ctx.lineWidth = .6;
			for (let i = 0; i < particles.length - 1; i++) {
				const a = particles[i], b = particles[i + 1];
				if (a.role !== "helix" || b.role !== "helix") continue;
				if (Math.abs(a.y - b.y) < 14) {
					const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
					grad.addColorStop(0, `oklch(0.82 0.18 200 / 0.55)`);
					grad.addColorStop(1, `oklch(0.7 0.25 310 / 0.55)`);
					ctx.strokeStyle = grad;
					ctx.beginPath();
					ctx.moveTo(a.x, a.y);
					ctx.lineTo(b.x, b.y);
					ctx.stroke();
				}
			}
			const netStart = particles.findIndex((p) => p.role === "net");
			ctx.lineWidth = .5;
			for (let i = netStart; i < particles.length; i++) {
				const a = particles[i];
				for (let j = i + 1; j < particles.length; j++) {
					const b = particles[j];
					const dx = a.x - b.x, dy = a.y - b.y;
					const d2 = dx * dx + dy * dy;
					if (d2 < 12100) {
						ctx.strokeStyle = `oklch(0.82 0.18 200 / ${((1 - d2 / 12100) * .35).toFixed(3)})`;
						ctx.beginPath();
						ctx.moveTo(a.x, a.y);
						ctx.lineTo(b.x, b.y);
						ctx.stroke();
					}
				}
			}
			ctx.lineWidth = .7;
			for (let i = 20; i < netStart; i += 10) {
				const h = particles[i];
				let best = -1, bd = Infinity;
				for (let j = netStart; j < particles.length; j++) {
					const dx = h.x - particles[j].x, dy = h.y - particles[j].y;
					const d = dx * dx + dy * dy;
					if (d < bd) {
						bd = d;
						best = j;
					}
				}
				if (best >= 0) {
					const n = particles[best];
					const dashOffset = -(t * 30) % 12;
					ctx.setLineDash([3, 4]);
					ctx.lineDashOffset = dashOffset;
					ctx.strokeStyle = `oklch(0.82 0.18 200 / 0.35)`;
					ctx.beginPath();
					ctx.moveTo(h.x, h.y);
					ctx.lineTo(n.x, n.y);
					ctx.stroke();
					ctx.setLineDash([]);
					const k = (t * .6 + i * .13) % 1;
					const px = h.x + (n.x - h.x) * k;
					const py = h.y + (n.y - h.y) * k;
					ctx.fillStyle = `oklch(0.95 0.12 200 / ${1 - k})`;
					ctx.beginPath();
					ctx.arc(px, py, 2.2, 0, Math.PI * 2);
					ctx.fill();
				}
			}
			for (const p of particles) {
				const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 6);
				glow.addColorStop(0, `oklch(0.9 0.15 ${p.hue} / 0.8)`);
				glow.addColorStop(1, `oklch(0.9 0.15 ${p.hue} / 0)`);
				ctx.fillStyle = glow;
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.size * 6, 0, Math.PI * 2);
				ctx.fill();
				ctx.fillStyle = `oklch(0.97 0.08 ${p.hue})`;
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
				ctx.fill();
			}
			raf = requestAnimationFrame(loop);
		};
		const loop = () => {
			if (visible) step();
			else raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => {
			cancelAnimationFrame(raf);
			io.disconnect();
			window.removeEventListener("resize", onResize);
			canvas.removeEventListener("mousemove", onMove);
			canvas.removeEventListener("mouseleave", onLeave);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		className,
		"aria-hidden": true
	});
}
function TerminalType({ lines, className, prompt = "$" }) {
	const [i, setI] = (0, import_react.useState)(0);
	const [text, setText] = (0, import_react.useState)("");
	const [deleting, setDeleting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const current = lines[i % lines.length];
		const speed = deleting ? 28 : 55;
		const at = deleting ? current.slice(0, Math.max(0, text.length - 1)) : current.slice(0, text.length + 1);
		const holdEnd = !deleting && at === current;
		const holdStart = deleting && at === "";
		const t = setTimeout(() => {
			if (holdEnd) {
				setDeleting(true);
				return;
			}
			if (holdStart) {
				setDeleting(false);
				setI((v) => v + 1);
				return;
			}
			setText(at);
		}, holdEnd ? 1600 : holdStart ? 300 : speed);
		return () => clearTimeout(t);
	}, [
		text,
		deleting,
		i,
		lines
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: prompt
			}),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-[0.6ch] -mb-0.5 animate-blink bg-primary h-[1em] align-middle" })
		]
	});
}
function NeuralBg({ className }) {
	const nodes = [];
	const cols = 8;
	const rows = 6;
	for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) nodes.push([c / (cols - 1) * 100 + Math.sin(r * 1.7 + c) * 2, r / (rows - 1) * 100 + Math.cos(c * 1.3 + r) * 2]);
	const links = [];
	for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
		const dx = nodes[i][0] - nodes[j][0];
		const dy = nodes[i][1] - nodes[j][1];
		if (Math.hypot(dx, dy) < 18) links.push([i, j]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className,
		preserveAspectRatio: "xMidYMid slice",
		"aria-hidden": true,
		children: [links.map(([a, b], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: nodes[a][0],
			y1: nodes[a][1],
			x2: nodes[b][0],
			y2: nodes[b][1],
			stroke: "oklch(0.82 0.18 200 / 0.15)",
			strokeWidth: "0.1"
		}, i)), nodes.map(([x, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: x,
			cy: y,
			r: "0.4",
			fill: "oklch(0.82 0.18 200)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
				attributeName: "opacity",
				values: "0.3;1;0.3",
				dur: `${3 + i % 5}s`,
				repeatCount: "indefinite",
				begin: `${i * .1}s`
			})
		}, i))]
	});
}
/**
* ShaderGradient — a GPU-shaded flowing plasma of magenta / cyan / violet
* with organic fBM noise. Cheap: single fullscreen quad, no textures.
*/
function ShaderGradient({ className = "" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const gl = canvas.getContext("webgl", {
			antialias: false,
			premultipliedAlpha: true,
			alpha: true
		});
		if (!gl) return;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const vs = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
		const fs = `
      precision highp float;
      uniform vec2 uR; uniform float uT; uniform vec2 uM;
      // hash + noise + fbm
      float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float n(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);
        return mix(mix(h(i),h(i+vec2(1,0)),u.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),u.x),u.y);}
      float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<3;i++){v+=a*n(p);p*=2.02;a*=.5;}return v;}
      void main(){
        vec2 uv=(gl_FragCoord.xy-.5*uR)/uR.y;
        vec2 m=(uM-.5*uR)/uR.y;
        float t=uT*.08;
        vec2 q=vec2(fbm(uv+t),fbm(uv-t+3.7));
        vec2 r=vec2(fbm(uv+q+vec2(1.7,9.2)+t*1.3),fbm(uv+q+vec2(8.3,2.8)-t));
        float f=fbm(uv+r*1.5 + m*.6);
        // biological palette: deep navy → violet → cyan → magenta
        vec3 c1=vec3(.02,.03,.09);
        vec3 c2=vec3(.32,.10,.55);   // violet
        vec3 c3=vec3(.05,.55,.75);   // cyan
        vec3 c4=vec3(.85,.20,.55);   // magenta
        vec3 col=mix(c1,c2,clamp(f*1.2,0.,1.));
        col=mix(col,c3,clamp(length(r)*.6,0.,1.));
        col=mix(col,c4,clamp(pow(f,3.)*1.4,0.,1.));
        // subtle vignette
        col*= 1.-.35*length(uv);
        gl_FragColor=vec4(col,1.);
      }`;
		const mk = (type, src) => {
			const s = gl.createShader(type);
			gl.shaderSource(s, src);
			gl.compileShader(s);
			return s;
		};
		const prog = gl.createProgram();
		gl.attachShader(prog, mk(gl.VERTEX_SHADER, vs));
		gl.attachShader(prog, mk(gl.FRAGMENT_SHADER, fs));
		gl.linkProgram(prog);
		gl.useProgram(prog);
		const buf = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buf);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
			-1,
			-1,
			1,
			-1,
			-1,
			1,
			1,
			1
		]), gl.STATIC_DRAW);
		const p = gl.getAttribLocation(prog, "p");
		gl.enableVertexAttribArray(p);
		gl.vertexAttribPointer(p, 2, gl.FLOAT, false, 0, 0);
		const uR = gl.getUniformLocation(prog, "uR");
		const uT = gl.getUniformLocation(prog, "uT");
		const uM = gl.getUniformLocation(prog, "uM");
		const mouse = {
			x: 0,
			y: 0
		};
		const resize = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 1);
			const w = canvas.clientWidth, h = canvas.clientHeight;
			canvas.width = Math.round(w * dpr * .75);
			canvas.height = Math.round(h * dpr * .75);
			gl.viewport(0, 0, canvas.width, canvas.height);
			mouse.x = canvas.width / 2;
			mouse.y = canvas.height / 2;
		};
		resize();
		const ro = new ResizeObserver(resize);
		ro.observe(canvas);
		const onMove = (e) => {
			const r = canvas.getBoundingClientRect();
			mouse.x = (e.clientX - r.left) * (canvas.width / r.width);
			mouse.y = (r.height - (e.clientY - r.top)) * (canvas.height / r.height);
		};
		window.addEventListener("mousemove", onMove);
		const start = performance.now();
		let raf = 0;
		let visible = true;
		const io = new IntersectionObserver(([e]) => {
			visible = e.isIntersecting;
		}, { threshold: 0 });
		io.observe(canvas);
		const tick = () => {
			if (visible) {
				const t = (performance.now() - start) / 1e3;
				gl.uniform2f(uR, canvas.width, canvas.height);
				gl.uniform1f(uT, reduced ? 0 : t);
				gl.uniform2f(uM, mouse.x, mouse.y);
				gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
			}
			raf = requestAnimationFrame(tick);
		};
		tick();
		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
			io.disconnect();
			window.removeEventListener("mousemove", onMove);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		className,
		"aria-hidden": true
	});
}
var CHARS = "ACGT01{}[]<>/\\|=+*#@$%&";
/**
* Scramble — reveals text with a glitchy cipher pass. Triggers on view.
*/
function Scramble({ text, className = "", speed = 40 }) {
	const [out, setOut] = (0, import_react.useState)(text);
	const ref = (0, import_react.useRef)(null);
	const done = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setOut(text);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (!e.isIntersecting || done.current) return;
				done.current = true;
				let frame = 0;
				const total = Math.ceil(text.length * 1.5);
				const id = setInterval(() => {
					frame++;
					const revealed = Math.floor(frame / total * text.length);
					setOut(text.split("").map((c, i) => {
						if (i < revealed || c === " ") return c;
						return CHARS[Math.floor(Math.random() * 23)];
					}).join(""));
					if (frame >= total) {
						clearInterval(id);
						setOut(text);
					}
				}, speed);
			});
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, [text, speed]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		className,
		children: out
	});
}
/**
* FloatingGallery — infinite two-row image marquee that drifts in opposite
* directions, with cursor-parallax on each tile (mouse tilt + subtle lift).
*/
function FloatingGallery({ items }) {
	const wrap = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = wrap.current;
		if (!el) return;
		if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const tiles = el.querySelectorAll("[data-tile]");
		const onMove = (e) => {
			tiles.forEach((t) => {
				const r = t.getBoundingClientRect();
				const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
				const dx = (e.clientX - cx) / innerWidth;
				const dy = (e.clientY - cy) / innerHeight;
				t.style.setProperty("--rx", `${(-dy * 6).toFixed(2)}deg`);
				t.style.setProperty("--ry", `${(dx * 6).toFixed(2)}deg`);
			});
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		return () => window.removeEventListener("mousemove", onMove);
	}, []);
	const row = (dir, offset) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-6 shrink-0",
		style: {
			animation: `marquee-${dir} 60s linear infinite`,
			marginLeft: offset
		},
		children: [...items, ...items].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			"data-tile": true,
			className: "group relative w-[380px] h-[280px] shrink-0 rounded-2xl overflow-hidden border border-primary/20 surface-glass",
			style: {
				transform: "perspective(1200px) rotateX(var(--rx,0)) rotateY(var(--ry,0))",
				transition: "transform 400ms cubic-bezier(.2,.7,.2,1)"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: it.src,
					alt: it.alt,
					loading: "lazy",
					className: "absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-[1200ms]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-primary/25 to-transparent animate-scan" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "absolute inset-x-0 bottom-0 p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[9px] uppercase tracking-[0.3em] text-primary",
						children: it.tag
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 font-display text-xl leading-tight",
						children: it.caption
					})]
				})
			]
		}, `${dir}-${i}`))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: wrap,
		className: "relative w-full overflow-hidden py-4 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-background to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-background to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-max",
				children: row("l", "0px")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-max",
				children: row("r", "-120px")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes marquee-l { to { transform: translateX(-50%); } }
        @keyframes marquee-r { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      ` })
		]
	});
}
var hero_fusion_default = "/assets/hero-fusion-Du6xzeHV.jpg";
var neuron_circuit_default = "/assets/neuron-circuit-oU7OxDUZ.jpg";
var protein_ai_default = "/assets/protein-ai-DMEm-R-y.jpg";
var synapse_circuit_default = "/assets/synapse-circuit-DbVBDHt-.jpg";
var dna_chrome_default = "/assets/dna-chrome-BjkeFFVg.jpg";
var heart_transformer_default = "/assets/heart-transformer-BlRDRJCD.jpg";
var petri_network_default = "/assets/petri-network-HPtocxz6.jpg";
var brain_dna_default = "/assets/brain-dna-twn91Ht2.jpg";
var GALLERY = [
	{
		src: synapse_circuit_default,
		alt: "Synapse merging with circuit",
		tag: "Synapse × Silicon",
		caption: "Where signals learn to think."
	},
	{
		src: petri_network_default,
		alt: "Petri dish with neural network",
		tag: "In vitro · In silico",
		caption: "Culturing intelligence."
	},
	{
		src: dna_chrome_default,
		alt: "Chrome DNA helix with code",
		tag: "Helix · Bytecode",
		caption: "The genome, compiled."
	},
	{
		src: heart_transformer_default,
		alt: "Heart cell with transformer diagram",
		tag: "Cardio × Attention",
		caption: "Every heartbeat is a token."
	},
	{
		src: brain_dna_default,
		alt: "Translucent brain with DNA",
		tag: "Cognition · Genome",
		caption: "Wet-wired inference."
	},
	{
		src: "/assets/chromosome-mesh-5wV1QBDv.jpg",
		alt: "Chromosomes wrapped in neural mesh",
		tag: "Chromatin · Mesh",
		caption: "Structure is memory."
	}
];
var STATS = [
	{
		k: 15,
		suffix: "",
		l: "Upcoming projects",
		s: "planned across AI, hardware, biotech"
	},
	{
		k: 9,
		suffix: "",
		l: "Launch activities",
		s: "in the BioGenesis event"
	},
	{
		k: 6,
		suffix: "",
		l: "Domains",
		s: "AI · Bio · Health · Robotics"
	},
	{
		k: 0,
		suffix: "∞",
		l: "Curiosity",
		s: "the only real prerequisite"
	}
];
var PILLARS = [
	{
		n: "01",
		t: "Research",
		d: "Small teams, real problems. Papers, prototypes, and public write-ups."
	},
	{
		n: "02",
		t: "Workshops",
		d: "From protein folding to embedded C — practical, hands-on, no gatekeeping."
	},
	{
		n: "03",
		t: "Hackathons",
		d: "Interdisciplinary sprints where CS meets wet-lab thinking."
	},
	{
		n: "04",
		t: "Publications",
		d: "Support for members writing, submitting, and presenting research."
	}
];
var FEATURED = [
	{
		n: "02",
		t: "AI-Powered Drug Discovery",
		tag: "NeuroByte",
		d: "ML-assisted molecular screening for candidate compounds."
	},
	{
		n: "07",
		t: "AI-Driven CRISPR Demo",
		tag: "Genomics",
		d: "Guide-RNA selection augmented by deep learning."
	},
	{
		n: "13",
		t: "Portable ECG Machine",
		tag: "Hardware",
		d: "Compact, affordable cardiac monitoring, engineered on campus."
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden min-h-[100vh] flex items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShaderGradient, { className: "absolute inset-0 h-full w-full opacity-70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 mix-blend-overlay",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_fusion_default,
						alt: "",
						"aria-hidden": true,
						className: "absolute inset-0 w-full h-full object-cover opacity-60 animate-ken-burns"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-lines opacity-25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeuralBg, { className: "absolute inset-0 opacity-30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute right-0 top-0 h-full w-[62%] hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeuroCanvas, { className: "absolute inset-0 h-full w-full" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute right-0 top-0 h-full w-full pointer-events-none md:hidden opacity-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeuroHelix, { className: "h-full w-full" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/25 blur-[120px] animate-aurora" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-accent/20 blur-[120px] animate-aurora",
					style: { animationDelay: "-6s" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-lime/10 blur-[100px] animate-drift" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-[1400px] px-6 py-20 w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary animate-rise",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative flex h-2 w-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-primary animate-pulse-ring" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-primary" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/ VIT Bhopal · Est. 2026 · Recruiting now" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-8 font-display text-[clamp(3rem,10vw,8.5rem)] leading-[0.95] tracking-tighter animate-rise",
								style: { animationDelay: "0.1s" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scramble, {
										text: "We decode",
										className: "text-foreground"
									}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-gradient-animated",
										children: "biology"
									}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scramble, {
										text: "with",
										className: "text-foreground",
										speed: 30
									}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-gradient-animated",
										children: "code"
									}),
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-rise",
								style: { animationDelay: "0.2s" },
								children: "The NeuroByte Society is a student research collective at VIT Bhopal building at the intersection of artificial intelligence, bioinformatics, biotechnology, and healthcare — one experiment at a time."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap items-center gap-4 animate-rise",
								style: { animationDelay: "0.3s" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/event",
									className: "group relative inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground overflow-hidden animate-glow-pulse",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity",
											style: { animation: "shimmer 2s linear infinite" }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative",
											children: "Explore BioGenesis"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative transition-transform group-hover:translate-x-1",
											children: "→"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
									strength: .2,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/projects",
										className: "group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-foreground hover:text-primary transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-foreground/50 group-hover:w-14 group-hover:bg-primary transition-all duration-500" }), "See 15 projects"]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 max-w-xl animate-rise",
								style: { animationDelay: "0.4s" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "surface-glass rounded-xl overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 px-4 py-2 border-b border-border/50",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive/70" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-lime/60" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-primary/70" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
												children: "neurobyte@vitb : ~"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TerminalType, {
										className: "px-4 py-3 font-mono text-xs md:text-sm text-foreground",
										lines: [
											"python fold.py --seq MKVLW... --model esm3",
											"curl -X POST /api/crispr/guides < target.fa",
											"torchrun screen.py --library zinc22 --top-k 128",
											"flash ecg-portable.hex --board stm32-nucleo"
										]
									})]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl",
						children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group border-l border-primary/40 pl-4 hover:border-primary hover:pl-6 transition-all duration-500",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-5xl md:text-6xl text-foreground leading-none",
										children: s.suffix === "∞" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gradient-animated",
											children: "∞"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, { to: s.k })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 font-mono text-[10px] uppercase tracking-widest text-primary",
										children: s.l
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-xs text-muted-foreground",
										children: s.s
									})
								]
							})
						}, s.l))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex flex-col items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "animate-blink",
						children: "scroll"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-8 w-px bg-gradient-to-b from-primary to-transparent" })]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative mx-auto max-w-[1400px] px-6 py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-12 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-widest text-primary sticky top-32",
						children: "[ 01 ] Manifesto"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl md:text-6xl leading-[1.05] tracking-tight",
						children: [
							"Biology is the next",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gradient-bio",
								children: "interface"
							}),
							". Code is the next",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gradient-bio",
								children: "scalpel"
							}),
							". We're the ones learning to hold both."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-6 sm:grid-cols-2 text-muted-foreground text-base leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We aren't waiting for a class to catch up. We build. Diagnostics from ECG signals, drug candidates from transformer models, protein structures rendered in AR, plants monitored by our own boards." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No prerequisites beyond curiosity. If you've written a for-loop or pipetted a reagent, you belong here. The rest we learn — together, in public." })]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative mx-auto max-w-[1400px] px-6 pb-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-12 md:auto-rows-[280px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tilt, {
						max: 5,
						className: "md:col-span-8 md:row-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-full rounded-3xl overflow-hidden surface-glass group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: neuron_circuit_default,
									alt: "A neuron whose dendrites branch into circuit traces and DNA — The NeuroByte Society",
									loading: "lazy",
									width: 1200,
									height: 1200,
									className: "absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1600ms]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-background/90 via-background/20 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 overflow-hidden pointer-events-none",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-primary/15 to-transparent animate-scan" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-full flex flex-col justify-between p-8 md:p-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }), "Neuron × Circuit × Genome"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-display text-4xl md:text-6xl leading-[1] tracking-tight max-w-lg",
										children: [
											"Where ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "italic text-gradient-animated",
												children: "wetware"
											}),
											" meets",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "italic text-gradient-animated",
												children: "weights"
											}),
											"."
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm text-muted-foreground max-w-md",
										children: "Every project sits at a seam — a dendrite becoming a data pipeline, a base pair becoming a token, a heartbeat becoming a feature vector."
									})] })]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tilt, {
						max: 7,
						className: "md:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-full rounded-3xl overflow-hidden surface-glass group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: protein_ai_default,
									alt: "Protein structure overlaid with AI attention maps",
									loading: "lazy",
									width: 1200,
									height: 912,
									className: "absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[1600ms]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-full flex flex-col justify-end p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[9px] uppercase tracking-widest text-primary",
										children: "Protein × Transformer"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "mt-1 font-display text-2xl leading-tight",
										children: "Fold. Predict. Iterate."
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tilt, {
						max: 7,
						className: "md:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-full rounded-3xl overflow-hidden surface-dark border border-primary/30 group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeuroHelix, { className: "absolute inset-0 h-full w-full opacity-90" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-full flex flex-col justify-end p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[9px] uppercase tracking-widest text-primary",
										children: "DNA → Network"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "mt-1 font-display text-2xl leading-tight",
										children: "The morph is the mission."
									})]
								})
							]
						})
					})
				]
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1400px] px-6 pb-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-end justify-between mb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-widest text-primary",
					children: "[ 02 ] What we do"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl md:text-5xl",
					children: "Four pillars, one loop."
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-12 md:auto-rows-[180px]",
				children: PILLARS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					className: `
                ${i === 0 ? "md:col-span-5 md:row-span-2" : ""}
                ${i === 1 ? "md:col-span-7" : ""}
                ${i === 2 ? "md:col-span-4" : ""}
                ${i === 3 ? "md:col-span-3" : ""}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tilt, {
						max: 6,
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-glass rounded-2xl p-8 group hover:border-primary/60 transition-all duration-500 relative overflow-hidden h-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/0 group-hover:bg-primary/30 blur-3xl transition-all duration-700" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
									style: { background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), oklch(0.7 0.25 310 / 0.1), transparent 40%)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex flex-col h-full justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] uppercase tracking-widest text-primary/70",
										children: p.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-3xl md:text-4xl transition-transform duration-500 group-hover:translate-x-1",
										children: p.t
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted-foreground",
										children: p.d
									})] })]
								})
							]
						})
					})
				}, p.n))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative mx-auto max-w-[1400px] px-6 pb-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4 mb-12 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-widest text-primary",
					children: "[ 03 ] Selected work"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl md:text-5xl",
					children: "Three of fifteen."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projects",
					className: "group font-mono text-[11px] uppercase tracking-widest text-primary hover:text-foreground transition-colors inline-flex items-center gap-2",
					children: ["All projects", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "transition-transform group-hover:translate-x-1",
						children: "→"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: FEATURED.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tilt, {
						max: 10,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projects",
							className: `group relative rounded-2xl p-8 min-h-[320px] flex flex-col justify-between overflow-hidden transition-all duration-500
                    ${i === 0 ? "surface-glass" : ""}
                    ${i === 1 ? "surface-dark border border-primary/40" : ""}
                    ${i === 2 ? "surface-glass" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 opacity-10 group-hover:opacity-40 transition-opacity duration-700",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeuralBg, { className: "w-full h-full" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-[10px] uppercase tracking-widest text-primary",
										children: ["Project · ", f.n]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[9px] uppercase tracking-widest px-2 py-1 rounded-full border border-border",
										children: f.tag
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl leading-tight transition-transform duration-500 group-hover:-translate-y-1",
											children: f.t
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm text-muted-foreground",
											children: f.d
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 group-hover:gap-3 transition-all duration-500",
											children: "Read more →"
										})
									]
								})
							]
						})
					})
				}, f.n))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative mx-auto max-w-[1400px] px-6 pb-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative surface-dark rounded-3xl overflow-hidden p-10 md:p-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-lines opacity-40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-[120px] animate-aurora" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-primary/20 blur-[120px] animate-aurora",
						style: { animationDelay: "-4s" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid gap-10 md:grid-cols-2 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[10px] uppercase tracking-widest text-primary flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-lime animate-pulse" }), "Upcoming · Mid-August"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 font-display text-5xl md:text-6xl leading-[1] tracking-tight",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-gradient-bio",
										children: "BioGenesis."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"The launch."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-muted-foreground max-w-md",
								children: "Two hours. Nine activities. One ideation challenge with an 18-month Gemini Pro subscription on the line. A talk by Dr. Suresh Kumar R. S. Food, jamming, mentors, photo booth."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/event",
									className: "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90",
									children: ["See the full lineup", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "transition-transform group-hover:translate-x-1",
										children: "→"
									})]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
									strength: .25,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm hover:bg-secondary hover:border-primary/60 transition-colors",
										children: "Register interest"
									})
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-xs space-y-3",
								children: [
									"01 · Club introduction",
									"02 · BioEvolution challenge",
									"03 · LinkedIn networking",
									"04 · Student benefits",
									"05 · Menstrual health",
									"06 · Mentorship corner",
									"07 · Photo booth",
									"08 · Expert talk",
									"09 · Jamming session"
								].map((line, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: idx * 60,
									y: 8,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 group cursor-default",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border group-hover:bg-primary transition-colors" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground/80 group-hover:text-primary group-hover:-translate-x-1 transition-all duration-300 inline-block",
											children: line
										})]
									})
								}, line))
							})
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative py-32 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-6 mb-12 flex items-end justify-between flex-wrap gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-widest text-primary",
					children: "[ 04 ] Signal archive"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 font-display text-4xl md:text-6xl leading-[1] tracking-tight",
					children: [
						"Six frames from the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gradient-animated",
							children: "frontier"
						}),
						"."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm text-muted-foreground",
					children: "An evolving visual index of the seams we chase — biology becoming code, code becoming biology."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingGallery, { items: GALLERY })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-[90vh] flex items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: brain_dna_default,
						alt: "Translucent brain filled with DNA and code",
						loading: "lazy",
						className: "absolute inset-0 w-full h-full object-cover opacity-60 animate-ken-burns"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-lines opacity-20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mx-auto max-w-[1400px] px-6 py-24 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-widest text-primary",
								children: "[ 05 ] Thesis"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-6 font-display text-5xl md:text-8xl leading-[0.95] tracking-tighter max-w-4xl",
								children: [
									"The next model won't be trained.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"It will be ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-gradient-animated",
										children: "grown"
									}),
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed",
								children: "We treat every project like a cell line — small, curious, mutable. Some die. Some divide. The ones that survive get papers, prototypes, and public write-ups."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid grid-cols-3 gap-6 max-w-2xl",
								children: [
									{
										k: "λ",
										l: "wavelength / research"
									},
									{
										k: "Σ",
										l: "sum / collaboration"
									},
									{
										k: "∇",
										l: "gradient / iteration"
									}
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-l border-primary/40 pl-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-5xl text-gradient-animated",
										children: s.k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
										children: s.l
									})]
								}, s.k))
							})
						] })
					})
				]
			})
		})
	] });
}
//#endregion
export { Home as component };
