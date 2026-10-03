"use client";

import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

interface Service {
  num: string;
  category: string;
  title: string;
  summary: string;
  specs: string[];
  image: string;
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services: Service[] = [
    {
      num: "01",
      category: "Commercial High-Rise",
      title: "Commercial Towers & Corporate HQ",
      summary:
        "Full-scale general contracting for corporate headquarters, high-rise office towers, and mixed-use commercial developments.",
      specs: [
        "High-Rise Steel Superstructures",
        "LEED & Green Mark Compliance",
        "Unitized Glass Curtain Walls",
      ],
      image: "/services/commercial-towers.jpg",
    },
    {
      num: "02",
      category: "Heavy Industrial",
      title: "Industrial Logistics & Manufacturing Hubs",
      summary:
        "Heavy facility construction, automated cold-storage distribution centers, and high-load foundation engineering.",
      specs: [
        "Superflat Laser-Screed Slabs",
        "Vibration-Isolated Foundations",
        "Automated Cargo & Logistics Docks",
      ],
      image: "/services/industrial-infra.jpg",
    },
    {
      num: "03",
      category: "Integrated Delivery",
      title: "Turnkey Design & Build Solutions",
      summary:
        "Single-source design-build delivery combining virtual 3D BIM clash detection prior to site groundbreaking.",
      specs: [
        "Virtual 3D BIM Clash Resolution",
        "Architectural Co-Development",
        "Fixed Lump-Sum Contract Certainty",
      ],
      image: "/services/design-build.jpg",
    },
    {
      num: "04",
      category: "Superintendence",
      title: "Project Management & Handover",
      summary:
        "Full-scope site superintendence, vendor procurement management, safety auditing, and municipal commissioning.",
      specs: [
        "On-Site Daily Superintendence",
        "OSHA Safety Audit Compliance",
        "Turnkey Municipal Handover",
      ],
      image: "/services/project-management.jpg",
    },
  ];

  const itemsPerPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(services.length / itemsPerPage);
  const safePage = Math.min(page, Math.max(0, totalPages - 1));

  // Group services dynamically based on itemsPerPage (1 on mobile, 2 on desktop)
  const pages = Array.from({ length: totalPages }, (_, i) =>
    services.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage)
  );

  const handlePrev = () => {
    setPage(Math.max(safePage - 1, 0));
  };

  const handleNext = () => {
    setPage(Math.min(safePage + 1, totalPages - 1));
  };

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  useGSAP(() => {
    gsap.fromTo(
      ".service-card",
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
    <section id="services" ref={containerRef} className="py-24 md:py-32 bg-[#f8f7f4] font-display">
      <div className="max-w-350 mx-auto px-4 sm:px-6 md:px-12">

        {/* Section Header with Navigation Controls at Top-Right */}
        <div className="flex items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <p className="text-xs text-[#5c606b] font-medium">
              Services
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#121316] tracking-tight leading-[0.95]">
              What we do
            </h2>
          </div>

          {/* Top-Right Left/Right Arrow Navigation Buttons */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={handlePrev}
              disabled={safePage === 0}
              className={`w-11 h-11 rounded-full border border-[#121316]/20 flex items-center justify-center transition-all duration-300 ${
                safePage === 0
                  ? "opacity-30 cursor-not-allowed text-[#121316]/40 border-[#121316]/10"
                  : "bg-[#121316] text-white hover:bg-white hover:text-[#121316] hover:border-[#121316] cursor-pointer shadow-xs"
              }`}
              aria-label="Previous services"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              disabled={safePage === totalPages - 1}
              className={`w-11 h-11 rounded-full border border-[#121316]/20 flex items-center justify-center transition-all duration-300 ${
                safePage === totalPages - 1
                  ? "opacity-30 cursor-not-allowed text-[#121316]/40 border-[#121316]/10"
                  : "bg-[#121316] text-white hover:bg-white hover:text-[#121316] hover:border-[#121316] cursor-pointer shadow-xs"
              }`}
              aria-label="Next services"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Sliding Cards Container */}
        <div
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${safePage * 100}%)` }}
          >
            {pages.map((pageServices, pageIdx) => (
              <div
                key={pageIdx}
                className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 px-0.5"
              >
                {pageServices.map((service) => (
                  <div
                    key={service.num}
                    className="service-card group relative bg-[#121316] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Container */}
                      <div className="relative w-full h-60 sm:h-70 rounded-2xl overflow-hidden mb-6 bg-[#121316]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>

                      {/* Service Info */}
                      <div className="space-y-3 mb-6">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-[#0052ff] transition-colors leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#acb0bd] leading-relaxed">
                          {service.summary}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Catchy CTA Button */}
                    <div>
                      <a
                        href="/services"
                        className="inline-flex items-center justify-between gap-4 text-sm font-semibold text-white bg-[#0052ff] hover:bg-[#0040d9] pl-6 pr-2 py-2 rounded-full transition-all duration-300 group/btn shadow-md"
                      >
                        <span className="tracking-tight font-semibold">Explore Service</span>
                        <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
                          <ArrowUpRight className="w-4 h-4 text-[#121316] transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 stroke-[2.5]" />
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


