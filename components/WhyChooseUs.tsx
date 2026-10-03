"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

/* ── Hero Metric Data ── */
const heroMetric = {
  metric: "98.7%",
  label: "On-Time Delivery",
  detail: "Verified across 120+ completed commercial projects since 2006.",
};

// Logo marquee data
const clientLogos = [
  { name: "BECHTEL", image: "/logos/bechtel.png" },
  { name: "TURNER", image: "/logos/turner.png" },
  { name: "SKANSKA", image: "/logos/skanska.png" },
  { name: "BALFOUR BEATTY", image: "/logos/balfour.png" },
  { name: "HYUNDAI E&C", image: "/logos/hyundai.png" },
  { name: "HOCHTIEF", image: "/logos/hochtief.png" },
];

const equipmentLogos = [
  { name: "CATERPILLAR", image: "/logos/caterpillar.png" },
  { name: "KOMATSU", image: "/logos/komatsu.png" },
  { name: "SIEMENS", image: "/logos/siemens.png" },
  { name: "LIEBHERR", image: "/logos/liebherr.png" },
  { name: "VOLVO CE", image: "/logos/volvo.png" },
  { name: "HITACHI", image: "/logos/hitachi.png" },
];

const marqueeClients = [...clientLogos, ...clientLogos, ...clientLogos];
const marqueeEquipment = [
  ...equipmentLogos,
  ...equipmentLogos,
  ...equipmentLogos,
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const metricRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      // Staggered entrance for all trust items
      gsap.fromTo(
        ".trust-reveal",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.9,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      // Animate the hero metric counter (98.7)
      const heroEl = metricRefs.current[0];
      if (heroEl) {
        const proxy = { val: 0 };
        gsap.to(proxy, {
          val: 98.7,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroEl,
            start: "top 85%",
          },
          onUpdate: () => {
            if (heroEl) heroEl.textContent = proxy.val.toFixed(1) + "%";
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="why-us">
      {/* ═══ DARK EVIDENCE BENTO SECTION ═══ */}
      <div className="bg-[#121316] py-28 md:py-36 relative overflow-hidden font-display">
        {/* Top Sharp Wave Divider */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
          <svg
            className="relative block w-full h-8 sm:h-12 md:h-16 lg:h-20 text-[#f8f7f4]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,0 L0,50 L100,5 L200,60 L300,10 L400,65 L500,15 L600,70 L700,20 L800,75 L900,25 L1000,80 L1100,30 L1200,60 L1200,0 Z" />
          </svg>
        </div>
        <div className="max-w-350 mx-auto px-6 md:px-12 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div className="space-y-4 max-w-2xl">
              <p className="trust-reveal text-sm text-white/40 font-medium">
                Why Bluxrise
              </p>
              <h2 className="trust-reveal text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[0.95]">
                We don&apos;t make claims.
                <br />
                <span className="text-[#0052ff]">We prove them.</span>
              </h2>
            </div>
            <p className="trust-reveal text-sm text-white/50 max-w-md leading-relaxed lg:text-right">
              Every metric below is contractually backed, independently
              audited, and verified across 18 years of commercial delivery.
            </p>
          </div>

          {/* ── BENTO GRID LAYOUT ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Left Column (lg:col-span-5): On-Time Delivery Card + Partner With Us Card */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              {/* 1. On-Time Delivery Card (Data section description moved to right side) */}
              <div className="trust-reveal min-h-125 sm:min-h-85 relative p-8 sm:p-9 rounded-2xl border border-white/10 overflow-hidden group flex flex-col justify-end flex-1">
                {/* Background Image with Scale Animation */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/on-time-delivery.jpg')" }}
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#121316] via-[#121316]/10 to-transparent" />

                {/* Content - Metric on Left, Description on Right */}
                <div className="relative z-10 mt-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <div className="text-6xl sm:text-7xl font-bold text-white tracking-tight leading-none mb-1 drop-shadow-md">
                      <span
                        ref={(el) => {
                          metricRefs.current[0] = el;
                        }}
                      >
                        0%
                      </span>
                    </div>
                    <div className="text-base sm:text-lg font-semibold text-white/95">
                      {heroMetric.label}
                    </div>
                  </div>

                  {/* Description moved to right side */}
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-52.5 sm:text-right">
                    {heroMetric.detail}
                  </p>
                </div>
              </div>

              {/* 2. Partner With Us Card (Desktop: below On-Time Delivery; Mobile: hidden here, moved to section bottom) */}
              <div className="trust-reveal hidden lg:flex min-h-70 relative p-8 sm:p-9 rounded-2xl border border-white/10 overflow-hidden group flex-col justify-between shadow-2xl">
                {/* Background Image: partner-with-us.jpg */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/partner-with-us.jpg')" }}
                />
                {/* Dark Overlay Gradient for Legibility */}
                <div className="absolute inset-0 bg-linear-to-t from-[#121316] via-[#121316]/25 to-[#121316]/50" />

                <div className="relative z-10 space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#f8f7f4] tracking-tight pt-1">
                    Partner With Us On Your Next Landmark
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed max-w-sm">
                    Guaranteed timelines, 5D BIM price locking, and 18+ years of zero cost overruns.
                  </p>
                </div>

                <div className="relative z-10 pt-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center space-x-2 text-sm font-semibold text-[#121316] bg-white hover:bg-white/90 px-6 py-3 rounded-full transition-all shadow-xl hover:shadow-2xl group"
                  >
                    <span>Partner With Us</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Side Bento Cards Grid (lg:col-span-7) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* 3. Quality Assurance Card (White BG, Custom Gem Diamond SVG) */}
              <div className="trust-reveal p-7 rounded-2xl bg-white text-[#121316] relative overflow-hidden group shadow-xl flex flex-col justify-between min-h-65 border border-white">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 flex items-center justify-center text-[#0052ff] group-hover:scale-110 transition-transform duration-300">
                    {/* Custom Faceted Diamond Gemstone SVG */}
                    <svg
                      className="w-12 h-12"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 3h12l4 6-10 12L2 9z"
                        fill="#0052ff"
                        fillOpacity="0.15"
                        stroke="#0052ff"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 3h8l2 6H6l2-6z"
                        fill="#0052ff"
                        fillOpacity="0.25"
                        stroke="#0052ff"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 9v12"
                        stroke="#0052ff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 9l6 12"
                        stroke="#0052ff"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 9l-6 12"
                        stroke="#0052ff"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M2 9h20"
                        stroke="#0052ff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8 3l4 6l4-6"
                        stroke="#0052ff"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ffffff] bg-[#121316] px-3 py-1 rounded-full">
                    ISO 9001
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#121316] tracking-tight mb-2">
                    Quality Assurance
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5c606b] leading-relaxed">
                    Zero-defect standard enforced through 100% independent multi-stage site audits, certified structural materials, and strict quality compliance.
                  </p>
                </div>
              </div>

              {/* 4. Full Accountability Card (Blue BG, Blueprint Sketch SVG) */}
              <div className="trust-reveal p-7 rounded-2xl bg-[#0052ff] text-white relative overflow-hidden group shadow-xl flex flex-col justify-between min-h-65 border border-blue-500">
                {/* Architectural Blueprint / Sketch SVG in Background */}
                <svg
                  className="absolute -right-6 -bottom-6 w-48 h-48 text-white/15 pointer-events-none group-hover:scale-110 transition-transform duration-500"
                  viewBox="0 0 200 200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="100" cy="100" r="80" strokeDasharray="4 4" />
                  <path d="M20 100h160M100 20v160M40 40l120 120M160 40L40 160" />
                  <rect x="60" y="60" width="80" height="80" strokeWidth="2" />
                  <path d="M60 60l80 80M140 60l-80 80" strokeDasharray="2 2" />
                </svg>

                <div className="flex items-start mb-4 relative z-10">
                  <div className="w-12 h-12  flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck className="w-12 h-12" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    Full Accountability. Zero Friction.
                  </h3>
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                    5D BIM precision budget locking, real-time client portal tracking, and contractually guaranteed zero cost overrun execution.
                  </p>
                </div>
              </div>

              {/* 5. Experienced Engineers Card (Image BG: experience-engineers.jpg) */}
              <div className="trust-reveal sm:col-span-2 p-7 rounded-2xl relative overflow-hidden group flex flex-col justify-end min-h-60 border border-white/10">
                {/* Background Image with Scale Animation */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/experience-engineers.jpg')" }}
                />
                {/* Dark Overlay for Legibility */}
                <div className="absolute inset-0 bg-linear-to-t from-[#121316] via-[#121316]/80 to-transparent" />

                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                    Experienced Engineers
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-xl">
                    Led by chartered structural engineers and senior project directors overseeing 4.2M+ safe work hours with zero lost-time incidents.
                  </p>
                </div>
              </div>

              {/* 6. Enterprise Partnerships & Brand Scroll Marquee Card */}
              <div className="trust-reveal sm:col-span-2 p-6 sm:p-7 rounded-2xl bg-white/3 border border-white/10 overflow-hidden group flex flex-col justify-between min-h-55">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0052ff]">
                      Partnerships
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      Enterprise Clients & Equipment Network
                    </h3>
                  </div>
                  <span className="hidden sm:inline-flex text-[11px] font-medium text-white/40 bg-white/5 border border-white/8 px-3 py-1 rounded-full">
                    Global Network
                  </span>
                </div>

                {/* Marquee Row 1: Clients */}
                <div className="relative w-full overflow-hidden py-2.5">
                  <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-[#121316] to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-[#121316] to-transparent z-10 pointer-events-none" />
                  <div className="animate-marquee-left flex items-center">
                    {marqueeClients.map((client, idx) => (
                      <div key={idx} className="shrink-0 px-6">
                        <Image
                          src={client.image}
                          alt={client.name}
                          width={120}
                          height={60}
                          className="h-15 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Marquee Row 2: Equipment */}
                <div className="relative w-full overflow-hidden py-2.5 border-t border-white/5 mt-1">
                  <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-[#121316] to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-[#121316] to-transparent z-10 pointer-events-none" />
                  <div className="animate-marquee-right flex items-center">
                    {marqueeEquipment.map((partner, idx) => (
                      <div key={idx} className="shrink-0 px-6">
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          width={120}
                          height={60}
                          className="h-15 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Partner With Us Card (Mobile View Only: placed at the section bottom) */}
          <div className="trust-reveal flex lg:hidden min-h-70 relative p-8 sm:p-9 rounded-2xl border border-white/10 overflow-hidden group flex-col justify-between shadow-2xl mt-6">
            {/* Background Image: partner-with-us.jpg */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/partner-with-us.jpg')" }}
            />
            {/* Dark Overlay Gradient for Legibility */}
            <div className="absolute inset-0 bg-linear-to-t from-[#121316] via-[#121316]/25 to-[#121316]/50" />

            <div className="relative z-10 space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-1">
                Partner With Us On Your Next Landmark
              </h3>
              <p className="text-xs text-white/70 leading-relaxed max-w-sm">
                Guaranteed timelines, 5D BIM price locking, and 18+ years of zero cost overruns.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#121316] bg-white hover:bg-white/90 px-6 py-3 rounded-full transition-all shadow-xl hover:shadow-2xl group"
              >
                <span>Partner With Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sharp Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
          <svg
            className="relative block w-full h-8 sm:h-12 md:h-16 lg:h-20 text-[#f8f7f4]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,120 L0,70 L100,115 L200,60 L300,110 L400,55 L500,105 L600,50 L700,100 L800,45 L900,95 L1000,40 L1100,90 L1200,60 L1200,120 Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
