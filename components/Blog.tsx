"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar, ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { BLOG_POSTS } from "@/lib/blogData";

export default function Blog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".blog-card-reveal",
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  const article1 = BLOG_POSTS[0]; // 5D BIM Article
  const article2 = BLOG_POSTS[1]; // Marina Tower Geotechnical Article

  return (
    <section ref={containerRef} className="py-20 sm:py-28 px-6 md:px-12 bg-[#f8f7f4] font-display">
      <div className="max-w-350 mx-auto space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121316] border border-[#121316]/10 text-xs font-semibold text-white uppercase tracking-wider">
              Blog
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#121316] tracking-tight leading-tight">
              Inside BluxRise: Field Notes &amp; Structural Insights
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-sm font-bold text-[#121316] hover:text-[#0052ff] transition-colors group cursor-pointer"
          >
            <span>Explore All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* 3-Card Grid: Card 1 (Blog Intro Spotlight) + Card 2 & 3 (Topical Articles) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* CARD 1: About Our Blog & Editorial Spotlight */}
          <div className="blog-card-reveal lg:col-span-4 bg-[#121316] text-white p-8 sm:p-10 rounded-[28px] border border-white/10 shadow-xl flex flex-col justify-between group hover:border-[#0052ff]/50 transition-all duration-300 relative overflow-hidden">
            
            <div className="space-y-6 relative z-10">
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  Engineering Rigor, Unfiltered Site Insights.
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  Direct field notes, 5D BIM breakthroughs, and structural engineering insights written by our master project leads and chartered engineers.
                </p>
              </div>

              {/* Tag Cloud */}
              <div className="pt-2 flex flex-wrap gap-2">
                {["5D BIM", "Geotechnical", "Superflat Slabs", "WSH Safety"].map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold text-white/70 px-2.5 py-1 rounded-md bg-white/5 border border-white/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <Link
                href="/blog"
                className="w-full inline-flex items-center justify-between px-6 py-4 rounded-2xl bg-[#0052ff] text-white font-bold text-sm hover:bg-[#0040d9] transition-colors shadow-lg group/btn cursor-pointer"
              >
                <span>Browse Engineering Journal</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* CARD 2: Project Article 1 (5D BIM Case Study) */}
          <div className="blog-card-reveal lg:col-span-4 bg-white p-6 sm:p-7 rounded-[28px] border border-[#121316]/10 shadow-md hover:shadow-xl hover:border-[#0052ff]/30 transition-all duration-300 flex flex-col justify-between group">
            <Link href={`/blog/${article1.id}`} className="block space-y-5">
              {/* Image Frame */}
              <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-neutral-100">
                <Image
                  src={article1.image}
                  alt={article1.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Article Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-[#5c606b]">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article1.date}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article1.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#121316] group-hover:text-[#0052ff] transition-colors leading-snug line-clamp-2">
                  {article1.title}
                </h3>

                <p className="text-xs text-[#5c606b] line-clamp-2 leading-relaxed">
                  {article1.summary}
                </p>
              </div>
            </Link>

            {/* Author Footer Bar */}
            <div className="pt-6 mt-6 border-t border-[#121316]/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={article1.author.avatar}
                  alt={article1.author.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover border border-[#121316]/10"
                />
                <div>
                  <div className="text-xs font-bold text-[#121316]">{article1.author.name}</div>
                  <div className="text-[10px] text-[#5c606b]">{article1.author.role}</div>
                </div>
              </div>

              <Link
                href={`/blog/${article1.id}`}
                className="w-9 h-9 rounded-full bg-[#f8f7f4] border border-[#121316]/10 flex items-center justify-center text-[#121316] group-hover:bg-[#0052ff] group-hover:text-white group-hover:border-[#0052ff] transition-all cursor-pointer"
                aria-label={`Read ${article1.title}`}
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* CARD 3: Project Article 2 (Marina Tower Deep Foundations) */}
          <div className="blog-card-reveal lg:col-span-4 bg-white p-6 sm:p-7 rounded-[28px] border border-[#121316]/10 shadow-md hover:shadow-xl hover:border-[#0052ff]/30 transition-all duration-300 flex flex-col justify-between group">
            <Link href={`/blog/${article2.id}`} className="block space-y-5">
              {/* Image Frame */}
              <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-neutral-100">
                <Image
                  src={article2.image}
                  alt={article2.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Article Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-[#5c606b]">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article2.date}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article2.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#121316] group-hover:text-[#0052ff] transition-colors leading-snug line-clamp-2">
                  {article2.title}
                </h3>

                <p className="text-xs text-[#5c606b] line-clamp-2 leading-relaxed">
                  {article2.summary}
                </p>
              </div>
            </Link>

            {/* Author Footer Bar */}
            <div className="pt-6 mt-6 border-t border-[#121316]/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={article2.author.avatar}
                  alt={article2.author.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover border border-[#121316]/10"
                />
                <div>
                  <div className="text-xs font-bold text-[#121316]">{article2.author.name}</div>
                  <div className="text-[10px] text-[#5c606b]">{article2.author.role}</div>
                </div>
              </div>

              <Link
                href={`/blog/${article2.id}`}
                className="w-9 h-9 rounded-full bg-[#f8f7f4] border border-[#121316]/10 flex items-center justify-center text-[#121316] group-hover:bg-[#0052ff] group-hover:text-white group-hover:border-[#0052ff] transition-all cursor-pointer"
                aria-label={`Read ${article2.title}`}
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
