import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MainContent from "../../components/MainContent";
import { papers } from "../../portfolio-data";
import { researchStudies } from "../../research-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return researchStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = researchStudies.find((item) => item.slug === slug);
  if (!study) return {};
  const paper = papers[study.paperIndex];
  return {
    title: `${paper.displayTitle} | Huynh Quoc Viet`,
    description: paper.summary.en,
    openGraph: { title: `${paper.displayTitle} | Huynh Quoc Viet`, description: paper.summary.en, type: "article" },
  };
}

export default async function ResearchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!researchStudies.some((study) => study.slug === slug)) notFound();
  return <MainContent caseStudySlug={slug} />;
}
