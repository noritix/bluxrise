"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import {
  Building2,
  Compass,
  CheckCircle2,
  ArrowUpRight,
  Layers,
  Cpu,
  FileCheck2,
} from "lucide-react";
import Link from "next/link";

/* ── SERVICE VERTICALS ── */
interface ServiceItem {
  id: string;
  num: string;
  category: string;
  title: string;
  headline: string;
  summary: string;
  image: string;
  specs: string[];
  features: { title: string; desc: string }[];
  idealFor: string;
  kpi: { value: string; label: string };
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "commercial-towers",
    num: "01",
    category: "Commercial High-Rise",
    title: "Commercial Towers & Corporate HQ",
    headline: "Landmark Superstructures & High-Rise Glass Facades",
    summary:
      "Full-scope general contracting for corporate headquarters, high-rise office towers, and mixed-use commercial developments designed for long-term operational excellence.",
    image: "/services/commercial-towers.jpg",
    specs: [
      "High-Rise Structural Steel & Reinforced Superstructures",
      "LEED Platinum & BCA Green Mark Gold Plus Compliance",
      "Unitized Double-Glazed Glass Curtain Wall Systems",
      "Vibration-Isolated Foundation Piling & Deep Excavation"
    ],
    features: [
      { title: "Facade Engineering", desc: "Acoustic and thermal performance unitized curtain walls tested to ASTM standards." },
      { title: "Structural Load Optimization", desc: "Advanced steel frame weight optimization reducing embodied carbon." }
    ],
    idealFor: "Grade-A Office Towers, Financial HQs, & Commercial Complexes",
    kpi: { value: "60+ Floors", label: "Structural Height Capability" }
  },
  {
    id: "industrial-infra",
    num: "02",
    category: "Heavy Industrial",
    title: "Industrial Logistics & Manufacturing Hubs",
    headline: "Precision Slabs & Heavy Equipment Infrastructure",
    summary:
      "Heavy facility construction, automated cold-storage distribution centers, and high-load foundation engineering tailored for demanding industrial operations.",
    image: "/services/industrial-infra.jpg",
    specs: [
      "Superflat Laser-Screed Slabs (FM2 Tolerance Standard)",
      "High-Tonnage Heavy Equipment Machine Foundations",
      "Automated High-Bay Warehouse & Cold Storage Envelopes",
      "Hazardous Material Spill Containment & Drainage Systems"
    ],
    features: [
      { title: "Laser-Screed Precision", desc: "Ultra-flat concrete floor slabs optimized for high-reach AGV robotics." },
      { title: "Vibration Dampening", desc: "Isolated machine inertia blocks preventing operational structural frequency transfer." }
    ],
    idealFor: "Logistics Hubs, Automated Warehouses, & Advanced Manufacturing Facilities",
    kpi: { value: "35 kN/m²", label: "Floor Slab Load Capacity" }
  },
  {
    id: "design-build",
    num: "03",
    category: "Integrated Design-Build",
    title: "Turnkey Design & Build Delivery",
    headline: "Single-Point Accountability with 100% 5D BIM",
    summary:
      "Single-source design-build delivery combining virtual 3D BIM clash detection prior to site groundbreaking with guaranteed lump-sum contractual certainty.",
    image: "/services/design-build.jpg",
    specs: [
      "Virtual 3D BIM Clash Resolution Before Site Groundbreaking",
      "Architectural & Structural Engineering Co-Development",
      "Fixed Lump-Sum Contractual Budget & Timeline Guarantee",
      "Integrated Subcontractor & Supply Chain Master Management"
    ],
    features: [
      { title: "Zero Clash Execution", desc: "Eliminates MEP and structural clashes virtually to prevent expensive job-site re-work." },
      { title: "Cost Certainty", desc: "Single-contract structure eliminating finger-pointing between architects and builders." }
    ],
    idealFor: "Fast-Track Commercial Developments & Complex Structural Renovations",
    kpi: { value: "0%", label: "Field Clash Rework Rate" }
  },
  {
    id: "superintendence",
    num: "04",
    category: "Superintendence",
    title: "Project Management & Handover",
    headline: "BCA Grade A1 Site Governance & Municipal Commissioning",
    summary:
      "Full-scope site superintendence, vendor procurement management, safety auditing, and municipal commissioning for private and public sector developments.",
    image: "/services/project-management.jpg",
    specs: [
      "Daily On-Site Superintendence & Real-Time Client Portal Tracking",
      "OSHA & BizSAFE Star Safety Audit Compliance Verification",
      "Independent Material Sampling & Lab Compression Testing",
      "Full Turnkey Municipal Handover & Statutory Authority Sign-Off"
    ],
    features: [
      { title: "Safety Master Audit", desc: "Daily inspection logs maintaining 4.2M+ safe work hours with zero lost-time incidents." },
      { title: "Statutory Approvals", desc: "Streamlined TOP/CSC occupancy clearances with Singapore BCA and SDF authorities." }
    ],
    idealFor: "Multi-Million Dollar Tenders & Public-Private Infrastructure Contracts",
    kpi: { value: "4.2M+", label: "Safe Work Hours Verified" }
  }
];

