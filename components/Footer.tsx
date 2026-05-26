"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="text-2xl md:text-3xl font-bold tracking-tight">
                <span className="text-white">clicknserve</span>
                <span className="text-emerald-400">.studio</span>
              </div>
            </Link>
            <p className="text-zinc-400 mb-6 max-w-md font-light leading-relaxed">
              The Premier Patient Acquisition Partner for High-Ticket Medical
              Aesthetics & Dermatology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#pricing"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors font-light text-sm"
                >
                  Partnership Tiers
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors font-light text-sm"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Direct Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:kunduvineeth0@gmail.com"
                  className="flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors font-light text-sm"
                >
                  <Mail size={16} />
                  kunduvineeth0@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917682887844"
                  className="flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors font-light text-sm"
                >
                  <Phone size={16} />
                  +91 7682887844
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-xs font-light tracking-wide">
            © {currentYear} clicknserve.studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-zinc-500 font-light tracking-wide">
            <Link
              href="#"
              className="hover:text-zinc-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-zinc-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}