"use client";

import { motion } from "framer-motion";
import { blogPosts } from "../lib/data";

export default function BlogCards() {
  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Latest Insights
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow bg-white group cursor-pointer"
            >
              {/* Gradient banner */}
              <div className="h-40 bg-gradient-to-br from-navy via-navy-light to-brand-orange flex items-end p-5">
                <h3 className="text-white font-bold text-sm leading-snug">
                  {post.title}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-gray-500 text-sm leading-relaxed">
                  {post.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
