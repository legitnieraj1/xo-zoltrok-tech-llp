"use client";

import { partnerLogos } from "../lib/data";

export default function LogoMarquee() {
  const doubled = [...partnerLogos, ...partnerLogos];

  return (
    <div className="bg-navy-dark py-6 overflow-hidden border-t border-white/5">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((name, i) => (
          <div
            key={i}
            className="mx-8 sm:mx-12 flex-shrink-0 text-gray-500 font-bold text-lg sm:text-xl tracking-wider uppercase opacity-40 hover:opacity-70 transition-opacity"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
