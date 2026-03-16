import { useState, useEffect } from "react";
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

const BOTTOM_LINKS = [
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
  { label: "Cookies", to: "/cookies" },
];

const TwitterIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialStyle = { width: '34px', height: '34px', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', textDecoration: 'none', background: 'white', cursor: 'pointer', transition: 'all 0.15s' };
const linkStyle = { fontSize: '14px', color: '#64748b', textDecoration: 'none', fontWeight: '400', display: 'block', padding: '3px 0' };
const headingStyle = { fontSize: '12px', fontWeight: '600', color: '#0f172a', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 16px' };

function LinkGroup({ title, links }) {
  return (
    <div>
      <p style={headingStyle}>{title}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {links.map(({ label, to }) => (
          <Link key={label} to={to} style={linkStyle}>{label}</Link>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
        .footer-root { font-family: 'Outfit', sans-serif; }
        .footer-root a:hover { color: #0f172a; }
        .social-icon:hover { background: #0f172a !important; color: white !important; }
        .logo-mark { background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%); }
      `}</style>

      <footer className="footer-root bg-white" style={{ borderTop: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: isMobile ? '40px 20px 24px' : '56px 28px 32px' }}>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : '2fr 1fr 1fr 1fr',
            gap: isMobile ? '32px' : '48px',
            marginBottom: '48px'
          }}>

            <div style={{ gridColumn: isMobile ? '1 / -1' : 'auto' }}>
              <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '16px' }}>
                <div className="logo-mark" style={{ width: '32px', height: '32px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 12L8 4L13 12H3Z" fill="white" fillOpacity="0.9" />
                  </svg>
                </div>
                <span style={{ fontSize: '17px', fontWeight: '700', color: '#0f172a', letterSpacing: '-0.3px' }}>MyApp</span>
              </Link>
              <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.7', maxWidth: '260px', margin: '0 0 24px' }}>
                Building better products for teams that move fast and care about quality.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon" style={socialStyle}><TwitterIcon /></a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon" style={socialStyle}><GithubIcon /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" style={socialStyle}><LinkedinIcon /></a>
              </div>
            </div>

            <LinkGroup title="Product" links={PRODUCT_LINKS} />
            <LinkGroup title="Company" links={COMPANY_LINKS} />
            <LinkGroup title="Legal" links={LEGAL_LINKS} />
          </div>

          <div style={{
            borderTop: '1px solid #f1f5f9',
            paddingTop: '24px',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            gap: isMobile ? '12px' : '0'
          }}>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>
              © {year} MyApp. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              {BOTTOM_LINKS.map(({ label, to }) => (
                <Link key={label} to={to} style={{ fontSize: '13px', color: '#94a3b8', textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;