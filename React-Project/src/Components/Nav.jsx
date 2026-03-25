import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Syne:wght@600;700;800&display=swap');

  :root {
    --nav-height: 68px;
    --ink: #0a0a0f;
    --ink-soft: #3d3d4e;
    --ink-muted: #8888a0;
    --surface: rgba(255,255,255,0.82);
    --surface-hover: rgba(10,10,15,0.05);
    --accent: #5b4fff;
    --accent-glow: rgba(91,79,255,0.22);
    --border: rgba(10,10,15,0.08);
    --shadow-nav: 0 1px 0 rgba(10,10,15,0.06), 0 8px 32px rgba(10,10,15,0.06);
    --shadow-cta: 0 2px 12px rgba(91,79,255,0.32), 0 1px 2px rgba(91,79,255,0.2);
    --shadow-cta-hover: 0 6px 28px rgba(91,79,255,0.45), 0 2px 8px rgba(91,79,255,0.3);
    --r: 10px;
    --font-ui: 'DM Sans', sans-serif;
    --font-brand: 'Syne', sans-serif;
  }

  /* ── Base ─────────────────────────────────── */
  .nx-root * { box-sizing: border-box; }
  .nx-root { font-family: var(--font-ui); }

  /* ── Nav Shell ────────────────────────────── */
  .nx-nav {
    position: sticky; top: 0; z-index: 100;
    height: var(--nav-height);
    background: var(--surface);
    backdrop-filter: blur(18px) saturate(180%);
    -webkit-backdrop-filter: blur(18px) saturate(180%);
    border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow-nav);
    transition: background 0.3s, box-shadow 0.3s;
  }
  .nx-nav.nx-scrolled {
    background: rgba(255,255,255,0.94);
    box-shadow: 0 1px 0 rgba(10,10,15,0.08), 0 12px 40px rgba(10,10,15,0.1);
  }

  /* ── Inner ────────────────────────────────── */
  .nx-inner {
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 32px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  /* ── Logo ─────────────────────────────────── */
  .nx-logo {
    display: flex; align-items: center; gap: 11px;
    text-decoration: none; flex-shrink: 0;
  }
  .nx-logo-mark {
    width: 34px; height: 34px; border-radius: 10px;
    background: linear-gradient(135deg, #5b4fff 0%, #9b8fff 100%);
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 2px 10px rgba(91,79,255,0.3);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .nx-logo:hover .nx-logo-mark {
    transform: rotate(-6deg) scale(1.06);
    box-shadow: 0 4px 18px rgba(91,79,255,0.45);
  }
  .nx-logo-name {
    font-family: var(--font-brand);
    font-size: 18px; font-weight: 700;
    color: var(--ink); letter-spacing: -0.4px;
  }
  .nx-logo-dot {
    display: inline-block; width: 5px; height: 5px; border-radius: 50%;
    background: var(--accent); margin-left: 1px; margin-bottom: 2px;
    vertical-align: bottom;
  }

  /* ── Links ────────────────────────────────── */
  .nx-links {
    display: flex; align-items: center; gap: 2px;
    position: absolute; left: 50%; transform: translateX(-50%);
  }
  .nx-link {
    position: relative; display: flex; align-items: center;
    padding: 7px 15px; border-radius: 8px; font-size: 14px;
    font-weight: 500; letter-spacing: -0.1px;
    text-decoration: none; color: var(--ink-muted);
    transition: color 0.18s, background 0.18s;
    white-space: nowrap;
  }
  .nx-link:hover { background: var(--surface-hover); color: var(--ink); }
  .nx-link.nx-active { color: var(--ink); background: var(--surface-hover); }
  .nx-link-pip {
    position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%);
    width: 16px; height: 2px; border-radius: 2px; background: var(--accent);
    opacity: 0; transition: opacity 0.2s, width 0.2s;
  }
  .nx-link.nx-active .nx-link-pip { opacity: 1; }
  .nx-link:hover .nx-link-pip { opacity: 0.4; width: 10px; }

  /* ── Actions ──────────────────────────────── */
  .nx-actions {
    display: flex; align-items: center; gap: 6px; flex-shrink: 0;
  }
  .nx-signin {
    padding: 8px 16px; border-radius: var(--r);
    font-family: var(--font-ui); font-size: 14px; font-weight: 500;
    color: var(--ink-soft); text-decoration: none;
    transition: background 0.18s, color 0.18s;
  }
  .nx-signin:hover { background: var(--surface-hover); color: var(--ink); }

  /* ── CTA ──────────────────────────────────── */
  .nx-cta {
    display: inline-flex; align-items: center; gap: 7px;
    padding: 9px 20px; border-radius: var(--r);
    font-family: var(--font-ui); font-size: 14px; font-weight: 600;
    color: #fff; background: var(--accent);
    text-decoration: none; letter-spacing: -0.1px;
    box-shadow: var(--shadow-cta);
    transition: box-shadow 0.2s, transform 0.15s, background 0.18s;
    position: relative; overflow: hidden;
  }
  .nx-cta::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%);
    opacity: 1;
  }
  .nx-cta:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-cta-hover);
    background: #4b3ff0;
  }
  .nx-cta:active { transform: translateY(0); }
  .nx-cta-arrow {
    display: inline-flex; align-items: center; justify-content: center;
    width: 16px; height: 16px; border-radius: 50%;
    background: rgba(255,255,255,0.18);
    transition: transform 0.2s;
    font-style: normal;
  }
  .nx-cta:hover .nx-cta-arrow { transform: translateX(2px); }

  /* ── Divider ──────────────────────────────── */
  .nx-divider {
    width: 1px; height: 18px; background: var(--border);
    margin: 0 4px;
  }

  /* ── Mobile Burger ────────────────────────── */
  .nx-burger {
    display: none; flex-direction: column; justify-content: center;
    width: 36px; height: 36px; border-radius: 8px; border: 1px solid var(--border);
    background: transparent; cursor: pointer; padding: 9px; gap: 4px;
    transition: background 0.18s;
  }
  .nx-burger:hover { background: var(--surface-hover); }
  .nx-burger-line {
    display: block; height: 1.5px; border-radius: 2px;
    background: var(--ink); transition: transform 0.22s, opacity 0.22s, width 0.22s;
  }
  .nx-burger-line:nth-child(1) { width: 18px; }
  .nx-burger-line:nth-child(2) { width: 12px; }
  .nx-burger-line:nth-child(3) { width: 15px; }
  .nx-burger.nx-open .nx-burger-line:nth-child(1) {
    transform: rotate(45deg) translate(4px, 4px); width: 18px;
  }
  .nx-burger.nx-open .nx-burger-line:nth-child(2) { opacity: 0; }
  .nx-burger.nx-open .nx-burger-line:nth-child(3) {
    transform: rotate(-45deg) translate(4px, -4px); width: 18px;
  }

  /* ── Mobile Drawer ────────────────────────── */
  .nx-drawer {
    overflow: hidden; max-height: 0;
    transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s;
    opacity: 0;
    background: rgba(255,255,255,0.97);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
  }
  .nx-drawer.nx-drawer-open {
    max-height: 400px; opacity: 1;
  }
  .nx-drawer-inner {
    padding: 10px 20px 18px;
  }
  .nx-drawer-link {
    display: flex; align-items: center; justify-content: space-between;
    padding: 11px 14px; border-radius: 9px; font-size: 14px;
    font-weight: 500; color: var(--ink-soft); text-decoration: none;
    margin-bottom: 2px;
    transition: background 0.15s, color 0.15s;
  }
  .nx-drawer-link:hover { background: var(--surface-hover); color: var(--ink); }
  .nx-drawer-link.nx-active { background: rgba(91,79,255,0.07); color: var(--accent); }
  .nx-drawer-link-badge {
    display: inline-block; width: 6px; height: 6px; border-radius: 50%;
    background: var(--accent); opacity: 0;
  }
  .nx-drawer-link.nx-active .nx-drawer-link-badge { opacity: 1; }
  .nx-drawer-sep {
    height: 1px; background: var(--border); margin: 10px 0;
  }
  .nx-drawer-actions {
    display: flex; flex-direction: column; gap: 6px;
  }
  .nx-drawer-signin {
    display: block; padding: 10px 14px; border-radius: 9px;
    font-size: 14px; font-weight: 500; color: var(--ink-soft);
    text-decoration: none; text-align: center;
    transition: background 0.15s;
  }
  .nx-drawer-signin:hover { background: var(--surface-hover); }
  .nx-drawer-cta {
    display: block; padding: 12px 14px; border-radius: var(--r);
    font-size: 14px; font-weight: 600; color: #fff; background: var(--accent);
    text-decoration: none; text-align: center;
    box-shadow: var(--shadow-cta);
    transition: background 0.18s;
  }
  .nx-drawer-cta:hover { background: #4b3ff0; }

  /* ── Responsive ───────────────────────────── */
  @media (max-width: 767px) {
    .nx-links, .nx-actions { display: none !important; }
    .nx-burger { display: flex; }
    .nx-inner { padding: 0 20px; }
  }
`;

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isActive = (to) => location.pathname === to;

  return (
    <div className="nx-root">
      <style>{styles}</style>

      <nav className={`nx-nav${scrolled ? " nx-scrolled" : ""}`}>
        <div className="nx-inner">

          {/* Logo */}
          <Link to="/" className="nx-logo">
            <div className="nx-logo-mark">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M7.5 2L13.5 12H1.5L7.5 2Z" fill="white" fillOpacity="0.95" />
                <path d="M7.5 6L10.5 11H4.5L7.5 6Z" fill="white" fillOpacity="0.35" />
              </svg>
            </div>
            <span className="nx-logo-name">
              MyApp<span className="nx-logo-dot" />
            </span>
          </Link>

          {/* Center Links */}
          <div className="nx-links">
            {NAV_LINKS.map(({ label, to }) => (
              <Link key={label} to={to} className={`nx-link${isActive(to) ? " nx-active" : ""}`}>
                {label}
                <span className="nx-link-pip" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="nx-actions">
            <Link to="/login" className="nx-signin">Sign in</Link>
            <div className="nx-divider" />
            <Link to="/contact" className="nx-cta">
              Get started
              <em className="nx-cta-arrow">→</em>
            </Link>
          </div>

          {/* Mobile Burger */}
          <button
            className={`nx-burger${menuOpen ? " nx-open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className="nx-burger-line" />
            <span className="nx-burger-line" />
            <span className="nx-burger-line" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`nx-drawer${menuOpen ? " nx-drawer-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="nx-drawer-inner">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className={`nx-drawer-link${isActive(to) ? " nx-active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
              <span className="nx-drawer-link-badge" />
            </Link>
          ))}
          <div className="nx-drawer-sep" />
          <div className="nx-drawer-actions">
            <Link to="/login" className="nx-drawer-signin" onClick={() => setMenuOpen(false)}>Sign in</Link>
            <Link to="/contact" className="nx-drawer-cta" onClick={() => setMenuOpen(false)}>Get started →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}