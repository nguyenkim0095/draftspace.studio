import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ProjectDetail from "./pages/ProjectDetail";

import { Lang } from "./types";
import { TRANSLATIONS } from "./constants";

export default function App() {
  const [lang, setLang] = useState<Lang>("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const t = TRANSLATIONS[lang];

  return (
    <Layout 
      lang={lang} 
      setLang={setLang} 
      isMenuOpen={isMenuOpen} 
      setIsMenuOpen={setIsMenuOpen} 
      scrolled={scrolled} 
      t={t}
    >
      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route path="/" element={<Home lang={lang} t={t} />} />
          <Route path="/about" element={<About lang={lang} t={t} />} />
          <Route path="/services" element={<Services lang={lang} t={t} />} />
          <Route path="/projects/:id" element={<ProjectDetail lang={lang} t={t} />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
