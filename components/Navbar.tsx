"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold"
            >
              <span className="font-['Oswald'] text-white">Clicks &</span>
              <span className="font-['Oswald'] text-[#FFD700]"> Serve</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="#pricing"
              className="text-white/80 hover:text-white transition-colors text-[15px] font-medium"
            >
              Pricing
            </Link>
            <Link
              href="#services"
              className="text-white/80 hover:text-white transition-colors text-[15px] font-medium"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-white/80 hover:text-white transition-colors text-[15px] font-medium"
            >
              Contact
            </Link>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFD700] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#FFC700] transition-colors ml-4"
            >
              Book Strategy Session
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
        >
          <div className="px-4 py-6 space-y-4">
            <Link
              href="#pricing"
              className="block text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#services"
              className="block text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="block text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="#contact"
              className="block w-full bg-[#FFD700] text-black px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#FFC700] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Strategy Session
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
