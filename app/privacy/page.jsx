"use client";

import { useState, useEffect } from "react";

const sections = [
  {
    id: "information", label: "01", short: "Collection",
    title: "Information I Collect",
    content: "This portfolio is a personal showcase — not a data harvesting operation. The only information that may be collected includes:",
    list: [
      "Contact form submissions (name, email, message) — only if you choose to reach out",
      "Anonymous analytics data such as page views and referral sources",
      "Browser type and device information via standard server logs",
    ],
    note: "I do not collect sensitive personal data, financial information, or anything you haven't explicitly provided.",
  },
  {
    id: "usage", label: "02", short: "Usage",
    title: "How I Use It",
    content: "Any information shared with me is used solely to:",
    list: [
      "Respond to your messages and inquiries",
      "Understand how visitors interact with this site to improve it",
      "Maintain the security and performance of this portfolio",
    ],
    note: "Your data is never sold, rented, or shared with third parties for marketing purposes.",
  },
  {
    id: "cookies", label: "03", short: "Cookies",
    title: "Cookies & Tracking",
    content: "This site may use minimal, privacy-respecting analytics. Here's what that means:",
    list: [
      "No third-party advertising cookies",
      "No cross-site tracking or behavioral profiling",
      "Analytics, if used, are aggregated and anonymized",
      "You can disable cookies in your browser at any time",
    ],
    note: "I believe in the web as a respectful space. No surveillance capitalism here.",
  },
  {
    id: "thirdparty", label: "04", short: "Third Parties",
    title: "Third-Party Services",
    content: "This portfolio may integrate with the following external services:",
    list: [
      "GitHub — for displaying project repositories",
      "Vercel / Netlify — for hosting and deployment",
      "Google Fonts or similar — for typography",
    ],
    note: "Each service has its own privacy policy. I recommend reviewing them independently.",
  },
  {
    id: "rights", label: "05", short: "Your Rights",
    title: "Your Rights",
    content: "You have full control over any data you share with me:",
    list: [
      "Request access to any personal data I may hold about you",
      "Ask for deletion of your information at any time",
      "Opt out of any communication by simply not responding",
    ],
    note: "To exercise any of these rights, reach out via the contact page.",
  },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("information");
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

        .pp-wrap {
          opacity: 0;
          transition: opacity 0.6s ease;
          background: var(--off-white);
          /* Intentionally no padding/margin here — layout.jsx navbar handles spacing */
        }
        .pp-wrap.visible { opacity: 1; }

        /* HERO */
        .pp-hero {
          background: var(--red);
          padding: 5rem 0 4.5rem;
          position: relative;
          overflow: hidden;
        }
        .pp-hero::after {
          content: 'PRIVACY';
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
        .pp-hero-inner {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 2.5rem;
          position: relative;
          z-index: 1;
        }
        .pp-eyebrow {
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
        .pp-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: rgba(255,255,255,0.22);
        }
        .pp-title {
          font-family: var(--font-geist-sans), sans-serif;
          font-size: clamp(3rem, 8vw, 6.5rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 0.93;
          color: #fff;
          margin-bottom: 2.5rem;
        }
        .pp-title span {
          font-weight: 300;
          color: rgba(255,255,255,0.38);
          letter-spacing: -0.02em;
        }
        .pp-rule {
          width: 48px;
          height: 2px;
          background: rgba(255,255,255,0.2);
          margin-bottom: 2.5rem;
        }
        .pp-meta {
          display: flex;
          gap: 3.5rem;
          flex-wrap: wrap;
        }
        .pp-meta-item label {
          display: block;
          font-family: var(--font-geist-sans), monospace;
          font-size: 0.56rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.26);
          margin-bottom: 0.3rem;
        }
        .pp-meta-item span {
          font-family: var(--font-work-sans), sans-serif;
          font-size: 0.9rem;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
        }

        /* CURVE */
        .pp-curve { background: var(--red); line-height: 0; }
        .pp-curve svg { display: block; width: 100%; }

        /* BODY */
        .pp-body {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 2.5rem 6rem;
          display: grid;
          grid-template-columns: 250px 1fr;
        }

        /* SIDEBAR */
        .pp-sidebar {
          padding: 3.5rem 2rem 3.5rem 0;
          border-right: 1px solid var(--border);
          position: sticky;
          top: 80px;
          height: fit-content;
        }
        .pp-sidebar-label {
          font-family: var(--font-geist-sans), monospace;
          font-size: 0.56rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }
        .pp-nav-btn {
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
        .pp-nav-num {
          font-family: var(--font-geist-sans), monospace;
          font-size: 0.58rem;
          color: var(--text-muted);
          min-width: 1.4rem;
          transition: color 0.18s;
        }
        .pp-nav-lbl {
          font-family: var(--font-work-sans), sans-serif;
          font-size: 0.88rem;
          font-weight: 400;
          color: var(--text-muted);
          transition: color 0.18s;
        }
        .pp-nav-btn:hover .pp-nav-num,
        .pp-nav-btn:hover .pp-nav-lbl { color: var(--red); }
        .pp-nav-btn.active {
          border-left-color: var(--red);
          padding-left: 0.75rem;
          background: var(--red-faint);
        }
        .pp-nav-btn.active .pp-nav-num,
        .pp-nav-btn.active .pp-nav-lbl { color: var(--red); }
        .pp-nav-btn.active .pp-nav-lbl { font-weight: 600; }

        .pp-prog { margin-top: 2.5rem; }
        .pp-prog-track {
          height: 2px;
          background: var(--border);
          border-radius: 1px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }
        .pp-prog-fill {
          height: 100%;
          background: var(--red);
          border-radius: 1px;
          transition: width 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .pp-prog-lbl {
          font-family: var(--font-geist-sans), monospace;
          font-size: 0.56rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        /* CONTENT */
        .pp-content { padding: 3.5rem 0 3.5rem 4rem; }
        .pp-anim {
          animation: ppRise 0.32s cubic-bezier(0.16,1,0.3,1);
        }
        @keyframes ppRise {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pp-sec-eyebrow {
          font-family: var(--font-geist-sans), monospace;
          font-size: 0.56rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--red);
          opacity: 0.6;
          margin-bottom: 0.6rem;
        }
        .pp-sec-title {
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
        .pp-sec-body {
          font-family: var(--font-work-sans), sans-serif;
          font-size: 0.98rem;
          line-height: 1.75;
          color: var(--text-mid);
          font-weight: 300;
          font-style: italic;
          margin-bottom: 1.75rem;
        }
        .pp-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 2.25rem;
        }
        .pp-list li {
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
        .pp-list li:hover {
          border-color: var(--border-strong);
          box-shadow: 0 2px 12px rgba(87,2,2,0.07);
        }
        .pp-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--red);
          opacity: 0.65;
          flex-shrink: 0;
          margin-top: 0.5rem;
        }
        .pp-note {
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
        .pp-note-tag {
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
        .pp-footer { background: var(--red-deep); padding: 1.75rem 0; }
        .pp-footer-inner {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 2.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .pp-footer-txt {
          font-family: var(--font-geist-sans), monospace;
          font-size: 0.58rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.26);
        }
        .pp-footer-sep {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
        }

        /* RESPONSIVE */
        @media (max-width: 780px) {
          .pp-body { grid-template-columns: 1fr; padding: 0 1.5rem 4rem; }
          .pp-sidebar {
            position: static;
            border-right: none;
            border-bottom: 1px solid var(--border);
            padding: 1.5rem 0;
            display: flex;
            overflow-x: auto;
          }
          .pp-sidebar-label { display: none; }
          .pp-nav-btn {
            white-space: nowrap;
            padding: 0.5rem 1rem;
            border-left: none;
            border-bottom: 2px solid transparent;
            margin-left: 0;
            margin-bottom: -2px;
          }
          .pp-nav-btn.active {
            border-bottom-color: var(--red);
            border-left-color: transparent;
            padding-left: 1rem;
            background: none;
          }
          .pp-prog { display: none; }
          .pp-content { padding: 2.5rem 0; }
          .pp-hero::after { font-size: 4rem; }
          .pp-meta { gap: 1.5rem; }
        }
      `}</style>

      <div className={`pp-wrap${visible ? " visible" : ""}`}>

        {/* Hero */}
        <section className="pp-hero">
          <div className="pp-hero-inner">
            <div className="pp-eyebrow">Privacy Policy</div>
            <h1 className="pp-title">
              Your data,<br />
              <span>handled with care.</span>
            </h1>
            <div className="pp-rule" />
            <div className="pp-meta">
              {[["Last Updated","March 2026"],["Effective","March 1, 2026"],["Scope","Worldwide"]].map(([l,v]) => (
                <div className="pp-meta-item" key={l}>
                  <label>{l}</label>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curve */}
        <div className="pp-curve">
          <svg viewBox="0 0 1440 36" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 0 L1440 0 L1440 10 Q720 46 0 10 Z" fill="#570202"/>
          </svg>
        </div>

        {/* Body */}
        <div className="pp-body">

          {/* Sidebar */}
          <aside className="pp-sidebar">
            <div className="pp-sidebar-label">Contents</div>
            {sections.map((s) => (
              <button
                key={s.id}
                className={`pp-nav-btn${activeSection === s.id ? " active" : ""}`}
                onClick={() => setActiveSection(s.id)}
              >
                <span className="pp-nav-num">{s.label}</span>
                <span className="pp-nav-lbl">{s.short}</span>
              </button>
            ))}
            <div className="pp-prog">
              <div className="pp-prog-track">
                <div className="pp-prog-fill" style={{ width: `${((currentIdx + 1) / sections.length) * 100}%` }} />
              </div>
              <div className="pp-prog-lbl">{currentIdx + 1} / {sections.length} sections</div>
            </div>
          </aside>

          {/* Content */}
          <main className="pp-content" key={activeSection}>
            <div className="pp-anim">
              <div className="pp-sec-eyebrow">Section {current.label}</div>
              <h2 className="pp-sec-title">{current.title}</h2>
              <p className="pp-sec-body">{current.content}</p>
              <ul className="pp-list">
                {current.list.map((item, i) => (
                  <li key={i}><span className="pp-dot" />{item}</li>
                ))}
              </ul>
              <div className="pp-note">
                <span className="pp-note-tag">Note</span>
                {current.note}
              </div>
            </div>
          </main>

        </div>

       
       

      </div>
    </>
  );
}