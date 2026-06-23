"use client";

import { useState } from "react";

export default function VisualizationPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const data = [
    { department: "Health", budget: 25000000, color: "#4CAF50" },
    { department: "Education", budget: 32000000, color: "#2196F3" },
    { department: "Works", budget: 28000000, color: "#FF9800" },
    { department: "Admin", budget: 15000000, color: "#9C27B0" },
    { department: "Agriculture", budget: 18000000, color: "#F44336" },
  ];

  const max = Math.max(...data.map(d => d.budget));

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
            .sidebar {
              position: fixed !important;
              top: 0 !important;
              left: 0 !important;
              height: 100vh !important;
              width: 280px !important;
              transform: translateX(-100%) !important;
              transition: transform 0.3s ease !important;
              z-index: 1000 !important;
            }
            
            .sidebar.open {
              transform: translateX(0) !important;
            }
            
            .hamburger-btn {
              display: flex !important;
            }
            
            .sidebar-overlay {
              display: none !important;
              position: fixed !important;
              top: 0 !important;
              left: 0 !important;
              right: 0 !important;
              bottom: 0 !important;
              background: rgba(0,0,0,0.5) !important;
              z-index: 999 !important;
            }
            
            .sidebar-overlay.open {
              display: block !important;
            }
            
            .theme-text {
              display: none !important;
            }
            
            .theme-icon {
              display: inline !important;
            }
            
            .main-area {
              padding: 16px !important;
            }
            
            .header {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 16px !important;
            }
            
            .title {
              font-size: 22px !important;
            }
            
            .subtitle {
              font-size: 13px !important;
            }
            
            .header-stats {
              width: 100% !important;
              justify-content: space-around !important;
              padding: 10px 16px !important;
              gap: 8px !important;
            }
            
            .stat-value {
              font-size: 15px !important;
            }
            
            .card {
              padding: 16px !important;
            }
            
            .card-title {
              font-size: 16px !important;
            }
            
            .card-badge {
              font-size: 10px !important;
              padding: 2px 10px !important;
            }
            
            .label {
              font-size: 13px !important;
            }
            
            .value {
              font-size: 13px !important;
            }
            
            .percentage {
              font-size: 11px !important;
            }
            
            .chart-footer {
              flex-wrap: wrap !important;
              gap: 12px !important;
            }
            
            .footer-label {
              font-size: 10px !important;
            }
            
            .footer-value {
              font-size: 14px !important;
            }
            
            .insights-grid {
              grid-template-columns: 1fr !important;
            }
            
            .insight-card {
              padding: 12px 16px !important;
            }
            
            .insight-card-title {
              font-size: 13px !important;
            }
            
            .insight-card-text {
              font-size: 12px !important;
            }
          }
        `}
      </style>

      <div style={darkMode ? styles.pageDark : styles.pageLight}>
        
        {/* Mobile Overlay */}
        <div 
          className={`sidebar-overlay ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* SIDEBAR */}
        <div 
          style={darkMode ? styles.sidebar : styles.sidebarLight} 
          className={`sidebar ${isMenuOpen ? 'open' : ''}`}
        >
          <div style={styles.sidebarLogo}>
            <span style={styles.logoIcon}>📊</span>
            <span style={styles.logoText}>Budget AI</span>
          </div>

          <div style={styles.sidebarNav}>
            <a href="/" style={styles.sidebarLink} onClick={() => setIsMenuOpen(false)}>
              <span style={styles.sidebarIcon}>🏠</span>
              <span>Home</span>
            </a>
            <a href="/ai" style={styles.sidebarLink} onClick={() => setIsMenuOpen(false)}>
              <span style={styles.sidebarIcon}>🤖</span>
              <span>Chat</span>
            </a>
            <a href="/templates" style={styles.sidebarLink} onClick={() => setIsMenuOpen(false)}>
              <span style={styles.sidebarIcon}>📋</span>
              <span>Templates</span>
            </a>
            <a href="/practice" style={styles.sidebarLink} onClick={() => setIsMenuOpen(false)}>
              <span style={styles.sidebarIcon}>🎯</span>
              <span>Practice</span>
            </a>
            <a href="/visualize" style={{...styles.sidebarLink, ...styles.sidebarLinkActive}} onClick={() => setIsMenuOpen(false)}>
              <span style={styles.sidebarIcon}>📈</span>
              <span>Visualize</span>
            </a>
            <a href="/about" style={styles.sidebarLink} onClick={() => setIsMenuOpen(false)}>
              <span style={styles.sidebarIcon}>📖</span>
              <span>About</span>
            </a>
          </div>

          <div style={styles.sidebarFooter}>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={darkMode ? styles.sidebarThemeButton : styles.sidebarThemeButtonLight}
            >
              <span className="theme-text">{darkMode ? "☀️ Light" : "🌙 Dark"}</span>
              <span className="theme-icon" style={{display: "none"}}>{darkMode ? "☀️" : "🌙"}</span>
            </button>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div style={styles.mainArea} className="main-area">
          
          {/* HEADER */}
          <div style={darkMode ? styles.header : styles.headerLight} className="header">
            <div>
              <h1 style={styles.title} className="title">📊 Data Visualization</h1>
              <p style={styles.subtitle} className="subtitle">
                Budget breakdown dashboard with visual insights
              </p>
            </div>
            <div style={styles.headerStats} className="header-stats">
              <div style={styles.statItem}>
                <span style={styles.statLabel}>Total Budget</span>
                <span style={styles.statValue} className="stat-value">₦118,000,000</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statLabel}>Departments</span>
                <span style={styles.statValue} className="stat-value">{data.length}</span>
              </div>
            </div>
          </div>

          {/* Hamburger Menu Button - Only visible on mobile */}
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

          {/* CHART CARD */}
          <div style={darkMode ? styles.card : styles.cardLight} className="card">
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle} className="card-title">Department Budget Allocation</h2>
              <span style={styles.cardBadge} className="card-badge">2026 Fiscal Year</span>
            </div>

            {/* CHART BARS */}
            <div style={styles.chart}>
              {data.map((item, i) => (
                <div key={i} style={styles.row}>
                  <div style={styles.labelRow}>
                    <div style={styles.label} className="label">
                      <span style={{...styles.colorDot, background: item.color}}></span>
                      {item.department}
                    </div>
                    <div style={styles.value} className="value">
                      ₦{item.budget.toLocaleString()}
                    </div>
                  </div>

                  <div style={darkMode ? styles.barWrapper : styles.barWrapperLight}>
                    <div
                      style={{
                        ...styles.bar,
                        width: `${(item.budget / max) * 100}%`,
                        background: item.color,
                      }}
                    />
                  </div>

                  <div style={styles.percentage} className="percentage">
                    {Math.round((item.budget / max) * 100)}%
                  </div>
                </div>
              ))}
            </div>

            {/* STATS FOOTER */}
            <div style={darkMode ? styles.chartFooter : styles.chartFooterLight} className="chart-footer">
              <div>
                <span style={styles.footerLabel} className="footer-label">Highest Budget</span>
                <span style={styles.footerValue} className="footer-value">
                  {data.reduce((a, b) => a.budget > b.budget ? a : b).department}
                </span>
              </div>
              <div>
                <span style={styles.footerLabel} className="footer-label">Lowest Budget</span>
                <span style={styles.footerValue} className="footer-value">
                  {data.reduce((a, b) => a.budget < b.budget ? a : b).department}
                </span>
              </div>
              <div>
                <span style={styles.footerLabel} className="footer-label">Average Budget</span>
                <span style={styles.footerValue} className="footer-value">
                  ₦{Math.round(data.reduce((sum, d) => sum + d.budget, 0) / data.length).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* INSIGHTS SECTION */}
          <div style={darkMode ? styles.insights : styles.insightsLight} className="insights">
            <h3 style={styles.insightsTitle} className="insights-title">💡 Key Insights</h3>
            <div style={styles.insightsGrid} className="insights-grid">
              <div style={darkMode ? styles.insightCard : styles.insightCardLight} className="insight-card">
                <div style={styles.insightIcon}>🏆</div>
                <div>
                  <h4 style={styles.insightCardTitle} className="insight-card-title">Largest Allocation</h4>
                  <p style={styles.insightCardText} className="insight-card-text">
                    Education receives the highest budget at ₦32,000,000
                  </p>
                </div>
              </div>
              <div style={darkMode ? styles.insightCard : styles.insightCardLight} className="insight-card">
                <div style={styles.insightIcon}>📊</div>
                <div>
                  <h4 style={styles.insightCardTitle} className="insight-card-title">Budget Distribution</h4>
                  <p style={styles.insightCardText} className="insight-card-text">
                    Health and Works together account for 45% of total budget
                  </p>
                </div>
              </div>
              <div style={darkMode ? styles.insightCard : styles.insightCardLight} className="insight-card">
                <div style={styles.insightIcon}>📈</div>
                <div>
                  <h4 style={styles.insightCardTitle} className="insight-card-title">Growth Opportunity</h4>
                  <p style={styles.insightCardText} className="insight-card-text">
                    Agriculture shows potential for increased allocation
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

