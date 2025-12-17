"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, Zap, Crown } from "lucide-react";

const packages = [
  {
    name: "Starter Scale",
    price: "₹20,000",
    period: "/ month",
    description: "Perfect for getting started with professional content",
    icon: Zap,
    features: [
      "2 Professional Shoots",
      "8 Cinematic Videos",
      "Basic Reels Strategy",
      "Content Calendar",
      "Monthly Analytics",
      "Email Support"
    ],
    popular: false,
  },
  {
    name: "Growth Velocity",
    price: "₹25,000",
    period: "/ month",
    description: "The most popular choice for restaurants ready to scale",
    icon: Star,
    features: [
      "3 Professional Shoots",
      "12 Cinematic Videos",
      "Advanced Viral Editing",
      "Hashtag Strategy",
      "Competitor Analysis",
      "Bi-weekly Strategy Calls",
      "Priority Support"
    ],
    popular: true,
  },
  {
    name: "Market Domination",
    price: "₹30,000",
    period: "/ month",
    description: "Complete market dominance for ambitious brands",
    icon: Crown,
    features: [
      "4 Professional Shoots",
      "16 Cinematic Videos",
      "Full Account Management",
      "Paid Ads Integration",
      "Influencer Partnerships",
      "Weekly Strategy Sessions",
      "24/7 Priority Support",
      "Revenue Dashboard Access"
    ],
    popular: false,
  },
];

export default function PricingCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00D9FF]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <br />
        <br />
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-['Oswald'] text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Content & Growth
            <br />
            <span className="text-[#FFD700]">Packages</span>
          </h2>
        <br />
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto mt-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 mb-2">
                    <div className="bg-[#FFD700] text-black px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                      <Star size={16} fill="currentColor" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Card */}
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`glass p-8 rounded-2xl h-full flex flex-col relative overflow-hidden ${
                    pkg.popular
                      ? "border-2 border-[#FFD700]/50 shadow-[0_0_50px_rgba(255,215,0,0.2)]"
                      : "border border-white/10"
                  }`}
                >
                  {/* Glow Effect */}
                  {pkg.popular && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 to-transparent pointer-events-none"></div>
                  )}

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl mb-6 ${
                      pkg.popular ? "bg-[#FFD700]/20" : "bg-white/5"
                    }`}>
                      <Icon className={pkg.popular ? "text-[#FFD700]" : "text-white/70"} size={32} />
                    </div>

                    {/* Package Name */}
                    <h3 className="text-2xl font-bold text-white mb-3">{pkg.name}</h3>
                    <p className="text-white/60 text-sm mb-8 leading-relaxed">{pkg.description}</p>

                    {/* Price */}
                    <div className="mb-8 pb-6 border-b border-white/10">
                      <div className="flex items-end gap-2">
                        <span className="text-5xl font-bold text-white">{pkg.price}</span>
                        <span className="text-white/60 mb-2">{pkg.period}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-8 flex-grow">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check
                            className={`${
                              pkg.popular ? "text-[#FFD700]" : "text-white/70"
                            } shrink-0 mt-1`}
                            size={20}
                          />
                          <span className="text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`block w-full text-center py-4 rounded-lg font-bold transition-all ${
                        pkg.popular
                          ? "bg-[#FFD700] text-black hover:bg-[#FFC700] shadow-lg shadow-[#FFD700]/20"
                          : "bg-white/5 text-white border border-white/20 hover:border-[#FFD700]/50 hover:bg-white/10"
                      }`}
                    >
                      Get Started
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
