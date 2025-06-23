import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hotel ZY - Luxury Accommodation in Rangamati",
  description:
    "Experience luxury and comfort at Hotel ZY in Rangamati. Book your perfect stay with modern amenities, beautiful rooms, and exceptional service.",
  keywords: "hotel, Rangamati, accommodation, luxury, booking, Bangladesh, travel",
  authors: [{ name: "Hotel ZY" }],
  creator: "Hotel ZY",
  publisher: "Hotel ZY",
  robots: "index, follow",
  openGraph: {
    title: "Hotel ZY - Luxury Accommodation in Rangamati",
    description:
      "Experience luxury and comfort at Hotel ZY in Rangamati. Book your perfect stay with modern amenities.",
    type: "website",
    locale: "en_US",
    siteName: "Hotel ZY",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel ZY - Luxury Accommodation in Rangamati",
    description: "Experience luxury and comfort at Hotel ZY in Rangamati.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} font-mono`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
