"use client";

import React, { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Building2,
  CheckCircle2,
  ArrowLeft,
  MapPin,
  Award,
  Cpu,
  FileCheck2,
  Quote,
  AlertCircle,
  Sparkles,
} from "lucide-react";

/* ── CASE STUDY INTERFACE ── */
interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  contractValue: string;
  completionYear: string;
  duration: string;
  gfa: string;
  client: string;
  leadArchitect: string;
  heroImage: string;
  gallery: string[];
  executiveSummary: string;
  challenge: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
    points: string[];
  };
  results: {
    metric: string;
    label: string;
  }[];
  keyDeliverables: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

/* ── CASE STUDIES DATA MAP ── */
const CASE_STUDIES_DATA: Record<string, CaseStudy> = {
  "marina-tower": {
    id: "marina-tower",
    title: "MARINA TOWER",
    subtitle: "60-Story Landmark Superstructure & Unitized Glass Facade Execution",
    category: "Commercial High-Rise",
    location: "Marina Bay, Singapore",
    contractValue: "$140 Million",
    completionYear: "2025",
    duration: "34 Months",
    gfa: "680,000 sq.ft",
    client: "Landmark Properties / Marina Financial Holdings",
    leadArchitect: "Aedas & Structural Consult",
    heroImage: "/projects/marina-tower.jpg",
    gallery: [
      "/projects/marina-tower.jpg",
      "/service-hero.jpg",
      "/services/commercial-towers.jpg"
    ],
    executiveSummary:
      "The Marina Tower project represents a benchmark in Singapore high-rise engineering. Standing 240 meters tall in the heart of Marina Bay, the 60-story commercial tower combines post-tensioned core superstructures with double-glazed unitized curtain wall assemblies. BluxRise served as the BCA Grade A1 Master Contractor, executing 100% 5D BIM pre-construction clash resolution prior to site groundbreaking.",
    challenge: {
      title: "Subterranean Marine Clay & High-Altitude Wind Loads",
      description:
        "Constructing a 60-story landmark high-rise in dense coastal reclaimed land presented extraordinary geotechnical and structural parameters:",
      points: [
        "Adjacent Active Subterranean Tunneling: Excavating a 4-level basement next to active MRT subway lines required zero lateral ground movement tolerance.",
        "High-Altitude Monsoon Wind Dynamics: Installing 12,000+ double-glazed unitized glass curtain wall panels at 240m altitude required wind-tunnel strain verification.",
        "Zero Job-Site Staging Footprint: High-density CBD location with zero laydown space mandated just-in-time crane deliveries for structural steel trusses."
      ]
    },
    solution: {
      title: "5D BIM Digital Twin & Diaphragm Foundation Engineering",
      description:
        "BluxRise implemented a unified virtual-to-field engineering workflow to guarantee structural integrity and zero budget overrun:",
      points: [
        "1.5m Reinforced Diaphragm Walls: Anchored bored concrete retaining walls 48 meters deep into bedrock, eliminating subterranean soil movement.",
        "5D BIM Virtual Clash Resolution: Modeled all structural steel beams, MEP ducts, and facade brackets, resolving 1,200+ spatial conflicts before off-site fabrication.",
        "Superflat Post-Tensioned Slabs: Executed 60 continuous floor slab pours maintaining FM2 flatness tolerances under crane superintendence."
      ]
    },
    results: [
      { metric: "0%", label: "Field Clash Rework Rate" },
      { metric: "LEED Platinum", label: "Green Mark Compliance" },
      { metric: "2 Months", label: "Delivered Ahead of Schedule" },
      { metric: "4.2M+", label: "Safe Work Hours Verified" }
    ],
    keyDeliverables: [
      "5D BIM Digital Twin Model & As-Built Certification",
      "PE Structural Calculation Sign-Off for 60 Floors",
      "Unitized Acoustic Glass Curtain Wall Assemblies",
      "TOP / CSC Final Municipal Statutory Handover"
    ],
    testimonial: {
      quote:
        "BluxRise delivered Marina Tower with surgical precision. Their 5D BIM pre-construction framework eliminated cost overruns and ensured seamless authority sign-off.",
      author: "Marcus Vance",
      role: "Director of Development",
      company: "Landmark Properties Singapore"
    }
  },

  "jurong-hub": {
    id: "jurong-hub",
    title: "JURONG HUB",
    subtitle: "High-Bay Distribution Center & Superflat Robotic AGV Floor Slabs",
    category: "Industrial Logistics",
    location: "Sydney, Australia",
    contractValue: "$95 Million",
    completionYear: "2024",
    duration: "18 Months",
    gfa: "520,000 sq.ft",
    client: "Trans-Pacific Logistics Group",
    leadArchitect: "Industrial Infrastructure Partners",
    heroImage: "/projects/jurong-hub.jpg",
    gallery: [
      "/projects/jurong-hub.jpg",
      "/services/industrial-infra.jpg",
      "/our-origin.jpg"
    ],
    executiveSummary:
      "The Jurong Automated Logistics Hub is a state-of-the-art 35-meter high-bay cold storage distribution facility. Designed for 24/7 autonomous AGV robotics, the project demanded extreme concrete floor flatness tolerances (FM2 Standard) to prevent high-reach robotic forklift sway at 30-meter rack elevations.",
    challenge: {
      title: "Micro-Tolerance Floor Flatness & Sub-Zero Thermal Envelopes",
      description:
        "Constructing a high-speed robotic distribution center created rigorous structural specification hurdles:",
      points: [
        "AGV Robotic Sway Parameters: Minor floor unevenness causes unacceptable 40-meter robotic arm vibration; requiring laser-screed concrete precision.",
        "Sub-Zero Thermal Envelope Isolation: Preventing thermal bridge energy loss across a 520,000 sq.ft cold-storage building shell.",
        "High-Frequency Conveyor Resonance: Heavy sorting conveyor machinery producing dynamic frequency transfer into structural steel frames."
      ]
    },
    solution: {
      title: "Laser-Screed Post-Tensioned Pours & Inertia Pad Decoupling",
      description:
        "BluxRise deployed specialized heavy equipment and advanced floor slab engineering to achieve zero shrinkage cracks:",
      points: [
        "Continuous Laser-Screed Concrete Pours: Executed 24-hour continuous pours reaching 35 kN/m² load capacity and FM2 floor flatness.",
        "Decoupled Machine Foundation Pads: Isolated dynamic heavy equipment foundations using elastomeric frequency dampening layers.",
        "R-40 Insulated Panel Cladding: Installed pre-fabricated insulated wall envelopes under heavy crane superintendence."
      ]
    },
    results: [
      { metric: "FM2 Spec", label: "Zero-Vibration Floor Flatness" },
      { metric: "35 kN/m²", label: "Slab Load Carrying Capacity" },
      { metric: "R-40", label: "High-Thermal Envelope Rating" },
      { metric: "18 Mos", label: "Turnkey Handover Execution" }
    ],
    keyDeliverables: [
      "Superflat Concrete Slab Flatness Certificate",
      "Automated High-Bay Cold Storage Envelope",
      "Vibration-Isolated Equipment Foundation Logs",
      "Full Turnkey Logistics Facility Sign-Off"
    ],
    testimonial: {
      quote:
        "The level of floor slab precision achieved by BluxRise allowed our automated AGV robotics to operate at peak velocity from Day One.",
      author: "David Miller",
      role: "VP of Supply Chain Operations",
      company: "Trans-Pacific Logistics"
    }
  },

  "tuas-plant": {
    id: "tuas-plant",
    title: "TUAS PLANT",
    subtitle: "Turnkey Design-Build Heavy Industrial Campus with 100% 5D BIM Execution",
    category: "Heavy Facility",
    location: "Penang, Malaysia",
    contractValue: "$165 Million",
    completionYear: "2024",
    duration: "22 Months",
    gfa: "740,000 sq.ft",
    client: "Global Micro-Tech Manufacturing Corp",
    leadArchitect: "High-Tech Engineering Solutions",
    heroImage: "/projects/tuas-plant.jpg",
    gallery: [
      "/projects/tuas-plant.jpg",
      "/services/design-build.jpg",
      "/service-hero.jpg"
    ],
    executiveSummary:
      "A 740,000 sq.ft high-tech manufacturing plant constructed under a single-source turnkey design-build contract. BluxRise coordinated structural engineering, hazardous chemical containment drainage, cleanroom MEP ducting, and heavy equipment foundation pads with 100% fixed lump-sum budget certainty.",
    challenge: {
      title: "Complex Cleanroom MEP Routing & Hazardous Spill Basins",
      description:
        "Advanced semiconductor component manufacturing requires hyper-controlled environmental facilities:",
      points: [
        "15,000m+ High-Purity Ducting: Integrating dense process piping, HVAC, and electrical conduits without structural beam collision.",
        "Hazardous Spill Basins: Constructing double-walled subterranean drainage retention sumps complying with environmental authority standards.",
        "Aggressive 22-Month Target: Delivering a multi-facility manufacturing plant under strict commercial launch deadlines."
      ]
    },
    solution: {
      title: "Virtual 5D BIM Digital Twin & Off-Site Modular Steel Framing",
      description:
        "BluxRise eliminated site conflicts by conducting virtual pre-construction clash resolution:",
      points: [
        "Virtual 5D BIM Pre-Construction: Created a unified digital model resolving 1,400+ MEP utility clashes prior to site groundbreaking.",
        "Modular Off-Site Trusses: Fabricated structural steel framing off-site, reducing field assembly timelines by 35%.",
        "Seamless Chemical Basins: Poured monolithic epoxy-coated concrete drainage structures with integrated leak detection."
      ]
    },
    results: [
      { metric: "0%", label: "Field Clash Rework Rate" },
      { metric: "35%", label: "Steel Assembly Time Reduction" },
      { metric: "100%", label: "Fixed Lump-Sum Budget Certainty" },
      { metric: "ISO 14001", label: "Environmental Sign-Off" }
    ],
    keyDeliverables: [
      "5D BIM Clash Resolution Digital Twin",
      "Epoxy-Coated Chemical Retention Basin Certs",
      "Superflat Machinery Inertia Pad Logbook",
      "Turnkey Industrial Facility Handover Package"
    ],
    testimonial: {
      quote:
        "BluxRise’s single-point turnkey delivery eliminated finger-pointing between designers and builders, bringing our facility online 3 months ahead of competitor bids.",
      author: "Dr. Jonathan Lin",
      role: "Managing Director",
      company: "Global Micro-Tech Manufacturing Corp"
    }
  },

  "cbd-complex": {
    id: "cbd-complex",
    title: "CBD COMPLEX",
    subtitle: "52-Story Commercial High-Rise & Seismic Base Isolation System",
    category: "Commercial Complex",
    location: "Tokyo, Japan",
    contractValue: "$210 Million",
    completionYear: "2023",
    duration: "38 Months",
    gfa: "890,000 sq.ft",
    client: "Orient Financial Real Estate Trust",
    leadArchitect: "Tokyo Landmark Architects & Engineers",
    heroImage: "/projects/cbd-complex.jpg",
    gallery: [
      "/projects/cbd-complex.jpg",
      "/services/commercial-towers.jpg",
      "/project-hero.jpg"
    ],
    executiveSummary:
      "Standing 210 meters above Tokyo's central business district, CBD Financial Centre Tower 2 is a 52-story mixed-use commercial complex. Built over a base-isolated foundation system with tuned mass dampers, the tower offers Class-A office space engineered to withstand Class-7 seismic force events.",
    challenge: {
      title: "Class-7 Seismic Parameters & Dense Urban Noise Controls",
      description:
        "High-rise construction in central Tokyo requires extreme structural engineering resilience:",
      points: [
        "Seismic Isolation Requirements: Installing lead-rubber friction pendulum bearings beneath core columns while maintaining structural rigidity.",
        "Hyper-Dense Urban Setting: Zero site clearance in Tokyo's financial core required strict noise and vibration suppression.",
        "Acoustic Glass Performance: Reducing exterior city traffic noise to under 35 dBA inside financial trading floors."
      ]
    },
    solution: {
      title: "Base-Isolated Column Bearings & Double-Skin Facade Systems",
      description:
        "BluxRise executed advanced structural dampening and unitized glass facade engineering:",
      points: [
        "32 Lead-Rubber Seismic Isolators: Installed base isolators beneath primary column foundations to absorb lateral seismic energy.",
        "Unitized Double-Skin Facade: Factory-assembled glass panels with integrated acoustic damping and automated solar shades.",
        "Rooftop Tuned Mass Dampers: Installed 400-ton pendulum counterweights to mitigate wind-induced upper floor sway."
      ]
    },
    results: [
      { metric: "Class-7", label: "Seismic Force Resilience" },
      { metric: "< 35 dBA", label: "Interior Acoustic Silence" },
      { metric: "890,000", label: "Total GFA Square Feet" },
      { metric: "BCA Grade A1", label: "Master Builder Clearance" }
    ],
    keyDeliverables: [
      "Seismic Base Isolation Log & Dampener Clearance",
      "Unitized Acoustic Double-Skin Curtain Wall Certs",
      "5D BIM Structural As-Built Digital Twin",
      "Complete Municipal Occupancy Handover Pack"
    ],
    testimonial: {
      quote:
        "Constructing a high-rise in central Tokyo requires unparalleled engineering discipline. BluxRise delivered our crown jewel tower safely and impeccably.",
      author: "Kenji Takahashi",
      role: "Executive Director",
      company: "Orient Financial Real Estate Trust"
    }
  }
};

