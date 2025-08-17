import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Anshika Raj - Software Engineer | AI & Fintech Expert",
  description:
    "Portfolio of Anshika Raj, Software Engineer at PayPal specializing in AI integration, cloud infrastructure, and fintech solutions.",
  generator: "v0.app",
  keywords: ["Software Engineer", "PayPal", "Nasdaq", "AI", "Fintech", "Cloud Infrastructure", "React", "Python"],
  authors: [{ name: "Anshika Raj" }],
  openGraph: {
    title: "Anshika Raj - Software Engineer",
    description: "AI-driven Software Engineer at PayPal with expertise in fintech and cloud infrastructure",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
