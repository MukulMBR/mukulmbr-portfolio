import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Brain, Code2, MessageCircle, Radio, Shield, Sparkles, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import { PROFILE } from "@/lib/portfolio-schema";

function FloatingBadge({
  icon: Icon,
  label,
  x,
  y,
  delay,
  accent,
}: {
  icon: any;
  label: string;
  x: string;
  y: string;
  delay: number;
  accent: string;
}) {
  return (
    <motion.div
      className="pointer-events-none absolute hidden lg:flex items-center gap-2 rounded-full px-3 py-1.5 glass-strong shadow-lg"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay }}
    >
      <span className={`grid h-6 w-6 place-items-center rounded-full bg-gradient-to-tr ${accent} text-slate-950 font-bold`}>
        <Icon className="h-3.5 w-3.5" />
      </span>
      <span className="text-[11px] font-mono font-medium text-foreground/90">{label}</span>
    </motion.div>
  );
}

function ParticleAcousticCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = 540);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      color: string;
    }> = [];

    const colors = ["rgba(0, 240, 255, ", "rgba(129, 140, 248, ", "rgba(16, 185, 129, "];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 0.8,
        alpha: Math.random() * 0.45 + 0.15,
        color: colors[i % colors.length],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting wave lines between close nodes
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.12 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    const onResize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = 540;
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0 h-[540px] w-full" />;
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const reduce = useReducedMotion();

  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yGlow = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <div ref={containerRef} id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <ParticleAcousticCanvas />

      {/* Subtle grid and ambient cyber glow */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <motion.div
        style={{ y: reduce ? 0 : yGlow }}
        className="pointer-events-none absolute -top-44 left-1/2 h-[550px] w-[1100px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        aria-hidden
      >
        <div className="h-full w-full bg-gradient-aurora animate-aurora" />
      </motion.div>

      {/* Floating telemetry pills (antigravity aesthetic) */}
      <div className="pointer-events-none absolute inset-0 max-w-7xl mx-auto">
        <FloatingBadge
          icon={Radio}
          label="8D HRTF WebAudio"
          x="78%"
          y="18%"
          delay={0.3}
          accent="from-cyan-400 to-blue-500"
        />
        <FloatingBadge
          icon={Code2}
          label="React 19 & TypeScript"
          x="84%"
          y="42%"
          delay={0.6}
          accent="from-indigo-400 to-purple-500"
        />
        <FloatingBadge
          icon={Brain}
          label="Gemini Multimodal AI"
          x="75%"
          y="68%"
          delay={0.9}
          accent="from-emerald-400 to-teal-500"
        />
        <FloatingBadge
          icon={Shield}
          label="100% Client-Side Privacy"
          x="10%"
          y="72%"
          delay={1.1}
          accent="from-amber-400 to-orange-500"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
        <motion.div style={{ y: reduce ? 0 : yText, opacity }} className="relative z-10 max-w-4xl">
          {/* Live availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md shadow-sm shadow-emerald-500/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{PROFILE.availability}</span>
          </motion.div>

          {/* Master Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-[42px] sm:text-[62px] md:text-[80px] font-extrabold leading-[1.03] tracking-tight text-foreground"
          >
            Engineering <span className="text-gradient-cyber">spatial web apps</span> &{" "}
            <span className="shimmer-text">browser-native engines.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground"
          >
            Hi, I'm <strong className="text-foreground font-semibold">{PROFILE.name}</strong>. I architect
            complete digital products—from <span className="text-cyan-400">28 client-side WebAudio DSP engines</span> to
            real-time transit radars, mobile applications, and intelligent systems.
          </motion.p>

          {/* Call to action cluster */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#motion-hub"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-glow transition hover:scale-105 active:scale-95"
            >
              <span>Explore Motion Hub (28 Engines)</span>
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border glass px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-cyan-400/40 hover:bg-foreground/5 active:scale-95"
            >
              <span>View Shipped Work</span>
            </a>

            <a
              href={PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-3.5 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20 active:scale-95"
            >
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              <span className="hidden sm:inline">WhatsApp Direct</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Bento Metric Telemetry Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 gap-3.5 md:grid-cols-4 md:gap-5"
        >
          {PROFILE.stats.map((s, idx) => (
            <div
              key={s.label}
              className="bento-card bento-card-hover relative overflow-hidden p-5 sm:p-6"
            >
              <div
                className={`pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full blur-xl ${
                  idx === 0
                    ? "bg-cyan-500/20"
                    : idx === 1
                    ? "bg-indigo-500/20"
                    : idx === 2
                    ? "bg-emerald-500/20"
                    : "bg-purple-500/20"
                }`}
              />
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                {s.value}
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-bold text-foreground/90">{s.label}</div>
              <div className="text-[11px] font-mono text-muted-foreground mt-0.5">{s.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
