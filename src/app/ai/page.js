"use client";

import { useState } from "react";

export default function AIPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const updatedMessages = [
      ...messages,
      { role: "user", content: input },
    ];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: updatedMessages }),
    });

    const data = await res.json();

    setMessages([
      ...updatedMessages,
      {
        role: "assistant",
        content: data.reply || "No response received.",
      },
    ]);

    setLoading(false);
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
            
            .mobile-menu.open {
              display: flex !important;
              flex-direction: column;
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
            
            .chat-title {
              font-size: 16px !important;
            }
            
            .chat-subtitle {
              font-size: 12px !important;
            }
            
            .chat-header {
              padding: 12px 16px !important;
            }
            
            .chat-messages {
              padding: 16px !important;
            }
            
            .chat-input {
              padding: 12px 16px !important;
            }
            
            .empty-title {
              font-size: 18px !important;
            }
            
            .empty-text {
              font-size: 14px !important;
            }
            
            .suggestions {
              flex-direction: column !important;
              width: 100% !important;
            }
            
            .suggestion-chip {
              width: 100% !important;
              text-align: center !important;
            }
            
            .message {
              max-width: 90% !important;
              font-size: 14px !important;
            }
            
            .input {
              font-size: 14px !important;
            }
            
            .send-button {
              padding: 10px 16px !important;
              font-size: 14px !important;
            }
            
            .chat-status {
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
            <a href="/ai" style={{...styles.sidebarLink, ...styles.sidebarLinkActive}} onClick={() => setIsMenuOpen(false)}>
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

        {/* MAIN CHAT AREA */}
        <div style={styles.mainArea}>
          {/* CHAT HEADER */}
          <div style={darkMode ? styles.chatHeader : styles.chatHeaderLight} className="chat-header">
            <div style={styles.chatHeaderLeft}>
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
              <div>
                <h1 style={styles.chatTitle} className="chat-title">AI Excel Assistant</h1>
                <p style={styles.chatSubtitle} className="chat-subtitle">Ask about Excel, budgeting, and financial reporting</p>
              </div>
            </div>
            <div style={styles.chatStatus} className="chat-status">
              <span style={styles.statusDot}></span>
              <span style={styles.statusText}>Online</span>
            </div>
          </div>

          {/* CHAT MESSAGES */}
          <div style={darkMode ? styles.chatMessages : styles.chatMessagesLight} className="chat-messages">
            {messages.length === 0 ? (
              <div style={styles.emptyState}>
                <div style={styles.emptyIcon}>💬</div>
                <h3 style={styles.emptyTitle} className="empty-title">Start a Conversation</h3>
                <p style={styles.emptyText} className="empty-text">
                  Ask me anything about Excel formulas, budget planning, 
                  financial reporting, or government accounting.
                </p>
                <div style={styles.suggestions} className="suggestions">
                  <button 
                    onClick={() => setInput("How do I create a budget variance report?")}
                    style={darkMode ? styles.suggestionChip : styles.suggestionChipLight}
                    className="suggestion-chip"
                  >
                    📊 Budget Variance Report
                  </button>
                  <button 
                    onClick={() => setInput("What Excel formula should I use for SUM?")}
                    style={darkMode ? styles.suggestionChip : styles.suggestionChipLight}
                    className="suggestion-chip"
                  >
                    📐 Excel SUM Formula
                  </button>
                  <button 
                    onClick={() => setInput("How to track revenue by department?")}
                    style={darkMode ? styles.suggestionChip : styles.suggestionChipLight}
                    className="suggestion-chip"
                  >
                    💰 Revenue Tracking
                  </button>
                  <button 
                    onClick={() => setInput("Explain pivot tables for budget analysis")}
                    style={darkMode ? styles.suggestionChip : styles.suggestionChipLight}
                    className="suggestion-chip"
                  >
                    📊 Pivot Tables
                  </button>
                </div>
              </div>
            ) : (
              <div style={styles.messagesContainer}>
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    style={{
                      ...styles.message,
                      alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                      background: msg.role === "user" 
                        ? darkMode ? "#2E7D32" : "#4CAF50"
                        : darkMode ? "rgba(255,255,255,0.06)" : "#E8EDF5",
                      color: msg.role === "user" ? "white" : darkMode ? "#E8EDF5" : "#1A2332",
                      border: msg.role === "assistant" && darkMode ? "1px solid rgba(255,255,255,0.08)" : "none",
                    }}
                    className="message"
                  >
                    {renderMessage(msg.content, darkMode)}
                  </div>
                ))}
              </div>
            )}

            {/* LOADING */}
            {loading && (
              <div style={styles.loadingRow}>
                <div style={darkMode ? styles.spinner : styles.spinnerLight}></div>
                <p style={darkMode ? styles.loadingText : styles.loadingTextLight}>
                  Thinking...
                </p>
              </div>
            )}
          </div>

          {/* CHAT INPUT */}
          <div style={darkMode ? styles.chatInput : styles.chatInputLight} className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Ask about Excel, budgeting, reports..."
              style={darkMode ? styles.input : styles.inputLight}
              className="input"
            />
            <button 
              onClick={sendMessage} 
              style={darkMode ? styles.sendButton : styles.sendButtonLight}
              className="send-button"
              disabled={loading}
            >
              {loading ? '⏳' : '📤'} Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ================= RENDER FUNCTION ================= */

