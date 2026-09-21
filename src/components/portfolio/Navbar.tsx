import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Menu, Moon, Sun, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { PROFILE } from "@/lib/portfolio-schema";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("top");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      const r = document.documentElement;
      if (next === "dark") r.classList.add("dark");
      else r.classList.remove("dark");
      r.style.colorScheme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {}
      trackEvent("theme_switch", { theme: next });
      return next;
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#motion-hub", id: "motion-hub", label: "Motion Hub 📡", isHighlight: true },
    { href: "#work", id: "work", label: "Featured Work" },
    { href: "#expertise", id: "expertise", label: "Engineering Stack" },
    { href: "#timeline", id: "timeline", label: "Evolution" },
    { href: "#contact", id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.2, 0.5, 0.8] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2.5" : "py-4"}`}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 md:px-10">
        {/* Brand logo */}
        <a
          href="#top"
          aria-label="Mukul — Home"
          className="group flex items-center gap-2.5 rounded-full px-3 py-1.5 transition glass hover:border-cyan-400/40"
        >
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-tr from-cyan-400 to-indigo-500 text-[11px] font-black text-slate-950 shadow-md shadow-cyan-400/20">
            M
          </span>
          <div className="flex items-center gap-1.5">
            <span className="font-display text-sm font-bold text-foreground">Mukul</span>
            <span className="hidden sm:inline-block text-[10px] font-mono text-cyan-400 px-1.5 py-0.5 rounded bg-cyan-400/10 border border-cyan-400/20">
              v2.5
            </span>
          </div>
        </a>

        {/* Desktop nav links */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 rounded-full p-1.5 md:flex glass shadow-card"
        >
          {navLinks.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "location" : undefined}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-foreground/15 text-foreground shadow-sm shadow-cyan-400/10"
                    : l.isHighlight
                    ? "text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10"
                    : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Theme button */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Toggle theme"}
            type="button"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border glass transition hover:border-cyan-400/30 hover:bg-foreground/5"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-300 transition-transform rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="h-4 w-4 text-slate-700 transition-transform" />
              )
            ) : (
              <span className="h-4 w-4 opacity-0" />
            )}
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            onClick={() => trackEvent("cta_click", { id: "nav_connect" })}
            className="group hidden items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-xs font-bold text-slate-950 shadow-glow transition hover:scale-105 sm:inline-flex"
          >
            <span>Let's Build</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border glass transition hover:bg-foreground/5 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="mx-4 mt-2 md:hidden"
          >
            <nav className="glass-strong flex flex-col gap-1 rounded-2xl border border-border p-3 shadow-2xl">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-foreground/90 transition hover:bg-foreground/5"
                >
                  <span>{l.label}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </a>
              ))}
              <div className="mt-2 pt-2 border-t border-border flex items-center justify-between px-2">
                <a
                  href={PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-400 hover:underline"
                >
                  WhatsApp Direct 💬
                </a>
                <a
                  href={PROFILE.motionHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-cyan-400 hover:underline"
                >
                  Launch Hub (28 Engines) 🚀
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
