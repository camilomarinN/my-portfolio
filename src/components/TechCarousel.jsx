import { useCallback, useEffect, useRef, useState } from "react";
import {
  SiDjango,
  SiDotnet,
  SiTailwindcss,
  SiOracle,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiClaude,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { useLang } from "../i18n/LanguageContext";
import "../styles/techCarousel.css";

import JavaLogo from "../assets/icons/JavaLogo.png";
import SpringLogo from "../assets/icons/SpringbootLogo.png";
import MyBatisLogo from "../assets/icons/MyBatisLogo.png";
import MysqlLogo from "../assets/icons/MysqlLogo.png";
import ReactLogo from "../assets/icons/ReactLogo.png";
import HtmlLogo from "../assets/icons/htmlLogo.png";
import CssLogo from "../assets/icons/cssLogo.png";
import JsLogo from "../assets/icons/jsLogo.png";
import GitLogo from "../assets/icons/GitLogo.png";

// level: advanced | intermediate | basic | daily   (se traduce desde translations.js)
// Cada tecnología usa un PNG (src) o un ícono de react-icons (Icon + color).
const techs = [
  {
    name: "Java",
    src: JavaLogo,
    level: "advanced",
    desc: {
      es: "Mi lenguaje principal: aplicaciones web y microservicios empresariales.",
      en: "My main language: enterprise web applications and microservices.",
    },
  },
  {
    name: "Spring Boot",
    src: SpringLogo,
    level: "advanced",
    desc: {
      es: "APIs REST y microservicios desplegados en AWS.",
      en: "REST APIs and microservices deployed on AWS.",
    },
  },
  {
    name: "MyBatis",
    src: MyBatisLogo,
    level: "advanced",
    desc: {
      es: "Integración de aplicaciones Java con bases de datos Oracle y MySQL.",
      en: "Integrating Java applications with Oracle and MySQL databases.",
    },
  },
  {
    name: "Django REST",
    Icon: SiDjango,
    color: "#44B78B",
    level: "intermediate",
    desc: {
      es: "API de Hungaro's Debts Management, sobre Oracle y consumida desde React.",
      en: "API for Hungaro's Debts Management, on Oracle and consumed from React.",
    },
  },
  {
    name: "ASP.NET Core",
    Icon: SiDotnet,
    color: "#8B6CF0",
    level: "intermediate",
    desc: {
      es: "ReservasApp: sistema de reservas en C# con MVC.",
      en: "ReservasApp: a reservation system in C# with MVC.",
    },
  },
  {
    name: "React",
    src: ReactLogo,
    level: "intermediate",
    desc: {
      es: "React + Vite en Hungaro's Debts Management y en este portafolio.",
      en: "React + Vite in Hungaro's Debts Management and in this portfolio.",
    },
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    color: "#06B6D4",
    level: "intermediate",
    desc: {
      es: "Estilos utilitarios y diseños responsive en mis proyectos React.",
      en: "Utility-first styling and responsive layouts in my React projects.",
    },
  },
  {
    name: "JavaScript",
    src: JsLogo,
    level: "intermediate",
    desc: {
      es: "Interactividad en el frontend, junto a React.",
      en: "Frontend interactivity, alongside React.",
    },
  },
  {
    name: "Oracle",
    Icon: SiOracle,
    color: "#F80000",
    level: "advanced",
    desc: {
      es: "Base de datos en proyectos empresariales (con MyBatis) y en Hungaro's.",
      en: "Database in enterprise projects (with MyBatis) and in Hungaro's.",
    },
  },
  {
    name: "MySQL",
    src: MysqlLogo,
    level: "advanced",
    desc: {
      es: "Bases de datos relacionales en proyectos empresariales e integraciones.",
      en: "Relational databases in enterprise projects and integrations.",
    },
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    color: "#47A248",
    level: "basic",
    desc: {
      es: "Persistencia no relacional, como complemento a Oracle y MySQL.",
      en: "Non-relational persistence, complementing Oracle and MySQL.",
    },
  },
  {
    name: "AWS",
    Icon: FaAws,
    color: "#FF9900",
    level: "intermediate",
    desc: {
      es: "APIs REST desplegadas con S3, RDS, Lambda, SQS y CloudWatch.",
      en: "REST APIs deployed with S3, RDS, Lambda, SQS and CloudWatch.",
    },
  },
  {
    name: "Docker",
    Icon: SiDocker,
    color: "#2496ED",
    level: "intermediate",
    desc: {
      es: "Contenerización de aplicaciones y servicios.",
      en: "Containerizing applications and services.",
    },
  },
  {
    name: "Kubernetes",
    Icon: SiKubernetes,
    color: "#326CE5",
    level: "basic",
    desc: {
      es: "Orquestación de contenedores.",
      en: "Container orchestration.",
    },
  },
  {
    name: "Git",
    src: GitLogo,
    level: "advanced",
    desc: {
      es: "Control de versiones con GitHub y Bitbucket en equipos ágiles.",
      en: "Version control with GitHub and Bitbucket in agile teams.",
    },
  },
  {
    name: "HTML5",
    src: HtmlLogo,
    level: "advanced",
    desc: {
      es: "Maquetación semántica de interfaces web.",
      en: "Semantic markup for web interfaces.",
    },
  },
  {
    name: "CSS3",
    src: CssLogo,
    level: "intermediate",
    desc: {
      es: "Estilos responsive con Tailwind CSS y Bootstrap.",
      en: "Responsive styling with Tailwind CSS and Bootstrap.",
    },
  },
  {
    name: "AI Tools",
    Icon: SiClaude,
    color: "#D97757",
    level: "daily",
    desc: {
      es: "Claude Code, GitHub Copilot, ChatGPT y DeepSeek para escribir, depurar y refactorizar.",
      en: "Claude Code, GitHub Copilot, ChatGPT and DeepSeek for writing, debugging and refactoring.",
    },
  },
];

const levelStyles = {
  advanced: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  intermediate: "text-sky-400 border-sky-400/30 bg-sky-400/10",
  basic: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  daily: "text-violet-300 border-violet-300/30 bg-violet-300/10",
};

const N = techs.length;
const HALF = Math.floor(N / 2);
const VISIBLE = 3; // cuántos nodos se ven a cada lado del centro
const SCALES = [1, 0.62, 0.42, 0.3];
const OPACITIES = [1, 0.75, 0.45, 0.22];
const AUTOPLAY_MS = 3000;

// distancia circular de un índice al activo, en el rango [-HALF, HALF]
const offsetOf = (index, active) => ((index - active + N + HALF) % N) - HALF;

export default function TechCarousel() {
  const { lang, t } = useLang();
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false); // hover sobre el nodo central (mouse)
  const [paused, setPaused] = useState(false); // mouse/foco dentro del carrusel
  const [pinned, setPinned] = useState(false); // tap en el nodo central (touch)
  const pointerStart = useRef(null);

  const go = useCallback((dir) => {
    setPinned(false);
    setActive((a) => (a + dir + N) % N);
  }, []);

  const goTo = useCallback((i) => {
    setPinned(false);
    setActive(i);
  }, []);

  // Entrada: los nodos nacen pequeños y se acomodan; el central crece al tamaño estándar
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Autoplay (se detiene con hover/foco/tap y si el usuario prefiere menos movimiento)
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!mounted || paused || pinned || reduce) return;
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [mounted, paused, pinned, go]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  // swipe horizontal
  const onPointerDown = (e) => {
    pointerStart.current = e.clientX;
  };
  const onPointerUp = (e) => {
    if (pointerStart.current === null) return;
    const dx = e.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  };

  const current = techs[active];
  const showInfo = mounted && (hovered || pinned);

  return (
    <div className="w-full max-w-3xl mx-auto select-none">
      <div
        className="carousel-stage relative h-[300px] outline-none"
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label={t.tech.title}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => {
          setPaused(false);
          setHovered(false);
        }}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (pointerStart.current = null)}
      >
        {/* Diálogo flotante con la info de la tecnología central */}
        <div
          aria-live="polite"
          className={`absolute left-1/2 top-0 z-20 w-[min(18rem,90%)] -translate-x-1/2 pointer-events-none transition-all duration-300 ${
            showInfo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="rounded-xl border border-white/15 bg-black/85 backdrop-blur-sm px-4 py-3 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <span className="text-white text-sm font-semibold leading-none">{current.name}</span>
              <span
                className={`text-[0.65rem] font-bold tracking-wide px-2 py-0.5 rounded-full border ${levelStyles[current.level]}`}
              >
                {t.tech.levels[current.level]}
              </span>
            </div>
            <p className="m-0 text-xs leading-5 text-white/70">{current.desc[lang]}</p>
          </div>
          <div className="mx-auto w-2.5 h-2.5 rotate-45 bg-black/85 border-r border-b border-white/15 -mt-1.5" />
        </div>

        {/* Nodos */}
        {techs.map((tech, i) => {
          const o = offsetOf(i, active);
          const abs = Math.abs(o);
          const visible = abs <= VISIBLE;
          const isCenter = o === 0;
          return (
            <button
              key={tech.name}
              type="button"
              className="carousel-item"
              data-abs={abs}
              data-center={isCenter}
              aria-label={tech.name}
              aria-current={isCenter ? "true" : undefined}
              tabIndex={-1}
              disabled={!visible}
              style={{
                "--o": o,
                "--s": mounted && visible ? SCALES[abs] : 0,
                "--op": mounted && visible ? OPACITIES[abs] : 0,
                "--g": isCenter ? 0 : 0.6,
              }}
              onClick={() => (isCenter ? setPinned((p) => !p) : goTo(i))}
              onPointerEnter={(e) => isCenter && e.pointerType === "mouse" && setHovered(true)}
              onPointerLeave={() => isCenter && setHovered(false)}
            >
              {tech.Icon ? (
                <tech.Icon className="w-full h-full p-2" style={{ color: tech.color }} aria-hidden="true" />
              ) : (
                <img src={tech.src} alt="" draggable={false} className="w-full h-full object-contain" />
              )}
            </button>
          );
        })}

        {/* Flechas */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={t.tech.prev}
          className="carousel-arrow left-0"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={t.tech.next}
          className="carousel-arrow right-0"
        >
          ›
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-2">
        {techs.map((tech, i) => (
          <button
            key={tech.name}
            type="button"
            onClick={() => goTo(i)}
            aria-label={tech.name}
            className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
              i === active ? "w-6 bg-white" : "w-1.5 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      <p className="mt-4 text-[0.75rem] tracking-wide text-white/55">
        <span className="hidden pointer-fine:inline">{t.tech.hint}</span>
        <span className="pointer-fine:hidden">{t.tech.hintTouch}</span>
      </p>
    </div>
  );
}
