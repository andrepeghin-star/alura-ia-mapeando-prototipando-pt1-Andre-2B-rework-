import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Moon, c as Check, i as Sun, l as BookOpen, o as GraduationCap, r as Sunrise, s as Dumbbell, t as Utensils } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CvaKza72.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BLOCKS = [
	{
		id: "manha",
		title: "Manhã",
		time: "5:30 – 7:00",
		items: [
			"Acordar",
			"Água e alongamento",
			"Café da manhã",
			"Mochila pronta",
			"Sair de casa"
		]
	},
	{
		id: "escola",
		title: "Escola",
		time: "7:00 – 12:00",
		items: [
			"Primeira aula",
			"Segunda aula",
			"Intervalo",
			"Terceira aula",
			"Voltar pra casa"
		]
	},
	{
		id: "almoco",
		title: "Almoço",
		time: "12:00 – 13:30",
		items: [
			"Almoçar",
			"Descansar",
			"Separar o material"
		]
	},
	{
		id: "calistenia",
		title: "Calistenia",
		time: "14:00 – 15:30",
		items: [
			"Aquecimento",
			"Pull-ups e push-ups",
			"Core e plank",
			"Alongamento"
		]
	},
	{
		id: "estudo",
		title: "Estudo",
		time: "16:00 – 18:30",
		items: [
			"Revisar o dia",
			"Pomodoro",
			"Exercícios",
			"Anotar dúvidas"
		]
	},
	{
		id: "noite",
		title: "Noite",
		time: "19:00 – 22:00",
		items: [
			"Jantar",
			"Lazer curto",
			"Organizar amanhã",
			"Dormir"
		]
	}
];
var TOTAL = BLOCKS.reduce((n, b) => n + b.items.length, 0);
function itemKey(blockId, index) {
	return `${blockId}:${index}`;
}
var ICONS = {
	manha: Sunrise,
	escola: GraduationCap,
	almoco: Utensils,
	calistenia: Dumbbell,
	estudo: BookOpen,
	noite: Moon
};
var STORAGE = "fluxo-checks";
var THEME = "fluxo-theme";
function loadChecks() {
	try {
		const raw = localStorage.getItem(STORAGE);
		if (!raw) return {};
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === "object" ? parsed : {};
	} catch {
		return {};
	}
}
function FluxoApp() {
	const [checks, setChecks] = (0, import_react.useState)({});
	const [light, setLight] = (0, import_react.useState)(false);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [confirmClear, setConfirmClear] = (0, import_react.useState)(false);
	const [dateLabel, setDateLabel] = (0, import_react.useState)("Hoje");
	(0, import_react.useEffect)(() => {
		setChecks(loadChecks());
		const isLight = localStorage.getItem(THEME) === "light";
		setLight(isLight);
		document.documentElement.classList.toggle("light", isLight);
		const raw = new Intl.DateTimeFormat("pt-BR", {
			weekday: "long",
			day: "numeric",
			month: "long"
		}).format(/* @__PURE__ */ new Date());
		setDateLabel(raw.charAt(0).toUpperCase() + raw.slice(1));
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(STORAGE, JSON.stringify(checks));
	}, [checks, ready]);
	const done = (0, import_react.useMemo)(() => Object.values(checks).filter(Boolean).length, [checks]);
	const pct = TOTAL === 0 ? 0 : Math.round(done / TOTAL * 100);
	function toggleTheme() {
		const next = !light;
		setLight(next);
		document.documentElement.classList.toggle("light", next);
		localStorage.setItem(THEME, next ? "light" : "dark");
	}
	function toggleItem(key) {
		setChecks((prev) => ({
			...prev,
			[key]: !prev[key]
		}));
		setConfirmClear(false);
	}
	function clearDay() {
		if (!confirmClear) {
			setConfirmClear(true);
			return;
		}
		setChecks({});
		setConfirmClear(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stage",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ambient",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "orb orb-a" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "orb orb-b" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "orb orb-c" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "topbar",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mark",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mark-glyph",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sunrise, {
								size: 20,
								strokeWidth: 2.2
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "kicker",
							children: "Rotina"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "word",
							children: "Fluxo"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "icon-btn",
						onClick: toggleTheme,
						"aria-label": light ? "Tema escuro" : "Tema claro",
						children: light ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { size: 18 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "hero",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Seu dia, em vidro." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: dateLabel }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass progress-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "ring",
								style: { ["--p"]: pct },
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [pct, "%"] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "progress-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
										done,
										" de ",
										TOTAL,
										" feitos"
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Escola de manhã. Calistenia à tarde." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "track",
										style: { ["--p"]: pct },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
									})
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "blocks",
					"aria-label": "Rotina do dia",
					children: BLOCKS.map((block) => {
						const Icon = ICONS[block.id] ?? Sunrise;
						const finished = block.items.filter((_, i) => checks[itemKey(block.id, i)]).length;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "glass block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "block-head",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "block-ico",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "block-title",
										children: block.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "block-time",
										children: block.time
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: finished === block.items.length ? "chip full" : "chip",
										children: [
											finished,
											"/",
											block.items.length
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "list",
								children: block.items.map((item, i) => {
									const key = itemKey(block.id, i);
									const on = Boolean(checks[key]);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "row",
										role: "checkbox",
										"aria-checked": on,
										onClick: () => toggleItem(key),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "box",
											"aria-hidden": "true",
											children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
												size: 14,
												strokeWidth: 3
											}) : null
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "label",
											children: item
										})]
									}) }, key);
								})
							})]
						}, block.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "footer-row",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: confirmClear ? "text-btn warn" : "text-btn",
						onClick: clearDay,
						children: confirmClear ? "Confirmar limpar o dia" : "Limpar o dia"
					})
				})
			]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FluxoApp, {});
}
//#endregion
export { Home as component };