/* ================= STYLES ================= */

const styles = {
  // Page
  pageDark: {
    display: "flex",
    height: "100vh",
    background: "#0B1220",
    color: "#E8EDF5",
    fontFamily: "'Segoe UI', -apple-system, sans-serif",
    lineHeight: "1.6",
    overflow: "hidden",
  },

  pageLight: {
    display: "flex",
    height: "100vh",
    background: "#F0F4F8",
    color: "#1A2332",
    fontFamily: "'Segoe UI', -apple-system, sans-serif",
    lineHeight: "1.6",
    overflow: "hidden",
  },

  // Sidebar
  sidebar: {
    width: "240px",
    background: "#0F1A2E",
    borderRight: "1px solid rgba(255,255,255,0.06)",
    padding: "24px 16px",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
  },

  sidebarLight: {
    width: "240px",
    background: "#FFFFFF",
    borderRight: "1px solid rgba(0,0,0,0.08)",
    padding: "24px 16px",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
  },

  sidebarLogo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "20px",
    fontWeight: "700",
    padding: "0 8px 24px 8px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    marginBottom: "24px",
  },

  logoIcon: {
    fontSize: "28px",
  },

  logoText: {
    background: "linear-gradient(135deg, #4CAF50, #81C784)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  sidebarNav: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  sidebarLink: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 16px",
    borderRadius: "10px",
    textDecoration: "none",
    color: "inherit",
    opacity: "0.7",
    transition: "all 0.2s",
    fontSize: "15px",
    fontWeight: "500",
  },

  sidebarLinkActive: {
    opacity: "1",
    background: "rgba(76, 175, 80, 0.12)",
    border: "1px solid rgba(76, 175, 80, 0.15)",
    fontWeight: "600",
  },

  sidebarIcon: {
    fontSize: "20px",
  },

  sidebarFooter: {
    borderTop: "1px solid rgba(255,255,255,0.06)",
    paddingTop: "16px",
  },

  sidebarThemeButton: {
    width: "100%",
    padding: "10px 16px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.08)",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    background: "rgba(255,255,255,0.05)",
    color: "#E8EDF5",
    transition: "background 0.2s",
  },

  sidebarThemeButtonLight: {
    width: "100%",
    padding: "10px 16px",
    borderRadius: "8px",
    border: "1px solid rgba(0,0,0,0.08)",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    background: "rgba(0,0,0,0.03)",
    color: "#1A2332",
    transition: "background 0.2s",
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
    marginBottom: "12px",
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

  // Main Area
  mainArea: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "24px 32px",
    overflowY: "auto",
    minWidth: 0,
  },

  // Header
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
    flexShrink: 0,
  },

  headerLight: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
    flexShrink: 0,
  },

  title: {
    fontSize: "28px",
    fontWeight: "800",
    margin: 0,
    background: "linear-gradient(135deg, #4CAF50, #81C784)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    fontSize: "15px",
    opacity: "0.7",
    margin: "4px 0 0",
  },

  headerStats: {
    display: "flex",
    gap: "24px",
    background: "rgba(255,255,255,0.04)",
    padding: "12px 20px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.06)",
  },

  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  statLabel: {
    fontSize: "11px",
    textTransform: "uppercase",
    opacity: "0.5",
    letterSpacing: "0.5px",
  },

  statValue: {
    fontSize: "18px",
    fontWeight: "700",
    marginTop: "2px",
  },

  // Card
  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "24px",
    flex: 1,
  },

  cardLight: {
    background: "rgba(255,255,255,0.6)",
    border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: "16px",
    padding: "24px",
    flex: 1,
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  },

  cardTitle: {
    fontSize: "18px",
    fontWeight: "700",
    margin: 0,
  },

  cardBadge: {
    fontSize: "12px",
    fontWeight: "600",
    padding: "4px 14px",
    borderRadius: "20px",
    background: "rgba(76, 175, 80, 0.12)",
    color: "#4CAF50",
    border: "1px solid rgba(76, 175, 80, 0.15)",
  },

  // Chart
  chart: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  row: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  labelRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  label: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    fontWeight: "500",
  },

  colorDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    display: "inline-block",
  },

  value: {
    fontSize: "14px",
    fontWeight: "600",
    opacity: "0.9",
  },

  barWrapper: {
    height: "8px",
    background: "rgba(255,255,255,0.06)",
    borderRadius: "4px",
    overflow: "hidden",
    position: "relative",
  },

  barWrapperLight: {
    height: "8px",
    background: "rgba(0,0,0,0.06)",
    borderRadius: "4px",
    overflow: "hidden",
    position: "relative",
  },

  bar: {
    height: "100%",
    borderRadius: "4px",
    transition: "width 1s ease",
  },

  percentage: {
    fontSize: "12px",
    opacity: "0.5",
    textAlign: "right",
  },

  // Chart Footer
  chartFooter: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "24px",
    paddingTop: "20px",
    borderTop: "1px solid rgba(255,255,255,0.06)",
  },

  chartFooterLight: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "24px",
    paddingTop: "20px",
    borderTop: "1px solid rgba(0,0,0,0.06)",
  },

  footerLabel: {
    display: "block",
    fontSize: "12px",
    opacity: "0.5",
    textAlign: "center",
  },

  footerValue: {
    display: "block",
    fontSize: "16px",
    fontWeight: "700",
    marginTop: "2px",
    textAlign: "center",
  },

  // Insights
  insights: {
    marginTop: "24px",
    flexShrink: 0,
  },

  insightsLight: {
    marginTop: "24px",
    flexShrink: 0,
  },

  insightsTitle: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "16px",
  },

  insightsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
  },

  insightCard: {
    display: "flex",
    gap: "12px",
    padding: "16px 20px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "10px",
    alignItems: "center",
  },

  insightCardLight: {
    display: "flex",
    gap: "12px",
    padding: "16px 20px",
    background: "rgba(255,255,255,0.6)",
    border: "1px solid rgba(0,0,0,0.06)",
    borderRadius: "10px",
    alignItems: "center",
  },

  insightIcon: {
    fontSize: "28px",
    flexShrink: 0,
  },

  insightCardTitle: {
    fontSize: "14px",
    fontWeight: "600",
    margin: 0,
  },

  insightCardText: {
    fontSize: "13px",
    opacity: "0.7",
    margin: "2px 0 0",
  },
};