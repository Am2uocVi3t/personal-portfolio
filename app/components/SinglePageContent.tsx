"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  certifications,
  contactLinks,
  competitions,
  education,
  papers,
  projects,
  proofSignals,
  skillLines,
  socialLinks,
  ui,
  type Language,
  type LocalizedText,
} from "../portfolio-data";

interface SinglePageContentProps {
  language: Language;
}

function ExternalArrow() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
      <path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuPlus() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5 transition-transform duration-200 group-open:rotate-45">
      <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function SectionIntro({ title, lead, inverse = false }: { title: string; lead: string; inverse?: boolean }) {
  return (
    <div className={`section-intro ${inverse ? "text-white" : "text-[var(--ink)]"}`}>
      <h2>{title}</h2>
      <p>{lead}</p>
    </div>
  );
}

function localized(value: LocalizedText, language: Language) {
  return value[language];
}

export default function SinglePageContent({ language }: SinglePageContentProps) {
  const text = ui[language];
  const [showCv, setShowCv] = useState(true);
  const certificationsRef = useRef<HTMLDivElement>(null);

  function scrollCertifications(direction: number) {
    const rail = certificationsRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * (rail.firstElementChild?.getBoundingClientRect().width ?? rail.clientWidth) + direction * 24, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  return (
    <main id="main-content">
      <section id="home" className="hero-section" aria-labelledby="hero-title">
        <div className="hero-content site-shell">
          <div className="hero-meta">
            <p>Huynh Quoc Viet</p>
            <p>{text.role}</p>
          </div>

          <div className="hero-main">
            <div className="hero-copy">
              <h1 id="hero-title" className="hero-title">
                <span className="hero-title-light">VERIFIABLE</span>
                <span className="hero-title-blue">AI SYSTEMS</span>
              </h1>
              <p className="hero-lead">{text.heroLead}</p>
              <p className="hero-availability"><span aria-hidden="true" />{text.availability}</p>
              <div className="hero-actions">
                <a href="#research" className="action-link action-link-primary">
                  {text.viewWork}<ExternalArrow />
                </a>
                <a href={contactLinks.linkedin} className="text-link" target="_blank" rel="noopener noreferrer">{text.contact}</a>
              </div>
            </div>
            <figure className="hero-portrait">
              <div className="hero-photo">
                <Image src="/images/me_in_NASASpacaApp25.jpg" alt={language === "en" ? "Huynh Quoc Viet working at NASA Space Apps 2025" : "Huỳnh Quốc Việt làm việc tại NASA Space Apps 2025"} fill priority sizes="(max-width: 800px) 92vw, 36vw" className="object-cover" />
              </div>
              <figcaption><span>NASA Space Apps</span><span>2025</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label={language === "en" ? "Selected proof" : "Bằng chứng tiêu biểu"}>
        <div className="site-shell proof-grid">
          {proofSignals.map((signal) => (
            <div key={signal.value} className="proof-item">
              <strong>{signal.value}</strong>
              <span>{localized(signal.label, language)}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="research" className="page-section surface-paper content-auto">
        <div className="site-shell">
          <SectionIntro title={text.researchTitle} lead={text.researchLead} />

          <div className="research-list">
            {papers.map((paper) => (
              <article key={paper.title} className="research-row">
                <div className="research-body">
                  <h3>{paper.displayTitle}</h3>
                  <p className="paper-full-title">{paper.title}</p>
                  <p className="research-summary">{localized(paper.summary, language)}</p>
                  <ul className="evidence-list">
                    {paper.facts.map((fact) => (
                      <li key={fact.en}>{localized(fact, language)}</li>
                    ))}
                  </ul>
                  <a className="inline-link" href={paper.link} target="_blank" rel="noreferrer">
                    {text.paper}
                    <ExternalArrow />
                  </a>
                </div>
                <div className="research-meta">
                  <a className="paper-preview" href={paper.link} target="_blank" rel="noreferrer" aria-label={`${text.paper}: ${paper.title}`}>
                    <Image src={paper.image} alt={language === "en" ? `First page of ${paper.title}` : `Trang đầu: ${paper.title}`} width={640} height={850} sizes="(max-width: 680px) 70vw, 25vw" />
                  </a>
                  <p>{paper.venue}</p>
                  <p>{localized(paper.status, language)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="page-section surface-yellow content-auto">
        <div className="site-shell">
          <SectionIntro title={text.systemsTitle} lead={text.systemsLead} />

          <figure className="workspace-photo">
            <Image src="/images/behindme_in_FPTHackaton.jpg" alt={language === "en" ? "Working through code with teammates at FPT Hackathon" : "Cùng đồng đội làm việc với mã nguồn tại FPT Hackathon"} fill sizes="92vw" className="object-cover" />
          </figure>

          <div className="project-ledger">
            {projects.map((project, index) => (
              <details key={project.title} className="project-row group" open={index === 0}>
                <summary>
                  <span className="project-name">
                    <strong>{project.title}</strong>
                    <span>{localized(project.subtitle, language)}</span>
                  </span>
                  <span className="project-role">
                    {localized(project.role, language)}
                    <small>{project.period}</small>
                    {"status" in project ? <small>{localized(project.status, language)}</small> : null}
                  </span>
                  <span className="project-toggle" aria-hidden="true">
                    <MenuPlus />
                  </span>
                </summary>
                <div className="project-detail">
                  <ul className="evidence-list evidence-list-dark">
                    {project.facts.map((fact) => (
                      <li key={fact.en}>{localized(fact, language)}</li>
                    ))}
                  </ul>
                  <div className="project-foot">
                    <p>{project.tags.join(" · ")}</p>
                    {project.link ? <a className="inline-link" href={project.link} target="_blank" rel="noreferrer">
                      {language === "en"
                        ? `Explore ${project.title} source and documentation on GitHub`
                        : `Xem mã nguồn và tài liệu ${project.title} trên GitHub`}
                      <ExternalArrow />
                    </a> : <p>{language === "en" ? "Research materials are not publicly available." : "Tài liệu nghiên cứu chưa được công khai."}</p>}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="fieldwork" className="page-section surface-ink content-auto">
        <div className="site-shell">
          <SectionIntro title={text.fieldworkTitle} lead={text.fieldworkLead} />

          <article className="vaic-feature">
            <div className="vaic-image-wrap">
              <Image
                src="/images/VAIC2026_team.jpg"
                alt={language === "en" ? "The team on stage at VAIC 2026" : "Đội thi trên sân khấu VAIC 2026"}
                fill
                sizes="(max-width: 767px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <div className="vaic-copy">
              <h3>VAIC 2026</h3>
              <p className="vaic-role">
                BioListen VN · {localized(competitions[0].role, language)} ·{" "}
                <a href={competitions[0].link} target="_blank" rel="noreferrer">GitHub</a>
              </p>
              <div className="vaic-heading">
                <p>{competitions[0].period}</p>
                <p>{localized(competitions[0].status, language)}</p>
              </div>
              <p>{localized(competitions[0].description, language)}</p>
              <p>{localized(competitions[0].detail, language)}</p>
            </div>
          </article>

          <div className="competition-list">
            {competitions.slice(1).map((competition) => (
              <article key={competition.title} className="competition-row">
                <div className="competition-main">
                  <h3>{competition.title}</h3>
                  <p className="competition-role">{localized(competition.role, language)}</p>
                  <p>{localized(competition.description, language)}</p>
                </div>
                <div className="competition-meta">
                  {"photo" in competition ? (
                    <div className="competition-photo">
                      <Image src={competition.photo} alt={competition.title} fill sizes="(max-width: 680px) 92vw, 25vw" className="object-cover" />
                    </div>
                  ) : null}
                  <p>{competition.period}</p>
                  <p>{localized(competition.status, language)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="profile" className="page-section surface-paper content-auto">
        <div className="site-shell">
          <SectionIntro title={text.profileTitle} lead={text.profileLead} />

          <div className="profile-grid">
            <div className="education-list">
              {education.map((item) => (
                <article key={item.school}>
                  <div className="university-image">
                    <Image src={item.image} alt={`${item.school} logo`} width={360} height={160} sizes="(max-width: 680px) 80vw, 35vw" />
                  </div>
                  <div className="education-copy">
                  <h3>{item.school}</h3>
                  <p>{localized(item.degree, language)}</p>
                  <p>{localized(item.period, language)} · {localized(item.detail, language)}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="skill-list">
              {skillLines.map((line) => (
                <div key={line.title.en}>
                  <p><strong>{localized(line.title, language)}: </strong>{line.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="recognition-heading">
            <h3>{language === "en" ? "Certifications & recognition" : "Chứng chỉ & thành tích"}</h3>
            <div className="rail-controls" role="group" aria-label={language === "en" ? "Browse certifications" : "Duyệt chứng chỉ"}>
              <button type="button" onClick={() => scrollCertifications(-1)} aria-controls="certifications-rail" aria-label={language === "en" ? "Previous certifications" : "Chứng chỉ trước"}><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m11 5-5 5 5 5M6 10h10" stroke="currentColor" strokeWidth="1.6" /></svg></button>
              <button type="button" onClick={() => scrollCertifications(1)} aria-controls="certifications-rail" aria-label={language === "en" ? "Next certifications" : "Chứng chỉ tiếp theo"}><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m9 5 5 5-5 5M4 10h10" stroke="currentColor" strokeWidth="1.6" /></svg></button>
            </div>
          </div>
          <div id="certifications-rail" className="recognition-grid" ref={certificationsRef} role="region" aria-label={language === "en" ? "Certifications" : "Chứng chỉ"} tabIndex={0}>
            {certifications.map((item) => (
              <a
                key={item.title.en}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="recognition-item group"
              >
                <span className="recognition-image">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
                  />
                </span>
                <span className="recognition-copy">
                  <strong>{localized(item.title, language)}</strong>
                  <span>{item.issuer}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="cv" className="page-section surface-cv content-auto">
        <div className="site-shell">
          <SectionIntro title={text.cvTitle} lead={text.cvLead} />
          <div className="cv-actions">
            <a className="action-link action-link-primary" href="/cv/ATS_Resume_master.pdf" target="_blank" rel="noreferrer">
              {text.openCv}
              <ExternalArrow />
            </a>
            <a className="text-link" href="/cv/ATS_Resume_master.pdf" download>
              {text.downloadCv}
            </a>
            <button type="button" className="text-link" onClick={() => setShowCv((value) => !value)} aria-expanded={showCv} aria-controls="cv-preview">
              {showCv ? text.closePreview : text.previewCv}
            </button>
          </div>

          {showCv ? (
            <div id="cv-preview" className="cv-preview">
              <iframe src="/cv/ATS_Resume_master.pdf#view=FitH" title="Huynh Quoc Viet Master CV" loading="lazy" />
            </div>
          ) : null}
        </div>
      </section>

      <footer id="contact" className="contact-section">
        <div className="site-shell contact-grid">
          <div>
            <h2>{text.contactTitle}</h2>
            <p>{text.contactLead}</p>
          </div>
          <div className="contact-links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                {link.label}
                <ExternalArrow />
              </a>
            ))}
          </div>
        </div>
        <div className="site-shell footer-line">
          <p>{text.location}</p>
          <p>© {new Date().getFullYear()} Huynh Quoc Viet</p>
        </div>
      </footer>
    </main>
  );
}
