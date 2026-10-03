"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#f8f7f4] text-[#121316] flex flex-col font-display selection:bg-[#121316] selection:text-white">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="grow">
          <Hero />
          <About />
          <FeaturedProjects />
          <Services />
          <Process />
          <WhyChooseUs />
          <Testimonials />
          <Faq />
          <CtaBanner />
          <Blog />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
