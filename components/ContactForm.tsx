"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check } from "lucide-react";

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 lg:py-40 bg-black relative border-b border-zinc-800 w-full overflow-hidden">
      <div className="w-full max-w-3xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 lg:mb-6 tracking-tight leading-tight">
            Clinic Growth <span className="text-zinc-500 block md:inline">Application</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-zinc-400 font-light text-center">
            Due to our high-touch partnership model, we only accept 2 clinics per locale. Apply below.
          </p>
        </motion.header>

        {/* Form Card wrapper */}
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-black border border-zinc-800 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl w-full text-left"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 md:py-16 px-4"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-zinc-900 border border-zinc-800 rounded-full mb-4 md:mb-6 shrink-0">
                <Check className="text-zinc-300 w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Application Received</h3>
              <p className="text-zinc-400 text-sm md:text-base font-light mx-auto">
                Our team will review your clinic's details and reach out within 24 hours to schedule a strategy session.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
                <div className="w-full">
                  <label htmlFor="name" className="block text-zinc-300 font-medium mb-1.5 md:mb-2 text-xs md:text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors text-sm md:text-base"
                    placeholder="Dr. John Doe"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="clinic" className="block text-zinc-300 font-medium mb-1.5 md:mb-2 text-xs md:text-sm">
                    Clinic Name
                  </label>
                  <input
                    type="text"
                    id="clinic"
                    name="clinic"
                    required
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors text-sm md:text-base"
                    placeholder="Peak Aesthetics"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
                <div className="w-full">
                  <label htmlFor="phone" className="block text-zinc-300 font-medium mb-1.5 md:mb-2 text-xs md:text-sm">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors text-sm md:text-base"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="email" className="block text-zinc-300 font-medium mb-1.5 md:mb-2 text-xs md:text-sm">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors text-sm md:text-base"
                    placeholder="doctor@clinic.com"
                  />
                </div>
              </div>

              <div className="w-full">
                <label htmlFor="treatment" className="block text-zinc-300 font-medium mb-1.5 md:mb-2 text-xs md:text-sm">
                  Highest-Margin Treatment Priority
                </label>
                <select
                  id="treatment"
                  name="treatment"
                  required
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white appearance-none focus:outline-none focus:border-emerald-500 transition-colors text-sm md:text-base cursor-pointer"
                >
                  <option value="" className="bg-black text-zinc-400">Select Treatment</option>
                  <option value="hair-transplant" className="bg-black">Hair Transplants</option>
                  <option value="botox-fillers" className="bg-black">Botox & Fillers</option>
                  <option value="lasers" className="bg-black">Advanced Laser Treatments</option>
                  <option value="multiple" className="bg-black">Multiple Procedures</option>
                </select>
              </div>

              <div className="flex items-start gap-4 py-4 w-full">
                <input
                  type="checkbox"
                  id="acknowledgement"
                  name="acknowledgement"
                  required
                  className="mt-1 h-5 w-5 bg-zinc-900/50 border-zinc-800 rounded text-zinc-500 focus:ring-0 cursor-pointer shrink-0"
                />
                <label htmlFor="acknowledgement" className="text-zinc-400 text-sm leading-relaxed cursor-pointer font-light select-none">
                  I acknowledge that to achieve optimal ROI, my clinic must be prepared to handle incoming leads from the automated system within a 15-minute window during business hours.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-white text-black font-semibold rounded-md hover:bg-zinc-200 transition-colors text-base mt-2"
              >
                Submit Application
              </button>
            </form>
          )}
        </motion.article>
      </div>
    </section>
  );
}
