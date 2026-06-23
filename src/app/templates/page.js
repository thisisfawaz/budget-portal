"use client";

import { useState } from "react";
import ExcelJS from 'exceljs';

export default function TemplatesPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [downloadedTemplates, setDownloadedTemplates] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownload = async (templateId, templateName, templateData) => {
    try {
      // Create a new workbook
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Template');

      // Define columns
      worksheet.columns = templateData.columns;

      // Add rows
      templateData.rows.forEach(row => {
        worksheet.addRow(row);
      });

      // --- Apply Styling ---

      // 1. Style the header row (row 1)
      const headerRow = worksheet.getRow(1);
      headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 12 };
      headerRow.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: templateData.headerColor || 'FF2E7D32' }
      };
      headerRow.alignment = { horizontal: 'center', vertical: 'middle' };
      headerRow.height = 30;

      // 2. Style data rows with borders
      worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell) => {
          cell.border = {
            top: { style: 'thin', color: { argb: 'FFD0D0D0' } },
            left: { style: 'thin', color: { argb: 'FFD0D0D0' } },
            bottom: { style: 'thin', color: { argb: 'FFD0D0D0' } },
            right: { style: 'thin', color: { argb: 'FFD0D0D0' } },
          };
        });

        // Highlight total row (last row)
        if (rowNumber === worksheet.rowCount) {
          row.font = { bold: true, color: { argb: 'FF1B5E20' } };
          row.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFE8F5E9' }
          };
          row.height = 25;
        }
      });

      // 3. Format number columns
      const headerRowData = templateData.rows[0] || [];
      const columnTypes = templateData.columnTypes || [];
      
      worksheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) return; // Skip header row
        row.eachCell((cell, colNumber) => {
          // Check if this column should be formatted as number
          const colIndex = colNumber - 1;
          if (columnTypes[colIndex] === 'number' && typeof cell.value === 'number') {
            cell.numFmt = '#,##0.00';
            cell.alignment = { horizontal: 'right' };
          }
        });
      });

      // 4. Auto-fit columns
      worksheet.columns.forEach(column => {
        let maxLength = 0;
        column.eachCell({ includeEmpty: true }, (cell) => {
          const columnLength = cell.value ? cell.value.toString().length : 0;
          if (columnLength > maxLength) {
            maxLength = columnLength;
          }
        });
        column.width = Math.min(Math.max(maxLength + 5, 12), 30);
      });

      // Generate the Excel file
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      
      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = templateData.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      // Track download
      setDownloadedTemplates(prev => 
        prev.includes(templateId) ? prev : [...prev, templateId]
      );
    } catch (error) {
      console.error('Error generating Excel file:', error);
      alert('There was an error generating the Excel file. Please try again.');
    }
  };

  // Template data with proper column definitions
  const templates = [
    {
      id: 1,
      icon: "📊",
      title: "Budget Planning Template",
      description: "Structure for annual and quarterly budgeting with built-in formulas for planning and tracking allocations. Includes revenue projections, expenditure planning, and variance analysis.",
      category: "Budgeting",
      fileSize: "12 KB",
      fileType: ".xlsx",
      downloadCount: 342,
      fileName: "Budget_Planning_Template.xlsx",
      headerColor: "FF2E7D32",
      columnTypes: ['string', 'string', 'number', 'number', 'number'],
      columns: [
        { header: 'Department', key: 'dept', width: 20 },
        { header: 'Budget Category', key: 'category', width: 20 },
        { header: 'Planned Amount', key: 'planned', width: 18 },
        { header: 'Actual Amount', key: 'actual', width: 18 },
        { header: 'Variance', key: 'variance', width: 16 }
      ],
      rows: [
        ['Administration', 'Personnel', 1500000, 1450000, 50000],
        ['Administration', 'Operations', 850000, 820000, 30000],
        ['Health', 'Primary Care', 2000000, 1950000, 50000],
        ['Health', 'Public Health', 1200000, 1180000, 20000],
        ['Education', 'Primary', 1800000, 1750000, 50000],
        ['Infrastructure', 'Roads', 3000000, 2900000, 100000],
        ['TOTAL', '', 10350000, 10050000, 300000]
      ]
    },
    {
      id: 2,
      icon: "💰",
      title: "Revenue Tracking Sheet",
      description: "Track internally generated revenue sources such as market fees, tenement rates, permits, and other income streams with automatic summaries and trend analysis.",
      category: "Revenue",
      fileSize: "10 KB",
      fileType: ".xlsx",
      downloadCount: 287,
      fileName: "Revenue_Tracking_Sheet.xlsx",
      headerColor: "FF1976D2",
      columnTypes: ['string', 'number', 'number', 'number', 'number'],
      columns: [
        { header: 'Revenue Source', key: 'source', width: 22 },
        { header: 'Q1', key: 'q1', width: 14 },
        { header: 'Q2', key: 'q2', width: 14 },
        { header: 'Q3', key: 'q3', width: 14 },
        { header: 'Q4', key: 'q4', width: 14 }
      ],
      rows: [
        ['Market Fees', 450000, 480000, 520000, 490000],
        ['Tenement Rates', 320000, 340000, 360000, 350000],
        ['Permits', 180000, 200000, 220000, 210000],
        ['Licenses', 250000, 260000, 280000, 270000],
        ['Other Revenue', 100000, 120000, 110000, 130000],
        ['TOTAL', 1300000, 1400000, 1490000, 1450000]
      ]
    },
    {
      id: 3,
      icon: "📉",
      title: "Expenditure Tracker",
      description: "Monitor spending across departments, projects, and budget lines with automatic summaries, variance alerts, and department-by-department breakdowns.",
      category: "Expenditure",
      fileSize: "10 KB",
      fileType: ".xlsx",
      downloadCount: 415,
      fileName: "Expenditure_Tracker.xlsx",
      headerColor: "FFD32F2F",
      columnTypes: ['string', 'number', 'number', 'number', 'number'],
      columns: [
        { header: 'Department', key: 'dept', width: 20 },
        { header: 'Budget Allocation', key: 'budget', width: 18 },
        { header: 'Spent to Date', key: 'spent', width: 18 },
        { header: 'Remaining', key: 'remaining', width: 16 },
        { header: '% Spent', key: 'percent', width: 14 }
      ],
      rows: [
        ['Administration', 2350000, 1980000, 370000, 84.3],
        ['Health', 3200000, 2760000, 440000, 86.3],
        ['Education', 1800000, 1650000, 150000, 91.7],
        ['Infrastructure', 3000000, 2200000, 800000, 73.3],
        ['Social Welfare', 1500000, 1420000, 80000, 94.7],
        ['TOTAL', 11850000, 10010000, 1840000, 84.5]
      ]
    },
    {
      id: 4,
      icon: "🧾",
      title: "Monthly Financial Report",
      description: "Standard reporting format for monthly submissions and accountability tracking. Includes revenue, expenditure, and variance summary with visual charts.",
      category: "Reporting",
      fileSize: "10 KB",
      fileType: ".xlsx",
      downloadCount: 198,
      fileName: "Monthly_Financial_Report.xlsx",
      headerColor: "FF1B5E20",
      columnTypes: ['string', 'number', 'number', 'number', 'string'],
      columns: [
        { header: 'Item', key: 'item', width: 22 },
        { header: 'Budgeted', key: 'budgeted', width: 16 },
        { header: 'Actual', key: 'actual', width: 16 },
        { header: 'Variance', key: 'variance', width: 16 },
        { header: 'Status', key: 'status', width: 14 }
      ],
      rows: [
        ['REVENUE', '', '', '', ''],
        ['Market Fees', 150000, 142000, -8000, 'Under'],
        ['Tenement Rates', 100000, 108000, 8000, 'Over'],
        ['Permits', 60000, 58000, -2000, 'Under'],
        ['Total Revenue', 310000, 308000, -2000, ''],
        ['', '', '', '', ''],
        ['EXPENDITURE', '', '', '', ''],
        ['Personnel', 400000, 395000, 5000, 'Under'],
        ['Operations', 250000, 265000, -15000, 'Over'],
        ['Total Expenditure', 650000, 660000, -10000, '']
      ]
    },
    {
      id: 5,
      icon: "📈",
      title: "Variance Analysis Dashboard",
      description: "Comprehensive dashboard comparing budgeted vs actual figures with color-coded alerts for significant variances requiring management attention.",
      category: "Analysis",
      fileSize: "10 KB",
      fileType: ".xlsx",
      downloadCount: 156,
      fileName: "Variance_Analysis_Dashboard.xlsx",
      headerColor: "FF6A1B9A",
      columnTypes: ['string', 'number', 'number', 'number', 'number'],
      columns: [
        { header: 'Department', key: 'dept', width: 20 },
        { header: 'Budget', key: 'budget', width: 16 },
        { header: 'Actual', key: 'actual', width: 16 },
        { header: 'Variance', key: 'variance', width: 16 },
        { header: '% Variance', key: 'percent', width: 16 }
      ],
      rows: [
        ['Administration', 587500, 560000, 27500, 4.7],
        ['Health', 800000, 820000, -20000, -2.5],
        ['Education', 450000, 465000, -15000, -3.3],
        ['Infrastructure', 750000, 720000, 30000, 4.0],
        ['TOTAL', 2587500, 2565000, 22500, 0.9]
      ]
    },
    {
      id: 6,
      icon: "📋",
      title: "Procurement Plan Template",
      description: "Track procurement activities, contracts, and supplier information with automated reminders and progress tracking for each procurement phase.",
      category: "Procurement",
      fileSize: "10 KB",
      fileType: ".xlsx",
      downloadCount: 234,
      fileName: "Procurement_Plan_Template.xlsx",
      headerColor: "FFE65100",
      columnTypes: ['string', 'number', 'number', 'number', 'string'],
      columns: [
        { header: 'Item', key: 'item', width: 22 },
        { header: 'Quantity', key: 'qty', width: 14 },
        { header: 'Unit Cost', key: 'unitCost', width: 16 },
        { header: 'Total Cost', key: 'totalCost', width: 18 },
        { header: 'Status', key: 'status', width: 16 }
      ],
      rows: [
        ['Office Furniture', 50, 45000, 2250000, 'In Progress'],
        ['IT Equipment', 30, 85000, 2550000, 'Pending'],
        ['Stationery', 200, 5000, 1000000, 'Completed'],
        ['Vehicles', 3, 2500000, 7500000, 'Planning'],
        ['Building Materials', 100, 15000, 1500000, 'In Progress'],
        ['TOTAL', '', '', 14800000, '']
      ]
    }
  ];

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
            
            .stats {
              font-size: 13px !important;
              gap: 10px !important;
              flex-wrap: wrap !important;
            }
            
            .grid {
              grid-template-columns: 1fr !important;
              padding: 0 16px 20px !important;
            }
            
            .card-title {
              font-size: 16px !important;
            }
            
            .card-text {
              font-size: 14px !important;
            }
            
            .file-info {
              font-size: 12px !important;
              gap: 12px !important;
            }
            
            .download-button, .downloaded-button {
              font-size: 14px !important;
              padding: 8px 16px !important;
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
            <a href="/templates" style={{...styles.navItem, ...styles.activeNavItem}}>
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
          <a href="/templates" style={{...styles.mobileLink, ...styles.mobileLinkActive}} onClick={() => setIsMenuOpen(false)}>
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
            📥 Downloadable Resources
          </div>
          <h1 style={styles.title} className="title">Excel Templates Library</h1>
          <p style={styles.subtitle} className="subtitle">
            Ready-to-use budgeting and reporting templates for Local Government Budget & Planning Officers
          </p>
          <div style={styles.stats} className="stats">
            <span style={styles.statsText}>📁 {templates.length} Templates Available</span>
            <span style={styles.statsDivider}>•</span>
            <span style={styles.statsText}>📥 {templates.reduce((acc, t) => acc + t.downloadCount, 0)} Total Downloads</span>
          </div>
        </div>

        {/* TEMPLATES GRID */}
        <div style={styles.grid} className="grid">
          {templates.map((template) => (
            <div key={template.id} style={darkMode ? styles.card : styles.cardLight}>
              <div style={styles.cardHeader}>
                <div style={styles.cardIcon}>{template.icon}</div>
                <div style={styles.categoryBadge}>{template.category}</div>
              </div>
              <h3 style={styles.cardTitle} className="card-title">{template.title}</h3>
              <p style={styles.cardText} className="card-text">{template.description}</p>
              <div style={darkMode ? styles.fileInfo : styles.fileInfoLight} className="file-info">
                <span>📄 {template.fileType}</span>
                <span>📦 {template.fileSize}</span>
                <span>⬇️ {template.downloadCount}</span>
              </div>
              <div style={styles.cardActions}>
                <button 
                  onClick={() => handleDownload(
                    template.id, 
                    template.title, 
                    template
                  )}
                  style={downloadedTemplates.includes(template.id) ? styles.downloadedButton : styles.downloadButton}
                  className="download-button"
                >
                  {downloadedTemplates.includes(template.id) ? '✅ Downloaded' : '📥 Download'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div style={styles.cta}>
          <div style={darkMode ? styles.ctaContent : styles.ctaContentLight} className="cta-content">
            <h2 style={styles.ctaTitle} className="cta-title">Need a custom template?</h2>
            <p style={styles.ctaText} className="cta-text">
              Our AI assistant can help you create custom Excel templates tailored to your specific needs.
            </p>
            <a href="/ai" style={darkMode ? styles.ctaButton : styles.ctaButtonLight}>
              💬 Ask for Custom Template
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
    margin: "0 auto",
    lineHeight: "1.6",
  },

  stats: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    marginTop: "20px",
    opacity: "0.7",
    fontSize: "15px",
  },

  statsText: {
    fontWeight: "500",
  },

  statsDivider: {
    opacity: "0.3",
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

  cardIcon: {
    fontSize: "36px",
  },

  categoryBadge: {
    fontSize: "11px",
    fontWeight: "600",
    padding: "4px 12px",
    borderRadius: "12px",
    background: "rgba(76, 175, 80, 0.15)",
    color: "#4CAF50",
    whiteSpace: "nowrap",
  },

  cardTitle: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "8px",
  },

  cardText: {
    fontSize: "15px",
    lineHeight: "1.6",
    opacity: "0.85",
    marginBottom: "16px",
    flex: 1,
  },

  fileInfo: {
    display: "flex",
    gap: "16px",
    fontSize: "13px",
    opacity: "0.6",
    padding: "10px 0",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    marginBottom: "16px",
  },

  fileInfoLight: {
    display: "flex",
    gap: "16px",
    fontSize: "13px",
    opacity: "0.6",
    padding: "10px 0",
    borderTop: "1px solid rgba(0,0,0,0.06)",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
    marginBottom: "16px",
  },

  cardActions: {
    display: "flex",
    gap: "12px",
  },

  downloadButton: {
    padding: "10px 20px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
    transition: "background 0.2s, transform 0.2s",
    flex: 1,
  },

  downloadedButton: {
    padding: "10px 20px",
    background: "rgba(76, 175, 80, 0.1)",
    color: "#4CAF50",
    border: "1px solid rgba(76, 175, 80, 0.2)",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
    flex: 1,
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