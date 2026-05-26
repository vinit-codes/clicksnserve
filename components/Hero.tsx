"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-zinc-800">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-[120px] animate-pulse desktop-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[120px] animate-pulse delay-1000 desktop-float"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 lg:space-y-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <div className="bg-zinc-900/50 backdrop-blur-sm px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base text-zinc-300 border border-zinc-800 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              ✨ Premium Clinical Performance Marketing
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight"
          >
            <span className="block">We Fill Your Dermatology Clinic With</span>
            <span className="block bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
              High-Ticket Aesthetic Patients. Guaranteed.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl text-zinc-400 max-w-4xl lg:max-w-5xl mx-auto leading-relaxed font-light"
          >
            A scalable system generating pre-qualified consultations for Hair Transplants & Botox
            <br className="hidden lg:block" />
            without relying on unpredictable generic marketing.
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 pt-8 lg:pt-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white text-black px-8 py-4 lg:px-10 lg:py-5 rounded-md font-semibold text-lg lg:text-xl flex items-center gap-2 hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              Apply for Partnership
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-zinc-900/50 backdrop-blur-sm px-8 py-4 lg:px-10 lg:py-5 rounded-md font-semibold text-lg lg:text-xl text-white border border-zinc-700 hover:border-zinc-500 transition-all flex items-center gap-2"
            >
              View System Architecture
              <Play size={20} className="group-hover:translate-x-1 transition-transform lg:size-6" />
            </motion.a>
          </motion.div>
        </motion.article>
      </div>
    </header>
  );
}
