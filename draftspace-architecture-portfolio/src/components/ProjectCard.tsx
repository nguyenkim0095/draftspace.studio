
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ProjectData } from "../types";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: ProjectData;
  key?: string | number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.id}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="group cursor-pointer flex flex-col gap-5 text-black"
      >
        <div className="relative aspect-square overflow-hidden border border-[#e0e0e0] bg-[#f2f2f2]">
          <img
            src={project.images[0]}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/20 to-transparent">
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
               View Project <ArrowRight size={10} />
             </span>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-balance">
              {project.title}
            </h3>
            <p className="text-[11px] font-medium text-[#666] mt-1">
              {project.category}
            </p>
          </div>
          <div className="text-right">
            <div className="text-[11px] font-bold">{project.year}</div>
            <div className="text-[10px] text-[#666] font-medium mt-1 uppercase whitespace-nowrap">{project.location}</div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
