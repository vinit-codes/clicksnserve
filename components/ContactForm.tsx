"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Check } from "lucide-react";

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD700]/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Oswald'] text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Let's Grow Your
            <span className="text-[#FFD700]"> Restaurant</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Tell us about your restaurant and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-6 sm:p-8 md:p-10 rounded-2xl border border-white/10"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFD700]/20 rounded-full mb-4">
                <Check className="text-[#FFD700]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
              <p className="text-white/60 text-base">
                Thanks for reaching out. We&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Two Column Grid for Name and Restaurant */}
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white/90 font-medium mb-2 text-sm">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#FFD700]/50 focus:bg-white/10 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Restaurant Name */}
                <div>
                  <label htmlFor="restaurant" className="block text-white/90 font-medium mb-2 text-sm">
                    Restaurant Name *
                  </label>
                  <input
                    type="text"
                    id="restaurant"
                    name="restaurant"
                    required
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#FFD700]/50 focus:bg-white/10 transition-all"
                    placeholder="Your Restaurant Name"
                  />
                </div>
              </div>

              {/* Two Column Grid for Phone and Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-white/90 font-medium mb-2 text-sm">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#FFD700]/50 focus:bg-white/10 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white/90 font-medium mb-2 text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#FFD700]/50 focus:bg-white/10 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Revenue Range */}
              <div>
                <label htmlFor="revenue" className="block text-white/90 font-medium mb-2 text-sm">
                  Current Monthly Revenue *
                </label>
                <select
                  id="revenue"
                  name="revenue"
                  required
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FFD700]/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23FFD700' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em" }}
                >
                  <option value="" className="bg-black">Select Revenue Range</option>
                  <option value="0-500k" className="bg-black">₹0 - ₹5 Lakhs</option>
                  <option value="500k-1m" className="bg-black">₹5 Lakhs - ₹10 Lakhs</option>
                  <option value="1m-2m" className="bg-black">₹10 Lakhs - ₹20 Lakhs</option>
                  <option value="2m+" className="bg-black">₹20 Lakhs+</option>
                </select>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-2 bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-base flex items-center justify-center gap-2 hover:bg-[#FFC700] transition-all shadow-lg shadow-[#FFD700]/20"
              >
                Send Message
                <Send size={18} />
              </motion.button>

              <p className="text-white/50 text-xs text-center pt-2">
                We&apos;ll get back to you within 24 hours
              </p>
            </form>
          )}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm"
        >
          <div className="flex items-center gap-2">
            <Check className="text-[#FFD700]" size={14} />
            <span>No Commitments</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-[#FFD700]" size={14} />
            <span>Cancel Anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-[#FFD700]" size={14} />
            <span>Quick Response</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
