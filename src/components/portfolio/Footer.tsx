import { ArrowUp, Github, Linkedin, Mail, MessageCircle, Radio } from "lucide-react";
import { PROFILE } from "@/lib/portfolio-schema";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background/80 py-12 relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & tagline */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-tr from-cyan-400 to-indigo-500 text-[10px] font-black text-slate-950">
              M
            </span>
            <span className="font-display text-sm font-bold text-foreground">Mukul Bushi Reddy M</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Architecting high-performance web engineering applications & browser-native spatial tools.
          </p>
        </div>

        {/* Social and quick links */}
        <div className="flex items-center gap-4 text-xs">
          <a
            href={PROFILE.motionHubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-bold"
          >
            <Radio className="h-3.5 w-3.5" />
            <span>Motion Hub (28 Tools)</span>
          </a>

          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <a
            href={PROFILE.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-full border border-border glass text-muted-foreground hover:text-foreground hover:border-cyan-400/40 transition"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border/40 text-center text-[11px] font-mono text-muted-foreground">
        © {new Date().getFullYear()} Mukul Bushi Reddy M · All rights reserved · Built with React 19, Vite & Tailwind v4
      </div>
    </footer>
  );
}
