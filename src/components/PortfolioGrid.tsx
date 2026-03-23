"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

/* ─── Client data ─── */

interface Project {
  name: string;
  description: string;
  url: string;
  category: string;
  color: string; // accent colour for the card top stripe
  initials: string; // fallback logo text
  logo?: string; // actual logo image path
}

const projects: Project[] = [
  {
    name: "Kurtis Boutique",
    description:
      "Elegant Indian fashion e-commerce store with curated kurtis collections, seamless checkout and mobile-first design.",
    url: "https://kurtisboutiquestore.vercel.app",
    category: "E-Commerce",
    color: "#c0392b",
    initials: "KB",
    logo: "/kurtis-logo-large.png",
  },
  {
    name: "MFP Gym",
    description:
      "Best gym & fitness centre in Periyanaickenpalayam — featuring membership plans, class schedules and trainer profiles.",
    url: "https://mfpgympnp.in",
    category: "Fitness & Health",
    color: "#2980b9",
    initials: "MFP",
    logo: "/mfp logo.jpg",
  },
  {
    name: "Fortune City (TEX VALLEY)",
    description:
      "Erode's premier shopping mall — a digital showcase of stores, events, and everything the mall has to offer.",
    url: "https://texvalley-pi.vercel.app",
    category: "Real Estate & Retail",
    color: "#16a085",
    initials: "FC",
    logo: "/fortunecity.jpg",
  },
  {
    name: "VALENCIRĖ®",
    description:
      "Official brand site for VALENCIRĖ — a premium fashion label with lookbooks, collections and brand story.",
    url: "https://legitnieraj1.github.io/valencire-site/",
    category: "Fashion & Luxury",
    color: "#8e44ad",
    initials: "V",
    logo: "/valencire.png",
  },
  {
    name: "Daluxe",
    description:
      "Luxury skincare e-commerce application offering premium products, personalised routines and a sophisticated shopping experience.",
    url: "https://daluxe-luxury-skincare.vercel.app/home",
    category: "Beauty & Skincare",
    color: "#d4a437",
    initials: "DA",
    logo: "/daluxe.png",
  },
];

/* ─── Single card ─── */

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col bg-white rounded-2xl shadow-md hover:shadow-2xl
        transition-all duration-500 overflow-hidden portfolio-card-enter ${
          visible ? "portfolio-card-visible" : ""
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Top colour stripe */}
      <div
        className="h-1.5 w-full"
        style={{ background: project.color }}
      />

      {/* Logo area */}
      <div className="flex items-center justify-center h-44 bg-gray-50 relative overflow-hidden p-8">
        {/* Decorative circle */}
        <div
          className="absolute w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
          style={{ background: project.color }}
        />
        
        {project.logo ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ) : (
          <span
            className="relative text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: project.color }}
          >
            {project.initials}
          </span>
        )}

        {/* External link icon on hover */}
        <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <ExternalLink size={16} className="text-navy" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 md:p-6 flex flex-col">
        {/* Category badge */}
        <span
          className="self-start text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
          style={{
            color: project.color,
            background: `${project.color}14`,
          }}
        >
          {project.category}
        </span>

        <h3 className="text-lg font-bold text-navy group-hover:text-brand-orange transition-colors duration-300">
          {project.name}
        </h3>

        <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* URL pill */}
        <div className="mt-4 flex items-center gap-2 text-xs text-gray-400 group-hover:text-brand-orange transition-colors">
          <ExternalLink size={12} />
          <span className="truncate">
            {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </span>
        </div>
      </div>
    </a>
  );
}

/* ─── Grid section ─── */

export default function PortfolioGrid() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Projects We&apos;ve{" "}
            <span className="gradient-text">Delivered</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Each project is crafted with cutting-edge technology, beautiful design,
            and a relentless focus on performance.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">
            Want a project like these? Let&apos;s talk.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 gradient-orange text-white font-semibold text-sm px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Start Your Project
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
