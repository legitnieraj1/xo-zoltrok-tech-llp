"use client";

import { motion } from "framer-motion";
import { companyDetails } from "../lib/data";
import { Phone, TrendingUp, Activity, Database, Target, Eye } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  phone: Phone,
  "trending-up": TrendingUp,
  activity: Activity,
  database: Database,
};

export default function CompanySection() {
  return (
    <section className="py-20 bg-white" id="company">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">
              Who We Are: <span className="gradient-text">ZOLTROK TECH LLP</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {companyDetails.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl flex-1 min-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="text-brand-orange" size={20} />
                  <h4 className="font-bold text-navy">Our Mission</h4>
                </div>
                <p className="text-sm text-gray-500 italic">
                  &quot;{companyDetails.purpose.mission}&quot;
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl flex-1 min-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <Eye className="text-brand-orange" size={20} />
                  <h4 className="font-bold text-navy">Our Vision</h4>
                </div>
                <p className="text-sm text-gray-500 italic">
                  &quot;{companyDetails.purpose.vision}&quot;
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-navy/5 to-navy/10 rounded-3xl overflow-hidden flex items-center justify-center p-12">
               <div className="text-center">
                  <span className="text-8xl font-black text-navy/5 block mb-4">BPO</span>
                  <p className="text-navy/40 font-medium tracking-widest uppercase">Global Excellence</p>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Expertise Grid */}
        <div>
          <h3 className="text-2xl font-bold text-navy text-center mb-10">Our Expertise Spans Across</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyDetails.expertise.map((item, i) => {
              const Icon = iconMap[item.icon] || Database;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-brand-orange" size={24} />
                  </div>
                  <h4 className="font-bold text-navy text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.sub}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
