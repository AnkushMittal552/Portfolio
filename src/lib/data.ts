import type {
  CaseStudy,
  Certification,
  ContactCard,
  EducationItem,
  ExperienceItem,
  EngineeringPrinciple,
  NavItem,
  Project,
  SkillGroup,
  TrustMetric,
} from "@/types/portfolio";

export const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About" },
  { id: "education", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: "Class 10th",
    institute: "Shree Maharaja Aggarsain Public School",
    year: "2019 - 2020",
    score: "85.4%",
  },
  {
    degree: "Class 12th",
    institute: "Shree Maharaja Aggarsain Public School",
    year: "2021 - 2022",
    score: "84.8%",
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    institute: "Vellore Institute of Technology, Vellore",
    year: "2022 - 2026",
    score: "CGPA: 8.81/10",
  },
];

export const PROJECTS: Project[] = [
  {
    key: "bookbase",
    category: "web",
    title: "BookBase",
    image: "/assets/projects/vampforge.webp",
    shortDescription: "Full-stack digital library and book review platform with secure authentication.",
    longDescription:
      "A digital library and book review platform built with React, Node.js, Express.js, MongoDB, and JWT. It enables users to discover books, review them, manage personal libraries, and browse dynamic audiobook content with Google Books and YouTube APIs.",
    resultLine: "A personalized reading experience with category discovery, reviews, and library tracking.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    githubUrl: "https://github.com/ankushmittal552",
    highlights: [
      "JWT-based user authentication and account personalization.",
      "Integrated Google Books API and YouTube Data API for discovery and learning content.",
      "My Library, favorites, category search, persistent reviews, and responsive UI workflows.",
    ],
    architecture: "React Frontend -> Express API -> MongoDB -> Third-Party Book & Video APIs",
    screenshots: [
      "/assets/projects/vampforge.webp",
      "/assets/projects/vampforge.webp",
      "/assets/projects/vampforge.webp",
    ],
    metrics: ["Personalized book workflows", "API-powered discovery", "Secure review system"],
  },
  {
    key: "order-matching-engine",
    category: "web",
    title: "Order Matching Engine",
    image: "/assets/projects/comodex.webp",
    shortDescription: "Java-based matching engine replicating core stock exchange order execution logic.",
    longDescription:
      "Built a limit order-matching engine in Java with price-time priority, FIFO execution, partial fills, and cancellation handling. The system models exchange behavior through a TreeMap-backed price book and linked-list order entries to maintain efficient lookups and quick cancellation.",
    resultLine: "A performant exchange-style engine with validation across edge cases.",
    tech: ["Java", "JUnit 5", "Maven", "Data Structures"],
    githubUrl: "https://github.com/ankushmittal552",
    highlights: [
      "Price-time priority and FIFO execution logic for matching orders.",
      "TreeMap-driven price levels with efficient order cancellation and lookup.",
      "12-case JUnit suite covering matching, partial fills, and edge conditions.",
    ],
    architecture: "Java Core Engine -> Order Book -> Matching Logic -> JUnit Validation",
    screenshots: [
      "/assets/projects/comodex.webp",
      "/assets/projects/comodex.webp",
      "/assets/projects/comodex.webp",
    ],
    metrics: ["O(log n) price lookup", "O(1) cancellation path", "Validated exchange logic"],
  },
  {
    key: "smart-ride-dispatch",
    category: "web",
    title: "Smart Ride Dispatch System",
    image: "/assets/projects/renthub.webp",
    shortDescription: "AI-assisted ride booking and dispatch platform using real-time mapping and scoring.",
    longDescription:
      "Developed a ride dispatch application that matches riders with drivers based on proximity, estimated travel time, and availability. Integrated Google Maps APIs for routing, traffic-aware ETA, and location selection while supporting secure authentication and PostgreSQL-backed workflows.",
    resultLine: "A real-world dispatch workflow with intelligent matching and route-aware assignment.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"],
    githubUrl: "https://github.com/ankushmittal552",
    highlights: [
      "Intelligent driver-rider allocation using scoring and travel-time metrics.",
      "Google Maps integration for distance calculation, route preview, and ETA estimation.",
      "Secure role-based authentication with booking, dispatch, and tracking flows.",
    ],
    architecture: "React App -> Express API -> PostgreSQL -> Google Maps + Dispatcher Logic",
    screenshots: [
      "/assets/projects/renthub.webp",
      "/assets/projects/renthub.webp",
      "/assets/projects/renthub.webp",
    ],
    metrics: ["Real-time allocation logic", "Route-aware dispatch", "Secure booking workflow"],
  },
];

