import { useState } from "react";
import '../styles/techOrbits.css';

import JavaLogo    from '../assets/icons/JavaLogo.png';
import MysqlLogo   from '../assets/icons/MysqlLogo.png';
import ReactLogo   from '../assets/icons/ReactLogo.png';
import SpringLogo  from '../assets/icons/SpringbootLogo.png';
import HtmlLogo    from '../assets/icons/htmlLogo.png';
import CssLogo     from '../assets/icons/cssLogo.png';
import JsLogo      from '../assets/icons/jsLogo.png';
import GitLogo     from '../assets/icons/GitLogo.png';

const techs = [
  { src: JavaLogo,   alt: "Java",        level: "Avanzado"     },
  { src: MysqlLogo,  alt: "MySQL",       level: "Avanzado"     },
  { src: ReactLogo,  alt: "React",       level: "Intermedio"   },
  { src: SpringLogo, alt: "Spring Boot", level: "Avanzado"     },
  { src: HtmlLogo,   alt: "HTML5",       level: "Avanzado"     },
  { src: CssLogo,    alt: "CSS3",        level: "Intermedio"   },
  { src: JsLogo,     alt: "JavaScript",  level: "Intermedio"   },
  { src: GitLogo,    alt: "Git",         level: "Avanzado"     },
];

const levelColor = {
  "Avanzado":   "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  "Intermedio": "text-sky-400     border-sky-400/30     bg-sky-400/10",
  "Básico":     "text-amber-400   border-amber-400/30   bg-amber-400/10",
};

export default function TechOrbit() {
  const [tooltip, setTooltip] = useState(null);

  const handleMouseEnter = (e, tech) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      alt: tech.alt,
      level: tech.level,
      x: rect.left + rect.width / 2,
      y: rect.top - 12,
    });
  };

  const handleMouseLeave = () => setTooltip(null);

  return (
    <>
      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-full"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <div className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl bg-black/80 border border-white/15 backdrop-blur-sm shadow-lg">
            <span className="text-white text-sm font-semibold leading-none">{tooltip.alt}</span>
            <span className={`text-[0.65rem] font-bold tracking-wide px-2 py-0.5 rounded-full border ${levelColor[tooltip.level] ?? "text-white/50"}`}>
              {tooltip.level}
            </span>
          </div>
          <div className="mx-auto w-2 h-2 rotate-45 bg-black/80 border-r border-b border-white/15 -mt-1" />
        </div>
      )}

      <section className="relative w-[600px] h-[600px] mx-auto mb-16">
        <div className="orbit-container">
          {techs.map((tech, index) => (
            <div
              key={tech.alt}
              className="orbit-item"
              style={{ "--i": index }}
              onMouseEnter={(e) => handleMouseEnter(e, tech)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={tech.src}
                alt={tech.alt}
                title={tech.alt}
                className="w-14 h-14 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}