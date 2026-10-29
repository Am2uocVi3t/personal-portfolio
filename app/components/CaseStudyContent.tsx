"use client";

import Link from "next/link";
import { papers, type Language } from "../portfolio-data";
import { researchStudies } from "../research-data";
import ResearchGallery from "./ResearchGallery";

export default function CaseStudyContent({ slug, language }: { slug: string; language: Language }) {
  const study = researchStudies.find((item) => item.slug === slug)!;
  const paper = papers[study.paperIndex];
  const next = researchStudies[(study.paperIndex + 1) % researchStudies.length];
  const vi = language === "vi";
  const figures = [...study.figures, { src: paper.image, title: { en: "Manuscript", vi: "Bản thảo" }, caption: { en: paper.title, vi: paper.title } }];

  return (
    <main id="main-content" className="case-study">
      <section className="case-hero site-shell" aria-labelledby="case-title">
        <Link href="/#research" className="inline-link">← {vi ? "Tất cả nghiên cứu" : "All research"}</Link>
        <div className="case-meta"><span>{paper.venue}</span><span>{paper.status[language]}</span></div>
        <h1 id="case-title">{study.heading[language]}</h1>
        <p className="case-full-title">{paper.title}</p>
        <p className="case-lead">{paper.summary[language]}</p>
        <div className="research-actions">
          <a href="#study-figures" className="action-link action-link-primary">{vi ? "Khám phá nghiên cứu" : "Explore the study"} ↓</a>
          <a href={paper.link} target="_blank" rel="noreferrer" className="inline-link">{vi ? "Paper trên OpenReview" : "Paper on OpenReview"} ↗</a>
        </div>
      </section>

      <section id="study-figures" className="page-section surface-ink" aria-labelledby="figures-title">
        <div className="site-shell">
          <div className="case-section-heading"><h2 id="figures-title">{vi ? "Bên trong nghiên cứu." : "Inside the research."}</h2><p>{vi ? "Phương pháp, kết quả và bản thảo gốc." : "Methods, results and the original manuscript."}</p></div>
          <ResearchGallery figures={figures} language={language} />
        </div>
      </section>

      <section className="page-section surface-paper" aria-labelledby="question-title">
        <div className="site-shell case-reading-grid">
          <h2 id="question-title">{vi ? "Câu hỏi nghiên cứu." : "The research question."}</h2>
          <div className="case-prose"><p>{study.question[language]}</p><h3>{vi ? "Cách tiếp cận" : "The approach"}</h3><p>{study.approach[language]}</p></div>
        </div>
        <ol className="site-shell case-method-steps">
          {study.steps.map((step, index) => <li key={step.title.en}><span className="case-step-number">0{index + 1}</span><h3>{step.title[language]}</h3><p>{step.description[language]}</p></li>)}
        </ol>
      </section>

      <section className="page-section surface-cv" aria-labelledby="evidence-title">
        <div className="site-shell case-reading-grid">
          <h2 id="evidence-title">{vi ? "Kết quả & giới hạn." : "Results & boundaries."}</h2>
          <div className="case-prose">
            <ul className="evidence-list">{paper.facts.map((fact) => <li key={fact.en}>{fact[language]}</li>)}</ul>
            <div className="case-limit"><h3>{vi ? "Giới hạn cần giữ rõ" : "What the evidence cannot claim"}</h3><p>{study.limitation[language]}</p></div>
            <h3>{vi ? "Bài học rút ra" : "What this changes"}</h3><p>{study.takeaway[language]}</p>
            <a href={paper.link} target="_blank" rel="noreferrer" className="inline-link">{vi ? "Xem nguồn bài báo" : "View the paper source"} ↗</a>
          </div>
        </div>
      </section>
      <footer className="case-footer site-shell">
        <Link href="/#research" className="text-link">← {vi ? "Trở về portfolio" : "Back to portfolio"}</Link>
        <Link href={`/research/${next.slug}`} className="case-next"><span>{vi ? "Nghiên cứu tiếp theo" : "Next study"}</span><strong>{next.heading[language]} →</strong></Link>
      </footer>
    </main>
  );
}