export const PROJECT_COUNT_LABEL = "3";
export const LIVE_PROJECT_COUNT = 1;

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "smart-ride-dispatch",
    title: "Smart Ride Dispatch System - Intelligent Allocation",
    role: "Full-Stack Developer",
    period: "2025",
    summary:
      "Built a ride assignment platform with booking, dispatch logic, route-aware ETA, and secure role-based access.",
    challenge:
      "The system needed to match riders and drivers based on location, travel time, and availability without sacrificing secure and scalable backend flows.",
    approach: [
      "Designed booking and dispatch modules around proximity, ETA, and driver availability scoring.",
      "Integrated Google Maps APIs for route visualization, check-in logic, and distance calculation.",
      "Added authenticated backend flows with PostgreSQL-backed ride records and completion tracking.",
    ],
    impact: [
      "Improved ride assignment quality through travel-aware and availability-aware matching logic.",
      "Reduced dispatch friction by connecting location data, ETA, and booking processes in one flow.",
      "Created a secure, maintainable production-ready foundation for operational ride management.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Google Maps API"],
    link: "https://github.com/ankushmittal552",
  },
  {
    slug: "order-matching-engine",
    title: "Order Matching Engine - Exchange Logic",
    role: "Java Engineer",
    period: "2025",
    summary:
      "Designed a Java order book engine with exchange-like matching rules, cancellation paths, and partial fill handling.",
    challenge:
      "The key requirement was to maintain fairness, order priority, and performance under real trading-style matching conditions.",
    approach: [
      "Implemented price-time priority with FIFO execution semantics for order handling.",
      "Built efficient price levels using TreeMap and linked structures for fast lookup and cancellation.",
      "Exercised edge cases through a focused JUnit 5 validation suite.",
    ],
    impact: [
      "Validated realistic matching and cancellation behavior through 12 deterministic test cases.",
      "Delivered efficient execution paths with logarithmic price lookup and constant-time cancellation logic.",
      "Demonstrated strong systems thinking for performance-sensitive backend code.",
    ],
    stack: ["Java", "JUnit 5", "Maven", "Data Structures"],
    link: "https://github.com/ankushmittal552",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    kicker: "Interface Layer",
    summary: "Core web technologies I use to build responsive user interfaces and product experiences.",
    accent: "56 189 248",
    items: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 92, note: "Component-driven interfaces and app state flow" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 92, note: "Modern runtime logic and client-side behavior" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95, note: "Semantic, accessible page structure" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90, note: "Responsive layouts and polished visual design" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", level: 93, note: "Utility-first styling and clean UI systems" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    kicker: "Service Layer",
    summary: "Server-side work focused on APIs, authentication, and dependable application logic.",
    accent: "45 212 191",
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 88, note: "Backend runtime and service orchestration" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true, level: 86, note: "Middleware-driven API development" },
      { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", level: 90, note: "Resource-based services and integration flows" },
      { name: "JWT / Auth", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg", level: 85, note: "Secure user authentication and access control" },
      { name: "AWS", icon: "/assets/aws-icon.svg", level: 84, note: "Cloud-hosted deployment and service familiarity" },
    ],
  },
  {
    id: "database",
    title: "Databases & Data",
    kicker: "Persistence Layer",
    summary: "Data stores and query patterns used across my projects and product work.",
    accent: "129 140 248",
    items: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 88, note: "Document data modeling and application data storage" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 82, note: "Structured data storage and query-driven workflows" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 84, note: "Relational data handling and backend persistence" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg", level: 85, note: "Query design, joins, and data access patterns" },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    kicker: "Core Fluency",
    summary: "Core languages and tooling I use in building reliable systems and backend logic.",
    accent: "251 191 36",
    items: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 90, note: "Backend systems and performance-sensitive logic" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 92, note: "App logic, frontend behavior, and API integration" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 85, note: "Structured querying and relational data flow" },
    ],
  },
  {
    id: "delivery",
    title: "Tools & Workflow",
    kicker: "Ship Layer",
    summary: "The practical stack I use to build, validate, and ship projects efficiently.",
    accent: "244 114 182",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 90, note: "Version control and branch-based development" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true, level: 90, note: "Remote collaboration and project hosting" },
      { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg", level: 84, note: "Java project build and dependency management" },
      { name: "JUnit 5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg", level: 82, note: "Testing and validation for Java logic" },
      { name: "Google Maps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", level: 82, note: "Location-aware route and mapping features" },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Solutions Architect Associate",
    description: "Cloud architecture and deployment fundamentals with a focus on scalable application design.",
    icon: "/assets/aws-icon.svg",
    field: "engineering",
    issuer: "AWS",
  },
  {
    title: "Oracle Cloud Infrastructure AI Foundations",
    description: "Foundational understanding of AI concepts, cloud AI workflows, and responsible AI practices.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    field: "ai",
    issuer: "Oracle Cloud Infrastructure",
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: "Software Engineer Intern",
    company: "Lampros Tech Labs Pvt. Ltd.",
    employmentType: "Internship",
    period: "May 2026 - Jul 2026",
    location: "Remote / Product Engineering",
    description:
      "Worked on an AI-assisted ride dispatch and tracking platform, contributing to backend workflows, route-aware assignment logic, and secure application integration for real-time driver-rider coordination.",
    skills: ["Java", "JavaScript", "React.js", "Node.js", "REST APIs", "System Design"],
  },
];

