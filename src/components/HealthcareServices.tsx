"use client";

import { motion } from "framer-motion";
import { healthcareBpoDetails } from "../lib/data";
import { ShieldCheck, FileText, Activity, Layers, ArrowRight } from "lucide-react";

export default function HealthcareServices() {
  const { pillars, rcmWorkflow } = healthcareBpoDetails;

  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">
             Core Service Pillars <span className="gradient-text">We Deliver.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
             End-to-end Revenue Cycle Management (RCM) and back-office support 
             designed for accuracy, speed, and maximum reimbursement.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pillars.map((pillar, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all group"
             >
                <div className="w-14 h-14 rounded-2xl gradient-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   {i === 0 ? <FileText className="text-white" /> : i === 1 ? <ShieldCheck className="text-white" /> : <Activity className="text-white" />}
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{pillar.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                   {pillar.desc}
                </p>
             </motion.div>
          ))}
        </div>

        {/* RCM Workflow */}
        <div className="bg-navy rounded-[40px] p-10 lg:p-16 overflow-hidden relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 blur-[80px] rounded-full" />
           
           <div className="relative z-10 lg:flex items-center gap-16">
              <div className="lg:w-1/3 mb-12 lg:mb-0 text-white">
                 <h3 className="text-3xl font-black mb-6">Full RCM Process <br />Flow</h3>
                 <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    In 2025, outsourcing is no longer just a cost-cutting measure — 
                    it&apos;s a strategic advantage for handling high-stakes compliance.
                 </p>
                 <div className="flex items-center gap-4 text-brand-orange font-bold text-sm">
                    <span>99.9% Accuracy Rate</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    <span>24/7 Support</span>
                 </div>
              </div>

              <div className="lg:w-2/3 space-y-4">
                 {rcmWorkflow.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-6 group hover:bg-white/10 underline-offset-4"
                    >
                       <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold flex-shrink-0">
                          {i + 1}
                       </div>
                       <div>
                          <h4 className="text-white font-bold mb-1 flex items-center gap-2 group-hover:text-brand-orange transition-colors">
                             {item.step}
                             <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                          </h4>
                          <p className="text-gray-400 text-sm">{item.detail}</p>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
