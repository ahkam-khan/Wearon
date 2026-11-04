import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { SplashScreen } from "@/components/splash-screen"
import { CustomCursor } from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SDFM 2520 - Premium Hoodies",
  description: "Premium streetwear and comfortable hoodies",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-dark-900 text-gray-100">
        {/* Splash screen (disappears after load) */}
        <SplashScreen />

        {/* Custom cursor */}
        <CustomCursor />

        {/* Main content */}
        {children}
      </body>
    </html>
  )
}
