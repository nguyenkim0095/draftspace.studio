
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Lang, Translation } from "../types";
import { TRANSLATIONS } from "../constants";

interface NavbarProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrolled: boolean;
  t: Translation;
}

export function Navbar({ lang, setLang, isMenuOpen, setIsMenuOpen, scrolled, t }: NavbarProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 max-w-[1440px] mx-auto z-50 transition-all duration-300 px-8 py-8 flex justify-between items-center border-b border-[#e0e0e0] ${
          scrolled ? "bg-[#f2f2f2]/95 backdrop-blur-sm py-6" : "bg-[#f2f2f2]"
        }`}
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hidden md:block font-bold tracking-tight uppercase z-10"
        >
          <Link to="/" style={{ fontSize: "16px" }}>draftspace.studio</Link>
        </motion.div>

        {/* Central Typographic Logo Icon */}
        <Link 
          to="/"
          className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center hover:opacity-75 transition-opacity"
        >
          <img 
            src="https://i.postimg.cc/J0ZwQ4TZ/Draftspace-logo-01.png" 
            alt="Draftspace Logo" 
            className="h-10 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        <div className="flex items-center gap-10 z-10">
          <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.15em] font-bold">
            {["/", "/about", "/services"].map((path, i) => (
              <Link
                key={path}
                to={path}
                className={`hover:text-[#666] transition-colors ${location.pathname === path ? "text-black underline underline-offset-8" : "text-[#666]"}`}
              >
                {t.nav[i]}
              </Link>
            ))}
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#f2f2f2] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {["/", "/about", "/services"].map((path, i) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-black uppercase tracking-tighter"
              >
                {t.nav[i]}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
