"use client";

import { motion } from "framer-motion";
import { healthcareBpoDetails } from "../lib/data";
import { Zap, DollarSign, Clock, TrendingUp, ExternalLink } from "lucide-react";

const icons = [DollarSign, Clock, TrendingUp];

export default function HealthcareValueProp() {
  const { valueProp } = healthcareBpoDetails;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-dark rounded-[50px] p-12 lg:p-20 text-center relative overflow-hidden">
           {/* Background Highlight */}
           <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-orange/10 blur-[100px] rounded-full" />
           
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative z-10"
           >
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                 Measurable Results for Your <br />
                 <span className="text-brand-orange">Financial Stability.</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
                 Choosing the right service model means partnering with a firm that 
                 demonstrates measurable SLA outcomes and continuous regulatory updates.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {valueProp.map((item, i) => {
                    const Icon = icons[i % icons.length];
                    return (
                       <div key={i} className="text-left bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors">
                          <div className="w-12 h-12 rounded-xl gradient-orange flex items-center justify-center mb-6">
                             <Icon className="text-white" size={24} />
                          </div>
                          <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                             {item.desc}
                          </p>
                       </div>
                    );
                 })}
              </div>

              <div className="mt-16 pt-10 border-t border-white/5">
                 <a 
                   href="/#contact" 
                   className="inline-flex items-center gap-3 bg-white text-navy font-bold px-10 py-5 rounded-full hover:bg-brand-orange hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl"
                 >
                    Get a Revenue Cycle Audit
                    <ExternalLink size={20} />
                 </a>
                 <p className="text-gray-500 text-sm mt-6">
                    Join over 500+ healthcare providers nationwide.
                 </p>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
