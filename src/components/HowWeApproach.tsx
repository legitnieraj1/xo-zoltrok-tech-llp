"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { approachSteps } from "../lib/data";

export default function HowWeApproach() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-navy text-lg font-medium mb-1">How we</p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-navy mb-10">
              approach<span className="text-brand-orange">.</span>
            </h2>

            <div className="space-y-4">
              {approachSteps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="flex items-center gap-4 w-full text-left group"
                >
                  <span
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-colors ${
                      active === i
                        ? "border-brand-orange text-brand-orange"
                        : "border-gray-300 text-gray-400"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`text-lg font-semibold transition-colors ${
                      active === i ? "text-brand-orange" : "text-gray-500"
                    }`}
                  >
                    {step}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right — image card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-navy-dark min-h-[400px] flex items-end">
              {/* Simulated image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-navy/40" />
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-orange" />

              <div className="relative p-8 sm:p-10">
                <h3 className="text-white text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                  Build Your Business with AI-Powered Solutions.
                </h3>
                <p className="text-gray-400 mb-2">
                  We are not just about creating innovative things.
                </p>
                <p className="text-white font-semibold text-lg mb-6">
                  We creating Bright horizons.
                </p>
                <a
                  href="#contact"
                  className="w-12 h-12 gradient-orange rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <ArrowUpRight className="text-white" size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
