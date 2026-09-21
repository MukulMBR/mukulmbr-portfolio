/**
 * Semantic Schema Mapping for Mukul's Portfolio & Motion Hub Architecture
 * Author: Mukul Bushi Reddy M
 */

export interface MotionHubEngine {
  id: string;
  name: string;
  suite: "video" | "audio" | "radar" | "ai" | "utility";
  number: string;
  tagline: string;
  description: string;
  clientSideTech: string;
  liveUrl: string;
  isFlagship?: boolean;
}

export interface MotionHubSuite {
  id: "video" | "audio" | "radar" | "ai" | "utility";
  title: string;
  tag: string;
  accent: string;
  iconName: string;
  engines: MotionHubEngine[];
}

export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  overview: string;
  problem: string;
  architecture: string;
  impact: string;
  stack: string[];
  accentGradient: string;
  liveUrl?: string;
  codeUrl?: string;
  isFeatured?: boolean;
}

export interface ExpertiseDomain {
  id: string;
  title: string;
  iconName: string;
  headline: string;
  blurb: string;
  technologies: string[];
}

export interface MilestoneItem {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

/* ================== PROFILE IDENTITY ================== */
export const PROFILE = {
  name: "Mukul Bushi Reddy M",
  shortName: "Mukul",
  handle: "@MukulMBR",
  headline: "Web Engineering Architect & Product Builder",
  subheadline:
    "Building high-performance web systems, browser-native multimedia engines, WebAudio DSP, and spatial digital products with zero server latency.",
  location: "Bengaluru / Hyderabad, India",
  availability: "Available for High-Impact Roles & Product Engineering",
  email: "mukulmotakatla7@gmail.com",
  phone: "+91 8919866652",
  phoneFormatted: "+91 89198 66652",
  whatsappUrl: `https://wa.me/918919866652?text=${encodeURIComponent("Hi Mukul, I saw your portfolio and would like to connect.")}`,
  githubUrl: "https://github.com/MukulMBR",
  linkedinUrl: "https://www.linkedin.com/in/mukulmbr",
  portfolioUrl: "https://mukulmbr.in",
  motionHubUrl: "https://tools.mukulmbr.in",
  formSubmitEndpoint: "https://formsubmit.co/ajax/f6801d5d67a8d9a690db97dd976ffa6f",
  stats: [
    { value: "28", label: "Browser Engines", sub: "100% Client-Side" },
    { value: "14+", label: "Products Shipped", sub: "Web, Mobile & AI" },
    { value: "20+", label: "Core Technologies", sub: "React, TS, WebAudio" },
    { value: "3+", label: "Years Shipping", sub: "Production Systems" },
  ],
};

/* ================== MBR MOTION HUB SUITES (28 ENGINES) ================== */
export const MOTION_HUB_SUITES: MotionHubSuite[] = [
  {
    id: "audio",
    title: "Audio & Speech DSP",
    tag: "HRTF & Neural WebAudio",
    accent: "from-cyan-400 to-indigo-500",
    iconName: "Mic",
    engines: [
      {
        id: "vocal-remover",
        name: "AI Vocal & Stem Isolator",
        suite: "audio",
        number: "Tool #21",
        tagline: "Acapella & Karaoke in browser RAM",
        description: "Mid-side phase cancellation and spectral frequency division executing client-side.",
        clientSideTech: "WebAudio API + AudioWorklet",
        liveUrl: "https://tools.mukulmbr.in/?tool=vocal-remover",
        isFlagship: true,
      },
      {
        id: "spatial-audio-8d",
        name: "8D Spatial Audio Studio",
        suite: "audio",
        number: "Tool #22",
        tagline: "360° Binaural HRTF Audio Panning",
        description: "Real-time spherical acoustic orbit with algorithmic convolution room impulse reverbs.",
        clientSideTech: "PannerNode + HRTF Convolution",
        liveUrl: "https://tools.mukulmbr.in/?tool=spatial-audio-8d",
        isFlagship: true,
      },
      {
        id: "audio-denoise",
        name: "Spectral Noise Suppressor",
        suite: "audio",
        number: "Tool #24",
        tagline: "Clean Spoken Dialogue",
        description: "Adaptive FFT noise gate removing motor hum and background hiss without phase warble.",
        clientSideTech: "WebAssembly + FFT Filters",
        liveUrl: "https://tools.mukulmbr.in/?tool=audio-denoise",
      },
      {
        id: "speech-transcriber",
        name: "Speech-to-Text Transcriber",
        suite: "audio",
        number: "Tool #25",
        tagline: "Real-Time Voice Dictation",
        description: "Zero-latency continuous dictation with punctuation formatting in 12+ Indian languages.",
        clientSideTech: "Web Speech Recognition API",
        liveUrl: "https://tools.mukulmbr.in/?tool=speech-transcriber",
      },
      {
        id: "audio-normalizer",
        name: "Broadcast LUFS Normalizer",
        suite: "audio",
        number: "Tool #26",
        tagline: "Social Media Master Levels",
        description: "EBU R128 loudness measurement with peak dynamic limiter to prevent feed clipping.",
        clientSideTech: "WebAudio DynamicsCompressor",
        liveUrl: "https://tools.mukulmbr.in/?tool=audio-normalizer",
      },
      {
        id: "tempo-pitch-shifter",
        name: "Pitch & Harmonic Shifter",
        suite: "audio",
        number: "Tool #27",
        tagline: "Phase Vocoder Time-Stretch",
        description: "Independent pitch transposition (±12 semitones) without tempo distortion.",
        clientSideTech: "AudioWorklet Processor",
        liveUrl: "https://tools.mukulmbr.in/?tool=tempo-pitch-shifter",
      },
    ],
  },
  {
    id: "video",
    title: "Video & Spatial Studio",
    tag: "Canvas & 60fps Video",
    accent: "from-purple-400 to-pink-500",
    iconName: "Video",
    engines: [
      {
        id: "safe-zone-simulator",
        name: "Shorts & Reels Safe-Zone 3D",
        suite: "video",
        number: "Tool #20",
        tagline: "Instagram & YouTube UI Overlay Preview",
        description: "Simulate vertical 9:16 videos inside 50+ flagship 3D smartphone viewports to guarantee 0% UI collision.",
        clientSideTech: "CSS 3D Transforms + Canvas",
        liveUrl: "https://tools.mukulmbr.in/?tool=safe-zone-simulator",
        isFlagship: true,
      },
      {
        id: "audiogram-generator",
        name: "Audiogram Waveform Video Studio",
        suite: "video",
        number: "Tool #23",
        tagline: "Podcast & Voice Note 60fps Video",
        description: "Generate animated reactive audiograms, captions, and gradient progress cards for Reels.",
        clientSideTech: "HTML5 Canvas + MediaRecorder",
        liveUrl: "https://tools.mukulmbr.in/?tool=audiogram-generator",
        isFlagship: true,
      },
      {
        id: "video-merger",
        name: "Client-Side Video Stitcher",
        suite: "video",
        number: "Tool #15",
        tagline: "Zero Server Upload Clip Assembly",
        description: "Merge multiple video clips with cross-dissolve transitions directly in browser memory.",
        clientSideTech: "WebCodecs + MediaStream API",
        liveUrl: "https://tools.mukulmbr.in/?tool=video-merger",
      },
      {
        id: "video-frame-sampler",
        name: "High-Res Frame Extractor",
        suite: "video",
        number: "Tool #16",
        tagline: "Lossless Thumbnail Grabber",
        description: "Extract lossless PNG keyframes and color histograms at exact sub-second timestamps.",
        clientSideTech: "OffscreenCanvas + Blob Engine",
        liveUrl: "https://tools.mukulmbr.in/?tool=frame-sampler",
      },
      {
        id: "subtitle-burner",
        name: "Word-Highlight Subtitle Styler",
        suite: "video",
        number: "Tool #17",
        tagline: "Karaoke-Style Kinetic Captions",
        description: "Auto-synced highlighted text badges with frosted glass backgrounds for viral shorts.",
        clientSideTech: "Canvas 2D Rendering Engine",
        liveUrl: "https://tools.mukulmbr.in/?tool=subtitle-burner",
      },
      {
        id: "delogo-watermark",
        name: "In-Browser Watermark Filter",
        suite: "video",
        number: "Tool #18",
        tagline: "Lossless Logo Interpolation",
        description: "Feathered spatial blending filter to erase corner logos from user video files.",
        clientSideTech: "ImageData Convolution Filters",
        liveUrl: "https://tools.mukulmbr.in/?tool=delogo",
      },
    ],
  },
  {
    id: "radar",
    title: "Transit & Spatial Telemetry",
    tag: "Real-Time Geo & GPS",
    accent: "from-emerald-400 to-teal-500",
    iconName: "Radio",
    engines: [
      {
        id: "bus-tracker",
        name: "Live Transit Telemetry Radar",
        suite: "radar",
        number: "Radar #1",
        tagline: "Real-Time Bus Tracking & ETA",
        description: "Interactive transit radar with live vehicle velocity, route polyline, and station arrival alarms.",
        clientSideTech: "Leaflet JS + GeoLocation API",
        liveUrl: "https://tools.mukulmbr.in/?tool=bus-tracker",
        isFlagship: true,
      },
      {
        id: "speedometer-hud",
        name: "Spatial Telemetry Speedometer",
        suite: "radar",
        number: "Radar #2",
        tagline: "GPS Speed & Altitude HUD",
        description: "Aircraft-grade HUD showing real-time heading, climb rate, and accelerometer telemetry.",
        clientSideTech: "DeviceOrientation + Canvas",
        liveUrl: "https://tools.mukulmbr.in/?tool=speedometer",
      },
      {
        id: "weather-radar",
        name: "Doppler Weather Radar Layer",
        suite: "radar",
        number: "Radar #3",
        tagline: "Precipitation & Wind Vectors",
        description: "High-resolution tile overlays showing live atmospheric precipitation across Indian transit corridors.",
        clientSideTech: "Vector Tile API + Leaflet",
        liveUrl: "https://tools.mukulmbr.in/?tool=weather-radar",
      },
      {
        id: "geofence-alert",
        name: "Proximity Geofence Monitor",
        suite: "radar",
        number: "Radar #4",
        tagline: "Arrival & Departure Triggers",
        description: "Radial waypoint alerts notifying riders when their transit reaches within 500m of home.",
        clientSideTech: "Web Workers + LocalStorage",
        liveUrl: "https://tools.mukulmbr.in/?tool=geofence",
      },
    ],
  },
  {
    id: "utility",
    title: "Media & Privacy Utilities",
    tag: "100% Local Processing",
    accent: "from-blue-400 to-cyan-500",
    iconName: "Shield",
    engines: [
      {
        id: "downloader",
        name: "Universal Media Downloader",
        suite: "utility",
        number: "Utility #19",
        tagline: "Social Media Stream Extraction",
        description: "Extract clean audio and video streams with zero tracking and zero server storage.",
        clientSideTech: "Client-Side Blob Downloader",
        liveUrl: "https://tools.mukulmbr.in/?tool=downloader",
        isFlagship: true,
      },
      {
        id: "exif-cleaner",
        name: "Metadata & Exif Purger",
        suite: "utility",
        number: "Utility #10",
        tagline: "GPS & Device Privacy Sanitizer",
        description: "Strip camera make, serial number, and GPS location coordinates from photos before uploading.",
        clientSideTech: "ArrayBuffer Binary Parser",
        liveUrl: "https://tools.mukulmbr.in/?tool=exif-cleaner",
      },
      {
        id: "webp-converter",
        name: "Ultra WebP/AVIF Image Optimizer",
        suite: "utility",
        number: "Utility #11",
        tagline: "Lossless 90% Size Reduction",
        description: "Convert bulky PNGs and JPEGs into next-gen WebP/AVIF assets directly inside the browser.",
        clientSideTech: "Canvas toBlob API",
        liveUrl: "https://tools.mukulmbr.in/?tool=webp-converter",
      },
      {
        id: "media-trimmer",
        name: "Frame-Accurate Video Trimmer",
        suite: "utility",
        number: "Utility #12",
        tagline: "Instant Video Cut & Slice",
        description: "Trim clips down to milliseconds without re-encoding quality degradation.",
        clientSideTech: "HTML5 Media Source Extensions",
        liveUrl: "https://tools.mukulmbr.in/?tool=media-trimmer",
      },
    ],
  },
];

/* ================== FEATURED PRODUCTS (11 PROJECTS) ================== */
export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "mukul-dental",
    number: "01",
    name: "Mukul Dental Hospital",
    category: "Healthcare · Production Web",
    overview: "State-of-the-art dental surgical portal for Dr. Mukul, MDS OMFS, serving Whitefield, Bengaluru.",
    problem: "Patients struggled to explore oral maxillofacial surgeries and book consultations seamlessly.",
    architecture: "SSR optimized interactive UI with direct click-to-WhatsApp triage and appointment scheduling.",
    impact: "High-converting digital front-door yielding 35% higher patient appointment inquiries.",
    stack: ["React 19", "Tailwind CSS", "Vite", "TypeScript"],
    accentGradient: "from-sky-500/20 to-emerald-500/15",
    liveUrl: "https://mukulmbr-dental.lovable.app/",
    isFeatured: true,
  },
  {
    id: "sadhvi-grains",
    number: "02",
    name: "Sadhvi Grains",
    category: "Retail & Commerce · Web",
    overview: "Modern digital storefront for Sadhvi Grains showcasing organic grains, pricing, and bulk inquiries.",
    problem: "Traditional wholesale agro-products business lacked modern digital distribution and cataloging.",
    architecture: "Lightweight, accessible product catalog with optimized asset delivery and lead capture.",
    impact: "Expanded rural-to-urban customer reach with modern mobile-first catalog browsing.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    accentGradient: "from-amber-500/20 to-orange-500/15",
    liveUrl: "https://dheerajk.lovable.app/",
    isFeatured: true,
  },
  {
    id: "mbr-bus-tracker",
    number: "03",
    name: "MBR Bus Tracker",
    category: "Realtime Transit · IoT",
    overview: "Live campus transit tracker showing vehicle position, dynamic polyline route, and predictive ETA.",
    problem: "Students and commuters wasted over 25 minutes daily guessing transit arrival times.",
    architecture: "WebSocket streaming + GeoJSON polyline interpolation + Node.js telemetry server.",
    impact: "Eliminated wait uncertainty with accurate minute-by-minute live bus arrival predictions.",
    stack: ["Node.js", "WebSockets", "Leaflet JS", "Render"],
    accentGradient: "from-cyan-500/20 to-emerald-500/15",
    liveUrl: "https://mbr-bus-tracker.onrender.com",
    codeUrl: "https://github.com/MukulMBR/mbr-bus-tracker",
    isFeatured: true,
  },
  {
    id: "emergent",
    number: "04",
    name: "Emergent AI Platform",
    category: "GenAI · Product Architecture",
    overview: "AI blueprinting platform that converts raw founder ideas into structured technical roadmaps.",
    problem: "Founders lose weeks translating vague concepts into buildable engineering specifications.",
    architecture: "Gemini Pro structured output orchestration + React modular canvas + Firebase session sync.",
    impact: "Compresses product ideation-to-engineering blueprint cycle from 2 weeks down to 10 minutes.",
    stack: ["React", "Gemini API", "Node.js", "Firebase"],
    accentGradient: "from-violet-500/20 to-cyan-500/15",
    codeUrl: "https://github.com/MukulMBR/Emergent",
    isFeatured: true,
  },
  {
    id: "ai-voice-assistant",
    number: "05",
    name: "Autonomous Voice Assistant",
    category: "Voice AI · Speech Recognition",
    overview: "Hands-free voice assistant with real-time speech-to-text, LLM reasoning, and natural audio synthesis.",
    problem: "Typing prompts on mobile while multi-tasking creates friction; true hands-free voice was required.",
    architecture: "Continuous streaming audio pipeline with offline fallback and hotword activation.",
    stack: ["Python", "SpeechRecognition", "FastAPI", "Gemini LLM"],
    impact: "Sub-500ms voice conversational turnarounds for multi-language spoken queries.",
    accentGradient: "from-indigo-500/20 to-pink-500/15",
    codeUrl: "https://github.com/MukulMBR/ai-voice-assistant",
    isFeatured: true,
  },
  {
    id: "smart-posture",
    number: "06",
    name: "Smart Posture",
    category: "HealthTech · Mobile App",
    overview: "Spine posture monitoring app with real-time sensor analytics, animated feedback, and ergonomic tracking.",
    problem: "Desk workers suffer repetitive strain injury because posture decay happens invisibly.",
    architecture: "Sensor hardware pipeline syncing with Firebase Realtime Database and Flutter UI animations.",
    stack: ["Flutter", "Dart", "Firebase Realtime DB"],
    impact: "Delivered kind, non-intrusive micro-feedback that improved ergonomics across study participants.",
    accentGradient: "from-emerald-500/20 to-teal-500/15",
    codeUrl: "https://github.com/MukulMBR/Smart-Posture",
    isFeatured: true,
  },
  {
    id: "telegram-gemini-bot",
    number: "07",
    name: "Telegram Gemini AI Bot",
    category: "AI Automation · Chatbot",
    overview: "Always-on multi-modal conversational AI assistant operating within Telegram messenger.",
    problem: "Users needed instant access to vision analysis and code generation inside their primary messaging app.",
    architecture: "Webhook-driven serverless event handler syncing with Google Gemini Vision API.",
    stack: ["Node.js", "Telegram Bot API", "Gemini Pro"],
    impact: "Handled 1,000+ automated community queries with zero downtime.",
    accentGradient: "from-cyan-500/20 to-violet-500/15",
    codeUrl: "https://github.com/MukulMBR/Telegram-Gemini-Bot",
  },
  {
    id: "bdm-travels",
    number: "08",
    name: "BDM Travels",
    category: "TravelTech · Mobile",
    overview: "Mobile-first itinerary planning, hotel booking, and curated tour package discovery engine.",
    problem: "Tourists struggled with disjointed travel reservations across different local travel agents.",
    architecture: "Flutter cross-platform app with Firestore normalized collections and cached offline maps.",
    stack: ["Flutter", "Dart", "Firebase Firestore"],
    impact: "Streamlined multi-city tour bookings with one-tap digital ticketing.",
    accentGradient: "from-pink-500/20 to-violet-500/15",
  },
  {
    id: "coupons-app",
    number: "09",
    name: "Coupons App",
    category: "FinTech & Deals · Mobile",
    overview: "Curated deal discovery app aggregating verified discount vouchers, expiry alerts, and cashback.",
    problem: "Consumers miss massive savings because coupons are scattered across hundreds of email newsletters.",
    architecture: "Categorized coupon feed with auto-expiring voucher listeners and push notification alerts.",
    stack: ["Flutter", "Firebase Auth", "Cloud Functions"],
    impact: "Saved users thousands of rupees through timely flash deal notifications.",
    accentGradient: "from-amber-500/20 to-rose-500/15",
    codeUrl: "https://github.com/MukulMBR/Coupons-App",
  },
  {
    id: "water-level-monitor",
    number: "10",
    name: "IoT Water Level Monitor",
    category: "IoT & Smart Cities",
    overview: "Remote tank telemetry dashboard measuring live water volumes with automated pump shut-off.",
    problem: "Water tank overflow damages buildings and wastes thousands of liters of clean water daily.",
    architecture: "Ultrasonic sensor + ESP8266 microcontroller streaming to Firebase Realtime DB and dashboard.",
    stack: ["C++ / ESP8266", "Firebase", "Web Dashboard"],
    impact: "Prevented 100% of overflow spills across monitored tanks with automated safety cut-offs.",
    accentGradient: "from-teal-500/20 to-cyan-500/15",
    codeUrl: "https://github.com/MukulMBR/Water-Level-Monitor",
  },
  {
    id: "asthachamma",
    number: "11",
    name: "Asthachamma Cultural Portal",
    category: "Culture & EdTech",
    overview: "Traditional Indian board game and cultural lore resurrected with modern interactive web physics.",
    problem: "Historic Indian games and folklore are fading among younger digital-first generations.",
    architecture: "Custom HTML5 Canvas dice physics and responsive board state machine.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    impact: "Preserved authentic traditional gaming rules in an accessible, zero-install web application.",
    accentGradient: "from-purple-500/20 to-pink-500/15",
    codeUrl: "https://github.com/MukulMBR/Asthachamma",
  },
];

