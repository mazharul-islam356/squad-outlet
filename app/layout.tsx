import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "squad outlet | Premium E-commerce Development Squad",
  description:
    "squad outlet creates high-converting, professional e-commerce websites that drive sales and grow your business. Join our elite squad for custom development, mobile-first design, and ongoing support.",
  keywords:
    "squad outlet, e-commerce development, online store, website design, custom e-commerce, professional web development, squad",
  authors: [{ name: "squad outlet" }],
  openGraph: {
    title: "squad outlet | Premium E-commerce Development Squad",
    description:
      "squad outlet creates high-converting, professional e-commerce websites that drive sales and grow your business.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "squad outlet | Premium E-commerce Development Squad",
    description:
      "squad outlet creates high-converting, professional e-commerce websites that drive sales and grow your business.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
