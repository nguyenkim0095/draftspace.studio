
import { motion } from "motion/react";
import { Lang, Translation } from "../types";

interface AboutProps {
  lang: Lang;
  t: Translation;
}

export default function About({ t }: AboutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-8 py-24"
    >
      {/* Big Header matching Services style */}
      <header className="mb-24">
        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter">{t.profile}</h2>
        <div className="mt-12 flex flex-col md:flex-row gap-12 items-start justify-between">
          <p className="max-w-2xl text-lg font-medium leading-tight text-[#666]">
            {t.bio}
          </p>
          <div className="space-y-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black">
            <div className="flex gap-4 border-b border-[#e0e0e0] pb-2">
              <span className="text-[#bbb]">RIBA</span>
              <span>Chartered 2019</span>
            </div>
            <div className="flex gap-4 border-b border-[#e0e0e0] pb-2">
              <span className="text-[#bbb]">ARB</span>
              <span>Registered 2020</span>
            </div>
          </div>
        </div>
      </header>

      {/* Philosophy Grid matching Services style */}
      <div className="grid grid-cols-1 md:grid-cols-3 border border-[#e0e0e0] bg-white">
        {t.philosophies.map((phi, i) => (
          <div 
            key={i} 
            className={`p-16 ${i !== 2 ? 'md:border-r border-[#e0e0e0]' : ''} hover:bg-black hover:text-white transition-all cursor-default group h-full`}
          >
            <span className="text-[11px] font-bold mb-10 block opacity-40 group-hover:opacity-100 italic font-serif">0{i+1}</span>
            <h4 className="text-xl font-bold uppercase tracking-widest mb-8">{phi.t}</h4>
            <p className="text-sm font-medium leading-relaxed opacity-60 group-hover:opacity-80">
              {phi.d}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-48 max-w-5xl">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#bbb] mb-12 border-b border-[#e0e0e0] pb-4">Team / Culture</h3>
        <div className="mb-20">
          <p className="text-xl md:text-2xl font-serif italic text-[#888] leading-relaxed max-w-3xl relative">
            <span className="text-4xl absolute -left-8 -top-4 opacity-20 font-serif">“</span>
            {t.teamIntroduction}
            <span className="text-4xl absolute -bottom-8 opacity-20 font-serif ml-2">”</span>
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {[0, 1].map((n) => (
             <div key={n} className="aspect-[3/4] bg-white border border-[#e0e0e0] flex items-center justify-center font-bold text-[10px] tracking-widest text-[#bbb]">
               {t.studioImg} / 0{n+1}
             </div>
           ))}
           <div className="col-span-2 flex flex-col justify-end gap-12">
              <p className="text-sm font-medium text-[#666] leading-relaxed max-w-sm">
                {t.team}
              </p>
              <div className="grid grid-cols-2 gap-4 text-[10px] font-bold uppercase tracking-widest text-[#888]">
                <span>• Architects</span>
                <span>• Engineers</span>
                <span>• Strategists</span>
                <span>• Designers</span>
              </div>
           </div>
        </div>
      </div>
      
      <div className="mt-32">
        <h3 className="text-8xl md:text-[12rem] font-black uppercase tracking-tighter opacity-5 select-none">Studio Profile</h3>
      </div>
    </motion.div>
  );
}
