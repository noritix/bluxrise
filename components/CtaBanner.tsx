"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";

export default function CtaBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".cta-content", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#f8f7f4] font-display">
      <div className="max-w-350 mx-auto px-6 md:px-12">
        {/* Dark Elevated CTA Banner Card */}
        <div className="cta-content relative rounded-3xl bg-[#121316] text-white overflow-hidden shadow-2xl border border-white/10 group">
          {/* Cross line background pattern */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundSize: "40px 40px",
              backgroundImage:
                "linear-gradient(45deg, #ffffff 1px, transparent 1px), linear-gradient(-45deg, #ffffff 1px, transparent 1px)",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch">

            {/* Left Content Column with Padding */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 sm:space-y-8">
              {/* Headline */}
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[0.95] drop-shadow-md">
                HAVE A PROJECT<br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/60">IN MIND?</span>
              </h2>

              {/* Subtitle */}
              <p className="text-base sm:text-xl text-white/70 font-normal leading-relaxed max-w-xl">
                Let&apos;s talk about what you&apos;re building.
              </p>

              {/* CTA Button */}
              <div className="pt-2 sm:pt-4">
                <a
                  href="/contact"
                  className="relative inline-flex items-center space-x-3 text-sm font-medium tracking-widest rounded-full text-[#121316] bg-white px-8 py-4 cursor-pointer group/btn overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#0052ff]/40 transition-all duration-500"
                >
                  {/* Blinking Blue Dot Indicator */}
                  <span className="relative z-10 flex h-3 w-3 items-center justify-center">
                    {/* Radial Expanding Blue Background originating directly from this dot's center */}
                    <span className="absolute w-3 h-3 rounded-full bg-[#0052ff] scale-0 group-hover/btn:scale-[60] transition-transform duration-2000 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none -z-10" />

                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0052ff] opacity-75 group-hover/btn:opacity-0 transition-opacity duration-300" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0052ff] group-hover/btn:bg-white transition-colors duration-500 shadow-[0_0_8px_rgba(0,82,255,0.8)]" />
                  </span>

                  {/* Button Text */}
                  <span className="relative z-20 font-semibold tracking-wider group-hover/btn:text-white transition-colors duration-500">
                    Let&apos;s Build
                  </span>
                </a>
              </div>
            </div>

            {/* Right Image Column — Zero Padding, Zero Margin, Full Height & Edge-to-Edge */}
            <div className="lg:col-span-5 h-64 sm:h-110 relative overflow-hidden">
              <Image
                src="/cta.png"
                alt="Construction Project"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-r from-[#121316] via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
