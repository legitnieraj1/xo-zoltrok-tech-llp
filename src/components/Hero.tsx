"use client";

import { useState, useEffect } from "react";
import { Sparkles, Rocket } from "lucide-react";
import { heroWords } from "../lib/data";

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = heroWords[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < word.length) {
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((c) => c - 1);
          } else {
            setIsDeleting(false);
            setWordIndex((i) => (i + 1) % heroWords.length);
          }
        }
      },
      isDeleting ? 60 : 120
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  const currentText = heroWords[wordIndex].slice(0, charIndex);

  return (
    <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232,135,43,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,135,43,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-dark/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Typing label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-brand-orange font-semibold text-lg font-mono">
              {currentText}
              <span className="animate-blink text-brand-orange">|</span>
            </span>
          </div>

          {/* Big typed letter */}
          <div className="text-[120px] sm:text-[160px] font-extrabold leading-none text-white/10 -mb-8 select-none">
            {heroWords[wordIndex][0]}
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Build Smarter Apps with{" "}
            <span className="gradient-text">AI-Powered</span> Development.
          </h1>

          {/* Subheading */}
          <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-2xl">
            One platform. Limitless solutions. Achieve more with{" "}
            <span className="text-white font-semibold">Zoltrok</span>.
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 gradient-orange text-white font-semibold px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity shadow-lg shadow-brand-orange/20"
          >
            <Rocket size={20} />
            Unlock Free Consultation
          </a>
        </div>

        {/* Floating badge */}
        <div className="absolute bottom-24 right-8 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
          <Sparkles size={16} className="text-brand-orange" />
          <span className="text-white text-sm font-medium">
            Now developing faster with AI
          </span>
        </div>
      </div>
    </section>
  );
}
