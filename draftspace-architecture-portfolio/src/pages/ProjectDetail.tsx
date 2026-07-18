
import { motion, AnimatePresence } from "motion/react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "../constants/projects";
import { Lang, Translation } from "../types";
import { useEffect, useState, MouseEvent } from "react";

interface ProjectDetailProps {
  lang: Lang;
  t: Translation;
}

export default function ProjectDetail({ lang, t }: ProjectDetailProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS[lang].find(p => p.id === Number(id));
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => 
          prev !== null && prev < project!.images.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => 
          prev !== null && prev > 0 ? prev - 1 : project!.images.length - 1
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, project]);

  if (!project) {
    return (
      <div className="px-8 py-48 text-center uppercase tracking-widest font-bold">
        {t.projectNotFound}
        <div className="mt-8">
          <Link to="/" className="text-xs underline underline-offset-4">{t.returnHome}</Link>
        </div>
      </div>
    );
  }

  // Find next project for some interaction
  const nextProject = PROJECTS[lang].find(p => p.id === (project.id % PROJECTS[lang].length) + 1);

  // Close lightbox
  const closeLightbox = () => setLightboxIndex(null);

  // Next image in lightbox
  const nextImage = (e?: MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => 
      prev !== null && prev < project.images.length - 1 ? prev + 1 : 0
    );
  };

  // Prev image in lightbox
  const prevImage = (e?: MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => 
      prev !== null && prev > 0 ? prev - 1 : project.images.length - 1
    );
  };

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
          <h2 className="text-[48px] font-black uppercase tracking-tighter leading-none max-w-4xl">
            {project.title}
          </h2>
          <div className="flex flex-col md:items-end text-[11px] font-bold uppercase tracking-widest text-[#666] shrink-0">
             <span>{t.selectedWork}</span>
             <span>Ref. DS-{project.id}00</span>
          </div>
        </div>
      </header>

      <div className="px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-24 mb-24">
          <div className="md:col-span-4 space-y-12 border-r border-[#e0e0e0] pr-12">
            <div className="grid grid-cols-2 gap-y-12">
              <div>
                <span className="text-[12px] font-bold uppercase tracking-widest text-[#bbb] block mb-3">{t.projectStats[0]}</span>
                <p className="text-[14px] font-bold uppercase">{project.year}</p>
              </div>
              <div>
                <span className="text-[12px] font-bold uppercase tracking-widest text-[#bbb] block mb-3">{t.projectStats[1]}</span>
                <p className="text-[14px] font-bold uppercase">{project.location}</p>
              </div>
              <div>
                <span className="text-[12px] font-bold uppercase tracking-widest text-[#bbb] block mb-3">{t.projectStats[2]}</span>
                <p className="text-[14px] font-bold uppercase">{project.category}</p>
              </div>
              <div>
                <span className="text-[12px] font-bold uppercase tracking-widest text-[#bbb] block mb-3">{t.projectStats[3]}</span>
                <p className="text-[14px] font-bold uppercase">{t.status[0]}</p>
              </div>
            </div>

            <div className="pt-12 border-t border-[#e0e0e0]">
              <span className="text-[12px] font-bold uppercase tracking-widest text-[#bbb] block mb-6">{t.teamLabel}</span>
              <ul className="text-[14px] font-bold uppercase space-y-2">
                {project.team ? (
                  project.team.map((member, i) => (
                     <li key={i}>{member.role}{member.name ? `: ${member.name}` : ""}</li>
                  ))
                ) : (
                  <>
                    <li>Lead: N. Kim</li>
                    <li>Structural: L. Tran</li>
                    <li>Design: P. Nguyen</li>
                  </>
                )}
              </ul>
            </div>
          </div>
          
          <div className="md:col-span-8">
            <p className="text-[18px] font-bold italic leading-normal text-black mb-16 tracking-tight">
              {project.description}
            </p>
            
            {(project.intent || project.intent2) && (
              <div className="mt-16">
                {project.intent && (
                  <p className="text-[16px] text-[#666] leading-relaxed">
                    {project.intent}
                  </p>
                )}
                {project.intent2 && (
                  <p className="mt-8 text-[16px] text-[#666] leading-relaxed">
                    {project.intent2}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bố cục hình ảnh tự do, lộn xộn nghệ thuật kiểu Blink - Không viền, so le tự nhiên */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-16 md:gap-y-32 mb-32 items-center relative">
          {project.images.map((img, index) => {
            // Định nghĩa bố cục tự do, so le, to nhỏ lộn xộn tuyệt đẹp lấy cảm hứng trực tiếp từ Blink studio
            const layouts = [
              {
                container: "col-span-12 md:col-span-8 md:col-start-1 mb-6 md:mb-12",
                img: "w-full h-auto object-cover"
              },
              {
                container: "col-span-12 md:col-span-4 md:col-start-9 mb-6 md:mt-24",
                img: "w-full h-auto object-cover"
              },
              {
                container: "col-span-12 md:col-span-5 md:col-start-2 mb-6 md:-mt-16",
                img: "w-full h-auto object-cover"
              },
              {
                container: "col-span-12 md:col-span-6 md:col-start-7 mb-6 md:mb-4",
                img: "w-full h-auto object-cover"
              },
              {
                container: "col-span-12 md:col-span-4 md:col-start-1 mb-6 md:-mt-32",
                img: "w-full h-auto object-cover"
              },
              {
                container: "col-span-12 md:col-span-8 md:col-start-5 mb-6 md:mt-12",
                img: "w-full h-auto object-cover"
              },
              {
                container: "col-span-12 md:col-span-10 md:col-start-2 mb-6",
                img: "w-full h-auto object-cover"
              }
            ];
            const layout = layouts[index % layouts.length];

            return (
              <div 
                key={index} 
                className={`${layout.container} overflow-hidden cursor-zoom-in group transition-all duration-300 relative`}
                onClick={() => setLightboxIndex(index)}
              >
                <img 
                  src={img} 
                  alt={`${project.title} - ${index + 1}`} 
                  className={`${layout.img} hover:scale-[1.015] transition-transform duration-700 ease-out`}
                  referrerPolicy="no-referrer"
                />
              </div>
            );
          })}
        </div>

        {nextProject && (
          <Link 
            to={`/projects/${nextProject.id}`}
            className="mt-32 border-t border-black pt-12 flex justify-between items-center group"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#666]">{t.nextProjectLabel}</span>
              <h5 className="text-4xl font-black uppercase tracking-tighter mt-2">{nextProject.title}</h5>
            </div>
            <ArrowUpRight size={48} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
          </Link>
        )}
      </div>

      {/* Lightbox Modal phóng to chuyên nghiệp với Nút Next/Prev/Close và Phím tắt */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md cursor-zoom-out select-none"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-all bg-white/5 hover:bg-white/10 p-3 rounded-full hover:scale-105"
            >
              <X size={24} />
            </button>

            {/* Prev Button */}
            <button 
              onClick={prevImage}
              className="absolute left-6 text-white/70 hover:text-white transition-all bg-white/5 hover:bg-white/10 p-4 rounded-full hover:scale-105"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Button */}
            <button 
              onClick={nextImage}
              className="absolute right-6 text-white/70 hover:text-white transition-all bg-white/5 hover:bg-white/10 p-4 rounded-full hover:scale-105"
            >
              <ChevronRight size={28} />
            </button>

            {/* Main Image Container */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="max-w-[85vw] max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Chặn tắt nhầm khi click vào ảnh
            >
              <img 
                src={project.images[lightboxIndex]} 
                alt={`${project.title} - Fullscreen ${lightboxIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Image Indicators */}
              <div className="mt-4 text-white/50 text-xs font-mono uppercase tracking-widest text-center">
                <span>{lightboxIndex + 1} / {project.images.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
