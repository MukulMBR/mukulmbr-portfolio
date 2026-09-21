import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe, Layers, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { FEATURED_PROJECTS, PROFILE, type ProjectItem } from "@/lib/portfolio-schema";

function ProjectBentoCard({ project, index }: { project: ProjectItem; index: number }) {
  const isLarge = index < 2;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className={`bento-card bento-card-hover group relative overflow-hidden flex flex-col justify-between p-6 sm:p-7 ${
        isLarge ? "lg:col-span-6" : "lg:col-span-4"
      }`}
    >
      {/* Ambient gradient corner */}
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gradient-to-br ${project.accentGradient} opacity-30 blur-2xl transition-opacity group-hover:opacity-70`}
      />

      <div>
        {/* Card header */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400">
            Product {project.number}
          </span>
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-foreground/5 border border-border text-muted-foreground">
            {project.category}
          </span>
        </div>

        {/* Title & Overview */}
        <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-cyan-300 transition-colors">
          {project.name}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {project.overview}
        </p>

        {/* Architecture & Problem breakdown */}
        <div className="mt-5 space-y-2.5 rounded-xl bg-foreground/[0.02] border border-border/50 p-3 text-xs">
          <div className="flex items-start gap-2">
            <span className="text-[10px] font-mono font-bold uppercase text-muted-foreground shrink-0 w-16 pt-0.5">
              Problem:
            </span>
            <span className="text-foreground/90 leading-tight">{project.problem}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[10px] font-mono font-bold uppercase text-cyan-400 shrink-0 w-16 pt-0.5">
              Solution:
            </span>
            <span className="text-foreground/90 leading-tight">{project.architecture}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 shrink-0 w-16 pt-0.5">
              Impact:
            </span>
            <span className="text-emerald-300/90 font-medium leading-tight">{project.impact}</span>
          </div>
        </div>

        {/* Tech stack badges */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-foreground/[0.04] px-2.5 py-0.5 text-[10px] font-mono text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card footer CTA buttons */}
      <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("project_click", { project: project.name, dest: "github" })}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-foreground/5 hover:bg-foreground/10 px-3 py-1.5 text-xs font-semibold text-foreground transition"
            >
              <Github className="h-3.5 w-3.5" />
              <span>Source</span>
            </a>
          )}
        </div>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("project_click", { project: project.name, dest: "live_demo" })}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-3.5 py-1.5 text-xs font-extrabold text-slate-950 shadow-sm transition hover:scale-105"
          >
            <span>Live Platform</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : (
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            <span>Case Study</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function ProjectsBentoGrid() {
  return (
    <section id="work" className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 py-20 md:py-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-purple-300">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            Shipped Products
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Featured <span className="text-gradient-cyber">Case Studies</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            Real products solving real friction—healthcare portals, retail platforms, live transit tracking, and generative AI planning systems.
          </p>
        </div>

        <a
          href={PROFILE.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-2.5 text-xs sm:text-sm font-bold text-foreground hover:border-cyan-400/40 transition hover:bg-foreground/5"
        >
          <Github className="h-4 w-4" />
          <span>Explore All on GitHub</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-cyan-400" />
        </a>
      </div>

      {/* Asymmetric Bento Grid of 11 Projects */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
        {FEATURED_PROJECTS.map((project, idx) => (
          <ProjectBentoCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
