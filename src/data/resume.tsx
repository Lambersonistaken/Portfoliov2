import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Nestjs } from "@/components/ui/svgs/nestjs";
import { Python } from "@/components/ui/svgs/python";
import { Django } from "@/components/ui/svgs/django";
import { Vue } from "@/components/ui/svgs/vue";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Supabase } from "@/components/ui/svgs/supabase";
import { Docker } from "@/components/ui/svgs/docker";
import { Tailwind } from "@/components/ui/svgs/tailwind";
import { Html5 } from "@/components/ui/svgs/html5";
import { Css3 } from "@/components/ui/svgs/css3";

export const DATA = {
  name: "Ismail Emir Lambacioglu",
  initials: "IE",
  // Resolves to the Vercel production domain at build time. Set NEXT_PUBLIC_SITE_URL
  // to override once a custom domain is pointed at the project.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  location: "Sakarya, Turkey",
  locationLink: "https://www.google.com/maps/place/sakarya",
  description:
    "Full Stack Engineer at VeriCasa. I build Next.js and React frontends, NestJS backends, and Python workers, end to end.",
  summary:
    "I'm a full-stack engineer with hands-on experience shipping production applications across frontend, backend, and AI-powered features. I'm currently at [VeriCasa](/#work), working on Next.js and React frontends in TypeScript, NestJS backend services, and Python workers. Before that I was a founding engineer at [Stash](/#work), where I owned backend architecture end to end and shipped full-stack and AI/LLM features, a VS Code plugin, and an MCP server. I care about honesty, teamwork, and hard work, and I'm at my best taking ownership of a product from database to UI.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: Javascript },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "NestJS", icon: Nestjs },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Django", icon: Django },
    { name: "Vue.js", icon: Vue },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Supabase", icon: Supabase },
    { name: "Docker", icon: Docker },
    { name: "Tailwind", icon: Tailwind },
    { name: "HTML", icon: Html5 },
    { name: "CSS", icon: Css3 },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ismailemirr54@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Lambersonistaken",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ismailemir/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/lmbrndev",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ismailemirr54@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "VeriCasa",
      href: "https://vericasa.com",
      location: "Remote",
      title: "Full Stack Engineer",
      logoUrl: "/vericasaai_logo.jpeg",
      start: "June 2026",
      end: null,
      description: [
        "Building Next.js and React frontends in TypeScript",
        "Developing NestJS backend services and REST APIs",
        "Writing Python workers for background and data processing jobs",
      ],
    },
    {
      company: "Stash",
      href: "https://www.linkedin.com/company/usestash/",
      location: "Remote",
      title: "Full Stack Engineer",
      logoUrl: "/stash-logo.svg",
      start: "March 2025",
      end: "March 2026",
      description: [
        "Built full-stack and AI-powered features for an AI developer tool using Vue, Pinia, Python Django, and TypeScript",
        "Implemented CRUD operations, authentication/authorization flows, REST APIs, and PostgreSQL database integrations",
        "Developed custom VS Code and JetBrains plugins, and implemented an MCP server",
        "Integrated AI/LLM-powered features including smart search and context-aware issue analysis",
        "Containerized services with Docker and managed CI/CD pipelines via GitHub Actions",
        "Took end-to-end ownership of backend architecture, product development, and cross-functional initiatives",
      ],
    },
    {
      company: "JotForm",
      href: "",
      location: "Ankara, Turkey",
      title: "Frontend Developer Intern",
      logoUrl: "/jotformlogo.png",
      start: "August 2024",
      end: "September 2024",
      description: [
        "Developed new features for JotForm's e-signature product using React and TypeScript",
        "Gained hands-on experience with SaaS products, contributing to JotForm's frontend team",
        "Collaborated in a dynamic environment to deliver scalable, high-quality solutions",
      ],
    },
    {
      company: "Mobven",
      href: "",
      location: "Istanbul, Turkey",
      title: "Frontend Developer Intern",
      logoUrl: "/mobvenlogo.png",
      start: "April 2024",
      end: "June 2024",
      description: [
        "Worked hands-on with SCSS, Vue.js, JavaScript, and React to build high-performing applications",
        "Collaborated with peers to develop a practical AI project leveraging modern frontend technologies",
      ],
    },
    {
      company: "Türk Telekom",
      href: "",
      location: "Istanbul, Turkey",
      title: "Frontend Developer Intern",
      logoUrl: "/ttlogo.png",
      start: "July 2023",
      end: "April 2024",
      description: [
        "Created detailed documentation for the Tivibu web and mobile apps",
        "Enhanced system performance by monitoring API calls",
        "Contributed to developing a web-based testing tool with the team",
      ],
    },
    {
      company: "Alfatek",
      href: "",
      location: "Sakarya, Turkey",
      title: "Frontend Developer Intern",
      logoUrl: "/alfateklogo.png",
      start: "September 2022",
      end: "January 2023",
      description: [
        "Developed real-world applications with Vue.js and GitLab as a frontend engineer intern",
        "Gained valuable experience and an in-depth understanding of modern web development",
      ],
    },
  ],
  education: [
    {
      school: "Sakarya University",
      href: "https://www.sakarya.edu.tr",
      degree: "Computer Engineering",
      logoUrl: "/saulogo.png",
      // Leave `start` empty to show just the graduation year.
      start: "",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Elegant Landing Page",
      href: "https://light-mode-landing.vercel.app/",
      dates: "",
      active: true,
      description:
        "A beautifully crafted landing page built with cutting-edge web technologies, offering an engaging and visually appealing user experience. Uses Next.js for server-side rendering, TailwindCSS for responsive styling, Framer Motion for smooth animations, and TypeScript for robust, type-safe code.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://light-mode-landing.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/landingapp.png",
      video: "",
    },
    {
      title: "Chat With PDF",
      href: "https://github.com/Lambersonistaken/chat-pdf-ai-image",
      dates: "",
      active: true,
      description:
        "A web application that lets users interact with PDFs conversationally. Built with Next.js for server-side rendering, AWS S3 for file storage, and the ChatGPT API for intelligent conversation. Uses PineconeDB and NeonDB for efficient retrieval (RAG), with Clerk handling authentication.",
      technologies: [
        "Next.js",
        "ChatGPT API",
        "PineconeDB",
        "AWS S3",
        "Clerk",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Lambersonistaken/chat-pdf-ai-image",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chatpdfapp.png",
      video: "",
    },
    {
      title: "Spotify Clone",
      href: "https://spotify-clone-psi-henna.vercel.app/",
      dates: "",
      active: true,
      description:
        "A responsive Spotify clone built with React, featuring user authentication, integration with the Spotify API for real-time music data, and a clean interface powered by Material UI. React Context API and Hooks handle state management, keeping the app dynamic and easy to maintain.",
      technologies: ["React", "Spotify API", "Material UI", "Context API"],
      links: [
        {
          type: "Website",
          href: "https://spotify-clone-psi-henna.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/spotifyapp.png",
      video: "",
    },
    {
      title: "Notes Application",
      href: "https://js-notes-app-taupe.vercel.app/",
      dates: "",
      active: true,
      description:
        "A straightforward notes app built with HTML, CSS, and vanilla JavaScript. Users can create, edit, and delete notes, with all data persisted locally through the browser's localStorage.",
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      links: [
        {
          type: "Website",
          href: "https://js-notes-app-taupe.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/notesapp.png",
      video: "",
    },
  ],
} as const;
