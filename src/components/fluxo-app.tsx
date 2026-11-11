import { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  Check,
  Dumbbell,
  GraduationCap,
  Moon,
  Sun,
  Sunrise,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { BLOCKS, TOTAL, itemKey } from "@/lib/routine";

const ICONS: Record<string, LucideIcon> = {
  manha: Sunrise,
  escola: GraduationCap,
  almoco: Utensils,
  calistenia: Dumbbell,
  estudo: BookOpen,
  noite: Moon,
};

const STORAGE = "fluxo-checks";
const THEME = "fluxo-theme";

function loadChecks(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(STORAGE);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, boolean>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function FluxoApp() {
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [light, setLight] = useState(false);
  const [ready, setReady] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);
  const [dateLabel, setDateLabel] = useState("Hoje");

  useEffect(() => {
    setChecks(loadChecks());
    const isLight = localStorage.getItem(THEME) === "light";
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
    const raw = new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }).format(new Date());
    setDateLabel(raw.charAt(0).toUpperCase() + raw.slice(1));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE, JSON.stringify(checks));
  }, [checks, ready]);

  const done = useMemo(
    () => Object.values(checks).filter(Boolean).length,
    [checks],
  );
  const pct = TOTAL === 0 ? 0 : Math.round((done / TOTAL) * 100);

  function toggleTheme() {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem(THEME, next ? "light" : "dark");
  }

  function toggleItem(key: string) {
    setChecks((prev) => ({ ...prev, [key]: !prev[key] }));
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

  return (
    <div className="stage">
      <div className="ambient" aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="orb orb-c" />
      </div>

      <main className="shell">
        <header className="topbar">
          <div className="mark">
            <div className="mark-glyph" aria-hidden="true">
              <Sunrise size={20} strokeWidth={2.2} />
            </div>
            <div>
              <div className="kicker">Rotina</div>
              <div className="word">Fluxo</div>
            </div>
          </div>
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={light ? "Tema escuro" : "Tema claro"}
          >
            {light ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </header>

        <section className="hero">
          <h1>Seu dia, em vidro.</h1>
          <p>{dateLabel}</p>
          <div className="glass progress-card">
            <div className="ring" style={{ ["--p" as string]: pct }} aria-hidden="true">
              <span>{pct}%</span>
            </div>
            <div className="progress-copy">
              <strong>
                {done} de {TOTAL} feitos
              </strong>
              <span>Escola de manhã. Calistenia à tarde.</span>
              <div className="track" style={{ ["--p" as string]: pct }}>
                <i />
              </div>
            </div>
          </div>
        </section>

        <section className="blocks" aria-label="Rotina do dia">
          {BLOCKS.map((block) => {
            const Icon = ICONS[block.id] ?? Sunrise;
            const finished = block.items.filter((_, i) => checks[itemKey(block.id, i)]).length;
            return (
              <article className="glass block" key={block.id}>
                <div className="block-head">
                  <div className="block-ico" aria-hidden="true">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="block-title">{block.title}</div>
                    <div className="block-time">{block.time}</div>
                  </div>
                  <span className={finished === block.items.length ? "chip full" : "chip"}>
                    {finished}/{block.items.length}
                  </span>
                </div>
                <ul className="list">
                  {block.items.map((item, i) => {
                    const key = itemKey(block.id, i);
                    const on = Boolean(checks[key]);
                    return (
                      <li key={key}>
                        <button
                          type="button"
                          className="row"
                          role="checkbox"
                          aria-checked={on}
                          onClick={() => toggleItem(key)}
                        >
                          <span className="box" aria-hidden="true">
                            {on ? <Check size={14} strokeWidth={3} /> : null}
                          </span>
                          <span className="label">{item}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </section>

        <div className="footer-row">
          <button
            type="button"
            className={confirmClear ? "text-btn warn" : "text-btn"}
            onClick={clearDay}
          >
            {confirmClear ? "Confirmar limpar o dia" : "Limpar o dia"}
          </button>
        </div>
      </main>
    </div>
  );
}
