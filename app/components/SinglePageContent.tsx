"use client";

import { useEffect, useRef, useCallback, useState } from "react";

// Typing animation component
function TypingText({
  texts,
  className,
}: {
  texts: string[];
  className?: string;
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentTextIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < text.length) {
            setCurrentText(text.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(text.slice(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

interface SinglePageContentProps {
  onSectionChange?: (section: string) => void;
}

export default function SinglePageContent({
  onSectionChange,
}: SinglePageContentProps) {
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const currentSectionRef = useRef<string>("home");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const awardsScrollRef = useRef<HTMLDivElement>(null);
  const featuredProjectsRef = useRef<HTMLDivElement>(null);

  // Lightbox state for certificate images
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  // Handle wheel scroll to horizontal scroll for awards section
  useEffect(() => {
    const awardsContainer = awardsScrollRef.current;
    if (!awardsContainer) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      awardsContainer.scrollLeft += e.deltaY * 0.8;
    };

    awardsContainer.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      awardsContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Handle wheel scroll to horizontal scroll for featured projects section
  useEffect(() => {
    const projectsContainer = featuredProjectsRef.current;
    if (!projectsContainer) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      projectsContainer.scrollLeft += e.deltaY * 0.8;
    };

    projectsContainer.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      projectsContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Clear any pending update
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // Find the section with highest visibility
        let maxRatio = 0;
        let mostVisibleSection = "";

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });

        // Debounce the section change to prevent flickering
        if (
          mostVisibleSection &&
          mostVisibleSection !== currentSectionRef.current &&
          maxRatio > 0.3
        ) {
          timeoutRef.current = setTimeout(() => {
            currentSectionRef.current = mostVisibleSection;
            onSectionChange?.(mostVisibleSection);
            window.history.replaceState(null, "", `#${mostVisibleSection}`);
          }, 100);
        }
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [onSectionChange]);

  const setRef = useCallback(
    (id: string) => (el: HTMLElement | null) => {
      sectionsRef.current[id] = el;
    },
    []
  );

  return (
    <div className="space-y-0">
      {/* ==================== HOME ==================== */}
      <section
        id="home"
        ref={setRef("home")}
        className="py-12 px-4 sm:py-16 sm:px-8"
      >
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
            👋 Welcome
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Home
            </span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full"></div>
          </div>
        </div>

        <div className="space-y-12 sm:space-y-16 max-w-4xl mx-auto">
          {/* Hero */}
          <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Huynh Quoc Viet
              </span>
            </h3>

            {/* Typing Animation */}
            <div className="h-8">
              <p className="text-lg sm:text-xl text-gray-700">
                I'm an{" "}
                <TypingText
                  texts={[
                    "Artificial Intelligence Intern",
                    "Computer Vision Engineer",
                    "Financial Time-Series Researcher",
                    "Deep Learning Developer",
                    "SpeedyLabX Research Member",
                  ]}
                  className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                />
              </p>
            </div>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              AI student at{" "}
              <span className="font-medium text-blue-700">FPT University</span>{" "}
              passionate about{" "}
              <span className="font-medium text-indigo-700">
                computer vision
              </span>
              ,{" "}
              <span className="font-medium text-purple-700">
                financial time-series forecasting
              </span>
              , and{" "}
              <span className="font-medium text-pink-700">explainable AI</span>.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-3 sm:gap-4 pt-2">
              <a
                href="mailto:tyviet1609@gmail.com"
                className="group p-2.5 sm:p-3 rounded-full bg-white border border-blue-200 shadow-sm hover:shadow-lg hover:border-blue-400 hover:-translate-y-1 transition-all duration-300"
                title="Email"
              >
                <img
                  src="/logos/gmail.png"
                  className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/quoc-viet-huynh/"
                target="_blank"
                className="group p-2.5 sm:p-3 rounded-full bg-white border border-blue-200 shadow-sm hover:shadow-lg hover:border-blue-400 hover:-translate-y-1 transition-all duration-300"
                title="LinkedIn"
              >
                <img
                  src="/logos/linkedin.png"
                  className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://github.com/Am2uocVi3t"
                target="_blank"
                className="group p-2.5 sm:p-3 rounded-full bg-white border border-blue-200 shadow-sm hover:shadow-lg hover:border-blue-400 hover:-translate-y-1 transition-all duration-300"
                title="GitHub"
              >
                <img
                  src="/logos/github.png"
                  className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://orcid.org/0009-0003-8727-9998"
                target="_blank"
                className="group p-2.5 sm:p-3 rounded-full bg-white border border-blue-200 shadow-sm hover:shadow-lg hover:border-blue-400 hover:-translate-y-1 transition-all duration-300"
                title="ORCID"
              >
                <img
                  src="/logos/orcid.png"
                  className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform"
                />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center">
              <a
                href="#projects"
                className="text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg text-center"
              >
                View Projects
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-blue-700 border border-blue-300 px-5 py-2.5 rounded-md hover:bg-blue-50 transition"
              >
                About Me
              </a>
            </div>
          </div>

          {/* About Preview */}
          <div className="space-y-4 text-center">
            <h3 className="text-xl font-medium">About</h3>
            <p className="text-gray-600 leading-relaxed">
              I enjoy building end-to-end AI systems and exploring how learning
              algorithms behave under real-world constraints such as noisy data,
              non-IID distributions, and deployment limitations. My interests
              lean toward research-driven projects with practical impact.
            </p>
          </div>

          {/* Featured Projects Preview - Netflix Style Carousel */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-center">
              Featured Projects
            </h3>

            <div className="relative">
              {/* Left fade indicator */}
              <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
              {/* Right fade indicator with animated arrow */}
              <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none flex items-center justify-end pr-2">
                <div className="w-8 h-8 rounded-full bg-white/80 shadow-md flex items-center justify-center animate-bounce-x">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              {/* Scroll Container */}
              <div
                ref={featuredProjectsRef}
                className="flex gap-4 overflow-x-scroll pb-4 px-4 scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {/* Project Card 1 */}
                <div className="flex-shrink-0 w-72 sm:w-80">
                  <div className="rounded-xl border border-blue-100 p-4 sm:p-6 bg-white shadow-sm hover:shadow-lg transition-shadow duration-200 h-full">
                    <div className="w-full h-28 sm:h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white text-3xl sm:text-4xl">
                        📈
                      </span>
                    </div>
                    <h4 className="font-semibold text-lg">
                      Regime-Adaptive Stock Forecasting
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">
                      Hybrid HMM + LSTM model for regime-aware financial
                      time-series prediction under non-stationary market
                      conditions.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        TimeSeries
                      </span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                        LSTM
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                        HMM
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Card 2 */}
                <div className="flex-shrink-0 w-72 sm:w-80">
                  <div className="rounded-xl border border-blue-100 p-4 sm:p-6 bg-white shadow-sm hover:shadow-lg transition-shadow duration-200 h-full">
                    <div className="w-full h-28 sm:h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white text-3xl sm:text-4xl">
                        🦺
                      </span>
                    </div>
                    <h4 className="font-semibold text-lg">
                      PPE Detection System
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">
                      Benchmarking YOLOv8 and RT-DETR for real-time personal
                      protective equipment detection in industrial environments.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        ComputerVision
                      </span>
                      <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">
                        YOLO
                      </span>
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">
                        ObjectDetection
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Card 3 */}
                <div className="flex-shrink-0 w-72 sm:w-80">
                  <div className="rounded-xl border border-blue-100 p-4 sm:p-6 bg-white shadow-sm hover:shadow-lg transition-shadow duration-200 h-full">
                    <div className="w-full h-28 sm:h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white text-3xl sm:text-4xl">
                        🎱
                      </span>
                    </div>
                    <h4 className="font-semibold text-lg">
                      8-Ball Billiards Computer Vision
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">
                      Real-time ball tracking system with rule-based scoring for
                      8-ball and carom billiards using deep learning.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                        CV
                      </span>
                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                        YOLO
                      </span>
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">
                        SportsAnalytics
                      </span>
                    </div>
                  </div>
                </div>

                {/* More Projects Card */}
                <div className="flex-shrink-0 w-72 sm:w-80">
                  <a href="#projects" className="block h-full">
                    <div className="rounded-xl border-2 border-dashed border-blue-300 p-4 sm:p-6 bg-blue-50 hover:bg-blue-100 transition-colors duration-200 h-full flex flex-col items-center justify-center">
                      <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                        <span className="text-white text-2xl">→</span>
                      </div>
                      <h4 className="font-semibold text-lg text-blue-700">
                        View All Projects
                      </h4>
                      <p className="mt-2 text-sm text-blue-600 text-center">
                        Explore more AI and ML projects
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section
        id="about"
        ref={setRef("about")}
        className="py-12 px-4 sm:py-20 sm:px-8 bg-gradient-to-br from-blue-50/80 via-indigo-50/50 to-purple-50/80 relative overflow-hidden"
      >
        {/* Decorative Background - Lighter version */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/40 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 relative z-10">
          <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full mb-4">
            🎯 Get to Know Me
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              About
            </span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Hero Quote Card */}
          <div className="mb-10 sm:mb-16 relative">
            <div className="absolute -top-4 -left-4 text-6xl sm:text-8xl text-blue-200 font-serif">
              "
            </div>
            <div className="bg-white/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-50 rounded-full"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-light italic relative z-10">
                I am an Artificial Intelligence student at FPT University with a
                strong passion for
                <span className="font-semibold text-blue-600">
                  {" "}
                  research-oriented machine learning
                </span>
                . My academic focus lies at the intersection of
                <span className="font-semibold text-indigo-600">
                  {" "}
                  computer vision
                </span>
                ,
                <span className="font-semibold text-purple-600">
                  {" "}
                  time-series forecasting
                </span>
                , and
                <span className="font-semibold text-pink-600">
                  {" "}
                  applied deep learning systems
                </span>
                .
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 text-8xl text-blue-200 font-serif rotate-180">
              "
            </div>
          </div>

          {/* Two Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Education Card - Timeline Style */}
            <div className="group">
              <div className="bg-white/95 rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white text-lg sm:text-xl">🎓</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Education
                  </h3>
                </div>

                {/* Timeline */}
                <div className="space-y-4">
                  {/* FPT University */}
                  <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl overflow-hidden shadow-md flex-shrink-0 bg-white">
                        <img
                          src="/university/FPT University.png"
                          alt="FPT University"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                          <h4 className="text-base sm:text-lg font-bold text-gray-800">
                            FPT University
                          </h4>
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-[10px] sm:text-xs font-semibold rounded-full w-fit">
                            2023 — Jan 2027
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm">
                          Ho Chi Minh City, Vietnam
                        </p>
                        <p className="text-gray-700 mt-1 font-medium">
                          B.Eng in Artificial Intelligence
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">
                            🏆 Honorable Student (Sem 5)
                          </span>
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                          <div className="flex-1 h-2 bg-white rounded-full overflow-hidden">
                            <div className="h-full w-[80%] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                          </div>
                          <span className="text-sm font-bold text-indigo-600">
                            GPA: 8.04/10
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* HELP University */}
                  <div className="relative bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-emerald-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl overflow-hidden shadow-md flex-shrink-0 bg-white">
                        <img
                          src="/university/HELP University.png"
                          alt="HELP University"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                          <h4 className="text-base sm:text-lg font-bold text-gray-800">
                            HELP University
                          </h4>
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[10px] sm:text-xs font-semibold rounded-full w-fit">
                            Feb 2024
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm">
                          Kuala Lumpur, Malaysia
                        </p>
                        <p className="text-gray-700 mt-1 font-medium">
                          English Proficiency Program
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-teal-100 text-teal-700 text-xs rounded-full">
                            🌏 Academic Mobility
                          </span>
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full">
                            Cross-cultural Skills
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Interests Card */}
            <div className="group">
              <div className="bg-white/95 rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white text-lg sm:text-xl">🔬</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Research Interests
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    {
                      name: "Computer Vision",
                      color: "bg-blue-500",
                    },
                    {
                      name: "Time-Series Forecasting",
                      color: "bg-indigo-500",
                    },
                    {
                      name: "Explainable AI (XAI)",
                      color: "bg-purple-500",
                    },
                    {
                      name: "Financial ML",
                      color: "bg-pink-500",
                    },
                    {
                      name: "Object Detection",
                      color: "bg-cyan-500",
                    },
                    {
                      name: "Regime Detection",
                      color: "bg-amber-500",
                    },
                    {
                      name: "MLOps",
                      color: "bg-emerald-500",
                    },
                    {
                      name: "Federated Learning",
                      color: "bg-rose-500",
                    },
                    {
                      name: "Continual Learning",
                      color: "bg-violet-500",
                    },
                    {
                      name: "Open Source",
                      color: "bg-slate-600",
                    },
                  ].map((interest, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 ${interest.color} text-white text-sm font-medium rounded-full shadow-sm cursor-default hover:scale-105 transition-transform`}
                    >
                      {interest.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Tools - Full Width */}
          <div className="group">
            <div className="bg-white/95 rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white text-lg sm:text-xl">🛠️</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Tools & Technologies
                </h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {/* Languages */}
                <div>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Languages
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {["Python", "SQL", "Java", "LaTeX"].map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 text-white text-xs sm:text-sm font-medium rounded-full shadow-sm cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ML/DL Frameworks */}
                <div>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      ML/DL Frameworks
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {[
                      "PyTorch",
                      "TensorFlow",
                      "Keras",
                      "Hugging Face",
                      "Scikit-learn",
                    ].map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-500 text-white text-xs sm:text-sm font-medium rounded-full shadow-sm cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Computer Vision */}
                <div>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Computer Vision
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {["OpenCV", "YOLO", "Ultralytics"].map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500 text-white text-xs sm:text-sm font-medium rounded-full shadow-sm cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Research Areas */}
                <div>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Research Areas
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {["Federated Learning", "Continual Learning"].map(
                      (skill, i) => (
                        <span
                          key={i}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-pink-500 text-white text-xs sm:text-sm font-medium rounded-full shadow-sm cursor-default"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Dev Tools
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {[
                      "Git",
                      "Docker",
                      "Streamlit",
                      "Linux",
                      "Anaconda",
                      "Weights & Biases",
                    ].map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500 text-white text-xs sm:text-sm font-medium rounded-full shadow-sm cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Data Tools */}
                <div>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Data Tools
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Pandas", "NumPy", "Matplotlib"].map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-cyan-500 text-white text-sm font-medium rounded-full shadow-sm cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS ==================== */}
      <section
        id="projects"
        ref={setRef("projects")}
        className="py-12 px-4 sm:py-16 sm:px-8"
      >
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-medium rounded-full mb-4">
            💼 My Work
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full"></div>
          </div>
          <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            A selection of applied AI and research-oriented projects focusing on
            computer vision, time-series forecasting, and end-to-end machine
            learning systems.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Project 1 - Stock Forecasting */}
            <div className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              {/* Project Header with Gradient */}
              <div className="h-36 sm:h-48 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl sm:text-7xl">📈</span>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      Regime-Adaptive Stock Forecasting
                    </h3>
                    <p className="text-xs sm:text-sm text-indigo-600 font-medium mt-1">
                      Research Lead · Time-Series Forecasting
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    Active
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Developed a regime-aware forecasting framework combining
                  Hidden Markov Models and LSTM networks to model market state
                  transitions and improve robustness under non-stationary
                  financial conditions.
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Python", "HMM", "LSTM", "SHAP"].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <a
                    href="https://github.com/Am2uocVi3t"
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 - PPE Detection */}
            <div className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="h-36 sm:h-48 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl sm:text-7xl">🦺</span>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
              </div>

              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                      PPE Detection System
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-600 font-medium mt-1">
                      Deep Learning Engineer · Computer Vision
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Completed
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Consolidated multiple public datasets into a unified benchmark
                  for personal protective equipment detection and evaluated
                  modern object detection architectures for accuracy-latency
                  trade-offs.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["YOLOv8", "RT-DETR", "PyTorch", "OpenCV", "Streamlit"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-100"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <a
                    href="https://github.com/Am2uocVi3t"
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 - Billiards CV */}
            <div className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="h-36 sm:h-48 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl sm:text-7xl">🎱</span>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
              </div>

              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                      8-Ball Billiards Computer Vision
                    </h3>
                    <p className="text-xs sm:text-sm text-orange-600 font-medium mt-1">
                      AI Engineer · Real-time Vision
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Completed
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Built a real-time computer vision pipeline to detect billiard
                  balls, track trajectories, and infer scoring events using
                  hybrid rule-based logic and deep learning models.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["YOLOv8", "OpenCV", "Python", "Real-time"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-full border border-orange-100"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <a
                    href="https://github.com/Am2uocVi3t"
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 - Face Recognition */}
            <div className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="h-36 sm:h-48 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl sm:text-7xl">👤</span>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
              </div>

              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                      Face Recognition Attendance
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-600 font-medium mt-1">
                      Model Engineer · Biometric Systems
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Completed
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Built an end-to-end attendance system using OpenCV and Tkinter
                  with LBPH for recognition and Haar Cascades for real-time face
                  detection. Optimized for partial occlusions (glasses) and
                  varying lighting conditions.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["OpenCV", "LBPH", "Tkinter", "Haar Cascades"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full border border-purple-100"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <a
                    href="https://github.com/Am2uocVi3t"
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 5 - Traffic Management */}
            <div className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="h-36 sm:h-48 bg-gradient-to-br from-amber-500 via-yellow-500 to-lime-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl sm:text-7xl">🚗</span>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
              </div>

              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
                      Dynamic Traffic Management
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-600 font-medium mt-1">
                      Data & Model Engineer · Smart City
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Completed
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Developed a computer vision pipeline using YOLOv8 to detect
                  and classify vehicles from urban traffic cameras. Implemented
                  lane-level spatial analysis for automated mobile barrier
                  adjustments.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["YOLOv8", "OpenCV", "Python", "Lane Detection"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full border border-amber-100"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <a
                    href="https://github.com/Am2uocVi3t"
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 6 - NASA Space Apps */}
            <div className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="h-36 sm:h-48 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl sm:text-7xl">🌌</span>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
              </div>

              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-slate-600 transition-colors">
                      CosmicOptic - Exoplanet Detection
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                      NASA Space Apps Challenge 2025
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                    Hackathon
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Developed an AI pipeline to analyze stellar light-curve data
                  from the Kepler Mission to detect potentially habitable
                  exoplanets. Built a full-stack application with FastAPI for
                  real-time visualization.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "FastAPI",
                    "Signal Processing",
                    "Kepler Data",
                    "Full-stack",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-50 text-slate-700 text-xs font-medium rounded-full border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <a
                    href="https://github.com/Am2uocVi3t"
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-slate-600 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== RESEARCH ==================== */}
      <section
        id="research"
        ref={setRef("research")}
        className="py-12 px-4 sm:py-16 sm:px-8 bg-gradient-to-r from-blue-50/50 to-indigo-50/50"
      >
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
            🔬 Exploring Ideas
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Research
            </span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full"></div>
          </div>
          <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            My research interests focus on building robust, interpretable, and
            practical machine learning systems. I am particularly interested in
            how models adapt to distribution shifts and operate under real-world
            constraints.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {/* Research Directions - Bento Grid */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-3">
              <span className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white text-base sm:text-lg">
                🎯
              </span>
              Research Directions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                {
                  title: "Computer Vision",
                  desc: "Real-world perception systems for object detection and tracking",
                  icon: "👁️",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Time-Series Forecasting",
                  desc: "Financial prediction under non-stationarity and regime changes",
                  icon: "📊",
                  gradient: "from-indigo-500 to-purple-500",
                },
                {
                  title: "Explainable AI",
                  desc: "Model interpretability, SHAP analysis, and building trust in AI",
                  icon: "🔍",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  title: "Robust Learning",
                  desc: "Training under data drift, concept shift, and distribution changes",
                  icon: "🛡️",
                  gradient: "from-emerald-500 to-teal-500",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}
                    >
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Work - Featured Card */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-3">
              <span className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white text-base sm:text-lg">
                ⚡
              </span>
              Current Work
            </h3>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-orange-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-2 sm:px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                    In Progress
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-white text-orange-600 text-xs font-semibold rounded-full border border-orange-200">
                    SpeedyLabX · FPT University
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                    Targeting IJCNN/ICONIP
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                  Regime-Adaptive Stock Forecasting
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Leading research on hybrid probabilistic and deep learning
                  models (HMM-LSTM) for market state modeling and prediction.
                  Engineered features from OHLCV data (RSI, MACD) and integrated
                  Explainable AI (SHAP) to visualize regime-specific feature
                  importance. Conducted walk-forward validation using financial
                  metrics (Sharpe ratio, Maximum Drawdown).
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "HMM",
                    "LSTM",
                    "SHAP",
                    "Regime Detection",
                    "Walk-forward Validation",
                    "RSI/MACD",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white text-orange-700 text-xs font-medium rounded-full border border-orange-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Publications */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-3">
              <span className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white text-base sm:text-lg">
                📄
              </span>
              Publications & Preprints
            </h3>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-violet-100 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">📚</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Coming Soon
              </h4>
              <p className="text-gray-600 max-w-md mx-auto">
                Publications will be listed here as they become available.
                Future entries will include title, authors, abstract, and links
                to preprints or proceedings.
              </p>
            </div>
          </div>

          {/* Collaboration CTA */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-3">
              <span className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white text-base sm:text-lg">
                🤝
              </span>
              Collaboration
            </h3>
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl p-5 sm:p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative">
                <h4 className="text-xl sm:text-2xl font-bold mb-3">
                  Let's Work Together!
                </h4>
                <p className="text-emerald-50 leading-relaxed mb-4 sm:mb-6 max-w-2xl text-sm sm:text-base">
                  I am open to research collaboration, mentorship, and
                  discussion related to applied machine learning and AI
                  research. Whether you're a fellow student, researcher, or
                  industry professional, I'd love to connect and explore ideas
                  together.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:tyviet1609@gmail.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    Email Me
                  </a>
                  <a
                    href="https://www.linkedin.com/in/quoc-viet-huynh/"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-400/20 text-white font-semibold rounded-full hover:bg-emerald-400/30 transition-colors border border-white/30"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CERTIFICATIONS ==================== */}
      <section
        id="certifications"
        ref={setRef("certifications")}
        className="py-12 px-4 sm:py-16 sm:px-8"
      >
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-4">
            🏆 Achievements
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full"></div>
          </div>
          <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Selected certifications that support my background in artificial
            intelligence, machine learning, and software engineering. These
            complement my academic training with practical and ethical
            perspectives.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {/* Awards & Achievements - Horizontal Scroll */}
          <div className="overflow-visible">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-3">
              <span className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white text-base sm:text-lg">
                🏅
              </span>
              Awards & Achievements
            </h3>

            {/* Horizontal Scroll Container with fade edges */}
            <div className="relative">
              {/* Left fade indicator */}
              <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
              {/* Right fade indicator - shows more content available */}
              <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none flex items-center justify-end pr-2">
                <div className="w-8 h-8 rounded-full bg-white/80 shadow-md flex items-center justify-center animate-bounce-x">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              <div
                ref={awardsScrollRef}
                className="flex gap-6 overflow-x-scroll pb-4 px-4 scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {[
                  {
                    title: "FPT Hackathon",
                    org: "FPT University",
                    image: "/certifications/FPT Hackathon.png",
                  },
                  {
                    title: "NASA Space Apps Challenge",
                    org: "NASA Space App",
                    image: "/certifications/NASA Space Apps Challenge.png",
                  },
                  {
                    title: "Top 2 B-Learning JavaOOP",
                    org: "B-Learning Program",
                    image: "/certifications/Top2 B-Learning in JavaOOP.png",
                  },
                ].map((award, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      setLightboxImage({ src: award.image, title: award.title })
                    }
                    className="group flex-shrink-0 w-64 sm:w-80 bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-left cursor-pointer"
                  >
                    {/* Image Preview */}
                    <div className="h-40 sm:h-52 relative overflow-hidden bg-gray-100">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Hover overlay only */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                          View Certificate
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                        {award.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{award.org}</p>
                    </div>
                  </button>
                ))}

                {/* More Coming Soon Card */}
                <div className="flex-shrink-0 w-64 sm:w-80">
                  <div className="h-full rounded-xl sm:rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/50 flex flex-col items-center justify-center p-6 sm:p-8 min-h-[280px] sm:min-h-[320px]">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <h4 className="font-bold text-amber-700 text-lg">
                      More Coming
                    </h4>
                    <p className="text-amber-600/70 text-sm text-center mt-2">
                      Working towards more achievements!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Online Certifications Grid */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-3">
              <span className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white text-base sm:text-lg">
                📜
              </span>
              Professional Certifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {/* AI & ML Category */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-100">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm">
                    🤖
                  </span>
                  <h4 className="font-bold text-gray-800">
                    AI & Machine Learning
                  </h4>
                </div>
                <ul className="space-y-3">
                  {[
                    { name: "AI Foundations for Everyone", org: "IBM" },
                    { name: "Building RAG Agents with LLMs", org: "NVIDIA" },
                    { name: "AI Background Generator with NIM", org: "NVIDIA" },
                  ].map((cert, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          {cert.name}
                        </p>
                        <p className="text-xs text-gray-500">{cert.org}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Data & Software Category */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-emerald-100">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm">
                    💻
                  </span>
                  <h4 className="font-bold text-gray-800">Data & Software</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    { name: "Data Science Fundamentals", org: "Python & SQL" },
                    { name: "Full Stack Software Developer", org: "IBM" },
                    {
                      name: "Software Development Lifecycle",
                      org: "Professional",
                    },
                  ].map((cert, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          {cert.name}
                        </p>
                        <p className="text-xs text-gray-500">{cert.org}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ethics & Academic Category */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-100">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-sm">
                    📚
                  </span>
                  <h4 className="font-bold text-gray-800">Ethics & Academic</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    { name: "Ethics in the Age of AI", org: "Professional" },
                    { name: "Academic Skills for University", org: "Academic" },
                  ].map((cert, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          {cert.name}
                        </p>
                        <p className="text-xs text-gray-500">{cert.org}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CV ==================== */}
      <section
        id="cv"
        ref={setRef("cv")}
        className="py-12 px-4 sm:py-16 sm:px-8 bg-gradient-to-r from-blue-50/50 to-indigo-50/50"
      >
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full mb-4">
            📄 My Resume
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Curriculum Vitae
            </span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full"></div>
          </div>
          <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            This page provides an overview of my academic and technical
            background. A full ATS-optimized CV is available for download.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
          {/* Download Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 sm:w-8 h-6 sm:h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    ATS-Optimized Resume
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    PDF format • Ready for academic & internship applications
                  </p>
                </div>
              </div>
              <a
                href="/cv/ATS_Resume_ver2.pdf"
                download
                className="group flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <svg
                  className="w-5 h-5 group-hover:translate-y-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* CV Preview */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-700 text-center flex items-center justify-center gap-2">
              <svg
                className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Preview
            </h3>
            {/* Show message on mobile, iframe on larger screens */}
            <div className="block sm:hidden text-center p-6 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-600 text-sm">
                📄 Download the CV above to view on mobile devices
              </p>
            </div>
            <div
              className="hidden sm:block border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden bg-white w-full max-w-[850px] mx-auto shadow-lg"
              style={{ aspectRatio: "8.5 / 11" }}
            >
              <iframe
                src="/cv/ATS_Resume_ver2.pdf#view=FitH"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Certificate Images */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightboxImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-bold">
                {lightboxImage.title}
              </h3>
              <p className="text-white/70 text-sm mt-1">
                Click outside or press X to close
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
