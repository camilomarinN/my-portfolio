import { FaEnvelope } from "react-icons/fa";
import { useLang } from "../i18n/LanguageContext";
import { EMAIL } from "../components/ui";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 px-5 py-12">
      <p className="m-0 mb-5 text-lg font-semibold text-white">{t.footer.cta}</p>
      <a
        href={`mailto:${EMAIL}`}
        className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-black hover:brightness-110 transition"
      >
        <FaEnvelope /> {EMAIL}
      </a>
      <p className="mt-10 mb-0 text-sm text-white/60">
        &copy; Camilo Marín Naranjo <span>{year}</span>, {t.footer.rights}
      </p>
    </footer>
  );
}