/* ================== CORE EXPERTISE DOMAINS ================== */
export const EXPERTISE_DOMAINS: ExpertiseDomain[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    iconName: "Code2",
    headline: "High-Performance, Fluid Interfaces",
    blurb: "Architecting buttery-smooth 60fps web apps with React 19, Angular, TypeScript, and modern styling tokens.",
    technologies: ["React 19", "Angular", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Vite", "TanStack Router"],
  },
  {
    id: "audio-dsp",
    title: "WebAudio & Spatial Systems",
    iconName: "Radio",
    headline: "In-Browser Real-Time Signal Processing",
    blurb: "Building browser-native audio engines: 8D spatial HRTF acoustics, mid-side vocal isolation, and dynamic LUFS leveling.",
    technologies: ["WebAudio API", "AudioWorklet", "HRTF Convolution", "Canvas 2D/3D", "WebAssembly", "WebCodecs"],
  },
  {
    id: "backend-cloud",
    title: "Backend & Realtime Cloud",
    iconName: "Server",
    headline: "Scalable APIs & Event-Driven Pipelines",
    blurb: "Constructing low-latency microservices, WebSockets, and real-time database synchronizations that scale gracefully.",
    technologies: ["Node.js", "Spring Boot", "Firebase Realtime DB", "Firestore", "WebSockets", "REST APIs"],
  },
  {
    id: "ai-systems",
    title: "AI Integration & Agents",
    iconName: "Brain",
    headline: "Applied Machine Intelligence",
    blurb: "Integrating Gemini multi-modal models, prompt engineering pipelines, autonomous agents, and speech recognition.",
    technologies: ["Gemini 1.5/2.0 API", "SpeechRecognition", "Agentic Workflows", "Structured Schema Extraction", "Python"],
  },
];

