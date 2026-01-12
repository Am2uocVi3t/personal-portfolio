"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home", icon: "/logos/home.png" },
  { id: "about", label: "About", icon: "/logos/about.png" },
  { id: "projects", label: "Projects", icon: "/logos/project.png" },
  { id: "research", label: "Research", icon: "/logos/research.png" },
  {
    id: "certifications",
    label: "Certifications",
    icon: "/logos/certifications.png",
  },
  { id: "cv", label: "CV", icon: "/logos/cv.png" },
];

interface SidebarProps {
  activeSection: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
  const [currentSection, setCurrentSection] = useState(activeSection);

  useEffect(() => {
    setCurrentSection(activeSection);
  }, [activeSection]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="w-72 px-6 py-10 flex flex-col justify-between fixed h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 border-r border-blue-100/50 shadow-[4px_0_24px_-2px_rgba(59,130,246,0.15)]">
      {/* Decorative accent line */}
      <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-400 via-indigo-500 to-blue-400"></div>

      {/* Decorative blobs - optimized */}
      <div className="absolute top-10 left-4 w-32 h-32 bg-blue-100/40 rounded-full"></div>
      <div className="absolute bottom-20 right-4 w-24 h-24 bg-indigo-100/40 rounded-full"></div>

      {/* Top: Title & Description */}
      <div className="space-y-4 text-center relative z-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Huynh Quoc Viet
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          AI student at FPT University passionate about computer vision,
          financial forecasting & explainable AI.
        </p>

        {/* Status, Location, Timezone */}
        <div className="space-y-2 pt-2">
          {/* Status */}
          <div className="flex items-center justify-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-green-600">
              Open to Opportunities
            </span>
          </div>

          {/* Location & Timezone */}
          <div className="flex items-center justify-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Ho Chi Minh City
            </span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              UTC+7
            </span>
          </div>
        </div>
      </div>

      {/* Middle: Navigation */}
      <nav className="mt-16 space-y-4 text-sm relative z-10">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            className={`flex items-center gap-3 rounded-lg border px-3 py-2 transition-all duration-300 ease-in-out ${
              currentSection === item.id
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-md"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-700 border-blue-100 bg-white/50"
            }`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className={`h-4 w-4 transition-all duration-300 ${
                currentSection === item.id ? "invert" : ""
              }`}
            />
            <span className="flex-1 text-center">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Bottom: Social Links */}
      <div className="space-y-5">
        {/* Social Icons Row */}
        <div className="flex justify-center gap-3">
          <a
            href="mailto:tyviet1609@gmail.com"
            className="group relative p-2.5 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all duration-300"
            title="Email"
          >
            <img
              src="/logos/gmail.png"
              className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/quoc-viet-huynh/"
            target="_blank"
            className="group relative p-2.5 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-300"
            title="LinkedIn"
          >
            <img
              src="/logos/linkedin.png"
              className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
            />
          </a>

          <a
            href="https://github.com/Am2uocVi3t"
            target="_blank"
            className="group relative p-2.5 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-400 hover:-translate-y-1 transition-all duration-300"
            title="GitHub"
          >
            <img
              src="/logos/github.png"
              className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
            />
          </a>

          <a
            href="https://orcid.org/0009-0003-8727-9998"
            target="_blank"
            className="group relative p-2.5 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-green-300 hover:-translate-y-1 transition-all duration-300"
            title="ORCID"
          >
            <img
              src="/logos/orcid.png"
              className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-gray-200/60 text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Huynh Quoc Viet
        </div>
      </div>
    </aside>
  );
}
