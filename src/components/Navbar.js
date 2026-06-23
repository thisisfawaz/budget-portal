import Link from "next/link";

export default function Navbar() {
  return (
    <header style={styles.nav}>
      <div style={styles.logo}>
        Budget & Planning Portal
      </div>

      <nav style={styles.navLinks}>
        <Link href="/" style={styles.link}>
          Home
        </Link>

        <Link href="/ai" style={styles.link}>
          AI Assistant
        </Link>

        <Link href="/templates" style={styles.link}>
          Templates
        </Link>

        <Link href="/practice" style={styles.link}>
          Practice
        </Link>

        <Link href="/about" style={styles.link}>
          About
        </Link>
      </nav>

      <Link href="/ai" style={styles.ctaButton}>
        Launch AI Assistant
      </Link>
    </header>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
  },

  logo: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "#44841A",
  },

  navLinks: {
    display: "flex",
    gap: "24px",
  },

  link: {
    textDecoration: "none",
    color: "#374151",
    fontWeight: "500",
  },

  ctaButton: {
    background: "#F16E22",
    color: "white",
    textDecoration: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    fontWeight: "600",
  },
};