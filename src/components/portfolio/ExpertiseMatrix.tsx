import { motion } from "framer-motion";
import { Brain, Code2, Database, GitBranch, Radio, Server, Sparkles, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { EXPERTISE_DOMAINS, PROFILE } from "@/lib/portfolio-schema";

function GitHubLiveStream() {
  const [events, setEvents] = useState<Array<{ id: string; repo: string; message: string; time: string }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/MukulMBR/events?per_page=5")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const pushEvents = data
            .filter((e: any) => e.type === "PushEvent")
            .slice(0, 4)
            .map((e: any) => ({
              id: e.id,
              repo: e.repo?.name ? e.repo.name.replace("MukulMBR/", "") : "mukulmbr-portfolio",
              message: e.payload?.commits?.[0]?.message || "Pushed code update",
              time: new Date(e.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            }));
          setEvents(pushEvents);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="bento-card p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground">
            <Code2 className="h-4 w-4 text-emerald-400" />
            <span>Live GitHub Commit Stream</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
            api.github.com/MukulMBR
          </span>
        </div>

        <p className="mt-2 text-xs text-muted-foreground">
          Real-time push commits and active development branches across public repositories.
        </p>

        <div className="mt-5 space-y-2.5">
          {loading ? (
            <div className="text-xs text-muted-foreground animate-pulse py-4 text-center">
              Fetching latest GitHub push telemetry...
            </div>
          ) : events.length > 0 ? (
            events.map((e) => (
              <div
                key={e.id}
                className="p-3 rounded-xl bg-foreground/[0.03] border border-border/50 flex flex-col gap-1 text-xs"
              >
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="text-emerald-400 truncate max-w-[160px]">{e.repo}</span>
                  <span className="text-[10px] text-muted-foreground font-mono">{e.time}</span>
                </div>
                <p className="text-muted-foreground truncate">{e.message}</p>
              </div>
            ))
          ) : (
            <div className="text-xs text-muted-foreground py-2 text-center">
              Active commit pipeline across MBR repositories.
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
        <span className="font-mono text-muted-foreground">20+ Public Repos</span>
        <a
          href={PROFILE.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-bold text-cyan-400 hover:text-cyan-300"
        >
          View Full Activity →
        </a>
      </div>
    </div>
  );
}

export function ExpertiseMatrix() {
  const domainIcons: Record<string, any> = {
    frontend: Code2,
    "audio-dsp": Radio,
    "backend-cloud": Server,
    "ai-systems": Brain,
  };

  return (
    <section id="expertise" className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 py-20 md:py-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-indigo-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Engineering Depth
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Core <span className="text-gradient-cyber">Technical Stack</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            An interconnected system of disciplines composed into production-ready software solutions.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* 4 Technical Domains */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {EXPERTISE_DOMAINS.map((domain) => {
            const Icon = domainIcons[domain.id] || Sparkles;
            return (
              <div key={domain.id} className="bento-card bento-card-hover p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-tr from-cyan-400/20 to-indigo-500/20 text-cyan-400 border border-cyan-400/30">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground">{domain.title}</h3>
                  </div>

                  <h4 className="mt-3 text-xs font-semibold text-cyan-300">{domain.headline}</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{domain.blurb}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {domain.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-foreground/[0.03] px-2.5 py-0.5 text-[10px] font-mono text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live GitHub Stream Widget */}
        <div className="lg:col-span-4">
          <GitHubLiveStream />
        </div>
      </div>
    </section>
  );
}
