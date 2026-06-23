"use client";

import { useState } from "react";

export default function TermsPage() {
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
            
            .last-updated {
              font-size: 12px !important;
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
            ⚖️ Legal
          </div>
          <h1 style={styles.title} className="title">Terms of Service</h1>
          <p style={styles.subtitle} className="subtitle">
            Please read these terms carefully before using the Budget AI platform
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
              <h2 style={styles.sectionTitle} className="section-title">1. Acceptance of Terms</h2>
              <p style={styles.text} className="text">
                By accessing or using the Budget AI platform ("the Platform"), you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use the Platform. These terms apply to all users, including 
                Local Government Officers, Budget Analysts, and other government personnel.
              </p>
            </div>

            <div style={darkMode ? styles.divider : styles.dividerLight}></div>

            {/* Section 2 */}
            <div style={styles.section}>
              <div style={styles.sectionIcon}>👤</div>
              <h2 style={styles.sectionTitle} className="section-title">2. User Accounts</h2>
              <p style={styles.text} className="text">
                To access certain features of the Platform, you may be required to create an account. You are responsible for:
              </p>
              <ul style={styles.list} className="list">
                <li><strong>Account Security:</strong> Maintaining the confidentiality of your login credentials</li>
                <li><strong>Account Activity:</strong> All activities that occur under your account</li>
                <li><strong>Accurate Information:</strong> Providing accurate and complete information when creating your account</li>
                <li><strong>Account Updates:</strong> Promptly updating your account information when changes occur</li>
              </ul>
            </div>

            <div style={darkMode ? styles.divider : styles.dividerLight}></div>

            {/* Section 3 */}
            <div style={styles.section}>
              <div style={styles.sectionIcon}>🔒</div>
              <h2 style={styles.sectionTitle} className="section-title">3. Acceptable Use</h2>
              <p style={styles.text} className="text">
                You agree to use the Platform responsibly and in accordance with all applicable laws and regulations. You shall not:
              </p>
              <ul style={styles.list} className="list">
                <li><strong>Misuse:</strong> Use the Platform for any unlawful, fraudulent, or malicious purpose</li>
                <li><strong>Data Scraping:</strong> Scrape, copy, or extract data from the Platform without authorization</li>
                <li><strong>Interference:</strong> Interfere with or disrupt the Platform's functionality or security</li>
                <li><strong>Impersonation:</strong> Impersonate another person or entity when using the Platform</li>
                <li><strong>Harmful Content:</strong> Upload or share content that is harmful, offensive, or inappropriate</li>
              </ul>
            </div>

            <div style={darkMode ? styles.divider : styles.dividerLight}></div>

            {/* Section 4 */}
            <div style={styles.section}>
              <div style={styles.sectionIcon}>📊</div>
              <h2 style={styles.sectionTitle} className="section-title">4. Intellectual Property</h2>
              <p style={styles.text} className="text">
                All content, templates, and materials provided through the Platform are protected by intellectual property rights:
              </p>
              <ul style={styles.list} className="list">
                <li><strong>Platform Content:</strong> All content on the Platform is owned or licensed by Budget AI</li>
                <li><strong>Templates:</strong> Templates are provided for personal and professional use within your government role</li>
                <li><strong>Restrictions:</strong> You may not redistribute, sell, or claim ownership of Platform content</li>
                <li><strong>Feedback:</strong> Any feedback or suggestions become the property of Budget AI</li>
              </ul>
            </div>

            <div style={darkMode ? styles.divider : styles.dividerLight}></div>

            {/* Section 5 */}
            <div style={styles.section}>
              <div style={styles.sectionIcon}>📁</div>
              <h2 style={styles.sectionTitle} className="section-title">5. User Content</h2>
              <p style={styles.text} className="text">
                When you submit content to the Platform, you grant us certain rights:
              </p>
              <ul style={styles.list} className="list">
                <li><strong>License:</strong> You grant Budget AI a license to process your content to provide services</li>
                <li><strong>Retention:</strong> We may retain your content as described in our Privacy Policy</li>
                <li><strong>Responsibility:</strong> You are solely responsible for the content you submit</li>
                <li><strong>Confidentiality:</strong> We take reasonable steps to protect your confidential information</li>
              </ul>
            </div>

            <div style={darkMode ? styles.divider : styles.dividerLight}></div>

            {/* Section 6 */}
            <div style={styles.section}>
              <div style={styles.sectionIcon}>🤖</div>
              <h2 style={styles.sectionTitle} className="section-title">6. AI Services Disclaimer</h2>
              <p style={styles.text} className="text">
                The Platform uses artificial intelligence to provide Excel and budgeting assistance:
              </p>
              <ul style={styles.list} className="list">
                <li><strong>Accuracy:</strong> While we strive for accuracy, AI-generated responses should be verified by users</li>
                <li><strong>No Guarantee:</strong> We do not guarantee that all responses will be accurate or suitable for your specific needs</li>
                <li><strong>Professional Judgment:</strong> AI assistance does not replace professional financial or legal judgment</li>
                <li><strong>Improvement:</strong> AI models are continuously being improved based on user interactions</li>
              </ul>
            </div>

            <div style={darkMode ? styles.divider : styles.dividerLight}></div>

            {/* Section 7 */}
            <div style={styles.section}>
              <div style={styles.sectionIcon}>🔗</div>
              <h2 style={styles.sectionTitle} className="section-title">7. Third-Party Links</h2>
              <p style={styles.text} className="text">
                The Platform may contain links to third-party websites or services:
              </p>
              <ul style={styles.list} className="list">
                <li><strong>Independence:</strong> We do not control and are not responsible for third-party content</li>
                <li><strong>Risk:</strong> Accessing third-party links is at your own risk</li>
                <li><strong>Endorsement:</strong> Links do not constitute endorsement of third-party services</li>
                <li><strong>Terms:</strong> Third-party services have their own terms and policies</li>
              </ul>
            </div>

            <div style={darkMode ? styles.divider : styles.dividerLight}></div>

            {/* Section 8 */}
            <div style={styles.section}>
              <div style={styles.sectionIcon}>⚖️</div>
              <h2 style={styles.sectionTitle} className="section-title">8. Disclaimer of Warranties</h2>
              <p style={styles.text} className="text">
                The Platform is provided "as is" and "as available" without warranties of any kind:
              </p>
              <ul style={styles.list} className="list">
                <li><strong>No Warranty:</strong> We do not warrant that the Platform will be error-free, secure, or uninterrupted</li>
                <li><strong>Fitness:</strong> We do not warrant that the Platform will meet your specific requirements</li>
                <li><strong>Availability:</strong> We do not guarantee continuous or uninterrupted access to the Platform</li>
                <li><strong>Limitations:</strong> Some jurisdictions do not allow the exclusion of certain warranties</li>
              </ul>
            </div>

            <div style={darkMode ? styles.divider : styles.dividerLight}></div>

            {/* Section 9 */}
            <div style={styles.section}>
              <div style={styles.sectionIcon}>🛡️</div>
              <h2 style={styles.sectionTitle} className="section-title">9. Limitation of Liability</h2>
              <p style={styles.text} className="text">
                To the extent permitted by law, Budget AI shall not be liable for:
              </p>
              <ul style={styles.list} className="list">
                <li><strong>Direct Damages:</strong> Any direct damages arising from your use of the Platform</li>
                <li><strong>Indirect Damages:</strong> Indirect, incidental, or consequential damages</li>
                <li><strong>Data Loss:</strong> Loss of data or information resulting from Platform use</li>
                <li><strong>Decisions:</strong> Decisions made based on information provided by the Platform</li>
              </ul>
            </div>

            <div style={darkMode ? styles.divider : styles.dividerLight}></div>

            {/* Section 10 */}
            <div style={styles.section}>
              <div style={styles.sectionIcon}>📝</div>
              <h2 style={styles.sectionTitle} className="section-title">10. Modifications to Terms</h2>
              <p style={styles.text} className="text">
                We reserve the right to modify these Terms at any time:
              </p>
              <ul style={styles.list} className="list">
                <li><strong>Notification:</strong> We will notify users of significant changes to these Terms</li>
                <li><strong>Effective Date:</strong> Changes become effective 30 days after notification</li>
                <li><strong>Continued Use:</strong> Continued use of the Platform constitutes acceptance of modified terms</li>
                <li><strong>Review:</strong> Please review these Terms periodically for updates</li>
              </ul>
            </div>

            <div style={darkMode ? styles.divider : styles.dividerLight}></div>

            {/* Section 11 */}
            <div style={styles.section}>
              <div style={styles.sectionIcon}>⚖️</div>
              <h2 style={styles.sectionTitle} className="section-title">11. Governing Law</h2>
              <p style={styles.text} className="text">
                These Terms shall be governed by and construed in accordance with the laws of Nigeria. 
                Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of 
                the courts of Nigeria.
              </p>
            </div>

            <div style={darkMode ? styles.divider : styles.dividerLight}></div>

            {/* Section 12 */}
            <div style={styles.section}>
              <div style={styles.sectionIcon}>📧</div>
              <h2 style={styles.sectionTitle} className="section-title">12. Contact Information</h2>
              <p style={styles.text} className="text">
                If you have questions about these Terms or the Platform:
              </p>
              <div style={darkMode ? styles.contactInfo : styles.contactInfoLight} className="contact-info">
                <p><strong>Email:</strong> support@budgetai.gov</p>
                <p><strong>Phone:</strong> +234 800 123 4567</p>
                <p><strong>Address:</strong> Budget AI Platform, Local Government Capacity Building Initiative</p>
              </div>
            </div>

          </div>
        </div>

        {/* CTA SECTION */}
        <div style={styles.cta}>
          <div style={darkMode ? styles.ctaContent : styles.ctaContentLight} className="cta-content">
            <h2 style={styles.ctaTitle} className="cta-title">Questions about our terms?</h2>
            <p style={styles.ctaText} className="cta-text">
              We're here to help clarify any questions about our Terms of Service.
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
              <a href="/privacy" style={styles.footerLink}>Privacy</a>
              <a href="/terms" style={{...styles.footerLink, ...styles.activeFooterLink}}>Terms</a>
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