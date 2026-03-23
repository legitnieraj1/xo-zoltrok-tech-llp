"use client";

import Image from "next/image";
import { footerLinks } from "../lib/data";
import {
  Facebook, Twitter, Instagram, Linkedin, Youtube, Phone,
} from "lucide-react";

export default function Footer() {
  const linkGroups = Object.values(footerLinks);

  return (
    <footer className="bg-navy pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {linkGroups.map((group, i) => (
            <div key={i}>
              <h4 className="text-white font-bold text-sm mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-brand-orange transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Zoltrok" width={32} height={32} className="object-contain" />
              <span className="text-white font-bold tracking-wide">ZOLTROK</span>
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
              <span className="font-semibold text-white">Get in touch with us</span>
              <span className="flex items-center gap-1">
                <Phone size={14} className="text-brand-orange" />
                USA: +1 (408) 555-0123
              </span>
              <span className="flex items-center gap-1">
                <Phone size={14} className="text-brand-orange" />
                INDIA: +91 79 555 0123
              </span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all"
                    aria-label={`Social link ${i + 1}`}
                  >
                    <Icon size={14} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Legal links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-gray-500 text-xs">
            <a href="#" className="hover:text-brand-orange transition-colors">
              Privacy policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-brand-orange transition-colors">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:text-brand-orange transition-colors">
              Refund Policy
            </a>
            <span>|</span>
            <span>&copy; 2026 &mdash; Zoltrok Tech LLP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
