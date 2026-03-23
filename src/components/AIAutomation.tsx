"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare, Brain, Eye, TrendingUp, Bot, Wifi,
  Activity, Shield, Zap, BarChart3, PieChart, Database,
  Search, FileText, Gamepad2, Box, Users, Smartphone,
  Globe, Gem, Glasses, Coins,
} from "lucide-react";
import { aiAutomationTabs } from "../lib/data";

const iconMap: Record<string, React.ElementType> = {
  "message-square": MessageSquare, brain: Brain, eye: Eye,
  "trending-up": TrendingUp, bot: Bot, wifi: Wifi,
  activity: Activity, shield: Shield, zap: Zap,
  "bar-chart": BarChart3, "pie-chart": PieChart, database: Database,
  search: Search, "file-text": FileText, "gamepad-2": Gamepad2,
  box: Box, users: Users, smartphone: Smartphone,
  globe: Globe, gem: Gem, glasses: Glasses, coins: Coins,
};

export default function AIAutomation() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = aiAutomationTabs[activeTab];

  return (
    <section className="bg-navy-dark py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            AI-Engineered Automation to Shape Digital Tomorrow
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leveraging advanced AI and ML algorithms to automate processes, enhance
            decision-making, and create intelligent digital experiences.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {aiAutomationTabs.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === i
                  ? "gradient-orange text-white shadow-lg shadow-brand-orange/20"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-navy/60 rounded-2xl p-8 sm:p-12"
          >
            <h3 className="text-white text-2xl sm:text-3xl font-bold mb-4">
              {tab.heading}
            </h3>
            <p className="text-gray-400 max-w-2xl mb-8">{tab.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {tab.features.map((feat, j) => {
                const Icon = iconMap[feat.icon] || Zap;
                return (
                  <div
                    key={j}
                    className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors"
                  >
                    <Icon className="text-brand-orange flex-shrink-0" size={18} />
                    <span className="text-white text-sm font-medium">
                      {feat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
