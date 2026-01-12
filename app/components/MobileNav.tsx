"use client";

import { useState, useEffect } from "react";

const navItems = [
  { id: "home", label: "Home", icon: "/logos/home.png" },
  { id: "about", label: "About", icon: "/logos/about.png" },
  { id: "projects", label: "Projects", icon: "/logos/project.png" },
  { id: "research", label: "Research", icon: "/logos/research.png" },
  { id: "certifications", label: "Certs", icon: "/logos/certifications.png" },
  { id: "cv", label: "CV", icon: "/logos/cv.png" },
];

interface MobileNavProps {
  activeSection: string;
}

export default function MobileNav({ activeSection }: MobileNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(activeSection);

  useEffect(() => {
    setCurrentSection(activeSection);
  }, [activeSection]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Header - Fixed at top */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            {/* Current section indicator */}
            <span className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {navItems.find((item) => item.id === currentSection)?.label ||
                "Home"}
            </span>
            <span className="text-gray-400 text-sm">•</span>
            <span className="text-xs text-gray-500">Huynh Quoc Viet Portfolio</span>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            className="mobile-menu-container p-2 rounded-lg hover:bg-blue-50 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Slide-out Menu */}
      <nav
        className={`mobile-menu-container lg:hidden fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header - Full Intro like Desktop */}
          <div className="p-5 border-b border-gray-100 text-center space-y-3">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Huynh Quoc Viet
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              AI student at FPT University passionate about computer vision,
              financial forecasting & explainable AI.
            </p>

            {/* Status */}
            <div className="flex items-center justify-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[11px] font-medium text-green-600">
                Open to Opportunities
              </span>
            </div>

            {/* Location & Timezone */}
            <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500">
              <span className="flex items-center gap-1">
                <svg
                  className="w-3 h-3"
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
                  className="w-3 h-3"
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

          {/* Nav Items */}
          <div className="flex-1 py-4 px-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  currentSection === item.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-blue-50"
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`h-5 w-5 ${
                    currentSection === item.id ? "invert" : ""
                  }`}
                />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="p-4 border-t border-gray-100">
            <p className="text-xs text-gray-400 mb-3 text-center">
              Connect with me
            </p>
            <div className="flex justify-center gap-3">
              <a
                href="mailto:tyviet1609@gmail.com"
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
              >
                <img src="/logos/gmail.png" className="h-5 w-5" alt="Email" />
              </a>
              <a
                href="https://www.linkedin.com/in/quoc-viet-huynh/"
                target="_blank"
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
              >
                <img
                  src="/logos/linkedin.png"
                  className="h-5 w-5"
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://github.com/Am2uocVi3t"
                target="_blank"
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
              >
                <img src="/logos/github.png" className="h-5 w-5" alt="GitHub" />
              </a>
              <a
                href="https://orcid.org/0009-0003-8727-9998"
                target="_blank"
                className="p-2 rounded-full bg-gray-100 hover:bg-green-100 transition-colors"
              >
                <img src="/logos/orcid.png" className="h-5 w-5" alt="ORCID" />
              </a>
            </div>

            {/* Copyright */}
            <div className="pt-4 mt-4 border-t border-gray-200/60 text-xs text-gray-400 text-center">
              © {new Date().getFullYear()} Huynh Quoc Viet
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation Bar - Mobile Only */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-blue-100 shadow-lg">
        <div className="flex justify-around items-center py-2 px-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg transition-all ${
                currentSection === item.id
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className={`h-5 w-5 ${
                  currentSection === item.id ? "opacity-100" : "opacity-60"
                }`}
              />
              <span className="text-[9px] font-medium">{item.label}</span>
              {currentSection === item.id && (
                <div className="absolute bottom-1 w-1 h-1 bg-blue-600 rounded-full" />
              )}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
