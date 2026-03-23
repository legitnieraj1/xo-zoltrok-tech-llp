"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Monitor,
  Users,
  ShieldCheck,
  MessageCircle,
  Wrench,
  Cloud,
  Phone,
  ArrowRight,
} from "lucide-react";
import { achievements } from "../lib/data";

const iconMap: Record<string, React.ElementType> = {
  monitor: Monitor,
  users: Users,
  "shield-check": ShieldCheck,
  "message-circle": MessageCircle,
  wrench: Wrench,
  cloud: Cloud,
  phone: Phone,
};

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl font-extrabold text-navy">
      {count}
      {suffix}
    </span>
  );
}

export default function AchievementHighlights() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(2);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 320;
    const newIndex =
      dir === "left"
        ? Math.max(0, activeIndex - 1)
        : Math.min(achievements.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
    scrollRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Our Achievement Highlights
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            10 years of technology excellence driving digital transformation,
            delivering remarkable results with impressive growth metrics.
          </p>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
        >
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon] || Monitor;
            const isActive = i === activeIndex;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveIndex(i)}
                className={`flex-shrink-0 w-[280px] sm:w-[300px] p-6 rounded-xl border-2 cursor-pointer snap-start transition-all ${
                  isActive
                    ? "border-brand-orange shadow-lg shadow-brand-orange/10"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Icon className="text-brand-orange mb-4" size={28} />
                <Counter target={item.number} suffix={item.suffix} />
                <h3 className="text-navy font-bold mt-2 mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((text, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-gray-500 text-sm"
                    >
                      <ArrowRight size={14} className="text-brand-orange flex-shrink-0" />
                      {text}
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
