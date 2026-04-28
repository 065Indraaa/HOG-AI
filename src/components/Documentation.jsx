import React from 'react';
import { ArrowLeft, BookOpen, Layers, Bot, Code, Zap, RefreshCw, Cpu, Globe } from 'lucide-react';
import '../styles/landing.css';

export default function Documentation({ onBack }) {
  return (
    <div className="docs-container animate-fade-up">
      <div className="docs-header">
        <button className="docs-back-btn" onClick={onBack}>
          <ArrowLeft size={16} /> Back to Home
        </button>
        <div className="docs-title-wrapper">
          <BookOpen className="docs-icon" size={28} />
          <h1>HOG ai Documentation</h1>
        </div>
        <p className="docs-subtitle">The Hand of God Protocol & Architecture Overview</p>
      </div>

      <div className="docs-content">
        <aside className="docs-sidebar">
          <nav>
            <ul>
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#philosophy">Core Philosophy</a></li>
              <li><a href="#features">Key Features</a></li>
              <li><a href="#architecture">System Architecture</a></li>
              <li><a href="#workflow">Development Workflow</a></li>
            </ul>
          </nav>
        </aside>

        <main className="docs-main-content">
          <section id="introduction" className="docs-section">
            <h2>Introduction</h2>
            <p>
              Welcome to <strong>HOG ai</strong>, formerly known as Nexus Builder. HOG ai is an advanced, unified, 
              framework-agnostic AI development platform designed to empower creators to build complete, 
              production-ready web applications from scratch, purely through conversational AI.
            </p>
          </section>

          <section id="philosophy" className="docs-section">
            <h2>Why "Hand of God"?</h2>
            <div className="docs-highlight-box">
              <p>
                The name <strong>Hand Of God (HOG) ai</strong> reflects the ultimate power given to the developer. 
                With a single prompt, you can shape entire systems, architectures, and user interfaces, much like 
                a divine hand orchestrating creation. It represents absolute creative control, seamless automation, 
                and the ability to turn abstract ideas into tangible, functioning software instantly.
              </p>
            </div>
          </section>

          <section id="features" className="docs-section">
            <h2>Key Features</h2>
            <div className="docs-feature-list">
              <div className="docs-feature-item">
                <div className="feature-icon-wrapper"><Cpu size={20} /></div>
                <div>
                  <h3>Unified Builder Agent</h3>
                  <p>Consolidates frontend and backend generation into a single, cohesive "Builder" workflow. No more manual file stitching; the AI generates everything in one pass.</p>
                </div>
              </div>
              <div className="docs-feature-item">
                <div className="feature-icon-wrapper"><Bot size={20} /></div>
                <div>
                  <h3>Concept-to-Build Handoff</h3>
                  <p>Start with the Concepting Agent to flesh out your idea into a robust specification. Once approved, seamlessly hand it over to the Builder Agent to write the code.</p>
                </div>
              </div>
              <div className="docs-feature-item">
                <div className="feature-icon-wrapper"><RefreshCw size={20} /></div>
                <div>
                  <h3>Auto-Continue Regeneration</h3>
                  <p>Intelligent detection if a response is incomplete due to token limits. Automatically resumes from the exact character, ensuring your files are always whole.</p>
                </div>
              </div>
              <div className="docs-feature-item">
                <div className="feature-icon-wrapper"><Code size={20} /></div>
                <div>
                  <h3>Realtime File Parsing</h3>
                  <p>Watch as your project structure is built in real-time. HOG ai parses markdown code blocks dynamically and builds your file tree on the fly.</p>
                </div>
              </div>
              <div className="docs-feature-item">
                <div className="feature-icon-wrapper"><Layers size={20} /></div>
                <div>
                  <h3>Background Multitasking</h3>
                  <p>Switch between Concept and Builder tabs without interrupting the AI's generation process. Streams are maintained independently.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="architecture" className="docs-section">
            <h2>System Architecture</h2>
            <p>HOG ai utilizes a modern, performance-first technology stack designed for extreme reliability and fluid UX.</p>
            
            <table className="docs-table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Technology</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Frontend Engine</td>
                  <td>React 18 + Vite</td>
                  <td>High-performance rendering and rapid development environment.</td>
                </tr>
                <tr>
                  <td>Styling</td>
                  <td>Custom CSS (Variables)</td>
                  <td>Glassmorphism, micro-animations, and dynamic theme tokens.</td>
                </tr>
                <tr>
                  <td>AI Integration</td>
                  <td>Direct Streaming API</td>
                  <td>Low-latency continuous token delivery (up to 16k context window).</td>
                </tr>
                <tr>
                  <td>State Management</td>
                  <td>LocalStorage</td>
                  <td>Persistent, per-role state separation for offline reliability.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="workflow" className="docs-section">
            <h2>Development Workflow</h2>
            <div className="docs-workflow-steps">
              <div className="workflow-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h4>Ideation (Concept Phase)</h4>
                  <p>Describe your app idea naturally. The Concepting Agent expands this into a structured Spec Document.</p>
                </div>
              </div>
              <div className="workflow-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h4>Approval & Handoff</h4>
                  <p>Review the blueprint. Once satisfied, command the Builder Agent to execute the specification.</p>
                </div>
              </div>
              <div className="workflow-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h4>Real-time Architecture</h4>
                  <p>Watch the file tree generate dynamically as the Builder constructs the entire application logic.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
