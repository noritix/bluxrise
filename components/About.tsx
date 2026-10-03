"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import { Plus, Quote } from "lucide-react";

const FOUNDER_MESSAGES = [
  {
    quote: "Our commitment is simple: absolute engineering integrity and zero compromise on safety for every structure we build.",
    author: "Alexander Vance",
    role: "Founder & Managing Director",
  },
  {
    quote: "We don't just erect buildings; we forge high-capacity industrial infrastructure that powers long-term growth across Asia-Pacific.",
    author: "Elena Rostova",
    role: "Co-Founder & Chief Architect",
  },
  {
    quote: "Turnkey superintendence, 5D cost locking, and transparent client partnerships are the non-negotiable standards of BluxRise.",
    author: "Marcus Chen",
    role: "Head of Engineering",
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [activeMessage, setActiveMessage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMessage((prev) => (prev + 1) % FOUNDER_MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { target: 18, suffix: "+", label: "Years Experience" },
    { target: 120, suffix: "+", label: "Completed Projects" },
    { target: 32, suffix: "", label: "Industry Awards" },
    { target: 8, suffix: "", label: "Regional Markets" },
  ];

  useGSAP(() => {
    // Entrance animations
    gsap.fromTo(
      ".about-fade-item",
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

    // Number Counter Animations (0 -> Target)
    stats.forEach((stat, idx) => {
      const el = statRefs.current[idx];
      if (!el) return;

      const proxy = { val: 0 };
      gsap.to(proxy, {
        val: stat.target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
        },
        onUpdate: () => {
          if (el) {
            el.textContent = Math.floor(proxy.val) + stat.suffix;
          }
        },
      });
    });
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-[#f8f7f4] font-display">
      <div className="max-w-350 mx-auto px-6 md:px-12">

        {/* 1. Top Header with Headline & Learn More (Plus Button) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-3xl">
            <p className="about-fade-item text-xs text-[#5c606b] font-medium">
              About BluxRise
            </p>
            <h2 className="about-fade-item text-3xl sm:text-5xl lg:text-6xl font-bold text-[#121316] tracking-tight leading-[0.95]">
              We don&apos;t just build structures. We build the places people depend on.
            </h2>
          </div>

          {/* Learn More Button with Plus Badge */}
          <div className="about-fade-item shrink-0">
            <a
              href="/about"
              className="inline-flex items-center space-x-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0052ff] hover:bg-[#0040d9] pl-5 pr-2 py-2 rounded-full transition-all duration-300 shadow-md group"
            >
              <span>Learn More</span>
              <div className="w-7 h-7 rounded-full bg-white text-[#0052ff] flex items-center justify-center font-bold transition-transform duration-300 group-hover:rotate-90">
                <Plus className="w-4 h-4 stroke-[2.5]" />
              </div>
            </a>
          </div>
        </div>

        {/* 2. Full-Width Image Container with Founder Perspective & Metrics Overlays */}
        <div className="about-fade-item relative w-full h-130 sm:h-150 lg:h-165 rounded-2xl lg:rounded-3xl overflow-hidden bg-[#121316] shadow-xl group">
          {/* Background Image */}
          <Image
            src="/about-us.jpg"
            alt="BluxRise commercial development"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />

          {/* Dark Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-black/25" />

          {/* Top-Right: Founder's Perspective Glass Card */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20 w-[calc(100%-3rem)] sm:w-auto max-w-sm p-5 sm:p-6 bg-white/10 backdrop-blur-xl rounded-2xl text-white shadow-2xl space-y-3">
            <div className="flex items-center justify-between pb-2.5 border-b border-white/15 text-sm text-white/70">
              <div className="flex items-center space-x-2">
                <Quote className="w-3.5 h-3.5 text-[#949cad]" />
                <span>Founder&apos;s Perspective</span>
              </div>
              <div className="flex items-center space-x-1.5">
                {FOUNDER_MESSAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMessage(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeMessage === idx ? "w-4 bg-white" : "w-1.5 bg-white/30"
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div key={activeMessage} className="animate-fade-in space-y-3 min-h-22.5 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-white/95 leading-relaxed">
                &quot;{FOUNDER_MESSAGES[activeMessage].quote}&quot;
              </p>

              <div className="mt-4">
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  {FOUNDER_MESSAGES[activeMessage].author}
                </div>
                <div className="text-[11px] text-white/70">
                  {FOUNDER_MESSAGES[activeMessage].role}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Metrics Strip Overlay at Bottom of Image */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-12 z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none">
                    <span ref={(el) => { statRefs.current[idx] = el; }}>0{stat.suffix}</span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white/75">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

