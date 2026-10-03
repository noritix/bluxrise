export interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  summary: string;
  featured?: boolean;
  content: {
    intro: string;
    keyTakeaways: string[];
    sections: {
      heading: string;
      body: string;
      quote?: string;
      checklist?: string[];
    }[];
    conclusion: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "2030-master-contractor-manifesto",
    title: "The 2030 Master Contractor Manifesto: Robotics, Low-Carbon Concrete & Ultra-Fast Delivery",
    category: "Executive Editorial",
    featured: true,
    author: {
      name: "Robert Vance",
      role: "Managing Director & Founder, PE",
      avatar: "/team/robert-vance.png"
    },
    date: "September 8, 2026",
    readTime: "9 min read",
    image: "/our-origin.jpg",
    summary: "A strategic manifesto on the future of Singapore commercial construction—combining autonomous robotic laydown, GGBS low-carbon cement replacement, and 5D BIM pre-construction to compress project delivery cycles by 35%.",
    content: {
      intro: "The commercial high-rise landscape of Singapore is undergoing a fundamental transformation. As urban land density increases and statutory sustainability targets tighten under the BCA Green Mark Super Low Energy framework, master contractors can no longer rely on conventional site methods.\n\nTo build commercial towers and industrial hubs that endure for generations, BluxRise has developed a 3-pillar engineering roadmap for the decade ahead: AI-driven virtual pre-construction, ultra-low carbon material science, and autonomous site execution.",
      keyTakeaways: [
        "Reducing embodied carbon by up to 45% using 60% GGBS and slag-blend geopolymer concrete.",
        "Deploying robotic layout stations to mark CAD floor points with sub-millimeter laser accuracy.",
        "Compressing structural topping-out schedules by 35% through DfMA (Design for Manufacturing and Assembly).",
        "Targeting 100% Green Mark Platinum Super Low Energy rating on all future commercial tenders."
      ],
      sections: [
        {
          heading: "1. DfMA & Prefabricated Pre-Finished Volumetric Construction (PPVC)",
          body: "Moving heavy structural assembly off-site into controlled factory environments eliminates site weather delays and raises fabrication quality. By pre-casting integrated MEP module walls and structural steel trusses in off-site yards, our site erection crews function as precision assemblers, reducing total site labor hours while maintaining pinpoint quality tolerances.",
          quote: "The cleanest, safest, and fastest job site is one where complex sub-assemblies arrive pre-tested and ready for immediate structural pinning."
        },
        {
          heading: "2. Next-Generation Low-Carbon Concrete Chemistry",
          body: "Cement production traditionally accounts for a major portion of structural carbon footprint. We have engineered high-performance C60 concrete mixes replacing ordinary Portland cement with 60% ground granulated blast-furnace slag (GGBS) and silica fume additives. This mix not only cuts carbon intensity nearly in half, but also delivers superior sulfate resistance and lower heat of hydration during mass raft slab pours.",
          checklist: [
            "ISO 14064 third-party carbon footprint audit verification for all concrete batches.",
            "Recycled concrete aggregate (RCA) utilization up to 25% for sub-base structural fills.",
            "Curing water recycling loops eliminating municipal water wastage during site operations."
          ]
        },
        {
          heading: "3. Autonomous Site Layout & AI Field Telemetry",
          body: "Manual chalk-line layout is replaced by robotic total stations linked live to 5D BIM models. Field engineers push CAD files directly to autonomous layout rovers that spray millimeter-precise wall tracks, core penetrations, and MEP hanger points onto floor slabs overnight."
        }
      ],
      conclusion: "The future of master contracting belongs to firms that master the intersection of digital pre-construction, sustainable materials, and rigorous site governance. At BluxRise, we are actively building that future across Singapore today."
    }
  },
  {
    id: "5d-bim-preconstruction-rework",
    title: "How 100% 5D BIM Modeling Saved $2.4M in Site Rework Before Groundbreaking",
    category: "Virtual Pre-Construction",
    featured: false,
    author: {
      name: "Dr. Elena Rostova",
      role: "VP of Structural Engineering",
      avatar: "/team/elena-rostova.png"
    },
    date: "September 4, 2026",
    readTime: "6 min read",
    image: "/services/design-build.jpg",
    summary: "An inside look at how our BIM engineering team virtually detected and resolved 142 structural and MEP clashes on Marina Tower 6 weeks before excavation began.",
    content: {
      intro: "On traditional multi-story commercial tenders, structural clashes between main load-bearing beams and heavy mechanical, electrical, and plumbing (MEP) runs are often discovered when steel headers are already installed. On a $140M commercial high-rise, a single clash caught on-site can lead to thousands of dollars in lost labor, emergency engineering redesigns, and compounding schedule delays.\n\nAt BluxRise, we mandated a 100% virtual pre-construction mandate across all Grade A1 tenders. Here is the exact engineering framework we used on Marina Tower to clash-detect the entire structure in 5D BIM prior to groundbreaking.",
      keyTakeaways: [
        "Identified and eliminated 142 high-severity MEP and structural steel clashes virtually.",
        "Saved an estimated $2.4M in potential field modification and re-work costs.",
        "Reduced site structural RFIs (Requests for Information) by 84% during superstructure erection.",
        "Compressed the total pre-construction timeline by 4 weeks using digital twin simulations."
      ],
      sections: [
        {
          heading: "1. The 3D Digital Twin & Federated Model Integration",
          body: "We began by constructing a millimeter-accurate federated BIM model combining structural steel, reinforced concrete cores, curtain wall mullions, and HVAC ducting. By integrating architectural intent with subcontractor fabrication models in Navisworks Manage, we ran automated hard-clash and clearance routines across all 45 floor plates.",
          quote: "If a 600mm chilled water line collides with a structural transfer girder on screen, fixing it takes 15 minutes of CAD coordination. Fixing it on Level 28 on site takes 3 weeks of crane downtime and $180,000 in retrofits."
        },
        {
          heading: "2. 4D Schedule & 5D Cost Coupling",
          body: "BIM is more than 3D geometry—it is time and capital. By attaching our Primavera P6 master construction schedule directly to model elements (4D BIM), site superintendents simulated the exact pouring sequence of basement slab pour zones. Simultaneously, material takeoff quantities were linked live to ERP cost databases (5D BIM), giving our client real-time budget forecasting as design modifications occurred.",
          checklist: [
            "LOD 400 fabrication-ready detailing for all structural steel connections.",
            "Automated bar bending schedule (BBS) extraction directly to steel rebar fabricators.",
            "Live clash detection matrix shared with MEP sub-consultants during weekly coordination sprints."
          ]
        },
        {
          heading: "3. Field Deployment via Augmented Reality (AR) Tablets",
          body: "The final step in bridging office engineering to field execution was equipping site engineers and foremen with ruggedized AR tablets. During slab pre-pour inspections, engineers overlay the federated BIM model directly onto the live rebar mesh to verify box-outs and sleeve penetrations with sub-centimeter accuracy before concrete placement."
        }
      ],
      conclusion: "Virtual pre-construction is no longer a luxury feature; it is the cornerstone of risk mitigation for modern commercial development. By spending 6 weeks resolving digital clashes in BIM, BluxRise delivered Marina Tower 3 months ahead of contract schedule with zero structural re-work."
    }
  },
  {
    id: "marina-tower-deep-foundations",
    title: "Engineering Marina Commercial Tower: Overcoming Deep Marine Clay Soil Challenges",
    category: "Project Case Study",
    author: {
      name: "Robert Vance",
      role: "Managing Director & Founder, PE",
      avatar: "/team/robert-vance.png"
    },
    date: "August 18, 2026",
    readTime: "8 min read",
    image: "/projects/marina-tower.jpg",
    summary: "A deep dive into the piling strategy, continuous bored piles, and diaphragm wall installation for a 45-story commercial tower built on Singapore coastal reclaimed soil.",
    content: {
      intro: "Constructing a 45-story commercial headquarters along Singapore's coastal waterfront presents one of the most demanding geotechnical environments in structural engineering. The upper stratum consists of soft marine clay with low shear strength, underlain by variable Kallang Formation soils before reaching competent sandstone bedrocks at depths exceeding 55 meters.\n\nHere is how our geotechnical team designed a foundation system capable of supporting over 120,000 metric tons of dead and live load with zero differential settlement.",
      keyTakeaways: [
        "Installed 1,200mm diameter bored friction and end-bearing piles socketed 6m into bedrock.",
        "Constructed a 1.2m thick perimeter diaphragm wall to stabilize deep basement excavation.",
        "Utilized real-time Wireless MEMS Inclinometers to track soil movement down to 0.1mm tolerances.",
        "Executed continuous 48-hour raft slab concrete pours totaling 6,500 cubic meters."
      ],
      sections: [
        {
          heading: "1. Diaphragm Wall & Top-Down Excavation Strategy",
          body: "To prevent lateral soil movement toward adjacent MRT subterranean rail tunnels, we selected a stiff 1.2m diaphragm wall system installed using heavy hydrofraise cutters. Trench stability during excavation was maintained using polymer slurry slurries with strict density and viscosity monitoring.",
          quote: "Working within 15 meters of operational subway infrastructure requires absolute precision. Our real-time sensor network gave statutory authorities 24/7 visibility into ground stability."
        },
        {
          heading: "2. Bidirectional Static Load Testing (Osterberg Cell)",
          body: "Rather than relying on theoretical soil skin friction formulas, we conducted full-scale Osterberg Cell (O-cell) load testing on sacrificial test piles. By installing hydraulic jack cells deep within the pile shaft, we applied test forces up to 35,000 kN, proving ultimate skin friction capacity exceeded design loads by 220%.",
          checklist: [
            "Cross-hole sonic logging (CSL) conducted on 100% of foundation bored piles.",
            "Polymer slurry filtration plant deployed on-site to recycle excavation fluids.",
            "Automated total stations monitoring adjacent structure displacement 24 hours a day."
          ]
        },
        {
          heading: "3. Thermal Control for Mass Concrete Basement Raft",
          body: "The 3.5-meter thick foundation raft slab required pouring 6,500m³ of C60 high-strength concrete in a single continuous operation. To prevent thermal cracking caused by heat of hydration, we incorporated ice-chilled mixing water, 60% ground granulated blast-furnace slag (GGBS) cement replacement, and embedded thermocouple data loggers."
        }
      ],
      conclusion: "Deep foundation engineering is where structural integrity begins. Through rigorous geotechnical modeling, extensive load testing, and precise field execution, the Marina Commercial Tower foundation stands as a benchmark for coastal high-rise development."
    }
  },
  {
    id: "fm2-laser-screed-industrial-slabs",
    title: "The Science of FM2 Laser-Screed Slabs for High-Bay Automated Logistics",
    category: "Industrial Engineering",
    author: {
      name: "Marcus Tan",
      role: "COO & Chief Safety Officer",
      avatar: "/team/marcus-tan.png"
    },
    date: "July 29, 2026",
    readTime: "5 min read",
    image: "/projects/jurong-hub.jpg",
    summary: "Why floor flatness (FF) and levelness (FL) tolerances dictate AGV robotics efficiency in modern logistics hubs, and how we achieve FM2 floor tolerances.",
    content: {
      intro: "In modern automated distribution centers, Autonomous Guided Vehicles (AGVs) and high-reach turret trucks operate down narrow aisles with mast heights reaching 16 meters. At these extreme heights, even a 2mm micro-bump in the floor slab translates into a dangerous 50mm sway at the top of the mast.\n\nAchieving TR34 FM2 Special floor tolerances is not just about aesthetics—it is an absolute operational requirement for logistics tenants. Here is how BluxRise engineered ultra-flat industrial floors at Jurong Logistics Hub.",
      keyTakeaways: [
        "Achieved TR34 FM2 Special flat floor compliance across 40,000 sq.m of warehouse slab.",
        "Deployed 3D automated Somero laser-screeds with real-time laser elevation control.",
        "Used high-dosage macro-synthetic fiber reinforcement to eliminate saw-cut shrinkage joints.",
        "Verified floor flatness using digital F-Meter profile testing within 24 hours of finishing."
      ],
      sections: [
        {
          heading: "1. Subgrade Preparation & Vapor Barrier Integrity",
          body: "Uncompromising slab flatness begins below the concrete. We achieved a subgrade CBR (California Bearing Ratio) value greater than 15% using crushed granite sub-base material compacted with 12-ton dual-drum vibratory rollers. A heavy-duty 250-micron polyolefin vapor barrier was installed with sealed overlap seams to prevent moisture migration.",
          quote: "If your sub-base drops by 5mm under compaction, no amount of power troweling will save the finished floor tolerance."
        },
        {
          heading: "2. Laser-Screed Pouring & Automated Level Control",
          body: "Concrete placement was executed using 3D automated Somero laser screeds receiving continuous infrared level signals from dual optical transmitters set outside pour zones. The screed head struck off and consolidated low-slump 40 MPa concrete at a rate of 400 square meters per hour.",
          checklist: [
            "Dry-shake mineral aggregate hardener applied at 5.0 kg/m² for extreme abrasion resistance.",
            "Ride-on double trowels equipped with combination blades for high-gloss dense burnishing.",
            "Wet burlap curing blankets kept saturated for 7 continuous days post-finish."
          ]
        },
        {
          heading: "3. Dipstick Profile & Flatness Verification",
          body: "Following final trowel burnishing, independent floor testing specialists surveyed every aisle line using a calibrated Face Dipstick Profiler. Test reports confirmed floor flatness (FF) numbers exceeded 65 and floor levelness (FL) numbers exceeded 50, well within FM2 Special specifications."
        }
      ],
      conclusion: "Superflat laser-screed concrete construction requires a meticulous combination of sub-grade preparation, concrete mix design, advanced laser machinery, and expert trowel burnishing. Jurong Logistics Hub continues to operate at 100% AGV uptime."
    }
  },
  {
    id: "wsh-zero-incident-governance",
    title: "Building a Zero-Incident Culture: 4.2 Million Safe Work Hours Unpacked",
    category: "Site Governance",
    author: {
      name: "Marcus Tan",
      role: "COO & Chief Safety Officer",
      avatar: "/team/marcus-tan.png"
    },
    date: "July 12, 2026",
    readTime: "7 min read",
    image: "/services/project-management.jpg",
    summary: "How daily digital safety briefings, AI crane collision avoidance, and strict subcontractor auditing created a zero lost-time injury record across 12 active sites.",
    content: {
      intro: "In heavy commercial and industrial construction, safety is not a poster on the canteen wall—it is an operational system embedded into every single work method statement. Achieving over 4.2 million safe work hours with zero lost-time injuries (LTI) across active tower crane lifts and deep excavation pits demands proactive governance at every level.\n\nHere is how BluxRise implemented our BizSAFE Star WSH governance framework across all Singapore worksites.",
      keyTakeaways: [
        "Maintained 4.2M+ consecutive safe work hours without a single lost-time incident.",
        "Implemented mandatory 15-minute digital daily WSH tool-box briefings for all site workers.",
        "Deployed AI-powered optical camera sensors on tower cranes for automated blind-spot zone warnings.",
        "Audited 100% of lifting gear, slings, and mobile elevated work platforms (MEWPs) bi-weekly."
      ],
      sections: [
        {
          heading: "1. Digital Toolbox Talks & Pre-Task Risk Reviews",
          body: "Every morning before work commences, foremen lead interactive 15-minute hazard identification briefings using mobile site apps. Work teams review specific high-risk tasks scheduled for that shift—such as edge formwork installation or heavy tandem crane lifts—confirming all control measures are in place.",
          quote: "Safety is not about stopping work; it is about engineering the hazard out of the process so work flows smoothly and securely."
        },
        {
          heading: "2. Smart PPE & Tower Crane Anti-Collision AI",
          body: "Our heavy tower cranes are retrofitted with zonal anti-collision AI sensors that dynamically map crane boom radii across overlapping lift sectors. If a hook load approaches a designated boundary or adjacent building envelope, the system automatically slows crane slewing speeds.",
          checklist: [
            "Full-body safety harnesses fitted with dual lanyard tie-off sensors.",
            "Site perimeter noise and dust monitoring stations connected to NEA cloud servers.",
            "Subcontractor safety merit points tied to monthly progress payment sign-offs."
          ]
        },
        {
          heading: "3. Independent Safety Auditing & Stop-Work Authority",
          body: "Every worker on a BluxRise site holds uncompromised Stop-Work Authority. If any engineer, subcontractor, or site operative observes an unsafe condition—such as an un-decked scaffold span or missing barricade—they have the absolute authority to stop work immediately without penalty."
        }
      ],
      conclusion: "A zero-incident safety record is achieved when rigorous statutory compliance merges with a genuine culture of respect for site workers. Our 4.2M safe work hours prove that high-speed commercial construction and absolute safety go hand in hand."
    }
  }
];
