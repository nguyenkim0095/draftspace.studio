
import { Lang } from "../types";
import { TRANSLATIONS } from "../constants";
import { Instagram } from "lucide-react";

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
          <p className="text-xs font-bold uppercase leading-relaxed whitespace-nowrap">{t.contactInfo.address}</p>
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
      <div className="pt-10 border-t border-[#e0e0e0] flex flex-row justify-between items-center gap-8">
        <div className="text-[10px] font-bold uppercase tracking-widest text-[#888] flex-1">
          © 2026 draftspace Studio.
        </div>
        
        <div className="flex gap-4 items-center justify-end flex-1">
          <a 
            href="https://www.instagram.com/draftspace.studio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black hover:text-[#666] transition-colors p-1"
            aria-label="Instagram"
          >
            <Instagram size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
