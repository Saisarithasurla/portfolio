// Model: Portfolio Data Model based on Sai Saritha's Resume
export const personalInfo = {
  name: "Surla Sai Saritha",
  title: "Full Stack Developer",
  tagline: "Building scalable web & cross-platform mobile apps with Python, React & Modern Cloud architectures.",
  phone: "+91-9390234442",
  email: "surlasaritha@gmail.com",
  location: "India",
  github: "https://github.com/Saisarithasurla",
  linkedin: "https://www.linkedin.com/in/surla-sai-saritha-b2736a260/",
  resumeUrl: "/final_resume.pdf",
  stats: [
    { label: "Months Internship Exp", value: "4+" },
    { label: "Full-Stack & Mobile Projects", value: "4+" },
    { label: "B.Tech CGPA", value: "8.95" },
    { label: "Core Technologies", value: "15+" }
  ],
  about: `I am a Full Stack Developer with hands-on experience in building responsive web and mobile applications using Python, Django REST Framework, React.js, React Native, Next.js, and Tailwind CSS. Experienced in developing secure REST APIs, seamlessly integrating frontend and backend systems, and architecting database solutions with PostgreSQL (Supabase), MySQL, and MongoDB. Recently completed a 4-month Full Stack Developer Internship at Solinix Tech contributing to real-time client applications in Agile workflows. Passionate about scalable, user-centric software.`
};

export const skillsData = {
  categories: [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", level: 90, icon: "Code2" },
        { name: "JavaScript (ES6+)", level: 85, icon: "FileCode2" }
      ]
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "Tailwind CSS", level: 95, icon: "Palette" },
        { name: "HTML5 / CSS3", level: 95, icon: "Layout" },
        { name: "React.js", level: 90, icon: "Atom" },
        { name: "React Native", level: 85, icon: "Smartphone" },
        { name: "Next.js", level: 70, icon: "Layers" }
      ]
    },
    {
      name: "Backend & APIs",
      skills: [
        { name: "RESTful API Design", level: 92, icon: "Network" },
        { name: "Django REST Framework", level: 90, icon: "Cpu" },
        { name: "Django", level: 88, icon: "Server" }
      ]
    },
    {
      name: "Databases & Cloud",
      skills: [
        { name: "MySQL", level: 88, icon: "Database" },
        { name: "MongoDB", level: 75, icon: "Database" },
        { name: "PostgreSQL / Supabase", level: 65, icon: "Database" }
      ]
    },
    {
      name: "Tools & Platforms",
      skills: [
        { name: "Postman", level: 92, icon: "Send" },
        { name: "Git & GitHub", level: 90, icon: "GitBranch" },
        { name: "Netlify", level: 90, icon: "Cloud" }
      ]
    }
  ]
};

export const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Solinix Tech",
    period: "March 2026 – July 2026",
    type: "Internship",
    location: "Remote / Hybrid",
    techStack: ["React.js", "React Native", "JavaScript", "Tailwind CSS", "REST APIs", "Git", "GitHub"],
    highlights: [
      "Contributed to the development of the Stayzy property management platform using React.js and React Native.",
      "Developed responsive web and mobile user interfaces using React.js, React Native, and Tailwind CSS.",
      "Integrated frontend applications with backend REST APIs to enable seamless data communication and efficient data retrieval.",
      "Developed reusable UI components and resolved application bugs to improve application performance and user experience.",
      "Collaborated with cross-functional teams using Git and GitHub in an Agile development environment.",
      "Participated in testing, debugging, and feature implementation to deliver high-quality software solutions."
    ]
  }
];

