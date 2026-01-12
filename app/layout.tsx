import "./globals.css";
import MainContent from "./components/MainContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Huynh Quoc Viet | Portfolio",
  description:
    "Portfolio of Huynh Quoc Viet - AI student at FPT University focused on computer vision, financial time-series forecasting, and explainable AI.",
  keywords: [
    "Huynh Quoc Viet",
    "AI",
    "Machine Learning",
    "Computer Vision",
    "Time-Series Forecasting",
    "FPT University",
    "Deep Learning",
  ],
  authors: [{ name: "Huynh Quoc Viet" }],
  openGraph: {
    title: "Huynh Quoc Viet | Portfolio",
    description:
      "Portfolio of Huynh Quoc Viet - AI student focused on computer vision and time-series forecasting.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient-to-b from-gray-50 to-white text-gray-900 antialiased overflow-hidden">
        <MainContent />
      </body>
    </html>
  );
}
