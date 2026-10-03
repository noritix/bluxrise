"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { BLOG_POSTS } from "@/lib/blogData";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowUpRight,
  ArrowRight,
  Search,
  Sparkles,
} from "lucide-react";

const CATEGORIES = [
  "All Articles",
  "Virtual Pre-Construction",
  "Project Case Study",
  "Industrial Engineering",
  "Site Governance"
];

export default function BlogIndexPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  useGSAP(() => {
    const revealElements = gsap.utils.toArray<HTMLElement>(".blog-index-reveal");
    revealElements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All Articles" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const gridPosts = filteredPosts.filter((post) => {
    if (selectedCategory === "All Articles" && !searchQuery) {
      return post.id !== featuredPost.id;
    }
    return true;
  });

  return (
    <SmoothScroll>
      <div ref={containerRef} className="min-h-screen bg-[#f8f7f4] text-[#121316] flex flex-col font-display selection:bg-[#121316] selection:text-white p-2 sm:p-4">

        {/* ════════════════════════════════════════════════════════
            1. HERO SECTION: Full Viewport Dark Shell
        ════════════════════════════════════════════════════════ */}
        <header className="relative w-full min-h-0 lg:min-h-[calc(97vh-1rem)] bg-[#121316] text-white rounded-3xl sm:rounded-[36px] border border-white/10 shadow-2xl overflow-hidden flex flex-col lg:grid lg:grid-cols-12 group">
          <Navbar />

          {/* Hero Image Container (Top on Mobile, Right Column on Desktop) */}
          <div className="blog-index-reveal order-1 lg:order-2 lg:col-span-6 relative w-full h-52 sm:h-72 lg:h-full min-h-75 lg:min-h-[90vh] overflow-hidden mt-0">
            <Image
              src="/blog-hero.jpg"
              alt="BluxRise Engineering Journal"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-b from-[#121316]/70 via-transparent to-[#121316] lg:hidden" />
          </div>

          {/* Left Column Content (Below Image on Mobile, Left Column on Desktop) */}
          <div className="blog-index-reveal order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center px-4 sm:px-10 lg:px-14 pt-5 sm:pt-10 lg:pt-32 pb-8 sm:pb-12 relative z-20 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-[11px] sm:text-xs font-semibold w-fit">
              <span className="w-2 h-2 rounded-full bg-[#0052ff] animate-pulse" />
              Bluxrise Engineering Journal
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.05]">
              Field Notes &amp; <span className="text-[#0052ff]">Structural Insights</span>.
            </h1>

            <p className="text-xs sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-light max-w-2xl">
              Practical engineering breakdowns, 5D BIM pre-construction notes, and zero-incident site governance written by our chartered engineering directors.
            </p>

            {/* Quick Stats Pill */}
            <div className="pt-2 sm:pt-4 flex flex-wrap gap-2.5 sm:gap-4 text-xs text-white/70">
              <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl bg-[#18191e] border border-white/10 text-[11px] sm:text-xs">
                <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0052ff]" />
                <span>4 Technical Articles</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl bg-[#18191e] border border-white/10 text-[11px] sm:text-xs">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0052ff]" />
                <span>Written by Real Engineers</span>
              </div>
            </div>
          </div>

        </header>

        {/* ════════════════════════════════════════════════════════
            2. MAIN ARTICLES SECTION & CATEGORY FILTER
        ════════════════════════════════════════════════════════ */}
        <main className="grow py-10 sm:py-16 lg:py-24 px-4 sm:px-6 md:px-12">
          <div className="max-w-350 mx-auto space-y-8 sm:space-y-12">

            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-[#121316]/10">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {CATEGORIES.map((category, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                      selectedCategory === category
                        ? "bg-[#121316] text-white shadow-md"
                        : "bg-white text-[#5c606b] border border-[#121316]/10 hover:bg-[#121316]/5 hover:text-[#121316]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative max-w-full sm:max-w-xs w-full">
                <Search className="w-4 h-4 text-[#5c606b] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search engineering notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-full bg-white border border-[#121316]/15 text-xs text-[#121316] placeholder:text-[#5c606b] focus:outline-none focus:border-[#0052ff] transition-colors shadow-sm"
                />
              </div>
            </div>

            {/* FEATURED SPOTLIGHT ARTICLE CARD (When All Articles selected and no search) */}
            {selectedCategory === "All Articles" && !searchQuery && (
              <div className="blog-index-reveal bg-[#121316] text-white rounded-3xl sm:rounded-4xl p-5 sm:p-8 lg:p-12 border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center group">
                <div className="lg:col-span-6 relative w-full h-52 sm:h-80 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0052ff] text-white text-xs sm:text-sm font-bold w-fit">
                    Featured Editorial
                  </div>

                  <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug group-hover:text-[#0052ff] transition-colors">
                    <Link href={`/blog/${featuredPost.id}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {featuredPost.summary}
                  </p>

                  <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-white/60">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#0052ff]" />
                      {featuredPost.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#0052ff]" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-t border-white/10">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-white/20"
                      />
                      <div>
                        <div className="text-xs font-bold text-white">{featuredPost.author.name}</div>
                        <div className="text-[10px] sm:text-[11px] text-white/50">{featuredPost.author.role}</div>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="w-fit inline-flex items-center space-x-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white text-[#121316] font-bold text-xs hover:bg-[#0052ff] hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* ARTICLES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {gridPosts.map((post) => (
                <div
                  key={post.id}
                  className="blog-index-reveal bg-white p-5 sm:p-7 rounded-2xl sm:rounded-[28px] border border-[#121316]/10 shadow-md hover:shadow-xl hover:border-[#0052ff]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <Link href={`/blog/${post.id}`} className="block space-y-4 sm:space-y-5">
                    {/* Thumbnail */}
                    <div className="relative w-full h-48 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Meta info */}
                    <div className="space-y-2.5 sm:space-y-3">
                      <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-[#5c606b]">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#0052ff]" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#0052ff]" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-[#121316] group-hover:text-[#0052ff] transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-[#5c606b] line-clamp-3 leading-relaxed">
                        {post.summary}
                      </p>
                    </div>
                  </Link>

                  {/* Author footer */}
                  <div className="pt-4 mt-4 sm:pt-6 sm:mt-6 border-t border-[#121316]/10 flex items-center justify-between">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={36}
                        height={36}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-[#121316]/10"
                      />
                      <div>
                        <div className="text-xs font-bold text-[#121316]">{post.author.name}</div>
                        <div className="text-[10px] text-[#5c606b]">{post.author.role}</div>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.id}`}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#f8f7f4] border border-[#121316]/10 flex items-center justify-center text-[#121316] group-hover:bg-[#0052ff] group-hover:text-white group-hover:border-[#0052ff] transition-all cursor-pointer"
                      aria-label={`Read ${post.title}`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {gridPosts.length === 0 && (
              <div className="text-center py-12 sm:py-16 space-y-4">
                <p className="text-base sm:text-lg font-bold text-[#121316]">No articles found matching &quot;{searchQuery}&quot;</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All Articles");
                  }}
                  className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#0052ff] text-white text-xs font-bold"
                >
                  Reset Filters
                </button>
              </div>
            )}

          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
