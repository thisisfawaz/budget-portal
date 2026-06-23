"use client";

import { useState } from "react";

export default function PrivacyPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style>
        {`
          .hamburger-btn {
            display: none !important;
          }
          
          .mobile-menu {
            display: none !important;
          }
          
          .mobile-menu.open {
            display: flex !important;
            flex-direction: column;
          }
          
          @media (max-width: 768px) {
            .hamburger-btn {
              display: flex !important;
            }
            
            .nav-links {
              display: none !important;
            }
            
            .mobile-menu.open {
              display: flex !important;
              flex-direction: column;
            }
            
            .theme-text {
              display: none !important;
            }
            
            .theme-icon {
              display: inline !important;
            }
            
            .title {
              font-size: 32px !important;
            }
            
            .subtitle {
              font-size: 16px !important;
            }
            
            .header {
              padding: 30px 16px 24px !important;
            }
            
            .content {
              padding: 24px 16px !important;
            }
            
            .contentLight {
              padding: 24px 16px !important;
            }
            
            .section-title {
              font-size: 20px !important;
            }
            
            .text {
              font-size: 14px !important;
            }
            
            .list {
              font-size: 14px !important;
            }
            
            .last-updated {
              font-size: 12px !important;
            }
            
            .contact-info {
              padding: 12px 16px !important;
            }
            
            .cta-content {
              padding: 32px 20px !important;
            }
            
            .cta-title {
              font-size: 24px !important;
            }
            
            .cta-text {
              font-size: 16px !important;
            }
            
            .footer-links {
              gap: 16px !important;
            }
            
            .footer-logo {
              font-size: 18px !important;
            }
            
            .navbar {
              padding: 16px 20px !important;
            }
            
            .logo {
              font-size: 20px !important;
            }
            
            .logo-icon {
              font-size: 24px !important;
            }
          }
        `}
      </style>

      <div style={darkMode ? styles.pageDark : styles.pageLight}>
        
        {/* NAVBAR */}
        <div style={darkMode ? styles.navbar : styles.navbarLight} className="navbar">
          <div style={styles.logo} className="logo">
            <span style={styles.logoIcon} className="logo-icon">📊</span> Budget AI
          </div>

          <div style={styles.navLinks} className="nav-links">
            <a href="/" style={styles.navItem}>
              <span style={styles.navIcon}>🏠</span> Home
            </a>
            <a href="/ai" style={styles.navItem}>
              <span style={styles.navIcon}>🤖</span> Chat
            </a>
            <a href="/templates" style={styles.navItem}>
              <span style={styles.navIcon}>📋</span> Templates
            </a>
            <a href="/practice" style={styles.navItem}>
              <span style={styles.navIcon}>🎯</span> Practice
            </a>
            <a href="/about" style={styles.navItem}>
              <span style={styles.navIcon}>📖</span> About
            </a>
          </div>

          <div style={styles.navRight}>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={darkMode ? styles.themeButton : styles.themeButtonLight}
            >
              <span className="theme-text">{darkMode ? "☀️ Light" : "🌙 Dark"}</span>
              <span className="theme-icon" style={{display: "none"}}>{darkMode ? "☀️" : "🌙"}</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={styles.hamburger}
              className="hamburger-btn"
              aria-label="Toggle menu"
            >
              <span style={{
                ...styles.hamburgerLine,
                ...(isMenuOpen ? styles.hamburgerLineOpen1 : {}),
                ...(darkMode ? {} : styles.hamburgerLineLight),
              }} />
              <span style={{
                ...styles.hamburgerLine,
                ...(isMenuOpen ? styles.hamburgerLineOpen2 : {}),
                ...(darkMode ? {} : styles.hamburgerLineLight),
              }} />
              <span style={{
                ...styles.hamburgerLine,
                ...(isMenuOpen ? styles.hamburgerLineOpen3 : {}),
                ...(darkMode ? {} : styles.hamburgerLineLight),
              }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} style={darkMode ? styles.mobileMenu : styles.mobileMenuLight}>
          <a href="/" style={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
            <span style={styles.navIcon}>🏠</span> Home
          </a>
          <a href="/ai" style={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
            <span style={styles.navIcon}>🤖</span> Chat
          </a>
          <a href="/templates" style={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
            <span style={styles.navIcon}>📋</span> Templates
          </a>
          <a href="/practice" style={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
            <span style={styles.navIcon}>🎯</span> Practice
          </a>
          <a href="/about" style={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
            <span style={styles.navIcon}>📖</span> About
          </a>
        </div>

        {/* HEADER */}
        <div style={styles.header} className="header">
          <div style={darkMode ? styles.badge : styles.badgeLight}>
            🔒 Privacy & Security
          </div>
          <h1 style={styles.title} className="title">Privacy Policy</h1>
          <p style={styles.subtitle} className="subtitle">
            How we protect and handle your information
          </p>
          <div style={styles.lastUpdated} className="last-updated">
            Last Updated: January 2026
          </div>
        </div>

        {/* CONTENT */}
        <div style={styles.contentWrapper}>
          <div style={darkMode ? styles.content : styles.contentLight} className="content">
            
            {/* Section 1 */}
            <div style={styles.section}>
              <div style={styles.sectionIcon}>📋</div>
              <h2 style={styles.sectionTitle} className="section-title">Information We Collect</h2>
              <p style={styles.text} className="text">
                Budget AI collects minimal information to provide and improve our services:
              </p>
              <ul style={styles.list} className="list">
                <li><strong>Account Information:</strong> Email address and basic profile information when you create an account</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our platform, including questions asked and templates used</li>
                <li><strong>Excel Files:</strong> When you upload Excel files for assistance, we process them to provide answers and support</li>
                <li><strong>Feedback:</strong> Any feedback, suggestions, or responses you provide to help us improve</li>
              </ul>
            </div>

            <div style={darkMode ? styles.divider : styles.dividerLight}></div>

            {/* Section 2 */}
            <div style={styles.section}>
              <div style={styles.sectionIcon}>🔐</div>
              <h2 style={styles.sectionTitle} className="section-title">How We Use Your Information</h2>
              <p style={styles.text} className="text">
                Your information helps us deliver a better experience:
              </p>
              <ul style={styles.list} className="list">
                <li><strong>Service Delivery:</strong> To provide Excel assistance, budgeting support, and personalized recommendations</li>
                <li><strong>Improvement:</strong> To analyze usage patterns and improve our AI models and templates</li>
                <li><strong>Communication:</strong> To send important updates, security alerts, and service-related information</li>
                <li><strong>Security:</strong> To detect and prevent fraud, abuse, and security incidents</li>
              </ul>
            </div>

            <div style={darkMode ? styles.divider : styles.dividerLight}></div>

            {/* Section 3 */}
            <div style={styles.section}>
              <div style={styles.sectionIcon}>🛡️</div>
              <h2 style={styles.sectionTitle} className="section-title">Data Protection & Security</h2>
              <p style={styles.text} className="text">
                We take data security seriously and implement multiple layers of protection:
              </p>
              <ul style={styles.list} className="list">
                <li><strong>Encryption:</strong> All data is encrypted in transit using industry-standard TLS protocols</li>
                <li><strong>Access Controls:</strong> Strict access controls limit who can view or process your data</li>
                <li><strong>Data Minimization:</strong> We only collect and retain data that is necessary for service delivery</li>
                <li><strong>Regular Audits:</strong> We conduct regular security audits and vulnerability assessments</li>
              </ul>
            </div>

            <div style={darkMode ? styles.divider : styles.dividerLight}></div>

            {/* Section 4 */}
            <div style={styles.section}>
              <div style={styles.sectionIcon}>🍪</div>
              <h2 style={styles.sectionTitle} className="section-title">Cookies & Tracking</h2>
              <p style={styles.text} className="text">
                We use cookies to enhance your experience:
              </p>
              <ul style={styles.list} className="list">
                <li><strong>Essential Cookies:</strong> Required for basic platform functionality and security</li>
                <li><strong>Performance Cookies:</strong> Help us understand how users interact with our platform</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences (like dark mode)</li>
                <li><strong>Session Cookies:</strong> Maintain your session while you use the platform</li>
              </ul>
              <p style={{...styles.text, marginTop: "12px"}} className="text">
                You can control cookie preferences through your browser settings.
              </p>
            </div>

            <div style={darkMode ? styles.divider : styles.dividerLight}></div>

            {/* Section 5 */}
            <div style={styles.section}>
              <div style={styles.sectionIcon}>👥</div>
              <h2 style={styles.sectionTitle} className="section-title">Data Sharing</h2>
              <p style={styles.text} className="text">
                We do not sell or rent your personal information. We may share data in limited circumstances:
              </p>
              <ul style={styles.list} className="list">
                <li><strong>Service Providers:</strong> Trusted third-party services that help us operate (hosting, analytics, etc.)</li>
                <li><strong>Legal Compliance:</strong> When required by law or to protect rights and safety</li>
                <li><strong>Consent:</strong> When you give us explicit permission to share information</li>
              </ul>
            </div>

            <div style={darkMode ? styles.divider : styles.dividerLight}></div>

            {/* Section 6 */}
            <div style={styles.section}>
              <div style={styles.sectionIcon}>🗄️</div>
              <h2 style={styles.sectionTitle} className="section-title">Data Retention</h2>
              <p style={styles.text} className="text">
                We retain your data only as long as necessary:
              </p>
              <ul style={styles.list} className="list">
                <li><strong>Active Accounts:</strong> Data is retained while your account is active</li>
                <li><strong>Inactive Accounts:</strong> Data may be retained for up to 12 months after account deactivation</li>
                <li><strong>Legal Requirements:</strong> Some data may be retained longer to comply with legal obligations</li>
                <li><strong>Anonymized Data:</strong> Aggregated, anonymized data may be retained for analytical purposes</li>
              </ul>
            </div>

            <div style={darkMode ? styles.divider : styles.dividerLight}></div>

            {/* Section 7 */}
            <div style={styles.section}>
              <div style={styles.sectionIcon}>👤</div>
              <h2 style={styles.sectionTitle} className="section-title">Your Rights</h2>
              <p style={styles.text} className="text">
                You have control over your personal information:
              </p>
              <ul style={styles.list} className="list">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                <li><strong>Export:</strong> Export your data in a portable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from communications at any time</li>
              </ul>
              <p style={{...styles.text, marginTop: "12px"}} className="text">
                To exercise any of these rights, please contact us at privacy@budgetai.gov
              </p>
            </div>

            <div style={darkMode ? styles.divider : styles.dividerLight}></div>

            {/* Section 8 */}
            <div style={styles.section}>
              <div style={styles.sectionIcon}>📧</div>
              <h2 style={styles.sectionTitle} className="section-title">Contact Us</h2>
              <p style={styles.text} className="text">
                If you have questions about this privacy policy or our data practices:
              </p>
              <div style={darkMode ? styles.contactInfo : styles.contactInfoLight} className="contact-info">
                <p><strong>Email:</strong> privacy@budgetai.gov</p>
                <p><strong>Phone:</strong> +234 800 123 4567</p>
                <p><strong>Address:</strong> Budget AI Platform, Local Government Capacity Building Initiative</p>
              </div>
            </div>

          </div>
        </div>

        {/* CTA SECTION */}
        <div style={styles.cta}>
          <div style={darkMode ? styles.ctaContent : styles.ctaContentLight} className="cta-content">
            <h2 style={styles.ctaTitle} className="cta-title">Questions about your data?</h2>
            <p style={styles.ctaText} className="cta-text">
              We're committed to transparency and protecting your privacy.
            </p>
            <a href="/contact" style={darkMode ? styles.ctaButton : styles.ctaButtonLight}>
              📧 Contact Us
            </a>
          </div>
        </div>

        {/* FOOTER */}
        <div style={styles.footer}>
          <div style={darkMode ? styles.footerContent : styles.footerContentLight}>
            <div style={styles.footerLogo} className="footer-logo">📊 Budget AI</div>
            <div style={styles.footerLinks} className="footer-links">
              <a href="/about" style={styles.footerLink}>About</a>
              <a href="/privacy" style={{...styles.footerLink, ...styles.activeFooterLink}}>Privacy</a>
              <a href="/terms" style={styles.footerLink}>Terms</a>
              <a href="/contact" style={styles.footerLink}>Contact</a>
            </div>
            <div style={styles.footerCopy}>
              © 2026 Oxfam Project. All rights reserved.
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

/* ================= STYLES ================= */

const styles = {
  // Theme containers
  pageDark: {
    minHeight: "100vh",
    background: "#0B1220",
    color: "#E8EDF5",
    fontFamily: "'Segoe UI', -apple-system, sans-serif",
    lineHeight: "1.6",
  },

  pageLight: {
    minHeight: "100vh",
    background: "#F0F4F8",
    color: "#1A2332",
    fontFamily: "'Segoe UI', -apple-system, sans-serif",
    lineHeight: "1.6",
  },

  // Navbar
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  navbarLight: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  logo: {
    fontSize: "24px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  logoIcon: {
    fontSize: "28px",
  },

  navLinks: {
    display: "flex",
    gap: "30px",
    alignItems: "center",
  },

  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  navItem: {
    textDecoration: "none",
    color: "inherit",
    opacity: "0.7",
    fontSize: "16px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    transition: "opacity 0.2s",
  },

  activeNavItem: {
    opacity: "1",
    fontWeight: "600",
  },

  navIcon: {
    fontSize: "18px",
  },

  // Hamburger
  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: "5px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px",
  },

  hamburgerLine: {
    width: "24px",
    height: "2px",
    background: "#E8EDF5",
    borderRadius: "2px",
    transition: "all 0.3s ease",
  },

  hamburgerLineLight: {
    background: "#1A2332",
  },

  hamburgerLineOpen1: {
    transform: "rotate(45deg) translate(5px, 5px)",
  },

  hamburgerLineOpen2: {
    opacity: 0,
  },

  hamburgerLineOpen3: {
    transform: "rotate(-45deg) translate(5px, -5px)",
  },

  mobileMenu: {
    display: "none",
    padding: "12px 40px 20px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },

  mobileMenuLight: {
    display: "none",
    padding: "12px 40px 20px",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
  },

  mobileLink: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 0",
    textDecoration: "none",
    color: "inherit",
    opacity: "0.7",
    fontSize: "16px",
    fontWeight: "500",
    transition: "opacity 0.2s",
  },

  mobileLinkActive: {
    opacity: "1",
    fontWeight: "600",
  },

  themeButton: {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.1)",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    background: "rgba(255,255,255,0.05)",
    color: "inherit",
    transition: "background 0.2s, border-color 0.2s",
  },

  themeButtonLight: {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "1px solid rgba(0,0,0,0.1)",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    background: "rgba(0,0,0,0.03)",
    color: "#1A2332",
    transition: "background 0.2s, border-color 0.2s",
  },

  // Header
  header: {
    textAlign: "center",
    padding: "60px 20px 40px",
    maxWidth: "900px",
    margin: "0 auto",
  },

  badge: {
    display: "inline-block",
    background: "rgba(76, 175, 80, 0.12)",
    color: "#4CAF50",
    padding: "6px 20px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "16px",
    border: "1px solid rgba(76, 175, 80, 0.15)",
  },

  badgeLight: {
    display: "inline-block",
    background: "rgba(76, 175, 80, 0.1)",
    color: "#3d8b40",
    padding: "6px 20px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "16px",
    border: "1px solid rgba(76, 175, 80, 0.2)",
  },

  title: {
    fontSize: "48px",
    fontWeight: "800",
    letterSpacing: "-0.02em",
    marginBottom: "12px",
    background: "linear-gradient(135deg, #4CAF50, #81C784)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    fontSize: "20px",
    opacity: "0.8",
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: "1.6",
  },

  lastUpdated: {
    fontSize: "14px",
    opacity: "0.5",
    marginTop: "12px",
  },

  // Content
  contentWrapper: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 20px 40px",
  },

  content: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "48px",
  },

  contentLight: {
    background: "rgba(255,255,255,0.6)",
    border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: "16px",
    padding: "48px",
  },

  section: {
    marginBottom: "8px",
  },

  sectionIcon: {
    fontSize: "32px",
    marginBottom: "8px",
  },

  sectionTitle: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "12px",
  },

  text: {
    fontSize: "16px",
    lineHeight: "1.8",
    opacity: "0.85",
  },

  list: {
    fontSize: "16px",
    lineHeight: "2.2",
    opacity: "0.85",
    paddingLeft: "20px",
    listStyle: "none",
  },

  divider: {
    borderTop: "1px solid rgba(255,255,255,0.06)",
    margin: "32px 0",
  },

  dividerLight: {
    borderTop: "1px solid rgba(0,0,0,0.06)",
    margin: "32px 0",
  },

  contactInfo: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "8px",
    padding: "16px 20px",
    marginTop: "12px",
  },

  contactInfoLight: {
    background: "rgba(255,255,255,0.6)",
    border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: "8px",
    padding: "16px 20px",
    marginTop: "12px",
  },

  // CTA
  cta: {
    maxWidth: "900px",
    margin: "0 auto 48px",
    padding: "0 20px",
  },

  ctaContent: {
    background: "linear-gradient(135deg, rgba(76, 175, 80, 0.12), rgba(76, 175, 80, 0.04))",
    border: "1px solid rgba(76, 175, 80, 0.15)",
    borderRadius: "16px",
    padding: "48px 40px",
    textAlign: "center",
  },

  ctaContentLight: {
    background: "linear-gradient(135deg, rgba(76, 175, 80, 0.08), rgba(76, 175, 80, 0.02))",
    border: "1px solid rgba(76, 175, 80, 0.2)",
    borderRadius: "16px",
    padding: "48px 40px",
    textAlign: "center",
  },

  ctaTitle: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "12px",
  },

  ctaText: {
    fontSize: "18px",
    opacity: "0.8",
    maxWidth: "600px",
    margin: "0 auto 24px",
  },

  ctaButton: {
    display: "inline-block",
    padding: "14px 40px",
    background: "#4CAF50",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "18px",
    boxShadow: "0 4px 16px rgba(76, 175, 80, 0.3)",
    border: "1px solid #4CAF50",
  },

  ctaButtonLight: {
    display: "inline-block",
    padding: "14px 40px",
    background: "#4CAF50",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "18px",
    boxShadow: "0 4px 16px rgba(76, 175, 80, 0.25)",
    border: "1px solid #4CAF50",
  },

  // Footer
  footer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },

  footerContent: {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    padding: "32px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "16px",
  },

  footerContentLight: {
    borderTop: "1px solid rgba(0,0,0,0.1)",
    padding: "32px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "16px",
  },

  footerLogo: {
    fontSize: "20px",
    fontWeight: "700",
  },

  footerLinks: {
    display: "flex",
    gap: "24px",
  },

  footerLink: {
    textDecoration: "none",
    color: "inherit",
    opacity: "0.7",
    fontSize: "14px",
  },

  activeFooterLink: {
    opacity: "1",
    fontWeight: "600",
  },

  footerCopy: {
    fontSize: "14px",
    opacity: "0.6",
  },
};