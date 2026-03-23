"use client";

import { motion } from "framer-motion";
import {
  Smartphone, Apple, Layers, Layout, Copy, Square, CheckCircle,
} from "lucide-react";
import { mobileAppServices } from "../lib/data";

const iconMap: Record<string, React.ElementType> = {
  smartphone: Smartphone, apple: Apple, layers: Layers,
  layout: Layout, copy: Copy, square: Square,
};

export default function MobileAppServices() {
  return (
    <section className="py-20 bg-white px-4" id="hire">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Boot Up With Ground-Zero Mobile App Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Comprehensive mobile app development services designed to bring your
            ideas to life across all platforms and devices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mobileAppServices.map((service, i) => {
            const Icon = iconMap[service.icon] || Smartphone;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-xl border transition-all hover:shadow-md ${
                  service.highlighted
                    ? "border-brand-orange shadow-lg shadow-brand-orange/10 bg-orange-50/30"
                    : "border-gray-200"
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-5">
                  <Icon className="text-brand-orange" size={24} />
                </div>
                <h3 className="text-navy font-bold text-lg mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2.5">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-500 text-sm">
                      <CheckCircle size={16} className="text-brand-orange flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
