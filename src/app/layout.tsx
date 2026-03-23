import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zoltrok Tech LLP — AI-Powered Software Development",
  description:
    "Build smarter apps with AI-powered development. One platform. Limitless solutions. Web, mobile, AI, and emerging tech services.",
  keywords: [
    "AI development",
    "software development",
    "mobile app development",
    "web development",
    "Zoltrok Tech",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
