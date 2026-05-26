"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PlayCircle } from "lucide-react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black relative border-b border-zinc-800 w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-tight">
            Proof of <span className="text-zinc-500">Concept</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto font-light">
            Data speaks louder than promises. See the clinical framework in action.
          </p>
        </motion.header>

        {/* Split Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Column: Copy */}
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 md:space-y-8 w-full"
          >
            <div className="inline-block bg-zinc-900 border border-zinc-800 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-zinc-400 text-xs md:text-sm font-medium tracking-wide">
              CASE STUDY: AESTHETICS CLINIC
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              50 Premium Aesthetic Bookings in 7 Days.
            </h3>
            
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
              By deploying our local intent framework combined with surgical meta targeting, we shifted a struggling clinic from acquiring low-intent queries to completely booking out their high-margin procedure calendar.
            </p>
            
            <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4 w-full">
              <li className="flex items-start md:items-center gap-3 md:gap-4 text-zinc-300 text-sm md:text-base">
                <span className="text-emerald-400 font-bold ml-1 md:ml-2 mt-0.5 md:mt-0 shrink-0">✓</span>
                <span className="leading-snug">Zero manual follow-up required by the clinic</span>
              </li>
              <li className="flex items-start md:items-center gap-3 md:gap-4 text-zinc-300 text-sm md:text-base">
                <span className="text-emerald-400 font-bold ml-1 md:ml-2 mt-0.5 md:mt-0 shrink-0">✓</span>
                <span className="leading-snug">$64 Cost-Per-Consultation for Hair Transplants</span>
              </li>
              <li className="flex items-start md:items-center gap-3 md:gap-4 text-zinc-300 text-sm md:text-base">
                <span className="text-emerald-400 font-bold ml-1 md:ml-2 mt-0.5 md:mt-0 shrink-0">✓</span>
                <span className="leading-snug">82% Show-up Rate maintained through automated nurturing</span>
              </li>
            </ul>
          </motion.article>

          {/* Right Column: Browser Mockup Container */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-full overflow-hidden"
          >
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden shadow-2xl relative w-full">
              {/* Browser Header */}
              <div className="bg-black border-b border-zinc-800 px-3 md:px-4 py-2.5 md:py-3 flex items-center gap-2 w-full">
                <div className="flex gap-1 md:gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-zinc-700"></div>
                </div>
                <div className="ml-2 md:ml-4 bg-zinc-800/50 rounded text-[10px] md:text-xs text-zinc-500 px-2 md:px-3 py-1 font-mono flex-1 text-center truncate mx-auto">
                  campaigns.meta.com/results
                </div>
              </div>
              
              {/* Mock Video Embed / Screen Container */}
              <div className="aspect-video bg-zinc-950 flex flex-col items-center justify-center relative group cursor-pointer w-full">
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10" />
                <PlayCircle className="text-zinc-500 group-hover:text-white transition-colors z-20 w-12 h-12 md:w-16 md:h-16" strokeWidth={1} />
                <p className="text-zinc-500 mt-2 md:mt-4 text-xs md:text-sm font-medium tracking-wide z-20 group-hover:text-zinc-300 transition-colors">WATCH SYSTEM BREAKDOWN</p>
                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 z-20">
                  <span className="bg-black/50 backdrop-blur text-white text-[10px] md:text-xs px-2 py-1 rounded">04:20</span>
                </div>
              </div>
            </div>
          </motion.aside>

        </div>
      </div>
    </section>
  );
}
