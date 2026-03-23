"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/WhatsApp Image 2026-03-23 at 20.54.39.jpeg",
    alt: "Zoltrok Tech team outing",
    caption: "Team Bonding",
  },
  {
    src: "/WhatsApp Image 2026-03-23 at 20.54.52.jpeg",
    alt: "Zoltrok Tech team at the office",
    caption: "Our Team",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="py-20 bg-navy-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Life at Zoltrok
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Behind the{" "}
            <span className="gradient-text">Code</span>
          </h2>
          <p className="mt-3 text-white/50 max-w-xl mx-auto">
            A glimpse into our culture, our team, and the moments that make
            Zoltrok more than just a workplace.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                activeIndex === i
                  ? "ring-2 ring-brand-orange ring-offset-2 ring-offset-navy-dark"
                  : ""
              }`}
              onClick={() => setActiveIndex(i)}
            >
              {/* Image */}
              <div className="relative h-64 sm:h-80 lg:h-96">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <span className="inline-block bg-brand-orange/90 text-white text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-2">
                  {img.caption}
                </span>
                <p className="text-white/70 text-sm">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "bg-brand-orange w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`View image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
