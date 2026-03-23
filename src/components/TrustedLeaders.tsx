"use client";

import { motion } from "framer-motion";
import { trustedLogos } from "../lib/data";

export default function TrustedLeaders() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Partnering with forward-thinking organizations across the globe to
            deliver transformative digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {trustedLogos.map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex items-center justify-center h-16 rounded-lg border border-gray-100 hover:border-brand-orange/30 transition-colors"
            >
              <span className="text-gray-400 font-bold text-xs sm:text-sm tracking-wider uppercase">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
