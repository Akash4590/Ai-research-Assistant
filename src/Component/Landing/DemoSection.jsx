import { useState, useEffect, useRef } from "react";

const DemoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const sectionRef = useRef(null);
  const lastInteractionRef = useRef(0);
  const tabsRef = useRef(null);

  const features = [
    { icon: "📄", label: "PDF to Summary", desc: "Upload a paper and get a clean outline, key claims, and takeaways." },
    { icon: "🔗", label: "URL to Insights", desc: "Paste a link and extract the core ideas with context preserved." },
    { icon: "💬", label: "Chat with Sources", desc: "Ask questions and get answers grounded in your document." },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;

    const apply = () => setReduceMotion(Boolean(mq.matches));
    apply();

    if (typeof mq.addEventListener === "function") mq.addEventListener("change", apply);
    else mq.addListener(apply);

    return () => {
      if (typeof mq.removeEventListener === "function") mq.removeEventListener("change", apply);
      else mq.removeListener(apply);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    if (reduceMotion) return;

    const t = setInterval(() => {
      // Pause rotation after user interacts (click/hover/focus) to avoid fighting the user.
      if (Date.now() - lastInteractionRef.current < 8000) return;
      setActiveFeature((p) => (p + 1) % features.length);
    }, 3500);
    return () => clearInterval(t);
  }, [isVisible, reduceMotion, features.length]);

  useEffect(() => {
    if (!tabsRef.current) return;

    const el = tabsRef.current;
    const mark = () => {
      lastInteractionRef.current = Date.now();
    };

    el.addEventListener("mouseenter", mark);
    el.addEventListener("mouseleave", mark);
    el.addEventListener("focusin", mark);
    el.addEventListener("pointerdown", mark);

    return () => {
      el.removeEventListener("mouseenter", mark);
      el.removeEventListener("mouseleave", mark);
      el.removeEventListener("focusin", mark);
      el.removeEventListener("pointerdown", mark);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Fraunces:ital,wght@0,700;0,900;1,700&display=swap');

        :root {
          --glass-bg: rgba(255, 255, 255, 0.07);
          --glass-border: rgba(255, 255, 255, 0.15);
          --glass-highlight: rgba(255, 255, 255, 0.22);
          --accent: #7c6fff;
          --accent-soft: rgba(124, 111, 255, 0.18);
          --teal: #2dd4bf;
          --teal-soft: rgba(45, 212, 191, 0.15);
          --text-primary: #ffffff;
          --text-secondary: rgba(255,255,255,0.75);
          --text-muted: rgba(255,255,255,0.45);
        }

        .ds-section {
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative;
          padding: 140px 32px;
          overflow: hidden;
          background:
            radial-gradient(ellipse 80% 60% at 20% 0%, rgba(124,111,255,0.22) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 100%, rgba(45,212,191,0.18) 0%, transparent 55%),
            radial-gradient(ellipse 100% 100% at 50% 50%, rgba(15,12,35,1) 0%, rgba(8,8,22,1) 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .ds-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
          pointer-events: none;
        }

        .ds-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          animation: float-blob 8s ease-in-out infinite;
        }
        .ds-blob-1 { width: 400px; height: 400px; background: rgba(124,111,255,0.12); top: -100px; left: -80px; animation-delay: 0s; }
        .ds-blob-2 { width: 300px; height: 300px; background: rgba(45,212,191,0.1); bottom: -60px; right: -60px; animation-delay: -4s; }
        .ds-blob-3 { width: 200px; height: 200px; background: rgba(255,160,100,0.08); top: 40%; right: 10%; animation-delay: -2s; }

        @keyframes float-blob {
          0%, 100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(20px, -20px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.97); }
        }

        .ds-inner {
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .ds-header { text-align: center; margin-bottom: 72px; }

        .ds-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: var(--text-secondary);
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 8px 20px;
          border-radius: 100px;
          margin-bottom: 32px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .ds-badge.show { opacity: 1; transform: translateY(0); }
        .ds-badge-pulse {
          width: 7px; height: 7px;
          background: var(--teal);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--teal);
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0.3; } }

        .ds-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(44px, 7vw, 82px);
          font-weight: 900;
          line-height: 1.02;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin-bottom: 24px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;
        }
        .ds-title.show { opacity: 1; transform: translateY(0); }
        .ds-title em {
          font-style: italic;
          background: linear-gradient(120deg, #a78fff 0%, #2dd4bf 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ds-subtitle {
          font-size: 19px;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.75;
          max-width: 520px;
          margin: 0 auto 52px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
        }
        .ds-subtitle.show { opacity: 1; transform: translateY(0); }

        .ds-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 64px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s;
        }
        .ds-tabs.show { opacity: 1; transform: translateY(0); }

        .ds-tab {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 16px;
          border: 1px solid var(--glass-border);
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--text-secondary);
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .ds-tab:hover {
          background: rgba(255,255,255,0.1);
          border-color: var(--glass-highlight);
          transform: translateY(-2px);
          color: #fff;
        }
        .ds-tab.active {
          background: linear-gradient(135deg, rgba(124,111,255,0.25), rgba(45,212,191,0.15));
          border-color: rgba(124,111,255,0.5);
          color: #fff;
          box-shadow: 0 8px 32px rgba(124,111,255,0.2), inset 0 1px 0 rgba(255,255,255,0.15);
        }
        .ds-tab-icon { font-size: 20px; }
        .ds-tab-label { font-size: 14px; font-weight: 600; white-space: nowrap; }

        /* Video Card */
        .ds-video-card {
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid var(--glass-border);
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.06) inset,
            0 2px 0 rgba(255,255,255,0.1) inset,
            0 40px 100px rgba(0,0,0,0.5),
            0 0 60px rgba(124,111,255,0.1);
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          transition: opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s;
          margin-bottom: 56px;
        }
        .ds-video-card.show { opacity: 1; transform: translateY(0) scale(1); }

        .ds-chrome {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 22px;
          background: rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .ds-dots { display: flex; gap: 7px; }
        .ds-dot { width: 12px; height: 12px; border-radius: 50%; opacity: 0.85; }
        .dot-r { background: #ff6059; }
        .dot-y { background: #ffbd2e; }
        .dot-g { background: #28ca41; }

        .ds-url-bar {
          flex: 1;
          height: 30px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          padding: 0 14px;
          gap: 7px;
          font-size: 12.5px;
          color: rgba(255,255,255,0.4);
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .ds-feature-bar {
          padding: 16px 24px;
          background: linear-gradient(90deg, rgba(124,111,255,0.12), rgba(45,212,191,0.08));
          border-bottom: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ds-feature-icon { font-size: 22px; }
        .ds-feature-text { flex: 1; }
        .ds-feature-name { font-size: 13px; font-weight: 700; color: #fff; letter-spacing: 0.02em; }
        .ds-feature-desc { font-size: 12px; color: var(--text-muted); margin-top: 1px; }
        .ds-feature-tag {
          font-size: 11px; font-weight: 600;
          padding: 4px 12px; border-radius: 100px;
          background: var(--teal-soft);
          color: var(--teal);
          border: 1px solid rgba(45,212,191,0.25);
          letter-spacing: 0.05em;
        }

        .ds-video-frame {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          background: #08081a;
        }
        .ds-video-frame iframe {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          border: none;
        }

        .ds-play-overlay {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 20px;
          background: rgba(8,8,26,0.55);
          backdrop-filter: blur(4px);
          cursor: pointer;
          transition: opacity 0.4s ease;
          z-index: 3;
        }
        .ds-play-overlay.gone { opacity: 0; pointer-events: none; }

        .ds-play-btn {
          position: relative;
          width: 88px; height: 88px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.08));
          border: 1px solid rgba(255,255,255,0.25);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3);
        }
        .ds-play-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 48px rgba(124,111,255,0.4), inset 0 1px 0 rgba(255,255,255,0.3);
        }
        .ds-play-triangle {
          width: 0; height: 0;
          border-style: solid;
          border-width: 13px 0 13px 22px;
          border-color: transparent transparent transparent #ffffff;
          margin-left: 6px;
        }
        .ds-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          animation: ring-expand 2.8s ease-out infinite;
        }
        .ds-ring-1 { width: 88px; height: 88px; animation-delay: 0s; }
        .ds-ring-2 { width: 88px; height: 88px; animation-delay: 0.9s; }
        .ds-ring-3 { width: 88px; height: 88px; animation-delay: 1.8s; }
        @keyframes ring-expand {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.6); opacity: 0; }
        }
        .ds-play-label { font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.8); letter-spacing: 0.04em; }

        .ds-stats-bar {
          display: flex;
          background: rgba(255,255,255,0.03);
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .ds-stat {
          flex: 1; padding: 20px 24px; text-align: center;
          border-right: 1px solid rgba(255,255,255,0.07);
        }
        .ds-stat:last-child { border-right: none; }
        .ds-stat-val {
          font-family: 'Fraunces', serif;
          font-size: 28px; font-weight: 700;
          color: #fff; line-height: 1; margin-bottom: 5px;
        }
        .ds-stat-val span {
          background: linear-gradient(120deg, #a78fff, #2dd4bf);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ds-stat-lbl { font-size: 12px; color: var(--text-muted); font-weight: 500; }

        /* CTA */
        .ds-cta-area {
          display: flex; flex-direction: column;
          align-items: center; gap: 28px;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s;
        }
        .ds-cta-area.show { opacity: 1; transform: translateY(0); }

        .ds-cta-row {
          display: flex; align-items: center;
          justify-content: center; gap: 16px; flex-wrap: wrap;
        }

        .ds-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 18px 40px; border-radius: 16px;
          background: linear-gradient(135deg, #7c6fff 0%, #5b8fff 100%);
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 16px; font-weight: 700; letter-spacing: 0.01em;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 8px 32px rgba(124,111,255,0.4), inset 0 1px 0 rgba(255,255,255,0.2);
          position: relative; overflow: hidden;
        }
        .ds-btn-primary::before {
          content: '';
          position: absolute; top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          transition: left 0.5s ease;
        }
        .ds-btn-primary:hover::before { left: 100%; }
        .ds-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 48px rgba(124,111,255,0.55), inset 0 1px 0 rgba(255,255,255,0.2);
        }

        .ds-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 18px 32px; border-radius: 16px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          color: var(--text-secondary);
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 15px; font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .ds-btn-ghost:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
          border-color: var(--glass-highlight);
          transform: translateY(-2px);
        }

        .ds-proof {
          display: flex; align-items: center; gap: 12px;
          padding: 14px 24px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(12px);
          border-radius: 100px;
        }
        .ds-avatars { display: flex; }
        .ds-av {
          width: 30px; height: 30px; border-radius: 50%;
          border: 2px solid rgba(15,12,35,0.8);
          margin-left: -9px;
          font-size: 11px; font-weight: 800; color: #fff;
          display: flex; align-items: center; justify-content: center;
        }
        .ds-av:first-child { margin-left: 0; }
        .ds-stars { color: #fbbf24; font-size: 13px; letter-spacing: -1px; }
        .ds-proof-text { font-size: 13px; font-weight: 500; color: var(--text-secondary); white-space: nowrap; }
        .ds-proof-text strong { color: #fff; }

        @media (prefers-reduced-motion: reduce) {
          .ds-blob { animation: none !important; }
          .ds-badge, .ds-title, .ds-subtitle, .ds-tabs, .ds-video-card, .ds-cta-area {
            transition: none !important;
            transform: none !important;
          }
          .ds-ring { animation: none !important; }
        }

        @media (max-width: 680px) {
          .ds-section { padding: 100px 20px; }
          .ds-stats-bar { flex-wrap: wrap; }
          .ds-stat { flex: 0 0 50%; border-bottom: 1px solid rgba(255,255,255,0.07); }
          .ds-proof { display: none; }
        }
      `}</style>

      <section className="ds-section" ref={sectionRef}>
        <div className="ds-blob ds-blob-1" />
        <div className="ds-blob ds-blob-2" />
        <div className="ds-blob ds-blob-3" />

        <div className="ds-inner">

          {/* Header */}
          <div className="ds-header">
            <div className={`ds-badge ${isVisible ? "show" : ""}`}>
              <span className="ds-badge-pulse" />
              Live Product Demo
            </div>

            <h2 className={`ds-title ${isVisible ? "show" : ""}`}>
              See <em>Mindscribe</em><br />turn sources into clarity.
            </h2>

            <p className={`ds-subtitle ${isVisible ? "show" : ""}`}>
              A calm workflow for research: summarize, ask questions, and capture key points—without losing the original context.
            </p>

            <div
              ref={tabsRef}
              className={`ds-tabs ${isVisible ? "show" : ""}`}
              role="tablist"
              aria-label="Demo modes"
            >
              {features.map((f, i) => (
                <button
                  key={i}
                  type="button"
                  id={`ds-tab-${i}`}
                  role="tab"
                  aria-selected={activeFeature === i}
                  aria-controls={`ds-panel-${i}`}
                  className={`ds-tab ${activeFeature === i ? "active" : ""}`}
                  onClick={() => {
                    lastInteractionRef.current = Date.now();
                    setActiveFeature(i);
                  }}
                >
                  <span className="ds-tab-icon">{f.icon}</span>
                  <span className="ds-tab-label">{f.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Video Card */}
          <div className={`ds-video-card ${isVisible ? "show" : ""}`}>
            <div className="ds-chrome">
              <div className="ds-dots">
                <div className="ds-dot dot-r" />
                <div className="ds-dot dot-y" />
                <div className="ds-dot dot-g" />
              </div>
              <div className="ds-url-bar">
                <span>🔒</span>
                <span>mindscribe.ai/demo</span>
              </div>
            </div>

            <div className="ds-feature-bar">
              <span className="ds-feature-icon">{features[activeFeature].icon}</span>
              <div
                id={`ds-panel-${activeFeature}`}
                role="tabpanel"
                aria-labelledby={`ds-tab-${activeFeature}`}
                className="ds-feature-text"
              >
                <div className="ds-feature-name">{features[activeFeature].label}</div>
                <div className="ds-feature-desc">{features[activeFeature].desc}</div>
              </div>
              <span className="ds-feature-tag">LIVE</span>
            </div>

            <div className="ds-video-frame">
              <iframe
                src={`https://www.youtube.com/embed/Fyo6vnM8BBk?si=CbzSqG3iTwu8E5PQ${isPlaying ? "&autoplay=1" : ""}`}
                title="Mindscribe Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <button
                type="button"
                className={`ds-play-overlay ${isPlaying ? "gone" : ""}`}
                onClick={() => {
                  lastInteractionRef.current = Date.now();
                  setIsPlaying(true);
                }}
                aria-label="Play demo video"
              >
                <div className="ds-play-btn">
                  <div className="ds-ring ds-ring-1" />
                  <div className="ds-ring ds-ring-2" />
                  <div className="ds-ring ds-ring-3" />
                  <div className="ds-play-triangle" />
                </div>
                <span className="ds-play-label">Watch the demo</span>
              </button>
            </div>

            <div className="ds-stats-bar">
              {[
                { val: "2s", lbl: "Average response" },
                { val: "50+", lbl: "Pages per PDF" },
                { val: "Cited", lbl: "Source-linked answers" },
                { val: "Secure", lbl: "Privacy-first workflow" },
              ].map((s, i) => (
                <div key={i} className="ds-stat">
                  <div className="ds-stat-val"><span>{s.val}</span></div>
                  <div className="ds-stat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className={`ds-cta-area ${isVisible ? "show" : ""}`}>
            <div className="ds-cta-row">
              <a href="/auth" className="ds-btn-primary">
                Try Mindscribe Free
                <span style={{ fontSize: 20 }}>→</span>
              </a>
              <a href="#features" className="ds-btn-ghost">
                Explore Features
              </a>
            </div>

            <div className="ds-proof">
              <div className="ds-avatars">
                {[
                  { l: "A", bg: "linear-gradient(135deg,#7c6fff,#2dd4bf)" },
                  { l: "R", bg: "linear-gradient(135deg,#f97316,#fbbf24)" },
                  { l: "S", bg: "linear-gradient(135deg,#ec4899,#7c6fff)" },
                  { l: "M", bg: "linear-gradient(135deg,#2dd4bf,#3b82f6)" },
                ].map((av, i) => (
                  <div key={i} className="ds-av" style={{ background: av.bg }}>{av.l}</div>
                ))}
              </div>
              <span className="ds-stars">★★★★★</span>
              <span className="ds-proof-text">Loved by <strong>2,400+</strong> researchers worldwide</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default DemoSection;