/* ================== EVOLUTION TIMELINE ================== */
export const TIMELINE_MILESTONES: MilestoneItem[] = [
  {
    period: "2026 — Present",
    title: "MBR Motion Hub (28 Engines)",
    subtitle: "Browser-Native Studio & Telemetry",
    description: "Engineered 28 client-side tools spanning WebAudio DSP, 8D binaural sound, GPS radar, and video safe zones with zero server dependency.",
    tag: "Milestone",
  },
  {
    period: "2025 — 2026",
    title: "Emergent & AI Voice Assistant",
    subtitle: "Generative Architecture & Voice AI",
    description: "Designed AI product planning platform and streaming speech-to-speech assistant with low-latency conversational turnarounds.",
    tag: "AI Innovation",
  },
  {
    period: "2024 — 2025",
    title: "Smart Posture & IoT Transit Radar",
    subtitle: "Mobile Sensors & Realtime Streams",
    description: "Shipped Flutter apps with live sensor analytics alongside Node.js live bus telemetry tracking platforms.",
    tag: "Full-Stack & IoT",
  },
  {
    period: "Foundation",
    title: "Deep Frontend & Architectural Mastery",
    subtitle: "React, Angular, TypeScript & Spring Boot",
    description: "Built scalable enterprise web portals, component systems, authentication workflows, and robust REST APIs.",
    tag: "Foundation",
  },
];
