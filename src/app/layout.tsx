import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pablo Medina - Software Engineer',
  description: "Pablo Medina's portfolio showcasing his journey in full-stack development, including projects in React, Node.js, Python and other technologies.",
  keywords: ["Pablo Medina", "Software Engineer", "Portfolio", "Full-Stack Developer", "Javascript", "React", "Node.js", "Python", "Programming", "Web Development"],
  generator: 'Next.js',
  applicationName: "Pablo Medina's Portfolio",
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Pablo Medina',url: 'https://jpmm21.com'}],
  creator: 'Pablo Medina',
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
