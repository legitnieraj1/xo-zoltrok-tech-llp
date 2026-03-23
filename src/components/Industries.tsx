"use client";

import { motion } from "framer-motion";
import {
  HeartPulse, GraduationCap, Landmark, Tv, Brain, Flag,
  Flame, ShoppingCart, Plane, ShoppingBag,
} from "lucide-react";
import { industries } from "../lib/data";

const iconMap: Record<string, React.ElementType> = {
  "heart-pulse": HeartPulse, "graduation-cap": GraduationCap,
  landmark: Landmark, tv: Tv, brain: Brain, flag: Flag,
  flame: Flame, "shopping-cart": ShoppingCart, plane: Plane,
  "shopping-bag": ShoppingBag,
};

export default function Industries() {
  return (
    <section className="py-20 bg-white px-4" id="industries">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            How we can support you
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Delivering sector-specific technology solutions that address unique
            industry challenges and drive measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {industries.map((item, i) => {
            const Icon = iconMap[item.icon] || Brain;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-200 hover:border-brand-orange hover:shadow-md transition-all cursor-pointer group"
              >
                <Icon
                  className="text-gray-400 group-hover:text-brand-orange transition-colors"
                  size={28}
                />
                <span className="text-navy font-medium text-sm text-center">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
