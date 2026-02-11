"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Database, Users, TrendingUp } from "lucide-react";

const partnerships = [
  {
    name: "Database Reactivation System",
    icon: Database,
    description:
      "Designed for restaurants that already have customer data but struggle with repeat visits and weekday traffic.",
    points: [
      "POS database clean-up & segmentation",
      "WhatsApp automation setup",
      "Monthly campaign planning",
      "Offer structuring for repeat visits",
      "Performance tracking dashboard",
    ],
    cta: "Book Strategy Call",
  },
  {
    name: "Footfall Growth System",
    icon: Users,
    description:
      "For restaurants that want predictable weekday footfall and stronger local visibility.",
    points: [
      "Menu engineering & high-margin focus",
      "Local radius paid ad campaigns (5–10km)",
      "Hook-based reel strategy & editing",
      "Google Business Profile optimization",
      "Offer psychology & conversion structure",
    ],
    cta: "Request Growth Audit",
  },
  {
    name: "Full Revenue Partnership",
    icon: TrendingUp,
    description:
      "Long-term growth partnership for brands serious about scaling revenue and market positioning.",
    points: [
      "Database + Ads + Content integration",
      "Monthly revenue growth targets",
      "Campaign calendar & execution plan",
      "Staff training for in-house execution",
      "Continuous optimization & reporting",
    ],
    cta: "Apply for Partnership",
  },
];

export default function RevenuePartnerships() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="partnerships"
      ref={ref}
      className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00D9FF]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-['Oswald'] text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Revenue
            <br />
            <span className="text-[#FFD700]">Partnerships</span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            We don’t sell packages. We build revenue systems around your
            restaurant’s margins, market, and growth stage.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {partnerships.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-md flex flex-col"
              >
                <div className="mb-6">
                  <Icon className="text-[#FFD700]" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.name}
                </h3>

                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-white/80 text-sm flex items-start gap-2"
                    >
                      <span className="text-[#FFD700] mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 border border-white/20 rounded-lg text-white hover:border-[#FFD700] hover:text-[#FFD700] transition-all duration-300"
                >
                  {item.cta}
                  <ArrowRight size={18} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
