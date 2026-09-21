import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { initScrollDepth } from "@/lib/analytics";
import { FEATURED_PROJECTS, PROFILE } from "@/lib/portfolio-schema";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { EvolutionTimeline } from "@/components/portfolio/EvolutionTimeline";
import { ExpertiseMatrix } from "@/components/portfolio/ExpertiseMatrix";
import { Footer } from "@/components/portfolio/Footer";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { MotionHubBento } from "@/components/portfolio/MotionHubBento";
import { Navbar } from "@/components/portfolio/Navbar";
import { ProjectsBentoGrid } from "@/components/portfolio/ProjectsBentoGrid";

const OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/kKBXKzFqTYM1g1UYtrGl0suxJh12/social-images/social-1781625241275-Gemini_Generated_Image_v848u6v848u6v848.webp";

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mukul's Featured Engineering Projects",
  itemListElement: FEATURED_PROJECTS.map((p, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": p.codeUrl ? "SoftwareSourceCode" : "CreativeWork",
      name: p.name,
      description: p.overview,
      ...(p.codeUrl ? { codeRepository: p.codeUrl, programmingLanguage: p.stack } : {}),
      ...(p.liveUrl ? { url: p.liveUrl } : {}),
      author: { "@type": "Person", name: PROFILE.name, url: PROFILE.portfolioUrl },
    },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${PROFILE.name} — ${PROFILE.headline}` },
      {
        name: "description",
        content:
          "Portfolio of Mukul Bushi Reddy M, building high-performance web engineering applications, 28 browser-native studio engines (MBR Motion Hub), WebAudio DSP, 3D spatial telemetry, and React architectures.",
      },
      { property: "og:title", content: `${PROFILE.name} — ${PROFILE.headline}` },
      {
        property: "og:description",
        content:
          "Portfolio of Mukul Bushi Reddy M, building high-performance web engineering applications, 28 browser-native studio engines (MBR Motion Hub), WebAudio DSP, 3D spatial telemetry, and React architectures.",
      },
      { property: "og:url", content: PROFILE.portfolioUrl },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Mukul — Web Engineering Architect Portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${PROFILE.name} — ${PROFILE.headline}` },
      {
        name: "twitter:description",
        content:
          "Portfolio of Mukul Bushi Reddy M, building high-performance web engineering applications, 28 browser-native studio engines (MBR Motion Hub), WebAudio DSP, 3D spatial telemetry, and React architectures.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: PROFILE.portfolioUrl }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(projectsJsonLd) },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  useEffect(() => {
    initScrollDepth();
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-cyan-400/25 selection:text-cyan-300">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        {/* 1. Kinetic Hero with 3D Telemetry */}
        <HeroSection />

        {/* 2. Flagship Innovation: MBR Motion Hub (28 Browser Engines) */}
        <MotionHubBento />

        {/* 3. Featured Case Studies & Projects (11 Projects Bento Grid) */}
        <ProjectsBentoGrid />

        {/* 4. Core Technical Stack & Live GitHub Stream */}
        <ExpertiseMatrix />

        {/* 5. Evolutionary Milestones & Timeline */}
        <EvolutionTimeline />

        {/* 6. Direct Contact & Dispatch Terminal */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
