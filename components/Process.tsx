"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      num: "01",
      phase: "PHASE 01 · FEASIBILITY",
      title: "Discover",
      description:
        "Initial feasibility assessment, soil analysis, site engineering verification, and preliminary budget framing.",
    },
    {
      num: "02",
      phase: "PHASE 02 · BLUEPRINTS",
      title: "Plan",
      description:
        "Comprehensive 3D BIM structural modeling, architectural blueprint alignment, and fixed lump-sum contract locking.",
    },
    {
      num: "03",
      phase: "PHASE 03 · EXECUTION",
      title: "Build",
      description:
        "On-site superintendence, heavy machinery execution, structural steel erection, and daily safety management.",
    },
    {
      num: "04",
      phase: "PHASE 04 · HANDOVER",
      title: "Deliver",
      description:
        "Final municipal inspections, system commissioning, punch-list resolution, and 10-year structural warranty handover.",
    },
  ];

  useGSAP(() => {
    gsap.fromTo(
      ".process-step-card",
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.85,
        ease: "power3.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="process" ref={containerRef} className="py-16 sm:py-24 md:py-32 bg-[#f8f7f4] font-display">
      <div className="max-w-350 mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="space-y-2">
            <p className="text-xs text-[#5c606b] font-medium">
              Methodology
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#121316] tracking-tight leading-[0.95]">
              How We Work
            </h2>
          </div>
        </div>

        {/* 4-Step Cards Grid — 1 column on small mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="process-step-card group relative bg-[#121316] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-white/10 shadow-md hover:border-[#0052ff]/50 transition-all duration-500 flex flex-col justify-between h-auto min-h-47.5 sm:min-h-60 lg:h-75 overflow-hidden"
            >
              {/* Card Top: Number, Phase & Details */}
              <div>
                <div className="mb-3 sm:mb-6 lg:mb-10">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/30 group-hover:text-[#0052ff] transition-colors leading-none">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg sm:text-2xl font-bold text-white uppercase tracking-tight mb-2 sm:mb-3 group-hover:text-[#0052ff] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-xs lg:text-sm text-[#acb0bd] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

