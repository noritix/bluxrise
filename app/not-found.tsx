"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { Home } from "lucide-react";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".minimal-nf-reveal",
      { y: 25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "all",
      }
    );
  }, { scope: containerRef });

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#121316] text-white flex flex-col justify-between font-display relative overflow-hidden">

        {/* Background Image with Dark Tint Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/not-found.jpg"
            alt="Page Not Found Background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Global Navigation */}
        <Navbar />

        {/* Hero Section */}
        <main ref={containerRef} className="grow flex items-center justify-center pt-28 sm:pt-44 pb-16 sm:pb-24 px-4 sm:px-6 relative z-10">

          <div className="max-w-2xl mx-auto text-center space-y-4 sm:space-y-6 relative z-10">
            {/* Giant Graphic 404 Number */}
            <div className="minimal-nf-reveal text-6xl sm:text-8xl lg:text-[12rem] font-extrabold text-white leading-none select-none drop-shadow-2xl opacity-95">
              4<span className="text-[#121316]">0</span>4
            </div>

            {/* Clean Editorial Title & Subtitle */}
            <div className="minimal-nf-reveal space-y-2 sm:space-y-3">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-md">
                Blueprint Unmapped.
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-white max-w-md mx-auto leading-relaxed font-light">
                The requested page does not exist or has been relocated during site development.
              </p>
            </div>

            {/* Clean Minimal CTAs */}
            <div className="minimal-nf-reveal pt-2 sm:pt-4">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 sm:space-x-2.5 bg-[#121316] hover:bg-[#121316]/80 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Home className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </div>

          </div>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}

