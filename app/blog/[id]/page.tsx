"use client";

import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { BLOG_POSTS } from "@/lib/blogData";
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  Bookmark,
  ThumbsUp,
  Quote,
  ArrowRight,
  Sparkles,
  Copy,
  Check
} from "lucide-react";

export default function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const post = BLOG_POSTS.find((p) => p.id === resolvedParams.id);

  const [claps, setClaps] = useState(42);
  const [hasClapped, setHasClapped] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  const handleClap = () => {
    setClaps((prev) => prev + 1);
    setHasClapped(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#f8f7f4] text-[#121316] flex flex-col font-display selection:bg-[#0052ff] selection:text-white relative">

        {/* Medium-Style Top Scroll Reading Progress Bar */}
        <div
          className="fixed top-0 left-0 h-1 bg-[#0052ff] z-50 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Global Navigation */}
        <Navbar />

        {/* ════════════════════════════════════════════════════════
            1. MEDIUM ARTICLE HEADER SECTION
        ════════════════════════════════════════════════════════ */}
        <header className="pt-28 sm:pt-40 pb-5 sm:pb-6 px-4 sm:px-6 md:px-12 bg-[#f8f7f4]">
          <div className="max-w-250 mx-auto space-y-4 sm:space-y-6">

            {/* Top Navigation & Category Pill */}
            <div className="flex items-center justify-between gap-3 sm:gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-bold text-[#5c606b] hover:text-[#0052ff] bg-white border border-[#121316]/10 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm hover:border-[#0052ff]/40 transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Journal</span>
              </Link>

              <span className="px-3 py-1 sm:px-3.5 sm:py-1 rounded-full bg-[#0052ff]/10 text-[#0052ff] border border-[#0052ff]/20 text-xs sm:text-sm font-bold">
                {post.category}
              </span>
            </div>

            {/* Article Main Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-[#121316] leading-[1.1] sm:leading-[1.08]">
              {post.title}
            </h1>

            {/* Subtitle / Excerpt Lede */}
            <p className="text-sm sm:text-xl text-[#5c606b] font-light leading-relaxed pt-0.5 sm:pt-1">
              {post.summary}
            </p>

            {/* Medium-Style Author Byline & Social Action Bar */}
            <div className="pt-4 sm:pt-6 border-t border-[#121316]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Author Profile */}
              <div className="flex items-center gap-3 sm:gap-3.5">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#0052ff]"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-[#121316]">{post.author.name}</span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#0052ff] bg-[#0052ff]/10 px-2 py-0.5 rounded-full">
                      Author
                    </span>
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#5c606b] flex items-center gap-2 pt-0.5">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#0052ff]" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Medium Article Action Buttons (Claps, Bookmark, Share) */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  onClick={handleClap}
                  className={`inline-flex items-center space-x-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    hasClapped
                      ? "bg-[#0052ff] text-white shadow-md"
                      : "bg-white border border-[#121316]/10 text-[#121316] hover:border-[#0052ff] hover:text-[#0052ff]"
                  }`}
                  title="Applaud this article"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{claps}</span>
                </button>

                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-1.5 sm:p-2 rounded-full transition-all cursor-pointer ${
                    isBookmarked
                      ? "bg-[#121316] text-white"
                      : "bg-white border border-[#121316]/10 text-[#5c606b] hover:text-[#121316]"
                  }`}
                  title="Save article"
                >
                  <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>

                <button
                  onClick={handleCopyLink}
                  className="p-1.5 sm:p-2 rounded-full bg-white border border-[#121316]/10 text-[#5c606b] hover:text-[#0052ff] transition-all cursor-pointer"
                  title="Copy link to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                </button>
              </div>
            </div>

          </div>
        </header>

        {/* ════════════════════════════════════════════════════════
            2. FEATURED IMAGE & CAPTION
        ════════════════════════════════════════════════════════ */}
        <div className="px-4 sm:px-6 md:px-12 py-2 sm:py-4">
          <div className="max-w-250 mx-auto space-y-3">
            <div className="relative w-full h-56 sm:h-96 lg:h-130 rounded-xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#121316]/10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════
            3. MEDIUM-STYLE ARTICLE BODY (Narrow 760px Reader Frame)
        ════════════════════════════════════════════════════════ */}
        <main className="grow py-6 sm:py-10 px-4 sm:px-6 md:px-12">
          <article className="max-w-190 mx-auto space-y-8 sm:space-y-10 text-[#121316]">

            {/* Key Executive Takeaways Box */}
            <div className="bg-white p-5 sm:p-9 rounded-2xl sm:rounded-3xl border border-[#121316]/10 shadow-md space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 text-[#0052ff] font-bold text-[11px] sm:text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                Executive Summary &amp; Key Takeaways
              </div>

              <div className="space-y-2.5 sm:space-y-3 pt-1">
                {post.content.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0052ff] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#121316] font-medium leading-relaxed">
                      {takeaway}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Introduction Paragraph with Medium Drop-Cap */}
            <div className="text-base sm:text-xl text-[#292929] leading-[1.8] sm:leading-[1.85] font-light">
              <p className="whitespace-pre-line">
                <span className="float-left text-4xl sm:text-6xl font-bold text-[#0052ff] leading-none pr-2 sm:pr-3 pt-1 font-display">
                  {post.content.intro.charAt(0)}
                </span>
                {post.content.intro.slice(1)}
              </p>
            </div>

            {/* Article Content Sections */}
            <div className="space-y-8 sm:space-y-12 pt-2 sm:pt-4">
              {post.content.sections.map((section, idx) => (
                <section key={idx} className="space-y-4 sm:space-y-5">
                  <h2 className="text-xl sm:text-3xl font-bold text-[#121316] tracking-tight leading-tight">
                    {section.heading}
                  </h2>

                  <p className="text-sm sm:text-lg text-[#333333] leading-[1.75] sm:leading-[1.8] font-light">
                    {section.body}
                  </p>

                  {/* Medium Pull Quote Callout */}
                  {section.quote && (
                    <blockquote className="my-6 sm:my-8 pl-4 sm:pl-6 border-l-4 border-[#0052ff] italic space-y-2">
                      <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#0052ff]/40 mb-1" />
                      <p className="text-base sm:text-xl font-medium text-[#121316] leading-relaxed">
                        &quot;{section.quote}&quot;
                      </p>
                      <cite className="block text-xs font-bold text-[#0052ff] not-italic pt-1">
                        — {post.author.name}, {post.author.role}
                      </cite>
                    </blockquote>
                  )}

                  {/* Engineering Protocol Checklist */}
                  {section.checklist && (
                    <div className="bg-[#121316] text-white p-4 sm:p-7 rounded-xl sm:rounded-2xl space-y-2.5 sm:space-y-3 shadow-lg my-4 sm:my-6">
                      <div className="text-[10px] sm:text-xs font-bold text-[#0052ff] uppercase tracking-wider">
                        Field Protocols Verified:
                      </div>
                      <ul className="space-y-2 sm:space-y-2.5">
                        {section.checklist.map((item, cIdx) => (
                          <li key={cIdx} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-neutral-200">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0052ff] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Conclusion & Strategic Outlook */}
            <div className="pt-6 sm:pt-8 border-t border-[#121316]/10 space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#121316]">Conclusion &amp; Outlook</h3>
              <p className="text-sm sm:text-lg text-[#333333] leading-[1.75] sm:leading-[1.8] font-light">
                {post.content.conclusion}
              </p>
            </div>

            {/* Medium Writer Profile Box at Bottom */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#121316]/10 shadow-md flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8 sm:mt-12">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#0052ff] shrink-0"
              />
              <div className="space-y-1.5 sm:space-y-2 text-center sm:text-left">
                <div className="text-[10px] sm:text-xs font-bold text-[#0052ff] uppercase tracking-wider">
                  Written by {post.author.name}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#121316]">{post.author.role}</h4>
                <p className="text-xs text-[#5c606b] leading-relaxed">
                  Chartered engineering lead at BluxRise Construction. Directing 5D BIM virtual modeling, deep foundation engineering, and site superintendence across Singapore developments.
                </p>
              </div>
            </div>

          </article>
        </main>

        {/* ════════════════════════════════════════════════════════
            4. RECOMMENDED NEXT ARTICLES (Medium "More From Journal")
        ════════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-12 bg-white border-t border-[#121316]/10">
          <div className="max-w-300 mx-auto space-y-6 sm:space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl sm:text-3xl font-bold text-[#121316] tracking-tight">
                More from BluxRise Journal
              </h3>
              <Link
                href="/blog"
                className="text-xs font-bold text-[#0052ff] hover:underline flex items-center gap-1"
              >
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.id}`}
                  className="bg-[#f8f7f4] p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#121316]/10 shadow-sm hover:shadow-md hover:border-[#0052ff]/40 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="text-[10px] sm:text-xs text-[#0052ff] font-bold uppercase tracking-wider">
                      {rel.category}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#121316] group-hover:text-[#0052ff] transition-colors leading-snug">
                      {rel.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5c606b] line-clamp-2 leading-relaxed">
                      {rel.summary}
                    </p>
                  </div>

                  <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#121316]/10 flex items-center justify-between text-xs text-[#5c606b]">
                    <span>{rel.readTime}</span>
                    <span className="font-bold text-[#121316] group-hover:text-[#0052ff] flex items-center gap-1">
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Global Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
