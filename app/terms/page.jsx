"use client";

import { useState, useEffect } from "react";

const sections = [
  {
    id: "acceptance", label: "01", short: "Acceptance",
    title: "Acceptance of Terms",
    content: "By accessing and using this portfolio website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use this site.",
    list: [
      "These terms apply to all visitors, users, and anyone who accesses this site",
      "Continued use of the site constitutes acceptance of any updated terms",
      "These terms may be updated at any time — the date at the top reflects the latest revision",
    ],
    note: "This is a personal portfolio site, not a commercial platform. These terms are kept simple and fair.",
  },
  {
    id: "use", label: "02", short: "Permitted Use",
    title: "Permitted Use",
    content: "This site is provided for informational and professional purposes. You agree to use it only in ways that are lawful and respectful:",
    list: [
      "You may browse, share links, and reference content for legitimate purposes",
      "You may not scrape, copy, or republish content without explicit permission",
      "You may not use this site to transmit harmful, offensive, or illegal content",
      "You may not attempt to disrupt, hack, or interfere with the site's infrastructure",
    ],
    note: "Basically — be a decent human. If you'd like to use something from this site, just ask.",
  },
  {
    id: "ip", label: "03", short: "Intellectual Property",
    title: "Intellectual Property",
    content: "All content on this site — including designs, text, project work, and code snippets — is owned by me unless stated otherwise:",
    list: [
      "You may not reproduce or redistribute original work without written permission",
      "Project work shown may be subject to client confidentiality agreements",
      "Open-source code, if linked, is governed by its respective license",
      "Logos or trademarks of third parties belong to their respective owners",
    ],
    note: "Credit and attribution matter. If you're inspired by something here, a mention goes a long way.",
  },
  {
    id: "disclaimer", label: "04", short: "Disclaimers",
    title: "Disclaimers",
    content: "This site is provided on an 'as is' basis. While I do my best to keep everything accurate and up to date:",
    list: [
      "I make no warranties about the completeness or accuracy of any content",
      "Portfolio work reflects past projects and may not represent current skills or availability",
      "Links to external sites are provided for convenience — I don't control their content",
      "I am not liable for any damages arising from your use of this site",
    ],
    note: "If something seems outdated or incorrect, feel free to reach out — I appreciate the heads up.",
  },
  {
    id: "contact", label: "05", short: "Contact & Changes",
    title: "Contact & Changes",
    content: "These terms may be revised at any time. Here's how changes and questions are handled:",
    list: [
      "Updates take effect immediately upon being posted to this page",
      "Material changes will be noted with a revised 'Last Updated' date",
      "For questions about these terms, reach out via the contact page",
      "Continued use of the site after changes means you accept the new terms",
    ],
    note: "I keep these terms honest and human-readable. No legal traps, no dark patterns.",
  },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("acceptance");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const current = sections.find((s) => s.id === activeSection);
  const currentIdx = sections.findIndex((s) => s.id === activeSection);

  return (
    <>
      <style>{`
        :root {
          --red: #570202;
          --red-deep: #3d0101;
          --red-faint: rgba(87,2,2,0.05);
          --off-white: #faf8f5;
          --text-dark: #1a0000;
          --text-mid: #5c2020;
          --text-muted: #b08080;
          --border: rgba(87,2,2,0.13);
          --border-strong: rgba(87,2,2,0.28);
        }

        .tos-wrap {
          opacity: 0;
          transition: opacity 0.6s ease;
          background: var(--off-white);
        }
        .tos-wrap.visible { opacity: 1; }

        /* HERO */
        .tos-hero {
          background: var(--red);
          padding: 5rem 0 4.5rem;
          position: relative;
          overflow: hidden;
        }
        .tos-hero::after {
          content: 'TERMS';
          position: absolute;
          right: -1rem;
          bottom: -2.5rem;
          font-family: var(--font-geist-sans), sans-serif;
          font-size: 11rem;
          font-weight: 800;
          color: rgba(255,255,255,0.04);
          line-height: 1;
          pointer-events: none;
          letter-spacing: -0.05em;
          white-space: nowrap;
        }
        .tos-hero-inner {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 2.5rem;
          position: relative;
          z-index: 1;
        }
        .tos-eyebrow {
          font-family: var(--font-geist-sans), monospace;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .tos-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: rgba(255,255,255,0.22);
        }
        .tos-title {
          font-family: var(--font-geist-sans), sans-serif;
          font-size: clamp(3rem, 8vw, 6.5rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 0.93;
          color: #fff;
          margin-bottom: 2.5rem;
        }
        .tos-title span {
          font-weight: 300;
          color: rgba(255,255,255,0.38);
          letter-spacing: -0.02em;
        }
        .tos-rule {
          width: 48px;
          height: 2px;
          background: rgba(255,255,255,0.2);
          margin-bottom: 2.5rem;
        }
        .tos-meta {
          display: flex;
          gap: 3.5rem;
          flex-wrap: wrap;
        }
        .tos-meta-item label {
          display: block;
          font-family: var(--font-geist-sans), monospace;
          font-size: 0.56rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.26);
          margin-bottom: 0.3rem;
        }
        .tos-meta-item span {
          font-family: var(--font-work-sans), sans-serif;
          font-size: 0.9rem;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
        }

        /* CURVE */
        .tos-curve { background: var(--red); line-height: 0; }
        .tos-curve svg { display: block; width: 100%; }

        /* BODY */
        .tos-body {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 2.5rem 6rem;
          display: grid;
          grid-template-columns: 250px 1fr;
        }

        /* SIDEBAR */
        .tos-sidebar {
          padding: 3.5rem 2rem 3.5rem 0;
          border-right: 1px solid var(--border);
          position: sticky;
          top: 80px;
          height: fit-content;
        }
        .tos-sidebar-label {
          font-family: var(--font-geist-sans), monospace;
          font-size: 0.56rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }
        .tos-nav-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.8rem 0.75rem 0.8rem 0;
          background: none;
          border: none;
          border-left: 3px solid transparent;
          margin-left: -3px;
          width: 100%;
          text-align: left;
          cursor: pointer;
          transition: all 0.18s;
        }
        .tos-nav-num {
          font-family: var(--font-geist-sans), monospace;
          font-size: 0.58rem;
          color: var(--text-muted);
          min-width: 1.4rem;
          transition: color 0.18s;
        }
        .tos-nav-lbl {
          font-family: var(--font-work-sans), sans-serif;
          font-size: 0.88rem;
          font-weight: 400;
          color: var(--text-muted);
          transition: color 0.18s;
        }
        .tos-nav-btn:hover .tos-nav-num,
        .tos-nav-btn:hover .tos-nav-lbl { color: var(--red); }
        .tos-nav-btn.active {
          border-left-color: var(--red);
          padding-left: 0.75rem;
          background: var(--red-faint);
        }
        .tos-nav-btn.active .tos-nav-num,
        .tos-nav-btn.active .tos-nav-lbl { color: var(--red); }
        .tos-nav-btn.active .tos-nav-lbl { font-weight: 600; }

        .tos-prog { margin-top: 2.5rem; }
        .tos-prog-track {
          height: 2px;
          background: var(--border);
          border-radius: 1px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }
        .tos-prog-fill {
          height: 100%;
          background: var(--red);
          border-radius: 1px;
          transition: width 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .tos-prog-lbl {
          font-family: var(--font-geist-sans), monospace;
          font-size: 0.56rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        /* CONTENT */
        .tos-content { padding: 3.5rem 0 3.5rem 4rem; }
        .tos-anim {
          animation: tosRise 0.32s cubic-bezier(0.16,1,0.3,1);
        }
        @keyframes tosRise {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tos-sec-eyebrow {
          font-family: var(--font-geist-sans), monospace;
          font-size: 0.56rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--red);
          opacity: 0.6;
          margin-bottom: 0.6rem;
        }
        .tos-sec-title {
          font-family: var(--font-geist-sans), sans-serif;
          font-size: clamp(1.75rem, 3.5vw, 2.65rem);
          font-weight: 700;
          letter-spacing: -0.035em;
          line-height: 1.05;
          color: var(--red-deep);
          margin-bottom: 2.25rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border);
        }
        .tos-sec-body {
          font-family: var(--font-work-sans), sans-serif;
          font-size: 0.98rem;
          line-height: 1.75;
          color: var(--text-mid);
          font-weight: 300;
          font-style: italic;
          margin-bottom: 1.75rem;
        }
        .tos-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 2.25rem;
        }
        .tos-list li {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 0.9rem 1.25rem;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 8px;
          font-family: var(--font-work-sans), sans-serif;
          font-size: 0.9rem;
          line-height: 1.65;
          color: var(--text-dark);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .tos-list li:hover {
          border-color: var(--border-strong);
          box-shadow: 0 2px 12px rgba(87,2,2,0.07);
        }
        .tos-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--red);
          opacity: 0.65;
          flex-shrink: 0;
          margin-top: 0.5rem;
        }
        .tos-note {
          background: var(--red);
          color: rgba(255,255,255,0.82);
          padding: 1.2rem 1.5rem;
          font-family: var(--font-work-sans), sans-serif;
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.7;
          border-radius: 8px;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .tos-note-tag {
          font-family: var(--font-geist-sans), monospace;
          font-size: 0.56rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.65);
          border-radius: 4px;
          padding: 0.22rem 0.5rem;
          flex-shrink: 0;
          margin-top: 0.18rem;
        }

        /* FOOTER */
        .tos-footer { background: var(--red-deep); padding: 1.75rem 0; }
        .tos-footer-inner {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 2.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .tos-footer-txt {
          font-family: var(--font-geist-sans), monospace;
          font-size: 0.58rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.26);
        }
        .tos-footer-sep {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
        }

        /* RESPONSIVE */
        @media (max-width: 780px) {
          .tos-body { grid-template-columns: 1fr; padding: 0 1.5rem 4rem; }
          .tos-sidebar {
            position: static;
            border-right: none;
            border-bottom: 1px solid var(--border);
            padding: 1.5rem 0;
            display: flex;
            overflow-x: auto;
          }
          .tos-sidebar-label { display: none; }
          .tos-nav-btn {
            white-space: nowrap;
            padding: 0.5rem 1rem;
            border-left: none;
            border-bottom: 2px solid transparent;
            margin-left: 0;
            margin-bottom: -2px;
          }
          .tos-nav-btn.active {
            border-bottom-color: var(--red);
            border-left-color: transparent;
            padding-left: 1rem;
            background: none;
          }
          .tos-prog { display: none; }
          .tos-content { padding: 2.5rem 0; }
          .tos-hero::after { font-size: 4rem; }
          .tos-meta { gap: 1.5rem; }
        }
      `}</style>

      <div className={`tos-wrap${visible ? " visible" : ""}`}>

        {/* Hero */}
        <section className="tos-hero">
          <div className="tos-hero-inner">
            <div className="tos-eyebrow">Terms of Service</div>
            <h1 className="tos-title">
              Fair terms,<br />
              <span>plainly written.</span>
            </h1>
            <div className="tos-rule" />
            <div className="tos-meta">
              {[["Last Updated","March 2026"],["Effective","March 1, 2026"],["Scope","Worldwide"]].map(([l,v]) => (
                <div className="tos-meta-item" key={l}>
                  <label>{l}</label>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curve */}
        <div className="tos-curve">
          <svg viewBox="0 0 1440 36" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 0 L1440 0 L1440 10 Q720 46 0 10 Z" fill="#570202"/>
          </svg>
        </div>

        {/* Body */}
        <div className="tos-body">

          {/* Sidebar */}
          <aside className="tos-sidebar">
            <div className="tos-sidebar-label">Contents</div>
            {sections.map((s) => (
              <button
                key={s.id}
                className={`tos-nav-btn${activeSection === s.id ? " active" : ""}`}
                onClick={() => setActiveSection(s.id)}
              >
                <span className="tos-nav-num">{s.label}</span>
                <span className="tos-nav-lbl">{s.short}</span>
              </button>
            ))}
            <div className="tos-prog">
              <div className="tos-prog-track">
                <div className="tos-prog-fill" style={{ width: `${((currentIdx + 1) / sections.length) * 100}%` }} />
              </div>
              <div className="tos-prog-lbl">{currentIdx + 1} / {sections.length} sections</div>
            </div>
          </aside>

          {/* Content */}
          <main className="tos-content" key={activeSection}>
            <div className="tos-anim">
              <div className="tos-sec-eyebrow">Section {current.label}</div>
              <h2 className="tos-sec-title">{current.title}</h2>
              <p className="tos-sec-body">{current.content}</p>
              <ul className="tos-list">
                {current.list.map((item, i) => (
                  <li key={i}><span className="tos-dot" />{item}</li>
                ))}
              </ul>
              <div className="tos-note">
                <span className="tos-note-tag">Note</span>
                {current.note}
              </div>
            </div>
          </main>

        </div>

        
        

      </div>
    </>
  );
}