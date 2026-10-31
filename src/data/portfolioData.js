export const personalInfo = {
  name: "Hemanshu Gohel",
  handle: "hemanshugohel2006",
  title: "Full Stack Developer & Software Engineer",
  tagline: "Crafting scalable, high-performance web applications with modern architectures and pixel-perfect design.",
  email: "hemanshugohel2006@gmail.com",
  location: "India",
  status: "Open to exciting opportunities & collaborations",
  github: "https://github.com/hemanshugohel2006-source",
  linkedin: "https://linkedin.com/in/hemanshu-gohel",
  twitter: "https://twitter.com/hemanshugohel",
  bio: [
    "Hey there! I'm Hemanshu Gohel, a passionate Full Stack Developer and Computer Science enthusiast driven by the challenge of transforming complex problems into elegant, user-centric software.",
    "My technical focus centers on architecting resilient web platforms, responsive modern user interfaces with React & Tailwind, and building robust backend services with Node.js and scalable databases.",
    "When I'm not writing code, you can find me exploring cutting-edge web technologies, participating in open-source discussions, optimizing algorithms, or building developer tools that automate tedious workflows."
  ],
  stats: [
    { label: "Completed Projects", value: "18+", icon: "Rocket" },
    { label: "Git Commits", value: "650+", icon: "GitCommit" },
    { label: "Code Quality & Tests", value: "99.8%", icon: "ShieldCheck" },
    { label: "Client & Peer Satisfaction", value: "100%", icon: "Sparkles" }
  ]
};

export const skillsData = {
  frontend: [
    { name: "React.js", level: 95, icon: "SiReact", description: "Hooks, Context, Custom Hooks, Performance Optimization" },
    { name: "JavaScript (ES6+)", level: 92, icon: "SiJavascript", description: "Async/Await, Closures, Event Loop, DOM APIs" },
    { name: "TypeScript", level: 88, icon: "SiTypescript", description: "Type Safety, Generics, Interfaces, Strict Typing" },
    { name: "Tailwind CSS", level: 96, icon: "SiTailwindcss", description: "Design Systems, Responsive Layouts, Custom Themes" },
    { name: "Next.js", level: 86, icon: "SiNextdotjs", description: "App Router, SSR, SSG, Server Actions" },
    { name: "Framer Motion", level: 85, icon: "SiFramer", description: "Fluid Animations, Gestures, Page Transitions" },
    { name: "HTML5 & CSS3", level: 95, icon: "SiHtml5", description: "Semantic markup, Flexbox, Grid, CSS animations" },
    { name: "Redux / Zustand", level: 88, icon: "SiRedux", description: "Global state management, caching, selective renders" }
  ],
  backend: [
    { name: "Node.js", level: 90, icon: "SiNodedotjs", description: "Event-driven architecture, Streams, REST microservices" },
    { name: "Express.js", level: 92, icon: "SiExpress", description: "Routing, Middleware pipelines, JWT auth, Error handling" },
    { name: "RESTful APIs", level: 94, icon: "Globe", description: "REST specifications, OpenAPI docs, Rate limiting" },
    { name: "Python", level: 82, icon: "SiPython", description: "Scripting, Automation, Data processing, Flask" },
    { name: "WebSockets", level: 85, icon: "Zap", description: "Socket.io, Real-time bi-directional messaging" }
  ],
  database: [
    { name: "PostgreSQL", level: 88, icon: "SiPostgresql", description: "Complex joins, indexing, normalization, transactions" },
    { name: "MongoDB", level: 90, icon: "SiMongodb", description: "Aggregation pipelines, Mongoose schemas, Atlas" },
    { name: "MySQL", level: 85, icon: "SiMysql", description: "Relational database design, Stored procedures" },
    { name: "Redis", level: 82, icon: "SiRedis", description: "In-memory caching, Pub/Sub, Session stores" }
  ],
  devops: [
    { name: "Git & GitHub", level: 94, icon: "SiGit", description: "Version control, branching strategies, PR reviews" },
    { name: "Docker", level: 80, icon: "SiDocker", description: "Containerization, Multi-stage builds, Compose" },
    { name: "Vercel & Netlify", level: 95, icon: "Server", description: "Automated previews, Edge functions, Domain configs" },
    { name: "CI/CD Actions", level: 82, icon: "Cpu", description: "Automated linting, testing, and deployment workflows" },
    { name: "Linux / Bash", level: 85, icon: "Terminal", description: "Shell scripting, server maintenance, environment setup" }
  ]
};