export default function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  // Handle both Promise and synchronous params safely
  const resolvedParams =
    typeof (params as Promise<{ id: string }>).then === "function"
      ? use(params as Promise<{ id: string }>)
      : (params as { id: string });
  const id = resolvedParams.id;
  const caseStudy = CASE_STUDIES_DATA[id];

  if (!caseStudy) {
    notFound();
  }

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#f8f7f4] text-[#121316] flex flex-col font-display selection:bg-[#121316] selection:text-white p-2 sm:p-4 space-y-4 sm:space-y-6">

        {/* ════════════════════════════════════════════════════════
            1. HERO CONTAINER (Clean Dark Card Shell)
        ════════════════════════════════════════════════════════ */}
        <header className="relative w-full bg-[#121316] text-white rounded-3xl sm:rounded-[36px] border border-white/10 shadow-2xl overflow-hidden">
          <Navbar />

          <div className="pt-24 sm:pt-32 pb-8 sm:pb-16 px-4 sm:px-12 lg:px-16 max-w-360 mx-auto space-y-6 sm:space-y-8">
            
            {/* Top Navigation & Badges */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <a
                href="/projects"
                className="w-fit inline-flex items-center space-x-2 text-xs font-bold text-white bg-[#121316] px-3.5 py-2 rounded-full border border-white/10 transition-all duration-200"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Projects</span>
              </a>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
                <span className="bg-white/10 text-white px-3 py-1.5 rounded-full font-semibold border border-white/10">
                  {caseStudy.category}
                </span>
                <span className="flex items-center space-x-1 bg-white text-[#121316] px-3 py-1.5 rounded-full font-semibold border border-[#121316]/30">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{caseStudy.location}</span>
                </span>
              </div>
            </div>

            {/* Title & Subtitle Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
              <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs sm:text-sm text-white/50">
                  <Sparkles className="w-3.5 h-3.5 text-[#0052ff]" />
                  <span>Case Study & Technical Brief</span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
                  {caseStudy.title}
                </h1>
                <p className="text-xs sm:text-lg text-neutral-300 font-light max-w-3xl leading-relaxed">
                  {caseStudy.subtitle}
                </p>
              </div>

              {/* Main Quick Specs Sidebar Card */}
              <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4 backdrop-blur-md">
                <div className="text-xs sm:text-sm text-[#0052ff] font-bold pb-2 border-b border-white/10 flex items-center justify-between">
                  <span>Project Snapshot</span>
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <div className="text-[10px] sm:text-[11px] text-white/50 uppercase font-mono">Contract Value</div>
                    <div className="text-base sm:text-lg font-bold text-white">{caseStudy.contractValue}</div>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] text-white/50 uppercase font-mono">Duration</div>
                    <div className="text-base sm:text-lg font-bold text-white">{caseStudy.duration}</div>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] text-white/50 uppercase font-mono">Gross Floor Area</div>
                    <div className="text-base sm:text-lg font-bold text-white">{caseStudy.gfa}</div>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] text-white/50 uppercase font-mono">Completion</div>
                    <div className="text-base sm:text-lg font-bold text-white">{caseStudy.completionYear}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image Frame */}
            <div className="relative w-full h-60 sm:h-96 lg:h-140 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

          </div>
        </header>

        {/* ════════════════════════════════════════════════════════
            MAIN CONTENT CARDS LAYOUT
        ════════════════════════════════════════════════════════ */}
        <main className="max-w-360 mx-auto w-full space-y-4 sm:space-y-6">

          {/* ── SECTION 1: EXECUTIVE SUMMARY & DELIVERABLES (2 CARDS) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">

            {/* Left Card: Executive Summary */}
            <div className="lg:col-span-7 bg-white border border-[#121316]/10 rounded-3xl sm:rounded-4xl p-5 sm:p-8 md:p-12 shadow-sm space-y-4 sm:space-y-6 flex flex-col justify-between">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#0052ff] bg-[#0052ff]/10 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-[#0052ff]/20">
                  <FileCheck2 className="w-3.5 h-3.5" />
                  <span>Section 01 • Executive Summary</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121316] tracking-tight">
                  Master Contracting &amp; Engineering Scope
                </h2>
                <p className="text-xs sm:text-base lg:text-lg text-[#5c606b] leading-relaxed font-light">
                  {caseStudy.executiveSummary}
                </p>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-[#121316]/10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-[#f8f7f4] p-3.5 sm:p-4 rounded-xl sm:rounded-2xl space-y-1">
                  <div className="text-xs text-[#5c606b]">BCA Master Builder Grade</div>
                  <div className="text-xs sm:text-sm font-bold text-[#121316]">A1 Unlimited Tender Capacity</div>
                </div>
                <div className="bg-[#f8f7f4] p-3.5 sm:p-4 rounded-xl sm:rounded-2xl space-y-1">
                  <div className="text-xs text-[#5c606b]">BIM Implementation</div>
                  <div className="text-xs sm:text-sm font-bold text-[#121316]">100% 5D Virtual Pre-Construction</div>
                </div>
              </div>
            </div>

            {/* Right Card: Delivered Results & Key Deliverables */}
            <div className="lg:col-span-5 bg-[#121316] text-white border border-white/10 rounded-3xl sm:rounded-4xl p-5 sm:p-8 md:p-10 shadow-xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between border-b border-white/15 pb-3 sm:pb-4">
                  <span className="text-xs sm:text-sm text-[#0052ff] font-bold flex items-center space-x-2">
                    <Award className="w-4 h-4" />
                    <span>Project Key Deliverables</span>
                  </span>
                  <span className="text-xs text-white/50">{caseStudy.completionYear}</span>
                </div>

                <div className="space-y-2.5 sm:space-y-3">
                  {caseStudy.keyDeliverables.map((item, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl flex items-start space-x-3.5 hover:bg-white/10 transition-colors">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#0052ff] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-white/90 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs text-white/60">
                <span>Verified Handover Quality</span>
                <span className="text-[#0052ff] font-bold">100% Zero Defect Compliance</span>
              </div>
            </div>

          </div>


          {/* ── SECTION 2: THE CHALLENGE VS THE SOLUTION (2 DISTINCT CARDS) ── */}
          <div className="space-y-4 sm:space-y-6">
            
            <div className="text-center max-w-2xl mx-auto pt-4 sm:pt-8 pb-2 space-y-2">
              <span className="text-xs sm:text-sm font-bold text-white bg-[#121316] px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full">
                Engineering Methodology
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121316] tracking-tight mt-2 sm:mt-3">
                Navigating Complexity with Precision
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

              {/* Challenge Card */}
              <div className="bg-white border border-amber-500/30 rounded-3xl sm:rounded-4xl p-5 sm:p-8 md:p-10 shadow-sm space-y-4 sm:space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-amber-500/20">
                  <span className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-amber-700 bg-amber-50 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-amber-200">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>The Challenge</span>
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#5c606b]">Site & Technical Hurdles</span>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#121316] tracking-tight">
                    {caseStudy.challenge.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5c606b] leading-relaxed">
                    {caseStudy.challenge.description}
                  </p>
                </div>

                <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
                  {caseStudy.challenge.points.map((point, idx) => (
                    <div key={idx} className="bg-amber-50/60 border border-amber-100 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm text-neutral-800 leading-relaxed flex items-start space-x-2.5 sm:space-x-3">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Card */}
              <div className="bg-white border border-[#0052ff]/30 rounded-3xl sm:rounded-4xl p-5 sm:p-8 md:p-10 shadow-sm space-y-4 sm:space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0052ff]/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#0052ff]/20">
                  <span className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#0052ff] bg-[#0052ff]/10 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-[#0052ff]/20">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>The Solution</span>
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#5c606b]">5D BIM & Execution</span>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#121316] tracking-tight">
                    {caseStudy.solution.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5c606b] leading-relaxed">
                    {caseStudy.solution.description}
                  </p>
                </div>

                <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
                  {caseStudy.solution.points.map((point, idx) => (
                    <div key={idx} className="bg-[#0052ff]/5 border border-[#0052ff]/15 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm text-neutral-900 font-medium leading-relaxed flex items-start space-x-2.5 sm:space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0052ff] mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>


          {/* ── SECTION 3: DELIVERED METRICS GRID (4 METRIC CARDS) ── */}
          <div className="bg-[#121316] text-white border border-white/10 rounded-3xl sm:rounded-4xl p-5 sm:p-8 md:p-12 shadow-2xl space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-white/10 pb-4 sm:pb-6">
              <div className="space-y-1">
                <span className="text-xs sm:text-sm text-[#0052ff] font-bold">
                  Quantifiable Performance
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  Delivered Engineering Results
                </h3>
              </div>
              <span className="text-[10px] sm:text-xs text-white/50 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 self-start sm:self-auto">
                Audited &amp; Certified
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {caseStudy.results.map((res, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl space-y-1 sm:space-y-2 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0052ff] tracking-tight">
                    {res.metric}
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-white/90 leading-snug">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* ── SECTION 4: VISUAL GALLERY & TESTIMONIAL ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">

            {/* Gallery (Left Column) */}
            <div className="lg:col-span-7 bg-white border border-[#121316]/10 rounded-3xl sm:rounded-4xl p-5 sm:p-8 shadow-sm space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between border-b border-[#121316]/10 pb-3 sm:pb-4">
                <span className="text-xs sm:text-sm font-bold text-[#121316]">
                  Visual Site Documentation
                </span>
                <span className="text-xs sm:text-sm text-[#5c606b]">{caseStudy.gallery.length} High-Res Views</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {caseStudy.gallery.map((imgSrc, gIdx) => (
                  <div key={gIdx} className="relative h-48 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-900 border border-[#121316]/10 group">
                    <Image
                      src={imgSrc}
                      alt={`${caseStudy.title} View ${gIdx + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Client Testimonial (Right Column) */}
            <div className="lg:col-span-5 bg-[#121316] text-white border border-white/10 rounded-3xl sm:rounded-4xl p-5 sm:p-8 md:p-10 shadow-xl space-y-4 sm:space-y-6 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-3 sm:space-y-4">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#0052ff] opacity-80" />
                <p className="text-sm sm:text-base md:text-lg font-light text-white/90 leading-relaxed italic">
                  &ldquo;{caseStudy.testimonial.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-white/15 space-y-1">
                <div className="text-lg sm:text-xl font-bold text-white">{caseStudy.testimonial.author}</div>
                <div className="text-xs sm:text-sm text-white/80 font-semibold">
                  {caseStudy.testimonial.role} • {caseStudy.testimonial.company}
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
