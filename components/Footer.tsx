"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/clickn.serve?igsh=MTRtem5wbXRibWV5bA==", label: "Instagram" },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="text-3xl font-bold">
                <span className="font-['Oswald'] text-white">Clicks &</span>
                <span className="font-['Oswald'] text-[#FFD700]"> Serve</span>
              </div>
            </Link>
            <p className="text-white/60 mb-6 max-w-md">
              The Tier-1 Growth Agency for Cafes, Restaurants, & Hotels. We build reservation backlogs, not just beautiful feeds.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-[#FFD700] hover:border-[#FFD700]/50 transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#pricing" className="text-white/60 hover:text-[#FFD700] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/60 hover:text-[#FFD700] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/60 hover:text-[#FFD700] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:kunduvineeth0@gmail.com"
                  className="flex items-center gap-2 text-white/60 hover:text-[#FFD700] transition-colors"
                >
                  <Mail size={16} />
                  kunduvineeth0@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917682887844"
                  className="flex items-center gap-2 text-white/60 hover:text-[#FFD700] transition-colors"
                >
                  <Phone size={16} />
                  +91 7682887844
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Clicks & Serve. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link href="#" className="hover:text-[#FFD700] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#FFD700] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
