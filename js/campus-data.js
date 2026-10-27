// Bindhu Institute of Technology (BIT) - Campus Knowledge Base & Data
const BIT_DATA = {
  campuses: {
    bengaluru: {
      id: "bengaluru",
      name: "Bengaluru Tech Park Campus",
      shortName: "Bengaluru",
      cityTag: "Silicon Valley Flagship",
      state: "Karnataka",
      tagline: "Electronic City Phase 1 • Artificial Intelligence & Quantum Computing Hub",
      badge: "AI & Innovation Flagship",
      established: "1998",
      landArea: "65 Acres Eco-Campus",
      metro: "5 mins to Electronic City Metro (Yellow Line)",
      weather: "24°C Breezy & Sunny",
      heroImage: "assets/campus-bengaluru.jpg",
      accentColor: "#6366F1",
      stats: {
        avgPackage: "14.8 LPA",
        highestPackage: "54.2 LPA",
        placementRate: "99.1%",
        activeClubs: "48 Clubs",
        startupsIncubated: "78 Startups",
        patentsFiled: "140+"
      },
      topSpecialties: [
        "Artificial Intelligence & Machine Learning",
        "Autonomous Robotics & Drones",
        "Cyber-Physical Systems & Cloud Security",
        "Quantum Computing & Algorithmic Software"
      ],
      topRecruiters: ["Google", "Amazon AWS", "Microsoft", "NVIDIA", "Uber", "Goldman Sachs"],
      dean: {
        name: "Dr. Ananya Murthy",
        title: "Campus Dean & Professor of Machine Learning",
        credentials: "Ph.D. Stanford University, Ex-Google Brain",
        quote: "At Bengaluru BIT, our students don't just study neural networks; they build and deploy production AI models powering real-world tech."
      },
      signatureLab: "Bindhu AI Supercomputing Cluster (NVIDIA DGX A100 Nodes)",
      address: "BIT Innovation Corridor, Hosur Road, Electronic City Phase 1, Bengaluru, Karnataka 560100",
      phone: "+91 80 2852 4000",
      email: "admissions.blr@bit.edu.in",
      virtualViews: [
        {
          title: "Central Glass Quad & Solar Lawn",
          category: "Campus Heart",
          image: "assets/campus-bengaluru.jpg",
          caption: "Lush outdoor co-working space featuring solar canopy charging stations and amphitheater seating."
        },
        {
          title: "NVIDIA Supercomputing & Deep Learning Studio",
          category: "Research Lab",
          image: "assets/campus-hyderabad.jpg",
          caption: "Tier-3 data center cluster with 24/7 dedicated compute for undergraduate and graduate researchers."
        },
        {
          title: "Autonomous Robotics & Drone Flight Cage",
          category: "Robotics Arena",
          image: "assets/campus-chennai.jpg",
          caption: "10-meter indoor cage equipped with high-speed motion capture cameras for autonomous rover trials."
        },
        {
          title: "Hillside Ideation & Maker Studio",
          category: "Innovation",
          image: "assets/campus-pune.jpg",
          caption: "Open 24/7 with industrial 3D printers, laser cutters, CNC mills, and beanbag breakout lounges."
        }
      ]
    },

    hyderabad: {
      id: "hyderabad",
      name: "Hyderabad Cyber Valley Campus",
      shortName: "Hyderabad",
      cityTag: "Financial District Hub",
      state: "Telangana",
      tagline: "Heart of Gachibowli • Cloud Architecture, Quantum & FinTech Frontier",
      badge: "Cloud & FinTech Frontier",
      established: "2006",
      landArea: "72 Acres Smart Campus",
      metro: "Raidurg Metro Interchange (Blue Line)",
      weather: "27°C Pleasant & Clear",
      heroImage: "assets/campus-hyderabad.jpg",
      accentColor: "#06B6D4",
      stats: {
        avgPackage: "13.6 LPA",
        highestPackage: "48.5 LPA",
        placementRate: "98.7%",
        activeClubs: "42 Clubs",
        startupsIncubated: "64 Startups",
        patentsFiled: "115+"
      },
      topSpecialties: [
        "Data Science & Predictive Analytics",
        "Quantum Computing Software",
        "FinTech & Algorithmic Trading Systems",
        "Bio-Informatics & HealthTech"
      ],
      topRecruiters: ["Microsoft", "Oracle", "ServiceNow", "Salesforce", "DE Shaw", "Qualcomm"],
      dean: {
        name: "Dr. Rajeshwar Rao",
        title: "Campus Director & Chair of Data Engineering",
        credentials: "Ph.D. IIT Bombay, PostDoc Max Planck Institute",
        quote: "Surrounded by tech giants in Hyderabad, our students experience intense industry immersion from their very first semester."
      },
      signatureLab: "T-Hub Partnered FinTech Sandbox & Quantum Algorithmic Lab",
      address: "Knowledge City, Financial District, Gachibowli, Hyderabad, Telangana 500032",
      phone: "+91 40 6712 5000",
      email: "admissions.hyd@bit.edu.in",
      virtualViews: [
        {
          title: "Cyber Valley Plaza & Academic Boulevard",
          category: "Architecture",
          image: "assets/campus-hyderabad.jpg",
          caption: "Sprawling landscaped cyber avenues where tech incubator founders meet student researchers."
        },
        {
          title: "Innovation Hub & Glass Atrium",
          category: "Startup Incubator",
          image: "assets/campus-bengaluru.jpg",
          caption: "Multi-level glass innovation center where 64 student-founded startups have raised seed funding."
        },
        {
          title: "FinTech Simulation & Trading Lab",
          category: "High-Finance",
          image: "assets/campus-chennai.jpg",
          caption: "Real-time market feeds for algorithmic trading and financial machine learning models."
        },
        {
          title: "Central Digital Library & Quiet Pods",
          category: "Study Center",
          image: "assets/campus-pune.jpg",
          caption: "Over 85,000 digital titles, IEEE Xplore access, and acoustic private study booths."
        }
      ]
    },

    chennai: {
      id: "chennai",
      name: "Chennai Coastal DeepTech Campus",
      shortName: "Chennai",
      cityTag: "OMR Tech Expressway",
      state: "Tamil Nadu",
      tagline: "Bay of Bengal Corridor • Automotive EV, Marine Robotics & Green Energy",
      badge: "Ocean & EV DeepTech",
      established: "2012",
      landArea: "85 Acres Oceanfront",
      metro: "OMR Expressway / Sholinganallur Hub",
      weather: "29°C Warm Sea Breeze",
      heroImage: "assets/campus-chennai.jpg",
      accentColor: "#10B981",
      stats: {
        avgPackage: "12.8 LPA",
        highestPackage: "46.0 LPA",
        placementRate: "98.2%",
        activeClubs: "39 Clubs",
        startupsIncubated: "51 Startups",
        patentsFiled: "98+"
      },
      topSpecialties: [
        "Electric Vehicles & Battery Architecture",
        "Marine Robotics & Ocean AI Systems",
        "Renewable Hydrogen & Solar Microgrids",
        "Aerospace Avionics & Satellite Comms"
      ],
      topRecruiters: ["Tesla", "Hyundai Motor Group", "Renault-Nissan", "Caterpillar", "Zoho", "L&T"],
      dean: {
        name: "Dr. Meenakshi Sundaram",
        title: "Campus Dean & Head of Sustainable Mobility",
        credentials: "Ph.D. Imperial College London, Fellow INAE",
        quote: "We combine maritime innovation with electric vehicle technology right along Chennai's renowned tech corridor."
      },
      signatureLab: "EV Dyno Powertrain Lab & Wave Hydrodynamics Simulation Basin",
      address: "IT Expressway OMR, Navalur, Chennai, Tamil Nadu 603103",
      phone: "+91 44 4749 3000",
      email: "admissions.chn@bit.edu.in",
      virtualViews: [
        {
          title: "Coastal Breezeway & Solar Shaded Colonnades",
          category: "Campus Life",
          image: "assets/campus-chennai.jpg",
          caption: "Biophilic architectural design capturing natural coastal sea breezes with zero-carbon footprint."
        },
        {
          title: "Electric Vehicle Powertrain Assembly Lab",
          category: "Automotive EV",
          image: "assets/campus-pune.jpg",
          caption: "Equipped with battery cyclers, thermal chambers, and full chassis dynamometer for student race cars."
        },
        {
          title: "Clean Energy & Hydrogen Fuel Cell Cell",
          category: "CleanTech",
          image: "assets/campus-hyderabad.jpg",
          caption: "Government funded green hydrogen and sustainable solar microgrid labs."
        },
        {
          title: "Olympic Aquatic & Floodlit Turf Arena",
          category: "Sports Complex",
          image: "assets/campus-bengaluru.jpg",
          caption: "50-meter Olympic pool, synthetic FIFA-certified turf, squash courts, and athletic training gym."
        }
      ]
    },

    pune: {
      id: "pune",
      name: "Pune Heritage & Innovation Hills Campus",
      shortName: "Pune",
      cityTag: "Hinjewadi Sahyadri Hills",
      state: "Maharashtra",
      tagline: "Oxford of the East • Mechatronics, Design Thinking & Formula Racing",
      badge: "Design & Mechatronics Hills",
      established: "2015",
      landArea: "68 Acres Hillside Vista",
      metro: "Hinjewadi IT Phase 3 Metro Station",
      weather: "22°C Misty & Pleasant",
      heroImage: "assets/campus-pune.jpg",
      accentColor: "#F59E0B",
      stats: {
        avgPackage: "13.2 LPA",
        highestPackage: "51.0 LPA",
        placementRate: "98.9%",
        activeClubs: "45 Clubs",
        startupsIncubated: "59 Startups",
        patentsFiled: "108+"
      },
      topSpecialties: [
        "Mechatronics & Industry 4.0",
        "Human-Centered UI/UX & Spatial XR",
        "Formula Student & Automotive Aerodynamics",
        "Industrial Design & Creative Engineering"
      ],
      topRecruiters: ["Tata Motors EV", "Airbus", "Adobe", "Bajaj Auto R&D", "PTC", "Siemens"],
      dean: {
        name: "Dr. Vikramaditya Joshi",
        title: "Campus Director & Professor of Mechatronics",
        credentials: "Ph.D. IIT Madras, M.S. TU Munich",
        quote: "Nestled in the lush hills of Hinjewadi, we blend engineering precision with artistic design thinking."
      },
      signatureLab: "Subsonic Wind Tunnel & Immersive Spatial XR Holodeck",
      address: "Hinjewadi Tech Park Phase 3, Taluka Mulshi, Pune, Maharashtra 411057",
      phone: "+91 20 6791 2000",
      email: "admissions.pune@bit.edu.in",
      virtualViews: [
        {
          title: "Hilltop Amphitheater & Sahyadri Overlook",
          category: "Campus Heart",
          image: "assets/campus-pune.jpg",
          caption: "Tiered hillside amphitheater hosting acoustic musical fests, poetry slams, and evening hackouts."
        },
        {
          title: "Spatial XR & Human-Centered Design Lab",
          category: "UI/UX & AR",
          image: "assets/campus-hyderabad.jpg",
          caption: "Equipped with Apple Vision Pro, Meta Quest, and eye-tracking suites for spatial UI testing."
        },
        {
          title: "Team 'Bindhu Velocity' Formula Racing Workshop",
          category: "Motorsport",
          image: "assets/campus-chennai.jpg",
          caption: "Where student engineers manufacture carbon fiber monocoques for national racing competitions."
        },
        {
          title: "Hillside Tea Pavilion & Reading Terraces",
          category: "Wellness",
          image: "assets/campus-bengaluru.jpg",
          caption: "Organic herbal tea garden and open-air wooden desks with mountain vistas for calm revision."
        }
      ]
    }
  },

  programs: [
    {
      code: "CSE-AI",
      title: "B.Tech in Computer Science & Artificial Intelligence",
      category: "Computer & AI",
      duration: "4 Years (8 Semesters)",
      seats: "180 per campus",
      tag: "Most Popular",
      badgeColor: "#6366F1",
      description: "Co-developed with Google Brain & NVIDIA. Deep learning, transformer architectures, LLM deployment, computer vision, and cloud microservices.",
      keyCourses: ["Neural Networks & Deep Learning", "Distributed Cloud Systems", "Generative AI Pipelines", "Ethics in Autonomous Tech"],
      avgPlacement: "15.4 LPA",
      highestOffer: "54.2 LPA"
    },
    {
      code: "RA-AUTO",
      title: "B.Tech in Robotics & Autonomous Systems",
      category: "Emerging Tech & Space",
      duration: "4 Years (8 Semesters)",
      seats: "120 per campus",
      tag: "High Demand",
      badgeColor: "#EC4899",
      description: "Hands-on engineering covering ROS2, SLAM navigation, drone avionics, humanoid bipedal kinematics, industrial robotic arms, and sensor fusion.",
      keyCourses: ["Robot Operating Systems (ROS2)", "Computer Vision for Rovers", "Kinematics & Dynamics", "Embedded Edge Computing"],
      avgPlacement: "14.2 LPA",
      highestOffer: "46.0 LPA"
    },
    {
      code: "DS-FIN",
      title: "B.Tech in Data Science & Financial Technology",
      category: "Computer & AI",
      duration: "4 Years (8 Semesters)",
      seats: "120 per campus",
      tag: "Top ROI",
      badgeColor: "#06B6D4",
      description: "Bridging big data analytics, statistical modeling, algorithmic high-frequency trading systems, and quantitative risk engineering.",
      keyCourses: ["Algorithmic Trading Engines", "Big Data with PySpark", "Time Series Forecasting", "Decentralized Finance"],
      avgPlacement: "14.6 LPA",
      highestOffer: "48.5 LPA"
    },
    {
      code: "EV-MECH",
      title: "B.Tech in Electric Vehicle & Mechatronics Engineering",
      category: "Electronics & Core",
      duration: "4 Years (8 Semesters)",
      seats: "120 per campus",
      tag: "Future Mobility",
      badgeColor: "#10B981",
      description: "Specialized focus on battery pack thermal design, motor inverters, power electronics, CAD generative chassis, and autonomous EV testing.",
      keyCourses: ["Battery Management Systems", "Motor Drives & Inverters", "Automotive CAN Bus", "Autonomous Vehicles"],
      avgPlacement: "12.9 LPA",
      highestOffer: "42.0 LPA"
    },
    {
      code: "AERO-IOT",
      title: "B.Tech in Aerospace & Satellite Communications",
      category: "Emerging Tech & Space",
      duration: "4 Years (8 Semesters)",
      seats: "90 per campus",
      tag: "SpaceTech",
      badgeColor: "#8B5CF6",
      description: "Co-developed with space industry partners covering nanosatellite orbital trajectories, telemetry, supersonic aerodynamics, and propulsion.",
      keyCourses: ["Nanosatellite Constellations", "Aerodynamics & CFD", "Orbital Telemetry", "Rocket Propulsion"],
      avgPlacement: "13.8 LPA",
      highestOffer: "45.0 LPA"
    },
    {
      code: "CYBER-SEC",
      title: "B.Tech in Cyber Security & Digital Forensics",
      category: "Computer & AI",
      duration: "4 Years (8 Semesters)",
      seats: "90 per campus",
      tag: "100% Placed",
      badgeColor: "#F59E0B",
      description: "Red-team offensive security, ethical penetration testing, malware reverse engineering, and cloud zero-trust security architecture.",
      keyCourses: ["Penetration Testing & Red Teaming", "Cloud Security (AWS/GCP)", "Cryptographic Protocols", "Incident Forensics"],
      avgPlacement: "13.5 LPA",
      highestOffer: "44.0 LPA"
    }
  ],

  feeStructure: {
    baseAnnualTuition: 280000,
    hostelNonAC: 95000,
    hostelAC: 135000,
    messCharges: 60000,
    scholarships: [
      { minScore: 95, rankLimit: 2500, waiverPct: 100, name: "Bindhu Founder's Presidential Fellowship", perks: "100% Tuition Waiver for all 4 years + ₹10,000 Monthly Research Stipend" },
      { minScore: 90, rankLimit: 8000, waiverPct: 75, name: "Dean's Merit Excellence Scholarship", perks: "75% Tuition Fee Waiver for all 4 years" },
      { minScore: 85, rankLimit: 15000, waiverPct: 50, name: "STEM Innovator Award", perks: "50% Tuition Fee Waiver for all 4 years" },
      { minScore: 80, rankLimit: 25000, waiverPct: 25, name: "Future Engineers Grant", perks: "25% Tuition Fee Waiver for all 4 years" }
    ]
  },

  noticeBoard: [
    {
      tag: "Placements 2026",
      color: "#10B981",
      title: "14 BIT Students Bag Day-1 Offers from Google & Microsoft!",
      author: "Office of Career Services",
      date: "Today, 11:30 AM",
      content: "Congratulations to our final year students from Bengaluru, Hyderabad, and Pune campuses on locking pre-placement offers ranging from ₹36 LPA to ₹54.2 LPA."
    },
    {
      tag: "Campus Life",
      color: "#EC4899",
      title: "INVENTO 2026 Tech Fest Dates Announced!",
      author: "Student Council",
      date: "Yesterday",
      content: "Asia's premier student innovation fest will take place Feb 18-20 across all 4 campuses. Hackathons, drone races, battlebots, and ₹25 Lakhs in cash prizes!"
    },
    {
      tag: "Admissions & BSAT",
      color: "#6366F1",
      title: "BSAT Phase-1 Scholarship Exam Registrations Open",
      author: "Admissions Directorate",
      date: "Active",
      content: "Class 12th students can take the online BSAT exam to unlock up to 100% tuition scholarships for the upcoming academic year. Zero exam fees."
    },
    {
      tag: "Motorsport",
      color: "#F59E0B",
      title: "Team 'Bindhu Velocity' Unveils Carbon EV Racecar",
      author: "Automotive Racing Club",
      date: "Oct 24",
      content: "Student engineers from Chennai & Pune campuses manufactured a full carbon-fiber monocoque EV race car hitting 0-100 km/h in 3.4 seconds!"
    }
  ],

  dayInLife: [
    { time: "07:30 AM", title: "Sunrise Jog & Filter Coffee", loc: "Campus Oval & Cafe BIT", desc: "Catch the morning breeze on the running track, then grab hot south Indian filter coffee and dosas at the courtyard cafeteria." },
    { time: "09:15 AM", title: "Autonomous Robotics Lab", loc: "Innovation Garage", desc: "Testing drone obstacle avoidance algorithms with ROS2 and working side-by-side with faculty mentors." },
    { time: "01:00 PM", title: "Courtyard Lunch & Jam Sessions", loc: "Central Quad Lawn", desc: "Relishing paneer butter masala or biryani with batchmates while the music club rehearses acoustic sets." },
    { time: "03:30 PM", title: "Industry Capstone Sprint", loc: "NVIDIA Supercomputing Studio", desc: "Collaborating with Amazon AWS industry mentors on distributed serverless architectures." },
    { time: "06:30 PM", title: "Sports Turf & Olympic Pool", loc: "Athletics Arena", desc: "5-a-side floodlit football tournament under stadium lights or a refreshing swim." },
    { time: "09:30 PM", title: "Hackathon Night & Rooftop Chill", loc: "Dorm Study Pods", desc: "Late-night Maggi, debugging code with roommates, and sharing laughs under the starry skies." }
  ]
};

