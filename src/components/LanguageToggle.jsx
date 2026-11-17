import { useLang } from "../i18n/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t.toggleLabel}
      className="fixed top-4 right-4 z-50 flex items-center rounded-full border border-white/20 bg-black/60 backdrop-blur-md p-1 text-xs font-bold tracking-widest"
    >
      {["es", "en"].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-3 py-1.5 rounded-full cursor-pointer transition-colors duration-300 ${
            lang === code ? "bg-white text-black" : "text-white/60 hover:text-white"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
