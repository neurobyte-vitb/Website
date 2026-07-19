import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/fx-CLjkDqSi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CursorSpotlight() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(pointer: coarse)").matches) return;
		const el = ref.current;
		if (!el) return;
		let raf = 0;
		let x = window.innerWidth / 2;
		let y = window.innerHeight / 2;
		const onMove = (e) => {
			x = e.clientX;
			y = e.clientY;
			if (!raf) raf = requestAnimationFrame(() => {
				el.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
				raf = 0;
			});
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		return () => {
			window.removeEventListener("mousemove", onMove);
			if (raf) cancelAnimationFrame(raf);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		"aria-hidden": true,
		className: "pointer-events-none fixed top-0 left-0 z-[5] h-[600px] w-[600px] rounded-full opacity-60 mix-blend-screen hidden md:block",
		style: {
			background: "radial-gradient(circle, oklch(0.82 0.18 200 / 0.18) 0%, oklch(0.7 0.25 310 / 0.08) 40%, transparent 70%)",
			transform: "translate3d(-1000px, -1000px, 0)",
			transition: "opacity 300ms ease"
		}
	});
}
function ScrollProgress() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const el = ref.current;
		if (!el) return;
		let raf = 0;
		const onScroll = () => {
			if (raf) return;
			raf = requestAnimationFrame(() => {
				const h = document.documentElement;
				const scrolled = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
				el.style.transform = `scaleX(${scrolled})`;
				raf = 0;
			});
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
			if (raf) cancelAnimationFrame(raf);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			"aria-hidden": true,
			className: "h-full origin-left",
			style: {
				background: "linear-gradient(90deg, oklch(0.82 0.18 200), oklch(0.7 0.25 310), oklch(0.88 0.2 140))",
				transform: "scaleX(0)",
				boxShadow: "0 0 12px oklch(0.82 0.18 200 / 0.6)"
			}
		})
	});
}
function Reveal({ children, delay = 0, className = "", as: As = "div", y = 24 }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || shown) return;
		if (typeof IntersectionObserver === "undefined") {
			setShown(true);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				setShown(true);
				io.disconnect();
			}
		}, {
			rootMargin: "0px 0px -10% 0px",
			threshold: .05
		});
		io.observe(el);
		return () => io.disconnect();
	}, [shown]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
		ref,
		className,
		style: {
			opacity: shown ? 1 : 0,
			transform: shown ? "translate3d(0,0,0)" : `translate3d(0, ${y}px, 0)`,
			transition: `opacity 700ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 800ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
			willChange: "opacity, transform"
		},
		children
	});
}
function Tilt({ children, className = "", max = 8, glare = true }) {
	const ref = (0, import_react.useRef)(null);
	const raf = (0, import_react.useRef)(0);
	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const px = (e.clientX - rect.left) / rect.width;
		const py = (e.clientY - rect.top) / rect.height;
		const rx = (py - .5) * -2 * max;
		const ry = (px - .5) * 2 * max;
		if (raf.current) cancelAnimationFrame(raf.current);
		raf.current = requestAnimationFrame(() => {
			el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
			el.style.setProperty("--mx", `${px * 100}%`);
			el.style.setProperty("--my", `${py * 100}%`);
		});
	};
	const onLeave = () => {
		const el = ref.current;
		if (!el) return;
		el.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		className: `relative transition-transform duration-300 ease-out ${className}`,
		style: { transformStyle: "preserve-3d" },
		children: [children, glare && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity duration-500",
			style: { background: "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), oklch(0.82 0.18 200 / 0.15), transparent 50%)" }
		})]
	});
}
function Magnetic({ children, className = "", strength = .35 }) {
	const ref = (0, import_react.useRef)(null);
	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const x = (e.clientX - rect.left - rect.width / 2) * strength;
		const y = (e.clientY - rect.top - rect.height / 2) * strength;
		el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
	};
	const onLeave = () => {
		const el = ref.current;
		if (el) el.style.transform = "translate3d(0,0,0)";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		className: `inline-block transition-transform duration-300 ease-out ${className}`,
		children
	});
}
function CountUp({ to, duration = 1600, suffix = "", className = "" }) {
	const [n, setN] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		let started = false;
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting && !started) {
				started = true;
				const start = performance.now();
				const tick = (t) => {
					const p = Math.min(1, (t - start) / duration);
					const eased = 1 - Math.pow(1 - p, 3);
					setN(Math.round(to * eased));
					if (p < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
				io.disconnect();
			}
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, [to, duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className,
		children: [n.toString().padStart(String(to).length, "0"), suffix]
	});
}
//#endregion
export { ScrollProgress as a, Reveal as i, CursorSpotlight as n, Tilt as o, Magnetic as r, CountUp as t };
