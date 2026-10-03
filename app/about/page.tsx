"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import {
  Award,
  CheckCircle2,
  Globe2
} from "lucide-react";

/* ── STATS DATA ── */
const STATS = [
  { value: "18+", label: "Years Established" },
  { value: "$1.2B+", label: "Completed Tenders" },
  { value: "120+", label: "Landmark Projects" },
  { value: "4.2M+", label: "Safe Work Hours" },
];

/* ── MILESTONES DATA ── */
const MILESTONES = [
  {
    year: "2006",
    title: "Founding & Structural Practice",
    description: "Established in Jurong, Singapore as a specialized structural engineering boutique focusing on complex foundation and steel frame verification.",
  },
  {
    year: "2012",
    title: "BCA General Builder License",
    description: "Obtained General Builder Class 1 license and expanded into full-scope industrial facility construction and logistics hubs.",
  },
  {
    year: "2018",
    title: "Marina Tower Commercial Landmark",
    description: "Completed the $140M Marina Tower commercial high-rise, establishing BluxRise as a premier master contractor for corporate headquarters.",
  },
  {
    year: "2023",
    title: "100% 5D BIM Virtual Pre-Construction",
    description: "Digitized 100% of project workflows with virtual 3D BIM clash detection prior to site groundbreaking, eliminating field rework.",
  },
  {
    year: "2026",
    title: "BCA Grade A1 & 4.2M Safe Hours",
    description: "Earned Singapore BCA Grade A1 Accreditation, allowing unlimited tender value for public and private commercial developments.",
  },
];


/* ── LEADERSHIP TEAM ── */
const LEADERSHIP = [
  {
    name: "Robert Vance",
    role: "Managing Director & Founder",
    credentials: "PE, P.Eng, B.Eng (Civil)",
    bio: "Over 24 years of structural engineering leadership in Singapore. Robert founded BluxRise with a commitment to zero cost overrun execution.",
    image: "/team/robert-vance.png",
  },
  {
    name: "Dr. Elena Rostova",
    role: "VP of Structural Engineering",
    credentials: "Ph.D., MSc Structural Mechanics",
    bio: "Pioneered BluxRise's 5D BIM pre-construction framework. Elena leads a team of 45+ chartered engineers and BIM specialists.",
    image: "/team/elena-rostova.png",
  },
  {
    name: "Marcus Tan",
    role: "COO & Chief Safety Officer",
    credentials: "BizSAFE Master Auditor, WSH Officer",
    bio: "Director of site superintendence overseeing 4.2M+ safe work hours with zero lost-time injury records across all commercial sites.",
    image: "/team/marcus-tan.png",
  },
];

