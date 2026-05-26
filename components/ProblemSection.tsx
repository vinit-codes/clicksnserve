"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, TrendingUp, X, Check } from "lucide-react";

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 md:py-32 lg:py-40 bg-black relative overflow-hidden border-b border-zinc-800">
      
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20 lg:mb-32 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 lg:mb-10 tracking-tight leading-tight">
            Stop Relying on Generic Agencies.
            <br />
            <span className="text-zinc-500">Upgrade to a Clinical System.</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-zinc-400 font-light">
            We don't post memes. We deploy surgical patient acquisition models.
          </p>
        </motion.article>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 max-w-6xl mx-auto">
          {/* The Old Way */}
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black p-6 md:p-8 lg:p-12 rounded-xl border border-zinc-800 relative overflow-hidden h-full flex flex-col"
          >
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex items-center gap-3 lg:gap-4 mb-6 md:mb-8 pb-4 md:pb-6 border-b border-zinc-800">
                <TrendingDown className="text-zinc-500" size={28} />
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">The "Old Way"</h3>
              </div>
              
              <div className="space-y-4 md:space-y-6 flex-1">
                {[
                  "Generic 'beautiful' posts with no clear call to action.",
                  "Focusing on vanity metrics like clicks and comments.",
                  "Wasting ad spend on low-intent mass audiences.",
                  "Manual lead follow-up that takes hours and drops conversions.",
                  "Agencies that treat your clinic like a local restaurant.",
                  "Zero guarantees on return on ad spend (ROAS)."
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 md:gap-4"
                  >
                    <X className="text-zinc-600 shrink-0 mt-1 flex-none" size={20} />
                    <p className="text-zinc-400 text-base md:text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 md:mt-10 p-4 md:p-6 bg-zinc-900/50 rounded-lg border border-zinc-800 w-full">
                <p className="text-zinc-300 font-medium text-base md:text-lg">Result: Unpredictable Revenue</p>
                <p className="text-zinc-500 mt-1 md:mt-2 text-sm md:text-base">Burned marketing budgets and empty consultation schedules.</p>
              </div>
            </div>
          </motion.article>

          {/* The Clinical System */}
          <motion.article
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900/30 p-6 md:p-8 lg:p-12 rounded-xl border border-emerald-900/50 relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.05)] w-full h-full flex flex-col"
          >
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-emerald-900/20 rounded-full blur-[60px] md:blur-[80px]"></div>
            
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex items-center gap-3 lg:gap-4 mb-6 md:mb-8 pb-4 md:pb-6 border-b border-zinc-800">
                <TrendingUp className="text-emerald-400" size={28} />
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">The "Clinical System"</h3>
              </div>
              
              <div className="space-y-4 md:space-y-6 flex-1">
                {[
                  "Hyper-targeted campaigns for high-margin procedures.",
                  "Focus exclusively on pre-qualified consultation bookings.",
                  "Advanced intent-based targeting for local radius dominance.",
                  "Automated WhatsApp nurturing sequences for immediate engagement.",
                  "Specialized focus on aesthetics, Hair Transplants, and Botox.",
                  "Guaranteed booking performance metrics."
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 md:gap-4"
                  >
                    <Check className="text-emerald-400 shrink-0 mt-1 flex-none" size={20} />
                    <p className="text-zinc-300 text-base md:text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 md:mt-10 p-4 md:p-6 bg-emerald-900/20 rounded-lg border border-emerald-900/50 w-full">
                <p className="text-emerald-400 font-medium text-base md:text-lg">Result: Predictable Patient Flow</p>
                <p className="text-emerald-400/60 mt-1 md:mt-2 text-sm md:text-base">A calendar full of high-intent aesthetic consultations.</p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
