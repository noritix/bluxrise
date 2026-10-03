"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Check,
  Building2,
  Sparkles,
  CircleCheckBig
} from "lucide-react";

const PROJECT_TYPES = [
  "Commercial High-Rise",
  "Industrial Infrastructure",
  "Turnkey Design-Build",
  "Project Management & BIM",
  "Corporate Training"
];

const BUDGET_RANGES = [
  "Under $10 Million",
  "$10M - $50M",
  "$50M - $150M",
  "$150M+ Master Development"
];

const TRAINING_BENEFITS = [
  "Tailored modules for your project specifications",
  "Flexible delivery at your premises or training venue",
  "PE-certified and ISO 45001 expert trainers",
  "Workforce competency audit reports & certificates",
];

export default function ContactPage() {
  const [selectedScope, setSelectedScope] = useState("Commercial High-Rise");
  const [selectedBudget, setSelectedBudget] = useState("$10M - $50M");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setFormData({ ...formData, phone: value });
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#f8f7f4] text-[#121316] flex flex-col font-display selection:bg-[#121316] selection:text-white p-2 sm:p-4 space-y-6">

        {/* ════════════════════════════════════════════════════════
            1. HERO HEADER CONTAINER (Dark Card Shell)
        ════════════════════════════════════════════════════════ */}
        <header className="relative w-full bg-[#121316] text-white rounded-2xl sm:rounded-[36px] border border-white/10 shadow-2xl overflow-hidden">
          <Navbar />

          <div className="pt-24 sm:pt-36 pb-8 sm:pb-16 px-4 sm:px-12 lg:px-16 max-w-360 mx-auto space-y-6 sm:space-y-8">
            
            {/* Top Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <span className="inline-flex items-center space-x-2 text-xs font-bold text-white bg-[#121316] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#0052ff]/30 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-[#0052ff]" />
                <span>Inquiries &amp; Regional Desks</span>
              </span>

              <div className="flex items-center space-x-2 text-[11px] sm:text-xs text-white/70">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Tender Desk Active • 24/7 Site Emergency Log</span>
              </div>
            </div>

            {/* Title & Headline Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end">
              <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-[1.02]">
                  Initiate Your Project Inquiry
                </h1>
                <p className="text-sm sm:text-lg lg:text-xl text-neutral-300 font-light max-w-3xl leading-relaxed">
                  Single-source BCA Grade A1 master contracting, 5D BIM pre-construction planning, and commercial project tenders across Asia-Pacific.
                </p>
              </div>

              {/* Direct Quick Specs Sidebar Card */}
              <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 backdrop-blur-md">
                <div className="text-xs sm:text-sm font-bold text-[#0052ff] pb-2 border-b border-white/10 flex items-center justify-between">
                  <span>Direct Communication Channels</span>
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-white/60 shrink-0">Commercial Tenders:</span>
                    <a href="mailto:tender@bluxrise.com" className="font-bold text-white hover:text-[#0052ff] transition-colors truncate">
                      tender@bluxrise.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-white/60 shrink-0">Direct Hotline:</span>
                    <a href="tel:+6567890123" className="font-bold text-white hover:text-[#0052ff] transition-colors truncate">
                      +65 6789 0123
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-white/60 shrink-0">Corporate Training:</span>
                    <a href="mailto:training@bluxrise.com" className="font-bold text-white hover:text-[#0052ff] transition-colors truncate">
                      training@bluxrise.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Channel Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-xl sm:rounded-2xl space-y-1 hover:bg-white/10 transition-colors">
                <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-[#0052ff]" />
                <div className="text-[11px] sm:text-xs text-white/50">Tender Desk Telephone</div>
                <div className="text-xs sm:text-sm font-bold text-white">+65 6789 0123</div>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-xl sm:rounded-2xl space-y-1 hover:bg-white/10 transition-colors">
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-[#0052ff]" />
                <div className="text-[11px] sm:text-xs text-white/50">Official Tendering Email</div>
                <div className="text-xs sm:text-sm font-bold text-white truncate">hello@bluxrise.com</div>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-xl sm:rounded-2xl space-y-1 hover:bg-white/10 transition-colors">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-[#0052ff]" />
                <div className="text-[11px] sm:text-xs text-white/50">Regional Headquarters</div>
                <div className="text-xs sm:text-sm font-bold text-white">Asia Square Tower 1, SG</div>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-xl sm:rounded-2xl space-y-1 hover:bg-white/10 transition-colors">
                <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-[#0052ff]" />
                <div className="text-[11px] sm:text-xs text-white/50">Operating Hours</div>
                <div className="text-xs sm:text-sm font-bold text-white">Mon – Fri: 08:00 – 18:00 SGT</div>
              </div>
            </div>

          </div>
        </header>

        {/* ════════════════════════════════════════════════════════
            2. INTERACTIVE CONTACT FORM & DIRECT DESK (2 COLUMNS)
        ════════════════════════════════════════════════════════ */}
        <main className="max-w-360 mx-auto w-full space-y-6">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Left Column: Interactive Form Card */}
            <div className="lg:col-span-7 bg-white border border-[#121316]/10 rounded-2xl sm:rounded-4xl p-5 sm:p-8 lg:p-12 shadow-sm space-y-6 sm:space-y-8 flex flex-col justify-between">
              
              <div>
                <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#222326] mb-1.5 sm:mb-2">
                  <span>Let&apos;s Connect</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
                  Request a Structural Cost Estimate
                </h2>
                <p className="text-xs sm:text-sm text-[#5c606b] leading-relaxed pt-1.5 sm:pt-2">
                  Select your project parameters below. Our engineering directors will review your brief and respond within 24 business hours.
                </p>
              </div>

              {formSubmitted ? (
                /* ─── SUCCESS STATE ─── */
                <div className="bg-[#121316] text-white p-6 sm:p-12 rounded-2xl sm:rounded-3xl text-center space-y-5 sm:space-y-6 my-auto border border-white/10">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CircleCheckBig className="w-6 sm:w-8 h-6 sm:h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our master contracting team will review your <span className="text-[#0052ff] font-semibold">{selectedScope}</span> inquiry ({selectedBudget}) and contact you promptly.
                    </p>
                  </div>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#0052ff] text-white font-bold text-xs sm:text-sm hover:bg-[#0040d9] transition-all cursor-pointer shadow-lg"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* ─── FORM FIELDS ─── */
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

                  {/* Scope Selector Pills */}
                  <div className="space-y-2">
                    <label className="block text-[11px] sm:text-xs font-bold text-[#121316] uppercase tracking-wider">
                      Select Project Scope *
                    </label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {PROJECT_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedScope(type)}
                          className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                            selectedScope === type
                              ? "bg-[#121316] border-[#121316] text-white shadow-md"
                              : "bg-[#f8f7f4] border-[#121316]/15 text-[#121316]/70 hover:bg-[#121316]/10"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector Pills */}
                  <div className="space-y-2">
                    <label className="block text-[11px] sm:text-xs font-bold text-[#121316] uppercase tracking-wider">
                      Estimated Budget Scale *
                    </label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {BUDGET_RANGES.map((bRange) => (
                        <button
                          key={bRange}
                          type="button"
                          onClick={() => setSelectedBudget(bRange)}
                          className={`px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition-all duration-200 cursor-pointer border ${
                            selectedBudget === bRange
                              ? "bg-[#0052ff] border-[#0052ff] text-white shadow-md"
                              : "bg-[#f8f7f4] border-[#121316]/15 text-[#121316]/70 hover:bg-white"
                          }`}
                        >
                          {bRange}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1">
                      <label className="block text-[11px] sm:text-xs font-bold text-[#121316]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marcus Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#f8f7f4] border border-[#121316]/15 rounded-xl text-xs sm:text-sm text-[#121316] placeholder:text-[#121316]/40 focus:outline-none focus:bg-white focus:border-[#0052ff] transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] sm:text-xs font-bold text-[#121316]">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="m.vance@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#f8f7f4] border border-[#121316]/15 rounded-xl text-xs sm:text-sm text-[#121316] placeholder:text-[#121316]/40 focus:outline-none focus:bg-white focus:border-[#0052ff] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1">
                      <label className="block text-[11px] sm:text-xs font-bold text-[#121316]">
                        Direct Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        inputMode="numeric"
                        placeholder="6567890123"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#f8f7f4] border border-[#121316]/15 rounded-xl text-xs sm:text-sm text-[#121316] placeholder:text-[#121316]/40 focus:outline-none focus:bg-white focus:border-[#0052ff] transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] sm:text-xs font-bold text-[#121316]">
                        Company / Developer Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Landmark Properties"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#f8f7f4] border border-[#121316]/15 rounded-xl text-xs sm:text-sm text-[#121316] placeholder:text-[#121316]/40 focus:outline-none focus:bg-white focus:border-[#0052ff] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] sm:text-xs font-bold text-[#121316]">
                      Project Brief &amp; Specifications *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe site location, structural parameters, target timeline, and 5D BIM requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#f8f7f4] border border-[#121316]/15 rounded-xl text-xs sm:text-sm text-[#121316] placeholder:text-[#121316]/40 focus:outline-none focus:bg-white focus:border-[#0052ff] transition-all resize-none"
                    />
                  </div>

                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 bg-[#121316] text-white hover:bg-[#0052ff] font-bold text-xs sm:text-sm rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-xl group"
                >
                  <span>Submit Inquiry</span>
                </button>

              </form>
            )}

          </div>

          {/* Right Column: Customised Corporate Training Card */}
          <div className="contact-animate lg:col-span-5 bg-linear-to-br from-[#0052ff] via-[#0042cc] to-[#002ba8] text-white p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 flex flex-col justify-between space-y-6 sm:space-y-8 relative overflow-hidden group">
            
            {/* Ambient Background Decorative Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-black/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-5 sm:space-y-6">
              
              {/* Top Pill Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm w-fit">
                <Calendar className="w-3.5 h-3.5 text-blue-200" />
                <span>Corporate Training</span>
              </div>

              {/* Card Main Title */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-4xl lg:text-[40px] font-bold leading-[1.08] tracking-tight text-white">
                  Customised Corporate Training
                </h3>
                
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed pt-1 font-normal">
                  Programs developed around client project requirements, workforce competency needs, and statutory obligations.
                </p>
              </div>

              <div className="border-t border-white/20 my-3 sm:my-4" />

              {/* Checklist Points */}
              <ul className="space-y-2.5 sm:space-y-3.5">
                {TRAINING_BENEFITS.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 sm:space-x-3 text-xs sm:text-sm font-medium text-white/95 leading-snug">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5 border border-white/30">
                      <Check className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Core Training Tracks & Modules */}
              <div className="space-y-3 pt-1">
                <div className="text-xs sm:text-sm font-semibold text-white/80 border-t border-white/20 pt-3 sm:pt-4">
                  Core Training Tracks &amp; Certifications
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="bg-white/10 border border-white/15 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl space-y-1">
                    <div className="text-xs font-bold text-white">5D BIM &amp; Digital Twin</div>
                    <div className="text-[11px] text-white/75 leading-tight">Pre-construction spatial clash protocols &amp; virtual twin modeling.</div>
                  </div>

                  <div className="bg-white/10 border border-white/15 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl space-y-1">
                    <div className="text-xs font-bold text-white">ISO 45001 Safety Standards</div>
                    <div className="text-[11px] text-white/75 leading-tight">High-rise scaffolding, heavy rigging, &amp; zero-harm site superintendence.</div>
                  </div>

                  <div className="bg-white/10 border border-white/15 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl space-y-1">
                    <div className="text-xs font-bold text-white">Industrial MEP &amp; Cleanroom</div>
                    <div className="text-[11px] text-white/75 leading-tight">Semiconductor HVAC ducting, process piping, &amp; chemical containment.</div>
                  </div>

                  <div className="bg-white/10 border border-white/15 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl space-y-1">
                    <div className="text-xs font-bold text-white">PE Structural Audits</div>
                    <div className="text-[11px] text-white/75 leading-tight">Deep excavation foundation safety &amp; load-bearing calculations.</div>
                  </div>
                </div>

                {/* Training Accreditation Micro Stats */}
                <div className="bg-white/15 border border-white/20 p-3 sm:p-4 rounded-xl sm:rounded-2xl grid grid-cols-3 divide-x divide-white/20 text-center text-xs mt-3">
                  <div className="space-y-0.5 px-1">
                    <div className="font-extrabold text-white text-sm sm:text-base">5,000+</div>
                    <div className="text-[10px] text-white/80">Professionals</div>
                  </div>
                  <div className="space-y-0.5 px-1">
                    <div className="font-extrabold text-white text-sm sm:text-base">PE &amp; MOM</div>
                    <div className="text-[10px] text-white/80">Certified</div>
                  </div>
                  <div className="space-y-0.5 px-1">
                    <div className="font-extrabold text-white text-sm sm:text-base">100%</div>
                    <div className="text-[10px] text-white/80">Audit Compliant</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Section: Brand Credit */}
            <div className="relative z-10 space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-white/20">
              <div className="flex items-center justify-between text-[11px] text-white/70 font-medium">
                <span>BluxRise Construction Pte Ltd</span>
                <span>Singapore</span>
              </div>
            </div>

          </div>

        </div>

      </main>

        {/* Global Footer */}
        <Footer />

      </div>
    </SmoothScroll>
  );
}