export const CONTACT_CARDS: ContactCard[] = [
  {
    title: "Email",
    value: "ankushmittal552@gmail.com",
    href: "mailto:ankushmittal552@gmail.com",
    cta: "Send Mail",
  },
  {
    title: "Phone",
    value: "+91 9817090691",
    href: "tel:+919817090691",
    cta: "Call Now",
  },
  {
    title: "GitHub",
    value: "@ankushmittal552",
    href: "https://github.com/ankushmittal552",
    cta: "Visit",
  },
];

export const TRUST_METRICS: TrustMetric[] = [
  { label: "Projects", value: PROJECT_COUNT_LABEL, note: `${LIVE_PROJECT_COUNT} live project` },
  { label: "Internships", value: "1", note: "Product engineering experience" },
  { label: "Core Focus", value: "Software Engineering", note: "Backend systems and full-stack products" },
  { label: "Primary Stack", value: "Java · React · Node.js", note: "Across systems and product projects" },
];

export const ENGINEERING_APPROACH: EngineeringPrinciple[] = [
  {
    title: "Start with the rules",
    context: "Order Matching Engine",
    description:
      "I model price-time priority, FIFO execution, partial fills, and cancellation before optimizing the order book.",
  },
  {
    title: "Connect product and engineering",
    context: "Smart Ride Dispatch",
    description:
      "I bring bookings, driver availability, route data, and ETA together in one dispatch workflow.",
  },
  {
    title: "Build around real user flows",
    context: "BookBase",
    description:
      "I connect book discovery, personal libraries, favorites, and reviews in one responsive experience.",
  },
];

export const EGG_POSITIONS = [
  { id: "1", top: "14%", left: "8%" },
  { id: "2", top: "36%", left: "78%" },
  { id: "3", top: "64%", left: "22%" },
  { id: "4", top: "78%", left: "56%" },
  { id: "5", top: "50%", left: "46%" },
] as const;