/* ── 4-STAGE DELIVERY PROCESS ── */
const DELIVERY_STEPS = [
  {
    step: "01",
    title: "Pre-Construction & BIM",
    timeline: "Weeks 1 – 6",
    icon: Cpu,
    description:
      "Virtual 3D modeling and structural planning to eliminate clashes before breaking ground.",
    deliverables: ["5D BIM Model", "Structural Calculations", "Master Schedule"]
  },
  {
    step: "02",
    title: "Foundation & Piling",
    timeline: "Weeks 7 – 18",
    icon: Compass,
    description:
      "Deep soil testing, bored piling, and reinforced basement foundation execution.",
    deliverables: ["Soil Load Verification", "Bored Pile Integrity Logs", "Excavation Support Cert"]
  },
  {
    step: "03",
    title: "Superstructure & Facade",
    timeline: "Weeks 19 – 45",
    icon: Layers,
    description:
      "Steel frame assembly, concrete slab pouring, and curtain wall installation.",
    deliverables: ["Slab Flatness Cert", "Curtain Wall Water Test", "Steel Weld Audits"]
  },
  {
    step: "04",
    title: "Commissioning & Handover",
    timeline: "Weeks 46 – 52",
    icon: FileCheck2,
    description:
      "Final quality inspections, safety clearances, and turnkey building handover.",
    deliverables: ["Green Mark Final Cert", "Fire Safety Clearance", "Building Handover Pack"]
  }
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const revealElements = gsap.utils.toArray<HTMLElement>(".services-reveal");
    revealElements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <SmoothScroll>
      <div ref={containerRef} className="min-h-screen bg-[#f8f7f4] text-[#121316] flex flex-col font-display selection:bg-[#121316] selection:text-white p-2 sm:p-4">

        {/* Full Viewport Dark Hero Container */}
        <header className="relative w-full min-h-0 lg:min-h-[calc(97vh-1rem)] bg-[#121316] text-white rounded-3xl sm:rounded-[36px] border border-white/10 shadow-2xl overflow-hidden flex flex-col lg:grid lg:grid-cols-12 group">

          {/* Embedded Navbar over Dark Hero */}
          <Navbar />

          {/* Hero Image Container (Top on Mobile, Right Column on Desktop) */}
          <div className="services-reveal order-1 lg:order-2 lg:col-span-6 relative w-full h-52 sm:h-72 lg:h-full min-h-75 lg:min-h-full overflow-hidden mt-0">
            <Image
              src="/service-hero.jpg"
              alt="BluxRise Construction Services Hero"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-linear-to-b from-[#121316]/70 via-transparent to-[#121316] lg:hidden" />
          </div>

          {/* Left Content Column (Below Image on Mobile, Left Column on Desktop) */}
          <div className="services-reveal order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center px-4 sm:px-10 lg:px-14 pt-5 sm:pt-10 lg:pt-32 pb-8 sm:pb-12 relative z-20 space-y-4 sm:space-y-6">

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.05]">
              Capabilities Built for <span className="text-[#0052ff]">Complex Landmarks</span>.
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-xs sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-light max-w-2xl">
              From high-rise commercial towers to heavy industrial hubs, BluxRise executes multi-million dollar tenders with 5D BIM precision, strict cost certainty, and zero lost-time injuries.
            </p>

            {/* Live Capability Stat Bar inside Left Content: 2x2 Grid of Black Cards */}
            <div className="pt-2 sm:pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              {[
                { value: "Grade A1", label: "BCA License", sub: "Unlimited Value" },
                { value: "0%", label: "Field Clash", sub: "100% 5D BIM" },
                { value: "4.2M+", label: "Safe Hours", sub: "Zero Incidents" },
                { value: "100%", label: "Handover", sub: "Fixed Lump-Sum" }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#18191e] border border-white/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl space-y-1 shadow-md hover:border-[#0052ff]/50 transition-all"
                >
                  <div className="text-base sm:text-2xl font-bold text-[#0052ff] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-white">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-white/50">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </header>

        <main className="grow">

          {/* ════════════════════════════════════════════════════════
              2. OUR CORE CONSTRUCTION SERVICES (Clean 2-Column Card Grid)
          ════════════════════════════════════════════════════════ */}
          <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-[#f8f7f4]">
            <div className="max-w-350 mx-auto space-y-8 sm:space-y-12">

              {/* Clear Section Header */}
              <div className="services-reveal max-w-xl space-y-2">
                <p className="text-xs sm:text-sm text-[#5c606b] font-semibold">
                  Services
                </p>
                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#121316] tracking-tight leading-tight">
                  What we do
                </h2>
              </div>

              {/* Stacked Cards Container with Scroll Stacking Animation */}
              <div className="relative space-y-6 sm:space-y-8 lg:space-y-12">
                {SERVICES_DATA.map((service, idx) => (
                  <div
                    key={service.id}
                    style={{ top: `calc(15px + ${idx * 16}px)` }}
                    className="sticky group bg-[#121316] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 border border-white/10 shadow-2xl transition-all duration-500 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">

                      {/* Left Side: Service Image */}
                      <div className="lg:col-span-6 relative w-full h-44 sm:h-72 lg:h-105 rounded-xl sm:rounded-2xl overflow-hidden bg-[#1c1d22] shrink-0">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>

                      {/* Right Side: Service Content */}
                      <div className="lg:col-span-6 flex flex-col justify-between space-y-4 sm:space-y-6">
                        <div className="space-y-3 sm:space-y-4">
                          <div className="inline-flex items-center space-x-2 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-[#0052ff]/10 text-[#0052ff] border border-[#0052ff]/20 text-[10px] sm:text-xs font-bold tracking-wide uppercase">
                            <span>{service.category}</span>
                          </div>

                          <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white tracking-tight group-hover:text-[#0052ff] transition-colors leading-tight">
                            {service.title}
                          </h3>

                          <p className="text-xs sm:text-base text-neutral-300 leading-relaxed font-light">
                            {service.summary}
                          </p>

                          {/* Key Deliverables Checklist */}
                          <ul className="grid grid-cols-1 gap-2 pt-3 sm:pt-4 border-t border-white/10">
                            {service.specs.map((spec, idx) => (
                              <li key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm font-medium text-white/90">
                                <CheckCircle2 className="w-4 h-4 text-[#0052ff] shrink-0" />
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action Button */}
                        <div className="pt-1 sm:pt-2">
                          <Link
                            href="/#contact"
                            className="inline-flex items-center justify-between gap-4 text-xs font-bold text-white bg-[#0052ff] hover:bg-[#0040d9] pl-5 sm:pl-6 pr-2 sm:pr-2.5 py-2 sm:py-2.5 rounded-full transition-all duration-300 group/btn shadow-md"
                          >
                            <span className="tracking-wide">Get a Quote</span>
                            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
                              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#121316] transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 stroke-[2.5]" />
                            </span>
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* ════════════════════════════════════════════════════════
              3. 4-STAGE EXECUTION METHODOLOGY (White Base & Black Cards)
          ════════════════════════════════════════════════════════ */}
          <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-[#f8f7f4] text-[#121316]">
            <div className="max-w-350 mx-auto space-y-8 sm:space-y-12">

              {/* Clear Section Header */}
              <div className="services-reveal max-w-2xl space-y-2">
                <p className="text-xs sm:text-sm text-[#5c606b] font-semibold">
                  Execution Methodology
                </p>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight leading-tight">
                  Our 4-Phase Delivery Process
                </h2>
              </div>

              {/* Grid Container */}
              <div className="relative">

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
                  {DELIVERY_STEPS.map((stepItem) => {
                    const IconComp = stepItem.icon;
                    return (
                      <div
                        key={stepItem.step}
                        className="services-reveal bg-[#121316] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 shadow-2xl flex flex-col justify-between space-y-5 sm:space-y-6 hover:-translate-y-2 transition-all duration-300 group"
                      >
                        {/* Top: Big Icon Container */}
                        <div className="relative w-full h-28 sm:h-35 rounded-xl sm:rounded-2xl bg-[#18191e] border border-white/10 flex flex-col items-center justify-center overflow-hidden group-hover:border-[#0052ff]/50 transition-colors shrink-0">

                          {/* Big Icon */}
                          <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-white group-hover:scale-110 group-hover:text-white transition-all duration-300">
                            <IconComp className="w-14 h-14 sm:w-18 sm:h-18 stroke-2" />
                          </div>
                        </div>

                        {/* Content Below Icon */}
                        <div className="space-y-2 sm:space-y-3">
                          <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#0052ff] transition-colors">
                            {stepItem.title}
                          </h3>

                          <p className="text-xs text-neutral-300 leading-relaxed font-light">
                            {stepItem.description}
                          </p>
                        </div>

                        {/* Deliverables Checklist */}
                        <div className="pt-2 border-t border-white/10 space-y-1.5 sm:space-y-2">
                          <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1.5">
                            Deliverables
                          </div>
                          {stepItem.deliverables.map((deliv, dIdx) => (
                            <div key={dIdx} className="flex items-center space-x-2 text-xs font-medium text-white/90">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0052ff] shrink-0" />
                              <span className="truncate">{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </section>

          {/* ════════════════════════════════════════════════════════
              4. ENTERPRISE CLIENTS & EQUIPMENT PARTNERS
          ════════════════════════════════════════════════════════ */}
          <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#f8f7f4] text-[#121316]">
            <div className="max-w-350 mx-auto space-y-8 sm:space-y-12">

              {/* Section Header */}
              <div className="services-reveal flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
                <div className="space-y-2 sm:space-y-3 max-w-3xl">
                  <div className="inline-flex items-center space-x-2 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-[#121316] border border-[#121316] text-[10px] sm:text-xs font-bold text-[#f8f7f4]">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Trusted Ecosystem</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight leading-tight">
                    Enterprise Clients &amp; Fleet Partners
                  </h2>
                  <p className="text-xs sm:text-base text-[#121316]/70 leading-relaxed font-light">
                    Collaborating with Tier-1 general contractors and global heavy equipment manufacturers to execute complex high-rise and industrial developments.
                  </p>
                </div>
              </div>

              {/* Partner Logo Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
                {[
                  { name: "Caterpillar", category: "Heavy Equipment", logo: "/logos/caterpillar.png" },
                  { name: "Komatsu", category: "Fleet & Excavation", logo: "/logos/komatsu.png" },
                  { name: "Liebherr", category: "Tower Crane Partner", logo: "/logos/liebherr.png" },
                  { name: "Volvo CE", category: "Earthmoving Fleet", logo: "/logos/volvo.png" },
                  { name: "Hitachi", category: "Heavy Machinery", logo: "/logos/hitachi.png" },
                  { name: "Siemens", category: "MEP & Automation", logo: "/logos/siemens.png" },
                  { name: "Bechtel", category: "Global Enterprise", logo: "/logos/bechtel.png" },
                  { name: "Skanska", category: "Infrastructure Client", logo: "/logos/skanska.png" },
                  { name: "Turner", category: "Commercial Client", logo: "/logos/turner.png" },
                  { name: "Balfour Beatty", category: "Infrastructure Client", logo: "/logos/balfour.png" },
                  { name: "Hochtief", category: "Engineering Partner", logo: "/logos/hochtief.png" },
                  { name: "Hyundai E&C", category: "High-Rise Client", logo: "/logos/hyundai.png" }
                ].map((partner, idx) => (
                  <div
                    key={idx}
                    className="services-reveal group/partner bg-[#121316] border border-[#121316] rounded-xl sm:rounded-2xl p-3.5 sm:p-5 flex flex-col items-center justify-between space-y-4 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-full h-14 sm:h-20 flex items-center justify-center p-1 sm:p-2">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={140}
                        height={70}
                        className="max-h-24 sm:max-h-30 w-auto object-contain brightness-0 invert opacity-75 transition-all duration-300"
                      />
                    </div>
                  </div>
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
