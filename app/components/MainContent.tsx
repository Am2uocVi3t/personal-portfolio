"use client";

import { useEffect, useState } from "react";
import { contactLinks, navigation, ui, type Language, type Theme } from "../portfolio-data";
import PreferenceControls from "./PreferenceControls";
import SinglePageContent from "./SinglePageContent";
import CaseStudyContent from "./CaseStudyContent";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      {open ? (
        <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      )}
    </svg>
  );
}

function DownRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
      <path d="M5 5h10v10M15 5 5 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MainContent({ caseStudySlug }: { caseStudySlug?: string }) {
  const [activeSection, setActiveSection] = useState(caseStudySlug ? "research" : "home");
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("dark");
  const [preferencesReady, setPreferencesReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    try {
      const storedLanguage = window.localStorage.getItem("portfolio-language");
      const storedTheme = window.localStorage.getItem("portfolio-theme");
      if (storedLanguage === "en" || storedLanguage === "vi") setLanguage(storedLanguage);
      setTheme(storedTheme === "light" ? "light" : "dark");
    } catch { /* Defaults also work when browser storage is unavailable. */ }
    setPreferencesReady(true);

    const hash = window.location.hash.slice(1);
    if (hash) window.requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView());
  }, []);

  useEffect(() => {
    if (!preferencesReady) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0b0d11" : "#f3f4ef");
    try { window.localStorage.setItem("portfolio-theme", theme); } catch { /* Optional persistence. */ }
  }, [theme, preferencesReady]);

  useEffect(() => {
    if (!preferencesReady) return;
    document.documentElement.lang = language;
    try { window.localStorage.setItem("portfolio-language", language); } catch { /* Optional persistence. */ }
  }, [language, preferencesReady]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main section[id], main footer[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-18% 0px -62%", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const text = ui[language];

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <a href="#main-content" className="skip-link">
        {language === "en" ? "Skip to content" : "Bỏ qua đến nội dung"}
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href={caseStudySlug ? "/#home" : "#home"} aria-label="Huynh Quoc Viet, home">
            viet<span className="wordmark-dot">.</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`${caseStudySlug ? "/" : ""}#${item.id}`}
                className={activeSection === item.id ? "active" : undefined}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label[language]}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <PreferenceControls
              language={language}
              theme={theme}
              onLanguageChange={setLanguage}
              onThemeChange={setTheme}
              compact
            />
            <a href={contactLinks.linkedin} className="header-contact" target="_blank" rel="noopener noreferrer">
              {language === "en" ? "Contact" : "Liên hệ"}
            </a>
            <button
              type="button"
              className="menu-button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? text.close : text.menu}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>

        <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`${caseStudySlug ? "/" : ""}#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className={activeSection === item.id ? "active" : undefined}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              <span>{item.label[language]}</span>
              <DownRightIcon />
            </a>
          ))}
        </nav>
      </header>

      {caseStudySlug ? <CaseStudyContent slug={caseStudySlug} language={language} /> : <SinglePageContent language={language} />}
    </div>
  );
}
