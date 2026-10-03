"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";

interface Project {
  num: string;
  name: string;
  category: string;
  location: string;
  image: string;
  colSpan: string;
  height: string;
}

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsHovered(true);
    if (cardRef.current && badgeRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.set(badgeRef.current, { x, y });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current || !badgeRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(badgeRef.current, {
      x,
      y,
      duration: 0.18,
      ease: "power2.out",
    });
  };

  return (
    <a
      ref={cardRef}
      href="/projects"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={`bento-card group relative block ${project.colSpan} ${project.height} rounded-2xl lg:rounded-3xl overflow-hidden bg-[#121316] shadow-md transition-all duration-500 cursor-pointer sm:cursor-none select-none`}
    >
      {/* Background Image */}
      <Image
        src={project.image}
        alt={project.name}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Gradient Vignette Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/10 transition-opacity duration-500 group-hover:from-black/90" />

      {/* Custom Interactive Follower Cursor Badge */}
      <div
        ref={badgeRef}
        className={`hidden sm:block absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none transition-all duration-300 ease-out ${
          isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="inline-flex items-center space-x-2.5 text-[13px] font-normal text-white bg-[#000000] px-4 py-2 rounded-full">
          <span>Explore Case Study</span>
        </div>
      </div>

      {/* Bento Card Content — Bottom Info */}
      <div className="absolute inset-0 p-5 sm:p-8 lg:p-10 flex flex-col justify-end z-10 pointer-events-none">
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-white uppercase tracking-tight leading-none">
            {project.name}
          </h3>
          <p className="text-xs font-medium text-white/70">
            {project.category} <span className="mx-1 text-white">·</span> {project.location}
          </p>
        </div>
      </div>
    </a>
  );
}

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      num: "01",
      name: "MARINA TOWER",
      category: "Commercial High-Rise",
      location: "Marina Bay, Singapore",
      image: "/projects/marina-tower.jpg",
      colSpan: "lg:col-span-7",
      height: "h-[320px] sm:h-[480px] lg:h-[520px]",
    },
    {
      num: "02",
      name: "JURONG HUB",
      category: "Industrial Logistics",
      location: "Sydney, Australia",
      image: "/projects/jurong-hub.jpg",
      colSpan: "lg:col-span-5",
      height: "h-[320px] sm:h-[480px] lg:h-[520px]",
    },
    {
      num: "03",
      name: "TUAS PLANT",
      category: "Heavy Facility",
      location: "Penang, Malaysia",
      image: "/projects/tuas-plant.jpg",
      colSpan: "lg:col-span-5",
      height: "h-[300px] sm:h-[450px] lg:h-[480px]",
    },
    {
      num: "04",
      name: "CBD COMPLEX",
      category: "Commercial Complex",
      location: "Tokyo, Japan",
      image: "/projects/cbd-complex.jpg",
      colSpan: "lg:col-span-7",
      height: "h-[300px] sm:h-[450px] lg:h-[480px]",
    },
  ];

  useGSAP(() => {
    gsap.fromTo(
      ".bento-card",
      { y: 45, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: ".bento-card",
          start: "top 90%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-24 md:py-32 bg-[#f8f7f4] font-display"
    >
      <div className="max-w-350 mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <p className="text-xs text-[#5c606b] font-medium">
              Recent Works
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#121316] tracking-tight leading-[0.95]">
              Featured Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5c606b] max-w-xs leading-relaxed">
            Key commercial towers and industrial developments across Asia-Pacific.
          </p>
        </div>

        {/* Bento Grid Layout (12-Column Asymmetric Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.num} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

