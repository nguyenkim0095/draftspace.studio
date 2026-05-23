
import { Lang } from "../types";
import { TRANSLATIONS } from "../constants";

interface FooterProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export function Footer({ lang, setLang }: FooterProps) {
  const t = TRANSLATIONS[lang];
  
  return (
    <footer className="bg-[#f2f2f2] border-t border-[#e0e0e0] px-8 pt-20 pb-10">
      {/* Contact Info Row */}
      <div className="flex flex-col md:flex-row justify-between gap-12 mb-16 items-start">
        <div className="flex-1">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#888] block mb-2">{t.locationLabel}</span>
          <p className="text-xs font-bold uppercase leading-relaxed max-w-xs">{t.contactInfo.address}</p>
        </div>
        <div className="flex-1">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#888] block mb-2">{t.emailLabel}</span>
          <p className="text-xs font-bold uppercase underline underline-offset-4 decoration-1">{t.contactInfo.email}</p>
        </div>
        <div className="flex-1">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#888] block mb-2">{t.phoneLabel}</span>
          <p className="text-xs font-bold uppercase">{t.contactInfo.phone}</p>
        </div>
      </div>

      {/* Bottom Tier: Stats, Socials & Config */}
      <div className="pt-10 border-t border-[#e0e0e0] flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[10px] font-bold uppercase tracking-widest text-[#888] flex-1">
          © 2026 draftspace Studio.
      
        </div>
        
        <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] flex-1 justify-center">
          <a href="https://www.instagram.com/draftspace.studio" target="_blank" rel="noopener noreferrer" className="hover:text-[#666] transition-colors">Instagram</a>
        </div>
        
        <div className="flex gap-4 text-[10px] font-bold flex-1 justify-end">
          <button 
            onClick={() => setLang("VI")} 
            className={`${lang === "VI" ? "text-black" : "text-[#888]"} cursor-pointer hover:text-black transition-colors text-[9px] tracking-widest`}
          >
            VN
          </button>
          <div className="w-px h-3 bg-[#e0e0e0] my-auto" />
          <button 
            onClick={() => setLang("EN")} 
            className={`${lang === "EN" ? "text-black" : "text-[#888]"} cursor-pointer hover:text-black transition-colors text-[9px] tracking-widest`}
          >
            EN
          </button>
        </div>
      </div>
    </footer>
  );
}