// Comprehensive QA Knowledge Base for the Intelligent Bot
const BIT_QA_DATABASE = [
  {
    keywords: ["what is bit", "full form", "stand for", "about bit", "who is bit", "bindhu institute"],
    question: "What is BIT and what does it stand for?",
    answer: "<strong>BIT stands for Bindhu Institute of Technology</strong>. Founded in 1998, BIT is one of India's premier autonomous technological institutions with <strong>4 vibrant state-of-the-art campuses</strong> in <strong>Bengaluru, Hyderabad, Chennai, and Pune</strong>. BIT is accredited with <strong>NAAC A++</strong> and approved by <strong>AICTE & NBA</strong>, known for its cutting-edge AI labs, industry immersion, and record placements up to <strong>54.2 LPA</strong>."
  },
  {
    keywords: ["campuses", "locations", "where are", "which cities", "select location", "campus options", "where is bit"],
    question: "Where are BIT campuses located?",
    answer: "BIT operates <strong>4 premier campuses</strong> across India's biggest tech epicenters:<ul><li>📍 <strong>Bengaluru Campus</strong>: Electronic City Phase 1 (AI, Robotics & Cyber Systems).</li><li>📍 <strong>Hyderabad Campus</strong>: Financial District / Gachibowli (Data Science, Quantum & FinTech).</li><li>📍 <strong>Chennai Campus</strong>: OMR IT Expressway (EV Powertrain, Marine Robotics & CleanTech).</li><li>📍 <strong>Pune Campus</strong>: Hinjewadi Tech Park Phase 3 (Mechatronics, Formula Racing & UI/UX Design).</li></ul>You can switch your active campus anytime using the <strong>Campus Switcher</strong> at the top of this website!"
  },
  {
    keywords: ["transfer campus", "change location", "inter-campus exchange", "switch campus"],
    question: "Can I transfer or switch between BIT campuses?",
    answer: "<strong>Yes, absolutely!</strong> BIT features a unique <em>'Pan-India Inter-Campus Mobility'</em> program. Students in good academic standing (CGPA ≥ 7.5) can apply for a <strong>Semester Exchange</strong> or permanent campus transfer between Bengaluru, Hyderabad, Chennai, and Pune without any credit loss."
  },
  {
    keywords: ["placement", "highest package", "average package", "salary", "companies", "jobs", "ctc", "recruiters"],
    question: "What are the placement statistics and highest package at BIT?",
    answer: "BIT holds an outstanding placement record:<ul><li>🌟 <strong>Highest CTC</strong>: ₹54.2 LPA (Amazon AWS & Google)</li><li>📈 <strong>Overall Average CTC</strong>: ₹14.8 LPA (Bengaluru) | ₹13.6 LPA (Hyderabad) | ₹12.8 LPA (Chennai) | ₹13.2 LPA (Pune)</li><li>🎯 <strong>Placement Percentage</strong>: 98.8% across all campuses</li><li>🏢 <strong>Top Recruiters</strong>: Google, Microsoft, Amazon AWS, NVIDIA, Tesla, Apple, Uber, Goldman Sachs, Oracle, Salesforce, and 350+ global hiring partners.</li></ul>Over 60% of students receive pre-placement offers (PPOs) before their final semester!"
  },
  {
    keywords: ["admission", "how to apply", "eligibility", "criteria", "requirements", "cutoff", "entrance exam", "bsat", "jee", "kcet"],
    question: "What is the admission procedure and eligibility criteria?",
    answer: "Admission to B.Tech programs at BIT is based on:<ul><li>1️⃣ <strong>Eligibility</strong>: Minimum 60% aggregate in Class 12th (Physics, Mathematics, and Chemistry/Computer Science).</li><li>2️⃣ <strong>Accepted Exams</strong>: JEE Main, State CETs (KCET for Bengaluru, TS EAMCET for Hyderabad, TNEA for Chennai, MHT-CET for Pune), or BIT's own <strong>BSAT (Bindhu Scholastic Aptitude Test)</strong>.</li><li>3️⃣ <strong>Direct Online Application</strong>: You can apply directly through our Admissions Portal on this site or visit any campus for on-the-spot counseling.</li></ul>"
  },
  {
    keywords: ["fees", "cost", "tuition", "fee structure", "how much", "annual fee", "price"],
    question: "What is the fee structure for B.Tech programs?",
    answer: "The standard annual tuition fee is <strong>₹2,80,000 per year</strong>. However, through the <strong>Bindhu Merit & Founder's Fellowships</strong>, up to <strong>100% of the tuition fee can be waived</strong> based on your 12th board marks or entrance test rank. Try our interactive <strong>Scholarship Calculator</strong> on this page to check your customized fee!"
  },
  {
    keywords: ["scholarship", "financial aid", "waiver", "discount", "merit scholarship", "sports quota", "girl in stem"],
    question: "What scholarships are offered at BIT?",
    answer: "BIT provides ₹12+ Crores in annual scholarships:<ul><li>🥇 <strong>Founder's Fellowship</strong>: 100% Tuition Waiver for students with >95% in 12th Boards or top 2,500 in JEE/BSAT (+ ₹10,000/mo research grant).</li><li>🥈 <strong>Dean's Merit Excellence</strong>: 75% Tuition Waiver for 90-94.9%.</li><li>🥉 <strong>STEM Innovator Award</strong>: 50% Tuition Waiver for 85-89.9%.</li><li>🎖️ <strong>Special Quotas</strong>: Additional 25% waiver for Women in Tech, Defense/Army Wards, and National Sports Champions.</li></ul>"
  },
  {
    keywords: ["hostel", "accommodation", "stay", "room", "mess", "food", "living", "single room", "ac"],
    question: "What are the hostel and dining facilities like?",
    answer: "BIT offers resort-grade, secure student residences:<ul><li>🛏️ <strong>Room Types</strong>: Single, Twin, and Triple sharing options with AC or Non-AC, all with attached private washrooms and balcony views.</li><li>📶 <strong>Connectivity</strong>: 1 Gbps uninterrupted high-speed Wi-Fi, biometric entry, and 24/7 security with CCTV.</li><li>🍲 <strong>Dining</strong>: 4-meal gourmet dining with rotating North Indian, South Indian, Continental, and vegan menus. Special festive banquets every month!</li><li>💵 <strong>Hostel Charges</strong>: Non-AC ₹95,000/year | AC ₹1,35,000/year (Food mess: ₹60,000/year).</li></ul>"
  },
  {
    keywords: ["clubs", "sports", "student life", "cultural", "fest", "invento", "dhwani", "hackathon"],
    question: "What is student life and extracurricular culture like at BIT?",
    answer: "Life at BIT is vibrant, dynamic, and 100% student-driven!<ul><li>🎉 <strong>Fests</strong>: <em>INVENTO</em> (Asia's premier student tech fest with ₹25L prizes) and <em>DHWANI</em> (Annual 3-night music and cultural extravaganza).</li><li>🚀 <strong>40+ Clubs</strong>: AeroBIT (drones & rockets), RoboSapien, CodeCrafters, Bindhu Velocity (Formula Racing), Natya, Dhwani Music, Toastmasters, and Gaming Esports Guild.</li><li>⚽ <strong>Sports</strong>: Olympic size swimming pool, FIFA-grade turf football, floodlit basketball, indoor badminton, and world-class gym.</li><li>☕ <strong>Campus Vibe</strong>: 24/7 cafes, open-air beanbag lawns, acoustic music jam sessions at dusk.</li></ul>"
  },
  {
    keywords: ["visit", "campus tour", "walkthrough", "directions", "how to visit", "schedule tour", "open day"],
    question: "Can I visit the campus for an in-person tour?",
    answer: "<strong>Yes, parents and students are warmly invited every day!</strong> Campus tours run Monday through Saturday at <strong>10:00 AM</strong> and <strong>2:30 PM</strong>. You get a guided tour of our research labs, dorms, sports complex, and a complimentary coffee chat with faculty and current students. Click the <strong>'Book Campus Visit'</strong> button on this page to get an instant digital visitor pass!"
  },
  {
    keywords: ["courses", "branches", "departments", "programs", "btech", "mtech", "what can i study", "specializations"],
    question: "Which engineering branches and courses are available?",
    answer: "BIT offers future-focused B.Tech programs in:<ul><li>💻 <strong>Computer Science & AI</strong> (Deep Learning, Transformers & Cloud)</li><li>🤖 <strong>Robotics & Autonomous Systems</strong> (ROS2, Drones, Humanoids)</li><li>📊 <strong>Data Science & FinTech</strong> (Quantitative finance, Blockchain)</li><li>⚡ <strong>Electric Vehicles & Mechatronics</strong> (Battery tech, CAD, Powertrain)</li><li>🚀 <strong>Aerospace & Satellite Systems</strong> (Orbital comms, Rocketry)</li><li>🛡️ <strong>Cyber Security & Digital Forensics</strong> (Zero-trust defense)</li></ul>"
  },
  {
    keywords: ["accreditation", "ranking", "nirf", "naac", "a++", "aicte", "ugc", "government recognized"],
    question: "Is BIT recognized and accredited?",
    answer: "Yes, Bindhu Institute of Technology is recognized at the highest national and international standards:<ul><li>🏆 <strong>NAAC A++ Accredited</strong> (CGPA 3.82/4.0)</li><li>🏛️ <strong>AICTE & UGC Approved</strong> Autonomous Institution</li><li>⭐ <strong>Tier-1 NBA Accreditation</strong> for all engineering programs</li><li>🌍 <strong>ABET (USA) Equivalent</strong> Global Engineering Recognition</li><li>📊 <strong>NIRF Top 20 Innovation Category</strong> among Indian technical institutes.</li></ul>"
  },
  {
    keywords: ["contact", "phone", "email", "address", "helpline", "reach out", "office", "whatsapp"],
    question: "How can I contact the BIT admissions office?",
    answer: "You can reach our central admissions desk directly:<ul><li>📞 <strong>Toll-Free Helpline</strong>: 1800-425-BINDHU (1800-425-2463)</li><li>✉️ <strong>Admissions Email</strong>: admissions@bit.edu.in</li><li>📱 <strong>WhatsApp Student Counselor</strong>: +91 98450 12345</li><li>🏢 <strong>Campus Desks</strong>: Blr: +91 80 2852 4000 | Hyd: +91 40 6712 5000 | Chn: +91 44 4749 3000 | Pune: +91 20 6791 2000.</li></ul>"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { BIT_DATA, BIT_QA_DATABASE };
}
