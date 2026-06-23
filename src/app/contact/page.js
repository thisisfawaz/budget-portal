"use client";

import { useState } from "react";

export default function ContactPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', department: '', message: '' });
    }, 3000);
  };

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
            
            .grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
            
            .info-card {
              padding: 20px !important;
            }
            
            .form-card {
              padding: 20px !important;
            }
            
            .info-title {
              font-size: 18px !important;
            }
            
            .form-title {
              font-size: 18px !important;
            }
            
            .info-item {
              margin-bottom: 16px !important;
            }
            
            .info-icon {
              font-size: 20px !important;
            }
            
            .info-sub {
              font-size: 12px !important;
            }
            
            .input, .inputLight, .textarea, .textareaLight {
              font-size: 14px !important;
              padding: 10px 14px !important;
            }
            
            .submit-button {
              padding: 12px 24px !important;
              font-size: 15px !important;
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
            📧 Get in Touch
          </div>
          <h1 style={styles.title} className="title">Contact Us</h1>
          <p style={styles.subtitle} className="subtitle">
            Have questions or need support? We're here to help.
          </p>
        </div>

        {/* CONTENT */}
        <div style={styles.contentWrapper}>
          <div style={styles.grid} className="grid">
            {/* Contact Information */}
            <div style={darkMode ? styles.infoCard : styles.infoCardLight} className="info-card">
              <h3 style={styles.infoTitle} className="info-title">📋 Contact Information</h3>
              
              <div style={styles.infoItem} className="info-item">
                <div style={styles.infoIcon} className="info-icon">📧</div>
                <div>
                  <strong>Email</strong>
                  <p>support@budgetai.gov</p>
                  <p style={styles.infoSub} className="info-sub">For general inquiries and support</p>
                </div>
              </div>

              <div style={styles.infoItem} className="info-item">
                <div style={styles.infoIcon} className="info-icon">📞</div>
                <div>
                  <strong>Phone</strong>
                  <p>+234 800 123 4567</p>
                  <p style={styles.infoSub} className="info-sub">Monday - Friday, 8am - 5pm WAT</p>
                </div>
              </div>

              <div style={styles.infoItem} className="info-item">
                <div style={styles.infoIcon} className="info-icon">📍</div>
                <div>
                  <strong>Address</strong>
                  <p>Budget AI Platform</p>
                  <p style={styles.infoSub} className="info-sub">Local Government Capacity Building Initiative</p>
                </div>
              </div>

              <div style={styles.infoItem} className="info-item">
                <div style={styles.infoIcon} className="info-icon">🕐</div>
                <div>
                  <strong>Response Time</strong>
                  <p>We aim to respond within 24-48 hours</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={darkMode ? styles.formCard : styles.formCardLight} className="form-card">
              <h3 style={styles.formTitle} className="form-title">📝 Send Us a Message</h3>
              
              {isSubmitted ? (
                <div style={darkMode ? styles.successMessage : styles.successMessageLight}>
                  <div style={styles.successIcon}>✅</div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={styles.form}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={darkMode ? styles.input : styles.inputLight}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={darkMode ? styles.input : styles.inputLight}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Department</label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      style={darkMode ? styles.input : styles.inputLight}
                      placeholder="e.g., Budget Office, Planning, Finance"
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      style={darkMode ? styles.textarea : styles.textareaLight}
                      placeholder="How can we help you?"
                      rows="5"
                      required
                    />
                  </div>

                  <button type="submit" style={styles.submitButton} className="submit-button">
                    📤 Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div style={styles.cta}>
          <div style={darkMode ? styles.ctaContent : styles.ctaContentLight} className="cta-content">
            <h2 style={styles.ctaTitle} className="cta-title">Prefer to talk to someone directly?</h2>
            <p style={styles.ctaText} className="cta-text">
              Our team is ready to assist you with any questions about the platform.
            </p>
            <a href="tel:+2348001234567" style={darkMode ? styles.ctaButton : styles.ctaButtonLight}>
              📞 Call Us Now
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
              <a href="/contact" style={{...styles.footerLink, ...styles.activeFooterLink}}>Contact</a>
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

  // Content
  contentWrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px 40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1.5fr",
    gap: "32px",
    alignItems: "start",
  },

  // Contact Info Card
  infoCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "32px",
  },

  infoCardLight: {
    background: "rgba(255,255,255,0.6)",
    border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: "16px",
    padding: "32px",
  },

  infoTitle: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "24px",
  },

  infoItem: {
    display: "flex",
    gap: "16px",
    marginBottom: "24px",
  },

  infoIcon: {
    fontSize: "24px",
    flexShrink: 0,
  },

  infoSub: {
    fontSize: "14px",
    opacity: "0.6",
    marginTop: "2px",
  },

  // Form Card
  formCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "32px",
  },

  formCardLight: {
    background: "rgba(255,255,255,0.6)",
    border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: "16px",
    padding: "32px",
  },

  formTitle: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "24px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  label: {
    fontSize: "14px",
    fontWeight: "600",
    opacity: "0.8",
  },

  input: {
    padding: "12px 16px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    color: "#E8EDF5",
    fontSize: "15px",
    transition: "border-color 0.2s",
    outline: "none",
  },

  inputLight: {
    padding: "12px 16px",
    background: "rgba(255,255,255,0.6)",
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: "8px",
    color: "#1A2332",
    fontSize: "15px",
    transition: "border-color 0.2s",
    outline: "none",
  },

  textarea: {
    padding: "12px 16px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    color: "#E8EDF5",
    fontSize: "15px",
    fontFamily: "'Segoe UI', -apple-system, sans-serif",
    resize: "vertical",
    transition: "border-color 0.2s",
    outline: "none",
  },

  textareaLight: {
    padding: "12px 16px",
    background: "rgba(255,255,255,0.6)",
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: "8px",
    color: "#1A2332",
    fontSize: "15px",
    fontFamily: "'Segoe UI', -apple-system, sans-serif",
    resize: "vertical",
    transition: "border-color 0.2s",
    outline: "none",
  },

  submitButton: {
    padding: "14px 32px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background 0.2s, transform 0.2s",
    marginTop: "8px",
  },

  // Success Message
  successMessage: {
    textAlign: "center",
    padding: "40px 20px",
  },

  successMessageLight: {
    textAlign: "center",
    padding: "40px 20px",
  },

  successIcon: {
    fontSize: "48px",
    marginBottom: "16px",
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