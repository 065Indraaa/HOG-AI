import React, { useState } from 'react';
import { ChevronRight, Code, Zap, Layers, Terminal } from 'lucide-react';
import '../styles/landing.css';
import Documentation from './Documentation';

export default function LandingPage({ onStart }) {
  const [showDocs, setShowDocs] = useState(false);

  if (showDocs) {
    return <Documentation onBack={() => setShowDocs(false)} />;
  }

  return (
    <div className="landing-container">
      {/* Background with glowing effects (Atmospheric Recipe + Split Tech) */}
      <div className="landing-atmosphere"></div>
      
      <header className="landing-header">
        <div className="landing-logo">
          <span className="landing-logo-icon">⬡</span>
          <span className="landing-logo-text">HOG ai</span>
        </div>
        <nav className="landing-nav">
          <a href="#features">Features</a>
          <button className="landing-btn-outline" onClick={() => setShowDocs(true)}>Documentation</button>
          <button className="landing-btn-outline" onClick={onStart}>Enter Concept</button>
        </nav>
      </header>

      <main className="landing-main">
        <section className="landing-hero">
          <div className="landing-hero-content">
            <div className="landing-badge animate-fade-down">
              <span className="badge-dot"></span> NEXT-GEN AI BUILDER
            </div>
            <h1 className="landing-title animate-fade-up">
              The <span className="text-gradient">Hand of God</span><br />
              for Web Development.
            </h1>
            <p className="landing-subtitle animate-fade-up stagger-1">
              HOG ai is a unified, framework-agnostic development platform. Empowering creators to build complete, production-ready web architectures instantly from a single conversational prompt.
            </p>
            <div className="landing-actions animate-fade-up stagger-2">
              <button className="landing-cta-primary" onClick={onStart}>
                Initialize Project <ChevronRight size={18} />
              </button>
              <button className="landing-cta-secondary" onClick={() => setShowDocs(true)}>
                View Documentation
              </button>
            </div>
            
            <div className="landing-terminal-preview animate-fade-up stagger-3">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span></span><span></span><span></span>
                </div>
                <div className="terminal-title">hog-ai-engine.exe</div>
              </div>
              <div className="terminal-body">
                <p><span className="keyword">system</span>: initializing Hand of God protocol...</p>
                <p><span className="keyword">agent</span>: [Concept] specification loaded.</p>
                <p><span className="keyword">agent</span>: [Builder] forging React + Vite architecture...</p>
                <p><span className="success">success</span>: deployment ready in 2.4s.</p>
                <p className="cursor">█</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="landing-features">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Layers size={24} /></div>
              <h3>Unified Builder</h3>
              <p>Consolidated frontend and backend generation. No manual stitching, just pure architectural perfection in one pass.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Zap size={24} /></div>
              <h3>Auto-Regeneration</h3>
              <p>Intelligent token-limit detection ensures continuous code streaming. Never worry about cutoffs again.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Code size={24} /></div>
              <h3>Realtime Parsing</h3>
              <p>Watch as your file tree structure builds dynamically. HOG ai parses markdown intelligently on the fly.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Terminal size={24} /></div>
              <h3>Interactive UI</h3>
              <p>Glassmorphic interface, real-time code preview, local state management independent per role.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
