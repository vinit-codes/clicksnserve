"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Rocket, TrendingUp } from "lucide-react";

export default function WebsiteSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Globe,
      title: "SEO Optimized",
      description: "Rank on Google and attract organic traffic"
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Perfect experience on every device"
    },
    {
      icon: Rocket,
      title: "Lightning Fast",
      description: "Sub-2s load times guaranteed"
    },
    {
      icon: TrendingUp,
      title: "Conversion Focused",
      description: "Built to capture leads and drive bookings"
    }
  ];

  return (
    <section id="services" ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.1)_1px,transparent_1px)] bg-size-[50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass p-12 rounded-3xl border-2 border-[#FFD700]/30 relative overflow-hidden"
        >
          {/* Glow Effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/20 rounded-full blur-[120px]"></div>
          
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="inline-block px-4 py-2 bg-[#FFD700]/20 rounded-full text-[#FFD700] font-semibold text-sm mb-6">
                    DIGITAL INFRASTRUCTURE
                  </div>
                  
                  <h2 className="font-['Oswald'] text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                    Need a Conversion-Focused
                    <br />
                    <span className="text-[#FFD700]">Website?</span>
                  </h2>
                  
                  <p className="text-xl text-white/70 mb-8">
                    High-Performance Restaurant Website Development that turns visitors into customers.
                  </p>

                  {/* Price Tag */}
                  <div className="inline-flex items-end gap-3 mb-8 p-6 bg-black/50 rounded-2xl border border-[#FFD700]/30">
                    <span className="text-5xl font-bold text-[#FFD700]">₹15,000</span>
                    <span className="text-white/60 text-lg mb-2">One-time</span>
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 215, 0, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFC700] transition-all shadow-lg shadow-[#FFD700]/20"
                  >
                    Get Your Website
                  </motion.a>
                </motion.div>
              </div>

              {/* Right Content - Features Grid */}
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="glass p-6 rounded-xl border border-white/10 hover:border-[#FFD700]/30 transition-all"
                    >
                      <Icon className="text-[#FFD700] mb-4" size={32} />
                      <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                      <p className="text-white/60 text-sm">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Feature List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <div className="flex flex-wrap gap-4 justify-center text-sm text-white/60">
                {[
                  "Online Menu Integration",
                  "Reservation System",
                  "Google Maps Integration",
                  "Social Media Links",
                  "Photo Gallery",
                  "Contact Forms",
                  "30-Day Support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
                    <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
