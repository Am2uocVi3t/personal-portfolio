"use client";

import type { Language, Theme } from "../portfolio-data";
import { ui } from "../portfolio-data";

interface PreferenceControlsProps {
  language: Language;
  theme: Theme;
  onLanguageChange: (language: Language) => void;
  onThemeChange: (theme: Theme) => void;
  compact?: boolean;
}

export default function PreferenceControls({
  language,
  theme,
  onLanguageChange,
  onThemeChange,
}: PreferenceControlsProps) {
  const text = ui[language];
  const themeLabel = language === "en"
    ? `Switch to ${theme === "dark" ? "light" : "dark"} mode`
    : `Chuyển sang giao diện ${theme === "dark" ? "sáng" : "tối"}`;

  return (
    <div className="preference-controls" role="group" aria-label={language === "en" ? "Display preferences" : "Tùy chọn hiển thị"}>
      <button
        type="button"
        onClick={() => onLanguageChange(language === "en" ? "vi" : "en")}
        aria-label={text.switchLanguage}
        title={text.switchLanguage}
      >
        {language === "en" ? "VI" : "EN"}
      </button>
      <button
        type="button"
        onClick={() => onThemeChange(theme === "light" ? "dark" : "light")}
        aria-label={themeLabel}
        title={themeLabel}
      >
        {theme === "light" ? (
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.35 4.35l1.4 1.4M14.25 14.25l1.4 1.4M15.65 4.35l-1.4 1.4M5.75 14.25l-1.4 1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="10" cy="10" r="3.25" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        ) : (
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M16.25 12.15A6.75 6.75 0 0 1 7.85 3.75a6.75 6.75 0 1 0 8.4 8.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </div>
  );
}
