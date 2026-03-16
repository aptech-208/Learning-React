import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
        .nav-root { font-family: 'Outfit', sans-serif; }
        .pill-hover { transition: background 0.18s, color 0.18s; }
        .pill-hover:hover { background: rgba(15,23,42,0.06); color: #0f172a; }
        .cta-btn { transition: box-shadow 0.18s, transform 0.12s, background 0.18s; }
        .cta-btn:hover { box-shadow: 0 4px 24px rgba(15,23,42,0.18); transform: translateY(-1px); background: #1e293b; }
        .cta-btn:active { transform: translateY(0px); }
        .dot-active { position: relative; }
        .dot-active::after { content: ''; position: absolute; bottom: -5px; left: 50%; transform: translateX(-50%); width: 4px; height: 4px; border-radius: 50%; background: #0ea5e9; }
        .logo-mark { background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%); }
      `}</style>

      <nav className="nav-root bg-white sticky top-0 z-50" style={{ borderBottom: '1px solid #f1f5f9', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 28px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div className="logo-mark" style={{ width: '32px', height: '32px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 12L8 4L13 12H3Z" fill="white" fillOpacity="0.9" />
              </svg>
            </div>
            <span style={{ fontSize: '17px', fontWeight: '700', color: '#0f172a', letterSpacing: '-0.3px' }}>MyApp</span>
          </Link>

          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              {NAV_LINKS.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className={isActive(to) ? "pill-hover dot-active" : "pill-hover"}
                  style={{
                    padding: '7px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: '500',
                    textDecoration: 'none', color: isActive(to) ? '#0f172a' : '#64748b',
                    background: isActive(to) ? 'rgba(15,23,42,0.05)' : 'transparent',
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}

          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Link to="/login" className="pill-hover" style={{ padding: '7px 16px', fontSize: '14px', fontWeight: '500', color: '#475569', textDecoration: 'none', borderRadius: '8px' }}>
                Sign in
              </Link>
              <Link to="/contact" className="cta-btn" style={{ padding: '8px 20px', fontSize: '14px', fontWeight: '600', color: '#fff', background: '#0f172a', borderRadius: '10px', textDecoration: 'none', letterSpacing: '0.01em' }}>
                Get started →
              </Link>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span style={{ display: 'block', width: '20px', height: '1.5px', background: '#334155', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none' }} />
              <span style={{ display: 'block', width: '20px', height: '1.5px', background: '#334155', opacity: menuOpen ? 0 : 1, transition: 'all 0.2s' }} />
              <span style={{ display: 'block', width: '20px', height: '1.5px', background: '#334155', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none' }} />
            </button>
          )}
        </div>

        {isMobile && menuOpen && (
          <div style={{ borderTop: '1px solid #f1f5f9', padding: '12px 20px 16px' }}>
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block', padding: '10px 14px', borderRadius: '8px', fontSize: '14px',
                  fontWeight: '500', color: isActive(to) ? '#0f172a' : '#64748b',
                  background: isActive(to) ? '#f8fafc' : 'transparent', textDecoration: 'none', marginBottom: '2px'
                }}
              >
                {label}
              </Link>
            ))}
            <div style={{ borderTop: '1px solid #f1f5f9', marginTop: '10px', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Link to="/login" style={{ display: 'block', padding: '10px 14px', borderRadius: '8px', fontSize: '14px', fontWeight: '500', color: '#64748b', textDecoration: 'none' }}>Sign in</Link>
              <Link to="/contact" style={{ display: 'block', padding: '11px 14px', borderRadius: '10px', fontSize: '14px', fontWeight: '600', color: '#fff', background: '#0f172a', textDecoration: 'none', textAlign: 'center' }}>Get started →</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav;