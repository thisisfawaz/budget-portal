"use client";

import { useState } from "react";

export default function HomePage() {
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
            .nav-links {
              display: none !important;
            }
            
            .hamburger-btn {
              display: flex !important;
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
            
            .hero-title {
              font-size: 28px !important;
            }
            
            .hero-subtitle {
              font-size: 16px !important;
            }
            
            .stat-number {
              font-size: 22px !important;
            }
            
            .stat-label {
              font-size: 12px !important;
            }
            
            .stats-container {
              gap: 16px !important;
            }
            
            .section-title {
              font-size: 24px !important;
            }
            
            .section-subtitle {
              font-size: 16px !important;
            }
            
            .cta-title {
              font-size: 24px !important;
            }
            
            .cta-text {
              font-size: 16px !important;
            }
            
            .cta-content {
              padding: 32px 20px !important;
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
            
            .features-grid {
              grid-template-columns: 1fr !important;
            }
            
            .simplify-grid {
              grid-template-columns: 1fr !important;
            }
            
            .hero-buttons {
              flex-direction: column !important;
              align-items: center !important;
            }
            
            .primary-button, .secondary-button {
              width: 100% !important;
              justify-content: center !important;
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
            <a href="/" style={{...styles.navItem, ...styles.activeNavItem}}>
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
          <a href="/" style={{...styles.mobileLink, ...styles.mobileLinkActive}} onClick={() => setIsMenuOpen(false)}>
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

        {/* HERO SECTION */}
        <div style={styles.hero}>
          <div style={darkMode ? styles.badge : styles.badgeLight}>
            ✨ Smart Assistant for Excel
          </div>
          
          <h1 style={styles.title} className="hero-title">
            Excel & Budget Assistant <br />
            <span style={styles.highlight}>for Local Government</span>
          </h1>

          <p style={styles.subtitle} className="hero-subtitle">
            Ask questions, solve Excel problems, and understand budgeting
            instantly — with clear step-by-step explanations tailored for 
            government professionals.
          </p>

          <div style={styles.heroButtons} className="hero-buttons">
            <a href="/ai" style={darkMode ? styles.primaryButton : styles.primaryButtonLight} className="primary-button">
              📊 Ask an Excel Question
            </a>
            <a href="/templates" style={darkMode ? styles.secondaryButton : styles.secondaryButtonLight} className="secondary-button">
              📥 Browse Templates
            </a>
          </div>

          <div style={darkMode ? styles.stats : styles.statsLight} className="stats-container">
            <div style={styles.statItem}>
              <span style={styles.statNumber} className="stat-number">2,400+</span>
              <span style={styles.statLabel} className="stat-label">Questions Answered</span>
            </div>
            <div style={darkMode ? styles.statDivider : styles.statDividerLight}>|</div>
            <div style={styles.statItem}>
              <span style={styles.statNumber} className="stat-number">98%</span>
              <span style={styles.statLabel} className="stat-label">Satisfaction Rate</span>
            </div>
            <div style={darkMode ? styles.statDivider : styles.statDividerLight}>|</div>
            <div style={styles.statItem}>
              <span style={styles.statNumber} className="stat-number">500+</span>
              <span style={styles.statLabel} className="stat-label">Templates Available</span>
            </div>
          </div>
        </div>

        {/* FEATURES GRID */}
        <div style={styles.features} className="features-grid">
          <div style={darkMode ? styles.card : styles.cardLight}>
            <div style={styles.cardIcon}>📊</div>
            <h3 style={styles.cardTitle}>Excel Answers</h3>
            <p style={styles.cardText}>
              Get step-by-step help with formulas, pivot tables, and complex 
              spreadsheet analysis for government reporting.
            </p>
            <a href="/ai" style={styles.cardLink}>Learn More →</a>
          </div>

          <div style={darkMode ? styles.card : styles.cardLight}>
            <div style={styles.cardIcon}>💰</div>
            <h3 style={styles.cardTitle}>Budget Support</h3>
            <p style={styles.cardText}>
              Understand government budgeting, fund accounting, and financial 
              reporting with clear, practical explanations.
            </p>
            <a href="/templates" style={styles.cardLink}>Explore →</a>
          </div>

          <div style={darkMode ? styles.card : styles.cardLight}>
            <div style={styles.cardIcon}>🧠</div>
            <h3 style={styles.cardTitle}>Learn by Practice</h3>
            <p style={styles.cardText}>
              Improve your skills with guided real-world examples and 
              interactive exercises designed for government finance.
            </p>
            <a href="/practice" style={styles.cardLink}>Start Practice →</a>
          </div>

          <div style={darkMode ? styles.card : styles.cardLight}>
            <div style={styles.cardIcon}>📈</div>
            <h3 style={styles.cardTitle}>Data Visualization</h3>
            <p style={styles.cardText}>
              Create professional charts and dashboards from your budget data 
              with automated visualization tools.
            </p>
            <a href="/visualize" style={styles.cardLink}>Try it →</a>
          </div>
        </div>

        {/* SIMPLIFY YOUR EXCEL WORK SECTION */}
        <div style={styles.simplifySection}>
          <h2 style={styles.sectionTitle} className="section-title">Simplify Your Excel Workflow</h2>
          <p style={styles.sectionSubtitle} className="section-subtitle">
            Stop wrestling with spreadsheets. Get the clarity you need to make 
            better decisions faster.
          </p>
          <div style={styles.simplifyGrid} className="simplify-grid">
            <div style={darkMode ? styles.simplifyCard : styles.simplifyCardLight}>
              <div style={styles.simplifyIcon}>⚡</div>
              <h4 style={styles.simplifyTitle}>Automate Repetitive Tasks</h4>
              <p style={styles.simplifyText}>
                Eliminate manual data entry and formula errors with 
                intelligent automation that learns your patterns.
              </p>
            </div>
            <div style={darkMode ? styles.simplifyCard : styles.simplifyCardLight}>
              <div style={styles.simplifyIcon}>🔍</div>
              <h4 style={styles.simplifyTitle}>Find Errors Instantly</h4>
              <p style={styles.simplifyText}>
                Catch spreadsheet mistakes before they become problems 
                with real-time validation and error detection.
              </p>
            </div>
            <div style={darkMode ? styles.simplifyCard : styles.simplifyCardLight}>
              <div style={styles.simplifyIcon}>📋</div>
              <h4 style={styles.simplifyTitle}>Ready-to-Use Templates</h4>
              <p style={styles.simplifyText}>
                Access hundreds of pre-built templates for budgets, 
                reports, and financial analysis.
              </p>
            </div>
            <div style={darkMode ? styles.simplifyCard : styles.simplifyCardLight}>
              <div style={styles.simplifyIcon}>📚</div>
              <h4 style={styles.simplifyTitle}>Learn While You Work</h4>
              <p style={styles.simplifyText}>
                Build your Excel skills naturally with contextual tips 
                and explanations as you solve real problems.
              </p>
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div style={styles.cta}>
          <div style={darkMode ? styles.ctaContent : styles.ctaContentLight} className="cta-content">
            <h2 style={styles.ctaTitle} className="cta-title">Ready to simplify your workflow?</h2>
            <p style={styles.ctaText} className="cta-text">
              Join thousands of government professionals who use Budget AI 
              to save time and make better decisions.
            </p>
            <a href="/ai" style={darkMode ? styles.ctaButton : styles.ctaButtonLight}>
              Get Started →
            </a>
          </div>
        </div>

        {/* FOOTER */}
        <div style={styles.footer}>
          <div style={darkMode ? styles.footerContent : styles.footerContentLight}>
            <div style={styles.footerLogo} className="footer-logo">📊 Budget AI</div>
            <div style={styles.footerLinks} className="footer-links">
              <a href="/about" style={styles.footerLink}>About</a>
              <a href="/privacy" style={styles.footerLink}>Privacy</a>
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

  // Hamburger Menu
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

  // Hero
  hero: {
    textAlign: "center",
    maxWidth: "1000px",
    margin: "40px auto 20px",
    padding: "0 20px",
  },

  badge: {
    display: "inline-block",
    background: "rgba(76, 175, 80, 0.12)",
    color: "#4CAF50",
    padding: "6px 20px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "24px",
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
    marginBottom: "24px",
    border: "1px solid rgba(76, 175, 80, 0.2)",
  },

  title: {
    fontSize: "52px",
    fontWeight: "800",
    lineHeight: "1.15",
    marginBottom: "16px",
    letterSpacing: "-0.02em",
  },

  highlight: {
    background: "linear-gradient(135deg, #4CAF50, #81C784)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    fontSize: "20px",
    opacity: "0.85",
    maxWidth: "700px",
    margin: "0 auto 32px",
    lineHeight: "1.6",
  },

  heroButtons: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "48px",
  },

  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 32px",
    background: "#4CAF50",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "16px",
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: "0 4px 12px rgba(76, 175, 80, 0.3)",
    border: "1px solid #4CAF50",
  },

  primaryButtonLight: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 32px",
    background: "#4CAF50",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "16px",
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: "0 4px 12px rgba(76, 175, 80, 0.25)",
    border: "1px solid #4CAF50",
  },

  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 32px",
    background: "rgba(255,255,255,0.05)",
    color: "inherit",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "16px",
    border: "1px solid rgba(255,255,255,0.15)",
    transition: "background 0.2s",
  },

  secondaryButtonLight: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 32px",
    background: "rgba(0,0,0,0.03)",
    color: "#1A2332",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "16px",
    border: "1px solid rgba(0,0,0,0.12)",
    transition: "background 0.2s",
  },

  stats: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    padding: "32px 0",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    flexWrap: "wrap",
  },

  statsLight: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    padding: "32px 0",
    borderTop: "1px solid rgba(0,0,0,0.1)",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    flexWrap: "wrap",
  },

  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  statNumber: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#4CAF50",
  },

  statLabel: {
    fontSize: "14px",
    opacity: "0.7",
    marginTop: "4px",
  },

  statDivider: {
    opacity: "0.2",
    fontSize: "20px",
  },

  statDividerLight: {
    opacity: "0.15",
    fontSize: "20px",
    color: "#1A2332",
  },

  // Features
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    maxWidth: "1100px",
    margin: "48px auto",
    padding: "0 20px",
  },

  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "28px 24px",
    borderRadius: "16px",
    transition: "transform 0.2s, box-shadow 0.2s",
  },

  cardLight: {
    background: "rgba(255,255,255,0.6)",
    border: "1px solid rgba(0,0,0,0.08)",
    padding: "28px 24px",
    borderRadius: "16px",
    transition: "transform 0.2s, box-shadow 0.2s",
  },

  cardIcon: {
    fontSize: "36px",
    marginBottom: "12px",
  },

  cardTitle: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "8px",
  },

  cardText: {
    opacity: "0.8",
    fontSize: "15px",
    lineHeight: "1.6",
    marginBottom: "16px",
  },

  cardLink: {
    color: "#4CAF50",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "15px",
  },

  // Simplify Section
  simplifySection: {
    maxWidth: "1100px",
    margin: "48px auto",
    padding: "0 20px",
  },

  sectionTitle: {
    fontSize: "32px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "12px",
  },

  sectionSubtitle: {
    fontSize: "18px",
    textAlign: "center",
    opacity: "0.75",
    maxWidth: "600px",
    margin: "0 auto 40px",
  },

  simplifyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
  },

  simplifyCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "28px 24px",
    borderRadius: "12px",
    textAlign: "center",
    transition: "transform 0.2s",
  },

  simplifyCardLight: {
    background: "rgba(255,255,255,0.6)",
    border: "1px solid rgba(0,0,0,0.08)",
    padding: "28px 24px",
    borderRadius: "12px",
    textAlign: "center",
    transition: "transform 0.2s",
  },

  simplifyIcon: {
    fontSize: "32px",
    marginBottom: "12px",
  },

  simplifyTitle: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "8px",
  },

  simplifyText: {
    fontSize: "15px",
    opacity: "0.8",
    lineHeight: "1.6",
  },

  // CTA
  cta: {
    maxWidth: "1100px",
    margin: "48px auto 32px",
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
    fontSize: "32px",
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

  footerCopy: {
    fontSize: "14px",
    opacity: "0.6",
  },
};