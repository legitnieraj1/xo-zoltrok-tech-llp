"use client";

import { motion } from "framer-motion";
import {
  Sparkles, Shield, Cloud, Copy, Network, Glasses,
  Bot, Atom, Server,
} from "lucide-react";
import { advancedTechnologies } from "../lib/data";

const iconMap: Record<string, React.ElementType> = {
  sparkles: Sparkles, shield: Shield, cloud: Cloud,
  copy: Copy, network: Network, glasses: Glasses,
  bot: Bot, atom: Atom, server: Server,
};

export default function AdvancedTechnologies() {
  return (
    <section className="py-20 bg-white px-4" id="ai-solutions">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Advanced Technologies Driving Digital Transformation
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Transforming business operations with cutting-edge technology solutions
            that drive innovation and sustainable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedTechnologies.map((item, i) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`p-6 rounded-xl border transition-all hover:shadow-md ${
                  item.highlighted
                    ? "border-l-4 border-l-brand-orange border-t border-r border-b border-t-gray-200 border-r-gray-200 border-b-gray-200 shadow-md"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Icon className="text-brand-orange mb-4" size={28} />
                <h3 className="text-navy font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
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
