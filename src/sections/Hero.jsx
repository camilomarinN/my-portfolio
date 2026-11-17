import { useLang } from "../i18n/LanguageContext";
import { frontendItems } from "../i18n/translations";
import SectionTitle from "../components/SectionTitle";
import { cardBase } from "../components/ui";
import "../styles/hero.css";

export default function Hero() {
  const { lang, t } = useLang();

  return (
    <section className="bg-black px-5 pt-10 pb-6">
      {/* key={lang} remonta el bloque y dispara el fade al cambiar de idioma */}
      <div key={lang} className="lang-fade">
        {/* Intro */}
        <div className={`${cardBase} max-w-[900px] mx-auto mb-16 p-6 text-left`}>
          <span className="inline-block font-mono text-[0.7rem] font-bold tracking-widest text-accent border border-accent/40 rounded px-2 py-0.5 mb-3">
            {t.intro.lang}
          </span>
          <p className="m-0 text-[0.95rem] leading-7 text-white/85">
            {t.intro.html.map((part, i) =>
              typeof part === "string" ? (
                part
              ) : (
                <strong key={i} className="text-white">
                  {part.b}
                </strong>
              )
            )}
          </p>
        </div>

        {/* About me */}
        <div className="max-w-[1100px] mx-auto">
          <SectionTitle>{t.about.title}</SectionTitle>
          <div className="flex flex-wrap justify-center gap-4">
            {t.about.items.map((item, i) => (
              <div
                key={i}
                className={`${cardBase} flex flex-col items-center gap-3 p-5 text-center w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent/70" />
                <p className="text-white/80 text-sm leading-6 m-0">{item}</p>
              </div>
            ))}

            <div className={`${cardBase} flex flex-col items-center gap-3 p-5 text-center w-full`}>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/70" />
              <p className="text-white/80 text-sm leading-6 m-0">{t.about.frontendIntro}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {frontendItems.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1 rounded-full border border-accent/30 text-accent bg-accent/5"
                  >
                    {tech}
                  </span>
                ))}
                <span className="text-xs px-3 py-1 rounded-full border border-white/15 text-white/55 italic">
                  {t.about.frontendMore}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
