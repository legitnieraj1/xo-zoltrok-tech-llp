"use client";

import { motion } from "framer-motion";
import { healthcareBpoDetails } from "../lib/data";
import { Cpu, Cloud, Brain, Smartphone, ShieldCheck } from "lucide-react";

const techIcons = [Cpu, Cloud, Brain, Smartphone, ShieldCheck];

export default function HealthcareTech() {
  const { techStack } = healthcareBpoDetails;

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-6">
              The Technology We <br />
              <span className="gradient-text">Bring to the Table.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
              BPO providers simplify healthcare reimbursement using AI, cloud computing, 
              and automation tools to optimize cash flow and reduce revenue leakage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techStack.map((tech, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                    {(() => {
                        const Icon = techIcons[i % techIcons.length];
                        return <Icon className="text-navy/60" size={18} />;
                    })()}
                  </div>
                  <span className="text-sm font-bold text-navy/80">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             {/* Abstract Tech Visual */}
             <div className="relative aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-navy/5 rounded-[60px] transform rotate-6" />
                <div className="absolute inset-0 bg-white border border-gray-100 rounded-[60px] shadow-2xl p-12 flex flex-col justify-center">
                   <div className="space-y-8">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-2xl bg-brand-orange flex items-center justify-center text-white shadow-lg">
                            <Brain size={24} />
                         </div>
                         <div>
                            <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">AI Engine</p>
                            <h4 className="text-navy font-black">Claims Scrubbing AI</h4>
                         </div>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                         <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "94%" }}
                            className="h-full bg-brand-orange" 
                         />
                      </div>
                      <div className="flex justify-between text-[10px] font-bold text-gray-500">
                         <span>Analyzing 10k+ Claims</span>
                         <span className="text-brand-orange">94% Automation Rate</span>
                      </div>

                      <div className="pt-8 border-t border-gray-100 mt-4">
                         <div className="flex items-center justify-between p-4 bg-navy rounded-2xl">
                            <div className="flex items-center gap-3">
                               <Cloud className="text-brand-orange" size={20} />
                               <span className="text-white font-bold text-xs uppercase tracking-wider">Cloud Deployment</span>
                            </div>
                            <span className="text-[10px] text-gray-400 font-bold">READY</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
