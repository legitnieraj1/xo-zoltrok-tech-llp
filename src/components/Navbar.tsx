"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

/* ─── Dropdown data ─── */

const aiTechSolutionsItems = [
  "Artificial Intelligent Development",
  "Agentic AI Development",
  "Hire AI Engineers",
  "Generative AI Development",
  "AI & ML Development",
];

const servicesCategories = [
  { label: "App Development", active: true },
  { label: "Emerging Technologies", active: false },
  { label: "Mobile Game Development", active: false },
  { label: "API Integration Services", active: false },
];

const servicesContent: Record<string, { heading: string; items: string[] }[]> = {
  "App Development": [
    {
      heading: "Web App Development",
      items: [
        "Mobile App Development",
        "Android App Development",
        "React Native App Development",
        "Hybrid App Development",
        "BPO Call Services",
      ],
    },
    {
      heading: "Software Development",
      items: [
        "iPhone App Development",
        "Flutter App Development",
        "Wearable App Development",
        "App Maintenance & Support",
      ],
    },
  ],
  "Emerging Technologies": [
    {
      heading: "AI & ML Solutions",
      items: [
        "AI Development",
        "Machine Learning",
        "NLP Solutions",
        "Computer Vision",
      ],
    },
    {
      heading: "Blockchain & Web3",
      items: [
        "Blockchain Development",
        "Smart Contracts",
        "NFT Development",
        "DeFi Solutions",
      ],
    },
  ],
  "Mobile Game Development": [
    {
      heading: "Game Development",
      items: [
        "Unity Game Development",
        "Unreal Engine Development",
        "2D/3D Game Design",
        "AR/VR Gaming",
      ],
    },
    {
      heading: "Game Services",
      items: [
        "Game Testing",
        "Game Monetization",
        "Multiplayer Integration",
        "Game Analytics",
      ],
    },
  ],
  "API Integration Services": [
    {
      heading: "API Services",
      items: [
        "REST API Development",
        "GraphQL Development",
        "Third-Party API Integration",
        "API Gateway Setup",
      ],
    },
    {
      heading: "Integration",
      items: [
        "Payment Gateway Integration",
        "CRM Integration",
        "ERP Integration",
        "Cloud API Integration",
      ],
    },
  ],
};

const industriesItems = [
  "AI solutions",
  "Headless commerce",
  "Education",
  "Political",
  "Energy, Oil & Gas",
  "Retail and E-commerce",
  "FinTech",
  "Sports & Media",
  "Healthcare",
  "Travel and Logistics",
  "OTT App",
  "Enterprise Software",
  "Grocery Delivery App",
  "Salon App",
  "Online Food Delivery",
  "Taxi Booking App",
  "Fitness App",
  "Real Estate App",
  "Ewallet App",
  "MVP App",
  "Dating App",
  "Handyman App",
  "Airbnb Clone App",
  "Onlyfans Like App",
  "E Scooter App",
  "Live Cricket Score App",
  "Live Video Shopping App",
  "Sports Betting",
  "Logistic Software",
  "Uber App",
  "Insurance Software",
];

type NavItem = {
  label: string;
  href: string;
  dropdown?: "ai" | "services" | "industries" | "hire";
};

const navItems: NavItem[] = [
  { label: "AI Tech Solutions", href: "#ai-solutions", dropdown: "ai" },
  { label: "Services", href: "#services", dropdown: "services" },
  { label: "Hire developers", href: "#hire", dropdown: "hire" },
  { label: "Industries", href: "#industries", dropdown: "industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Company", href: "#company" },
];

const hireDevelopersItems = [
  "Hire React Developers",
  "Hire Node.js Developers",
  "Hire Flutter Developers",
  "Hire React Native Developers",
  "Hire Python Developers",
  "Hire AI/ML Engineers",
];

