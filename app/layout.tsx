import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import ThreeBackground from "@/components/ThreeBackground"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Ankesh Kumar Yadav | SOC Analyst & Cybersecurity Professional",
  description:
    "Ankesh Kumar Yadav is an aspiring SOC Analyst specializing in network security, vulnerability assessment, threat detection, and security monitoring.",
  authors: [{ name: "Ankesh Kumar Yadav" }],
  creator: "Ankesh Kumar Yadav",
}

export const viewport: Viewport = {
  themeColor: "#0b1c2d",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="relative font-sans antialiased">

        {/* Global 3D Particle Background */}
        <ThreeBackground />

        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>

        <Analytics />
      </body>
    </html>
  )
}