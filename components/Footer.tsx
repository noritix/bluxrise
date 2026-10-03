"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUp, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

// Social Media Icons
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const NAV_LINKS = [
  { label: "Our Work", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Commercial High-Rise", href: "/services" },
  { label: "Industrial Logistics Hubs", href: "/services" },
  { label: "Turnkey Design-Build", href: "/services" },
  { label: "Project management", href: "/services" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "X", href: "#", icon: XIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#121316] text-[#f8f7f4] font-display rounded-[28px] sm:rounded-[36px] border border-white/10 shadow-2xl relative overflow-hidden m-3 sm:m-7">

      <div className="max-w-360 mx-auto px-5 sm:px-12 lg:px-16 pt-12 sm:pt-16 pb-10 relative z-10 space-y-10 sm:space-y-12">

        {/* ════════════════════════════════════════════════════════
            1. TOP CALL-TO-ACTION BANNER STRIP
        ════════════════════════════════════════════════════════ */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 sm:pb-12 border-b border-white/10">
          <div className="space-y-2 max-w-2xl">
            <span className="text-sm font-bold text-[#0052ff]">
              Ready to Build?
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s Build Your Next Landmark.
            </h3>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 bg-white hover:bg-[#0040d9] hover:text-white text-[#121316] font-bold text-sm rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer w-full sm:w-auto shrink-0 group text-center"
          >
            <span>Initiate Project Inquiry</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* ════════════════════════════════════════════════════════
            2. MAIN 4-COLUMN BALANCED LINK GRID
        ════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">

          {/* Col 1: Brand & Socials (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="BluxRise" width={180} height={80} className="h-20 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-xs sm:text-sm text-white/60 font-light max-w-xs leading-relaxed">
              BCA Grade A1 Master Contractor specializing in commercial high-rises, industrial hubs, and 5D BIM pre-construction.
            </p>

            <div className="flex items-center space-x-2.5 pt-2">
              {SOCIAL_LINKS.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="w-9 h-9 rounded-full border border-white/15 bg-white/5 hover:bg-[#0052ff] hover:border-[#0052ff] text-white/70 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Navigation (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-md font-bold text-white">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm text-white/60 font-light">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Capabilities (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-md font-bold text-white">
              Capabilities
            </div>
            <ul className="space-y-2.5 text-sm text-white/60 font-light">
              {SERVICE_LINKS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact & Newsletter (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-md font-bold text-white">
              Direct Contact
            </div>

            <div className="text-sm space-y-1 text-white/70 font-light">
              <div>Email: <a href="mailto:hello@bluxrise.com" className="text-white hover:text-[#0052ff] transition-colors font-medium">hello@bluxrise.com</a></div>
              <div>Hotline: <a href="tel:+6567890123" className="text-white font-medium">+65 6789 0123</a></div>
              <div className="text-white/50 pt-0.5">8 Marina View, Asia Square, SG</div>
            </div>

            {isSubscribed ? (
              <div className="flex items-center space-x-2 text-xs text-emerald-400 pt-1">
                <Check className="w-4 h-4" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center pt-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Subscribe to Newsletter..."
                  className="w-full px-3.5 py-2.5 bg-white/10 border border-white/15 rounded-l-xl text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#0052ff]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#0052ff] hover:bg-[#0040d9] text-white rounded-r-xl text-xs font-bold transition-all shrink-0 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* ════════════════════════════════════════════════════════
            3. MINIMALIST BRAND SIGNATURE & BOTTOM BAR
        ════════════════════════════════════════════════════════ */}
        <div className="space-y-6 pt-2">

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-light pt-2 text-center sm:text-left">
            <div>
              &copy; {new Date().getFullYear()} BluxRise Construction Pte Ltd. All Rights Reserved.
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:space-x-6">
              <a href="/about" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>&bull;</span>
              <a href="/contact" className="hover:text-white transition-colors">Terms of Service</a>
              <span>&bull;</span>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 rounded-full border border-white/20 text-white/60 hover:bg-[#0052ff] hover:border-[#0052ff] hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm"
                aria-label="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
