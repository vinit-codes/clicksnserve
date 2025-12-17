"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, TrendingUp, X, Check } from "lucide-react";

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-['Oswald'] text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Marketing That Actually
            <br />
            <span className="text-[#FFD700]">Brings Customers.</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We focus on what matters: getting people through your doors.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Other Agencies Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-2xl border-2 border-red-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[60px]"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <TrendingDown className="text-red-500" size={32} />
                <h3 className="text-2xl font-bold text-white">Other Agencies</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Random content with no strategy",
                  "Focus on likes & comments",
                  "Generic templates everyone uses",
                  "No funnel optimization",
                  "Monthly reports with vanity metrics",
                  "You still handle customer inquiries"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <p className="text-white/70">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                <p className="text-red-400 font-semibold">Result: Likes & Comments</p>
                <p className="text-white/50 text-sm mt-1">But empty tables.</p>
              </div>
            </div>
          </motion.div>

          {/* Clicks & Serve Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-2xl border-2 border-[#FFD700]/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/20 rounded-full blur-[60px]"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-[#FFD700]" size={32} />
                <h3 className="text-2xl font-bold text-white">Clicks & Serve</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Data-driven content strategy",
                  "Focus on revenue & reservations",
                  "Custom viral content frameworks",
                  "Complete funnel optimization",
                  "Real-time revenue dashboards",
                  "We handle everything end-to-end"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="text-[#FFD700] flex-shrink-0 mt-1" size={20} />
                    <p className="text-white/90">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-[#FFD700]/10 rounded-lg border border-[#FFD700]/30">
                <p className="text-[#FFD700] font-semibold">Result: Revenue & Reservations</p>
                <p className="text-white/70 text-sm mt-1">Full tables, every night.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
