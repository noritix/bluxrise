"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "What types of commercial projects does Bluxrise specialize in?",
    answer:
      "We specialize in high-rise commercial towers, advanced industrial logistics hubs, semiconductor manufacturing facilities, and biotech innovation centers ranging from $10M to $250M+ in capital expenditure.",
  },
  {
    question: "How does Bluxrise guarantee fixed-cost lump-sum pricing without overruns?",
    answer:
      "We utilize 5D BIM pre-construction modulation and structural price-locking before breaking ground. Every material specification and subcontractor schedule is contractually bound to eliminate change-order cost inflation.",
  },
  {
    question: "What structural warranties and quality certifications are provided?",
    answer:
      "We provide a comprehensive 10-year structural warranty on all commercial builds. Our operations are ISO 9001 (Quality Management), ISO 45001 (Safety), and BCA A1 accredited with 100% independent third-party site audits.",
  },
  {
    question: "How do you manage site safety and regulatory compliance on complex builds?",
    answer:
      "With over 4.2M+ safe work hours and zero reportable lost-time incidents, our certified safety directors enforce real-time AI site monitoring, daily hazard briefings, and full municipal clearance before each construction phase.",
  },
  {
    question: "What is the typical timeline for project pre-construction and mobilization?",
    answer:
      "Initial site analysis, BIM clash detection, and municipal permitting typically require 4 to 8 weeks, following which immediate heavy equipment mobilization and ground-breaking begin.",
  },
  {
    question: "Can clients track construction progress in real-time?",
    answer:
      "Yes. Every client receives dedicated portal access to 3D BIM progress models, bi-weekly drone site scans, milestone completion logs, and live budget draw reports.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 sm:py-36 bg-[#f8f7f4] relative font-display"
    >
      <div className="max-w-350 mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative">
          
          {/* Left Column: Sticky Pinned Header at Threshold Point */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start space-y-4">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#121316]">
              <HelpCircle className="w-4 h-4 text-[#0052ff]" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#121316] tracking-tight leading-[1.15]">
              Everything you need to know about working with us.
            </h2>
          </div>

          {/* Right Column: Scrolling Questions List */}
          <div className="lg:col-span-7 space-y-4">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`faq-item rounded-2xl transition-all duration-300 border overflow-hidden bg-white ${
                    isOpen
                      ? "border-[#0052ff]/40 shadow-lg"
                      : "border-[#121316]/10 hover:border-[#121316]/25"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full p-6 sm:p-7 flex items-center justify-between text-left gap-4 transition-colors cursor-pointer"
                  >
                    <span className="text-lg sm:text-xl font-bold text-[#121316] tracking-tight">
                      {item.question}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#0052ff] text-white"
                          : "bg-[#121316]/5 text-[#121316]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Answer Box */}
                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7">
                      <p className="text-sm sm:text-base text-[#5c606b] leading-relaxed pt-4 border-t border-[#121316]/10">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