export const projectsData = [
  {
    id: "omnitask-ai",
    title: "OmniTask AI Workspace",
    category: "Full Stack & AI",
    badge: "Featured",
    description: "An intelligent productivity and project collaboration platform with automated Kanban boards, AI-assisted task breakdown, and live team syncing.",
    longDescription: "OmniTask AI streamlines project planning for agile teams. Built with React and Node.js, it features interactive drag-and-drop workflows, real-time board updates via WebSockets, smart priority prediction, and team sprint metrics.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "Express", "Tailwind CSS", "MongoDB", "WebSockets"],
    liveDemo: "https://github.com/hemanshugohel2006-source/my-portfolio",
    github: "https://github.com/hemanshugohel2006-source/my-portfolio",
    highlights: [
      "Real-time multi-user task sync with sub-50ms latency",
      "Dynamic filtering, custom tag taxonomies, and analytics charts",
      "Role-based permission system with JWT authentication"
    ]
  },
  {
    id: "devpulse-analytics",
    title: "DevPulse Developer Metrics",
    category: "Web App & Analytics",
    badge: "Popular",
    description: "Real-time GitHub analytics dashboard delivering deep insights into repository velocity, commit cadences, code churn, and contributor dynamics.",
    longDescription: "DevPulse provides software engineering managers and open-source contributors with high-fidelity visual telemetry on code health, PR turnaround times, and automated release reports.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "GitHub API"],
    liveDemo: "https://github.com/hemanshugohel2006-source/my-portfolio",
    github: "https://github.com/hemanshugohel2006-source/my-portfolio",
    highlights: [
      "Custom responsive visualization widgets and heatmaps",
      "Intelligent caching layer reducing API rate-limit consumption by 85%",
      "Exportable PDF/JSON sprint summary reports"
    ]
  },
  {
    id: "pulse-commerce",
    title: "PulseCommerce Storefront",
    category: "E-Commerce & SaaS",
    badge: "Production Ready",
    description: "Ultra-fast headless commerce platform with instant cart synchronization, dynamic faceted search, and integrated multi-currency payments.",
    longDescription: "Engineered for speed and conversion, PulseCommerce features sub-second page loads, responsive product galleries, real-time inventory management, and an intuitive customer checkout experience.",
    image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe API", "Tailwind"],
    liveDemo: "https://github.com/hemanshugohel2006-source/my-portfolio",
    github: "https://github.com/hemanshugohel2006-source/my-portfolio",
    highlights: [
      "Optimistic UI updates for cart items with seamless offline recovery",
      "Stripe payment integration with webhook verification",
      "Comprehensive merchant admin dashboard with order tracking"
    ]
  },
  {
    id: "codenexus-ide",
    title: "CodeNexus Web IDE",
    category: "Developer Tools",
    badge: "Innovation",
    description: "Cloud-native in-browser code editor with multi-language syntax highlighting, real-time collaborative editing, and instant preview rendering.",
    longDescription: "A developer playground built right inside the browser. Users can write HTML, CSS, JavaScript, and Markdown with instant live reloads, console emulation, and shareable code snippets.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Monaco Editor", "JavaScript", "Tailwind CSS", "LocalStorage"],
    liveDemo: "https://github.com/hemanshugohel2006-source/my-portfolio",
    github: "https://github.com/hemanshugohel2006-source/my-portfolio",
    highlights: [
      "Interactive code execution engine with sandboxed iframes",
      "Monaco editor integration with autocomplete and error diagnostics",
      "Custom themes (Cyberpunk, Monokai, Dracule, Solarized)"
    ]
  },
  {
    id: "cryptotrack-pro",
    title: "CryptoTrack Pro Terminal",
    category: "Fintech & Web3",
    badge: "Live Data",
    description: "Financial market tracker featuring live price tickers, interactive candlestick charting, portfolio profit/loss calculator, and market sentiment alerts.",
    longDescription: "Tracks top 500 cryptocurrencies with real-time websocket streams, technical indicator overlays, custom price alert triggers, and currency conversion calculators.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Tailwind CSS", "CoinGecko API", "Chart.js", "Framer Motion"],
    liveDemo: "https://github.com/hemanshugohel2006-source/my-portfolio",
    github: "https://github.com/hemanshugohel2006-source/my-portfolio",
    highlights: [
      "Live order-book emulation and price volatility indicators",
      "Local storage portfolio tracking with zero tracking cookies",
      "Responsive mobile and desktop trading desk layout"
    ]
  },
  {
    id: "cloudvault-storage",
    title: "CloudVault Secure Storage",
    category: "Cloud & Security",
    badge: "Security",
    description: "Encrypted personal file vault with drag-and-drop file chunking, granular access links, expiring URLs, and instant media previews.",
    longDescription: "Built with security-first architecture. Handles multi-gigabyte uploads through chunked streaming, offers client-side file encryption before upload, and creates expiring shareable links.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "Express", "AWS S3 / Cloud Storage", "CryptoJS"],
    liveDemo: "https://github.com/hemanshugohel2006-source/my-portfolio",
    github: "https://github.com/hemanshugohel2006-source/my-portfolio",
    highlights: [
      "Chunked resumable file upload protocol",
      "AES-256 client-side encryption options for sensitive files",
      "Direct cloud storage presigned URL generation"
    ]
  }
];

export const experienceTimeline = [
  {
    period: "2024 - Present",
    role: "Full Stack Software Developer & Open Source Contributor",
    organization: "Independent & Open Source Projects",
    location: "Remote / India",
    description: "Designing and developing production-grade web applications, crafting modular React component architectures, and building open-source developer utilities.",
    skills: ["React", "Node.js", "TypeScript", "Tailwind CSS", "System Design", "Git"]
  },
  {
    period: "2023 - 2024",
    role: "Frontend Engineer & UI/UX Developer",
    organization: "Freelance & Collaborative Projects",
    location: "Remote",
    description: "Delivered responsive web interfaces, interactive dashboards, and client portals. Focused on Core Web Vitals, accessibility, and high performance cross-device compatibility.",
    skills: ["JavaScript", "React", "REST APIs", "Tailwind CSS", "Framer Motion"]
  },
  {
    period: "2022 - 2026 (Expected)",
    role: "B.Tech in Computer Science & Engineering",
    organization: "University College of Engineering",
    location: "India",
    description: "Specializing in Data Structures, Object-Oriented Analysis, Relational Database Management Systems, Computer Networks, and Operating Systems.",
    skills: ["DSA", "Operating Systems", "Computer Networks", "DBMS", "C++", "Java"]
  }
];
