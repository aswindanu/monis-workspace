import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Monis Workspace | Custom Desk Setup Builder",
  description:
    "Build and customize your ideal workspace with Monis Workspace. Create your dream desk setup with monitors, desk styles, and themes.",
  keywords: [
    "workspace builder",
    "desk setup",
    "monitor layout",
    "custom workspace",
    "ergonomic desk",
    "Monis Workspace",
  ],
  authors: [{ name: "Monis Workspace" }],
  openGraph: {
    title: "Monis Workspace | Custom Desk Setup Builder",
    description:
      "Design your perfect workspace setup with customizable desks, monitors, and themes.",
    type: "website",
    siteName: "Monis Workspace",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monis Workspace | Custom Desk Setup Builder",
    description: "Create your ideal desk setup with Monis Workspace.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
