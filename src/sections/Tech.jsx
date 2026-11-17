import { useLang } from "../i18n/LanguageContext";
import SectionTitle from "../components/SectionTitle";
import TechCarousel from "../components/TechCarousel";

export default function Tech() {
  const { t } = useLang();

  return (
    <section className="bg-black px-5 py-16">
      <SectionTitle>{t.tech.title}</SectionTitle>
      <TechCarousel />
    </section>
  );
}
