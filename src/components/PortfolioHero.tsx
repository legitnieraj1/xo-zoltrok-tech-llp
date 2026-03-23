"use client";

import { useEffect, useState } from "react";

export default function PortfolioHero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-dark">
      {/* Decorative gradient blobs */}
      <div className="absolute top-10 left-[-120px] w-[400px] h-[400px] rounded-full bg-brand-orange/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-100px] w-[350px] h-[350px] rounded-full bg-brand-orange/10 blur-[100px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Our Work
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Our{" "}
            <span className="gradient-text">Portfolio</span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Explore the projects we&apos;ve built for our clients — from
            e-commerce platforms and fitness apps to luxury brand experiences.
          </p>
        </div>

        {/* Stats row */}
        <div
          className={`mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "5+", label: "Live Projects" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "4+", label: "Industries Served" },
            { value: "24/7", label: "Support" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <span className="text-3xl md:text-4xl font-extrabold gradient-text">
                {s.value}
              </span>
              <p className="text-white/50 text-xs mt-1 font-medium tracking-wide uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
