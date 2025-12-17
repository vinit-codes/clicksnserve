"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Owner, Spice Garden Restaurant",
    image: "👨‍🍳",
    rating: 5,
    text: "Working with Clicks & Serve has been great. Their fresh approach to content and marketing is exactly what we needed. Professional team that delivers on their promises.",
    result: "More Weekend Bookings"
  },
  {
    name: "Priya Sharma",
    role: "Director, Urban Bites Cafe",
    image: "👩‍💼",
    rating: 5,
    text: "Finally, an agency that understands the restaurant business. They're helping us build our social media presence the right way. Excited to see where this goes!",
    result: "Growing Presence"
  },
  {
    name: "Amit Patel",
    role: "Founder, The Grand Thali",
    image: "👨‍💻",
    rating: 5,
    text: "Great experience working with the Clicks & Serve team. They're responsive, creative, and understand what restaurants need to succeed online.",
    result: "Happy Partner"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-[#00D9FF]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-['Oswald'] text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Real Results from
            <br />
            <span className="text-[#FFD700]">Real Restaurants</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our partners have to say.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-[#FFD700]/30 transition-all relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote size={48} className="text-[#FFD700]" />
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFD700" className="text-[#FFD700]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/80 mb-6 leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Result Badge */}
                <div className="inline-block mb-6 px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full">
                  <span className="text-[#FFD700] font-semibold text-sm">
                    {testimonial.result}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <div className="text-white font-bold">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">Want results like these?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 215, 0, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFC700] transition-all shadow-lg shadow-[#FFD700]/20"
          >
            Start Your Transformation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