function renderMessage(text, darkMode) {
  if (!text) return "";

  const lines = text.split("\n");
  const elements = [];
  let i = 0;
  let inCodeBlock = false;
  let codeContent = [];
  let inTable = false;
  let tableRows = [];

  while (i < lines.length) {
    const line = lines[i];

    // Code block detection
    if (line.trim().startsWith("```")) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeContent = [];
        i++;
        continue;
      } else {
        inCodeBlock = false;
        elements.push(
          <pre key={`code-${i}`} style={darkMode ? styles.codeBlockDark : styles.codeBlockLight}>
            <code>{codeContent.join("\n")}</code>
          </pre>
        );
        i++;
        continue;
      }
    }

    if (inCodeBlock) {
      codeContent.push(line);
      i++;
      continue;
    }

    // Table detection (lines with |)
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
      tableRows.push(line);
      i++;
      if (i < lines.length && lines[i].trim().startsWith("|")) {
        continue;
      } else {
        inTable = false;
        // Filter out separator rows (rows with ---)
        const tableRowsToRender = tableRows.filter(row => {
          const cells = row.split("|").filter(cell => cell.trim() !== "");
          return !cells.every(cell => cell.trim().match(/^[-:]+$/));
        });
        if (tableRowsToRender.length > 0) {
          elements.push(
            <div key={`table-${i}`} style={darkMode ? styles.tableWrapperDark : styles.tableWrapperLight}>
              <table style={darkMode ? styles.tableDark : styles.tableLight}>
                <tbody>
                  {tableRowsToRender.map((row, idx) => {
                    const cells = row.split("|").filter(cell => cell.trim() !== "");
                    const isHeader = idx === 0;
                    // Check if this is a total row (contains "Total" or "TOTAL")
                    const isTotalRow = cells.some(cell => 
                      cell.trim().toLowerCase().includes("total")
                    );
                    return (
                      <tr key={idx} style={isTotalRow ? (darkMode ? styles.totalRowDark : styles.totalRowLight) : {}}>
                        {cells.map((cell, cellIdx) => {
                          // Clean up the cell content
                          let trimmed = cell.trim();
                          
                          // Check if this is a numeric cell
                          const isNumeric = !isNaN(parseFloat(trimmed.replace(/,/g, "").replace(/\*/g, ""))) && trimmed !== "";
                          
                          // Process inline formatting (bold, etc.) within the cell
                          const renderedContent = renderInlineContent(trimmed, darkMode);
                          
                          if (isHeader && !isTotalRow) {
                            return (
                              <th key={cellIdx} style={darkMode ? styles.tableHeaderDark : styles.tableHeaderLight}>
                                {renderedContent}
                              </th>
                            );
                          } else {
                            return (
                              <td key={cellIdx} style={{
                                ...(darkMode ? styles.tableCellDark : styles.tableCellLight),
                                ...(isTotalRow ? (darkMode ? styles.totalCellDark : styles.totalCellLight) : {}),
                                ...(isNumeric && !isTotalRow ? { fontWeight: "500" } : {})
                              }}>
                                {renderedContent}
                              </td>
                            );
                          }
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        }
        tableRows = [];
        continue;
      }
    }

    // Headings
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} style={darkMode ? styles.h3Dark : styles.h3Light}>
          {line.replace("### ", "")}
        </h3>
      );
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} style={darkMode ? styles.h2Dark : styles.h2Light}>
          {line.replace("## ", "")}
        </h2>
      );
      i++;
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      elements.push(<div key={i} style={{height: "4px"}}></div>);
      i++;
      continue;
    }

    // Numbered list
    const numbered = line.match(/^(\d+)\.\s(.*)/);
    if (numbered) {
      elements.push(
        <div key={i} style={darkMode ? styles.listItemDark : styles.listItemLight}>
          <b>{numbered[1]}.</b> {renderInlineContent(numbered[2], darkMode)}
        </div>
      );
      i++;
      continue;
    }

    // Bullet list
    const bullet = line.match(/^-\s(.*)/);
    if (bullet) {
      elements.push(
        <div key={i} style={darkMode ? styles.listItemDark : styles.listItemLight}>
          • {renderInlineContent(bullet[1], darkMode)}
        </div>
      );
      i++;
      continue;
    }

    // Regular paragraph
    if (line.trim()) {
      elements.push(
        <p key={i} style={darkMode ? styles.paragraphDark : styles.paragraphLight}>
          {renderInlineContent(line, darkMode)}
        </p>
      );
    }
    i++;
  }

  return elements;
}

