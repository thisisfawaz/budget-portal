import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Budget AI - Excel Assistant",
  description: "Ask Excel questions and generate insights instantly.",
  icons: {
    icon: "/oxfam-logo.png",
  },
  openGraph: {
    title: "Budget AI",
    description: "Excel AI Assistant for smarter budgeting",
    url: "https://oxfam-project.4ther.com/",
    siteName: "Budget AI",
    images: [
      {
        url: "/budget-ai.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}