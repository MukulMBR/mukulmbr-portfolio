import ogEmergent from "@/assets/og-emergent.jpg";
import ogSmartPosture from "@/assets/og-smart-posture.jpg";
import ogTelegramGeminiBot from "@/assets/og-telegram-gemini-bot.jpg";

export type CaseStudy = {
  slug: string;
  liveUrl?: string;
  name: string;
  tag: string;
  summary: string;
  stack: string[];
  role: string;
  year: string;
  problem: string;
  architecture: { title: string; body: string }[];
  decisions: { title: string; body: string }[];
  bottlenecks: { title: string; body: string }[];
  ai?: { title: string; body: string }[];
  impact: string[];
  accent: string;
  ogImage: string;
};

const OG_IMAGES: Record<string, string> = {
  emergent: ogEmergent,
  "smart-posture": ogSmartPosture,
  "telegram-gemini-bot": ogTelegramGeminiBot,
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mbr-motion-hub",
    name: "MBR Motion Hub",
    liveUrl: "https://tools.mukulmbr.in",
    tag: "Spatial Telemetry Radar · 23 Studio Engines",
    summary:
      "A high-performance web suite of 23 browser-native multimedia engines — featuring real-time AI vocal isolation, 360° HRTF binaural 8D audio, 60 FPS canvas audiograms, 3D smartphone safe-zone simulation, and live GPS transit radar — executing 100% in client-side browser RAM with zero server compute costs.",
    stack: ["React 18", "TypeScript", "WebAudio API", "HTML5 Canvas", "Tailwind CSS", "Vite", "Leaflet"],
    role: "Creator & Lead Frontend Architect",
    year: "2025 – 2026",
    problem:
      "Online media tools are notoriously bloated — locked behind aggressive paywalls, requiring account registrations, and forcing users to upload gigabytes of personal media to third-party cloud servers with high latency and privacy risks. Creators needed instant, zero-upload, private media tools executing directly on their device hardware.",
    architecture: [
      {
        title: "Client-side WebAudio DSP pipeline",
        body: "Real-time center-channel phase inversion and bandpass speech filtering (1400Hz Q=0.85) run directly in browser memory without sending a single byte to an external server. The dual-stem mixer processes 16-bit PCM stereo buffers on the fly and exports pristine WAV files in milliseconds.",
      },
      {
        title: "360° HRTF binaural spatial engine",
        body: "Constructed an orbital 3D audio radar using WebAudio PannerNode with HRTF panning in 3D coordinate space coupled with impulse response convolution reverb, tape warmth low-pass filtering, and an interactive 60 FPS orbital visualizer canvas.",
      },
      {
        title: "60 FPS canvas recording pipeline",
        body: "The Audiogram studio renders animated real-time audio waveforms (Equalizer, Radial Pulsar, Sine Ribbon) onto a high-DPI HTML5 canvas, capturing the stream via canvas.captureStream(60) and muxing with audio into MP4/WebM files using MediaRecorder.",
      },
      {
        title: "Spatial GPS transit telemetry",
        body: "Integrated interactive Leaflet maps with custom vehicle SVG telemetry, live route waypoints, speedometers, dynamic route ETA calculation, and live weather radar HUD.",
      },
    ],
    decisions: [
      {
        title: "100% In-memory execution over backend workers",
        body: "Rather than provisioning expensive cloud transcoding instances (e.g. AWS Lambda or FFmpeg workers), all audio/video manipulations run in client-side Web Workers and AudioWorklets. This dropped server operational costs to $0 while guaranteeing zero data leakage.",
      },
      {
        title: "Deep-link query routing over heavy micro-frontends",
        body: "All 23 engines share a centralized design system with single-click query param routing (/?tool=vocal-remover). Each tool dynamically updates document titles, meta descriptions, and canonical tags for instant social sharing and search indexing.",
      },
    ],
    bottlenecks: [
      {
        title: "Real-time phase cancellation audio buffer latency",
        body: "Manipulating raw float32 channel buffers initially caused audio glitching during slider dragging. Decoupled UI state from audio rendering via WebAudio GainNodes with exponential ramp transitions.",
      },
      {
        title: "Canvas video capture frame stutter",
        body: "High-resolution canvas recording dropped frames on mobile GPUs. Implemented requestAnimationFrame syncing with dynamic resolution scaling (1080x1920 for vertical reels, 1920x1080 for landscape).",
      },
    ],
    ai: [
      {
        title: "Frequency resonance isolation & acoustic fingerprinting",
        body: "Implemented client-side acoustic FFT analysis for frequency peaks, allowing instant identification of audio frequencies and separation of vocal vs instrumental harmonic signatures.",
      },
    ],
    impact: [
      "23 fully operational studio engines deployed globally on Cloudflare edge.",
      "Over 1,000+ weekly requests with 82%+ edge cache hit ratio and 0 server compute bills.",
      "100% client-side privacy: Zero user media files uploaded to any third-party server.",
      "Direct live demo accessible at tools.mukulmbr.in.",
    ],
    accent: "from-emerald-500/30 to-teal-400/20",
    ogImage: OG_IMAGES.emergent,
  },

  {
    slug: "emergent",
    name: "Emergent",
    tag: "AI Product Platform",
    summary:
      "An AI planning engine that turns a fuzzy product idea into a structured spec — architecture, roadmap, and build plan — in minutes.",
    stack: ["React", "TypeScript", "Gemini API", "Node.js", "Firebase"],
    role: "Frontend lead · AI integration",
    year: "2025",
    problem:
      "Founders and operators routinely lose weeks translating a one-paragraph idea into a buildable plan. The gap between intent and a structured spec is where most early-stage projects stall — not in execution, but in clarity.",
    architecture: [
      {
        title: "Structured-output planning engine",
        body: "Gemini calls are wrapped in typed JSON-schema contracts so every response maps to a known shape (problem, modules, roadmap, risks). The UI never parses free text — it reads typed fields, which removes an entire class of rendering bugs.",
      },
      {
        title: "Modular React surface",
        body: "Each plan section is its own self-fetching, self-revalidating React module. Sections stream in independently, so a slow risk-analysis call never blocks the architecture diagram from rendering.",
      },
      {
        title: "Firebase as the source of truth",
        body: "Plans, revisions, and user prompts persist in Firestore with per-document security rules. Realtime listeners make multi-tab editing feel instant without a custom websocket layer.",
      },
    ],
    decisions: [
      {
        title: "Typed prompts over prompt strings",
        body: "Prompts are generated from a Zod schema describing the desired output, then validated on the way back. A failed parse triggers a single repair retry before surfacing an error — cheaper than a full re-prompt and far more reliable than 'please return JSON'.",
      },
      {
        title: "Streaming-first UX",
        body: "Token streaming is wired all the way into the UI so users see structure forming as it generates. Perceived latency dropped from 'feels frozen' to 'feels like thinking out loud'.",
      },
    ],
    bottlenecks: [
      {
        title: "Cold-start latency on long plans",
        body: "Initial plans took 8–12s end-to-end. Split the request into a fast outline call and a parallel detail call; the outline renders in ~1.5s and the rest fills in progressively. Perceived time-to-first-paint dropped ~80%.",
      },
      {
        title: "Token spend on revisions",
        body: "Re-planning sent the full context every time. Switched to a diff-based revision prompt that ships only the changed section + summary, cutting token cost per revision by roughly 60%.",
      },
    ],
    ai: [
      {
        title: "Gemini orchestration",
        body: "A thin orchestrator decides which Gemini model handles which sub-task — flash models for outlines and classification, pro for architecture reasoning. Routing is data-driven, not hardcoded, so swapping models is a config change.",
      },
    ],
    impact: [
      "Compresses idea-to-blueprint from weeks to minutes.",
      "Structured output unlocks downstream automation — plans feed directly into task trackers.",
      "Streaming UI made the product feel fast on the first demo, not the fifth iteration.",
    ],
    accent: "from-violet-500/30 to-cyan-400/20",
    ogImage: OG_IMAGES.emergent,
  },
  {
    slug: "smart-posture",
    name: "Smart Posture",
    tag: "Health · Mobile",
    summary:
      "A Flutter app that turns raw sensor data into kind, real-time posture coaching — with animated feedback that nudges instead of scolds.",
    stack: ["Flutter", "Dart", "Firebase Realtime DB", "Sensors"],
    role: "Mobile developer · Realtime systems",
    year: "2024",
    problem:
      "Bad posture damages health silently. Existing trackers either buzz aggressively or hide their data in dashboards users never open. The product needed to feel like a friendly tap on the shoulder, not a fitness drill sergeant.",
    architecture: [
      {
        title: "Sensor → stream → UI pipeline",
        body: "A dedicated isolate normalizes raw sensor frames into a posture-score stream. The UI subscribes to the stream, never to the raw sensor — keeping the render thread free of signal-processing work.",
      },
      {
        title: "Firebase Realtime DB for sync",
        body: "Posture sessions sync to Firebase Realtime DB so users can review history on any device. Local-first writes mean the app keeps working offline; sync reconciles on reconnect.",
      },
      {
        title: "Animated feedback layer",
        body: "Custom Flutter animations driven by the same posture-score stream. The animation curve maps directly to the score, so feedback feels physical, not notification-driven.",
      },
    ],
    decisions: [
      {
        title: "Local-first over cloud-first",
        body: "All scoring happens on-device. The cloud only stores summaries. This keeps battery cost low, eliminates a class of privacy concerns, and means the app feels instant even on flaky networks.",
      },
      {
        title: "Calm over alarming",
        body: "Notifications are throttled and gentle — a sustained slouch nudges once, not continuously. Adherence in early testing went up because users stopped silencing the app.",
      },
    ],
    bottlenecks: [
      {
        title: "Sensor jitter producing false alerts",
        body: "Raw frames were noisy enough to fire posture-break alerts during normal movement. Added a rolling median filter on the isolate side; false-positive alerts dropped sharply with no perceptible latency added.",
      },
      {
        title: "Battery cost from continuous sampling",
        body: "Tuned sampling rate adaptively — high frequency when posture is borderline, low frequency when stable. Background battery use dropped meaningfully without losing detection quality.",
      },
    ],
    impact: [
      "Real-time posture coaching that users actually leave running.",
      "Local-first design keeps the app private and offline-capable by default.",
      "Animation-as-feedback turned a sensor app into something that feels alive.",
    ],
    accent: "from-emerald-400/30 to-cyan-400/20",
    ogImage: OG_IMAGES["smart-posture"],
  },
  {
    slug: "telegram-gemini-bot",
    name: "Telegram Gemini Bot",
    tag: "AI · Automation",
    summary:
      "A context-aware Telegram assistant powered by Gemini — webhook-driven, session-aware, and deployable in minutes.",
    stack: ["Node.js", "TypeScript", "Gemini API", "Telegram Bot API"],
    role: "Backend developer · AI integration",
    year: "2025",
    problem:
      "Most chat bots forget the previous message the moment they reply. Communities wanted an assistant that actually tracks context across a conversation — without standing up a heavy server or paying for an enterprise platform.",
    architecture: [
      {
        title: "Webhook-driven Node service",
        body: "Telegram pushes updates to a lightweight Node webhook. No polling loop, no idle compute — the service only runs when there's a message to handle, which makes it cheap to operate and trivial to scale horizontally.",
      },
      {
        title: "Session memory with bounded context",
        body: "Each chat keeps a rolling window of recent turns plus a periodically updated summary. This gives Gemini real conversational context without sending the entire chat history on every call.",
      },
      {
        title: "Prompt orchestration layer",
        body: "A small orchestrator chooses the system prompt and model per intent (Q&A, summarization, code help). Intents are detected with a fast classification call before the main response — cheaper and more controllable than one giant prompt.",
      },
    ],
    decisions: [
      {
        title: "Rolling summary over full history",
        body: "Storing every message and shipping it on each request would blow through tokens fast. The summary-plus-recent-turns pattern preserves perceived memory at a fraction of the cost.",
      },
      {
        title: "Webhook over long-polling",
        body: "Long-polling kept a process alive 24/7 for no reason. The webhook model fits the serverless deployment target and removed an entire ops surface.",
      },
    ],
    bottlenecks: [
      {
        title: "Telegram retry storms on slow replies",
        body: "When Gemini took longer than Telegram's webhook timeout, Telegram retried — producing duplicate replies. Added an immediate 200 ACK and moved the Gemini call to a fire-and-forget worker that posts the reply when ready.",
      },
      {
        title: "Context bloat in long chats",
        body: "Summaries grew unbounded over time. Capped summary length and re-summarized on a sliding window; memory stays useful without growing token cost per call.",
      },
    ],
    ai: [
      {
        title: "Gemini prompt design",
        body: "System prompts are short, role-scoped, and versioned in code. A/B testing prompt variants is a config change, not a deploy — which made iterating on tone and accuracy much faster.",
      },
    ],
    impact: [
      "Always-on AI assistant inside Telegram with real conversational memory.",
      "Serverless webhook architecture keeps operating cost near zero at idle.",
      "Intent routing keeps responses fast and on-topic without one giant prompt.",
    ],
    accent: "from-cyan-400/30 to-violet-500/20",
    ogImage: OG_IMAGES["telegram-gemini-bot"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
