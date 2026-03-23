import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import PortfolioHero from "../../components/PortfolioHero";
import PortfolioGrid from "../../components/PortfolioGrid";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

export const metadata: Metadata = {
  title: "Portfolio — Zoltrok Tech LLP",
  description:
    "Explore our client projects — from e-commerce platforms and fitness apps to luxury brand experiences. Built by Zoltrok Tech LLP.",
};

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <PortfolioHero />
      <PortfolioGrid />
      <ContactSection />
      <Footer />
      <FloatingChat />
    </main>
  );
}
