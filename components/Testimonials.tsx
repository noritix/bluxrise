"use client";

import React, { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "BLUXRISE delivered our 48-story commercial headquarters two weeks ahead of schedule and precisely on budget. Their engineering discipline and site superintendence are unmatched in the region.",
      name: "David Sterling",
      title: "VP of Real Estate Development · Sterling Commercial Properties",
      project: "Marina Financial Tower ($145M)",
      avatar: "/testimonials/client-1.jpg",
    },
    {
      quote:
        "Their 3D BIM pre-construction modulation eliminated all on-site structural clashes. The logistics execution on our 600,000 sq ft industrial manufacturing plant set a new benchmark.",
      name: "David Michael",
      title: "Chief Operations Officer · Apex Global Logistics",
      project: "Pacific Advanced Logistics Hub ($92M)",
      avatar: "/testimonials/client-2.jpg",
    },
    {
      quote:
        "Zero lost-time incidents across a 3-year heavy structural steel erection phase is remarkable. Bluxrise sets the gold standard for industrial site safety and municipal compliance.",
      name: "Marcus Chen",
      title: "Managing Director · Nexus Infrastructure Partners",
      project: "Kinetic Semiconductor Fab ($210M)",
      avatar: "/testimonials/client-3.jpg",
    },
    {
      quote:
        "From soil stabilization to system commissioning, the transparency and lump-sum guarantee gave our investment board complete fidelity. They are our tier-1 partner of choice.",
      name: "Sarah Vanderbilt",
      title: "Head of Infrastructure Assets · Vanderbilt Capital Group",
      project: "Metro Biotech Innovation Center ($118M)",
      avatar: "/testimonials/client-4.jpg",
    },
  ];

  useGSAP(
    () => {
      gsap.from(".testimonial-reveal", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  // 5-Second Timeline Auto Switch
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="py-24 sm:py-32 bg-[#f8f7f4] font-display"
    >
      <div className="max-w-350 mx-auto px-6 md:px-12">
        {/* Header Bar */}
        <div className="testimonial-reveal flex items-center justify-between text-xl font-semibold text-[#121316] mb-12">
          <span>Testimonials</span>
          <div className="flex items-center space-x-2 font-semibold text-[#121316]">
            <span>{String(currentIndex + 1).padStart(2, "0")}</span>
            <span className="text-[#5c606b]">/</span>
            <span className="text-[#5c606b]">
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* 2-Column Grid: Full Height Image Card on Left, Review Quote on Right */}
        <div className="testimonial-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Side: Full height image card with details over bottom of image */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl border border-[#121316]/10 min-h-115 lg:min-h-130 h-full flex flex-col justify-end group">
            {/* Full Height Background Image */}
            <div
              key={currentTestimonial.avatar}
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${currentTestimonial.avatar}')` }}
            />
            {/* Dark Gradient Overlay for text legibility */}
            <div className="absolute inset-0 bg-linear-to-t from-[#121316] via-[#121316]/10 to-transparent" />

            {/* Details over the bottom of the image */}
            <div className="relative z-10 p-6 sm:p-8 space-y-2 mt-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-md">
                {currentTestimonial.name}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed drop-shadow-sm">
                {currentTestimonial.title}
              </p>
              <div className="pt-1">
                <span className="inline-block text-xs font-semibold text-[#ffffff] bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                  {currentTestimonial.project}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Review Quote without progress bar */}
          <div className="lg:col-span-7 flex flex-col justify-center self-stretch py-4">
            {/* Review Quote */}
            <blockquote
              key={currentIndex}
              className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#121316] leading-normal tracking-tight my-auto"
              style={{
                animation: "revealTestimonial 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              }}
            >
              &quot;{currentTestimonial.quote}&quot;
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
