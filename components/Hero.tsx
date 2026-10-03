"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Smooth subtle camera zoom & blur-to-clear content reveal
    tl.fromTo(
      bgRef.current,
      { scale: 1.12, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.6, ease: "power2.out" }
    ).fromTo(
      headlineRef.current,
      { y: 60, opacity: 0, filter: "blur(6px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.1, ease: "power3.out" },
      "-=1.1"
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden font-display"
    >
      {/* Full-Bleed Background Image Layer */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=2400&q=90"
          alt="BluxRise Commercial High-Rise Tower"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark gradient from bottom for text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0c] via-[#0a0a0c]/5 to-transparent" />
        {/* Subtle top vignette for navbar readability */}
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0c]/40 via-transparent to-transparent" />
      </div>

      {/* Bottom-Anchored Content */}
      <div className="relative z-10 max-w-375 mx-auto px-6 md:px-12 w-full pb-16 md:pb-24 pt-40">
        <div ref={headlineRef} className="max-w-3xl space-y-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[92px] font-bold text-white uppercase tracking-tight leading-[0.92]">
            BUILDING<br />
            WHAT LASTS.
          </h1>

          <div className="space-y-6 pt-2">
            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal max-w-md">
              Premium commercial and industrial construction across Asia-Pacific.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3 rounded-full font-bold text-sm tracking-wider bg-[#eae7e7] text-[#121316] hover:bg-white/80 transition-all duration-300 cursor-pointer"
              >
                <span>Get in Touch</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center space-x-3 px-7 py-3 rounded-full text-white font-medium text-sm tracking-wider bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 shadow-lg shadow-black/10 transition-all duration-300 cursor-pointer group"
              >
                <span>Explore Work</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



