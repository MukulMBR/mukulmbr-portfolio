import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Linkedin, Mail, MessageCircle, Phone, Send, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { PROFILE } from "@/lib/portfolio-schema";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!form.name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!form.message.trim() || form.message.length < 10) {
      setErrorMsg("Message should be at least 10 characters.");
      return;
    }

    setStatus("loading");
    trackEvent("contact_submit", { subject: form.subject || "General inquiry" });

    try {
      const res = await fetch(PROFILE.formSubmitEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: `Portfolio Message: ${form.subject || "General Inquiry"}`,
          subject: form.subject,
          message: form.message,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      setModalOpen(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      trackEvent("contact_success");
      setTimeout(() => setModalOpen(false), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMsg("Failed to dispatch message. Please use WhatsApp or email directly.");
      trackEvent("contact_error");
    }
  };

  return (
    <section id="contact" className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 py-20 md:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 bottom-10 h-80 w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto pb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Get In Touch
        </div>
        <h2 className="mt-4 font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
          Let's Build Something <span className="text-gradient-cyber">Extraordinary</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
          Open for high-impact software engineering roles, full-stack product builds, and consulting collaborations.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
        {/* Left: Quick Connect Hub */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bento-card p-6 sm:p-8 space-y-6">
            <h3 className="font-display text-xl font-bold text-foreground">Instant Direct Channels</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Prefer direct messaging? Connect instantly on WhatsApp or schedule a phone conversation.
            </p>

            <div className="space-y-3">
              {/* WhatsApp */}
              <a
                href={PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("contact_channel", { channel: "whatsapp" })}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 hover:bg-emerald-500/20 transition group"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-emerald-400" />
                  <div>
                    <div className="text-xs font-bold text-emerald-300">WhatsApp Direct</div>
                    <div className="text-[11px] text-emerald-400/80 font-mono">+91 89198 66652</div>
                  </div>
                </div>
                <span className="text-xs font-bold group-hover:translate-x-1 transition-transform">Chat →</span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${PROFILE.phone}`}
                onClick={() => trackEvent("contact_channel", { channel: "phone" })}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-foreground/[0.03] border border-border hover:bg-foreground/[0.06] transition group"
              >
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <div>
                    <div className="text-xs font-bold text-foreground">Phone Call</div>
                    <div className="text-[11px] text-muted-foreground font-mono">{PROFILE.phoneFormatted}</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all">Call →</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${PROFILE.email}`}
                onClick={() => trackEvent("contact_channel", { channel: "email" })}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-foreground/[0.03] border border-border hover:bg-foreground/[0.06] transition group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-indigo-400" />
                  <div>
                    <div className="text-xs font-bold text-foreground">Direct Email</div>
                    <div className="text-[11px] text-muted-foreground font-mono truncate max-w-[170px]">{PROFILE.email}</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all">Write →</span>
              </a>

              {/* LinkedIn */}
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("contact_channel", { channel: "linkedin" })}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-foreground/[0.03] border border-border hover:bg-foreground/[0.06] transition group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="text-xs font-bold text-foreground">LinkedIn Network</div>
                    <div className="text-[11px] text-muted-foreground font-mono">in/mukulmbr</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all">Connect →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Dispatch Terminal Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="bento-card p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-border/50">
              <span className="text-xs font-mono font-bold text-cyan-400">Send Encrypted Transmission</span>
              <span className="text-[10px] font-mono text-muted-foreground">FormSubmit API</span>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-foreground/80 mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-2.5 rounded-xl bg-foreground/[0.03] border border-border focus:border-cyan-400/60 focus:outline-none text-xs text-foreground placeholder:text-muted-foreground/60 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground/80 mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-foreground/[0.03] border border-border focus:border-cyan-400/60 focus:outline-none text-xs text-foreground placeholder:text-muted-foreground/60 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground/80 mb-1.5">Subject / Objective</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Project Consultation, Engineering Role, or Product Build"
                className="w-full px-4 py-2.5 rounded-xl bg-foreground/[0.03] border border-border focus:border-cyan-400/60 focus:outline-none text-xs text-foreground placeholder:text-muted-foreground/60 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground/80 mb-1.5">Project Brief / Message</label>
              <textarea
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Describe what you're aiming to build, timeline, or scope..."
                className="w-full px-4 py-2.5 rounded-xl bg-foreground/[0.03] border border-border focus:border-cyan-400/60 focus:outline-none text-xs text-foreground placeholder:text-muted-foreground/60 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 px-6 rounded-xl bg-gradient-brand text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              <span>{status === "loading" ? "Dispatching..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-background/80 p-4 backdrop-blur-md"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bento-card max-w-md w-full p-8 text-center space-y-4 relative"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-foreground/10 text-muted-foreground"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <CheckCircle2 className="h-7 w-7" />
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground">Message Dispatched!</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Thank you for reaching out, Mukul will review your message and reply via email or WhatsApp promptly.
              </p>

              <button
                onClick={() => setModalOpen(false)}
                className="w-full py-2.5 rounded-xl bg-foreground text-background font-bold text-xs hover:opacity-90 transition"
              >
                Dismiss
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
