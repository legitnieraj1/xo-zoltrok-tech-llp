"use client";

import { motion } from "framer-motion";
import { healthcareBpoDetails } from "../lib/data";
import { TrendingUp, BarChart, CheckCircle } from "lucide-react";

export default function HealthcareHero() {
  const { market } = healthcareBpoDetails;

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-navy text-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-orange/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-navy-light/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange text-sm font-bold mb-6 tracking-wide">
              HEALTHCARE BPO & MEDICAL BILLING
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Strategic <span className="gradient-text">Revenue Growth</span> <br />
              for Healthcare Providers.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              {market.description}
            </p>

            <div className="space-y-4">
              {market.points.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-brand-orange" size={14} />
                  </div>
                  <span className="text-gray-300 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-navy-light to-navy border border-white/5 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Market Projection</p>
                  <h3 className="text-3xl font-black text-white">$641 Billion</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center">
                  <TrendingUp className="text-brand-orange" size={24} />
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { label: "Market Growth", value: "9% CAGR", width: "w-full" },
                  { label: "Patient Care CAGR", value: "11%", width: "w-[85%]" },
                  { label: "RCM Market Share", value: "35%", width: "w-[70%]" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">{stat.label}</span>
                      <span className="text-brand-orange font-bold">{stat.value}</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: stat.width.replace("w-[", "").replace("]", "") }}
                        transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                        className="h-full gradient-orange"
                        style={{ width: `${stat.width.includes("%") ? stat.width.match(/\d+/)?.[0] + "%" : "100%"}` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                       <div key={i} className="w-10 h-10 rounded-full border-2 border-navy bg-gray-800 flex items-center justify-center text-[10px] font-bold">
                          HP
                       </div>
                    ))}
                 </div>
                 <p className="text-gray-500 text-xs">Trusted by 500+ Healthcare Providers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
