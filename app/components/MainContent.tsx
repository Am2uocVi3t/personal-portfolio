"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import SinglePageContent from "./SinglePageContent";
import MobileNav from "./MobileNav";

export default function MainContent() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Check initial hash on mount
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveSection(hash);
      // Scroll to section after a small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <Sidebar activeSection={activeSection} />

      {/* Mobile Navigation */}
      <MobileNav activeSection={activeSection} />

      <main
        className="flex-1 lg:ml-72 h-screen overflow-y-auto bg-gradient-to-br from-blue-50/50 via-slate-50 to-indigo-50/50 relative pt-14 pb-16 lg:pt-0 lg:pb-0"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Decorative background elements - optimized */}
        <div className="fixed top-20 right-20 w-72 h-72 bg-blue-100/30 rounded-full pointer-events-none hidden lg:block"></div>
        <div className="fixed bottom-20 left-80 w-96 h-96 bg-indigo-100/30 rounded-full pointer-events-none hidden lg:block"></div>
        <div className="fixed top-1/2 right-1/4 w-64 h-64 bg-sky-100/20 rounded-full pointer-events-none hidden lg:block"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <SinglePageContent onSectionChange={handleSectionChange} />
        </div>
      </main>
    </div>
  );
}
