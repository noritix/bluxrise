"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import {
  Briefcase,
  Cpu,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Clock,
  MapPin,
  Sparkles,
  X,
  Send,
  Upload,
  GraduationCap,
  DollarSign
} from "lucide-react";

/* ── OPEN POSITIONS DATA ── */
const OPEN_POSITIONS = [
  {
    id: "senior-structural-engineer",
    title: "Senior Structural Engineer (PE Track)",
    department: "Structural Engineering",
    category: "Engineering",
    location: "Singapore HQ / Site Offices",
    type: "Full-Time",
    experience: "6 – 10 Years",
    salary: "S$9,500 – S$13,500 / month",
    summary:
      "Lead structural design verification, foundation foundation analysis, and diaphragm wall engineering for commercial high-rise tenders.",
    responsibilities: [
      "Review complex structural calculation packages and FEM models in ETABS and SAFE.",
      "Manage statutory authority submissions with BCA and URA for TOP/CSC clearances.",
      "Lead continuous bored pile and raft foundation site inspections.",
      "Mentor junior engineers under BluxRise's sponsored Professional Engineer (PE) pathway."
    ],
    requirements: [
      "Bachelor or Master's degree in Civil/Structural Engineering from a recognized university.",
      "Registered PE (Singapore) or eligible for Professional Engineer registration.",
      "Minimum 6 years of experience in deep foundation and high-rise commercial construction."
    ]
  },
  {
    id: "lead-5d-bim-coordinator",
    title: "Lead 5D BIM Coordinator & Modeler",
    department: "BIM & Digital Twin",
    category: "BIM & Digital Twin",
    location: "Jurong Innovation District HQ",
    type: "Full-Time",
    experience: "4 – 7 Years",
    salary: "S$7,500 – S$10,500 / month",
    summary:
      "Own the 3D/4D/5D federated BIM model for multi-million dollar commercial projects, executing virtual clash detection before site groundbreaking.",
    responsibilities: [
      "Construct LOD 400 fabrication-ready models in Revit Architecture, Structure, and MEP.",
      "Run automated hard-clash and clearance routines in Navisworks Manage.",
      "Link Primavera P6 master schedules to BIM elements for 4D construction sequencing.",
      "Train site foremen on Augmented Reality (AR) field tablet inspection routines."
    ],
    requirements: [
      "Degree or Diploma in Building Information Modeling, Architectural Technology, or Civil Engineering.",
      "BCA BIM Specialist Certification or equivalent.",
      "Proficiency in Revit, Navisworks, Synchro 4D, and Dynamo scripting."
    ]
  },
  {
    id: "commercial-highrise-pm",
    title: "Commercial High-Rise Project Manager",
    department: "Project Management",
    category: "Project Management",
    location: "Marina Bay Site Office",
    type: "Full-Time",
    experience: "8 – 12 Years",
    salary: "S$11,000 – S$16,000 / month",
    summary:
      "Single-point leader managing budget, master schedule, subcontractor procurement, and client communication for a $140M commercial high-rise.",
    responsibilities: [
      "Direct overall site operations, master scheduling, and lump-sum budget management.",
      "Lead weekly consultant coordination and client progress reporting.",
      "Enforce BCA Grade A1 quality standards and zero-accident site safety governance.",
      "Oversee TOP commissioning and municipal authority building handover."
    ],
    requirements: [
      "Degree in Project Management, Civil Engineering, or Building Science.",
      "Proven track record delivering commercial towers or industrial plants above S$80M tender value.",
      "Strong leadership and subcontractor master management capabilities."
    ]
  },
  {
    id: "wsh-safety-auditor-officer",
    title: "WSH Safety Auditor & Officer",
    department: "WSH & Safety Governance",
    category: "WSH & Safety",
    location: "Tuas & Jurong Sites",
    type: "Full-Time",
    experience: "5 – 8 Years",
    salary: "S$6,800 – S$9,200 / month",
    summary:
      "Maintain our 4.2M+ safe work hours record by conducting daily digital WSH audits, lifting gear inspections, and subcontractor safety compliance.",
    responsibilities: [
      "Conduct daily site WSH safety inspections and digital toolbox briefing audits.",
      "Inspect tower crane anti-collision AI telemetry and heavy lifting gear.",
      "Lead MOM WSH Incident Prevention & BizSAFE Star renewal documentation.",
      "Manage site environmental controls for noise, dust, and vector management."
    ],
    requirements: [
      "MOM Registered Workplace Safety and Health Officer (WSHO).",
      "Registered ECO (Environmental Control Officer) certification is highly advantageous.",
      "Minimum 5 years of heavy civil or high-rise construction safety auditing."
    ]
  },
  {
    id: "superflat-concrete-specialist",
    title: "Superflat Concrete Slab Specialist",
    department: "Industrial Operations",
    category: "Engineering",
    location: "Jurong Logistics Hub Site",
    type: "Full-Time",
    experience: "5+ Years",
    salary: "S$6,500 – S$8,800 / month",
    summary:
      "Supervise automated Somero laser-screed concrete pours achieving TR34 FM2 floor flatness tolerances for automated AGV warehouse hubs.",
    responsibilities: [
      "Manage subgrade compaction testing and vapor barrier placement.",
      "Coordinate automated 3D Somero laser screed leveling and high-speed pour operations.",
      "Supervise power trowel burnishing and wet burlap curing protocols.",
      "Conduct Dipstick floor flatness (FF/FL) verification testing."
    ],
    requirements: [
      "Diploma or Degree in Civil Engineering or Construction Supervision.",
      "Demonstrated experience in laser-screed flat floor slab finishing.",
      "Familiarity with TR34 and ACI 117 floor flatness standard testing."
    ]
  },
  {
    id: "quantity-surveyor-contracts",
    title: "Quantity Surveyor & Contracts Manager",
    department: "Commercial & Procurement",
    category: "Project Management",
    location: "Singapore HQ",
    type: "Full-Time",
    experience: "4 – 8 Years",
    salary: "S$7,000 – S$9,800 / month",
    summary:
      "Manage tender measurement, variation orders, progress claims, and subcontractor contract negotiations for commercial developments.",
    responsibilities: [
      "Prepare detailed bill of quantities (BQ) and cost estimates from 5D BIM models.",
      "Evaluate subcontractor progress claims and variation order (VO) claims.",
      "Negotiate master procurement contracts with steel and concrete material vendors.",
      "Prepare monthly project commercial valuation reports for senior executive board."
    ],
    requirements: [
      "Degree in Quantity Surveying, Building, or Construction Commercial Management.",
      "SISV membership or equivalent professional QS accreditation.",
      "Minimum 4 years of experience in main contractor quantity surveying."
    ]
  }
];

