
import { motion } from "motion/react";
import { ProjectCard } from "../components/ProjectCard";
import { PROJECTS } from "../constants";
import { Lang, Translation } from "../types";

interface HomeProps {
  lang: Lang;
  t: Translation;
}

export default function Home({ lang, t }: HomeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <header className="px-8 pt-24 pb-24 border-b border-[#e0e0e0]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#666] mb-4 block">
            Da Nang / Tay Ninh / TP.HCM • 2026
          </span>
          <h1 className="text-7xl md:text-[8rem] xl:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter">
            {t.heroTitle.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 flex flex-col md:flex-row justify-between items-start gap-12"
        >
          <p className="max-w-xl text-lg font-medium leading-tight text-[#666]">
            {t.heroSub}
          </p>
          <div className="flex gap-4">
            <div className="flex flex-col text-[10px] uppercase tracking-widest font-bold text-[#666]">
              <span>Berlin, DE</span>
              <span>Hanoi, VN</span>
            </div>
            <div className="w-px h-full bg-[#e0e0e0]" />
          </div>
        </motion.div>
      </header>

      {/* Projects Grid */}
      <section className="px-8 py-16">
        <div className="flex justify-between items-baseline mb-12 border-b border-[#e0e0e0] pb-4">
          <h2 className="text-13px uppercase tracking-[0.2em] font-bold">{t.selectedWorks}</h2>
          <span className="text-[10px] uppercase tracking-[0.1em] text-[#666]">{t.archive}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS[lang].map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
            />
          ))}
        </div>
      </section>
    </motion.div>
  );
}
