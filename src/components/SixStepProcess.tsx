"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { sixSteps } from "../lib/data";

export default function SixStepProcess() {
  return (
    <section className="bg-navy-dark py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            6-Step Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Partner with us to transform your vision into reality through strategic
            planning, expert development, and continuous support for sustainable
            growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sixSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-navy/60 rounded-xl p-6 relative hover:bg-navy/80 transition-colors"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-4 ${
                  step.highlighted
                    ? "gradient-orange text-white"
                    : "bg-white/10 text-gray-400"
                }`}
              >
                {step.number}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 gradient-orange text-white font-semibold px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity shadow-lg shadow-brand-orange/20"
          >
            <Rocket size={20} />
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
}
