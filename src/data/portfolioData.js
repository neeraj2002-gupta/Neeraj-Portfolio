// ============================================================
// portfolioData.js — Centralized configuration for Neeraj Gupta's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Neeraj Gupta",
  firstName: "Neeraj",
  brandName: "Neeraj",
  title: "Full Stack Web Developer",
  location: "Bhopal, Madhya Pradesh",
  phone: "+91-9151404340",
  emails: {
    primary: "ng780830@gmail.com",
    secondary: "ng780830@gmail.com",
  },
  summary:
    "I build responsive websites and full-stack web applications using React.js, JavaScript, Node.js, Python, Supabase, and MySQL. I focus on creating practical, user-friendly web projects and continuously improving my development skills.",
  resumeUrl: "Real_Resume College.pdf",
};

export const socialLinks = {
  github: "https://github.com/neeraj2002-gupta",
  linkedin: "https://linkedin.com/in/neerajgupta-dev",
  instagram: "https://www.instagram.com/neerajgupta.me?utm_source=qr&stkn=MWYyMG15NXlpYmRnMQ==",
};

export const heroContent = {
  greeting: "Hi, I'm Neeraj Gupta",
  titleHighlight: "Full Stack Web Developer",
  subtitle:
    "I build responsive websites and full-stack web applications using React.js, JavaScript, Node.js, Python, Supabase, and MySQL. I focus on creating practical, user-friendly web projects and continuously improving my development skills.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "/Neeraj-Resume-2026.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, I’m <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Neeraj Gupta</span>, a B.Tech Computer Science student and Full-Stack Web Developer. I build responsive websites and web applications using React.js, Node.js, Python, JavaScript, Supabase, and MySQL. Through internships and real-world projects like <span class="text-black font-black">SkillBright</span> and <span class="text-black font-black">Kusinara</span>, I’m continuously developing my skills and learning modern web technologies.`,
  techStack: ["React.js", "TypeScript", "Node.js", "Supabase", "Python"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack web applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and high-performance frontends using modern web technologies like React.js, TypeScript, Node.js, and Supabase.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment via Vercel and Cloudflare Workers, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 60 },
        { name: "TypeScript", level: 50 },
        { name: "Python", level: 80 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 60 },
        { name: "Next.js", level: 55 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Bootstrap", level: 70 },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js & Express.js", level: 60 },
        { name: "Supabase", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Firebase", level: 82 },
        { name: "MySQL", level: 80 },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code & Postman", level: 92 },
        { name: "Vercel", level: 88 },
        { name: "Cloudflare Workers", level: 80 },
        { name: "Agora SDK", level: 78 },
      ],
    },
    {
      title: "Core CS Subjects",
      skills: [
        { name: "Data Structures & Algorithms", level: 80 },
        { name: "Object Oriented Programming (OOP)", level: 85 },
        { name: "Database Management Systems (DBMS)", level: 82 },
        { name: "Operating Systems", level: 76 },
        { name: "Computer Networks", level: 75 },
      ],
    },
  ],
};

// Achievements & Highlights (repurposed from ContentCreator)
export const contentCreation = {
  badge: "Highlights",
  heading: "Achievements & Milestones",
  description: "Beyond code — real-world impact, recognition, and projects that made it to production.",
  categories: [
    {
      title: "Student Ambassador",
      description: "Selected as Student Ambassador at Syntro Tech (2026), representing tech innovation, student communities, and leadership.",
      stats: "2026",
      icon: "🏅",
    },
    {
      title: "Dual Internships",
      description: "Secured two concurrent full-stack development internships at SaiKet Systems and Cognifyz IT Solutions in 2026.",
      stats: "2026",
      icon: "💼",
    },
    {
      title: "Skill Bridge Platform",
      description: "Architected and built a full-stack skill exchange platform with real-time chat, video calling (Agora SDK), and PostgreSQL database.",
      stats: "Flagship",
      icon: "⚡",
    },
    {
      title: "Production Deployments",
      description: "Developed and deployed scalable, live full-stack web applications with authentication and cloud integrations via Vercel and Cloudflare.",
      stats: "Live Apps",
      icon: "🚀",
    },
  ],
};

// Leadership & Activities Data
export const leadershipList = [
  {
    title: "Student Ambassador — Syntro Tech",
    description: "Selected as Student Ambassador at Syntro Tech (2026), representing innovation, student communities, and technology advocacy.",
    role: "Student Ambassador",
    badge: "Leadership",
  },
  {
    title: "Full Stack Development Intern — SaiKet Systems",
    description: "Building responsive full-stack web applications using modern frontend and backend technologies while adhering to industry best practices.",
    role: "Full Stack Intern",
    badge: "Experience",
  },
  {
    title: "Full Stack Development Intern — Cognifyz IT Solutions",
    description: "Developing responsive web applications, enhancing practical engineering skills through real-world project assignments.",
    role: "Full Stack Intern",
    badge: "Experience",
  },
  {
    title: "Full-Stack Live Production Deployments",
    description: "Independently developed and deployed live full-stack web applications using modern web technologies, demonstrating end-to-end engineering capability.",
    role: "Full Stack Developer",
    badge: "Achievement",
  },
];

// Internships & Experience Data
export const internshipsList = [
  {
    organization: "SaiKet Systems",
    role: "Full Stack Development Intern",
    duration: "June 2026 – August 2026 | Remote",
    badge: "Internship",
    skillsLabel: "Skills Gained:",
    skills: [
      "Building responsive full-stack web applications",
      "Modern frontend & backend engineering",
      "Real-world development following industry best practices",
      "RESTful API & Database Integration",
    ],
    techLabel: "Technologies:",
    tech: ["React.js", "Node.js", "JavaScript", "TypeScript", "REST APIs", "Git"],
  },
  {
    organization: "Cognifyz IT Solutions",
    role: "Full Stack Development Intern",
    duration: "June 2026 – Present | Remote",
    badge: "Internship",
    skillsLabel: "Skills Gained:",
    skills: [
      "Developing responsive full-stack web applications",
      "Practical application development",
      "Client-side & Server-side implementation",
      "Database management & testing",
    ],
    techLabel: "Technologies:",
    tech: ["HTML5", "CSS3", "JavaScript", "MySQL", "Git"],
  },
  {
    organization: "Syntro Tech",
    role: "Student Ambassador",
    duration: "June 2026 – Present | Remote",
    badge: "Ambassador",
    skillsLabel: "Responsibilities:",
    skills: [
      "Representing Syntro Tech within the student community",
      "Supporting student outreach and engagement",
      "Sharing technology and career opportunities",
      "Developing communication and networking skills",
    ],
    techLabel: "Skills:",
    tech: [
      "Communication",
      "Networking",
      "Community Outreach",
      "Leadership",
      "Professional Engagement",
    ],
  },
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex web engineering challenges into clean, logical, and modular solutions." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to master modern technologies like Supabase, Agora SDK, and Cloudflare Workers." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working cross-functionally in remote internship environments with structured version control." },
  { name: "Communication", icon: "💬", desc: "Clear, concise technical and business communication across code reviews and project presentations." },
  { name: "Attention to Detail", icon: "🎯", desc: "Meticulous about UI pixel-perfection, responsive UX, robust data validation, and clean code." },
  { name: "Leadership", icon: "👑", desc: "Serving as Student Ambassador at Syntro Tech and driving initiatives within tech communities." },
  { name: "Continuous Learning", icon: "🚀", desc: "Proactively mastering full-stack frameworks, real-time architectures, and cloud deployments." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech studies, concurrent internships, and live full-stack production deployments." },
];

export const projects = [
  {
    id: "skill-bridge",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Skill Bridge (SkillBright)",
    description:
      "A full-stack skill exchange platform featuring secure authentication, real-time chat, file sharing, video calling, and advanced search. Integrated Supabase Authentication, PostgreSQL, Agora SDK for video calls, and deployed on Cloudflare Workers.",
    techTags: [
      "React.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Agora SDK",
      "Cloudflare Workers",
    ],
    links: {
      github: "https://github.com/neeraj2002-gupta",
      demo: "https://skillbright.akash43gupta2.workers.dev",
    },
    isFlagship: true,
  },
  {
    id: "kusinara",
    number: "02",
    badge: "🌟 Live Client Project",
    title: "Kusinara Organization Platform",
    description:
      "A live production web platform engineered for Kusinara Organization. Features responsive, accessible UI, dynamic cultural and educational content presentation, optimized performance, and modern mobile-first design.",
    techTags: [
      "React.js",
      "JavaScript",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Responsive UI",
      "Production Live",
    ],
    links: {
      github: "https://github.com/neeraj2002-gupta",
      demo: "https://www.kusinara.org",
    },
    isFlagship: false,
  },
  {
    id: "portfolio-website",
    number: "03",
    badge: "✨ Featured Project",
    title: "Portfolio",
    description:
      "A responsive personal portfolio website showcasing projects, skills, certifications, and professional achievements. Implemented modern UI, smooth animations, talking video Hero, and interactive credentials download.",
    techTags: ["React.js", "Tailwind CSS", "JavaScript", "Vite", "Framer Motion"],
    links: {
      github: "https://github.com/neeraj2002-gupta/Neeraj-Portfolio.git",
      demo: "https://neeraj-portfolio-six-virid.vercel.app",
    },
    isFlagship: false,
  },
];

export const certificates = {
  heading: "Certifications",
  subheading: "Certifications and learning achievements that support my technical skills and continuous learning.",
  featured: [
    {
      name: "Certified Entry-Level Python Programmer",
      issuer: "LinkedIn Learning",
      badge: "Python",
      icon: "🐍",
      fileUrl: "/LinkedIn Learning Certificate Python.pdf",
    },
    {
      name: "Learning Full-Stack Development",
      issuer: "Infosys Springboard",
      badge: "Full-Stack",
      icon: "🏗️",
      fileUrl: "/Full Stack infosys Certificates .pdf",
    },
    {
      name: "Front-End Web Developer",
      issuer: "Infosys Springboard",
      badge: "Front-End",
      icon: "🎨",
      fileUrl: "/Front-end infosys Certification.pdf",
    },
    {
      name: "HTML5, CSS, JavaScript & SQL",
      issuer: "SoloLearn",
      badge: "Web & SQL",
      icon: "💻",
      fileUrl: "/SQL certification solo.pdf",
    },
    {
      name: "Core Java Workshop",
      issuer: "Coding Thinker & VNS",
      badge: "Core Java",
      icon: "☕",
      fileUrl: "/JAVA Certificate.jpg",
    },
  ],
  viewAllUrl: "/Certificates.pdf",
};

export const educationList = [
  {
    degree: "(B.Tech) Computer Science & Engineering",
    fullDegree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "VNS Group of Institutions (RGPV)",
    duration: "2023 – 2027",
    score: "6.30 / 10",
    scoreLabel: "CGPA",
    location: "Bhopal, MP",
    badge: "Undergraduate",
    affiliation: "Affiliated to RGPV",
  },
  {
    degree: "Intermediate (Class XII – Science)",
    fullDegree: "Intermediate (Class XII – Science)",
    institution: "St. Andrew's Inter College",
    duration: "2021 – 2023",
    score: "Science Stream",
    scoreLabel: "Stream",
    location: "Gorakhpur, UP",
    badge: "Class XII",
    affiliation: "UP Board",
  },
  {
    degree: "Secondary School (SEE – Class X)",
    fullDegree: "Secondary Education Examination (SEE – Class X)",
    institution: "Fafuri English Boarding School",
    duration: "2021",
    score: "77.5%",
    scoreLabel: "Percentage",
    location: "Nepal",
    badge: "Class X",
    affiliation: "SEE Board",
  },
];

export const education = educationList[0];

export const footerContent = {
  taglines: [
    "Full Stack Web Development",
    "React.js · Node.js · Supabase · PostgreSQL",
    "Scalable & Real-Time Web Applications",
  ],
  credential: "B.Tech CSE (2023–2027) · CGPA 6.30",
  copyright: `© ${new Date().getFullYear()} Neeraj Gupta | Full Stack Developer`,
};

// Web3Forms Configuration
// Configured with Web3Forms Access Key for ng780830@gmail.com
export const web3formsConfig = {
  accessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "e3350772-8add-45a0-97c7-138ad761efc0",
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