function renderInlineContent(text, darkMode) {
  if (!text) return "";

  // Process bold text
  const parts = [];
  let remaining = text;
  let boldRegex = /\*\*(.*?)\*\*/g;
  let match;
  let lastIndex = 0;

  while ((match = boldRegex.exec(remaining)) !== null) {
    if (match.index > lastIndex) {
      parts.push(remaining.substring(lastIndex, match.index));
    }
    parts.push(<strong key={`bold-${match.index}`}>{match[1]}</strong>);
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < remaining.length) {
    parts.push(remaining.substring(lastIndex));
  }

  if (parts.length === 0) {
    return text;
  }

  return parts;
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
    marginRight: "12px",
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

  // Chat Header Left
  chatHeaderLeft: {
    display: "flex",
    alignItems: "center",
  },

  // Main Area
  mainArea: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },

  // Chat Header
  chatHeader: {
    padding: "20px 32px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
  },

  chatHeaderLight: {
    padding: "20px 32px",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
  },

  chatTitle: {
    fontSize: "20px",
    fontWeight: "700",
    margin: 0,
  },

  chatSubtitle: {
    fontSize: "14px",
    opacity: "0.6",
    margin: "2px 0 0",
  },

  chatStatus: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    opacity: "0.7",
  },

  statusDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#4CAF50",
    animation: "pulse 2s infinite",
  },

  // Chat Messages
  chatMessages: {
    flex: 1,
    padding: "24px 32px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    background: "rgba(255,255,255,0.02)",
  },

  chatMessagesLight: {
    flex: 1,
    padding: "24px 32px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    background: "rgba(255,255,255,0.4)",
  },

  messagesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    flex: 1,
  },

  message: {
    padding: "12px 18px",
    borderRadius: "12px",
    maxWidth: "80%",
    wordWrap: "break-word",
  },

  // Empty State
  emptyState: {
    textAlign: "center",
    padding: "60px 20px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  emptyIcon: {
    fontSize: "56px",
    marginBottom: "16px",
  },

  emptyTitle: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "8px",
  },

  emptyText: {
    fontSize: "16px",
    opacity: "0.7",
    maxWidth: "450px",
    marginBottom: "28px",
  },

  suggestions: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "600px",
  },

  suggestionChip: {
    padding: "8px 18px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    color: "#E8EDF5",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.2s",
  },

  suggestionChipLight: {
    padding: "8px 18px",
    background: "rgba(255,255,255,0.6)",
    border: "1px solid rgba(0,0,0,0.06)",
    borderRadius: "20px",
    color: "#1A2332",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.2s",
  },

  // Loading
  loadingRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px 0",
  },

  spinner: {
    width: "18px",
    height: "18px",
    border: "3px solid rgba(255,255,255,0.1)",
    borderTop: "3px solid #4CAF50",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },

  spinnerLight: {
    width: "18px",
    height: "18px",
    border: "3px solid rgba(0,0,0,0.1)",
    borderTop: "3px solid #4CAF50",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },

  loadingText: {
    fontSize: "14px",
    opacity: "0.6",
  },

  loadingTextLight: {
    fontSize: "14px",
    opacity: "0.6",
    color: "#1A2332",
  },

  // Chat Input
  chatInput: {
    padding: "20px 32px",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    display: "flex",
    gap: "12px",
    flexShrink: 0,
    background: "rgba(255,255,255,0.02)",
  },

  chatInputLight: {
    padding: "20px 32px",
    borderTop: "1px solid rgba(0,0,0,0.06)",
    display: "flex",
    gap: "12px",
    flexShrink: 0,
    background: "rgba(255,255,255,0.4)",
  },

  input: {
    flex: 1,
    padding: "12px 18px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    color: "#E8EDF5",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s",
  },

  inputLight: {
    flex: 1,
    padding: "12px 18px",
    borderRadius: "10px",
    border: "1px solid rgba(0,0,0,0.08)",
    background: "rgba(255,255,255,0.6)",
    color: "#1A2332",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s",
  },

  sendButton: {
    padding: "12px 28px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
    transition: "all 0.2s",
    whiteSpace: "nowrap",
  },

  sendButtonLight: {
    padding: "12px 28px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
    transition: "all 0.2s",
    whiteSpace: "nowrap",
  },

  // Message Render Styles - Enhanced
  paragraphDark: {
    margin: "4px 0",
    color: "#E8EDF5",
  },

  paragraphLight: {
    margin: "4px 0",
    color: "#1A2332",
  },

  h3Dark: {
    margin: "8px 0",
    fontWeight: "700",
    color: "#E8EDF5",
    fontSize: "18px",
  },

  h3Light: {
    margin: "8px 0",
    fontWeight: "700",
    color: "#1A2332",
    fontSize: "18px",
  },

  h2Dark: {
    fontSize: "20px",
    fontWeight: "700",
    margin: "12px 0 8px",
    color: "#E8EDF5",
  },

  h2Light: {
    fontSize: "20px",
    fontWeight: "700",
    margin: "12px 0 8px",
    color: "#1A2332",
  },

  listItemDark: {
    margin: "4px 0",
    color: "#E8EDF5",
  },

  listItemLight: {
    margin: "4px 0",
    color: "#1A2332",
  },

  // Code blocks
  codeBlockDark: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "8px",
    padding: "12px 16px",
    overflow: "auto",
    fontSize: "14px",
    fontFamily: "'Courier New', monospace",
    color: "#E8EDF5",
    margin: "8px 0",
  },

  codeBlockLight: {
    background: "rgba(0,0,0,0.05)",
    border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: "8px",
    padding: "12px 16px",
    overflow: "auto",
    fontSize: "14px",
    fontFamily: "'Courier New', monospace",
    color: "#1A2332",
    margin: "8px 0",
  },

  // Tables
  tableWrapperDark: {
    overflowX: "auto",
    margin: "8px 0",
  },

  tableWrapperLight: {
    overflowX: "auto",
    margin: "8px 0",
  },

  tableDark: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
    color: "#E8EDF5",
  },

  tableLight: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
    color: "#1A2332",
  },

  tableHeaderDark: {
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "8px 12px",
    textAlign: "left",
    background: "rgba(255,255,255,0.05)",
    fontWeight: "600",
  },

  tableHeaderLight: {
    border: "1px solid rgba(0,0,0,0.1)",
    padding: "8px 12px",
    textAlign: "left",
    background: "rgba(0,0,0,0.03)",
    fontWeight: "600",
  },

  tableCellDark: {
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "6px 12px",
  },

  tableCellLight: {
    border: "1px solid rgba(0,0,0,0.08)",
    padding: "6px 12px",
  },

  totalRowDark: {
    background: "rgba(76, 175, 80, 0.08)",
    fontWeight: "600",
  },

  totalRowLight: {
    background: "rgba(76, 175, 80, 0.05)",
    fontWeight: "600",
  },

  totalCellDark: {
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "6px 12px",
    fontWeight: "600",
    color: "#4CAF50",
  },

  totalCellLight: {
    border: "1px solid rgba(0,0,0,0.08)",
    padding: "6px 12px",
    fontWeight: "600",
    color: "#2E7D32",
  },
};

// Add animations
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes pulse {
      0% { opacity: 1; }
      50% { opacity: 0.4; }
      100% { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}