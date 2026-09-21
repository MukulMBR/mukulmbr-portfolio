import { motion } from "framer-motion";
import { CircleDot, Sparkles } from "lucide-react";
import { TIMELINE_MILESTONES } from "@/lib/portfolio-schema";

export function EvolutionTimeline() {
  return (
    <section id="timeline" className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 py-20 md:py-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-teal-300">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
            Engineering Milestones
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Evolutionary <span className="text-gradient-cyber">Journey</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            From deep frontend mastery to architecting 28 browser-native engines and applied AI systems.
          </p>
        </div>
      </div>

      {/* Timeline track */}
      <div className="relative mt-16 max-w-4xl mx-auto">
        {/* Glowing vertical line */}
        <div className="pointer-events-none absolute left-4 sm:left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-400/50 via-indigo-500/40 to-emerald-400/20" />

        <div className="space-y-10 sm:space-y-12">
          {TIMELINE_MILESTONES.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Node icon on line */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 z-20 grid h-8 w-8 place-items-center rounded-full bg-slate-950 border border-cyan-400/50 shadow-md shadow-cyan-400/30">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                {/* Content Card */}
                <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                  <div className="bento-card bento-card-hover p-6">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-cyan-400">{item.period}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-foreground/5 border border-border text-muted-foreground">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-lg sm:text-xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <h4 className="text-xs font-semibold text-indigo-300 mt-0.5">{item.subtitle}</h4>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
