"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  MapPin, 
  Filter, 
  MessageSquare, 
  Stethoscope
} from "lucide-react";

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-black relative border-b border-zinc-800 w-full">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-tight">
            Our 3-Step 
            <span className="text-zinc-500 block md:inline"> Patient Engine.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light flex-wrap">
            An engineered approach to local dominance for high-ticket clinical procedures.
          </p>
        </motion.header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto w-full">
          
          {/* Step 1 */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 bg-black border border-zinc-800 rounded-2xl p-6 md:p-8 lg:p-10 hover:border-zinc-700 transition-colors group w-full"
          >
            <div className="h-10 w-10 md:h-12 md:w-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 md:mb-8 border border-zinc-800 group-hover:border-zinc-600 transition-colors shrink-0">
              <MapPin className="text-zinc-300" size={20} />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">1. Hyper-Targeted Local Radius Mapping</h3>
            <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
              We deploy highly targeted meta and search campaigns around a 10-15km radius of your clinic. By analyzing local demographics and intent signals, we position your clinic as the premier authority for high-ticket aesthetics like Hair Transplants and Botox.
            </p>
          </motion.article>

          {/* Aesthetic Detail Box */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex bg-black border border-zinc-800 rounded-2xl p-6 md:p-8 lg:p-10 flex-col justify-center items-center text-center hover:border-emerald-900/50 transition-colors group w-full min-h-[300px]"
          >
           <Stethoscope className="text-zinc-600 group-hover:text-emerald-500 transition-colors mb-4 md:mb-6" size={48} />
           <p className="text-zinc-500 font-medium tracking-widest uppercase text-xs md:text-sm">Clinical Precision</p>
          </motion.article>

          {/* Step 2 */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black border border-zinc-800 rounded-2xl p-6 md:p-8 lg:p-10 hover:border-zinc-700 transition-colors group w-full min-h-[300px]"
          >
            <div className="h-10 w-10 md:h-12 md:w-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 md:mb-8 border border-zinc-800 group-hover:border-zinc-600 transition-colors shrink-0">
              <Filter className="text-zinc-300" size={20} />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">2. Lead Qualification</h3>
            <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
              Not all leads are created equal. We build robust qualification funnels that act as an automated receptionist. Prospects answer key qualifying questions before they ever book a slot, ensuring high intent and financial readiness.
            </p>
          </motion.article>

          {/* Step 3 */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 bg-black border border-zinc-800 rounded-2xl p-6 md:p-8 lg:p-10 hover:border-zinc-700 transition-colors group w-full"
          >
            <div className="h-10 w-10 md:h-12 md:w-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 md:mb-8 border border-zinc-800 group-hover:border-zinc-600 transition-colors shrink-0">
              <MessageSquare className="text-zinc-300" size={20} />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">3. Automated WhatsApp Nurturing</h3>
            <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
              Speed to lead is critical. Our proprietary backend instantly engages new leads via WhatsApp within 60 seconds. We automate the booking workflow, handle common objections, and significantly reduce no-show rates for your premium consulting slots.
            </p>
          </motion.article>

        </div>
      </div>
    </section>
  );
}
