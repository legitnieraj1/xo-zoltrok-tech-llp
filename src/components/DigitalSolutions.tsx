"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Settings, Brain, Cpu } from "lucide-react";
import { digitalSolutions } from "../lib/data";

const iconMap: Record<string, React.ElementType> = {
  globe: Globe,
  smartphone: Smartphone,
  settings: Settings,
  brain: Brain,
  cpu: Cpu,
};

export default function DigitalSolutions() {
  return (
    <section className="bg-navy-dark py-20 px-4" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            We construct{" "}
            <span className="gradient-text">digital solutions.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Finding solutions to complex problems in every sector within days, not
            years.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitalSolutions.map((item, i) => {
            const Icon = iconMap[item.icon] || Globe;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-navy/60 rounded-xl p-8 hover:bg-navy/80 transition-colors group ${
                  i >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-lg gradient-orange flex items-center justify-center mb-5">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
