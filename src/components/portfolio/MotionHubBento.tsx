import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Mic, Radio, Shield, Sparkles, Video, Zap } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { MOTION_HUB_SUITES, PROFILE, type MotionHubEngine } from "@/lib/portfolio-schema";

export function MotionHubBento() {
  const [selectedSuite, setSelectedSuite] = useState<string>("all");

  const allEngines: MotionHubEngine[] = MOTION_HUB_SUITES.flatMap((s) => s.engines);
  const filteredEngines =
    selectedSuite === "all"
      ? allEngines
      : allEngines.filter((e) => e.suite === selectedSuite);

  const suiteIcons: Record<string, any> = {
    audio: Mic,
    video: Video,
    radar: Radio,
    utility: Shield,
  };

  return (
    <section id="motion-hub" className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 py-20 md:py-32">
      {/* Ambient glow backdrop */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Flagship Engineering Platform
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            MBR Motion Hub <span className="text-gradient-cyber">Spatial Studio</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            28 production-grade multimedia engines running <strong className="text-foreground">100% in client-side RAM</strong>.
            Zero server dependencies, zero data leakage, and near-zero latency.
          </p>
        </div>

        {/* Action button */}
        <div className="flex items-center gap-3">
          <a
            href={PROFILE.motionHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("cta_click", { id: "launch_full_hub" })}
            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 px-5 py-3 text-xs sm:text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
          >
            <span>Launch All 28 Engines</span>
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Suite Filter Tabs */}
      <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedSuite("all")}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
            selectedSuite === "all"
              ? "bg-foreground text-background shadow-md"
              : "border border-border glass text-muted-foreground hover:text-foreground"
          }`}
        >
          All 28 Engines
        </button>

        {MOTION_HUB_SUITES.map((suite) => {
          const Icon = suiteIcons[suite.id] || Sparkles;
          const isActive = selectedSuite === suite.id;
          return (
            <button
              key={suite.id}
              onClick={() => setSelectedSuite(suite.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                isActive
                  ? "bg-gradient-cyber text-slate-950 shadow-md shadow-cyan-400/20"
                  : "border border-border glass text-muted-foreground hover:text-foreground hover:border-cyan-400/30"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{suite.title}</span>
              <span className="text-[10px] opacity-75 font-mono">({suite.engines.length})</span>
            </button>
          );
        })}
      </div>

      {/* Flagship Interactive Feature Card (8D Spatial & Vocal Isolator Spotlight) */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7 bento-card relative overflow-hidden p-6 sm:p-8 flex flex-col justify-between">
          <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />
          
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400">
                <Radio className="h-4 w-4 animate-pulse" />
                <span>WebAudio DSP Radar — Tool #22 & #21</span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                HRTF 360° Acoustic Orbit
              </span>
            </div>

            <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-foreground">
              8D Spatial Audio & Mid-Side Vocal Isolator
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Binaural audio panning dynamically moves acoustic coordinates around a simulated 3D listener sphere.
              Integrated with in-memory phase inversion to cancel center-panned lead vocals without uploading megabytes to a server.
            </p>

            {/* Visual acoustic waveform animation */}
            <div className="mt-6 p-4 rounded-2xl border border-border/60 bg-foreground/[0.02] flex items-center justify-between gap-1.5 h-16">
              {Array.from({ length: 36 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1.5 bg-gradient-to-t from-cyan-500 to-indigo-400 rounded-full"
                  style={{
                    height: `${Math.max(15, (Math.sin(i * 0.4) * 0.5 + 0.5) * 100)}%`,
                    animation: "pulse-glow 2s ease-in-out infinite",
                    animationDelay: `${(i % 8) * 0.15}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-border flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>AudioWorklet DSP: 0ms Network Latency</span>
            </div>
            <a
              href="https://tools.mukulmbr.in/?tool=spatial-audio-8d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-cyan-400 hover:text-cyan-300 group"
            >
              <span>Launch 8D Engine</span>
              <ChevronRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* 3D Safe-Zone Simulator Spotlight (Tool #20) */}
        <div className="lg:col-span-5 bento-card relative overflow-hidden p-6 sm:p-8 flex flex-col justify-between">
          <div className="pointer-events-none absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-purple-500/15 blur-3xl" />

          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-purple-400">
                <Video className="h-4 w-4" />
                <span>Shorts & Reels Safe-Zone — Tool #20</span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-400/10 text-purple-300 border border-purple-400/20">
                CSS 3D Viewport
              </span>
            </div>

            <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-foreground">
              9:16 Video Safe-Zone Simulator
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Test vertical Reels, Shorts, and TikToks against right-rail UI buttons, bottom caption tickers, and 1:1 Instagram profile crop boundaries.
            </p>

            <div className="mt-6 flex items-center justify-center p-3 rounded-2xl bg-foreground/[0.03] border border-border/50 text-xs font-mono text-muted-foreground">
              <span>Resolution: 1080×1920 (9:16) · Safe Bounds: y=420 to y=1500</span>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-border flex items-center justify-between flex-wrap gap-3">
            <span className="text-xs font-mono text-muted-foreground">50+ Phone Frames</span>
            <a
              href="https://tools.mukulmbr.in/?tool=safe-zone-simulator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-purple-400 hover:text-purple-300 group"
            >
              <span>Test Safe Zone</span>
              <ChevronRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Bento Grid of Filtered Engines */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEngines.map((engine) => (
          <a
            key={engine.id}
            href={engine.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("engine_click", { engine: engine.name })}
            className="bento-card bento-card-hover group p-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-foreground/10 text-cyan-400 border border-cyan-400/20">
                  {engine.number}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  {engine.clientSideTech}
                </span>
              </div>

              <h4 className="font-display text-base font-bold text-foreground group-hover:text-cyan-300 transition-colors">
                {engine.name}
              </h4>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {engine.description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-border/50 flex items-center justify-between text-xs">
              <span className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {engine.tagline}
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
