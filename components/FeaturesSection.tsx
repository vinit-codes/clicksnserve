"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Target, 
  TrendingUp, 
  Video, 
  BarChart3, 
  Users, 
  Zap,
  Shield,
  Award
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Strategic Content",
    description: "Every post is designed to drive reservations, not just engagement"
  },
  {
    icon: Video,
    title: "Cinematic Production",
    description: "Professional shoots that make your dishes irresistible"
  },
  {
    icon: TrendingUp,
    title: "Growth Systems",
    description: "Proven frameworks that scale your revenue month over month"
  },
  {
    icon: BarChart3,
    title: "Data-Driven Approach",
    description: "Real-time analytics to track what actually brings customers"
  },
  {
    icon: Users,
    title: "Full-Service Management",
    description: "We handle everything - you focus on serving great food"
  },
  {
    icon: Zap,
    title: "Rapid Execution",
    description: "See results in 30 days or get your money back"
  },
  {
    icon: Shield,
    title: "No Lock-In Contracts",
    description: "Cancel anytime. We earn your business every month"
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Successfully helped restaurants grow with data-driven strategies"
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.1)_1px,transparent_1px)] bg-size-[100px_100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-['Oswald'] text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Why Choose
            <br />
            <span className="text-[#FFD700]">Clicks & Serve?</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We&apos;re not just another marketing agency. We&apos;re your growth partner.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass p-6 rounded-xl border border-white/10 hover:border-[#FFD700]/30 transition-all group"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 bg-[#FFD700]/10 rounded-lg group-hover:bg-[#FFD700]/20 transition-colors">
                  <Icon className="text-[#FFD700]" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-20 glass p-8 rounded-2xl border border-[#FFD700]/20"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#FFD700] mb-2">3+</div>
              <div className="text-white/60">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FFD700] mb-2">100%</div>
              <div className="text-white/60">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FFD700] mb-2">2024</div>
              <div className="text-white/60">Founded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FFD700] mb-2">30 Days</div>
              <div className="text-white/60">To See Results</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
