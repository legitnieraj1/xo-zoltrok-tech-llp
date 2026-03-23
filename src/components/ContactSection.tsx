"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-light py-20 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Start your digital ride{" "}
              <span className="gradient-text">with Zoltrok.</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Optimize processes, attract clients, and accelerate your business
              growth with our cutting-edge digital solutions.
            </p>

            {/* Location */}
            <div className="mb-6">
              <p className="text-white font-semibold mb-3">Our Office</p>
              <span className="inline-block gradient-orange text-white px-4 py-2 rounded-full text-sm font-medium">
                India
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  3rd Floor, Vue Grande, C4 &amp; C5, Thirumalaisamy St,
                  Siddhapudur, Balasundaram Layout, Chinna, Coimbatore,
                  Tamil Nadu 641044
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={18} className="text-brand-orange flex-shrink-0" />
                <span className="text-sm">hello@zoltroktech.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={18} className="text-brand-orange flex-shrink-0" />
                <span className="text-sm">+91 90435 30842</span>
              </div>
            </div>
          </motion.div>

          {/* Right side — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange transition-colors"
                />
                <div className="flex">
                  <span className="bg-white/10 border border-white/10 rounded-l-lg px-3 py-3 text-gray-400 text-sm flex items-center">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="Contact number"
                    className="bg-white/10 border border-white/10 border-l-0 rounded-r-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange transition-colors flex-1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company name (optional)"
                  className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange transition-colors"
                />
                <label className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-gray-500 text-sm cursor-pointer hover:border-brand-orange transition-colors flex items-center gap-2">
                  <span>Upload specifications</span>
                  <input type="file" className="hidden" />
                </label>
              </div>
              <textarea
                rows={4}
                placeholder="Tell us about your project (optional)"
                className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange transition-colors resize-none"
              />
              <button
                type="submit"
                className="flex items-center gap-2 bg-navy text-white font-semibold px-8 py-3 rounded-lg hover:bg-navy-dark transition-colors"
              >
                Send request
                <Send size={16} />
              </button>
              <p className="text-gray-500 text-xs">
                By submitting, you agree to our Terms &amp; Conditions and Privacy
                Policy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
