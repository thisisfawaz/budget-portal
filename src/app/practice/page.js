"use client";

import { useState } from "react";

export default function PracticePage() {
  const [darkMode, setDarkMode] = useState(true);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showHint, setShowHint] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTask = (taskId) => {
    setCompletedTasks(prev =>
      prev.includes(taskId)
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const toggleHint = (taskId) => {
    setShowHint(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  // Hint content for each exercise
  const hints = {
    1: "💡 Hint: Use =SUM(A2:A10) to add all values in cells A2 through A10. Remember to check that all revenue values are in the correct format.",
    2: "💡 Hint: Create a new column for variance: =Actual - Budgeted. Then use conditional formatting to highlight any variance greater than 10% of the budget.",
    3: "💡 Hint: Use =SUM(range) to get total budget, then calculate percentage: =Department_Budget/Total_Budget * 100. Format as percentage.",
    4: "💡 Hint: Organize your data with clear sections: Revenue, Expenditure, and Variance. Use =SUM() for totals and =IF() for conditional formatting.",
    5: "💡 Hint: Select your data range, go to Insert > PivotTable. Drag Department to Rows, Quarter to Columns, and Revenue to Values.",
    6: "💡 Hint: Use =FORECAST() or =TREND() functions. You'll need historical data and the period you want to forecast.",
    7: "💡 Hint: Use Data > Data Validation. Set criteria like 'List' for budget categories, and set 'Whole number' for amounts.",
    8: "💡 Hint: Use What-If Analysis > Scenario Manager. Create different scenarios with varying budget allocations and compare results."
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
            
            .hero-title {
              font-size: 28px !important;
            }
            
            .hero-subtitle {
              font-size: 16px !important;
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
            
            .grid {
              grid-template-columns: 1fr !important;
              padding: 0 16px 20px !important;
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
            
            .progress-info {
              font-size: 12px !important;
            }
            
            .card-title {
              font-size: 16px !important;
            }
            
            .card-text {
              font-size: 14px !important;
            }
            
            .task-box {
              font-size: 13px !important;
            }
            
            .start-button, .completed-button, .hint-button {
              font-size: 13px !important;
              padding: 6px 12px !important;
            }
            
            .hint-box {
              font-size: 13px !important;
            }
            
            .achievement {
              padding: 24px 16px !important;
              margin: 0 16px 32px !important;
            }
            
            .achievement-title {
              font-size: 20px !important;
            }
            
            .achievement-text {
              font-size: 14px !important;
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
            <a href="/practice" style={{...styles.navItem, ...styles.activeNavItem}}>
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
          <a href="/practice" style={{...styles.mobileLink, ...styles.mobileLinkActive}} onClick={() => setIsMenuOpen(false)}>
            <span style={styles.navIcon}>🎯</span> Practice
          </a>
          <a href="/about" style={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
            <span style={styles.navIcon}>📖</span> About
          </a>
        </div>

        {/* HEADER */}
        <div style={styles.header} className="header">
          <div style={darkMode ? styles.badge : styles.badgeLight}>
            🎯 Interactive Learning
          </div>
          <h1 style={styles.title} className="title">Practice Exercises</h1>
          <p style={styles.subtitle} className="subtitle">
            Real-world Excel and budgeting scenarios for Local Government officers
          </p>
          <div style={styles.progressWrapper}>
            <div style={styles.progressInfo} className="progress-info">
              <span>Progress: {completedTasks.length}/8 tasks completed</span>
              <span style={styles.progressPercent}>
                {Math.round((completedTasks.length / 8) * 100)}%
              </span>
            </div>
            <div style={darkMode ? styles.progressBar : styles.progressBarLight}>
              <div 
                style={{
                  ...styles.progressFill,
                  width: `${(completedTasks.length / 8) * 100}%`,
                  background: completedTasks.length === 8 ? '#4CAF50' : '#4CAF50'
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* EXERCISES */}
        <div style={styles.grid} className="grid">
          {/* Exercise 1 */}
          <div style={darkMode ? styles.card : styles.cardLight}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle} className="card-title">📊 Revenue Summation Task</h3>
              <div style={styles.difficultyBadge}>Beginner</div>
            </div>
            <p style={styles.cardText} className="card-text">
              You are given monthly revenue data from markets, permits, and levies.
              Calculate total revenue using Excel SUM function.
            </p>
            <div style={darkMode ? styles.taskBox : styles.taskBoxLight} className="task-box">
              <strong>Task:</strong> Use =SUM() to calculate total revenue from A2:A10
            </div>
            <div style={styles.cardActions}>
              <button 
                onClick={() => toggleTask(1)}
                style={completedTasks.includes(1) ? styles.completedButton : styles.startButton}
                className="start-button"
              >
                {completedTasks.includes(1) ? '✅ Completed' : '▶️ Mark as Complete'}
              </button>
              <button 
                onClick={() => toggleHint(1)} 
                style={styles.hintButton}
                className="hint-button"
              >
                💡 Hint
              </button>
            </div>
            {showHint[1] && (
              <div style={darkMode ? styles.hintBox : styles.hintBoxLight} className="hint-box">
                {hints[1]}
              </div>
            )}
          </div>

          {/* Exercise 2 */}
          <div style={darkMode ? styles.card : styles.cardLight}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle} className="card-title">💰 Budget Variance Analysis</h3>
              <div style={{...styles.difficultyBadge, ...styles.intermediateBadge}}>Intermediate</div>
            </div>
            <p style={styles.cardText} className="card-text">
              Compare planned vs actual expenditure for 5 departments and identify 
              significant variances that need management attention.
            </p>
            <div style={darkMode ? styles.taskBox : styles.taskBoxLight} className="task-box">
              <strong>Task:</strong> Calculate variance using (Actual - Budgeted) and identify departments with {'>'}10% variance
            </div>
            <div style={styles.cardActions}>
              <button 
                onClick={() => toggleTask(2)}
                style={completedTasks.includes(2) ? styles.completedButton : styles.startButton}
                className="start-button"
              >
                {completedTasks.includes(2) ? '✅ Completed' : '▶️ Mark as Complete'}
              </button>
              <button 
                onClick={() => toggleHint(2)} 
                style={styles.hintButton}
                className="hint-button"
              >
                💡 Hint
              </button>
            </div>
            {showHint[2] && (
              <div style={darkMode ? styles.hintBox : styles.hintBoxLight} className="hint-box">
                {hints[2]}
              </div>
            )}
          </div>

          {/* Exercise 3 */}
          <div style={darkMode ? styles.card : styles.cardLight}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle} className="card-title">📉 Monthly Expense Breakdown</h3>
              <div style={{...styles.difficultyBadge, ...styles.intermediateBadge}}>Intermediate</div>
            </div>
            <p style={styles.cardText} className="card-text">
              Organize departmental spending data and create a summary report showing 
              percentage of total budget for each department.
            </p>
            <div style={darkMode ? styles.taskBox : styles.taskBoxLight} className="task-box">
              <strong>Task:</strong> Use SUM and percentage calculations to show budget distribution
            </div>
            <div style={styles.cardActions}>
              <button 
                onClick={() => toggleTask(3)}
                style={completedTasks.includes(3) ? styles.completedButton : styles.startButton}
                className="start-button"
              >
                {completedTasks.includes(3) ? '✅ Completed' : '▶️ Mark as Complete'}
              </button>
              <button 
                onClick={() => toggleHint(3)} 
                style={styles.hintButton}
                className="hint-button"
              >
                💡 Hint
              </button>
            </div>
            {showHint[3] && (
              <div style={darkMode ? styles.hintBox : styles.hintBoxLight} className="hint-box">
                {hints[3]}
              </div>
            )}
          </div>

          {/* Exercise 4 */}
          <div style={darkMode ? styles.card : styles.cardLight}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle} className="card-title">🧾 Financial Reporting Exercise</h3>
              <div style={{...styles.difficultyBadge, ...styles.advancedBadge}}>Advanced</div>
            </div>
            <p style={styles.cardText} className="card-text">
              Prepare a comprehensive monthly financial report for an LGA office, 
              including revenue, expenditure, and variance analysis.
            </p>
            <div style={darkMode ? styles.taskBox : styles.taskBoxLight} className="task-box">
              <strong>Task:</strong> Structure data into a professional report format with charts
            </div>
            <div style={styles.cardActions}>
              <button 
                onClick={() => toggleTask(4)}
                style={completedTasks.includes(4) ? styles.completedButton : styles.startButton}
                className="start-button"
              >
                {completedTasks.includes(4) ? '✅ Completed' : '▶️ Mark as Complete'}
              </button>
              <button 
                onClick={() => toggleHint(4)} 
                style={styles.hintButton}
                className="hint-button"
              >
                💡 Hint
              </button>
            </div>
            {showHint[4] && (
              <div style={darkMode ? styles.hintBox : styles.hintBoxLight} className="hint-box">
                {hints[4]}
              </div>
            )}
          </div>

          {/* Exercise 5 */}
          <div style={darkMode ? styles.card : styles.cardLight}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle} className="card-title">📊 Pivot Table Analysis</h3>
              <div style={{...styles.difficultyBadge, ...styles.advancedBadge}}>Advanced</div>
            </div>
            <p style={styles.cardText} className="card-text">
              Create a pivot table to analyze quarterly revenue by department and 
              identify trends in revenue collection.
            </p>
            <div style={darkMode ? styles.taskBox : styles.taskBoxLight} className="task-box">
              <strong>Task:</strong> Build a pivot table showing quarterly revenue by department
            </div>
            <div style={styles.cardActions}>
              <button 
                onClick={() => toggleTask(5)}
                style={completedTasks.includes(5) ? styles.completedButton : styles.startButton}
                className="start-button"
              >
                {completedTasks.includes(5) ? '✅ Completed' : '▶️ Mark as Complete'}
              </button>
              <button 
                onClick={() => toggleHint(5)} 
                style={styles.hintButton}
                className="hint-button"
              >
                💡 Hint
              </button>
            </div>
            {showHint[5] && (
              <div style={darkMode ? styles.hintBox : styles.hintBoxLight} className="hint-box">
                {hints[5]}
              </div>
            )}
          </div>

          {/* Exercise 6 */}
          <div style={darkMode ? styles.card : styles.cardLight}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle} className="card-title">📈 Forecasting Exercise</h3>
              <div style={{...styles.difficultyBadge, ...styles.advancedBadge}}>Advanced</div>
            </div>
            <p style={styles.cardText} className="card-text">
              Use historical data to forecast next quarter's revenue and identify 
              seasonal patterns in government revenue collection.
            </p>
            <div style={darkMode ? styles.taskBox : styles.taskBoxLight} className="task-box">
              <strong>Task:</strong> Apply forecast functions to predict future revenue
            </div>
            <div style={styles.cardActions}>
              <button 
                onClick={() => toggleTask(6)}
                style={completedTasks.includes(6) ? styles.completedButton : styles.startButton}
                className="start-button"
              >
                {completedTasks.includes(6) ? '✅ Completed' : '▶️ Mark as Complete'}
              </button>
              <button 
                onClick={() => toggleHint(6)} 
                style={styles.hintButton}
                className="hint-button"
              >
                💡 Hint
              </button>
            </div>
            {showHint[6] && (
              <div style={darkMode ? styles.hintBox : styles.hintBoxLight} className="hint-box">
                {hints[6]}
              </div>
            )}
          </div>

          {/* Exercise 7 */}
          <div style={darkMode ? styles.card : styles.cardLight}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle} className="card-title">📋 Data Validation Exercise</h3>
              <div style={{...styles.difficultyBadge, ...styles.intermediateBadge}}>Intermediate</div>
            </div>
            <p style={styles.cardText} className="card-text">
              Set up data validation rules for budget entry forms to prevent errors 
              and ensure data quality in financial reporting.
            </p>
            <div style={darkMode ? styles.taskBox : styles.taskBoxLight} className="task-box">
              <strong>Task:</strong> Create data validation rules for budget categories
            </div>
            <div style={styles.cardActions}>
              <button 
                onClick={() => toggleTask(7)}
                style={completedTasks.includes(7) ? styles.completedButton : styles.startButton}
                className="start-button"
              >
                {completedTasks.includes(7) ? '✅ Completed' : '▶️ Mark as Complete'}
              </button>
              <button 
                onClick={() => toggleHint(7)} 
                style={styles.hintButton}
                className="hint-button"
              >
                💡 Hint
              </button>
            </div>
            {showHint[7] && (
              <div style={darkMode ? styles.hintBox : styles.hintBoxLight} className="hint-box">
                {hints[7]}
              </div>
            )}
          </div>

          {/* Exercise 8 */}
          <div style={darkMode ? styles.card : styles.cardLight}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle} className="card-title">🎯 Scenario Analysis</h3>
              <div style={{...styles.difficultyBadge, ...styles.advancedBadge}}>Advanced</div>
            </div>
            <p style={styles.cardText} className="card-text">
              Perform scenario analysis on budget proposals to evaluate different 
              funding levels and their impact on service delivery.
            </p>
            <div style={darkMode ? styles.taskBox : styles.taskBoxLight} className="task-box">
              <strong>Task:</strong> Create what-if scenarios for budget allocation
            </div>
            <div style={styles.cardActions}>
              <button 
                onClick={() => toggleTask(8)}
                style={completedTasks.includes(8) ? styles.completedButton : styles.startButton}
                className="start-button"
              >
                {completedTasks.includes(8) ? '✅ Completed' : '▶️ Mark as Complete'}
              </button>
              <button 
                onClick={() => toggleHint(8)} 
                style={styles.hintButton}
                className="hint-button"
              >
                💡 Hint
              </button>
            </div>
            {showHint[8] && (
              <div style={darkMode ? styles.hintBox : styles.hintBoxLight} className="hint-box">
                {hints[8]}
              </div>
            )}
          </div>
        </div>

        {/* ACHIEVEMENT SECTION */}
        {completedTasks.length === 8 && (
          <div style={darkMode ? styles.achievement : styles.achievementLight} className="achievement">
            <div style={styles.achievementIcon}>🏆</div>
            <h3 style={styles.achievementTitle} className="achievement-title">All Exercises Complete!</h3>
            <p style={styles.achievementText} className="achievement-text">
              You've mastered all practice exercises. Ready for more challenges?
            </p>
            <a href="/ai" style={darkMode ? styles.ctaButton : styles.ctaButtonLight}>
              🚀 Try Advanced Scenarios
            </a>
          </div>
        )}

        {/* CTA SECTION */}
        <div style={styles.cta}>
          <div style={darkMode ? styles.ctaContent : styles.ctaContentLight} className="cta-content">
            <h2 style={styles.ctaTitle} className="cta-title">Need help with an exercise?</h2>
            <p style={styles.ctaText} className="cta-text">
              Our AI assistant can guide you through any Excel or budgeting challenge.
            </p>
            <a href="/ai" style={darkMode ? styles.ctaButton : styles.ctaButtonLight}>
              💬 Ask for Help
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
    marginBottom: "16px",
    background: "linear-gradient(135deg, #4CAF50, #81C784)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    fontSize: "20px",
    opacity: "0.8",
    maxWidth: "700px",
    margin: "0 auto 32px",
    lineHeight: "1.6",
  },

  // Progress
  progressWrapper: {
    maxWidth: "600px",
    margin: "0 auto",
  },

  progressInfo: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    marginBottom: "8px",
    opacity: "0.8",
  },

  progressPercent: {
    fontWeight: "700",
    color: "#4CAF50",
  },

  progressBar: {
    width: "100%",
    height: "8px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "4px",
    overflow: "hidden",
  },

  progressBarLight: {
    width: "100%",
    height: "8px",
    background: "rgba(0,0,0,0.08)",
    borderRadius: "4px",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: "4px",
    transition: "width 0.3s ease",
  },

  // Grid
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px 40px",
  },

  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "24px",
    borderRadius: "16px",
    transition: "transform 0.2s, box-shadow 0.2s",
    display: "flex",
    flexDirection: "column",
  },

  cardLight: {
    background: "rgba(255,255,255,0.6)",
    border: "1px solid rgba(0,0,0,0.08)",
    padding: "24px",
    borderRadius: "16px",
    transition: "transform 0.2s, box-shadow 0.2s",
    display: "flex",
    flexDirection: "column",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "12px",
  },

  cardTitle: {
    fontSize: "18px",
    fontWeight: "700",
    margin: 0,
  },

  difficultyBadge: {
    fontSize: "11px",
    fontWeight: "600",
    padding: "4px 12px",
    borderRadius: "12px",
    background: "rgba(76, 175, 80, 0.15)",
    color: "#4CAF50",
    whiteSpace: "nowrap",
  },

  intermediateBadge: {
    background: "rgba(255, 193, 7, 0.15)",
    color: "#F9A825",
  },

  advancedBadge: {
    background: "rgba(244, 67, 54, 0.15)",
    color: "#EF5350",
  },

  cardText: {
    fontSize: "15px",
    lineHeight: "1.6",
    opacity: "0.85",
    marginBottom: "16px",
    flex: 1,
  },

  taskBox: {
    background: "rgba(76, 175, 80, 0.06)",
    border: "1px solid rgba(76, 175, 80, 0.1)",
    padding: "12px",
    borderRadius: "8px",
    fontSize: "14px",
    marginBottom: "16px",
    lineHeight: "1.5",
  },

  taskBoxLight: {
    background: "rgba(76, 175, 80, 0.05)",
    border: "1px solid rgba(76, 175, 80, 0.15)",
    padding: "12px",
    borderRadius: "8px",
    fontSize: "14px",
    marginBottom: "16px",
    lineHeight: "1.5",
  },

  cardActions: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    flexWrap: "wrap",
  },

  startButton: {
    padding: "8px 16px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "background 0.2s",
    flex: 1,
  },

  completedButton: {
    padding: "8px 16px",
    background: "rgba(76, 175, 80, 0.1)",
    color: "#4CAF50",
    border: "1px solid rgba(76, 175, 80, 0.2)",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    flex: 1,
  },

  hintButton: {
    padding: "8px 16px",
    background: "rgba(255, 193, 7, 0.1)",
    color: "inherit",
    border: "1px solid rgba(255, 193, 7, 0.2)",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "background 0.2s",
    whiteSpace: "nowrap",
  },

  hintBox: {
    marginTop: "12px",
    padding: "12px 16px",
    background: "rgba(255, 193, 7, 0.06)",
    border: "1px solid rgba(255, 193, 7, 0.15)",
    borderRadius: "8px",
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#E8EDF5",
  },

  hintBoxLight: {
    marginTop: "12px",
    padding: "12px 16px",
    background: "rgba(255, 193, 7, 0.05)",
    border: "1px solid rgba(255, 193, 7, 0.15)",
    borderRadius: "8px",
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#1A2332",
  },

  // Achievement
  achievement: {
    maxWidth: "600px",
    margin: "0 auto 40px",
    padding: "40px",
    background: "rgba(76, 175, 80, 0.08)",
    border: "2px solid rgba(76, 175, 80, 0.2)",
    borderRadius: "16px",
    textAlign: "center",
  },

  achievementLight: {
    maxWidth: "600px",
    margin: "0 auto 40px",
    padding: "40px",
    background: "rgba(76, 175, 80, 0.06)",
    border: "2px solid rgba(76, 175, 80, 0.2)",
    borderRadius: "16px",
    textAlign: "center",
  },

  achievementIcon: {
    fontSize: "48px",
    marginBottom: "12px",
  },

  achievementTitle: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "8px",
  },

  achievementText: {
    fontSize: "16px",
    opacity: "0.8",
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

  footerCopy: {
    fontSize: "14px",
    opacity: "0.6",
  },
};