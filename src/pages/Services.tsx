
import { motion } from "motion/react";
import { Lang, Translation } from "../types";

interface ServicesProps {
  lang: Lang;
  t: Translation;
}

export default function Services({ t }: ServicesProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-8 py-24"
    >
      <header className="mb-24">
        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter">Services</h2>
        <p className="mt-8 max-w-2xl text-lg font-medium text-[#666]">
          From conceptual modeling to technical execution, we provide comprehensive architectural solutions for complex environments.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 border border-[#e0e0e0] bg-white">
        {t.serviceDetails.map((service, i) => (
          <div 
            key={service.t} 
            className={`p-16 ${i !== 2 ? 'md:border-r border-[#e0e0e0]' : ''} hover:bg-black hover:text-white transition-all cursor-default group h-full`}
          >
            <span className="text-[11px] font-bold mb-10 block opacity-40 group-hover:opacity-100 italic font-serif">0{i+1}</span>
            <h4 className="text-xl font-bold uppercase tracking-widest mb-8">{service.t}</h4>
            <p className="text-sm font-medium leading-relaxed opacity-60 group-hover:opacity-80">
              {service.d}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-48">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#bbb] mb-12 border-b border-[#e0e0e0] pb-4">Other Services / Project Parallel</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16">
          {t.otherServices.map((service, i) => (
            <div key={i} className="md:pr-12">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6">{service.t}</h4>
              <p className="text-xs font-medium text-[#666] leading-relaxed italic opacity-80 border-l-2 border-[#e0e0e0] pl-6">
                {service.d}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="p-12 border border-[#e0e0e0] bg-white">
          <h5 className="text-[11px] font-bold uppercase tracking-widest mb-6">Process 01 / Strategy</h5>
          <p className="text-sm text-[#666] leading-relaxed">We begin every project with deep site analysis and programmatic optimization to ensure the structural integrity matches the functional requirements.</p>
        </div>
        <div className="p-12 border border-[#e0e0e0] bg-white">
          <h5 className="text-[11px] font-bold uppercase tracking-widest mb-6">Process 02 / Execution</h5>
          <p className="text-sm text-[#666] leading-relaxed">Our execution phase involves precise documentation and coordination with high-standard engineering teams to deliver uncompromising architecture.</p>
        </div>
      </div>
    </motion.div>
  );
}
