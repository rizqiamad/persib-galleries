import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PERSIB Gallery",
  description: "Player gallery for PERSIB",
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/loog 4 bintrang  1.svg"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
