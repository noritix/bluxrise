"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
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

const NAV_ITEMS = [
  { num: "01", name: "OUR WORK", href: "/projects" },
  { num: "02", name: "SERVICES", href: "/services" },
  { num: "03", name: "ABOUT", href: "/about" },
  { num: "04", name: "BLOG", href: "/blog" },
  { num: "05", name: "CONTACT", href: "/contact" },
  { num: "06", name: "CAREERS", href: "/careers" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "X (Twitter)", href: "#", icon: XIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLightPage = pathname.startsWith("/blog/");

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-40 transition-all duration-300 font-display">
      {/* Navbar Header Bar */}
      <nav className="px-6 md:px-12 py-5 transition-all duration-300">
        <div className="max-w-375 mx-auto flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center py-1 group">
            <Image
              src="/logo.png"
              alt="Bluxrise Commercial & Industrial Construction"
              width={160}
              height={64}
              priority
              className={`h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-[1.01] ${isLightPage
                  ? "filter-[invert(22%)_sepia(95%)_saturate(5000%)_hue-rotate(218deg)_brightness(102%)_contrast(105%)]"
                  : "brightness-0 invert"
                }`}
            />
            <div className="hidden items-center space-x-3 group">
              <div className="w-3.5 h-3.5 bg-[#0052ff] shrink-0" />
              <span className={`text-xl font-bold tracking-wider uppercase ${isLightPage ? "text-[#0052ff]" : "text-white"}`}>
                BLUXRISE
              </span>
            </div>
          </Link>

          {/* Menu Trigger Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`w-11 h-11 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer ${menuOpen
                  ? "bg-[#121316] text-white border-[#121316]"
                  : isLightPage
                    ? "bg-white border-[#121316]/20 text-[#121316] hover:bg-[#0052ff] hover:border-[#0052ff] hover:text-white shadow-sm"
                    : "bg-transparent border-white/40 text-white hover:border-white hover:bg-white hover:text-[#121316]"
                }`}
              aria-label="Toggle Fullscreen Navigation Menu"
            >
              <Plus className={`w-5 h-5 transition-transform duration-300 ${menuOpen ? "rotate-45" : ""}`} />
            </button>
          </div>

        </div>
      </nav>

      {/* Full-Screen Navigation Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#f8f7f4] text-[#121316] flex flex-col justify-between overflow-y-auto animate-fade-in font-display">

          {/* OVERLAY HEADER */}
          <div className="px-6 md:px-12 py-4 border-b border-[#121316]/10 shrink-0">
            <div className="max-w-375 mx-auto flex items-center justify-between">

              {/* Logo */}
              <a href="#" onClick={() => setMenuOpen(false)} className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Bluxrise"
                  width={150}
                  height={60}
                  className="h-10 sm:h-15 w-auto object-contain"
                />
              </a>

              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 rounded-full border border-[#121316]/15 hover:border-[#121316] bg-white hover:bg-[#121316] text-[#121316] hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
                aria-label="Close menu"
              >
                <Minus className="w-5 h-5" />
              </button>

            </div>
          </div>

          {/* MAIN MENU BODY */}
          <div className="px-6 md:px-12 py-6 sm:py-8 my-auto shrink-0">
            <div className="max-w-325 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

              {/* LEFT COLUMN: Main Navigation Links */}
              <div className="lg:col-span-7 space-y-1">
                <div className="text-xs font-semibold text-[#5c606b] uppercase tracking-widest pb-2 border-b border-[#121316]/10 mb-2">
                  Navigation
                </div>

                <div className="divide-y divide-[#121316]/10">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between py-2.5 sm:py-3.5 text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight transition-all duration-300 hover:pl-3 hover:text-[#0052ff]"
                    >
                      <div className="flex items-center space-x-5">
                        <span className="text-xs font-mono text-[#5c606b] group-hover:text-[#0052ff] transition-colors">
                          {item.num}
                        </span>
                        <span>{item.name}</span>
                      </div>
                      <ArrowUpRight className="w-5 h-5 sm:w-7 sm:h-7 text-[#121316]/20 group-hover:text-[#0052ff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN: Social Media & Action CTA */}
              <div className="lg:col-span-5 lg:pl-8 space-y-6 border-t lg:border-t-0 lg:border-l border-[#121316]/10 pt-6 lg:pt-0">

                {/* CTA Box */}
                <div className="bg-[#121316] text-white p-6 sm:p-7 rounded-3xl shadow-xl space-y-4 border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0052ff]/20 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10 space-y-2">
                    <div className="text-[12px] font-bold text-[#0052ff]">
                      Ready to Build?
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                      Initiate Project Inquiry
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Consult with our Singapore Grade A1 engineering team for tenders, cost estimates, and feasibility.
                    </p>
                  </div>

                  <a
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="relative z-10 w-full py-3.5 bg-[#0052ff] hover:bg-[#0040d9] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-[#0052ff]/30 active:scale-[0.99]"
                  >
                    <span>Get a Quote</span>
                  </a>
                </div>

                {/* Social Media Icon Buttons */}
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-[#5c606b] pb-2">
                    Connect With Us
                  </div>
                  <div className="flex items-center space-x-3">
                    {SOCIAL_LINKS.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          className="w-10 h-10 rounded-full border border-[#121316]/15 hover:border-[#0052ff] bg-white hover:bg-[#0052ff] text-[#121316] hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm cursor-pointer"
                        >
                          <IconComponent className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* OVERLAY FOOTER */}
          <div className="px-6 md:px-12 py-4 border-t border-[#121316]/10 shrink-0 bg-[#f8f7f4]">
            <div className="max-w-325 mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5c606b]">
              <div>
                &copy; {new Date().getFullYear()} BluxRise Construction Pte Ltd. All Rights Reserved.
              </div>
              <div>
                <a href="mailto:hello@bluxrise.com" className="font-semibold text-[#121316] hover:text-[#0052ff] text-sm transition-colors">
                  hello@bluxrise.com
                </a>
              </div>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}
