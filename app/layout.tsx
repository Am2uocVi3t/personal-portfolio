import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Huynh Quoc Viet | Verifiable AI Systems",
  description:
    "Research and engineering portfolio of Huynh Quoc Viet: trustworthy machine learning, time-series forecasting, computer vision, reinforcement learning, and evidence-backed AI systems.",
  keywords: [
    "Huynh Quoc Viet",
    "AI Researcher",
    "Machine Learning Engineer",
    "Trustworthy AI",
    "Conformal Prediction",
    "Time-Series Forecasting",
    "Computer Vision",
    "Reinforcement Learning",
  ],
  authors: [{ name: "Huynh Quoc Viet" }],
  openGraph: {
    title: "Huynh Quoc Viet | Verifiable AI Systems",
    description: "Evidence-backed AI research, engineering systems, competition work, and Master CV.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0d11",
};

const themeScript = `
  try {
    const saved = localStorage.getItem('portfolio-theme');
    const dark = saved !== 'light';
    document.documentElement.classList.toggle('dark', dark);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0b0d11' : '#f3f4ef');
  } catch (_) {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/geist-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
