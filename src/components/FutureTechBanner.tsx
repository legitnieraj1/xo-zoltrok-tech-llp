"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function FutureTechBanner() {
  return (
    <section className="bg-navy py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-navy-dark rounded-2xl p-8 sm:p-12 border-l-4 border-brand-orange"
      >
        <div className="flex items-start gap-3 mb-4">
          <Sparkles className="text-brand-orange flex-shrink-0 mt-1" size={24} />
          <div>
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
              Get ready to
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Future technology
            </h2>
          </div>
        </div>
        <p className="text-gray-400 leading-relaxed max-w-3xl ml-9">
          Artificial intelligence, quantum computing, 3D printing, and smart cities are
          transforming industries at an unprecedented pace. At Zoltrok, we help businesses
          harness these revolutionary technologies to stay ahead of the curve and build
          solutions that define the future.
        </p>
      </motion.div>
    </section>
  );
}
