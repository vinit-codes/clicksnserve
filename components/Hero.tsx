"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <br />
            <div className="glass px-4 py-2 rounded-full text-sm text-[#FFD700] border border-[#FFD700]/30">
              🚀 Restaurant Growth Agency
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-['Oswald'] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight"
          >
            <span className="block text-white">Grow Your</span>
            <span className="block bg-gradient-to-r from-[#FFD700] to-[#FFC700] bg-clip-text text-transparent">
              Restaurant.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/70 max-w-4xl mx-auto leading-relaxed"
          >
            Professional content creation and marketing strategy
            <br />
            for Cafes, Restaurants, & Hotels.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 215, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 hover:bg-[#FFC700] transition-all shadow-lg shadow-[#FFD700]/20"
            >
              Book Strategy Session
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group glass px-8 py-4 rounded-lg font-semibold text-lg text-white border-2 border-white/20 hover:border-[#FFD700]/50 transition-all flex items-center gap-2"
            >
              View Pricing
              <Play size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Social Proof */}
         
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-[#FFD700] rounded-full"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
