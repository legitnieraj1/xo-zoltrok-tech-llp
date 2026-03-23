"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techStackTabs } from "../lib/data";

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Comprehensive Technology Stack
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Our diverse technology expertise enables us to choose the best tools
            for every project requirement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar tabs */}
          <div className="lg:col-span-1">
            <div className="space-y-1">
              {techStackTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeTab === i
                      ? "bg-brand-orange/10 text-brand-orange border-l-4 border-brand-orange"
                      : "text-gray-500 hover:bg-gray-100 border-l-4 border-transparent"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tech grid */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {techStackTabs[activeTab].techs.map((tech, j) => (
                  <div
                    key={j}
                    className="flex items-center justify-center h-20 rounded-xl border border-gray-200 bg-white hover:border-brand-orange/50 hover:shadow-sm transition-all"
                  >
                    <span className="text-navy font-semibold text-sm text-center px-2">
                      {tech}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
