import { FaGithub } from "react-icons/fa";
import { useLang } from "../i18n/LanguageContext";
import SectionTitle from "../components/SectionTitle";
import { cardBase } from "../components/ui";

const projects = [
  {
    id: "hungaro",
    stack: ["React", "Vite", "Tailwind CSS", "Django REST Framework", "Oracle"],
    repo: "https://github.com/camilomarinN/Hungaro-s-debts-Management",
  },
  {
    id: "reservas",
    stack: ["ASP.NET Core MVC", "C#", "EF Core", "SQL Server"],
    repo: "https://github.com/camilomarinN/ReservasAPP",
  },
  {
    id: "portfolio",
    stack: ["React", "Vite", "Tailwind CSS"],
    repo: "https://github.com/camilomarinN/my-portfolio",
  },
];

export default function Projects() {
  const { lang, t } = useLang();

  return (
    <section className="bg-black px-5 py-16">
      <div key={lang} className="lang-fade max-w-[1100px] mx-auto">
        <SectionTitle>{t.projects.title}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => {
            const text = t.projects.items[p.id];
            return (
              <article key={p.id} className={`${cardBase} flex flex-col p-6 text-left hover:-translate-y-1`}>
                <h3 className="text-lg font-semibold text-white m-0 mb-3">{text.name}</h3>
                <p className="m-0 mb-5 text-sm leading-6 text-white/75 grow">{text.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[0.7rem] px-2.5 py-1 rounded-full border border-accent/30 text-accent bg-accent/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-accent transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  {t.projects.repo}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
