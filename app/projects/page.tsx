"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import {
  ArrowUpRight,
} from "lucide-react";

/* ── PROJECTS DATA ── */
interface ProjectItem {
  id: string;
  num: string;
  category: string;
  title: string;
  location: string;
  contractValue: string;
  completionYear: string;
  height: string;
  image: string;
  colSpan: string;
  cardHeight: string;
  summary: string;
  specs: string[];
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "marina-tower",
    num: "01",
    category: "Commercial High-Rise",
    title: "MARINA TOWER",
    location: "Marina Bay, Singapore",
    contractValue: "$140 Million",
    completionYear: "2025",
    height: "60 Floors / 240m",
    image: "/projects/marina-tower.jpg",
    colSpan: "lg:col-span-7",
    cardHeight: "min-h-[460px] sm:min-h-[520px]",
    summary:
      "Landmark super-structure and unitized double-glazed glass curtain wall erection for a premier corporate headquarters in Singapore's financial district.",
    specs: [
      "Unitized Glass Curtain Wall System",
      "LEED Platinum & BCA Green Mark Gold Plus",
      "Post-Tensioned Concrete Slab Pouring",
      "0% Field Clash Rate via 5D BIM"
    ]
  },
  {
    id: "jurong-hub",
    num: "02",
    category: "Industrial Logistics",
    title: "JURONG HUB",
    location: "Sydney, Australia",
    contractValue: "$95 Million",
    completionYear: "2024",
    height: "High-Bay Distribution Hub",
    image: "/projects/jurong-hub.jpg",
    colSpan: "lg:col-span-5",
    cardHeight: "min-h-[460px] sm:min-h-[520px]",
    summary:
      "Automated high-bay logistics facility and ultra-flat laser-screed floor slabs engineered for high-density AGV automated robotics.",
    specs: [
      "FM2 Tolerance Laser-Screed Slabs (35 kN/m²)",
      "Automated High-Bay Cold Storage Envelope",
      "Heavy Machinery Inertia Foundation Blocks",
      "Turnkey Municipal Authority Sign-Off"
    ]
  },
  {
    id: "tuas-plant",
    num: "03",
    category: "Heavy Facility",
    title: "TUAS PLANT",
    location: "Penang, Malaysia",
    contractValue: "$165 Million",
    completionYear: "2024",
    height: "Heavy Industrial Campus",
    image: "/projects/tuas-plant.jpg",
    colSpan: "lg:col-span-5",
    cardHeight: "min-h-[460px] sm:min-h-[500px]",
    summary:
      "Single-source turnkey design-build delivery combining 5D BIM virtual pre-construction simulation before physical site groundbreaking.",
    specs: [
      "100% 5D BIM Virtual Pre-Construction",
      "Hazardous Spill Containment Systems",
      "Superflat Concrete Machine Foundations",
      "Guaranteed Fixed Lump-Sum Contract"
    ]
  },
  {
    id: "cbd-complex",
    num: "04",
    category: "Commercial Complex",
    title: "CBD COMPLEX",
    location: "Tokyo, Japan",
    contractValue: "$210 Million",
    completionYear: "2023",
    height: "52 Floors / 210m",
    image: "/projects/cbd-complex.jpg",
    colSpan: "lg:col-span-7",
    cardHeight: "min-h-[460px] sm:min-h-[500px]",
    summary:
      "Multi-use commercial complex featuring vibration-isolated pile foundations and deep basement excavation in high-density urban terrain.",
    specs: [
      "Vibration-Isolated Foundation Piling",
      "High-Tonnage Structural Steel Frame",
      "Smart Building Automation Integration",
      "Zero Lost-Time Incidents Across 1.8M Hours"
    ]
  }
];

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const revealElements = gsap.utils.toArray<HTMLElement>(".projects-reveal");
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

          {/* Embedded Navbar */}
          <Navbar />

          {/* Hero Image Container (Top on Mobile, Right Column on Desktop) */}
          <div className="projects-reveal order-1 lg:order-2 lg:col-span-6 relative w-full h-52 sm:h-72 lg:h-full min-h-75 lg:min-h-[90vh] overflow-hidden mt-0">
            <Image
              src="/project-hero.jpg"
              alt="BluxRise Projects Hero"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-b from-[#121316]/70 via-transparent to-[#121316] lg:hidden" />
          </div>

          {/* Left Column Content (Below Image on Mobile, Left Column on Desktop) */}
          <div className="projects-reveal order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center px-4 sm:px-10 lg:px-14 pt-5 sm:pt-10 lg:pt-32 pb-8 sm:pb-12 relative z-20 space-y-4 sm:space-y-6">

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.05]">
              Engineering Landmark <span className="text-[#0052ff]">Superstructures</span>.
            </h1>

            <p className="text-xs sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-light max-w-2xl">
              Explore our global portfolio of Tier-1 commercial towers, industrial logistics hubs, and complex turnkey design-build developments.
            </p>

            {/* Live KPI Stat Grid */}
            <div className="pt-2 sm:pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              {[
                { value: "$1.2B+", label: "Completed Tenders", sub: "Total Value" },
                { value: "120+", label: "Landmarks", sub: "Executed" },
                { value: "0%", label: "Field Clash", sub: "100% 5D BIM" },
                { value: "100%", label: "Handover", sub: "On-Time" }
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
              PROJECTS BENTO GRID PORTFOLIO SHOWCASE
          ════════════════════════════════════════════════════════ */}
          <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-[#f8f7f4]">
            <div className="max-w-350 mx-auto space-y-8 sm:space-y-12">

              {/* Header & Filter Tabs */}
              <div className="projects-reveal flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6">
                <div className="space-y-2 max-w-xl">
                  <p className="text-xs sm:text-sm text-[#5c606b] font-semibold">
                    Portfolio
                  </p>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#121316] tracking-tight leading-tight">
                    Featured Work
                  </h2>
                </div>
              </div>

              {/* Projects Asymmetric Bento Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10">
                {PROJECTS_DATA.map((project) => (
                  <div
                    key={project.id}
                    className={`projects-reveal group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#121316] text-white border border-white/10 shadow-2xl transition-all duration-500 hover:border-[#0052ff]/50 flex flex-col justify-end p-5 sm:p-8 lg:p-10 ${project.colSpan} min-h-95 sm:min-h-115 lg:min-h-125`}
                  >
                    {/* Background Image Frame with Vignette Overlay */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#121316] via-[#121316]/50 via-50% to-black/20" />
                    </div>

                    {/* Bottom Info Content */}
                    <div className="relative z-10 space-y-3 sm:space-y-4 pt-12 sm:pt-20">
                      <div className="space-y-1">
                        <h3 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-none group-hover:text-[#0052ff] transition-colors">
                          {project.title}
                        </h3>
                        <div className="text-[11px] sm:text-xs text-white/70 font-semibold pt-0.5 sm:pt-1">
                          {project.location} • <span className="text-[#0052ff] font-bold">{project.contractValue}</span> • Completed {project.completionYear}
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light max-w-2xl">
                        {project.summary}
                      </p>

                      {/* Action CTA Button */}
                      <div className="pt-1 sm:pt-2">
                        <a
                          href={`/projects/${project.id}`}
                          className="inline-flex items-center justify-between gap-4 text-xs font-bold text-white bg-[#0052ff] hover:bg-[#0040d9] pl-5 sm:pl-6 pr-2 sm:pr-2.5 py-2 sm:py-2.5 rounded-full transition-all duration-300 group/btn shadow-lg"
                        >
                          <span>Explore More Details</span>
                          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
                            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#121316] transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 stroke-[2.5]" />
                          </span>
                        </a>
                      </div>
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