export const projects = [
  {
    id: "pgmove",
    title: "PGMove – PG Accommodation Booking Platform",
    tagline: "Smart PG & Rental Management Platform",
    category: "Full Stack Web",
    featured: true,
    image: "/projects/pgmove.png",
    features: [
      "Smart Property Search",
      "Property Listings",
      "Lead Management",
      "Owner Dashboard",
      "Rental Discovery",
      "Instant Booking"
    ],
    techStack: ["Next.js", "React.js", "TypeScript", "Supabase (PostgreSQL)", "Tailwind CSS"],
    description: "A modern marketplace connecting tenants with verified PGs, hostels, and rental accommodations, while providing property owners with automated listing tools and qualified lead generation.",
    bullets: [
      "Developed a responsive full-stack web application using Next.js, React.js, and TypeScript.",
      "Integrated Supabase (PostgreSQL) for property management, lead capture, and secure database operations.",
      "Built an Admin Dashboard with property CRUD operations, lead management, and role-based authentication.",
      "Implemented dynamic property search, filtering, and responsive user interfaces with Tailwind CSS.",
      "Deployed and optimized for high performance and smooth responsiveness across mobile, tablet, and desktop."
    ],
    liveUrl: "https://pgmove.in",
    githubUrl: null
  },
  {
    id: "stayzy",
    title: "Stayzy – Property Management Platform",
    tagline: "Advanced Co-Living Management System",
    category: "Mobile & Web",
    featured: true,
    image: "/projects/stayzy.png",
    features: [
      "Tenant Management",
      "Rent Collection",
      "Digital Rental Agreements",
      "Occupancy Management",
      "Maintenance Requests",
      "Mobile Application"
    ],
    techStack: ["React Native", "JavaScript", "Tailwind CSS", "REST APIs", "Git", "GitHub"],
    description: "A complete co-living and hostel management platform empowering property owners and residents to handle rent collection, digital lease agreements, and maintenance requests seamlessly.",
    bullets: [
      "Developed responsive and reusable UI components using React Native and React.js.",
      "Integrated frontend screens with backend REST APIs for seamless asynchronous data communication.",
      "Resolved application bugs and optimized render cycles to maximize mobile performance.",
      "Collaborated with cross-functional teams in an Agile sprint-based environment.",
      "Participated in comprehensive testing, debugging, and production feature rollouts."
    ],
    liveUrl: "https://stayzzy.in/",
    githubUrl: null
  },
  {
    id: "brainspark",
    title: "BrainSpark – AI Content Generation Platform",
    tagline: "Intelligent Generative AI Platform",
    category: "Full Stack AI",
    featured: true,
    image: "/projects/brainspark.png",
    features: [
      "Contextual AI Prompts",
      "Smart Content Generator",
      "Django REST API Core",
      "Prompt History Storage",
      "MySQL Data Architecture",
      "Fast Dynamic Interface"
    ],
    techStack: ["React.js", "Django REST Framework", "Python", "MySQL", "Tailwind CSS"],
    description: "An AI-powered web platform that dynamically generates high-quality creative text and marketing content based on contextual prompts with user history management.",
    bullets: [
      "Engineered responsive modern user interfaces using React.js and Tailwind CSS.",
      "Integrated frontend with robust Django REST Framework endpoints for fast asynchronous data processing.",
      "Implemented dynamic content generation workflows based on custom user prompts.",
      "Managed relational database operations with MySQL alongside extensive API endpoint testing in Postman.",
      "Streamlined platform speed and query efficiency through targeted debugging and code optimization."
    ],
    liveUrl: "https://brainspark-ai-saritha.netlify.app/",
    githubUrl: "https://github.com/Saisarithasurla/Brainspark-ai-generator"
  },
  {
    id: "social-media-analysis",
    title: "Social Media Addiction Data Analysis",
    tagline: "Behavioral Analytics & Business Intelligence",
    category: "Data Analysis",
    featured: false,
    image: "/projects/social-media-analytics.png",
    features: [
      "705+ Survey Analysis",
      "Advanced MySQL Queries",
      "Interactive Power BI Dashboard",
      "Mental Health Correlations",
      "Academic Impact Models",
      "Trend Visualization"
    ],
    techStack: ["MySQL", "Power BI", "Data Modeling"],
    description: "Data-driven research project examining social media screen time habits across 705+ university students and assessing the correlation with lifestyle health and academic metrics.",
    bullets: [
      "Queried and structured raw survey data from 705+ students using advanced MySQL aggregations.",
      "Designed and published interactive analytical dashboards with Power BI for visual pattern discovery.",
      "Identified critical trends connecting night-time screen exposure, sleep disruption, and GPA variance.",
      "Produced actionable insights and comprehensive analytical documentation for academic review."
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Saisarithasurla/MYSQL_notes-Project/tree/main/PROJECT"
  }
];

export const educationData = [
  {
    degree: "B.Tech – Mechanical Engineering",
    institution: "Anil Neerukonda Institute of Technology and Sciences",
    duration: "2021 – 2025",
    score: "CGPA: 8.95 / 10",
    badge: "First Class with Distinction",
    details: "Strong foundation in analytical problem solving, mathematics, engineering logic, and computational systems."
  }
];

export const certifications = [
  {
    title: "Full Stack Python Development Training",
    issuer: "Naresh i Technologies",
    tag: "Full Stack Python"
  },
  {
    title: "Basics of Python",
    issuer: "Infosys Springboard",
    tag: "Python Core"
  },
  {
    title: "Entrepreneurship",
    issuer: "IIT Madras (NPTEL)",
    tag: "Leadership & Innovation"
  },
  {
    title: "CATIA V5",
    issuer: "Infosys Springboard",
    tag: "Engineering CAD"
  },
  {
    title: "Fundamentals of Automotive Systems",
    issuer: "IIT Madras (NPTEL)",
    tag: "Systems Engineering"
  },
  {
    title: "LIDAR Data Processing",
    issuer: "IIRS ISRO",
    tag: "Spatial Data Science"
  }
];

export const codingProfiles = [
  { name: "LeetCode", url: "https://leetcode.com/u/surla-sai-saritha/", description: "Data structures & problem solving" },
  { name: "HackerRank", url: "https://www.hackerrank.com/profile/surlasaritha", description: "Python & SQL challenges" },
  { name: "CodeChef", url: "https://www.codechef.com/users/sai_saritha", description: "Algorithmic competitions" }
];
