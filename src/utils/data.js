export const HeroData = [
    {
        src: "hero/person1.jpg",
        bg: "#1E293B",
        delay: 0.1,
    },
    {
        src: "hero/my-image.png",
        bg: "#0F172A",
        delay: 0.3,
    },
    {
        src: "hero/person3.jpg",
        bg: "#1E293B",
        delay: 0.2,
    },
    {
        src: "hero/person4.jpg",
        bg: "#0F172A",
        delay: 0.2,
    }
];

import {
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs,
  FaGitAlt, FaGithub, FaGitlab, FaDocker
} from "react-icons/fa";
import {
  SiNextdotjs, SiExpress, SiPostgresql, SiMongodb,
  SiFramer, SiTailwindcss, SiBootstrap, SiSass,
  SiDigitalocean, SiNginx
} from "react-icons/si";

export const features = [
  // Frontend
  {
    category: "frontend",
    Icon: FaReact,
    title: "React.js",
    description: "Building dynamic user interfaces with reusable components."
  },
  {
    category: "frontend",
    Icon: SiNextdotjs,
    title: "Next.js",
    description: "Creating SSR/SSG and SEO-friendly full-stack applications."
  },
  {
    category: "frontend",
    Icon: FaHtml5,
    title: "HTML5",
    description: "Structuring semantic, accessible, and SEO-friendly content."
  },
  {
    category: "frontend",
    Icon: FaCss3Alt,
    title: "CSS3",
    description: "Designing responsive layouts with modern styling techniques."
  },
  {
    category: "frontend",
    Icon: FaJsSquare,
    title: "JavaScript",
    description: "Implementing interactivity and logic across frontend apps."
  },
  {
    category: "frontend",
    Icon: SiFramer,
    title: "Framer Motion",
    description: "Creating smooth animations and micro-interactions in React."
  },
  {
    category: "frontend",
    Icon: SiTailwindcss,
    title: "Tailwind CSS",
    description: "Building stylish UIs rapidly using utility-first CSS."
  },
  {
    category: "frontend",
    Icon: SiBootstrap,
    title: "Bootstrap",
    description: "Quickly developing responsive designs with component libraries."
  },
  {
    category: "frontend",
    Icon: SiSass,
    title: "SCSS",
    description: "Writing maintainable styles with variables and nesting."
  },

  // Backend
  {
    category: "backend",
    Icon: FaNodeJs,
    title: "Node.js",
    description: "Running scalable server-side logic with event-driven JavaScript."
  },
  {
    category: "backend",
    Icon: SiExpress,
    title: "Express.js",
    description: "Creating robust and flexible RESTful APIs and services."
  },
  {
    category: "backend",
    Icon: SiPostgresql,
    title: "PostgreSQL",
    description: "Working with relational data using advanced SQL features."
  },
  {
    category: "backend",
    Icon: SiMongodb,
    title: "MongoDB",
    description: "Managing flexible NoSQL document-based data structures."
  },

  // Tools & DevOps
  {
    category: "tools",
    Icon: FaGitAlt,
    title: "Git",
    description: "Version controlling code with branching and history tracking."
  },
  {
    category: "tools",
    Icon: FaGithub,
    title: "GitHub",
    description: "Collaborating and reviewing code with remote repositories."
  },
  {
    category: "tools",
    Icon: FaGitlab,
    title: "GitLab",
    description: "Managing source code and CI/CD pipelines."
  },
  {
    category: "tools",
    Icon: SiDigitalocean,
    title: "DigitalOcean",
    description: "Deploying cloud-native apps and services efficiently."
  },
  {
    category: "tools",
    Icon: SiNginx,
    title: "Nginx",
    description: "Serving, reverse proxying, and load-balancing web applications."
  },
  {
    category: "tools",
    Icon: FaDocker,
    title: "Docker",
    description: "Containerizing apps for consistent deployment environments."
  },
];



export const hitFeatures = [
    {
        icon: "/products/Frame-0.png",
        title: "Frontend Development",
        des: "Crafting responsive and performant web applications with modern frameworks and state-of-the-art UI/UX principles",
        skills: ["React.js", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"]
    },
    {
        icon: "/products/Frame-1.png",
        title: "Backend Development",
        des: "Building scalable server-side applications with focus on performance, security and clean architecture",
        skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
    },
    {
        icon: "/products/Frame-2.png",
        title: "Cloud & DevOps",
        des: "Implementing CI/CD pipelines and managing cloud infrastructure for optimal application deployment",
        skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Linux"]
    },
    {
        icon: "/products/Frame-3.png",
        title: "System Architecture",
        des: "Designing robust and scalable system architectures with focus on microservices and distributed systems",
        skills: ["Microservices", "System Design", "API Design", "Message Queues", "Redis", "Elasticsearch"]
    },
    {
        icon: "/products/Frame-4.png",
        title: "Problem Solving",
        des: "Strong analytical and problem-solving skills with experience in complex system optimization",
        skills: ["Algorithms", "Data Structures", "System Optimization", "Performance Tuning", "Debugging", "Code Review"]
    },
    {
        icon: "/products/Frame-5.png",
        title: "Tech Leadership",
        des: "Leading technical initiatives and mentoring team members while promoting best practices",
        skills: ["Agile/Scrum", "Team Leadership", "Code Quality", "Architecture Planning", "Technical Documentation", "Mentoring"]
    }
];

export const projects = [
    {
        title: "Learning Management System",
        des: "A comprehensive LMS platform built with React.js, Node.js, Express, and MongoDB. Features secure authentication, course management, and video streaming capabilities.",
        tags: ["React.js", "Node.js", "MongoDB", "Express"],
        link: "#",
        category: "Web Application"
    },
    {
        title: "Advanced Password Generator",
        des: "A secure password generation tool with customizable options and strength indicators, built using modern JavaScript practices.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "#",
        category: "Web Application"
    },
    {
        title: "Interactive Pokédex",
        des: "A dynamic Pokémon information application showcasing modern React.js practices and responsive design with Tailwind CSS.",
        tags: ["React.js", "Tailwind CSS", "API Integration"],
        link: "#",
        category: "Web Application"
    },
    {
        title: "Authentication System",
        des: "A robust user authentication and management system implementing best security practices with Node.js and MongoDB.",
        tags: ["Node.js", "MongoDB", "JWT", "Security"],
        link: "#",
        category: "Web Application"
    }
];

export const socialLinks = {
    github: "https://github.com/your-github",
    linkedin: "https://linkedin.com/in/your-linkedin",
    email: "guptapavan549@gmail.com"
};