/* ─── Component ─── */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeServiceCat, setActiveServiceCat] = useState("App Development");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Zoltrok Tech LLP"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
            <div>
              <span className="text-navy font-bold text-lg tracking-wide">
                ZOLTROK
              </span>
              <span className="block text-gray-500 text-[10px] tracking-widest -mt-1">
                TECH LLP
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown && handleMouseEnter(item.dropdown)
                }
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors py-6 ${
                    activeDropdown === item.dropdown
                      ? "text-brand-orange"
                      : "text-navy/80 hover:text-brand-orange"
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.dropdown ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {/* ── AI Tech Solutions dropdown ── */}
                {item.dropdown === "ai" && activeDropdown === "ai" && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                    onMouseEnter={() => handleMouseEnter("ai")}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Arrow */}
                    <div className="w-3 h-3 bg-white rotate-45 mx-auto -mb-1.5 relative z-10" />
                    <div className="bg-white rounded-xl shadow-2xl py-4 px-5 min-w-[260px] animate-dropdown">
                      {aiTechSolutionsItems.map((text) => (
                        <a
                          key={text}
                          href="#"
                          className="block py-2.5 text-navy text-sm font-medium hover:text-brand-orange transition-colors"
                        >
                          {text}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── Services mega menu ── */}
                {item.dropdown === "services" &&
                  activeDropdown === "services" && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                      style={{ width: "680px", marginLeft: "40px" }}
                      onMouseEnter={() => handleMouseEnter("services")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="w-3 h-3 bg-white rotate-45 mx-auto -mb-1.5 relative z-10" style={{ marginLeft: "calc(50% - 40px)" }} />
                      <div className="bg-white rounded-xl shadow-2xl flex overflow-hidden animate-dropdown">
                        {/* Left sidebar */}
                        <div className="w-[200px] bg-gray-50 py-4 px-3 border-r border-gray-100 flex-shrink-0">
                          {servicesCategories.map((cat) => (
                            <button
                              key={cat.label}
                              onMouseEnter={() =>
                                setActiveServiceCat(cat.label)
                              }
                              className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                activeServiceCat === cat.label
                                  ? "bg-navy text-white"
                                  : "text-navy hover:bg-gray-100"
                              }`}
                            >
                              {cat.label}
                            </button>
                          ))}
                        </div>
                        {/* Right content */}
                        <div className="flex-1 p-6">
                          <div className="grid grid-cols-2 gap-8">
                            {(
                              servicesContent[activeServiceCat] || []
                            ).map((group) => (
                              <div key={group.heading}>
                                <h4 className="text-navy font-bold text-sm mb-3 flex items-center gap-1.5">
                                  {group.heading}
                                  <span className="w-4 h-4 rounded-full gradient-orange flex items-center justify-center">
                                    <ArrowRight
                                      size={10}
                                      className="text-white"
                                    />
                                  </span>
                                </h4>
                                <div className="space-y-2.5">
                                  {group.items.map((link) => (
                                    <a
                                      key={link}
                                      href="#"
                                      className="flex items-center gap-2 text-gray-500 text-sm hover:text-brand-orange transition-colors"
                                    >
                                      <ArrowRight
                                        size={12}
                                        className="text-brand-orange flex-shrink-0"
                                      />
                                      {link}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                {/* ── Hire developers dropdown ── */}
                {item.dropdown === "hire" && activeDropdown === "hire" && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                    onMouseEnter={() => handleMouseEnter("hire")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="w-3 h-3 bg-white rotate-45 mx-auto -mb-1.5 relative z-10" />
                    <div className="bg-white rounded-xl shadow-2xl py-4 px-5 min-w-[280px] animate-dropdown">
                      {hireDevelopersItems.map((text) => (
                        <a
                          key={text}
                          href="#"
                          className="block py-2.5 text-navy text-sm font-medium hover:text-brand-orange transition-colors"
                        >
                          {text}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── Industries mega menu ── */}
                {item.dropdown === "industries" &&
                  activeDropdown === "industries" && (
                    <div
                      className="absolute top-full pt-2"
                      style={{
                        width: "820px",
                        left: "50%",
                        transform: "translateX(-60%)",
                      }}
                      onMouseEnter={() => handleMouseEnter("industries")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className="w-3 h-3 bg-white rotate-45 -mb-1.5 relative z-10"
                        style={{ marginLeft: "60%" }}
                      />
                      <div className="bg-white rounded-xl shadow-2xl p-6 animate-dropdown">
                        <div className="grid grid-cols-4 gap-x-8 gap-y-2.5">
                          {industriesItems.map((text) => (
                            <a
                              key={text}
                              href={text === "Healthcare" ? "/healthcare-bpo" : "#"}
                              className="flex items-center gap-2 text-gray-600 text-sm hover:text-brand-orange transition-colors py-1"
                            >
                              <ArrowRight
                                size={12}
                                className="text-brand-orange flex-shrink-0"
                              />
                              {text}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex gradient-orange text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Let&apos;s chat
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-navy"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-navy/80 hover:text-brand-orange text-sm font-medium py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block gradient-orange text-white font-semibold text-sm px-5 py-2.5 rounded-full text-center mt-4"
            >
              Let&apos;s chat
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
