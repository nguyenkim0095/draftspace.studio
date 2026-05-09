
import { motion } from "motion/react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../constants";
import { Lang, Translation } from "../types";
import { useEffect } from "react";

interface ProjectDetailProps {
  lang: Lang;
  t: Translation;
}

export default function ProjectDetail({ lang, t }: ProjectDetailProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS[lang].find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="px-8 py-48 text-center uppercase tracking-widest font-bold">
        Project not found
        <div className="mt-8">
          <Link to="/" className="text-xs underline underline-offset-4">Return Home</Link>
        </div>
      </div>
    );
  }

  // Find next project for some interaction
  const nextProject = PROJECTS[lang].find(p => p.id === (project.id % PROJECTS[lang].length) + 1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-32"
    >
      <header className="px-8 pt-24 pb-12">
        <button 
          onClick={() => navigate(-1)}
          className="text-[10px] font-bold uppercase tracking-widest text-[#bbb] hover:text-black transition-colors flex items-center gap-2 mb-16 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          {t.back}
        </button>

        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none max-w-4xl">
            {project.title}
          </h2>
          <div className="flex flex-col md:items-end text-[11px] font-bold uppercase tracking-widest text-[#666] shrink-0">
             <span>Selected Work</span>
             <span>Ref. DS-{project.id}00</span>
          </div>
        </div>
      </header>

      <div className="px-8">
        <div className="aspect-[21/9] w-full border border-[#e0e0e0] overflow-hidden mb-24 relative group">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-24">
          <div className="md:col-span-4 space-y-12 border-r border-[#e0e0e0] pr-12">
            <div className="grid grid-cols-2 gap-y-12">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#bbb] block mb-3">{t.projectStats[0]}</span>
                <p className="text-xs font-bold uppercase">{project.year}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#bbb] block mb-3">{t.projectStats[1]}</span>
                <p className="text-xs font-bold uppercase">{project.location}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#bbb] block mb-3">{t.projectStats[2]}</span>
                <p className="text-xs font-bold uppercase">{project.category}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#bbb] block mb-3">{t.projectStats[3]}</span>
                <p className="text-xs font-bold uppercase">{t.status[0]}</p>
              </div>
            </div>

            <div className="pt-12 border-t border-[#e0e0e0]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#bbb] block mb-6">Team</span>
              <ul className="text-[11px] font-bold uppercase space-y-2">
                <li>Lead: N. Kim</li>
                <li>Structural: L. Tran</li>
                <li>Design: P. Nguyen</li>
              </ul>
            </div>
          </div>
          
          <div className="md:col-span-8">
            <p className="text-3xl md:text-5xl font-medium leading-[1.1] text-black max-w-3xl mb-16 tracking-tight">
              {project.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="aspect-[4/5] bg-white border border-[#e0e0e0] flex items-center justify-center font-bold text-[10px] tracking-widest text-[#bbb]">DETAIL_DRAWING_01</div>
              <div className="aspect-[4/5] bg-white border border-[#e0e0e0] flex items-center justify-center font-bold text-[10px] tracking-widest text-[#bbb]">DETAIL_DRAWING_02</div>
            </div>

            <div className="mt-24 max-w-2xl">
              <h4 className="text-[11px] font-bold uppercase tracking-widest mb-8 border-b border-[#e0e0e0] pb-4">Architectural Intent</h4>
              <p className="text-lg text-[#666] leading-relaxed">
                Architecture as a practice of investigation. We explore the boundaries between traditional materials and modern forms, focusing on how sunlight interacts with brutalist surfaces throughout the day. This project represents our commitment to minimalist residential interventions.
              </p>
              <p className="mt-8 text-lg text-[#666] leading-relaxed">
                The core of the design lies in its systematic simplicity—reducing cadavers of unnecessary ornamentation to reveal the pure geometry and structural logic of the space.
              </p>
            </div>

            {nextProject && (
              <Link 
                to={`/projects/${nextProject.id}`}
                className="mt-32 border-t border-black pt-12 flex justify-between items-center group"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#666]">Next Project</span>
                  <h5 className="text-4xl font-black uppercase tracking-tighter mt-2">{nextProject.title}</h5>
                </div>
                <ArrowUpRight size={48} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
