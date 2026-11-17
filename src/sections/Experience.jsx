import { useLang } from "../i18n/LanguageContext";
import SectionTitle from "../components/SectionTitle";
import { cardBase } from "../components/ui";

export default function Experience() {
  const { lang, t } = useLang();
  const e = t.experience;

  return (
    <section className="bg-black px-5 py-16">
      <div key={lang} className="lang-fade max-w-[900px] mx-auto">
        <SectionTitle>{e.title}</SectionTitle>
        <ol className="relative border-l border-white/15 ml-2 pl-8 space-y-10 text-left list-none">
          {e.jobs.map((job) => (
            <li key={job.role} className="relative">
              <span className="absolute -left-[2.45rem] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-black" />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-white m-0">{job.role}</h3>
                <span className="font-mono text-xs text-accent">{job.period}</span>
              </div>
              <p className="m-0 mt-1 text-sm text-white/65">
                {job.company} · {job.place}
              </p>
              <ul className="mt-4 space-y-3 list-none p-0">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-6 text-white/80">
                    <span className="mt-2.5 w-1 h-1 min-w-1 rounded-full bg-white/40" />
                    <span>
                      {b.lead && <strong className="text-white">{b.lead}: </strong>}
                      {b.text}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14 text-left">
          <div className={`${cardBase} p-5`}>
            <h3 className="font-mono text-xs tracking-widest uppercase text-accent m-0 mb-3">
              {e.educationTitle}
            </h3>
            <p className="m-0 mb-2 text-sm font-semibold text-white">{e.education.school}</p>
            <ul className="m-0 p-0 list-none space-y-2">
              {e.education.programs.map((p) => (
                <li key={p.name} className="text-sm leading-5 text-white/75">
                  {p.name} <span className="font-mono text-xs text-white/55">({p.period})</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${cardBase} p-5`}>
            <h3 className="font-mono text-xs tracking-widest uppercase text-accent m-0 mb-3">
              {e.languagesTitle}
            </h3>
            <ul className="m-0 p-0 list-none space-y-2">
              {e.languages.map((l) => (
                <li key={l.name} className="text-sm text-white/75">
                  <strong className="text-white">{l.name}</strong> — {l.level}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${cardBase} p-5`}>
            <h3 className="font-mono text-xs tracking-widest uppercase text-accent m-0 mb-3">
              {e.skillsTitle}
            </h3>
            <div className="flex flex-wrap gap-2">
              {e.skills.map((s) => (
                <span key={s} className="text-xs px-3 py-1 rounded-full border border-white/15 text-white/75 bg-white/5">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
