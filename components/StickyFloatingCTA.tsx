"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";

export default function StickyFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-8 right-8 z-50"
        >
          {!isExpanded ? (
            <motion.button
              onClick={() => setIsExpanded(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="group relative w-16 h-16 bg-[#FFD700] rounded-full shadow-2xl shadow-[#FFD700]/40 flex items-center justify-center"
            >
              <Phone className="text-black" size={28} />
              <div className="absolute inset-0 rounded-full bg-[#FFD700] animate-ping opacity-30"></div>
            </motion.button>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass p-6 rounded-2xl border border-[#FFD700]/30 shadow-2xl min-w-[320px]"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    Ready to Scale?
                  </h3>
                  <p className="text-white/60 text-sm">
                    Book your strategy session now
                  </p>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <a
                href="#contact"
                onClick={() => setIsExpanded(false)}
                className="block w-full bg-[#FFD700] text-black text-center py-3 rounded-lg font-bold hover:bg-[#FFC700] transition-all"
              >
                Book Now
              </a>

              <div className="mt-4 flex items-center justify-center gap-2 text-white/40 text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available Now</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
