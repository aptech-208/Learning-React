import { Link } from "react-router-dom";

const PRODUCT_LINKS = [
  { label: "Features", to: "/features" },
  { label: "Pricing", to: "/pricing" },
  { label: "Changelog", to: "/changelog" },
  { label: "Roadmap", to: "/roadmap" },
];

const COMPANY_LINKS = [
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Careers", to: "/careers" },
  { label: "Press", to: "/press" },
];

const LEGAL_LINKS = [
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
  { label: "Cookies", to: "/cookies" },
  { label: "Licenses", to: "/licenses" },
];

const XIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=Syne:wght@600;700;800&display=swap');

  :root {
    --ft-ink: #0a0a0f;
    --ft-ink-soft: #3d3d4e;
    --ft-ink-muted: #8888a0;
    --ft-ink-faint: #b0b0c0;
    --ft-accent: #5b4fff;
    --ft-accent-faint: rgba(91,79,255,0.1);
    --ft-border: rgba(10,10,15,0.08);
    --ft-surface: #f8f8fc;
    --ft-font: 'DM Sans', sans-serif;
    --ft-brand: 'Syne', sans-serif;
  }

  .ft-root * { box-sizing: border-box; }
  .ft-root { font-family: var(--ft-font); }

  /* ── CTA Section (above footer, on page bg) ── */
  .ft-cta-section {
    background: #fff;
    padding: 48px 32px 0;
  }
  .ft-cta-section-inner {
    max-width: 1160px;
    margin: 0 auto;
  }
  .ft-cta-band {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    background: var(--ft-surface);
    border: 1px solid var(--ft-border);
    border-radius: 16px;
    padding: 28px 36px;
    position: relative;
    overflow: hidden;
  }
  .ft-cta-band::before {
    content: '';
    position: absolute;
    top: -60px; left: -40px;
    width: 220px; height: 220px;
    background: radial-gradient(circle, rgba(91,79,255,0.07) 0%, transparent 70%);
    pointer-events: none;
  }
  .ft-cta-band::after {
    content: '';
    position: absolute;
    bottom: -80px; right: 80px;
    width: 260px; height: 260px;
    background: radial-gradient(circle, rgba(91,79,255,0.04) 0%, transparent 70%);
    pointer-events: none;
  }
  .ft-cta-text { position: relative; }
  .ft-cta-eyebrow {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 11px; font-weight: 600; letter-spacing: 0.08em;
    text-transform: uppercase; color: var(--ft-accent);
    background: var(--ft-accent-faint);
    padding: 4px 10px; border-radius: 20px;
    margin-bottom: 10px;
  }
  .ft-cta-eyebrow-dot {
    width: 5px; height: 5px; border-radius: 50%;
    background: var(--ft-accent);
    animation: ft-pulse 2s ease-in-out infinite;
  }
  @keyframes ft-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.85); }
  }
  .ft-cta-heading {
    font-family: var(--ft-brand);
    font-size: 22px; font-weight: 700;
    color: var(--ft-ink); margin: 0 0 4px;
    letter-spacing: -0.4px;
  }
  .ft-cta-sub {
    font-size: 14px; color: var(--ft-ink-muted);
    margin: 0; line-height: 1.5;
  }
  .ft-cta-actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; position: relative; }
  .ft-cta-btn-primary {
    display: inline-flex; align-items: center; gap: 7px;
    padding: 10px 22px; border-radius: 10px;
    font-family: var(--ft-font); font-size: 14px; font-weight: 600;
    color: #fff; background: var(--ft-accent);
    text-decoration: none; letter-spacing: -0.1px;
    box-shadow: 0 2px 12px rgba(91,79,255,0.3), 0 1px 2px rgba(91,79,255,0.2);
    transition: transform 0.15s, box-shadow 0.2s, background 0.18s;
    position: relative; overflow: hidden;
    white-space: nowrap;
  }
  .ft-cta-btn-primary::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%);
  }
  .ft-cta-btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 24px rgba(91,79,255,0.42), 0 2px 8px rgba(91,79,255,0.25);
    background: #4b3ff0;
  }
  .ft-cta-btn-secondary {
    display: inline-flex; align-items: center;
    padding: 10px 18px; border-radius: 10px;
    font-family: var(--ft-font); font-size: 14px; font-weight: 500;
    color: var(--ft-ink-soft); background: #fff;
    border: 1px solid var(--ft-border);
    text-decoration: none; white-space: nowrap;
    transition: background 0.18s, color 0.18s, border-color 0.18s;
  }
  .ft-cta-btn-secondary:hover {
    color: var(--ft-ink);
    border-color: rgba(10,10,15,0.18);
  }

  /* ── Footer Shell ────────────────────────── */
  .ft-shell {
    background: var(--ft-surface);
    border-top: 1px solid var(--ft-border);
    position: relative;
    overflow: hidden;
    margin-top: 0;
  }

  /* Subtle background grid */
  .ft-shell::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(var(--ft-border) 1px, transparent 1px),
      linear-gradient(90deg, var(--ft-border) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.15) 100%);
    pointer-events: none;
  }

  /* ── Content Wrapper ─────────────────────── */
  .ft-wrap {
    position: relative;
    max-width: 1160px;
    margin: 0 auto;
    padding: 52px 32px 36px;
  }

  /* ── Main Grid ───────────────────────────── */
  .ft-grid {
    display: grid;
    grid-template-columns: 1.8fr 1fr 1fr 1fr;
    gap: 0 32px;
    margin-bottom: 48px;
    align-items: start;
  }

  /* ── Brand Col ───────────────────────────── */
  .ft-logo {
    display: inline-flex; align-items: center; gap: 10px;
    text-decoration: none; margin-bottom: 14px;
  }
  .ft-logo-mark {
    width: 34px; height: 34px; border-radius: 10px;
    background: linear-gradient(135deg, #5b4fff 0%, #9b8fff 100%);
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 2px 10px rgba(91,79,255,0.25);
    flex-shrink: 0;
  }
  .ft-logo-name {
    font-family: var(--ft-brand);
    font-size: 18px; font-weight: 700;
    color: var(--ft-ink); letter-spacing: -0.4px;
  }
  .ft-logo-dot {
    display: inline-block; width: 5px; height: 5px; border-radius: 50%;
    background: var(--ft-accent); margin-left: 1px; margin-bottom: 2px;
    vertical-align: bottom;
  }
  .ft-tagline {
    font-size: 14px; color: var(--ft-ink-muted);
    line-height: 1.75; max-width: 280px;
    margin: 0 0 22px;
  }


  /* Newsletter */
  .ft-newsletter-label {
    font-size: 12px; font-weight: 600; letter-spacing: 0.06em;
    text-transform: uppercase; color: var(--ft-ink-soft);
    margin: 0 0 10px; display: block;
  }
  .ft-newsletter-row {
    display: flex; gap: 6px; max-width: 300px;
  }
  .ft-newsletter-input {
    flex: 1; padding: 9px 13px; border-radius: 9px;
    border: 1px solid var(--ft-border);
    background: white; font-family: var(--ft-font);
    font-size: 13px; color: var(--ft-ink);
    outline: none; transition: border-color 0.15s, box-shadow 0.15s;
  }
  .ft-newsletter-input::placeholder { color: var(--ft-ink-faint); }
  .ft-newsletter-input:focus {
    border-color: rgba(91,79,255,0.4);
    box-shadow: 0 0 0 3px rgba(91,79,255,0.08);
  }
  .ft-newsletter-btn {
    padding: 9px 14px; border-radius: 9px;
    background: var(--ft-ink); color: white; border: none;
    font-family: var(--ft-font); font-size: 13px; font-weight: 600;
    cursor: pointer; white-space: nowrap;
    transition: background 0.15s, transform 0.12s;
  }
  .ft-newsletter-btn:hover { background: #1e1e2e; transform: translateY(-1px); }

  /* Social icons */
  .ft-socials { display: flex; gap: 7px; }
  .ft-social {
    width: 34px; height: 34px; border-radius: 9px;
    border: 1px solid var(--ft-border);
    background: white;
    display: flex; align-items: center; justify-content: center;
    color: var(--ft-ink-muted); text-decoration: none;
    transition: background 0.15s, color 0.15s, border-color 0.15s, transform 0.15s, box-shadow 0.15s;
  }
  .ft-social:hover {
    background: var(--ft-ink);
    color: white;
    border-color: var(--ft-ink);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(10,10,15,0.15);
  }

  /* ── Link Groups ─────────────────────────── */
  .ft-group-label {
    font-size: 11px; font-weight: 600;
    letter-spacing: 0.09em; text-transform: uppercase;
    color: var(--ft-ink); margin: 0 0 16px;
  }
  .ft-group-links {
    display: flex; flex-direction: column; gap: 11px;
  }
  .ft-link {
    font-size: 14px; color: var(--ft-ink-muted);
    text-decoration: none; font-weight: 400;
    transition: color 0.15s;
    display: inline-flex; align-items: center; gap: 6px;
    width: fit-content;
  }
  .ft-link:hover { color: var(--ft-ink); }
  .ft-link-badge {
    font-size: 10px; font-weight: 600; letter-spacing: 0.04em;
    padding: 2px 6px; border-radius: 4px;
    background: var(--ft-accent-faint); color: var(--ft-accent);
    line-height: 1.4;
  }

  /* ── Divider ─────────────────────────────── */
  .ft-hr {
    height: 1px; background: var(--ft-border); margin-bottom: 24px;
  }

  /* ── Bottom bar ──────────────────────────── */
  .ft-bottom {
    display: flex; align-items: center;
    justify-content: space-between; gap: 16px;
  }
  .ft-copy {
    font-size: 13px; color: var(--ft-ink-faint); margin: 0;
  }
  .ft-copy strong { font-weight: 500; color: var(--ft-ink-muted); }
  .ft-bottom-links {
    display: flex; align-items: center; gap: 4px;
  }
  .ft-bottom-link {
    font-size: 13px; color: var(--ft-ink-faint);
    text-decoration: none; padding: 4px 10px;
    border-radius: 6px;
    transition: color 0.15s, background 0.15s;
  }
  .ft-bottom-link:hover { color: var(--ft-ink-soft); background: rgba(10,10,15,0.04); }
  .ft-bottom-sep { color: var(--ft-border); font-size: 13px; user-select: none; }

  .ft-status {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 12px; color: #22c55e; font-weight: 500;
  }
  .ft-status-dot {
    width: 6px; height: 6px; border-radius: 50%; background: #22c55e;
    box-shadow: 0 0 0 0 rgba(34,197,94,0.4);
    animation: ft-status-ring 2.5s ease-in-out infinite;
  }
  @keyframes ft-status-ring {
    0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
    70% { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
    100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
  }

  /* ── Responsive ──────────────────────────── */
  @media (max-width: 900px) {
    .ft-grid {
      grid-template-columns: 1fr 1fr;
      gap: 36px;
    }
    .ft-brand-col { grid-column: 1 / -1; }
    .ft-cta-band {
      flex-direction: column;
      align-items: flex-start;
    }
    .ft-cta-actions { flex-direction: column; align-items: stretch; width: 100%; }
    .ft-cta-btn-primary, .ft-cta-btn-secondary { justify-content: center; }
  }

  @media (max-width: 600px) {
    .ft-cta-section { padding: 32px 20px 0; }
    .ft-wrap { padding: 36px 20px 28px; }
    .ft-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
    .ft-bottom { flex-direction: column; align-items: flex-start; gap: 10px; }
    .ft-cta-band { padding: 22px 20px; }
  }
`;

function LinkGroup({ title, links }) {
  return (
    <div className="ft-link-group">
      <p className="ft-group-label">{title}</p>
      <div className="ft-group-links">
        {links.map(({ label, to, badge }) => (
          <Link key={label} to={to} className="ft-link">
            {label}
            {badge && <span className="ft-link-badge">{badge}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const product = [
    { label: "Features", to: "/features" },
    { label: "Pricing", to: "/pricing" },
    { label: "Changelog", to: "/changelog", badge: "New" },
    { label: "Roadmap", to: "/roadmap" },
  ];

  return (
    <div className="ft-root">
      <style>{styles}</style>

      {/* CTA band sits on the white page background, above the grey footer */}
      <div className="ft-cta-section">
        <div className="ft-cta-section-inner">
          <div className="ft-cta-band">
            <div className="ft-cta-text">
              <div className="ft-cta-eyebrow">
                <span className="ft-cta-eyebrow-dot" />
                Now in public beta
              </div>
              <h2 className="ft-cta-heading">Ready to ship faster?</h2>
              <p className="ft-cta-sub">Join 4,000+ teams already building with MyApp.</p>
            </div>
            <div className="ft-cta-actions">
              <Link to="/contact" className="ft-cta-btn-primary">Get started free →</Link>
              <Link to="/about" className="ft-cta-btn-secondary">See how it works</Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="ft-shell">
        <div className="ft-wrap">

          {/* ── Grid ───────────────────────── */}
          <div className="ft-grid">

            {/* Brand */}
            <div className="ft-brand-col">
              <Link to="/" className="ft-logo">
                <div className="ft-logo-mark">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M7.5 2L13.5 12H1.5L7.5 2Z" fill="white" fillOpacity="0.95" />
                    <path d="M7.5 6L10.5 11H4.5L7.5 6Z" fill="white" fillOpacity="0.35" />
                  </svg>
                </div>
                <span className="ft-logo-name">MyApp<span className="ft-logo-dot" /></span>
              </Link>
              <p className="ft-tagline">
                Building better products for teams that move fast and care about quality.
              </p>
              <span className="ft-newsletter-label">Stay in the loop</span>
              <div className="ft-newsletter-row">
                <input className="ft-newsletter-input" type="email" placeholder="you@company.com" />
                <button className="ft-newsletter-btn">Subscribe</button>
              </div>
              <div className="ft-socials" style={{ marginTop: '20px' }}>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="ft-social" aria-label="X / Twitter"><XIcon /></a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="ft-social" aria-label="GitHub"><GithubIcon /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="ft-social" aria-label="LinkedIn"><LinkedinIcon /></a>
              </div>
            </div>

            <LinkGroup title="Product" links={product} />
            <LinkGroup title="Company" links={COMPANY_LINKS} />
            <LinkGroup title="Legal" links={LEGAL_LINKS} />
          </div>

          {/* ── Bottom Bar ─────────────────── */}
          <div className="ft-hr" />
          <div className="ft-bottom">
            <p className="ft-copy">© {year} <strong>MyApp, Inc.</strong> All rights reserved.</p>

            <span className="ft-status">
              <span className="ft-status-dot" />
              All systems operational
            </span>

            <div className="ft-bottom-links">
              {[
                { label: "Privacy", to: "/privacy" },
                { label: "Terms", to: "/terms" },
                { label: "Cookies", to: "/cookies" },
              ].map(({ label, to }, i, arr) => (
                <span key={label} style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <Link to={to} className="ft-bottom-link">{label}</Link>
                  {i < arr.length - 1 && <span className="ft-bottom-sep">·</span>}
                </span>
              ))}
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}