/* ── AWARDS & RECOGNITION ── */
const AWARDS_DATA = [
  {
    year: "2025",
    title: "BCA Construction Excellence Award",
    issuer: "BCA Singapore",
    category: "Commercial High-Rise",
  },
  {
    year: "2024",
    title: "WSH Safety Excellence Award",
    issuer: "Ministry of Manpower",
    category: "BizSAFE Star Level",
  },
  {
    year: "2023",
    title: "BCA Green Mark Platinum Award",
    issuer: "National Environment Agency",
    category: "Sustainable Infrastructure",
  },
  {
    year: "2021",
    title: "IES Structural Innovation Award",
    issuer: "Institution of Engineers",
    category: "5D BIM Pre-Construction",
  },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Individual reveal triggers for each section/element
    const revealElements = gsap.utils.toArray<HTMLElement>(".about-reveal");
    revealElements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

    // Scroll-driven central timeline active progress line
    gsap.fromTo(
      ".timeline-progress-fill",
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 65%",
          end: "bottom 75%",
          scrub: true,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <SmoothScroll>
      <div ref={containerRef} className="min-h-screen bg-[#f8f7f4] text-[#121316] flex flex-col font-display selection:bg-[#121316] selection:text-white p-2 sm:p-4">

        {/* Full Viewport Dark Hero Container (100vh with Outer Margin & Rounded Border) */}
        <header className="relative w-full min-h-0 lg:min-h-[calc(97vh-1rem)] bg-[#121316] text-white rounded-3xl sm:rounded-[36px] border border-white/10 shadow-2xl overflow-hidden flex flex-col lg:grid lg:grid-cols-12 group">

          {/* Embedded Navbar over Dark Hero */}
          <Navbar />

          {/* Hero Image Container (Top on Mobile, Right Column on Desktop) */}
          <div className="about-reveal order-1 lg:order-2 lg:col-span-6 relative w-full h-52 sm:h-72 lg:h-full min-h-75 lg:min-h-[90vh] overflow-hidden mt-0">
            <Image
              src="/about-us.jpg"
              alt="BluxRise About Us Hero"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-b from-[#121316]/70 via-transparent to-[#121316] lg:hidden" />
          </div>

          {/* Content Column: Tag, Title, Subtitle & 2x2 Stat Cards (Below Image on Mobile, Left Column on Desktop) */}
          <div className="about-reveal order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center px-4 sm:px-10 lg:px-14 pt-5 sm:pt-10 lg:pt-32 pb-8 sm:pb-12 relative z-20 space-y-4 sm:space-y-6">

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.05]">
              Building Singapore&apos;s Skyline with <span className="text-[#0052ff]">Quality &amp; Trust</span>.
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-xs sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-light max-w-2xl">
              We are a leading construction company in Singapore. We build high-rise office towers, industrial hubs, and commercial buildings safely and on time.
            </p>

            {/* Live KPI Stats Bento Bar inside Left Content */}
            <div className="pt-2 sm:pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              {STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#18191e] border border-white/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl space-y-1 shadow-md hover:border-[#0052ff]/50 transition-all group"
                >
                  <div className="text-base sm:text-2xl font-bold text-[#0052ff] tracking-tight transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-white">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </header>

        <main className="grow">

          {/* ════════════════════════════════════════════════════════
              2. OUR STORY & PHILOSOPHY
          ════════════════════════════════════════════════════════ */}
          <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-[#f8f7f4]">
            <div className="max-w-350 mx-auto space-y-8 sm:space-y-12">

              <div className="about-reveal">
                <div className="space-y-2 max-w-xl">
                  <p className="text-xs sm:text-sm text-[#5c606b] font-semibold">
                    Our Origin &amp; Vision
                  </p>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight leading-tight">
                    Built on structural rigor, driven by innovation.
                  </h2>
                </div>
              </div>

              {/* 2-Column Bento Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch">

                {/* Left Card: Origin Story with Image BG */}
                <div className="about-reveal lg:col-span-6 relative bg-[#121316] text-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl overflow-hidden min-h-72 sm:min-h-96 lg:min-h-105 flex flex-col justify-start shadow-xl border border-white/10 group">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: "url('/our-origin.jpg')" }}
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-[#121316] via-[#121316]/30 to-transparent" />

                  <div className="relative z-10 space-y-3 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                      Master Contracting with Single-Point Responsibility
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-lg">
                      We take direct ownership of every project from groundbreaking to final handover, combining top-tier heavy machinery fleets with chartered engineering superintendence.
                    </p>
                  </div>
                </div>

                {/* Right Column: Blue Origin & Evolution Card + Black Mission Card */}
                <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 justify-between">

                  {/* Blue Background Card: Founded in 2006 Origin & Evolution */}
                  <div className="about-reveal bg-[#0052ff] text-white p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl flex flex-col justify-between space-y-4 border border-blue-400/30 group hover:border-white/40 transition-all grow">
                    <div className="space-y-3">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                        Founded in 2006, BluxRise evolved from a specialized structural engineering boutique into one of Singapore’s most trusted master contractors.
                      </h3>
                    </div>
                  </div>

                  {/* Black Card: Our Mission & 5D BIM Vision (White & Blue Mixed Text) */}
                  <div className="about-reveal bg-[#121316] text-white p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl flex flex-col justify-between space-y-4 border border-white/10 group hover:border-[#0052ff]/50 transition-all grow">
                    <div className="space-y-3">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                        Eliminating Risk Through 5D BIM Pre-Construction
                      </h3>

                      <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                        Our mission is to eliminate field re-work and budget creep by constructing every commercial landmark virtually in 3D BIM prior to physical site execution.
                      </p>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1">
                        {[
                          "Virtual clash resolution",
                          "Zero surprise overruns",
                          "PE-certified calculations",
                          "Real-time portal tracking"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-xs font-semibold text-white/90">
                            <CheckCircle2 className="w-4 h-4 text-[#0052ff] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Bento Row: 3 Core Engineering Pillar Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

                {/* Pillar 1: ISO 9001 Quality Control (White Background, Black Text, Pure Diamond SVG) */}
                <div className="about-reveal bg-white text-[#121316] p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-[#121316]/10 shadow-xl flex flex-col justify-between group hover:border-[#0052ff]/50 transition-all duration-300 min-h-auto sm:min-h-70">
                  <div>
                    {/* Pure Diamond SVG Icon (No background color, no border, pure icon only) */}
                    <svg
                      className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 3h12l4 6-10 12L2 9z"
                        fill="#000000"
                        fillOpacity="0.15"
                        stroke="#000000"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 3h8l2 6H6l2-6z"
                        fill="#000000"
                        fillOpacity="0.25"
                        stroke="#000000"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 9v12"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 9l6 12"
                        stroke="#000000"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 9l-6 12"
                        stroke="#000000"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M2 9h20"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8 3l4 6l4-6"
                        stroke="#000000"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <h4 className="text-xl sm:text-2xl font-bold text-[#121316] tracking-tight leading-snug group-hover:text-[#0052ff] transition-colors mb-2 sm:mb-3">
                      ISO 9001 Quality Control
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5c606b] leading-relaxed">
                      Multi-stage independent audits, certified steel superstructures, and zero-tolerance material verification across every project phase.
                    </p>
                  </div>
                </div>

                {/* Pillar 2: Environmental Sustainability (Globe Icon) */}
                <div className="about-reveal bg-[#121316] text-white p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:border-[#0052ff]/60 transition-all duration-300 min-h-50 sm:min-h-70">
                  <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-[#0052ff]/15 rounded-full blur-2xl group-hover:bg-[#0052ff]/25 transition-all duration-500 pointer-events-none" />

                  <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                    <div className="space-y-2 sm:space-y-3 sm:pr-12">
                      <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-[#0052ff] transition-colors">
                        Environmental Sustainability
                      </h4>
                      <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                        LEED Platinum &amp; BCA Green Mark compliance, low-carbon concrete formulations, and sustainable waste recycling protocols.
                      </p>
                    </div>

                    {/* Globe Icon in Bottom Right Corner */}
                    <div className="absolute right-5 bottom-3 text-[#ffffff]">
                      <Globe2 className="w-10 h-10 sm:w-15 sm:h-15 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                    </div>
                  </div>
                </div>

                {/* Pillar 3: Uncompromised Safety Measures (safety.jpg Background, Content at Bottom) */}
                <div className="about-reveal relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-white/10 p-5 sm:p-7 md:p-8 flex flex-col justify-end group min-h-60 sm:min-h-70 bg-[#121316]">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: "url('/safety.jpg')" }}
                  />
                  {/* Bottom Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#121316] via-[#121316]/10 via-60% to-transparent" />

                  <div className="relative z-10 space-y-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      Uncompromised Safety Measures
                    </h4>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                      ISO 45001 &amp; BizSAFE Star protocols protecting every technician, engineer, and subcontractor on active job sites.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* ════════════════════════════════════════════════════════
              4. COMPANY HISTORY & MILESTONES (2006 – 2026 Timeline)
          ════════════════════════════════════════════════════════ */}
          <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-[#f8f7f4]">
            <div className="max-w-350 mx-auto space-y-10 sm:space-y-14 md:space-y-16">

              {/* Section Header */}
              <div className="about-reveal space-y-2 sm:space-y-3 text-center">
                <p className="text-xs sm:text-sm text-[#5c606b] font-semibold">
                  Company Milestones
                </p>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight">
                  Two Decades of Landmark Delivery
                </h2>
              </div>

              {/* Alternating Centered Timeline Container */}
              <div className="timeline-container relative max-w-5xl mx-auto py-4">

                {/* Central Black-Coated Base Track Line */}
                <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-1 bg-[#121316] rounded-full" />

                {/* Central Animated Active Blue Progress Fill Line */}
                <div className="timeline-progress-fill absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-1 bg-[#0052ff] rounded-full z-10" />

                {/* Timeline Items List */}
                <div className="space-y-8 sm:space-y-12 md:space-y-16 relative z-20">
                  {MILESTONES.map((item, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <div
                        key={idx}
                        className={`about-reveal relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""
                          } group`}
                      >
                        {/* Central Indicator Dot */}
                        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-4 border-[#0052ff] shadow-md group-hover:scale-125 transition-transform duration-300 z-30" />

                        {/* Card Container (Left or Right on desktop) */}
                        <div
                          className={`w-full md:w-[calc(50%-2.5rem)] pl-9 sm:pl-12 md:pl-0 ${isEven ? "md:text-right" : "md:text-left"
                            }`}
                        >
                          <div
                            className={`bg-white p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-[#121316]/10 shadow-sm hover:shadow-xl transition-all duration-300 space-y-2.5 sm:space-y-3 block text-left w-full max-w-lg ${isEven ? "md:ml-auto" : "md:mr-auto"
                              }`}
                          >
                            {/* Year Pill (Above Title on Top Left) */}
                            <div className="w-fit">
                              <span className="text-xs sm:text-sm font-bold text-white bg-[#0052ff] px-3 py-1 rounded-full inline-block">
                                {item.year}
                              </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#121316] tracking-tight">
                              {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-xs sm:text-sm text-[#5c606b] leading-relaxed pt-0.5">
                              {item.description}
                            </p>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>

            </div>
          </section>

          {/* ════════════════════════════════════════════════════════
              5. EXECUTIVE LEADERSHIP & ENGINEERING DIRECTORS
          ════════════════════════════════════════════════════════ */}
          <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-[#f8f7f4]">
            <div className="max-w-350 mx-auto space-y-8 sm:space-y-12">

              <div className="about-reveal max-w-2xl space-y-2 sm:space-y-3">
                <p className="text-xs sm:text-sm text-[#5c606b] font-semibold">
                  Leadership &amp; Governance
                </p>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight">
                  Guided by Experienced Engineers
                </h2>
              </div>

              {/* Leadership Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {LEADERSHIP.map((leader, idx) => (
                  <div
                    key={idx}
                    className="about-reveal bg-[#121316] text-white rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-xl flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image Frame */}
                      <div className="relative w-full h-72 md:h-80 overflow-hidden bg-[#1c1d22]">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#121316] via-transparent to-transparent" />
                      </div>

                      {/* Info Content */}
                      <div className="p-5 sm:p-7 space-y-2.5 sm:space-y-3">
                        <div className="space-y-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#0052ff] transition-colors">
                            {leader.name}
                          </h3>
                          <div className="text-xs font-semibold text-[#0052ff]">
                            {leader.role}
                          </div>
                        </div>

                        <div className="inline-block text-[10px] sm:text-[11px] font-mono text-white/60 bg-white/10 px-2.5 py-1 rounded-md">
                          {leader.credentials}
                        </div>

                        <p className="text-xs text-white/70 leading-relaxed pt-1 sm:pt-2">
                          {leader.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* ════════════════════════════════════════════════════════
              6. AWARDS & RECOGNITION (Clean White Base Layout)
          ════════════════════════════════════════════════════════ */}
          <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-[#f8f7f4] text-[#121316]">
            <div className="max-w-350 mx-auto space-y-8 sm:space-y-12">

              {/* Clear Section Header */}
              <div className="about-reveal flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6">
                <div className="space-y-2 max-w-xl">
                  <p className="text-xs sm:text-sm text-[#5c606b] font-semibold">
                    Recognition
                  </p>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight leading-tight">
                    32 Industry Excellence Awards
                  </h2>
                </div>

                <div className="shrink-0 text-xs font-mono text-[#5c606b]">
                  <span>2006 – 2026 Statutory &amp; Structural Honors</span>
                </div>
              </div>

              {/* Clean 4-Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {AWARDS_DATA.map((award, idx) => (
                  <div
                    key={idx}
                    className="about-reveal bg-white border border-[#121316]/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#0052ff]/50 transition-all duration-300 flex flex-col justify-between space-y-4 sm:space-y-6 group"
                  >
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] sm:text-xs font-mono font-bold text-[#0052ff] bg-[#0052ff]/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#0052ff]/20">
                          {award.year}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-mono text-[#5c606b]">
                          {award.category}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#121316] group-hover:text-[#0052ff] transition-colors leading-snug">
                        {award.title}
                      </h3>
                    </div>

                    <div className="pt-3 sm:pt-4 border-t border-[#121316]/10 flex items-center justify-between text-xs font-semibold text-[#5c606b]">
                      <span>{award.issuer}</span>
                      <Award className="w-4 h-4 text-[#0052ff] shrink-0" />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* ════════════════════════════════════════════════════════
              7. ACCREDITATIONS & CERTIFICATIONS RIBBON
          ════════════════════════════════════════════════════════ */}
          <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-12 bg-[#f8f7f4] text-[#121316]">
            <div className="max-w-350 mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight">
                  Accredited by Singapore Statutory Authorities
                </h3>
                <p className="text-xs sm:text-sm text-black/60">
                  Fully licensed General Builder Class 1 &amp; BCA Grade A1 Master Contractor.
                </p>
              </div>

              {/* Badges Ribbon */}
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3">
                {[
                  "BCA GRADE A1",
                  "ISO 9001 QUALITY",
                  "ISO 45001 SAFETY",
                  "ISO 14001 ENV",
                  "BIZSAFE STAR"
                ].map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#121316]/10 border border-[#121316]/15 text-[10px] sm:text-xs font-bold text-black uppercase tracking-wider"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

          </section>
        </main>

        {/* Global Footer */}
        <Footer />

      </div>
    </SmoothScroll>
  );
}
