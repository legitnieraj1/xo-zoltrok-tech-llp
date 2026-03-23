"use client";

import Navbar from "@/components/Navbar";
import HealthcareHero from "@/components/HealthcareHero";
import HealthcareServices from "@/components/HealthcareServices";
import HealthcareTech from "@/components/HealthcareTech";
import HealthcareValueProp from "@/components/HealthcareValueProp";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

export default function HealthcareBpoPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <HealthcareHero />
      <HealthcareServices />
      <HealthcareTech />
      <HealthcareValueProp />
      <div className="pt-10">
        <ContactSection />
      </div>
      <Footer />
      <FloatingChat />
    </main>
  );
}
