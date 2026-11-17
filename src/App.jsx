import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Tech from "./sections/Tech";
import Footer from "./sections/Footer";
import LanguageToggle from "./components/LanguageToggle";
import { LanguageProvider } from "./i18n/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <LanguageToggle />
      <Header />
      <div id="separatorDiv"></div>
      <Hero />
      <Experience />
      <Projects />
      <Tech />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
