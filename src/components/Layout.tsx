
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Lang, Translation } from "../types";

interface LayoutProps {
  children: ReactNode;
  lang: Lang;
  setLang: (lang: Lang) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrolled: boolean;
  t: Translation;
}

export function Layout({ children, lang, setLang, isMenuOpen, setIsMenuOpen, scrolled, t }: LayoutProps) {
  return (
    <div className="max-w-[1440px] mx-auto w-full min-h-screen font-sans bg-[#f2f2f2] text-black relative flex flex-col justify-between">
      <div>
        <Navbar 
          lang={lang} 
          setLang={setLang} 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          scrolled={scrolled} 
          t={t} 
        />
        <main className="pt-24 min-h-[calc(100vh-100px)]">
          {children}
        </main>
      </div>
      <Footer lang={lang} setLang={setLang} />
    </div>
  );
}
