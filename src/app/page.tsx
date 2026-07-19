"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  ArrowUpRight, 
  Activity, 
  Sparkles, 
  Send, 
  Layers, 
  Clock, 
  Heart,
  ChevronRight,
  Monitor,
  Code,
  Compass,
  MessageSquare,
  BookOpen,
  Music,
  Camera,
  GitBranch,
  GitCommit,
  Cpu,
  Sliders,
  CheckCircle2,
  Download
} from "lucide-react";

// Portfolio Interface Models
interface Project {
  id: string;
  serial: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  role: string;
  year: string;
  link: string;
}

interface PhotoItem {
  id: string;
  title: string;
  category: string;
  focal: string;
  shutter: string;
  iso: string;
  imgSrc: string;
}

interface Commit {
  id: string;
  hash: string;
  branch: string;
  message: string;
  time: string;
  status: string;
  url?: string;
}

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  tag: string;
  timestamp: string;
}

// Fluid Pastel Paint Particle Definition
interface PaintParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  alpha: number;
  decay: number;
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // Collectible 3D Toy Tilt Coordinate States
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transform: "rotateX(0deg) rotateY(0deg) scale(1)",
    boxShadow: "0 8px 32px rgba(14, 17, 24, 0.03)"
  });

  // Client states
  const [currentTime, setCurrentTime] = useState("");
  const [activeSection, setActiveSection] = useState("about");
  const [expandedLogs, setExpandedLogs] = useState<{[key: string]: boolean}>({});

  const toggleLog = (id: string) => {
    setExpandedLogs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Professional Career Sequence Ledger Data
  const workHistory = [
    {
      id: "exp-go-senior",
      company: "Go Reply",
      type: "Full-time",
      duration: "7 mos",
      location: "Greater London, UK",
      role: "Senior Consultant",
      period: "Jan 2026 - Present",
      tag: "Applied AI & DevOps",
      oneliner: "Hands-on AI Tech Lead for public sector government engagements, architecting production-grade generative AI platforms, agentic solutions, and secure GCP environments.",
      bullets: [
        "Acted as the hands-on AI Tech Lead for public sector government engagements, guiding engineering teams on the Google ADK framework and designing production-ready agentic architectures.",
        "Led the end-to-end delivery of enterprise generative AI platforms and agentic solutions for major hospitality and commercial retail clients, scaling initial chat pilots into stable production environments.",
        "Designed and implemented secure, multi-provider Workforce Identity Federation setups to integrate enterprise search connectors across independent business units.",
        "Capitalised on an advanced understanding of infrastructure reliability by securing Google Cloud, applying strict CI/CD and automated environment controls across live AI workloads."
      ]
    },
    {
      id: "exp-go-consultant",
      company: "Go Reply",
      type: "Full-time",
      duration: "3 yrs 4 mos",
      location: "Greater London, UK",
      role: "Consultant",
      period: "Sep 2022 - Dec 2025",
      tag: "Data Scientist / Software Eng",
      oneliner: "Engineered full-stack contract analytics knowledge graphs on Cloud Spanner and built high-performance Go/gRPC telemetry ingestion pipelines for prominent motorsport organizations.",
      bullets: [
        "Developed a full-stack contract analytics pipeline for a global consumer goods enterprise, constructing a backend knowledge graph on Google Cloud Spanner to map complex document relationships via Vertex AI.",
        "Engineered multiple high-performance web applications for a prominent motorsport organisation, building robust backend ingestion pipelines in Go to parse third-party fitness telemetry data into BigQuery and Looker.",
        "Automated and provisioned scalable cloud infrastructure for retail clients using Terraform, Cloud Build, and VPC Service Controls to enforce strict perimeters.",
        "Designed and deployed end-to-end machine learning systems, including customer churn prediction models using Scikit-Learn and reactive, dynamic pricing engines using causal impact analysis.",
        "Managed the discovery, data modelling, and migration of legacy data platforms into Google BigQuery and Looker to modernise and monetise B2B data reporting."
      ]
    },
    {
      id: "exp-ask-chef",
      company: "ASK Italian",
      type: "Part-time",
      duration: "11 mos",
      location: "Colchester, UK",
      role: "Chef De Partie",
      period: "Nov 2021 - Sep 2022",
      tag: "Culinary Operations",
      oneliner: "Managed food production lines and kitchen team coordination to deliver premium culinary experiences and top-tier national branch profitability.",
      bullets: [
        "Created and presented quality food in accordance with strict brand specifications.",
        "Coordinated with kitchen staff under high-velocity environments to produce the 3rd best profit turnover nationally on Valentine's Day 2022.",
        "Served as Commis Chef (Nov 2021 - Mar 2022) before being promoted to Chef De Partie."
      ]
    },
    {
      id: "exp-essex-ambassador",
      company: "University of Essex",
      type: "Part-time",
      duration: "9 mos",
      location: "Colchester, UK",
      role: "Student Ambassador",
      period: "Oct 2021 - Jun 2022",
      tag: "Outreach & Marketing",
      oneliner: "Represented the university's outreach, student recruitment, and marketing teams, supporting positive role modeling and widening educational access.",
      bullets: [
        "Delivered critical general assistance and student perspectives for Outreach, Marketing, and Student Recruitment teams.",
        "Supported outreach events working with youth aged 11-18, mature students, students with disabilities, and care leavers to foster inclusive environments."
      ]
    },
    {
      id: "exp-essex-ra",
      company: "University of Essex",
      type: "Part-time",
      duration: "9 mos",
      location: "Colchester, UK",
      role: "Resident Assistant",
      period: "Oct 2020 - Jun 2021",
      tag: "Community Building & Mediation",
      oneliner: "Fostered inclusive student communities, resolved residential issues, and designed value-driven social programs.",
      bullets: [
        "Created a thriving sense of community through inclusive social opportunities, dialogue facilitation, and active befriending.",
        "Supported student mental health awareness, dispute mediation, and flat agreement organization using negotiation skills."
      ]
    },
    {
      id: "exp-lifeways",
      company: "Lifeways Group",
      type: "Part-time",
      duration: "10 mos",
      location: "Colchester, UK",
      role: "Support Worker",
      period: "Feb 2020 - Nov 2020",
      tag: "Healthcare & Care Support",
      oneliner: "Provided dedicated daily care, punctual schedule execution, and medical support for diverse service users in a healthcare setting.",
      bullets: [
        "Responsible for assisting service users with daily tasks, ensuring punctual shifting, and accurate medication delivery.",
        "Maintained robust care routines, food preparation, and empathetic support tailored to client needs."
      ]
    }
  ];

  // Infinite Skills List (For Marquee horizontal track aligned with AI/ML, FDE, GCP, and Data Science)
  const skills = [
    "PYTORCH", "TRANSFORMERS_HF", "LLM_TUNING", "VECTOR_SEARCH", "VERTEX_AI", "AGENTIC_ADK",
    "STREAM_PROCESSING", "KAFKA_PIPELINES", "LOW_LATENCY_BUFFERS", "GO_GRPC", "SPANNER_DB",
    "GCP_ARCHITECTURE", "TERRAFORM_IAC", "CLOUD_BUILD_CI_CD", "VPC_SECURITY", "IDENTITY_FEDERATION",
    "VERTEX_AI_MLOPS", "BIGQUERY_ML", "SCIKIT_LEARN", "PANDAS_NUMPY", "CAUSAL_IMPACT"
  ];

  // Projects Showroom - Proportional grid blocks
  const projects: Project[] = [
    {
      id: "proj-1",
      serial: "EXH_01",
      title: "Cerebral Nexus",
      subtitle: "High-throughput stream visual rendering buffer.",
      description: "Designed and engineered an analytical systems buffer translating real-time telemetry metrics into lightweight WebGL dashboards. Optimised database write-locks and stream caches under intensive traffic cycles.",
      tags: ["Next.js", "WebGL", "Rust", "WebSockets"],
      role: "Lead FDE",
      year: "2026",
      link: "https://github.com/Sanskar-16"
    },
    {
      id: "proj-2",
      serial: "EXH_02",
      title: "Scribe Editorial Engine",
      subtitle: "A professional technical publishing pipeline for engineering teams.",
      description: "An isolated Markdown compilation runner designed for tech operations. Features high-velocity stream serialization, decentralized binary caching, and custom edge functions to run compilation under 15ms.",
      tags: ["React", "TypeScript", "NodeJS", "SQLite"],
      role: "Lead Systems Architect",
      year: "2025",
      link: "https://github.com/Sanskar-16"
    },
    {
      id: "proj-3",
      serial: "EXH_03",
      title: "Vellum Design Tokens",
      subtitle: "Zero-dependency design system tokens mapped on fluid structures.",
      description: "A zero-dependency design system architecture compiled entirely of programmatic CSS custom properties, featuring scalable viewport mathematical formulas and fluid fluid typographic models.",
      tags: ["Vanilla CSS", "Theme Tokens", "Modular Layouts"],
      role: "Solo Architect",
      year: "2025",
      link: "https://github.com/Sanskar-16"
    },
    {
      id: "proj-4",
      serial: "EXH_04",
      title: "Patchbay Virtual Audio Rack",
      subtitle: "Browser-based virtual synthesis patch bay console.",
      description: "A complex browser layout simulating modular Eurorack dial and cable interfaces. Generates dynamic sound waves, schedules ADSR parameters via Web Audio API, and synchronizes real-time MIDI inputs.",
      tags: ["Web Audio API", "Canvas2D", "WebMIDI", "React"],
      role: "FDE Architect",
      year: "2026",
      link: "https://github.com/Sanskar-16"
    }
  ];

  // Photography Gallery Items
  const photographyExhibits: PhotoItem[] = [
    {
      id: "photo-1",
      title: "Symmetric Brutalism",
      category: "Architectural Lines",
      focal: "35mm",
      shutter: "1/125s",
      iso: "100",
      imgSrc: "/photo_brutalism.png"
    },
    {
      id: "photo-2",
      title: "Tokyo Monorail at Night",
      category: "Cinematic Transit",
      focal: "50mm",
      shutter: "1/80s",
      iso: "800",
      imgSrc: "/photo_tokyo.png"
    },
    {
      id: "photo-3",
      title: "Modular Synthesis Dial",
      category: "Studio Close-up",
      focal: "90mm Macro",
      shutter: "1/60s",
      iso: "400",
      imgSrc: "/photo_synth.png"
    },
    {
      id: "photo-4",
      title: "Paris Nightscape",
      category: "Atmospheric Night",
      focal: "35mm",
      shutter: "1/8s",
      iso: "1600",
      imgSrc: "/photo_paris.png"
    }
  ];

  // Signature ledger state (Frosted timeline nodes)
  const [signatures, setSignatures] = useState<GuestbookEntry[]>([
    {
      id: "1",
      name: "S. Vance",
      message: "This pastel fluid cursor canvas is absolutely breathtaking to glide around. Unbelievable UX polish.",
      tag: "Design Lead",
      timestamp: "Jul 19, 2026"
    },
    {
      id: "2",
      name: "P. Harrison",
      message: "The way the 3D developer Pop collectible follows my mouse makes it feel like an interactive game. Exceptional.",
      tag: "FDE Engineer",
      timestamp: "Jul 18, 2026"
    },
    {
      id: "3",
      name: "L. Kincaid",
      message: "A perfect blend of highly technical serverless logs and gorgeous pastel animations. Exactly what an FDE site should be.",
      tag: "Creative Developer",
      timestamp: "Jul 16, 2026"
    }
  ]);

  // Form states
  const [formName, setFormName] = useState("");
  const [formMsg, setFormMsg] = useState("");
  const [formTag, setFormTag] = useState("FDE Engineer");

  // Live GitHub Integration States
  const [githubCommits, setGithubCommits] = useState<Commit[]>([]);
  const [githubProfile, setGithubProfile] = useState<{
    name: string;
    bio: string;
    avatarUrl: string;
    followers: number;
    publicRepos: number;
  } | null>(null);
  const [loadingGithub, setLoadingGithub] = useState(true);

  // Dynamic Scroll zoom listener ref
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [visibleCards, setVisibleCards] = useState<{[key: string]: boolean}>({});

  // Smooth scroll handler
  const scrollTo = (elementId: string) => {
    setActiveSection(elementId);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Clock component hook
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Europe/London",
        }) + " BST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track scroll position to update active side nav highlight
  useEffect(() => {
    const handleScrollHighlight = () => {
      const scrollPos = window.scrollY + 200;
      const sections = [
        "about", 
        "currently-working", 
        "experience",
        "projects", 
        "photography", 
        "creative-work", 
        "github-commits", 
        "registry-patchbay"
      ];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScrollHighlight);
    return () => window.removeEventListener("scroll", handleScrollHighlight);
  }, []);

  // Fetch Live GitHub Activity (Events API)
  useEffect(() => {
    const fallbackCommitsList: Commit[] = [
      {
        id: "fc1",
        hash: "8c3f4e2",
        branch: "sanskar-portfolio:main",
        message: "feat: optimise canvas paint trail latency using hardware-accelerated radial grads",
        time: "10m ago",
        status: "success"
      },
      {
        id: "fc2",
        hash: "2d9b1a5",
        branch: "sanskar-portfolio:main",
        message: "refactor: lock layout boundaries and content grids to prevent screen stretching",
        time: "1h ago",
        status: "success"
      },
      {
        id: "fc3",
        hash: "5f8c3d0",
        branch: "sanskar-portfolio:synth-buffer",
        message: "docs: map Eurorack patch bay modular dials to real macro layouts",
        time: "4h ago",
        status: "success"
      }
    ];

    async function fetchGithubData() {
      try {
        // Fetch GitHub Profile details
        const profileRes = await fetch("https://api.github.com/users/Sanskar-16");
        if (profileRes.ok) {
          const pData = await profileRes.json();
          setGithubProfile({
            name: pData.name || "Sanskar Gupta",
            bio: pData.bio || "Forward Deployed Engineer at Reply",
            avatarUrl: pData.avatar_url,
            followers: pData.followers,
            publicRepos: pData.public_repos
          });
        }

        let parsedCommits: Commit[] = [];

        // 1. Attempt to fetch specific commits for the 'sanskar-portfolio' repository
        try {
          const repoCommitsRes = await fetch("https://api.github.com/repos/Sanskar-16/sanskar-portfolio/commits");
          if (repoCommitsRes.ok) {
            const commitsData = await repoCommitsRes.json();
            if (Array.isArray(commitsData) && commitsData.length > 0) {
              commitsData.forEach((c: any, index: number) => {
                const commitDate = c.commit?.committer?.date || c.commit?.author?.date;
                const elapsedMs = commitDate ? (Date.now() - new Date(commitDate).getTime()) : 0;
                const elapsedHrs = Math.floor(elapsedMs / (1000 * 60 * 60));
                let timeStr = "";
                
                if (elapsedHrs === 0) {
                  const elapsedMins = Math.floor(elapsedMs / (1000 * 60));
                  timeStr = elapsedMins <= 1 ? "Just now" : `${elapsedMins}m ago`;
                } else if (elapsedHrs < 24) {
                  timeStr = `${elapsedHrs}h ago`;
                } else {
                  timeStr = commitDate ? new Date(commitDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric"
                  }) : "recently";
                }

                parsedCommits.push({
                  id: `repo-${c.sha}-${index}`,
                  hash: c.sha.substring(0, 7),
                  branch: "sanskar-portfolio:main",
                  message: c.commit?.message?.split("\n")[0] || "Commit", // Get first line of message
                  time: timeStr,
                  status: "success",
                  url: c.html_url
                });
              });
            }
          }
        } catch (repoErr) {
          console.warn("Failed to fetch repository commits, using global events fallback:", repoErr);
        }

        // 2. Fallback to general Push Events from the user if portfolio-specific fetch yielded nothing
        if (parsedCommits.length === 0) {
          const eventsRes = await fetch("https://api.github.com/users/Sanskar-16/events");
          if (eventsRes.ok) {
            const events = await eventsRes.json();
            const pushEvents = events.filter((e: any) => e.type === "PushEvent");
            
            pushEvents.forEach((ev: any) => {
              const branchName = ev.payload.ref ? ev.payload.ref.replace("refs/heads/", "") : "main";
              const repoName = ev.repo.name.replace("Sanskar-16/", "");
              
              if (ev.payload.commits && ev.payload.commits.length > 0) {
                ev.payload.commits.forEach((c: any, index: number) => {
                  const elapsedMs = Date.now() - new Date(ev.created_at).getTime();
                  const elapsedHrs = Math.floor(elapsedMs / (1000 * 60 * 60));
                  let timeStr = "";
                  
                  if (elapsedHrs === 0) {
                    const elapsedMins = Math.floor(elapsedMs / (1000 * 60));
                    timeStr = elapsedMins <= 1 ? "Just now" : `${elapsedMins}m ago`;
                  } else if (elapsedHrs < 24) {
                    timeStr = `${elapsedHrs}h ago`;
                  } else {
                    timeStr = new Date(ev.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric"
                    });
                  }

                  parsedCommits.push({
                    id: `event-${ev.id}-${index}`,
                    hash: c.sha.substring(0, 7),
                    branch: `${repoName}:${branchName}`,
                    message: c.message,
                    time: timeStr,
                    status: "success",
                    url: `https://github.com/Sanskar-16/${repoName}/commit/${c.sha}`
                  });
                });
              }
            });
          }
        }

        // 3. Update state with commits (up to 5 entries), fallback to mock commits if empty
        if (parsedCommits.length > 0) {
          setGithubCommits(parsedCommits.slice(0, 5));
        } else {
          setGithubCommits(fallbackCommitsList);
        }
      } catch (err) {
        console.error("Error loading GitHub data:", err);
        setGithubCommits(fallbackCommitsList);
      } finally {
        setLoadingGithub(false);
      }
    }

    fetchGithubData();
  }, []);

  // Butter-Smooth HTML5 Canvas Paint System (Hardware Accelerated via Radial Gradients)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: PaintParticle[] = [];

    // Light-mode safe pastely hues: soft lavender, warm rose, rich sky-blue, mint, lemon
    const colors = [
      "hsla(265, 95%, 85%, 0.28)", // Soft Lavender
      "hsla(345, 95%, 85%, 0.28)", // Soft Rose
      "hsla(200, 95%, 83%, 0.28)", // Soft Sky Blue
      "hsla(120, 80%, 85%, 0.28)", // Soft Mint
      "hsla(45, 95%, 85%, 0.28)"   // Soft Lemon
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Dynamic mouse paint trail
    const handleMouseMove = (e: MouseEvent) => {
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: e.clientX,
          y: e.clientY + window.scrollY, // Calculate coordinate matching current scroll height
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 80 + 70, // Generous, broad watercolor brushes
          alpha: 1.0,
          decay: Math.random() * 0.002 + 0.004 // Clean decay rates so trails persist beautifully
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Draw frame loop
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(index, 1);
          return;
        }

        ctx.save();
        
        // Native pre-feathered HTML5 Radial Gradient (Removes clunky CSS filter blur repaints!)
        const gradient = ctx.createRadialGradient(p.x, p.y - window.scrollY, 0, p.x, p.y - window.scrollY, p.size);
        gradient.addColorStop(0, p.color.replace("0.28", (p.alpha * 0.25).toFixed(3)));
        gradient.addColorStop(0.4, p.color.replace("0.28", (p.alpha * 0.1).toFixed(3)));
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.beginPath();
        ctx.arc(p.x, p.y - window.scrollY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // 3D Tilt rotation event handler for Funko Pop Box
  const handleToyMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -y / 12;
    const rotateY = x / 12;

    setTiltStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`,
      boxShadow: `${-rotateY * 2}px ${rotateX * 2}px 36px rgba(14, 17, 24, 0.05)`
    });
  };

  const handleToyMouseLeave = () => {
    setTiltStyle({
      transform: "rotateX(0deg) rotateY(0deg) scale(1)",
      boxShadow: "0 8px 32px rgba(14, 17, 24, 0.03)"
    });
  };

  // Setup intersection observer for scroll-zooming exhibits
  useEffect(() => {
    const config = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("data-id");
        if (id) {
          setVisibleCards(prev => ({
            ...prev,
            [id]: entry.isIntersecting
          }));
        }
      });
    }, config);

    projects.forEach((proj) => {
      const el = document.getElementById(`card-${proj.id}`);
      if (el && observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [projects]);

  // Submit visitor signatures
  const handleAddSignature = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formMsg.trim()) return;

    const newSignature: GuestbookEntry = {
      id: Date.now().toString(),
      name: formName.trim(),
      message: formMsg.trim(),
      tag: formTag,
      timestamp: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric"
      })
    };

    setSignatures([newSignature, ...signatures]);
    setFormName("");
    setFormMsg("");
  };

  return (
    <>
      <div className="app-layout-wrapper">
      {/* Saturated Fading Pastel Painting Canvas Layer */}
      <canvas className="canvas-paint" ref={canvasRef} />

      {/* App Side Dock Grid Structural Layout */}
      <div className="app-container">
        
        {/* Sticky Left-Hand Navigation Panel */}
        <aside className="sidebar-dock">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span className="active-pulse-dot"></span>
              <span style={{ fontSize: "0.9rem", fontWeight: "800", color: "var(--ink-primary)", letterSpacing: "0.05em" }}>
                SANSKAR.STUDIO
              </span>
            </div>
          </div>

          {/* Anchor scrolling menu list */}
          <nav>
            <ul className="nav-list">
              <li>
                <button 
                  onClick={() => scrollTo("about")} 
                  className={`nav-item ${activeSection === "about" ? "active" : ""}`}
                >
                  <Compass size={14} />
                  <span>ABOUT</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo("currently-working")} 
                  className={`nav-item ${activeSection === "currently-working" ? "active" : ""}`}
                >
                  <Cpu size={14} />
                  <span>RUNTIME FEED</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo("experience")} 
                  className={`nav-item ${activeSection === "experience" ? "active" : ""}`}
                >
                  <Layers size={14} />
                  <span>EXPERIENCE</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo("projects")} 
                  className={`nav-item ${activeSection === "projects" ? "active" : ""}`}
                >
                  <Monitor size={14} />
                  <span>PROJECTS</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo("photography")} 
                  className={`nav-item ${activeSection === "photography" ? "active" : ""}`}
                >
                  <Camera size={14} />
                  <span>PHOTOGRAPHY</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo("creative-work")} 
                  className={`nav-item ${activeSection === "creative-work" ? "active" : ""}`}
                >
                  <Sliders size={14} />
                  <span>CREATIVE WORK</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo("github-commits")} 
                  className={`nav-item ${activeSection === "github-commits" ? "active" : ""}`}
                >
                  <GitBranch size={14} />
                  <span>COMMITS</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo("registry-patchbay")} 
                  className={`nav-item ${activeSection === "registry-patchbay" ? "active" : ""}`}
                >
                  <MessageSquare size={14} />
                  <span>SIGN LEDGER</span>
                </button>
              </li>
            </ul>
          </nav>

          {/* Languages & CV Actions Block */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", borderTop: "1px dashed rgba(14,17,24,0.06)", paddingTop: "1.25rem", margin: "1rem 0" }}>
            {/* Languages */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <span style={{ fontSize: "0.55rem", fontWeight: "bold", color: "var(--ink-muted)", letterSpacing: "0.08em" }}>LANGUAGES_SPOKEN</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.7rem", fontWeight: "700", color: "var(--ink-secondary)" }}>
                  <span>🇬🇧</span>
                  <span>ENGLISH</span>
                  <span style={{ fontSize: "0.55rem", color: "var(--ink-muted)", fontWeight: "normal" }}>(NATIVE)</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.7rem", fontWeight: "700", color: "var(--ink-secondary)" }}>
                  <span>🇮🇳</span>
                  <span>HINDI</span>
                  <span style={{ fontSize: "0.55rem", color: "var(--ink-muted)", fontWeight: "normal" }}>(FLUENT)</span>
                </div>
              </div>
            </div>

            {/* CV Download button */}
            <button 
              onClick={() => window.print()}
              className="ink-button"
              style={{ padding: "0.6rem 0.8rem", fontSize: "0.7rem", gap: "0.4rem", width: "100%", justifyContent: "center", cursor: "pointer" }}
            >
              <Download size={11} />
              <span>DOWNLOAD CV</span>
            </button>
          </div>

          {/* Live system clock dock */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", borderTop: "1px solid rgba(14,17,24,0.06)", paddingTop: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.75rem", color: "var(--ink-secondary)" }}>
              <Clock size={12} style={{ color: "var(--accent-clay)" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontWeight: "bold" }}>{currentTime || "00:00:00 BST"}</span>
            </div>
            <p style={{ fontSize: "0.6rem", color: "var(--ink-muted)", fontWeight: "bold" }}>STATIONED: LONDON_UK</p>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="content-area">
          
          {/* Hero Segment */}
          <section id="about" className="hero-grid animate-fade-up">
            <div className="hero-text-block" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                <span className="badge badge-accent">FORWARD_DEPLOYED_ENGINEER</span>
                <span className="badge">REPLY</span>
              </div>

              <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em", color: "var(--ink-primary)", fontWeight: "800", lineHeight: "1.1" }}>
                Hi, I'm <span style={{ color: "var(--accent-clay)" }}>Sanskar</span>
              </h1>
              
              <p style={{ fontSize: "1.05rem", color: "var(--ink-secondary)", lineHeight: "1.7", fontWeight: "400" }}>
                Forward Deployed Engineer @ Reply. Specialising in production-grade systems integration, high-throughput stream processing pipelines, and custom low-latency modular synthesizer control panels.
              </p>

              <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                <button onClick={() => scrollTo("projects")} className="ink-button" style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
                  <span>EXHIBITS</span>
                  <ChevronRight size={14} />
                </button>
                <button onClick={() => scrollTo("registry-patchbay")} className="outline-button" style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
                  <span>SIGN LEDGER</span>
                </button>
                <button 
                  onClick={() => window.print()} 
                  className="outline-button" 
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", cursor: "pointer" }}
                >
                  <Download size={14} />
                  <span>DOWNLOAD CV</span>
                </button>
              </div>
            </div>

            {/* Toy box - Loaded with exaggerates oversized head character */}
            <div className="hero-collectible-block" style={{ display: "flex", justifyContent: "center" }}>
              <div className="collectible-case">
                <div 
                  className="collectible-inner glass-card"
                  onMouseMove={handleToyMouseMove}
                  onMouseLeave={handleToyMouseLeave}
                  style={{
                    ...tiltStyle,
                    padding: "1.75rem",
                    cursor: "grab",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    background: "rgba(255, 255, 255, 0.65)",
                    border: "1px solid rgba(255, 255, 255, 0.85)"
                  }}
                >
                  {/* Box labels */}
                  <div style={{ width: "100%", display: "flex", justifyContent: "space-between", fontSize: "0.6rem", color: "var(--ink-muted)", fontWeight: "bold", borderBottom: "1px solid rgba(14,17,24,0.06)", paddingBottom: "0.6rem", marginBottom: "1.25rem" }}>
                    <span>SER_CODE // SANSKAR_01</span>
                    <span>COLLECTIBLE_TOY // LIMIT_ED</span>
                  </div>

                  {/* 3D Toy Element with oversized proportions */}
                  <div style={{ 
                    transform: "translateZ(40px)", 
                    width: "100%", 
                    aspectRatio: "1/1", 
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <img 
                      src="/sanskar_reply_fde_funkopop.png" 
                      alt="Sanskar Custom 3D Collectible Toy with Oversized Head" 
                      className="funkopop-float"
                    />
                  </div>

                  {/* Toy stand label */}
                  <div style={{ 
                    width: "100%", 
                    background: "rgba(14, 17, 24, 0.03)", 
                    border: "1px solid rgba(14, 17, 24, 0.05)",
                    padding: "0.6rem", 
                    borderRadius: "8px", 
                    textAlign: "center",
                    marginTop: "1.25rem"
                  }}>
                    <p style={{ fontSize: "0.65rem", fontWeight: "800", color: "var(--ink-primary)", letterSpacing: "0.15em" }}>
                      sanskar if he were a funkopop
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interests SVG Animated Doodles Section */}
          <section style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1rem" }}>
            <div>
              <p style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--accent-clay)", letterSpacing: "0.1em" }}>PERSONAL_NODES // PASSIONS</p>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "800", marginTop: "0.25rem" }}>Interests & Focus Fields</h2>
            </div>
            
            <div className="interest-doodle-grid">
              {/* Bouldering Card */}
              <div className="interest-card">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                  {/* Ground line */}
                  <path d="M10 85 Q 50 88, 90 85" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Climbing Wall Profile */}
                  <path d="M15 15 L15 85 M15 45 L30 45" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
                  {/* Climbing holds */}
                  <path d="M22 28 Q 26 26, 30 29" stroke="#1A1A1A" strokeWidth="2.5" fill="#f43f5e" strokeLinecap="round" />
                  <circle cx="55" cy="22" r="4.5" stroke="#1A1A1A" strokeWidth="2.5" fill="#3b82f6" />
                  <path d="M72 58 Q 78 55, 84 59" stroke="#1A1A1A" strokeWidth="2.5" fill="#eab308" strokeLinecap="round" />
                  {/* Hand-drawn stick figure climber */}
                  <circle cx="50" cy="38" r="6.5" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
                  <path d="M50 44.5 L50 58" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Left hand reaching hold */}
                  <path d="M50 46 Q 35 38, 26 28" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  {/* Right hand reaching hold */}
                  <path d="M50 46 Q 54 40, 55 26.5" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  {/* Left leg stepping */}
                  <path d="M50 58 L42 66 L38 66" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  {/* Right leg hanging */}
                  <path d="M50 58 L56 70 L64 74" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  {/* Chalk bag */}
                  <path d="M46 58 Q 50 63, 54 58" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
                </svg>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: "800", color: "var(--ink-primary)" }}>BOULDERING</span>
                  <span style={{ fontSize: "0.65rem", color: "var(--ink-muted)" }}>Athletic Problem Solving</span>
                </div>
              </div>

              {/* Modular Synth Card */}
              <div className="interest-card">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                  {/* Ground line */}
                  <path d="M10 85 L90 85" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Palm tree (Left side) */}
                  <path d="M22 85 Q 18 55, 25 25" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <path d="M25 25 Q 15 15, 5 22" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M25 25 Q 22 10, 15 5" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M25 25 Q 35 15, 45 20" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M25 25 Q 32 32, 35 45" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  {/* Picnic blanket */}
                  <path d="M35 85 L85 85 L80 81 L40 81 Z" stroke="#1A1A1A" strokeWidth="2" fill="none" />
                  {/* Synthesizer module box */}
                  <rect x="54" y="65" width="12" height="16" rx="2" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
                  <circle cx="60" cy="70" r="1.5" stroke="#1A1A1A" strokeWidth="1.5" />
                  {/* Patch cable */}
                  <path d="M58 76 Q 60 83, 62 76" stroke="var(--accent-clay)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  {/* Left stick figure sitting */}
                  <circle cx="45" cy="62" r="5" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
                  <path d="M45 67 L45 78" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M45 70 L54 71" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M45 78 L38 82 L48 84" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  {/* Right stick figure sitting */}
                  <circle cx="75" cy="62" r="5" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
                  <path d="M75 67 L75 78" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M75 70 L66 71" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M75 78 L82 82 L72 84" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  {/* Floating soundwave / heart */}
                  <path d="M55 45 C52 40, 56 36, 60 41 C64 36, 68 40, 65 45 L60 51 Z" stroke="#eab308" strokeWidth="1.5" fill="none" />
                </svg>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: "800", color: "var(--ink-primary)" }}>MODULAR_SYNTH</span>
                  <span style={{ fontSize: "0.65rem", color: "var(--ink-muted)" }}>Eurorack & Sonic Physics</span>
                </div>
              </div>

              {/* Cooking Card */}
              <div className="interest-card">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                  {/* Head & Smiling Face */}
                  <circle cx="50" cy="50" r="7" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
                  <circle cx="47.5" cy="49" r="1.2" fill="#1A1A1A" />
                  <circle cx="52.5" cy="49" r="1.2" fill="#1A1A1A" />
                  <path d="M47.5 52.5 Q 50 55.5, 52.5 52.5" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  {/* Chef Hat */}
                  <path d="M42 41 L58 41 L56 35 L44 35 Z" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                  <path d="M44 35 C40 32, 40 23, 46 24 C46 20, 54 20, 54 24 C60 23, 60 32, 56 35" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Hair */}
                  <path d="M43 45 Q 38 47, 40 55" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                  <path d="M57 45 Q 62 47, 60 55" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                  {/* Trapezoidal Apron Body */}
                  <path d="M46 57 L43 78 L57 78 L54 57 Z" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                  <line x1="50" y1="57" x2="50" y2="78" stroke="#1A1A1A" strokeWidth="1.5" />
                  {/* Left Arm holding Spatula */}
                  <path d="M44 60 Q 49 68, 58 75" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <line x1="58" y1="75" x2="68" y2="70" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M68 70 L76 66 L78 69 L70 73 Z" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                  {/* Right Arm resting */}
                  <path d="M56 60 Q 59 66, 56 70" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  {/* Steam & Food Squiggles */}
                  <circle cx="68" cy="46" r="3" fill="#FAF8F0" stroke="#1A1A1A" strokeWidth="2.5" />
                  <circle cx="73" cy="52" r="1.5" fill="#1A1A1A" />
                  <path d="M68 39 Q 71 36, 67 33 Q 70 30, 68 28" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: "800", color: "var(--ink-primary)" }}>COOKING</span>
                  <span style={{ fontSize: "0.65rem", color: "var(--ink-muted)" }}>Culinary Craft & Chemistry</span>
                </div>
              </div>

              {/* Cycling Card */}
              <div className="interest-card">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                  {/* Ground line */}
                  <path d="M10 82 L90 82" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Wheels */}
                  <circle cx="28" cy="68" r="12" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
                  <circle cx="72" cy="68" r="12" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
                  <circle cx="28" cy="68" r="1.5" fill="#1A1A1A" />
                  <circle cx="72" cy="68" r="1.5" fill="#1A1A1A" />
                  {/* Triangulated bicycle frame */}
                  <line x1="28" y1="68" x2="45" y2="48" stroke="#1A1A1A" strokeWidth="2.5" />
                  <line x1="28" y1="68" x2="45" y2="68" stroke="#1A1A1A" strokeWidth="2.5" />
                  <line x1="45" y1="68" x2="45" y2="48" stroke="#1A1A1A" strokeWidth="2.5" />
                  <line x1="45" y1="68" x2="62" y2="48" stroke="#1A1A1A" strokeWidth="2.5" />
                  <line x1="45" y1="48" x2="62" y2="48" stroke="#1A1A1A" strokeWidth="2.5" />
                  <line x1="62" y1="44" x2="72" y2="68" stroke="#1A1A1A" strokeWidth="2.5" />
                  {/* Handlebars */}
                  <path d="M62 44 L60 38 L54 38" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  {/* Saddle */}
                  <path d="M41 45 L49 45" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Rider */}
                  <circle cx="53" cy="24" r="5" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
                  <line x1="51" y1="29" x2="44" y2="46" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M51 32 L58 38 L60 38" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M44 46 L40 54 L44 64" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M44 46 L50 58 L46 72" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  {/* Speed lines */}
                  <path d="M12 40 L18 40 M14 46 L19 46" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: "800", color: "var(--ink-primary)" }}>CYCLING</span>
                  <span style={{ fontSize: "0.65rem", color: "var(--ink-muted)" }}>Urban Endurance Rides</span>
                </div>
              </div>
            </div>
          </section>

          {/* Currently Working On Segment */}
          <section id="currently-working" className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ borderBottom: "var(--border-dark)", paddingBottom: "1rem" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--accent-clay)", letterSpacing: "0.1em" }}>ACTIVE_TELEMETRY</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: "800", marginTop: "0.25rem" }}>Currently Working On</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "2rem" }}>
              {/* Sprints Panel */}
              <div className="status-ledger">
                <p style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--ink-muted)" }}>ACTIVE_SPRINTS</p>
                
                <div className="status-node">
                  <div className="active-pulse-dot" style={{ width: "8px", height: "8px" }}></div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                    <span style={{ fontWeight: "800", color: "var(--ink-primary)" }}>Design System Refactor (v2.6)</span>
                    <span style={{ fontSize: "0.65rem", color: "var(--ink-muted)" }}>Tightening component layout proportions & CSS grid rules</span>
                  </div>
                </div>

                <div className="status-node">
                  <div className="active-pulse-dot" style={{ width: "8px", height: "8px", background: "#f59e0b", boxShadow: "0 0 8px #f59e0b" }}></div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                    <span style={{ fontWeight: "800", color: "var(--ink-primary)" }}>Synthesizer MIDI Buffer Library</span>
                    <span style={{ fontSize: "0.65rem", color: "var(--ink-muted)" }}>Injecting low-latency scheduling inside audio clock routes</span>
                  </div>
                </div>
              </div>

              {/* Focus / Studio State */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--ink-muted)" }}>STUDIO_SOUNDSCAPE</p>
                <div style={{ background: "rgba(14,17,24,0.03)", border: "1px solid rgba(14,17,24,0.04)", padding: "1.1rem", borderRadius: "12px", display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <Music size={24} style={{ color: "var(--accent-clay)" }} />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: "800", color: "var(--ink-primary)" }}>Modular Session #402</span>
                    <span style={{ fontSize: "0.65rem", color: "var(--ink-muted)" }}>Synthesizer Live Patch Stream</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Aesthetic Socials Row Segment */}
          <section id="socials-nodes" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "0.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(14,17,24,0.05)", paddingBottom: "0.6rem" }}>
              <h3 style={{ fontSize: "0.85rem", fontWeight: "800", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Activity size={13} style={{ color: "var(--accent-clay)" }} />
                <span>AESTHETIC_SOCIAL_HUB</span>
              </h3>
              <span style={{ fontSize: "0.65rem", color: "var(--ink-muted)", fontWeight: "bold" }}>
                CONNECT_NODES
              </span>
            </div>

            {/* Grid layout of beautiful branded SVG links */}
            <div className="social-grid">
              <a href="https://www.instagram.com/sans_acid/" className="social-button instagram" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>INSTAGRAM</span>
              </a>

              <a href="https://www.linkedin.com/in/sanskargupta/" className="social-button linkedin" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LINKEDIN</span>
              </a>

              <a href="https://vsco.co/sanskarg/gallery" className="social-button vsco" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  <path d="M2 12h20"></path>
                </svg>
                <span>VSCO_GALLERY</span>
              </a>

              <a href="https://medium.com/@sanskargupta15" className="social-button medium" target="_blank" rel="noopener noreferrer">
                <BookOpen size={16} />
                <span>MEDIUM</span>
              </a>

              <a href="https://soundcloud.com/sanskaaar" className="social-button soundcloud" target="_blank" rel="noopener noreferrer">
                <Music size={16} />
                <span>SOUNDCLOUD</span>
              </a>

              <a href="https://github.com/Sanskar-16" className="social-button github" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>GITHUB</span>
              </a>
            </div>
          </section>

          {/* Infinite Horizontal Skills Bar Carousel */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
            <div className="marquee-container">
              <div className="marquee-track">
                {[...skills, ...skills].map((skill, index) => (
                  <div key={index} className="glass-card" style={{ padding: "0.6rem 1.6rem", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.75)", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", fontWeight: "700", color: "var(--ink-primary)" }}>
                    <Sparkles size={11} style={{ color: "var(--accent-clay)" }} />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Experience - Career Sequence Ledger */}
          <section id="experience" className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ borderBottom: "var(--border-dark)", paddingBottom: "1rem" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--accent-clay)", letterSpacing: "0.1em" }}>SYSTEMS_LOG // PROFESSIONAL_HISTORY</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: "800", marginTop: "0.25rem" }}>Career Sequence Ledger</h2>
            </div>

            <p style={{ fontSize: "0.95rem", color: "var(--ink-secondary)", lineHeight: "1.6" }}>
              Deployments registry mapping technical milestones, software engineering roles, and AI tech leadership roles delivered across enterprise ecosystems.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", position: "relative" }}>
              {/* Timeline Connector Line */}
              <div style={{ 
                position: "absolute", 
                left: "11px", 
                top: "10px", 
                bottom: "10px", 
                width: "2px", 
                borderLeft: "2px dashed var(--border-dark)", 
                opacity: 0.5 
              }} />

              {workHistory.map((item) => {
                const isExpanded = expandedLogs[item.id] || false;
                return (
                  <div key={item.id} style={{ display: "flex", gap: "1.5rem", position: "relative" }}>
                    {/* Glowing Timeline Node */}
                    <div style={{ 
                      width: "24px", 
                      height: "24px", 
                      borderRadius: "50%", 
                      background: "var(--paper-light)", 
                      border: "2px solid var(--border-dark)", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      zIndex: 2,
                      flexShrink: 0,
                      marginTop: "4px",
                      boxShadow: "0 0 8px rgba(0,0,0,0.05)"
                    }}>
                      <div style={{ 
                        width: "8px", 
                        height: "8px", 
                        borderRadius: "50%", 
                        background: item.id.includes("go") ? "var(--accent-clay)" : "var(--ink-muted)",
                        boxShadow: item.id.includes("go") ? "0 0 8px var(--accent-clay)" : "none"
                      }} />
                    </div>

                    {/* Timeline Item Content Card */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", width: "100%" }}>
                      <div style={{ 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "flex-start", 
                        flexWrap: "wrap",
                        gap: "0.5rem" 
                      }}>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                            <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--ink-primary)" }}>{item.role}</h3>
                            <span className="badge badge-accent" style={{ fontSize: "0.65rem", padding: "0.15rem 0.5rem" }}>{item.company}</span>
                            <span className="badge" style={{ fontSize: "0.65rem", padding: "0.15rem 0.5rem", opacity: 0.85 }}>{item.tag}</span>
                          </div>
                          <p style={{ fontSize: "0.75rem", fontWeight: "600", color: "var(--ink-muted)", marginTop: "0.15rem" }}>
                            {item.period} · {item.duration} | {item.location}
                          </p>
                        </div>
                      </div>

                      {/* Crisp One-Liner */}
                      <p style={{ fontSize: "0.95rem", color: "var(--ink-secondary)", lineHeight: "1.5", margin: 0, fontStyle: "italic" }}>
                        &ldquo;{item.oneliner}&rdquo;
                      </p>

                      {/* Interactive Detailed Bullets Collapsible Drawer */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <button 
                          onClick={() => toggleLog(item.id)}
                          style={{
                            alignSelf: "flex-start",
                            background: "transparent",
                            border: "none",
                            padding: 0,
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.65rem",
                            fontWeight: "bold",
                            color: "var(--accent-clay)",
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.25rem",
                            letterSpacing: "0.05em"
                          }}
                        >
                          <span>{isExpanded ? "[-] CLOSE_LEDGER_RECORDS" : "[+] EXPAND_LEDGER_RECORDS"}</span>
                        </button>

                        {isExpanded && (
                          <div style={{
                            padding: "1rem",
                            borderRadius: "8px",
                            background: "rgba(14,17,24,0.02)",
                            border: "1px solid var(--border-dark)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                            marginTop: "0.25rem",
                            animation: "slide-down 0.2s ease-out"
                          }}>
                            {item.bullets.map((bullet, idx) => (
                              <div key={idx} style={{ display: "flex", gap: "0.5rem", fontSize: "0.85rem", color: "var(--ink-secondary)", lineHeight: "1.5" }}>
                                <span style={{ color: "var(--accent-clay)", flexShrink: 0 }}>&bull;</span>
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Proportional Double-Column Projects Catalog */}
          <section id="projects" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ borderBottom: "var(--border-dark)", paddingBottom: "1rem" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--accent-clay)", letterSpacing: "0.1em" }}>CASE_STUDIES</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: "800", marginTop: "0.25rem" }}>Software Exhibits</h2>
            </div>

            <div className="projects-grid">
              {projects.map((project) => {
                const isVisible = visibleCards[project.id];
                return (
                  <article 
                    key={project.id}
                    id={`card-${project.id}`}
                    data-id={project.id}
                    className="glass-card"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.25rem",
                      justifyContent: "space-between",
                      borderWidth: "1px",
                      borderColor: isVisible ? "rgba(77, 108, 245, 0.25)" : "rgba(14, 17, 24, 0.06)",
                      boxShadow: isVisible ? "0 12px 36px rgba(77, 108, 245, 0.05)" : "var(--shadow-glass)"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(14,17,24,0.04)", paddingBottom: "0.6rem", fontSize: "0.7rem", color: "var(--ink-muted)", fontWeight: "bold" }}>
                      <span>{project.serial} // {project.year}</span>
                      <span>ROLE: {project.role.toUpperCase()}</span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--ink-primary)" }}>
                          {project.title}
                        </h3>
                        <a href={project.link} aria-label={`View ${project.title}`} style={{ color: "var(--ink-primary)" }}>
                          <ArrowUpRight size={18} />
                        </a>
                      </div>
                      <p style={{ fontSize: "0.75rem", color: "var(--accent-clay)", fontWeight: "bold", textTransform: "uppercase" }}>
                        // {project.subtitle}
                      </p>
                      <p style={{ fontSize: "0.85rem", color: "var(--ink-secondary)", lineHeight: "1.5" }}>
                        {project.description}
                      </p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem", borderTop: "1px solid rgba(14,17,24,0.04)", paddingTop: "0.6rem" }}>
                      <div style={{ display: "flex", gap: "0.3rem" }}>
                        {project.tags.map((tag) => (
                          <span key={tag} className="badge" style={{ fontSize: "0.6rem", padding: "0.2rem 0.6rem" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Photography Segment */}
          <section id="photography" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ borderBottom: "var(--border-dark)", paddingBottom: "1rem" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--accent-clay)", letterSpacing: "0.1em" }}>VISUAL_EXHIBITIONS</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: "800", marginTop: "0.25rem" }}>Photography Gallery</h2>
            </div>

            <div className="photography-carousel">
              {photographyExhibits.map((photo) => (
                <a 
                  key={photo.id} 
                  href="https://vsco.co/sanskarg/gallery" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="photography-card"
                  title="Click to view full VSCO Exhibition"
                >
                  <img 
                    src={photo.imgSrc} 
                    alt={photo.title} 
                    className="photography-img" 
                    loading="lazy"
                  />
                  
                  {/* Hover telemetry specs */}
                  <div className="photography-overlay">
                    <span style={{ fontSize: "0.6rem", fontWeight: "bold", color: "var(--accent-clay)", letterSpacing: "0.05em" }}>
                      {photo.category.toUpperCase()}
                    </span>
                    <h4 style={{ fontSize: "0.95rem", color: "#fff", fontWeight: "800" }}>{photo.title}</h4>
                    <div style={{ display: "flex", gap: "0.5rem", fontSize: "0.65rem", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-mono)", marginTop: "0.2rem" }}>
                      <span>{photo.focal}</span>
                      <span>•</span>
                      <span>{photo.shutter}</span>
                      <span>•</span>
                      <span>ISO {photo.iso}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Creative Work Segment */}
          <section id="creative-work" className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ borderBottom: "var(--border-dark)", paddingBottom: "1rem" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--accent-clay)", letterSpacing: "0.1em" }}>SOUNDSCAPE_&_SYNTHESIS</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: "800", marginTop: "0.25rem" }}>Creative Synthesis Stations</h2>
            </div>
            
            <p style={{ fontSize: "0.95rem", color: "var(--ink-secondary)", lineHeight: "1.6" }}>
              Fascinated by high-end audio engineering and modular synth racks. I experiment with patching digital oscillators, frequency dividers, and analog clock telemetry triggers inside the Web Audio API framework.
            </p>

            {/* Modular Eurorack Rack Graphic Representation */}
            <div style={{ 
              background: "rgba(14, 17, 24, 0.03)", 
              border: "1px solid rgba(14, 17, 24, 0.05)", 
              borderRadius: "14px", 
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem"
            }}>
              {/* Rack panel controls mock */}
              <div style={{ display: "flex", gap: "2rem", justifyContent: "space-between", flexWrap: "wrap" }}>
                {["OSC_A (SINE)", "FILTER_ENV", "LFO_CLOCK", "DELAY_TAP"].map((node, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "center" }}>
                    <span style={{ fontSize: "0.65rem", fontWeight: "bold", color: "var(--ink-muted)" }}>{node}</span>
                    <div style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      border: "2px solid var(--accent-clay-light)",
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative"
                    }}>
                      <div style={{
                        width: "4px",
                        height: "20px",
                        background: "var(--accent-clay)",
                        borderRadius: "2px",
                        transform: `rotate(${i * 45}deg)`,
                        transformOrigin: "bottom center",
                        position: "absolute",
                        bottom: "22px"
                      }}></div>
                    </div>
                    <span style={{ fontSize: "0.6rem", fontFamily: "var(--font-mono)", color: "var(--ink-secondary)" }}>{70 + (i * 10)}%</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* GitHub Commit Panel Segment */}
          <section id="github-commits" className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ borderBottom: "var(--border-dark)", paddingBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--accent-clay)", letterSpacing: "0.1em" }}>VERSION_CONTROL</p>
                <h2 style={{ fontSize: "1.75rem", fontWeight: "800", marginTop: "0.25rem" }}>Commit Ledger</h2>
              </div>
              <a 
                href="https://github.com/Sanskar-16" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ fontSize: "0.7rem", fontWeight: "bold", color: "var(--ink-muted)", fontFamily: "var(--font-mono)", textDecoration: "none", border: "1px solid rgba(14,17,24,0.1)", padding: "0.35rem 0.75rem", borderRadius: "10px", display: "flex", alignItems: "center", gap: "0.4rem" }}
              >
                <span>OPEN_GITHUB</span>
                <ArrowUpRight size={12} />
              </a>
            </div>

            {/* GitHub Profile Overlay Card */}
            <div style={{ display: "flex", gap: "1.5rem", background: "rgba(14,17,24,0.02)", border: "1px solid rgba(14,17,24,0.04)", borderRadius: "16px", padding: "1.25rem" }} className="github-profile-overlay-container">
              {/* Profile details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", flex: "1 1 50%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <img 
                    src={githubProfile ? githubProfile.avatarUrl : "/sanskar_reply_fde_funkopop.png"} 
                    alt="Sanskar Gupta" 
                    style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1.5px solid var(--accent-clay)", background: "#fff" }} 
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: "800", color: "var(--ink-primary)" }}>
                      {githubProfile ? githubProfile.name : "Sanskar Gupta"}
                    </h3>
                    <span style={{ fontSize: "0.65rem", fontFamily: "var(--font-mono)", color: "var(--ink-muted)" }}>
                      @Sanskar-16
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: "0.75rem", color: "var(--ink-secondary)", lineHeight: "1.4" }}>
                  {githubProfile ? githubProfile.bio : "Forward Deployed Engineer @ Reply. Exploring systems, streams, and synths."}
                </p>

                {/* Followers & Repos counts */}
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ display: "flex", gap: "0.3rem", fontSize: "0.7rem" }}>
                    <span style={{ fontWeight: "800", color: "var(--ink-primary)" }}>{githubProfile ? githubProfile.followers : "28"}</span>
                    <span style={{ color: "var(--ink-muted)" }}>followers</span>
                  </div>
                  <div style={{ display: "flex", gap: "0.3rem", fontSize: "0.7rem" }}>
                    <span style={{ fontWeight: "800", color: "var(--ink-primary)" }}>{githubProfile ? githubProfile.publicRepos : "19"}</span>
                    <span style={{ color: "var(--ink-muted)" }}>repositories</span>
                  </div>
                </div>
              </div>

              {/* Contributions Grid Visualizer */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flex: "1 1 50%" }} className="github-grid-block">
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.65rem", fontWeight: "bold", fontFamily: "var(--font-mono)", color: "var(--ink-muted)" }}>
                  <span>CONTRIBUTION_MAP</span>
                  <span style={{ color: "var(--accent-clay)" }}>58 contributions</span>
                </div>
                
                {/* 12 columns x 5 rows grid replicating contribution map */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "4px", background: "rgba(14,17,24,0.01)", padding: "8px", borderRadius: "10px", border: "1px solid rgba(14,17,24,0.03)" }}>
                  {Array.from({ length: 60 }).map((_, i) => {
                    // Let's color-code some elements to represent high, medium and low contribution states
                    let bg = "rgba(14, 17, 24, 0.05)"; // light grey
                    if ([2, 12, 15, 23, 27, 34, 45, 48, 56, 58].includes(i)) {
                      bg = "#22c55e"; // intense green
                    } else if ([5, 8, 18, 20, 31, 38, 41, 52].includes(i)) {
                      bg = "#4ade80"; // soft green
                    } else if ([0, 11, 24, 25, 30, 36, 42, 49].includes(i)) {
                      bg = "#86efac"; // very light pastel green
                    } else if ([3, 7, 14, 19, 21, 33, 44, 55].includes(i)) {
                      bg = "#15803d"; // deep forest green
                    }
                    return (
                      <div 
                        key={i} 
                        style={{ 
                          aspectRatio: "1/1", 
                          borderRadius: "2px", 
                          background: bg,
                          boxShadow: bg !== "rgba(14, 17, 24, 0.05)" ? "0px 0px 3px rgba(34, 197, 94, 0.2)" : "none"
                        }} 
                      />
                    );
                  })}
                </div>
                
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.55rem", color: "var(--ink-muted)", fontFamily: "var(--font-mono)" }}>
                  <span>Less</span>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <span style={{ display: "inline-block", width: "7px", height: "7px", background: "rgba(14, 17, 24, 0.05)", borderRadius: "1px" }}></span>
                    <span style={{ display: "inline-block", width: "7px", height: "7px", background: "#86efac", borderRadius: "1px" }}></span>
                    <span style={{ display: "inline-block", width: "7px", height: "7px", background: "#4ade80", borderRadius: "1px" }}></span>
                    <span style={{ display: "inline-block", width: "7px", height: "7px", background: "#22c55e", borderRadius: "1px" }}></span>
                    <span style={{ display: "inline-block", width: "7px", height: "7px", background: "#15803d", borderRadius: "1px" }}></span>
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Commits Feed */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {githubCommits.map((commit) => {
                const elementProps = {
                  className: "commit-line",
                  style: { display: "flex", textDecoration: "none", color: "inherit", cursor: commit.url ? "pointer" : "default" }
                };

                const content = (
                  <>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <CheckCircle2 size={13} style={{ color: "#22c55e" }} />
                      <span style={{ fontSize: "0.65rem", background: "rgba(14,17,24,0.04)", padding: "0.2rem 0.5rem", borderRadius: "4px", fontWeight: "bold", fontFamily: "var(--font-mono)", color: "var(--ink-secondary)" }}>
                        {commit.branch}
                      </span>
                      <span style={{ color: "var(--ink-secondary)", fontWeight: "500", fontSize: "0.8rem" }}>{commit.message}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", fontSize: "0.65rem", color: "var(--ink-muted)", fontFamily: "var(--font-mono)" }}>
                      <span>{commit.hash}</span>
                      <span>{commit.time}</span>
                    </div>
                  </>
                );

                if (commit.url) {
                  return (
                    <a key={commit.id} href={commit.url} target="_blank" rel="noopener noreferrer" {...elementProps}>
                      {content}
                    </a>
                  );
                }

                return (
                  <div key={commit.id} {...elementProps}>
                    {content}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Registry Segment - Beautifully Centered Standalone Panel */}
          <section id="registry-patchbay" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "1.5rem", padding: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(14,17,24,0.05)", paddingBottom: "0.6rem" }}>
                <h3 style={{ fontSize: "0.85rem", fontWeight: "800", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <Layers size={13} style={{ color: "var(--accent-clay)" }} />
                  <span>STUDIO_REGISTRY_BOOK</span>
                </h3>
                <span style={{ fontSize: "0.65rem", color: "var(--ink-muted)", fontWeight: "bold" }}>
                  SIGN_IN_CV
                </span>
              </div>

              {/* Signature form inputs */}
              <form onSubmit={handleAddSignature} className="signature-form">
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label style={{ fontSize: "0.65rem", fontWeight: "bold", color: "var(--ink-muted)" }}>YOUR_NAME</label>
                  <input 
                    type="text" 
                    placeholder="e.g. ADA LOVELACE" 
                    required 
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="input-field" 
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label style={{ fontSize: "0.65rem", fontWeight: "bold", color: "var(--ink-muted)" }}>DISCIPLINE</label>
                  <select 
                    value={formTag} 
                    onChange={(e) => setFormTag(e.target.value)}
                    className="input-field"
                    style={{ appearance: "none" }}
                  >
                    <option value="Designer">Design Lead</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Researcher">Academic</option>
                    <option value="Partner">Studio Guest</option>
                  </select>
                </div>

                <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label style={{ fontSize: "0.65rem", fontWeight: "bold", color: "var(--ink-muted)" }}>YOUR_MESSAGE</label>
                  <textarea 
                    placeholder="Leave a signature on the canvas ledger..." 
                    required 
                    rows={2}
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    className="input-field"
                    style={{ resize: "none" }}
                  />
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <button type="submit" className="ink-button" style={{ width: "100%", justifyContent: "center" }}>
                    <Send size={11} />
                    <span>AFFIX SIGNATURE</span>
                  </button>
                </div>
              </form>

              {/* List of ledger signatures */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem", borderTop: "1px dashed rgba(14,17,24,0.08)", paddingTop: "1.50rem" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: "800", color: "var(--ink-primary)" }}>LOGGED_SIGNATURES</p>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxHeight: "200px", overflowY: "auto", paddingRight: "0.4rem" }}>
                  {signatures.map((entry, index) => (
                    <div 
                      key={entry.id} 
                      className="animate-fade-up"
                      style={{ 
                        paddingBottom: "1rem", 
                        borderBottom: index !== signatures.length - 1 ? "1px solid rgba(14,17,24,0.04)" : "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.35rem"
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--accent-clay)" }}></span>
                          <span style={{ fontSize: "0.85rem", fontWeight: "800", color: "var(--ink-primary)" }}>{entry.name.toUpperCase()}</span>
                        </div>
                        <span style={{ fontSize: "0.65rem", color: "var(--ink-muted)", fontFamily: "var(--font-mono)" }}>{entry.timestamp.toUpperCase()}</span>
                      </div>

                      <p style={{ fontSize: "0.8rem", color: "var(--ink-secondary)", fontStyle: "italic", paddingLeft: "0.9rem", lineHeight: "1.5" }}>
                        "{entry.message}"
                      </p>

                      <div style={{ paddingLeft: "0.9rem", marginTop: "0.2rem" }}>
                        <span className="badge" style={{ fontSize: "0.55rem" }}>{entry.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer style={{ borderTop: "var(--border-dark)", paddingTop: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem", fontSize: "0.75rem", color: "var(--ink-muted)", fontWeight: "500" }}>
            <p>© 2026 SANSKAR.STUDIO // CREATIVE DIGITAL SPACES.</p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <span>CRAFTED WITH</span>
              <Heart size={11} style={{ color: "var(--accent-clay)", fill: "var(--accent-clay)" }} />
              <span>BY SANSKAR.</span>
            </div>
          </footer>
        </main>
      </div>
    </div>

    {/* ==========================================
       PRINT-ONLY RESUME LAYOUT (Dynamic print-CV)
       ========================================== */}
    <div className="print-only-cv">
      <div className="print-cv-header">
        <h1>Sanskar Gupta</h1>
        <p className="print-cv-subtitle">Forward Deployed Engineer (FDE) & Applied AI Lead</p>
        <div className="print-cv-contacts">
          <span>Email: sanskargupta15@gmail.com</span>
          <span>•</span>
          <span>Location: Greater London, UK</span>
          <span>•</span>
          <span>LinkedIn: linkedin.com/in/sanskargupta</span>
          <span>•</span>
          <span>GitHub: github.com/Sanskar-16</span>
          <span>•</span>
          <span>Portfolio: sanskar-portfolio.vercel.app</span>
          <span>•</span>
          <span>Languages: English (Native), Hindi (Fluent)</span>
        </div>
      </div>

      <div className="print-cv-summary">
        Results-driven Forward Deployed Engineer @ Reply specialising in the architecting and end-to-end delivery of production-grade Applied AI pipelines, scalable DevOps configurations, and high-throughput stream processing systems. Proven lead technologist directing government-level software architectures, enterprise agentic solutions, and robust GCP environments with strict compliance and CI/CD automated integrity controls.
      </div>

      <div className="print-cv-section">
        <h2 className="print-cv-section-title">Professional Experience</h2>
        
        <div className="print-cv-item">
          <div className="print-cv-item-header">
            <span className="print-cv-company">GO REPLY</span>
            <span className="print-cv-date">Jan 2026 – Present</span>
          </div>
          <div className="print-cv-item-sub">
            <span>Senior Consultant — Applied AI & DevOps</span>
            <span>Greater London, UK (Hybrid)</span>
          </div>
          <ul className="print-cv-bullets">
            <li>Acted as the hands-on AI Tech Lead for public sector government engagements, guiding engineering teams on the Google ADK framework and designing production-ready agentic architectures.</li>
            <li>Led the end-to-end delivery of enterprise generative AI platforms and agentic solutions for major hospitality and commercial retail clients, scaling initial chat pilots into stable production environments.</li>
            <li>Designed and implemented secure, multi-provider Workforce Identity Federation setups to integrate enterprise search connectors across independent business units.</li>
            <li>Capitalised on an advanced understanding of infrastructure reliability by securing Google Cloud assets, applying strict CI/CD and automated environment controls across live AI workloads.</li>
          </ul>
        </div>

        <div className="print-cv-item">
          <div className="print-cv-item-header">
            <span className="print-cv-company">GO REPLY</span>
            <span className="print-cv-date">Sep 2022 – Dec 2025</span>
          </div>
          <div className="print-cv-item-sub">
            <span>Consultant — Data Scientist & Software Engineer</span>
            <span>Greater London, UK</span>
          </div>
          <ul className="print-cv-bullets">
            <li>Engineered full-stack contract analytics knowledge graphs on Cloud Spanner and built high-performance Go/gRPC telemetry ingestion pipelines for prominent motorsport organisations.</li>
            <li>Built full-stack contract analytics systems for global consumer brands, configuring background databases on Cloud Spanner and mapping complex document relations via Vertex AI.</li>
            <li>Engineered performant React/Go web applications for motorsport clients, building high-throughput ingestion backends to parse fitness telemetry streams directly into BigQuery.</li>
            <li>Provisioned and maintained scalable cloud infrastructure using Terraform, Cloud Build, and VPC Service Controls to establish robust network and resource perimeters.</li>
            <li>Deployed predictive models, customer churn models with Scikit-Learn, and causal impact dynamic pricing engines.</li>
            <li>Orchestrated large-scale legacy platform migrations into Google BigQuery and Looker to modernise enterprise data operations and monetise predictive business intelligence reporting.</li>
          </ul>
        </div>

        <div className="print-cv-item">
          <div className="print-cv-item-header">
            <span className="print-cv-company">ASK ITALIAN</span>
            <span className="print-cv-date">Nov 2021 – Sep 2022</span>
          </div>
          <div className="print-cv-item-sub">
            <span>Chef De Partie</span>
            <span>Colchester, UK</span>
          </div>
          <ul className="print-cv-bullets">
            <li>Managed busy food production lines and kitchen team coordination to deliver premium culinary standards under rapid timeframes, helping secure the 3rd highest national branch profit on Valentine's Day 2022.</li>
          </ul>
        </div>

        <div className="print-cv-item">
          <div className="print-cv-item-header">
            <span className="print-cv-company">UNIVERSITY OF ESSEX</span>
            <span className="print-cv-date">Oct 2020 – Jun 2022</span>
          </div>
          <div className="print-cv-item-sub">
            <span>Resident Assistant & Student Ambassador</span>
            <span>Colchester, UK</span>
          </div>
          <ul className="print-cv-bullets">
            <li>RA: Resolved complex housing disputes, led community building, and championed student mental health.</li>
            <li>Ambassador: Maintained recruitment campaigns and represented the university at regional outreach and marketing events.</li>
          </ul>
        </div>

        <div className="print-cv-item">
          <div className="print-cv-item-header">
            <span className="print-cv-company">LIFEWAYS GROUP</span>
            <span className="print-cv-date">Feb 2020 – Nov 2020</span>
          </div>
          <div className="print-cv-item-sub">
            <span>Support Worker</span>
            <span>Colchester, UK</span>
          </div>
          <ul className="print-cv-bullets">
            <li>Administered daily healthcare assistance, strict medical protocols, care routines, and meals for vulnerable service users.</li>
          </ul>
        </div>
      </div>

      <div className="print-cv-section">
        <h2 className="print-cv-section-title">Technical Skills & Expertise</h2>
        <div className="print-cv-skills-grid">
          <div className="print-cv-skills-label">AI & Machine Learning</div>
          <div className="print-cv-skills-val">PyTorch, Transformers (Hugging Face), LLM Fine-Tuning, Vector Search, Vertex AI MLOps, Scikit-Learn, Pandas, NumPy, Causal Impact Analysis</div>
        </div>
        <div className="print-cv-skills-grid">
          <div className="print-cv-skills-label">Systems & Backend</div>
          <div className="print-cv-skills-val">Go, gRPC, Stream Processing, Kafka Pipelines, Low-Latency Buffers, Cloud Spanner DB, Google BigQuery, Looker Analytics, Web Audio API, WebGL</div>
        </div>
        <div className="print-cv-skills-grid">
          <div className="print-cv-skills-label">Cloud & Infrastructure</div>
          <div className="print-cv-skills-val">GCP Architecture, Terraform (IaC), Cloud Build, CI/CD, VPC Service Controls, Workforce Identity Federation, Automated Environments</div>
        </div>
      </div>

      <div className="print-cv-section">
        <h2 className="print-cv-section-title">Education & Certifications</h2>
        <div className="print-cv-item">
          <div className="print-cv-item-header">
            <span className="print-cv-company">UNIVERSITY OF ESSEX</span>
            <span className="print-cv-date">Colchester, UK</span>
          </div>
          <div className="print-cv-item-sub">
            <span>Academic Higher Education & Outreach Campaigns</span>
            <span>2019 – 2022</span>
          </div>
        </div>
        <div className="print-cv-item" style={{ marginTop: "4px" }}>
          <div className="print-cv-skills-grid">
            <div className="print-cv-skills-label">Certifications</div>
            <div className="print-cv-skills-val">Google Cloud Certified Professional Cloud Architect • Google Cloud Certified Professional Data Engineer</div>
          </div>
        </div>
      </div>
    </div>
  </>
);
}