/* ── CULTURE & PERKS BENTO ── */
const CULTURE_PERKS = [
  {
    icon: Cpu,
    title: "5D BIM & AR Field Tech Stack",
    description:
      "Work with cutting-edge 3D laser scanners, Navisworks 5D BIM models, and Augmented Reality (AR) tablets bridging CAD design directly to site rebar mesh."
  },
  {
    icon: GraduationCap,
    title: "PE Licensing & 100% Sponsorship",
    description:
      "We fully sponsor Professional Engineer (PE) exam prep, BCA specialist certifications, and offer direct mentorship under our senior chartered P.Eng directors."
  },
  {
    icon: ShieldCheck,
    title: "4.2M+ Safe Work Hours Culture",
    description:
      "Safety is not negotiable. Every engineer holds absolute Stop-Work Authority, backed by AI crane telemetry and BizSAFE Star site governance."
  },
  {
    icon: Award,
    title: "Competitive Bonuses & Equity Path",
    description:
      "Enjoy transparent career progression, lucrative project completion bonus pools, comprehensive health & dental coverage, and wellness benefits."
  }
];

export default function CareersPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All Roles");
  const [activeJobModal, setActiveJobModal] = useState<typeof OPEN_POSITIONS[0] | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantExp, setApplicantExp] = useState("5-8 Years");
  const [applicantNotes, setApplicantNotes] = useState("");
  const [fileName, setFileName] = useState("");

  useGSAP(() => {
    gsap.fromTo(
      ".career-reveal",
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  const categories = ["All Roles", "Engineering", "BIM & Digital Twin", "Project Management", "WSH & Safety"];

  const filteredJobs = OPEN_POSITIONS.filter((job) =>
    selectedCategory === "All Roles" ? true : job.category === selectedCategory
  );

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <SmoothScroll>
      <div ref={containerRef} className="min-h-screen bg-[#f8f7f4] text-[#121316] flex flex-col font-display selection:bg-[#121316] selection:text-white p-2">

        {/* ════════════════════════════════════════════════════════
            1. HERO SECTION: Full Viewport Dark Shell (Design System Match)
        ════════════════════════════════════════════════════════ */}
        <header className="relative w-full min-h-0 lg:min-h-[calc(100vh-1rem)] bg-[#121316] text-white rounded-2xl sm:rounded-[36px] border border-white/10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 group">
          <Navbar />

          {/* Top Column on Mobile / Right Column on Desktop: Hero Image Frame */}
          <div className="career-reveal lg:col-span-6 order-1 lg:order-2 relative w-full h-64 sm:h-80 lg:h-full min-h-64 lg:min-h-full overflow-hidden">
            <Image
              src="/experience-engineers.jpg"
              alt="BluxRise Construction Engineers and Team"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#121316] via-transparent to-transparent lg:hidden" />
          </div>

          {/* Bottom Column on Mobile / Left Column on Desktop: Tag, Title, Subtitle & 2x2 Stat Cards */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center px-4 sm:px-10 lg:px-14 pt-6 sm:pt-10 lg:pt-32 pb-8 sm:pb-12 relative z-20 space-y-4 sm:space-y-6">
            {/* Pill Badge Tag */}
            <div className="career-reveal inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-[11px] sm:text-xs font-semibold w-fit">
              <span className="w-2 h-2 rounded-full bg-[#0052ff] animate-pulse" />
              Careers At Bluxrise • Join Our Team
            </div>

            {/* Main Headline */}
            <h1 className="career-reveal text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight sm:leading-[1.05]">
              Build Singapore&apos;s Next Generation of <span className="text-[#0052ff]">Landmarks</span>.
            </h1>

            {/* Subtitle Paragraph */}
            <p className="career-reveal text-xs sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-light max-w-2xl">
              Join a team of chartered structural engineers, 5D BIM virtual modelers, and master project managers shaping commercial high-rises and industrial hubs across Singapore.
            </p>

            {/* Quick KPI Bento Bar inside Hero Left Content */}
            <div className="career-reveal pt-2 sm:pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              {[
                { value: "Grade A1", label: "BCA License", sub: "Unlimited Tender" },
                { value: "100%", label: "5D BIM", sub: "Pre-Construction" },
                { value: "4.2M+", label: "Safe Hours", sub: "Zero Incidents" },
                { value: "100%", label: "PE Support", sub: "Exam Sponsorship" }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#18191e] border border-white/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl space-y-0.5 sm:space-y-1 shadow-md hover:border-[#0052ff]/50 transition-all group"
                >
                  <div className="text-base sm:text-xl lg:text-2xl font-bold text-[#0052ff] tracking-tight transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-white">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-white/50 leading-tight">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </header>

        {/* ════════════════════════════════════════════════════════
            2. WHY BUILD YOUR CAREERS AT BLUXRISE (4 Bento Cards)
        ════════════════════════════════════════════════════════ */}
        <main className="grow">
          <section className="py-12 sm:py-20 lg:py-28 px-4 sm:px-8 md:px-12 bg-[#f8f7f4]">
            <div className="max-w-350 mx-auto space-y-8 sm:space-y-12">
              
              <div className="space-y-2 sm:space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121316]/5 border border-[#121316]/10 text-xs font-semibold text-[#0052ff]">
                  <Sparkles className="w-3.5 h-3.5" />
                  Engineering Culture &amp; Benefits
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight leading-tight">
                  Why Engineers &amp; Builders Choose BluxRise
                </h2>
                <p className="text-xs sm:text-base text-[#5c606b] font-light leading-relaxed">
                  We invest in our people as heavily as we invest in virtual pre-construction technology and heavy machinery fleets.
                </p>
              </div>

              {/* 4 Bento Feature Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {CULTURE_PERKS.map((perk, idx) => {
                  const Icon = perk.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white p-5 sm:p-7 rounded-2xl sm:rounded-[28px] border border-[#121316]/10 shadow-sm hover:shadow-xl hover:border-[#0052ff]/30 transition-all duration-300 flex flex-col justify-between group space-y-4 sm:space-y-6"
                    >
                      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-[#0052ff]/10 text-[#0052ff] flex items-center justify-center group-hover:bg-[#0052ff] group-hover:text-white transition-all">
                        <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
                      </div>

                      <div className="space-y-1.5 sm:space-y-2">
                        <h3 className="text-lg sm:text-xl font-bold text-[#121316] tracking-tight leading-snug">
                          {perk.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#5c606b] leading-relaxed font-light">
                          {perk.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

          {/* ════════════════════════════════════════════════════════
              3. OPEN POSITIONS & HIRING BOARD
          ════════════════════════════════════════════════════════ */}
          <section id="open-positions" className="py-12 sm:py-20 lg:py-28 px-4 sm:px-8 md:px-12 bg-white border-y border-[#121316]/10">
            <div className="max-w-350 mx-auto space-y-8 sm:space-y-12">

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-[#121316]/10">
                <div className="space-y-2 sm:space-y-3 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121316] text-white text-xs font-semibold">
                    <Briefcase className="w-3.5 h-3.5 text-[#0052ff]" />
                    {OPEN_POSITIONS.length} Current Openings
                  </div>
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight leading-tight">
                    Explore Open Opportunities
                  </h2>
                </div>

                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {categories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                        selectedCategory === cat
                          ? "bg-[#0052ff] text-white shadow-md"
                          : "bg-[#f8f7f4] text-[#5c606b] border border-[#121316]/10 hover:bg-[#121316] hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Job Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-[#ffffff] p-5 sm:p-7 rounded-2xl sm:rounded-[28px] border border-[#121316]/10 shadow-sm hover:shadow-xl hover:border-[#0052ff]/40 transition-all duration-300 flex flex-col justify-between group space-y-4 sm:space-y-6"
                  >
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-white text-[#0052ff] text-[10px] font-bold border border-[#121316]/10 uppercase tracking-wider">
                          {job.department}
                        </span>
                        <span className="text-[11px] sm:text-xs font-semibold text-[#5c606b]">
                          {job.type}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-[#121316] group-hover:text-[#0052ff] transition-colors leading-snug">
                        {job.title}
                      </h3>

                      <p className="text-xs text-[#5c606b] leading-relaxed font-light">
                        {job.summary}
                      </p>

                      <div className="pt-2 space-y-1.5 sm:space-y-2 text-xs text-[#121316] font-medium">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-[#0052ff] shrink-0" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-[#0052ff] shrink-0" />
                          <span>{job.experience} experience required</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-3.5 h-3.5 text-[#0052ff] shrink-0" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 sm:pt-4 border-t border-[#121316]/10">
                      <button
                        onClick={() => {
                          setActiveJobModal(job);
                          setIsSubmitted(false);
                        }}
                        className="w-full inline-flex items-center justify-between px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-[#121316] text-white font-bold text-xs hover:bg-[#0052ff] transition-colors shadow-md cursor-pointer group/btn"
                      >
                        <span>View Details &amp; Apply</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* ════════════════════════════════════════════════════════
              4. EMPLOYEE VOICE & TESTIMONIAL STRIP
          ════════════════════════════════════════════════════════ */}
          <section className="py-12 sm:py-20 lg:py-28 px-4 sm:px-8 md:px-12 bg-[#f8f7f4] text-white">
            <div className="max-w-350 mx-auto space-y-8 sm:space-y-12">
              <div className="space-y-1.5 sm:space-y-2 max-w-xl">
                <span className="text-xs font-bold text-[#0052ff]">
                  Voices from the Field
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight leading-tight">
                  What Our Engineers Say
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                <div className="bg-[#18191e] p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[28px] border border-white/10 space-y-4 sm:space-y-6 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm lg:text-base text-neutral-300 leading-relaxed font-light italic">
                    &quot;BluxRise is the first main contractor where virtual 5D BIM isn&apos;t just a marketing slide we literally eliminate every structural clash on screen before a single rebar cage is placed on site. The engineering autonomy and PE sponsorship here are unparalleled.&quot;
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10">
                    <Image
                      src="/team/elena-rostova.png"
                      alt="Dr. Elena Rostova"
                      width={48}
                      height={48}
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover border-2 border-[#0052ff]"
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">Dr. Elena Rostova</div>
                      <div className="text-[11px] sm:text-xs text-white/60">VP of Structural Engineering</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#18191e] p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[28px] border border-white/10 space-y-4 sm:space-y-6 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm lg:text-base text-neutral-300 leading-relaxed font-light italic">
                    &quot;Maintaining 4.2M+ safe work hours across heavy high-rise lifts requires absolute backing from leadership. At BluxRise, every site worker has full Stop-Work Authority. You go home safe every single night.&quot;
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10">
                    <Image
                      src="/team/marcus-tan.png"
                      alt="Marcus Tan"
                      width={48}
                      height={48}
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover border-2 border-[#0052ff]"
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">Marcus Tan</div>
                      <div className="text-[11px] sm:text-xs text-white/60">COO &amp; Chief Safety Officer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* ════════════════════════════════════════════════════════
            5. INTERACTIVE APPLICATION MODAL / DRAWER
        ════════════════════════════════════════════════════════ */}
        {activeJobModal && (
          <div
            data-lenis-prevent
            onClick={() => setActiveJobModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto cursor-pointer"
          >
            <div
              data-lenis-prevent
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white text-[#121316] rounded-2xl sm:rounded-4xl shadow-2xl overflow-hidden border border-[#121316]/10 max-h-[60vh] my-auto flex flex-col cursor-default"
            >
              
              {/* Modal Header (Fixed Pin) */}
              <div className="p-4 sm:p-6 lg:p-8 bg-[#121316] text-white flex items-start justify-between gap-3 sm:gap-4 shrink-0 border-b border-white/10">
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#0052ff] text-white text-[10px] font-bold uppercase tracking-wider">
                    {activeJobModal.department}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight pt-1">
                    {activeJobModal.title}
                  </h3>
                  <div className="text-[11px] sm:text-xs text-neutral-300 flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
                    <span>{activeJobModal.location}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-[#0052ff] font-bold">{activeJobModal.salary}</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveJobModal(null)}
                  className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-white/10 text-white hover:bg-white hover:text-[#121316] flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                  title="Close Window"
                >
                  <X className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
              </div>

              {/* Modal Body (Scrollable Container with Lenis Prevent) */}
              <div
                data-lenis-prevent
                className="p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-5 sm:space-y-6 grow overscroll-contain"
              >
                {!isSubmitted ? (
                  <>
                    {/* Responsibilities */}
                    <div className="space-y-2.5 sm:space-y-3">
                      <h4 className="text-[11px] sm:text-xs font-bold text-[#121316] uppercase tracking-wider">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {activeJobModal.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#5c606b]">
                            <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#0052ff] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements */}
                    <div className="space-y-2.5 sm:space-y-3">
                      <h4 className="text-[11px] sm:text-xs font-bold text-[#121316] uppercase tracking-wider">
                        Candidate Requirements:
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {activeJobModal.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#5c606b]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#121316] shrink-0 mt-1.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Application Form */}
                    <form onSubmit={handleSubmitApplication} className="pt-4 border-t border-[#121316]/10 space-y-3.5 sm:space-y-4">
                      <h4 className="text-xs sm:text-sm font-bold text-[#121316]">
                        Submit Your Application
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-1">
                          <label className="text-[11px] sm:text-xs font-semibold text-[#5c606b]">Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="Eng. David Tan"
                            value={applicantName}
                            onChange={(e) => setApplicantName(e.target.value)}
                            className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#f8f7f4] border border-[#121316]/15 text-xs text-[#121316] focus:outline-none focus:border-[#0052ff]"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] sm:text-xs font-semibold text-[#5c606b]">Email Address *</label>
                          <input
                            type="email"
                            required
                            placeholder="david.tan@example.com"
                            value={applicantEmail}
                            onChange={(e) => setApplicantEmail(e.target.value)}
                            className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#f8f7f4] border border-[#121316]/15 text-xs text-[#121316] focus:outline-none focus:border-[#0052ff]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-1">
                          <label className="text-[11px] sm:text-xs font-semibold text-[#5c606b]">Phone Number *</label>
                          <input
                            type="tel"
                            required
                            placeholder="+65 9123 4567"
                            value={applicantPhone}
                            onChange={(e) => setApplicantPhone(e.target.value)}
                            className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#f8f7f4] border border-[#121316]/15 text-xs text-[#121316] focus:outline-none focus:border-[#0052ff]"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] sm:text-xs font-semibold text-[#5c606b]">Years of Experience</label>
                          <select
                            value={applicantExp}
                            onChange={(e) => setApplicantExp(e.target.value)}
                            className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#f8f7f4] border border-[#121316]/15 text-xs text-[#121316] focus:outline-none focus:border-[#0052ff]"
                          >
                            <option value="1-3 Years">1 – 3 Years</option>
                            <option value="4-7 Years">4 – 7 Years</option>
                            <option value="8-12 Years">8 – 12 Years</option>
                            <option value="12+ Years">12+ Years (Senior)</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] sm:text-xs font-semibold text-[#5c606b]">Resume / CV Upload (PDF, DOCX)</label>
                        <div className="relative border-2 border-dashed border-[#121316]/15 rounded-xl p-2.5 sm:p-3 bg-[#f8f7f4] hover:border-[#0052ff] transition-colors flex items-center justify-between text-xs text-[#5c606b]">
                          <div className="flex items-center gap-2 truncate">
                            <Upload className="w-4 h-4 text-[#0052ff] shrink-0" />
                            <span className="truncate">{fileName || "Click or drag your CV file here"}</span>
                          </div>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                setFileName(e.target.files[0].name);
                              }
                            }}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                          />
                          <span className="px-2.5 py-1 rounded-lg bg-[#121316]/5 text-[10px] font-bold text-[#121316] shrink-0">
                            Browse
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] sm:text-xs font-semibold text-[#5c606b]">Cover Note / Experience Summary</label>
                        <textarea
                          rows={3}
                          placeholder="Briefly describe your structural engineering background or 5D BIM project experience..."
                          value={applicantNotes}
                          onChange={(e) => setApplicantNotes(e.target.value)}
                          className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#f8f7f4] border border-[#121316]/15 text-xs text-[#121316] focus:outline-none focus:border-[#0052ff] resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-[#0052ff] text-white font-bold text-xs sm:text-sm hover:bg-[#0040d9] transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Application</span>
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8 sm:py-12 space-y-4">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 sm:w-8 h-6 sm:h-8" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-[#121316]">
                      Application Received!
                    </h4>
                    <p className="text-xs text-[#5c606b] max-w-md mx-auto leading-relaxed">
                      Thank you for applying for <span className="font-bold text-[#121316]">{activeJobModal.title}</span>. Our HR and Structural Engineering Directors will review your application and contact you within 3 business days.
                    </p>
                    <button
                      onClick={() => setActiveJobModal(null)}
                      className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#121316] text-white text-xs font-bold"
                    >
                      Close Window
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        <Footer />
      </div>
    </SmoothScroll>
  );
}
